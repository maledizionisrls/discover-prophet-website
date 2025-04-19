const trendData = [
  {
    "rank": 5,
    "entity": "conte",
    "discover_score": 31.151806324684213,
    "score_1h": 21.08284628872005,
    "score_4h": 5.932773109243698,
    "score_7d": 38.93491124260355,
    "extracted_entities": "Giuseppe Conte - Politica Italiana - Governo Italiano",
    "saturation_score": 1590.0
  },
  {
    "rank": 17,
    "entity": "caserta",
    "discover_score": 25.428556317383766,
    "score_1h": 42.04310344827586,
    "score_4h": 15.590336134453782,
    "score_7d": 44.84615384615385,
    "extracted_entities": "Caserta - Città - Campania - Turismo - Reggia di Caserta",
    "saturation_score": 2090.0
  },
  {
    "rank": 13,
    "entity": "probabili formazioni",
    "discover_score": 10.25465350263478,
    "score_1h": 61.72004675628288,
    "score_4h": 12.611344537815127,
    "score_7d": 19.328402366863905,
    "extracted_entities": "Calcio - Formazioni - Squadre - Partite - Giocatori",
    "saturation_score": 468.0
  },
  {
    "rank": 31,
    "entity": "bologna inter",
    "discover_score": 5.755788973880131,
    "score_1h": 6.156341320864991,
    "score_4h": 0.8025210084033614,
    "score_7d": 16.511834319526628,
    "extracted_entities": "Bologna - Inter - Calcio - Serie A - Partita",
    "saturation_score": 184.0
  },
  {
    "rank": 1,
    "entity": "andrea conti",
    "discover_score": 3.9115325923040842,
    "score_1h": 3.1206896551724137,
    "score_4h": 0.8046218487394958,
    "score_7d": 5.186390532544379,
    "extracted_entities": "Andrea Conti - Calciatore - Serie A - Milan - Atalanta",
    "saturation_score": 56.0
  },
  {
    "rank": 20,
    "entity": "probabili formazioni serie a",
    "discover_score": 3.589463748667277,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.26260504201680673,
    "score_7d": 10.215976331360947,
    "extracted_entities": "Probabili formazioni - Serie A - Calcio - Squadre - Giocatori",
    "saturation_score": 6.0
  },
  {
    "rank": 42,
    "entity": "carlos alcaraz",
    "discover_score": 2.967681164139089,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.40756302521008403,
    "score_7d": 9.804733727810651,
    "extracted_entities": "Carlos Alcaraz - Tennis - ATP - Spagna - Giocatore",
    "saturation_score": 67.0
  },
  {
    "rank": 36,
    "entity": "gp arabia saudita",
    "discover_score": 2.5719797745203543,
    "score_1h": 0.0,
    "score_4h": 0.7588077071832917,
    "score_7d": 8.292899408284024,
    "extracted_entities": "Gran Premio - Arabia Saudita - Formula 1 - Jeddah",
    "saturation_score": 405.0
  },
  {
    "rank": 43,
    "entity": "wrestlemania 41",
    "discover_score": 2.5640719591709207,
    "score_1h": 3.2241379310344827,
    "score_4h": 0.32563025210084034,
    "score_7d": 8.642011834319526,
    "extracted_entities": "WrestleMania 41 - WWE - Evento di wrestling",
    "saturation_score": 42.0
  },
  {
    "rank": 41,
    "entity": "thuram",
    "discover_score": 2.378370428382597,
    "score_1h": 0.0,
    "score_4h": 1.2878151260504203,
    "score_7d": 7.736686390532545,
    "extracted_entities": "Marcus Thuram - Lilian Thuram - Calcio - Inter - Borussia Mönchengladbach",
    "saturation_score": 481.0
  },
  {
    "rank": 46,
    "entity": "etna",
    "discover_score": 2.320334250760679,
    "score_1h": 5.620689655172414,
    "score_4h": 1.077731092436975,
    "score_7d": 7.763313609467455,
    "extracted_entities": "Etna - Vulcano - Sicilia - Eruzione - Turismo",
    "saturation_score": 134.0
  },
  {
    "rank": 11,
    "entity": "sigfrido ranucci",
    "discover_score": 2.107055953472078,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.42016806722689076,
    "score_7d": 5.621301775147929,
    "extracted_entities": "Sigfrido Ranucci - Giornalismo - Report",
    "saturation_score": 4.0
  },
  {
    "rank": 2,
    "entity": "vicenza - triestina",
    "discover_score": 1.9473265377846556,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.884453781512605,
    "score_7d": 3.42603550295858,
    "extracted_entities": "Vicenza - Triestina - Calcio - Partita - Serie C",
    "saturation_score": 81.0
  },
  {
    "rank": 28,
    "entity": "padova calcio",
    "discover_score": 1.8448697346356993,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7142857142857143,
    "score_7d": 5.822485207100591,
    "extracted_entities": "Padova - Calcio - Squadra di calcio - Sport",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "guerra ucraina russia",
    "discover_score": 1.571131871259611,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.1323529411764706,
    "score_7d": 5.653846153846153,
    "extracted_entities": "Guerra - Ucraina - Russia - Conflitto - Geopolitica",
    "saturation_score": 30.0
  },
  {
    "rank": 37,
    "entity": "coratolive",
    "discover_score": 1.5546164189436122,
    "score_1h": 3.8620689655172415,
    "score_4h": 0.7478991596638656,
    "score_7d": 5.162721893491124,
    "extracted_entities": "Corato - Notizie locali - Eventi - Puglia - Informazione online",
    "saturation_score": 9.0
  },
  {
    "rank": 49,
    "entity": "miriam leone",
    "discover_score": 1.5138494136973497,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.47478991596638653,
    "score_7d": 5.34319526627219,
    "extracted_entities": "Miriam Leone - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 10.0
  },
  {
    "rank": 44,
    "entity": "processione venerdì santo",
    "discover_score": 1.4991858654745385,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.9012605042016807,
    "score_7d": 5.0828402366863905,
    "extracted_entities": "Processione - Venerdì Santo - Evento religioso - Tradizione - Settimana Santa",
    "saturation_score": 4.0
  },
  {
    "rank": 3,
    "entity": "buona vigilia di pasqua 2025",
    "discover_score": 1.4803513703012021,
    "score_1h": 10.525862068965516,
    "score_4h": 7.277310924369748,
    "score_7d": 1.4378698224852071,
    "extracted_entities": "Vigilia di Pasqua - 2025 - Celebrazioni - Tradizioni",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "monica bellucci",
    "discover_score": 1.436474672847726,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6890756302521008,
    "score_7d": 4.982248520710058,
    "extracted_entities": "Monica Bellucci - Attrice - Cinema - Moda - Italia",
    "saturation_score": 7.0
  },
  {
    "rank": 40,
    "entity": "alexander zverev",
    "discover_score": 1.3767348750504287,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.15336134453781514,
    "score_7d": 4.8017751479289945,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour - Classifica - Tornei",
    "saturation_score": 10.0
  },
  {
    "rank": 29,
    "entity": "amstel gold race 2025",
    "discover_score": 1.27310423371607,
    "score_1h": 0.0,
    "score_4h": 0.09663865546218488,
    "score_7d": 4.236686390532545,
    "extracted_entities": "Amstel Gold Race - 2025 - Ciclismo - Paesi Bassi - Evento sportivo",
    "saturation_score": 8.0
  },
  {
    "rank": 7,
    "entity": "al-qadisiya - al-nassr",
    "discover_score": 1.0927573805347137,
    "score_1h": 0.0,
    "score_4h": 0.2647058823529412,
    "score_7d": 2.7544378698224854,
    "extracted_entities": "Al-Qadisiya - Al-Nassr - Calcio - Partita - Squadre",
    "saturation_score": 2.0
  },
  {
    "rank": 32,
    "entity": "lodi mattutine di oggi",
    "discover_score": 1.0580129590607665,
    "score_1h": 2.525862068965517,
    "score_4h": 0.1092436974789916,
    "score_7d": 3.5828402366863905,
    "extracted_entities": "Lodi mattutine - Oggi - Preghiera - Liturgia - Religione",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "interprete meloni",
    "discover_score": 1.0495399589574257,
    "score_1h": 1.0689655172413792,
    "score_4h": 0.5210084033613445,
    "score_7d": 3.340236686390533,
    "extracted_entities": "Interprete - Meloni - Traduzione - Lingua",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "jd vance giorgia meloni",
    "discover_score": 0.9773307667949255,
    "score_1h": 4.647282291057861,
    "score_4h": 1.8823529411764706,
    "score_7d": 2.304733727810651,
    "extracted_entities": "JD Vance - Giorgia Meloni",
    "saturation_score": 2.0
  },
  {
    "rank": 22,
    "entity": "hawks - heat",
    "discover_score": 0.9648983302523501,
    "score_1h": 1.2581823495032145,
    "score_4h": 0.31512605042016806,
    "score_7d": 3.005917159763314,
    "extracted_entities": "Hawks - Heat - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 8,
    "entity": "via crucis 2025",
    "discover_score": 0.9502546014912407,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.39285714285714285,
    "score_7d": 2.4171597633136095,
    "extracted_entities": "Via Crucis - 2025 - Evento religioso - Cristianesimo - Tradizione",
    "saturation_score": 72.0
  },
  {
    "rank": 18,
    "entity": "neres",
    "discover_score": 0.9428062386136011,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.3970588235294118,
    "score_7d": 2.8076923076923075,
    "extracted_entities": "Calcio - Giocatore - Brasile - Ajax - Manchester United",
    "saturation_score": 201.0
  },
  {
    "rank": 16,
    "entity": "testo canzone ultimo bella davvero",
    "discover_score": 0.9222041216870784,
    "score_1h": 0.0,
    "score_4h": 0.46218487394957986,
    "score_7d": 2.665680473372781,
    "extracted_entities": "Testo - Canzone - Ultimo - Bella Davvero",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "sporting - moreirense",
    "discover_score": 0.8718238184752329,
    "score_1h": 0.0,
    "score_4h": 0.7205882352941176,
    "score_7d": 2.408284023668639,
    "extracted_entities": "Sporting - Moreirense - Calcio - Partita - Primeira Liga",
    "saturation_score": 3.0
  },
  {
    "rank": 4,
    "entity": "juventus women - milan",
    "discover_score": 0.8704868406394645,
    "score_1h": 0.0,
    "score_4h": 0.24579831932773108,
    "score_7d": 1.923076923076923,
    "extracted_entities": "Juventus Women - Milan - Calcio femminile - Serie A femminile",
    "saturation_score": 92.0
  },
  {
    "rank": 10,
    "entity": "meditazioni via crucis papa francesco",
    "discover_score": 0.8371894090276347,
    "score_1h": 2.456896551724138,
    "score_4h": 0.21638655462184875,
    "score_7d": 2.2544378698224854,
    "extracted_entities": "Meditazioni - Via Crucis - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "ciro immobile",
    "discover_score": 0.6181873976220985,
    "score_1h": 0.0,
    "score_4h": 0.3697478991596639,
    "score_7d": 1.985207100591716,
    "extracted_entities": "Ciro Immobile - Calciatore - Lazio - Serie A - Nazionale Italiana",
    "saturation_score": 5.0
  },
  {
    "rank": 24,
    "entity": "melania rea",
    "discover_score": 0.5554905050161852,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.34663865546218486,
    "score_7d": 1.6390532544378698,
    "extracted_entities": "Melania Rea - Omicidio - Giallo di Somma Vesuviana - Salvatore Parolisi - Caso di cronaca",
    "saturation_score": 68.0
  },
  {
    "rank": 6,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.5311715761541574,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.1694560669456067,
    "score_7d": 1.2041420118343196,
    "extracted_entities": "Sondaggi - Politica - Elezioni",
    "saturation_score": 4.0
  },
  {
    "rank": 9,
    "entity": "grizzlies - mavericks",
    "discover_score": 0.5288129173579293,
    "score_1h": 0.8362068965517241,
    "score_4h": 1.504201680672269,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "Grizzlies - Mavericks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 45,
    "entity": "rcb vs pbks",
    "discover_score": 0.5159231974618611,
    "score_1h": 1.293103448275862,
    "score_4h": 0.18067226890756302,
    "score_7d": 1.7218934911242605,
    "extracted_entities": "RCB - PBKS - Cricket - Indian Premier League - Partita",
    "saturation_score": 0.0
  },
  {
    "rank": 25,
    "entity": "gyokeres",
    "discover_score": 0.5136635975333177,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 1.5207100591715976,
    "extracted_entities": "Gyokeres - Calciatore - Sport - Trasferimenti - Squadra di calcio",
    "saturation_score": 4.0
  },
  {
    "rank": 38,
    "entity": "galatasaray - bodrum",
    "discover_score": 0.4827595706655704,
    "score_1h": 0.0,
    "score_4h": 0.14495798319327732,
    "score_7d": 1.5532544378698225,
    "extracted_entities": "Galatasaray - Bodrum - Calcio - Turchia",
    "saturation_score": 3.0
  },
  {
    "rank": 26,
    "entity": "testo canzone achille lauro amor",
    "discover_score": 0.4728486355206937,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.6659663865546218,
    "score_7d": 1.272189349112426,
    "extracted_entities": "Achille Lauro - Canzone - Amor",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "porto - famalicão",
    "discover_score": 0.4717689742373288,
    "score_1h": 0.0,
    "score_4h": 0.6995798319327731,
    "score_7d": 1.4171597633136095,
    "extracted_entities": "Porto - Famalicão - Calcio - Partita - Portogallo",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "olimpia milano - cremona",
    "discover_score": 0.44002165654776376,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.31512605042016806,
    "score_7d": 1.0976331360946747,
    "extracted_entities": "Olimpia Milano - Cremona - Basket - Partita - Serie A",
    "saturation_score": 3.0
  },
  {
    "rank": 21,
    "entity": "quarto grado 18 aprile",
    "discover_score": 0.3670860367212175,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.5210084033613445,
    "score_7d": 0.8698224852071006,
    "extracted_entities": "Quarto Grado - 18 aprile - Programma TV - Cronaca - Rete 4",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "giulio drago",
    "discover_score": 0.34917953324791035,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.8172268907563025,
    "score_7d": 0.7071005917159763,
    "extracted_entities": "Giulio Drago",
    "saturation_score": 25.0
  },
  {
    "rank": 39,
    "entity": "ernesto galli",
    "discover_score": 0.34696773178102164,
    "score_1h": 0.7758620689655172,
    "score_4h": 0.2773109243697479,
    "score_7d": 0.9763313609467457,
    "extracted_entities": "Ernesto Galli",
    "saturation_score": 8.0
  },
  {
    "rank": 23,
    "entity": "valentina maiolini-rothbacher",
    "discover_score": 0.24707484515719152,
    "score_1h": 2.4827586206896552,
    "score_4h": 0.6512605042016806,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "Valentina Maiolini-Rothbacher",
    "saturation_score": 1.0
  },
  {
    "rank": 30,
    "entity": "saman abbas",
    "discover_score": 0.18347343197612473,
    "score_1h": 0.0,
    "score_4h": 0.18277310924369747,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Saman Abbas - Omicidio - Pakistan - Italia - Famiglia",
    "saturation_score": 317.0
  },
  {
    "rank": 34,
    "entity": "fabrizio pregliasco",
    "discover_score": 0.15769142092131117,
    "score_1h": 0.0,
    "score_4h": 0.037815126050420166,
    "score_7d": 0.22189349112426035,
    "extracted_entities": "Fabrizio Pregliasco - Virologo - Sanità - Università degli Studi di Milano",
    "saturation_score": 4.0
  },
  {
    "rank": 33,
    "entity": "andrea conti calcio",
    "discover_score": 0.14634960087641738,
    "score_1h": 1.646551724137931,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.12721893491124261,
    "extracted_entities": "Andrea Conti - Calcio - Giocatore - Serie A - Milan",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "imane khelif",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "stazioni via crucis",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "bangladesh women vs pakistan women",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "robbie williams",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "fast food restaurant",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "carlo acutis",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "milan atalanta",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "alianza lima - chankas cyc",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "noipa emissione speciale",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "colin farrell",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "enrico lo verso",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "striscia la notizia",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "koopmeiners",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "taranto",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "stefanos tsitsipas",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "feralpisalò - pro vercelli",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "benedetta pilato",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "caldiero terme - lecco",
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
    "entity": "piena del po",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "kassandra masterchef",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "karachi kings vs quetta gladiators",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "daniela coli meloni",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "lazio - napoli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "atalanta u-23 - arzignano valchiampo",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "giana erminio - virtus verona",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "carmela fiorella",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "macron",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "klopp",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "holger rune",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "galatina",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "oroscopo oggi paolo fox scorpione",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "diodato",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "anticipi e posticipi serie a",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "luciano darderi",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "francesca mannocchi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "bon jovi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "dakota johnson",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "lumezzane",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "dani olmo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "lega pro",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "novara - trento",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "kevin bacon",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "snai",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "denzel dumfries",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "ornella vanoni",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "ipl",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "monfalcone",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "i peccatori film",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "rennes - nantes",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "arcangelo uomini e donne",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "ben shelton",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "lba",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "sofia raffaeli",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "lourdes",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "casertace",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "the passion",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "liam neeson",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "freccia del brabante 2025",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "barcelona open",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "rematch",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "val pusteria",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "الطقس غدًا",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "renate - pergolettese",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "gabriele eredità",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "erode",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "arthur fils",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "simone fontecchio",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "lulu selassie",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "francesco nardon",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "dan peterson",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "noipa arretrati",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "il mattino di padova",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "robin williams",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "vittoria puccini",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "rai 1 diretta",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "masterchef",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "crimea",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "amburgo",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "pavia",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "leonardo di caprio",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "andrea pennacchi",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "monica giandotti",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "luigi mangione",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "cucinelli",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "ivg",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "simona ventura",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "anne hathaway",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "mc donald",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "bruno vespa",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "the chosen",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "stefano massini",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "antonella clerici",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "giordana angi",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "seravezza",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "bruno barbieri",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "peschici",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "maggie smith",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "jim clark",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "conad",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "via crucis in tv",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "ancelotti esonero",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "prohodul domnului",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "serena rossi",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "svitolina",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "rosanna banfi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "30 notti con il mio ex",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "cosa c'è stasera in tv",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "pasquetta",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "bitonto",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "tallon griekspoor",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "albinoleffe",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "titanic",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "gangs of london",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "ihostage",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "fantastici 4",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "tennis barcellona",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "al-ahli saudi - al feiha",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "sporting lisbona",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "giro d'abruzzo 2025",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "rakotomanga",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "sarà curtis",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "hunziker",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "easter",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "espanyol",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ncis",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "ezio greggio",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "telesud",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "rubio",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "cricbuzz",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-19 08:14:01",
  "trends_count": 186,
  "top_score": 31.151806324684213,
  "runtime_minutes": 4.197805901368459,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi si innalza un ventaglio vibrante di tendenze che delineano futuri percorsi per chi osserva: le onde del calcio si infrangono forti con richiami all'agonismo come nei \"probabili formazioni\" (#3) e sussurrano gloria nel ricordo di antichi tornei; nella nebbia politica, \"Conte\" (#1) emerge vigoroso, simbolo di dialoghi di potere in Italia. Le suggestioni religiose, come la \"processione Venerdì Santo\" (#18), sussurrano tradizioni millenarie intrise di devozione.\n\nNell'universo di Google Discover, il trend \"probabili formazioni\" (#3) reca con sé una promessa aurea: il calcio rimane un bene rifugio di interesse stabile, con dati 1h superiori ai 7d e una saturazione gestibile (468), promettendo letture avvincenti per gli appassionati. \n\nCautela è richiesta invece ove sfolgora \"Caserta\" (#2); tendenza che, pur illuminata da un alto DScore, rischia di soccombere sotto la marea informa di una saturazione dominante (2090), intasando le rive dell'attenzione verso mete sature di parole.\n\nPer prosperare negli universi digitali di oggi, i creatori di contenuti devono bilanciare illuminazione e ombra, agendo con prontezza là dove le correnti di interesse incontrano spazi ancora liberi da congestionare. Scegliere saggiamente è l'arte del profeta."
};
