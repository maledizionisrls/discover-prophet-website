const trendData = [
  {
    "rank": 11,
    "entity": "atp montecarlo",
    "discover_score": 9.680758400951262,
    "score_1h": 30.387931034482758,
    "score_4h": 13.922040364262859,
    "score_7d": 17.21301775147929,
    "extracted_entities": "ATP - Montecarlo - Tennis - Torneo - Principato di Monaco",
    "saturation_score": 45.0
  },
  {
    "rank": 1,
    "entity": "monza - como",
    "discover_score": 5.51179651115747,
    "score_1h": 78.19827586206897,
    "score_4h": 31.905462184873947,
    "score_7d": 1.4881656804733727,
    "extracted_entities": "Monza - Como - Città - Lombardia - Italia",
    "saturation_score": 249.0
  },
  {
    "rank": 13,
    "entity": "eminem",
    "discover_score": 4.901393367859822,
    "score_1h": 4.370689655172414,
    "score_4h": 1.0420168067226891,
    "score_7d": 12.050295857988164,
    "extracted_entities": "Eminem - Rap - Musica - Artista - Album",
    "saturation_score": 52.0
  },
  {
    "rank": 32,
    "entity": "roma juve",
    "discover_score": 4.656215654099141,
    "score_1h": 2.6810344827586206,
    "score_4h": 1.6512605042016806,
    "score_7d": 13.588757396449704,
    "extracted_entities": "Roma - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 91.0
  },
  {
    "rank": 22,
    "entity": "darderi",
    "discover_score": 4.5033651753226565,
    "score_1h": 26.767241379310345,
    "score_4h": 18.021008403361343,
    "score_7d": 8.068047337278106,
    "extracted_entities": "Darderi - Tennis - Giocatore",
    "saturation_score": 267.0
  },
  {
    "rank": 5,
    "entity": "everton - arsenal",
    "discover_score": 4.371988281990891,
    "score_1h": 25.594827586206897,
    "score_4h": 29.37496923455575,
    "score_7d": 2.6834319526627217,
    "extracted_entities": "Everton - Arsenal - Premier League - Calcio - Partita",
    "saturation_score": 43.0
  },
  {
    "rank": 28,
    "entity": "wanda nara",
    "discover_score": 3.9838419320546845,
    "score_1h": 41.577586206896555,
    "score_4h": 21.147058823529413,
    "score_7d": 6.517751479289941,
    "extracted_entities": "Wanda Nara - Personaggio pubblico - Gossip - Spettacolo - Argentina",
    "saturation_score": 58.0
  },
  {
    "rank": 7,
    "entity": "brescia - mantova",
    "discover_score": 3.401550246916649,
    "score_1h": 36.57758620689655,
    "score_4h": 23.819327731092436,
    "score_7d": 2.5147928994082838,
    "extracted_entities": "Brescia - Mantova - Città - Lombardia - Turismo",
    "saturation_score": 44.0
  },
  {
    "rank": 4,
    "entity": "frosinone - cosenza",
    "discover_score": 3.268865891888812,
    "score_1h": 59.939655172413794,
    "score_4h": 24.68487394957983,
    "score_7d": 1.5621301775147929,
    "extracted_entities": "Frosinone - Cosenza - Calcio - Serie B - Partita",
    "saturation_score": 89.0
  },
  {
    "rank": 16,
    "entity": "milan fiorentina",
    "discover_score": 2.873215289734275,
    "score_1h": 12.120689655172413,
    "score_4h": 10.38655462184874,
    "score_7d": 5.4171597633136095,
    "extracted_entities": "Milan - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 243.0
  },
  {
    "rank": 26,
    "entity": "elettra lamborghini",
    "discover_score": 2.730608732076933,
    "score_1h": 2.6810344827586206,
    "score_4h": 7.866961428923034,
    "score_7d": 6.372781065088757,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia - Musica",
    "saturation_score": 34.0
  },
  {
    "rank": 2,
    "entity": "genoa - udinese",
    "discover_score": 2.6355632189130014,
    "score_1h": 0.3103448275862069,
    "score_4h": 6.762605042016807,
    "score_7d": 3.1538461538461537,
    "extracted_entities": "Genoa - Udinese - Serie A - Calcio - Partita",
    "saturation_score": 782.0
  },
  {
    "rank": 6,
    "entity": "come disattivare meta ai su whatsapp",
    "discover_score": 2.410774284859934,
    "score_1h": 11.0,
    "score_4h": 5.968487394957983,
    "score_7d": 4.1923076923076925,
    "extracted_entities": "Disattivare - Meta - AI - WhatsApp",
    "saturation_score": 3.0
  },
  {
    "rank": 24,
    "entity": "flavio cobolli",
    "discover_score": 2.3066741594715667,
    "score_1h": 2.043103448275862,
    "score_4h": 6.894957983193278,
    "score_7d": 5.340236686390533,
    "extracted_entities": "Flavio Cobolli - Tennis - Giocatore - Italia",
    "saturation_score": 33.0
  },
  {
    "rank": 3,
    "entity": "real madrid - valencia",
    "discover_score": 1.819426571780649,
    "score_1h": 42.922413793103445,
    "score_4h": 11.926470588235293,
    "score_7d": 1.162721893491124,
    "extracted_entities": "Real Madrid - Valencia - Calcio - Partita - Liga Spagnola",
    "saturation_score": 9.0
  },
  {
    "rank": 10,
    "entity": "sestri levante - milan futuro",
    "discover_score": 1.8008039677153749,
    "score_1h": 33.577586206896555,
    "score_4h": 16.918067226890756,
    "score_7d": 1.0207100591715976,
    "extracted_entities": "Sestri Levante - Milan - Futuro",
    "saturation_score": 10.0
  },
  {
    "rank": 20,
    "entity": "neve aprile",
    "discover_score": 1.7153332787187576,
    "score_1h": 5.982758620689655,
    "score_4h": 1.8781512605042017,
    "score_7d": 4.795857988165681,
    "extracted_entities": "Neve - Aprile - Condizioni meteorologiche",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "hummels",
    "discover_score": 1.5354344563157587,
    "score_1h": 0.7931034482758621,
    "score_4h": 1.0357142857142858,
    "score_7d": 4.458579881656805,
    "extracted_entities": "Mats Hummels - Calcio - Borussia Dortmund - Germania - Difensore",
    "saturation_score": 414.0
  },
  {
    "rank": 14,
    "entity": "manifestazione 5 aprile roma",
    "discover_score": 1.4528717116753382,
    "score_1h": 4.689655172413793,
    "score_4h": 2.168067226890756,
    "score_7d": 3.674556213017752,
    "extracted_entities": "Manifestazione - 5 aprile - Roma",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "cittadella - carrarese",
    "discover_score": 1.3342603676525056,
    "score_1h": 10.405172413793103,
    "score_4h": 11.119396294082486,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Cittadella - Carrarese - Calcio - Partita - Serie C",
    "saturation_score": 34.0
  },
  {
    "rank": 12,
    "entity": "augsburg - bayern monaco",
    "discover_score": 1.3302995172425744,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.43487394957983194,
    "score_7d": 3.6863905325443787,
    "extracted_entities": "Augsburg - Bayern Monaco - Calcio - Bundesliga",
    "saturation_score": 10.0
  },
  {
    "rank": 17,
    "entity": "giro delle fiandre 2025",
    "discover_score": 1.2164821157360408,
    "score_1h": 0.7672413793103448,
    "score_4h": 0.9243697478991597,
    "score_7d": 3.4674556213017755,
    "extracted_entities": "Giro delle Fiandre - 2025 - Ciclismo - Belgio - Evento sportivo",
    "saturation_score": 30.0
  },
  {
    "rank": 15,
    "entity": "qualifiche f1 giappone",
    "discover_score": 1.1926743050485984,
    "score_1h": 1.0775862068965516,
    "score_4h": 1.3823529411764706,
    "score_7d": 3.1923076923076925,
    "extracted_entities": "Qualifiche - Formula 1 - Giappone - Gran Premio",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "az - feyenoord",
    "discover_score": 1.085979660342698,
    "score_1h": 33.62068965517241,
    "score_4h": 7.834033613445378,
    "score_7d": 1.047337278106509,
    "extracted_entities": "AZ Alkmaar - Feyenoord - Calcio - Eredivisie - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "ddl sicurezza decreto legge",
    "discover_score": 0.9800206131237443,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.8403361344537815,
    "score_7d": 2.378698224852071,
    "extracted_entities": "DDL Sicurezza - Decreto Legge - Legislazione - Governo - Sicurezza Pubblica",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "katia ricciarelli",
    "discover_score": 0.7437327678108147,
    "score_1h": 9.35344827586207,
    "score_4h": 4.493697478991596,
    "score_7d": 1.331360946745562,
    "extracted_entities": "Katia Ricciarelli - Cantante lirica - Italia",
    "saturation_score": 5.0
  },
  {
    "rank": 36,
    "entity": "patrizia rossetti",
    "discover_score": 0.6146298974558173,
    "score_1h": 10.60344827586207,
    "score_4h": 2.745798319327731,
    "score_7d": 1.3402366863905324,
    "extracted_entities": "Patrizia Rossetti - Personaggio televisivo - Italia - Spettacolo",
    "saturation_score": 2.0
  },
  {
    "rank": 23,
    "entity": "the voice senior semifinale",
    "discover_score": 0.5840343678984417,
    "score_1h": 0.0,
    "score_4h": 0.7899159663865547,
    "score_7d": 1.606508875739645,
    "extracted_entities": "The Voice Senior - Semifinale - Programma TV - Concorrenti - Giudici",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "giulia arena",
    "discover_score": 0.5712146217152259,
    "score_1h": 9.275862068965516,
    "score_4h": 2.707983193277311,
    "score_7d": 1.1449704142011834,
    "extracted_entities": "Giulia Arena - Persone - Intrattenimento - Miss Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 43,
    "entity": "molly kochan",
    "discover_score": 0.5131638304737312,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.7485207100591715,
    "extracted_entities": "Molly Kochan",
    "saturation_score": 4.0
  },
  {
    "rank": 25,
    "entity": "psg - angers",
    "discover_score": 0.4241955080456399,
    "score_1h": 12.698275862068964,
    "score_4h": 3.638655462184874,
    "score_7d": 0.35798816568047337,
    "extracted_entities": "PSG - Angers - Calcio - Partita - Ligue 1",
    "saturation_score": 8.0
  },
  {
    "rank": 35,
    "entity": "vis pesaro - rimini",
    "discover_score": 0.42186303308149686,
    "score_1h": 3.8448275862068964,
    "score_4h": 0.7247899159663865,
    "score_7d": 1.1331360946745561,
    "extracted_entities": "Vis Pesaro - Rimini - Partita di calcio - Serie C - Derby",
    "saturation_score": 10.0
  },
  {
    "rank": 30,
    "entity": "rr vs pbks",
    "discover_score": 0.3821394291211582,
    "score_1h": 4.7155172413793105,
    "score_4h": 1.3319327731092439,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "RR - PBKS - Indian Premier League - Cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 40,
    "entity": "ernesto iaccarino",
    "discover_score": 0.37346192600006906,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.5630252100840336,
    "score_7d": 1.0118343195266273,
    "extracted_entities": "Ernesto Iaccarino",
    "saturation_score": 3.0
  },
  {
    "rank": 21,
    "entity": "dc vs csk",
    "discover_score": 0.36585168250895495,
    "score_1h": 2.0,
    "score_4h": 2.1281512605042017,
    "score_7d": 0.46153846153846156,
    "extracted_entities": "DC - CSK - Indian Premier League - Cricket - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "real madrid vs valencia",
    "discover_score": 0.36191111345225035,
    "score_1h": 2.7672413793103448,
    "score_4h": 1.495798319327731,
    "score_7d": 0.6449704142011834,
    "extracted_entities": "Real Madrid - Valencia - Partita di calcio - La Liga - Squadre di calcio",
    "saturation_score": 5.0
  },
  {
    "rank": 50,
    "entity": "juventus next gen",
    "discover_score": 0.35589080273203416,
    "score_1h": 1.7413793103448276,
    "score_4h": 0.9705882352941176,
    "score_7d": 0.8727810650887574,
    "extracted_entities": "Juventus - Next Gen - Calcio - Squadra - Giovani Talenti",
    "saturation_score": 9.0
  },
  {
    "rank": 44,
    "entity": "orso maria guerrini",
    "discover_score": 0.35132330821418695,
    "score_1h": 0.0,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.9467455621301775,
    "extracted_entities": "Orso Maria Guerrini - Attore - Cinema italiano - Televisione italiana",
    "saturation_score": 7.0
  },
  {
    "rank": 42,
    "entity": "heidenheim - leverkusen",
    "discover_score": 0.34174258771720023,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.4222689075630252,
    "score_7d": 0.9289940828402368,
    "extracted_entities": "Heidenheim - Leverkusen - Calcio - Bundesliga",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "james polk",
    "discover_score": 0.331281961486032,
    "score_1h": 0.0,
    "score_4h": 0.20378151260504201,
    "score_7d": 0.9408284023668639,
    "extracted_entities": "James Polk - Presidente degli Stati Uniti - Politica - XIX secolo - Espansione territoriale",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "parma inter dove vederla",
    "discover_score": 0.31064997145428985,
    "score_1h": 2.5086206896551726,
    "score_4h": 0.23658626630568547,
    "score_7d": 0.78698224852071,
    "extracted_entities": "Parma - Inter - Diretta TV - Streaming",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "girona - alavés",
    "discover_score": 0.3017052891160647,
    "score_1h": 0.6724137931034483,
    "score_4h": 2.004201680672269,
    "score_7d": 0.34615384615384615,
    "extracted_entities": "Girona - Alavés - Partita di calcio - Liga Spagnola",
    "saturation_score": 1.0
  },
  {
    "rank": 48,
    "entity": "gianni ippoliti",
    "discover_score": 0.23730814372278242,
    "score_1h": 5.672413793103448,
    "score_4h": 1.346638655462185,
    "score_7d": 0.27218934911242604,
    "extracted_entities": "Gianni Ippoliti - Personaggio televisivo - Italia",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "gaia padovan",
    "discover_score": 0.20463643797240064,
    "score_1h": 0.0,
    "score_4h": 0.24321402201047781,
    "score_7d": 0.3846153846153846,
    "extracted_entities": "Gaia Padovan",
    "saturation_score": 10.0
  },
  {
    "rank": 34,
    "entity": "everton vs arsenal",
    "discover_score": 0.19826553839024688,
    "score_1h": 0.0,
    "score_4h": 0.38235294117647056,
    "score_7d": 0.3076923076923077,
    "extracted_entities": "Everton - Arsenal - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "friburgo - borussia dortmund",
    "discover_score": 0.19062611693915882,
    "score_1h": 0.20689655172413793,
    "score_4h": 0.4642857142857143,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Friburgo - Borussia Dortmund - Calcio - Bundesliga",
    "saturation_score": 7.0
  },
  {
    "rank": 47,
    "entity": "latina - trapani",
    "discover_score": 0.1858345761303699,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.38865546218487396,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Latina - Trapani - Città - Confronto",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "crystal palace - brighton & hove albion",
    "discover_score": 0.1803272075255469,
    "score_1h": 0.0,
    "score_4h": 0.025210084033613446,
    "score_7d": 0.34911242603550297,
    "extracted_entities": "Crystal Palace - Brighton & Hove Albion - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "west ham - afc bournemouth",
    "discover_score": 0.1645819214258655,
    "score_1h": 0.0,
    "score_4h": 0.47058823529411764,
    "score_7d": 0.17455621301775148,
    "extracted_entities": "West Ham - AFC Bournemouth - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "assane diao",
    "discover_score": 0.15215130024041107,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.33613445378151263,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Assane Diao",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "diao",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "giana erminio - trento",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "sudtirol cesena",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "manuela arcuri",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "reggiana - cremonese",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "lakers - pelicans",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "fran gonzález",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "al hilal - al-nassr",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "santo del giorno",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "antonio percassi",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "ipswich town - wolverhampton",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "tallon griekspoor",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "virtus bologna - olimpia milano",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "rita de crescenzo",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "pisa modena",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "bucharest open",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "maratona milano 2025",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "incendio scafati",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "fc südtirol",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "maria grazia cucinotta",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "corrado formigli",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "como 1907",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "kamil majchrzak",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "pineto - pescara",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "rayo vallecano - espanyol",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "muller",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "warriors - nuggets",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "gardaland",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "паша техник",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "avatar 3",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "svezia - italia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "sagittario oroscopo domani",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "nimes",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "samuele longo",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "robert downey jr",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "minecraft",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "piovani",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "romics 2025",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "olbia",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "bologna napoli",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "battery",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "donald trump",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "al nassr",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "vijay shankar",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "germania",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "il santo di oggi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "guido vianello",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "elena delle donne",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "new zealand vs pakistan",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "legnago - pianese",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "raptors - pistons",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "bisceglie",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "dazi trump cina",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "callejon",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "kevin campbell",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "parco sigurtà",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "ufo sweden",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "carbonara day",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "taken",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "favignana",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "celtics - suns",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "castro bologna",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "clippers - mavericks",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "carlo acutis",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "federico chimirri",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "miley cyrus",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "banksy",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "rockets - thunder",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "fp3 suzuka",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "sicilia express",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "augsburg – bayern",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "federico basso",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "mats hummels",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "siracusa",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "roberto parodi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "samantha lewes",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "chiambretti",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "devil may cry",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "cristina parodi",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bayern",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "niccolò fabi",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "pulse netflix",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "liam neeson",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "now tv",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "nba",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "nizza - nantes",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "mark wahlberg",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "justin bieber",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "sex and the city",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "heath ledger",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "contact",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "kevin bacon",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "firenze rocks",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "mia ceran",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "piero chiambretti",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "bulls - trail blazers",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "propaganda live",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "bundesliga",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "antonio albanese",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "oroscopo prossima settimana",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "estrazioni lotto oggi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "spurs - cavaliers",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "mel gibson",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "mission impossible",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "superman",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "campi flegrei",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "bellucci tennis",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "rod stewart",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "dr",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "valseriana news",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "francesca mannocchi",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "andrea agnelli",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "alessandra amoroso incinta",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "millionday",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "liza minnelli",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "5 aprile",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "selvaggia lucarelli",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "peschici",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "benedetta parodi",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "rayo vallecano",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "brescia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "riccione",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "intesa sanpaolo",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "vasto",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "classifica nba",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "nizza calcio",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "leonardo di caprio",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "castellammare di stabia",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "lilli gruber",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "powell",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "silvia salis",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "claudio borghi",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "naman dhir",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "elsa fornero",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "ministro urso",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "renzi",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "namibia",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "fornero",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "matteo renzi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "manolo gabbiadini",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "sarah jessica parker",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "valeria golino",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "san marino",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "istanbul",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "budapest",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "robin williams",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "bill gates",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "il centro",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "michael douglas",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "formia",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "inzago",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "brunello cucinelli",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "calenda",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "turkish airlines euroleague",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "monica maggioni",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "antonino spinalbese",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "william hill",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "csi",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "adnkronos",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "sofia kenin",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "studio ghibli",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "formazioni serie a",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "il paradiso delle signore anticipazioni dal 14 al 18 aprile 2025",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "radio 24",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "the last of us",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "wall street journal",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "bilbao",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "damir džumhur",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-05 14:40:28",
  "trends_count": 222,
  "top_score": 9.680758400951262,
  "runtime_minutes": 3.1597779790560403,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano un predominio di temi sportivi e musicali, emersi vigorosamente dai correnti flussi sociali. Il mondo del tennis vibra con l'\"ATP Montecarlo\" e figure come \"Darderi\", mentre il calcio è lungamente protagonista grazie a partite di ampio richiamo come \"Roma Juve\" e \"Everton - Arsenal\". Sul fronte musicale, il ritmo di \"Eminem\" incanta ancora le menti, elevando l'interesse per le sue creazioni artistiche.\n\nNel panorama delle opportunità di scoperta su Google Discover, il trend legato all’\"ATP Montecarlo\" (#1) ed \"Eminem\" (#3) si impone. Con un DScore significativo e una saturazione contenuta, queste narrazioni rinnovano l'incanto e promettono fresche prospettive di contenuto.\n\nCautela è consigliata verso le mareggiate del calcio, specialmente per \"Genoa - Udinese\" (#12), altamente saturato e forse già troppo esplorato. Inoltre, l'ambiguo e fugace interesse per \"Parma Inter dove vederla\" (#41) potrebbe dissiparsi rapidamente, nonostante il fervore spontaneo di breve durata.\n\nPer chi tesse racconti e contenuti, la diversificazione dei temi è essenziale. Abbracciare la varietà dei nuovi e rinascere con l’esperienza dei consolidati offrirà un equilibrio tra notorietà e innovazione."
};
