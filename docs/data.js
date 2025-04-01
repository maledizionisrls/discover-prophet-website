const trendData = [
  {
    "rank": 15,
    "entity": "unicredit",
    "discover_score": 19.9723853572383,
    "score_1h": 82.36206896551724,
    "score_4h": 31.039915966386552,
    "score_7d": 31.644970414201183,
    "extracted_entities": "Unicredit - Banca - Finanza - Italia - Servizi bancari"
  },
  {
    "rank": 49,
    "entity": "trenitalia",
    "discover_score": 15.574319718662952,
    "score_1h": 73.66510812390415,
    "score_4h": 40.88865546218487,
    "score_7d": 31.130177514792898,
    "extracted_entities": "Trenitalia - Trasporti - Ferrovie - Italia"
  },
  {
    "rank": 27,
    "entity": "mps",
    "discover_score": 11.517895094135662,
    "score_1h": 67.70382817066043,
    "score_4h": 37.47478991596638,
    "score_7d": 19.464497041420117,
    "extracted_entities": "Monte dei Paschi di Siena - Banca - Finanza - Italia - Crisi bancaria"
  },
  {
    "rank": 26,
    "entity": "poste italiane",
    "discover_score": 9.335743822475361,
    "score_1h": 71.48275862068965,
    "score_4h": 38.88025210084034,
    "score_7d": 14.41715976331361,
    "extracted_entities": "Poste Italiane - Servizi postali - Italia - Spedizioni - Pagamenti"
  },
  {
    "rank": 43,
    "entity": "lady gaga",
    "discover_score": 6.044676052400007,
    "score_1h": 24.146551724137932,
    "score_4h": 12.42436974789916,
    "score_7d": 15.159763313609467,
    "extracted_entities": "Lady Gaga - Cantante - Pop - Intrattenimento - Celebrità"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 5.348583579617174,
    "score_1h": 57.59482758620689,
    "score_4h": 23.539915966386555,
    "score_7d": 2.3757396449704142,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 47,
    "entity": "mediaset infinity",
    "discover_score": 5.347674010878817,
    "score_1h": 0.9827586206896551,
    "score_4h": 1.1701680672268908,
    "score_7d": 16.603550295857985,
    "extracted_entities": "Mediaset - Infinity - Streaming - Intrattenimento"
  },
  {
    "rank": 19,
    "entity": "1 aprile",
    "discover_score": 5.339495241754378,
    "score_1h": 63.991379310344826,
    "score_4h": 41.53781512605042,
    "score_7d": 4.488165680473372,
    "extracted_entities": "Pesce d'aprile - Tradizioni - Scherzi - Eventi storici - Calendario"
  },
  {
    "rank": 4,
    "entity": "sara campanella",
    "discover_score": 5.2969647246757185,
    "score_1h": 45.45689655172414,
    "score_4h": 26.344537815126053,
    "score_7d": 4.1923076923076925,
    "extracted_entities": "Sara Campanella"
  },
  {
    "rank": 10,
    "entity": "rolex",
    "discover_score": 5.224936024882667,
    "score_1h": 38.50131502045588,
    "score_4h": 19.084033613445378,
    "score_7d": 7.57396449704142,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Gioielleria - Collezionismo"
  },
  {
    "rank": 34,
    "entity": "noipa",
    "discover_score": 5.148583210775901,
    "score_1h": 53.218147282291056,
    "score_4h": 28.850840336134453,
    "score_7d": 8.059171597633135,
    "extracted_entities": "NoiPA - Portale - Stipendi - Pubblica Amministrazione - Italia"
  },
  {
    "rank": 2,
    "entity": "lazio - torino",
    "discover_score": 5.136673936715322,
    "score_1h": 47.296756282875506,
    "score_4h": 25.55672268907563,
    "score_7d": 2.911242603550296,
    "extracted_entities": "Lazio - Torino - Calcio - Serie A - Partita"
  },
  {
    "rank": 21,
    "entity": "gf",
    "discover_score": 4.350470487100653,
    "score_1h": 47.51724137931035,
    "score_4h": 29.214285714285715,
    "score_7d": 5.038461538461538,
    "extracted_entities": "Fidanzata - Relazioni - Amore - Coppia"
  },
  {
    "rank": 7,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 2.8408874920367175,
    "score_1h": 10.734804208065459,
    "score_4h": 7.8886554621848735,
    "score_7d": 4.810650887573964,
    "extracted_entities": "Banconote - 50 euro - Ritiro - Eurozona - Valuta"
  },
  {
    "rank": 42,
    "entity": "angelina mango",
    "discover_score": 2.744967612226986,
    "score_1h": 1.4224137931034482,
    "score_4h": 1.3340336134453783,
    "score_7d": 8.878698224852071,
    "extracted_entities": "Angelina Mango - Cantante - Musica - Italia"
  },
  {
    "rank": 6,
    "entity": "marine le pen",
    "discover_score": 2.5552043595729828,
    "score_1h": 6.724137931034482,
    "score_4h": 2.947478991596639,
    "score_7d": 5.242603550295858,
    "extracted_entities": "Marine Le Pen - Politica francese - Elezioni - Rassemblement National - Francia"
  },
  {
    "rank": 22,
    "entity": "grande fratello vincitore 2025",
    "discover_score": 2.5288941056441248,
    "score_1h": 16.525862068965516,
    "score_4h": 20.548319327731093,
    "score_7d": 2.6124260355029585,
    "extracted_entities": "Grande Fratello - Vincitore - 2025"
  },
  {
    "rank": 37,
    "entity": "whatsapp intelligenza artificiale",
    "discover_score": 2.3095641388628096,
    "score_1h": 0.0,
    "score_4h": 0.1869747899159664,
    "score_7d": 7.6982248520710055,
    "extracted_entities": "WhatsApp - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 17,
    "entity": "apple intelligence",
    "discover_score": 1.6583052459514545,
    "score_1h": 1.9465225014611338,
    "score_4h": 5.117647058823529,
    "score_7d": 3.633136094674556,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 9,
    "entity": "francesca brandoli",
    "discover_score": 1.5344691938984427,
    "score_1h": 0.0,
    "score_4h": 0.4243697478991597,
    "score_7d": 4.005917159763314,
    "extracted_entities": "Francesca Brandoli"
  },
  {
    "rank": 3,
    "entity": "verona - parma",
    "discover_score": 1.5074974599291697,
    "score_1h": 0.5086206896551724,
    "score_4h": 1.5,
    "score_7d": 2.8136094674556213,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 5,
    "entity": "paola motta giornalista sky",
    "discover_score": 1.4526344212854991,
    "score_1h": 0.48275862068965514,
    "score_4h": 8.294117647058824,
    "score_7d": 1.4792899408284024,
    "extracted_entities": "Paola Motta - Giornalista - Sky"
  },
  {
    "rank": 30,
    "entity": "istat",
    "discover_score": 1.2678006344922823,
    "score_1h": 19.405172413793103,
    "score_4h": 6.7899159663865545,
    "score_7d": 2.4585798816568047,
    "extracted_entities": "ISTAT - Statistica - Italia - Dati demografici - Economia"
  },
  {
    "rank": 14,
    "entity": "buongiorno 1 aprile 2025",
    "discover_score": 1.2427005701200378,
    "score_1h": 2.353448275862069,
    "score_4h": 9.985294117647058,
    "score_7d": 1.2100591715976332,
    "extracted_entities": "Buongiorno - 1 aprile 2025 - Saluti - Data"
  },
  {
    "rank": 41,
    "entity": "lba",
    "discover_score": 1.0657176733073115,
    "score_1h": 0.13793103448275862,
    "score_4h": 0.5714285714285714,
    "score_7d": 3.6272189349112427,
    "extracted_entities": "Lega Basket Serie A - Pallacanestro - Campionato Italiano - Basket Professionistico"
  },
  {
    "rank": 35,
    "entity": "atp marrakech",
    "discover_score": 1.034635447676766,
    "score_1h": 0.6637931034482759,
    "score_4h": 0.6659663865546219,
    "score_7d": 3.399408284023669,
    "extracted_entities": "ATP - Marrakech - Tennis - Torneo"
  },
  {
    "rank": 16,
    "entity": "mattia destro",
    "discover_score": 1.0003526229686726,
    "score_1h": 0.0,
    "score_4h": 0.1827731092436975,
    "score_7d": 2.9822485207100593,
    "extracted_entities": "Mattia Destro - Calciatore - Serie A - Italia"
  },
  {
    "rank": 39,
    "entity": "blow",
    "discover_score": 0.9977813091217272,
    "score_1h": 0.0,
    "score_4h": 0.12815126050420167,
    "score_7d": 3.4822485207100593,
    "extracted_entities": "Film - Musica - Colonna sonora - Attori - Registi"
  },
  {
    "rank": 12,
    "entity": "monica setta",
    "discover_score": 0.9458755422863134,
    "score_1h": 5.301724137931035,
    "score_4h": 0.9012605042016807,
    "score_7d": 2.4733727810650885,
    "extracted_entities": "Monica Setta - Giornalista - Televisione - Italia"
  },
  {
    "rank": 13,
    "entity": "lakers - rockets",
    "discover_score": 0.9009113874865269,
    "score_1h": 1.603448275862069,
    "score_4h": 6.310924369747899,
    "score_7d": 1.0414201183431953,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket"
  },
  {
    "rank": 18,
    "entity": "sciopero 1 aprile 2025",
    "discover_score": 0.8848885711851449,
    "score_1h": 1.200905902980713,
    "score_4h": 1.1365546218487395,
    "score_7d": 2.4230769230769234,
    "extracted_entities": "Sciopero - 1 aprile 2025 - Protesta - Lavoratori - Sindacati"
  },
  {
    "rank": 28,
    "entity": "napoli - olimpia milano",
    "discover_score": 0.8046970579234247,
    "score_1h": 0.0,
    "score_4h": 0.19747899159663868,
    "score_7d": 2.618343195266272,
    "extracted_entities": "Napoli - Olimpia Milano - Basket - Serie A - Partita"
  },
  {
    "rank": 32,
    "entity": "helena prestes",
    "discover_score": 0.7703605423356316,
    "score_1h": 0.19491525423728814,
    "score_4h": 0.1323529411764706,
    "score_7d": 2.57396449704142,
    "extracted_entities": "Helena Prestes - Persone"
  },
  {
    "rank": 11,
    "entity": "virginia giuffre",
    "discover_score": 0.57433623492628,
    "score_1h": 0.29310344827586204,
    "score_4h": 1.5756302521008405,
    "score_7d": 1.1420118343195267,
    "extracted_entities": "Virginia Giuffre - Caso Epstein - Traffico sessuale - Vittime - Giustizia"
  },
  {
    "rank": 8,
    "entity": "francia marine le pen",
    "discover_score": 0.49216937519318704,
    "score_1h": 0.652542372881356,
    "score_4h": 0.40756302521008403,
    "score_7d": 1.1035502958579881,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 24,
    "entity": "as roma biglietti",
    "discover_score": 0.4789008087839338,
    "score_1h": 1.8620689655172413,
    "score_4h": 0.49789915966386555,
    "score_7d": 1.319526627218935,
    "extracted_entities": "AS Roma - Biglietti - Calcio - Partite - Stadio"
  },
  {
    "rank": 25,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.41920645640148135,
    "score_1h": 0.0,
    "score_4h": 0.4915966386554622,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 31,
    "entity": "entella - torres",
    "discover_score": 0.25409118689145654,
    "score_1h": 1.0258620689655173,
    "score_4h": 0.13445378151260504,
    "score_7d": 0.5946745562130178,
    "extracted_entities": "Entella - Torres - Calcio - Partita - Serie C"
  },
  {
    "rank": 50,
    "entity": "thunder - bulls",
    "discover_score": 0.24648850060121058,
    "score_1h": 0.0,
    "score_4h": 0.32983193277310924,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Thunder - Bulls - NBA - Partita - Basket"
  },
  {
    "rank": 29,
    "entity": "ekaterina antropova",
    "discover_score": 0.23142774059955112,
    "score_1h": 0.5254237288135594,
    "score_4h": 0.680672268907563,
    "score_7d": 0.3520710059171598,
    "extracted_entities": "Ekaterina Antropova - Pallavolo - Atleta"
  },
  {
    "rank": 44,
    "entity": "luis henrique",
    "discover_score": 0.2207449354732352,
    "score_1h": 0.0,
    "score_4h": 0.09033613445378151,
    "score_7d": 0.5088757396449705,
    "extracted_entities": "Luis Henrique - Calciatore - Brasile - Sport"
  },
  {
    "rank": 38,
    "entity": "eleonora abbagnato",
    "discover_score": 0.21917923904664577,
    "score_1h": 0.0,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.4881656804733728,
    "extracted_entities": "Eleonora Abbagnato - Ballerina - Danza - Teatro - Opera"
  },
  {
    "rank": 46,
    "entity": "lecco - giana erminio",
    "discover_score": 0.2161826098631198,
    "score_1h": 0.7203389830508474,
    "score_4h": 0.5756302521008403,
    "score_7d": 0.36686390532544383,
    "extracted_entities": "Lecco - Giana Erminio - Calcio - Partita - Serie C"
  },
  {
    "rank": 23,
    "entity": "spider man brand new day",
    "discover_score": 0.2107277619166701,
    "score_1h": 0.3305084745762712,
    "score_4h": 0.12184873949579832,
    "score_7d": 0.3846153846153846,
    "extracted_entities": "Spider-Man - Brand New Day - Fumetto - Marvel Comics - Peter Parker"
  },
  {
    "rank": 45,
    "entity": "asroma",
    "discover_score": 0.2045786236587363,
    "score_1h": 1.1120689655172413,
    "score_4h": 0.6617647058823529,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "AS Roma - Calcio - Serie A - Squadra di calcio - Roma"
  },
  {
    "rank": 40,
    "entity": "monte amiata",
    "discover_score": 0.20362186184801948,
    "score_1h": 1.260374050263004,
    "score_4h": 0.05672268907563025,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursionismo"
  },
  {
    "rank": 48,
    "entity": "rottamazione cartelle esattoriali",
    "discover_score": 0.1735858425046651,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.33136094674556216,
    "extracted_entities": "Rottamazione - Cartelle esattoriali - Fisco - Debiti - Agenzia delle Entrate"
  },
  {
    "rank": 33,
    "entity": "bianca panconi attrice",
    "discover_score": 0.16827170743051637,
    "score_1h": 0.0,
    "score_4h": 0.12605042016806722,
    "score_7d": 0.242603550295858,
    "extracted_entities": "Bianca Panconi - Attrice"
  },
  {
    "rank": 20,
    "entity": "tredici pietro",
    "discover_score": 0.16045857329751864,
    "score_1h": 0.6474284044418469,
    "score_4h": 0.2079831932773109,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Tredici Pietro - Musica - Cantante - Italia"
  },
  {
    "rank": 36,
    "entity": "virtus bologna - reggiana",
    "discover_score": 0.1267803857647091,
    "score_1h": 0.0,
    "score_4h": 0.031512605042016806,
    "score_7d": 0.09467455621301775,
    "extracted_entities": "Virtus Bologna - Reggiana - Pallacanestro - Serie A - Basket"
  },
  {
    "rank": 51,
    "entity": "gialappashow",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "april fools day",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "grizzlies - celtics",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "chiara grande fratello",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "walter sabatini",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "ezequiel lavezzi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "biglietti lazio roma",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "allerta meteo catania",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "giuditta lualdi pallavolo",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "nuvola",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "lazio roma biglietti",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "loris karius",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "kkr vs mi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "trenord",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "frattesi",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "200 euro bonus bollette",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "rachel zegler",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "tesla",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "zlatan ibrahimović",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "buon martedì 1 aprile",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "elodie",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "mavericks - nets",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "nicola piovani",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "gf news",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "ilary blasi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "terremoto",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "rupnik",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "celta vigo - las palmas",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "thomas muller",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "bradley cooper",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "martano",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "mom",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "oroscopo scorpione",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "ema stokholma",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "serena dandini",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "ronaldo inter",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "mediaset",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "zeudi di palma",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "the chosen",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "fabio testi",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "meteo oggi",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "obbligo o verità",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "torneo di viareggio",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "asmaa uomini e donne",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "nuova scena",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "danny quinn",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "eclissi lunare",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "million day",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "petto di pollo",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "canale 5 diretta",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "sanremonews",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "cesara buonamici",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "fareed zakaria",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "teun koopmeiners",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "paros",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "botic van de zandschulp",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "maria vittoria grande fratello",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "matteo messina denaro",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "haaland",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "gatti",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "chi vince il grande fratello",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "claudio martelli",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "lakers",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "montepremi grande fratello",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "panatta",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "sara ricci",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "mogol",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "crosetto",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "twitch",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "eclissi lunare oggi",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "celta vigo",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "manlio messina",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "cameron diaz",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "الطقس غدًا",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "romano prodi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "asma uomini e donne",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "isola dei famosi 2025",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "lorenzo tano",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "pacers - kings",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "rocio munoz morales",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "incidente a14",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "sammy basso",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "pablo escobar",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "verona vs parma",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "pedro",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "alba parietti",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "salas",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "caterina shulha",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "corrado augias",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "carlo calenda",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "manuale per signorine",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "jim carrey",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "tobey maguire",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "varenne",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "elon musk",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "stefano de martino",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "rebecca staffelli",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "silvia sciorilli borrelli",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "marcelo salas",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "jeff bezos",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "bolivia",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "kings league italia",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "milinkovic savic",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "renzi",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "ingv",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "davide lacerenza",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "antonio di pietro",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "daniel craig fabio fazio",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "bali",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "volterra",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "martelli",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "meteo pescara",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "di pietro",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "trento",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "red bull tv",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "iannone",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "andrew garfield",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "piantedosi",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "bertolucci tennis",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "mariavittoria gf",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "personal injury attorney",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "mcdonald's",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "bill gates",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "gazzettino",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "bastian muller",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "momix roma",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "maria vittoria minghetti",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "ramandeep singh",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "corea del nord",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "anna ascani",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "cataniatoday",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "nicola canonico",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "dyson",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "vanoli",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "dune",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "mario giordano",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "affori",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "wrestlemania 41",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "the couple ilary blasi",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "paramount",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "hunziker",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "aston martin",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "giornale di brescia",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "kim soo-hyun",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "grosseto",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "cristiano ronaldo",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "diletta leotta",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "starlink",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "lady gaga mastercard",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "guida tv",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "reddit",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "daredevil",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "justin bieber",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "askatasuna",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "chiavari",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "loiodice",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "castellabate",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "gianni sperti",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "parma inter",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "los angeles",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "silvia salis",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "tom hanks",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "penne",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "palinsesto tv",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "incidente probatorio",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "manish pandey",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "oroscopo scorpione branko",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "rovereto",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "le monde",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "robert de niro",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "giacomo caliendo",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "swat",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "paramount plus",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "accardi",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "vignesh puthur",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "chatgpt down",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "stanislav lobotka",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "parma inter biglietti",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "giuseppe conte",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "valentino lazaro",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "zazzaroni",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "il trono di spade",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "oro",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "elisabetta canalis",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "atp bucarest 2025",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 09:05:00",
  "trends_count": 239,
  "top_score": 19.9723853572383,
  "runtime_minutes": 2.9289586424827574,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
