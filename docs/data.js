const trendData = [
  {
    "rank": 1,
    "entity": "valentina tomada",
    "discover_score": 15.320317448446568,
    "score_1h": 56.03448275862069,
    "score_4h": 41.319327731092436,
    "score_7d": 6.934911242603551,
    "extracted_entities": "Valentina Tomada",
    "saturation_score": 243.0
  },
  {
    "rank": 17,
    "entity": "borsa italiana",
    "discover_score": 10.921769589986107,
    "score_1h": 71.17241379310344,
    "score_4h": 28.71638655462185,
    "score_7d": 17.958579881656803,
    "extracted_entities": "Borsa - Italia - Mercati finanziari",
    "saturation_score": 3650.0
  },
  {
    "rank": 22,
    "entity": "meteo roma",
    "discover_score": 10.649191501329229,
    "score_1h": 46.87068965517241,
    "score_4h": 37.343817024717836,
    "score_7d": 16.68639053254438,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 54.0
  },
  {
    "rank": 44,
    "entity": "nasdaq",
    "discover_score": 9.999631117511068,
    "score_1h": 32.52586206896552,
    "score_4h": 12.533613445378151,
    "score_7d": 25.041420118343197,
    "extracted_entities": "Nasdaq - Borsa valori - Indici azionari - Mercato finanziario - Tecnologia",
    "saturation_score": 431.0
  },
  {
    "rank": 42,
    "entity": "azioni enel",
    "discover_score": 7.83249223268508,
    "score_1h": 27.913793103448278,
    "score_4h": 9.449579831932773,
    "score_7d": 20.40532544378698,
    "extracted_entities": "Azioni - Enel - Mercato azionario - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 43,
    "entity": "eni azioni",
    "discover_score": 6.6853672829989454,
    "score_1h": 20.025862068965516,
    "score_4h": 15.688653704159488,
    "score_7d": 15.961538461538463,
    "extracted_entities": "Eni - Azioni - Borsa - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 2,
    "entity": "barcellona - borussia dortmund",
    "discover_score": 5.518756597653158,
    "score_1h": 32.775862068965516,
    "score_4h": 24.010644843711546,
    "score_7d": 3.5964708368554525,
    "extracted_entities": "Barcellona - Borussia Dortmund - Calcio - Partita - Champions League",
    "saturation_score": 115.0
  },
  {
    "rank": 41,
    "entity": "azioni leonardo",
    "discover_score": 5.062493537763056,
    "score_1h": 19.612068965517242,
    "score_4h": 6.901260504201681,
    "score_7d": 13.888243167089321,
    "extracted_entities": "Azioni - Leonardo - Borsa - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 3,
    "entity": "psg - aston villa",
    "discover_score": 4.6887587485271744,
    "score_1h": 32.258620689655174,
    "score_4h": 21.214285714285715,
    "score_7d": 3.772189349112426,
    "extracted_entities": "PSG - Aston Villa - Calcio - Partita - Club",
    "saturation_score": 430.0
  },
  {
    "rank": 38,
    "entity": "ftse mib",
    "discover_score": 4.585777070237979,
    "score_1h": 32.01373465809468,
    "score_4h": 12.321428571428571,
    "score_7d": 10.973372781065088,
    "extracted_entities": "FTSE MIB - Borsa Italiana - Indice azionario",
    "saturation_score": 557.0
  },
  {
    "rank": 34,
    "entity": "borsa milano oggi",
    "discover_score": 4.2893068427615475,
    "score_1h": 3.939655172413793,
    "score_4h": 5.735294117647059,
    "score_7d": 11.66298605240913,
    "extracted_entities": "Borsa - Milano - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "psg",
    "discover_score": 4.233441657569757,
    "score_1h": 42.91379310344828,
    "score_4h": 28.514705882352942,
    "score_7d": 4.085798816568047,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico",
    "saturation_score": 863.0
  },
  {
    "rank": 23,
    "entity": "berrettini musetti",
    "discover_score": 3.6451561142532825,
    "score_1h": 2.1810344827586206,
    "score_4h": 0.36134453781512604,
    "score_7d": 10.60134897154128,
    "extracted_entities": "Matteo Berrettini - Lorenzo Musetti - Tennis",
    "saturation_score": 127.0
  },
  {
    "rank": 8,
    "entity": "dazi trump cina",
    "discover_score": 2.890481610403565,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.8585053268169193,
    "score_7d": 6.88137503522119,
    "extracted_entities": "Dazi - Trump - Cina - Commercio - Tariffe",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "borussia dortmund",
    "discover_score": 2.8137250635911935,
    "score_1h": 24.801724137931032,
    "score_4h": 23.464285714285715,
    "score_7d": 3.691303888419273,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 215.0
  },
  {
    "rank": 18,
    "entity": "barcelona",
    "discover_score": 2.6976233250152526,
    "score_1h": 14.068965517241379,
    "score_4h": 13.466386554621849,
    "score_7d": 4.387186531417301,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 133.0
  },
  {
    "rank": 28,
    "entity": "azioni eni",
    "discover_score": 2.5538410532401574,
    "score_1h": 22.06896551724138,
    "score_4h": 11.619747899159664,
    "score_7d": 5.01961820231051,
    "extracted_entities": "Azioni - ENI - Mercato azionario",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "dua lipa",
    "discover_score": 2.2305237081437204,
    "score_1h": 1.146551724137931,
    "score_4h": 0.2815126050420168,
    "score_7d": 6.73541842772612,
    "extracted_entities": "Dua Lipa - Cantante - Musica Pop - Artista Brit Award - Album Future Nostalgia",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "futebol clube tirsense - benfica",
    "discover_score": 2.106802144893016,
    "score_1h": 0.0,
    "score_4h": 4.296218487394958,
    "score_7d": 3.962454212454212,
    "extracted_entities": "Futebol Clube Tirsense - Benfica - Partita di calcio - Squadre di calcio - Portogallo",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "mavericks - lakers",
    "discover_score": 1.7438045820500279,
    "score_1h": 1.543103448275862,
    "score_4h": 7.724789915966387,
    "score_7d": 2.679399126514511,
    "extracted_entities": "Mavericks - Lakers - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 4,
    "entity": "tutto quello che ho",
    "discover_score": 1.5927255549889576,
    "score_1h": 8.732758620689655,
    "score_4h": 7.289915966386554,
    "score_7d": 1.8372781065088757,
    "extracted_entities": "Canzone - Testo - Significato - Artista - Album",
    "saturation_score": 186.0
  },
  {
    "rank": 5,
    "entity": "incendio caivano",
    "discover_score": 1.4771390965305335,
    "score_1h": 3.1120689655172415,
    "score_4h": 2.8716114060687037,
    "score_7d": 2.78228021978022,
    "extracted_entities": "Incendio - Caivano - Emergenza - Vigili del Fuoco - Sicurezza",
    "saturation_score": 84.0
  },
  {
    "rank": 45,
    "entity": "unicredit azioni",
    "discover_score": 1.051238528270348,
    "score_1h": 22.974137931034484,
    "score_4h": 10.926470588235293,
    "score_7d": 1.020956607495069,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 15,
    "entity": "sciopero treni 11 aprile",
    "discover_score": 0.9967782380620925,
    "score_1h": 2.896551724137931,
    "score_4h": 1.3781512605042017,
    "score_7d": 2.6124260355029585,
    "extracted_entities": "Sciopero - Treni - 11 aprile",
    "saturation_score": 1.0
  },
  {
    "rank": 7,
    "entity": "lewandowski",
    "discover_score": 0.8830184131284957,
    "score_1h": 2.0,
    "score_4h": 0.885104250905383,
    "score_7d": 2.0419308255846715,
    "extracted_entities": "Robert Lewandowski - Calcio - Bayern Monaco - Barcellona - Bundesliga",
    "saturation_score": 69.0
  },
  {
    "rank": 12,
    "entity": "inter miami - lafc",
    "discover_score": 0.872933965150278,
    "score_1h": 0.0,
    "score_4h": 1.2052670440561162,
    "score_7d": 2.1775147928994083,
    "extracted_entities": "Inter Miami - LAFC - Calcio - MLS",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "carlos alcaraz",
    "discover_score": 0.8191924740747858,
    "score_1h": 0.0,
    "score_4h": 0.1594792728807004,
    "score_7d": 2.662721893491124,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 35.0
  },
  {
    "rank": 31,
    "entity": "daniil medvedev",
    "discover_score": 0.7673272372175297,
    "score_1h": 0.0,
    "score_4h": 0.31843992827256423,
    "score_7d": 2.497587348548887,
    "extracted_entities": "Daniil Medvedev - Tennis - ATP - Classifica - Tornei",
    "saturation_score": 6.0
  },
  {
    "rank": 26,
    "entity": "raphinha",
    "discover_score": 0.5885545820638229,
    "score_1h": 0.0,
    "score_4h": 0.15756302521008403,
    "score_7d": 1.835605100028177,
    "extracted_entities": "Raphinha - Calciatore - FC Barcelona - Brasile - Premier League",
    "saturation_score": 107.0
  },
  {
    "rank": 19,
    "entity": "de luca terzo mandato regione campania",
    "discover_score": 0.5772081705843964,
    "score_1h": 0.0,
    "score_4h": 0.6953781512605042,
    "score_7d": 1.5483058608058609,
    "extracted_entities": "De Luca - Terzo mandato - Regione Campania",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "pescara - arezzo",
    "discover_score": 0.5482156686445767,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.5042016806722689,
    "score_7d": 1.6562411947027331,
    "extracted_entities": "Pescara - Arezzo - Città - Confronto",
    "saturation_score": 52.0
  },
  {
    "rank": 33,
    "entity": "brindisi report",
    "discover_score": 0.5349623948367063,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.06722689075630252,
    "score_7d": 1.7366863905325445,
    "extracted_entities": "Brindisi - Report - Notizie",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "lamine yamal",
    "discover_score": 0.5253736629624866,
    "score_1h": 0.847457627118644,
    "score_4h": 0.5588235294117647,
    "score_7d": 1.5266272189349113,
    "extracted_entities": "Lamine Yamal - Calciatore - Barcellona - Spagna - La Liga",
    "saturation_score": 5.0
  },
  {
    "rank": 36,
    "entity": "barcelona vs dortmund",
    "discover_score": 0.5179713442926142,
    "score_1h": 1.25,
    "score_4h": 0.0,
    "score_7d": 1.7159763313609466,
    "extracted_entities": "Barcelona - Dortmund - Partita di calcio - UEFA Champions League",
    "saturation_score": 5.0
  },
  {
    "rank": 30,
    "entity": "warriors - spurs",
    "discover_score": 0.49532985663761975,
    "score_1h": 0.5254237288135594,
    "score_4h": 0.9074223831792131,
    "score_7d": 1.3284023668639053,
    "extracted_entities": "Warriors - Spurs - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 10,
    "entity": "mario balotelli",
    "discover_score": 0.47411552066690343,
    "score_1h": 0.0,
    "score_4h": 0.16176470588235292,
    "score_7d": 1.169167371090448,
    "extracted_entities": "Mario Balotelli - Calciatore - Italia - Sport - Serie A",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "re carlo iii discorso",
    "discover_score": 0.4188868685518589,
    "score_1h": 2.25,
    "score_4h": 1.4054621848739495,
    "score_7d": 0.6923429134967596,
    "extracted_entities": "Re Carlo III - Discorso - Monarchia Britannica",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "75 coltellate senza aggravante",
    "discover_score": 0.41321280205598,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.06092436974789916,
    "score_7d": 1.0739644970414202,
    "extracted_entities": "Omicidio - Coltellate - Aggravante - Crimine",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "coppa italia primavera",
    "discover_score": 0.35945974114597995,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.9467455621301775,
    "extracted_entities": "Coppa Italia - Primavera - Calcio - Torneo",
    "saturation_score": 223.0
  },
  {
    "rank": 47,
    "entity": "alejandro tabilo",
    "discover_score": 0.3543246245948386,
    "score_1h": 0.0,
    "score_4h": 0.0861344537815126,
    "score_7d": 1.0960129613975766,
    "extracted_entities": "Alejandro Tabilo - Tennis - Cile",
    "saturation_score": 37.0
  },
  {
    "rank": 25,
    "entity": "psg vs aston villa",
    "discover_score": 0.35069754417665633,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.0,
    "score_7d": 0.9822485207100591,
    "extracted_entities": "PSG - Aston Villa - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 6.0
  },
  {
    "rank": 35,
    "entity": "bodo glimt",
    "discover_score": 0.3154189832065001,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.6467775394676698,
    "score_7d": 0.7278106508875739,
    "extracted_entities": "Bodø/Glimt - Calcio - Norvegia - Eliteserien",
    "saturation_score": 486.0
  },
  {
    "rank": 24,
    "entity": "vangelo 10 aprile",
    "discover_score": 0.2854808441153273,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3823529411764706,
    "score_7d": 0.6183431952662721,
    "extracted_entities": "Vangelo - 10 aprile - Letture bibliche - Liturgia - Cristianesimo",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "matic",
    "discover_score": 0.25987194789645623,
    "score_1h": 0.0,
    "score_4h": 0.16527196652719664,
    "score_7d": 0.6745562130177515,
    "extracted_entities": "Matic - Criptovaluta - Blockchain - Polygon",
    "saturation_score": 81.0
  },
  {
    "rank": 40,
    "entity": "paola del din",
    "discover_score": 0.24913892085844375,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.3886554621848739,
    "score_7d": 0.5403282614821077,
    "extracted_entities": "Paola Del Din - Resistenza Italiana - Seconda Guerra Mondiale - Partigiani - Medaglia d'Oro al Valor Militare",
    "saturation_score": 150.0
  },
  {
    "rank": 48,
    "entity": "clippers - rockets",
    "discover_score": 0.22873475026576087,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.11764705882352941,
    "score_7d": 0.5473372781065089,
    "extracted_entities": "Clippers - Rockets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "kings - nuggets",
    "discover_score": 0.2119869555974252,
    "score_1h": 0.0,
    "score_4h": 0.34873949579831937,
    "score_7d": 0.3888771484925331,
    "extracted_entities": "Kings - Nuggets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "the golden bachelor valentina",
    "discover_score": 0.20883087975943074,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.49369747899159666,
    "score_7d": 0.2692307692307693,
    "extracted_entities": "The Golden Bachelor - Valentina",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "mario cipollini",
    "discover_score": 0.16766081095409127,
    "score_1h": 2.853448275862069,
    "score_4h": 0.804788861151155,
    "score_7d": 0.03559101155255001,
    "extracted_entities": "Mario Cipollini - Ciclismo - Sport - Italia",
    "saturation_score": 7.0
  },
  {
    "rank": 46,
    "entity": "magic - celtics",
    "discover_score": 0.14157285233951566,
    "score_1h": 0.0,
    "score_4h": 0.4514081783340952,
    "score_7d": 0.07692307692307693,
    "extracted_entities": "Magic - Celtics - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "rania di giordania",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "borse asiatiche oggi",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "jennifer aniston",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "enrico preziosi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "oroscopo oggi sagittario paolo fox",
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
    "entity": "champions oggi",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "alex de minaur",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "paolo crepet",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "suns - thunder",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "nikkei",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "kingsman secret service",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "meteo roma oggi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "insider trading",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "ansu fati",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "car parts",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nba classifica",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "tronchetti provera",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "stasera in tv",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "barcelone – dortmund",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "andrea pignataro",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "pedri",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "bulls - heat",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "assegno unico aprile 2025",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "natalia grace",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "concacaf champions cup",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "roberto mancini sampdoria",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "flavio cobolli",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "hang seng",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "nasdaq 100",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "cossiga",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "gavi",
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
    "entity": "santo domingo crollo discoteca",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "gabriella pession",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "luis enrique",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "delivery",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "ashley judd",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "yalla live",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "sciatrice federica brignone",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "ossicodone",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "valentin vacherot",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "noipa stipendio",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "camp nou",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "alice pavarotti",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "pag",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "sp500",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "livorno",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "buon giovedì 10 aprile",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "ron howard",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "málaga - reggiana",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "francesca uomini e donne",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "pizza",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "aldo serena",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "damián martínez",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "camilla parker bowles",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "khvicha kvaratskhelia",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "vitinha",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "luciano moggi",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "novara conegliano",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "tv 8",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "champions league in tv",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "rashford",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "lanciatore",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "santiago de martino",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "الزمالك ضد نادي ستيلينبوش",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "canale 8",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "paris",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "birmingham",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "asensio",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "nvidia azioni",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "pif",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "trade republic",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "szczesny",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "steers",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lady diana",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "fermin lopez",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "taglio tassi bce",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "barcellona squadra",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "marco rizzo",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "matrimonio a prima vista",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "amnotizie",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "marco liorni",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "action figure chatgpt",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "grado",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "mbappe",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "thunderbolts",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "hakimi",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "bopanna",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "francisco cerúndolo",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "mario cinque",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "paola frassinetti",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "nadia uomini e donne",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "kuala lumpur",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "sydney sweeney",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "pietro conti",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "mediterranean",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "vladimir luxuria",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "zancan",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "daniel altmaier",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "marcus rashford",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "tv8",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "vicenza",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "barcola",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "stefano de martino",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "casertace",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "paris hilton",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "max pezzali",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "semifinali champions",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "carney chukwuemeka",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "segundo castillo",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "wall street",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "arthur fils",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "andrea stroppa",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "nvidia stock",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "marco vannini",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "principessa ruspoli",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "shahrukh khan",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "madonna",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "operazione vendetta",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "casper ruud",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "giochi ps plus extra aprile 2025",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "luana uomini e donne",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "gaël monfils",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "acquaroli",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "vittorio pisani",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "tuchel",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "tony blanco",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "si vince tutto",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ramsey",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "cruciani",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "bergamo news",
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
    "entity": "walter zenga",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "down jones",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "willian pacho",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "matteo bassetti",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "daredevil born again",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "eden",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "coldplay",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "nasdaq composite",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "william hill",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "wojciech szczęsny",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "rohan bopanna",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "ronin",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "stalin",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "chatgpt down",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "alejandro balde",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "tomáš macháč",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "richard gasquet",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "apple azioni",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "gasquet",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "pirlo",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "partite stasera",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "dibu martinez",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "lupo",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "dembele",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "bergomi",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "una commedia pericolosa trama",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "glpress",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "spotify down",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "dangerous",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "messaggero",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "dani olmo",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "karim adeyemi",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "andy garcia",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "marche",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "canale 8 diretta",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-10 09:03:57",
  "trends_count": 219,
  "top_score": 15.320317448446568,
  "runtime_minutes": 19.119805296262104,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano due grandi temi che avvolgono il panorama delle tendenze italiane: il fervore dei mercati finanziari, con un focus su Borsa e investimenti, e l'immortale passione per il calcio. Dal battere dei piedi negli stadi spagnoli ai flussi dei mercati azionari, l'energia nell'aria è palpabile.\n\nLa miglior opportunità per chi esplora l'universo di Google Discover si rivela nel trend #5, \"azioni enel\". Con un DScore rispettabile di 7.8 e una saturazione di soli 5, vi è un ampio spazio per contenuti che esplorano investimenti nell'energia in crescita. All'ombra di questa opportunità, il tema #2 \"borsa italiana\" merita attenzione sebbene sia già molto coperto, indicato da un'alta saturazione.\n\nCautela è consigliata per il trend #2, \"borsa italiana\", il cui elevato livello di saturazione (3650 risultati) segnala un campo saturo e competitivo. Un approccio strategico sarà essenziale per distinguersi.\n\nIn un mondo in continuo movimento, ascolta il battito dei mercati e delle piazze sportive, poiché lì risiede il potenziale per la prossima grande storia. Sii pronto a coglierla."
};
