const trendData = [
  {
    "rank": 20,
    "entity": "germania",
    "discover_score": 12.663460029142097,
    "score_1h": 60.439655172413794,
    "score_4h": 45.71276502232692,
    "score_7d": 18.079881656804734,
    "extracted_entities": "Germania - Paese - Europa - Berlino - Economia",
    "saturation_score": 1300.0
  },
  {
    "rank": 17,
    "entity": "formia",
    "discover_score": 7.3743477031349185,
    "score_1h": 3.646551724137931,
    "score_4h": 0.9372384937238494,
    "score_7d": 18.03846153846154,
    "extracted_entities": "Formia - Città - Lazio - Turismo - Storia",
    "saturation_score": 58.0
  },
  {
    "rank": 16,
    "entity": "gaza",
    "discover_score": 5.845362918455125,
    "score_1h": 8.905172413793103,
    "score_4h": 9.963863788193102,
    "score_7d": 12.307692307692308,
    "extracted_entities": "Gaza - Conflitto - Medio Oriente - Striscia di Gaza - Palestina",
    "saturation_score": 2680.0
  },
  {
    "rank": 3,
    "entity": "rihanna",
    "discover_score": 5.690683444792805,
    "score_1h": 31.922413793103445,
    "score_4h": 20.866319749657187,
    "score_7d": 5.195266272189349,
    "extracted_entities": "Rihanna - Cantante - Musica - Fenty Beauty - Barbados",
    "saturation_score": 620.0
  },
  {
    "rank": 4,
    "entity": "dove vedere inter barcellona",
    "discover_score": 5.457371391979385,
    "score_1h": 56.422413793103445,
    "score_4h": 46.257893533982624,
    "score_7d": 1.5029585798816567,
    "extracted_entities": "Inter - Barcellona - Partita - Streaming - Calcio",
    "saturation_score": 9.0
  },
  {
    "rank": 6,
    "entity": "merz",
    "discover_score": 5.010091581917982,
    "score_1h": 50.9051724137931,
    "score_4h": 40.16681023873984,
    "score_7d": 2.2159763313609466,
    "extracted_entities": "Merz - Azienda - Cosmetici - Prodotti per la pelle",
    "saturation_score": 1660.0
  },
  {
    "rank": 44,
    "entity": "bad bunny",
    "discover_score": 3.533873796708324,
    "score_1h": 55.91379310344828,
    "score_4h": 26.0,
    "score_7d": 4.976331360946745,
    "extracted_entities": "Bad Bunny - Musica - Artista - Reggaeton - Concerti",
    "saturation_score": 187.0
  },
  {
    "rank": 2,
    "entity": "tema met gala 2025",
    "discover_score": 3.235256554377144,
    "score_1h": 6.086206896551724,
    "score_4h": 11.973102211595936,
    "score_7d": 2.940828402366864,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "vigevano",
    "discover_score": 3.1442254192698096,
    "score_1h": 8.163793103448276,
    "score_4h": 7.684794838437467,
    "score_7d": 8.636094674556213,
    "extracted_entities": "Vigevano - Città - Lombardia - Turismo - Storia",
    "saturation_score": 282.0
  },
  {
    "rank": 1,
    "entity": "genoa - milan",
    "discover_score": 2.968963378053972,
    "score_1h": 32.241379310344826,
    "score_4h": 13.043933054393305,
    "score_7d": 1.668639053254438,
    "extracted_entities": "Genoa - Milan - Calcio - Serie A - Partita",
    "saturation_score": 1230.0
  },
  {
    "rank": 46,
    "entity": "allerta precipitazioni",
    "discover_score": 2.8615000627386746,
    "score_1h": 23.28448275862069,
    "score_4h": 8.178325305017404,
    "score_7d": 7.508875739644971,
    "extracted_entities": "Allerta - Precipitazioni - Meteo - Previsioni",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "thuram",
    "discover_score": 2.612807986125345,
    "score_1h": 10.120689655172413,
    "score_4h": 14.295787771175416,
    "score_7d": 4.331360946745562,
    "extracted_entities": "Marcus Thuram - Calcio - Borussia Mönchengladbach - Francia - Attaccante",
    "saturation_score": 69.0
  },
  {
    "rank": 7,
    "entity": "jeep compass",
    "discover_score": 1.9847093877319313,
    "score_1h": 16.732758620689655,
    "score_4h": 15.664665447769066,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Jeep - Compass - Auto - SUV",
    "saturation_score": 462.0
  },
  {
    "rank": 27,
    "entity": "annalisa",
    "discover_score": 1.8055485214618692,
    "score_1h": 4.53448275862069,
    "score_4h": 5.670168067226891,
    "score_7d": 4.331360946745562,
    "extracted_entities": "Annalisa - Cantante - Musica - Italia",
    "saturation_score": 246.0
  },
  {
    "rank": 28,
    "entity": "yemen",
    "discover_score": 1.0563500643372759,
    "score_1h": 0.9051724137931034,
    "score_4h": 1.247767307759924,
    "score_7d": 3.1834319526627217,
    "extracted_entities": "Yemen - Guerra civile - Crisi umanitaria - Medio Oriente - Conflitto armato",
    "saturation_score": 420.0
  },
  {
    "rank": 8,
    "entity": "live nation",
    "discover_score": 0.9324039979936337,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.6113445378151261,
    "score_7d": 2.3106508875739644,
    "extracted_entities": "Live Nation - Concerti - Eventi - Musica - Biglietti",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "inter lautaro",
    "discover_score": 0.7850992483495128,
    "score_1h": 0.0603448275862069,
    "score_4h": 0.9101649027811962,
    "score_7d": 2.4615384615384617,
    "extracted_entities": "Inter - Lautaro Martínez - Calcio - Serie A - Partite",
    "saturation_score": 43.0
  },
  {
    "rank": 42,
    "entity": "assegno unico maggio",
    "discover_score": 0.7648273834546871,
    "score_1h": 1.353448275862069,
    "score_4h": 1.7163865546218489,
    "score_7d": 2.230769230769231,
    "extracted_entities": "Assegno unico - Maggio - Pagamenti - Famiglie - INPS",
    "saturation_score": 33.0
  },
  {
    "rank": 12,
    "entity": "sophie codegoni",
    "discover_score": 0.7397806701050945,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.49273935515628847,
    "score_7d": 1.967455621301775,
    "extracted_entities": "Sophie Codegoni - Personaggio pubblico - Influencer - Reality TV",
    "saturation_score": 188.0
  },
  {
    "rank": 43,
    "entity": "crystal palace - nottingham forest",
    "discover_score": 0.6392280574188627,
    "score_1h": 0.0,
    "score_4h": 0.1527196652719665,
    "score_7d": 2.198224852071006,
    "extracted_entities": "Crystal Palace - Nottingham Forest - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 18,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.6349069229507479,
    "score_1h": 0.0,
    "score_4h": 1.6556291972856088,
    "score_7d": 1.470414201183432,
    "extracted_entities": "Incidente - Raccordo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "merz germania",
    "discover_score": 0.6055784163831189,
    "score_1h": 6.327586206896552,
    "score_4h": 8.136783165148906,
    "score_7d": 0.21005917159763313,
    "extracted_entities": "Merz - Germania - Politica tedesca",
    "saturation_score": 1.0
  },
  {
    "rank": 40,
    "entity": "celtics - knicks",
    "discover_score": 0.5971995912343675,
    "score_1h": 0.0,
    "score_4h": 0.28870292887029286,
    "score_7d": 1.9733727810650887,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "referendum 8 9 giugno cittadinanza",
    "discover_score": 0.5875682084200713,
    "score_1h": 2.5086206896551726,
    "score_4h": 1.2857142857142858,
    "score_7d": 1.0236686390532543,
    "extracted_entities": "Referendum - 8-9 giugno - Cittadinanza",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "myriam catania",
    "discover_score": 0.5850203637788925,
    "score_1h": 22.32758620689655,
    "score_4h": 5.36344537815126,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Myriam Catania",
    "saturation_score": 6.0
  },
  {
    "rank": 48,
    "entity": "alessia orro",
    "discover_score": 0.5759562793914356,
    "score_1h": 1.3448275862068966,
    "score_4h": 0.7781020357933969,
    "score_7d": 1.8136094674556213,
    "extracted_entities": "Alessia Orro - Pallavolo - Italia",
    "saturation_score": 32.0
  },
  {
    "rank": 13,
    "entity": "lucia bronzetti",
    "discover_score": 0.41863228882292813,
    "score_1h": 29.25,
    "score_4h": 2.6697900917689252,
    "score_7d": 0.4289940828402367,
    "extracted_entities": "Lucia Bronzetti - Tennis - Giocatrice Italiana",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "conclave 2025",
    "discover_score": 0.41769300728891556,
    "score_1h": 11.336206896551724,
    "score_4h": 4.525614429872368,
    "score_7d": 0.13609467455621302,
    "extracted_entities": "Conclave - 2025 - Papa - Vaticano - Chiesa Cattolica",
    "saturation_score": 285.0
  },
  {
    "rank": 15,
    "entity": "luana ravegnini",
    "discover_score": 0.3656360386237592,
    "score_1h": 5.655172413793103,
    "score_4h": 1.5912854681621602,
    "score_7d": 0.5295857988165681,
    "extracted_entities": "Luana Ravegnini",
    "saturation_score": 3.0
  },
  {
    "rank": 34,
    "entity": "thunder - nuggets",
    "discover_score": 0.33924847154425386,
    "score_1h": 0.3103448275862069,
    "score_4h": 0.2517843957666749,
    "score_7d": 0.9260355029585798,
    "extracted_entities": "NBA - Denver Nuggets - Oklahoma City Thunder - Partita di basket - Squadre NBA",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "asap rocky",
    "discover_score": 0.3072220955066818,
    "score_1h": 0.0,
    "score_4h": 1.014644351464435,
    "score_7d": 0.6153846153846154,
    "extracted_entities": "ASAP Rocky - Musica - Rap - Artista",
    "saturation_score": 6.0
  },
  {
    "rank": 29,
    "entity": "irfis",
    "discover_score": 0.3050425562860302,
    "score_1h": 2.9913793103448274,
    "score_4h": 1.6665904855666116,
    "score_7d": 0.3994082840236686,
    "extracted_entities": "IRFIS - Finanziamenti - Sicilia - Banca - Imprese",
    "saturation_score": 2.0
  },
  {
    "rank": 11,
    "entity": "sondaggio politico",
    "discover_score": 0.29808487440268006,
    "score_1h": 1.2758620689655173,
    "score_4h": 0.6738862909180409,
    "score_7d": 0.47337278106508873,
    "extracted_entities": "Sondaggio - Politica - Opinione pubblica - Elezioni",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "milena brandao",
    "discover_score": 0.2861416329675226,
    "score_1h": 0.45689655172413796,
    "score_4h": 1.2750430716219543,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "Milena Brandao",
    "saturation_score": 49.0
  },
  {
    "rank": 21,
    "entity": "chirichella",
    "discover_score": 0.28342604084414486,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.5941422594142259,
    "score_7d": 0.5355029585798816,
    "extracted_entities": "Cristina Chirichella - Pallavolo - Italia - Nazionale Italiana - Sport",
    "saturation_score": 10.0
  },
  {
    "rank": 26,
    "entity": "tomasz jakubiak",
    "discover_score": 0.255361402456975,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.5261242572342745,
    "score_7d": 0.47337278106508873,
    "extracted_entities": "Tomasz Jakubiak - Chef - Cucina - Programmi TV - Polonia",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "pamela anderson",
    "discover_score": 0.22347894918058103,
    "score_1h": 0.7241379310344828,
    "score_4h": 1.1751608593228087,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "Pamela Anderson - Attrice - Modella - Baywatch - Attivismo",
    "saturation_score": 9.0
  },
  {
    "rank": 32,
    "entity": "fausto e iaio",
    "discover_score": 0.20056210747151074,
    "score_1h": 2.5,
    "score_4h": 1.4390756302521008,
    "score_7d": 0.07396449704142012,
    "extracted_entities": "Fausto Tinelli - Lorenzo Iannucci - Omicidio - Milano - Anni di piombo",
    "saturation_score": 298.0
  },
  {
    "rank": 31,
    "entity": "jannik sinner tennis",
    "discover_score": 0.20003827961125714,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6029411764705882,
    "score_7d": 0.2514792899408284,
    "extracted_entities": "Jannik Sinner - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "tailoring black style",
    "discover_score": 0.17929659294727354,
    "score_1h": 0.0,
    "score_4h": 0.2708765514574031,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Tailoring - Black Style - Moda - Abbigliamento - Sartoria",
    "saturation_score": 3.0
  },
  {
    "rank": 25,
    "entity": "luis henrique",
    "discover_score": 0.17766534804181958,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2226890756302521,
    "score_7d": 0.23372781065088757,
    "extracted_entities": "Luis Henrique",
    "saturation_score": 35.0
  },
  {
    "rank": 22,
    "entity": "lucio manisco",
    "discover_score": 0.17658544000861723,
    "score_1h": 0.0,
    "score_4h": 1.0076474104286066,
    "score_7d": 0.047337278106508875,
    "extracted_entities": "Lucio Manisco - Giornalista - Politica Italiana - Parlamento Europeo",
    "saturation_score": 102.0
  },
  {
    "rank": 10,
    "entity": "treni garantiti sciopero trenitalia",
    "discover_score": 0.17622028878159868,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.45483632783657396,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Treni - Sciopero - Trenitalia - Servizi garantiti",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "belve d abbraccio",
    "discover_score": 0.16617173024343618,
    "score_1h": 0.0,
    "score_4h": 0.537059175134489,
    "score_7d": 0.16568047337278108,
    "extracted_entities": "Belve - Abbraccio",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "anastasija sevastova",
    "discover_score": 0.15039281956342745,
    "score_1h": 0.9051724137931034,
    "score_4h": 0.4100418410041841,
    "score_7d": 0.07692307692307693,
    "extracted_entities": "Anastasija Sevastova - Tennis - Giocatrice",
    "saturation_score": 7.0
  },
  {
    "rank": 35,
    "entity": "vittoria puccini",
    "discover_score": 0.14737964275116938,
    "score_1h": 0.45689655172413796,
    "score_4h": 0.23091663443620125,
    "score_7d": 0.13313609467455623,
    "extracted_entities": "Vittoria Puccini - Attrice - Cinema italiano",
    "saturation_score": 73.0
  },
  {
    "rank": 33,
    "entity": "max allegri",
    "discover_score": 0.144018404390523,
    "score_1h": 0.0,
    "score_4h": 0.25581906402728455,
    "score_7d": 0.10946745562130178,
    "extracted_entities": "Max Allegri - Allenatore - Calcio - Juventus",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "gerri fiction rai cast",
    "discover_score": 0.13662513046547764,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.046218487394957986,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Gerri - Fiction - Rai - Cast",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "andrea cambiaso",
    "discover_score": 0.12447350772209081,
    "score_1h": 0.0,
    "score_4h": 0.27521008403361347,
    "score_7d": 0.038461538461538464,
    "extracted_entities": "Andrea Cambiaso - Calciatore - Serie A - Juventus - Genoa",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "giulio zeppieri",
    "discover_score": 0.12201976128956796,
    "score_1h": 0.0,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Giulio Zeppieri - Tennis - Giocatore",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "lulu sun",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "alessia fabiani",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "girona - mallorca",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "liliana resinovich",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "matteo bassetti",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mattia torre",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "quasi orfano",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "livenation",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "3b meteo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "vittoria ceretti",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "ceferin",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "meteo roma",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "giulia vecchio",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "bullet train",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "raphinha nazionale italiana",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "vogue",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "estrazione superenalotto",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "trani",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "castellina",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "claudio baglioni",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "dc vs srh",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "tutto food milano",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "paolo vi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "mia schem",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "walter zenga",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "crime",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "milan oggi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "meteo torino",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "federico arnaboldi",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "walter sabatini",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "diana ross",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "leao",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "invalsi",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "maria corleone 2",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "michael schumacher",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "macfrut 2025",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "sandro bondi",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "damson idris",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "antonella clerici",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "maria chindamo",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "jochen mass pilota",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "massimo cellino",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "paredes",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "ippodromo milano",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "anna wintour",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "sirmione",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "edison",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "ciro ferrara",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "multan sultans vs peshawar zalmi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "papa paolo vi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "kossounou",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "serena barone attrice",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "lollobrigida",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "riyadh air metropolitano",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "balotelli",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "simone susinna",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "sandra milo",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "sofia",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "vieira",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "fcsb - dinamo bucurești",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "sabrina carpenter",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "eurovision 2025",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "milan news",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "monica setta",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "crystal palace vs nottm forest",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "iva zanicchi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "meteo milano oggi",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "bulgaria",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "brad pitt",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "meteo bologna",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "roma today",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "gigi hadid",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "spalletti",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "giorgio mastrota",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "don matteo",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "milan bologna",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "l'eredità",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "meteo torino oggi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "inside man most wanted",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "sandra bullock",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "ralph fiennes",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "youssouf fofana",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "البنك الاهلي ضد الزمالك",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "palagano",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "estonia",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "casini",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "massimo d'alema",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "gears of war reloaded",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "paola iezzi",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bayesian",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "meteo firenze",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "zendaya",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "charlène wittstock",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "norton cuffy",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "metro milano",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "girona maiorca",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "cardinale filoni",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "nicolas maupas",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "morten frendrup",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "restaurant",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "isabella rossellini",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "bad bunny tour",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "colman domingo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "afd",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "matteo bassetti",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "rossella erra",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "sfl inps pagamenti",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "fbi most wanted",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "meteo roma oggi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "sinagra",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "albertini",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "letizia moratti",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "genoa cricket and football club",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "lacerenza",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "seychelles",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "joe manganiello",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "renato zero",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "francesco acquaroli",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "corrado formigli",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "manuel agnelli",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "film conclave",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "sorano",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "dan sucu",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "elisabetta canalis",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "vigilance précipitations",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "giovanardi",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "adam sandler",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "jorginho",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "calendario milan",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "lignano sabbiadoro",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "isabela merced",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "anne hathaway",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "legnago",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "bisegna",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "fermo",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "mottola",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "kim basinger",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "michael kors",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "monk",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "the four seasons serie",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "trial",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "diffidati serie a",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "colombia",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "cairo toro",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "ticket master",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "alberico evani",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "casa a prima vista",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "x",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "raffaele palladino",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "milannews",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "zhao xintong",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "chi sceglie gianmarco di uomini e donne",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "the couple chiude",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-06 13:58:29",
  "trends_count": 209,
  "top_score": 12.663460029142097,
  "runtime_minutes": 9.849670573075612,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle vibrazioni di oggi, tre forze dominano il panorama: la musica con i suoi interpreti internazionali, lo sport che narra gare epiche e la geopolitica che agita le acque del Mediterraneo e oltre. Impavidi come Bad Bunny e Rihanna dominano le discussioni musicali, mentre eventi calcistici cruciali come \"Inter-Barcellona\" trainano la passione per lo sport. Intanto, il conflitto di Gaza si scontra con cuori e menti globali, alimentando intense conversazioni sugli sviluppi internazionali.\n\nVediamo opportunità per contenuti su Google Discover trainati da 'dove vedere inter barcellona' (#5) e 'merz' (#6). Il primo gode di un crescente DScore con attenzione recente e bassa saturazione, ideale per gli spalti digitali. Merz, pur con saturazione moderata, promette un pubblico curioso verso innovazioni cosmetiche.\n\nTuttavia, avverto cautela con la 'Gaza' (#3), dove l’immensa saturazione rischia di eclissare nuove voci, e 'Germania' (#1), il cui alto DScore potrebbe rivelarsi effimero in un panorama competitivo. In questa arena di informazioni, i creatori devono affinare l'arte di catturare momenti, scegliendo con saggezza battaglie mediatiche giuste per ritagliarsi un futuro in Discover."
};
