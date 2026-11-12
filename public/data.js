// Contenido de la guía (de «Escapada a Luxemburgo – Guía Completa de Fin de Semana», versión 5).
// day: 5 = viernes, 6 = sábado, 0 = domingo (Date.getDay()).
// Cada parada puede llevar un consejo de Ana (prudente y amable) y otro de Alberto (hablador y gracioso).
window.TRIP = {
  title: 'Escapada a Luxemburgo',
  tagline: 'El corazón y el gran secreto de Europa',
  dates: '16–18 Nov',
  subtitle: 'Del viernes 17:00 h al domingo 15:35 h',
  hotel: 'Hotel Kazawiki Kazawork (Gare Centrale)',
  badge: 'Transporte gratuito en todo el país',

  days: [
    { id: 'vie', day: 5, label: 'Viernes', stops: [
      { id: 'llegada', start: '17:00', end: '19:00', img: 'img/llegada.jpg',
        title: 'Del aeropuerto al Hotel Kazawiki',
        items: [
          ['Paso 1: Bus 29 directo (20 min)', 'Gratis, desde la terminal de llegadas hasta la parada Gare Centrale. Pasa cada 15 min.'],
          ['Alternativa: tranvía T1', 'Bus 16 hasta Pfaffenthal-Kirchberg y desde allí el tranvía T1 directo hasta la estación.'],
          ['Paso 2: a pie al hotel (5 min)', 'Transporte 100 % gratis, sin billete. El hotel está a 400 metros de la estación.']
        ], map: 'Gare Centrale Luxembourg',
        ana: 'Antes de subir al 29, guardad la dirección del hotel en el móvil. Si alguien se despista, nos esperamos todos en la Gare. Sin dramas.',
        alberto: 'Bus gratis en el país más rico del mundo. He calculado que amortizamos el viaje en dos días. Bueno, en dos años. Bueno, nunca. Pero qué ilusión.' },
      { id: 'noche', start: '19:00', end: '22:30', img: 'img/noche.jpg',
        title: 'Primer paseo iluminado y cena en Bistro des Capucins',
        items: [
          ['Paseo por Avenue de la Liberté', 'Desde el hotel cruzando la Passerelle (viaducto), con vistas iluminadas al valle del Pétrusse.'],
          ['Puente Adolphe y Place de la Constitution', 'El arco de piedra iluminado y la estatua dorada Gëlle Fra.'],
          ['Cena en Bistro des Capucins', 'Cocina franco-luxemburguesa en la Rue des Capucins. Pide Judd mat Gaardebounen o tarta de ciruelas.'],
          ['Copa en Place d\'Armes y Place Guillaume II', 'Paseo nocturno por las plazas peatonales antes de volver en tranvía al hotel.']
        ], map: 'Bistro des Capucins Luxembourg',
        ana: 'De noche refresca en el viaducto: chaqueta para todos. He traído una de repuesto, que ya os conozco.',
        alberto: 'Judd mat Gaardebounen: cerdo ahumado con habas. Suena a conjuro y sabe a gloria. Si nos traen otra cosa, me la como igual y lo llamo experiencia cultural.' },
      { id: 'copas', start: '22:30', end: '23:59', label: 'Desde las 22:30',
        title: '¡Prost! Cervecerías y ambiente',
        note: 'Cervezas artesanales y Crémant, con ambiente entre el Grund y Clausen.',
        items: [
          ['Bistro des Capucins & Bar à Vins', 'Para probar Crémant de Luxembourg y blancos del Mosela con calma.'],
          ['Scott\'s Pub (Grund)', 'Terraza mítica junto al Alzette para probar Bofferding y Battin.'],
          ['Rives de Clausen', 'La antigua fábrica de cerveza Mousel, hoy llena de pubs y música en directo (Brasserie Clausel, Rock Box).'],
          ['The Tube, Urban Bar y Bar à Vins', 'Cerveza de grifo, cócteles y Crémant junto a Place d\'Armes.']
        ], map: 'Rives de Clausen Luxembourg',
        ana: 'Una ronda en cada sitio y agua entre medias, que mañana a las 10:00 hay free tour y os quiero frescos. Y al hotel volvemos juntos.',
        alberto: 'El Crémant es el champán luxemburgués. No puede llamarse champán, igual que yo no puedo llamarme tenor, pero los dos le ponemos muchas ganas.' }
    ]},
    { id: 'sab', day: 6, label: 'Sábado', stops: [
      { id: 'tour', start: '10:00', end: '13:00', img: 'img/palacio.jpg',
        title: 'Free tour por la Ciudad Alta y Casamatas du Bock',
        note: 'Recorrido guiado en español. Salida a las 10:00 h junto a la estatua ecuestre de Guillermo II.',
        numbered: true,
        items: [
          ['Place Guillaume II', 'Punto de encuentro, junto a la estatua ecuestre.'],
          ['Palacio Gran Ducal', 'Residencia oficial de los Grandes Duques, con cambio de guardia y fachada renacentista.'],
          ['Catedral de Notre-Dame', 'Gótica del siglo XVII, con la cripta ducal y la Virgen Consoladora.'],
          ['Casamatas du Bock y Chemin de la Corniche', 'Los túneles subterráneos UNESCO y «el balcón más bonito de Europa».']
        ], map: 'Place Guillaume II Luxembourg',
        ana: 'En las Casamatas hay escalones y poca luz: id con calma y de la barandilla. Arriba, en la Corniche, foto de grupo. Que no falte nadie.',
        alberto: 'Son 23 kilómetros de túneles. Vauban los hizo para defender la ciudad; yo los voy a usar para contar anécdotas con eco.' },
      { id: 'comida', start: '13:00', end: '15:00', img: 'img/comida.jpg',
        title: 'Pausa gastronómica: platos típicos y chocolate',
        items: [
          ['Judd mat Gaardebounen', 'El plato nacional: cuello de cerdo ahumado con habas cremosas y patatas.'],
          ['Kniddelen', 'Bolas de masa hervida con crema y bacon crujiente, en los bistrós locales.'],
          ['Gromperekichelcher', 'Tortitas de patata rallada con cebolla y perejil, recién fritas y con compota de manzana.'],
          ['Chocolate House Nathalie Bonn', 'Frente al Palacio Ducal: elige tu cuchara de chocolate y fúndela en leche caliente.']
        ], map: 'Chocolate House Nathalie Bonn Luxembourg',
        ana: 'La cuchara de chocolate va a la leche caliente, no directa a la boca. Lo digo por experiencia ajena. Servilletas para todos, que mancha.',
        alberto: 'Gromperekichelcher. Lo he ensayado frente al espejo y el espejo se ha rendido. Pido yo, que hago el acento y la mímica.' },
      { id: 'excursion', start: '15:30', end: '19:30', img: 'img/vianden.jpg',
        title: 'Excursión de tarde: Castillo de Vianden',
        note: 'Opción principal (50 min – 1 h). Hay tres alternativas en la pestaña Excursiones.',
        items: [
          ['Cómo ir', 'Tren RE10 desde Gare Centrale a Ettelbruck (25 min) y bus 181 directo a Vianden (20 min).'],
          ['Fortaleza románica y gótica', 'Levantada entre los siglos XI y XIV sobre ruinas romanas, encima del valle del Our.'],
          ['Telesilla panorámico', 'El único del Gran Ducado, con vistas desde el aire al pueblo y al castillo.']
        ], map: 'Vianden Castle',
        ana: 'En el telesilla, mochilas bien cerradas y móviles con correa. Mirad el horario del bus de vuelta antes de subir: el castillo no se mueve, el bus sí.',
        alberto: 'Castillo del siglo XI, muy bien conservado. Como yo. Bueno, yo soy del XX, pero me entendéis.' }
    ]},
    { id: 'dom', day: 0, label: 'Domingo', stops: [
      { id: 'grund', start: '09:30', end: '11:30', approx: true, img: 'img/grund.jpg',
        title: 'El barrio del Grund y la Ciudad Baja',
        items: [
          ['Ascensor del Plateau St. Esprit', 'Bajada gratis, excavada en el acantilado, desde la Ciudad Alta hasta el Grund.'],
          ['Abadía de Neumünster', 'Antigua abadía benedictina entre casas de piedra y viñedos, junto al Alzette.'],
          ['Puente del siglo XV y orillas del Alzette', 'Ruta de fotos entre casitas encajadas en la roca defensiva.']
        ], map: 'Neimënster Luxembourg',
        ana: 'Bajamos en ascensor y subimos con calma, que hay cuesta. Quien necesite parar, para, y los demás esperamos con una sonrisa.',
        alberto: 'El Grund es la parte baja de la ciudad. Pero de nivel altísimo, eh. Ya está, ya lo he dicho, podemos seguir.' },
      { id: 'kirchberg', start: '11:30', end: '13:30', approx: true, img: 'img/kirchberg.jpg',
        title: 'Ascensor de Pfaffenthal y Kirchberg',
        items: [
          ['Ascensor panorámico de Pfaffenthal', 'Cabina de cristal a 71 metros sobre el valle, con pasarela de suelo de vidrio y enlace a Kirchberg.'],
          ['Fuerte Thüngen y Mudam', 'Las torres «Drai Echelen» (Tres Bellotas) frente al museo de I.M. Pei.'],
          ['Philharmonie Luxembourg', '823 columnas de acero blanco en el corazón financiero de Kirchberg.']
        ], map: 'Pfaffenthal Lift Luxembourg',
        ana: 'En el ascensor de cristal, quien no quiera mirar abajo que se ponga a mi lado. Yo le cuento lo bonito que se ve el horizonte.',
        alberto: 'La Philharmonie tiene 823 columnas. Las he contado dos veces y me salen 824. Seguid, que esto lo resuelvo luego.' },
      { id: 'vuelta', start: '13:30', end: '15:35',
        title: 'Vuelta al aeropuerto · vuelo a las 15:35',
        items: [
          ['Salida sobre las 13:30', 'Desde Gare Centrale en el bus 29 o el tranvía T1.'],
          ['App Mobiliteit.lu', 'Horarios en tiempo real de buses, tranvías y trenes.'],
          ['¡Buen viaje!', 'Fin de la escapada a Luxemburgo.']
        ], map: 'Luxembourg Airport',
        ana: 'Repaso rápido: pasaporte, cargador, gafas y los recuerdos para casa. Gracias por venir, de verdad. Ha sido precioso.',
        alberto: 'Discurso de despedida en tres partes, cada una con su prólogo. Tranquilos, que el vuelo da justo para la versión corta.' }
    ]}
  ],

  excursions: [
    { id: 'vianden', img: 'img/vianden.jpg', tag: 'Opción principal · 50 min – 1 h',
      title: 'Castillo de Vianden: joya feudal de las Ardenas',
      items: [
        ['Cómo ir', 'Tren RE10 desde Gare Centrale a Ettelbruck (25 min) y bus 181 directo a Vianden (20 min).'],
        ['Fortaleza románica y gótica', 'Siglos XI a XIV, sobre ruinas romanas y encima del valle del Our.'],
        ['Telesilla panorámico', 'El único del Gran Ducado, con vistas aéreas del pueblo y la fortaleza.']
      ], map: 'Vianden Castle',
      ana: 'En el telesilla, mochilas bien cerradas y móviles con correa. Mirad el horario del bus de vuelta antes de subir.',
      alberto: 'Castillo del siglo XI, muy bien conservado. Como yo. Bueno, yo soy del XX, pero me entendéis.' },
    { id: 'schengen', img: 'img/schengen.jpg', tag: 'Alternativa I · 35 – 40 min',
      title: 'Schengen: cuna de Europa y viñedos del Mosela',
      items: [
        ['Cómo ir', 'Tren RE/RB desde Gare Centrale a Oetrange y bus 402 o 411 directo a Schengen.'],
        ['Monumento del Acuerdo de Schengen', 'Plaza dedicada al tratado de 1985 que eliminó las fronteras europeas.'],
        ['Trifinio internacional', 'Donde se juntan Luxemburgo, Francia y Alemania, entre bodegas de Riesling.']
      ], map: 'Schengen Luxembourg',
      ana: 'El bus a Schengen no pasa cada cinco minutos: mirad la vuelta en Mobiliteit.lu antes de brindar con el Riesling.',
      alberto: 'Tres países en un punto. Me pongo con un pie en Francia, otro en Alemania y la boca en Luxemburgo, que es donde más se me oye.' },
    { id: 'mullerthal', img: 'img/mullerthal.jpg', tag: 'Alternativa II · 45 min directo',
      title: 'Mullerthal (Pequeña Suiza) y Echternach',
      items: [
        ['Cómo ir', 'Bus exprés 201 o 211, sin transbordos, desde Gare Centrale hasta Echternach Gare.'],
        ['Abadía de Echternach', 'La ciudad más antigua del país: basílica del siglo VII y procesión danzante UNESCO.'],
        ['Cascada Schiessentumpel', 'A 10 min en el bus 190: tres chorros de agua bajo un puente de piedra en el bosque.']
      ], map: 'Schiessentumpel',
      ana: 'Calzado de montaña, que junto a la cascada resbala. Y una foto de grupo con todos, que siempre falta alguien.',
      alberto: 'La llaman la Pequeña Suiza. He propuesto que Suiza pase a llamarse el Gran Mullerthal. Todavía no me han contestado.' },
    { id: 'metz', img: 'img/metz.jpg', tag: 'Alternativa III · 50 min en tren',
      title: 'Excursión internacional a Metz (Francia)',
      items: [
        ['Cómo ir', 'Tren regional TER directo desde Gare Centrale hasta Metz-Ville. Este sí se paga: unos 15 €.'],
        ['Catedral de Saint-Étienne', 'La «Linterna del Buen Dios»: 6.500 m² de vidrieras, algunas de Marc Chagall.'],
        ['Centre Pompidou-Metz y Temple Neuf', 'Arquitectura de vanguardia junto a la estación y paseo romántico junto al Mosela.']
      ], map: 'Cathédrale Saint-Étienne de Metz',
      ana: 'Para Metz sí hace falta billete. Compradlo antes de subir y guardad el de vuelta a mano, que luego nadie lo encuentra.',
      alberto: 'La catedral tiene 6.500 m² de vidrieras. Si entra bien el sol, salimos todos de colores. Gratis, como el bus. Bueno, el bus no, que este es el de 15 €.' }
  ],

  history: [
    { era: 'Siglos X a XVIII', img: 'img/casamatas.jpg', title: 'De castillo a fortaleza', items: [
      ['963', 'El promontorio del Bock', 'El conde Sigfrido de las Ardenas adquiere el antiguo fuerte romano Lucilinburhuc por permuta con la abadía de San Maximino de Tréveris.'],
      ['Leyenda', 'La sirena Melusina', 'La esposa de Sigfrido se convertía en sirena en el Alzette a cambio de levantar la fortaleza en una sola noche.'],
      ['1354', 'Elevación a Ducado', 'Carlos IV eleva el condado a Ducado. La casa de Luxemburgo da cuatro emperadores al Sacro Imperio y reyes a Bohemia.'],
      ['1659', 'El Gibraltar del Norte', 'Tras borgoñones y españoles, Francia toma el control y Vauban multiplica las casamatas: 23 km de galerías subterráneas.']
    ]},
    { era: 'Siglos XIX a XXI', img: 'img/historia.jpg', title: 'Independencia, corazón europeo y auge financiero', items: [
      ['1815', 'Congreso de Viena', 'Gran Ducado en unión personal con la corona de los Países Bajos, dentro de la Confederación Germánica.'],
      ['1867', 'Tratado de Londres', 'Soberanía plena y neutralidad perpetua; se derriban las murallas tras siglos de asedios.'],
      ['1890', 'Dinastía propia', 'Fin de la unión con Holanda y comienzo de la monarquía de la Casa Nassau-Weilburg.'],
      ['1914–1945', 'Ocupaciones', 'Invadido por Alemania en las dos guerras pese a su neutralidad. Liberado por el general Patton en 1944; Batalla de las Ardenas.'],
      ['1944', 'Unión Benelux', 'Alianza aduanera pionera con Bélgica y Países Bajos.'],
      ['1949', 'Fin de la neutralidad', 'Miembro fundador de la OTAN y, después, cofundador de la CECA junto a Robert Schuman.'],
      ['1952', 'Capital europea', 'Fundador de la UE y sede del Tribunal de Justicia y del Banco Europeo de Inversiones.'],
      ['1970–hoy', 'Del acero a las finanzas', 'De la siderurgia de Arcelor a uno de los mayores centros bancarios del mundo.']
    ]}
  ],

  facts: [
    ['🚆', 'Transporte 100 % gratis', 'Primer país del mundo con trenes, tranvías y buses gratuitos, desde 2020.'],
    ['🗣️', 'Población trilingüe', 'Luxemburgués en casa, alemán en prensa y escuela primaria, francés en administración y comercios.'],
    ['🌍', '47 % extranjeros', 'Más de 150 nacionalidades. La comunidad portuguesa es casi el 15 % del país.'],
    ['📈', 'PIB per cápita líder', 'El más alto del mundo y el salario mínimo más alto de la UE (más de 2.500 €).'],
    ['🎨', 'Casino sin apuestas', 'El histórico Casino Luxembourg es hoy un centro de arte contemporáneo.'],
    ['🎤', '5 Eurovisiones', 'Uno de los países más premiados del festival. Y además, 4 Tours de Francia.'],
    ['🐦', 'El reyezuelo y el león', 'El pequeño reyezuelo es el ave nacional. Y las flores se regalan en número impar.'],
    ['🏰', 'Coches y castillos', '647 coches por cada 1.000 habitantes y 75 castillos medievales conservados.'],
    ['💻', 'Sede de gigantes tech', 'Amazon, PayPal, Skype y Rakuten tienen aquí su sede europea, y hay más de 150 bancos.'],
    ['🛡️', 'Seguridad y longevidad', 'Uno de los países más seguros del mundo (ONU), con una esperanza de vida de 82 años.'],
    ['🗳️', 'Civismo de récord', '91 % de participación electoral y 200.000 personas que cruzan la frontera cada día para trabajar.'],
    ['🍑', 'Quetsch y Patton', 'Licor tradicional de ciruela. Y en Hamm está la tumba del general Patton.']
  ],

  // Consejos útiles, contados por Ana o por Alberto.
  tips: [
    ['ana', '📱', 'App Mobiliteit.lu', 'Descargadla antes de salir: horarios en tiempo real de trenes, buses y tranvías. Así nadie se queda esperando bajo la lluvia.'],
    ['alberto', '🎟️', 'Sin billete', 'Todo el transporte del país es gratis. Por fin un sitio donde subo al bus sin pasarme cinco minutos buscando la cartera.'],
    ['ana', '👟', 'Calzado cómodo', 'Empedrado y cuestas entre la Ciudad Alta y el Grund. Zapatillas cómodas; los zapatos bonitos, para la cena.'],
    ['alberto', '🇫🇷', 'Metz sí se paga', 'El tren a Francia cuesta unos 15 €. Es el precio de ir a hablar francés de verdad. Bueno, de intentarlo con mucha seguridad.'],
    ['ana', '🛍️', 'Domingo, todo cerrado', 'Las tiendas cierran el sábado a las 18:00 y el domingo no abren. Los recuerdos, mejor el sábado.'],
    ['alberto', '💬', 'Tres idiomas', 'Aquí se habla luxemburgués, francés y alemán. Yo los hablo los tres… con las manos. Funciona sorprendentemente bien.'],
    ['ana', '✈️', 'Vuelta: 13:30', 'El domingo salimos hacia el aeropuerto sobre las 13:30. El vuelo es a las 15:35. Os lo recordaré tres veces, con cariño.'],
    ['alberto', '🧾', 'Luxembourg Card', 'Si vamos a castillos y museos, la tarjeta turística sale a cuenta. Lo he calculado dos veces. Os paso el Excel.']
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
    ['ana', 'Llegamos tarde porque paré a ayudar a una señora con el mapa.'],
    ['ana', 'No subí porque alguien tenía que cuidar las mochilas. Y los abrigos. Y a Alberto.'],
    ['ana', 'Me adelanté para reservar mesa. Para todos, claro.'],
    ['ana', 'Fue por vuestra seguridad. Y por la mía, un poquito.'],
    ['ana', 'Os dejé dormir diez minutos más. Os hacía falta.'],
    ['alberto', 'No nos perdimos: hicimos una ruta alternativa con más contenido.'],
    ['alberto', 'Solo iba a decir una cosa. Al final eran 47, pero todas buenísimas.'],
    ['alberto', 'El guía me pidió que siguiera yo.'],
    ['alberto', 'Eso no estaba en el PowerPoint. En la versión 5 tampoco.'],
    ['alberto', 'Me entretuve explicándole la historia de Luxemburgo a un luxemburgués. Me dio las gracias. Creo.']
  ],

  doneToasts: [
    'Alberto ya lo está contando en el grupo. Audio de 4 minutos.',
    'Ana os da la enhorabuena (y os recuerda beber agua).',
    '¡Hecho! Alberto prepara un resumen de solo 40 minutos.',
    'Ana ha contado cabezas: estáis todos. 👏',
    'Alberto tiene un chiste para esto. Corred.'
  ],

  ranks: [
    [0, 'Turista recién aterrizado'],
    [2, 'Protegido oficial de Ana'],
    [4, 'Superviviente de una charla de Alberto'],
    [6, 'Gran Duque honorario'],
    [8, 'Aprobado por Ana y Alberto 🏅']
  ],

  credits: 'Fotos de la guía «Escapada a Luxemburgo».'
};
