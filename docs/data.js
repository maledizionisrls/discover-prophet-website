const trendData = [
  {
    "rank": 42,
    "entity": "pasqua",
    "discover_score": 29.949330142015512,
    "score_1h": 86.38793103448276,
    "score_4h": 79.07983193277312,
    "score_7d": 48.58875739644971,
    "extracted_entities": "Pasqua - Festa religiosa - Tradizioni - Uova di cioccolato - Celebrazioni",
    "saturation_score": 3760.0
  },
  {
    "rank": 21,
    "entity": "nvidia",
    "discover_score": 9.0621182335022,
    "score_1h": 36.38793103448276,
    "score_4h": 19.09873949579832,
    "score_7d": 17.701183431952664,
    "extracted_entities": "NVIDIA - Tecnologia - GPU - Intelligenza Artificiale - Gaming",
    "saturation_score": 281.0
  },
  {
    "rank": 9,
    "entity": "champions league",
    "discover_score": 8.205467027900204,
    "score_1h": 68.88793103448276,
    "score_4h": 41.24579831932773,
    "score_7d": 7.795857988165681,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 1220.0
  },
  {
    "rank": 1,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 7.8504895420394645,
    "score_1h": 7.094827586206897,
    "score_4h": 11.609243697478991,
    "score_7d": 6.624260355029586,
    "extracted_entities": "Borussia Dortmund - Barcellona - Calcio - Partita - Champions League",
    "saturation_score": 79.0
  },
  {
    "rank": 5,
    "entity": "mattarella",
    "discover_score": 7.796263501893628,
    "score_1h": 40.75,
    "score_4h": 44.41386554621849,
    "score_7d": 4.931952662721894,
    "extracted_entities": "Sergio Mattarella - Presidente della Repubblica Italiana - Politica Italiana",
    "saturation_score": 3330.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 7.383159849630325,
    "score_1h": 37.6551724137931,
    "score_4h": 28.779411764705884,
    "score_7d": 5.831360946745562,
    "extracted_entities": "Aston Villa - PSG - Calcio - Squadre di calcio - Partita",
    "saturation_score": 322.0
  },
  {
    "rank": 37,
    "entity": "allerta vento",
    "discover_score": 6.469462210447723,
    "score_1h": 13.491379310344827,
    "score_4h": 6.2289915966386555,
    "score_7d": 17.399408284023668,
    "extracted_entities": "Allerta - Vento - Meteo - Previsioni",
    "saturation_score": 5.0
  },
  {
    "rank": 27,
    "entity": "barcelona",
    "discover_score": 5.587470284501998,
    "score_1h": 44.672413793103445,
    "score_4h": 15.94747899159664,
    "score_7d": 11.704142011834321,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 212.0
  },
  {
    "rank": 2,
    "entity": "sara curtis",
    "discover_score": 5.528615438753962,
    "score_1h": 65.64655172413794,
    "score_4h": 26.102941176470587,
    "score_7d": 3.260355029585799,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 277.0
  },
  {
    "rank": 36,
    "entity": "schumacher",
    "discover_score": 5.044687670438038,
    "score_1h": 0.0,
    "score_4h": 0.4327731092436975,
    "score_7d": 15.24260355029586,
    "extracted_entities": "Michael Schumacher - Formula 1 - Pilota automobilistico - Ferrari - Incidente sciistico",
    "saturation_score": 45.0
  },
  {
    "rank": 20,
    "entity": "psg",
    "discover_score": 4.663415857732934,
    "score_1h": 48.991379310344826,
    "score_4h": 32.023109243697476,
    "score_7d": 5.053254437869823,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico",
    "saturation_score": 1480.0
  },
  {
    "rank": 33,
    "entity": "borussia dortmund",
    "discover_score": 3.205614167917052,
    "score_1h": 13.482758620689655,
    "score_4h": 11.544117647058822,
    "score_7d": 7.106508875739645,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 181.0
  },
  {
    "rank": 41,
    "entity": "eurojackpot",
    "discover_score": 2.859333551629488,
    "score_1h": 3.5775862068965516,
    "score_4h": 5.460084033613445,
    "score_7d": 8.05621301775148,
    "extracted_entities": "Eurojackpot - Lotteria - Jackpot - Europa",
    "saturation_score": 39.0
  },
  {
    "rank": 23,
    "entity": "uefa champions league",
    "discover_score": 2.6051886771937216,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7100840336134454,
    "score_7d": 7.766272189349113,
    "extracted_entities": "UEFA - Champions League - Calcio - Torneo - Europa",
    "saturation_score": 37.0
  },
  {
    "rank": 6,
    "entity": "bialetti",
    "discover_score": 2.5202667780860066,
    "score_1h": 29.387931034482758,
    "score_4h": 10.876050420168067,
    "score_7d": 3.269230769230769,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 241.0
  },
  {
    "rank": 50,
    "entity": "meloni",
    "discover_score": 2.051426091152556,
    "score_1h": 17.060344827586206,
    "score_4h": 7.5735294117647065,
    "score_7d": 5.224852071005917,
    "extracted_entities": "Giorgia Meloni - Frutta - Cucina - Politica",
    "saturation_score": 2470.0
  },
  {
    "rank": 4,
    "entity": "terremoto oggi",
    "discover_score": 1.8113201433229278,
    "score_1h": 25.17241379310345,
    "score_4h": 14.399159663865547,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Terremoto - Oggi - Evento sismico",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "dortmund vs barcelona",
    "discover_score": 1.4760925729439152,
    "score_1h": 0.0,
    "score_4h": 0.6281512605042017,
    "score_7d": 4.396449704142012,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 3.0
  },
  {
    "rank": 10,
    "entity": "luciano darderi",
    "discover_score": 1.282240583736902,
    "score_1h": 21.293103448275865,
    "score_4h": 3.3571428571428568,
    "score_7d": 2.662721893491124,
    "extracted_entities": "Luciano Darderi - Tennis - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 29,
    "entity": "fuochi d'artificio",
    "discover_score": 1.0373816788822783,
    "score_1h": 1.3275862068965516,
    "score_4h": 0.6302521008403361,
    "score_7d": 3.3106508875739644,
    "extracted_entities": "Fuochi d'artificio - Spettacoli pirotecnici - Eventi celebrativi",
    "saturation_score": 355.0
  },
  {
    "rank": 15,
    "entity": "jasmine paolini",
    "discover_score": 0.9172727673622736,
    "score_1h": 0.3706896551724138,
    "score_4h": 1.7605042016806722,
    "score_7d": 2.269230769230769,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 49.0
  },
  {
    "rank": 16,
    "entity": "ozempic",
    "discover_score": 0.8743731121425931,
    "score_1h": 4.448275862068966,
    "score_4h": 1.3235294117647058,
    "score_7d": 2.2840236686390534,
    "extracted_entities": "Ozempic - Farmaco - Diabete - Perdita di peso - Semaglutide",
    "saturation_score": 7.0
  },
  {
    "rank": 31,
    "entity": "real madrid arsenal",
    "discover_score": 0.8111168105816844,
    "score_1h": 14.14655172413793,
    "score_4h": 6.869747899159664,
    "score_7d": 0.9763313609467456,
    "extracted_entities": "Real Madrid - Arsenal - Calcio - Partita - Club di calcio",
    "saturation_score": 142.0
  },
  {
    "rank": 43,
    "entity": "elezioni comunali monfalcone",
    "discover_score": 0.7495941596823948,
    "score_1h": 0.0,
    "score_4h": 0.18277310924369747,
    "score_7d": 2.609467455621302,
    "extracted_entities": "Elezioni - Comunali - Monfalcone",
    "saturation_score": 3.0
  },
  {
    "rank": 39,
    "entity": "davide barzan",
    "discover_score": 0.7399950974028614,
    "score_1h": 0.0,
    "score_4h": 0.819327731092437,
    "score_7d": 2.3550295857988166,
    "extracted_entities": "Davide Barzan",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "taobao",
    "discover_score": 0.7262926989150942,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.532544378698225,
    "extracted_entities": "Taobao - E-commerce - Cina - Shopping online - Alibaba",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "4chan",
    "discover_score": 0.6278339268431877,
    "score_1h": 0.0,
    "score_4h": 0.0819327731092437,
    "score_7d": 1.7840236686390532,
    "extracted_entities": "4chan - Forum online - Anonimato - Cultura internet - Meme",
    "saturation_score": 6.0
  },
  {
    "rank": 25,
    "entity": "gelato al cioccolato",
    "discover_score": 0.5457764331683768,
    "score_1h": 0.0,
    "score_4h": 0.18907563025210083,
    "score_7d": 1.6597633136094674,
    "extracted_entities": "Gelato - Cioccolato - Dessert",
    "saturation_score": 8.0
  },
  {
    "rank": 7,
    "entity": "warriors - grizzlies",
    "discover_score": 0.5261282133757781,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.6197478991596634,
    "score_7d": 0.6272189349112426,
    "extracted_entities": "Golden State Warriors - Memphis Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "carlos alcaraz",
    "discover_score": 0.4766925465896748,
    "score_1h": 0.25,
    "score_4h": 0.9096638655462185,
    "score_7d": 1.257396449704142,
    "extracted_entities": "Carlos Alcaraz - Tennis - Atleta",
    "saturation_score": 71.0
  },
  {
    "rank": 11,
    "entity": "piero pelù",
    "discover_score": 0.43965933459339646,
    "score_1h": 1.3103448275862069,
    "score_4h": 0.7836134453781514,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Italia - Rock",
    "saturation_score": 48.0
  },
  {
    "rank": 12,
    "entity": "rocco siffredi iene",
    "discover_score": 0.42371870131646605,
    "score_1h": 1.75,
    "score_4h": 1.71218487394958,
    "score_7d": 0.650887573964497,
    "extracted_entities": "Rocco Siffredi - Le Iene - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "chris martin",
    "discover_score": 0.39823793327835305,
    "score_1h": 0.0,
    "score_4h": 0.7184873949579832,
    "score_7d": 1.0414201183431953,
    "extracted_entities": "Chris Martin - Coldplay - Musica",
    "saturation_score": 427.0
  },
  {
    "rank": 8,
    "entity": "cina aerei boeing",
    "discover_score": 0.37905890360682065,
    "score_1h": 0.9741379310344829,
    "score_4h": 0.34243697478991597,
    "score_7d": 0.7692307692307693,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "enrico brignano",
    "discover_score": 0.34813544240066957,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.09663865546218488,
    "score_7d": 1.0710059171597632,
    "extracted_entities": "Enrico Brignano - Comico - Attore - Spettacoli",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.31964764036755444,
    "score_1h": 0.0,
    "score_4h": 1.8109243697478992,
    "score_7d": 0.4615384615384615,
    "extracted_entities": "Mercoledì - 16 aprile - Giorno della settimana",
    "saturation_score": 1.0
  },
  {
    "rank": 18,
    "entity": "topo gigio",
    "discover_score": 0.3039131265576319,
    "score_1h": 0.06896551724137931,
    "score_4h": 0.2668067226890756,
    "score_7d": 0.6745562130177515,
    "extracted_entities": "Topo Gigio - Personaggio - Televisione - Italia",
    "saturation_score": 9.0
  },
  {
    "rank": 34,
    "entity": "andrea roncato",
    "discover_score": 0.30064023978507437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.8372781065088757,
    "extracted_entities": "Andrea Roncato",
    "saturation_score": 5.0
  },
  {
    "rank": 44,
    "entity": "luca barbarossa",
    "discover_score": 0.26472661730972546,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.4726890756302521,
    "score_7d": 0.5976331360946745,
    "extracted_entities": "Luca Barbarossa - Cantante - Musica Italiana",
    "saturation_score": 2.0
  },
  {
    "rank": 28,
    "entity": "magic - hawks",
    "discover_score": 0.23260270395731944,
    "score_1h": 0.0,
    "score_4h": 0.13025210084033614,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Magic - Hawks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "paolini oggi",
    "discover_score": 0.22885719256345022,
    "score_1h": 1.232758620689655,
    "score_4h": 0.28361344537815125,
    "score_7d": 0.5059171597633136,
    "extracted_entities": "Paolini - Oggi - Notizie",
    "saturation_score": 1.0
  },
  {
    "rank": 40,
    "entity": "pbks vs kkr",
    "discover_score": 0.2229755706352416,
    "score_1h": 0.0,
    "score_4h": 0.296218487394958,
    "score_7d": 0.4526627218934911,
    "extracted_entities": "PBKS - KKR - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "nada cella",
    "discover_score": 0.214025458697292,
    "score_1h": 1.3017241379310345,
    "score_4h": 0.19117647058823528,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "Nada Cella - Omicidio - Chiavari - Indagine",
    "saturation_score": 159.0
  },
  {
    "rank": 32,
    "entity": "aston villa vs psg",
    "discover_score": 0.21400816713833487,
    "score_1h": 1.2155172413793103,
    "score_4h": 0.3949579831932773,
    "score_7d": 0.36390532544378695,
    "extracted_entities": "Aston Villa - PSG - Partita di calcio - Competizione sportiva - Club calcistici",
    "saturation_score": 3.0
  },
  {
    "rank": 24,
    "entity": "gianni letta",
    "discover_score": 0.17000796631846052,
    "score_1h": 0.0,
    "score_4h": 0.25210084033613445,
    "score_7d": 0.19230769230769232,
    "extracted_entities": "Gianni Letta",
    "saturation_score": 177.0
  },
  {
    "rank": 13,
    "entity": "fuochi d artificio trama",
    "discover_score": 0.1669251343019106,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Fuochi d'artificio - Trama - Film - Storia",
    "saturation_score": 8.0
  },
  {
    "rank": 47,
    "entity": "ascolti tv dati auditel ieri",
    "discover_score": 0.14773556391880094,
    "score_1h": 0.0,
    "score_4h": 0.1638655462184874,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Ascolti TV - Dati Auditel - Ieri",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "daniela santanchè",
    "discover_score": 0.1423246172180954,
    "score_1h": 0.0,
    "score_4h": 0.31092436974789917,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Daniela Santanchè - Politica Italiana - Governo Italiano",
    "saturation_score": 5.0
  },
  {
    "rank": 17,
    "entity": "don ciro panigara",
    "discover_score": 0.13875157340275115,
    "score_1h": 1.1379310344827585,
    "score_4h": 0.17647058823529413,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Don Ciro Panigara",
    "saturation_score": 8.0
  },
  {
    "rank": 46,
    "entity": "tassi bce",
    "discover_score": 0.12230994990418144,
    "score_1h": 0.0,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.07988165680473372,
    "extracted_entities": "Tassi di interesse - Banca Centrale Europea - Politica monetaria",
    "saturation_score": 8.0
  },
  {
    "rank": 51,
    "entity": "uefa",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "3bmeteo",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "un giorno in pretura",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "premio strega 2025",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "child care",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "childcare",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "dortmund – barcelone",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "la sicilia",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "bvb",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "gene hackman",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "axios",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "ragusa news",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "الطقس",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "strettoweb",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "alessandra amoroso",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "antonella fiordelisi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "paris saint germain",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "tempostretto",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "alex de minaur",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "flavio cobolli",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "the elder scrolls iv oblivion",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "camilla rosatello",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "eva lys",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "zambrotta gambe",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "bersani",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "paola barale",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "birmingham",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "palagano",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "lahore qalandars vs karachi kings",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "clizia incorvaia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "daniele de santis",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "allerta meteo sardegna",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "danilo bertazzi",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "il turco serie",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "diego della valle",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "jane fonda",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "ezio mauro",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "reggiana - málaga",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "ethan quinn",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "trani",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "bagnoli",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "presencias film",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "hantavirus",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "silvia salis",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "paola cortellesi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "الطقس غدًا",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "antonio albanese",
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
    "entity": "michele bravi",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "ansa",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "mauro corona",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "davide carbisiero",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "simone di pasquale",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "briatore",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "mkhitaryan",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "wind warning",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "utrecht",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "francesca alotta",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "groenlandia",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "carla signoris",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "rocco casalino",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "hakimi",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "paesi sicuri",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "flavio briatore",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "mirna mastronardi",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "uova alla jova",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "balestrate",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "risultati elezioni comunali pordenone",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "jennifer lopez",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "etna",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "champions league classifica",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "meteo trento",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "in",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "nba playoff",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "asensio",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "ultime notizie",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "casper ruud",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "marquinhos",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "elly schlein",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "bianca berlinguer",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "gazzetta del sud",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "colosseo",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "liga de campeones de la uefa",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "partite stasera",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "mission impossible",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "marco liorni",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "daniel mcvicar",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "nicholas kohl",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "rashford",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "gardaland",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "nuno mendes",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "harry potter",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "koora",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "jakub menšík",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "fabio capello",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "paris",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "gerard martín",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "il vibonese",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "umberto tozzi",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "enrico mattei",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "szczesny",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "stefano massini",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "obama",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "gazzetta di mantova",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "antonella elia",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "tarjeta roja",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "johnny depp",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "cosenza",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "fiera milano live",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "achraf hakimi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "nicole moscariello",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "jana fett",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "alessandro covi",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "monaco open",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "jule niemeier",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "snai",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "xavier bartlett",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "alycia parks",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "dedura-palomero, diego",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "laura siegemund",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "aleksandar stanković",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "osaka",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "igli tare",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "emma navarro",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-16 10:23:13",
  "trends_count": 179,
  "top_score": 29.949330142015512,
  "runtime_minutes": 4.674627808729808,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profetizzo l'avvento di epiche discussioni sportive e rincuoranti tradizioni che domineranno i cuori e le menti in Italia. Tre temi principali si ergono possenti: il calcio, con l'intensità delle partite di Champions League e le sfide tra squadre iconiche come Borussia Dortmund e Barcellona; la celebrazione delle festività, incarnata nelle tradizioni di Pasqua; e la politica, con il presidente Mattarella in fulgida contemplazione.\n\nTra le opportunità divine per Google Discover, emerge prepotente il trend delle \"Allerta vento\" (#7), con un DScore rilevante e una saturazione minima: un uragano di interessi meteorologici pronto a soffiare tra le timeline digitali. Anche \"NVIDIA\" (#2), con il suo crescente interesse nelle ore recenti e un basso Sat, si presenta come un fertile terreno per contenuti di tecnologia e innovazione.\n\nTuttavia, attenzione a \"Pasqua\" (#1), la cui saturazione elevatissima potrebbe trasformare il suo luminoso interesse in un campo di battaglia competitivo. Anche il \"PSG\" (#11) richiede cautela, con saturazione e Rank che superano il sostegno del potenziale Discover.\n\nAmanti dei contenuti, cavalcate queste tendenze con saggezza, scegliendo strategie che risuonino con autenticità e unicità."
};
