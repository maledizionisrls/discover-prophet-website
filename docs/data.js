const trendData = [
  {
    "rank": 1,
    "entity": "udinese - milan",
    "discover_score": 11.33104782326533,
    "score_1h": 66.90517241379311,
    "score_4h": 49.41596638655462,
    "score_7d": 3.4201183431952664,
    "extracted_entities": "Udinese - Milan - Serie A - Calcio - Partita",
    "saturation_score": 1340.0
  },
  {
    "rank": 28,
    "entity": "domenica delle palme 2025",
    "discover_score": 5.167834138681546,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.7436974789915967,
    "score_7d": 14.778106508875739,
    "extracted_entities": "Domenica delle Palme - 2025 - Evento religioso - Settimana Santa - Cristianesimo",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "gp bahrain",
    "discover_score": 4.2785265146729685,
    "score_1h": 5.258620689655173,
    "score_4h": 0.8592436974789917,
    "score_7d": 12.423076923076923,
    "extracted_entities": "Gran Premio - Bahrain - Formula 1",
    "saturation_score": 588.0
  },
  {
    "rank": 40,
    "entity": "classifica nba",
    "discover_score": 3.5641520830383953,
    "score_1h": 0.11206896551724138,
    "score_4h": 0.657563025210084,
    "score_7d": 11.387573964497042,
    "extracted_entities": "NBA - Classifica - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 8,
    "entity": "simba la rue",
    "discover_score": 3.5396125968515615,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.43067226890756305,
    "score_7d": 8.34319526627219,
    "extracted_entities": "Simba La Rue - Musica - Rap - Artista",
    "saturation_score": 120.0
  },
  {
    "rank": 30,
    "entity": "previsioni meteo pasqua pasquetta",
    "discover_score": 3.5161492078255616,
    "score_1h": 2.9655172413793105,
    "score_4h": 1.5168067226890756,
    "score_7d": 10.461538461538462,
    "extracted_entities": "Previsioni - Meteo - Pasqua - Pasquetta",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "orari motogp",
    "discover_score": 3.3450752956179324,
    "score_1h": 28.92241379310345,
    "score_4h": 4.9978991596638656,
    "score_7d": 8.245562130177515,
    "extracted_entities": "MotoGP - Orari - Corse - Calendario",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "maignan",
    "discover_score": 3.240960425010262,
    "score_1h": 34.05172413793103,
    "score_4h": 13.331932773109244,
    "score_7d": 3.8727810650887573,
    "extracted_entities": "Mike Maignan - Calcio - AC Milan - Portiere - Francia",
    "saturation_score": 585.0
  },
  {
    "rank": 3,
    "entity": "valentina del re",
    "discover_score": 3.022584922550676,
    "score_1h": 5.706896551724138,
    "score_4h": 3.2394957983193278,
    "score_7d": 5.097633136094674,
    "extracted_entities": "Valentina Del Re",
    "saturation_score": 290.0
  },
  {
    "rank": 2,
    "entity": "bari - palermo",
    "discover_score": 2.8961636454320168,
    "score_1h": 28.922413793103445,
    "score_4h": 12.1890756302521,
    "score_7d": 2.423076923076923,
    "extracted_entities": "Bari - Palermo - Città - Viaggio - Italia",
    "saturation_score": 237.0
  },
  {
    "rank": 6,
    "entity": "liliana resinovich",
    "discover_score": 2.245382909750469,
    "score_1h": 2.543103448275862,
    "score_4h": 1.9012605042016806,
    "score_7d": 4.8639053254437865,
    "extracted_entities": "Liliana Resinovich",
    "saturation_score": 79.0
  },
  {
    "rank": 18,
    "entity": "parigi roubaix 2025",
    "discover_score": 1.8987871321324916,
    "score_1h": 0.0,
    "score_4h": 0.5966386554621849,
    "score_7d": 5.559171597633136,
    "extracted_entities": "Parigi-Roubaix - 2025 - Ciclismo - Gara - Francia",
    "saturation_score": 34.0
  },
  {
    "rank": 22,
    "entity": "shiva sfera ebbasta",
    "discover_score": 1.7727147007370838,
    "score_1h": 5.2155172413793105,
    "score_4h": 1.1554621848739497,
    "score_7d": 5.2485207100591715,
    "extracted_entities": "Shiva - Sfera Ebbasta - Musica - Collaborazione",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "lucy markovic",
    "discover_score": 1.70369870730781,
    "score_1h": 32.94827586206897,
    "score_4h": 5.216386554621849,
    "score_7d": 3.27810650887574,
    "extracted_entities": "Lucy Markovic",
    "saturation_score": 75.0
  },
  {
    "rank": 36,
    "entity": "carlos alcaraz",
    "discover_score": 1.6997678516373105,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3697478991596639,
    "score_7d": 5.71301775147929,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Sport",
    "saturation_score": 50.0
  },
  {
    "rank": 7,
    "entity": "musetti tsitsipas",
    "discover_score": 1.6383024314473624,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.3739495798319328,
    "score_7d": 4.062130177514793,
    "extracted_entities": "Lorenzo Musetti - Stefanos Tsitsipas - Tennis - Partita - ATP Tour",
    "saturation_score": 129.0
  },
  {
    "rank": 9,
    "entity": "valencia - siviglia",
    "discover_score": 1.5927325357387045,
    "score_1h": 1.1206896551724137,
    "score_4h": 0.35084033613445376,
    "score_7d": 4.171597633136095,
    "extracted_entities": "Valencia - Siviglia - Città - Spagna - Viaggio",
    "saturation_score": 9.0
  },
  {
    "rank": 4,
    "entity": "chi ha vinto the voice senior 2025",
    "discover_score": 1.562670493740156,
    "score_1h": 10.887931034482758,
    "score_4h": 5.579831932773109,
    "score_7d": 2.1568047337278107,
    "extracted_entities": "The Voice Senior 2025 - Vincitore",
    "saturation_score": 4.0
  },
  {
    "rank": 38,
    "entity": "alejandro davidovich fokina",
    "discover_score": 1.3192143434189272,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.4096638655462185,
    "score_7d": 4.497041420118343,
    "extracted_entities": "Alejandro Davidovich Fokina - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 7.0
  },
  {
    "rank": 32,
    "entity": "juve lecce",
    "discover_score": 1.2767788472919155,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.634453781512605,
    "score_7d": 4.168639053254438,
    "extracted_entities": "Juventus - Lecce - Serie A - Partita di calcio",
    "saturation_score": 52.0
  },
  {
    "rank": 15,
    "entity": "bonus elettrodomestici 2025",
    "discover_score": 1.097863013002854,
    "score_1h": 3.3275862068965516,
    "score_4h": 0.6890756302521008,
    "score_7d": 3.100591715976331,
    "extracted_entities": "Bonus - Elettrodomestici - 2025",
    "saturation_score": 6.0
  },
  {
    "rank": 16,
    "entity": "inter cagliari",
    "discover_score": 1.0932359438474581,
    "score_1h": 4.137931034482758,
    "score_4h": 1.6785714285714286,
    "score_7d": 2.8579881656804735,
    "extracted_entities": "Inter - Cagliari - Calcio - Serie A - Partita",
    "saturation_score": 298.0
  },
  {
    "rank": 20,
    "entity": "sla malattia",
    "discover_score": 1.0301174142116243,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4642857142857143,
    "score_7d": 3.121301775147929,
    "extracted_entities": "SLA - Malattia - Sclerosi Laterale Amiotrofica - Sintomi - Trattamenti",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "castellucci",
    "discover_score": 1.0155820321586833,
    "score_1h": 1.6293103448275863,
    "score_4h": 0.9894957983193278,
    "score_7d": 3.0325443786982245,
    "extracted_entities": "Romeo Castellucci - Teatro - Regista - Societas Raffaello Sanzio",
    "saturation_score": 473.0
  },
  {
    "rank": 14,
    "entity": "michael jordan",
    "discover_score": 0.8971574429109143,
    "score_1h": 0.5423728813559322,
    "score_4h": 0.22058823529411764,
    "score_7d": 2.5887573964497044,
    "extracted_entities": "Michael Jordan - Basket - NBA - Chicago Bulls - Air Jordan",
    "saturation_score": 9.0
  },
  {
    "rank": 39,
    "entity": "rating italia",
    "discover_score": 0.8753801275199327,
    "score_1h": 0.6016949152542372,
    "score_4h": 0.4327731092436975,
    "score_7d": 2.9585798816568047,
    "extracted_entities": "Rating - Italia - Valutazione credito - Agenzie di rating",
    "saturation_score": 130.0
  },
  {
    "rank": 47,
    "entity": "dimitrov",
    "discover_score": 0.8079489822011401,
    "score_1h": 0.847457627118644,
    "score_4h": 0.2184873949579832,
    "score_7d": 2.8579881656804735,
    "extracted_entities": "Grigor Dimitrov - Tennis - ATP Tour - Bulgaria - Classifica ATP",
    "saturation_score": 47.0
  },
  {
    "rank": 11,
    "entity": "calcioscommesse",
    "discover_score": 0.7144158759355738,
    "score_1h": 0.0,
    "score_4h": 0.21218487394957983,
    "score_7d": 1.9319526627218935,
    "extracted_entities": "Calcioscommesse - Scommesse sportive - Scandalo - Partite truccate - Indagini",
    "saturation_score": 47.0
  },
  {
    "rank": 21,
    "entity": "barcellona - virtus bologna",
    "discover_score": 0.6834838030176057,
    "score_1h": 2.155172413793103,
    "score_4h": 0.49789915966386555,
    "score_7d": 2.0,
    "extracted_entities": "Barcellona - Virtus Bologna - Basket - Eurolega",
    "saturation_score": 9.0
  },
  {
    "rank": 35,
    "entity": "samsunspor - galatasaray",
    "discover_score": 0.6513933202315194,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.24159663865546216,
    "score_7d": 2.1449704142011834,
    "extracted_entities": "Samsunspor - Galatasaray - Partita di calcio - Super Lig - Turchia",
    "saturation_score": 3.0
  },
  {
    "rank": 13,
    "entity": "incidente elicottero fiume hudson",
    "discover_score": 0.6417701110180731,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.0,
    "score_7d": 1.8254437869822486,
    "extracted_entities": "Incidente - Elicottero - Fiume Hudson",
    "saturation_score": 2.0
  },
  {
    "rank": 25,
    "entity": "lakers - rockets",
    "discover_score": 0.6190901225983617,
    "score_1h": 9.405172413793103,
    "score_4h": 3.1953781512605044,
    "score_7d": 1.1272189349112427,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "luna piena",
    "discover_score": 0.5963631360823338,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.18487394957983194,
    "score_7d": 2.07396449704142,
    "extracted_entities": "Luna - Fasi lunari - Astronomia",
    "saturation_score": 71.0
  },
  {
    "rank": 12,
    "entity": "giuseppe carrisi",
    "discover_score": 0.5825571905860192,
    "score_1h": 12.206896551724139,
    "score_4h": 3.3361344537815123,
    "score_7d": 0.7633136094674556,
    "extracted_entities": "Giuseppe Carrisi - Giornalista - Scrittore - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 17,
    "entity": "trail blazers - warriors",
    "discover_score": 0.5381328327386484,
    "score_1h": 1.4137931034482758,
    "score_4h": 1.3970588235294117,
    "score_7d": 1.195266272189349,
    "extracted_entities": "Trail Blazers - Warriors - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "michael jordan oggi",
    "discover_score": 0.524680715118064,
    "score_1h": 0.0,
    "score_4h": 0.6470588235294117,
    "score_7d": 1.6331360946745561,
    "extracted_entities": "Michael Jordan - Oggi - Attualità - Notizie",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "investments",
    "discover_score": 0.44527158696112773,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.41386554621848737,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Obbligazioni - Fondi comuni",
    "saturation_score": 8.0
  },
  {
    "rank": 45,
    "entity": "mavericks - raptors",
    "discover_score": 0.4397469867044115,
    "score_1h": 0.0,
    "score_4h": 0.023109243697478993,
    "score_7d": 1.4585798816568047,
    "extracted_entities": "Mavericks - Raptors - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "wolfsburg - rb lipsia",
    "discover_score": 0.4138427337467681,
    "score_1h": 0.0,
    "score_4h": 0.012605042016806723,
    "score_7d": 1.2011834319526626,
    "extracted_entities": "Wolfsburg - RB Lipsia - Calcio - Bundesliga",
    "saturation_score": 4.0
  },
  {
    "rank": 26,
    "entity": "nuggets - grizzlies",
    "discover_score": 0.407874110689436,
    "score_1h": 0.0,
    "score_4h": 0.031512605042016806,
    "score_7d": 1.2011834319526629,
    "extracted_entities": "Denver Nuggets - Memphis Grizzlies - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 48,
    "entity": "suns - spurs",
    "discover_score": 0.3890997103810165,
    "score_1h": 0.0,
    "score_4h": 0.1638655462184874,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Phoenix Suns - San Antonio Spurs - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 1.0
  },
  {
    "rank": 34,
    "entity": "coachella 2025",
    "discover_score": 0.3799771048161272,
    "score_1h": 0.7844827586206896,
    "score_4h": 0.19117647058823528,
    "score_7d": 1.106508875739645,
    "extracted_entities": "Coachella - 2025 - Festival - Musica - California",
    "saturation_score": 5.0
  },
  {
    "rank": 33,
    "entity": "mohamed salah",
    "discover_score": 0.34072072270926623,
    "score_1h": 0.0,
    "score_4h": 0.04831932773109244,
    "score_7d": 0.9822485207100593,
    "extracted_entities": "Mohamed Salah - Calciatore - Liverpool - Premier League - Egitto",
    "saturation_score": 5.0
  },
  {
    "rank": 49,
    "entity": "michele traversa",
    "discover_score": 0.3374795819654415,
    "score_1h": 0.0,
    "score_4h": 0.4180672268907563,
    "score_7d": 0.9408284023668638,
    "extracted_entities": "Michele Traversa",
    "saturation_score": 53.0
  },
  {
    "rank": 44,
    "entity": "csk vs kkr",
    "discover_score": 0.31085913862221154,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.4222689075630252,
    "score_7d": 0.8076923076923077,
    "extracted_entities": "CSK - KKR - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "pistons - bucks",
    "discover_score": 0.2795232676303768,
    "score_1h": 0.0,
    "score_4h": 0.06302521008403361,
    "score_7d": 0.7455621301775147,
    "extracted_entities": "Pistons - Bucks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "kings - clippers",
    "discover_score": 0.2706903282845889,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3235294117647059,
    "score_7d": 0.6124260355029586,
    "extracted_entities": "Kings - Clippers - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "antonella viola",
    "discover_score": 0.25972152431322215,
    "score_1h": 2.4224137931034484,
    "score_4h": 0.6617647058823529,
    "score_7d": 0.47041420118343197,
    "extracted_entities": "Antonella Viola - Immunologia - Ricerca scientifica",
    "saturation_score": 8.0
  },
  {
    "rank": 42,
    "entity": "celtics - hornets",
    "discover_score": 0.16092472873707278,
    "score_1h": 0.0,
    "score_4h": 0.32983193277310924,
    "score_7d": 0.1804733727810651,
    "extracted_entities": "Celtics - Hornets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "kaufland",
    "discover_score": 0.15325084771514738,
    "score_1h": 2.439655172413793,
    "score_4h": 0.5966386554621849,
    "score_7d": 0.08875739644970414,
    "extracted_entities": "Kaufland - Supermercato - Germania - Vendita al dettaglio - Europa",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "alcaraz oggi",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "grigor dimitrov",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "arzignano valchiampo - caldiero terme",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "arthur fils",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "showers",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mission impossible 3",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "al-ettifaq - al hilal",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "lumezzane - novara",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "tommy cash",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "graziano mesina",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "karla sofía gascón",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "alcione - feralpisalò",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "conte juventus",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "fidanzata clementino",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "jordan",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "nba standings",
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
    "entity": "black mirror 7",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "air",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "paolo fox oroscopo 11 aprile 2025",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "investment advisor",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "matt damon",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "grok",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "leao",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "space cowboys",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "estrazione lotto",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "milan news",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "psl",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "lens reims",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "palermo",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "rita de crescenzo",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "montenegro",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "messaggero veneto",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "bianca censori",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "bill gates",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "ministro urso",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "stasi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "pagamento assegno unico aprile 2025",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "renato zero",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "belve",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "virginia sanjust",
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
    "entity": "marco predolin",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "montezemolo",
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
    "entity": "atp live",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "stefania battistini",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "rafael leão",
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
    "entity": "noipa stipendio",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "roma lazio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "isola d'elba",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "casteddu online",
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
    "entity": "atene",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "aspi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "restaurant",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "trump dazi cina",
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
    "entity": "angela melillo",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "natalia grace",
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
    "entity": "seborga",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "francesco pio esposito",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "isabella uomini e donne",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "san cataldo",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "the last of us",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "samsunspor vs galatasaray",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "rosanna uomini e donne",
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
    "entity": "iker bravo",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "phuket",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "gazzettino",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "strahinja pavlović",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "willem dafoe",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "bracciano",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "bordighera",
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
    "entity": "la verità",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "lorenzo lucca",
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
    "entity": "anticipazioni tradimento",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "annalisa minetti",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "الطقس غدًا",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "good american family storia vera",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "il giardiniere netflix",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "renzo arbore",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "carofiglio",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "mulazzo",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "wolfsburg lipsia",
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
    "entity": "casa a prima vista",
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
    "entity": "inazuma eleven victory road",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "moratti",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "angelina jolie",
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
    "entity": "paolo calissano",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "theo hernández",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "okoye",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "alexei popyrin",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "magic johnson",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "hojlund",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "panatta",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "marotta inter",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "tevez",
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
  "timestamp": "2025-04-12 07:38:22",
  "trends_count": 164,
  "top_score": 11.33104782326533,
  "runtime_minutes": 3.304813627401988,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle pieghe delle tendenze odierne, tre temi dominano l'interesse collettivo: sport, musica e cultura religiosa. Tra le frequenti menzioni sportive, il calcio con la partita \"Udinese - Milan\" e la \"classifica NBA\" mostrano un crescente fervore, mentre l'attrazione musicale è incarnata da \"Simba La Rue\" e la collaborazione artistica tra \"Shiva e Sfera Ebbasta\". La quiete del sacro è riscoperta nella \"Domenica delle Palme 2025\", simbolo di fede e riflessione futura.\n\nRiveliamo ora le opportunità brillanti per la scoperta. La \"Domenica delle Palme 2025\" (#2), con il suo crescente interesse settimanale e una saturazione assai bassa, offre un terreno fertile per nuovi contenuti, pronti a fiorire. Allo stesso modo, le previsioni \"meteo per Pasqua e Pasquetta\" (#6) mostrano un trend di curiosità ascendete e una saturazione trascurabile, promettendo un'opportunità d'oro per connessioni climatiche.\n\nMa l'invito alla prudenza non va ignorato. \"Udinese - Milan\" (#1) brilla in cima, ma il suo cielo è coperto da nuvole di elevata saturazione, richiedendo astuzia nel navigare la competizione intensa che funge da custode dei contenuti.\n\nCosì, con saggezza e strategia, guidi il tuo cammino verso la scoperta, abbracciando il potenziale e riconoscendo i confini del rischioso."
};
