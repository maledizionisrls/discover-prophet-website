const trendData = [
  {
    "rank": 40,
    "entity": "conegliano",
    "discover_score": 9.143552846582125,
    "score_1h": 5.767241379310345,
    "score_4h": 8.836134453781513,
    "score_7d": 23.51775147928994,
    "extracted_entities": "Conegliano - Città - Veneto - Italia - Turismo",
    "saturation_score": 417.0
  },
  {
    "rank": 1,
    "entity": "terremoto istanbul",
    "discover_score": 6.325199047480292,
    "score_1h": 67.93600233781414,
    "score_4h": 32.159663865546214,
    "score_7d": 2.0532544378698225,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": 7.0
  },
  {
    "rank": 15,
    "entity": "santo del giorno",
    "discover_score": 5.763488927662825,
    "score_1h": 1.396551724137931,
    "score_4h": 0.1722689075630252,
    "score_7d": 14.488165680473372,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 9.0
  },
  {
    "rank": 13,
    "entity": "letto contenitore",
    "discover_score": 5.160132097078549,
    "score_1h": 6.672413793103448,
    "score_4h": 15.649159663865547,
    "score_7d": 8.890532544378699,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto",
    "saturation_score": 94.0
  },
  {
    "rank": 11,
    "entity": "kean",
    "discover_score": 4.251861092203211,
    "score_1h": 46.04514903565167,
    "score_4h": 17.870662072360325,
    "score_7d": 6.115384615384615,
    "extracted_entities": "Moise Kean - Calcio - Juventus - Serie A - Attaccante",
    "saturation_score": 101.0
  },
  {
    "rank": 3,
    "entity": "sophie nyweide",
    "discover_score": 3.3035719141423967,
    "score_1h": 12.163793103448276,
    "score_4h": 7.5021008403361344,
    "score_7d": 4.550295857988166,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 204.0
  },
  {
    "rank": 2,
    "entity": "barcellona - mallorca",
    "discover_score": 3.0253346408529036,
    "score_1h": 1.853448275862069,
    "score_4h": 1.4051281600506311,
    "score_7d": 4.976331360946745,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "expedition 33",
    "discover_score": 2.3663028100189067,
    "score_1h": 6.387931034482759,
    "score_4h": 8.873949579831933,
    "score_7d": 4.3609467455621305,
    "extracted_entities": "Expedition 33 - Stazione Spaziale Internazionale - NASA - Equipaggio - Missione spaziale",
    "saturation_score": 50.0
  },
  {
    "rank": 5,
    "entity": "pàpa francesco",
    "discover_score": 2.3081303522795724,
    "score_1h": 17.956896551724135,
    "score_4h": 9.256460743293133,
    "score_7d": 3.0147928994082838,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "btp italia",
    "discover_score": 2.1217755956211017,
    "score_1h": 1.603448275862069,
    "score_4h": 2.089615344045568,
    "score_7d": 5.994082840236686,
    "extracted_entities": "BTP - Italia - Titoli di Stato - Investimenti",
    "saturation_score": 56.0
  },
  {
    "rank": 6,
    "entity": "nantes - psg",
    "discover_score": 1.9667072131957952,
    "score_1h": 2.8706896551724137,
    "score_4h": 0.6183326887240252,
    "score_7d": 4.597633136094674,
    "extracted_entities": "Nantes - PSG - Calcio - Ligue 1 - Partita",
    "saturation_score": 10.0
  },
  {
    "rank": 23,
    "entity": "25 aprile liberazione",
    "discover_score": 1.9436403397102249,
    "score_1h": 0.3793103448275862,
    "score_4h": 1.5210084033613445,
    "score_7d": 5.689349112426036,
    "extracted_entities": "25 aprile - Liberazione - Festa nazionale - Italia - Resistenza",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "mission",
    "discover_score": 1.9254730017553676,
    "score_1h": 3.25,
    "score_4h": 2.10322246053233,
    "score_7d": 6.275147928994082,
    "extracted_entities": "Missione spaziale - Obiettivi - Strategia - Organizzazione - Progetto",
    "saturation_score": 120.0
  },
  {
    "rank": 4,
    "entity": "manchester city - aston villa",
    "discover_score": 1.9108723756326331,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7373949579831933,
    "score_7d": 4.050295857988166,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 40.0
  },
  {
    "rank": 10,
    "entity": "freccia vallone 2025",
    "discover_score": 1.7637550852888775,
    "score_1h": 9.314582115721802,
    "score_4h": 3.6841004184100417,
    "score_7d": 3.8165680473372783,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 36.0
  },
  {
    "rank": 34,
    "entity": "atp madrid 2025 tabellone",
    "discover_score": 1.3800419026126325,
    "score_1h": 1.603448275862069,
    "score_4h": 1.6921961253120497,
    "score_7d": 4.260355029585799,
    "extracted_entities": "ATP - Madrid - 2025 - Tabellone - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "lakers - timberwolves",
    "discover_score": 1.3472557444352493,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.4054621848739496,
    "score_7d": 4.3639053254437865,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 8,
    "entity": "federico cinà",
    "discover_score": 1.254015855094117,
    "score_1h": 1.6405610753945061,
    "score_4h": 8.086134453781513,
    "score_7d": 1.3431952662721893,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 52.0
  },
  {
    "rank": 7,
    "entity": "allerta grandine",
    "discover_score": 1.0868480866579595,
    "score_1h": 0.0,
    "score_4h": 3.19327731092437,
    "score_7d": 1.985207100591716,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 8.0
  },
  {
    "rank": 37,
    "entity": "kashmir",
    "discover_score": 1.0576779079631742,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.4327731092436975,
    "score_7d": 3.576923076923077,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Regione",
    "saturation_score": 785.0
  },
  {
    "rank": 18,
    "entity": "gianni sperti",
    "discover_score": 0.9832320712519994,
    "score_1h": 4.051724137931035,
    "score_4h": 0.9915966386554622,
    "score_7d": 2.772189349112426,
    "extracted_entities": "Gianni Sperti - Personaggio televisivo - Opinionista - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 35,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.9062156420101245,
    "score_1h": 0.0,
    "score_4h": 0.5397489539748954,
    "score_7d": 2.9852071005917162,
    "extracted_entities": "Vanessa Incontrada - Ultima Puntata - Programma Televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 9,
    "entity": "carlos santana",
    "discover_score": 0.9018877336294555,
    "score_1h": 7.551724137931034,
    "score_4h": 5.756504693927781,
    "score_7d": 1.0207100591715976,
    "extracted_entities": "Carlos Santana - Musicista - Chitarrista - Rock - Latin Music",
    "saturation_score": 74.0
  },
  {
    "rank": 48,
    "entity": "thunder - grizzlies",
    "discover_score": 0.8791445802161523,
    "score_1h": 0.0,
    "score_4h": 0.25630252100840334,
    "score_7d": 3.1242603550295858,
    "extracted_entities": "Thunder - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.878751221375575,
    "score_1h": 0.0,
    "score_4h": 0.3529411764705882,
    "score_7d": 3.0177514792899407,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "dalai lama",
    "discover_score": 0.8730758539701851,
    "score_1h": 0.0,
    "score_4h": 0.27615062761506276,
    "score_7d": 3.053254437869822,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 2.0
  },
  {
    "rank": 16,
    "entity": "inter milan dove vederla",
    "discover_score": 0.8653052919928964,
    "score_1h": 0.6949152542372882,
    "score_4h": 0.6050420168067228,
    "score_7d": 2.4497041420118344,
    "extracted_entities": "Inter - Milan - Partita - Trasmissione - Streaming",
    "saturation_score": 8.0
  },
  {
    "rank": 17,
    "entity": "maurizio gucci",
    "discover_score": 0.8452227832318318,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.6932773109243697,
    "score_7d": 2.390532544378698,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 69.0
  },
  {
    "rank": 47,
    "entity": "maurizio pistocchi",
    "discover_score": 0.8355758997800363,
    "score_1h": 0.0,
    "score_4h": 0.587523293836363,
    "score_7d": 2.8579881656804735,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "rio ave - sporting",
    "discover_score": 0.8078639618499397,
    "score_1h": 0.0,
    "score_4h": 0.43487394957983194,
    "score_7d": 2.78698224852071,
    "extracted_entities": "Rio Ave - Sporting - Calcio - Partita - Portogallo",
    "saturation_score": 7.0
  },
  {
    "rank": 45,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.623866804510271,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.20920502092050208,
    "score_7d": 2.13905325443787,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Bethesda",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "bonus bollette 2025",
    "discover_score": 0.6116032441689506,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9684873949579832,
    "score_7d": 1.831360946745562,
    "extracted_entities": "Bonus - Bollette - 2025",
    "saturation_score": 3.0
  },
  {
    "rank": 25,
    "entity": "istanbul deprem",
    "discover_score": 0.5739613516930001,
    "score_1h": 0.847457627118644,
    "score_4h": 4.793054041700362,
    "score_7d": 0.6005917159763314,
    "extracted_entities": "Istanbul - Terremoto - Sisma",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "pianura padana",
    "discover_score": 0.4801435926169784,
    "score_1h": 1.6293103448275863,
    "score_4h": 0.5336134453781513,
    "score_7d": 1.3727810650887573,
    "extracted_entities": "Pianura Padana - Geografia - Italia - Clima - Agricoltura",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "terremoto istambul",
    "discover_score": 0.45898228476433023,
    "score_1h": 0.3050847457627119,
    "score_4h": 1.1255230125523012,
    "score_7d": 1.106508875739645,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "anna kalinskaya",
    "discover_score": 0.4046231384919577,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.4171970043247425,
    "score_7d": 1.014792899408284,
    "extracted_entities": "Anna Kalinskaya - Tennista - Sport",
    "saturation_score": 8.0
  },
  {
    "rank": 12,
    "entity": "don giulio mignani",
    "discover_score": 0.36381420793019664,
    "score_1h": 0.706896551724138,
    "score_4h": 1.4402095566259976,
    "score_7d": 0.5207100591715976,
    "extracted_entities": "Don Giulio Mignani - Religione - Chiesa Cattolica",
    "saturation_score": 6.0
  },
  {
    "rank": 36,
    "entity": "marco frigo",
    "discover_score": 0.3363239706331807,
    "score_1h": 1.4168614845119814,
    "score_4h": 2.947478991596639,
    "score_7d": 0.2603550295857988,
    "extracted_entities": "Marco Frigo",
    "saturation_score": 10.0
  },
  {
    "rank": 31,
    "entity": "morto donato metallo",
    "discover_score": 0.31189765785035795,
    "score_1h": 0.0,
    "score_4h": 0.20920502092050208,
    "score_7d": 0.8106508875739645,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 5.0
  },
  {
    "rank": 26,
    "entity": "parma juve dove vederla",
    "discover_score": 0.26979425353540243,
    "score_1h": 0.6271186440677966,
    "score_4h": 0.9138655462184874,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "Parma - Juventus - Dove vederla - Partita - Calcio",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "concorso 4617 allievi agenti bando",
    "discover_score": 0.24241578634359312,
    "score_1h": 0.0,
    "score_4h": 0.20798319327731093,
    "score_7d": 0.5887573964497042,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Bando - Forze dell'Ordine - Reclutamento",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "milena vukotic",
    "discover_score": 0.23419494984172082,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.43487394957983194,
    "score_7d": 0.4704142011834319,
    "extracted_entities": "Milena Vukotic - Attrice - Cinema - Teatro - Televisione",
    "saturation_score": 95.0
  },
  {
    "rank": 43,
    "entity": "lago di endine",
    "discover_score": 0.23402996800664994,
    "score_1h": 0.0,
    "score_4h": 0.34194472768186773,
    "score_7d": 0.4970414201183432,
    "extracted_entities": "Lago di Endine - Turismo - Natura - Lombardia",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "giornata mondiale del libro 2025",
    "discover_score": 0.21550578322031505,
    "score_1h": 0.0,
    "score_4h": 0.029411764705882353,
    "score_7d": 0.48520710059171596,
    "extracted_entities": "Giornata Mondiale del Libro - 2025 - Eventi - Lettura - UNESCO",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "james senese",
    "discover_score": 0.1928731105461025,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.16527196652719664,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "James Senese - Musica - Napoli Centrale - Jazz - Italia",
    "saturation_score": 57.0
  },
  {
    "rank": 20,
    "entity": "luisa todini",
    "discover_score": 0.18670230097961193,
    "score_1h": 0.0,
    "score_4h": 0.014705882352941176,
    "score_7d": 0.3017751479289941,
    "extracted_entities": "Luisa Todini",
    "saturation_score": 26.0
  },
  {
    "rank": 24,
    "entity": "kean fiorentina",
    "discover_score": 0.18193316402198376,
    "score_1h": 2.206896551724138,
    "score_4h": 0.2659892408846384,
    "score_7d": 0.2366863905325444,
    "extracted_entities": "Kean - Fiorentina - Calcio - Serie A",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "camila giorgi",
    "discover_score": 0.14902661287667196,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1092436974789916,
    "score_7d": 0.16272189349112426,
    "extracted_entities": "Camila Giorgi - Tennis - Atleta",
    "saturation_score": 10.0
  },
  {
    "rank": 29,
    "entity": "emma raducanu",
    "discover_score": 0.1467294190354673,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.052521008403361345,
    "score_7d": 0.15976331360946744,
    "extracted_entities": "Emma Raducanu - Tennis - Atleta",
    "saturation_score": 2.0
  },
  {
    "rank": 33,
    "entity": "ghost of yotei",
    "discover_score": 0.13144588976437593,
    "score_1h": 0.0,
    "score_4h": 0.22594142259414227,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Ghost of Yotei - Monte Yotei - Giappone - Escursionismo - Turismo",
    "saturation_score": 36.0
  },
  {
    "rank": 51,
    "entity": "pacers - bucks",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "elisa girotto 18 regali",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "acconto irpef",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "lamon",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "marco negri",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "diretta rai 1",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "man city vs aston villa",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "jovanotti",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "weather",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "madrid atp",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "valencia - espanyol",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "tesla",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "lsg vs dc",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "davide barzan",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nba",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "emanuela orlandi vaticano",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "salento",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "christopher o'connell",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "barcelone – majorque",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "fuochi d'artificio",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "ceccon",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "festa della liberazione",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "guardie svizzere",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "bruno vespa",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "i peccatori film",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "israele",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "paradiso delle signore",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "pecco bagnaia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "gargano",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "gewitterwarnung",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "etna",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "milei",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "robert de niro",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "pantelleria",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "niccolò fabi",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "open madrid",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "antonio pappalardo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "oblivion remake",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "limone",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "nick pope",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "tesla stock",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tradingview",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "djalo",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "laliga",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "child care",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "mattia almaviva",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "nunzio stancampiano",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "pahalgam",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "luisa ranieri",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "emiliana arango",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "jack ryan",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "maria corleone",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "galatasaray",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "tajani",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "jeremy irons",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "risultati nba",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "gucci",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "thunderbolts",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "luis miguel",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "copa libertadores",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "incendio olbia",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "martin wolf",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "nantes vs psg",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "الطقس غدًا",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "department store",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "cerignola",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "boulter",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "clemente mastella",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "kvitova",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "santoro",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "brocchi",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "edith bruck",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "livorno",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "gabi pallavolo",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "veltroni",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "rita pavone",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "lunigiana",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "mediaset extra the couple",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "ansu fati",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "diaco",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "daniele adani",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "agnese pini",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "playstation store",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "programma tv stasera",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "pete sampras",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "corrado augias",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "copenaghen",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "neres",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "ladakh",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "vecchioni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "bertone cardinale",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "meteo rimini",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "arcivescovo",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "fc barcelona",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "putin",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "carlo cracco",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "deepseek",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "insta360 x5",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "chuck norris",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "chatgpt down",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "giovanni storti",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "massimo franco",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "liam gallagher",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "milei papa francesco",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "cardinale scola",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "ncis",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "altamura",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "buongiorno mercoledi 23 aprile 2025",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "lilli gruber",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "pedro pascal",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "la russa",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "quanto guadagna il papa",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "hugh grant",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "suore di clausura",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "saudi pro league",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "this is us",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "financial times",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "sorella papa francesco",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "the last of us streaming",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "andor",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "meteo trentino",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "bitcoin",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "alessandria",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "keira knightley",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "victoria villarruel",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "arango tennis",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "avanti un altro",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 13:57:16",
  "trends_count": 196,
  "top_score": 9.143552846582125,
  "runtime_minutes": 10.573171587785085,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle nebbie dei trend italiani emergono potenti correnti: il mormorio della Terra scuote Istanbul mentre il vibrare delle corde del calcio e del turismo stuzzicano l'immaginazione comune. Il terremoto a Istanbul (#2) domina con una forza di cambiamento sismico, catturando spiriti ovunque, ma attento! Anche il calcio con partite come \"Nantes - PSG\" (#11) e \"Barça - Mallorca\" (#7) richiama l'attenzione collettiva, sebbene dalle ombre di entità meno bramose di attenzione.\n\nNel regno delle opportunità per Google Discover, la città di \"Conegliano\" (#1) si erge come un affascinante bastione, ancora non saturato nei cuori curiosi dei viaggiatori culturali, e sorretto da un interesse costante. Anche \"Terremoto Istanbul\" (#2), con saturazione bassa e grande scalpitare, offre un terreno fertile ma temporale, richiedendo intervento rapido.\n\nCustodi della cautela, guardate ai domini già abbondantemente arati: Moise Kean (#5), benché brillante nel calcio, soffre di saturazione competitiva. Chi intende domare questi venti deve saper equilibrare passione e strategia, cogliendo l'attimo prima che un altro vento arrivi a scompigliare i destini."
};
