const trendData = [
  {
    "rank": 1,
    "entity": "venezia - bologna",
    "discover_score": 19.10761509625013,
    "score_1h": 61.06896551724138,
    "score_4h": 19.039915966386552,
    "score_7d": 2.174556213017752,
    "extracted_entities": "Venezia - Bologna - Viaggio - Turismo - Trasporti"
  },
  {
    "rank": 7,
    "entity": "cambio ora 2025",
    "discover_score": 18.590522340239247,
    "score_1h": 22.344827586206897,
    "score_4h": 19.16382159558384,
    "score_7d": 18.494082840236686,
    "extracted_entities": "Cambio ora - 2025 - Ora legale - Ora solare"
  },
  {
    "rank": 2,
    "entity": "sampdoria - frosinone",
    "discover_score": 14.045582256230556,
    "score_1h": 39.71551724137931,
    "score_4h": 23.61134453781513,
    "score_7d": 1.71301775147929,
    "extracted_entities": "Sampdoria - Frosinone - Calcio - Serie B - Partita"
  },
  {
    "rank": 48,
    "entity": "fortnite",
    "discover_score": 13.540685345224384,
    "score_1h": 23.25,
    "score_4h": 26.12394957983193,
    "score_7d": 25.573964497041423,
    "extracted_entities": "Fortnite - Videogioco - Epic Games - Battle Royale - Gioco online"
  },
  {
    "rank": 39,
    "entity": "ghibli",
    "discover_score": 10.511129645672332,
    "score_1h": 32.26724137931035,
    "score_4h": 27.502100840336134,
    "score_7d": 10.272189349112427,
    "extracted_entities": "Studio Ghibli - Film d'animazione - Hayao Miyazaki - Totoro - Spirited Away"
  },
  {
    "rank": 6,
    "entity": "venezia bologna",
    "discover_score": 8.34175920393918,
    "score_1h": 61.775862068965516,
    "score_4h": 19.004201680672267,
    "score_7d": 2.162721893491124,
    "extracted_entities": "Venezia - Bologna - Viaggio - Turismo - Città"
  },
  {
    "rank": 5,
    "entity": "como empoli",
    "discover_score": 7.563175315777783,
    "score_1h": 73.13793103448276,
    "score_4h": 18.457983193277308,
    "score_7d": 1.5562130177514795,
    "extracted_entities": "Como - Empoli - Calcio - Serie B"
  },
  {
    "rank": 3,
    "entity": "cosenza - pisa",
    "discover_score": 6.517764840633687,
    "score_1h": 39.353448275862064,
    "score_4h": 11.865546218487395,
    "score_7d": 1.698224852071006,
    "extracted_entities": "Cosenza - Pisa - Calcio - Serie B - Partita"
  },
  {
    "rank": 12,
    "entity": "roma - fiorentina",
    "discover_score": 5.307210960473567,
    "score_1h": 14.913793103448276,
    "score_4h": 16.483193277310924,
    "score_7d": 1.5946745562130178,
    "extracted_entities": "Roma - Fiorentina - Calcio - Serie A - Partita"
  },
  {
    "rank": 47,
    "entity": "milan futuro",
    "discover_score": 5.295697014303835,
    "score_1h": 41.03448275862069,
    "score_4h": 15.97058823529412,
    "score_7d": 4.2514792899408285,
    "extracted_entities": "Milan - Futuro - Calcio - Squadra - Serie A"
  },
  {
    "rank": 10,
    "entity": "juve genoa",
    "discover_score": 4.739049220060136,
    "score_1h": 10.603448275862068,
    "score_4h": 4.884453781512605,
    "score_7d": 5.479289940828402,
    "extracted_entities": "Juventus - Genoa - Calcio - Serie A - Partita"
  },
  {
    "rank": 19,
    "entity": "napoli milan",
    "discover_score": 4.71568609332699,
    "score_1h": 3.586206896551724,
    "score_4h": 6.334033613445379,
    "score_7d": 6.792899408284024,
    "extracted_entities": "Napoli - Milan - Calcio - Serie A - Partita"
  },
  {
    "rank": 4,
    "entity": "andrea pucci",
    "discover_score": 4.49723421758154,
    "score_1h": 3.560344827586207,
    "score_4h": 2.6470588235294117,
    "score_7d": 4.168639053254438,
    "extracted_entities": "Andrea Pucci - Comico - Italia"
  },
  {
    "rank": 8,
    "entity": "modena - catanzaro",
    "discover_score": 4.4035942057275,
    "score_1h": 14.181034482758623,
    "score_4h": 12.911764705882353,
    "score_7d": 1.227810650887574,
    "extracted_entities": "Modena - Catanzaro - Città - Confronto"
  },
  {
    "rank": 14,
    "entity": "scossa terremoto myanmar",
    "discover_score": 3.938288611748708,
    "score_1h": 11.206896551724139,
    "score_4h": 6.695378151260504,
    "score_7d": 3.8461538461538463,
    "extracted_entities": "Scossa - Terremoto - Myanmar"
  },
  {
    "rank": 9,
    "entity": "29 marzo eclissi solare",
    "discover_score": 3.230583791354134,
    "score_1h": 9.560344827586206,
    "score_4h": 5.371848739495799,
    "score_7d": 2.7455621301775146,
    "extracted_entities": "Eclissi solare - 29 marzo - Evento astronomico"
  },
  {
    "rank": 13,
    "entity": "eprice",
    "discover_score": 3.214005168040998,
    "score_1h": 1.3275862068965516,
    "score_4h": 3.168067226890756,
    "score_7d": 4.538461538461538,
    "extracted_entities": "ePrice - E-commerce - Tecnologia - Shopping online"
  },
  {
    "rank": 29,
    "entity": "the voice senior",
    "discover_score": 3.2000147988559258,
    "score_1h": 1.6293103448275863,
    "score_4h": 3.0525210084033616,
    "score_7d": 6.831360946745562,
    "extracted_entities": "The Voice Senior - Programma TV - Musica - Concorrenti - Giudici"
  },
  {
    "rank": 15,
    "entity": "assalto portavalori",
    "discover_score": 3.1814303170374916,
    "score_1h": 5.612068965517242,
    "score_4h": 3.8508403361344534,
    "score_7d": 4.331360946745562,
    "extracted_entities": "Assalto - Portavalori - Crimine - Sicurezza - Rapina"
  },
  {
    "rank": 31,
    "entity": "lecce roma",
    "discover_score": 2.712171267174847,
    "score_1h": 1.1206896551724137,
    "score_4h": 1.9558823529411766,
    "score_7d": 6.44378698224852,
    "extracted_entities": "Lecce - Roma - Calcio - Serie A - Partita"
  },
  {
    "rank": 40,
    "entity": "paestum",
    "discover_score": 2.6507475966007323,
    "score_1h": 2.2155172413793105,
    "score_4h": 2.6218487394957983,
    "score_7d": 6.221893491124261,
    "extracted_entities": "Paestum - Sito archeologico - Templi greci - Italia - Patrimonio UNESCO"
  },
  {
    "rank": 16,
    "entity": "richard jewell",
    "discover_score": 2.2828721572990522,
    "score_1h": 7.767241379310345,
    "score_4h": 4.008403361344538,
    "score_7d": 2.71301775147929,
    "extracted_entities": "Richard Jewell - Film - Attentato alle Olimpiadi di Atlanta 1996 - Sicurezza - FBI"
  },
  {
    "rank": 17,
    "entity": "gil vicente - benfica",
    "discover_score": 2.183920282020679,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.2857142857142857,
    "score_7d": 5.0266272189349115,
    "extracted_entities": "Gil Vicente - Benfica - Calcio - Partita - Portogallo"
  },
  {
    "rank": 34,
    "entity": "superbike",
    "discover_score": 2.1072706569373794,
    "score_1h": 3.387931034482759,
    "score_4h": 1.861344537815126,
    "score_7d": 4.710059171597633,
    "extracted_entities": "Superbike - Campionato Mondiale Superbike - Moto - Corse motociclistiche - Piloti"
  },
  {
    "rank": 11,
    "entity": "bayern monaco - fc st. pauli",
    "discover_score": 1.882014585346151,
    "score_1h": 43.6551724137931,
    "score_4h": 5.376050420168068,
    "score_7d": 1.0088757396449703,
    "extracted_entities": "Bayern Monaco - FC St. Pauli - Calcio - Bundesliga - Partita"
  },
  {
    "rank": 25,
    "entity": "fulham - crystal palace",
    "discover_score": 1.776216916422266,
    "score_1h": 0.3017241379310345,
    "score_4h": 6.5,
    "score_7d": 0.970414201183432,
    "extracted_entities": "Fulham - Crystal Palace - Calcio - Premier League - Partita"
  },
  {
    "rank": 23,
    "entity": "real sociedad - valladolid",
    "discover_score": 1.6565852882584902,
    "score_1h": 0.47413793103448276,
    "score_4h": 6.352941176470589,
    "score_7d": 0.7633136094674556,
    "extracted_entities": "Real Sociedad - Valladolid - Partita di calcio - La Liga"
  },
  {
    "rank": 24,
    "entity": "pilar fogliati",
    "discover_score": 1.5901953811451643,
    "score_1h": 2.0086206896551726,
    "score_4h": 4.686974789915967,
    "score_7d": 1.35207100591716,
    "extracted_entities": "Pilar Fogliati"
  },
  {
    "rank": 18,
    "entity": "espanyol - atlético madrid",
    "discover_score": 1.5542437266288567,
    "score_1h": 21.491379310344826,
    "score_4h": 5.76518054920713,
    "score_7d": 0.6627218934911243,
    "extracted_entities": "Espanyol - Atlético Madrid - Partita di calcio - La Liga"
  },
  {
    "rank": 28,
    "entity": "cittadinanza italiana ius sanguinis",
    "discover_score": 1.4492870643619689,
    "score_1h": 0.0,
    "score_4h": 0.43487394957983194,
    "score_7d": 3.7958579881656807,
    "extracted_entities": "Cittadinanza italiana - Ius sanguinis - Diritto di cittadinanza - Legge italiana"
  },
  {
    "rank": 45,
    "entity": "terence hill",
    "discover_score": 1.2763505299454954,
    "score_1h": 6.146551724137931,
    "score_4h": 1.4364034316655534,
    "score_7d": 3.0355029585798814,
    "extracted_entities": "Terence Hill - Attore - Film - Spaghetti Western - Bud Spencer"
  },
  {
    "rank": 46,
    "entity": "spezia - brescia",
    "discover_score": 1.25253361645022,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.2710084033613445,
    "score_7d": 3.8431952662721893,
    "extracted_entities": "Spezia - Brescia - Calcio - Serie B - Partita"
  },
  {
    "rank": 26,
    "entity": "fatima trotta",
    "discover_score": 1.0402685505609857,
    "score_1h": 17.06896551724138,
    "score_4h": 3.838701170844907,
    "score_7d": 0.6005917159763314,
    "extracted_entities": "Fatima Trotta - Personaggio televisivo - Italia - Spettacolo"
  },
  {
    "rank": 27,
    "entity": "natasha stefanenko",
    "discover_score": 0.8604763683157638,
    "score_1h": 16.78448275862069,
    "score_4h": 3.4873949579831933,
    "score_7d": 0.37573964497041423,
    "extracted_entities": "Natasha Stefanenko - Personaggio pubblico - Attrice - Modella - Televisione"
  },
  {
    "rank": 36,
    "entity": "le assaggiatrici (film)",
    "discover_score": 0.8594349059014915,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.36764705882352944,
    "score_7d": 2.3402366863905324,
    "extracted_entities": "Le assaggiatrici - Film"
  },
  {
    "rank": 22,
    "entity": "sciopero treni aprile 2025",
    "discover_score": 0.8391453775245574,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.819327731092437,
    "score_7d": 1.6627218934911243,
    "extracted_entities": "Sciopero - Treni - Aprile 2025"
  },
  {
    "rank": 49,
    "entity": "goa",
    "discover_score": 0.8047658230798608,
    "score_1h": 7.672413793103448,
    "score_4h": 2.359243697478991,
    "score_7d": 0.9970414201183432,
    "extracted_entities": "Goa - Turismo - Spiagge - India - Viaggi"
  },
  {
    "rank": 30,
    "entity": "daniele silvestri",
    "discover_score": 0.6862028165874386,
    "score_1h": 9.862068965517242,
    "score_4h": 1.5588235294117647,
    "score_7d": 0.8905325443786982,
    "extracted_entities": "Daniele Silvestri - Cantautore - Musica Italiana"
  },
  {
    "rank": 21,
    "entity": "messina - team altamura",
    "discover_score": 0.6756899400761202,
    "score_1h": 7.129310344827585,
    "score_4h": 2.0252100840336134,
    "score_7d": 0.48520710059171596,
    "extracted_entities": "Messina - Team Altamura - Calcio - Partita - Serie D"
  },
  {
    "rank": 44,
    "entity": "barbara de rossi",
    "discover_score": 0.6639107929157418,
    "score_1h": 2.7758620689655173,
    "score_4h": 3.0945378151260505,
    "score_7d": 0.22781065088757396,
    "extracted_entities": "Barbara De Rossi"
  },
  {
    "rank": 20,
    "entity": "simona cavallari",
    "discover_score": 0.5347257114845692,
    "score_1h": 12.206896551724139,
    "score_4h": 2.1092436974789917,
    "score_7d": 0.1331360946745562,
    "extracted_entities": "Simona Cavallari - Attrice - Televisione - Cinema"
  },
  {
    "rank": 42,
    "entity": "intelligenza artificiale su whatsapp",
    "discover_score": 0.5270585415510743,
    "score_1h": 0.0,
    "score_4h": 1.3760504201680672,
    "score_7d": 0.6183431952662721,
    "extracted_entities": "Intelligenza artificiale - WhatsApp - Tecnologia"
  },
  {
    "rank": 38,
    "entity": "luca sabbioni",
    "discover_score": 0.5042138201340084,
    "score_1h": 7.422413793103448,
    "score_4h": 1.165966386554622,
    "score_7d": 0.636094674556213,
    "extracted_entities": "Luca Sabbioni"
  },
  {
    "rank": 33,
    "entity": "crotone - latina",
    "discover_score": 0.4541370111104531,
    "score_1h": 0.9310344827586208,
    "score_4h": 0.7436974789915967,
    "score_7d": 0.6863905325443787,
    "extracted_entities": "Crotone - Latina - Calcio - Serie C - Partita"
  },
  {
    "rank": 32,
    "entity": "gt vs mi",
    "discover_score": 0.42563262006202085,
    "score_1h": 0.8189655172413792,
    "score_4h": 0.9096638655462185,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Google Trends - GT - MI - Confronto"
  },
  {
    "rank": 41,
    "entity": "la lista dei miei desideri film",
    "discover_score": 0.41472637095696063,
    "score_1h": 0.0,
    "score_4h": 0.11764705882352941,
    "score_7d": 1.0384615384615385,
    "extracted_entities": "La lista dei miei desideri - Film - Commedia - Drammatico - Jennifer Garner"
  },
  {
    "rank": 37,
    "entity": "simona tagli",
    "discover_score": 0.3901121464459389,
    "score_1h": 6.344827586206897,
    "score_4h": 1.4180672268907564,
    "score_7d": 0.15384615384615385,
    "extracted_entities": "Simona Tagli - Personaggio televisivo - Italia - Anni '90 - Spettacolo"
  },
  {
    "rank": 50,
    "entity": "wind warning",
    "discover_score": 0.3553484999051713,
    "score_1h": 0.0,
    "score_4h": 0.29411764705882354,
    "score_7d": 0.7337278106508875,
    "extracted_entities": "Wind - Warning - Weather Alert - Severe Weather - Safety"
  },
  {
    "rank": 35,
    "entity": "triestina - feralpisalò",
    "discover_score": 0.32951324377484004,
    "score_1h": 0.8448275862068965,
    "score_4h": 0.32142857142857145,
    "score_7d": 0.5325443786982249,
    "extracted_entities": "Triestina - Feralpisalò - Calcio - Partita - Serie C"
  },
  {
    "rank": 43,
    "entity": "mantova sudtirol",
    "discover_score": 0.2881117377930212,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.3025210084033614,
    "score_7d": 0.42899408284023666,
    "extracted_entities": "Mantova - Sudtirol - Calcio - Serie B"
  },
  {
    "rank": 51,
    "entity": "inter udinese",
    "discover_score": 0.12748206434910195,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.12716738907202113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "fabio balaso",
    "discover_score": 0.12686021143920512,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "ciclismo oggi",
    "discover_score": 0.12656021288744118,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "eid ul fitr 2025",
    "discover_score": 0.12626709406233544,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "lol",
    "discover_score": 0.12598057333163432,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "bayern monaco",
    "discover_score": 0.1257003854380681,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "nuove regole passaporto",
    "discover_score": 0.12542628027641056,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "tommy cassi",
    "discover_score": 0.12515802178136212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "espanyol vs atlético madrid",
    "discover_score": 0.12489538691450888,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "leverkusen - bochum",
    "discover_score": 0.12463816474003105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "samp",
    "discover_score": 0.12438615558006041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "ancelotti real madrid",
    "discover_score": 0.12413917024165175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "pescara arezzo",
    "discover_score": 0.12389702930825783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "federico faggin",
    "discover_score": 0.1236595624894035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "allerta vento",
    "discover_score": 0.12342660802295771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "e poi si vede",
    "discover_score": 0.12319801212501763,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "fortnite status",
    "discover_score": 0.1229736284829599,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "ibrahimovic",
    "discover_score": 0.12275331778768661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "taylor fritz",
    "discover_score": 0.1225369473015127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "challenger napoli",
    "discover_score": 0.12232439045850875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "perugia - pineto",
    "discover_score": 0.12211552649443932,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "eid al fitr 2025 italia",
    "discover_score": 0.12191024010372484,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "valeria graci",
    "discover_score": 0.12170842112111058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "sassuolo reggiana",
    "discover_score": 0.12150996422595373,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "joao felix",
    "discover_score": 0.12131476866724165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "viterbo",
    "discover_score": 0.1211227380076341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "pelicans - warriors",
    "discover_score": 0.12093377988498329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "diego armando maradona",
    "discover_score": 0.12074780578993015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "castello sforzesco",
    "discover_score": 0.12056473085830295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "jd",
    "discover_score": 0.12038447367716024,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "alba berlino - virtus bologna",
    "discover_score": 0.1202069561034244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "meteo milano",
    "discover_score": 0.12003210309414468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "armando izzo",
    "discover_score": 0.11985984254751274,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "new zealand vs pakistan",
    "discover_score": 0.11969010515383002,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "mia ceran",
    "discover_score": 0.11952282425569376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "miami open 2025 tabellone",
    "discover_score": 0.11935793571673116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "spinazzola",
    "discover_score": 0.11919537779826668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "orari motogp",
    "discover_score": 0.11903509104335824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "andrew tate",
    "discover_score": 0.11887701816768416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "muhammad abbas",
    "discover_score": 0.11872110395680456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "probabili formazioni gazzetta",
    "discover_score": 0.11856729516935871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "will smith",
    "discover_score": 0.11841554044579458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "algarve",
    "discover_score": 0.11826579022225828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "fiorentina atalanta",
    "discover_score": 0.11811799664929994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "openai",
    "discover_score": 0.11797211351507844,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "fabio cannavaro",
    "discover_score": 0.11782809617277233,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "cannavaro",
    "discover_score": 0.11768590147192458,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "nuggets - jazz",
    "discover_score": 0.117545487693471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "polizze catastrofali proroga",
    "discover_score": 0.1174068144882187,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "brigitte bardot",
    "discover_score": 0.11726984281855898,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "pistons - cavaliers",
    "discover_score": 0.11713453490321421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "scisciano",
    "discover_score": 0.11700085416483254,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "anticipazioni il paradiso delle signore",
    "discover_score": 0.11686876518025725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "diretta it",
    "discover_score": 0.11673823363331018,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "retegui",
    "discover_score": 0.11660922626993882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "arzignano valchiampo - renate",
    "discover_score": 0.11648171085558807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "oroscopo paolo fox capricorno",
    "discover_score": 0.11635565613466622,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "picierno",
    "discover_score": 0.1162310317919839,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "anticipazioni upas un posto al sole",
    "discover_score": 0.11610780841605253,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "azione",
    "discover_score": 0.11598595746413704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "the voice senior 2025",
    "discover_score": 0.11586545122896322,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "the town",
    "discover_score": 0.11574626280698765,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "michela moioli snowboard",
    "discover_score": 0.11562836606814388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "pianese - pontedera",
    "discover_score": 0.11551173562698316,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "bodrum - fenerbahçe",
    "discover_score": 0.11539634681513465,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "kit sopravvivenza 72 ore",
    "discover_score": 0.11528217565501304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "belve",
    "discover_score": 0.11516919883470787,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "sondrio",
    "discover_score": 0.11505739368399082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "babygirl",
    "discover_score": 0.11494673815138318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "tradimento",
    "discover_score": 0.11483721078222732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "عيد الفطر 2025",
    "discover_score": 0.11472879069771086,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "michael magnesi",
    "discover_score": 0.11462145757479461,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "programmi tv stasera prima serata",
    "discover_score": 0.11451519162699778,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "valtellina",
    "discover_score": 0.11440997358599793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "sex and the city",
    "discover_score": 0.11430578468400439,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "mission impossible",
    "discover_score": 0.11420260663686677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "liam neeson",
    "discover_score": 0.11410042162788261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "bucks - knicks",
    "discover_score": 0.11399921229226986,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "latte crudo",
    "discover_score": 0.11389896170227155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "allegri roma",
    "discover_score": 0.11379965335286309,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "denzel washington",
    "discover_score": 0.11370127114803248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "aspromonte",
    "discover_score": 0.11360379938760694,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "joël dicker",
    "discover_score": 0.11350722275459996,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "botoșani - farul costanza",
    "discover_score": 0.11341152630305443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "xai",
    "discover_score": 0.11331669544635907,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "santa rosa",
    "discover_score": 0.11322271594601621,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "vanuatu",
    "discover_score": 0.11312957390084036,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "meteo milano oggi",
    "discover_score": 0.11303725573656806,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "nets - clippers",
    "discover_score": 0.11294574819586044,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "f1 giappone",
    "discover_score": 0.11285503832868103,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "queen",
    "discover_score": 0.11276511348303216,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "dimitrov",
    "discover_score": 0.11267596129603387,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "beppe severgnini",
    "discover_score": 0.112587569685331,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "perugia calcio",
    "discover_score": 0.11249992684081335,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "patti smith",
    "discover_score": 0.11241302121663614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "universitario - sport huancayo",
    "discover_score": 0.11232684152352747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "timberwolves - suns",
    "discover_score": 0.11224137672137072,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "andrea pisani",
    "discover_score": 0.11215661601205026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "penelope cruz",
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
    "entity": "grigor dimitrov",
    "discover_score": 0.11190645394670419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "nuno tavares",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "previsioni meteo",
    "discover_score": 0.11174301201430423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "partite oggi diretta",
    "discover_score": 0.11166226181360236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "rocco papaleo",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "costanza fiction",
    "discover_score": 0.11150265651526611,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "moglie brignano",
    "discover_score": 0.1114237834224703,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "lauren sánchez",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "tom cruise",
    "discover_score": 0.1112678527400893,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "re carlo iii",
    "discover_score": 0.1111907782375225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "michelle hunziker",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "bayer leverkusen",
    "discover_score": 0.11103836989850041,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "tuscia",
    "discover_score": 0.11096302014754543,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "woke",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "meteo brescia",
    "discover_score": 0.11081399087085796,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "ben affleck",
    "discover_score": 0.11074029635326887,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "millionday",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "lurago marinone",
    "discover_score": 0.11059451116633974,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "balestrate",
    "discover_score": 0.11052240635894325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "stefania cappa",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "rush hour",
    "discover_score": 0.11037973797755445,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "antonio di bella",
    "discover_score": 0.11030916105670341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "monica maggioni",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "bezos matrimonio",
    "discover_score": 0.11016948932113223,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "twitter down",
    "discover_score": 0.11010038189372698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "val kilmer",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "achille lauro",
    "discover_score": 0.10996359325514149,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "enzo bearzot",
    "discover_score": 0.10989590011342192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "hong kong",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "taken",
    "discover_score": 0.10976188716528863,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "downton abbey 3",
    "discover_score": 0.109695556062937,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "swa",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "brian may",
    "discover_score": 0.10956421711282004,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "corsa contro il tempo",
    "discover_score": 0.10949919856020456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "orvieto",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "strasburgo lione",
    "discover_score": 0.10937043723787641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "geppi cucciari",
    "discover_score": 0.10930668431451801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "favignana",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "sezione 8 film",
    "discover_score": 0.10918040921277318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "schumacher",
    "discover_score": 0.10911787739533732,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "civita castellana",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "الزمالك ضد سيراميكا كليوباترا",
    "discover_score": 0.10899400174030915,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "andrea belotti",
    "discover_score": 0.10893264874461546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "range rover",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "valerio aprea",
    "discover_score": 0.10881109009275462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "quando esce mare fuori 6",
    "discover_score": 0.10875087572846497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "galeazzo bignami",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "superenalotto 28 marzo 2025",
    "discover_score": 0.10863155568765029,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "luisa ranieri",
    "discover_score": 0.10857244172444135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "benedetta orlando",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "atf",
    "discover_score": 0.10845528569696827,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "mario sechi",
    "discover_score": 0.10839723574112384,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "julio iglesias",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "valore bitcoin",
    "discover_score": 0.10828217268655647,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "massimo giletti",
    "discover_score": 0.10822515206702722,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "infernetto",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "milano meteo",
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
    "entity": "jodie foster",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "starlink",
    "discover_score": 0.10794501286621618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "treviso",
    "discover_score": 0.10788995327805997,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "holland",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "alexis sánchez",
    "discover_score": 0.10778077528321581,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "ferrovie dello stato",
    "discover_score": 0.1077266503395374,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "referendum 8 9 giugno",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "ministro urso",
    "discover_score": 0.10761931258496127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "sarah jessica parker",
    "discover_score": 0.10756609352725875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "pikachu turchia",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "nicola porro",
    "discover_score": 0.10746053978060788,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "lady gaga milano",
    "discover_score": 0.1074081991183849,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "sofia vergara",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "vladimir putin",
    "discover_score": 0.10730437560986536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "marracash",
    "discover_score": 0.10725288704833526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "david hasselhoff",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "blake lively",
    "discover_score": 0.1071507423312361,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "brescia",
    "discover_score": 0.10710008070405592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "messi",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "nonostante film",
    "discover_score": 0.10699956552492287,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "bariloche",
    "discover_score": 0.10694970673154594,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "omicidio pierina",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "diretta it",
    "discover_score": 0.10685077390921101,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "rete 4 diretta",
    "discover_score": 0.10680169485648523,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "unipol arena",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "downton abbey",
    "discover_score": 0.1067042991692422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-29 15:20:56",
  "trends_count": 235,
  "top_score": 19.10761509625013,
  "runtime_minutes": 2.8522944410641986,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
