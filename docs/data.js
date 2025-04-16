const trendData = [
  {
    "rank": 19,
    "entity": "pasqua",
    "discover_score": 42.5951633962517,
    "score_1h": 83.0,
    "score_4h": 68.87605042016807,
    "score_7d": 61.443786982248525,
    "extracted_entities": "Pasqua - Festa religiosa - Tradizioni - Uova di cioccolato - Celebrazioni",
    "saturation_score": 3990.0
  },
  {
    "rank": 44,
    "entity": "3bmeteo",
    "discover_score": 9.176791717072884,
    "score_1h": 63.241379310344826,
    "score_4h": 39.40966386554622,
    "score_7d": 16.236686390532544,
    "extracted_entities": "3bmeteo - Previsioni meteo - Meteo Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 1,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 8.829101621237042,
    "score_1h": 9.689655172413794,
    "score_4h": 15.59453781512605,
    "score_7d": 6.659763313609467,
    "extracted_entities": "Borussia Dortmund - Barcellona - Calcio - Partita - UEFA",
    "saturation_score": 112.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 6.754782318427937,
    "score_1h": 27.612068965517242,
    "score_4h": 24.226890756302524,
    "score_7d": 5.9171597633136095,
    "extracted_entities": "Aston Villa - PSG - Calcio - Partita - Squadre di calcio",
    "saturation_score": 495.0
  },
  {
    "rank": 9,
    "entity": "champions league",
    "discover_score": 6.752634979553061,
    "score_1h": 65.50862068965517,
    "score_4h": 28.510504201680675,
    "score_7d": 7.997041420118343,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 1190.0
  },
  {
    "rank": 4,
    "entity": "mattarella",
    "discover_score": 5.058917197568285,
    "score_1h": 55.50686732904734,
    "score_4h": 27.735294117647058,
    "score_7d": 3.603550295857988,
    "extracted_entities": "Sergio Mattarella - Presidente della Repubblica Italiana - Politica Italiana",
    "saturation_score": 3120.0
  },
  {
    "rank": 18,
    "entity": "psg",
    "discover_score": 4.747978130710638,
    "score_1h": 54.70689655172414,
    "score_4h": 25.035714285714285,
    "score_7d": 6.547337278106509,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Champions League - Lionel Messi",
    "saturation_score": 1230.0
  },
  {
    "rank": 2,
    "entity": "terremoto oggi",
    "discover_score": 4.186633332317873,
    "score_1h": 44.827586206896555,
    "score_4h": 33.8172268907563,
    "score_7d": 0.9112426035502958,
    "extracted_entities": "Terremoto - Oggi - Evento sismico",
    "saturation_score": 10.0
  },
  {
    "rank": 26,
    "entity": "borussia dortmund",
    "discover_score": 3.8325027436115344,
    "score_1h": 23.413793103448278,
    "score_4h": 17.30252100840336,
    "score_7d": 6.920118343195266,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 220.0
  },
  {
    "rank": 27,
    "entity": "carlos alcaraz",
    "discover_score": 3.7972913507829924,
    "score_1h": 0.0,
    "score_4h": 0.4915966386554622,
    "score_7d": 11.281065088757396,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Sport",
    "saturation_score": 31.0
  },
  {
    "rank": 50,
    "entity": "uefa",
    "discover_score": 3.5539950654294716,
    "score_1h": 3.517241379310345,
    "score_4h": 1.6176470588235294,
    "score_7d": 11.529585798816568,
    "extracted_entities": "UEFA - Calcio - Campionati Europei - Champions League - Europa League",
    "saturation_score": 184.0
  },
  {
    "rank": 24,
    "entity": "barcelona",
    "discover_score": 3.2510567816009113,
    "score_1h": 29.956896551724135,
    "score_4h": 11.451680672268907,
    "score_7d": 6.730769230769231,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 114.0
  },
  {
    "rank": 5,
    "entity": "sara curtis",
    "discover_score": 3.1701678430676967,
    "score_1h": 57.91379310344827,
    "score_4h": 16.235294117647058,
    "score_7d": 3.136094674556213,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 219.0
  },
  {
    "rank": 40,
    "entity": "eurojackpot",
    "discover_score": 2.762835092848815,
    "score_1h": 1.7155172413793105,
    "score_4h": 4.605042016806722,
    "score_7d": 7.961538461538462,
    "extracted_entities": "Eurojackpot - Lotteria - Jackpot - Europa - Estrazione",
    "saturation_score": 39.0
  },
  {
    "rank": 8,
    "entity": "bialetti",
    "discover_score": 2.6227804281185736,
    "score_1h": 8.21551724137931,
    "score_4h": 4.745798319327731,
    "score_7d": 5.3017751479289945,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 194.0
  },
  {
    "rank": 33,
    "entity": "allerta vento",
    "discover_score": 2.1347243198717853,
    "score_1h": 5.9655172413793105,
    "score_4h": 3.67436974789916,
    "score_7d": 6.068047337278107,
    "extracted_entities": "Allerta - Vento - Meteo - Avviso",
    "saturation_score": 5.0
  },
  {
    "rank": 11,
    "entity": "nvidia",
    "discover_score": 1.7799861027607347,
    "score_1h": 37.62068965517241,
    "score_4h": 13.483193277310924,
    "score_7d": 1.6597633136094676,
    "extracted_entities": "NVIDIA - Tecnologia - GPU - Intelligenza Artificiale - Gaming",
    "saturation_score": 197.0
  },
  {
    "rank": 12,
    "entity": "jasmine paolini",
    "discover_score": 1.266172304545537,
    "score_1h": 2.275862068965517,
    "score_4h": 3.869747899159664,
    "score_7d": 2.606508875739645,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 44.0
  },
  {
    "rank": 6,
    "entity": "warriors - grizzlies",
    "discover_score": 1.1950665345570133,
    "score_1h": 0.8103448275862069,
    "score_4h": 6.195378151260504,
    "score_7d": 1.4615384615384617,
    "extracted_entities": "Golden State Warriors - Memphis Grizzlies - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "real madrid arsenal",
    "discover_score": 1.1895280017966139,
    "score_1h": 3.586206896551724,
    "score_4h": 5.827731092436975,
    "score_7d": 2.4289940828402368,
    "extracted_entities": "Real Madrid - Arsenal - Calcio - Partita - Club di calcio",
    "saturation_score": 152.0
  },
  {
    "rank": 49,
    "entity": "meloni",
    "discover_score": 1.1289659716997977,
    "score_1h": 6.112068965517242,
    "score_4h": 5.657563025210084,
    "score_7d": 2.5798816568047336,
    "extracted_entities": "Giorgia Meloni - Frutta - Cucina - Politica Italiana - Ricette",
    "saturation_score": 2300.0
  },
  {
    "rank": 42,
    "entity": "il turco",
    "discover_score": 1.07978201865121,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13655462184873948,
    "score_7d": 3.8136094674556213,
    "extracted_entities": "Turchia - Lingua turca - Cultura turca",
    "saturation_score": 67.0
  },
  {
    "rank": 35,
    "entity": "fuochi d'artificio",
    "discover_score": 1.0781501932310615,
    "score_1h": 0.0,
    "score_4h": 1.2605042016806722,
    "score_7d": 3.3846153846153846,
    "extracted_entities": "Fuochi d'artificio - Spettacoli pirotecnici - Eventi celebrativi - Sicurezza - Normative",
    "saturation_score": 239.0
  },
  {
    "rank": 16,
    "entity": "fuochi d'artificio serie tv",
    "discover_score": 0.9885476504664613,
    "score_1h": 0.0,
    "score_4h": 0.5378151260504201,
    "score_7d": 2.8491124260355027,
    "extracted_entities": "Fuochi d'artificio - Serie TV - Spettacolo - Intrattenimento",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "nada cella",
    "discover_score": 0.9759741667847569,
    "score_1h": 1.646551724137931,
    "score_4h": 0.1953781512605042,
    "score_7d": 3.0236686390532546,
    "extracted_entities": "Nada Cella - Omicidio - Chiavari - Indagini",
    "saturation_score": 217.0
  },
  {
    "rank": 36,
    "entity": "schumacher",
    "discover_score": 0.9416233757431708,
    "score_1h": 0.0,
    "score_4h": 0.5630252100840336,
    "score_7d": 3.1183431952662723,
    "extracted_entities": "Michael Schumacher - Formula 1 - Pilota - Ferrari - Incidente sciistico",
    "saturation_score": 74.0
  },
  {
    "rank": 30,
    "entity": "aston villa vs psg",
    "discover_score": 0.6865301239584883,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.47689075630252103,
    "score_7d": 2.1508875739644973,
    "extracted_entities": "Aston Villa - PSG - Partita di calcio - Competizione sportiva - Squadre di calcio",
    "saturation_score": 3.0
  },
  {
    "rank": 28,
    "entity": "luca barbarossa",
    "discover_score": 0.5318848574207642,
    "score_1h": 0.3620689655172414,
    "score_4h": 0.5021008403361344,
    "score_7d": 1.5562130177514792,
    "extracted_entities": "Luca Barbarossa - Cantante - Musica Italiana",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "dortmund vs barcelona",
    "discover_score": 0.4581910799060706,
    "score_1h": 1.6379310344827587,
    "score_4h": 0.18487394957983191,
    "score_7d": 1.2426035502958581,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 2.0
  },
  {
    "rank": 38,
    "entity": "davide barzan",
    "discover_score": 0.455566391952737,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.8613445378151261,
    "score_7d": 1.2485207100591715,
    "extracted_entities": "Davide Barzan",
    "saturation_score": 10.0
  },
  {
    "rank": 25,
    "entity": "4chan",
    "discover_score": 0.37765536447645265,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.3802521008403361,
    "score_7d": 0.9822485207100592,
    "extracted_entities": "4chan - Forum online - Anonimato - Cultura internet - Meme",
    "saturation_score": 6.0
  },
  {
    "rank": 31,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.3348012465259541,
    "score_1h": 1.1637931034482758,
    "score_4h": 1.9831932773109244,
    "score_7d": 0.4467455621301775,
    "extracted_entities": "Mercoledì - 16 aprile - Giorno della settimana",
    "saturation_score": 1.0
  },
  {
    "rank": 34,
    "entity": "andrea roncato",
    "discover_score": 0.30894140153447475,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.10294117647058823,
    "score_7d": 0.8431952662721893,
    "extracted_entities": "Andrea Roncato",
    "saturation_score": 5.0
  },
  {
    "rank": 15,
    "entity": "chris martin",
    "discover_score": 0.2886872805289761,
    "score_1h": 2.0775862068965516,
    "score_4h": 1.1743697478991595,
    "score_7d": 0.363905325443787,
    "extracted_entities": "Chris Martin - Coldplay - Musica - Cantante",
    "saturation_score": 226.0
  },
  {
    "rank": 23,
    "entity": "magic - hawks",
    "discover_score": 0.2770807138222369,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.41386554621848737,
    "score_7d": 0.5710059171597632,
    "extracted_entities": "Magic - Hawks - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 48,
    "entity": "paolini oggi",
    "discover_score": 0.27558423959909717,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.4621848739495798,
    "score_7d": 0.6597633136094675,
    "extracted_entities": "Paolini - Oggi - Notizie",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "gelato al cioccolato",
    "discover_score": 0.2637183675193628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.6153846153846154,
    "extracted_entities": "Gelato - Cioccolato - Dessert",
    "saturation_score": 3.0
  },
  {
    "rank": 39,
    "entity": "pbks vs kkr",
    "discover_score": 0.25071613561123857,
    "score_1h": 0.0,
    "score_4h": 0.09873949579831932,
    "score_7d": 0.6213017751479291,
    "extracted_entities": "PBKS - KKR - IPL - Cricket - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "cina aerei boeing",
    "discover_score": 0.2439719486850422,
    "score_1h": 2.836206896551724,
    "score_4h": 1.184873949579832,
    "score_7d": 0.1301775147928994,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "enrico brignano",
    "discover_score": 0.21381994819917763,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3613445378151261,
    "score_7d": 0.4142011834319526,
    "extracted_entities": "Enrico Brignano - Comico - Attore - Spettacoli - Italia",
    "saturation_score": 8.0
  },
  {
    "rank": 13,
    "entity": "piero pelù",
    "discover_score": 0.21132706462778938,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.3634453781512605,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Litfiba - Rock Italiano",
    "saturation_score": 50.0
  },
  {
    "rank": 14,
    "entity": "rocco siffredi iene",
    "discover_score": 0.20361354647634877,
    "score_1h": 2.396551724137931,
    "score_4h": 0.7647058823529411,
    "score_7d": 0.15384615384615385,
    "extracted_entities": "Rocco Siffredi - Le Iene",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "ascolti tv dati auditel ieri",
    "discover_score": 0.19398600647084352,
    "score_1h": 0.06896551724137931,
    "score_4h": 0.45168067226890757,
    "score_7d": 0.30177514792899407,
    "extracted_entities": "Ascolti TV - Dati Auditel - Ieri",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "taobao",
    "discover_score": 0.19321827394080573,
    "score_1h": 1.043103448275862,
    "score_4h": 0.19747899159663868,
    "score_7d": 0.3520710059171598,
    "extracted_entities": "Taobao - E-commerce - Cina - Shopping online - Alibaba",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "topo gigio",
    "discover_score": 0.17086076150487262,
    "score_1h": 0.0,
    "score_4h": 0.3277310924369748,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Topo Gigio - Personaggio - Televisione - Italia",
    "saturation_score": 9.0
  },
  {
    "rank": 10,
    "entity": "daniela santanchè",
    "discover_score": 0.16780097462290705,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.02100840336134454,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Daniela Santanchè - Politica - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 43,
    "entity": "tassi bce",
    "discover_score": 0.16211536550742614,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.03781512605042017,
    "score_7d": 0.2603550295857988,
    "extracted_entities": "Tassi - BCE - Politica monetaria - Banca Centrale Europea",
    "saturation_score": 8.0
  },
  {
    "rank": 22,
    "entity": "gianni letta",
    "discover_score": 0.15315818690113475,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.11834319526627218,
    "extracted_entities": "Gianni Letta - Politica Italiana - Governo Italiano",
    "saturation_score": 179.0
  },
  {
    "rank": 45,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.1431080094840437,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033614,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Paolo Fox - Oroscopo - 16 aprile 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "elezioni comunali monfalcone",
    "discover_score": 0.1373010008958183,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.029411764705882353,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Elezioni - Comunali - Monfalcone",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "gene hackman",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "child care",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "childcare",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "un giorno in pretura",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "الطقس",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "premio strega 2025",
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
    "entity": "alessandra amoroso",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "antonella fiordelisi",
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
    "entity": "alex de minaur",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "flavio cobolli",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "the elder scrolls iv oblivion",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "atp monaco",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "camilla rosatello",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "eva lys",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "allerta meteo sardegna",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "zambrotta gambe",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "bersani",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "birmingham",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "paola barale",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "lahore qalandars vs karachi kings",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "danilo bertazzi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "daniele de santis",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "clizia incorvaia",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "giro d'abruzzo 2025",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "diego della valle",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "jane fonda",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "ezio mauro",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "reggiana - málaga",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "ethan quinn",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "trani",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "bagnoli",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "presencias film",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "silvia salis",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "paola cortellesi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "barcelona vs",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "wind warning",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "الطقس غدًا",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "massimo oddo",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "ansa",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "antonio albanese",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "pag",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "michele bravi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "mauro corona",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "briatore",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "simone di pasquale",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "davide carbisiero",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "utrecht",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "birkin",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "mkhitaryan",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "francesca alotta",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "previsioni meteo",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "groenlandia",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "carla signoris",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "nba playoff",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "rocco casalino",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "meteo trento",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "hakimi",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "mirna mastronardi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "flavio briatore",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "paesi sicuri",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "uova alla jova",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "etna",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "balestrate",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "risultati elezioni comunali pordenone",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "champions league classifica",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "jennifer lopez",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "in",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "ultime notizie",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "asensio",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "marquinhos",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "gazzetta del sud",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "elly schlein",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "casper ruud",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "colosseo",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "liga de campeones de la uefa",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "mission impossible",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "partite stasera",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "marco liorni",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "rashford",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "nicholas kohl",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "daniel mcvicar",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "gardaland",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "nuno mendes",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "harry potter",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "il vibonese",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "koora",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "jakub menšík",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "fabio capello",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "paris",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "mezzocorona",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "gerard martín",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "gazzetta di mantova",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "umberto tozzi",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "szczesny",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "enrico mattei",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "stefano massini",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "obama",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "antonella elia",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "tarjeta roja",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "johnny depp",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "cosenza",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "achraf hakimi",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "fiera milano live",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "nicole moscariello",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "jana fett",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "monaco open",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "snai",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "jule niemeier",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "xavier bartlett",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "alycia parks",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "laura siegemund",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "dedura-palomero, diego",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "aleksandar stanković",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "osaka",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "emma navarro",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "igli tare",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-16 09:19:22",
  "trends_count": 173,
  "top_score": 42.5951633962517,
  "runtime_minutes": 5.227437031269074,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle rivelazioni di oggi, lo sport e la politica richiamano fortemente l'attenzione del pubblico italiano. Il calcio domina con partite cruciali della Champions League, ora più che mai un campo di battaglia tra titani calcistici, mentre sulla scena politica nomi come Sergio Mattarella risuonano con fervore tra le masse. Tuttavia, il meteo si insinua fra i temi principali, con aggiornamenti tempestivi che influenzano le attività quotidiane dei cittadini.\n\nNelle tavole dell’opportunità, il trend emergente è 'terremoto oggi' (#8), con un buon Discover Score di 4.2 e un rating di saturazione di soli 10, segnalando un potenziale fertile su Google Discover. Inoltre, '3bmeteo' (#2) si distingue con un DScore di 9.2 e una saturazione ridotta, suggerendo uno spazio ampio per contenuti meteo innovativi.\n\nAl contrario, 'pasqua' (#1) invita alla cautela, nonostante un interesse costante, la saturazione schiacciante di oltre 3.990 suggerisce un campo troppo affollato per apportare un contributo significativo. Navigare attraverso questi trend richiede astuzia strategica: scegliete argomenti che non solo vibrano nell'immediato, ma che posano semi per crescite future durature."
};
