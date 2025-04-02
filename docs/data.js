const trendData = [
  {
    "rank": 1,
    "entity": "val kilmer",
    "discover_score": 13.586526923556896,
    "score_1h": 79.16379310344828,
    "score_4h": 62.97899159663865,
    "score_7d": 3.2958579881656807,
    "extracted_entities": "Val Kilmer - Attore - Film - Carriera",
    "saturation_score": 1870.0
  },
  {
    "rank": 8,
    "entity": "dazi trump",
    "discover_score": 10.633140885893631,
    "score_1h": 34.93103448275862,
    "score_4h": 33.273109243697476,
    "score_7d": 12.807692307692308,
    "extracted_entities": "Dazi - Donald Trump - Politica commerciale - Stati Uniti - Tariffe",
    "saturation_score": 46.0
  },
  {
    "rank": 2,
    "entity": "ilaria sula",
    "discover_score": 9.077473224107665,
    "score_1h": 68.62068965517241,
    "score_4h": 55.66386554621849,
    "score_7d": 2.662721893491124,
    "extracted_entities": "Ilaria Sula",
    "saturation_score": 1270.0
  },
  {
    "rank": 21,
    "entity": "musk",
    "discover_score": 7.066534969366481,
    "score_1h": 45.72413793103448,
    "score_4h": 12.920168067226891,
    "score_7d": 15.059171597633135,
    "extracted_entities": "Elon Musk - SpaceX - Tesla - Twitter - Neuralink",
    "saturation_score": 436.0
  },
  {
    "rank": 47,
    "entity": "empoli",
    "discover_score": 6.155423636230455,
    "score_1h": 40.43103448275862,
    "score_4h": 48.40966386554622,
    "score_7d": 7.011834319526628,
    "extracted_entities": "Empoli - Calcio - Serie A - Toscana - Comune",
    "saturation_score": 1460.0
  },
  {
    "rank": 5,
    "entity": "suor paola",
    "discover_score": 4.718664703066087,
    "score_1h": 32.43103448275862,
    "score_4h": 22.03781512605042,
    "score_7d": 4.568047337278107,
    "extracted_entities": "Suor Paola - Religione - Personaggio pubblico",
    "saturation_score": 1250.0
  },
  {
    "rank": 12,
    "entity": "giovanni paolo ii",
    "discover_score": 4.682794132100012,
    "score_1h": 13.060344827586208,
    "score_4h": 11.886554621848738,
    "score_7d": 8.624260355029586,
    "extracted_entities": "Giovanni Paolo II - Papa - Vaticano - Chiesa Cattolica - Pontificato",
    "saturation_score": 786.0
  },
  {
    "rank": 29,
    "entity": "gamestop",
    "discover_score": 4.506872078889308,
    "score_1h": 5.120689655172414,
    "score_4h": 9.90126050420168,
    "score_7d": 10.7603550295858,
    "extracted_entities": "GameStop - Azioni - Videogiochi - Retail - Investimenti",
    "saturation_score": 9.0
  },
  {
    "rank": 7,
    "entity": "top gun",
    "discover_score": 3.9181654474137924,
    "score_1h": 23.00862068965517,
    "score_4h": 21.5063025210084,
    "score_7d": 3.884615384615385,
    "extracted_entities": "Top Gun - Film - Tom Cruise - Aviazione - Anni '80",
    "saturation_score": 437.0
  },
  {
    "rank": 10,
    "entity": "nintendo",
    "discover_score": 3.2194186394721,
    "score_1h": 71.7844827586207,
    "score_4h": 10.972689075630253,
    "score_7d": 5.384615384615385,
    "extracted_entities": "Nintendo - Videogiochi - Console - Azienda - Intrattenimento",
    "saturation_score": 1690.0
  },
  {
    "rank": 9,
    "entity": "giovanni bagnasco",
    "discover_score": 2.8757779623129096,
    "score_1h": 1.1120689655172413,
    "score_4h": 14.682773109243698,
    "score_7d": 3.63905325443787,
    "extracted_entities": "Giovanni Bagnasco",
    "saturation_score": 59.0
  },
  {
    "rank": 4,
    "entity": "empoli - bologna",
    "discover_score": 2.847264497943112,
    "score_1h": 11.646551724137932,
    "score_4h": 6.2478991596638656,
    "score_7d": 4.4674556213017755,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita",
    "saturation_score": 492.0
  },
  {
    "rank": 45,
    "entity": "iperal",
    "discover_score": 2.1713958849136255,
    "score_1h": 0.1810344827586207,
    "score_4h": 2.0861344537815127,
    "score_7d": 6.982248520710059,
    "extracted_entities": "Iperal - Supermercato - Italia",
    "saturation_score": 196.0
  },
  {
    "rank": 3,
    "entity": "real madrid - real sociedad",
    "discover_score": 2.1450484046990392,
    "score_1h": 7.525862068965518,
    "score_4h": 3.4180672268907566,
    "score_7d": 3.544378698224852,
    "extracted_entities": "Real Madrid - Real Sociedad - Calcio - Partita - Liga",
    "saturation_score": 37.0
  },
  {
    "rank": 49,
    "entity": "psg",
    "discover_score": 1.9098247347685102,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.9621848739495799,
    "score_7d": 6.541420118343195,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico",
    "saturation_score": 103.0
  },
  {
    "rank": 13,
    "entity": "francesca mannocchi sclerosi multipla",
    "discover_score": 1.855744730804143,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4831932773109243,
    "score_7d": 5.144970414201183,
    "extracted_entities": "Francesca Mannocchi - Sclerosi Multipla",
    "saturation_score": 1.0
  },
  {
    "rank": 18,
    "entity": "femminicidio",
    "discover_score": 1.5956427302613208,
    "score_1h": 13.732758620689655,
    "score_4h": 3.9495798319327733,
    "score_7d": 3.807692307692308,
    "extracted_entities": "Femminicidio - Violenza di genere - Crimine - Diritti delle donne - Giustizia",
    "saturation_score": 530.0
  },
  {
    "rank": 6,
    "entity": "nintendo switch 2",
    "discover_score": 1.5510514183461332,
    "score_1h": 65.39655172413794,
    "score_4h": 8.218487394957984,
    "score_7d": 1.8224852071005917,
    "extracted_entities": "Nintendo - Switch 2 - Console - Videogiochi",
    "saturation_score": 447.0
  },
  {
    "rank": 15,
    "entity": "andrea vavassori",
    "discover_score": 1.3100980072294548,
    "score_1h": 0.0,
    "score_4h": 12.602941176470589,
    "score_7d": 0.9082840236686391,
    "extracted_entities": "Andrea Vavassori - Tennis - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "copa del rey",
    "discover_score": 1.158786920334023,
    "score_1h": 1.2758620689655171,
    "score_4h": 1.315126050420168,
    "score_7d": 3.730769230769231,
    "extracted_entities": "Copa del Rey - Calcio - Spagna - Torneo - Squadre",
    "saturation_score": 70.0
  },
  {
    "rank": 27,
    "entity": "pogba",
    "discover_score": 1.0819626986718693,
    "score_1h": 4.206896551724138,
    "score_4h": 0.384453781512605,
    "score_7d": 3.4852071005917162,
    "extracted_entities": "Paul Pogba - Calciatore - Juventus - Francia - Serie A",
    "saturation_score": 6.0
  },
  {
    "rank": 35,
    "entity": "giornalista paolo guzzanti",
    "discover_score": 1.0537569876472268,
    "score_1h": 0.0,
    "score_4h": 0.7121848739495797,
    "score_7d": 3.452662721893491,
    "extracted_entities": "Giornalista - Paolo Guzzanti",
    "saturation_score": 3.0
  },
  {
    "rank": 19,
    "entity": "silksong",
    "discover_score": 0.8277838779005965,
    "score_1h": 4.086206896551724,
    "score_4h": 4.159663865546219,
    "score_7d": 1.4792899408284024,
    "extracted_entities": "Silksong - Videogioco - Team Cherry - Hollow Knight - Data di uscita",
    "saturation_score": 7.0
  },
  {
    "rank": 42,
    "entity": "arsenal - fulham",
    "discover_score": 0.7757481598585916,
    "score_1h": 1.0,
    "score_4h": 0.7710084033613445,
    "score_7d": 2.532544378698225,
    "extracted_entities": "Arsenal - Fulham - Partita di calcio - Premier League",
    "saturation_score": 30.0
  },
  {
    "rank": 36,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.7096417887555121,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8109243697478992,
    "score_7d": 2.21301775147929,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League",
    "saturation_score": 7.0
  },
  {
    "rank": 11,
    "entity": "coppa del re",
    "discover_score": 0.6353816598473696,
    "score_1h": 1.396551724137931,
    "score_4h": 1.388655462184874,
    "score_7d": 1.378698224852071,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Torneo - Squadre",
    "saturation_score": 82.0
  },
  {
    "rank": 44,
    "entity": "giornata mondiale autismo",
    "discover_score": 0.6074991867293823,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.3382352941176472,
    "score_7d": 1.7544378698224852,
    "extracted_entities": "Giornata Mondiale - Autismo - Consapevolezza - Inclusione - Eventi",
    "saturation_score": 223.0
  },
  {
    "rank": 38,
    "entity": "giulia penna",
    "discover_score": 0.5959547600882698,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.8067226890756303,
    "score_7d": 1.8076923076923077,
    "extracted_entities": "Giulia Penna - Cantante - Influencer",
    "saturation_score": 3.0
  },
  {
    "rank": 46,
    "entity": "switch 2 price",
    "discover_score": 0.5781740191455033,
    "score_1h": 0.0,
    "score_4h": 7.048319327731092,
    "score_7d": 0.3106508875739645,
    "extracted_entities": "Nintendo Switch 2 - Prezzo - Console di gioco",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "luigi mangione pena capitale",
    "discover_score": 0.5432067493792252,
    "score_1h": 0.0,
    "score_4h": 0.7794117647058824,
    "score_7d": 1.6952662721893492,
    "extracted_entities": "Luigi Mangione - Pena capitale",
    "saturation_score": 2.0
  },
  {
    "rank": 34,
    "entity": "fabio paratici",
    "discover_score": 0.5303695232562881,
    "score_1h": 0.0,
    "score_4h": 1.9180672268907561,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Dirigente sportivo",
    "saturation_score": 34.0
  },
  {
    "rank": 39,
    "entity": "peter gomez",
    "discover_score": 0.5015781858387557,
    "score_1h": 0.0,
    "score_4h": 4.260504201680672,
    "score_7d": 0.5769230769230769,
    "extracted_entities": "Peter Gomez",
    "saturation_score": 5.0
  },
  {
    "rank": 14,
    "entity": "rcb vs gt",
    "discover_score": 0.4831391196808549,
    "score_1h": 12.543103448275861,
    "score_4h": 3.6449579831932777,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "RCB - GT - Partita di cricket - Indian Premier League - Squadre di cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "pierina paganelli",
    "discover_score": 0.47847503834997224,
    "score_1h": 12.456896551724139,
    "score_4h": 3.2983193277310923,
    "score_7d": 0.6775147928994083,
    "extracted_entities": "Pierina Paganelli",
    "saturation_score": 5.0
  },
  {
    "rank": 16,
    "entity": "probabili formazioni milan inter",
    "discover_score": 0.46656919645163103,
    "score_1h": 2.043103448275862,
    "score_4h": 1.0252100840336134,
    "score_7d": 1.032544378698225,
    "extracted_entities": "Probabili formazioni - Milan - Inter - Calcio - Serie A",
    "saturation_score": 5.0
  },
  {
    "rank": 26,
    "entity": "anna kalinskaja",
    "discover_score": 0.43334526146857594,
    "score_1h": 7.448275862068966,
    "score_4h": 2.0168067226890756,
    "score_7d": 0.7721893491124261,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "my nintendo store",
    "discover_score": 0.4282610759220421,
    "score_1h": 2.1551724137931036,
    "score_4h": 4.214285714285714,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "My Nintendo Store - Nintendo - E-commerce - Videogiochi",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "cory booker",
    "discover_score": 0.40686415961100847,
    "score_1h": 1.3275862068965516,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Cory Booker - Politica - Senato degli Stati Uniti - New Jersey",
    "saturation_score": 99.0
  },
  {
    "rank": 17,
    "entity": "the duskbloods",
    "discover_score": 0.37601244857047844,
    "score_1h": 1.2327586206896552,
    "score_4h": 4.628151260504201,
    "score_7d": 0.01775147928994083,
    "extracted_entities": "The Duskbloods - Serie - Fantasy - Letteratura",
    "saturation_score": 24.0
  },
  {
    "rank": 23,
    "entity": "sciopero trenitalia",
    "discover_score": 0.3303999722664273,
    "score_1h": 2.155172413793103,
    "score_4h": 0.6890756302521008,
    "score_7d": 0.7041420118343196,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "cristiano iovino",
    "discover_score": 0.29124298556556927,
    "score_1h": 3.5172413793103448,
    "score_4h": 0.5126050420168067,
    "score_7d": 0.6301775147928994,
    "extracted_entities": "Cristiano Iovino",
    "saturation_score": 79.0
  },
  {
    "rank": 43,
    "entity": "flavio cobolli",
    "discover_score": 0.28805309765442105,
    "score_1h": 1.5086206896551724,
    "score_4h": 1.0063025210084033,
    "score_7d": 0.5532544378698225,
    "extracted_entities": "Flavio Cobolli - Tennis - Giocatore",
    "saturation_score": 32.0
  },
  {
    "rank": 30,
    "entity": "federica masolin",
    "discover_score": 0.2475542430770824,
    "score_1h": 0.4051724137931034,
    "score_4h": 0.3739495798319328,
    "score_7d": 0.5,
    "extracted_entities": "Federica Masolin - Giornalista - Sport - Televisione",
    "saturation_score": 125.0
  },
  {
    "rank": 48,
    "entity": "deltarune",
    "discover_score": 0.22990092317317745,
    "score_1h": 0.31896551724137934,
    "score_4h": 1.1050420168067225,
    "score_7d": 0.2988165680473373,
    "extracted_entities": "Deltarune - Videogioco - Toby Fox - Undertale - RPG",
    "saturation_score": 3.0
  },
  {
    "rank": 25,
    "entity": "de zerbi milan",
    "discover_score": 0.22481130848313338,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.3550420168067227,
    "score_7d": 0.3905325443786983,
    "extracted_entities": "De Zerbi - Milan - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "alessandro profumo",
    "discover_score": 0.20989834715832356,
    "score_1h": 0.0,
    "score_4h": 0.9201680672268908,
    "score_7d": 0.21893491124260356,
    "extracted_entities": "Alessandro Profumo - Finanza - Banche - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "bonus 1000 euro 2025",
    "discover_score": 0.18919449273607428,
    "score_1h": 2.4913793103448274,
    "score_4h": 0.23109243697478993,
    "score_7d": 0.257396449704142,
    "extracted_entities": "Bonus - 1000 euro - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "mario giuliacci",
    "discover_score": 0.1669795659780235,
    "score_1h": 0.0,
    "score_4h": 0.5210084033613445,
    "score_7d": 0.1183431952662722,
    "extracted_entities": "Mario Giuliacci - Meteorologia - Previsioni del tempo",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "pro patria - atalanta u-23",
    "discover_score": 0.1450085339787945,
    "score_1h": 2.336206896551724,
    "score_4h": 0.5147058823529411,
    "score_7d": 0.05325443786982249,
    "extracted_entities": "Pro Patria - Atalanta U-23 - Partita di calcio - Squadre di calcio - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "leandro domingues",
    "discover_score": 0.13397142737618845,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.25,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Leandro Domingues",
    "saturation_score": 9.0
  },
  {
    "rank": 51,
    "entity": "alemanno",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "from software",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "canva",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "nuggets - timberwolves",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "filippo bonacchi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "arminia bielefeld",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "2 aprile",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "finale coppa italia 2025",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "3b meteo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "lucia bronzetti",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "banco bpm unicredit",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "estrazione lotto",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "wanna marchi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "carlos suarez attore",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "grizzlies - warriors",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "coppa di francia",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "manuela moreno",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "bianca guaccero",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "donkey kong bananza",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "new zealand vs pakistan",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "wolverhampton - west ham",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "damiano uomini e donne",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "loredana errore",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "ps5",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "risultati coppa italia",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "gta 6 uscita",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "tredici pietro figlio di gianni morandi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "chatgpt down",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "enrico rizzi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "luciano darderi",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "coppa di germania",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "emanuela folliero",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "roncadelle",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "webboh awards",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "valerio scanu",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "immobile",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "bianca panconi attrice",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "gta 6",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "unabomber",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "chatgpt studio ghibli",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "cilento",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "eta uk",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "susanna ceccardi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "billy crystal",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "corrado augias",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "pucci",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "arsenal vs fulham",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "kean juventus",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "arshad khan",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "teams",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "preschool",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "canale 5",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "sinodo",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "wisconsin",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "paolo fox oroscopo capricorno",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "meteo milano oggi",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "الأهلي ضد الهلال",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "al ahly - al-hilal",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "alex rolfini",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "morgane - detective geniale",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "boavista - gil vicente",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "charleston open",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "alessandra amoroso",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "spurs - magic",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "arera",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "buongiorno buon mercoledì 2 aprile",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "bulls - raptors",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "femminicidi 2025",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "child care",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "rosy bindi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "نادي ستيلينبوش ضد الزمالك",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "cina taiwan",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "buongiorno 2 aprile 2025",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "virginia giuffrè",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "real sociedad",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "sofia raffaeli",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "programmi tv",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "spider man brand new day tom holland",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "invalsi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "papa francesco",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "uffici usi",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "smartphone",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "holland film",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "bucks - suns",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "corrado guzzanti",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "lella costa",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "enav",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "oppenheimer",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "metro milano",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "madison beer",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "mediaset",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "saputo",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "gazosa",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "sonia bruganelli",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "rita dalla chiesa",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "al ittihad - al-shabab",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "brian thompson",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "tacchinardi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "unimi",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "seminara",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "az alkmaar",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "telelombardia",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "canale 5 streaming",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "stipendio noipa aprile 2025",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "endrick",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "millionday",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "meryl streep",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "az - rkc",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "ali agca",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "biagio izzo",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "atm milano",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "bianca berlinguer",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "mattia furlani",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "papa ratzinger",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "virus russia",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "odgaard collo",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "micaela ramazzotti",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "meteo trento",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "real madrid vs",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "davide calabria",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "manuale per signorine",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "sydney sweeney",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "cameron diaz",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "generali",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "rugani",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "alec baldwin",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "giulia salemi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "marc marquez motogp",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "alvaro mangino",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "mauro corona",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "nehal wadhera",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "mykonos alluvione",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "wawrinka",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "castro bologna",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "nuova scena",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "christian bale",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "blackrock",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "alessandra amoroso incinta",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "mondiale per club",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "regioni italiane",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "uefa youth league",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "capracotta",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "giulia vecchio",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "cracco",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "emma marrone",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "tortoli",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "الريال ضد ريال سوسيداد",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "severance",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "maniago",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "giulia de lellis",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "marilyn manson bergamo",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "ostia",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "campobasso",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "stephen curry",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "nek cantante",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "stefano bandecchi",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "calabria milan",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "vincicasa",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "bardella",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "coupe de france",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "eurobet",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "endrick felipe moreira de sousa",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "kid rock",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "real madrid club de fútbol",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "bonus animali domestici",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "dr",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "abruzzo",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "frecciarossa milano parigi",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "pinguini tattici nucleari",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "la vita da grandi",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "marco baroni",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "thauvin",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "gossip",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "orsolini bologna",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "atp bucarest",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "barcelona sc - independiente del valle",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "belve",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "castro",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "davide maggio",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-02 16:52:22",
  "trends_count": 232,
  "top_score": 13.586526923556896,
  "runtime_minutes": 5.415408237775167,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle lande dei trend italiani, tre sono i temi che perforano il velo dell'ordinario per delineare un domani di contenuti. In primo luogo, la politica commerciale si staglia come un possente albero nel deserto delle discussioni geometriche, con il trend #2, \"dazi trump\", che rappresenta un'opportunità di grande rilievo per Google Discover, trainato da un DScore di 10.6 e una saturazione bassa. Questa è una chiamata per i creatori, intessuta nel destino economico globale.\n\nSeguono il calore senza tempo delle storie cinematografiche, incastonate nell'aura di leggende come Val Kilmer (#1) e racconti dell'aviazione anni '80 (#9, 'top gun') che, sebbene affascinanti, necessitano cautela per la competizione serrata nel campo dell'informazione, segnalata da una saturazione di 1.870 e 437 rispettivamente. Infine, il mondo virtuale si intreccia con quello reale nei venti dell'industria videoludica rappresentata da \"nintendo\" e \"silksong\".\n\nIn questo spettacolo di variazioni delle maree digitali, i prudenti cavalcano sui momenti di bassa saturazione, pianificando con attenzione. L'antico saggio dei creator di contenuti conosce il valore del tempismo e dell'originalità, navigando tra le onde delle tendenze come un marinaio esperto."
};
