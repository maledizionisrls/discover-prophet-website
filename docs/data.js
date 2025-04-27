const trendData = [
  {
    "rank": 1,
    "entity": "venezia - milan",
    "discover_score": 8.115853509058947,
    "score_1h": 37.38793103448276,
    "score_4h": 43.8781512605042,
    "score_7d": 2.0236686390532546,
    "extracted_entities": "Venezia - Milan - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "motogp",
    "discover_score": 7.7770067626870745,
    "score_1h": 54.19973699590882,
    "score_4h": 34.46008403361344,
    "score_7d": 7.22189349112426,
    "extracted_entities": "MotoGP - Corse motociclistiche - Campionato mondiale - Piloti - Circuiti",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "como - genoa",
    "discover_score": 5.872160759737839,
    "score_1h": 40.63793103448276,
    "score_4h": 44.2563025210084,
    "score_7d": 1.7781065088757395,
    "extracted_entities": "Como - Genoa - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "barcellona - real madrid",
    "discover_score": 5.1717508297495725,
    "score_1h": 32.060344827586206,
    "score_4h": 28.53781512605042,
    "score_7d": 3.621301775147929,
    "extracted_entities": "Barcellona - Real Madrid - Calcio - Rivalità - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "zverev",
    "discover_score": 4.972271920041572,
    "score_1h": 67.6896551724138,
    "score_4h": 24.42436974789916,
    "score_7d": 8.207100591715976,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Germania - Classifica ATP",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "monreale",
    "discover_score": 3.5444933962059744,
    "score_1h": 51.94827586206897,
    "score_4h": 7.268907563025211,
    "score_7d": 6.609467455621302,
    "extracted_entities": "Monreale - Sicilia - Cattedrale di Monreale - Turismo - Arte Normanna",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "jair",
    "discover_score": 3.3930263264082883,
    "score_1h": 16.79310344827586,
    "score_4h": 13.016806722689076,
    "score_7d": 4.718934911242604,
    "extracted_entities": "Jair Bolsonaro - Politica brasiliana - Presidente del Brasile",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "alexander zverev",
    "discover_score": 3.3417256479647692,
    "score_1h": 9.663793103448276,
    "score_4h": 14.777310924369747,
    "score_7d": 6.71301775147929,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Classifica - Tornei",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "vancouver",
    "discover_score": 3.060626398168815,
    "score_1h": 1.4310344827586206,
    "score_4h": 7.605042016806722,
    "score_7d": 6.763313609467455,
    "extracted_entities": "Vancouver - Canada - Città - Turismo - Cultura",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "inter - roma",
    "discover_score": 2.598992040376727,
    "score_1h": 39.353448275862064,
    "score_4h": 14.588235294117647,
    "score_7d": 1.5798816568047336,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "albano",
    "discover_score": 2.5428603257027667,
    "score_1h": 3.637931034482759,
    "score_4h": 4.128151260504202,
    "score_7d": 7.162721893491124,
    "extracted_entities": "Albano Carrisi - Cantante - Italia - Musica - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "cardinale parolin papa",
    "discover_score": 2.3060585889075913,
    "score_1h": 0.19827586206896552,
    "score_4h": 2.684873949579832,
    "score_7d": 6.230769230769231,
    "extracted_entities": "Cardinale Parolin - Papa - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "flavio cobolli",
    "discover_score": 2.1775109388104843,
    "score_1h": 0.9482758620689655,
    "score_4h": 9.44327731092437,
    "score_7d": 4.997041420118343,
    "extracted_entities": "Flavio Cobolli - Tennis - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "moto 2",
    "discover_score": 1.910665013263356,
    "score_1h": 1.4827586206896552,
    "score_4h": 1.8949579831932772,
    "score_7d": 6.284023668639054,
    "extracted_entities": "Moto2 - Campionato del Mondo - Motociclismo - Corse motociclistiche",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "retegui",
    "discover_score": 1.8747304363353148,
    "score_1h": 0.4482758620689655,
    "score_4h": 12.298319327731093,
    "score_7d": 2.195266272189349,
    "extracted_entities": "ReteGui - Cucina - Chef - Gastronomia",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "catanzaro - palermo",
    "discover_score": 1.7474745796634334,
    "score_1h": 25.31896551724138,
    "score_4h": 17.19327731092437,
    "score_7d": 0.8195266272189349,
    "extracted_entities": "Catanzaro - Palermo - Calcio - Serie B - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "alberto franceschini",
    "discover_score": 1.5170171089538662,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.27941176470588236,
    "score_7d": 4.085798816568047,
    "extracted_entities": "Alberto Franceschini - Brigate Rosse - Terrorismo - Anni di piombo",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "eliminato amici 26 aprile",
    "discover_score": 1.333225364773751,
    "score_1h": 0.5948275862068966,
    "score_4h": 2.004201680672269,
    "score_7d": 3.5207100591715976,
    "extracted_entities": "Amici - Eliminazione - 26 aprile - Programma TV - Concorrenti",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "fiorentina - empoli",
    "discover_score": 1.1890194349589778,
    "score_1h": 50.20689655172414,
    "score_4h": 10.031512605042016,
    "score_7d": 0.6242603550295859,
    "extracted_entities": "Fiorentina - Empoli - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "rudiger",
    "discover_score": 1.0394911112132494,
    "score_1h": 0.13793103448275862,
    "score_4h": 1.161764705882353,
    "score_7d": 3.130177514792899,
    "extracted_entities": "Calcio - Antonio Rüdiger - Real Madrid - Difensore - Bundesliga",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "rai radio 1",
    "discover_score": 1.0378155520561232,
    "score_1h": 21.525862068965516,
    "score_4h": 5.529411764705882,
    "score_7d": 2.062130177514793,
    "extracted_entities": "RAI - Radio 1 - Emittente radiofonica - Italia - Programmi radiofonici",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "orari motogp tv8",
    "discover_score": 1.0238150286192162,
    "score_1h": 2.3774108708357686,
    "score_4h": 2.714285714285714,
    "score_7d": 2.615384615384615,
    "extracted_entities": "Orari - MotoGP - TV8",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "calcio streaming",
    "discover_score": 0.9523881716321224,
    "score_1h": 44.525862068965516,
    "score_4h": 2.2521008403361344,
    "score_7d": 2.7455621301775146,
    "extracted_entities": "Calcio - Streaming - Partite - Diretta - Online",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "südtirol - juve stabia",
    "discover_score": 0.8842409312904655,
    "score_1h": 22.267241379310345,
    "score_4h": 10.016806722689076,
    "score_7d": 0.3402366863905325,
    "extracted_entities": "Südtirol - Juve Stabia - Calcio - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "liliana segre",
    "discover_score": 0.8676070025215219,
    "score_1h": 0.4051724137931034,
    "score_4h": 1.273109243697479,
    "score_7d": 2.180473372781065,
    "extracted_entities": "Liliana Segre - Senatrice - Italia - Olocausto - Diritti umani",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "wrexham",
    "discover_score": 0.8668059179957684,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.3634453781512605,
    "score_7d": 2.71301775147929,
    "extracted_entities": "Wrexham - Città - Galles - Calcio - Wrexham AFC",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "jasmine paolini",
    "discover_score": 0.8486134625393046,
    "score_1h": 19.103448275862068,
    "score_4h": 1.226890756302521,
    "score_7d": 2.3076923076923075,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "cristina comencini",
    "discover_score": 0.8412322441158755,
    "score_1h": 0.12931034482758622,
    "score_4h": 1.2478991596638656,
    "score_7d": 2.1715976331360944,
    "extracted_entities": "Cristina Comencini - Regista - Scrittrice - Cinema Italiano - Letteratura Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "barcelona - real madrid",
    "discover_score": 0.797875707566018,
    "score_1h": 1.5517241379310345,
    "score_4h": 3.361344537815126,
    "score_7d": 1.3668639053254439,
    "extracted_entities": "Barcelona - Real Madrid - Calcio - Rivalità - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "mi vs lsg",
    "discover_score": 0.7977237848707357,
    "score_1h": 3.8965517241379315,
    "score_4h": 7.01890756302521,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Mumbai Indians - Lucknow Super Giants - IPL - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "maratona londra 2025",
    "discover_score": 0.7359926776626319,
    "score_1h": 0.8879310344827586,
    "score_4h": 5.544117647058823,
    "score_7d": 0.970414201183432,
    "extracted_entities": "Maratona - Londra - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "senza cri e antonia",
    "discover_score": 0.6995103710911557,
    "score_1h": 0.0,
    "score_4h": 0.4012605042016807,
    "score_7d": 2.3402366863905324,
    "extracted_entities": "Senza Cri - Antonia - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "partita roma oggi",
    "discover_score": 0.6589306611992908,
    "score_1h": 9.78448275862069,
    "score_4h": 3.0126050420168067,
    "score_7d": 1.452662721893491,
    "extracted_entities": "Partita - Roma - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "tom hardy",
    "discover_score": 0.5690413774170928,
    "score_1h": 0.0,
    "score_4h": 0.6302521008403361,
    "score_7d": 1.8402366863905324,
    "extracted_entities": "Tom Hardy - Attore - Film - Celebrità",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "amal clooney",
    "discover_score": 0.5524235897668291,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7142857142857143,
    "score_7d": 1.7041420118343196,
    "extracted_entities": "Amal Clooney - Diritti Umani - Avvocato - George Clooney - Attivismo",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "nicolas maupas",
    "discover_score": 0.5429664114291564,
    "score_1h": 2.206896551724138,
    "score_4h": 0.8277310924369748,
    "score_7d": 1.668639053254438,
    "extracted_entities": "Nicolas Maupas - Attore - Serie TV - Film - Francia",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "ndoye",
    "discover_score": 0.515170632827894,
    "score_1h": 0.19827586206896552,
    "score_4h": 0.46638655462184875,
    "score_7d": 1.6390532544378698,
    "extracted_entities": "Calciatore - Sport - Senegal",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "gabriella carlucci",
    "discover_score": 0.434476348983052,
    "score_1h": 1.543103448275862,
    "score_4h": 1.0756302521008403,
    "score_7d": 0.9911242603550297,
    "extracted_entities": "Gabriella Carlucci - Persone - Intrattenimento - Politica",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "juventus monza",
    "discover_score": 0.3395765451862319,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.9327731092436975,
    "score_7d": 0.7692307692307693,
    "extracted_entities": "Juventus - Monza - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "afc bournemouth - manchester united",
    "discover_score": 0.324311494242237,
    "score_1h": 8.810344827586206,
    "score_4h": 2.0504201680672267,
    "score_7d": 0.3343195266272189,
    "extracted_entities": "AFC Bournemouth - Manchester United - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "soule",
    "discover_score": 0.2972414776479941,
    "score_1h": 10.396551724137932,
    "score_4h": 2.527310924369748,
    "score_7d": 0.22781065088757396,
    "extracted_entities": "Soule - Gioco di ruolo - Cultura popolare - Storia medievale",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "liegi-bastogne-liegi",
    "discover_score": 0.26895176729866227,
    "score_1h": 0.1982758620689655,
    "score_4h": 0.8928571428571429,
    "score_7d": 0.3698224852071006,
    "extracted_entities": "Liegi-Bastogne-Liegi - Ciclismo - Gara - Belgio - Classica Monumento",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "lucia annunziata",
    "discover_score": 0.22357482177485227,
    "score_1h": 0.0,
    "score_4h": 0.7247899159663865,
    "score_7d": 0.3609467455621302,
    "extracted_entities": "Lucia Annunziata - Giornalismo - RAI - Politica Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "giuseppe salvatore riina",
    "discover_score": 0.20880124169209666,
    "score_1h": 0.0,
    "score_4h": 0.3760504201680672,
    "score_7d": 0.34023668639053256,
    "extracted_entities": "Giuseppe Salvatore Riina - Mafia - Famiglia Riina",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "álex márquez",
    "discover_score": 0.2051230401001261,
    "score_1h": 5.224137931034482,
    "score_4h": 1.0420168067226891,
    "score_7d": 0.1834319526627219,
    "extracted_entities": "Álex Márquez - MotoGP - Pilota motociclistico",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "ajax - sparta rotterdam",
    "discover_score": 0.18851215789865006,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.14705882352941177,
    "score_7d": 0.35798816568047337,
    "extracted_entities": "Ajax - Sparta Rotterdam - Calcio - Eredivisie",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "funerali papa francesco ascolti tv",
    "discover_score": 0.16520383622885582,
    "score_1h": 0.017241379310344827,
    "score_4h": 0.5,
    "score_7d": 0.1301775147928994,
    "extracted_entities": "Funerali - Papa Francesco - Ascolti TV",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "como vs genoa",
    "discover_score": 0.16203648384125777,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.35084033613445376,
    "score_7d": 0.15680473372781065,
    "extracted_entities": "Como - Genoa - Partita di calcio - Serie B",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "raspadori",
    "discover_score": 0.13929364049891313,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.2415966386554622,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Giacomo Raspadori - Calcio - Serie A - Nazionale Italiana - Attaccante",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "london marathon 2025",
    "discover_score": 0.12170101879775741,
    "score_1h": 0.20689655172413793,
    "score_4h": 0.10084033613445378,
    "score_7d": 0.056213017751479286,
    "extracted_entities": "London Marathon - 2025 - Evento sportivo",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "colpevole d'omicidio",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "trade republic",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "aryna sabalenka",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "guido pini",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "nico williams",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "matteo gigante",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "martin scorsese",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "tarjeta roja",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "fiorentina vs empoli",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "carofiglio",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "warriors - rockets",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "live football tv",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "santiago gimenez",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "benjamin pavard",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "dongo",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "maverick viñales",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "via sineo torino",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "yamal",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "ajax",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "angers - lilla",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "marotta",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "real barca",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "inside man",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "donald trump zelensky",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "qualiano",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "trento - dinamo sassari",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "pedri",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "maratona padova 2025",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "clippers - nuggets",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "namibia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "crystal palace - aston villa",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "sondaggi politici",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "grizzlies - thunder",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "napoli - sampdoria",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "tare",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "cardinale giovanni battista re",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "superenalotto 26 aprile 2025",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "donald trump papa francesco",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "afc champions league",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "bezzecchi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "val trebbia",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "jerez de la frontera",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "barcelone – real madrid",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "cardinale bagnasco",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "alfa romeo stelvio 2026",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "valentino rossi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "matteo arnaldi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "carrara",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "estrela amadora - porto",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "mario balotelli",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "gaeta",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "cardinale battaglia",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "giro d'italia 2025",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "isola del giglio",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "rsi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "becciu cardinale cosa ha fatto",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "marcos giron",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "claudio gentile",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "bolzano",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "fiorello",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "buongiorno napoli",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "il bambino nascosto",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "giochi playstation plus",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "pedro acosta",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "bertinotti",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "shipping",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "aleksandr bublik",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "sciacca",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "gent - anderlecht",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "buona domenica 27 aprile 2025",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "mazara del vallo",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "rosella sensi",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "jude bellingham",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "eintracht - rb lipsia",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "estadio de la cartuja",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "ermal meta",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "sondaggio",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "raphinha",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lione - rennes",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "val tidone",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "يلا شوت",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "rublev",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "john yeboah",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "luciano darderi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "jack draper",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "london marathon",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "gavi",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "le havre - monaco",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "fantacalcio",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "gaziantep - fenerbahçe",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "giron",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "joão fonseca",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "pbks vs kkr",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "justin bieber",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "برشلونة ضد الريال",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "antonia amici",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "ciccio cosenza",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "million day",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "holden",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "hans nicolussi caviglia",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "master 1000 madrid",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "giordania",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "koora",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "ferran torres",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "fonseca tennis",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "gerard martín",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "conclave papa francesco",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "the accountant",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "maria corleone",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "fausto bertinotti",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "luca casarini",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "tommy paul",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "koopmeiners",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "5g",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "inigo martinez",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "yalla kora",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "vecchioni",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "luis miguel",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "niccolò fabi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "luca sommi",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "orietta berti",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "verizon",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "real madrid vs",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "federica pellegrini",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "sri lanka women vs india women",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "peter gomez",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "szczesny",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "cristiano ronaldo",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "atalanta convocati",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "courtois",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "comerciantes unidos - alianza lima",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "michela ponzani",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "dani olmo",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "liliana cavani",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "iga świątek",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "michelle hunziker",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "grigor dimitrov",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "conero",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "viktor orban",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "kylian mbappé",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "holden amici",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "lapu lapu",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "dani ceballos",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "omoda 3 prezzo",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "sport recife - fortaleza",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "endrick",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "re di spagna",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "eubank vs benn",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "alfredo belli paci",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "emma navarro",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "film conclave",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "siviglia",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "presidente mattarella",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "fran garcia",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "francesca chillemi",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "ascoli",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "bayern vs mainz",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "donna vekić",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "tsitsipas",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "massimo cellino",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "mbangula",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "jack nicholson",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "hoffenheim – dortmund",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "tchouameni",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "27 aprile",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "robert de niro",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "numana",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "ferland mendy",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "predator",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "scotty pippen",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "francesco amici 2025",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "ancelotti",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "don matteo zuppi",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "cesenatico",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "prince",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "arda guler",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "liga",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "allenatore barcellona",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "rtve",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "helen hunt",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 236,
    "entity": "ansu fati",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 237,
    "entity": "fermin lopez",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 238,
    "entity": "trump putin zelensky",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 239,
    "entity": "alessandra amoroso",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 240,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 241,
    "entity": "newcastle",
    "discover_score": 0.08547437138421397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 242,
    "entity": "paolo ruffini",
    "discover_score": 0.08544413025264191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 243,
    "entity": "kane",
    "discover_score": 0.08541403508525716,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 244,
    "entity": "hansi flick",
    "discover_score": 0.08538408457378113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 245,
    "entity": "indiana jones",
    "discover_score": 0.08535427742700234,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 246,
    "entity": "alessandro borghese",
    "discover_score": 0.08532461237048485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 247,
    "entity": "porto fc",
    "discover_score": 0.08529508814628277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 248,
    "entity": "daniel radcliffe",
    "discover_score": 0.08526570351266076,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 249,
    "entity": "estonia",
    "discover_score": 0.08523645724382045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 250,
    "entity": "robin williams",
    "discover_score": 0.08520734812963249,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 251,
    "entity": "aurélien tchouaméni",
    "discover_score": 0.08517837497537416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 252,
    "entity": "dario nardella",
    "discover_score": 0.08514953660147252,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 253,
    "entity": "jovanotti",
    "discover_score": 0.08512083184325263,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 254,
    "entity": "brighton vs west ham",
    "discover_score": 0.08509225955069119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 255,
    "entity": "phoenix",
    "discover_score": 0.08506381858817494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 256,
    "entity": "truck accident attorney",
    "discover_score": 0.08503550783426429,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 257,
    "entity": "denzel washington",
    "discover_score": 0.08500732618146141,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 258,
    "entity": "belinda bencic",
    "discover_score": 0.08497927253598325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 259,
    "entity": "parigi",
    "discover_score": 0.08495134581753899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 260,
    "entity": "wojciech szczęsny",
    "discover_score": 0.08492354495911203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 261,
    "entity": "amoroso alessandra",
    "discover_score": 0.08489586890674626,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 262,
    "entity": "djokovic oggi",
    "discover_score": 0.08486831661933661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 263,
    "entity": "indonesia",
    "discover_score": 0.08484088706842376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 264,
    "entity": "alex warren",
    "discover_score": 0.08481357923799289,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 265,
    "entity": "ferruccio de lorenzo",
    "discover_score": 0.08478639212427637,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 266,
    "entity": "swiatek",
    "discover_score": 0.0847593247355603,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 267,
    "entity": "asti",
    "discover_score": 0.08473237609199494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 268,
    "entity": "bradley cooper",
    "discover_score": 0.08470554522540857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 269,
    "entity": "paolo rossi",
    "discover_score": 0.08467883117912525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 270,
    "entity": "casarini",
    "discover_score": 0.08465223300778593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 271,
    "entity": "nuova zelanda",
    "discover_score": 0.08462574977717295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 272,
    "entity": "st. mirren - rangers",
    "discover_score": 0.08459938056403808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 273,
    "entity": "vinicius",
    "discover_score": 0.08457312445593364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 274,
    "entity": "porto recanati",
    "discover_score": 0.08454698055104698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 275,
    "entity": "spalato",
    "discover_score": 0.08452094795803801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 276,
    "entity": "fran garcía",
    "discover_score": 0.08449502579587984,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 277,
    "entity": "marco liorni",
    "discover_score": 0.08446921319370236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 278,
    "entity": "vietri sul mare",
    "discover_score": 0.08444350929063883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 279,
    "entity": "hector fort",
    "discover_score": 0.08441791323567525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 280,
    "entity": "fc barcelona – real madryt",
    "discover_score": 0.08439242418750258,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 281,
    "entity": "atp madrid 2025 tabellone",
    "discover_score": 0.08436704131437169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 282,
    "entity": "robert redford",
    "discover_score": 0.08434176379395099,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 283,
    "entity": "beatriz haddad maia",
    "discover_score": 0.08431659081318664,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 284,
    "entity": "conclave film dove vederlo",
    "discover_score": 0.0842915215681654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 285,
    "entity": "ريال مدريد",
    "discover_score": 0.0842665552639799,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 286,
    "entity": "valverde",
    "discover_score": 0.08424169111459642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 287,
    "entity": "tallon griekspoor",
    "discover_score": 0.08421692834272505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 288,
    "entity": "finale ligure",
    "discover_score": 0.0841922661796922,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 289,
    "entity": "messi",
    "discover_score": 0.08416770386531533,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 290,
    "entity": "arizona",
    "discover_score": 0.08414324064778016,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 291,
    "entity": "monaco calcio",
    "discover_score": 0.08411887578351974,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 292,
    "entity": "santa clara - arouca",
    "discover_score": 0.084094608537096,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 293,
    "entity": "newcastle vs ipswich town",
    "discover_score": 0.0840704381810831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 294,
    "entity": "jacob fearnley",
    "discover_score": 0.08404636399595321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 295,
    "entity": "dublino",
    "discover_score": 0.08402238526996385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 296,
    "entity": "better",
    "discover_score": 0.08399850129904766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 297,
    "entity": "amici diretta",
    "discover_score": 0.0839747113867038,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 298,
    "entity": "arbitro real madrid",
    "discover_score": 0.08395101484389136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 299,
    "entity": "nba playoff",
    "discover_score": 0.08392741098892463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 300,
    "entity": "maggioni",
    "discover_score": 0.08390389914737018,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 301,
    "entity": "paestum",
    "discover_score": 0.0838804786519456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 302,
    "entity": "l'amore in teoria",
    "discover_score": 0.08385714884242024,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 303,
    "entity": "барселона – реал мадрид",
    "discover_score": 0.08383390906551744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 304,
    "entity": "valentina bisti",
    "discover_score": 0.08381075867481845,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 305,
    "entity": "gerard butler",
    "discover_score": 0.08378769703066813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 306,
    "entity": "filippine",
    "discover_score": 0.0837647235000821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 307,
    "entity": "alessandro petacchi",
    "discover_score": 0.08374183745665555,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-27 13:44:22",
  "trends_count": 307,
  "top_score": 8.115853509058947,
  "runtime_minutes": 3.885478087266286,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi i venti del destino soffiano nel mondo dello sport e dell'intrattenimento politico. Il calcio domina la scena con diverse partite chiave, da \"Venezia-Milan\" a \"Inter-Roma\", muovendosi tra gli spalti echeggianti delle Serie A e B. Allo stesso tempo, la MotoGP percorre le sue curve motociclistiche, seguita dalla brezza del tennis con Alexander Zverev.\n\nPer le anime alla ricerca di gloria digitale su Google Discover, \"venezia - milan\" (#1) e \"motogp\" (#2) emanano una forte aura di opportunità. Con alti punteggi di interesse e una saturazione ancora anonima, questi argomenti galoppano verso il prossimo palcoscenico senza essere zavorrati dall'eccessiva copertura mediatica.\n\nTuttavia, il cammino verso la gloria non è senza ostacoli. I titoli legati a \"barcellona - real madrid\" (#4) pur brillanti nel fascino ancestrale della rivalità calcistica, si mostrano rischiosi. Il DScore medio e l'interesse volatile potrebbero svanire, lasciandoci solo polvere e fanfare effimere.\n\nIn questo viaggio tra dati e deviazioni, la chiave per il successo nei contenuti è cavalcare l'onda alta di tendenze emergenti, evitando i fuochi di paglia già accesi e consumati nella competizione. Che le vostre strategie digitali seguano il vento delle opportunità."
};
