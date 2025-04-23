const trendData = [
  {
    "rank": 10,
    "entity": "inter milan",
    "discover_score": 14.125022616130705,
    "score_1h": 52.28448275862069,
    "score_4h": 38.65126050420168,
    "score_7d": 18.023668639053255,
    "extracted_entities": "Inter - Milan - Calcio - Serie A - Derby",
    "saturation_score": 964.0
  },
  {
    "rank": 23,
    "entity": "madrid atp",
    "discover_score": 9.418779291444613,
    "score_1h": 66.12931034482759,
    "score_4h": 38.05672268907563,
    "score_7d": 14.251479289940828,
    "extracted_entities": "Madrid - ATP - Tennis - Torneo",
    "saturation_score": 2.0
  },
  {
    "rank": 31,
    "entity": "open madrid",
    "discover_score": 8.820757778283708,
    "score_1h": 66.61206896551724,
    "score_4h": 40.658802433107134,
    "score_7d": 13.627218934911243,
    "extracted_entities": "Open - Madrid - Tennis - Torneo",
    "saturation_score": 5.0
  },
  {
    "rank": 8,
    "entity": "istanbul",
    "discover_score": 8.348460221361002,
    "score_1h": 70.77586206896552,
    "score_4h": 27.556722689075627,
    "score_7d": 10.5,
    "extracted_entities": "Istanbul - Turchia - Città - Turismo - Cultura",
    "saturation_score": 180.0
  },
  {
    "rank": 50,
    "entity": "23 aprile",
    "discover_score": 6.9326901267523136,
    "score_1h": 58.20689655172414,
    "score_4h": 60.25420168067227,
    "score_7d": 6.618343195266272,
    "extracted_entities": "23 aprile - Eventi storici - Compleanni celebri - Giornata mondiale del libro - Anniversari",
    "saturation_score": 3230.0
  },
  {
    "rank": 14,
    "entity": "santo del giorno",
    "discover_score": 5.334758985999885,
    "score_1h": 1.129310344827586,
    "score_4h": 0.7373949579831932,
    "score_7d": 13.2396449704142,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 9.0
  },
  {
    "rank": 11,
    "entity": "letto contenitore",
    "discover_score": 5.03275971418844,
    "score_1h": 25.637931034482758,
    "score_4h": 13.51890756302521,
    "score_7d": 8.7396449704142,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto - Spazio di archiviazione",
    "saturation_score": 85.0
  },
  {
    "rank": 4,
    "entity": "sophie nyweide",
    "discover_score": 3.961327335468932,
    "score_1h": 14.655172413793103,
    "score_4h": 14.80252100840336,
    "score_7d": 4.449704142011834,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 201.0
  },
  {
    "rank": 1,
    "entity": "barcellona - mallorca",
    "discover_score": 3.8134971368020514,
    "score_1h": 0.0,
    "score_4h": 2.0995569776027567,
    "score_7d": 4.784023668639053,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 3,
    "entity": "terremoto istanbul",
    "discover_score": 3.0286313970297813,
    "score_1h": 66.73275862068965,
    "score_4h": 23.592436974789916,
    "score_7d": 1.150887573964497,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "conegliano volley",
    "discover_score": 2.8667537123213944,
    "score_1h": 0.0,
    "score_4h": 0.05439330543933055,
    "score_7d": 9.523668639053255,
    "extracted_entities": "Conegliano - Volley - Imoco Volley - Pallavolo femminile",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "expedition 33",
    "discover_score": 2.8201528839751604,
    "score_1h": 12.775862068965516,
    "score_4h": 9.235294117647058,
    "score_7d": 5.482248520710059,
    "extracted_entities": "Expedition 33 - Stazione Spaziale Internazionale - NASA - Equipaggio - Missione spaziale",
    "saturation_score": 52.0
  },
  {
    "rank": 2,
    "entity": "manchester city - aston villa",
    "discover_score": 2.3344919337046175,
    "score_1h": 2.2844827586206895,
    "score_4h": 1.2710084033613445,
    "score_7d": 3.9585798816568047,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 119.0
  },
  {
    "rank": 47,
    "entity": "mission",
    "discover_score": 1.8485041216856666,
    "score_1h": 0.0,
    "score_4h": 1.1071428571428572,
    "score_7d": 6.254437869822485,
    "extracted_entities": "Missione - Obiettivi - Strategia - Pianificazione - Esecuzione",
    "saturation_score": 116.0
  },
  {
    "rank": 41,
    "entity": "thunder - grizzlies",
    "discover_score": 1.6725307558199596,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5966386554621849,
    "score_7d": 5.683431952662722,
    "extracted_entities": "Thunder - Grizzlies - NBA - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 37,
    "entity": "i peccatori film",
    "discover_score": 1.5704484993187953,
    "score_1h": 0.0,
    "score_4h": 0.14915966386554622,
    "score_7d": 5.381656804733728,
    "extracted_entities": "I peccatori - Film - Cinema",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "lakers - timberwolves",
    "discover_score": 1.39666831604833,
    "score_1h": 0.0,
    "score_4h": 0.7226890756302521,
    "score_7d": 4.346153846153847,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "federico cinà",
    "discover_score": 1.3868405831085082,
    "score_1h": 13.370689655172413,
    "score_4h": 9.985294117647058,
    "score_7d": 1.1893491124260356,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 10.0
  },
  {
    "rank": 5,
    "entity": "nantes - psg",
    "discover_score": 1.3772971824634352,
    "score_1h": 1.1724137931034482,
    "score_4h": 0.18277310924369747,
    "score_7d": 3.245562130177515,
    "extracted_entities": "Nantes - PSG - Calcio - Partita - Ligue 1",
    "saturation_score": 10.0
  },
  {
    "rank": 44,
    "entity": "rio ave - sporting",
    "discover_score": 1.25914593180072,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.5378151260504201,
    "score_7d": 4.3609467455621305,
    "extracted_entities": "Rio Ave - Sporting - Partita di calcio - Primeira Liga",
    "saturation_score": 7.0
  },
  {
    "rank": 42,
    "entity": "dalai lama",
    "discover_score": 1.1567314591864946,
    "score_1h": 0.0,
    "score_4h": 0.1953781512605042,
    "score_7d": 4.068047337278107,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 3.0
  },
  {
    "rank": 28,
    "entity": "gargano",
    "discover_score": 1.0801768351830456,
    "score_1h": 4.9655172413793105,
    "score_4h": 1.5580763686227628,
    "score_7d": 3.1775147928994083,
    "extracted_entities": "Gargano - Puglia - Turismo - Parco Nazionale del Gargano - Spiagge",
    "saturation_score": 39.0
  },
  {
    "rank": 26,
    "entity": "25 aprile liberazione",
    "discover_score": 1.0722433731562644,
    "score_1h": 1.5344827586206897,
    "score_4h": 0.7330174747723357,
    "score_7d": 3.334319526627219,
    "extracted_entities": "25 aprile - Liberazione - Festa nazionale - Italia - Resistenza",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "netanyahu",
    "discover_score": 1.0195730284393116,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5714285714285714,
    "score_7d": 3.0857988165680474,
    "extracted_entities": "Benjamin Netanyahu - Politica israeliana - Primo Ministro di Israele - Likud - Medio Oriente",
    "saturation_score": 183.0
  },
  {
    "rank": 33,
    "entity": "kashmir",
    "discover_score": 0.9566578434308552,
    "score_1h": 0.0,
    "score_4h": 0.8214285714285714,
    "score_7d": 3.053254437869822,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Autonomia",
    "saturation_score": 748.0
  },
  {
    "rank": 6,
    "entity": "allerta grandine",
    "discover_score": 0.8866210866300858,
    "score_1h": 12.508620689655173,
    "score_4h": 4.548319327731092,
    "score_7d": 1.0887573964497042,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 7.0
  },
  {
    "rank": 9,
    "entity": "pàpa francesco",
    "discover_score": 0.8619096858603457,
    "score_1h": 11.577586206896552,
    "score_4h": 4.697478991596638,
    "score_7d": 1.150887573964497,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "maurizio gucci",
    "discover_score": 0.8613700175849155,
    "score_1h": 1.1379310344827585,
    "score_4h": 1.3865546218487395,
    "score_7d": 2.254437869822485,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 250.0
  },
  {
    "rank": 39,
    "entity": "referendum giugno 2025",
    "discover_score": 0.815965667392739,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.47478991596638653,
    "score_7d": 2.730769230769231,
    "extracted_entities": "Referendum - Giugno 2025 - Eventi politici",
    "saturation_score": 2.0
  },
  {
    "rank": 49,
    "entity": "elisa girotto 18 regali",
    "discover_score": 0.7129922687626623,
    "score_1h": 1.9827586206896552,
    "score_4h": 1.2626050420168067,
    "score_7d": 2.22189349112426,
    "extracted_entities": "Elisa Girotto - 18 Regali - Film - Storia vera - Maternità",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 0.7065908628205445,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.405325443786982,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.6847092623795994,
    "score_1h": 0.0,
    "score_4h": 0.3382352941176471,
    "score_7d": 2.3461538461538463,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Console",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.6612615455358768,
    "score_1h": 0.0,
    "score_4h": 0.5378151260504201,
    "score_7d": 2.109467455621302,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 3.0
  },
  {
    "rank": 16,
    "entity": "cina tennis",
    "discover_score": 0.49729161933945265,
    "score_1h": 3.4655172413793105,
    "score_4h": 1.1323529411764706,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Cina - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "pacers - bucks",
    "discover_score": 0.47813829013979997,
    "score_1h": 1.3103448275862069,
    "score_4h": 0.46218487394957986,
    "score_7d": 1.5088757396449703,
    "extracted_entities": "Pacers - Bucks - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "carlos santana",
    "discover_score": 0.4611200047174931,
    "score_1h": 2.9913793103448274,
    "score_4h": 1.092436974789916,
    "score_7d": 0.9467455621301775,
    "extracted_entities": "Carlos Santana - Musicista - Chitarrista - Rock - Latin Music",
    "saturation_score": 42.0
  },
  {
    "rank": 18,
    "entity": "anna kalinskaya",
    "discover_score": 0.373283198989324,
    "score_1h": 0.0,
    "score_4h": 1.0483193277310925,
    "score_7d": 0.7248520710059172,
    "extracted_entities": "Anna Kalinskaya - Tennis - Giocatrice",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.3702251263788725,
    "score_1h": 0.25862068965517243,
    "score_4h": 0.15756302521008403,
    "score_7d": 1.044378698224852,
    "extracted_entities": "Vanessa Incontrada - Ultima puntata - Programma televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "lamon",
    "discover_score": 0.342294741599577,
    "score_1h": 2.586206896551724,
    "score_4h": 1.0630252100840336,
    "score_7d": 0.6597633136094674,
    "extracted_entities": "Lamon - Patata - Veneto - Agricoltura",
    "saturation_score": 63.0
  },
  {
    "rank": 35,
    "entity": "konyaspor - galatasaray",
    "discover_score": 0.33861067745050766,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.28361344537815125,
    "score_7d": 0.9201183431952662,
    "extracted_entities": "Konyaspor - Galatasaray - Partita di calcio - Süper Lig - Turchia",
    "saturation_score": 5.0
  },
  {
    "rank": 45,
    "entity": "maurizio pistocchi",
    "discover_score": 0.33387363633496586,
    "score_1h": 0.0,
    "score_4h": 0.058823529411764705,
    "score_7d": 1.0088757396449703,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "terremoto istambul",
    "discover_score": 0.3265759597855807,
    "score_1h": 2.5086206896551726,
    "score_4h": 1.5168067226890756,
    "score_7d": 0.45857988165680474,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "don giulio mignani",
    "discover_score": 0.30560650379097937,
    "score_1h": 2.181034482758621,
    "score_4h": 1.1365546218487395,
    "score_7d": 0.3994082840236687,
    "extracted_entities": "Don Giulio Mignani - Sacerdote - Chiesa Cattolica",
    "saturation_score": 7.0
  },
  {
    "rank": 22,
    "entity": "luisa todini",
    "discover_score": 0.30072372078713183,
    "score_1h": 1.206896551724138,
    "score_4h": 0.23109243697478993,
    "score_7d": 0.7041420118343196,
    "extracted_entities": "Luisa Todini",
    "saturation_score": 39.0
  },
  {
    "rank": 19,
    "entity": "freccia vallone 2025",
    "discover_score": 0.2620067325910712,
    "score_1h": 1.396551724137931,
    "score_4h": 0.569327731092437,
    "score_7d": 0.4467455621301775,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 37.0
  },
  {
    "rank": 27,
    "entity": "morto donato metallo",
    "discover_score": 0.2560226321447633,
    "score_1h": 1.4655172413793103,
    "score_4h": 0.29411764705882354,
    "score_7d": 0.5414201183431953,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 6.0
  },
  {
    "rank": 43,
    "entity": "acconto irpef",
    "discover_score": 0.21785641683647086,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Acconto - IRPEF - Tasse - Dichiarazione dei redditi - Fisco",
    "saturation_score": 152.0
  },
  {
    "rank": 30,
    "entity": "pecco bagnaia",
    "discover_score": 0.15426401727556363,
    "score_1h": 0.9741379310344829,
    "score_4h": 0.3970588235294118,
    "score_7d": 0.11242603550295859,
    "extracted_entities": "Pecco Bagnaia - MotoGP - Ducati",
    "saturation_score": 5.0
  },
  {
    "rank": 38,
    "entity": "lago di endine",
    "discover_score": 0.1501258003601847,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.0,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "Lago di Endine - Lago - Turismo - Natura",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "marco negri",
    "discover_score": 0.13159490201749738,
    "score_1h": 0.3879310344827586,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Marco Negri - Calciatore - Italia - Rangers - Serie A",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "weather",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "man city vs aston villa",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "tesla",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "nba",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "milena vukotic",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "quando si gioca inter roma",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "guardie svizzere",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "valencia - espanyol",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "davide barzan",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "belve",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "lsg vs dc",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "barcelone – majorque",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "fuochi d'artificio",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "paradiso delle signore",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "banco bpm unicredit",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "gewitterwarnung",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "the couple quando va in onda",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "bruno vespa",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "silence",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "israele",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "niccolò fabi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "tradingview",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "milei",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "etna",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "antonio pappalardo",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "pantelleria",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "kvitova",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "limone",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "pahalgam",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "mattia almaviva",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "oblivion remake",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "nick pope",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "djalo",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "child care",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "23 aprile giornata mondiale",
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
    "entity": "luisa ranieri",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "emiliana arango",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "jack ryan",
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
    "entity": "maria corleone",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "thunderbolts",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "laliga",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "مان سيتي ضد أستون فيلا",
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
    "entity": "department store",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "tajani",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "gucci",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "clemente mastella",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "robert de niro",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "luis miguel",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "martin wolf",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "diaco",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "cerignola",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "incendio olbia",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "nantes vs psg",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "الطقس غدًا",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "la liga",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "boulter",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "santoro",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "brocchi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "edith bruck",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "livorno",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "bersani",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "gabi pallavolo",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "veltroni",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "23 aprile buongiorno",
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
    "entity": "rita pavone",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "lunigiana",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "daniele adani",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "agnese pini",
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
    "entity": "meteo rimini",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "programma tv stasera",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "naomi osaka",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "corrado augias",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "pete sampras",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "copenaghen",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "vecchioni",
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
    "entity": "bertone cardinale",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "liam gallagher",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "ladakh",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "arcivescovo",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "fc barcelona",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "putin",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "jovanotti",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "carlo cracco",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "deepseek",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "insta360 x5",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "chuck norris",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "giovanni storti",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "chatgpt down",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "massimo franco",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "naomi ōsaka",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "milei papa francesco",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "cardinale scola",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "ncis",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "alife",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "lilli gruber",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "pedro pascal",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "la russa",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "valentina uomini e donne",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "quanto guadagna il papa",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "hugh grant",
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
    "entity": "saudi pro league",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "barcellona inter",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "this is us",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "financial times",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "meteo trentino",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "sorella papa francesco",
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
    "entity": "the last of us streaming",
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
    "entity": "bitcoin",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "anders arborelius",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "ralph fiennes",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "alessandria",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "keira knightley",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "victoria villarruel",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "arango tennis",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "avanti un altro",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "kanye west",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 11:44:34",
  "trends_count": 193,
  "top_score": 14.125022616130705,
  "runtime_minutes": 6.251273278395335,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano due principali correnti che scorrono tra le menti digitali della nazione: la passione per lo sport e l'interesse per la cultura e la storia. Il calcio ribolle attraverso il derby 'Inter-Milan' (#1) e la partita di 'Manchester City - Aston Villa' (#13), mentre la memoria storica e culturale si riflette nel simbolismo del '25 aprile, Liberazione' (#23) e nella 'Giornata mondiale del libro' il '23 aprile' (#5).\n\nL'opportunità più promettente per dominare Google Discover è camminare con il filo teso del 'Madrid ATP' (#2), un orizzonte con bassa saturazione e un DScore di 9.4, pronto a cavalcare il crescente interesse nell'ultimo ora. Attenzione, però, all'affollato sentiero del '23 aprile' (#5), le cui abbondanti testimonianze di saturazione potrebbero soffocare nuovi racconti.\n\nGuidati dalla ricerca di equilibrio tra urgenza e ubiquità, i creatori devono coltivare genius loci digitali — angoli unici e ricchi — per emergere in un paesaggio saturo e competitivo. Cercate nicchie nuove, ove l'eco della vostra voce possa risuonare chiara senza confusione."
};
