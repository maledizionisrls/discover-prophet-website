const trendData = [
  {
    "rank": 23,
    "entity": "spotify",
    "discover_score": 23.26931391070076,
    "score_1h": 60.922413793103445,
    "score_4h": 31.157563025210084,
    "score_7d": 41.12721893491124,
    "extracted_entities": "Spotify - Streaming musicale - Playlist - Artisti - Podcast",
    "saturation_score": 63.0
  },
  {
    "rank": 6,
    "entity": "intesa sanpaolo",
    "discover_score": 13.890717850871015,
    "score_1h": 33.0,
    "score_4h": 11.888655462184875,
    "score_7d": 20.704142011834318,
    "extracted_entities": "Intesa Sanpaolo - Banca - Finanza - Italia",
    "saturation_score": 474.0
  },
  {
    "rank": 28,
    "entity": "meteo roma",
    "discover_score": 11.763115557100614,
    "score_1h": 57.69827586206897,
    "score_4h": 38.36580992229528,
    "score_7d": 19.952662721893493,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 132.0
  },
  {
    "rank": 24,
    "entity": "meteo napoli",
    "discover_score": 10.919546801410592,
    "score_1h": 45.422413793103445,
    "score_4h": 42.884453781512605,
    "score_7d": 16.36094674556213,
    "extracted_entities": "Meteo - Napoli - Previsioni",
    "saturation_score": 39.0
  },
  {
    "rank": 25,
    "entity": "meteo pasquetta",
    "discover_score": 8.93842595601747,
    "score_1h": 29.732758620689655,
    "score_4h": 11.443980521078725,
    "score_7d": 20.174556213017752,
    "extracted_entities": "Meteo - Pasquetta - Previsioni",
    "saturation_score": 7.0
  },
  {
    "rank": 1,
    "entity": "napoli - empoli",
    "discover_score": 8.639106348466635,
    "score_1h": 61.30172413793103,
    "score_4h": 35.23739495798319,
    "score_7d": 3.3579881656804735,
    "extracted_entities": "Napoli - Empoli - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": 1510.0
  },
  {
    "rank": 37,
    "entity": "lanzarote",
    "discover_score": 7.926116015006286,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8711894799760909,
    "score_7d": 22.40532544378698,
    "extracted_entities": "Lanzarote - Isole Canarie - Turismo - Vulcani - Spiagge",
    "saturation_score": 33.0
  },
  {
    "rank": 40,
    "entity": "weather",
    "discover_score": 7.820170670645052,
    "score_1h": 62.0,
    "score_4h": 40.30252100840336,
    "score_7d": 12.393491124260356,
    "extracted_entities": "Meteo - Previsioni - Clima - Temperature - Condizioni atmosferiche",
    "saturation_score": 201.0
  },
  {
    "rank": 12,
    "entity": "catanzaro informa",
    "discover_score": 7.296197624468245,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.47427129847755,
    "score_7d": 16.70118343195266,
    "extracted_entities": "Catanzaro - Notizie - Informazione - Calabria - Attualità",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "fideuram",
    "discover_score": 7.118608643774158,
    "score_1h": 6.594827586206897,
    "score_4h": 1.5882352941176472,
    "score_7d": 19.93491124260355,
    "extracted_entities": "Fideuram - Banca - Investimenti - Servizi finanziari",
    "saturation_score": 9.0
  },
  {
    "rank": 11,
    "entity": "monfalcone",
    "discover_score": 5.01036863149198,
    "score_1h": 54.13793103448276,
    "score_4h": 13.369747899159663,
    "score_7d": 8.730769230769232,
    "extracted_entities": "Monfalcone - Città - Friuli Venezia Giulia - Italia",
    "saturation_score": 85.0
  },
  {
    "rank": 49,
    "entity": "achille lauro",
    "discover_score": 4.74718211934852,
    "score_1h": 7.241379310344827,
    "score_4h": 0.23109243697478993,
    "score_7d": 15.31656804733728,
    "extracted_entities": "Achille Lauro - Cantante - Musica - Italia",
    "saturation_score": 471.0
  },
  {
    "rank": 46,
    "entity": "alberto angela",
    "discover_score": 4.2073326880357085,
    "score_1h": 0.0,
    "score_4h": 0.13419007770472205,
    "score_7d": 13.662721893491124,
    "extracted_entities": "Alberto Angela - Personaggio pubblico - Divulgazione scientifica - Televisione - Cultura",
    "saturation_score": 51.0
  },
  {
    "rank": 3,
    "entity": "miccoli",
    "discover_score": 4.176759225075363,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.6596638655462185,
    "score_7d": 7.541420118343195,
    "extracted_entities": "Fabrizio Miccoli - Calcio - Palermo - Lecce - Serie A",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "الطقس",
    "discover_score": 3.4014518958264017,
    "score_1h": 1.3275862068965516,
    "score_4h": 0.7649168453992475,
    "score_7d": 11.026627218934912,
    "extracted_entities": "الطقس",
    "saturation_score": 1.0
  },
  {
    "rank": 4,
    "entity": "blue origin",
    "discover_score": 2.773903548456267,
    "score_1h": 2.2844827586206895,
    "score_4h": 0.8004201680672268,
    "score_7d": 5.674556213017752,
    "extracted_entities": "Blue Origin - Spazio - Viaggi spaziali - Jeff Bezos",
    "saturation_score": 427.0
  },
  {
    "rank": 38,
    "entity": "randstad",
    "discover_score": 2.373836102152295,
    "score_1h": 2.206896551724138,
    "score_4h": 0.7820488027847121,
    "score_7d": 7.763313609467456,
    "extracted_entities": "Randstad - Agenzia per il lavoro - Risorse umane - Reclutamento - Lavoro temporaneo",
    "saturation_score": 562.0
  },
  {
    "rank": 32,
    "entity": "jeff bezos",
    "discover_score": 2.2585220363337637,
    "score_1h": 0.7241379310344828,
    "score_4h": 0.38865546218487396,
    "score_7d": 7.304733727810651,
    "extracted_entities": "Jeff Bezos - Amazon - Blue Origin - Imprenditore - Spazio",
    "saturation_score": 178.0
  },
  {
    "rank": 50,
    "entity": "referendum 8 9 giugno per cosa si vota",
    "discover_score": 1.9734622694218145,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.4926250835062058,
    "score_7d": 6.905325443786983,
    "extracted_entities": "Referendum - 8 giugno - 9 giugno - Votazione - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "assegno unico aprile 2025 date",
    "discover_score": 1.5600446507100696,
    "score_1h": 2.310344827586207,
    "score_4h": 0.7004676347526457,
    "score_7d": 4.301775147928994,
    "extracted_entities": "Assegno Unico - Aprile 2025 - Date",
    "saturation_score": 2.0
  },
  {
    "rank": 2,
    "entity": "francesca fialdini",
    "discover_score": 1.5431279729568532,
    "score_1h": 0.3275862068965517,
    "score_4h": 0.8591557962096973,
    "score_7d": 2.739644970414201,
    "extracted_entities": "Francesca Fialdini - Personaggio televisivo - Conduttrice",
    "saturation_score": 58.0
  },
  {
    "rank": 26,
    "entity": "pensioni aumenti 2026",
    "discover_score": 1.1858123323766578,
    "score_1h": 0.8103448275862069,
    "score_4h": 1.2142857142857142,
    "score_7d": 3.5710059171597637,
    "extracted_entities": "Pensioni - Aumenti - 2026",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "crotone - foggia",
    "discover_score": 1.1358131140948966,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.861344537815126,
    "score_7d": 2.5088757396449703,
    "extracted_entities": "Crotone - Foggia - Calcio - Serie C - Partita",
    "saturation_score": 40.0
  },
  {
    "rank": 8,
    "entity": "maxi lopez",
    "discover_score": 1.0980203169335405,
    "score_1h": 0.0,
    "score_4h": 0.5063025210084033,
    "score_7d": 2.7810650887573964,
    "extracted_entities": "Maxi Lopez - Calciatore - Argentina - Sport - Serie A",
    "saturation_score": 9.0
  },
  {
    "rank": 31,
    "entity": "alexander zverev",
    "discover_score": 1.0755306409610976,
    "score_1h": 1.646551724137931,
    "score_4h": 0.0,
    "score_7d": 3.6538461538461537,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Giocatore di tennis - Germania",
    "saturation_score": 2.0
  },
  {
    "rank": 16,
    "entity": "ministra calderone laurea",
    "discover_score": 1.0064588838051145,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.6407563025210083,
    "score_7d": 2.8757396449704142,
    "extracted_entities": "Ministra Calderone - Laurea",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "salone del risparmio 2025",
    "discover_score": 0.9772306596804716,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.24947259238423403,
    "score_7d": 2.985207100591716,
    "extracted_entities": "Salone del Risparmio - 2025 - Evento - Finanza - Investimenti",
    "saturation_score": 7.0
  },
  {
    "rank": 22,
    "entity": "harvard",
    "discover_score": 0.953957661112084,
    "score_1h": 4.137931034482758,
    "score_4h": 0.07983193277310924,
    "score_7d": 3.035502958579882,
    "extracted_entities": "Harvard University - Istruzione superiore - Cambridge - Ivy League - Ricerca accademica",
    "saturation_score": 60.0
  },
  {
    "rank": 35,
    "entity": "romatoday",
    "discover_score": 0.9450773035442067,
    "score_1h": 4.931034482758621,
    "score_4h": 0.4369747899159664,
    "score_7d": 3.150887573964497,
    "extracted_entities": "RomaToday - Notizie - Roma - Attualità - Cronaca",
    "saturation_score": 3.0
  },
  {
    "rank": 27,
    "entity": "antonella viola",
    "discover_score": 0.9048510288608673,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13865546218487396,
    "score_7d": 2.9615384615384617,
    "extracted_entities": "Antonella Viola - Immunologia - Ricerca scientifica",
    "saturation_score": 66.0
  },
  {
    "rank": 47,
    "entity": "orban",
    "discover_score": 0.8584306473281205,
    "score_1h": 0.0,
    "score_4h": 0.639121338912134,
    "score_7d": 2.9289940828402363,
    "extracted_entities": "Viktor Orbán - Politica ungherese - Primo Ministro Ungheria",
    "saturation_score": 69.0
  },
  {
    "rank": 45,
    "entity": "lsg vs csk",
    "discover_score": 0.650636942576514,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.301775147928994,
    "extracted_entities": "LSG - CSK - Cricket - Indian Premier League - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "virtus bologna - brescia",
    "discover_score": 0.5890233579473872,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.24342498505678423,
    "score_7d": 1.849112426035503,
    "extracted_entities": "Virtus Bologna - Brescia - Pallacanestro - Serie A - Partita",
    "saturation_score": 7.0
  },
  {
    "rank": 48,
    "entity": "atlético madrid vs valladolid",
    "discover_score": 0.5464976125619294,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.9142011834319528,
    "extracted_entities": "Atlético Madrid - Valladolid - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "cast serie tv harry potter",
    "discover_score": 0.5099486289249453,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.23725431595232235,
    "score_7d": 1.4082840236686391,
    "extracted_entities": "Cast - Serie TV - Harry Potter",
    "saturation_score": 2.0
  },
  {
    "rank": 10,
    "entity": "vangelo di oggi 15 aprile",
    "discover_score": 0.47693677735554313,
    "score_1h": 2.043103448275862,
    "score_4h": 1.361344537815126,
    "score_7d": 0.8668639053254439,
    "extracted_entities": "Vangelo - Letture del giorno - 15 aprile",
    "saturation_score": 3.0
  },
  {
    "rank": 33,
    "entity": "nick frost",
    "discover_score": 0.45237449567309246,
    "score_1h": 0.0,
    "score_4h": 0.3314229457473366,
    "score_7d": 1.3461538461538463,
    "extracted_entities": "Nick Frost - Attore - Film - Commedia",
    "saturation_score": 2.0
  },
  {
    "rank": 42,
    "entity": "david bowie",
    "discover_score": 0.4214342591355519,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 1.2988165680473371,
    "extracted_entities": "David Bowie - Musica - Cantante - Glam Rock - Ziggy Stardust",
    "saturation_score": 47.0
  },
  {
    "rank": 18,
    "entity": "miriana trevisan",
    "discover_score": 0.4089888914615811,
    "score_1h": 1.5,
    "score_4h": 0.09221722161668014,
    "score_7d": 1.106508875739645,
    "extracted_entities": "Miriana Trevisan - Personaggio televisivo - Italia",
    "saturation_score": 33.0
  },
  {
    "rank": 7,
    "entity": "patrick vettori",
    "discover_score": 0.4081737258481535,
    "score_1h": 9.344827586206897,
    "score_4h": 1.0048081994303997,
    "score_7d": 0.665680473372781,
    "extracted_entities": "Patrick Vettori - Persone",
    "saturation_score": 24.0
  },
  {
    "rank": 9,
    "entity": "risultati elezioni comunali monfalcone",
    "discover_score": 0.4064697695089358,
    "score_1h": 1.9224137931034484,
    "score_4h": 0.5777310924369747,
    "score_7d": 0.8195266272189349,
    "extracted_entities": "Elezioni Comunali - Monfalcone - Risultati",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "alessandra mao",
    "discover_score": 0.3875920586174299,
    "score_1h": 0.6293103448275862,
    "score_4h": 0.32563025210084034,
    "score_7d": 0.9881656804733727,
    "extracted_entities": "Alessandra Mao",
    "saturation_score": 9.0
  },
  {
    "rank": 36,
    "entity": "pino insegno",
    "discover_score": 0.3709699091746361,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.09223480187053901,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Pino Insegno - Attore - Doppiatore - Televisione - Spettacolo",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "afc bournemouth - fulham",
    "discover_score": 0.36883722948655984,
    "score_1h": 0.0,
    "score_4h": 0.6974789915966386,
    "score_7d": 0.8994082840236687,
    "extracted_entities": "AFC Bournemouth - Fulham - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "bonus nuovi nati 2025 inps",
    "discover_score": 0.3126666723303717,
    "score_1h": 0.0,
    "score_4h": 0.6722689075630253,
    "score_7d": 0.7278106508875739,
    "extracted_entities": "Bonus - Nuovi Nati - 2025 - INPS",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "buon martedi 15 aprile",
    "discover_score": 0.2824114548998116,
    "score_1h": 0.39655172413793105,
    "score_4h": 1.0567226890756303,
    "score_7d": 0.3698224852071006,
    "extracted_entities": "Martedì - 15 aprile - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "gianluigi aponte",
    "discover_score": 0.22658791813866813,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.2415966386554622,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Gianluigi Aponte - MSC Crociere - Trasporti marittimi",
    "saturation_score": 5.0
  },
  {
    "rank": 14,
    "entity": "eros ramazzotti world tour",
    "discover_score": 0.18022833340557232,
    "score_1h": 1.1120689655172413,
    "score_4h": 0.3165588411096656,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Eros Ramazzotti - World Tour - Concerti - Musica - Eventi",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "nicky katt",
    "discover_score": 0.17466280559743058,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.5042016806722689,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Nicky Katt - Attore - Film - Televisione - Carriera",
    "saturation_score": 54.0
  },
  {
    "rank": 21,
    "entity": "oroscopo 15 aprile 2025 scorpione",
    "discover_score": 0.16560931512233706,
    "score_1h": 1.7586206896551724,
    "score_4h": 0.5483193277310925,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Oroscopo - 15 aprile 2025 - Scorpione",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "terremoto san diego",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "alessia marcuzzi",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "spider-man 2",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "la mia signorina neffa",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "aeronautica militare meteo",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "michela ponzani",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "paola barale",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "calcio napoli",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "holger rune",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "antonino spinalbese",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "cristina d'avena",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "irma testa",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "matteo arnaldi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "atp monaco",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "ben shelton",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "mission impossible",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "club deportivo garcilaso - alianza lima",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "calendario napoli",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "nicolò fagioli",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "corsi indire sostegno",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "paola turani",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "gianni morandi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "atletico madrid",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "sebastiano esposito",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "morto mario vargas llosa",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "zambrotta",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "jasmine carrisi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "filippo bisciglia",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "elton john",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "coldplay",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "società sportiva calcio napoli",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "eugene the last of us",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "bella ramsey",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "brigitta boccoli",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "sudan",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "meteo parigi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "elezioni presidenziali ecuador",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "osimhen",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "carpi - legnago",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "conte juventus",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "luca barbareschi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "prossimo turno serie a",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "montoya",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "cfr cluj - rapid bucarest",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "tronchetti provera",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "last of us",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "rolling stones",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "gaudi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "elena barolo",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "manila nazzaro",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "francesca fagnani",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "monica setta",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "uova alla jova",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "andrea tabanelli",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "romelu lukaku",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "royal albert hall",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "ilary blasi",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "miriam leone",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "tommaso cassissa",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "laura maddaloni",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "sallusti",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "piero angela",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "napoli stasera",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "denzel washington",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "regina elisabetta",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "lady diana",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "coffee",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "queen",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "rettore",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "piero de luca",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "tallon griekspoor",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "lucia bronzetti",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "tirrenia",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "giuliano simeone",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "nvidia",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "nadia battocletti",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "lucio caracciolo",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "sean connery",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "wembley stadium",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "restaurant",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "potapova",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "fiera milano live",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "manuela moreno",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "politano",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "rotterdam",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "liam neeson",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "spider man 3",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "fuochi d'artificio serie tv",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "gds",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "milly carlucci",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "kirsten dunst",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "areanapoli",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "calcio streaming",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "david gilmour",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "boschi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "the beatles",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "damiano david",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "elisabetta ii",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "rita ora",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "shaik rasheed",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "jankulovski",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "luca tommassini",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "maggie smith",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "new shepard",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "italia",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "dua lipa",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "marianucci",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "crosetto",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "bill gates",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "camden town",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "julia roberts",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "albano",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "meteo trento",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "partite inter",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "big ben",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "amman",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "lacerenza",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "vialli",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "mario vargas llosa nobel",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "marcegaglia",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "ministero della giustizia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "marcello foa",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "enrico mentana",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "parabiago",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "mcdonald's",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "criminal defense attorney",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "istanbul",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "del mastro",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "gianni letta",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "san benedetto del tronto",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "vallecorsa",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "stefano conti",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "benedicta boccoli",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "fiera milano",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "massimo ranieri",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "henderson empoli",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "dexter",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "streaming",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "incidente martin",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "ps5",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "bohemian rhapsody",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "crepet",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "rakotomanga",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "cacia",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "panama",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "pixel 9a",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "messina denaro",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-15 08:17:59",
  "trends_count": 202,
  "top_score": 23.26931391070076,
  "runtime_minutes": 5.7060557961463925,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "I venti del cambiamento soffiano su tematiche di musica, meteo e investimenti, mentre la curiosità sulle previsioni atmosferiche e sugli ultimi successi musicali continua a catturare gli spiriti curiosi. Oggi, le nostre visioni si fissano sul potenziale non ancora completamente esaurito. Spotify (#1), con il suo fervente interesse recente e una saturazione di appena 63, rappresenta un fertile terreno per i creatori di contenuti su Google Discover. Le melodie e le voci nel vento possono incantare gli ascoltatori alla ricerca di nuove playlist e podcast.\n\nTuttavia, il cammino si mostra accidentato quando si avvicina al campo di battaglia del calcio, con \"Napoli - Empoli\" (#6) che sprofonda in una selvaggia saturazione di 1.510, segnando un terreno già ampiamente battuto dai contendenti mediatici.\n\nIn questo dominato regno di trend, camminate leggere e con intenzione, cercando di avvicinarvi alle nicchie sottosviluppate che promettono una scoperta più autentica e appagante per i cercatori di sapere. Scegliete bene i vostri terreni di ispirazione, per far emergere storie che risuonano non solo nelle menti ma anche nei cuori."
};
