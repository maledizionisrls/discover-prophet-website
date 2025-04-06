const trendData = [
  {
    "rank": 1,
    "entity": "antonello fassari",
    "discover_score": 10.662157153429183,
    "score_1h": 63.5,
    "score_4h": 41.384453781512605,
    "score_7d": 3.952662721893491,
    "extracted_entities": "Antonello Fassari - Attore - Italia - Cinema - Televisione",
    "saturation_score": 1490.0
  },
  {
    "rank": 41,
    "entity": "vinitaly",
    "discover_score": 7.9721672495453015,
    "score_1h": 41.88793103448276,
    "score_4h": 26.380252100840337,
    "score_7d": 16.257396449704142,
    "extracted_entities": "Vinitaly - Vino - Fiera - Verona - Esposizione",
    "saturation_score": 612.0
  },
  {
    "rank": 2,
    "entity": "milan - fiorentina",
    "discover_score": 7.5245684679742535,
    "score_1h": 67.17241379310344,
    "score_4h": 45.002100840336134,
    "score_7d": 2.5946745562130173,
    "extracted_entities": "Milan - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 1510.0
  },
  {
    "rank": 3,
    "entity": "parma - inter",
    "discover_score": 6.67537518153716,
    "score_1h": 64.00862068965517,
    "score_4h": 46.5546218487395,
    "score_7d": 2.2958579881656807,
    "extracted_entities": "Parma - Inter - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": 1390.0
  },
  {
    "rank": 10,
    "entity": "amici eliminato",
    "discover_score": 5.820001169820728,
    "score_1h": 22.42241379310345,
    "score_4h": 35.94957983193277,
    "score_7d": 5.103550295857988,
    "extracted_entities": "Amici - Eliminazione - Programma TV",
    "saturation_score": 0.0
  },
  {
    "rank": 20,
    "entity": "juve roma",
    "discover_score": 5.25800006936288,
    "score_1h": 31.32758620689655,
    "score_4h": 5.985294117647059,
    "score_7d": 12.668639053254438,
    "extracted_entities": "Juventus - Roma - Serie A - Calcio - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "maratona milano",
    "discover_score": 5.042068773438047,
    "score_1h": 43.775862068965516,
    "score_4h": 31.016806722689076,
    "score_7d": 5.488165680473373,
    "extracted_entities": "Maratona - Milano - Evento sportivo",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "alessandra amoroso",
    "discover_score": 3.262512941282119,
    "score_1h": 46.974137931034484,
    "score_4h": 31.45183889455364,
    "score_7d": 1.606508875739645,
    "extracted_entities": "Alessandra Amoroso - Cantante - Musica italiana",
    "saturation_score": 60.0
  },
  {
    "rank": 47,
    "entity": "intelligenza artificiale su whatsapp",
    "discover_score": 2.937090900185846,
    "score_1h": 2.310344827586207,
    "score_4h": 1.5462184873949578,
    "score_7d": 9.579881656804734,
    "extracted_entities": "Intelligenza artificiale - WhatsApp - Tecnologia",
    "saturation_score": 3.0
  },
  {
    "rank": 50,
    "entity": "laliga",
    "discover_score": 2.7675841506449808,
    "score_1h": 0.41379310344827586,
    "score_4h": 1.199579831932773,
    "score_7d": 9.251479289940828,
    "extracted_entities": "La Liga - Calcio - Spagna - Campionato - Squadre",
    "saturation_score": 52.0
  },
  {
    "rank": 13,
    "entity": "bologna napoli",
    "discover_score": 2.184574576000307,
    "score_1h": 6.801724137931034,
    "score_4h": 1.897058823529412,
    "score_7d": 5.609467455621302,
    "extracted_entities": "Bologna - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 114.0
  },
  {
    "rank": 6,
    "entity": "barcellona - betis",
    "discover_score": 2.17552364393433,
    "score_1h": 2.9224137931034484,
    "score_4h": 5.254201680672269,
    "score_7d": 3.8727810650887573,
    "extracted_entities": "Barcellona - Betis - Calcio - Partita - Liga Spagnola",
    "saturation_score": 34.0
  },
  {
    "rank": 9,
    "entity": "wanda nara",
    "discover_score": 1.9956292522941963,
    "score_1h": 8.775862068965518,
    "score_4h": 4.413865546218487,
    "score_7d": 4.094674556213018,
    "extracted_entities": "Wanda Nara - Personaggio pubblico - Gossip - Spettacolo - Argentina",
    "saturation_score": 147.0
  },
  {
    "rank": 23,
    "entity": "fuerteventura",
    "discover_score": 1.9074815926230055,
    "score_1h": 6.844827586206897,
    "score_4h": 2.596638655462185,
    "score_7d": 5.292899408284024,
    "extracted_entities": "Fuerteventura - Isole Canarie - Turismo - Spiagge - Clima",
    "saturation_score": 7.0
  },
  {
    "rank": 7,
    "entity": "formula uno oggi",
    "discover_score": 1.7935152341884117,
    "score_1h": 4.491379310344827,
    "score_4h": 6.26890756302521,
    "score_7d": 2.9319526627218933,
    "extracted_entities": "Formula Uno - Oggi - Eventi - Corse - Automobilismo",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "treno milano parigi",
    "discover_score": 1.7840759859996715,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.47478991596638653,
    "score_7d": 6.174556213017752,
    "extracted_entities": "Treno - Milano - Parigi - Viaggio - Trasporti",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "rita de crescenzo",
    "discover_score": 1.5119677000204006,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.3004201680672269,
    "score_7d": 4.449704142011834,
    "extracted_entities": "Rita De Crescenzo",
    "saturation_score": 331.0
  },
  {
    "rank": 30,
    "entity": "kimi antonelli",
    "discover_score": 1.4708706179994446,
    "score_1h": 0.9655172413793103,
    "score_4h": 4.76890756302521,
    "score_7d": 3.6272189349112427,
    "extracted_entities": "Kimi Antonelli - Pilota - Motorsport - Formula 1",
    "saturation_score": 45.0
  },
  {
    "rank": 36,
    "entity": "giulia de lellis",
    "discover_score": 1.4659079238107766,
    "score_1h": 1.8793103448275863,
    "score_4h": 0.5672268907563025,
    "score_7d": 4.899408284023669,
    "extracted_entities": "Giulia De Lellis - Influencer - Moda - Social Media",
    "saturation_score": 46.0
  },
  {
    "rank": 19,
    "entity": "carbonara day",
    "discover_score": 1.3349091010607532,
    "score_1h": 0.9913793103448276,
    "score_4h": 1.5819327731092439,
    "score_7d": 3.718934911242604,
    "extracted_entities": "Carbonara - Giornata - Cucina Italiana - Pasta - Tradizione",
    "saturation_score": 53.0
  },
  {
    "rank": 8,
    "entity": "juve stabia - salernitana",
    "discover_score": 1.225612063465534,
    "score_1h": 0.0,
    "score_4h": 0.39705882352941174,
    "score_7d": 3.1420118343195265,
    "extracted_entities": "Juve Stabia - Salernitana - Partita di calcio - Serie B - Derby Campano",
    "saturation_score": 83.0
  },
  {
    "rank": 27,
    "entity": "temporali",
    "discover_score": 0.9556246031363618,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.15966386554621848,
    "score_7d": 3.1272189349112423,
    "extracted_entities": "Temporali - Previsioni meteo - Fenomeni atmosferici",
    "saturation_score": 161.0
  },
  {
    "rank": 37,
    "entity": "aston villa - nottingham forest",
    "discover_score": 0.9458076879955349,
    "score_1h": 0.0,
    "score_4h": 0.46638655462184875,
    "score_7d": 3.1745562130177514,
    "extracted_entities": "Aston Villa - Nottingham Forest - Calcio - Premier League",
    "saturation_score": 8.0
  },
  {
    "rank": 32,
    "entity": "lecce venezia",
    "discover_score": 0.9109216492253239,
    "score_1h": 7.672413793103448,
    "score_4h": 1.388655462184874,
    "score_7d": 2.7218934911242605,
    "extracted_entities": "Lecce - Venezia - Calcio - Serie A - Partita",
    "saturation_score": 104.0
  },
  {
    "rank": 4,
    "entity": "monza - como",
    "discover_score": 0.8937611019697747,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.449579831932773,
    "score_7d": 1.6715976331360947,
    "extracted_entities": "Monza - Como - Città - Lombardia - Turismo",
    "saturation_score": 427.0
  },
  {
    "rank": 5,
    "entity": "real madrid - valencia",
    "discover_score": 0.8437372180639896,
    "score_1h": 2.103448275862069,
    "score_4h": 0.36134453781512604,
    "score_7d": 1.9260355029585798,
    "extracted_entities": "Real Madrid - Valencia - Partita di calcio - La Liga - Squadre di calcio",
    "saturation_score": 41.0
  },
  {
    "rank": 48,
    "entity": "psg - angers",
    "discover_score": 0.792387486019074,
    "score_1h": 1.0172413793103448,
    "score_4h": 1.2794117647058822,
    "score_7d": 2.511834319526627,
    "extracted_entities": "PSG - Angers - Calcio - Partita - Ligue 1",
    "saturation_score": 10.0
  },
  {
    "rank": 46,
    "entity": "barcelona vs real betis",
    "discover_score": 0.7709730753672438,
    "score_1h": 0.5,
    "score_4h": 0.3403361344537815,
    "score_7d": 2.674556213017752,
    "extracted_entities": "Barcelona - Real Betis - Partita di calcio - La Liga",
    "saturation_score": 4.0
  },
  {
    "rank": 29,
    "entity": "frosinone - cosenza",
    "discover_score": 0.7631338096828985,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.6554621848739496,
    "score_7d": 2.36094674556213,
    "extracted_entities": "Frosinone - Cosenza - Calcio - Serie B - Partita",
    "saturation_score": 51.0
  },
  {
    "rank": 38,
    "entity": "juventus u23 - crotone",
    "discover_score": 0.7260086234895294,
    "score_1h": 0.0,
    "score_4h": 0.31932773109243695,
    "score_7d": 2.4319526627218937,
    "extracted_entities": "Juventus U23 - Crotone - Partita di calcio - Serie C",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "pisa - modena",
    "discover_score": 0.6404895775748347,
    "score_1h": 0.0,
    "score_4h": 0.3739495798319328,
    "score_7d": 1.9881656804733727,
    "extracted_entities": "Pisa - Modena - Città - Viaggio - Italia",
    "saturation_score": 64.0
  },
  {
    "rank": 11,
    "entity": "micaela ramazzotti",
    "discover_score": 0.5671673410720627,
    "score_1h": 2.086206896551724,
    "score_4h": 0.6365546218487395,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Micaela Ramazzotti - Attrice - Cinema Italiano",
    "saturation_score": 90.0
  },
  {
    "rank": 33,
    "entity": "ciao maschio",
    "discover_score": 0.5465230408871967,
    "score_1h": 0.0,
    "score_4h": 1.0525210084033612,
    "score_7d": 1.5088757396449703,
    "extracted_entities": "Ciao Maschio - Programma TV - Rai 1 - Nunzia De Girolamo",
    "saturation_score": 10.0
  },
  {
    "rank": 25,
    "entity": "vacchi",
    "discover_score": 0.5147275766688901,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.3907563025210084,
    "score_7d": 1.4911242603550297,
    "extracted_entities": "Gianluca Vacchi - Influencer - Imprenditore",
    "saturation_score": 8.0
  },
  {
    "rank": 24,
    "entity": "vangelo 6 aprile",
    "discover_score": 0.49979336687298803,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.7139077388277487,
    "score_7d": 1.3372781065088757,
    "extracted_entities": "Vangelo - 6 aprile - Letture bibliche - Liturgia - Cristianesimo",
    "saturation_score": 2.0
  },
  {
    "rank": 34,
    "entity": "atalanta lazio",
    "discover_score": 0.49410211067207,
    "score_1h": 3.3017241379310347,
    "score_4h": 0.818009212053022,
    "score_7d": 1.3816568047337279,
    "extracted_entities": "Atalanta - Lazio - Serie A - Calcio",
    "saturation_score": 256.0
  },
  {
    "rank": 43,
    "entity": "previsioni meteo per pasqua",
    "discover_score": 0.3649534835847866,
    "score_1h": 0.0,
    "score_4h": 0.9474789915966386,
    "score_7d": 0.8875739644970415,
    "extracted_entities": "Previsioni - Meteo - Pasqua",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "alberto angela",
    "discover_score": 0.364491380608588,
    "score_1h": 0.47413793103448276,
    "score_4h": 0.3102475299743328,
    "score_7d": 0.9585798816568047,
    "extracted_entities": "Alberto Angela - Divulgazione scientifica - Televisione italiana - Cultura - Documentari",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "alice campello",
    "discover_score": 0.34650280015986146,
    "score_1h": 1.1810344827586208,
    "score_4h": 0.18487394957983194,
    "score_7d": 0.8076923076923076,
    "extracted_entities": "Alice Campello - Influencer - Moda - Instagram - Spagna",
    "saturation_score": 354.0
  },
  {
    "rank": 17,
    "entity": "usa manifestazioni contro trump",
    "discover_score": 0.33713620214771506,
    "score_1h": 2.060344827586207,
    "score_4h": 0.9517246229035548,
    "score_7d": 0.6094674556213018,
    "extracted_entities": "USA - Manifestazioni - Donald Trump",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "decreto sicurezza governo",
    "discover_score": 0.3123718263216694,
    "score_1h": 0.3879310344827586,
    "score_4h": 0.7121848739495799,
    "score_7d": 0.7159763313609467,
    "extracted_entities": "Decreto Sicurezza - Governo - Politica Italiana - Legislazione",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "ivan cattaneo",
    "discover_score": 0.279600093255322,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.495798319327731,
    "score_7d": 0.3520710059171598,
    "extracted_entities": "Ivan Cattaneo - Cantante - Artista - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 49,
    "entity": "giovanni allevi",
    "discover_score": 0.2170459161000046,
    "score_1h": 0.0,
    "score_4h": 0.29831932773109243,
    "score_7d": 0.4497041420118343,
    "extracted_entities": "Giovanni Allevi - Musica - Pianista - Compositore",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "musah milan",
    "discover_score": 0.21046290537147766,
    "score_1h": 0.0,
    "score_4h": 0.4096638655462185,
    "score_7d": 0.35502958579881655,
    "extracted_entities": "Musah - Milan - Calcio - Trasferimento - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "pistons - grizzlies",
    "discover_score": 0.20610228318932647,
    "score_1h": 1.3189655172413792,
    "score_4h": 0.42436974789915966,
    "score_7d": 0.3520710059171598,
    "extracted_entities": "Pistons - Grizzlies - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "giro delle fiandre 2025 tv",
    "discover_score": 0.19783915767991964,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.44957983193277307,
    "score_7d": 0.22781065088757396,
    "extracted_entities": "Giro delle Fiandre - 2025 - TV - Ciclismo - Belgio",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "ernesto iaccarino",
    "discover_score": 0.19468054193844123,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.8487394957983193,
    "score_7d": 0.1390532544378698,
    "extracted_entities": "Ernesto Iaccarino - Chef - Cucina Italiana - Ristorazione",
    "saturation_score": 3.0
  },
  {
    "rank": 22,
    "entity": "salvini elon musk",
    "discover_score": 0.14693835396608554,
    "score_1h": 0.4051724137931034,
    "score_4h": 0.18907563025210083,
    "score_7d": 0.10946745562130178,
    "extracted_entities": "Matteo Salvini - Elon Musk",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "tron ares",
    "discover_score": 0.13586945354888533,
    "score_1h": 1.0344827586206897,
    "score_4h": 0.6911764705882353,
    "score_7d": 0.0,
    "extracted_entities": "Tron - Ares",
    "saturation_score": 113.0
  },
  {
    "rank": 44,
    "entity": "brescia - mantova",
    "discover_score": 0.12743778575662937,
    "score_1h": 0.0,
    "score_4h": 0.04411764705882353,
    "score_7d": 0.10650887573964497,
    "extracted_entities": "Brescia - Mantova - Città - Lombardia - Italia",
    "saturation_score": 41.0
  },
  {
    "rank": 51,
    "entity": "everton - arsenal",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "donald trump",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "groningen - psv eindhoven",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "parma inter dove vederla",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "neve",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "sestri levante - milan futuro",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "incidente taranto",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "clippers - mavericks",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "az - feyenoord",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "alianza lima - universitario",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "del piero",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "gaia padovan",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "flood damage",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "charles leclerc",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "heat - bucks",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "gabriella carlucci",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "arezzo - perugia",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "darderi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "lewis hamilton",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "lando norris",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "rr vs pbks",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "mattia bellucci",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "i cesaroni 7",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "cittadella - carrarese",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "derthona - trapani",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "sofia goggia",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "friburgo - borussia dortmund",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "now tv",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "formula 1 live",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "fcsb - u cluj",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "oscar piastri",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "lione - lilla",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "brigitta boccoli",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "sixers - timberwolves",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "manifestazione roma oggi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "now",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "dc vs csk",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "salernitana",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "veronica maya",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "heidenheim - leverkusen",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "carmen russo",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "driver of the day",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "lorenza mario",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "gubbio - ascoli",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "mel gibson",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "west ham - afc bournemouth",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "dodo fiorentina",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "patrizia pellegrino",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "romagnoli",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "guido vianello",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "morto",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "valeria marini",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "alessia amici",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "pontedera - lucchese",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "crystal palace - brighton & hove albion",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "yari carrisi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "miguel indurain",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "pinguini tattici nucleari",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "ivan zazzaroni",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "alessia amici età",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "trento - scafati",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "latina - trapani",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "flavio cobolli",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "scajola",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "everton vs arsenal",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "crosetto",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "the middle",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "justin bieber",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "cristina parodi",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "vis pesaro - rimini",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "isack hadjar",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "george russell",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "football club internazionale milano",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "gavi",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "girona - alavés",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lotto oggi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "chiara amici",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "brest - monaco",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "serena brancale",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "rula jebreal",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "pergolettese - virtus verona",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "ipswich town - wolverhampton",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "weather tomorrow",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "psg",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "werder brema - eintracht",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "milan oggi",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "savings",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "mortgages",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "nationwide building society",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "cilento",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "feralpisalò - lumezzane",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "thiago motta juventus",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bastoni",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "pamela prati",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "rsi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "giana erminio - trento",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "incendio scafati",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "lega serie a",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "tallon griekspoor",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "zazzaroni",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "malgioglio",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "nino frassica",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "antonio percassi",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "sudtirol cesena",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "5g",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "susanna ceccardi",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "francesca albanese",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "michelle hunziker",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "jacob ondrejka",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "fran gonzález",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "luka jović",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "guido crosetto",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "costantino della gherardesca",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "liquidation",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "napoli partita",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "millionday",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "malick thiaw",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "milan news",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "gimenez",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "alba parietti",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "santiago giménez",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "perin",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "sergio rubini",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "mallorca - celta vigo",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "orso maria guerrini",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "katia ricciarelli",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "inter stasera",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "oroscopo sagittario paolo fox",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "giulia arena",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "antonia amici",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "avatar 3",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "moise kean",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "dr",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "mc donald",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "andrea condorelli",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "bolero",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "adli",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "nimes",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "luca argentero",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "blake lively",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "hawks - knicks",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "justine mattera",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "la promessa anticipazioni",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "jackie chan",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "bergoglio",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "paolo rossi",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "calcio.ga",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "maurizio micheli",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "rocket man",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "patrizia rossetti",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "adrián bernabé",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "gianni bugno",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "corrado formigli",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "restaurant",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "sky",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "al-ahli saudi - al ittihad",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "sofia raffaeli",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "chiesa federico",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "olbia",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "maria grazia cucinotta",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "marcianise",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "ranieri fiorentina",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "calendario napoli",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "grado",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "cacciari",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "germania",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "policoro",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "folorunsho",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "albano",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "harry kane",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "anne hathaway",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "one piece",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "grève",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "pulse",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "francesca barra",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "brescello",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "the last of us",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "david de gea",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "moira orfei",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "affari tuoi - puntata di stasera",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "pablo marí",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "südtirol news",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "ministro urso",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 236,
    "entity": "film tv stasera",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 237,
    "entity": "mainz calcio",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 238,
    "entity": "benetton rugby",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 239,
    "entity": "gianni ippoliti",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 240,
    "entity": "micaela ramazzotti figli",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 241,
    "entity": "dazi trump cina",
    "discover_score": 0.08547437138421397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 242,
    "entity": "bucharest open",
    "discover_score": 0.08544413025264191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 243,
    "entity": "la vita da grandi",
    "discover_score": 0.08541403508525716,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 244,
    "entity": "tuttonapoli",
    "discover_score": 0.08538408457378113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 245,
    "entity": "asti",
    "discover_score": 0.08535427742700234,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 246,
    "entity": "gabriele re cecconi",
    "discover_score": 0.08532461237048485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 247,
    "entity": "manuela arcuri",
    "discover_score": 0.08529508814628277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 248,
    "entity": "snai",
    "discover_score": 0.08526570351266076,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 249,
    "entity": "elena delle donne",
    "discover_score": 0.08523645724382045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 250,
    "entity": "fc südtirol – fc cesena",
    "discover_score": 0.08520734812963249,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 251,
    "entity": "matilde de angelis",
    "discover_score": 0.08517837497537416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 252,
    "entity": "procida",
    "discover_score": 0.08514953660147252,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 253,
    "entity": "kevin bacon",
    "discover_score": 0.08512083184325263,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 254,
    "entity": "botteri",
    "discover_score": 0.08509225955069119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 255,
    "entity": "federico chimirri",
    "discover_score": 0.08506381858817494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 256,
    "entity": "nehal wadhera",
    "discover_score": 0.08503550783426429,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 257,
    "entity": "s",
    "discover_score": 0.08500732618146141,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 258,
    "entity": "bisceglie",
    "discover_score": 0.08497927253598325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 259,
    "entity": "elon musk",
    "discover_score": 0.08495134581753899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 260,
    "entity": "kevin campbell",
    "discover_score": 0.08492354495911203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 261,
    "entity": "parco sigurtà",
    "discover_score": 0.08489586890674626,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 262,
    "entity": "bugno",
    "discover_score": 0.08486831661933661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 263,
    "entity": "radio 1",
    "discover_score": 0.08484088706842376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 264,
    "entity": "banksy",
    "discover_score": 0.08481357923799289,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 265,
    "entity": "barca",
    "discover_score": 0.08478639212427637,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 266,
    "entity": "kamil majchrzak",
    "discover_score": 0.0847593247355603,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 267,
    "entity": "castro bologna",
    "discover_score": 0.08473237609199494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 268,
    "entity": "oroscopo settimana cancro",
    "discover_score": 0.08470554522540857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 269,
    "entity": "tivoli",
    "discover_score": 0.08467883117912525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 270,
    "entity": "siracusa",
    "discover_score": 0.08465223300778593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 271,
    "entity": "priyansh arya",
    "discover_score": 0.08462574977717295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 272,
    "entity": "fratelli di crozza",
    "discover_score": 0.08459938056403808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 273,
    "entity": "sicilia express",
    "discover_score": 0.08457312445593364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 274,
    "entity": "conad",
    "discover_score": 0.08454698055104698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 275,
    "entity": "real",
    "discover_score": 0.08452094795803801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 276,
    "entity": "spezia sampdoria",
    "discover_score": 0.08449502579587984,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 277,
    "entity": "miley cyrus",
    "discover_score": 0.08446921319370236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 278,
    "entity": "portofino",
    "discover_score": 0.08444350929063883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 279,
    "entity": "kyle walker",
    "discover_score": 0.08441791323567525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 280,
    "entity": "ufo sweden",
    "discover_score": 0.08439242418750258,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 281,
    "entity": "como 1907",
    "discover_score": 0.08436704131437169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 282,
    "entity": "sestri levante calcio",
    "discover_score": 0.08434176379395099,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 283,
    "entity": "piovani",
    "discover_score": 0.08431659081318664,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 284,
    "entity": "pamela.prati",
    "discover_score": 0.0842915215681654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 285,
    "entity": "الريال ضد فالنسيا",
    "discover_score": 0.0842665552639799,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 286,
    "entity": "vijay shankar",
    "discover_score": 0.08424169111459642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 287,
    "entity": "sofia kenin",
    "discover_score": 0.08421692834272505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 288,
    "entity": "suzuki",
    "discover_score": 0.0841922661796922,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 289,
    "entity": "riccione",
    "discover_score": 0.08416770386531533,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-06 09:39:23",
  "trends_count": 289,
  "top_score": 10.662157153429183,
  "runtime_minutes": 3.1657307783762616,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle profondità dei dati di Google Trends in Italia emergono potenti atmosfere conducendoci attraverso il tumulto dei campi di calcio, il fascino del mondo dello spettacolo e le avventure del turismo. Calcio e sport dominano il panorama con incontri chiave come 'Milan - Fiorentina' e 'Parma - Inter', mentre il fascino delle stelle guida le discussioni su figure come 'Antonello Fassari'. Infine, il turismo risplende tra le sabbie di 'Fuerteventura'.\n\nIl momento propizio, diletto creatore, si cela tra il calice di 'Vinitaly' (#2), il cui interesse ha riscosso vibrazioni immediate, e poche parole rimangono scritte, lasciando ampio margine alla scoperta. In egual misura, l'emergente tema dell'intelligenza all'interno di WhatsApp (#9) offre una terra promessa di innovazione e tecnologia, mantendendo un interesse costante nei sette giorni e una saturazione simbolica.\n\nAvvertenza a chi tenti di camminare tra le stelle del calcio: la saturazione colossale che avvolge 'Milan - Fiorentina' (#3) può risucchiare aspirazioni nella competizione spietata. Strategia e saggezza sono alleate irrinunciabili nel valorizzare lance innovative sul campo vibrante di Google Discover."
};
