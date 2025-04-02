const trendData = [
  {
    "rank": 33,
    "entity": "3b meteo",
    "discover_score": 16.005991769344273,
    "score_1h": 78.25,
    "score_4h": 40.757032101543544,
    "score_7d": 29.014792899408285,
    "saturation_score": 100.0,
    "extracted_entities": "3b meteo - Previsioni - Meteo"
  },
  {
    "rank": 39,
    "entity": "generali",
    "discover_score": 15.314835737721856,
    "score_1h": 55.79310344827586,
    "score_4h": 8.041102633522028,
    "score_7d": 37.23372781065089,
    "saturation_score": 1.0,
    "extracted_entities": "Assicurazioni - Compagnia - Italia - Finanza - Servizi"
  },
  {
    "rank": 41,
    "entity": "teams",
    "discover_score": 10.587894236865266,
    "score_1h": 54.8448275862069,
    "score_4h": 15.661764705882353,
    "score_7d": 25.215976331360945,
    "saturation_score": 1.0,
    "extracted_entities": "Microsoft Teams - Collaborazione - Comunicazione - Strumenti di lavoro - Videoconferenze"
  },
  {
    "rank": 1,
    "entity": "val kilmer",
    "discover_score": 8.378081699081473,
    "score_1h": 74.2844827586207,
    "score_4h": 44.15126050420168,
    "score_7d": 2.1597633136094676,
    "saturation_score": 1.0,
    "extracted_entities": "Val Kilmer - Attore - Film - Carriera"
  },
  {
    "rank": 28,
    "entity": "gamestop",
    "discover_score": 7.834210816390544,
    "score_1h": 4.939655172413794,
    "score_4h": 3.3769118526071518,
    "score_7d": 20.355029585798817,
    "saturation_score": 5.223365635594492,
    "extracted_entities": "GameStop - Videogiochi - Azioni - Retail - Investimenti"
  },
  {
    "rank": 2,
    "entity": "empoli - bologna",
    "discover_score": 7.5212461428231006,
    "score_1h": 56.69827586206897,
    "score_4h": 32.35294117647059,
    "score_7d": 4.3609467455621305,
    "saturation_score": 1.0,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 4,
    "entity": "suor paola",
    "discover_score": 7.2007483344196554,
    "score_1h": 50.3448275862069,
    "score_4h": 38.08833198551387,
    "score_7d": 4.677514792899409,
    "saturation_score": 1.0,
    "extracted_entities": "Suor Paola - Persone - Religione - Italia"
  },
  {
    "rank": 22,
    "entity": "dazi",
    "discover_score": 6.6646863723565435,
    "score_1h": 35.08620689655172,
    "score_4h": 13.97689075630252,
    "score_7d": 14.068047337278106,
    "saturation_score": 1.0,
    "extracted_entities": "Dazi - Commercio internazionale - Tariffe - Politica economica - Importazioni"
  },
  {
    "rank": 31,
    "entity": "2 aprile",
    "discover_score": 5.510103656713122,
    "score_1h": 69.95689655172413,
    "score_4h": 47.39285714285714,
    "score_7d": 4.739644970414201,
    "saturation_score": 9.804686328042964,
    "extracted_entities": "2 aprile - Eventi storici - Compleanni celebri - Festività - Anniversari"
  },
  {
    "rank": 3,
    "entity": "real madrid - real sociedad",
    "discover_score": 5.4399584314381535,
    "score_1h": 37.0,
    "score_4h": 28.708273267465984,
    "score_7d": 3.437869822485207,
    "saturation_score": 1.0,
    "extracted_entities": "Real Madrid - Real Sociedad - Partita di calcio - Liga Spagnola - Squadre di calcio"
  },
  {
    "rank": 10,
    "entity": "top gun",
    "discover_score": 4.635663551051391,
    "score_1h": 32.08620689655172,
    "score_4h": 32.83403361344538,
    "score_7d": 3.5857988165680474,
    "saturation_score": 1.0,
    "extracted_entities": "Top Gun - Film - Tom Cruise - Aviazione - Anni '80"
  },
  {
    "rank": 42,
    "entity": "estrazione lotto",
    "discover_score": 3.647425083701335,
    "score_1h": 25.0,
    "score_4h": 15.764494919306635,
    "score_7d": 7.6952662721893486,
    "saturation_score": 1.0,
    "extracted_entities": "Estrazione - Lotto - Gioco d'azzardo - Numeri - Vincite"
  },
  {
    "rank": 17,
    "entity": "giovanni paolo ii",
    "discover_score": 2.758262096466997,
    "score_1h": 6.094827586206896,
    "score_4h": 6.963336380577335,
    "score_7d": 6.079881656804734,
    "saturation_score": 1.0,
    "extracted_entities": "Giovanni Paolo II - Papa - Vaticano - Chiesa Cattolica - Pontificato"
  },
  {
    "rank": 21,
    "entity": "dazi trump",
    "discover_score": 2.7123799572694396,
    "score_1h": 25.413793103448278,
    "score_4h": 0.47478991596638653,
    "score_7d": 7.988165680473373,
    "saturation_score": 1.0,
    "extracted_entities": "Dazi - Trump - Politica commerciale - Stati Uniti - Economia"
  },
  {
    "rank": 7,
    "entity": "luigi mangione",
    "discover_score": 2.5312626837229075,
    "score_1h": 2.1379310344827585,
    "score_4h": 6.823529411764706,
    "score_7d": 4.420118343195266,
    "saturation_score": 1.0,
    "extracted_entities": "Luigi Mangione"
  },
  {
    "rank": 8,
    "entity": "paolo guzzanti",
    "discover_score": 2.506367636653428,
    "score_1h": 15.129310344827587,
    "score_4h": 7.086134453781513,
    "score_7d": 4.464497041420118,
    "saturation_score": 1.0,
    "extracted_entities": "Paolo Guzzanti - Giornalista - Politica Italiana - Italia"
  },
  {
    "rank": 11,
    "entity": "nuovo tasto whatsapp",
    "discover_score": 2.0651595251690145,
    "score_1h": 4.206896551724138,
    "score_4h": 0.6428571428571429,
    "score_7d": 5.458579881656805,
    "saturation_score": 1.0,
    "extracted_entities": "WhatsApp - Nuovo tasto - Funzionalità"
  },
  {
    "rank": 50,
    "entity": "arera",
    "discover_score": 1.9328967821460892,
    "score_1h": 3.525862068965517,
    "score_4h": 1.3235294117647058,
    "score_7d": 6.538461538461538,
    "saturation_score": 1.0,
    "extracted_entities": "ARERA - Autorità di Regolazione per Energia Reti e Ambiente - Energia - Regolazione - Italia"
  },
  {
    "rank": 36,
    "entity": "lacerenza",
    "discover_score": 1.8789926996024742,
    "score_1h": 3.1206896551724137,
    "score_4h": 1.2891336450898352,
    "score_7d": 6.026627218934911,
    "saturation_score": 3.8462692388467192,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 6,
    "entity": "ilaria sula",
    "discover_score": 1.7325048084371464,
    "score_1h": 62.77586206896552,
    "score_4h": 16.789915966386552,
    "score_7d": 0.6538461538461539,
    "saturation_score": 1.0,
    "extracted_entities": "Ilaria Sula"
  },
  {
    "rank": 45,
    "entity": "new zealand vs pakistan",
    "discover_score": 1.5863544791681916,
    "score_1h": 1.5344827586206897,
    "score_4h": 5.8844537815126055,
    "score_7d": 4.035502958579881,
    "saturation_score": 1.0,
    "extracted_entities": "New Zealand - Pakistan - Partita di cricket - Squadre nazionali - Evento sportivo"
  },
  {
    "rank": 9,
    "entity": "francesca mannocchi sclerosi multipla",
    "discover_score": 1.2456822823279472,
    "score_1h": 6.301724137931035,
    "score_4h": 5.932773109243698,
    "score_7d": 1.8698224852071006,
    "saturation_score": 1.0,
    "extracted_entities": "Francesca Mannocchi - Sclerosi Multipla"
  },
  {
    "rank": 34,
    "entity": "psg",
    "discover_score": 1.218981876888059,
    "score_1h": 0.5603448275862069,
    "score_4h": 1.8348247248690273,
    "score_7d": 3.6863905325443787,
    "saturation_score": 1.0,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Champions League - Squadra di calcio"
  },
  {
    "rank": 20,
    "entity": "giornata mondiale autismo",
    "discover_score": 1.1643122734447577,
    "score_1h": 3.7241379310344827,
    "score_4h": 0.9894957983193278,
    "score_7d": 3.396449704142012,
    "saturation_score": 1.0710149710479733,
    "extracted_entities": "Giornata Mondiale - Autismo - Evento - Consapevolezza"
  },
  {
    "rank": 13,
    "entity": "coppa del re",
    "discover_score": 1.0937415114415696,
    "score_1h": 1.0344827586206897,
    "score_4h": 2.9516806722689077,
    "score_7d": 2.405325443786982,
    "saturation_score": 1.3566949686478054,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Torneo - Club calcistici"
  },
  {
    "rank": 5,
    "entity": "stefano argentino",
    "discover_score": 0.91689380800965,
    "score_1h": 1.5344827586206897,
    "score_4h": 1.3333743539256706,
    "score_7d": 1.8579881656804733,
    "saturation_score": 1.0458132069244848,
    "extracted_entities": "Stefano Argentino"
  },
  {
    "rank": 26,
    "entity": "finale coppa italia 2025",
    "discover_score": 0.8555208208385026,
    "score_1h": 0.0,
    "score_4h": 0.22478991596638656,
    "score_7d": 2.7514792899408285,
    "saturation_score": 1.0,
    "extracted_entities": "Finale - Coppa Italia - 2025 - Calcio - Evento sportivo"
  },
  {
    "rank": 14,
    "entity": "arsenal - fulham",
    "discover_score": 0.7853750158829504,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.7983193277310925,
    "score_7d": 2.0887573964497044,
    "saturation_score": 1.0104407308511596,
    "extracted_entities": "Arsenal - Fulham - Calcio - Premier League - Partita"
  },
  {
    "rank": 25,
    "entity": "cory booker",
    "discover_score": 0.771107452246287,
    "score_1h": 0.0,
    "score_4h": 0.5609243697478992,
    "score_7d": 2.3520710059171597,
    "saturation_score": 1.0,
    "extracted_entities": "Cory Booker - Politica - Senato USA - New Jersey"
  },
  {
    "rank": 18,
    "entity": "nuggets - timberwolves",
    "discover_score": 0.7235139547474136,
    "score_1h": 3.1293103448275863,
    "score_4h": 4.504201680672269,
    "score_7d": 1.047337278106509,
    "saturation_score": 1.0,
    "extracted_entities": "Denver Nuggets - Minnesota Timberwolves - NBA - Partita di basket - Squadre di basket"
  },
  {
    "rank": 12,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.6544676508478218,
    "score_1h": 0.8189655172413793,
    "score_4h": 1.1487728982806513,
    "score_7d": 1.5295857988165682,
    "saturation_score": 1.0,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League"
  },
  {
    "rank": 15,
    "entity": "giovanni bagnasco",
    "discover_score": 0.6404353954377093,
    "score_1h": 13.068965517241379,
    "score_4h": 2.1323529411764706,
    "score_7d": 1.304733727810651,
    "saturation_score": 1.0,
    "extracted_entities": "Giovanni Bagnasco"
  },
  {
    "rank": 46,
    "entity": "richard norton",
    "discover_score": 0.6395823253490643,
    "score_1h": 1.4827586206896552,
    "score_4h": 0.20168067226890757,
    "score_7d": 2.210059171597633,
    "saturation_score": 1.0,
    "extracted_entities": "Richard Norton"
  },
  {
    "rank": 16,
    "entity": "bonus 1000 euro",
    "discover_score": 0.6021589936344254,
    "score_1h": 2.387931034482759,
    "score_4h": 2.913065644667909,
    "score_7d": 1.0059171597633136,
    "saturation_score": 1.0,
    "extracted_entities": "Bonus - 1000 euro - Incentivi - Finanziamenti"
  },
  {
    "rank": 35,
    "entity": "tredici pietro psicofarmaci",
    "discover_score": 0.5957196249894776,
    "score_1h": 0.3017241379310345,
    "score_4h": 0.07773109243697479,
    "score_7d": 1.982248520710059,
    "saturation_score": 1.0,
    "extracted_entities": "Tredici Pietro - Psicofarmaci - Musica"
  },
  {
    "rank": 23,
    "entity": "filippo bonacchi",
    "discover_score": 0.5742253938841563,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.058823529411764705,
    "score_7d": 1.7721893491124259,
    "saturation_score": 1.0,
    "extracted_entities": "Filippo Bonacchi"
  },
  {
    "rank": 24,
    "entity": "idris",
    "discover_score": 0.5280025272032745,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.20121479554164762,
    "score_7d": 1.5798816568047338,
    "saturation_score": 1.0,
    "extracted_entities": "Idris"
  },
  {
    "rank": 38,
    "entity": "dallinga",
    "discover_score": 0.5230654555834748,
    "score_1h": 0.25,
    "score_4h": 0.4241236243451355,
    "score_7d": 1.6331360946745561,
    "saturation_score": 1.0,
    "extracted_entities": "Dallinga"
  },
  {
    "rank": 44,
    "entity": "enrico rizzi",
    "discover_score": 0.5117022360990874,
    "score_1h": 0.0,
    "score_4h": 0.6386554621848739,
    "score_7d": 1.5710059171597632,
    "saturation_score": 1.0,
    "extracted_entities": "Enrico Rizzi - Attivista - Animalismo - Diritti degli animali"
  },
  {
    "rank": 37,
    "entity": "grizzlies - warriors",
    "discover_score": 0.46055278750927436,
    "score_1h": 0.0,
    "score_4h": 0.4873949579831933,
    "score_7d": 1.363905325443787,
    "saturation_score": 1.0,
    "extracted_entities": "Grizzlies - Warriors - NBA - Partita - Basket"
  },
  {
    "rank": 27,
    "entity": "giulia penna",
    "discover_score": 0.4490538033743053,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.3088235294117647,
    "score_7d": 1.2899408284023668,
    "saturation_score": 1.0,
    "extracted_entities": "Giulia Penna - Cantante - Influencer - Italia"
  },
  {
    "rank": 40,
    "entity": "lucia bronzetti",
    "discover_score": 0.42148126461983604,
    "score_1h": 0.1896551724137931,
    "score_4h": 0.7773109243697479,
    "score_7d": 1.1479289940828403,
    "saturation_score": 1.0,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia"
  },
  {
    "rank": 19,
    "entity": "vincenzo sarno",
    "discover_score": 0.3753893585706722,
    "score_1h": 0.8448275862068966,
    "score_4h": 0.14245279701838895,
    "score_7d": 0.9822485207100592,
    "saturation_score": 1.1352794695628694,
    "extracted_entities": "Vincenzo Sarno - Calciatore - Italia - Sport"
  },
  {
    "rank": 43,
    "entity": "cristiano ronaldo inter",
    "discover_score": 0.3664131030415169,
    "score_1h": 0.0,
    "score_4h": 0.13445378151260504,
    "score_7d": 1.1153846153846154,
    "saturation_score": 1.0,
    "extracted_entities": "Cristiano Ronaldo - Inter - Calcio - Trasferimenti"
  },
  {
    "rank": 49,
    "entity": "stai con me oggi",
    "discover_score": 0.32381134457834065,
    "score_1h": 0.0,
    "score_4h": 0.06694560669456066,
    "score_7d": 0.9792899408284024,
    "saturation_score": 1.0,
    "extracted_entities": "Stai con me - Oggi - Canzone - Musica"
  },
  {
    "rank": 32,
    "entity": "cristiano iovino",
    "discover_score": 0.282203298916347,
    "score_1h": 0.0,
    "score_4h": 0.5858971203544179,
    "score_7d": 0.5946745562130178,
    "saturation_score": 1.2630884161891331,
    "extracted_entities": "Cristiano Iovino"
  },
  {
    "rank": 47,
    "entity": "coppa di francia",
    "discover_score": 0.2517373247274936,
    "score_1h": 0.0,
    "score_4h": 0.2855824338103442,
    "score_7d": 0.6005917159763314,
    "saturation_score": 1.0,
    "extracted_entities": "Coppa di Francia - Calcio - Francia - Torneo - Competizione"
  },
  {
    "rank": 30,
    "entity": "sinodo",
    "discover_score": 0.23290995684416474,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.03361344537815126,
    "score_7d": 0.5295857988165681,
    "saturation_score": 6.85247967357715,
    "extracted_entities": "Sinodo - Chiesa Cattolica - Assemblea - Vescovi - Vaticano"
  },
  {
    "rank": 48,
    "entity": "risultati coppa italia",
    "discover_score": 0.1490189470920342,
    "score_1h": 0.0,
    "score_4h": 0.2668067226890756,
    "score_7d": 0.15384615384615385,
    "saturation_score": 1.0,
    "extracted_entities": "Coppa Italia - Risultati - Calcio - Competizione"
  },
  {
    "rank": 29,
    "entity": "angelo madonia",
    "discover_score": 0.13520137603108917,
    "score_1h": 0.4827586206896552,
    "score_4h": 0.19260047115080342,
    "score_7d": 0.07988165680473373,
    "saturation_score": 1.0,
    "extracted_entities": "Angelo Madonia"
  }
];

const runMetadata = {
  "timestamp": "2025-04-02 08:51:38 ",
  "trends_count": 50,
  "total_trends_processed": 220,
  "top_discover_score": 16.005991769344273,
  "runtime_seconds": 374.7065329551697,
  "proxies_available": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_browser": "chrome124",
  "saturation_url": "https://www.google.com",
  "runtime_minutes": 6.25
};
