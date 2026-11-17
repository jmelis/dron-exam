// Valida el banco de preguntas. Uso: node tools/validate.mjs
// Sale con código 1 si hay errores. Ver CLAUDE.md («Reglas del banco de preguntas»).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="(data\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
for (const s of scripts) vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s });

const dataFiles = fs.readdirSync(path.join(root, "data")).filter(f => f.endsWith(".js")).map(f => "data/" + f);
const errors = [];
const warn = [];
for (const f of dataFiles) if (!scripts.includes(f)) errors.push(`${f} existe pero index.html no lo carga`);

const TOPICS = ctx.TOPICS, Q = ctx.QB.all;
const MAXPAGE = 161;
const ids = new Set();
const topicIds = new Set(TOPICS.map(t => t.id));
// Sesgo de longitud: si la correcta suele ser la más larga, se aprende a «adivinar por longitud».
let longestCorrect = 0, longestDistractor = 0, mcCount = 0;
const byTopic = {}, byType = {};

for (const q of Q) {
  const where = q.id || JSON.stringify(q).slice(0, 60);
  if (!q.id || !/^t\d{2}-\d{2,3}$/.test(q.id)) errors.push(`${where}: id con formato inválido`);
  if (ids.has(q.id)) errors.push(`${where}: id duplicado`);
  ids.add(q.id);
  if (!topicIds.has(q.t)) errors.push(`${where}: tema ${q.t} no existe`);
  if (q.id && Number(q.id.slice(1, 3)) !== q.t) errors.push(`${where}: el prefijo del id no coincide con el tema ${q.t}`);
  if (!q.q || q.q.length < 10) errors.push(`${where}: enunciado vacío`);
  if (!q.exp) errors.push(`${where}: falta exp`);
  const pages = Array.isArray(q.p) ? q.p : [q.p];
  if (!pages.length || pages.some(p => !Number.isInteger(p) || p < 1 || p > MAXPAGE)) errors.push(`${where}: página inválida ${JSON.stringify(q.p)}`);
  byTopic[q.t] = (byTopic[q.t] || 0) + 1;
  byType[q.type] = (byType[q.type] || 0) + 1;
  if (q.type === "mc") {
    mcCount++;
    if (!Array.isArray(q.o) || q.o.length !== 4) errors.push(`${where}: mc necesita 4 opciones`);
    else {
      if (new Set(q.o).size !== 4) errors.push(`${where}: opciones repetidas`);
      if (!Array.isArray(q.w) || q.w.length !== 4 || q.w[0] !== null || q.w.slice(1).some(x => !x || x.length < 8)) errors.push(`${where}: w debe ser [null, por qué no B, por qué no C, por qué no D]`);
      const lens = q.o.map(o => o.length);
      const maxD = Math.max(...lens.slice(1));
      if (lens[0] > maxD * 1.10) longestCorrect++;
      if (maxD > lens[0] * 1.10) longestDistractor++;
    }
  } else if (q.type === "tf") {
    if (typeof q.a !== "boolean") errors.push(`${where}: tf necesita a:true|false`);
  } else if (q.type === "order") {
    if (!Array.isArray(q.items) || q.items.length < 3) errors.push(`${where}: order necesita al menos 3 elementos`);
    else if (new Set(q.items).size !== q.items.length) errors.push(`${where}: elementos repetidos`);
  } else if (q.type === "match") {
    if (!Array.isArray(q.pairs) || q.pairs.length < 2 || q.pairs.some(p => !Array.isArray(p) || p.length !== 2)) errors.push(`${where}: match necesita pares [izq, der]`);
    else if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length || new Set(q.pairs.map(p => p[0])).size !== q.pairs.length) errors.push(`${where}: lados repetidos en match`);
  } else errors.push(`${where}: tipo desconocido ${q.type}`);
}

// Los IDs retirados no se pueden reutilizar nunca.
const retiredPath = path.join(root, "data", "retired-ids.json");
if (fs.existsSync(retiredPath)) {
  const retired = JSON.parse(fs.readFileSync(retiredPath, "utf8"));
  for (const id of retired) if (ids.has(id)) errors.push(`${id}: este id está retirado y no se puede reutilizar`);
}

for (const t of TOPICS) if (!byTopic[t.id]) warn.push(`El tema ${t.id} no tiene preguntas`);
if (mcCount && (longestCorrect / mcCount > 0.30 || longestCorrect > longestDistractor * 1.3))
  errors.push(`Sesgo de longitud: la correcta es >10 % más larga que todas las demás en ${longestCorrect}/${mcCount} (una incorrecta lo es en ${longestDistractor}). Igualar longitudes.`);

console.log(`Preguntas: ${Q.length} · por tipo ${JSON.stringify(byType)}`);
console.log("Por tema:", TOPICS.map(t => `${t.id}:${byTopic[t.id] || 0}`).join("  "));
console.log(`Correcta claramente más larga: ${longestCorrect}/${mcCount} · una incorrecta claramente más larga: ${longestDistractor}/${mcCount}`);
warn.forEach(w => console.log("AVISO:", w));
if (errors.length) { errors.forEach(e => console.log("ERROR:", e)); process.exit(1); }
console.log("OK");
