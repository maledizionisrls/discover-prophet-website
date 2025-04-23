const trendData = [
  {
    "rank": 37,
    "entity": "nba",
    "discover_score": 13.187125252622065,
    "score_1h": 66.81896551724138,
    "score_4h": 32.596638655462186,
    "score_7d": 26.03846153846154,
    "extracted_entities": "NBA - Basket - Stati Uniti - Campionato - Giocatori",
    "saturation_score": 186.0
  },
  {
    "rank": 32,
    "entity": "weather",
    "discover_score": 13.178187734071454,
    "score_1h": 64.32758620689656,
    "score_4h": 35.21638655462185,
    "score_7d": 24.431952662721894,
    "extracted_entities": "Meteo - Previsioni - Clima - Temperature - Condizioni atmosferiche",
    "saturation_score": 111.0
  },
  {
    "rank": 20,
    "entity": "23 aprile",
    "discover_score": 6.3500166470977675,
    "score_1h": 61.956896551724135,
    "score_4h": 44.45168067226891,
    "score_7d": 6.076923076923077,
    "extracted_entities": "23 aprile - Giornata mondiale del libro - San Giorgio - Festa della Liberazione - Shakespeare",
    "saturation_score": 2660.0
  },
  {
    "rank": 1,
    "entity": "barcellona - mallorca",
    "discover_score": 5.3233505344387435,
    "score_1h": 4.301724137931035,
    "score_4h": 11.926470588235293,
    "score_7d": 4.289940828402367,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "santo del giorno",
    "discover_score": 5.22836451397974,
    "score_1h": 1.6293103448275863,
    "score_4h": 2.329831932773109,
    "score_7d": 12.396449704142011,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 10.0
  },
  {
    "rank": 16,
    "entity": "letto contenitore",
    "discover_score": 3.813957221849504,
    "score_1h": 1.456896551724138,
    "score_4h": 0.1092436974789916,
    "score_7d": 10.357988165680473,
    "extracted_entities": "Letto - Contenitore - Arredamento - Camera da letto - Spazio di archiviazione",
    "saturation_score": 89.0
  },
  {
    "rank": 2,
    "entity": "manchester city - aston villa",
    "discover_score": 3.6077667541334053,
    "score_1h": 5.7155172413793105,
    "score_4h": 10.050420168067227,
    "score_7d": 3.8491124260355027,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 32.0
  },
  {
    "rank": 6,
    "entity": "sophie nyweide",
    "discover_score": 3.3502073777748067,
    "score_1h": 11.211864406779661,
    "score_4h": 5.815126050420168,
    "score_7d": 6.103550295857988,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 205.0
  },
  {
    "rank": 43,
    "entity": "tesla",
    "discover_score": 3.261052813016359,
    "score_1h": 55.896551724137936,
    "score_4h": 15.178571428571429,
    "score_7d": 6.772189349112426,
    "extracted_entities": "Tesla - Elon Musk - Auto elettriche - Energia sostenibile - Innovazione tecnologica",
    "saturation_score": 412.0
  },
  {
    "rank": 35,
    "entity": "papa francesco conclave",
    "discover_score": 2.6701152137231774,
    "score_1h": 2.1810344827586206,
    "score_4h": 0.8592436974789917,
    "score_7d": 8.514792899408285,
    "extracted_entities": "Papa Francesco - Conclave - Chiesa Cattolica",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "lakers - timberwolves",
    "discover_score": 2.6647001983423446,
    "score_1h": 4.413793103448276,
    "score_4h": 12.957983193277311,
    "score_7d": 4.1952662721893486,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 5,
    "entity": "facies ippocratica",
    "discover_score": 2.134336874922843,
    "score_1h": 3.6370543541788427,
    "score_4h": 0.7584033613445378,
    "score_7d": 4.724852071005917,
    "extracted_entities": "Facies ippocratica - Sintomi - Medicina - Diagnosi",
    "saturation_score": 6.0
  },
  {
    "rank": 41,
    "entity": "netanyahu",
    "discover_score": 1.9754734881185996,
    "score_1h": 0.0,
    "score_4h": 0.7815126050420168,
    "score_7d": 6.612426035502959,
    "extracted_entities": "Netanyahu - Politica israeliana - Primo Ministro - Israele - Elezioni",
    "saturation_score": 174.0
  },
  {
    "rank": 3,
    "entity": "nantes - psg",
    "discover_score": 1.9727380121209672,
    "score_1h": 1.6982758620689655,
    "score_4h": 2.2247899159663866,
    "score_7d": 3.5207100591715976,
    "extracted_entities": "Nantes - PSG - Calcio - Ligue 1 - Partita",
    "saturation_score": 35.0
  },
  {
    "rank": 39,
    "entity": "mission",
    "discover_score": 1.940095851189828,
    "score_1h": 3.1465517241379306,
    "score_4h": 1.0,
    "score_7d": 6.384615384615385,
    "extracted_entities": "Missione spaziale - Obiettivi - Strategia - Organizzazione - Scopo",
    "saturation_score": 104.0
  },
  {
    "rank": 50,
    "entity": "belve",
    "discover_score": 1.9250195714994793,
    "score_1h": 1.4051724137931034,
    "score_4h": 0.7121848739495799,
    "score_7d": 6.683431952662722,
    "extracted_entities": "Belve - Programma TV - Francesca Fagnani - Interviste",
    "saturation_score": 46.0
  },
  {
    "rank": 48,
    "entity": "estrazione lotto oggi",
    "discover_score": 1.7704417179398972,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.4789915966386554,
    "score_7d": 6.1923076923076925,
    "extracted_entities": "Estrazione - Lotto - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 9,
    "entity": "inter roma quando si gioca",
    "discover_score": 1.7035831037725602,
    "score_1h": 2.0752483927527763,
    "score_4h": 0.6932773109243697,
    "score_7d": 4.355029585798817,
    "extracted_entities": "Inter - Roma - Partita - Calendario - Serie A",
    "saturation_score": 4.0
  },
  {
    "rank": 31,
    "entity": "conegliano volley",
    "discover_score": 1.6635699094063077,
    "score_1h": 0.0,
    "score_4h": 0.7752100840336135,
    "score_7d": 5.346153846153846,
    "extracted_entities": "Conegliano - Volley - Imoco Volley - Pallavolo femminile - Campionato italiano",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "dalai lama",
    "discover_score": 1.5620802463309158,
    "score_1h": 1.7095265926358854,
    "score_4h": 0.052521008403361345,
    "score_7d": 5.3076923076923075,
    "extracted_entities": "Dalai Lama - Tibet - Buddismo - Spiritualità - Leader religioso",
    "saturation_score": 3.0
  },
  {
    "rank": 10,
    "entity": "coppa italia inter milan",
    "discover_score": 1.319710752573333,
    "score_1h": 22.25,
    "score_4h": 3.957983193277311,
    "score_7d": 2.609467455621302,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Partita",
    "saturation_score": 32.0
  },
  {
    "rank": 33,
    "entity": "rio ave - sporting",
    "discover_score": 1.1429488133477883,
    "score_1h": 0.0,
    "score_4h": 0.3277310924369748,
    "score_7d": 3.828402366863905,
    "extracted_entities": "Rio Ave - Sporting - Calcio - Partita",
    "saturation_score": 6.0
  },
  {
    "rank": 40,
    "entity": "fabio fognini",
    "discover_score": 1.0821144518035333,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3025210084033613,
    "score_7d": 3.7455621301775146,
    "extracted_entities": "Fabio Fognini - Tennis - Atleta",
    "saturation_score": 23.0
  },
  {
    "rank": 25,
    "entity": "thunder - grizzlies",
    "discover_score": 1.07128795691447,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7773109243697479,
    "score_7d": 3.2958579881656807,
    "extracted_entities": "Thunder - Grizzlies - NBA - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 23,
    "entity": "elisa girotto 18 regali",
    "discover_score": 0.9589391205228991,
    "score_1h": 0.0,
    "score_4h": 1.9894957983193278,
    "score_7d": 2.5532544378698225,
    "extracted_entities": "Elisa Girotto - 18 Regali - Film - Storia vera - Maternità",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "massimiliano strappetti",
    "discover_score": 0.9386701333320968,
    "score_1h": 6.491379310344827,
    "score_4h": 1.9348739495798322,
    "score_7d": 1.6568047337278107,
    "extracted_entities": "Massimiliano Strappetti",
    "saturation_score": 46.0
  },
  {
    "rank": 36,
    "entity": "bronzetti",
    "discover_score": 0.8833996413643156,
    "score_1h": 1.7526300409117475,
    "score_4h": 0.3634453781512605,
    "score_7d": 2.967455621301775,
    "extracted_entities": "Bronzetti - Sculture - Arte - Archeologia - Storia",
    "saturation_score": 116.0
  },
  {
    "rank": 7,
    "entity": "giuseppe farina",
    "discover_score": 0.8640301509579464,
    "score_1h": 3.1982758620689657,
    "score_4h": 0.6932773109243697,
    "score_7d": 2.0414201183431953,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 202.0
  },
  {
    "rank": 42,
    "entity": "assegno unico pagamenti inps",
    "discover_score": 0.7458969657964779,
    "score_1h": 1.5634132086499124,
    "score_4h": 0.32983193277310924,
    "score_7d": 2.5443786982248517,
    "extracted_entities": "Assegno Unico - Pagamenti - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "allerta grandine",
    "discover_score": 0.7296554801137236,
    "score_1h": 11.407948568088838,
    "score_4h": 4.397058823529411,
    "score_7d": 0.8224852071005917,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.6864939867424177,
    "score_1h": 1.543103448275862,
    "score_4h": 0.28361344537815125,
    "score_7d": 1.9171597633136095,
    "extracted_entities": "Vanessa Incontrada - Ultima puntata - Serie TV - Programma televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 47,
    "entity": "lamon",
    "discover_score": 0.681682937665933,
    "score_1h": 0.7586206896551724,
    "score_4h": 0.6638655462184875,
    "score_7d": 2.2514792899408285,
    "extracted_entities": "Lamon - Patata - Veneto - Prodotto tipico",
    "saturation_score": 51.0
  },
  {
    "rank": 26,
    "entity": "kashmir",
    "discover_score": 0.6516832453559873,
    "score_1h": 1.4224137931034482,
    "score_4h": 0.1134453781512605,
    "score_7d": 2.07396449704142,
    "extracted_entities": "Kashmir - Conflitto - India - Pakistan - Regione",
    "saturation_score": 641.0
  },
  {
    "rank": 12,
    "entity": "maurizio gucci",
    "discover_score": 0.6169388212686967,
    "score_1h": 0.0,
    "score_4h": 0.4285714285714286,
    "score_7d": 1.6035502958579881,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 70.0
  },
  {
    "rank": 46,
    "entity": "man city vs aston villa",
    "discover_score": 0.606386974811492,
    "score_1h": 1.456896551724138,
    "score_4h": 0.5525210084033614,
    "score_7d": 1.9822485207100593,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "wta madrid",
    "discover_score": 0.6000585240525085,
    "score_1h": 0.2413793103448276,
    "score_4h": 0.25210084033613445,
    "score_7d": 2.026627218934911,
    "extracted_entities": "WTA - Madrid - Tennis - Torneo",
    "saturation_score": 68.0
  },
  {
    "rank": 28,
    "entity": "pacers - bucks",
    "discover_score": 0.5904375754099689,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.21008403361344538,
    "score_7d": 1.8520710059171597,
    "extracted_entities": "Pacers - Bucks - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 21,
    "entity": "acconto irpef",
    "discover_score": 0.5628630249417346,
    "score_1h": 0.559322033898305,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.6272189349112427,
    "extracted_entities": "Acconto - IRPEF - Tasse - Pagamento - Fisco",
    "saturation_score": 228.0
  },
  {
    "rank": 11,
    "entity": "morto donato metallo",
    "discover_score": 0.45432404045405883,
    "score_1h": 0.0,
    "score_4h": 0.43487394957983194,
    "score_7d": 1.0562130177514792,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 4.0
  },
  {
    "rank": 22,
    "entity": "anna kalinskaya",
    "discover_score": 0.3966593736065909,
    "score_1h": 0.0,
    "score_4h": 0.28361344537815125,
    "score_7d": 1.0532544378698225,
    "extracted_entities": "Anna Kalinskaya - Tennista - Sport",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "gewitterwarnung",
    "discover_score": 0.34980721557927275,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.13655462184873948,
    "score_7d": 1.0710059171597632,
    "extracted_entities": "Gewitterwarnung - Allerta meteo - Temporali",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "niccolò fabi",
    "discover_score": 0.33704273842870625,
    "score_1h": 0.0,
    "score_4h": 0.6449579831932774,
    "score_7d": 0.7485207100591715,
    "extracted_entities": "Niccolò Fabi - Cantautore - Musica Italiana",
    "saturation_score": 8.0
  },
  {
    "rank": 45,
    "entity": "pahalgam",
    "discover_score": 0.28547455352664974,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.4411764705882353,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Pahalgam - Turismo - Jammu e Kashmir - Trekking - Natura",
    "saturation_score": 32.0
  },
  {
    "rank": 29,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.2545337162145869,
    "score_1h": 0.0,
    "score_4h": 0.18487394957983194,
    "score_7d": 0.5739644970414202,
    "extracted_entities": "Barcelona - Mallorca - Partita di calcio - La Liga",
    "saturation_score": 3.0
  },
  {
    "rank": 18,
    "entity": "concorso 4617 allievi agenti bando",
    "discover_score": 0.23754197897991433,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.4222689075630252,
    "score_7d": 0.38461538461538464,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Bando - Forze dell'Ordine - Reclutamento",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "oblivion remastered ps5",
    "discover_score": 0.2374706445730359,
    "score_1h": 0.0,
    "score_4h": 0.35084033613445376,
    "score_7d": 0.49408284023668636,
    "extracted_entities": "Oblivion - Remastered - PS5 - Videogiochi - Bethesda",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "luisa todini",
    "discover_score": 0.2026071095121318,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.6869747899159664,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Luisa Todini - Persone - Imprenditoria - Italia",
    "saturation_score": 5.0
  },
  {
    "rank": 27,
    "entity": "konyaspor - galatasaray",
    "discover_score": 0.19900363808397473,
    "score_1h": 0.0,
    "score_4h": 0.014705882352941176,
    "score_7d": 0.3816568047337278,
    "extracted_entities": "Konyaspor - Galatasaray - Partita di calcio - Süper Lig - Turchia",
    "saturation_score": 5.0
  },
  {
    "rank": 30,
    "entity": "maurizio pistocchi",
    "discover_score": 0.1978895699091624,
    "score_1h": 0.3706896551724138,
    "score_4h": 0.21008403361344538,
    "score_7d": 0.33727810650887574,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Sport - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "lago di endine",
    "discover_score": 0.17499648035328844,
    "score_1h": 0.23275862068965517,
    "score_4h": 0.22689075630252103,
    "score_7d": 0.1893491124260355,
    "extracted_entities": "Lago di Endine - Lago - Turismo - Natura - Lombardia",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "valencia - espanyol",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "freccia vallone 2025",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "davide barzan",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "23 aprile giornata mondiale",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "lsg vs dc",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mattia almaviva",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "antonio pappalardo",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "guardie svizzere",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "barcelone – majorque",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "thunderbolts",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "paradiso delle signore",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "fuochi d'artificio",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "israele",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "bruno vespa",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "silence",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "the couple quando va in onda",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "banco bpm unicredit",
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
    "entity": "25 aprile liberazione",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "djalo",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "alessandro sallusti papa francesco",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "clemente mastella",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "uomini e donne oggi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "etna",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "multan sultans vs lahore qalandars",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "vanessa incontrada",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "pantelleria",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "child care",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "department store",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "limone",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "nick pope",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "oblivion remake",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "laliga",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "luisa ranieri",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "nunzio stancampiano",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "un posto al sole puntata di oggi",
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
    "entity": "maria corleone",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "copa libertadores",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "emiliana arango",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "liam gallagher",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "striscia la notizia",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "millionday",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "damac vs al-nassr",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "jeremy irons",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "gucci",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "tajani",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "robert de niro",
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
    "entity": "cerignola",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "martin wolf",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "nantes vs psg",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "conclave dove vederlo",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "meteo rimini",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "الطقس غدًا",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "cocciaretto",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "incendio olbia",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "boulter",
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
    "entity": "brocchi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "livorno",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "ansu fati",
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
    "entity": "edith bruck",
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
    "entity": "corrado augias",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "rita pavone",
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
    "entity": "agnese pini",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "aeroporto bergamo",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "playstation store",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "i peccatori film",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "vecchioni",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "pete sampras",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "bertone cardinale",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "copenaghen",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "il gazzettino",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "bersani",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "neres",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "arcivescovo",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "ladakh",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "putin",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "carlo cracco",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "giovanni storti",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "intelligenza artificiale",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "massimo giannini",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "meteo trentino",
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
    "entity": "chuck norris",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "deepseek",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "milei papa francesco",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "massimo franco",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "pedro pascal",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "ncis",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "cardinale scola",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "chatgpt down",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "naomi ōsaka",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "lilli gruber",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "alife",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "la russa",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "valentina uomini e donne",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "quanto guadagna il papa",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "hugh grant",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "teatro alla scala",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "this is us",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "saudi pro league",
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
    "entity": "barcellona inter",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "financial times",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "sorella papa francesco",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "luana uomini e donne",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "the last of us streaming",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "bitcoin",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "andor",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "de zerbi",
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
    "entity": "anders arborelius",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "ralph fiennes",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "keira knightley",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "victoria villarruel",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "oroscopo scorpione 22 aprile",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "avanti un altro",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "kanye west",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 08:18:14",
  "trends_count": 187,
  "top_score": 13.187125252622065,
  "runtime_minutes": 6.232411607106527,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le stelle di Google Trends illuminano l'orizzonte di Italia con una forte sinfonia di sport e meteo. I cieli adornati di palloni corrono insieme a venti tempestosi, con il basket NBA e le previsioni del tempo come i principali messaggeri. Il fascino dell'NBA (#1) e le incombenti condizioni meteo (#2) si distendono nell'eco digitale come gli araldi di oggi, promettendo attenzione su Google Discover grazie al loro attuale vigore e una saturazione moderata, segnando l'alba di nuove opportunità di contenuto.\n\nL'ombra lunga del passato, rappresentata da '23 aprile' (#3), colma di cultura e memoria, richiede invece cautela. Sovraffollato da oltre 2.000 riferimenti, il suo ingresso è ostacolato dalla forte concorrenza, facendone un sentiero che richiede segretezza e sapienza per esservi navigato con successo.\n\nPer il veggente digitale alla ricerca di orizzonti fertili, si consiglia una focalizzazione sull'attualità sportiva e, con occhio strategico, il meteo in costante mutamento. Siano le vostre parole tempesta o arcobaleno, le tendenze odierne indicano una strada dove scorre sia il dinamismo che la prudenza."
};
