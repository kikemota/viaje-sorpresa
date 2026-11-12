// Contenido de la guía (extraído de «Escapada a Luxemburgo – Guía Completa de Fin de Semana»).
// day: 5 = viernes, 6 = sábado, 0 = domingo (Date.getDay()).
window.TRIP = {
  title: 'Escapada a Luxemburgo',
  subtitle: 'Del viernes 17:00 h al domingo 15:35 h',
  hotel: 'Hotel Kazawiki Kazawork (Gare Centrale)',
  badge: 'Transporte gratuito en todo el país',

  days: [
    { id: 'vie', day: 5, label: 'Viernes', short: 'Vie', stops: [
      { id: 'llegada', quip: "Ana y Alberto juran que el bus es gratis. Si alguien os pide billete, la culpa es suya.", start: '17:00', end: '18:30', img: 'img/llegada.jpg',
        title: 'Llegada al aeropuerto y traslado al hotel',
        items: [
          ['Bus directo 29 (20-25 min)', 'Autobús gratuito desde la terminal de llegada hasta la parada Gare Centrale. Pasa cada 15 min.'],
          ['Alternativa: Bus 16 + Tranvía T1', 'Bus 16 hasta Pfaffenthal-Kirchberg y conexión directa con el tranvía T1 hasta la estación.'],
          ['Llegada al Hotel Kazawiki', 'A 3-5 minutos a pie de la estación central. Check-in rápido y listos para salir a pasear.']
        ], map: 'Gare Centrale Luxembourg' },
      { id: 'noche', quip: "Alberto dice «solo una copa». Ana ya ha calculado tres rondas. Haced vuestras apuestas.", start: '18:30', end: '22:00', img: 'img/noche.jpg',
        title: 'Primer contacto nocturno y cena tradicional',
        items: [
          ['Paseo por Avenue de la Liberté', 'Desde el hotel cruzando la Passerelle (viaducto), con vistas iluminadas al valle del Pétrusse.'],
          ['Cena: Bistro des Capucins', 'En el centro histórico (Théâtre Capucins). Prueba Judd mat Gardebounen o tarta de ciruelas.'],
          ['Copa en la Place d\'Armes', 'Ambiente nocturno bajo los árboles iluminados de la plaza principal.']
        ], map: 'Place d\'Armes Luxembourg' }
    ]},
    { id: 'sab', day: 6, label: 'Sábado', short: 'Sáb', stops: [
      { id: 'tour', quip: "Ana le hará 14 preguntas al guía. Alberto se quedará embobado con el cambio de guardia. Clásico.", start: '10:00', end: '12:30', img: 'img/tour.jpg',
        title: 'Free tour por la Ciudad Alta (Ville Haute)',
        note: 'Salida a las 10:00 h en Place Guillaume II (estatua ecuestre). Duración: 2h30.',
        numbered: true,
        items: [
          ['Place Guillaume II y Ayuntamiento', 'Origen del Ducado e historia de la monarquía luxemburguesa.'],
          ['Palacio Gran Ducal', 'Residencia oficial de los Grandes Duques, con cambio de guardia y fachada renacentista.'],
          ['Catedral de Notre-Dame', 'Templo gótico del siglo XVII con la cripta ducal y la Virgen Consoladora.'],
          ['Chemin de la Corniche', '«El balcón más hermoso de Europa», con panorámicas del Grund.']
        ], map: 'Place Guillaume II Luxembourg' },
      { id: 'comida', quip: "Según Alberto, el chocolate a la taza «no cuenta como merienda». Ana ya ha pedido dos cucharas.", start: '12:30', end: '14:30',
        title: 'Pausa gastronómica: chocolate y bistrós',
        items: [
          ['Chocolate House Nathaly', 'Frente al Palacio Ducal. Elige tu cuchara de chocolate artesanal para disolver en leche caliente.'],
          ['Kniddelen', 'Bolas de masa hervida con crema y bacon crujiente, en los bistrós locales.'],
          ['Gromperekichelcher', 'Tortitas de patata rallada con cebolla y perejil, servidas con compota de manzana.']
        ], map: 'Chocolate House Luxembourg' },
      { id: 'grund', quip: "¿Quejas por las cuestas? Oficina de reclamaciones de Ana y Alberto. Horario de atención: nunca.", start: '15:00', end: '18:00', img: 'img/grund.jpg',
        title: 'El barrio del Grund (Ciudad Baja)',
        items: [
          ['Ascensor del Plateau St. Esprit', 'Bajada directa y gratuita en ascensor a través de la roca hasta el valle.'],
          ['Abadía de Neumünster (Neimënster)', 'Antiguo monasterio benedictino del siglo XVII, hoy espacio cultural junto al río.'],
          ['Puente del siglo XV y orillas del Alzette', 'Ruta fotográfica entre casitas integradas en la roca defensiva.']
        ], map: 'Neimënster Luxembourg' },
      { id: 'kirchberg', quip: "71 metros y suelo de cristal. Ana y Alberto se ofrecen voluntarios… para hacer la foto desde abajo.", start: '18:00', end: '20:00', img: 'img/kirchberg.jpg',
        title: 'Ascensor de Pfaffenthal y Kirchberg',
        items: [
          ['Ascensor panorámico de Pfaffenthal', 'Cabina de cristal a 71 m sobre el valle, con pasarela de suelo de vidrio.'],
          ['Fuerte Thüngen y Mudam', 'Las torres «Drai Echelen» frente al museo de I.M. Pei.'],
          ['Philharmonie Luxembourg', '823 columnas de acero blanco en el corazón financiero del Kirchberg.']
        ], map: 'Pfaffenthal Lift Luxembourg' }
    ]},
    { id: 'dom', day: 0, label: 'Domingo', short: 'Dom', stops: [
      { id: 'schengen', quip: "Tres países en un punto. Alberto intentará pisar los tres a la vez y Ana lo grabará para la posteridad.", start: '09:30', end: '14:00', img: 'img/schengen.jpg', approx: true,
        title: 'Excursión a Schengen y viñedos del Mosela',
        note: 'Opción principal · 35 min de trayecto. Alternativas en la pestaña Excursiones.',
        items: [
          ['Monumento del Acuerdo de Schengen', 'Plaza y museo dedicados al tratado de 1985 que eliminó los controles fronterizos.'],
          ['Trifinio internacional', 'Donde se juntan Luxemburgo, Francia y Alemania, a orillas del Mosela.'],
          ['Cata de vinos blancos', 'Riesling, Pinot Gris y Auxerrois. Ideal como aperitivo.']
        ], map: 'Schengen Luxembourg' },
      { id: 'fin', quip: "Ana y Alberto aceptan aplausos, abrazos y reseñas de cinco estrellas. Las quejas, por escrito y en luxemburgués.", start: '15:35', end: '15:35',
        title: 'Fin del viaje',
        items: [['Hasta la próxima', 'Termina la escapada a Luxemburgo.']] }
    ]}
  ],

  excursions: [
    { id: 'schengen', img: 'img/schengen.jpg', tag: 'Opción principal · 35 min',
      title: 'Schengen: cuna de Europa y viñedos del Mosela',
      items: [
        ['Monumento del Acuerdo de Schengen', 'Plaza y museo dedicados al tratado de 1985 que eliminó los controles fronterizos europeos.'],
        ['Trifinio internacional', 'Punto donde convergen Luxemburgo, Francia y Alemania a lo largo del Mosela.'],
        ['Cata de vinos blancos', 'Riesling, Pinot Gris y Auxerrois. Ideal para un aperitivo mañanero.']
      ], map: 'Schengen Luxembourg' },
    { id: 'vianden', img: 'img/vianden.jpg', tag: 'Alternativa I · ~50 min',
      title: 'Castillo de Vianden',
      items: [
        ['Fortaleza románica y gótica', 'Siglos XI a XIV, sobre un castrum romano. Uno de los castillos feudales más bellos de Europa.'],
        ['Telesilla panorámico', 'El único del Gran Ducado: sube desde el río Our hasta la colina con vistas al castillo.'],
        ['Cómo llegar', 'Tren hasta Ettelbruck y bus directo, unos 50 min. Gratis con el transporte nacional.']
      ], map: 'Vianden Castle' },
    { id: 'mullerthal', img: 'img/mullerthal.jpg', tag: 'Alternativa II',
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
    'Eso no estaba en el PowerPoint.',
    'Lo pone en la diapositiva 17. (La diapositiva 17 está en blanco.)',
    'Era domingo. Lo avisamos en «Consejos útiles», que nadie leyó.',
    'La cuesta no salía en Google Maps.',
    'Ha sido cosa de la sirena Melusina.',
    'Las calles las diseñó Vauban, no nosotros.',
    'Con el PIB per cápita que tienen, seguro que es normal.',
    'Formaba parte de la sorpresa.',
    'El transporte es gratis. Las quejas, también.',
    'Lo hemos hecho por el bien del grupo.',
    'En luxemburgués eso significa «todo va según el plan».',
    'Mir wëlle bleiwe wat mir sinn: seguimos siendo los mismos de siempre.'
  ],

  ranks: [
    [0, 'Turista recién aterrizado'],
    [2, 'Explorador con agujetas'],
    [4, 'Experto en Kniddelen'],
    [6, 'Gran Duque honorario'],
    [7, 'Aprobado por Ana y Alberto 🏅']
  ],

  credits: [
    'luxembourg-city.com', 'visitluxembourg.com', 'freerangetravellers.com', 'christophevanbiesen.com',
    'expedia.com', 'visitmoselle.lu', 'nextleveloftravel.com', 'mullerthal.lu'
  ]
};
