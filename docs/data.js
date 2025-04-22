const trendData = [
  {
    "rank": 1,
    "entity": "inter roma",
    "discover_score": 15.018718347286473,
    "score_1h": 68.56896551724138,
    "score_4h": 42.542016806722685,
    "score_7d": 6.572414764722457,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 495.0
  },
  {
    "rank": 12,
    "entity": "coppa italia inter milan",
    "discover_score": 6.819688152655565,
    "score_1h": 47.491379310344826,
    "score_4h": 22.1890756302521,
    "score_7d": 10.406170752324599,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Competizione",
    "saturation_score": 32.0
  },
  {
    "rank": 42,
    "entity": "25 aprile festa",
    "discover_score": 6.773150926954829,
    "score_1h": 0.14655172413793102,
    "score_4h": 0.9747899159663865,
    "score_7d": 20.035626232741617,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Celebrazione - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 39,
    "entity": "israele",
    "discover_score": 5.928527055058524,
    "score_1h": 38.69827586206897,
    "score_4h": 15.002100840336134,
    "score_7d": 13.87797619047619,
    "extracted_entities": "Israele - Medio Oriente - Conflitto israelo-palestinese - Gerusalemme - Tel Aviv",
    "saturation_score": 307.0
  },
  {
    "rank": 40,
    "entity": "putin",
    "discover_score": 5.78693631952559,
    "score_1h": 27.39655172413793,
    "score_4h": 6.25,
    "score_7d": 15.906593406593405,
    "extracted_entities": "Vladimir Putin - Russia - Politica - Governo - Presidenza",
    "saturation_score": 248.0
  },
  {
    "rank": 2,
    "entity": "facies hippocratica",
    "discover_score": 5.272491869665204,
    "score_1h": 12.49137931034483,
    "score_4h": 11.644957983193278,
    "score_7d": 5.673411524373063,
    "extracted_entities": "Facies Hippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 35.0
  },
  {
    "rank": 45,
    "entity": "striscia la notizia",
    "discover_score": 5.103334791435112,
    "score_1h": 13.198275862068966,
    "score_4h": 2.9159663865546217,
    "score_7d": 15.33470695970696,
    "extracted_entities": "Striscia la Notizia - Programma TV - Satira - Italia - Mediaset",
    "saturation_score": 7.0
  },
  {
    "rank": 18,
    "entity": "pantelleria",
    "discover_score": 4.8910654840712215,
    "score_1h": 16.75862068965517,
    "score_4h": 9.779411764705882,
    "score_7d": 10.572361932938858,
    "extracted_entities": "Pantelleria - Isola - Sicilia - Turismo - Vulcani",
    "saturation_score": 38.0
  },
  {
    "rank": 11,
    "entity": "estrazione lotto oggi",
    "discover_score": 4.070244316071649,
    "score_1h": 63.310344827586206,
    "score_4h": 16.235294117647058,
    "score_7d": 6.116071428571429,
    "extracted_entities": "Estrazione - Lotto - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "giornata della terra",
    "discover_score": 3.221907342454072,
    "score_1h": 3.0862068965517238,
    "score_4h": 1.2247899159663866,
    "score_7d": 9.1962348548887,
    "extracted_entities": "Giornata della Terra - Ambiente - Sostenibilità - Ecologia - Cambiamento climatico",
    "saturation_score": 220.0
  },
  {
    "rank": 4,
    "entity": "gad lerner lascia il fatto quotidiano",
    "discover_score": 3.1275809828882455,
    "score_1h": 5.2155172413793105,
    "score_4h": 2.4747899159663866,
    "score_7d": 5.8860946745562135,
    "extracted_entities": "Gad Lerner - Il Fatto Quotidiano - Dimissioni",
    "saturation_score": 8.0
  },
  {
    "rank": 28,
    "entity": "wta madrid",
    "discover_score": 2.030634232196372,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.4915966386554622,
    "score_7d": 6.440352916314454,
    "extracted_entities": "WTA - Madrid - Tennis - Torneo - Giocatrici",
    "saturation_score": 83.0
  },
  {
    "rank": 31,
    "entity": "affari tuoi stasera",
    "discover_score": 1.8157040153448476,
    "score_1h": 4.301724137931035,
    "score_4h": 5.476890756302521,
    "score_7d": 4.544537193575655,
    "extracted_entities": "Affari Tuoi - Programma TV - Stasera",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "luis miguel",
    "discover_score": 1.525962810698269,
    "score_1h": 3.4655172413793105,
    "score_4h": 1.3298319327731092,
    "score_7d": 5.09146942800789,
    "extracted_entities": "Luis Miguel - Cantante - Musica Latina - Concerti - Album",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "netanyahu",
    "discover_score": 1.3923053479562686,
    "score_1h": 3.956896551724138,
    "score_4h": 0.6974789915966386,
    "score_7d": 4.775975626937166,
    "extracted_entities": "Benjamin Netanyahu - Politica israeliana - Primo Ministro di Israele - Likud - Medio Oriente",
    "saturation_score": 93.0
  },
  {
    "rank": 21,
    "entity": "fabio fognini",
    "discover_score": 1.2478092900890185,
    "score_1h": 13.594827586206897,
    "score_4h": 4.222689075630252,
    "score_7d": 2.8228198083967317,
    "extracted_entities": "Fabio Fognini - Tennis - Atleta",
    "saturation_score": 7.0
  },
  {
    "rank": 3,
    "entity": "manchester city - aston villa",
    "discover_score": 1.1837723750458558,
    "score_1h": 30.336206896551722,
    "score_4h": 7.590336134453782,
    "score_7d": 0.8244047619047619,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 30.0
  },
  {
    "rank": 19,
    "entity": "valencia - espanyol",
    "discover_score": 1.1766272355409364,
    "score_1h": 14.319696084161308,
    "score_4h": 11.105042016806724,
    "score_7d": 0.962964919695689,
    "extracted_entities": "Valencia - Espanyol - Calcio - Partita - Liga Spagnola",
    "saturation_score": 21.0
  },
  {
    "rank": 7,
    "entity": "sara tommasi",
    "discover_score": 1.155619329356641,
    "score_1h": 0.06896551724137931,
    "score_4h": 0.6512605042016806,
    "score_7d": 2.8121653987038604,
    "extracted_entities": "Sara Tommasi - Personaggio pubblico - Celebrità italiana",
    "saturation_score": 57.0
  },
  {
    "rank": 5,
    "entity": "nantes - psg",
    "discover_score": 1.1403015832765664,
    "score_1h": 31.75,
    "score_4h": 9.111344537815127,
    "score_7d": 0.6824809805579036,
    "extracted_entities": "Nantes - PSG - Calcio - Ligue 1 - Partita",
    "saturation_score": 32.0
  },
  {
    "rank": 36,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 1.0199550897807514,
    "score_1h": 1.6810344827586206,
    "score_4h": 0.9453781512605042,
    "score_7d": 3.2867533107917724,
    "extracted_entities": "Un posto al sole - Puntata - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 9,
    "entity": "konyaspor - galatasaray",
    "discover_score": 0.9614451125398955,
    "score_1h": 22.172413793103445,
    "score_4h": 8.26470588235294,
    "score_7d": 0.6661031276415892,
    "extracted_entities": "Konyaspor - Galatasaray - Partita di calcio - Süper Lig",
    "saturation_score": 4.0
  },
  {
    "rank": 6,
    "entity": "facies ippocratica",
    "discover_score": 0.9558325306712255,
    "score_1h": 4.567942723553478,
    "score_4h": 1.838235294117647,
    "score_7d": 1.9134615384615385,
    "extracted_entities": "Facies ippocratica - Sintomi - Medicina - Diagnosi",
    "saturation_score": 6.0
  },
  {
    "rank": 16,
    "entity": "kashmir",
    "discover_score": 0.9288713820272058,
    "score_1h": 9.224137931034482,
    "score_4h": 3.598739495798319,
    "score_7d": 1.8584636517328823,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Autonomia",
    "saturation_score": 219.0
  },
  {
    "rank": 37,
    "entity": "previsioni meteo 25 aprile",
    "discover_score": 0.8463770509659931,
    "score_1h": 0.5689655172413793,
    "score_4h": 2.1323529411764706,
    "score_7d": 2.3601718794026487,
    "extracted_entities": "Previsioni - Meteo - 25 aprile",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "morto donato metallo",
    "discover_score": 0.8254187462066309,
    "score_1h": 28.741379310344826,
    "score_4h": 7.334033613445378,
    "score_7d": 0.6734643561566638,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 0.7964591158017316,
    "score_1h": 0.0,
    "score_4h": 1.1911764705882353,
    "score_7d": 2.0178747534516766,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 38,
    "entity": "olivia williams",
    "discover_score": 0.7580348141744759,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.5147058823529411,
    "score_7d": 2.4956677937447167,
    "extracted_entities": "Olivia Williams - Attrice - Film - Teatro - Televisione",
    "saturation_score": 41.0
  },
  {
    "rank": 10,
    "entity": "giuseppe farina",
    "discover_score": 0.7170618845004535,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.6932773109243697,
    "score_7d": 1.774496336996337,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 171.0
  },
  {
    "rank": 17,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.6939642160518386,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.8025210084033614,
    "score_7d": 1.8731156663848971,
    "extracted_entities": "Assegno Unico - Pagamenti - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "cardinale becciu",
    "discover_score": 0.676229566482827,
    "score_1h": 6.043103448275861,
    "score_4h": 0.9789915966386555,
    "score_7d": 1.670611439842209,
    "extracted_entities": "Cardinale Becciu - Vaticano - Chiesa Cattolica - Processo - Papa Francesco",
    "saturation_score": 10.0
  },
  {
    "rank": 26,
    "entity": "tanatoprassi",
    "discover_score": 0.6000175579560184,
    "score_1h": 3.25,
    "score_4h": 2.060924369747899,
    "score_7d": 1.3627958579881656,
    "extracted_entities": "Tanatoprassi - Conservazione del corpo - Pratiche funerarie",
    "saturation_score": 31.0
  },
  {
    "rank": 23,
    "entity": "dalai lama",
    "discover_score": 0.5155477899666484,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.09663865546218488,
    "score_7d": 1.5514229360383207,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 5.0
  },
  {
    "rank": 27,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.5090717170658737,
    "score_1h": 1.0344827586206895,
    "score_4h": 5.897058823529412,
    "score_7d": 0.21067554240631164,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Bethesda",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "barcellona - mallorca",
    "discover_score": 0.4982750607525406,
    "score_1h": 13.482758620689655,
    "score_4h": 3.439075630252101,
    "score_7d": 0.40476190476190477,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "the couple quando va in onda",
    "discover_score": 0.4851511554439399,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.48949579831932777,
    "score_7d": 1.4038637644406875,
    "extracted_entities": "The Couple - Programmazione - TV",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "lsg vs dc",
    "discover_score": 0.4518201019974427,
    "score_1h": 3.353448275862069,
    "score_4h": 2.3592436974789917,
    "score_7d": 0.6964285714285715,
    "extracted_entities": "LSG - DC - Indian Premier League - Cricket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 25,
    "entity": "inter roma rinvio",
    "discover_score": 0.41593670092284657,
    "score_1h": 2.525862068965517,
    "score_4h": 0.51890756302521,
    "score_7d": 1.0897788109326572,
    "extracted_entities": "Inter - Roma - Rinvio - Partita - Calcio",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "conclave film dove vederlo",
    "discover_score": 0.4155627165295043,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.9915966386554622,
    "score_7d": 1.0716751197520429,
    "extracted_entities": "Conclave - Film - Streaming - Visione",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "maurizio gucci",
    "discover_score": 0.35779399040614207,
    "score_1h": 1.4482758620689655,
    "score_4h": 0.5483193277310925,
    "score_7d": 0.8533389687235842,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 44.0
  },
  {
    "rank": 50,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.34146393990317025,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.5021008403361344,
    "score_7d": 0.9385390250774867,
    "extracted_entities": "Elezione - Papa - Candidati - Chiesa Cattolica - Conclave",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "maurizio pistocchi",
    "discover_score": 0.2944442150553428,
    "score_1h": 0.0,
    "score_4h": 0.0273109243697479,
    "score_7d": 0.8042230205691744,
    "extracted_entities": "Maurizio Pistocchi - Giornalismo - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "emiliana arango",
    "discover_score": 0.27548922724146246,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.6638655462184874,
    "score_7d": 0.533019864750634,
    "extracted_entities": "Emiliana Arango - Tennis - Colombia",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "sophie nyweide",
    "discover_score": 0.24881595316531985,
    "score_1h": 3.5781706604324954,
    "score_4h": 1.2815126050420167,
    "score_7d": 0.2873344604113835,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 8.0
  },
  {
    "rank": 33,
    "entity": "edith bruck",
    "discover_score": 0.23566292076007198,
    "score_1h": 3.0,
    "score_4h": 0.6953781512605042,
    "score_7d": 0.38063539025077486,
    "extracted_entities": "Edith Bruck - Scrittrice - Olocausto - Letteratura italiana - Testimonianza",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "lamon",
    "discover_score": 0.23141075304519373,
    "score_1h": 4.491379310344827,
    "score_4h": 0.15966386554621848,
    "score_7d": 0.5504367427444351,
    "extracted_entities": "Lamon - Patata di Lamon - Veneto - Agricoltura",
    "saturation_score": 8.0
  },
  {
    "rank": 47,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.21957577115201374,
    "score_1h": 5.172413793103448,
    "score_4h": 1.0105042016806722,
    "score_7d": 0.2759756269371654,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 2.0
  },
  {
    "rank": 35,
    "entity": "damac vs al-nassr",
    "discover_score": 0.21338451814076148,
    "score_1h": 1.9408240794856808,
    "score_4h": 0.3382352941176471,
    "score_7d": 0.38565440969287124,
    "extracted_entities": "Damac - Al-Nassr - Partita di calcio - Squadre di calcio - Campionato saudita",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.20465537719193963,
    "score_1h": 0.0,
    "score_4h": 1.1890756302521008,
    "score_7d": 0.1750316990701606,
    "extracted_entities": "Alessandro Sallusti - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "nunzio stancampiano",
    "discover_score": 0.1812061272364832,
    "score_1h": 2.9051724137931036,
    "score_4h": 0.546218487394958,
    "score_7d": 0.21701535643843334,
    "extracted_entities": "Nunzio Stancampiano",
    "saturation_score": 8.0
  },
  {
    "rank": 51,
    "entity": "paradiso delle signore",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "rottamazione quinquies",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "banco bpm unicredit",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "donald trump papa francesco",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "sorella papa francesco",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "oblivion remake",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "cardinale scola",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "pete sampras",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "uomini e donne oggi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "dylan meyer",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "knicks - pistons",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "letto contenitore",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "marjorie taylor greene",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "rita pavone",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "siniakova",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "san giorgio",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "lunigiana",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "whatsapp",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "papa francesco emanuela orlandi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "copenaghen",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "incendio olbia",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "the last of us seconda stagione",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "sudakov",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "nuggets - clippers",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "playstation store",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "spider man 3",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "ps store",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "the last of us",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "oggi in tv",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "libero",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "sem steijn",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "ladakh",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "cocciaretto",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "neres",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "buongiorno",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "earth day",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "mps",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "agenzia delle entrate",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "instagram",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "chatgpt down",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "noipa",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "yahoo",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "tiscali",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "avanti un altro",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "suore di clausura",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "millionday",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "tim",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "danilo gallinari",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "noipa cedolino",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "dhl tracking",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "valentina uomini e donne",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "it",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "naomi ōsaka",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "emanuela orlandi papa francesco",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "bper",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "alife",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "massimo franco",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "girona vs real betis",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "desaparecidos",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "tottenham",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "rds",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "salvini",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "vangelo 22 aprile",
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
    "entity": "luana uomini e donne",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "teatro alla scala",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "barcellona inter",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "nba",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "buongiorno 22 aprile 2025",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "circoloco",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "luka romero",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "positano news",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "dmax",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "adani",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "jürgen klopp",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "idealista",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "insta360 x5",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "stellantis azioni",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "radio",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "ihostage",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "radio deejay",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "gwyneth paltrow",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "nottingham forest",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "criscitiello",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "lampedusa",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "monsignor viganò",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "tottenham nottingham forest",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "james franco",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "antonio spadaro",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "red",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "gialappashow",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "cambio euro dollaro",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "tom cruise",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "xabi alonso",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "lipari",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "mib 30",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "de zerbi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "randy orton",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "mission impossible",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "azioni unicredit",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "anders arborelius",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "rey mysterio",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "kevin costner",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "azioni eni",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "investing",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "roberto saviano",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "ralph fiennes",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "banca intesa",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "playoff nba",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "facundo lescano",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "luis henrique",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "vespa bruno",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "risultati nba",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "il mattino di padova",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "al pacino",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "javier cercas papa francesco",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "eni azioni",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "rhea ripley",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "padre enzo fortunato",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "lilli gruber",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "web mail",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "spider man 4",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "ali al sistani",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "the last of us streaming",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "incidente a1",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "logan paul",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "quotidiani oggi",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "oroscopo scorpione 22 aprile",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "braida",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "cody rhodes",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "dominik mysterio",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "ezio mauro",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "leicester",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "kanye west",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "graziano cesari",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "kristi noem",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "radio 24",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "kevin joseph farrell",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "euro dollaro",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "anthony hopkins",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "gazzetta di modena",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "bron breakker",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "travis scott",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "accordo stato regioni 17 aprile 2025",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "joe hendry",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "eugene the last of us",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "josi",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "aj styles",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "maria corleone",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "ben affleck",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "gnonto",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "c",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "mongolia",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "drew mcintyre",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "hostage",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "casteddu online",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "azioni mps",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "triesteprima",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "kirsten dunst",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "eco di bergamo",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "tiktok",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "l'eco di bergamo",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "bianca belair",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "damian priest",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "targato cn",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "ali agca",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "autostrade per l'italia",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "radio 105",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "paul rudd",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "l'adige",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-22 19:03:29",
  "trends_count": 228,
  "top_score": 15.018718347286473,
  "runtime_minutes": 5.029793413480123,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle sacre stanze delle tendenze digitali, tre temi principali si ergono come sovrani dell'attualità: il venerato gioco del calcio, la celebrazione della cultura e i drammi politici. La passione degli italiani per il calcio è insaziabile, come dimostra il fervore attorno a \"Inter - Roma\" (#1), un conflitto sportivo che continua ad alimentare l'immaginario collettivo. Parallelamente, la \"Festa della Liberazione\" (#3) ricorda l'importanza della memoria storica e dell'unità nazionale. Sul fronte politico, figure come \"Vladimir Putin\" (#5) e \"Benjamin Netanyahu\" (#15) evocano scenari complessi e tesi.\n\nNel mistico regno delle opportunità, le vaporose acque di Google Discover rischiano di essere scosse dal trend \"Inter - Roma\" (#1) e dalla sacra celebrazione del \"25 aprile festa\" (#3). Entrambi i temi offrono bassi livelli di saturazione, rendendo propizie le maree per i creatori di contenuti pronti a cogliere l'onda dell'innovazione.\n\nTuttavia, ci si avvicini con cautela alla \"Festa della Liberazione\" (#3); nonostante il suo nobile DScore, un interesse che svanisce potrebbe impedire una risonanza duratura. Sia dato, dunque, saggio consiglio: cavalcate le onde del calcio e affinché le vostre narrazioni prosperino, prediligete la sincronia tra contenuti attuali e saturazione moderata."
};
