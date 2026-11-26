// Apuntes del tema 4 · Clases, «legacy», DRI y ruido (temario Ed.12, p. 24–38).
// Qué subcategoría vuela cada clase está en los apuntes del tema 3.
AP.add(4, [
  {
    id: "s04-1", title: "Clases C0 y C1", pages: [26, 28],
    blocks: [
      { h: "Sin marcado de clase (para comparar)", pg: 26 },
      { p: "En A1 también vuelan UAS sin clase: los de **construcción privada** con MTOM **menor de 250 g** y velocidad máxima **inferior a 19 m/s**, y los «**legacy**» de **menos de 250 g** comercializados antes del 1/1/2024." },

      { h: "Clase C0", pg: 27 },
      { ul: [
        "MTOM **menor de 250 g**.",
        "Velocidad máxima **menor de 19 m/s**.",
        "Altura máxima de vuelo **limitada a 120 m**.",
        "**Controlable y manejable** de forma segura.",
        "**Diseñado para evitar dañar a las personas**.",
        "**Eléctrico**.",
        "Comercializado con las **instrucciones del fabricante**."
      ] },

      { h: "Clase C1", pg: 28 },
      { ul: [
        "MTOM **menor de 900 g** o **energía de impacto menor de 80 J**.",
        "Velocidad máxima **menor de 19 m/s**.",
        "Altura máxima de vuelo **limitada a 120 m**.",
        "Controlable y manejable de forma segura y diseñado para evitar dañar a las personas.",
        "Un **método para finalizar el vuelo de forma segura o recuperar el enlace** si se pierde.",
        "**Identificación a distancia (DRI)**.",
        "Sistema de **geoconsciencia**.",
        "**Número de serie** físico y único.",
        "**Luces** de controlabilidad y visibles de noche.",
        "Eléctrico y comercializado con las instrucciones del fabricante."
      ] },
      { ojo: "Lo que tiene un **C1** y no un C0: **DRI**, **geoconsciencia**, número de serie único, **luces** y método para terminar el vuelo o recuperar el enlace." },
      { tip: "C0 y C1 comparten el límite de **19 m/s** y de **120 m**. Peso: C0 < 250 g; C1 < 900 g (o < 80 J)." }
    ]
  },
  {
    id: "s04-2", title: "Clases C2, C3 y C4", pages: [31, 34],
    blocks: [
      { h: "Clase C2", pg: 31 },
      { ul: [
        "MTOM **menor de 4 kg**.",
        "**Función de baja velocidad**, con límite de **menos de 3 m/s**.",
        "Altura máxima de vuelo **limitada a 120 m**.",
        "**Enlace de datos protegido ante interferencias**.",
        "Método para finalizar el vuelo de forma segura o recuperar el enlace.",
        "**DRI**, **geoconsciencia**, número de serie físico y único y **luces** de controlabilidad y visibles de noche.",
        "Controlable y manejable, diseñado para evitar dañar a las personas, eléctrico y con las instrucciones del fabricante."
      ] },

      { h: "Clase C3", pg: 33 },
      { ul: [
        "MTOM **menor de 25 kg**.",
        "**Dimensión máxima menor de 3 m**.",
        "Altura máxima de vuelo **limitada a 120 m**.",
        "**Enlace de datos protegido ante interferencias**.",
        "Método para finalizar el vuelo de forma segura o recuperar el enlace.",
        "**DRI**, **geoconsciencia**, número de serie físico y único y **luces**.",
        "Controlable y manejable, eléctrico y con las instrucciones del fabricante."
      ] },

      { h: "Clase C4", pg: 34 },
      { ul: [
        "MTOM **menor de 25 kg**.",
        "Controlable y manejable de forma segura.",
        "**No dispone de modo automático de vuelo**, salvo **asistencia a la estabilización** y en caso de **pérdida de conexión**.",
        "Comercializado con las instrucciones del fabricante."
      ] },
      { ojo: "El C4 es la clase más sencilla: **sin vuelo automático** y **sin DRI** de serie." },

      { h: "Todas las clases de un vistazo", pg: 24 },
      { kv: [
        ["C0", "< 250 g · < 19 m/s"],
        ["C1", "< 900 g o < 80 J · < 19 m/s · DRI"],
        ["C2", "< 4 kg · baja velocidad < 3 m/s · enlace protegido · DRI"],
        ["C3", "< 25 kg · < 3 m de dimensión · enlace protegido · DRI"],
        ["C4", "< 25 kg · sin vuelo automático · sin DRI"]
      ] },
      { tip: "**Enlace protegido ante interferencias**: C2 y C3. **Método para terminar el vuelo o recuperar el enlace**: C1, C2 y C3 (el C0 no lo pide)." }
    ]
  },
  {
    id: "s04-3", title: "Ruido e identificación a distancia (DRI)", pages: [36, 38], extra: ["t04-10"],
    blocks: [
      { h: "Restricciones de ruido", pg: 36 },
      { ul: [
        "Todos los UAS con marcado de clase de **C0 a C4** que **no sean de ala fija** deben cumplir los requisitos de ruido.",
        "Para cumplirlos, el marcado debe incluir, **en la aeronave o en su caja**, una indicación del **nivel de sonido de ponderación A** (LWA), como esta:"
      ] },
      { img: "img/p036-ruido.webp", alt: "Etiqueta de ruido del temario: símbolo de altavoz, LWA y 60 dB." },
      { nov: "Los requisitos de ruido no estaban en el temario anterior." },

      { h: "DRI: identificación a distancia directa", pg: 37 },
      { p: "Desde el **1 de enero de 2024** deben llevar DRI todos los UAS de clase **C1, C2 y C3** que vuelen en categoría «abierta» y **todos** los UAS que vuelen en categoría «específica». El sistema debe permitir:" },
      { ol: [
        "**Cargar el número de registro del operador** y cualquier número adicional del sistema de registro; el sistema hace un control de coherencia.",
        "**Transmitir periódicamente y en tiempo real** unos datos mínimos durante todo el vuelo, que puedan recibir los dispositivos móviles existentes.",
        "**Reducir la posibilidad de manipular** el funcionamiento del sistema."
      ] },
      { p: "EASA ha publicado una lista de fabricantes que ofrecen DRI con «Declaración de Conformidad de la UE»." },

      { h: "Qué datos transmite, como mínimo", pg: 38 },
      { ul: [
        "**Número de registro del operador** y el código de verificación que da el Estado miembro al registrarse.",
        "**Número de serie único** de la aeronave.",
        "**Sello de tiempo**, **posición geográfica** de la aeronave y su **altura** sobre la superficie o el punto de despegue.",
        "**Trayectoria** (en sentido horario desde el norte geográfico) y **velocidad** respecto al suelo.",
        "**Posición geográfica del piloto** a distancia.",
        "Indicación de **situación de emergencia** del UAS."
      ] },
      { ojo: "En la lista mínima **no** están el nombre ni el DNI del piloto: del piloto se transmite su **posición**." },
      { p: "Llevan DRI **de serie** todos los UAS de clase **C1, C2, C3, C5 y C6**. Para volar en categoría «específica» con un UAS **sin marcado de clase**, el **operador** debe equipar la aeronave con DRI." },
      { kv: [
        ["Con DRI", "C1 · C2 · C3 (y C5 · C6)"],
        ["Sin DRI", "C0 · C4 · construcción privada · «legacy»"]
      ], pg: 24 },
      { nov: "Las páginas sobre DRI (obligatoria desde el 1/1/2024) son nuevas respecto al temario anterior." }
    ]
  }
]);
