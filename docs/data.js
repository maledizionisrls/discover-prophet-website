const trendData = [
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 11.866262630035896,
    "score_1h": 71.38793103448276,
    "score_4h": 55.84873949579831,
    "score_7d": 3.056213017751479,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "classifica serie a",
    "discover_score": 7.70190837179068,
    "score_1h": 72.66379310344828,
    "score_4h": 44.89285714285714,
    "score_7d": 11.763313609467456,
    "extracted_entities": "Classifica - Serie A - Calcio - Campionato - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "10 maggio",
    "discover_score": 6.348832092272015,
    "score_1h": 73.13793103448276,
    "score_4h": 37.180672268907564,
    "score_7d": 8.304733727810651,
    "extracted_entities": "10 maggio - Data - Eventi - Celebrazioni",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "lazio juve",
    "discover_score": 5.747303956256934,
    "score_1h": 2.836206896551724,
    "score_4h": 0.7773109243697478,
    "score_7d": 14.840236686390533,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "meteo trento",
    "discover_score": 5.4927398127920855,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.6365546218487395,
    "score_7d": 16.50887573964497,
    "extracted_entities": "Meteo - Trento - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "wordle",
    "discover_score": 5.4674760139988114,
    "score_1h": 8.964932787843367,
    "score_4h": 6.466386554621849,
    "score_7d": 13.41715976331361,
    "extracted_entities": "Wordle - Gioco di parole - Puzzle online - New York Times",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "sampdoria - salernitana",
    "discover_score": 4.43788468571478,
    "score_1h": 47.1604324956166,
    "score_4h": 16.34873949579832,
    "score_7d": 3.682410538179769,
    "extracted_entities": "Sampdoria - Salernitana - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "lazio juventus",
    "discover_score": 3.5598879119147453,
    "score_1h": 2.336206896551724,
    "score_4h": 0.058823529411764705,
    "score_7d": 10.775147928994084,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "nuggets - thunder",
    "discover_score": 3.098982743624103,
    "score_1h": 16.620689655172413,
    "score_4h": 9.563025210084035,
    "score_7d": 5.305702310510003,
    "extracted_entities": "Denver Nuggets - Oklahoma City Thunder - NBA - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "torino inter",
    "discover_score": 2.725124622552656,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.14285714285714285,
    "score_7d": 9.414201183431953,
    "extracted_entities": "Torino - Inter - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "meteo biella",
    "discover_score": 2.669505747385575,
    "score_1h": 1.2758620689655173,
    "score_4h": 0.6869747899159664,
    "score_7d": 8.757396449704142,
    "extracted_entities": "Meteo - Biella - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "palermo - frosinone",
    "discover_score": 2.286724862253849,
    "score_1h": 5.525862068965518,
    "score_4h": 1.8172268907563023,
    "score_7d": 4.189349112426036,
    "extracted_entities": "Palermo - Frosinone - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "festa della mamma 2025 data",
    "discover_score": 2.0251310133892355,
    "score_1h": 0.9568965517241379,
    "score_4h": 0.09453781512605042,
    "score_7d": 6.683431952662723,
    "extracted_entities": "Festa della mamma - 2025 - Data",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "francis prevost papa leone xiv",
    "discover_score": 1.9929968093028105,
    "score_1h": 1.1982758620689655,
    "score_4h": 0.7478991596638656,
    "score_7d": 5.5816955480417025,
    "extracted_entities": "Francis Prevost - Papa Leone XIV",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "napoli genoa",
    "discover_score": 1.609197347189757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 5.6420118343195265,
    "extracted_entities": "Napoli - Genoa - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "juve stabia - reggiana",
    "discover_score": 1.6032973071010101,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.43067226890756305,
    "score_7d": 4.076923076923077,
    "extracted_entities": "Juve Stabia - Reggiana - Partita di calcio - Serie C - Campionato italiano",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "mantova - carrarese",
    "discover_score": 1.3731915210849137,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.1638655462184874,
    "score_7d": 3.742603550295858,
    "extracted_entities": "Mantova - Carrarese - Calcio - Partita - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "sassuolo catanzaro",
    "discover_score": 1.363677780449825,
    "score_1h": 7.069257744009351,
    "score_4h": 2.0357142857142856,
    "score_7d": 3.7197978303747536,
    "extracted_entities": "Sassuolo - Catanzaro - Calcio - Serie A - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "modena - brescia",
    "discover_score": 1.3616705329884558,
    "score_1h": 2.3448275862068964,
    "score_4h": 0.4600840336134454,
    "score_7d": 3.3757396449704142,
    "extracted_entities": "Modena - Brescia - Città - Italia - Viaggio",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "kosmos 482",
    "discover_score": 1.2676155433446599,
    "score_1h": 15.922413793103448,
    "score_4h": 2.939075630252101,
    "score_7d": 3.5273844744998595,
    "extracted_entities": "Kosmos 482 - Sonda spaziale - Unione Sovietica - Esplorazione di Venere",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "pacers - cavaliers",
    "discover_score": 1.1486505062176113,
    "score_1h": 0.9913793103448276,
    "score_4h": 0.3340336134453782,
    "score_7d": 3.387573964497041,
    "extracted_entities": "Pacers - Cavaliers - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "gianni vasino",
    "discover_score": 1.1463008109117572,
    "score_1h": 4.879310344827585,
    "score_4h": 0.796218487394958,
    "score_7d": 2.4201183431952664,
    "extracted_entities": "Gianni Vasino - Giornalista - Telecronista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "francesco passaro",
    "discover_score": 1.0755144376834,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.09243697478991597,
    "score_7d": 3.6834319526627217,
    "extracted_entities": "Francesco Passaro",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "cittadella - bari",
    "discover_score": 1.0259973829948048,
    "score_1h": 5.5344827586206895,
    "score_4h": 0.4180672268907563,
    "score_7d": 2.4585798816568047,
    "extracted_entities": "Cittadella - Bari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.9299461605829349,
    "score_1h": 0.0,
    "score_4h": 0.06722689075630252,
    "score_7d": 3.2011834319526624,
    "extracted_entities": "Estrazione - Eurojackpot - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "mixed by erry",
    "discover_score": 0.9003897963925754,
    "score_1h": 2.9495908825248396,
    "score_4h": 0.4957983193277311,
    "score_7d": 2.5236686390532546,
    "extracted_entities": "Mixed by Erry - Film - Musica - Napoli - Anni '80",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "alexander zverev",
    "discover_score": 0.8627808830819826,
    "score_1h": 0.0,
    "score_4h": 0.5966386554621849,
    "score_7d": 2.946745562130178,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Giocatore di tennis - Germania",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "cosenza - cesena",
    "discover_score": 0.8528052398066606,
    "score_1h": 2.4310344827586206,
    "score_4h": 0.6890756302521008,
    "score_7d": 2.2159763313609466,
    "extracted_entities": "Cosenza - Cesena - Calcio - Partita - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "orari motogp",
    "discover_score": 0.851972111080919,
    "score_1h": 7.224137931034482,
    "score_4h": 1.7226890756302522,
    "score_7d": 2.3106508875739644,
    "extracted_entities": "MotoGP - Orari - Corse - Calendario",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "bayesian",
    "discover_score": 0.7630729501314865,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.0,
    "score_7d": 2.363905325443787,
    "extracted_entities": "Bayesian - Statistica - Probabilità - Inferenza - Modelli",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "spezia - cremonese",
    "discover_score": 0.725126001813146,
    "score_1h": 3.9655172413793105,
    "score_4h": 0.7668067226890756,
    "score_7d": 1.5175401521555367,
    "extracted_entities": "Spezia - Cremonese - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "papa leone xiv scandalo",
    "discover_score": 0.717657986872405,
    "score_1h": 0.0,
    "score_4h": 0.3277310924369748,
    "score_7d": 2.162721893491124,
    "extracted_entities": "Papa Leone XIV - Scandalo",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "a che ora gioca sinner",
    "discover_score": 0.6721132107273946,
    "score_1h": 3.7241379310344827,
    "score_4h": 0.8046218487394957,
    "score_7d": 2.1420118343195265,
    "extracted_entities": "Jannik Sinner - Partita - Orario",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "carlos alcaraz",
    "discover_score": 0.6278982689160851,
    "score_1h": 1.2586206896551724,
    "score_4h": 0.058823529411764705,
    "score_7d": 2.118343195266272,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "basilea",
    "discover_score": 0.5906558049454139,
    "score_1h": 0.0,
    "score_4h": 0.029411764705882353,
    "score_7d": 2.0525676246830096,
    "extracted_entities": "Basilea - Svizzera - Città - Turismo - Arte",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "play off serie b",
    "discover_score": 0.49318740262100536,
    "score_1h": 1.9051724137931034,
    "score_4h": 0.06302521008403361,
    "score_7d": 1.397840941110172,
    "extracted_entities": "Play off - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "sognando ballando con le stelle",
    "discover_score": 0.4581040682488272,
    "score_1h": 1.043103448275862,
    "score_4h": 0.38235294117647056,
    "score_7d": 1.1035502958579881,
    "extracted_entities": "Ballando con le stelle - Sogni - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "nomi maglia milan",
    "discover_score": 0.4471699980541867,
    "score_1h": 0.0,
    "score_4h": 0.296218487394958,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Nomi - Maglia - Milan",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "sabrina colle",
    "discover_score": 0.396057000070901,
    "score_1h": 2.4310344827586206,
    "score_4h": 0.7394957983193278,
    "score_7d": 0.8195266272189349,
    "extracted_entities": "Sabrina Colle",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "habeas corpus",
    "discover_score": 0.30695309386642,
    "score_1h": 0.0,
    "score_4h": 0.7163865546218487,
    "score_7d": 0.6500422654268808,
    "extracted_entities": "Habeas Corpus - Diritto - Libertà personale - Giurisprudenza - Legge",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "generale conserva aeronautica militare",
    "discover_score": 0.3037513882763155,
    "score_1h": 0.0,
    "score_4h": 0.3697478991596639,
    "score_7d": 0.8062130177514792,
    "extracted_entities": "Generale - Conserva - Aeronautica Militare",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "santiago gimenez",
    "discover_score": 0.25753382625953947,
    "score_1h": 0.0,
    "score_4h": 0.6365546218487395,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "Santiago Giménez - Calciatore - Feyenoord - Messico - Eredivisie",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "superenalotto 9 maggio 2025",
    "discover_score": 0.23394093900295249,
    "score_1h": 0.0,
    "score_4h": 0.3172268907563025,
    "score_7d": 0.49112426035502954,
    "extracted_entities": "Superenalotto - 9 maggio 2025 - Estrazione - Lotteria - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "gianna nannini panorama",
    "discover_score": 0.22654058884426329,
    "score_1h": 0.22413793103448276,
    "score_4h": 0.7037815126050421,
    "score_7d": 0.3685721329952099,
    "extracted_entities": "Gianna Nannini - Panorama",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "anticipazioni amici serale",
    "discover_score": 0.2249449059004533,
    "score_1h": 0.0,
    "score_4h": 0.48441510495411555,
    "score_7d": 0.3536911806142576,
    "extracted_entities": "Anticipazioni - Amici - Serale - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "eugenio finardi",
    "discover_score": 0.20797157990978676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Eugenio Finardi - Cantante - Musica Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "cani in aereo",
    "discover_score": 0.20505868478358028,
    "score_1h": 2.3017241379310347,
    "score_4h": 0.5163935867233923,
    "score_7d": 0.33136094674556216,
    "extracted_entities": "Cani - Aereo - Viaggio - Regolamenti - Trasporto animali",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "xabi alonso real madrid",
    "discover_score": 0.13164689983868544,
    "score_1h": 0.0,
    "score_4h": 0.42016806722689076,
    "score_7d": 0.04437869822485207,
    "extracted_entities": "Xabi Alonso - Real Madrid - Calciatore - Club di calcio - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "vito mancuso",
    "discover_score": 0.12644537034652892,
    "score_1h": 1.5258620689655171,
    "score_4h": 0.28361344537815125,
    "score_7d": 0.026627218934911243,
    "extracted_entities": "Vito Mancuso - Teologia - Filosofia - Spiritualità - Saggistica",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "tusk",
    "discover_score": 0.10808716419156113,
    "score_1h": 1.2758620689655171,
    "score_4h": 0.03361344537815126,
    "score_7d": 0.005917159763313609,
    "extracted_entities": "Donald Tusk - Elezioni Polonia - Politica europea",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "lookman",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "pisa sudtirol",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "diretta",
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
    "entity": "las palmas - rayo vallecano",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "annalisa maschio",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "milan news",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "xatar",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "sampdoria oggi",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "l'ultimo giorno di gaza",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "ticketone",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "otto virtanen",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "don ciotti",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "farioli",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "luca guerrini",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "mikel landa",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "victoria mboko",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "darderi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "sport",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "iva zanicchi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "wolfsburg - hoffenheim",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "cecilia parodi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "iginio massari",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "istanbul başakşehir - fenerbahçe",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "parata militare russia",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "tirana",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "vilius gaubas",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "jack draper",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "agostini trento",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "giulia vecchio",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "rai 2 diretta",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "selvaggia lucarelli",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "coco gauff",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "leao",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "camilo ugo carabelli",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "luna piena maggio 2025",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "francisco comesaña",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "doom the dark ages",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "lsg vs rcb",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "xabi alonso",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "peshawar zalmi vs lahore qalandars",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "anaconda",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "diretta serie b",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "joao felix",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "albania",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "rosanna uomini e donne",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "oroscopo paolo fox",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "comesana",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "play out serie b",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "espresso macchiato feat tony effe",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "ac milan – bologne",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "emiliana arango",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "sos fanta",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "salerno notizie",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "casteddu online",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "italdesign",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "festa mamma 2025",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "serie a tim",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "don luigi ciotti",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "open roma",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "ticket one",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "tomori",
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
    "entity": "brescia",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "stefano massini",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "rampini",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "البنك الاهلي ضد الأهرام",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "سيراميكا كليوباترا ضد الزمالك",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "stoccolma",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "dušan lajović",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "margot friedländer",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "james foley",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "contratto metalmeccanici",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "carlo massarini",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "landa",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "joan baez",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "lollobrigida",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "emanuela orlandi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "errani",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "donovan",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "de silvestri",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "ticket master",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "pierbattista pizzaballa papa",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "wec",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "christian pulisic",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "totti",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "rosa e lacrime gigi d alessio",
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
    "entity": "parma napoli",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "linda mcmahon",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "eleonora giorgi",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "theo hernandez",
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
    "entity": "diretta rai 2",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "william hill",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "jamie lee curtis",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "hoara borselli età",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "yoyo flow",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "danilovic",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "emma navarro",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "arango emiliana",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "classifica",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "potapova",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "vanessa lacedonia",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "azarenka",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "minghella",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "giro d italia",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "tallon griekspoor",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "südtirol news",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "maduro",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "ultima puntata che dio ci aiuti",
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
    "entity": "kazakistan",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "fenerbahçe",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "vincicasa",
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
    "entity": "val sesia",
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
    "entity": "jiang xinyu",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "arthur fils",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "assegno unico maggio 2025 date",
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
    "entity": "fiorello",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "karolina muchova",
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
    "entity": "landa mikel",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "daniele adani",
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
    "entity": "varallo",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "rey mysterio",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "tuvalu",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "bad bunny madrid",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "fiorentina betis siviglia highlights",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "bonus cultura",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "fc südtirol",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "malick thiaw",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "navarro",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "omelia papa leone oggi",
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
    "entity": "il paradiso delle signore",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "anastasija potapova",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "il volo",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "oroscopo oggi capricorno",
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
    "entity": "magda linette",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "perche the couple chiude",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "ministero della giustizia",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "final destination",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "ricky gervais",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "linette",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "laslo đere",
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
    "entity": "corentin moutet",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "reddito di libertà",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "facile ristrutturare",
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
    "entity": "btp italia maggio 2025",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "inter.it",
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
    "entity": "linus",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "chloe wallace",
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
  "timestamp": "2025-05-10 07:01:18",
  "trends_count": 218,
  "top_score": 11.866262630035896,
  "runtime_minutes": 4.1995113054911295,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi annunciano i venti che soffiano dalle terre dello sport e del meteo, dominanti nel panorama delle tendenze italiane. Il calcio svela le sue trame attraverso le partite di Serie A e B come 'Milan - Bologna' e 'Sampdoria - Salernitana', e la forza delle squadre è riflessa nella domanda sulla 'classifica serie A'. Queste partite promettono uno spettacolo che risveglia passioni collettive e generano un alto potenziale per contenuti su Discover, senza essere soffocate da un'eccessiva copertura informativa.\n\nTra gli spiragli in cui il saggio investitore di contenuti potrebbe infilarsi, emerge la 'classifica serie a' (#2). Essa possiede un DScore significativo e un crescente interesse recente, mentre fluttua in un mare di copertura ancora lontano dal saturare il discorso pubblico.\n\nCon cautela, però, ci si dovrà avvicinare al tema di 'wordle' (#6), il cui DScore sembra promettente ma potrebbe rapidamente dissiparsi in un interesse effimero, come un'onda che si spegne sulla riva.\n\nNell'arte dell'elaborare contenuti, l'osservatore attento deve ponderare tra i flussi di interesse e le maree di saturazione, trovando equilibrio e novità."
};
