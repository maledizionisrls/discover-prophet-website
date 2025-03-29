const trendData = [
  {
    "rank": 1,
    "entity": "venezia - bologna",
    "discover_score": 21.530059403595367,
    "score_1h": 71.33620689655173,
    "score_4h": 22.5609243697479,
    "score_7d": 2.0828402366863905,
    "extracted_entities": "Venezia - Bologna - Viaggio - Turismo - Trasporti"
  },
  {
    "rank": 8,
    "entity": "cambio ora 2025",
    "discover_score": 16.69174547696425,
    "score_1h": 31.594827586206897,
    "score_4h": 23.83823529411765,
    "score_7d": 11.837278106508876,
    "extracted_entities": "Cambio ora - 2025 - Ora legale - Ora solare"
  },
  {
    "rank": 50,
    "entity": "fortnite",
    "discover_score": 13.872677890548985,
    "score_1h": 37.29310344827586,
    "score_4h": 24.331932773109244,
    "score_7d": 29.21301775147929,
    "extracted_entities": "Fortnite - Videogioco - Epic Games - Battle Royale - Gioco online"
  },
  {
    "rank": 38,
    "entity": "ghibli",
    "discover_score": 11.579939654726365,
    "score_1h": 28.387931034482758,
    "score_4h": 34.80252100840336,
    "score_7d": 6.621301775147929,
    "extracted_entities": "Studio Ghibli - Film d'animazione - Hayao Miyazaki - Totoro - Spirited Away"
  },
  {
    "rank": 3,
    "entity": "cosenza - pisa",
    "discover_score": 11.552517169374777,
    "score_1h": 53.71551724137931,
    "score_4h": 23.418067226890756,
    "score_7d": 1.6538461538461537,
    "extracted_entities": "Cosenza - Pisa - Calcio - Serie B - Partita"
  },
  {
    "rank": 6,
    "entity": "venezia bologna",
    "discover_score": 9.438998116514139,
    "score_1h": 69.09482758620689,
    "score_4h": 22.601649027811963,
    "score_7d": 2.0266272189349115,
    "extracted_entities": "Venezia - Bologna - Viaggio - Turismo - Città"
  },
  {
    "rank": 7,
    "entity": "modena - catanzaro",
    "discover_score": 8.999606505307675,
    "score_1h": 34.64655172413793,
    "score_4h": 24.13235294117647,
    "score_7d": 1.7573964497041419,
    "extracted_entities": "Modena - Catanzaro - Città - Confronto"
  },
  {
    "rank": 2,
    "entity": "sampdoria - frosinone",
    "discover_score": 8.268419149205409,
    "score_1h": 57.0,
    "score_4h": 15.084033613445378,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "Sampdoria - Frosinone - Calcio - Serie B - Partita"
  },
  {
    "rank": 5,
    "entity": "como empoli",
    "discover_score": 7.814119754784981,
    "score_1h": 57.36206896551724,
    "score_4h": 19.497899159663866,
    "score_7d": 1.4940828402366866,
    "extracted_entities": "Como - Empoli - Calcio - Partita"
  },
  {
    "rank": 42,
    "entity": "milan futuro",
    "discover_score": 6.387253343220417,
    "score_1h": 56.37068965517241,
    "score_4h": 21.266806722689076,
    "score_7d": 3.6153846153846154,
    "extracted_entities": "Milan - Futuro - Calcio - Squadra - Serie A"
  },
  {
    "rank": 19,
    "entity": "napoli milan",
    "discover_score": 6.045059699904983,
    "score_1h": 9.060344827586206,
    "score_4h": 8.014705882352942,
    "score_7d": 9.094674556213018,
    "extracted_entities": "Napoli - Milan - Calcio - Serie A - Partita"
  },
  {
    "rank": 11,
    "entity": "juve genoa",
    "discover_score": 5.086233275575537,
    "score_1h": 8.431034482758621,
    "score_4h": 8.80252100840336,
    "score_7d": 3.893491124260355,
    "extracted_entities": "Juventus - Genoa - Calcio - Serie A - Partita"
  },
  {
    "rank": 9,
    "entity": "29 marzo eclissi solare",
    "discover_score": 4.617370551276121,
    "score_1h": 5.008620689655173,
    "score_4h": 5.857142857142858,
    "score_7d": 4.304733727810651,
    "extracted_entities": "29 marzo - Eclissi solare - Evento astronomico"
  },
  {
    "rank": 15,
    "entity": "scossa terremoto myanmar",
    "discover_score": 4.599366094970691,
    "score_1h": 2.793103448275862,
    "score_4h": 6.1722689075630255,
    "score_7d": 5.579881656804734,
    "extracted_entities": "Scossa - Terremoto - Myanmar"
  },
  {
    "rank": 48,
    "entity": "bayern monaco",
    "discover_score": 4.1730341226286845,
    "score_1h": 26.379310344827587,
    "score_4h": 12.718487394957982,
    "score_7d": 3.6745562130177514,
    "extracted_entities": "Bayern Monaco - Calcio - Bundesliga - Squadra di calcio - Germania"
  },
  {
    "rank": 16,
    "entity": "assalto portavalori",
    "discover_score": 3.86487920903994,
    "score_1h": 0.33620689655172414,
    "score_4h": 4.23109243697479,
    "score_7d": 5.718934911242604,
    "extracted_entities": "Assalto - Portavalori - Sicurezza - Crimine - Rapina"
  },
  {
    "rank": 13,
    "entity": "roma - fiorentina",
    "discover_score": 3.7386904688235383,
    "score_1h": 30.551724137931036,
    "score_4h": 16.56512605042017,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "Roma - Fiorentina - Partita di calcio - Serie A - Squadre di calcio"
  },
  {
    "rank": 14,
    "entity": "eprice",
    "discover_score": 3.3553443016727793,
    "score_1h": 1.0775862068965516,
    "score_4h": 4.0588235294117645,
    "score_7d": 4.375739644970414,
    "extracted_entities": "ePrice - E-commerce - Tecnologia - Offerte - Acquisti online"
  },
  {
    "rank": 4,
    "entity": "andrea pucci",
    "discover_score": 3.19638335418776,
    "score_1h": 1.896551724137931,
    "score_4h": 4.4600840336134455,
    "score_7d": 2.026627218934911,
    "extracted_entities": "Andrea Pucci - Comico - Spettacoli - Televisione - Italia"
  },
  {
    "rank": 28,
    "entity": "lecce roma",
    "discover_score": 3.1268750808147527,
    "score_1h": 4.405172413793103,
    "score_4h": 3.008403361344538,
    "score_7d": 6.520710059171598,
    "extracted_entities": "Lecce - Roma - Calcio - Serie A - Partita"
  },
  {
    "rank": 10,
    "entity": "bayern monaco - fc st. pauli",
    "discover_score": 2.9165374378240365,
    "score_1h": 33.44827586206897,
    "score_4h": 11.718487394957982,
    "score_7d": 0.4526627218934911,
    "extracted_entities": "Bayern Monaco - FC St. Pauli - Calcio - Partita - Bundesliga"
  },
  {
    "rank": 27,
    "entity": "the voice senior",
    "discover_score": 2.900559611389453,
    "score_1h": 3.982758620689655,
    "score_4h": 3.4285714285714284,
    "score_7d": 5.236686390532544,
    "extracted_entities": "The Voice Senior - Programma TV - Concorrenti - Giudici - Musica"
  },
  {
    "rank": 12,
    "entity": "espanyol - atlético madrid",
    "discover_score": 2.7130875212320964,
    "score_1h": 33.52586206896552,
    "score_4h": 9.331932773109244,
    "score_7d": 0.878698224852071,
    "extracted_entities": "Espanyol - Atlético Madrid - Partita di calcio - La Liga"
  },
  {
    "rank": 17,
    "entity": "richard jewell",
    "discover_score": 2.2959778336742507,
    "score_1h": 3.129310344827586,
    "score_4h": 4.40126050420168,
    "score_7d": 2.594674556213018,
    "extracted_entities": "Richard Jewell - Attentato alle Olimpiadi di Atlanta 1996 - Sicurezza - FBI - Media"
  },
  {
    "rank": 34,
    "entity": "le assaggiatrici (film)",
    "discover_score": 2.2532641093170054,
    "score_1h": 0.11206896551724138,
    "score_4h": 0.6176470588235294,
    "score_7d": 6.393491124260355,
    "extracted_entities": "Le assaggiatrici - Film"
  },
  {
    "rank": 18,
    "entity": "gil vicente - benfica",
    "discover_score": 2.131587347930698,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.22899159663865545,
    "score_7d": 5.047337278106509,
    "extracted_entities": "Gil Vicente - Benfica - Calcio - Partita - Portogallo"
  },
  {
    "rank": 23,
    "entity": "pilar fogliati",
    "discover_score": 1.9100525634425967,
    "score_1h": 1.7758620689655171,
    "score_4h": 2.6764705882352944,
    "score_7d": 3.174556213017752,
    "extracted_entities": "Pilar Fogliati"
  },
  {
    "rank": 22,
    "entity": "real sociedad - valladolid",
    "discover_score": 1.850735590639869,
    "score_1h": 1.293103448275862,
    "score_4h": 5.439075630252101,
    "score_7d": 1.4615384615384617,
    "extracted_entities": "Real Sociedad - Valladolid - Partita di calcio - La Liga"
  },
  {
    "rank": 32,
    "entity": "superbike",
    "discover_score": 1.7649475015805631,
    "score_1h": 6.0,
    "score_4h": 5.676470588235294,
    "score_7d": 1.485207100591716,
    "extracted_entities": "Superbike - Campionato Mondiale Superbike - Corse motociclistiche - Piloti - Moto"
  },
  {
    "rank": 46,
    "entity": "inter udinese",
    "discover_score": 1.6051462067949536,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.8151260504201681,
    "score_7d": 4.497041420118343,
    "extracted_entities": "Inter - Udinese - Calcio - Serie A - Partita"
  },
  {
    "rank": 43,
    "entity": "spezia - brescia",
    "discover_score": 1.3031806237879242,
    "score_1h": 0.0,
    "score_4h": 0.43067226890756305,
    "score_7d": 3.8136094674556213,
    "extracted_entities": "Spezia - Brescia - Calcio - Serie B - Partita"
  },
  {
    "rank": 30,
    "entity": "fa cup",
    "discover_score": 0.9977393877888402,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.6407563025210085,
    "score_7d": 2.443786982248521,
    "extracted_entities": "FA Cup - Calcio - Inghilterra - Torneo - Squadre"
  },
  {
    "rank": 26,
    "entity": "fatima trotta",
    "discover_score": 0.9364329281144907,
    "score_1h": 10.801724137931036,
    "score_4h": 4.203781512605042,
    "score_7d": 0.27514792899408286,
    "extracted_entities": "Fatima Trotta - Personaggio televisivo - Italia - Spettacolo"
  },
  {
    "rank": 41,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.8914163519440471,
    "score_1h": 4.482758620689655,
    "score_4h": 1.6470588235294117,
    "score_7d": 1.621301775147929,
    "extracted_entities": "Eid ul-Fitr - 2025 - Festa islamica - Celebrazione religiosa"
  },
  {
    "rank": 24,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.867261675025699,
    "score_1h": 0.0,
    "score_4h": 0.6407563025210083,
    "score_7d": 1.9171597633136095,
    "extracted_entities": "Sciopero - Treni - Aprile 2025"
  },
  {
    "rank": 40,
    "entity": "simona cavallari",
    "discover_score": 0.8128960592054758,
    "score_1h": 3.396551724137931,
    "score_4h": 3.0630252100840334,
    "score_7d": 0.5710059171597633,
    "extracted_entities": "Simona Cavallari - Attrice - Italia"
  },
  {
    "rank": 25,
    "entity": "crotone - latina",
    "discover_score": 0.722944394842847,
    "score_1h": 5.086206896551724,
    "score_4h": 1.7794117647058822,
    "score_7d": 0.7958579881656805,
    "extracted_entities": "Crotone - Latina - Calcio - Serie C - Partita"
  },
  {
    "rank": 20,
    "entity": "natasha stefanenko",
    "discover_score": 0.6938025296527012,
    "score_1h": 14.439655172413794,
    "score_4h": 2.3308076368622763,
    "score_7d": 0.378698224852071,
    "extracted_entities": "Natasha Stefanenko - Personaggio pubblico - Televisione - Moda - Italia"
  },
  {
    "rank": 47,
    "entity": "qualifiche motogp",
    "discover_score": 0.5599496005807392,
    "score_1h": 2.060344827586207,
    "score_4h": 1.6680672268907561,
    "score_7d": 0.5946745562130178,
    "extracted_entities": "Qualifiche - MotoGP - Gare - Piloti - Circuiti"
  },
  {
    "rank": 31,
    "entity": "triestina - feralpisalò",
    "discover_score": 0.5488395276799856,
    "score_1h": 1.4741379310344827,
    "score_4h": 1.3130252100840336,
    "score_7d": 0.6301775147928994,
    "extracted_entities": "Triestina - Feralpisalò - Calcio - Partita - Serie C"
  },
  {
    "rank": 45,
    "entity": "goa",
    "discover_score": 0.5307554288501012,
    "score_1h": 4.568965517241379,
    "score_4h": 0.8004201680672269,
    "score_7d": 1.0177514792899407,
    "extracted_entities": "Goa - India - Turismo - Spiagge - Cultura"
  },
  {
    "rank": 37,
    "entity": "la lista dei miei desideri film",
    "discover_score": 0.5059724789227821,
    "score_1h": 0.0,
    "score_4h": 0.49789915966386555,
    "score_7d": 1.0680473372781065,
    "extracted_entities": "La lista dei miei desideri - Film - Trama - Cast - Recensioni"
  },
  {
    "rank": 35,
    "entity": "simona tagli",
    "discover_score": 0.4995249693321694,
    "score_1h": 10.094827586206897,
    "score_4h": 2.1029411764705883,
    "score_7d": 0.15680473372781067,
    "extracted_entities": "Simona Tagli - Personaggio televisivo - Italia - Anni '90 - Showgirl"
  },
  {
    "rank": 21,
    "entity": "messina - team altamura",
    "discover_score": 0.4975463890694873,
    "score_1h": 1.543103448275862,
    "score_4h": 0.6527724060335431,
    "score_7d": 0.7485207100591716,
    "extracted_entities": "Messina - Team Altamura - Calcio - Partita - Serie D"
  },
  {
    "rank": 44,
    "entity": "wind warning",
    "discover_score": 0.46942111945801357,
    "score_1h": 0.0,
    "score_4h": 0.09033613445378151,
    "score_7d": 1.289940828402367,
    "extracted_entities": "Wind - Warning - Weather Alert - Severe Weather - Safety"
  },
  {
    "rank": 29,
    "entity": "intelligenza artificiale su whatsapp",
    "discover_score": 0.41072173765984454,
    "score_1h": 3.120689655172414,
    "score_4h": 1.2620073133856053,
    "score_7d": 0.23372781065088757,
    "extracted_entities": "Intelligenza artificiale - WhatsApp - Tecnologia"
  },
  {
    "rank": 33,
    "entity": "gt vs mi",
    "discover_score": 0.40591805792995556,
    "score_1h": 1.0172413793103448,
    "score_4h": 0.9243697478991596,
    "score_7d": 0.4171597633136095,
    "extracted_entities": "Google Trends - GT - MI - Confronto"
  },
  {
    "rank": 36,
    "entity": "nuove regole passaporto",
    "discover_score": 0.3604029384142932,
    "score_1h": 6.706896551724137,
    "score_4h": 1.0714285714285714,
    "score_7d": 0.21597633136094674,
    "extracted_entities": "Passaporto - Regole - Aggiornamenti"
  },
  {
    "rank": 39,
    "entity": "mantova sudtirol",
    "discover_score": 0.3056991541564936,
    "score_1h": 0.3448275862068965,
    "score_4h": 0.15966386554621848,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Mantova - Sudtirol - Calcio - Partita - Serie B"
  },
  {
    "rank": 49,
    "entity": "fabio balaso",
    "discover_score": 0.26155794817369526,
    "score_1h": 0.0,
    "score_4h": 0.884453781512605,
    "score_7d": 0.05029585798816568,
    "extracted_entities": "Fabio Balaso - Pallavolo - Giocatore - Sport"
  },
  {
    "rank": 51,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.12748206434910195,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "espanyol vs atlético madrid",
    "discover_score": 0.12716738907202113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "lol",
    "discover_score": 0.12686021143920512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "milan napoli",
    "discover_score": 0.12656021288744118,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "ciclismo oggi",
    "discover_score": 0.12626709406233544,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 0.12598057333163432,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "tommy cassi",
    "discover_score": 0.1257003854380681,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "daniele silvestri",
    "discover_score": 0.12542628027641056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "samp",
    "discover_score": 0.12515802178136212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "leverkusen - bochum",
    "discover_score": 0.12489538691450888,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "paestum",
    "discover_score": 0.12463816474003105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "pescara arezzo",
    "discover_score": 0.12438615558006041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "babygirl",
    "discover_score": 0.12413917024165175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "monica setta",
    "discover_score": 0.12389702930825783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "barbara de rossi",
    "discover_score": 0.1236595624894035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "federico faggin",
    "discover_score": 0.12342660802295771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "ibrahimovic",
    "discover_score": 0.12319801212501763,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "eid al fitr 2025 italia",
    "discover_score": 0.1229736284829599,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "sassuolo reggiana",
    "discover_score": 0.12275331778768661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "celtic - hearts",
    "discover_score": 0.1225369473015127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "estonia",
    "discover_score": 0.12232439045850875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "challenger napoli",
    "discover_score": 0.12211552649443932,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "allerta vento",
    "discover_score": 0.12191024010372484,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "taylor fritz",
    "discover_score": 0.12170842112111058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "fortnite status",
    "discover_score": 0.12150996422595373,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "عيد الفطر",
    "discover_score": 0.12131476866724165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "bayern vs fc st. pauli",
    "discover_score": 0.1211227380076341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "perugia - pineto",
    "discover_score": 0.12093377988498329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "valeria graci",
    "discover_score": 0.12074780578993015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "joao felix",
    "discover_score": 0.12056473085830295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "pelicans - warriors",
    "discover_score": 0.12038447367716024,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "viterbo",
    "discover_score": 0.1202069561034244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "ancelotti real madrid",
    "discover_score": 0.12003210309414468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.11985984254751274,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "diego armando maradona",
    "discover_score": 0.11969010515383002,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "castello sforzesco",
    "discover_score": 0.11952282425569376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "jd",
    "discover_score": 0.11935793571673116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "meteo milano",
    "discover_score": 0.11919537779826668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "new zealand vs pakistan",
    "discover_score": 0.11903509104335824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "miami open 2025 tabellone",
    "discover_score": 0.11887701816768416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "armando izzo",
    "discover_score": 0.11872110395680456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "e poi si vede",
    "discover_score": 0.11856729516935871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "muhammad abbas",
    "discover_score": 0.11841554044579458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "عيد الفطر 2025",
    "discover_score": 0.11826579022225828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "ciclismo oggi in tv",
    "discover_score": 0.11811799664929994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "probabili formazioni gazzetta",
    "discover_score": 0.11797211351507844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "spinazzola",
    "discover_score": 0.11782809617277233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "will smith",
    "discover_score": 0.11768590147192458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "mia ceran",
    "discover_score": 0.117545487693471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "andrew tate",
    "discover_score": 0.1174068144882187,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "polizze catastrofali proroga",
    "discover_score": 0.11726984281855898,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "nuggets - jazz",
    "discover_score": 0.11713453490321421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "fiorentina atalanta",
    "discover_score": 0.11700085416483254,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "pistons - cavaliers",
    "discover_score": 0.11686876518025725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "fabio cannavaro",
    "discover_score": 0.11673823363331018,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "brigitte bardot",
    "discover_score": 0.11660922626993882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "cannavaro",
    "discover_score": 0.11648171085558807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "algarve",
    "discover_score": 0.11635565613466622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 0.1162310317919839,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.11610780841605253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "scisciano",
    "discover_score": 0.11598595746413704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.11586545122896322,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "picierno",
    "discover_score": 0.11574626280698765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "openai",
    "discover_score": 0.11562836606814388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.11551173562698316,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "the town",
    "discover_score": 0.11539634681513465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "retegui",
    "discover_score": 0.11528217565501304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "the voice senior 2025",
    "discover_score": 0.11516919883470787,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "pianese - pontedera",
    "discover_score": 0.11505739368399082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "bodrum - fenerbahçe",
    "discover_score": 0.11494673815138318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "azione",
    "discover_score": 0.11483721078222732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "michela moioli snowboard",
    "discover_score": 0.11472879069771086,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.11462145757479461,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "belve",
    "discover_score": 0.11451519162699778,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "tradimento",
    "discover_score": 0.11440997358599793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "sondrio",
    "discover_score": 0.11430578468400439,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 0.11420260663686677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "michael magnesi",
    "discover_score": 0.11410042162788261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "sex and the city",
    "discover_score": 0.11399921229226986,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "mission impossible",
    "discover_score": 0.11389896170227155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "valtellina",
    "discover_score": 0.11379965335286309,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "liam neeson",
    "discover_score": 0.11370127114803248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "bucks - knicks",
    "discover_score": 0.11360379938760694,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "latte crudo",
    "discover_score": 0.11350722275459996,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "allegri roma",
    "discover_score": 0.11341152630305443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "denzel washington",
    "discover_score": 0.11331669544635907,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "aspromonte",
    "discover_score": 0.11322271594601621,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "joël dicker",
    "discover_score": 0.11312957390084036,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "xai",
    "discover_score": 0.11303725573656806,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "botoșani - farul costanza",
    "discover_score": 0.11294574819586044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "meteo milano oggi",
    "discover_score": 0.11285503832868103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "vanuatu",
    "discover_score": 0.11276511348303216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "santa rosa",
    "discover_score": 0.11267596129603387,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "queen",
    "discover_score": 0.112587569685331,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "nets - clippers",
    "discover_score": 0.11249992684081335,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "f1 giappone",
    "discover_score": 0.11241302121663614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "dimitrov",
    "discover_score": 0.11232684152352747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "beppe severgnini",
    "discover_score": 0.11224137672137072,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "perugia calcio",
    "discover_score": 0.11215661601205026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "patti smith",
    "discover_score": 0.11207254883254941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "vance",
    "discover_score": 0.11198916484829012,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.11190645394670419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "andrea pisani",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "penelope cruz",
    "discover_score": 0.11174301201430423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "timberwolves - suns",
    "discover_score": 0.11166226181360236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "grigor dimitrov",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "previsioni meteo",
    "discover_score": 0.11150265651526611,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "partite oggi diretta",
    "discover_score": 0.1114237834224703,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "rocco papaleo",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "moglie brignano",
    "discover_score": 0.1112678527400893,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "lauren sánchez",
    "discover_score": 0.1111907782375225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "tom cruise",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "re carlo iii",
    "discover_score": 0.11103836989850041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "michelle hunziker",
    "discover_score": 0.11096302014754543,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "bayer leverkusen",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "nuno tavares",
    "discover_score": 0.11081399087085796,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "woke",
    "discover_score": 0.11074029635326887,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "ben affleck",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "meteo brescia",
    "discover_score": 0.11059451116633974,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "millionday",
    "discover_score": 0.11052240635894325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "balestrate",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "stefania cappa",
    "discover_score": 0.11037973797755445,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "rush hour",
    "discover_score": 0.11030916105670341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "antonio di bella",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "monica maggioni",
    "discover_score": 0.11016948932113223,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "bezos matrimonio",
    "discover_score": 0.11010038189372698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "twitter down",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "val kilmer",
    "discover_score": 0.10996359325514149,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "achille lauro",
    "discover_score": 0.10989590011342192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "lurago marinone",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "enzo bearzot",
    "discover_score": 0.10976188716528863,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "hong kong",
    "discover_score": 0.109695556062937,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "taken",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "downton abbey 3",
    "discover_score": 0.10956421711282004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "swa",
    "discover_score": 0.10949919856020456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "brian may",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "corsa contro il tempo",
    "discover_score": 0.10937043723787641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "strasburgo lione",
    "discover_score": 0.10930668431451801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "orvieto",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "geppi cucciari",
    "discover_score": 0.10918040921277318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "favignana",
    "discover_score": 0.10911787739533732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "sezione 8 film",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "schumacher",
    "discover_score": 0.10899400174030915,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "civita castellana",
    "discover_score": 0.10893264874461546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "الزمالك ضد سيراميكا كليوباترا",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "andrea belotti",
    "discover_score": 0.10881109009275462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "range rover",
    "discover_score": 0.10875087572846497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "valerio aprea",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.10863155568765029,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "galeazzo bignami",
    "discover_score": 0.10857244172444135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "superenalotto 28 marzo 2025",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "luisa ranieri",
    "discover_score": 0.10845528569696827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "benedetta orlando",
    "discover_score": 0.10839723574112384,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "atf",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "julio iglesias",
    "discover_score": 0.10828217268655647,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "valore bitcoin",
    "discover_score": 0.10822515206702722,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "massimo giletti",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "infernetto",
    "discover_score": 0.10811211428311204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "varenne",
    "discover_score": 0.10805608994619015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "milano meteo",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "jodie foster",
    "discover_score": 0.10794501286621618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "starlink",
    "discover_score": 0.10788995327805997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "treviso",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "holland",
    "discover_score": 0.10778077528321581,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "alexis sánchez",
    "discover_score": 0.1077266503395374,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "ferrovie dello stato",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.10761931258496127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "ministro urso",
    "discover_score": 0.10756609352725875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "sarah jessica parker",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "pikachu turchia",
    "discover_score": 0.10746053978060788,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "nicola porro",
    "discover_score": 0.1074081991183849,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "lady gaga milano",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "sofia vergara",
    "discover_score": 0.10730437560986536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "vladimir putin",
    "discover_score": 0.10725288704833526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "marracash",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "david hasselhoff",
    "discover_score": 0.1071507423312361,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "blake lively",
    "discover_score": 0.10710008070405592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "brescia",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "messi",
    "discover_score": 0.10699956552492287,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "nonostante film",
    "discover_score": 0.10694970673154594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "bariloche",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "omicidio pierina",
    "discover_score": 0.10685077390921101,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "diretta it",
    "discover_score": 0.10680169485648523,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "rete 4 diretta",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "unipol arena",
    "discover_score": 0.1067042991692422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "downton abbey",
    "discover_score": 0.10665597771691566,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-29 15:40:24",
  "trends_count": 236,
  "top_score": 21.530059403595367,
  "runtime_minutes": 2.344768702983856,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
