// Apuntes del tema 15 · Procedimientos operacionales (temario Ed.12, p. 142–160).
AP.add(15, [
  {
    id: "s15-1", title: "Antes del vuelo: el concepto MEUH", pages: [142, 149],
    blocks: [
      { h: "Las tres fases", pg: 142 },
      { ol: [
        "**Antes** del vuelo: comprobar meteorología, entorno, UAS y limitaciones humanas (**MEUH**).",
        "**Durante** el vuelo: procedimiento **normal** o de **contingencia/emergencia**.",
        "**Después** del vuelo: **registro** de la operación y **mantenimiento**."
      ] },
      { h: "MEUH", pg: 143 },
      { p: "Antes de volar, el operador o el piloto verifica con el **concepto MEUH**:" },
      { kv: [
        ["M", "**Meteorología**."],
        ["E", "**Entorno** de la operación."],
        ["U", "**UAS**."],
        ["H", "Limitaciones **humanas**."]
      ] },

      { h: "M · Meteorología", pg: 144 },
      { p: "Las condiciones antes y durante todo el vuelo deben ser adecuadas y **compatibles con los límites del UAS** (instrucciones del fabricante). Consulta antes la información meteorológica." },
      { kv: [
        ["Viento", "Afecta a la **autonomía** y la **maniobrabilidad**."],
        ["Temperatura", "Afecta a la **autonomía** y al **rendimiento de las baterías**."],
        ["Visibilidad", "La luz o la niebla afectan a la capacidad de mantener el **VLOS**."],
        ["Lluvia o nieve", "Mira en las **instrucciones del fabricante** si se puede volar con seguridad."]
      ] },
      { ojo: "Si durante el vuelo el tiempo cambia y puede afectar a la seguridad o al rendimiento, se **cancela el vuelo**. Y si la previsión supera los límites del fabricante (por ejemplo, su viento máximo), no se vuela." },

      { h: "E · Entorno de la operación", pg: 145 },
      { p: "Hay que comprobar que la operación cumple la normativa y las limitaciones y restricciones de la zona: con la **guía de zonificación** de AESA y consultando **ENAIRE drones** (drones.enaire.es)." },
      { p: "Después, ya **sobre el terreno**, el piloto **explora la zona**, con la vista o **caminando**, para:", pg: 146 },
      { ul: [
        "Detectar **obstáculos** (edificios, vehículos, vías públicas, montañas, árboles, antenas, líneas de tensión…) que puedan impedir el VLOS o interferir con la ruta.",
        "Detectar **personas no participantes** o concentraciones de personas. A las no participantes se les dan **instrucciones para que se alejen** de la zona terrestre controlada.",
        "Detectar **interferencias electromagnéticas** (radio, televisión, móviles, wifi, bluetooth…) que pueden degradar o cortar la señal. Son **mayores en entornos urbanos**: comprueba el estado de la señal antes de volar."
      ], pg: 147 },

      { h: "U · UAS", pg: 148 },
      { p: "Comprobar que la aeronave está en buenas condiciones y con el **mantenimiento** hecho: **inspección exterior** siguiendo las instrucciones del fabricante. Se recomienda usar **listas de control (checklist)**. Algunos elementos se desgastan más y merecen más atención." },

      { h: "H · Limitaciones humanas", pg: 149 },
      { p: "El piloto verifica que está en condiciones óptimas con la metodología **I'M SAFE** (enfermedad, medicación, estrés, alcohol, fatiga, emociones; tema 11) y tiene en cuenta los límites de la **percepción** humana." }
    ]
  },
  {
    id: "s15-2", title: "Durante el vuelo: operación normal y consciencia situacional", pages: [150, 152],
    blocks: [
      { h: "Procedimiento normal de vuelo", pg: 150 },
      { p: "Operación **rutinaria**, en la que no se prevé nada que ponga en riesgo la seguridad. El piloto está **concentrado**, sin distracciones, y atento a:" },
      { ul: [
        "La **coordinación y comunicación** con el personal de la operación (observadores, operador de cámara…) y con terceros (servicio de tránsito aéreo, otras aeronaves, vigilantes de la zona terrestre controlada…).",
        "La **evolución del tiempo**.",
        "La **gestión del combustible** (batería consumida y restante).",
        "Las **altitudes máximas y mínimas** de vuelo.",
        "Los **datos de telemetría** y los **avisos o alertas**."
      ] },

      { h: "Consciencia situacional", pg: 151 },
      { p: "Percibir y comprender lo que pasa alrededor para tomar decisiones: **el piloto debe estar alerta**. Tiene tres componentes, en este orden:" },
      { kv: [
        ["1. Percepción", "Percibir y reconocer todos los elementos de alrededor."],
        ["2. Comprensión", "Comprender e interpretar lo que se percibe."],
        ["3. Proyección", "**Anticipar** mentalmente y **prevenir** lo que puede pasar."]
      ] },
      { h: "Técnica OODA", pg: 152 },
      { p: "Sirve para **aplicar la consciencia situacional** en la práctica:" },
      { ol: ["**O**bservar.", "Ver **O**pciones.", "**D**ecidir.", "**A**ctuar."] }
    ]
  },
  {
    id: "s15-3", title: "Contingencias y emergencias", pages: [153, 156],
    blocks: [
      { h: "Cuándo se activan", pg: 153 },
      { p: "Cuando el piloto **percibe un riesgo potencial**, comprende lo que puede pasar y actúa para evitarlo. Las principales situaciones que degradan la seguridad:" },
      { ol: [
        "Ruta de vuelo en situaciones **anormales**.",
        "**Daño en el sistema de posicionamiento** del UAS.",
        "**Incursión de una persona** en el área de operación.",
        "**Salida del área de operación** definida al preparar el vuelo.",
        "Una **aeronave tripulada** vuela cerca.",
        "**Otro UAS** entra en el área.",
        "**Pérdida de altitud** o del control de la posición por un fenómeno externo.",
        "**Pérdida del enlace C2** (mando y control)."
      ], pg: 154 },
      { p: "Lo concreto depende de cada aeronave: hay que seguir las **instrucciones del fabricante**." },

      { h: "Qué hacer en cada caso", pg: 155 },
      { ojo: "Regla general: **asegurar el control** de la aeronave o, si no es posible, **aterrizar**." },
      { kv: [
        ["Pérdida o degradación del GNSS", "Pasar a **modo manual** y **aterrizar**. En tierra, verificar el sistema y repararlo si hace falta."],
        ["Una persona entra en el área", "**Alejar** la aeronave de ella y **aterrizar en manual**, **sin sobrevolarla** nunca."],
        ["La aeronave sale del área", "Devolverla con **control manual** o activando el **RTH**; si no se puede, **aterrizar** cuanto antes para que no se aleje más."],
        ["Aeronave tripulada cerca", "**Aterrizar a la mayor brevedad**."],
        ["Otro UAS en el área", "**Alejarse** de él y **aterrizar** lo antes posible."],
        ["El tiempo altera la altitud o la posición", "**Aterrizar inmediatamente**."],
        ["Pérdida o degradación del enlace C2", "**Acercarse con la unidad de mando** a la aeronave para recuperar el control y **aterrizar**. Es recomendable tener **preprogramado el RTH**."]
      ], pg: 156 },
      { nov: "La lista detallada de contingencias y qué hacer en cada una es nueva respecto al temario anterior." },
      { tip: "Casi todo acaba en **aterrizar**. Lo que cambia es el «antes»: manual (GNSS), alejarse (persona, otro UAS), volver (salida del área), acercarse con la emisora (C2)." }
    ]
  },
  {
    id: "s15-4", title: "Después del vuelo y resumen", pages: [157, 160],
    blocks: [
      { h: "Registros de la operación", pg: 157 },
      { p: "Al terminar, el piloto anota en el **registro de vuelos** de la aeronave toda la información relevante, **sobre todo las horas de vuelo**: así se controla el estado de la aeronave y se planifica el mantenimiento." },
      { h: "Mantenimiento" },
      { ul: [
        "Hacer una **revisión exterior** para detectar daños o deterioros del vuelo (mejor con listas de verificación).",
        "Si ha fallado algún sistema del UAS durante el vuelo: hacer el **mantenimiento oportuno** y **anotar la incidencia** en el registro.",
        "El **operador**, con los registros de vuelo, hace **periódicamente** el mantenimiento que indique el fabricante."
      ] },

      { h: "Recuerda", pg: 158 },
      { ul: [
        "Los procedimientos operacionales son las directrices **antes, durante y después** de cada vuelo.",
        "Deben estar **escritos** cuando **el operador y el piloto no son la misma persona**. Si lo son, se pueden seguir los procedimientos de las **instrucciones del fabricante**.",
        "Para comprobar el MEUH se recomiendan **listas de control (checklist)**, para hacer cada tarea en orden."
      ] },
      { p: "Si hay alguna incidencia durante el vuelo, o si el piloto lo cree oportuno, mantenimiento según el fabricante o, si hace falta, en un **centro de mantenimiento**.", pg: 160 }
    ]
  }
]);
