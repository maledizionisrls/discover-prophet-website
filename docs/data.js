const trendData = [
  {
    "rank": 1,
    "entity": "milan - bologna",
    "discover_score": 10.753523358565992,
    "score_1h": 63.971361776738746,
    "score_4h": 47.44747899159664,
    "score_7d": 3.28698224852071,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "lazio juve",
    "discover_score": 10.236324624129466,
    "score_1h": 35.66481589713618,
    "score_4h": 17.111344537815125,
    "score_7d": 15.257396449704142,
    "extracted_entities": "Lazio - Juventus - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "open roma",
    "discover_score": 9.906108028353797,
    "score_1h": 49.994155464640556,
    "score_4h": 26.588235294117645,
    "score_7d": 21.710059171597635,
    "extracted_entities": "Open - Roma - Tennis - Torneo - ATP",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "altamura",
    "discover_score": 7.040971395240011,
    "score_1h": 5.5,
    "score_4h": 1.5483193277310925,
    "score_7d": 20.733727810650887,
    "extracted_entities": "Altamura - Città - Puglia - Pane di Altamura - Turismo",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "torino inter",
    "discover_score": 5.180714872182927,
    "score_1h": 1.695061367621274,
    "score_4h": 0.9579831932773109,
    "score_7d": 14.943786982248522,
    "extracted_entities": "Torino - Inter - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "napoli genoa",
    "discover_score": 4.604841893523619,
    "score_1h": 0.1370543541788428,
    "score_4h": 0.6449579831932774,
    "score_7d": 12.911242603550296,
    "extracted_entities": "Napoli - Genoa - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "orari motogp",
    "discover_score": 4.4676996315291175,
    "score_1h": 59.03448275862069,
    "score_4h": 24.19747899159664,
    "score_7d": 4.562130177514793,
    "extracted_entities": "MotoGP - Orari - Corse - Calendario",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "ascolti tv",
    "discover_score": 3.325854255428234,
    "score_1h": 1.1293103448275863,
    "score_4h": 1.4096638655462184,
    "score_7d": 10.251479289940828,
    "extracted_entities": "Ascolti TV - Televisione - Audience - Programmi televisivi - Dati di ascolto",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "matteo berrettini",
    "discover_score": 2.9486821023689367,
    "score_1h": 35.37068965517241,
    "score_4h": 20.82563025210084,
    "score_7d": 1.1035502958579881,
    "extracted_entities": "Matteo Berrettini - Tennis - Atleta - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "sampdoria - salernitana",
    "discover_score": 2.4316113260139245,
    "score_1h": 2.0452951490356517,
    "score_4h": 3.9327731092436977,
    "score_7d": 3.9289940828402363,
    "extracted_entities": "Sampdoria - Salernitana - Partita di calcio - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "anaconda",
    "discover_score": 2.313179240521863,
    "score_1h": 35.87931034482759,
    "score_4h": 13.819327731092436,
    "score_7d": 3.985207100591716,
    "extracted_entities": "Serpente - Rettili - Habitat - Predatori - Sud America",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "gianni vasino",
    "discover_score": 2.2674661119539037,
    "score_1h": 1.1896551724137931,
    "score_4h": 2.180672268907563,
    "score_7d": 4.381656804733728,
    "extracted_entities": "Gianni Vasino - Giornalista - Telecronista",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "palermo - frosinone",
    "discover_score": 2.1121754223417657,
    "score_1h": 0.1271186440677966,
    "score_4h": 1.1554621848739495,
    "score_7d": 4.576923076923077,
    "extracted_entities": "Palermo - Frosinone - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "nuggets - thunder",
    "discover_score": 1.9201755793311965,
    "score_1h": 0.7203389830508474,
    "score_4h": 0.9474789915966386,
    "score_7d": 5.334319526627219,
    "extracted_entities": "Denver Nuggets - Oklahoma City Thunder - NBA - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "lookman",
    "discover_score": 1.9032610861053771,
    "score_1h": 3.3251022793687905,
    "score_4h": 1.26890756302521,
    "score_7d": 5.497041420118343,
    "extracted_entities": "Lookman",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "regina coeli",
    "discover_score": 1.712650059484773,
    "score_1h": 1.749415546464056,
    "score_4h": 0.6491596638655462,
    "score_7d": 5.727810650887574,
    "extracted_entities": "Regina Coeli - Carcere - Roma - Detenzione - Storia",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "a che ora gioca sinner",
    "discover_score": 1.6545717602381145,
    "score_1h": 14.258620689655173,
    "score_4h": 4.453781512605042,
    "score_7d": 3.7426035502958577,
    "extracted_entities": "Jannik Sinner - Partita - Orario",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "festa della mamma 2025 data",
    "discover_score": 1.6058192131822397,
    "score_1h": 1.9389246054938631,
    "score_4h": 1.815126050420168,
    "score_7d": 4.653846153846154,
    "extracted_entities": "Festa della mamma - 2025 - Data",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "spezia - cremonese",
    "discover_score": 1.583698496976251,
    "score_1h": 1.3879310344827585,
    "score_4h": 0.9516806722689075,
    "score_7d": 4.076923076923077,
    "extracted_entities": "Spezia - Cremonese - Calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "cittadella - bari",
    "discover_score": 1.4641100080239347,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.058823529411764705,
    "score_7d": 3.92603550295858,
    "extracted_entities": "Cittadella - Bari - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "wordle",
    "discover_score": 1.3535680056277681,
    "score_1h": 2.3927527761542957,
    "score_4h": 1.2941176470588234,
    "score_7d": 3.92603550295858,
    "extracted_entities": "Wordle - Gioco di parole - Puzzle online",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "mantova - carrarese",
    "discover_score": 1.3277556972533668,
    "score_1h": 0.847457627118644,
    "score_4h": 2.1953781512605044,
    "score_7d": 4.103550295857988,
    "extracted_entities": "Mantova - Carrarese - Calcio - Partita - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "atalanta roma",
    "discover_score": 1.2903104671036003,
    "score_1h": 1.5689655172413792,
    "score_4h": 1.0,
    "score_7d": 4.431952662721894,
    "extracted_entities": "Atalanta - Roma - Serie A - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "juve stabia - reggiana",
    "discover_score": 1.277757731496752,
    "score_1h": 3.896551724137931,
    "score_4h": 0.8991596638655461,
    "score_7d": 4.201183431952662,
    "extracted_entities": "Juve Stabia - Reggiana - Partita di calcio - Serie C - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "kosmos 482",
    "discover_score": 1.1709711151474183,
    "score_1h": 2.043395675043834,
    "score_4h": 6.2710084033613445,
    "score_7d": 2.257396449704142,
    "extracted_entities": "Kosmos 482 - Sonda spaziale - Unione Sovietica - Esplorazione di Venere",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "como cagliari",
    "discover_score": 1.158983465158423,
    "score_1h": 2.75,
    "score_4h": 0.9978991596638656,
    "score_7d": 3.437869822485207,
    "extracted_entities": "Como - Cagliari - Calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "play off serie b",
    "discover_score": 1.1586040304472325,
    "score_1h": 0.0,
    "score_4h": 0.6491596638655461,
    "score_7d": 3.405325443786982,
    "extracted_entities": "Play off - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "mixed by erry",
    "discover_score": 1.1578517021045758,
    "score_1h": 0.41379310344827586,
    "score_4h": 1.7058823529411766,
    "score_7d": 2.8668639053254434,
    "extracted_entities": "Mixed by Erry - Film - Musica - Napoli - Anni '80",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "modena - brescia",
    "discover_score": 1.058842790844091,
    "score_1h": 3.0825540619520746,
    "score_4h": 1.3088235294117647,
    "score_7d": 2.7781065088757395,
    "extracted_entities": "Modena - Brescia - Città - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "sognando ballando con le stelle",
    "discover_score": 1.024285434236193,
    "score_1h": 2.48801870251315,
    "score_4h": 1.9201680672268908,
    "score_7d": 2.4733727810650885,
    "extracted_entities": "Ballando con le stelle - Sogni - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "pacers - cavaliers",
    "discover_score": 1.0089144743981588,
    "score_1h": 0.0,
    "score_4h": 0.5483193277310924,
    "score_7d": 3.497041420118343,
    "extracted_entities": "Pacers - Cavaliers - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "sabrina colle",
    "discover_score": 0.8532694671760422,
    "score_1h": 1.3011396843950906,
    "score_4h": 0.2668067226890756,
    "score_7d": 2.532544378698225,
    "extracted_entities": "Sabrina Colle",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "cani in aereo",
    "discover_score": 0.818536799267354,
    "score_1h": 1.7805376972530684,
    "score_4h": 0.9852941176470589,
    "score_7d": 2.609467455621302,
    "extracted_entities": "Cani - Aereo - Viaggio - Regolamenti - Trasporto animali",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "claudio lippi",
    "discover_score": 0.7932363338691608,
    "score_1h": 10.271186440677965,
    "score_4h": 4.897058823529411,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Claudio Lippi - Personaggio televisivo - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "anticipazioni amici serale",
    "discover_score": 0.7362272210454379,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6220157519074575,
    "score_7d": 2.230769230769231,
    "extracted_entities": "Anticipazioni - Amici - Serale - Programma TV - Maria De Filippi",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "cosenza - cesena",
    "discover_score": 0.6971564353186611,
    "score_1h": 1.092051431911163,
    "score_4h": 1.3508403361344539,
    "score_7d": 2.0680473372781067,
    "extracted_entities": "Cosenza - Cesena - Calcio - Partita - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "beccalossi",
    "discover_score": 0.5081105315342846,
    "score_1h": 9.559322033898304,
    "score_4h": 3.8760504201680672,
    "score_7d": 0.40828402366863903,
    "extracted_entities": "Evaristo Beccalossi - Calcio - Brescia - Inter - Centrocampista",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "rublev",
    "discover_score": 0.4469360574860776,
    "score_1h": 4.052893045002922,
    "score_4h": 1.6176470588235294,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "Andrey Rublev - Tennis - ATP Tour",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "valencia - getafe",
    "discover_score": 0.3728986010353136,
    "score_1h": 13.206750438340153,
    "score_4h": 3.745798319327731,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Valencia - Getafe - Calcio - Partita - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "peyton stearns",
    "discover_score": 0.31613232188858065,
    "score_1h": 1.0084745762711864,
    "score_4h": 0.4159663865546218,
    "score_7d": 0.7485207100591715,
    "extracted_entities": "Peyton Stearns - Tennis - Giocatrice",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "marozsan",
    "discover_score": 0.3064768996296395,
    "score_1h": 2.0677966101694913,
    "score_4h": 0.5147058823529411,
    "score_7d": 0.7603550295857988,
    "extracted_entities": "Calcio - Ferencváros - Bundesliga - Ungheria - Attaccante",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "sir alex ferguson",
    "discover_score": 0.2299183398714362,
    "score_1h": 0.0,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.5266272189349113,
    "extracted_entities": "Sir Alex Ferguson - Allenatore di calcio - Manchester United - Premier League - Scozia",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "oroscopo ariete 10 maggio",
    "discover_score": 0.20263475537336736,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3529411764705882,
    "score_7d": 0.3136094674556213,
    "extracted_entities": "Oroscopo - Ariete - 10 maggio",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "fábián marozsán",
    "discover_score": 0.20148755512900474,
    "score_1h": 2.4491525423728815,
    "score_4h": 0.8445378151260503,
    "score_7d": 0.1804733727810651,
    "extracted_entities": "Fábián Marozsán - Tennis - Ungheria",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "fearnley tennis ranking",
    "discover_score": 0.18514666310618913,
    "score_1h": 2.760666277030976,
    "score_4h": 0.38445378151260506,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Fearnley - Tennis - Ranking",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "sebastian ofner",
    "discover_score": 0.1769454081577982,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.18907563025210083,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Sebastian Ofner - Tennis - Giocatore - Austria",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "bono vox",
    "discover_score": 0.16609675095142712,
    "score_1h": 3.163793103448276,
    "score_4h": 0.5483193277310925,
    "score_7d": 0.1301775147928994,
    "extracted_entities": "Bono Vox - U2 - Musica - Cantante",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "kay rush",
    "discover_score": 0.165968711809663,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.16596638655462184,
    "score_7d": 0.23668639053254437,
    "extracted_entities": "Kay Rush",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "shaquille o'neal",
    "discover_score": 0.14013084026488684,
    "score_1h": 0.0,
    "score_4h": 0.14705882352941177,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Shaquille O'Neal - NBA - Basket - Giocatore di pallacanestro - Los Angeles Lakers",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "tomáš macháč",
    "discover_score": 0.12420277398956318,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.29313315284272706,
    "score_7d": 0.038461538461538464,
    "extracted_entities": "Tomáš Macháč - Tennis - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "azalea della ricerca 2025",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "ons jabeur",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "wec",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "american sniper",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "meteo biella",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "sassuolo catanzaro",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "bayesian",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "sara bonifacio",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "tusk",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "hoara borselli",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "classifica serie a",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "xabi alonso real madrid",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "montemurlo",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "alexander zverev",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "generale conserva aeronautica militare",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "finale coppa italia",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "diretta",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "giro d'italia oggi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "pisa sudtirol",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "xatar",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "eurovision 2025",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "annalisa maschio",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "las palmas - rayo vallecano",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "victoria mboko",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "milan news",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "dazn",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "milan stasera",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "victor osimhen",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "iginio massari",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "don ciotti",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "farioli",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "eugenio finardi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "holger rune",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "gianna nannini panorama",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "mikel landa",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "habeas corpus",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "darderi",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "cecilia parodi",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "zubimendi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "rune",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "istanbul başakşehir - fenerbahçe",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "wolfsburg - hoffenheim",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "iva zanicchi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "crudele salmo",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "superenalotto 9 maggio 2025",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "parata militare russia",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "vilius gaubas",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "meteo trento",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "jack draper",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "rai 2 diretta",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "lsg vs rcb",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "peshawar zalmi vs lahore qalandars",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "leao",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "francisco comesaña",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "albania",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "san cataldo",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "rosanna uomini e donne",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "luna piena maggio 2025",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "diretta serie b",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "emiliana arango",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "davide fontolan",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "espresso macchiato feat tony effe",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "doom the dark ages",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "sos fanta",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "matilda de angelis",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "ac milan – bologne",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "riccardo orsolini",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "vito mancuso",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "virtanen",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "play out serie b",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "mary falconieri",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "alessandra tripoli",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "serie a tim",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "سيراميكا كليوباترا ضد الزمالك",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "tomori",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "البنك الاهلي ضد الأهرام",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "stoccolma",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "contratto metalmeccanici",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "brescia",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "rampini",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "margot friedländer",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "stefano massini",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "lorenzo musetti",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "emma raducanu",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "francesca bosio",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "pierbattista pizzaballa papa",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "carlo massarini",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "fratelli di crozza",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "joan baez",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "cassano inter",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "lollobrigida",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "emanuela orlandi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "de silvestri",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "gaubas",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "parma napoli",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "rosa e lacrime gigi d alessio",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "the hunt for gollum",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "christian pulisic",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "agostini",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "linda mcmahon",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "danilovic",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "totti",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "theo hernandez",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "robert redford",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "arango emiliana",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "emma navarro",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "diretta rai 2",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "jamie lee curtis",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "eleonora giorgi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "giro d italia",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "minghella",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "steven seagal",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "fenerbahçe",
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
    "entity": "maduro",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "vincicasa",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "azarenka",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "risultati per serie a",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "ficulle",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "valsesia",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "acea",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "kazakistan",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "fiorello",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "jhon lucumí",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "jiang xinyu",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "karolina muchova",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "william hill",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "landa mikel",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "daniele adani",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "tuvalu",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "krstovic",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "walker",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "yuri chechi",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "rey mysterio",
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
    "entity": "kyle walker",
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
    "entity": "malick thiaw",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "streaming calcio",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "omelia papa leone oggi",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "il paradiso delle signore",
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
    "entity": "jennifer aniston",
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
    "entity": "südtirol news",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "massimiliano allegri",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "laslo đere",
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
    "entity": "corentin moutet",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "facile ristrutturare",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "dominguez",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "rai replay",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "segundo castillo",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "chloe wallace",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "programma internazionali tennis roma 2025",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-10 11:42:06",
  "trends_count": 211,
  "top_score": 10.753523358565992,
  "runtime_minutes": 4.3523890217145285,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le stelle dei campi sportivi brillano oggi più che mai, con il calcio che domina la scena. Le partite di Serie A e B risuonano tra i sussurri di tifosi e appassionati: Milan-Bologna e Lazio-Juventus guidano l'epico torneo. Nel firmamento tennistico, l'Open di Roma richiama l'attenzione dei curiosi verso i miglioramenti d'interesse rapido. Tuttavia, è il vento fresco del MotoGP a sferzare con forza, con gli orari delle gare (#7) che rivelano un'occasione preziosa per contenuti su Google Discover grazie al crescente interesse e alla saturazione moderata.\n\nIn questi tempi prodighi di eventi, coloro che creano contenuti si avvicinino con cautela alle ombre della saturazione, come nel caso delle gare di Torino-Inter (#5), dove l'elevata competitività può offuscare i frutti giornalistici. La chiave è la consapevolezza dei venti forti di competizione che soffiano nei meandri dell'informazione troppo popolati.\n\nSia la curiosità a guidarvi verso nuove direzioni, abbracciando la diversità degli argomenti e sfruttando i tesori nascosti nelle nicchie poco esplorate, per navigare con maestria negli oceani di Discover."
};
