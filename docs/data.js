const trendData = [
  {
    "rank": 11,
    "entity": "borsa italiana",
    "discover_score": 11.017345689640443,
    "score_1h": 55.91379310344828,
    "score_4h": 16.98949579831933,
    "score_7d": 18.710059171597635,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti",
    "saturation_score": 3550.0
  },
  {
    "rank": 23,
    "entity": "meteo roma",
    "discover_score": 10.715245455993312,
    "score_1h": 55.37068965517241,
    "score_4h": 34.2563025210084,
    "score_7d": 17.772189349112427,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 57.0
  },
  {
    "rank": 42,
    "entity": "nasdaq",
    "discover_score": 10.028253758600622,
    "score_1h": 16.594827586206897,
    "score_4h": 8.084033613445378,
    "score_7d": 26.044378698224854,
    "extracted_entities": "Nasdaq - Borsa valori - Indici azionari - Mercato finanziario - Tecnologia",
    "saturation_score": 437.0
  },
  {
    "rank": 1,
    "entity": "barcellona - borussia dortmund",
    "discover_score": 9.552769748158477,
    "score_1h": 47.56516656925774,
    "score_4h": 38.51260504201681,
    "score_7d": 3.5739644970414197,
    "extracted_entities": "Barcellona - Borussia Dortmund - Calcio - Partita - Champions League",
    "saturation_score": 256.0
  },
  {
    "rank": 2,
    "entity": "valentina tomada",
    "discover_score": 7.069448649740296,
    "score_1h": 63.73275862068965,
    "score_4h": 21.65126050420168,
    "score_7d": 5.757396449704142,
    "extracted_entities": "Valentina Tomada",
    "saturation_score": 175.0
  },
  {
    "rank": 19,
    "entity": "ftse mib",
    "discover_score": 6.767307691916433,
    "score_1h": 41.51724137931034,
    "score_4h": 4.964285714285714,
    "score_7d": 16.11834319526627,
    "extracted_entities": "FTSE MIB - Borsa Italiana - Indice azionario - Mercato finanziario - Investimenti",
    "saturation_score": 944.0
  },
  {
    "rank": 3,
    "entity": "psg - aston villa",
    "discover_score": 6.322238280665929,
    "score_1h": 39.01724137931035,
    "score_4h": 32.59033613445378,
    "score_7d": 3.878698224852071,
    "extracted_entities": "PSG - Aston Villa - Calcio - Partita - Club",
    "saturation_score": 561.0
  },
  {
    "rank": 18,
    "entity": "eni azioni",
    "discover_score": 6.1010252371946745,
    "score_1h": 34.63793103448276,
    "score_4h": 5.245798319327731,
    "score_7d": 14.431952662721894,
    "extracted_entities": "Eni - Azioni - Borsa - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 22,
    "entity": "barcelona",
    "discover_score": 3.8413941306674486,
    "score_1h": 7.827586206896552,
    "score_4h": 3.7626050420168067,
    "score_7d": 10.091715976331361,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 74.0
  },
  {
    "rank": 47,
    "entity": "borussia dortmund",
    "discover_score": 3.663142093269331,
    "score_1h": 53.03448275862069,
    "score_4h": 34.241596638655466,
    "score_7d": 3.6508875739644973,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 325.0
  },
  {
    "rank": 16,
    "entity": "psg",
    "discover_score": 3.1387252870829294,
    "score_1h": 54.93103448275862,
    "score_4h": 18.20798319327731,
    "score_7d": 4.207100591715976,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico",
    "saturation_score": 867.0
  },
  {
    "rank": 27,
    "entity": "berrettini musetti",
    "discover_score": 2.9352449654078563,
    "score_1h": 2.405172413793103,
    "score_4h": 0.35714285714285715,
    "score_7d": 9.00887573964497,
    "extracted_entities": "Matteo Berrettini - Lorenzo Musetti - Tennis - Giocatori italiani",
    "saturation_score": 100.0
  },
  {
    "rank": 7,
    "entity": "dazi trump cina",
    "discover_score": 1.8275925948137988,
    "score_1h": 4.163793103448276,
    "score_4h": 0.9432773109243697,
    "score_7d": 4.35207100591716,
    "extracted_entities": "Dazi - Trump - Cina - Commercio internazionale - Politica economica",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "borse asiatiche",
    "discover_score": 1.6792872710243054,
    "score_1h": 0.5517241379310345,
    "score_4h": 1.7415966386554622,
    "score_7d": 5.316568047337278,
    "extracted_entities": "Borse - Asia - Mercati finanziari",
    "saturation_score": 63.0
  },
  {
    "rank": 9,
    "entity": "mavericks - lakers",
    "discover_score": 1.631716737287691,
    "score_1h": 0.9396551724137931,
    "score_4h": 6.6155462184873945,
    "score_7d": 2.671597633136095,
    "extracted_entities": "Dallas Mavericks - Los Angeles Lakers - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 1.0
  },
  {
    "rank": 4,
    "entity": "tutto quello che ho",
    "discover_score": 1.375855619362246,
    "score_1h": 14.137931034482758,
    "score_4h": 3.99984177771527,
    "score_7d": 2.1331360946745566,
    "extracted_entities": "Canzone - Artista - Album - Testo - Significato",
    "saturation_score": 225.0
  },
  {
    "rank": 31,
    "entity": "daniil medvedev",
    "discover_score": 1.3578133008050979,
    "score_1h": 1.3103448275862069,
    "score_4h": 1.1659663865546217,
    "score_7d": 4.263313609467455,
    "extracted_entities": "Daniil Medvedev - Tennis - ATP - Classifica - Tornei",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "lamine yamal",
    "discover_score": 1.254516135174775,
    "score_1h": 1.5344827586206897,
    "score_4h": 0.10294117647058823,
    "score_7d": 4.174556213017752,
    "extracted_entities": "Lamine Yamal - Calciatore - Barcellona - Spagna - La Liga",
    "saturation_score": 5.0
  },
  {
    "rank": 6,
    "entity": "futebol clube tirsense - benfica",
    "discover_score": 1.2052753141785826,
    "score_1h": 0.5344827586206897,
    "score_4h": 3.624353925670687,
    "score_7d": 2.0857988165680474,
    "extracted_entities": "Futebol Clube Tirsense - Benfica - Partita di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "coppa italia primavera",
    "discover_score": 1.098550029629818,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.4957983193277311,
    "score_7d": 3.7011834319526624,
    "extracted_entities": "Coppa Italia - Primavera - Calcio - Torneo",
    "saturation_score": 333.0
  },
  {
    "rank": 20,
    "entity": "sciopero treni 11 aprile",
    "discover_score": 0.9765829397353514,
    "score_1h": 5.336206896551724,
    "score_4h": 0.6218487394957983,
    "score_7d": 2.908284023668639,
    "extracted_entities": "Sciopero - Treni - 11 aprile",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "incendio caivano",
    "discover_score": 0.9074967783788788,
    "score_1h": 6.895675043834014,
    "score_4h": 1.8865546218487395,
    "score_7d": 1.6952662721893492,
    "extracted_entities": "Incendio - Caivano - Emergenza - Vigili del Fuoco - Sicurezza",
    "saturation_score": 44.0
  },
  {
    "rank": 15,
    "entity": "warriors - spurs",
    "discover_score": 0.7020753668017388,
    "score_1h": 1.456896551724138,
    "score_4h": 1.48109243697479,
    "score_7d": 1.6715976331360947,
    "extracted_entities": "Warriors - Spurs - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 45,
    "entity": "matic",
    "discover_score": 0.6666014399449438,
    "score_1h": 0.847457627118644,
    "score_4h": 0.19747899159663868,
    "score_7d": 2.3076923076923075,
    "extracted_entities": "Matic - Criptovaluta - Blockchain - Polygon",
    "saturation_score": 135.0
  },
  {
    "rank": 21,
    "entity": "de luca terzo mandato regione campania",
    "discover_score": 0.6376562505022683,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.07773109243697479,
    "score_7d": 1.9585798816568047,
    "extracted_entities": "De Luca - Terzo mandato - Regione Campania",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "meteo roma oggi",
    "discover_score": 0.6153570766477375,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.7878151260504201,
    "score_7d": 1.9733727810650887,
    "extracted_entities": "Meteo - Roma - Oggi",
    "saturation_score": 3.0
  },
  {
    "rank": 12,
    "entity": "the golden bachelor valentina",
    "discover_score": 0.5522591786013312,
    "score_1h": 1.1982758620689655,
    "score_4h": 0.7449720473963645,
    "score_7d": 1.3136094674556213,
    "extracted_entities": "The Golden Bachelor - Valentina",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "lewandowski",
    "discover_score": 0.5219519549935762,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5714285714285714,
    "score_7d": 1.150887573964497,
    "extracted_entities": "Robert Lewandowski - Calciatore - Bayern Monaco - Barcellona - Bundesliga",
    "saturation_score": 72.0
  },
  {
    "rank": 13,
    "entity": "inter miami - lafc",
    "discover_score": 0.43892725803570265,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.8865546218487395,
    "score_7d": 0.92603550295858,
    "extracted_entities": "Inter Miami - LAFC - Partita di calcio - Major League Soccer",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "carlos alcaraz",
    "discover_score": 0.39289023532119044,
    "score_1h": 0.0,
    "score_4h": 0.6722689075630253,
    "score_7d": 1.0,
    "extracted_entities": "Carlos Alcaraz - Tennis - Sport - Atleta",
    "saturation_score": 66.0
  },
  {
    "rank": 10,
    "entity": "mario balotelli",
    "discover_score": 0.3813891246489844,
    "score_1h": 0.29310344827586204,
    "score_4h": 0.04411764705882353,
    "score_7d": 0.8994082840236687,
    "extracted_entities": "Mario Balotelli - Calciatore - Italia - Sport - Carriera",
    "saturation_score": 1.0
  },
  {
    "rank": 26,
    "entity": "psg vs aston villa",
    "discover_score": 0.3715441863228111,
    "score_1h": 0.0,
    "score_4h": 0.6197478991596639,
    "score_7d": 0.9023668639053255,
    "extracted_entities": "PSG - Aston Villa - Partita di calcio - Club calcistici - Competizione sportiva",
    "saturation_score": 5.0
  },
  {
    "rank": 28,
    "entity": "raphinha",
    "discover_score": 0.3643001729219815,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.5588235294117647,
    "score_7d": 0.9053254437869823,
    "extracted_entities": "Raphinha - Calciatore - FC Barcelona - Brasile - Premier League",
    "saturation_score": 61.0
  },
  {
    "rank": 35,
    "entity": "barcelona vs dortmund",
    "discover_score": 0.337638570262399,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Barcelona - Dortmund - Partita di calcio - UEFA Champions League",
    "saturation_score": 3.0
  },
  {
    "rank": 34,
    "entity": "75 coltellate senza aggravante",
    "discover_score": 0.3279550439738251,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.28991596638655465,
    "score_7d": 0.8698224852071006,
    "extracted_entities": "Omicidio - Coltellate - Aggravante - Crimine",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "bodo glimt",
    "discover_score": 0.31099471189851435,
    "score_1h": 2.043103448275862,
    "score_4h": 0.4023241095601421,
    "score_7d": 0.8284023668639053,
    "extracted_entities": "Bodø/Glimt - Calcio - Norvegia - Eliteserien - UEFA Europa Conference League",
    "saturation_score": 583.0
  },
  {
    "rank": 39,
    "entity": "magic - celtics",
    "discover_score": 0.284000201976321,
    "score_1h": 0.0,
    "score_4h": 0.2598273619071059,
    "score_7d": 0.7189349112426036,
    "extracted_entities": "Magic - Celtics - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "kings - nuggets",
    "discover_score": 0.26137607726358614,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.2477848880137829,
    "score_7d": 0.5118343195266273,
    "extracted_entities": "Kings - Nuggets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "rania di giordania",
    "discover_score": 0.2561014195518961,
    "score_1h": 0.0,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.636094674556213,
    "extracted_entities": "Rania - Giordania - Regina - Famiglia reale - Medio Oriente",
    "saturation_score": 70.0
  },
  {
    "rank": 32,
    "entity": "pescara - arezzo",
    "discover_score": 0.2540112694044646,
    "score_1h": 0.29310344827586204,
    "score_4h": 1.0588235294117647,
    "score_7d": 0.36094674556213013,
    "extracted_entities": "Pescara - Arezzo - Città - Confronto",
    "saturation_score": 157.0
  },
  {
    "rank": 33,
    "entity": "paola del din",
    "discover_score": 0.24091187342784193,
    "score_1h": 0.5862068965517241,
    "score_4h": 0.3949579831932773,
    "score_7d": 0.47928994082840237,
    "extracted_entities": "Paola Del Din - Resistenza Italiana - Seconda Guerra Mondiale - Partigiani - Medaglia d'Oro al Valor Militare",
    "saturation_score": 114.0
  },
  {
    "rank": 43,
    "entity": "alejandro tabilo",
    "discover_score": 0.24080795782704584,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.6183431952662721,
    "extracted_entities": "Alejandro Tabilo - Tennis - Cile",
    "saturation_score": 31.0
  },
  {
    "rank": 36,
    "entity": "andrea pignataro",
    "discover_score": 0.22282474280147965,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.49789915966386555,
    "score_7d": 0.3875739644970414,
    "extracted_entities": "Andrea Pignataro",
    "saturation_score": 37.0
  },
  {
    "rank": 44,
    "entity": "suns - thunder",
    "discover_score": 0.21315228389845187,
    "score_1h": 0.0,
    "score_4h": 0.4474789915966386,
    "score_7d": 0.3816568047337278,
    "extracted_entities": "Suns - Thunder - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "re carlo iii discorso",
    "discover_score": 0.205306624581604,
    "score_1h": 2.525862068965517,
    "score_4h": 0.23109243697478993,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Re Carlo III - Discorso",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.19420834646415186,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.40828402366863903,
    "extracted_entities": "Oroscopo - Paolo Fox - Capricorno",
    "saturation_score": 1.0
  },
  {
    "rank": 25,
    "entity": "jennifer aniston",
    "discover_score": 0.16764939907253867,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.21428571428571427,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Jennifer Aniston - Attrice - Hollywood - Friends - Celebrità",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "enrico preziosi",
    "discover_score": 0.15739361951720468,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.06932773109243698,
    "score_7d": 0.23668639053254437,
    "extracted_entities": "Enrico Preziosi - Imprenditore - Calcio - Genoa CFC - Mercato giocatori",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "mario cipollini",
    "discover_score": 0.15297327740845057,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.16568047337278105,
    "extracted_entities": "Mario Cipollini - Ciclismo - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 40,
    "entity": "clippers - rockets",
    "discover_score": 0.15089859788688328,
    "score_1h": 0.0,
    "score_4h": 0.20920502092050208,
    "score_7d": 0.16272189349112426,
    "extracted_entities": "Clippers - Rockets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "nikkei",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "champions oggi",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "gt vs rr",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "trump",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "alex de minaur",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "paolo crepet",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "nba classifica",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "kingsman secret service",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "bulls - heat",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "previsioni meteo roma",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "car parts",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "concacaf champions cup",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "oroscopo oggi sagittario paolo fox",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "ansu fati",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "assegno unico aprile 2025",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "stasera in tv",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "tronchetti provera",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "barcelone – dortmund",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "hang seng",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "paris aston villa",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "camilla",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "pedri",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "natalia grace",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "roberto mancini sampdoria",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "flavio cobolli",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "delivery",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "cossiga",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "nasdaq 100",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "gavi",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "gabriella pession",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "luis enrique",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "santo domingo crollo discoteca",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "ashley judd",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "yalla live",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "sciatrice federica brignone",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "ossicodone",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "valentin vacherot",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "camp nou",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "noipa stipendio",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "pag",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "pizza",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "alice pavarotti",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "livorno",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "sp500",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "ron howard",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "málaga - reggiana",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "francesca uomini e donne",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "damián martínez",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "khvicha kvaratskhelia",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "novara conegliano",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "vitinha",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "camilla parker bowles",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "luciano moggi",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "tv 8",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "champions league in tv",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "steers",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "rashford",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "santiago de martino",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "lanciatore",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "paola frassinetti",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "canale 8",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "الزمالك ضد نادي ستيلينبوش",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "paris",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "birmingham",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "asensio",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "pif",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "szczesny",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "trade republic",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "lady diana",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "barcellona squadra",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "marco rizzo",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "taglio tassi bce",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "matrimonio a prima vista",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "amnotizie",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "action figure chatgpt",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "marco liorni",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "mediterranean",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "mbappe",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "thunderbolts",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "mario cinque",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "hakimi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "grado",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bopanna",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "nadia uomini e donne",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "francisco cerúndolo",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "kuala lumpur",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "sydney sweeney",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "pietro conti",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "zancan",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "vladimir luxuria",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "marcus rashford",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "daniel altmaier",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "barcola",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "vicenza",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "stefano de martino",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "semifinali champions",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "paris hilton",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "casertace",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "carney chukwuemeka",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "max pezzali",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "wall street",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "segundo castillo",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "arthur fils",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "andrea stroppa",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "marco vannini",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "principessa ruspoli",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "bergamo news",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "operazione vendetta",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "shahrukh khan",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "madonna",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "giochi ps plus extra aprile 2025",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "casper ruud",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "luana uomini e donne",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "acquaroli",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "gaël monfils",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "vittorio pisani",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "tuchel",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "walter zenga",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "nvidia azioni",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "ramsey",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "si vince tutto",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "tony blanco",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "cruciani",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "cingoli",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "nvidia stock",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "pirelli",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "nvidia",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "down jones",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "willian pacho",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "matteo bassetti",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "william hill",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "daredevil born again",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "eden",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "coldplay",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "nasdaq composite",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "wojciech szczęsny",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "rohan bopanna",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "ronin",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "stalin",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "alejandro balde",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "chatgpt down",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "apple azioni",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "tomáš macháč",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "richard gasquet",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "pirlo",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "gasquet",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "messaggero",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "partite stasera",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "dibu martinez",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "dembele",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "lupo",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "una commedia pericolosa trama",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "liorni",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "bergomi",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "glpress",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "spotify down",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "dangerous",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "dani olmo",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "karim adeyemi",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "andy garcia",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "marche",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "canale 8 diretta",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-10 07:57:26",
  "trends_count": 212,
  "top_score": 11.017345689640443,
  "runtime_minutes": 20.00989547173182,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le profezie di oggi rivelano che il regno del pallone e il mondo finanziario dominano i pensieri collettivi. Le contese calcistiche internazionali, come la sfida tra Barcellona e Borussia Dortmund, accendono passioni e fermento, mentre le fluttuazioni della borsa italiana e il Nasdaq sussurrano alle orecchie degli investitori in cerca di guida.\n\nTra i sentieri di nuove opportunità, emergono chiaramente il trend 'meteo Roma' (#2) con un DScore notevole e una saturazione bassissima: un perfetto connubio per contenuti freschi e tempestivi su Google Discover. Inoltre, 'Eni azioni' (#8) mostra un terreno fertile per racconti economici dati il suo DScore positivo e una saturazione pari a zero, suggerendo uno spazio ancora inesplorato.\n\nIl fuoco ardente della nascente fama richiede cautela con la 'borsa italiana' (#1), intrappolata in un mare di saturazione che potrebbe sopprimere nuovi narratori in un mondo già affollato. Il racconto di 'psg' (#11) naviga in acque altrettanto tempestose, segnalando la necessità di una visione cauta quando si entra in tale arena.\n\nCome il vento che porta nuovi cambiamenti, il content creator saggio saprà adattarsi e scoprire nuovi orizzonti lasciandosi guidare dalle correnti delle tendenze."
};
