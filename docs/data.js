const trendData = [
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 10.95198579855773,
    "score_1h": 65.71551724137932,
    "score_4h": 49.0,
    "score_7d": 3.2366863905325447,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "classifica serie a",
    "discover_score": 8.145034880168586,
    "score_1h": 73.93103448275862,
    "score_4h": 50.35924369747899,
    "score_7d": 11.594674556213018,
    "extracted_entities": "Classifica - Serie A - Calcio - Campionato - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "san cataldo",
    "discover_score": 6.7196373106314455,
    "score_1h": 0.3474576271186441,
    "score_4h": 0.31512605042016806,
    "score_7d": 20.71597633136095,
    "extracted_entities": "San Cataldo - Città - Sicilia - Turismo - Storia",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "wordle",
    "discover_score": 5.797577576728589,
    "score_1h": 11.275862068965518,
    "score_4h": 4.504254421433846,
    "score_7d": 14.428994082840237,
    "extracted_entities": "Wordle - Gioco di parole - Puzzle online - New York Times",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "meteo biella",
    "discover_score": 5.33205054747444,
    "score_1h": 3.2844827586206895,
    "score_4h": 1.0945378151260505,
    "score_7d": 15.378698224852071,
    "extracted_entities": "Meteo - Biella - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "torino inter",
    "discover_score": 5.083980069800394,
    "score_1h": 0.4051724137931034,
    "score_4h": 0.5294117647058824,
    "score_7d": 15.810650887573964,
    "extracted_entities": "Torino - Inter - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "festa della mamma 2025 data",
    "discover_score": 4.443035040283203,
    "score_1h": 1.5603448275862069,
    "score_4h": 0.09033613445378151,
    "score_7d": 13.050295857988164,
    "extracted_entities": "Festa della mamma - 2025 - Data",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "10 maggio",
    "discover_score": 4.198308026358774,
    "score_1h": 59.768848626534194,
    "score_4h": 30.191580816426992,
    "score_7d": 5.239644970414201,
    "extracted_entities": "10 maggio - Eventi storici - Compleanni famosi - Festività",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "sampdoria - salernitana",
    "discover_score": 3.5709678426795324,
    "score_1h": 20.586206896551722,
    "score_4h": 17.480037621743257,
    "score_7d": 2.3727810650887573,
    "extracted_entities": "Sampdoria - Salernitana - Partita di calcio - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "lazio juve",
    "discover_score": 2.997196827958656,
    "score_1h": 8.525862068965516,
    "score_4h": 1.756865089131887,
    "score_7d": 7.955621301775148,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "palermo - frosinone",
    "discover_score": 2.703085485166428,
    "score_1h": 5.172413793103448,
    "score_4h": 3.281398333391934,
    "score_7d": 4.553254437869823,
    "extracted_entities": "Palermo - Frosinone - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "nuggets - thunder",
    "discover_score": 2.597598992361324,
    "score_1h": 7.28448275862069,
    "score_4h": 10.482261523856405,
    "score_7d": 3.8520710059171597,
    "extracted_entities": "Denver Nuggets - Oklahoma City Thunder - NBA - Partita di basket - Squadre di basket",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "play off serie b",
    "discover_score": 2.4920732040776605,
    "score_1h": 0.0,
    "score_4h": 0.6400179318589361,
    "score_7d": 7.068047337278106,
    "extracted_entities": "Play off - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "anaconda",
    "discover_score": 2.44894508629981,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.3453552969304877,
    "score_7d": 8.076923076923077,
    "extracted_entities": "Anaconda - Serpente - Habitat - Predatori - Sud America",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "a che ora gioca sinner",
    "discover_score": 2.2670120560519322,
    "score_1h": 4.228521332554061,
    "score_4h": 2.060924369747899,
    "score_7d": 6.704142011834319,
    "extracted_entities": "Jannik Sinner - Partita - Orario",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "gianni vasino",
    "discover_score": 1.8744371583020358,
    "score_1h": 6.172413793103448,
    "score_4h": 2.3781512605042017,
    "score_7d": 3.562130177514793,
    "extracted_entities": "Gianni Vasino - Giornalista - Telecronista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "francis prevost papa leone xiv",
    "discover_score": 1.7767194834091289,
    "score_1h": 1.1379310344827587,
    "score_4h": 0.15546218487394958,
    "score_7d": 5.097633136094675,
    "extracted_entities": "Francis Prevost - Papa Leone XIV",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "spezia - cremonese",
    "discover_score": 1.768130877397141,
    "score_1h": 2.275862068965517,
    "score_4h": 1.1649115713230898,
    "score_7d": 3.8520710059171597,
    "extracted_entities": "Spezia - Cremonese - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "lookman",
    "discover_score": 1.7491310094615822,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.4512763264301537,
    "score_7d": 5.372781065088757,
    "extracted_entities": "Lookman",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "modena - brescia",
    "discover_score": 1.6296192465831725,
    "score_1h": 1.3305084745762712,
    "score_4h": 0.8508403361344538,
    "score_7d": 4.1301775147929,
    "extracted_entities": "Modena - Brescia - Città - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "orari motogp",
    "discover_score": 1.620357353903992,
    "score_1h": 25.275862068965516,
    "score_4h": 3.759519707464576,
    "score_7d": 4.017751479289941,
    "extracted_entities": "Orari - MotoGP - Calendario - Gare - Circuiti",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "cosenza - cesena",
    "discover_score": 1.5117623012034633,
    "score_1h": 2.3879310344827585,
    "score_4h": 0.7682746738862909,
    "score_7d": 4.017751479289941,
    "extracted_entities": "Cosenza - Cesena - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "sassuolo catanzaro",
    "discover_score": 1.48458322229749,
    "score_1h": 2.396551724137931,
    "score_4h": 3.4691993952392672,
    "score_7d": 3.8402366863905324,
    "extracted_entities": "Sassuolo - Catanzaro - Calcio - Serie A - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "sognando ballando con le stelle",
    "discover_score": 1.456437220860828,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.8508403361344539,
    "score_7d": 3.9171597633136095,
    "extracted_entities": "Ballando con le stelle - Sogni - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "juve stabia - reggiana",
    "discover_score": 1.4405596432498138,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.8319327731092436,
    "score_7d": 3.7396449704142016,
    "extracted_entities": "Juve Stabia - Reggiana - Partita di calcio - Serie C - Campionato italiano",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "pacers - cavaliers",
    "discover_score": 1.4386340498285972,
    "score_1h": 0.7155172413793104,
    "score_4h": 1.2415966386554622,
    "score_7d": 4.076923076923077,
    "extracted_entities": "Pacers - Cavaliers - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "napoli genoa",
    "discover_score": 1.3721286581159668,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.4957983193277311,
    "score_7d": 4.650887573964496,
    "extracted_entities": "Napoli - Genoa - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "sabrina colle",
    "discover_score": 1.2327827475554562,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.5126050420168067,
    "score_7d": 3.544378698224852,
    "extracted_entities": "Sabrina Colle - Personaggio pubblico - Attrice - Modella",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "mixed by erry",
    "discover_score": 1.229171978017069,
    "score_1h": 0.3793103448275862,
    "score_4h": 1.0780914876410816,
    "score_7d": 2.78698224852071,
    "extracted_entities": "Mixed by Erry - Film - Musica - Napoli - Anni '80",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "bayesian",
    "discover_score": 1.2091680351460254,
    "score_1h": 3.310344827586207,
    "score_4h": 1.3299725748039801,
    "score_7d": 3.408284023668639,
    "extracted_entities": "Bayesian - Statistica - Probabilità - Inferenza - Modelli",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "cittadella - bari",
    "discover_score": 1.0041930515675672,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7974842656727963,
    "score_7d": 2.3846153846153846,
    "extracted_entities": "Cittadella - Bari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "anticipazioni amici serale",
    "discover_score": 0.9852601946257121,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.2959459934601456,
    "score_7d": 3.227810650887574,
    "extracted_entities": "Anticipazioni - Amici - Serale - Programma TV - Maria De Filippi",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "francesco passaro",
    "discover_score": 0.8939036652723356,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.159763313609467,
    "extracted_entities": "Francesco Passaro",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "mantova - carrarese",
    "discover_score": 0.8216029183246184,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.3802521008403361,
    "score_7d": 2.2810650887573964,
    "extracted_entities": "Mantova - Carrarese - Calcio - Partita - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "kosmos 482",
    "discover_score": 0.6983721179390753,
    "score_1h": 8.81896551724138,
    "score_4h": 1.6050420168067228,
    "score_7d": 1.9319526627218937,
    "extracted_entities": "Kosmos 482 - Sonda spaziale - Unione Sovietica - Esplorazione di Venere",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "carlos alcaraz",
    "discover_score": 0.6065430266921298,
    "score_1h": 1.4913793103448276,
    "score_4h": 0.20378151260504201,
    "score_7d": 2.0414201183431953,
    "extracted_entities": "Carlos Alcaraz - Tennis - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "elena pietrini",
    "discover_score": 0.6041983099477825,
    "score_1h": 0.0,
    "score_4h": 0.6278787665693892,
    "score_7d": 1.952662721893491,
    "extracted_entities": "Elena Pietrini - Pallavolo - Italia - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "tusk",
    "discover_score": 0.589291328365082,
    "score_1h": 1.859146697837522,
    "score_4h": 0.48258675855279354,
    "score_7d": 1.7485207100591715,
    "extracted_entities": "Donald Tusk - Elezioni Polonia - Politica Europea",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "debora massari",
    "discover_score": 0.4958820635544491,
    "score_1h": 0.0,
    "score_4h": 0.36886888646672056,
    "score_7d": 1.5828402366863905,
    "extracted_entities": "Debora Massari",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "beccalossi",
    "discover_score": 0.3681128683423705,
    "score_1h": 1.7586206896551724,
    "score_4h": 0.9778225097570408,
    "score_7d": 0.7869822485207101,
    "extracted_entities": "Evaristo Beccalossi - Calcio - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "fratelli di crozza",
    "discover_score": 0.36807893215128884,
    "score_1h": 0.0,
    "score_4h": 0.06512605042016807,
    "score_7d": 1.150887573964497,
    "extracted_entities": "Fratelli di Crozza - Programma TV - Maurizio Crozza - Satira - Intrattenimento",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "gianna nannini panorama",
    "discover_score": 0.363701622356644,
    "score_1h": 0.0,
    "score_4h": 0.48109243697478987,
    "score_7d": 0.9733727810650887,
    "extracted_entities": "Gianna Nannini - Panorama",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "jalen williams",
    "discover_score": 0.3368679666905179,
    "score_1h": 0.0,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.9585798816568047,
    "extracted_entities": "Jalen Williams - Basket - NBA",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "santiago gimenez",
    "discover_score": 0.3073841006369936,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.6745562130177515,
    "extracted_entities": "Santiago Giménez - Calciatore - Feyenoord - Messico - Eredivisie",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "matilda de angelis",
    "discover_score": 0.25239467569625773,
    "score_1h": 1.3879310344827587,
    "score_4h": 0.2394957983193277,
    "score_7d": 0.6005917159763314,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "habeas corpus",
    "discover_score": 0.23309225167105907,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7121848739495797,
    "score_7d": 0.3727810650887574,
    "extracted_entities": "Habeas Corpus - Diritto - Libertà personale - Procedura legale - Giustizia",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "papa leone xiv scandalo",
    "discover_score": 0.22960669892966126,
    "score_1h": 0.75,
    "score_4h": 0.11134453781512606,
    "score_7d": 0.5502958579881657,
    "extracted_entities": "Papa Leone XIV - Scandalo",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "xabi alonso real madrid",
    "discover_score": 0.21544166458971237,
    "score_1h": 0.0,
    "score_4h": 0.03765690376569038,
    "score_7d": 0.4556213017751479,
    "extracted_entities": "Xabi Alonso - Real Madrid - Calciatore - Club di calcio - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "generale conserva aeronautica militare",
    "discover_score": 0.19781165914479804,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Generale - Conserva - Aeronautica Militare",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "cani in aereo",
    "discover_score": 0.181461993972401,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.31512605042016806,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Cani - Aereo - Viaggio - Regolamenti - Trasporto animali",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "pisa sudtirol",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "diretta",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "alexander zverev",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "salmo crudele",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "como cagliari",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "eugenio finardi",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "meteo trento",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "las palmas - rayo vallecano",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "xatar",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "holger rune",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "annalisa maschio",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "milan news",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "milan stasera",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "victoria mboko",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "ticketone",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "otto virtanen",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "don ciotti",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "basilea",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "farioli",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "mikel landa",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "darderi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "sport",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "vito mancuso",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "iva zanicchi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "wolfsburg - hoffenheim",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "cecilia parodi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "istanbul başakşehir - fenerbahçe",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "superenalotto 9 maggio 2025",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "parata militare russia",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "robert redford",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "cassano inter",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "durazzo",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "vilius gaubas",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "jack draper",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "rai 2 diretta",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "giulia vecchio",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "leao",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "selvaggia lucarelli",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "camilo ugo carabelli",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "luna piena maggio 2025",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "francisco comesaña",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "lsg vs rcb",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "peshawar zalmi vs lahore qalandars",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "doom the dark ages",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "diretta serie b",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "albania",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "rosanna uomini e donne",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "joao felix",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "comesana",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "espresso macchiato feat tony effe",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "emiliana arango",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "sos fanta",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "italdesign",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "ac milan – bologne",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "play out serie b",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "ticket one",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "open roma",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "ballando con le stelle 2025",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "bologna fc 1909",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "serie a tim",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "salerno notizie",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "virtanen",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "tomori",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "brescia",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "oroscopo paolo fox",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "سيراميكا كليوباترا ضد الزمالك",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "البنك الاهلي ضد الأهرام",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "dušan lajović",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "stoccolma",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "rampini",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "james foley",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "stefano massini",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "contratto metalmeccanici",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "margot friedländer",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "errani",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "carlo massarini",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "joan baez",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lollobrigida",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "casteddu online",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "emanuela orlandi",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "ticket master",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "pierbattista pizzaballa papa",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "yoyo flow",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "de silvestri",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "wec",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "gaubas",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "agostini",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "christian pulisic",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "rosa e lacrime gigi d alessio",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "parma napoli",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "the hunt for gollum",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "cosenza",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "linda mcmahon",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "theo hernandez",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "eleonora giorgi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "festa mamma 2025",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "jamie lee curtis",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "danilovic",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "hoara borselli età",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "potapova",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "emma navarro",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "arango emiliana",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "tallon griekspoor",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "giro d italia",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "minghella",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "azarenka",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "william hill",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "maduro",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "steven seagal",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "fenerbahçe",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "vincicasa",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "val sesia",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "risultati per serie a",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "kazakistan",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "ficulle",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "acea",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "valsesia",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "arthur fils",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "assegno unico maggio 2025 date",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "fiorello",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "joão félix",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "karolina muchova",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "landa mikel",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "walker",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "daniele adani",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "südtirol news",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "krstovic",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "yuri chechi",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "tuvalu",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "bad bunny madrid",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "fiorentina betis siviglia highlights",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "rey mysterio",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "bonus cultura",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "kyle walker",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "malick thiaw",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "navarro",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "omelia papa leone oggi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "il paradiso delle signore",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "jennifer aniston",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "anastasija potapova",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "il volo",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "oroscopo oggi capricorno",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "magda linette",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "lucca udinese",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "perche the couple chiude",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "ministero della giustizia",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "ricky gervais",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "linette",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "laslo đere",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "final destination",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "corentin moutet",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "dominguez",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "reddito di libertà",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "facile ristrutturare",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "luca guerrini milan",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "rai replay",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "inter.it",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "linus",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "segundo castillo",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "chloe wallace",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "programma internazionali tennis roma 2025",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "viennari liberato",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-10 08:14:17",
  "trends_count": 218,
  "top_score": 10.95198579855773,
  "runtime_minutes": 4.097975166638692,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profezie di Oggi: \n\nLo sport domina la scena della curiosità popolare, con l’epica Serie A a guidare i nostri sguardi verso la sfida tra Milan e Bologna, un incontro che infiamma gli animi con un Discover Score di 11.0 e un crescente interesse recente. Insieme, la classifica di Serie A si erge come simbolo di una passione inesausta che continua a crescere nel cuore degli italiani. Segue l'eco del pallone nel mondo dei motori, con l’attesa per gli orari della MotoGP che raggiunge picchi elevati e rappresenta un’opportunità per chi cerchi di cavalcare l’onda della scoperta online (#21).\n\nTuttavia, prudenza chiama nell’espandersi del culto del calcio: la saturazione potrebbe presto portare a un eccesso di contenuti, soprattutto attorno a partite meno richieste, come quella tra Sampdoria e Salernitana (#9), dove competizione estrema all'affollamento nei risultati \"intitle\" potrebbe ridurre la visibilità.\n\nPer i creatori di contenuti, il consiglio divino è chiaro: abbracciate l’immediatezza e l’energia dei giochi sportivi con narrazioni vivide e veloci, ma ricordate, il mondo cambia rapidamente e le opportunità di oggi potrebbero essere già tramontate domani."
};
