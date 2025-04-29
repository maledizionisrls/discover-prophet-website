const trendData = [
  {
    "rank": 12,
    "entity": "madrid open",
    "discover_score": 19.068068665985994,
    "score_1h": 77.32758620689656,
    "score_4h": 57.64285714285714,
    "score_7d": 22.35207100591716,
    "extracted_entities": "Madrid Open - Tennis - Torneo - Spagna",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "barcellona inter",
    "discover_score": 18.556053214502853,
    "score_1h": 65.42884278199884,
    "score_4h": 53.8046218487395,
    "score_7d": 24.213017751479292,
    "extracted_entities": "Barcellona - Inter - Calcio - Partita - Champions League",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "vasco rossi",
    "discover_score": 11.037170402496187,
    "score_1h": 1.6206896551724137,
    "score_4h": 1.958449070004571,
    "score_7d": 27.023668639053252,
    "extracted_entities": "Vasco Rossi - Cantante - Musica Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "musetti",
    "discover_score": 8.66246614091282,
    "score_1h": 58.27673874926943,
    "score_4h": 37.594537815126046,
    "score_7d": 9.650887573964496,
    "extracted_entities": "Lorenzo Musetti - Tennis - ATP - Classifica - Tornei",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "chiara ferragni",
    "discover_score": 8.450796587592167,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.3970588235294118,
    "score_7d": 24.01775147928994,
    "extracted_entities": "Chiara Ferragni - Influencer - Imprenditrice - Moda - Social Media",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "lazio - parma",
    "discover_score": 6.0160443377345505,
    "score_1h": 10.431034482758621,
    "score_4h": 23.160771421539327,
    "score_7d": 3.002958579881657,
    "extracted_entities": "Lazio - Parma - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "superenalotto",
    "discover_score": 5.702052633483269,
    "score_1h": 33.686440677966104,
    "score_4h": 28.54201680672269,
    "score_7d": 10.15680473372781,
    "extracted_entities": "SuperEnalotto - Lotteria - Jackpot - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "arsenal psg",
    "discover_score": 3.3911624258359656,
    "score_1h": 38.46683226183518,
    "score_4h": 21.609243697478995,
    "score_7d": 2.905325443786982,
    "extracted_entities": "Arsenal - PSG - Calcio - Partita - Club",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "elezioni canada",
    "discover_score": 3.1099250881908356,
    "score_1h": 4.517241379310345,
    "score_4h": 5.392857142857143,
    "score_7d": 6.180473372781065,
    "extracted_entities": "Elezioni - Canada - Politica",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "sergio ramelli",
    "discover_score": 3.062156886288194,
    "score_1h": 4.491379310344827,
    "score_4h": 3.9873949579831933,
    "score_7d": 4.982248520710058,
    "extracted_entities": "Sergio Ramelli - Anni di Piombo - Milano - Neofascismo - Violenza politica",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "stadio maradona",
    "discover_score": 2.686342104248418,
    "score_1h": 0.5775862068965517,
    "score_4h": 5.069327731092437,
    "score_7d": 7.284023668639053,
    "extracted_entities": "Stadio - Maradona - Napoli - Calcio - Eventi",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "stefano de martino",
    "discover_score": 2.624497971188732,
    "score_1h": 8.905172413793103,
    "score_4h": 2.296218487394958,
    "score_7d": 7.387573964497042,
    "extracted_entities": "Stefano De Martino - Personaggio pubblico - Televisione - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "verona cagliari",
    "discover_score": 1.8906094610270279,
    "score_1h": 1.603448275862069,
    "score_4h": 5.5966386554621845,
    "score_7d": 3.0118343195266273,
    "extracted_entities": "Verona - Cagliari - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "sciopero trenitalia",
    "discover_score": 1.7586054259032282,
    "score_1h": 0.0,
    "score_4h": 0.05672268907563025,
    "score_7d": 6.041420118343195,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Ferrovie - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "iga świątek",
    "discover_score": 1.5804626597409643,
    "score_1h": 2.3302162478082993,
    "score_4h": 1.134453781512605,
    "score_7d": 4.4674556213017755,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia - Grand Slam",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "papa francesco cardinale becciu",
    "discover_score": 1.5451076508401178,
    "score_1h": 1.4827586206896552,
    "score_4h": 2.48109243697479,
    "score_7d": 3.8461538461538463,
    "extracted_entities": "Papa Francesco - Cardinale Becciu - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "udinese - bologna",
    "discover_score": 1.4582235607590108,
    "score_1h": 1.38135593220339,
    "score_4h": 1.7555289898386133,
    "score_7d": 2.3698224852071004,
    "extracted_entities": "Udinese - Bologna - Serie A - Partita di calcio - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "bublik",
    "discover_score": 1.314304927735495,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.11764705882352941,
    "score_7d": 4.6360946745562135,
    "extracted_entities": "Tennis - Alexander Bublik - ATP Tour",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "warriors - rockets",
    "discover_score": 1.204704594507291,
    "score_1h": 0.0,
    "score_4h": 0.31512605042016806,
    "score_7d": 4.2485207100591715,
    "extracted_entities": "Golden State Warriors - Houston Rockets - NBA - Partita di basket - Squadre di basket",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "alex de minaur",
    "discover_score": 1.104831979983133,
    "score_1h": 2.336206896551724,
    "score_4h": 9.496677332020674,
    "score_7d": 1.304733727810651,
    "extracted_entities": "Alex de Minaur - Tennis - Australia",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "pippo baudo",
    "discover_score": 1.0507451057399688,
    "score_1h": 7.758620689655173,
    "score_4h": 2.15546218487395,
    "score_7d": 2.7810650887573964,
    "extracted_entities": "Pippo Baudo - Personaggio televisivo - Italia - Presentatore - Spettacolo",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "lara leito",
    "discover_score": 0.9830716626657297,
    "score_1h": 32.84263588544711,
    "score_4h": 8.367647058823529,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "Lara Leito - Personaggio pubblico - Modella - Influencer",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "festa della mamma 2025 data",
    "discover_score": 0.8906700647555187,
    "score_1h": 1.6664231443600235,
    "score_4h": 0.4684873949579832,
    "score_7d": 2.674556213017752,
    "extracted_entities": "Festa della mamma - 2025 - Data",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "nathalie guetta",
    "discover_score": 0.8421300958627261,
    "score_1h": 1.2349503214494448,
    "score_4h": 0.9467845715692135,
    "score_7d": 2.0266272189349115,
    "extracted_entities": "Nathalie Guetta - Attrice - Don Matteo - Francia - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "mario adinolfi",
    "discover_score": 0.8314475793278844,
    "score_1h": 0.5721800116890707,
    "score_4h": 2.0357142857142856,
    "score_7d": 1.7988165680473371,
    "extracted_entities": "Mario Adinolfi",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "douglas luiz",
    "discover_score": 0.7577903851513746,
    "score_1h": 0.41379310344827586,
    "score_4h": 1.0546218487394958,
    "score_7d": 1.9881656804733727,
    "extracted_entities": "Douglas Luiz - Calciatore - Aston Villa - Brasile - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "pantelleria",
    "discover_score": 0.722822710625457,
    "score_1h": 0.853448275862069,
    "score_4h": 2.8235294117647056,
    "score_7d": 1.8106508875739644,
    "extracted_entities": "Pantelleria - Isola - Sicilia - Turismo - Vulcano",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "marco travaglio",
    "discover_score": 0.6956633506254801,
    "score_1h": 0.0,
    "score_4h": 0.3697478991596639,
    "score_7d": 2.2840236686390534,
    "extracted_entities": "Marco Travaglio - Giornalismo - Politica Italiana - Editoriale - Il Fatto Quotidiano",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "jakub menšík",
    "discover_score": 0.5991440854626975,
    "score_1h": 0.5677966101694916,
    "score_4h": 1.069327731092437,
    "score_7d": 1.6360946745562128,
    "extracted_entities": "Jakub Menšík - Tennis - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "sondaggio politico",
    "discover_score": 0.5576556583383736,
    "score_1h": 0.0,
    "score_4h": 0.3088235294117647,
    "score_7d": 1.8846153846153846,
    "extracted_entities": "Sondaggio - Politica - Opinione pubblica - Elezioni",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "franco mastantuono",
    "discover_score": 0.5383119303314566,
    "score_1h": 1.7586206896551726,
    "score_4h": 0.4950511585387293,
    "score_7d": 1.695266272189349,
    "extracted_entities": "Franco Mastantuono",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "sara gama",
    "discover_score": 0.5047804927215859,
    "score_1h": 0.0,
    "score_4h": 0.11764705882352941,
    "score_7d": 1.1420118343195265,
    "extracted_entities": "Sara Gama - Calcio - Juventus - Nazionale Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "adrien brody",
    "discover_score": 0.4338885209077699,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.569327731092437,
    "score_7d": 1.2159763313609466,
    "extracted_entities": "Adrien Brody - Attore - Film - Hollywood",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "barletta viva",
    "discover_score": 0.4193359473529001,
    "score_1h": 1.5169491525423728,
    "score_4h": 2.065126050420168,
    "score_7d": 0.6923076923076923,
    "extracted_entities": "Barletta - Notizie locali - Eventi - Cultura - Comunità",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "samuele segreto",
    "discover_score": 0.40875913392789875,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3634453781512605,
    "score_7d": 1.2100591715976332,
    "extracted_entities": "Samuele Segreto - Persone - Intrattenimento",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "erdogan",
    "discover_score": 0.40699241015098725,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.5672268907563025,
    "score_7d": 0.8994082840236687,
    "extracted_entities": "Recep Tayyip Erdoğan - Turchia - Politica turca - Presidenza - Elezioni",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "giornata internazionale della danza",
    "discover_score": 0.40561297037877403,
    "score_1h": 2.0349210987726476,
    "score_4h": 0.6029411764705882,
    "score_7d": 0.8875739644970414,
    "extracted_entities": "Giornata internazionale della danza - Danza - Celebrazione - UNESCO - 29 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "tortu",
    "discover_score": 0.40327837157500535,
    "score_1h": 0.0,
    "score_4h": 3.598739495798319,
    "score_7d": 0.4082840236686391,
    "extracted_entities": "Marcell Jacobs - Atletica leggera - Olimpiadi - Record - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "joel evans",
    "discover_score": 0.36945275929681176,
    "score_1h": 0.9482758620689655,
    "score_4h": 0.6113445378151261,
    "score_7d": 0.9112426035502958,
    "extracted_entities": "Joel Evans",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "cala goloritze",
    "discover_score": 0.32150929258535144,
    "score_1h": 0.75,
    "score_4h": 0.5840336134453782,
    "score_7d": 0.7485207100591716,
    "extracted_entities": "Cala Goloritzé - Spiaggia - Sardegna - Turismo - Natura",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "massimo giletti",
    "discover_score": 0.3128186762914695,
    "score_1h": 1.5,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.6804733727810651,
    "extracted_entities": "Massimo Giletti - Giornalismo - Televisione - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "paolo calissano",
    "discover_score": 0.30984077032353985,
    "score_1h": 0.75,
    "score_4h": 0.04831932773109244,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Paolo Calissano - Attore - Italia - Televisione - Cinema",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "mark carney",
    "discover_score": 0.2823845209152905,
    "score_1h": 0.0,
    "score_4h": 0.5378151260504201,
    "score_7d": 0.5236686390532544,
    "extracted_entities": "Mark Carney - Economia - Banca d'Inghilterra - Governatore - Politica monetaria",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "blue ivy",
    "discover_score": 0.2721045330736546,
    "score_1h": 1.7095265926358854,
    "score_4h": 0.34243697478991597,
    "score_7d": 0.6035502958579883,
    "extracted_entities": "Blue Ivy Carter - Beyoncé - Jay-Z - Musica - Famiglia Carter",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "max cavallari",
    "discover_score": 0.23193584000610365,
    "score_1h": 0.08620689655172414,
    "score_4h": 0.1092436974789916,
    "score_7d": 0.4497041420118343,
    "extracted_entities": "Max Cavallari - Comico - Duo comico - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "origi",
    "discover_score": 0.1907159405968108,
    "score_1h": 0.0,
    "score_4h": 1.0094669667029992,
    "score_7d": 0.1272189349112426,
    "extracted_entities": "Divock Origi - Calciatore - Milan - Liverpool - Belgio",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "gianluca sordo",
    "discover_score": 0.18802028815827465,
    "score_1h": 2.8281706604324954,
    "score_4h": 0.3592436974789916,
    "score_7d": 0.2455621301775148,
    "extracted_entities": "Gianluca Sordo",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "matteo gigante",
    "discover_score": 0.18472930241117802,
    "score_1h": 0.0,
    "score_4h": 0.5819327731092437,
    "score_7d": 0.21005917159763313,
    "extracted_entities": "Matteo Gigante",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "ascolti tv lunedì",
    "discover_score": 0.11897739996694674,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.32482156042333254,
    "score_7d": 0.0,
    "extracted_entities": "Ascolti TV - Lunedì - Programmi televisivi - Audience - Share televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "alessandra todde",
    "discover_score": 0.11816143840476845,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.03550295857988166,
    "extracted_entities": "Alessandra Todde - Politica italiana - Movimento 5 Stelle",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "napoli genoa",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "maria corleone",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "heat - cavaliers",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "zimbabwe vs bangladesh",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "sabrina salerno",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "giro d'italia 2025",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "grigor dimitrov",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "valditara troppi compiti",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "brigitta boccoli",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cause blackout spagna",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "antonella mosetti",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "istanbul",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "frances tiafoe",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "gt vs rr",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "oroscopo ariete 29 aprile",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "camila giorgi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "ruini",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nicola ventola",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "costantinopoli",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "silvia salis",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "personale ata terza fascia ciad",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "mar cinese meridionale",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "cardinal muller",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "napoli new york",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "manila nazzaro",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "nba",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "kevin love",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "jessica alba",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "indire",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "referendum",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "internazionali roma 2025",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "stipendio docenti",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "giorgio mastrota",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "estonia",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "brandin podziemski",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "kim kardashian",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "istambul",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "bolelli",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "avengers doomsday",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "napoli basket",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "buongiorno martedi 29 aprile",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "lorella boccia",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "eva amurri",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "estrazione del lotto",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "fbi most wanted",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "you serie",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "iva zanicchi",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "verona-cagliari",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "the last of us streaming",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "golden state warriors",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "armenia",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "michelle obama",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "antonio spadaro",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "belve 2025",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "gta 6",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "pedro pascal",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "gasperini",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "streaming",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "monica setta",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "bologna fc 1909",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "cappella sistina",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "michele santoro",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "pwc",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "tommaso zorzi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "simone muratore",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "cmf phone 2 pro",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "sabrina salerno malattia",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "castel gandolfo",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "djuric",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "anamul haque",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "india women vs south africa women",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "eurovision 2025",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "real madrid ancelotti",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "alperen şengün",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "leonardo di caprio",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "bersani",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "cuzzocrea",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "antonino spinalbese",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "alessandro giuli",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "alberto stasi",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "il paradiso delle signore anticipazioni",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "calendario lazio",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "alessandro proto",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "andrea delogu",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "marlon brando",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "thais wiggers",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "lacerenza",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "diffidati serie a",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "ventola",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "benedetta porcaroli",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "dan peterson",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "rihanna",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "allenatore parma",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "storie di sera",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "salvatore bagni",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "valerio lundini",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "lucetta scaraffia",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "lazio juve",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "amal clooney",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "cardinale muller",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "tudor juventus",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "john elkann",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "pellegrino parma",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "santo del giorno",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "risultati elezioni provinciali catania",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "russell crowe",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "risultati per serie a",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "jurgen klopp",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "milly carlucci",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "referendum 2025",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "stefania orlando",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "dinamo bucurești - cfr cluj",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "cosa c'è stasera in tv",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "alba parietti",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "ascoli",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "gennarino affari tuoi",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "diffidati bologna",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "giovanni leoni",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "restaurant",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "youth league",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "daniele ghilardi",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "marigliano net",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "mediobanca banca generali",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "stefano fresi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "pastificio futura",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "basilicata",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "elodie",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "novendiali",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "salma hayek",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "toffanin",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "boschi",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "leeds - bristol city",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "donzelli",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "stefano massini",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "ankara",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "eurovision",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "bronte",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "campionato primavera",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "marco cecchinato",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "suno",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "ps plus giochi maggio",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "radio radio",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "napoli genoa",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "pablo escobar",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "cremonese cesena primavera",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "pierce brosnan",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "bangladesh",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "nicola porro",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "dennis man",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "kevin costner",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "francesca barra",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "classifica serie a calcio",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "nathaly caldonazzo",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "lillard",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "baldassare reina",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "fabio fazio che tempo che fa",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "jason momoa",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "tecchiena",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-29 13:12:59",
  "trends_count": 210,
  "top_score": 19.068068665985994,
  "runtime_minutes": 7.234874661763509,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi ci guidano attraverso un intreccio misterioso di trame: il fervore dello sport e i sussurri della cultura dominano il panorama delle tendenze. Lo sport brilla con potenti acclamazioni, con eventi di rilievo come il Madrid Open (#1) e l'attesa sfida Barcellona-Inter (#2) che galvanizzano il fervore degli appassionati. Tuttavia, musica e spettacolo gettano le loro ombre, con il fascino intramontabile di Vasco Rossi (#3) che continua a toccare i cuori.\n\nNell'oracolo del potenziale Google Discover, il \"Madrid Open\" (#1) emerge come un'opportunità dorata. Con un forte DScore di 19.1 e un interesse consistente, questa tendenza promette una copertura vibrante pur restando relativamente priva di saturazione. All'opposto, il denso cielo del mondo sportivo ricorda cautela: eventi come \"Lazio-Parma\" (#6), sebbene suggestivi, rischiano di svanire rapidamente in un mare di competizione svelta.\n\nA coloro che navigano queste acque mosse, si consiglia di lucrare sul ronzio dello sport prestandosi a nuove prospettive e approfondimenti. Mentre si allarga il sentiero della scoperta, il bilanciamento tra tempestività e unicità della voce emergerà come il vero alfiere della risonanza."
};
