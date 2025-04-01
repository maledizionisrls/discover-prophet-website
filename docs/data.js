const trendData = [
  {
    "rank": 21,
    "entity": "ronaldo",
    "discover_score": 13.94685952795325,
    "score_1h": 56.603448275862064,
    "score_4h": 34.760504201680675,
    "score_7d": 23.31360946745562,
    "saturation_score": 1.0,
    "extracted_entities": "Cristiano Ronaldo - Calciatore - Portogallo - Manchester United - Juventus"
  },
  {
    "rank": 9,
    "entity": "rolex",
    "discover_score": 13.479419950898414,
    "score_1h": 32.758620689655174,
    "score_4h": 20.193277310924373,
    "score_7d": 20.653846153846153,
    "saturation_score": 1.0,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Gioielleria - Marchio di orologi"
  },
  {
    "rank": 42,
    "entity": "dazi",
    "discover_score": 9.204524083483388,
    "score_1h": 28.20689655172414,
    "score_4h": 10.623949579831933,
    "score_7d": 23.42307692307692,
    "saturation_score": 1.0,
    "extracted_entities": "Dazi - Commercio internazionale - Tariffe - Politica economica - Relazioni commerciali"
  },
  {
    "rank": 19,
    "entity": "inter milan",
    "discover_score": 8.07853200644917,
    "score_1h": 48.87068965517241,
    "score_4h": 34.023109243697476,
    "score_7d": 11.695266272189349,
    "saturation_score": 59.19083969465649,
    "extracted_entities": "Inter - Milan - Calcio - Serie A - Derby"
  },
  {
    "rank": 10,
    "entity": "lacerenza",
    "discover_score": 4.8962747703231075,
    "score_1h": 30.870689655172413,
    "score_4h": 15.126050420168067,
    "score_7d": 7.8579881656804735,
    "saturation_score": 1.0,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 13,
    "entity": "apple intelligence",
    "discover_score": 4.195410497134676,
    "score_1h": 7.448275862068965,
    "score_4h": 6.1155462184873945,
    "score_7d": 9.210059171597633,
    "saturation_score": 1.0,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 3.618277236525508,
    "score_1h": 26.275862068965516,
    "score_4h": 6.65546218487395,
    "score_7d": 3.5798816568047336,
    "saturation_score": 1.0,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 4,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 3.099428299236361,
    "score_1h": 0.16379310344827586,
    "score_4h": 1.6554621848739497,
    "score_7d": 6.041420118343195,
    "saturation_score": 100.0,
    "extracted_entities": "Banconote - 50 euro - Ritiro - Eurozona - Valuta"
  },
  {
    "rank": 24,
    "entity": "paros",
    "discover_score": 2.934395878366225,
    "score_1h": 0.8362068965517242,
    "score_4h": 1.7415966386554622,
    "score_7d": 8.440828402366865,
    "saturation_score": 1.0,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Vacanze"
  },
  {
    "rank": 3,
    "entity": "paolo guzzanti",
    "discover_score": 2.810613920288616,
    "score_1h": 49.724137931034484,
    "score_4h": 16.83613445378151,
    "score_7d": 1.8668639053254439,
    "saturation_score": 1.0,
    "extracted_entities": "Paolo Guzzanti - Giornalista - Politica Italiana"
  },
  {
    "rank": 8,
    "entity": "monica setta",
    "discover_score": 2.73196654372246,
    "score_1h": 0.6724137931034482,
    "score_4h": 0.3067226890756303,
    "score_7d": 6.686390532544379,
    "saturation_score": 1.0,
    "extracted_entities": "Monica Setta - Giornalista - Televisione - Italia"
  },
  {
    "rank": 6,
    "entity": "tredici pietro psicofarmaci",
    "discover_score": 2.703554213586719,
    "score_1h": 6.594827586206896,
    "score_4h": 12.96218487394958,
    "score_7d": 3.174556213017752,
    "saturation_score": 1.0,
    "extracted_entities": "Tredici Pietro - Psicofarmaci - Musica"
  },
  {
    "rank": 43,
    "entity": "dazi trump",
    "discover_score": 2.2431155297238505,
    "score_1h": 7.362068965517241,
    "score_4h": 1.468487394957983,
    "score_7d": 7.325443786982248,
    "saturation_score": 25.18320610687023,
    "extracted_entities": "Dazi - Trump - Commercio internazionale - Politica economica - Stati Uniti"
  },
  {
    "rank": 7,
    "entity": "luigi mangione",
    "discover_score": 2.213551121290469,
    "score_1h": 22.232758620689655,
    "score_4h": 15.628151260504202,
    "score_7d": 1.816568047337278,
    "saturation_score": 1.0,
    "extracted_entities": "Luigi Mangione"
  },
  {
    "rank": 2,
    "entity": "empoli - bologna",
    "discover_score": 1.8682834930315908,
    "score_1h": 31.336206896551722,
    "score_4h": 9.042016806722689,
    "score_7d": 1.4940828402366864,
    "saturation_score": 1.0,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 27,
    "entity": "shaila e lorenzo",
    "discover_score": 1.5692364095590516,
    "score_1h": 0.02586206896551724,
    "score_4h": 0.4453781512605042,
    "score_7d": 5.020710059171598,
    "saturation_score": 1.0,
    "extracted_entities": "Shaila - Lorenzo - Persone famose - Gossip - Intrattenimento"
  },
  {
    "rank": 33,
    "entity": "lotto in diretta",
    "discover_score": 1.517359375263691,
    "score_1h": 20.293103448275865,
    "score_4h": 5.367647058823529,
    "score_7d": 3.6923076923076925,
    "saturation_score": 1.0,
    "extracted_entities": "Lotto - Diretta - Estrazioni"
  },
  {
    "rank": 29,
    "entity": "paratici",
    "discover_score": 1.2371503792884775,
    "score_1h": 2.163793103448276,
    "score_4h": 0.5483193277310924,
    "score_7d": 3.994082840236686,
    "saturation_score": 1.0,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Tottenham Hotspur - Direttore Sportivo"
  },
  {
    "rank": 37,
    "entity": "giovanni paolo ii",
    "discover_score": 1.2160227615138643,
    "score_1h": 7.974137931034483,
    "score_4h": 1.542016806722689,
    "score_7d": 3.8136094674556213,
    "saturation_score": 1.0,
    "extracted_entities": "Giovanni Paolo II - Papa - Vaticano - Chiesa Cattolica - Pontificato"
  },
  {
    "rank": 16,
    "entity": "trabzonspor u-19 - inter primavera",
    "discover_score": 0.9788052948532805,
    "score_1h": 0.22413793103448276,
    "score_4h": 4.955882352941177,
    "score_7d": 1.6715976331360947,
    "saturation_score": 1.0,
    "extracted_entities": "Trabzonspor U-19 - Inter Primavera - Calcio giovanile - Partita"
  },
  {
    "rank": 11,
    "entity": "arsenal - fulham",
    "discover_score": 0.8974041620595615,
    "score_1h": 18.07758620689655,
    "score_4h": 6.504201680672269,
    "score_7d": 0.9260355029585798,
    "saturation_score": 1.0,
    "extracted_entities": "Arsenal - Fulham - Calcio - Premier League"
  },
  {
    "rank": 17,
    "entity": "lsg vs pbks",
    "discover_score": 0.875383720946971,
    "score_1h": 0.9310344827586207,
    "score_4h": 7.086134453781513,
    "score_7d": 0.9053254437869822,
    "saturation_score": 1.0,
    "extracted_entities": "LSG - PBKS - Indian Premier League - Cricket - Partita"
  },
  {
    "rank": 23,
    "entity": "marilyn manson",
    "discover_score": 0.8646616087970616,
    "score_1h": 1.7586206896551724,
    "score_4h": 0.930672268907563,
    "score_7d": 2.529585798816568,
    "saturation_score": 1.0,
    "extracted_entities": "Marilyn Manson - Musica - Cantante - Shock Rock - Controversie"
  },
  {
    "rank": 12,
    "entity": "nuovo tasto whatsapp",
    "discover_score": 0.8503570220311314,
    "score_1h": 22.5,
    "score_4h": 3.1911764705882355,
    "score_7d": 1.5976331360946745,
    "saturation_score": 1.0,
    "extracted_entities": "WhatsApp - Nuovo tasto - Funzionalità - Aggiornamento"
  },
  {
    "rank": 20,
    "entity": "cristiano ronaldo inter",
    "discover_score": 0.7478077818514155,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.9621848739495799,
    "score_7d": 2.0710059171597632,
    "saturation_score": 1.0,
    "extracted_entities": "Cristiano Ronaldo - Inter - Calcio"
  },
  {
    "rank": 49,
    "entity": "mattia bellucci",
    "discover_score": 0.6533807337128448,
    "score_1h": 0.1724137931034483,
    "score_4h": 4.901260504201681,
    "score_7d": 1.0414201183431953,
    "saturation_score": 10.068702290076336,
    "extracted_entities": "Mattia Bellucci - Persona"
  },
  {
    "rank": 40,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.6363223252737914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.2041420118343193,
    "saturation_score": 1.0,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience - Misurazione"
  },
  {
    "rank": 14,
    "entity": "pesce d aprile 2025",
    "discover_score": 0.6300674187741219,
    "score_1h": 0.05172413793103448,
    "score_4h": 0.8760504201680672,
    "score_7d": 1.5769230769230769,
    "saturation_score": 1.0,
    "extracted_entities": "Pesce d'aprile - 2025 - Scherzi - Tradizioni"
  },
  {
    "rank": 44,
    "entity": "varenne",
    "discover_score": 0.6026125048931436,
    "score_1h": 8.53448275862069,
    "score_4h": 2.2100840336134455,
    "score_7d": 1.5,
    "saturation_score": 1.0,
    "extracted_entities": "Varenne - Cavallo - Ippica - Trotto - Corse"
  },
  {
    "rank": 46,
    "entity": "capracotta",
    "discover_score": 0.5918816703735446,
    "score_1h": 2.2586206896551726,
    "score_4h": 0.5714285714285714,
    "score_7d": 1.9201183431952664,
    "saturation_score": 19.893129770992367,
    "extracted_entities": "Capracotta - Comune - Molise - Turismo - Neve"
  },
  {
    "rank": 25,
    "entity": "rosy bindi",
    "discover_score": 0.5179787931994102,
    "score_1h": 14.560344827586206,
    "score_4h": 3.577731092436975,
    "score_7d": 0.6863905325443787,
    "saturation_score": 1.0,
    "extracted_entities": "Rosy Bindi - Politica Italiana - Partito Democratico"
  },
  {
    "rank": 5,
    "entity": "stefano argentino",
    "discover_score": 0.4958352435377681,
    "score_1h": 4.241379310344827,
    "score_4h": 0.8172268907563025,
    "score_7d": 0.8905325443786982,
    "saturation_score": 1.0,
    "extracted_entities": "Stefano Argentino"
  },
  {
    "rank": 15,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.39621457475307004,
    "score_1h": 22.146551724137932,
    "score_4h": 3.4306722689075633,
    "score_7d": 0.23076923076923075,
    "saturation_score": 1.0,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League"
  },
  {
    "rank": 22,
    "entity": "inps assegno unico",
    "discover_score": 0.32522918359161507,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.9852941176470589,
    "score_7d": 0.6005917159763313,
    "saturation_score": 1.0,
    "extracted_entities": "INPS - Assegno Unico - Prestazioni Sociali"
  },
  {
    "rank": 18,
    "entity": "vincenzo sarno",
    "discover_score": 0.29933031470969695,
    "score_1h": 0.8706896551724137,
    "score_4h": 0.3592436974789916,
    "score_7d": 0.6331360946745562,
    "saturation_score": 1.0,
    "extracted_entities": "Vincenzo Sarno - Calciatore - Carriera - Squadre - Italia"
  },
  {
    "rank": 41,
    "entity": "wawrinka",
    "discover_score": 0.29014105944395024,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.7633136094674556,
    "saturation_score": 1.0,
    "extracted_entities": "Stanislas Wawrinka - Tennis - ATP - Svizzera - Grand Slam"
  },
  {
    "rank": 50,
    "entity": "copa del rey",
    "discover_score": 0.28334430209905803,
    "score_1h": 1.2241379310344829,
    "score_4h": 0.2815126050420168,
    "score_7d": 0.7485207100591715,
    "saturation_score": 1.0,
    "extracted_entities": "Copa del Rey - Calcio - Spagna - Torneo - Squadre"
  },
  {
    "rank": 45,
    "entity": "monte amiata",
    "discover_score": 0.27855245798438,
    "score_1h": 0.9827586206896551,
    "score_4h": 0.7079831932773109,
    "score_7d": 0.5976331360946746,
    "saturation_score": 20.64885496183206,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursionismo"
  },
  {
    "rank": 28,
    "entity": "francesca mannocchi",
    "discover_score": 0.25718851009250154,
    "score_1h": 0.0,
    "score_4h": 0.4096638655462185,
    "score_7d": 0.5207100591715976,
    "saturation_score": 1.0,
    "extracted_entities": "Francesca Mannocchi"
  },
  {
    "rank": 30,
    "entity": "wolverhampton - west ham",
    "discover_score": 0.2447021962689774,
    "score_1h": 3.137931034482759,
    "score_4h": 0.9600840336134453,
    "score_7d": 0.34023668639053256,
    "saturation_score": 1.0,
    "extracted_entities": "Wolverhampton - West Ham - Calcio - Premier League"
  },
  {
    "rank": 48,
    "entity": "coppa del re",
    "discover_score": 0.23584663972182948,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.15756302521008403,
    "score_7d": 0.5680473372781065,
    "saturation_score": 15.736641221374045,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Competizione - Real Madrid"
  },
  {
    "rank": 32,
    "entity": "stai con me oggi",
    "discover_score": 0.23282147972047793,
    "score_1h": 2.3017241379310347,
    "score_4h": 0.8571428571428572,
    "score_7d": 0.3254437869822485,
    "saturation_score": 1.0,
    "extracted_entities": "Stai con me - Oggi - Canzone - Musica - Testo"
  },
  {
    "rank": 34,
    "entity": "al ahly - al-hilal",
    "discover_score": 0.22731517689401376,
    "score_1h": 1.5517241379310345,
    "score_4h": 1.5294117647058822,
    "score_7d": 0.15680473372781065,
    "saturation_score": 1.0,
    "extracted_entities": "Al Ahly - Al-Hilal - Calcio - Partita - Squadre"
  },
  {
    "rank": 36,
    "entity": "الأهلي ضد الهلال",
    "discover_score": 0.21984848398031917,
    "score_1h": 3.8017241379310347,
    "score_4h": 0.9138655462184875,
    "score_7d": 0.27218934911242604,
    "saturation_score": 1.0,
    "extracted_entities": "الأهلي - الهلال - Partita di calcio - Squadre di calcio - Arabia Saudita"
  },
  {
    "rank": 38,
    "entity": "az - rkc",
    "discover_score": 0.20293715968727022,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.25,
    "score_7d": 0.3727810650887574,
    "saturation_score": 1.0,
    "extracted_entities": "AZ Alkmaar - RKC Waalwijk - Eredivisie - Calcio - Partita"
  },
  {
    "rank": 35,
    "entity": "cedolino noipa aprile",
    "discover_score": 0.19895397404825638,
    "score_1h": 0.0,
    "score_4h": 0.09453781512605042,
    "score_7d": 0.3875739644970414,
    "saturation_score": 1.0,
    "extracted_entities": "Cedolino - NoiPA - Aprile"
  },
  {
    "rank": 31,
    "entity": "arsenal vs fulham",
    "discover_score": 0.1926011055686505,
    "score_1h": 4.0344827586206895,
    "score_4h": 1.01890756302521,
    "score_7d": 0.12721893491124261,
    "saturation_score": 1.0,
    "extracted_entities": "Arsenal - Fulham - Partita di calcio - Premier League"
  },
  {
    "rank": 39,
    "entity": "al ittihad - al-shabab",
    "discover_score": 0.18714037405045203,
    "score_1h": 1.3362068965517242,
    "score_4h": 1.2079831932773109,
    "score_7d": 0.08579881656804733,
    "saturation_score": 1.0,
    "extracted_entities": "Al Ittihad - Al Shabab - Calcio - Squadre - Partita"
  },
  {
    "rank": 26,
    "entity": "pam bondi",
    "discover_score": 0.18615330753873774,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.32840236686390534,
    "saturation_score": 1.0,
    "extracted_entities": "Pam Bondi - Politica - Florida - Procuratore Generale"
  },
  {
    "rank": 47,
    "entity": "nehal wadhera",
    "discover_score": 0.1638148414437656,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.726890756302521,
    "score_7d": 0.10946745562130178,
    "saturation_score": 1.0,
    "extracted_entities": "Nehal Wadhera - Cricket - Giocatore"
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 18:44:18 ",
  "trends_count": 50,
  "total_trends_processed": 240,
  "top_discover_score": 13.94685952795325,
  "runtime_seconds": 266.2916986942291,
  "proxies_available": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_browser": "chrome124",
  "runtime_minutes": 4.44
};
