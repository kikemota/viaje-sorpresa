// Contenido de la guía (extraído de «Escapada a Luxemburgo – Guía Completa de Fin de Semana»).
// day: 5 = viernes, 6 = sábado, 0 = domingo (Date.getDay()).
window.TRIP = {
  title: 'Escapada a Luxemburgo',
  subtitle: 'Del viernes 17:00 h al domingo 15:35 h',
  hotel: 'Hotel Kazawiki Kazawork (Gare Centrale)',
  badge: 'Transporte gratuito en todo el país',

  days: [
    { id: 'vie', day: 5, label: 'Viernes', short: 'Vie', stops: [
      { id: 'llegada', ana: "¿Y si el bus 29 nos deja en otra parada? ¿Y si es gratis porque es una trampa? Llevo apuntado el teléfono del consulado. Por si acaso.", alberto: "Os cuento: el 29 pasa cada 15 minutos, cosa fascinante, porque en los años noventa… (veinte minutos después) …y por eso el transporte es gratis. Ah, que ya hemos llegado.", start: '17:00', end: '18:30', img: 'img/llegada.jpg',
        title: 'Llegada al aeropuerto y traslado al hotel',
        items: [
          ['Bus directo 29 (20-25 min)', 'Autobús gratuito desde la terminal de llegada hasta la parada Gare Centrale. Pasa cada 15 min.'],
          ['Alternativa: Bus 16 + Tranvía T1', 'Bus 16 hasta Pfaffenthal-Kirchberg y conexión directa con el tranvía T1 hasta la estación.'],
          ['Llegada al Hotel Kazawiki', 'A 3-5 minutos a pie de la estación central. Check-in rápido y listos para salir a pasear.']
        ], map: 'Gare Centrale Luxembourg' },
      { id: 'noche', ana: "La Passerelle está altísima. Yo cruzo por el centro, sin mirar abajo y agarrada del brazo de alguien. De quien sea.", alberto: "En la cena le explicaré al camarero cómo se hace el Judd mat Gardebounen. Lo cocina desde hace treinta años, pero seguro que aprende algo.", start: '18:30', end: '22:00', img: 'img/noche.jpg',
        title: 'Primer contacto nocturno y cena tradicional',
        items: [
          ['Paseo por Avenue de la Liberté', 'Desde el hotel cruzando la Passerelle (viaducto), con vistas iluminadas al valle del Pétrusse.'],
          ['Cena: Bistro des Capucins', 'En el centro histórico (Théâtre Capucins). Prueba Judd mat Gardebounen o tarta de ciruelas.'],
          ['Copa en la Place d\'Armes', 'Ambiente nocturno bajo los árboles iluminados de la plaza principal.']
        ], map: 'Place d\'Armes Luxembourg' }
    ]},
    { id: 'sab', day: 6, label: 'Sábado', short: 'Sáb', stops: [
      { id: 'tour', ana: "En el cambio de guardia llevan armas. Me pongo detrás de Alberto, que no se va a dar cuenta porque estará hablando.", alberto: "El guía habla dos horas y media; yo, tres. Hacemos un tour paralelo, también gratis. El mío con más anécdotas.", start: '10:00', end: '12:30', img: 'img/tour.jpg',
        title: 'Free tour por la Ciudad Alta (Ville Haute)',
        note: 'Salida a las 10:00 h en Place Guillaume II (estatua ecuestre). Duración: 2h30.',
        numbered: true,
        items: [
          ['Place Guillaume II y Ayuntamiento', 'Origen del Ducado e historia de la monarquía luxemburguesa.'],
          ['Palacio Gran Ducal', 'Residencia oficial de los Grandes Duques, con cambio de guardia y fachada renacentista.'],
          ['Catedral de Notre-Dame', 'Templo gótico del siglo XVII con la cripta ducal y la Virgen Consoladora.'],
          ['Chemin de la Corniche', '«El balcón más hermoso de Europa», con panorámicas del Grund.']
        ], map: 'Place Guillaume II Luxembourg' },
      { id: 'comida', ana: "¿Chocolate hirviendo en una cuchara? Lo soplaré veintidós veces. Y luego otras diez, por si acaso.", alberto: "Pediré los Gromperekichelcher con perfecto acento luxemburgués. Me contestarán en español, pero el gesto es lo que cuenta.", start: '12:30', end: '14:30',
        title: 'Pausa gastronómica: chocolate y bistrós',
        items: [
          ['Chocolate House Nathaly', 'Frente al Palacio Ducal. Elige tu cuchara de chocolate artesanal para disolver en leche caliente.'],
          ['Kniddelen', 'Bolas de masa hervida con crema y bacon crujiente, en los bistrós locales.'],
          ['Gromperekichelcher', 'Tortitas de patata rallada con cebolla y perejil, servidas con compota de manzana.']
        ], map: 'Chocolate House Luxembourg' },
      { id: 'grund', ana: "¿Un ascensor que atraviesa la montaña? ¿Y si se queda atascado dentro de la roca? Bajo andando. Aunque las escaleras también me dan un poco de miedo.", alberto: "La abadía tiene cuatro siglos de historia y pienso contarlos todos, en orden. Traed bocadillo.", start: '15:00', end: '18:00', img: 'img/grund.jpg',
        title: 'El barrio del Grund (Ciudad Baja)',
        items: [
          ['Ascensor del Plateau St. Esprit', 'Bajada directa y gratuita en ascensor a través de la roca hasta el valle.'],
          ['Abadía de Neumünster (Neimënster)', 'Antiguo monasterio benedictino del siglo XVII, hoy espacio cultural junto al río.'],
          ['Puente del siglo XV y orillas del Alzette', 'Ruta fotográfica entre casitas integradas en la roca defensiva.']
        ], map: 'Neimënster Luxembourg' },
      { id: 'kirchberg', ana: "71 metros. Suelo de cristal. No, no y no. Os espero abajo con el móvil para haceros la foto. Bien lejos.", alberto: "La Philharmonie tiene 823 columnas y ninguna me ha interrumpido. Por fin un público a mi altura.", start: '18:00', end: '20:00', img: 'img/kirchberg.jpg',
        title: 'Ascensor de Pfaffenthal y Kirchberg',
        items: [
          ['Ascensor panorámico de Pfaffenthal', 'Cabina de cristal a 71 m sobre el valle, con pasarela de suelo de vidrio.'],
          ['Fuerte Thüngen y Mudam', 'Las torres «Drai Echelen» frente al museo de I.M. Pei.'],
          ['Philharmonie Luxembourg', '823 columnas de acero blanco en el corazón financiero del Kirchberg.']
        ], map: 'Pfaffenthal Lift Luxembourg' }
    ]},
    { id: 'dom', day: 0, label: 'Domingo', short: 'Dom', stops: [
      { id: 'schengen', ana: "¿Tres países a la vez? ¿Y si me quedo sin cobertura en los tres? Tened el pasaporte a mano, que me da tranquilidad.", alberto: "Explicaré el Acuerdo de Schengen artículo por artículo, en francés, alemán y luxemburgués. No hablo ninguno, pero eso nunca me ha frenado.", start: '09:30', end: '14:00', img: 'img/schengen.jpg', approx: true,
        title: 'Excursión a Schengen y viñedos del Mosela',
        note: 'Opción principal · 35 min de trayecto. Alternativas en la pestaña Excursiones.',
        items: [
          ['Monumento del Acuerdo de Schengen', 'Plaza y museo dedicados al tratado de 1985 que eliminó los controles fronterizos.'],
          ['Trifinio internacional', 'Donde se juntan Luxemburgo, Francia y Alemania, a orillas del Mosela.'],
          ['Cata de vinos blancos', 'Riesling, Pinot Gris y Auxerrois. Ideal como aperitivo.']
        ], map: 'Schengen Luxembourg' },
      { id: 'fin', ana: "¡Lo hemos conseguido y estamos todos enteros! Ahora solo queda el vuelo de vuelta… ay, madre.", alberto: "Discurso de despedida. Duración estimada: el vuelo entero. Llevad auriculares.", start: '15:35', end: '15:35',
        title: 'Fin del viaje',
        items: [['Hasta la próxima', 'Termina la escapada a Luxemburgo.']] }
    ]}
  ],

  excursions: [
    { id: 'schengen', ana: "¿Tres países a la vez? ¿Y si me quedo sin cobertura en los tres? Tened el pasaporte a mano, que me da tranquilidad.", alberto: "Explicaré el Acuerdo de Schengen artículo por artículo, en francés, alemán y luxemburgués. No hablo ninguno, pero eso nunca me ha frenado.", img: 'img/schengen.jpg', tag: 'Opción principal · 35 min',
      title: 'Schengen: cuna de Europa y viñedos del Mosela',
      items: [
        ['Monumento del Acuerdo de Schengen', 'Plaza y museo dedicados al tratado de 1985 que eliminó los controles fronterizos europeos.'],
        ['Trifinio internacional', 'Punto donde convergen Luxemburgo, Francia y Alemania a lo largo del Mosela.'],
        ['Cata de vinos blancos', 'Riesling, Pinot Gris y Auxerrois. Ideal para un aperitivo mañanero.']
      ], map: 'Schengen Luxembourg' },
    { id: 'vianden', ana: "¿Un castillo con mazmorras y además un telesilla? Las dos cosas el mismo día no, por favor.", alberto: "Tengo preparada una charla sobre los siglos XI al XIV. Un siglo por cada curva de la carretera.", img: 'img/vianden.jpg', tag: 'Alternativa I · ~50 min',
      title: 'Castillo de Vianden',
      items: [
        ['Fortaleza románica y gótica', 'Siglos XI a XIV, sobre un castrum romano. Uno de los castillos feudales más bellos de Europa.'],
        ['Telesilla panorámico', 'El único del Gran Ducado: sube desde el río Our hasta la colina con vistas al castillo.'],
        ['Cómo llegar', 'Tren hasta Ettelbruck y bus directo, unos 50 min. Gratis con el transporte nacional.']
      ], map: 'Vianden Castle' },
    { id: 'mullerthal', ana: "¿Una cueva y un bosque frondoso? Ahí viven cosas. Voy con linterna, silbato y el móvil al cien por cien.", alberto: "En Echternach hay una procesión danzante. Yo no bailo, pero la narro en directo.", img: 'img/mullerthal.jpg', tag: 'Alternativa II',
      title: 'Mullerthal (Pequeña Suiza) y Echternach',
      items: [
        ['Cascada de Schiessentumpel', 'Cascada de tres chorros con un puente de piedra en mitad del bosque.'],
        ['Abadía de Echternach', 'La ciudad más antigua del país: basílica del siglo VII y procesión danzante, Patrimonio UNESCO.'],
        ['Cueva Hohllay', 'Roca con surcos circulares tallados desde época romana para sacar piedras de molino.']
      ], map: 'Schiessentumpel' }
  ],

  history: [
    { era: 'Desde el 963 hasta el siglo XVII', img: 'img/historia1.jpg', title: 'Fundación medieval, leyendas y expansión imperial', items: [
      ['963', 'Adquisición del promontorio del Bock', 'El conde Sigfrido de las Ardenas adquiere el antiguo fuerte romano Lucilinburhuc por permuta con la abadía de San Maximino de Tréveris.'],
      ['Leyenda', 'La sirena Melusina', 'La esposa de Sigfrido se transformaba en sirena en el Alzette a cambio de levantar la fortaleza en una sola noche.'],
      ['1354', 'Elevación a Ducado', 'Carlos IV eleva el condado a Ducado. La casa de Luxemburgo da cuatro emperadores al Sacro Imperio y reyes a Bohemia.'],
      ['1659', 'Tratado de los Pirineos y Vauban', 'Tras borgoñones y españoles, Francia toma el control y Vauban multiplica las casamatas defensivas.']
    ]},
    { era: 'Siglos XIX y XX', img: 'img/historia2.jpg', title: 'Independencia, neutralidad e integración europea', items: [
      ['1815', 'Congreso de Viena y Gran Ducado', 'Gran Ducado en unión personal con la corona de los Países Bajos, dentro de la Confederación Germánica.'],
      ['1867', 'Tratado de Londres e independencia', 'Soberanía y neutralidad perpetua; se ordena desmantelar las murallas.'],
      ['1914 y 1940', 'Ocupación en las guerras mundiales', 'Invadido por Alemania en ambas. Tras 1945 deja la neutralidad y entra en el Benelux y la OTAN.'],
      ['1952', 'Sede de instituciones europeas', 'Capital comunitaria junto a Bruselas y Estrasburgo: Tribunal de Justicia de la UE y Banco Europeo de Inversiones.']
    ]}
  ],

  facts: [
    ['🗣️', 'Trilingüismo oficial', 'Luxemburgués en casa, alemán en prensa y escuela primaria, francés en administración y comercios.'],
    ['🌍', '47% extranjeros', 'Más de 150 nacionalidades. La comunidad portuguesa es casi el 15% del país.'],
    ['📈', 'PIB per cápita líder', 'El más alto del mundo y el salario mínimo más alto de la UE (2.500 €+).'],
    ['💬', 'Lema nacional', '«Mir wëlle bleiwe wat mir sinn»: queremos seguir siendo lo que somos.'],
    ['🚆', 'Trabajadores transfronterizos', 'Más de 200.000 personas llegan cada día desde Francia, Alemania y Bélgica.'],
    ['🛡️', 'Seguridad de récord', 'Según la ONU, uno de los países más seguros del planeta.'],
    ['🎤', '5 victorias en Eurovisión', 'Entre ellas France Gall y Vicky Leandros.'],
    ['🚗', 'Muchos coches', 'Más de 650 turismos por cada 1.000 habitantes, el ratio más alto de Europa.'],
    ['💐', 'Costumbre de las flores', 'Se regalan en número impar (salvo 13). Los crisantemos, solo en funerales.'],
    ['🦁', 'Símbolos patrios', 'El León Rojo del escudo y el pequeño reyezuelo (goldcrest).'],
    ['🍑', 'Licor Quetsch', 'Aguardiente artesanal de ciruelas amarillas o moradas.'],
    ['🎨', 'Casino sin apuestas', 'El Casino Luxembourg es un museo de arte contemporáneo, no una sala de juego.']
  ],

  tips: [
    ['📱', 'App Mobiliteit.lu', 'La app oficial con horarios en tiempo real de trenes, buses y tranvías.'],
    ['👟', 'Calzado cómodo', 'Calles empedradas y muchas cuestas entre la Ciudad Alta y el Grund.'],
    ['🕕', 'Horarios comerciales', 'Las tiendas cierran pronto el sábado (18:00 h) y no abren el domingo.'],
    ['🎟️', 'Luxembourg Card (opcional)', 'Entradas con gran descuento a museos y castillos como Vianden.']
  ],

  prices: [
    ['☕', 'Café / cappuccino', '3,50 € - 4,80 €', 'En cafetería céntrica o terraza de Place d\'Armes.'],
    ['🍺', 'Cerveza nacional (0,5 L)', '4,50 € - 6,50 €', 'Battin, Diekirch o Bofferding de grifo en el Grund.'],
    ['🍽️', 'Comida o cena en bistró', '22 € - 38 € / pers.', 'Plato principal y bebida, por ejemplo en Capucins.'],
    ['🚌', 'Transporte público', 'Gratis', 'Buses, trenes y tranvías en todo el país (2ª clase).', true],
    ['⛽', 'Gasolina 95 / diésel', '1,52 € - 1,65 € / L', 'Más barato que en los países vecinos.'],
    ['🏰', 'Entrada a castillos', '7,00 € - 10,00 €', 'Fortificaciones y museos principales, como Vianden.']
  ],

  excuses: [
    ['ana', 'No fui porque daba miedo.'],
    ['ana', 'Me pareció ver a la sirena Melusina en el Alzette.'],
    ['ana', 'El ascensor hacía un ruido rarísimo.'],
    ['ana', 'Me quedé vigilando las mochilas. Alguien tenía que hacerlo.'],
    ['ana', 'Estaba demasiado alto. O demasiado oscuro. O las dos cosas.'],
    ['ana', 'Lo vi en una foto y con eso me vale.'],
    ['alberto', 'Me entretuve explicándole la historia de Luxemburgo a un luxemburgués.'],
    ['alberto', 'No llegamos tarde: llegamos con más contexto histórico.'],
    ['alberto', 'Solo iba a decir una cosa. Al final eran 47.'],
    ['alberto', 'El guía me pidió que siguiera yo.'],
    ['alberto', 'Eso no estaba en el PowerPoint.'],
    ['alberto', 'Lo pone en la diapositiva 17. (La diapositiva 17 está en blanco.)']
  ],

  doneToasts: [
    'Alberto ya lo está contando en el grupo de WhatsApp.',
    'Ana respira aliviada: nadie se ha caído.',
    'Alberto quiere añadir un par de datos. Corred.',
    'Ana lo ha visto desde una distancia prudencial. Cuenta igual.',
    '¡Hecho! Alberto prepara un resumen de solo 40 minutos.'
  ],

  ranks: [
    [0, 'Turista recién aterrizado'],
    [2, 'Más valiente que Ana (no es difícil)'],
    [4, 'Superviviente de una charla de Alberto'],
    [6, 'Gran Duque honorario'],
    [7, 'Aprobado por Ana y Alberto 🏅']
  ],

  credits: [
    'luxembourg-city.com', 'visitluxembourg.com', 'freerangetravellers.com', 'christophevanbiesen.com',
    'expedia.com', 'visitmoselle.lu', 'nextleveloftravel.com', 'mullerthal.lu'
  ]
};
