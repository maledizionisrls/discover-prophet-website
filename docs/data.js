const trendData = [
  {
    "rank": 30,
    "entity": "3b meteo",
    "discover_score": 14.542453916727256,
    "score_1h": 77.71624780829924,
    "score_4h": 43.615546218487395,
    "score_7d": 24.718934911242606,
    "extracted_entities": "3b meteo - Previsioni - Meteo",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "meteo roma",
    "discover_score": 11.697515680023537,
    "score_1h": 49.06136762127411,
    "score_4h": 37.97268907563025,
    "score_7d": 21.77810650887574,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 117.0
  },
  {
    "rank": 38,
    "entity": "invalsi",
    "discover_score": 10.496391696110885,
    "score_1h": 58.00569842197545,
    "score_4h": 36.616284589149465,
    "score_7d": 19.28402366863905,
    "extracted_entities": "INVALSI - Test standardizzati - Scuola italiana - Valutazione educativa - Istituto Nazionale per la Valutazione del Sistema Educativo di Istruzione e di Formazione",
    "saturation_score": 53.0
  },
  {
    "rank": 19,
    "entity": "gaza",
    "discover_score": 10.295868268306,
    "score_1h": 7.086206896551724,
    "score_4h": 4.449579831932773,
    "score_7d": 23.40828402366864,
    "extracted_entities": "Gaza - Conflitto - Medio Oriente - Striscia di Gaza - Palestina",
    "saturation_score": 2340.0
  },
  {
    "rank": 34,
    "entity": "sirmione",
    "discover_score": 9.384996281809144,
    "score_1h": 6.405172413793103,
    "score_4h": 3.906358777820752,
    "score_7d": 24.597633136094675,
    "extracted_entities": "Sirmione - Lago di Garda - Turismo - Castello Scaligero - Terme",
    "saturation_score": 82.0
  },
  {
    "rank": 45,
    "entity": "meteo milano",
    "discover_score": 9.005030715812781,
    "score_1h": 66.18103448275862,
    "score_4h": 24.699122745332442,
    "score_7d": 19.597633136094675,
    "extracted_entities": "Meteo - Milano",
    "saturation_score": 70.0
  },
  {
    "rank": 4,
    "entity": "rihanna",
    "discover_score": 8.524188940070657,
    "score_1h": 26.127264757451783,
    "score_4h": 26.153361344537814,
    "score_7d": 8.644970414201183,
    "extracted_entities": "Rihanna - Cantante - Musica - Fenty Beauty - Moda",
    "saturation_score": 177.0
  },
  {
    "rank": 1,
    "entity": "genoa - milan",
    "discover_score": 8.120940740730866,
    "score_1h": 59.79982466393922,
    "score_4h": 33.44117647058823,
    "score_7d": 3.2189349112426036,
    "extracted_entities": "Genoa - Milan - Calcio - Serie A - Partita",
    "saturation_score": 1300.0
  },
  {
    "rank": 24,
    "entity": "allerta precipitazioni",
    "discover_score": 8.086458628198901,
    "score_1h": 42.95032144944477,
    "score_4h": 36.136554621848745,
    "score_7d": 12.085798816568047,
    "extracted_entities": "Allerta - Precipitazioni - Meteo - Avvisi meteo",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "meteo torino",
    "discover_score": 7.829943460323804,
    "score_1h": 38.63793103448276,
    "score_4h": 34.509959213811044,
    "score_7d": 14.076923076923077,
    "extracted_entities": "Meteo - Torino - Previsioni",
    "saturation_score": 57.0
  },
  {
    "rank": 14,
    "entity": "jeep compass",
    "discover_score": 6.050052158323024,
    "score_1h": 14.305961426066627,
    "score_4h": 3.99163179916318,
    "score_7d": 13.869822485207102,
    "extracted_entities": "Jeep - Compass - SUV - Automobili",
    "saturation_score": 354.0
  },
  {
    "rank": 42,
    "entity": "crime",
    "discover_score": 5.761061506294745,
    "score_1h": 7.5344827586206895,
    "score_4h": 3.130252100840336,
    "score_7d": 16.83431952662722,
    "extracted_entities": "Crimine - Sicurezza pubblica - Statistiche criminali - Prevenzione del crimine - Giustizia penale",
    "saturation_score": 216.0
  },
  {
    "rank": 35,
    "entity": "bad bunny",
    "discover_score": 5.053969087016381,
    "score_1h": 48.52586206896552,
    "score_4h": 23.460084033613448,
    "score_7d": 9.183431952662723,
    "extracted_entities": "Bad Bunny - Musica - Artista - Reggaeton - Concerti",
    "saturation_score": 204.0
  },
  {
    "rank": 2,
    "entity": "tema met gala 2025",
    "discover_score": 3.2705243779134934,
    "score_1h": 40.099941554646406,
    "score_4h": 12.176470588235293,
    "score_7d": 2.9497041420118344,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "assegno unico maggio",
    "discover_score": 2.6870561435563425,
    "score_1h": 1.5344827586206895,
    "score_4h": 0.38235294117647056,
    "score_7d": 8.31360946745562,
    "extracted_entities": "Assegno Unico - Maggio - Pagamenti - Famiglie - INPS",
    "saturation_score": 38.0
  },
  {
    "rank": 3,
    "entity": "massimo cacciari",
    "discover_score": 2.5616426782183574,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5892022080798847,
    "score_7d": 4.976331360946745,
    "extracted_entities": "Massimo Cacciari - Filosofo - Politica Italiana - Accademico",
    "saturation_score": 29.0
  },
  {
    "rank": 11,
    "entity": "ticketmaster",
    "discover_score": 2.5248354154096937,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.09663865546218488,
    "score_7d": 6.71301775147929,
    "extracted_entities": "Ticketmaster - Vendita biglietti - Eventi - Concerti - Spettacoli",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "vogue",
    "discover_score": 2.421815204669409,
    "score_1h": 4.068088836937463,
    "score_4h": 0.5714285714285714,
    "score_7d": 7.180473372781066,
    "extracted_entities": "Vogue - Moda - Rivista - Tendenze - Stile",
    "saturation_score": 96.0
  },
  {
    "rank": 44,
    "entity": "sabrina carpenter",
    "discover_score": 2.17481002055105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 7.547337278106509,
    "extracted_entities": "Sabrina Carpenter - Cantante - Attrice - Musica - Film",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "maria corleone",
    "discover_score": 2.053140939058484,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5378151260504201,
    "score_7d": 7.059171597633137,
    "extracted_entities": "Maria Corleone - Personaggio - Fiction - Mafia",
    "saturation_score": 69.0
  },
  {
    "rank": 10,
    "entity": "treni garantiti sciopero trenitalia",
    "discover_score": 2.0475794236584033,
    "score_1h": 0.4745762711864407,
    "score_4h": 0.24929678984564535,
    "score_7d": 5.4171597633136095,
    "extracted_entities": "Treni - Sciopero - Trenitalia - Servizi garantiti",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "referendum 8 9 giugno cittadinanza",
    "discover_score": 1.9950244920383344,
    "score_1h": 1.603448275862069,
    "score_4h": 1.6743697478991595,
    "score_7d": 4.201183431952662,
    "extracted_entities": "Referendum - 8 9 giugno - Cittadinanza",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "milly d'abbraccio cosa fa oggi",
    "discover_score": 1.6866154773589042,
    "score_1h": 1.0027761542957334,
    "score_4h": 1.2830596673815968,
    "score_7d": 4.15680473372781,
    "extracted_entities": "Milly D'Abbraccio - Carriera - Attività attuale",
    "saturation_score": 2.0
  },
  {
    "rank": 7,
    "entity": "tabellone internazionali roma 2025",
    "discover_score": 1.596478504044345,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.25840336134453784,
    "score_7d": 3.994082840236686,
    "extracted_entities": "Internazionali di Roma - Tabellone - Tennis - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "dove vedere inter barcellona",
    "discover_score": 1.2188133346551344,
    "score_1h": 15.025862068965518,
    "score_4h": 3.577731092436975,
    "score_7d": 2.6893491124260356,
    "extracted_entities": "Inter - Barcellona - Partita - Streaming - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 36,
    "entity": "girona - mallorca",
    "discover_score": 1.2148277128912621,
    "score_1h": 1.8620689655172413,
    "score_4h": 1.0336134453781514,
    "score_7d": 3.9319526627218937,
    "extracted_entities": "Girona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 8,
    "entity": "thunder - nuggets",
    "discover_score": 1.132242270220513,
    "score_1h": 1.6637931034482758,
    "score_4h": 8.907510284448508,
    "score_7d": 0.893491124260355,
    "extracted_entities": "NBA - Denver Nuggets - Oklahoma City Thunder - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "giulio beranek",
    "discover_score": 1.1053585345470136,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.2605042016806723,
    "score_7d": 2.698224852071006,
    "extracted_entities": "Giulio Beranek - Attore - Scrittore",
    "saturation_score": 112.0
  },
  {
    "rank": 50,
    "entity": "giulia vecchio",
    "discover_score": 1.0531791980490781,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4621848739495798,
    "score_7d": 3.730769230769231,
    "extracted_entities": "Giulia Vecchio",
    "saturation_score": 35.0
  },
  {
    "rank": 13,
    "entity": "celtics - knicks",
    "discover_score": 1.0352642410080608,
    "score_1h": 0.6724137931034483,
    "score_4h": 4.1533613445378155,
    "score_7d": 1.9319526627218935,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "live nation",
    "discover_score": 0.775603269176218,
    "score_1h": 1.0254237288135593,
    "score_4h": 1.5593069863928835,
    "score_7d": 1.7928994082840237,
    "extracted_entities": "Live Nation - Concerti - Eventi - Musica - Biglietti",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "claudio baglioni",
    "discover_score": 0.7280546734558202,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.22058823529411764,
    "score_7d": 2.3431952662721893,
    "extracted_entities": "Claudio Baglioni - Cantante - Musica Italiana",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "vincenzo cramarossa",
    "discover_score": 0.6164081365470622,
    "score_1h": 0.0,
    "score_4h": 0.3088235294117647,
    "score_7d": 2.0414201183431953,
    "extracted_entities": "Vincenzo Cramarossa",
    "saturation_score": 42.0
  },
  {
    "rank": 41,
    "entity": "previsioni grandine veneto",
    "discover_score": 0.5476674705900435,
    "score_1h": 0.0,
    "score_4h": 0.12800182834640134,
    "score_7d": 1.834319526627219,
    "extracted_entities": "Previsioni - Grandine - Veneto",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "bullet train",
    "discover_score": 0.5394852278423722,
    "score_1h": 0.847457627118644,
    "score_4h": 0.670862487254316,
    "score_7d": 1.698224852071006,
    "extracted_entities": "Treno ad alta velocità - Trasporti - Giappone - Tecnologia",
    "saturation_score": 3.0
  },
  {
    "rank": 20,
    "entity": "met gala 2025 theme",
    "discover_score": 0.5296438574152226,
    "score_1h": 1.5508474576271187,
    "score_4h": 0.7794117647058824,
    "score_7d": 1.3757396449704142,
    "extracted_entities": "Met Gala - 2025 - Theme - Moda - Evento",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "crystal palace - nottingham forest",
    "discover_score": 0.4671091988329579,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.22478991596638653,
    "score_7d": 1.3994082840236688,
    "extracted_entities": "Crystal Palace - Nottingham Forest - Partita di calcio - Premier League",
    "saturation_score": 33.0
  },
  {
    "rank": 17,
    "entity": "rihanna incinta",
    "discover_score": 0.44629865584700684,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.43561232024190427,
    "score_7d": 1.1331360946745563,
    "extracted_entities": "Rihanna - Gravidanza - Celebrità",
    "saturation_score": 53.0
  },
  {
    "rank": 16,
    "entity": "sophie codegoni",
    "discover_score": 0.39458236061812746,
    "score_1h": 6.543103448275862,
    "score_4h": 0.9638813684469604,
    "score_7d": 0.7988165680473372,
    "extracted_entities": "Sophie Codegoni - Personaggio pubblico - Influencer - Reality TV",
    "saturation_score": 76.0
  },
  {
    "rank": 37,
    "entity": "alexander arnold",
    "discover_score": 0.3721897630611169,
    "score_1h": 0.3050847457627119,
    "score_4h": 0.11974789915966387,
    "score_7d": 1.1124260355029585,
    "extracted_entities": "Alexander Arnold - Calciatore - Liverpool FC - Premier League",
    "saturation_score": 71.0
  },
  {
    "rank": 23,
    "entity": "walter sabatini",
    "discover_score": 0.30260859801499224,
    "score_1h": 0.0,
    "score_4h": 0.02100840336134454,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Walter Sabatini - Calcio - Direttore Sportivo",
    "saturation_score": 2.0
  },
  {
    "rank": 22,
    "entity": "livenation",
    "discover_score": 0.279913334097763,
    "score_1h": 0.3620689655172414,
    "score_4h": 0.22869273232305476,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "Live Nation - Concerti - Eventi - Biglietti - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "atm milano",
    "discover_score": 0.25038368315076553,
    "score_1h": 1.1016949152542372,
    "score_4h": 0.4852941176470588,
    "score_7d": 0.5414201183431953,
    "extracted_entities": "ATM - Milano - Trasporti pubblici",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.24511591643069902,
    "score_1h": 1.836206896551724,
    "score_4h": 0.37184873949579833,
    "score_7d": 0.4260355029585799,
    "extracted_entities": "Incidente - Raccordo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "mia schem",
    "discover_score": 0.2324320477986939,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.45857988165680474,
    "extracted_entities": "Mia Schem - Persona scomparsa - Notizie - Ricerca",
    "saturation_score": 9.0
  },
  {
    "rank": 26,
    "entity": "sandro bondi",
    "discover_score": 0.19564543633286036,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2807566541260856,
    "score_7d": 0.2958579881656805,
    "extracted_entities": "Sandro Bondi - Politica Italiana - Forza Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 32,
    "entity": "ciro ferrara",
    "discover_score": 0.17841666448771737,
    "score_1h": 0.0,
    "score_4h": 0.7394957983193277,
    "score_7d": 0.13609467455621302,
    "extracted_entities": "Ciro Ferrara - Calcio - Allenatore - Napoli - Juventus",
    "saturation_score": 2.0
  },
  {
    "rank": 31,
    "entity": "conclave elezione papa francesco",
    "discover_score": 0.1670609806260579,
    "score_1h": 0.0,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.121301775147929,
    "extracted_entities": "Conclave - Elezione - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.1574973034790867,
    "score_1h": 0.0,
    "score_4h": 0.5651260504201681,
    "score_7d": 0.09467455621301775,
    "extracted_entities": "Federico Chiesa - Liverpool - Calciomercato",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "macfrut 2025",
    "discover_score": 0.13371636146467616,
    "score_1h": 0.6440677966101694,
    "score_4h": 0.5903361344537815,
    "score_7d": 0.020710059171597635,
    "extracted_entities": "Macfrut - 2025 - Fiera - Orticoltura - Rimini",
    "saturation_score": 113.0
  },
  {
    "rank": 51,
    "entity": "lucas paquetá",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "tutto food milano",
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
    "entity": "estrazione superenalotto",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "thuram",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "bad bunny italia",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "meteo 3b",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "leao",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "ticketone",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "palagano",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "carlo amleto",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "dc vs srh",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "massimo cellino",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "michael schumacher",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "annalisa",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "metro milano",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "federico arnaboldi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "damson idris",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "meteo torino oggi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "mauro russo",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "meteo bologna",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "charlène wittstock",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "ippodromo milano",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "papa paolo vi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "serena barone attrice",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "balotelli",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "marcus thuram",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "multan sultans vs peshawar zalmi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "sandra milo",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "meteo firenze",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "sofia",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "simone susinna",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "fcsb - dinamo bucurești",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "milan news",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "gigi hadid",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "cristina chirichella",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "eurovision 2025",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "seychelles",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "groenlandia",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "diana ross",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "ascolti tv the couple",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "brad pitt",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "bulgaria",
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
    "entity": "anticipazioni tradimento",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "casini",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "giorgio mastrota",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "spalletti",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "romania george simion",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "vittoria ceretti",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "oroscopo ariete 6 maggio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "don matteo",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "vigilance précipitations",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "sandra bullock",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "ralph fiennes",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "estonia",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "youssouf fofana",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "massimo d'alema",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "l'eredità",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "restaurant",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "bayesian",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "rita pavone",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "البنك الاهلي ضد الزمالك",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "gears of war reloaded",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "walter zenga",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "giulia cecchettin",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "girona maiorca",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "cardinale filoni",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "nicolas maupas",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "morten frendrup",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "miriana trevisan",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "milan bologna",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "colman domingo",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "isabella rossellini",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "bad bunny tour",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "afd",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "fbi most wanted",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "lacerenza",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lupus malattia",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "joao felix",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "matteo bassetti",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "genoa cricket and football club",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "rossella erra",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "sfl inps pagamenti",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "sinagra",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "oroscopo sagittario",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "jochen mass pilota",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "franco oppini",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "stefania orlando",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "renato zero",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "joe manganiello",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "corrado formigli",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "francesco acquaroli",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "casteddu online",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "manuel agnelli",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "film conclave",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "vasami, jacopo",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "elisabetta canalis",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "dan sucu",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "cosa c'è stasera in tv",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "sorano",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "amerigo vespucci palermo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "petra",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "isabela merced",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "giovanardi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "anne hathaway",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "calendario milan",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "jorginho",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "michael kors",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "intelligenza artificiale",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "gianmarco uomini e donne",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "elezioni comunali trentino ballottaggio",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "adam sandler",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "ada alberti",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "lignano sabbiadoro",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "bottega veneta",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "bisegna",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "adinolfi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "legnago",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "mottola",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "fermo",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "the four seasons serie",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "diffidati serie a",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "andrea cambiaso",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "colombia",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "monk",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "kim basinger",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "trial",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "zendaya",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "x",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "cairo toro",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "alberico evani",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "raf",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "casa a prima vista",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "milannews",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "raffaele palladino",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "zhao xintong",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "friburgo",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "cameron norrie",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "lewandowski barcellona",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "chi sceglie gianmarco di uomini e donne",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "kerry kennedy",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "the couple chiude",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "carcere di alcatraz",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "radio italia live",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-06 08:16:40",
  "trends_count": 201,
  "top_score": 14.542453916727256,
  "runtime_minutes": 3.839596466223399,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le nebbie del presente rivelano che meteo, cultura e intrattenimento musicale dominano le correnti di tendenza attuali. L'aumento della ricerca su \"3b meteo\", \"meteo Roma\" e \"meteo Milano\" sottolinea un'attenzione crescente al clima, mentre eventi culturali come il \"Met Gala 2025\" e la musica di icone come Rihanna e Bad Bunny risplendono come stelle nel cielo digitale.\n\nMeteo e intrattenimento si presentano come fertili terreni per Google Discover. \"3b meteo\" (#1), con un DScore forte e saturazione modesta, incarna il cambiamento atmosferico, una certezza per chi cerca visibilità continua. Allo stesso modo, \"Bad Bunny\" (#13) mantiene un interesse costante, ideale per chi desidera cavalcare l'onda musicale in ascesa.\n\nL'oscurità avvolge i conflitti, richiedendo cautela intorno a \"Gaza\" (#4), la cui saturazione travolgente suggerisce competizione accesa e opportunità effimere. Attenti anche al ruggito del calcio con \"Genoa - Milan\" (#8); i numeri indicano un fuoco di paglia.\n\nMentre navigano attraverso i venti delle tendenze, i creatori di contenuti dovrebbero cercare l'equilibrio tra tempestività e profondità per sostenere l'interesse del loro pubblico. Che saggezza e intelligenza guidino il loro passo!"
};
