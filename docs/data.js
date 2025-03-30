const trendData = [
  {
    "rank": 42,
    "entity": "ora",
    "discover_score": 20.864407218533476,
    "score_1h": 76.37931034482759,
    "score_4h": 63.44117647058823,
    "score_7d": 14.535502958579881,
    "extracted_entities": "Tempo - Orologio - Fuso orario - Ora legale - Sincronizzazione"
  },
  {
    "rank": 1,
    "entity": "cagliari - monza",
    "discover_score": 17.6079271580963,
    "score_1h": 35.78448275862069,
    "score_4h": 36.331932773109244,
    "score_7d": 1.7307692307692308,
    "extracted_entities": "Cagliari - Monza - Calcio - Serie A - Partita"
  },
  {
    "rank": 2,
    "entity": "juventus - genoa",
    "discover_score": 6.03172630777458,
    "score_1h": 9.137931034482758,
    "score_4h": 11.808823529411764,
    "score_7d": 2.4822485207100593,
    "extracted_entities": "Juventus - Genoa - Calcio - Serie A"
  },
  {
    "rank": 4,
    "entity": "lecce - roma",
    "discover_score": 5.632761590009779,
    "score_1h": 15.64655172413793,
    "score_4h": 12.892857142857142,
    "score_7d": 3.029585798816568,
    "extracted_entities": "Lecce - Roma - Viaggio - Trasporti - Turismo"
  },
  {
    "rank": 7,
    "entity": "eid mubarak",
    "discover_score": 5.442157532269943,
    "score_1h": 2.3017241379310347,
    "score_4h": 14.45378151260504,
    "score_7d": 3.334319526627219,
    "extracted_entities": "Eid Mubarak - Festa religiosa - Islam - Celebrazione - Musulmani"
  },
  {
    "rank": 3,
    "entity": "fiorentina - atalanta",
    "discover_score": 4.914380578404615,
    "score_1h": 54.422413793103445,
    "score_4h": 17.199579831932773,
    "score_7d": 0.8520710059171597,
    "extracted_entities": "Fiorentina - Atalanta - Calcio - Serie A - Partita"
  },
  {
    "rank": 35,
    "entity": "frascati",
    "discover_score": 3.8278251233788256,
    "score_1h": 3.8275862068965516,
    "score_4h": 4.63235294117647,
    "score_7d": 9.683431952662723,
    "extracted_entities": "Frascati - Città - Lazio - Vini - Turismo"
  },
  {
    "rank": 34,
    "entity": "ticketone",
    "discover_score": 3.5569671918590022,
    "score_1h": 25.698275862068968,
    "score_4h": 8.493697478991596,
    "score_7d": 6.186390532544379,
    "extracted_entities": "TicketOne - Biglietti - Eventi - Concerti - Spettacoli"
  },
  {
    "rank": 6,
    "entity": "gigi d'alessio",
    "discover_score": 3.531847907781237,
    "score_1h": 31.198275862068968,
    "score_4h": 11.063025210084033,
    "score_7d": 1.7426035502958581,
    "extracted_entities": "Gigi D'Alessio - Cantante - Musica Italiana"
  },
  {
    "rank": 10,
    "entity": "eliminato amici",
    "discover_score": 3.222845209928678,
    "score_1h": 2.8017241379310347,
    "score_4h": 8.766806722689076,
    "score_7d": 2.9023668639053253,
    "extracted_entities": "Eliminato - Amici - Programma TV"
  },
  {
    "rank": 32,
    "entity": "mara venier",
    "discover_score": 3.173891621339497,
    "score_1h": 20.14655172413793,
    "score_4h": 11.13655462184874,
    "score_7d": 3.455621301775148,
    "extracted_entities": "Mara Venier - Personaggio Televisivo - Italia - Intrattenimento - Conduttrice"
  },
  {
    "rank": 8,
    "entity": "atalanta u-23 - padova",
    "discover_score": 2.7922168526090974,
    "score_1h": 5.137931034482758,
    "score_4h": 11.3718487394958,
    "score_7d": 0.9319526627218935,
    "extracted_entities": "Atalanta U-23 - Padova - Calcio - Partita"
  },
  {
    "rank": 22,
    "entity": "groenlandia trump",
    "discover_score": 2.623415907205049,
    "score_1h": 6.017241379310345,
    "score_4h": 5.20798319327731,
    "score_7d": 4.849112426035503,
    "extracted_entities": "Groenlandia - Donald Trump - Acquisto - Politica internazionale"
  },
  {
    "rank": 13,
    "entity": "cesena - juve stabia",
    "discover_score": 2.436332955938236,
    "score_1h": 34.55172413793103,
    "score_4h": 12.121848739495798,
    "score_7d": 0.6005917159763314,
    "extracted_entities": "Cesena - Juve Stabia - Calcio - Partita - Serie C"
  },
  {
    "rank": 11,
    "entity": "carrarese - bari",
    "discover_score": 2.002921873882898,
    "score_1h": 27.913793103448274,
    "score_4h": 9.0,
    "score_7d": 0.6952662721893491,
    "extracted_entities": "Carrarese - Bari - Calcio - Serie C - Partita"
  },
  {
    "rank": 12,
    "entity": "psv eindhoven - ajax",
    "discover_score": 1.922109674383777,
    "score_1h": 16.241379310344826,
    "score_4h": 7.966386554621849,
    "score_7d": 0.9437869822485208,
    "extracted_entities": "PSV Eindhoven - Ajax - Eredivisie - Calcio - Rivalità"
  },
  {
    "rank": 5,
    "entity": "real madrid - leganés",
    "discover_score": 1.8057100753322393,
    "score_1h": 0.45631209818819407,
    "score_4h": 0.6659663865546218,
    "score_7d": 3.775147928994083,
    "extracted_entities": "Real Madrid - Leganés - Partita di calcio - La Liga"
  },
  {
    "rank": 14,
    "entity": "pro vercelli - vicenza",
    "discover_score": 1.6510504406423325,
    "score_1h": 22.67343658679135,
    "score_4h": 8.617647058823529,
    "score_7d": 0.3905325443786982,
    "extracted_entities": "Pro Vercelli - Vicenza - Calcio - Serie C - Partita"
  },
  {
    "rank": 31,
    "entity": "terremoto myanmar oggi",
    "discover_score": 1.3540010291233053,
    "score_1h": 0.20689655172413793,
    "score_4h": 1.0168067226890756,
    "score_7d": 4.3047337278106514,
    "extracted_entities": "Terremoto - Myanmar - Oggi"
  },
  {
    "rank": 15,
    "entity": "arianna manfredini",
    "discover_score": 1.2763510076828022,
    "score_1h": 0.6551724137931034,
    "score_4h": 4.233193277310924,
    "score_7d": 1.2781065088757397,
    "extracted_entities": "Arianna Manfredini"
  },
  {
    "rank": 20,
    "entity": "lucchese - ternana",
    "discover_score": 1.2409239924107431,
    "score_1h": 23.077586206896555,
    "score_4h": 6.626050420168067,
    "score_7d": 0.3757396449704142,
    "extracted_entities": "Lucchese - Ternana - Calcio - Partita - Serie C"
  },
  {
    "rank": 40,
    "entity": "trapani catania",
    "discover_score": 1.131252119065844,
    "score_1h": 39.45689655172414,
    "score_4h": 4.8235294117647065,
    "score_7d": 1.1568047337278107,
    "extracted_entities": "Trapani - Catania - Sicilia - Viaggi - Trasporti"
  },
  {
    "rank": 18,
    "entity": "richard chamberlain",
    "discover_score": 1.1275394051867251,
    "score_1h": 20.71551724137931,
    "score_4h": 6.2289915966386555,
    "score_7d": 0.2544378698224852,
    "extracted_entities": "Richard Chamberlain - Attore - Filmografia - Televisione - Hollywood"
  },
  {
    "rank": 47,
    "entity": "nuove regole passaporto",
    "discover_score": 1.0444753940269325,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.1092436974789916,
    "score_7d": 4.218934911242603,
    "extracted_entities": "Passaporto - Regole - Aggiornamenti - Viaggi - Documentazione"
  },
  {
    "rank": 24,
    "entity": "club brugge - anderlecht",
    "discover_score": 0.8573217309398128,
    "score_1h": 0.0603448275862069,
    "score_4h": 4.754201680672269,
    "score_7d": 0.2337278106508876,
    "extracted_entities": "Club Brugge - Anderlecht - Calcio - Belgio - Partita"
  },
  {
    "rank": 16,
    "entity": "ludmilla radchenko",
    "discover_score": 0.7091267953053824,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.28781512605042014,
    "score_7d": 2.059171597633136,
    "extracted_entities": "Ludmilla Radchenko - Artista - Modella - Personaggio televisivo"
  },
  {
    "rank": 27,
    "entity": "srh vs dc",
    "discover_score": 0.6834641547055761,
    "score_1h": 0.8620689655172413,
    "score_4h": 3.6113445378151265,
    "score_7d": 0.23668639053254437,
    "extracted_entities": "SRH - DC - Indian Premier League - Cricket"
  },
  {
    "rank": 19,
    "entity": "gosens",
    "discover_score": 0.6690773863048358,
    "score_1h": 1.3275862068965518,
    "score_4h": 3.2394957983193278,
    "score_7d": 0.2485207100591716,
    "extracted_entities": "Robin Gosens - Calciatore - Inter - Bundesliga - Nazionale tedesca"
  },
  {
    "rank": 43,
    "entity": "san vito lo capo",
    "discover_score": 0.5762148197905916,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7163865546218487,
    "score_7d": 1.680473372781065,
    "extracted_entities": "San Vito Lo Capo - Sicilia - Turismo - Spiagge - Cous Cous Fest"
  },
  {
    "rank": 23,
    "entity": "audace cerignola - monopoli",
    "discover_score": 0.5710385056929418,
    "score_1h": 6.275862068965518,
    "score_4h": 2.472689075630252,
    "score_7d": 0.33727810650887574,
    "extracted_entities": "Audace Cerignola - Monopoli - Calcio - Serie C - Partita"
  },
  {
    "rank": 48,
    "entity": "anna pepe",
    "discover_score": 0.5530921644346165,
    "score_1h": 1.1120689655172413,
    "score_4h": 1.3865546218487395,
    "score_7d": 1.136094674556213,
    "extracted_entities": "Anna Pepe"
  },
  {
    "rank": 9,
    "entity": "tonga",
    "discover_score": 0.5415293866203678,
    "score_1h": 8.102133255406196,
    "score_4h": 2.283613445378151,
    "score_7d": 0.14201183431952663,
    "extracted_entities": "Tonga - Oceania - Isola - Vulcano - Tsunami"
  },
  {
    "rank": 29,
    "entity": "barcellona - girona",
    "discover_score": 0.4679886544030694,
    "score_1h": 8.06896551724138,
    "score_4h": 1.5987394957983194,
    "score_7d": 0.4911242603550296,
    "extracted_entities": "Barcellona - Girona - Viaggio - Turismo - Spagna"
  },
  {
    "rank": 30,
    "entity": "denise esposito",
    "discover_score": 0.3988642425169873,
    "score_1h": 10.327586206896552,
    "score_4h": 1.7352941176470589,
    "score_7d": 0.1923076923076923,
    "extracted_entities": "Denise Esposito"
  },
  {
    "rank": 26,
    "entity": "drone russo lago maggiore",
    "discover_score": 0.3944889396931016,
    "score_1h": 8.232758620689655,
    "score_4h": 1.388655462184874,
    "score_7d": 0.3136094674556213,
    "extracted_entities": "Drone - Russia - Lago Maggiore"
  },
  {
    "rank": 38,
    "entity": "motogp oggi orari",
    "discover_score": 0.3871149120715314,
    "score_1h": 0.1724137931034483,
    "score_4h": 0.6995798319327731,
    "score_7d": 0.7988165680473374,
    "extracted_entities": "MotoGP - Oggi - Orari"
  },
  {
    "rank": 17,
    "entity": "emanuel lo",
    "discover_score": 0.3775429712209611,
    "score_1h": 3.327586206896552,
    "score_4h": 0.6680672268907564,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Emanuel Lo - Personaggio pubblico - Intrattenimento - Musica - Televisione"
  },
  {
    "rank": 46,
    "entity": "st-étienne - psg",
    "discover_score": 0.3717985535452832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.3047337278106508,
    "extracted_entities": "St-Étienne - PSG - Calcio - Ligue 1 - Partita"
  },
  {
    "rank": 21,
    "entity": "cesare prandelli",
    "discover_score": 0.2309760648591848,
    "score_1h": 2.0086206896551726,
    "score_4h": 0.23319327731092437,
    "score_7d": 0.3047337278106509,
    "extracted_entities": "Cesare Prandelli - Allenatore di calcio - Italia - Fiorentina - Nazionale italiana di calcio"
  },
  {
    "rank": 25,
    "entity": "anna tatangelo",
    "discover_score": 0.22510980726050955,
    "score_1h": 11.568965517241379,
    "score_4h": 0.7331932773109244,
    "score_7d": 0.04142011834319527,
    "extracted_entities": "Anna Tatangelo - Cantante - Musica Italiana"
  },
  {
    "rank": 28,
    "entity": "gand wevelgem 2025",
    "discover_score": 0.21642484091540026,
    "score_1h": 1.2155172413793103,
    "score_4h": 0.5987394957983193,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Gand-Wevelgem - 2025 - Ciclismo - Gara - Belgio"
  },
  {
    "rank": 45,
    "entity": "napoli milan dove vederla",
    "discover_score": 0.20826063286372493,
    "score_1h": 0.02586206896551724,
    "score_4h": 0.17016806722689076,
    "score_7d": 0.3520710059171598,
    "extracted_entities": "Napoli - Milan - Partita - Diretta TV - Streaming"
  },
  {
    "rank": 39,
    "entity": "superbike oggi",
    "discover_score": 0.2081470459109636,
    "score_1h": 3.3706896551724137,
    "score_4h": 0.28781512605042014,
    "score_7d": 0.25443786982248523,
    "extracted_entities": "Superbike - Oggi - Corse motociclistiche - Campionato mondiale Superbike"
  },
  {
    "rank": 41,
    "entity": "rimini - sestri levante",
    "discover_score": 0.19956199713702047,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.5378151260504201,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Rimini - Sestri Levante - Località turistiche - Viaggio - Italia"
  },
  {
    "rank": 50,
    "entity": "daria kasatkina",
    "discover_score": 0.19891078092308628,
    "score_1h": 0.0,
    "score_4h": 0.17016806722689076,
    "score_7d": 0.31952662721893493,
    "extracted_entities": "Daria Kasatkina - Tennis - Sport - Atleta"
  },
  {
    "rank": 36,
    "entity": "gullit",
    "discover_score": 0.16284584368907537,
    "score_1h": 0.5862068965517241,
    "score_4h": 0.2647058823529412,
    "score_7d": 0.05917159763313609,
    "extracted_entities": "Ruud Gullit - Calcio - Olanda - Milan - Pallone d'Oro"
  },
  {
    "rank": 37,
    "entity": "ramona bachmann",
    "discover_score": 0.15988114397810393,
    "score_1h": 0.0,
    "score_4h": 0.014705882352941176,
    "score_7d": 0.19230769230769232,
    "extracted_entities": "Ramona Bachmann - Calciatrice - Svizzera - Paris Saint-Germain - Nazionale Svizzera"
  },
  {
    "rank": 33,
    "entity": "getafe - villarreal",
    "discover_score": 0.14916658970948857,
    "score_1h": 0.896551724137931,
    "score_4h": 0.226890756302521,
    "score_7d": 0.01775147928994083,
    "extracted_entities": "Getafe - Villarreal - Partita di calcio - La Liga"
  },
  {
    "rank": 44,
    "entity": "fiorentina vs atalanta",
    "discover_score": 0.14443819212951683,
    "score_1h": 1.75,
    "score_4h": 0.18487394957983191,
    "score_7d": 0.038461538461538464,
    "extracted_entities": "Fiorentina - Atalanta - Partita di calcio - Serie A - Risultati"
  },
  {
    "rank": 49,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.13919702497955652,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 0.038461538461538464,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience - Misurazione"
  },
  {
    "rank": 51,
    "entity": "costanza fiction",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "kevin costner",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "loftus cheek",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "salernitana palermo",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "sampdoria - sassuolo",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "grizzlies - lakers",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "finale miami 2025",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "terremoto tonga",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "algarve",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "espanyol - atlético madrid",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "gent wevelgem 2025",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "edoardo mangano",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "zeeshan ansari",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "tim poste italiane",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "isernia",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "cremonese - cittadella",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "openai",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "inter udinese formazioni",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "oroscopo oggi capricorno paolo fox",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "pantelleria",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "molise",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "real madrid",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "buona domenica 30 marzo",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "avellino benevento",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "lazio torino",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "bayern monaco - fc st. pauli",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "pamela prati",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "fabio paratici",
    "discover_score": 0.10660790403530267,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "sampdoria",
    "discover_score": 0.10646514650027929,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "carrara",
    "discover_score": 0.10632453699023645,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "eid",
    "discover_score": 0.10618601677886443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "reggina vibonese",
    "discover_score": 0.10604952944488055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "orsolini",
    "discover_score": 0.10591502075484019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "andrea berta",
    "discover_score": 0.10578243855322951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "inter miami - philadelphia union",
    "discover_score": 0.10565173265930743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "carlo calenda giorgia meloni",
    "discover_score": 0.10552285477020852,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "brindisi - ueb cividale",
    "discover_score": 0.10539575836985944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "motogp jorge martin",
    "discover_score": 0.10527039864329803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "menfi",
    "discover_score": 0.10514673239601775,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "aniket verma",
    "discover_score": 0.10502471797798994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "solo leveling season 3",
    "discover_score": 0.10490431521204421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "ema stokholma",
    "discover_score": 0.10478548532631286,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "venaria reale",
    "discover_score": 0.10466819089046668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "aryna sabalenka",
    "discover_score": 0.10455239575549213,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "isar aerospace",
    "discover_score": 0.10443806499677748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "dustin hoffman",
    "discover_score": 0.10432516486029392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "mother's day",
    "discover_score": 0.1042136627116727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "yildiz",
    "discover_score": 0.10410352698799526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "valeria marini",
    "discover_score": 0.10399472715212489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "carmen russo",
    "discover_score": 0.10388723364942297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "villanterio",
    "discover_score": 0.10378101786670191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "maradona",
    "discover_score": 0.1036760520932791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "casertana - foggia",
    "discover_score": 0.1035723094840047,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "e poi si vede film",
    "discover_score": 0.10346976402414519,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "danimarca",
    "discover_score": 0.10336839049601293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "yuri previtali",
    "discover_score": 0.10326816444723902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "l'ultima gara",
    "discover_score": 0.10316906216059425,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "dinamo sassari - trapani",
    "discover_score": 0.10307106062526858,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "elena d'amario",
    "discover_score": 0.10297413750952632,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "giacomo agostini",
    "discover_score": 0.10287827113465892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "nesta",
    "discover_score": 0.10278344045016281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "matilde brandi",
    "discover_score": 0.10268962501007417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "sabalenka",
    "discover_score": 0.10259680495039697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "mbappe",
    "discover_score": 0.10250496096756462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "beşiktaş - galatasaray",
    "discover_score": 0.10241407429787938,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "darderi",
    "discover_score": 0.10232412669787708,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "barbara spinelli",
    "discover_score": 0.10223510042556766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "rosanna fratello",
    "discover_score": 0.102146978222506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "cosenza pisa",
    "discover_score": 0.10205974329664895,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "adriana volpe",
    "discover_score": 0.10197337930595829,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "milan futuro",
    "discover_score": 0.10188787034271098,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "laura freddi",
    "discover_score": 0.10180320091848082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "san giorgio a cremano",
    "discover_score": 0.10171935594975741,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "bulls - mavericks",
    "discover_score": 0.10163632074417069,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "keita balde",
    "discover_score": 0.10155408098729052,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "zeitumstellung 2025",
    "discover_score": 0.10147262272997333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "brighton & hove albion - nottingham forest",
    "discover_score": 0.10139193237622872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "messina - team altamura",
    "discover_score": 0.10131199667158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "estrela amadora - sporting",
    "discover_score": 0.10123280269190177,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.1011543378326903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "ciro ricci mare fuori",
    "discover_score": 0.10107658979878206,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "mezza maratona d'italia",
    "discover_score": 0.10099954659446342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "crotone - latina",
    "discover_score": 0.10092319651397456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "fire damage restoration",
    "discover_score": 0.10084752813238243,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "carlo verdone",
    "discover_score": 0.10077253029680652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "sassuolo",
    "discover_score": 0.10069819211798135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "val di fassa",
    "discover_score": 0.10062450296214058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "spurs - celtics",
    "discover_score": 0.1005514524432079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "gt vs mi",
    "discover_score": 0.10047903041528129,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "triestina - feralpisalò",
    "discover_score": 0.10040722696539747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "eintracht - stoccarda",
    "discover_score": 0.10033603240656422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "milan inter",
    "discover_score": 0.10026543727104871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "30 marzo",
    "discover_score": 0.10019543230391097,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "flora tabanelli",
    "discover_score": 0.10012600845677155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "carlo taranto",
    "discover_score": 0.10005715688180375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "paolo rossi",
    "discover_score": 0.09998886892594035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "luca zingaretti",
    "discover_score": 0.09992113612528634,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "odgaard",
    "discover_score": 0.09985395019972848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "preston vs aston villa",
    "discover_score": 0.09978730304773362,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "young sheldon",
    "discover_score": 0.09972118674132832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "linea verde",
    "discover_score": 0.09965559352125167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "clodiense - novara",
    "discover_score": 0.0995905157922747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "malta",
    "discover_score": 0.09952594611867945,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "gianfranco fini",
    "discover_score": 0.0994618772198912,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "luk3",
    "discover_score": 0.09939830196625789,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "ellen hidding",
    "discover_score": 0.09933521337497048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "davide simonetta",
    "discover_score": 0.09927260460611927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "como vs empoli",
    "discover_score": 0.09921046895888021,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "maurizio battista",
    "discover_score": 0.0991487998678265,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "cristina parodi",
    "discover_score": 0.09908759089936048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "roberta bruzzone",
    "discover_score": 0.0990268357482612,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "alessia amici",
    "discover_score": 0.09896652823434314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "bayern monaco",
    "discover_score": 0.09890666229922199,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "dundee - rangers",
    "discover_score": 0.0988472320031833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "cremonese",
    "discover_score": 0.09878823152215013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "seven",
    "discover_score": 0.09872965514474617,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "barbara foria",
    "discover_score": 0.09867149726945039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "cristiano malgioglio",
    "discover_score": 0.09861375240184032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "anna pettinelli",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "prima pagina tuttosport",
    "discover_score": 0.098499480231532,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "catanzaro calcio",
    "discover_score": 0.09844294245184321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "antonia amici",
    "discover_score": 0.09838679672091392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "frank matano",
    "discover_score": 0.09833103804133506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "mediaset infinity",
    "discover_score": 0.0982756615079381,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "partita juve oggi",
    "discover_score": 0.09822066230557329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "tommaso cassissa",
    "discover_score": 0.09816603570695347,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "espanyol vs atlético madrid",
    "discover_score": 0.09811177707056148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "rudy zerbi",
    "discover_score": 0.09805788183861917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "alavés - rayo vallecano",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "cipro",
    "discover_score": 0.09795116376389046,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "senza cri",
    "discover_score": 0.09789833220677814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "tropea",
    "discover_score": 0.0978458466217977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "patrick vieira",
    "discover_score": 0.09779370284140003,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "fini",
    "discover_score": 0.09774189677076232,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "balotelli",
    "discover_score": 0.09769042438613113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "trigno amici",
    "discover_score": 0.09763928173321193,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "linea verde oggi",
    "discover_score": 0.09758846492560365,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "weather",
    "discover_score": 0.09753797014327643,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "como calcio",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "michelle hunziker",
    "discover_score": 0.09743793169736248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "the town",
    "discover_score": 0.09738838071245375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "alcione - pergolettese",
    "discover_score": 0.09733913710741988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "liquidation",
    "discover_score": 0.09729019737267972,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "thunder - pacers",
    "discover_score": 0.09724155805672677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "trade republic",
    "discover_score": 0.09719321576487423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "gatti",
    "discover_score": 0.09714516715803326,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "natasha stefanenko",
    "discover_score": 0.09709740895152358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "limp bizkit bologna",
    "discover_score": 0.09704993791391554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "drusilla foer",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "عيد الفطر",
    "discover_score": 0.09695584467920225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "abruzzo",
    "discover_score": 0.09690921627548794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "le assaggiatrici",
    "discover_score": 0.0968628626253454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "kenan yıldız",
    "discover_score": 0.09681678074725798,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "madagascar",
    "discover_score": 0.09677096770661728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "giorgio gori",
    "discover_score": 0.09672542061475889,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "ryan gosling",
    "discover_score": 0.0966801366280226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "vira carbone",
    "discover_score": 0.09663511294683641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "diretta canale 5",
    "discover_score": 0.09659034681482327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "sandra bullock",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "seven film",
    "discover_score": 0.09650157638358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "letterman",
    "discover_score": 0.09645756677984114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "ligue 1",
    "discover_score": 0.09641380411462185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "simona cavallari",
    "discover_score": 0.09637028583488115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "fatima trotta",
    "discover_score": 0.09632700942586017,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "maglia genoa boca",
    "discover_score": 0.09628397241033204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "classifica di serie b",
    "discover_score": 0.09624117234786977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "acquisition",
    "discover_score": 0.09619860683413181,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "todaro",
    "discover_score": 0.09615627350016469,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "grève",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "mediaset play",
    "discover_score": 0.09607229406860092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "holland",
    "discover_score": 0.09603064340399105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "paolo villaggio",
    "discover_score": 0.09598921578384295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "sean connery",
    "discover_score": 0.09594800900624814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "liberoquotidiano",
    "discover_score": 0.09590702090083489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "miretti",
    "discover_score": 0.09586624932817771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "leali",
    "discover_score": 0.09582569217922066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "giorgia cantante",
    "discover_score": 0.09578534737471363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "benji e fede",
    "discover_score": 0.09574521286466178,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "celentano",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "robert downey jr",
    "discover_score": 0.09566556667100377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "valentino rossi",
    "discover_score": 0.0956260510289015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "benetton rugby",
    "discover_score": 0.09558673776324564,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "monsanto",
    "discover_score": 0.09554762496248463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "boca juniors",
    "discover_score": 0.09550871074127001,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "paestum",
    "discover_score": 0.09546999323998659,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "daniele silvestri",
    "discover_score": 0.09543147062429341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "primocanale",
    "discover_score": 0.0953931410846744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "piero villaggio figlio",
    "discover_score": 0.09535500283599914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "un alieno in patria",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "estonia",
    "discover_score": 0.09527929319031735,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "dan aykroyd",
    "discover_score": 0.095241718341157,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "bonus animali domestici",
    "discover_score": 0.09520432787781902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "alba",
    "discover_score": 0.0951671201308383,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "eid 2025",
    "discover_score": 0.09513009345269235,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "الريال ضد ليغانيز",
    "discover_score": 0.09509324621742406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "river plate - rosario central",
    "discover_score": 0.09505657682027245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "francesca michielin",
    "discover_score": 0.0950200836773114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "mauritius",
    "discover_score": 0.09498376522509583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "nicolò amici",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "romanews",
    "discover_score": 0.0949116462394545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "barbara de rossi",
    "discover_score": 0.09487584267846207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "aldo cazzullo",
    "discover_score": 0.09484020775242427,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "halle berry",
    "discover_score": 0.09480473999524712,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "claudia fusani",
    "discover_score": 0.09476943795934413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "calendario roma",
    "discover_score": 0.09473430021533075,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "serie b classifica",
    "discover_score": 0.09469932535172501,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "vasco rossi",
    "discover_score": 0.09466451197465411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "serie a classifica",
    "discover_score": 0.09462985870756711,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "simona tagli",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "penne",
    "discover_score": 0.09456102708206598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "allegri allenatore",
    "discover_score": 0.09452684605465266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "livorno calcio",
    "discover_score": 0.09449281979868923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "classifica marcatori serie a",
    "discover_score": 0.09445894702012068,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "barbra streisand",
    "discover_score": 0.09442522644060614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "jacopo sol",
    "discover_score": 0.09439165679726934,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "nec - az",
    "discover_score": 0.09435823684245379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "andrea pisani",
    "discover_score": 0.09432496534348277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "alessia pecchia",
    "discover_score": 0.09429184108242403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "rapid bucureşti - universitatea craiova",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "300",
    "discover_score": 0.09422602947465646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "hazzard",
    "discover_score": 0.09419333976375065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "hugh jackman",
    "discover_score": 0.09416079256192349,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "nelson mandela",
    "discover_score": 0.09412838672159105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "daniel craig",
    "discover_score": 0.0940961211085941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "the life list",
    "discover_score": 0.09406399460199255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "chiara amici",
    "discover_score": 0.09403200609386386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "meme",
    "discover_score": 0.09400015448910518,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "kolo muani",
    "discover_score": 0.09396843870523919,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "daniel grassl",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "sydney sweeney",
    "discover_score": 0.09390541033226459,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "roma juve",
    "discover_score": 0.09387409563963237,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "uma thurman",
    "discover_score": 0.0938429125604821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "alejandro garnacho",
    "discover_score": 0.09381186007267661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "marsiglia calcio",
    "discover_score": 0.09378093716561291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "conceicao",
    "discover_score": 0.09375014284005191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "sixers - heat",
    "discover_score": 0.09371947610795114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "real",
    "discover_score": 0.09368893599230055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "manuel bortuzzo",
    "discover_score": 0.09365852152696119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "goa",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "bologna fc 1909",
    "discover_score": 0.0935980657360692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "braga - arouca",
    "discover_score": 0.0935680225311837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "matilde brandi figlie",
    "discover_score": 0.093538101217641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "lol",
    "discover_score": 0.09350830088133903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "paolo mieli",
    "discover_score": 0.09347862061813828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "carmine mare fuori",
    "discover_score": 0.09344905953371982,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "arona",
    "discover_score": 0.09341961674344554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "fortnite down",
    "discover_score": 0.09339029137222105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "marracash",
    "discover_score": 0.0933610825543608,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "pescara arezzo",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "trani",
    "discover_score": 0.09330301116224317,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "re carlo iii",
    "discover_score": 0.09327414690247872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "angela melillo",
    "discover_score": 0.09324539582481085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "fratelli di crozza",
    "discover_score": 0.09321675710865725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "valeria graci",
    "discover_score": 0.09318822994208342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "de winter",
    "discover_score": 0.09315981352168344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "ghali",
    "discover_score": 0.09313150705246255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "khéphren thuram",
    "discover_score": 0.09310330974772196,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "renzi",
    "discover_score": 0.09307522082894545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "andrew tate",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "monaco calcio",
    "discover_score": 0.09301936507546586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "zerbi",
    "discover_score": 0.09299159672364964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "madonna",
    "discover_score": 0.0929639337233575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "5g",
    "discover_score": 0.09293637533535148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 315,
    "entity": "ben affleck",
    "discover_score": 0.09290892082793491,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 316,
    "entity": "moglie brignano",
    "discover_score": 0.0928815694768517,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 317,
    "entity": "vasto",
    "discover_score": 0.09285432056518728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 318,
    "entity": "roma fc",
    "discover_score": 0.09282717338327115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 319,
    "entity": "bending spoons",
    "discover_score": 0.09280012722858091,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 320,
    "entity": "tanzania",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 321,
    "entity": "bayern",
    "discover_score": 0.09274633522596569,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 322,
    "entity": "il piccolo",
    "discover_score": 0.09271958800789605,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 323,
    "entity": "giorgia cardinaletti",
    "discover_score": 0.09269293907658203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 324,
    "entity": "monica setta",
    "discover_score": 0.09266638776385823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 325,
    "entity": "algarve",
    "discover_score": 0.09263993340816414,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 326,
    "entity": "celtic - hearts",
    "discover_score": 0.09261357535445866,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 327,
    "entity": "adolescence serie",
    "discover_score": 0.09258731295413598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 328,
    "entity": "greta scarano",
    "discover_score": 0.09256114556494273,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 329,
    "entity": "nico gonzalez",
    "discover_score": 0.09253507255089652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 330,
    "entity": "robin minz",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 331,
    "entity": "laroma24",
    "discover_score": 0.09248320713519066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 332,
    "entity": "عيد الفطر في ايطاليا",
    "discover_score": 0.09245741349220572,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 333,
    "entity": "beşiktaş vs galatasaray",
    "discover_score": 0.09243171174156303,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 334,
    "entity": "emanuela orlandi",
    "discover_score": 0.09240610127745717,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 335,
    "entity": "kelly",
    "discover_score": 0.09238058149989105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 336,
    "entity": "dusan vlahovic",
    "discover_score": 0.09235515181460296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 337,
    "entity": "luca marini",
    "discover_score": 0.09232981163299482,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 338,
    "entity": "todde",
    "discover_score": 0.09230456037206136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 339,
    "entity": "the last of us",
    "discover_score": 0.09227939745432066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 340,
    "entity": "adt - alianza lima",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 341,
    "entity": "mia ceran",
    "discover_score": 0.09222933436569582,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 342,
    "entity": "wolfsburg - heidenheim",
    "discover_score": 0.09220443306685248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 343,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.09217961785515158,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 344,
    "entity": "eid ul fitr 2025 italy",
    "discover_score": 0.09215488817972012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 345,
    "entity": "satyanarayana raju",
    "discover_score": 0.09213024349481246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 346,
    "entity": "wta ranking",
    "discover_score": 0.09210568325974791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 347,
    "entity": "recco",
    "discover_score": 0.09208120693884903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 348,
    "entity": "joao felix milan",
    "discover_score": 0.09205681400138103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 349,
    "entity": "mara maionchi",
    "discover_score": 0.09203250392149208,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 350,
    "entity": "dan sucu",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 351,
    "entity": "fc südtirol",
    "discover_score": 0.09198413025510604,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 352,
    "entity": "shahrukh khan",
    "discover_score": 0.09196006564079447,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 353,
    "entity": "q",
    "discover_score": 0.09193608182831947,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 354,
    "entity": "carpi gubbio",
    "discover_score": 0.09191217831537823,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 355,
    "entity": "claudio lotito",
    "discover_score": 0.09188835460421053,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 356,
    "entity": "leali genoa",
    "discover_score": 0.09186461020154493,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 357,
    "entity": "diretta it",
    "discover_score": 0.09184094461854578,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-30 13:40:55",
  "trends_count": 357,
  "top_score": 20.864407218533476,
  "runtime_minutes": 3.016200391451518,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
