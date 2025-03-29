const trendData = [
  {
    "rank": 14,
    "entity": "meteo milano",
    "discover_score": 41.42997455973613,
    "score_1h": 58.939655172413794,
    "score_4h": 25.794117647058822,
    "score_7d": 26.40828402366864
  },
  {
    "rank": 7,
    "entity": "cambio ora 2025",
    "discover_score": 21.66175123401549,
    "score_1h": 47.974137931034484,
    "score_4h": 12.422901796701943,
    "score_7d": 11.748520710059172
  },
  {
    "rank": 1,
    "entity": "spezia - brescia",
    "discover_score": 19.225286047716466,
    "score_1h": 6.198275862068966,
    "score_4h": 4.871848739495798,
    "score_7d": 3.618343195266272
  },
  {
    "rank": 2,
    "entity": "scossa terremoto myanmar",
    "discover_score": 10.437532041324086,
    "score_1h": 10.870689655172415,
    "score_4h": 3.9789915966386555,
    "score_7d": 4.106508875739645
  },
  {
    "rank": 4,
    "entity": "eclissi 29 marzo",
    "discover_score": 6.982591384994422,
    "score_1h": 11.948275862068964,
    "score_4h": 3.792016806722689,
    "score_7d": 4.473372781065089
  },
  {
    "rank": 27,
    "entity": "orari motogp",
    "discover_score": 5.190531616778714,
    "score_1h": 20.42241379310345,
    "score_4h": 4.899159663865547,
    "score_7d": 9.2396449704142
  },
  {
    "rank": 48,
    "entity": "groenlandia",
    "discover_score": 3.6203700328448862,
    "score_1h": 3.5603448275862073,
    "score_4h": 3.4030273197144965,
    "score_7d": 16.227810650887573
  },
  {
    "rank": 3,
    "entity": "gil vicente - benfica",
    "discover_score": 2.5800103774174112,
    "score_1h": 1.9655172413793103,
    "score_4h": 0.9369747899159664,
    "score_7d": 4.754437869822485
  },
  {
    "rank": 6,
    "entity": "assalto portavalori",
    "discover_score": 2.5492842540244967,
    "score_1h": 11.155172413793103,
    "score_4h": 1.4894957983193278,
    "score_7d": 4.254437869822485
  },
  {
    "rank": 36,
    "entity": "new zealand vs pakistan",
    "discover_score": 2.376963497263185,
    "score_1h": 0.0,
    "score_4h": 3.0700836820083683,
    "score_7d": 3.3491124260355027
  },
  {
    "rank": 21,
    "entity": "napoli milan",
    "discover_score": 2.2514310403483018,
    "score_1h": 2.5172413793103448,
    "score_4h": 1.6722689075630253,
    "score_7d": 11.982248520710058
  },
  {
    "rank": 19,
    "entity": "pilar fogliati",
    "discover_score": 2.0274985559420164,
    "score_1h": 16.732758620689655,
    "score_4h": 2.3697478991596634,
    "score_7d": 2.1301775147928996
  },
  {
    "rank": 18,
    "entity": "taylor fritz",
    "discover_score": 1.9355166658058582,
    "score_1h": 1.3793103448275863,
    "score_4h": 1.5241025280405047,
    "score_7d": 7.0295857988165675
  },
  {
    "rank": 5,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 1.593888563756756,
    "score_1h": 1.2844827586206897,
    "score_4h": 0.8474385570127632,
    "score_7d": 2.28698224852071
  },
  {
    "rank": 10,
    "entity": "andrea pucci",
    "discover_score": 1.4336018021163655,
    "score_1h": 2.9827586206896552,
    "score_4h": 1.0617858021869835,
    "score_7d": 2.6538461538461537
  },
  {
    "rank": 11,
    "entity": "juve genoa",
    "discover_score": 1.2420169171443565,
    "score_1h": 1.4913793103448276,
    "score_4h": 0.5756302521008404,
    "score_7d": 12.795857988165679
  },
  {
    "rank": 17,
    "entity": "pelicans - warriors",
    "discover_score": 0.9401184372018694,
    "score_1h": 0.9568965517241379,
    "score_4h": 0.8067226890756303,
    "score_7d": 2.091715976331361
  },
  {
    "rank": 12,
    "entity": "perugia - pineto",
    "discover_score": 0.8381632235524228,
    "score_1h": 2.1982758620689653,
    "score_4h": 0.47689075630252103,
    "score_7d": 3.100591715976331
  },
  {
    "rank": 8,
    "entity": "leverkusen - bochum",
    "discover_score": 0.7382840083003397,
    "score_1h": 2.5086206896551726,
    "score_4h": 0.2710084033613445,
    "score_7d": 2.6538461538461537
  },
  {
    "rank": 25,
    "entity": "lecce roma",
    "discover_score": 0.6993018056175268,
    "score_1h": 4.112068965517241,
    "score_4h": 0.39285714285714285,
    "score_7d": 8.526627218934912
  },
  {
    "rank": 13,
    "entity": "inps cedolino pensione",
    "discover_score": 0.6848833123928264,
    "score_1h": 3.0172413793103448,
    "score_4h": 0.3284518828451883,
    "score_7d": 3.2988165680473376
  },
  {
    "rank": 20,
    "entity": "achille costacurta",
    "discover_score": 0.6454514995203976,
    "score_1h": 2.1293103448275863,
    "score_4h": 0.4040557645652403,
    "score_7d": 3.0088757396449703
  },
  {
    "rank": 28,
    "entity": "buongiorno sabato 29 marzo 2025",
    "discover_score": 0.634411207812722,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.6281248901234134,
    "score_7d": 1.2455621301775148
  },
  {
    "rank": 37,
    "entity": "formazioni serie a",
    "discover_score": 0.6308152192765788,
    "score_1h": 2.896551724137931,
    "score_4h": 0.49402271368798567,
    "score_7d": 4.056213017751479
  },
  {
    "rank": 46,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 0.5813078847457706,
    "score_1h": 1.396551724137931,
    "score_4h": 0.5525210084033613,
    "score_7d": 2.4585798816568047
  },
  {
    "rank": 22,
    "entity": "nuggets - jazz",
    "discover_score": 0.5745610170746901,
    "score_1h": 0.0,
    "score_4h": 0.5735294117647058,
    "score_7d": 0.48816568047337283
  },
  {
    "rank": 9,
    "entity": "doppio accredito inps",
    "discover_score": 0.569955942003114,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.1407563025210084,
    "score_7d": 2.3846153846153846
  },
  {
    "rank": 47,
    "entity": "inter udinese",
    "discover_score": 0.559605233211622,
    "score_1h": 3.112068965517241,
    "score_4h": 0.4648043317745508,
    "score_7d": 3.5236686390532546
  },
  {
    "rank": 41,
    "entity": "f1 giappone",
    "discover_score": 0.5222615224271656,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.569327731092437,
    "score_7d": 0.9585798816568047
  },
  {
    "rank": 32,
    "entity": "milik",
    "discover_score": 0.5178307473716228,
    "score_1h": 0.8362068965517241,
    "score_4h": 0.5336134453781513,
    "score_7d": 0.680473372781065
  },
  {
    "rank": 49,
    "entity": "orvieto",
    "discover_score": 0.495945887137225,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.21008403361344538,
    "score_7d": 31.301775147928993
  },
  {
    "rank": 26,
    "entity": "picierno",
    "discover_score": 0.4799653841111228,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.2791216905172111,
    "score_7d": 1.9585798816568047
  },
  {
    "rank": 23,
    "entity": "pistons - cavaliers",
    "discover_score": 0.4787756105202059,
    "score_1h": 3.137931034482759,
    "score_4h": 0.27869097429766887,
    "score_7d": 1.3905325443786982
  },
  {
    "rank": 24,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.47651077947501963,
    "score_1h": 0.0,
    "score_4h": 0.3682008368200837,
    "score_7d": 0.5680473372781065
  },
  {
    "rank": 31,
    "entity": "belve",
    "discover_score": 0.47043586520441877,
    "score_1h": 0.0,
    "score_4h": 0.18487394957983194,
    "score_7d": 10.133136094674557
  },
  {
    "rank": 15,
    "entity": "federico faggin",
    "discover_score": 0.4450924970910239,
    "score_1h": 0.0,
    "score_4h": 0.13445378151260504,
    "score_7d": 1.0976331360946745
  },
  {
    "rank": 38,
    "entity": "nets - clippers",
    "discover_score": 0.4429187836700019,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5262033683766394,
    "score_7d": 0.20118343195266272
  },
  {
    "rank": 40,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 0.43205136717355497,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.1722689075630252,
    "score_7d": 11.289940828402367
  },
  {
    "rank": 34,
    "entity": "meta al su whatsapp",
    "discover_score": 0.39351203414419433,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.4585798816568047
  },
  {
    "rank": 29,
    "entity": "miami open 2025 tabellone",
    "discover_score": 0.3909158851033325,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.12363313526247319,
    "score_7d": 4.289940828402367
  },
  {
    "rank": 39,
    "entity": "muhammad abbas",
    "discover_score": 0.37415628024873243,
    "score_1h": 0.0,
    "score_4h": 0.21548117154811716,
    "score_7d": 1.1479289940828403
  },
  {
    "rank": 44,
    "entity": "vanuatu",
    "discover_score": 0.3620650471753345,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.3054393305439331,
    "score_7d": 0.2692307692307692
  },
  {
    "rank": 16,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.35295612386476116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.757396449704142
  },
  {
    "rank": 30,
    "entity": "latte crudo",
    "discover_score": 0.34174178441754455,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.09033613445378151,
    "score_7d": 1.5118343195266273
  },
  {
    "rank": 33,
    "entity": "bucks - knicks",
    "discover_score": 0.3300757575465053,
    "score_1h": 0.603448275862069,
    "score_4h": 0.07773109243697479,
    "score_7d": 2.032544378698225
  },
  {
    "rank": 35,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.29903248004821836,
    "score_1h": 0.0,
    "score_4h": 0.04411764705882353,
    "score_7d": 0.863905325443787
  },
  {
    "rank": 43,
    "entity": "enzo bearzot",
    "discover_score": 0.2976357345393356,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.11554621848739496,
    "score_7d": 0.09763313609467456
  },
  {
    "rank": 42,
    "entity": "fabio balaso",
    "discover_score": 0.29213494678033314,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.09243697478991597,
    "score_7d": 0.07100591715976332
  },
  {
    "rank": 45,
    "entity": "michael magnesi",
    "discover_score": 0.2611892565642242,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.09171597633136094
  },
  {
    "rank": 50,
    "entity": "djuric",
    "discover_score": 0.25433477814404226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.6923076923076923
  },
  {
    "rank": 51,
    "entity": "polizze catastrofali proroga",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "le assaggiatrici (film)",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "patti smith",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "the voice senior",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "meteo milano oggi",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "omar pedrini",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "carlo ancelotti",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "timberwolves - suns",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "pianese - pontedera",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "the town",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "rcb vs csk",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "ghibli",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "diretta calcio",
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
    "entity": "bodrum - fenerbah\u00e7e",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "bezos",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "sbk",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "nicolas sarkozy",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "mission impossible",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "previsioni meteo",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "sex and the city",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "michela moioli",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "liam neeson",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "allegri roma",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "pierpaolo uomini e donne",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "denzel washington",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "xai",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "meteo brescia",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "tommaso cassissa",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "luciano darderi",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "stefania proietti",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "babygirl",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "dani alves",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "benfica",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "e3 saxo classic 2025",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "meteo napoli oggi",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "dimitrov",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "queen",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "vance",
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
    "entity": "penelope cruz",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "bali",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "grigor dimitrov",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "rocco papaleo",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "costanza fiction",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "tom cruise",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "vietnam",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "terremoto tailandia",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "maradona",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "moglie brignano",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "woke",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "lauren s\u00e1nchez",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "re carlo iii",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "michelle hunziker",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "millionday",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "ben affleck",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "vincita superenalotto ex moglie",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "ciclismo oggi",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "andrea sempio",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "stefania cappa",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "partite oggi diretta",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "novara",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "rush hour",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "raul cremona",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "monica maggioni",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "francesca cipriani",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "antonio di bella",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "val kilmer",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "rachel zegler",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "balestrate",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "putin",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "achille lauro",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "twitter down",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "luca argentero",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "ancelotti",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "unipol",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "taken",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "indonesia",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "brigitte bardot",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "miyazaki",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "richard jewell film",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "downton abbey 3",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "brian may",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "swa",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "massimiliano bruno",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "hong kong",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "gianmarco tognazzi",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "john elkann",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "corsa contro il tempo",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "strasburgo lione",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "estrazione superenalotto",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "geppi cucciari",
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
    "entity": "sezione 8 film",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "favignana",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "schumacher",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "cracco",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "andrea belotti",
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
    "entity": "range rover",
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
    "entity": "sri lanka",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0636\u062f \u0633\u064a\u0631\u0627\u0645\u064a\u0643\u0627 \u0643\u0644\u064a\u0648\u0628\u0627\u062a\u0631\u0627",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "civita castellana",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "valerio aprea",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "luisa ranieri",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "galeazzo bignami",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "benedetta orlando",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "atf",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "asia",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "lacerenza",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "jd vance",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "paolo ruffini",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "valore bitcoin",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "julio iglesias",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "infernetto",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "cambogia",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "massimo giletti",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "one battle after another film",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "varenne",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "starlink",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "jodie foster",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "terence hill",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "treviso",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "holland",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "alexis s\u00e1nchez",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "tangeri",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "bursa",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "pier silvio berlusconi",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "sarah jessica parker",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "ministro urso",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "margaret spada",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "nicola porro",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "lady gaga milano",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "sofia vergara",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "brisighella",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "vladimir putin",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "sanchez",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "david hasselhoff",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "blake lively",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "valeria graci",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "nonostante film",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "bariloche",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "veronica gentili",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "diego armando maradona",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "omicidio pierina",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "rete 4 diretta",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "diretta it",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "neymar",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "unipol arena",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "phuket",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "criteria nuoto 2025",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 211,
    "entity": "narni",
    "discover_score": 0.18668606248878736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 212,
    "entity": "lucrezia lando",
    "discover_score": 0.18652219821108676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-29 08:44:42",
  "trends_count": 212,
  "top_score": 41.42997455973613,
  "runtime_minutes": 3.059540931383769,
  "proxies_used": 207
};
