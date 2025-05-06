const trendData = [
  {
    "rank": 29,
    "entity": "3b meteo",
    "discover_score": 14.181964963652309,
    "score_1h": 76.88793103448276,
    "score_4h": 42.554621848739494,
    "score_7d": 24.02958579881657,
    "extracted_entities": "3b meteo - Previsioni - Meteo",
    "saturation_score": 4.0
  },
  {
    "rank": 34,
    "entity": "meteo roma",
    "discover_score": 12.283394546669546,
    "score_1h": 64.69827586206897,
    "score_4h": 41.195378151260506,
    "score_7d": 21.467455621301774,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 194.0
  },
  {
    "rank": 44,
    "entity": "meteo torino",
    "discover_score": 12.213550656245241,
    "score_1h": 26.79310344827586,
    "score_4h": 25.25,
    "score_7d": 26.857988165680474,
    "extracted_entities": "Meteo - Torino - Previsioni",
    "saturation_score": 118.0
  },
  {
    "rank": 15,
    "entity": "jeep compass",
    "discover_score": 9.107554293766759,
    "score_1h": 11.336206896551724,
    "score_4h": 5.813025210084034,
    "score_7d": 19.63905325443787,
    "extracted_entities": "Jeep - Compass - Auto - SUV",
    "saturation_score": 385.0
  },
  {
    "rank": 3,
    "entity": "rihanna",
    "discover_score": 8.680422947503995,
    "score_1h": 39.11206896551724,
    "score_4h": 22.102941176470587,
    "score_7d": 8.70414201183432,
    "extracted_entities": "Rihanna - Cantante - Musica - Fenty Beauty - Barbados",
    "saturation_score": 265.0
  },
  {
    "rank": 43,
    "entity": "crime",
    "discover_score": 8.5652453622508,
    "score_1h": 3.9482758620689657,
    "score_4h": 3.869747899159664,
    "score_7d": 23.798816568047336,
    "extracted_entities": "Crimine - Sicurezza - Legge - Giustizia - Criminalità",
    "saturation_score": 83.0
  },
  {
    "rank": 28,
    "entity": "allerta precipitazioni",
    "discover_score": 7.7957645918287035,
    "score_1h": 29.82758620689655,
    "score_4h": 24.623949579831933,
    "score_7d": 14.792899408284024,
    "extracted_entities": "Allerta - Precipitazioni - Meteo - Avvisi",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "genoa - milan",
    "discover_score": 7.444486076942071,
    "score_1h": 62.62068965517241,
    "score_4h": 28.674369747899156,
    "score_7d": 3.36094674556213,
    "extracted_entities": "Genoa - Milan - Calcio - Serie A - Partita",
    "saturation_score": 1300.0
  },
  {
    "rank": 38,
    "entity": "invalsi",
    "discover_score": 6.590469202379107,
    "score_1h": 60.4051724137931,
    "score_4h": 23.92436974789916,
    "score_7d": 13.192307692307692,
    "extracted_entities": "INVALSI - Test standardizzati - Scuola italiana - Valutazione educativa - Istituto Nazionale per la Valutazione del Sistema Educativo di Istruzione e di Formazione",
    "saturation_score": 115.0
  },
  {
    "rank": 23,
    "entity": "vigevano",
    "discover_score": 5.682815035526628,
    "score_1h": 24.370689655172413,
    "score_4h": 1.4096638655462186,
    "score_7d": 15.263313609467454,
    "extracted_entities": "Vigevano - Città - Lombardia - Italia - Turismo",
    "saturation_score": 168.0
  },
  {
    "rank": 24,
    "entity": "gaza",
    "discover_score": 5.34847103317612,
    "score_1h": 3.353448275862069,
    "score_4h": 3.273109243697479,
    "score_7d": 14.103550295857989,
    "extracted_entities": "Gaza - Conflitto - Medio Oriente - Striscia di Gaza - Palestina",
    "saturation_score": 2450.0
  },
  {
    "rank": 30,
    "entity": "bad bunny",
    "discover_score": 4.70358206613241,
    "score_1h": 59.23275862068965,
    "score_4h": 33.0546218487395,
    "score_7d": 5.730769230769231,
    "extracted_entities": "Bad Bunny - Musica - Artista - Reggaeton - Concerti",
    "saturation_score": 41.0
  },
  {
    "rank": 46,
    "entity": "sirmione",
    "discover_score": 3.956958323309439,
    "score_1h": 1.7844827586206895,
    "score_4h": 3.9369747899159666,
    "score_7d": 11.899408284023668,
    "extracted_entities": "Sirmione - Lago di Garda - Turismo",
    "saturation_score": 114.0
  },
  {
    "rank": 2,
    "entity": "tema met gala 2025",
    "discover_score": 3.762986308339662,
    "score_1h": 9.732758620689655,
    "score_4h": 7.86344537815126,
    "score_7d": 4.5325443786982245,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "ticketmaster",
    "discover_score": 3.4633291156119212,
    "score_1h": 3.0344827586206895,
    "score_4h": 0.29831932773109243,
    "score_7d": 9.097633136094675,
    "extracted_entities": "Ticketmaster - Biglietti - Eventi - Concerti - Vendita",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "annalisa",
    "discover_score": 3.2644759017051332,
    "score_1h": 7.232758620689655,
    "score_4h": 4.302521008403362,
    "score_7d": 8.479289940828401,
    "extracted_entities": "Annalisa - Cantante - Musica - Italia - Album",
    "saturation_score": 308.0
  },
  {
    "rank": 36,
    "entity": "conclave 2025",
    "discover_score": 2.3447716744557545,
    "score_1h": 2.646551724137931,
    "score_4h": 2.0924369747899156,
    "score_7d": 7.242603550295859,
    "extracted_entities": "Conclave - 2025 - Chiesa Cattolica - Papa - Vaticano",
    "saturation_score": 243.0
  },
  {
    "rank": 49,
    "entity": "maria corleone",
    "discover_score": 2.1059220590703926,
    "score_1h": 1.206896551724138,
    "score_4h": 0.7668067226890756,
    "score_7d": 7.239644970414201,
    "extracted_entities": "Maria Corleone - Personaggio - Fiction - Mafia",
    "saturation_score": 114.0
  },
  {
    "rank": 11,
    "entity": "dove vedere inter barcellona",
    "discover_score": 1.9957868312763334,
    "score_1h": 38.474137931034484,
    "score_4h": 15.716386554621849,
    "score_7d": 1.7071005917159763,
    "extracted_entities": "Inter - Barcellona - Partita - Streaming - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 42,
    "entity": "vogue",
    "discover_score": 1.9944034884476156,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4894957983193277,
    "score_7d": 6.781065088757396,
    "extracted_entities": "Vogue - Moda - Rivista - Tendenze - Stile",
    "saturation_score": 99.0
  },
  {
    "rank": 5,
    "entity": "massimo cacciari",
    "discover_score": 1.5466136602948513,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.3319327731092437,
    "score_7d": 3.5857988165680474,
    "extracted_entities": "Massimo Cacciari - Filosofo - Politica Italiana - Accademico",
    "saturation_score": 33.0
  },
  {
    "rank": 12,
    "entity": "merz",
    "discover_score": 1.4357421519892286,
    "score_1h": 49.25,
    "score_4h": 10.869747899159664,
    "score_7d": 1.4289940828402368,
    "extracted_entities": "Merz - Azienda - Cosmetici - Prodotti per la pelle",
    "saturation_score": 509.0
  },
  {
    "rank": 6,
    "entity": "giulio beranek",
    "discover_score": 1.3769884413790403,
    "score_1h": 0.0,
    "score_4h": 0.6197478991596639,
    "score_7d": 3.260355029585799,
    "extracted_entities": "Giulio Beranek - Attore - Italia - Film - Televisione",
    "saturation_score": 61.0
  },
  {
    "rank": 14,
    "entity": "live nation",
    "discover_score": 1.2996594056088073,
    "score_1h": 2.5086206896551726,
    "score_4h": 0.5987394957983193,
    "score_7d": 3.665680473372781,
    "extracted_entities": "Live Nation - Concerti - Eventi musicali - Biglietti - Intrattenimento",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "milly d'abbraccio cosa fa oggi",
    "discover_score": 1.27953048782783,
    "score_1h": 1.3620689655172413,
    "score_4h": 0.5672268907563025,
    "score_7d": 3.1449704142011834,
    "extracted_entities": "Milly D'Abbraccio - Carriera - Attività attuale",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "giulia vecchio",
    "discover_score": 1.2737064099035442,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3487394957983193,
    "score_7d": 4.556213017751479,
    "extracted_entities": "Giulia Vecchio",
    "saturation_score": 10.0
  },
  {
    "rank": 9,
    "entity": "thunder - nuggets",
    "discover_score": 1.2601989847296409,
    "score_1h": 1.9310344827586206,
    "score_4h": 6.588235294117647,
    "score_7d": 1.7544378698224852,
    "extracted_entities": "Thunder - Nuggets - NBA - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 26,
    "entity": "assegno unico maggio",
    "discover_score": 1.1986220710284543,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6764705882352942,
    "score_7d": 3.760355029585799,
    "extracted_entities": "Assegno Unico - Maggio - Pagamenti - Famiglie - INPS",
    "saturation_score": 39.0
  },
  {
    "rank": 31,
    "entity": "alexander arnold",
    "discover_score": 1.1656592292578178,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.14915966386554622,
    "score_7d": 3.9142011834319526,
    "extracted_entities": "Alexander Arnold - Calciatore - Liverpool FC - Premier League",
    "saturation_score": 112.0
  },
  {
    "rank": 16,
    "entity": "sophie codegoni",
    "discover_score": 0.9606587519473608,
    "score_1h": 2.1206896551724137,
    "score_4h": 0.21428571428571427,
    "score_7d": 2.85207100591716,
    "extracted_entities": "Sophie Codegoni - Personaggio pubblico - Influencer - Reality TV",
    "saturation_score": 105.0
  },
  {
    "rank": 20,
    "entity": "met gala 2025 theme",
    "discover_score": 0.8431679323893365,
    "score_1h": 0.0,
    "score_4h": 0.46638655462184875,
    "score_7d": 2.5207100591715976,
    "extracted_entities": "Met Gala - 2025 - Tema - Moda - Evento",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "girona - mallorca",
    "discover_score": 0.7777280470637266,
    "score_1h": 0.0,
    "score_4h": 0.6092436974789915,
    "score_7d": 2.467455621301775,
    "extracted_entities": "Girona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 27,
    "entity": "crystal palace - nottingham forest",
    "discover_score": 0.7693489034924665,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.5714285714285714,
    "score_7d": 2.3757396449704142,
    "extracted_entities": "Crystal Palace - Nottingham Forest - Partita di calcio - Premier League",
    "saturation_score": 78.0
  },
  {
    "rank": 4,
    "entity": "referendum 8 9 giugno cittadinanza",
    "discover_score": 0.7129012148517181,
    "score_1h": 1.6810344827586208,
    "score_4h": 2.4516806722689077,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Referendum - 8 9 giugno - Cittadinanza",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "bullet train",
    "discover_score": 0.6222624079135972,
    "score_1h": 1.6551724137931034,
    "score_4h": 0.10294117647058823,
    "score_7d": 2.162721893491124,
    "extracted_entities": "Bullet Train - Alta Velocità - Trasporti - Giappone - Tecnologia",
    "saturation_score": 3.0
  },
  {
    "rank": 17,
    "entity": "celtics - knicks",
    "discover_score": 0.5588434052944894,
    "score_1h": 2.4681472822910577,
    "score_4h": 1.0567226890756303,
    "score_7d": 1.3550295857988166,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 8,
    "entity": "tabellone internazionali roma 2025",
    "discover_score": 0.5355006591350434,
    "score_1h": 0.6637931034482758,
    "score_4h": 0.1869747899159664,
    "score_7d": 1.2928994082840235,
    "extracted_entities": "Internazionali di Roma - Tabellone - Tennis - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 33,
    "entity": "vincenzo cramarossa",
    "discover_score": 0.4258197235550553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.334319526627219,
    "extracted_entities": "Vincenzo Cramarossa",
    "saturation_score": 48.0
  },
  {
    "rank": 25,
    "entity": "macfrut 2025",
    "discover_score": 0.38297283238842406,
    "score_1h": 1.2413793103448274,
    "score_4h": 0.1827731092436975,
    "score_7d": 1.0562130177514792,
    "extracted_entities": "Macfrut - 2025 - Fiera - Orticoltura - Rimini",
    "saturation_score": 47.0
  },
  {
    "rank": 18,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.3730960481756056,
    "score_1h": 1.646551724137931,
    "score_4h": 0.930672268907563,
    "score_7d": 0.7544378698224852,
    "extracted_entities": "Incidente - Raccordo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "mia schem",
    "discover_score": 0.3699794853545082,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.3487394957983193,
    "score_7d": 1.0562130177514792,
    "extracted_entities": "Mia Schem - Persona scomparsa - Caso di cronaca",
    "saturation_score": 10.0
  },
  {
    "rank": 37,
    "entity": "conclave elezione papa francesco",
    "discover_score": 0.2963666796244458,
    "score_1h": 0.0,
    "score_4h": 0.5315126050420168,
    "score_7d": 0.6893491124260356,
    "extracted_entities": "Conclave - Elezione - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "tomasz jakubiak",
    "discover_score": 0.2432324719594864,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.15546218487394958,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Tomasz Jakubiak - Chef - Cucina - Programmi TV",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "treni garantiti sciopero trenitalia",
    "discover_score": 0.24291206880909225,
    "score_1h": 0.0,
    "score_4h": 0.4096638655462185,
    "score_7d": 0.33727810650887574,
    "extracted_entities": "Treni - Sciopero - Trenitalia - Servizi garantiti",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "sandro bondi",
    "discover_score": 0.24043204441367558,
    "score_1h": 0.0,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.5414201183431953,
    "extracted_entities": "Sandro Bondi - Politica Italiana - Forza Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 35,
    "entity": "previsioni grandine veneto",
    "discover_score": 0.2301267179643014,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3067226890756303,
    "score_7d": 0.46449704142011833,
    "extracted_entities": "Previsioni - Grandine - Veneto",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "lucas paquetá",
    "discover_score": 0.21728628222533639,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.23949579831932774,
    "score_7d": 0.46153846153846156,
    "extracted_entities": "Lucas Paquetá - Calciatore - Brasile - West Ham United - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "rihanna incinta",
    "discover_score": 0.2153786721042878,
    "score_1h": 0.0,
    "score_4h": 0.48949579831932777,
    "score_7d": 0.2899408284023669,
    "extracted_entities": "Rihanna - Gravidanza - Celebrità",
    "saturation_score": 68.0
  },
  {
    "rank": 39,
    "entity": "walter sabatini",
    "discover_score": 0.2034038496103041,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.4082840236686391,
    "extracted_entities": "Walter Sabatini - Calcio - Direttore Sportivo - Serie A - AS Roma",
    "saturation_score": 2.0
  },
  {
    "rank": 48,
    "entity": "livenation",
    "discover_score": 0.15259032950303164,
    "score_1h": 0.0,
    "score_4h": 0.35714285714285715,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Live Nation - Concerti - Eventi - Biglietti - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "meteo milano",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "vittoria ceretti",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "yemen",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "trani",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "estrazione superenalotto",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "claudio baglioni",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "bad bunny italia",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "thuram",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "ciro ferrara",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "ticketone",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "atm milano",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "paolo vi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "dc vs srh",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "carlo amleto",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "leao",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "meteo 3b",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "maria corleone 2",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "michael schumacher",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "massimo cellino",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "tutto food milano",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "federico arnaboldi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "mauro russo",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "palagano",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "ippodromo milano",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "papa paolo vi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "meteo bologna",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "serena barone attrice",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "sabrina carpenter",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "multan sultans vs peshawar zalmi",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "balotelli",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "marcus thuram",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "meteo torino oggi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "sandra milo",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "metro milano",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "simone susinna",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "vieira",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "sofia",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "fcsb - dinamo bucurești",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "milan news",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "damson idris",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "charlène wittstock",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "cristina chirichella",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "gigi hadid",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "eurovision 2025",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "ascolti tv the couple",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "groenlandia",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "meteo firenze",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "crystal palace vs nottm forest",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "diana ross",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "brad pitt",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "bulgaria",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "iva zanicchi",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "casini",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "romania george simion",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "giorgio mastrota",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "spalletti",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "don matteo",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "sandra bullock",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "ralph fiennes",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "seychelles",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "l'eredità",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "youssouf fofana",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "estonia",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "massimo d'alema",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "rita pavone",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "bayesian",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "البنك الاهلي ضد الزمالك",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "restaurant",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "gears of war reloaded",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "giulia cecchettin",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "girona maiorca",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "cardinale filoni",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "miriana trevisan",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "vigilance précipitations",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "nicolas maupas",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "morten frendrup",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "milan bologna",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "walter zenga",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "colman domingo",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "isabella rossellini",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "bad bunny tour",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "afd",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "fbi most wanted",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "lupus malattia",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "matteo bassetti",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "lacerenza",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "rossella erra",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "genoa cricket and football club",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "oroscopo sagittario",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "sfl inps pagamenti",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "sinagra",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "jochen mass pilota",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "franco oppini",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "stefania orlando",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "renato zero",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "joe manganiello",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "francesco acquaroli",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "corrado formigli",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "manuel agnelli",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "film conclave",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "vasami, jacopo",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "dan sucu",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "amerigo vespucci palermo",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "elisabetta canalis",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "petra",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "sorano",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "casteddu online",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "isabela merced",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "giovanardi",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "anne hathaway",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "calendario milan",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "gianmarco uomini e donne",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "jorginho",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "elezioni comunali trentino ballottaggio",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "ada alberti",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "adam sandler",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "bottega veneta",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "lignano sabbiadoro",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "michael kors",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "adinolfi",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "bisegna",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "legnago",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "fermo",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "mottola",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "the four seasons serie",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "diffidati serie a",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "kim basinger",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "monk",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "colombia",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "andrea cambiaso",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "trial",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "zendaya",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "cairo toro",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "x",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "alberico evani",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "raf",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "casa a prima vista",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "milannews",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "raffaele palladino",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "friburgo",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "zhao xintong",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "cameron norrie",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "lewandowski barcellona",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "chi sceglie gianmarco di uomini e donne",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "viera",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "the couple chiude",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "carcere di alcatraz",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "radio italia live",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-06 09:19:29",
  "trends_count": 207,
  "top_score": 14.181964963652309,
  "runtime_minutes": 5.4183688720067344,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi, le onde del web portano un tripudio di meteorologia e musica nel regno dei trend italiani. Il meteo si erge come re indiscusso, con termini quali '3b meteo', 'meteo Roma', e 'allerta precipitazioni' che scolpiscono il cielo digitale, mentre l'arrivo di Rihanna incornicia l'armonia sonora tra gli astri. La musica si intreccia con la presenza di icone come Bad Bunny e Annalisa, risuonando dolcemente nella mente collettiva.\n\nNell'orizzonte di Google Discover, il meteo si rivela un fertile terreno per gli esploratori di contenuti. Con un DScore di 14.2 e una saturazione minima, '3b meteo' (#1) rappresenta un'opportunità preziosa per attirare i cuori assetati di previsioni. Parallelamente, la crescente ondata d'interesse su 'INVSALI' (#9) con DScore 6.6 e bassa saturazione offre un raggio di sole per chi documenta il futuro dell'educazione.\n\nTuttavia, l'avviso risuona per contenuti legati a temi saturi come 'gaza' (#11), la cui sovraesposizione richiede cautela per non perdersi nell'oceano di informazioni. Stai pronto a navigare con saggezza e flessibilità, cogliendo le correnti giuste che innalzano la tua voce sopra le onde tumultuose dei trend."
};
