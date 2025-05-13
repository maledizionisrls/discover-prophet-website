const trendData = [
  {
    "rank": 36,
    "entity": "bollo auto",
    "discover_score": 10.479055107457723,
    "score_1h": 29.29310344827586,
    "score_4h": 10.693277310924369,
    "score_7d": 25.562130177514796,
    "extracted_entities": "Bollo auto - Tassa automobilistica - Veicoli - Pagamento",
    "saturation_score": 35.0
  },
  {
    "rank": 1,
    "entity": "atalanta - roma",
    "discover_score": 8.329014000767431,
    "score_1h": 69.08620689655173,
    "score_4h": 36.5609243697479,
    "score_7d": 2.970414201183432,
    "extracted_entities": "Atalanta - Roma - Serie A - Calcio - Partita",
    "saturation_score": 1180.0
  },
  {
    "rank": 18,
    "entity": "13 maggio",
    "discover_score": 6.108141775727084,
    "score_1h": 42.96551724137931,
    "score_4h": 41.69957983193277,
    "score_7d": 5.878698224852071,
    "extracted_entities": "13 maggio - Eventi storici - Compleanni - Anniversari",
    "saturation_score": 3100.0
  },
  {
    "rank": 6,
    "entity": "madonna di fatima",
    "discover_score": 5.203406558466903,
    "score_1h": 44.577586206896555,
    "score_4h": 39.90126050420168,
    "score_7d": 2.5147928994082838,
    "extracted_entities": "Madonna - Fatima - Apparizioni - Pellegrinaggio - Santuario",
    "saturation_score": 82.0
  },
  {
    "rank": 43,
    "entity": "ranieri",
    "discover_score": 3.735523280115303,
    "score_1h": 4.586206896551724,
    "score_4h": 5.9411764705882355,
    "score_7d": 10.576923076923077,
    "extracted_entities": "Claudio Ranieri - Allenatore di calcio - Serie A - Premier League - Leicester City",
    "saturation_score": 457.0
  },
  {
    "rank": 20,
    "entity": "berrettini",
    "discover_score": 3.5219861822530873,
    "score_1h": 24.224137931034484,
    "score_4h": 19.804621848739494,
    "score_7d": 5.094674556213018,
    "extracted_entities": "Matteo Berrettini - Tennis - ATP - Grand Slam - Classifica ATP",
    "saturation_score": 593.0
  },
  {
    "rank": 3,
    "entity": "carlos alcaraz",
    "discover_score": 3.4298776231208468,
    "score_1h": 58.70908825248392,
    "score_4h": 14.978991596638654,
    "score_7d": 3.150887573964497,
    "extracted_entities": "Carlos Alcaraz - Tennis - Giocatore - Sport",
    "saturation_score": 6.0
  },
  {
    "rank": 28,
    "entity": "warriors - timberwolves",
    "discover_score": 3.3239092274481026,
    "score_1h": 1.6120689655172413,
    "score_4h": 6.86344537815126,
    "score_7d": 8.375739644970414,
    "extracted_entities": "Warriors - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "ancelotti",
    "discover_score": 3.105449050408865,
    "score_1h": 4.482758620689655,
    "score_4h": 4.76890756302521,
    "score_7d": 8.396449704142013,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": 1280.0
  },
  {
    "rank": 22,
    "entity": "lega serie a",
    "discover_score": 2.6767442271664006,
    "score_1h": 1.4137931034482758,
    "score_4h": 1.907563025210084,
    "score_7d": 7.571005917159764,
    "extracted_entities": "Lega Serie A - Calcio - Campionato - Italia - Squadre",
    "saturation_score": 42.0
  },
  {
    "rank": 37,
    "entity": "gran bretagna",
    "discover_score": 2.225509644148653,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.10294117647058823,
    "score_7d": 7.464497041420119,
    "extracted_entities": "Gran Bretagna - Regno Unito - Inghilterra - Scozia - Galles",
    "saturation_score": 74.0
  },
  {
    "rank": 2,
    "entity": "venezia - fiorentina",
    "discover_score": 2.096780385696393,
    "score_1h": 4.413793103448276,
    "score_4h": 8.302521008403362,
    "score_7d": 1.997041420118343,
    "extracted_entities": "Venezia - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 533.0
  },
  {
    "rank": 25,
    "entity": "parma napoli biglietti",
    "discover_score": 1.9564521318871448,
    "score_1h": 6.5344827586206895,
    "score_4h": 7.47689075630252,
    "score_7d": 4.233727810650888,
    "extracted_entities": "Parma - Napoli - Biglietti - Partita di calcio - Serie A",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "jasmine paolini",
    "discover_score": 1.776666410865152,
    "score_1h": 0.5086206896551724,
    "score_4h": 1.361344537815126,
    "score_7d": 5.597633136094675,
    "extracted_entities": "Jasmine Paolini - Tennis - Italia",
    "saturation_score": 162.0
  },
  {
    "rank": 50,
    "entity": "mario adinolfi",
    "discover_score": 1.3147594700114211,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.9915966386554622,
    "score_7d": 4.520710059171598,
    "extracted_entities": "Mario Adinolfi",
    "saturation_score": 30.0
  },
  {
    "rank": 11,
    "entity": "corentin moutet",
    "discover_score": 1.2464470059408448,
    "score_1h": 10.043103448275861,
    "score_4h": 4.21218487394958,
    "score_7d": 2.4112426035502956,
    "extracted_entities": "Corentin Moutet - Tennis - Giocatore - Francia",
    "saturation_score": 5.0
  },
  {
    "rank": 14,
    "entity": "tatum",
    "discover_score": 1.2319080365884973,
    "score_1h": 8.741379310344827,
    "score_4h": 3.189075630252101,
    "score_7d": 2.784023668639053,
    "extracted_entities": "Jayson Tatum - NBA - Boston Celtics - Basket",
    "saturation_score": 6.0
  },
  {
    "rank": 15,
    "entity": "jack draper",
    "discover_score": 1.1238648641305802,
    "score_1h": 50.689655172413794,
    "score_4h": 11.680672268907564,
    "score_7d": 0.6331360946745562,
    "extracted_entities": "Jack Draper - Tennis - Giocatore",
    "saturation_score": 7.0
  },
  {
    "rank": 5,
    "entity": "presidenti commissione maturità 2025",
    "discover_score": 1.059524263827422,
    "score_1h": 18.344827586206897,
    "score_4h": 4.90546218487395,
    "score_7d": 1.3431952662721893,
    "extracted_entities": "Presidenti - Commissione - Maturità - 2025",
    "saturation_score": 2.0
  },
  {
    "rank": 17,
    "entity": "sinner cerundolo",
    "discover_score": 1.037111571595142,
    "score_1h": 0.008620689655172414,
    "score_4h": 2.4033613445378155,
    "score_7d": 2.529585798816568,
    "extracted_entities": "Jannik Sinner - Francisco Cerundolo - Tennis - Partita - Torneo",
    "saturation_score": 198.0
  },
  {
    "rank": 41,
    "entity": "antonella mosetti",
    "discover_score": 1.0104404815789376,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.4096638655462185,
    "score_7d": 3.4763313609467454,
    "extracted_entities": "Antonella Mosetti - Personaggio pubblico - Televisione - Gossip - Italia",
    "saturation_score": 83.0
  },
  {
    "rank": 4,
    "entity": "francesca pascale",
    "discover_score": 0.9453959910993371,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.16596638655462184,
    "score_7d": 2.121301775147929,
    "extracted_entities": "Francesca Pascale - Persone",
    "saturation_score": 34.0
  },
  {
    "rank": 35,
    "entity": "lorenzo tano",
    "discover_score": 0.919614412064628,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3067226890756303,
    "score_7d": 3.0976331360946747,
    "extracted_entities": "Lorenzo Tano - Persone - Figlio di Rocco Siffredi - Fotografia",
    "saturation_score": 58.0
  },
  {
    "rank": 46,
    "entity": "gerri fiction",
    "discover_score": 0.9168078506466731,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.6554621848739496,
    "score_7d": 3.1301775147928996,
    "extracted_entities": "Gerri - Fiction - Serie TV",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "horacio pagani",
    "discover_score": 0.8760019663018633,
    "score_1h": 1.3448275862068966,
    "score_4h": 0.9180672268907563,
    "score_7d": 2.825443786982248,
    "extracted_entities": "Horacio Pagani - Automobili - Pagani Automobili - Supercar - Ingegneria",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "carly isola dei famosi",
    "discover_score": 0.7839607922813255,
    "score_1h": 0.0,
    "score_4h": 0.34243697478991597,
    "score_7d": 2.6390532544378695,
    "extracted_entities": "Carly - Isola dei Famosi - Reality Show",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "ios 18.5",
    "discover_score": 0.6996889290468725,
    "score_1h": 0.0,
    "score_4h": 0.45378151260504207,
    "score_7d": 2.3165680473372783,
    "extracted_entities": "iOS 18.5 - Apple - Sistema operativo - Aggiornamento software",
    "saturation_score": 83.0
  },
  {
    "rank": 9,
    "entity": "terremoto napoli",
    "discover_score": 0.6434407695600869,
    "score_1h": 14.862068965517242,
    "score_4h": 4.563025210084033,
    "score_7d": 0.591715976331361,
    "extracted_entities": "Terremoto - Napoli - Evento sismico",
    "saturation_score": 3.0
  },
  {
    "rank": 8,
    "entity": "gerard depardieu",
    "discover_score": 0.5287939569187875,
    "score_1h": 16.45689655172414,
    "score_4h": 2.966386554621849,
    "score_7d": 0.5887573964497042,
    "extracted_entities": "Gerard Depardieu - Attore - Cinema francese - Filmografia - Controversie",
    "saturation_score": 47.0
  },
  {
    "rank": 42,
    "entity": "kostyuk",
    "discover_score": 0.527799540781156,
    "score_1h": 1.9051724137931034,
    "score_4h": 0.5,
    "score_7d": 1.6597633136094676,
    "extracted_entities": "Marta Kostyuk - Tennis - Ucraina",
    "saturation_score": 8.0
  },
  {
    "rank": 16,
    "entity": "cooper flagg",
    "discover_score": 0.5258071043363345,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.46218487394957986,
    "score_7d": 1.3846153846153846,
    "extracted_entities": "Cooper Flagg - Basket - Giocatore - Sport - Talento",
    "saturation_score": 5.0
  },
  {
    "rank": 26,
    "entity": "depardieu",
    "discover_score": 0.510934841124773,
    "score_1h": 31.586206896551726,
    "score_4h": 5.256302521008404,
    "score_7d": 0.3195266272189349,
    "extracted_entities": "Gérard Depardieu - Attore - Francia - Cinema - Controversie",
    "saturation_score": 244.0
  },
  {
    "rank": 31,
    "entity": "al-okhdood club - al-nassr",
    "discover_score": 0.40382988509235984,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.2337278106508875,
    "extracted_entities": "Al-Okhdood Club - Al-Nassr - Calcio - Arabia Saudita - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "sondaggio politico oggi la7",
    "discover_score": 0.31973493529786784,
    "score_1h": 0.0,
    "score_4h": 1.1785714285714286,
    "score_7d": 0.5384615384615384,
    "extracted_entities": "Sondaggio politico - Oggi - La7",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "samsung galaxy s25 edge",
    "discover_score": 0.3114896878076184,
    "score_1h": 0.0,
    "score_4h": 0.4096638655462185,
    "score_7d": 0.6124260355029586,
    "extracted_entities": "Samsung - Galaxy S25 - Edge",
    "saturation_score": 42.0
  },
  {
    "rank": 49,
    "entity": "spadino isola dei famosi",
    "discover_score": 0.30462716647108556,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3256302521008403,
    "score_7d": 0.8254437869822485,
    "extracted_entities": "Spadino - Isola dei Famosi - Reality Show",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "calvo juventus",
    "discover_score": 0.2986875968288999,
    "score_1h": 0.0,
    "score_4h": 0.6785714285714286,
    "score_7d": 0.7011834319526628,
    "extracted_entities": "Calvo - Juventus",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "eurovision song contest basilea",
    "discover_score": 0.29833176267182293,
    "score_1h": 1.9051724137931036,
    "score_4h": 0.9390756302521008,
    "score_7d": 0.34615384615384615,
    "extracted_entities": "Eurovision Song Contest - Basilea - Musica - Competizione - Europa",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "dino giarrusso",
    "discover_score": 0.296130858270062,
    "score_1h": 0.0,
    "score_4h": 0.33613445378151263,
    "score_7d": 0.7721893491124261,
    "extracted_entities": "Dino Giarrusso",
    "saturation_score": 50.0
  },
  {
    "rank": 30,
    "entity": "dzeko",
    "discover_score": 0.26227414438973673,
    "score_1h": 0.0,
    "score_4h": 0.707983193277311,
    "score_7d": 0.47337278106508873,
    "extracted_entities": "Edin Džeko - Calciatore - Inter - Serie A - Bosnia ed Erzegovina",
    "saturation_score": 79.0
  },
  {
    "rank": 34,
    "entity": "buon martedi 13 maggio",
    "discover_score": 0.24277264726052444,
    "score_1h": 0.0,
    "score_4h": 1.050420168067227,
    "score_7d": 0.3254437869822485,
    "extracted_entities": "Martedì - 13 maggio - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "sergio cragnotti",
    "discover_score": 0.23937819076552602,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.3025210084033613,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Sergio Cragnotti - Imprenditore - Lazio - Calcio - Finanza",
    "saturation_score": 4.0
  },
  {
    "rank": 19,
    "entity": "tory lanez",
    "discover_score": 0.23713735390326737,
    "score_1h": 1.3017241379310345,
    "score_4h": 0.10714285714285715,
    "score_7d": 0.47041420118343197,
    "extracted_entities": "Tory Lanez - Musica - Rap - Artista - Controversie",
    "saturation_score": 6.0
  },
  {
    "rank": 12,
    "entity": "mitsotakis meloni",
    "discover_score": 0.2359555662166724,
    "score_1h": 1.25,
    "score_4h": 1.30672268907563,
    "score_7d": 0.13313609467455623,
    "extracted_entities": "Mitsotakis - Meloni - Politica - Grecia - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "franca leosini",
    "discover_score": 0.23582145303985988,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3214285714285714,
    "score_7d": 0.4526627218934911,
    "extracted_entities": "Franca Leosini - Giornalista - Televisione - Cronaca Nera - Storie Maledette",
    "saturation_score": 3.0
  },
  {
    "rank": 44,
    "entity": "federico bondioli",
    "discover_score": 0.19324728842319622,
    "score_1h": 0.0,
    "score_4h": 0.2710084033613446,
    "score_7d": 0.34023668639053256,
    "extracted_entities": "Federico Bondioli",
    "saturation_score": 4.0
  },
  {
    "rank": 10,
    "entity": "bandiere blu 2025",
    "discover_score": 0.16859750872908016,
    "score_1h": 10.767241379310345,
    "score_4h": 0.5378151260504201,
    "score_7d": 0.0591715976331361,
    "extracted_entities": "Bandiere Blu - 2025 - Spiagge - Qualità ambientale - Turismo",
    "saturation_score": 115.0
  },
  {
    "rank": 47,
    "entity": "yuval raphael",
    "discover_score": 0.14693983625497567,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.39915966386554624,
    "score_7d": 0.11242603550295857,
    "extracted_entities": "Yuval Raphael",
    "saturation_score": 31.0
  },
  {
    "rank": 32,
    "entity": "oriali",
    "discover_score": 0.14187826795648953,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.12721893491124261,
    "extracted_entities": "Oriali - Calcio - Inter - Nazionale Italiana - Allenatore",
    "saturation_score": 10.0
  },
  {
    "rank": 24,
    "entity": "chanel totti",
    "discover_score": 0.13936131599938412,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.1092436974789916,
    "score_7d": 0.10355029585798817,
    "extracted_entities": "Chanel Totti - Francesco Totti - Ilary Blasi",
    "saturation_score": 86.0
  },
  {
    "rank": 51,
    "entity": "banca popolare sondrio",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "sabalenka",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "naddel",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "milo infante",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "assegno unico pagamenti",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "alissa jung",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "elio germano ministro giuli",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "burkina faso",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "samsung",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "antonio bardellino",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "atalanta bergamasca calcio",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "gerri",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "river plate - barracas central",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "aalesund - bodø/glimt",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "geolier concerto",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "samuel french",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "warriors vs timberwolves",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "nba draft lottery",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "angelo famao",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "cantù - fortitudo bologna",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "chiara francini",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "meteo 3b",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "grande squalo bianco",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "nunzio isola dei famosi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "jorge martin",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "honduras",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "matteo renzi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "coppa italia",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "mirko frezza",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "wojciech szczęsny",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "camila giorgi isola dei famosi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "buongiorno 13 maggio 2025",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "etna",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "meteo milano oggi",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "gandhi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "trani",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "giulio beranek",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "garlini",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "valentina romani",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "paolo fox oroscopo 12 maggio 2025",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "twitch",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "al akhdoud vs al-nassr",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "oroscopo oggi ariete paolo fox",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "miguel gutiérrez",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "elezioni albania",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "bayesian",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "nicea",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "amber heard",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "jaume munar",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "boban",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "asroma",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "rai 2",
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
    "entity": "ademola lookman",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "mirra andreeva",
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
    "entity": "paola turci",
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
    "entity": "satispay",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "pedro pascal",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "meteo italia oggi",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "squalificati serie a",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "ultima puntata che dio ci aiuti",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "cristina uomini e donne",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "conduttrice isola dei famosi",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "osaka naomi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "arcangelo uomini e donne età",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "brandon taylor",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "meteo trento",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "mario isola dei famosi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "ai week",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "omar fantini",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "zagabria",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "giulia vecchio",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "giro d'italia oggi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "romanews",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "de jong tennis ranking",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "clara tauson",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "rai2",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "keanu reeves",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "emma raducanu",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "asia nuccetelli",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "thunderstorm warning",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "hockey",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "andreeva",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "bianca andreescu",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "bobo vieri",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "alba rohrwacher",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "charlize theron",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "juve lazio andata",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "retegui",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "panatta",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "zheng",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "tauson",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "europa",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "patrizia rossetti",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "giornata internazionale dell infermiere",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "dinamo bucurești - rapid bucureşti",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "roma oggi",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "schifani",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "osaka",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "highlights serie a",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "budapest",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "del mastro",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "warriors",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "susan sarandon",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "buzios",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "fali candé",
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
    "entity": "berna",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "giovanni esposito",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "lazza",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "berlino",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "jakub menšík",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "lo stato delle cose",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "jesper de jong ranking",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "ciccio caputo",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "brigitte bardot",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "mia martini tarab",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "barbara bartolotti",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "gerry scotti",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "istvan kovacs",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "fábián marozsán",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "enoteca maria",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "simona ventura",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "carlo calenda",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "meteo asti",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "florentino luis",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "tirzepatide",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "praga",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "facile ristrutturare",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "saelemaekers",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "soule",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "mateo retegui",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "il gladiatore 2",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "hubert hurkacz",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "andrea riccardi",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "percassi",
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
    "entity": "nadia uomini e donne",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "monica vitti",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "matt damon",
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
    "entity": "bagnoli osvaldo",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "granada eibar",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "ivg",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "roma madrid",
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
    "entity": "vocegiallorossa",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "sebastian ofner",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "atene",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "gianluca busio",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "marcos giron",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "legnago",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "sebastian korda",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "parigi",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "newlat",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "cerignola",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "dellien",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "final destination",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "al pacino",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "juventus lazio andata",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "villa pamphili",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "devyne rensch",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "ata",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "fiorello",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "roma vs",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "real madrid xabi alonso",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "giampaolo",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "frecce tricolori oggi",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "bonaccini",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "maneskin",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "lino celesia",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "klopp",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-13 10:27:45",
  "trends_count": 228,
  "top_score": 10.479055107457723,
  "runtime_minutes": 8.438410206635792,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle visioni della giornata, tre temi dominano l'orizzonte dei trend italiani: lo sport, con particolare enfasi sul calcio e il tennis, la spiritualità legata alla Madonna di Fatima e gli eventi storici, evidenziati dalla ricorrenza del 13 maggio. La partita \"Atalanta - Roma\" (#2) cattura l'attenzione con un considerevole potenziale Discover e un livello di saturazione non eccessivamente alto, offrendo una perfetta finestra per contenuti freschi e dinamici. Anche il \"terremoto Napoli\" (#28) emerge come un argomento rilevante con basso livello di saturazione e interesse costante, promettendo un'opportunità per racconti di impatto.\n\nSi invita alla cautela con \"13 maggio\" (#3), nonostante l'interesse storico, la saturazione troppo alta potrebbe oscurare nuovi ingressi, facendo svanire rapidamente l'attenzione verso quest’argomento. Simile rischio si trova con \"Gérard Depardieu\" (#32), dove la competizione è intensa e il trend potrebbe disperdersi in una moltitudine di coperture già esistenti.\n\nPer i creatori di contenuti, l'approccio strategico richiede un attento bilanciamento tra la ricerca di argomenti ampiamente discussi e nicchie emergenti. Guardate verso l'inaspettato, là spesso risiedono le opportunità più preziose."
};
