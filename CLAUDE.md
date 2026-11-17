# dron-exam — Quiz para el examen A1/A3 de AESA

Single-page quiz app (vanilla HTML/CSS/JS, no build step) to re-learn the AESA
"A1/A3" open-category drone pilot exam. Served by **GitHub Pages from `main`**:
<https://jmelis.github.io/dron-exam/>. Every push to `main` updates the live app.

The UI and all content are in **Spanish**. Code comments may be Spanish or English.

---

## 1. Requirements from the user (keep these true)

- Learn the exam material by doing quizzes again and again until it sticks.
  The user passed this exam years ago; the certificate expired, so they must redo it.
- **Spaced repetition, but flexible.** Counted in **rounds (rondas), never in days**:
  some days the user does many rounds, some days none. Plain SRS bored them in the past.
- **No cap on new questions.** The user can drill as much as they want.
- Questions **classified by topic**; the app shows topics.
- **4 options, one correct.** When the user picks a wrong option, explain **why that
  option is wrong**, why the right one is right, and the **page of the PDF**.
- Questions should look like the real exam.
- **Optimised for iPad** (landscape, two columns) and still good on a phone.
- **Progress stored on the device itself.** Same device always (iPad).
- **NEVER lose progress** (see section 4). Updates to the app must not wipe it.
- No exam date / no deadline: "lo que tarde".

## 2. Source material and exam facts

- Source of truth: AESA official syllabus `_Formacion.temario.completo.Ed12.pdf`
  = document **FOR-UAS-P01-DT01 Ed.09 (July 2024)**, 161 pages, includes RD 517/2024.
  URL: <https://www.seguridadaerea.gob.es/sites/default/files/_Formacion.temario.completo.Ed12.pdf>
  Every question cites pages of **this** PDF (`p` field). The app links to `PDF_URL#page=N`.
- The user's older 2022 course PDF (v6) is outdated (operator age 18, insurance, transition
  rules…). Do not use it as a source.
- Exam (AESA web, checked Nov 2026): **40 questions, 40 minutes, pass ≥ 75 % (30/40)**,
  2 attempts per enrolment. An expired certificate means *renovación*: redo the online
  course + exam, new pilot number.
- Topics marked `nov: true` / questions with `nov: true` changed vs. what the user studied
  before (RD 517/2024 etc.). They show a "NOVEDAD" badge.

## 3. Learning design (decided with the user)

Design mockups (private canvas): <https://claude.ai/artifact/NeQMVAaQtiT7MCzWYMUxhU>

- **Round (ronda)** = 6/12/20 questions (default 12, ~5 min). A round counts only if
  ≥ 3 questions were answered. Simulacro and Supervivencia also count as rounds.
- **Levels 1–5**, interval measured in rounds: `INTERVAL = [0, 1, 2, 4, 8, 16]`.
  Level 5 = "dominada".
- After a correct MC/TF answer the user says **"Lo sabía"** or **"Dudé"** (guessing is
  common with 4 options):
  - Lo sabía → +1 level (max one level-up per question per round). **First time ever and
    sure → straight to level 3** (the user already knew much of this).
  - Dudé → stays at its level (first time → level 1).
  - Wrong → level 1, due next round, **re-asked 3 questions later in the same round**
    (max 2 re-asks), and siblings with the same fact key `f` are pulled forward.
  - Order/match answered right → treated as "Lo sabía".
- **Round composition (Mezcla)**: due questions first; ~50 % new when there are new ones
  (25 % if more than 15 questions sit at level 1); then any other seen questions.
  Modes: Mezcla, Nuevas, Repaso, Fallos, one topic, one "cifras" family, a given list of ids.
- **Anti-boredom**: short rounds with a summary screen ("¿Otra?"), Supervivencia (until
  3rd mistake, record kept), Simulacro 40/40 with timer and per-topic result, a "Chuleta
  de cifras" (all numbers, each family practicable), mixed formats (~25 % of the bank:
  true/false, order the steps, match pairs). No day streaks, no countdowns, no guilt.
- **Simulacro**: 40 MC questions with per-topic quotas proportional to the MC bank.
  Wrong/unanswered → level 1. "Listo" = 3 simulacros in a row with ≥ 34/40.
- **Nota estimada**: average over MC questions of `PROB[level]` (unseen = 0.45).

## 4. NEVER LOSE PROGRESS — hard rules

The progress lives only in the user's browser (iPad Safari / home-screen app).
Anything that breaks it is the worst possible bug. Rules:

1. **The URL/origin must never change.** Storage is per origin (`https://jmelis.github.io`).
   Do not rename the repo, change the Pages domain or move the app to another path without
   telling the user to export a backup first.
2. All storage keys start with `dron-exam:` (the origin is shared with the user's other
   Pages sites). Main key: `dron-exam:state`. IndexedDB database `dron-exam`, store `kv`.
3. **Question IDs are permanent.** Format `tNN-MM` (topic + number). Never renumber, never
   reuse an id, never change the *meaning* of a question under an existing id (create a new
   id instead; typo fixes and better explanations are fine). When deleting a question, add
   its id to `data/retired-ids.json` (the validator then forbids reusing it).
   Topic ids are permanent too.
