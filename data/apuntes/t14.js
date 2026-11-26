// Apuntes del tema 14 · Seguros, accidentes e incidentes (temario Ed.12, p. 129–132).
AP.add(14, [
  {
    id: "s14-1", title: "Seguro de responsabilidad civil", pages: [129, 130],
    blocks: [
      { h: "Qué hay que saber", pg: 129 },
      { p: "Operadores y pilotos deben informarse de las normas de la Unión y **nacionales** del Estado miembro donde vayan a volar, **seguros de responsabilidad civil incluidos**." },
      { h: "Qué exige el RD 517/2024" },
      { kv: [
        ["MTOM de 20 kg o más", "Seguro **obligatorio** conforme al **Reglamento (CE) 785/2004**."],
        ["MTOM de menos de 20 kg", "Cada Estado puede exigir lo que considere. En España, hay que ajustarse al **Real Decreto 37/2001** (indemnizaciones por daños de la Ley de Navegación Aérea)…", ],
        ["Exentas (menos de 20 kg)", "…salvo las operaciones en categoría «abierta» **A1** y **A3**, que **no necesitan seguro**."]
      ], pg: 130 },
      { ojo: "Por debajo de 20 kg solo están exentas **A1 y A3**: en **A2** (por ejemplo, un C2 de 3 kg) **sí** hace falta seguro." },
      { p: "Antes de volar en **otro Estado miembro**, es aconsejable consultar si allí hace falta póliza de seguro." },
      { nov: "Las reglas del seguro cambiaron con el RD 517/2024: obligatorio desde **20 kg**; por debajo, exentas **A1 y A3**." },
      { tip: "**20 kg** es la frontera. Debajo, solo A2 (y la «específica») necesitan seguro." }
    ]
  },
  {
    id: "s14-2", title: "Accidentes e incidentes", pages: [131, 132],
    blocks: [
      { h: "Accidente", pg: 131 },
      { p: "El **operador o el piloto** a distancia es **responsable** en caso de accidente o incidente." },
      { def: "Accidente", d: "Suceso que, con una aeronave no tripulada, ocurre **desde que está lista para ponerse en movimiento** con intención de volar **hasta que se detiene al final del vuelo y se apagan los motores** de propulsión principal, y en el que una persona sufre **lesiones mortales o graves** por **contacto directo** con alguna parte de la aeronave." },
      { kv: [
        ["Lesión grave", "Causa **hospitalización**, **rotura de hueso**, **laceraciones**, **lesión de órganos** o **quemaduras**."],
        ["Lesión mortal", "Causa la **muerte** en un plazo de **30 días** desde el accidente."]
      ] },

      { h: "Incidente", pg: 132 },
      { def: "Incidente", d: "Cualquier suceso con una aeronave, **distinto de un accidente**, que afecta o puede afectar a la seguridad." },
      { def: "Incidente grave", d: "Incidente con circunstancias que indican una **alta probabilidad de accidente**." },
      { p: "Ejemplos de incidentes que podrían ser graves:" },
      { ul: [
        "**Cuasi-colisión** que exige una **maniobra evasiva**.",
        "**Impacto contra el suelo sin pérdida de control**.",
        "**Incendio o humo** en cualquier elemento del UAS."
      ] },
      { ojo: "Un accidente o incidente grave se comunica **lo antes posible** a la **CIAIAC** (Comisión de Investigación de Accidentes e Incidentes de Aviación Civil), en su web. Además se puede reportar a cualquier país de la UE en **www.aviationreporting.eu**." },
      { p: "Recuerda (tema 10): a la CIAIAC, **dentro de las 72 horas**; los sucesos, al SNS de AESA." }
    ]
  }
]);
