const trendData = [
  {
    "rank": 2,
    "entity": "borsa italiana",
    "discover_score": 25.68887359379752,
    "score_1h": 63.87068965517241,
    "score_4h": 49.273109243697476,
    "score_7d": 16.390532544378697,
    "extracted_entities": "Borsa - Italia - Mercato azionario - Investimenti",
    "saturation_score": 3170.0
  },
  {
    "rank": 39,
    "entity": "lotto",
    "discover_score": 11.62635859320541,
    "score_1h": 70.16379310344828,
    "score_4h": 64.48739495798318,
    "score_7d": 15.381656804733728,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazioni - Numeri - Vincite",
    "saturation_score": 1530.0
  },
  {
    "rank": 22,
    "entity": "azioni leonardo",
    "discover_score": 10.404197911931075,
    "score_1h": 27.00292226767972,
    "score_4h": 17.29201680672269,
    "score_7d": 21.094674556213015,
    "extracted_entities": "Azioni - Leonardo - Borsa - Investimenti",
    "saturation_score": 4.0
  },
  {
    "rank": 31,
    "entity": "azioni stellantis",
    "discover_score": 7.8670344430976975,
    "score_1h": 34.603448275862064,
    "score_4h": 12.8109243697479,
    "score_7d": 18.36094674556213,
    "extracted_entities": "Azioni - Stellantis - Mercato azionario",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "stasera in tv",
    "discover_score": 6.299656495182008,
    "score_1h": 27.29310344827586,
    "score_4h": 13.605042016806722,
    "score_7d": 15.588757396449704,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Intrattenimento",
    "saturation_score": 44.0
  },
  {
    "rank": 35,
    "entity": "san vincenzo",
    "discover_score": 5.867358539157935,
    "score_1h": 2.7210695499707773,
    "score_4h": 2.254201680672269,
    "score_7d": 16.77514792899408,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto",
    "saturation_score": 125.0
  },
  {
    "rank": 15,
    "entity": "ortona",
    "discover_score": 5.371526647039084,
    "score_1h": 7.775862068965517,
    "score_4h": 3.491596638655462,
    "score_7d": 12.784023668639055,
    "extracted_entities": "Ortona - Abruzzo - Italia - Turismo - Storia",
    "saturation_score": 134.0
  },
  {
    "rank": 10,
    "entity": "unicredit azioni",
    "discover_score": 4.871106614863539,
    "score_1h": 37.353448275862064,
    "score_4h": 12.113445378151262,
    "score_7d": 8.532544378698224,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "ftse mib",
    "discover_score": 4.7699133716100635,
    "score_1h": 56.422413793103445,
    "score_4h": 20.754201680672267,
    "score_7d": 4.911242603550296,
    "extracted_entities": "FTSE MIB - Borsa Italiana - Indice di mercato - Finanza - Investimenti",
    "saturation_score": 202.0
  },
  {
    "rank": 11,
    "entity": "wall street",
    "discover_score": 4.669166273753112,
    "score_1h": 10.068965517241379,
    "score_4h": 4.51890756302521,
    "score_7d": 10.251479289940828,
    "extracted_entities": "Wall Street - Finanza - Borsa - New York - Mercati finanziari",
    "saturation_score": 439.0
  },
  {
    "rank": 28,
    "entity": "parma inter",
    "discover_score": 3.953564680078361,
    "score_1h": 2.663793103448276,
    "score_4h": 1.3571428571428572,
    "score_7d": 11.52958579881657,
    "extracted_entities": "Parma - Inter - Calcio - Serie A - Partita",
    "saturation_score": 118.0
  },
  {
    "rank": 1,
    "entity": "chelsea - tottenham",
    "discover_score": 3.630798364688973,
    "score_1h": 0.5677966101694916,
    "score_4h": 0.9327731092436975,
    "score_7d": 4.849112426035504,
    "extracted_entities": "Chelsea - Tottenham - Calcio - Premier League - Partita",
    "saturation_score": 79.0
  },
  {
    "rank": 14,
    "entity": "sciopero trenitalia",
    "discover_score": 2.8852302645990306,
    "score_1h": 1.3189655172413792,
    "score_4h": 1.2184873949579833,
    "score_7d": 7.618343195266272,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "de zerbi",
    "discover_score": 2.360785842708295,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5189075630252101,
    "score_7d": 6.831360946745562,
    "extracted_entities": "De Zerbi - Allenatore - Calcio - Brighton & Hove Albion - Premier League",
    "saturation_score": 173.0
  },
  {
    "rank": 24,
    "entity": "dune",
    "discover_score": 1.8610535339894703,
    "score_1h": 3.0775862068965516,
    "score_4h": 2.321428571428571,
    "score_7d": 5.275147928994083,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 55.0
  },
  {
    "rank": 6,
    "entity": "vincita riccione",
    "discover_score": 1.5308932894769907,
    "score_1h": 1.5,
    "score_4h": 0.2542016806722689,
    "score_7d": 3.715976331360947,
    "extracted_entities": "Vincita - Riccione - Lotteria - Jackpot - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "radio deejay riccione",
    "discover_score": 1.4241978916569533,
    "score_1h": 2.6987142022209234,
    "score_4h": 3.0399159663865545,
    "score_7d": 2.272189349112426,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "greta thunberg",
    "discover_score": 1.3665377046429488,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.7121848739495799,
    "score_7d": 4.366863905325443,
    "extracted_entities": "Greta Thunberg - Attivismo climatico - Cambiamento climatico - Giovani attivisti",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "dax",
    "discover_score": 1.3131727864446139,
    "score_1h": 2.060344827586207,
    "score_4h": 1.0861344537815127,
    "score_7d": 4.36094674556213,
    "extracted_entities": "Indice DAX - Borsa di Francoforte - Mercati finanziari",
    "saturation_score": 85.0
  },
  {
    "rank": 23,
    "entity": "mezzolombardo",
    "discover_score": 1.2693567049502645,
    "score_1h": 2.336206896551724,
    "score_4h": 1.8088235294117647,
    "score_7d": 3.591715976331361,
    "extracted_entities": "Mezzolombardo - Trentino-Alto Adige - Comune - Italia",
    "saturation_score": 87.0
  },
  {
    "rank": 38,
    "entity": "elettra lamborghini",
    "discover_score": 1.2063971755778458,
    "score_1h": 0.0,
    "score_4h": 0.8907563025210083,
    "score_7d": 3.9792899408284024,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio pubblico",
    "saturation_score": 56.0
  },
  {
    "rank": 27,
    "entity": "lorenzo sonego",
    "discover_score": 1.170680657555394,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.1092436974789916,
    "score_7d": 3.8520710059171597,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore",
    "saturation_score": 6.0
  },
  {
    "rank": 50,
    "entity": "matilda de angelis",
    "discover_score": 1.1592536853996402,
    "score_1h": 0.0,
    "score_4h": 0.38865546218487396,
    "score_7d": 4.1360946745562135,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 36.0
  },
  {
    "rank": 20,
    "entity": "bruce springsteen",
    "discover_score": 1.0910825786251406,
    "score_1h": 4.068965517241379,
    "score_4h": 1.023109243697479,
    "score_7d": 3.1597633136094676,
    "extracted_entities": "Bruce Springsteen - Musica - Cantante - Rock - Concerti",
    "saturation_score": 98.0
  },
  {
    "rank": 26,
    "entity": "anna kalinskaja",
    "discover_score": 1.0538296665729536,
    "score_1h": 0.0,
    "score_4h": 0.6533613445378151,
    "score_7d": 3.2958579881656807,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "sporting - rio ave",
    "discover_score": 0.9003647239879262,
    "score_1h": 0.0,
    "score_4h": 0.6764705882352942,
    "score_7d": 2.8816568047337277,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "tibia e perone",
    "discover_score": 0.8374463670525248,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0,
    "score_7d": 2.863905325443787,
    "extracted_entities": "Tibia - Perone - Anatomia - Ossa - Arti inferiori",
    "saturation_score": 99.0
  },
  {
    "rank": 41,
    "entity": "assemblea sinodale",
    "discover_score": 0.7789983873431281,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.11134453781512606,
    "score_7d": 2.7189349112426036,
    "extracted_entities": "Assemblea - Sinodo - Chiesa Cattolica - Vescovi - Discussioni",
    "saturation_score": 126.0
  },
  {
    "rank": 36,
    "entity": "sciopero scuola",
    "discover_score": 0.7457833290184216,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.1092436974789916,
    "score_7d": 2.5414201183431953,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "kkr vs srh",
    "discover_score": 0.7418685839396173,
    "score_1h": 0.0,
    "score_4h": 0.9138655462184875,
    "score_7d": 2.3461538461538463,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "green deal",
    "discover_score": 0.719727810559548,
    "score_1h": 2.836206896551724,
    "score_4h": 1.226890756302521,
    "score_7d": 1.8431952662721893,
    "extracted_entities": "Green Deal - Politica ambientale - Sostenibilità - Unione Europea - Economia verde",
    "saturation_score": 108.0
  },
  {
    "rank": 46,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.7052034311697902,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.065126050420168,
    "score_7d": 2.22189349112426,
    "extracted_entities": "Chelsea - Tottenham - Partita di calcio - Premier League",
    "saturation_score": 4.0
  },
  {
    "rank": 9,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.6744180602466013,
    "score_1h": 0.0,
    "score_4h": 0.2710084033613446,
    "score_7d": 1.7218934911242605,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 7,
    "entity": "de bruyne",
    "discover_score": 0.6407760329091514,
    "score_1h": 33.95689655172414,
    "score_4h": 6.663865546218488,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 34.0
  },
  {
    "rank": 34,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.6277157227291182,
    "score_1h": 0.0,
    "score_4h": 0.49369747899159666,
    "score_7d": 1.9763313609467454,
    "extracted_entities": "Venerdì - 4 aprile - Auguri",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "lakers - warriors",
    "discover_score": 0.6205028408312002,
    "score_1h": 0.8017241379310345,
    "score_4h": 1.3907563025210083,
    "score_7d": 1.017751479289941,
    "extracted_entities": "Lakers - Warriors - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "raffaella scudiero",
    "discover_score": 0.5949651104619746,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.7394957983193278,
    "score_7d": 1.4763313609467454,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 55.0
  },
  {
    "rank": 45,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.5343374363234005,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.19957983193277312,
    "score_7d": 1.7899408284023668,
    "extracted_entities": "Francesco - Papa della gente - Canale 5",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "greta scarano",
    "discover_score": 0.4929824513251281,
    "score_1h": 0.0,
    "score_4h": 0.18067226890756302,
    "score_7d": 1.6420118343195267,
    "extracted_entities": "Greta Scarano - Attrice - Filmografia - Serie TV - Italia",
    "saturation_score": 69.0
  },
  {
    "rank": 48,
    "entity": "hostage",
    "discover_score": 0.3778936670782962,
    "score_1h": 0.0,
    "score_4h": 0.35714285714285715,
    "score_7d": 1.1242603550295858,
    "extracted_entities": "Ostaggi - Rapimento - Crisi - Liberazione - Negoziazione",
    "saturation_score": 3.0
  },
  {
    "rank": 37,
    "entity": "donte divincenzo",
    "discover_score": 0.32588163715664464,
    "score_1h": 1.6724137931034482,
    "score_4h": 0.34663865546218486,
    "score_7d": 0.8609467455621302,
    "extracted_entities": "Donte DiVincenzo - Basket - NBA",
    "saturation_score": 5.0
  },
  {
    "rank": 30,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.3233700596901429,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.0,
    "score_7d": 0.908284023668639,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristorazione - Televisione",
    "saturation_score": 4.0
  },
  {
    "rank": 43,
    "entity": "dune film",
    "discover_score": 0.3128136321879788,
    "score_1h": 0.9137931034482758,
    "score_4h": 0.5588235294117647,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "sabina ciuffini",
    "discover_score": 0.29257472926479283,
    "score_1h": 0.16379310344827586,
    "score_4h": 0.39915966386554624,
    "score_7d": 0.6479289940828403,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70 - Show televisivi",
    "saturation_score": 8.0
  },
  {
    "rank": 8,
    "entity": "laura loomer",
    "discover_score": 0.27597406955378917,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.42016806722689076,
    "score_7d": 0.4171597633136095,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 23.0
  },
  {
    "rank": 12,
    "entity": "giovanni ferrero",
    "discover_score": 0.2704574625690051,
    "score_1h": 1.896551724137931,
    "score_4h": 0.8214285714285714,
    "score_7d": 0.35502958579881655,
    "extracted_entities": "Giovanni Ferrero - Ferrero Group - Imprenditore",
    "saturation_score": 3.0
  },
  {
    "rank": 16,
    "entity": "personale ata ciad",
    "discover_score": 0.2662903518951236,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.27521008403361347,
    "score_7d": 0.514792899408284,
    "extracted_entities": "Personale ATA - Ciad - Scuola - Amministrazione - Supporto scolastico",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "walter novellino",
    "discover_score": 0.20044265915341827,
    "score_1h": 0.0,
    "score_4h": 0.5,
    "score_7d": 0.23076923076923078,
    "extracted_entities": "Walter Novellino - Allenatore di calcio - Calcio italiano",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "oroscopo 4 aprile scorpione",
    "discover_score": 0.19061672283546602,
    "score_1h": 3.1206896551724137,
    "score_4h": 0.35714285714285715,
    "score_7d": 0.23668639053254437,
    "extracted_entities": "Oroscopo - 4 aprile - Scorpione",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "ordinanza maturità",
    "discover_score": 0.13435473090748531,
    "score_1h": 0.0,
    "score_4h": 0.226890756302521,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Ordinanza - Maturità - Esame di Stato - Ministero dell'Istruzione",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "dune 2",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "north sentinel",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "helena prestes tapiro",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "sixers - bucks",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "infarto nanni moretti",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "devil may cry",
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
    "entity": "ufo sweden",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "roberto bolle",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "film dune",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "console nintendo switch 2",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "vinitaly 2025",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "raiplay",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "marrakech atp",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "brandin podziemski",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "bastoni",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "microsoft",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "mad max fury road",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "tommaso zorzi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "vittorio feltri",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "francesca mannocchi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "angelucci",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "pulse netflix",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "heat - grizzlies",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "luciano darderi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "timothée chalamet",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "lakers vs warriors",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "valentina persia",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "scandicci",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "blue bloods",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "invalsi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "valerio lundini",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "nets - timberwolves",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "licia fertz",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "mad max",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "dolce vita orient express",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "immunizations",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "michelle hunziker",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "pharmacy",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "papa bergoglio",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "kevin bacon",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "flu shots",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "piazza della loggia",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tallon griekspoor",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "the darkness",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "vaccinations",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "jodie foster",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "hostage film",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "the image of you",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "stellantis",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "vaccines",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "gaetano migliaccio mare fuori",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "alex belli",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "andrea pisani",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "lakers",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "selvaggia lucarelli",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "paolo villaggio",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "sean connery",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "barcis",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "dr",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "kamindu mendis",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "amanda bynes",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "alessandro sallusti",
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
    "entity": "donzelli",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "gazzetta di parma",
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
    "entity": "michele serra",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "daniel lee",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "carlo acutis",
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
    "entity": "black hawk down",
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
    "entity": "desaparecidos",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "vincicasa",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "luca sommi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "millionday",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "bonus bollette 2025",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "miyazaki",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "antonio albanese",
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
    "entity": "paolo del debbio",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "gustavo sa",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "giovanni floris",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "belén rodríguez",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "messaggero",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "isee",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "nordio",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "manila nazzaro",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "sgarbi come sta",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "leggo",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "corinne clery",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "william hill",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "melfi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "hunziker",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "minecraft",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "guida tv",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "cruciani",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "isole heard e mcdonald",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "paul pogba",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "bortuzzo",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "christian slater",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "un posto al sole 3 aprile 2025",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "elisa longo borghini",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "nicoletta manni",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "famiglie d'italia",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "pontedera",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "maria elena boschi",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "südtirol news",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "luis henrique marsiglia",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "verdansk",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "cammino di santiago",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "stan wawrinka",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "quotazione oro oggi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "wall street journal",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "brenda lodigiani",
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
  "timestamp": "2025-04-04 11:41:03",
  "trends_count": 177,
  "top_score": 25.68887359379752,
  "runtime_minutes": 4.646226036548614,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle Profezie di Oggi, tre temi principali si innalzano sopra gli altri: l'inevitabile attrazione del mercato azionario e delle sue implicazioni finanziarie, simbolizzato dai trend sulla 'borsa italiana', 'azioni Leonardo' e 'FTSE MIB'; il calcio, con le appassionanti sfide tra le squadre italiane ed estere come 'Parma Inter' e 'Chelsea - Tottenham'; e infine, una fresca brezza culturale porta nomi come 'Dune' e 'Matilda De Angelis' nella nostra coscienza collettiva.\n\nAnalizzando le opportunità per Google Discover, emergono due vincitori: 'azioni Leonardo' (#3) e 'Parma Inter' (#11). Con un DScore rispettivamente alto e moderato e una saturazione contenuta, queste tendenze offrono un fertile terreno per contenuti che catturino l'interesse immediato del pubblico.\n\nTuttavia, attenzione! La saturazione del \"gioco d'azzardo\" come 'lotto' (#2) e la saturazione dei contenuti borsistici rischiano di saturare gli sforzi di chi crea contenuti, trasformando l'entusiasmo iniziale in un'eco lontana.\n\nPer chi si avventura nel mondo del contenuto digitale, si consiglia di valutare attentamente la combinazione di interesse momentaneo e saturazione, bilanciando audacia ed esperienza per navigare con successo nel mare delle tendenze."
};