4. **Saved state format** (`SCHEMA` in `index.html`, currently 1):
   `{schema, app, createdAt, updatedAt, ronda, q:{id:{l,n,ok,ko,d,lr,lu,at}}, sims:[], best, settings, lastBackupRonda, ui}`.
   To change it: bump `SCHEMA` and add `MIGRATIONS[oldSchema] = s => {...; s.schema = old+1; return s}`.
   Migrations must only add/transform, never drop data. The app stores a raw copy
   (`dron-exam:backup:pre-migration-vN:<ts>`) before migrating.
5. If the stored data has a **newer** schema than the code (old cached page), the app goes
   **read-only** and never writes. Keep this behaviour.
6. Never delete entries of unknown/retired ids from `state.q`.
7. Writes go to localStorage **and** IndexedDB; on load the newest (`updatedAt`) wins.
   Before each write the app checks whether another tab wrote something newer and **merges**
   (per question, the most recent answer `at` wins). Keep `mergeStates`.
8. Safety nets: automatic snapshots every 5 rounds (last 3 kept, `dron-exam:snapshots`),
   raw copy before import (`dron-exam:backup:before-import:<ts>`), export to file/clipboard
   and import, a banner after 10 rounds without an external backup,
   `navigator.storage.persist()`.
9. **No "reset progress" button.** No service worker (avoids stale cached versions writing
   old formats). If one is ever added, rule 5 must still hold.
10. Before pushing changes that touch `index.html`, run the smoke test (section 6); it checks
    reload, IndexedDB recovery, two-tab merge, future-schema read-only and import backup.

Note for the user (also shown in the app): the home-screen app and the Safari tab keep
**separate** storage on iOS. Pick one; move progress with export/import.

## 5. Question bank

Files: `data/topics.js` (topic list + `QB` registry) and `data/t01.js` … `data/t15.js`
(one file per topic, loaded by `<script>` tags in `index.html`; new files must be added
there). Currently ~300 questions.

```js
// mc: correct option ALWAYS first in the file; the app shuffles.
{ id: "t02-04", type: "mc", f: "obstaculo-15", nov: false,
  q: "Enunciado…",
  o: ["correcta", "distractor B", "distractor C", "distractor D"],
  w: [null, "por qué B no", "por qué C no", "por qué D no"],
  exp: "por qué la correcta sí (1–2 frases)",
  tip: "truco opcional",
  p: 19 /* o [19, 52]: páginas del temario Ed.12 */ }
{ id, type: "tf", q: "afirmación", a: true|false, exp, p }
{ id, type: "order", q, items: ["paso 1", "paso 2", …] /* en orden correcto */, exp, p }
{ id, type: "match", q, pairs: [["izq", "der"], …], exp, p }
```

Writing rules:
- Formal Spanish in AESA's vocabulary ("piloto a distancia", "UAS", "categoría «abierta»").
- Every fact must come from the Ed.12 syllabus page cited in `p`. Do not invent numbers.
- Distractors should be *plausible*: prefer other real figures/terms from the syllabus
  (120/150/105/50/15/30/5 m, 250 g/900 g/4 kg/25 kg, C0–C4…) over absurd answers.
- `w[i]` explains specifically why option *i* is wrong (it is shown when the user picks it).
- **No length bias**: the correct option must not usually be the longest. The validator
  fails if it is >10 % longer than every distractor in more than 30 % of MC questions
  (or clearly more often than a distractor is the longest).
- `f` (fact key) groups variants of the same fact; used to pull siblings forward after a
  mistake and for the "Chuleta de cifras" families (`CIFRAS` in `index.html`).

## 6. Workflow

```bash
node tools/validate.mjs                 # bank checks (ids, schema, pages 1–161, length bias, retired ids)
python3 tools/smoke_test.py --shots /tmp/shots   # needs `pip install playwright` + Chrome/Chromium
python3 -m http.server 8000             # manual testing at http://localhost:8000
```

- Bump `APP_VERSION` in `index.html` on every user-visible change.
- Deploy = commit and push to `main` (GitHub Pages, branch `main`, folder `/`).
  Pages may take a minute and Safari may cache for a few minutes.
- Keep it dependency-free: no frameworks, no build, no external JS. Fonts from Google
  Fonts are optional (system fallback).

## 7. Layout

```
index.html            app (CSS + JS inline): storage, round engine, views, actions
data/topics.js        topics + QB registry
data/tNN.js           questions per topic
data/retired-ids.json ids that must never be reused
manifest.webmanifest, icons/   "Añadir a pantalla de inicio"
tools/validate.mjs    bank validator (node)
tools/smoke_test.py   end-to-end test in headless Chrome (playwright)
```

## 8. Ideas not done yet

- Optional server-side sync of progress (would protect against Safari data eviction).
- More variants per fact (2–3 per `f`) so the user learns facts, not phrasings.
- Image-based questions (airspace diagrams, axes) — the syllabus has figures on p. 76–80, 93, 97.
