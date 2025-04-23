const trendData = [
  {
    "rank": 41,
    "entity": "nba",
    "discover_score": 13.810012866593302,
    "score_1h": 56.31896551724138,
    "score_4h": 39.37605042016807,
    "score_7d": 26.37096717385179,
    "extracted_entities": "NBA - Basket - Stati Uniti - Campionato - Giocatori",
    "saturation_score": 215.0
  },
  {
    "rank": 24,
    "entity": "india",
    "discover_score": 13.485602184219445,
    "score_1h": 7.5344827586206895,
    "score_4h": 3.310924369747899,
    "score_7d": 31.234625950972102,
    "extracted_entities": "India - Paese - Asia - Cultura - Economia",
    "saturation_score": 432.0
  },
  {
    "rank": 36,
    "entity": "weather",
    "discover_score": 13.340299444542826,
    "score_1h": 57.01724137931035,
    "score_4h": 35.365546218487395,
    "score_7d": 25.495650183150182,
    "extracted_entities": "Meteo - Previsioni - Clima - Temperature - Condizioni atmosferiche",
    "saturation_score": 108.0
  },
  {
    "rank": 12,
    "entity": "san giorgio",
    "discover_score": 10.528937042072794,
    "score_1h": 67.88793103448276,
    "score_4h": 16.298319327731093,
    "score_7d": 18.498714426599044,
    "extracted_entities": "San Giorgio - Santo - Martire - Leggenda - Drago",
    "saturation_score": 444.0
  },
  {
    "rank": 2,
    "entity": "inter roma",
    "discover_score": 6.845115362164202,
    "score_1h": 32.12068965517241,
    "score_4h": 5.960084033613445,
    "score_7d": 8.783107917723303,
    "extracted_entities": "Inter - Roma - Partita di calcio - Serie A - Rivalità calcistica",
    "saturation_score": 1170.0
  },
  {
    "rank": 1,
    "entity": "barcellona - mallorca",
    "discover_score": 5.72576324474716,
    "score_1h": 12.0,
    "score_4h": 11.968487394957982,
    "score_7d": 4.664676669484361,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 23,
    "entity": "letto contenitore",
    "discover_score": 5.670229399535159,
    "score_1h": 0.847457627118644,
    "score_4h": 0.07563025210084034,
    "score_7d": 15.592578895463511,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto - Spazio di archiviazione",
    "saturation_score": 86.0
  },
  {
    "rank": 17,
    "entity": "santo del giorno",
    "discover_score": 4.191850796352754,
    "score_1h": 3.9310344827586206,
    "score_4h": 1.1428571428571428,
    "score_7d": 11.090007748661595,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 39.0
  },
  {
    "rank": 31,
    "entity": "23 aprile",
    "discover_score": 4.026177658569261,
    "score_1h": 73.5603448275862,
    "score_4h": 26.147058823529413,
    "score_7d": 5.650059876021414,
    "extracted_entities": "23 aprile - Eventi storici - Compleanni celebri - Giornata mondiale del libro - Anniversari",
    "saturation_score": 2400.0
  },
  {
    "rank": 35,
    "entity": "thunderbolts",
    "discover_score": 3.8796641502369047,
    "score_1h": 0.3620689655172414,
    "score_4h": 0.4369747899159664,
    "score_7d": 12.058502395040858,
    "extracted_entities": "Thunderbolts - Marvel - Film - Supereroi - MCU",
    "saturation_score": 71.0
  },
  {
    "rank": 8,
    "entity": "coppa italia inter milan",
    "discover_score": 3.7873643044828937,
    "score_1h": 10.336206896551724,
    "score_4h": 0.9285714285714286,
    "score_7d": 8.712190053536208,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Derby",
    "saturation_score": 33.0
  },
  {
    "rank": 10,
    "entity": "lakers - timberwolves",
    "discover_score": 2.88746686830497,
    "score_1h": 31.837375803623612,
    "score_4h": 14.739495798319327,
    "score_7d": 3.7854149056072135,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 3,
    "entity": "manchester city - aston villa",
    "discover_score": 2.4983519397681357,
    "score_1h": 8.213033313851549,
    "score_4h": 5.823529411764706,
    "score_7d": 3.599429416737109,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 32.0
  },
  {
    "rank": 4,
    "entity": "nantes - psg",
    "discover_score": 2.2765521645194684,
    "score_1h": 2.793103448275862,
    "score_4h": 2.0441176470588234,
    "score_7d": 4.433308678500985,
    "extracted_entities": "Nantes - PSG - Partita di calcio - Ligue 1 - Squadre di calcio",
    "saturation_score": 30.0
  },
  {
    "rank": 28,
    "entity": "netanyahu",
    "discover_score": 2.1060756722366754,
    "score_1h": 2.9482758620689653,
    "score_4h": 0.37184873949579833,
    "score_7d": 6.696675119752043,
    "extracted_entities": "Benjamin Netanyahu - Israele - Politica - Primo Ministro - Likud",
    "saturation_score": 132.0
  },
  {
    "rank": 5,
    "entity": "facies ippocratica",
    "discover_score": 1.8962131086460172,
    "score_1h": 1.043103448275862,
    "score_4h": 0.4516806722689075,
    "score_7d": 4.30918920822767,
    "extracted_entities": "Facies Ippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 6.0
  },
  {
    "rank": 7,
    "entity": "sophie nyweide",
    "discover_score": 1.8207088846151722,
    "score_1h": 14.353448275862068,
    "score_4h": 2.676470588235294,
    "score_7d": 3.886675824175824,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 101.0
  },
  {
    "rank": 22,
    "entity": "conegliano volley",
    "discover_score": 1.7146415002073214,
    "score_1h": 1.603448275862069,
    "score_4h": 0.1764705882352941,
    "score_7d": 5.347580304311074,
    "extracted_entities": "Conegliano - Volley - Imoco Volley - Pallavolo femminile - Campionato italiano",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "papa francesco conclave",
    "discover_score": 1.6839855726144077,
    "score_1h": 0.48275862068965514,
    "score_4h": 0.865546218487395,
    "score_7d": 5.774144125105664,
    "extracted_entities": "Papa Francesco - Conclave - Chiesa Cattolica",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "thunder - grizzlies",
    "discover_score": 1.5550453153755484,
    "score_1h": 0.7672413793103449,
    "score_4h": 0.6638655462184874,
    "score_7d": 4.617128064243449,
    "extracted_entities": "Thunder - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 11,
    "entity": "massimiliano strappetti",
    "discover_score": 1.268977407166465,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.48109243697478987,
    "score_7d": 3.4457065370526907,
    "extracted_entities": "Massimiliano Strappetti",
    "saturation_score": 37.0
  },
  {
    "rank": 33,
    "entity": "freccia vallone 2025",
    "discover_score": 1.1197848324441368,
    "score_1h": 0.0,
    "score_4h": 0.15966386554621848,
    "score_7d": 3.7970731191885037,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 35.0
  },
  {
    "rank": 6,
    "entity": "giuseppe farina",
    "discover_score": 0.9382211577758724,
    "score_1h": 2.8706896551724137,
    "score_4h": 0.8319327731092436,
    "score_7d": 2.127359819667512,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 277.0
  },
  {
    "rank": 46,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.8001449425467877,
    "score_1h": 14.732758620689655,
    "score_4h": 3.21218487394958,
    "score_7d": 1.9971470836855452,
    "extracted_entities": "23 aprile - Buongiorno - Frasi - Immagini - Messaggi",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "allerta grandine",
    "discover_score": 0.7642446845911215,
    "score_1h": 11.181034482758621,
    "score_4h": 3.6554621848739495,
    "score_7d": 1.1253346012961398,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "kashmir",
    "discover_score": 0.7590627448573206,
    "score_1h": 1.706896551724138,
    "score_4h": 0.2668067226890756,
    "score_7d": 2.179099746407439,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Regione",
    "saturation_score": 488.0
  },
  {
    "rank": 40,
    "entity": "milei",
    "discover_score": 0.7466833609257262,
    "score_1h": 0.0,
    "score_4h": 0.05042016806722689,
    "score_7d": 2.6054170188785575,
    "extracted_entities": "Javier Milei - Politica argentina - Elezioni Argentina",
    "saturation_score": 54.0
  },
  {
    "rank": 48,
    "entity": "dalai lama",
    "discover_score": 0.7435752994004811,
    "score_1h": 0.0,
    "score_4h": 0.4138655462184874,
    "score_7d": 2.5677831783601013,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 3.0
  },
  {
    "rank": 18,
    "entity": "konyaspor - galatasaray",
    "discover_score": 0.7311417697052619,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.25,
    "score_7d": 2.1677937447168216,
    "extracted_entities": "Konyaspor - Galatasaray - Partita di calcio - Süper Lig - Turchia",
    "saturation_score": 5.0
  },
  {
    "rank": 43,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.6616742429572918,
    "score_1h": 0.0,
    "score_4h": 0.29411764705882354,
    "score_7d": 2.2446639898562974,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 3.0
  },
  {
    "rank": 30,
    "entity": "lamon",
    "discover_score": 0.4949499340888059,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.26260504201680673,
    "score_7d": 1.5034692871231332,
    "extracted_entities": "Lamon - Comune - Belluno - Veneto - Fagiolo di Lamon",
    "saturation_score": 45.0
  },
  {
    "rank": 27,
    "entity": "pacers - bucks",
    "discover_score": 0.47757432295792396,
    "score_1h": 0.0,
    "score_4h": 0.3067226890756303,
    "score_7d": 1.3977000563539024,
    "extracted_entities": "Pacers - Bucks - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "morto donato metallo",
    "discover_score": 0.46384156888402633,
    "score_1h": 1.25,
    "score_4h": 0.33403361344537813,
    "score_7d": 1.1551669484361793,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "maurizio pistocchi",
    "discover_score": 0.36884366130958857,
    "score_1h": 2.310344827586207,
    "score_4h": 0.38865546218487396,
    "score_7d": 1.035485347985348,
    "extracted_entities": "Maurizio Pistocchi - Giornalismo - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.3415323886947502,
    "score_1h": 1.2241379310344827,
    "score_4h": 0.32563025210084034,
    "score_7d": 0.8582875457875458,
    "extracted_entities": "Vanessa Incontrada - Ultima puntata - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.33368425956540826,
    "score_1h": 0.0,
    "score_4h": 0.4915966386554622,
    "score_7d": 0.8765673429134967,
    "extracted_entities": "Concerto - Jovanotti - Roma",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "gewitterwarnung",
    "discover_score": 0.31838274894523316,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.13655462184873948,
    "score_7d": 0.8621090448013524,
    "extracted_entities": "Gewitterwarnung - Allerta meteo - Temporali",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "rio ave - sporting",
    "discover_score": 0.3153419411987405,
    "score_1h": 0.9310344827586208,
    "score_4h": 0.3571428571428571,
    "score_7d": 0.754772471118625,
    "extracted_entities": "Rio Ave - Sporting - Calcio - Partita - Portogallo",
    "saturation_score": 6.0
  },
  {
    "rank": 16,
    "entity": "elisa girotto 18 regali",
    "discover_score": 0.31042140920784683,
    "score_1h": 3.2155172413793105,
    "score_4h": 0.5189075630252101,
    "score_7d": 0.6137116089039166,
    "extracted_entities": "Elisa Girotto - 18 Regali - Film - Storia vera",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "niccolò fabi",
    "discover_score": 0.3072577544073799,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033613,
    "score_7d": 0.8005071851225697,
    "extracted_entities": "Niccolò Fabi - Cantautore - Musica Italiana",
    "saturation_score": 7.0
  },
  {
    "rank": 20,
    "entity": "acconto irpef",
    "discover_score": 0.2462912292119788,
    "score_1h": 1.5843074225599065,
    "score_4h": 0.3067226890756303,
    "score_7d": 0.46046421527190756,
    "extracted_entities": "Acconto - IRPEF - Tasse - Dichiarazione dei redditi - Fisco",
    "saturation_score": 140.0
  },
  {
    "rank": 14,
    "entity": "maurizio gucci",
    "discover_score": 0.24588102198376893,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3025210084033613,
    "score_7d": 0.4151873767258383,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Famiglia Gucci",
    "saturation_score": 169.0
  },
  {
    "rank": 21,
    "entity": "lago di endine",
    "discover_score": 0.22937476030930937,
    "score_1h": 0.0,
    "score_4h": 0.8256302521008403,
    "score_7d": 0.27282333051563823,
    "extracted_entities": "Lago di Endine - Lago - Turismo - Lombardia - Natura",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "clemente mastella",
    "discover_score": 0.21429891504009052,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.7941176470588236,
    "score_7d": 0.29932727528881375,
    "extracted_entities": "Clemente Mastella - Politica Italiana - Benevento",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "concorso 4617 allievi agenti bando",
    "discover_score": 0.18686036754617394,
    "score_1h": 0.0,
    "score_4h": 0.6596638655462185,
    "score_7d": 0.19301211608903918,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Bando",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.1849893362613346,
    "score_1h": 0.0,
    "score_4h": 0.18277310924369747,
    "score_7d": 0.33889828120597354,
    "extracted_entities": "Assegno Unico - Pagamenti - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "mattia almaviva",
    "discover_score": 0.17300473125011032,
    "score_1h": 0.5,
    "score_4h": 0.48529411764705876,
    "score_7d": 0.18431248238940545,
    "extracted_entities": "Mattia Almaviva",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "luisa todini",
    "discover_score": 0.1540225468632944,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.10294117647058823,
    "score_7d": 0.17795505776275006,
    "extracted_entities": "Luisa Todini - Imprenditrice - Politica - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 45,
    "entity": "23 aprile giornata mondiale",
    "discover_score": 0.1357526845420864,
    "score_1h": 0.7758620689655172,
    "score_4h": 0.3886554621848739,
    "score_7d": 0.06526486334178641,
    "extracted_entities": "23 aprile - Giornata mondiale - Eventi - Celebrazioni",
    "saturation_score": 4.0
  },
  {
    "rank": 49,
    "entity": "liam gallagher",
    "discover_score": 0.1230320974334819,
    "score_1h": 1.6551724137931034,
    "score_4h": 0.23529411764705882,
    "score_7d": 0.05038391096083404,
    "extracted_entities": "Liam Gallagher - Musica - Oasis - Cantante - Britpop",
    "saturation_score": 2.0
  },
  {
    "rank": 51,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "fabio fognini",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "mission",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "lucia bronzetti",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "25 aprile liberazione",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "tesla",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "wta madrid",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "antonio pappalardo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "djalo",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "man city vs aston villa",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "estrazioni lotto superenalotto 10elotto",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "rottamazione quinquies",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "valencia - espanyol",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "davide barzan",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "lsg vs dc",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "belve",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "barcelone – majorque",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "department store",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "the couple quando va in onda",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "fuochi d'artificio",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "risultati nba",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "israele",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "paradiso delle signore",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "bruno vespa",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "silence",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "banco bpm unicredit",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "etna",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "child care",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "uomini e donne oggi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "pantelleria",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "limone",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "laliga",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "nick pope",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "oblivion remake",
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
    "entity": "luisa ranieri",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "nunzio stancampiano",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "maria corleone",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "jack ryan",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "meteo rimini",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "millionday",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "emiliana arango",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "striscia la notizia",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "gucci",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "jeremy irons",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "robert de niro",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "cerignola",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "luis miguel",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "martin wolf",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "nantes vs psg",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "الطقس غدًا",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "agenzia delle entrate",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "incendio olbia",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "cocciaretto",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "boulter",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "santoro",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "brocchi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "livorno",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "meteo trentino",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "veltroni",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "gabi pallavolo",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "il gazzettino",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "edith bruck",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "monica de gennaro",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "corrado augias",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lunigiana",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "rita pavone",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "earth day",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "tim",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "agnese pini",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "i peccatori film",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "aeroporto bergamo",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "vecchioni",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "playstation store",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "cristina uomini e donne",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "bertone cardinale",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "pete sampras",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "bersani",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "copenaghen",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "bper",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "arcivescovo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "neres",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "ladakh",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "putin",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "carlo cracco",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "massimo giannini",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "insta360 x5",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "pedro pascal",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "chuck norris",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "milei papa francesco",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "massimo franco",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "deepseek",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "cardinale scola",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "ncis",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "chatgpt down",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "lilli gruber",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "naomi ōsaka",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "la russa",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "alife",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "altamura",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "valentina uomini e donne",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "this is us",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "hugh grant",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "idealista",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "teatro alla scala",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "stellantis azioni",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "dhl",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "suore di clausura",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "barcellona inter",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "financial times",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "sorella papa francesco",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "mib 30",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "the last of us streaming",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "bitcoin",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "luana uomini e donne",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "azioni stellantis",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "andor",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "azioni eni",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "investing",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "banca intesa",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "de zerbi",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "lipari",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "eni azioni",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "anders arborelius",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "web mail",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "alessandria",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "ralph fiennes",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "keira knightley",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "victoria villarruel",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "guardie svizzere",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "oroscopo scorpione 22 aprile",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "soldionline",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "avanti un altro",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "accordo stato regioni 17 aprile 2025",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "kanye west",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "azioni mps",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 07:01:41",
  "trends_count": 203,
  "top_score": 13.810012866593302,
  "runtime_minutes": 4.79649201631546,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le stelle dei trend risplendono astri di sportivi duelli e climatiche carestie. Dal parquet dell'NBA con la notorietà dell''nba' fino agli accesi scontri del campionato tra 'inter roma', la forza del pallone e della palla a spicchi permea le vite di molti. Il meteo, eroe invisibile delle nostre esistenze, scuote gli animi con gli umori del tempo manifestati nel trend 'weather'.\n\nTra le acque meno tumultuose, l''nba' emerge come un fertile campo per la scoperta su Google, con un DScore elevato e scarsa saturazione, elemento essenziale per una narrazione fresca e coinvolgente. Anche l'inquieto cielo, tramite il 'weather', chiede attenzione, amichevole alleato nel progetto di nuovi resoconti giornalistici.\n\nMa il portento calcistico di '23 aprile', saturato fin dall'origine, consiglia cautela. Una solida corazza di saturazione indica il rischio del sovraffollamento, dove l'eco dell'attualità può diventare un mormorio stentato.\n\nNel seminare contenuti per Discover, attenzione ai venti di saturazione e alla limpidezza del cielo. Affinché il vostro messaggio non si perda nell'urlo delle folle digitali, scegliete con accortezza le vostre battaglie profetiche."
};
