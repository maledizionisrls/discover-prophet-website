const trendData = [
  {
    "rank": 2,
    "entity": "garlasco",
    "discover_score": 10.688841827916049,
    "score_1h": 41.68103448275862,
    "score_4h": 36.00210084033614,
    "score_7d": 6.830674133558749,
    "extracted_entities": "Garlasco - Omicidio - Chiara Poggi - Alberto Stasi - Processo",
    "saturation_score": 1850.0
  },
  {
    "rank": 7,
    "entity": "musetti",
    "discover_score": 7.497837567033625,
    "score_1h": 60.05172413793103,
    "score_4h": 28.90756302521008,
    "score_7d": 8.400887573964496,
    "extracted_entities": "Lorenzo Musetti - Tennis - ATP - Classifica - Tornei",
    "saturation_score": 800.0
  },
  {
    "rank": 43,
    "entity": "luca",
    "discover_score": 6.6488817769909705,
    "score_1h": 54.491379310344826,
    "score_4h": 6.970588235294118,
    "score_7d": 18.179451958298113,
    "extracted_entities": "Luca",
    "saturation_score": 699.0
  },
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 6.311559565570924,
    "score_1h": 49.810344827586206,
    "score_4h": 17.350840336134453,
    "score_7d": 4.2105698788391095,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": 1080.0
  },
  {
    "rank": 4,
    "entity": "pepe mujica",
    "discover_score": 6.00503853351398,
    "score_1h": 5.698275862068966,
    "score_4h": 15.661764705882351,
    "score_7d": 7.403176951253874,
    "extracted_entities": "Pepe Mujica - Uruguay - Politica - Presidente - Attivismo",
    "saturation_score": 547.0
  },
  {
    "rank": 3,
    "entity": "lucio corsi eurovision",
    "discover_score": 5.380198027026905,
    "score_1h": 49.939655172413794,
    "score_4h": 12.554621848739497,
    "score_7d": 6.5042793744716825,
    "extracted_entities": "Lucio Corsi - Eurovision",
    "saturation_score": 41.0
  },
  {
    "rank": 35,
    "entity": "carlos alcaraz",
    "discover_score": 3.746370417810197,
    "score_1h": 1.5172413793103448,
    "score_4h": 17.970588235294116,
    "score_7d": 7.080181036911807,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 40.0
  },
  {
    "rank": 8,
    "entity": "pescara - catania",
    "discover_score": 3.742990384711883,
    "score_1h": 78.25862068965517,
    "score_4h": 14.140756302521009,
    "score_7d": 5.365895322626091,
    "extracted_entities": "Pescara - Catania - Viaggio - Trasporti - Turismo",
    "saturation_score": 50.0
  },
  {
    "rank": 13,
    "entity": "sabalenka",
    "discover_score": 3.6468289062591808,
    "score_1h": 44.05172413793103,
    "score_4h": 17.373949579831933,
    "score_7d": 5.237249929557622,
    "extracted_entities": "Aryna Sabalenka - Tennis - Classifiche WTA - Tornei Grand Slam - Bielorussia",
    "saturation_score": 35.0
  },
  {
    "rank": 28,
    "entity": "errani paolini",
    "discover_score": 2.637383281564765,
    "score_1h": 10.706896551724137,
    "score_4h": 27.623949579831933,
    "score_7d": 1.7670822766976613,
    "extracted_entities": "Errani - Paolini - Tennis - Giocatrici italiane",
    "saturation_score": 170.0
  },
  {
    "rank": 50,
    "entity": "milan stasera",
    "discover_score": 2.5949249644990395,
    "score_1h": 48.96551724137931,
    "score_4h": 17.98949579831933,
    "score_7d": 4.308608058608058,
    "extracted_entities": "Milan - Partita - Calcio - Serie A - Stasera",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "creta",
    "discover_score": 2.5911755517419173,
    "score_1h": 7.870689655172414,
    "score_4h": 2.3844537815126055,
    "score_7d": 8.186848408002255,
    "extracted_entities": "Isola di Creta - Grecia - Turismo - Storia - Cultura",
    "saturation_score": 192.0
  },
  {
    "rank": 9,
    "entity": "sampdoria serie c",
    "discover_score": 2.1529426337752526,
    "score_1h": 1.6896551724137931,
    "score_4h": 3.75,
    "score_7d": 4.635055649478726,
    "extracted_entities": "Sampdoria - Serie C - Calcio - Campionato",
    "saturation_score": 3.0
  },
  {
    "rank": 10,
    "entity": "allerta meteo sicilia",
    "discover_score": 1.5660173275727687,
    "score_1h": 1.6637931034482758,
    "score_4h": 15.205882352941178,
    "score_7d": 0.8302514792899408,
    "extracted_entities": "Allerta meteo - Sicilia - Previsioni - Maltempo",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "salvatore bagni",
    "discover_score": 1.5589458801729914,
    "score_1h": 2.646551724137931,
    "score_4h": 1.8235294117647058,
    "score_7d": 3.228039588616512,
    "extracted_entities": "Salvatore Bagni - Calciatore - Commentatore Sportivo - Italia - Serie A",
    "saturation_score": 118.0
  },
  {
    "rank": 6,
    "entity": "zheng",
    "discover_score": 1.4239718243616042,
    "score_1h": 29.06896551724138,
    "score_4h": 9.579831932773109,
    "score_7d": 1.264211749788673,
    "extracted_entities": "Zheng",
    "saturation_score": 31.0
  },
  {
    "rank": 27,
    "entity": "luca nardi",
    "discover_score": 1.2870578151845877,
    "score_1h": 19.017241379310345,
    "score_4h": 2.241596638655462,
    "score_7d": 3.641060862214708,
    "extracted_entities": "Luca Nardi - Persona",
    "saturation_score": 2.0
  },
  {
    "rank": 21,
    "entity": "rimini - vis pesaro",
    "discover_score": 1.2783673867363503,
    "score_1h": 29.71551724137931,
    "score_4h": 0.5861344537815126,
    "score_7d": 3.89044449140603,
    "extracted_entities": "Rimini - Vis Pesaro - Calcio - Partita - Serie C",
    "saturation_score": 31.0
  },
  {
    "rank": 19,
    "entity": "tom cruise",
    "discover_score": 1.2536888547652736,
    "score_1h": 12.172413793103448,
    "score_4h": 3.3172268907563023,
    "score_7d": 3.0120456466610315,
    "extracted_entities": "Tom Cruise - Attore - Film - Hollywood - Mission: Impossible",
    "saturation_score": 206.0
  },
  {
    "rank": 25,
    "entity": "tommy cash",
    "discover_score": 1.1959313026031735,
    "score_1h": 2.0172413793103448,
    "score_4h": 0.13865546218487396,
    "score_7d": 3.874788672865596,
    "extracted_entities": "Tommy Cash - Musica - Artista",
    "saturation_score": 76.0
  },
  {
    "rank": 49,
    "entity": "gaeta",
    "discover_score": 1.1808198371976983,
    "score_1h": 3.8017241379310343,
    "score_4h": 1.0273109243697478,
    "score_7d": 4.020780501549732,
    "extracted_entities": "Gaeta - Città - Lazio - Turismo - Storia",
    "saturation_score": 65.0
  },
  {
    "rank": 38,
    "entity": "ozzy osbourne",
    "discover_score": 1.1609836762404764,
    "score_1h": 0.0603448275862069,
    "score_4h": 0.0,
    "score_7d": 4.072661313045928,
    "extracted_entities": "Ozzy Osbourne - Musica - Black Sabbath - Heavy Metal - Cantante",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "sinner papa",
    "discover_score": 1.0865683153821928,
    "score_1h": 17.655172413793103,
    "score_4h": 8.338235294117647,
    "score_7d": 1.174749929557622,
    "extracted_entities": "Jannik Sinner - Papa Francesco - Tennis - Vaticano",
    "saturation_score": 3.0
  },
  {
    "rank": 41,
    "entity": "feralpisalò",
    "discover_score": 1.0272727061928437,
    "score_1h": 16.560344827586206,
    "score_4h": 9.861344537815127,
    "score_7d": 1.128222738799662,
    "extracted_entities": "Feralpisalò - Calcio - Squadra - Serie C - Italia",
    "saturation_score": 40.0
  },
  {
    "rank": 24,
    "entity": "mariano navone",
    "discover_score": 1.0114448308689408,
    "score_1h": 9.629310344827585,
    "score_4h": 2.2205882352941178,
    "score_7d": 2.6848936320090164,
    "extracted_entities": "Mariano Navone - Tennis - Giocatore",
    "saturation_score": 2.0
  },
  {
    "rank": 17,
    "entity": "torres - atalanta u-23",
    "discover_score": 0.9986907048672361,
    "score_1h": 30.258620689655174,
    "score_4h": 0.9705882352941176,
    "score_7d": 2.795224006762468,
    "extracted_entities": "Torres - Atalanta U-23 - Calcio - Partita - Serie C",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "peyton stearns",
    "discover_score": 0.936326561023891,
    "score_1h": 10.939655172413794,
    "score_4h": 1.9201680672268908,
    "score_7d": 2.1330832628909553,
    "extracted_entities": "Peyton Stearns - Tennis - Giocatrice",
    "saturation_score": 44.0
  },
  {
    "rank": 46,
    "entity": "cipro",
    "discover_score": 0.933437914690919,
    "score_1h": 0.11206896551724138,
    "score_4h": 0.7373949579831932,
    "score_7d": 3.1683925049309662,
    "extracted_entities": "Cipro - Isola - Mediterraneo - Nicosia - Turismo",
    "saturation_score": 34.0
  },
  {
    "rank": 39,
    "entity": "bastian muller",
    "discover_score": 0.777245757089652,
    "score_1h": 0.0,
    "score_4h": 0.8697478991596639,
    "score_7d": 2.4786559594251902,
    "extracted_entities": "Bastian Muller",
    "saturation_score": 137.0
  },
  {
    "rank": 18,
    "entity": "san mattia",
    "discover_score": 0.6387201976453847,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.02100840336134454,
    "score_7d": 1.923675683291068,
    "extracted_entities": "San Mattia - Apostolo - Chiesa Cattolica",
    "saturation_score": 41.0
  },
  {
    "rank": 20,
    "entity": "feyenoord - rkc",
    "discover_score": 0.5562249707467612,
    "score_1h": 6.025862068965518,
    "score_4h": 4.571428571428571,
    "score_7d": 0.5379508312200619,
    "extracted_entities": "Feyenoord - RKC - Partita di calcio - Eredivisie",
    "saturation_score": 2.0
  },
  {
    "rank": 45,
    "entity": "mission impossible - the final reckoning",
    "discover_score": 0.5549302750367796,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.49369747899159666,
    "score_7d": 1.7892716258100871,
    "extracted_entities": "Mission Impossible - The Final Reckoning - Film - Tom Cruise - Azione",
    "saturation_score": 10.0
  },
  {
    "rank": 22,
    "entity": "trabzonspor - galatasaray",
    "discover_score": 0.5427711533922283,
    "score_1h": 14.982758620689655,
    "score_4h": 2.365546218487395,
    "score_7d": 1.0337947309101154,
    "extracted_entities": "Trabzonspor - Galatasaray - Partita di calcio - Super Lig - Turchia",
    "saturation_score": 3.0
  },
  {
    "rank": 36,
    "entity": "monopoli - giana erminio",
    "discover_score": 0.5205777631045224,
    "score_1h": 0.3879310344827586,
    "score_4h": 2.0945378151260505,
    "score_7d": 1.1572802197802199,
    "extracted_entities": "Monopoli - Giana Erminio - Calcio - Partita - Serie C",
    "saturation_score": 46.0
  },
  {
    "rank": 12,
    "entity": "real madrid - mallorca",
    "discover_score": 0.4864567276821546,
    "score_1h": 13.051724137931036,
    "score_4h": 3.884453781512605,
    "score_7d": 0.3630247957171034,
    "extracted_entities": "Real Madrid - Mallorca - Partita di calcio - Liga Spagnola",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "giro d'italia napoli",
    "discover_score": 0.47341590085174085,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.7521008403361344,
    "score_7d": 1.3619329388560157,
    "extracted_entities": "Giro d'Italia - Napoli - Ciclismo - Evento sportivo",
    "saturation_score": 1.0
  },
  {
    "rank": 16,
    "entity": "riccardo magi",
    "discover_score": 0.4050593797546464,
    "score_1h": 1.6206896551724137,
    "score_4h": 2.0168067226890756,
    "score_7d": 0.5732424626655396,
    "extracted_entities": "Riccardo Magi - Politica Italiana - +Europa",
    "saturation_score": 50.0
  },
  {
    "rank": 14,
    "entity": "stefania corona",
    "discover_score": 0.3690822768168564,
    "score_1h": 3.1293103448275863,
    "score_4h": 0.36134453781512604,
    "score_7d": 0.8402895181741336,
    "extracted_entities": "Stefania Corona - Persone",
    "saturation_score": 29.0
  },
  {
    "rank": 26,
    "entity": "valentina uomini e donne",
    "discover_score": 0.36815566301699515,
    "score_1h": 4.827586206896552,
    "score_4h": 1.5462184873949578,
    "score_7d": 0.6488623555931248,
    "extracted_entities": "Valentina - Uomini e Donne - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "david parenzo",
    "discover_score": 0.34486747260398887,
    "score_1h": 0.0,
    "score_4h": 1.3235294117647058,
    "score_7d": 0.5959425190194421,
    "extracted_entities": "David Parenzo - Giornalista - Radio - Televisione",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "ursula von der leyen",
    "discover_score": 0.30863250416309046,
    "score_1h": 7.474137931034482,
    "score_4h": 1.111344537815126,
    "score_7d": 0.5495209918286842,
    "extracted_entities": "Ursula von der Leyen - Politica - Unione Europea - Commissione Europea",
    "saturation_score": 45.0
  },
  {
    "rank": 37,
    "entity": "russell crowe",
    "discover_score": 0.30477364243494026,
    "score_1h": 3.4741379310344827,
    "score_4h": 0.2310924369747899,
    "score_7d": 0.8051739926739927,
    "extracted_entities": "Russell Crowe - Attore - Film - Hollywood - Cinema",
    "saturation_score": 2.0
  },
  {
    "rank": 48,
    "entity": "valeria marquez",
    "discover_score": 0.23966381831219669,
    "score_1h": 0.0,
    "score_4h": 0.32352941176470584,
    "score_7d": 0.5403282614821077,
    "extracted_entities": "Valeria Marquez",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "villarreal - leganés",
    "discover_score": 0.22261580293440716,
    "score_1h": 0.15517241379310345,
    "score_4h": 1.6218487394957983,
    "score_7d": 0.11269019442096365,
    "extracted_entities": "Villarreal - Leganés - Calcio - Partita - Liga Spagnola",
    "saturation_score": 2.0
  },
  {
    "rank": 32,
    "entity": "pozzolo espulso",
    "discover_score": 0.21855758167411177,
    "score_1h": 3.086206896551724,
    "score_4h": 1.361344537815126,
    "score_7d": 0.15414553395322628,
    "extracted_entities": "Pozzolo - Espulsione - Evento",
    "saturation_score": 87.0
  },
  {
    "rank": 47,
    "entity": "chiara galiazzo",
    "discover_score": 0.20254362175904733,
    "score_1h": 2.706896551724138,
    "score_4h": 0.9726890756302521,
    "score_7d": 0.21375739644970415,
    "extracted_entities": "Chiara Galiazzo - Cantante - Italia",
    "saturation_score": 37.0
  },
  {
    "rank": 30,
    "entity": "ex presidente pepe mujica",
    "discover_score": 0.19334392499524242,
    "score_1h": 0.0,
    "score_4h": 0.4012605042016807,
    "score_7d": 0.27030501549732316,
    "extracted_entities": "Pepe Mujica - Ex Presidente - Uruguay",
    "saturation_score": 9.0
  },
  {
    "rank": 42,
    "entity": "groningen - ajax",
    "discover_score": 0.18157347319642564,
    "score_1h": 2.5344827586206895,
    "score_4h": 0.6953781512605042,
    "score_7d": 0.1811425753733446,
    "extracted_entities": "Groningen - Ajax - Calcio - Eredivisie - Partita",
    "saturation_score": 9.0
  },
  {
    "rank": 34,
    "entity": "alavés - valencia",
    "discover_score": 0.16697050567904095,
    "score_1h": 2.931034482758621,
    "score_4h": 0.6911764705882353,
    "score_7d": 0.10652648633417865,
    "extracted_entities": "Alavés - Valencia - Partita di calcio - Liga Spagnola - Squadre di calcio",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "ali rashid",
    "discover_score": 0.16298769338854124,
    "score_1h": 0.14655172413793102,
    "score_4h": 0.12815126050420167,
    "score_7d": 0.2195865032403494,
    "extracted_entities": "Ali Rashid",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "alcaraz oggi",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "elly schlein",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "cfr cluj - hermannstadt",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "tar",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "giochi playstation plus",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "jaume munar",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "un posto al sole stasera",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "eredivisie",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "juventus store",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "rangers - dundee united",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "maglia juve 2026",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "libia",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "panatta",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "coco gauff",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "antonio conte juventus",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "superman",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "tifoso",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "ajax",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "alex eala",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "mediaset streaming",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "trabzonspor vs galatasaray",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "zirkzee",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "fabio fognini",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "matera",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "mila kunis",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "stasi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "real madrid vs rcd mallorca timeline",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "von der leyen",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "marco liorni",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "josé pepe mujica",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "bezos",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "scossa di terremoto napoli",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "vangelo fra stefano 14 maggio",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "thunder - nuggets",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "alex de minaur",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "belve puntata 13 maggio",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "lussemburgo",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "tamberi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "il secolo xix",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "playout serie b",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "cavaliers - pacers",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "montescaglioso",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "palermo calcio",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "justyna steczkowska",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "frosinone calcio",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "kingdom hearts iv",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "awoniyi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "raoul bova",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "verbania",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "vasco rossi",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "fratelli menendez",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "ester pantano",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "buon mercoledì 14 maggio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "valentina uomini e donne over",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "giro d'italia oggi",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "azerbaijan",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "cinzia uomini e donne",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "taiwo awoniyi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "samantha de grenet",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "real estate",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "classifica atp",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "espresso macchiato tommy cash",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "walker milan",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "mads pedersen",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "hazel brugger",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "cesena calcio",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "trigno",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "marina di ginosa",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "santo del giorno",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "lorde",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "vivaticket parma napoli",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "bella hadid",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "nathalie caldonazzo",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "eurovision 2024",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "mantova",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "martina franca",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "sassuolo",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "britney spears",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "genovatoday",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "basel",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "sophie codegoni",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "david jonathan",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "valentina vitale",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "sunderland",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "child care",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "roger federer",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "libertas livorno - vigevano 1955",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "elio germano",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "giorgia sottana",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "venditti",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "sandra studer",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "fabregas como",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "childcare",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "big five eurovision",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "william hill",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "amerigo vespucci napoli",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "munar ruud",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "aldo cazzullo",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "smartphone",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "maria teresa fabbri",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "castellammare di stabia",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "sane",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "sandra bullock",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "antonella clerici",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "chiara maci",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "celine dion eurovision",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "robert benton",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "14 maggio",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "opus dei",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "simon coleman film",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "festivallo",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "melody",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "assegno unico maggio 2025",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "svizzera",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "davide barzan",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "netanyahu",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "san marino eurovision",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "paesi bassi",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "netherlands",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "meteo milano domani",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "aleksandr bublik",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "michele santoro",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "celine dion eurovision 1988",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "massimo coda",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "bari calcio",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "madeira",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "partita palermo oggi",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "catanzaro",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "restaurant near me",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "giovanni allevi",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "musetti sonego",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "bianca berlinguer malattia",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "terza puntata maria corleone",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "albania eurovision 2025",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "mauro corona",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "haaretz",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "norvegia eurovision 2025",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "francesco pio esposito",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "sanremo 2025",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "slovenia eurovision 2025",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "estonia",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "tutta l'italia testo",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "tommaso ottomano",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "olanda",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "concilio di nicea",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "espresso macchiato eurovision",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "giornale di brescia",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "slovenia",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "programma internazionali tennis roma 2025",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "basciano",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "jamie lee curtis",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "simy",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "buongiorno 14 maggio 2025",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "tutino",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "eurojackpot oggi estrazione",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "programmi tv questa sera",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "luna oggi",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "cilento",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "partita brescia oggi",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "airbnb",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "alberto matano",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "starlink",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "tatum infortunio",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "bnl tennis",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "14 maggio buongiorno",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "striscia la notizia",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "ministro giuli",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "croazia",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "corriere adriatico",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "kirsten dunst",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "elisabetta canalis",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "grande panda",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "simbolotto di oggi",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "fc südtirol",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "pierce brosnan",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "biden",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-14 19:01:42",
  "trends_count": 227,
  "top_score": 10.688841827916049,
  "runtime_minutes": 3.100756808121999,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano che il manto del destino è tessuto da tre fili principali: il vigoroso sport del tennis, il intricato mondo della politica, e le profonde storie del crimine e della giustizia. Tennis e politica dominano le recenti conversazioni, mentre eventi giudiziari riecheggiano nell'animo di chi ascolta.\n\nLa migliore opportunità per esplorare nuove strategie in Google Discover si cela forse sotto il segno di 'musetti' (#2). La crescente attenzione verso Lorenzo Musetti nel tennis, unita a un buon DScore e saturazione moderata, presagisce un potenziale fertile per contenuti coinvolgenti. Anche 'lucio corsi eurovision' (#6) rappresenta una promessa di crescita con una saturazione minima e interesse immediato, sebbene il titolo sia meno conosciuto.\n\nMentre contempliamo queste possibilità, una voce cauta avverte contro il pathos travolgente di 'garlasco' (#1). Sebbene l'interesse febbraio, l'alto grado di saturazione suggerisce che la competizione sia feroce e rischia di bruciare rapidamente, un segnale per coloro che sanno discernere opportunità durature da fuochi di paglia.\n\nPer chi si addentra nel mondo di Google Discover, bilanciare tra temi emergenti e quelli ben saturati sarà la chiave per nobilitare il loro contributo nei giorni venienti."
};
