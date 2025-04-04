const trendData = [
  {
    "rank": 49,
    "entity": "calabria",
    "discover_score": 36.0619130736123,
    "score_1h": 58.189655172413794,
    "score_4h": 61.5672268907563,
    "score_7d": 72.86094674556213,
    "extracted_entities": "Calabria - Regione - Italia - Turismo - Cultura",
    "saturation_score": 2310.0
  },
  {
    "rank": 4,
    "entity": "borsa italiana",
    "discover_score": 23.924233124672114,
    "score_1h": 60.87931034482759,
    "score_4h": 51.31512605042017,
    "score_7d": 20.233727810650887,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti",
    "saturation_score": 3220.0
  },
  {
    "rank": 33,
    "entity": "lotto",
    "discover_score": 11.268768556627075,
    "score_1h": 75.33620689655172,
    "score_4h": 56.581932773109244,
    "score_7d": 15.541420118343195,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazioni - Numeri - Vincite",
    "saturation_score": 1630.0
  },
  {
    "rank": 22,
    "entity": "investing",
    "discover_score": 10.986388881455813,
    "score_1h": 45.43103448275862,
    "score_4h": 25.32983193277311,
    "score_7d": 20.24852071005917,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Trading",
    "saturation_score": 7.0
  },
  {
    "rank": 30,
    "entity": "san vincenzo",
    "discover_score": 7.63358027946604,
    "score_1h": 2.637931034482759,
    "score_4h": 4.842436974789916,
    "score_7d": 19.786982248520708,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto turistico",
    "saturation_score": 84.0
  },
  {
    "rank": 38,
    "entity": "stasera in tv",
    "discover_score": 7.574913049606577,
    "score_1h": 40.0,
    "score_4h": 24.13235294117647,
    "score_7d": 15.562130177514794,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Intrattenimento",
    "saturation_score": 52.0
  },
  {
    "rank": 28,
    "entity": "ortona",
    "discover_score": 6.565154234135582,
    "score_1h": 12.974137931034484,
    "score_4h": 7.109243697478991,
    "score_7d": 16.44082840236686,
    "extracted_entities": "Ortona - Città - Abruzzo - Turismo - Storia",
    "saturation_score": 128.0
  },
  {
    "rank": 50,
    "entity": "4 aprile",
    "discover_score": 5.716927401092686,
    "score_1h": 68.12931034482759,
    "score_4h": 43.18487394957984,
    "score_7d": 7.1952662721893486,
    "extracted_entities": "4 aprile - Eventi storici - Compleanni celebri - Festività - Anniversari",
    "saturation_score": 8700.0
  },
  {
    "rank": 1,
    "entity": "chelsea - tottenham",
    "discover_score": 3.5987440096150034,
    "score_1h": 0.5862068965517241,
    "score_4h": 0.8424369747899161,
    "score_7d": 4.834319526627219,
    "extracted_entities": "Chelsea - Tottenham - Calcio - Premier League - Partita",
    "saturation_score": 82.0
  },
  {
    "rank": 21,
    "entity": "azioni unicredit",
    "discover_score": 3.042822680770023,
    "score_1h": 28.301724137931032,
    "score_4h": 21.523109243697476,
    "score_7d": 3.615384615384616,
    "extracted_entities": "Azioni - UniCredit - Mercato azionario - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 13,
    "entity": "unicredit azioni",
    "discover_score": 2.583996878060478,
    "score_1h": 30.775862068965516,
    "score_4h": 17.897058823529413,
    "score_7d": 2.7366863905325447,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "dune",
    "discover_score": 2.1230266250078333,
    "score_1h": 2.336206896551724,
    "score_4h": 2.8487394957983194,
    "score_7d": 5.284023668639053,
    "extracted_entities": "Dune - Film - Romanzo - Fantascienza - Frank Herbert",
    "saturation_score": 40.0
  },
  {
    "rank": 6,
    "entity": "borse europee",
    "discover_score": 1.8558268116503072,
    "score_1h": 6.629310344827586,
    "score_4h": 3.357142857142857,
    "score_7d": 3.6508875739644973,
    "extracted_entities": "Borse - Europa - Mercati finanziari",
    "saturation_score": 121.0
  },
  {
    "rank": 19,
    "entity": "anna kalinskaja",
    "discover_score": 1.5975412958338178,
    "score_1h": 0.49137931034482757,
    "score_4h": 1.426470588235294,
    "score_7d": 4.5325443786982245,
    "extracted_entities": "Anna Kalinskaja - Tennista - Russia",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "infarto nanni moretti",
    "discover_score": 1.3904544933914975,
    "score_1h": 0.0,
    "score_4h": 0.6134453781512605,
    "score_7d": 4.86094674556213,
    "extracted_entities": "Infarto - Nanni Moretti",
    "saturation_score": 1.0
  },
  {
    "rank": 27,
    "entity": "tibia e perone",
    "discover_score": 1.3008221174171064,
    "score_1h": 0.0,
    "score_4h": 0.35084033613445376,
    "score_7d": 4.204142011834319,
    "extracted_entities": "Tibia - Perone - Anatomia - Ossa - Arti inferiori",
    "saturation_score": 101.0
  },
  {
    "rank": 45,
    "entity": "north sentinel",
    "discover_score": 1.2870451480359917,
    "score_1h": 0.646551724137931,
    "score_4h": 0.22478991596638656,
    "score_7d": 4.562130177514793,
    "extracted_entities": "North Sentinel Island - Isole Andamane - Tribù Sentinelesi - Isolamento culturale - Oceano Indiano",
    "saturation_score": 7.0
  },
  {
    "rank": 29,
    "entity": "sciopero scuola",
    "discover_score": 1.2597571089052801,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.3340336134453782,
    "score_7d": 4.127218934911243,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione",
    "saturation_score": 10.0
  },
  {
    "rank": 3,
    "entity": "radio deejay riccione",
    "discover_score": 1.2308011255354936,
    "score_1h": 1.5,
    "score_4h": 2.8634453781512605,
    "score_7d": 1.9230769230769231,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "raffaella scudiero",
    "discover_score": 1.2161934752371542,
    "score_1h": 0.9568965517241379,
    "score_4h": 0.546218487394958,
    "score_7d": 3.153846153846154,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 32.0
  },
  {
    "rank": 2,
    "entity": "lakers - warriors",
    "discover_score": 1.1886294224134881,
    "score_1h": 0.0,
    "score_4h": 2.4495798319327733,
    "score_7d": 1.7100591715976332,
    "extracted_entities": "Lakers - Warriors - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 41,
    "entity": "matilda de angelis",
    "discover_score": 1.163745116123567,
    "score_1h": 0.0,
    "score_4h": 0.7226890756302521,
    "score_7d": 3.9289940828402368,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 37.0
  },
  {
    "rank": 16,
    "entity": "green deal",
    "discover_score": 0.8754859709718606,
    "score_1h": 3.6982758620689653,
    "score_4h": 0.6785714285714286,
    "score_7d": 2.4615384615384617,
    "extracted_entities": "Green Deal - Politica ambientale - Unione Europea - Sostenibilità - Economia verde",
    "saturation_score": 69.0
  },
  {
    "rank": 20,
    "entity": "lorenzo sonego",
    "discover_score": 0.8322124474619581,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.930672268907563,
    "score_7d": 2.3579881656804735,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 40,
    "entity": "greta scarano",
    "discover_score": 0.6746459903338613,
    "score_1h": 0.847457627118644,
    "score_4h": 0.5399159663865546,
    "score_7d": 2.198224852071006,
    "extracted_entities": "Greta Scarano - Attrice - Italia - Film - Televisione",
    "saturation_score": 66.0
  },
  {
    "rank": 24,
    "entity": "de zerbi",
    "discover_score": 0.6411644666241384,
    "score_1h": 2.2844827586206895,
    "score_4h": 0.9621848739495799,
    "score_7d": 1.7751479289940828,
    "extracted_entities": "Roberto De Zerbi - Allenatore - Calcio - Brighton & Hove Albion - Premier League",
    "saturation_score": 222.0
  },
  {
    "rank": 5,
    "entity": "laura loomer",
    "discover_score": 0.6295238979762282,
    "score_1h": 1.603448275862069,
    "score_4h": 0.6974789915966386,
    "score_7d": 1.2840236686390534,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica - Stati Uniti",
    "saturation_score": 24.0
  },
  {
    "rank": 37,
    "entity": "dune film",
    "discover_score": 0.6255520485961026,
    "score_1h": 1.103448275862069,
    "score_4h": 0.4957983193277311,
    "score_7d": 1.997041420118343,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "kkr vs srh",
    "discover_score": 0.6106995140702661,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.4495798319327731,
    "score_7d": 1.9349112426035502,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "elettra lamborghini",
    "discover_score": 0.5797126057091041,
    "score_1h": 2.086206896551724,
    "score_4h": 0.4474789915966387,
    "score_7d": 1.7899408284023668,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia - Musica",
    "saturation_score": 80.0
  },
  {
    "rank": 25,
    "entity": "sporting - rio ave",
    "discover_score": 0.47088542404335765,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.43907563025210083,
    "score_7d": 1.316568047337278,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": 2.0
  },
  {
    "rank": 11,
    "entity": "sciopero trenitalia",
    "discover_score": 0.4627195965168527,
    "score_1h": 5.336206896551724,
    "score_4h": 1.6029411764705883,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "vincita riccione",
    "discover_score": 0.4597623892440953,
    "score_1h": 0.0,
    "score_4h": 0.5609243697478992,
    "score_7d": 1.0177514792899407,
    "extracted_entities": "Vincita - Riccione - Lotteria - Jackpot - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "sixers - bucks",
    "discover_score": 0.4189417328196749,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.12815126050420167,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Sixers - Bucks - NBA - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "mezzolombardo",
    "discover_score": 0.40115101096320016,
    "score_1h": 3.3793103448275863,
    "score_4h": 0.6596638655462186,
    "score_7d": 0.8875739644970414,
    "extracted_entities": "Mezzolombardo - Comune - Trentino-Alto Adige - Italia",
    "saturation_score": 86.0
  },
  {
    "rank": 36,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.39236175406071294,
    "score_1h": 0.0,
    "score_4h": 0.14705882352941177,
    "score_7d": 1.1804733727810652,
    "extracted_entities": "Francesco - Papa - Canale 5",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "sabina ciuffini",
    "discover_score": 0.3652938080180382,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.2205882352941178,
    "score_7d": 0.6420118343195267,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70",
    "saturation_score": 9.0
  },
  {
    "rank": 7,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.3588636220203926,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.273109243697479,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "hostage",
    "discover_score": 0.3278022217535542,
    "score_1h": 0.0,
    "score_4h": 0.4369747899159664,
    "score_7d": 0.8668639053254438,
    "extracted_entities": "Ostaggi - Rapimento - Crisi - Liberazione - Negoziazioni",
    "saturation_score": 3.0
  },
  {
    "rank": 23,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.32338484230617814,
    "score_1h": 3.7413793103448274,
    "score_4h": 1.0567226890756303,
    "score_7d": 0.5828402366863905,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristorazione - Televisione",
    "saturation_score": 3.0
  },
  {
    "rank": 47,
    "entity": "helena prestes tapiro",
    "discover_score": 0.31236846154423875,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.49789915966386555,
    "score_7d": 0.8047337278106509,
    "extracted_entities": "Helena Prestes - Tapiro",
    "saturation_score": 5.0
  },
  {
    "rank": 44,
    "entity": "dune 2",
    "discover_score": 0.31188024748595683,
    "score_1h": 0.0,
    "score_4h": 0.5147058823529411,
    "score_7d": 0.7869822485207101,
    "extracted_entities": "Dune 2 - Film - Sequel - Fantascienza - Denis Villeneuve",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "giovanni ferrero",
    "discover_score": 0.2857145947419594,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.1323529411764706,
    "score_7d": 0.28106508875739644,
    "extracted_entities": "Giovanni Ferrero - Ferrero SpA - Imprenditore",
    "saturation_score": 4.0
  },
  {
    "rank": 26,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.2711188789088889,
    "score_1h": 0.0,
    "score_4h": 0.3802521008403361,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Venerdì - 4 aprile - Giorno della settimana - Saluti",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "assemblea sinodale",
    "discover_score": 0.23017242066784394,
    "score_1h": 0.0,
    "score_4h": 0.29411764705882354,
    "score_7d": 0.46449704142011833,
    "extracted_entities": "Assemblea sinodale - Sinodo - Chiesa Cattolica - Vescovi - Discussioni religiose",
    "saturation_score": 161.0
  },
  {
    "rank": 31,
    "entity": "donte divincenzo",
    "discover_score": 0.2065707069292931,
    "score_1h": 3.2155172413793105,
    "score_4h": 0.0,
    "score_7d": 0.43195266272189353,
    "extracted_entities": "Donte DiVincenzo - Basket - NBA",
    "saturation_score": 5.0
  },
  {
    "rank": 39,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.20418001411867312,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.4467455621301775,
    "extracted_entities": "Chelsea - Tottenham - Partita di calcio - Premier League",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "ordinanza maturità",
    "discover_score": 0.18503520934356707,
    "score_1h": 0.0,
    "score_4h": 0.3067226890756303,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Ordinanza - Maturità - Esami di Stato - Ministero dell'Istruzione",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "personale ata ciad",
    "discover_score": 0.1549296044213643,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.09873949579831932,
    "score_7d": 0.1183431952662722,
    "extracted_entities": "Personale ATA - Ciad - Scuola - Amministrazione - Supporto educativo",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "walter novellino",
    "discover_score": 0.1474224771301307,
    "score_1h": 0.0,
    "score_4h": 0.38445378151260506,
    "score_7d": 0.056213017751479286,
    "extracted_entities": "Walter Novellino - Calcio - Allenatore",
    "saturation_score": 1.0
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
    "entity": "vinitaly 2025",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "ufo sweden",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "marrakech atp",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "roberto bolle",
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
    "entity": "console nintendo switch 2",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "raiplay",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "microsoft",
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
    "entity": "beşiktaş - göztepe",
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
    "entity": "mad max fury road",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "tommaso zorzi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "heat - grizzlies",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "vittorio feltri",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "azioni stellantis",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "francesca mannocchi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "angelucci",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "pulse netflix",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "leonardo",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "invalsi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "luciano darderi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "nets - timberwolves",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "timothée chalamet",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "valentina persia",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "scandicci",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "blue bloods",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "valerio lundini",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "mad max",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "immunizations",
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
    "entity": "licia fertz",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "pharmacy",
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
    "entity": "flu shots",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "michelle hunziker",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "vaccinations",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "piazza della loggia",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "kevin bacon",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "inps",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "the darkness",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "stellantis",
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
    "entity": "jodie foster",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "hostage film",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "vaccines",
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
    "entity": "gaetano migliaccio mare fuori",
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
    "entity": "alex belli",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "lorenzo biagiarelli",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "tom selleck",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "paolo villaggio",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "sean connery",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "barcis",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "dr",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "kamindu mendis",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "gazzetta di parma",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "amanda bynes",
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
    "entity": "bibbiano",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "donzelli",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "michele serra",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "restaurant",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "laerte pappalardo",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "daniel lee",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "greta thunberg",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "carlo acutis",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "black hawk down",
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
    "entity": "luca sommi",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "pamela anderson",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "vincicasa",
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
    "entity": "miyazaki",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "bonus bollette 2025",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "antonio albanese",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "reuters",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "paolo del debbio",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "gustavo sa",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "giovanni floris",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "belén rodríguez",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "messaggero",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "risultati nba",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "isee",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "nordio",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "manila nazzaro",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "bruce springsteen",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "sgarbi come sta",
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
    "entity": "corinne clery",
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
    "entity": "hunziker",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "minecraft",
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
    "entity": "guida tv",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "paul pogba",
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
    "entity": "bortuzzo",
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
    "entity": "elisa longo borghini",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "nicoletta manni",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "famiglie d'italia",
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
    "entity": "pontedera",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "mauritius",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "samarcanda",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "maria elena boschi",
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
    "entity": "luis henrique marsiglia",
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
    "entity": "cammino di santiago",
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
    "entity": "quotazione oro oggi",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "wall street journal",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "lady gaga tour",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "brenda lodigiani",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "concerto lady gaga milano",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "sorrentino",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "baustelle",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 10:45:50",
  "trends_count": 176,
  "top_score": 36.0619130736123,
  "runtime_minutes": 3.8219539443651835,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle correnti tendenze tracciate dal grande oracolo dell'informazione, tre temi emergono con forza: il cinema, con l'ombra di \"Dune\" (12, 28, 42) che si estende nella cultura popolare; il mondo dello sport, simbolizzato da sfide come \"Chelsea - Tottenham\" (#9, #47) e l'impeto del \"Tennis\" (14, 24); e infine, il dinamismo del \"Turismo\" italiano, da \"Ortona\" a \"San Vincenzo\" (#7, #5), riflette l'eterno richiamo delle terre nostrane.\n\nNel regno delle opportunità, il \"Turismo Calabrese\" (#1) spicca come una stella in ascesa. Con un crescente interesse recente e una saturazione non eccessiva, rappresenta un fertile suolo per narrazioni ricche di storia e cultura. Al contempo, le tensioni e i rapidi cambiamenti nei \"Mercati Finanziari\" (#4, #10) consentono di sondare nuovi orizzonti economici.\n\nTuttavia, il saggio creatore di contenuti deve guardare con cautela verso il cielo saturo della \"Borsa Italiana\" (#2) e del \"4 aprile\" (#8), dove la competizione è feroce e l'astuzia è richiesta per trovare spazi d'originalità.\n\nChe le muse della creatività vi guidino! Guardate oltre l'ovvio e scolpite le vostre storie nei solchi delle tendenze emergenti."
};
