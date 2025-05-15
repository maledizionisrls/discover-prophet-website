const trendData = [
  {
    "rank": 31,
    "entity": "calabria",
    "discover_score": 21.039236574645784,
    "score_1h": 71.38793103448276,
    "score_4h": 22.863445378151262,
    "score_7d": 42.50353972950127,
    "extracted_entities": "Calabria - Regione - Italia - Turismo - Cultura",
    "saturation_score": 1950.0
  },
  {
    "rank": 1,
    "entity": "milan bologna",
    "discover_score": 16.78337675718352,
    "score_1h": 60.31896551724138,
    "score_4h": 55.903361344537814,
    "score_7d": 5.821692730346577,
    "extracted_entities": "Milan - Bologna - Calcio - Serie A - Partita",
    "saturation_score": 1950.0
  },
  {
    "rank": 14,
    "entity": "730 precompilato",
    "discover_score": 9.846177119542904,
    "score_1h": 36.39655172413793,
    "score_4h": 17.869747899159663,
    "score_7d": 17.65900605804452,
    "extracted_entities": "730 precompilato - Dichiarazione dei redditi - Agenzia delle Entrate - Modello fiscale - Italia",
    "saturation_score": 38.0
  },
  {
    "rank": 2,
    "entity": "musetti zverev",
    "discover_score": 6.891742849413433,
    "score_1h": 48.1551724137931,
    "score_4h": 30.858751450370946,
    "score_7d": 3.955515638207946,
    "extracted_entities": "Lorenzo Musetti - Alexander Zverev - Tennis - Partita - Torneo",
    "saturation_score": 158.0
  },
  {
    "rank": 40,
    "entity": "milan news",
    "discover_score": 5.604258350753146,
    "score_1h": 6.439655172413793,
    "score_4h": 3.3634453781512605,
    "score_7d": 16.210200056353905,
    "extracted_entities": "Milan - News - Calcio - Serie A - AC Milan",
    "saturation_score": 8.0
  },
  {
    "rank": 48,
    "entity": "mediaset infinity",
    "discover_score": 4.981371552952079,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.34243697478991597,
    "score_7d": 15.884368836291912,
    "extracted_entities": "Mediaset - Infinity - Streaming - Intrattenimento",
    "saturation_score": 407.0
  },
  {
    "rank": 13,
    "entity": "timberwolves - warriors",
    "discover_score": 4.860637531517224,
    "score_1h": 24.008620689655174,
    "score_4h": 16.426470588235293,
    "score_7d": 8.07722245703015,
    "extracted_entities": "Timberwolves - Warriors - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "axios",
    "discover_score": 4.454357308499905,
    "score_1h": 15.93103448275862,
    "score_4h": 1.8214285714285714,
    "score_7d": 13.730681177796562,
    "extracted_entities": "Axios - Notizie - Media - Giornalismo",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "resto del carlino",
    "discover_score": 4.383737730633718,
    "score_1h": 4.301724137931035,
    "score_4h": 1.258403361344538,
    "score_7d": 13.744364609749224,
    "extracted_entities": "Resto del Carlino - Quotidiano - Italia - Notizie - Bologna",
    "saturation_score": 167.0
  },
  {
    "rank": 37,
    "entity": "atp ranking",
    "discover_score": 3.3795909875407792,
    "score_1h": 19.50862068965517,
    "score_4h": 6.19327731092437,
    "score_7d": 9.204423781346858,
    "extracted_entities": "ATP - Classifica - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "classifica atp",
    "discover_score": 2.9745900599069617,
    "score_1h": 18.0,
    "score_4h": 7.815126050420169,
    "score_7d": 6.727123837700761,
    "extracted_entities": "Classifica - ATP - Tennis",
    "saturation_score": 6.0
  },
  {
    "rank": 41,
    "entity": "steam",
    "discover_score": 2.9392133896299746,
    "score_1h": 2.637931034482759,
    "score_4h": 1.088235294117647,
    "score_7d": 9.491723020569175,
    "extracted_entities": "Steam - Videogiochi - Piattaforma digitale - Valve Corporation",
    "saturation_score": 52.0
  },
  {
    "rank": 3,
    "entity": "real madrid - mallorca",
    "discover_score": 2.8030476382076595,
    "score_1h": 18.43103448275862,
    "score_4h": 13.23109243697479,
    "score_7d": 2.519301211608904,
    "extracted_entities": "Real Madrid - Mallorca - Calcio - Partita - Liga Spagnola",
    "saturation_score": 3.0
  },
  {
    "rank": 5,
    "entity": "pescara - catania",
    "discover_score": 2.6932110225252845,
    "score_1h": 5.801724137931034,
    "score_4h": 3.703781512605042,
    "score_7d": 5.091944914060299,
    "extracted_entities": "Pescara - Catania - Viaggio - Turismo - Trasporti",
    "saturation_score": 58.0
  },
  {
    "rank": 10,
    "entity": "allerta meteo sicilia",
    "discover_score": 2.489017851934705,
    "score_1h": 2.706896551724138,
    "score_4h": 0.3928571428571429,
    "score_7d": 6.423992673992673,
    "extracted_entities": "Allerta meteo - Sicilia - Previsioni - Maltempo",
    "saturation_score": 2.0
  },
  {
    "rank": 27,
    "entity": "ajax",
    "discover_score": 2.201256775790853,
    "score_1h": 1.0172413793103448,
    "score_4h": 0.07352941176470588,
    "score_7d": 7.014634404057481,
    "extracted_entities": "Ajax - Calcio - Amsterdam - Champions League - Eredivisie",
    "saturation_score": 37.0
  },
  {
    "rank": 4,
    "entity": "stefania cappa",
    "discover_score": 2.1167151145686174,
    "score_1h": 1.5603448275862069,
    "score_4h": 0.953781512605042,
    "score_7d": 4.400781910397295,
    "extracted_entities": "Stefania Cappa",
    "saturation_score": 66.0
  },
  {
    "rank": 11,
    "entity": "sinner papa",
    "discover_score": 2.1121608890457693,
    "score_1h": 2.6724137931034484,
    "score_4h": 0.42143384550472907,
    "score_7d": 5.63348830656523,
    "extracted_entities": "Jannik Sinner - Papa Francesco - Tennis - Vaticano",
    "saturation_score": 3.0
  },
  {
    "rank": 24,
    "entity": "orsolini",
    "discover_score": 1.9751978551732212,
    "score_1h": 1.0086206896551724,
    "score_4h": 0.2100840336134454,
    "score_7d": 6.185738940546633,
    "extracted_entities": "Calciatore - Bologna FC - Serie A - Italia",
    "saturation_score": 44.0
  },
  {
    "rank": 47,
    "entity": "ac milan",
    "discover_score": 1.8241088912592331,
    "score_1h": 1.2758620689655173,
    "score_4h": 0.4432773109243697,
    "score_7d": 6.359608340377571,
    "extracted_entities": "AC Milan - Calcio - Serie A - Squadra di calcio - Milano",
    "saturation_score": 80.0
  },
  {
    "rank": 33,
    "entity": "celtics - knicks",
    "discover_score": 1.6367752702505318,
    "score_1h": 2.2155172413793105,
    "score_4h": 5.642857142857142,
    "score_7d": 3.999612566920259,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "carta docente",
    "discover_score": 1.5922748118516117,
    "score_1h": 2.6982758620689653,
    "score_4h": 0.7710084033613445,
    "score_7d": 4.301440546632854,
    "extracted_entities": "Carta docente - Insegnanti - Bonus cultura - Ministero dell'Istruzione - Formazione docenti",
    "saturation_score": 3.0
  },
  {
    "rank": 49,
    "entity": "sinner ruud",
    "discover_score": 1.4798345820887835,
    "score_1h": 5.637931034482758,
    "score_4h": 0.7415966386554622,
    "score_7d": 5.1510460693153,
    "extracted_entities": "Jannik Sinner - Casper Ruud - Tennis - Partita - Torneo",
    "saturation_score": 94.0
  },
  {
    "rank": 29,
    "entity": "oroscopo branko oggi",
    "discover_score": 1.4420344024929967,
    "score_1h": 0.0,
    "score_4h": 0.05672268907563025,
    "score_7d": 4.789852775429699,
    "extracted_entities": "Oroscopo - Branko - Oggi",
    "saturation_score": 4.0
  },
  {
    "rank": 36,
    "entity": "libia",
    "discover_score": 1.3468245911960566,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.27310924369747897,
    "score_7d": 4.587595097210482,
    "extracted_entities": "Libia - Guerra civile - Tripoli - Bengasi - Governo di Accordo Nazionale",
    "saturation_score": 231.0
  },
  {
    "rank": 18,
    "entity": "lucio corsi eurovision song contest",
    "discover_score": 1.3391708993844096,
    "score_1h": 3.112068965517241,
    "score_4h": 1.245798319327731,
    "score_7d": 3.7836538461538463,
    "extracted_entities": "Lucio Corsi - Eurovision Song Contest",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "alì rashid",
    "discover_score": 1.1805180833447715,
    "score_1h": 1.6551724137931034,
    "score_4h": 1.1218487394957983,
    "score_7d": 2.9063820794590027,
    "extracted_entities": "Alì Rashid",
    "saturation_score": 3.0
  },
  {
    "rank": 26,
    "entity": "capo verde",
    "discover_score": 1.109584317284152,
    "score_1h": 7.120689655172414,
    "score_4h": 2.1050420168067228,
    "score_7d": 3.0812905043674275,
    "extracted_entities": "Capo Verde - Isole - Turismo - Africa - Oceano Atlantico",
    "saturation_score": 5.0
  },
  {
    "rank": 15,
    "entity": "valeria marquez",
    "discover_score": 1.0358869356655647,
    "score_1h": 1.9396551724137931,
    "score_4h": 0.32563025210084034,
    "score_7d": 3.014792899408284,
    "extracted_entities": "Valeria Marquez",
    "saturation_score": 6.0
  },
  {
    "rank": 50,
    "entity": "playoff serie c",
    "discover_score": 1.0295673360734914,
    "score_1h": 3.224137931034483,
    "score_4h": 0.4432773109243697,
    "score_7d": 3.649690053536207,
    "extracted_entities": "Playoff - Serie C - Calcio - Promozione - Squadre",
    "saturation_score": 49.0
  },
  {
    "rank": 39,
    "entity": "rimini - vis pesaro",
    "discover_score": 0.9138450944472176,
    "score_1h": 0.0,
    "score_4h": 0.06302521008403361,
    "score_7d": 3.201060157790927,
    "extracted_entities": "Rimini - Vis Pesaro - Calcio - Partita - Serie C",
    "saturation_score": 35.0
  },
  {
    "rank": 22,
    "entity": "zheng",
    "discover_score": 0.7236068721116041,
    "score_1h": 1.2155172413793103,
    "score_4h": 0.9327731092436975,
    "score_7d": 2.0356262327416172,
    "extracted_entities": "Zheng - Persone - Cina - Storia",
    "saturation_score": 84.0
  },
  {
    "rank": 16,
    "entity": "conceicao",
    "discover_score": 0.6452421731733348,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.6743697478991596,
    "score_7d": 1.725979149056072,
    "extracted_entities": "Conceição",
    "saturation_score": 156.0
  },
  {
    "rank": 28,
    "entity": "tom cruise",
    "discover_score": 0.599046653932824,
    "score_1h": 3.017241379310345,
    "score_4h": 0.8571428571428571,
    "score_7d": 1.7053043110735417,
    "extracted_entities": "Tom Cruise - Attore - Film - Hollywood - Mission: Impossible",
    "saturation_score": 332.0
  },
  {
    "rank": 6,
    "entity": "stefania corona",
    "discover_score": 0.5927949514244851,
    "score_1h": 1.043103448275862,
    "score_4h": 1.2647058823529411,
    "score_7d": 1.096541279233587,
    "extracted_entities": "Stefania Corona - Persone",
    "saturation_score": 31.0
  },
  {
    "rank": 7,
    "entity": "deputato magi fantasma",
    "discover_score": 0.5458068321220608,
    "score_1h": 1.146551724137931,
    "score_4h": 1.2605042016806722,
    "score_7d": 1.0084002535925614,
    "extracted_entities": "Deputato - Magi - Fantasma",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "davide calabria",
    "discover_score": 0.5444420436815349,
    "score_1h": 0.0,
    "score_4h": 0.32142857142857145,
    "score_7d": 1.6731473654550577,
    "extracted_entities": "Davide Calabria - Calciatore - AC Milan - Serie A - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "pozzolo espulso",
    "discover_score": 0.49708268987342347,
    "score_1h": 1.8017241379310345,
    "score_4h": 0.6113445378151261,
    "score_7d": 1.0653176951253873,
    "extracted_entities": "Pozzolo - Espulsione - Calcio - Squadra - Giocatore",
    "saturation_score": 114.0
  },
  {
    "rank": 38,
    "entity": "bonus donne",
    "discover_score": 0.4697634199687296,
    "score_1h": 1.9655172413793103,
    "score_4h": 0.47058823529411764,
    "score_7d": 1.411665257819104,
    "extracted_entities": "Bonus - Donne - Incentivi - Politiche sociali",
    "saturation_score": 37.0
  },
  {
    "rank": 20,
    "entity": "albo d'oro coppa italia",
    "discover_score": 0.3955244553754157,
    "score_1h": 1.3103448275862069,
    "score_4h": 0.1638655462184874,
    "score_7d": 1.0610911524373061,
    "extracted_entities": "Albo d'oro - Coppa Italia - Vincitori - Squadre - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "giro d'italia napoli",
    "discover_score": 0.3697532748555258,
    "score_1h": 18.32758620689655,
    "score_4h": 1.5252100840336134,
    "score_7d": 0.6528423499577345,
    "extracted_entities": "Giro d'Italia - Napoli - Ciclismo - Evento sportivo",
    "saturation_score": 2.0
  },
  {
    "rank": 35,
    "entity": "torino di sangro",
    "discover_score": 0.35769049296732486,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0672268907563025,
    "score_7d": 0.7869822485207101,
    "extracted_entities": "Torino di Sangro - Comune - Abruzzo - Turismo - Spiagge",
    "saturation_score": 5.0
  },
  {
    "rank": 23,
    "entity": "bastian muller",
    "discover_score": 0.3336992110476629,
    "score_1h": 1.603448275862069,
    "score_4h": 0.5651260504201681,
    "score_7d": 0.7492955762186532,
    "extracted_entities": "Bastian Muller",
    "saturation_score": 233.0
  },
  {
    "rank": 46,
    "entity": "ursula von der leyen",
    "discover_score": 0.32609734452782757,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.11974789915966387,
    "score_7d": 0.9630353620738236,
    "extracted_entities": "Ursula von der Leyen - Politica - Unione Europea - Presidente Commissione Europea",
    "saturation_score": 47.0
  },
  {
    "rank": 32,
    "entity": "huijsen",
    "discover_score": 0.3088665263760593,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.3319327731092437,
    "score_7d": 0.7705163426317273,
    "extracted_entities": "Huijsen",
    "saturation_score": 82.0
  },
  {
    "rank": 17,
    "entity": "torres - atalanta u-23",
    "discover_score": 0.2930174396871396,
    "score_1h": 0.0,
    "score_4h": 0.41027038430434937,
    "score_7d": 0.5875598760214145,
    "extracted_entities": "Torres - Atalanta U-23 - Calcio - Partita - Serie C",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "san jose earthquakes - inter miami",
    "discover_score": 0.2910766058621026,
    "score_1h": 1.2844827586206897,
    "score_4h": 1.2647058823529411,
    "score_7d": 0.38341786418709495,
    "extracted_entities": "San Jose Earthquakes - Inter Miami - Partita di calcio - Major League Soccer",
    "saturation_score": 2.0
  },
  {
    "rank": 42,
    "entity": "giochi playstation plus",
    "discover_score": 0.24453658369354053,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.08823529411764706,
    "score_7d": 0.6074774584389969,
    "extracted_entities": "Giochi - PlayStation Plus - Abbonamento - Console - Videogiochi",
    "saturation_score": 2.0
  },
  {
    "rank": 45,
    "entity": "feyenoord - rkc",
    "discover_score": 0.2356509812273764,
    "score_1h": 0.0,
    "score_4h": 0.49789915966386555,
    "score_7d": 0.4686883629191322,
    "extracted_entities": "Feyenoord - RKC - Partita di calcio - Eredivisie",
    "saturation_score": 3.0
  },
  {
    "rank": 34,
    "entity": "buongiorno giovedi 15 maggio 2025",
    "discover_score": 0.12770214305756808,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.018907563025210083,
    "score_7d": 0.09812623274161736,
    "extracted_entities": "Buongiorno - Giovedì - 15 maggio 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "mediaset",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "chiara galiazzo",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "monopoli - giana erminio",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "musetti altezza",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "real madrid – majorque",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "atp ranking live",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "allerta vento",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "canale 5 streaming",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "david parenzo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "ozzy osbourne",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "zirkzee",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "valentina uomini e donne",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "alavés - valencia",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "roberto mancini",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "errani paolini",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "mondiale per club",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "coco gauff",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "villarreal - leganés",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "assegno unico maggio 2025",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "wind warning",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "santiago castro",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "alcaraz oggi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "trabzonspor - galatasaray",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "tar",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "marchionne",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "mondiale per club 2025",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "crotone calcio",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "cate blanchett",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "joao felix",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "nicoletta rubino",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "massimo moratti",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "renzo rosso",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "galatasaray",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "fabio fognini",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "panatta",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "alex eala",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "sabalenka oggi",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "groningen - ajax",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "luisa ranieri",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "copa libertadores",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "luca nardi",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "leao",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "ranking atp live",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "von der leyen",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "rangers - dundee united",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "florenzi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "aberdeen - celtic",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "superman",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "rosa chemical",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "costantinopoli",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "ibrahimovic",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "castro",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "bella hadid",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "oroscopo capricorno",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "trani",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "matera",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "play off serie c",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "raiplay",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "maglia juve 2026",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "baldur's gate 3",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "canale5",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "ubitennis",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "de silvestri",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "zac efron",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "mariani arbitro",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "mariano navone",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "zverev ranking",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "vangelo fra stefano 14 maggio",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "lolita lobosco 2025",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "musetti figlio",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "roma milan",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "juventus store",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "real madrid maiorca",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "scossa di terremoto napoli",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "giovanni fabbian",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "leao milan",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "reijnders",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "hubert hurkacz",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "mediterranean",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "like a star giudici",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "fofana",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "montescaglioso",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "sartori",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "viterbo",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "meloni",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "scaroni",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "quante coppe italia ha vinto il milan",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "supercoppa italiana",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "l'arena",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "hummels",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "rafael leão",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "mission impossible - the final reckoning",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "barbara bouchet",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "luca",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "joey saputo",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "walker",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "cinzia uomini e donne",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "beukema",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "scudetti bologna",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "الريال ضد مايوركا",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "otranto",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "real madrid vs rcd mallorca timeline",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "elton john",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "dallinga",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "calciomercato milan",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "russell crowe",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "pretty woman stasera",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "infinity mediaset",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "tommy paul",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "elisabetta gardini",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "tie break",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "cfr cluj - hermannstadt",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "mediaset canale 5",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "raoul bova",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "presidente bologna",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "francesca de andré",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "gatto'",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "squadre mondiale per club",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "samantha de grenet",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "bezos",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "chiellini",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "lussemburgo",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "legnago",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "verbania",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "luna oggi",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "kingdom hearts iv",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "marco liorni",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "luca carboni",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "ravenna",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ester pantano",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "tifoso",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "tamberi",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "hotel",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "gaeta",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "djokovic",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "anagni",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "galliani",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "un posto al sole stasera",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "bnl roma 2025",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "crotone",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "lorde",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "roland garros",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "elly schlein",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "socios",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "massafra",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "mondiali 2026",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "musetti anni",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "łukasz skorupski",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "marina di ginosa",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "kyle walker",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "vivaticket parma napoli",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "steven krueger",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "daniela ruggi",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "trabzonspor vs galatasaray",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "cosa ce stasera in tv",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "martina franca",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "nathalie caldonazzo",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "david jonathan",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "delitti in paradiso",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "trigno",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "mila kunis",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "andor",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "valentina vitale",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "gragnano",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "vasco rossi",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "stellantis",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "amerigo vespucci napoli",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "real estate",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "antonella clerici",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "stearns",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "robert benton",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "maria teresa fabbri",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "giovanni allevi",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "cracovia",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "sane",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "milan ac",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-15 07:02:06",
  "trends_count": 228,
  "top_score": 21.039236574645784,
  "runtime_minutes": 3.961482461293538,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profezie di Oggi: \n\nNell'alveo tumultuoso del sapere digitale, tre sono i fili che tessono la tela del presente. Il calcio, imperatore indiscusso, si manifesta con fervore nei conflitti delle squadre italiane e internazionali, da 'Milan-Bologna' a 'Timberwolves-Warriors', dimostrando come lo sport resti in perenne agitazione. La natura manifesta la sua forza con allerta e previsioni, mentre l'attenzione si volge verso gli allerta meteo in Sicilia, monito di una terra che palpita sotto gli umori del cielo. Infine, la burocrazia fiscale impera con il '730 precompilato', elemento di tensione annuale per il popolo italiano.\n\nTra le opportunità, il tema del '730 precompilato' (#3) splende come stella per chi vuol raccontarlo su Google Discover: solido DScore accompagnato da un interesse crescente e una saturazione esigua suggeriscono abbondante spazio per nuove narrazioni. Tuttavia, il viaggio dell'informazione non è privo di scogli: 'Calabria' (#1) e 'Milan-Bologna' (#2), pur altisonanti, affogano in un mare già colmo, con la saturazione che riempie ogni anfratto.\n\nPer chi crea, dunque, la via è la ricerca di equilibrio tra passione di raccontare e capacità di emergere, alla continua scoperta di nicchie ancora inesplorate."
};
