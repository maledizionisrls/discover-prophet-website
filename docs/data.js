const trendData = [
  {
    "rank": 12,
    "entity": "rolex",
    "discover_score": 12.974557933030864,
    "score_1h": 37.56896551724138,
    "score_4h": 23.199579831932773,
    "score_7d": 20.896449704142015,
    "saturation_score": 1.0,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Marchio di orologi - Alta orologeria"
  },
  {
    "rank": 3,
    "entity": "estrazione lotto oggi",
    "discover_score": 8.91933372783668,
    "score_1h": 65.92241379310346,
    "score_4h": 17.720588235294116,
    "score_7d": 9.908284023668639,
    "saturation_score": 1.0,
    "extracted_entities": "Estrazione - Lotto - Oggi"
  },
  {
    "rank": 26,
    "entity": "ronaldo",
    "discover_score": 6.944752300550795,
    "score_1h": 29.905172413793103,
    "score_4h": 22.266806722689076,
    "score_7d": 13.180473372781066,
    "saturation_score": 1.0,
    "extracted_entities": "Cristiano Ronaldo - Calciatore - Manchester United - Portogallo - Pallone d'Oro"
  },
  {
    "rank": 11,
    "entity": "lacerenza",
    "discover_score": 5.731871328602806,
    "score_1h": 33.18103448275862,
    "score_4h": 19.77310924369748,
    "score_7d": 8.633136094674557,
    "saturation_score": 64.97187851518561,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 5.451923114728448,
    "score_1h": 13.982758620689655,
    "score_4h": 15.657563025210084,
    "score_7d": 3.724852071005917,
    "saturation_score": 1.0,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 5,
    "entity": "paolo guzzanti",
    "discover_score": 4.97307702348942,
    "score_1h": 57.39655172413793,
    "score_4h": 36.05672268907563,
    "score_7d": 2.4940828402366866,
    "saturation_score": 1.0,
    "extracted_entities": "Paolo Guzzanti - Giornalismo - Politica Italiana"
  },
  {
    "rank": 20,
    "entity": "inter milan",
    "discover_score": 4.9448866479363796,
    "score_1h": 61.69827586206897,
    "score_4h": 43.09873949579832,
    "score_7d": 3.5147928994082838,
    "saturation_score": 1.0,
    "extracted_entities": "Inter - Milan - Calcio - Serie A - Derby"
  },
  {
    "rank": 41,
    "entity": "canale 5",
    "discover_score": 4.642389622580871,
    "score_1h": 16.948275862068968,
    "score_4h": 8.586134453781511,
    "score_7d": 12.298816568047338,
    "saturation_score": 1.0,
    "extracted_entities": "Canale 5 - Mediaset - Televisione - Programmi TV"
  },
  {
    "rank": 34,
    "entity": "millionday",
    "discover_score": 4.524704332318585,
    "score_1h": 28.379310344827587,
    "score_4h": 5.6113445378151265,
    "score_7d": 12.322485207100591,
    "saturation_score": 1.0,
    "extracted_entities": "MillionDay - Lotteria - Italia - Gioco d'azzardo"
  },
  {
    "rank": 46,
    "entity": "dazi",
    "discover_score": 2.859968620499708,
    "score_1h": 35.12931034482759,
    "score_4h": 7.773109243697479,
    "score_7d": 7.612426035502958,
    "saturation_score": 1.0,
    "extracted_entities": "Dazi - Commercio internazionale - Tariffe - Politica economica - Relazioni commerciali"
  },
  {
    "rank": 2,
    "entity": "empoli - bologna",
    "discover_score": 2.7144554156212477,
    "score_1h": 46.66379310344828,
    "score_4h": 13.382352941176471,
    "score_7d": 1.9467455621301775,
    "saturation_score": 1.0,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 7,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 2.52513245169516,
    "score_1h": 0.5603448275862069,
    "score_4h": 0.46008403361344535,
    "score_7d": 6.020710059171598,
    "saturation_score": 1.0,
    "extracted_entities": "Banconote - 50 euro - Ritiro - Eurozona - Valuta"
  },
  {
    "rank": 24,
    "entity": "inps assegno unico",
    "discover_score": 2.290921892728588,
    "score_1h": 0.08620689655172414,
    "score_4h": 0.43487394957983194,
    "score_7d": 7.0266272189349115,
    "saturation_score": 1.0,
    "extracted_entities": "INPS - Assegno Unico - Prestazioni Sociali"
  },
  {
    "rank": 10,
    "entity": "monica setta",
    "discover_score": 1.8849821807434157,
    "score_1h": 3.1724137931034484,
    "score_4h": 2.6512605042016806,
    "score_7d": 4.384615384615385,
    "saturation_score": 1.0,
    "extracted_entities": "Monica Setta - Giornalista - Televisione - Italia"
  },
  {
    "rank": 6,
    "entity": "tredici pietro psicofarmaci",
    "discover_score": 1.5976129200622986,
    "score_1h": 10.362068965517242,
    "score_4h": 8.21218487394958,
    "score_7d": 1.9260355029585798,
    "saturation_score": 1.0,
    "extracted_entities": "Tredici Pietro - Psicofarmaci - Musica"
  },
  {
    "rank": 8,
    "entity": "luigi mangione",
    "discover_score": 1.3390461225665276,
    "score_1h": 29.224137931034484,
    "score_4h": 7.418067226890757,
    "score_7d": 1.6923076923076925,
    "saturation_score": 45.3318335208099,
    "extracted_entities": "Luigi Mangione"
  },
  {
    "rank": 14,
    "entity": "arsenal - fulham",
    "discover_score": 1.2773539676813137,
    "score_1h": 34.16379310344827,
    "score_4h": 8.932773109243698,
    "score_7d": 1.5236686390532543,
    "saturation_score": 1.0,
    "extracted_entities": "Arsenal - Fulham - Calcio - Premier League - Partita"
  },
  {
    "rank": 13,
    "entity": "nuovo tasto whatsapp",
    "discover_score": 1.1539416274956347,
    "score_1h": 7.793103448275862,
    "score_4h": 6.1533613445378155,
    "score_7d": 1.7810650887573964,
    "saturation_score": 1.0,
    "extracted_entities": "WhatsApp - Nuovo tasto - Funzionalità - Aggiornamento"
  },
  {
    "rank": 45,
    "entity": "monte amiata",
    "discover_score": 1.048606180354245,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.5819327731092437,
    "score_7d": 3.618343195266272,
    "saturation_score": 30.14623172103487,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursioni"
  },
  {
    "rank": 4,
    "entity": "real madrid - real sociedad",
    "discover_score": 1.0026267766003372,
    "score_1h": 20.63793103448276,
    "score_4h": 5.134453781512605,
    "score_7d": 1.0650887573964498,
    "saturation_score": 1.0,
    "extracted_entities": "Real Madrid - Real Sociedad - Calcio - Partita - Liga Spagnola"
  },
  {
    "rank": 18,
    "entity": "alessandra amoroso",
    "discover_score": 0.9831861347403796,
    "score_1h": 4.474137931034482,
    "score_4h": 1.3298319327731094,
    "score_7d": 2.680473372781065,
    "saturation_score": 100.0,
    "extracted_entities": "Alessandra Amoroso - Cantante - Musica Italiana"
  },
  {
    "rank": 35,
    "entity": "shaila e lorenzo",
    "discover_score": 0.9436674445928046,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.7163865546218487,
    "score_7d": 3.0680473372781067,
    "saturation_score": 1.0,
    "extracted_entities": "Shaila - Lorenzo - Persone famose - Gossip - Relazione"
  },
  {
    "rank": 23,
    "entity": "trabzonspor u-19 - inter primavera",
    "discover_score": 0.8666947527795482,
    "score_1h": 0.0,
    "score_4h": 6.119747899159664,
    "score_7d": 1.2100591715976332,
    "saturation_score": 1.0,
    "extracted_entities": "Trabzonspor U-19 - Inter Primavera - Calcio giovanile - Partita - Squadre"
  },
  {
    "rank": 15,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.8546069317896944,
    "score_1h": 13.75,
    "score_4h": 5.8613445378151265,
    "score_7d": 1.0650887573964498,
    "saturation_score": 1.0,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League"
  },
  {
    "rank": 31,
    "entity": "paratici",
    "discover_score": 0.7915682717698846,
    "score_1h": 0.7931034482758621,
    "score_4h": 0.48109243697478987,
    "score_7d": 2.5384615384615383,
    "saturation_score": 1.0,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Tottenham Hotspur - Dirigente sportivo"
  },
  {
    "rank": 50,
    "entity": "capracotta",
    "discover_score": 0.7489729194695033,
    "score_1h": 3.4913793103448274,
    "score_4h": 0.9915966386554622,
    "score_7d": 2.4437869822485205,
    "saturation_score": 1.0,
    "extracted_entities": "Capracotta - Luogo - Turismo - Eventi - Meteo"
  },
  {
    "rank": 9,
    "entity": "stefano argentino",
    "discover_score": 0.7406035956674226,
    "score_1h": 3.137931034482759,
    "score_4h": 2.3739495798319328,
    "score_7d": 1.3698224852071006,
    "saturation_score": 1.0,
    "extracted_entities": "Stefano Argentino"
  },
  {
    "rank": 43,
    "entity": "spider man brand new day",
    "discover_score": 0.6696460636792444,
    "score_1h": 0.35344827586206895,
    "score_4h": 0.28361344537815125,
    "score_7d": 2.2781065088757395,
    "saturation_score": 1.0,
    "extracted_entities": "Spider-Man - Brand New Day - Fumetto - Marvel Comics - Peter Parker"
  },
  {
    "rank": 49,
    "entity": "lsg vs pbks",
    "discover_score": 0.6063369028709936,
    "score_1h": 2.6120689655172415,
    "score_4h": 4.741596638655462,
    "score_7d": 0.9053254437869822,
    "saturation_score": 1.0,
    "extracted_entities": "LSG - PBKS - Indian Premier League - Cricket - Partita"
  },
  {
    "rank": 29,
    "entity": "stai con me oggi",
    "discover_score": 0.5568450767561313,
    "score_1h": 4.327586206896552,
    "score_4h": 1.3592436974789917,
    "score_7d": 1.4260355029585798,
    "saturation_score": 1.0,
    "extracted_entities": "Stai con me - Oggi - Canzone - Musica"
  },
  {
    "rank": 28,
    "entity": "paros",
    "discover_score": 0.551275206463094,
    "score_1h": 3.2844827586206895,
    "score_4h": 1.2331932773109242,
    "score_7d": 1.4289940828402368,
    "saturation_score": 1.0,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Spiagge"
  },
  {
    "rank": 16,
    "entity": "emanuela folliero",
    "discover_score": 0.520456441876219,
    "score_1h": 18.224137931034484,
    "score_4h": 2.2857142857142856,
    "score_7d": 0.893491124260355,
    "saturation_score": 1.0,
    "extracted_entities": "Emanuela Folliero - Personaggio televisivo - Italia - Televisione"
  },
  {
    "rank": 19,
    "entity": "rosy bindi",
    "discover_score": 0.4815358804656913,
    "score_1h": 16.086206896551726,
    "score_4h": 2.346638655462185,
    "score_7d": 0.7899408284023668,
    "saturation_score": 1.0,
    "extracted_entities": "Rosy Bindi - Politica Italiana - Partito Democratico"
  },
  {
    "rank": 33,
    "entity": "cedolino noipa aprile",
    "discover_score": 0.46576901245435987,
    "score_1h": 0.46551724137931033,
    "score_4h": 0.9873949579831933,
    "score_7d": 1.2189349112426036,
    "saturation_score": 1.0,
    "extracted_entities": "Cedolino - NoiPA - Aprile"
  },
  {
    "rank": 27,
    "entity": "marilyn manson",
    "discover_score": 0.36646385608435494,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.5966386554621849,
    "score_7d": 0.8964497041420119,
    "saturation_score": 1.0,
    "extracted_entities": "Marilyn Manson - Musica - Cantante - Shock Rock - Controversie"
  },
  {
    "rank": 17,
    "entity": "pesce d aprile 2025",
    "discover_score": 0.36393340571500427,
    "score_1h": 1.0603448275862069,
    "score_4h": 1.0609243697478992,
    "score_7d": 0.6775147928994083,
    "saturation_score": 1.0,
    "extracted_entities": "Pesce d'aprile - 2025 - Scherzi - Tradizioni"
  },
  {
    "rank": 25,
    "entity": "cristiano ronaldo inter",
    "discover_score": 0.350499146031496,
    "score_1h": 0.15517241379310345,
    "score_4h": 0.15966386554621848,
    "score_7d": 0.9378698224852071,
    "saturation_score": 1.0,
    "extracted_entities": "Cristiano Ronaldo - Inter - Calcio"
  },
  {
    "rank": 39,
    "entity": "papa ratzinger",
    "discover_score": 0.3436633041320679,
    "score_1h": 4.9655172413793105,
    "score_4h": 1.8760504201680672,
    "score_7d": 0.5443786982248521,
    "saturation_score": 1.0,
    "extracted_entities": "Papa Ratzinger - Benedetto XVI - Vaticano - Chiesa Cattolica - Joseph Ratzinger"
  },
  {
    "rank": 42,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.3268412851301457,
    "score_1h": 1.043103448275862,
    "score_4h": 0.2058823529411765,
    "score_7d": 0.9260355029585798,
    "saturation_score": 1.0,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience - Misurazione"
  },
  {
    "rank": 32,
    "entity": "pam bondi",
    "discover_score": 0.3184235608885671,
    "score_1h": 0.6206896551724137,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.7544378698224853,
    "saturation_score": 1.0,
    "extracted_entities": "Pam Bondi - Politica - Florida - Avvocato - Ex Procuratore Generale"
  },
  {
    "rank": 21,
    "entity": "papa giovanni paolo ii",
    "discover_score": 0.30703216530856436,
    "score_1h": 9.887931034482758,
    "score_4h": 1.550420168067227,
    "score_7d": 0.3875739644970414,
    "saturation_score": 1.0,
    "extracted_entities": "Papa Giovanni Paolo II - Chiesa Cattolica - Vaticano - Pontificato - Karol Wojtyła"
  },
  {
    "rank": 22,
    "entity": "vincenzo sarno",
    "discover_score": 0.30433651573752096,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.5525210084033613,
    "score_7d": 0.6331360946745562,
    "saturation_score": 1.0,
    "extracted_entities": "Vincenzo Sarno - Calciatore - Carriera - Squadre - Statistiche"
  },
  {
    "rank": 40,
    "entity": "coppa del re",
    "discover_score": 0.2792155478124232,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.7205882352941176,
    "score_7d": 0.5798816568047338,
    "saturation_score": 9.433070866141732,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Competizione - Real Madrid"
  },
  {
    "rank": 30,
    "entity": "francesca mannocchi",
    "discover_score": 0.2681656047430497,
    "score_1h": 1.0862068965517242,
    "score_4h": 0.5819327731092437,
    "score_7d": 0.5295857988165681,
    "saturation_score": 1.0,
    "extracted_entities": "Francesca Mannocchi - Giornalismo - Reportage - Medio Oriente - Conflitti"
  },
  {
    "rank": 36,
    "entity": "wolverhampton - west ham",
    "discover_score": 0.24952152267490604,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.5525210084033614,
    "score_7d": 0.485207100591716,
    "saturation_score": 1.0,
    "extracted_entities": "Wolverhampton - West Ham - Calcio - Premier League"
  },
  {
    "rank": 38,
    "entity": "الأهلي ضد الهلال",
    "discover_score": 0.24641590495903773,
    "score_1h": 2.060344827586207,
    "score_4h": 1.153361344537815,
    "score_7d": 0.32840236686390534,
    "saturation_score": 1.0,
    "extracted_entities": "الأهلي - الهلال - Partita di calcio - Squadre di calcio - Arabia Saudita"
  },
  {
    "rank": 48,
    "entity": "alessandra amoroso incinta",
    "discover_score": 0.23312579362995117,
    "score_1h": 1.7931034482758619,
    "score_4h": 1.1365546218487395,
    "score_7d": 0.3047337278106509,
    "saturation_score": 1.0,
    "extracted_entities": "Alessandra Amoroso - Gravidanza - Gossip"
  },
  {
    "rank": 37,
    "entity": "al ahly - al-hilal",
    "discover_score": 0.13913080882656106,
    "score_1h": 5.146551724137931,
    "score_4h": 0.2647058823529412,
    "score_7d": 0.09467455621301776,
    "saturation_score": 1.0728908886389201,
    "extracted_entities": "Al Ahly - Al-Hilal - Calcio - Partita - Squadre"
  },
  {
    "rank": 44,
    "entity": "al ittihad - al-shabab",
    "discover_score": 0.12742378233446122,
    "score_1h": 0.0,
    "score_4h": 0.018907563025210083,
    "score_7d": 0.11242603550295859,
    "saturation_score": 1.0,
    "extracted_entities": "Al-Ittihad - Al-Shabab - Calcio - Arabia Saudita - Partita"
  },
  {
    "rank": 47,
    "entity": "boavista - gil vicente",
    "discover_score": 0.1239745088125721,
    "score_1h": 1.9655172413793103,
    "score_4h": 0.35714285714285715,
    "score_7d": 0.026627218934911243,
    "saturation_score": 1.0,
    "extracted_entities": "Boavista - Gil Vicente - Calcio - Partita - Portogallo"
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 19:10:19 ",
  "trends_count": 50,
  "total_trends_processed": 229,
  "top_discover_score": 12.974557933030864,
  "runtime_seconds": 348.8469805717468,
  "proxies_available": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_browser": "chrome124",
  "saturation_url": "https://www.google.com",
  "runtime_minutes": 5.81
};
