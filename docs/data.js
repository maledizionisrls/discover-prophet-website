const trendData = [
  {
    "rank": 37,
    "entity": "monaco di baviera atp",
    "discover_score": 11.094411285472056,
    "score_1h": 61.18103448275862,
    "score_4h": 28.147058823529413,
    "score_7d": 22.591715976331358,
    "extracted_entities": "Monaco di Baviera - ATP - Tennis - Torneo",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 8.708921101862838,
    "score_1h": 7.6148451198129745,
    "score_4h": 4.264705882352941,
    "score_7d": 24.14792899408284,
    "extracted_entities": "ATP - Monaco di Baviera - 2025 - Tennis - Torneo",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "monza napoli",
    "discover_score": 8.185737767311538,
    "score_1h": 47.9051724137931,
    "score_4h": 24.535714285714285,
    "score_7d": 9.896449704142011,
    "extracted_entities": "Monza - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 422.0
  },
  {
    "rank": 5,
    "entity": "inter - roma",
    "discover_score": 6.490137594103113,
    "score_1h": 35.474137931034484,
    "score_4h": 16.33613445378151,
    "score_7d": 8.576923076923077,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 66.0
  },
  {
    "rank": 26,
    "entity": "probabili formazioni",
    "discover_score": 6.272069592008009,
    "score_1h": 4.422413793103448,
    "score_4h": 21.428571428571427,
    "score_7d": 11.840236686390533,
    "extracted_entities": "Calcio - Formazioni - Squadre - Partite - Giocatori",
    "saturation_score": 843.0
  },
  {
    "rank": 1,
    "entity": "lecce - como",
    "discover_score": 5.591170871869846,
    "score_1h": 71.5967270601987,
    "score_4h": 31.380252100840337,
    "score_7d": 1.6005917159763314,
    "extracted_entities": "Lecce - Como - Calcio - Serie B - Partita",
    "saturation_score": 214.0
  },
  {
    "rank": 38,
    "entity": "wec",
    "discover_score": 4.415963478372874,
    "score_1h": 8.810344827586206,
    "score_4h": 18.65126050420168,
    "score_7d": 8.890532544378697,
    "extracted_entities": "World Endurance Championship - Motorsport - FIA",
    "saturation_score": 103.0
  },
  {
    "rank": 34,
    "entity": "neymar",
    "discover_score": 4.176873438906046,
    "score_1h": 0.1896551724137931,
    "score_4h": 0.18487394957983194,
    "score_7d": 12.8698224852071,
    "extracted_entities": "Neymar - Calciatore - PSG - Brasile - Infortuni",
    "saturation_score": 10.0
  },
  {
    "rank": 4,
    "entity": "carmela fiorella laurea falsa",
    "discover_score": 2.437067073492454,
    "score_1h": 18.120689655172413,
    "score_4h": 15.44747899159664,
    "score_7d": 1.7810650887573964,
    "extracted_entities": "Carmela Fiorella - Laurea falsa - Frode accademica",
    "saturation_score": 3.0
  },
  {
    "rank": 32,
    "entity": "shelton",
    "discover_score": 2.2666759589748438,
    "score_1h": 15.96332554061952,
    "score_4h": 6.623949579831933,
    "score_7d": 5.6390532544378695,
    "extracted_entities": "Blake Shelton - Gwen Stefani - The Voice - Country Music - Nashville",
    "saturation_score": 50.0
  },
  {
    "rank": 16,
    "entity": "roma verona",
    "discover_score": 2.1398089283767785,
    "score_1h": 1.6953535943892462,
    "score_4h": 5.436974789915967,
    "score_7d": 4.798816568047338,
    "extracted_entities": "Roma - Verona - Viaggio - Turismo - Città",
    "saturation_score": 204.0
  },
  {
    "rank": 31,
    "entity": "amstel gold race 2025",
    "discover_score": 2.0339396719096303,
    "score_1h": 0.3706896551724138,
    "score_4h": 1.1197478991596639,
    "score_7d": 6.390532544378699,
    "extracted_entities": "Amstel Gold Race - 2025 - Ciclismo - Paesi Bassi - Evento sportivo",
    "saturation_score": 25.0
  },
  {
    "rank": 25,
    "entity": "neres",
    "discover_score": 1.8109581447884067,
    "score_1h": 0.0,
    "score_4h": 0.19117647058823528,
    "score_7d": 5.7514792899408285,
    "extracted_entities": "Neres - Calciatore - Ajax - Brasile - Everton",
    "saturation_score": 261.0
  },
  {
    "rank": 2,
    "entity": "heidenheim - bayern monaco",
    "discover_score": 1.7369356443127557,
    "score_1h": 54.13793103448276,
    "score_4h": 7.350840336134453,
    "score_7d": 1.6124260355029585,
    "extracted_entities": "Heidenheim - Bayern Monaco - Calcio - Partita - Bundesliga",
    "saturation_score": 9.0
  },
  {
    "rank": 35,
    "entity": "milan atalanta",
    "discover_score": 1.661434869397638,
    "score_1h": 0.9224137931034482,
    "score_4h": 2.3550420168067228,
    "score_7d": 5.014792899408284,
    "extracted_entities": "Milan - Atalanta - Calcio - Serie A - Partita",
    "saturation_score": 175.0
  },
  {
    "rank": 3,
    "entity": "barcellona - celta vigo",
    "discover_score": 1.5999774289161801,
    "score_1h": 39.46551724137932,
    "score_4h": 10.289915966386555,
    "score_7d": 1.0798816568047336,
    "extracted_entities": "Barcellona - Celta Vigo - Partita di calcio - Liga Spagnola",
    "saturation_score": 23.0
  },
  {
    "rank": 11,
    "entity": "giulio drago",
    "discover_score": 1.5942711692249258,
    "score_1h": 3.431034482758621,
    "score_4h": 2.0021008403361344,
    "score_7d": 3.905325443786982,
    "extracted_entities": "Giulio Drago",
    "saturation_score": 62.0
  },
  {
    "rank": 7,
    "entity": "angelo longoni",
    "discover_score": 1.532148635623512,
    "score_1h": 22.53448275862069,
    "score_4h": 11.300420168067227,
    "score_7d": 1.2485207100591715,
    "extracted_entities": "Angelo Longoni - Regista - Drammaturgo - Sceneggiatore",
    "saturation_score": 256.0
  },
  {
    "rank": 10,
    "entity": "vignetta vauro",
    "discover_score": 1.460096462910908,
    "score_1h": 7.78448275862069,
    "score_4h": 7.098739495798319,
    "score_7d": 2.2071005917159763,
    "extracted_entities": "Vignetta - Vauro - Satira",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "carlo ancelotti",
    "discover_score": 1.401583326209646,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.7605042016806722,
    "score_7d": 4.8076923076923075,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": 5.0
  },
  {
    "rank": 40,
    "entity": "probabili formazioni serie a",
    "discover_score": 1.2932454311544999,
    "score_1h": 0.0,
    "score_4h": 2.716386554621849,
    "score_7d": 3.8076923076923075,
    "extracted_entities": "Probabili formazioni - Serie A - Calcio - Squadre - Partite",
    "saturation_score": 9.0
  },
  {
    "rank": 9,
    "entity": "everton - manchester city",
    "discover_score": 1.1104792340272873,
    "score_1h": 25.53448275862069,
    "score_4h": 6.798319327731093,
    "score_7d": 1.3284023668639053,
    "extracted_entities": "Everton - Manchester City - Calcio - Premier League - Partita",
    "saturation_score": 7.0
  },
  {
    "rank": 21,
    "entity": "eleonora abbagnato",
    "discover_score": 1.097925285939184,
    "score_1h": 10.775862068965518,
    "score_4h": 1.8634453781512605,
    "score_7d": 2.9822485207100593,
    "extracted_entities": "Eleonora Abbagnato - Ballerina - Danza - Teatro - Opera",
    "saturation_score": 8.0
  },
  {
    "rank": 27,
    "entity": "ben shelton",
    "discover_score": 1.0729368219266855,
    "score_1h": 1.7758620689655171,
    "score_4h": 0.42647058823529416,
    "score_7d": 3.4437869822485205,
    "extracted_entities": "Ben Shelton - Tennis - Giocatore - Stati Uniti",
    "saturation_score": 9.0
  },
  {
    "rank": 48,
    "entity": "vicenza - triestina",
    "discover_score": 1.0492164689613985,
    "score_1h": 0.0,
    "score_4h": 0.6722689075630253,
    "score_7d": 3.633136094674556,
    "extracted_entities": "Vicenza - Triestina - Calcio - Partita - Serie C",
    "saturation_score": 69.0
  },
  {
    "rank": 13,
    "entity": "qualifiche f1 orari",
    "discover_score": 0.9793138313590878,
    "score_1h": 1.7095265926358854,
    "score_4h": 1.4222689075630253,
    "score_7d": 2.4733727810650885,
    "extracted_entities": "Formula 1 - Qualifiche - Orari",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "buona vigilia di pasqua 2025",
    "discover_score": 0.924694625756731,
    "score_1h": 0.560344827586207,
    "score_4h": 0.4474789915966387,
    "score_7d": 2.6449704142011834,
    "extracted_entities": "Vigilia di Pasqua - 2025 - Celebrazioni - Tradizioni",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "wec imola 2025",
    "discover_score": 0.8818602217568723,
    "score_1h": 1.2241379310344827,
    "score_4h": 1.365546218487395,
    "score_7d": 2.8136094674556213,
    "extracted_entities": "WEC - Imola - 2025 - Campionato Mondiale Endurance - Gara Automobilistica",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "sorrento avellino",
    "discover_score": 0.8351795826565006,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.39915966386554624,
    "score_7d": 2.9289940828402368,
    "extracted_entities": "Sorrento - Avellino - Luoghi - Viaggio",
    "saturation_score": 83.0
  },
  {
    "rank": 19,
    "entity": "rayo vallecano - valencia",
    "discover_score": 0.639800745536817,
    "score_1h": 0.27586206896551724,
    "score_4h": 2.846638655462185,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Rayo Vallecano - Valencia - Partita di calcio - La Liga",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "dc vs gt",
    "discover_score": 0.6336385624723765,
    "score_1h": 1.3448275862068966,
    "score_4h": 2.25,
    "score_7d": 1.2307692307692308,
    "extracted_entities": "DC Comics - Gran Turismo - Confronto",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "ostapenko",
    "discover_score": 0.5857996808449942,
    "score_1h": 5.370689655172414,
    "score_4h": 5.07563025210084,
    "score_7d": 0.485207100591716,
    "extracted_entities": "Jelena Ostapenko - Tennis - WTA - Grand Slam - Lettonia",
    "saturation_score": 6.0
  },
  {
    "rank": 12,
    "entity": "psg - le havre",
    "discover_score": 0.5692407646380766,
    "score_1h": 16.53448275862069,
    "score_4h": 3.9285714285714284,
    "score_7d": 0.591715976331361,
    "extracted_entities": "PSG - Le Havre - Partita di calcio - Ligue 1 - Squadre di calcio francesi",
    "saturation_score": 9.0
  },
  {
    "rank": 8,
    "entity": "francesca brienza",
    "discover_score": 0.5646127384523483,
    "score_1h": 13.120689655172413,
    "score_4h": 3.245798319327731,
    "score_7d": 0.6272189349112426,
    "extracted_entities": "Francesca Brienza",
    "saturation_score": 4.0
  },
  {
    "rank": 20,
    "entity": "rita rusic",
    "discover_score": 0.44370242743399,
    "score_1h": 5.992694330800702,
    "score_4h": 2.5441176470588234,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "Rita Rusic - Personaggio pubblico - Produttrice cinematografica - Attrice",
    "saturation_score": 5.0
  },
  {
    "rank": 28,
    "entity": "paola saluzzi",
    "discover_score": 0.4370345486395852,
    "score_1h": 12.129310344827587,
    "score_4h": 3.4117647058823533,
    "score_7d": 0.4704142011834319,
    "extracted_entities": "Paola Saluzzi - Personaggio televisivo - Giornalista - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 29,
    "entity": "reggiana - napoli",
    "discover_score": 0.35998743446645526,
    "score_1h": 1.3684979544126241,
    "score_4h": 1.7794117647058822,
    "score_7d": 0.5798816568047337,
    "extracted_entities": "Reggiana - Napoli - Calcio - Partita - Serie B",
    "saturation_score": 3.0
  },
  {
    "rank": 33,
    "entity": "iga świątek",
    "discover_score": 0.3388377714718511,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.5420168067226891,
    "score_7d": 0.8402366863905325,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "heidenheim – bayern",
    "discover_score": 0.3263256650595075,
    "score_1h": 0.6293103448275862,
    "score_4h": 1.1890756302521008,
    "score_7d": 0.5532544378698225,
    "extracted_entities": "Heidenheim - Bayern - Calcio - Bundesliga - Partita",
    "saturation_score": 10.0
  },
  {
    "rank": 18,
    "entity": "barcelona vs celta vigo",
    "discover_score": 0.32054932654299845,
    "score_1h": 2.043103448275862,
    "score_4h": 1.2857142857142856,
    "score_7d": 0.47633136094674555,
    "extracted_entities": "Barcelona - Celta Vigo - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "mamelodi - al ahly",
    "discover_score": 0.3205133191173179,
    "score_1h": 1.3189655172413792,
    "score_4h": 0.8949579831932774,
    "score_7d": 0.7011834319526628,
    "extracted_entities": "Mamelodi - Al Ahly - Calcio - Squadre di calcio - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "peschici",
    "discover_score": 0.2667065518658382,
    "score_1h": 0.0,
    "score_4h": 0.11134453781512604,
    "score_7d": 0.7100591715976331,
    "extracted_entities": "Peschici - Turismo - Gargano - Puglia - Spiagge",
    "saturation_score": 157.0
  },
  {
    "rank": 23,
    "entity": "valentina maiolini-rothbacher",
    "discover_score": 0.2538815458123588,
    "score_1h": 0.25862068965517243,
    "score_4h": 0.15756302521008403,
    "score_7d": 0.5473372781065089,
    "extracted_entities": "Valentina Maiolini-Rothbacher",
    "saturation_score": 4.0
  },
  {
    "rank": 42,
    "entity": "west ham - southampton",
    "discover_score": 0.2501700498704303,
    "score_1h": 0.0,
    "score_4h": 1.084033613445378,
    "score_7d": 0.3727810650887574,
    "extracted_entities": "West Ham - Southampton - Calcio - Premier League",
    "saturation_score": 8.0
  },
  {
    "rank": 24,
    "entity": "صن داونز ضد الأهلي",
    "discover_score": 0.22392951902584388,
    "score_1h": 0.0,
    "score_4h": 0.5819327731092436,
    "score_7d": 0.3254437869822485,
    "extracted_entities": "صن داونز - الأهلي - Partita di calcio - Squadre di calcio - Competizione sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "crystal palace - afc bournemouth",
    "discover_score": 0.21268593599071003,
    "score_1h": 0.0,
    "score_4h": 0.18067226890756302,
    "score_7d": 0.4467455621301776,
    "extracted_entities": "Crystal Palace - AFC Bournemouth - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "assane diao",
    "discover_score": 0.17992707972414068,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.115546218487395,
    "score_7d": 0.0591715976331361,
    "extracted_entities": "Assane Diao",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "brentford - brighton & hove albion",
    "discover_score": 0.1705754842333976,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.34663865546218486,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Brentford - Brighton & Hove Albion - Calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "trinity rodman",
    "discover_score": 0.16986564637999532,
    "score_1h": 2.353448275862069,
    "score_4h": 0.5861344537815126,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Trinity Rodman - Calcio femminile - Stati Uniti - Washington Spirit - Nazionale USA",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "barcelone – celta vigo",
    "discover_score": 0.15418925868498642,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.3739495798319328,
    "score_7d": 0.1301775147928994,
    "extracted_entities": "Barcellona - Celta Vigo - Partita di calcio - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "lipsia calcio",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "juventus women - milan",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "behram tradimento muore",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "lucknow super giants vs rajasthan royals match scorecard",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "monaco open",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "guerra russia ucraina",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "conad",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "masterchef 13",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "nessuno ti salverà",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "oroscopo oggi paolo fox scorpione",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "holger rune",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "frasi di buona pasqua",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "viktoria plzeň - dukla",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "al-qadisiya - al-nassr",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "jd vance giorgia meloni",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "padova calcio",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "grizzlies - mavericks",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "fabrizio corona",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "meditazioni via crucis papa francesco",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "thauvin",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "rete 4 stasera quarto grado",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "terra amara",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "caserta",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "olimpia milano - cremona",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "andrea conti calcio",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "esselunga",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "sporting - moreirense",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "lucca",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "ambasciata oman roma",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "arnautovic",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "galatasaray - bodrum",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "wrestlemania 41",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "koopmeiners",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "antonio scurati",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "mainz - wolfsburg",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "lady gaga",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "de laurentiis",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "carlos alcaraz",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "jessica pegula",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "piacenza",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "inter bologna",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "conferenza stampa",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "hawks - heat",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "amstel gold race",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "maroc u-17 – mali u-17",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "porto - famalicão",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "etna",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "monica bellucci",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "dani olmo",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "sassuolo - como women",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "referendum 8 9 giugno per cosa si vota",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "groenlandia",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "ernesto galli",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "miriam leone",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "vlasic",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "il miracolo di sharon",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "gyokeres",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "million day",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "federico zampaglione",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "melania rea",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "matrimonio a prima vista",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "vigilia di pasqua 2025",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "grazzano visconti",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "san pantaleo",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "imane khelif",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "robbie williams",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "coratolive",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "f1 academy",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "noipa emissione speciale",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "vigilia di pasqua",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "albano",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "saman abbas",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "espanyol - getafe",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "padova",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "feralpisalò - pro vercelli",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "striscia la notizia",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "caldiero terme - lecco",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "benedetta pilato",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "ciro immobile",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "karachi kings vs quetta gladiators",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "enrico lo verso",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "lazio - napoli",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "atalanta u-23 - arzignano valchiampo",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "macron",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "alianza lima - chankas cyc",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "modena",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "lodi mattutine di oggi",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "colin farrell",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "giana erminio - virtus verona",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "anagni",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "daniela coli meloni",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "guardiola roma",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "bangladesh women vs pakistan women",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "padova calcio oggi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "diodato",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "ischia",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "francesca mannocchi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "dakota johnson",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "lega pro",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "novara - trento",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "sofia raffaeli",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "fast food restaurant",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "ornella vanoni",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "abbiategrasso",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "al-qadisiyah vs al-nassr",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "i peccatori film",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "monfalcone",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "snai",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "lba",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "rennes - nantes",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "fabrizio pregliasco",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "lourdes",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "the passion",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "liam neeson",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "val pusteria",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "kevin bacon",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "paolo mieli",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "gabriele eredità",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "renate - pergolettese",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "الطقس غدًا",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "rematch",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "arthur fils",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "lulu selassie",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "simone fontecchio",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "erode",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "pro patria - lumezzane",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "vittoria puccini",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "amburgo",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "rai 1 diretta",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "robin williams",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "pavia",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "masterchef",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "leonardo di caprio",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "regenwarnung",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "luigi mangione",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "monica giandotti",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "taranto",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "ivg",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "andrea pennacchi",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "cucinelli",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "moonbin",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "anne hathaway",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "bruno vespa",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "stefano massini",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "klopp",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "seravezza",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "crimea",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "al nassr",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "bruno barbieri",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "jim clark",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "prohodul domnului",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "maggie smith",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "evenepoel",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "mc donald",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "serena rossi",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "svitolina",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "il mattino di padova",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "30 notti con il mio ex",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "conte juventus",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "albinoleffe",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "gangs of london",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "ihostage",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "titanic",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "tennis barcellona",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "al-ahli saudi - al feiha",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "sporting lisbona",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "rakotomanga",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "sarà curtis",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "hunziker",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "easter",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "ncis",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "espanyol",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "cricbuzz",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-19 14:39:46",
  "trends_count": 229,
  "top_score": 11.094411285472056,
  "runtime_minutes": 3.8722013870875043,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profezie di Oggi:\n\nL'energia del calcio e dello sport risveglia gli spiriti in Italia, con eventi significativi in Serie A e B, oltre che in competizioni internazionali come la Liga. Il tema del calcio domina con conflitti entusiasmanti tra squadre come Monza-Napoli e Inter-Roma, che attirano curiosi e appassionati. Parallelamente, il mondo del tennis, rappresentato dagli appuntamenti di Monaco di Baviera, accompagna i venti di cambiamento e offre spazi meditativi ad un nuovo pubblico.\n\nOpportunità per Google Discover emergono con i trend #1 'monaco di baviera atp', il cui basso livello di saturazione e crescente interesse denotano un apertura per contenuti pionieristici. Questo tema tennistico può alimentare conversazioni approfondite e analisi di esperti, arricchendo l'offerta contenutistica. Anche il calcio beneficia di formazioni emergenti, ma la diferente distribuzione di questi contenuti richiede più abilità nel catturare l'entusiasmo sportivo.\n\nNonostante la fiamma vivace dell'interesse, il calcio rischia di scontrarsi con la saturazione intensa, specialmente con i trend saturati come #5 'probabili formazioni', dove la competizione è vasta e spietata. Raccomandiamo strategia e creatività per coloro che cercano di dominare questo imperante dominio.\n\nLa visione strategica suggerisce: nel flusso rapido delle tendenze, un azzardo calcolato può aprire porte sconosciute e ricche di potenziali scintille."
};
