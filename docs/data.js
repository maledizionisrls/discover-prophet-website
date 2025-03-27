const trendData = [
  {
    "rank": 5,
    "entity": "amsterdam",
    "discover_score": 21.975893842376223,
    "score_1h": 43.91379310344828,
    "score_4h": 12.53781512605042,
    "score_7d": 25.837700760777686
  },
  {
    "rank": 18,
    "entity": "cinese",
    "discover_score": 15.89332407371687,
    "score_1h": 14.663793103448276,
    "score_4h": 7.689075630252101,
    "score_7d": 38.107847280924204
  },
  {
    "rank": 1,
    "entity": "kit sopravvivenza guerra europa",
    "discover_score": 14.09504303081629,
    "score_1h": 13.922413793103448,
    "score_4h": 3.808823529411765,
    "score_7d": 4.961115807269653
  },
  {
    "rank": 10,
    "entity": "fantozzi",
    "discover_score": 6.234691018048339,
    "score_1h": 7.094827586206897,
    "score_4h": 2.0252100840336134,
    "score_7d": 11.924926035502958
  },
  {
    "rank": 2,
    "entity": "jakub men\u0161\u00edk",
    "discover_score": 5.976481167663035,
    "score_1h": 13.03448275862069,
    "score_4h": 3.245798319327731,
    "score_7d": 2.3200373344604115
  },
  {
    "rank": 15,
    "entity": "fils",
    "discover_score": 4.443128607198852,
    "score_1h": 28.413793103448278,
    "score_4h": 6.644957983193277,
    "score_7d": 4.674010284587208
  },
  {
    "rank": 3,
    "entity": "srh vs lsg",
    "discover_score": 4.188103824121418,
    "score_1h": 7.724137931034483,
    "score_4h": 3.7983193277310923,
    "score_7d": 1.0076253874330798
  },
  {
    "rank": 17,
    "entity": "sciopero 28 marzo 2025",
    "discover_score": 3.532331961166382,
    "score_1h": 0.0,
    "score_4h": 0.3970588235294118,
    "score_7d": 8.81269371653987
  },
  {
    "rank": 31,
    "entity": "alexander zverev",
    "discover_score": 2.572182047711597,
    "score_1h": 0.0,
    "score_4h": 1.2941176470588236,
    "score_7d": 6.620386024232179
  },
  {
    "rank": 48,
    "entity": "copenaghen",
    "discover_score": 2.17364867959527,
    "score_1h": 0.8017241379310345,
    "score_4h": 1.7815126050420167,
    "score_7d": 5.677937447168217
  },
  {
    "rank": 12,
    "entity": "egitto sottomarino turistico affondato",
    "discover_score": 2.051729091886071,
    "score_1h": 0.3448275862068966,
    "score_4h": 3.4243697478991595,
    "score_7d": 0.8382114680191604
  },
  {
    "rank": 41,
    "entity": "george clooney",
    "discover_score": 2.010165172208921,
    "score_1h": 2.094827586206897,
    "score_4h": 1.672268907563025,
    "score_7d": 4.841064384333615
  },
  {
    "rank": 4,
    "entity": "diego de vivo",
    "discover_score": 1.9819533200619863,
    "score_1h": 0.0,
    "score_4h": 0.48109243697478987,
    "score_7d": 1.7087383770076077
  },
  {
    "rank": 27,
    "entity": "spinea",
    "discover_score": 1.9627628513175794,
    "score_1h": 1.3448275862068966,
    "score_4h": 2.05672268907563,
    "score_7d": 3.4836045364891515
  },
  {
    "rank": 22,
    "entity": "le assaggiatrici film",
    "discover_score": 1.8072560108532423,
    "score_1h": 0.0,
    "score_4h": 0.45378151260504207,
    "score_7d": 4.212859256128487
  },
  {
    "rank": 13,
    "entity": "arthur fils",
    "discover_score": 1.7904819828814702,
    "score_1h": 1.7327586206896552,
    "score_4h": 0.14915966386554622,
    "score_7d": 3.5760249366018595
  },
  {
    "rank": 37,
    "entity": "patty pravo",
    "discover_score": 1.7582060930068257,
    "score_1h": 0.0,
    "score_4h": 1.6302521008403361,
    "score_7d": 3.765374049027895
  },
  {
    "rank": 9,
    "entity": "nintendo direct",
    "discover_score": 1.7048027147250333,
    "score_1h": 1.6293103448275863,
    "score_4h": 1.9138655462184873,
    "score_7d": 1.0115877712031558
  },
  {
    "rank": 33,
    "entity": "avengers doomsday cast",
    "discover_score": 1.6089664712652745,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.13445378151260504,
    "score_7d": 4.539342068188223
  },
  {
    "rank": 21,
    "entity": "avanti un altro by night",
    "discover_score": 1.5475417038901376,
    "score_1h": 1.0689655172413794,
    "score_4h": 0.48739495798319327,
    "score_7d": 3.2961221470836857
  },
  {
    "rank": 46,
    "entity": "biglietti concerto lady gaga milano 2025",
    "discover_score": 1.5159501135762676,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.1092436974789916,
    "score_7d": 4.7273879966187655
  },
  {
    "rank": 35,
    "entity": "berrettini fritz",
    "discover_score": 1.2574093751152413,
    "score_1h": 0.04310344827586207,
    "score_4h": 0.18487394957983194,
    "score_7d": 3.321076359537898
  },
  {
    "rank": 40,
    "entity": "pacers - lakers",
    "discover_score": 1.2225930438870218,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.5401873767258385
  },
  {
    "rank": 28,
    "entity": "blue bloods",
    "discover_score": 1.1155277213286667,
    "score_1h": 2.344827586206897,
    "score_4h": 0.8529411764705883,
    "score_7d": 1.9033706677937445
  },
  {
    "rank": 25,
    "entity": "ameba",
    "discover_score": 1.106899235051704,
    "score_1h": 1.853448275862069,
    "score_4h": 0.4852941176470589,
    "score_7d": 2.1210904480135246
  },
  {
    "rank": 14,
    "entity": "sara scaperrotta",
    "discover_score": 1.0727142013312836,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.11764705882352941,
    "score_7d": 1.78731684981685
  },
  {
    "rank": 19,
    "entity": "ginnastica ritmica emanuela maccarani",
    "discover_score": 1.0467649047176164,
    "score_1h": 0.0,
    "score_4h": 0.3130252100840336,
    "score_7d": 1.8228021978021978
  },
  {
    "rank": 26,
    "entity": "alan cumming",
    "discover_score": 1.0067147454620662,
    "score_1h": 0.0,
    "score_4h": 0.5819327731092437,
    "score_7d": 1.7360347985347984
  },
  {
    "rank": 8,
    "entity": "cindyana santangelo",
    "discover_score": 0.9342665632971625,
    "score_1h": 0.0,
    "score_4h": 0.5630252100840336,
    "score_7d": 0.4897682445759369
  },
  {
    "rank": 45,
    "entity": "polizia postale",
    "discover_score": 0.9336302143015177,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.3644512538743307
  },
  {
    "rank": 47,
    "entity": "jo squillo",
    "discover_score": 0.9251543159042059,
    "score_1h": 0.9310344827586208,
    "score_4h": 1.4894957983193278,
    "score_7d": 1.0919625246548323
  },
  {
    "rank": 6,
    "entity": "don samuele marelli",
    "discover_score": 0.9037725969490659,
    "score_1h": 2.836206896551724,
    "score_4h": 0.4054621848739496,
    "score_7d": 0.3531980839673147
  },
  {
    "rank": 11,
    "entity": "kristi noem",
    "discover_score": 0.8937259114144707,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.8382352941176471,
    "score_7d": 0.38259016624401243
  },
  {
    "rank": 7,
    "entity": "evelina sgarbi",
    "discover_score": 0.8213887119794485,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3697478991596639,
    "score_7d": 0.33828191039729505
  },
  {
    "rank": 49,
    "entity": "alberto fantin",
    "discover_score": 0.7894819327448842,
    "score_1h": 0.0,
    "score_4h": 1.0126050420168067,
    "score_7d": 1.0758664412510566
  },
  {
    "rank": 39,
    "entity": "conferenza stampa tudor",
    "discover_score": 0.7750566038492482,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.2184873949579832,
    "score_7d": 1.6406029867568328
  },
  {
    "rank": 30,
    "entity": "carlo cracco",
    "discover_score": 0.7624204958846543,
    "score_1h": 0.0,
    "score_4h": 0.5756302521008403,
    "score_7d": 1.0425119752042828
  },
  {
    "rank": 38,
    "entity": "playstation plus giochi mensili",
    "discover_score": 0.701619932616023,
    "score_1h": 0.0,
    "score_4h": 0.615546218487395,
    "score_7d": 0.9548816568047337
  },
  {
    "rank": 20,
    "entity": "mare fuori sesta stagione",
    "discover_score": 0.6663806801089479,
    "score_1h": 0.6293103448275862,
    "score_4h": 0.39285714285714285,
    "score_7d": 0.6359537897999437
  },
  {
    "rank": 34,
    "entity": "minority report",
    "discover_score": 0.665210010647925,
    "score_1h": 2.4913793103448274,
    "score_4h": 0.15126050420168066,
    "score_7d": 1.2137926176387714
  },
  {
    "rank": 24,
    "entity": "oliver kragl",
    "discover_score": 0.6392445409878116,
    "score_1h": 0.0,
    "score_4h": 0.09663865546218488,
    "score_7d": 0.9610101437024514
  },
  {
    "rank": 29,
    "entity": "dazi trump auto",
    "discover_score": 0.6237087827374135,
    "score_1h": 0.0,
    "score_4h": 0.31512605042016806,
    "score_7d": 0.806230628346013
  },
  {
    "rank": 43,
    "entity": "lol 5 cast",
    "discover_score": 0.5534135608773261,
    "score_1h": 0.0,
    "score_4h": 0.25210084033613445,
    "score_7d": 0.8421210200056354
  },
  {
    "rank": 44,
    "entity": "luciano darderi",
    "discover_score": 0.5366075776272894,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 0.8872217526063679
  },
  {
    "rank": 16,
    "entity": "sigfrido ranucci",
    "discover_score": 0.518895535350709,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.3377888137503522
  },
  {
    "rank": 23,
    "entity": "anticipazioni amici serale 29 marzo",
    "discover_score": 0.5049000947643018,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.28991596638655465,
    "score_7d": 0.3146837137221753
  },
  {
    "rank": 50,
    "entity": "tomodachi life",
    "discover_score": 0.45518782094480315,
    "score_1h": 0.0,
    "score_4h": 0.5672268907563025,
    "score_7d": 0.22249225133840517
  },
  {
    "rank": 36,
    "entity": "paolini-sabalenka",
    "discover_score": 0.3974091245772147,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.31932773109243695,
    "score_7d": 0.1156839954916878
  },
  {
    "rank": 32,
    "entity": "tonali milan",
    "discover_score": 0.37053199758308536,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.06092436974789916,
    "score_7d": 0.23464356156663851
  },
  {
    "rank": 42,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.3028344958961974,
    "score_1h": 0.0,
    "score_4h": 0.04411764705882353,
    "score_7d": 0.09490349394195549
  },
  {
    "rank": 51,
    "entity": "franco alfieri",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "macron",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "elisa di francisca",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "hanoi",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "film garrone io capitano trama",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "favignana",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "massimo ghirotto",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "oroscopo paolo fox scorpione",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "liposuzione",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "matteo lancini",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "sucic",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "linkem",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "grigor dimitrov",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "ariston russia putin",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "guardiola",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "peppe quintale",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "ormea",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "buon giovedi 27 marzo",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "meteo roma",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "nintendo today",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "gerard depardieu",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "giulianova barletta",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "ettore andenna",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "nuggets - bucks",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "dimitrov",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "virginia raffaele",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "aniket verma",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "stellantis azioni",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "rovigo",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "viviana stucchi",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "senegal",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "djokovic",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "parapendio",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "meteo bari",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "lucrezia lando",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "suns - celtics",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "stefania cappa",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "emma raducanu",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "openai",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "abhishek sharma",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "aldo cazzullo",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "ostia",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "video pullman torino",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "carlo acutis santo",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "rosy bindi",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "cambio orario domenica",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "knicks - clippers",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "lampedusa",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "csm",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "sandra marchegiano",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "roberta uomini e donne",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "groenlandia",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "polizza catastrofale",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "taremi",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "meteo roma oggi",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "conte",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "daspo",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "bianca censori",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "nonostante film",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "ivrea",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "protezione civile calabria",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "libia",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "serena dandini",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "sabrina carpenter milano",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "scarlett johansson",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "tripoli",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "francisco cer\u00fandolo",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "daredevil born again",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "walter siti",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "free speech",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "robert redford",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "lilli gruber",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "keira knightley",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "africa",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "gian piero gasperini",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "michele placido",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "piersilvio berlusconi",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "sindbad",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "settimio todisco",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "car parts",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "\u062f\u0639\u0627\u0621 \u0644\u064a\u0644\u0629 \u0627\u0644\u0642\u062f\u0631",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "dakar",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "olivia wilde",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "meteo pescara",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "sixers - wizards",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "isabella tovaglieri",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "gran turismo",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "tenoch huerta mejia",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "delivery",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "caduta gerry scotti striscia",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "survivor",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "the residence",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "virtus bologna",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "lottomatica",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "lol 2025",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "cingolani",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "solar companies",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "myrta merlino",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "saratoga water",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "5g",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "mestre",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "lawson",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "don mattia ferrari",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "trani",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "ponte morandi",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "tropea",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "rumeysa gelgi",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "giorgia cardinaletti",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "guerra ucraina russia news",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "leonardo",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "bonnie blue",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "bolivia",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "superlega",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "niger",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "costanza fiction",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "bolsonaro",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "steers",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "speech",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "regioni italiane",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "nets - raptors",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "swat",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "mediterranean",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "we",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "coffee",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "maria esposito",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "kevin costner",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "malta",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "gaeta",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "panera bread",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "sardone",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "cristina d'avena",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "lebron james",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "sinner oggi",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "subway",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "omicidio marta russo",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "tommaso mare fuori",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "mali",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "lecce prima",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "teleregione",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "lakers",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "swiatek oggi",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "infocilento",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "rovato vertovese",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "stile tv",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "affari tuoi puntata di stasera",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "carlo nordio",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "f1 25 ps4",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "giulianova calcio",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "vinitaly 2025",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "dairy queen",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "giulianova",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "derthona basket",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "bus",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "treviso today",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "bariloche",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "nikita contini",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "telerama",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-27 19:01:16",
  "trends_count": 210,
  "top_score": 21.975893842376223,
  "runtime_minutes": 3.3636725703875223,
  "proxies_used": 207
};
