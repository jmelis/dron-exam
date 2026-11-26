// Apuntes del tema 2 · Categoría abierta: reglas generales (temario Ed.12, p. 17–24).
// Formato: ver data/topics.js (window.AP). Los IDs de sección son permanentes.
AP.add(2, [
  {
    id: "s02-1", title: "Las tres categorías y el vuelo VLOS", pages: [17, 18],
    blocks: [
      { h: "Tres categorías de operación", pg: 17 },
      { p: "El Reglamento de Ejecución (UE) 2019/947 define tres categorías de operación con UAS:" },
      { kv: [
        ["«Abierta»", "**Bajo riesgo**. No requiere autorización ni declaración."],
        ["«Específica»", "**Mayor riesgo**. Requiere declaración en escenarios estándar (STS) o autorización."],
        ["«Certificada»", "**Alto riesgo**. Régimen regulatorio similar al de la aviación tripulada tradicional."]
      ] },

      { h: "Categoría «abierta»", pg: 18 },
      { p: "Las operaciones en categoría «abierta» **no** están sujetas a **autorización previa** ni a **declaración operacional** del operador de UAS." },
      { p: "Se dividen en tres subcategorías: **A1, A2 y A3**. Para cada una se definen los UAS que se pueden usar, la formación que necesita el piloto y las condiciones particulares de vuelo. Pero hay **condiciones generales** que valen para las tres:" },
      { ol: [
        "Volar siempre en **VLOS** (p. 18).",
        "No superar los **120 m** de altura (p. 19).",
        "Ante una **aeronave tripulada**: bajar, esquivar y aterrizar (p. 20).",
        "No sobrevolar **concentraciones de personas** y mantener una distancia segura con las no participantes (p. 21).",
        "El **observador** ayuda, pero no amplía el alcance visual (p. 22).",
        "Ni **mercancías peligrosas** ni **dejar caer** objetos (p. 23)."
      ] },

      { h: "1. Siempre en VLOS" },
      { p: "El piloto a distancia vuela **siempre en modo VLOS**, con la aeronave dentro de su alcance visual." },
      { p: "Excepciones: en **modo sígueme** o si usa un **observador de la aeronave** no tripulada. En esos dos casos puede usar dispositivos de visión en primera persona (**FPV**, «First Person View»)." },
      { ojo: "Gafas FPV en «abierta»: **solo** en modo sígueme o con un observador de la aeronave." }
    ]
  },
  {
    id: "s02-2", title: "Altura máxima: 120 m", pages: [19, 19],
    blocks: [
      { h: "2. No volar a más de 120 m", pg: 19 },
      { p: "No se permite volar a una altura superior a **120 m** del **punto más próximo de la superficie**." },
      { p: "Excepción: si la aeronave vuela a **menos de 50 m**, medidos **en horizontal**, de un **obstáculo artificial** de **más de 105 m**, la altura máxima puede subir **hasta 15 m por encima del obstáculo**, **a petición de la entidad responsable** del obstáculo." },
      { img: "img/p019-altura.webp", alt: "Dibujo del temario: el dron vuela en VLOS por debajo de 120 m sobre el terreno; junto a un edificio alto, a menos de 50 m de él, puede subir hasta 15 m por encima del edificio. Por encima vuela una avioneta." },
      { kv: [
        ["120 m", "Altura máxima general, sobre el punto más próximo de la superficie."],
        ["150 m", "Límite inferior de la aviación general."],
        ["30 m", "Separación que queda entre la aviación tripulada y los UAS."],
        ["50 · 105 · 15", "A menos de 50 m (horizontal) de un obstáculo artificial de más de 105 m: hasta 15 m por encima, si lo pide su responsable."]
      ] },
      { p: "**¿Por qué 120 m?** El límite inferior de la aviación general es de **150 m**, así que solo quedan **30 m** de separación entre la aviación tripulada y los UAS. Para evitar conflictos con otras aeronaves, tripuladas o no, como norma general **no superar nunca los 120 m**." },
      { ojo: "La altura máxima puede ser **menor de 120 m** si así lo indica la **zona geográfica de UAS** definida por la autoridad (AESA)." },
      { tip: "«50 de cerca, 105 de alto, 15 de propina»." }
    ]
  },
  {
    id: "s02-3", title: "Aeronaves tripuladas, personas, observador y objetos", pages: [20, 24],
    blocks: [
      { h: "3. Encuentro con una aeronave tripulada", pg: 20 },
      { p: "Si hay conflicto o encuentro con una aeronave tripulada, el piloto a distancia debe, por este orden:" },
      { ol: [
        "**Reducir** la altura de vuelo.",
        "Hacer **maniobras evasivas** si hay posible colisión.",
        "**Aterrizar** lo antes posible."
      ] },
      { ojo: "En todo caso, el piloto debe **interrumpir el vuelo** siempre que continuar pueda suponer un riesgo para la aeronave tripulada." },

      { h: "4. Personas", pg: 21 },
      { p: "**No** se permite sobrevolar **concentraciones de personas**, y hay que mantener una **distancia segura** con las personas **no participantes** en la operación." },
      { p: "Esa «distancia segura» depende de la subcategoría. Como norma general, cuanto **más pesada** es la aeronave, **más lejos** hay que volar de las personas no participantes: ↑ masa → ↑ lejos → ↑ seguro." },
      { ojo: "Sobrevolar concentraciones de personas está prohibido en **toda** la categoría «abierta»: también en A1 y con un dron C0." },

      { h: "5. Observador de la aeronave", pg: 22 },
      { p: "El piloto puede ayudarse de un **observador de la aeronave** no tripulada si lo cree oportuno. Su objetivo **nunca** es ampliar el alcance del vuelo más allá del alcance visual del piloto. Se sitúa **junto al piloto** y le ayuda, por ejemplo, a:" },
      { ul: [
        "Mantener la distancia a los obstáculos y avisarle si se reduce.",
        "Mantener la consciencia situacional y avisar de posibles riesgos."
      ] },
      { ojo: "Aunque haya observador, el **piloto a distancia** es siempre el **último responsable** de la seguridad de la operación." },

      { h: "6. Mercancías peligrosas y objetos", pg: 23 },
      { p: "Está **prohibido** transportar **mercancías peligrosas** con el UAS y **dejar caer o proyectar** cualquier material u objeto." },
      { ojo: "La prohibición de dejar caer vale para **cualquier** objeto, sea peligroso o no." },

      { h: "Resumen de la categoría «abierta» (desde el 1/1/2024)", pg: 24 },
      { p: "La tabla del temario, por subcategoría. Los detalles de cada subcategoría y de cada clase están en los temas 3 y 4." },
      { cards: [
        { t: "A1 · menos de 250 g", rows: [
          ["UAS", "Construcción privada, «legacy» de menos de 250 g o clase **C0**. Ninguno lleva DRI."],
          ["Vuelo", "No se recomienda volar por encima de personas. No se permite sobrevolar reuniones de personas."],
          ["Formación", "Familiarizarse con el manual de usuario del fabricante."]
        ] },
        { t: "A1 · clase C1 (menos de 900 g)", rows: [
          ["UAS", "Clase **C1**, con DRI."],
          ["Vuelo", "No volar por encima de **ninguna** persona no participante. No se permite sobrevolar reuniones de personas."],
          ["Formación", "Manual del fabricante y **prueba de superación de formación en línea**."]
        ] },
        { t: "A2 · clase C2 (menos de 4 kg)", rows: [
          ["UAS", "Clase **C2**, con DRI."],
          ["Vuelo", "No volar por encima de ninguna persona no participante. **30 m** de cualquier persona no participante; **5 m** si tiene modo de baja velocidad."],
          ["Formación", "Manual de usuario, prueba de superación de formación en línea, declaración de formación autopráctica y **certificado de competencia de piloto a distancia**."]
        ] },
        { t: "A3 · menos de 25 kg", rows: [
          ["UAS", "Clase **C3** (con DRI), clase **C4**, construcción privada y «legacy» de más de 250 g (sin DRI)."],
          ["Vuelo", "No volar cerca de personas. **150 m** de zonas residenciales, comerciales, industriales y recreativas."],
          ["Formación", "Manual del fabricante y prueba de superación de formación en línea."]
        ] }
      ] },
      { def: "Dron «legacy»", d: "UAS introducido en el mercado **antes del 1 de enero de 2024** que **no** es de construcción privada y **no** tiene marcado de clase." },
      { def: "DRI («Direct Remote Identification»)", d: "Sistema de identificación a distancia directa." }
    ]
  }
]);
