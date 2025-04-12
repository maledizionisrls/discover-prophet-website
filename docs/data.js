const trendData = [
  {
    "rank": 24,
    "entity": "premier league",
    "discover_score": 14.46422150106317,
    "score_1h": 68.31896551724137,
    "score_4h": 52.53991596638655,
    "score_7d": 20.967455621301774,
    "extracted_entities": "Premier League - Calcio - Campionato inglese - Squadre - Partite",
    "saturation_score": 207.0
  },
  {
    "rank": 1,
    "entity": "udinese - milan",
    "discover_score": 7.809559223868018,
    "score_1h": 42.02045587375804,
    "score_4h": 27.985294117647058,
    "score_7d": 3.7455621301775146,
    "extracted_entities": "Udinese - Milan - Serie A - Partita di calcio - Squadre di calcio",
    "saturation_score": 1740.0
  },
  {
    "rank": 19,
    "entity": "parigi roubaix",
    "discover_score": 6.943276769710039,
    "score_1h": 25.70689655172414,
    "score_4h": 38.05252100840336,
    "score_7d": 8.479289940828401,
    "extracted_entities": "Parigi-Roubaix - Ciclismo - Gara - Francia - Classica Monumento",
    "saturation_score": 82.0
  },
  {
    "rank": 5,
    "entity": "lorenzo musetti",
    "discover_score": 5.036671947143149,
    "score_1h": 59.724137931034484,
    "score_4h": 30.275210084033613,
    "score_7d": 3.514792899408284,
    "extracted_entities": "Lorenzo Musetti - Tennis - ATP - Italia",
    "saturation_score": 83.0
  },
  {
    "rank": 3,
    "entity": "venezia - monza",
    "discover_score": 3.9541264867902814,
    "score_1h": 42.28448275862069,
    "score_4h": 26.634453781512605,
    "score_7d": 1.8875739644970415,
    "extracted_entities": "Venezia - Monza - Città - Viaggio - Turismo",
    "saturation_score": 254.0
  },
  {
    "rank": 6,
    "entity": "salernitana - südtirol",
    "discover_score": 3.693023637738746,
    "score_1h": 40.98275862068965,
    "score_4h": 30.764705882352942,
    "score_7d": 1.695266272189349,
    "extracted_entities": "Salernitana - Südtirol - Calcio - Partita - Serie B",
    "saturation_score": 23.0
  },
  {
    "rank": 4,
    "entity": "manchester city - crystal palace",
    "discover_score": 3.1893880670242467,
    "score_1h": 36.23275862068966,
    "score_4h": 19.41176470588235,
    "score_7d": 2.2958579881656807,
    "extracted_entities": "Manchester City - Crystal Palace - Partita di calcio - Premier League",
    "saturation_score": 81.0
  },
  {
    "rank": 26,
    "entity": "mesina",
    "discover_score": 2.9765752355047166,
    "score_1h": 9.663793103448276,
    "score_4h": 26.720588235294116,
    "score_7d": 2.6508875739644973,
    "extracted_entities": "Mesina - Cognome - Sardegna - Criminalità - Banda",
    "saturation_score": 710.0
  },
  {
    "rank": 12,
    "entity": "reggiana - pisa",
    "discover_score": 2.8371106857415294,
    "score_1h": 45.48275862068966,
    "score_4h": 29.0609243697479,
    "score_7d": 1.2218934911242605,
    "extracted_entities": "Reggiana - Pisa - Calcio - Partita - Serie B",
    "saturation_score": 58.0
  },
  {
    "rank": 14,
    "entity": "maignan",
    "discover_score": 2.3497213640511507,
    "score_1h": 4.439655172413793,
    "score_4h": 7.224789915966387,
    "score_7d": 4.730769230769231,
    "extracted_entities": "Mike Maignan - Calcio - AC Milan - Portiere - Francia",
    "saturation_score": 1040.0
  },
  {
    "rank": 23,
    "entity": "parigi roubaix 2025",
    "discover_score": 2.3355206828522403,
    "score_1h": 12.405172413793103,
    "score_4h": 11.109243697478991,
    "score_7d": 4.301775147928994,
    "extracted_entities": "Parigi-Roubaix - 2025 - Ciclismo - Gara - Francia",
    "saturation_score": 28.0
  },
  {
    "rank": 11,
    "entity": "carrarese - catanzaro",
    "discover_score": 2.1427969613182043,
    "score_1h": 44.14655172413793,
    "score_4h": 17.462184873949578,
    "score_7d": 1.695266272189349,
    "extracted_entities": "Carrarese - Catanzaro - Calcio - Partita - Serie C",
    "saturation_score": 59.0
  },
  {
    "rank": 25,
    "entity": "gp bahrain",
    "discover_score": 2.1269272391999285,
    "score_1h": 1.8879310344827587,
    "score_4h": 3.539915966386555,
    "score_7d": 5.763313609467456,
    "extracted_entities": "Gran Premio - Bahrain - Formula 1",
    "saturation_score": 284.0
  },
  {
    "rank": 7,
    "entity": "sampdoria - cittadella",
    "discover_score": 1.8240639334035054,
    "score_1h": 28.92241379310345,
    "score_4h": 14.231092436974789,
    "score_7d": 1.304733727810651,
    "extracted_entities": "Sampdoria - Cittadella - Partita di calcio - Serie B",
    "saturation_score": 74.0
  },
  {
    "rank": 9,
    "entity": "bari - palermo",
    "discover_score": 1.803527399599435,
    "score_1h": 0.0,
    "score_4h": 0.8676470588235294,
    "score_7d": 4.553254437869823,
    "extracted_entities": "Bari - Palermo - Città - Viaggio - Italia",
    "saturation_score": 207.0
  },
  {
    "rank": 10,
    "entity": "cosenza - brescia",
    "discover_score": 1.4703785570982966,
    "score_1h": 35.14655172413793,
    "score_4h": 10.983193277310924,
    "score_7d": 1.3816568047337277,
    "extracted_entities": "Cosenza - Brescia - Calcio - Serie B - Partita",
    "saturation_score": 126.0
  },
  {
    "rank": 27,
    "entity": "alcaraz oggi",
    "discover_score": 1.4160435227578114,
    "score_1h": 0.8362068965517242,
    "score_4h": 4.5399159663865545,
    "score_7d": 3.43491124260355,
    "extracted_entities": "Carlos Alcaraz - Tennis - Partita di oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "inter - cagliari",
    "discover_score": 1.4118489534270533,
    "score_1h": 24.120689655172413,
    "score_4h": 7.031512605042017,
    "score_7d": 1.136094674556213,
    "extracted_entities": "Inter - Cagliari - Partita di calcio - Serie A",
    "saturation_score": 563.0
  },
  {
    "rank": 8,
    "entity": "modella lucy markovic",
    "discover_score": 1.2481915442813676,
    "score_1h": 4.241379310344827,
    "score_4h": 7.67436974789916,
    "score_7d": 1.4171597633136095,
    "extracted_entities": "Modella - Lucy Markovic",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "simba la rue",
    "discover_score": 1.1888432758418772,
    "score_1h": 0.0,
    "score_4h": 1.703781512605042,
    "score_7d": 3.2781065088757395,
    "extracted_entities": "Simba La Rue - Musica - Rap - Artista",
    "saturation_score": 239.0
  },
  {
    "rank": 18,
    "entity": "liliana resinovich",
    "discover_score": 1.1184208286959403,
    "score_1h": 0.7155172413793103,
    "score_4h": 2.7478991596638656,
    "score_7d": 2.7189349112426036,
    "extracted_entities": "Liliana Resinovich",
    "saturation_score": 360.0
  },
  {
    "rank": 33,
    "entity": "giuseppe carrisi",
    "discover_score": 1.1150917747249742,
    "score_1h": 0.6810344827586207,
    "score_4h": 4.069327731092437,
    "score_7d": 2.7159763313609466,
    "extracted_entities": "Giuseppe Carrisi",
    "saturation_score": 46.0
  },
  {
    "rank": 29,
    "entity": "valentina violinista propaganda live",
    "discover_score": 1.0484132017019963,
    "score_1h": 0.0,
    "score_4h": 0.4012605042016807,
    "score_7d": 3.411242603550296,
    "extracted_entities": "Valentina - Violinista - Propaganda Live",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "chi ha vinto the voice senior 2025",
    "discover_score": 1.0377548141036725,
    "score_1h": 0.5862068965517241,
    "score_4h": 1.4432773109243697,
    "score_7d": 2.6390532544378695,
    "extracted_entities": "The Voice Senior - Vincitore - 2025",
    "saturation_score": 7.0
  },
  {
    "rank": 34,
    "entity": "qualifiche motogp",
    "discover_score": 1.0270040903252824,
    "score_1h": 6.629310344827586,
    "score_4h": 9.491596638655462,
    "score_7d": 1.1242603550295858,
    "extracted_entities": "MotoGP - Qualifiche - Gare - Piloti - Circuiti",
    "saturation_score": 4.0
  },
  {
    "rank": 50,
    "entity": "coachella",
    "discover_score": 0.9282516465745461,
    "score_1h": 2.543103448275862,
    "score_4h": 2.327731092436975,
    "score_7d": 2.7514792899408285,
    "extracted_entities": "Coachella - Festival musicale - Indio - California - Eventi musicali",
    "saturation_score": 62.0
  },
  {
    "rank": 17,
    "entity": "cavese - catania",
    "discover_score": 0.889359628707651,
    "score_1h": 17.982758620689655,
    "score_4h": 4.995798319327731,
    "score_7d": 1.4201183431952662,
    "extracted_entities": "Cavese - Catania - Calcio - Serie D - Partita",
    "saturation_score": 31.0
  },
  {
    "rank": 21,
    "entity": "real sociedad - mallorca",
    "discover_score": 0.846941672186855,
    "score_1h": 2.405172413793103,
    "score_4h": 9.201680672268907,
    "score_7d": 0.4911242603550296,
    "extracted_entities": "Real Sociedad - Mallorca - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "juve lecce",
    "discover_score": 0.7525151042169836,
    "score_1h": 7.560344827586206,
    "score_4h": 3.592436974789916,
    "score_7d": 1.5266272189349113,
    "extracted_entities": "Juventus - Lecce - Serie A - Partita di calcio - Campionato italiano",
    "saturation_score": 125.0
  },
  {
    "rank": 40,
    "entity": "gt vs lsg",
    "discover_score": 0.7465303695086062,
    "score_1h": 0.0,
    "score_4h": 2.6617647058823533,
    "score_7d": 1.8875739644970415,
    "extracted_entities": "GT - LSG - Cricket - Indian Premier League - Squadre",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "michael jordan",
    "discover_score": 0.633237562734165,
    "score_1h": 0.0603448275862069,
    "score_4h": 0.384453781512605,
    "score_7d": 2.0059171597633134,
    "extracted_entities": "Michael Jordan - Basket - NBA - Chicago Bulls - Air Jordan",
    "saturation_score": 9.0
  },
  {
    "rank": 49,
    "entity": "castellucci",
    "discover_score": 0.6271404223867092,
    "score_1h": 1.6810344827586206,
    "score_4h": 0.41386554621848737,
    "score_7d": 2.1242603550295858,
    "extracted_entities": "Romeo Castellucci - Teatro - Regista",
    "saturation_score": 451.0
  },
  {
    "rank": 16,
    "entity": "stefano amadio giornalista",
    "discover_score": 0.621633837118236,
    "score_1h": 1.0775862068965518,
    "score_4h": 3.829831932773109,
    "score_7d": 0.849112426035503,
    "extracted_entities": "Stefano Amadio - Giornalista",
    "saturation_score": 7.0
  },
  {
    "rank": 22,
    "entity": "sara errani",
    "discover_score": 0.5364339949177552,
    "score_1h": 20.663793103448278,
    "score_4h": 4.821428571428572,
    "score_7d": 0.4467455621301775,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 15,
    "entity": "costantino vitagliano",
    "discover_score": 0.5146810861229517,
    "score_1h": 14.741379310344827,
    "score_4h": 3.042016806722689,
    "score_7d": 0.6775147928994083,
    "extracted_entities": "Costantino Vitagliano - Personaggio televisivo - Italia - Uomini e Donne - Reality show",
    "saturation_score": 252.0
  },
  {
    "rank": 35,
    "entity": "manifestazione milano oggi",
    "discover_score": 0.4448247239741838,
    "score_1h": 1.0603448275862069,
    "score_4h": 1.2016806722689075,
    "score_7d": 1.0946745562130178,
    "extracted_entities": "Manifestazione - Milano - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "southampton - aston villa",
    "discover_score": 0.41687673485251764,
    "score_1h": 3.9655172413793105,
    "score_4h": 2.5588235294117645,
    "score_7d": 0.650887573964497,
    "extracted_entities": "Southampton - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 6.0
  },
  {
    "rank": 30,
    "entity": "fortuna sittard - feyenoord",
    "discover_score": 0.3960278277767831,
    "score_1h": 3.456896551724138,
    "score_4h": 1.0840336134453783,
    "score_7d": 0.9023668639053254,
    "extracted_entities": "Fortuna Sittard - Feyenoord - Partita di calcio - Eredivisie",
    "saturation_score": 2.0
  },
  {
    "rank": 42,
    "entity": "leverkusen - union berlino",
    "discover_score": 0.3953149956771439,
    "score_1h": 2.5517241379310347,
    "score_4h": 3.577731092436975,
    "score_7d": 0.36094674556213013,
    "extracted_entities": "Leverkusen - Union Berlino - Partita di calcio - Bundesliga",
    "saturation_score": 9.0
  },
  {
    "rank": 31,
    "entity": "pbks vs srh",
    "discover_score": 0.38629365130856497,
    "score_1h": 9.78448275862069,
    "score_4h": 3.966386554621849,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "PBKS - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "lda",
    "discover_score": 0.38404356900459485,
    "score_1h": 6.456896551724138,
    "score_4h": 1.5567226890756303,
    "score_7d": 0.8047337278106509,
    "extracted_entities": "Latent Dirichlet Allocation - Machine Learning - Topic Modeling",
    "saturation_score": 170.0
  },
  {
    "rank": 36,
    "entity": "az picerno - latina",
    "discover_score": 0.3726043430273145,
    "score_1h": 6.625073056691993,
    "score_4h": 1.111344537815126,
    "score_7d": 0.8402366863905326,
    "extracted_entities": "AZ Picerno - Latina - Calcio - Serie C",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "antigua",
    "discover_score": 0.3517874397814892,
    "score_1h": 9.46551724137931,
    "score_4h": 2.9516806722689077,
    "score_7d": 0.35798816568047337,
    "extracted_entities": "Antigua - Caraibi - Turismo - Isole Leeward - Spiagge",
    "saturation_score": 4.0
  },
  {
    "rank": 41,
    "entity": "nottingham forest - everton",
    "discover_score": 0.24333736794790592,
    "score_1h": 0.4482758620689655,
    "score_4h": 1.4012605042016806,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Nottingham Forest - Everton - Partita di calcio - Premier League",
    "saturation_score": 4.0
  },
  {
    "rank": 39,
    "entity": "monaco - olympique marsiglia",
    "discover_score": 0.23118654444882594,
    "score_1h": 3.043103448275862,
    "score_4h": 0.6722689075630253,
    "score_7d": 0.3875739644970414,
    "extracted_entities": "Monaco - Olympique Marsiglia - Calcio - Ligue 1 - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "pauline ferrand-prévot",
    "discover_score": 0.1645891850169753,
    "score_1h": 0.017241379310344827,
    "score_4h": 0.3760504201680672,
    "score_7d": 0.1923076923076923,
    "extracted_entities": "Pauline Ferrand-Prévot - Ciclismo - Campionessa - Francia",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "carta dedicata a te 2025 ricarica",
    "discover_score": 0.15668135627915558,
    "score_1h": 1.0,
    "score_4h": 0.34243697478991597,
    "score_7d": 0.16272189349112426,
    "extracted_entities": "Carta Dedicata a Te - 2025 - Ricarica",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "pianese - pineto",
    "discover_score": 0.1471182434170593,
    "score_1h": 0.2327586206896552,
    "score_4h": 0.3382352941176471,
    "score_7d": 0.1242603550295858,
    "extracted_entities": "Pianese - Pineto - Calcio - Serie D",
    "saturation_score": 4.0
  },
  {
    "rank": 38,
    "entity": "brighton & hove albion - leicester city",
    "discover_score": 0.13556171729547029,
    "score_1h": 2.3017241379310347,
    "score_4h": 0.3676470588235294,
    "score_7d": 0.05917159763313609,
    "extracted_entities": "Brighton & Hove Albion - Leicester City - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "clodiense - atalanta u-23",
    "discover_score": 0.11533701772359711,
    "score_1h": 0.0,
    "score_4h": 0.20168067226890757,
    "score_7d": 0.023668639053254437,
    "extracted_entities": "Clodiense - Atalanta U-23 - Partita di calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "damiano carrara",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "mattia bellucci",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "bayer leverkusen",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "kaufland",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "domenica delle palme 2025",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "david parenzo",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "perugia - sestri levante",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "leverkusen",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "valencia - siviglia",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "steel ball run",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "guerra ucraina russia",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "coachella 2025",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "decreto sicurezza gazzetta ufficiale",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "s&p rating italia",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "bonus elettrodomestici 2025",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "disattivare meta ai whatsapp",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "getafe - las palmas",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "مان سيتي ضد كريستال بالاس",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "simona izzo",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "lakers - rockets",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "samsunspor - galatasaray",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "sampdoria - lazio",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "priyansh arya",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "derby roma lazio",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "barcellona - virtus bologna",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "previsioni meteo pasqua pasquetta",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "minimoto",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "wolfsburg - rb lipsia",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "trail blazers - warriors",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "celtic - kilmarnock",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "pingitore",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "shiva sfera ebbasta",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "michele traversa",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "rami malek",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "nuggets - grizzlies",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "emma corrin",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "polestar",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "operazione vendetta",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "antonella viola",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "manuel neuer",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "bochum - augsburg",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "tommy cash",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "armenia",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "polestar 3",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "elysium orologi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "investments",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "ac milan",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "michael jordan oggi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "torino comics",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "ancona",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "luna piena",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "conero",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "conte juventus",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "renzo arbore",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "angelina jolie",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "castelfidardo",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "arzignano valchiampo - caldiero terme",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "al-ettifaq - al hilal",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "richard mille",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "lumezzane - novara",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "abigail esparza reyes",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "pistons - bucks",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "alcione - feralpisalò",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "mission impossible 3",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "fidanzata clementino",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "jordan",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "gabriele lavia",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "rino gaetano",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "celtics - hornets",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "eboli",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "lebron james",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "pagamento assegno unico aprile 2025",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "black mirror 7",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "kings - clippers",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "air",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "matt damon",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "classifica nba",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "estrazione lotto",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "grok",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "milan news",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "mavericks - raptors",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "space cowboys",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lens reims",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "karla sofía gascón",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "montenegro",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "ministro urso",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "rita de crescenzo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "udine",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "showers",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "montezemolo",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "mickey rourke",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "atp live",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "incidente elicottero new york",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "renato zero",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "stefania battistini",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "quetta gladiators vs peshawar zalmi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "belve",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "ben affleck",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "investment advisor",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "isola d'elba",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "aspi",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "millionday",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "bill gates",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "seborga",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "atene",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "suns - spurs",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "propaganda live stasera",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "samsunspor vs galatasaray",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "estrazione eurojackpot oggi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "the last of us",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "san cataldo",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "giant",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "natalia grace",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "phuket",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "bordighera",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "loredana",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "iker bravo",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "asta btp 11 aprile 2025",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "francesco pio esposito",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "willem dafoe",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "bracciano",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "strahinja pavlović",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "montepremi montecarlo 2025",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "lorenzo lucca",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "الطقس غدًا",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "mulazzo",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "messaggero veneto",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "carofiglio",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "lahore qalandars vs islamabad united",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "rinku singh",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "il giardiniere netflix",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "anticipazioni tradimento",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "good american family storia vera",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "wolfsburg lipsia",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "casa a prima vista",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "restaurant",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "casteddu online",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "moratti",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "theo hernández",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "omicidio boiocchi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "magic johnson",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "gazzettino",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "marotta inter",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "panatta",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "la verità",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-12 15:42:15",
  "trends_count": 198,
  "top_score": 14.46422150106317,
  "runtime_minutes": 3.7637821714083355,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle correnti turbolente dell'informazione, tre temi principali emergono gloriosi dai recenti trend: il calcio domina la scena, da match di Serie A alla Premier League, unendo tifosi e appassionati in un'esplosione di emozioni. Il ciclismo fa capolino con la storica gara Parigi-Roubaix mentre la musica e gli eventi culturali, come il festival Coachella, catturano l'animo di coloro che cercano evasione e celebrazione.\n\nTra le prestigiose opportunità per chi cerca gloria su Discover, il #3 'parigi roubaix' decanta il suo potenziale con un DScore accattivante e una saturazione amichevole. La prospettiva di contenuti dominati dall'adrenalina delle due ruote promette coinvolgimento appassionato. Similmente, il #12 'carrarese - catanzaro' con la sua intrigante chiave di nicchia e un DScore rispettabile invita alla scoperta tra le leggendarie gesta calcistiche di Serie C.\n\nTuttavia, il popolo degli scribi dovrebbe manovrare con cautela intorno a giganti come il #2 'udinese - milan', il cui terreno saturo e competitivo rischia di avvolgere chi osa avventurarsi senza guida. Infine, un consiglio ai figli del contenuto: ascoltate i venti del tempo, cavalcate le onde delle tendenze, ma non dimenticate di essere unici nelle narrazioni che intessete."
};
