const trendData = [
  {
    "rank": 1,
    "entity": "borsa italiana",
    "discover_score": 42.63101719625939,
    "score_1h": 64.94827586206897,
    "score_4h": 56.405462184873954,
    "score_7d": 18.088757396449704,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti - Azioni",
    "saturation_score": 3360.0
  },
  {
    "rank": 17,
    "entity": "investing",
    "discover_score": 20.840277877649893,
    "score_1h": 46.96551724137931,
    "score_4h": 38.0609243697479,
    "score_7d": 32.48224852071006,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Trading",
    "saturation_score": 5.0
  },
  {
    "rank": 4,
    "entity": "wall street",
    "discover_score": 14.236479319749819,
    "score_1h": 34.060344827586206,
    "score_4h": 13.65126050420168,
    "score_7d": 18.275147928994084,
    "extracted_entities": "Wall Street - Finanza - Borsa - New York - Mercato azionario",
    "saturation_score": 312.0
  },
  {
    "rank": 42,
    "entity": "lotto",
    "discover_score": 10.534637410078686,
    "score_1h": 69.60344827586206,
    "score_4h": 54.12605042016807,
    "score_7d": 15.689349112426036,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazione numeri - Vincite - Scommesse",
    "saturation_score": 1510.0
  },
  {
    "rank": 50,
    "entity": "stasera in tv",
    "discover_score": 8.530127599518073,
    "score_1h": 40.36309175920515,
    "score_4h": 37.854743152491125,
    "score_7d": 15.588757396449704,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Intrattenimento",
    "saturation_score": 61.0
  },
  {
    "rank": 45,
    "entity": "parma inter",
    "discover_score": 7.652081139131399,
    "score_1h": 1.8189655172413794,
    "score_4h": 2.1179547132660597,
    "score_7d": 22.213017751479292,
    "extracted_entities": "Parma - Inter - Calcio - Serie A - Partita",
    "saturation_score": 93.0
  },
  {
    "rank": 16,
    "entity": "unicredit azioni",
    "discover_score": 5.018079735006834,
    "score_1h": 27.672413793103445,
    "score_4h": 19.01260504201681,
    "score_7d": 8.281065088757396,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "azioni leonardo",
    "discover_score": 4.973511731327789,
    "score_1h": 24.163793103448278,
    "score_4h": 19.96951583980873,
    "score_7d": 10.044378698224852,
    "extracted_entities": "Azioni - Leonardo - Borsa - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 20,
    "entity": "de zerbi",
    "discover_score": 3.9652031095938427,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.7478991596638656,
    "score_7d": 11.00887573964497,
    "extracted_entities": "De Zerbi - Allenatore - Calcio - Brighton & Hove Albion - Premier League",
    "saturation_score": 292.0
  },
  {
    "rank": 43,
    "entity": "stellantis azioni",
    "discover_score": 3.768790131230352,
    "score_1h": 17.129310344827587,
    "score_4h": 10.771008403361344,
    "score_7d": 9.381656804733728,
    "extracted_entities": "Stellantis - Azioni - Mercato azionario - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 3,
    "entity": "de bruyne",
    "discover_score": 2.990938306051833,
    "score_1h": 29.86864406779661,
    "score_4h": 21.932773109243698,
    "score_7d": 1.3254437869822486,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 83.0
  },
  {
    "rank": 7,
    "entity": "sciopero trenitalia",
    "discover_score": 2.90828272842492,
    "score_1h": 5.488895382817066,
    "score_4h": 2.198243732639499,
    "score_7d": 6.372781065088757,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Ferrovie - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "chelsea - tottenham",
    "discover_score": 2.756544741873356,
    "score_1h": 2.810344827586207,
    "score_4h": 0.4595302556168911,
    "score_7d": 4.8076923076923075,
    "extracted_entities": "Chelsea - Tottenham - Calcio - Premier League - Partita",
    "saturation_score": 55.0
  },
  {
    "rank": 49,
    "entity": "bruce springsteen",
    "discover_score": 2.6231518438949992,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.957983193277311,
    "score_7d": 8.837278106508876,
    "extracted_entities": "Bruce Springsteen - Musica - Cantante - Rock - Concerti",
    "saturation_score": 129.0
  },
  {
    "rank": 31,
    "entity": "ortona",
    "discover_score": 2.4217958607737544,
    "score_1h": 12.46551724137931,
    "score_4h": 5.3373123307900565,
    "score_7d": 6.399408284023668,
    "extracted_entities": "Ortona - Abruzzo - Turismo - Storia - Cultura",
    "saturation_score": 213.0
  },
  {
    "rank": 28,
    "entity": "mezzolombardo",
    "discover_score": 2.3741999843474613,
    "score_1h": 0.0,
    "score_4h": 1.7794117647058822,
    "score_7d": 7.091715976331361,
    "extracted_entities": "Mezzolombardo - Località - Trentino-Alto Adige - Italia",
    "saturation_score": 105.0
  },
  {
    "rank": 41,
    "entity": "san vincenzo",
    "discover_score": 2.0562821147724075,
    "score_1h": 2.4310344827586206,
    "score_4h": 2.8760504201680672,
    "score_7d": 6.289940828402367,
    "extracted_entities": "San Vincenzo - Località - Turismo - Toscana - Mare",
    "saturation_score": 118.0
  },
  {
    "rank": 30,
    "entity": "borse mondiali",
    "discover_score": 2.04863889652893,
    "score_1h": 2.724137931034483,
    "score_4h": 1.5448648078478253,
    "score_7d": 6.281065088757396,
    "extracted_entities": "Borse - Mercati finanziari - Economia globale",
    "saturation_score": 44.0
  },
  {
    "rank": 9,
    "entity": "raffaella scudiero",
    "discover_score": 2.0076589526625472,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.4432773109243698,
    "score_7d": 5.15680473372781,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 47.0
  },
  {
    "rank": 6,
    "entity": "flavio cobolli",
    "discover_score": 1.932641273993843,
    "score_1h": 23.474137931034484,
    "score_4h": 7.86871066418199,
    "score_7d": 2.730769230769231,
    "extracted_entities": "Flavio Cobolli - Tennis - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 5,
    "entity": "radio deejay riccione",
    "discover_score": 1.8120720539435422,
    "score_1h": 0.0,
    "score_4h": 0.8529411764705882,
    "score_7d": 4.026627218934911,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "dune",
    "discover_score": 1.795957414353073,
    "score_1h": 2.8706896551724137,
    "score_4h": 1.2478991596638656,
    "score_7d": 5.334319526627219,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 122.0
  },
  {
    "rank": 24,
    "entity": "greta thunberg",
    "discover_score": 1.7853631992949963,
    "score_1h": 0.8220338983050848,
    "score_4h": 1.2315671038289793,
    "score_7d": 5.349112426035503,
    "extracted_entities": "Greta Thunberg - Attivismo climatico - Cambiamento climatico - Giovani attivisti",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "anna kalinskaja",
    "discover_score": 1.3897189004577757,
    "score_1h": 0.0,
    "score_4h": 0.40376569037656906,
    "score_7d": 4.526627218934911,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sport",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "vincita riccione",
    "discover_score": 1.360845689903516,
    "score_1h": 0.0,
    "score_4h": 0.14285714285714285,
    "score_7d": 4.298816568047338,
    "extracted_entities": "Vincita - Riccione - Lotteria - Jackpot - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "elettra lamborghini",
    "discover_score": 1.2366473720218762,
    "score_1h": 0.0,
    "score_4h": 1.0609243697478992,
    "score_7d": 4.1360946745562135,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia",
    "saturation_score": 56.0
  },
  {
    "rank": 8,
    "entity": "laura loomer",
    "discover_score": 0.9830255490517503,
    "score_1h": 0.0,
    "score_4h": 0.7142857142857143,
    "score_7d": 2.420118343195266,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 26.0
  },
  {
    "rank": 27,
    "entity": "lorenzo sonego",
    "discover_score": 0.9819170195941056,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7016806722689075,
    "score_7d": 3.06508875739645,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore",
    "saturation_score": 6.0
  },
  {
    "rank": 13,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.9210962308491484,
    "score_1h": 0.0,
    "score_4h": 0.47106290214830704,
    "score_7d": 2.556213017751479,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "baustelle",
    "discover_score": 0.827130140892312,
    "score_1h": 3.4482758620689653,
    "score_4h": 1.7226890756302522,
    "score_7d": 2.4023668639053253,
    "extracted_entities": "Baustelle - Band musicale - Indie rock - Italia",
    "saturation_score": 39.0
  },
  {
    "rank": 33,
    "entity": "sporting - rio ave",
    "discover_score": 0.7679541705488979,
    "score_1h": 0.0,
    "score_4h": 0.12761506276150628,
    "score_7d": 2.5798816568047336,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "giovanni ferrero",
    "discover_score": 0.7638827681940727,
    "score_1h": 1.3103448275862069,
    "score_4h": 1.043616609823846,
    "score_7d": 1.893491124260355,
    "extracted_entities": "Giovanni Ferrero - Ferrero SpA - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 3.0
  },
  {
    "rank": 47,
    "entity": "sciopero scuola",
    "discover_score": 0.7405826404763093,
    "score_1h": 0.0,
    "score_4h": 0.3305439330543933,
    "score_7d": 2.5710059171597632,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione",
    "saturation_score": 8.0
  },
  {
    "rank": 48,
    "entity": "dune film",
    "discover_score": 0.6708793981166922,
    "score_1h": 0.0,
    "score_4h": 0.21638655462184875,
    "score_7d": 2.3431952662721893,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "lakers - warriors",
    "discover_score": 0.606616611763849,
    "score_1h": 0.646551724137931,
    "score_4h": 0.3970588235294118,
    "score_7d": 1.7633136094674557,
    "extracted_entities": "Lakers - Warriors - NBA - Partita - Basket",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.5507553476838617,
    "score_1h": 0.2413793103448276,
    "score_4h": 0.0,
    "score_7d": 1.8668639053254439,
    "extracted_entities": "Venerdì - 4 aprile - Buongiorno - Auguri",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "green deal",
    "discover_score": 0.5432106559748561,
    "score_1h": 0.0,
    "score_4h": 0.7883337435392567,
    "score_7d": 1.3372781065088757,
    "extracted_entities": "Green Deal - Politica ambientale - Sostenibilità - Unione Europea - Economia verde",
    "saturation_score": 209.0
  },
  {
    "rank": 36,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.5223758425494538,
    "score_1h": 1.353448275862069,
    "score_4h": 1.254201680672269,
    "score_7d": 1.3875739644970413,
    "extracted_entities": "Beautiful - Anticipazioni - Soap Opera",
    "saturation_score": 5.0
  },
  {
    "rank": 19,
    "entity": "damiano uomini e donne",
    "discover_score": 0.46808497075187594,
    "score_1h": 7.75,
    "score_4h": 1.5714285714285714,
    "score_7d": 0.9378698224852071,
    "extracted_entities": "Damiano - Uomini e Donne - Programma televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "sci federica brignone",
    "discover_score": 0.39827245525223326,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.42550367427305646,
    "score_7d": 1.121301775147929,
    "extracted_entities": "Sci - Federica Brignone - Sport Invernali",
    "saturation_score": 8.0
  },
  {
    "rank": 10,
    "entity": "personale ata ciad",
    "discover_score": 0.39599148040786364,
    "score_1h": 3.810344827586207,
    "score_4h": 1.738405822580078,
    "score_7d": 0.5207100591715976,
    "extracted_entities": "Personale ATA - Ciad - Scuola - Amministrazione - Supporto educativo",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "assemblea sinodale",
    "discover_score": 0.36113497884590173,
    "score_1h": 0.0,
    "score_4h": 0.34992616293379275,
    "score_7d": 1.047337278106509,
    "extracted_entities": "Assemblea - Sinodo - Chiesa - Vescovi - Discussione",
    "saturation_score": 79.0
  },
  {
    "rank": 25,
    "entity": "alessandro bastoni",
    "discover_score": 0.3486713517075501,
    "score_1h": 0.21551724137931033,
    "score_4h": 0.6176470588235294,
    "score_7d": 0.8076923076923077,
    "extracted_entities": "Alessandro Bastoni - Calciatore - Inter - Serie A - Nazionale Italiana",
    "saturation_score": 4.0
  },
  {
    "rank": 32,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.3274839011553285,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.7504570866003305,
    "score_7d": 0.7337278106508875,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristorazione - Televisione",
    "saturation_score": 3.0
  },
  {
    "rank": 14,
    "entity": "walter novellino",
    "discover_score": 0.28921104282988636,
    "score_1h": 0.0,
    "score_4h": 2.028655813789951,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Walter Novellino - Calcio - Allenatore",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "kevin de bruyne",
    "discover_score": 0.22986084846097019,
    "score_1h": 0.0,
    "score_4h": 1.0840336134453783,
    "score_7d": 0.15088757396449706,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "elodie mi ami mi odi testo",
    "discover_score": 0.20398102464116513,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.40336134453781514,
    "score_7d": 0.3431952662721893,
    "extracted_entities": "Elodie - Mi Ami Mi Odi - Testo - Canzone",
    "saturation_score": 1.0
  },
  {
    "rank": 18,
    "entity": "ed sheeran azizam",
    "discover_score": 0.19040159625080694,
    "score_1h": 1.4741379310344827,
    "score_4h": 1.0654688653704159,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Ed Sheeran - Azizam - Musica",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "oroscopo 4 aprile scorpione",
    "discover_score": 0.18800734965874408,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.6071428571428572,
    "score_7d": 0.21005917159763313,
    "extracted_entities": "Oroscopo - 4 aprile - Scorpione",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "russell brand",
    "discover_score": 0.1590834923470313,
    "score_1h": 0.75,
    "score_4h": 0.0,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Russell Brand - Comico - Attore - Personalità televisiva - Controversie",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "donte divincenzo",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "vinitaly 2025",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "hostage",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "ordinanza maturità",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "dune 2",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "matilda de angelis",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "helena prestes tapiro",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "north sentinel",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "devil may cry",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "ufo sweden",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "calabria",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "roberto bolle",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "stefano bollani",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "sixers - bucks",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "console nintendo switch 2",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "film dune",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "raiplay",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "marrakech atp",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "quotazione oro oggi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "lesotho",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "mad max fury road",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "tommaso zorzi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "francesca mannocchi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "vittorio feltri",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "angelucci",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "brandin podziemski",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "pulse netflix",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "luciano darderi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "tradimento anticipazioni",
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
    "entity": "timothée chalamet",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "scandicci",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "blue bloods",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "heat - grizzlies",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "valerio lundini",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "dolce vita orient express",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "mad max",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "michelle hunziker",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "invalsi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "papa bergoglio",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "kevin bacon",
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
    "entity": "the darkness",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "jodie foster",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "hostage film",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "pharmacy",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "the image of you",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "flu shots",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "immunizations",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "nets - timberwolves",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "vaccinations",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "andrea pisani",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "vaccines",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "dax",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "sean connery",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "barcis",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "matilde de angelis",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "kamindu mendis",
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
    "entity": "bibbiano",
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
    "entity": "alessandro sallusti",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "carlo acutis",
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
    "entity": "michele serra",
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
    "entity": "gazzetta di parma",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "pamela anderson",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "vincicasa",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "millionday",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "restaurant",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "luca sommi",
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
    "entity": "bonus bollette 2025",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "miyazaki",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "reuters",
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
    "entity": "gustavo sa",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "paolo del debbio",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "belén rodríguez",
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
    "entity": "manila nazzaro",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "lorenzo biagiarelli",
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
    "entity": "melfi",
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
    "entity": "hunziker",
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
    "entity": "minecraft",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "guida tv",
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
    "entity": "cruciani",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "isole heard e mcdonald",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "bortuzzo",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "paul pogba",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "christian slater",
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
    "entity": "ciuffini",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "un posto al sole 3 aprile 2025",
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
    "entity": "vaibhav arora",
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
    "entity": "südtirol news",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "verdansk",
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
    "entity": "stan wawrinka",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "wall street journal",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "sorrentino",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 13:45:38",
  "trends_count": 168,
  "top_score": 42.63101719625939,
  "runtime_minutes": 3.3845258076985676,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nella visione svelata dai dati, due temi principali emergono come protagonisti del momento: il fervore dei mercati finanziari e l'inarrestabile passione per il calcio. La Borsa italiana (#1), insieme al panorama internazionale di Wall Street (#3), infiamma l'interesse dei curiosi investitori, mentre le sorti calcistiche di squadre come Parma e Inter (#6) pulsano nel cuore degli appassionati di sport.\n\nEppure, tra le ombre della saturazione, sorge un'opportunità luminosa: il trend di \"Stasera in TV\" (#5) si distingue grazie a un potenziale Discover notevole e una copertura mediatica limitata. Tali caratteristiche suggeriscono possibilità amplificate per chi intende cavalcare l'onda dell'intrattenimento quotidiano.\n\nMa attenzione ai rischi dei mercati finanziari. La \"Borsa italiana\" (#1) è avvolta da una rete di saturazione e competizione intensa, suggerendo cautela per chi cerca di inserirsi in un panorama già densamente popolato.\n\nInfine, la saggezza impone di considerare strategie flessibili, giostrandosi tra i grandi temi e le nicchie emergenti, per massimizzare la visibilità e il coinvolgimento degli utenti su Google Discover. Così, l'arte della profezia si traduce in efficacia pratica."
};
