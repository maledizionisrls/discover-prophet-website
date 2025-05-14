const trendData = [
  {
    "rank": 1,
    "entity": "garlasco",
    "discover_score": 9.698507483138966,
    "score_1h": 36.31896551724138,
    "score_4h": 26.096638655462186,
    "score_7d": 5.488165680473373,
    "extracted_entities": "Garlasco - Omicidio - Chiara Poggi - Alberto Stasi",
    "saturation_score": 1400.0
  },
  {
    "rank": 20,
    "entity": "matera",
    "discover_score": 8.144660989803056,
    "score_1h": 14.577586206896552,
    "score_4h": 10.309623430962343,
    "score_7d": 17.828402366863905,
    "extracted_entities": "Matera - Basilicata - Turismo - Patrimonio UNESCO - Sassi di Matera",
    "saturation_score": 742.0
  },
  {
    "rank": 33,
    "entity": "allerta meteo",
    "discover_score": 6.502054198459089,
    "score_1h": 26.24137931034483,
    "score_4h": 21.02510460251046,
    "score_7d": 13.242603550295858,
    "extracted_entities": "Allerta meteo - Previsioni - Condizioni atmosferiche - Avvisi meteorologici",
    "saturation_score": 153.0
  },
  {
    "rank": 2,
    "entity": "lucio corsi eurovision",
    "discover_score": 4.7402331706975325,
    "score_1h": 17.78448275862069,
    "score_4h": 22.648535564853557,
    "score_7d": 2.9289940828402368,
    "extracted_entities": "Lucio Corsi - Eurovision",
    "saturation_score": 39.0
  },
  {
    "rank": 3,
    "entity": "pepe mujica",
    "discover_score": 3.4246010696063682,
    "score_1h": 7.9655172413793105,
    "score_4h": 14.255230125523013,
    "score_7d": 3.28698224852071,
    "extracted_entities": "Pepe Mujica - Politica - Uruguay - Presidente - Attivismo",
    "saturation_score": 560.0
  },
  {
    "rank": 5,
    "entity": "carlos alcaraz",
    "discover_score": 2.8088898451774016,
    "score_1h": 34.26724137931034,
    "score_4h": 12.17436974789916,
    "score_7d": 3.331360946745562,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 37.0
  },
  {
    "rank": 23,
    "entity": "rai 2 diretta",
    "discover_score": 2.6815807409610337,
    "score_1h": 14.086206896551724,
    "score_4h": 4.817991631799163,
    "score_7d": 6.866863905325443,
    "extracted_entities": "Rai 2 - Diretta - Streaming - Programmazione",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "tabellone atp roma 2025",
    "discover_score": 2.415883917119698,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7092050209205021,
    "score_7d": 8.224852071005918,
    "extracted_entities": "Tabellone - ATP - Roma - 2025 - Tennis",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "salvatore bagni",
    "discover_score": 2.320235554769208,
    "score_1h": 31.905172413793103,
    "score_4h": 16.851464435146443,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Salvatore Bagni - Calciatore - Commentatore Sportivo - Italia - Serie A",
    "saturation_score": 121.0
  },
  {
    "rank": 19,
    "entity": "bologna milan coppa italia",
    "discover_score": 2.0154545316546852,
    "score_1h": 0.9568965517241379,
    "score_4h": 3.6338912133891212,
    "score_7d": 5.121301775147929,
    "extracted_entities": "Bologna - Milan - Coppa Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "sinner papa",
    "discover_score": 1.9522870721853722,
    "score_1h": 14.879310344827585,
    "score_4h": 17.838912133891213,
    "score_7d": 1.2307692307692308,
    "extracted_entities": "Jannik Sinner - Papa Francesco - Tennis - Vaticano",
    "saturation_score": 3.0
  },
  {
    "rank": 13,
    "entity": "casper ruud",
    "discover_score": 1.577113734037278,
    "score_1h": 14.775862068965518,
    "score_4h": 6.859832635983263,
    "score_7d": 2.757396449704142,
    "extracted_entities": "Casper Ruud - Tennis - Giocatore - Norvegia - ATP Tour",
    "saturation_score": 8.0
  },
  {
    "rank": 7,
    "entity": "peyton stearns",
    "discover_score": 1.409225624208538,
    "score_1h": 1.5258620689655173,
    "score_4h": 0.3284518828451883,
    "score_7d": 3.526627218934911,
    "extracted_entities": "Peyton Stearns - Tennis - Giocatrice",
    "saturation_score": 31.0
  },
  {
    "rank": 9,
    "entity": "bonus giovani under 35 circolare inps",
    "discover_score": 1.0411945143181576,
    "score_1h": 2.1810344827586206,
    "score_4h": 0.6302521008403361,
    "score_7d": 2.662721893491124,
    "extracted_entities": "Bonus giovani - Under 35 - Circolare INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "sassuolo - frosinone",
    "discover_score": 1.0348507039597885,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.3410041841004184,
    "score_7d": 2.7810650887573964,
    "extracted_entities": "Sassuolo - Frosinone - Calcio - Serie A - Partita",
    "saturation_score": 51.0
  },
  {
    "rank": 49,
    "entity": "playoff serie b",
    "discover_score": 1.0281523551404497,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.10669456066945607,
    "score_7d": 3.727810650887574,
    "extracted_entities": "Playoff - Serie B - Calcio - Promozione - Campionato",
    "saturation_score": 40.0
  },
  {
    "rank": 29,
    "entity": "fabio fognini",
    "discover_score": 1.0199026684940937,
    "score_1h": 0.14655172413793102,
    "score_4h": 7.838912133891213,
    "score_7d": 1.3964497041420119,
    "extracted_entities": "Fabio Fognini - Tennis - ATP - Italia - Sport",
    "saturation_score": 5.0
  },
  {
    "rank": 6,
    "entity": "sampdoria serie c",
    "discover_score": 0.8462543817213207,
    "score_1h": 3.1120689655172415,
    "score_4h": 0.1297071129707113,
    "score_7d": 2.07396449704142,
    "extracted_entities": "Sampdoria - Serie C - Calcio - Campionato",
    "saturation_score": 3.0
  },
  {
    "rank": 16,
    "entity": "tommy cash",
    "discover_score": 0.8386116590849365,
    "score_1h": 0.603448275862069,
    "score_4h": 0.13598326359832635,
    "score_7d": 2.4940828402366866,
    "extracted_entities": "Tommy Cash - Musica - Artista",
    "saturation_score": 247.0
  },
  {
    "rank": 37,
    "entity": "verbania",
    "discover_score": 0.8258496794740658,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.9853556485355649,
    "score_7d": 2.600591715976331,
    "extracted_entities": "Verbania - Piemonte - Lago Maggiore",
    "saturation_score": 230.0
  },
  {
    "rank": 39,
    "entity": "jack draper",
    "discover_score": 0.7921659452243488,
    "score_1h": 9.818965517241379,
    "score_4h": 4.617647058823529,
    "score_7d": 1.5355029585798816,
    "extracted_entities": "Jack Draper - Tennis - Giocatore",
    "saturation_score": 44.0
  },
  {
    "rank": 26,
    "entity": "mirra andreeva",
    "discover_score": 0.7015046477962924,
    "score_1h": 0.0,
    "score_4h": 2.087866108786611,
    "score_7d": 1.71301775147929,
    "extracted_entities": "Mirra Andreeva - Tennis - Giocatrice",
    "saturation_score": 10.0
  },
  {
    "rank": 32,
    "entity": "cittadella - salernitana",
    "discover_score": 0.6684482949070563,
    "score_1h": 0.0,
    "score_4h": 0.09453781512605042,
    "score_7d": 2.2159763313609466,
    "extracted_entities": "Cittadella - Salernitana - Partita di calcio - Serie B - Squadre di calcio",
    "saturation_score": 158.0
  },
  {
    "rank": 8,
    "entity": "david parenzo",
    "discover_score": 0.6671264336150342,
    "score_1h": 13.637931034482758,
    "score_4h": 6.2510460251046025,
    "score_7d": 0.3106508875739645,
    "extracted_entities": "David Parenzo - Giornalista - Radio - Televisione",
    "saturation_score": 6.0
  },
  {
    "rank": 38,
    "entity": "brescia - reggiana",
    "discover_score": 0.6045234333880034,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.06508875739645,
    "extracted_entities": "Brescia - Reggiana - Calcio - Partita - Serie B",
    "saturation_score": 49.0
  },
  {
    "rank": 31,
    "entity": "palermo - carrarese",
    "discover_score": 0.6021037366427664,
    "score_1h": 0.0,
    "score_4h": 0.14495798319327732,
    "score_7d": 1.9467455621301775,
    "extracted_entities": "Palermo - Carrarese - Calcio - Partita - Serie C",
    "saturation_score": 74.0
  },
  {
    "rank": 44,
    "entity": "spezia - cosenza",
    "discover_score": 0.5913430268937697,
    "score_1h": 0.0,
    "score_4h": 0.41596638655462187,
    "score_7d": 1.9467455621301775,
    "extracted_entities": "Spezia - Cosenza - Calcio - Serie B - Partita",
    "saturation_score": 81.0
  },
  {
    "rank": 41,
    "entity": "mantova - catanzaro",
    "discover_score": 0.5430142733057185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.8520710059171597,
    "extracted_entities": "Mantova - Catanzaro",
    "saturation_score": 45.0
  },
  {
    "rank": 40,
    "entity": "pisa - cremonese",
    "discover_score": 0.5367790804376258,
    "score_1h": 0.7672413793103449,
    "score_4h": 0.3619246861924686,
    "score_7d": 1.7189349112426036,
    "extracted_entities": "Pisa - Cremonese - Calcio - Serie B - Partita",
    "saturation_score": 50.0
  },
  {
    "rank": 14,
    "entity": "protezione civile sicilia",
    "discover_score": 0.4520625414860555,
    "score_1h": 4.905172413793103,
    "score_4h": 3.282426778242678,
    "score_7d": 0.41420118343195267,
    "extracted_entities": "Protezione Civile - Sicilia - Emergenze - Sicurezza - Organizzazione",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "modena - cesena",
    "discover_score": 0.3858672633605406,
    "score_1h": 0.0,
    "score_4h": 0.3487394957983193,
    "score_7d": 1.150887573964497,
    "extracted_entities": "Modena - Cesena - Città - Viaggio - Italia",
    "saturation_score": 202.0
  },
  {
    "rank": 18,
    "entity": "allerta meteo sicilia",
    "discover_score": 0.3706928695390715,
    "score_1h": 10.077586206896552,
    "score_4h": 3.004201680672269,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Allerta meteo - Sicilia - Previsioni - Maltempo",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "musetti zverev",
    "discover_score": 0.3397077473370866,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3263598326359833,
    "score_7d": 0.9792899408284024,
    "extracted_entities": "Lorenzo Musetti - Alexander Zverev - Tennis - Partita - Torneo",
    "saturation_score": 152.0
  },
  {
    "rank": 12,
    "entity": "san mattia",
    "discover_score": 0.3386078189121941,
    "score_1h": 1.4655172413793103,
    "score_4h": 0.3682008368200837,
    "score_7d": 0.7041420118343196,
    "extracted_entities": "San Mattia - Apostolo - Cristianesimo",
    "saturation_score": 33.0
  },
  {
    "rank": 34,
    "entity": "draper alcaraz",
    "discover_score": 0.3150635650842169,
    "score_1h": 13.051724137931034,
    "score_4h": 0.6008403361344538,
    "score_7d": 0.7337278106508875,
    "extracted_entities": "Draper - Alcaraz - Tennis",
    "saturation_score": 4.0
  },
  {
    "rank": 25,
    "entity": "josé pepe mujica",
    "discover_score": 0.2768017377334284,
    "score_1h": 0.5862068965517241,
    "score_4h": 0.0,
    "score_7d": 0.6923076923076923,
    "extracted_entities": "José Mujica - Pepe Mujica - Politica uruguaiana - Uruguay - Ex presidente",
    "saturation_score": 94.0
  },
  {
    "rank": 22,
    "entity": "valentina uomini e donne",
    "discover_score": 0.2723727703378055,
    "score_1h": 0.0,
    "score_4h": 1.1171548117154813,
    "score_7d": 0.3698224852071006,
    "extracted_entities": "Valentina - Uomini e Donne - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "raoul bova",
    "discover_score": 0.2406927832335925,
    "score_1h": 5.663793103448276,
    "score_4h": 1.5543933054393306,
    "score_7d": 0.17751479289940827,
    "extracted_entities": "Raoul Bova - Attore - Film - Televisione - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 15,
    "entity": "jaume munar",
    "discover_score": 0.23961060965750788,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.2489539748953975,
    "score_7d": 0.41420118343195267,
    "extracted_entities": "Jaume Munar - Tennis - ATP - Spagna",
    "saturation_score": 3.0
  },
  {
    "rank": 24,
    "entity": "ester pantano",
    "discover_score": 0.19440006973668747,
    "score_1h": 2.810344827586207,
    "score_4h": 1.138655462184874,
    "score_7d": 0.08875739644970414,
    "extracted_entities": "Ester Pantano - Attrice - Filmografia - Serie TV - Carriera",
    "saturation_score": 4.0
  },
  {
    "rank": 36,
    "entity": "cinzia uomini e donne",
    "discover_score": 0.18968401629164952,
    "score_1h": 2.0948275862068964,
    "score_4h": 1.5126050420168067,
    "score_7d": 0.03254437869822485,
    "extracted_entities": "Cinzia - Uomini e Donne - Programma TV",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "rocio morales",
    "discover_score": 0.1777647331057863,
    "score_1h": 8.327586206896552,
    "score_4h": 1.0,
    "score_7d": 0.07396449704142012,
    "extracted_entities": "Rocio Morales - Attrice - Spagna - Televisione - Cinema",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "marina di ginosa",
    "discover_score": 0.16724388390656733,
    "score_1h": 0.0,
    "score_4h": 0.8319327731092437,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Marina di Ginosa - Località balneare - Turismo - Puglia - Spiagge",
    "saturation_score": 4.0
  },
  {
    "rank": 47,
    "entity": "valentina uomini e donne over",
    "discover_score": 0.16115565861731787,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.8151260504201681,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Valentina - Uomini e Donne - Over",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "zirkzee",
    "discover_score": 0.15698052110519406,
    "score_1h": 2.0172413793103448,
    "score_4h": 0.0,
    "score_7d": 0.17455621301775148,
    "extracted_entities": "Zirkzee - Calciatore - Bayern Monaco - Bundesliga",
    "saturation_score": 82.0
  },
  {
    "rank": 21,
    "entity": "stefania corona",
    "discover_score": 0.1386130715816646,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.11134453781512606,
    "score_7d": 0.09171597633136094,
    "extracted_entities": "Stefania Corona",
    "saturation_score": 22.0
  },
  {
    "rank": 28,
    "entity": "bastian muller",
    "discover_score": 0.13583921584940167,
    "score_1h": 0.0,
    "score_4h": 0.0899581589958159,
    "score_7d": 0.10355029585798817,
    "extracted_entities": "Bastian Muller",
    "saturation_score": 112.0
  },
  {
    "rank": 43,
    "entity": "ozzy osbourne",
    "discover_score": 0.13520461535082995,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.29916317991631797,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Ozzy Osbourne - Musica - Black Sabbath - Heavy Metal - Cantante",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "vangelo fra stefano 14 maggio",
    "discover_score": 0.12383792116402205,
    "score_1h": 0.0,
    "score_4h": 0.20292887029288703,
    "score_7d": 0.05621301775147929,
    "extracted_entities": "Vangelo - Fra Stefano - 14 maggio",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "walker milan",
    "discover_score": 0.12161610850425632,
    "score_1h": 0.0,
    "score_4h": 0.09033613445378151,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Walker - Milan - Calcio - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "referendum 8 e 9 giugno per cosa si vota",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "alex eala",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "nuova maglia juve",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "brescia calcio",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "san marino",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "thunder - nuggets",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "juventus store",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "giro d'italia napoli",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "real sociedad - celta vigo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cipro",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "tom cruise",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "belve puntata 13 maggio",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "alex de minaur",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "cavaliers - pacers",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "massafra",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "awoniyi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "terremoto grecia",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "simon coleman",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "fratelli menendez",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "nathalie caldonazzo",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "justyna steczkowska",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "samantha de grenet",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "buon mercoledì 14 maggio",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "stasi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "libia",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "de niro",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "vivaticket parma napoli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "federico cinà",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "cittadella calcio",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "valladolid - girona",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "azerbaijan",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "antonio conte juventus",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "adriano panzironi",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "princess",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "samuel french attore",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "sudtirol bari",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "roma atp",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "classifica atp",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "un posto al sole stasera",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "amerigo vespucci napoli",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "banca popolare di sondrio bce",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "salernitana oggi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "hazel brugger",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "lorde",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "agnese pini",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "superenalotto 13 maggio 2025",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "maria teresa fabbri siena",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "robert benton",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "de minaur",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "diretta serie b",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "zvonimir boban",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "antonella clerici",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "elio germano",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "pepe",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "eurovision 2024",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "rbr - brindisi",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "festival di cannes 2025",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "davide rossi assolto",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "simon coleman ultimo ballo",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "britney spears",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "basel",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "sophie codegoni",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "fabregas como",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "lnp",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "pirlo",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "child care",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "sunderland",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "venditti",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "sciopero treni 17 maggio trenitalia",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "roger federer",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "libertas livorno - vigevano 1955",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "childcare",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "smartphone",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "giorgia sottana",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "sandra studer",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "arthur fils",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "william hill",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "big five eurovision",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "الزمالك ضد الأهرام",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "14 maggio",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "aldo cazzullo",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "rai 3",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "ciclone",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "panatta",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "castellammare di stabia",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "david jonathan",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "sandra bullock",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "chiara maci",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "fils",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "assegno unico maggio 2025",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "celine dion eurovision",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "presidenti commissioni maturità",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "milano meteo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "opus dei",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "festivallo",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "giro d italia",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "melody",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "svizzera",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "matilde siracusano",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "davide barzan",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "diretta gol serie b",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "zamalek - pyramids",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "netanyahu",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "ternana calcio",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "giovanni allevi",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "djokovic",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "paesi bassi",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "netherlands",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "grammy awards",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "alessia orro",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "terza puntata maria corleone",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "restaurant near me",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "michele santoro",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "celine dion eurovision 1988",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "petacchi",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "massimo coda",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "evangelos marinakis",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "madeira",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "partita palermo oggi",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "catanzaro",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "tricase",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "luca telese",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "musetti sonego",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "dove vedere la serie b",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "bianca berlinguer malattia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "albania eurovision 2025",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "mauro corona",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "scafati",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "haaretz",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "norvegia eurovision 2025",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "buongiorno 14 maggio 2025",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "randazzo",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "sanremo 2025",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "slovenia eurovision 2025",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "tutta l'italia testo",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "tommaso ottomano",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "estonia",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "meteo.roma",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "flavia pennetta",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "olanda",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "kim kardashian",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "concilio di nicea",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "grammy award",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "giornale di brescia",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "espresso macchiato eurovision",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "tiffany chen",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "slovenia",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "programma internazionali tennis roma 2025",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "basciano",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "jamie lee curtis",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "tutino",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "van uden",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "coimbra",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "eurojackpot oggi estrazione",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "luna oggi",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "cilento",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "bill gates",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "airbnb",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "il santo del giorno",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "gerry scotti",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "tatum infortunio",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "starlink",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "alberto matano",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "oa sport",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "corriere adriatico",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "ministro giuli",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "striscia la notizia",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "risultati tennis",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "croazia",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "storo",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "regione lombardia",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "ippodromo snai san siro",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "kirsten dunst",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "dusan vlahovic",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "elisabetta canalis",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "grande panda",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "vesuvio",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "fc südtirol",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "pierce brosnan",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "biden",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "alberto tarallo",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-14 14:58:11",
  "trends_count": 231,
  "top_score": 9.698507483138966,
  "runtime_minutes": 17.661769326527914,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle ombre del tempo odierno, le forze dominanti della cronaca nera e dello sport tessono i loro fili tra le tendenze italiane. L'oscura eco dell'omicidio di Garlasco (#1), riecheggia potente mentre le partite di calcio e gli eventi tennistici ribollono sotto la superficie, eterni ambasciatori dell'intrattenimento. La terra di Matera (#2) offre un giacimento di possibilità, il suo fascino turistico e storico brilla come un faro promozionale sotto il cielo di Google Discover, grazie a un discreto DScore e una saturazione ancora gestibile.\n\nSii cauto, creatore di contenuti, davanti a Lucio Corsi al Eurovision (#4), un nome che potrebbe svanire alla prima folata di vento competitivo, soggiogato dalla saturazione imminente di palchi mediatici. La prudenza è altresì avvisata per gli appassionati del dramma criminale di Garlasco, il cui oceano di copertura è vasto e ingannevole.\n\nChe i vostri sforzi creativi si concentrino su argomenti di recente crescita e potenziale inesplorato, evitando i letali abissi del surplus. Lasciate che la strategia guidi il vostro viaggio digitale, per navigare con saggezza tra le onde delle mode di passaggio e i flussi duraturi."
};
