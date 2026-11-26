// Apuntes del tema 10 · Aeródromos, sucesos y U-Space (temario Ed.12, p. 104–114).
AP.add(10, [
  {
    id: "s10-1", title: "Coordinación con aeródromos y helipuertos", pages: [104, 107],
    blocks: [
      { h: "Por qué hay que coordinarse", pg: 104 },
      { p: "El **artículo 41 del RD 517/2024** considera zona geográfica UAS, por seguridad operacional, el **entorno de aeródromos y helipuertos**, civiles o militares. El operador debe tener un **acuerdo de coordinación con el gestor** del aeródromo o helipuerto, que **no puede negarse sin causa justificada**." },
      { nov: "Todo este tema viene del RD 517/2024 y es nuevo respecto al temario anterior." },

      { h: "Áreas que requieren coordinación" },
      { p: "Las distancias se miden desde los **extremos de pista** (a lo largo de la prolongación del eje) y a **ambos lados del eje de pista**; las alturas, desde el punto de referencia del aeródromo (**ARP**) o del helipuerto (**HRP**)." },
      { cards: [
        { t: "Aeródromo civil de uso público o militar", rows: [["Hasta 45 m", "**6 km** de longitud y **5 km** a cada lado."], ["De 45 a 900 m", "**10 km** de longitud y **7,5 km** a cada lado."]] },
        { t: "Helipuerto civil de uso público o militar", rows: [["Hasta 90 m", "**2,5 km** de longitud desde la FATO y **2,5 km** a cada lado."], ["De 90 a 900 m", "**3,3 km** de longitud y **3,3 km** a cada lado del eje de la FATO."]] },
        { t: "Aeródromo civil de uso restringido", rows: [["Hasta 45 m", "**3 km** de longitud y **3 km** a cada lado."], ["De 45 a 900 m", "**5 km** de longitud y **4,5 km** a cada lado."]] },
        { t: "Helipuerto civil de uso restringido", rows: [["Hasta 90 m", "**2,5 km de radio** desde el centro de la FATO."], ["De 90 a 450 m", "**3,3 km** de longitud, medidos desde la FATO."]] }
      ] },
      { p: "FATO: área de aproximación final y de despegue del helipuerto.", pg: 105 },
      { tip: "Aeródromo público: **45 m → 6 y 5 km; 900 m → 10 y 7,5 km**. Uso restringido: más o menos la mitad (3 y 3; 5 y 4,5). Helipuertos: **90 m** y **2,5 km**.", pg: 106 },

      { h: "Recuerda", pg: 107 },
      { ul: [
        "El operador debe revisar el **mapa de zonas geográficas UAS** para ver si necesita coordinarse y, si procede, contactar con el gestor.",
        "Los **contactos** de los gestores están en la web de **ENAIRE drones**.",
        "Más detalle en el Anexo A de la **Guía de zonificación** de AESA (requisitos y limitaciones según el lugar de operación)."
      ] }
    ]
  },
  {
    id: "s10-2", title: "Espacio aéreo controlado, FIZ y radiofonista", pages: [108, 110],
    blocks: [
      { h: "Volar en espacio controlado o en una FIZ", pg: 108 },
      { p: "El **artículo 42 del RD 517/2024** hace zona geográfica UAS el **espacio aéreo controlado** y las **FIZ**. Se puede volar en ellos sin más trámites si se cumplen **las tres** condiciones:" },
      { ol: [
        "Vuelo **VLOS**.",
        "Altura máxima de **60 m AGL**.",
        "**Fuera** de las zonas geográficas (generales o particulares) del entorno de **aeródromos y helipuertos**."
      ] },
      { p: "Así se queda **exento** de:" },
      { ul: [
        "Coordinar con el proveedor de servicios de tránsito aéreo (**ATSP**).",
        "Presentar un **plan de vuelo (FPL)** en **ICARO XXI**.",
        "Tener **autorización ATC** previa o comunicar con **AFIS**."
      ] },
      { h: "Si no se cumple alguna condición", pg: 109 },
      { ul: [
        "Tener un **procedimiento operativo de coordinación** con el proveedor ATS (Evaluación y Atenuación del Riesgo Operacional, **EARO**, o similar).",
        "Presentar un **plan de vuelo (FPL)** en ICARO XXI.",
        "Tener **autorización ATC** previa o comunicar con **AFIS**."
      ] },
      { tip: "**VLOS + 60 m + lejos de aeródromos** = sin papeleo. Si falla una: EARO, FPL y ATC/AFIS." },

      { h: "Radiofonista UAS", pg: 110 },
      { p: "Según el **artículo 43.6 del RD 517/2024**, los proveedores ATS pueden exigir un sistema de **comunicaciones** entre la estación de control y la dependencia de tránsito aéreo. En ese caso el piloto necesita el **certificado de radiofonista UAS**, que consiste en:" },
      { ul: [
        "Una **formación teórica** de AESA y un **examen teórico** en la sede electrónica de AESA.",
        "Una **formación práctica** con un examinador autorizado por AESA."
      ] }
    ]
  },
  {
    id: "s10-3", title: "Notificación de sucesos", pages: [111, 113],
    blocks: [
      { h: "Qué es un suceso", pg: 111 },
      { p: "Cualquier acontecimiento relacionado con la seguridad que **pone en peligro** (o podría, si no se corrige) una aeronave, sus ocupantes o cualquier otra persona, incluidos los **accidentes** e **incidentes graves**." },
      { p: "Notificarlos sirve para **mejorar la seguridad aérea**: recoger, guardar, proteger, intercambiar, difundir y analizar la información. Es clave para **prevenir** accidentes." },

      { h: "Reglamento (UE) 376/2014: dos tipos de notificación" },
      { kv: [
        ["Obligatoria", "Sucesos con UAS que requieren **certificado de aeronavegabilidad** o, si no, sucesos que causen **lesiones mortales o graves** a una persona o impliquen a **aeronaves tripuladas**."],
        ["Voluntaria", "Cualquier otra información sobre sucesos que pongan en peligro la seguridad aérea."]
      ] },
      { h: "Cómo se notifica", pg: 112 },
      { p: "Al **Sistema de Notificación de Sucesos (SNS)** de AESA: **sucesos.aesa@seguridadaerea.es**. Debe incluir al menos:" },
      { ul: ["Datos del **operador**.", "Identificación de la **UA**.", "**Tipo** de operación.", "**Fecha y lugar**.", "**Narrativa** de los hechos."] },
      { ojo: "**Cultura justa**: la información es **confidencial** y solo se usa para **mejorar la seguridad**. El SNS **no busca responsables**." },

      { h: "Otros casos", pg: 113 },
      { ul: [
        "**Categoría «específica» con autorización** (art. 12 del Reglamento 2019/947): según el riesgo, hay que notificar **sucesos adicionales**; su lista va **anexa a la autorización operacional** de AESA. Los operadores que son organizaciones deben tener un sistema integrado para tratarlos.",
        "**Reglamento (UE) 996/2010**: todos los **accidentes** e **incidentes graves** de aeronaves sujetas al Reglamento base de EASA (2018/1139) en espacio aéreo español se notifican a la **CIAIAC** (Comisión de Investigación de Accidentes e Incidentes de Aviación Civil) **lo antes posible y dentro de las 72 horas**: ciaiac@mitma.es o (+34) 915 978 900."
      ] },
      { tip: "**SNS de AESA** para notificar sucesos (no busca culpables). **CIAIAC** para investigar accidentes e incidentes graves: **72 h**." }
    ]
  },
  {
    id: "s10-4", title: "U-Space", pages: [114, 114],
    blocks: [
      { h: "Qué es el U-Space", pg: 114 },
      { p: "Término de la UE para la **gestión del tráfico de aeronaves no tripuladas**: un conjunto de **sistemas, servicios y procedimientos** en un **volumen de espacio aéreo designado** por los Estados miembros para gestionar **muchas operaciones** de UAS de forma eficiente y segura, con un **alto grado de automatismo**." },
      { p: "En cada U-Space hay **dos proveedores**:" },
      { kv: [
        ["USSP", "Proveedor de **servicios U-Space**."],
        ["CIS", "Proveedor de **servicios de información común**."]
      ] },
      { h: "Servicios" },
      { kv: [
        ["Mínimos y obligatorios", "**Identificación de red** (art. 8), **geoconsciencia** (art. 9), **autorización de vuelo** de UAS (art. 10) e **información de tráfico** (art. 11)."],
        ["Opcionales", "**Información meteorológica** (art. 12) y **supervisión de la conformidad** (art. 13)."]
      ] },
      { h: "Qué hace el operador" },
      { ul: [
        "Garantiza que sus UAS cumplen las **capacidades y requisitos** de ese U-Space.",
        "Usa los **servicios U-Space** necesarios cumpliendo sus requisitos.",
        "Cumple las condiciones operativas y las limitaciones del espacio aéreo.",
        "Establece **medidas y procedimientos de contingencia** a disposición de los USSP."
      ] },
      { p: "Para volar:" },
      { ol: [
        "Presenta una **solicitud de autorización de vuelo** a su USSP.",
        "Pide a su USSP la **activación** de la autorización.",
        "Recibe la **confirmación de la activación**.",
        "**Inicia el vuelo**."
      ] },
      { p: "Si no puede cumplir los umbrales de desviación de la autorización, pide una **nueva** autorización." },
      { ojo: "La **información meteorológica** es un servicio **opcional**, no obligatorio." }
    ]
  }
]);
