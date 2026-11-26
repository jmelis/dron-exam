// Apuntes del tema 5 · Categorías «específica» y «certificada» (temario Ed.12, p. 39–43).
AP.add(5, [
  {
    id: "s05-1", title: "Categoría «específica»", pages: [39, 42],
    blocks: [
      { h: "Cuándo es «específica»", pg: 39 },
      { p: "Cuando una operación **no** cumple los requisitos de la categoría «abierta» **ni** entra en la «certificada», es de categoría «**específica**». Hay cuatro formas de operar:" },
      { kv: [
        ["Autorización operacional", "Se pide a la autoridad del Estado miembro donde está **registrado** el operador, con una **evaluación del riesgo** y **medidas de atenuación** (estudio de seguridad operacional). Puede ser para **una o varias operaciones** o para la aprobación de un **LUC**."],
        ["Escenario estándar (STS)", "Si la operación se ajusta a un STS, basta una **declaración responsable** (declaración operacional) en el perfil de operador de UAS de la **web de AESA**. Régimen **declarativo**: no hace falta autorización operacional."],
        ["LUC", "**Certificado de operador UAS ligero**: el operador **se autoriza sus propias operaciones**."],
        ["Clubes de aeromodelismo", "Clubes y asociaciones de aeromodelismo **autorizados**."]
      ] },
      { p: "Con STS, con LUC o en un club autorizado se vuela **sin necesidad de autorización operacional** para cada operación.", pg: 40 },

      { h: "Formación del piloto en «específica»", pg: 41 },
      { cards: [
        { t: "Con autorización operacional", rows: [["Formación", "Curso y examen online **A1/A3** + **autoformación práctica de A2** + la formación adicional del **Manual de Operaciones** del operador."]] },
        { t: "Con escenario estándar (STS)", rows: [["Formación", "Curso y examen online **A1/A3** + un **examen teórico adicional** + una **formación de aptitudes prácticas** concreta para **cada STS**."]] },
        { t: "Con LUC", rows: [["Formación", "La que defina la **autorización** concedida al operador con LUC."]] },
        { t: "En un club autorizado", rows: [["Formación", "El nivel **mínimo** lo define la **autorización** concedida al club."]] }
      ] },

      { h: "Escenarios estándar europeos y nacionales", pg: 42 },
      { p: "El Reglamento de Ejecución (UE) 2019/947 define **dos escenarios estándar** europeos (STS-UE), con requisitos que en parte aún no se pueden aplicar por limitaciones técnicas. Por eso la Comisión permite a los Estados miembros definir **escenarios estándar nacionales**, válidos solo en su territorio." },
      { p: "En España se han publicado dos: **STS-ES-01** y **STS-ES-02**." },
      { tl: [
        ["1/1/2024", "Empiezan a aplicarse los STS-UE. Conviven STS-ES y STS-UE."],
        ["30/8/2024", "Último día para **presentar** declaraciones con un STS-ES."],
        ["31/12/2025", "Los STS-ES **dejan de ser válidos**. Solo quedan los STS-UE."]
      ] },
      { nov: "Las fechas de los STS nacionales cambiaron respecto al temario anterior: se podían presentar hasta el **30 de agosto de 2024** y valen hasta el **31 de diciembre de 2025**." }
    ]
  },
  {
    id: "s05-2", title: "Categoría «certificada»", pages: [43, 43], extra: ["t05-14"],
    blocks: [
      { h: "Cuándo es «certificada»", pg: 43 },
      { p: "Según el Reglamento de Ejecución (UE) 2019/947, son de categoría «certificada»:" },
      { ul: [
        "Volar **sobre concentraciones de personas** con UAS de **dimensión mayor de 3 m**.",
        "**Transportar personas**.",
        "Transportar **mercancías peligrosas** con **alto riesgo para terceros** en caso de accidente."
      ] },
      { p: "También es «certificada» la operación cuyos riesgos, según el estudio de seguridad, **no se pueden mitigar** sin **certificar el UAS** y **al operador** y sin exigir **licencia al piloto**." },
      { ojo: "Es la categoría de **alto riesgo**, con un régimen regulatorio **similar al de la aviación tripulada tradicional** (p. 17)." },

      { h: "Las tres categorías, en resumen", pg: 51 },
      { kv: [
        ["«Abierta»", "Subcategorías **A1, A2 y A3**. Sin autorización ni declaración."],
        ["«Específica»", "**STS** (declaración), **autorización operacional**, **LUC** o **aeromodelismo** (club autorizado)."],
        ["«Certificada»", "Concentraciones con UAS > 3 m, transporte de personas, mercancías peligrosas de alto riesgo."]
      ] }
    ]
  }
]);
