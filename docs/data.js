const trendData = [
  {
    "rank": 28,
    "entity": "3b meteo",
    "discover_score": 16.33466076133463,
    "score_1h": 68.37068965517241,
    "score_4h": 51.799321402201045,
    "score_7d": 25.740948154409693,
    "extracted_entities": "3b meteo - Previsioni meteo - Meteo Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 41,
    "entity": "referendum",
    "discover_score": 15.365056733604158,
    "score_1h": 59.87931034482759,
    "score_4h": 20.48109243697479,
    "score_7d": 34.49112426035503,
    "extracted_entities": "Referendum - Votazione - Democrazia - Elettori - Politica",
    "saturation_score": 1550.0
  },
  {
    "rank": 17,
    "entity": "gaza",
    "discover_score": 10.40804102251844,
    "score_1h": 8.362068965517242,
    "score_4h": 1.5462184873949578,
    "score_7d": 23.792899408284022,
    "extracted_entities": "Gaza - Conflitto - Medio Oriente - Striscia di Gaza - Palestina",
    "saturation_score": 2390.0
  },
  {
    "rank": 1,
    "entity": "genoa - milan",
    "discover_score": 10.157962953350989,
    "score_1h": 50.62931034482759,
    "score_4h": 44.65005625681235,
    "score_7d": 3.230769230769231,
    "extracted_entities": "Genoa - Milan - Serie A - Calcio - Partita",
    "saturation_score": 1320.0
  },
  {
    "rank": 40,
    "entity": "meteo roma",
    "discover_score": 10.081361481619103,
    "score_1h": 46.060344827586206,
    "score_4h": 28.025359516191415,
    "score_7d": 20.736686390532544,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 81.0
  },
  {
    "rank": 25,
    "entity": "invalsi",
    "discover_score": 9.681352728921933,
    "score_1h": 65.61104617182934,
    "score_4h": 19.602941176470587,
    "score_7d": 19.66568047337278,
    "extracted_entities": "INVALSI - Test standardizzati - Scuola italiana - Valutazione educativa - Ministero dell'Istruzione",
    "saturation_score": 46.0
  },
  {
    "rank": 50,
    "entity": "meteo milano",
    "discover_score": 7.442609345626247,
    "score_1h": 66.32758620689654,
    "score_4h": 32.64285714285714,
    "score_7d": 14.127218934911243,
    "extracted_entities": "Meteo - Milano",
    "saturation_score": 70.0
  },
  {
    "rank": 44,
    "entity": "metro milano",
    "discover_score": 7.062879866699824,
    "score_1h": 4.491379310344828,
    "score_4h": 1.2752100840336134,
    "score_7d": 20.863905325443785,
    "extracted_entities": "Metro - Milano - Trasporti pubblici",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "jeep compass",
    "discover_score": 6.9967007678729844,
    "score_1h": 13.120689655172415,
    "score_4h": 1.9243697478991597,
    "score_7d": 18.10355029585799,
    "extracted_entities": "Jeep - Compass - Auto - SUV",
    "saturation_score": 359.0
  },
  {
    "rank": 21,
    "entity": "conclave 2025",
    "discover_score": 6.9131016554426115,
    "score_1h": 3.336206896551724,
    "score_4h": 1.2016806722689075,
    "score_7d": 17.781065088757394,
    "extracted_entities": "Conclave - 2025 - Chiesa Cattolica - Papa - Vaticano",
    "saturation_score": 167.0
  },
  {
    "rank": 29,
    "entity": "allerta precipitazioni",
    "discover_score": 5.060934967192973,
    "score_1h": 52.495178258328465,
    "score_4h": 26.588235294117645,
    "score_7d": 7.994082840236686,
    "extracted_entities": "Allerta - Precipitazioni - Meteo - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "ticketmaster",
    "discover_score": 4.22398090641306,
    "score_1h": 1.0013150204558738,
    "score_4h": 0.031512605042016806,
    "score_7d": 11.029585798816568,
    "extracted_entities": "Ticketmaster - Vendita biglietti - Eventi - Concerti - Spettacoli",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "bad bunny",
    "discover_score": 3.7379911067219527,
    "score_1h": 30.72340736411455,
    "score_4h": 7.438706444921064,
    "score_7d": 8.860946745562131,
    "extracted_entities": "Bad Bunny - Musica - Artista - Reggaeton - Trap Latino",
    "saturation_score": 120.0
  },
  {
    "rank": 33,
    "entity": "crime",
    "discover_score": 3.480696765782613,
    "score_1h": 5.982758620689656,
    "score_4h": 3.550420168067227,
    "score_7d": 9.99112426035503,
    "extracted_entities": "Crimine - Sicurezza - Legge - Giustizia - Polizia",
    "saturation_score": 76.0
  },
  {
    "rank": 10,
    "entity": "assegno unico maggio",
    "discover_score": 3.394622942804085,
    "score_1h": 2.939655172413793,
    "score_4h": 0.4789915966386554,
    "score_7d": 8.42603550295858,
    "extracted_entities": "Assegno Unico - Maggio - Pagamenti - Famiglie - INPS",
    "saturation_score": 28.0
  },
  {
    "rank": 6,
    "entity": "rihanna",
    "discover_score": 3.3021605895118022,
    "score_1h": 35.36206896551724,
    "score_4h": 6.789915966386555,
    "score_7d": 5.772189349112426,
    "extracted_entities": "Rihanna - Cantante - Musica - Fenty Beauty - Barbados",
    "saturation_score": 63.0
  },
  {
    "rank": 2,
    "entity": "tema met gala 2025",
    "discover_score": 2.6534350241608626,
    "score_1h": 45.56896551724138,
    "score_4h": 15.510504201680671,
    "score_7d": 1.502958579881657,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "atm milano",
    "discover_score": 2.442497371998076,
    "score_1h": 3.0689655172413794,
    "score_4h": 0.5966386554621849,
    "score_7d": 8.023668639053255,
    "extracted_entities": "ATM - Milano - Trasporti pubblici",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "giulio beranek",
    "discover_score": 2.4325235816690696,
    "score_1h": 3.0258620689655173,
    "score_4h": 0.4180672268907563,
    "score_7d": 4.795857988165681,
    "extracted_entities": "Giulio Beranek - Attore - Italia",
    "saturation_score": 147.0
  },
  {
    "rank": 8,
    "entity": "tabellone internazionali roma 2025",
    "discover_score": 2.323767501198927,
    "score_1h": 1.1502045587375802,
    "score_4h": 0.2689075630252101,
    "score_7d": 5.798816568047338,
    "extracted_entities": "Tabellone - Internazionali di Roma - 2025 - Tennis - Torneo",
    "saturation_score": 2.0
  },
  {
    "rank": 5,
    "entity": "referendum 8 9 giugno cittadinanza",
    "discover_score": 2.107043370139407,
    "score_1h": 5.672413793103448,
    "score_4h": 1.1029411764705883,
    "score_7d": 4.579881656804734,
    "extracted_entities": "Referendum - 8 9 giugno - Cittadinanza",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "celtics - knicks",
    "discover_score": 1.597018401599013,
    "score_1h": 0.7372881355932204,
    "score_4h": 3.060924369747899,
    "score_7d": 3.7071005917159763,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "treni garantiti sciopero trenitalia",
    "discover_score": 1.446691095780898,
    "score_1h": 2.663793103448276,
    "score_4h": 0.07563025210084033,
    "score_7d": 4.0325443786982245,
    "extracted_entities": "Treni - Sciopero - Trenitalia - Servizi garantiti",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "dove vedere inter barcellona",
    "discover_score": 1.2247713666721496,
    "score_1h": 23.483196960841614,
    "score_4h": 3.7332196476917128,
    "score_7d": 2.7071005917159763,
    "extracted_entities": "Inter - Barcellona - Partita - Streaming - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 27,
    "entity": "lucas paquetá",
    "discover_score": 1.20674350344655,
    "score_1h": 0.0,
    "score_4h": 0.3382352941176471,
    "score_7d": 3.905325443786982,
    "extracted_entities": "Lucas Paquetá - Calciatore - Brasile - West Ham United - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 7,
    "entity": "thunder - nuggets",
    "discover_score": 1.1815354392621458,
    "score_1h": 16.137931034482758,
    "score_4h": 5.953781512605042,
    "score_7d": 1.5650887573964498,
    "extracted_entities": "Thunder - Nuggets - NBA - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "annalisa",
    "discover_score": 0.7079427280966923,
    "score_1h": 0.3275862068965517,
    "score_4h": 1.1701680672268906,
    "score_7d": 2.118343195266272,
    "extracted_entities": "Annalisa - Cantante - Musica Italiana",
    "saturation_score": 282.0
  },
  {
    "rank": 4,
    "entity": "massimo cacciari",
    "discover_score": 0.6872814709257709,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.0,
    "score_7d": 1.5384615384615383,
    "extracted_entities": "Massimo Cacciari - Filosofo - Politica Italiana - Accademico",
    "saturation_score": 72.0
  },
  {
    "rank": 15,
    "entity": "live nation",
    "discover_score": 0.6814296564548092,
    "score_1h": 2.1293103448275863,
    "score_4h": 0.42694525508948344,
    "score_7d": 1.8875739644970413,
    "extracted_entities": "Live Nation - Concerti - Eventi - Musica - Biglietti",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "sophie codegoni",
    "discover_score": 0.6081882771024606,
    "score_1h": 0.2711864406779661,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Sophie Codegoni - Personaggio pubblico - Influencer - Reality TV",
    "saturation_score": 56.0
  },
  {
    "rank": 35,
    "entity": "vogue",
    "discover_score": 0.5975284175726799,
    "score_1h": 2.2413793103448274,
    "score_4h": 0.6659663865546219,
    "score_7d": 1.8254437869822484,
    "extracted_entities": "Vogue - Moda - Rivista - Tendenze - Fashion Week",
    "saturation_score": 10.0
  },
  {
    "rank": 9,
    "entity": "milly d'abbraccio cosa fa oggi",
    "discover_score": 0.5725958610500276,
    "score_1h": 1.8017241379310345,
    "score_4h": 0.41596638655462187,
    "score_7d": 1.3786982248520712,
    "extracted_entities": "Milly D'Abbraccio - Carriera - Attività attuale",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.5456975255362412,
    "score_1h": 1.146551724137931,
    "score_4h": 0.04602510460251046,
    "score_7d": 1.834319526627219,
    "extracted_entities": "Martedì - 6 maggio - Giorno della settimana",
    "saturation_score": 1.0
  },
  {
    "rank": 26,
    "entity": "met gala 2025 theme",
    "discover_score": 0.5352900229701918,
    "score_1h": 0.0,
    "score_4h": 0.4579831932773109,
    "score_7d": 1.559171597633136,
    "extracted_entities": "Met Gala - 2025 - Theme - Moda - Evento",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "livenation",
    "discover_score": 0.47466262815269433,
    "score_1h": 0.0,
    "score_4h": 0.052433107134067014,
    "score_7d": 1.5177514792899407,
    "extracted_entities": "Live Nation - Concerti - Eventi - Biglietti - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "claudio baglioni",
    "discover_score": 0.4696145593349824,
    "score_1h": 0.0,
    "score_4h": 0.06512605042016807,
    "score_7d": 1.5562130177514792,
    "extracted_entities": "Claudio Baglioni - Cantante - Musica Italiana",
    "saturation_score": 8.0
  },
  {
    "rank": 13,
    "entity": "crystal palace - nottingham forest",
    "discover_score": 0.4451352972776958,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.10504201680672269,
    "score_7d": 1.1538461538461537,
    "extracted_entities": "Crystal Palace - Nottingham Forest - Partita di calcio - Premier League",
    "saturation_score": 31.0
  },
  {
    "rank": 48,
    "entity": "vincenzo cramarossa",
    "discover_score": 0.4322110867807529,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.24369747899159663,
    "score_7d": 1.3816568047337277,
    "extracted_entities": "Vincenzo Cramarossa",
    "saturation_score": 46.0
  },
  {
    "rank": 31,
    "entity": "yemen",
    "discover_score": 0.3637597951007076,
    "score_1h": 0.0,
    "score_4h": 0.5042016806722689,
    "score_7d": 0.9378698224852071,
    "extracted_entities": "Yemen - Guerra civile - Crisi umanitaria - Medio Oriente - Conflitto armato",
    "saturation_score": 268.0
  },
  {
    "rank": 24,
    "entity": "rihanna incinta",
    "discover_score": 0.34127394078664125,
    "score_1h": 2.413793103448276,
    "score_4h": 0.1638655462184874,
    "score_7d": 0.893491124260355,
    "extracted_entities": "Rihanna - Gravidanza - Celebrità",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "girona - mallorca",
    "discover_score": 0.32675124493061797,
    "score_1h": 0.23728813559322035,
    "score_4h": 0.3319327731092437,
    "score_7d": 0.7514792899408285,
    "extracted_entities": "Girona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 45,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.30877739550910444,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.07983193277310924,
    "score_7d": 0.8964497041420119,
    "extracted_entities": "Federico Chiesa - Liverpool - Calciomercato",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "meteo torino oggi",
    "discover_score": 0.3045390711541328,
    "score_1h": 1.7095265926358854,
    "score_4h": 0.10504201680672269,
    "score_7d": 0.8786982248520709,
    "extracted_entities": "Meteo - Torino - Oggi",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "massimo cellino",
    "discover_score": 0.2998516429016055,
    "score_1h": 0.0,
    "score_4h": 0.34243697478991597,
    "score_7d": 0.7899408284023668,
    "extracted_entities": "Massimo Cellino - Calcio - Brescia Calcio - Presidente - Serie B",
    "saturation_score": 3.0
  },
  {
    "rank": 42,
    "entity": "walter sabatini",
    "discover_score": 0.2820694724392312,
    "score_1h": 0.2413793103448276,
    "score_4h": 0.1953781512605042,
    "score_7d": 0.7396449704142012,
    "extracted_entities": "Walter Sabatini - Calcio - Direttore Sportivo - Serie A - AS Roma",
    "saturation_score": 2.0
  },
  {
    "rank": 49,
    "entity": "previsioni grandine veneto",
    "discover_score": 0.2646597013422534,
    "score_1h": 1.9224137931034482,
    "score_4h": 0.025210084033613446,
    "score_7d": 0.7339391377852916,
    "extracted_entities": "Previsioni - Grandine - Veneto",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "giulia vecchio",
    "discover_score": 0.2560852806463768,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.058823529411764705,
    "score_7d": 0.618730628346013,
    "extracted_entities": "Giulia Vecchio",
    "saturation_score": 37.0
  },
  {
    "rank": 18,
    "entity": "alexander arnold",
    "discover_score": 0.20082973346959224,
    "score_1h": 1.4152542372881356,
    "score_4h": 0.6365546218487396,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Alexander Arnold - Calciatore - Liverpool FC - Premier League",
    "saturation_score": 75.0
  },
  {
    "rank": 36,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.1863393723754604,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.17016806722689076,
    "score_7d": 0.3165680473372781,
    "extracted_entities": "Incidente - Raccordo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "mia schem",
    "discover_score": 0.15177997645504804,
    "score_1h": 1.0400350672121565,
    "score_4h": 0.1449579831932773,
    "score_7d": 0.16568047337278108,
    "extracted_entities": "Mia Schem - Persone - Ricerca",
    "saturation_score": 9.0
  },
  {
    "rank": 51,
    "entity": "sandro bondi",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "damson idris",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "macfrut 2025",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "charlène wittstock",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "seychelles",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "maria corleone",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "bullet train",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "trani",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "estrazione superenalotto",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "paolo vi",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "thuram",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "ciro ferrara",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "leao",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "ticketone",
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
    "entity": "meteo bologna",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "dc vs srh",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "michael schumacher",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "vigilance précipitations",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "elezioni comunali trentino 2025 trento",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "meteo firenze",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "oroscopo ariete 6 maggio",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "federico arnaboldi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "mauro russo",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "ippodromo milano",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "marcus thuram",
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
    "entity": "balotelli",
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
    "entity": "multan sultans vs peshawar zalmi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "sofia",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "gigi hadid",
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
    "entity": "milan news",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "fcsb - dinamo bucurești",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "cristina chirichella",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "eurovision 2025",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "diana ross",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "groenlandia",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "brad pitt",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "bulgaria",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "iva zanicchi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "ascolti tv the couple",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "casini",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "walter zenga",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "giorgio mastrota",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "restaurant",
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
    "entity": "don matteo",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "sandra bullock",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "estonia",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "ralph fiennes",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "massimo d'alema",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "youssouf fofana",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "bayesian",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "l'eredità",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "البنك الاهلي ضد الزمالك",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "rita pavone",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "gears of war reloaded",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "giulia cecchettin",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "girona maiorca",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "sabrina carpenter",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "cardinale filoni",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "nicolas maupas",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "morten frendrup",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "colman domingo",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "milan bologna",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "miriana trevisan",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "isabella rossellini",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "bad bunny tour",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "vogue met gala 2025",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "fbi most wanted",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "afd",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "lacerenza",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "casteddu online",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "joao felix",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "genoa cricket and football club",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "matteo bassetti",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "lupus malattia",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "rossella erra",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "sinagra",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "sfl inps pagamenti",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "jochen mass pilota",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "oroscopo sagittario",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "franco oppini",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "renato zero",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "vittoria ceretti",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "cinco de mayo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "stefania orlando",
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
    "entity": "francesco acquaroli",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "corrado formigli",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "manuel agnelli",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "mcdonald's",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "film conclave",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "dan sucu",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "cosa c'è stasera in tv",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "vasami, jacopo",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "isabela merced",
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
    "entity": "anne hathaway",
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
    "entity": "michael kors",
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
    "entity": "intelligenza artificiale",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "gianmarco uomini e donne",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "adam sandler",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "lignano sabbiadoro",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "ada alberti",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "bottega veneta",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "bisegna",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "legnago",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "adinolfi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "mottola",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "diffidati serie a",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "fermo",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "the four seasons serie",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "andrea cambiaso",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "colombia",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "monk",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "kim basinger",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "x",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "cheapest gas",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "zendaya",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "trial",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "solar companies",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "anticipazioni beautiful",
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
    "entity": "casa a prima vista",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "raf",
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
    "entity": "chi sceglie gianmarco di uomini e donne",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "lewandowski barcellona",
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
  "timestamp": "2025-05-06 07:00:48",
  "trends_count": 201,
  "top_score": 16.33466076133463,
  "runtime_minutes": 3.5679743687311807,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nella sinfonia dei trend odierni, emergono con vigore i temi del meteo, della politica e dello sport. Le previsioni meteo sono dominanti, con \"3b meteo\" (#1) e altre variazioni come \"meteo Roma\" (#5) e \"meteo Milano\" (#7) che catturano l'interesse di una cittadinanza ansiosa di conoscere il clima futuro. La politica si infiamma con il \"referendum\" (#2), simbolo di democrazia e partecipazione.\n\nLe opportunità per brillare su Google Discover si celano nel trend \"invalsi\" (#6), con un DScore sostenuto e una saturazione contenuta, facilitando la crescita di contenuti educativi, un settore sempre di vivace interesse. Anche l'allerta meteo (#11) si presenta come fertile terreno per espansione rapida, data la sua scarsa saturazione.\n\nTuttavia, coloro che solcano le nubi digitali devono esercitare cautela con \"Gaza\" (#3) e \"referendum\" (#2), entrambi ingolfati da altissima saturazione, creando un mare di contenuti dove è difficile emergere. In questo incastro di eventi e narrazioni, coloro che scriveranno sapranno dove soffia il vento, navigando con saggezza tra opportunità e rischi, per emergere gloriosi dal panorama della Discover."
};
