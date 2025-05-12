const trendData = [
  {
    "rank": 41,
    "entity": "eurovision",
    "discover_score": 11.627116494461395,
    "score_1h": 47.28448275862069,
    "score_4h": 27.630252100840337,
    "score_7d": 24.499260355029584,
    "extracted_entities": "Eurovision - Concerto - Musica - Competizione - Europa",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "twitch",
    "discover_score": 11.129102567464129,
    "score_1h": 61.905172413793096,
    "score_4h": 19.647058823529413,
    "score_7d": 19.877976190476193,
    "extracted_entities": "Twitch - Streaming - Videogiochi - Piattaforma - Community",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "bnl roma",
    "discover_score": 8.139256018260403,
    "score_1h": 35.41379310344828,
    "score_4h": 18.88865546218487,
    "score_7d": 19.151785714285715,
    "extracted_entities": "BNL - Roma - Banca - Finanza",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "jannik sinner",
    "discover_score": 6.889941302743337,
    "score_1h": 34.13793103448276,
    "score_4h": 27.05252100840336,
    "score_7d": 6.282738095238095,
    "extracted_entities": "Jannik Sinner - Tennis - ATP - Italia - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "ancelotti",
    "discover_score": 5.880544305429522,
    "score_1h": 19.853448275862068,
    "score_4h": 9.004201680672269,
    "score_7d": 9.327380952380953,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "berrettini",
    "discover_score": 5.647039251452402,
    "score_1h": 49.439655172413794,
    "score_4h": 24.3566769804156,
    "score_7d": 4.470238095238095,
    "extracted_entities": "Matteo Berrettini - Tennis - ATP Tour - Wimbledon - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "europa",
    "discover_score": 5.536175056831831,
    "score_1h": 35.775862068965516,
    "score_4h": 17.157563025210084,
    "score_7d": 11.833333333333334,
    "extracted_entities": "Europa - Continente - Unione Europea - Paesi Europei - Cultura Europea",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "venezia - fiorentina",
    "discover_score": 5.076579356184357,
    "score_1h": 54.56896551724138,
    "score_4h": 29.48739495798319,
    "score_7d": 1.4226190476190477,
    "extracted_entities": "Venezia - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "oliviero garlini",
    "discover_score": 3.642151672981692,
    "score_1h": 2.387931034482759,
    "score_4h": 0.7205882352941176,
    "score_7d": 9.907051282051281,
    "extracted_entities": "Oliviero Garlini - Calcio - Giocatore - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "jasmine paolini",
    "discover_score": 3.1155389131812417,
    "score_1h": 6.025862068965517,
    "score_4h": 10.109243697478991,
    "score_7d": 5.761904761904762,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "berlino",
    "discover_score": 3.0248552473968795,
    "score_1h": 9.0,
    "score_4h": 1.6092436974789917,
    "score_7d": 9.339285714285715,
    "extracted_entities": "Berlino - Germania - Città - Turismo - Storia",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "prossimo turno serie a",
    "discover_score": 2.638547814080903,
    "score_1h": 9.474137931034482,
    "score_4h": 0.9411764705882353,
    "score_7d": 8.556547619047619,
    "extracted_entities": "Serie A - Calcio - Prossimo turno - Partite - Campionato",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "budapest",
    "discover_score": 2.565958393436225,
    "score_1h": 0.1810344827586207,
    "score_4h": 1.4390756302521008,
    "score_7d": 8.552391518737672,
    "extracted_entities": "Budapest - Ungheria - Turismo - Cultura - Architettura",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "atalanta - roma",
    "discover_score": 2.312068857316017,
    "score_1h": 46.456896551724135,
    "score_4h": 14.3718487394958,
    "score_7d": 1.2261904761904763,
    "extracted_entities": "Atalanta - Roma - Serie A - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "emmanuel macron",
    "discover_score": 2.1076035376671056,
    "score_1h": 2.7672413793103448,
    "score_4h": 1.8102563201012623,
    "score_7d": 4.758928571428571,
    "extracted_entities": "Emmanuel Macron - Politica francese - Presidente della Francia",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "sveva sagramola",
    "discover_score": 1.861404504065529,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.6365546218487395,
    "score_7d": 4.6398809523809526,
    "extracted_entities": "Sveva Sagramola - Personaggio televisivo - Conduttrice",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "exit poll elezioni albania",
    "discover_score": 1.7139096285039719,
    "score_1h": 0.47413793103448276,
    "score_4h": 0.5126050420168067,
    "score_7d": 4.428571428571429,
    "extracted_entities": "Exit poll - Elezioni - Albania",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "ios 18.5",
    "discover_score": 1.6656388500979802,
    "score_1h": 0.20689655172413793,
    "score_4h": 1.1869747899159664,
    "score_7d": 5.267857142857142,
    "extracted_entities": "iOS 18.5 - Apple - Sistema operativo",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "hockey",
    "discover_score": 1.6577246001654622,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.1680672268907564,
    "score_7d": 4.866071428571429,
    "extracted_entities": "Hockey - Sport - Gioco - Pattinaggio - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "prossime partite serie a",
    "discover_score": 1.6406796445598086,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.523109243697479,
    "score_7d": 5.642857142857142,
    "extracted_entities": "Partite - Serie A - Calendario - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "francisco cerúndolo",
    "discover_score": 0.9739054075689438,
    "score_1h": 0.034482758620689655,
    "score_4h": 3.9453781512605044,
    "score_7d": 1.7261904761904763,
    "extracted_entities": "Francisco Cerúndolo - Tennis - ATP - Argentina - Classifica",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "sciopero treni 17 maggio 2025",
    "discover_score": 0.9657713736106301,
    "score_1h": 0.0,
    "score_4h": 0.3760504201680672,
    "score_7d": 3.339003944773175,
    "extracted_entities": "Sciopero - Treni - 17 maggio 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "zagabria",
    "discover_score": 0.9585384614208043,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6092436974789915,
    "score_7d": 2.854166666666667,
    "extracted_entities": "Zagabria - Croazia - Turismo - Cultura - Economia",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "al-okhdood club - al-nassr",
    "discover_score": 0.8936260196603587,
    "score_1h": 1.9310344827586208,
    "score_4h": 8.382352941176471,
    "score_7d": 0.37797619047619047,
    "extracted_entities": "Al-Okhdood Club - Al-Nassr - Calcio - Arabia Saudita - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "pagamento assegno unico maggio",
    "discover_score": 0.890141488879952,
    "score_1h": 2.25,
    "score_4h": 0.75,
    "score_7d": 2.6636904761904763,
    "extracted_entities": "Pagamento - Assegno Unico - Maggio",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "bianca andreescu",
    "discover_score": 0.6777325296228851,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.523109243697479,
    "score_7d": 1.9165433925049309,
    "extracted_entities": "Bianca Andreescu - Tennis - Canada - US Open - WTA",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "napoli genoa highlights",
    "discover_score": 0.676181369913527,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.004201680672268907,
    "score_7d": 2.3541666666666665,
    "extracted_entities": "Napoli - Genoa - Highlights - Calcio - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "xabi alonso",
    "discover_score": 0.6186671090012695,
    "score_1h": 0.3017241379310345,
    "score_4h": 0.3550420168067227,
    "score_7d": 1.949404761904762,
    "extracted_entities": "Xabi Alonso - Calciatore - Allenatore - Spagna - Bayern Monaco",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "alissa jung",
    "discover_score": 0.6030608803725592,
    "score_1h": 0.25862068965517243,
    "score_4h": 0.19536057100664533,
    "score_7d": 1.9672619047619047,
    "extracted_entities": "Alissa Jung - Attrice - Germania - Film - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "cantù - fortitudo bologna",
    "discover_score": 0.4720395568922933,
    "score_1h": 3.689655172413793,
    "score_4h": 0.18907563025210083,
    "score_7d": 1.318452380952381,
    "extracted_entities": "Cantù - Fortitudo Bologna - Pallacanestro - Serie A2 - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "folorunsho",
    "discover_score": 0.3967722963503755,
    "score_1h": 4.189655172413794,
    "score_4h": 1.3445378151260505,
    "score_7d": 0.9166666666666667,
    "extracted_entities": "Folorunsho - Nome proprio - Persone",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "ciclone mediterraneo",
    "discover_score": 0.3404697483255389,
    "score_1h": 0.034482758620689655,
    "score_4h": 0.569327731092437,
    "score_7d": 0.8095238095238095,
    "extracted_entities": "Ciclone - Mediterraneo - Fenomeno meteorologico",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "klaus davi",
    "discover_score": 0.34007884728867976,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7542016806722689,
    "score_7d": 0.6101190476190476,
    "extracted_entities": "Klaus Davi",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "federico bondioli",
    "discover_score": 0.339294983861037,
    "score_1h": 4.112068965517241,
    "score_4h": 0.9789915966386555,
    "score_7d": 0.5208333333333334,
    "extracted_entities": "Federico Bondioli",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "carlo calenda",
    "discover_score": 0.33475726471313627,
    "score_1h": 6.525862068965517,
    "score_4h": 1.5597464927393552,
    "score_7d": 0.5833333333333333,
    "extracted_entities": "Carlo Calenda - Politica Italiana - Azione (partito politico)",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "aalesund - bodø/glimt",
    "discover_score": 0.31887803508245716,
    "score_1h": 0.0,
    "score_4h": 0.08403361344537816,
    "score_7d": 0.7589285714285714,
    "extracted_entities": "Aalesund - Bodø/Glimt - Calcio - Norvegia - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "jorge martin aprilia",
    "discover_score": 0.3154278589795872,
    "score_1h": 0.017241379310344827,
    "score_4h": 0.012605042016806723,
    "score_7d": 0.9583333333333333,
    "extracted_entities": "Jorge Martin - Aprilia - MotoGP",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "naddel",
    "discover_score": 0.3043071818486426,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.5042016806722689,
    "score_7d": 0.5744047619047619,
    "extracted_entities": "Naddel",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "mirra andreeva",
    "discover_score": 0.28206076179290895,
    "score_1h": 0.7844827586206896,
    "score_4h": 1.5735294117647058,
    "score_7d": 0.36309523809523814,
    "extracted_entities": "Mirra Andreeva - Tennis - Giocatrice",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "bagnoli osvaldo",
    "discover_score": 0.197649481442606,
    "score_1h": 2.913793103448276,
    "score_4h": 0.07352941176470588,
    "score_7d": 0.4136904761904762,
    "extracted_entities": "Bagnoli - Osvaldo",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "paolo fox oroscopo 12 maggio 2025",
    "discover_score": 0.1838053850344211,
    "score_1h": 0.0,
    "score_4h": 0.19747899159663865,
    "score_7d": 0.2648809523809524,
    "extracted_entities": "Paolo Fox - Oroscopo - 12 maggio 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "geolier concerto",
    "discover_score": 0.18310854787066672,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.04201680672268908,
    "score_7d": 0.31845238095238093,
    "extracted_entities": "Geolier - Concerto - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "brandon taylor",
    "discover_score": 0.1820520749509146,
    "score_1h": 0.22413793103448276,
    "score_4h": 0.02100840336134454,
    "score_7d": 0.30952380952380953,
    "extracted_entities": "Brandon Taylor - Scrittore - Letteratura - Romanzi",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "brigitte bardot",
    "discover_score": 0.1800682267779288,
    "score_1h": 3.586206896551724,
    "score_4h": 1.027310924369748,
    "score_7d": 0.0744047619047619,
    "extracted_entities": "Brigitte Bardot - Attrice - Modella - Attivista - Cinema Francese",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "miguel gutiérrez",
    "discover_score": 0.17796573528834164,
    "score_1h": 0.0,
    "score_4h": 0.1596638655462185,
    "score_7d": 0.2857142857142857,
    "extracted_entities": "Miguel Gutiérrez",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "jaume munar",
    "discover_score": 0.15582584892756074,
    "score_1h": 0.0,
    "score_4h": 0.09452023487219155,
    "score_7d": 0.16666666666666666,
    "extracted_entities": "Jaume Munar - Tennis - ATP Tour",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "fali candé",
    "discover_score": 0.14999414826149637,
    "score_1h": 0.9913793103448276,
    "score_4h": 0.31512605042016806,
    "score_7d": 0.10416666666666666,
    "extracted_entities": "Fali Candé - Calcio - Giocatore - Guinea-Bissau",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "alba rohrwacher",
    "discover_score": 0.14135708526927837,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.6554621848739496,
    "score_7d": 0.0,
    "extracted_entities": "Alba Rohrwacher - Attrice - Cinema Italiano",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "tory lanez",
    "discover_score": 0.14122875683712413,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.03571428571428571,
    "score_7d": 0.17559523809523808,
    "extracted_entities": "Tory Lanez - Musica - Rap - Artista - Controversie",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "mia martini tarab",
    "discover_score": 0.13671017316532338,
    "score_1h": 0.0,
    "score_4h": 0.5111986217080975,
    "score_7d": 0.04464285714285714,
    "extracted_entities": "Mia Martini - Tarab",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "carlos alcaraz",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "berna",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "squalo malta",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "peyton stearns",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "insigne",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "gandhi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "rai 2",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "praga",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "gerry scotti",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "alex de minaur",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "de jong tennis ranking",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "biglietti parma napoli",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "napoli oggi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "franco di mare",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "rai2",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "cristina ferrara",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "bobo vieri",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "paola caruso verissimo",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "berrettini dove vederlo",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "parigi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "giro d'italia oggi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "emma raducanu",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "supertennis",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "pacers - cavaliers",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "hugo dellien",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "report rai 3",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "conte",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "panatta",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "pkk",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "brignano",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "monica vitti",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "supertennis tv",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "marco mengoni",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "banco bpm unicredit",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "jesper de jong ranking",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "nicea",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "amber heard",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "djere",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "nuggets - thunder",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "luca argentero",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "giornata internazionale dell infermiere",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "cristina uomini e donne",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "istvan kovacs",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "dzeko",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "prossima partita napoli",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "tommy paul",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "osaka",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "tomáš macháč",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "allerta grandine",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "jakub menšík",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "legnago",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "borse oggi",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "funeral director",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "fábián marozsán",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "rai due",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "macron",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "wwe sabu",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "lobotka",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "hubert hurkacz",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "patrick vieira",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "satispay",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "sebastian ofner",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "szoboszlai",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "florentino luis",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "tuttonapoli",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "catania pescara risultato",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "chivu",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "marcos giron",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "sudakov",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "serie c playoff",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "universitario - alianza atlético",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "cristina marino",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "enrico brignano moglie",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "jodie foster",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "robert de niro",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "napoli cagliari",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "conspiracy",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "cerignola",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "giorgia rossi",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "russell crowe",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "solar companies",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "villa pamphili",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "romelu lukaku",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "johan vásquez",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "genova",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "genoa cricket and football club",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "eddie guerrero",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "napoli ieri",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "mara carfagna",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "leonardo",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "pinamonti",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "cesc fabregas",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "pier luigi bersani",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "susan sarandon",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "leonardo azioni",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "real betis vs osasuna",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "marozsan",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "report inter",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "venturino genoa",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "jokic",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "che sta facendo il napoli",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "staten island",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "lazio inter",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "frecce tricolori oggi",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "maneskin",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "il napolista",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "betis osasuna",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "spinazzola",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "claudio santamaria",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "radio kiss kiss napoli",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "de niro",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "classifica serie a calcio",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "daniele doveri",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "anguissa",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "amburgo",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "energy vault",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "mauro gonnelli",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "iliad",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "lorenzo venturino",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "rimini calcio",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "sabrina carpenter",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "partita catania oggi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "hans hateboer",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "david neres",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "playoff basket serie a",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "lugano",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "di canio",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "klopp",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "djere alcaraz",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "fazio",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "millionday",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "calendario parma",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "luca zingaretti",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "gerry scotti",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "francesca barra",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "ron howard",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "statistiche serie a",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "de zerbi",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "classifica a",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "roberto inglese",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "monopoli calcio",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "marco travaglio",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "neres",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "travaglio",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "la provincia di como",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "alex caruso",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "macerata",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "napoli bologna",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-12 19:04:00",
  "trends_count": 199,
  "top_score": 11.627116494461395,
  "runtime_minutes": 5.7605151255925495,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oh, cercatori della verità digitale, oggi il vento dei trend ci sussurra melodie di musica, la competizione nelle arene dello sport e le intricate trame della politica. Tra le note del concerto europeo dell'Eurovision (#1) e la vivace danza delle piattaforme streaming come Twitch (#2), le opportunità per contenuti vitale sono impellenti. Con un interesse sempreverde e una copertura di saturazione ignota, l'Eurovision sboccia come un mercato fecondo per Google Discover, grazie al suo alto potenziale e alla richiesta costante.\n\nNelle arene del tennis, i nomi di Jannik Sinner (#4) e Matteo Berrettini (#6) risuonano, richiedendo cautela. Sebbene questi campioni attirino occhi e orecchie in modo costante, il rischio di saturazione elevata nei media sportivi emerge come una breccia nella loro armatura trendistica.\n\nInfine, la politica si agita sotto la superficie con Emmanuel Macron (#15) e Carlo Calenda (#35), temi ricchi di interesse intellettuale ma spesso soffocati da eccessiva competizione e un DScore modesto. Coloro che coltivano contenuti devono procedere con saggezza, cercando piattaforme meno battute dove piantare i semi della narrazione. Nell'equilibrio sta la chiave: seguite il flusso ma evitate il banale."
};
