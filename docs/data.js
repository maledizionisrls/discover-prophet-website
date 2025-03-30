const trendData = [
  {
    "rank": 1,
    "entity": "fiorentina - atalanta",
    "discover_score": 17.86849220150134,
    "score_1h": 54.80172413793103,
    "score_4h": 35.636554621848745,
    "score_7d": 1.8668639053254439,
    "extracted_entities": "Fiorentina - Atalanta - Calcio - Serie A - Partita"
  },
  {
    "rank": 9,
    "entity": "carrarese - bari",
    "discover_score": 7.549730564006501,
    "score_1h": 26.637931034482758,
    "score_4h": 36.285714285714285,
    "score_7d": 0.7781065088757397,
    "extracted_entities": "Carrarese - Bari - Calcio - Serie C - Partita"
  },
  {
    "rank": 3,
    "entity": "cagliari - monza",
    "discover_score": 7.5290399880135865,
    "score_1h": 40.612068965517246,
    "score_4h": 21.35924369747899,
    "score_7d": 1.7958579881656807,
    "extracted_entities": "Cagliari - Monza - Calcio - Serie A - Partita"
  },
  {
    "rank": 14,
    "entity": "cesena - juve stabia",
    "discover_score": 5.6704570290534875,
    "score_1h": 20.224137931034484,
    "score_4h": 27.665966386554622,
    "score_7d": 1.0236686390532546,
    "extracted_entities": "Cesena - Juve Stabia - Calcio - Partita - Serie C"
  },
  {
    "rank": 10,
    "entity": "richard chamberlain",
    "discover_score": 5.370619397135116,
    "score_1h": 32.258620689655174,
    "score_4h": 24.300420168067227,
    "score_7d": 1.0236686390532543,
    "extracted_entities": "Richard Chamberlain - Attore - Filmografia - Televisione - Anni '60-'80"
  },
  {
    "rank": 11,
    "entity": "eid mubarak",
    "discover_score": 5.3066551865573475,
    "score_1h": 0.8362068965517241,
    "score_4h": 14.315126050420169,
    "score_7d": 4.189349112426036,
    "extracted_entities": "Eid Mubarak - Festa islamica - Celebrazione - Musulmani - Auguri"
  },
  {
    "rank": 4,
    "entity": "lecce - roma",
    "discover_score": 4.7831294312006625,
    "score_1h": 1.6551724137931034,
    "score_4h": 10.53781512605042,
    "score_7d": 2.949704142011834,
    "extracted_entities": "Lecce - Roma - Calcio - Serie A - Partita"
  },
  {
    "rank": 15,
    "entity": "trapani - catania",
    "discover_score": 3.8710854983042537,
    "score_1h": 16.163793103448278,
    "score_4h": 14.617647058823529,
    "score_7d": 2.1863905325443787,
    "extracted_entities": "Trapani - Catania - Sicilia - Viaggio - Trasporti"
  },
  {
    "rank": 7,
    "entity": "barcellona - girona",
    "discover_score": 3.3654640853693567,
    "score_1h": 60.12068965517241,
    "score_4h": 13.913865546218489,
    "score_7d": 0.8727810650887573,
    "extracted_entities": "Barcellona - Girona - Viaggio - Turismo - Spagna"
  },
  {
    "rank": 2,
    "entity": "juventus - genoa",
    "discover_score": 3.182611745907984,
    "score_1h": 4.413793103448276,
    "score_4h": 4.275210084033613,
    "score_7d": 2.6301775147928996,
    "extracted_entities": "Juventus - Genoa - Calcio - Serie A - Partita"
  },
  {
    "rank": 12,
    "entity": "pro vercelli - vicenza",
    "discover_score": 2.120283566570748,
    "score_1h": 29.793103448275865,
    "score_4h": 13.352941176470587,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Pro Vercelli - Vicenza - Partita di calcio - Serie C - Risultato"
  },
  {
    "rank": 5,
    "entity": "inter - udinese",
    "discover_score": 2.0153054288826104,
    "score_1h": 22.362068965517242,
    "score_4h": 6.936974789915967,
    "score_7d": 0.863905325443787,
    "extracted_entities": "Inter - Udinese - Calcio - Serie A"
  },
  {
    "rank": 20,
    "entity": "roberto vecchioni",
    "discover_score": 1.9268773859147519,
    "score_1h": 0.8275862068965517,
    "score_4h": 8.781512605042018,
    "score_7d": 1.0118343195266273,
    "extracted_entities": "Roberto Vecchioni - Cantautore - Musica Italiana"
  },
  {
    "rank": 21,
    "entity": "lucchese - ternana",
    "discover_score": 1.9062846407492602,
    "score_1h": 24.706896551724135,
    "score_4h": 12.304621848739496,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Lucchese - Ternana - Calcio - Partita - Serie C"
  },
  {
    "rank": 6,
    "entity": "real madrid - leganés",
    "discover_score": 1.8970068600380063,
    "score_1h": 1.7627118644067796,
    "score_4h": 1.0210084033613445,
    "score_7d": 3.9467455621301775,
    "extracted_entities": "Real Madrid - Leganés - Calcio - Partita - Liga Spagnola"
  },
  {
    "rank": 40,
    "entity": "michelle hunziker",
    "discover_score": 1.8624140120546742,
    "score_1h": 17.939655172413794,
    "score_4h": 3.928571428571429,
    "score_7d": 4.257396449704142,
    "extracted_entities": "Michelle Hunziker - Personaggio televisivo - Svizzera - Italia - Spettacolo"
  },
  {
    "rank": 26,
    "entity": "psv eindhoven - ajax",
    "discover_score": 1.799666696452123,
    "score_1h": 0.35344827586206895,
    "score_4h": 7.894957983193278,
    "score_7d": 1.2751479289940828,
    "extracted_entities": "PSV Eindhoven - Ajax - Eredivisie - Calcio - Rivalità"
  },
  {
    "rank": 43,
    "entity": "classifica di serie c",
    "discover_score": 1.5760273354755057,
    "score_1h": 17.853448275862068,
    "score_4h": 5.012605042016807,
    "score_7d": 2.6153846153846154,
    "extracted_entities": "Classifica - Serie C - Calcio - Campionato"
  },
  {
    "rank": 29,
    "entity": "arianna manfredini",
    "discover_score": 1.4366276736203176,
    "score_1h": 1.0948275862068966,
    "score_4h": 1.9831932773109244,
    "score_7d": 3.8017751479289936,
    "extracted_entities": "Arianna Manfredini"
  },
  {
    "rank": 205,
    "entity": "michelle hunziker",
    "discover_score": 1.4001716005966782,
    "score_1h": 17.939655172413794,
    "score_4h": 3.928571428571429,
    "score_7d": 4.257396449704142,
    "extracted_entities": "Michelle Hunziker - Personaggio televisivo - Svizzera - Italia - Spettacolo"
  },
  {
    "rank": 22,
    "entity": "tonga",
    "discover_score": 1.1276272764858666,
    "score_1h": 45.32817066043249,
    "score_4h": 5.048319327731092,
    "score_7d": 0.7189349112426036,
    "extracted_entities": "Tonga - Oceania - Isole del Pacifico - Vulcani - Tsunami"
  },
  {
    "rank": 18,
    "entity": "audace cerignola - monopoli",
    "discover_score": 1.116047791747618,
    "score_1h": 9.96551724137931,
    "score_4h": 5.468487394957983,
    "score_7d": 0.44970414201183434,
    "extracted_entities": "Audace Cerignola - Monopoli - Calcio - Partita - Serie C"
  },
  {
    "rank": 32,
    "entity": "rudy zerbi",
    "discover_score": 1.0827109835093756,
    "score_1h": 12.948275862068966,
    "score_4h": 4.13655462184874,
    "score_7d": 1.2366863905325443,
    "extracted_entities": "Rudy Zerbi - Personaggio televisivo - Musica - Italia"
  },
  {
    "rank": 28,
    "entity": "eliminato amici",
    "discover_score": 1.060739671088518,
    "score_1h": 0.10344827586206896,
    "score_4h": 1.422268907563025,
    "score_7d": 2.8461538461538463,
    "extracted_entities": "Eliminato - Amici - Programma TV"
  },
  {
    "rank": 8,
    "entity": "salernitana - palermo",
    "discover_score": 1.0198514045274065,
    "score_1h": 49.80172413793103,
    "score_4h": 2.2941176470588234,
    "score_7d": 1.2751479289940828,
    "extracted_entities": "Salernitana - Palermo - Calcio - Serie B - Partita"
  },
  {
    "rank": 41,
    "entity": "terremoto myanmar oggi",
    "discover_score": 1.0179898659117759,
    "score_1h": 0.22413793103448276,
    "score_4h": 0.1407563025210084,
    "score_7d": 3.9733727810650885,
    "extracted_entities": "Terremoto - Myanmar - Oggi"
  },
  {
    "rank": 27,
    "entity": "atalanta u-23 - padova",
    "discover_score": 1.0121756131357404,
    "score_1h": 0.0,
    "score_4h": 6.602941176470589,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Atalanta U-23 - Padova - Calcio - Partita"
  },
  {
    "rank": 19,
    "entity": "feyenoord - go ahead eagles",
    "discover_score": 0.9231149351370285,
    "score_1h": 12.810344827586206,
    "score_4h": 5.2899159663865545,
    "score_7d": 0.16272189349112426,
    "extracted_entities": "Feyenoord - Go Ahead Eagles - Partita di calcio - Eredivisie"
  },
  {
    "rank": 25,
    "entity": "barbara bouchet",
    "discover_score": 0.7836644955029732,
    "score_1h": 13.560344827586206,
    "score_4h": 3.084033613445378,
    "score_7d": 0.7189349112426036,
    "extracted_entities": "Barbara Bouchet - Attrice - Cinema - Televisione"
  },
  {
    "rank": 13,
    "entity": "nunzia de girolamo",
    "discover_score": 0.7164835611439189,
    "score_1h": 11.344827586206897,
    "score_4h": 1.995798319327731,
    "score_7d": 0.834319526627219,
    "extracted_entities": "Nunzia De Girolamo - Politica Italiana - Personaggio Pubblico"
  },
  {
    "rank": 38,
    "entity": "preston - aston villa",
    "discover_score": 0.7101113678214096,
    "score_1h": 0.16379310344827586,
    "score_4h": 2.216386554621849,
    "score_7d": 1.1390532544378698,
    "extracted_entities": "Preston - Aston Villa - Calcio - Partita - Campionato"
  },
  {
    "rank": 16,
    "entity": "afc bournemouth - manchester city",
    "discover_score": 0.6664438942364483,
    "score_1h": 16.75,
    "score_4h": 2.73109243697479,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "AFC Bournemouth - Manchester City - Partita di calcio - Premier League"
  },
  {
    "rank": 33,
    "entity": "gand wevelgem 2025",
    "discover_score": 0.6216612247725913,
    "score_1h": 1.1724137931034484,
    "score_4h": 1.930672268907563,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Gand-Wevelgem - 2025 - Ciclismo - Gara - Belgio"
  },
  {
    "rank": 39,
    "entity": "reggina vibonese",
    "discover_score": 0.5873568974219139,
    "score_1h": 0.5172413793103449,
    "score_4h": 3.4138655462184877,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Reggina - Vibonese - Calcio - Partita - Serie C"
  },
  {
    "rank": 44,
    "entity": "costanza fiction",
    "discover_score": 0.5234944475105863,
    "score_1h": 4.571303331385155,
    "score_4h": 0.7605042016806722,
    "score_7d": 1.4201183431952662,
    "extracted_entities": "Costanza - Fiction - Serie TV"
  },
  {
    "rank": 31,
    "entity": "uccelli di rovo",
    "discover_score": 0.46974305676094996,
    "score_1h": 7.525862068965517,
    "score_4h": 1.0483193277310925,
    "score_7d": 0.8579881656804733,
    "extracted_entities": "Uccelli di rovo - Romanzo - Colleen McCullough - Serie TV - Richard Chamberlain"
  },
  {
    "rank": 34,
    "entity": "cesare prandelli",
    "discover_score": 0.4655095215095187,
    "score_1h": 1.0689655172413792,
    "score_4h": 0.40126050420168063,
    "score_7d": 1.334319526627219,
    "extracted_entities": "Cesare Prandelli - Allenatore di calcio - Italia - Fiorentina - Nazionale italiana di calcio"
  },
  {
    "rank": 47,
    "entity": "franco antonello",
    "discover_score": 0.42390772470055227,
    "score_1h": 4.474137931034482,
    "score_4h": 2.388655462184874,
    "score_7d": 0.09171597633136094,
    "extracted_entities": "Franco Antonello"
  },
  {
    "rank": 30,
    "entity": "matilda de angelis",
    "discover_score": 0.3990556097984832,
    "score_1h": 8.99137931034483,
    "score_4h": 2.3004201680672267,
    "score_7d": 0.011834319526627219,
    "extracted_entities": "Matilda De Angelis - Attrice - Film - Serie TV - Italia"
  },
  {
    "rank": 24,
    "entity": "tonga terremoto",
    "discover_score": 0.3811562186118466,
    "score_1h": 22.68103448275862,
    "score_4h": 1.1197478991596639,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "Tonga - Terremoto - Evento sismico"
  },
  {
    "rank": 35,
    "entity": "rr vs csk",
    "discover_score": 0.3614333358320214,
    "score_1h": 4.646551724137931,
    "score_4h": 1.3088235294117647,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "RR - CSK - IPL - Cricket"
  },
  {
    "rank": 17,
    "entity": "drone russo lago maggiore",
    "discover_score": 0.33077028575026146,
    "score_1h": 24.836206896551722,
    "score_4h": 0.9684873949579832,
    "score_7d": 0.23076923076923078,
    "extracted_entities": "Drone - Russia - Lago Maggiore"
  },
  {
    "rank": 48,
    "entity": "rimini - sestri levante",
    "discover_score": 0.286008360666554,
    "score_1h": 1.1120689655172413,
    "score_4h": 0.6533613445378151,
    "score_7d": 0.41715976331360943,
    "extracted_entities": "Rimini - Sestri Levante - Località turistiche - Viaggio - Italia"
  },
  {
    "rank": 45,
    "entity": "loftus cheek",
    "discover_score": 0.279815208054248,
    "score_1h": 1.0172413793103448,
    "score_4h": 1.4138655462184875,
    "score_7d": 0.014792899408284023,
    "extracted_entities": "Loftus-Cheek - Calciatore - Chelsea - Premier League - Inghilterra"
  },
  {
    "rank": 46,
    "entity": "la vita da grandi",
    "discover_score": 0.2611459362678249,
    "score_1h": 3.7155172413793105,
    "score_4h": 1.1764705882352942,
    "score_7d": 0.04142011834319527,
    "extracted_entities": "Vita adulta - Crescita personale - Responsabilità - Transizione - Esperienze di vita"
  },
  {
    "rank": 36,
    "entity": "barcelona vs girona",
    "discover_score": 0.24355905805658712,
    "score_1h": 1.706896551724138,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.2514792899408284,
    "extracted_entities": "Barcelona - Girona - Partita di calcio - La Liga"
  },
  {
    "rank": 42,
    "entity": "gullit",
    "discover_score": 0.23573910705308646,
    "score_1h": 0.0,
    "score_4h": 0.018907563025210086,
    "score_7d": 0.5887573964497042,
    "extracted_entities": "Ruud Gullit - Calcio - Olanda - Milan - Pallone d'Oro"
  },
  {
    "rank": 37,
    "entity": "ludmilla radchenko",
    "discover_score": 0.22821964873351938,
    "score_1h": 0.15517241379310345,
    "score_4h": 0.06302521008403361,
    "score_7d": 0.4970414201183432,
    "extracted_entities": "Ludmilla Radchenko - Artista - Modella - Televisione"
  },
  {
    "rank": 50,
    "entity": "napoli milan dove vederla",
    "discover_score": 0.1999516229245883,
    "score_1h": 0.19827586206896552,
    "score_4h": 0.08823529411764706,
    "score_7d": 0.38165680473372776,
    "extracted_entities": "Napoli - Milan - Partita - Dove vederla"
  },
  {
    "rank": 49,
    "entity": "gosens",
    "discover_score": 0.1931167716910343,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.3907563025210084,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Robin Gosens - Calciatore - Inter - Bundesliga - Nazionale tedesca"
  },
  {
    "rank": 23,
    "entity": "danimarca groenlandia trump",
    "discover_score": 0.1896677287938005,
    "score_1h": 1.0775862068965516,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.029585798816568046,
    "extracted_entities": "Danimarca - Groenlandia - Trump"
  },
  {
    "rank": 51,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "borussia dortmund - mainz",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "eleonora cecere",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "ascoli calcio",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "darderi",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "ilaria galassi",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "gerry scotti",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "motogp oggi orari",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "pamela petrarolo",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "federica pellegrini",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "gent wevelgem 2025",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "barcelona - girona",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "daria kasatkina",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "kevin costner",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "varese - scafati",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "superbike oggi",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "avellino benevento",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "twitter down",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "barcellona calcio",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "lazio torino",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "groenlandia trump",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "djokovic oggi",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "serie c girone b",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "st-étienne - psg",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "ora",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "club brugge - anderlecht",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "classifica serie c",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "potenza - giugliano",
    "discover_score": 0.10660790403530267,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "fabio paratici",
    "discover_score": 0.10646514650027929,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "edoardo mangano",
    "discover_score": 0.10632453699023645,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "nitish rana",
    "discover_score": 0.10618601677886443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "emanuel lo",
    "discover_score": 0.10604952944488055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "cuadrado",
    "discover_score": 0.10591502075484019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "srh vs dc",
    "discover_score": 0.10578243855322951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "isar aerospace",
    "discover_score": 0.10565173265930743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "grizzlies - lakers",
    "discover_score": 0.10552285477020852,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "getafe - villarreal",
    "discover_score": 0.10539575836985944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 0.10527039864329803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "tim poste italiane",
    "discover_score": 0.10514673239601775,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "inter juventus femminile",
    "discover_score": 0.10502471797798994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "alessandro borghese",
    "discover_score": 0.10490431521204421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "frascati",
    "discover_score": 0.10478548532631286,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "carlo taranto gialappa",
    "discover_score": 0.10466819089046668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "eredivisie",
    "discover_score": 0.10455239575549213,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "ravenna calcio",
    "discover_score": 0.10443806499677748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "buona domenica 30 marzo",
    "discover_score": 0.10432516486029392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "ramona bachmann",
    "discover_score": 0.1042136627116727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "valeria marini",
    "discover_score": 0.10410352698799526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "aldo cazzullo",
    "discover_score": 0.10399472715212489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "anna tatangelo",
    "discover_score": 0.10388723364942297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "solo leveling season 3",
    "discover_score": 0.10378101786670191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "isernia",
    "discover_score": 0.1036760520932791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "eid",
    "discover_score": 0.1035723094840047,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "oroscopo oggi capricorno paolo fox",
    "discover_score": 0.10346976402414519,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "venaria reale",
    "discover_score": 0.10336839049601293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "ticketone",
    "discover_score": 0.10326816444723902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "inter miami - philadelphia union",
    "discover_score": 0.10316906216059425,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "serie d girone i",
    "discover_score": 0.10307106062526858,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "carlo calenda giorgia meloni",
    "discover_score": 0.10297413750952632,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "denise esposito",
    "discover_score": 0.10287827113465892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "molise",
    "discover_score": 0.10278344045016281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "pantelleria",
    "discover_score": 0.10268962501007417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "sampdoria - sassuolo",
    "discover_score": 0.10259680495039697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "aryna sabalenka",
    "discover_score": 0.10250496096756462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "pamela prati",
    "discover_score": 0.10241407429787938,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "yildiz",
    "discover_score": 0.10232412669787708,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "carmen russo",
    "discover_score": 0.10223510042556766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "casertana - foggia",
    "discover_score": 0.102146978222506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "brindisi - ueb cividale",
    "discover_score": 0.10205974329664895,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "anna pepe",
    "discover_score": 0.10197337930595829,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "mother's day",
    "discover_score": 0.10188787034271098,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "yuri previtali",
    "discover_score": 0.10180320091848082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "dinamo sassari - trapani",
    "discover_score": 0.10171935594975741,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "passaporto nuove regole",
    "discover_score": 0.10163632074417069,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "elena d'amario",
    "discover_score": 0.10155408098729052,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "aniket verma",
    "discover_score": 0.10147262272997333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "giacomo agostini",
    "discover_score": 0.10139193237622872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "matilde brandi",
    "discover_score": 0.10131199667158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "beşiktaş - galatasaray",
    "discover_score": 0.10123280269190177,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "sabalenka",
    "discover_score": 0.1011543378326903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "oroscopo settimanale cancro",
    "discover_score": 0.10107658979878206,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "mbappe",
    "discover_score": 0.10099954659446342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "barbara spinelli",
    "discover_score": 0.10092319651397456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "san vito lo capo",
    "discover_score": 0.10084752813238243,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "gigi d'alessio piazza plebiscito 2025",
    "discover_score": 0.10077253029680652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "adriana volpe",
    "discover_score": 0.10069819211798135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "patrizia pellegrino",
    "discover_score": 0.10062450296214058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "menfi",
    "discover_score": 0.1005514524432079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "laura freddi",
    "discover_score": 0.10047903041528129,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "villanterio",
    "discover_score": 0.10040722696539747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "algarve",
    "discover_score": 0.10033603240656422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "rosanna fratello",
    "discover_score": 0.10026543727104871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "brighton & hove albion - nottingham forest",
    "discover_score": 0.10019543230391097,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "bulls - mavericks",
    "discover_score": 0.10012600845677155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "zeitumstellung 2025",
    "discover_score": 0.10005715688180375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "estrela amadora - sporting",
    "discover_score": 0.09998886892594035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "sassuolo",
    "discover_score": 0.09992113612528634,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "mattia guadagnini",
    "discover_score": 0.09985395019972848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "carlo verdone",
    "discover_score": 0.09978730304773362,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "ciro ricci mare fuori",
    "discover_score": 0.09972118674132832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "eintracht - stoccarda",
    "discover_score": 0.09965559352125167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "maradona",
    "discover_score": 0.0995905157922747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "spurs - celtics",
    "discover_score": 0.09952594611867945,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "artem dovbyk",
    "discover_score": 0.0994618772198912,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "e poi si vede film",
    "discover_score": 0.09939830196625789,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "luca zingaretti",
    "discover_score": 0.09933521337497048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "flora tabanelli",
    "discover_score": 0.09927260460611927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "30 marzo",
    "discover_score": 0.09921046895888021,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "odgaard",
    "discover_score": 0.0991487998678265,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "fire damage restoration",
    "discover_score": 0.09908759089936048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "paolo rossi",
    "discover_score": 0.0990268357482612,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "zeeshan ansari",
    "discover_score": 0.09896652823434314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "clodiense - novara",
    "discover_score": 0.09890666229922199,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "motogp jorge martin",
    "discover_score": 0.0988472320031833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "gianfranco fini",
    "discover_score": 0.09878823152215013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "cremonese cittadella",
    "discover_score": 0.09872965514474617,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "l'ultima gara",
    "discover_score": 0.09867149726945039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "dustin hoffman",
    "discover_score": 0.09861375240184032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "nesta",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "keita balde",
    "discover_score": 0.098499480231532,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "val di fassa",
    "discover_score": 0.09844294245184321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "roberta bruzzone",
    "discover_score": 0.09838679672091392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "young sheldon",
    "discover_score": 0.09833103804133506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "maurizio battista",
    "discover_score": 0.0982756615079381,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "cristina parodi",
    "discover_score": 0.09822066230557329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "alessia amici",
    "discover_score": 0.09816603570695347,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "classifica serie a",
    "discover_score": 0.09811177707056148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "dundee - rangers",
    "discover_score": 0.09805788183861917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "cremonese",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "the life list",
    "discover_score": 0.09795116376389046,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "seven",
    "discover_score": 0.09789833220677814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "cristiano malgioglio",
    "discover_score": 0.0978458466217977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "barbara foria",
    "discover_score": 0.09779370284140003,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "mezza maratona d'italia",
    "discover_score": 0.09774189677076232,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "anna pettinelli",
    "discover_score": 0.09769042438613113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "andrea berta",
    "discover_score": 0.09763928173321193,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "linea verde",
    "discover_score": 0.09758846492560365,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "partita juve oggi",
    "discover_score": 0.09753797014327643,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "antonia amici",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "alavés - rayo vallecano",
    "discover_score": 0.09743793169736248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "ellen hidding",
    "discover_score": 0.09738838071245375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "prima pagina tuttosport",
    "discover_score": 0.09733913710741988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "senza cri",
    "discover_score": 0.09729019737267972,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "malta",
    "discover_score": 0.09724155805672677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "patrick vieira",
    "discover_score": 0.09719321576487423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "davide simonetta",
    "discover_score": 0.09714516715803326,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "tommaso cassissa",
    "discover_score": 0.09709740895152358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "fini",
    "discover_score": 0.09704993791391554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "balotelli",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "trigno amici",
    "discover_score": 0.09695584467920225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "giro delle fiandre 2025",
    "discover_score": 0.09690921627548794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "mediaset infinity",
    "discover_score": 0.0968628626253454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "san giorgio a cremano",
    "discover_score": 0.09681678074725798,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "campobasso",
    "discover_score": 0.09672542061475889,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "alcione - pergolettese",
    "discover_score": 0.0966801366280226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "the town",
    "discover_score": 0.09663511294683641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "weather",
    "discover_score": 0.09659034681482327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "cipro",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "trade republic",
    "discover_score": 0.09650157638358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "gatti",
    "discover_score": 0.09645756677984114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "limp bizkit bologna",
    "discover_score": 0.09641380411462185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "liquidation",
    "discover_score": 0.09637028583488115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "le assaggiatrici",
    "discover_score": 0.09632700942586017,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "kenan yıldız",
    "discover_score": 0.09628397241033204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "tropea",
    "discover_score": 0.09624117234786977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "drusilla foer",
    "discover_score": 0.09619860683413181,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "madagascar",
    "discover_score": 0.09615627350016469,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "vira carbone",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "giorgio gori",
    "discover_score": 0.09607229406860092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "ryan gosling",
    "discover_score": 0.09603064340399105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "diretta canale 5",
    "discover_score": 0.09598921578384295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "sandra bullock",
    "discover_score": 0.09594800900624814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "thunder - pacers",
    "discover_score": 0.09590702090083489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "classifica di serie b",
    "discover_score": 0.09586624932817771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "maglia genoa boca",
    "discover_score": 0.09582569217922066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "seven film",
    "discover_score": 0.09578534737471363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "letterman",
    "discover_score": 0.09574521286466178,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "todaro",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "acquisition",
    "discover_score": 0.09566556667100377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "paolo villaggio",
    "discover_score": 0.0956260510289015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "mediaset play",
    "discover_score": 0.09558673776324564,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "mediaset",
    "discover_score": 0.09554762496248463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "holland",
    "discover_score": 0.09550871074127001,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "miretti",
    "discover_score": 0.09546999323998659,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "leali",
    "discover_score": 0.09543147062429341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "grève",
    "discover_score": 0.0953931410846744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "sean connery",
    "discover_score": 0.09535500283599914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "benji e fede",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "giorgia cantante",
    "discover_score": 0.09527929319031735,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "celentano",
    "discover_score": 0.095241718341157,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "robert downey jr",
    "discover_score": 0.09520432787781902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "valentino rossi",
    "discover_score": 0.0951671201308383,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "benetton rugby",
    "discover_score": 0.09513009345269235,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "liberoquotidiano",
    "discover_score": 0.09509324621742406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "boca juniors",
    "discover_score": 0.09505657682027245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "monsanto",
    "discover_score": 0.0950200836773114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "piero villaggio figlio",
    "discover_score": 0.09498376522509583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "un alieno in patria",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "bonus animali domestici",
    "discover_score": 0.0949116462394545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "mls",
    "discover_score": 0.09487584267846207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "dan aykroyd",
    "discover_score": 0.09484020775242427,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "abruzzo",
    "discover_score": 0.09480473999524712,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "الريال ضد ليغانيز",
    "discover_score": 0.09476943795934413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "francesca michielin",
    "discover_score": 0.09473430021533075,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "alba",
    "discover_score": 0.09469932535172501,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "river plate - rosario central",
    "discover_score": 0.09466451197465411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "nicolò amici",
    "discover_score": 0.09462985870756711,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "claudia fusani",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "serie b classifica",
    "discover_score": 0.09456102708206598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "halle berry",
    "discover_score": 0.09452684605465266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "vasco rossi",
    "discover_score": 0.09449281979868923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "calendario roma",
    "discover_score": 0.09445894702012068,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "serie a classifica",
    "discover_score": 0.09442522644060614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "allegri allenatore",
    "discover_score": 0.09439165679726934,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "romanews",
    "discover_score": 0.09435823684245379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "livorno calcio",
    "discover_score": 0.09432496534348277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "barbra streisand",
    "discover_score": 0.09429184108242403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "penne",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.09422602947465646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "nec - az",
    "discover_score": 0.09419333976375065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "jacopo sol",
    "discover_score": 0.09416079256192349,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "andrea pisani",
    "discover_score": 0.09412838672159105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "primocanale",
    "discover_score": 0.0940961211085941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "como 1907",
    "discover_score": 0.09406399460199255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "rapid bucureşti - universitatea craiova",
    "discover_score": 0.09403200609386386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "hazzard",
    "discover_score": 0.09400015448910518,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "300",
    "discover_score": 0.09396843870523919,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "andrea delogu",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "hugh jackman",
    "discover_score": 0.09390541033226459,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "alessia pecchia",
    "discover_score": 0.09387409563963237,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "mauritius",
    "discover_score": 0.0938429125604821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "daniel craig",
    "discover_score": 0.09381186007267661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "nelson mandela",
    "discover_score": 0.09378093716561291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "meme",
    "discover_score": 0.09375014284005191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "chiara amici",
    "discover_score": 0.09371947610795114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "kolo muani",
    "discover_score": 0.09368893599230055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "marsiglia calcio",
    "discover_score": 0.09365852152696119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "conceicao",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "uma thurman",
    "discover_score": 0.0935980657360692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "daniel grassl",
    "discover_score": 0.0935680225311837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "sydney sweeney",
    "discover_score": 0.093538101217641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "triestina",
    "discover_score": 0.09350830088133903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "manuel bortuzzo",
    "discover_score": 0.09347862061813828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "real",
    "discover_score": 0.09344905953371982,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "bologna fc 1909",
    "discover_score": 0.09341961674344554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "braga - arouca",
    "discover_score": 0.09339029137222105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "matilde brandi figlie",
    "discover_score": 0.0933610825543608,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "carmine mare fuori",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "paolo mieli",
    "discover_score": 0.09330301116224317,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "sixers - heat",
    "discover_score": 0.09327414690247872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "marracash",
    "discover_score": 0.09324539582481085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "trani",
    "discover_score": 0.09321675710865725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "re carlo iii",
    "discover_score": 0.09318822994208342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "fratelli di crozza",
    "discover_score": 0.09315981352168344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "angela melillo",
    "discover_score": 0.09313150705246255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "de winter",
    "discover_score": 0.09310330974772196,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "khéphren thuram",
    "discover_score": 0.09307522082894545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "ghali",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "alejandro garnacho",
    "discover_score": 0.09301936507546586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "renzi",
    "discover_score": 0.09299159672364964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "monaco calcio",
    "discover_score": 0.0929639337233575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "zerbi",
    "discover_score": 0.09293637533535148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 315,
    "entity": "madonna",
    "discover_score": 0.09290892082793491,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 316,
    "entity": "ben affleck",
    "discover_score": 0.0928815694768517,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 317,
    "entity": "arona",
    "discover_score": 0.09285432056518728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 318,
    "entity": "moglie brignano",
    "discover_score": 0.09282717338327115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 319,
    "entity": "5g",
    "discover_score": 0.09280012722858091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 320,
    "entity": "vasto",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 321,
    "entity": "roma fc",
    "discover_score": 0.09274633522596569,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 322,
    "entity": "bending spoons",
    "discover_score": 0.09271958800789605,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 323,
    "entity": "tanzania",
    "discover_score": 0.09269293907658203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 324,
    "entity": "ishant sharma",
    "discover_score": 0.09266638776385823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 325,
    "entity": "giorgia cardinaletti",
    "discover_score": 0.09263993340816414,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 326,
    "entity": "espanyol atletico madrid",
    "discover_score": 0.09261357535445866,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 327,
    "entity": "il piccolo",
    "discover_score": 0.09258731295413598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 328,
    "entity": "nico gonzalez",
    "discover_score": 0.09256114556494273,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 329,
    "entity": "adolescence serie",
    "discover_score": 0.09253507255089652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 330,
    "entity": "robin minz",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 331,
    "entity": "عيد الفطر في ايطاليا",
    "discover_score": 0.09248320713519066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 332,
    "entity": "beşiktaş vs galatasaray",
    "discover_score": 0.09245741349220572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 333,
    "entity": "kelly",
    "discover_score": 0.09243171174156303,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 334,
    "entity": "laroma24",
    "discover_score": 0.09240610127745717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 335,
    "entity": "dusan vlahovic",
    "discover_score": 0.09238058149989105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 336,
    "entity": "emanuela orlandi",
    "discover_score": 0.09235515181460296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 337,
    "entity": "quando finisce il ramadan 2025",
    "discover_score": 0.09232981163299482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 338,
    "entity": "luca marini",
    "discover_score": 0.09230456037206136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 339,
    "entity": "bayern",
    "discover_score": 0.09227939745432066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 340,
    "entity": "the last of us",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 341,
    "entity": "adt - alianza lima",
    "discover_score": 0.09222933436569582,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 342,
    "entity": "todde",
    "discover_score": 0.09220443306685248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 343,
    "entity": "wolfsburg - heidenheim",
    "discover_score": 0.09217961785515158,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 344,
    "entity": "as roma news",
    "discover_score": 0.09215488817972012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 345,
    "entity": "eid ul fitr 2025 italy",
    "discover_score": 0.09213024349481246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 346,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.09210568325974791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 347,
    "entity": "catanzaro modena",
    "discover_score": 0.09208120693884903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 348,
    "entity": "satyanarayana raju",
    "discover_score": 0.09205681400138103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 349,
    "entity": "wta ranking",
    "discover_score": 0.09203250392149208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 350,
    "entity": "recco",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 351,
    "entity": "joao felix milan",
    "discover_score": 0.09198413025510604,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 352,
    "entity": "mara maionchi",
    "discover_score": 0.09196006564079447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 353,
    "entity": "dan sucu",
    "discover_score": 0.09193608182831947,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 354,
    "entity": "fc südtirol",
    "discover_score": 0.09191217831537823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 355,
    "entity": "shahrukh khan",
    "discover_score": 0.09188835460421053,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 356,
    "entity": "q",
    "discover_score": 0.09186461020154493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 357,
    "entity": "claudio lotito",
    "discover_score": 0.09184094461854578,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 358,
    "entity": "carpi gubbio",
    "discover_score": 0.09181735737076092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 359,
    "entity": "leali genoa",
    "discover_score": 0.09179384797807022,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-30 15:39:10",
  "trends_count": 359,
  "top_score": 17.86849220150134,
  "runtime_minutes": 2.6801085392634074,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
