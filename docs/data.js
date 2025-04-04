const trendData = [
  {
    "rank": 45,
    "entity": "calabria",
    "discover_score": 30.450495443331466,
    "score_1h": 70.15926358854472,
    "score_4h": 52.313025210084035,
    "score_7d": 59.61834319526627,
    "extracted_entities": "Calabria - Regione - Italia - Turismo - Cultura",
    "saturation_score": 2360.0
  },
  {
    "rank": 50,
    "entity": "microsoft",
    "discover_score": 22.256186883579336,
    "score_1h": 61.89625949736996,
    "score_4h": 42.34417741992195,
    "score_7d": 45.044378698224854,
    "extracted_entities": "Microsoft - Tecnologia - Software - Azienda - Informatica",
    "saturation_score": 127.0
  },
  {
    "rank": 10,
    "entity": "borsa italiana",
    "discover_score": 11.965585254865255,
    "score_1h": 66.79324956165985,
    "score_4h": 29.98032769593193,
    "score_7d": 16.680473372781066,
    "extracted_entities": "Borsa - Italia - Mercato azionario - Investimenti",
    "saturation_score": 3230.0
  },
  {
    "rank": 28,
    "entity": "lotto",
    "discover_score": 10.811368218260082,
    "score_1h": 62.46887784921099,
    "score_4h": 47.90546218487395,
    "score_7d": 15.745562130177515,
    "extracted_entities": "Lotto - Gioco d'azzardo - Estrazioni - Numeri - Vincite",
    "saturation_score": 1950.0
  },
  {
    "rank": 42,
    "entity": "vinitaly 2025",
    "discover_score": 7.6355028770293645,
    "score_1h": 3.5086206896551726,
    "score_4h": 1.1176470588235294,
    "score_7d": 22.159763313609467,
    "extracted_entities": "Vinitaly - 2025 - Fiera del Vino - Verona - Eventi enologici",
    "saturation_score": 97.0
  },
  {
    "rank": 26,
    "entity": "unicredit azioni",
    "discover_score": 7.082809960858462,
    "score_1h": 13.979398012857978,
    "score_4h": 9.260741535107767,
    "score_7d": 16.810650887573964,
    "extracted_entities": "Unicredit - Azioni - Mercato finanziario",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "stasera in tv",
    "discover_score": 6.884678326823702,
    "score_1h": 22.89655172413793,
    "score_4h": 15.623949579831933,
    "score_7d": 15.653846153846153,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Stasera",
    "saturation_score": 55.0
  },
  {
    "rank": 38,
    "entity": "4 aprile",
    "discover_score": 5.2944003459114075,
    "score_1h": 62.741379310344826,
    "score_4h": 36.3718487394958,
    "score_7d": 6.9674556213017755,
    "extracted_entities": "4 aprile - Eventi storici - Compleanni - Anniversari",
    "saturation_score": 9300.0
  },
  {
    "rank": 22,
    "entity": "wall street",
    "discover_score": 4.000756145017619,
    "score_1h": 2.562974868497954,
    "score_4h": 0.4762842375443901,
    "score_7d": 11.372781065088757,
    "extracted_entities": "Wall Street - Finanza - Borsa - New York - Mercati finanziari",
    "saturation_score": 278.0
  },
  {
    "rank": 1,
    "entity": "chelsea - tottenham",
    "discover_score": 3.5203893964399073,
    "score_1h": 0.0,
    "score_4h": 1.0525210084033614,
    "score_7d": 4.6982248520710055,
    "extracted_entities": "Chelsea - Tottenham - Premier League - Calcio - Partita",
    "saturation_score": 160.0
  },
  {
    "rank": 44,
    "entity": "marrakech atp",
    "discover_score": 3.3504161452883987,
    "score_1h": 1.5,
    "score_4h": 1.0735294117647058,
    "score_7d": 10.834319526627219,
    "extracted_entities": "Marrakech - ATP - Tennis - Torneo",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "san vincenzo",
    "discover_score": 2.4308817553112294,
    "score_1h": 3.3189655172413794,
    "score_4h": 3.491596638655462,
    "score_7d": 6.588757396449704,
    "extracted_entities": "San Vincenzo - Località turistica - Toscana - Spiagge - Porto",
    "saturation_score": 122.0
  },
  {
    "rank": 25,
    "entity": "sciopero trenitalia",
    "discover_score": 2.3860236908162156,
    "score_1h": 1.853448275862069,
    "score_4h": 0.8151260504201681,
    "score_7d": 7.242603550295858,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Ferrovie - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "devil may cry",
    "discover_score": 2.204689441418608,
    "score_1h": 3.982758620689655,
    "score_4h": 0.34309623430962344,
    "score_7d": 7.627218934911243,
    "extracted_entities": "Devil May Cry - Videogioco - Capcom - Dante - Azione",
    "saturation_score": 50.0
  },
  {
    "rank": 14,
    "entity": "dune",
    "discover_score": 1.913887512469066,
    "score_1h": 1.0775862068965516,
    "score_4h": 0.6123554024120108,
    "score_7d": 5.337278106508876,
    "extracted_entities": "Film - Denis Villeneuve - Fantascienza - Frank Herbert - Arrakis",
    "saturation_score": 45.0
  },
  {
    "rank": 2,
    "entity": "lakers - warriors",
    "discover_score": 1.7625746965299558,
    "score_1h": 1.2586206896551724,
    "score_4h": 6.915966386554622,
    "score_7d": 1.7426035502958581,
    "extracted_entities": "Lakers - Warriors - NBA - Basket - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 11,
    "entity": "raffaella scudiero",
    "discover_score": 1.267879698351591,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.7191027038430435,
    "score_7d": 3.378698224852071,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 33.0
  },
  {
    "rank": 6,
    "entity": "federica brignone",
    "discover_score": 1.2373286053981707,
    "score_1h": 5.477936879018118,
    "score_4h": 3.8550420168067228,
    "score_7d": 2.106508875739645,
    "extracted_entities": "Federica Brignone - Sci alpino - Italia",
    "saturation_score": 691.0
  },
  {
    "rank": 27,
    "entity": "elettra lamborghini",
    "discover_score": 1.2322104515184111,
    "score_1h": 0.847457627118644,
    "score_4h": 0.48529411764705876,
    "score_7d": 3.9467455621301775,
    "extracted_entities": "Elettra Lamborghini - Cantante - Personaggio televisivo - Italia",
    "saturation_score": 75.0
  },
  {
    "rank": 16,
    "entity": "anna kalinskaja",
    "discover_score": 1.2245434881726844,
    "score_1h": 0.0,
    "score_4h": 2.9243697478991595,
    "score_7d": 2.9171597633136095,
    "extracted_entities": "Anna Kalinskaja",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "sporting - rio ave",
    "discover_score": 1.111920695034924,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.0,
    "score_7d": 3.591715976331361,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": 2.0
  },
  {
    "rank": 4,
    "entity": "lulu selassie",
    "discover_score": 1.0827608903571928,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8697478991596639,
    "score_7d": 2.257396449704142,
    "extracted_entities": "Lulù Selassié - Persone - Reality TV - Grande Fratello VIP",
    "saturation_score": 4.0
  },
  {
    "rank": 3,
    "entity": "vincita riccione",
    "discover_score": 0.788233105564233,
    "score_1h": 0.0,
    "score_4h": 0.48739495798319327,
    "score_7d": 1.547337278106509,
    "extracted_entities": "Vincita - Riccione - Lotteria - Premio - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "lorenzo sonego",
    "discover_score": 0.7646100531367318,
    "score_1h": 0.0,
    "score_4h": 0.6974789915966387,
    "score_7d": 2.1775147928994083,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore",
    "saturation_score": 5.0
  },
  {
    "rank": 46,
    "entity": "infarto nanni moretti",
    "discover_score": 0.7626902114916781,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.22899159663865545,
    "score_7d": 2.674556213017752,
    "extracted_entities": "Infarto - Nanni Moretti",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.7589917614939738,
    "score_1h": 0.23275862068965517,
    "score_4h": 1.425697057065504,
    "score_7d": 2.002958579881657,
    "extracted_entities": "Venerdì - 4 aprile - Auguri",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "film dune",
    "discover_score": 0.6707009486573043,
    "score_1h": 0.0,
    "score_4h": 0.19957983193277312,
    "score_7d": 2.3550295857988166,
    "extracted_entities": "Film - Dune - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": 2.0
  },
  {
    "rank": 18,
    "entity": "borsa milano oggi",
    "discover_score": 0.6470500811020373,
    "score_1h": 0.6101694915254238,
    "score_4h": 0.3298319327731093,
    "score_7d": 1.8668639053254437,
    "extracted_entities": "Borsa - Milano - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 35,
    "entity": "matilda de angelis",
    "discover_score": 0.6440677827615697,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7289915966386555,
    "score_7d": 1.982248520710059,
    "extracted_entities": "Matilda De Angelis - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 45.0
  },
  {
    "rank": 36,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.6179451346328974,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.4012605042016807,
    "score_7d": 1.985207100591716,
    "extracted_entities": "Chelsea - Tottenham - Partita di calcio - Premier League",
    "saturation_score": 5.0
  },
  {
    "rank": 13,
    "entity": "sciopero scuola",
    "discover_score": 0.556762411654314,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.1134453781512605,
    "score_7d": 1.2544378698224852,
    "extracted_entities": "Sciopero - Scuola - Protesta - Educazione",
    "saturation_score": 10.0
  },
  {
    "rank": 17,
    "entity": "north sentinel",
    "discover_score": 0.4604700821533582,
    "score_1h": 0.0,
    "score_4h": 0.5987394957983193,
    "score_7d": 1.1390532544378698,
    "extracted_entities": "North Sentinel Island - Isole Andamane - Tribù Sentinelesi - Oceano Indiano",
    "saturation_score": 7.0
  },
  {
    "rank": 5,
    "entity": "radio deejay riccione",
    "discover_score": 0.44949880981839935,
    "score_1h": 5.905172413793104,
    "score_4h": 1.2962184873949578,
    "score_7d": 0.6449704142011834,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "laura loomer",
    "discover_score": 0.4360518226356406,
    "score_1h": 1.129310344827586,
    "score_4h": 0.8781512605042017,
    "score_7d": 0.7810650887573964,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 23.0
  },
  {
    "rank": 43,
    "entity": "helena prestes tapiro",
    "discover_score": 0.42211807384502154,
    "score_1h": 0.0,
    "score_4h": 0.06512605042016807,
    "score_7d": 1.363905325443787,
    "extracted_entities": "Helena Prestes - Tapiro",
    "saturation_score": 5.0
  },
  {
    "rank": 9,
    "entity": "prove libere f1 oggi",
    "discover_score": 0.4094731125073675,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.1302521008403361,
    "score_7d": 0.6893491124260355,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "kkr vs srh",
    "discover_score": 0.40029186059796706,
    "score_1h": 0.0,
    "score_4h": 0.1638655462184874,
    "score_7d": 1.1745562130177516,
    "extracted_entities": "KKR - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "sabina ciuffini",
    "discover_score": 0.396489281386971,
    "score_1h": 1.1078316773816481,
    "score_4h": 0.3151260504201681,
    "score_7d": 1.0236686390532543,
    "extracted_entities": "Sabina Ciuffini - Personaggio televisivo - Italia - Anni '70",
    "saturation_score": 8.0
  },
  {
    "rank": 37,
    "entity": "greta scarano",
    "discover_score": 0.3924953251382858,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.0,
    "score_7d": 1.227810650887574,
    "extracted_entities": "Greta Scarano - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 83.0
  },
  {
    "rank": 41,
    "entity": "ordinanza maturità",
    "discover_score": 0.3878166364885845,
    "score_1h": 0.0,
    "score_4h": 0.0861344537815126,
    "score_7d": 1.2071005917159763,
    "extracted_entities": "Ordinanza - Maturità - Esame di Stato - Ministero dell'Istruzione",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "ufo sweden",
    "discover_score": 0.35168640803663775,
    "score_1h": 0.0,
    "score_4h": 0.1827731092436975,
    "score_7d": 1.0621301775147929,
    "extracted_entities": "UFO - Svezia - Avvistamenti",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "dune 2",
    "discover_score": 0.3463392831039149,
    "score_1h": 1.5775862068965516,
    "score_4h": 0.21008403361344535,
    "score_7d": 0.9970414201183432,
    "extracted_entities": "Dune 2 - Film - Denis Villeneuve - Fantascienza - Sequel",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "assemblea sinodale",
    "discover_score": 0.3367342560457388,
    "score_1h": 0.0,
    "score_4h": 0.09663865546218486,
    "score_7d": 0.9289940828402367,
    "extracted_entities": "Assemblea - Sinodo - Chiesa - Discussione - Riforme",
    "saturation_score": 101.0
  },
  {
    "rank": 12,
    "entity": "giovanni ferrero",
    "discover_score": 0.31975231400053455,
    "score_1h": 0.0,
    "score_4h": 0.3907563025210084,
    "score_7d": 0.6331360946745562,
    "extracted_entities": "Giovanni Ferrero - Ferrero Group - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 3.0
  },
  {
    "rank": 15,
    "entity": "donte divincenzo",
    "discover_score": 0.2853027322691027,
    "score_1h": 1.4913793103448276,
    "score_4h": 0.6869747899159664,
    "score_7d": 0.47041420118343197,
    "extracted_entities": "Donte DiVincenzo - NBA - Basket",
    "saturation_score": 5.0
  },
  {
    "rank": 8,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.2822519186831782,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.2415966386554622,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Antonino Cannavacciuolo - Chef - Cucina Italiana - Ristoranti - Televisione",
    "saturation_score": 3.0
  },
  {
    "rank": 32,
    "entity": "dune film",
    "discover_score": 0.24873135223082593,
    "score_1h": 0.0,
    "score_4h": 0.18907563025210083,
    "score_7d": 0.5621301775147929,
    "extracted_entities": "Dune - Film - Denis Villeneuve - Fantascienza - Frank Herbert",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "sixers - bucks",
    "discover_score": 0.23302630284324782,
    "score_1h": 0.0,
    "score_4h": 0.5782760803065996,
    "score_7d": 0.3994082840236686,
    "extracted_entities": "Sixers - Bucks - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.1902303761212469,
    "score_1h": 0.5172413793103449,
    "score_4h": 0.16596638655462184,
    "score_7d": 0.3165680473372781,
    "extracted_entities": "Francesco - Papa della gente - Canale 5",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "hostage",
    "discover_score": 0.12676881437049362,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 0.07100591715976332,
    "extracted_entities": "Ostaggi - Rapimento - Crisi - Liberazione - Negoziazioni",
    "saturation_score": 3.0
  },
  {
    "rank": 51,
    "entity": "raiplay",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "roberto bolle",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "console nintendo switch 2",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "heat - grizzlies",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "nets - timberwolves",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "invalsi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "mad max fury road",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "bastoni",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "beşiktaş - göztepe",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "lakers vs warriors",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "tommaso zorzi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "vittorio feltri",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "francesca mannocchi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "lady gaga milano",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "angelucci",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "pulse netflix",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "leonardo azioni",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "timothée chalamet",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "lady gaga",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "scandicci",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "blue bloods",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "valentina persia",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "immunizations",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "mad max",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "valerio lundini",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "pharmacy",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "flu shots",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "cfr cluj - u craiova",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "licia fertz",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "vaccinations",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "michelle hunziker",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "dolce vita orient express",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "stellantis",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "piazza della loggia",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "kevin bacon",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "vaccines",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "the darkness",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "jodie foster",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "inps",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "tallon griekspoor",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "hostage film",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "the image of you",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "mattia bellucci",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "andrea pisani",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "gaetano migliaccio mare fuori",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "alex belli",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "lorenzo biagiarelli",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "tom selleck",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "sean connery",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "nasdaq 100",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "paolo villaggio",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "gazzetta di parma",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "dr",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "barcis",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "kamindu mendis",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "alessandro sallusti",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "amanda bynes",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "restaurant",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "donzelli",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "greta thunberg",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "bibbiano",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "michele serra",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "daniel lee",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "laerte pappalardo",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "black hawk down",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "dorothea wierer",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "carlo acutis",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "desaparecidos",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "luca sommi",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "pamela anderson",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "vincicasa",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "millionday",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "miyazaki",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "bonus bollette 2025",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "antonio albanese",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "messaggero",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "reuters",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "paolo del debbio",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "gustavo sa",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "giovanni floris",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "belén rodríguez",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "leggo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "isee",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "nordio",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "bruce springsteen",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "manila nazzaro",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "sgarbi come sta",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "nba risultati",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "william hill",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "melfi",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "corinne clery",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "risultati nba",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "cruciani",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "minecraft",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "guida tv",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "ticketmaster uk",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "paul pogba",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "lollobrigida",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "christian slater",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "un posto al sole 3 aprile 2025",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "elisa longo borghini",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "nicoletta manni",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "südtirol news",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "famiglie d'italia",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "pontedera",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "mauritius",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "maria elena boschi",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "samarcanda",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "sabrina uomini e donne",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "luis henrique marsiglia",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "cammino di santiago",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "verdansk",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "stan wawrinka",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "quotazione oro oggi",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "wall street journal",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "brenda lodigiani",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "sorrentino",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "baustelle",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 09:42:16",
  "trends_count": 174,
  "top_score": 30.450495443331466,
  "runtime_minutes": 3.5219549179077148,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "In questa alba digitale, le correnti di Google Trends rivelano tre temi dominanti: il fervore della finanza, l'incessante richiamo degli eventi sportivi, e l'invito delle terre italiche al turismo e alla scoperta. La Borsa Italiana e il mondo enologico con \"Vinitaly 2025\" figurano tra le opportunità di investimento e speculazione, mentre il calcio europeo, con sfide come Chelsea-Tottenham, cattura gli animi appassionati. Infine, la Calabria si innalza come sirena attraente per chi ricerca cultura e relax.\n\nTra le opportunità del giorno, è il momento di cogliere l'occasione di esplorare Microsoft (#2), che, con una saturazione limitata e un DScore robusto, si presenta come germoglio fertile per contenuti innovativi e tech-oriented. Parallelamente, il Vinitaly 2025 (#5) offre una nicchia promettente con la sua bassa saturazione.\n\nInvece, la Calabria (#1), con la sua alta saturazione, rischia di essere un mare già colmo di voci difficili da distinguere. Allo stesso modo, la Borsa Italiana (#3) si sfida con una competizione copiosa, suggerendo cautela.\n\nChe chi crea contenuti ascolti questi segnali: il tempismo è tutto, e oggi l'innovazione sposa il sottile distillato tra domanda e originalità."
};
