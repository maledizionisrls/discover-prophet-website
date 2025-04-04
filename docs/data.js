const trendData = [
  {
    "rank": 1,
    "entity": "brignone",
    "discover_score": 17.426231528236393,
    "score_1h": 62.577586206896555,
    "score_4h": 31.451882845188287,
    "score_7d": 9.781065088757396,
    "extracted_entities": "Federica Brignone - Sci alpino - Italia",
    "saturation_score": 1860.0
  },
  {
    "rank": 18,
    "entity": "investing",
    "discover_score": 12.910637507594382,
    "score_1h": 44.724137931034484,
    "score_4h": 4.260504201680672,
    "score_7d": 28.011834319526628,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Finanza personale",
    "saturation_score": 7.0
  },
  {
    "rank": 36,
    "entity": "lotto",
    "discover_score": 10.13015732860345,
    "score_1h": 68.14655172413794,
    "score_4h": 46.3718487394958,
    "score_7d": 15.85207100591716,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazione - Numeri - Vincite",
    "saturation_score": 1630.0
  },
  {
    "rank": 33,
    "entity": "invalsi",
    "discover_score": 9.645601624237678,
    "score_1h": 50.38793103448276,
    "score_4h": 15.915966386554622,
    "score_7d": 21.881656804733726,
    "extracted_entities": "INVALSI - Test standardizzati - Scuola italiana - Valutazione educativa",
    "saturation_score": 45.0
  },
  {
    "rank": 29,
    "entity": "wall street",
    "discover_score": 7.240680536901192,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.3130252100840336,
    "score_7d": 19.958579881656807,
    "extracted_entities": "Wall Street - Finanza - Borsa - New York - Mercati finanziari",
    "saturation_score": 278.0
  },
  {
    "rank": 26,
    "entity": "4 aprile",
    "discover_score": 6.623714351596911,
    "score_1h": 58.939655172413794,
    "score_4h": 47.554621848739494,
    "score_7d": 6.701183431952662,
    "extracted_entities": "4 aprile - Eventi storici - Compleanni celebri - Anniversari - Festività",
    "saturation_score": 8800.0
  },
  {
    "rank": 16,
    "entity": "san vincenzo",
    "discover_score": 6.553911356871935,
    "score_1h": 4.2155172413793105,
    "score_4h": 0.9411764705882353,
    "score_7d": 16.13609467455621,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto",
    "saturation_score": 90.0
  },
  {
    "rank": 46,
    "entity": "stasera in tv",
    "discover_score": 5.6583520554364695,
    "score_1h": 25.413793103448278,
    "score_4h": 7.370618121725677,
    "score_7d": 15.692307692307693,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Canali televisivi",
    "saturation_score": 88.0
  },
  {
    "rank": 35,
    "entity": "microsoft",
    "discover_score": 5.149073924788334,
    "score_1h": 67.07349503214493,
    "score_4h": 13.842436974789916,
    "score_7d": 11.857988165680474,
    "extracted_entities": "Microsoft - Tecnologia - Software - Azienda - Informatica",
    "saturation_score": 124.0
  },
  {
    "rank": 21,
    "entity": "vinitaly 2025",
    "discover_score": 4.25687178867389,
    "score_1h": 6.732758620689655,
    "score_4h": 0.9516806722689075,
    "score_7d": 11.76923076923077,
    "extracted_entities": "Vinitaly - 2025 - Fiera del Vino - Verona - Eventi enologici",
    "saturation_score": 93.0
  },
  {
    "rank": 2,
    "entity": "chelsea - tottenham",
    "discover_score": 3.2175956210499006,
    "score_1h": 2.8965517241379306,
    "score_4h": 3.7247899159663866,
    "score_7d": 4.704142011834319,
    "extracted_entities": "Chelsea - Tottenham - Calcio - Premier League - Partita",
    "saturation_score": 75.0
  },
  {
    "rank": 19,
    "entity": "ftse mib",
    "discover_score": 2.8956386064234585,
    "score_1h": 18.029222676797193,
    "score_4h": 2.03781512605042,
    "score_7d": 7.893491124260355,
    "extracted_entities": "FTSE MIB - Borsa Italiana - Indice azionario - Mercato finanziario - Investimenti",
    "saturation_score": 126.0
  },
  {
    "rank": 3,
    "entity": "lakers - warriors",
    "discover_score": 2.504177702394381,
    "score_1h": 5.767241379310345,
    "score_4h": 15.292016806722689,
    "score_7d": 1.668639053254438,
    "extracted_entities": "Lakers - Warriors - NBA - Basket - Partita",
    "saturation_score": 3.0
  },
  {
    "rank": 5,
    "entity": "dune",
    "discover_score": 2.3719231193100323,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.3760504201680672,
    "score_7d": 5.3047337278106514,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 39.0
  },
  {
    "rank": 7,
    "entity": "lulu selassie",
    "discover_score": 2.3490620763032855,
    "score_1h": 0.3448275862068966,
    "score_4h": 1.0021008403361344,
    "score_7d": 5.5,
    "extracted_entities": "Lulù Selassié",
    "saturation_score": 4.0
  },
  {
    "rank": 30,
    "entity": "ticketmaster",
    "discover_score": 1.9878620215653977,
    "score_1h": 1.146551724137931,
    "score_4h": 0.5063025210084033,
    "score_7d": 6.384615384615385,
    "extracted_entities": "Ticketmaster - Vendita biglietti - Eventi - Concerti - Spettacoli",
    "saturation_score": 8.0
  },
  {
    "rank": 14,
    "entity": "anna kalinskaja",
    "discover_score": 1.6116760018921676,
    "score_1h": 0.0,
    "score_4h": 1.3991596638655464,
    "score_7d": 4.316568047337277,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "sciopero 4 aprile",
    "discover_score": 1.5332361337511426,
    "score_1h": 11.85344827586207,
    "score_4h": 12.99579831932773,
    "score_7d": 1.9556213017751478,
    "extracted_entities": "Sciopero - 4 aprile - Proteste - Lavoratori - Sindacati",
    "saturation_score": 30.0
  },
  {
    "rank": 15,
    "entity": "sciopero trenitalia",
    "discover_score": 1.4257445589410465,
    "score_1h": 3.75,
    "score_4h": 0.3791709152280159,
    "score_7d": 4.133136094674557,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "infarto nanni moretti",
    "discover_score": 1.4168870541990488,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.8403361344537815,
    "score_7d": 4.905325443786982,
    "extracted_entities": "Infarto - Nanni Moretti",
    "saturation_score": 3.0
  },
  {
    "rank": 4,
    "entity": "vincita riccione",
    "discover_score": 1.1989208011268169,
    "score_1h": 1.3448275862068966,
    "score_4h": 1.4096638655462184,
    "score_7d": 2.3816568047337277,
    "extracted_entities": "Vincita - Riccione - Lotteria - Jackpot - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "devil may cry",
    "discover_score": 0.840779201056491,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.20378151260504201,
    "score_7d": 3.0147928994082838,
    "extracted_entities": "Devil May Cry - Videogioco - Capcom - Dante - Azione",
    "saturation_score": 47.0
  },
  {
    "rank": 42,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.771315165018704,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7542016806722689,
    "score_7d": 2.5207100591715976,
    "extracted_entities": "Chelsea - Tottenham - Partita di calcio - Premier League",
    "saturation_score": 6.0
  },
  {
    "rank": 34,
    "entity": "dune film",
    "discover_score": 0.7706695988876933,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.7076052178193454,
    "score_7d": 2.440828402366864,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "matilda de angelis",
    "discover_score": 0.7579746195661604,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.591715976331361,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 58.0
  },
  {
    "rank": 22,
    "entity": "lorenzo sonego",
    "discover_score": 0.7303224162901525,
    "score_1h": 1.3103448275862069,
    "score_4h": 0.680672268907563,
    "score_7d": 2.1272189349112427,
    "extracted_entities": "Lorenzo Sonego - Tennis - Atleta",
    "saturation_score": 5.0
  },
  {
    "rank": 17,
    "entity": "raffaella scudiero",
    "discover_score": 0.6187629256030409,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.12779086530009492,
    "score_7d": 1.8076923076923077,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 38.0
  },
  {
    "rank": 40,
    "entity": "assemblea sinodale",
    "discover_score": 0.548033801762308,
    "score_1h": 0.0,
    "score_4h": 0.27521008403361347,
    "score_7d": 1.78698224852071,
    "extracted_entities": "Assemblea - Sinodo - Chiesa Cattolica - Vescovi - Discussione",
    "saturation_score": 96.0
  },
  {
    "rank": 41,
    "entity": "kkr vs srh",
    "discover_score": 0.5399307531325538,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.7810650887573964,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.5228712218322351,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.3106508875739644,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "sabina ciuffini",
    "discover_score": 0.47570422433676407,
    "score_1h": 0.0,
    "score_4h": 0.7268907563025211,
    "score_7d": 0.9704142011834319,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70 - Show televisivi",
    "saturation_score": 8.0
  },
  {
    "rank": 11,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.4541198467568238,
    "score_1h": 0.45689655172413796,
    "score_4h": 1.1276150627615062,
    "score_7d": 0.8757396449704142,
    "extracted_entities": "Venerdì - 4 aprile - Auguri - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "gaetano migliaccio",
    "discover_score": 0.41659424480370333,
    "score_1h": 0.0,
    "score_4h": 0.26260504201680673,
    "score_7d": 0.8461538461538461,
    "extracted_entities": "Gaetano Migliaccio",
    "saturation_score": 76.0
  },
  {
    "rank": 47,
    "entity": "helena prestes tapiro",
    "discover_score": 0.3913724131460588,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.09663865546218488,
    "score_7d": 1.2485207100591715,
    "extracted_entities": "Helena Prestes - Tapiro",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "greta scarano",
    "discover_score": 0.3911895065756953,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.2603550295857988,
    "extracted_entities": "Greta Scarano - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 81.0
  },
  {
    "rank": 13,
    "entity": "laura loomer",
    "discover_score": 0.3702974321790845,
    "score_1h": 2.336206896551724,
    "score_4h": 0.3004201680672269,
    "score_7d": 0.8461538461538461,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "ordinanza maturità",
    "discover_score": 0.35607766399528396,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.2605042016806723,
    "score_7d": 1.0591715976331362,
    "extracted_entities": "Ordinanza - Maturità - Esame di Stato - Ministero dell'Istruzione",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "radio deejay riccione",
    "discover_score": 0.3538639207723121,
    "score_1h": 6.163793103448276,
    "score_4h": 0.4012605042016807,
    "score_7d": 0.6952662721893491,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "north sentinel",
    "discover_score": 0.3212410643816552,
    "score_1h": 0.0,
    "score_4h": 0.6701680672268908,
    "score_7d": 0.7011834319526628,
    "extracted_entities": "North Sentinel Island - Isole Andamane - Tribù Sentinelesi - Isolamento - Oceano Indiano",
    "saturation_score": 7.0
  },
  {
    "rank": 32,
    "entity": "elettra lamborghini",
    "discover_score": 0.31034499017420614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.8668639053254438,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio pubblico - Italia - Musica",
    "saturation_score": 115.0
  },
  {
    "rank": 38,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.23109314891808225,
    "score_1h": 1.603448275862069,
    "score_4h": 0.24789915966386555,
    "score_7d": 0.4940828402366864,
    "extracted_entities": "Francesco - Papa - Canale 5 - Documentario - Religione",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.21031609862530531,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5021008403361344,
    "score_7d": 0.22189349112426035,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Televisione - Ristorazione",
    "saturation_score": 4.0
  },
  {
    "rank": 20,
    "entity": "giovanni ferrero",
    "discover_score": 0.20544073262198434,
    "score_1h": 0.0,
    "score_4h": 0.48898597095742063,
    "score_7d": 0.257396449704142,
    "extracted_entities": "Giovanni Ferrero - Ferrero SpA - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 3.0
  },
  {
    "rank": 28,
    "entity": "sporting - rio ave",
    "discover_score": 0.2036651269022301,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.14915966386554622,
    "score_7d": 0.3698224852071006,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "fp2 suzuka",
    "discover_score": 0.19223911065202384,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.5211050947575683,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Formula 1 - Suzuka - FP2 - Gran Premio del Giappone",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "sixers - bucks",
    "discover_score": 0.18748163616949032,
    "score_1h": 1.0862068965517242,
    "score_4h": 0.6515066277557048,
    "score_7d": 0.1893491124260355,
    "extracted_entities": "Sixers - Bucks - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "hostage",
    "discover_score": 0.18742214021969272,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.23739495798319327,
    "score_7d": 0.3254437869822485,
    "extracted_entities": "Ostaggi - Rapimento - Crisi - Liberazione - Negoziazione",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "dune 2",
    "discover_score": 0.17118813711656516,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4222689075630252,
    "score_7d": 0.20414201183431951,
    "extracted_entities": "Dune 2 - Film - Denis Villeneuve - Fantascienza - Sequel",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "nets - timberwolves",
    "discover_score": 0.1531782356388251,
    "score_1h": 1.3991817650496785,
    "score_4h": 0.18067226890756302,
    "score_7d": 0.14497041420118345,
    "extracted_entities": "Nets - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "donte divincenzo",
    "discover_score": 0.14478051655035531,
    "score_1h": 0.0,
    "score_4h": 0.10084033613445378,
    "score_7d": 0.1242603550295858,
    "extracted_entities": "Donte DiVincenzo - Basket - NBA",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "ufo sweden",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "roberto bolle",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "raiplay",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "console nintendo switch 2",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mad max fury road",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "calabria",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "tommaso zorzi",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "bastoni",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "vittorio feltri",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "francesca mannocchi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "angelucci",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "stellantis",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "pulse netflix",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "immunizations",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "pharmacy",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "flu shots",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "luciano darderi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "vaccinations",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "mad max",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "scandicci",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "blue bloods",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "lady gaga",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "vaccines",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "valentina persia",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "valerio lundini",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "michelle hunziker",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "dolce vita orient express",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "licia fertz",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "piazza della loggia",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "kevin bacon",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "leonardo",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "the darkness",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "ticket master",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "jodie foster",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "lorenzo biagiarelli",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "hostage film",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "heat - grizzlies",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "the image of you",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "gazzetta di parma",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "tallon griekspoor",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "inps",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "restaurant",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "andrea pisani",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "mattia bellucci",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "alex belli",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "nba risultati",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "tom selleck",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "sean connery",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "nasdaq 100",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "dr",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "paolo villaggio",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "greta thunberg",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "alessandro sallusti",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "live nation",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "barcis",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "kamindu mendis",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "messaggero",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "amanda bynes",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "michele serra",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "donzelli",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "black hawk down",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "daniel lee",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "bibbiano",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "desaparecidos",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "luca sommi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "laerte pappalardo",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "leonardo azioni",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "carlo acutis",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "dorothea wierer",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "leggo",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "millionday",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "pamela anderson",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "vincicasa",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "miyazaki",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "gustavo sa",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bonus bollette 2025",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "paolo del debbio",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "antonio albanese",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "banco bpm unicredit",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "reuters",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "giovanni floris",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "belén rodríguez",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "isee",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "kid rock",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "william hill",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "sgarbi come sta",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bruce springsteen",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "nordio",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "manila nazzaro",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "melfi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "südtirol news",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "corinne clery",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "cruciani",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "paul pogba",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "minecraft",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "christian slater",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "lollobrigida",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "un posto al sole 3 aprile 2025",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "ticketmaster uk",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "elisa longo borghini",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "nicoletta manni",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "famiglie d'italia",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "maria elena boschi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "pontedera",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "mauritius",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "samarcanda",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "cammino di santiago",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "verdansk",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "cristiano godano",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "stan wawrinka",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "desio",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "julia creek",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "quotazione oro oggi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "wall street journal",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "brenda lodigiani",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "intesa azioni",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "sorrentino",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "baustelle",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 07:41:28",
  "trends_count": 177,
  "top_score": 17.426231528236393,
  "runtime_minutes": 4.823480983575185,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nel grandioso arazzo delle tendenze italiane, tre temi principali dipingono il quadro delle discussioni del giorno: il potere della finanza, le rivalità sportive e la magia del cinema. I mercati finanziari brillano attraverso i movimenti di 'Wall Street' (#5) e gli approfondimenti su 'Investing' (#2), offrendo spunti fertili per chi cerca di navigare nelle acque tempestose dell'economia. Il fascino del pallone si mantiene vigoroso con match di rilievo come 'Chelsea - Tottenham' (#11) e sfide nell'universo dell'NBA.\n\nTra queste sfumature, emergono chiare opportunità nel mondo di Google Discover: la 'Vincita a Riccione' (#21) si erge come un promettente faro, congiuntamente alla dua esigua saturazione, può catturare rapidamente l'attenzione di coloro attratti dalla fortuna improvvisa. Sebbene anche 'San Vincenzo' (#7) vanti potenziali nascosti per i suoi paesaggi idilliaci e la copertura modesta, l'argomento fa capolino timidamente tra i discorsi del momento.\n\nTuttavia, la saturazione elevata del tema '4 aprile' (#6) indica una forte competizione e richiede una sfumata cautela per chi volesse farne contenuti. In un universo in costante mutamento, chi crea contenuti è chiamato a trovare equilibrio tra l'imprevedibile fervore e brillanti intuizioni. Sii vigile e sfrutta al massimo l'imprevedibilità delle tendenze!"
};
