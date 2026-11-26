// Apuntes del tema 3 · Subcategorías A1 · A2 · A3 (temario Ed.12, p. 25–35 y 92).
// Los requisitos técnicos de cada clase (C0–C4) están en los apuntes del tema 4.
AP.add(3, [
  {
    id: "s03-1", title: "Subcategoría A1", pages: [25, 28],
    blocks: [
      { h: "Condición particular de vuelo", pg: 25 },
      { p: "Además de las condiciones generales de la categoría «abierta», en A1 se permite volar **sobre personas no participantes**, sin infringir su privacidad ni la protección de sus datos, **excepto con UAS de clase C1**: con ellos **no** se puede sobrevolar a personas no participantes." },
      { ojo: "Se mantiene la prohibición de volar sobre **concentraciones de personas**, también en A1." },

      { h: "Requisitos del piloto" },
      { ul: [
        "Estar familiarizado con las **instrucciones del fabricante** del UAS.",
        "Para volar un **C1**: completar el **curso de formación online A1/A3** y aprobar el examen online para obtener la «**Prueba de superación de formación en línea**»."
      ] },
      { p: "Con un **C0**, un UAS «legacy» o uno de construcción privada de MTOM menor de 250 g, el curso y el examen online A1/A3 son **recomendables**, no obligatorios." },
      { nov: "Este matiz es del temario de 2024: con C0, «legacy» o construcción privada de menos de 250 g el curso online es **recomendable**; con C1 es **obligatorio**." },

      { h: "Qué UAS pueden volar en A1", pg: 26 },
      { p: "**Sin** etiqueta de identificación de clase, los que cumplan **una** de estas condiciones:" },
      { ul: [
        "**Construcción privada**, con masa máxima de despegue (**MTOM**) **menor de 250 g** y velocidad máxima **inferior a 19 m/s**.",
        "MTOM **inferior a 250 g**, sin etiqueta de clase e introducidos en el mercado **antes del 1 de enero de 2024** (UAS «**legacy**»)."
      ] },
      { p: "**Con** etiqueta de identificación de clase:", pg: 27 },
      { ul: [
        "Clase **C0**: menos de 250 g y menos de 19 m/s, entre otros requisitos (p. 27).",
        "Clase **C1**: menos de 900 g o energía de impacto menor de 80 J, menos de 19 m/s, con DRI y geoconsciencia, entre otros (p. 28)."
      ] },
      { kv: [
        ["Personas", "Sobre no participantes, sí (con **C1, no**). Sobre concentraciones, nunca."],
        ["UAS", "Construcción privada < 250 g y < 19 m/s · «legacy» < 250 g · **C0** · **C1**."],
        ["Formación", "Instrucciones del fabricante. Con C1, además, curso y examen online A1/A3."]
      ] }
    ]
  },
  {
    id: "s03-2", title: "Subcategoría A2", pages: [29, 31],
    blocks: [
      { h: "Condición particular: distancia a las personas", pg: 29 },
      { p: "Además de las condiciones generales, en A2 se puede volar a una **distancia horizontal segura de al menos 30 m** de las personas no participantes. Se puede reducir hasta un **mínimo de 5 m** si se activa el **modo de baja velocidad**." },
      { p: "**Regla 1:1**: la **altura** se reduce en la **misma proporción** que la distancia horizontal a las personas no participantes (a 30 m de distancia, 30 m de altura; a 5 m, 5 m)." },
      { img: "img/p029-a2-distancias.webp", alt: "Dibujo del temario: el dron vuela a 30, 20, 10 o 5 m de altura según esté a 30, 20, 10 o 5 m en horizontal de una persona no participante." },
      { ojo: "Se mantiene la prohibición de volar sobre **concentraciones de personas**." },

      { h: "Requisitos del piloto", pg: 30 },
      { ol: [
        "Estar familiarizado con las **instrucciones del fabricante** del UAS.",
        "Completar el **curso en línea A1/A3** y aprobar el examen («Prueba de superación de formación en línea»).",
        "Hacer una **autoformación práctica** en una **zona aislada**, sin poner en riesgo a personas no participantes y a **150 m** de zonas residenciales, comerciales, industriales o recreativas (las condiciones de A3). Hay material guía en la web de AESA.",
        "Aprobar un **examen de conocimientos teóricos adicional** para obtener el «**Certificado de competencia de piloto a distancia**» de A2."
      ] },
      { ojo: "La práctica de A2 es una **autoformación**: no hay examen práctico de vuelo ante AESA. Lo que sí hay es un **examen teórico adicional**." },

      { h: "Qué UAS pueden volar en A2", pg: 31 },
      { p: "Solo los que tienen etiqueta de identificación de clase **C2**: menos de **4 kg**, con **modo de baja velocidad** limitado a menos de **3 m/s**, enlace de datos protegido ante interferencias, DRI y geoconsciencia, entre otros requisitos (detalle en el tema 4)." }
    ]
  },
  {
    id: "s03-3", title: "Subcategoría A3", pages: [32, 35],
    blocks: [
      { h: "Condiciones particulares", pg: 32 },
      { ul: [
        "Volar en zonas donde se prevea que **no se pondrá en peligro a ninguna persona no participante** durante toda la duración del vuelo.",
        "Volar a una **distancia horizontal segura mínima de 150 m** de zonas **residenciales, comerciales, industriales y recreativas**."
      ] },
      { ojo: "Se mantiene la prohibición de volar sobre **concentraciones de personas**." },

      { h: "Requisitos del piloto" },
      { p: "Los **mismos que en A1**:" },
      { ul: [
        "Estar familiarizado con las **instrucciones del fabricante** del UAS.",
        "Completar el **curso en línea A1/A3** y aprobar el examen («Prueba de superación de formación en línea»)."
      ] },

      { h: "Qué UAS pueden volar en A3", pg: 33 },
      { ul: [
        "Clase **C3**: menos de 25 kg y dimensión máxima menor de 3 m (p. 33).",
        "Clase **C4**: menos de 25 kg y sin modo de vuelo automático (p. 34)."
      ] },
      { p: "Y también:", pg: 35 },
      { ul: [
        "**Construcción privada** con MTOM **menor de 25 kg**.",
        "MTOM **inferior a 25 kg**, sin etiqueta de clase e introducidos en el mercado **antes del 1 de enero de 2024** («legacy»).",
        "Clase **C2** que cumpla todos los requisitos de A2.",
        "Clase **C3** o **C4** que cumpla sus requisitos."
      ] },
      { p: "Siempre usados con los sistemas de **identificación a distancia directa** y de **geoconsciencia** **activos y actualizados**." },
      { ojo: "El límite de A3 es **menos de 25 kg**: un UAS de 25 kg o más no puede volar en A3." },

      { h: "Las tres, comparadas", pg: 24 },
      { kv: [
        ["A1", "Sobre no participantes, sí (con C1, no)."],
        ["A2", "**30 m** de no participantes; **5 m** con baja velocidad (regla 1:1)."],
        ["A3", "**150 m** de zonas residenciales, comerciales, industriales y recreativas; nadie en peligro."]
      ] },
      { tip: "Cuanto más pesa, más lejos: A1 encima (< 250 g / C1 no), A2 a 30 m, A3 a 150 m." }
    ]
  },
  {
    id: "s03-4", title: "Volar en entorno urbano", pages: [92, 92],
    blocks: [
      { h: "Vuelos en entorno urbano en categoría «abierta»", pg: 92 },
      { p: "El piloto debe garantizar que la aeronave **no sobrevuele edificios**, construcciones estables similares, casas ni cualquier otro **domicilio** de personas físicas, incluidas sus **zonas de recreo, patios** y zonas análogas, públicas o privadas, **salvo autorización expresa del propietario**." },
      { p: "Qué está permitido y a qué distancia de los edificios:" },
      { cards: [
        { t: "C0, C1 o «legacy» de 250 g o menos · A1", rows: [["Entorno urbano", "Sí."], ["Distancia a edificios", "Sin distancias mínimas."]] },
        { t: "C1 de 250 g o más · A1", rows: [["Entorno urbano", "Sí."], ["Distancia a edificios", "**5 m**."]] },
        { t: "C2 (4 kg o menos) · A2", rows: [["Entorno urbano", "Sí."], ["Distancia a edificios", "**30 m**; **5 m** en modo de baja velocidad."]] },
        { t: "C3, C4 o «legacy» (25 kg o menos) · A3", rows: [["Entorno urbano", "**No.**"], ["Distancia a edificios", "**150 m**."]] }
      ] },
      { ojo: "En **A3 no se puede volar en entorno urbano**, aunque te alejes 30 m de los edificios: hay que estar a **150 m**." },
      { nov: "Las normas de vuelo en entorno urbano de esta página son nuevas respecto al temario anterior." },
      { p: "La definición de «entorno urbano» (núcleos de población, áreas residenciales, comerciales o industriales y áreas recreativas, parques y playas incluidos) está en el tema 1, p. 15." }
    ]
  }
]);
