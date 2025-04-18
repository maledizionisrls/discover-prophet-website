const trendData = [
  {
    "rank": 1,
    "entity": "lazio - bodø/glimt",
    "discover_score": 7.82776989700177,
    "score_1h": 40.810344827586206,
    "score_4h": 27.42436974789916,
    "score_7d": 3.8431952662721893,
    "extracted_entities": "Lazio - Bodø/Glimt - Calcio - Partita - Europa League",
    "saturation_score": 74.0
  },
  {
    "rank": 3,
    "entity": "monte faito",
    "discover_score": 7.074327557765989,
    "score_1h": 57.422413793103445,
    "score_4h": 37.12394957983193,
    "score_7d": 4.029585798816568,
    "extracted_entities": "Monte Faito - Montagna - Campania - Escursionismo - Turismo",
    "saturation_score": 1270.0
  },
  {
    "rank": 7,
    "entity": "venerdi santo",
    "discover_score": 6.55180697880428,
    "score_1h": 61.353448275862064,
    "score_4h": 44.35084033613445,
    "score_7d": 4.011834319526628,
    "extracted_entities": "Venerdì Santo - Pasqua - Cristianesimo - Celebrazione - Religione",
    "saturation_score": 32.0
  },
  {
    "rank": 8,
    "entity": "manchester united",
    "discover_score": 5.751764830467815,
    "score_1h": 41.31896551724138,
    "score_4h": 35.2436974789916,
    "score_7d": 4.63905325443787,
    "extracted_entities": "Manchester United - Calcio - Premier League - Old Trafford - Erik ten Hag",
    "saturation_score": 82.0
  },
  {
    "rank": 41,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 4.160650946860327,
    "score_1h": 0.45689655172413796,
    "score_4h": 1.0252100840336134,
    "score_7d": 13.020710059171597,
    "extracted_entities": "Paolo Fox - Oroscopo - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "valdagno",
    "discover_score": 3.830657621560668,
    "score_1h": 48.11206896551724,
    "score_4h": 19.352941176470587,
    "score_7d": 5.053254437869823,
    "extracted_entities": "Valdagno - Comune - Provincia di Vicenza - Veneto - Italia",
    "saturation_score": 108.0
  },
  {
    "rank": 4,
    "entity": "manchester united - lione",
    "discover_score": 3.6372110592242475,
    "score_1h": 15.241379310344827,
    "score_4h": 13.508403361344538,
    "score_7d": 4.1952662721893486,
    "extracted_entities": "Manchester United - Lione - Calcio - Partita - Club",
    "saturation_score": 32.0
  },
  {
    "rank": 49,
    "entity": "serie d",
    "discover_score": 3.3181344145043234,
    "score_1h": 6.25,
    "score_4h": 1.5483193277310923,
    "score_7d": 10.804733727810651,
    "extracted_entities": "Serie D - Calcio - Campionato - Italia",
    "saturation_score": 1400.0
  },
  {
    "rank": 218,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 3.1298548095107552,
    "score_1h": 0.45689655172413796,
    "score_4h": 1.0252100840336134,
    "score_7d": 13.020710059171597,
    "extracted_entities": "Paolo Fox - Oroscopo - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 18,
    "entity": "venerdì santo 2025",
    "discover_score": 2.873854140262332,
    "score_1h": 6.327586206896552,
    "score_4h": 21.514705882352942,
    "score_7d": 3.0207100591715976,
    "extracted_entities": "Venerdì Santo - 2025 - Evento religioso - Pasqua - Cristianesimo",
    "saturation_score": 43.0
  },
  {
    "rank": 25,
    "entity": "borsa milano oggi",
    "discover_score": 2.870096359892845,
    "score_1h": 12.913793103448276,
    "score_4h": 12.296218487394958,
    "score_7d": 5.568047337278107,
    "extracted_entities": "Borsa - Milano - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "fiorentina - nk celje",
    "discover_score": 2.424137809643127,
    "score_1h": 2.206896551724138,
    "score_4h": 9.025210084033613,
    "score_7d": 2.3550295857988166,
    "extracted_entities": "Fiorentina - NK Celje - Partita di calcio - Squadre di calcio - Competizione sportiva",
    "saturation_score": 82.0
  },
  {
    "rank": 44,
    "entity": "previsioni pasqua",
    "discover_score": 2.165865574517961,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.38445378151260506,
    "score_7d": 7.411242603550296,
    "extracted_entities": "Previsioni - Pasqua - Meteo",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "vance",
    "discover_score": 2.153024719837231,
    "score_1h": 15.732758620689655,
    "score_4h": 9.686974789915967,
    "score_7d": 4.0,
    "extracted_entities": "Vance - Nome proprio - Persone",
    "saturation_score": 376.0
  },
  {
    "rank": 5,
    "entity": "giorgia meloni donald trump",
    "discover_score": 2.0397849753907518,
    "score_1h": 5.732758620689655,
    "score_4h": 2.565126050420168,
    "score_7d": 4.068047337278107,
    "extracted_entities": "Giorgia Meloni - Donald Trump - Politica",
    "saturation_score": 1.0
  },
  {
    "rank": 36,
    "entity": "oroscopo branko oggi",
    "discover_score": 1.9966706813953825,
    "score_1h": 0.0,
    "score_4h": 0.06092436974789916,
    "score_7d": 6.736686390532544,
    "extracted_entities": "Oroscopo - Branko - Oggi",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "carlos alcaraz",
    "discover_score": 1.9090719045984794,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.3130252100840336,
    "score_7d": 6.742603550295858,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Sport",
    "saturation_score": 27.0
  },
  {
    "rank": 45,
    "entity": "betis",
    "discover_score": 1.721517003156991,
    "score_1h": 0.6724137931034483,
    "score_4h": 1.0777310924369747,
    "score_7d": 5.798816568047338,
    "extracted_entities": "Real Betis - Calcio - La Liga - Siviglia - Squadra di calcio",
    "saturation_score": 328.0
  },
  {
    "rank": 22,
    "entity": "eintracht - tottenham",
    "discover_score": 1.3115722412296271,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.926470588235294,
    "score_7d": 3.9319526627218937,
    "extracted_entities": "Eintracht - Tottenham - Calcio - Partita - UEFA",
    "saturation_score": 3.0
  },
  {
    "rank": 32,
    "entity": "coppa uefa",
    "discover_score": 1.303961658502987,
    "score_1h": 0.0,
    "score_4h": 0.20168067226890757,
    "score_7d": 4.378698224852071,
    "extracted_entities": "Coppa UEFA - Calcio - Competizione europea - UEFA",
    "saturation_score": 3.0
  },
  {
    "rank": 6,
    "entity": "chelsea - legia varsavia",
    "discover_score": 1.23100148417742,
    "score_1h": 1.2586206896551724,
    "score_4h": 1.004201680672269,
    "score_7d": 2.8106508875739644,
    "extracted_entities": "Chelsea - Legia Varsavia - Calcio - Partita - Club",
    "saturation_score": 21.0
  },
  {
    "rank": 29,
    "entity": "jasmine paolini",
    "discover_score": 1.0912756781206954,
    "score_1h": 0.0,
    "score_4h": 0.4054621848739496,
    "score_7d": 3.5532544378698225,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 53.0
  },
  {
    "rank": 13,
    "entity": "ultimo bella davvero",
    "discover_score": 1.0131764759796957,
    "score_1h": 8.60344827586207,
    "score_4h": 4.016806722689076,
    "score_7d": 1.9023668639053255,
    "extracted_entities": "Ultimo - Bella - Canzone",
    "saturation_score": 3.0
  },
  {
    "rank": 33,
    "entity": "dora baltea",
    "discover_score": 0.999644142025854,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.10294117647058823,
    "score_7d": 3.4023668639053253,
    "extracted_entities": "Dora Baltea - Fiume - Valle d'Aosta - Piemonte - Italia",
    "saturation_score": 50.0
  },
  {
    "rank": 28,
    "entity": "efe bal",
    "discover_score": 0.916339297340302,
    "score_1h": 1.9310344827586206,
    "score_4h": 0.7079831932773109,
    "score_7d": 2.86094674556213,
    "extracted_entities": "Efe Bal",
    "saturation_score": 7.0
  },
  {
    "rank": 17,
    "entity": "bastoncini di pesce",
    "discover_score": 0.6614971264832051,
    "score_1h": 0.0,
    "score_4h": 0.8025210084033613,
    "score_7d": 1.7662721893491125,
    "extracted_entities": "Bastoncini di pesce - Cibo - Prodotti ittici - Alimentazione",
    "saturation_score": 37.0
  },
  {
    "rank": 40,
    "entity": "luca guadagnino",
    "discover_score": 0.6525198636131165,
    "score_1h": 0.0,
    "score_4h": 0.6323529411764706,
    "score_7d": 2.0887573964497044,
    "extracted_entities": "Luca Guadagnino - Regista - Cinema - Film",
    "saturation_score": 30.0
  },
  {
    "rank": 27,
    "entity": "jagiellonia białystok - betis",
    "discover_score": 0.6444464222480158,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.5609243697478992,
    "score_7d": 1.9378698224852071,
    "extracted_entities": "Jagiellonia Białystok - Betis - Calcio - Partita - Squadre",
    "saturation_score": 1.0
  },
  {
    "rank": 35,
    "entity": "nessuno ti salverà",
    "discover_score": 0.627111369159351,
    "score_1h": 0.0,
    "score_4h": 1.2205882352941178,
    "score_7d": 1.7840236686390534,
    "extracted_entities": "Film - Thriller - Fantascienza - Horror - Invasione aliena",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "jd vance",
    "discover_score": 0.5731401521460457,
    "score_1h": 1.5086206896551724,
    "score_4h": 1.6176470588235294,
    "score_7d": 1.198224852071006,
    "extracted_entities": "JD Vance - Politica - Ohio - Senato USA - Autore",
    "saturation_score": 162.0
  },
  {
    "rank": 37,
    "entity": "uel",
    "discover_score": 0.5702583363145374,
    "score_1h": 0.0,
    "score_4h": 0.7205882352941176,
    "score_7d": 1.724852071005917,
    "extracted_entities": "UEL - Europa League - Calcio - UEFA - Competizione calcistica",
    "saturation_score": 6.0
  },
  {
    "rank": 46,
    "entity": "paolo del genio",
    "discover_score": 0.5247579650452746,
    "score_1h": 1.103448275862069,
    "score_4h": 1.1638655462184875,
    "score_7d": 1.4911242603550297,
    "extracted_entities": "Paolo Del Genio",
    "saturation_score": 9.0
  },
  {
    "rank": 15,
    "entity": "tassi bce mutui",
    "discover_score": 0.5213081178453415,
    "score_1h": 2.9655172413793105,
    "score_4h": 1.138655462184874,
    "score_7d": 1.1715976331360947,
    "extracted_entities": "Tassi - BCE - Mutui",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "casarano calcio",
    "discover_score": 0.4958351843706606,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.5887573964497042,
    "extracted_entities": "Casarano - Calcio - Squadra di calcio - Sport - Serie D",
    "saturation_score": 8.0
  },
  {
    "rank": 24,
    "entity": "l'ombra del giorno",
    "discover_score": 0.4616001350225302,
    "score_1h": 0.0,
    "score_4h": 0.3403361344537815,
    "score_7d": 1.2988165680473371,
    "extracted_entities": "L'ombra del giorno - Film - Giuseppe Piccioni - Riccardo Scamarcio - Benedetta Porcaroli",
    "saturation_score": 56.0
  },
  {
    "rank": 10,
    "entity": "atletico bilbao - rangers",
    "discover_score": 0.4076104332310714,
    "score_1h": 0.0,
    "score_4h": 0.20168067226890757,
    "score_7d": 0.9437869822485208,
    "extracted_entities": "Atletico Bilbao - Rangers - Calcio - Partita - Europa League",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "antonio rossi",
    "discover_score": 0.3975757362962084,
    "score_1h": 0.3448275862068966,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Antonio Rossi",
    "saturation_score": 4.0
  },
  {
    "rank": 11,
    "entity": "estrazione lotto 17 aprile 2025",
    "discover_score": 0.38319028036757385,
    "score_1h": 0.4396551724137931,
    "score_4h": 1.2352941176470589,
    "score_7d": 0.6183431952662722,
    "extracted_entities": "Estrazione - Lotto - 17 aprile 2025",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "riera",
    "discover_score": 0.37626965819386826,
    "score_1h": 1.456896551724138,
    "score_4h": 0.5399159663865546,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Riera - Cognome - Persone - Spagna - Catalogna",
    "saturation_score": 82.0
  },
  {
    "rank": 19,
    "entity": "ciro immobile",
    "discover_score": 0.3222528755345148,
    "score_1h": 0.0,
    "score_4h": 0.10294117647058823,
    "score_7d": 0.7958579881656805,
    "extracted_entities": "Ciro Immobile - Calciatore - Lazio - Serie A - Nazionale Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "maria elena boschi",
    "discover_score": 0.31766263407194445,
    "score_1h": 1.646551724137931,
    "score_4h": 0.17436974789915966,
    "score_7d": 0.878698224852071,
    "extracted_entities": "Maria Elena Boschi - Politica - Italia",
    "saturation_score": 7.0
  },
  {
    "rank": 21,
    "entity": "jk rowling",
    "discover_score": 0.3139409399256549,
    "score_1h": 1.9051724137931032,
    "score_4h": 0.8130252100840336,
    "score_7d": 0.5946745562130178,
    "extracted_entities": "JK Rowling - Autore - Harry Potter - Letteratura - Controversie",
    "saturation_score": 8.0
  },
  {
    "rank": 16,
    "entity": "lara colturi",
    "discover_score": 0.3120777115398453,
    "score_1h": 1.543103448275862,
    "score_4h": 0.7436974789915967,
    "score_7d": 0.5621301775147929,
    "extracted_entities": "Lara Colturi - Sci - Atleta - Sport Invernali",
    "saturation_score": 85.0
  },
  {
    "rank": 48,
    "entity": "lodi mattutine di oggi",
    "discover_score": 0.290674577683532,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.029411764705882353,
    "score_7d": 0.8431952662721893,
    "extracted_entities": "Lodi mattutine - Oggi - Preghiera - Liturgia - Religione",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "srh vs mi",
    "discover_score": 0.2897178827088596,
    "score_1h": 0.896551724137931,
    "score_4h": 0.3697478991596639,
    "score_7d": 0.7248520710059172,
    "extracted_entities": "SRH - MI - Cricket - Indian Premier League - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "tabellone europa league",
    "discover_score": 0.28262736407227,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Tabellone - Europa League - Calcio - Competizione - Squadre",
    "saturation_score": 2.0
  },
  {
    "rank": 9,
    "entity": "bonus bollette 200 euro",
    "discover_score": 0.2670897086946516,
    "score_1h": 0.0,
    "score_4h": 0.5336134453781513,
    "score_7d": 0.37573964497041423,
    "extracted_entities": "Bonus - Bollette - 200 Euro",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "borsa oggi 18 aprile 2025",
    "discover_score": 0.19683737490286196,
    "score_1h": 1.5862068965517242,
    "score_4h": 1.4411764705882353,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Borsa - Oggi - 18 aprile 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "ops mps mediobanca",
    "discover_score": 0.164249824608297,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "OPS - MPS - Mediobanca",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "28 anni dopo",
    "discover_score": 0.16188603954333772,
    "score_1h": 0.0,
    "score_4h": 0.14285714285714285,
    "score_7d": 0.19230769230769232,
    "extracted_entities": "Film - Horror - Sequel - Danny Boyle - Alex Garland",
    "saturation_score": 70.0
  },
  {
    "rank": 47,
    "entity": "julia fox",
    "discover_score": 0.12665175763376169,
    "score_1h": 0.0,
    "score_4h": 0.2542016806722689,
    "score_7d": 0.05917159763313609,
    "extracted_entities": "Julia Fox - Attrice - Moda - Kanye West - Uncut Gems",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "gianluigi nuzzi",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "belize",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "autostrade per l'italia",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "roblox",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "ashley st. clair",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "jo squillo",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "lavanda dei piedi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "natalia grace",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "via crucis",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "albert riera",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "ransom canyon",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "lothar matthäus",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "fast food",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "di canio",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "castellanos",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "i peccatori",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "chelsea vs legia warszawa",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "alex de minaur",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "paola cortellesi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "meteo roma",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "serie d girone f",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "chelsea",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "al hilal - al khaleej",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "andreas helmersen",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "metro torino",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "bruno fernandes",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "nuno tavares",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "jeffrey sachs",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "joao pedro",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "antonella clerici è sempre mezzogiorno",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "antonietta raco miracolata lourdes",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "coreografia lazio bodo",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "baustelle",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "micaela ramazzotti",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "donald trump giorgia meloni",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "mestre",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "amici serale quinta puntata",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "serie d girone i",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "elder scrolls oblivion remastered",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "vaccines",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "wind warning",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "lacazette",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "kissinger",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "meteo italia",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "fonseca",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "coccia di morto",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "dame sarr",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "corentin tolisso",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "mc donald",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "francesca uomini e donne",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "الطقس",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "good american family",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "concorso docenti prova orale",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "tijjani noslin",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "real betis",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "belve",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "nepal",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "valentín castellanos",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "radio gold",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "nuzzi",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "casemiro",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "flu shots",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "il mattino",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "onana",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "eintracht frankfurt",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "vaccinations",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "kingdom hearts",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "hostage",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "immunizations",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "tv8",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "pesce palla argenteo velenoso",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "europa",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "roma capitale",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "mandas lazio",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "giaele de donà",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "mirra andreeva",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "umberto smaila",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "radio sei",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "emma navarro",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "cherki",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "la provincia pavese",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "rubiana",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "manchester",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "patrizia mirigliani",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "sky tg24",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "parenzo",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "monica giandotti",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "robbie williams",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "provedel",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "hantavirus",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "simona izzo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bulgari",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "siracusa calcio",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "tagliafico",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "rapid vienna",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "solbakken",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "rayan cherki",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "joe biden",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "chiara appendino",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "maradona",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "carla rinaldi pedagogista",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "titanic",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "powell",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "bruce springsteen",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "oppenheimer",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "clizia incorvaia",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "ed sheeran",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "jim clark",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "finale conference league 2025",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "affari tuoi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "tuglie",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "streaming",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "found",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "banksy",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "claudio martelli",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "isaksen",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "valenza",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "dia",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "radio 1",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "scicli",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "ruffano",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "tv2000 diretta",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "diritto di opposizione meta",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "traffico",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "antonia amici",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "rai radio 1",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "monti",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "jared leto",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "salento",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "cher",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "antonio albanese",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "columbia university",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "dybala",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "matthaus",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "manchester united - olympique lyonnais",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "miuccia prada",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "millionday",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "lecceprima",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "reggio tv",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "orta di atella",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "al fateh - al ittihad",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "massimo giannini",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "rolando mandragora",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "bilbao",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "positano news",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "piacenza",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "giornale",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "albano",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "ranucci",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "iuman",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "tagliacozzo",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "lyon",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "giovanni uomini e donne",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "emilio fede",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "tuttocampo",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "fialdini",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "ecb",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "tom selleck",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "gintoneria",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "udine today",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "taser",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "dustin hoffman",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "ncis",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "heather parisi",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "trento piacenza volley",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "luca argentero",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "jerome powell",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-18 09:18:29",
  "trends_count": 222,
  "top_score": 7.82776989700177,
  "runtime_minutes": 5.260373520851135,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle \"Profezie di Oggi\", il calcio emerge potente tra le arcane tendenze del momento, con partite intense come Lazio contro Bodø/Glimt (#1) e Manchester United contro Lione (#7) che dominano la scena sportiva. Non è da meno la festività del Venerdì Santo (#3), che bussa alle porte della consapevolezza collettiva, riecheggiando tradizioni sacre e storiche.\n\nTra le nebbie della previsione, l'argomento di Monte Faito (#2) si erge come un'opportunità di scoperta attraverso i rami antichi del turismo e dell'escursionismo, con un potenziale promettente e una saturazione non oppressiva che invita alla narrazione di nuove storie. Parimenti, l'oroscopo di Paolo Fox (#5) incanta con la sua aura di mistero, unendo curiosità quotidiana e previsioni astrali con una saturazione bassissima.\n\nTuttavia, occorre vigilanza verso la densa coltre di contenuti sul calcio, come la Serie D (#8), la cui saturazione è alta, suggerendo il rischio di cadere in un vortice competitivo troppo affollato.\n\nStrategi del digitale, usate discernimento nella scelta delle vostre battaglie narrative, poiché le stelle dei trend sono capricciose e solo con sguardo saldo si possono cogliere le vere opportunità di scoperta."
};
