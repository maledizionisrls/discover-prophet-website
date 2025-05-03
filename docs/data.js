const trendData = [
  {
    "rank": 1,
    "entity": "parma - como",
    "discover_score": 6.613360001843498,
    "score_1h": 57.87931034482759,
    "score_4h": 35.12394957983193,
    "score_7d": 1.9289940828402368,
    "extracted_entities": "Parma - Como - Calcio - Serie B - Partita",
    "saturation_score": 327.0
  },
  {
    "rank": 2,
    "entity": "cagliari - udinese",
    "discover_score": 6.097636163622774,
    "score_1h": 50.11206896551724,
    "score_4h": 39.16176470588235,
    "score_7d": 2.0236686390532546,
    "extracted_entities": "Cagliari - Udinese - Partita di calcio - Serie A",
    "saturation_score": 346.0
  },
  {
    "rank": 5,
    "entity": "scossa terremoto bologna",
    "discover_score": 4.889899503527776,
    "score_1h": 44.5948275862069,
    "score_4h": 41.89075630252101,
    "score_7d": 1.621301775147929,
    "extracted_entities": "Scossa - Terremoto - Bologna",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "trump papa",
    "discover_score": 4.571519512184762,
    "score_1h": 3.206896551724138,
    "score_4h": 2.369747899159664,
    "score_7d": 11.174556213017752,
    "extracted_entities": "Donald Trump - Papa - Politica - Religione",
    "saturation_score": 9.0
  },
  {
    "rank": 23,
    "entity": "bundesliga",
    "discover_score": 3.1196895447116635,
    "score_1h": 27.741379310344826,
    "score_4h": 19.73949579831933,
    "score_7d": 4.325443786982248,
    "extracted_entities": "Bundesliga - Calcio - Germania - Campionato - Squadre",
    "saturation_score": 110.0
  },
  {
    "rank": 6,
    "entity": "rb lipsia - bayern monaco",
    "discover_score": 3.013256191984973,
    "score_1h": 26.991379310344826,
    "score_4h": 23.333910551668367,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "RB Lipsia - Bayern Monaco - Calcio - Bundesliga - Partita",
    "saturation_score": 3.0
  },
  {
    "rank": 13,
    "entity": "allerta vento",
    "discover_score": 2.7768451450023854,
    "score_1h": 16.96551724137931,
    "score_4h": 19.834033613445378,
    "score_7d": 2.769230769230769,
    "extracted_entities": "Allerta - Vento - Meteo - Previsioni",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "kimi antonelli",
    "discover_score": 2.412730068641957,
    "score_1h": 23.29310344827586,
    "score_4h": 7.26890756302521,
    "score_7d": 4.059171597633136,
    "extracted_entities": "Kimi Antonelli - Pilota - Motorsport - Formula 1",
    "saturation_score": 203.0
  },
  {
    "rank": 24,
    "entity": "veronica gentili",
    "discover_score": 2.375120868285806,
    "score_1h": 15.577586206896552,
    "score_4h": 3.241596638655462,
    "score_7d": 6.5,
    "extracted_entities": "Veronica Gentili - Persone - Giornalismo - Televisione",
    "saturation_score": 135.0
  },
  {
    "rank": 19,
    "entity": "yellowstone",
    "discover_score": 2.328368064839168,
    "score_1h": 19.85344827586207,
    "score_4h": 10.903361344537814,
    "score_7d": 4.115384615384615,
    "extracted_entities": "Yellowstone - Serie TV - Parco Nazionale - Kevin Costner - Paramount Network",
    "saturation_score": 229.0
  },
  {
    "rank": 39,
    "entity": "championship",
    "discover_score": 2.130811590833065,
    "score_1h": 0.9568965517241379,
    "score_4h": 1.7899159663865545,
    "score_7d": 6.766272189349112,
    "extracted_entities": "Championship - Torneo - Sport - Competizione",
    "saturation_score": 93.0
  },
  {
    "rank": 4,
    "entity": "lecce - napoli",
    "discover_score": 2.0765461034431594,
    "score_1h": 24.54310344827586,
    "score_4h": 8.132352941176471,
    "score_7d": 2.600591715976331,
    "extracted_entities": "Lecce - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 717.0
  },
  {
    "rank": 3,
    "entity": "torino - venezia",
    "discover_score": 1.9589210353788258,
    "score_1h": 4.0,
    "score_4h": 3.0168067226890756,
    "score_7d": 3.301775147928994,
    "extracted_entities": "Torino - Venezia - Città - Viaggio - Italia",
    "saturation_score": 864.0
  },
  {
    "rank": 38,
    "entity": "como calcio",
    "discover_score": 1.8970216701340727,
    "score_1h": 22.82758620689655,
    "score_4h": 8.352941176470589,
    "score_7d": 4.242603550295858,
    "extracted_entities": "Como - Calcio - Squadra di calcio - Serie B - Stadio Sinigaglia",
    "saturation_score": 4.0
  },
  {
    "rank": 11,
    "entity": "aston villa - fulham",
    "discover_score": 1.6828512916121103,
    "score_1h": 5.793103448275862,
    "score_4h": 10.361344537815127,
    "score_7d": 2.0857988165680474,
    "extracted_entities": "Aston Villa - Fulham - Calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 10,
    "entity": "manchester city - wolverhampton",
    "discover_score": 1.6362768630943656,
    "score_1h": 0.9224137931034482,
    "score_4h": 0.35714285714285715,
    "score_7d": 4.3698224852071,
    "extracted_entities": "Manchester City - Wolverhampton - Partita di calcio - Premier League",
    "saturation_score": 9.0
  },
  {
    "rank": 22,
    "entity": "guardavalle marina",
    "discover_score": 1.5012357782958807,
    "score_1h": 1.4741379310344827,
    "score_4h": 0.9894957983193278,
    "score_7d": 4.491124260355029,
    "extracted_entities": "Guardavalle Marina - Località - Calabria",
    "saturation_score": 10.0
  },
  {
    "rank": 12,
    "entity": "andrea miceli",
    "discover_score": 1.3104314053250217,
    "score_1h": 1.6896551724137931,
    "score_4h": 1.822439436025456,
    "score_7d": 3.260355029585799,
    "extracted_entities": "Andrea Miceli",
    "saturation_score": 78.0
  },
  {
    "rank": 17,
    "entity": "vanoli",
    "discover_score": 1.2898921352020285,
    "score_1h": 0.7844827586206896,
    "score_4h": 1.596638655462185,
    "score_7d": 3.502958579881657,
    "extracted_entities": "Vanoli - Basket - Cremona - Serie A - Squadra",
    "saturation_score": 285.0
  },
  {
    "rank": 15,
    "entity": "inter - fiorentina",
    "discover_score": 1.2602662972305219,
    "score_1h": 0.07758620689655173,
    "score_4h": 6.415966386554622,
    "score_7d": 2.0976331360946743,
    "extracted_entities": "Inter - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 43.0
  },
  {
    "rank": 31,
    "entity": "bologna juventus",
    "discover_score": 1.0945524238102424,
    "score_1h": 2.0517241379310347,
    "score_4h": 0.7394957983193278,
    "score_7d": 3.5118343195266273,
    "extracted_entities": "Bologna - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 87.0
  },
  {
    "rank": 8,
    "entity": "antonella mosetti",
    "discover_score": 0.8968584354275749,
    "score_1h": 17.413793103448278,
    "score_4h": 5.718487394957983,
    "score_7d": 0.970414201183432,
    "extracted_entities": "Antonella Mosetti - Personaggio pubblico - Televisione - Gossip - Italia",
    "saturation_score": 96.0
  },
  {
    "rank": 9,
    "entity": "bonus anziani 2025",
    "discover_score": 0.8653924470032512,
    "score_1h": 5.7155172413793105,
    "score_4h": 5.6722689075630255,
    "score_7d": 0.9437869822485208,
    "extracted_entities": "Bonus - Anziani - 2025",
    "saturation_score": 5.0
  },
  {
    "rank": 18,
    "entity": "martina colombari",
    "discover_score": 0.8313990113172799,
    "score_1h": 2.043103448275862,
    "score_4h": 0.4642857142857143,
    "score_7d": 2.43491124260355,
    "extracted_entities": "Martina Colombari - Personaggio pubblico - Attrice - Modella",
    "saturation_score": 38.0
  },
  {
    "rank": 20,
    "entity": "alavés - atlético madrid",
    "discover_score": 0.7273283199965195,
    "score_1h": 2.4741379310344827,
    "score_4h": 5.313025210084033,
    "score_7d": 0.9082840236686391,
    "extracted_entities": "Alavés - Atlético Madrid - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "rcb vs csk",
    "discover_score": 0.7073891250838243,
    "score_1h": 24.336206896551722,
    "score_4h": 6.500131851903942,
    "score_7d": 0.6094674556213018,
    "extracted_entities": "RCB - CSK - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 26,
    "entity": "leicester city - southampton",
    "discover_score": 0.6913736812510882,
    "score_1h": 1.0775862068965518,
    "score_4h": 2.7205882352941178,
    "score_7d": 1.5118343195266273,
    "extracted_entities": "Leicester City - Southampton - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "giovanardi",
    "discover_score": 0.6800896916553949,
    "score_1h": 0.21551724137931033,
    "score_4h": 0.2306089799936711,
    "score_7d": 2.366863905325444,
    "extracted_entities": "Carlo Giovanardi - Politica italiana - Senatore - Governo italiano - Centrodestra",
    "saturation_score": 66.0
  },
  {
    "rank": 50,
    "entity": "scossa terremoto cile",
    "discover_score": 0.6460970247192179,
    "score_1h": 0.0,
    "score_4h": 0.22058823529411764,
    "score_7d": 2.260355029585799,
    "extracted_entities": "Scossa - Terremoto - Cile",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "paris fc",
    "discover_score": 0.5859964245603131,
    "score_1h": 1.3448275862068966,
    "score_4h": 0.9477075348968039,
    "score_7d": 1.6331360946745563,
    "extracted_entities": "Paris FC - Calcio - Ligue 2 - Squadra di calcio - Francia",
    "saturation_score": 44.0
  },
  {
    "rank": 33,
    "entity": "frecce tricolori catania",
    "discover_score": 0.5075587128332576,
    "score_1h": 3.241379310344828,
    "score_4h": 0.7601350163496361,
    "score_7d": 1.4408284023668638,
    "extracted_entities": "Frecce Tricolori - Catania - Esibizione Aerea - Pattuglia Acrobatica",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "simona tagli",
    "discover_score": 0.5063681962845065,
    "score_1h": 0.5344827586206896,
    "score_4h": 4.494488590415245,
    "score_7d": 0.5532544378698225,
    "extracted_entities": "Simona Tagli - Personaggio televisivo - Italia - Anni '90 - Spettacolo",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "roberto vecchioni",
    "discover_score": 0.48966181326677916,
    "score_1h": 5.077586206896552,
    "score_4h": 3.6370292887029287,
    "score_7d": 0.6094674556213018,
    "extracted_entities": "Roberto Vecchioni - Cantautore - Musica Italiana",
    "saturation_score": 2.0
  },
  {
    "rank": 16,
    "entity": "emma muscat",
    "discover_score": 0.489391464657752,
    "score_1h": 15.39655172413793,
    "score_4h": 2.9224974508631902,
    "score_7d": 0.6390532544378698,
    "extracted_entities": "Emma Muscat - Cantante - Malta - Musica - Eurovision",
    "saturation_score": 61.0
  },
  {
    "rank": 42,
    "entity": "incidente autostrada oggi",
    "discover_score": 0.48823435972912604,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.930672268907563,
    "score_7d": 1.3846153846153846,
    "extracted_entities": "Incidente - Autostrada - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "leicester southampton",
    "discover_score": 0.4240984622793706,
    "score_1h": 10.71551724137931,
    "score_4h": 4.186974789915967,
    "score_7d": 0.2899408284023669,
    "extracted_entities": "Leicester - Southampton - Calcio - Premier League - Partita",
    "saturation_score": 7.0
  },
  {
    "rank": 34,
    "entity": "villarreal - osasuna",
    "discover_score": 0.41788992670321656,
    "score_1h": 0.0,
    "score_4h": 2.310924369747899,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Villarreal - Osasuna - Partita di calcio - La Liga",
    "saturation_score": 6.0
  },
  {
    "rank": 25,
    "entity": "rb leipzig – bayern",
    "discover_score": 0.3468042255973279,
    "score_1h": 5.163793103448276,
    "score_4h": 1.6785714285714286,
    "score_7d": 0.5295857988165681,
    "extracted_entities": "RB Leipzig - Bayern Monaco - Calcio - Bundesliga - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "miracolo di san gennaro",
    "discover_score": 0.3362228162089036,
    "score_1h": 3.6206896551724137,
    "score_4h": 1.930549207130551,
    "score_7d": 0.5059171597633136,
    "extracted_entities": "Miracolo - San Gennaro - Napoli - Tradizione - Religione",
    "saturation_score": 4.0
  },
  {
    "rank": 43,
    "entity": "colombaccio",
    "discover_score": 0.3149506473143124,
    "score_1h": 0.9224137931034483,
    "score_4h": 0.5921908512358919,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Colombaccio - Uccello - Fauna selvatica - Caccia - Habitat",
    "saturation_score": 3.0
  },
  {
    "rank": 35,
    "entity": "anthony albanese",
    "discover_score": 0.3106373274347476,
    "score_1h": 0.1724137931034483,
    "score_4h": 1.2794117647058822,
    "score_7d": 0.5443786982248521,
    "extracted_entities": "Anthony Albanese - Politica australiana - Primo Ministro Australia",
    "saturation_score": 68.0
  },
  {
    "rank": 27,
    "entity": "gianni alemanno",
    "discover_score": 0.303846195620656,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.24579831932773108,
    "score_7d": 0.7455621301775148,
    "extracted_entities": "Gianni Alemanno - Politica - Italia",
    "saturation_score": 38.0
  },
  {
    "rank": 49,
    "entity": "pierpaolo pretelli",
    "discover_score": 0.2562262933265523,
    "score_1h": 2.991379310344828,
    "score_4h": 1.3743275552898984,
    "score_7d": 0.34615384615384615,
    "extracted_entities": "Pierpaolo Pretelli - Personaggio televisivo - Italia - Spettacolo - Intrattenimento",
    "saturation_score": 124.0
  },
  {
    "rank": 36,
    "entity": "islamabad united vs quetta gladiators match scorecard",
    "discover_score": 0.24546373654219272,
    "score_1h": 1.4741379310344827,
    "score_4h": 0.9054621848739496,
    "score_7d": 0.37869822485207105,
    "extracted_entities": "Islamabad United - Quetta Gladiators - Match - Scorecard - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "champions league volley femminile",
    "discover_score": 0.23263168912979032,
    "score_1h": 1.2844827586206895,
    "score_4h": 0.957983193277311,
    "score_7d": 0.3165680473372781,
    "extracted_entities": "Champions League - Volley - Femminile",
    "saturation_score": 9.0
  },
  {
    "rank": 30,
    "entity": "gara sprint f1",
    "discover_score": 0.22657234894831707,
    "score_1h": 3.9224137931034484,
    "score_4h": 0.2815126050420168,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Gara - Sprint - Formula 1",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "wind warning",
    "discover_score": 0.18148299753619523,
    "score_1h": 1.7931034482758619,
    "score_4h": 0.1321419781301642,
    "score_7d": 0.32840236686390534,
    "extracted_entities": "Wind - Warning - Weather Alert - Severe Weather - Safety",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "inter verona dove vederla",
    "discover_score": 0.17357789598918372,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.7121848739495797,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Inter - Verona - Partita - Trasmissione - Streaming",
    "saturation_score": 7.0
  },
  {
    "rank": 45,
    "entity": "asia nuccetelli",
    "discover_score": 0.13444709822711415,
    "score_1h": 1.9913793103448276,
    "score_4h": 0.39218030308357654,
    "score_7d": 0.0591715976331361,
    "extracted_entities": "Asia Nuccetelli",
    "saturation_score": 6.0
  },
  {
    "rank": 48,
    "entity": "lazio - sassuolo",
    "discover_score": 0.12176197643558535,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Lazio - Sassuolo - Serie A - Calcio - Partita",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "roma fiorentina",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "galatasaray - sivasspor",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "strasbourg vs psg",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "allerta precipitazioni",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "cristóbal lópez romero",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "jacob bethell",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "vincenzo nibali",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "fc st. pauli - stoccarda",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "emanuela folliero",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "concorrenti isola dei famosi 2025",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "malta",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "beautiful anticipazioni",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "maratea",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "niko pandetta",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "royal challengers bengaluru vs chennai super kings match scorecard",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "classifica bundesliga",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "sbk cremona",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "fabregas",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "referendum 2025",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "valerio lundini",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "warriors - rockets",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "dipendenti pubblici taglio cuneo fiscale",
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
    "entity": "formula e",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "giro d'italia 2025",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "festivallo",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "alessandra tripoli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "popovich",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "espérance - sfaxien",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "superenalotto",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "tyra caterina grant",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "dengue",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "porto - moreirense",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "atletico madrid",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "praga",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "oroscopo paolo fox leone",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "stefano massini",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "rayo vallecano - getafe",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "steven adams",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "germania",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "pietrasanta",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "nadia battocletti",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "sportface",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "hong kong",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "portofino",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "harry",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "gta 6 rockstar games",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "radiolina",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "ryan garcia",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "chuck",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "alba parietti",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "supercoppa italiana",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "francesco paolantoni",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "paolo fresu",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "nairobi",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "elezioni australia",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "tennis oggi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "bobo vieri",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "giro d'italia 2025 tappe",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "referendum 8 e 9 giugno",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "mariolina cannuli",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "sırrı süreyya önder",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "heidenheim - bochum",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "buongiorno sabato 3 maggio 2025",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "piraino tennis",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "alianza lima - cienciano",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "kenya",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "ruud krol",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "man city vs wolves",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "hulk",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "torino",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "lady bloodfight",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "bayesian",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "iva zanicchi",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "sylvester stallone",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "classifica oroscopo settimana",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "roma inter primavera",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "cardinale pietro parolin",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "francesco oppini",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "nizza - reims",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "senigallia",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "ben affleck",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "blake lively",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "benny blanco",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "manchester city",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "dr",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "termoli",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "fedez e clara",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "bali",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "selena gomez",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "noto",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "luca nardi",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "tennis",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "fast food restaurant",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "oliver skardy",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "festa mamma 2025",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "barcellona squalificato",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "draper ranking",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "meteo bergamo",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "universitatea craiova - rapid bucureşti",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "peccioli",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "cecilia rodriguez",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "oroscopo scorpione",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "internet",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "borja mayoral",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "briatore",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "michelle hunziker",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "مان سيتي ضد وولفرهامبتون",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "paolo rossi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "dove cameron",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "san giacomo",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "joao mario",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "vigilance précipitations",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "meteo trento",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "guerra ucraina russia trump",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "manolo santana",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "mazzarri",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "fausto bertinotti",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "oderzo",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "andrea iannone",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "tennis live",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "ingv",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "elongazione",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "chiara ferragni",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "doc",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "toronews",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "vialli",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "ligue 2",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "bill gates",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "maaz sadaqat",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "gigi riva",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "puntata speciale affari tuoi",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "extra omnes",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "mario andretti",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "tomaso montanari",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "valeria bartolucci",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "madonna di campiglio",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "emanuela rossi",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "danieli",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "nainggolan",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "lady gaga",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "tommy cash",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "dino giarrusso",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "fondaco dei tedeschi",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "zanicchi",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "maradona",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "anticipazioni amici settima puntata",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "trump pope",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "elodie amici",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "milano meteo",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "elisabetta gardini",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "michelle",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "the four seasons serie",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "che adams",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "madrid open 2025 risultati",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "victoria beckham",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "khartoum",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "warriors",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "geraint thomas",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "brain rot",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "ozzy osbourne",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "sean combs",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "ministro urso",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "un posto al sole",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "vincicasa",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "katia follesa",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "paolo crepet",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "gerri fiction",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "hamilton ferrari",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "emanuele filiberto di savoia",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "incendio assisi",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "met gala 2025",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "stuttgart",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "kylie jenner",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "bergamo news",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "cardinale gugerotti",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "bruce willis",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "francesco paolantoni e barbara foria",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-03 15:42:08",
  "trends_count": 229,
  "top_score": 6.613360001843498,
  "runtime_minutes": 3.851873207092285,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano che il mondo del calcio e i movimenti sismici catturano il cuore e la mente degli italiani. Con \"Parma – Como\" e \"Cagliari – Udinese\" come protagonisti dell’arena calcistica, è evidente che il fervore per la Serie A e B pulsa forte. Nel frattempo, le scosse a Bologna tengono alta l'attenzione su eventi improvvisi e sfide geologiche.\n\nTra questi movimenti, il trend \"#3 scossa terremoto bologna\" emerge come un'opportunità ideale per Google Discover. Con un marcato incremento di interesse recente, ma senza un'eccessiva saturazione, rappresenta un tema di grande rilevanza e immediatezza. Nel regno della cautela, invece, si evidenzia il rischio rappresentato da \"#2 cagliari - udinese\" con un punteggio DScore robusto ma un'attenzione saturo, suggerendo un'elevata competizione per i contenuti calcistici.\n\nL’universo informativo è un oceano di cambiamenti rapidi. Coloro che cercano di dominare le onde devono bilanciare l'agilità ad adattarsi rapidamente a picchi di interesse con la saggezza di evitare maree di saturazione."
};
