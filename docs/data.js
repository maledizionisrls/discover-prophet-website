const trendData = [
  {
    "rank": 1,
    "entity": "myanmar terremoto",
    "discover_score": 79.26522405576114,
    "score_1h": 66.49137931034483,
    "score_4h": 17.180672268907564,
    "score_7d": 7.497041420118343
  },
  {
    "rank": 18,
    "entity": "meteo milano",
    "discover_score": 36.067343493163015,
    "score_1h": 67.34482758620689,
    "score_4h": 24.378151260504204,
    "score_7d": 26.52958579881657
  },
  {
    "rank": 44,
    "entity": "previsioni meteo",
    "discover_score": 19.34894315658062,
    "score_1h": 54.60344827586207,
    "score_4h": 16.081932773109244,
    "score_7d": 32.710059171597635
  },
  {
    "rank": 2,
    "entity": "spezia - brescia",
    "discover_score": 9.57272609819044,
    "score_1h": 13.224137931034484,
    "score_4h": 3.8382352941176467,
    "score_7d": 3.390532544378698
  },
  {
    "rank": 39,
    "entity": "groenlandia",
    "discover_score": 3.672211028906097,
    "score_1h": 21.81896551724138,
    "score_4h": 3.5903361344537816,
    "score_7d": 11.115384615384617
  },
  {
    "rank": 3,
    "entity": "gil vicente - benfica",
    "discover_score": 3.312420038300268,
    "score_1h": 4.1034482758620685,
    "score_4h": 1.315126050420168,
    "score_7d": 4.64792899408284
  },
  {
    "rank": 46,
    "entity": "new zealand vs pakistan",
    "discover_score": 3.152061739660291,
    "score_1h": 0.43103448275862066,
    "score_4h": 4.5210084033613445,
    "score_7d": 3.319526627218935
  },
  {
    "rank": 7,
    "entity": "eclissi 29 marzo",
    "discover_score": 2.807133966563755,
    "score_1h": 7.594827586206897,
    "score_4h": 2.1848739495798317,
    "score_7d": 2.366863905325444
  },
  {
    "rank": 24,
    "entity": "motogp orari",
    "discover_score": 2.4086786756579994,
    "score_1h": 18.28448275862069,
    "score_4h": 2.3445378151260505,
    "score_7d": 5.556213017751479
  },
  {
    "rank": 13,
    "entity": "taylor fritz",
    "discover_score": 2.2434011938252563,
    "score_1h": 1.8189655172413792,
    "score_4h": 1.4390756302521008,
    "score_7d": 10.236686390532544
  },
  {
    "rank": 8,
    "entity": "assalto portavalori",
    "discover_score": 2.0416677167245068,
    "score_1h": 10.060344827586206,
    "score_4h": 1.3592436974789917,
    "score_7d": 3.7810650887573964
  },
  {
    "rank": 9,
    "entity": "quando cambia l'ora 2025",
    "discover_score": 1.8706401347821218,
    "score_1h": 2.3275862068965516,
    "score_4h": 0.8991596638655462,
    "score_7d": 13.559171597633135
  },
  {
    "rank": 4,
    "entity": "leverkusen - bochum",
    "discover_score": 1.5589332571513816,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.6617647058823529,
    "score_7d": 2.5976331360946747
  },
  {
    "rank": 6,
    "entity": "doppio accredito inps",
    "discover_score": 1.361729494079909,
    "score_1h": 0.0,
    "score_4h": 0.6302521008403361,
    "score_7d": 4.041420118343195
  },
  {
    "rank": 5,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 1.3267139600324303,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.6176470588235294,
    "score_7d": 2.420118343195266
  },
  {
    "rank": 48,
    "entity": "meteo milano oggi",
    "discover_score": 0.9327417696860841,
    "score_1h": 3.3017241379310343,
    "score_4h": 0.8214285714285714,
    "score_7d": 8.041420118343195
  },
  {
    "rank": 33,
    "entity": "miami open 2025 tabellone",
    "discover_score": 0.7786171297737485,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.5273109243697479,
    "score_7d": 9.079881656804734
  },
  {
    "rank": 20,
    "entity": "bankok",
    "discover_score": 0.7463152047925982,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5336134453781513,
    "score_7d": 2.9911242603550297
  },
  {
    "rank": 22,
    "entity": "muhammad abbas",
    "discover_score": 0.7229356831309037,
    "score_1h": 1.0775862068965516,
    "score_4h": 0.8865546218487395,
    "score_7d": 0.5355029585798816
  },
  {
    "rank": 19,
    "entity": "juve genoa",
    "discover_score": 0.6985059615375065,
    "score_1h": 2.3793103448275863,
    "score_4h": 0.4222689075630252,
    "score_7d": 3.890532544378698
  },
  {
    "rank": 34,
    "entity": "fritz oggi",
    "discover_score": 0.6771101861289545,
    "score_1h": 2.0258620689655173,
    "score_4h": 0.5588235294117647,
    "score_7d": 3.56508875739645
  },
  {
    "rank": 12,
    "entity": "perugia - pineto",
    "discover_score": 0.662787867959327,
    "score_1h": 2.396551724137931,
    "score_4h": 0.3340336134453782,
    "score_7d": 1.9911242603550297
  },
  {
    "rank": 14,
    "entity": "andrea pucci",
    "discover_score": 0.6027894574326396,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2689075630252101,
    "score_7d": 2.8639053254437865
  },
  {
    "rank": 16,
    "entity": "pelicans - warriors",
    "discover_score": 0.5308007439634372,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.25630252100840334,
    "score_7d": 1.6272189349112427
  },
  {
    "rank": 10,
    "entity": "martina colombari",
    "discover_score": 0.5302252597626377,
    "score_1h": 0.6293103448275862,
    "score_4h": 0.12605042016806722,
    "score_7d": 2.168639053254438
  },
  {
    "rank": 15,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.48686137782749195,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.16806722689075632,
    "score_7d": 1.9497041420118344
  },
  {
    "rank": 36,
    "entity": "lecce roma",
    "discover_score": 0.4708416293235354,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.20798319327731093,
    "score_7d": 9.659763313609467
  },
  {
    "rank": 26,
    "entity": "pistons - cavaliers",
    "discover_score": 0.46492878276722466,
    "score_1h": 0.0,
    "score_4h": 0.2415966386554622,
    "score_7d": 2.331360946745562
  },
  {
    "rank": 29,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.4621646120888454,
    "score_1h": 0.0,
    "score_4h": 0.4600840336134454,
    "score_7d": 0.27514792899408286
  },
  {
    "rank": 27,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 0.45846395959564146,
    "score_1h": 1.293103448275862,
    "score_4h": 0.17016806722689076,
    "score_7d": 7.174556213017752
  },
  {
    "rank": 49,
    "entity": "belve",
    "discover_score": 0.4492645833192167,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 5.153846153846153
  },
  {
    "rank": 30,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.4461029060274881,
    "score_1h": 0.0,
    "score_4h": 0.31092436974789917,
    "score_7d": 1.0355029585798816
  },
  {
    "rank": 45,
    "entity": "the voice senior",
    "discover_score": 0.42268305019994107,
    "score_1h": 2.0086206896551726,
    "score_4h": 0.19747899159663865,
    "score_7d": 7.423076923076923
  },
  {
    "rank": 11,
    "entity": "tailandia",
    "discover_score": 0.40242960438184466,
    "score_1h": 0.939655172413793,
    "score_4h": 0.0,
    "score_7d": 3.4023668639053253
  },
  {
    "rank": 35,
    "entity": "buongiorno sabato 29 marzo 2025",
    "discover_score": 0.39925625577351775,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 0.8254437869822484
  },
  {
    "rank": 38,
    "entity": "ghibli",
    "discover_score": 0.3926678517758445,
    "score_1h": 4.629310344827586,
    "score_4h": 0.13025210084033614,
    "score_7d": 9.665680473372781
  },
  {
    "rank": 47,
    "entity": "nets - clippers",
    "discover_score": 0.38795417871296994,
    "score_1h": 0.0,
    "score_4h": 0.41806722689075626,
    "score_7d": 0.22189349112426038
  },
  {
    "rank": 21,
    "entity": "proroga polizze catastrofali",
    "discover_score": 0.38427721494891104,
    "score_1h": 0.847457627118644,
    "score_4h": 0.052521008403361345,
    "score_7d": 12.144970414201184
  },
  {
    "rank": 28,
    "entity": "napoli milan",
    "discover_score": 0.3821169365889406,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.09873949579831932,
    "score_7d": 5.710059171597633
  },
  {
    "rank": 25,
    "entity": "nuggets - jazz",
    "discover_score": 0.36080504674251385,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13865546218487396,
    "score_7d": 0.3047337278106509
  },
  {
    "rank": 23,
    "entity": "omar pedrini",
    "discover_score": 0.3599138428953316,
    "score_1h": 2.0775862068965516,
    "score_4h": 0.10714285714285714,
    "score_7d": 0.4082840236686391
  },
  {
    "rank": 32,
    "entity": "pianese - pontedera",
    "discover_score": 0.3527147562242199,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.18907563025210086,
    "score_7d": 0.26331360946745563
  },
  {
    "rank": 37,
    "entity": "djuric",
    "discover_score": 0.35097808450482804,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.15756302521008403,
    "score_7d": 1.1301775147928994
  },
  {
    "rank": 31,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 0.34928877984360196,
    "score_1h": 0.0,
    "score_4h": 0.06302521008403361,
    "score_7d": 9.38757396449704
  },
  {
    "rank": 17,
    "entity": "federico faggin",
    "discover_score": 0.3459762562611936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.0562130177514792
  },
  {
    "rank": 42,
    "entity": "bucks - knicks",
    "discover_score": 0.33355540771664866,
    "score_1h": 0.0,
    "score_4h": 0.1722689075630252,
    "score_7d": 0.6124260355029586
  },
  {
    "rank": 50,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.3218912339501902,
    "score_1h": 0.0,
    "score_4h": 0.14495798319327732,
    "score_7d": 1.2988165680473374
  },
  {
    "rank": 43,
    "entity": "carlo ancelotti",
    "discover_score": 0.3168625471203073,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1638655462184874,
    "score_7d": 0.23964497041420119
  },
  {
    "rank": 41,
    "entity": "picierno",
    "discover_score": 0.3023735754405612,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.8017751479289941
  },
  {
    "rank": 40,
    "entity": "latte crudo",
    "discover_score": 0.269282508064391,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.3372781065088757
  },
  {
    "rank": 51,
    "entity": "timberwolves - suns",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "orario",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "inps cedolino pensione",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "meta al su whatsapp",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "vance",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "ciclismo oggi",
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
    "entity": "inter udinese",
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
    "entity": "rcb vs csk",
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
    "entity": "tradimento",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "bodrum - fenerbah\u00e7e",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "sbk",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "bezos",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "nicolas sarkozy",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "meteo brescia",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "mission impossible",
    "discover_score": 0.23459420572161058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "sex and the city",
    "discover_score": 0.23382699798647663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "michela moioli",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "liam neeson",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "denzel washington",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "pierpaolo uomini e donne",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "pilar fogliati",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "tommaso cassissa",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "allegri",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "babygirl",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "luciano darderi",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "stefania proietti",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "xai",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "milik",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "dani alves",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "matrimonio bezos",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "dimitrov",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "queen",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "andrea pisani",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "penelope cruz",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "bali",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "rocco papaleo",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "tom cruise",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "grigor dimitrov",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "costanza fiction",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "maradona",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "moglie brignano",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "the order",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "michelle hunziker",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "re carlo iii",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "millionday",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "ben affleck",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "andrea sempio",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "stefania cappa",
    "discover_score": 0.2148707605483044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "vincita superenalotto ex moglie",
    "discover_score": 0.21443402172070247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "partite oggi diretta",
    "discover_score": 0.21400313074278354,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "novara",
    "discover_score": 0.21357795232369067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "rush hour",
    "discover_score": 0.21315835557367352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "raul cremona",
    "discover_score": 0.21274421382066935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "monica maggioni",
    "discover_score": 0.21233540443616755,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "patti smith",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "val kilmer",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "antonio di bella",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "francesca cipriani",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "rachel zegler",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "balestrate",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "putin",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "achille lauro",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "brigitte bardot",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "twitter down",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "taken",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "estrazione superenalotto",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "ancelotti",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "luca argentero",
    "discover_score": 0.2071116448532039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "richard jewell film",
    "discover_score": 0.20677041149372208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "brian may",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "downton abbey 3",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "miyazaki",
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
    "entity": "swa",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "indonesia",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "massimiliano bruno",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "hong kong",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "gianmarco tognazzi",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "john elkann",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "corsa contro il tempo",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "strasburgo lione",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "geppi cucciari",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "prezzo oro",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "sezione 8 film",
    "discover_score": 0.20207082625776437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.20178266682373375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "favignana",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "schumacher",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "andrea belotti",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "range rover",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "cracco",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0636\u062f \u0633\u064a\u0631\u0627\u0645\u064a\u0643\u0627 \u0643\u0644\u064a\u0648\u0628\u0627\u062a\u0631\u0627",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "leverkusen",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "valerio aprea",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "civita castellana",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "termoli",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "sri lanka",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "luisa ranieri",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "galeazzo bignami",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "benedetta orlando",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "atf",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "lacerenza",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "jd vance",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "valore bitcoin",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "julio iglesias",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "infernetto",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "paolo ruffini",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "cambogia",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "massimo giletti",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "varenne",
    "discover_score": 0.1956186206621379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "starlink",
    "discover_score": 0.19538905998164785,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "terence hill",
    "discover_score": 0.19516140316748692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "one battle after another film",
    "discover_score": 0.19493562262564004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "jodie foster",
    "discover_score": 0.19471169132843705,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "holland",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "treviso",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "alexis s\u00e1nchez",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "tangeri",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "sarah jessica parker",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "bursa",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "ministro urso",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "pier silvio berlusconi",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "margaret spada",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "nicola porro",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "polcenigo",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "lady gaga milano",
    "discover_score": 0.19195751186603457,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "sofia vergara",
    "discover_score": 0.19175691638021128,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "vladimir putin",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "brisighella",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "sanchez",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "david hasselhoff",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "blake lively",
    "discover_score": 0.19077608994233797,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "valeria graci",
    "discover_score": 0.19058422188412896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "nonostante film",
    "discover_score": 0.19039374352829713,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "generali",
    "discover_score": 0.190204637234765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "bariloche",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "messi",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "veronica gentili",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "diego armando maradona",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "omicidio pierina",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "willem dafoe",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "rete 4 diretta",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.18873916581775485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "neymar",
    "discover_score": 0.18856166434639035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "unipol arena",
    "discover_score": 0.18838537485394247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "phuket",
    "discover_score": 0.18821028282068325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "taormina",
    "discover_score": 0.1880363739737936,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "criteria nuoto 2025",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "narni",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "lucrezia lando",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-29 07:38:58",
  "trends_count": 206,
  "top_score": 79.26522405576114,
  "runtime_minutes": 2.9204504410425822,
  "proxies_used": 207
};
