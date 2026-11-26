// Apuntes del tema 12 · Privacidad y protección de datos (temario Ed.12, p. 121–124).
AP.add(12, [
  {
    id: "s12-1", title: "Privacidad, datos personales y RGPD", pages: [121, 122],
    blocks: [
      { h: "Privacidad", pg: 121 },
      { p: "En Europa la privacidad es un **derecho humano**: todos tenemos derecho a una vida privada. Sus límites incluyen el **hogar**, las **relaciones personales** (familia y amigos) y cierta **información** (personal, sensible o embarazosa)." },
      { ojo: "**Cualquier intrusión en la vida privada es ilegal.**" },

      { h: "Protección de datos" },
      { p: "Dentro de la privacidad, protege la **información personal**: **cualquier** información (**imágenes y audios** incluidos) sobre una persona física **identificada o identificable**." },
      { kv: [
        ["Identificada", "Se la identifica **directamente** (la **cara**) o **indirectamente** (la **matrícula** del coche, la localización…)."],
        ["Identificable", "Se la puede identificar con datos como un **número de identificación**, la localización, un **identificador online** o factores físicos, psicológicos, genéticos, mentales, económicos o culturales."]
      ] },

      { h: "RGPD", pg: 122 },
      { def: "Reglamento General de Protección de Datos (RGPD)", d: "El **reglamento europeo** de protección de las personas físicas en el **tratamiento de sus datos personales** y la libre circulación de esos datos." }
    ]
  },
  {
    id: "s12-2", title: "Qué se puede grabar con un dron", pages: [123, 124], extra: ["t12-12"],
    blocks: [
      { h: "Capacidades y grado de impacto", pg: 123 },
      { p: "Si el UAS puede captar información personal, hay que tener cuidado de **no vulnerar la privacidad** de nadie. Sus principales capacidades para ello son las **cámaras** y los **micrófonos**." },
      { p: "El impacto en la privacidad depende de esas capacidades y además de:" },
      { ul: [
        "El **propósito** del piloto.",
        "La **extensión y el tipo** de información personal captada.",
        "**Cómo se usa** o procesa esa información.",
        "**Quién** vuela el UAS.",
        "El **contexto y la ubicación** del vuelo."
      ] },

      { h: "Tres preguntas típicas", pg: 124 },
      { kv: [
        ["¿Grabar o fotografiar a alguien en su vida privada?", "**No**, salvo **permiso expreso** de esa persona. No grabes a personas identificables sin su permiso."],
        ["¿Fotografiar a personas en zonas públicas?", "**No** sin su permiso: también en zonas públicas hay cierta privacidad. Una persona puede **aparecer** en la foto, pero **no ser su objetivo** (con **zoom** o **micrófonos direccionales**)."],
        ["¿Grabar vídeo en un lugar público con gente?", "**En general, sí**. Una aparición breve e inadvertida no es problema; sí lo es el **seguimiento sistemático y permanente** de una persona, que la convierte en el objetivo."]
      ] },
      { ojo: "Que el lugar sea **público** no permite usar el **zoom** para fotografiar a una persona concreta sin su permiso." },
      { p: "Recuerda: las **zonas geográficas de UAS** gestionan, entre otros, riesgos de **privacidad** y **protección de datos** (temas 1 y 9).", pg: 100 }
    ]
  }
]);
