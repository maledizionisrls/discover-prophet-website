const trendData = [
  {
    "rank": 4,
    "entity": "lazio juve",
    "discover_score": 10.36006043395106,
    "score_1h": 27.18103448275862,
    "score_4h": 24.569327731092436,
    "score_7d": 11.307692307692308,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 8.56940230613267,
    "score_1h": 19.507451782583285,
    "score_4h": 34.49579831932773,
    "score_7d": 3.405325443786982,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "napoli genoa",
    "discover_score": 5.813224082218458,
    "score_1h": 1.5400350672121565,
    "score_4h": 0.9915966386554622,
    "score_7d": 16.701183431952664,
    "extracted_entities": "Napoli - Genoa - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "wordle",
    "discover_score": 5.790167458310908,
    "score_1h": 1.9741379310344827,
    "score_4h": 1.565126050420168,
    "score_7d": 16.183431952662723,
    "extracted_entities": "Wordle - Gioco di parole - Puzzle online",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "tirana",
    "discover_score": 4.908163399942927,
    "score_1h": 14.094827586206897,
    "score_4h": 2.8907563025210083,
    "score_7d": 13.819526627218934,
    "extracted_entities": "Tirana - Albania - Capitale",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "paolini",
    "discover_score": 3.745524566720828,
    "score_1h": 38.44462302746932,
    "score_4h": 18.058823529411764,
    "score_7d": 6.292899408284024,
    "extracted_entities": "Gabriele Paolini - Disturbatore TV - Personaggio pubblico",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "matteo berrettini",
    "discover_score": 3.352052167763547,
    "score_1h": 47.04573348918761,
    "score_4h": 22.39075630252101,
    "score_7d": 2.5,
    "extracted_entities": "Matteo Berrettini - Tennis - ATP - Italia - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "torino inter",
    "discover_score": 3.093899397330299,
    "score_1h": 2.1379310344827585,
    "score_4h": 2.96218487394958,
    "score_7d": 9.068047337278108,
    "extracted_entities": "Torino - Inter - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "como - cagliari",
    "discover_score": 2.3539442400733055,
    "score_1h": 46.57729398012858,
    "score_4h": 17.70798319327731,
    "score_7d": 0.8136094674556213,
    "extracted_entities": "Como - Cagliari - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "sampdoria - salernitana",
    "discover_score": 2.0818330606157396,
    "score_1h": 0.5938047925189947,
    "score_4h": 1.407563025210084,
    "score_7d": 3.9230769230769234,
    "extracted_entities": "Sampdoria - Salernitana - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "sprint motogp",
    "discover_score": 2.0541650942408616,
    "score_1h": 37.59292811221508,
    "score_4h": 16.090336134453782,
    "score_7d": 1.7633136094674557,
    "extracted_entities": "Sprint - MotoGP - Gara",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "fiorentina - roma",
    "discover_score": 1.9265874812059511,
    "score_1h": 37.05172413793103,
    "score_4h": 10.991596638655462,
    "score_7d": 2.6804733727810652,
    "extracted_entities": "Fiorentina - Roma - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "beccalossi",
    "discover_score": 1.9132200025249007,
    "score_1h": 2.891437755698422,
    "score_4h": 5.642857142857142,
    "score_7d": 3.4792899408284024,
    "extracted_entities": "Evaristo Beccalossi - Calcio - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "messina - foggia",
    "discover_score": 1.6911659867509625,
    "score_1h": 59.39655172413793,
    "score_4h": 13.23109243697479,
    "score_7d": 1.3757396449704142,
    "extracted_entities": "Messina - Foggia - Città - Località",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "nuggets - thunder",
    "discover_score": 1.5805976150785788,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.21218487394957983,
    "score_7d": 5.550295857988166,
    "extracted_entities": "Denver Nuggets - Oklahoma City Thunder - NBA - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "play off serie b",
    "discover_score": 1.5537492661119712,
    "score_1h": 0.3017241379310345,
    "score_4h": 0.9411764705882353,
    "score_7d": 4.866863905325443,
    "extracted_entities": "Play off - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "gianni vasino",
    "discover_score": 1.5195674185759773,
    "score_1h": 1.6551724137931034,
    "score_4h": 1.5294117647058822,
    "score_7d": 3.2159763313609466,
    "extracted_entities": "Gianni Vasino - Giornalista - Telecronista - RAI",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "sognando ballando con le stelle",
    "discover_score": 1.5193092338236909,
    "score_1h": 0.6694915254237288,
    "score_4h": 0.6596638655462185,
    "score_7d": 4.319526627218935,
    "extracted_entities": "Ballando con le stelle - Sogni - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "angelo famao",
    "discover_score": 1.5020726828200506,
    "score_1h": 5.198275862068966,
    "score_4h": 3.23109243697479,
    "score_7d": 3.8875739644970415,
    "extracted_entities": "Angelo Famao - Cantante - Musica Neomelodica",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "wec",
    "discover_score": 1.3677062954551258,
    "score_1h": 14.982758620689655,
    "score_4h": 1.5441176470588234,
    "score_7d": 4.420118343195266,
    "extracted_entities": "World Endurance Championship - Motorsport - FIA",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "bublik",
    "discover_score": 1.2748910128095772,
    "score_1h": 16.482758620689655,
    "score_4h": 6.241596638655462,
    "score_7d": 2.4763313609467454,
    "extracted_entities": "Tennis - Alexander Bublik - ATP - Kazakistan - Classifica giocatori",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "cittadella - bari",
    "discover_score": 1.2233683922205885,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.8739495798319328,
    "score_7d": 4.076923076923077,
    "extracted_entities": "Cittadella - Bari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "palermo - frosinone",
    "discover_score": 1.2231622120953298,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.1827731092436975,
    "score_7d": 3.106508875739645,
    "extracted_entities": "Palermo - Frosinone - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "danielle collins",
    "discover_score": 1.0918316205693104,
    "score_1h": 26.76957919345412,
    "score_4h": 10.676470588235293,
    "score_7d": 0.5798816568047337,
    "extracted_entities": "Danielle Collins - Tennis - Giocatrice - Stati Uniti",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "swiatek",
    "discover_score": 0.8937677426354352,
    "score_1h": 32.189655172413794,
    "score_4h": 7.8235294117647065,
    "score_7d": 0.8254437869822486,
    "extracted_entities": "Iga Swiatek - Tennis - WTA - Roland Garros - US Open",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "a che ora gioca sinner oggi",
    "discover_score": 0.7730183081403478,
    "score_1h": 2.4741379310344827,
    "score_4h": 1.1197478991596639,
    "score_7d": 2.044378698224852,
    "extracted_entities": "Jannik Sinner - Partita - Oggi - Orario",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "mixed by erry",
    "discover_score": 0.7697262170946022,
    "score_1h": 0.0,
    "score_4h": 0.3046218487394958,
    "score_7d": 2.109467455621302,
    "extracted_entities": "Mixed by Erry - Film - Musica - Napoli - Anni '80",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "valencia - getafe",
    "discover_score": 0.7683403472382145,
    "score_1h": 4.548655756867329,
    "score_4h": 6.411764705882353,
    "score_7d": 0.7928994082840237,
    "extracted_entities": "Valencia - Getafe - Calcio - Partita - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "sabrina colle",
    "discover_score": 0.6974246581739613,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.7710084033613445,
    "score_7d": 1.9349112426035502,
    "extracted_entities": "Sabrina Colle",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "claudio lippi",
    "discover_score": 0.675636672431848,
    "score_1h": 0.907510227936879,
    "score_4h": 5.189075630252101,
    "score_7d": 0.7899408284023668,
    "extracted_entities": "Claudio Lippi - Personaggio televisivo - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "spezia - cremonese",
    "discover_score": 0.6549259844709586,
    "score_1h": 0.11864406779661017,
    "score_4h": 0.5525210084033614,
    "score_7d": 2.091715976331361,
    "extracted_entities": "Spezia - Cremonese - Calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "southampton - manchester city",
    "discover_score": 0.6322221445116963,
    "score_1h": 11.21551724137931,
    "score_4h": 4.75,
    "score_7d": 0.6390532544378698,
    "extracted_entities": "Southampton - Manchester City - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "anaconda rio delle amazzoni",
    "discover_score": 0.6093785028347483,
    "score_1h": 2.854763296317943,
    "score_4h": 4.640756302521009,
    "score_7d": 0.6301775147928994,
    "extracted_entities": "Anaconda - Rio delle Amazzoni - Serpenti - Fiume - Foresta pluviale",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "taylor fritz",
    "discover_score": 0.5065540336569274,
    "score_1h": 10.96551724137931,
    "score_4h": 3.0840336134453783,
    "score_7d": 0.7633136094674555,
    "extracted_entities": "Taylor Fritz - Tennis - ATP Tour",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "anticipazioni amici serale",
    "discover_score": 0.4700636112857571,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.12605042016806722,
    "score_7d": 1.4467455621301775,
    "extracted_entities": "Anticipazioni - Amici - Serale - Programma TV - Maria De Filippi",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "iga świątek",
    "discover_score": 0.4499089287805774,
    "score_1h": 2.90093512565751,
    "score_4h": 2.9453781512605044,
    "score_7d": 0.606508875739645,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia - Roland Garros",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "aldeguer",
    "discover_score": 0.44181761750827253,
    "score_1h": 11.594827586206897,
    "score_4h": 3.3025210084033616,
    "score_7d": 0.5502958579881656,
    "extracted_entities": "Aldeguer",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "basilea",
    "discover_score": 0.32662397729183124,
    "score_1h": 1.3879310344827587,
    "score_4h": 0.6260504201680672,
    "score_7d": 0.834319526627219,
    "extracted_entities": "Basilea - Svizzera - Città - Turismo - Arte",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "antenna sud",
    "discover_score": 0.3177483302613361,
    "score_1h": 3.637931034482759,
    "score_4h": 1.01890756302521,
    "score_7d": 0.6656804733727811,
    "extracted_entities": "Antenna - Sud - Telecomunicazioni",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "fulham - everton",
    "discover_score": 0.24782543542290003,
    "score_1h": 2.6724137931034484,
    "score_4h": 0.6512605042016807,
    "score_7d": 0.4526627218934911,
    "extracted_entities": "Fulham - Everton - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "azalea della ricerca 2025",
    "discover_score": 0.22631732833725351,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.8088235294117647,
    "score_7d": 0.34911242603550297,
    "extracted_entities": "Azalea - Ricerca - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "mark cavendish",
    "discover_score": 0.18387569102709878,
    "score_1h": 3.670660432495617,
    "score_4h": 0.296218487394958,
    "score_7d": 0.29881656804733725,
    "extracted_entities": "Mark Cavendish - Ciclismo - Tour de France - Velocista - Gran Bretagna",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "modena - brescia",
    "discover_score": 0.1833472801319681,
    "score_1h": 0.0,
    "score_4h": 0.9558823529411765,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Modena - Brescia - Città - Confronto",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "como vs cagliari",
    "discover_score": 0.18182689895749368,
    "score_1h": 7.968877849210988,
    "score_4h": 0.49159663865546216,
    "score_7d": 0.1923076923076923,
    "extracted_entities": "Como - Cagliari - Partita di calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "jesper de jong",
    "discover_score": 0.18118568136485053,
    "score_1h": 4.741379310344827,
    "score_4h": 0.06722689075630252,
    "score_7d": 0.32840236686390534,
    "extracted_entities": "Jesper de Jong - Persona",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "hotel berna milano",
    "discover_score": 0.17699490544585128,
    "score_1h": 0.0,
    "score_4h": 0.226890756302521,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Hotel - Berna - Milano",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "pepe reina",
    "discover_score": 0.17166235646654704,
    "score_1h": 0.7241379310344828,
    "score_4h": 0.9558823529411764,
    "score_7d": 0.07692307692307693,
    "extracted_entities": "Pepe Reina - Calciatore - Portiere - Napoli - Liverpool",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "fermin aldeguer",
    "discover_score": 0.1669867598286775,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8340336134453782,
    "score_7d": 0.10355029585798817,
    "extracted_entities": "Fermin Aldeguer - Motociclismo - Pilota",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "oroscopo ariete 10 maggio",
    "discover_score": 0.16472250558109808,
    "score_1h": 0.0,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.2455621301775148,
    "extracted_entities": "Oroscopo - Ariete - 10 maggio",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "ascolti tv venerdì",
    "discover_score": 0.13605317200886924,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.13445378151260504,
    "score_7d": 0.12130177514792899,
    "extracted_entities": "Ascolti TV - Venerdì - Programmi televisivi - Audience - Share",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "south kensington",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "albania",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "juve stabia - reggiana",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "shaquille o'neal",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "panorama cassino",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "atalanta roma",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "davide fontolan",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "rublev",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "ipswich town - brentford",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cosenza - cesena",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "mantova - carrarese",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "gianna nannini",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "american sniper",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "wta ranking",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "empoli parma",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "alex ferguson",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "rovigo",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "peyton stearns",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "pacers - cavaliers",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "como 1907",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "ceasefire",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "kosmos 482",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "sara bonifacio",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "guido pini",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "festa della mamma 2025 data",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "sebastian ofner",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "cani in aereo",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "barletta calcio",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "regina coeli",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "bayesian",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "supertennis tv",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "sassuolo catanzaro",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "edoardo affini",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "risultati serie b",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "meteo biella",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "referendum",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "kay rush",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "hoara borselli",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "calendario serie b",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "annalisa maschio",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "classifica serie a",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "alexander zverev",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "tusk",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "generale conserva aeronautica militare",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "xabi alonso real madrid",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "diretta",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "pisa sudtirol",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "eugenio finardi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "partite di serie b",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "las palmas - rayo vallecano",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "bono vox",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "victoria mboko",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "dazn",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "farioli",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "don ciotti",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "milan stasera",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "milan news",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "holger rune",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "mikel landa",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "conferenza stampa conte",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "iginio massari",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "darderi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "buongiorno sabato 10 maggio",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "altamura",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "rune",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "istanbul başakşehir - fenerbahçe",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "wolfsburg - hoffenheim",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "habeas corpus",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "jalen williams",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "crudele salmo",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "iva zanicchi",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "guido carli",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "superenalotto 9 maggio 2025",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "tomáš macháč",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "parata militare russia",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "fearnley tennis ranking",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "montemurlo",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "vilius gaubas",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "milan oggi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "jack draper",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "meteo trento",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "zubimendi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "peshawar zalmi vs lahore qalandars",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "francisco comesaña",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "leao",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "luna piena maggio 2025",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "espresso macchiato feat tony effe",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "simone di pasquale",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "doom the dark ages",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "sos fanta",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "ac milan – bologne",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "ademola lookman",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "coppa italia finale",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "victor osimhen",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "san cataldo",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "alessandra tripoli",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "play out serie b",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "serie a tim",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "سيراميكا كليوباترا ضد الزمالك",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "tomori",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "stoccolma",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "contratto metalmeccanici",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "البنك الاهلي ضد الأهرام",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "brescia",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "vito mancuso",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "matilda de angelis",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "rampini",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "margot friedländer",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "stefano massini",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "telenord",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "carlo massarini",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "joan baez",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "lollobrigida",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "emanuela orlandi",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "mary falconieri",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "salerno notizie",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "gaubas",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "de silvestri",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "rosa e lacrime gigi d alessio",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "christian pulisic",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "pierbattista pizzaballa papa",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "agostini",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "cassano inter",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "linda mcmahon",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "theo hernandez",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "diretta rai 2",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "emma navarro",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "francesca bosio",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "fratelli di crozza",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "totti",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "jamie lee curtis",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "minghella",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "eleonora giorgi",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "denver nuggets",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "donovan mitchell",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "val sesia",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "steven seagal",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "fenerbahçe",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "vincicasa",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "maduro",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "robert redford",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "azarenka",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "valsesia",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "ficulle",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "risultati per serie a",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "samsung",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "mads pedersen",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "andreeva",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "kazakistan",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "fiorello",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "raducanu",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "jhon lucumí",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "jiang xinyu",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "landa mikel",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "daniele adani",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "william hill",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "krstovic",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "walker",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "yuri chechi",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "cosimo uomini e donne chi è",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "rey mysterio",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "fc südtirol",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "navarro",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "errani paolini oggi diretta",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "kyle walker",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "malick thiaw",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "streaming calcio",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "omelia papa leone oggi",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "il paradiso delle signore",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "rai due diretta",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "jennifer aniston",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "lucca udinese",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "massimiliano allegri",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "laslo đere",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "corentin moutet",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "final destination",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "südtirol news",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "facile ristrutturare",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "dominguez",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "rai replay",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "segundo castillo",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "chloe wallace",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-10 13:46:23",
  "trends_count": 235,
  "top_score": 10.36006043395106,
  "runtime_minutes": 4.593082984288533,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le stelle del calcio e dell'intrattenimento si allineano nelle Profezie di Oggi. Emergono come temi centrali le sfide calcistiche della Serie A e B, con \"Lazio-Juve\" e \"Milan-Bologna\" che guidano la carica. Anche il panorama televisivo cattura l'interesse con echi di \"Ballando con le stelle\" e gli intrighi del serale di \"Amici\".\n\nTra le opportunità scintillanti di oggi emerge \"Lazio-Juve\" (#1), la cui partita promette un coinvolgimento crescente e una scena poco saturata su Discover, rendendola un terreno fertile per i creatori di contenuti. Allo stesso modo, \"Paolini\" (#6) con la sua influenza come \"Disturbatore TV\" offre un DScore notevole e potenziale narrativo unico.\n\nTuttavia, attenzione ai trend rigonfiati da un interesse passeggero come \"Swiatek\" (#25) nel mondo del tennis, il cui impatto sembra svanire con il calo dei punteggi recenti, segnalando un possibile fuoco di paglia.\n\nIn questo mistero digitale quotidiano, cogli le opportunità nascoste nei riflettori meno affollati, dove l'eco della novità risuona più forte e generosa."
};
