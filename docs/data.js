const trendData = [
  {
    "rank": 35,
    "entity": "harry",
    "discover_score": 21.464513426001428,
    "score_1h": 47.63793103448276,
    "score_4h": 13.747899159663866,
    "score_7d": 46.89324457593688,
    "extracted_entities": "Harry Potter - Harry Styles - Principe Harry - Harry Kane - Harry e Meghan",
    "saturation_score": 708.0
  },
  {
    "rank": 50,
    "entity": "michelle",
    "discover_score": 12.352493875141827,
    "score_1h": 9.120689655172413,
    "score_4h": 1.8676470588235294,
    "score_7d": 34.153176951253876,
    "extracted_entities": "Michelle Obama - Michelle Pfeiffer - Michelle Williams - Michelle Rodriguez - Michelle Yeoh",
    "saturation_score": 42.0
  },
  {
    "rank": 41,
    "entity": "lady gaga",
    "discover_score": 11.41731174618419,
    "score_1h": 7.068965517241379,
    "score_4h": 1.3815442494989627,
    "score_7d": 30.89327979712595,
    "extracted_entities": "Lady Gaga - Cantante - Artista - Pop - Intrattenimento",
    "saturation_score": 10.0
  },
  {
    "rank": 5,
    "entity": "superenalotto",
    "discover_score": 9.27025999913477,
    "score_1h": 60.01724137931035,
    "score_4h": 16.214285714285715,
    "score_7d": 12.634773879966188,
    "extracted_entities": "Superenalotto - Lotteria - Jackpot - Estrazione - Vincita",
    "saturation_score": 121.0
  },
  {
    "rank": 3,
    "entity": "gta 6",
    "discover_score": 8.391121949480278,
    "score_1h": 21.525862068965516,
    "score_4h": 31.489495798319325,
    "score_7d": 6.528282614821077,
    "extracted_entities": "GTA 6 - Videogioco - Rockstar Games - Data di uscita - Trailer",
    "saturation_score": 61.0
  },
  {
    "rank": 193,
    "entity": "lady gaga",
    "discover_score": 8.361671779449178,
    "score_1h": 7.068965517241379,
    "score_4h": 1.3815442494989627,
    "score_7d": 30.89327979712595,
    "extracted_entities": "Lady Gaga - Cantante - Artista - Pop - Intrattenimento",
    "saturation_score": 10.0
  },
  {
    "rank": 13,
    "entity": "svuotare cestino nascosto whatsapp",
    "discover_score": 5.205639511002335,
    "score_1h": 0.810344827586207,
    "score_4h": 2.254201680672269,
    "score_7d": 12.368994787264018,
    "extracted_entities": "Cestino - WhatsApp - Svuotare - Nascosto",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "f1 miami",
    "discover_score": 4.787223648488633,
    "score_1h": 10.818965517241379,
    "score_4h": 7.439075630252101,
    "score_7d": 11.43318540433925,
    "extracted_entities": "Formula 1 - Miami - Gran Premio di Miami",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "il lametino",
    "discover_score": 4.595384244484858,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.8130252100840336,
    "score_7d": 13.810175401521557,
    "extracted_entities": "Il Lametino - Notizie - Calabria - Lamezia Terme - Quotidiano",
    "saturation_score": 1.0
  },
  {
    "rank": 2,
    "entity": "tony effe",
    "discover_score": 4.218182654910828,
    "score_1h": 54.206896551724135,
    "score_4h": 25.105710066453362,
    "score_7d": 1.9514828120597352,
    "extracted_entities": "Tony Effe - Musica - Dark Polo Gang",
    "saturation_score": 325.0
  },
  {
    "rank": 48,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 3.3527776665313933,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.27941176470588236,
    "score_7d": 11.223196675119752,
    "extracted_entities": "Paolo Fox - Oroscopo - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "stoccarda",
    "discover_score": 3.300413865640386,
    "score_1h": 10.086206896551724,
    "score_4h": 0.7016806722689076,
    "score_7d": 9.696393350239504,
    "extracted_entities": "Stoccarda - Germania - Città - Baden-Württemberg - Turismo",
    "saturation_score": 128.0
  },
  {
    "rank": 39,
    "entity": "bologna juventus",
    "discover_score": 2.29092707500734,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.5315126050420168,
    "score_7d": 7.6123027613412235,
    "extracted_entities": "Bologna - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 83.0
  },
  {
    "rank": 15,
    "entity": "musetti draper",
    "discover_score": 2.174478372591632,
    "score_1h": 49.79310344827586,
    "score_4h": 12.771008403361344,
    "score_7d": 3.0266272189349115,
    "extracted_entities": "Lorenzo Musetti - Jack Draper - Tennis",
    "saturation_score": 68.0
  },
  {
    "rank": 36,
    "entity": "michelle hunziker",
    "discover_score": 2.0815303186216907,
    "score_1h": 2.758620689655172,
    "score_4h": 1.3319327731092439,
    "score_7d": 6.646819526627219,
    "extracted_entities": "Michelle Hunziker - Personaggio pubblico - Intrattenimento - Televisione",
    "saturation_score": 32.0
  },
  {
    "rank": 1,
    "entity": "torino - venezia",
    "discover_score": 2.076207944396083,
    "score_1h": 44.025862068965516,
    "score_4h": 11.38377694173904,
    "score_7d": 0.9346823048746126,
    "extracted_entities": "Torino - Venezia - Viaggio - Trasporti - Turismo",
    "saturation_score": 202.0
  },
  {
    "rank": 4,
    "entity": "elodie",
    "discover_score": 2.0656973144665502,
    "score_1h": 11.137931034482758,
    "score_4h": 2.9894166871769627,
    "score_7d": 3.7893772893772892,
    "extracted_entities": "Elodie - Cantante - Musica - Italia",
    "saturation_score": 127.0
  },
  {
    "rank": 9,
    "entity": "terremoto cile",
    "discover_score": 1.8278548797668717,
    "score_1h": 18.82758620689655,
    "score_4h": 15.271008403361344,
    "score_7d": 1.2900112707805014,
    "extracted_entities": "Terremoto - Cile - Evento sismico",
    "saturation_score": 6.0
  },
  {
    "rank": 7,
    "entity": "stipendio landini cgil",
    "discover_score": 1.5808819007671837,
    "score_1h": 4.646551724137931,
    "score_4h": 5.277310924369748,
    "score_7d": 2.6791173570019726,
    "extracted_entities": "Stipendio - Maurizio Landini - CGIL",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "conference league",
    "discover_score": 1.3475649622137214,
    "score_1h": 3.2758620689655173,
    "score_4h": 1.5861344537815127,
    "score_7d": 4.4237461256692026,
    "extracted_entities": "Conference League - UEFA - Calcio - Competizione europea",
    "saturation_score": 338.0
  },
  {
    "rank": 23,
    "entity": "kelly piquet",
    "discover_score": 1.3369579716982476,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.73109243697479,
    "score_7d": 4.0961010143702445,
    "extracted_entities": "Kelly Piquet - Persone",
    "saturation_score": 55.0
  },
  {
    "rank": 20,
    "entity": "sciopero treni 6 maggio 2025",
    "discover_score": 1.3005939362006451,
    "score_1h": 0.0,
    "score_4h": 0.10294117647058824,
    "score_7d": 4.056741335587489,
    "extracted_entities": "Sciopero - Treni - 6 maggio 2025",
    "saturation_score": 10.0
  },
  {
    "rank": 16,
    "entity": "lecce napoli",
    "discover_score": 1.2851526667918216,
    "score_1h": 10.75,
    "score_4h": 2.115546218487395,
    "score_7d": 3.3083615102845876,
    "extracted_entities": "Lecce - Napoli - Calcio - Serie A - Partita",
    "saturation_score": 416.0
  },
  {
    "rank": 8,
    "entity": "iva zanicchi",
    "discover_score": 1.1781830405654574,
    "score_1h": 8.077586206896552,
    "score_4h": 2.0063025210084033,
    "score_7d": 2.5966821639898563,
    "extracted_entities": "Iva Zanicchi - Cantante - Personaggio televisivo - Politica - Italia",
    "saturation_score": 75.0
  },
  {
    "rank": 21,
    "entity": "casper ruud",
    "discover_score": 1.0934501719348513,
    "score_1h": 0.5775862068965517,
    "score_4h": 1.1743697478991597,
    "score_7d": 3.154920400112708,
    "extracted_entities": "Casper Ruud - Tennis - ATP - Giocatore di tennis - Norvegia",
    "saturation_score": 55.0
  },
  {
    "rank": 49,
    "entity": "timothée chalamet",
    "discover_score": 0.9650623855289844,
    "score_1h": 3.7844827586206895,
    "score_4h": 0.7686262789634681,
    "score_7d": 3.309647083685545,
    "extracted_entities": "Timothée Chalamet - Attore - Film - Hollywood - Celebrità",
    "saturation_score": 138.0
  },
  {
    "rank": 6,
    "entity": "manchester city - wolverhampton",
    "discover_score": 0.9360702885963963,
    "score_1h": 31.560344827586206,
    "score_4h": 7.420168067226891,
    "score_7d": 0.6231508875739644,
    "extracted_entities": "Manchester City - Wolverhampton - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 14,
    "entity": "gt vs srh",
    "discover_score": 0.8700394829585659,
    "score_1h": 3.9913793103448274,
    "score_4h": 3.504201680672269,
    "score_7d": 1.6439313891236969,
    "extracted_entities": "GT - SRH - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "donatella versace",
    "discover_score": 0.5343409623439146,
    "score_1h": 2.3017241379310347,
    "score_4h": 1.2857142857142856,
    "score_7d": 1.3818505212735983,
    "extracted_entities": "Donatella Versace - Moda - Versace",
    "saturation_score": 57.0
  },
  {
    "rank": 43,
    "entity": "simbolotto oggi",
    "discover_score": 0.5185459802953095,
    "score_1h": 2.844827586206897,
    "score_4h": 1.9096638655462186,
    "score_7d": 1.2467068188222035,
    "extracted_entities": "Simbolotto - Oggi - Gioco - Lotto - Estrazione",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "adriana abascal",
    "discover_score": 0.43682996036536165,
    "score_1h": 0.12931034482758622,
    "score_4h": 0.6722689075630253,
    "score_7d": 1.0499260355029585,
    "extracted_entities": "Adriana Abascal - Modella - Attrice - Imprenditrice",
    "saturation_score": 84.0
  },
  {
    "rank": 12,
    "entity": "scelte stupide fedez clara testo",
    "discover_score": 0.43617545648325623,
    "score_1h": 0.0,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.9748168498168498,
    "extracted_entities": "Fedez - Clara - Testo - Scelte Stupide",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "elezioni inghilterra farage",
    "discover_score": 0.3804642976589491,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.6197478991596638,
    "score_7d": 0.7459143420681882,
    "extracted_entities": "Elezioni - Inghilterra - Nigel Farage",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "afd",
    "discover_score": 0.33410875733061324,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.8151260504201681,
    "score_7d": 0.6333298112144266,
    "extracted_entities": "Alternative für Deutschland - Partito politico - Germania",
    "saturation_score": 370.0
  },
  {
    "rank": 28,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.3082478710582504,
    "score_1h": 1.5689655172413792,
    "score_4h": 0.529060159628705,
    "score_7d": 0.693346717385179,
    "extracted_entities": "Islamabad United - Peshawar Zalmi - Partita di cricket - Pakistan Super League",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "eleonora di miele",
    "discover_score": 0.30485802273955304,
    "score_1h": 0.0,
    "score_4h": 0.6386554621848739,
    "score_7d": 0.589620315581854,
    "extracted_entities": "Eleonora Di Miele - Attrice - Televisione - Cinema",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "jeffrey dean morgan",
    "discover_score": 0.30357204938402776,
    "score_1h": 1.1637931034482758,
    "score_4h": 0.2710084033613445,
    "score_7d": 0.5941462383770075,
    "extracted_entities": "Jeffrey Dean Morgan - Attore - The Walking Dead - Supernatural - Grey's Anatomy",
    "saturation_score": 2.0
  },
  {
    "rank": 29,
    "entity": "heidenheim - bochum",
    "discover_score": 0.29948344555444684,
    "score_1h": 0.7241379310344828,
    "score_4h": 1.8928571428571428,
    "score_7d": 0.32611298957452806,
    "extracted_entities": "Heidenheim - Bochum - Calcio - Bundesliga",
    "saturation_score": 6.0
  },
  {
    "rank": 25,
    "entity": "rayo vallecano - getafe",
    "discover_score": 0.28969698195604093,
    "score_1h": 6.922413793103448,
    "score_4h": 0.865546218487395,
    "score_7d": 0.515761482107636,
    "extracted_entities": "Rayo Vallecano - Getafe - Partita di calcio - Liga Spagnola",
    "saturation_score": 29.0
  },
  {
    "rank": 46,
    "entity": "victoria beckham",
    "discover_score": 0.2778135856810806,
    "score_1h": 2.336206896551724,
    "score_4h": 0.680672268907563,
    "score_7d": 0.6049063116370809,
    "extracted_entities": "Victoria Beckham - Moda - Spice Girls - Stilista",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "alessandro quasimodo",
    "discover_score": 0.2730672187488241,
    "score_1h": 2.974137931034483,
    "score_4h": 1.4516806722689075,
    "score_7d": 0.3197027331642716,
    "extracted_entities": "Alessandro Quasimodo - Persone",
    "saturation_score": 152.0
  },
  {
    "rank": 42,
    "entity": "david beckham",
    "discover_score": 0.2512936721684832,
    "score_1h": 3.0,
    "score_4h": 0.6911764705882353,
    "score_7d": 0.47673640462101996,
    "extracted_entities": "David Beckham - Calciatore - Celebrità - Manchester United - Inghilterra",
    "saturation_score": 80.0
  },
  {
    "rank": 30,
    "entity": "mauro repetto",
    "discover_score": 0.24757319761788557,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.3676470588235294,
    "score_7d": 0.5017258382642998,
    "extracted_entities": "Mauro Repetto - Musica - 883 - Cantante - Anni '90",
    "saturation_score": 8.0
  },
  {
    "rank": 26,
    "entity": "mef taglio cuneo fiscale",
    "discover_score": 0.21336559716636297,
    "score_1h": 0.0,
    "score_4h": 0.7457983193277311,
    "score_7d": 0.2528529163144548,
    "extracted_entities": "MEF - Taglio - Cuneo fiscale",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "lady bloodfight",
    "discover_score": 0.20783934488996073,
    "score_1h": 0.29310344827586204,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.40710411383488304,
    "extracted_entities": "Lady Bloodfight - Film - Arti marziali - Amy Johnston - Hong Kong",
    "saturation_score": 22.0
  },
  {
    "rank": 38,
    "entity": "popovich",
    "discover_score": 0.20661680158870915,
    "score_1h": 0.0,
    "score_4h": 0.7794117647058824,
    "score_7d": 0.2558114961961116,
    "extracted_entities": "Gregg Popovich - Allenatore di basket - San Antonio Spurs - NBA",
    "saturation_score": 31.0
  },
  {
    "rank": 37,
    "entity": "porto - moreirense",
    "discover_score": 0.18019919444216503,
    "score_1h": 1.0948275862068966,
    "score_4h": 0.6659663865546218,
    "score_7d": 0.17166807551422936,
    "extracted_entities": "Porto - Moreirense - Calcio - Partita - Primeira Liga",
    "saturation_score": 4.0
  },
  {
    "rank": 44,
    "entity": "principe harry",
    "discover_score": 0.17274551093015264,
    "score_1h": 1.2241379310344827,
    "score_4h": 0.5777310924369748,
    "score_7d": 0.17554240631163706,
    "extracted_entities": "Principe Harry - Famiglia Reale Britannica - Meghan Markle - Monarca - Media",
    "saturation_score": 182.0
  },
  {
    "rank": 32,
    "entity": "michele riondino",
    "discover_score": 0.16297448827885355,
    "score_1h": 1.0689655172413792,
    "score_4h": 0.39915966386554624,
    "score_7d": 0.15175049309664695,
    "extracted_entities": "Michele Riondino - Attore - Cinema italiano - Serie TV",
    "saturation_score": 3.0
  },
  {
    "rank": 45,
    "entity": "guardavalle marina",
    "discover_score": 0.1541251844760792,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.014705882352941176,
    "score_7d": 0.23416807551422936,
    "extracted_entities": "Guardavalle Marina - Calabria - Turismo - Spiagge - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 33,
    "entity": "man city vs wolves",
    "discover_score": 0.14666402516318522,
    "score_1h": 3.0344827586206895,
    "score_4h": 0.5483193277310925,
    "score_7d": 0.056371513102282333,
    "extracted_entities": "Manchester City - Wolverhampton Wanderers - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "fiorentina",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "draper ranking",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "vincicasa",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "sbk",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "elena carraro",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "franco mastantuono",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "briatore",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "francisco cerúndolo",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "mirca viola",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "riccardo muti",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "mario andretti",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "caterina balivo",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "buon venerdi 2 maggio",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "elongazione",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "ozzy osbourne",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "uomini e donne oggi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "ghali",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "stuttgart",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "clippers - nuggets",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "nainggolan",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "lino leggio",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "angel fernandez artime cardinale",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "pistons - knicks",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "manuela arcuri",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "alemanno",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "giorgia",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "marco rubio",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "mission impossible rogue nation",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "jill sobule",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "pokemon pocket golden week",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "isco",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "uomini e donne",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "checco zalone",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "tottenham",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "nigel farage",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "il gusto dell'amore",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "pioli",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "donald trump",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "chelsea",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "la notte nel cuore serie turca",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "svitolina",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "rockstar",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "incendio assisi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "parmatoday",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "aryna sabalenka",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "metro a roma",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "nicola sansone",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tottenham bodo glimt",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "yuma",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "cardinale matteo zuppi",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "maltempo",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "che dio ci aiuti 8 ultima puntata",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "anna foglietta",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "buongiorno",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "max verstappen",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "gta 5",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "vivaticket",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "louis dassilva",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "rogue nation",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "il testimone",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "ambra battilana gutierrez",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "fortnite",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "mazzarri",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "antony matheus dos santos",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "andrea pellegrino",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "foca monaca",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "lametino",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "manuel pellegrini",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "beauty",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "comedy match",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "thierry henry",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "fit",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "katia follesa",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "stan wawrinka",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "john travolta",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "tyrone grant",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "iga swiatek",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "tottenham vs bodø/glimt",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "michael matthews",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "daniel day lewis",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "luca zaia",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "blue bloods",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "michele morrone",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "ignazio moser",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "pellegrini allenatore",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "patagarri concerto primo maggio",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "nottingham forest",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "ligabue",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "immunizations",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "as roma biglietti",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "santos - crb",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "flu shots",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "vaccinations",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "vaccines",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "cortona",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "lo celso",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "giorgia cantante",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "tunez lampedusa",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "rocco hunt",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "brancale",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "polignano a mare",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "l'eternauta netflix",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "brocchi",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "pechino express",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "mps azioni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "venaria reale",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "emanuel lo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "tv8 diretta",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "cardinale filoni",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "the four seasons serie",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "avellino - brindisi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "kathmandu",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "intesa azioni",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "schettini",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "anagni",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "restaurant",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "reazione a catena",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "morimondo",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "matteo bassetti",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "europa conference league",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "infinity canale 5",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "andrea iannone",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "tv 8",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "bartra",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "gosens",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "violanews",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "giulia salemi",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "iannone",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "ronn moss",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "cédric bakambu",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "raoul bova",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "amor achille lauro",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "eurovision",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "mandragora",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "concorrenti isola dei famosi 2025",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "emanuele floridi",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "filoni cardinale",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "annalisa",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "jonathan david",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "stellantis azioni",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "moira orfei",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "guerra ucraina russia",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "adli",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "zanicchi",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "rihanna",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "michele serra",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "jury chechi",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "santa marinella",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "achille lauro incoscienti giovani",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "dubai",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "filippo morello",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "trento",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "kean cosa è successo",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "a2a",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "shakira",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "siviglia calcio",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "johnny depp",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "antony betis",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "real madrid - olympiacos",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "730 precompilato quando disponibile",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "il paradiso delle signore anticipazioni",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "man united",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "orlando bloom",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "jeremy renner",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "azioni telecom",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "brunori",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "anna kendrick",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "luis miguel",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "veronica gentili",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "mezzocorona",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "campari azioni",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "tyrique george",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "andrea riccardi",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "gerri",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "simona malpezzi",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "gazzelle concerto",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "david de gea",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "alec baldwin",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "romatoday",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 231,
    "entity": "umbria",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 232,
    "entity": "selena gomez",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 233,
    "entity": "black bag - doppio gioco",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 234,
    "entity": "trade republic",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 235,
    "entity": "montenegro",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-02 19:01:46",
  "trends_count": 235,
  "top_score": 21.464513426001428,
  "runtime_minutes": 3.3623184601465863,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Profetizzo che i temi dominanti emergono dall'universo dello spettacolo e del calcio. Il richiamo delle star come Harry Styles e Lady Gaga (#1, #3) intreccia un destino di intrattenimento e fascino, mentre i campi verdi di gioco erano animati da partite come \"Manchester City - Wolverhampton\" (#27) e \"Bologna Juventus\" (#13).\n\nLe opportunità più promettenti per Google Discover risiedono nei misteri di \"Harry\" (#1), dove il fascino dei nomi legati a Harry Styles e Harry Potter brilla su un punteggio di interesse in rapida crescita e una saturazione moderata. Anche la comparsa della notizia relativa al \"Superenalotto\" (#4) evoca immagini di sogni lottizzati, pronta ad affascinare con un DScore corroborato da un modesto livello di saturazione.\n\nTuttavia, navigando tra i pericoli del mercato, consiglio cautela attorno al dibattito sul \"sciopero treni 6 maggio 2025\" (#22) e all’incanto fugace di \"Musetti Draper\" (#14). Entrambi uniscono basso potenziale Discover a saturazione eccessiva, preannunciando sfide tematiche insidiose.\n\nIn questo intricato intreccio digitale, l'arte di scegliere il giusto contenuto è come danzare con il destino. Lasciate che le tendenze vi guidino, ma siate sempre vigili alle onde in arrivo e al battito del tempo."
};
