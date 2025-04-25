const trendData = [
  {
    "rank": 3,
    "entity": "25 aprile 2025",
    "discover_score": 14.406895018349537,
    "score_1h": 75.54310344827586,
    "score_4h": 67.56302521008404,
    "score_7d": 6.807692307692308,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Eventi - Commemorazioni",
    "saturation_score": 1970.0
  },
  {
    "rank": 1,
    "entity": "bologna - empoli",
    "discover_score": 10.836025123430096,
    "score_1h": 72.09482758620689,
    "score_4h": 44.795884462571635,
    "score_7d": 3.6449704142011834,
    "extracted_entities": "Bologna - Empoli - Calcio - Serie A - Partita",
    "saturation_score": 638.0
  },
  {
    "rank": 29,
    "entity": "allerta temporale",
    "discover_score": 9.068105811747271,
    "score_1h": 56.224137931034484,
    "score_4h": 34.28151260504202,
    "score_7d": 15.405325443786982,
    "extracted_entities": "Allerta - Temporale - Meteo - Previsioni",
    "saturation_score": 3.0
  },
  {
    "rank": 31,
    "entity": "eurospin",
    "discover_score": 7.031840011025429,
    "score_1h": 66.29310344827587,
    "score_4h": 27.021008403361346,
    "score_7d": 12.810650887573964,
    "extracted_entities": "Eurospin - Supermercato - Discount - Spesa - Offerte",
    "saturation_score": 169.0
  },
  {
    "rank": 33,
    "entity": "meteo rimini",
    "discover_score": 5.589363466799858,
    "score_1h": 3.206896551724138,
    "score_4h": 2.1029411764705883,
    "score_7d": 15.934911242603551,
    "extracted_entities": "Meteo - Rimini",
    "saturation_score": 9.0
  },
  {
    "rank": 26,
    "entity": "oroscopo branko",
    "discover_score": 4.659563213014607,
    "score_1h": 3.5,
    "score_4h": 1.3361344537815125,
    "score_7d": 13.162721893491124,
    "extracted_entities": "Oroscopo - Branko - Astrologia",
    "saturation_score": 8.0
  },
  {
    "rank": 11,
    "entity": "bella ciao",
    "discover_score": 3.916122167971133,
    "score_1h": 38.73275862068965,
    "score_4h": 19.159663865546218,
    "score_7d": 5.127218934911243,
    "extracted_entities": "Bella Ciao - Canzone - Resistenza - Italia - Seconda Guerra Mondiale",
    "saturation_score": 101.0
  },
  {
    "rank": 20,
    "entity": "guerra ucraina russia",
    "discover_score": 3.5697768726027275,
    "score_1h": 3.7586206896551726,
    "score_4h": 0.7920168067226891,
    "score_7d": 10.023668639053255,
    "extracted_entities": "Guerra - Ucraina - Russia",
    "saturation_score": 3.0
  },
  {
    "rank": 35,
    "entity": "santo di oggi",
    "discover_score": 3.4993537938233743,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.36414858830561514,
    "score_7d": 11.02662721893491,
    "extracted_entities": "Santo - Oggi - Calendario Liturgico",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "gentilini",
    "discover_score": 3.4993063795629986,
    "score_1h": 5.560344827586206,
    "score_4h": 8.628836890404697,
    "score_7d": 5.408284023668639,
    "extracted_entities": "Gentilini - Biscotti - Azienda alimentare - Prodotti da forno",
    "saturation_score": 455.0
  },
  {
    "rank": 41,
    "entity": "manifestazione 25 aprile",
    "discover_score": 2.981603464131112,
    "score_1h": 45.22413793103448,
    "score_4h": 12.612311451777362,
    "score_7d": 6.5325443786982245,
    "extracted_entities": "Manifestazione - 25 aprile - Festa della Liberazione - Italia - Eventi",
    "saturation_score": 4.0
  },
  {
    "rank": 18,
    "entity": "25 aprile supermercati aperti",
    "discover_score": 2.8073903024333804,
    "score_1h": 34.58620689655172,
    "score_4h": 12.673780809394888,
    "score_7d": 4.855029585798817,
    "extracted_entities": "25 aprile - Supermercati - Apertura - Festività",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "atlético madrid - rayo vallecano",
    "discover_score": 2.7119105811739552,
    "score_1h": 2.206896551724138,
    "score_4h": 1.5693277310924372,
    "score_7d": 5.366863905325443,
    "extracted_entities": "Atlético Madrid - Rayo Vallecano - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 7,
    "entity": "latte ritirato carrefour",
    "discover_score": 2.176809564411891,
    "score_1h": 0.6982758620689655,
    "score_4h": 1.6323529411764706,
    "score_7d": 4.958579881656805,
    "extracted_entities": "Latte - Ritiro prodotto - Carrefour",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "san marco onomastico",
    "discover_score": 2.0001654422356294,
    "score_1h": 16.482758620689655,
    "score_4h": 8.331932773109244,
    "score_7d": 3.242603550295858,
    "extracted_entities": "San Marco - Onomastico - Santi - Tradizioni",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "anpi",
    "discover_score": 1.8033548583876027,
    "score_1h": 2.6206896551724137,
    "score_4h": 0.7504570866003305,
    "score_7d": 5.964497041420119,
    "extracted_entities": "ANPI - Associazione Nazionale Partigiani d'Italia - Resistenza italiana - Antifascismo - Storia italiana",
    "saturation_score": 246.0
  },
  {
    "rank": 19,
    "entity": "grizzlies - thunder",
    "discover_score": 1.7688661821438982,
    "score_1h": 1.853448275862069,
    "score_4h": 1.0105042016806722,
    "score_7d": 5.1360946745562135,
    "extracted_entities": "Grizzlies - Thunder - NBA - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "cosa fare il 25 aprile",
    "discover_score": 1.7580330487116749,
    "score_1h": 2.637931034482759,
    "score_4h": 1.6857969129074224,
    "score_7d": 5.792899408284024,
    "extracted_entities": "25 aprile - Attività - Eventi - Italia - Festa della Liberazione",
    "saturation_score": 4.0
  },
  {
    "rank": 13,
    "entity": "clippers - nuggets",
    "discover_score": 1.726254326923003,
    "score_1h": 2.8793103448275863,
    "score_4h": 2.307250096691396,
    "score_7d": 4.316568047337278,
    "extracted_entities": "Clippers - Nuggets - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "nfl draft",
    "discover_score": 1.578279503199747,
    "score_1h": 2.439655172413793,
    "score_4h": 1.3789775324355684,
    "score_7d": 4.724852071005917,
    "extracted_entities": "NFL - Draft - Football americano - Selezione giocatori - Squadre NFL",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "papà francesco",
    "discover_score": 1.4250236009304609,
    "score_1h": 14.301724137931036,
    "score_4h": 1.9936974789915967,
    "score_7d": 4.508875739644971,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": 4.0
  },
  {
    "rank": 17,
    "entity": "pistons - knicks",
    "discover_score": 1.3596704471634218,
    "score_1h": 1.0603448275862069,
    "score_4h": 0.453781512605042,
    "score_7d": 4.017751479289941,
    "extracted_entities": "Pistons - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "betis - valladolid",
    "discover_score": 1.3307341923224212,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.10084033613445378,
    "score_7d": 3.7781065088757395,
    "extracted_entities": "Betis - Valladolid - Calcio - Partita - Liga Spagnola",
    "saturation_score": 5.0
  },
  {
    "rank": 2,
    "entity": "graziano fiorita",
    "discover_score": 1.2983316351323857,
    "score_1h": 0.0,
    "score_4h": 0.4096638655462185,
    "score_7d": 2.408284023668639,
    "extracted_entities": "Graziano Fiorita",
    "saturation_score": 248.0
  },
  {
    "rank": 44,
    "entity": "serido",
    "discover_score": 1.1904961022717697,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 4.21301775147929,
    "extracted_entities": "Festival - Teatro - Bambini - Spettacoli",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "musei gratis 25 aprile",
    "discover_score": 1.0700931358748285,
    "score_1h": 2.103448275862069,
    "score_4h": 0.9852941176470588,
    "score_7d": 3.5414201183431953,
    "extracted_entities": "Musei - Gratis - 25 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "alice morelli",
    "discover_score": 1.0429554197070199,
    "score_1h": 1.2844827586206897,
    "score_4h": 0.4180672268907563,
    "score_7d": 3.047337278106509,
    "extracted_entities": "Alice Morelli",
    "saturation_score": 6.0
  },
  {
    "rank": 21,
    "entity": "volvera",
    "discover_score": 1.0356342470159292,
    "score_1h": 3.8017241379310347,
    "score_4h": 1.6491596638655461,
    "score_7d": 2.843195266272189,
    "extracted_entities": "Volvera - Comune - Torino - Piemonte - Italia",
    "saturation_score": 57.0
  },
  {
    "rank": 9,
    "entity": "macchia volto papa francesco",
    "discover_score": 0.8932996990699402,
    "score_1h": 0.0,
    "score_4h": 0.3209451144474526,
    "score_7d": 2.337278106508876,
    "extracted_entities": "Macchia - Volto - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "festa della repubblica",
    "discover_score": 0.7865026776411999,
    "score_1h": 1.6982758620689655,
    "score_4h": 1.7584033613445378,
    "score_7d": 2.1834319526627217,
    "extracted_entities": "Festa della Repubblica - Italia - Celebrazione - 2 giugno - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 34,
    "entity": "manifestazione 25 aprile roma",
    "discover_score": 0.7729292127035648,
    "score_1h": 1.8362068965517242,
    "score_4h": 0.20588235294117646,
    "score_7d": 2.5887573964497044,
    "extracted_entities": "Manifestazione - 25 aprile - Roma - Festa della Liberazione - Eventi",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "santo del giorno",
    "discover_score": 0.7626065111978353,
    "score_1h": 9.232758620689655,
    "score_4h": 1.2794117647058822,
    "score_7d": 1.9171597633136095,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 27.0
  },
  {
    "rank": 6,
    "entity": "vardy",
    "discover_score": 0.6276548718345593,
    "score_1h": 3.7844827586206895,
    "score_4h": 1.2079831932773109,
    "score_7d": 1.2071005917159765,
    "extracted_entities": "Jamie Vardy - Calciatore - Premier League - Leicester City - Inghilterra",
    "saturation_score": 75.0
  },
  {
    "rank": 27,
    "entity": "twente - psv eindhoven",
    "discover_score": 0.5885375626013207,
    "score_1h": 1.3275862068965518,
    "score_4h": 0.592436974789916,
    "score_7d": 1.727810650887574,
    "extracted_entities": "Twente - PSV Eindhoven - Calcio - Eredivisie",
    "saturation_score": 2.0
  },
  {
    "rank": 49,
    "entity": "chef locatelli",
    "discover_score": 0.5636487829199467,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.657563025210084,
    "score_7d": 1.8047337278106508,
    "extracted_entities": "Chef - Locatelli - Cucina - Ristorazione",
    "saturation_score": 4.0
  },
  {
    "rank": 8,
    "entity": "margot simond",
    "discover_score": 0.47445157452682823,
    "score_1h": 4.879310344827586,
    "score_4h": 0.6890756302521008,
    "score_7d": 0.9763313609467456,
    "extracted_entities": "Margot Simond",
    "saturation_score": 96.0
  },
  {
    "rank": 40,
    "entity": "crosetto",
    "discover_score": 0.4087013896534185,
    "score_1h": 12.112068965517242,
    "score_4h": 2.207983193277311,
    "score_7d": 0.7218934911242603,
    "extracted_entities": "Guido Crosetto - Politica Italiana - Governo Italiano",
    "saturation_score": 10.0
  },
  {
    "rank": 48,
    "entity": "terremoto campi flegrei",
    "discover_score": 0.39641285290591205,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3802521008403361,
    "score_7d": 1.195266272189349,
    "extracted_entities": "Terremoto - Campi Flegrei - Sismicità - Vulcanismo - Italia",
    "saturation_score": 57.0
  },
  {
    "rank": 23,
    "entity": "vladimir putin",
    "discover_score": 0.3822464445884176,
    "score_1h": 0.7844827586206896,
    "score_4h": 0.18487394957983194,
    "score_7d": 1.0355029585798816,
    "extracted_entities": "Vladimir Putin - Politica russa - Presidente della Russia",
    "saturation_score": 23.0
  },
  {
    "rank": 36,
    "entity": "until dawn film",
    "discover_score": 0.3780932564221781,
    "score_1h": 0.0,
    "score_4h": 0.25,
    "score_7d": 1.0946745562130178,
    "extracted_entities": "Until Dawn - Film - Horror - Videogioco - Supermassive Games",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "manifestazione 25 aprile milano",
    "discover_score": 0.3686376760232568,
    "score_1h": 3.267241379310345,
    "score_4h": 0.7752100840336135,
    "score_7d": 0.7307692307692307,
    "extracted_entities": "Manifestazione - 25 aprile - Milano - Festa della Liberazione",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "che festa è il 25 aprile",
    "discover_score": 0.3566790485534721,
    "score_1h": 2.103448275862069,
    "score_4h": 0.3172268907563025,
    "score_7d": 0.9408284023668639,
    "extracted_entities": "Festa della Liberazione - Italia - 25 aprile - Seconda Guerra Mondiale - Resistenza Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "referendum 8 e 9 giugno",
    "discover_score": 0.3021220888164999,
    "score_1h": 2.689655172413793,
    "score_4h": 0.44117647058823534,
    "score_7d": 0.6538461538461539,
    "extracted_entities": "Referendum - 8 giugno - 9 giugno",
    "saturation_score": 25.0
  },
  {
    "rank": 45,
    "entity": "anna kalinskaya",
    "discover_score": 0.26833265709467385,
    "score_1h": 0.0,
    "score_4h": 0.33263598326359833,
    "score_7d": 0.6538461538461539,
    "extracted_entities": "Anna Kalinskaya - Tennis - Giocatrice",
    "saturation_score": 9.0
  },
  {
    "rank": 50,
    "entity": "superenalotto 24 aprile 2025",
    "discover_score": 0.2537934732510065,
    "score_1h": 0.9655172413793104,
    "score_4h": 0.7080623044196758,
    "score_7d": 0.5059171597633136,
    "extracted_entities": "Superenalotto - 24 aprile 2025 - Estrazione - Jackpot - Numeri vincenti",
    "saturation_score": 4.0
  },
  {
    "rank": 24,
    "entity": "sonego",
    "discover_score": 0.24931174082119684,
    "score_1h": 0.7241379310344828,
    "score_4h": 0.31292851868780985,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Lorenzo Sonego - Tennis - ATP Tour",
    "saturation_score": 288.0
  },
  {
    "rank": 30,
    "entity": "vancouver whitecaps - inter miami",
    "discover_score": 0.21993156485591522,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.4289940828402367,
    "extracted_entities": "Vancouver Whitecaps - Inter Miami - Partita di calcio - Major League Soccer",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "federico zampaglione",
    "discover_score": 0.21723749024582228,
    "score_1h": 3.5344827586206895,
    "score_4h": 0.39495798319327735,
    "score_7d": 0.3994082840236686,
    "extracted_entities": "Federico Zampaglione - Musica - Tiromancino - Cantautore - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "roberto parli",
    "discover_score": 0.16466052067056092,
    "score_1h": 0.0,
    "score_4h": 0.17016806722689076,
    "score_7d": 0.22781065088757396,
    "extracted_entities": "Roberto Parli",
    "saturation_score": 10.0
  },
  {
    "rank": 46,
    "entity": "francesco ambrosoli",
    "discover_score": 0.14838137786967556,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.21791603670757004,
    "score_7d": 0.15976331360946747,
    "extracted_entities": "Francesco Ambrosoli",
    "saturation_score": 8.0
  },
  {
    "rank": 51,
    "entity": "sandro pertini",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "de bruyne",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "1 maggio",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "mattarella a genova",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "pàpa francesco",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "vingegaard",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "coppa del re",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "2 giugno",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "costanza caracciolo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cervia",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "matteo arnaldi",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "antonio pappalardo",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "club brugge - union sg",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "rcb vs rr",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "mad max fury road",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "roberto bolle",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "mattia bellucci",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "reggia di caserta",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "seconda guerra mondiale",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "acconti irpef 2025",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "federico cina",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "nepal",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "tomba papa francesco",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "leganés - girona",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "marsica",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "foto 25 aprile",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "cocciaretto",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "giulia salemi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "vaccinations",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "lube volley",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "vaccines",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "veronica gentili",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "netflix down",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "traffico autostrade",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "melania trump",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "anthony hopkins",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "immunizations",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "osasuna - siviglia",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "antonio albanese",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "francesca chillemi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "the accountant 2",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "mad max",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "lahore qalandars vs peshawar zalmi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "lucia bronzetti",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "belen",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "paola cortellesi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "you stagione 5",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "mc donald",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "samanta togni",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "al pacino",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "coco gauff",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "jennifer beals",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "you serie",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "diletta leotta",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "de lorenzo vitalizio",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "italia 1",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "salvatore borsellino",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "generali",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "mogol",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "conclave streaming",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "dallinga",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "alex eala",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "cuneo volley",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "saputo",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "joão fonseca",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "teresa vergalli",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "atletico madrid",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "jackson rodriguez",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "antonio rossi",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "tether",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "michela ponzani",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "pablo escobar",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "india pakistan",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "shade",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "papa francesco conclave",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "marco maddaloni",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "open madrid",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "iga świątek",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "bronzetti oggi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "real betis vs valladolid",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "zac efron",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "scisma",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "giulia de lellis",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "luis miguel",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "cfr cluj - farul costanza",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "alisha lehmann",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "francesco segato",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "pokemon pocket nuova espansione",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "ash film",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "andor",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "tallon griekspoor",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "ryanair",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "luca argentero",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "giovanni muciaccia",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "kathmandu",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "keanu reeves",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "luca casarini",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "estremadura",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "madison keys",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "mckenna grace",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "stefano de martino",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "milan bologna",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "vaibhav suryavanshi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "maddaloni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "nba risultati",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "tropea",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "mirra andreeva",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "modica",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "millionday",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "x",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "ortisei",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "elmer møller",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "tesla",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "torinotoday",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "luana uomini e donne",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "anticipazioni sesta puntata serale amici",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "asif ali",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "k2",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "treviso today",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "city hall",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "joe bastianich",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "messico",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "wilma goich",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "tina cipollari",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "david thomas",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "sallusti",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "bagna cauda",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "gene hackman",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "liliana segre",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "nikolov",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "mestre",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "pupi avati",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "daniele mocellin",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "maria corleone",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "decreto bollette 2025",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "john wayne",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "miretti",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "robert de niro",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "anastasija sevastova",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "carofiglio",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "tacchinardi",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "beppe convertini",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "ricci",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "etoile serie tv",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "nba",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "riserva indiana",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "cacciatorpediniere",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "alessandro borghese",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "dacia maraini",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "giaele de donà",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "4chan",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "modena",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "tibet",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "cutro",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "senegal",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "lamon",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "matteo gigante",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "pier luigi pizzaballa",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "lorde",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-25 08:16:41",
  "trends_count": 210,
  "top_score": 14.406895018349537,
  "runtime_minutes": 4.441205294926961,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle profezie di oggi, il timore di temporali e il riecheggiare delle memorie storiche invitano la nazione alla riflessione. La Festa della Liberazione del 25 aprile domina le ricerche, con un fervore che si manifesta in commemorazioni e manifestazioni, evidenziando il desiderio di engagement con il passato storico. Contemporaneamente, la furia dell'allerta meteo risveglia la curiosità meteorologica, guidata da anticipazioni atmosferiche.\n\nGli esploratori digitali della conoscenza farebbero bene a considerare la parola chiave \"allerta temporale\" (#3). La bassissima saturazione associata a un buon Discover Score suggerisce nuove narrazioni che possono sedurre chi cerca conforto dalle intemperie. Anche la commemorazione del 25 aprile nel contesto di eventi culturali e riaperture di musei (#26) promette un potenziale di scoperta, evidenziando una sete di cultura che sfida la pioggia di risultati comuni.\n\nAttenzione, tuttavia, a chi brama l'influenza di \"25 aprile 2025\" (#1), poiché la saturazione narrativa minaccia di sommergere efficacemente nuovi tentativi di contenuto. La creazione di contenuti deve oscillare tra il riconoscerne il passato e il garantire imprevedibilità, per affascinare l'algoritmo. Siate creativi, sfruttate le nicchie, e sfidate le convenzioni!"
};
