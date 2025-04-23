const trendData = [
  {
    "rank": 9,
    "entity": "istanbul",
    "discover_score": 11.177323545039625,
    "score_1h": 67.82758620689656,
    "score_4h": 53.06512605042017,
    "score_7d": 10.059171597633135,
    "extracted_entities": "Istanbul - Turchia - Città - Turismo - Cultura",
    "saturation_score": 289.0
  },
  {
    "rank": 38,
    "entity": "conegliano",
    "discover_score": 8.881506440047815,
    "score_1h": 9.75,
    "score_4h": 5.182773109243698,
    "score_7d": 23.630177514792898,
    "extracted_entities": "Conegliano - Città - Veneto - Italia - Turismo",
    "saturation_score": 413.0
  },
  {
    "rank": 1,
    "entity": "terremoto istanbul",
    "discover_score": 7.505660939094797,
    "score_1h": 59.10344827586207,
    "score_4h": 44.42016806722689,
    "score_7d": 1.6035502958579881,
    "extracted_entities": "Terremoto - Istanbul - Sisma - Turchia",
    "saturation_score": 4.0
  },
  {
    "rank": 33,
    "entity": "i peccatori film",
    "discover_score": 5.5291033487380545,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.1407563025210084,
    "score_7d": 16.316568047337277,
    "extracted_entities": "I peccatori - Film - Cinema - Intrattenimento",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "letto contenitore",
    "discover_score": 4.792511051887131,
    "score_1h": 12.85344827586207,
    "score_4h": 9.495798319327731,
    "score_7d": 9.242603550295858,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto",
    "saturation_score": 145.0
  },
  {
    "rank": 4,
    "entity": "sophie nyweide",
    "discover_score": 4.552291501153864,
    "score_1h": 5.706896551724137,
    "score_4h": 11.497899159663866,
    "score_7d": 6.124260355029586,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 221.0
  },
  {
    "rank": 15,
    "entity": "kean",
    "discover_score": 3.8108720807925134,
    "score_1h": 28.189655172413794,
    "score_4h": 7.321428571428571,
    "score_7d": 8.325443786982248,
    "extracted_entities": "Moise Kean - Calcio - Juventus - Serie A - Attaccante",
    "saturation_score": 147.0
  },
  {
    "rank": 14,
    "entity": "santo del giorno",
    "discover_score": 3.571216022069607,
    "score_1h": 5.4655172413793105,
    "score_4h": 0.8088235294117647,
    "score_7d": 9.346153846153847,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 38.0
  },
  {
    "rank": 16,
    "entity": "expedition 33",
    "discover_score": 3.5254505769956923,
    "score_1h": 9.431034482758621,
    "score_4h": 9.939075630252102,
    "score_7d": 7.109467455621302,
    "extracted_entities": "Expedition 33 - Stazione Spaziale Internazionale - NASA - Equipaggio - Missione spaziale",
    "saturation_score": 140.0
  },
  {
    "rank": 2,
    "entity": "barcellona - mallorca",
    "discover_score": 3.1010711971475327,
    "score_1h": 0.7844827586206896,
    "score_4h": 2.0861344537815123,
    "score_7d": 4.923076923076923,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 6,
    "entity": "pàpa francesco",
    "discover_score": 2.2077622437144906,
    "score_1h": 21.586206896551722,
    "score_4h": 9.247899159663866,
    "score_7d": 2.997041420118343,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "manchester city - aston villa",
    "discover_score": 2.008146334670707,
    "score_1h": 0.0,
    "score_4h": 1.3067226890756303,
    "score_7d": 3.8136094674556213,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 39.0
  },
  {
    "rank": 27,
    "entity": "btp italia",
    "discover_score": 1.9652326754681928,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.6386554621848739,
    "score_7d": 6.165680473372781,
    "extracted_entities": "BTP - Italia - Titoli di Stato - Investimenti",
    "saturation_score": 53.0
  },
  {
    "rank": 46,
    "entity": "mission",
    "discover_score": 1.9418553479894385,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.1176470588235294,
    "score_7d": 6.257396449704142,
    "extracted_entities": "Missione spaziale - Obiettivi - Strategia - Organizzazione - Progetto",
    "saturation_score": 116.0
  },
  {
    "rank": 5,
    "entity": "nantes - psg",
    "discover_score": 1.7192533036190534,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.3424369747899159,
    "score_7d": 3.701183431952663,
    "extracted_entities": "Nantes - PSG - Calcio - Partita - Ligue 1",
    "saturation_score": 10.0
  },
  {
    "rank": 8,
    "entity": "allerta grandine",
    "discover_score": 1.6142604455202092,
    "score_1h": 1.4741379310344827,
    "score_4h": 4.9789915966386555,
    "score_7d": 2.93491124260355,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 7.0
  },
  {
    "rank": 42,
    "entity": "thunder - grizzlies",
    "discover_score": 1.5990845243670349,
    "score_1h": 0.646551724137931,
    "score_4h": 0.0,
    "score_7d": 5.6301775147929,
    "extracted_entities": "Thunder - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "lakers - timberwolves",
    "discover_score": 1.3692647042162112,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.5945378151260504,
    "score_7d": 4.381656804733728,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "pacers - bucks",
    "discover_score": 1.3604491206350995,
    "score_1h": 0.0,
    "score_4h": 0.45588235294117646,
    "score_7d": 4.816568047337277,
    "extracted_entities": "Pacers - Bucks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 13,
    "entity": "maurizio gucci",
    "discover_score": 1.2328217784514872,
    "score_1h": 1.1379310344827587,
    "score_4h": 1.3235294117647058,
    "score_7d": 3.230769230769231,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 204.0
  },
  {
    "rank": 10,
    "entity": "carlos santana",
    "discover_score": 1.2247081548100358,
    "score_1h": 26.38793103448276,
    "score_4h": 7.180672268907563,
    "score_7d": 1.5887573964497042,
    "extracted_entities": "Carlos Santana - Musicista - Chitarrista - Rock - Latin Music",
    "saturation_score": 56.0
  },
  {
    "rank": 7,
    "entity": "federico cinà",
    "discover_score": 1.1825924287485239,
    "score_1h": 1.456896551724138,
    "score_4h": 8.913865546218489,
    "score_7d": 0.9467455621301776,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 37.0
  },
  {
    "rank": 37,
    "entity": "kashmir",
    "discover_score": 1.1478841021848734,
    "score_1h": 0.0,
    "score_4h": 0.32142857142857145,
    "score_7d": 3.9201183431952664,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Autonomia",
    "saturation_score": 669.0
  },
  {
    "rank": 44,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.9411241725667687,
    "score_1h": 1.5603448275862069,
    "score_4h": 0.3529411764705882,
    "score_7d": 3.2810650887573964,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Console",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "bonus bollette 2025",
    "discover_score": 0.7595716979148184,
    "score_1h": 2.2758620689655173,
    "score_4h": 0.75,
    "score_7d": 2.260355029585799,
    "extracted_entities": "Bonus - Bollette - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "atp madrid 2025 tabellone",
    "discover_score": 0.685138009520656,
    "score_1h": 1.4655172413793103,
    "score_4h": 0.9285714285714286,
    "score_7d": 1.9378698224852071,
    "extracted_entities": "ATP - Madrid - 2025 - Tabellone - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "dalai lama",
    "discover_score": 0.6812518515681509,
    "score_1h": 0.0,
    "score_4h": 0.20798319327731093,
    "score_7d": 2.3254437869822486,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 2.0
  },
  {
    "rank": 18,
    "entity": "inter milan dove vederla",
    "discover_score": 0.6468886094009806,
    "score_1h": 3.0422267679719464,
    "score_4h": 1.4705882352941178,
    "score_7d": 1.5591715976331362,
    "extracted_entities": "Inter - Milan - Partita - Trasmissione - Streaming",
    "saturation_score": 8.0
  },
  {
    "rank": 30,
    "entity": "morto donato metallo",
    "discover_score": 0.6408483206158444,
    "score_1h": 0.0,
    "score_4h": 0.296218487394958,
    "score_7d": 2.0355029585798814,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 6.0
  },
  {
    "rank": 43,
    "entity": "rio ave - sporting",
    "discover_score": 0.6332014556658682,
    "score_1h": 1.3189655172413792,
    "score_4h": 0.4180672268907563,
    "score_7d": 2.100591715976331,
    "extracted_entities": "Rio Ave - Sporting - Calcio - Partita - Portogallo",
    "saturation_score": 6.0
  },
  {
    "rank": 39,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.619259805840342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.1301775147928996,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 2.0
  },
  {
    "rank": 26,
    "entity": "25 aprile liberazione",
    "discover_score": 0.6143209813374355,
    "score_1h": 0.0,
    "score_4h": 1.5336134453781511,
    "score_7d": 1.5532544378698225,
    "extracted_entities": "25 aprile - Liberazione - Festa nazionale - Italia - Resistenza",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "freccia vallone 2025",
    "discover_score": 0.44868845826329884,
    "score_1h": 7.836206896551724,
    "score_4h": 3.2373949579831933,
    "score_7d": 0.3846153846153846,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 37.0
  },
  {
    "rank": 29,
    "entity": "pianura padana",
    "discover_score": 0.4000244096163834,
    "score_1h": 0.8879310344827586,
    "score_4h": 0.21428571428571427,
    "score_7d": 1.1449704142011834,
    "extracted_entities": "Pianura Padana - Geografia - Italia - Clima - Agricoltura",
    "saturation_score": 3.0
  },
  {
    "rank": 22,
    "entity": "luisa todini",
    "discover_score": 0.3960177381556898,
    "score_1h": 0.847457627118644,
    "score_4h": 0.3403361344537815,
    "score_7d": 1.0355029585798816,
    "extracted_entities": "Luisa Todini - Imprenditrice - Politica - Italia",
    "saturation_score": 39.0
  },
  {
    "rank": 48,
    "entity": "concorso 4617 allievi agenti bando",
    "discover_score": 0.3901714668605274,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.2751479289940828,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Bando - Forze dell'Ordine - Reclutamento",
    "saturation_score": 1.0
  },
  {
    "rank": 35,
    "entity": "giornata mondiale del libro 2025",
    "discover_score": 0.376474816383572,
    "score_1h": 0.0,
    "score_4h": 0.3235294117647059,
    "score_7d": 1.0621301775147929,
    "extracted_entities": "Giornata Mondiale del Libro - 2025 - Eventi - Lettura - UNESCO",
    "saturation_score": 5.0
  },
  {
    "rank": 31,
    "entity": "milena vukotic",
    "discover_score": 0.3541612260073494,
    "score_1h": 1.6724137931034482,
    "score_4h": 0.6491596638655462,
    "score_7d": 0.8609467455621301,
    "extracted_entities": "Milena Vukotic - Attrice - Cinema - Televisione",
    "saturation_score": 83.0
  },
  {
    "rank": 45,
    "entity": "maurizio pistocchi",
    "discover_score": 0.3443449977993673,
    "score_1h": 0.0,
    "score_4h": 0.47689075630252103,
    "score_7d": 0.9378698224852071,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Televisione - Opinioni",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "terremoto istambul",
    "discover_score": 0.3070062719661964,
    "score_1h": 1.456896551724138,
    "score_4h": 1.1092436974789917,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "lago di endine",
    "discover_score": 0.2944952839065173,
    "score_1h": 0.0,
    "score_4h": 0.7605042016806722,
    "score_7d": 0.6331360946745562,
    "extracted_entities": "Lago di Endine - Turismo - Natura - Lombardia - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "don giulio mignani",
    "discover_score": 0.2915003928845053,
    "score_1h": 1.3879310344827585,
    "score_4h": 1.4936974789915967,
    "score_7d": 0.33136094674556216,
    "extracted_entities": "Don Giulio Mignani - Religione - Chiesa Cattolica",
    "saturation_score": 7.0
  },
  {
    "rank": 50,
    "entity": "acconto irpef",
    "discover_score": 0.2752957605860365,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.45798319327731096,
    "score_7d": 0.665680473372781,
    "extracted_entities": "Acconto - IRPEF - Tasse - Pagamento - Fisco",
    "saturation_score": 150.0
  },
  {
    "rank": 32,
    "entity": "parma juve dove vederla",
    "discover_score": 0.26371961198409116,
    "score_1h": 1.4913793103448274,
    "score_4h": 0.7184873949579832,
    "score_7d": 0.485207100591716,
    "extracted_entities": "Parma - Juventus - Diretta TV - Streaming",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "marco frigo",
    "discover_score": 0.2552081642172946,
    "score_1h": 4.25,
    "score_4h": 1.676470588235294,
    "score_7d": 0.1715976331360947,
    "extracted_entities": "Marco Frigo",
    "saturation_score": 5.0
  },
  {
    "rank": 34,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.24559141779915644,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.4726890756302521,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Vanessa Incontrada - Ultima puntata - Programma televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "james senese",
    "discover_score": 0.18917802933288935,
    "score_1h": 1.2758620689655173,
    "score_4h": 0.3319327731092437,
    "score_7d": 0.2455621301775148,
    "extracted_entities": "James Senese - Musica - Napoli Centrale - Jazz - Sax",
    "saturation_score": 84.0
  },
  {
    "rank": 36,
    "entity": "marco negri",
    "discover_score": 0.18389267588372035,
    "score_1h": 1.6810344827586206,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.29585798816568043,
    "extracted_entities": "Marco Negri - Calcio - Giocatore - Carriera",
    "saturation_score": 5.0
  },
  {
    "rank": 17,
    "entity": "anna kalinskaya",
    "discover_score": 0.156934255395411,
    "score_1h": 0.0,
    "score_4h": 0.41596638655462187,
    "score_7d": 0.07988165680473372,
    "extracted_entities": "Anna Kalinskaya - Tennis - Giocatrice",
    "saturation_score": 9.0
  },
  {
    "rank": 47,
    "entity": "christopher o'connell",
    "discover_score": 0.15202341752517012,
    "score_1h": 0.11206896551724138,
    "score_4h": 0.3403361344537815,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Christopher O'Connell - Tennis - Australia",
    "saturation_score": 3.0
  },
  {
    "rank": 51,
    "entity": "jovanotti",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "elisa girotto 18 regali",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "salento",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "lamon",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "festa della liberazione",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "india",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "emanuela orlandi vaticano",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "man city vs aston villa",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "weather",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "ceccon",
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
    "entity": "tesla",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "nba",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "lsg vs dc",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "belve",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "davide barzan",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "pecco bagnaia",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "gargano",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "guardie svizzere",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "barcelone – majorque",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "fuochi d'artificio",
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
    "entity": "open madrid",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "israele",
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
    "entity": "gewitterwarnung",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "etna",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "milei",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "robert de niro",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "niccolò fabi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "pantelleria",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "antonio pappalardo",
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
    "entity": "tradingview",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "limone",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "tesla stock",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "nick pope",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "djalo",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "mattia almaviva",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "laliga",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "child care",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "nunzio stancampiano",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "luisa ranieri",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "emiliana arango",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "jack ryan",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "millionday",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "maria corleone",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "galatasaray",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "tajani",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "thunderbolts",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "jeremy irons",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "gucci",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "luis miguel",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "copa libertadores",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "department store",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "kvitova",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "martin wolf",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "incendio olbia",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "nantes vs psg",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "cerignola",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "الطقس غدًا",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "clemente mastella",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "boulter",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "santoro",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "brocchi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "edith bruck",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "diaco",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "livorno",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "gabi pallavolo",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "veltroni",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "rita pavone",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "lunigiana",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "ansu fati",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "mediaset extra the couple",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "daniele adani",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "agnese pini",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "playstation store",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "programma tv stasera",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "pete sampras",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "corrado augias",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "copenaghen",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "neres",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "meteo rimini",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "vecchioni",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "ladakh",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "bertone cardinale",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "arcivescovo",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "fc barcelona",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "putin",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "carlo cracco",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "deepseek",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "liam gallagher",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "insta360 x5",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "chuck norris",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "chatgpt down",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "giovanni storti",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "buongiorno mercoledi 23 aprile 2025",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "benjamin netanyahu",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "massimo franco",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "milei papa francesco",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "cardinale scola",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "ncis",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "altamura",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "lilli gruber",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "pedro pascal",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "valentina uomini e donne",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "la russa",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "tennis madrid",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "quanto guadagna il papa",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "hugh grant",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "suore di clausura",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "saudi pro league",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "this is us",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "financial times",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "luana uomini e donne",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "sorella papa francesco",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "meteo trentino",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "the last of us streaming",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "andor",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "bitcoin",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "alessandria",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "keira knightley",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "victoria villarruel",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "arango tennis",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "avanti un altro",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 13:09:47",
  "trends_count": 194,
  "top_score": 11.177323545039625,
  "runtime_minutes": 7.84106605052948,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nel vasto panorama delle tendenze italiane, due forze dominanti si erigono con potenza: il richiamo del turismo e il dramma dello sport. Istanbul emerge come simbolo di cultura e tragedia, con il trend del recente sisma (#3) che promette attenzione e compassione, ma anche opportunità per chi racconta le vicende della città (#1). Nel frattempo, i campi da gioco non conoscono tregua, con partite cruciali da Barcellona a Manchester (#12, #10), catturando i cuori di appassionati e creatori di contenuti.\n\nTra queste correnti, brilla l'opportunità divina per chi naviga il mondo di Discover: il tema del \"Letto contenitore\" (#5) offre un rifugio insolito. Con un DScore redditizio e una saturazione moderata, promette di attrarre lettori curiosi e alla ricerca di ispirazione domestica.\n\nTuttavia, prudenza richiede la cronaca politica ed economica. Il conflitto in Kashmir (#23) satura il panorama con troppo delle stesse voci, mentre il \"Bonus bollette 2025\" (#25), seppur promettente, deve affrontare una saturazione crescente.\n\nRiconosci che il cambiamento è permanente, e chi meglio si adatta prospera. Scegli bene il tuo campo, bilanciando saggezza e ambizione nella danza dell'informazione."
};
