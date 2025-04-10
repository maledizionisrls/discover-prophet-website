const trendData = [
  {
    "rank": 1,
    "entity": "valentina tomada",
    "discover_score": 14.181027724635852,
    "score_1h": 61.275862068965516,
    "score_4h": 31.98949579831933,
    "score_7d": 7.653846153846153,
    "extracted_entities": "Valentina Tomada",
    "saturation_score": 342.0
  },
  {
    "rank": 9,
    "entity": "i cani",
    "discover_score": 12.129773280661913,
    "score_1h": 55.05172413793103,
    "score_4h": 9.691176470588236,
    "score_7d": 21.159763313609467,
    "extracted_entities": "Cani - Animali domestici - Razze canine - Addestramento - Cura degli animali",
    "saturation_score": 45.0
  },
  {
    "rank": 27,
    "entity": "borsa italiana",
    "discover_score": 10.680390763124873,
    "score_1h": 66.15517241379311,
    "score_4h": 34.03571428571429,
    "score_7d": 18.56804733727811,
    "extracted_entities": "Borsa - Italia - Mercato azionario - Investimenti",
    "saturation_score": 3830.0
  },
  {
    "rank": 30,
    "entity": "meteo roma",
    "discover_score": 9.36418107699265,
    "score_1h": 56.456896551724135,
    "score_4h": 30.426470588235293,
    "score_7d": 17.142011834319526,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 50.0
  },
  {
    "rank": 44,
    "entity": "investing",
    "discover_score": 7.8955395991423964,
    "score_1h": 38.077586206896555,
    "score_4h": 28.3781512605042,
    "score_7d": 15.846153846153845,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Trading",
    "saturation_score": 10.0
  },
  {
    "rank": 49,
    "entity": "azioni leonardo",
    "discover_score": 7.30746159120223,
    "score_1h": 24.5,
    "score_4h": 18.502100840336134,
    "score_7d": 17.301775147928993,
    "extracted_entities": "Azioni - Leonardo - Borsa - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 50,
    "entity": "borsa milano oggi",
    "discover_score": 5.976083616384088,
    "score_1h": 12.094827586206897,
    "score_4h": 9.649159663865547,
    "score_7d": 16.19526627218935,
    "extracted_entities": "Borsa - Milano - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "nasdaq",
    "discover_score": 5.885768738319966,
    "score_1h": 27.35344827586207,
    "score_4h": 20.777310924369747,
    "score_7d": 12.710059171597633,
    "extracted_entities": "Nasdaq - Borsa valori - Indici azionari - Mercato finanziario - Tecnologia",
    "saturation_score": 477.0
  },
  {
    "rank": 2,
    "entity": "barcellona - borussia dortmund",
    "discover_score": 4.623390979826733,
    "score_1h": 24.46551724137931,
    "score_4h": 18.76050420168067,
    "score_7d": 3.464497041420118,
    "extracted_entities": "Barcellona - Borussia Dortmund - Calcio - Partita - Champions League",
    "saturation_score": 122.0
  },
  {
    "rank": 21,
    "entity": "barcelona",
    "discover_score": 4.318548784077924,
    "score_1h": 19.232758620689655,
    "score_4h": 7.262605042016807,
    "score_7d": 10.242603550295858,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 46.0
  },
  {
    "rank": 3,
    "entity": "psg - aston villa",
    "discover_score": 3.9131175432331213,
    "score_1h": 14.051724137931036,
    "score_4h": 15.605042016806724,
    "score_7d": 3.7514792899408285,
    "extracted_entities": "PSG - Aston Villa - Calcio - Partita - Club",
    "saturation_score": 462.0
  },
  {
    "rank": 16,
    "entity": "psg",
    "discover_score": 3.5571368483485912,
    "score_1h": 35.68103448275862,
    "score_4h": 22.529411764705884,
    "score_7d": 4.218934911242604,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Champions League - Lionel Messi",
    "saturation_score": 885.0
  },
  {
    "rank": 23,
    "entity": "berrettini musetti",
    "discover_score": 3.0842954268607077,
    "score_1h": 5.456896551724138,
    "score_4h": 2.6470588235294117,
    "score_7d": 8.52662721893491,
    "extracted_entities": "Matteo Berrettini - Lorenzo Musetti - Tennis - Giocatori Italiani",
    "saturation_score": 134.0
  },
  {
    "rank": 13,
    "entity": "bodo lazio",
    "discover_score": 2.7717639838305614,
    "score_1h": 29.870689655172413,
    "score_4h": 6.2100840336134455,
    "score_7d": 5.928994082840236,
    "extracted_entities": "Bodo - Lazio - Calcio - UEFA Europa League - Partita",
    "saturation_score": 29.0
  },
  {
    "rank": 43,
    "entity": "azioni eni",
    "discover_score": 2.452495593011487,
    "score_1h": 19.198275862068968,
    "score_4h": 19.42016806722689,
    "score_7d": 3.3727810650887573,
    "extracted_entities": "Azioni - ENI - Mercato azionario",
    "saturation_score": 5.0
  },
  {
    "rank": 6,
    "entity": "incendio caivano",
    "discover_score": 2.163399997871909,
    "score_1h": 2.5775862068965516,
    "score_4h": 3.907563025210084,
    "score_7d": 4.180473372781065,
    "extracted_entities": "Incendio - Caivano - Emergenza - Vigili del Fuoco - Sicurezza",
    "saturation_score": 45.0
  },
  {
    "rank": 4,
    "entity": "tutto quello che ho",
    "discover_score": 2.1585242593890652,
    "score_1h": 12.448275862068964,
    "score_4h": 10.836134453781513,
    "score_7d": 2.1775147928994083,
    "extracted_entities": "Canzone - Testo - Significato - Artista - Album",
    "saturation_score": 328.0
  },
  {
    "rank": 34,
    "entity": "daniil medvedev",
    "discover_score": 1.8985164085635162,
    "score_1h": 0.0,
    "score_4h": 0.42016806722689076,
    "score_7d": 6.269230769230769,
    "extracted_entities": "Daniil Medvedev - Tennis - ATP - Classifica - Tornei",
    "saturation_score": 6.0
  },
  {
    "rank": 5,
    "entity": "futebol clube tirsense - benfica",
    "discover_score": 1.8906487717741676,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.8592436974789917,
    "score_7d": 3.93491124260355,
    "extracted_entities": "Futebol Clube Tirsense - Benfica - Partita di calcio - Squadre di calcio - Portogallo",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "sciopero treni 11 aprile",
    "discover_score": 1.775117213439612,
    "score_1h": 3.887931034482759,
    "score_4h": 3.4747899159663866,
    "score_7d": 4.491124260355029,
    "extracted_entities": "Sciopero - Treni - 11 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "inter miami - lafc",
    "discover_score": 1.3770905983318376,
    "score_1h": 0.0,
    "score_4h": 0.6785714285714286,
    "score_7d": 3.7485207100591715,
    "extracted_entities": "Inter Miami - LAFC - Partita di calcio - Major League Soccer",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "brindisi report",
    "discover_score": 1.0421418410819734,
    "score_1h": 1.2241379310344827,
    "score_4h": 0.25630252100840334,
    "score_7d": 3.5562130177514795,
    "extracted_entities": "Brindisi - Report - Notizie",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "dua lipa",
    "discover_score": 0.9298709901057888,
    "score_1h": 4.353448275862069,
    "score_4h": 1.0063025210084033,
    "score_7d": 2.6538461538461537,
    "extracted_entities": "Dua Lipa - Cantante - Musica Pop - Artista Brit Award - Album Future Nostalgia",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "mavericks - lakers",
    "discover_score": 0.8327185859302675,
    "score_1h": 2.0948275862068964,
    "score_4h": 2.8466386554621845,
    "score_7d": 1.5562130177514792,
    "extracted_entities": "Mavericks - Lakers - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "matic",
    "discover_score": 0.7689054938080495,
    "score_1h": 0.0,
    "score_4h": 0.13655462184873948,
    "score_7d": 2.742603550295858,
    "extracted_entities": "Matic - Criptovaluta - Blockchain - Polygon",
    "saturation_score": 146.0
  },
  {
    "rank": 31,
    "entity": "carlos alcaraz",
    "discover_score": 0.7405633129223033,
    "score_1h": 0.0,
    "score_4h": 0.10504201680672269,
    "score_7d": 2.4615384615384617,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Classifica",
    "saturation_score": 64.0
  },
  {
    "rank": 29,
    "entity": "psg vs aston villa",
    "discover_score": 0.7383873777138485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.455621301775148,
    "extracted_entities": "PSG - Aston Villa - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 5.0
  },
  {
    "rank": 11,
    "entity": "the golden bachelor valentina",
    "discover_score": 0.6871563594596313,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.9201680672268908,
    "score_7d": 1.6597633136094676,
    "extracted_entities": "The Golden Bachelor - Valentina",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "lamine yamal",
    "discover_score": 0.6677497730324783,
    "score_1h": 0.0,
    "score_4h": 0.3172268907563025,
    "score_7d": 2.1627218934911245,
    "extracted_entities": "Lamine Yamal - Calciatore - Barcellona - Spagna - La Liga",
    "saturation_score": 5.0
  },
  {
    "rank": 39,
    "entity": "coppa italia primavera",
    "discover_score": 0.6380341401117107,
    "score_1h": 0.0,
    "score_4h": 0.22268907563025211,
    "score_7d": 2.1390532544378695,
    "extracted_entities": "Coppa Italia - Primavera - Calcio - Torneo",
    "saturation_score": 223.0
  },
  {
    "rank": 24,
    "entity": "de luca terzo mandato regione campania",
    "discover_score": 0.589062144277604,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.0,
    "score_7d": 1.8550295857988166,
    "extracted_entities": "De Luca - Terzo mandato - Regione Campania",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "lewandowski",
    "discover_score": 0.5479379013807886,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.9327731092436975,
    "score_7d": 1.0976331360946745,
    "extracted_entities": "Robert Lewandowski - Calciatore - Bayern Monaco - Barcellona - Bundesliga",
    "saturation_score": 67.0
  },
  {
    "rank": 35,
    "entity": "pescara - arezzo",
    "discover_score": 0.5476444132378945,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 1.7781065088757397,
    "extracted_entities": "Pescara - Arezzo - Città - Confronto",
    "saturation_score": 118.0
  },
  {
    "rank": 8,
    "entity": "mario balotelli",
    "discover_score": 0.5422935452564962,
    "score_1h": 0.0,
    "score_4h": 0.052521008403361345,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Mario Balotelli - Calciatore - Italia - Carriera - Club di calcio",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "magic - celtics",
    "discover_score": 0.4491044274911422,
    "score_1h": 0.0,
    "score_4h": 0.018907563025210083,
    "score_7d": 1.5088757396449703,
    "extracted_entities": "Magic - Celtics - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "alejandro tabilo",
    "discover_score": 0.4385637346196128,
    "score_1h": 1.1724137931034484,
    "score_4h": 0.4600840336134454,
    "score_7d": 1.3372781065088757,
    "extracted_entities": "Alejandro Tabilo - Tennis - Cile",
    "saturation_score": 36.0
  },
  {
    "rank": 18,
    "entity": "caterina caselli",
    "discover_score": 0.39675690996792884,
    "score_1h": 8.10344827586207,
    "score_4h": 1.6491596638655461,
    "score_7d": 0.6568047337278107,
    "extracted_entities": "Caterina Caselli - Cantante - Produttrice musicale - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "jack draper",
    "discover_score": 0.339795252347197,
    "score_1h": 5.577586206896552,
    "score_4h": 0.75,
    "score_7d": 0.7159763313609468,
    "extracted_entities": "Jack Draper - Tennis - Giocatore",
    "saturation_score": 5.0
  },
  {
    "rank": 17,
    "entity": "mario cipollini",
    "discover_score": 0.3248994429544059,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.8130252100840336,
    "score_7d": 0.6005917159763314,
    "extracted_entities": "Mario Cipollini - Ciclismo - Italia",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "barcelona vs dortmund",
    "discover_score": 0.27657381619726834,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.7544378698224852,
    "extracted_entities": "Barcelona - Dortmund - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 3.0
  },
  {
    "rank": 42,
    "entity": "apertura borsa milano",
    "discover_score": 0.27448127584110893,
    "score_1h": 0.0,
    "score_4h": 0.615546218487395,
    "score_7d": 0.5946745562130178,
    "extracted_entities": "Apertura - Borsa - Milano",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "paola del din",
    "discover_score": 0.27118501989809457,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.4915966386554622,
    "score_7d": 0.606508875739645,
    "extracted_entities": "Paola Del Din - Resistenza Italiana - Seconda Guerra Mondiale - Partigiani - Medaglia d'Oro al Valor Militare",
    "saturation_score": 111.0
  },
  {
    "rank": 32,
    "entity": "raphinha",
    "discover_score": 0.22327732657532834,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4411764705882353,
    "score_7d": 0.3905325443786982,
    "extracted_entities": "Raphinha - Calciatore - FC Barcelona - Brasile - Premier League",
    "saturation_score": 61.0
  },
  {
    "rank": 25,
    "entity": "vangelo 10 aprile",
    "discover_score": 0.22248560757146518,
    "score_1h": 0.0,
    "score_4h": 0.8088235294117647,
    "score_7d": 0.2692307692307692,
    "extracted_entities": "Vangelo - 10 aprile - Letture bibliche - Liturgia - Chiesa",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "re carlo iii discorso",
    "discover_score": 0.21090585692167982,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.8802521008403361,
    "score_7d": 0.15384615384615385,
    "extracted_entities": "Re Carlo III - Discorso",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "75 coltellate senza aggravante",
    "discover_score": 0.2093755557704599,
    "score_1h": 0.0,
    "score_4h": 0.9684873949579832,
    "score_7d": 0.13609467455621302,
    "extracted_entities": "Omicidio - Coltellate - Aggravante - Crimine",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "maria porro",
    "discover_score": 0.1930396780672006,
    "score_1h": 4.129310344827586,
    "score_4h": 0.9726890756302521,
    "score_7d": 0.1242603550295858,
    "extracted_entities": "Maria Porro",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "kings - nuggets",
    "discover_score": 0.19303763089282225,
    "score_1h": 0.0,
    "score_4h": 0.4852941176470588,
    "score_7d": 0.2781065088757396,
    "extracted_entities": "Kings - Nuggets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "warriors - spurs",
    "discover_score": 0.1927716027768817,
    "score_1h": 0.0,
    "score_4h": 0.6470588235294118,
    "score_7d": 0.22781065088757396,
    "extracted_entities": "Warriors - Spurs - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "enrico preziosi",
    "discover_score": 0.12658579055550148,
    "score_1h": 0.45689655172413796,
    "score_4h": 0.14915966386554622,
    "score_7d": 0.05325443786982249,
    "extracted_entities": "Enrico Preziosi - Persone - Imprenditoria - Calcio - Genoa",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "borussia dortmund",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "clippers - rockets",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "eni azioni",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "rania di giordania",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "azioni enel",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "gt vs rr",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "jennifer aniston",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "champions oggi",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "oroscopo oggi sagittario paolo fox",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "unicredit azioni",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "alex de minaur",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "paolo crepet",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "kingsman secret service",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "nikkei",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "suns - thunder",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "insider trading",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "désiré doué",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "vanessa incontrada",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "meteo roma oggi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "ansu fati",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "stasera in tv",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "car parts",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "barcelone – dortmund",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "pedri",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "nba classifica",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "tronchetti provera",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "natalia grace",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "roberto mancini sampdoria",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "flavio cobolli",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "assegno unico aprile 2025",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "bulls - heat",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "nasdaq 100",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "alcaraz oggi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "andrea pignataro",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "concacaf champions cup",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "cossiga",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "gavi",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "gabriella pession",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "hang seng",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "luis enrique",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "sciatrice federica brignone",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "fc barcelona",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "ashley judd",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "yalla live",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "delivery",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "valentin vacherot",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "ossicodone",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "noipa stipendio",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "camp nou",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "alice pavarotti",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "pag",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "sp500",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "livorno",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "rashford",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "francesca uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "málaga - reggiana",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "ron howard",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "camilla parker bowles",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "aldo serena",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "marco tronchetti provera",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "damián martínez",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "khvicha kvaratskhelia",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "luciano moggi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "vitinha",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "champions league in tv",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "tv 8",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "novara conegliano",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "pizza",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "lanciatore",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "santiago de martino",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "الزمالك ضد نادي ستيلينبوش",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "buon giovedì 10 aprile",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "canale 8",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "birmingham",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "paris",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "asensio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "pif",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "trade republic",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "nvidia azioni",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "szczesny",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "lady diana",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "steers",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "taglio tassi bce",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "barcellona squadra",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "amnotizie",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "marco rizzo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "matrimonio a prima vista",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "marco liorni",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "grado",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "action figure chatgpt",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "mbappe",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "francisco cerúndolo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bopanna",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "nadia uomini e donne",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "hakimi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "thunderbolts",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "kuala lumpur",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "mario cinque",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "sydney sweeney",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "pietro conti",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "vladimir luxuria",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "daniel altmaier",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "zancan",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "mediterranean",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "tv8",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "vicenza",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "barcola",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "stefano de martino",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "max pezzali",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "paris hilton",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "paola frassinetti",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "carney chukwuemeka",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "semifinali champions",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "arthur fils",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "wall street",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "andrea stroppa",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "marco vannini",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "principessa ruspoli",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "nvidia stock",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "shahrukh khan",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "madonna",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "casper ruud",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "operazione vendetta",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "luana uomini e donne",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "giochi ps plus extra aprile 2025",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "gaël monfils",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "acquaroli",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "vittorio pisani",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "tuchel",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "tony blanco",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "si vince tutto",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "ramsey",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "cingoli",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "cruciani",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "walter zenga",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "pirelli",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "yamal barcellona",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "down jones",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "willian pacho",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "bergamo news",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "matteo bassetti",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "ana de armas",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "daredevil born again",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "eden",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "coldplay",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "nasdaq composite",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "wojciech szczęsny",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "william hill",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "rohan bopanna",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "ronin",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "stalin",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "alejandro balde",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "richard gasquet",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "tomáš macháč",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "apple azioni",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "gasquet",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "pirlo",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "partite stasera",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "bergomi",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "lupo",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "dibu martinez",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "dembele",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "glpress",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "una commedia pericolosa trama",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "dangerous",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "messaggero",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "dani olmo",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "karim adeyemi",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "andy garcia",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "marche",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "canale 8 diretta",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-10 09:43:15",
  "trends_count": 222,
  "top_score": 14.181027724635852,
  "runtime_minutes": 4.149484316507976,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi ci guidano attraverso un regno di interessi contrastanti e crescenti. Dominano la scena il mondo del calcio e l’universo economico-finanziario. La vivacità di eventi sportivi, come il match tra Barcellona e Borussia Dortmund, si confronta con il ronzio costante delle borse italiane e globali. Tuttavia, un nome emerge tra gli incantamenti calcistici: Valentina Tomada, il cui crescente interesse e scarsa saturazione suggeriscono potenziali narrazioni apprezzate su Google Discover.\n\nOpportunità mature aspettano nei mondi delle azioni con \"azioni Leonardo\" (#6) e nel meteo con \"meteo Roma\" (#4), entrambi vantando alti Discover Scores e bassi livelli di saturazione. Questi temi promettono un meritato risalto per coloro che sanno raccontarne la sostanza.\n\nD'altronde, occorre prudenza con la \"borsa italiana\" (#3), il cui saturo orizzonte sfavilla di attenzione ostinata ma competitiva, e il \"match PSG - Aston Villa\" (#11), suggerito dal basso Discover Score. Acquisire una visione lucida di queste soglie può evitare scivoloni.\n\nIn questo nebuloso arazzo di tendenze, la capacità di discernere e raccontare storie uniche, ricche di dettagli e profondamente connesse all’interesse comunitario, rimane la chiave per prevalere."
};
