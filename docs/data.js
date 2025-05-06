const trendData = [
  {
    "rank": 3,
    "entity": "frecce tricolori",
    "discover_score": 9.82110229901817,
    "score_1h": 35.12068965517241,
    "score_4h": 33.98739495798319,
    "score_7d": 7.696428571428571,
    "extracted_entities": "Frecce Tricolori - Pattuglia Acrobatica Nazionale - Aeronautica Militare - Italia",
    "saturation_score": 496.0
  },
  {
    "rank": 1,
    "entity": "inter - barcellona",
    "discover_score": 8.923028543248996,
    "score_1h": 68.13793103448276,
    "score_4h": 27.03781512605042,
    "score_7d": 4.75,
    "extracted_entities": "Inter - Barcellona - Calcio - Partita - Champions League",
    "saturation_score": 1240.0
  },
  {
    "rank": 7,
    "entity": "jeep compass",
    "discover_score": 7.798657773967647,
    "score_1h": 4.318965517241379,
    "score_4h": 8.508403361344538,
    "score_7d": 13.55952380952381,
    "extracted_entities": "Jeep - Compass - Auto - SUV",
    "saturation_score": 523.0
  },
  {
    "rank": 4,
    "entity": "rihanna",
    "discover_score": 6.935811354419254,
    "score_1h": 15.637931034482758,
    "score_4h": 5.869747899159664,
    "score_7d": 10.99702380952381,
    "extracted_entities": "Rihanna - Cantante - Musica - Moda - Fenty",
    "saturation_score": 765.0
  },
  {
    "rank": 28,
    "entity": "finale champions 2025",
    "discover_score": 5.558780313099887,
    "score_1h": 19.482758620689655,
    "score_4h": 7.951680672268908,
    "score_7d": 13.80952380952381,
    "extracted_entities": "Finale - Champions League - 2025 - Calcio - Evento sportivo",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "rockstar games",
    "discover_score": 5.243049344252592,
    "score_1h": 0.2413793103448276,
    "score_4h": 1.6239495798319328,
    "score_7d": 12.8125,
    "extracted_entities": "Rockstar Games - Videogiochi - Grand Theft Auto - Red Dead Redemption",
    "saturation_score": 10.0
  },
  {
    "rank": 2,
    "entity": "tv8",
    "discover_score": 3.769282603922127,
    "score_1h": 28.724137931034484,
    "score_4h": 13.428571428571429,
    "score_7d": 3.380952380952381,
    "extracted_entities": "TV8 - Canale televisivo - Programmazione - Italia",
    "saturation_score": 112.0
  },
  {
    "rank": 5,
    "entity": "merz",
    "discover_score": 3.3859701456525757,
    "score_1h": 32.64655172413793,
    "score_4h": 6.569327731092437,
    "score_7d": 5.693452380952381,
    "extracted_entities": "Merz - Azienda - Cosmetici - Prodotti per la pelle",
    "saturation_score": 2470.0
  },
  {
    "rank": 6,
    "entity": "tema met gala 2025",
    "discover_score": 2.578982147361141,
    "score_1h": 3.1724137931034484,
    "score_4h": 0.7794117647058822,
    "score_7d": 5.848214285714286,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": 3.0
  },
  {
    "rank": 30,
    "entity": "thuram",
    "discover_score": 2.553067772448078,
    "score_1h": 9.310344827586206,
    "score_4h": 1.6302521008403361,
    "score_7d": 7.741071428571429,
    "extracted_entities": "Marcus Thuram - Lilian Thuram - Calcio - Inter - Borussia Mönchengladbach",
    "saturation_score": 70.0
  },
  {
    "rank": 10,
    "entity": "tv 8",
    "discover_score": 2.3328099238183007,
    "score_1h": 38.741379310344826,
    "score_4h": 12.279411764705882,
    "score_7d": 3.1041666666666665,
    "extracted_entities": "TV8 - Canale televisivo - Programmazione - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 8,
    "entity": "inter vs barcelona",
    "discover_score": 2.26666783199846,
    "score_1h": 40.439655172413794,
    "score_4h": 7.472689075630252,
    "score_7d": 3.8392857142857144,
    "extracted_entities": "Inter - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 5.0
  },
  {
    "rank": 41,
    "entity": "bassetti",
    "discover_score": 1.7996718260568099,
    "score_1h": 9.189655172413794,
    "score_4h": 2.5504201680672267,
    "score_7d": 5.556547619047619,
    "extracted_entities": "Bassetti - Tessuti - Azienda - Arredamento - Italia",
    "saturation_score": 40.0
  },
  {
    "rank": 21,
    "entity": "merz germania",
    "discover_score": 1.6800911076074951,
    "score_1h": 5.336206896551724,
    "score_4h": 2.6512605042016806,
    "score_7d": 4.529761904761905,
    "extracted_entities": "Merz - Germania - Politica tedesca",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "belve stasera",
    "discover_score": 1.3794549954727329,
    "score_1h": 24.64655172413793,
    "score_4h": 6.298319327731092,
    "score_7d": 2.782738095238095,
    "extracted_entities": "Belve - Programma TV - Stasera",
    "saturation_score": 50.0
  },
  {
    "rank": 43,
    "entity": "paola iezzi",
    "discover_score": 1.2118011369788715,
    "score_1h": 0.017241379310344827,
    "score_4h": 0.1722689075630252,
    "score_7d": 4.282738095238095,
    "extracted_entities": "Paola Iezzi - Cantante - Musica Italiana",
    "saturation_score": 170.0
  },
  {
    "rank": 11,
    "entity": "graduatoria reddito di povertà",
    "discover_score": 1.0910062584511349,
    "score_1h": 11.810344827586206,
    "score_4h": 5.621848739495799,
    "score_7d": 1.6458333333333333,
    "extracted_entities": "Graduatoria - Reddito - Povertà",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "zenga",
    "discover_score": 0.9075658579953413,
    "score_1h": 5.293103448275863,
    "score_4h": 1.0336134453781511,
    "score_7d": 3.011904761904762,
    "extracted_entities": "Walter Zenga - Calcio - Allenatore - Inter - Portiere",
    "saturation_score": 7.0
  },
  {
    "rank": 17,
    "entity": "milena brandao",
    "discover_score": 0.8887436036328499,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 2.681547619047619,
    "extracted_entities": "Milena Brandao",
    "saturation_score": 81.0
  },
  {
    "rank": 20,
    "entity": "chirichella",
    "discover_score": 0.8742978719908521,
    "score_1h": 0.008620689655172414,
    "score_4h": 0.3907563025210084,
    "score_7d": 2.642857142857143,
    "extracted_entities": "Cristina Chirichella - Pallavolo - Italia - Nazionale Italiana - Sport",
    "saturation_score": 10.0
  },
  {
    "rank": 15,
    "entity": "tv 8 diretta",
    "discover_score": 0.8710659286612948,
    "score_1h": 27.836206896551722,
    "score_4h": 6.911764705882353,
    "score_7d": 0.8839285714285714,
    "extracted_entities": "TV8 - Diretta - Streaming",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "sergio castellitto",
    "discover_score": 0.7552911529759259,
    "score_1h": 2.5,
    "score_4h": 0.06932773109243698,
    "score_7d": 2.6726190476190474,
    "extracted_entities": "Sergio Castellitto - Attore - Regista - Cinema italiano - Filmografia",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "crespo",
    "discover_score": 0.6887706475745012,
    "score_1h": 6.646551724137931,
    "score_4h": 1.6407563025210083,
    "score_7d": 1.5357142857142856,
    "extracted_entities": "Capelli - Trattamenti - Prodotti - Cura - Styling",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "inter – barcelone",
    "discover_score": 0.6583672806234876,
    "score_1h": 8.948275862068964,
    "score_4h": 1.0861344537815127,
    "score_7d": 1.7708333333333333,
    "extracted_entities": "Inter - Barcellona - Calcio - Partita - UEFA Champions League",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "mi vs gt",
    "discover_score": 0.6388316868482947,
    "score_1h": 0.8362068965517241,
    "score_4h": 3.6827731092436977,
    "score_7d": 0.9732142857142857,
    "extracted_entities": "Xiaomi - Redmi - Smartphone - Tecnologia",
    "saturation_score": 1.0
  },
  {
    "rank": 27,
    "entity": "jannik sinner tennis",
    "discover_score": 0.6217217631211175,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.1596638655462185,
    "score_7d": 1.9672619047619047,
    "extracted_entities": "Jannik Sinner - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "quasi orfano",
    "discover_score": 0.6082258012240044,
    "score_1h": 6.0344827586206895,
    "score_4h": 1.6764705882352942,
    "score_7d": 1.3928571428571428,
    "extracted_entities": "Film - Commedia - Italia",
    "saturation_score": 46.0
  },
  {
    "rank": 16,
    "entity": "matteo bassetti",
    "discover_score": 0.5672806229670951,
    "score_1h": 5.818965517241379,
    "score_4h": 0.930672268907563,
    "score_7d": 1.398809523809524,
    "extracted_entities": "Matteo Bassetti - Infettivologia - Sanità",
    "saturation_score": 35.0
  },
  {
    "rank": 35,
    "entity": "tv 8 streaming",
    "discover_score": 0.5276036844886695,
    "score_1h": 7.577586206896552,
    "score_4h": 1.4894957983193278,
    "score_7d": 1.3363095238095237,
    "extracted_entities": "TV8 - Streaming - Canali televisivi - Programmazione online",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "cancelliere tedesco merz",
    "discover_score": 0.48736500523323917,
    "score_1h": 2.905172413793103,
    "score_4h": 1.7920168067226891,
    "score_7d": 0.8363095238095238,
    "extracted_entities": "Cancelliere - Germania - Friedrich Merz",
    "saturation_score": 3.0
  },
  {
    "rank": 31,
    "entity": "fabio capello",
    "discover_score": 0.4552795220998503,
    "score_1h": 3.853448275862069,
    "score_4h": 2.052521008403361,
    "score_7d": 0.8839285714285714,
    "extracted_entities": "Fabio Capello - Allenatore di calcio - Calcio - Italia - Real Madrid",
    "saturation_score": 3.0
  },
  {
    "rank": 25,
    "entity": "pamela anderson",
    "discover_score": 0.4480244118561598,
    "score_1h": 0.3103448275862069,
    "score_4h": 0.1869747899159664,
    "score_7d": 1.300595238095238,
    "extracted_entities": "Pamela Anderson - Attrice - Modella - Baywatch - Attivismo",
    "saturation_score": 39.0
  },
  {
    "rank": 50,
    "entity": "lucia bronzetti",
    "discover_score": 0.4303649469274007,
    "score_1h": 0.25,
    "score_4h": 0.2647058823529412,
    "score_7d": 1.3779761904761905,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia",
    "saturation_score": 43.0
  },
  {
    "rank": 42,
    "entity": "diffidati inter barcellona",
    "discover_score": 0.3423692710537834,
    "score_1h": 0.0,
    "score_4h": 0.9642857142857142,
    "score_7d": 0.7857142857142857,
    "extracted_entities": "Diffidati - Inter - Barcellona - Calcio - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "emanuela maccarani",
    "discover_score": 0.33569055496263,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.5,
    "score_7d": 0.8333333333333334,
    "extracted_entities": "Emanuela Maccarani - Ginnastica Ritmica - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 34,
    "entity": "houthi",
    "discover_score": 0.32239217865701275,
    "score_1h": 1.4310344827586206,
    "score_4h": 1.0021008403361344,
    "score_7d": 0.6577380952380952,
    "extracted_entities": "Houthi - Yemen - Conflitto - Ribelli - Medio Oriente",
    "saturation_score": 472.0
  },
  {
    "rank": 38,
    "entity": "extra omnes",
    "discover_score": 0.2960600373316504,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.22899159663865548,
    "score_7d": 0.7738095238095238,
    "extracted_entities": "Extra Omnes - Conclave - Vaticano - Papa - Chiesa Cattolica",
    "saturation_score": 39.0
  },
  {
    "rank": 47,
    "entity": "spaccaossa",
    "discover_score": 0.2734845047311595,
    "score_1h": 3.181034482758621,
    "score_4h": 1.565126050420168,
    "score_7d": 0.36607142857142855,
    "extracted_entities": "Spaccaossa - Film - Cinematografia - Italia",
    "saturation_score": 7.0
  },
  {
    "rank": 37,
    "entity": "emmanuel macron",
    "discover_score": 0.25740793502867854,
    "score_1h": 0.16379310344827586,
    "score_4h": 0.07563025210084034,
    "score_7d": 0.6488095238095237,
    "extracted_entities": "Emmanuel Macron - Politica francese - Presidente della Francia",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "alessia fabiani",
    "discover_score": 0.2484338826612989,
    "score_1h": 0.0,
    "score_4h": 0.18277310924369747,
    "score_7d": 0.5922619047619047,
    "extracted_entities": "Alessia Fabiani - Personaggio pubblico - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "gerard martín",
    "discover_score": 0.2484206012027467,
    "score_1h": 0.0,
    "score_4h": 0.1869747899159664,
    "score_7d": 0.5654761904761905,
    "extracted_entities": "Gerard Martín",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "fortitudo bologna - vl pesaro",
    "discover_score": 0.24311173764504637,
    "score_1h": 4.344827586206897,
    "score_4h": 0.37184873949579833,
    "score_7d": 0.4642857142857143,
    "extracted_entities": "Fortitudo Bologna - VL Pesaro - Pallacanestro - Serie A - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 9,
    "entity": "sondaggio politico",
    "discover_score": 0.24038703893253646,
    "score_1h": 0.9051724137931034,
    "score_4h": 0.2184873949579832,
    "score_7d": 0.3630952380952381,
    "extracted_entities": "Sondaggio - Politica - Opinione pubblica",
    "saturation_score": 7.0
  },
  {
    "rank": 39,
    "entity": "kvitova",
    "discover_score": 0.23753414030951042,
    "score_1h": 0.25862068965517243,
    "score_4h": 0.4096638655462185,
    "score_7d": 0.48214285714285715,
    "extracted_entities": "Petra Kvitová - Tennis - WTA - Tornei - Classifica",
    "saturation_score": 42.0
  },
  {
    "rank": 46,
    "entity": "الإنتر ضد برشلونة",
    "discover_score": 0.22176164370364998,
    "score_1h": 1.206896551724138,
    "score_4h": 0.19327731092436973,
    "score_7d": 0.49107142857142855,
    "extracted_entities": "الإنتر - برشلونة - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "luis henrique",
    "discover_score": 0.2139459953891995,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.592436974789916,
    "score_7d": 0.30357142857142855,
    "extracted_entities": "Luis Henrique",
    "saturation_score": 34.0
  },
  {
    "rank": 49,
    "entity": "cambiasso",
    "discover_score": 0.1863527725093897,
    "score_1h": 0.6551724137931034,
    "score_4h": 1.0210084033613445,
    "score_7d": 0.13988095238095238,
    "extracted_entities": "Esteban Cambiasso - Calciatore - Inter - Argentina - Centrocampista",
    "saturation_score": 5.0
  },
  {
    "rank": 23,
    "entity": "lucio manisco",
    "discover_score": 0.18487601957865799,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.9096638655462185,
    "score_7d": 0.09821428571428571,
    "extracted_entities": "Lucio Manisco - Giornalista - Politica Italiana",
    "saturation_score": 111.0
  },
  {
    "rank": 36,
    "entity": "fausto e iaio",
    "discover_score": 0.17568187553395237,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.7289915966386555,
    "score_7d": 0.13690476190476192,
    "extracted_entities": "Fausto Tinelli - Lorenzo Iannucci - Omicidio - Milano - Anni di piombo",
    "saturation_score": 581.0
  },
  {
    "rank": 45,
    "entity": "gianfranco ravasi",
    "discover_score": 0.1469510874168999,
    "score_1h": 2.594827586206897,
    "score_4h": 0.6008403361344539,
    "score_7d": 0.06547619047619048,
    "extracted_entities": "Gianfranco Ravasi - Religione - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "robert lewandowski",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "nicole kidman",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "sophie codegoni",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "walter zenga",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "cappella sistina",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "asap rocky",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "giuseppe di fonzo",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "del piero",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "david attenborough",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "diana ross",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "myriam catania",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "bake off",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "doohan f1",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "benedetta parodi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "thunder - nuggets",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "fentanyl",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "milan",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "referendum abrogativi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "ceferin",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "celtics - knicks",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "met gala 2025 theme",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "antonio l'eredità",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "gerri fiction rai cast",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "tomasz jakubiak",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "alatri",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "gta 6 trailer 2",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "simona izzo",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "simone susinna",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "allerta precipitazioni",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "pontremoli",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "massimo vian",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "giulia vecchio",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "eleonora abbagnato",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "anastasija sevastova",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "luana ravegnini",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "meteo roma",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "3b meteo",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "formia",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "trani",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "alessia orro",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "sciopero treni oggi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "vigevano",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "max allegri",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "carlo amleto",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "vittoria ceretti",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "raoul bova",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "vittoria puccini",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "claudio baglioni",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "maria corleone 2",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "lulu sun",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "mia schem",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "crime",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "sirmione",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "meteo torino",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "liliana resinovich",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "meteo milano",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "walter sabatini",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "invalsi",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "giulio zeppieri",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "macfrut 2025",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "papa paolo vi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "corrado formigli 100 minuti",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "tutto food milano",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "sandro bondi",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "jochen mass pilota",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "città di castello",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "ciro ferrara",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "peyton stearns",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "sandra milo",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "live nation bad bunny",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "mattia torre",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "crystal palace",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "vieira",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "castellina",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "meteo pescara",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "assegno unico maggio 2025",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "damson idris",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "andrea cambiaso",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "sabrina carpenter",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bulgaria",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "brad pitt",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "maria chindamo",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "biglietti bad bunny milano 2026",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "lollobrigida",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "gigi hadid",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "meteo bologna",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "inside man most wanted",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "ralph fiennes",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "youssouf fofana",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "sandra bullock",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "antonella clerici",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "casini",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "raphinha nazionale italiana",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "massimo d'alema",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "estonia",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "edison",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "roma today",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "bayesian",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "meteo.it",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "norton cuffy",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "milan bologna",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "girona maiorca",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "paredes",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "meteo torino oggi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "kossounou",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "cardinale filoni",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "zendaya",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "nicolas maupas",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "morten frendrup",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "san gottardo",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "palagano",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "meteo firenze",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "bad bunny tour",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "isabella rossellini",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "afd",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "charlène wittstock",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "gregoraci",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "colman domingo",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "fbi most wanted",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "metro milano",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "mastrota",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "restaurant",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "genoa cricket and football club",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "letizia moratti",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ultima estrazione del lotto",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "lacerenza",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "francesco acquaroli",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "renato zero",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "manuel agnelli",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "film conclave",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "dan sucu",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "elisabetta canalis",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "seychelles",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "giovanardi",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "intelligenza artificiale",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "jorginho",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "calendario milan",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "cacciari",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "albertini",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "isabela merced",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "anne hathaway",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "vigilance précipitations",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "il vangelo di oggi",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "mottola",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "israele",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "the four seasons serie",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "diffidati serie a",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "colombia",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "michael kors",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "eurovision",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "ticket master",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "raffaele palladino",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "x",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "milannews",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "zhao xintong",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "fcsb",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "the couple chiude",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-06 19:03:02",
  "trends_count": 213,
  "top_score": 9.82110229901817,
  "runtime_minutes": 4.4911186297734575,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano l'emergere di tre grandi temi nel panorama delle tendenze: eventi sportivi di primo piano, personalità culturali influenti e movimenti nel mondo televisivo. Il calcio sembra mantenere un forte dominio, con \"Inter - Barcellona\" al centro dell'interesse collettivo, suggerendo una narrazione costante sul campo internazionale. Parallelamente, le figure di spicco come \"Rihanna\" continuano a catturare l'immaginazione nel regno della musica e della moda.\n\nTra le opportunità più promettenti per Google Discover appare il trend delle \"Frecce Tricolori\" (#1), con un DScore elevato di 9.8 e una bassa saturazione, offrendo un fertile terreno per contenuti creativi che celebrano la cultura e l'orgoglio nazionale. D'altro canto, la saturazione intensa intorno al brand \"Merz\" (#8) con oltre 2.470 risultati suggerisce di procedere con cautela, poiché l'elevata competizione potrebbe soffocare nuovi contenuti.\n\nIn questo vivace mosaico di tendenze, coloro che cercano di catturare l'attenzione devono navigare sapientemente tra interesse autentico e competizione, per creare storie che risuonano e si diffondono oltre la semplice novità."
};
