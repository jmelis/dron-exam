// Apuntes del tema 7 · Principios de vuelo y meteorología (temario Ed.12, p. 60–69).
AP.add(7, [
  {
    id: "s07-1", title: "Aerodinámica y sustentación", pages: [60, 64],
    blocks: [
      { h: "Aerodinámica y perfil aerodinámico", pg: 60 },
      { def: "Aerodinámica", d: "Parte de la mecánica que estudia el **movimiento de los gases alrededor de los objetos**: el efecto que produce en una corriente de aire la presencia de un cuerpo (el perfil aerodinámico). El aire se altera, cambian su **presión** y su **velocidad**, y aparecen dos fuerzas principales: **sustentación** y **resistencia**." },
      { def: "Perfil aerodinámico", d: "Forma de la sección transversal de un elemento que, al moverse en el aire, crea a su alrededor una distribución de presiones que **genera sustentación**. Ejemplos: el **ala** de un avión o las **palas del rotor** de un UAS." },

      { h: "Las teorías que explican el vuelo", pg: 61 },
      { def: "Principio de Bernoulli", d: "En un fluido en movimiento, presión estática + presión dinámica = presión total = **constante**. Por tanto, **si la velocidad aumenta, la presión estática disminuye**." },
      { def: "Efecto Venturi", d: "Al pasar por un **estrechamiento**, el fluido **aumenta su velocidad** y su **presión disminuye**." },
      { def: "Tercera ley de Newton", d: "Toda **acción** tiene una **reacción** igual y de sentido opuesto. El aire que llega por debajo choca con el perfil y se desvía hacia abajo, y el perfil reacciona hacia arriba. El aire que pasa por encima sigue la curvatura y también acaba desviado hacia abajo." },
      { def: "Ángulo de ataque", d: "Ángulo que forma la **cuerda** geométrica del perfil con la **dirección del aire incidente**. Importa más que la forma del perfil: un objeto con curvatura o inclinación en una corriente de aire puede producir sustentación." },

      { h: "Cómo se genera la sustentación", pg: 62 },
      { ol: [
        "La parte superior del ala es curva: el aire pasa por un «estrechamiento» y **se acelera** (efecto Venturi).",
        "Al acelerarse, su **presión baja** (Bernoulli): hay más presión abajo (**intradós**) que arriba (**extradós**).",
        "Esa diferencia de presiones empuja el perfil de la zona de **alta** presión a la de **baja** (acción-reacción). Además, el aire que sale por el **borde de salida** se proyecta hacia abajo (flujo inducido) y añade fuerza hacia arriba."
      ] },
      { p: "En los **multirrotores**, las **hélices** tienen forma de perfil aerodinámico y los rotores las hacen girar para generar la sustentación. En un **ala fija**, el flujo de aire lo crea la velocidad del avión." },

      { h: "Partes de un perfil", pg: 63 },
      { p: "Si cortamos una hélice obtenemos un perfil con estas partes:" },
      { img: "img/p063-perfil.webp", alt: "Perfil aerodinámico del temario con sus partes: borde de ataque delante, borde de salida detrás, extradós arriba, intradós abajo, cuerda, línea de curvatura media y espesor máximo." },
      { kv: [
        ["Extradós", "Superficie **superior** del perfil."],
        ["Intradós", "Superficie **inferior**."],
        ["Borde de ataque", "Parte **delantera**, la que recibe el aire."],
        ["Borde de salida", "Parte **trasera**, donde se juntan los dos flujos."],
        ["Cuerda", "Línea recta del borde de ataque al de salida."]
      ] },

      { h: "Ángulo de ataque y sustentación", pg: 64 },
      { p: "A **mayor ángulo de ataque**, **mayor sustentación**, porque la deflexión de la corriente es mayor y también la fuerza opuesta." },
      { p: "**Sustentación (L) = diferencia de presiones + deflexión de la corriente.**" }
    ]
  },
  {
    id: "s07-2", title: "Las cuatro fuerzas", pages: [65, 66],
    blocks: [
      { h: "Fuerzas aerodinámicas", pg: 65 },
      { kv: [
        ["Sustentación (L, «Lift»)", "La desarrolla el perfil al moverse en el aire. Va **de abajo arriba**, **perpendicular al viento relativo**."],
        ["Peso (W, «Weight»)", "Atracción de la gravedad: hacia **abajo**, perpendicular a la superficie terrestre, proporcional a la **masa**. La sustentación debe contrarrestarlo para despegar."],
        ["Empuje (T, «Thrust»)", "Lo dan el motor, las hélices o los rotores para que la aeronave avance. Se **opone a la resistencia** y debe superarla para desplazarse."],
        ["Resistencia (D, «Drag»)", "Impide el avance: actúa en **dirección opuesta a la trayectoria**, **paralela al viento relativo**. Es **mayor cuanto mayor es la velocidad**."]
      ] },
      { tip: "Por pares opuestos: **sustentación ↔ peso** y **empuje ↔ resistencia**." },

      { h: "Ala fija y multirrotor", pg: 66 },
      { p: "En el **ala fija**, los motores generan específicamente el **empuje**. En el **multirrotor** existen las mismas cuatro fuerzas, pero los motores hacen girar las hélices y la **sustentación se asimila con el empuje**. Si el multirrotor se inclina hacia un lado, el empuje se dirige hacia allí y aparece una componente horizontal que se opone al movimiento: la resistencia." },
      { ojo: "Para que un UAS **se eleve**, la **sustentación** tiene que ser **mayor que el peso**; para que **avance**, el **empuje** tiene que ser **mayor que la resistencia**." }
    ]
  },
  {
    id: "s07-3", title: "Atmósfera, densidad, humedad y viento", pages: [67, 69],
    blocks: [
      { h: "La atmósfera", pg: 67 },
      { p: "La Tierra tiene una parte sólida (**litosfera**), una líquida (**hidrosfera**) y una gaseosa (**atmósfera**), dividida en subcapas. Los UAS vuelan en la **troposfera**." },
      { p: "Influyen mucho en el vuelo la temperatura, la presión, la densidad, el viento, la visibilidad, la actividad solar, las tormentas y el engelamiento. Densidad, temperatura y presión **cambian con la altitud**, y con ellas el rendimiento de la aeronave." },
      { ul: [
        "**Presión**: es el peso del aire sobre un punto; **a mayor altura, menor presión**.",
        "**Temperatura**: disminuye con la altura. Si la temperatura **sube**, las moléculas se dispersan y la **densidad baja**; si baja, ocupan menos espacio y la densidad sube.",
        "**Ley de Boyle**: a temperatura constante, el **volumen** de un gas es **inversamente proporcional** a la **presión**."
      ] },

      { h: "Densidad del aire", pg: 68 },
      { p: "Influye en la **sustentación**, la **resistencia**, el **rendimiento del motor** y la **eficacia de la hélice**." },
      { kv: [
        ["↑ densidad", "↑ sustentación y ↑ resistencia."],
        ["↓ densidad", "↓ sustentación y ↓ resistencia."]
      ] },

      { h: "Humedad y viento", pg: 69 },
      { p: "El vapor de agua es menos denso que el aire seco: el aire **húmedo pesa menos** que el seco. Por eso, **más humedad → menos densidad → menos sustentación**." },
      { p: "El **viento** hay que tenerlo en cuenta antes de cada vuelo: afecta a la **autonomía** y a la **maniobrabilidad** del UAS. El viento **en cara o en cola** afecta al despegue, al ascenso, al crucero y al aterrizaje." },
      { ojo: "Calor y humedad hacen lo mismo: **bajan la densidad** y con ella la **sustentación**." }
    ]
  }
]);
