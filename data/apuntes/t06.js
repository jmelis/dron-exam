// Apuntes del tema 6 · Edades, registro y responsabilidades (temario Ed.12, p. 44–54).
AP.add(6, [
  {
    id: "s06-1", title: "Edades mínimas", pages: [44, 46],
    blocks: [
      { h: "Operador de UAS", pg: 44 },
      { p: "La edad mínima para darse de alta en el registro como **operador** de UAS en España es de **16 años**." },

      { h: "Piloto a distancia: lo que dice el Reglamento (UE)" },
      { p: "Edad mínima general: **16 años**, para pilotos en categoría «abierta» o «específica»." },
      { p: "**Sin edad mínima** en estos casos:" },
      { ul: [
        "Volar en **A1** un UAS de clase **C0 que sea un juguete**.",
        "Volar un UAS de **construcción privada** con MTOM **inferior a 250 g**.",
        "Volar **bajo la supervisión directa** de un piloto a distancia **mayor de 16 años** con las competencias adecuadas para esa categoría."
      ] },
      { p: "Los Estados miembros pueden **reducir** estas edades mínimas como máximo en **4 años** en categoría «abierta» y en **2 años** en «específica»." },

      { h: "Piloto a distancia: lo que dice el RD 517/2024", pg: 45 },
      { p: "Su **artículo 7** reduce la edad mínima en categoría «abierta»:" },
      { kv: [
        ["12 años", "En **A1** con un **C0 que no sea juguete**, o con un UAS «**legacy**» de MTOM **menor de 250 g**."],
        ["14 años", "En **A1** con un **C1**; en **A2 o A3** con un **C2**; en **A3** con un **C3** o **C4**, uno de **construcción privada** de menos de 25 kg o un «**legacy**» de menos de 25 kg."]
      ] },
      { p: "En actividades **no EASA** que haga directamente un organismo con autoridad pública, la edad mínima para operador o piloto es de **16 años**." },
      { h: "La tabla completa", pg: 46 },
      { cards: [
        { t: "Sin límite de edad", rows: [["UAS", "Construcción privada < 250 g · C0 juguete (Directiva 2009/48/CE)"]] },
        { t: "12 años · A1", rows: [["UAS", "C0 que no es juguete · «legacy» < 250 g"]] },
        { t: "14 años", rows: [["A1", "C1"], ["A2", "C2"], ["A3", "C2 · C3 · C4 · construcción privada < 25 kg · «legacy» < 25 kg"]] },
        { t: "16 años", rows: [["Quién", "Operador de UAS · regla general del Reglamento para pilotos"]] }
      ] },
      { nov: "Antes el operador debía tener **18 años**; ahora **16**. Las edades reducidas de **12 y 14 años** ya están en vigor con el RD 517/2024." },
      { tip: "Juguete o construcción propia < 250 g: sin edad. C0 «de verdad» o «legacy» pequeño: 12. Todo lo demás en abierta: 14. Operador: 16." }
    ]
  },
  {
    id: "s06-2", title: "Registro del operador", pages: [47, 48],
    blocks: [
      { h: "Quién debe registrarse", pg: 47 },
      { p: "El operador de UAS debe registrarse siempre que:" },
      { ul: [
        "Vuele en categoría «**abierta**» con un UAS que tenga MTOM **superior a 250 g**, **o** que lleve un **sensor capaz de captar datos personales** (cámaras, micrófonos).",
        "Vuele en categoría «**específica**», **sea cual sea** el UAS."
      ] },
      { ojo: "Un dron de **200 g con cámara** obliga a registrarse: basta con **una** de las dos condiciones (más de 250 g **o** sensor)." },
      { p: "El registro se hace en la **web de AESA**, facilitando toda la información que se pida durante el alta." },

      { h: "Información importante sobre el registro", pg: 48 },
      { ul: [
        "Solo se puede estar registrado en **un** Estado miembro de EASA.",
        "AESA expide un **certificado de registro** con un **número de registro único**. Ese número debe estar **indicado en todos los UAS** del operador y **mantenerse en privado**."
      ] },
      { kv: [
        ["Persona física", "Se registra en el Estado miembro donde **reside**."],
        ["Persona jurídica", "Se registra donde tenga su **centro de actividad principal**."]
      ] },
      { p: "En el resumen del temario se citan como sensores de captación de datos la cámara, el micrófono o el GNSS.", pg: 54 }
    ]
  },
  {
    id: "s06-3", title: "Responsabilidades del operador y del piloto", pages: [49, 54],
    blocks: [
      { h: "Operador de UAS en categoría «abierta»", pg: 49 },
      { ul: [
        "Elaborar **medidas de atenuación** (procedimientos operacionales) según el riesgo (el posible daño del UAS) y el tipo de operación.",
        "**Designar un piloto para cada operación**, con un control **intransferible**, y **garantizar que tiene la formación** adecuada.",
        "**Actualizar el sistema de geoconsciencia** del UAS cuando sea aplicable según el lugar de la operación (si el UAS lo tiene).",
        "Con UAS con etiqueta de clase: tener una **declaración de conformidad** y que el **fabricante** haya marcado el UAS con su **etiqueta de identificación de clase**.",
        "En **A2 y A3** con **personas participantes**: asegurarse de que han sido **informadas de los riesgos** y han **aceptado participar de forma explícita**."
      ] },

      { h: "Piloto a distancia en categoría «abierta»", pg: 50 },
      { ul: [
        "Tener la **formación** necesaria y **llevar una prueba** de ella durante el vuelo.",
        "Es **totalmente responsable de la seguridad aérea** del vuelo.",
        "No volar cerca ni dentro de zonas con **operaciones de emergencia**, salvo **permiso expreso** del servicio de emergencia responsable.",
        "No volar bajo los efectos de **sustancias psicoactivas o alcohol**, ni si no está en condiciones adecuadas.",
        "No **superar la MTOM** del UAS ni el **límite de masa de su clase**, ni **modificar** el UAS en contra de lo que diga el fabricante.",
        "Respetar siempre los **límites operacionales de la zona geográfica** de UAS del lugar de la operación."
      ] },
      { ojo: "**Operador**: designa al piloto, asegura su formación, actualiza la geoconsciencia, procedimientos. **Piloto**: lleva la prueba de formación y es el responsable de la seguridad del vuelo." },

      { h: "Recuerda (resumen del temario)", pg: 54 },
      { p: "Registrarse es obligatorio en «específica», y en «abierta» salvo con UAS de menos de 250 g **sin** sensores de captación de datos. Un solo Estado miembro: el de residencia (persona física) o el del centro de actividad principal (persona jurídica). El piloto es, en todo caso, el **último responsable** de la seguridad aérea de la operación." }
    ]
  }
]);
