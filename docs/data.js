const trendData = [
  {
    "rank": 28,
    "entity": "weather",
    "discover_score": 11.377935617272072,
    "score_1h": 57.060344827586206,
    "score_4h": 33.85322246053233,
    "score_7d": 20.252095660749504,
    "extracted_entities": "Meteo - Previsioni - Clima - Condizioni atmosferiche",
    "saturation_score": 77.0
  },
  {
    "rank": 1,
    "entity": "juventus - lecce",
    "discover_score": 10.718818687234196,
    "score_1h": 69.95689655172414,
    "score_4h": 51.476890756302524,
    "score_7d": 2.837366159481544,
    "extracted_entities": "Juventus - Lecce - Partita di calcio - Serie A",
    "saturation_score": 644.0
  },
  {
    "rank": 30,
    "entity": "lazio roma",
    "discover_score": 6.408393443677607,
    "score_1h": 15.663793103448276,
    "score_4h": 1.55672268907563,
    "score_7d": 17.787440123978584,
    "extracted_entities": "Lazio - Roma - Calcio - Derby - Serie A",
    "saturation_score": 337.0
  },
  {
    "rank": 20,
    "entity": "sgarbi",
    "discover_score": 5.619404044338099,
    "score_1h": 5.974137931034483,
    "score_4h": 0.4606114412292114,
    "score_7d": 14.955233868695407,
    "extracted_entities": "Vittorio Sgarbi - Politica italiana - Critico d'arte - Personaggio televisivo",
    "saturation_score": 30.0
  },
  {
    "rank": 10,
    "entity": "amici eliminato",
    "discover_score": 5.31504329977773,
    "score_1h": 68.5603448275862,
    "score_4h": 30.119747899159663,
    "score_7d": 5.346506058044519,
    "extracted_entities": "Amici - Eliminazione - Programma TV",
    "saturation_score": 3.0
  },
  {
    "rank": 27,
    "entity": "domenica palme",
    "discover_score": 4.951960157804533,
    "score_1h": 84.88793103448276,
    "score_4h": 52.41176470588235,
    "score_7d": 2.5044202592279516,
    "extracted_entities": "Domenica delle Palme - Evento religioso - Settimana Santa - Cristianesimo",
    "saturation_score": 1.0
  },
  {
    "rank": 2,
    "entity": "inter - cagliari",
    "discover_score": 4.233018201209194,
    "score_1h": 32.33620689655172,
    "score_4h": 22.03022924651032,
    "score_7d": 2.433273457311919,
    "extracted_entities": "Inter - Cagliari - Partita di calcio - Serie A",
    "saturation_score": 1590.0
  },
  {
    "rank": 38,
    "entity": "palma",
    "discover_score": 3.8300500830974276,
    "score_1h": 31.120689655172413,
    "score_4h": 4.052301255230125,
    "score_7d": 11.10471259509721,
    "extracted_entities": "Pianta - Palma - Albero",
    "saturation_score": 122.0
  },
  {
    "rank": 39,
    "entity": "israele",
    "discover_score": 3.1835741615640556,
    "score_1h": 1.0,
    "score_4h": 0.6176470588235294,
    "score_7d": 10.255811496196111,
    "extracted_entities": "Israele - Medio Oriente - Conflitto israelo-palestinese - Gerusalemme - Tel Aviv",
    "saturation_score": 275.0
  },
  {
    "rank": 46,
    "entity": "domenica 13 aprile 2025",
    "discover_score": 2.1193512870467424,
    "score_1h": 30.198275862068964,
    "score_4h": 3.642857142857143,
    "score_7d": 6.412457734573119,
    "extracted_entities": "Domenica - 13 aprile 2025 - Calendario - Data - Eventi",
    "saturation_score": 527.0
  },
  {
    "rank": 4,
    "entity": "leganés - barcellona",
    "discover_score": 2.087136402443548,
    "score_1h": 13.21551724137931,
    "score_4h": 3.0735294117647056,
    "score_7d": 3.810527613412229,
    "extracted_entities": "Lega calcio - Leganés - Barcellona - Partita di calcio - La Liga",
    "saturation_score": 6.0
  },
  {
    "rank": 15,
    "entity": "mesina",
    "discover_score": 1.7344424597159405,
    "score_1h": 7.008620689655173,
    "score_4h": 1.6806722689075628,
    "score_7d": 4.636711045364891,
    "extracted_entities": "Mesina - Persone - Cognome",
    "saturation_score": 929.0
  },
  {
    "rank": 7,
    "entity": "modena - sassuolo",
    "discover_score": 1.7048747125661978,
    "score_1h": 4.431034482758621,
    "score_4h": 0.9986902710875145,
    "score_7d": 4.053448154409693,
    "extracted_entities": "Modena - Sassuolo - Città - Località",
    "saturation_score": 78.0
  },
  {
    "rank": 24,
    "entity": "coachella",
    "discover_score": 1.6442945984345771,
    "score_1h": 4.646551724137931,
    "score_4h": 0.8172268907563025,
    "score_7d": 5.042635249366018,
    "extracted_entities": "Coachella - Festival musicale - Indio - California - Eventi musicali",
    "saturation_score": 113.0
  },
  {
    "rank": 6,
    "entity": "buona domenica delle palme 2025 immagini",
    "discover_score": 1.569653938493534,
    "score_1h": 58.03448275862069,
    "score_4h": 9.464285714285715,
    "score_7d": 1.5986721611721613,
    "extracted_entities": "Domenica delle Palme - 2025 - Immagini",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "benson boone",
    "discover_score": 1.4221176116168726,
    "score_1h": 0.0,
    "score_4h": 0.1764705882352941,
    "score_7d": 4.510848126232741,
    "extracted_entities": "Benson Boone - Cantante - TikTok - American Idol",
    "saturation_score": 6.0
  },
  {
    "rank": 3,
    "entity": "bayern monaco - borussia dortmund",
    "discover_score": 1.3090903668161455,
    "score_1h": 0.0,
    "score_4h": 0.6728402658134384,
    "score_7d": 2.623326993519301,
    "extracted_entities": "Bayern Monaco - Borussia Dortmund - Calcio - Bundesliga - Partita",
    "saturation_score": 37.0
  },
  {
    "rank": 8,
    "entity": "musetti de minaur",
    "discover_score": 1.2726187447632193,
    "score_1h": 0.0,
    "score_4h": 0.13445378151260504,
    "score_7d": 3.3326289095519863,
    "extracted_entities": "Lorenzo Musetti - Alex de Minaur - Tennis",
    "saturation_score": 113.0
  },
  {
    "rank": 26,
    "entity": "ne vedremo delle belle",
    "discover_score": 1.0901243526457378,
    "score_1h": 17.655172413793103,
    "score_4h": 2.6470588235294117,
    "score_7d": 2.8719357565511414,
    "extracted_entities": "Espressione idiomatica - Sorpresa - Eventi inaspettati",
    "saturation_score": 542.0
  },
  {
    "rank": 9,
    "entity": "sampdoria - cittadella",
    "discover_score": 1.0268115147192494,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.39857072536127425,
    "score_7d": 2.6854747816286277,
    "extracted_entities": "Sampdoria - Cittadella - Partita di calcio - Serie B",
    "saturation_score": 155.0
  },
  {
    "rank": 11,
    "entity": "manchester city - crystal palace",
    "discover_score": 0.8810114746444971,
    "score_1h": 0.0,
    "score_4h": 0.6638655462184875,
    "score_7d": 2.30520921386306,
    "extracted_entities": "Manchester City - Crystal Palace - Partita di calcio - Premier League",
    "saturation_score": 29.0
  },
  {
    "rank": 5,
    "entity": "venezia - monza",
    "discover_score": 0.837178524518514,
    "score_1h": 3.2758620689655173,
    "score_4h": 1.1407563025210083,
    "score_7d": 1.7081572273879966,
    "extracted_entities": "Venezia - Monza - Città - Italia - Viaggio",
    "saturation_score": 494.0
  },
  {
    "rank": 40,
    "entity": "reggiana - pisa",
    "discover_score": 0.8078474113468923,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.786718089602705,
    "extracted_entities": "Reggiana - Pisa - Partita di calcio - Serie B - Campionato italiano",
    "saturation_score": 49.0
  },
  {
    "rank": 14,
    "entity": "arsenal - brentford",
    "discover_score": 0.6772339832920712,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.29411764705882354,
    "score_7d": 1.884809101155255,
    "extracted_entities": "Arsenal - Brentford - Partita di calcio - Premier League",
    "saturation_score": 39.0
  },
  {
    "rank": 36,
    "entity": "salernitana - südtirol",
    "discover_score": 0.6584530809537418,
    "score_1h": 0.847457627118644,
    "score_4h": 0.23319327731092437,
    "score_7d": 2.1839250493096647,
    "extracted_entities": "Salernitana - Südtirol - Calcio - Serie B - Partita",
    "saturation_score": 76.0
  },
  {
    "rank": 18,
    "entity": "ufc 314",
    "discover_score": 0.6281827852497567,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.5472908828803488,
    "score_7d": 1.744206114398422,
    "extracted_entities": "UFC 314 - Evento sportivo - Arti marziali miste - Incontri di combattimento",
    "saturation_score": 4.0
  },
  {
    "rank": 17,
    "entity": "montezemolo",
    "discover_score": 0.6264247322986883,
    "score_1h": 0.0,
    "score_4h": 0.2640554129601631,
    "score_7d": 1.7959988729219498,
    "extracted_entities": "Luca Cordero di Montezemolo - Ferrari - Alitalia - Italia - Imprenditoria",
    "saturation_score": 78.0
  },
  {
    "rank": 49,
    "entity": "carrarese - catanzaro",
    "discover_score": 0.6080172619691514,
    "score_1h": 0.5508474576271186,
    "score_4h": 0.2815126050420168,
    "score_7d": 2.086080586080586,
    "extracted_entities": "Carrarese - Catanzaro - Calcio - Partita - Serie C",
    "saturation_score": 80.0
  },
  {
    "rank": 29,
    "entity": "claudia koll",
    "discover_score": 0.5981723057428711,
    "score_1h": 0.0,
    "score_4h": 2.32563025210084,
    "score_7d": 1.3211996336996337,
    "extracted_entities": "Claudia Koll - Attrice - Cinema Italiano - Televisione",
    "saturation_score": 2.0
  },
  {
    "rank": 48,
    "entity": "belgrano - boca juniors",
    "discover_score": 0.5399577216087385,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.20920502092050208,
    "score_7d": 1.8291067906452523,
    "extracted_entities": "Belgrano - Boca Juniors - Calcio - Partita - Argentina",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "cosenza - brescia",
    "discover_score": 0.46508476379270036,
    "score_1h": 0.05172413793103448,
    "score_4h": 0.14705882352941177,
    "score_7d": 1.5210270498732037,
    "extracted_entities": "Cosenza - Brescia - Calcio - Serie B - Partita",
    "saturation_score": 59.0
  },
  {
    "rank": 21,
    "entity": "giorgio oliva",
    "discover_score": 0.42450249135216755,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.13445378151260504,
    "score_7d": 1.186320090166244,
    "extracted_entities": "Giorgio Oliva",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "maurizio crozza",
    "discover_score": 0.3948897976810333,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.5620670862487254,
    "score_7d": 1.0643315018315018,
    "extracted_entities": "Maurizio Crozza - Comico - Satira - Televisione",
    "saturation_score": 5.0
  },
  {
    "rank": 12,
    "entity": "parigi roubaix 2025 in tv",
    "discover_score": 0.3755437044959454,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.7715025359256129,
    "extracted_entities": "Parigi-Roubaix - 2025 - TV - Ciclismo - Trasmissione",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "griglia di partenza formula 1",
    "discover_score": 0.36853428634501,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.14285714285714285,
    "score_7d": 0.9569420963651732,
    "extracted_entities": "Griglia di partenza - Formula 1 - Gara - Piloti - Circuito",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "costantino vitagliano",
    "discover_score": 0.3456936523103903,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.4180672268907563,
    "score_7d": 0.8258664412510566,
    "extracted_entities": "Costantino Vitagliano - Personaggio televisivo - Italia",
    "saturation_score": 362.0
  },
  {
    "rank": 41,
    "entity": "uova alla jova",
    "discover_score": 0.3423424128408363,
    "score_1h": 0.0,
    "score_4h": 0.21218487394957986,
    "score_7d": 0.9845731191885039,
    "extracted_entities": "Uova - Jova - Ricetta - Cucina",
    "saturation_score": 4.0
  },
  {
    "rank": 13,
    "entity": "chiamamifaro figlia di",
    "discover_score": 0.2852199474169454,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.11764705882352941,
    "score_7d": 0.5950619892927586,
    "extracted_entities": "chiamamifaro - Figlia",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "la luna rosa oggi",
    "discover_score": 0.26466819914734646,
    "score_1h": 0.0,
    "score_4h": 0.8571428571428571,
    "score_7d": 0.3630424063116371,
    "extracted_entities": "Luna - Luna Rosa - Evento Astronomico",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "sport in tv oggi",
    "discover_score": 0.2573745615457432,
    "score_1h": 2.310344827586207,
    "score_4h": 0.9283165148904751,
    "score_7d": 0.4447555649478726,
    "extracted_entities": "Sport - TV - Programmazione - Oggi",
    "saturation_score": 8.0
  },
  {
    "rank": 25,
    "entity": "casa pia - porto",
    "discover_score": 0.2403797496975716,
    "score_1h": 1.6729982466393922,
    "score_4h": 0.11764705882352941,
    "score_7d": 0.5148809523809523,
    "extracted_entities": "Casa Pia - Porto - Calcio - Partita - Campionato",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "al-nassr - al-riyadh",
    "discover_score": 0.2381972964251819,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6764705882352942,
    "score_7d": 0.44632290786136936,
    "extracted_entities": "Al-Nassr - Al-Riyadh - Calcio - Squadre di calcio - Arabia Saudita",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "decreto sicurezza gazzetta ufficiale",
    "discover_score": 0.19791576856714874,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.2542016806722689,
    "score_7d": 0.3473689771766695,
    "extracted_entities": "Decreto Sicurezza - Gazzetta Ufficiale - Legislazione",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "estrazione lotto 12 aprile 2025",
    "discover_score": 0.18856845231673205,
    "score_1h": 0.0,
    "score_4h": 0.41267008895608454,
    "score_7d": 0.27932163989856296,
    "extracted_entities": "Estrazione Lotto - 12 aprile 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "paddy pimblett",
    "discover_score": 0.1861228699282894,
    "score_1h": 0.0,
    "score_4h": 0.23529411764705882,
    "score_7d": 0.2963334742180896,
    "extracted_entities": "Paddy Pimblett - Arti marziali miste - UFC",
    "saturation_score": 2.0
  },
  {
    "rank": 31,
    "entity": "corteo pro palestina milano",
    "discover_score": 0.18440199315522185,
    "score_1h": 0.7241379310344828,
    "score_4h": 0.02100840336134454,
    "score_7d": 0.3324880247957171,
    "extracted_entities": "Corteo - Pro Palestina - Milano",
    "saturation_score": 1.0
  },
  {
    "rank": 45,
    "entity": "leganes vs barcelona",
    "discover_score": 0.1815941721495559,
    "score_1h": 0.0,
    "score_4h": 0.05042016806722689,
    "score_7d": 0.3481614539306847,
    "extracted_entities": "Leganes - Barcelona - Partita di calcio - La Liga",
    "saturation_score": 2.0
  },
  {
    "rank": 47,
    "entity": "nesta",
    "discover_score": 0.1792282097041401,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0861344537815126,
    "score_7d": 0.33231191885038036,
    "extracted_entities": "Alessandro Nesta - Calcio - Difensore - Milan - Lazio",
    "saturation_score": 94.0
  },
  {
    "rank": 32,
    "entity": "ornella muti",
    "discover_score": 0.15805929467204355,
    "score_1h": 1.293103448275862,
    "score_4h": 0.11974789915966386,
    "score_7d": 0.19831290504367427,
    "extracted_entities": "Ornella Muti - Attrice - Cinema italiano",
    "saturation_score": 5.0
  },
  {
    "rank": 33,
    "entity": "franco abruzzo giornalista",
    "discover_score": 0.14767376254401923,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.07967371048837946,
    "score_7d": 0.1663848971541279,
    "extracted_entities": "Franco Abruzzo - Giornalista - Abruzzo",
    "saturation_score": 3.0
  },
  {
    "rank": 51,
    "entity": "atalanta bologna",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "noipa stipendio",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "qualifiche motogp",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "carlos alcaraz",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "cavese - catania",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "senza cri",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "sara errani",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "perugia - sestri levante",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "armenia",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "napoli empoli",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "southampton - aston villa",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "premier league",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "spal - pontedera",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "pbks vs srh",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "ligabue",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "天气",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "nessuna verità",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "shiva sfera ebbasta",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "morto giornalista rai",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "nottingham forest - everton",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "yildiz",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "real sociedad - mallorca",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "bayern – dortmund",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "john travolta",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "napoli - varese",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "juventus football club",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "fortuna sittard - feyenoord",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "damiano carrara",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "angela melillo",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "verissimo ospiti",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "brighton & hove albion - leicester city",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "rosanna fratello",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "monaco - olympique marsiglia",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "santa clara - sporting",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "gt vs lsg",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "mauro repetto",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "leganés - barcelona",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "pamela prati",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "luna rossa",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "carta dedicata a te 2025 ricarica",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "palermo today",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "az picerno - latina",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "ewan mcgregor",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "lecco - albinoleffe",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "salernitana",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "davidovich fokina",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "veronica maya",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "lorella cuccarini",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "loans",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "savings",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "enzo miccio",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "mortgages",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "الأهرام ضد الأهلي",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "giugliano - sorrento",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "bayern vs dortmund",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "scafati - reggiana",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "mattia bellucci",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "renato veiga",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "krstovic",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "pyramids - al ahly",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "nicola gratteri",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "gratteri",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "football club internazionale milano",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "marathon",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "5g",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "pro vercelli - pro patria",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "s&p rating italia",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "pettinelli",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "san luca calabria",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "space cowboys",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "adriana volpe",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "pinguini tattici nucleari",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "atp ranking live",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "danilo veiga",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "pianese - pineto",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "malgioglio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "maglia inter valentino rossi",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "luca zingaretti",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "meteorite oggi",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "rudy zerbi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "steel ball run",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "parigi roubaix femminile",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "clodiense - atalanta u-23",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "kenan yıldız",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "francesco gabbani",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "david parenzo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "minimoto",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "الطقس غدًا",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "sbk",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "legato",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "celta vigo - espanyol",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "avvenire",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "lautaro martínez",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "rebic",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "sampdoria - lazio",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "padellaro",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "hype",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "disattivare meta ai whatsapp",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "piccolo ragazzo di montagna",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "hamilton",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "musetti fidanzata",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "getafe - las palmas",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "مان سيتي ضد كريستال بالاس",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "lda",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "natalia grace",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "olivia rodrigo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "rory mcilroy",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "millionday",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "elsa fornero",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "denza z9 gt prezzo",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "celtic - kilmarnock",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "teun koopmeiners",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "black mirror 7",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "bayer leverkusen",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "g20",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "nottingham forest",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "unione sportiva lecce",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "pauline ferrand-prévot",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "terremoto napoli",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "cher",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "briatore",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "san severo",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "ministro urso",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "yann aurel bisseck",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "pingitore",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "now",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "simona izzo",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "the last of us",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "antigua",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "brescello",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "calendario serie b",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "andrea pirlo",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "jacopo ticchi",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "sportface",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "di gregorio",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "mulazzo",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "torino comics",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "emma corrin",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "roubaix",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "يلا شوت",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "ballerini",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "volpe adriana",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "montella",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "yuri gagarin",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "salernitana – fc südtirol",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "assegno unico dopo pasqua",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "richard mille",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "saluzzo",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "amerigo vespucci",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "polestar",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "nicolò amici",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "torneo montecarlo",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "mcdonald",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "calendario juve",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "fratoianni",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "ueb cividale - urania milano",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "gaby jean",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "barella",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "abigail esparza reyes",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "ancona",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "burundi",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "jason statham",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "farouk kassam oggi",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "rami malek",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "conero",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "rino gaetano",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "polestar 3",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "grosseto",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "doc",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "renzo arbore",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "castelfidardo",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "the amateur",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "russell",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "angelina jolie",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "gallipoli",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "bochum - augsburg",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "zalewski",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "palmeiras - corinthians",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "priyansh arya",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "gabriele lavia",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "dumfries",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "iran",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "de luca campania",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "eboli",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 236,
    "entity": "amabile bologna",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 237,
    "entity": "carla gozzi ha figli",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 238,
    "entity": "messina denaro",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 239,
    "entity": "quetta gladiators vs peshawar zalmi",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 240,
    "entity": "manuel neuer",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-13 07:01:26",
  "trends_count": 240,
  "top_score": 11.377935617272072,
  "runtime_minutes": 4.313471225897471,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le \"Profezie di Oggi\" ci svelano un panorama dominato da antichi e nuovi duelli sotto gli occhi del cielo mutevole. Il meteo, con un DScore di 11.4, si erge come un protagonista delle tendenze, promettendo di influenzare vite quotidiane e decisioni improvvise. In parallelo, il calcio sa di sfide ardenti, con partite come \"Juventus - Lecce\" e il derby \"Lazio Roma\" che incantano la nazione intera con l'eterna rivalità sportiva.\n\nTuttavia, le verità nascoste sotto il sole rivelano opportunità silenti. La \"Domenica delle Palme\" (#6) emerge con una saturazione minima e un DScore di 5.0, offrendo una nicchia per contenuti religiosi e culturali, mentre \"Amici eliminato\" (#5) attira lo sguardo con un basso Sat, ideale per i creatori di contenuti pop.\n\nL'avvertimento è doveroso per chi desidera sfidare acque già tempestose: \"Inter - Cagliari\" (#7) con la sua saturazione opprimente di 1.590, rappresenta un campo di battaglia affollato e rischioso.\n\nPer cavalcare queste onde di tendenze, abbraccia la freschezza e l'originalità, cercando spazi dove la voce si leva chiara e distinta in un coro silente."
};
