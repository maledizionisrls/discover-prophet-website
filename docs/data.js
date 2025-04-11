const trendData = [
  {
    "rank": 50,
    "entity": "ravenna",
    "discover_score": 21.52617227336581,
    "score_1h": 62.03448275862069,
    "score_4h": 39.38655462184874,
    "score_7d": 44.30177514792899,
    "extracted_entities": "Ravenna - Città - Turismo - Storia - Cultura",
    "saturation_score": 2010.0
  },
  {
    "rank": 7,
    "entity": "prada",
    "discover_score": 13.242844100172817,
    "score_1h": 28.64655172413793,
    "score_4h": 17.310924369747898,
    "score_7d": 19.494082840236686,
    "extracted_entities": "Prada - Moda - Lusso - Abbigliamento - Accessori",
    "saturation_score": 1110.0
  },
  {
    "rank": 1,
    "entity": "nk celje - fiorentina",
    "discover_score": 7.028772885272525,
    "score_1h": 18.07758620689655,
    "score_4h": 22.504201680672267,
    "score_7d": 3.9615384615384617,
    "extracted_entities": "NK Celje - Fiorentina - Partita di calcio - Europa League - Squadre di calcio",
    "saturation_score": 23.0
  },
  {
    "rank": 10,
    "entity": "black mirror",
    "discover_score": 3.908075813022211,
    "score_1h": 3.586206896551724,
    "score_4h": 0.3088235294117647,
    "score_7d": 9.562130177514792,
    "extracted_entities": "Black Mirror - Serie TV - Distopia - Tecnologia",
    "saturation_score": 92.0
  },
  {
    "rank": 5,
    "entity": "lione - manchester united",
    "discover_score": 3.5855366523558656,
    "score_1h": 3.5344827586206895,
    "score_4h": 8.510504201680671,
    "score_7d": 5.591715976331361,
    "extracted_entities": "Lione - Manchester United - Calcio - Partita - Squadre",
    "saturation_score": 78.0
  },
  {
    "rank": 3,
    "entity": "francesca michelon",
    "discover_score": 3.5481383080543596,
    "score_1h": 3.396551724137931,
    "score_4h": 2.642857142857143,
    "score_7d": 6.088757396449704,
    "extracted_entities": "Francesca Michelon",
    "saturation_score": 95.0
  },
  {
    "rank": 6,
    "entity": "elicottero new york",
    "discover_score": 2.891057121756482,
    "score_1h": 38.422413793103445,
    "score_4h": 17.319327731092436,
    "score_7d": 2.633136094674556,
    "extracted_entities": "Elicottero - New York - Trasporto aereo",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "siemens",
    "discover_score": 2.7450184672368017,
    "score_1h": 15.14655172413793,
    "score_4h": 4.338235294117647,
    "score_7d": 6.112426035502958,
    "extracted_entities": "Siemens - Tecnologia - Industria - Elettronica - Ingegneria",
    "saturation_score": 113.0
  },
  {
    "rank": 34,
    "entity": "luna piena aprile 2025",
    "discover_score": 2.634071309167143,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033613,
    "score_7d": 8.520710059171599,
    "extracted_entities": "Luna piena - Aprile 2025 - Fasi lunari",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "musetti berrettini",
    "discover_score": 2.5374685801462173,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.1974789915966386,
    "score_7d": 6.772189349112426,
    "extracted_entities": "Lorenzo Musetti - Matteo Berrettini - Tennis - Giocatori italiani",
    "saturation_score": 10.0
  },
  {
    "rank": 2,
    "entity": "bodø/glimt - lazio",
    "discover_score": 2.12932362241029,
    "score_1h": 2.310344827586207,
    "score_4h": 5.199579831932773,
    "score_7d": 2.710059171597633,
    "extracted_entities": "Bodø/Glimt - Lazio - Partita di calcio - UEFA Europa League",
    "saturation_score": 70.0
  },
  {
    "rank": 26,
    "entity": "giulia de lellis incinta",
    "discover_score": 1.7167841135627453,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.07983193277310924,
    "score_7d": 5.538461538461539,
    "extracted_entities": "Giulia De Lellis - Gravidanza - Gossip",
    "saturation_score": 5.0
  },
  {
    "rank": 32,
    "entity": "baustelle",
    "discover_score": 1.6120368589862744,
    "score_1h": 0.8448275862068966,
    "score_4h": 1.1365546218487395,
    "score_7d": 5.112426035502958,
    "extracted_entities": "Baustelle - Band musicale - Indie rock - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 22,
    "entity": "11 aprile sciopero trenitalia",
    "discover_score": 1.5631175837510012,
    "score_1h": 3.2586206896551726,
    "score_4h": 0.5861344537815126,
    "score_7d": 4.78698224852071,
    "extracted_entities": "11 aprile - Sciopero - Trenitalia - Trasporti - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 24,
    "entity": "legge marziale",
    "discover_score": 1.5174957107205562,
    "score_1h": 0.0,
    "score_4h": 0.1512605042016807,
    "score_7d": 4.84319526627219,
    "extracted_entities": "Legge marziale - Diritto - Emergenza - Governo - Sicurezza",
    "saturation_score": 56.0
  },
  {
    "rank": 12,
    "entity": "salah",
    "discover_score": 1.4363234924117274,
    "score_1h": 3.1982758620689653,
    "score_4h": 0.7920168067226891,
    "score_7d": 3.8786982248520707,
    "extracted_entities": "Mohamed Salah - Calcio - Liverpool - Premier League - Egitto",
    "saturation_score": 60.0
  },
  {
    "rank": 4,
    "entity": "elisa visari",
    "discover_score": 1.2746192685118418,
    "score_1h": 0.0,
    "score_4h": 1.0903361344537816,
    "score_7d": 2.6301775147928996,
    "extracted_entities": "Elisa Visari - Attrice - Italia",
    "saturation_score": 236.0
  },
  {
    "rank": 20,
    "entity": "fiorentina oggi",
    "discover_score": 1.259001825770517,
    "score_1h": 0.0,
    "score_4h": 0.6995798319327731,
    "score_7d": 3.7662721893491127,
    "extracted_entities": "Fiorentina - Partita - Calcio - Serie A - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "legia varsavia - chelsea",
    "discover_score": 1.0835269789374304,
    "score_1h": 0.0,
    "score_4h": 0.30462184873949577,
    "score_7d": 3.162721893491124,
    "extracted_entities": "Legia Varsavia - Chelsea - Calcio - Partita - Club",
    "saturation_score": 9.0
  },
  {
    "rank": 13,
    "entity": "chabal",
    "discover_score": 0.9737702556930051,
    "score_1h": 2.2413793103448274,
    "score_4h": 1.0840336134453783,
    "score_7d": 2.547337278106509,
    "extracted_entities": "Sébastien Chabal - Rugby - Francia",
    "saturation_score": 40.0
  },
  {
    "rank": 16,
    "entity": "betis - jagiellonia białystok",
    "discover_score": 0.9380489010186583,
    "score_1h": 3.2758620689655173,
    "score_4h": 0.4789915966386555,
    "score_7d": 2.710059171597633,
    "extracted_entities": "Betis - Jagiellonia Białystok - Calcio - Partita - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "spinazzola",
    "discover_score": 0.9045074577150672,
    "score_1h": 0.0,
    "score_4h": 0.2773109243697479,
    "score_7d": 3.1568047337278107,
    "extracted_entities": "Spinazzola - Calciatore - Italia - Nazionale Italiana - Serie A",
    "saturation_score": 49.0
  },
  {
    "rank": 17,
    "entity": "risultati conference league",
    "discover_score": 0.8618588064299335,
    "score_1h": 0.0,
    "score_4h": 0.42016806722689076,
    "score_7d": 2.5177514792899407,
    "extracted_entities": "Conference League - Risultati - Calcio - UEFA",
    "saturation_score": 1.0
  },
  {
    "rank": 35,
    "entity": "carlos alcaraz",
    "discover_score": 0.8442681356338726,
    "score_1h": 3.232758620689655,
    "score_4h": 0.40756302521008403,
    "score_7d": 2.8017751479289945,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Classifica",
    "saturation_score": 56.0
  },
  {
    "rank": 18,
    "entity": "checco zalone",
    "discover_score": 0.8139362963650909,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.1407563025210084,
    "score_7d": 2.467455621301775,
    "extracted_entities": "Checco Zalone - Comico - Attore - Film - Italia",
    "saturation_score": 64.0
  },
  {
    "rank": 40,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.8006816682294248,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.760355029585799,
    "extracted_entities": "Stefanos Tsitsipas - Tennis - ATP - Grecia",
    "saturation_score": 27.0
  },
  {
    "rank": 21,
    "entity": "vincenzo e ilaria uomini e donne",
    "discover_score": 0.6830580106342848,
    "score_1h": 0.45689655172413796,
    "score_4h": 0.07352941176470588,
    "score_7d": 2.1153846153846154,
    "extracted_entities": "Vincenzo - Ilaria - Uomini e Donne",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "hauge",
    "discover_score": 0.6594694321178242,
    "score_1h": 0.646551724137931,
    "score_4h": 0.22899159663865545,
    "score_7d": 2.109467455621302,
    "extracted_entities": "Hauge - Calciatore - Norvegia - KAA Gent - Serie A",
    "saturation_score": 10.0
  },
  {
    "rank": 36,
    "entity": "leo beenhakker",
    "discover_score": 0.5932374216605393,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.34243697478991597,
    "score_7d": 1.9082840236686391,
    "extracted_entities": "Leo Beenhakker - Allenatore di calcio - Olanda - Real Madrid - Trinidad e Tobago",
    "saturation_score": 76.0
  },
  {
    "rank": 8,
    "entity": "eric dane",
    "discover_score": 0.5798984240927634,
    "score_1h": 2.146551724137931,
    "score_4h": 0.8718487394957983,
    "score_7d": 1.2455621301775148,
    "extracted_entities": "Eric Dane - Attore - Grey's Anatomy - The Last Ship",
    "saturation_score": 44.0
  },
  {
    "rank": 41,
    "entity": "superenalotto 10 aprile 2025",
    "discover_score": 0.5761168144465284,
    "score_1h": 1.646551724137931,
    "score_4h": 0.40756302521008403,
    "score_7d": 1.8668639053254439,
    "extracted_entities": "Superenalotto - 10 aprile 2025 - Estrazione - Lotteria - Jackpot",
    "saturation_score": 4.0
  },
  {
    "rank": 49,
    "entity": "udinese milan",
    "discover_score": 0.5706694219688925,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.3697478991596639,
    "score_7d": 1.636094674556213,
    "extracted_entities": "Udinese - Milan - Calcio - Serie A - Partita",
    "saturation_score": 406.0
  },
  {
    "rank": 9,
    "entity": "agustin escobar",
    "discover_score": 0.5507399222390317,
    "score_1h": 2.3275862068965516,
    "score_4h": 1.1365546218487395,
    "score_7d": 1.1242603550295858,
    "extracted_entities": "Agustin Escobar",
    "saturation_score": 3.0
  },
  {
    "rank": 39,
    "entity": "rcb vs dc",
    "discover_score": 0.49904976320437444,
    "score_1h": 0.0,
    "score_4h": 0.06092436974789916,
    "score_7d": 1.6479289940828403,
    "extracted_entities": "RCB - DC - Indian Premier League - Cricket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "jack draper",
    "discover_score": 0.4789252371810114,
    "score_1h": 0.0,
    "score_4h": 0.6134453781512605,
    "score_7d": 1.4644970414201184,
    "extracted_entities": "Jack Draper - Tennis - Giocatore",
    "saturation_score": 5.0
  },
  {
    "rank": 46,
    "entity": "buongiorno venerdì 11 aprile",
    "discover_score": 0.4662319255366383,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.39705882352941174,
    "score_7d": 1.467455621301775,
    "extracted_entities": "Buongiorno - Venerdì - 11 aprile",
    "saturation_score": 1.0
  },
  {
    "rank": 37,
    "entity": "bucks - pelicans",
    "discover_score": 0.445993215301406,
    "score_1h": 0.0,
    "score_4h": 0.49369747899159666,
    "score_7d": 1.304733727810651,
    "extracted_entities": "Bucks - Pelicans - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 33,
    "entity": "miuccia prada",
    "discover_score": 0.4232260188200121,
    "score_1h": 0.0,
    "score_4h": 0.3697478991596639,
    "score_7d": 1.2218934911242603,
    "extracted_entities": "Miuccia Prada - Moda - Designer - Prada",
    "saturation_score": 8.0
  },
  {
    "rank": 30,
    "entity": "papa francesco basilica san pietro",
    "discover_score": 0.41164972958161977,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.11554621848739496,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Papa Francesco - Basilica di San Pietro - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "olimpia milano - baskonia",
    "discover_score": 0.41160075713346,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.5252100840336134,
    "score_7d": 1.0532544378698225,
    "extracted_entities": "Olimpia Milano - Baskonia - Pallacanestro - Eurolega - Partita",
    "saturation_score": 10.0
  },
  {
    "rank": 31,
    "entity": "hojlund",
    "discover_score": 0.38913136220706523,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.25210084033613445,
    "score_7d": 1.106508875739645,
    "extracted_entities": "Rasmus Højlund - Calciatore - Atalanta - Serie A - Danimarca",
    "saturation_score": 39.0
  },
  {
    "rank": 42,
    "entity": "pacers - cavaliers",
    "discover_score": 0.37448466479248854,
    "score_1h": 0.0,
    "score_4h": 0.33403361344537813,
    "score_7d": 1.0887573964497042,
    "extracted_entities": "Pacers - Cavaliers - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "tevez",
    "discover_score": 0.3489378597300218,
    "score_1h": 0.29310344827586204,
    "score_4h": 0.4747899159663866,
    "score_7d": 0.7958579881656805,
    "extracted_entities": "Carlos Tevez - Calcio - Argentina - Juventus - Boca Juniors",
    "saturation_score": 1.0
  },
  {
    "rank": 27,
    "entity": "pistons - knicks",
    "discover_score": 0.3217298539408669,
    "score_1h": 0.7758620689655172,
    "score_4h": 0.10294117647058823,
    "score_7d": 0.8550295857988166,
    "extracted_entities": "Pistons - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 25,
    "entity": "g20 film",
    "discover_score": 0.2813739919643954,
    "score_1h": 0.0,
    "score_4h": 0.5588235294117647,
    "score_7d": 0.562130177514793,
    "extracted_entities": "G20 - Film - Summit - Cinema - Politica",
    "saturation_score": 3.0
  },
  {
    "rank": 48,
    "entity": "banca di lituania",
    "discover_score": 0.2570535080188858,
    "score_1h": 2.362068965517241,
    "score_4h": 0.1092436974789916,
    "score_7d": 0.6745562130177515,
    "extracted_entities": "Banca di Lituania - Lituania - Istituzione finanziaria",
    "saturation_score": 2.0
  },
  {
    "rank": 38,
    "entity": "anticipazioni che dio ci aiuti 17 aprile",
    "discover_score": 0.25236248325904,
    "score_1h": 0.0,
    "score_4h": 0.5798319327731092,
    "score_7d": 0.4970414201183432,
    "extracted_entities": "Anticipazioni - Che Dio ci aiuti - 17 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "lyon vs man united",
    "discover_score": 0.2070628382908275,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.5273109243697479,
    "score_7d": 0.33727810650887574,
    "extracted_entities": "Lyon - Manchester United - Partita di calcio - UEFA - Competizione sportiva",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "oroscopo ariete 11 aprile",
    "discover_score": 0.19378782938925485,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.7815126050420168,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Oroscopo - Ariete - 11 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "grizzlies - timberwolves",
    "discover_score": 0.185773902169553,
    "score_1h": 1.5948275862068964,
    "score_4h": 0.3739495798319328,
    "score_7d": 0.23964497041420119,
    "extracted_entities": "Grizzlies - Timberwolves - NBA - Basket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "assegno unico aprile 2025",
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
    "entity": "matrix resurrections",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "pechino express 2025",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "noipa stipendio",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "aquileia",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "dollaro euro",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "betis",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "natalia grace",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "santana money gang",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "rds",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "vaccines",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "buon venerdì 11 aprile",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "legia warszawa vs chelsea",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "borse dazi trump",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "borse asiatiche oggi",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "byd",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "romano prodi",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "alex de minaur",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "ralph macchio",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "nikkei 225",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "vaccinations",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "balotelli genoa",
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
    "entity": "flu shots",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "athletic bilbao",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "daniel altmaier",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "arthur fils",
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
    "entity": "thiago almada",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "bohemians 1905 - viktoria plzeň",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "casper ruud",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "valentina tomada centovetrine",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "rory mcilroy",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "valerio scanu",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "nets - hawks",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "donatella versace",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "ulrik saltnes",
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
    "entity": "grigor dimitrov",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "millionday",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "rita de crescenzo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "nuno borges",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "luca massimo iemolo",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "geppi cucciari",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "oscar farinetti",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "the last of us",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "downdetector",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "vasco rossi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "ruud",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "alcaraz oggi",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "cesare cremonini",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "stati",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "tyrique george",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "ignazio boschetto",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "real betis vs jagiellonia białystok",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "arena di verona",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "andrea kimi antonelli",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "pastiera napoletana",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "found",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "montanari",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "altmaier",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "bezos",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "acquapendente",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "michelle hunziker",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "piazza armerina",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "genius",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "antonio cassano",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "tottenham vs eintracht frankfurt",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "diletta leotta",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "che dio ci aiuti",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "marco liorni",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "cesare bocci",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "killian marcus nielsen",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "msc world america",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "cosimo di uomini e donne",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "zirkzee",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "rangers bilbao",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "gad lerner",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "farinetti",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "medvedev",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "steven spielberg",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "r101",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "orvieto",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "dimitrov",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "bergamo news",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "paris hilton",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "hunziker",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "caterina caselli",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "marco bonini",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "scarlett johansson",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "calafiori dua lipa",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "casemiro",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "save the children",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "vincenzo uomini e donne con chi è uscito",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "gabriele eredità",
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
    "entity": "jovanotti",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "maria porro",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "renzo arbore",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "rublev",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "g20",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "paola del din partigiana",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "chi è cosimo di uomini e donne",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "ranking uefa",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "francesco oppini",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "justin rose",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "ezio mauro",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "starlink",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "bruce willis",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "rolando mandragora",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "ateco",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "tony effe",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-11 08:49:03",
  "trends_count": 166,
  "top_score": 21.52617227336581,
  "runtime_minutes": 4.661326169967651,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi rivelano che i grandi oracoli dei media digitali ci guidano verso tre stelle dominanti: il calcio, la moda e i racconti personali. Il calcio continua a brillare come un sole che non tramonta, dalla Fiorentina che sfida l'NK Celje (#3) alla partita tra Lione e Manchester United (#5). Parallelamente, le sfilate incantatrici di Prada (#2) guidano la moda verso la curiosità dei naviganti.\n\nFra le opportunità scintillanti per Google Discover, risalta Ravenna (#1) con la sua storia e cultura che promettono nuove narrazioni, nonostante il suo alto tasso di saturazione, esponendosi come un terreno fertile da arare con racconti inediti di turismo e cultura. Anche lo sciopero di Trenitalia dell'11 aprile (#14) si erge come visione strategica con basso rumore di saturazione e crescente interesse.\n\nNel regno della cautela, la città di Ravenna presenta la sua ombra, stretta nella morsa di una saturazione di 2.010, sfidando chi vorrà competere nel panorama già colmo. Inoltre, i riflettori su Elisa Visari (#17), data la saturazione elevata, potrebbero non riflettere autenticità ma mera effimera illusione.\n\nPer chi sventola il pennello della scrittura, trasformare calcio e moda in mitologia potrebbe aprire nuovi portali verso il cuore della curiosità collettiva."
};
