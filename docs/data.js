const trendData = [
  {
    "rank": 22,
    "entity": "champions",
    "discover_score": 8.84540979024879,
    "score_1h": 72.12068965517241,
    "score_4h": 57.40756302521008,
    "score_7d": 8.710059171597633,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 3150.0
  },
  {
    "rank": 47,
    "entity": "barcelona",
    "discover_score": 5.846366895805284,
    "score_1h": 32.93103448275862,
    "score_4h": 23.84453781512605,
    "score_7d": 11.955621301775148,
    "extracted_entities": "Barcellona - Città - Spagna - Turismo - Calcio",
    "saturation_score": 196.0
  },
  {
    "rank": 8,
    "entity": "bialetti",
    "discover_score": 5.59538437847746,
    "score_1h": 38.51724137931035,
    "score_4h": 23.84453781512605,
    "score_7d": 6.665680473372781,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 539.0
  },
  {
    "rank": 1,
    "entity": "sara curtis",
    "discover_score": 4.104378437508868,
    "score_1h": 51.76724137931035,
    "score_4h": 36.897058823529406,
    "score_7d": 0.2958579881656805,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 632.0
  },
  {
    "rank": 2,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 4.035979620789214,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.8214285714285714,
    "score_7d": 6.5325443786982245,
    "extracted_entities": "Borussia Dortmund - Barcellona - Calcio - Partita - Champions League",
    "saturation_score": 273.0
  },
  {
    "rank": 7,
    "entity": "inter bayern dove vederla",
    "discover_score": 3.856165843745385,
    "score_1h": 49.353448275862064,
    "score_4h": 15.472689075630253,
    "score_7d": 5.05621301775148,
    "extracted_entities": "Inter - Bayern - Diretta TV - Streaming - Partita di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 3.8217019414269813,
    "score_1h": 7.681034482758621,
    "score_4h": 5.155462184873949,
    "score_7d": 5.911242603550296,
    "extracted_entities": "Aston Villa - PSG - Calcio - Partita - Club",
    "saturation_score": 518.0
  },
  {
    "rank": 6,
    "entity": "spotify down",
    "discover_score": 3.415445734517872,
    "score_1h": 0.7586206896551724,
    "score_4h": 34.91386554621849,
    "score_7d": 0.8372781065088757,
    "extracted_entities": "Spotify - Down - Problemi tecnici - Servizio streaming",
    "saturation_score": 74.0
  },
  {
    "rank": 15,
    "entity": "stefanos tsitsipas",
    "discover_score": 2.989780204600664,
    "score_1h": 4.508620689655173,
    "score_4h": 7.397058823529412,
    "score_7d": 6.36094674556213,
    "extracted_entities": "Stefanos Tsitsipas - Tennis - ATP - Grecia - Giocatore di tennis",
    "saturation_score": 6.0
  },
  {
    "rank": 25,
    "entity": "carini",
    "discover_score": 2.6182600502864726,
    "score_1h": 10.456896551724139,
    "score_4h": 1.7626050420168067,
    "score_7d": 7.633136094674557,
    "extracted_entities": "Carini - Sicilia - Comune - Turismo - Storia",
    "saturation_score": 75.0
  },
  {
    "rank": 37,
    "entity": "psg",
    "discover_score": 2.583354887031414,
    "score_1h": 23.060344827586206,
    "score_4h": 7.123949579831933,
    "score_7d": 6.6360946745562135,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico",
    "saturation_score": 1410.0
  },
  {
    "rank": 44,
    "entity": "uefa champions league",
    "discover_score": 2.3131307241588686,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.6848739495798319,
    "score_7d": 7.792899408284024,
    "extracted_entities": "UEFA - Champions League - Calcio - Torneo - Europa",
    "saturation_score": 60.0
  },
  {
    "rank": 20,
    "entity": "alexander zverev",
    "discover_score": 2.1855233563680305,
    "score_1h": 8.991379310344827,
    "score_4h": 14.852941176470587,
    "score_7d": 2.866863905325444,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Giocatore di tennis - Classifica ATP",
    "saturation_score": 7.0
  },
  {
    "rank": 41,
    "entity": "inps online",
    "discover_score": 2.072989365165257,
    "score_1h": 0.9913793103448276,
    "score_4h": 2.476890756302521,
    "score_7d": 6.452662721893491,
    "extracted_entities": "INPS - Servizi online - Previdenza sociale",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "rocco siffredi iene",
    "discover_score": 2.0135141901776894,
    "score_1h": 1.793103448275862,
    "score_4h": 0.7457983193277311,
    "score_7d": 5.482248520710059,
    "extracted_entities": "Rocco Siffredi - Le Iene - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "sara errani",
    "discover_score": 1.9051220446531523,
    "score_1h": 15.974137931034482,
    "score_4h": 13.262605042016807,
    "score_7d": 1.8372781065088757,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 4,
    "entity": "terremoto oggi",
    "discover_score": 1.5657332241873205,
    "score_1h": 11.681034482758621,
    "score_4h": 11.766806722689076,
    "score_7d": 0.9230769230769231,
    "extracted_entities": "Terremoto - Oggi - Eventi sismici",
    "saturation_score": 8.0
  },
  {
    "rank": 36,
    "entity": "dortmund vs barcelona",
    "discover_score": 1.33669296851868,
    "score_1h": 0.0,
    "score_4h": 0.5609243697478992,
    "score_7d": 4.473372781065089,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "spotify non funziona",
    "discover_score": 1.1621417838770773,
    "score_1h": 0.45689655172413796,
    "score_4h": 11.86344537815126,
    "score_7d": 0.8846153846153846,
    "extracted_entities": "Spotify - Problemi tecnici - Streaming musicale",
    "saturation_score": 7.0
  },
  {
    "rank": 23,
    "entity": "gene hackman",
    "discover_score": 0.8937077294784352,
    "score_1h": 7.672413793103448,
    "score_4h": 2.5966386554621845,
    "score_7d": 2.1775147928994083,
    "extracted_entities": "Gene Hackman - Attore - Film - Hollywood - Carriera",
    "saturation_score": 77.0
  },
  {
    "rank": 11,
    "entity": "dc vs rr",
    "discover_score": 0.8490568846457129,
    "score_1h": 5.896551724137931,
    "score_4h": 5.827731092436975,
    "score_7d": 0.9408284023668639,
    "extracted_entities": "DC Comics - Royal Rumble - Wrestling - Supereroi - Intrattenimento",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "new yorker",
    "discover_score": 0.8190077219719405,
    "score_1h": 0.6206896551724138,
    "score_4h": 1.3487394957983194,
    "score_7d": 2.130177514792899,
    "extracted_entities": "New Yorker - Rivista - Cultura - Giornalismo - Stati Uniti",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "presidente mattarella ricoverato",
    "discover_score": 0.7321955632787417,
    "score_1h": 6.508620689655173,
    "score_4h": 3.0294117647058822,
    "score_7d": 0.9822485207100592,
    "extracted_entities": "Presidente Mattarella - Ricovero - Salute",
    "saturation_score": 61.0
  },
  {
    "rank": 32,
    "entity": "chris martin",
    "discover_score": 0.6782988818814757,
    "score_1h": 4.310344827586206,
    "score_4h": 1.0147058823529411,
    "score_7d": 1.997041420118343,
    "extracted_entities": "Chris Martin - Coldplay - Musica",
    "saturation_score": 238.0
  },
  {
    "rank": 31,
    "entity": "warriors - grizzlies",
    "discover_score": 0.6012693165954116,
    "score_1h": 0.0,
    "score_4h": 0.34663865546218486,
    "score_7d": 1.8875739644970415,
    "extracted_entities": "Warriors - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "ettore bassi",
    "discover_score": 0.5809321196678661,
    "score_1h": 1.0862068965517242,
    "score_4h": 4.61344537815126,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Ettore Bassi - Attore - Televisione - Cinema - Teatro",
    "saturation_score": 55.0
  },
  {
    "rank": 49,
    "entity": "antonella elia",
    "discover_score": 0.551223056060455,
    "score_1h": 0.6293103448275862,
    "score_4h": 2.1365546218487395,
    "score_7d": 1.3520710059171597,
    "extracted_entities": "Antonella Elia - Personaggio televisivo - Italia",
    "saturation_score": 5.0
  },
  {
    "rank": 50,
    "entity": "gianni sperti",
    "discover_score": 0.5290388114331379,
    "score_1h": 0.5431034482758621,
    "score_4h": 2.600840336134454,
    "score_7d": 1.1479289940828403,
    "extracted_entities": "Gianni Sperti - Personaggio televisivo - Opinionista - Italia - Uomini e Donne",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "cina aerei boeing",
    "discover_score": 0.5155850883126746,
    "score_1h": 2.0,
    "score_4h": 3.03781512605042,
    "score_7d": 0.834319526627219,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "real madrid arsenal dove vederla",
    "discover_score": 0.45204043516402115,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.5777310924369747,
    "score_7d": 1.1005917159763312,
    "extracted_entities": "Real Madrid - Arsenal - Partita - Dove vederla - Streaming",
    "saturation_score": 9.0
  },
  {
    "rank": 43,
    "entity": "ben shelton",
    "discover_score": 0.3573390200537812,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.6113445378151261,
    "score_7d": 0.9467455621301776,
    "extracted_entities": "Ben Shelton - Tennis - Giocatore",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "casper ruud",
    "discover_score": 0.3337777356069292,
    "score_1h": 0.0,
    "score_4h": 0.2668067226890756,
    "score_7d": 0.8579881656804734,
    "extracted_entities": "Casper Ruud - Tennis - Giocatore - Norvegia - ATP",
    "saturation_score": 5.0
  },
  {
    "rank": 14,
    "entity": "aaron boupendza",
    "discover_score": 0.29633661058163435,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.20168067226890757,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "Aaron Boupendza - Calciatore - Gabon - Al-Shabab - Süper Lig",
    "saturation_score": 30.0
  },
  {
    "rank": 42,
    "entity": "terremoto in tempo reale",
    "discover_score": 0.27134972568410254,
    "score_1h": 1.353448275862069,
    "score_4h": 0.15756302521008403,
    "score_7d": 0.7041420118343196,
    "extracted_entities": "Terremoto - Tempo reale - Monitoraggio - Allerta - Sismologia",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "johnny depp",
    "discover_score": 0.2601821932573077,
    "score_1h": 4.663793103448276,
    "score_4h": 2.245798319327731,
    "score_7d": 0.07100591715976332,
    "extracted_entities": "Johnny Depp - Attore - Hollywood",
    "saturation_score": 59.0
  },
  {
    "rank": 35,
    "entity": "magdalena fręch",
    "discover_score": 0.24998799553588685,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.7184873949579833,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Magdalena Fręch - Tennis - Giocatrice",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "islamabad united vs multan sultans",
    "discover_score": 0.2164037962825226,
    "score_1h": 0.0,
    "score_4h": 0.7542016806722689,
    "score_7d": 0.23076923076923075,
    "extracted_entities": "Islamabad United - Multan Sultans - Partita di cricket - Pakistan Super League",
    "saturation_score": 1.0
  },
  {
    "rank": 45,
    "entity": "tarvisio",
    "discover_score": 0.20597736813970455,
    "score_1h": 2.163793103448276,
    "score_4h": 0.98109243697479,
    "score_7d": 0.22189349112426035,
    "extracted_entities": "Tarvisio - Località turistica - Friuli Venezia Giulia - Montagna - Sci",
    "saturation_score": 31.0
  },
  {
    "rank": 26,
    "entity": "jasmine paolini",
    "discover_score": 0.19849831911370322,
    "score_1h": 0.7844827586206896,
    "score_4h": 0.31512605042016806,
    "score_7d": 0.29881656804733725,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 66.0
  },
  {
    "rank": 21,
    "entity": "iga świątek",
    "discover_score": 0.19192193428398102,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8298319327731093,
    "score_7d": 0.1331360946745562,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "cantabria",
    "discover_score": 0.18621026126360565,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.6491596638655462,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "Cantabria - Spagna - Turismo - Natura - Cultura",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "fuochi d artificio trama",
    "discover_score": 0.1771585611411656,
    "score_1h": 0.847457627118644,
    "score_4h": 0.4201680672268907,
    "score_7d": 0.22189349112426038,
    "extracted_entities": "Fuochi d'artificio - Trama - Film - Storia",
    "saturation_score": 4.0
  },
  {
    "rank": 29,
    "entity": "problemi intesa sanpaolo oggi",
    "discover_score": 0.17347754089017728,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.7121848739495797,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Intesa Sanpaolo - Problemi - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "mirra andreeva",
    "discover_score": 0.1659367832822589,
    "score_1h": 0.0,
    "score_4h": 0.09453781512605042,
    "score_7d": 0.27218934911242604,
    "extracted_entities": "Mirra Andreeva - Tennis - Giocatrice",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "errani oggi",
    "discover_score": 0.16487116896712778,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0420168067226891,
    "score_7d": 0.03550295857988166,
    "extracted_entities": "Errani - Oggi - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "piero pelù",
    "discover_score": 0.14391952842414132,
    "score_1h": 0.0,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Italia",
    "saturation_score": 43.0
  },
  {
    "rank": 34,
    "entity": "nora aunor",
    "discover_score": 0.14282227281650622,
    "score_1h": 0.0,
    "score_4h": 0.32142857142857145,
    "score_7d": 0.09171597633136096,
    "extracted_entities": "Nora Aunor - Attrice - Film filippini - Cultura filippina",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "holger rune",
    "discover_score": 0.138986238917352,
    "score_1h": 0.0,
    "score_4h": 0.4159663865546218,
    "score_7d": 0.07396449704142012,
    "extracted_entities": "Holger Rune - Tennis - Giocatore - ATP - Danimarca",
    "saturation_score": 6.0
  },
  {
    "rank": 33,
    "entity": "don ciro panigara",
    "discover_score": 0.1363256521310897,
    "score_1h": 0.0,
    "score_4h": 0.09243697478991597,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Don Ciro Panigara",
    "saturation_score": 71.0
  },
  {
    "rank": 30,
    "entity": "luciano darderi",
    "discover_score": 0.12225751830859956,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.05621301775147929,
    "extracted_entities": "Luciano Darderi - Tennis - Giocatore",
    "saturation_score": 8.0
  },
  {
    "rank": 51,
    "entity": "nada cella",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "pasqua",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "borussia dortmund",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "biden",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "aston villa vs psg",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "frech",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "taobao",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "francesca manzini",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "magic - hawks",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cristina uomini e donne",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "davide barzan",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "eurojackpot",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "nvidia",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "allerta vento",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "joao pedro",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "ada alberti",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "il turco",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nadia uomini e donne",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "enrico brignano",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "uefa",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "savigliano",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "paris saint germain",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "child care",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "topo gigio",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "un giorno in pretura",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "dortmund – barcelone",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "fratelli mattei",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "ofelia passaponti",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "è sempre mezzogiorno",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "antonella fiordelisi",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "montella",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "alessandra amoroso",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "sigfrido ranucci",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "rosy chin",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "ucl",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "la sicilia",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "ragusa news",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "amato",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "msc",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "luca barbarossa",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "ozempic",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "eva lys",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "الطقس",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "botic van de zandschulp",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "bersani",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tempostretto",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "birmingham",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "nuria brancaccio",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "3bmeteo",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "daniele de santis",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "szczesny",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "il turco serie",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "barzan",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "axios",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "ezio mauro",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "meteo verona",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "diego della valle",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "jane fonda",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "reggiana - málaga",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "danilo bertazzi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "trani",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "mkhitaryan",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "golden state warriors",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "bagnoli",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "buongiorno mercoledì 16 aprile",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "unica",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "presencias film",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "barcelona vs",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "silvia salis",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "الطقس غدًا",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "paola cortellesi",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "allerta meteo sardegna",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "antonio albanese",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "pag",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "michele bravi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "briatore",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "mauro corona",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "livorno",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "utrecht",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "bernarda pera",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "palagano",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "carla signoris",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "ansa",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "groenlandia",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "flavio briatore",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "hakimi",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "uova alla jova",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "mirna mastronardi",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "rocco casalino",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "sorrento avellino",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "jennifer lopez",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "champions league classifica",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "asensio",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "in",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "gambe zambrotta",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "elly schlein",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "bianca berlinguer",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "etna",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "marquinhos",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "wind warning",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "partite stasera",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "colosseo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "marco liorni",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "oblivion remastered",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "nicholas kohl",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "gardaland",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "mission impossible",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "regenwarnung",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "rashford",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "paris aston villa",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "harry potter",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "nuno mendes",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "meteo trento",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "koora",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "gazzetta del sud",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "paris",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "gerard martín",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "fabio capello",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "nba playoff",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "umberto tozzi",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "berlusconi",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "obama",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "stefano massini",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "giorgia meloni",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "ing",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "tarjeta roja",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "achraf hakimi",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "cosenza",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "il vibonese",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "rishad hossain",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "jule niemeier",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "laura siegemund",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "snai",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "igli tare",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "emma navarro",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-16 16:49:04",
  "trends_count": 190,
  "top_score": 8.84540979024879,
  "runtime_minutes": 4.500831822554271,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profezie di Oggi svelano un panorama dominato dal calcio, dalla musica e dagli eventi sismici. L'eco della Champions League risuona forte nei cuori calcistici, legando i destini dei club europei come il Borussia Dortmund e il Barcellona (#5) in epici scontri sportivi. La cultura musicale è scossa da voci divine, come quella di Chris Martin dei Coldplay, mentre Spotify combatte tempeste digitali (#8), costringendo i suoi seguaci a peregrinare verso la luce funzionale dello streaming.\n\nOpportunità scintillanti emergono per chi cavalca l'onda della curiosità verso la problematica tecnica di Spotify (#8), data la bassa saturazione e il fervente interesse recente. Un filo d'oro si intravede anche tra le nebbie del turismo spagnolo, con Barcellona (#2) che invita con la sua bassa saturazione a raccontare storie di calcio e cultura.\n\nTuttavia, veggenti prudenti dovranno diffidare delle illusioni del trend 'Champions' (#1), la cui saturazione è un oceano di voci in conflitto, mentre la salute del Presidente Mattarella (#23) potrebbe spegnersi rapidamente nella memoria collettiva.\n\nIn questo mondo di eventi passeggeri e passioni ardenti, chi svela non dimentichi che è la profondità e l'originalità delle storie a guidare l'attenzione digitale verso nuove scoperte."
};
