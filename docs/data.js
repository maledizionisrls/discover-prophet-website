const trendData = [
  {
    "rank": 34,
    "entity": "esselunga",
    "discover_score": 18.879472963062682,
    "score_1h": 74.7844827586207,
    "score_4h": 36.50630252100841,
    "score_7d": 35.93491124260355,
    "extracted_entities": "Esselunga - Supermercato - Italia",
    "saturation_score": 82.0
  },
  {
    "rank": 44,
    "entity": "oslo",
    "discover_score": 6.812980668262097,
    "score_1h": 8.241379310344827,
    "score_4h": 2.495798319327731,
    "score_7d": 19.893491124260358,
    "extracted_entities": "Oslo - Norvegia - Capitale - Turismo - Cultura",
    "saturation_score": 6.0
  },
  {
    "rank": 47,
    "entity": "monaco open",
    "discover_score": 6.096807817324602,
    "score_1h": 3.8448275862068964,
    "score_4h": 3.09453781512605,
    "score_7d": 18.09171597633136,
    "extracted_entities": "Monaco - Open - Tennis - Torneo - ATP",
    "saturation_score": 2.0
  },
  {
    "rank": 1,
    "entity": "lecce - como",
    "discover_score": 5.8432783793930865,
    "score_1h": 50.689655172413794,
    "score_4h": 32.39915966386555,
    "score_7d": 1.6745562130177514,
    "extracted_entities": "Lecce - Como - Calcio - Serie B - Partita",
    "saturation_score": 473.0
  },
  {
    "rank": 37,
    "entity": "wec",
    "discover_score": 5.084634648269337,
    "score_1h": 8.236265341905318,
    "score_4h": 18.165966386554622,
    "score_7d": 10.724852071005918,
    "extracted_entities": "World Endurance Championship - Motorsport - FIA",
    "saturation_score": 101.0
  },
  {
    "rank": 17,
    "entity": "roma verona",
    "discover_score": 4.786284412863324,
    "score_1h": 8.594827586206897,
    "score_4h": 6.686974789915967,
    "score_7d": 10.99112426035503,
    "extracted_entities": "Roma - Verona - Calcio - Serie A - Partita",
    "saturation_score": 323.0
  },
  {
    "rank": 45,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 4.424900417400443,
    "score_1h": 13.11206896551724,
    "score_4h": 4.63655462184874,
    "score_7d": 12.988165680473372,
    "extracted_entities": "ATP - Monaco di Baviera - 2025 - Tennis - Torneo",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "guerra russia ucraina",
    "discover_score": 3.868173568621195,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.4432773109243697,
    "score_7d": 11.76923076923077,
    "extracted_entities": "Guerra - Russia - Ucraina - Conflitto - Invasione",
    "saturation_score": 2.0
  },
  {
    "rank": 26,
    "entity": "milan atalanta",
    "discover_score": 3.3941242950587007,
    "score_1h": 1.4913793103448274,
    "score_4h": 2.4642857142857144,
    "score_7d": 9.609467455621301,
    "extracted_entities": "Milan - Atalanta - Calcio - Serie A",
    "saturation_score": 138.0
  },
  {
    "rank": 19,
    "entity": "alexander zverev",
    "discover_score": 3.1687625569835687,
    "score_1h": 47.83620689655173,
    "score_4h": 9.663865546218489,
    "score_7d": 6.594674556213018,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour",
    "saturation_score": 26.0
  },
  {
    "rank": 3,
    "entity": "heidenheim - bayern monaco",
    "discover_score": 2.9572655006710042,
    "score_1h": 24.62843366452367,
    "score_4h": 17.691176470588236,
    "score_7d": 1.9378698224852071,
    "extracted_entities": "Heidenheim - Bayern Monaco - Calcio - Partita - Bundesliga",
    "saturation_score": 7.0
  },
  {
    "rank": 8,
    "entity": "inter - roma",
    "discover_score": 2.576057296496886,
    "score_1h": 18.293103448275865,
    "score_4h": 14.466386554621849,
    "score_7d": 2.9171597633136095,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 84.0
  },
  {
    "rank": 5,
    "entity": "carmela fiorella laurea falsa",
    "discover_score": 2.53367017826617,
    "score_1h": 10.370689655172415,
    "score_4h": 12.331932773109244,
    "score_7d": 2.7810650887573964,
    "extracted_entities": "Carmela Fiorella - Laurea falsa - Frode accademica",
    "saturation_score": 3.0
  },
  {
    "rank": 4,
    "entity": "barcellona - celta vigo",
    "discover_score": 2.100421425564833,
    "score_1h": 65.75,
    "score_4h": 13.949579831932773,
    "score_7d": 1.4763313609467454,
    "extracted_entities": "Barcellona - Celta Vigo - Partita di calcio - Liga Spagnola",
    "saturation_score": 80.0
  },
  {
    "rank": 9,
    "entity": "everton - manchester city",
    "discover_score": 1.532544872694705,
    "score_1h": 32.991379310344826,
    "score_4h": 8.823529411764707,
    "score_7d": 1.9201183431952664,
    "extracted_entities": "Everton - Manchester City - Partita di calcio - Premier League",
    "saturation_score": 7.0
  },
  {
    "rank": 7,
    "entity": "psg - le havre",
    "discover_score": 1.4259240198860645,
    "score_1h": 34.91379310344827,
    "score_4h": 11.642857142857142,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "PSG - Le Havre - Partita di calcio - Ligue 1",
    "saturation_score": 10.0
  },
  {
    "rank": 2,
    "entity": "monza - napoli",
    "discover_score": 1.3720731109682078,
    "score_1h": 20.439655172413794,
    "score_4h": 6.226890756302521,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Monza - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 532.0
  },
  {
    "rank": 10,
    "entity": "vignetta vauro",
    "discover_score": 1.3627081923413478,
    "score_1h": 3.4310344827586206,
    "score_4h": 6.888655462184874,
    "score_7d": 2.0088757396449703,
    "extracted_entities": "Vignetta - Vauro - Satira",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "probabili formazioni serie a",
    "discover_score": 1.1584294613510262,
    "score_1h": 1.6982758620689655,
    "score_4h": 1.397058823529412,
    "score_7d": 3.837278106508876,
    "extracted_entities": "Probabili formazioni - Serie A - Calcio - Squadre - Partite",
    "saturation_score": 9.0
  },
  {
    "rank": 32,
    "entity": "amstel gold race 2025",
    "discover_score": 1.1459892228469368,
    "score_1h": 1.8620689655172415,
    "score_4h": 0.29411764705882354,
    "score_7d": 3.828402366863905,
    "extracted_entities": "Amstel Gold Race - 2025 - Ciclismo - Paesi Bassi - Evento sportivo",
    "saturation_score": 31.0
  },
  {
    "rank": 43,
    "entity": "wrestlemania 41",
    "discover_score": 1.13035384868926,
    "score_1h": 0.9051724137931034,
    "score_4h": 0.8361344537815126,
    "score_7d": 3.8106508875739644,
    "extracted_entities": "WrestleMania 41 - WWE - Evento di wrestling",
    "saturation_score": 34.0
  },
  {
    "rank": 48,
    "entity": "sorrento avellino",
    "discover_score": 0.8374301994019027,
    "score_1h": 4.8534482758620685,
    "score_4h": 0.911764705882353,
    "score_7d": 2.7840236686390534,
    "extracted_entities": "Sorrento - Avellino - Viaggio - Turismo - Campania",
    "saturation_score": 56.0
  },
  {
    "rank": 6,
    "entity": "angelo longoni regista",
    "discover_score": 0.7538347969083012,
    "score_1h": 10.827586206896552,
    "score_4h": 3.4096638655462184,
    "score_7d": 1.0118343195266273,
    "extracted_entities": "Angelo Longoni - Regista - Film - Teatro - Televisione",
    "saturation_score": 24.0
  },
  {
    "rank": 40,
    "entity": "carlo ancelotti",
    "discover_score": 0.6804459831716541,
    "score_1h": 0.0,
    "score_4h": 0.8634453781512605,
    "score_7d": 2.1301775147928996,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": 5.0
  },
  {
    "rank": 15,
    "entity": "tina cipollari",
    "discover_score": 0.6551777164360334,
    "score_1h": 12.672413793103448,
    "score_4h": 2.7521008403361344,
    "score_7d": 1.1952662721893492,
    "extracted_entities": "Tina Cipollari - Personaggio televisivo - Uomini e Donne - Gossip - Televisione",
    "saturation_score": 46.0
  },
  {
    "rank": 12,
    "entity": "rosalinda cannavò",
    "discover_score": 0.5994655917629016,
    "score_1h": 6.4655172413793105,
    "score_4h": 3.6617647058823533,
    "score_7d": 0.7396449704142012,
    "extracted_entities": "Rosalinda Cannavò - Attrice - Personaggio pubblico",
    "saturation_score": 91.0
  },
  {
    "rank": 20,
    "entity": "buona vigilia di pasqua 2025",
    "discover_score": 0.5739098922240095,
    "score_1h": 0.0,
    "score_4h": 1.1008403361344539,
    "score_7d": 1.4437869822485208,
    "extracted_entities": "Vigilia di Pasqua - 2025 - Celebrazioni - Tradizioni",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "giulio drago",
    "discover_score": 0.500234790761148,
    "score_1h": 4.318965517241379,
    "score_4h": 1.184873949579832,
    "score_7d": 1.0088757396449703,
    "extracted_entities": "Giulio Drago",
    "saturation_score": 66.0
  },
  {
    "rank": 14,
    "entity": "barcelona vs celta vigo",
    "discover_score": 0.49130410219527093,
    "score_1h": 4.413793103448276,
    "score_4h": 2.741596638655462,
    "score_7d": 0.6568047337278107,
    "extracted_entities": "Barcelona - Celta Vigo - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 25,
    "entity": "valentina maiolini-rothbacher",
    "discover_score": 0.48282766523849785,
    "score_1h": 1.4224137931034484,
    "score_4h": 1.073529411764706,
    "score_7d": 1.1893491124260356,
    "extracted_entities": "Valentina Maiolini-Rothbacher",
    "saturation_score": 4.0
  },
  {
    "rank": 23,
    "entity": "reggiana - napoli",
    "discover_score": 0.4647421503417793,
    "score_1h": 3.184248977206312,
    "score_4h": 1.5084033613445378,
    "score_7d": 0.9881656804733728,
    "extracted_entities": "Reggiana - Napoli - Calcio - Partita - Serie B",
    "saturation_score": 3.0
  },
  {
    "rank": 38,
    "entity": "francesca brienza",
    "discover_score": 0.4637822679978163,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.5987394957983194,
    "score_7d": 0.8254437869822485,
    "extracted_entities": "Francesca Brienza",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "lsg vs rr",
    "discover_score": 0.4471220501286194,
    "score_1h": 4.543103448275862,
    "score_4h": 2.027310924369748,
    "score_7d": 0.7721893491124261,
    "extracted_entities": "LSG - RR - Indian Premier League - Cricket - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "qualifiche f1 orari",
    "discover_score": 0.4436223786878129,
    "score_1h": 0.29310344827586204,
    "score_4h": 1.3403361344537816,
    "score_7d": 0.8254437869822486,
    "extracted_entities": "Formula 1 - Qualifiche - Orari",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "neres",
    "discover_score": 0.4249055535083325,
    "score_1h": 0.0,
    "score_4h": 1.1974789915966388,
    "score_7d": 0.9142011834319527,
    "extracted_entities": "Neres - Calciatore - Ajax - Brasile - Nazionale di calcio",
    "saturation_score": 313.0
  },
  {
    "rank": 33,
    "entity": "ostapenko",
    "discover_score": 0.42340022627021334,
    "score_1h": 1.3879310344827587,
    "score_4h": 2.9873949579831933,
    "score_7d": 0.5502958579881656,
    "extracted_entities": "Jelena Ostapenko - Tennis - WTA",
    "saturation_score": 8.0
  },
  {
    "rank": 35,
    "entity": "aryna sabalenka",
    "discover_score": 0.420021530279859,
    "score_1h": 1.8189655172413792,
    "score_4h": 2.2605042016806722,
    "score_7d": 0.7248520710059172,
    "extracted_entities": "Aryna Sabalenka - Tennis - WTA - Bielorussia",
    "saturation_score": 1.0
  },
  {
    "rank": 16,
    "entity": "cristèl carrisi",
    "discover_score": 0.3750149564470331,
    "score_1h": 3.844827586206897,
    "score_4h": 2.283613445378151,
    "score_7d": 0.41124260355029585,
    "extracted_entities": "Cristèl Carrisi - Personaggio pubblico - Famiglia Carrisi",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "heidenheim – bayern",
    "discover_score": 0.3681831268248933,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.9663865546218486,
    "score_7d": 0.8254437869822485,
    "extracted_entities": "Heidenheim - Bayern - Calcio - Bundesliga - Partita",
    "saturation_score": 9.0
  },
  {
    "rank": 18,
    "entity": "dc vs gt",
    "discover_score": 0.3665864478807008,
    "score_1h": 2.7203389830508473,
    "score_4h": 2.472689075630252,
    "score_7d": 0.3609467455621302,
    "extracted_entities": "DC Comics - Gran Turismo - Confronto",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "barcelone – celta vigo",
    "discover_score": 0.35569449162240524,
    "score_1h": 1.206896551724138,
    "score_4h": 0.4852941176470588,
    "score_7d": 0.8846153846153846,
    "extracted_entities": "Barcellona - Celta Vigo - Calcio - Partita - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "mamelodi - al ahly",
    "discover_score": 0.341603490273565,
    "score_1h": 0.6379310344827586,
    "score_4h": 1.315126050420168,
    "score_7d": 0.6863905325443787,
    "extracted_entities": "Mamelodi Sundowns - Al Ahly - Calcio - Partita - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "lipsia calcio",
    "discover_score": 0.2718158159735566,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.226890756302521,
    "score_7d": 0.6331360946745561,
    "extracted_entities": "Lipsia - Calcio - RB Lipsia - Bundesliga",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "brentford - brighton & hove albion",
    "discover_score": 0.25779912071240746,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.03991596638655462,
    "score_7d": 0.6213017751479291,
    "extracted_entities": "Brentford - Brighton & Hove Albion - Calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "iga świątek",
    "discover_score": 0.2418957755878474,
    "score_1h": 0.3620689655172414,
    "score_4h": 1.0168067226890756,
    "score_7d": 0.35502958579881655,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia - Roland Garros",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "west ham - southampton",
    "discover_score": 0.23323391405233893,
    "score_1h": 2.7241379310344827,
    "score_4h": 0.5210084033613446,
    "score_7d": 0.4349112426035503,
    "extracted_entities": "West Ham - Southampton - Partita di calcio - Premier League",
    "saturation_score": 8.0
  },
  {
    "rank": 36,
    "entity": "peshawar zalmi vs multan sultans",
    "discover_score": 0.22258724083736847,
    "score_1h": 1.6637931034482758,
    "score_4h": 1.388655462184874,
    "score_7d": 0.17455621301775148,
    "extracted_entities": "Peshawar Zalmi - Multan Sultans - Partita di cricket - Pakistan Super League - Squadre di cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "kikò nalli",
    "discover_score": 0.21516798797177514,
    "score_1h": 4.336206896551724,
    "score_4h": 1.2668067226890756,
    "score_7d": 0.20414201183431951,
    "extracted_entities": "Kikò Nalli - Personaggio televisivo - Hairstylist",
    "saturation_score": 2.0
  },
  {
    "rank": 46,
    "entity": "crystal palace - afc bournemouth",
    "discover_score": 0.19340989826874252,
    "score_1h": 0.017241379310344827,
    "score_4h": 0.7920168067226891,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Crystal Palace - AFC Bournemouth - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "صن داونز ضد الأهلي",
    "discover_score": 0.17666645170462147,
    "score_1h": 2.7903272939801287,
    "score_4h": 0.9012605042016807,
    "score_7d": 0.07396449704142011,
    "extracted_entities": "صن داونز - الأهلي - Partita di calcio - Squadre di calcio - Competizione sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "conad",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "sabalenka",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "vicenza - triestina",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "oroscopo oggi paolo fox scorpione",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "albano",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "diao como",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "rayo vallecano - valencia",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "ben shelton",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "don paolo polesana",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "ambasciata oman roma",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "milano conegliano",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "robbie williams",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "barcelona open",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "pallavolo femminile",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "fp3 formula 1",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "neymar",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "masterchef 13",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "napoli basket",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "fábián marozsán",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "eleonora abbagnato",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "paola saluzzi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "rita rusic",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "albano carrisi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "al-qadisiya - al-nassr",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "padova calcio",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "jd vance giorgia meloni",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "meditazioni via crucis papa francesco",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "nessuno ti salverà",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "grizzlies - mavericks",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "rete 4 stasera quarto grado",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "caserta",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "holger rune",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "olimpia milano - cremona",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "thauvin",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "sporting - moreirense",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "wec imola 2025",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "juventus women",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "jennifer lopez",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "galatasaray - bodrum",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "peschici",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "fabrizio corona",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "lucca",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "koopmeiners",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "arnautovic",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "interprete meloni",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "terra amara",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "trinity rodman",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "frasi di buona pasqua",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "hawks - heat",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "piacenza",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "viktoria plzeň - dukla",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "iginio massari",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "conferenza stampa",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "porto - famalicão",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "jessica pegula",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "inter bologna",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "lady gaga",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "etna",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "de laurentiis",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "monica bellucci",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "miriam leone",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "dani olmo",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "ernesto galli",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "amstel gold race",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "mainz - wolfsburg",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "gyokeres",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "antonio scurati",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "sassuolo - como women",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "melania rea",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "groenlandia",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "antonietta gargiulo",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "referendum 8 9 giugno per cosa si vota",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "imane khelif",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "andrea conti calcio",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "noipa emissione speciale",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "il miracolo di sharon",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "million day",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "federico zampaglione",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "vlasic",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "coratolive",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "grazzano visconti",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "san pantaleo",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "vigilia di pasqua",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "saman abbas",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "matrimonio a prima vista",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "espanyol - getafe",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "padova",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "feralpisalò - pro vercelli",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "caldiero terme - lecco",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "striscia la notizia",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "benedetta pilato",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "f1 academy",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "lazio - napoli",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "atalanta u-23 - arzignano valchiampo",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "ciro immobile",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "alianza lima - chankas cyc",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "maroc u-17 – mali u-17",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "colin farrell",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "lodi mattutine di oggi",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "giana erminio - virtus verona",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "daniela coli meloni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "modena",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "anagni",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "padova calcio oggi",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "diodato",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "bangladesh women vs pakistan women",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "francesca mannocchi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "dakota johnson",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "lega pro",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "novara - trento",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "ischia",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "ornella vanoni",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "sofia raffaeli",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "al-qadisiyah vs al-nassr",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "fast food restaurant",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "guardiola roma",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "i peccatori film",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "monfalcone",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "snai",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "lba",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "rennes - nantes",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "abbiategrasso",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "lourdes",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "the passion",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "fabrizio pregliasco",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "liam neeson",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "val pusteria",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "gabriele eredità",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "renate - pergolettese",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "kevin bacon",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "الطقس غدًا",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "rematch",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "arthur fils",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "lulu selassie",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "simone fontecchio",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "erode",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "pro patria - lumezzane",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "vittoria puccini",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "amburgo",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "rai 1 diretta",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "robin williams",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "pavia",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "masterchef",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "leonardo di caprio",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "luigi mangione",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "monica giandotti",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "regenwarnung",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "ivg",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "andrea pennacchi",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "cucinelli",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "taranto",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "moonbin",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "anne hathaway",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "bruno vespa",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "stefano massini",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "seravezza",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "al nassr",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "klopp",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "crimea",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "bruno barbieri",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "jim clark",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "prohodul domnului",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "maggie smith",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "mc donald",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "serena rossi",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "svitolina",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "30 notti con il mio ex",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "il mattino di padova",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "evenepoel",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "conte juventus",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "albinoleffe",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "gangs of london",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "ihostage",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "tennis barcellona",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "titanic",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "al-ahli saudi - al feiha",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "rakotomanga",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "sarà curtis",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "easter",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 236,
    "entity": "hunziker",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 237,
    "entity": "ncis",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 238,
    "entity": "espanyol",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 239,
    "entity": "tv2000",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 240,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-19 15:40:55",
  "trends_count": 240,
  "top_score": 18.879472963062682,
  "runtime_minutes": 3.263523511091868,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi le stelle dei trend dipingono un mosaico dominato dal mondo dello sport e dalle competizioni, specialmente nel calcio e nel tennis, mentre il richiamo della cultura e del turismo si fa sentire da lontano, con la splendida Oslo che invita all'esplorazione.\n\nNel gioco di massima attenzione, l'argomento del \"Monaco Open\" (#3) si manifesta come un'opportunità luminosa per Google Discover. Il basso tasso di saturazione e un crescente interesse nell'ultima settimana segnalano un fertile terreno per i creatori di contenuti nel tennis e nei tornei ATP. Allo stesso modo, l'influenza crescente dell'ATP Monaco di Baviera 2025 (#7) si rivela già oggi, preparando la strada al dominio futuro nei trend sportivi.\n\nMa siate cauti, poiché la luce è tallonata dall'ombra della saturazione, con il calcio sulla cresta dell'onda. \"Roma - Verona\" (#6) e altre affascinanti intersezioni calcistiche potrebbero oscurare il cammino a causa della forte copertura mediatica.\n\nI creatori di contenuti devono bilanciare l'impulso dell'attualità con la saggezza della pazienza, facendo risplendere la loro unicità in un cielo costellato di trend. Lasciate brillare la vostra creatività!"
};
