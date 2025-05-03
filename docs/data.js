const trendData = [
  {
    "rank": 37,
    "entity": "harry",
    "discover_score": 14.42189896734931,
    "score_1h": 20.913793103448278,
    "score_4h": 4.7100840336134455,
    "score_7d": 35.84023668639053,
    "extracted_entities": "Harry Potter - Harry Styles - Principe Harry",
    "saturation_score": 1080.0
  },
  {
    "rank": 1,
    "entity": "torino - venezia",
    "discover_score": 8.760044776795791,
    "score_1h": 57.69827586206897,
    "score_4h": 37.41596638655462,
    "score_7d": 3.165680473372781,
    "extracted_entities": "Torino - Venezia - Viaggio - Trasporti - Turismo",
    "saturation_score": 995.0
  },
  {
    "rank": 4,
    "entity": "gta 6",
    "discover_score": 4.5777500199999315,
    "score_1h": 5.905172413793103,
    "score_4h": 1.5273109243697478,
    "score_7d": 8.541420118343195,
    "extracted_entities": "GTA 6 - Videogioco - Rockstar Games - Uscita - Trailer",
    "saturation_score": 67.0
  },
  {
    "rank": 2,
    "entity": "tony effe",
    "discover_score": 4.390880723733627,
    "score_1h": 34.35344827586207,
    "score_4h": 10.59453781512605,
    "score_7d": 4.781065088757397,
    "extracted_entities": "Tony Effe - Musica - Dark Polo Gang - Rap italiano",
    "saturation_score": 382.0
  },
  {
    "rank": 10,
    "entity": "trump papa",
    "discover_score": 4.290971779937732,
    "score_1h": 40.83620689655172,
    "score_4h": 6.75,
    "score_7d": 8.692307692307693,
    "extracted_entities": "Donald Trump - Papa - Politica - Religione",
    "saturation_score": 3.0
  },
  {
    "rank": 32,
    "entity": "pietrasanta",
    "discover_score": 4.273043700045803,
    "score_1h": 2.896551724137931,
    "score_4h": 1.0861344537815125,
    "score_7d": 12.7396449704142,
    "extracted_entities": "Pietrasanta - Luogo - Turismo - Arte - Cultura",
    "saturation_score": 118.0
  },
  {
    "rank": 24,
    "entity": "warriors - rockets",
    "discover_score": 2.8314489900818804,
    "score_1h": 10.586206896551724,
    "score_4h": 11.071428571428571,
    "score_7d": 5.71301775147929,
    "extracted_entities": "Golden State Warriors - Houston Rockets - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "lecce napoli",
    "discover_score": 2.5724402004933715,
    "score_1h": 26.68103448275862,
    "score_4h": 5.602941176470589,
    "score_7d": 4.976331360946745,
    "extracted_entities": "Lecce - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 692.0
  },
  {
    "rank": 9,
    "entity": "musetti draper",
    "discover_score": 1.7992617408539953,
    "score_1h": 1.353448275862069,
    "score_4h": 0.8508403361344539,
    "score_7d": 4.547337278106509,
    "extracted_entities": "Lorenzo Musetti - Jack Draper - Tennis",
    "saturation_score": 61.0
  },
  {
    "rank": 13,
    "entity": "andrea miceli",
    "discover_score": 1.7064777603237227,
    "score_1h": 3.060344827586207,
    "score_4h": 0.6617647058823529,
    "score_7d": 4.704142011834319,
    "extracted_entities": "Andrea Miceli",
    "saturation_score": 49.0
  },
  {
    "rank": 31,
    "entity": "bologna juventus",
    "discover_score": 1.6801692681421039,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.6638655462184874,
    "score_7d": 5.428994082840237,
    "extracted_entities": "Bologna - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 268.0
  },
  {
    "rank": 33,
    "entity": "sbk",
    "discover_score": 1.6792486783098404,
    "score_1h": 4.551724137931035,
    "score_4h": 0.6176470588235294,
    "score_7d": 5.497041420118343,
    "extracted_entities": "Superbike - Campionato Mondiale Superbike - Corse motociclistiche - Piloti Superbike - Circuiti Superbike",
    "saturation_score": 79.0
  },
  {
    "rank": 6,
    "entity": "kimi antonelli",
    "discover_score": 1.584956198537927,
    "score_1h": 10.431034482758621,
    "score_4h": 3.8004201680672267,
    "score_7d": 2.9319526627218933,
    "extracted_entities": "Kimi Antonelli - Pilota - Motorsport - Formula 1",
    "saturation_score": 79.0
  },
  {
    "rank": 47,
    "entity": "svuotare cestino nascosto whatsapp",
    "discover_score": 1.5469984407918194,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.23529411764705882,
    "score_7d": 5.488165680473372,
    "extracted_entities": "Svuotare - Cestino - Nascosto - WhatsApp",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "manchester city - wolverhampton",
    "discover_score": 1.5387947998823193,
    "score_1h": 4.267241379310345,
    "score_4h": 3.829831932773109,
    "score_7d": 2.3106508875739644,
    "extracted_entities": "Manchester City - Wolverhampton - Partita di calcio - Premier League",
    "saturation_score": 39.0
  },
  {
    "rank": 5,
    "entity": "scossa terremoto cile",
    "discover_score": 1.376517110113624,
    "score_1h": 5.379310344827586,
    "score_4h": 1.615546218487395,
    "score_7d": 2.8727810650887573,
    "extracted_entities": "Scossa - Terremoto - Cile",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "farage",
    "discover_score": 1.3409953170149422,
    "score_1h": 0.0,
    "score_4h": 0.4327731092436975,
    "score_7d": 4.387573964497041,
    "extracted_entities": "Nigel Farage - Politica britannica - Brexit - Partito Brexit - UKIP",
    "saturation_score": 354.0
  },
  {
    "rank": 11,
    "entity": "bonus anziani 2025",
    "discover_score": 1.3082888709294265,
    "score_1h": 5.991379310344827,
    "score_4h": 1.707983193277311,
    "score_7d": 3.224852071005917,
    "extracted_entities": "Bonus - Anziani - 2025",
    "saturation_score": 5.0
  },
  {
    "rank": 36,
    "entity": "jeffrey dean morgan",
    "discover_score": 1.3046977544653613,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 4.464497041420119,
    "extracted_entities": "Jeffrey Dean Morgan - Attore - The Walking Dead - Supernatural - Filmografia",
    "saturation_score": 3.0
  },
  {
    "rank": 14,
    "entity": "adriana abascal",
    "discover_score": 1.1478080468161738,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 3.3195266272189348,
    "extracted_entities": "Adriana Abascal - Modella - Attrice - Imprenditrice",
    "saturation_score": 92.0
  },
  {
    "rank": 16,
    "entity": "afd",
    "discover_score": 1.0626663489172765,
    "score_1h": 0.0,
    "score_4h": 0.8760504201680672,
    "score_7d": 2.9822485207100593,
    "extracted_entities": "Alternative für Deutschland - Partito politico - Germania",
    "saturation_score": 861.0
  },
  {
    "rank": 7,
    "entity": "vanoli",
    "discover_score": 1.0179739340057887,
    "score_1h": 5.551724137931035,
    "score_4h": 1.0357142857142856,
    "score_7d": 2.357988165680473,
    "extracted_entities": "Vanoli - Basket - Cremona - Serie A - Squadra",
    "saturation_score": 226.0
  },
  {
    "rank": 15,
    "entity": "terremoto bologna",
    "discover_score": 0.9799229393039176,
    "score_1h": 14.741379310344827,
    "score_4h": 4.867647058823529,
    "score_7d": 1.665680473372781,
    "extracted_entities": "Terremoto - Bologna - Sisma - Evento naturale",
    "saturation_score": 2.0
  },
  {
    "rank": 28,
    "entity": "superenalotto 2 maggio 2025",
    "discover_score": 0.9384154423170719,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.476890756302521,
    "score_7d": 3.0,
    "extracted_entities": "Superenalotto - 2 maggio 2025 - Estrazione - Jackpot - Lotteria",
    "saturation_score": 4.0
  },
  {
    "rank": 42,
    "entity": "cagliari udinese",
    "discover_score": 0.9073001598357825,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033614,
    "score_7d": 3.1479289940828403,
    "extracted_entities": "Cagliari - Udinese - Calcio - Serie A - Partita",
    "saturation_score": 121.0
  },
  {
    "rank": 12,
    "entity": "martina colombari",
    "discover_score": 0.8495511496167866,
    "score_1h": 0.0,
    "score_4h": 0.6134453781512605,
    "score_7d": 2.2662721893491122,
    "extracted_entities": "Martina Colombari - Personaggio pubblico - Attrice - Modella",
    "saturation_score": 40.0
  },
  {
    "rank": 50,
    "entity": "gt vs srh",
    "discover_score": 0.8437456305431538,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.17016806722689076,
    "score_7d": 3.0355029585798814,
    "extracted_entities": "GT - SRH - Cricket - Indian Premier League - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "porto - moreirense",
    "discover_score": 0.7996306185709539,
    "score_1h": 1.103448275862069,
    "score_4h": 0.6470588235294118,
    "score_7d": 2.328402366863905,
    "extracted_entities": "Porto - Moreirense - Calcio - Partita - Primeira Liga",
    "saturation_score": 9.0
  },
  {
    "rank": 29,
    "entity": "buongiorno sabato 3 maggio 2025",
    "discover_score": 0.6460996858842523,
    "score_1h": 0.0,
    "score_4h": 0.6638655462184875,
    "score_7d": 1.940828402366864,
    "extracted_entities": "Buongiorno - Sabato - 3 maggio 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "ryan garcia",
    "discover_score": 0.5842424321927192,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.15546218487394958,
    "score_7d": 1.9171597633136095,
    "extracted_entities": "Ryan Garcia - Boxe - Pugilato - Incontri di boxe - Atleta",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "rayo vallecano - getafe",
    "discover_score": 0.5716922124761301,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8508403361344539,
    "score_7d": 1.532544378698225,
    "extracted_entities": "Rayo Vallecano - Getafe - Partita di calcio - La Liga",
    "saturation_score": 31.0
  },
  {
    "rank": 44,
    "entity": "andrea pellegrino",
    "discover_score": 0.5497879848114441,
    "score_1h": 1.3275862068965518,
    "score_4h": 0.2668067226890756,
    "score_7d": 1.8254437869822486,
    "extracted_entities": "Andrea Pellegrino",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "maurizio landini stipendio",
    "discover_score": 0.5386939470301806,
    "score_1h": 0.0,
    "score_4h": 0.12394957983193278,
    "score_7d": 1.7928994082840237,
    "extracted_entities": "Maurizio Landini - Stipendio - Sindacato - CGIL",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "oroscopo scorpione",
    "discover_score": 0.5322534578065903,
    "score_1h": 0.0,
    "score_4h": 0.546218487394958,
    "score_7d": 1.7100591715976332,
    "extracted_entities": "Oroscopo - Scorpione - Astrologia",
    "saturation_score": 10.0
  },
  {
    "rank": 27,
    "entity": "bobo vieri",
    "discover_score": 0.4992856369724203,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.09033613445378151,
    "score_7d": 1.5384615384615385,
    "extracted_entities": "Bobo Vieri - Calcio - Italia - Ex calciatore - Sport",
    "saturation_score": 3.0
  },
  {
    "rank": 18,
    "entity": "guardavalle marina",
    "discover_score": 0.48909631862652664,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.9390756302521008,
    "score_7d": 1.162721893491124,
    "extracted_entities": "Guardavalle Marina - Calabria - Turismo - Spiagge",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "giovanardi",
    "discover_score": 0.40232778732045926,
    "score_1h": 1.353448275862069,
    "score_4h": 1.5,
    "score_7d": 0.8727810650887574,
    "extracted_entities": "Carlo Giovanardi - Politica Italiana - Senatore - Governo Italiano",
    "saturation_score": 27.0
  },
  {
    "rank": 45,
    "entity": "francesco paolantoni",
    "discover_score": 0.3764485736771016,
    "score_1h": 1.4767679719462303,
    "score_4h": 0.06302521008403361,
    "score_7d": 1.1863905325443787,
    "extracted_entities": "Francesco Paolantoni - Attore - Comico",
    "saturation_score": 2.0
  },
  {
    "rank": 43,
    "entity": "alba parietti",
    "discover_score": 0.37146946124825836,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.1153846153846154,
    "extracted_entities": "Alba Parietti - Personaggio pubblico - Televisione - Spettacolo",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "alianza lima - cienciano",
    "discover_score": 0.3539339734664943,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.1869747899159664,
    "score_7d": 1.0621301775147929,
    "extracted_entities": "Alianza Lima - Cienciano - Calcio - Perù - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "tyra caterina grant",
    "discover_score": 0.3443925459505974,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9495798319327731,
    "score_7d": 0.6893491124260356,
    "extracted_entities": "Tyra - Caterina - Grant",
    "saturation_score": 7.0
  },
  {
    "rank": 21,
    "entity": "popovich",
    "discover_score": 0.33455418295086814,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.36344537815126055,
    "score_7d": 0.7899408284023669,
    "extracted_entities": "Gregg Popovich - NBA - San Antonio Spurs - Allenatore di basket",
    "saturation_score": 56.0
  },
  {
    "rank": 38,
    "entity": "supercoppa italiana",
    "discover_score": 0.3332804174437298,
    "score_1h": 2.3275862068965516,
    "score_4h": 0.23739495798319327,
    "score_7d": 0.9260355029585798,
    "extracted_entities": "Supercoppa Italiana - Calcio - Competizione - Italia - Squadre di Serie A",
    "saturation_score": 159.0
  },
  {
    "rank": 17,
    "entity": "alessandro quasimodo",
    "discover_score": 0.32799462456162953,
    "score_1h": 0.0,
    "score_4h": 0.2542016806722689,
    "score_7d": 0.757396449704142,
    "extracted_entities": "Alessandro Quasimodo - Persone - Letteratura - Teatro",
    "saturation_score": 165.0
  },
  {
    "rank": 25,
    "entity": "paris fc",
    "discover_score": 0.30721430235928804,
    "score_1h": 3.155172413793103,
    "score_4h": 0.661764705882353,
    "score_7d": 0.636094674556213,
    "extracted_entities": "Paris FC - Calcio - Francia - Ligue 2",
    "saturation_score": 7.0
  },
  {
    "rank": 26,
    "entity": "gianni alemanno",
    "discover_score": 0.3026614371624773,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.38235294117647056,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Gianni Alemanno - Politica - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 19,
    "entity": "dipendenti pubblici taglio cuneo fiscale",
    "discover_score": 0.23888082641001868,
    "score_1h": 0.0,
    "score_4h": 1.7415966386554622,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Dipendenti pubblici - Taglio - Cuneo fiscale",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "ruud krol",
    "discover_score": 0.1940739776656397,
    "score_1h": 1.206896551724138,
    "score_4h": 0.5630252100840336,
    "score_7d": 0.2455621301775148,
    "extracted_entities": "Ruud Krol - Calcio - Olanda - Allenatore - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "eleonora di miele",
    "discover_score": 0.18034022736270203,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.04831932773109244,
    "score_7d": 0.334319526627219,
    "extracted_entities": "Eleonora - Miele - Personaggio pubblico",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "colombaccio",
    "discover_score": 0.1512618364465793,
    "score_1h": 0.0,
    "score_4h": 0.16176470588235295,
    "score_7d": 0.1893491124260355,
    "extracted_entities": "Colombaccio - Uccello - Fauna selvatica - Caccia - Habitat",
    "saturation_score": 2.0
  },
  {
    "rank": 51,
    "entity": "casper ruud",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "heidenheim - bochum",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "cardinale pietro parolin",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "mauro repetto",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "man city vs wolves",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "fast food restaurant",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "vigilance précipitations",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "hulk",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "joao mario",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "internet",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "lady bloodfight",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "f1 miami orari",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "colapinto",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "franco mastantuono",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "sylvester stallone",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "iva zanicchi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "steven adams",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "riccardo muti",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "stoccarda",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "donatella versace",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "anticipazioni amici settima puntata",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "blake lively",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "nizza - reims",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "fondaco dei tedeschi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "danieli",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "il lametino",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "sean combs",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "geraint thomas",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "atp roma",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "guerra ucraina russia trump",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "milano meteo",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "luca nardi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "achille costacurta",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "jill sobule",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "uomini e donne oggi",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "francisco cerúndolo",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "draper ranking",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "anna foglietta",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "caterina balivo",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "universitatea craiova - rapid bucureşti",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "timothée chalamet",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "bill gates",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "مان سيتي ضد وولفرهامبتون",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "paolo rossi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "cecilia rodriguez",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "manuela arcuri",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "diretta tennis",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "louis dassilva",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "fausto bertinotti",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "michelle hunziker",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "manolo santana",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "mazzarri",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "vangelo del giorno",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "chiara ferragni",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "tennis live",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "doc",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "angel fernandez artime cardinale",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "vialli",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "ligue 2",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "elongazione",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "beckham",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "nigel farage",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "extra omnes",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "gigi riva",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "madonna di campiglio",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "puntata speciale affari tuoi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "valeria bartolucci",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "tomaso montanari",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "emanuela rossi",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "mario andretti",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "gujarat titans vs sunrisers hyderabad match scorecard",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "hunziker",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "dino giarrusso",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "nainggolan",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lady gaga",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "maradona",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "tommy cash",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "cardinale matteo zuppi",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "il gusto dell'amore",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "parmatoday",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "vivaticket",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "la notte nel cuore serie turca",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "foca monaca",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "pokemon pocket golden week",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "elodie amici",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "bergamo news",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "khartoum",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "the four seasons serie",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "toto wolff",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "michelle",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "elisabetta gardini",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "nicola sansone",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "metro a roma",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "gta 5",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "yuma",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "che adams",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "victoria beckham",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "fortnite",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "brain rot",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "ministro urso",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "max verstappen",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "katia follesa",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "un posto al sole",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "ozzy osbourne",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "vincicasa",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "hamilton ferrari",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "paolo crepet",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "gerri fiction",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "incendio assisi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "michael matthews",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "thierry henry",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "selena gomez",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "lametino",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "met gala 2025",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "stuttgart",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "as roma biglietti",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "san secondo parmense",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "gazzetta di parma",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "ambra battilana gutierrez",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "kylie jenner",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "rayo vallecano",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "stan wawrinka",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "uomini e donne 2 maggio 2025",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "venaria reale",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "bruce willis",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "cardinale gugerotti",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "emanuele floridi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "oggi in tv canale 5",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-03 08:14:52",
  "trends_count": 180,
  "top_score": 14.42189896734931,
  "runtime_minutes": 4.694006363550822,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano che la trama di viaggi e trasporti intreccia le destinazioni italiane ed oltre, conducendo gli sguardi verso Torino e Venezia. Parallelamente, il fascino dell'intrattenimento echeggia tra le ombre di Harry Potter e la musica vibrante di Tony Effe. Le entità di sport riemergono forti, con eventi calcistici che attraversano nazioni e competizioni, mentre i drammi cosmici dello sport simulano la tensione di un palcoscenico globale.\n\nTra le opportunità consigliate per gli esploratori di Google Discover emerge 'gta 6' (#3), un videogioco con potenziale non ancora saturato (Sat: 67) e un significativo interesse persistente, abbracciando il futuro del gaming. Anche la cultura artistica di 'pietrasanta' (#6) promette un blend unico di nicchia e scoperta, con una saturazione limitata che invita a nuovi racconti visivi.\n\nTuttavia, la narrazione del 'trump papa' (#5) richiede attenzione, con la sua saturazione bassa ma fluttuante che potrebbe essere una chimera politica effimera. In questo contesto crescente di interconnessioni, la sinergia tra temi culturali e nicchie low-sat apre la strada a coloro che desiderano risvegliare il loro pubblico con un contenuto che risuoni oltre i titoli convenzionali."
};
