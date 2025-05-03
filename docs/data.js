const trendData = [
  {
    "rank": 50,
    "entity": "germania",
    "discover_score": 12.409299531995435,
    "score_1h": 20.448275862068968,
    "score_4h": 8.638655462184873,
    "score_7d": 32.47041420118343,
    "extracted_entities": "Germania - Berlino - Economia - Politica - Cultura",
    "saturation_score": 723.0
  },
  {
    "rank": 46,
    "entity": "referendum 2025",
    "discover_score": 9.560952788390018,
    "score_1h": 8.71551724137931,
    "score_4h": 6.320619879751064,
    "score_7d": 25.875739644970412,
    "extracted_entities": "Referendum - 2025 - Votazione - Elezioni",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "trump papa",
    "discover_score": 6.539510770696349,
    "score_1h": 6.706896551724138,
    "score_4h": 11.123949579831933,
    "score_7d": 13.03846153846154,
    "extracted_entities": "Donald Trump - Papa - Politica - Religione",
    "saturation_score": 8.0
  },
  {
    "rank": 31,
    "entity": "praga",
    "discover_score": 5.844766431954292,
    "score_1h": 11.0,
    "score_4h": 2.5315126050420167,
    "score_7d": 16.263313609467456,
    "extracted_entities": "Praga - Repubblica Ceca - Turismo - Storia - Cultura",
    "saturation_score": 40.0
  },
  {
    "rank": 24,
    "entity": "napoli lecce",
    "discover_score": 5.68607205174354,
    "score_1h": 40.87068965517241,
    "score_4h": 42.54621848739496,
    "score_7d": 5.508875739644971,
    "extracted_entities": "Napoli - Lecce - Calcio - Serie A - Partita",
    "saturation_score": 5.0
  },
  {
    "rank": 35,
    "entity": "giro d'italia 2025",
    "discover_score": 4.429665963781235,
    "score_1h": 5.646551724137931,
    "score_4h": 2.6911764705882355,
    "score_7d": 12.928994082840235,
    "extracted_entities": "Giro d'Italia - 2025 - Ciclismo - Evento sportivo - Italia",
    "saturation_score": 43.0
  },
  {
    "rank": 4,
    "entity": "scossa terremoto bologna",
    "discover_score": 3.3704545439920994,
    "score_1h": 54.38793103448276,
    "score_4h": 19.03361344537815,
    "score_7d": 2.6508875739644973,
    "extracted_entities": "Scossa - Terremoto - Bologna",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "torino - venezia",
    "discover_score": 3.2419750691901124,
    "score_1h": 6.551724137931034,
    "score_4h": 6.090336134453782,
    "score_7d": 3.272189349112426,
    "extracted_entities": "Torino - Venezia - Città - Viaggio - Turismo",
    "saturation_score": 884.0
  },
  {
    "rank": 2,
    "entity": "cagliari - udinese",
    "discover_score": 3.064146765655371,
    "score_1h": 55.53448275862069,
    "score_4h": 19.180672268907564,
    "score_7d": 1.4644970414201184,
    "extracted_entities": "Cagliari - Udinese - Partita di calcio - Serie A",
    "saturation_score": 203.0
  },
  {
    "rank": 11,
    "entity": "inter - fiorentina",
    "discover_score": 2.8415770596449157,
    "score_1h": 7.198275862068966,
    "score_4h": 20.880252100840337,
    "score_7d": 2.5147928994082838,
    "extracted_entities": "Inter - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 47.0
  },
  {
    "rank": 6,
    "entity": "kimi antonelli",
    "discover_score": 2.409405983157064,
    "score_1h": 7.2844827586206895,
    "score_4h": 8.361344537815127,
    "score_7d": 3.6183431952662723,
    "extracted_entities": "Kimi Antonelli - Pilota - Motorsport - Formula 1",
    "saturation_score": 285.0
  },
  {
    "rank": 3,
    "entity": "parma - como",
    "discover_score": 2.383465359368558,
    "score_1h": 58.560344827586206,
    "score_4h": 16.115546218487395,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Parma - Como - Calcio - Serie B - Partita",
    "saturation_score": 129.0
  },
  {
    "rank": 48,
    "entity": "hong kong",
    "discover_score": 2.287200818741847,
    "score_1h": 2.6551724137931036,
    "score_4h": 0.16596638655462187,
    "score_7d": 7.9674556213017755,
    "extracted_entities": "Hong Kong - Cina - Turismo - Economia - Proteste",
    "saturation_score": 41.0
  },
  {
    "rank": 9,
    "entity": "allerta vento",
    "discover_score": 2.127601406680873,
    "score_1h": 20.474137931034484,
    "score_4h": 18.613445378151262,
    "score_7d": 1.3106508875739644,
    "extracted_entities": "Allerta - Vento - Meteo - Previsioni",
    "saturation_score": 2.0
  },
  {
    "rank": 18,
    "entity": "vanoli",
    "discover_score": 1.9532605127213527,
    "score_1h": 0.9396551724137931,
    "score_4h": 2.113515699166696,
    "score_7d": 5.298816568047338,
    "extracted_entities": "Vanoli - Basket - Cremona - Serie A - Squadra",
    "saturation_score": 281.0
  },
  {
    "rank": 12,
    "entity": "parma como",
    "discover_score": 1.8232774957481281,
    "score_1h": 57.79310344827586,
    "score_4h": 16.03361344537815,
    "score_7d": 1.331360946745562,
    "extracted_entities": "Parma - Como - Calcio - Serie B - Partita",
    "saturation_score": 161.0
  },
  {
    "rank": 15,
    "entity": "aston villa - fulham",
    "discover_score": 1.8176346000878285,
    "score_1h": 20.31896551724138,
    "score_4h": 17.84033613445378,
    "score_7d": 1.1449704142011834,
    "extracted_entities": "Aston Villa - Fulham - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 13,
    "entity": "alavés - atlético madrid",
    "discover_score": 1.5337518835156736,
    "score_1h": 14.491379310344827,
    "score_4h": 14.044117647058822,
    "score_7d": 1.0946745562130178,
    "extracted_entities": "Alavés - Atlético Madrid - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "formula e",
    "discover_score": 1.4967837135761322,
    "score_1h": 25.060344827586206,
    "score_4h": 2.1792218979642066,
    "score_7d": 4.576923076923077,
    "extracted_entities": "Formula 1 - Corse automobilistiche - Campionato mondiale",
    "saturation_score": 61.0
  },
  {
    "rank": 22,
    "entity": "musetti draper",
    "discover_score": 1.4843147389345792,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.18067226890756302,
    "score_7d": 4.662721893491124,
    "extracted_entities": "Lorenzo Musetti - Jack Draper - Tennis",
    "saturation_score": 48.0
  },
  {
    "rank": 26,
    "entity": "yellowstone",
    "discover_score": 1.3746212210711892,
    "score_1h": 17.370689655172413,
    "score_4h": 3.865546218487395,
    "score_7d": 3.455621301775148,
    "extracted_entities": "Yellowstone - Parco Nazionale - Serie TV - Eruzione vulcanica - Turismo",
    "saturation_score": 76.0
  },
  {
    "rank": 7,
    "entity": "bonus anziani 2025",
    "discover_score": 1.357037259294338,
    "score_1h": 1.103448275862069,
    "score_4h": 3.197478991596639,
    "score_7d": 2.6568047337278107,
    "extracted_entities": "Bonus - Anziani - 2025",
    "saturation_score": 5.0
  },
  {
    "rank": 8,
    "entity": "manchester city - wolverhampton",
    "discover_score": 1.0855643732610427,
    "score_1h": 0.5086206896551724,
    "score_4h": 0.15084736823599734,
    "score_7d": 2.8431952662721893,
    "extracted_entities": "Manchester City - Wolverhampton - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 28,
    "entity": "sbk cremona",
    "discover_score": 1.0805814151331945,
    "score_1h": 2.6206896551724137,
    "score_4h": 0.6491596638655462,
    "score_7d": 3.4289940828402368,
    "extracted_entities": "SBK - Cremona - Superbike - Evento motociclistico",
    "saturation_score": 10.0
  },
  {
    "rank": 27,
    "entity": "bologna juventus",
    "discover_score": 1.0280933270404236,
    "score_1h": 0.7672413793103449,
    "score_4h": 1.6617647058823528,
    "score_7d": 2.955621301775148,
    "extracted_entities": "Bologna - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 102.0
  },
  {
    "rank": 10,
    "entity": "andrea miceli",
    "discover_score": 1.0274108646635685,
    "score_1h": 0.6724137931034482,
    "score_4h": 1.25,
    "score_7d": 2.5177514792899407,
    "extracted_entities": "Andrea Miceli",
    "saturation_score": 41.0
  },
  {
    "rank": 5,
    "entity": "rb lipsia - bayern monaco",
    "discover_score": 1.0171063571046548,
    "score_1h": 35.01724137931035,
    "score_4h": 8.497899159663866,
    "score_7d": 0.5443786982248521,
    "extracted_entities": "RB Lipsia - Bayern Monaco - Calcio - Bundesliga - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 34,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.9006470320729172,
    "score_1h": 5.913793103448276,
    "score_4h": 1.013281881790373,
    "score_7d": 2.8195266272189348,
    "extracted_entities": "Anticipazioni - Beautiful - Soap Opera - Trame - Episodi",
    "saturation_score": 4.0
  },
  {
    "rank": 32,
    "entity": "frecce tricolori catania",
    "discover_score": 0.8555765866522708,
    "score_1h": 2.1724137931034484,
    "score_4h": 0.707983193277311,
    "score_7d": 2.715976331360947,
    "extracted_entities": "Frecce Tricolori - Catania - Aeronautica Militare - Esibizione Aerea",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "martina colombari",
    "discover_score": 0.8368575676865599,
    "score_1h": 0.0,
    "score_4h": 0.012605042016806723,
    "score_7d": 2.5502958579881656,
    "extracted_entities": "Martina Colombari - Personaggio pubblico - Attrice - Modella",
    "saturation_score": 37.0
  },
  {
    "rank": 36,
    "entity": "gp miami orari",
    "discover_score": 0.7954576195567599,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.47058823529411764,
    "score_7d": 2.621301775147929,
    "extracted_entities": "Gran Premio - Miami - Orari",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "guardavalle marina",
    "discover_score": 0.5505260569319648,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.2163865546218489,
    "score_7d": 1.3461538461538463,
    "extracted_entities": "Guardavalle Marina - Calabria - Turismo - Spiagge - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 19,
    "entity": "simona tagli",
    "discover_score": 0.5413324982368615,
    "score_1h": 13.310344827586206,
    "score_4h": 3.994084244576492,
    "score_7d": 0.6035502958579881,
    "extracted_entities": "Simona Tagli - Personaggio televisivo - Italia - Anni '90 - Spettacolo",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "paris fc",
    "discover_score": 0.5165932534044849,
    "score_1h": 1.7155172413793103,
    "score_4h": 0.5462184873949579,
    "score_7d": 1.4319526627218935,
    "extracted_entities": "Paris FC - Calcio - Ligue 2",
    "saturation_score": 35.0
  },
  {
    "rank": 16,
    "entity": "scossa terremoto cile",
    "discover_score": 0.5032670098539147,
    "score_1h": 0.07758620689655173,
    "score_4h": 0.17857142857142858,
    "score_7d": 1.3846153846153846,
    "extracted_entities": "Scossa - Terremoto - Cile",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "giovanardi",
    "discover_score": 0.5009849078978139,
    "score_1h": 0.49137931034482757,
    "score_4h": 1.2605042016806722,
    "score_7d": 1.2455621301775148,
    "extracted_entities": "Giovanardi - Politica italiana - Senatore - Governo italiano - Legge Fini-Giovanardi",
    "saturation_score": 59.0
  },
  {
    "rank": 25,
    "entity": "gianni alemanno",
    "discover_score": 0.4374481031063282,
    "score_1h": 1.5344827586206897,
    "score_4h": 0.39495798319327735,
    "score_7d": 1.2041420118343196,
    "extracted_entities": "Gianni Alemanno - Politica - Italia",
    "saturation_score": 26.0
  },
  {
    "rank": 47,
    "entity": "roma fiorentina",
    "discover_score": 0.4331370358927671,
    "score_1h": 2.025862068965517,
    "score_4h": 0.8172268907563026,
    "score_7d": 1.2218934911242603,
    "extracted_entities": "Roma - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 209.0
  },
  {
    "rank": 20,
    "entity": "cristóbal lópez romero",
    "discover_score": 0.4205370855989682,
    "score_1h": 0.6637931034482758,
    "score_4h": 1.0903361344537814,
    "score_7d": 0.9053254437869822,
    "extracted_entities": "Cristóbal López Romero - Persona",
    "saturation_score": 3.0
  },
  {
    "rank": 49,
    "entity": "dengue",
    "discover_score": 0.32730168394841275,
    "score_1h": 1.7672413793103448,
    "score_4h": 0.5084033613445378,
    "score_7d": 0.8727810650887574,
    "extracted_entities": "Dengue - Malattia - Virus - Zanzare - Sintomi",
    "saturation_score": 150.0
  },
  {
    "rank": 30,
    "entity": "popovich",
    "discover_score": 0.32336225090683524,
    "score_1h": 2.8620689655172415,
    "score_4h": 0.5462184873949579,
    "score_7d": 0.7603550295857988,
    "extracted_entities": "Gregg Popovich - NBA - San Antonio Spurs",
    "saturation_score": 95.0
  },
  {
    "rank": 39,
    "entity": "colombaccio",
    "discover_score": 0.21227040648762277,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.4467455621301775,
    "extracted_entities": "Colombaccio - Uccello - Fauna selvatica - Caccia - Habitat",
    "saturation_score": 3.0
  },
  {
    "rank": 44,
    "entity": "inter verona dove vederla",
    "discover_score": 0.1912933047531525,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.3067226890756303,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "Inter - Verona - Partita - Dove vederla - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "leicester city - southampton",
    "discover_score": 0.18721777273331858,
    "score_1h": 3.5086206896551726,
    "score_4h": 0.5315126050420168,
    "score_7d": 0.23964497041420119,
    "extracted_entities": "Leicester City - Southampton - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "wind warning",
    "discover_score": 0.16837784047374868,
    "score_1h": 0.0,
    "score_4h": 0.2226890756302521,
    "score_7d": 0.23076923076923078,
    "extracted_entities": "Wind - Warning - Meteo - Allerta meteo - Sicurezza",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "anthony albanese",
    "discover_score": 0.16555706789539273,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.42016806722689076,
    "score_7d": 0.15976331360946747,
    "extracted_entities": "Anthony Albanese - Politica australiana - Primo Ministro Australia",
    "saturation_score": 30.0
  },
  {
    "rank": 45,
    "entity": "fc st. pauli - stoccarda",
    "discover_score": 0.14878901057193988,
    "score_1h": 1.5,
    "score_4h": 0.7247899159663865,
    "score_7d": 0.047337278106508875,
    "extracted_entities": "FC St. Pauli - Stoccarda - Calcio - Bundesliga",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "rb leipzig – bayern",
    "discover_score": 0.14286201291973194,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.1272189349112426,
    "extracted_entities": "RB Leipzig - Bayern Monaco - Partita di calcio - Bundesliga",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "eurovolley tv",
    "discover_score": 0.12693741955362295,
    "score_1h": 0.06896551724137931,
    "score_4h": 0.17016806722689076,
    "score_7d": 0.07396449704142012,
    "extracted_entities": "EuroVolley - TV - Pallavolo - Streaming",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "lazio - sassuolo",
    "discover_score": 0.12322653326551561,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.2857142857142857,
    "score_7d": 0.03254437869822485,
    "extracted_entities": "Lazio - Sassuolo - Calcio - Serie A - Partita",
    "saturation_score": 5.0
  },
  {
    "rank": 51,
    "entity": "atletico madrid",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "nadia battocletti",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "chuck",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "oroscopo paolo fox leone",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "warriors - rockets",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "villarreal - osasuna",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "dipendenti pubblici taglio cuneo fiscale",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "rockstar games gta 6",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "miracolo di san gennaro",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "championship",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "tyra caterina grant",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "vincenzo nibali",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "steven adams",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "superenalotto 2 maggio 2025",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "porto - moreirense",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "pietrasanta",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "supercoppa italiana",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "niko pandetta",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "nairobi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "dove cameron",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "referendum 8 e 9 giugno",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "rayo vallecano - getafe",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "francesca benedetti",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "ryan garcia",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "giro d'italia 2025 tappe",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "harry",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "mariolina cannuli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "piraino tennis",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "alba parietti",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "svuotare cestino nascosto whatsapp",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "francesco paolantoni",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "kenya",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "bobo vieri",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "gt vs srh",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "bayesian",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "classifica oroscopo settimana",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "buongiorno sabato 3 maggio 2025",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "ben affleck",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "elezioni australia",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "casper ruud",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "paolo fresu",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "roma inter primavera",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "termoli",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "benny blanco",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "ruud krol",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "heidenheim - bochum",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "alianza lima - cienciano",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "senigallia",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "fedez e clara",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "bali",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "man city vs wolves",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "hulk",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "torino",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "lady bloodfight",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "barcellona squalificato",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "cardinale pietro parolin",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "iva zanicchi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "sylvester stallone",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "selena gomez",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "francesco oppini",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "noto",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "nizza - reims",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "blake lively",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "foca monaca",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "manchester city",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "meteo bergamo",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "cremona",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "festa mamma 2025",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "cerundolo",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "peccioli",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "fast food restaurant",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "luca nardi",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "borja mayoral",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "tennis",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "francisco cerúndolo",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "oliver skardy",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "andrea pellegrino",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "oroscopo scorpione",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "oderzo",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "draper ranking",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "cecilia rodriguez",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "internet",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "universitatea craiova - rapid bucureşti",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "briatore",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "michelle hunziker",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "joao mario",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "مان سيتي ضد وولفرهامبتون",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "vigilance précipitations",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "paolo rossi",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "guerra ucraina russia trump",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "manolo santana",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "mazzarri",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "ingv",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "fausto bertinotti",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "pietro genuardi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "tennis live",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "chiara ferragni",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "elongazione",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "doc",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "toronews",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "bill gates",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "trump pope",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "vialli",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "ligue 2",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "danieli",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "gigi riva",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "puntata speciale affari tuoi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "extra omnes",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "mario andretti",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "valeria bartolucci",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "tomaso montanari",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "madonna di campiglio",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "emanuela rossi",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "fondaco dei tedeschi",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "anticipazioni amici settima puntata",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "nainggolan",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "il gusto dell'amore",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "lady gaga",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "tommy cash",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "dino giarrusso",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "zanicchi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "milano meteo",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "pokemon pocket golden week",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "maradona",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "elodie amici",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "geraint thomas",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "elisabetta gardini",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "michelle",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "the four seasons serie",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "sean combs",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "warriors",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "che adams",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "khartoum",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "victoria beckham",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "brain rot",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "ministro urso",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "ozzy osbourne",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "emanuele filiberto di savoia",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "un posto al sole",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "vincicasa",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "katia follesa",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "paolo crepet",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "gerri fiction",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "hamilton ferrari",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "incendio assisi",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "met gala 2025",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "stuttgart",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "bergamo news",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "ambra battilana gutierrez",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "stan wawrinka",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "kylie jenner",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "cardinale gugerotti",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "bruce willis",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "francesco paolantoni e barbara foria",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-03 13:44:33",
  "trends_count": 206,
  "top_score": 12.409299531995435,
  "runtime_minutes": 3.194227699438731,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle tessiture di oggi, nei filamenti di tendenza che avvolgono la nazione, emergono tematiche dominanti: la politica, intrecciata attraverso personaggi illustri e votazioni in divenire; lo sport, che corre calzato su suole di pallone e pedali, alimenta il fervore delle sfide calcistiche e ciclistiche. E ancora, le intensità naturali, con il vento che avverte delle sue danze turbinanti.\n\nNel futuro immediato, l’opportunità per Google Discover è rapida e sicura come un colpo di tacco: il #2 'referendum 2025' si erge con una saturazione quasi inesistente, offrendo un fertile terreno di narrazione. Anche il boato silenzioso della politica in #3 'trump papa', in sede di discussioni tra leader mondiali, stuzzica l’intrigo su Discover, promettendo vasti orizzonti con una copertura ancora pallida.\n\nEppure, occorre cautela. La scossa d’interesse in 'scossa terremoto bologna' #7, pur vibrante, si perde nel ventre oscuro del saturato e potrebbe dissolversi in un’eco effimera, così come l’attenzione verso 'parma como' #16, che rischia di sfiorire nel sovradiscusso.\n\nLa chiave di volta, oh creatori di contenuti, risiede nel cavalcare le onde di novità e unicità, scolpendo per Google Discover articoli che non solo informano, ma incantano."
};
