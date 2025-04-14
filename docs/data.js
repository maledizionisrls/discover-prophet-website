const trendData = [
  {
    "rank": 15,
    "entity": "the last of us",
    "discover_score": 21.49651725636944,
    "score_1h": 57.741379310344826,
    "score_4h": 46.11764705882353,
    "score_7d": 30.41715976331361,
    "extracted_entities": "The Last of Us - Videogioco - Naughty Dog - Apocalisse - Sopravvivenza",
    "saturation_score": 387.0
  },
  {
    "rank": 13,
    "entity": "intesa sanpaolo",
    "discover_score": 20.895819709331086,
    "score_1h": 28.801724137931032,
    "score_4h": 30.85924369747899,
    "score_7d": 31.73372781065089,
    "extracted_entities": "Intesa Sanpaolo - Banca - Finanza - Italia",
    "saturation_score": 284.0
  },
  {
    "rank": 1,
    "entity": "lazio - roma",
    "discover_score": 11.482872891460831,
    "score_1h": 59.5,
    "score_4h": 50.29621848739496,
    "score_7d": 3.4142011834319526,
    "extracted_entities": "Lazio - Roma - Calcio - Derby - Serie A",
    "saturation_score": 2370.0
  },
  {
    "rank": 14,
    "entity": "fideuram",
    "discover_score": 11.474408066996926,
    "score_1h": 25.370689655172413,
    "score_4h": 17.16176470588235,
    "score_7d": 20.724852071005916,
    "extracted_entities": "Fideuram - Banca - Investimenti - Servizi finanziari",
    "saturation_score": 3.0
  },
  {
    "rank": 9,
    "entity": "assegno unico aprile",
    "discover_score": 9.083006570582812,
    "score_1h": 7.448275862068965,
    "score_4h": 18.342436974789916,
    "score_7d": 14.266272189349113,
    "extracted_entities": "Assegno unico - Aprile - Pagamenti - Famiglie - INPS",
    "saturation_score": 53.0
  },
  {
    "rank": 50,
    "entity": "enel energia",
    "discover_score": 6.737290107308494,
    "score_1h": 20.137931034482758,
    "score_4h": 5.285714285714286,
    "score_7d": 19.40532544378698,
    "extracted_entities": "Enel - Energia - Fornitura elettrica - Azienda energetica",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "allerta precipitazioni",
    "discover_score": 4.8289548844029895,
    "score_1h": 53.8448275862069,
    "score_4h": 35.70378151260504,
    "score_7d": 5.594674556213018,
    "extracted_entities": "Allerta - Precipitazioni - Meteo - Previsioni",
    "saturation_score": 2.0
  },
  {
    "rank": 2,
    "entity": "alexander zverev",
    "discover_score": 3.8876714149734886,
    "score_1h": 38.61206896551724,
    "score_4h": 17.573529411764707,
    "score_7d": 2.760355029585799,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour",
    "saturation_score": 3.0
  },
  {
    "rank": 27,
    "entity": "bill gates",
    "discover_score": 3.3695305395428248,
    "score_1h": 8.508620689655173,
    "score_4h": 2.1701680672268906,
    "score_7d": 9.692307692307693,
    "extracted_entities": "Bill Gates - Microsoft - Filantropia - Tecnologia",
    "saturation_score": 3.0
  },
  {
    "rank": 3,
    "entity": "mario vargas llosa",
    "discover_score": 3.323124937802346,
    "score_1h": 1.6724137931034484,
    "score_4h": 8.081932773109244,
    "score_7d": 4.449704142011834,
    "extracted_entities": "Mario Vargas Llosa - Scrittore - Letteratura - Premio Nobel",
    "saturation_score": 967.0
  },
  {
    "rank": 5,
    "entity": "jorge martin",
    "discover_score": 3.0288848540841475,
    "score_1h": 2.1724137931034484,
    "score_4h": 1.588235294117647,
    "score_7d": 6.266272189349113,
    "extracted_entities": "Jorge Martin - MotoGP - Pilota motociclistico",
    "saturation_score": 222.0
  },
  {
    "rank": 7,
    "entity": "atp monaco di baviera",
    "discover_score": 2.9186343127683534,
    "score_1h": 24.025862068965516,
    "score_4h": 19.23739495798319,
    "score_7d": 2.4852071005917162,
    "extracted_entities": "ATP - Monaco di Baviera - Tennis - Torneo",
    "saturation_score": 7.0
  },
  {
    "rank": 37,
    "entity": "motogp classifica",
    "discover_score": 2.3804714422331212,
    "score_1h": 2.4827586206896552,
    "score_4h": 3.1449579831932777,
    "score_7d": 7.097633136094674,
    "extracted_entities": "MotoGP - Classifica - Campionato Mondiale - Piloti - Squadre",
    "saturation_score": 2.0
  },
  {
    "rank": 35,
    "entity": "f1 classifica",
    "discover_score": 1.9859949556227452,
    "score_1h": 0.23275862068965517,
    "score_4h": 1.2668067226890756,
    "score_7d": 6.337278106508876,
    "extracted_entities": "Formula 1 - Classifica - Campionato - Piloti - Costruttori",
    "saturation_score": 2.0
  },
  {
    "rank": 6,
    "entity": "blue origin",
    "discover_score": 1.7362728040697435,
    "score_1h": 3.7155172413793105,
    "score_4h": 15.892857142857142,
    "score_7d": 0.7840236686390532,
    "extracted_entities": "Blue Origin - Spazio - Viaggi spaziali - Jeff Bezos",
    "saturation_score": 213.0
  },
  {
    "rank": 30,
    "entity": "matteo arnaldi",
    "discover_score": 1.3591028772539884,
    "score_1h": 2.0517241379310347,
    "score_4h": 15.86344537815126,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Matteo Arnaldi - Tennis - Giocatore",
    "saturation_score": 22.0
  },
  {
    "rank": 31,
    "entity": "miriam leone",
    "discover_score": 1.0248062465180867,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.12605042016806722,
    "score_7d": 3.4467455621301775,
    "extracted_entities": "Miriam Leone - Attrice - Italia - Cinema - Televisione",
    "saturation_score": 67.0
  },
  {
    "rank": 21,
    "entity": "ben shelton",
    "discover_score": 0.9783166302283449,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.9642857142857143,
    "score_7d": 2.846153846153846,
    "extracted_entities": "Ben Shelton - Tennis - Giocatore",
    "saturation_score": 5.0
  },
  {
    "rank": 11,
    "entity": "ministra calderone laurea",
    "discover_score": 0.9101610016709398,
    "score_1h": 10.724137931034484,
    "score_4h": 3.783613445378151,
    "score_7d": 1.5857988165680474,
    "extracted_entities": "Ministra Calderone - Laurea",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "miccoli",
    "discover_score": 0.8843651611245065,
    "score_1h": 5.0344827586206895,
    "score_4h": 4.063025210084033,
    "score_7d": 1.3106508875739644,
    "extracted_entities": "Fabrizio Miccoli - Calcio - Palermo - Lecce - Juventus",
    "saturation_score": 2.0
  },
  {
    "rank": 44,
    "entity": "trail blazers - lakers",
    "discover_score": 0.8635327488223938,
    "score_1h": 1.6724137931034482,
    "score_4h": 0.07773109243697479,
    "score_7d": 3.07396449704142,
    "extracted_entities": "Trail Blazers - Lakers - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "floriana calcagno",
    "discover_score": 0.7974923705453238,
    "score_1h": 0.9482758620689655,
    "score_4h": 1.5672268907563025,
    "score_7d": 1.7810650887573964,
    "extracted_entities": "Floriana Calcagno",
    "saturation_score": 82.0
  },
  {
    "rank": 43,
    "entity": "rory mcilroy",
    "discover_score": 0.7835257413419,
    "score_1h": 1.4741379310344827,
    "score_4h": 0.7100840336134454,
    "score_7d": 2.5887573964497044,
    "extracted_entities": "Rory McIlroy - Golf - PGA Tour - Irlanda del Nord - Major Championships",
    "saturation_score": 90.0
  },
  {
    "rank": 40,
    "entity": "avellino - monopoli",
    "discover_score": 0.756021733550621,
    "score_1h": 0.896551724137931,
    "score_4h": 0.2542016806722689,
    "score_7d": 2.5828402366863905,
    "extracted_entities": "Avellino - Monopoli - Calcio - Partita - Serie C",
    "saturation_score": 106.0
  },
  {
    "rank": 47,
    "entity": "partita roma oggi",
    "discover_score": 0.7247293425973714,
    "score_1h": 0.0,
    "score_4h": 0.11554621848739496,
    "score_7d": 2.5710059171597637,
    "extracted_entities": "Partita - Roma - Oggi - Calcio - Serie A",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "luca barbareschi",
    "discover_score": 0.7222151437544441,
    "score_1h": 1.6724137931034482,
    "score_4h": 3.8802521008403366,
    "score_7d": 1.4201183431952664,
    "extracted_entities": "Luca Barbareschi - Attore - Regista - Produttore",
    "saturation_score": 48.0
  },
  {
    "rank": 17,
    "entity": "giovanna mazzocchi",
    "discover_score": 0.7200432299447339,
    "score_1h": 0.0,
    "score_4h": 0.47478991596638653,
    "score_7d": 2.0473372781065087,
    "extracted_entities": "Giovanna Mazzocchi",
    "saturation_score": 3.0
  },
  {
    "rank": 33,
    "entity": "roma lazio derby oggi",
    "discover_score": 0.6720676536613603,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13025210084033614,
    "score_7d": 2.230769230769231,
    "extracted_entities": "Roma - Lazio - Derby - Oggi",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "costanza fiction seconda stagione",
    "discover_score": 0.6512122677695956,
    "score_1h": 1.0603448275862069,
    "score_4h": 0.48739495798319327,
    "score_7d": 2.1331360946745566,
    "extracted_entities": "Costanza - Fiction - Seconda stagione",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "michael schumacher",
    "discover_score": 0.6326780288595436,
    "score_1h": 3.8879310344827585,
    "score_4h": 1.75,
    "score_7d": 1.3994082840236686,
    "extracted_entities": "Michael Schumacher - Formula 1 - Pilota automobilistico - Ferrari - Campione del mondo",
    "saturation_score": 10.0
  },
  {
    "rank": 18,
    "entity": "lsg vs csk",
    "discover_score": 0.5536217063735894,
    "score_1h": 5.008620689655173,
    "score_4h": 5.420168067226891,
    "score_7d": 0.3402366863905325,
    "extracted_entities": "LSG - CSK - Indian Premier League - Cricket - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "atletico bilbao - rayo vallecano",
    "discover_score": 0.5257523773371815,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.5882352941176471,
    "score_7d": 1.6272189349112427,
    "extracted_entities": "Athletic Bilbao - Rayo Vallecano - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "morto mario vargas llosa",
    "discover_score": 0.48785853272808904,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7100840336134454,
    "score_7d": 1.4023668639053253,
    "extracted_entities": "Mario Vargas Llosa - Morte - Scrittore",
    "saturation_score": 94.0
  },
  {
    "rank": 19,
    "entity": "holger rune",
    "discover_score": 0.46192181212199707,
    "score_1h": 2.4655172413793105,
    "score_4h": 1.8361344537815127,
    "score_7d": 0.849112426035503,
    "extracted_entities": "Holger Rune - Tennis - Giocatore - ATP - Danimarca",
    "saturation_score": 3.0
  },
  {
    "rank": 12,
    "entity": "harry potter cast",
    "discover_score": 0.43598752514413697,
    "score_1h": 7.9655172413793105,
    "score_4h": 1.4411764705882353,
    "score_7d": 0.757396449704142,
    "extracted_entities": "Harry Potter - Cast - Film - Attori - J.K. Rowling",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "jankulovski",
    "discover_score": 0.43246829435639766,
    "score_1h": 7.405172413793103,
    "score_4h": 1.71218487394958,
    "score_7d": 0.8284023668639053,
    "extracted_entities": "Marek Jankulovski - Calcio - Repubblica Ceca - Milan - Napoli",
    "saturation_score": 3.0
  },
  {
    "rank": 48,
    "entity": "annamaria franzoni",
    "discover_score": 0.427952523774444,
    "score_1h": 0.0,
    "score_4h": 0.17016806722689076,
    "score_7d": 1.3846153846153846,
    "extracted_entities": "Annamaria Franzoni - Cogne - Omicidio - Processo",
    "saturation_score": 5.0
  },
  {
    "rank": 4,
    "entity": "whoopi goldberg",
    "discover_score": 0.37896924920925756,
    "score_1h": 2.336206896551724,
    "score_4h": 0.9684873949579833,
    "score_7d": 0.48520710059171596,
    "extracted_entities": "Whoopi Goldberg - Attrice - Comica - The View - Sister Act",
    "saturation_score": 76.0
  },
  {
    "rank": 38,
    "entity": "audace cerignola - benevento",
    "discover_score": 0.3766440775047304,
    "score_1h": 0.0,
    "score_4h": 0.13025210084033614,
    "score_7d": 1.1331360946745563,
    "extracted_entities": "Audace Cerignola - Benevento - Calcio - Partita - Serie C",
    "saturation_score": 48.0
  },
  {
    "rank": 26,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.3673671245437695,
    "score_1h": 2.732758620689655,
    "score_4h": 0.9054621848739496,
    "score_7d": 0.8106508875739644,
    "extracted_entities": "Islamabad United - Peshawar Zalmi - Partita di cricket - Pakistan Super League - Squadre di cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "maxi lopez",
    "discover_score": 0.36135955237505546,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.5714285714285714,
    "score_7d": 1.0,
    "extracted_entities": "Maxi Lopez - Calciatore - Argentina - Sport - Serie A",
    "saturation_score": 4.0
  },
  {
    "rank": 45,
    "entity": "elezioni presidenziali ecuador",
    "discover_score": 0.3306530972035718,
    "score_1h": 0.0,
    "score_4h": 0.06302521008403361,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Elezioni - Presidenziali - Ecuador",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "antonella viola",
    "discover_score": 0.2792382081178622,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.3340336134453782,
    "score_7d": 0.5798816568047337,
    "extracted_entities": "Antonella Viola - Immunologia - Ricerca scientifica - Università di Padova - Divulgazione scientifica",
    "saturation_score": 44.0
  },
  {
    "rank": 25,
    "entity": "cast ufficiale harry potter",
    "discover_score": 0.2776339892490124,
    "score_1h": 5.767241379310345,
    "score_4h": 2.321428571428571,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Cast - Harry Potter - Film - Attori",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "nicky katt",
    "discover_score": 0.27360242364968584,
    "score_1h": 0.0,
    "score_4h": 0.6932773109243697,
    "score_7d": 0.47928994082840237,
    "extracted_entities": "Nicky Katt - Attore - Filmografia - Carriera",
    "saturation_score": 53.0
  },
  {
    "rank": 46,
    "entity": "thomas commisso",
    "discover_score": 0.2462397747845193,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5525210084033614,
    "score_7d": 0.5029585798816568,
    "extracted_entities": "Thomas Commisso",
    "saturation_score": 88.0
  },
  {
    "rank": 29,
    "entity": "corsi indire sostegno",
    "discover_score": 0.2450300626999584,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.5462184873949579,
    "score_7d": 0.44082840236686394,
    "extracted_entities": "Corsi - Indire - Sostegno - Formazione - Educazione",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "pensioni aumenti 2026",
    "discover_score": 0.22126939140546803,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6050420168067226,
    "score_7d": 0.3047337278106509,
    "extracted_entities": "Pensioni - Aumenti - 2026",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "dicastero per il clero",
    "discover_score": 0.18855916263974337,
    "score_1h": 0.0,
    "score_4h": 0.4012605042016807,
    "score_7d": 0.2751479289940828,
    "extracted_entities": "Dicastero per il Clero - Vaticano - Chiesa Cattolica",
    "saturation_score": 9.0
  },
  {
    "rank": 28,
    "entity": "shaik rasheed",
    "discover_score": 0.18797947382007657,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.0,
    "score_7d": 0.3431952662721893,
    "extracted_entities": "Shaik Rasheed - Cricket - India",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "tirrenia",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "enel",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "gianni morandi",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "sassuolo",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "warriors - clippers",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "lucia bronzetti",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "atp barcellona 2025",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "buon lunedi 14 aprile",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "le iene presentano inside stasera",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "settimana santa",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "tallon griekspoor",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "monica giandotti",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "florenzi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "leopoldo mastelloni",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "mario vargas llosa nobel",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "lorenza mario ne vedremo delle belle",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "tv8",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "bonus nuovi nati 2025",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "marcello foa",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "chicago fire - inter miami",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "russell",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "rockets - nuggets",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "meteo roma",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "giusy meloni",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "auxerre - lione",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "fiera milano",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "cecilia rodriguez",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "lazio vs roma",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "funeral director",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "u craiova - fcsb",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "anita bottazzo",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "dybala",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "gianni letta",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "neffa",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "ministero della giustizia",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "mcdonald's",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "ferragni",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "notre dame in fiamme",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "pallacanestro forlì 2.015 - fortitudo bologna",
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
    "entity": "mazzocchi",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "rakotomanga",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "rsu",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "الطقس",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "crepet",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "ps5",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "byd",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "giuseppe carrisi",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "britney spears",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "provedel",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "black mirror 7",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "bucks - pistons",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "run",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "notre dame",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "penalità russell",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "roberta bruzzone",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "serie c girone c",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "ledesma",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "alessandro sallusti",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "pedro",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "cremona - trento",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "ghost",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "valentino rossi",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "sumy ucraina",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "nick moran",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "bruzzone",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "como torino partita",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "lorenzo pellegrini",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "cristina d'avena",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "torino",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "matteo lancini",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "claudia koll",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "okoli",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "benfica",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "apu rimini",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "virginia sanjust",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "athletic bilbao",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "universitario - melgar",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "luca guadagnino",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "nba classifica",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "caorle",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "potenza calcio",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "franco morbidelli",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "pedro lazio",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "la luna piena",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "nba",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "burioni",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "maratea",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "ranieri",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "paolantoni",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "verona",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "baldanzi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "grizzlies - mavericks",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "pixel 9a",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "fuochi d'artificio serie tv",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "bronny james",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "bolivia",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "law and order",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "volterra",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "john travolta",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "spinazzola",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "sergi roberto",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "adriano panatta",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "vallecorsa",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "saipem azioni",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "veltroni",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "walter veltroni",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "rocco commisso",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "gardaland",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "joselu",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "golden state warriors",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "il giardiniere",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "elton john",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "eraldo pecci",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "aeronautica militare meteo",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "calendario f1",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "shut in film",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "romanews",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "gigot",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "الطقس غدًا",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "erba",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "cook",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "julia roberts",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "elecciones ecuador 2025",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "buona settimana santa 2025",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ashutosh sharma",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "alex martin",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "decreto sicurezza gazzetta ufficiale",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "castellanos",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "warriors",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "nubbin",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "michele bravi",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "paolo barilla",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "programmi tv 13 aprile 2025",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "irlanda",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "iginio massari",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "nba standings",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "calendario lazio",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "meteo roma oggi",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "vicky piria",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "cottarelli",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "california",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "pieraccioni",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "podcast",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "thunderbolts",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "gerry scotti",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "calendario roma",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "karn sharma",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "mantova",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "paris hilton",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "napoli empoli formazioni",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "marusic",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "referendum 2025",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "mls",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "f1 standings",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "fia",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "jeff goldblum",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "robin williams",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "giordania",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "zarco",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "alessia gazzola",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "as roma news",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "piacenza trento volley",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "gsw",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "shomurodov",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "inter miami",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 223,
    "entity": "calendario juve",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 224,
    "entity": "el shaarawy",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 225,
    "entity": "haras el hodood - zamalek",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 226,
    "entity": "rishad hossain",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 227,
    "entity": "luciana littizzetto",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 228,
    "entity": "f1 russell",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 229,
    "entity": "orvieto",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 230,
    "entity": "tijjani reijnders",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-14 16:46:42",
  "trends_count": 230,
  "top_score": 21.49651725636944,
  "runtime_minutes": 4.434443640708923,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle nebbie dei dati, si delineano i temi che attraggono oggi gli sguardi degli italiani: lo sport esplode in scene di verde e stadi tumultuosi con match come 'lazio - roma', ma anche i campi da tennis rivelano un'attrazione crescente per eventi e personaggi come Alexander Zverev e Holger Rune. Al contempo, l'ombra affascinante e intricata dei titani tecnologici e filantropici si manifesta attraverso figure iconiche come Bill Gates.\n\nTra le opportunità che si schiudono a Google Discover, 'The Last of Us' emerge come un faro profetico (#1), delineando un percorso di sopravvivenza e intrecci apocalittici che catturano l'immaginazione senza essere sovrasaturato (Sat: 387). Allerta anche sulle meteo precipitose (#7) che oltrepassano le previsioni usuali con il loro punteggio sorprendentemente basso di saturazione.\n\nIn questo scenario profetico, emerge la necessità di cautela sotto il cielo calcistico di 'lazio - roma' (#3), la cui saturazione opprimente racconta di un'attenzione già sovrabbondantemente scolpita nelle menti. Chi crea contenuti deve cavalcare con prudenza le onde dell'aldilà tennistico e i miti del videogioco, evitando le tempeste già afferrate dall'oblio della concorrenza."
};
