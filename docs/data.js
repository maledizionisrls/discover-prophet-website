const trendData = [
  {
    "rank": 19,
    "entity": "caserta",
    "discover_score": 17.86449662235909,
    "score_1h": 34.69827586206897,
    "score_4h": 6.140756302521009,
    "score_7d": 36.514792899408285,
    "extracted_entities": "Caserta - Città - Campania - Turismo - Reggia di Caserta",
    "saturation_score": 2210.0
  },
  {
    "rank": 6,
    "entity": "conte",
    "discover_score": 13.208437533851876,
    "score_1h": 6.094827586206897,
    "score_4h": 2.1218487394957983,
    "score_7d": 22.159763313609467,
    "extracted_entities": "Giuseppe Conte - Politica Italiana - Governo Italiano - Movimento 5 Stelle - Presidente del Consiglio",
    "saturation_score": 1560.0
  },
  {
    "rank": 43,
    "entity": "serie c",
    "discover_score": 5.71287823445939,
    "score_1h": 31.991379310344826,
    "score_4h": 5.088235294117647,
    "score_7d": 16.24852071005917,
    "extracted_entities": "Serie C - Calcio - Campionato - Italia - Lega Pro",
    "saturation_score": 739.0
  },
  {
    "rank": 10,
    "entity": "auguri di buona pasqua",
    "discover_score": 4.263194650289705,
    "score_1h": 17.42241379310345,
    "score_4h": 1.2373949579831933,
    "score_7d": 10.053254437869823,
    "extracted_entities": "Auguri - Buona Pasqua - Festività - Tradizioni",
    "saturation_score": 123.0
  },
  {
    "rank": 34,
    "entity": "bologna inter",
    "discover_score": 3.9384567996845266,
    "score_1h": 2.2844827586206895,
    "score_4h": 0.41596638655462187,
    "score_7d": 12.162721893491124,
    "extracted_entities": "Bologna - Inter - Calcio - Serie A - Partita",
    "saturation_score": 251.0
  },
  {
    "rank": 35,
    "entity": "striscia la notizia",
    "discover_score": 3.528311421092727,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.36764705882352944,
    "score_7d": 11.106508875739644,
    "extracted_entities": "Striscia la Notizia - Programma TV - Satira - Italia - Canale 5",
    "saturation_score": 100.0
  },
  {
    "rank": 41,
    "entity": "roma verona",
    "discover_score": 3.178175426536753,
    "score_1h": 1.3189655172413792,
    "score_4h": 0.3487394957983193,
    "score_7d": 10.402366863905325,
    "extracted_entities": "Roma - Verona - Città - Viaggio - Turismo",
    "saturation_score": 143.0
  },
  {
    "rank": 50,
    "entity": "wrestlemania 41",
    "discover_score": 2.532595452816785,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6869747899159664,
    "score_7d": 8.65680473372781,
    "extracted_entities": "WrestleMania 41 - WWE - Evento di wrestling",
    "saturation_score": 39.0
  },
  {
    "rank": 44,
    "entity": "carlos alcaraz",
    "discover_score": 2.168503374987178,
    "score_1h": 0.0,
    "score_4h": 0.32983193277310924,
    "score_7d": 7.43491124260355,
    "extracted_entities": "Carlos Alcaraz - Tennis - Giocatore - Sport",
    "saturation_score": 32.0
  },
  {
    "rank": 2,
    "entity": "vicenza - triestina",
    "discover_score": 1.9921764780709499,
    "score_1h": 2.1724137931034484,
    "score_4h": 1.1029411764705883,
    "score_7d": 3.4467455621301775,
    "extracted_entities": "Vicenza - Triestina - Calcio - Serie C - Partita",
    "saturation_score": 85.0
  },
  {
    "rank": 12,
    "entity": "auguri di buona pasqua 2025",
    "discover_score": 1.9650284730109506,
    "score_1h": 2.8706896551724137,
    "score_4h": 0.6302521008403361,
    "score_7d": 5.3047337278106514,
    "extracted_entities": "Auguri - Buona Pasqua - 2025",
    "saturation_score": 38.0
  },
  {
    "rank": 48,
    "entity": "processione venerdì santo",
    "discover_score": 1.7978191771802394,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.16176470588235292,
    "score_7d": 6.372781065088757,
    "extracted_entities": "Processione - Venerdì Santo - Evento religioso - Tradizione - Settimana Santa",
    "saturation_score": 4.0
  },
  {
    "rank": 30,
    "entity": "padova calcio",
    "discover_score": 1.7851145401215316,
    "score_1h": 2.353448275862069,
    "score_4h": 0.21008403361344538,
    "score_7d": 5.849112426035503,
    "extracted_entities": "Padova - Calcio - Squadra di calcio - Sport",
    "saturation_score": 2.0
  },
  {
    "rank": 42,
    "entity": "alexander zverev",
    "discover_score": 1.664092434711413,
    "score_1h": 1.5775862068965516,
    "score_4h": 0.2184873949579832,
    "score_7d": 5.784023668639053,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour",
    "saturation_score": 9.0
  },
  {
    "rank": 1,
    "entity": "andrea conti",
    "discover_score": 1.4187357446108337,
    "score_1h": 3.8620689655172415,
    "score_4h": 0.45798319327731096,
    "score_7d": 2.1538461538461537,
    "extracted_entities": "Andrea Conti - Calciatore - Serie A - Milan - Atalanta",
    "saturation_score": 58.0
  },
  {
    "rank": 49,
    "entity": "monica bellucci",
    "discover_score": 1.374161317806126,
    "score_1h": 1.6293103448275863,
    "score_4h": 0.4579831932773109,
    "score_7d": 4.863905325443787,
    "extracted_entities": "Monica Bellucci - Attrice - Cinema - Moda - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 45,
    "entity": "etna",
    "discover_score": 1.3223628932723905,
    "score_1h": 4.18103448275862,
    "score_4h": 1.0525210084033612,
    "score_7d": 4.452662721893491,
    "extracted_entities": "Etna - Vulcano - Sicilia - Eruzione - Turismo",
    "saturation_score": 123.0
  },
  {
    "rank": 3,
    "entity": "juventus women - milan",
    "discover_score": 1.2767724899099535,
    "score_1h": 0.0,
    "score_4h": 0.5483193277310925,
    "score_7d": 2.5887573964497044,
    "extracted_entities": "Juventus Women - Milan - Calcio femminile - Serie A femminile",
    "saturation_score": 101.0
  },
  {
    "rank": 46,
    "entity": "milan atalanta",
    "discover_score": 1.1717214724942686,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.10084033613445378,
    "score_7d": 4.207100591715976,
    "extracted_entities": "Milan - Atalanta - Calcio - Serie A - Partita",
    "saturation_score": 110.0
  },
  {
    "rank": 16,
    "entity": "sporting - moreirense",
    "discover_score": 1.1120778107437055,
    "score_1h": 1.3793103448275863,
    "score_4h": 0.5735294117647058,
    "score_7d": 3.21301775147929,
    "extracted_entities": "Sporting - Moreirense - Calcio - Partita - Primeira Liga",
    "saturation_score": 3.0
  },
  {
    "rank": 20,
    "entity": "neres",
    "discover_score": 1.062595271754184,
    "score_1h": 0.0,
    "score_4h": 0.5672268907563025,
    "score_7d": 3.1952662721893494,
    "extracted_entities": "Neres - Calciatore - Ajax - Brasile - Nazionale di calcio",
    "saturation_score": 182.0
  },
  {
    "rank": 13,
    "entity": "grizzlies - mavericks",
    "discover_score": 1.045635993273503,
    "score_1h": 3.4741379310344827,
    "score_4h": 0.7016806722689075,
    "score_7d": 2.8609467455621305,
    "extracted_entities": "Grizzlies - Mavericks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "buona vigilia di pasqua 2025",
    "discover_score": 1.0226892359614093,
    "score_1h": 22.301724137931036,
    "score_4h": 5.189075630252101,
    "score_7d": 1.1952662721893492,
    "extracted_entities": "Vigilia di Pasqua - 2025 - Celebrazioni",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "hawks - heat",
    "discover_score": 1.009308448698763,
    "score_1h": 3.0689655172413794,
    "score_4h": 0.32352941176470584,
    "score_7d": 3.121301775147929,
    "extracted_entities": "Hawks - Heat - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 47,
    "entity": "rcb vs pbks",
    "discover_score": 0.9198898818456266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.337278106508876,
    "extracted_entities": "RCB - PBKS - Partita di cricket - Indian Premier League - Squadre di cricket",
    "saturation_score": 0.0
  },
  {
    "rank": 17,
    "entity": "sigfrido ranucci",
    "discover_score": 0.9155043774212324,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.38865546218487396,
    "score_7d": 2.6952662721893494,
    "extracted_entities": "Sigfrido Ranucci - Giornalismo - Report",
    "saturation_score": 4.0
  },
  {
    "rank": 36,
    "entity": "amstel gold race 2025",
    "discover_score": 0.8872525119986213,
    "score_1h": 0.0,
    "score_4h": 0.5609243697478992,
    "score_7d": 2.92603550295858,
    "extracted_entities": "Amstel Gold Race - 2025 - Ciclismo - Paesi Bassi - Evento sportivo",
    "saturation_score": 8.0
  },
  {
    "rank": 14,
    "entity": "via crucis 2025",
    "discover_score": 0.8648463130345576,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.43487394957983194,
    "score_7d": 2.4319526627218937,
    "extracted_entities": "Via Crucis - 2025 - Evento religioso - Cristianesimo - Tradizione",
    "saturation_score": 37.0
  },
  {
    "rank": 27,
    "entity": "fast food restaurant",
    "discover_score": 0.7747287571944267,
    "score_1h": 22.870689655172413,
    "score_4h": 5.995798319327731,
    "score_7d": 1.0059171597633136,
    "extracted_entities": "Fast Food - Ristoranti - Cibo Veloce - Catene Alimentari",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "jd vance giorgia meloni",
    "discover_score": 0.6887293994977587,
    "score_1h": 1.5689655172413792,
    "score_4h": 0.6659663865546219,
    "score_7d": 1.9142011834319528,
    "extracted_entities": "JD Vance - Giorgia Meloni",
    "saturation_score": 2.0
  },
  {
    "rank": 24,
    "entity": "carlo acutis",
    "discover_score": 0.6248039256538221,
    "score_1h": 0.5,
    "score_4h": 0.31932773109243695,
    "score_7d": 1.8934911242603552,
    "extracted_entities": "Carlo Acutis - Beato - Cattolicesimo - Miracoli - Santità",
    "saturation_score": 37.0
  },
  {
    "rank": 40,
    "entity": "gp arabia saudita",
    "discover_score": 0.6076808345184486,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4327731092436975,
    "score_7d": 1.9733727810650887,
    "extracted_entities": "Gran Premio - Arabia Saudita - Formula 1 - Jeddah",
    "saturation_score": 326.0
  },
  {
    "rank": 39,
    "entity": "galatasaray - bodrum",
    "discover_score": 0.5742799562991892,
    "score_1h": 0.0,
    "score_4h": 0.42016806722689076,
    "score_7d": 1.8402366863905326,
    "extracted_entities": "Galatasaray - Bodrum - Calcio - Turchia",
    "saturation_score": 3.0
  },
  {
    "rank": 11,
    "entity": "olimpia milano - cremona",
    "discover_score": 0.5655466624599035,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4726890756302521,
    "score_7d": 1.4023668639053255,
    "extracted_entities": "Olimpia Milano - Cremona - Pallacanestro - Partita - Serie A",
    "saturation_score": 3.0
  },
  {
    "rank": 8,
    "entity": "al-qadisiya - al-nassr",
    "discover_score": 0.5449975937992119,
    "score_1h": 2.4224137931034484,
    "score_4h": 0.21638655462184875,
    "score_7d": 1.3136094674556213,
    "extracted_entities": "Al-Qadisiya - Al-Nassr - Calcio - Partita - Arabia Saudita",
    "saturation_score": 2.0
  },
  {
    "rank": 28,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.5149230303429319,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.20920502092050208,
    "score_7d": 1.5739644970414202,
    "extracted_entities": "Probabili formazioni - Serie A - Calcio - Squadre - Partite",
    "saturation_score": 6.0
  },
  {
    "rank": 7,
    "entity": "testo canzone ultimo bella davvero",
    "discover_score": 0.5108435792522041,
    "score_1h": 1.6982758620689655,
    "score_4h": 0.7058823529411765,
    "score_7d": 1.047337278106509,
    "extracted_entities": "Testo - Canzone - Ultimo - Bella Davvero",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "interprete meloni",
    "discover_score": 0.49151250850951,
    "score_1h": 2.5517241379310343,
    "score_4h": 0.5147058823529411,
    "score_7d": 1.4467455621301775,
    "extracted_entities": "Interprete - Meloni - Traduzione - Lingua - Comunicazione",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "lodi mattutine di oggi",
    "discover_score": 0.4448340872890167,
    "score_1h": 0.0,
    "score_4h": 0.0819327731092437,
    "score_7d": 1.4142011834319528,
    "extracted_entities": "Lodi mattutine - Oggi - Preghiera - Liturgia - Cristianesimo",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "gyokeres",
    "discover_score": 0.4154428916165156,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.1407563025210084,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Gyokeres - Calciatore - Sport - Calcio",
    "saturation_score": 2.0
  },
  {
    "rank": 4,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.39880159880920196,
    "score_1h": 0.0,
    "score_4h": 0.5168067226890756,
    "score_7d": 0.6479289940828402,
    "extracted_entities": "Sondaggi - Politica - Elezioni",
    "saturation_score": 4.0
  },
  {
    "rank": 23,
    "entity": "ernesto galli",
    "discover_score": 0.39729869912557764,
    "score_1h": 0.0,
    "score_4h": 0.06722689075630252,
    "score_7d": 1.1242603550295858,
    "extracted_entities": "Ernesto Galli",
    "saturation_score": 8.0
  },
  {
    "rank": 9,
    "entity": "meditazioni via crucis papa francesco",
    "discover_score": 0.3964891104388908,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.3970588235294118,
    "score_7d": 0.834319526627219,
    "extracted_entities": "Meditazioni - Via Crucis - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "rete 4 stasera quarto grado",
    "discover_score": 0.3649373330644316,
    "score_1h": 3.0,
    "score_4h": 0.32352941176470584,
    "score_7d": 0.849112426035503,
    "extracted_entities": "Rete 4 - Quarto Grado - Programmazione TV",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "testo canzone achille lauro amor",
    "discover_score": 0.3322993188954067,
    "score_1h": 0.0,
    "score_4h": 0.11134453781512606,
    "score_7d": 0.8875739644970415,
    "extracted_entities": "Testo - Canzone - Achille Lauro - Amor",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "melania rea",
    "discover_score": 0.3171585893662259,
    "score_1h": 0.8706896551724137,
    "score_4h": 0.10294117647058823,
    "score_7d": 0.8017751479289941,
    "extracted_entities": "Melania Rea - Omicidio - Salvatore Parolisi - Italia - Caso giudiziario",
    "saturation_score": 119.0
  },
  {
    "rank": 38,
    "entity": "imane khelif",
    "discover_score": 0.3153721747567883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.9171597633136095,
    "extracted_entities": "Imane Khelif - Pugilato - Atleta",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "valentina maiolini-rothbacher",
    "discover_score": 0.2709540944967094,
    "score_1h": 0.0,
    "score_4h": 0.6260504201680672,
    "score_7d": 0.5384615384615384,
    "extracted_entities": "Valentina Maiolini-Rothbacher",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "bangladesh women vs pakistan women",
    "discover_score": 0.26417952624808816,
    "score_1h": 1.9741379310344829,
    "score_4h": 0.7436974789915967,
    "score_7d": 0.47633136094674555,
    "extracted_entities": "Bangladesh Women - Pakistan Women - Cricket - Partita - Squadre Nazionali",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "giulio drago",
    "discover_score": 0.23980868053059898,
    "score_1h": 0.0,
    "score_4h": 0.7689075630252101,
    "score_7d": 0.34615384615384615,
    "extracted_entities": "Giulio Drago",
    "saturation_score": 5.0
  },
  {
    "rank": 51,
    "entity": "thuram",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "porto - famalicão",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "miriam leone",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "guerra ucraina russia",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "alianza lima - chankas cyc",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "serie c girone a",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "enrico lo verso",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "robbie williams",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "colin farrell",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "piacenza",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "noipa emissione speciale",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "saman abbas",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "benedetta pilato",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "feralpisalò - pro vercelli",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "caldiero terme - lecco",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "superenalotto 18 aprile 2025",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "espanyol - getafe",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "kassandra masterchef",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "daniela coli meloni",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "sofia raffaeli",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "giana erminio - virtus verona",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "lazio - napoli",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "karachi kings vs quetta gladiators",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "macron",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "holger rune",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "galatina",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "diodato",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "oroscopo oggi paolo fox scorpione",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "francesca mannocchi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "anticipi e posticipi serie a",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "luciano darderi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "dakota johnson",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "bon jovi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "lumezzane",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "dani olmo",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "lega pro",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "novara - trento",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "snai",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "il mattino di padova",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "ornella vanoni",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "kevin bacon",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "denzel dumfries",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "monfalcone",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "i peccatori film",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "rennes - nantes",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "lba",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "lourdes",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "ben shelton",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "the passion",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "liam neeson",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "freccia del brabante 2025",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "rematch",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "val pusteria",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "الطقس غدًا",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "renate - pergolettese",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "gabriele eredità",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "crimea",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "erode",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "francesco nardon",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "arthur fils",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "simone fontecchio",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "lulu selassie",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "robin williams",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "vittoria puccini",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "noipa arretrati",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "dan peterson",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "rai 1 diretta",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "masterchef",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "amburgo",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "pavia",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "leonardo di caprio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "andrea pennacchi",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "monica giandotti",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "cucinelli",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "luigi mangione",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "borsa italiana oggi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "simona ventura",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "borsa milano oggi",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "anne hathaway",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "immobile ciro",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "mc donald",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "borsa oggi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "bruno vespa",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "stefano massini",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "the chosen",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "pregliasco",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "antonella clerici",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bruno barbieri",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "seravezza",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "giordana angi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "maggie smith",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "peschici",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "jim clark",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "calendario borsa italiana 2025",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "conad",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "via crucis in tv",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "ancelotti esonero",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "serena rossi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "prohodul domnului",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "svitolina",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "rosanna banfi",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "30 notti con il mio ex",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "oroscopo branko oggi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "titanic",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "pasquetta",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "bitonto",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "albinoleffe",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "tallon griekspoor",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "gangs of london",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "ihostage",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "fantastici 4",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "tennis barcellona",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "sporting lisbona",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "al-ahli saudi - al feiha",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "giro d'abruzzo 2025",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "sarà curtis",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "rakotomanga",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "hunziker",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "easter",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "espanyol",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "borsa oggi 18 aprile 2025",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "ncis",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "belize",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "ezio greggio",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "telesud",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "rubio",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "pesce palla argenteo velenoso",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "cricbuzz",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-19 07:00:36",
  "trends_count": 185,
  "top_score": 17.86449662235909,
  "runtime_minutes": 3.620653871695201,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi, il vento del cambiamento soffia attraverso le valli degli sport italiani, illuminando sentieri già battuti e nuovi orizzonti da scoprire. Con gli occhi puntati su \"Serie C\" (#3), vediamo una forza ascendente nel panorama calcistico italiano, che promette emozioni e racconti intessuti di spirito competitivo. Questo trend è immerso in un'aura di opportunità, con una saturazione bassa che invita i creatori di contenuti a esplorarne il potenziale nel regno di Google Discover.\n\nAll'ombra delle tradizioni, \"Auguri di Buona Pasqua 2025\" (#11) emerge come un faro di celebrazione. Sebbene il suo DScore sia modesto, la saturazione è minima, offrendo un fertile terreno per contenuti che intrecciano freschezza e ricorrenza.\n\nTuttavia, non tutte le strade sono agevoli. La “Reggia di Caserta” (#1) risuona sotto il peso di una saturazione ingombrante, avvisando i naviganti di intraprendere tale tema con cautela. In questo mare tempestoso, è essenziale mantenere la rotta verso contenuti che bilanciano interesse e originalità, evitando le onde della sovrasaturazione. Possa la consapevolezza guidarvi, affinché le vostre parole siano sempre ben accolte."
};
