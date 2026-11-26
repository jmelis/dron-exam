// Apuntes del tema 1 · Normativa y conceptos básicos (temario Ed.12, p. 4–16).
// Formato: ver data/topics.js (window.AP). Los IDs de sección son permanentes.
AP.add(1, [
  {
    id: "s01-1", title: "UAS, piloto, operador y autoridades", pages: [4, 7],
    blocks: [
      { h: "UAS, RPAS, dron o aeromodelo", pg: 4 },
      { p: "Se usan varios términos para las aeronaves no tripuladas. ¿Qué diferencia hay entre ellos?" },
      { def: "UAS · «sistema de aeronave no tripulada»", d: "Aeronave no tripulada y el equipo para controlarla de forma remota. Engloba los **RPAS** y las aeronaves **autónomas**." },
      { def: "Operación autónoma", d: "El piloto a distancia **no puede intervenir** durante el vuelo." },
      { def: "RPAS · «sistema de aeronave pilotada por control remoto»", d: "Aeronave pilotada a distancia, su estación, los enlaces requeridos de mando y control y cualquier otro componente según el diseño de la aeronave." },
      { def: "Aeronave no tripulada", d: "Cualquier aeronave que opere o esté diseñada para operar de forma autónoma o para ser pilotada a distancia **sin piloto a bordo**.", pg: 5 },
      { def: "Dron («drone»)", d: "Palabra coloquial para referirse en general a todas las aeronaves no tripuladas." },
      { def: "Aeromodelo", d: "Aeronave de tamaño reducido pilotada a distancia, usada sobre todo para vuelos deportivos o experimentales." },
      { ojo: "RPAS, dron y aeromodelo quedan **dentro** del concepto de UAS. Los Reglamentos (UE) 2019/945 y 2019/947 usan **siempre «UAS»**." },

      { h: "Piloto a distancia y operador de UAS", pg: 6 },
      { def: "Piloto a distancia", d: "Toda persona **física** responsable de la conducción segura del vuelo de un UAS con sus mandos: manualmente o, si la aeronave vuela de forma automática, **supervisando** el vuelo (rumbo, velocidad, altura, entorno…) y siendo capaz de **intervenir** y cambiar rumbo, velocidad y/o altura en cualquier momento." },
      { def: "Operador de UAS", d: "Cualquier persona, **física o jurídica**, que sea **propietaria** de un UAS o lo **alquile**." },
      { ul: [
        "Una persona puede ser **operador y piloto a la vez** si es ella misma quien vuela el UAS.",
        "Se puede ser **piloto sin ser operador**: por ejemplo, un piloto que trabaja para una compañía que ofrece servicios con UAS.",
        "Quien vuela un UAS **en su tiempo libre** también es operador de UAS."
      ] },
      { ojo: "Piloto: solo persona **física**. Operador: persona física **o jurídica** (una empresa puede ser operador)." },

      { h: "EASA y AESA", pg: 7 },
      { def: "EASA · Agencia de la Unión Europea para la Seguridad Aérea", d: "Su función principal es **unificar los estándares comunes** en todos los Estados miembros para velar por la seguridad de la aviación civil. Lo consigue redactando normas comunes; para los UAS ha desarrollado los Reglamentos (UE) 2019/947 y 2019/945." },
      { def: "AESA · Agencia Estatal de Seguridad Aérea", d: "Organismo estatal que vela por el cumplimiento de las normas de aviación civil en toda la actividad aeronáutica de España y promueve el desarrollo y la aplicación de la legislación aeronáutica, nacional e internacional, para aportar seguridad, calidad y sostenibilidad." },
      { ojo: "Si se incumplen las normas de aviación civil en territorio nacional, quien tiene la **potestad sancionadora** es **AESA**." }
    ]
  },
  {
    id: "s01-2", title: "Historia y marco normativo", pages: [8, 12],
    blocks: [
      { h: "De 2014 a 2024", pg: 8 },
      { tl: [
        ["Ley 18/2014", "Hasta 2014 el uso de RPAS en España no estaba regulado. Su **artículo 50** fijaba los requisitos de las operaciones con RPAS y de los pilotos remotos."],
        ["Real Decreto 1036/2017", "Entra en vigor a finales de 2017 (normativa nacional). Regula el uso civil de RPAS en España y **deroga el artículo 50** de la Ley 18/2014."],
        ["Reglamentos (UE) 2019/947 y 2019/945", "Entran en vigor en **junio de 2019**. Los desarrolla EASA para regular los UAS y su uso en todos los Estados miembros."],
        ["Real Decreto 517/2024", "Entra en vigor el **25 de junio de 2024**. Desarrolla el régimen jurídico del uso civil de los UAS y **deroga el Real Decreto 1036/2017**."]
      ] },

      { h: "Reglamentos, GM y AMC", pg: 9 },
      { p: "EASA ha desarrollado el **Reglamento de Ejecución (UE) 2019/947** y el **Reglamento Delegado (UE) 2019/945**, publicados por la Comisión en 2019. Además ha publicado **Material Guía (GM)** y **Medios Aceptables de Cumplimiento (AMC)**, que ayudan a entenderlos y aplicarlos." },
      { ul: [
        "Los **Reglamentos** son **vinculantes** en su totalidad y de **aplicación directa** en todos los Estados miembros de EASA (31 Estados de Europa).",
        "El **GM** y los **AMC no son vinculantes**.",
        "Los Reglamentos están en la web del Diario Oficial de la Unión Europea (DOUE): www.eur-lex.europa.eu."
      ] },

      { h: "Reglamento Delegado (UE) 2019/945", pg: 10 },
      { ul: [
        "Establece los requisitos de **diseño y fabricación** de los UAS que se usan según el Reglamento de Ejecución 2019/947. Define los requisitos de las clases **C0, C1, C2, C3 y C4**.",
        "Define los tipos de UAS cuyo diseño, producción y mantenimiento están sujetos a **certificación**.",
        "Fija normas de **comercialización** de los UAS para la categoría «abierta» y de los accesorios de identificación a distancia.",
        "Fija normas para operadores de **terceros países** (no miembros de EASA) que operen en el espacio aéreo del cielo único europeo («SES», Single European Sky)."
      ] },
      { p: "Lo modifica el **Reglamento Delegado (UE) 2020/1058**, que, entre otras cosas, introduce dos clases nuevas, **C5 y C6**: las que se usan en los escenarios estándar europeos." },

      { h: "Reglamento de Ejecución (UE) 2019/947", pg: 11 },
      { p: "Establece disposiciones detalladas sobre la **utilización** de los UAS y sobre el **personal** (incluidos los pilotos a distancia) y las organizaciones que participan en las operaciones. Lo han modificado:" },
      { kv: [
        ["(UE) 2020/639", "Entre otros cambios, introduce los requisitos de la categoría «específica» con **escenario estándar (STS)**. También aplaza fechas de aplicación."],
        ["(UE) 2020/746", "Aplaza fechas de aplicación por la pandemia de COVID-19."],
        ["(UE) 2021/1166", "Aplaza los escenarios estándar europeos (**3/12/23**) y la obligación de **luces verdes nocturnas** y de **identificación a distancia** (**1/7/22**)."]
      ] },
      { p: "Todas estas modificaciones están recogidas en el texto consolidado publicado en el DOUE." },
      { tip: "**945 = el aparato** (diseño, fabricación, clases C0–C4). **947 = el vuelo** (utilización, personal, operaciones)." },

      { h: "Real Decreto 517/2024", pg: 12 },
      { p: "Establece el régimen jurídico en lo que los Reglamentos de Ejecución y Delegado dejan regular a cada Estado miembro, o en lo que directamente no regulan. Además cambia aspectos importantes:" },
      { ul: [
        "Modifica las condiciones de obligatoriedad de un **seguro** mínimo para los UAS.",
        "Modifica las **edades mínimas** de los pilotos a distancia.",
        "Crea el **Registro de aeronaves del Ministerio del Interior**: todos los UAS deben quedar vinculados en todo momento a sus propietarios.",
        "Establece nuevos volúmenes de **zonas geográficas** de UAS.",
        "Desarrolla el régimen de las organizaciones de formación, examen y evaluación de pilotos en categoría «específica» autorizada.",
        "Designa a **AESA como autoridad notificante** y concreta sus competencias en aeronavegabilidad, personal y operaciones de UAS.",
        "Fija los órganos competentes para designar zonas geográficas de UAS particulares como el **U-Space**, y para certificar y supervisar a quienes prestan servicios en ellas.",
        "Crea un marco normativo propio para las actividades **NO EASA**."
      ] },
      { nov: "El Real Decreto 517/2024 es nuevo respecto al temario que estudiaste: sustituye al Real Decreto 1036/2017." }
    ]
  },
  {
    id: "s01-3", title: "Definiciones importantes", pages: [13, 16],
    blocks: [
      { h: "Personas, riesgos y preparación", pg: 13 },
      { def: "Concentraciones de personas", d: "Reuniones en las que las personas **no pueden evitar el impacto** de un UAS en caída libre por la densidad de personas y el espacio en el que están reunidas." },
      { def: "Consciencia situacional", d: "Percepción de uno mismo y de su aeronave en relación con el ambiente dinámico del vuelo, con capacidad para **pronosticar** lo que ocurrirá según lo que se percibe (saber lo que ocurre en cada momento para gestionar los riesgos)." },
      { def: "Infraestructura crítica", d: "Infraestructuras **estratégicas** que prestan **servicios esenciales** y cuyo funcionamiento es indispensable: su perturbación o destrucción tendría un impacto grave sobre esos servicios (salud, electricidad, agua, transporte…)." },
      { def: "Lista de control («checklist»)", d: "Documento con un conjunto de tareas preparatorias que se hacen normalmente **antes de iniciar** una operación." },

      { h: "Vuelo y observadores", pg: 14 },
      { def: "Mercancía peligrosa", d: "Cualquier artículo o sustancia que transporte la aeronave y que pueda suponer un peligro para la salud, la seguridad, los bienes o el medio ambiente en caso de incidente o accidente." },
      { def: "VLOS («Visual line of sight»)", d: "Operación en la que el piloto a distancia mantiene **contacto visual continuo** con la aeronave **sin ayuda de instrumentos** y puede controlar su trayectoria para evitar colisiones con otras aeronaves, personas y obstáculos." },
      { def: "BVLOS («Beyond visual line of sight»)", d: "Operación que **no** se realiza dentro del alcance visual del piloto a distancia." },
      { def: "Observador de la aeronave no tripulada", d: "Persona situada **al lado del piloto** que, mirando la aeronave **sin instrumentos**, le ayuda a mantenerla en VLOS y a volar de forma segura." },
      { def: "Observador del espacio aéreo", d: "Persona que ayuda al piloto observando, **sin instrumentos**, el espacio aéreo en el que se vuela para detectar posibles **peligros en el aire**." },
      { tip: "Observador **de la aeronave**: mira el dron. Observador **del espacio aéreo**: mira el cielo alrededor." },

      { h: "Personas no participantes y entorno urbano", pg: 15 },
      { def: "Persona no participante", d: "Persona que **no participa** en la operación del UAS o que **no conoce** las instrucciones y precauciones de seguridad dadas por el operador." },
      { def: "Rendimiento («performance»)", d: "Conjunto de capacidades del UAS según el objetivo principal para el que se ha diseñado." },
      { def: "Entorno urbano", d: "El que está en alguna de estas superficies:" },
      { ol: [
        "**Núcleos de población** con áreas consolidadas por la edificación.",
        "**Áreas residenciales, comerciales o industriales** que tengan a la vez accesos rodados, vías públicas pavimentadas para peatones, evacuación de aguas y alumbrado público.",
        "**Áreas recreativas** de acceso público con construcciones o instalaciones, permanentes o eventuales, para el ocio, el recreo o el deporte. Entre ellas, siempre, los **parques o jardines** de las entidades locales y las **playas** que cumplan ambos requisitos."
      ] },

      { h: "Sistemas y zonas", pg: 16 },
      { def: "Sistema de geoconsciencia", d: "Función que, con los datos de los Estados miembros, **detecta una posible violación** de las limitaciones del espacio aéreo y **avisa al piloto** para que actúe de inmediato y la evite." },
      { def: "Identificación a distancia directa (DRI)", d: "Sistema que emite localmente información de la aeronave en vuelo, incluido su marcado, para que se pueda obtener **sin acceder físicamente** a ella." },
      { def: "Zona geográfica de UAS", d: "Parte del espacio aéreo fijada por la autoridad competente que **facilita, restringe o excluye** operaciones de UAS para gestionar riesgos de seguridad, protección, privacidad, protección de datos o medio ambiente. Las hay **generales** y **particulares**." },
      { def: "Modo sígueme", d: "La aeronave **sigue constantemente al piloto** dentro de un radio predeterminado." }
    ]
  }
]);
