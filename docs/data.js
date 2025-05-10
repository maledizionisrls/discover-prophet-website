const trendData = [
  {
    "rank": 13,
    "entity": "internazionali di roma",
    "discover_score": 18.844849507939223,
    "score_1h": 71.75,
    "score_4h": 44.07563025210084,
    "score_7d": 25.67751479289941,
    "extracted_entities": "Internazionali di Roma - Tennis - Torneo - Roma - ATP",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 10.081133436814271,
    "score_1h": 28.422413793103445,
    "score_4h": 44.844537815126046,
    "score_7d": 3.1597633136094676,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "lazio juve",
    "discover_score": 8.449557324271764,
    "score_1h": 26.46551724137931,
    "score_4h": 30.409663865546218,
    "score_7d": 7.6923076923076925,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "como - cagliari",
    "discover_score": 4.758315863408708,
    "score_1h": 67.29310344827586,
    "score_4h": 31.60924369747899,
    "score_7d": 1.662721893491124,
    "extracted_entities": "Como - Cagliari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "messina - foggia",
    "discover_score": 3.301437175456508,
    "score_1h": 51.04310344827586,
    "score_4h": 31.62605042016807,
    "score_7d": 1.168639053254438,
    "extracted_entities": "Messina - Foggia - Città - Italia - Confronto",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "sprint motogp",
    "discover_score": 3.2920469380078936,
    "score_1h": 38.51724137931035,
    "score_4h": 33.20378151260504,
    "score_7d": 1.4082840236686391,
    "extracted_entities": "Sprint - MotoGP - Gara",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "jasmine paolini",
    "discover_score": 2.8298217614248915,
    "score_1h": 64.12931034482759,
    "score_4h": 18.264705882352942,
    "score_7d": 1.6568047337278107,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "gianni vasino",
    "discover_score": 2.7297655720033416,
    "score_1h": 1.543103448275862,
    "score_4h": 1.6071428571428572,
    "score_7d": 5.940828402366864,
    "extracted_entities": "Gianni Vasino - Giornalismo - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "napoli genoa",
    "discover_score": 2.4271419205135345,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0483193277310925,
    "score_7d": 7.491124260355029,
    "extracted_entities": "Napoli - Genoa - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "beccalossi",
    "discover_score": 2.2637262272111935,
    "score_1h": 2.9913793103448274,
    "score_4h": 12.359243697478991,
    "score_7d": 2.9289940828402368,
    "extracted_entities": "Evaristo Beccalossi - Calcio - Brescia - Inter - Centrocampista",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "torino inter",
    "discover_score": 2.2004985182749786,
    "score_1h": 5.818965517241379,
    "score_4h": 3.25,
    "score_7d": 6.307692307692308,
    "extracted_entities": "Torino - Inter - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "play off serie b",
    "discover_score": 2.079511036042619,
    "score_1h": 2.0086206896551726,
    "score_4h": 1.1869747899159664,
    "score_7d": 6.393491124260355,
    "extracted_entities": "Play off - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "kosmos 482",
    "discover_score": 1.7846566839442168,
    "score_1h": 0.5689655172413793,
    "score_4h": 2.5021008403361344,
    "score_7d": 5.446745562130177,
    "extracted_entities": "Kosmos 482 - Sonda spaziale - Unione Sovietica - Esplorazione di Venere",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "sampdoria - salernitana",
    "discover_score": 1.7615608385985406,
    "score_1h": 1.0775862068965516,
    "score_4h": 1.0987394957983192,
    "score_7d": 3.8550295857988166,
    "extracted_entities": "Sampdoria - Salernitana - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "sognando ballando con le stelle",
    "discover_score": 1.7337032266287566,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.8361344537815125,
    "score_7d": 4.979289940828402,
    "extracted_entities": "Ballando con le stelle - Sogni - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "palermo - frosinone",
    "discover_score": 1.7248341680565984,
    "score_1h": 0.0,
    "score_4h": 0.3319327731092437,
    "score_7d": 4.396449704142012,
    "extracted_entities": "Palermo - Frosinone - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "fiorentina - roma",
    "discover_score": 1.7174311205033355,
    "score_1h": 35.189655172413794,
    "score_4h": 8.899159663865547,
    "score_7d": 2.6952662721893494,
    "extracted_entities": "Fiorentina - Roma - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "tirana",
    "discover_score": 1.6632961542227374,
    "score_1h": 7.620689655172414,
    "score_4h": 4.810924369747899,
    "score_7d": 4.127218934911243,
    "extracted_entities": "Tirana - Albania - Capitale",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "anticipazioni amici serale",
    "discover_score": 1.4594802697542424,
    "score_1h": 0.19827586206896552,
    "score_4h": 0.34243697478991597,
    "score_7d": 4.677514792899409,
    "extracted_entities": "Anticipazioni - Amici - Serale - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "angelo famao",
    "discover_score": 1.3983316086414248,
    "score_1h": 3.163793103448276,
    "score_4h": 3.976890756302521,
    "score_7d": 3.3431952662721893,
    "extracted_entities": "Angelo Famao - Cantante - Musica Neomelodica",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "atalanta roma",
    "discover_score": 1.3477268388614463,
    "score_1h": 0.0,
    "score_4h": 0.8886554621848739,
    "score_7d": 4.665680473372781,
    "extracted_entities": "Atalanta - Roma - Serie A - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "spezia - cremonese",
    "discover_score": 1.138070305146441,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.1722689075630252,
    "score_7d": 4.053254437869823,
    "extracted_entities": "Spezia - Cremonese - Calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "matteo gigante",
    "discover_score": 1.0708401761690614,
    "score_1h": 39.72413793103448,
    "score_4h": 7.8235294117647065,
    "score_7d": 1.3786982248520712,
    "extracted_entities": "Matteo Gigante",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "mixed by erry",
    "discover_score": 1.03726455508595,
    "score_1h": 1.1637931034482758,
    "score_4h": 0.4600840336134454,
    "score_7d": 2.9822485207100593,
    "extracted_entities": "Mixed by Erry - Film - Musica - Napoli - Anni '80",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "anaconda gigante",
    "discover_score": 1.0287475560694612,
    "score_1h": 15.827586206896552,
    "score_4h": 5.1533613445378155,
    "score_7d": 2.1272189349112427,
    "extracted_entities": "Anaconda - Serpente - Dimensioni - Habitat - Sud America",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "cittadella - bari",
    "discover_score": 1.0108125371038743,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.18067226890756302,
    "score_7d": 3.0798816568047336,
    "extracted_entities": "Cittadella - Bari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "southampton - manchester city",
    "discover_score": 0.9773644767881196,
    "score_1h": 40.31896551724138,
    "score_4h": 10.26890756302521,
    "score_7d": 0.37573964497041423,
    "extracted_entities": "Southampton - Manchester City - Calcio - Premier League - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "danielle collins",
    "discover_score": 0.9240773618626885,
    "score_1h": 0.0,
    "score_4h": 8.296218487394958,
    "score_7d": 0.834319526627219,
    "extracted_entities": "Danielle Collins - Tennis - Giocatrice - Stati Uniti - WTA",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "bublik",
    "discover_score": 0.8001215813743195,
    "score_1h": 10.663793103448276,
    "score_4h": 5.1764705882352935,
    "score_7d": 1.2514792899408285,
    "extracted_entities": "Tennis - Alexander Bublik - ATP - Kazakistan - Classifica ATP",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "valencia - getafe",
    "discover_score": 0.7917947136749511,
    "score_1h": 4.8965517241379315,
    "score_4h": 5.384453781512605,
    "score_7d": 1.1597633136094676,
    "extracted_entities": "Valencia - Getafe - Calcio - Partita - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "gianna nannini panorama",
    "discover_score": 0.7088389097744464,
    "score_1h": 0.0,
    "score_4h": 0.06722689075630252,
    "score_7d": 2.4881656804733727,
    "extracted_entities": "Gianna Nannini - Panorama",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "genazzano",
    "discover_score": 0.67471816843798,
    "score_1h": 12.810344827586206,
    "score_4h": 3.7899159663865545,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "Genazzano - Comune - Lazio - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "taylor fritz",
    "discover_score": 0.6481663816131299,
    "score_1h": 7.655172413793103,
    "score_4h": 4.105042016806722,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "Taylor Fritz - Tennis - ATP Tour",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "como vs cagliari",
    "discover_score": 0.540826536375948,
    "score_1h": 7.78448275862069,
    "score_4h": 2.5210084033613445,
    "score_7d": 0.8047337278106509,
    "extracted_entities": "Como - Cagliari - Partita di calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "a che ora gioca sinner oggi",
    "discover_score": 0.4943369123544396,
    "score_1h": 1.1637931034482758,
    "score_4h": 0.38235294117647056,
    "score_7d": 1.2988165680473374,
    "extracted_entities": "Sinner - Partita - Oggi - Orario",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "claudio lippi",
    "discover_score": 0.476876886711634,
    "score_1h": 0.0,
    "score_4h": 2.4516806722689077,
    "score_7d": 0.7928994082840237,
    "extracted_entities": "Claudio Lippi - Personaggio televisivo - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "alex ferguson",
    "discover_score": 0.4117015941763548,
    "score_1h": 0.0,
    "score_4h": 0.058823529411764705,
    "score_7d": 1.3284023668639053,
    "extracted_entities": "Alex Ferguson - Allenatore di calcio - Manchester United - Premier League - Scozia",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "como 1907",
    "discover_score": 0.4032148165355847,
    "score_1h": 1.6810344827586208,
    "score_4h": 0.6281512605042017,
    "score_7d": 1.1597633136094676,
    "extracted_entities": "Como 1907 - Calcio - Squadra - Serie C - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "fulham - everton",
    "discover_score": 0.3450561894788684,
    "score_1h": 4.655172413793103,
    "score_4h": 0.7752100840336135,
    "score_7d": 0.8136094674556213,
    "extracted_entities": "Fulham - Everton - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "iga świątek",
    "discover_score": 0.29622030548934675,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.0126050420168067,
    "score_7d": 0.3550295857988166,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia - Grand Slam",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "strefezza",
    "discover_score": 0.2783082774289823,
    "score_1h": 9.28448275862069,
    "score_4h": 1.1554621848739495,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Gabriel Strefezza - Calcio - Lecce - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "barletta calcio",
    "discover_score": 0.24532106982429377,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.34663865546218486,
    "score_7d": 0.5562130177514792,
    "extracted_entities": "Barletta - Calcio - Squadra di calcio - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "hotel berna milano",
    "discover_score": 0.23779755061703198,
    "score_1h": 0.3103448275862069,
    "score_4h": 0.23529411764705882,
    "score_7d": 0.5325443786982249,
    "extracted_entities": "Hotel - Berna - Milano",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "oroscopo ariete 10 maggio",
    "discover_score": 0.20516922874811616,
    "score_1h": 0.0,
    "score_4h": 0.19327731092436976,
    "score_7d": 0.40532544378698226,
    "extracted_entities": "Oroscopo - Ariete - 10 maggio",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "jesper de jong",
    "discover_score": 0.19527426549964733,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.28361344537815125,
    "score_7d": 0.3076923076923077,
    "extracted_entities": "Jesper de Jong",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "mark cavendish",
    "discover_score": 0.1765585017742022,
    "score_1h": 2.8189655172413794,
    "score_4h": 0.9789915966386555,
    "score_7d": 0.08875739644970415,
    "extracted_entities": "Mark Cavendish - Ciclismo - Tour de France - Campione del Mondo",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "islamabad united vs karachi kings",
    "discover_score": 0.1737368168082639,
    "score_1h": 3.9913793103448274,
    "score_4h": 0.7584033613445378,
    "score_7d": 0.1183431952662722,
    "extracted_entities": "Islamabad United - Karachi Kings - Partita di cricket - Pakistan Super League - Squadre di cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "koyo kouoh",
    "discover_score": 0.14534104254168448,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.018907563025210083,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Koyo Kouoh - Arte Contemporanea - Curatrice - Camerun - Zeitz MOCAA",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "ipswich town - brentford",
    "discover_score": 0.13541597826046223,
    "score_1h": 0.0,
    "score_4h": 0.37815126050420167,
    "score_7d": 0.0621301775147929,
    "extracted_entities": "Ipswich Town - Brentford - Partita di calcio - Campionato inglese - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "ascolti tv venerdì",
    "discover_score": 0.12175583937208773,
    "score_1h": 0.0,
    "score_4h": 0.4054621848739496,
    "score_7d": 0.0,
    "extracted_entities": "Ascolti TV - Venerdì - Programmi televisivi - Audience - Share televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "empoli parma",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "panorama cassino",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "davide fontolan",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "modena - brescia",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "nuggets - thunder",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "antenna sud",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "basilea",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "juve stabia - reggiana",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "rai 2 diretta",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "supertennis",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "wta ranking",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "mantova - carrarese",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "cosenza - cesena",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "wordle",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "sara bonifacio",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "celtic - hibernian",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "rublev",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nico paz",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "frecce tricolori rimini",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "pacers - cavaliers",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "albania",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "supertennis tv",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "peyton stearns",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "festa della mamma 2025 data",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "shaquille o'neal",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "bayesian",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "south kensington",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "cani in aereo",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "sassuolo catanzaro",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "rovigo",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "sebastian ofner",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "american sniper",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "azalea della ricerca 2025",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "guido pini",
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
    "entity": "hoara borselli",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "calendario serie b",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "annalisa maschio",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "classifica serie a",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "alexander zverev",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "kay rush",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "diretta",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "generale conserva aeronautica militare",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "pisa sudtirol",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "tusk",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "xabi alonso real madrid",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "partite di serie b",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "eugenio finardi",
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
    "entity": "victoria mboko",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "edoardo affini",
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
    "entity": "don ciotti",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "holger rune",
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
    "entity": "mikel landa",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "darderi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "iginio massari",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "ceasefire",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "bono vox",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "rune",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "istanbul başakşehir - fenerbahçe",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "buongiorno sabato 10 maggio",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "wolfsburg - hoffenheim",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "iva zanicchi",
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
    "entity": "superenalotto 9 maggio 2025",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "parata militare russia",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "vilius gaubas",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "altamura",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "milan oggi",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "jack draper",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "montemurlo",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "tomáš macháč",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "fearnley tennis ranking",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "guido carli",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "meteo trento",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "francisco comesaña",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "leao",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "zubimendi",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "luna piena maggio 2025",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "simone di pasquale",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "conferenza stampa conte",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "ac milan – bologne",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "coppa italia finale",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "ademola lookman",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "alessandra tripoli",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "play out serie b",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "serie a tim",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "tomori",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "contratto metalmeccanici",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "san cataldo",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "stoccolma",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "البنك الاهلي ضد الأهرام",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "brescia",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "rampini",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "margot friedländer",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "victor osimhen",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "vito mancuso",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "stefano massini",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "matilda de angelis",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "telenord",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "joan baez",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "carlo massarini",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "lollobrigida",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "emanuela orlandi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "gaubas",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "salerno notizie",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "de silvestri",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "rosa e lacrime gigi d alessio",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "mary falconieri",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "christian pulisic",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "agostini",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "linda mcmahon",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "theo hernandez",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "emma navarro",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "totti",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "jamie lee curtis",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "cassano inter",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "minghella",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "eleonora giorgi",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "fratelli di crozza",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "francesca bosio",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "val sesia",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "steven seagal",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "fenerbahçe",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "vincicasa",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "maduro",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "azarenka",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "valsesia",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "ficulle",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "risultati per serie a",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "robert redford",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "mads pedersen",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "fiorello",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "kazakistan",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "samsung",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "raducanu",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "jhon lucumí",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "jiang xinyu",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "landa mikel",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "daniele adani",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "krstovic",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "william hill",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "walker",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "yuri chechi",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "vittorio sgarbi",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "rey mysterio",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "fc südtirol",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "navarro",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "errani paolini oggi diretta",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "malick thiaw",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "kyle walker",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "streaming calcio",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "omelia papa leone oggi",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "il paradiso delle signore",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "rai due diretta",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "jennifer aniston",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "lucca udinese",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "corentin moutet",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "final destination",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "südtirol news",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "dominguez",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "rai replay",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "segundo castillo",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "chloe wallace",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-10 14:41:41",
  "trends_count": 222,
  "top_score": 18.844849507939223,
  "runtime_minutes": 5.091374202569326,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle sfere digitali che svelano il presente e predicono il futuro, emergono chiaramente due temi preponderanti: il regno del calcio e i fasti del tennis. Le passioni infuocate delle partite di calcio tra club italiani e internazionali dominano la scena, mentre i campi da tennis brillano sotto l'occhio vigile degli Internazionali di Roma.\n\nTra le arcate virtuali di Google, \"internazionali di roma\" #1 si profila come un'opportunità dorata per i creatori di contenuti. Con un Discover Score di 18.8 e un trend di interesse in costante crescita nell'ultima ora, questo evento è un fertile terreno da coltivare in Google Discover, privo di saturazione travolgente.\n\nBenché attraente, il magico mondo del calcio non è privo di insidie. Il trend \"milan - bologna\" #2, pur onorabilmente ai vertici del ranking, rivela un interesse volatile e un Discover Score inferiore, segnalando il pericolo di un attrito competitivo.\n\nCreare contenuti che ballino tra l'attualità e la nicchia emergente potrà condurre i visionari della parola a cavalcare queste onde fluttuanti, stabilendo connessioni profonde con un pubblico affamato di novità."
};
