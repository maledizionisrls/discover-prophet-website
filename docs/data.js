const trendData = [
  {
    "rank": 3,
    "entity": "lorenzo musetti",
    "discover_score": 6.346698597445092,
    "score_1h": 38.87068965517241,
    "score_4h": 22.800420168067227,
    "score_7d": 5.674556213017752,
    "extracted_entities": "Lorenzo Musetti - Tennis - Giocatore - Italia - ATP",
    "saturation_score": 126.0
  },
  {
    "rank": 4,
    "entity": "venezia - monza",
    "discover_score": 4.875737859213658,
    "score_1h": 37.8448275862069,
    "score_4h": 34.14705882352941,
    "score_7d": 2.328402366863905,
    "extracted_entities": "Venezia - Monza - Città - Viaggio - Turismo",
    "saturation_score": 283.0
  },
  {
    "rank": 44,
    "entity": "carlos alcaraz",
    "discover_score": 3.733267933845808,
    "score_1h": 11.775862068965516,
    "score_4h": 16.5,
    "score_7d": 7.840236686390533,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 53.0
  },
  {
    "rank": 1,
    "entity": "inter - cagliari",
    "discover_score": 3.3474835196617287,
    "score_1h": 54.45689655172414,
    "score_4h": 19.699579831932773,
    "score_7d": 1.1153846153846154,
    "extracted_entities": "Inter - Cagliari - Partita di calcio - Serie A",
    "saturation_score": 635.0
  },
  {
    "rank": 6,
    "entity": "manchester city - crystal palace",
    "discover_score": 3.2269018786624653,
    "score_1h": 5.767241379310345,
    "score_4h": 22.622639850919448,
    "score_7d": 2.2455621301775146,
    "extracted_entities": "Manchester City - Crystal Palace - Partita di calcio - Premier League",
    "saturation_score": 27.0
  },
  {
    "rank": 23,
    "entity": "parigi roubaix",
    "discover_score": 3.0666902066250454,
    "score_1h": 41.646551724137936,
    "score_4h": 20.367409725396435,
    "score_7d": 4.050295857988166,
    "extracted_entities": "Parigi-Roubaix - Ciclismo - Gara - Francia - Classica Monumento",
    "saturation_score": 92.0
  },
  {
    "rank": 17,
    "entity": "carrarese - catanzaro",
    "discover_score": 3.060029324122394,
    "score_1h": 5.775862068965518,
    "score_4h": 33.384453781512605,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "Carrarese - Catanzaro - Calcio - Partita - Serie C",
    "saturation_score": 135.0
  },
  {
    "rank": 2,
    "entity": "udinese - milan",
    "discover_score": 3.0505566770249097,
    "score_1h": 26.594827586206897,
    "score_4h": 6.7120002812840625,
    "score_7d": 3.7810650887573964,
    "extracted_entities": "Udinese - Milan - Serie A - Calcio - Partita",
    "saturation_score": 1480.0
  },
  {
    "rank": 22,
    "entity": "simba la rue",
    "discover_score": 2.988589697599597,
    "score_1h": 1.3017241379310345,
    "score_4h": 0.7812401111072044,
    "score_7d": 8.707100591715976,
    "extracted_entities": "Simba La Rue - Musica - Rap - Artista",
    "saturation_score": 183.0
  },
  {
    "rank": 5,
    "entity": "sampdoria - cittadella",
    "discover_score": 2.9036807492112593,
    "score_1h": 49.83620689655172,
    "score_4h": 22.716949122745334,
    "score_7d": 1.5236686390532546,
    "extracted_entities": "Sampdoria - Cittadella - Calcio - Serie B - Partita",
    "saturation_score": 83.0
  },
  {
    "rank": 32,
    "entity": "mesina",
    "discover_score": 2.6366065244508823,
    "score_1h": 19.913793103448278,
    "score_4h": 22.66386554621849,
    "score_7d": 2.8491124260355027,
    "extracted_entities": "Mesina - Persone - Cognome",
    "saturation_score": 692.0
  },
  {
    "rank": 13,
    "entity": "reggiana - pisa",
    "discover_score": 2.1619985028068918,
    "score_1h": 0.8189655172413793,
    "score_4h": 21.27310924369748,
    "score_7d": 1.2011834319526626,
    "extracted_entities": "Reggiana - Pisa - Calcio - Partita - Serie B",
    "saturation_score": 53.0
  },
  {
    "rank": 20,
    "entity": "liliana resinovich",
    "discover_score": 2.1041550080907547,
    "score_1h": 2.7241379310344827,
    "score_4h": 1.9117647058823528,
    "score_7d": 5.884615384615385,
    "extracted_entities": "Liliana Resinovich",
    "saturation_score": 386.0
  },
  {
    "rank": 10,
    "entity": "maignan",
    "discover_score": 2.0163092987579967,
    "score_1h": 7.413793103448276,
    "score_4h": 2.3865546218487395,
    "score_7d": 4.775147928994082,
    "extracted_entities": "Mike Maignan - Calcio - AC Milan - Portiere - Francia",
    "saturation_score": 823.0
  },
  {
    "rank": 16,
    "entity": "cosenza - brescia",
    "discover_score": 1.8139216574546184,
    "score_1h": 11.353448275862068,
    "score_4h": 18.928571428571427,
    "score_7d": 0.9970414201183432,
    "extracted_entities": "Cosenza - Brescia - Calcio - Serie B - Partita",
    "saturation_score": 95.0
  },
  {
    "rank": 11,
    "entity": "salernitana - südtirol",
    "discover_score": 1.7632704609185685,
    "score_1h": 2.4224137931034484,
    "score_4h": 18.299259871312543,
    "score_7d": 0.7899408284023668,
    "extracted_entities": "Salernitana - Südtirol - Calcio - Serie B - Partita",
    "saturation_score": 46.0
  },
  {
    "rank": 30,
    "entity": "qualifiche motogp",
    "discover_score": 1.577945503548684,
    "score_1h": 2.9913793103448274,
    "score_4h": 11.021008403361344,
    "score_7d": 2.393491124260355,
    "extracted_entities": "Qualifiche - MotoGP - Gare - Piloti - Circuiti",
    "saturation_score": 5.0
  },
  {
    "rank": 12,
    "entity": "chi ha vinto the voice senior 2025",
    "discover_score": 1.5528841601425296,
    "score_1h": 0.14655172413793102,
    "score_4h": 0.31632150768257095,
    "score_7d": 4.319526627218934,
    "extracted_entities": "The Voice Senior - Vincitore - 2025",
    "saturation_score": 7.0
  },
  {
    "rank": 25,
    "entity": "cavese - catania",
    "discover_score": 1.504542981780526,
    "score_1h": 3.8706896551724137,
    "score_4h": 11.586134453781511,
    "score_7d": 1.9201183431952664,
    "extracted_entities": "Cavese - Catania - Calcio - Serie D - Partita",
    "saturation_score": 31.0
  },
  {
    "rank": 7,
    "entity": "bayern monaco - borussia dortmund",
    "discover_score": 1.2178650087227079,
    "score_1h": 35.9051724137931,
    "score_4h": 8.829831932773109,
    "score_7d": 1.0414201183431953,
    "extracted_entities": "Bayern Monaco - Borussia Dortmund - Calcio - Bundesliga - Partita",
    "saturation_score": 10.0
  },
  {
    "rank": 28,
    "entity": "alcaraz oggi",
    "discover_score": 1.0658360721604105,
    "score_1h": 11.46551724137931,
    "score_4h": 6.939075630252101,
    "score_7d": 1.7366863905325445,
    "extracted_entities": "Carlos Alcaraz - Tennis - Partita - Risultati - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "juve lecce",
    "discover_score": 0.9402692472677806,
    "score_1h": 27.508620689655174,
    "score_4h": 7.506302521008404,
    "score_7d": 1.0857988165680474,
    "extracted_entities": "Juventus - Lecce - Serie A - Calcio",
    "saturation_score": 55.0
  },
  {
    "rank": 26,
    "entity": "southampton - aston villa",
    "discover_score": 0.8388992307409301,
    "score_1h": 9.689655172413794,
    "score_4h": 5.6344537815126055,
    "score_7d": 1.2840236686390534,
    "extracted_entities": "Southampton - Aston Villa - Calcio - Premier League - Partita",
    "saturation_score": 6.0
  },
  {
    "rank": 8,
    "entity": "modella lucy markovic",
    "discover_score": 0.8341318714615735,
    "score_1h": 5.801724137931034,
    "score_4h": 4.867647058823529,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Modella - Lucy Markovic",
    "saturation_score": 2.0
  },
  {
    "rank": 47,
    "entity": "derby roma lazio",
    "discover_score": 0.8318461687745801,
    "score_1h": 1.3793103448275863,
    "score_4h": 0.1279666678386836,
    "score_7d": 2.973372781065089,
    "extracted_entities": "Derby - Roma - Lazio - Calcio - Serie A",
    "saturation_score": 3.0
  },
  {
    "rank": 9,
    "entity": "rosanna fratello",
    "discover_score": 0.8263106398382489,
    "score_1h": 21.74137931034483,
    "score_4h": 5.375206567982842,
    "score_7d": 0.9053254437869822,
    "extracted_entities": "Rosanna Fratello - Cantante - Musica Italiana",
    "saturation_score": 50.0
  },
  {
    "rank": 35,
    "entity": "michael jordan",
    "discover_score": 0.8234529572439205,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.08823529411764706,
    "score_7d": 2.8165680473372783,
    "extracted_entities": "Michael Jordan - Basket - NBA - Chicago Bulls - Air Jordan",
    "saturation_score": 9.0
  },
  {
    "rank": 46,
    "entity": "bari - palermo",
    "discover_score": 0.7690053893124787,
    "score_1h": 1.1810344827586208,
    "score_4h": 0.6301026686825357,
    "score_7d": 2.5857988165680474,
    "extracted_entities": "Bari - Palermo - Città - Viaggio - Confronto",
    "saturation_score": 199.0
  },
  {
    "rank": 45,
    "entity": "castellucci",
    "discover_score": 0.6399070751468421,
    "score_1h": 4.310344827586206,
    "score_4h": 0.36764705882352944,
    "score_7d": 2.1568047337278107,
    "extracted_entities": "Romeo Castellucci - Teatro - Regista",
    "saturation_score": 607.0
  },
  {
    "rank": 14,
    "entity": "damiano carrara",
    "discover_score": 0.5931218086308914,
    "score_1h": 8.258620689655173,
    "score_4h": 3.439075630252101,
    "score_7d": 0.8136094674556213,
    "extracted_entities": "Damiano Carrara - Chef - Pasticcere - Personaggio televisivo",
    "saturation_score": 59.0
  },
  {
    "rank": 15,
    "entity": "stefano amadio giornalista",
    "discover_score": 0.5895591079210353,
    "score_1h": 1.043103448275862,
    "score_4h": 1.1323529411764706,
    "score_7d": 1.3994082840236686,
    "extracted_entities": "Stefano Amadio - Giornalista",
    "saturation_score": 7.0
  },
  {
    "rank": 27,
    "entity": "arsenal - brentford",
    "discover_score": 0.5860891950992286,
    "score_1h": 4.422413793103448,
    "score_4h": 7.686122147603811,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Arsenal - Brentford - Calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 29,
    "entity": "fortuna sittard - feyenoord",
    "discover_score": 0.5729491718918969,
    "score_1h": 4.836206896551724,
    "score_4h": 6.5862750958123835,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Fortuna Sittard - Feyenoord - Partita di calcio - Eredivisie",
    "saturation_score": 2.0
  },
  {
    "rank": 31,
    "entity": "costantino vitagliano",
    "discover_score": 0.5603976111701432,
    "score_1h": 0.75,
    "score_4h": 4.722689075630252,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "Costantino Vitagliano - Personaggio televisivo - Italia - Uomini e Donne - Reality TV",
    "saturation_score": 179.0
  },
  {
    "rank": 19,
    "entity": "gp bahrain",
    "discover_score": 0.5419369679126848,
    "score_1h": 11.008620689655173,
    "score_4h": 1.5441176470588236,
    "score_7d": 1.2011834319526629,
    "extracted_entities": "Gran Premio - Bahrain - Formula 1 - Circuito di Sakhir",
    "saturation_score": 239.0
  },
  {
    "rank": 18,
    "entity": "sara errani",
    "discover_score": 0.48788069272872026,
    "score_1h": 23.620689655172413,
    "score_4h": 4.205882352941177,
    "score_7d": 0.3816568047337278,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 37,
    "entity": "real sociedad - mallorca",
    "discover_score": 0.44641283801365234,
    "score_1h": 0.5258620689655172,
    "score_4h": 1.6659663865546217,
    "score_7d": 0.9911242603550295,
    "extracted_entities": "Real Sociedad - Mallorca - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "giuseppe carrisi",
    "discover_score": 0.41024169323538184,
    "score_1h": 0.9482758620689655,
    "score_4h": 0.707983193277311,
    "score_7d": 1.1715976331360947,
    "extracted_entities": "Giuseppe Carrisi",
    "saturation_score": 45.0
  },
  {
    "rank": 43,
    "entity": "parigi roubaix 2025 in tv",
    "discover_score": 0.3761194553467116,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.559561900073837,
    "score_7d": 1.0384615384615385,
    "extracted_entities": "Parigi-Roubaix - 2025 - TV - Ciclismo - Trasmissione",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "leverkusen - union berlino",
    "discover_score": 0.3184983080909253,
    "score_1h": 2.8879310344827585,
    "score_4h": 3.0464997714567,
    "score_7d": 0.1863905325443787,
    "extracted_entities": "Leverkusen - Union Berlino - Partita di calcio - Bundesliga",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "perugia - sestri levante",
    "discover_score": 0.274369709567748,
    "score_1h": 8.586206896551724,
    "score_4h": 0.6785714285714286,
    "score_7d": 0.5473372781065089,
    "extracted_entities": "Perugia - Sestri Levante - Viaggio - Turismo - Località",
    "saturation_score": 7.0
  },
  {
    "rank": 36,
    "entity": "pbks vs srh",
    "discover_score": 0.26249955547396786,
    "score_1h": 4.155172413793103,
    "score_4h": 0.6008403361344539,
    "score_7d": 0.5266272189349113,
    "extracted_entities": "PBKS - SRH - Indian Premier League - Cricket - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "nottingham forest - everton",
    "discover_score": 0.2548535844520281,
    "score_1h": 1.8189655172413792,
    "score_4h": 0.6512605042016807,
    "score_7d": 0.47041420118343197,
    "extracted_entities": "Nottingham Forest - Everton - Partita di calcio - Premier League",
    "saturation_score": 6.0
  },
  {
    "rank": 40,
    "entity": "brighton & hove albion - leicester city",
    "discover_score": 0.24333320698306604,
    "score_1h": 1.9224137931034482,
    "score_4h": 2.008403361344538,
    "score_7d": 0.13313609467455623,
    "extracted_entities": "Brighton & Hove Albion - Leicester City - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "david parenzo",
    "discover_score": 0.19007401819896239,
    "score_1h": 2.1896551724137927,
    "score_4h": 0.03571428571428571,
    "score_7d": 0.39644970414201186,
    "extracted_entities": "David Parenzo - Giornalista - Radio - Televisione - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "manifestazione milano oggi",
    "discover_score": 0.18857305013610576,
    "score_1h": 4.060344827586206,
    "score_4h": 0.26602440139235606,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Manifestazione - Milano - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "carta dedicata a te 2025 ricarica",
    "discover_score": 0.16603856084152271,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.37184873949579833,
    "score_7d": 0.19230769230769232,
    "extracted_entities": "Carta Dedicata a Te - 2025 - Ricarica",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "spal - pontedera",
    "discover_score": 0.1552618401898111,
    "score_1h": 14.086206896551722,
    "score_4h": 0.6470588235294118,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Spal - Pontedera - Calcio - Partita - Serie C",
    "saturation_score": 32.0
  },
  {
    "rank": 49,
    "entity": "giugliano - sorrento",
    "discover_score": 0.14867739354182377,
    "score_1h": 4.913793103448276,
    "score_4h": 0.523109243697479,
    "score_7d": 0.09467455621301776,
    "extracted_entities": "Giugliano - Sorrento - Località - Viaggio - Turismo",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "monaco - olympique marsiglia",
    "discover_score": 0.1455465803817783,
    "score_1h": 2.6120689655172415,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Monaco - Olympique Marsiglia - Calcio - Ligue 1 - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "atp ranking live",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "bayern – dortmund",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "now",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "domenica delle palme 2025",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "montepremi montecarlo 2025",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "verissimo oggi ospiti",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "lecco - albinoleffe",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "الأهرام ضد الأهلي",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "valentina violinista propaganda live",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "pro vercelli - pro patria",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "modena sassuolo",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "maglia inter valentino rossi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "risultati serie b",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "mattia bellucci",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "celta vigo - espanyol",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "az picerno - latina",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "gt vs lsg",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "davidovich fokina",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "operazione vendetta",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "lda",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "man city vs crystal palace",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "pianese - pineto",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "valencia - siviglia",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "bayer leverkusen",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "clodiense - atalanta u-23",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "pauline ferrand-prévot",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "coachella 2025",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "steel ball run",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "bonus elettrodomestici 2025",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "antigua",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "coachella",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "s&p rating italia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "decreto sicurezza gazzetta ufficiale",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "lakers - rockets",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "gallipoli",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "disattivare meta ai whatsapp",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "kaufland",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "مان سيتي ضد كريستال بالاس",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "barcellona - virtus bologna",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "sampdoria - lazio",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "wolfsburg - rb lipsia",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "previsioni meteo pasqua pasquetta",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "simona izzo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "iran",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "trail blazers - warriors",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "getafe - las palmas",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "minimoto",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "celtic - kilmarnock",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "crozza fratelli di crozza",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "shiva sfera ebbasta",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "michele traversa",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "pingitore",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "nuggets - grizzlies",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "antonella viola",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "emma corrin",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "tommy cash",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "polestar",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "elysium orologi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "ac milan",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "investments",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "michael jordan oggi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "luna piena",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "armenia",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "torino comics",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "rami malek",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "conte juventus",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "polestar 3",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "ancona",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "bochum - augsburg",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "al-ettifaq - al hilal",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "arzignano valchiampo - caldiero terme",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "conero",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "lumezzane - novara",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "the amateur",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "renzo arbore",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "alcione - feralpisalò",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "castelfidardo",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "pistons - bucks",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "mission impossible 3",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "fidanzata clementino",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "jordan",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "angelina jolie",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "abigail esparza reyes",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "richard mille",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "manuel neuer",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "rino gaetano",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "celtics - hornets",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "gabriele lavia",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "black mirror 7",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "lebron james",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "air",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "matt damon",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "pagamento assegno unico aprile 2025",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "kings - clippers",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "estrazione lotto",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "grok",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "classifica nba",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "eboli",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "milan news",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "space cowboys",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "mavericks - raptors",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "lens reims",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "montenegro",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "karla sofía gascón",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "ministro urso",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "rita de crescenzo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "udine",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "montezemolo",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "showers",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "atp live",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "renato zero",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "stefania battistini",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "incidente elicottero new york",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "belve",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "ben affleck",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "galatasaray",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "investment advisor",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "quetta gladiators vs peshawar zalmi",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "isola d'elba",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "aspi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "millionday",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "atene",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "bill gates",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "propaganda live stasera",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "samsunspor vs galatasaray",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "suns - spurs",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "the last of us",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "san cataldo",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "giant",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "natalia grace",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "loredana",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "iker bravo",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "asta btp 11 aprile 2025",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "willem dafoe",
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
    "entity": "bracciano",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "strahinja pavlović",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "lorenzo lucca",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "الطقس غدًا",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "mulazzo",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "carofiglio",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "messaggero veneto",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "rinku singh",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "il giardiniere netflix",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "good american family storia vera",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "wolfsburg lipsia",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "casa a prima vista",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "restaurant",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "moratti",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "casteddu online",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "angelina jolie",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "theo hernández",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "magic johnson",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "gazzettino",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "panatta",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "la verità",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-12 16:41:27",
  "trends_count": 211,
  "top_score": 6.346698597445092,
  "runtime_minutes": 3.3639387766520183,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "O Profeti del web, l’eco delle passioni sportive risuona vibrante fra gli androni digitali, con il calcio che sovrasta come un titano. Le partite di Serie A e B, insieme a tornei di tennis, infiammano le ricerche: la parola chiave è \"calcio\". Da Lorenzo Musetti alla sfida tra Inter e Cagliari, il terreno del campo da gioco diventa il palcoscenico dell’interesse immediato.\n\nNel firmamento del discovery, il tema di \"Parigi-Roubaix\" emerge come una stella lucente. Con un DScore di 3.1 e una saturazione modesta, rappresenta un'opportunità radiosa (#6). Anche \"Simba La Rue\", con il suggestivo richiamo al rap e alla scoperta musicale, risplende promettendo contenuti inediti (#9).\n\nTuttavia, un’energia saturante avvolge alcuni campi, richiamando alla cautela: le partite di \"Udinese - Milan\" mostrano un Sat di 1.480, suggerendo una battaglia ardua nella competizione dei contenuti (#8). Inoltre, trend come \"Bayern Monaco - Borussia Dortmund\" celano un potenziale fuoco di paglia nonostante il loro fascino attuale.\n\nNavigare in queste acque richiede inventiva e strategia; resta all’erta, perché nell’imprevedibile ondeggio delle tendenze si cela sempre una nuova rivelazione pronta a emergere."
};
