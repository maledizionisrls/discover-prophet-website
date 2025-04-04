const trendData = [
  {
    "rank": 1,
    "entity": "borsa italiana",
    "discover_score": 40.145499957749756,
    "score_1h": 71.33620689655172,
    "score_4h": 52.955882352941174,
    "score_7d": 17.59310721329952,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti - Azioni",
    "saturation_score": 4010.0
  },
  {
    "rank": 45,
    "entity": "lotto",
    "discover_score": 10.636434592317375,
    "score_1h": 68.02586206896552,
    "score_4h": 55.292016806722685,
    "score_7d": 15.98719709777402,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazione - Numeri - Vincite",
    "saturation_score": 1440.0
  },
  {
    "rank": 5,
    "entity": "borsa milano",
    "discover_score": 10.14463290187202,
    "score_1h": 40.73275862068965,
    "score_4h": 36.78991596638656,
    "score_7d": 9.42297125950972,
    "extracted_entities": "Borsa - Milano - Mercati finanziari - Indici azionari - Piazza Affari",
    "saturation_score": 108.0
  },
  {
    "rank": 13,
    "entity": "unicredit azioni",
    "discover_score": 7.865632118661932,
    "score_1h": 23.120689655172413,
    "score_4h": 14.439075630252102,
    "score_7d": 14.530959425190193,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "wall street",
    "discover_score": 7.514784951242312,
    "score_1h": 14.11206896551724,
    "score_4h": 4.880252100840336,
    "score_7d": 15.295488165680474,
    "extracted_entities": "Wall Street - Borsa - Finanza - New York - Mercato azionario",
    "saturation_score": 453.0
  },
  {
    "rank": 41,
    "entity": "stellantis azioni",
    "discover_score": 7.259660928645238,
    "score_1h": 19.32758620689655,
    "score_4h": 12.913865546218489,
    "score_7d": 17.969850662158354,
    "extracted_entities": "Stellantis - Azioni - Mercato azionario - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 30,
    "entity": "ortona",
    "discover_score": 5.839445715821588,
    "score_1h": 11.810344827586206,
    "score_4h": 5.029411764705882,
    "score_7d": 15.477722597914905,
    "extracted_entities": "Ortona - Abruzzo - Turismo - Storia - Cultura",
    "saturation_score": 152.0
  },
  {
    "rank": 38,
    "entity": "azioni leonardo",
    "discover_score": 5.318987705448641,
    "score_1h": 23.353448275862068,
    "score_4h": 17.084033613445378,
    "score_7d": 11.684294871794872,
    "extracted_entities": "Azioni - Leonardo - Borsa - Investimenti - Finanza",
    "saturation_score": 5.0
  },
  {
    "rank": 43,
    "entity": "san vincenzo",
    "discover_score": 5.01869225374659,
    "score_1h": 3.7672413793103448,
    "score_4h": 1.0819327731092436,
    "score_7d": 15.481949140602987,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto turistico",
    "saturation_score": 78.0
  },
  {
    "rank": 23,
    "entity": "cobolli",
    "discover_score": 2.954958312574344,
    "score_1h": 26.086206896551722,
    "score_4h": 8.226890756302522,
    "score_7d": 6.70759368836292,
    "extracted_entities": "Cobolli",
    "saturation_score": 98.0
  },
  {
    "rank": 2,
    "entity": "chelsea - tottenham",
    "discover_score": 2.773611723774217,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.5420168067226891,
    "score_7d": 4.813098760214145,
    "extracted_entities": "Chelsea - Tottenham - Premier League - Calcio - Londra",
    "saturation_score": 47.0
  },
  {
    "rank": 26,
    "entity": "greta thunberg",
    "discover_score": 2.6038899436069345,
    "score_1h": 2.560344827586207,
    "score_4h": 0.9432773109243697,
    "score_7d": 7.872534516765286,
    "extracted_entities": "Greta Thunberg - Attivismo climatico - Cambiamento climatico - Fridays for Future - Sostenibilità",
    "saturation_score": 1.0
  },
  {
    "rank": 3,
    "entity": "de bruyne",
    "discover_score": 2.3176729474361077,
    "score_1h": 37.44827586206897,
    "score_4h": 18.4390756302521,
    "score_7d": 0.9155571992110454,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 46.0
  },
  {
    "rank": 24,
    "entity": "borse mondiali",
    "discover_score": 2.146844491533539,
    "score_1h": 2.0172413793103448,
    "score_4h": 1.8676470588235294,
    "score_7d": 6.225750211327135,
    "extracted_entities": "Borse - Mercati finanziari - Economia globale",
    "saturation_score": 50.0
  },
  {
    "rank": 40,
    "entity": "parma inter",
    "discover_score": 1.9621867627160123,
    "score_1h": 4.413793103448276,
    "score_4h": 0.5063025210084033,
    "score_7d": 6.6198224852071,
    "extracted_entities": "Parma - Inter - Calcio - Serie A - Partita",
    "saturation_score": 83.0
  },
  {
    "rank": 4,
    "entity": "radio deejay riccione",
    "discover_score": 1.9417785555670763,
    "score_1h": 4.103448275862069,
    "score_4h": 0.888655462184874,
    "score_7d": 4.073172020287405,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "dune",
    "discover_score": 1.8274982544934293,
    "score_1h": 2.2586206896551726,
    "score_4h": 1.8319327731092436,
    "score_7d": 5.349975345167653,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 53.0
  },
  {
    "rank": 36,
    "entity": "sporting - rio ave",
    "discover_score": 1.5304917104942215,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.24159663865546216,
    "score_7d": 5.201764581572274,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "anna kalinskaja",
    "discover_score": 1.347483438647715,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 4.510355029585799,
    "extracted_entities": "Anna Kalinskaja - Tennis - Giocatrice",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "prove libere f1 oggi",
    "discover_score": 1.2132568000354012,
    "score_1h": 0.0,
    "score_4h": 0.7773109243697479,
    "score_7d": 3.415680473372781,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "de zerbi",
    "discover_score": 1.092571012155112,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.4054621848739496,
    "score_7d": 3.3029022259791487,
    "extracted_entities": "De Zerbi - Allenatore - Calcio - Brighton & Hove Albion - Premier League",
    "saturation_score": 230.0
  },
  {
    "rank": 21,
    "entity": "vincita riccione",
    "discover_score": 0.9778135842595227,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.5966386554621849,
    "score_7d": 2.945231051000282,
    "extracted_entities": "Vincita - Riccione - Lotteria - Premio",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "baustelle",
    "discover_score": 0.9749921710133926,
    "score_1h": 2.9482758620689653,
    "score_4h": 1.3991596638655461,
    "score_7d": 2.94081079177233,
    "extracted_entities": "Baustelle - Band musicale - Indie rock - Italia",
    "saturation_score": 75.0
  },
  {
    "rank": 48,
    "entity": "kkr vs srh",
    "discover_score": 0.9722912485879355,
    "score_1h": 0.0,
    "score_4h": 0.23739495798319327,
    "score_7d": 3.4745174697097774,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "flavio cobolli",
    "discover_score": 0.8148160434972204,
    "score_1h": 10.086206896551724,
    "score_4h": 2.079831932773109,
    "score_7d": 1.922759932375317,
    "extracted_entities": "Flavio Cobolli - Tennis - Giocatore - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 47,
    "entity": "elettra lamborghini",
    "discover_score": 0.7938226836333949,
    "score_1h": 0.0,
    "score_4h": 0.3277310924369748,
    "score_7d": 2.773915187376726,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia",
    "saturation_score": 61.0
  },
  {
    "rank": 7,
    "entity": "sciopero trenitalia",
    "discover_score": 0.7936008136799102,
    "score_1h": 2.844827586206897,
    "score_4h": 2.592436974789916,
    "score_7d": 1.367656382079459,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "lakers - warriors",
    "discover_score": 0.7926860374974192,
    "score_1h": 3.3017241379310347,
    "score_4h": 0.7899159663865547,
    "score_7d": 1.759650605804452,
    "extracted_entities": "Lakers - Warriors - NBA - Basket - Partita",
    "saturation_score": 4.0
  },
  {
    "rank": 18,
    "entity": "mezzolombardo",
    "discover_score": 0.744406974133928,
    "score_1h": 2.1293103448275863,
    "score_4h": 1.3130252100840336,
    "score_7d": 1.9229536489151875,
    "extracted_entities": "Mezzolombardo - Località - Trentino-Alto Adige - Italia",
    "saturation_score": 70.0
  },
  {
    "rank": 20,
    "entity": "green deal",
    "discover_score": 0.7325533214353344,
    "score_1h": 1.8879310344827587,
    "score_4h": 1.0630252100840336,
    "score_7d": 1.9928677092138631,
    "extracted_entities": "Green Deal - Politica ambientale - Unione Europea - Sostenibilità - Economia verde",
    "saturation_score": 138.0
  },
  {
    "rank": 42,
    "entity": "bruce springsteen",
    "discover_score": 0.7173511837170342,
    "score_1h": 0.2413793103448276,
    "score_4h": 1.3676470588235294,
    "score_7d": 2.148756692025923,
    "extracted_entities": "Bruce Springsteen - Musica - Cantante - Rock - Concerti",
    "saturation_score": 109.0
  },
  {
    "rank": 34,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.6875100363309543,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.058823529411764705,
    "score_7d": 2.318839814032122,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristoranti - Televisione",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "sciopero scuola",
    "discover_score": 0.6694759656622616,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.12184873949579832,
    "score_7d": 2.3315898844745,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione - Lavoratori",
    "saturation_score": 10.0
  },
  {
    "rank": 39,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.6589763623482249,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.5378151260504201,
    "score_7d": 2.1302655677655675,
    "extracted_entities": "Venerdì - 4 aprile - Giorno della settimana - Saluti",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.6300617577618655,
    "score_1h": 6.103448275862069,
    "score_4h": 1.3970588235294117,
    "score_7d": 1.589567483798253,
    "extracted_entities": "Beautiful - Anticipazioni - Soap Opera",
    "saturation_score": 5.0
  },
  {
    "rank": 8,
    "entity": "raffaella scudiero",
    "discover_score": 0.5897269624384133,
    "score_1h": 1.396551724137931,
    "score_4h": 0.22058823529411764,
    "score_7d": 1.4456713158636236,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 50.0
  },
  {
    "rank": 28,
    "entity": "lorenzo sonego",
    "discover_score": 0.5729914215686204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.8466645533953225,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore italiano",
    "saturation_score": 6.0
  },
  {
    "rank": 9,
    "entity": "laura loomer",
    "discover_score": 0.5264730477604205,
    "score_1h": 0.8362068965517241,
    "score_4h": 1.4180672268907564,
    "score_7d": 0.9790257819103974,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 26.0
  },
  {
    "rank": 12,
    "entity": "giovanni ferrero",
    "discover_score": 0.46256558903343875,
    "score_1h": 2.2844827586206895,
    "score_4h": 0.5252100840336135,
    "score_7d": 1.08039236404621,
    "extracted_entities": "Giovanni Ferrero - Ferrero SpA - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "azizam",
    "discover_score": 0.4327615686336233,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.8445378151260504,
    "score_7d": 1.2078050154973232,
    "extracted_entities": "Azizam - Canzone - Musica",
    "saturation_score": 79.0
  },
  {
    "rank": 27,
    "entity": "sabina ciuffini",
    "discover_score": 0.3719331273986412,
    "score_1h": 0.0,
    "score_4h": 0.25840336134453784,
    "score_7d": 1.0089814032121724,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70",
    "saturation_score": 8.0
  },
  {
    "rank": 29,
    "entity": "alessandro bastoni",
    "discover_score": 0.3616589009555613,
    "score_1h": 0.0,
    "score_4h": 0.5840336134453781,
    "score_7d": 0.8950936883629191,
    "extracted_entities": "Alessandro Bastoni - Calciatore - Inter - Serie A - Nazionale Italiana",
    "saturation_score": 7.0
  },
  {
    "rank": 37,
    "entity": "elodie mi ami mi odi testo",
    "discover_score": 0.2967656152134956,
    "score_1h": 0.0,
    "score_4h": 0.39075630252100846,
    "score_7d": 0.7287087912087913,
    "extracted_entities": "Elodie - Mi Ami Mi Odi - Testo - Canzone",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "kevin de bruyne",
    "discover_score": 0.2937506011630722,
    "score_1h": 2.5086206896551726,
    "score_4h": 0.3739495798319328,
    "score_7d": 0.5338827838827839,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 7.0
  },
  {
    "rank": 16,
    "entity": "walter novellino",
    "discover_score": 0.265526015265944,
    "score_1h": 1.706896551724138,
    "score_4h": 1.1281512605042017,
    "score_7d": 0.30198647506339815,
    "extracted_entities": "Walter Novellino - Calcio - Allenatore",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "sci federica brignone",
    "discover_score": 0.2540313340060415,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.626285573400958,
    "extracted_entities": "Sci - Federica Brignone - Sport Invernali",
    "saturation_score": 8.0
  },
  {
    "rank": 50,
    "entity": "donte divincenzo",
    "discover_score": 0.2512910146266711,
    "score_1h": 1.0689655172413792,
    "score_4h": 0.4159663865546218,
    "score_7d": 0.57204494223725,
    "extracted_entities": "Donte DiVincenzo - Basket - NBA",
    "saturation_score": 5.0
  },
  {
    "rank": 49,
    "entity": "assemblea sinodale",
    "discover_score": 0.2507234947284803,
    "score_1h": 1.206896551724138,
    "score_4h": 1.0273109243697478,
    "score_7d": 0.4084072978303747,
    "extracted_entities": "Assemblea - Sinodo - Chiesa Cattolica - Vescovi - Discussioni religiose",
    "saturation_score": 116.0
  },
  {
    "rank": 14,
    "entity": "personale ata ciad",
    "discover_score": 0.24540583109584047,
    "score_1h": 0.0,
    "score_4h": 0.3319327731092437,
    "score_7d": 0.40602986756832915,
    "extracted_entities": "Personale ATA - Ciad - Istruzione - Amministrazione scolastica",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "oroscopo 4 aprile scorpione",
    "discover_score": 0.20747955070918808,
    "score_1h": 0.0,
    "score_4h": 0.3907563025210084,
    "score_7d": 0.3410819949281488,
    "extracted_entities": "Oroscopo - 4 aprile - Scorpione",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "dune film",
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
    "entity": "stasera in tv",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "stefano bollani",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "hostage",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "ordinanza maturità",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "matilda de angelis",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "dune 2",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "quotazione oro oggi",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "helena prestes tapiro",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "lesotho",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "north sentinel",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "devil may cry",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "infarto nanni moretti",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "calabria",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "ufo sweden",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "sixers - bucks",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "roberto bolle",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "console nintendo switch 2",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "film dune",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "raiplay",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "marrakech atp",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "mad max fury road",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "tommaso zorzi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "francesca mannocchi",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "vittorio feltri",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "brandin podziemski",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "angelucci",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "pulse netflix",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "microsoft",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "luciano darderi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "timothée chalamet",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "scandicci",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "heat - grizzlies",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "blue bloods",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "valerio lundini",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "mad max",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "dolce vita orient express",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "invalsi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "michelle hunziker",
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
    "entity": "papa bergoglio",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "kevin bacon",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "piazza della loggia",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "the darkness",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "dax",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "nets - timberwolves",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "pharmacy",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "jodie foster",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "hostage film",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "flu shots",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "immunizations",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "the image of you",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "vaccinations",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "vaccines",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "andrea pisani",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "sean connery",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "barcis",
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
    "entity": "dr",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "bibbiano",
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
    "entity": "donzelli",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "carlo acutis",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "daniel lee",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "michele serra",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "gazzetta di parma",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "black hawk down",
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
    "entity": "millionday",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "desaparecidos",
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
    "entity": "antonio albanese",
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
    "entity": "lorenzo biagiarelli",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "miyazaki",
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
    "entity": "paolo del debbio",
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
    "entity": "isee",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "manila nazzaro",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "messaggero",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "sgarbi come sta",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "melfi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "william hill",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "leggo",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "hunziker",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "minecraft",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "guida tv",
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
    "entity": "isole heard e mcdonald",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "bortuzzo",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "paul pogba",
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
    "entity": "elisa longo borghini",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "un posto al sole 3 aprile 2025",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "famiglie d'italia",
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
    "entity": "maria elena boschi",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "luis henrique marsiglia",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "südtirol news",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "verdansk",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "cammino di santiago",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "stan wawrinka",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "wall street journal",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "sorrentino",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 13:05:07",
  "trends_count": 170,
  "top_score": 40.145499957749756,
  "runtime_minutes": 4.077503740787506,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nel regno delle tendenze oggi, le maree del mercato finanziario e del gioco d'azzardo sollevano le loro onde. La Borsa Italiana (#1) e il Lotto (#2) dominano, riflettendo un interesse che sfida i venti del tempo. Gli investitori e i giocatori d'azzardo si muovono come veggenti, guidati dalle stelle e dai numeri. Tuttavia, il tema del finanziario si intreccia con la cultura e l'ambiente, con nomi illustri come Unicredit e Stellantis emergenti in questo panorama.\n\nTra le opportunità di Google Discover brilla la luce di Ortona (#7), un gioiello culturale e turistico in Abruzzo, con un DScore positivo e una saturazione contenuta. Questa combinazione può attirare viaggiatori e storici, pronti a scrutare nel fascino di terre lontane. Anche la sostenibilità di Greta Thunberg (#12) promette cambiamento, un simbolo di attivismo in un mondo in continua evoluzione, con uno spazio esiguo e non saturo.\n\nDa evitare, le onde pericolose dell'eccessiva copertura sono evidenti sotto il peso di \"borsa italiana\" (#1), con una saturazione che scoraggia nuove esplorazioni. Coloro che cercano di navigare nel mondo dei contenuti dovrebbero focalizzarsi su nicchie inespugnate o temi emergenti per emergere in un oceano di competizione incessante."
};
