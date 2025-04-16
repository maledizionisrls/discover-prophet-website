const trendData = [
  {
    "rank": 1,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 12.751340864286117,
    "score_1h": 43.62068965517241,
    "score_4h": 31.745798319327733,
    "score_7d": 6.745562130177515,
    "extracted_entities": "Borussia Dortmund - Barcellona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 85.0
  },
  {
    "rank": 44,
    "entity": "3bmeteo",
    "discover_score": 8.484556722684701,
    "score_1h": 57.5,
    "score_4h": 34.82773109243698,
    "score_7d": 15.689349112426035,
    "extracted_entities": "3bmeteo - Meteo - Previsioni",
    "saturation_score": 1.0
  },
  {
    "rank": 8,
    "entity": "champions league",
    "discover_score": 8.411322009599255,
    "score_1h": 68.43103448275863,
    "score_4h": 40.371848739495796,
    "score_7d": 7.914201183431953,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 1190.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 8.104674284143886,
    "score_1h": 48.68103448275862,
    "score_4h": 33.39705882352941,
    "score_7d": 5.849112426035503,
    "extracted_entities": "Aston Villa - PSG - Calcio - Squadre di calcio - Partita",
    "saturation_score": 567.0
  },
  {
    "rank": 18,
    "entity": "psg",
    "discover_score": 5.805101353040669,
    "score_1h": 61.47413793103448,
    "score_4h": 35.82142857142857,
    "score_7d": 6.464497041420119,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Champions League - Lionel Messi",
    "saturation_score": 1400.0
  },
  {
    "rank": 5,
    "entity": "sara curtis",
    "discover_score": 5.778815579267823,
    "score_1h": 39.08620689655172,
    "score_4h": 25.630252100840337,
    "score_7d": 5.505917159763314,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 182.0
  },
  {
    "rank": 31,
    "entity": "borussia dortmund",
    "discover_score": 5.174075605008133,
    "score_1h": 48.46551724137932,
    "score_4h": 32.08613445378151,
    "score_7d": 7.15680473372781,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 158.0
  },
  {
    "rank": 4,
    "entity": "mattarella",
    "discover_score": 5.160523997907533,
    "score_1h": 61.241379310344826,
    "score_4h": 34.13235294117647,
    "score_7d": 2.695266272189349,
    "extracted_entities": "Sergio Mattarella - Presidente della Repubblica Italiana - Politica Italiana",
    "saturation_score": 3220.0
  },
  {
    "rank": 2,
    "entity": "terremoto oggi",
    "discover_score": 4.748436561679111,
    "score_1h": 53.26724137931035,
    "score_4h": 39.13655462184874,
    "score_7d": 0.8994082840236687,
    "extracted_entities": "Terremoto - Oggi - Eventi sismici - Notizie aggiornate",
    "saturation_score": 9.0
  },
  {
    "rank": 46,
    "entity": "unica",
    "discover_score": 4.388699127103334,
    "score_1h": 55.724137931034484,
    "score_4h": 15.957983193277311,
    "score_7d": 9.928994082840237,
    "extracted_entities": "Università - Italia - Istruzione - Corsi di laurea",
    "saturation_score": 416.0
  },
  {
    "rank": 27,
    "entity": "barcelona",
    "discover_score": 3.8980323698180377,
    "score_1h": 22.03448275862069,
    "score_4h": 12.464285714285715,
    "score_7d": 8.372781065088757,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 63.0
  },
  {
    "rank": 32,
    "entity": "carlos alcaraz",
    "discover_score": 3.6566285053475704,
    "score_1h": 1.6146990064289888,
    "score_4h": 1.3277310924369747,
    "score_7d": 11.020710059171599,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Sport",
    "saturation_score": 30.0
  },
  {
    "rank": 12,
    "entity": "nvidia",
    "discover_score": 3.375329658428075,
    "score_1h": 39.48275862068965,
    "score_4h": 8.876050420168067,
    "score_7d": 6.535502958579881,
    "extracted_entities": "NVIDIA - Tecnologia - GPU - Intelligenza Artificiale - Gaming",
    "saturation_score": 201.0
  },
  {
    "rank": 30,
    "entity": "allerta vento",
    "discover_score": 2.715123107034199,
    "score_1h": 6.517241379310345,
    "score_4h": 7.628151260504202,
    "score_7d": 6.594674556213018,
    "extracted_entities": "Allerta - Vento - Meteo - Avviso",
    "saturation_score": 5.0
  },
  {
    "rank": 34,
    "entity": "busto arsizio",
    "discover_score": 2.535710125514069,
    "score_1h": 21.67241379310345,
    "score_4h": 2.8193277310924367,
    "score_7d": 7.538461538461538,
    "extracted_entities": "Busto Arsizio - Città - Lombardia - Italia",
    "saturation_score": 330.0
  },
  {
    "rank": 9,
    "entity": "bialetti",
    "discover_score": 2.1060657138974372,
    "score_1h": 23.275862068965516,
    "score_4h": 3.4558823529411766,
    "score_7d": 4.600591715976331,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 142.0
  },
  {
    "rank": 42,
    "entity": "eurojackpot",
    "discover_score": 1.963497202060817,
    "score_1h": 4.939655172413794,
    "score_4h": 8.373949579831933,
    "score_7d": 4.547337278106509,
    "extracted_entities": "Eurojackpot - Lotteria - Jackpot - Europa - Estrazione",
    "saturation_score": 38.0
  },
  {
    "rank": 24,
    "entity": "uefa champions league",
    "discover_score": 1.6886227809534489,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.7605042016806722,
    "score_7d": 4.9171597633136095,
    "extracted_entities": "UEFA - Champions League - Calcio - Torneo - Europa",
    "saturation_score": 37.0
  },
  {
    "rank": 6,
    "entity": "jasmine paolini",
    "discover_score": 1.5412048679556225,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.8067226890756302,
    "score_7d": 3.5946745562130173,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 45.0
  },
  {
    "rank": 35,
    "entity": "aston villa vs psg",
    "discover_score": 1.3538439700831766,
    "score_1h": 0.3879310344827586,
    "score_4h": 0.07563025210084034,
    "score_7d": 4.644970414201183,
    "extracted_entities": "Aston Villa - PSG - Partita di calcio - Squadre di calcio - Evento sportivo",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "warriors - grizzlies",
    "discover_score": 1.1415260055967542,
    "score_1h": 2.8189655172413794,
    "score_4h": 6.008403361344538,
    "score_7d": 1.4556213017751478,
    "extracted_entities": "Golden State Warriors - Memphis Grizzlies - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 49,
    "entity": "الطقس",
    "discover_score": 0.8287979325425627,
    "score_1h": 0.0,
    "score_4h": 1.7352941176470589,
    "score_7d": 2.532544378698225,
    "extracted_entities": "الطقس",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "rocco siffredi iene",
    "discover_score": 0.7423152011291045,
    "score_1h": 3.2586206896551726,
    "score_4h": 0.9369747899159664,
    "score_7d": 1.9171597633136095,
    "extracted_entities": "Rocco Siffredi - Le Iene",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "real madrid arsenal",
    "discover_score": 0.7421442795974754,
    "score_1h": 3.456896551724138,
    "score_4h": 3.9516806722689077,
    "score_7d": 1.4615384615384615,
    "extracted_entities": "Real Madrid - Arsenal - Calcio - Partita - Club calcistici",
    "saturation_score": 112.0
  },
  {
    "rank": 20,
    "entity": "dortmund vs barcelona",
    "discover_score": 0.7363831284478288,
    "score_1h": 0.0,
    "score_4h": 0.08823529411764706,
    "score_7d": 2.272189349112426,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 3.0
  },
  {
    "rank": 50,
    "entity": "gene hackman",
    "discover_score": 0.575093571442937,
    "score_1h": 0.7413793103448276,
    "score_4h": 2.1911764705882355,
    "score_7d": 1.4378698224852071,
    "extracted_entities": "Gene Hackman - Attore - Film - Hollywood",
    "saturation_score": 82.0
  },
  {
    "rank": 13,
    "entity": "4chan",
    "discover_score": 0.561700836263361,
    "score_1h": 0.0,
    "score_4h": 0.3277310924369748,
    "score_7d": 1.4792899408284024,
    "extracted_entities": "4chan - Forum online - Anonimato - Cultura internet - Meme",
    "saturation_score": 7.0
  },
  {
    "rank": 28,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.5517547387387542,
    "score_1h": 0.9137931034482759,
    "score_4h": 2.514705882352941,
    "score_7d": 1.0946745562130178,
    "extracted_entities": "Mercoledì - 16 aprile - Buongiorno",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "fuochi d'artificio serie tv",
    "discover_score": 0.5387391968095937,
    "score_1h": 0.0,
    "score_4h": 0.10714285714285714,
    "score_7d": 1.5059171597633134,
    "extracted_entities": "Fuochi d'artificio - Serie TV - Intrattenimento",
    "saturation_score": 2.0
  },
  {
    "rank": 26,
    "entity": "gianni letta",
    "discover_score": 0.537256136828943,
    "score_1h": 1.2672413793103448,
    "score_4h": 0.012605042016806723,
    "score_7d": 1.6893491124260356,
    "extracted_entities": "Gianni Letta",
    "saturation_score": 181.0
  },
  {
    "rank": 25,
    "entity": "gelato al cioccolato",
    "discover_score": 0.5130317022073717,
    "score_1h": 1.25,
    "score_4h": 0.2605042016806723,
    "score_7d": 1.5207100591715976,
    "extracted_entities": "Gelato - Cioccolato - Dessert",
    "saturation_score": 4.0
  },
  {
    "rank": 10,
    "entity": "daniela santanchè",
    "discover_score": 0.44602466446113065,
    "score_1h": 2.0993571011104617,
    "score_4h": 0.014705882352941176,
    "score_7d": 1.1183431952662721,
    "extracted_entities": "Daniela Santanchè - Politica Italiana - Governo Italiano",
    "saturation_score": 6.0
  },
  {
    "rank": 39,
    "entity": "davide barzan",
    "discover_score": 0.3687876173943523,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.42016806722689076,
    "score_7d": 1.0266272189349113,
    "extracted_entities": "Davide Barzan",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "il turco",
    "discover_score": 0.3567600491035958,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.7331932773109244,
    "score_7d": 0.9201183431952663,
    "extracted_entities": "Turchia - Lingua turca - Cultura turca",
    "saturation_score": 159.0
  },
  {
    "rank": 38,
    "entity": "claudia cardinale",
    "discover_score": 0.3461155910337666,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.0443786982248522,
    "extracted_entities": "Claudia Cardinale - Attrice - Cinema italiano - Filmografia - Anni '60",
    "saturation_score": 9.0
  },
  {
    "rank": 47,
    "entity": "tassi bce",
    "discover_score": 0.34089331269468803,
    "score_1h": 0.0,
    "score_4h": 0.1953781512605042,
    "score_7d": 1.0088757396449703,
    "extracted_entities": "Tassi - BCE - Politica monetaria - Eurozona - Inflazione",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "topo gigio",
    "discover_score": 0.3348028902424072,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.819327731092437,
    "score_7d": 0.6538461538461539,
    "extracted_entities": "Topo Gigio - Personaggio - Televisione - Italia",
    "saturation_score": 8.0
  },
  {
    "rank": 22,
    "entity": "magic - hawks",
    "discover_score": 0.31816482544352,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.30462184873949577,
    "score_7d": 0.7514792899408285,
    "extracted_entities": "Magic - Hawks - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "elezioni comunali monfalcone",
    "discover_score": 0.3086778347280903,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.8402366863905326,
    "extracted_entities": "Elezioni - Comunali - Monfalcone",
    "saturation_score": 5.0
  },
  {
    "rank": 36,
    "entity": "andrea roncato",
    "discover_score": 0.3047594145617554,
    "score_1h": 0.0,
    "score_4h": 0.09663865546218486,
    "score_7d": 0.8372781065088757,
    "extracted_entities": "Andrea Roncato - Attore - Comico - Televisione - Cinema",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "nada cella",
    "discover_score": 0.2675342557428366,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.542016806722689,
    "score_7d": 0.4881656804733728,
    "extracted_entities": "Nada Cella - Omicidio - Chiavari - Indagine",
    "saturation_score": 160.0
  },
  {
    "rank": 41,
    "entity": "chris martin",
    "discover_score": 0.24391901968274432,
    "score_1h": 3.0258620689655173,
    "score_4h": 0.42436974789915966,
    "score_7d": 0.5118343195266273,
    "extracted_entities": "Chris Martin - Coldplay - Musica",
    "saturation_score": 212.0
  },
  {
    "rank": 48,
    "entity": "enrico brignano",
    "discover_score": 0.2186377328559194,
    "score_1h": 0.0,
    "score_4h": 0.19327731092436976,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Enrico Brignano - Comico - Attore - Spettacoli",
    "saturation_score": 8.0
  },
  {
    "rank": 17,
    "entity": "cina aerei boeing",
    "discover_score": 0.20572427542062657,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.9054621848739496,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "piero pelù",
    "discover_score": 0.18756640721428336,
    "score_1h": 0.0,
    "score_4h": 0.2899159663865546,
    "score_7d": 0.1834319526627219,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Italia",
    "saturation_score": 49.0
  },
  {
    "rank": 29,
    "entity": "serhou guirassy",
    "discover_score": 0.1856833143018304,
    "score_1h": 1.6982758620689655,
    "score_4h": 0.2184873949579832,
    "score_7d": 0.28106508875739644,
    "extracted_entities": "Serhou Guirassy - Calciatore - Bundesliga - VfB Stuttgart - Gol",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "pbks vs kkr",
    "discover_score": 0.18113409881284048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.3550295857988166,
    "extracted_entities": "PBKS - KKR - Indian Premier League - Cricket",
    "saturation_score": 2.0
  },
  {
    "rank": 37,
    "entity": "schumacher",
    "discover_score": 0.17723378282062374,
    "score_1h": 0.8793103448275862,
    "score_4h": 0.21218487394957983,
    "score_7d": 0.2692307692307693,
    "extracted_entities": "Michael Schumacher - Formula 1 - Pilota - Ferrari - Incidente sciistico",
    "saturation_score": 40.0
  },
  {
    "rank": 16,
    "entity": "luca barbarossa",
    "discover_score": 0.16937026540407407,
    "score_1h": 1.6810344827586208,
    "score_4h": 0.20378151260504201,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Luca Barbarossa - Cantante - Musica Italiana",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.1318713229522475,
    "score_1h": 0.0,
    "score_4h": 0.27941176470588236,
    "score_7d": 0.03550295857988166,
    "extracted_entities": "Paolo Fox - Oroscopo - 16 aprile 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "ascolti tv dati auditel ieri",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "paolini oggi",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "meloni",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "palagano",
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
    "entity": "uefa",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "un giorno in pretura",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "dortmund – barcelone",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "premio strega 2025",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "alessandra amoroso",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "antonella fiordelisi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "ucl",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "atp monaco",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "allerta meteo sardegna",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "alex de minaur",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "the elder scrolls iv oblivion",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "flavio cobolli",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "meteo 3b",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "eva lys",
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
    "entity": "zambrotta gambe",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "bersani",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "danilo bertazzi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "birmingham",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "daniele de santis",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "paola barale",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "lahore qalandars vs karachi kings",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "clizia incorvaia",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "giro d'abruzzo 2025",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "jane fonda",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "wind warning",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "ezio mauro",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "reggiana - málaga",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "birkin",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "ethan quinn",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "trani",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "bagnoli",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "cardinale becciu",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "presencias film",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "elisabetta cocciaretto",
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
    "entity": "silvia salis",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "paola cortellesi",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "nba playoff",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "الطقس غدًا",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "antonio albanese",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "massimo oddo",
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
    "entity": "previsioni meteo",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "meteo trento",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "mauro corona",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "briatore",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "davide carbisiero",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "utrecht",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "simone di pasquale",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "mkhitaryan",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "groenlandia",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "francesca alotta",
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
    "entity": "psg vs",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "rocco casalino",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "etna",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "hakimi",
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
    "entity": "flavio briatore",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "uova alla jova",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "paesi sicuri",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "ultime notizie",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "balestrate",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "in",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "champions league classifica",
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
    "entity": "jennifer lopez",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "risultati elezioni comunali pordenone",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "asensio",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "marquinhos",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "elly schlein",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "casper ruud",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "colosseo",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "mission impossible",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "il vibonese",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "partite stasera",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "marco liorni",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "nicholas kohl",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "gardaland",
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
    "entity": "nuno mendes",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "koora",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "gazzetta di mantova",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "harry potter",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "fabio capello",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "paris",
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
    "entity": "gerard martín",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "mezzocorona",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "umberto tozzi",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "szczesny",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "berlusconi",
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
    "entity": "stefano massini",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "obama",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "johnny depp",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "antonella elia",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "cosenza",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "achraf hakimi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "tarjeta roja",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "fiera milano live",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "nicole moscariello",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "oroscopo oggi pesci",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "jana fett",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "snai",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "kallas",
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
    "entity": "xavier bartlett",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "laura siegemund",
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
    "entity": "aleksandar stanković",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "osaka",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "emma navarro",
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
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-16 08:18:29",
  "trends_count": 178,
  "top_score": 12.751340864286117,
  "runtime_minutes": 6.140975121657053,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi i venti del destino spingono verso orizzonti sportivi e meteorologici. Il fervore della UEFA Champions League avvolge l'Europa, con il match tra Borussia Dortmund e Barcellona che cattura l'attenzione intensa degli appassionati. Tuttavia, è la sicurezza atmosferica che sussurra un'opportunità unica: l'interesse per \"3bmeteo\", un faro nel clima mutevole, presenta un potenziale Discover elevato grazie a un DScore significativo e una saturazione pressoché inesistente, un invito a esplorare i cieli con maggiore dettaglio.\n\nMa attenzione, un'altra partita di spicco tra Aston Villa e PSG già sovraccarica le cronache, con una saturazione vicina a essere \"dominante\", un territorio dove le voci potrebbero perdersi nel coro.\n\nLe profezie consigliano le anime curiose di abbracciare le onde emergenti e meteo, laddove la stasi di notizie popolari non riesce a competere. In virtù di ciò, che i creatori di contenuti trovino il giusto equilibrio, sondando le correnti di interesse con idee fresche e originali, pronti a immergersi là dove la marea è ancora bassa e il potenziale alto."
};
