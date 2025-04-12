const trendData = [
  {
    "rank": 1,
    "entity": "udinese - milan",
    "discover_score": 9.37823773633846,
    "score_1h": 60.103448275862064,
    "score_4h": 37.439075630252105,
    "score_7d": 3.591715976331361,
    "extracted_entities": "Udinese - Milan - Serie A - Calcio - Partita",
    "saturation_score": 1330.0
  },
  {
    "rank": 3,
    "entity": "maignan",
    "discover_score": 6.150846270115673,
    "score_1h": 39.87068965517241,
    "score_4h": 30.142857142857142,
    "score_7d": 4.079881656804734,
    "extracted_entities": "Mike Maignan - Calcio - AC Milan - Portiere - Francia",
    "saturation_score": 640.0
  },
  {
    "rank": 6,
    "entity": "simba la rue",
    "discover_score": 5.350505165307893,
    "score_1h": 1.5689655172413792,
    "score_4h": 1.6008403361344539,
    "score_7d": 10.763313609467456,
    "extracted_entities": "Simba La Rue - Musica - Rap - Artista",
    "saturation_score": 126.0
  },
  {
    "rank": 27,
    "entity": "orari motogp",
    "discover_score": 5.281773195954221,
    "score_1h": 22.310344827586206,
    "score_4h": 18.363445378151262,
    "score_7d": 10.355029585798816,
    "extracted_entities": "MotoGP - Orari - Corse - Calendario",
    "saturation_score": 4.0
  },
  {
    "rank": 2,
    "entity": "bari - palermo",
    "discover_score": 3.902889736310406,
    "score_1h": 4.439655172413794,
    "score_4h": 9.72629302767132,
    "score_7d": 4.319526627218934,
    "extracted_entities": "Bari - Palermo - Città - Viaggio - Italia",
    "saturation_score": 227.0
  },
  {
    "rank": 10,
    "entity": "propaganda live",
    "discover_score": 2.9952595090790535,
    "score_1h": 9.974137931034484,
    "score_4h": 13.820444077212475,
    "score_7d": 4.227810650887574,
    "extracted_entities": "Propaganda Live - Programma TV - Attualità - Satira - Politica",
    "saturation_score": 224.0
  },
  {
    "rank": 44,
    "entity": "torino comics",
    "discover_score": 2.8699067231803768,
    "score_1h": 5.663793103448276,
    "score_4h": 2.2016806722689077,
    "score_7d": 9.088757396449704,
    "extracted_entities": "Torino - Comics - Fiera - Eventi - Fumetti",
    "saturation_score": 71.0
  },
  {
    "rank": 16,
    "entity": "parigi roubaix 2025",
    "discover_score": 2.789033590208532,
    "score_1h": 4.991379310344827,
    "score_4h": 0.8886554621848739,
    "score_7d": 7.671597633136095,
    "extracted_entities": "Parigi-Roubaix - 2025 - Ciclismo - Gara - Francia",
    "saturation_score": 32.0
  },
  {
    "rank": 12,
    "entity": "lucy markovic",
    "discover_score": 2.7360588134289294,
    "score_1h": 8.431034482758621,
    "score_4h": 13.693277310924369,
    "score_7d": 3.9142011834319526,
    "extracted_entities": "Lucy Markovic",
    "saturation_score": 75.0
  },
  {
    "rank": 29,
    "entity": "previsioni meteo pasqua pasquetta",
    "discover_score": 2.3578967635976205,
    "score_1h": 0.8706896551724138,
    "score_4h": 1.6855947399880455,
    "score_7d": 7.115384615384615,
    "extracted_entities": "Previsioni - Meteo - Pasqua - Pasquetta",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "liliana resinovich",
    "discover_score": 2.2922273067964873,
    "score_1h": 3.5775862068965516,
    "score_4h": 2.4894957983193278,
    "score_7d": 4.603550295857988,
    "extracted_entities": "Liliana Resinovich",
    "saturation_score": 125.0
  },
  {
    "rank": 17,
    "entity": "gp bahrain",
    "discover_score": 2.1718754308245267,
    "score_1h": 3.8793103448275863,
    "score_4h": 3.0441176470588234,
    "score_7d": 5.579881656804734,
    "extracted_entities": "Gran Premio - Bahrain - Formula 1 - Circuito di Sakhir",
    "saturation_score": 312.0
  },
  {
    "rank": 11,
    "entity": "inter cagliari",
    "discover_score": 2.045700058140202,
    "score_1h": 19.112068965517242,
    "score_4h": 7.955882352941177,
    "score_7d": 3.5355029585798814,
    "extracted_entities": "Inter - Cagliari - Serie A - Partita di calcio",
    "saturation_score": 383.0
  },
  {
    "rank": 49,
    "entity": "ac milan",
    "discover_score": 1.9661922866377068,
    "score_1h": 1.2586206896551724,
    "score_4h": 0.2542016806722689,
    "score_7d": 6.92603550295858,
    "extracted_entities": "AC Milan - Calcio - Serie A - Squadra di calcio - Milano",
    "saturation_score": 69.0
  },
  {
    "rank": 9,
    "entity": "valencia - siviglia",
    "discover_score": 1.7010005727561068,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.958835835589466,
    "score_7d": 4.278106508875739,
    "extracted_entities": "Valencia - Siviglia - Calcio - Partita - Liga Spagnola",
    "saturation_score": 8.0
  },
  {
    "rank": 33,
    "entity": "carlos alcaraz",
    "discover_score": 1.6796617837963153,
    "score_1h": 0.0,
    "score_4h": 0.16544776906578532,
    "score_7d": 5.624260355029586,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 59.0
  },
  {
    "rank": 15,
    "entity": "bonus elettrodomestici 2025",
    "discover_score": 1.592831581114824,
    "score_1h": 2.146551724137931,
    "score_4h": 1.2836134453781511,
    "score_7d": 4.355029585798817,
    "extracted_entities": "Bonus elettrodomestici - 2025 - Incentivi - Risparmio energetico - Agevolazioni fiscali",
    "saturation_score": 4.0
  },
  {
    "rank": 36,
    "entity": "pagamento assegno unico aprile 2025",
    "discover_score": 1.454674138340768,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.12815126050420167,
    "score_7d": 4.985207100591716,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 4,
    "entity": "chi ha vinto the voice senior 2025",
    "discover_score": 1.4048784486178318,
    "score_1h": 2.396551724137931,
    "score_4h": 5.688970148728948,
    "score_7d": 1.804733727810651,
    "extracted_entities": "The Voice Senior - Vincitore - 2025",
    "saturation_score": 6.0
  },
  {
    "rank": 23,
    "entity": "minimoto",
    "discover_score": 1.2792022994424557,
    "score_1h": 0.5603448275862069,
    "score_4h": 1.1722689075630253,
    "score_7d": 3.7958579881656807,
    "extracted_entities": "Minimoto - Veicoli - Corse - Motori",
    "saturation_score": 174.0
  },
  {
    "rank": 45,
    "entity": "dimitrov",
    "discover_score": 1.2593969849615743,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.8613445378151261,
    "score_7d": 4.28698224852071,
    "extracted_entities": "Grigor Dimitrov - Tennis - ATP Tour",
    "saturation_score": 42.0
  },
  {
    "rank": 20,
    "entity": "juve lecce",
    "discover_score": 1.2559413647141813,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.1743697478991597,
    "score_7d": 3.6272189349112427,
    "extracted_entities": "Juventus - Lecce - Serie A - Partita di calcio",
    "saturation_score": 52.0
  },
  {
    "rank": 7,
    "entity": "musetti tsitsipas",
    "discover_score": 1.2341207240230758,
    "score_1h": 1.146551724137931,
    "score_4h": 0.8676470588235294,
    "score_7d": 2.952662721893491,
    "extracted_entities": "Lorenzo Musetti - Stefanos Tsitsipas - Tennis - Partita - ATP",
    "saturation_score": 88.0
  },
  {
    "rank": 40,
    "entity": "rino gaetano",
    "discover_score": 1.0459452307309247,
    "score_1h": 4.2844827586206895,
    "score_4h": 0.46008403361344535,
    "score_7d": 3.57396449704142,
    "extracted_entities": "Rino Gaetano - Cantante - Musica Italiana",
    "saturation_score": 40.0
  },
  {
    "rank": 8,
    "entity": "michael jordan",
    "discover_score": 1.0387608674062707,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.46218487394957986,
    "score_7d": 2.6360946745562126,
    "extracted_entities": "Michael Jordan - Basket - NBA - Chicago Bulls - Air Jordan",
    "saturation_score": 9.0
  },
  {
    "rank": 26,
    "entity": "lakers - rockets",
    "discover_score": 0.9591913150901145,
    "score_1h": 1.4655172413793103,
    "score_4h": 3.138655462184874,
    "score_7d": 2.3106508875739644,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "calcioscommesse",
    "discover_score": 0.9569589685349384,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.9411764705882353,
    "score_7d": 2.57396449704142,
    "extracted_entities": "Calcioscommesse - Scommesse sportive - Scandalo - Partite truccate - Indagini",
    "saturation_score": 74.0
  },
  {
    "rank": 13,
    "entity": "giuseppe carrisi",
    "discover_score": 0.8955500207688648,
    "score_1h": 23.258620689655174,
    "score_4h": 5.503524840898702,
    "score_7d": 1.2071005917159763,
    "extracted_entities": "Giuseppe Carrisi",
    "saturation_score": 7.0
  },
  {
    "rank": 38,
    "entity": "domenica delle palme 2025",
    "discover_score": 0.8037171031513974,
    "score_1h": 1.1637931034482758,
    "score_4h": 1.3592436974789917,
    "score_7d": 2.4289940828402368,
    "extracted_entities": "Domenica delle Palme - 2025 - Evento religioso - Settimana Santa - Cristianesimo",
    "saturation_score": 4.0
  },
  {
    "rank": 34,
    "entity": "barcellona - virtus bologna",
    "discover_score": 0.753987199259663,
    "score_1h": 0.853448275862069,
    "score_4h": 0.13025210084033614,
    "score_7d": 2.5414201183431953,
    "extracted_entities": "Barcellona - Virtus Bologna - Pallacanestro - Eurolega",
    "saturation_score": 9.0
  },
  {
    "rank": 30,
    "entity": "sla malattia",
    "discover_score": 0.7370920706006342,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.0546218487394958,
    "score_7d": 2.4497041420118344,
    "extracted_entities": "SLA - Malattia - Sclerosi Laterale Amiotrofica - Sintomi - Trattamenti",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "alejandro davidovich fokina",
    "discover_score": 0.6458600361579233,
    "score_1h": 1.5258620689655173,
    "score_4h": 0.46218487394957986,
    "score_7d": 2.0828402366863905,
    "extracted_entities": "Alejandro Davidovich Fokina - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "sfera ebbasta shiva",
    "discover_score": 0.6294151396836732,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.6533613445378151,
    "score_7d": 1.772189349112426,
    "extracted_entities": "Sfera Ebbasta - Shiva - Musica - Collaborazione",
    "saturation_score": 2.0
  },
  {
    "rank": 18,
    "entity": "graziano mesina",
    "discover_score": 0.6020898852907339,
    "score_1h": 9.655172413793103,
    "score_4h": 2.365546218487395,
    "score_7d": 1.177514792899408,
    "extracted_entities": "Graziano Mesina - Criminalità - Sardegna",
    "saturation_score": 194.0
  },
  {
    "rank": 19,
    "entity": "coachella 2025",
    "discover_score": 0.5907257975421738,
    "score_1h": 1.6982758620689655,
    "score_4h": 0.6845223445026546,
    "score_7d": 1.5976331360946745,
    "extracted_entities": "Coachella - 2025 - Festival - Musica - California",
    "saturation_score": 5.0
  },
  {
    "rank": 35,
    "entity": "wolfsburg - rb lipsia",
    "discover_score": 0.5013064926554017,
    "score_1h": 0.0,
    "score_4h": 0.2920168067226891,
    "score_7d": 1.5621301775147929,
    "extracted_entities": "Wolfsburg - RB Lipsia - Calcio - Bundesliga",
    "saturation_score": 4.0
  },
  {
    "rank": 42,
    "entity": "csk vs kkr",
    "discover_score": 0.49325866367463334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.6627218934911243,
    "extracted_entities": "CSK - KKR - Indian Premier League - Cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "investments",
    "discover_score": 0.4399784528127111,
    "score_1h": 0.0,
    "score_4h": 0.32563025210084034,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Obbligazioni - Fondi comuni",
    "saturation_score": 7.0
  },
  {
    "rank": 46,
    "entity": "mohamed salah",
    "discover_score": 0.4231570311178744,
    "score_1h": 1.3793103448275863,
    "score_4h": 0.0,
    "score_7d": 1.4023668639053253,
    "extracted_entities": "Mohamed Salah - Calciatore - Liverpool FC - Premier League - Egitto",
    "saturation_score": 8.0
  },
  {
    "rank": 31,
    "entity": "samsunspor - galatasaray",
    "discover_score": 0.41443829864045895,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.11764705882352941,
    "score_7d": 1.2426035502958581,
    "extracted_entities": "Samsunspor - Galatasaray - Partita di calcio - Super Lig - Turchia",
    "saturation_score": 3.0
  },
  {
    "rank": 47,
    "entity": "pistons - bucks",
    "discover_score": 0.3813623014805654,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0,
    "score_7d": 1.2337278106508875,
    "extracted_entities": "Detroit Pistons - Milwaukee Bucks - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "castellucci",
    "discover_score": 0.33928867858655803,
    "score_1h": 0.0,
    "score_4h": 0.3562638444499139,
    "score_7d": 0.9230769230769231,
    "extracted_entities": "Romeo Castellucci - Teatro - Regista",
    "saturation_score": 431.0
  },
  {
    "rank": 28,
    "entity": "trail blazers - warriors",
    "discover_score": 0.31595629409067005,
    "score_1h": 0.0,
    "score_4h": 0.5252100840336135,
    "score_7d": 0.7248520710059172,
    "extracted_entities": "Trail Blazers - Warriors - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "incidente elicottero fiume hudson",
    "discover_score": 0.2553654786005555,
    "score_1h": 0.0,
    "score_4h": 0.25840336134453784,
    "score_7d": 0.5207100591715976,
    "extracted_entities": "Incidente - Elicottero - Fiume Hudson",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "antonella viola",
    "discover_score": 0.24288579851672645,
    "score_1h": 0.0,
    "score_4h": 0.26260504201680673,
    "score_7d": 0.5502958579881657,
    "extracted_entities": "Antonella Viola - Immunologia - Ricerca scientifica - Università di Padova",
    "saturation_score": 9.0
  },
  {
    "rank": 50,
    "entity": "kings - clippers",
    "discover_score": 0.2238167359136389,
    "score_1h": 0.0,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Kings - Clippers - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "nuggets - grizzlies",
    "discover_score": 0.21670351687321973,
    "score_1h": 0.0,
    "score_4h": 0.46218487394957986,
    "score_7d": 0.35798816568047337,
    "extracted_entities": "Nuggets - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "s&p rating italia",
    "discover_score": 0.17539281400090553,
    "score_1h": 0.0,
    "score_4h": 0.14705882352941177,
    "score_7d": 0.23964497041420119,
    "extracted_entities": "S&P - Rating - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "michael jordan oggi",
    "discover_score": 0.13511835283875231,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.10650887573964496,
    "extracted_entities": "Michael Jordan - Oggi - Attualità - Notizie",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "abigail esparza reyes",
    "discover_score": 0.13317638191417183,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.10650887573964496,
    "extracted_entities": "Abigail Esparza Reyes",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "kaufland",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "tommy cash",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "lebron james",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "luna piena",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "celtics - hornets",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "conte juventus",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "michele traversa",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "alcaraz oggi",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "grigor dimitrov",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "classifica nba",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "arthur fils",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "arzignano valchiampo - caldiero terme",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "al-ettifaq - al hilal",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "lumezzane - novara",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "mavericks - raptors",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "mission impossible 3",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "fils",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "alcione - feralpisalò",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "fidanzata clementino",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "jordan",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "black mirror 7",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "karla sofía gascón",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "showers",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "paolo fox oroscopo 11 aprile 2025",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "air",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "nba standings",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "matt damon",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "grok",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "suns - spurs",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "estrazione lotto",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "space cowboys",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "milan news",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "psl",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "lens reims",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "investment advisor",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "stasi",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "montenegro",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "rita de crescenzo",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "ministro urso",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "virginia sanjust",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "marco predolin",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "renato zero",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "operazione vendetta",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "montezemolo",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "belve",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "mickey rourke",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "bill gates",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "atp live",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "boiocchi",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "stefania battistini",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "noipa stipendio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "roma lazio",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "isola d'elba",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "trump dazi cina",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "angela melillo",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "aspi",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "atene",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "millionday",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "messaggero veneto",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "seborga",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "propaganda live stasera",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "isabella uomini e donne",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "rosanna uomini e donne",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "natalia grace",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "samsunspor vs galatasaray",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "san cataldo",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "the last of us",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "francesco pio esposito",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "phuket",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "iker bravo",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "restaurant",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "casteddu online",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "bordighera",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "strahinja pavlović",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "willem dafoe",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "asta btp 11 aprile 2025",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bracciano",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "annalisa minetti",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "montepremi montecarlo 2025",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "lorenzo lucca",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "الطقس غدًا",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "renzo arbore",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "mulazzo",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "carofiglio",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "il giardiniere netflix",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "good american family storia vera",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "lahore qalandars vs islamabad united",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "rinku singh",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "wolfsburg lipsia",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "carlo ancelotti",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "casa a prima vista",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "inazuma eleven victory road",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "gazzettino",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "junior firpo",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "ligabue",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "moratti",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "paolo calissano",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "angelina jolie",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "la verità",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "theo hernández",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "alexei popyrin",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "magic johnson",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "panatta",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "marotta inter",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "mara carfagna",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "salone del libro 2025",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-12 09:41:02",
  "trends_count": 164,
  "top_score": 9.37823773633846,
  "runtime_minutes": 3.4714295427004496,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "O profeti, ascoltate! I venti dei trend ci svelano che in Italia dominano il calcio e lo sport in generale come pilastri del discorso pubblico, con la passione ardente per le partite della Serie A e l'emozione rinvigorita dalla MotoGP. Il prossimo capitolo si apre con l'opportunità di concentrare i riflettori sui dettagli della \"parigi roubaix 2025\" (#8), un gioiello ancora poco esplorato con un indice di saturazione di appena 32, dove le manovre ciclistiche promettono di catturare l'attenzione su Google Discover.\n\nTuttavia, o creatori di contenuti, v'è da esercitare prudenza nei campi già sovraffollati. L'eco della recente partita \"udinese - milan\" (#1) si disperde in un mare di parole con un'alta saturazione, insinuando un rischio nel cercare di emergere in un oceano già tempestoso.\n\nIn sintesi, mentre alcuni temi brillano come stelle solitarie, altri rischiano di essere inghiottiti dalle ombre della competizione. Lasciatevi guidare dall'intuito verso percorsi meno battuti, dove l'opportunità di essere scoperti su Google Discover è ancor più luminosa."
};
