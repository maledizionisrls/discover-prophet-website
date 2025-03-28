const trendData = [
  {
    "rank": 1,
    "entity": "myanmar",
    "discover_score": 102.51758342606476,
    "score_1h": 53.0,
    "score_4h": 35.14075630252101,
    "score_7d": 1.7011834319526629
  },
  {
    "rank": 26,
    "entity": "unipol",
    "discover_score": 33.82666562038249,
    "score_1h": 57.1551724137931,
    "score_4h": 25.51115467107345,
    "score_7d": 26.964497041420117
  },
  {
    "rank": 28,
    "entity": "amsterdam",
    "discover_score": 18.208214052385983,
    "score_1h": 36.41379310344828,
    "score_4h": 14.914208361168736,
    "score_7d": 19.988165680473372
  },
  {
    "rank": 3,
    "entity": "berrettini fritz",
    "discover_score": 10.84771964656242,
    "score_1h": 0.8448275862068966,
    "score_4h": 5.317991631799163,
    "score_7d": 4.153846153846153
  },
  {
    "rank": 33,
    "entity": "ora legale 2025",
    "discover_score": 7.705222005166783,
    "score_1h": 9.543103448275863,
    "score_4h": 6.145608452586055,
    "score_7d": 25.011834319526628
  },
  {
    "rank": 39,
    "entity": "novak djokovic",
    "discover_score": 7.671939945538331,
    "score_1h": 25.758620689655174,
    "score_4h": 7.604444288175522,
    "score_7d": 12.331360946745562
  },
  {
    "rank": 48,
    "entity": "fritz",
    "discover_score": 7.093577774316944,
    "score_1h": 11.491379310344827,
    "score_4h": 8.521008403361344,
    "score_7d": 7.35207100591716
  },
  {
    "rank": 9,
    "entity": "re carlo",
    "discover_score": 3.650966736311911,
    "score_1h": 1.646551724137931,
    "score_4h": 2.129891705636229,
    "score_7d": 10.911242603550296
  },
  {
    "rank": 5,
    "entity": "polizia postale",
    "discover_score": 3.341761628017506,
    "score_1h": 2.689655172413793,
    "score_4h": 2.128538026089097,
    "score_7d": 2.831360946745562
  },
  {
    "rank": 36,
    "entity": "meta ai",
    "discover_score": 3.209884601535792,
    "score_1h": 2.9396551724137927,
    "score_4h": 3.223664779719419,
    "score_7d": 8.828402366863905
  },
  {
    "rank": 12,
    "entity": "barcellona - osasuna",
    "discover_score": 3.188123705740746,
    "score_1h": 0.9137931034482759,
    "score_4h": 3.0441176470588234,
    "score_7d": 2.8875739644970415
  },
  {
    "rank": 13,
    "entity": "tailandia",
    "discover_score": 2.6440100236004134,
    "score_1h": 7.422413793103448,
    "score_4h": 2.765312401111072,
    "score_7d": 2.195266272189349
  },
  {
    "rank": 2,
    "entity": "evelina sgarbi",
    "discover_score": 2.341384343253976,
    "score_1h": 1.1637931034482758,
    "score_4h": 0.9128898421293203,
    "score_7d": 1.0591715976331362
  },
  {
    "rank": 15,
    "entity": "waltz",
    "discover_score": 2.2552027643867762,
    "score_1h": 0.0,
    "score_4h": 1.8739495798319328,
    "score_7d": 5.068047337278107
  },
  {
    "rank": 8,
    "entity": "bankok",
    "discover_score": 1.5346124497782738,
    "score_1h": 3.793103448275862,
    "score_4h": 1.2191993952392672,
    "score_7d": 1.5739644970414202
  },
  {
    "rank": 7,
    "entity": "previsioni meteo aprile",
    "discover_score": 1.42202227735826,
    "score_1h": 2.1293103448275863,
    "score_4h": 0.8441950001758025,
    "score_7d": 2.7366863905325443
  },
  {
    "rank": 14,
    "entity": "proroga polizze catastrofali",
    "discover_score": 1.331209286973459,
    "score_1h": 0.0,
    "score_4h": 0.9218909321050597,
    "score_7d": 5.207100591715976
  },
  {
    "rank": 22,
    "entity": "studio ghibli",
    "discover_score": 1.30837723232755,
    "score_1h": 2.25,
    "score_4h": 1.1438504272001688,
    "score_7d": 4.541420118343195
  },
  {
    "rank": 6,
    "entity": "kristi noem",
    "discover_score": 1.1448190892130587,
    "score_1h": 1.206896551724138,
    "score_4h": 0.8277310924369748,
    "score_7d": 0.621301775147929
  },
  {
    "rank": 10,
    "entity": "paolini-sabalenka",
    "discover_score": 1.0538221434243915,
    "score_1h": 0.0,
    "score_4h": 0.7521008403361344,
    "score_7d": 1.801775147928994
  },
  {
    "rank": 42,
    "entity": "anticipazioni amici",
    "discover_score": 1.0179598458131367,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9508192398298232,
    "score_7d": 6.207100591715976
  },
  {
    "rank": 4,
    "entity": "michael schumacher",
    "discover_score": 0.9601681821000227,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.18277310924369747,
    "score_7d": 6.269230769230769
  },
  {
    "rank": 47,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.9094497802962535,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.6596638655462185,
    "score_7d": 15.795857988165679
  },
  {
    "rank": 29,
    "entity": "bonnie blue",
    "discover_score": 0.8835137723474252,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.7780492950318203,
    "score_7d": 3.8402366863905324
  },
  {
    "rank": 18,
    "entity": "bulls - lakers",
    "discover_score": 0.7686594328061775,
    "score_1h": 0.646551724137931,
    "score_4h": 0.4201680672268907,
    "score_7d": 6.437869822485207
  },
  {
    "rank": 16,
    "entity": "martina colombari",
    "discover_score": 0.7220322140999602,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.6554621848739496,
    "score_7d": 0.8136094674556213
  },
  {
    "rank": 24,
    "entity": "doppio accredito inps",
    "discover_score": 0.7026515142493718,
    "score_1h": 0.0,
    "score_4h": 0.9966421715129566,
    "score_7d": 0.3047337278106509
  },
  {
    "rank": 31,
    "entity": "buon venerdi 28 marzo 2025",
    "discover_score": 0.6808415725467408,
    "score_1h": 2.3879310344827585,
    "score_4h": 0.7532523469638902,
    "score_7d": 1.2366863905325443
  },
  {
    "rank": 17,
    "entity": "milik",
    "discover_score": 0.664084020899038,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.592436974789916,
    "score_7d": 0.7366863905325444
  },
  {
    "rank": 35,
    "entity": "olimpia milano - barcellona",
    "discover_score": 0.6635797969898201,
    "score_1h": 2.387931034482759,
    "score_4h": 0.5861344537815126,
    "score_7d": 2.8609467455621305
  },
  {
    "rank": 212,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.656681784919466,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.6596638655462185,
    "score_7d": 15.795857988165679
  },
  {
    "rank": 44,
    "entity": "waltz mike",
    "discover_score": 0.6125981717264415,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.7950845610210612,
    "score_7d": 0.9644970414201184
  },
  {
    "rank": 30,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 0.5899481672501848,
    "score_1h": 1.6293103448275863,
    "score_4h": 0.2605042016806723,
    "score_7d": 17.87869822485207
  },
  {
    "rank": 41,
    "entity": "mensik",
    "discover_score": 0.5728271473748354,
    "score_1h": 0.0,
    "score_4h": 0.390158573889807,
    "score_7d": 5.85207100591716
  },
  {
    "rank": 21,
    "entity": "sarkozy",
    "discover_score": 0.5313155768758027,
    "score_1h": 1.603448275862069,
    "score_4h": 0.4330543933054393,
    "score_7d": 0.621301775147929
  },
  {
    "rank": 38,
    "entity": "sondaggi politici oggi",
    "discover_score": 0.5258561581527186,
    "score_1h": 0.0,
    "score_4h": 0.4852941176470588,
    "score_7d": 1.482248520710059
  },
  {
    "rank": 25,
    "entity": "jakub men\u0161\u00edk",
    "discover_score": 0.4998823100682326,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.3235294117647059,
    "score_7d": 1.5680473372781065
  },
  {
    "rank": 11,
    "entity": "sigfrido ranucci",
    "discover_score": 0.49158146794854984,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1407563025210084,
    "score_7d": 0.7751479289940828
  },
  {
    "rank": 20,
    "entity": "vincita superenalotto ex moglie",
    "discover_score": 0.4821000936608558,
    "score_1h": 3.043103448275862,
    "score_4h": 0.40648183959776374,
    "score_7d": 0.16272189349112426
  },
  {
    "rank": 40,
    "entity": "minority report",
    "discover_score": 0.47259927534272034,
    "score_1h": 0.0,
    "score_4h": 0.3382352941176471,
    "score_7d": 2.4289940828402368
  },
  {
    "rank": 23,
    "entity": "one battle after another film",
    "discover_score": 0.465940438767505,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.4054621848739496,
    "score_7d": 0.20414201183431951
  },
  {
    "rank": 45,
    "entity": "sciopero metalmeccanici",
    "discover_score": 0.4394347434029473,
    "score_1h": 0.08620689655172414,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.801775147928994
  },
  {
    "rank": 50,
    "entity": "barcelona - osasuna",
    "discover_score": 0.41760522390450167,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2857142857142857,
    "score_7d": 2.4792899408284024
  },
  {
    "rank": 37,
    "entity": "barcelona vs osasuna",
    "discover_score": 0.3800267239523538,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.20168067226890757,
    "score_7d": 1.4497041420118342
  },
  {
    "rank": 34,
    "entity": "mare fuori sesta stagione",
    "discover_score": 0.37710081509305404,
    "score_1h": 0.0,
    "score_4h": 0.19117647058823528,
    "score_7d": 1.1863905325443787
  },
  {
    "rank": 19,
    "entity": "elisa di francisca",
    "discover_score": 0.37060123856739374,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.06276150627615062,
    "score_7d": 1.1301775147928994
  },
  {
    "rank": 46,
    "entity": "egitto sottomarino turistico affondato",
    "discover_score": 0.36885267779874925,
    "score_1h": 0.0,
    "score_4h": 0.2710084033613445,
    "score_7d": 0.7337278106508875
  },
  {
    "rank": 32,
    "entity": "stefania proietti",
    "discover_score": 0.34708054397584454,
    "score_1h": 0.0,
    "score_4h": 0.18200836820083682,
    "score_7d": 0.18934911242603553
  },
  {
    "rank": 43,
    "entity": "eclissi solare 29 marzo 2025",
    "discover_score": 0.3032401355343496,
    "score_1h": 0.0,
    "score_4h": 0.11715481171548117,
    "score_7d": 0.2958579881656805
  },
  {
    "rank": 27,
    "entity": "luca bottura",
    "discover_score": 0.3001016285004131,
    "score_1h": 1.6551724137931034,
    "score_4h": 0.0,
    "score_7d": 0.7988165680473372
  },
  {
    "rank": 49,
    "entity": "avanti un altro by night",
    "discover_score": 0.25562221863533147,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.514792899408284
  },
  {
    "rank": 51,
    "entity": "wizards - pacers",
    "discover_score": 0.2530848692773169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 52,
    "entity": "nintendo direct",
    "discover_score": 0.2518706487516997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 53,
    "entity": "srh vs lsg",
    "discover_score": 0.2506903984389969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 54,
    "entity": "fine ramadan 2025",
    "discover_score": 0.24954251462921184,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 55,
    "entity": "blue bloods",
    "discover_score": 0.24842549839846914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 56,
    "entity": "valerio mastandrea",
    "discover_score": 0.2473379469500514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 57,
    "entity": "la gintoneria di davide",
    "discover_score": 0.24627854581449443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 58,
    "entity": "lol",
    "discover_score": 0.2452460618098304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 59,
    "entity": "nintendo switch",
    "discover_score": 0.2442393366759723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 60,
    "entity": "megan fox",
    "discover_score": 0.24325728130826463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 61,
    "entity": "barcelone \u2013 osasuna",
    "discover_score": 0.2422988705246811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 62,
    "entity": "magic - mavericks",
    "discover_score": 0.24136313830927508,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 63,
    "entity": "michele placido",
    "discover_score": 0.24044917348149392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 64,
    "entity": "anna matscher",
    "discover_score": 0.23955611574701857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 65,
    "entity": "thunder - grizzlies",
    "discover_score": 0.23868315209103041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 66,
    "entity": "stanciu",
    "discover_score": 0.23782951347935782,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 67,
    "entity": "conferenza stampa tudor",
    "discover_score": 0.23699447183691388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 68,
    "entity": "sciopero treni",
    "discover_score": 0.23617733727628992,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 69,
    "entity": "lol 2025",
    "discover_score": 0.23537745555238682,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 70,
    "entity": "harry duca di sussex",
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
    "entity": "generali",
    "discover_score": 0.23307527170850925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 73,
    "entity": "sucic",
    "discover_score": 0.23233849357411743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 74,
    "entity": "costanza fiction",
    "discover_score": 0.23161615589971676,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 75,
    "entity": "tommaso cassissa",
    "discover_score": 0.23090777506376875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 76,
    "entity": "de gea",
    "discover_score": 0.2302128900546512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 77,
    "entity": "reacher 4",
    "discover_score": 0.22953106112437666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 78,
    "entity": "pintus",
    "discover_score": 0.22886186853915486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 79,
    "entity": "buongiorno 28 marzo 2025",
    "discover_score": 0.2282049114186687,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 80,
    "entity": "pio esposito",
    "discover_score": 0.22755980665670933,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 81,
    "entity": "cavaliers - spurs",
    "discover_score": 0.2269261879165124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 82,
    "entity": "moglie brignano",
    "discover_score": 0.22630370469475658,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 83,
    "entity": "casini",
    "discover_score": 0.22569202144874392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 84,
    "entity": "piersilvio berlusconi",
    "discover_score": 0.22509081678177853,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 85,
    "entity": "armando izzo",
    "discover_score": 0.22449978268220952,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 86,
    "entity": "pnrr",
    "discover_score": 0.2239186238120062,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 87,
    "entity": "adrian mutu",
    "discover_score": 0.22334705684109696,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 88,
    "entity": "tom selleck",
    "discover_score": 0.2227848098240302,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 89,
    "entity": "criteria nuoto 2025",
    "discover_score": 0.2222316216158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 90,
    "entity": "playstation plus giochi mensili",
    "discover_score": 0.22168724132403095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 91,
    "entity": "jo squillo",
    "discover_score": 0.2211514277946646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 92,
    "entity": "raul cremona",
    "discover_score": 0.22062394912909372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 93,
    "entity": "luciano darderi",
    "discover_score": 0.2201045822301589,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 94,
    "entity": "alberto fantin",
    "discover_score": 0.21959311237518594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 95,
    "entity": "andrea pisani",
    "discover_score": 0.21908933281411486,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 96,
    "entity": "kings - trail blazers",
    "discover_score": 0.21859304439100327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 97,
    "entity": "willem dafoe",
    "discover_score": 0.2181040551873126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 98,
    "entity": "tonali milan",
    "discover_score": 0.21762218018550925,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 99,
    "entity": "dea suicida matera",
    "discover_score": 0.21714724095162588,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 100,
    "entity": "antonio rossi",
    "discover_score": 0.21667906533553166,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 101,
    "entity": "bianca censori",
    "discover_score": 0.2162174871877535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 102,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.21576234609177827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 103,
    "entity": "jazz - rockets",
    "discover_score": 0.21531348711084464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 104,
    "entity": "hurghada",
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
    "entity": "corinthians - palmeiras",
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
    "entity": "alex eala",
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
    "entity": "immunizations",
    "discover_score": 0.2119318086698044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 112,
    "entity": "taormina",
    "discover_score": 0.21153331149217683,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 113,
    "entity": "flu shots",
    "discover_score": 0.21113980144539465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 114,
    "entity": "chiara appendino",
    "discover_score": 0.21075117050092493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 115,
    "entity": "tomodachi life",
    "discover_score": 0.2103673139243114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 116,
    "entity": "graduatorie concorso docenti",
    "discover_score": 0.20998813014637793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 117,
    "entity": "irene tinagli",
    "discover_score": 0.20961352064055247,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 118,
    "entity": "spinea",
    "discover_score": 0.209243389805969,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 119,
    "entity": "romano prodi",
    "discover_score": 0.2088776448560291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 120,
    "entity": "adolescence serie",
    "discover_score": 0.20851619571212315,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 121,
    "entity": "montanari",
    "discover_score": 0.20815895490223127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 122,
    "entity": "filip ciao darwin",
    "discover_score": 0.20780583746414044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 123,
    "entity": "pietro parolin",
    "discover_score": 0.2074567608530314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 124,
    "entity": "carlo cracco",
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
    "entity": "reddit",
    "discover_score": 0.2064329849677758,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 127,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.20609929155556622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 128,
    "entity": "danimarca",
    "discover_score": 0.20576925955053368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 129,
    "entity": "peppe quintale",
    "discover_score": 0.20544281918875867,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 130,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.20511990258137494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 131,
    "entity": "barcellona calcio",
    "discover_score": 0.204800443649844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 132,
    "entity": "reddit down",
    "discover_score": 0.2044843780639489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 133,
    "entity": "borsetta",
    "discover_score": 0.20417164318237246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 134,
    "entity": "ettore andenna",
    "discover_score": 0.20386217799573403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 135,
    "entity": "liam neeson",
    "discover_score": 0.20355592307196482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 136,
    "entity": "galeazzo bignami",
    "discover_score": 0.20325282050390903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 137,
    "entity": "eid al fitr 2025",
    "discover_score": 0.20295281385904423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 138,
    "entity": "il turco canale 5",
    "discover_score": 0.20265584813122056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 139,
    "entity": "holland",
    "discover_score": 0.2023618696943225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 140,
    "entity": "garmin connect plus",
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
    "entity": "liposuzione",
    "discover_score": 0.20149734164610134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 143,
    "entity": "francesco oppini",
    "discover_score": 0.20121480219092233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 144,
    "entity": "heat - hawks",
    "discover_score": 0.20093500109845577,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 145,
    "entity": "molise",
    "discover_score": 0.20065789214663352,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 146,
    "entity": "lampedusa",
    "discover_score": 0.20038343021591398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 147,
    "entity": "parapendio",
    "discover_score": 0.20011157125545861,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 148,
    "entity": "gratteri",
    "discover_score": 0.1998422722505727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 149,
    "entity": "vittorio sgarbi figli",
    "discover_score": 0.19957549119135506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 150,
    "entity": "claudio morici",
    "discover_score": 0.19931118704250333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 151,
    "entity": "cinese",
    "discover_score": 0.19904931971422546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 152,
    "entity": "chieti today",
    "discover_score": 0.19878985003420896,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 153,
    "entity": "anna kalinskaya",
    "discover_score": 0.1985327397206032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 154,
    "entity": "sunita williams",
    "discover_score": 0.19827795135597165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 155,
    "entity": "lucrezia lando",
    "discover_score": 0.19802544836217253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 156,
    "entity": "viviana stucchi",
    "discover_score": 0.1977751949761298,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 157,
    "entity": "ormea",
    "discover_score": 0.19752715622645642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 158,
    "entity": "michelle affari tuoi",
    "discover_score": 0.19728129791089558,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 159,
    "entity": "gue pequeno",
    "discover_score": 0.1970375865745452,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 160,
    "entity": "brigitte bardot",
    "discover_score": 0.19679598948883448,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 161,
    "entity": "patty pravo",
    "discover_score": 0.1965564746312216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 162,
    "entity": "regioni italiane",
    "discover_score": 0.19631901066558333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 163,
    "entity": "nintendo today",
    "discover_score": 0.19608356692326917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 164,
    "entity": "calenda",
    "discover_score": 0.19585011338479313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 165,
    "entity": "laura cremaschi",
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
    "entity": "stefania cappa",
    "discover_score": 0.19448958279957862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 171,
    "entity": "carla bruni",
    "discover_score": 0.1942692710996454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 172,
    "entity": "bergamo news",
    "discover_score": 0.19405073081207164,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 173,
    "entity": "guardiola juve",
    "discover_score": 0.19383393702956642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 174,
    "entity": "tom cruise",
    "discover_score": 0.19361886534096467,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 175,
    "entity": "chiambretti",
    "discover_score": 0.19340549181849295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 176,
    "entity": "aniket verma",
    "discover_score": 0.19319379300543385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 177,
    "entity": "sarr basket",
    "discover_score": 0.1929837459041747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 178,
    "entity": "valle d'aosta",
    "discover_score": 0.19277532796462654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 179,
    "entity": "vladimir luxuria",
    "discover_score": 0.19256851707299927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 180,
    "entity": "stellantis",
    "discover_score": 0.1923632915409209,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 181,
    "entity": "ameba",
    "discover_score": 0.1921596300948879,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 182,
    "entity": "samuele marelli",
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
    "entity": "alexandra hildebrandt",
    "discover_score": 0.19155782354835862,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 185,
    "entity": "copenaghen",
    "discover_score": 0.1913602136571693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 186,
    "entity": "carpi",
    "discover_score": 0.19116406736002547,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 187,
    "entity": "affari tuoi stasera",
    "discover_score": 0.1909693656682039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 188,
    "entity": "cracovia",
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
    "entity": "robinho",
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
    "entity": "ncis",
    "discover_score": 0.19001688568106462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 193,
    "entity": "mark rutte",
    "discover_score": 0.1898304718549614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 194,
    "entity": "tajani",
    "discover_score": 0.18964537904728723,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 195,
    "entity": "favignana",
    "discover_score": 0.18946159084497557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 196,
    "entity": "cruciani",
    "discover_score": 0.18927909112429256,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 197,
    "entity": "quanti anni ha sabrina di uomini e donne",
    "discover_score": 0.18909786404425666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 198,
    "entity": "alessandro rapinese",
    "discover_score": 0.18891789404024137,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 199,
    "entity": "sandra marchegiano",
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
    "entity": "rottamazione quinquies",
    "discover_score": 0.1878636342819447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 205,
    "entity": "protezione civile calabria",
    "discover_score": 0.18769204995002464,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 206,
    "entity": "shiffrin",
    "discover_score": 0.18752160741400595,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 207,
    "entity": "fermo",
    "discover_score": 0.18735229333594913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 208,
    "entity": "roberta uomini e donne",
    "discover_score": 0.18718409459913868,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 209,
    "entity": "chef rubio",
    "discover_score": 0.18701699830334648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 210,
    "entity": "abhishek sharma",
    "discover_score": 0.18685099176021946,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 211,
    "entity": "taremi",
    "discover_score": 0.18668606248878736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 213,
    "entity": "gerard depardieu",
    "discover_score": 0.18635938684789813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 214,
    "entity": "sindbad",
    "discover_score": 0.18619761651459218,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 215,
    "entity": "meteo.it",
    "discover_score": 0.1860368755170824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 216,
    "entity": "turchia",
    "discover_score": 0.18587715234788066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 217,
    "entity": "daspo",
    "discover_score": 0.18571843568225221,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 218,
    "entity": "olivia wilde",
    "discover_score": 0.18556071437446803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 219,
    "entity": "better call saul",
    "discover_score": 0.18540397745415083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 220,
    "entity": "alfieri",
    "discover_score": 0.18524821412271236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 221,
    "entity": "mara carfagna",
    "discover_score": 0.18509341374987923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 222,
    "entity": "alba sgarbi",
    "discover_score": 0.18493956587030455,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 223,
    "entity": "clooney",
    "discover_score": 0.18478666018026316,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 224,
    "entity": "marjorie taylor greene",
    "discover_score": 0.18463468653442752,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 225,
    "entity": "mel gibson",
    "discover_score": 0.18448363494272269,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 226,
    "entity": "carlo acutis santo",
    "discover_score": 0.1843334955672572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 227,
    "entity": "settimio todisco",
    "discover_score": 0.18418425871932848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 228,
    "entity": "ritorno al futuro",
    "discover_score": 0.18403591485650023,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 229,
    "entity": "rimac",
    "discover_score": 0.18388845457974975,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 230,
    "entity": "mlb",
    "discover_score": 0.1837418686306834,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  },
  {
    "rank": 231,
    "entity": "adriano sofri",
    "discover_score": 0.18359614788881806,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0
  }
];
const runMetadata = {
  "timestamp": "2025-03-28 10:46:30",
  "trends_count": 231,
  "top_score": 102.51758342606476,
  "runtime_minutes": 4.023366196950277,
  "proxies_used": 207
};
