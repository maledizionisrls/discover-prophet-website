const trendData = [
  {
    "rank": 1,
    "entity": "barcellona - osasuna",
    "discover_score": 54.75118491418691,
    "score_1h": 40.293103448275865,
    "score_4h": 28.679881157483912,
    "score_7d": 1.5669730910115525
  },
  {
    "rank": 2,
    "entity": "novak djokovic",
    "discover_score": 37.47209640983261,
    "score_1h": 22.49137931034483,
    "score_4h": 15.762605042016807,
    "score_7d": 11.148439701324317
  },
  {
    "rank": 10,
    "entity": "amsterdam",
    "discover_score": 23.956023417663964,
    "score_1h": 7.689655172413794,
    "score_4h": 12.48109243697479,
    "score_7d": 25.961996336996336
  },
  {
    "rank": 14,
    "entity": "nintendo switch",
    "discover_score": 12.53502568930158,
    "score_1h": 5.939655172413794,
    "score_4h": 2.0420519672304067,
    "score_7d": 23.915152155536774
  },
  {
    "rank": 3,
    "entity": "minority report",
    "discover_score": 11.94134134071041,
    "score_1h": 3.1896551724137927,
    "score_4h": 9.960084033613445,
    "score_7d": 1.6009439278670048
  },
  {
    "rank": 6,
    "entity": "olimpia milano - barcellona",
    "discover_score": 8.537753546083652,
    "score_1h": 0.896551724137931,
    "score_4h": 10.411764705882353,
    "score_7d": 1.3932445759368837
  },
  {
    "rank": 17,
    "entity": "fantozzi",
    "discover_score": 7.766028246998582,
    "score_1h": 2.5517241379310347,
    "score_4h": 4.775210084033613,
    "score_7d": 9.822731755424064
  },
  {
    "rank": 5,
    "entity": "jakub men\u0161\u00edk",
    "discover_score": 5.770345920389003,
    "score_1h": 1.4051724137931034,
    "score_4h": 1.8543212263985092,
    "score_7d": 4.572802197802197
  },
  {
    "rank": 19,
    "entity": "anticipazioni amici",
    "discover_score": 4.701386198241494,
    "score_1h": 1.9482758620689655,
    "score_4h": 3.296543722091347,
    "score_7d": 5.521273598196675
  },
  {
    "rank": 39,
    "entity": "gintoneria",
    "discover_score": 4.661115055075033,
    "score_1h": 21.612068965517242,
    "score_4h": 2.8877324988572832,
    "score_7d": 8.385636799098338
  },
  {
    "rank": 13,
    "entity": "blue bloods",
    "discover_score": 4.157926483170696,
    "score_1h": 8.78448275862069,
    "score_4h": 3.577731092436975,
    "score_7d": 3.0772224570301496
  },
  {
    "rank": 16,
    "entity": "pintus",
    "discover_score": 3.6047219303610434,
    "score_1h": 19.043103448275865,
    "score_4h": 4.32469849864632,
    "score_7d": 1.969656945618484
  },
  {
    "rank": 8,
    "entity": "diego de vivo",
    "discover_score": 3.575198684897314,
    "score_1h": 1.8879310344827587,
    "score_4h": 0.5294117647058824,
    "score_7d": 4.7417054099746405
  },
  {
    "rank": 7,
    "entity": "barcelona vs osasuna",
    "discover_score": 3.0190075198364137,
    "score_1h": 5.474137931034482,
    "score_4h": 2.527310924369748,
    "score_7d": 1.0904480135249366
  },
  {
    "rank": 28,
    "entity": "berrettini fritz",
    "discover_score": 2.9792671469221483,
    "score_1h": 1.0775862068965516,
    "score_4h": 1.4096638655462184,
    "score_7d": 4.9743589743589745
  },
  {
    "rank": 29,
    "entity": "lol 2025",
    "discover_score": 2.9691983322209325,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.058823529411764705,
    "score_7d": 8.339602704987321
  },
  {
    "rank": 23,
    "entity": "valerio mastandrea",
    "discover_score": 2.7835687002405063,
    "score_1h": 0.20689655172413793,
    "score_4h": 3.2436974789915967,
    "score_7d": 2.0340236686390534
  },
  {
    "rank": 20,
    "entity": "sebastian korda",
    "discover_score": 2.6632806118266608,
    "score_1h": 1.4482758620689655,
    "score_4h": 2.5210084033613445,
    "score_7d": 2.2211010143702454
  },
  {
    "rank": 41,
    "entity": "djokovic oggi",
    "discover_score": 2.5466158903532126,
    "score_1h": 0.1206896551724138,
    "score_4h": 0.5876111951056573,
    "score_7d": 6.045946041138349
  },
  {
    "rank": 15,
    "entity": "avanti un altro by night",
    "discover_score": 2.312760350470288,
    "score_1h": 0.0,
    "score_4h": 1.0588235294117647,
    "score_7d": 2.6716152437306286
  },
  {
    "rank": 50,
    "entity": "simonetta kalfus",
    "discover_score": 2.289148864771112,
    "score_1h": 2.568965517241379,
    "score_4h": 0.8607819696916423,
    "score_7d": 5.053994082840237
  },
  {
    "rank": 12,
    "entity": "don samuele marelli",
    "discover_score": 2.0528636076717084,
    "score_1h": 0.0,
    "score_4h": 0.20588235294117646,
    "score_7d": 3.242550718512257
  },
  {
    "rank": 48,
    "entity": "antonio rossi",
    "discover_score": 1.9519452324597537,
    "score_1h": 0.9655172413793103,
    "score_4h": 1.6512605042016808,
    "score_7d": 2.796474358974359
  },
  {
    "rank": 4,
    "entity": "evelina sgarbi",
    "discover_score": 1.912767946723904,
    "score_1h": 0.3103448275862069,
    "score_4h": 0.3004201680672269,
    "score_7d": 1.1821287686672302
  },
  {
    "rank": 11,
    "entity": "cindyana santangelo",
    "discover_score": 1.8152738145380085,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.27310924369747897,
    "score_7d": 2.4240278951817413
  },
  {
    "rank": 9,
    "entity": "paolini-sabalenka",
    "discover_score": 1.6659072221511824,
    "score_1h": 0.0,
    "score_4h": 0.4873949579831933,
    "score_7d": 1.494910538179769
  },
  {
    "rank": 25,
    "entity": "sara scaperrotta",
    "discover_score": 1.3736235090671067,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.0,
    "score_7d": 3.4753979994364608
  },
  {
    "rank": 34,
    "entity": "moglie brignano",
    "discover_score": 1.3529265161251334,
    "score_1h": 0.14655172413793102,
    "score_4h": 0.42647058823529416,
    "score_7d": 2.3768491124260356
  },
  {
    "rank": 46,
    "entity": "gratteri",
    "discover_score": 1.2593397369469326,
    "score_1h": 9.629310344827585,
    "score_4h": 1.2983193277310925,
    "score_7d": 1.2675049309664694
  },
  {
    "rank": 42,
    "entity": "megan fox",
    "discover_score": 1.2357738381413839,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6239495798319328,
    "score_7d": 1.9274091293322062
  },
  {
    "rank": 27,
    "entity": "ginnastica ritmica emanuela maccarani",
    "discover_score": 1.119076916853679,
    "score_1h": 0.0,
    "score_4h": 0.35714285714285715,
    "score_7d": 1.612883910960834
  },
  {
    "rank": 22,
    "entity": "sciopero 28 marzo 2025",
    "discover_score": 1.106063051003051,
    "score_1h": 0.0,
    "score_4h": 0.686886888646672,
    "score_7d": 0.9664165962242885
  },
  {
    "rank": 38,
    "entity": "sucic",
    "discover_score": 1.0778582190541082,
    "score_1h": 0.0,
    "score_4h": 0.1869747899159664,
    "score_7d": 2.1306530008453084
  },
  {
    "rank": 36,
    "entity": "re carlo",
    "discover_score": 1.0652628229074494,
    "score_1h": 1.146551724137931,
    "score_4h": 0.4579831932773109,
    "score_7d": 1.5468970132431672
  },
  {
    "rank": 47,
    "entity": "matt damon",
    "discover_score": 1.055316220203074,
    "score_1h": 0.0,
    "score_4h": 0.12605042016806722,
    "score_7d": 2.408319244857706
  },
  {
    "rank": 18,
    "entity": "kristi noem",
    "discover_score": 1.0465359551906084,
    "score_1h": 0.0,
    "score_4h": 0.15336134453781514,
    "score_7d": 1.4556213017751478
  },
  {
    "rank": 21,
    "entity": "giovanna sannino",
    "discover_score": 0.9886968500700655,
    "score_1h": 0.0,
    "score_4h": 0.1108786610878661,
    "score_7d": 1.5329494223724993
  },
  {
    "rank": 30,
    "entity": "tommaso cassissa",
    "discover_score": 0.9854362025195096,
    "score_1h": 2.5775862068965516,
    "score_4h": 1.0437660419816461,
    "score_7d": 0.5693329106790646
  },
  {
    "rank": 37,
    "entity": "la gintoneria di davide",
    "discover_score": 0.7985741106288734,
    "score_1h": 0.0,
    "score_4h": 0.19957983193277312,
    "score_7d": 1.2132290786136941
  },
  {
    "rank": 32,
    "entity": "reacher 4",
    "discover_score": 0.7805561129401827,
    "score_1h": 0.689655172413793,
    "score_4h": 0.1323529411764706,
    "score_7d": 1.1985770639616793
  },
  {
    "rank": 24,
    "entity": "sigfrido ranucci",
    "discover_score": 0.665301070461022,
    "score_1h": 0.0,
    "score_4h": 0.2878151260504202,
    "score_7d": 0.4814560439560439
  },
  {
    "rank": 35,
    "entity": "tom selleck",
    "discover_score": 0.6450813764553984,
    "score_1h": 0.0,
    "score_4h": 0.8046218487394958,
    "score_7d": 0.15448013524936602
  },
  {
    "rank": 44,
    "entity": "claudio morici",
    "discover_score": 0.6420874736185106,
    "score_1h": 3.2413793103448274,
    "score_4h": 0.7899159663865546,
    "score_7d": 0.22899056072132995
  },
  {
    "rank": 33,
    "entity": "graduatorie concorso docenti",
    "discover_score": 0.6343507671914169,
    "score_1h": 0.75,
    "score_4h": 0.6995798319327732,
    "score_7d": 0.1812658495350803
  },
  {
    "rank": 31,
    "entity": "costanza fiction rai trama",
    "discover_score": 0.629022354452994,
    "score_1h": 1.8879310344827587,
    "score_4h": 0.6974789915966386,
    "score_7d": 0.15439208227669765
  },
  {
    "rank": 40,
    "entity": "dame sarr",
    "discover_score": 0.5788096668560532,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.6974789915966386,
    "score_7d": 0.13975767821921667
  },
  {
    "rank": 49,
    "entity": "egitto sottomarino turistico affondato",
    "discover_score": 0.5659999711172494,
    "score_1h": 0.0,
    "score_4h": 0.14915966386554622,
    "score_7d": 0.734132854325162
  },
  {
    "rank": 26,
    "entity": "barcelone \u2013 osasuna",
    "discover_score": 0.564450169297972,
    "score_1h": 0.0,
    "score_4h": 0.07563025210084033,
    "score_7d": 0.5759897154127923
  },
  {
    "rank": 43,
    "entity": "francesco oppini",
    "discover_score": 0.5273376364340019,
    "score_1h": 2.5775862068965516,
    "score_4h": 0.5315126050420168,
    "score_7d": 0.1665257819103973
  },
  {
    "rank": 45,
    "entity": "andrea pisani",
    "discover_score": 0.456478763006588,
    "score_1h": 0.7758620689655172,
    "score_4h": 0.12605042016806722,
    "score_7d": 0.3977352775429699
  },
  {
    "rank": 51,
    "entity": "adrian mutu",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "guardiola",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "alessandro rapinese",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "nintendo direct",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "sciopero treni",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "liam neeson",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "holland",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "oliver kragl",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "studio ghibli",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "stanciu",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "alexandra hildebrandt",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "adolescence serie",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "srh vs lsg",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "vladimir luxuria",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "raul cremona",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "dea suicida matera",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "cracovia",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "silver",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "mark rutte",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "george clooney",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "dazi trump auto",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "chiara appendino",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "eid al fitr 2025",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "tonali milan",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "garmin connect plus",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "romano prodi",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "pacers - lakers",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "montanari",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "pietro parolin",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "conferenza stampa tudor",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "finale grande fratello",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "reddit",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "marjorie taylor greene",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "piersilvio berlusconi",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "sunita williams",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "irene tinagli",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "franco alfieri",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "playstation plus giochi mensili",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "melania trump",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "pnrr",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "polizia postale",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "michelle affari tuoi",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "laura cremaschi",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "carpi",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "molise",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "alberto fantin",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "chieti today",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "jo squillo",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "luciano darderi",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "il turco canale 5",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "tom cruise",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "regioni italiane",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "brigitte bardot",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "spinea",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "carlo cracco",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "pio esposito",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "oroscopo paolo fox scorpione",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "borsetta",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "sarr basket",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "hurghada",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "gerry scotti",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "calenda",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "valle d'aosta",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "linkem",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "danimarca",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "ostia",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "elisa di francisca",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "film garrone io capitano trama",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "gue pequeno",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "buon giovedi 27 marzo",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "meteo roma",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "anna kalinskaya",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "cinese",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "miley cyrus",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "tajani",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "chiambretti",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "carla bruni",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "nuggets - bucks",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "ncis",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "sarkozy",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "peppe quintale",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "busto arsizio",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "patty pravo",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "bonnie blue",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "stellantis azioni",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "galeazzo bignami",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "ettore andenna",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "turchia",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "matteo lancini",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "ameba",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "suns - celtics",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "jessica pegula",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "meteo bari",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "lucrezia lando",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "better call saul",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "vittorio sgarbi figli",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "ormea",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "emma raducanu",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "groenlandia",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "rovigo",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "atp miami",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "parapendio",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "nintendo today",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "viviana stucchi",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "copenaghen",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "fermo",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "silvia toffanin",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "aniket verma",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "stefania cappa",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "cambio orario domenica",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "knicks - clippers",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "shiffrin",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "mel gibson",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "marvel avengers doomsday",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "chef rubio",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "hanoi",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "massimo ghirotto",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "rimac",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "csm",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "meteo roma oggi",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "polizza catastrofale",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "miami open 2025",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "nintendo today app",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "protezione civile calabria",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "rosy bindi",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "mara carfagna",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "bianca censori",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "quanti anni ha sabrina di uomini e donne",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "sandra marchegiano",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "clooney",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "conte",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "gerard depardieu",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "mlb",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "mondiale per club",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "roberta uomini e donne",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "walter siti",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "car parts",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "taremi",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "\u062f\u0639\u0627\u0621 \u0644\u064a\u0644\u0629 \u0627\u0644\u0642\u062f\u0631",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "michele placido",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "daspo",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "sixers - wizards",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "delivery",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "carlo acutis santo",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "sindbad",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "lottomatica",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "olivia wilde",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "5g",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "solar companies",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "settimio todisco",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "lawson",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "steers",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "bolsonaro",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "mediterranean",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "nets - raptors",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 211,
    "entity": "we",
    "discover_score": 0.18668606248878736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 212,
    "entity": "adriano sofri",
    "discover_score": 0.18652219821108676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 213,
    "entity": "coffee",
    "discover_score": 0.18635938684789813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 214,
    "entity": "lebron james",
    "discover_score": 0.18619761651459218,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 215,
    "entity": "omicidio marta russo",
    "discover_score": 0.1860368755170824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 216,
    "entity": "lakers",
    "discover_score": 0.18587715234788066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 217,
    "entity": "infocilento",
    "discover_score": 0.18571843568225221,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 218,
    "entity": "stile tv",
    "discover_score": 0.18556071437446803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 219,
    "entity": "vinitaly 2025",
    "discover_score": 0.18540397745415083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 220,
    "entity": "treviso today",
    "discover_score": 0.18524821412271236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-27 23:03:25",
  "trends_count": 220,
  "top_score": 54.75118491418691,
  "runtime_minutes": 3.440972677866618,
  "proxies_used": 207
};
