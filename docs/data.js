const trendData = [
  {
    "rank": 1,
    "entity": "eclissi 29 marzo",
    "discover_score": 31.848743514583,
    "score_1h": 55.06896551724138,
    "score_4h": 23.126050420168067,
    "score_7d": 3.5177514792899407
  },
  {
    "rank": 5,
    "entity": "cambio ora 2025",
    "discover_score": 31.002491557784822,
    "score_1h": 44.76724137931035,
    "score_4h": 35.18510249288,
    "score_7d": 19.36390532544379
  },
  {
    "rank": 6,
    "entity": "probabili formazioni",
    "discover_score": 25.31313339509297,
    "score_1h": 61.75,
    "score_4h": 29.023355367251504,
    "score_7d": 19.233727810650887
  },
  {
    "rank": 26,
    "entity": "meteo milano",
    "discover_score": 19.54569275968169,
    "score_1h": 44.12068965517241,
    "score_4h": 37.463793467177666,
    "score_7d": 25.955621301775146
  },
  {
    "rank": 2,
    "entity": "scossa terremoto myanmar",
    "discover_score": 10.961027526956475,
    "score_1h": 10.172413793103448,
    "score_4h": 12.413865546218487,
    "score_7d": 2.837278106508876
  },
  {
    "rank": 13,
    "entity": "napoli milan",
    "discover_score": 9.288826645412856,
    "score_1h": 11.482758620689655,
    "score_4h": 3.1320892373685876,
    "score_7d": 20.381656804733726
  },
  {
    "rank": 36,
    "entity": "orari motogp",
    "discover_score": 6.56499171049603,
    "score_1h": 24.35344827586207,
    "score_4h": 13.960084033613445,
    "score_7d": 8.745562130177515
  },
  {
    "rank": 44,
    "entity": "groenlandia",
    "discover_score": 6.5556310339017365,
    "score_1h": 3.1293103448275863,
    "score_4h": 7.061583629267607,
    "score_7d": 16.893491124260354
  },
  {
    "rank": 8,
    "entity": "assalto portavalori",
    "discover_score": 6.030258321323785,
    "score_1h": 7.327586206896552,
    "score_4h": 6.347464927393551,
    "score_7d": 5.902366863905325
  },
  {
    "rank": 19,
    "entity": "formazioni serie a",
    "discover_score": 4.935891450921083,
    "score_1h": 4.758620689655173,
    "score_4h": 2.848739495798319,
    "score_7d": 10.937869822485206
  },
  {
    "rank": 20,
    "entity": "ghibli",
    "discover_score": 4.9288295443172245,
    "score_1h": 13.060344827586206,
    "score_4h": 6.103565275482578,
    "score_7d": 7.902366863905326
  },
  {
    "rank": 3,
    "entity": "spezia - brescia",
    "discover_score": 4.661527957854378,
    "score_1h": 0.8620689655172413,
    "score_4h": 4.3187563728420235,
    "score_7d": 2.9585798816568047
  },
  {
    "rank": 18,
    "entity": "sbk",
    "discover_score": 4.513227277583955,
    "score_1h": 4.181034482758621,
    "score_4h": 2.2534193593755494,
    "score_7d": 10.035502958579881
  },
  {
    "rank": 45,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 4.291183896503621,
    "score_1h": 0.0,
    "score_4h": 0.21638655462184875,
    "score_7d": 15.21301775147929
  },
  {
    "rank": 4,
    "entity": "gil vicente - benfica",
    "discover_score": 4.248423973097603,
    "score_1h": 1.7155172413793103,
    "score_4h": 1.0782936605604585,
    "score_7d": 4.816568047337278
  },
  {
    "rank": 22,
    "entity": "miami open 2025 tabellone",
    "discover_score": 3.960291323590134,
    "score_1h": 0.0,
    "score_4h": 0.3760504201680672,
    "score_7d": 11.041420118343195
  },
  {
    "rank": 42,
    "entity": "polizze catastrofali proroga",
    "discover_score": 3.5713003572833784,
    "score_1h": 0.0,
    "score_4h": 0.5714285714285714,
    "score_7d": 11.860946745562131
  },
  {
    "rank": 14,
    "entity": "lecce roma",
    "discover_score": 3.2624621087858756,
    "score_1h": 4.267241379310345,
    "score_4h": 2.692899335466404,
    "score_7d": 5.1420118343195265
  },
  {
    "rank": 28,
    "entity": "inter udinese",
    "discover_score": 3.0629128827021153,
    "score_1h": 0.5689655172413793,
    "score_4h": 1.0504201680672267,
    "score_7d": 8.263313609467456
  },
  {
    "rank": 12,
    "entity": "pilar fogliati",
    "discover_score": 2.989638701053463,
    "score_1h": 7.155172413793103,
    "score_4h": 5.992159206778945,
    "score_7d": 2.5088757396449703
  },
  {
    "rank": 41,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 2.2877504238245554,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.476890756302521,
    "score_7d": 7.07396449704142
  },
  {
    "rank": 10,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 2.0464308677308853,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8645089835097219,
    "score_7d": 3.606508875739645
  },
  {
    "rank": 29,
    "entity": "inps cedolino pensione",
    "discover_score": 1.8986582400383496,
    "score_1h": 0.0,
    "score_4h": 0.724921767870328,
    "score_7d": 4.778106508875739
  },
  {
    "rank": 7,
    "entity": "leverkusen - bochum",
    "discover_score": 1.6301508148526032,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5546218487394958,
    "score_7d": 2.692307692307692
  },
  {
    "rank": 40,
    "entity": "belve",
    "discover_score": 1.6274980198247948,
    "score_1h": 0.0,
    "score_4h": 0.5651260504201681,
    "score_7d": 4.5828402366863905
  },
  {
    "rank": 9,
    "entity": "andrea pucci",
    "discover_score": 1.466749682064308,
    "score_1h": 3.6379310344827585,
    "score_4h": 2.071428571428571,
    "score_7d": 1.7041420118343193
  },
  {
    "rank": 31,
    "entity": "new zealand vs pakistan",
    "discover_score": 1.2539186392105268,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3380858619598467,
    "score_7d": 3.4319526627218933
  },
  {
    "rank": 30,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.9883724556024759,
    "score_1h": 0.0,
    "score_4h": 0.7878151260504201,
    "score_7d": 2.3106508875739644
  },
  {
    "rank": 33,
    "entity": "richard jewell",
    "discover_score": 0.8515383861258615,
    "score_1h": 1.3620689655172413,
    "score_4h": 0.8100980978165325,
    "score_7d": 1.940828402366864
  },
  {
    "rank": 15,
    "entity": "pelicans - warriors",
    "discover_score": 0.8269265682232271,
    "score_1h": 1.2844827586206895,
    "score_4h": 0.45798319327731096,
    "score_7d": 1.6627218934911243
  },
  {
    "rank": 24,
    "entity": "the voice senior 2025",
    "discover_score": 0.773010565711199,
    "score_1h": 0.7844827586206896,
    "score_4h": 0.4474789915966386,
    "score_7d": 1.7781065088757395
  },
  {
    "rank": 17,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.7661158939890759,
    "score_1h": 2.6281414377556986,
    "score_4h": 0.9012605042016807,
    "score_7d": 1.272189349112426
  },
  {
    "rank": 27,
    "entity": "perugia - pineto",
    "discover_score": 0.7053344943611956,
    "score_1h": 1.5629748684979545,
    "score_4h": 0.6366601033718927,
    "score_7d": 1.5
  },
  {
    "rank": 11,
    "entity": "federico faggin",
    "discover_score": 0.6453665826418304,
    "score_1h": 0.0,
    "score_4h": 0.354540979571745,
    "score_7d": 1.1183431952662723
  },
  {
    "rank": 25,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.6441593547211267,
    "score_1h": 0.0,
    "score_4h": 0.3529411764705882,
    "score_7d": 1.4733727810650887
  },
  {
    "rank": 34,
    "entity": "picierno",
    "discover_score": 0.6188765449499138,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.8059755282866284,
    "score_7d": 1.2100591715976332
  },
  {
    "rank": 38,
    "entity": "pistons - cavaliers",
    "discover_score": 0.5932286844311292,
    "score_1h": 2.1982758620689657,
    "score_4h": 0.35504201680672265,
    "score_7d": 1.4881656804733727
  },
  {
    "rank": 23,
    "entity": "le assaggiatrici (film)",
    "discover_score": 0.5728289711195395,
    "score_1h": 0.0,
    "score_4h": 0.07773109243697479,
    "score_7d": 1.4112426035502958
  },
  {
    "rank": 32,
    "entity": "nuggets - jazz",
    "discover_score": 0.5360490174513092,
    "score_1h": 2.887931034482759,
    "score_4h": 1.5529693048767625,
    "score_7d": 0.47041420118343197
  },
  {
    "rank": 35,
    "entity": "muhammad abbas",
    "discover_score": 0.5323118595704737,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.502958579881657
  },
  {
    "rank": 49,
    "entity": "latte crudo",
    "discover_score": 0.47292619960848975,
    "score_1h": 0.0,
    "score_4h": 0.11134453781512606,
    "score_7d": 1.3254437869822486
  },
  {
    "rank": 21,
    "entity": "mensik tennis",
    "discover_score": 0.4642212902647843,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3353872929925108,
    "score_7d": 0.8520710059171598
  },
  {
    "rank": 47,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.44612079410649247,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.12343096234309624,
    "score_7d": 1.198224852071006
  },
  {
    "rank": 37,
    "entity": "como empoli",
    "discover_score": 0.4112868980380456,
    "score_1h": 0.7627118644067796,
    "score_4h": 0.2710084033613445,
    "score_7d": 0.8846153846153846
  },
  {
    "rank": 50,
    "entity": "djuric",
    "discover_score": 0.3416734574748421,
    "score_1h": 0.0,
    "score_4h": 0.6134453781512605,
    "score_7d": 0.46745562130177515
  },
  {
    "rank": 39,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.3176478004714753,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.29781829049611475,
    "score_7d": 0.5266272189349113
  },
  {
    "rank": 16,
    "entity": "achille costacurta",
    "discover_score": 0.3132513859168032,
    "score_1h": 0.0,
    "score_4h": 0.5546218487394958,
    "score_7d": 0.19822485207100593
  },
  {
    "rank": 43,
    "entity": "michael magnesi",
    "discover_score": 0.28694478679566277,
    "score_1h": 2.0302454704850965,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.3224852071005917
  },
  {
    "rank": 48,
    "entity": "omar pedrini",
    "discover_score": 0.26784951923497624,
    "score_1h": 0.0,
    "score_4h": 0.058823529411764705,
    "score_7d": 0.5325443786982249
  },
  {
    "rank": 46,
    "entity": "michela moioli snowboard",
    "discover_score": 0.2248424127467575,
    "score_1h": 0.0,
    "score_4h": 0.3773777293344116,
    "score_7d": 0.15384615384615385
  },
  {
    "rank": 51,
    "entity": "vanuatu",
    "discover_score": 0.12748206434910195,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "beppe severgnini",
    "discover_score": 0.12716738907202113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.12686021143920512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "diego armando maradona",
    "discover_score": 0.12656021288744118,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "rcb vs csk",
    "discover_score": 0.12626709406233544,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "bucks - knicks",
    "discover_score": 0.12598057333163432,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "pianese - pontedera",
    "discover_score": 0.1257003854380681,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "the town",
    "discover_score": 0.12542628027641056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "f1 giappone",
    "discover_score": 0.12515802178136212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "jo\u00ebl dicker",
    "discover_score": 0.12489538691450888,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "bodrum - fenerbah\u00e7e",
    "discover_score": 0.12463816474003105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "meta al su whatsapp",
    "discover_score": 0.12438615558006041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "fabio balaso",
    "discover_score": 0.12413917024165175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "tradimento",
    "discover_score": 0.12389702930825783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "bezos",
    "discover_score": 0.1236595624894035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "nicolas sarkozy",
    "discover_score": 0.12342660802295771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "meteo milano oggi",
    "discover_score": 0.12319801212501763,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "mission impossible",
    "discover_score": 0.1229736284829599,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.12275331778768661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "nets - clippers",
    "discover_score": 0.1225369473015127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 71,
    "entity": "sex and the city",
    "discover_score": 0.12232439045850875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 72,
    "entity": "carlo ancelotti",
    "discover_score": 0.12211552649443932,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "pierpaolo uomini e donne",
    "discover_score": 0.12191024010372484,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "liam neeson",
    "discover_score": 0.12170842112111058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "allegri roma",
    "discover_score": 0.12150996422595373,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "denzel washington",
    "discover_score": 0.12131476866724165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "timberwolves - suns",
    "discover_score": 0.1211227380076341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "xai",
    "discover_score": 0.12093377988498329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "tommaso cassissa",
    "discover_score": 0.12074780578993015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "luciano darderi",
    "discover_score": 0.12056473085830295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "previsioni meteo",
    "discover_score": 0.12038447367716024,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "dani alves",
    "discover_score": 0.1202069561034244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "babygirl",
    "discover_score": 0.12003210309414468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.11985984254751274,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "enzo bearzot",
    "discover_score": 0.11969010515383002,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "e3 saxo classic 2025",
    "discover_score": 0.11952282425569376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "matrimonio bezos",
    "discover_score": 0.11935793571673116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "patti smith",
    "discover_score": 0.11919537779826668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "queen",
    "discover_score": 0.11903509104335824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "dimitrov",
    "discover_score": 0.11887701816768416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "meteo brescia",
    "discover_score": 0.11872110395680456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.11856729516935871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "orvieto",
    "discover_score": 0.11841554044579458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "vance",
    "discover_score": 0.11826579022225828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "venezia bologna",
    "discover_score": 0.11811799664929994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "ciclismo oggi",
    "discover_score": 0.11797211351507844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "andrea pisani",
    "discover_score": 0.11782809617277233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "penelope cruz",
    "discover_score": 0.11768590147192458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "bali",
    "discover_score": 0.117545487693471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "grigor dimitrov",
    "discover_score": 0.1174068144882187,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "costanza fiction",
    "discover_score": 0.11726984281855898,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "maradona",
    "discover_score": 0.11713453490321421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "rocco papaleo",
    "discover_score": 0.11700085416483254,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "tom cruise",
    "discover_score": 0.11686876518025725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 105,
    "entity": "moglie brignano",
    "discover_score": 0.11673823363331018,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 106,
    "entity": "bayer leverkusen",
    "discover_score": 0.11660922626993882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 107,
    "entity": "woke",
    "discover_score": 0.11648171085558807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 108,
    "entity": "re carlo iii",
    "discover_score": 0.11635565613466622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 109,
    "entity": "michelle hunziker",
    "discover_score": 0.1162310317919839,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 110,
    "entity": "ben affleck",
    "discover_score": 0.11610780841605253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 111,
    "entity": "millionday",
    "discover_score": 0.11598595746413704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "novara",
    "discover_score": 0.11586545122896322,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "partite oggi diretta",
    "discover_score": 0.11574626280698765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "stefania cappa",
    "discover_score": 0.11562836606814388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "francesca cipriani",
    "discover_score": 0.11551173562698316,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "rush hour",
    "discover_score": 0.11539634681513465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "rachel zegler",
    "discover_score": 0.11528217565501304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "monica maggioni",
    "discover_score": 0.11516919883470787,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "antonio di bella",
    "discover_score": 0.11505739368399082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "balestrate",
    "discover_score": 0.11494673815138318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "val kilmer",
    "discover_score": 0.11483721078222732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "luca argentero",
    "discover_score": 0.11472879069771086,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "twitter down",
    "discover_score": 0.11462145757479461,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "achille lauro",
    "discover_score": 0.11451519162699778,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 125,
    "entity": "indonesia",
    "discover_score": 0.11440997358599793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 126,
    "entity": "ferrovie dello stato",
    "discover_score": 0.11430578468400439,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "raul cremona",
    "discover_score": 0.11420260663686677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "massimiliano bruno",
    "discover_score": 0.11410042162788261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "taken",
    "discover_score": 0.11399921229226986,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "miyazaki",
    "discover_score": 0.11389896170227155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "hong kong",
    "discover_score": 0.11379965335286309,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "downton abbey 3",
    "discover_score": 0.11370127114803248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "gianmarco tognazzi",
    "discover_score": 0.11360379938760694,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "swa",
    "discover_score": 0.11350722275459996,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "brigitte bardot",
    "discover_score": 0.11341152630305443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "brian may",
    "discover_score": 0.11331669544635907,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "corsa contro il tempo",
    "discover_score": 0.11322271594601621,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "prezzo oro",
    "discover_score": 0.11312957390084036,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "john elkann",
    "discover_score": 0.11303725573656806,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "strasburgo lione",
    "discover_score": 0.11294574819586044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 141,
    "entity": "geppi cucciari",
    "discover_score": 0.11285503832868103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 142,
    "entity": "sezione 8 film",
    "discover_score": 0.11276511348303216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "favignana",
    "discover_score": 0.11267596129603387,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "schumacher",
    "discover_score": 0.112587569685331,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "paolo villaggio",
    "discover_score": 0.11249992684081335,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "cracco",
    "discover_score": 0.11241302121663614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "termoli",
    "discover_score": 0.11232684152352747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "sri lanka",
    "discover_score": 0.11224137672137072,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.11215661601205026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "estrazione superenalotto",
    "discover_score": 0.11207254883254941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "andrea belotti",
    "discover_score": 0.11198916484829012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "range rover",
    "discover_score": 0.11190645394670419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "\u0627\u0644\u0632\u0645\u0627\u0644\u0643 \u0636\u062f \u0633\u064a\u0631\u0627\u0645\u064a\u0643\u0627 \u0643\u0644\u064a\u0648\u0628\u0627\u062a\u0631\u0627",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "civita castellana",
    "discover_score": 0.11174301201430423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "valerio aprea",
    "discover_score": 0.11166226181360236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "arkadiusz milik",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "galeazzo bignami",
    "discover_score": 0.11150265651526611,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "luisa ranieri",
    "discover_score": 0.1114237834224703,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "benedetta orlando",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "lacerenza",
    "discover_score": 0.1112678527400893,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "atf",
    "discover_score": 0.1111907782375225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "asia",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "paolo ruffini",
    "discover_score": 0.11103836989850041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "jd vance",
    "discover_score": 0.11096302014754543,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "cambogia",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 166,
    "entity": "julio iglesias",
    "discover_score": 0.11081399087085796,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 167,
    "entity": "valore bitcoin",
    "discover_score": 0.11074029635326887,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 168,
    "entity": "infernetto",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 169,
    "entity": "brignano",
    "discover_score": 0.11059451116633974,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 170,
    "entity": "massimo giletti",
    "discover_score": 0.11052240635894325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "varenne",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "starlink",
    "discover_score": 0.11037973797755445,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "jodie foster",
    "discover_score": 0.11030916105670341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "terence hill",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "treviso",
    "discover_score": 0.11016948932113223,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "holland",
    "discover_score": 0.11010038189372698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "tangeri",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "bursa",
    "discover_score": 0.10996359325514149,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "alexis s\u00e1nchez",
    "discover_score": 0.10989590011342192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "pier silvio berlusconi",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "margaret spada",
    "discover_score": 0.10976188716528863,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.109695556062937,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 183,
    "entity": "sarah jessica parker",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 184,
    "entity": "ministro urso",
    "discover_score": 0.10956421711282004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "nicola porro",
    "discover_score": 0.10949919856020456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "lady gaga milano",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "brisighella",
    "discover_score": 0.10937043723787641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "sanchez",
    "discover_score": 0.10930668431451801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 189,
    "entity": "sofia vergara",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 190,
    "entity": "vladimir putin",
    "discover_score": 0.10918040921277318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 191,
    "entity": "david hasselhoff",
    "discover_score": 0.10911787739533732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 192,
    "entity": "blake lively",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "brescia",
    "discover_score": 0.10899400174030915,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "valeria graci",
    "discover_score": 0.10893264874461546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "messi",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "nonostante film",
    "discover_score": 0.10881109009275462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "bariloche",
    "discover_score": 0.10875087572846497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "veronica gentili",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "omicidio pierina",
    "discover_score": 0.10863155568765029,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 200,
    "entity": "neymar",
    "discover_score": 0.10857244172444135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 201,
    "entity": "rete 4 diretta",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 202,
    "entity": "diretta it",
    "discover_score": 0.10845528569696827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 203,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.10839723574112384,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 204,
    "entity": "unipol arena",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "phuket",
    "discover_score": 0.10828217268655647,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "narni",
    "discover_score": 0.10822515206702722,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "lucrezia lando",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-29 10:44:34",
  "trends_count": 207,
  "top_score": 31.848743514583,
  "runtime_minutes": 3.1026979287465415,
  "proxies_used": 207
};
