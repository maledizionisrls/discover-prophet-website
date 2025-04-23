const trendData = [
  {
    "rank": 45,
    "entity": "tesla",
    "discover_score": 18.127965616324087,
    "score_1h": 50.0,
    "score_4h": 28.126050420168067,
    "score_7d": 39.1094674556213,
    "extracted_entities": "Tesla - Elon Musk - Auto elettriche - Energia sostenibile - Innovazione tecnologica",
    "saturation_score": 617.0
  },
  {
    "rank": 46,
    "entity": "nba",
    "discover_score": 13.4217235348849,
    "score_1h": 56.146551724137936,
    "score_4h": 40.59873949579832,
    "score_7d": 25.98224852071006,
    "extracted_entities": "NBA - Basket - Stati Uniti - Campionato - Giocatori",
    "saturation_score": 288.0
  },
  {
    "rank": 42,
    "entity": "weather",
    "discover_score": 12.847741768100699,
    "score_1h": 50.5,
    "score_4h": 35.32563025210084,
    "score_7d": 25.431952662721894,
    "extracted_entities": "Meteo - Previsioni - Clima - Temperature - Condizioni atmosferiche",
    "saturation_score": 122.0
  },
  {
    "rank": 8,
    "entity": "coppa italia inter milan",
    "discover_score": 6.196552335264718,
    "score_1h": 27.086206896551722,
    "score_4h": 18.497899159663866,
    "score_7d": 8.923076923076923,
    "extracted_entities": "Coppa Italia - Inter - Milan",
    "saturation_score": 30.0
  },
  {
    "rank": 4,
    "entity": "sophie nyweide",
    "discover_score": 4.078498095047201,
    "score_1h": 19.67241379310345,
    "score_4h": 13.989495798319329,
    "score_7d": 4.813609467455621,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 289.0
  },
  {
    "rank": 13,
    "entity": "santo del giorno",
    "discover_score": 3.35225403747663,
    "score_1h": 2.293103448275862,
    "score_4h": 1.3970588235294117,
    "score_7d": 8.550295857988166,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 10.0
  },
  {
    "rank": 1,
    "entity": "barcellona - mallorca",
    "discover_score": 3.1640728413509454,
    "score_1h": 0.8620689655172413,
    "score_4h": 4.329831932773109,
    "score_7d": 3.556213017751479,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 11,
    "entity": "letto contenitore",
    "discover_score": 3.117728550255676,
    "score_1h": 18.63793103448276,
    "score_4h": 5.168067226890756,
    "score_7d": 6.7514792899408285,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto - Spazio di archiviazione",
    "saturation_score": 86.0
  },
  {
    "rank": 2,
    "entity": "manchester city - aston villa",
    "discover_score": 2.6647509969009637,
    "score_1h": 5.155172413793103,
    "score_4h": 3.476890756302521,
    "score_7d": 3.943786982248521,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 116.0
  },
  {
    "rank": 3,
    "entity": "nantes - psg",
    "discover_score": 2.504928711626087,
    "score_1h": 1.7095265926358854,
    "score_4h": 1.7016806722689077,
    "score_7d": 4.600591715976332,
    "extracted_entities": "Nantes - PSG - Calcio - Ligue 1 - Partita",
    "saturation_score": 10.0
  },
  {
    "rank": 33,
    "entity": "conegliano volley",
    "discover_score": 2.228377294181051,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.2647058823529412,
    "score_7d": 7.28698224852071,
    "extracted_entities": "Conegliano - Volley - Imoco Volley - Pallavolo femminile",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "lakers - timberwolves",
    "discover_score": 2.0201280185726453,
    "score_1h": 2.9827586206896552,
    "score_4h": 7.195378151260504,
    "score_7d": 4.310650887573965,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 5,
    "entity": "allerta grandine",
    "discover_score": 1.8706433126342625,
    "score_1h": 6.387931034482758,
    "score_4h": 6.53781512605042,
    "score_7d": 2.7485207100591715,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 7.0
  },
  {
    "rank": 28,
    "entity": "wta madrid",
    "discover_score": 1.856078784247617,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.46218487394957986,
    "score_7d": 5.92603550295858,
    "extracted_entities": "WTA - Madrid - Tennis - Torneo - Giocatrici",
    "saturation_score": 154.0
  },
  {
    "rank": 47,
    "entity": "estrazione lotto oggi",
    "discover_score": 1.7918413158178434,
    "score_1h": 0.6551724137931034,
    "score_4h": 1.176470588235294,
    "score_7d": 6.047337278106509,
    "extracted_entities": "Estrazione - Lotto - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 25,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 1.6030442681397803,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.17016806722689076,
    "score_7d": 5.133136094674557,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Polizia di Stato",
    "saturation_score": 5.0
  },
  {
    "rank": 9,
    "entity": "inter roma quando si gioca",
    "discover_score": 1.5862235531604538,
    "score_1h": 2.9913793103448274,
    "score_4h": 0.5336134453781513,
    "score_7d": 4.106508875739645,
    "extracted_entities": "Inter - Roma - Partita - Calendario - Serie A",
    "saturation_score": 4.0
  },
  {
    "rank": 23,
    "entity": "25 aprile liberazione",
    "discover_score": 1.575093897244051,
    "score_1h": 0.6206896551724138,
    "score_4h": 1.0819327731092436,
    "score_7d": 4.724852071005917,
    "extracted_entities": "25 aprile - Liberazione - Festa nazionale - Italia - Resistenza",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "mission",
    "discover_score": 1.5576021427286157,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.2081238353081818,
    "score_7d": 5.133136094674557,
    "extracted_entities": "Missione spaziale - Obiettivi - Strategia - Organizzazione - Progetto",
    "saturation_score": 114.0
  },
  {
    "rank": 35,
    "entity": "dalai lama",
    "discover_score": 1.211536495709801,
    "score_1h": 0.0,
    "score_4h": 0.45798319327731096,
    "score_7d": 4.062130177514793,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 3.0
  },
  {
    "rank": 37,
    "entity": "pacers - bucks",
    "discover_score": 1.191453072090628,
    "score_1h": 0.0,
    "score_4h": 0.21008403361344538,
    "score_7d": 4.100591715976331,
    "extracted_entities": "Pacers - Bucks - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 26,
    "entity": "kashmir",
    "discover_score": 1.1504331827894927,
    "score_1h": 0.0,
    "score_4h": 0.6701680672268908,
    "score_7d": 3.606508875739645,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Regione",
    "saturation_score": 737.0
  },
  {
    "rank": 36,
    "entity": "elisa girotto 18 regali",
    "discover_score": 1.0895289573967217,
    "score_1h": 1.3017241379310345,
    "score_4h": 1.9474789915966388,
    "score_7d": 3.2514792899408285,
    "extracted_entities": "Elisa Girotto - 18 Regali - Film - Storia vera - Maternità",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "federico cinà",
    "discover_score": 1.0784404490629116,
    "score_1h": 14.560344827586206,
    "score_4h": 6.142857142857142,
    "score_7d": 1.4437869822485208,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 1.0
  },
  {
    "rank": 31,
    "entity": "barcelona vs mallorca",
    "discover_score": 1.039680138934964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.532544378698225,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "netanyahu",
    "discover_score": 0.9422640067713226,
    "score_1h": 0.7155172413793104,
    "score_4h": 0.1407563025210084,
    "score_7d": 3.2810650887573964,
    "extracted_entities": "Benjamin Netanyahu - Politica israeliana - Primo Ministro di Israele - Likud - Medio Oriente",
    "saturation_score": 177.0
  },
  {
    "rank": 6,
    "entity": "giuseppe farina",
    "discover_score": 0.9206994387857462,
    "score_1h": 0.847457627118644,
    "score_4h": 1.913900706726205,
    "score_7d": 1.804733727810651,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 105.0
  },
  {
    "rank": 44,
    "entity": "freccia vallone 2025",
    "discover_score": 0.7391233932214523,
    "score_1h": 1.5603448275862069,
    "score_4h": 0.7731092436974789,
    "score_7d": 2.4142011834319526,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 38.0
  },
  {
    "rank": 12,
    "entity": "morto donato metallo",
    "discover_score": 0.6715678827192437,
    "score_1h": 0.7068965517241379,
    "score_4h": 0.38235294117647056,
    "score_7d": 1.78698224852071,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 6.0
  },
  {
    "rank": 49,
    "entity": "valencia - espanyol",
    "discover_score": 0.6460272045790653,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.6890756302521008,
    "score_7d": 2.121301775147929,
    "extracted_entities": "Valencia - Espanyol - Calcio - Partita - Liga Spagnola",
    "saturation_score": 10.0
  },
  {
    "rank": 38,
    "entity": "rio ave - sporting",
    "discover_score": 0.6107275496674223,
    "score_1h": 0.0,
    "score_4h": 0.06302521008403361,
    "score_7d": 2.0710059171597632,
    "extracted_entities": "Rio Ave - Sporting - Calcio - Partita - Portogallo",
    "saturation_score": 6.0
  },
  {
    "rank": 14,
    "entity": "istanbul deprem",
    "discover_score": 0.5855792965412773,
    "score_1h": 19.241379310344826,
    "score_4h": 5.415966386554622,
    "score_7d": 0.37573964497041423,
    "extracted_entities": "Istanbul - Terremoto - Sisma",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.5702904921284198,
    "score_1h": 0.0,
    "score_4h": 0.6932773109243697,
    "score_7d": 1.452662721893491,
    "extracted_entities": "Vanessa Incontrada - Ultima puntata - Serie TV - Programma televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.5593532843811878,
    "score_1h": 0.0,
    "score_4h": 0.7268907563025211,
    "score_7d": 1.727810650887574,
    "extracted_entities": "Assegno Unico - Pagamenti - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "thunder - grizzlies",
    "discover_score": 0.5589734014990622,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.46638655462184875,
    "score_7d": 1.7071005917159763,
    "extracted_entities": "Thunder - Grizzlies - NBA - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 22,
    "entity": "clair obscur expedition 33",
    "discover_score": 0.5468420415786466,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.9642857142857142,
    "score_7d": 1.4142011834319528,
    "extracted_entities": "Clair Obscur - Expedition 33 - Arte - Fotografia - Mostra",
    "saturation_score": 29.0
  },
  {
    "rank": 16,
    "entity": "coleman wong",
    "discover_score": 0.5006330697644372,
    "score_1h": 3.8793103448275863,
    "score_4h": 2.1992194367286664,
    "score_7d": 0.849112426035503,
    "extracted_entities": "Coleman Wong - Tennis - Hong Kong",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "konyaspor - galatasaray",
    "discover_score": 0.4798932270534118,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.4911242603550297,
    "extracted_entities": "Konyaspor - Galatasaray - Partita di calcio - Süper Lig - Turchia",
    "saturation_score": 5.0
  },
  {
    "rank": 7,
    "entity": "massimiliano strappetti",
    "discover_score": 0.44240856391078964,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.3508403361344539,
    "score_7d": 0.6834319526627219,
    "extracted_entities": "Massimiliano Strappetti",
    "saturation_score": 102.0
  },
  {
    "rank": 48,
    "entity": "milena vukotic",
    "discover_score": 0.40977913824824713,
    "score_1h": 1.7241379310344827,
    "score_4h": 0.22899159663865545,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "Milena Vukotic - Attrice - Cinema - Teatro - Televisione",
    "saturation_score": 47.0
  },
  {
    "rank": 29,
    "entity": "acconto irpef",
    "discover_score": 0.37538368290748275,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.5252100840336135,
    "score_7d": 0.9644970414201184,
    "extracted_entities": "Acconto - IRPEF - Tasse - Dichiarazione dei redditi - Fisco",
    "saturation_score": 154.0
  },
  {
    "rank": 30,
    "entity": "lago di endine",
    "discover_score": 0.30427309299916455,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.8313609467455622,
    "extracted_entities": "Lago di Endine - Lago - Turismo - Natura - Lombardia",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "man city vs aston villa",
    "discover_score": 0.29718893405296937,
    "score_1h": 0.43103448275862066,
    "score_4h": 0.37184873949579833,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "luisa todini",
    "discover_score": 0.29210879784918087,
    "score_1h": 0.0,
    "score_4h": 0.5147058823529411,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Luisa Todini",
    "saturation_score": 9.0
  },
  {
    "rank": 20,
    "entity": "carlos santana",
    "discover_score": 0.26021283519673893,
    "score_1h": 0.4396551724137931,
    "score_4h": 1.5882352941176472,
    "score_7d": 0.20710059171597633,
    "extracted_entities": "Carlos Santana - Musicista - Chitarrista - Rock - Latin Music",
    "saturation_score": 80.0
  },
  {
    "rank": 40,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.237782016407394,
    "score_1h": 0.0,
    "score_4h": 0.38025210084033617,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Bethesda",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "maurizio gucci",
    "discover_score": 0.21213912339736293,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.6974789915966386,
    "score_7d": 0.2514792899408284,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 92.0
  },
  {
    "rank": 17,
    "entity": "don giulio mignani",
    "discover_score": 0.16802498346433642,
    "score_1h": 2.6206896551724137,
    "score_4h": 0.11554621848739496,
    "score_7d": 0.18934911242603553,
    "extracted_entities": "Don Giulio Mignani - Sacerdote - Chiesa Cattolica",
    "saturation_score": 6.0
  },
  {
    "rank": 34,
    "entity": "maurizio pistocchi",
    "discover_score": 0.16232759566858285,
    "score_1h": 0.5,
    "score_4h": 0.0,
    "score_7d": 0.2514792899408284,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "anna kalinskaya",
    "discover_score": 0.12966264033348127,
    "score_1h": 1.396551724137931,
    "score_4h": 0.14705882352941177,
    "score_7d": 0.04142011834319527,
    "extracted_entities": "Anna Kalinskaya - Tennis - Giocatrice",
    "saturation_score": 2.0
  },
  {
    "rank": 51,
    "entity": "lamon",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "davide barzan",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "belve",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "lsg vs dc",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "fuochi d'artificio",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "niccolò fabi",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "barcelone – majorque",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "tradingview",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "gewitterwarnung",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "paradiso delle signore",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "bruno vespa",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "the couple quando va in onda",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "silence",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "banco bpm unicredit",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "israele",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "antonio pappalardo",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "pahalgam",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "milei",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "etna",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "mattia almaviva",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "pantelleria",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "vanessa incontrada",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "limone",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "23 aprile giornata mondiale",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "djalo",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "nick pope",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "oblivion remake",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "child care",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "thunderbolts",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "diaco",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "luisa ranieri",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "nunzio stancampiano",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "risultati nba",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "emiliana arango",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "jack ryan",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "maria corleone",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "clemente mastella",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "department store",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "millionday",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "laliga",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "jeremy irons",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "gucci",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "guardie svizzere",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "tajani",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "robert de niro",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "luis miguel",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "martin wolf",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "cerignola",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "nantes vs psg",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "الطقس غدًا",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "incendio olbia",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "la liga",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "cocciaretto",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "santoro",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "livorno",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "bersani",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "edith bruck",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "veltroni",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "gabi pallavolo",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "earth day",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "rita pavone",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "meteo rimini",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lunigiana",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "liam gallagher",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "ligue 1",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "agnese pini",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "siniakova",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "playstation store",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "programma tv stasera",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "corrado augias",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "i peccatori film",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "pete sampras",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "boulter",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "vecchioni",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "copenaghen",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "bertone cardinale",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "neres",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "ladakh",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "arcivescovo",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "putin",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "carlo cracco",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "insta360 x5",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "deepseek",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "chuck norris",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "giovanni storti",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "massimo franco",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "milei papa francesco",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "chatgpt down",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "naomi ōsaka",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "cardinale scola",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "ncis",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "pedro pascal",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "alife",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "lilli gruber",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "la russa",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "valentina uomini e donne",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "quanto guadagna il papa",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "hugh grant",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "saudi pro league",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "this is us",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "suore di clausura",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "meteo trentino",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "barcellona inter",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "financial times",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "sorella papa francesco",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "luana uomini e donne",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "the last of us streaming",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "de zerbi",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "andor",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "lipari",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "bitcoin",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "anders arborelius",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "ralph fiennes",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "alessandria",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "keira knightley",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "victoria villarruel",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "arango tennis",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "avanti un altro",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "kanye west",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 10:24:25",
  "trends_count": 189,
  "top_score": 18.127965616324087,
  "runtime_minutes": 5.544039297103882,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle correnti eteree dei dati, emergono i grandi temi del tempo presente: l'avvincente mondo dello sport, con protagonisti il calcio e la pallacanestro, e la costante attenzione alla tecnologia e all'innovazione, incarnata da Tesla. Tra queste due colonne portanti, s'insinua il riverbero delle condizioni atmosferiche, sempre in movimento e imprevedibili.\n\nNell'entusiasmo scopriamo che le nuove vie di esplorazione per Google Discover giacciono nella danza imminente della NBA (#2), un argomento che mostra un interesse crescente nell'ultima ora e una saturazione moderata, promettendo spazi inesplorati di contenuto. Anche le evoluzioni del meteo, predette dall'onnipresente 'weather' (#3), intravedono un'opportunità, data la bassa saturazione e l'interesse non offuscato.\n\nTuttavia, la tempestosa Coppa Italia tra Inter e Milan (#4) invita alla cautela: benché presente sulle labbra di molti, la saturazione elevata prospetta un terreno saturo di voci e penne. Così pure, gli echi di Tesla (#1), sebbene irresistibili, rischiano d'esser cullati nelle alte onde già sovraccariche di notizie.\n\nPer chi crea contenuti, il consiglio lungimirante è cercare equilibrio tra l'innalzare la voce nei contesti giusti e il diradare il proprio eco in praterie meno affollate, guidati dalle luci dei dati."
};
