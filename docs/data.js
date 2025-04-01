const trendData = [
  {
    "rank": 39,
    "entity": "poste italiane",
    "discover_score": 26.92994091804285,
    "score_1h": 71.52586206896552,
    "score_4h": 42.0672268907563,
    "score_7d": 51.53846153846154,
    "extracted_entities": "Poste Italiane - Servizi Postali - Italia - Logistica - Spedizioni"
  },
  {
    "rank": 9,
    "entity": "rolex",
    "discover_score": 16.42178001196918,
    "score_1h": 42.13793103448276,
    "score_4h": 41.61134453781513,
    "score_7d": 19.98224852071006,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Gioielleria - Collezionismo"
  },
  {
    "rank": 43,
    "entity": "noipa",
    "discover_score": 14.037857963657451,
    "score_1h": 51.81896551724138,
    "score_4h": 39.77731092436975,
    "score_7d": 27.09171597633136,
    "extracted_entities": "NoiPA - Portale - Stipendi - Pubblica Amministrazione"
  },
  {
    "rank": 45,
    "entity": "aprile",
    "discover_score": 10.20747832649998,
    "score_1h": 87.11206896551724,
    "score_4h": 56.24579831932773,
    "score_7d": 14.781065088757396,
    "extracted_entities": "Mese - Primavera - Eventi - Festività"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 8.95016750256998,
    "score_1h": 55.5,
    "score_4h": 37.7373949579832,
    "score_7d": 3.257396449704142,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 41,
    "entity": "mps",
    "discover_score": 8.893232966602381,
    "score_1h": 34.612068965517246,
    "score_4h": 43.89705882352941,
    "score_7d": 14.186390532544378,
    "extracted_entities": "Monte dei Paschi di Siena - Banca - Finanza - Italia - Crisi bancaria"
  },
  {
    "rank": 23,
    "entity": "vasco rossi",
    "discover_score": 8.182310277533853,
    "score_1h": 11.53448275862069,
    "score_4h": 4.226890756302521,
    "score_7d": 20.07396449704142,
    "extracted_entities": "Vasco Rossi - Cantante - Musica Italiana - Concerti - Rock"
  },
  {
    "rank": 3,
    "entity": "sara campanella",
    "discover_score": 5.598119626593892,
    "score_1h": 35.13793103448276,
    "score_4h": 32.97268907563025,
    "score_7d": 2.9526627218934913,
    "extracted_entities": "Sara Campanella"
  },
  {
    "rank": 2,
    "entity": "lazio - torino",
    "discover_score": 5.32864126782764,
    "score_1h": 28.155172413793103,
    "score_4h": 26.308823529411764,
    "score_7d": 3.005917159763314,
    "extracted_entities": "Lazio - Torino - Calcio - Serie A - Partita"
  },
  {
    "rank": 22,
    "entity": "1 aprile",
    "discover_score": 4.66958116303889,
    "score_1h": 69.9396551724138,
    "score_4h": 35.63025210084034,
    "score_7d": 4.511834319526628,
    "extracted_entities": "Pesce d'aprile - Tradizioni - Scherzi - Eventi storici - Calendario"
  },
  {
    "rank": 46,
    "entity": "lba",
    "discover_score": 3.6805732260501904,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.22899159663865548,
    "score_7d": 12.121301775147929,
    "extracted_entities": "Lega Basket Serie A - Basket - Italia"
  },
  {
    "rank": 42,
    "entity": "whatsapp intelligenza artificiale",
    "discover_score": 3.6022583231117022,
    "score_1h": 1.0517241379310345,
    "score_4h": 0.25630252100840334,
    "score_7d": 11.70414201183432,
    "extracted_entities": "WhatsApp - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 21,
    "entity": "lacerenza",
    "discover_score": 3.080147291697267,
    "score_1h": 23.79310344827586,
    "score_4h": 7.069327731092437,
    "score_7d": 7.1952662721893486,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 6,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 2.1840231909496097,
    "score_1h": 9.35344827586207,
    "score_4h": 13.794117647058822,
    "score_7d": 1.982248520710059,
    "extracted_entities": "Banconote - 50 euro - Ritiro"
  },
  {
    "rank": 18,
    "entity": "blow",
    "discover_score": 2.0393912815749324,
    "score_1h": 0.0,
    "score_4h": 1.0714285714285714,
    "score_7d": 5.816568047337278,
    "extracted_entities": "Film - Musica - Colpo - Soffiare"
  },
  {
    "rank": 47,
    "entity": "angelina mango",
    "discover_score": 1.9443047944815701,
    "score_1h": 3.8534482758620685,
    "score_4h": 1.7394957983193278,
    "score_7d": 6.393491124260355,
    "extracted_entities": "Angelina Mango"
  },
  {
    "rank": 10,
    "entity": "francesca brandoli",
    "discover_score": 1.8844469835568378,
    "score_1h": 0.0,
    "score_4h": 1.1071428571428572,
    "score_7d": 4.789940828402367,
    "extracted_entities": "Francesca Brandoli"
  },
  {
    "rank": 5,
    "entity": "paola motta giornalista sky",
    "discover_score": 1.8801678250541154,
    "score_1h": 4.155172413793103,
    "score_4h": 2.2142857142857144,
    "score_7d": 3.8224852071005917,
    "extracted_entities": "Paola Motta - Giornalista - Sky"
  },
  {
    "rank": 13,
    "entity": "apple intelligence",
    "discover_score": 1.556774065065667,
    "score_1h": 3.456896551724138,
    "score_4h": 4.384453781512605,
    "score_7d": 3.3224852071005917,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 38,
    "entity": "gf vip",
    "discover_score": 1.4742515357245962,
    "score_1h": 0.8706896551724138,
    "score_4h": 0.4852941176470588,
    "score_7d": 4.994082840236686,
    "extracted_entities": "Grande Fratello VIP - Reality Show - Italia"
  },
  {
    "rank": 32,
    "entity": "shaila e lorenzo",
    "discover_score": 1.3080968469190073,
    "score_1h": 0.0,
    "score_4h": 0.43067226890756305,
    "score_7d": 4.328402366863905,
    "extracted_entities": "Shaila - Lorenzo - Persone famose - Gossip - Intrattenimento"
  },
  {
    "rank": 15,
    "entity": "buongiorno 1 aprile 2025",
    "discover_score": 0.9450599764925991,
    "score_1h": 0.0,
    "score_4h": 4.063025210084033,
    "score_7d": 1.7603550295857988,
    "extracted_entities": "Buongiorno - 1 aprile 2025 - Eventi - Calendario"
  },
  {
    "rank": 30,
    "entity": "paros",
    "discover_score": 0.7587647397149319,
    "score_1h": 3.413793103448276,
    "score_4h": 0.39495798319327735,
    "score_7d": 2.4319526627218933,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Vacanze"
  },
  {
    "rank": 4,
    "entity": "verona - parma",
    "discover_score": 0.7429230248081901,
    "score_1h": 1.0689655172413792,
    "score_4h": 2.63655462184874,
    "score_7d": 1.0236686390532543,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 7,
    "entity": "francia marine le pen",
    "discover_score": 0.7073483113326904,
    "score_1h": 0.0,
    "score_4h": 0.9684873949579832,
    "score_7d": 1.5414201183431953,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 28,
    "entity": "taiwan",
    "discover_score": 0.7051391747303856,
    "score_1h": 1.5948275862068966,
    "score_4h": 0.3970588235294118,
    "score_7d": 2.21301775147929,
    "extracted_entities": "Taiwan - Cina - Taipei - Politica - Economia"
  },
  {
    "rank": 27,
    "entity": "chi vincerà il grande fratello 2025",
    "discover_score": 0.6245473546182414,
    "score_1h": 0.0,
    "score_4h": 0.3130252100840336,
    "score_7d": 1.9349112426035502,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 16,
    "entity": "mattia destro",
    "discover_score": 0.5449658164489481,
    "score_1h": 0.0,
    "score_4h": 0.6260504201680672,
    "score_7d": 1.4053254437869822,
    "extracted_entities": "Mattia Destro - Calciatore - Serie A - Italia - Genoa"
  },
  {
    "rank": 14,
    "entity": "lakers - rockets",
    "discover_score": 0.5371375166751201,
    "score_1h": 0.0,
    "score_4h": 1.4264705882352942,
    "score_7d": 1.1301775147928994,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket"
  },
  {
    "rank": 17,
    "entity": "silvia salis",
    "discover_score": 0.5359741865719333,
    "score_1h": 6.405172413793103,
    "score_4h": 2.9495798319327733,
    "score_7d": 0.7988165680473374,
    "extracted_entities": "Silvia Salis"
  },
  {
    "rank": 20,
    "entity": "sciopero 1 aprile 2025",
    "discover_score": 0.510405257122489,
    "score_1h": 1.6637931034482758,
    "score_4h": 0.4957983193277311,
    "score_7d": 1.3846153846153846,
    "extracted_entities": "Sciopero - 1 aprile 2025 - Protesta - Lavoratori - Sindacati"
  },
  {
    "rank": 26,
    "entity": "concorde",
    "discover_score": 0.46597293408961893,
    "score_1h": 5.974137931034482,
    "score_4h": 1.300420168067227,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Concorde - Aereo supersonico - Aviazione - Trasporto aereo - Storia dell'aviazione"
  },
  {
    "rank": 12,
    "entity": "tredici pietro",
    "discover_score": 0.426803858116677,
    "score_1h": 4.724137931034482,
    "score_4h": 0.9936974789915967,
    "score_7d": 0.8402366863905326,
    "extracted_entities": "Tredici Pietro - Musica - Cantante - Italia"
  },
  {
    "rank": 11,
    "entity": "virginia giuffre",
    "discover_score": 0.4182404027845969,
    "score_1h": 0.3620689655172414,
    "score_4h": 1.2184873949579833,
    "score_7d": 0.7366863905325444,
    "extracted_entities": "Virginia Giuffre - Caso Epstein - Traffico di minori - Abusi sessuali"
  },
  {
    "rank": 29,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.4151714654700635,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.8550420168067228,
    "score_7d": 1.029585798816568,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 36,
    "entity": "entella - torres",
    "discover_score": 0.41188377065242965,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Entella - Torres - Calcio - Partita - Serie C"
  },
  {
    "rank": 44,
    "entity": "eleonora abbagnato",
    "discover_score": 0.40403806949263726,
    "score_1h": 0.0,
    "score_4h": 0.11554621848739496,
    "score_7d": 1.2810650887573964,
    "extracted_entities": "Eleonora Abbagnato - Ballerina - Danza - Teatro - Opera di Parigi"
  },
  {
    "rank": 35,
    "entity": "napoli - olimpia milano",
    "discover_score": 0.4035398668172538,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.2542016806722689,
    "score_7d": 1.1893491124260356,
    "extracted_entities": "Napoli - Olimpia Milano - Basket - Serie A - Partita"
  },
  {
    "rank": 19,
    "entity": "luca nardi",
    "discover_score": 0.40075662246817473,
    "score_1h": 12.448275862068966,
    "score_4h": 3.321428571428571,
    "score_7d": 0.30177514792899407,
    "extracted_entities": "Luca Nardi"
  },
  {
    "rank": 40,
    "entity": "virtus bologna - reggiana",
    "discover_score": 0.3665509617753325,
    "score_1h": 0.0,
    "score_4h": 0.23319327731092437,
    "score_7d": 1.0739644970414202,
    "extracted_entities": "Virtus Bologna - Reggiana - Pallacanestro - Serie A - Derby"
  },
  {
    "rank": 49,
    "entity": "enrico rizzi",
    "discover_score": 0.32108364294997505,
    "score_1h": 0.0,
    "score_4h": 0.18487394957983194,
    "score_7d": 0.9349112426035504,
    "extracted_entities": "Enrico Rizzi"
  },
  {
    "rank": 34,
    "entity": "monte amiata",
    "discover_score": 0.264577635114955,
    "score_1h": 0.896551724137931,
    "score_4h": 0.25630252100840334,
    "score_7d": 0.6183431952662721,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursionismo"
  },
  {
    "rank": 8,
    "entity": "monica setta",
    "discover_score": 0.25637245897930994,
    "score_1h": 6.448275862068966,
    "score_4h": 1.5294117647058822,
    "score_7d": 0.11242603550295857,
    "extracted_entities": "Monica Setta - Giornalista - Televisione - Italia"
  },
  {
    "rank": 48,
    "entity": "luis henrique",
    "discover_score": 0.23889830083893912,
    "score_1h": 0.0,
    "score_4h": 0.2626050420168067,
    "score_7d": 0.5532544378698224,
    "extracted_entities": "Luis Henrique"
  },
  {
    "rank": 37,
    "entity": "bianca panconi attrice",
    "discover_score": 0.21877134919943736,
    "score_1h": 0.853448275862069,
    "score_4h": 0.46638655462184875,
    "score_7d": 0.3816568047337278,
    "extracted_entities": "Bianca Panconi - Attrice"
  },
  {
    "rank": 50,
    "entity": "rottamazione cartelle esattoriali",
    "discover_score": 0.20260491157124894,
    "score_1h": 1.3103448275862069,
    "score_4h": 0.4474789915966386,
    "score_7d": 0.34911242603550297,
    "extracted_entities": "Rottamazione - Cartelle esattoriali - Fisco - Debiti - Agenzia delle Entrate"
  },
  {
    "rank": 33,
    "entity": "greta scarano",
    "discover_score": 0.18375018734098023,
    "score_1h": 5.663793103448276,
    "score_4h": 0.5105042016806722,
    "score_7d": 0.21301775147928992,
    "extracted_entities": "Greta Scarano - Attrice - Italia - Cinema - Televisione"
  },
  {
    "rank": 25,
    "entity": "thomas muller",
    "discover_score": 0.16562703021642805,
    "score_1h": 1.5,
    "score_4h": 0.49789915966386555,
    "score_7d": 0.12130177514792899,
    "extracted_entities": "Thomas Muller - Calciatore - Bayern Monaco - Germania - Bundesliga"
  },
  {
    "rank": 24,
    "entity": "spider man brand new day",
    "discover_score": 0.1579640638755923,
    "score_1h": 0.0,
    "score_4h": 0.4054621848739496,
    "score_7d": 0.10946745562130178,
    "extracted_entities": "Spider-Man - Brand New Day - Fumetto - Marvel Comics - Peter Parker"
  },
  {
    "rank": 31,
    "entity": "loris karius",
    "discover_score": 0.13780185141183987,
    "score_1h": 0.0,
    "score_4h": 0.17857142857142858,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Loris Karius - Calciatore - Portiere - Sport - Bundesliga"
  },
  {
    "rank": 51,
    "entity": "lecco - giana erminio",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "mediaset infinity",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "gialappashow",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "trenitalia",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "tempostretto",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "chiara grande fratello",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "ezequiel lavezzi",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "as roma biglietti",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "allerta meteo catania",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "giuditta lualdi pallavolo",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "thunder - bulls",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "kkr vs mi",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "ekaterina antropova",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "grizzlies - celtics",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "istat",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "tesla",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "zlatan ibrahimović",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "fabio fognini",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "trenord",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "elodie",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "narni",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "nicola piovani",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "ilary blasi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "200 euro bonus bollette",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "gf news",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "voto grande fratello",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "april fools day",
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
    "entity": "frattesi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "terremoto",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "mavericks - nets",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "walter sabatini",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "bradley cooper",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "rachel zegler",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "martano",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "ema stokholma",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "buon martedì 1 aprile",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "ronaldo inter",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "serena dandini",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "asroma",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "mom",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "mediaset",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "biglietti lazio roma",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "fabio testi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "invalsi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "torneo di viareggio",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "asmaa uomini e donne",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "danny quinn",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "obbligo o verità",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "nuova scena",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "eclissi lunare",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "lady gaga milano biglietti",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "million day",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "petto di pollo",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "sanremonews",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "zeudi di palma",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "oroscopo scorpione",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "the chosen",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "canale 5 diretta",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "botic van de zandschulp",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "maria vittoria grande fratello",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "fareed zakaria",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "cesara buonamici",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "gatti",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "haaland",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "programmi tv",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "claudio martelli",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "teun koopmeiners",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "rupnik",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "sara ricci",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "mogol",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "panatta",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "montepremi grande fratello",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "twitch",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "eclissi lunare oggi",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "manlio messina",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "crosetto",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "celta vigo",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "الطقس غدًا",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "cameron diaz",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "lorenzo tano",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "asma uomini e donne",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "lakers",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "incidente a14",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "romano prodi",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "sammy basso",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "rocio munoz morales",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "isola dei famosi 2025",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "verona vs parma",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "pablo escobar",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "salas",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "alba parietti",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "diffidati serie a",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "antonio di pietro",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "corrado augias",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "caterina shulha",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "jim carrey",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "manuale per signorine",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "carlo calenda",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "tobey maguire",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "varenne",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "pacers - kings",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "stefano de martino",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "silvia sciorilli borrelli",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "jeff bezos",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "elon musk",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "marcelo salas",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "rebecca staffelli",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "bolivia",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "javier martinez gf",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "renzi",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "kings league italia",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "bali",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "volterra",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "martelli",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "ingv",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "piantedosi",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "iannone",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "red bull tv",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "andrew garfield",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "bertolucci tennis",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "trento",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "nicola canonico",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "maria vittoria minghetti",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "momix roma",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "ramandeep singh",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "bastian muller",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "cataniatoday",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "meteo pescara",
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
    "entity": "personal injury attorney",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "corea del nord",
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
    "entity": "affori",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "bill gates",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "dune",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "gazzettino",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "lega basket",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "wrestlemania 41",
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
    "entity": "paramount",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "aston martin",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "grosseto",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "kim soo-hyun",
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
    "entity": "starlink",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "reddit",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "guida tv",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "askatasuna",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "daredevil",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "justin bieber",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "loiodice",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "chiavari",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "castellabate",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "giornale di brescia",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "gianni sperti",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "parma inter",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "tom hanks",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "los angeles",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "palinsesto tv",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "incidente probatorio",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "manish pandey",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "oroscopo scorpione branko",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "le monde",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "robert de niro",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "giacomo caliendo",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "swat",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "accardi",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "paramount plus",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "vignesh puthur",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "chatgpt down",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "stanislav lobotka",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "giuseppe conte",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "valentino lazaro",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "oro",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "il trono di spade",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "elisabetta canalis",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "classifica kings league",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 10:46:01",
  "trends_count": 233,
  "top_score": 26.92994091804285,
  "runtime_minutes": 2.8341633756955464,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
