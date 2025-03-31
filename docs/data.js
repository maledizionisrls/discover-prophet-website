const trendData = [
  {
    "rank": 1,
    "entity": "napoli - milan",
    "discover_score": 19.93292867132102,
    "score_1h": 71.20689655172413,
    "score_4h": 31.83823529411765,
    "score_7d": 2.896449704142012,
    "extracted_entities": "Napoli - Milan - Calcio - Serie A - Partita"
  },
  {
    "rank": 40,
    "entity": "meteo roma",
    "discover_score": 14.455615122322302,
    "score_1h": 64.70689655172414,
    "score_4h": 38.16321507682571,
    "score_7d": 14.70414201183432,
    "extracted_entities": "Meteo - Roma"
  },
  {
    "rank": 2,
    "entity": "inter - udinese",
    "discover_score": 14.324765529226994,
    "score_1h": 55.93702513150205,
    "score_4h": 33.36464083541367,
    "score_7d": 2.396449704142012,
    "extracted_entities": "Inter - Udinese - Calcio - Serie A - Partita"
  },
  {
    "rank": 4,
    "entity": "classifica motogp",
    "discover_score": 12.9811697675127,
    "score_1h": 51.258620689655174,
    "score_4h": 30.832381069582645,
    "score_7d": 3.964497041420118,
    "extracted_entities": "Classifica - MotoGP - Campionato - Piloti - Corse"
  },
  {
    "rank": 13,
    "entity": "novak djokovic",
    "discover_score": 11.049011816357362,
    "score_1h": 47.71551724137931,
    "score_4h": 27.506302521008404,
    "score_7d": 7.612426035502958,
    "extracted_entities": "Novak Djokovic - Tennis - ATP - Grand Slam - Serbia"
  },
  {
    "rank": 12,
    "entity": "coppa italia",
    "discover_score": 7.95707806201764,
    "score_1h": 23.793103448275865,
    "score_4h": 3.2941176470588234,
    "score_7d": 16.115384615384613,
    "extracted_entities": "Coppa Italia - Calcio - Competizione - Italia - Torneo"
  },
  {
    "rank": 32,
    "entity": "allerta vento",
    "discover_score": 6.611437785093703,
    "score_1h": 16.57758620689655,
    "score_4h": 23.107142857142854,
    "score_7d": 5.452662721893491,
    "extracted_entities": "Allerta - Vento - Meteo - Avviso"
  },
  {
    "rank": 9,
    "entity": "motogp classifica 2025",
    "discover_score": 6.278325200489449,
    "score_1h": 4.25,
    "score_4h": 17.611344537815125,
    "score_7d": 3.807692307692308,
    "extracted_entities": "MotoGP - Classifica - 2025"
  },
  {
    "rank": 27,
    "entity": "borsa italiana",
    "discover_score": 5.603336972275677,
    "score_1h": 54.81896551724138,
    "score_4h": 18.44747899159664,
    "score_7d": 5.06508875739645,
    "extracted_entities": "Borsa - Italia - Mercati finanziari - Investimenti"
  },
  {
    "rank": 11,
    "entity": "costanza",
    "discover_score": 4.021784877263739,
    "score_1h": 26.275862068965516,
    "score_4h": 13.925512464399986,
    "score_7d": 2.242603550295858,
    "extracted_entities": "Costanza - Nome proprio - Perseveranza - Stabilità"
  },
  {
    "rank": 30,
    "entity": "garlasco",
    "discover_score": 3.814894067884381,
    "score_1h": 13.905172413793103,
    "score_4h": 5.771650082627193,
    "score_7d": 8.428994082840237,
    "extracted_entities": "Garlasco - Omicidio - Chiara Poggi - Alberto Stasi - Processo"
  },
  {
    "rank": 34,
    "entity": "vinitaly",
    "discover_score": 2.70596764371858,
    "score_1h": 3.9224137931034484,
    "score_4h": 0.8088235294117647,
    "score_7d": 9.103550295857987,
    "extracted_entities": "Vinitaly - Vino - Fiera - Verona - Eventi enologici"
  },
  {
    "rank": 3,
    "entity": "fiorentina - atalanta",
    "discover_score": 1.8261721203790058,
    "score_1h": 5.948275862068966,
    "score_4h": 2.2626050420168067,
    "score_7d": 2.2337278106508878,
    "extracted_entities": "Fiorentina - Atalanta - Calcio - Serie A - Partita"
  },
  {
    "rank": 5,
    "entity": "richard chamberlain",
    "discover_score": 1.731420580155564,
    "score_1h": 4.810344827586206,
    "score_4h": 2.6260504201680672,
    "score_7d": 2.3520710059171597,
    "extracted_entities": "Richard Chamberlain - Attore - Cinema - Televisione - Hollywood"
  },
  {
    "rank": 15,
    "entity": "ticketmaster",
    "discover_score": 1.210141902018836,
    "score_1h": 22.21551724137931,
    "score_4h": 2.302978095003692,
    "score_7d": 2.2366863905325443,
    "extracted_entities": "Ticketmaster - Vendita biglietti - Eventi - Concerti - Spettacoli"
  },
  {
    "rank": 21,
    "entity": "partinico",
    "discover_score": 0.9726140418091405,
    "score_1h": 8.71551724137931,
    "score_4h": 1.5819327731092439,
    "score_7d": 2.2071005917159763,
    "extracted_entities": "Partinico - Sicilia - Comune - Italia"
  },
  {
    "rank": 8,
    "entity": "daniel craig",
    "discover_score": 0.9475395436707226,
    "score_1h": 3.060344827586207,
    "score_4h": 2.147058823529412,
    "score_7d": 1.1715976331360947,
    "extracted_entities": "Daniel Craig - Attore - James Bond - Film"
  },
  {
    "rank": 6,
    "entity": "barcellona - girona",
    "discover_score": 0.9431665456183932,
    "score_1h": 1.646551724137931,
    "score_4h": 0.29307162195422104,
    "score_7d": 2.192307692307692,
    "extracted_entities": "Barcellona - Girona - Viaggio - Turismo - Spagna"
  },
  {
    "rank": 18,
    "entity": "federica pellegrini",
    "discover_score": 0.9022909338484034,
    "score_1h": 0.0,
    "score_4h": 0.3445378151260504,
    "score_7d": 2.7662721893491122,
    "extracted_entities": "Federica Pellegrini - Nuoto - Olimpiadi - Italia - Record"
  },
  {
    "rank": 31,
    "entity": "biglietti lady gaga",
    "discover_score": 0.8656429804900679,
    "score_1h": 12.408825248392754,
    "score_4h": 2.9894957983193278,
    "score_7d": 1.1420118343195267,
    "extracted_entities": "Biglietti - Lady Gaga - Concerti - Tour"
  },
  {
    "rank": 23,
    "entity": "salernitana - palermo",
    "discover_score": 0.7630140345062348,
    "score_1h": 0.0,
    "score_4h": 0.39285714285714285,
    "score_7d": 2.378698224852071,
    "extracted_entities": "Salernitana - Palermo - Calcio - Serie B - Partita"
  },
  {
    "rank": 20,
    "entity": "proroga polizze catastrofali",
    "discover_score": 0.7501563562231928,
    "score_1h": 5.56896551724138,
    "score_4h": 0.7514679511972153,
    "score_7d": 1.982248520710059,
    "extracted_entities": "Proroga - Polizze - Catastrofali"
  },
  {
    "rank": 26,
    "entity": "avellino - benevento",
    "discover_score": 0.7264650823588418,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.6176470588235293,
    "score_7d": 2.136094674556213,
    "extracted_entities": "Avellino - Benevento - Calcio - Derby - Serie B"
  },
  {
    "rank": 10,
    "entity": "uccelli di rovo",
    "discover_score": 0.6821299506395422,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.792016806722689,
    "score_7d": 1.3698224852071006,
    "extracted_entities": "Uccelli di rovo - Romanzo - Colleen McCullough - Serie TV - Australia"
  },
  {
    "rank": 7,
    "entity": "bonus bollette 200 euro",
    "discover_score": 0.6686610977942099,
    "score_1h": 2.189655172413793,
    "score_4h": 1.4314985408389296,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Bonus - Bollette - 200 Euro"
  },
  {
    "rank": 19,
    "entity": "buon lunedi 31 marzo",
    "discover_score": 0.5544760175667818,
    "score_1h": 1.9310344827586208,
    "score_4h": 2.8495745578566156,
    "score_7d": 0.121301775147929,
    "extracted_entities": "Lunedì - 31 marzo - Giorno della settimana"
  },
  {
    "rank": 43,
    "entity": "azioni tim",
    "discover_score": 0.5540109746270391,
    "score_1h": 1.0862068965517242,
    "score_4h": 0.7142857142857143,
    "score_7d": 1.5828402366863905,
    "extracted_entities": "Azioni - TIM - Mercato azionario"
  },
  {
    "rank": 36,
    "entity": "milan inter coppa italia",
    "discover_score": 0.5387911174746698,
    "score_1h": 0.853448275862069,
    "score_4h": 1.01890756302521,
    "score_7d": 1.2218934911242605,
    "extracted_entities": "Milan - Inter - Coppa Italia - Calcio - Derby"
  },
  {
    "rank": 33,
    "entity": "tonga",
    "discover_score": 0.5317570284943924,
    "score_1h": 0.0,
    "score_4h": 0.8235294117647058,
    "score_7d": 1.2988165680473371,
    "extracted_entities": "Tonga - Oceania - Isole del Pacifico - Vulcani - Tsunami"
  },
  {
    "rank": 17,
    "entity": "cagliari - monza",
    "discover_score": 0.5133616171082396,
    "score_1h": 2.1810344827586206,
    "score_4h": 0.5357142857142857,
    "score_7d": 1.183431952662722,
    "extracted_entities": "Cagliari - Monza - Calcio - Serie A - Partita"
  },
  {
    "rank": 16,
    "entity": "donald trump groenlandia",
    "discover_score": 0.49870931437431976,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.3431952662721893,
    "extracted_entities": "Donald Trump - Groenlandia - Acquisto - Politica internazionale"
  },
  {
    "rank": 14,
    "entity": "drone russo lago maggiore",
    "discover_score": 0.4943902493492129,
    "score_1h": 0.45689655172413796,
    "score_4h": 0.1780967617172392,
    "score_7d": 1.301775147928994,
    "extracted_entities": "Drone - Russia - Lago Maggiore"
  },
  {
    "rank": 22,
    "entity": "terremoto thailandia morti",
    "discover_score": 0.4874737989610625,
    "score_1h": 2.353448275862069,
    "score_4h": 0.7226890756302522,
    "score_7d": 1.0414201183431953,
    "extracted_entities": "Terremoto - Thailandia - Vittime"
  },
  {
    "rank": 45,
    "entity": "mctominay",
    "discover_score": 0.4664966165767775,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.1656323617313034,
    "score_7d": 1.6213017751479288,
    "extracted_entities": "Scott McTominay - Calciatore - Manchester United - Premier League - Scozia"
  },
  {
    "rank": 41,
    "entity": "carrarese - bari",
    "discover_score": 0.3955733480403633,
    "score_1h": 0.0,
    "score_4h": 0.3484582117365775,
    "score_7d": 1.1153846153846154,
    "extracted_entities": "Carrarese - Bari - Calcio - Partita - Serie C"
  },
  {
    "rank": 29,
    "entity": "careca",
    "discover_score": 0.3316689121128522,
    "score_1h": 0.0,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.7958579881656805,
    "extracted_entities": "Calcio - Napoli - Brasile - Giocatori di calcio - Anni '80"
  },
  {
    "rank": 49,
    "entity": "tonga terremoto",
    "discover_score": 0.3307326124217351,
    "score_1h": 0.0,
    "score_4h": 0.052521008403361345,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Tonga - Terremoto - Evento sismico"
  },
  {
    "rank": 46,
    "entity": "roberto vecchioni",
    "discover_score": 0.3268240861992676,
    "score_1h": 0.0,
    "score_4h": 0.15966386554621848,
    "score_7d": 0.9585798816568047,
    "extracted_entities": "Roberto Vecchioni - Cantautore - Musica Italiana"
  },
  {
    "rank": 48,
    "entity": "calendario inter",
    "discover_score": 0.30344015191229323,
    "score_1h": 0.0,
    "score_4h": 0.43277310924369744,
    "score_7d": 0.6508875739644971,
    "extracted_entities": "Calendario - Inter - Partite - Serie A - Eventi sportivi"
  },
  {
    "rank": 38,
    "entity": "spurs - warriors",
    "discover_score": 0.27976128169727726,
    "score_1h": 0.0,
    "score_4h": 0.46218487394957986,
    "score_7d": 0.4704142011834319,
    "extracted_entities": "San Antonio Spurs - Golden State Warriors - NBA - Partita di basket - Squadre di basket"
  },
  {
    "rank": 39,
    "entity": "vladimir putin",
    "discover_score": 0.2628490261827688,
    "score_1h": 0.0,
    "score_4h": 1.229000386765585,
    "score_7d": 0.014792899408284023,
    "extracted_entities": "Vladimir Putin - Politica russa - Presidente della Russia"
  },
  {
    "rank": 35,
    "entity": "afc bournemouth - manchester city",
    "discover_score": 0.23335733950938198,
    "score_1h": 1.6551724137931034,
    "score_4h": 0.3130252100840336,
    "score_7d": 0.3402366863905325,
    "extracted_entities": "AFC Bournemouth - Manchester City - Partita di calcio - Premier League"
  },
  {
    "rank": 25,
    "entity": "live nation",
    "discover_score": 0.23208239756717894,
    "score_1h": 0.0,
    "score_4h": 0.299690587532084,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Live Nation - Concerti - Eventi musicali - Promozione eventi - Industria musicale"
  },
  {
    "rank": 28,
    "entity": "razzo spectrum",
    "discover_score": 0.2161780409818085,
    "score_1h": 0.0,
    "score_4h": 0.014705882352941176,
    "score_7d": 0.42899408284023666,
    "extracted_entities": "Razzo - Spectrum - Spazio - Lanci - Tecnologia"
  },
  {
    "rank": 50,
    "entity": "pro vercelli - vicenza",
    "discover_score": 0.2150869279640715,
    "score_1h": 0.0,
    "score_4h": 0.20378151260504201,
    "score_7d": 0.378698224852071,
    "extracted_entities": "Pro Vercelli - Vicenza - Calcio - Serie C - Partita"
  },
  {
    "rank": 44,
    "entity": "cesena - juve stabia",
    "discover_score": 0.19505723830817345,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.2327977215990999,
    "score_7d": 0.24260355029585798,
    "extracted_entities": "Cesena - Juve Stabia - Calcio - Partita - Serie C"
  },
  {
    "rank": 24,
    "entity": "giuditta lualdi",
    "discover_score": 0.17321220751928268,
    "score_1h": 1.0689655172413792,
    "score_4h": 0.2605042016806723,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Giuditta Lualdi"
  },
  {
    "rank": 37,
    "entity": "andrea pirlo",
    "discover_score": 0.1593179129360516,
    "score_1h": 1.456896551724138,
    "score_4h": 0.25840336134453784,
    "score_7d": 0.05029585798816568,
    "extracted_entities": "Andrea Pirlo - Calciatore - Allenatore - Juventus - Milan"
  },
  {
    "rank": 47,
    "entity": "davide frattesi",
    "discover_score": 0.14735495277705873,
    "score_1h": 0.0,
    "score_4h": 0.1953781512605042,
    "score_7d": 0.05029585798816568,
    "extracted_entities": "Davide Frattesi - Calciatore - Serie A - Sassuolo - Italia"
  },
  {
    "rank": 42,
    "entity": "serena garitta",
    "discover_score": 0.13970402030262047,
    "score_1h": 0.25,
    "score_4h": 0.029411764705882353,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Serena Garitta - Personaggio televisivo - Grande Fratello - Italia"
  },
  {
    "rank": 51,
    "entity": "weather",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "atp ranking",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "volkan konak",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "3b meteo",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "diego de vivo",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "feyenoord - go ahead eagles",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "meteo milano",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "prandelli",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "trapani - catania",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "betis - siviglia",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "loftus cheek",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "unica",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "suns - rockets",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "gand wevelgem 2025",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "atalanta u-23 - padova",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "lucchese - ternana",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "audace cerignola - monopoli",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "monfalcone",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "psv eindhoven - ajax",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "buongiorno lunedi 31 marzo",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "classifica atp",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "3bmeteo",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "spal - legnago",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "deutsche bank",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "timberwolves - pistons",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "barbara bouchet",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "patty pravo",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "arera",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "borussia dortmund - mainz",
    "discover_score": 0.10660790403530267,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "dove vedere inter udinese",
    "discover_score": 0.10646514650027929,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "gigi d'alessio",
    "discover_score": 0.10632453699023645,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "danimarca groenlandia trump",
    "discover_score": 0.10618601677886443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "rr vs csk",
    "discover_score": 0.10604952944488055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "bucks - hawks",
    "discover_score": 0.10591502075484019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "tuttonapoli",
    "discover_score": 0.10578243855322951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "senatore giacomo caliendo",
    "discover_score": 0.10565173265930743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "pioli",
    "discover_score": 0.10552285477020852,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "barcelona vs girona",
    "discover_score": 0.10539575836985944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.10527039864329803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "sofia raffaeli",
    "discover_score": 0.10514673239601775,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "antonio albanese",
    "discover_score": 0.10502471797798994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "potenza - giugliano",
    "discover_score": 0.10490431521204421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "santiago giménez",
    "discover_score": 0.10478548532631286,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "edoardo mangano",
    "discover_score": 0.10466819089046668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "arianna manfredini volley",
    "discover_score": 0.10455239575549213,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "estoril praia - porto",
    "discover_score": 0.10443806499677748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "sarzana",
    "discover_score": 0.10432516486029392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "nunzia de girolamo",
    "discover_score": 0.1042136627116727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "guenda goria",
    "discover_score": 0.10410352698799526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "partite inter",
    "discover_score": 0.10399472715212489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "cavaliers - clippers",
    "discover_score": 0.10388723364942297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "milan news",
    "discover_score": 0.10378101786670191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "carlo taranto gialappa",
    "discover_score": 0.1036760520932791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "axios",
    "discover_score": 0.1035723094840047,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "dennis quaid",
    "discover_score": 0.10346976402414519,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "jorge martin",
    "discover_score": 0.10336839049601293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "srh vs dc",
    "discover_score": 0.10326816444723902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "ascoli - vis pesaro",
    "discover_score": 0.10316906216059425,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "yungblud",
    "discover_score": 0.10307106062526858,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "stefania cappa",
    "discover_score": 0.10297413750952632,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "miami open 2025",
    "discover_score": 0.10287827113465892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "club brugge - anderlecht",
    "discover_score": 0.10278344045016281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "preston - aston villa",
    "discover_score": 0.10268962501007417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "francesco acerbi",
    "discover_score": 0.10259680495039697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "di giannantonio",
    "discover_score": 0.10250496096756462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "leao",
    "discover_score": 0.10241407429787938,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "simona ventura",
    "discover_score": 0.10232412669787708,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "gianni bugno",
    "discover_score": 0.10223510042556766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "lobotka",
    "discover_score": 0.102146978222506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "trento - brescia",
    "discover_score": 0.10205974329664895,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "luca guadagnino",
    "discover_score": 0.10197337930595829,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "gabbani",
    "discover_score": 0.10188787034271098,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "darderi",
    "discover_score": 0.10180320091848082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "pistoia - trieste",
    "discover_score": 0.10171935594975741,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "antropova",
    "discover_score": 0.10163632074417069,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "matteo salvini",
    "discover_score": 0.10155408098729052,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "moto 2",
    "discover_score": 0.10147262272997333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "reggina vibonese",
    "discover_score": 0.10139193237622872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "anna pepe",
    "discover_score": 0.10131199667158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "weather tomorrow",
    "discover_score": 0.10123280269190177,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "verona parma",
    "discover_score": 0.1011543378326903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "eclissi lunare",
    "discover_score": 0.10107658979878206,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "gosens",
    "discover_score": 0.10099954659446342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "ios 18.4",
    "discover_score": 0.10092319651397456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "trade republic",
    "discover_score": 0.10084752813238243,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "dinamo bucurești - fcsb",
    "discover_score": 0.10077253029680652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "independence day",
    "discover_score": 0.10069819211798135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "lorena quaranta",
    "discover_score": 0.10062450296214058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "warren bondo",
    "discover_score": 0.1005514524432079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "superbike oggi",
    "discover_score": 0.10047903041528129,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "udine - fortitudo bologna",
    "discover_score": 0.10040722696539747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "calendario",
    "discover_score": 0.10033603240656422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "castellabate",
    "discover_score": 0.10026543727104871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "getafe - villarreal",
    "discover_score": 0.10019543230391097,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "rimini - sestri levante",
    "discover_score": 0.10012600845677155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "ettore bassi",
    "discover_score": 0.10005715688180375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "varese - scafati",
    "discover_score": 0.09998886892594035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "eleonora cecere",
    "discover_score": 0.09992113612528634,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "calvi",
    "discover_score": 0.09985395019972848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "venezia - derthona",
    "discover_score": 0.09978730304773362,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "romelu lukaku",
    "discover_score": 0.09972118674132832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "lille lens",
    "discover_score": 0.09965559352125167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "meteo pescara",
    "discover_score": 0.0995905157922747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "inter news",
    "discover_score": 0.09952594611867945,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "notizie",
    "discover_score": 0.0994618772198912,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "betis siviglia",
    "discover_score": 0.09939830196625789,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "the life list",
    "discover_score": 0.09933521337497048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "newell's old boys - boca juniors",
    "discover_score": 0.09927260460611927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "stefano bartezzaghi",
    "discover_score": 0.09921046895888021,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "cristina seymandi",
    "discover_score": 0.0991487998678265,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "meteo.it",
    "discover_score": 0.09908759089936048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "anticipazioni tradimento 30 marzo",
    "discover_score": 0.0990268357482612,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "roby facchinetti",
    "discover_score": 0.09896652823434314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "meteo messina",
    "discover_score": 0.09890666229922199,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "antonio conte",
    "discover_score": 0.0988472320031833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "matilda de angelis",
    "discover_score": 0.09878823152215013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "isernia",
    "discover_score": 0.09872965514474617,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "rudy zerbi",
    "discover_score": 0.09867149726945039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "oumar solet",
    "discover_score": 0.09861375240184032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "serie a femminile",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "nuova scena 2",
    "discover_score": 0.098499480231532,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "gabriele paolini eredità",
    "discover_score": 0.09844294245184321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "valencia - mallorca",
    "discover_score": 0.09838679672091392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "johnny depp",
    "discover_score": 0.09833103804133506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "pafundi",
    "discover_score": 0.0982756615079381,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "isar aerospace spectrum",
    "discover_score": 0.09822066230557329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "ramona bachmann",
    "discover_score": 0.09816603570695347,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "licata siracusa",
    "discover_score": 0.09811177707056148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "joao felix",
    "discover_score": 0.09805788183861917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "daniel pennac",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "molise",
    "discover_score": 0.09795116376389046,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "michelle hunziker",
    "discover_score": 0.09789833220677814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "luca marini",
    "discover_score": 0.0978458466217977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "trento - albinoleffe",
    "discover_score": 0.09779370284140003,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "moto 3",
    "discover_score": 0.09774189677076232,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "pantelleria",
    "discover_score": 0.09769042438613113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "albanese",
    "discover_score": 0.09763928173321193,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "podcast",
    "discover_score": 0.09758846492560365,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "minecraft film",
    "discover_score": 0.09753797014327643,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "paola minaccioni",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "betis",
    "discover_score": 0.09743793169736248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "peter gomez un alieno in patria",
    "discover_score": 0.09738838071245375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "taremi",
    "discover_score": 0.09733913710741988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "cremona - universo treviso",
    "discover_score": 0.09729019737267972,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "oroscopo oggi capricorno paolo fox",
    "discover_score": 0.09724155805672677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "luciana littizzetto",
    "discover_score": 0.09719321576487423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "virtus verona - pro patria",
    "discover_score": 0.09714516715803326,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "grok ai",
    "discover_score": 0.09709740895152358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "kevin costner",
    "discover_score": 0.09704993791391554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "franco antonello",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "aviano",
    "discover_score": 0.09695584467920225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "bengasi",
    "discover_score": 0.09690921627548794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "anna tatangelo",
    "discover_score": 0.0968628626253454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "fire damage restoration",
    "discover_score": 0.09681678074725798,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "rachel weisz",
    "discover_score": 0.09677096770661728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "madonie",
    "discover_score": 0.09672542061475889,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "vl pesaro - libertas livorno",
    "discover_score": 0.0966801366280226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "brindisi - ueb cividale",
    "discover_score": 0.09663511294683641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "fabio paratici",
    "discover_score": 0.09659034681482327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "tg",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.09650157638358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "tagikistan",
    "discover_score": 0.09645756677984114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "alba",
    "discover_score": 0.09641380411462185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "athletic bilbao osasuna",
    "discover_score": 0.09637028583488115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "trapani calcio",
    "discover_score": 0.09632700942586017,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "valentino rossi",
    "discover_score": 0.09628397241033204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "james bond",
    "discover_score": 0.09624117234786977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "meteo brescia",
    "discover_score": 0.09619860683413181,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "le iene stasera",
    "discover_score": 0.09615627350016469,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "serie c girone b",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "lewandowski",
    "discover_score": 0.09607229406860092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "manuale per signorine",
    "discover_score": 0.09603064340399105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "ticketone",
    "discover_score": 0.09598921578384295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "marco liorni",
    "discover_score": 0.09594800900624814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "denise esposito",
    "discover_score": 0.09590702090083489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "mattia esposito",
    "discover_score": 0.09586624932817771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "x down",
    "discover_score": 0.09582569217922066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "lampedusa",
    "discover_score": 0.09578534737471363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "martin",
    "discover_score": 0.09574521286466178,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "mother's day",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "atalanta bergamasca calcio",
    "discover_score": 0.09566556667100377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "aniket verma",
    "discover_score": 0.0956260510289015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "aldeguer",
    "discover_score": 0.09558673776324564,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "battocletti",
    "discover_score": 0.09554762496248463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "ginevra",
    "discover_score": 0.09550871074127001,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "frascati accoltellato",
    "discover_score": 0.09546999323998659,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "real betis vs sevilla",
    "discover_score": 0.09543147062429341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "ostuni",
    "discover_score": 0.0953931410846744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "guido meda",
    "discover_score": 0.09535500283599914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "rolex",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "la nove diretta",
    "discover_score": 0.09527929319031735,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "altamura",
    "discover_score": 0.095241718341157,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "christopher nolan",
    "discover_score": 0.09520432787781902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "meteolive",
    "discover_score": 0.0951671201308383,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "cantù - verona",
    "discover_score": 0.09513009345269235,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "sofia loren",
    "discover_score": 0.09509324621742406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "ngonge",
    "discover_score": 0.09505657682027245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "fc barcelona",
    "discover_score": 0.0950200836773114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "alex jimenez",
    "discover_score": 0.09498376522509583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "austin motogp",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "sampdoria - sassuolo",
    "discover_score": 0.0949116462394545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "villanterio",
    "discover_score": 0.09487584267846207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "friburgo - union berlino",
    "discover_score": 0.09484020775242427,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "aldo cazzullo",
    "discover_score": 0.09480473999524712,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "zagrebelsky",
    "discover_score": 0.09476943795934413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "eraldo pecci",
    "discover_score": 0.09473430021533075,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "bossetti",
    "discover_score": 0.09469932535172501,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "affari tuoi",
    "discover_score": 0.09466451197465411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "jack black",
    "discover_score": 0.09462985870756711,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "بورنموث ضد مان سيتي",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "spinea",
    "discover_score": 0.09456102708206598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "messaggero",
    "discover_score": 0.09452684605465266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "oslo",
    "discover_score": 0.09449281979868923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "mel gibson",
    "discover_score": 0.09445894702012068,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "robin wright",
    "discover_score": 0.09442522644060614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "zaniolo",
    "discover_score": 0.09439165679726934,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "taiwan",
    "discover_score": 0.09435823684245379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "menfi",
    "discover_score": 0.09432496534348277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "il giornale di vicenza",
    "discover_score": 0.09429184108242403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "tammy abraham",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "roberto bolle",
    "discover_score": 0.09422602947465646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "real betis",
    "discover_score": 0.09419333976375065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "belfast",
    "discover_score": 0.09416079256192349,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "algarve",
    "discover_score": 0.09412838672159105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "maria teresa ruta",
    "discover_score": 0.0940961211085941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "tommaso cassissa",
    "discover_score": 0.09406399460199255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "inter bayern monaco",
    "discover_score": 0.09403200609386386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "jimenez milan",
    "discover_score": 0.09400015448910518,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "diletta leotta",
    "discover_score": 0.09396843870523919,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "ncis origins",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "lanzarote",
    "discover_score": 0.09390541033226459,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "turchia istanbul",
    "discover_score": 0.09387409563963237,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "eredivisie",
    "discover_score": 0.0938429125604821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "varsavia",
    "discover_score": 0.09381186007267661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "classifica serie c",
    "discover_score": 0.09378093716561291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "bari",
    "discover_score": 0.09375014284005191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "julio iglesias",
    "discover_score": 0.09371947610795114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "bouchet",
    "discover_score": 0.09368893599230055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "san vito lo capo",
    "discover_score": 0.09365852152696119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "iran",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "serie d girone i",
    "discover_score": 0.0935980657360692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "matilde de angelis",
    "discover_score": 0.0935680225311837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "sky",
    "discover_score": 0.093538101217641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "beyonce",
    "discover_score": 0.09350830088133903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "meredith kercher",
    "discover_score": 0.09347862061813828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "serie a oggi risultati e classifica",
    "discover_score": 0.09344905953371982,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "rafael leão",
    "discover_score": 0.09341961674344554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "il post",
    "discover_score": 0.09339029137222105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "psv ajax",
    "discover_score": 0.0933610825543608,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "porto fc",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "lorenzo lucca",
    "discover_score": 0.09330301116224317,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "heath ledger",
    "discover_score": 0.09327414690247872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "the last of us",
    "discover_score": 0.09324539582481085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "costa rica",
    "discover_score": 0.09321675710865725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "nuova zelanda",
    "discover_score": 0.09318822994208342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "val di fassa",
    "discover_score": 0.09315981352168344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "tennis live",
    "discover_score": 0.09313150705246255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "cuadrado",
    "discover_score": 0.09310330974772196,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "juan jesus",
    "discover_score": 0.09307522082894545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "picierno",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "pippo franco",
    "discover_score": 0.09301936507546586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "e poi si vede film",
    "discover_score": 0.09299159672364964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "vico equense",
    "discover_score": 0.0929639337233575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "keita balde",
    "discover_score": 0.09293637533535148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 315,
    "entity": "city",
    "discover_score": 0.09290892082793491,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 316,
    "entity": "foreign fighter",
    "discover_score": 0.0928815694768517,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 317,
    "entity": "ellen hidding",
    "discover_score": 0.09285432056518728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 318,
    "entity": "nato",
    "discover_score": 0.09282717338327115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 319,
    "entity": "pellegrini",
    "discover_score": 0.09280012722858091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 320,
    "entity": "bezzecchi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 321,
    "entity": "onu",
    "discover_score": 0.09274633522596569,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 322,
    "entity": "meteo milano oggi",
    "discover_score": 0.09271958800789605,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 323,
    "entity": "irlanda",
    "discover_score": 0.09269293907658203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 324,
    "entity": "classifica serie c girone c",
    "discover_score": 0.09266638776385823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 325,
    "entity": "l'ultima gara",
    "discover_score": 0.09263993340816414,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 326,
    "entity": "ugento casarano",
    "discover_score": 0.09261357535445866,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 327,
    "entity": "mare fuori 6 quando esce",
    "discover_score": 0.09258731295413598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 328,
    "entity": "nesta",
    "discover_score": 0.09256114556494273,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 329,
    "entity": "linea verde",
    "discover_score": 0.09253507255089652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 330,
    "entity": "il vangelo di oggi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 331,
    "entity": "nicoletta strambelli",
    "discover_score": 0.09248320713519066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 332,
    "entity": "premier padel",
    "discover_score": 0.09245741349220572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 333,
    "entity": "psv",
    "discover_score": 0.09243171174156303,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 334,
    "entity": "malta",
    "discover_score": 0.09240610127745717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 335,
    "entity": "davide simonetta",
    "discover_score": 0.09238058149989105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 336,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.09235515181460296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 337,
    "entity": "mezza maratona d'italia",
    "discover_score": 0.09232981163299482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 338,
    "entity": "cipro",
    "discover_score": 0.09230456037206136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 339,
    "entity": "lazio torino formazioni",
    "discover_score": 0.09227939745432066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 340,
    "entity": "athletic bilbao",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 341,
    "entity": "zeeshan ansari",
    "discover_score": 0.09222933436569582,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 342,
    "entity": "carrara",
    "discover_score": 0.09220443306685248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 343,
    "entity": "formula 1 gp giappone",
    "discover_score": 0.09217961785515158,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 344,
    "entity": "golden bachelor",
    "discover_score": 0.09215488817972012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 345,
    "entity": "classifica serie a femminile",
    "discover_score": 0.09213024349481246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 346,
    "entity": "holland",
    "discover_score": 0.09210568325974791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 347,
    "entity": "thauvin",
    "discover_score": 0.09208120693884903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 348,
    "entity": "ravenna calcio",
    "discover_score": 0.09205681400138103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 349,
    "entity": "mattia guadagnini",
    "discover_score": 0.09203250392149208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 350,
    "entity": "tropea",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 351,
    "entity": "luna",
    "discover_score": 0.09198413025510604,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 352,
    "entity": "inter biglietti",
    "discover_score": 0.09196006564079447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 353,
    "entity": "adolescence serie",
    "discover_score": 0.09193608182831947,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 354,
    "entity": "pam",
    "discover_score": 0.09191217831537823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 355,
    "entity": "andrea berta",
    "discover_score": 0.09188835460421053,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 356,
    "entity": "avvenire",
    "discover_score": 0.09186461020154493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 357,
    "entity": "di marco",
    "discover_score": 0.09184094461854578,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 358,
    "entity": "foligno",
    "discover_score": 0.09181735737076092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 359,
    "entity": "targato cn",
    "discover_score": 0.09179384797807022,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 360,
    "entity": "calendario fiorentina",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 361,
    "entity": "di lorenzo",
    "discover_score": 0.09174706085884692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 362,
    "entity": "programmi canale 5 oggi",
    "discover_score": 0.09172378219328091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 363,
    "entity": "serie d girone d",
    "discover_score": 0.09170057950464437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 364,
    "entity": "san giorgio a cremano",
    "discover_score": 0.09167745233373036,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 365,
    "entity": "djuric",
    "discover_score": 0.09165440022537019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 366,
    "entity": "bautista",
    "discover_score": 0.09163142272838692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 367,
    "entity": "ambra angiolini",
    "discover_score": 0.0916085193955494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 368,
    "entity": "gardaland",
    "discover_score": 0.09158568978352717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 369,
    "entity": "mauritius",
    "discover_score": 0.0915629334528458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 370,
    "entity": "abruzzo",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 371,
    "entity": "giro delle fiandre 2025",
    "discover_score": 0.09151763889662515,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 372,
    "entity": "arona",
    "discover_score": 0.09149509981102479,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 373,
    "entity": "alejandro garnacho",
    "discover_score": 0.09147263228655836,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-31 08:49:35",
  "trends_count": 373,
  "top_score": 19.93292867132102,
  "runtime_minutes": 4.343040875593821,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
