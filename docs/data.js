const trendData = [
  {
    "rank": 1,
    "entity": "myanmar",
    "discover_score": 122.44757334594212,
    "score_1h": 69.29310344827586,
    "score_4h": 39.7436974789916,
    "score_7d": 2.0355029585798814
  },
  {
    "rank": 45,
    "entity": "generali",
    "discover_score": 21.498539752129552,
    "score_1h": 62.258620689655174,
    "score_4h": 18.346638655462186,
    "score_7d": 29.93491124260355
  },
  {
    "rank": 36,
    "entity": "fritz",
    "discover_score": 18.071610740721606,
    "score_1h": 14.948275862068966,
    "score_4h": 20.634453781512605,
    "score_7d": 7.281065088757396
  },
  {
    "rank": 2,
    "entity": "barcellona - osasuna",
    "discover_score": 16.119684270784848,
    "score_1h": 1.543103448275862,
    "score_4h": 7.0777310924369745,
    "score_7d": 2.899408284023669
  },
  {
    "rank": 9,
    "entity": "amsterdam",
    "discover_score": 12.434302948643374,
    "score_1h": 27.143775569842198,
    "score_4h": 6.384453781512605,
    "score_7d": 26.87869822485207
  },
  {
    "rank": 4,
    "entity": "berrettini fritz",
    "discover_score": 8.859667826870426,
    "score_1h": 4.4916715371128,
    "score_4h": 4.983193277310924,
    "score_7d": 4.263313609467456
  },
  {
    "rank": 25,
    "entity": "ora legale 2025",
    "discover_score": 6.412991060767505,
    "score_1h": 6.543103448275861,
    "score_4h": 4.804621848739496,
    "score_7d": 22.11834319526627
  },
  {
    "rank": 6,
    "entity": "bulls - lakers",
    "discover_score": 5.1587077998191715,
    "score_1h": 0.0,
    "score_4h": 3.1680672268907566,
    "score_7d": 5.378698224852071
  },
  {
    "rank": 18,
    "entity": "meta ai",
    "discover_score": 3.364152309723366,
    "score_1h": 5.970923436586791,
    "score_4h": 2.5168067226890756,
    "score_7d": 11.659763313609467
  },
  {
    "rank": 11,
    "entity": "re carlo",
    "discover_score": 2.7870235143345026,
    "score_1h": 1.4655172413793105,
    "score_4h": 2.2983193277310923,
    "score_7d": 3.8461538461538463
  },
  {
    "rank": 3,
    "entity": "evelina sgarbi",
    "discover_score": 2.5793604671167825,
    "score_1h": 0.7931034482758621,
    "score_4h": 1.3508403361344539,
    "score_7d": 1.4763313609467454
  },
  {
    "rank": 8,
    "entity": "polizia postale",
    "discover_score": 2.4381739444564676,
    "score_1h": 6.396551724137931,
    "score_4h": 1.4579831932773109,
    "score_7d": 6.3047337278106514
  },
  {
    "rank": 7,
    "entity": "michael schumacher",
    "discover_score": 2.2093234795598273,
    "score_1h": 1.0689655172413792,
    "score_4h": 1.407563025210084,
    "score_7d": 3.727810650887574
  },
  {
    "rank": 5,
    "entity": "kristi noem",
    "discover_score": 2.074996482812976,
    "score_1h": 0.0,
    "score_4h": 1.0399159663865547,
    "score_7d": 4.020710059171598
  },
  {
    "rank": 15,
    "entity": "waltz",
    "discover_score": 1.942475217092699,
    "score_1h": 1.9741379310344827,
    "score_4h": 2.063025210084034,
    "score_7d": 2.0828402366863905
  },
  {
    "rank": 16,
    "entity": "earthquake",
    "discover_score": 1.9176851361961869,
    "score_1h": 8.887931034482758,
    "score_4h": 1.7289915966386555,
    "score_7d": 3.77810650887574
  },
  {
    "rank": 19,
    "entity": "proroga polizze catastrofali",
    "discover_score": 1.9014237212935288,
    "score_1h": 4.025862068965518,
    "score_4h": 1.5882352941176472,
    "score_7d": 6.076923076923077
  },
  {
    "rank": 32,
    "entity": "superenalotto 88 milioni",
    "discover_score": 1.6734679415280656,
    "score_1h": 7.370689655172415,
    "score_4h": 2.4495798319327733,
    "score_7d": 1.665680473372781
  },
  {
    "rank": 12,
    "entity": "previsioni meteo aprile",
    "discover_score": 1.5143706548856302,
    "score_1h": 0.5431034482758621,
    "score_4h": 1.5546218487394956,
    "score_7d": 1.3520710059171597
  },
  {
    "rank": 34,
    "entity": "anticipazioni amici",
    "discover_score": 1.3327875887811367,
    "score_1h": 2.3017241379310347,
    "score_4h": 1.2983193277310923,
    "score_7d": 5.550295857988166
  },
  {
    "rank": 14,
    "entity": "buon venerdi 28 marzo 2025",
    "discover_score": 1.2829291975785315,
    "score_1h": 0.35344827586206895,
    "score_4h": 1.315126050420168,
    "score_7d": 1.4142011834319526
  },
  {
    "rank": 24,
    "entity": "tailandia",
    "discover_score": 1.243122896908609,
    "score_1h": 3.586206896551724,
    "score_4h": 0.9978991596638656,
    "score_7d": 6.446745562130177
  },
  {
    "rank": 17,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 1.1574045217052662,
    "score_1h": 1.3793103448275863,
    "score_4h": 0.884453781512605,
    "score_7d": 4.215976331360947
  },
  {
    "rank": 10,
    "entity": "sigfrido ranucci",
    "discover_score": 0.6924475868390843,
    "score_1h": 0.2672413793103448,
    "score_4h": 0.37815126050420167,
    "score_7d": 1.1094674556213018
  },
  {
    "rank": 40,
    "entity": "fine ramadan 2025",
    "discover_score": 0.6573467753092033,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.4642857142857143,
    "score_7d": 7.1982248520710055
  },
  {
    "rank": 21,
    "entity": "martina colombari",
    "discover_score": 0.6530993168076843,
    "score_1h": 1.0628287551139683,
    "score_4h": 0.8004201680672269,
    "score_7d": 0.31360946745562135
  },
  {
    "rank": 42,
    "entity": "michele placido",
    "discover_score": 0.6333247710654055,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8403361344537814,
    "score_7d": 0.9053254437869822
  },
  {
    "rank": 28,
    "entity": "olimpia milano - barcellona",
    "discover_score": 0.5683504285649141,
    "score_1h": 0.0,
    "score_4h": 0.3970588235294118,
    "score_7d": 2.6745562130177514
  },
  {
    "rank": 33,
    "entity": "minority report",
    "discover_score": 0.5423961997078187,
    "score_1h": 0.0,
    "score_4h": 0.5987394957983193,
    "score_7d": 0.6893491124260355
  },
  {
    "rank": 26,
    "entity": "sarkozy",
    "discover_score": 0.5409339674033465,
    "score_1h": 2.3275862068965516,
    "score_4h": 0.4852941176470588,
    "score_7d": 0.8461538461538463
  },
  {
    "rank": 20,
    "entity": "jakub men\u0161\u00edk",
    "discover_score": 0.5356992230064497,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.25210084033613445,
    "score_7d": 3.494082840236686
  },
  {
    "rank": 23,
    "entity": "elisa di francisca",
    "discover_score": 0.5339951928663146,
    "score_1h": 1.9414085330216249,
    "score_4h": 0.3739495798319328,
    "score_7d": 1.3727810650887573
  },
  {
    "rank": 43,
    "entity": "bonnie blue",
    "discover_score": 0.5122435314278435,
    "score_1h": 0.0,
    "score_4h": 0.4243697478991597,
    "score_7d": 2.3579881656804735
  },
  {
    "rank": 38,
    "entity": "wizards - pacers",
    "discover_score": 0.46288065361186065,
    "score_1h": 0.0,
    "score_4h": 0.3802521008403361,
    "score_7d": 1.2928994082840237
  },
  {
    "rank": 37,
    "entity": "egitto sottomarino turistico affondato",
    "discover_score": 0.44878866366241255,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.38865546218487396,
    "score_7d": 0.8727810650887573
  },
  {
    "rank": 27,
    "entity": "mare fuori sesta stagione",
    "discover_score": 0.4313861567975627,
    "score_1h": 0.0,
    "score_4h": 0.20378151260504201,
    "score_7d": 2.1479289940828403
  },
  {
    "rank": 35,
    "entity": "sciopero metalmeccanici",
    "discover_score": 0.43018606518936536,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2647058823529412,
    "score_7d": 1.846153846153846
  },
  {
    "rank": 30,
    "entity": "studio ghibli",
    "discover_score": 0.4166907011795424,
    "score_1h": 0.0,
    "score_4h": 0.22058823529411764,
    "score_7d": 1.5946745562130178
  },
  {
    "rank": 49,
    "entity": "anna matscher",
    "discover_score": 0.4006975164823877,
    "score_1h": 0.847457627118644,
    "score_4h": 0.42016806722689076,
    "score_7d": 0.42011834319526625
  },
  {
    "rank": 13,
    "entity": "paolini-sabalenka",
    "discover_score": 0.37892318168995115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.301775147928994
  },
  {
    "rank": 22,
    "entity": "waltz mike",
    "discover_score": 0.3682866008695959,
    "score_1h": 1.2650496785505552,
    "score_4h": 0.12815126050420167,
    "score_7d": 0.23076923076923078
  },
  {
    "rank": 41,
    "entity": "eclissi solare 29 marzo 2025",
    "discover_score": 0.3475326875582274,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.5266272189349113
  },
  {
    "rank": 50,
    "entity": "nintendo direct",
    "discover_score": 0.34342478934570175,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 4.189349112426036
  },
  {
    "rank": 47,
    "entity": "valerio mastandrea",
    "discover_score": 0.33792505776533854,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 2.7751479289940826
  },
  {
    "rank": 31,
    "entity": "milik",
    "discover_score": 0.317796323044913,
    "score_1h": 0.0,
    "score_4h": 0.05042016806722689,
    "score_7d": 1.7485207100591715
  },
  {
    "rank": 46,
    "entity": "blue bloods",
    "discover_score": 0.30748344963082713,
    "score_1h": 0.0,
    "score_4h": 0.08823529411764706,
    "score_7d": 1.9556213017751478
  },
  {
    "rank": 44,
    "entity": "srh vs lsg",
    "discover_score": 0.29457760883290385,
    "score_1h": 0.0,
    "score_4h": 0.08403361344537816,
    "score_7d": 0.5591715976331362
  },
  {
    "rank": 29,
    "entity": "barcelona vs osasuna",
    "discover_score": 0.29401410379520604,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.5325443786982245
  },
  {
    "rank": 48,
    "entity": "la gintoneria di davide",
    "discover_score": 0.27956664489826105,
    "score_1h": 0.0,
    "score_4h": 0.0546218487394958,
    "score_7d": 0.8431952662721893
  },
  {
    "rank": 39,
    "entity": "avanti un altro by night",
    "discover_score": 0.2710850306818168,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.5147928994082838
  },
  {
    "rank": 51,
    "entity": "magic - mavericks",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "nintendo switch",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "thunder - grizzlies",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "criteria nuoto 2025",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "lol",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "megan fox",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "barcelone \u2013 osasuna",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "stanciu",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "harry duca di sussex",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "djokovic oggi",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "de gea",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "buongiorno 28 marzo 2025",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "sciopero treni",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "conferenza stampa tudor",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "lol 2025",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "george clooney",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "cavaliers - spurs",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "costanza fiction",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "sucic",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "tommaso cassissa",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "djokovic korda miami",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "pio esposito",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "reacher 4",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "pintus",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "moglie brignano",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "willem dafoe",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "casini",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "piersilvio berlusconi",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "28 marzo",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "pnrr",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "kings - trail blazers",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "adrian mutu",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "annunci nintendo direct",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "tom selleck",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "immunizations",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "playstation plus giochi mensili",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "raul cremona",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "jo squillo",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "jazz - rockets",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "luca bottura",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "luciano darderi",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "alberto fantin",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "andrea pisani",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "bianca censori",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "corinthians - palmeiras",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "taormina",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "linkem",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "tonali milan",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "guardiola",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "antonio rossi",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "dea suicida matera",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "alex eala",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "armando izzo",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "luca laurenti",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "hurghada",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "finale grande fratello",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "silver",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "flu shots",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "noipa cuneo fiscale",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "chiara appendino",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "graduatorie concorso docenti",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "irene tinagli",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "romano prodi",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "adolescence serie",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "spinea",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "montanari",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "filip ciao darwin",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "pietro parolin",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "carlo cracco",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "reddit",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "heat - hawks",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "danimarca",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "peppe quintale",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "reddit down",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "eid al fitr 2025",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "borsetta",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "fc barcelona",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "liam neeson",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "ettore andenna",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "galeazzo bignami",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "il turco canale 5",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "holland",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "garmin connect plus",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "francesco oppini",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "liposuzione",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "lampedusa",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "rovigo",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "gratteri",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "molise",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "claudio morici",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "parapendio",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "vittorio sgarbi figli",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "cinese",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "chieti today",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "sunita williams",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "anna kalinskaya",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "openai",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "lucrezia lando",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "viviana stucchi",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "bergamo news",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "michelle affari tuoi",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "ormea",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "gue pequeno",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "samuele marelli",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "patty pravo",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "regioni italiane",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "bottura giornalista",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "brigitte bardot",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "calenda",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "laura cremaschi",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "nintendo today",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "jon bon jovi",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "melania trump",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "gerry scotti",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "miley cyrus",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "carla bruni",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "tom cruise",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "stefania cappa",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "chiambretti",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "guardiola juve",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "aniket verma",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "vladimir luxuria",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "valle d'aosta",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "sarr basket",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "stellantis",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "ameba",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "alexandra hildebrandt",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "carpi",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "marvel avengers doomsday",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "cracovia",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "affari tuoi stasera",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "copenaghen",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "robinho",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "mark rutte",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "ncis",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "busto arsizio",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "tajani",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "cruciani",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "favignana",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "alessandro rapinese",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "quanti anni ha sabrina di uomini e donne",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "nintendo today app",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "sandra marchegiano",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "rottamazione quinquies",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "rosy bindi",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "mondiale per club",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "hanoi",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "silvia toffanin",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "protezione civile calabria",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "shiffrin",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "fermo",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "roberta uomini e donne",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "chef rubio",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "abhishek sharma",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "taremi",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 211,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.18668606248878736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 212,
    "entity": "gerard depardieu",
    "discover_score": 0.18652219821108676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 213,
    "entity": "sindbad",
    "discover_score": 0.18635938684789813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 214,
    "entity": "turchia",
    "discover_score": 0.18619761651459218,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 215,
    "entity": "daspo",
    "discover_score": 0.1860368755170824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 216,
    "entity": "olivia wilde",
    "discover_score": 0.18587715234788066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 217,
    "entity": "better call saul",
    "discover_score": 0.18571843568225221,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 218,
    "entity": "alfieri",
    "discover_score": 0.18556071437446803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 219,
    "entity": "mara carfagna",
    "discover_score": 0.18540397745415083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 220,
    "entity": "marjorie taylor greene",
    "discover_score": 0.18524821412271236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 221,
    "entity": "alba sgarbi",
    "discover_score": 0.18509341374987923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 222,
    "entity": "mel gibson",
    "discover_score": 0.18493956587030455,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 223,
    "entity": "carlo acutis santo",
    "discover_score": 0.18478666018026316,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 224,
    "entity": "settimio todisco",
    "discover_score": 0.18463468653442752,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 225,
    "entity": "ritorno al futuro",
    "discover_score": 0.18448363494272269,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 226,
    "entity": "rimac",
    "discover_score": 0.1843334955672572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 227,
    "entity": "mlb",
    "discover_score": 0.18418425871932848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 228,
    "entity": "adriano sofri",
    "discover_score": 0.18403591485650023,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-28 09:43:41",
  "trends_count": 228,
  "top_score": 122.44757334594212,
  "runtime_minutes": 3.356412144502004,
  "proxies_used": 207
};
