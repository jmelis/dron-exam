// Apuntes del tema 13 · Seguridad física y baterías (temario Ed.12, p. 125–128).
AP.add(13, [
  {
    id: "s13-1", title: "Robo, secuestro e interferencias", pages: [125, 126],
    blocks: [
      { h: "Interferencia ilícita", pg: 125 },
      { def: "Acto de interferencia ilícita", d: "Intento o acción para **comprometer la seguridad** de aeronaves o de instalaciones aeroportuarias. Con UAS, lo más común es el **robo** o el **secuestro** de la aeronave." },
      { p: "Para evitarlo se recomienda:" },
      { ul: [
        "**Control de acceso** en tierra: una zona **vigilada, acotada y restringida** donde se opera, para evitar acciones sospechosas cerca de la aeronave y de los pilotos.",
        "Una **persona responsable de la vigilancia** en todo momento."
      ] },

      { h: "Transporte, custodia y señal", pg: 126 },
      { ul: [
        "Transportar el UAS en **equipajes preparados** para su transporte y seguridad.",
        "La **custodia y el almacenamiento** del UAS y sus equipos, **baterías incluidas**, son responsabilidad del **piloto a distancia**.",
        "Contra el secuestro por **interferencia deliberada** de la señal de control: medidas como el **encriptado de la señal**."
      ] },
      { def: "Protocolo FHSS", d: "Espectro ensanchado por **salto de frecuencia**: la señal se emite sobre una serie de radiofrecuencias aparentemente aleatorias, **saltando** de una a otra de forma sincronizada entre emisora y aeronave, para **evitar interferencias deliberadas**." }
    ]
  },
  {
    id: "s13-2", title: "Precauciones del piloto y baterías", pages: [127, 128],
    blocks: [
      { h: "Precauciones", pg: 127 },
      { kv: [
        ["Carga útil", "Antes de **cada** vuelo, comprobar que está **bien fijada** y que **se mueve** correctamente."],
        ["Motores y hélices", "Pueden causar **heridas graves**: mantener una **distancia de seguridad** al **arrancar y parar** los motores."],
        ["Equipamiento personal", "Proteger las **partes más vulnerables** del cuerpo frente a las hélices."]
      ] },

      { h: "Baterías", pg: 128 },
      { p: "Son muy sensibles: un mal uso, carga o almacenamiento puede tener consecuencias graves." },
      { cards: [
        { t: "Durante la carga", rows: [["Sí", "Solo **cargadores específicos** · **vigilar** la batería mientras carga."], ["No", "Cargar cerca de **materiales inflamables** · cargar baterías **hinchadas**, estropeadas o dañadas · **sobrecargar**."]] },
        { t: "Transporte", rows: [["Cómo", "En el **rango de temperaturas** del fabricante y en **bolsas ignífugas**."]] },
        { t: "Almacenamiento", rows: [["Dónde", "En **recipiente metálico o cerámico** o **bolsa ignífuga**, en el rango de temperaturas del fabricante, **lejos del calor y del fuego**."], ["Carga", "**Nunca completamente descargadas**: con carga parcial, en torno al **30 %**."]] }
      ] },
      { ojo: "Una batería **hinchada** no se carga aunque aún funcione, y **nunca** se sobrecarga para ganar autonomía." }
    ]
  }
]);
