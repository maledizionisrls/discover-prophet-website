const trendData = [
  {
    "rank": 23,
    "entity": "meteo milano",
    "discover_score": 61.11225511909615,
    "score_1h": 58.97413793103448,
    "score_4h": 44.83823529411765,
    "score_7d": 26.36390532544379
  },
  {
    "rank": 11,
    "entity": "probabili formazioni",
    "discover_score": 35.97808897058279,
    "score_1h": 50.06896551724138,
    "score_4h": 22.13235294117647,
    "score_7d": 18.97041420118343
  },
  {
    "rank": 5,
    "entity": "cambio ora 2025",
    "discover_score": 32.48101152482532,
    "score_1h": 36.9051724137931,
    "score_4h": 19.054621848739494,
    "score_7d": 6.402366863905326
  },
  {
    "rank": 1,
    "entity": "spezia - brescia",
    "discover_score": 14.921656280408712,
    "score_1h": 3.0,
    "score_4h": 3.7478991596638656,
    "score_7d": 3.449704142011834
  },
  {
    "rank": 2,
    "entity": "scossa terremoto myanmar",
    "discover_score": 14.916044932267319,
    "score_1h": 10.50862068965517,
    "score_4h": 5.8886554621848735,
    "score_7d": 4.017751479289941
  },
  {
    "rank": 4,
    "entity": "eclissi 29 marzo",
    "discover_score": 12.345313322440626,
    "score_1h": 24.844827586206897,
    "score_4h": 7.382352941176471,
    "score_7d": 3.739644970414201
  },
  {
    "rank": 38,
    "entity": "orari motogp",
    "discover_score": 10.642101933390128,
    "score_1h": 20.362068965517242,
    "score_4h": 11.546218487394958,
    "score_7d": 8.875739644970412
  },
  {
    "rank": 48,
    "entity": "groenlandia",
    "discover_score": 6.0828827809758685,
    "score_1h": 3.3017241379310347,
    "score_4h": 6.594537815126051,
    "score_7d": 10.45266272189349
  },
  {
    "rank": 3,
    "entity": "gil vicente - benfica",
    "discover_score": 5.4933104103088235,
    "score_1h": 2.103448275862069,
    "score_4h": 2.4033613445378155,
    "score_7d": 4.769230769230769
  },
  {
    "rank": 8,
    "entity": "assalto portavalori",
    "discover_score": 5.011169493958084,
    "score_1h": 7.448275862068966,
    "score_4h": 3.38655462184874,
    "score_7d": 6.071005917159763
  },
  {
    "rank": 27,
    "entity": "ghibli",
    "discover_score": 4.050370074357383,
    "score_1h": 17.060344827586206,
    "score_4h": 3.466386554621849,
    "score_7d": 12.532544378698224
  },
  {
    "rank": 16,
    "entity": "pilar fogliati",
    "discover_score": 3.7469206049809003,
    "score_1h": 14.724137931034484,
    "score_4h": 4.367647058823529,
    "score_7d": 2.3254437869822486
  },
  {
    "rank": 18,
    "entity": "napoli milan",
    "discover_score": 3.0741966653559727,
    "score_1h": 4.129310344827586,
    "score_4h": 2.7815126050420167,
    "score_7d": 5.650887573964497
  },
  {
    "rank": 19,
    "entity": "taylor fritz",
    "discover_score": 2.7865719350197624,
    "score_1h": 1.3620689655172413,
    "score_4h": 2.115546218487395,
    "score_7d": 10.860946745562131
  },
  {
    "rank": 36,
    "entity": "new zealand vs pakistan",
    "discover_score": 2.5332577777995144,
    "score_1h": 2.4913793103448274,
    "score_4h": 3.2815126050420167,
    "score_7d": 3.405325443786982
  },
  {
    "rank": 20,
    "entity": "sbk",
    "discover_score": 2.268273170147891,
    "score_1h": 6.991379310344827,
    "score_4h": 2.2710084033613445,
    "score_7d": 3.955621301775148
  },
  {
    "rank": 7,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 2.2552896370465754,
    "score_1h": 0.0,
    "score_4h": 1.4054621848739495,
    "score_7d": 4.079881656804734
  },
  {
    "rank": 13,
    "entity": "perugia - pineto",
    "discover_score": 1.2966356963340326,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0252100840336136,
    "score_7d": 2.905325443786982
  },
  {
    "rank": 6,
    "entity": "doppio accredito inps",
    "discover_score": 1.2384299097995854,
    "score_1h": 1.6982758620689653,
    "score_4h": 0.5105042016806722,
    "score_7d": 4.822485207100592
  },
  {
    "rank": 9,
    "entity": "leverkusen - bochum",
    "discover_score": 1.2160177406476818,
    "score_1h": 3.413793103448276,
    "score_4h": 0.7163865546218487,
    "score_7d": 3.5384615384615383
  },
  {
    "rank": 45,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 1.2066060259608486,
    "score_1h": 0.0,
    "score_4h": 1.0210084033613445,
    "score_7d": 11.745562130177515
  },
  {
    "rank": 29,
    "entity": "formazioni serie a",
    "discover_score": 1.1638312971171416,
    "score_1h": 1.9913793103448276,
    "score_4h": 1.2247899159663866,
    "score_7d": 3.118343195266272
  },
  {
    "rank": 22,
    "entity": "lecce roma",
    "discover_score": 1.1404537331803886,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.1134453781512605,
    "score_7d": 2.7189349112426036
  },
  {
    "rank": 24,
    "entity": "picierno",
    "discover_score": 1.1177783207461274,
    "score_1h": 0.0,
    "score_4h": 1.4012605042016806,
    "score_7d": 1.349112426035503
  },
  {
    "rank": 47,
    "entity": "polizze catastrofali proroga",
    "discover_score": 1.0504016225837016,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0483193277310925,
    "score_7d": 5.855029585798817
  },
  {
    "rank": 12,
    "entity": "inps cedolino pensione",
    "discover_score": 1.0027288372941219,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.5525210084033614,
    "score_7d": 5.328402366863905
  },
  {
    "rank": 10,
    "entity": "andrea pucci",
    "discover_score": 1.0000708383495822,
    "score_1h": 1.4482758620689655,
    "score_4h": 0.8172268907563025,
    "score_7d": 1.0355029585798816
  },
  {
    "rank": 25,
    "entity": "beppe severgnini",
    "discover_score": 0.7928598686969945,
    "score_1h": 1.1982758620689655,
    "score_4h": 1.2142857142857144,
    "score_7d": 0.35502958579881655
  },
  {
    "rank": 15,
    "entity": "pelicans - warriors",
    "discover_score": 0.7052421719646965,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.4957983193277311,
    "score_7d": 1.526627218934911
  },
  {
    "rank": 14,
    "entity": "federico faggin",
    "discover_score": 0.7012058480523732,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.5147058823529411,
    "score_7d": 1.1094674556213018
  },
  {
    "rank": 26,
    "entity": "miami open 2025 tabellone",
    "discover_score": 0.6346706554340792,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.3067226890756302,
    "score_7d": 11.928994082840237
  },
  {
    "rank": 43,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 0.6094998309696791,
    "score_1h": 0.0,
    "score_4h": 0.5882352941176471,
    "score_7d": 2.390532544378698
  },
  {
    "rank": 21,
    "entity": "nuggets - jazz",
    "discover_score": 0.5553590697021759,
    "score_1h": 1.0172413793103448,
    "score_4h": 0.43907563025210083,
    "score_7d": 0.8816568047337279
  },
  {
    "rank": 41,
    "entity": "pistons - cavaliers",
    "discover_score": 0.5538386159965395,
    "score_1h": 0.0,
    "score_4h": 0.6995798319327731,
    "score_7d": 0.6982248520710059
  },
  {
    "rank": 34,
    "entity": "f1 giappone",
    "discover_score": 0.5374471000037576,
    "score_1h": 0.603448275862069,
    "score_4h": 0.36344537815126055,
    "score_7d": 3.508875739644971
  },
  {
    "rank": 28,
    "entity": "belve",
    "discover_score": 0.5301334610740324,
    "score_1h": 0.0,
    "score_4h": 0.2647058823529412,
    "score_7d": 6.1420118343195265
  },
  {
    "rank": 49,
    "entity": "venezia bologna",
    "discover_score": 0.49512984709794156,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.3340336134453782,
    "score_7d": 5.079881656804734
  },
  {
    "rank": 40,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.4912711694844832,
    "score_1h": 0.0,
    "score_4h": 0.6365546218487395,
    "score_7d": 0.3431952662721893
  },
  {
    "rank": 17,
    "entity": "achille costacurta",
    "discover_score": 0.4554641332363814,
    "score_1h": 0.0,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.5443786982248521
  },
  {
    "rank": 31,
    "entity": "oroscopo capricorno 29 marzo",
    "discover_score": 0.4478417362007612,
    "score_1h": 0.0,
    "score_4h": 0.5063025210084033,
    "score_7d": 0.09467455621301776
  },
  {
    "rank": 44,
    "entity": "ciclismo oggi",
    "discover_score": 0.43687439325353056,
    "score_1h": 1.6551724137931036,
    "score_4h": 0.3067226890756303,
    "score_7d": 2.195266272189349
  },
  {
    "rank": 37,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.43325856566700577,
    "score_1h": 0.0,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.0414201183431953
  },
  {
    "rank": 35,
    "entity": "vanuatu",
    "discover_score": 0.39633179491799325,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.37184873949579833,
    "score_7d": 0.1390532544378698
  },
  {
    "rank": 39,
    "entity": "muhammad abbas",
    "discover_score": 0.39428597028480467,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.22478991596638653,
    "score_7d": 1.7781065088757395
  },
  {
    "rank": 42,
    "entity": "diego armando maradona",
    "discover_score": 0.37441436434010233,
    "score_1h": 2.189655172413793,
    "score_4h": 0.37815126050420167,
    "score_7d": 0.08284023668639054
  },
  {
    "rank": 30,
    "entity": "michael magnesi",
    "discover_score": 0.3702501616694345,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1869747899159664,
    "score_7d": 0.5710059171597633
  },
  {
    "rank": 46,
    "entity": "latte crudo",
    "discover_score": 0.35968787291720555,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.17857142857142858,
    "score_7d": 2.1745562130177514
  },
  {
    "rank": 33,
    "entity": "fabio balaso",
    "discover_score": 0.3024647772320959,
    "score_1h": 0.0,
    "score_4h": 0.06092436974789916,
    "score_7d": 0.09763313609467456
  },
  {
    "rank": 32,
    "entity": "le assaggiatrici (film)",
    "discover_score": 0.28599966750267436,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 9.967455621301776
  },
  {
    "rank": 50,
    "entity": "bucks - knicks",
    "discover_score": 0.28254477200342415,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.5325443786982248
  },
  {
    "rank": 51,
    "entity": "djuric",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "meta al su whatsapp",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "omar pedrini",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "pianese - pontedera",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "rcb vs csk",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "the voice senior",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "the town",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "inter udinese",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "diretta calcio",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "nets - clippers",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "meteo milano oggi",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "bodrum - fenerbah\u00e7e",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "tradimento",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "bezos",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "carlo ancelotti",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "nicolas sarkozy",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "enzo bearzot",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "timberwolves - suns",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "orario",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "mission impossible",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "sex and the city",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "michela moioli",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "liam neeson",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "pierpaolo uomini e donne",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "orvieto",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "previsioni meteo",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "allegri roma",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "denzel washington",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "xai",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "tommaso cassissa",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "luciano darderi",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "stefania proietti",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "babygirl",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "dani alves",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "meteo brescia",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "e3 saxo classic 2025",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "ferrovie dello stato",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "patti smith",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "matrimonio bezos",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "dimitrov",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "queen",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "vance",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "andrea pisani",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "penelope cruz",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "bali",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "grigor dimitrov",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "costanza fiction",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "terremoto tailandia",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "rocco papaleo",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "vietnam",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "maradona",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "tom cruise",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "partite oggi diretta",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "moglie brignano",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "woke",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "bayer leverkusen",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "re carlo iii",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "michelle hunziker",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "minority report",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "vincita superenalotto ex moglie",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "ben affleck",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "millionday",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "andrea sempio",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "novara",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "stefania cappa",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "rush hour",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "francesca cipriani",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "monica maggioni",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "rachel zegler",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "antonio di bella",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "val kilmer",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "balestrate",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "unipol",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "luca argentero",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "ancelotti",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "twitter down",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "achille lauro",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "indonesia",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "raul cremona",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "taken",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "miyazaki",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "richard jewell film",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "massimiliano bruno",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "downton abbey 3",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "brigitte bardot",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "hong kong",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "swa",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "brian may",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "gianmarco tognazzi",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "corsa contro il tempo",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "strasburgo lione",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "prezzo oro",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "geppi cucciari",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "sezione 8 film",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "estrazione superenalotto",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "favignana",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "schumacher",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "cracco",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "paolo villaggio",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "termoli",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "andrea belotti",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "sri lanka",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "range rover",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0636\u062f \u0633\u064a\u0631\u0627\u0645\u064a\u0643\u0627 \u0643\u0644\u064a\u0648\u0628\u0627\u062a\u0631\u0627",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "civita castellana",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "valerio aprea",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "luisa ranieri",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "galeazzo bignami",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "arkadiusz milik",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "benedetta orlando",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "atf",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "lacerenza",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "asia",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "paolo ruffini",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "jd vance",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "valore bitcoin",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "julio iglesias",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "cambogia",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "brignano",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "infernetto",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "one battle after another film",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "massimo giletti",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "varenne",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "starlink",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "jodie foster",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "terence hill",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "treviso",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "holland",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "tangeri",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "alexis s\u00e1nchez",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "bursa",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "pier silvio berlusconi",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "margaret spada",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "sarah jessica parker",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "ministro urso",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "nicola porro",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "lady gaga milano",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "brisighella",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "sofia vergara",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "vladimir putin",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "sanchez",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "david hasselhoff",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "blake lively",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "valeria graci",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "nonostante film",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "messi",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "bariloche",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "veronica gentili",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "omicidio pierina",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "rete 4 diretta",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "neymar",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "diretta it",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 211,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.18668606248878736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 212,
    "entity": "unipol arena",
    "discover_score": 0.18652219821108676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 213,
    "entity": "phuket",
    "discover_score": 0.18635938684789813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 214,
    "entity": "narni",
    "discover_score": 0.18619761651459218,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 215,
    "entity": "lucrezia lando",
    "discover_score": 0.1860368755170824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-29 09:40:25",
  "trends_count": 215,
  "top_score": 61.11225511909615,
  "runtime_minutes": 3.285524773597717,
  "proxies_used": 207
};
