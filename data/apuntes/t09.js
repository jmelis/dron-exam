// Apuntes del tema 9 · Espacio aéreo y zonas geográficas (temario Ed.12, p. 90–103).
// La p. 92 (vuelos en entorno urbano) está en los apuntes del tema 3.
AP.add(9, [
  {
    id: "s09-1", title: "Los UAS en el espacio aéreo: alturas y presiones", pages: [90, 93],
    blocks: [
      { h: "Un espacio aéreo compartido", pg: 90 },
      { p: "Los UAS, **sea cual sea su MTOM**, pueden usar el **mismo espacio aéreo** que las aeronaves tripuladas: el **cielo único europeo** («SES», Single European Sky). Sus operaciones deben ser **tan seguras** como las de las aeronaves tripuladas." },
      { p: "Se está desarrollando el **U-space**: infraestructura, servicios y procedimientos para garantizar la seguridad de las operaciones con UAS y su integración en el espacio aéreo." },
      { ojo: "Para volar en **A1 y A3** hay que **obtener y respetar** la información **actualizada** sobre restricciones y condiciones de vuelo que publican los Estados miembros." },

      { h: "120 m sobre el terreno", pg: 91 },
      { p: "En categoría «abierta» la altura máxima es de **120 m (400 ft)** sobre la superficie, **siguiendo los cambios del terreno**: la aeronave no se aleja más de 120 m del **punto más próximo de la superficie**, salvo al sobrevolar un obstáculo." },
      { p: "Si un Estado miembro define una zona geográfica con una altura máxima **más baja**, el piloto debe cumplirla siempre." },
      { p: "Las normas de vuelo en entorno urbano (p. 92) están en el tema 3." },

      { h: "Definiciones del espacio aéreo", pg: 93 },
      { def: "Geoconsciencia", d: "Función que, con los datos de las autoridades aeronáuticas, **detecta** una posible violación de las limitaciones del espacio aéreo y **avisa** al piloto para que la evite." },
      { def: "Zona geográfica de UAS", d: "Parte del espacio aéreo fijada por la autoridad competente que **facilita, restringe o excluye** operaciones de UAS." },
      { def: "FL (Flight Level, nivel de vuelo)", d: "Altitud de una aeronave a la **presión atmosférica estándar**, expresada en **cientos de pies**. Sirve para garantizar la separación vertical entre aeronaves." },
      { def: "IFR (reglas de vuelo instrumental)", d: "Normas del Reglamento de Circulación Aérea para volar usando **instrumentos** para la navegación: no hace falta ver el terreno." },
      { def: "VFR (reglas de vuelo visual)", d: "Normas del Reglamento (UE) 923/2012 (SERA) con las condiciones para que el piloto dirija la aeronave, navegue y se separe de obstáculos **solo con la observación visual**." },

      { h: "Altura, altitud y nivel de vuelo" },
      { img: "img/p093-presiones.webp", alt: "Dibujo del temario: altura (QFE) medida desde la superficie del terreno, altitud (QNH) desde el nivel del mar y nivel de vuelo (QNE) desde la isobara estándar de 1013 hPa. 1 ft = 0,3 m; 400 ft = 120 m." },
      { kv: [
        ["QFE", "**Altura**: sobre la **superficie del terreno**."],
        ["QNH", "**Altitud**: sobre el **nivel del mar**."],
        ["QNE", "**Nivel de vuelo**: sobre la isobara estándar de **1013 hPa**."]
      ] },
      { kv: [
        ["1 ft", "0,3 m"],
        ["400 ft", "120 m"]
      ] },
      { tip: "**Altura** → desde el terreno (QFE). **Altitud** → desde el mar (QNH). **Nivel de vuelo** → desde 1013 hPa (QNE)." }
    ]
  },
  {
    id: "s09-2", title: "Estructura y clases del espacio aéreo", pages: [94, 98],
    blocks: [
      { h: "Controlado y no controlado", pg: 94 },
      { kv: [
        ["Controlado", "Espacio de dimensiones definidas donde se presta **servicio de control de tránsito aéreo (ATC)** a los vuelos IFR y VFR, según la clase de espacio aéreo."],
        ["No controlado", "Espacio donde **no** se presta servicio ATC."]
      ] },

      { h: "Estructuras del espacio aéreo", pg: 95 },
      { p: "Volúmenes en 3 dimensiones creados para facilitar los **servicios de tránsito aéreo (ATS)**:" },
      { kv: [
        ["CTR · zona de control", "Desde el **suelo** hasta una altura determinada. **Protege y controla** el movimiento de las aeronaves de uno o más aeródromos, sobre todo las entradas y salidas **IFR**. Se extiende **al menos 5 NM** desde el centro del aeropuerto."],
        ["ATZ · zona de tránsito de aeródromo", "Alrededor de un aeródromo para proteger y controlar su tráfico, sobre todo el **VFR**. Si el aeródromo acepta IFR, habrá un CTR que suele englobar el ATZ."],
        ["FIZ · zona de información de vuelo", "Espacio **NO controlado** desde la superficie hasta un límite superior, asociado a aeródromos **AFIS**, que dan información a las aeronaves de su zona."]
      ] },

      { h: "Clases de espacio aéreo", pg: 96 },
      { kv: [
        ["Controlado", "Clases **A, B, C, D y E**."],
        ["No controlado", "Clases **F y G**."]
      ] },
      { p: "Cada clase tiene sus obligaciones y limitaciones para los pilotos y sus servicios ATS, y cambian según el vuelo sea **VFR** (visual) o **IFR** (instrumental)." },
      { img: "img/p097-espacio-aereo.webp", alt: "Dibujo del temario de la distribución general del espacio aéreo: clase G junto al suelo, clases B, C y D alrededor de aeropuertos con torre, clase E por encima y clase A entre 18.000 ft MSL y FL 600.", pg: 97 },
      { ojo: "Los **aeropuertos con torre** pueden estar en espacio de clase **B, C o D**, según el tráfico que admitan." },
      { h: "La tabla de clases", pg: 98 },
      { cards: [
        { t: "Clase A", rows: [["Vuelos", "**Solo IFR**."], ["Separación", "Todas."], ["Autorización ATC", "Sí."]] },
        { t: "Clase B", rows: [["Vuelos", "VFR e IFR."], ["Separación", "Todas."], ["Autorización ATC", "Sí."]] },
        { t: "Clase C", rows: [["Vuelos", "VFR e IFR."], ["Separación", "IFR/IFR, IFR/VFR, VFR/IFR."], ["Límite", "Solo VFR: 250 KIAS por debajo de 10.000 ft AMSL."], ["Autorización ATC", "Sí."]] },
        { t: "Clase D", rows: [["Vuelos", "VFR e IFR."], ["Separación", "IFR/IFR."], ["Límite", "250 KIAS por debajo de 10.000 ft AMSL."], ["Autorización ATC", "Sí."]] },
        { t: "Clase E", rows: [["Vuelos", "VFR e IFR."], ["Separación", "IFR/IFR."], ["Autorización ATC", "Solo para IFR."]] },
        { t: "Clases F y G (no controladas)", rows: [["Vuelos", "VFR e IFR."], ["Separación", "F: IFR/IFR. G: ninguna."], ["Servicios", "F: asesoramiento de tráfico e información. G: servicio de información de vuelo."], ["Autorización ATC", "No."]] }
      ] },
      { nov: "La clasificación del espacio aéreo (clases A a G) y su tabla no estaban en el temario anterior." }
    ]
  },
  {
    id: "s09-3", title: "Zonas geográficas UAS y restricciones", pages: [99, 103],
    blocks: [
      { h: "Zonas geográficas UAS", pg: 99 },
      { p: "En ellas solo se vuela, cuando está permitido, con las limitaciones y condiciones de cada zona. Hay dos tipos:" },
      { h: "Generales" },
      { ul: [
        "**Prohibidas, restringidas** y asociadas al **uso flexible del espacio aéreo** (Real Decreto 1180/2018).",
        "Por **seguridad militar**, Defensa Nacional y seguridad del Estado.",
        "Por protección de **instalaciones e infraestructuras** de servicios esenciales.",
        "Por **seguridad ciudadana** y protección de personas y bienes en **entornos urbanos**.",
        "Por seguridad operacional en el entorno de **aeródromos o helipuertos**, civiles o militares.",
        "Por seguridad operacional en **espacio aéreo controlado** y en **FIZ**."
      ] },
      { h: "Particulares" },
      { p: "Las aprueba la **CIDETRA** (Comisión Interministerial entre **Defensa y Transportes**) por razones de interés general. Son **permanentes**, aunque su activación puede ser **temporal**, y solo se crean si una zona general no cubre ya el motivo." },
      { nov: "Las zonas geográficas particulares de la CIDETRA son nuevas respecto al temario anterior." },

      { h: "Qué pueden hacer los Estados miembros", pg: 100 },
      { p: "Las zonas geográficas ayudan a controlar riesgos de **seguridad pública**, **protección de datos personales**, **privacidad** y **medio ambiente**. En ellas los Estados pueden:" },
      { ul: [
        "**Prohibir** algunas o todas las operaciones.",
        "Exigir **condiciones particulares** o una **autorización**.",
        "Permitir el acceso solo a **ciertas clases** de UAS.",
        "Someter las operaciones a **normas ambientales** específicas.",
        "Permitir el acceso solo a UAS con **determinados elementos**.",
        "Exigir que lleven ciertas **funcionalidades** (identificación remota, geoconsciencia…)."
      ] },
      { p: "Además, tras una evaluación del riesgo, pueden crear **excepciones** a uno o más requisitos de la categoría «abierta»." },
      { ojo: "En la lista no hay nada parecido a «obligar a volar por encima de 120 m»: las zonas **prohíben, condicionan, limitan** o crean **excepciones**." },
      { h: "Dónde consultarlas", pg: 101 },
      { p: "La información de las zonas y su validez es **pública** y está en un **formato digital común**, para que funcione la geoconsciencia. En España, en el visor cartográfico **ENAIRE drones**: drones.enaire.es." },
      { p: "Si el UAS tiene geoconsciencia, **actualizarla** es responsabilidad del **operador**, cuando sea aplicable según el lugar de la operación." },

      { h: "Restricciones del espacio aéreo", pg: 102 },
      { p: "La autoridad aérea puede establecer, de forma permanente o temporal, restricciones y reservas que limitan o prohíben el vuelo de ciertas aeronaves:" },
      { kv: [
        ["Peligrosa (D, «Dangerous»)", "Puede haber en algún momento una **actividad peligrosa** para la circulación aérea. El piloto debe **informarse** de cuál es y cuándo."],
        ["Restringida (R, «Restricted»)", "Solo pueden volar las aeronaves que cumplan los **requisitos de acceso** de la autoridad (salvo aeronaves del Estado)."],
        ["Prohibida (P, «Prohibited»)", "Solo pueden volar aeronaves **autorizadas por el Estado español**."]
      ] },
      { p: "En España cada zona se identifica con **3 letras** y una serie numérica (una serie para D, R y P y otra para espacios temporalmente segregados):" },
      { kv: [
        ["LE", "Península, **Ceuta** y **Baleares**."],
        ["GE", "**Melilla**."],
        ["GC", "**Canarias**."],
        ["TS", "Espacio **temporalmente segregado**, tras el prefijo de nacionalidad (p. ej. **LETS22**)."],
        ["TR", "Espacio **temporalmente restringido** (p. ej. **LETR3**)."]
      ] },
      { p: "Ejemplos: GEP114, LER57, GCD79." },
      { nov: "Los prefijos de identificación de las zonas (LE, GE, GC, TS, TR) son nuevos respecto al temario anterior." },

      { h: "Otros espacios especiales", pg: 103 },
      { kv: [
        ["TSA", "Espacio **temporalmente segregado**: delimitado temporalmente para **uso exclusivo** de una actividad autorizada."],
        ["TRA", "Espacio **temporalmente reservado**: asignado a un usuario durante un periodo; el **ATC podría permitir otro tránsito**."],
        ["ZRFV", "Zona **restringida al vuelo fotográfico**: hace falta **autorización previa** para fotografiar, filmar o tomar imágenes aéreas (objetos clasificados o áreas de acceso restringido)."],
        ["F", "Zona de **fauna sensible**: por medio ambiente y protección de especies se puede **restringir o prohibir** el vuelo de UAS."]
      ] },
      { p: "Toda esta información aeronáutica está en el **AIP de ENAIRE**." }
    ]
  }
]);
