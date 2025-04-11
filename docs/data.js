const trendData = [
  {
    "rank": 37,
    "entity": "amore + iva",
    "discover_score": 31.08669577003932,
    "score_1h": 77.75,
    "score_4h": 63.279411764705884,
    "score_7d": 53.62721893491124,
    "extracted_entities": "Amore - IVA - Relazioni - Tasse",
    "saturation_score": 3.0
  },
  {
    "rank": 45,
    "entity": "ravenna",
    "discover_score": 21.059712427991364,
    "score_1h": 65.26724137931035,
    "score_4h": 33.1281512605042,
    "score_7d": 43.82544378698225,
    "extracted_entities": "Ravenna - Turismo - Storia - Monumenti - Cultura",
    "saturation_score": 2180.0
  },
  {
    "rank": 7,
    "entity": "prada",
    "discover_score": 15.38122035699641,
    "score_1h": 41.310344827586206,
    "score_4h": 29.47458774304701,
    "score_7d": 19.58284023668639,
    "extracted_entities": "Prada - Moda - Lusso - Abbigliamento - Accessori",
    "saturation_score": 1080.0
  },
  {
    "rank": 48,
    "entity": "new york",
    "discover_score": 13.540720731193424,
    "score_1h": 53.37931034482759,
    "score_4h": 30.35924369747899,
    "score_7d": 29.11834319526627,
    "extracted_entities": "New York - Città - Stati Uniti - Turismo - Cultura",
    "saturation_score": 1370.0
  },
  {
    "rank": 1,
    "entity": "nk celje - fiorentina",
    "discover_score": 5.814451339239451,
    "score_1h": 1.206896551724138,
    "score_4h": 14.737394957983193,
    "score_7d": 4.227810650887575,
    "extracted_entities": "NK Celje - Fiorentina - Partita di calcio - Europa League - Squadre di calcio",
    "saturation_score": 23.0
  },
  {
    "rank": 26,
    "entity": "manchester united",
    "discover_score": 4.1109631052442595,
    "score_1h": 2.7413793103448274,
    "score_4h": 9.552521008403362,
    "score_7d": 9.594674556213018,
    "extracted_entities": "Manchester United - Calcio - Premier League - Old Trafford - Erik ten Hag",
    "saturation_score": 95.0
  },
  {
    "rank": 21,
    "entity": "udinese milan",
    "discover_score": 2.9517215363473106,
    "score_1h": 3.094827586206897,
    "score_4h": 0.8802521008403361,
    "score_7d": 8.50887573964497,
    "extracted_entities": "Udinese - Milan - Calcio - Serie A - Partita",
    "saturation_score": 437.0
  },
  {
    "rank": 5,
    "entity": "lione - manchester united",
    "discover_score": 2.9274000670675693,
    "score_1h": 0.5344827586206896,
    "score_4h": 5.5897559860764385,
    "score_7d": 5.076923076923077,
    "extracted_entities": "Lione - Manchester United - Calcio - Partita - Squadre",
    "saturation_score": 47.0
  },
  {
    "rank": 10,
    "entity": "als",
    "discover_score": 2.79179532673256,
    "score_1h": 2.2586206896551726,
    "score_4h": 1.7647058823529411,
    "score_7d": 6.754437869822485,
    "extracted_entities": "Sclerosi Laterale Amiotrofica - Malattia - Sintomi - Ricerca - Trattamenti",
    "saturation_score": 28.0
  },
  {
    "rank": 13,
    "entity": "musetti berrettini",
    "discover_score": 2.4593920649712073,
    "score_1h": 0.7758620689655172,
    "score_4h": 0.6848739495798319,
    "score_7d": 6.618343195266272,
    "extracted_entities": "Lorenzo Musetti - Matteo Berrettini - Tennis",
    "saturation_score": 30.0
  },
  {
    "rank": 2,
    "entity": "bodø/glimt - lazio",
    "discover_score": 2.2704291617547905,
    "score_1h": 1.853448275862069,
    "score_4h": 5.4390756302521,
    "score_7d": 2.8816568047337277,
    "extracted_entities": "Bodø/Glimt - Lazio - Calcio - Partita - Europa League",
    "saturation_score": 65.0
  },
  {
    "rank": 17,
    "entity": "black mirror",
    "discover_score": 2.133293668453029,
    "score_1h": 0.7931034482758621,
    "score_4h": 1.203781512605042,
    "score_7d": 5.970414201183432,
    "extracted_entities": "Black Mirror - Serie TV - Distopia - Tecnologia",
    "saturation_score": 80.0
  },
  {
    "rank": 30,
    "entity": "luna piena aprile 2025",
    "discover_score": 1.7795481526230352,
    "score_1h": 0.0,
    "score_4h": 0.20168067226890757,
    "score_7d": 5.834319526627219,
    "extracted_entities": "Luna piena - Aprile 2025 - Fasi lunari",
    "saturation_score": 2.0
  },
  {
    "rank": 6,
    "entity": "elicottero new york",
    "discover_score": 1.537865734552043,
    "score_1h": 21.70689655172414,
    "score_4h": 11.823529411764707,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Elicottero - New York - Trasporto - Turismo - Sicurezza",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "elisa visari",
    "discover_score": 1.3830898991097795,
    "score_1h": 1.6120689655172413,
    "score_4h": 1.51890756302521,
    "score_7d": 2.7573964497041423,
    "extracted_entities": "Elisa Visari - Attrice - Italia",
    "saturation_score": 179.0
  },
  {
    "rank": 3,
    "entity": "francesca michelon",
    "discover_score": 1.3520697676061184,
    "score_1h": 6.362068965517241,
    "score_4h": 2.6596638655462184,
    "score_7d": 2.2189349112426036,
    "extracted_entities": "Francesca Michelon",
    "saturation_score": 119.0
  },
  {
    "rank": 41,
    "entity": "baustelle",
    "discover_score": 1.2774961063291563,
    "score_1h": 0.0,
    "score_4h": 1.1470588235294117,
    "score_7d": 4.204142011834319,
    "extracted_entities": "Baustelle - Band musicale - Indie rock - Italia",
    "saturation_score": 3.0
  },
  {
    "rank": 19,
    "entity": "fiorentina oggi",
    "discover_score": 1.2669936577136482,
    "score_1h": 0.0,
    "score_4h": 0.18487394957983194,
    "score_7d": 3.896449704142012,
    "extracted_entities": "Fiorentina - Partita - Calcio - Serie A - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "betis - jagiellonia białystok",
    "discover_score": 1.2030823826385082,
    "score_1h": 0.0,
    "score_4h": 1.0777310924369747,
    "score_7d": 3.304733727810651,
    "extracted_entities": "Betis - Jagiellonia Białystok - Calcio - Partita - Squadre",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "giulia de lellis incinta",
    "discover_score": 1.1568110765972828,
    "score_1h": 0.0,
    "score_4h": 0.36764705882352944,
    "score_7d": 3.659763313609467,
    "extracted_entities": "Giulia De Lellis - Gravidanza - Gossip",
    "saturation_score": 5.0
  },
  {
    "rank": 46,
    "entity": "spinazzola",
    "discover_score": 1.0976997298821716,
    "score_1h": 0.2672413793103448,
    "score_4h": 0.2457983193277311,
    "score_7d": 3.9023668639053257,
    "extracted_entities": "Spinazzola - Calcio - Nazionale Italiana - Euro 2020 - Infortunio",
    "saturation_score": 31.0
  },
  {
    "rank": 16,
    "entity": "risultati europa league",
    "discover_score": 1.087145844468444,
    "score_1h": 0.0,
    "score_4h": 0.8424369747899161,
    "score_7d": 3.06508875739645,
    "extracted_entities": "Risultati - Europa League - Calcio - Partite - UEFA",
    "saturation_score": 4.0
  },
  {
    "rank": 14,
    "entity": "legia varsavia - chelsea",
    "discover_score": 0.8603275441668358,
    "score_1h": 0.0,
    "score_4h": 0.6239495798319328,
    "score_7d": 2.3668639053254434,
    "extracted_entities": "Legia Varsavia - Chelsea - Partita di calcio - Squadre di calcio - Competizione calcistica",
    "saturation_score": 9.0
  },
  {
    "rank": 18,
    "entity": "checco zalone",
    "discover_score": 0.8122003439616644,
    "score_1h": 2.413793103448276,
    "score_4h": 0.2710084033613445,
    "score_7d": 2.42603550295858,
    "extracted_entities": "Checco Zalone - Comico - Attore - Film - Italia",
    "saturation_score": 58.0
  },
  {
    "rank": 8,
    "entity": "agustin escobar",
    "discover_score": 0.8029654026907526,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.3970588235294117,
    "score_7d": 1.7485207100591715,
    "extracted_entities": "Agustin Escobar",
    "saturation_score": 4.0
  },
  {
    "rank": 9,
    "entity": "eric dane",
    "discover_score": 0.7757049110320418,
    "score_1h": 0.0,
    "score_4h": 0.7899159663865547,
    "score_7d": 1.878698224852071,
    "extracted_entities": "Eric Dane - Attore - Grey's Anatomy - The Last Ship",
    "saturation_score": 68.0
  },
  {
    "rank": 28,
    "entity": "miuccia prada",
    "discover_score": 0.7203404638225088,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.23949579831932774,
    "score_7d": 2.3106508875739644,
    "extracted_entities": "Miuccia Prada - Moda - Designer",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "leo beenhakker",
    "discover_score": 0.6397971951796395,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.5063025210084033,
    "score_7d": 2.0177514792899407,
    "extracted_entities": "Leo Beenhakker - Allenatore di calcio - Olanda - Real Madrid - Trinidad e Tobago",
    "saturation_score": 72.0
  },
  {
    "rank": 27,
    "entity": "hauge",
    "discover_score": 0.6196877400166798,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.37815126050420167,
    "score_7d": 1.8994082840236686,
    "extracted_entities": "Hauge - Calciatore - Norvegia - KAA Gent - Serie A",
    "saturation_score": 10.0
  },
  {
    "rank": 20,
    "entity": "vincenzo e ilaria uomini e donne",
    "discover_score": 0.6018940798044174,
    "score_1h": 0.0,
    "score_4h": 0.13865546218487396,
    "score_7d": 1.801775147928994,
    "extracted_entities": "Vincenzo - Ilaria - Uomini e Donne",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "chabal",
    "discover_score": 0.5606378355462432,
    "score_1h": 0.0,
    "score_4h": 1.0084033613445378,
    "score_7d": 1.2455621301775148,
    "extracted_entities": "Sébastien Chabal - Rugby - Francia",
    "saturation_score": 40.0
  },
  {
    "rank": 31,
    "entity": "papa francesco basilica san pietro",
    "discover_score": 0.5588275951994526,
    "score_1h": 0.0,
    "score_4h": 0.40756302521008403,
    "score_7d": 1.7130177514792901,
    "extracted_entities": "Papa Francesco - Basilica di San Pietro - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "11 aprile sciopero trenitalia",
    "discover_score": 0.5199418968104337,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.6995798319327731,
    "score_7d": 1.4023668639053253,
    "extracted_entities": "11 aprile - Sciopero - Trenitalia",
    "saturation_score": 4.0
  },
  {
    "rank": 32,
    "entity": "carlos alcaraz",
    "discover_score": 0.4983595592871724,
    "score_1h": 0.0,
    "score_4h": 0.16176470588235295,
    "score_7d": 1.5621301775147929,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 109.0
  },
  {
    "rank": 35,
    "entity": "rcb vs dc",
    "discover_score": 0.4955692717433379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.6213017751479288,
    "extracted_entities": "RCB - DC - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "bucks - pelicans",
    "discover_score": 0.46282256008772044,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.29831932773109243,
    "score_7d": 1.4319526627218935,
    "extracted_entities": "Bucks - Pelicans - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 29,
    "entity": "pistons - knicks",
    "discover_score": 0.45494336028132015,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.792016806722689,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Pistons - Knicks - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 1.0
  },
  {
    "rank": 36,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.39375609928986477,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.168639053254438,
    "extracted_entities": "Stefanos Tsitsipas - Tennis - ATP - Grecia",
    "saturation_score": 28.0
  },
  {
    "rank": 12,
    "entity": "salah",
    "discover_score": 0.3676759197737931,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.069327731092437,
    "score_7d": 0.6242603550295858,
    "extracted_entities": "Mohamed Salah - Calcio - Liverpool FC - Premier League - Egitto",
    "saturation_score": 97.0
  },
  {
    "rank": 33,
    "entity": "grizzlies - timberwolves",
    "discover_score": 0.35224859901784944,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.5,
    "score_7d": 0.9053254437869823,
    "extracted_entities": "Grizzlies - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 44,
    "entity": "hojlund",
    "discover_score": 0.29080636542765015,
    "score_1h": 1.6810344827586206,
    "score_4h": 0.30462184873949577,
    "score_7d": 0.7544378698224852,
    "extracted_entities": "Hojlund - Calciatore - Atalanta - Serie A - Danimarca",
    "saturation_score": 45.0
  },
  {
    "rank": 43,
    "entity": "pacers - cavaliers",
    "discover_score": 0.27287122115824514,
    "score_1h": 0.7672413793103449,
    "score_4h": 0.7037815126050421,
    "score_7d": 0.5680473372781065,
    "extracted_entities": "Pacers - Cavaliers - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 47,
    "entity": "buongiorno venerdì 11 aprile",
    "discover_score": 0.2532709877729445,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.1092436974789917,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "Buongiorno - Venerdì - 11 aprile",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "olimpia milano - baskonia",
    "discover_score": 0.23991465507079882,
    "score_1h": 0.0,
    "score_4h": 0.12815126050420167,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Olimpia Milano - Baskonia - Pallacanestro - Eurolega - Partita",
    "saturation_score": 9.0
  },
  {
    "rank": 49,
    "entity": "discord down",
    "discover_score": 0.2376566892677091,
    "score_1h": 0.0,
    "score_4h": 0.20798319327731093,
    "score_7d": 0.5650887573964497,
    "extracted_entities": "Discord - Down - Problemi di connessione - Interruzione del servizio",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "superenalotto 10 aprile 2025",
    "discover_score": 0.22333937341753315,
    "score_1h": 0.847457627118644,
    "score_4h": 0.5882352941176471,
    "score_7d": 0.378698224852071,
    "extracted_entities": "Superenalotto - 10 aprile 2025 - Estrazione - Lotteria - Jackpot",
    "saturation_score": 4.0
  },
  {
    "rank": 25,
    "entity": "g20 film",
    "discover_score": 0.20533819585337237,
    "score_1h": 0.0,
    "score_4h": 0.06092436974789916,
    "score_7d": 0.38757396449704146,
    "extracted_entities": "G20 - Film - Summit - Cinema",
    "saturation_score": 3.0
  },
  {
    "rank": 39,
    "entity": "anticipazioni che dio ci aiuti 17 aprile",
    "discover_score": 0.19488326117246238,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8424369747899161,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Anticipazioni - Che Dio ci aiuti - 17 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "tevez",
    "discover_score": 0.16371242431869243,
    "score_1h": 1.8620689655172413,
    "score_4h": 0.29411764705882354,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Carlos Tevez - Calciatore - Argentina - Boca Juniors - Manchester City",
    "saturation_score": 1.0
  },
  {
    "rank": 50,
    "entity": "oroscopo ariete 11 aprile",
    "discover_score": 0.14982139527519575,
    "score_1h": 0.0,
    "score_4h": 0.44537815126050423,
    "score_7d": 0.1183431952662722,
    "extracted_entities": "Oroscopo - Ariete - 11 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "tottenham",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "banca di lituania",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "matrix resurrections",
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
    "entity": "assegno unico aprile 2025",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "pechino express 2025",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "lilli gruber",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "betis",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "borse dazi trump",
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
    "entity": "legia warszawa vs chelsea",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "santana money gang",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "byd",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "romano prodi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "alex de minaur",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "dollaro euro",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "alejandro davidovich fokina",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "aquileia",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "michela quattrociocche",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "buon venerdì 11 aprile",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "vaccinations",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "daniel altmaier",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "flu shots",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "riccardo muti",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "arthur fils",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "athletic bilbao",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "rds",
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
    "entity": "high potential",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "nikkei 225",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "bohemians 1905 - viktoria plzeň",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "casper ruud",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "ralph macchio",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "vaccines",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "ulrik saltnes",
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
    "entity": "balotelli genoa",
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
    "entity": "borse asiatiche oggi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "immunizations",
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
    "entity": "lazio roma",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "meet",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "millionday",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "nuno borges",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "rory mcilroy",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "luca massimo iemolo",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "nets - hawks",
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
    "entity": "oscar farinetti",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "geppi cucciari",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "the last of us",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "downdetector",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "vasco rossi",
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
    "entity": "ruud",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "alcaraz oggi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "cesare cremonini",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "michelle hunziker",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "ignazio boschetto",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "real betis vs jagiellonia białystok",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "amalia ercoli finzi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "palma rizzo",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "arena di verona",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "andrea kimi antonelli",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "pastiera napoletana",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "altmaier",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "found",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "montanari",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "acquapendente",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "bezos",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "tyrique george",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "piazza armerina",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "tottenham vs eintracht frankfurt",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "antonio cassano",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "genius",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "diletta leotta",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "marco liorni",
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
    "entity": "killian marcus nielsen",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "cosimo di uomini e donne",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "msc world america",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "zirkzee",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "farinetti",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "rangers bilbao",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "medvedev",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "steven spielberg",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "orvieto",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "biscotti di garibaldi",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "paris hilton",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "trump legge marziale",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "marco bonini",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "calafiori dua lipa",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "scarlett johansson",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "bergamo news",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "casemiro",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "save the children",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "tina cipollari",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "vincenzo uomini e donne con chi è uscito",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "gabriele eredità",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "jovanotti",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "rublev",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "zaniolo",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "renzo arbore",
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
    "entity": "chi è cosimo di uomini e donne",
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
    "entity": "ranking uefa",
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
  "timestamp": "2025-04-11 09:44:14",
  "trends_count": 167,
  "top_score": 31.08669577003932,
  "runtime_minutes": 5.355634442965189,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle trame dell’infinità rete delle tendenze, si manifestano oggi in Italia due grandi tematiche: l'amore e l'arte del lussuoso consumo, che danzano al passo di cultura e moda. L'interesse per il trend 'amore + iva' (#1) prospetta una fusione tra le passioni umane e le rigide dinamiche fiscali, un connubio insolito alimentato da discussioni su relazioni e tasse, con basso rischio di saturazione, ponendolo come una delle più brillanti opportunità per Google Discover. Il fascinoso mondo della moda trova eco nell'interesse per 'Prada' (#3), un simbolo di eterno splendore e innovazione stilistica, anch'esso degno di narrazione data la sua saturazione gestibile.\n\nIn un diverso registro, si innalza un monito verso l’imponente copertura del tema 'ravenna' (#2). La storica città italiana peste sotto un cielo di contenuto saturante, suggerendo cautela per chi insegue contenuti competitivi in questo ambito.\n\nIn questa intricata danza di simboli e significati, i creatori di contenuti sono invitati a captare l'onda del crescente amore per le tendenze emergenti e ad evitare le acque turbolente della saturazione evidente. Che ogni contenuto disvelato porti ispirazione e prosperità."
};
