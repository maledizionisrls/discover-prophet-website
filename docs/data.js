const trendData = [
  {
    "rank": 9,
    "entity": "polizia di stato",
    "discover_score": 27.81761390244008,
    "score_1h": 25.551724137931036,
    "score_4h": 40.96218487394958,
    "score_7d": 34.585798816568044,
    "extracted_entities": "Polizia di Stato - Forze dell'ordine - Sicurezza pubblica",
    "saturation_score": 126.0
  },
  {
    "rank": 23,
    "entity": "inps",
    "discover_score": 24.058127064251988,
    "score_1h": 79.88486265341905,
    "score_4h": 69.84243697478992,
    "score_7d": 33.2810650887574,
    "extracted_entities": "INPS - Previdenza sociale - Pensioni - Contributi - Italia",
    "saturation_score": 44.0
  },
  {
    "rank": 33,
    "entity": "whatsapp",
    "discover_score": 19.823789568173368,
    "score_1h": 81.34482758620689,
    "score_4h": 71.28151260504202,
    "score_7d": 29.115384615384613,
    "extracted_entities": "WhatsApp - Messaggistica - App - Comunicazione",
    "saturation_score": 64.0
  },
  {
    "rank": 46,
    "entity": "agenzia delle entrate",
    "discover_score": 14.684989790022907,
    "score_1h": 63.8448275862069,
    "score_4h": 57.6953781512605,
    "score_7d": 24.59467455621302,
    "extracted_entities": "Agenzia delle Entrate - Fisco - Tasse - Italia - Dichiarazione dei redditi",
    "saturation_score": 49.0
  },
  {
    "rank": 17,
    "entity": "oggi in tv",
    "discover_score": 8.921226218528599,
    "score_1h": 20.413793103448278,
    "score_4h": 13.609243697478991,
    "score_7d": 17.86094674556213,
    "extracted_entities": "Programmi TV - Palinsesto - Canali televisivi",
    "saturation_score": 10.0
  },
  {
    "rank": 50,
    "entity": "the last of us",
    "discover_score": 8.35742359641029,
    "score_1h": 45.54310344827586,
    "score_4h": 26.06512605042017,
    "score_7d": 18.109467455621303,
    "extracted_entities": "The Last of Us - Videogioco - Naughty Dog - Apocalisse - Sopravvivenza",
    "saturation_score": 117.0
  },
  {
    "rank": 45,
    "entity": "mps",
    "discover_score": 6.994889995721708,
    "score_1h": 44.36206896551724,
    "score_4h": 28.375435111283004,
    "score_7d": 13.668639053254438,
    "extracted_entities": "Monte dei Paschi di Siena - Banca - Finanza - Italia - Crisi bancaria",
    "saturation_score": 9.0
  },
  {
    "rank": 2,
    "entity": "inter roma",
    "discover_score": 6.448438695773735,
    "score_1h": 70.99313267095266,
    "score_4h": 22.48739495798319,
    "score_7d": 4.914201183431953,
    "extracted_entities": "Inter - Roma - Partita di calcio - Serie A - Rivalità calcistica",
    "saturation_score": 269.0
  },
  {
    "rank": 48,
    "entity": "buongiorno",
    "discover_score": 6.30066829313007,
    "score_1h": 18.612068965517242,
    "score_4h": 19.45378151260504,
    "score_7d": 14.349112426035504,
    "extracted_entities": "Saluti - Comunicazione - Espressioni quotidiane",
    "saturation_score": 134.0
  },
  {
    "rank": 29,
    "entity": "25 aprile festa",
    "discover_score": 4.439034812746099,
    "score_1h": 6.267241379310344,
    "score_4h": 1.0945378151260503,
    "score_7d": 12.937869822485206,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Celebrazione - Storia",
    "saturation_score": 7.0
  },
  {
    "rank": 20,
    "entity": "coppa italia inter milan",
    "discover_score": 3.9990836502895295,
    "score_1h": 6.258620689655173,
    "score_4h": 12.01890756302521,
    "score_7d": 8.142011834319527,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Partita",
    "saturation_score": 9.0
  },
  {
    "rank": 12,
    "entity": "uomini e donne oggi",
    "discover_score": 2.9289000019825977,
    "score_1h": 30.025862068965516,
    "score_4h": 9.955882352941176,
    "score_7d": 5.2485207100591715,
    "extracted_entities": "Uomini e Donne - Puntata di oggi - Programma TV",
    "saturation_score": 1.0
  },
  {
    "rank": 1,
    "entity": "facies hippocratica",
    "discover_score": 2.3930818084695678,
    "score_1h": 11.620689655172413,
    "score_4h": 8.989495798319329,
    "score_7d": 1.698224852071006,
    "extracted_entities": "Facies Hippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 8.0
  },
  {
    "rank": 11,
    "entity": "giornata della terra",
    "discover_score": 2.2426532527162673,
    "score_1h": 5.810344827586206,
    "score_4h": 6.8088235294117645,
    "score_7d": 4.295857988165681,
    "extracted_entities": "Giornata della Terra - Ambiente - Sostenibilità - Cambiamento climatico - Ecologia",
    "saturation_score": 231.0
  },
  {
    "rank": 37,
    "entity": "il paradiso delle signore oggi",
    "discover_score": 2.215081386025312,
    "score_1h": 3.1982758620689653,
    "score_4h": 1.7899159663865547,
    "score_7d": 6.964497041420119,
    "extracted_entities": "Il paradiso delle signore - Episodio di oggi - Serie TV",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "barcellona inter",
    "discover_score": 2.207381785999331,
    "score_1h": 6.758620689655173,
    "score_4h": 5.1533613445378155,
    "score_7d": 6.174556213017752,
    "extracted_entities": "Barcellona - Inter - Calcio - Partita - Champions League",
    "saturation_score": 36.0
  },
  {
    "rank": 14,
    "entity": "carlo maria viganò",
    "discover_score": 2.0983543009143633,
    "score_1h": 5.366890707188778,
    "score_4h": 1.6636457930452517,
    "score_7d": 5.535502958579881,
    "extracted_entities": "Carlo Maria Viganò - Arcivescovo - Chiesa Cattolica",
    "saturation_score": 6.0
  },
  {
    "rank": 6,
    "entity": "tottenham - nottingham forest",
    "discover_score": 2.0805270723990037,
    "score_1h": 1.4661016949152543,
    "score_4h": 0.6680672268907564,
    "score_7d": 4.831360946745562,
    "extracted_entities": "Tottenham - Nottingham Forest - Calcio - Premier League",
    "saturation_score": 89.0
  },
  {
    "rank": 24,
    "entity": "netanyahu",
    "discover_score": 1.8552800937292075,
    "score_1h": 0.6810344827586207,
    "score_4h": 2.4117647058823533,
    "score_7d": 5.233727810650888,
    "extracted_entities": "Benjamin Netanyahu - Israele - Politica - Primo Ministro",
    "saturation_score": 109.0
  },
  {
    "rank": 44,
    "entity": "massimo coppola",
    "discover_score": 1.776199726796333,
    "score_1h": 0.2457627118644068,
    "score_4h": 0.3130252100840336,
    "score_7d": 6.171597633136095,
    "extracted_entities": "Massimo Coppola - Persone - Cultura - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 3,
    "entity": "gad lerner lascia il fatto quotidiano",
    "discover_score": 1.527564328231731,
    "score_1h": 10.818965517241379,
    "score_4h": 2.6353152139516896,
    "score_7d": 2.5739644970414197,
    "extracted_entities": "Gad Lerner - Il Fatto Quotidiano - Dimissioni",
    "saturation_score": 6.0
  },
  {
    "rank": 5,
    "entity": "sara tommasi",
    "discover_score": 1.3679132889683314,
    "score_1h": 11.758620689655173,
    "score_4h": 3.8172268907563027,
    "score_7d": 2.304733727810651,
    "extracted_entities": "Sara Tommasi - Personaggio pubblico - Intrattenimento",
    "saturation_score": 86.0
  },
  {
    "rank": 10,
    "entity": "kristen stewart",
    "discover_score": 1.2197179425042872,
    "score_1h": 2.4310344827586206,
    "score_4h": 0.9915966386554622,
    "score_7d": 3.1124260355029585,
    "extracted_entities": "Kristen Stewart - Attrice - Cinema - Hollywood",
    "saturation_score": 62.0
  },
  {
    "rank": 7,
    "entity": "lucia bronzetti",
    "discover_score": 1.0832147043998162,
    "score_1h": 17.844827586206897,
    "score_4h": 5.888655462184874,
    "score_7d": 1.3402366863905326,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia",
    "saturation_score": 5.0
  },
  {
    "rank": 27,
    "entity": "knicks - pistons",
    "discover_score": 1.0093068932939666,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.7436974789915967,
    "score_7d": 3.1449704142011834,
    "extracted_entities": "Knicks - Pistons - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 31,
    "entity": "girona - betis",
    "discover_score": 0.9384272079530163,
    "score_1h": 0.0,
    "score_4h": 0.3697478991596639,
    "score_7d": 3.0828402366863905,
    "extracted_entities": "Girona - Betis - Calcio - Partita - Liga Spagnola",
    "saturation_score": 9.0
  },
  {
    "rank": 4,
    "entity": "giuseppe farina",
    "discover_score": 0.8219349050092043,
    "score_1h": 33.54310344827586,
    "score_4h": 9.47689075630252,
    "score_7d": 0.0650887573964497,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 46.0
  },
  {
    "rank": 49,
    "entity": "emma bonino",
    "discover_score": 0.7934454697459364,
    "score_1h": 0.0,
    "score_4h": 0.48949579831932777,
    "score_7d": 2.7455621301775146,
    "extracted_entities": "Emma Bonino - Politica - Italia - Radicali - Diritti umani",
    "saturation_score": 8.0
  },
  {
    "rank": 38,
    "entity": "sudakov",
    "discover_score": 0.6947622652282148,
    "score_1h": 0.0,
    "score_4h": 0.6239495798319328,
    "score_7d": 2.230769230769231,
    "extracted_entities": "Calcio - FC Dynamo Kyiv - Ucraina - Giocatore di calcio - Nazionale ucraina",
    "saturation_score": 44.0
  },
  {
    "rank": 15,
    "entity": "donald trump papa francesco",
    "discover_score": 0.6510192236496523,
    "score_1h": 0.29310344827586204,
    "score_4h": 0.5882352941176471,
    "score_7d": 1.7455621301775148,
    "extracted_entities": "Donald Trump - Papa Francesco",
    "saturation_score": 0.0
  },
  {
    "rank": 40,
    "entity": "buon martedi 22 aprile",
    "discover_score": 0.624259973349159,
    "score_1h": 0.0,
    "score_4h": 0.5223532927815477,
    "score_7d": 2.011834319526627,
    "extracted_entities": "Martedì - 22 aprile - Buongiorno",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "marjorie taylor greene",
    "discover_score": 0.6128313940696893,
    "score_1h": 2.7155172413793105,
    "score_4h": 0.18067226890756302,
    "score_7d": 1.8106508875739646,
    "extracted_entities": "Marjorie Taylor Greene - Politica - Stati Uniti",
    "saturation_score": 9.0
  },
  {
    "rank": 26,
    "entity": "alife",
    "discover_score": 0.6019988905582699,
    "score_1h": 3.2672413793103443,
    "score_4h": 2.5861344537815127,
    "score_7d": 1.2337278106508875,
    "extracted_entities": "Alife - Comune - Campania - Italia",
    "saturation_score": 49.0
  },
  {
    "rank": 13,
    "entity": "pagamento assegno unico aprile 2025 inps",
    "discover_score": 0.5925010505718329,
    "score_1h": 2.767241379310345,
    "score_4h": 0.865546218487395,
    "score_7d": 1.4349112426035502,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025 - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "spider man 3",
    "discover_score": 0.5706249244600047,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.9448595337716676,
    "score_7d": 1.7396449704142012,
    "extracted_entities": "Spider-Man - Film - Marvel - Cinema",
    "saturation_score": 7.0
  },
  {
    "rank": 39,
    "entity": "nuggets - clippers",
    "discover_score": 0.5666596498283264,
    "score_1h": 0.0,
    "score_4h": 0.6554621848739496,
    "score_7d": 1.7455621301775148,
    "extracted_entities": "Denver Nuggets - Los Angeles Clippers - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 28,
    "entity": "olivia williams",
    "discover_score": 0.5554067276783475,
    "score_1h": 3.3706896551724137,
    "score_4h": 0.5273109243697479,
    "score_7d": 1.636094674556213,
    "extracted_entities": "Olivia Williams - Attrice - Film - Televisione",
    "saturation_score": 8.0
  },
  {
    "rank": 36,
    "entity": "papa francesco emanuela orlandi",
    "discover_score": 0.4721719152746959,
    "score_1h": 0.0,
    "score_4h": 0.5306335923490735,
    "score_7d": 1.3905325443786982,
    "extracted_entities": "Papa Francesco - Emanuela Orlandi - Vaticano - Scomparsa",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "wta madrid",
    "discover_score": 0.45972274109964406,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.6932773109243698,
    "score_7d": 1.1745562130177516,
    "extracted_entities": "WTA - Madrid - Tennis - Torneo - Giocatrici",
    "saturation_score": 50.0
  },
  {
    "rank": 35,
    "entity": "jean-marc aveline",
    "discover_score": 0.4545768774783167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.4615384615384617,
    "extracted_entities": "Jean-Marc Aveline - Cardinale - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "cardinale becciu",
    "discover_score": 0.445975022658953,
    "score_1h": 3.1293103448275863,
    "score_4h": 1.1281512605042017,
    "score_7d": 0.9349112426035504,
    "extracted_entities": "Cardinale Becciu - Vaticano - Chiesa Cattolica - Processo - Scandalo",
    "saturation_score": 8.0
  },
  {
    "rank": 25,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.3847621519082136,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3928571428571429,
    "score_7d": 1.0059171597633136,
    "extracted_entities": "Oroscopo - Scorpione - Paolo Fox",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "conclave cardinali papabili",
    "discover_score": 0.33247286117030556,
    "score_1h": 1.722822910578609,
    "score_4h": 0.0819327731092437,
    "score_7d": 0.9881656804733727,
    "extracted_entities": "Conclave - Cardinali - Papabili",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "rottamazione quinquies",
    "discover_score": 0.3297071644668888,
    "score_1h": 4.278492109877265,
    "score_4h": 1.2626050420168067,
    "score_7d": 0.3875739644970414,
    "extracted_entities": "Rottamazione - Quinquies - Fisco - Debiti - Agenzia delle Entrate",
    "saturation_score": 4.0
  },
  {
    "rank": 18,
    "entity": "banco bpm unicredit",
    "discover_score": 0.3024993131212072,
    "score_1h": 3.0172413793103448,
    "score_4h": 0.5294117647058824,
    "score_7d": 0.6005917159763313,
    "extracted_entities": "Banco BPM - UniCredit - Banche - Finanza",
    "saturation_score": 2.0
  },
  {
    "rank": 21,
    "entity": "cocciaretto",
    "discover_score": 0.2613959631824685,
    "score_1h": 0.33620689655172414,
    "score_4h": 1.745798319327731,
    "score_7d": 0.1834319526627219,
    "extracted_entities": "Tennis - Elisabetta Cocciaretto - Sport - Atleta",
    "saturation_score": 26.0
  },
  {
    "rank": 32,
    "entity": "alessandro sallusti",
    "discover_score": 0.24935521642821581,
    "score_1h": 1.5258620689655173,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.5798816568047337,
    "extracted_entities": "Alessandro Sallusti - Giornalismo - Editorialista - Quotidiani",
    "saturation_score": 40.0
  },
  {
    "rank": 30,
    "entity": "sem steijn",
    "discover_score": 0.23647819438376716,
    "score_1h": 0.0,
    "score_4h": 0.6008403361344539,
    "score_7d": 0.39644970414201186,
    "extracted_entities": "Sem Steijn - Calciatore - Eredivisie - ADO Den Haag",
    "saturation_score": 8.0
  },
  {
    "rank": 41,
    "entity": "the last of us seconda stagione",
    "discover_score": 0.19219708634340593,
    "score_1h": 0.07758620689655173,
    "score_4h": 0.0,
    "score_7d": 0.3994082840236686,
    "extracted_entities": "The Last of Us - Seconda stagione - Serie TV - HBO",
    "saturation_score": 1.0
  },
  {
    "rank": 34,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.1905340113497682,
    "score_1h": 0.0,
    "score_4h": 0.8822122991455996,
    "score_7d": 0.15680473372781065,
    "extracted_entities": "Aldo Hugo Sallustro",
    "saturation_score": 100.0
  },
  {
    "rank": 51,
    "entity": "instagram",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "noipa",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "yahoo",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "pisa - cremonese",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "tim",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "zaniolo",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "gt vs kkr",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "conclave streaming",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "anders arborelius",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "bruno vespa",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "fabio fognini",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "thunderstorm warning",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "dhl tracking",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "noipa cedolino",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "teatro alla scala",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "ralph fiennes",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "bper",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "de zerbi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "championship",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "danilo gallinari",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "buon martedi 22 aprile 2025",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "corriere",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "modena - cesena",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "stellantis azioni",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "f1 gp arabia saudita gara",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "it",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "dinamo bucarest - u craiova",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "cardinale sepe",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "peshawar zalmi vs karachi kings",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "idealista",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "salvini",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "al hilal - al-shabab",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "adani",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "girona vs real betis",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "peschici",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "nba playoff",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "massimo franco",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "federica angeli giornalista",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "nba",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "desaparecidos",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "buongiorno 22 aprile 2025",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "tottenham",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "radio deejay",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "è sempre mezzogiorno",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "radio",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "elder scrolls oblivion remastered",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "bangladesh",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "criscitiello",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "circoloco",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "luka romero",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "mib 30",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "jürgen klopp",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "lipari",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "al ittihad - al-ettifaq",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "positano news",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "gazzetta sport",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "avellino papa",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "xabi alonso",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "cambio euro dollaro",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "dmax",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "azioni eni",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "roberto da crema",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "minniti",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "melania trump",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "investing",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "pandoland",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "ihostage",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "gwyneth paltrow",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "elena bergoglio",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "nottingham forest",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "red",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "james franco",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "antonio spadaro",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "eni azioni",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "roberto saviano",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "gialappashow",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "az - go ahead eagles",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "risultati nba",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lampedusa",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "il mattino di padova",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "luis henrique",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "tom cruise",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "santiago de compostela",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "randy orton",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "kevin joseph farrell",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "thomas ceccon",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "mission impossible",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "rey mysterio",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "kevin costner",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "incidente a1",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "quotidiani oggi",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "facundo lescano",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "braida",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "martin sheen",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "cardinale scola",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "al pacino",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "javier cercas papa francesco",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "sangiuliano",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "rhea ripley",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "kristi noem",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "soldionline",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "padre enzo fortunato",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "fortitudo bologna - rbr",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "radio 24",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "cardinale ravasi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "luca casarini",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "la nazione",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "lilli gruber",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "spider man 4",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "gazzetta di modena",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "the last of us streaming",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "euro dollaro",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "logan paul",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "cody rhodes",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "dominik mysterio",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "ezio mauro",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "leicester",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "graziano cesari",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "santiago",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "azioni mps",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "tudor juve",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "san paolo",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "meteolive",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "oslo",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "ozpetek",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "anthony hopkins",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "travis scott",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "oblivion remake",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "bron breakker",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "nicolò barella",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "eco di bergamo",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "thunderbolts",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "a sua immagine",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "joe hendry",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "eugene the last of us",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "triesteprima",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "aj styles",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "josi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "maria corleone",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "targato cn",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "ben affleck",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "gnonto",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "casteddu online",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "ciociaria",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "beppe bergomi",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "reddit down",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "mongolia",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "autostrade per l'italia",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "traffico autostrade",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "drew mcintyre",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "hostage",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "burger king",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "kirsten dunst",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "damian priest",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "bianca belair",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "ali agca",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "gazzettino",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "ncis los angeles",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "mantova catanzaro",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "bergamo news",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "claudio coldebella",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "svitolina",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "antonio banderas",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "l'adige",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "paul rudd",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "brescia reggiana",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-22 13:06:08",
  "trends_count": 221,
  "top_score": 27.81761390244008,
  "runtime_minutes": 5.311609796682993,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nell'oracolo degli eventi odierni, il panorama italiano vibra di tre potenti melodie: la sicurezza pubblica, la messaggistica e il calcio. La forza delle forze dell'ordine (#1) si manifesta con un interesse crescente, simbolo di fiducia e stabilità in questo mondo in costante mutamento. Contemporaneamente, il fluire della comunicazione moderna attraverso WhatsApp (#3) mantiene il suo ritmo vivace, con un potenziale Discover corroborato da una saturazione ancora digeribile.\n\nTuttavia, i cieli del Discover segnano due brillanti potenzialità. L’argomento in merito alla INPS (#2) risuona come un'opportunità fertile, vista la sua rara saturazione e l'impronta crescente sul presente e sul futuro dei cittadini. Anche la narrazione immortale di 'The Last of Us' (#6) promette avventure nella scoperta, grazie al suo interesse persistente non dominato dalla saturazione.\n\nCon cautela, avvertiamo l'ardore commerciale del calcio: la competizione tra 'Inter Roma' (#8) è un campo di battaglia saturo, richiedente discernimento per non perdersi nell'eccesso.\n\nIn questo universo di tendenze, la creazione di contenuti deve navigare con saggezza, scegliendo le maree di opportunità e scartando le insidie delle onde effimere."
};
