const trendData = [
  {
    "rank": 45,
    "entity": "sport",
    "discover_score": 17.60546489627841,
    "score_1h": 41.69827586206896,
    "score_4h": 19.548319327731093,
    "score_7d": 40.22770498732037,
    "extracted_entities": "Sport - Attività fisica - Competizioni - Atleti - Benessere",
    "saturation_score": 5440.0
  },
  {
    "rank": 29,
    "entity": "diretta gol",
    "discover_score": 7.401883945431705,
    "score_1h": 1.353448275862069,
    "score_4h": 28.32563025210084,
    "score_7d": 13.117744435052128,
    "extracted_entities": "Diretta - Gol - Calcio - Partite - Risultati",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "bet365",
    "discover_score": 6.229457427958098,
    "score_1h": 32.44827586206897,
    "score_4h": 6.003973137372104,
    "score_7d": 17.356068610876303,
    "extracted_entities": "bet365 - Scommesse online - Giochi d'azzardo - Bookmaker - Casinò online",
    "saturation_score": 8.0
  },
  {
    "rank": 35,
    "entity": "mediaset",
    "discover_score": 5.914616714085297,
    "score_1h": 35.55172413793103,
    "score_4h": 11.97459653317394,
    "score_7d": 14.301141166525781,
    "extracted_entities": "Mediaset - Televisione - Italia - Canali televisivi - Programmi TV",
    "saturation_score": 941.0
  },
  {
    "rank": 3,
    "entity": "genoa - lazio",
    "discover_score": 5.787982355931179,
    "score_1h": 55.46551724137932,
    "score_4h": 36.430672268907564,
    "score_7d": 2.6671773739081432,
    "extracted_entities": "Genoa - Lazio - Serie A - Partita di calcio - Campionato italiano",
    "saturation_score": 659.0
  },
  {
    "rank": 6,
    "entity": "juventus",
    "discover_score": 5.364408694240154,
    "score_1h": 47.46551724137931,
    "score_4h": 31.75840336134454,
    "score_7d": 4.079881656804734,
    "extracted_entities": "Juventus - Calcio - Serie A - Squadra di calcio - Torino",
    "saturation_score": 1060.0
  },
  {
    "rank": 4,
    "entity": "cagliari - fiorentina",
    "discover_score": 4.808162757428973,
    "score_1h": 55.577586206896555,
    "score_4h": 30.426470588235293,
    "score_7d": 2.8037827557058326,
    "extracted_entities": "Cagliari - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 424.0
  },
  {
    "rank": 1,
    "entity": "parma - juventus",
    "discover_score": 4.7306051009530705,
    "score_1h": 46.12931034482759,
    "score_4h": 29.310924369747898,
    "score_7d": 1.1863905325443787,
    "extracted_entities": "Parma - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 426.0
  },
  {
    "rank": 8,
    "entity": "classifica serie a",
    "discover_score": 4.588197890497532,
    "score_1h": 34.46551724137931,
    "score_4h": 13.304621848739496,
    "score_7d": 7.199968300929839,
    "extracted_entities": "Classifica - Serie A - Calcio - Campionato - Squadre",
    "saturation_score": 7.0
  },
  {
    "rank": 23,
    "entity": "serie a classifica",
    "discover_score": 4.162882035245563,
    "score_1h": 26.45689655172414,
    "score_4h": 13.29621848739496,
    "score_7d": 8.506744857706396,
    "extracted_entities": "Serie A - Classifica - Calcio - Campionato Italiano",
    "saturation_score": 3.0
  },
  {
    "rank": 16,
    "entity": "lazio genoa",
    "discover_score": 4.099595764999474,
    "score_1h": 38.603448275862064,
    "score_4h": 36.613445378151255,
    "score_7d": 2.646449704142012,
    "extracted_entities": "Lazio - Genoa - Calcio - Serie A - Partita",
    "saturation_score": 5.0
  },
  {
    "rank": 24,
    "entity": "partite oggi",
    "discover_score": 3.896217242566608,
    "score_1h": 35.793103448275865,
    "score_4h": 4.98109243697479,
    "score_7d": 10.08317483798253,
    "extracted_entities": "Partite - Oggi - Eventi sportivi",
    "saturation_score": 4.0
  },
  {
    "rank": 2,
    "entity": "inter - milan",
    "discover_score": 3.8080971508472423,
    "score_1h": 52.66379310344828,
    "score_4h": 17.993697478991596,
    "score_7d": 2.5857988165680474,
    "extracted_entities": "Inter - Milan - Derby - Serie A - Calcio",
    "saturation_score": 1170.0
  },
  {
    "rank": 9,
    "entity": "classifica di serie a",
    "discover_score": 3.5682479845454873,
    "score_1h": 34.28448275862069,
    "score_4h": 12.021008403361344,
    "score_7d": 5.705709354747817,
    "extracted_entities": "Classifica - Serie A - Calcio - Campionato - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "serie a tim",
    "discover_score": 3.253762311783351,
    "score_1h": 12.189655172413794,
    "score_4h": 1.2878151260504203,
    "score_7d": 9.865525500140885,
    "extracted_entities": "Serie A - TIM - Calcio - Campionato italiano",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "terremoto istanbul",
    "discover_score": 3.15822736678838,
    "score_1h": 4.810344827586206,
    "score_4h": 29.235294117647058,
    "score_7d": 1.0076429980276134,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": 10.0
  },
  {
    "rank": 7,
    "entity": "torino - udinese",
    "discover_score": 2.9864437693507893,
    "score_1h": 44.05172413793103,
    "score_4h": 25.82142857142857,
    "score_7d": 1.483269935193012,
    "extracted_entities": "Torino - Udinese - Calcio - Serie A - Partita",
    "saturation_score": 369.0
  },
  {
    "rank": 28,
    "entity": "mediaset infinity",
    "discover_score": 2.681621997962537,
    "score_1h": 34.75,
    "score_4h": 12.30252100840336,
    "score_7d": 5.2064842209072975,
    "extracted_entities": "Mediaset - Infinity - Streaming - Intrattenimento",
    "saturation_score": 7.0
  },
  {
    "rank": 25,
    "entity": "canale 5",
    "discover_score": 2.217707931150531,
    "score_1h": 30.86206896551724,
    "score_4h": 5.453781512605042,
    "score_7d": 5.514088475626937,
    "extracted_entities": "Canale 5 - Mediaset - Televisione - Programmi TV - Italia",
    "saturation_score": 347.0
  },
  {
    "rank": 32,
    "entity": "expedition 33",
    "discover_score": 1.5683893919249197,
    "score_1h": 3.4482758620689653,
    "score_4h": 1.0210084033613445,
    "score_7d": 5.00575866441251,
    "extracted_entities": "Expedition 33 - Stazione Spaziale Internazionale - NASA - Equipaggio - Missione spaziale",
    "saturation_score": 51.0
  },
  {
    "rank": 34,
    "entity": "mediaset play",
    "discover_score": 1.4153937428122827,
    "score_1h": 22.043103448275865,
    "score_4h": 5.659663865546218,
    "score_7d": 3.3099816849816848,
    "extracted_entities": "Mediaset - Streaming - TV - Intrattenimento",
    "saturation_score": 3.0
  },
  {
    "rank": 26,
    "entity": "inter vs milan",
    "discover_score": 1.3215410299503545,
    "score_1h": 12.0,
    "score_4h": 5.28781512605042,
    "score_7d": 2.916966046773739,
    "extracted_entities": "Inter - Milan - Derby - Serie A - Calcio",
    "saturation_score": 5.0
  },
  {
    "rank": 13,
    "entity": "btp italia",
    "discover_score": 1.2270389380026183,
    "score_1h": 9.14655172413793,
    "score_4h": 3.684873949579832,
    "score_7d": 2.5955903071287687,
    "extracted_entities": "BTP - Italia - Titoli di Stato",
    "saturation_score": 92.0
  },
  {
    "rank": 33,
    "entity": "diao",
    "discover_score": 1.2261857304431443,
    "score_1h": 4.887931034482758,
    "score_4h": 3.7605042016806722,
    "score_7d": 3.16927303465765,
    "extracted_entities": "Diao",
    "saturation_score": 10.0
  },
  {
    "rank": 39,
    "entity": "serie c girone b",
    "discover_score": 1.1744952377369235,
    "score_1h": 2.0344827586206895,
    "score_4h": 0.5420168067226891,
    "score_7d": 3.9841856861087632,
    "extracted_entities": "Serie C - Girone B - Calcio - Campionato - Squadre",
    "saturation_score": 33.0
  },
  {
    "rank": 22,
    "entity": "canale 5 diretta",
    "discover_score": 1.0888432969827506,
    "score_1h": 15.103448275862068,
    "score_4h": 3.745798319327731,
    "score_7d": 2.481508875739645,
    "extracted_entities": "Canale 5 - Diretta - Streaming - Programmazione",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "previsioni grandine",
    "discover_score": 1.0741615488154528,
    "score_1h": 1.5086206896551724,
    "score_4h": 7.161764705882353,
    "score_7d": 1.2509861932938855,
    "extracted_entities": "Previsioni - Grandine - Meteo",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "risultato juve",
    "discover_score": 1.0079816307793847,
    "score_1h": 27.10344827586207,
    "score_4h": 10.902350479940932,
    "score_7d": 0.9344181459566074,
    "extracted_entities": "Juventus - Risultati - Calcio - Serie A - Partite",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "freccia vallone 2025",
    "discover_score": 0.9764860986530965,
    "score_1h": 0.16379310344827586,
    "score_4h": 1.754201680672269,
    "score_7d": 2.415187376725838,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 56.0
  },
  {
    "rank": 10,
    "entity": "kean",
    "discover_score": 0.8555051333722008,
    "score_1h": 14.724137931034482,
    "score_4h": 7.865546218487395,
    "score_7d": 0.5248309382924767,
    "extracted_entities": "Moise Kean - Calcio - Juventus - Serie A - Attaccante",
    "saturation_score": 238.0
  },
  {
    "rank": 30,
    "entity": "campobasso - perugia",
    "discover_score": 0.8446294309546475,
    "score_1h": 0.5948275862068966,
    "score_4h": 3.1470588235294117,
    "score_7d": 1.9884122287968442,
    "extracted_entities": "Campobasso - Perugia - Città - Confronto",
    "saturation_score": 84.0
  },
  {
    "rank": 48,
    "entity": "seria a",
    "discover_score": 0.6880000064315374,
    "score_1h": 0.793103448275862,
    "score_4h": 1.4580974649273934,
    "score_7d": 2.063627078050155,
    "extracted_entities": "Serie A - Calcio - Campionato italiano",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "arsenal - crystal palace",
    "discover_score": 0.6412229204368358,
    "score_1h": 22.793103448275865,
    "score_4h": 3.4731637424844415,
    "score_7d": 1.0136306001690618,
    "extracted_entities": "Arsenal - Crystal Palace - Partita di calcio - Premier League",
    "saturation_score": 30.0
  },
  {
    "rank": 41,
    "entity": "ternana - pianese",
    "discover_score": 0.5768456533736224,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.7142857142857143,
    "score_7d": 1.7844463229078613,
    "extracted_entities": "Ternana - Pianese - Calcio - Partita - Serie C",
    "saturation_score": 135.0
  },
  {
    "rank": 18,
    "entity": "parma vs juventus",
    "discover_score": 0.5756660946625476,
    "score_1h": 15.31896551724138,
    "score_4h": 7.863067402693295,
    "score_7d": 0.05029585798816568,
    "extracted_entities": "Parma - Juventus - Partita di calcio - Serie A - Rivalità calcistica",
    "saturation_score": 5.0
  },
  {
    "rank": 49,
    "entity": "arezzo - lucchese",
    "discover_score": 0.4509140357689653,
    "score_1h": 0.29310344827586204,
    "score_4h": 1.9747899159663866,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Arezzo - Lucchese - Calcio - Partita - Serie C",
    "saturation_score": 40.0
  },
  {
    "rank": 37,
    "entity": "srh vs mi",
    "discover_score": 0.4221104585484548,
    "score_1h": 1.25,
    "score_4h": 2.1238440983087794,
    "score_7d": 0.7788637644406875,
    "extracted_entities": "Cricket - Sunrisers Hyderabad - Mumbai Indians - Indian Premier League - Partita",
    "saturation_score": 3.0
  },
  {
    "rank": 12,
    "entity": "stefano accorsi",
    "discover_score": 0.40584237443486615,
    "score_1h": 6.818965517241379,
    "score_4h": 2.184873949579832,
    "score_7d": 0.4823541842772612,
    "extracted_entities": "Stefano Accorsi - Attore - Cinema italiano - Serie TV - Teatro",
    "saturation_score": 8.0
  },
  {
    "rank": 47,
    "entity": "bertinoro",
    "discover_score": 0.3861429539959945,
    "score_1h": 1.9655172413793105,
    "score_4h": 0.1092436974789916,
    "score_7d": 1.2231790645252183,
    "extracted_entities": "Bertinoro - Comune - Emilia-Romagna - Turismo - Vino",
    "saturation_score": 35.0
  },
  {
    "rank": 20,
    "entity": "carlos santana",
    "discover_score": 0.3825789100707615,
    "score_1h": 0.7241379310344828,
    "score_4h": 1.491596638655462,
    "score_7d": 0.6661207382361228,
    "extracted_entities": "Carlos Santana - Musicista - Chitarrista - Rock - Latin Music",
    "saturation_score": 156.0
  },
  {
    "rank": 15,
    "entity": "getafe - real madrid",
    "discover_score": 0.31657578145373994,
    "score_1h": 5.431034482758621,
    "score_4h": 0.476890756302521,
    "score_7d": 0.6363412228796844,
    "extracted_entities": "Getafe - Real Madrid - Partita di calcio - La Liga",
    "saturation_score": 42.0
  },
  {
    "rank": 21,
    "entity": "atletico bilbao - las palmas",
    "discover_score": 0.3034703844381444,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.8025210084033614,
    "score_7d": 0.5580269089884475,
    "extracted_entities": "Athletic Bilbao - Las Palmas - Calcio - Partita - Liga Spagnola",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "vis pesaro - spal",
    "discover_score": 0.26665384236718437,
    "score_1h": 3.1293103448275863,
    "score_4h": 3.027310924369748,
    "score_7d": 0.029585798816568046,
    "extracted_entities": "Vis Pesaro - SPAL - Calcio - Partita",
    "saturation_score": 44.0
  },
  {
    "rank": 27,
    "entity": "nuovo condono fiscale",
    "discover_score": 0.2624552208829875,
    "score_1h": 0.75,
    "score_4h": 0.12815126050420167,
    "score_7d": 0.611439842209073,
    "extracted_entities": "Condono fiscale - Fisco - Tasse - Governo",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "legnago - pescara",
    "discover_score": 0.24145444538516347,
    "score_1h": 0.646551724137931,
    "score_4h": 2.346638655462185,
    "score_7d": 0.056371513102282333,
    "extracted_entities": "Legnago - Pescara - Calcio - Partita - Serie C",
    "saturation_score": 47.0
  },
  {
    "rank": 19,
    "entity": "federico cinà",
    "discover_score": 0.2372670768692056,
    "score_1h": 0.0,
    "score_4h": 0.04201680672268907,
    "score_7d": 0.4879719639335024,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 54.0
  },
  {
    "rank": 40,
    "entity": "celta vigo - villarreal",
    "discover_score": 0.2347050750346118,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.5136658213581291,
    "extracted_entities": "Celta Vigo - Villarreal - Partita di calcio - La Liga",
    "saturation_score": 5.0
  },
  {
    "rank": 42,
    "entity": "il paradiso delle signore programmazione",
    "discover_score": 0.21075778184210026,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.10674730143103266,
    "score_7d": 0.4552690898844745,
    "extracted_entities": "Il paradiso delle signore - Programmazione - Serie TV",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "sestri levante - ascoli",
    "discover_score": 0.18285428301652493,
    "score_1h": 0.8189655172413792,
    "score_4h": 1.0164814879926867,
    "score_7d": 0.12174204001127079,
    "extracted_entities": "Sestri Levante - Ascoli",
    "saturation_score": 45.0
  },
  {
    "rank": 44,
    "entity": "dove guardare inter - ac milan",
    "discover_score": 0.13979202624589823,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.680672268907563,
    "score_7d": 0.020727669766131305,
    "extracted_entities": "Inter - AC Milan - Partita - Streaming - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "torres",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "stipendio papa",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "gubbio milan futuro",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "torino vs udinese",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "facies ippocratica cos'è",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "clair obscur expedition 33",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "radio 1",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "fortitudo bologna - rbr",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "multan sultans vs islamabad united",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "alberto costa",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "pàpa francesco",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "alavés - real sociedad",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "pineto - entella",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "genoa oggi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "affari tuoi stasera",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "accorsi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "test",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "laetitia casta",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "gad lerner",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "allenatore parma",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "diffidati serie a",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "zion suzuki",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "classifica",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "ficulle",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "mediaset streaming",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "varesenews",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "bonus bollette 2025",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "anderlecht - gent",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "reda belahyane",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "james senese",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "olga lyubimova",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "pontedera - rimini",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "don giulio mignani",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "bublik",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "crimea",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "chi l'ha visto stasera",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "milena vukotic",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "santo del giorno",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "atp madrid 2025 risultati",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "rai radio 1",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "david di donatello",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "blue bloods",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "lakers - timberwolves",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "meteo torino",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "lucca udinese",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "anna kalinskaya",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "daga",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "mauricio pellegrino",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "danilovic",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "crespo",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "abbiategrasso",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "luisa todini",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "istanbul deprem",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "conegliano",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "roberto piccoli",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "tennis madrid",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "giovanni leoni",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "terremoto istambul",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "rio ave - sporting",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "laslo đere",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "ghost of yotei",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "tarjeta roja",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "thunder - grizzlies",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "giornata mondiale del libro 2025",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "soriano nel cimino",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "athletic club vs las palmas",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "tesla",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "barcellona maiorca",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "gianni sperti",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "elisa girotto",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "randal kolo muani",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "pacers - bucks",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "affari tuoi",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "potapova",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "marco negri",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "pianura padana",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "partite di oggi",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "acconto irpef",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "davide barzan",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "polymarket",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "marco frigo",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "castellanos",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "weather",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "luigi morato",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "i peccatori film",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "concorso 4617 allievi agenti bando",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "camila giorgi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "lakers",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "emma raducanu",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "nba",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "fuochi d'artificio",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "manchester city",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "jovanotti",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "pecco bagnaia",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "etna",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "gibellina",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "abhinav manohar",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "donato metallo sindaco di racale",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "milei",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "robert de niro",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "madrid atp",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "gewitterwarnung",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "nick pope",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "guardie svizzere",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "nba playoff",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "matteo gigante",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "antonio pappalardo",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "laliga",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "luisa ranieri",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "niccolò fabi",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "child care",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "jack ryan",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "nantes psg",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "papa francesco israele condoglianze",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "maria corleone",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "streaming",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "emanuela orlandi vaticano",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "mattia almaviva",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "tradingview",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "lotto oggi estrazioni oggi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "jeremy irons",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "ceccon",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "patrizia reggiani",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "pahalgam",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "risultati nba",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "cristiano malgioglio",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "rai sport diretta",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "christopher o'connell",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "gargano",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "cerignola",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "manchester city – aston villa",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "copa libertadores",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "open madrid",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "thunderbolts",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "santoro",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "brocchi",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "department store",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "bersani",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "gabi pallavolo",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "livorno",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "veltroni",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "ansu fati",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "clemente mastella",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "vespa bruno",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "euroflora 2025",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "corrado augias",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "bertone cardinale",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "vecchioni",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "fc barcelona",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "carlo cracco",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "chuck norris",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "massimo franco",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "giovanni storti",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "meteo rimini",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "milei papa francesco",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "ncis",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "diaco",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "kvitova",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "lilli gruber",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "la russa",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "pedro pascal",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "hugh grant",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "liam gallagher",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "buongiorno mercoledi 23 aprile 2025",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "financial times",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "this is us",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "the last of us streaming",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "andor",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "meteo trentino",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "bitcoin",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "alessandria",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "keira knightley",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "scola cardinale",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 19:10:55",
  "trends_count": 233,
  "top_score": 17.60546489627841,
  "runtime_minutes": 12.608662501970928,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le correnti dei trend italiani fluiscono fortemente verso lo sport, la televisione e il meteo. Nel regno dello sport, il calcio emerge come il sovrano indiscusso, con scontri titanici come 'Inter - Milan' e performance di squadre risonanti come 'Juventus'. Anche l'influenza dei media è potente, con 'Mediaset' che regna, veicolando contenuti affascinanti su varie piattaforme. Immancabile, poi, la presenza incerta della natura, rappresentata da eventi sismici come il 'terremoto a Istanbul'.\n\nTra i sentieri di opportunità, un argomento che brilla intensamente è 'diretta gol' (#2), con un DScore robusto e saturazione minima, un presagio di coinvolgimento immediato e vasto nel mondo calcio. Un'altra stella nascente è 'terremoto istanbul' (#16) data l'attualità intrinseca e la bassa saturazione.\n\nTuttavia, la prudenza è d'obbligo nel calarci nel caotico oceano di 'sport' (#1), dove l'immensa copertura potrebbe sommergere nuovi contenuti vanificando il loro potenziale, o nella passione momentanea come in 'inter - milan' (#13), già sovraesposta dalla competizione mediatica.\n\nConsiglio profetico: calibrate le vostre vele verso nicchie meno affollate, plasmando narrazioni autentiche e puntuali per emergere nei flussi di Google Discover."
};
