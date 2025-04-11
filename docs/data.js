const trendData = [
  {
    "rank": 45,
    "entity": "amore + iva",
    "discover_score": 30.716439705442884,
    "score_1h": 63.543103448275865,
    "score_4h": 66.73109243697479,
    "score_7d": 55.49112426035503,
    "extracted_entities": "Amore - IVA - Tasse - Sentimenti",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "prada",
    "discover_score": 16.427757534492603,
    "score_1h": 47.830654587960254,
    "score_4h": 32.060924369747895,
    "score_7d": 20.36390532544379,
    "extracted_entities": "Prada - Moda - Lusso - Abbigliamento - Accessori",
    "saturation_score": 851.0
  },
  {
    "rank": 11,
    "entity": "siemens",
    "discover_score": 13.029492042916544,
    "score_1h": 8.751753360607832,
    "score_4h": 12.596788087619986,
    "score_7d": 23.0207100591716,
    "extracted_entities": "Siemens - Tecnologia - Industria - Elettronica - Ingegneria",
    "saturation_score": 233.0
  },
  {
    "rank": 8,
    "entity": "scommesse",
    "discover_score": 9.052518930220648,
    "score_1h": 58.534628872004674,
    "score_4h": 31.40126050420168,
    "score_7d": 10.781065088757398,
    "extracted_entities": "Scommesse - Gioco d'azzardo - Quote - Siti di scommesse - Pronostici",
    "saturation_score": 3210.0
  },
  {
    "rank": 31,
    "entity": "als",
    "discover_score": 4.351696490161126,
    "score_1h": 2.0,
    "score_4h": 5.3276519812946095,
    "score_7d": 11.724852071005916,
    "extracted_entities": "Sclerosi Laterale Amiotrofica - Malattia - Ricerca medica - Sintomi - Trattamenti",
    "saturation_score": 33.0
  },
  {
    "rank": 1,
    "entity": "nk celje - fiorentina",
    "discover_score": 3.9432615332243506,
    "score_1h": 4.1465517241379315,
    "score_4h": 5.9518125241728495,
    "score_7d": 4.0828402366863905,
    "extracted_entities": "NK Celje - Fiorentina - Calcio - Partita - Europa League",
    "saturation_score": 23.0
  },
  {
    "rank": 3,
    "entity": "francesca michelon",
    "discover_score": 3.721773125534815,
    "score_1h": 0.7327586206896551,
    "score_4h": 2.107142857142857,
    "score_7d": 6.491124260355029,
    "extracted_entities": "Francesca Michelon",
    "saturation_score": 111.0
  },
  {
    "rank": 21,
    "entity": "musetti oggi",
    "discover_score": 3.235684208569455,
    "score_1h": 11.767241379310345,
    "score_4h": 3.491209873070567,
    "score_7d": 8.541420118343195,
    "extracted_entities": "Lorenzo Musetti - Tennis - Partita - Risultati - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "carlos alcaraz",
    "discover_score": 3.137271116192561,
    "score_1h": 60.40517241379311,
    "score_4h": 14.701680672268907,
    "score_7d": 3.633136094674556,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 71.0
  },
  {
    "rank": 37,
    "entity": "manchester united",
    "discover_score": 3.060088262645979,
    "score_1h": 2.413793103448276,
    "score_4h": 2.0,
    "score_7d": 9.42603550295858,
    "extracted_entities": "Manchester United - Calcio - Premier League - Old Trafford - Erik ten Hag",
    "saturation_score": 92.0
  },
  {
    "rank": 19,
    "entity": "udinese milan",
    "discover_score": 2.847219745601666,
    "score_1h": 6.862068965517242,
    "score_4h": 2.222689075630252,
    "score_7d": 7.718934911242603,
    "extracted_entities": "Udinese - Milan - Calcio - Serie A - Partita",
    "saturation_score": 362.0
  },
  {
    "rank": 5,
    "entity": "lione - manchester united",
    "discover_score": 2.631317745647187,
    "score_1h": 1.646551724137931,
    "score_4h": 0.28361344537815125,
    "score_7d": 5.840236686390533,
    "extracted_entities": "Lione - Manchester United - Calcio - Partita - Squadre",
    "saturation_score": 116.0
  },
  {
    "rank": 20,
    "entity": "bianca censori",
    "discover_score": 2.2976673560917793,
    "score_1h": 0.0,
    "score_4h": 0.8613445378151261,
    "score_7d": 6.701183431952662,
    "extracted_entities": "Bianca Censori",
    "saturation_score": 3.0
  },
  {
    "rank": 35,
    "entity": "11 aprile sciopero trenitalia",
    "discover_score": 2.2550731231783407,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.4873949579831933,
    "score_7d": 7.378698224852071,
    "extracted_entities": "11 aprile - Sciopero - Trenitalia",
    "saturation_score": 4.0
  },
  {
    "rank": 30,
    "entity": "lione manchester united",
    "discover_score": 1.9741572222088926,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.44327731092437,
    "score_7d": 5.810650887573965,
    "extracted_entities": "Lione - Manchester United - Calcio - Partita - Squadre",
    "saturation_score": 78.0
  },
  {
    "rank": 4,
    "entity": "elicottero new york",
    "discover_score": 1.7744751548647903,
    "score_1h": 15.372004675628288,
    "score_4h": 9.308823529411764,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Elicottero - New York - Trasporto - Turismo - Sicurezza",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "bodø/glimt - lazio",
    "discover_score": 1.7431799169911826,
    "score_1h": 1.0715955581531267,
    "score_4h": 2.0479149818923386,
    "score_7d": 2.7988165680473376,
    "extracted_entities": "Bodø/Glimt - Lazio - Calcio - Partita - Europa League",
    "saturation_score": 86.0
  },
  {
    "rank": 26,
    "entity": "inter cagliari",
    "discover_score": 1.6178958361119777,
    "score_1h": 5.698275862068966,
    "score_4h": 1.4264705882352942,
    "score_7d": 4.866863905325443,
    "extracted_entities": "Inter - Cagliari - Calcio - Serie A",
    "saturation_score": 166.0
  },
  {
    "rank": 17,
    "entity": "fils",
    "discover_score": 1.342016700273393,
    "score_1h": 24.344827586206897,
    "score_4h": 5.373949579831933,
    "score_7d": 2.668639053254438,
    "extracted_entities": "Fils - Valuta - Emirati Arabi Uniti - Denaro",
    "saturation_score": 108.0
  },
  {
    "rank": 32,
    "entity": "olimpia milano - baskonia",
    "discover_score": 1.2354277730561658,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.16527196652719664,
    "score_7d": 4.162721893491124,
    "extracted_entities": "Olimpia Milano - Baskonia - Pallacanestro - Eurolega - Partita",
    "saturation_score": 9.0
  },
  {
    "rank": 23,
    "entity": "legia varsavia - chelsea",
    "discover_score": 1.063828293855702,
    "score_1h": 0.0,
    "score_4h": 0.44790091768925144,
    "score_7d": 3.3136094674556213,
    "extracted_entities": "Legia Varsavia - Chelsea - Calcio - Partita - Club",
    "saturation_score": 7.0
  },
  {
    "rank": 27,
    "entity": "risultati europa league",
    "discover_score": 1.0279787623224457,
    "score_1h": 1.0948275862068966,
    "score_4h": 0.4124591259097781,
    "score_7d": 3.2988165680473376,
    "extracted_entities": "Risultati - Europa League - Calcio - Competizione UEFA",
    "saturation_score": 4.0
  },
  {
    "rank": 22,
    "entity": "pagamento assegno unico aprile 2025",
    "discover_score": 0.9363293386041119,
    "score_1h": 0.0,
    "score_4h": 0.6974174607081326,
    "score_7d": 2.8076923076923075,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "alejandro davidovich fokina",
    "discover_score": 0.8827753806286606,
    "score_1h": 0.6016949152542372,
    "score_4h": 0.38766217784184803,
    "score_7d": 2.532544378698225,
    "extracted_entities": "Alejandro Davidovich Fokina - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.8318986667247326,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.3340336134453782,
    "score_7d": 2.8846153846153846,
    "extracted_entities": "Stefanos Tsitsipas - Tennis - ATP - Grecia - Sport",
    "saturation_score": 29.0
  },
  {
    "rank": 25,
    "entity": "betis - jagiellonia białystok",
    "discover_score": 0.8313746612224291,
    "score_1h": 0.0,
    "score_4h": 0.5567226890756303,
    "score_7d": 2.559171597633136,
    "extracted_entities": "Betis - Jagiellonia Białystok - Calcio - Partita - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "chabal",
    "discover_score": 0.817398009445936,
    "score_1h": 0.0,
    "score_4h": 0.9943918990190218,
    "score_7d": 2.2455621301775146,
    "extracted_entities": "Sébastien Chabal - Rugby - Francia",
    "saturation_score": 40.0
  },
  {
    "rank": 29,
    "entity": "vincenzo e ilaria uomini e donne",
    "discover_score": 0.7349118206754942,
    "score_1h": 1.129310344827586,
    "score_4h": 0.819327731092437,
    "score_7d": 2.2159763313609466,
    "extracted_entities": "Vincenzo - Ilaria - Uomini e Donne",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "sfera ebbasta shiva",
    "discover_score": 0.7299547318103978,
    "score_1h": 2.603156049094097,
    "score_4h": 1.0273109243697478,
    "score_7d": 1.8254437869822486,
    "extracted_entities": "Sfera Ebbasta - Shiva - Musica - Collaborazione",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "papa francesco basilica san pietro",
    "discover_score": 0.7116913919881066,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4666678386835906,
    "score_7d": 2.3579881656804735,
    "extracted_entities": "Papa Francesco - Basilica di San Pietro - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "checco zalone",
    "discover_score": 0.6072849188604043,
    "score_1h": 1.130333138515488,
    "score_4h": 0.8300868464540627,
    "score_7d": 1.742603550295858,
    "extracted_entities": "Checco Zalone - Comico - Attore - Film - Italia",
    "saturation_score": 39.0
  },
  {
    "rank": 9,
    "entity": "eric dane",
    "discover_score": 0.6023250055844848,
    "score_1h": 4.146551724137931,
    "score_4h": 2.491596638655462,
    "score_7d": 0.9408284023668639,
    "extracted_entities": "Eric Dane - Attore - Grey's Anatomy - The Last Ship",
    "saturation_score": 107.0
  },
  {
    "rank": 48,
    "entity": "superenalotto 10 aprile 2025",
    "discover_score": 0.5307107795779703,
    "score_1h": 0.826271186440678,
    "score_4h": 0.4279033789247917,
    "score_7d": 1.7307692307692306,
    "extracted_entities": "Superenalotto - 10 aprile 2025 - Estrazione - Lotteria - Jackpot",
    "saturation_score": 4.0
  },
  {
    "rank": 14,
    "entity": "arthur fils",
    "discover_score": 0.5240519047667602,
    "score_1h": 13.161163062536527,
    "score_4h": 3.3986234661228507,
    "score_7d": 0.6094674556213018,
    "extracted_entities": "Arthur Fils - Tennis - Giocatore",
    "saturation_score": 34.0
  },
  {
    "rank": 39,
    "entity": "luna piena aprile 2025",
    "discover_score": 0.496923265279997,
    "score_1h": 0.0,
    "score_4h": 0.10504201680672269,
    "score_7d": 1.6272189349112425,
    "extracted_entities": "Luna piena - Aprile 2025 - Fasi lunari",
    "saturation_score": 2.0
  },
  {
    "rank": 16,
    "entity": "salah",
    "discover_score": 0.46255324503482337,
    "score_1h": 0.1896551724137931,
    "score_4h": 1.0630252100840336,
    "score_7d": 1.0088757396449703,
    "extracted_entities": "Mohamed Salah - Calcio - Liverpool - Premier League - Egitto",
    "saturation_score": 118.0
  },
  {
    "rank": 46,
    "entity": "grizzlies - timberwolves",
    "discover_score": 0.43926979044185954,
    "score_1h": 0.0,
    "score_4h": 0.3319327731092437,
    "score_7d": 1.3757396449704142,
    "extracted_entities": "Grizzlies - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "bonus elettrodomestici 2025",
    "discover_score": 0.4311645119810369,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.3816568047337279,
    "extracted_entities": "Bonus - Elettrodomestici - 2025",
    "saturation_score": 8.0
  },
  {
    "rank": 12,
    "entity": "agustin escobar",
    "discover_score": 0.38355560787552534,
    "score_1h": 2.0533313851548805,
    "score_4h": 1.3550420168067228,
    "score_7d": 0.606508875739645,
    "extracted_entities": "Agustin Escobar",
    "saturation_score": 9.0
  },
  {
    "rank": 34,
    "entity": "carlo ancelotti",
    "discover_score": 0.3832855817358675,
    "score_1h": 0.0,
    "score_4h": 0.563965753665483,
    "score_7d": 1.0177514792899407,
    "extracted_entities": "Carlo Ancelotti - Allenatore di calcio - Real Madrid - Serie A - Champions League",
    "saturation_score": 5.0
  },
  {
    "rank": 38,
    "entity": "miuccia prada",
    "discover_score": 0.3738236890430917,
    "score_1h": 1.7155172413793103,
    "score_4h": 0.5084033613445378,
    "score_7d": 1.0177514792899407,
    "extracted_entities": "Miuccia Prada - Moda - Designer - Prada",
    "saturation_score": 9.0
  },
  {
    "rank": 10,
    "entity": "valentina del re",
    "discover_score": 0.36270801405131103,
    "score_1h": 3.5517241379310347,
    "score_4h": 2.775588059491579,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Valentina Del Re",
    "saturation_score": 38.0
  },
  {
    "rank": 41,
    "entity": "leo beenhakker",
    "discover_score": 0.31964697834652406,
    "score_1h": 0.0,
    "score_4h": 0.36134453781512604,
    "score_7d": 0.849112426035503,
    "extracted_entities": "Leo Beenhakker - Allenatore di calcio - Olanda - Real Madrid - Trinidad e Tobago",
    "saturation_score": 74.0
  },
  {
    "rank": 49,
    "entity": "bucks - pelicans",
    "discover_score": 0.3125666678177117,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.052521008403361345,
    "score_7d": 0.9349112426035504,
    "extracted_entities": "Bucks - Pelicans - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "rcb vs dc",
    "discover_score": 0.28012242729607106,
    "score_1h": 0.0,
    "score_4h": 0.2542016806722689,
    "score_7d": 0.7189349112426036,
    "extracted_entities": "RCB - DC - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 36,
    "entity": "g20 film",
    "discover_score": 0.23769558918594771,
    "score_1h": 1.646551724137931,
    "score_4h": 0.4531837839738406,
    "score_7d": 0.46153846153846156,
    "extracted_entities": "G20 - Film - Eventi internazionali",
    "saturation_score": 2.0
  },
  {
    "rank": 42,
    "entity": "pistons - knicks",
    "discover_score": 0.23365179814796183,
    "score_1h": 0.0,
    "score_4h": 0.6778242677824268,
    "score_7d": 0.40532544378698226,
    "extracted_entities": "Pistons - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "mohamed salah",
    "discover_score": 0.19791024713436065,
    "score_1h": 0.0,
    "score_4h": 0.6533613445378151,
    "score_7d": 0.23668639053254437,
    "extracted_entities": "Mohamed Salah - Calciatore - Liverpool - Egitto - Premier League",
    "saturation_score": 7.0
  },
  {
    "rank": 24,
    "entity": "graziano mesina",
    "discover_score": 0.19227066476384272,
    "score_1h": 1.146551724137931,
    "score_4h": 0.23067930100910658,
    "score_7d": 0.2869822485207101,
    "extracted_entities": "Graziano Mesina - Criminalità - Sardegna - Latitanza - Arresto",
    "saturation_score": 34.0
  },
  {
    "rank": 50,
    "entity": "anticipazioni che dio ci aiuti 17 aprile",
    "discover_score": 0.16030520782634225,
    "score_1h": 0.0,
    "score_4h": 0.5630252100840336,
    "score_7d": 0.13609467455621302,
    "extracted_entities": "Anticipazioni - Che Dio ci aiuti - 17 aprile",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "pacers - cavaliers",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "discord down",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "tottenham",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "noipa stipendio",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "mara carfagna",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "matrix resurrections",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "baustelle",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "aquileia",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "spinazzola",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "uel",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "vaccinations",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "pechino express 2025",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "legia warszawa vs chelsea",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "buongiorno venerdì 11 aprile",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "borse dazi trump",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "banca di lituania",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "natalia grace",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "oroscopo ariete 11 aprile",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "lilli gruber",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "hojlund",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "alex de minaur",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "byd",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "romano prodi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "tevez",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "michela quattrociocche",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "black mirror 7",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "betis",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "thiago almada",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "bohemians 1905 - viktoria plzeň",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "high potential",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "flu shots",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "donatella versace",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "valerio scanu",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "grigor dimitrov",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "real betis",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "ulrik saltnes",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "lazio roma",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "dollaro euro",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "buon venerdì 11 aprile",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "meet",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "jens petter hauge",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "nuno borges",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "millionday",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "luca massimo iemolo",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "nikkei 225",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "oscar farinetti",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "ralph macchio",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "geppi cucciari",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "rita de crescenzo",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "the last of us",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "downdetector",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "rds",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "borse asiatiche oggi",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "ruud",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "dazi trump usa",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "balotelli genoa",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "vasco rossi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "buon venerdi 11 aprile 2025",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "alcaraz oggi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "cesare cremonini",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "nets - hawks",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "rory mcilroy",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "cable tv",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "michelle hunziker",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "palma rizzo",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "ignazio boschetto",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "real betis vs jagiellonia białystok",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "andrea kimi antonelli",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "arena di verona",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "altmaier",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "acquapendente",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "found",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "montanari",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "tyrique george",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "bezos",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "piazza armerina",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "tottenham vs eintracht frankfurt",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "cesare bocci",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "antonio cassano",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "diletta leotta",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "marco liorni",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "killian marcus nielsen",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "cosimo di uomini e donne",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "genius",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "federico rampini",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "biscotti di garibaldi",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "msc world america",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "medvedev",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "farinetti",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "rangers bilbao",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "orvieto",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "steven spielberg",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "paris hilton",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "trump legge marziale",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "scarlett johansson",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "marco bonini",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "casemiro",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "save the children",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "tina cipollari",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "vincenzo uomini e donne con chi è uscito",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "gabriele eredità",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "paola del din partigiana",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "jovanotti",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "chi è cosimo di uomini e donne",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "renzo arbore",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "g20",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "francesco oppini",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "ranking uefa",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "damante andrea",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "davidovich fokina",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "justin rose",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "starlink",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "bruce willis",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "rolando mandragora",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "ateco",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "tony effe",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-11 11:41:23",
  "trends_count": 167,
  "top_score": 30.716439705442884,
  "runtime_minutes": 5.6391717036565145,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi svelano che il panorama delle tendenze in Italia è dominato da tre potenti forze: il calcio, la moda e le tematiche di salute e benessere. Tra gli argomenti emergono la partita \"NK Celje - Fiorentina\" e il marchio di lusso \"Prada\". Nelle ombre del recente aumento d'interesse, \"Amore + IVA\" (#1) si libra come una possibilità dorata per contenuti su Google Discover, vantando un elevato Discover Score e una saturazione incredibilmente bassa. Un’opportunità rara per chi intende cavalcare l’onda del cuore e della finanza.\n\nTuttavia, i creatori di contenuti dovrebbero procedere con cautela su \"scommesse\" (#4), un campo minato dalla competizione con una saturazione opprimente di 3.210. Questo trend potrebbe dissolversi presto sotto il peso della sua stessa popolarità.\n\nMentre alcuni argomenti brillano nell’etere dell’entropia digitale, strategicamente, si consiglia di cercare l’equilibrio tra novità e distinzione, sfruttando gli spiragli tra alto potenziale e copertura debole. Così facendo, l’essenza delle tendenze odierne sarà captata prima che la marea digitale le inghiotta."
};
