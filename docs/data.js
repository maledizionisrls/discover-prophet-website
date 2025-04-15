const trendData = [
  {
    "rank": 24,
    "entity": "spotify",
    "discover_score": 17.754481364117165,
    "score_1h": 57.293103448275865,
    "score_4h": 16.03361344537815,
    "score_7d": 35.85710763595379,
    "extracted_entities": "Spotify - Streaming musicale - Playlist - Artisti - Podcast",
    "saturation_score": 62.0
  },
  {
    "rank": 11,
    "entity": "intesa sanpaolo",
    "discover_score": 14.217889036281255,
    "score_1h": 4.931034482758621,
    "score_4h": 0.7079831932773109,
    "score_7d": 27.818751761059453,
    "extracted_entities": "Intesa Sanpaolo - Banca - Finanza - Italia",
    "saturation_score": 453.0
  },
  {
    "rank": 37,
    "entity": "weather",
    "discover_score": 12.503572432850696,
    "score_1h": 57.71551724137932,
    "score_4h": 45.75,
    "score_7d": 21.338088193857423,
    "extracted_entities": "Meteo - Previsioni - Clima - Temperature - Condizioni atmosferiche",
    "saturation_score": 115.0
  },
  {
    "rank": 19,
    "entity": "meteo roma",
    "discover_score": 12.373122646034673,
    "score_1h": 57.12931034482759,
    "score_4h": 33.78361344537815,
    "score_7d": 20.03559101155255,
    "extracted_entities": "Meteo - Roma",
    "saturation_score": 78.0
  },
  {
    "rank": 20,
    "entity": "romatoday",
    "discover_score": 11.727337955331372,
    "score_1h": 0.3620689655172414,
    "score_4h": 0.6911764705882353,
    "score_7d": 27.408125528317836,
    "extracted_entities": "RomaToday - Notizie - Roma - Attualità - Cronaca",
    "saturation_score": 171.0
  },
  {
    "rank": 1,
    "entity": "napoli - empoli",
    "discover_score": 10.588828453928928,
    "score_1h": 59.38793103448276,
    "score_4h": 45.44327731092437,
    "score_7d": 3.41231684981685,
    "extracted_entities": "Napoli - Empoli - Calcio - Serie A - Partita",
    "saturation_score": 1340.0
  },
  {
    "rank": 12,
    "entity": "meteo napoli",
    "discover_score": 10.30327412113794,
    "score_1h": 57.189655172413794,
    "score_4h": 24.834033613445378,
    "score_7d": 16.063239644970416,
    "extracted_entities": "Meteo - Napoli - Previsioni",
    "saturation_score": 79.0
  },
  {
    "rank": 23,
    "entity": "randstad",
    "discover_score": 8.199560545711954,
    "score_1h": 4.612068965517242,
    "score_4h": 0.18907563025210083,
    "score_7d": 21.179997886728657,
    "extracted_entities": "Randstad - Agenzia per il lavoro - Risorse umane - Reclutamento - Lavoro temporaneo",
    "saturation_score": 515.0
  },
  {
    "rank": 15,
    "entity": "assegno unico aprile 2025",
    "discover_score": 8.167563725932837,
    "score_1h": 10.163793103448276,
    "score_4h": 1.8907563025210083,
    "score_7d": 18.86350028176951,
    "extracted_entities": "Assegno Unico - Aprile 2025 - Famiglie - Sostegno Economico",
    "saturation_score": 42.0
  },
  {
    "rank": 40,
    "entity": "fideuram",
    "discover_score": 5.987758198384831,
    "score_1h": 2.5258620689655173,
    "score_4h": 0.3298319327731093,
    "score_7d": 18.03358340377571,
    "extracted_entities": "Fideuram - Banca - Investimenti - Servizi finanziari",
    "saturation_score": 8.0
  },
  {
    "rank": 18,
    "entity": "catanzaro informa",
    "discover_score": 5.983386215141708,
    "score_1h": 4.482758620689655,
    "score_4h": 0.46638655462184875,
    "score_7d": 15.43769371653987,
    "extracted_entities": "Catanzaro - Notizie - Informazione - Calabria",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "achille lauro",
    "discover_score": 5.699385393239914,
    "score_1h": 6.060344827586207,
    "score_4h": 0.7100840336134453,
    "score_7d": 15.355328965905889,
    "extracted_entities": "Achille Lauro - Cantante - Musica - Italia - Sanremo",
    "saturation_score": 442.0
  },
  {
    "rank": 30,
    "entity": "allerta meteo",
    "discover_score": 4.034670916845649,
    "score_1h": 34.775862068965516,
    "score_4h": 15.180672268907562,
    "score_7d": 8.250440264863343,
    "extracted_entities": "Allerta - Meteo - Previsioni",
    "saturation_score": 491.0
  },
  {
    "rank": 3,
    "entity": "miccoli",
    "discover_score": 3.325973862212366,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.36134453781512604,
    "score_7d": 6.299767540152155,
    "extracted_entities": "Fabrizio Miccoli - Calciatore - Italia - Palermo - Lecce",
    "saturation_score": 4.0
  },
  {
    "rank": 50,
    "entity": "alberto angela",
    "discover_score": 2.915827971002949,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.30462184873949577,
    "score_7d": 9.960886869540715,
    "extracted_entities": "Alberto Angela - Personaggio pubblico - Divulgazione scientifica - Televisione - Cultura",
    "saturation_score": 66.0
  },
  {
    "rank": 41,
    "entity": "meteo parigi",
    "discover_score": 2.419300848925671,
    "score_1h": 3.4655172413793105,
    "score_4h": 0.8130252100840336,
    "score_7d": 7.9948753169907025,
    "extracted_entities": "Meteo - Parigi - Previsioni",
    "saturation_score": 4.0
  },
  {
    "rank": 6,
    "entity": "blue origin",
    "discover_score": 2.3999880329155556,
    "score_1h": 2.706896551724138,
    "score_4h": 0.7478991596638656,
    "score_7d": 5.486897717666949,
    "extracted_entities": "Blue Origin - Spazio - Viaggi spaziali - Jeff Bezos - Razzi",
    "saturation_score": 420.0
  },
  {
    "rank": 29,
    "entity": "referendum 8 9 giugno per cosa si vota",
    "discover_score": 1.834536562796337,
    "score_1h": 0.0,
    "score_4h": 0.2605042016806723,
    "score_7d": 5.9523809523809526,
    "extracted_entities": "Referendum - 8 giugno - 9 giugno - Votazione - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "crotone - foggia",
    "discover_score": 1.726781711708426,
    "score_1h": 3.086206896551724,
    "score_4h": 0.5504201680672269,
    "score_7d": 4.222439419554805,
    "extracted_entities": "Crotone - Foggia - Calcio - Serie C - Partita",
    "saturation_score": 116.0
  },
  {
    "rank": 5,
    "entity": "ministra calderone laurea",
    "discover_score": 1.7222578701878024,
    "score_1h": 1.3275862068965516,
    "score_4h": 0.3613445378151261,
    "score_7d": 3.9616969568892646,
    "extracted_entities": "Ministra Calderone - Laurea",
    "saturation_score": 1.0
  },
  {
    "rank": 2,
    "entity": "francesca fialdini",
    "discover_score": 1.3900695241095953,
    "score_1h": 3.8017241379310347,
    "score_4h": 0.32983193277310924,
    "score_7d": 2.5964708368554525,
    "extracted_entities": "Francesca Fialdini",
    "saturation_score": 66.0
  },
  {
    "rank": 9,
    "entity": "maxi lopez",
    "discover_score": 1.3389151261378216,
    "score_1h": 0.8362068965517241,
    "score_4h": 0.27941176470588236,
    "score_7d": 3.5458932093547477,
    "extracted_entities": "Maxi Lopez - Calciatore - Argentina - Sport - Serie A",
    "saturation_score": 9.0
  },
  {
    "rank": 8,
    "entity": "cast serie tv harry potter",
    "discover_score": 1.2505683198312754,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.5672268907563025,
    "score_7d": 3.160767117497887,
    "extracted_entities": "Cast - Serie TV - Harry Potter",
    "saturation_score": 2.0
  },
  {
    "rank": 34,
    "entity": "nicolò fagioli",
    "discover_score": 1.2290335176225844,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.0861344537815126,
    "score_7d": 4.205251479289941,
    "extracted_entities": "Nicolò Fagioli - Calciatore - Juventus - Serie A - Italia",
    "saturation_score": 70.0
  },
  {
    "rank": 4,
    "entity": "floriana calcagno",
    "discover_score": 1.220302766224532,
    "score_1h": 0.0,
    "score_4h": 0.39285714285714285,
    "score_7d": 2.6894547759932377,
    "extracted_entities": "Floriana Calcagno",
    "saturation_score": 121.0
  },
  {
    "rank": 48,
    "entity": "alessia marcuzzi",
    "discover_score": 0.8861850887196847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.2229501267962806,
    "extracted_entities": "Alessia Marcuzzi - Personaggio televisivo - Italia",
    "saturation_score": 50.0
  },
  {
    "rank": 45,
    "entity": "la mia signorina neffa",
    "discover_score": 0.8516013421539774,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.0626056635672017,
    "extracted_entities": "Neffa - La mia signorina - Canzone",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "alexander zverev",
    "discover_score": 0.8464602993632869,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.21008403361344538,
    "score_7d": 2.878187517610595,
    "extracted_entities": "Alexander Zverev - Tennis - ATP - Giocatore di tennis - Germania",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "bonus nuovi nati 2025",
    "discover_score": 0.8192543107026167,
    "score_1h": 0.0,
    "score_4h": 0.5252100840336134,
    "score_7d": 2.638489715412792,
    "extracted_entities": "Bonus - Nuovi Nati - 2025",
    "saturation_score": 89.0
  },
  {
    "rank": 38,
    "entity": "nick frost",
    "discover_score": 0.8072815784285831,
    "score_1h": 0.0,
    "score_4h": 0.40336134453781514,
    "score_7d": 2.707259087066779,
    "extracted_entities": "Nick Frost - Attore - Film - Commedia",
    "saturation_score": 2.0
  },
  {
    "rank": 10,
    "entity": "virtus bologna - brescia",
    "discover_score": 0.7183255617967127,
    "score_1h": 0.0,
    "score_4h": 0.01680672268907563,
    "score_7d": 1.959742180896027,
    "extracted_entities": "Virtus Bologna - Brescia - Basket - Partita - Serie A",
    "saturation_score": 7.0
  },
  {
    "rank": 47,
    "entity": "lsg vs csk",
    "discover_score": 0.6579544284318368,
    "score_1h": 0.0,
    "score_4h": 0.037815126050420166,
    "score_7d": 2.335499436460975,
    "extracted_entities": "LSG - CSK - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "aeronautica militare meteo",
    "discover_score": 0.6530617584569733,
    "score_1h": 4.732758620689655,
    "score_4h": 0.9390756302521008,
    "score_7d": 2.023386869540716,
    "extracted_entities": "Aeronautica Militare - Meteo - Previsioni - Aviazione",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "afc bournemouth - fulham",
    "discover_score": 0.6119472677172852,
    "score_1h": 0.0,
    "score_4h": 0.4159663865546218,
    "score_7d": 1.6174802761341223,
    "extracted_entities": "AFC Bournemouth - Fulham - Partita di calcio - Premier League",
    "saturation_score": 1.0
  },
  {
    "rank": 39,
    "entity": "sudan",
    "discover_score": 0.596981723366338,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.7605042016806722,
    "score_7d": 1.8329282896590589,
    "extracted_entities": "Sudan - Conflitto - Crisi umanitaria - Khartoum - Governo",
    "saturation_score": 173.0
  },
  {
    "rank": 44,
    "entity": "david bowie",
    "discover_score": 0.5914422053955708,
    "score_1h": 0.0,
    "score_4h": 0.23319327731092437,
    "score_7d": 1.998326993519301,
    "extracted_entities": "David Bowie - Musica - Cantante - Glam Rock - Icona Pop",
    "saturation_score": 43.0
  },
  {
    "rank": 14,
    "entity": "buon martedi 15 aprile",
    "discover_score": 0.5490652271071528,
    "score_1h": 3.78448275862069,
    "score_4h": 0.6197478991596639,
    "score_7d": 1.3816039729501268,
    "extracted_entities": "Martedì - 15 aprile - Buongiorno",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "salone del risparmio 2025",
    "discover_score": 0.490234619914584,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0,
    "score_7d": 1.567430966469428,
    "extracted_entities": "Salone del Risparmio - 2025 - Evento - Finanza - Investimenti",
    "saturation_score": 5.0
  },
  {
    "rank": 46,
    "entity": "atlético madrid vs valladolid",
    "discover_score": 0.46278927221090727,
    "score_1h": 0.0,
    "score_4h": 0.12815126050420167,
    "score_7d": 1.528564384333615,
    "extracted_entities": "Atlético Madrid - Valladolid - Partita di calcio - La Liga",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "orban",
    "discover_score": 0.44480619422420875,
    "score_1h": 0.0,
    "score_4h": 0.14705882352941177,
    "score_7d": 1.3822203437588052,
    "extracted_entities": "Viktor Orbán - Ungheria - Politica",
    "saturation_score": 55.0
  },
  {
    "rank": 28,
    "entity": "buon martedì 15 aprile",
    "discover_score": 0.4052658366952865,
    "score_1h": 0.0,
    "score_4h": 0.5525210084033614,
    "score_7d": 1.0652824739363203,
    "extracted_entities": "Martedì - 15 aprile - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "elezioni monfalcone 2025",
    "discover_score": 0.35590149401395627,
    "score_1h": 2.4310344827586206,
    "score_4h": 0.4369747899159664,
    "score_7d": 0.9370069033530573,
    "extracted_entities": "Elezioni - Monfalcone - 2025",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "pensioni aumenti 2026",
    "discover_score": 0.35334524793982425,
    "score_1h": 3.836206896551724,
    "score_4h": 0.6743697478991597,
    "score_7d": 0.8179064525218371,
    "extracted_entities": "Pensioni - Aumenti - 2026",
    "saturation_score": 1.0
  },
  {
    "rank": 16,
    "entity": "eros ramazzotti tour mondiale",
    "discover_score": 0.29419132334936027,
    "score_1h": 2.103448275862069,
    "score_4h": 0.5861344537815126,
    "score_7d": 0.5374577345731192,
    "extracted_entities": "Eros Ramazzotti - Tour Mondiale - Concerti - Musica",
    "saturation_score": 3.0
  },
  {
    "rank": 43,
    "entity": "nicky katt",
    "discover_score": 0.26610610852048205,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.38445378151260506,
    "score_7d": 0.6238377007607776,
    "extracted_entities": "Nicky Katt - Attore - Film - Televisione",
    "saturation_score": 57.0
  },
  {
    "rank": 17,
    "entity": "pino insegno",
    "discover_score": 0.23938563934531448,
    "score_1h": 0.0,
    "score_4h": 0.025210084033613446,
    "score_7d": 0.4866335587489434,
    "extracted_entities": "Pino Insegno - Attore - Doppiatore - Televisione",
    "saturation_score": 2.0
  },
  {
    "rank": 21,
    "entity": "gianluigi aponte",
    "discover_score": 0.2161015113325077,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.16176470588235292,
    "score_7d": 0.38572485207100593,
    "extracted_entities": "Gianluigi Aponte - MSC Crociere - Trasporti marittimi",
    "saturation_score": 7.0
  },
  {
    "rank": 49,
    "entity": "spider-man 2",
    "discover_score": 0.19497737745499286,
    "score_1h": 0.0,
    "score_4h": 0.08823529411764706,
    "score_7d": 0.40669907016060863,
    "extracted_entities": "Spider-Man 2 - Film - Supereroi - Marvel",
    "saturation_score": 42.0
  },
  {
    "rank": 25,
    "entity": "antonella viola",
    "discover_score": 0.15918322547875385,
    "score_1h": 0.0,
    "score_4h": 0.18277310924369747,
    "score_7d": 0.16865666384897154,
    "extracted_entities": "Antonella Viola - Immunologia - Ricerca scientifica",
    "saturation_score": 74.0
  },
  {
    "rank": 27,
    "entity": "miriana trevisan",
    "discover_score": 0.1578180322298025,
    "score_1h": 0.0,
    "score_4h": 0.0861344537815126,
    "score_7d": 0.19237813468582698,
    "extracted_entities": "Miriana Trevisan - Personaggio televisivo - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 51,
    "entity": "terremoto san diego",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "michela ponzani",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "club deportivo garcilaso - alianza lima",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "paola barale",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "antonino spinalbese",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "holger rune",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "irma testa",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "cristina d'avena",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "matteo arnaldi",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "alessandra mao",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "atp monaco",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "mission impossible",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "calendario napoli",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "enel energia",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "ben shelton",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "atletico madrid",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "zambrotta",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "jasmine carrisi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "sebastiano esposito",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "corsi indire sostegno",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "filippo bisciglia",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "prossimo turno serie a",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "elton john",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "morto mario vargas llosa",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "gianni morandi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "società sportiva calcio napoli",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "brigitta boccoli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "eugene the last of us",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "dicastero per il clero",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "bella ramsey",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "coldplay",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "osimhen",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "londra",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "thomas commisso",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "carpi - legnago",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "elezioni presidenziali ecuador",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "conte juventus",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "tronchetti provera",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "luca barbareschi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "cfr cluj - rapid bucarest",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "rolling stones",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "elena barolo",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "last of us",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "gaudi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "manila nazzaro",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "francesca fagnani",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "monica setta",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "tuttonapoli",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "san diego",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "uova alla jova",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "andrea tabanelli",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "romelu lukaku",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "tirrenia",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "royal albert hall",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "ilary blasi",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "miriam leone",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "tommaso cassissa",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "coffee",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "laura maddaloni",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "sallusti",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "piero angela",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "napoli stasera",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "regina elisabetta",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "denzel washington",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "lady diana",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "juan jesus",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "queen",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "rettore",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "piero de luca",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "tallon griekspoor",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "lucia bronzetti",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "giuliano simeone",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "chris martin",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "nvidia",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "gds",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "restaurant",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "nadia battocletti",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "lucio caracciolo",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "sean connery",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "wembley stadium",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "potapova",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "meteo trento",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "rotterdam",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "politano",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "fiera milano live",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "manuela moreno",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "spider man 3",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "liam neeson",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "fuochi d'artificio serie tv",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "kirsten dunst",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "milly carlucci",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "the beatles",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "boschi",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "damiano david",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "rita ora",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "maggie smith",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "luca tommassini",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "shaik rasheed",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "jankulovski",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "dua lipa",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "new shepard",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "marianucci",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "camden town",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "albano",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "julia roberts",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "monghidoro",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "crosetto",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "tiantsoa sarah rakotomanga rajaonah",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "bill gates",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "partite inter",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "big ben",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "amman",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "lacerenza",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "vialli",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "marcegaglia",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "enrico mentana",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "istanbul",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "criminal defense attorney",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "mario vargas llosa nobel",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "parabiago",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "ministero della giustizia",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "marcello foa",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "del mastro",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "mcdonald's",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "vallecorsa",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "san benedetto del tronto",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "gianni letta",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "stefano conti",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "benedicta boccoli",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "radio kiss kiss napoli",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "massimo ranieri",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "henderson empoli",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "fiera milano",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "streaming",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "dexter",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "bohemian rhapsody",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "incidente martin",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "ps5",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "crepet",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "rakotomanga",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "cacia",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "panama",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "pixel 9a",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "saipem azioni",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "michele bravi",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "elezioni rsu",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-15 07:02:42",
  "trends_count": 200,
  "top_score": 17.754481364117165,
  "runtime_minutes": 5.4992164691289265,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle curve serpentine dei trend, emergono come dominanti i territori della musica e del meteo. La presenza di \"Spotify\" (#1) e di artisti come \"Achille Lauro\" (#12) illuminano la via verso l’armonia e la creatività, mentre le previsioni atmosferiche su diverse città come \"meteo Roma\" (#4) tratteggiano la tela del giorno con il pennello del clima.\n\nTra i sentieri impervi del potenziale, \"Spotify\" (#1) si erge come tempio dell'opportunità per contenuti innovativi su Google Discover, grazie al suo alto DScore, e una saturazione che lascia ampia possibilità di esplorazione. Anche \"Meteo Roma\" (#4) possiede lo slancio necessario per captare attenzione, in un'area poco congestionata.\n\nD'altro canto, la frenesia calcistica di \"Napoli - Empoli\" (#6) deve destare cautela. L'altissima saturazione rischia di sommergere i nuovi racconti in un mare troppo affollato, sfuggendo dall'identificazione individuale. Un saggio avrebbe dunque scelto vie più aperte e meno battute.\n\nNell'arte di creare contenuti, la chiave è bilanciare l'innovazione con la visibilità, esplorando nuovi strumenti e territori, mentre si naviga con attenzione le correnti delle tendenze."
};
