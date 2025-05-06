const trendData = [
  {
    "rank": 12,
    "entity": "germania",
    "discover_score": 15.516748702780921,
    "score_1h": 64.22413793103448,
    "score_4h": 47.37394957983193,
    "score_7d": 19.346153846153847,
    "extracted_entities": "Germania - Paese - Europa - Berlino - Economia",
    "saturation_score": 1290.0
  },
  {
    "rank": 31,
    "entity": "vigevano",
    "discover_score": 12.16055877113038,
    "score_1h": 14.801724137931036,
    "score_4h": 8.565126050420169,
    "score_7d": 28.88757396449704,
    "extracted_entities": "Vigevano - Città - Lombardia - Turismo - Storia",
    "saturation_score": 215.0
  },
  {
    "rank": 1,
    "entity": "genoa - milan",
    "discover_score": 10.607808729751255,
    "score_1h": 42.13793103448276,
    "score_4h": 45.60714285714286,
    "score_7d": 3.405325443786982,
    "extracted_entities": "Genoa - Milan - Calcio - Serie A - Partita",
    "saturation_score": 1280.0
  },
  {
    "rank": 18,
    "entity": "bad bunny",
    "discover_score": 9.553342018833892,
    "score_1h": 57.98275862068965,
    "score_4h": 52.352941176470594,
    "score_7d": 10.340236686390533,
    "extracted_entities": "Bad Bunny - Musica - Artista - Reggaeton - Concerti",
    "saturation_score": 54.0
  },
  {
    "rank": 19,
    "entity": "conclave 2025",
    "discover_score": 8.766580471049386,
    "score_1h": 18.008620689655174,
    "score_4h": 14.052521008403362,
    "score_7d": 17.928994082840237,
    "extracted_entities": "Conclave - 2025 - Elezione Papa - Vaticano - Chiesa Cattolica",
    "saturation_score": 179.0
  },
  {
    "rank": 13,
    "entity": "gaza",
    "discover_score": 7.77577612646812,
    "score_1h": 20.71551724137931,
    "score_4h": 9.953781512605042,
    "score_7d": 15.479289940828401,
    "extracted_entities": "Gaza - Conflitto - Medio Oriente - Palestina - Striscia di Gaza",
    "saturation_score": 2760.0
  },
  {
    "rank": 3,
    "entity": "dove vedere inter barcellona",
    "discover_score": 7.01354396458983,
    "score_1h": 42.79310344827586,
    "score_4h": 44.16596638655462,
    "score_7d": 2.937869822485207,
    "extracted_entities": "Inter - Barcellona - Partita - Streaming - Calcio",
    "saturation_score": 9.0
  },
  {
    "rank": 4,
    "entity": "rihanna",
    "discover_score": 5.846762718993446,
    "score_1h": 42.51431911163063,
    "score_4h": 22.073529411764703,
    "score_7d": 5.813609467455621,
    "extracted_entities": "Rihanna - Cantante - Musica - Moda - Imprenditrice",
    "saturation_score": 649.0
  },
  {
    "rank": 43,
    "entity": "assegno unico maggio",
    "discover_score": 5.12951126150407,
    "score_1h": 1.5258620689655173,
    "score_4h": 0.44957983193277307,
    "score_7d": 15.955621301775148,
    "extracted_entities": "Assegno Unico - Maggio - Pagamenti - Famiglie - INPS",
    "saturation_score": 27.0
  },
  {
    "rank": 2,
    "entity": "tema met gala 2025",
    "discover_score": 5.042958922666444,
    "score_1h": 24.71551724137931,
    "score_4h": 9.184873949579831,
    "score_7d": 5.9171597633136095,
    "extracted_entities": "Met Gala - Tema - 2025",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "merz",
    "discover_score": 4.600600943987283,
    "score_1h": 42.577586206896555,
    "score_4h": 36.03361344537815,
    "score_7d": 2.2366863905325447,
    "extracted_entities": "Mercedes-Benz - Automobili - Industria automobilistica - Marchio di lusso",
    "saturation_score": 1520.0
  },
  {
    "rank": 25,
    "entity": "thuram",
    "discover_score": 4.29290975042516,
    "score_1h": 25.310344827586206,
    "score_4h": 14.590336134453782,
    "score_7d": 8.680473372781066,
    "extracted_entities": "Marcus Thuram - Lilian Thuram - Calcio - Borussia Mönchengladbach - Inter Milan",
    "saturation_score": 57.0
  },
  {
    "rank": 7,
    "entity": "jeep compass",
    "discover_score": 3.7796461616671846,
    "score_1h": 11.46551724137931,
    "score_4h": 11.96218487394958,
    "score_7d": 5.71301775147929,
    "extracted_entities": "Jeep - Compass - Auto - SUV - Veicoli",
    "saturation_score": 460.0
  },
  {
    "rank": 24,
    "entity": "annalisa",
    "discover_score": 2.098463521583071,
    "score_1h": 19.370689655172413,
    "score_4h": 4.367647058823529,
    "score_7d": 5.414201183431953,
    "extracted_entities": "Annalisa - Cantante - Musica - Italia - Album",
    "saturation_score": 216.0
  },
  {
    "rank": 10,
    "entity": "sophie codegoni",
    "discover_score": 2.060212855880179,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.36344537815126055,
    "score_7d": 5.4171597633136095,
    "extracted_entities": "Sophie Codegoni - Personaggio pubblico - Influencer - Reality TV",
    "saturation_score": 266.0
  },
  {
    "rank": 8,
    "entity": "live nation",
    "discover_score": 1.9830161627598555,
    "score_1h": 2.396551724137931,
    "score_4h": 1.5630252100840338,
    "score_7d": 4.680473372781066,
    "extracted_entities": "Live Nation - Concerti - Eventi - Musica - Biglietti",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "referendum 8 9 giugno cittadinanza",
    "discover_score": 1.8429377492543049,
    "score_1h": 4.543103448275862,
    "score_4h": 1.1302521008403361,
    "score_7d": 4.020710059171598,
    "extracted_entities": "Referendum - 8-9 giugno - Cittadinanza",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "yemen",
    "discover_score": 1.6635717051008467,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.6218487394957983,
    "score_7d": 5.115384615384615,
    "extracted_entities": "Yemen - Guerra civile - Crisi umanitaria - Medio Oriente - Conflitto armato",
    "saturation_score": 400.0
  },
  {
    "rank": 27,
    "entity": "alessia fabiani",
    "discover_score": 1.6298331822782384,
    "score_1h": 0.0,
    "score_4h": 0.12605042016806722,
    "score_7d": 5.295857988165681,
    "extracted_entities": "Alessia Fabiani - Personaggio pubblico - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 40,
    "entity": "irfis",
    "discover_score": 1.3374149616559308,
    "score_1h": 0.0,
    "score_4h": 0.6071428571428571,
    "score_7d": 4.541420118343195,
    "extracted_entities": "IRFIS - Finanziamenti - Sicilia - Imprese",
    "saturation_score": 3.0
  },
  {
    "rank": 48,
    "entity": "liliana resinovich",
    "discover_score": 1.3071766927639217,
    "score_1h": 0.0,
    "score_4h": 1.4243697478991597,
    "score_7d": 4.34319526627219,
    "extracted_entities": "Liliana Resinovich - Scomparsa - Caso di cronaca",
    "saturation_score": 66.0
  },
  {
    "rank": 47,
    "entity": "crystal palace - nottingham forest",
    "discover_score": 1.278568615366052,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.13655462184873948,
    "score_7d": 4.588757396449704,
    "extracted_entities": "Crystal Palace - Nottingham Forest - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 9,
    "entity": "treni garantiti sciopero trenitalia",
    "discover_score": 1.1884917369267272,
    "score_1h": 0.0,
    "score_4h": 0.7373949579831933,
    "score_7d": 3.029585798816568,
    "extracted_entities": "Treni - Sciopero - Trenitalia - Servizi garantiti",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "celtics - knicks",
    "discover_score": 1.1313421155414753,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5840336134453782,
    "score_7d": 3.8698224852071004,
    "extracted_entities": "Celtics - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "belve d abbraccio",
    "discover_score": 0.9343764042788583,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.3403361344537815,
    "score_7d": 3.3165680473372783,
    "extracted_entities": "Belve d'abbraccio - Serie TV - Personaggi - Trama - Episodi",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "asap rocky",
    "discover_score": 0.7876319397884503,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.6743697478991597,
    "score_7d": 2.680473372781065,
    "extracted_entities": "ASAP Rocky - Musica - Rap - Artista",
    "saturation_score": 6.0
  },
  {
    "rank": 44,
    "entity": "vittoria ceretti",
    "discover_score": 0.7726396700837204,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.28361344537815125,
    "score_7d": 2.6775147928994083,
    "extracted_entities": "Vittoria Ceretti - Modella - Moda - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "alessia orro",
    "discover_score": 0.726748570506704,
    "score_1h": 0.3898305084745763,
    "score_4h": 0.33193277310924374,
    "score_7d": 2.5,
    "extracted_entities": "Alessia Orro - Pallavolo - Italia",
    "saturation_score": 31.0
  },
  {
    "rank": 35,
    "entity": "jannik sinner tennis",
    "discover_score": 0.7005237426074392,
    "score_1h": 0.0,
    "score_4h": 0.5861344537815126,
    "score_7d": 2.230769230769231,
    "extracted_entities": "Jannik Sinner - Tennis - Giocatore - Sport - ATP",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "vittoria puccini",
    "discover_score": 0.6009442847148903,
    "score_1h": 3.474137931034483,
    "score_4h": 1.4285714285714286,
    "score_7d": 1.6005917159763314,
    "extracted_entities": "Vittoria Puccini - Attrice - Film - Serie TV - Italia",
    "saturation_score": 104.0
  },
  {
    "rank": 30,
    "entity": "pamela anderson",
    "discover_score": 0.5719132488210094,
    "score_1h": 2.568965517241379,
    "score_4h": 0.6974789915966386,
    "score_7d": 1.6715976331360949,
    "extracted_entities": "Pamela Anderson - Attrice - Modella - Baywatch - Attivismo",
    "saturation_score": 9.0
  },
  {
    "rank": 34,
    "entity": "thunder - nuggets",
    "discover_score": 0.5549930623558846,
    "score_1h": 0.0,
    "score_4h": 0.10714285714285714,
    "score_7d": 1.8106508875739644,
    "extracted_entities": "Thunder - Nuggets - NBA - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "sondaggio politico",
    "discover_score": 0.523807117269364,
    "score_1h": 2.439655172413793,
    "score_4h": 1.5126050420168067,
    "score_7d": 1.0,
    "extracted_entities": "Sondaggio - Politica - Opinione pubblica",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "matteo bassetti",
    "discover_score": 0.5164652213205503,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.9432773109243697,
    "score_7d": 1.4644970414201184,
    "extracted_entities": "Matteo Bassetti - Infettivologia - Sanità - COVID-19",
    "saturation_score": 36.0
  },
  {
    "rank": 22,
    "entity": "governo merz germania",
    "discover_score": 0.48836766984357705,
    "score_1h": 3.3189655172413794,
    "score_4h": 1.1029411764705883,
    "score_7d": 1.168639053254438,
    "extracted_entities": "Governo - Merz - Germania",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "luana ravegnini",
    "discover_score": 0.4841630757349899,
    "score_1h": 5.422413793103448,
    "score_4h": 1.5672268907563025,
    "score_7d": 0.9674556213017751,
    "extracted_entities": "Luana Ravegnini - Personaggio televisivo - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 14,
    "entity": "incidente raccordo oggi",
    "discover_score": 0.4601344945719597,
    "score_1h": 0.0,
    "score_4h": 0.41596638655462187,
    "score_7d": 1.1390532544378698,
    "extracted_entities": "Incidente - Raccordo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "matteo bassetti",
    "discover_score": 0.4318234954444781,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.9432773109243697,
    "score_7d": 1.4644970414201184,
    "extracted_entities": "Matteo Bassetti - Infettivologia - Sanità - COVID-19",
    "saturation_score": 36.0
  },
  {
    "rank": 20,
    "entity": "lucio manisco",
    "discover_score": 0.4249653203976689,
    "score_1h": 2.163793103448276,
    "score_4h": 0.657563025210084,
    "score_7d": 1.0355029585798816,
    "extracted_entities": "Lucio Manisco - Giornalista - Politica Italiana - Parlamento Europeo",
    "saturation_score": 47.0
  },
  {
    "rank": 16,
    "entity": "tomasz jakubiak",
    "discover_score": 0.35799280449266474,
    "score_1h": 0.0,
    "score_4h": 1.407563025210084,
    "score_7d": 0.5591715976331362,
    "extracted_entities": "Tomasz Jakubiak - Chef - Cucina - Programmi TV",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "chirichella",
    "discover_score": 0.320239062405573,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.33403361344537813,
    "score_7d": 0.7928994082840237,
    "extracted_entities": "Cristina Chirichella - Pallavolo - Italia - Nazionale Italiana - Sport",
    "saturation_score": 7.0
  },
  {
    "rank": 26,
    "entity": "max allegri",
    "discover_score": 0.3066943301395603,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.3088235294117647,
    "score_7d": 0.7337278106508875,
    "extracted_entities": "Massimiliano Allegri - Juventus - Allenatore di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "tailoring black style",
    "discover_score": 0.30549599851983816,
    "score_1h": 1.2413793103448276,
    "score_4h": 0.4957983193277311,
    "score_7d": 0.6449704142011834,
    "extracted_entities": "Tailoring - Black Style - Moda - Abbigliamento - Sartoria",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "milena brandao",
    "discover_score": 0.260145560890991,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.45378151260504207,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Milena Brandao",
    "saturation_score": 89.0
  },
  {
    "rank": 33,
    "entity": "fausto e iaio",
    "discover_score": 0.215390366222126,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.47633136094674555,
    "extracted_entities": "Fausto Tinelli - Lorenzo Iannucci - Omicidio - Milano - Anni di piombo",
    "saturation_score": 182.0
  },
  {
    "rank": 39,
    "entity": "gerri fiction rai trama",
    "discover_score": 0.20386587259372274,
    "score_1h": 0.0,
    "score_4h": 0.05042016806722689,
    "score_7d": 0.43195266272189353,
    "extracted_entities": "Gerri - Fiction - Rai - Trama",
    "saturation_score": 1.0
  },
  {
    "rank": 36,
    "entity": "giulio zeppieri",
    "discover_score": 0.19546882611199895,
    "score_1h": 0.0,
    "score_4h": 0.5483193277310925,
    "score_7d": 0.2603550295857988,
    "extracted_entities": "Giulio Zeppieri - Tennis - Giocatore",
    "saturation_score": 9.0
  },
  {
    "rank": 37,
    "entity": "mattia torre",
    "discover_score": 0.19217780631078712,
    "score_1h": 2.482758620689655,
    "score_4h": 0.6491596638655462,
    "score_7d": 0.22485207100591717,
    "extracted_entities": "Mattia Torre - Sceneggiatore - Regista - Commedia Italiana - Serie TV",
    "saturation_score": 38.0
  },
  {
    "rank": 29,
    "entity": "lulu sun",
    "discover_score": 0.16972869796877105,
    "score_1h": 1.7586206896551724,
    "score_4h": 0.592436974789916,
    "score_7d": 0.12721893491124261,
    "extracted_entities": "Lulu Sun - Tennis - Svizzera",
    "saturation_score": 44.0
  },
  {
    "rank": 46,
    "entity": "raphinha nazionale italiana",
    "discover_score": 0.1462918586576166,
    "score_1h": 0.0,
    "score_4h": 0.5546218487394958,
    "score_7d": 0.07396449704142012,
    "extracted_entities": "Raphinha - Nazionale Italiana - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "quasi orfano",
    "discover_score": 0.13847947483790213,
    "score_1h": 0.0,
    "score_4h": 0.20378151260504201,
    "score_7d": 0.11242603550295857,
    "extracted_entities": "Film - Commedia - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "allerta precipitazioni",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "ceferin",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "girona - mallorca",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "previsioni grandine veneto",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "3b meteo",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "livenation",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "meteo roma",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "castellina",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "giulia vecchio",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "bullet train",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "estrazione superenalotto",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "trani",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "claudio baglioni",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "tutto food milano",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "walter zenga",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "mia schem",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "dc vs srh",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "walter sabatini",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "crime",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "meteo torino",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "paolo vi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "invalsi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "milan oggi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "diana ross",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "jochen mass pilota",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "leao",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "antonella clerici",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "macfrut 2025",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "paredes",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "maria corleone 2",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "michael schumacher",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "kossounou",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "sandro bondi",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "maria chindamo",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "damson idris",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "edison",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "ciro ferrara",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "massimo cellino",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "sirmione",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "ippodromo milano",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "lollobrigida",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "papa paolo vi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "multan sultans vs peshawar zalmi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "serena barone attrice",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "federico chiesa liverpool",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "balotelli",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "simone susinna",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "sandra milo",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "elisabetta gregoraci",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "sofia",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "vieira",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "fcsb - dinamo bucurești",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "sabrina carpenter",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "eurovision 2025",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "milan news",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "monica setta",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "crystal palace vs nottm forest",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "meteo milano oggi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "roma today",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "meteo bologna",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "iva zanicchi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "bulgaria",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "brad pitt",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "gigi hadid",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "buon martedì 6 maggio",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "spalletti",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "biglietti milan bologna coppa italia",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "giorgio mastrota",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "oroscopo paolo fox oggi",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "ascolti tv the couple",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "paola iezzi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "meteo torino oggi",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "don matteo",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "l'eredità",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "palagano",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "inside man most wanted",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "sandra bullock",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "ralph fiennes",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "youssouf fofana",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "البنك الاهلي ضد الزمالك",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "estonia",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "massimo d'alema",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "casini",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "gears of war reloaded",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "bayesian",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "meteo firenze",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "metro milano",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "zendaya",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "charlène wittstock",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "norton cuffy",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "girona maiorca",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "cardinale filoni",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "nicolas maupas",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "morten frendrup",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "restaurant",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "albertini",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "isabella rossellini",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "bad bunny tour",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "colman domingo",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "una voce fuori dal coro trama",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "afd",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "rossella erra",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "fbi most wanted",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "sfl inps pagamenti",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "sinagra",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "letizia moratti",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "genoa cricket and football club",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "lacerenza",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "seychelles",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "joe manganiello",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "renato zero",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "francesco acquaroli",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "corrado formigli",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "manuel agnelli",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "film conclave",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "sorano",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "dan sucu",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "elisabetta canalis",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "vigilance précipitations",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "giovanardi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "gianmarco uomini e donne",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "elezioni comunali trentino ballottaggio",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "isabela merced",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "adam sandler",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "jorginho",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "calendario milan",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "lignano sabbiadoro",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "anne hathaway",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "legnago",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "bisegna",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "fermo",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "mottola",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "michael kors",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "kim basinger",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "the four seasons serie",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "monk",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "trial",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "diffidati serie a",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "colombia",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "andrea cambiaso",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "ticket master",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "cairo toro",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "raf",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "alberico evani",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "casa a prima vista",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "x",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "cameron norrie",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "raffaele palladino",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "milannews",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "zhao xintong",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "chi sceglie gianmarco di uomini e donne",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "the couple chiude",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-06 13:11:50",
  "trends_count": 206,
  "top_score": 15.516748702780921,
  "runtime_minutes": 7.561899534861246,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi, le stelle degli eventi tracciano tre temi centrali: la musica internazionale con artisti come Bad Bunny (#4), il calcio, con partite di rilievo come Genoa - Milan (#3) e il confronto Inter - Barcellona (#7), e le questioni globali e di attualità, illuminate da tematiche come il conflitto a Gaza (#6) e il conclave del 2025 (#5). I venti dei trend suggeriscono che 'Bad Bunny' è un'opportunità dorata su Google Discover grazie a un interessante punteggio recente e una saturazione di appena 54, promettendo potenziali narrazioni fresche e attraenti.\n\nAttenzione però, poiché dove \"Gaza\" offre un alto interesse, il suo alto grado di saturazione (2.760) avverte di una competizione serrata e di possibili incertezze dell'algoritmo: le acque qui sono tumultuose e si consiglia prudenza nel solcare argomenti già saturi.\n\nChi crea contenuti farebbe bene a incanalare il fervore delle attuali tendenze in articoli ben targetizzati e ad essere vigile per evitare i mari già infestati dalla competizione. L'intuito e il tempismo saranno le chiavi per sfruttare al meglio queste correnti digitali."
};
