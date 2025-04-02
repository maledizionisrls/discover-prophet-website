const trendData = [
  {
    "rank": 1,
    "entity": "val kilmer",
    "discover_score": 12.323726548127881,
    "score_1h": 64.11206896551724,
    "score_4h": 54.53781512605042,
    "score_7d": 3.4497041420118344,
    "extracted_entities": "Val Kilmer - Attore - Filmografia - Carriera - Salute",
    "saturation_score": 2030.0
  },
  {
    "rank": 2,
    "entity": "ilaria sula",
    "discover_score": 10.168813013559424,
    "score_1h": 62.922413793103445,
    "score_4h": 43.97478991596638,
    "score_7d": 5.0828402366863905,
    "extracted_entities": "Ilaria Sula",
    "saturation_score": 1340.0
  },
  {
    "rank": 36,
    "entity": "politico",
    "discover_score": 8.223722558621681,
    "score_1h": 3.318965517241379,
    "score_4h": 1.9908758482472486,
    "score_7d": 22.692307692307693,
    "extracted_entities": "Politica - Governo - Elezioni - Partiti - Politici",
    "saturation_score": 164.0
  },
  {
    "rank": 15,
    "entity": "musk",
    "discover_score": 7.340540608210291,
    "score_1h": 33.08620689655172,
    "score_4h": 20.210321367040542,
    "score_7d": 12.627218934911243,
    "extracted_entities": "Elon Musk - Tesla - SpaceX - Twitter - Neuralink",
    "saturation_score": 545.0
  },
  {
    "rank": 32,
    "entity": "gamestop",
    "discover_score": 5.6357490808812445,
    "score_1h": 0.2327586206896552,
    "score_4h": 4.781881790373053,
    "score_7d": 15.236686390532544,
    "extracted_entities": "GameStop - Azioni - Videogiochi - Retail - Investimenti",
    "saturation_score": 9.0
  },
  {
    "rank": 7,
    "entity": "dazi trump",
    "discover_score": 5.543285323166318,
    "score_1h": 27.03448275862069,
    "score_4h": 32.17926584859885,
    "score_7d": 4.591715976331361,
    "extracted_entities": "Dazi - Donald Trump - Commercio internazionale",
    "saturation_score": 57.0
  },
  {
    "rank": 5,
    "entity": "suor paola",
    "discover_score": 5.285245448527415,
    "score_1h": 17.96551724137931,
    "score_4h": 16.95022151119862,
    "score_7d": 6.553254437869823,
    "extracted_entities": "Suor Paola - Religione - Personaggio pubblico",
    "saturation_score": 1210.0
  },
  {
    "rank": 8,
    "entity": "top gun",
    "discover_score": 4.761216590588462,
    "score_1h": 24.655172413793103,
    "score_4h": 22.17016806722689,
    "score_7d": 5.523668639053255,
    "extracted_entities": "Top Gun - Film - Tom Cruise - Aviazione - Anni '80",
    "saturation_score": 492.0
  },
  {
    "rank": 3,
    "entity": "empoli - bologna",
    "discover_score": 3.400376961942451,
    "score_1h": 8.112068965517242,
    "score_4h": 8.298319327731093,
    "score_7d": 4.523668639053255,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita",
    "saturation_score": 523.0
  },
  {
    "rank": 11,
    "entity": "nintendo",
    "discover_score": 2.5668184733181127,
    "score_1h": 77.6896551724138,
    "score_4h": 11.47689075630252,
    "score_7d": 3.9319526627218937,
    "extracted_entities": "Nintendo - Videogiochi - Console - Switch - Mario",
    "saturation_score": 1550.0
  },
  {
    "rank": 4,
    "entity": "real madrid - real sociedad",
    "discover_score": 1.8756695782192083,
    "score_1h": 2.6982758620689653,
    "score_4h": 2.4117647058823533,
    "score_7d": 3.556213017751479,
    "extracted_entities": "Real Madrid - Real Sociedad - Calcio - Partita - Liga Spagnola",
    "saturation_score": 37.0
  },
  {
    "rank": 48,
    "entity": "psg",
    "discover_score": 1.8638792164505325,
    "score_1h": 0.0,
    "score_4h": 0.4369747899159664,
    "score_7d": 6.514792899408285,
    "extracted_entities": "PSG - Paris Saint-Germain - Calcio - Ligue 1 - Squadra di calcio",
    "saturation_score": 41.0
  },
  {
    "rank": 6,
    "entity": "nintendo switch 2",
    "discover_score": 1.8212188277262973,
    "score_1h": 67.31896551724138,
    "score_4h": 10.266806722689076,
    "score_7d": 1.9644970414201184,
    "extracted_entities": "Nintendo - Switch 2 - Console - Videogiochi",
    "saturation_score": 454.0
  },
  {
    "rank": 43,
    "entity": "giornata mondiale autismo",
    "discover_score": 1.5289071735135173,
    "score_1h": 0.5258620689655172,
    "score_4h": 1.2121848739495797,
    "score_7d": 5.076923076923077,
    "extracted_entities": "Giornata Mondiale - Autismo - Evento - Consapevolezza",
    "saturation_score": 92.0
  },
  {
    "rank": 34,
    "entity": "jennifer aniston",
    "discover_score": 1.4629488440105867,
    "score_1h": 3.1810344827586206,
    "score_4h": 1.292016806722689,
    "score_7d": 4.6420118343195265,
    "extracted_entities": "Jennifer Aniston - Attrice - Hollywood - Serie TV - Film",
    "saturation_score": 3.0
  },
  {
    "rank": 16,
    "entity": "femminicidio",
    "discover_score": 1.263153086829264,
    "score_1h": 7.508620689655173,
    "score_4h": 7.571428571428571,
    "score_7d": 1.8698224852071006,
    "extracted_entities": "Femminicidio - Violenza di genere - Crimine - Diritti delle donne",
    "saturation_score": 537.0
  },
  {
    "rank": 35,
    "entity": "sempio",
    "discover_score": 1.2434449108086891,
    "score_1h": 7.379310344827585,
    "score_4h": 0.2815126050420168,
    "score_7d": 4.218934911242604,
    "extracted_entities": "Sempio",
    "saturation_score": 69.0
  },
  {
    "rank": 9,
    "entity": "giovanni bagnasco",
    "discover_score": 1.1266461231765255,
    "score_1h": 4.887931034482758,
    "score_4h": 2.968118209626947,
    "score_7d": 2.2840236686390534,
    "extracted_entities": "Giovanni Bagnasco",
    "saturation_score": 48.0
  },
  {
    "rank": 14,
    "entity": "giovanni paolo ii",
    "discover_score": 1.0753508850278388,
    "score_1h": 8.35344827586207,
    "score_4h": 7.315126050420168,
    "score_7d": 1.334319526627219,
    "extracted_entities": "Giovanni Paolo II - Papa - Vaticano - Chiesa Cattolica - Pontificato",
    "saturation_score": 753.0
  },
  {
    "rank": 30,
    "entity": "finale coppa italia 2025",
    "discover_score": 1.006924828091531,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.13865546218487396,
    "score_7d": 3.3639053254437874,
    "extracted_entities": "Finale - Coppa Italia - 2025 - Calcio - Evento sportivo",
    "saturation_score": 1.0
  },
  {
    "rank": 27,
    "entity": "cory booker",
    "discover_score": 0.9826007927713097,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.47478991596638653,
    "score_7d": 3.1301775147928996,
    "extracted_entities": "Cory Booker - Politica - Senato USA - New Jersey",
    "saturation_score": 59.0
  },
  {
    "rank": 20,
    "entity": "andrea vavassori",
    "discover_score": 0.9509654339456872,
    "score_1h": 0.15517241379310345,
    "score_4h": 6.121848739495798,
    "score_7d": 1.4112426035502958,
    "extracted_entities": "Andrea Vavassori - Tennis - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 41,
    "entity": "arsenal - fulham",
    "discover_score": 0.9220864176945215,
    "score_1h": 0.0,
    "score_4h": 0.44957983193277307,
    "score_7d": 3.1479289940828403,
    "extracted_entities": "Arsenal - Fulham - Calcio - Premier League",
    "saturation_score": 30.0
  },
  {
    "rank": 37,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.8830304193050695,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0063025210084033615,
    "score_7d": 3.0798816568047336,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League",
    "saturation_score": 7.0
  },
  {
    "rank": 18,
    "entity": "rcb vs gt",
    "discover_score": 0.8767990604873795,
    "score_1h": 7.172413793103448,
    "score_4h": 5.699579831932773,
    "score_7d": 1.2396449704142012,
    "extracted_entities": "RCB - GT - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "luigi mangione pena capitale",
    "discover_score": 0.8149966522822439,
    "score_1h": 0.0,
    "score_4h": 0.15126050420168066,
    "score_7d": 2.9319526627218933,
    "extracted_entities": "Luigi Mangione - Pena capitale - Giustizia - Crimine",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "silksong",
    "discover_score": 0.8147773632740858,
    "score_1h": 0.0,
    "score_4h": 5.4600840336134455,
    "score_7d": 1.2159763313609466,
    "extracted_entities": "Silksong - Videogioco - Hollow Knight - Team Cherry",
    "saturation_score": 8.0
  },
  {
    "rank": 40,
    "entity": "giulia penna",
    "discover_score": 0.6335103610015931,
    "score_1h": 0.0,
    "score_4h": 0.4684873949579832,
    "score_7d": 2.062130177514793,
    "extracted_entities": "Giulia Penna",
    "saturation_score": 3.0
  },
  {
    "rank": 45,
    "entity": "peter gomez",
    "discover_score": 0.6277893697451066,
    "score_1h": 0.5689655172413793,
    "score_4h": 4.112961921170141,
    "score_7d": 1.1124260355029585,
    "extracted_entities": "Peter Gomez",
    "saturation_score": 6.0
  },
  {
    "rank": 25,
    "entity": "bonus 1000 euro 2025",
    "discover_score": 0.6092954944596993,
    "score_1h": 5.129310344827586,
    "score_4h": 0.47058823529411764,
    "score_7d": 1.8106508875739644,
    "extracted_entities": "Bonus - 1000 euro - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "pogba",
    "discover_score": 0.603012707969851,
    "score_1h": 0.0,
    "score_4h": 0.9684873949579831,
    "score_7d": 1.6893491124260356,
    "extracted_entities": "Paul Pogba - Calciatore - Juventus - Francia - Serie A",
    "saturation_score": 6.0
  },
  {
    "rank": 22,
    "entity": "sciopero trenitalia",
    "discover_score": 0.594173340192579,
    "score_1h": 2.5086206896551726,
    "score_4h": 1.254201680672269,
    "score_7d": 1.5029585798816567,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "fenerbahçe - galatasaray",
    "discover_score": 0.5286292629704114,
    "score_1h": 20.663793103448278,
    "score_4h": 5.609243697478991,
    "score_7d": 0.23076923076923078,
    "extracted_entities": "Fenerbahçe - Galatasaray - Calcio - Derby - Turchia",
    "saturation_score": 4.0
  },
  {
    "rank": 33,
    "entity": "francesca mannocchi sclerosi multipla",
    "discover_score": 0.5249896053906149,
    "score_1h": 0.0,
    "score_4h": 0.5063025210084033,
    "score_7d": 1.5769230769230769,
    "extracted_entities": "Francesca Mannocchi - Sclerosi Multipla",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "the duskbloods",
    "discover_score": 0.4952361301070148,
    "score_1h": 1.620689655172414,
    "score_4h": 3.8529411764705883,
    "score_7d": 0.4881656804733728,
    "extracted_entities": "The Duskbloods - Serie - Fantasy - Letteratura",
    "saturation_score": 57.0
  },
  {
    "rank": 23,
    "entity": "copa del rey",
    "discover_score": 0.4949808041922964,
    "score_1h": 0.0,
    "score_4h": 0.7163865546218487,
    "score_7d": 1.3076923076923077,
    "extracted_entities": "Copa del Rey - Calcio - Spagna - Torneo - Club",
    "saturation_score": 39.0
  },
  {
    "rank": 10,
    "entity": "feyenoord - groningen",
    "discover_score": 0.47054360228469755,
    "score_1h": 20.482758620689655,
    "score_4h": 3.161764705882353,
    "score_7d": 0.42899408284023666,
    "extracted_entities": "Feyenoord - Groningen - Calcio - Eredivisie",
    "saturation_score": 4.0
  },
  {
    "rank": 21,
    "entity": "neve aprile",
    "discover_score": 0.4398625943280226,
    "score_1h": 12.439655172413794,
    "score_4h": 5.559201504869731,
    "score_7d": 0.05917159763313609,
    "extracted_entities": "Neve - Aprile - Condizioni meteorologiche - Stagioni",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "probabili formazioni milan inter",
    "discover_score": 0.43756732792297487,
    "score_1h": 5.103448275862069,
    "score_4h": 2.235294117647059,
    "score_7d": 0.5710059171597632,
    "extracted_entities": "Probabili formazioni - Milan - Inter - Calcio - Serie A",
    "saturation_score": 5.0
  },
  {
    "rank": 49,
    "entity": "deltarune",
    "discover_score": 0.361880184665492,
    "score_1h": 0.45689655172413796,
    "score_4h": 0.7205882352941178,
    "score_7d": 0.9615384615384615,
    "extracted_entities": "Deltarune - Videogioco - Toby Fox - Undertale",
    "saturation_score": 2.0
  },
  {
    "rank": 46,
    "entity": "anna kalinskaja",
    "discover_score": 0.34641336965009717,
    "score_1h": 1.7413793103448274,
    "score_4h": 2.4411764705882355,
    "score_7d": 0.44674556213017746,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "flavio cobolli",
    "discover_score": 0.30558393639350945,
    "score_1h": 0.07758620689655173,
    "score_4h": 0.12394957983193278,
    "score_7d": 0.8668639053254438,
    "extracted_entities": "Flavio Cobolli - Tennis - Giocatore - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 31,
    "entity": "federica masolin",
    "discover_score": 0.2518639964360977,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.4012605042016807,
    "score_7d": 0.514792899408284,
    "extracted_entities": "Federica Masolin - Giornalista - Sport - Televisione",
    "saturation_score": 67.0
  },
  {
    "rank": 26,
    "entity": "pro patria - atalanta u-23",
    "discover_score": 0.23893405098954698,
    "score_1h": 3.818965517241379,
    "score_4h": 0.8585932280862136,
    "score_7d": 0.3254437869822485,
    "extracted_entities": "Pro Patria - Atalanta U-23 - Calcio - Partita - Squadre giovanili",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "my nintendo store",
    "discover_score": 0.23542624815205107,
    "score_1h": 0.3448275862068966,
    "score_4h": 1.7289915966386555,
    "score_7d": 0.16568047337278108,
    "extracted_entities": "My Nintendo Store - Nintendo - E-commerce - Videogiochi",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "de zerbi milan",
    "discover_score": 0.22849674188114366,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.20588235294117646,
    "score_7d": 0.46153846153846156,
    "extracted_entities": "De Zerbi - Milan - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "coppa del re",
    "discover_score": 0.20939885819946166,
    "score_1h": 0.3103448275862069,
    "score_4h": 0.03571428571428571,
    "score_7d": 0.34023668639053256,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Competizione - Club",
    "saturation_score": 41.0
  },
  {
    "rank": 39,
    "entity": "gianni alemanno",
    "discover_score": 0.16869905741976204,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4684873949579832,
    "score_7d": 0.17455621301775148,
    "extracted_entities": "Gianni Alemanno - Politica - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 38,
    "entity": "giornalista paolo guzzanti",
    "discover_score": 0.1411907539352435,
    "score_1h": 0.0,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Giornalista - Paolo Guzzanti",
    "saturation_score": 3.0
  },
  {
    "rank": 47,
    "entity": "alessandro profumo",
    "discover_score": 0.11836466290402428,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.01680672268907563,
    "score_7d": 0.07692307692307693,
    "extracted_entities": "Alessandro Profumo - Finanza - Banche - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "iperal",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "switch 2 price",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "cristiano iovino",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "canva",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "filippo bonacchi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "oroscopo oggi capricorno",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "nuggets - timberwolves",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "arminia bielefeld",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "2 aprile",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "3b meteo",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "lucia bronzetti",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "from software",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "estrazione lotto",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "wanna marchi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "fabio paratici",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "pierina paganelli",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "grizzlies - warriors",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "banco bpm unicredit",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "coppa di francia",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "carlos suarez attore",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "bianca guaccero",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "leandro domingues",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "wolverhampton - west ham",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "new zealand vs pakistan",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "loredana errore",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "tredici pietro figlio di gianni morandi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "risultati coppa italia",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "gta 6 uscita",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "manuela moreno",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "enrico rizzi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "coppa di germania",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "damiano uomini e donne",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "donkey kong bananza",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "emanuela folliero",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "webboh awards",
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
    "entity": "sofia raffaeli",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "bianca panconi attrice",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "gta 6",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "unabomber",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "chatgpt studio ghibli",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "cilento",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "ps5",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "immobile",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "chatgpt down",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "valerio scanu",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "billy crystal",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "eta uk",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "susanna ceccardi",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "corrado augias",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "pucci",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "arsenal vs fulham",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "roncadelle",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "canale 5",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "teams",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "preschool",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "bologna fc 1909",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "sinodo",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "wisconsin",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "الأهلي ضد الهلال",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "al ahly - al-hilal",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "meteo milano oggi",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "morgane - detective geniale",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "boavista - gil vicente",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "charleston open",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "alex rolfini",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "alessandra amoroso",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "kean juventus",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "arera",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "buongiorno buon mercoledì 2 aprile",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "arshad khan",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "bulls - raptors",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "child care",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "rosy bindi",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "buongiorno 2 aprile 2025",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "real sociedad",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "programmi tv",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "spider man brand new day tom holland",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "papa francesco",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "invalsi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "holland film",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "smartphone",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "cina taiwan",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "corrado guzzanti",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "lella costa",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "virginia giuffrè",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "bucks - suns",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "uffici usi",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "spurs - magic",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "نادي ستيلينبوش ضد الزمالك",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "oppenheimer",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "mediaset",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "madison beer",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "metro milano",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "saputo",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "enav",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "sonia bruganelli",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "rita dalla chiesa",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "tacchinardi",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "gazosa",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "seminara",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "unimi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "az alkmaar",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "telelombardia",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "canale 5 streaming",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "stipendio noipa aprile 2025",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "endrick",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "millionday",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "meryl streep",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "ali agca",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "biagio izzo",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "bianca berlinguer",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "atm milano",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "mattia furlani",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "papa ratzinger",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "virus russia",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "odgaard collo",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "micaela ramazzotti",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "meteo trento",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "davide calabria",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "real madrid vs",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "manuale per signorine",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "cameron diaz",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "sydney sweeney",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "rugani",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "alec baldwin",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "giulia salemi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "generali",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "alvaro mangino",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "mauro corona",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "mykonos alluvione",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "castro bologna",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "nuova scena",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "christian bale",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "marc marquez motogp",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "blackrock",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "alessandra amoroso incinta",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "mondiale per club",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "regioni italiane",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "capracotta",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "giulia vecchio",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "uefa youth league",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "cracco",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "emma marrone",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "tortoli",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "الريال ضد ريال سوسيداد",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "severance",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "maniago",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "giulia de lellis",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "ostia",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "campobasso",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "nek cantante",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "calabria milan",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "stefano bandecchi",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "vincicasa",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "bardella",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "coupe de france",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "eurobet",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "endrick felipe moreira de sousa",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "kid rock",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "real madrid club de fútbol",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "dr",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "frecciarossa milano parigi",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "abruzzo",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "pinguini tattici nucleari",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "car accident lawyer",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "la vita da grandi",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "marco baroni",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "thauvin",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "gossip",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "orsolini bologna",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "barcelona sc - independiente del valle",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "belve",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "castro",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "davide maggio",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-02 17:42:53",
  "trends_count": 228,
  "top_score": 12.323726548127881,
  "runtime_minutes": 4.547060434023539,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle Profezie di Oggi, il regno delle tendenze in Italia è dominato dall’eterogeneità degli argomenti che spaziano fra spettacolo, politica e sport. La figura di Val Kilmer emerge nettamente, riflessa attraverso la lente della sua carriera e delle sue recenti questioni di salute. Parallelamente, le intricate trame della politica si intrecciano con il nome di Ilaria Sula, segnalando un richiamo sottile ma potente verso una narrativa in evoluzione.\n\nFra i venti dell'opportunità, la saga di GameStop (#5) brilla come una gemma pronta per l'esplorazione nei contenuti per Google Discover, grazie alla sua nicchia non satura e un DScore intrigante che stimola curiosità intorno a mercati e videogiochi. Un'altra candidatura promettente è la Nintendo Switch 2 (#13), che si staglia con un'interessante combinazione di potenziale e ricerca verso nuove frontiere tecnologiche. \n\nNel campo delle precauzioni, la sfera calcistica, specialmente attorno al connubio Empoli-Bologna (#9), appare saturata, suggerendo prudenza nell'affrontare tale argomento competitivo. Anche il richiamo nostalgico di Val Kilmer (#1) è avvolto da una densa copertura, invitando a muoversi con saggezza.\n\nCodificare storie che si immergono nelle intersezioni meno esplorate potrebbe rivelarsi una via fertile per contenuti accattivanti e significativi."
};
