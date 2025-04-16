const trendData = [
  {
    "rank": 1,
    "entity": "sara curtis",
    "discover_score": 11.480356710953279,
    "score_1h": 33.172413793103445,
    "score_4h": 23.753058964171444,
    "score_7d": 7.1923076923076925,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 616.0
  },
  {
    "rank": 21,
    "entity": "champions league",
    "discover_score": 7.216939839847705,
    "score_1h": 33.3448275862069,
    "score_4h": 46.063025210084035,
    "score_7d": 7.63905325443787,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 1680.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 5.445204969691841,
    "score_1h": 4.7844827586206895,
    "score_4h": 15.350840336134453,
    "score_7d": 5.991124260355029,
    "extracted_entities": "Aston Villa - PSG - Calcio - Squadre di calcio - Partita",
    "saturation_score": 326.0
  },
  {
    "rank": 2,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 4.9286566363628594,
    "score_1h": 1.8706896551724137,
    "score_4h": 5.300420168067227,
    "score_7d": 6.6420118343195265,
    "extracted_entities": "Borussia Dortmund - Barcellona - Calcio - Partita - Champions League",
    "saturation_score": 117.0
  },
  {
    "rank": 10,
    "entity": "bialetti",
    "discover_score": 4.837358307254051,
    "score_1h": 17.370689655172413,
    "score_4h": 20.903361344537814,
    "score_7d": 6.408284023668639,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 627.0
  },
  {
    "rank": 43,
    "entity": "barcelona",
    "discover_score": 4.714231069284399,
    "score_1h": 18.939655172413794,
    "score_4h": 25.069529904011816,
    "score_7d": 8.384615384615385,
    "extracted_entities": "Barcellona - Spagna - Turismo - Calcio - Cultura",
    "saturation_score": 261.0
  },
  {
    "rank": 33,
    "entity": "psg",
    "discover_score": 4.338957320135967,
    "score_1h": 18.387931034482758,
    "score_4h": 25.233193277310924,
    "score_7d": 6.784023668639053,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Champions League - Lionel Messi",
    "saturation_score": 1400.0
  },
  {
    "rank": 26,
    "entity": "inps online",
    "discover_score": 4.1785237739375365,
    "score_1h": 0.0,
    "score_4h": 1.4243697478991597,
    "score_7d": 11.928994082840237,
    "extracted_entities": "INPS - Servizi online - Previdenza sociale",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "sara errani",
    "discover_score": 3.4428572266177877,
    "score_1h": 18.198275862068964,
    "score_4h": 25.471669420906437,
    "score_7d": 2.455621301775148,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 46,
    "entity": "carlos alcaraz",
    "discover_score": 3.1481501031564227,
    "score_1h": 0.0,
    "score_4h": 0.13637881931015083,
    "score_7d": 10.57396449704142,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna",
    "saturation_score": 28.0
  },
  {
    "rank": 49,
    "entity": "borussia dortmund",
    "discover_score": 2.534209748063328,
    "score_1h": 3.603448275862069,
    "score_4h": 5.746545480116733,
    "score_7d": 7.239644970414201,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 168.0
  },
  {
    "rank": 30,
    "entity": "new yorker",
    "discover_score": 2.0711947903219006,
    "score_1h": 0.0,
    "score_4h": 1.2637917091522803,
    "score_7d": 6.426035502958579,
    "extracted_entities": "New Yorker - Rivista - Cultura - Giornalismo - Stati Uniti",
    "saturation_score": 1.0
  },
  {
    "rank": 17,
    "entity": "dove vedere inter bayern",
    "discover_score": 2.0484527336283955,
    "score_1h": 2.456896551724138,
    "score_4h": 3.2120178615379205,
    "score_7d": 5.20414201183432,
    "extracted_entities": "Inter - Bayern - Partita - Streaming - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 12,
    "entity": "alexander zverev",
    "discover_score": 2.021884481302754,
    "score_1h": 26.189655172413794,
    "score_4h": 13.47689075630252,
    "score_7d": 2.2928994082840237,
    "extracted_entities": "Alexander Zverev - Tennis - ATP - Giocatore di tennis - Sport",
    "saturation_score": 8.0
  },
  {
    "rank": 4,
    "entity": "spotify down",
    "discover_score": 1.7419537294283118,
    "score_1h": 33.224137931034484,
    "score_4h": 19.747899159663866,
    "score_7d": 0.22189349112426038,
    "extracted_entities": "Spotify - Problemi tecnici - Servizio interrotto",
    "saturation_score": 48.0
  },
  {
    "rank": 5,
    "entity": "terremoto oggi",
    "discover_score": 1.3968149592284895,
    "score_1h": 3.6551724137931036,
    "score_4h": 10.468724728385078,
    "score_7d": 0.9467455621301775,
    "extracted_entities": "Terremoto - Oggi - Eventi sismici",
    "saturation_score": 8.0
  },
  {
    "rank": 9,
    "entity": "spotify non funziona",
    "discover_score": 1.1771912037221162,
    "score_1h": 1.2327586206896552,
    "score_4h": 9.441176470588236,
    "score_7d": 0.9467455621301775,
    "extracted_entities": "Spotify - Problemi tecnici - Streaming musicale",
    "saturation_score": 4.0
  },
  {
    "rank": 50,
    "entity": "champions league oggi",
    "discover_score": 1.1668030174110375,
    "score_1h": 0.0,
    "score_4h": 0.2647058823529412,
    "score_7d": 4.1982248520710055,
    "extracted_entities": "Champions League - Partite - Oggi - Calcio - UEFA",
    "saturation_score": 5.0
  },
  {
    "rank": 25,
    "entity": "luciano darderi",
    "discover_score": 1.0455695485186516,
    "score_1h": 0.0,
    "score_4h": 6.840336134453782,
    "score_7d": 1.6390532544378698,
    "extracted_entities": "Luciano Darderi - Tennis - Giocatore",
    "saturation_score": 8.0
  },
  {
    "rank": 42,
    "entity": "uefa champions league",
    "discover_score": 0.952689512686836,
    "score_1h": 0.2672413793103448,
    "score_4h": 0.16176470588235295,
    "score_7d": 3.3520710059171597,
    "extracted_entities": "UEFA - Champions League - Calcio - Torneo - Europa",
    "saturation_score": 34.0
  },
  {
    "rank": 11,
    "entity": "cina aerei boeing",
    "discover_score": 0.9389641174979703,
    "score_1h": 2.2844827586206895,
    "score_4h": 1.8130252100840334,
    "score_7d": 2.168639053254438,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "dortmund vs barcelona",
    "discover_score": 0.9309471894699866,
    "score_1h": 0.0,
    "score_4h": 0.3361344537815126,
    "score_7d": 3.0828402366863905,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 2.0
  },
  {
    "rank": 6,
    "entity": "ettore bassi",
    "discover_score": 0.792557670525031,
    "score_1h": 5.637931034482759,
    "score_4h": 4.609243697478991,
    "score_7d": 0.8431952662721893,
    "extracted_entities": "Ettore Bassi - Attore - Televisione - Teatro",
    "saturation_score": 46.0
  },
  {
    "rank": 16,
    "entity": "rocco siffredi iene",
    "discover_score": 0.6651618946266482,
    "score_1h": 0.5775862068965517,
    "score_4h": 1.5893780106184734,
    "score_7d": 1.547337278106509,
    "extracted_entities": "Rocco Siffredi - Le Iene - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "antonella elia",
    "discover_score": 0.6436267857014135,
    "score_1h": 2.663793103448276,
    "score_4h": 3.57563025210084,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Antonella Elia - Personaggio televisivo - Italia",
    "saturation_score": 7.0
  },
  {
    "rank": 13,
    "entity": "stoccarda open",
    "discover_score": 0.5842361905147992,
    "score_1h": 1.3362068965517242,
    "score_4h": 2.149159663865546,
    "score_7d": 1.076923076923077,
    "extracted_entities": "Stoccarda - Open - Tennis - Torneo - Germania",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "warriors - grizzlies",
    "discover_score": 0.5740961460269047,
    "score_1h": 0.0,
    "score_4h": 0.06722689075630252,
    "score_7d": 1.8431952662721893,
    "extracted_entities": "Warriors - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "ben shelton",
    "discover_score": 0.5464379566858991,
    "score_1h": 0.0,
    "score_4h": 0.3042438732815302,
    "score_7d": 1.695266272189349,
    "extracted_entities": "Ben Shelton - Tennis - Giocatore",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "presidente mattarella ricoverato",
    "discover_score": 0.44979880135373124,
    "score_1h": 0.19827586206896552,
    "score_4h": 4.6953605710066455,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Presidente Mattarella - Ricovero - Salute",
    "saturation_score": 48.0
  },
  {
    "rank": 35,
    "entity": "gianni sperti",
    "discover_score": 0.4425792450365986,
    "score_1h": 0.0,
    "score_4h": 2.7271808304911924,
    "score_7d": 0.6952662721893491,
    "extracted_entities": "Gianni Sperti - Personaggio televisivo - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "don ciro panigara",
    "discover_score": 0.4163011303305582,
    "score_1h": 0.0,
    "score_4h": 0.4642857142857143,
    "score_7d": 1.0443786982248522,
    "extracted_entities": "Don Ciro Panigara",
    "saturation_score": 63.0
  },
  {
    "rank": 27,
    "entity": "johnny depp",
    "discover_score": 0.41581565967585254,
    "score_1h": 0.0,
    "score_4h": 1.5714285714285714,
    "score_7d": 0.8284023668639053,
    "extracted_entities": "Johnny Depp - Attore - Hollywood",
    "saturation_score": 46.0
  },
  {
    "rank": 15,
    "entity": "dc vs rr",
    "discover_score": 0.41075975150583716,
    "score_1h": 5.129310344827586,
    "score_4h": 2.2560651875813087,
    "score_7d": 0.5236686390532544,
    "extracted_entities": "DC Comics - Royal Rumble - Wrestling - Supereroi - Intrattenimento",
    "saturation_score": 2.0
  },
  {
    "rank": 37,
    "entity": "mirra andreeva",
    "discover_score": 0.36682211193514197,
    "score_1h": 0.0,
    "score_4h": 0.569327731092437,
    "score_7d": 0.9674556213017751,
    "extracted_entities": "Mirra Andreeva - Tennis - Giocatrice",
    "saturation_score": 4.0
  },
  {
    "rank": 36,
    "entity": "holger rune",
    "discover_score": 0.3026239470742849,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.0777310924369745,
    "score_7d": 0.3254437869822485,
    "extracted_entities": "Holger Rune - Tennis - Giocatore - ATP - Classifica",
    "saturation_score": 5.0
  },
  {
    "rank": 14,
    "entity": "piero pelù",
    "discover_score": 0.2937361170930449,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9726890756302522,
    "score_7d": 0.4201183431952663,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Italia - Rock",
    "saturation_score": 45.0
  },
  {
    "rank": 48,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.2710203897178098,
    "score_1h": 0.0,
    "score_4h": 1.7184873949579833,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "Giuseppe - Uomini e Donne - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "biden",
    "discover_score": 0.2675414480007455,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.8578372771702824,
    "score_7d": 0.47337278106508873,
    "extracted_entities": "Joe Biden - Presidente degli Stati Uniti - Politica USA",
    "saturation_score": 290.0
  },
  {
    "rank": 39,
    "entity": "terremoto in tempo reale",
    "discover_score": 0.26451477483766944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.7071005917159763,
    "extracted_entities": "Terremoto - Tempo reale - Monitoraggio - Allerta - Sismologia",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "cristina uomini e donne",
    "discover_score": 0.24727102003060195,
    "score_1h": 1.5948275862068966,
    "score_4h": 1.0147058823529411,
    "score_7d": 0.31065088757396453,
    "extracted_entities": "Cristina - Uomini e Donne - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "joao pedro",
    "discover_score": 0.2343627897137564,
    "score_1h": 0.0,
    "score_4h": 0.7920168067226891,
    "score_7d": 0.3875739644970414,
    "extracted_entities": "Joao Pedro - Calciatore - Brasile - Serie A - Cagliari",
    "saturation_score": 3.0
  },
  {
    "rank": 18,
    "entity": "aaron boupendza",
    "discover_score": 0.2277378216310662,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9621848739495797,
    "score_7d": 0.21893491124260353,
    "extracted_entities": "Aaron Boupendza",
    "saturation_score": 27.0
  },
  {
    "rank": 28,
    "entity": "nadia uomini e donne",
    "discover_score": 0.22412350717482007,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.5588235294117646,
    "score_7d": 0.34911242603550297,
    "extracted_entities": "Nadia - Uomini e Donne - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "francesca manzini",
    "discover_score": 0.20348363670966116,
    "score_1h": 0.0,
    "score_4h": 0.6911764705882353,
    "score_7d": 0.2692307692307692,
    "extracted_entities": "Francesca Manzini - Personaggio pubblico - Intrattenimento",
    "saturation_score": 6.0
  },
  {
    "rank": 20,
    "entity": "4chan",
    "discover_score": 0.18932872770709408,
    "score_1h": 0.0,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.1715976331360947,
    "extracted_entities": "4chan - Forum online - Anonimato - Cultura internet - Meme",
    "saturation_score": 10.0
  },
  {
    "rank": 38,
    "entity": "fuochi d artificio trama",
    "discover_score": 0.1837631003551715,
    "score_1h": 0.0,
    "score_4h": 0.3214285714285714,
    "score_7d": 0.27218934911242604,
    "extracted_entities": "Fuochi d'artificio - Trama - Film - Storia",
    "saturation_score": 8.0
  },
  {
    "rank": 23,
    "entity": "magdalena fręch",
    "discover_score": 0.1734232778368299,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.08823529411764706,
    "score_7d": 0.242603550295858,
    "extracted_entities": "Magdalena Fręch - Tennis - Giocatrice",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "ada alberti",
    "discover_score": 0.16532422077466674,
    "score_1h": 0.0,
    "score_4h": 1.0126050420168067,
    "score_7d": 0.04733727810650888,
    "extracted_entities": "Ada Alberti",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "ofelia passaponti",
    "discover_score": 0.1233064042759204,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.25840336134453784,
    "score_7d": 0.04437869822485207,
    "extracted_entities": "Ofelia Passaponti",
    "saturation_score": 7.0
  },
  {
    "rank": 44,
    "entity": "nada cella",
    "discover_score": 0.11693809357201763,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.07100591715976332,
    "extracted_entities": "Nada Cella - Omicidio - Chiavari - Indagine",
    "saturation_score": 212.0
  },
  {
    "rank": 51,
    "entity": "real madrid arsenal",
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
    "entity": "magic - hawks",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "taobao",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "nvidia",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "savigliano",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "allerta vento",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "montella",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "davide barzan",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "eurojackpot",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "fratelli mattei",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "tassi bce",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "sigfrido ranucci",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "topo gigio",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "paolini oggi",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "è sempre mezzogiorno",
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
    "entity": "enrico brignano",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "child care",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "meloni",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "chris martin",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "msc",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "uefa",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "botic van de zandschulp",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "un giorno in pretura",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "amato",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "dortmund – barcelone",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "nuria brancaccio",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "antonella fiordelisi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "alessandra amoroso",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "ozempic",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "la sicilia",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "gene hackman",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "luca barbarossa",
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
    "entity": "ragusa news",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "strettoweb",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "mkhitaryan",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "szczesny",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "camilla rosatello",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "the elder scrolls iv oblivion",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "الطقس",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "champions league 2025",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "eva lys",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "tempostretto",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "lahore qalandars vs karachi kings",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "bersani",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "axios",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "birmingham",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "meteo verona",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "daniele de santis",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "barzan",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "il turco serie",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "diego della valle",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "danilo bertazzi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "golden state warriors",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "jane fonda",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "reggiana - málaga",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "ezio mauro",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "trani",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "unica",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "livorno",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "bernarda pera",
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
    "entity": "sorrento avellino",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "presencias film",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "barcelona vs",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "silvia salis",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "paola cortellesi",
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
    "entity": "antonio albanese",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "pag",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "michele bravi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "mauro corona",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "briatore",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "palagano",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "meteo 3b",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "utrecht",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "carla signoris",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "groenlandia",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "flavio briatore",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "hakimi",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "balestrate",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "uova alla jova",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "mirna mastronardi",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "rocco casalino",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "jennifer lopez",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "champions league classifica",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "asensio",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "wind warning",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "in",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "etna",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "elly schlein",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "gambe zambrotta",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "bianca berlinguer",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "marquinhos",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "ultime notizie",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "partite stasera",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "colosseo",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "marco liorni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "nicholas kohl",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "mission impossible",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "meteo trento",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "gardaland",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "rashford",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "paris aston villa",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "buongiorno buon mercoledì 16 aprile",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "nuno mendes",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "harry potter",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "gazzetta del sud",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "nba playoff",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "koora",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "paris",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "fabio capello",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "gerard martín",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "umberto tozzi",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "enrico mattei",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "berlusconi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "ing",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "stefano massini",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "il vibonese",
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
    "entity": "tarjeta roja",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "achraf hakimi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "cosenza",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "quinn tennis",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "jule niemeier",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "xavier bartlett",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "dedura-palomero, diego",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "alycia parks",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "francesco sarcina",
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
  "timestamp": "2025-04-16 14:52:02",
  "trends_count": 190,
  "top_score": 11.480356710953279,
  "runtime_minutes": 12.658214823404949,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Ascoltate, oh navigatori della rete: i mondi di sport, intrattenimento e personalità iconiche sembrano dominare la narrazione del momento. Come astri in un firmamento digitale, \"Champions League\" e partite di rilievo quali \"Aston Villa - PSG\" illuminano il cosmo del calcio con intensa visibilità e interesse recente, sebbene saturati dalla competizione. Allo stesso modo, le figure che si muovono nei reami del tennis e dell'intrattenimento, come Sara Errani e Sara Curtis, sono stelle emergenti nel panorama delle tendenze, con potenziali temi di scoperta.\n\nAttraverso il caleidoscopio di Google Discover, un'opportunità si cela nel trend di \"Sara Curtis\" (#1), dove il basso tasso di saturazione incontra un robusto interesse recente, promettendo visibilità e originalità. Altresì, \"Bialetti\" (#5) risuona come un classico moderno, equilibratamente posizionato con un giusto mix di interesse e copertura.\n\nTuttavia, camminate con cautela attraverso le vette altissime della \"Champions League\" (#2), la cui preponderante saturazione minaccia di annullare il clamore dell'ultimo istante. Infine, chi cerca di plasmare contenuti, orienti la propria visione verso gli angoli meno affollati, là dove l'interesse è crescente ma ancora non troppo coperto to be heard."
};
