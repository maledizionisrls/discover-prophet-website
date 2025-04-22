const trendData = [
  {
    "rank": 42,
    "entity": "whatsapp",
    "discover_score": 20.35583719496831,
    "score_1h": 42.10344827586207,
    "score_4h": 81.5483193277311,
    "score_7d": 29.967455621301774,
    "extracted_entities": "WhatsApp - Messaggistica - App - Comunicazione",
    "saturation_score": 168.0
  },
  {
    "rank": 2,
    "entity": "inter roma",
    "discover_score": 16.22597030966056,
    "score_1h": 34.956896551724135,
    "score_4h": 62.46008403361344,
    "score_7d": 7.363905325443787,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 269.0
  },
  {
    "rank": 45,
    "entity": "oggi in tv",
    "discover_score": 10.250041506950675,
    "score_1h": 3.5172413793103448,
    "score_4h": 8.737280686333111,
    "score_7d": 26.760355029585796,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Canali televisivi",
    "saturation_score": 70.0
  },
  {
    "rank": 15,
    "entity": "paradiso delle signore",
    "discover_score": 8.502354523019495,
    "score_1h": 28.163793103448278,
    "score_4h": 13.328451882845188,
    "score_7d": 16.585798816568047,
    "extracted_entities": "Paradiso delle Signore - Serie TV - Rai 1 - Soap Opera - Italia",
    "saturation_score": 54.0
  },
  {
    "rank": 16,
    "entity": "coppa italia inter milan",
    "discover_score": 5.759680397023206,
    "score_1h": 11.577586206896552,
    "score_4h": 4.109243697478991,
    "score_7d": 13.636094674556212,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Partita",
    "saturation_score": 32.0
  },
  {
    "rank": 39,
    "entity": "uomini e donne oggi",
    "discover_score": 3.6973858707747036,
    "score_1h": 0.0,
    "score_4h": 5.703781512605042,
    "score_7d": 10.337278106508876,
    "extracted_entities": "Uomini e Donne - Oggi - Programma TV - Maria De Filippi - Canale 5",
    "saturation_score": 2.0
  },
  {
    "rank": 3,
    "entity": "gad lerner lascia il fatto quotidiano",
    "discover_score": 3.008943290286582,
    "score_1h": 5.896551724137931,
    "score_4h": 6.966386554621849,
    "score_7d": 4.1952662721893486,
    "extracted_entities": "Gad Lerner - Il Fatto Quotidiano - Dimissioni",
    "saturation_score": 8.0
  },
  {
    "rank": 8,
    "entity": "kristen stewart",
    "discover_score": 2.9760604103505006,
    "score_1h": 0.0,
    "score_4h": 1.2584033613445378,
    "score_7d": 6.958579881656805,
    "extracted_entities": "Kristen Stewart - Attrice - Cinema - Hollywood",
    "saturation_score": 76.0
  },
  {
    "rank": 47,
    "entity": "papa francesco conclave",
    "discover_score": 2.8836392492296388,
    "score_1h": 2.560344827586207,
    "score_4h": 14.562849407545444,
    "score_7d": 5.946745562130177,
    "extracted_entities": "Papa Francesco - Conclave - Chiesa Cattolica",
    "saturation_score": 3.0
  },
  {
    "rank": 11,
    "entity": "giornata della terra",
    "discover_score": 2.647353385424775,
    "score_1h": 2.4655172413793105,
    "score_4h": 6.813025210084033,
    "score_7d": 5.254437869822485,
    "extracted_entities": "Giornata della Terra - Ambiente - Sostenibilità - Ecologia - Cambiamento climatico",
    "saturation_score": 184.0
  },
  {
    "rank": 1,
    "entity": "facies hippocratica",
    "discover_score": 2.580846348937461,
    "score_1h": 24.17241379310345,
    "score_4h": 11.105789177595724,
    "score_7d": 1.5532544378698225,
    "extracted_entities": "Facies Hippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 9.0
  },
  {
    "rank": 4,
    "entity": "sara tommasi",
    "discover_score": 2.4301116817683046,
    "score_1h": 2.663793103448276,
    "score_4h": 5.94776906578531,
    "score_7d": 3.772189349112426,
    "extracted_entities": "Sara Tommasi - Personaggio pubblico - Celebrità italiana",
    "saturation_score": 53.0
  },
  {
    "rank": 23,
    "entity": "bethesda",
    "discover_score": 2.1884372248113526,
    "score_1h": 4.146551724137931,
    "score_4h": 1.2958580921908514,
    "score_7d": 6.449704142011835,
    "extracted_entities": "Bethesda - Videogiochi - Sviluppatore - Publisher - The Elder Scrolls",
    "saturation_score": 10.0
  },
  {
    "rank": 30,
    "entity": "neres",
    "discover_score": 1.8776392914105415,
    "score_1h": 0.31896551724137934,
    "score_4h": 2.5294117647058822,
    "score_7d": 5.494082840236686,
    "extracted_entities": "Neres - Calciatore - Brasile - Ajax - Shakhtar Donetsk",
    "saturation_score": 112.0
  },
  {
    "rank": 6,
    "entity": "giuseppe farina",
    "discover_score": 1.6715881382919526,
    "score_1h": 0.75,
    "score_4h": 12.468487394957982,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Giuseppe Farina",
    "saturation_score": 70.0
  },
  {
    "rank": 28,
    "entity": "rottamazione quinquies",
    "discover_score": 1.6696732345578205,
    "score_1h": 0.04310344827586207,
    "score_4h": 2.5,
    "score_7d": 4.798816568047338,
    "extracted_entities": "Rottamazione - Quinquies - Fisco - Debiti - Agenzia delle Entrate",
    "saturation_score": 8.0
  },
  {
    "rank": 13,
    "entity": "carlo maria viganò",
    "discover_score": 1.5082048031533037,
    "score_1h": 0.0,
    "score_4h": 0.42179424070883587,
    "score_7d": 4.236686390532544,
    "extracted_entities": "Carlo Maria Viganò - Arcivescovo - Chiesa Cattolica",
    "saturation_score": 7.0
  },
  {
    "rank": 38,
    "entity": "girona - betis",
    "discover_score": 1.4785557722245815,
    "score_1h": 0.0,
    "score_4h": 0.09243697478991597,
    "score_7d": 5.118343195266272,
    "extracted_entities": "Girona - Betis - Partita di calcio - La Liga",
    "saturation_score": 8.0
  },
  {
    "rank": 35,
    "entity": "tottenham - nottingham forest",
    "discover_score": 1.4525097612562232,
    "score_1h": 0.0,
    "score_4h": 0.3172268907563025,
    "score_7d": 4.902366863905325,
    "extracted_entities": "Tottenham - Nottingham Forest - Calcio - Premier League",
    "saturation_score": 46.0
  },
  {
    "rank": 48,
    "entity": "sudakov",
    "discover_score": 1.2273849163700399,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5777310924369747,
    "score_7d": 4.298816568047338,
    "extracted_entities": "Calcio - FC Dinamo Mosca - Giocatore - Russia",
    "saturation_score": 45.0
  },
  {
    "rank": 7,
    "entity": "lucia bronzetti",
    "discover_score": 1.2139634399201706,
    "score_1h": 3.0344827586206895,
    "score_4h": 6.983193277310924,
    "score_7d": 1.4142011834319528,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia",
    "saturation_score": 33.0
  },
  {
    "rank": 49,
    "entity": "cocciaretto",
    "discover_score": 1.2110954429604848,
    "score_1h": 0.0,
    "score_4h": 0.3382352941176471,
    "score_7d": 4.322485207100591,
    "extracted_entities": "Tennis - Elisabetta Cocciaretto - Sport - Giocatrice",
    "saturation_score": 26.0
  },
  {
    "rank": 19,
    "entity": "banco bpm unicredit",
    "discover_score": 1.10624412217639,
    "score_1h": 0.9137931034482759,
    "score_4h": 1.26890756302521,
    "score_7d": 3.1094674556213016,
    "extracted_entities": "Banco BPM - UniCredit - Banche - Finanza",
    "saturation_score": 4.0
  },
  {
    "rank": 20,
    "entity": "marjorie taylor greene",
    "discover_score": 0.9951276843737211,
    "score_1h": 0.2672413793103448,
    "score_4h": 0.5672268907563025,
    "score_7d": 2.9822485207100593,
    "extracted_entities": "Marjorie Taylor Greene - Politica - Stati Uniti",
    "saturation_score": 9.0
  },
  {
    "rank": 43,
    "entity": "papa francesco emanuela orlandi",
    "discover_score": 0.9016682431402774,
    "score_1h": 0.0,
    "score_4h": 0.8526950529165642,
    "score_7d": 2.9852071005917162,
    "extracted_entities": "Papa Francesco - Emanuela Orlandi - Vaticano - Scomparsa",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 0.8845236771980363,
    "score_1h": 1.9913793103448276,
    "score_4h": 1.6006293730881473,
    "score_7d": 1.7100591715976332,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 10,
    "entity": "pagamento assegno unico aprile 2025 inps",
    "discover_score": 0.7817537677740477,
    "score_1h": 0.0,
    "score_4h": 1.2331932773109244,
    "score_7d": 1.8224852071005917,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025 - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "luca nardi",
    "discover_score": 0.7706834156564228,
    "score_1h": 5.318965517241379,
    "score_4h": 2.971590309764073,
    "score_7d": 1.7041420118343196,
    "extracted_entities": "Luca Nardi - Tennista - Italia",
    "saturation_score": 42.0
  },
  {
    "rank": 21,
    "entity": "kashmir",
    "discover_score": 0.6466208830185635,
    "score_1h": 4.301724137931035,
    "score_4h": 2.071428571428571,
    "score_7d": 1.452662721893491,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Regione",
    "saturation_score": 63.0
  },
  {
    "rank": 18,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.6415826830064103,
    "score_1h": 9.939655172413794,
    "score_4h": 6.116601033718927,
    "score_7d": 0.4556213017751479,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Bethesda",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "the last of us seconda stagione",
    "discover_score": 0.6145349729717231,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.198224852071006,
    "extracted_entities": "The Last of Us - Seconda stagione - Serie TV",
    "saturation_score": 1.0
  },
  {
    "rank": 27,
    "entity": "quando si gioca inter roma",
    "discover_score": 0.5873884264707497,
    "score_1h": 4.094827586206897,
    "score_4h": 1.5497081677859428,
    "score_7d": 1.4644970414201184,
    "extracted_entities": "Inter - Roma - Partita - Calendario - Serie A",
    "saturation_score": 1.0
  },
  {
    "rank": 9,
    "entity": "cardinale becciu",
    "discover_score": 0.5786096512133417,
    "score_1h": 0.0,
    "score_4h": 0.27310924369747897,
    "score_7d": 1.4349112426035502,
    "extracted_entities": "Cardinale Becciu - Chiesa Cattolica - Vaticano",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "tanatoprassi",
    "discover_score": 0.5644656149892933,
    "score_1h": 0.0,
    "score_4h": 0.37815126050420167,
    "score_7d": 1.8520710059171597,
    "extracted_entities": "Tanatoprassi - Conservazione del corpo - Preparazione funebre",
    "saturation_score": 7.0
  },
  {
    "rank": 37,
    "entity": "knicks - pistons",
    "discover_score": 0.5494391104123134,
    "score_1h": 0.0,
    "score_4h": 0.20920502092050208,
    "score_7d": 1.78698224852071,
    "extracted_entities": "New York Knicks - Detroit Pistons - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 3.0
  },
  {
    "rank": 36,
    "entity": "donald trump papa francesco",
    "discover_score": 0.5493578333207573,
    "score_1h": 0.0,
    "score_4h": 0.5399159663865546,
    "score_7d": 1.6863905325443787,
    "extracted_entities": "Donald Trump - Papa Francesco",
    "saturation_score": 0.0
  },
  {
    "rank": 24,
    "entity": "dalai lama",
    "discover_score": 0.5050087658200874,
    "score_1h": 0.0,
    "score_4h": 0.8718487394957983,
    "score_7d": 1.3136094674556213,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "ps store",
    "discover_score": 0.4592297749421834,
    "score_1h": 1.853448275862069,
    "score_4h": 1.5119897331317464,
    "score_7d": 1.1005917159763312,
    "extracted_entities": "PlayStation Store - Videogiochi - Sony - Acquisti digitali - Console",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.4386379500004878,
    "score_1h": 1.8017241379310345,
    "score_4h": 0.8130252100840336,
    "score_7d": 1.1538461538461537,
    "extracted_entities": "Aldo Hugo Sallustro",
    "saturation_score": 327.0
  },
  {
    "rank": 12,
    "entity": "lsg vs dc",
    "discover_score": 0.4362465668651505,
    "score_1h": 3.2672413793103448,
    "score_4h": 1.2557399528849196,
    "score_7d": 0.804733727810651,
    "extracted_entities": "LSG - DC - Indian Premier League - Cricket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "jean-marc aveline",
    "discover_score": 0.3879758466623599,
    "score_1h": 0.0,
    "score_4h": 0.05042016806722689,
    "score_7d": 1.242603550295858,
    "extracted_entities": "Jean-Marc Aveline - Cardinale - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "incendio olbia",
    "discover_score": 0.3634230424735865,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4789915966386554,
    "score_7d": 0.9615384615384616,
    "extracted_entities": "Incendio - Olbia - Emergenza - Sardegna - Vigili del Fuoco",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.34878352268046325,
    "score_1h": 3.206896551724138,
    "score_4h": 1.6134453781512605,
    "score_7d": 0.4556213017751479,
    "extracted_entities": "Alessandro Sallusti - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "olivia williams",
    "discover_score": 0.26021124460646317,
    "score_1h": 0.0,
    "score_4h": 0.6940068914595128,
    "score_7d": 0.44970414201183434,
    "extracted_entities": "Olivia Williams - Attrice - Film - Televisione - Teatro",
    "saturation_score": 10.0
  },
  {
    "rank": 41,
    "entity": "playstation store",
    "discover_score": 0.2597380785352027,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "PlayStation Store - Videogiochi - Sony - Acquisti digitali - Console gaming",
    "saturation_score": 3.0
  },
  {
    "rank": 33,
    "entity": "chatgpt down",
    "discover_score": 0.25102983876140345,
    "score_1h": 1.2155172413793103,
    "score_4h": 1.6365546218487395,
    "score_7d": 0.21893491124260356,
    "extracted_entities": "ChatGPT - Down - Problemi tecnici - Accesso - OpenAI",
    "saturation_score": 2.0
  },
  {
    "rank": 17,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.2486874263056312,
    "score_1h": 2.2586206896551726,
    "score_4h": 0.9663865546218486,
    "score_7d": 0.2869822485207101,
    "extracted_entities": "Multan Sultans - Lahore Qalandars - Partita di cricket - Pakistan Super League - Squadre di cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "maurizio pistocchi",
    "discover_score": 0.21139678004015947,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.25840336134453784,
    "score_7d": 0.38461538461538464,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "previsioni meteo venerdì 25 aprile",
    "discover_score": 0.16728288621231208,
    "score_1h": 0.0,
    "score_4h": 0.02092050209205021,
    "score_7d": 0.23076923076923078,
    "extracted_entities": "Previsioni meteo - Venerdì 25 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "mediaset extra the couple",
    "discover_score": 0.11511436112287482,
    "score_1h": 0.0,
    "score_4h": 0.0861344537815126,
    "score_7d": 0.02366863905325444,
    "extracted_entities": "Mediaset Extra - The Couple - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "nuggets - clippers",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "millionday",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "spider man 3",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "letto contenitore",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "djalo",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "valentina uomini e donne",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "25 aprile festa",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "tgcom24",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "the last of us",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "noipa",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "mps",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "sem steijn",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "agenzia delle entrate",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "pisa - cremonese",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "instagram",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "naomi ōsaka",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "conclave streaming",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "bruno vespa",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "yahoo",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "netanyahu",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "tiscali",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "luana uomini e donne",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "thunderstorm warning",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "tim",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "insta360 x5",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "dhl tracking",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "danilo gallinari",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "bper",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "barcellona inter",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "it",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "corriere",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "dinamo bucarest - u craiova",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "cardinale sepe",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "rds",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "teatro alla scala",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "stellantis azioni",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "girona vs real betis",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "massimo franco",
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
    "entity": "salvini",
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
    "entity": "adani",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "bangladesh",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "lipari",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "nba",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "idealista",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "al ittihad - al-ettifaq",
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
    "entity": "positano news",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "de zerbi",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "radio deejay",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "radio",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "jürgen klopp",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "anders arborelius",
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
    "entity": "dmax",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "criscitiello",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "roberto da crema",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "buongiorno martedi 22 aprile",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "ralph fiennes",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "buongiorno 22 aprile 2025",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "unicredit azioni",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "ihostage",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "melania trump",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "cambio euro dollaro",
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
    "entity": "mib 30",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "lampedusa",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "elena bergoglio",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "xabi alonso",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "nottingham forest",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "james franco",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "red",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "antonio spadaro",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "gialappashow",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "pandoland",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "azioni eni",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "tom cruise",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "santiago de compostela",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "investing",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "roberto saviano",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "randy orton",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "kanye west",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "risultati nba",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "mission impossible",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "luis henrique",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "rey mysterio",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "kevin costner",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "eni azioni",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "il mattino di padova",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "facundo lescano",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "martin sheen",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "incidente a1",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "cardinale scola",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "al pacino",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "javier cercas papa francesco",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "sangiuliano",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "rhea ripley",
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
    "entity": "cardinale ravasi",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "braida",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "lilli gruber",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "quotidiani oggi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "spider man 4",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "ali al sistani",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "the last of us streaming",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "logan paul",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "cody rhodes",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "kristi noem",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "dominik mysterio",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "ezio mauro",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "kevin joseph farrell",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "radio 24",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "leicester",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "euro dollaro",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "graziano cesari",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "gazzetta di modena",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "santiago",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "mario monti",
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
    "entity": "nicolò barella",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "travis scott",
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
    "entity": "a sua immagine",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "joe hendry",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "eugene the last of us",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "josi",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "meteolive",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "aj styles",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "c",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "maria corleone",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "azioni mps",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "eco di bergamo",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "ben affleck",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "ciociaria",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "reddit down",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "gnonto",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "beppe bergomi",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "casteddu online",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "triesteprima",
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
    "entity": "traffico autostrade",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "drew mcintyre",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "hostage",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "burger king",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "targato cn",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "tiktok",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "autostrade per l'italia",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "kirsten dunst",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "damian priest",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "bianca belair",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "ali agca",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "claudio coldebella",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "gazzettino",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "paul rudd",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "l'adige",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-22 15:53:36",
  "trends_count": 217,
  "top_score": 20.35583719496831,
  "runtime_minutes": 12.597135770320893,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano tre grandi temi che dominano il panorama attuale: lo sport, con particolare attenzione su eventi calcistici come \"Inter Roma\" e \"Coppa Italia Inter Milan\"; la televisione, rappresentata da trend ricorrenti come \"Oggi in TV\" e il seguito appassionato di \"Paradiso delle Signore\"; e il mondo delle comunicazioni con \"WhatsApp\" emergendo come una forza pronta a innovare gli incontri digitali.\n\nTra le opportunità dorate in Google Discover, spicca il trend di WhatsApp (#1). Con un Discover Score degno di nota e una saturazione non eccessiva, la piattaforma di messaggistica prevede un intrigante fermento nella sfera della comunicazione virtuale. Anche l'attenzione rivolta a \"Uomini e Donne Oggi\" (#6) offre terreno fertile per creatori di contenuti, grazie a una nicchia di saturazione sorprendentemente bassa.\n\nUn'avvertenza si pone sui calciatori individuali e i loro rispettivi team, come David Neres (#14), dove la competizione è spietata e la saturazione mediamente alta, suggerendo cautela per evitare investimenti infruttuosi. \n\nChi cerca di cavalcare le onde delle tendenze dovrebbe prestare attenzione ai picchi di interesse, bilanciandoli con l'analisi della saturazione, per navigare con saggezza nei mari di Google Discover."
};
