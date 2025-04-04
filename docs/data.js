const trendData = [
  {
    "rank": 48,
    "entity": "calabria",
    "discover_score": 24.74385638532361,
    "score_1h": 65.68980128579778,
    "score_4h": 26.058823529411764,
    "score_7d": 54.84615384615385,
    "extracted_entities": "Calabria - Regione - Italia - Turismo - Cultura",
    "saturation_score": 2540.0
  },
  {
    "rank": 50,
    "entity": "microsoft",
    "discover_score": 12.290121665172213,
    "score_1h": 60.72969023962595,
    "score_4h": 33.18487394957983,
    "score_7d": 25.79881656804734,
    "extracted_entities": "Microsoft - Tecnologia - Software - Azienda - Windows",
    "saturation_score": 122.0
  },
  {
    "rank": 34,
    "entity": "lotto",
    "discover_score": 10.62760646565668,
    "score_1h": 70.09482758620689,
    "score_4h": 52.010504201680675,
    "score_7d": 15.36094674556213,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazione numeri - Vincite - Scommesse",
    "saturation_score": 1590.0
  },
  {
    "rank": 15,
    "entity": "san vincenzo",
    "discover_score": 8.46828723323115,
    "score_1h": 6.353448275862069,
    "score_4h": 3.1554621848739495,
    "score_7d": 19.112426035502956,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto",
    "saturation_score": 74.0
  },
  {
    "rank": 28,
    "entity": "azioni stellantis",
    "discover_score": 7.939862864762588,
    "score_1h": 19.586206896551722,
    "score_4h": 8.846638655462185,
    "score_7d": 19.14792899408284,
    "extracted_entities": "Azioni - Stellantis - Mercato azionario",
    "saturation_score": 4.0
  },
  {
    "rank": 19,
    "entity": "borsa italiana",
    "discover_score": 7.022793595956143,
    "score_1h": 56.44827586206897,
    "score_4h": 9.329831932773109,
    "score_7d": 15.52958579881657,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti",
    "saturation_score": 3370.0
  },
  {
    "rank": 27,
    "entity": "wall street",
    "discover_score": 6.187386764855613,
    "score_1h": 1.3706896551724137,
    "score_4h": 1.361344537815126,
    "score_7d": 16.96153846153846,
    "extracted_entities": "Wall Street - Finanza - Borsa valori - New York - Mercati finanziari",
    "saturation_score": 406.0
  },
  {
    "rank": 32,
    "entity": "4 aprile",
    "discover_score": 5.68013184725639,
    "score_1h": 67.61206896551724,
    "score_4h": 39.292016806722685,
    "score_7d": 6.849112426035504,
    "extracted_entities": "4 aprile - Eventi storici - Compleanni celebri - Ricorrenze - Festività",
    "saturation_score": 8680.0
  },
  {
    "rank": 45,
    "entity": "stasera in tv",
    "discover_score": 5.6307479091151285,
    "score_1h": 23.008620689655174,
    "score_4h": 6.783613445378151,
    "score_7d": 15.710059171597633,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Stasera - Televisione",
    "saturation_score": 54.0
  },
  {
    "rank": 25,
    "entity": "unicredit azioni",
    "discover_score": 5.617083063339278,
    "score_1h": 26.810344827586206,
    "score_4h": 3.0126050420168067,
    "score_7d": 14.928994082840237,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 6,
    "entity": "federica brignone",
    "discover_score": 5.078982192014746,
    "score_1h": 13.137931034482758,
    "score_4h": 7.476890756302521,
    "score_7d": 8.837278106508876,
    "extracted_entities": "Federica Brignone - Sci alpino - Italia",
    "saturation_score": 666.0
  },
  {
    "rank": 31,
    "entity": "investing",
    "discover_score": 4.318802430124092,
    "score_1h": 39.21741671537113,
    "score_4h": 14.115546218487395,
    "score_7d": 9.334319526627219,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Finanza personale",
    "saturation_score": 7.0
  },
  {
    "rank": 1,
    "entity": "chelsea - tottenham",
    "discover_score": 4.093944574873516,
    "score_1h": 4.393483343074226,
    "score_4h": 3.8192486199500717,
    "score_7d": 4.704142011834319,
    "extracted_entities": "Chelsea - Tottenham - Calcio - Premier League - Partita",
    "saturation_score": 116.0
  },
  {
    "rank": 35,
    "entity": "vinitaly 2025",
    "discover_score": 3.1551571353380092,
    "score_1h": 1.767241379310345,
    "score_4h": 0.9831932773109244,
    "score_7d": 9.884615384615383,
    "extracted_entities": "Vinitaly - 2025 - Fiera del Vino - Verona - Eventi enologici",
    "saturation_score": 135.0
  },
  {
    "rank": 5,
    "entity": "dune",
    "discover_score": 2.4497121595753604,
    "score_1h": 1.5,
    "score_4h": 0.9873949579831933,
    "score_7d": 5.3017751479289945,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 82.0
  },
  {
    "rank": 2,
    "entity": "lakers - warriors",
    "discover_score": 2.3396149007915157,
    "score_1h": 1.7545295149035653,
    "score_4h": 11.873949579831933,
    "score_7d": 1.6834319526627217,
    "extracted_entities": "Lakers - Warriors - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 38,
    "entity": "biglietti lady gaga",
    "discover_score": 2.3142700139917016,
    "score_1h": 0.0,
    "score_4h": 0.15966386554621848,
    "score_7d": 7.754437869822485,
    "extracted_entities": "Biglietti - Lady Gaga - Concerti - Tour",
    "saturation_score": 4.0
  },
  {
    "rank": 26,
    "entity": "sciopero trenitalia",
    "discover_score": 2.1368545433811286,
    "score_1h": 0.0,
    "score_4h": 0.400820997855209,
    "score_7d": 6.692307692307692,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "vincita riccione",
    "discover_score": 1.8538057588595447,
    "score_1h": 0.75,
    "score_4h": 1.9411764705882353,
    "score_7d": 3.6301775147928996,
    "extracted_entities": "Vincita - Riccione - Lotteria - Premio",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "ftse mib",
    "discover_score": 1.6446491891482111,
    "score_1h": 10.775862068965516,
    "score_4h": 7.628151260504202,
    "score_7d": 2.8076923076923075,
    "extracted_entities": "FTSE MIB - Borsa Italiana - Indice azionario - Mercato finanziario - Investimenti",
    "saturation_score": 167.0
  },
  {
    "rank": 18,
    "entity": "anna kalinskaja",
    "discover_score": 1.593822961047592,
    "score_1h": 2.646551724137931,
    "score_4h": 2.8550420168067228,
    "score_7d": 4.091715976331361,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "lulu selassie",
    "discover_score": 1.5527965936762376,
    "score_1h": 0.9576271186440678,
    "score_4h": 0.8172268907563025,
    "score_7d": 3.0739644970414197,
    "extracted_entities": "Lulù Selassié - Personaggio pubblico - Reality TV - Grande Fratello VIP",
    "saturation_score": 4.0
  },
  {
    "rank": 49,
    "entity": "infarto nanni moretti",
    "discover_score": 1.3702669508542396,
    "score_1h": 0.0,
    "score_4h": 0.37815126050420167,
    "score_7d": 4.872781065088757,
    "extracted_entities": "Infarto - Nanni Moretti",
    "saturation_score": 3.0
  },
  {
    "rank": 29,
    "entity": "elettra lamborghini",
    "discover_score": 1.2213642272788032,
    "score_1h": 0.0,
    "score_4h": 0.4054621848739496,
    "score_7d": 3.9822485207100593,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia",
    "saturation_score": 75.0
  },
  {
    "rank": 8,
    "entity": "radio deejay riccione",
    "discover_score": 0.9968996384498112,
    "score_1h": 8.29354178842782,
    "score_4h": 1.1134453781512605,
    "score_7d": 2.3520710059171597,
    "extracted_entities": "Radio Deejay - Riccione - Stazione radio - Eventi estivi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "sporting - rio ave",
    "discover_score": 0.956494831624859,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6932773109243697,
    "score_7d": 2.920118343195266,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": 2.0
  },
  {
    "rank": 7,
    "entity": "gaetano migliaccio",
    "discover_score": 0.8434455525120745,
    "score_1h": 0.0,
    "score_4h": 0.5504201680672269,
    "score_7d": 2.0236686390532546,
    "extracted_entities": "Gaetano Migliaccio",
    "saturation_score": 140.0
  },
  {
    "rank": 11,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.828907202207559,
    "score_1h": 0.0,
    "score_4h": 0.4054621848739496,
    "score_7d": 2.22189349112426,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristorazione - Televisione",
    "saturation_score": 3.0
  },
  {
    "rank": 21,
    "entity": "lorenzo sonego",
    "discover_score": 0.7819295948797806,
    "score_1h": 2.3281706604324954,
    "score_4h": 0.5315126050420168,
    "score_7d": 2.3224852071005917,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore",
    "saturation_score": 4.0
  },
  {
    "rank": 16,
    "entity": "sciopero scuola",
    "discover_score": 0.7056240084582517,
    "score_1h": 0.0,
    "score_4h": 0.2710084033613446,
    "score_7d": 2.032544378698225,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione - Lavoratori",
    "saturation_score": 28.0
  },
  {
    "rank": 9,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.519375511403947,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.4831932773109244,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "giovanni ferrero",
    "discover_score": 0.5155433399606201,
    "score_1h": 1.5689655172413792,
    "score_4h": 0.24285362680637107,
    "score_7d": 1.4260355029585798,
    "extracted_entities": "Giovanni Ferrero - Ferrero Group - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "matilda de angelis",
    "discover_score": 0.4531107765995672,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.45168067226890757,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 58.0
  },
  {
    "rank": 37,
    "entity": "assemblea sinodale",
    "discover_score": 0.43354397447390597,
    "score_1h": 2.293103448275862,
    "score_4h": 0.4327731092436975,
    "score_7d": 1.272189349112426,
    "extracted_entities": "Assemblea - Sinodo - Chiesa Cattolica - Vescovi - Discussione",
    "saturation_score": 215.0
  },
  {
    "rank": 43,
    "entity": "dune 2",
    "discover_score": 0.4119534375617575,
    "score_1h": 0.0,
    "score_4h": 0.10714285714285715,
    "score_7d": 1.3106508875739644,
    "extracted_entities": "Dune 2 - Film - Sequel - Fantascienza - Denis Villeneuve",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "sabina ciuffini",
    "discover_score": 0.39204598632957083,
    "score_1h": 0.0,
    "score_4h": 0.43907563025210083,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70 - Show televisivi",
    "saturation_score": 9.0
  },
  {
    "rank": 12,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.38084581422937935,
    "score_1h": 0.0,
    "score_4h": 0.9621848739495797,
    "score_7d": 0.6952662721893491,
    "extracted_entities": "Venerdì - 4 aprile - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "dune film",
    "discover_score": 0.3522792244706276,
    "score_1h": 0.1724137931034483,
    "score_4h": 0.5882352941176471,
    "score_7d": 0.8816568047337279,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "sixers - bucks",
    "discover_score": 0.3515192908063297,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.24789915966386555,
    "score_7d": 0.9526627218934911,
    "extracted_entities": "Sixers - Bucks - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "helena prestes tapiro",
    "discover_score": 0.3270436479900544,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5315126050420168,
    "score_7d": 0.8579881656804733,
    "extracted_entities": "Helena Prestes - Tapiro",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "hostage",
    "discover_score": 0.32136534189618965,
    "score_1h": 0.7327586206896551,
    "score_4h": 0.3138075313807531,
    "score_7d": 0.8816568047337279,
    "extracted_entities": "Ostaggi - Rapimento - Crisi - Liberazione - Negoziazione",
    "saturation_score": 3.0
  },
  {
    "rank": 10,
    "entity": "laura loomer",
    "discover_score": 0.30524714086070825,
    "score_1h": 0.4745762711864407,
    "score_4h": 0.3949579831932773,
    "score_7d": 0.5532544378698225,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 9.0
  },
  {
    "rank": 42,
    "entity": "greta scarano",
    "discover_score": 0.2744690066624457,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.18487394957983194,
    "score_7d": 0.7100591715976331,
    "extracted_entities": "Greta Scarano - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 85.0
  },
  {
    "rank": 13,
    "entity": "raffaella scudiero",
    "discover_score": 0.25121513761510855,
    "score_1h": 1.505260081823495,
    "score_4h": 0.0,
    "score_7d": 0.5029585798816568,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 31.0
  },
  {
    "rank": 39,
    "entity": "kkr vs srh",
    "discover_score": 0.2469347903769939,
    "score_1h": 0.0,
    "score_4h": 0.6533613445378151,
    "score_7d": 0.45857988165680474,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "north sentinel",
    "discover_score": 0.24157400469943166,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.5777310924369747,
    "score_7d": 0.3905325443786982,
    "extracted_entities": "North Sentinel Island - Andamane - Tribù Sentinelesi - Isolamento - Antropologia",
    "saturation_score": 7.0
  },
  {
    "rank": 36,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.19410393264375142,
    "score_1h": 0.0,
    "score_4h": 0.10504201680672269,
    "score_7d": 0.36686390532544383,
    "extracted_entities": "Francesco - Papa - Canale 5",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.19057576208374347,
    "score_1h": 0.9568965517241379,
    "score_4h": 0.4192890545339475,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Chelsea - Tottenham - Partita di calcio - Premier League",
    "saturation_score": 5.0
  },
  {
    "rank": 46,
    "entity": "ordinanza maturità",
    "discover_score": 0.15937109135051702,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.06932773109243698,
    "score_7d": 0.2455621301775148,
    "extracted_entities": "Ordinanza - Maturità - Esame di Stato - Scuola - Ministero dell'Istruzione",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "donte divincenzo",
    "discover_score": 0.14849155563533475,
    "score_1h": 2.141729982466394,
    "score_4h": 0.4054621848739496,
    "score_7d": 0.0621301775147929,
    "extracted_entities": "Donte DiVincenzo - Basket - NBA",
    "saturation_score": 5.0
  },
  {
    "rank": 51,
    "entity": "devil may cry",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "nets - timberwolves",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "heat - grizzlies",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "ufo sweden",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "invalsi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "film dune",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "raiplay",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "roberto bolle",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "console nintendo switch 2",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "mad max fury road",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "bastoni",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "tommaso zorzi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "vittorio feltri",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "francesca mannocchi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "angelucci",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "pulse netflix",
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
    "entity": "luciano darderi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "immunizations",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "lady gaga",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "pharmacy",
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
    "entity": "mad max",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "flu shots",
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
    "entity": "stellantis",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "programmi tv",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "valerio lundini",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "vaccinations",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "vaccines",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "licia fertz",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "dolce vita orient express",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "leonardo azioni",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "piazza della loggia",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "michelle hunziker",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "kevin bacon",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "leonardo",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "ticket master",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "the darkness",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "jodie foster",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "hostage film",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "tallon griekspoor",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "inps",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "the image of you",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "lorenzo biagiarelli",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "andrea pisani",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "restaurant",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "mattia bellucci",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "alex belli",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "gazzetta di parma",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "tom selleck",
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
    "entity": "sean connery",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "nasdaq 100",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "paolo villaggio",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "live nation",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "dr",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "barcis",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "alessandro sallusti",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "kamindu mendis",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "greta thunberg",
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
    "entity": "donzelli",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "michele serra",
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
    "entity": "daniel lee",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "black hawk down",
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
    "entity": "desaparecidos",
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
    "entity": "luca sommi",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "dorothea wierer",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "pamela anderson",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "vincicasa",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "messaggero",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "millionday",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "miyazaki",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "prime pagine quotidiani",
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
    "entity": "paolo del debbio",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "leggo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "reuters",
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
    "entity": "nba risultati",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "belén rodríguez",
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
    "entity": "risultati nba",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "william hill",
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
    "entity": "nordio",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "bruce springsteen",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "manila nazzaro",
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
    "entity": "corinne clery",
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
    "entity": "cruciani",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "minecraft",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "paul pogba",
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
    "entity": "christian slater",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "lollobrigida",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "südtirol news",
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
    "entity": "maria elena boschi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "pontedera",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "mauritius",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "samarcanda",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "luis henrique marsiglia",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "anticipazioni beautiful",
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
    "entity": "verdansk",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "stan wawrinka",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "quotazione oro oggi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "wall street journal",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "brenda lodigiani",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "sorrentino",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "baustelle",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 08:49:17",
  "trends_count": 178,
  "top_score": 24.74385638532361,
  "runtime_minutes": 5.2940427978833515,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle Profezie di Oggi si stagliano con prepotenza i temi della finanza e del turismo, mentre la cultura calcistica rimane in sottofondo. La Calabria, con il suo richiamo irresistibile per i turisti, si erge come la terra promessa della scoperta, anche se la sua saturazione elevata suggerisce una narrazione già densa. Al contrario, la silenziosa forza di Microsoft si rivela una gemma da esplorare su Google Discover: il suo basso livello di saturazione insieme a un DScore limpido disegnano sentieri fertili per chi cerca ispirazione nelle nuove tecnologie (#2).\n\nTuttavia, la prudenza è necessaria per chi si avventura sulle onde dello spettacolo, dove \"Stasera in TV\" sedimenta in un mare di coperture difficili da navigare (#9). E nel mercato finanziario, mentre \"Azioni Stellantis\" si presenta come un'opportunità di nicchia, la Borsa Italiana mostra un affollamento che potrebbe inghiottire contenuti meno distintivi (#6).\n\nIn conclusione, chi crea contenuti dovrà danzare abilmente tra innovazione e tradizione per rivelare misteri nascosti e conquistare il pubblico, scegliendo con saggezza le onde su cui cavalcare."
};
