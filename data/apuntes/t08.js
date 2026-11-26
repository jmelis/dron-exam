// Apuntes del tema 8 · El UAS: mando, sensores y mantenimiento (temario Ed.12, p. 70–89).
AP.add(8, [
  {
    id: "s08-1", title: "Las partes de un UAS", pages: [70, 72],
    blocks: [
      { h: "Componentes", pg: 70 },
      { def: "Chasis, marco o fuselaje", d: "El **esqueleto** de la aeronave: la estructura principal, que determina su tamaño y forma. Se hace con aleaciones ligeras de aluminio, magnesio y titanio y, para pesar menos, con materiales compuestos (fibra de carbono, fibra de vidrio, plástico)." },
      { def: "Grupo motopropulsor", d: "Motores, hélices y rotores que mueven la aeronave. En los giroaviones lo más usado son los **motores eléctricos sin escobillas**." },
      { def: "Hélices", d: "Las giran los motores y elevan la aeronave por las fuerzas aerodinámicas. En general, **cuanto más larga la hélice, más empuje**. Suelen ser de fibra de carbono, plástico o nailon." },
      { def: "Baterías", d: "Las más usadas son las de **polímero de litio (Li-Po)**. Se cargan **más despacio** que las de Ni-Cd o Ni-MH, pero se fabrican en **más formas** que las de ion-litio, lo que aprovecha mejor el espacio del fuselaje." },
      { def: "Placa controladora de vuelo", d: "El «**cerebro**» de la aeronave: el ordenador integrado que **da las órdenes de movimiento** y **recoge los datos** del sistema. Incluye giróscopos, sensores de altitud y altura, de variación de altura, brújula, sensores de velocidad y de posición, etc." },
      { def: "Unidad de mando", d: "Emisores y receptores de radio que envían a la aeronave las órdenes de los mandos y reciben los datos de sus sensores por las antenas. El piloto los ve en pantallas, LED, vibraciones…" },
      { def: "Reguladores de velocidad (ESC, «Electronic Speed Control»)", d: "Hacen que cada motor gire a la velocidad necesaria: un circuito eléctrico que **varía la velocidad y la dirección del motor**.", pg: 71 },
      { def: "Gimbal o cardán", d: "**Estabiliza la carga de pago**: la mantiene nivelada, permite girarla en los ejes **x, y, z** desde la estación de control y evita que le afecten los movimientos de la aeronave y las vibraciones de hélices y motores." },
      { def: "Carga de pago (carga útil)", d: "Cualquier instrumento, equipo o accesorio instalado en la aeronave que **no se usa para manejarla o controlarla en vuelo**. Las más comunes: cámaras ópticas, térmicas y multiespectrales." },
      { def: "Tren de aterrizaje", d: "Para tomar tierra sin daños. En cuadricópteros suelen ser patas, a veces con las antenas y luces LED que avisan al piloto de problemas; también los hay **retráctiles** para no tapar la cámara. En ala fija: ruedas, un patín en la panza o el propio fuselaje reforzado." },
      { img: "img/p072-componentes.webp", alt: "Foto del temario de un cuadricóptero desmontado con sus partes señaladas: hélices, motores, placa controladora, ESC, estructura, batería y tren de aterrizaje.", pg: 72 }
    ]
  },
  {
    id: "s08-2", title: "Estación de control, ejes y movimientos", pages: [73, 80],
    blocks: [
      { h: "Estación de control (GCS)", pg: 73 },
      { p: "Normalmente el UAS se maneja con una estación de control o emisora llamada **GCS** («Ground Control System»): una emisora con sticks y botones, un ordenador o, en equipos avanzados, hasta remolques. Su función principal es el **mando y control** del UAS." },
      { ul: [
        "**Emisor/receptor de señal**: envía a la aeronave las órdenes de vuelo y recibe los datos de los sensores por radio, a través de una antena.",
        "**Mandos**: controlan los motores y los demás sistemas que influyen en el vuelo.",
        "**Visualización y gestión de datos**: procesa posicionamiento y telemetría y muestra la información del vuelo. Con transmisor FPV en la aeronave, muestra las imágenes de sus cámaras. Su software permite programar el piloto automático, controlar la cámara, ver la telemetría, usar **geocaging** o **geofencing** y volver al punto de origen."
      ], pg: 74 },

      { h: "Ejes y movimientos", pg: 75 },
      { p: "Los **ejes de vuelo** son tres líneas imaginarias, **perpendiculares entre sí**, alrededor de las cuales gira la aeronave. Se cruzan en el **centro de gravedad**." },
      { img: "img/p076-ejes.webp", alt: "Dibujo del temario de un multirrotor con los tres ejes: longitudinal (X) de delante atrás, lateral (Y) de lado a lado y vertical (Z) de arriba abajo, todos cruzándose en el centro de gravedad.", pg: 76 },
      { kv: [
        ["Longitudinal (X)", "De morro a cola (ala fija) o de delante atrás (giroavión). Movimiento: **alabeo** («roll»), inclinarse a izquierda o derecha."],
        ["Lateral o transversal (Y)", "De punta a punta de las alas o de izquierda a derecha. Movimiento: **cabeceo** («pitch»), hacia delante o hacia atrás."],
        ["Vertical (Z)", "De arriba abajo por el centro de gravedad. Movimiento: **guiñada** («yaw»), girar sobre sí mismo."]
      ] },
      { p: "Los sticks envían señales a la controladora de vuelo, que las pasa a los **servos** (ala fija) o a los **ESC de cada motor** (giroaviones) para subir o bajar su velocidad.", pg: 75 },
      { tip: "**A**labeo, **C**abeceo, **G**uiñada van en el orden de los ejes **X, Y, Z**: longitudinal, lateral, vertical." },

      { h: "Ala fija: superficies de control", pg: 77 },
      { kv: [
        ["Alerones", "Alabeo (eje longitudinal)."],
        ["Timón de profundidad", "Cabeceo (eje lateral)."],
        ["Timón de dirección", "Guiñada (eje vertical)."]
      ] },

      { h: "Multirrotor: cómo se mueve un cuadricóptero en X", pg: 78 },
      { p: "La controladora **varía la velocidad de algunos motores** para crear una fuerza resultante:" },
      { kv: [
        ["Alabeo", "Más velocidad en los motores del lado **izquierdo** → bascula y se desplaza a la **derecha**."],
        ["Cabeceo", "Más velocidad en los motores **traseros** → bascula hacia delante y **avanza**."],
        ["Guiñada", "Más velocidad en los motores que giran en sentido **horario** → gira en sentido **antihorario**."]
      ] },
      { ojo: "Siempre al revés: suben los de la izquierda → va a la derecha; suben los de atrás → va hacia delante; suben los horarios → gira antihorario.", pg: 80 }
    ]
  },
  {
    id: "s08-3", title: "Comunicaciones y sensores", pages: [81, 83],
    blocks: [
      { h: "Enlaces de comunicación", pg: 81 },
      { kv: [
        ["Subida (GCS → UAS)", "**Comandos de control** (plan de vuelo, velocidad, vuelta a casa, despegue, aterrizaje…), **correcciones GNSS** si las hay y **comandos de la carga de pago** (gimbal, vídeo, foto)."],
        ["Bajada (UAS → GCS)", "**Telemetría** (datos de vuelo), estado de la carga de pago (posición del gimbal) y de las **baterías**, y el **vídeo/imágenes**."]
      ] },
      { p: "Parámetros típicos de un enlace de mando y control: **rango efectivo**, **frecuencia** de operación y **latencia**." },
      { def: "Latencia", d: "Tiempo necesario para **producir, procesar, enviar, recibir, interpretar y ejecutar** una orden." },
      { def: "Banda de frecuencia", d: "Una pequeña sección del espectro radioeléctrico con canales para servicios similares, para evitar interferencias. Frecuencias típicas en UAS: **2,4 GHz y 5,8 GHz**." },
      { ojo: "Si se pierde el radioenlace, en la mayoría de los UAS una **alarma** visual y sonora avisa en la estación de control y, si el UAS tiene **vuelta a casa (RTH)**, se activa **automáticamente**. Mira en la documentación si tu UAS la tiene." },

      { h: "Sensores", pg: 82 },
      { kv: [
        ["IMU", "Unidad de medición inercial: calcula la **posición relativa**. Es un **acelerómetro** (aceleración lineal) + un **giróscopo** (velocidad angular)."],
        ["GNSS", "Sistema de posicionamiento global por satélite: da la **posición absoluta**. En 3D (x, y, z) hacen falta **al menos 4 satélites**."],
        ["Posición relativa", "Altímetro, sonar, sensor ultrasónico de altura AGL, Deckfinder."],
        ["Barómetro", "Sensor de presión: permite un **altímetro** (suele indicar **pies, ft**) y un **indicador de velocidad vertical** (ascenso y descenso, **ft/min**)."],
        ["Magnetómetro", "Da el **norte magnético**: una **brújula** para saber hacia dónde apunta el morro."],
        ["Sense and Avoid (SAA)", "Sistema anticolisión: **detecta y evita obstáculos fijos** en la trayectoria **sin intervención del piloto**."]
      ] },
      { p: "Para la altura de vuelo también se usan **radioaltímetros** o datos del GNSS." },

      { h: "Geofencing y geocaging", pg: 83 },
      { p: "La geolocalización permite al UAS conocer su posición exacta, hacer operaciones automatizadas y ayudar al piloto." },
      { kv: [
        ["Geofencing", "Límite virtual que **impide ENTRAR** en un volumen por software."],
        ["Geocaging", "Límite virtual que **impide SALIR** de un volumen (sin superar sus límites horizontales y verticales)."]
      ] },
      { tip: "**Fence** = valla para que no entres. **Cage** = jaula para que no salgas." }
    ]
  },
  {
    id: "s08-4", title: "Autopiloto, instrucciones del fabricante y mantenimiento", pages: [84, 89],
    blocks: [
      { h: "Instrumentos de vuelo", pg: 84 },
      { def: "Autopiloto", d: "Gestiona los datos de los sensores para dar órdenes a motores y superficies de control según los comandos recibidos. Permite seguir la **ruta planificada** compensando el viento y otras perturbaciones." },
      { ojo: "Si se pierde el **GNSS**, el autopiloto pasa a **vuelo estacionario** («hovering») y, si no recupera la señal en un tiempo preestablecido, **aterriza en vertical**." },
      { def: "Sistema de terminación de vuelo (FTS, «Flight Termination System»)", d: "Termina el vuelo en condiciones de seguridad ante una emergencia. Ejemplos:" },
      { ul: [
        "**Vuelta a casa (RTH, «Return To Home»)**: si falla la comunicación o se pierde el control, **mantiene una altura predeterminada**, **vuelve a una posición de seguridad** definida antes y **aterriza** sola.",
        "**Aterrizaje por agotamiento de batería**."
      ] },

      { h: "Lo que hay que saber del UAS antes del primer vuelo", pg: 85 },
      { p: "Hay que **leer y seguir las instrucciones del fabricante**. En ellas están:" },
      { ul: [
        "Los principales elementos del UAS y cómo se maneja antes, durante y después de cada vuelo.",
        "Las **limitaciones** de la aeronave.",
        "El **control en todas las fases del vuelo**: arranque de motores, despegue, modos de vuelo, aterrizaje y parada.",
        "Los **procedimientos en caso de fallo** (pérdida de GNSS, pérdida del enlace…) y cómo configurar el **RTH** antes del vuelo.",
        "Cómo **fijar la altura máxima**, **cargar las zonas geográficas** y **cargar el número de registro de operador**."
      ] },
      { h: "Limitaciones de la aeronave", pg: 86 },
      { ul: [
        "**Meteorológicas**: viento máximo, lluvia, niebla, temperatura. Evalúalas antes de cada vuelo.",
        "De **altura máxima** y de **distancia horizontal** segura entre piloto y aeronave.",
        "De **MTOM**: si añades sistemas o cambias la carga útil, **nunca superes la MTOM**.",
        "De **batería y tiempo de vuelo**: rango de temperatura de uso y duración (cambia según el modo de vuelo)."
      ] },
      { h: "Altura máxima, zonas geográficas y número de operador", pg: 88 },
      { ul: [
        "Si el UAS permite fijar una **altura máxima**, no se podrá superar durante el vuelo.",
        "Carga la información **más actualizada** de la **zona geográfica** de la operación (la facilita el Estado miembro).",
        "Antes del vuelo, carga el **número de registro de operador** (único, intransferible y **privado**) en el **sistema de identificación remota**, si lo tiene."
      ] },

      { h: "Mantenimiento e inspección prevuelo", pg: 89 },
      { p: "Para mantener la aeronavegabilidad hay que seguir las **instrucciones de mantenimiento del fabricante**. Antes de **cada** vuelo, el piloto hace una **inspección exterior** para detectar defectos. En general se revisa:" },
      { ul: [
        "Equipo de control, sistemas de apoyo y subsistemas (**antenas, cableado, conexiones**).",
        "**Integridad estructural** (fuselaje, célula, motores, hélices).",
        "**Baterías** o combustible (voltajes, estado).",
        "Sistemas anexos (**cámara, sensores**).",
        "**Comprobación dinámica** de motores y superficies de control.",
        "**Actualización de software/firmware**."
      ] },
      { ojo: "La inspección prevuelo es del **aparato**: no incluye trámites como comprobar el registro de operador en AESA." }
    ]
  }
]);
