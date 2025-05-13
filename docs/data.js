const trendData = [
  {
    "rank": 50,
    "entity": "samsung",
    "discover_score": 11.60232060758135,
    "score_1h": 71.42241379310344,
    "score_4h": 32.46361766463908,
    "score_7d": 24.372781065088756,
    "extracted_entities": "Samsung - Tecnologia - Smartphone - Elettronica di consumo",
    "saturation_score": 1610.0
  },
  {
    "rank": 18,
    "entity": "bollo auto",
    "discover_score": 10.541531616403198,
    "score_1h": 47.23275862068965,
    "score_4h": 13.840336134453782,
    "score_7d": 21.19526627218935,
    "extracted_entities": "Bollo auto - Tassa automobilistica - Veicoli - Pagamento",
    "saturation_score": 10.0
  },
  {
    "rank": 1,
    "entity": "atalanta - roma",
    "discover_score": 7.28566866340919,
    "score_1h": 69.10344827586206,
    "score_4h": 31.036698779930383,
    "score_7d": 2.9142011834319526,
    "extracted_entities": "Atalanta - Roma - Serie A - Calcio - Partita",
    "saturation_score": 1070.0
  },
  {
    "rank": 15,
    "entity": "13 maggio",
    "discover_score": 6.933765920435366,
    "score_1h": 71.12931034482759,
    "score_4h": 47.71577124573679,
    "score_7d": 5.834319526627219,
    "extracted_entities": "13 maggio - Eventi storici - Compleanni - Anniversari",
    "saturation_score": 3630.0
  },
  {
    "rank": 34,
    "entity": "ranieri",
    "discover_score": 5.686765025892942,
    "score_1h": 6.25,
    "score_4h": 7.647058823529412,
    "score_7d": 14.781065088757398,
    "extracted_entities": "Claudio Ranieri - Allenatore di calcio - Premier League - Serie A - Leicester City",
    "saturation_score": 489.0
  },
  {
    "rank": 4,
    "entity": "madonna di fatima",
    "discover_score": 5.272395709424692,
    "score_1h": 39.28448275862069,
    "score_4h": 25.48743011849091,
    "score_7d": 4.316568047337278,
    "extracted_entities": "Madonna - Fatima - Apparizioni - Pellegrinaggio - Santuario",
    "saturation_score": 58.0
  },
  {
    "rank": 22,
    "entity": "warriors - timberwolves",
    "discover_score": 4.412864010307394,
    "score_1h": 2.25,
    "score_4h": 16.363445378151262,
    "score_7d": 8.257396449704142,
    "extracted_entities": "Golden State Warriors - Minnesota Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 19,
    "entity": "berrettini",
    "discover_score": 3.2113416651261906,
    "score_1h": 15.525862068965516,
    "score_4h": 26.319327731092436,
    "score_7d": 2.896449704142012,
    "extracted_entities": "Matteo Berrettini - Tennis - ATP - Wimbledon - Italia",
    "saturation_score": 600.0
  },
  {
    "rank": 2,
    "entity": "venezia - fiorentina",
    "discover_score": 3.1004105268361557,
    "score_1h": 6.198275862068966,
    "score_4h": 15.806722689075631,
    "score_7d": 2.0473372781065087,
    "extracted_entities": "Venezia - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 578.0
  },
  {
    "rank": 6,
    "entity": "ancelotti",
    "discover_score": 2.6942879659200973,
    "score_1h": 5.094243132670952,
    "score_4h": 5.214285714285714,
    "score_7d": 4.958579881656805,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": 1280.0
  },
  {
    "rank": 33,
    "entity": "banca popolare sondrio",
    "discover_score": 2.479857366788531,
    "score_1h": 2.068965517241379,
    "score_4h": 0.7247899159663865,
    "score_7d": 7.90828402366864,
    "extracted_entities": "Banca Popolare di Sondrio - Banca - Sondrio - Finanza",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "jasmine paolini",
    "discover_score": 2.01111575607314,
    "score_1h": 0.3017241379310345,
    "score_4h": 0.9453781512605042,
    "score_7d": 6.295857988165681,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 194.0
  },
  {
    "rank": 40,
    "entity": "sabalenka",
    "discover_score": 1.7840931578051824,
    "score_1h": 0.9482758620689655,
    "score_4h": 2.0655391863858514,
    "score_7d": 5.615384615384615,
    "extracted_entities": "Aryna Sabalenka - Tennis - Classifiche WTA - Tornei Grand Slam - Bielorussia",
    "saturation_score": 114.0
  },
  {
    "rank": 27,
    "entity": "parma napoli biglietti",
    "discover_score": 1.5410820595303303,
    "score_1h": 10.71551724137931,
    "score_4h": 6.78781512605042,
    "score_7d": 3.239644970414201,
    "extracted_entities": "Parma - Napoli - Biglietti - Partita di calcio - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "gerri fiction",
    "discover_score": 1.3455758752760143,
    "score_1h": 1.565897136177674,
    "score_4h": 0.15126050420168066,
    "score_7d": 4.733727810650888,
    "extracted_entities": "Gerri - Fiction - Serie TV",
    "saturation_score": 4.0
  },
  {
    "rank": 46,
    "entity": "mario adinolfi",
    "discover_score": 1.310621522303039,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4894957983193277,
    "score_7d": 4.585798816568047,
    "extracted_entities": "Mario Adinolfi - Politica Italiana - Giornalismo",
    "saturation_score": 29.0
  },
  {
    "rank": 35,
    "entity": "ios 18.5",
    "discover_score": 1.3031804628323111,
    "score_1h": 0.0,
    "score_4h": 1.1911764705882353,
    "score_7d": 4.165680473372781,
    "extracted_entities": "iOS 18.5 - Apple - Sistema operativo",
    "saturation_score": 84.0
  },
  {
    "rank": 28,
    "entity": "lorenzo tano",
    "discover_score": 1.1472025445417064,
    "score_1h": 1.146551724137931,
    "score_4h": 0.3004201680672269,
    "score_7d": 3.7455621301775146,
    "extracted_entities": "Lorenzo Tano",
    "saturation_score": 88.0
  },
  {
    "rank": 11,
    "entity": "tatum",
    "discover_score": 1.1444589805810528,
    "score_1h": 5.456896551724138,
    "score_4h": 2.53781512605042,
    "score_7d": 2.559171597633136,
    "extracted_entities": "Jayson Tatum - NBA - Boston Celtics - Basket",
    "saturation_score": 6.0
  },
  {
    "rank": 3,
    "entity": "francesca pascale",
    "discover_score": 1.1066760626401442,
    "score_1h": 2.0172413793103448,
    "score_4h": 0.9453781512605042,
    "score_7d": 2.1331360946745566,
    "extracted_entities": "Francesca Pascale - Persone - Celebrità",
    "saturation_score": 46.0
  },
  {
    "rank": 8,
    "entity": "sinner de jong",
    "discover_score": 1.0848725336594165,
    "score_1h": 2.586206896551724,
    "score_4h": 0.4096638655462185,
    "score_7d": 2.772189349112426,
    "extracted_entities": "Jannik Sinner - Tim van Rijthoven de Jong - Tennis - Partita - Torneo",
    "saturation_score": 272.0
  },
  {
    "rank": 38,
    "entity": "antonella mosetti",
    "discover_score": 1.0042674274223158,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.5266272189349115,
    "extracted_entities": "Antonella Mosetti - Personaggio pubblico - Televisione - Gossip",
    "saturation_score": 179.0
  },
  {
    "rank": 32,
    "entity": "chanel totti",
    "discover_score": 0.9096969303734371,
    "score_1h": 1.543103448275862,
    "score_4h": 0.4424070883583559,
    "score_7d": 2.9792899408284024,
    "extracted_entities": "Chanel - Francesco Totti - Famiglia Totti",
    "saturation_score": 62.0
  },
  {
    "rank": 16,
    "entity": "tory lanez",
    "discover_score": 0.8932648729277234,
    "score_1h": 1.4655172413793103,
    "score_4h": 0.5777310924369747,
    "score_7d": 2.544378698224852,
    "extracted_entities": "Tory Lanez - Musica - Rap - Artista - Controversie",
    "saturation_score": 6.0
  },
  {
    "rank": 7,
    "entity": "eurovision song contest basilea",
    "discover_score": 0.861155670224646,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.6785714285714284,
    "score_7d": 1.7781065088757395,
    "extracted_entities": "Eurovision Song Contest - Basilea - Musica - Competizione - Europa",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "presidenti commissione maturità 2025",
    "discover_score": 0.8178371284933766,
    "score_1h": 7.163793103448276,
    "score_4h": 1.5315126050420167,
    "score_7d": 1.8047337278106508,
    "extracted_entities": "Presidenti - Commissione - Maturità - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 45,
    "entity": "spadino isola dei famosi",
    "discover_score": 0.7598328359651806,
    "score_1h": 1.4224137931034484,
    "score_4h": 0.0,
    "score_7d": 2.7189349112426036,
    "extracted_entities": "Spadino - Isola dei Famosi - Reality Show",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "orari 37 giornata serie a 2025",
    "discover_score": 0.7300118640777421,
    "score_1h": 0.0,
    "score_4h": 0.8571428571428572,
    "score_7d": 2.275147928994083,
    "extracted_entities": "Orari - 37ª giornata - Serie A - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "sondaggio politico oggi la7",
    "discover_score": 0.6961663753055398,
    "score_1h": 1.5517241379310345,
    "score_4h": 1.9789915966386555,
    "score_7d": 1.1390532544378698,
    "extracted_entities": "Sondaggio politico - Oggi - La7",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "carly isola dei famosi",
    "discover_score": 0.6841842564617756,
    "score_1h": 0.0,
    "score_4h": 0.19327731092436973,
    "score_7d": 2.2337278106508878,
    "extracted_entities": "Carly - Isola dei Famosi - Reality Show",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "naddel",
    "discover_score": 0.6479686430750979,
    "score_1h": 0.0,
    "score_4h": 0.34663865546218486,
    "score_7d": 2.224852071005917,
    "extracted_entities": "Naddel - Influencer - Social Media",
    "saturation_score": 2.0
  },
  {
    "rank": 25,
    "entity": "milo infante",
    "discover_score": 0.5867548027133833,
    "score_1h": 0.0,
    "score_4h": 0.3067226890756303,
    "score_7d": 1.7751479289940828,
    "extracted_entities": "Milo Infante - Giornalista - Televisione - Programmi TV",
    "saturation_score": 3.0
  },
  {
    "rank": 13,
    "entity": "cooper flagg",
    "discover_score": 0.5760555055388255,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.23706972328680426,
    "score_7d": 1.5502958579881658,
    "extracted_entities": "Cooper Flagg - Basket - Giocatore di basket - Reclutamento NCAA",
    "saturation_score": 3.0
  },
  {
    "rank": 48,
    "entity": "kostyuk",
    "discover_score": 0.44456801762229337,
    "score_1h": 1.456896551724138,
    "score_4h": 0.6722689075630253,
    "score_7d": 1.3136094674556213,
    "extracted_entities": "Marta Kostyuk - Tennis - Ucraina",
    "saturation_score": 9.0
  },
  {
    "rank": 10,
    "entity": "mitsotakis meloni",
    "discover_score": 0.4096945057846634,
    "score_1h": 0.7413793103448276,
    "score_4h": 1.6449579831932772,
    "score_7d": 0.5857988165680473,
    "extracted_entities": "Mitsotakis - Meloni - Politica - Grecia - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "dino giarrusso",
    "discover_score": 0.40827704335137566,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.22058823529411764,
    "score_7d": 1.2692307692307692,
    "extracted_entities": "Dino Giarrusso",
    "saturation_score": 29.0
  },
  {
    "rank": 17,
    "entity": "buon martedi 13 maggio",
    "discover_score": 0.37159743492892844,
    "score_1h": 0.0,
    "score_4h": 0.7647058823529411,
    "score_7d": 0.7810650887573964,
    "extracted_entities": "Martedì - 13 maggio - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "federico bondioli",
    "discover_score": 0.34431890317334746,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5756302521008403,
    "score_7d": 0.893491124260355,
    "extracted_entities": "Federico Bondioli",
    "saturation_score": 4.0
  },
  {
    "rank": 12,
    "entity": "ministero dell'istruzione",
    "discover_score": 0.294784564523365,
    "score_1h": 3.043103448275862,
    "score_4h": 1.565126050420168,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Ministero dell'Istruzione - Educazione - Governo - Scuola",
    "saturation_score": 41.0
  },
  {
    "rank": 39,
    "entity": "yuval raphael",
    "discover_score": 0.2841349180475362,
    "score_1h": 0.0,
    "score_4h": 0.1638655462184874,
    "score_7d": 0.7455621301775148,
    "extracted_entities": "Yuval Raphael",
    "saturation_score": 46.0
  },
  {
    "rank": 47,
    "entity": "assegno unico pagamenti",
    "discover_score": 0.2838902498804945,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.36401673640167365,
    "score_7d": 0.7189349112426036,
    "extracted_entities": "Assegno Unico - Pagamenti - INPS - Famiglie - Sostegno Economico",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "calvo juventus",
    "discover_score": 0.25513720835203596,
    "score_1h": 0.0,
    "score_4h": 0.7563025210084033,
    "score_7d": 0.47928994082840237,
    "extracted_entities": "Calvo - Juventus",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "samuel french",
    "discover_score": 0.24529275355260738,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.49789915966386555,
    "score_7d": 0.45857988165680474,
    "extracted_entities": "Samuel French - Editoria teatrale - Drammaturgia - Spettacoli teatrali - Diritti d'autore",
    "saturation_score": 9.0
  },
  {
    "rank": 23,
    "entity": "al-okhdood club - al-nassr",
    "discover_score": 0.23496508780754008,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.42845715692134595,
    "score_7d": 0.40236686390532544,
    "extracted_entities": "Al-Okhdood Club - Al-Nassr - Calcio - Arabia Saudita - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "bandiere blu 2025",
    "discover_score": 0.20643960035053194,
    "score_1h": 3.706896551724138,
    "score_4h": 0.9495798319327731,
    "score_7d": 0.15976331360946747,
    "extracted_entities": "Bandiere Blu - 2025 - Spiagge - Qualità ambientale - Turismo",
    "saturation_score": 41.0
  },
  {
    "rank": 37,
    "entity": "franca leosini",
    "discover_score": 0.19999452519144498,
    "score_1h": 1.2758620689655173,
    "score_4h": 0.5399159663865546,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Franca Leosini - Giornalista - Televisione - Cronaca Nera - Storie Maledette",
    "saturation_score": 6.0
  },
  {
    "rank": 20,
    "entity": "gerard depardieu",
    "discover_score": 0.1895608784049837,
    "score_1h": 5.112068965517241,
    "score_4h": 0.5083682008368201,
    "score_7d": 0.19230769230769232,
    "extracted_entities": "Gerard Depardieu - Attore - Cinema francese - Filmografia - Controversie",
    "saturation_score": 38.0
  },
  {
    "rank": 14,
    "entity": "samsung galaxy s25 edge",
    "discover_score": 0.16298761985513494,
    "score_1h": 0.0,
    "score_4h": 0.2899159663865546,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Samsung - Galaxy S25 - Edge",
    "saturation_score": 30.0
  },
  {
    "rank": 24,
    "entity": "dzeko",
    "discover_score": 0.13655327943645446,
    "score_1h": 0.0,
    "score_4h": 0.13865546218487396,
    "score_7d": 0.08579881656804733,
    "extracted_entities": "Edin Džeko - Calcio - Inter - Bosnia ed Erzegovina - Serie A",
    "saturation_score": 39.0
  },
  {
    "rank": 26,
    "entity": "sergio cragnotti",
    "discover_score": 0.12308473828815557,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Sergio Cragnotti - Imprenditore - Lazio - Calcio - Finanza",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "alissa jung",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "burkina faso",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "klaus davi",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "elio germano ministro giuli",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "river plate - barracas central",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "atalanta bergamasca calcio",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "geolier concerto",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "antonio bardellino",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "gerri",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "aalesund - bodø/glimt",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "coppa italia",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "wojciech szczęsny",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "angelo famao",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "meteo 3b",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "chiara francini",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "cantù - fortitudo bologna",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "matteo renzi",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "grande squalo bianco",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "nunzio isola dei famosi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "honduras",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "peyton stearns",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "jorge martin",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "camila giorgi isola dei famosi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "meteo milano oggi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "mirko frezza",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "classifica di serie a",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "etna",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "formia",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "alex de minaur",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "trani",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "gandhi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "elezioni albania",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "giulio beranek",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "nicea",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "garlini",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "valentina romani",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "paolo fox oroscopo 12 maggio 2025",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "al akhdoud vs al-nassr",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "twitch",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "miguel gutiérrez",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "oroscopo oggi ariete paolo fox",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "pedro pascal",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "bayesian",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "amber heard",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "ai week",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "boban",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "jaume munar",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "asroma",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "rai 2",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "squalificati serie a",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "satispay",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "supertennis",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "mirra andreeva",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "paola turci",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "franco di mare",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "meteo trento",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "ryan gosling",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "hugo dellien",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "meteo italia oggi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "cristina uomini e donne",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "conduttrice isola dei famosi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "mario isola dei famosi",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "brandon taylor",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "arcangelo uomini e donne età",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "omar fantini",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "giulia vecchio",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "zagabria",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "giro d'italia oggi",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "thunderstorm warning",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "de jong tennis ranking",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "clara tauson",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "rai2",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "keanu reeves",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "roma fc",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "asia nuccetelli",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "emma raducanu",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "hockey",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "lorenzo isola dei famosi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "andreeva",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bianca andreescu",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "bobo vieri",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "tommy paul",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "charlize theron",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "alba rohrwacher",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "allerta grandine",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "as roma news",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "juve lazio andata",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "panatta",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "zheng",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "patrizia rossetti",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "tauson",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "europa",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "warriors",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "giornata internazionale dell infermiere",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "roma oggi",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "dinamo bucurești - rapid bucureşti",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "schifani",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "del mastro",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "budapest",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "highlights serie a",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "osaka",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "susan sarandon",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "buzios",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "fali candé",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "giovanni esposito",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "lazza",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "berna",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "gennarino affari tuoi",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "lo stato delle cose",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "berlino",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "jesper de jong ranking",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "jakub menšík",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "ciccio caputo",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "brigitte bardot",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "mia martini tarab",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "barbara bartolotti",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "gerry scotti",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "istvan kovacs",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "enoteca maria",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "fábián marozsán",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "risultati per serie a",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "carlo calenda",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "florentino luis",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "tirzepatide",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "facile ristrutturare",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "praga",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "saelemaekers",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "mateo retegui",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "soule",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "il gladiatore 2",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "odilon kossounou",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "hubert hurkacz",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "andrea riccardi",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "percassi",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "inter zalewski",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "matt damon",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "monica vitti",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "wta ranking live",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "de minaur",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "granada eibar",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "bagnoli osvaldo",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "berrettini dove vederlo",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "roma madrid",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "ivg",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "atene",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "vocegiallorossa",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "sebastian ofner",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "gianluca busio",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "marcos giron",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "legnago",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "sebastian korda",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "newlat",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "parigi",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "cerignola",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "final destination",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "juventus lazio andata",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "al pacino",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "ata",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "villa pamphili",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "devyne rensch",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "fiorello",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "mara carfagna",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "roma vs",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "real madrid xabi alonso",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "giampaolo",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "bonaccini",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "frecce tricolori oggi",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "maneskin",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "lino celesia",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "klopp",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-13 09:26:51",
  "trends_count": 226,
  "top_score": 11.60232060758135,
  "runtime_minutes": 12.375346374511718,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi, le profezie ci guidano attraverso le nicchie effervescenti del presente. Tra i temi principali che dominano i nostri cieli digitali, scopriamo un forte interesse per il Calcio e la Tecnologia. Partite come Atalanta-Roma (#3) e Warriors-Timberwolves (#7) danno vita a tendenze, mentre la continua evoluzione tecnologica è rappresentata dall'inarrestabile marcia di Samsung (#1) e iOS 18.5 (#17). La 'Madonna di Fatima' (#6), con un punteggio di saturazione basso, offre un calderone di speranza per contenuti spirituali e culturali.\n\nTra le migliori opportunità per Google Discover, brilla il 'Bollo Auto' (#2), sostenuto da un DScore solido e una saturazione facilmente dominabile, perfetto per chi cerca di esplorare le dinamiche tassative dei veicoli. \n\nCautela è necessaria nella gestione dei trend sportivi saturi come 'Atalanta-Roma' e quelli di natura temporanea, rischiando di svanire come fugaci comete, quali i nomi celebri come 'Ranieri' (#5). \n\nCosì, nella danza delle tendenze, si ricorda a chi crea contenuti la virtù della tempestività e della scelta ponderata. Siate artigiani visionari, plasmando il vento delle tendenze senza lasciarvi travolgere da esso."
};
