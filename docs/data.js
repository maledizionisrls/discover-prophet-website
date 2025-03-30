const trendData = [
  {
    "rank": 1,
    "entity": "inter - udinese",
    "discover_score": 15.854944456487642,
    "score_1h": 70.20689655172413,
    "score_4h": 33.39915966386555,
    "score_7d": 1.6242603550295858,
    "extracted_entities": "Inter - Udinese - Serie A - Calcio - Partita"
  },
  {
    "rank": 2,
    "entity": "fiorentina - atalanta",
    "discover_score": 11.931824247881408,
    "score_1h": 56.88632378725892,
    "score_4h": 31.491596638655462,
    "score_7d": 1.7100591715976332,
    "extracted_entities": "Fiorentina - Atalanta - Calcio - Serie A - Partita"
  },
  {
    "rank": 3,
    "entity": "cagliari - monza",
    "discover_score": 8.240801728557855,
    "score_1h": 18.948275862068964,
    "score_4h": 23.310924369747898,
    "score_7d": 1.8609467455621302,
    "extracted_entities": "Cagliari - Monza - Calcio - Serie A - Partita"
  },
  {
    "rank": 6,
    "entity": "richard chamberlain",
    "discover_score": 7.163488010890556,
    "score_1h": 37.922413793103445,
    "score_4h": 28.364772687317604,
    "score_7d": 1.1834319526627217,
    "extracted_entities": "Richard Chamberlain - Attore - Film - Televisione - Hollywood"
  },
  {
    "rank": 5,
    "entity": "salernitana - palermo",
    "discover_score": 5.9318145378750256,
    "score_1h": 42.201782583284626,
    "score_4h": 21.852941176470587,
    "score_7d": 1.2189349112426036,
    "extracted_entities": "Salernitana - Palermo - Calcio - Serie B - Partita"
  },
  {
    "rank": 33,
    "entity": "manchester city",
    "discover_score": 4.828130388053128,
    "score_1h": 49.225452951490354,
    "score_4h": 22.554621848739494,
    "score_7d": 2.2662721893491122,
    "extracted_entities": "Manchester City - Calcio - Premier League - Squadra di calcio - Inghilterra"
  },
  {
    "rank": 7,
    "entity": "barcellona - girona",
    "discover_score": 4.556651018274463,
    "score_1h": 45.463033313851554,
    "score_4h": 15.264705882352942,
    "score_7d": 1.890532544378698,
    "extracted_entities": "Barcellona - Girona - Viaggio - Turismo - Spagna"
  },
  {
    "rank": 11,
    "entity": "carrarese - bari",
    "discover_score": 4.368787551225443,
    "score_1h": 8.833869082407947,
    "score_4h": 15.653361344537817,
    "score_7d": 2.1568047337278107,
    "extracted_entities": "Carrarese - Bari - Calcio - Serie C - Partita"
  },
  {
    "rank": 9,
    "entity": "afc bournemouth - manchester city",
    "discover_score": 3.5909563811947485,
    "score_1h": 42.72647574517826,
    "score_4h": 15.852941176470587,
    "score_7d": 0.8757396449704142,
    "extracted_entities": "AFC Bournemouth - Manchester City - Partita di calcio - Premier League"
  },
  {
    "rank": 42,
    "entity": "coppa italia",
    "discover_score": 3.087426968414028,
    "score_1h": 17.877556984219755,
    "score_4h": 5.1386554621848735,
    "score_7d": 7.526627218934911,
    "extracted_entities": "Coppa Italia - Calcio - Competizione - Italia - Torneo"
  },
  {
    "rank": 27,
    "entity": "trapani - catania",
    "discover_score": 2.932323640121751,
    "score_1h": 1.5948275862068966,
    "score_4h": 13.663865546218489,
    "score_7d": 1.526627218934911,
    "extracted_entities": "Trapani - Catania - Sicilia - Viaggio - Trasporti"
  },
  {
    "rank": 21,
    "entity": "avellino benevento",
    "discover_score": 2.7347469695705575,
    "score_1h": 24.54310344827586,
    "score_4h": 10.0609243697479,
    "score_7d": 2.298816568047337,
    "extracted_entities": "Avellino - Benevento - Calcio - Derby - Campania"
  },
  {
    "rank": 31,
    "entity": "pro vercelli - vicenza",
    "discover_score": 2.572302209346968,
    "score_1h": 0.2288135593220339,
    "score_4h": 14.747899159663866,
    "score_7d": 0.6834319526627219,
    "extracted_entities": "Pro Vercelli - Vicenza - Partita di calcio - Serie C - Risultati"
  },
  {
    "rank": 30,
    "entity": "fa cup",
    "discover_score": 2.4657506952554935,
    "score_1h": 17.775862068965516,
    "score_4h": 5.848739495798319,
    "score_7d": 4.485207100591716,
    "extracted_entities": "FA Cup - Calcio - Inghilterra - Torneo - Squadre"
  },
  {
    "rank": 12,
    "entity": "feyenoord - go ahead eagles",
    "discover_score": 2.4191783662077935,
    "score_1h": 4.379310344827586,
    "score_4h": 11.077731092436974,
    "score_7d": 0.7869822485207101,
    "extracted_entities": "Feyenoord - Go Ahead Eagles - Partita di calcio - Eredivisie"
  },
  {
    "rank": 16,
    "entity": "roberto vecchioni",
    "discover_score": 2.1525759670548847,
    "score_1h": 0.5086206896551724,
    "score_4h": 8.67016806722689,
    "score_7d": 1.3461538461538463,
    "extracted_entities": "Roberto Vecchioni - Cantautore - Musica Italiana"
  },
  {
    "rank": 4,
    "entity": "lecce - roma",
    "discover_score": 2.0054830858975334,
    "score_1h": 1.5775862068965518,
    "score_4h": 1.9621848739495797,
    "score_7d": 3.0502958579881656,
    "extracted_entities": "Lecce - Roma - Calcio - Serie A - Partita"
  },
  {
    "rank": 28,
    "entity": "tonga terremoto",
    "discover_score": 1.982828341776145,
    "score_1h": 0.19696084161309177,
    "score_4h": 10.739495798319329,
    "score_7d": 0.6952662721893491,
    "extracted_entities": "Tonga - Terremoto - Evento sismico"
  },
  {
    "rank": 47,
    "entity": "atalanta oggi",
    "discover_score": 1.871931298524156,
    "score_1h": 1.0517241379310345,
    "score_4h": 10.762605042016807,
    "score_7d": 0.7721893491124261,
    "extracted_entities": "Atalanta - Partita - Serie A - Calcio"
  },
  {
    "rank": 15,
    "entity": "drone russo lago maggiore",
    "discover_score": 1.5123301197370502,
    "score_1h": 5.0344827586206895,
    "score_4h": 6.321428571428571,
    "score_7d": 0.8905325443786982,
    "extracted_entities": "Drone - Russia - Lago Maggiore"
  },
  {
    "rank": 23,
    "entity": "potenza - giugliano",
    "discover_score": 1.4088790178295207,
    "score_1h": 15.724137931034484,
    "score_4h": 6.806722689075631,
    "score_7d": 0.7159763313609467,
    "extracted_entities": "Potenza - Giugliano - Città - Confronto"
  },
  {
    "rank": 19,
    "entity": "cesena - juve stabia",
    "discover_score": 1.35244125485064,
    "score_1h": 0.0,
    "score_4h": 6.418067226890756,
    "score_7d": 0.6390532544378699,
    "extracted_entities": "Cesena - Juve Stabia - Calcio - Partita - Serie C"
  },
  {
    "rank": 13,
    "entity": "tonga",
    "discover_score": 1.268957558506568,
    "score_1h": 8.568965517241379,
    "score_4h": 3.5735294117647056,
    "score_7d": 1.5177514792899407,
    "extracted_entities": "Tonga - Oceano Pacifico - Regno di Tonga - Isola - Polinesia"
  },
  {
    "rank": 17,
    "entity": "costanza fiction",
    "discover_score": 1.203729012962512,
    "score_1h": 9.905172413793103,
    "score_4h": 2.6533613445378155,
    "score_7d": 2.0857988165680474,
    "extracted_entities": "Costanza - Fiction - Serie TV"
  },
  {
    "rank": 26,
    "entity": "barbara bouchet",
    "discover_score": 1.166765539875635,
    "score_1h": 0.9224137931034482,
    "score_4h": 5.371848739495798,
    "score_7d": 0.7633136094674556,
    "extracted_entities": "Barbara Bouchet - Attrice - Cinema - Televisione"
  },
  {
    "rank": 44,
    "entity": "federica pellegrini",
    "discover_score": 1.0375604086468027,
    "score_1h": 3.9224137931034484,
    "score_4h": 3.4411764705882355,
    "score_7d": 1.6923076923076925,
    "extracted_entities": "Federica Pellegrini - Nuoto - Olimpiadi - Record - Italia"
  },
  {
    "rank": 20,
    "entity": "guenda goria",
    "discover_score": 1.0273616150329368,
    "score_1h": 2.618497954412624,
    "score_4h": 5.060924369747899,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Guenda Goria - Personaggio pubblico - Televisione - Reality show"
  },
  {
    "rank": 37,
    "entity": "motogp oggi orari",
    "discover_score": 1.0155553900095269,
    "score_1h": 4.1009643483343075,
    "score_4h": 0.6722689075630252,
    "score_7d": 3.4615384615384617,
    "extracted_entities": "MotoGP - Oggi - Orari"
  },
  {
    "rank": 8,
    "entity": "real madrid - leganés",
    "discover_score": 0.9434283454561394,
    "score_1h": 0.1724137931034483,
    "score_4h": 0.47268907563025214,
    "score_7d": 2.2544378698224854,
    "extracted_entities": "Real Madrid - Leganés - Calcio - Partita - Liga Spagnola"
  },
  {
    "rank": 43,
    "entity": "audace cerignola - monopoli",
    "discover_score": 0.9115291983288009,
    "score_1h": 0.4396551724137931,
    "score_4h": 4.348739495798319,
    "score_7d": 0.7248520710059172,
    "extracted_entities": "Audace Cerignola - Monopoli - Calcio - Serie C - Partita"
  },
  {
    "rank": 40,
    "entity": "psv eindhoven - ajax",
    "discover_score": 0.6865851638152216,
    "score_1h": 0.15517241379310345,
    "score_4h": 1.6050420168067228,
    "score_7d": 1.4763313609467454,
    "extracted_entities": "PSV Eindhoven - Ajax - Eredivisie - Calcio - Rivalità"
  },
  {
    "rank": 29,
    "entity": "prandelli",
    "discover_score": 0.662276692938306,
    "score_1h": 1.146551724137931,
    "score_4h": 2.957983193277311,
    "score_7d": 0.4556213017751479,
    "extracted_entities": "Cesare Prandelli - Allenatore di calcio - Italia - Fiorentina - Nazionale italiana di calcio"
  },
  {
    "rank": 22,
    "entity": "ettore bassi",
    "discover_score": 0.6307277911469471,
    "score_1h": 5.018556399766219,
    "score_4h": 2.9936974789915967,
    "score_7d": 0.2781065088757397,
    "extracted_entities": "Ettore Bassi - Attore - Televisione - Cinema - Italia"
  },
  {
    "rank": 50,
    "entity": "solet",
    "discover_score": 0.5432759959348373,
    "score_1h": 5.903565166569258,
    "score_4h": 1.157563025210084,
    "score_7d": 1.2692307692307692,
    "extracted_entities": "Solet - Energia solare - Fotovoltaico - Rinnovabili"
  },
  {
    "rank": 18,
    "entity": "arianna manfredini",
    "discover_score": 0.5306323070430888,
    "score_1h": 0.853448275862069,
    "score_4h": 1.0420168067226891,
    "score_7d": 0.9201183431952662,
    "extracted_entities": "Arianna Manfredini"
  },
  {
    "rank": 49,
    "entity": "ginevra",
    "discover_score": 0.47936030166253096,
    "score_1h": 13.022501461133839,
    "score_4h": 2.3655462184873945,
    "score_7d": 0.27218934911242604,
    "extracted_entities": "Ginevra - Svizzera - Città - Lago di Ginevra - ONU"
  },
  {
    "rank": 34,
    "entity": "gand wevelgem 2025",
    "discover_score": 0.4232047315963403,
    "score_1h": 2.086206896551724,
    "score_4h": 0.9204493512886326,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Gand-Wevelgem - 2025 - Ciclismo - Gara - Belgio"
  },
  {
    "rank": 14,
    "entity": "spal - legnago",
    "discover_score": 0.39112002466986306,
    "score_1h": 16.44126241963764,
    "score_4h": 1.0840336134453783,
    "score_7d": 0.3343195266272189,
    "extracted_entities": "SPAL - Legnago - Calcio - Partita - Serie C"
  },
  {
    "rank": 32,
    "entity": "ludmilla radchenko",
    "discover_score": 0.34745420473219557,
    "score_1h": 0.2413793103448276,
    "score_4h": 0.15966386554621848,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "Ludmilla Radchenko"
  },
  {
    "rank": 10,
    "entity": "richard chamberlain uccelli di rovo",
    "discover_score": 0.31551852530902746,
    "score_1h": 38.241379310344826,
    "score_4h": 0.8340336134453781,
    "score_7d": 0.16568047337278105,
    "extracted_entities": "Richard Chamberlain - Uccelli di rovo - Serie TV"
  },
  {
    "rank": 38,
    "entity": "rr vs csk",
    "discover_score": 0.30456701879575204,
    "score_1h": 0.9741379310344828,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.5828402366863906,
    "extracted_entities": "RR - CSK - Cricket - Indian Premier League - Partita"
  },
  {
    "rank": 36,
    "entity": "tagikistan",
    "discover_score": 0.3033731789485803,
    "score_1h": 9.89655172413793,
    "score_4h": 0.6134453781512605,
    "score_7d": 0.46745562130177515,
    "extracted_entities": "Tagikistan - Asia Centrale - Dushanbe - Montagne del Pamir - Fiume Amu Darya"
  },
  {
    "rank": 35,
    "entity": "borussia dortmund - mainz",
    "discover_score": 0.2609477627424814,
    "score_1h": 2.8275862068965516,
    "score_4h": 0.43907563025210083,
    "score_7d": 0.38461538461538464,
    "extracted_entities": "Borussia Dortmund - Mainz - Partita di calcio - Bundesliga"
  },
  {
    "rank": 24,
    "entity": "barcelona vs girona",
    "discover_score": 0.2253197716576664,
    "score_1h": 1.4624488603156047,
    "score_4h": 0.3956524032207025,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Barcelona - Girona - Partita di calcio - La Liga"
  },
  {
    "rank": 39,
    "entity": "loftus cheek",
    "discover_score": 0.20026603188148787,
    "score_1h": 0.4396551724137931,
    "score_4h": 0.36554621848739494,
    "score_7d": 0.1715976331360947,
    "extracted_entities": "Loftus-Cheek - Calciatore - Chelsea - Premier League - Inghilterra"
  },
  {
    "rank": 46,
    "entity": "isar aerospace spectrum",
    "discover_score": 0.16420890099928123,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.06932773109243698,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Isar Aerospace - Spectrum - Lanciatori spaziali - Tecnologia aerospaziale - Startup"
  },
  {
    "rank": 25,
    "entity": "napoli milan dove vederla",
    "discover_score": 0.16404279101265987,
    "score_1h": 1.9051724137931034,
    "score_4h": 0.08823529411764706,
    "score_7d": 0.12721893491124261,
    "extracted_entities": "Napoli - Milan - Partita - Dove vederla"
  },
  {
    "rank": 45,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.15864496203350986,
    "score_1h": 0.3898305084745763,
    "score_4h": 0.16176470588235295,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience"
  },
  {
    "rank": 41,
    "entity": "donald trump groenlandia",
    "discover_score": 0.14830016626994,
    "score_1h": 0.3389830508474576,
    "score_4h": 0.19499138567560914,
    "score_7d": 0.044378698224852076,
    "extracted_entities": "Donald Trump - Groenlandia - Acquisto - Politica internazionale"
  },
  {
    "rank": 48,
    "entity": "football club internazionale milano",
    "discover_score": 0.14776872626546983,
    "score_1h": 0.31575102279368794,
    "score_4h": 0.02100840336134454,
    "score_7d": 0.15384615384615385,
    "extracted_entities": "Football Club Internazionale Milano - Calcio - Serie A - Inter - Milano"
  },
  {
    "rank": 51,
    "entity": "djokovic oggi",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "udine - fortitudo bologna",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "lucchese ternana",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "terremoto thailandia morti",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "patty pravo",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "eliminato amici",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "marco liorni",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "lazio torino",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "dinamo bucurești - fcsb",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "nunzia de girolamo",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "trento - brescia",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "varese - scafati",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "calendario inter",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "vl pesaro - libertas livorno",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "atalanta u-23 - padova",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "taremi",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "estoril praia - porto",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "lampedusa",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "frascati",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "davide frattesi",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "virtus verona - pro patria",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "mkhitaryan",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "danimarca groenlandia trump",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "valencia - mallorca",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "cremona - universo treviso",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "ramadan",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "trento - albinoleffe",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "roby facchinetti",
    "discover_score": 0.10660790403530267,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "ora",
    "discover_score": 0.10646514650027929,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "paola minaccioni",
    "discover_score": 0.10632453699023645,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "eleonora cecere",
    "discover_score": 0.10618601677886443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "athletic bilbao osasuna",
    "discover_score": 0.10604952944488055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "lewandowski",
    "discover_score": 0.10591502075484019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "بورنموث ضد مان سيتي",
    "discover_score": 0.10578243855322951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "inter bayern monaco",
    "discover_score": 0.10565173265930743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "reggina vibonese",
    "discover_score": 0.10552285477020852,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "picierno",
    "discover_score": 0.10539575836985944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "emanuel lo",
    "discover_score": 0.10527039864329803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "solet udinese",
    "discover_score": 0.10514673239601775,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "ascoli - vis pesaro",
    "discover_score": 0.10502471797798994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "licata siracusa",
    "discover_score": 0.10490431521204421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "darderi",
    "discover_score": 0.10478548532631286,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "lorenzo lucca",
    "discover_score": 0.10466819089046668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "formula 1 gp giappone",
    "discover_score": 0.10455239575549213,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "rudy zerbi",
    "discover_score": 0.10443806499677748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "groenlandia trump",
    "discover_score": 0.10432516486029392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "club brugge - anderlecht",
    "discover_score": 0.1042136627116727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "grizzlies - lakers",
    "discover_score": 0.10410352698799526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "di marco",
    "discover_score": 0.10399472715212489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "srh vs dc",
    "discover_score": 0.10388723364942297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "gosens",
    "discover_score": 0.10378101786670191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "tim poste italiane",
    "discover_score": 0.1036760520932791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 0.1035723094840047,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "yungblud",
    "discover_score": 0.10346976402414519,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "michelle hunziker",
    "discover_score": 0.10336839049601293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "real madrid",
    "discover_score": 0.10326816444723902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "superbike oggi",
    "discover_score": 0.10316906216059425,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "gullit",
    "discover_score": 0.10307106062526858,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "classifica di serie c",
    "discover_score": 0.10297413750952632,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "verona parma",
    "discover_score": 0.10287827113465892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "getafe - villarreal",
    "discover_score": 0.10278344045016281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "rimini - sestri levante",
    "discover_score": 0.10268962501007417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "fabio paratici",
    "discover_score": 0.10259680495039697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "maria teresa ruta",
    "discover_score": 0.10250496096756462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "valeria marini",
    "discover_score": 0.10241407429787938,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "franco antonello",
    "discover_score": 0.10232412669787708,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "highlights juve genoa",
    "discover_score": 0.10223510042556766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "buona domenica 30 marzo",
    "discover_score": 0.102146978222506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.10205974329664895,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "trapani calcio",
    "discover_score": 0.10197337930595829,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "costa rica",
    "discover_score": 0.10188787034271098,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "daria kasatkina",
    "discover_score": 0.10180320091848082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "inter miami - philadelphia union",
    "discover_score": 0.10171935594975741,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "alessandro borghese",
    "discover_score": 0.10163632074417069,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "pamela prati",
    "discover_score": 0.10155408098729052,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "kevin costner",
    "discover_score": 0.10147262272997333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "aryna sabalenka",
    "discover_score": 0.10139193237622872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "serie c girone b",
    "discover_score": 0.10131199667158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "carlo calenda giorgia meloni",
    "discover_score": 0.10123280269190177,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "belfast",
    "discover_score": 0.1011543378326903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "la vita da grandi",
    "discover_score": 0.10107658979878206,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "ramona bachmann",
    "discover_score": 0.10099954659446342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "isernia",
    "discover_score": 0.10092319651397456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "venaria reale",
    "discover_score": 0.10084752813238243,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "fc barcelona",
    "discover_score": 0.10077253029680652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "carmen russo",
    "discover_score": 0.10069819211798135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "nuova zelanda",
    "discover_score": 0.10062450296214058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "ramadan 2025",
    "discover_score": 0.1005514524432079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "anna tatangelo",
    "discover_score": 0.10047903041528129,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "molise",
    "discover_score": 0.10040722696539747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "zerbi",
    "discover_score": 0.10033603240656422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "pantelleria",
    "discover_score": 0.10026543727104871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "oroscopo oggi capricorno paolo fox",
    "discover_score": 0.10019543230391097,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "inter biglietti",
    "discover_score": 0.10012600845677155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "dinamo sassari - trapani",
    "discover_score": 0.10005715688180375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "yuri previtali",
    "discover_score": 0.09998886892594035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "edoardo mangano",
    "discover_score": 0.09992113612528634,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "ticketone",
    "discover_score": 0.09985395019972848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "twitter down",
    "discover_score": 0.09978730304773362,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "x down",
    "discover_score": 0.09972118674132832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "elena d'amario",
    "discover_score": 0.09965559352125167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "denise esposito",
    "discover_score": 0.0995905157922747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "eredivisie",
    "discover_score": 0.09952594611867945,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "matilde brandi",
    "discover_score": 0.0994618772198912,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "giacomo agostini",
    "discover_score": 0.09939830196625789,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "brindisi - ueb cividale",
    "discover_score": 0.09933521337497048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "sabalenka",
    "discover_score": 0.09927260460611927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "aldo cazzullo",
    "discover_score": 0.09921046895888021,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "passaporto nuove regole",
    "discover_score": 0.0991487998678265,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "classifica serie a femminile",
    "discover_score": 0.09908759089936048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "barbara spinelli",
    "discover_score": 0.0990268357482612,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "thauvin",
    "discover_score": 0.09896652823434314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "mbappe",
    "discover_score": 0.09890666229922199,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "robin wright",
    "discover_score": 0.0988472320031833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "sampdoria - sassuolo",
    "discover_score": 0.09878823152215013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "adriana volpe",
    "discover_score": 0.09872965514474617,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "psg",
    "discover_score": 0.09867149726945039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "patrizia pellegrino",
    "discover_score": 0.09861375240184032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "mother's day",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "irlanda",
    "discover_score": 0.098499480231532,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "laura freddi",
    "discover_score": 0.09844294245184321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "anna pepe",
    "discover_score": 0.09838679672091392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "aniket verma",
    "discover_score": 0.09833103804133506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "carlo taranto gialappa",
    "discover_score": 0.0982756615079381,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "limousine mosca",
    "discover_score": 0.09822066230557329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "estrela amadora - sporting",
    "discover_score": 0.09816603570695347,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "zeitumstellung 2025",
    "discover_score": 0.09811177707056148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "ugento casarano",
    "discover_score": 0.09805788183861917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "rosanna fratello",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "cuadrado",
    "discover_score": 0.09795116376389046,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "bulls - mavericks",
    "discover_score": 0.09789833220677814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "carlo verdone",
    "discover_score": 0.0978458466217977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "villanterio",
    "discover_score": 0.09779370284140003,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "ciro ricci mare fuori",
    "discover_score": 0.09774189677076232,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "menfi",
    "discover_score": 0.09769042438613113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "sassuolo",
    "discover_score": 0.09763928173321193,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "buona domenica 30 marzo 2025",
    "discover_score": 0.09758846492560365,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "algarve",
    "discover_score": 0.09753797014327643,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "spurs - celtics",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "gigi d'alessio piazza plebiscito 2025",
    "discover_score": 0.09743793169736248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "san vito lo capo",
    "discover_score": 0.09738838071245375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "peter gomez un alieno in patria",
    "discover_score": 0.09733913710741988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "oroscopo settimanale cancro",
    "discover_score": 0.09729019737267972,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "paolo rossi",
    "discover_score": 0.09724155805672677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "flora tabanelli",
    "discover_score": 0.09719321576487423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "gianfranco fini",
    "discover_score": 0.09714516715803326,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "ravenna calcio",
    "discover_score": 0.09709740895152358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "fire damage restoration",
    "discover_score": 0.09704993791391554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "maurizio battista",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "cristina parodi",
    "discover_score": 0.09695584467920225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "maradona",
    "discover_score": 0.09690921627548794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "alessia amici",
    "discover_score": 0.0968628626253454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "dustin hoffman",
    "discover_score": 0.09681678074725798,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "dundee - rangers",
    "discover_score": 0.09677096770661728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "classifica serie a",
    "discover_score": 0.09672542061475889,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "e poi si vede film",
    "discover_score": 0.0966801366280226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "cristiano malgioglio",
    "discover_score": 0.09663511294683641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "seven",
    "discover_score": 0.09659034681482327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "young sheldon",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "anna pettinelli",
    "discover_score": 0.09650157638358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "barbara foria",
    "discover_score": 0.09645756677984114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "nicoletta strambelli",
    "discover_score": 0.09641380411462185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "antonia amici",
    "discover_score": 0.09637028583488115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "val di fassa",
    "discover_score": 0.09632700942586017,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "ambra angiolini",
    "discover_score": 0.09628397241033204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "keita balde",
    "discover_score": 0.09624117234786977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "mattia guadagnini",
    "discover_score": 0.09619860683413181,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "l'ultima gara",
    "discover_score": 0.09615627350016469,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "fine ramadan 2025 italia",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "senza cri",
    "discover_score": 0.09607229406860092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "nesta",
    "discover_score": 0.09603064340399105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "zeeshan ansari",
    "discover_score": 0.09598921578384295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "fini",
    "discover_score": 0.09594800900624814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "tommaso cassissa",
    "discover_score": 0.09590702090083489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "motogp jorge martin",
    "discover_score": 0.09586624932817771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "prima pagina tuttosport",
    "discover_score": 0.09582569217922066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "trigno amici",
    "discover_score": 0.09578534737471363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "mediaset infinity",
    "discover_score": 0.09574521286466178,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "michelle hunziker",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "ellen hidding",
    "discover_score": 0.09566556667100377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "marcatori serie a",
    "discover_score": 0.0956260510289015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "mezza maratona d'italia",
    "discover_score": 0.09558673776324564,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "linea verde",
    "discover_score": 0.09554762496248463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "the town",
    "discover_score": 0.09550871074127001,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "malta",
    "discover_score": 0.09546999323998659,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "davide simonetta",
    "discover_score": 0.09543147062429341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "andrea berta",
    "discover_score": 0.0953931410846744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "weather",
    "discover_score": 0.09535500283599914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "le assaggiatrici",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "serie d girone d",
    "discover_score": 0.09527929319031735,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "madagascar",
    "discover_score": 0.095241718341157,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "galatasaray",
    "discover_score": 0.09520432787781902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "drusilla foer",
    "discover_score": 0.0951671201308383,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "liquidation",
    "discover_score": 0.09513009345269235,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "ryan gosling",
    "discover_score": 0.09509324621742406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "giorgio gori",
    "discover_score": 0.09505657682027245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "diretta canale 5",
    "discover_score": 0.0950200836773114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "sandra bullock",
    "discover_score": 0.09498376522509583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "seven film",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "cipro",
    "discover_score": 0.0949116462394545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "todaro",
    "discover_score": 0.09487584267846207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "letterman",
    "discover_score": 0.09484020775242427,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "mediaset play",
    "discover_score": 0.09480473999524712,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "thunder - pacers",
    "discover_score": 0.09476943795934413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "mediaset",
    "discover_score": 0.09473430021533075,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "holland",
    "discover_score": 0.09469932535172501,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "limp bizkit bologna",
    "discover_score": 0.09466451197465411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "acquisition",
    "discover_score": 0.09462985870756711,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "tropea",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "san giorgio a cremano",
    "discover_score": 0.09456102708206598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "sean connery",
    "discover_score": 0.09452684605465266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "venturino genoa",
    "discover_score": 0.09449281979868923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "giorgia cantante",
    "discover_score": 0.09445894702012068,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "robert downey jr",
    "discover_score": 0.09442522644060614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "grève",
    "discover_score": 0.09439165679726934,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "celentano",
    "discover_score": 0.09435823684245379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "valentino rossi",
    "discover_score": 0.09432496534348277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "bautista",
    "discover_score": 0.09429184108242403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "benetton rugby",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "monsanto",
    "discover_score": 0.09422602947465646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "liberoquotidiano",
    "discover_score": 0.09419333976375065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "bonus animali domestici",
    "discover_score": 0.09416079256192349,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "dan aykroyd",
    "discover_score": 0.09412838672159105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "الريال ضد ليغانيز",
    "discover_score": 0.0940961211085941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "francesca michielin",
    "discover_score": 0.09406399460199255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "giro delle fiandre 2025",
    "discover_score": 0.09403200609386386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "nicolò amici",
    "discover_score": 0.09400015448910518,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "halle berry",
    "discover_score": 0.09396843870523919,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "vasco rossi",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "river plate - rosario central",
    "discover_score": 0.09390541033226459,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "calendario roma",
    "discover_score": 0.09387409563963237,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "alba",
    "discover_score": 0.0938429125604821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "serie a classifica",
    "discover_score": 0.09381186007267661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "romanews",
    "discover_score": 0.09378093716561291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "livorno calcio",
    "discover_score": 0.09375014284005191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "barbra streisand",
    "discover_score": 0.09371947610795114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.09368893599230055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "nec - az",
    "discover_score": 0.09365852152696119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "risultato juve oggi",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "andrea pisani",
    "discover_score": 0.0935980657360692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "jacopo sol",
    "discover_score": 0.0935680225311837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "rapid bucureşti - universitatea craiova",
    "discover_score": 0.093538101217641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "penne",
    "discover_score": 0.09350830088133903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "hazzard",
    "discover_score": 0.09347862061813828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "300",
    "discover_score": 0.09344905953371982,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "hugh jackman",
    "discover_score": 0.09341961674344554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "meme",
    "discover_score": 0.09339029137222105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "abruzzo",
    "discover_score": 0.0933610825543608,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "daniel craig",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "alessia pecchia",
    "discover_score": 0.09330301116224317,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "nelson mandela",
    "discover_score": 0.09327414690247872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "the life list",
    "discover_score": 0.09324539582481085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "kolo muani",
    "discover_score": 0.09321675710865725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "chiara amici",
    "discover_score": 0.09318822994208342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "marsiglia calcio",
    "discover_score": 0.09315981352168344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "conceicao",
    "discover_score": 0.09313150705246255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "uma thurman",
    "discover_score": 0.09310330974772196,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "roma juve",
    "discover_score": 0.09307522082894545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "manuel bortuzzo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "daniel grassl",
    "discover_score": 0.09301936507546586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "sydney sweeney",
    "discover_score": 0.09299159672364964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "real",
    "discover_score": 0.0929639337233575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "mauritius",
    "discover_score": 0.09293637533535148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 315,
    "entity": "braga - arouca",
    "discover_score": 0.09290892082793491,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 316,
    "entity": "matilde brandi figlie",
    "discover_score": 0.0928815694768517,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 317,
    "entity": "carmine mare fuori",
    "discover_score": 0.09285432056518728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 318,
    "entity": "paolo mieli",
    "discover_score": 0.09282717338327115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 319,
    "entity": "trani",
    "discover_score": 0.09280012722858091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 320,
    "entity": "marracash",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 321,
    "entity": "sixers - heat",
    "discover_score": 0.09274633522596569,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 322,
    "entity": "gatti juve",
    "discover_score": 0.09271958800789605,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 323,
    "entity": "fratelli di crozza",
    "discover_score": 0.09269293907658203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 324,
    "entity": "re carlo iii",
    "discover_score": 0.09266638776385823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 325,
    "entity": "angela melillo",
    "discover_score": 0.09263993340816414,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 326,
    "entity": "de winter",
    "discover_score": 0.09261357535445866,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 327,
    "entity": "khéphren thuram",
    "discover_score": 0.09258731295413598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 328,
    "entity": "ghali",
    "discover_score": 0.09256114556494273,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 329,
    "entity": "renzi",
    "discover_score": 0.09253507255089652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 330,
    "entity": "monaco calcio",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 331,
    "entity": "zerbi",
    "discover_score": 0.09248320713519066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 332,
    "entity": "madonna",
    "discover_score": 0.09245741349220572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 333,
    "entity": "الطقس",
    "discover_score": 0.09243171174156303,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 334,
    "entity": "ben affleck",
    "discover_score": 0.09240610127745717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 335,
    "entity": "moglie brignano",
    "discover_score": 0.09238058149989105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 336,
    "entity": "vasto",
    "discover_score": 0.09235515181460296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 337,
    "entity": "5g",
    "discover_score": 0.09232981163299482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 338,
    "entity": "roma fc",
    "discover_score": 0.09230456037206136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 339,
    "entity": "bending spoons",
    "discover_score": 0.09227939745432066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 340,
    "entity": "giorgia cardinaletti",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 341,
    "entity": "alejandro garnacho",
    "discover_score": 0.09222933436569582,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 342,
    "entity": "arona",
    "discover_score": 0.09220443306685248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 343,
    "entity": "nico gonzalez",
    "discover_score": 0.09217961785515158,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 344,
    "entity": "robin minz",
    "discover_score": 0.09215488817972012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 345,
    "entity": "como empoli oggi",
    "discover_score": 0.09213024349481246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 346,
    "entity": "adolescence serie",
    "discover_score": 0.09210568325974791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 347,
    "entity": "عيد الفطر في ايطاليا",
    "discover_score": 0.09208120693884903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 348,
    "entity": "beşiktaş vs galatasaray",
    "discover_score": 0.09205681400138103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 349,
    "entity": "kelly",
    "discover_score": 0.09203250392149208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 350,
    "entity": "dusan vlahovic",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 351,
    "entity": "il piccolo",
    "discover_score": 0.09198413025510604,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 352,
    "entity": "laroma24",
    "discover_score": 0.09196006564079447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 353,
    "entity": "emanuela orlandi",
    "discover_score": 0.09193608182831947,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 354,
    "entity": "luca marini",
    "discover_score": 0.09191217831537823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 355,
    "entity": "adt - alianza lima",
    "discover_score": 0.09188835460421053,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 356,
    "entity": "the last of us",
    "discover_score": 0.09186461020154493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 357,
    "entity": "todde",
    "discover_score": 0.09184094461854578,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 358,
    "entity": "as roma news",
    "discover_score": 0.09181735737076092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 359,
    "entity": "fabio miretti",
    "discover_score": 0.09179384797807022,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 360,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 361,
    "entity": "brighton nottingham forest",
    "discover_score": 0.09174706085884692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 362,
    "entity": "classifica serie a oggi",
    "discover_score": 0.09172378219328091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 363,
    "entity": "wta ranking",
    "discover_score": 0.09170057950464437,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 364,
    "entity": "recco",
    "discover_score": 0.09167745233373036,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 365,
    "entity": "genoa maglia boca",
    "discover_score": 0.09165440022537019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 366,
    "entity": "joao felix milan",
    "discover_score": 0.09163142272838692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 367,
    "entity": "mara maionchi",
    "discover_score": 0.0916085193955494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 368,
    "entity": "dan sucu",
    "discover_score": 0.09158568978352717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 369,
    "entity": "casertana",
    "discover_score": 0.0915629334528458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 370,
    "entity": "carpi gubbio",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 371,
    "entity": "q",
    "discover_score": 0.09151763889662515,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 372,
    "entity": "leali genoa",
    "discover_score": 0.09149509981102479,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-30 17:39:23",
  "trends_count": 372,
  "top_score": 15.854944456487642,
  "runtime_minutes": 2.6488840421040853,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
