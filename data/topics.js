// Temas del banco de preguntas.
// - `id` es ESTABLE: nunca se renumera ni se reutiliza (el progreso guardado depende de los IDs de pregunta, que llevan el tema delante).
// - `pages`: páginas del temario oficial AESA FOR-UAS-P01-DT01 Ed.09 (julio 2024),
//   fichero «_Formacion.temario.completo.Ed12.pdf» (161 páginas).
// - `nov`: el tema contiene novedades respecto al temario de 2022 (RD 517/2024, etc.).
window.TOPICS = [
  { id: 1,  name: "Normativa y conceptos básicos",          pages: "4–16",    nov: false },
  { id: 2,  name: "Categoría abierta: reglas generales",     pages: "17–24",   nov: false },
  { id: 3,  name: "Subcategorías A1 · A2 · A3",               pages: "25–35, 92", nov: true },
  { id: 4,  name: "Clases, «legacy», DRI y ruido",            pages: "24–38",   nov: true },
  { id: 5,  name: "Categorías específica y certificada",     pages: "39–43",   nov: false },
  { id: 6,  name: "Edades, registro y responsabilidades",    pages: "44–54",   nov: true },
  { id: 7,  name: "Principios de vuelo y meteorología",      pages: "60–69",   nov: false },
  { id: 8,  name: "El UAS: mando, sensores y mantenimiento", pages: "70–89",   nov: false },
  { id: 9,  name: "Espacio aéreo y zonas geográficas",       pages: "90–103",  nov: true },
  { id: 10, name: "Aeródromos, sucesos y U-Space",           pages: "104–114", nov: true },
  { id: 11, name: "Factores humanos",                        pages: "115–120", nov: false },
  { id: 12, name: "Privacidad y protección de datos",        pages: "121–124", nov: false },
  { id: 13, name: "Seguridad física y baterías",             pages: "125–128", nov: false },
  { id: 14, name: "Seguros, accidentes e incidentes",        pages: "129–132", nov: true },
  { id: 15, name: "Procedimientos operacionales",            pages: "142–160", nov: true }
];

window.QB = {
  all: [],
  add: function (topic, list) {
    for (var i = 0; i < list.length; i++) {
      list[i].t = topic;
      this.all.push(list[i]);
    }
  }
};

// Esquema de una pregunta (ver CLAUDE.md):
//  mc    { id, type:"mc", q, o:[correcta, d1, d2, d3], w:[null, porQueNoD1, porQueNoD2, porQueNoD3], exp, tip?, p, f?, nov? }
//  tf    { id, type:"tf", q, a:true|false, exp, p, f?, nov? }
//  order { id, type:"order", q, items:[en orden correcto], exp, p, nov? }
//  match { id, type:"match", q, pairs:[[izq, der], ...], exp, p, nov? }
// `p` = página (número o lista) del temario Ed.12. En "mc" la opción correcta va SIEMPRE primera en el fichero; la app baraja.
