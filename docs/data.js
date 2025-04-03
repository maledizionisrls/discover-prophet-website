const trendData = [
  {
    "rank": 46,
    "entity": "inps",
    "discover_score": 25.70657527042124,
    "score_1h": 80.1896551724138,
    "score_4h": 78.14495798319328,
    "score_7d": 42.11242603550296,
    "extracted_entities": "INPS - Previdenza Sociale - Italia - Pensioni - Contributi",
    "saturation_score": 403.0
  },
  {
    "rank": 50,
    "entity": "ansa",
    "discover_score": 22.103630624338802,
    "score_1h": 67.65517241379311,
    "score_4h": 67.36134453781513,
    "score_7d": 38.54733727810651,
    "extracted_entities": "Agenzia di stampa - Notizie - Italia - Informazione - Media",
    "saturation_score": 3830.0
  },
  {
    "rank": 17,
    "entity": "minecraft film",
    "discover_score": 12.194972560018313,
    "score_1h": 18.29938632378726,
    "score_4h": 13.430672268907564,
    "score_7d": 24.03846153846154,
    "extracted_entities": "Minecraft - Film - Videogiochi - Adattamento cinematografico",
    "saturation_score": 5.0
  },
  {
    "rank": 9,
    "entity": "nasdaq",
    "discover_score": 11.701402714025477,
    "score_1h": 67.64655172413794,
    "score_4h": 55.54831932773109,
    "score_7d": 10.349112426035504,
    "extracted_entities": "Nasdaq - Mercato azionario - Indici finanziari - Borsa valori - Tecnologia",
    "saturation_score": 106.0
  },
  {
    "rank": 1,
    "entity": "milan - inter",
    "discover_score": 11.380653619508019,
    "score_1h": 63.33620689655173,
    "score_4h": 42.30252100840336,
    "score_7d": 4.3047337278106514,
    "extracted_entities": "Milan - Inter - Calcio - Derby - Serie A",
    "saturation_score": 2230.0
  },
  {
    "rank": 27,
    "entity": "trump",
    "discover_score": 11.38003966458022,
    "score_1h": 77.44827586206897,
    "score_4h": 70.57773109243698,
    "score_7d": 11.781065088757396,
    "extracted_entities": "Donald Trump - Politica - Stati Uniti - Elezioni - Controversie",
    "saturation_score": 6710.0
  },
  {
    "rank": 3,
    "entity": "brignone",
    "discover_score": 10.191127762998878,
    "score_1h": 46.33240794856809,
    "score_4h": 52.39915966386555,
    "score_7d": 5.029585798816568,
    "extracted_entities": "Federica Brignone - Sci alpino - Italia",
    "saturation_score": 922.0
  },
  {
    "rank": 41,
    "entity": "quotazione oro",
    "discover_score": 8.787346805476439,
    "score_1h": 16.32758620689655,
    "score_4h": 8.966386554621849,
    "score_7d": 22.75147928994083,
    "extracted_entities": "Quotazione - Oro - Prezzo - Mercato - Investimenti",
    "saturation_score": 8.0
  },
  {
    "rank": 38,
    "entity": "lady gaga",
    "discover_score": 7.831407837034259,
    "score_1h": 30.508620689655174,
    "score_4h": 38.279411764705884,
    "score_7d": 12.710059171597633,
    "extracted_entities": "Lady Gaga - Cantante - Pop - Intrattenimento - Celebrità",
    "saturation_score": 55.0
  },
  {
    "rank": 16,
    "entity": "ticketone",
    "discover_score": 7.718152297830173,
    "score_1h": 55.27586206896552,
    "score_4h": 30.59873949579832,
    "score_7d": 11.14792899408284,
    "extracted_entities": "TicketOne - Biglietti - Eventi - Concerti - Spettacoli",
    "saturation_score": 586.0
  },
  {
    "rank": 19,
    "entity": "wall street",
    "discover_score": 7.506845990775859,
    "score_1h": 9.163793103448276,
    "score_4h": 6.488616785626384,
    "score_7d": 17.28402366863905,
    "extracted_entities": "Wall Street - Finanza - Borsa valori - New York - Mercati finanziari",
    "saturation_score": 186.0
  },
  {
    "rank": 21,
    "entity": "ftse mib",
    "discover_score": 5.7447335760920355,
    "score_1h": 1.982758620689655,
    "score_4h": 2.3781512605042017,
    "score_7d": 14.872781065088757,
    "extracted_entities": "FTSE MIB - Indice di Borsa - Mercato azionario - Italia",
    "saturation_score": 123.0
  },
  {
    "rank": 43,
    "entity": "barcelona",
    "discover_score": 5.250336212400105,
    "score_1h": 7.439655172413794,
    "score_4h": 1.3865546218487395,
    "score_7d": 16.023668639053255,
    "extracted_entities": "Barcellona - Spagna - Turismo - Calcio - Cultura",
    "saturation_score": 262.0
  },
  {
    "rank": 26,
    "entity": "sp500",
    "discover_score": 5.1435276136212345,
    "score_1h": 1.793103448275862,
    "score_4h": 2.186974789915966,
    "score_7d": 14.124260355029586,
    "extracted_entities": "S&P 500 - Mercato azionario - Indice finanziario",
    "saturation_score": 2.0
  },
  {
    "rank": 2,
    "entity": "nanni moretti",
    "discover_score": 4.907687202740749,
    "score_1h": 49.327586206896555,
    "score_4h": 21.951680672268907,
    "score_7d": 3.242603550295858,
    "extracted_entities": "Nanni Moretti - Regista - Cinema italiano - Filmografia - Attore",
    "saturation_score": 1510.0
  },
  {
    "rank": 5,
    "entity": "cambio euro dollaro",
    "discover_score": 4.8003484481401495,
    "score_1h": 15.982758620689655,
    "score_4h": 18.83613445378151,
    "score_7d": 5.3609467455621305,
    "extracted_entities": "Cambio - Euro - Dollaro - Tasso di cambio - Valuta",
    "saturation_score": 6.0
  },
  {
    "rank": 34,
    "entity": "cannavacciuolo",
    "discover_score": 3.142453070880538,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.22058823529411764,
    "score_7d": 10.00887573964497,
    "extracted_entities": "Cannavacciuolo - Chef - Cucina - Ristorazione - Italia",
    "saturation_score": 9.0
  },
  {
    "rank": 4,
    "entity": "borse oggi",
    "discover_score": 2.1904571004750633,
    "score_1h": 5.36864406779661,
    "score_4h": 5.764705882352941,
    "score_7d": 3.3609467455621305,
    "extracted_entities": "Borse - Mercati finanziari - Quotazioni - Investimenti",
    "saturation_score": 8.0
  },
  {
    "rank": 39,
    "entity": "benfica - farense",
    "discover_score": 1.3773870392491152,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033613,
    "score_7d": 4.742603550295858,
    "extracted_entities": "Benfica - Farense - Calcio - Partita - Portogallo",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "luciano darderi",
    "discover_score": 1.2271856675209534,
    "score_1h": 3.25,
    "score_4h": 1.2809764072993213,
    "score_7d": 3.603550295857988,
    "extracted_entities": "Luciano Darderi - Tennis - Giocatore",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "atlético madrid - barcellona",
    "discover_score": 1.0869912838486593,
    "score_1h": 0.853448275862069,
    "score_4h": 0.06092436974789916,
    "score_7d": 3.5207100591715976,
    "extracted_entities": "Atlético Madrid - Barcellona - Partita di calcio - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "san riccardo",
    "discover_score": 1.073910619304025,
    "score_1h": 1.603448275862069,
    "score_4h": 0.9327731092436975,
    "score_7d": 2.730769230769231,
    "extracted_entities": "San Riccardo - Santo - Religione - Festa - Culto",
    "saturation_score": 10.0
  },
  {
    "rank": 47,
    "entity": "pontedera",
    "discover_score": 1.0220177901443777,
    "score_1h": 1.603448275862069,
    "score_4h": 1.5252100840336134,
    "score_7d": 3.2840236686390534,
    "extracted_entities": "Pontedera - Toscana - Città - Italia",
    "saturation_score": 169.0
  },
  {
    "rank": 14,
    "entity": "sciopero 4 aprile 2025",
    "discover_score": 0.9976616519574728,
    "score_1h": 1.5,
    "score_4h": 1.09655954431982,
    "score_7d": 2.6538461538461537,
    "extracted_entities": "Sciopero - 4 aprile 2025 - Proteste - Lavoratori - Sindacati",
    "saturation_score": 38.0
  },
  {
    "rank": 8,
    "entity": "gaetano migliaccio",
    "discover_score": 0.8757338330892859,
    "score_1h": 0.896551724137931,
    "score_4h": 2.0987394957983194,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Gaetano Migliaccio",
    "saturation_score": 68.0
  },
  {
    "rank": 13,
    "entity": "kkr vs srh",
    "discover_score": 0.7893354706253967,
    "score_1h": 8.293103448275861,
    "score_4h": 6.027310924369749,
    "score_7d": 0.7928994082840237,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "valentina persia",
    "discover_score": 0.7582831231080412,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.800420168067227,
    "score_7d": 2.1834319526627217,
    "extracted_entities": "Valentina Persia - Personaggio pubblico - Intrattenimento - Televisione",
    "saturation_score": 4.0
  },
  {
    "rank": 11,
    "entity": "lino zani",
    "discover_score": 0.7526071141102547,
    "score_1h": 1.1637931034482758,
    "score_4h": 0.23319327731092437,
    "score_7d": 2.0414201183431953,
    "extracted_entities": "Lino Zani - Alpinismo - Guida Alpina - Montagna",
    "saturation_score": 9.0
  },
  {
    "rank": 20,
    "entity": "paolo fox oroscopo capricorno",
    "discover_score": 0.7516861906082498,
    "score_1h": 0.847457627118644,
    "score_4h": 0.058823529411764705,
    "score_7d": 2.331360946745562,
    "extracted_entities": "Paolo Fox - Oroscopo - Capricorno",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "liverpool - everton",
    "discover_score": 0.7184910499410764,
    "score_1h": 0.0,
    "score_4h": 0.0861344537815126,
    "score_7d": 2.3875739644970415,
    "extracted_entities": "Liverpool - Everton - Calcio - Premier League - Derby di Merseyside",
    "saturation_score": 31.0
  },
  {
    "rank": 6,
    "entity": "sabina ciuffini",
    "discover_score": 0.6795693474574962,
    "score_1h": 0.4406779661016949,
    "score_4h": 3.8156710382897927,
    "score_7d": 0.7307692307692308,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 28,
    "entity": "antonio albanese",
    "discover_score": 0.6451635314232292,
    "score_1h": 10.71551724137931,
    "score_4h": 3.2289915966386555,
    "score_7d": 1.2455621301775148,
    "extracted_entities": "Antonio Albanese - Attore - Comico - Cinema Italiano - Televisione",
    "saturation_score": 2.0
  },
  {
    "rank": 35,
    "entity": "vittorio pirbazari",
    "discover_score": 0.6001700804891235,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.43487394957983194,
    "score_7d": 1.8994082840236686,
    "extracted_entities": "Vittorio Pirbazari",
    "saturation_score": 46.0
  },
  {
    "rank": 40,
    "entity": "fenerbahçe - galatasaray",
    "discover_score": 0.5642969546244027,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.5231092436974789,
    "score_7d": 1.7810650887573964,
    "extracted_entities": "Fenerbahçe - Galatasaray - Calcio - Derby - Turchia",
    "saturation_score": 6.0
  },
  {
    "rank": 12,
    "entity": "mourinho",
    "discover_score": 0.47190678116380574,
    "score_1h": 0.0,
    "score_4h": 0.5315126050420168,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "José Mourinho - Allenatore di calcio - AS Roma - Premier League - Champions League",
    "saturation_score": 590.0
  },
  {
    "rank": 45,
    "entity": "banco bpm unicredit",
    "discover_score": 0.4620988271843111,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.15756302521008403,
    "score_7d": 1.5118343195266273,
    "extracted_entities": "Banco BPM - UniCredit - Banche - Finanza",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "bibbiano",
    "discover_score": 0.44629529532070544,
    "score_1h": 1.9874342489772063,
    "score_4h": 0.7584033613445378,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Bibbiano - Inchiesta - Affidi illeciti - Bambini - Politica",
    "saturation_score": 190.0
  },
  {
    "rank": 48,
    "entity": "andrea condorelli",
    "discover_score": 0.4238220894819497,
    "score_1h": 1.4741379310344827,
    "score_4h": 1.6176470588235294,
    "score_7d": 0.9733727810650887,
    "extracted_entities": "Andrea Condorelli",
    "saturation_score": 5.0
  },
  {
    "rank": 22,
    "entity": "riccardo muci",
    "discover_score": 0.3994480541678667,
    "score_1h": 0.0,
    "score_4h": 0.1911764705882353,
    "score_7d": 1.0887573964497042,
    "extracted_entities": "Riccardo Muci",
    "saturation_score": 90.0
  },
  {
    "rank": 36,
    "entity": "feyenoord - groningen",
    "discover_score": 0.3991238796076626,
    "score_1h": 0.0,
    "score_4h": 0.17016806722689076,
    "score_7d": 1.2011834319526626,
    "extracted_entities": "Feyenoord - Groningen - Calcio - Eredivisie",
    "saturation_score": 2.0
  },
  {
    "rank": 25,
    "entity": "luis henrique",
    "discover_score": 0.3579386316507729,
    "score_1h": 6.663793103448276,
    "score_4h": 2.222689075630252,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Luis Henrique",
    "saturation_score": 142.0
  },
  {
    "rank": 37,
    "entity": "tallon griekspoor",
    "discover_score": 0.31576303097309943,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.8550420168067226,
    "score_7d": 0.6834319526627219,
    "extracted_entities": "Tallon Griekspoor - Tennis - Giocatore",
    "saturation_score": 3.0
  },
  {
    "rank": 7,
    "entity": "lulu selassie",
    "discover_score": 0.3076286741349893,
    "score_1h": 10.770748100526008,
    "score_4h": 2.8193277310924367,
    "score_7d": 0.023668639053254437,
    "extracted_entities": "Lulù Selassié",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "manila nazzaro",
    "discover_score": 0.25100615551492006,
    "score_1h": 5.905172413793103,
    "score_4h": 1.334033613445378,
    "score_7d": 0.27218934911242604,
    "extracted_entities": "Manila Nazzaro",
    "saturation_score": 2.0
  },
  {
    "rank": 44,
    "entity": "alex belli",
    "discover_score": 0.24834899115210718,
    "score_1h": 0.0,
    "score_4h": 0.8172268907563025,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Alex Belli - Personaggio televisivo - Attore - Reality show",
    "saturation_score": 3.0
  },
  {
    "rank": 49,
    "entity": "newcastle - brentford",
    "discover_score": 0.2419091102409837,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1134453781512605,
    "score_7d": 0.6094674556213018,
    "extracted_entities": "Newcastle - Brentford - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 18,
    "entity": "assemblea sinodale",
    "discover_score": 0.2264917765468791,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.6260504201680672,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Assemblea - Sinodo - Chiesa Cattolica - Vescovi - Discussione",
    "saturation_score": 76.0
  },
  {
    "rank": 15,
    "entity": "gianni alemanno",
    "discover_score": 0.20738446734724114,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.2668067226890756,
    "score_7d": 0.2899408284023669,
    "extracted_entities": "Gianni Alemanno - Politica Italiana - Sindaco di Roma",
    "saturation_score": 10.0
  },
  {
    "rank": 33,
    "entity": "console nintendo switch 2",
    "discover_score": 0.17328492600014375,
    "score_1h": 0.31034482758620685,
    "score_4h": 0.058823529411764705,
    "score_7d": 0.28106508875739644,
    "extracted_entities": "Console - Nintendo Switch 2 - Videogiochi - Tecnologia",
    "saturation_score": 2.0
  },
  {
    "rank": 30,
    "entity": "kamindu mendis",
    "discover_score": 0.15726053725733494,
    "score_1h": 0.0,
    "score_4h": 0.42378080939488766,
    "score_7d": 0.11834319526627218,
    "extracted_entities": "Kamindu Mendis - Cricket - Sri Lanka",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "carlo acutis",
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
    "entity": "lafc - inter miami",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "paolo villaggio",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "mediaset play",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "brighton & hove albion - aston villa",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "atlético madrid vs barcelona",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "canale 5",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "mediaset infinity",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "colombaccio",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "investing",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "radio 24",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "mediaset",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "corriere della sera",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "barcellona calcio",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "live nation",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "selvaggia lucarelli",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "donald trump elon musk",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "francesca jones",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "dorothea wierer",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "afc bournemouth - ipswich town",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "inter oggi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "amanda bynes",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "corinne clery",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "canale 5 streaming",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "sempio",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "nuggets - spurs",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "thunder - pistons",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "wall street journal",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "liverpool",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "nordio",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "bitcoin",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "greta scarano",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "celtics - heat",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "acqualatina",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "atletico madrid",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "gmail email",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "classroom",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "la stampa",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "liverpool everton",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "tammy abraham",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "cnn",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "top gun maverick",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "kid rock",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "thomas berenbruch",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "drive",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "universitario - river plate",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "simone inzaghi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "tom selleck",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "partita stasera",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "nikkei",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "sky tg24",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "mavericks - hawks",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "ticketmaster uk",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "nicoletta manni",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "christian caramia",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "sottil",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "leao",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "car parts",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "azioni stellantis",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "keanu reeves",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "francesco renga",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "previsioni meteo 6 aprile",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "man city vs leicester city",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "okan buruk",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "femminicidi in italia",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "mondiale per club",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "inzaghi",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "samarcanda",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "gabriele re cecconi",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "stefano de martino",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "mauritius",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "stefania nobile",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "ragazza uccisa",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "sportmediaset",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "barella",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "stefania craxi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "cavaliers - knicks",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "di marco",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "infinity mediaset",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "lautaro martinez",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "delivery",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "josep martínez",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "carrara",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "rockets - jazz",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "partita oggi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "buongiorno giovedi 3 aprile",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "manchester city",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "monreale",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "cacciari",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "trenord",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "the golden bachelor",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "brenda lodigiani",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "fofana",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "buon giovedi 3 aprile 2025",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "unica",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "lampedusa",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "etna",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "zalewski",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "ambra angiolini",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "i cesaroni",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "allenatore milan",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "paolo guzzanti giornalista",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "volpe 132",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "landini",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "massimo cacciari",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "florenzi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "attore top gun morto",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "cristiano godano",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "campari azioni",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "hakan çalhanoğlu",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "canale di drake",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "chipotle",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "trump live",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "rai news",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "paolo ruffini",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "milan inter tv",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "niccolò fabi",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "meg ryan",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "stoccarda lipsia",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "amanda seyfried",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "desio",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "stipendio noipa aprile 2025",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "the beginning after the end",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "beatles",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "julia creek",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "personal injury attorney",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "andy garcia",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "notizie",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "steers",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "golden bachelor",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "calendario inter",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "vieri",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "inter bayern monaco",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "marco rizzo",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "maurizio mosca",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "مان سيتي ضد ليستر سيتي",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "skytg24",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "tom hanks",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "raffaele fitto",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "lol",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "primark",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "pulisic",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "millionday",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "bastoni",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "baustelle",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "motore",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "personal injury lawyer",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "mediterranean",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "fatto quotidiano",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "panera bread",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "walker",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "corrado augias",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "santo del giorno 3 aprile",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "cina",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "hunziker",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "milan news",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "theo hernández",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "jennifer aniston",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "vannacci",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "de martino",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "coffee",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "tesla",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "oxy",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "bbc",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "oscar farinetti",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "parma inter",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "crosetto",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "kasatkina",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "sivincetutto",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "unione sarda",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "jimenez",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "ليفربول ضد إيفرتون",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "copa italia",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "subway",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "southampton",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "rodi",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "la promessa anticipazioni",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "varesenews",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "tuttocampo",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "burger king",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "rainews24",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "filippo inzaghi",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 236,
    "entity": "william hill",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 237,
    "entity": "nicola zalewski",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 238,
    "entity": "matteo darmian",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 239,
    "entity": "bruno vespa",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 240,
    "entity": "il paradiso delle signore anticipazioni",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 241,
    "entity": "kyle walker",
    "discover_score": 0.08547437138421397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 242,
    "entity": "angelo montanari",
    "discover_score": 0.08544413025264191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 243,
    "entity": "mediaset canale 5",
    "discover_score": 0.08541403508525716,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 244,
    "entity": "ali agca",
    "discover_score": 0.08538408457378113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 245,
    "entity": "giornale di brescia",
    "discover_score": 0.08535427742700234,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 246,
    "entity": "oroscopo oggi capricorno",
    "discover_score": 0.08532461237048485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 247,
    "entity": "anthony edwards",
    "discover_score": 0.08529508814628277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 248,
    "entity": "dune",
    "discover_score": 0.08526570351266076,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 249,
    "entity": "selçuksports",
    "discover_score": 0.08523645724382045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 250,
    "entity": "re cecconi inter",
    "discover_score": 0.08520734812963249,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 251,
    "entity": "il foglio",
    "discover_score": 0.08517837497537416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 252,
    "entity": "emma navarro",
    "discover_score": 0.08514953660147252,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 253,
    "entity": "osimhen",
    "discover_score": 0.08512083184325263,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 254,
    "entity": "koopmeiners",
    "discover_score": 0.08509225955069119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 255,
    "entity": "أتلتيكو مدريد ضد برشلونة",
    "discover_score": 0.08506381858817494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 256,
    "entity": "reddit",
    "discover_score": 0.08503550783426429,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-03 16:50:25",
  "trends_count": 256,
  "top_score": 25.70657527042124,
  "runtime_minutes": 5.030893909931183,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profezie di Oggi\n\nOsservando le stelle digitali di Google Trends, emergono i temi sgargianti del mondo dello sport e della finanza. Calcio e mercati azionari brillano nel firmamento delle tendenze. Partite cariche di emozioni come Milan - Inter (#5) sposano l'euforia dei derby globali, mentre Wall Street e Nasdaq (#4) tessono le intricate trame dell'economia.\n\nNelle pieghe della società e del cinema, 'Minecraft film' (#3) si erge come una formidabile opportunità per contenuti su Google Discover. Nonostante una copertura intonacante bassa, il potenziale è alimentato da un adattamento che stuzzica le fantasie di vecchi e nuovi giocatori. In simbiosi, INPS (#1) offre un sentiero sicuro, navigando tra interesse costante e un DScore elevato, ideale per chi crea contenuto di attualità.\n\nIl cammino della cautela ci porta davanti al santuario del trend legato a 'Trump' (#6), dove l'oceano della saturazione potrebbe annegare i deboli, e 'ANSA' (#2) che, sebbene sempre cruciale, giace sotto il peso di una competizione spietata.\n\nPer chi crea contenuto, la chiave della vera scoperta è nel bilanciare rischio e opportunità, abbracciando ciò che è meno scontato ma vibrante."
};
