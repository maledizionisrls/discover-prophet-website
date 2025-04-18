const trendData = [
  {
    "rank": 19,
    "entity": "via crucis",
    "discover_score": 10.296567592215663,
    "score_1h": 60.310344827586206,
    "score_4h": 54.83823529411765,
    "score_7d": 11.423076923076923,
    "extracted_entities": "Via Crucis - Rito religioso - Settimana Santa - Cristianesimo - Stazioni della Croce",
    "saturation_score": 456.0
  },
  {
    "rank": 18,
    "entity": "auguri di pasqua",
    "discover_score": 10.078706868692283,
    "score_1h": 30.224137931034484,
    "score_4h": 24.35924369747899,
    "score_7d": 17.70414201183432,
    "extracted_entities": "Auguri - Pasqua - Festività",
    "saturation_score": 40.0
  },
  {
    "rank": 4,
    "entity": "venerdi santo",
    "discover_score": 9.517441961576969,
    "score_1h": 69.15517241379311,
    "score_4h": 56.7373949579832,
    "score_7d": 4.5,
    "extracted_entities": "Venerdì Santo - Pasqua - Cristianesimo - Settimana Santa - Religione",
    "saturation_score": 42.0
  },
  {
    "rank": 26,
    "entity": "conte",
    "discover_score": 8.045916522796487,
    "score_1h": 41.91379310344827,
    "score_4h": 17.83613445378151,
    "score_7d": 16.763313609467456,
    "extracted_entities": "Giuseppe Conte - Politica Italiana - Governo Italiano",
    "saturation_score": 812.0
  },
  {
    "rank": 9,
    "entity": "trump meloni",
    "discover_score": 7.128963965051065,
    "score_1h": 19.68103448275862,
    "score_4h": 35.13865546218487,
    "score_7d": 7.2514792899408285,
    "extracted_entities": "Donald Trump - Giorgia Meloni - Politica",
    "saturation_score": 380.0
  },
  {
    "rank": 12,
    "entity": "valdagno",
    "discover_score": 6.929715910141589,
    "score_1h": 15.879310344827585,
    "score_4h": 25.548319327731093,
    "score_7d": 9.837278106508876,
    "extracted_entities": "Valdagno - Comune - Provincia di Vicenza - Veneto - Italia",
    "saturation_score": 207.0
  },
  {
    "rank": 3,
    "entity": "monte faito",
    "discover_score": 4.969948600690423,
    "score_1h": 44.353448275862064,
    "score_4h": 19.951680672268907,
    "score_7d": 4.399408284023668,
    "extracted_entities": "Monte Faito - Montagna - Campania - Escursionismo - Turismo",
    "saturation_score": 1820.0
  },
  {
    "rank": 6,
    "entity": "alexander zverev",
    "discover_score": 4.816592055312327,
    "score_1h": 61.3448275862069,
    "score_4h": 33.19957983193277,
    "score_7d": 2.991124260355029,
    "extracted_entities": "Alexander Zverev - Tennis - ATP Tour",
    "saturation_score": 3.0
  },
  {
    "rank": 29,
    "entity": "anticipazioni uomini e donne",
    "discover_score": 3.9380056386918474,
    "score_1h": 5.982758620689655,
    "score_4h": 2.069327731092437,
    "score_7d": 11.3698224852071,
    "extracted_entities": "Anticipazioni - Uomini e Donne - Programma TV - Maria De Filippi - Canale 5",
    "saturation_score": 3.0
  },
  {
    "rank": 1,
    "entity": "lazio - bodø/glimt",
    "discover_score": 3.7802566138189375,
    "score_1h": 4.077586206896552,
    "score_4h": 6.205882352941176,
    "score_7d": 3.8520710059171597,
    "extracted_entities": "Lazio - Bodø/Glimt - Calcio - Partita - Europa League",
    "saturation_score": 47.0
  },
  {
    "rank": 48,
    "entity": "galatina",
    "discover_score": 3.1740195991562086,
    "score_1h": 2.4224137931034484,
    "score_4h": 6.621848739495798,
    "score_7d": 8.943786982248522,
    "extracted_entities": "Galatina - Città - Puglia - Turismo - Cultura",
    "saturation_score": 85.0
  },
  {
    "rank": 25,
    "entity": "manchester united",
    "discover_score": 3.0748067512203154,
    "score_1h": 5.887931034482759,
    "score_4h": 17.85924369747899,
    "score_7d": 4.763313609467456,
    "extracted_entities": "Manchester United - Calcio - Premier League - Old Trafford - Erik ten Hag",
    "saturation_score": 95.0
  },
  {
    "rank": 14,
    "entity": "guerra ucraina russia",
    "discover_score": 2.5843934437514395,
    "score_1h": 2.4310344827586206,
    "score_4h": 1.5105042016806722,
    "score_7d": 6.804733727810651,
    "extracted_entities": "Guerra - Ucraina - Russia - Conflitto - Invasione",
    "saturation_score": 34.0
  },
  {
    "rank": 41,
    "entity": "carlo acutis",
    "discover_score": 2.577213787847267,
    "score_1h": 0.5258620689655172,
    "score_4h": 2.2857142857142856,
    "score_7d": 8.071005917159763,
    "extracted_entities": "Carlo Acutis - Beato - Cattolicesimo - Miracoli - Giovani",
    "saturation_score": 7.0
  },
  {
    "rank": 5,
    "entity": "manchester united - lione",
    "discover_score": 1.8398614386916632,
    "score_1h": 2.405172413793103,
    "score_4h": 4.11344537815126,
    "score_7d": 3.2633136094674557,
    "extracted_entities": "Manchester United - Lione - Calcio - Partita - Club",
    "saturation_score": 46.0
  },
  {
    "rank": 13,
    "entity": "estrazione lotto 17 aprile 2025",
    "discover_score": 1.7151192700739968,
    "score_1h": 1.0775862068965516,
    "score_4h": 0.3088235294117647,
    "score_7d": 4.822485207100591,
    "extracted_entities": "Estrazione Lotto - 17 aprile 2025",
    "saturation_score": 1.0
  },
  {
    "rank": 43,
    "entity": "belve",
    "discover_score": 1.6090697384835067,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.1092436974789916,
    "score_7d": 5.653846153846154,
    "extracted_entities": "Belve - Programma TV - Francesca Fagnani - Interviste",
    "saturation_score": 120.0
  },
  {
    "rank": 31,
    "entity": "luciano darderi",
    "discover_score": 1.5064235804533264,
    "score_1h": 0.0,
    "score_4h": 11.22689075630252,
    "score_7d": 2.1538461538461537,
    "extracted_entities": "Luciano Darderi - Tennis - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 17,
    "entity": "bella davvero ultimo",
    "discover_score": 1.3039522996099653,
    "score_1h": 6.439655172413794,
    "score_4h": 3.991596638655462,
    "score_7d": 2.9112426035502956,
    "extracted_entities": "Bella - Davvero - Ultimo",
    "saturation_score": 2.0
  },
  {
    "rank": 21,
    "entity": "processione venerdì santo",
    "discover_score": 1.2738138463972326,
    "score_1h": 18.60344827586207,
    "score_4h": 6.735294117647058,
    "score_7d": 2.2662721893491122,
    "extracted_entities": "Processione - Venerdì Santo - Evento religioso",
    "saturation_score": 2.0
  },
  {
    "rank": 2,
    "entity": "fiorentina - nk celje",
    "discover_score": 1.2458338761794008,
    "score_1h": 3.0344827586206895,
    "score_4h": 1.6407563025210083,
    "score_7d": 2.0088757396449703,
    "extracted_entities": "Fiorentina - NK Celje - Partita di calcio - Squadre di calcio - Competizione sportiva",
    "saturation_score": 119.0
  },
  {
    "rank": 15,
    "entity": "thuram",
    "discover_score": 1.2075138673374266,
    "score_1h": 10.5,
    "score_4h": 12.298319327731093,
    "score_7d": 0.7218934911242604,
    "extracted_entities": "Marcus Thuram - Calcio - Borussia Mönchengladbach - Francia - Attaccante",
    "saturation_score": 170.0
  },
  {
    "rank": 37,
    "entity": "anticipi e posticipi serie a",
    "discover_score": 1.1827225154138268,
    "score_1h": 0.6982758620689655,
    "score_4h": 1.1743697478991597,
    "score_7d": 3.801775147928994,
    "extracted_entities": "Serie A - Anticipi - Posticipi - Calendario - Partite",
    "saturation_score": 43.0
  },
  {
    "rank": 22,
    "entity": "simona ventura",
    "discover_score": 1.1489262418520887,
    "score_1h": 18.379310344827587,
    "score_4h": 3.0210084033613445,
    "score_7d": 2.8609467455621305,
    "extracted_entities": "Simona Ventura - Personaggio televisivo - Italia - Intrattenimento",
    "saturation_score": 34.0
  },
  {
    "rank": 8,
    "entity": "chelsea - legia varsavia",
    "discover_score": 1.1361348412464487,
    "score_1h": 0.0,
    "score_4h": 0.10504201680672269,
    "score_7d": 2.9881656804733727,
    "extracted_entities": "Chelsea - Legia Varsavia - Calcio - Partita - Club",
    "saturation_score": 10.0
  },
  {
    "rank": 35,
    "entity": "eintracht - tottenham",
    "discover_score": 0.986388633166125,
    "score_1h": 0.0,
    "score_4h": 0.29831932773109243,
    "score_7d": 3.334319526627219,
    "extracted_entities": "Eintracht - Tottenham - Calcio - Partita - UEFA",
    "saturation_score": 3.0
  },
  {
    "rank": 10,
    "entity": "jd vance",
    "discover_score": 0.8886747896233325,
    "score_1h": 1.3017241379310345,
    "score_4h": 1.51890756302521,
    "score_7d": 2.0562130177514795,
    "extracted_entities": "JD Vance - Politica - Ohio - Senato USA - Elezioni",
    "saturation_score": 438.0
  },
  {
    "rank": 34,
    "entity": "atletico bilbao - rangers",
    "discover_score": 0.8110202761579878,
    "score_1h": 0.0,
    "score_4h": 0.7079831932773109,
    "score_7d": 2.5857988165680474,
    "extracted_entities": "Atletico Bilbao - Rangers - Calcio - Partita - Europa League",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "riera",
    "discover_score": 0.7511065020724896,
    "score_1h": 2.2241379310344827,
    "score_4h": 1.3634453781512605,
    "score_7d": 2.0473372781065087,
    "extracted_entities": "Riera - Cognome - Persone - Spagna - Calcio",
    "saturation_score": 57.0
  },
  {
    "rank": 42,
    "entity": "jagiellonia białystok - betis",
    "discover_score": 0.7479064002882092,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.7163865546218487,
    "score_7d": 2.443786982248521,
    "extracted_entities": "Jagiellonia Białystok - Betis - Calcio - Partita - Club",
    "saturation_score": 1.0
  },
  {
    "rank": 28,
    "entity": "holger rune",
    "discover_score": 0.7422890916284144,
    "score_1h": 0.3706896551724138,
    "score_4h": 1.1323529411764706,
    "score_7d": 2.142011834319527,
    "extracted_entities": "Holger Rune - Tennis - ATP - Giocatore di tennis",
    "saturation_score": 5.0
  },
  {
    "rank": 36,
    "entity": "atp monaco di baviera 2025",
    "discover_score": 0.6971626060734578,
    "score_1h": 1.3017241379310345,
    "score_4h": 4.699579831932773,
    "score_7d": 1.1479289940828403,
    "extracted_entities": "ATP - Monaco di Baviera - 2025 - Tennis - Torneo",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "noipa arretrati",
    "discover_score": 0.6133588383567351,
    "score_1h": 2.4913793103448274,
    "score_4h": 1.0945378151260505,
    "score_7d": 1.6804733727810652,
    "extracted_entities": "NoiPA - Arretrati - Stipendi - Pubblica Amministrazione",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "ciro immobile",
    "discover_score": 0.6048174072416491,
    "score_1h": 0.0,
    "score_4h": 0.4873949579831933,
    "score_7d": 1.9792899408284024,
    "extracted_entities": "Ciro Immobile - Calciatore - Lazio - Serie A - Nazionale Italiana",
    "saturation_score": 3.0
  },
  {
    "rank": 49,
    "entity": "come un gatto in tangenziale",
    "discover_score": 0.5868446245935789,
    "score_1h": 0.8362068965517241,
    "score_4h": 0.680672268907563,
    "score_7d": 1.8905325443786982,
    "extracted_entities": "Film - Commedia - Paola Cortellesi - Antonio Albanese - Italia",
    "saturation_score": 8.0
  },
  {
    "rank": 47,
    "entity": "neffa",
    "discover_score": 0.570302707316975,
    "score_1h": 0.5,
    "score_4h": 0.8760504201680672,
    "score_7d": 1.757396449704142,
    "extracted_entities": "Neffa - Musica - Cantante - Italia",
    "saturation_score": 71.0
  },
  {
    "rank": 50,
    "entity": "giulio berruti",
    "discover_score": 0.549105972103566,
    "score_1h": 1.2327586206896552,
    "score_4h": 0.3025210084033614,
    "score_7d": 1.8520710059171597,
    "extracted_entities": "Giulio Berruti - Attore - Italia - Televisione - Cinema",
    "saturation_score": 99.0
  },
  {
    "rank": 11,
    "entity": "rcb vs pbks",
    "discover_score": 0.532555969580103,
    "score_1h": 16.379310344827587,
    "score_4h": 3.6260504201680672,
    "score_7d": 0.5295857988165681,
    "extracted_entities": "RCB - PBKS - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 40,
    "entity": "l'ombra del giorno",
    "discover_score": 0.5122876073786485,
    "score_1h": 0.0,
    "score_4h": 0.029411764705882353,
    "score_7d": 1.7159763313609466,
    "extracted_entities": "L'ombra del giorno - Film - Giuseppe Piccioni - Riccardo Scamarcio - Benedetta Porcaroli",
    "saturation_score": 73.0
  },
  {
    "rank": 7,
    "entity": "ultimi sondaggi politici",
    "discover_score": 0.5002138464768255,
    "score_1h": 4.853448275862069,
    "score_4h": 1.0126050420168067,
    "score_7d": 0.9378698224852071,
    "extracted_entities": "Sondaggi - Politica - Elezioni",
    "saturation_score": 4.0
  },
  {
    "rank": 33,
    "entity": "bonus bollette 200 euro",
    "discover_score": 0.45466320380299863,
    "score_1h": 1.0948275862068966,
    "score_4h": 0.24579831932773108,
    "score_7d": 1.3786982248520712,
    "extracted_entities": "Bonus - Bollette - 200 euro",
    "saturation_score": 1.0
  },
  {
    "rank": 20,
    "entity": "maria elena boschi",
    "discover_score": 0.43811692772423205,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.5588235294117647,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Maria Elena Boschi",
    "saturation_score": 62.0
  },
  {
    "rank": 46,
    "entity": "28 anni dopo",
    "discover_score": 0.4303514185609079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.4319526627218935,
    "extracted_entities": "Film - Horror - Sequel - Danny Boyle - Alex Garland",
    "saturation_score": 46.0
  },
  {
    "rank": 38,
    "entity": "bastoncini di pesce",
    "discover_score": 0.41317423779313744,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.41806722689075626,
    "score_7d": 1.2011834319526626,
    "extracted_entities": "Bastoncini di pesce - Cibo - Prodotti ittici - Alimentazione",
    "saturation_score": 9.0
  },
  {
    "rank": 32,
    "entity": "antonella clerici è sempre mezzogiorno",
    "discover_score": 0.2967981233169435,
    "score_1h": 0.0,
    "score_4h": 0.10084033613445378,
    "score_7d": 0.7840236686390533,
    "extracted_entities": "Antonella Clerici - È sempre mezzogiorno - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "sigfrido ranucci",
    "discover_score": 0.2824836424872225,
    "score_1h": 0.6551724137931034,
    "score_4h": 1.180672268907563,
    "score_7d": 0.4349112426035503,
    "extracted_entities": "Sigfrido Ranucci - Giornalismo - Report - Rai - Inchieste",
    "saturation_score": 3.0
  },
  {
    "rank": 45,
    "entity": "rosanna banfi",
    "discover_score": 0.20483304111757236,
    "score_1h": 0.0,
    "score_4h": 1.8046218487394956,
    "score_7d": 0.047337278106508875,
    "extracted_entities": "Rosanna Banfi - Attrice - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 39,
    "entity": "freccia del brabante 2025",
    "discover_score": 0.19474054070575023,
    "score_1h": 1.4482758620689655,
    "score_4h": 0.4831932773109243,
    "score_7d": 0.28106508875739644,
    "extracted_entities": "Freccia del Brabante - 2025 - Ciclismo - Belgio - Gara",
    "saturation_score": 10.0
  },
  {
    "rank": 23,
    "entity": "oroscopo oggi paolo fox scorpione",
    "discover_score": 0.17685321515864946,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.43907563025210083,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Oroscopo - Paolo Fox - Scorpione",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "testo canzone achille lauro amor",
    "discover_score": 0.17144169352265168,
    "score_1h": 1.3448275862068966,
    "score_4h": 0.4453781512605042,
    "score_7d": 0.12130177514792899,
    "extracted_entities": "Achille Lauro - Canzone - Amor",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "tassi bce mutui",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "dan peterson",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "nessuno ti salverà",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "ransom canyon",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "giordana angi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "borsa milano oggi",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "jk rowling",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "antonella clerici",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "luca guadagnino",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "bitonto",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "pasquetta",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "tabellone europa league",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "carlos alcaraz",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "monteu da po",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "betis",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "denzel dumfries",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "paolo del genio",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "albert riera",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "shelton",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "lavanda dei piedi",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "giro d'abruzzo 2025",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "gianluigi nuzzi",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "vicenza today",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "lothar matthäus",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "natalia grace",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "paola cortellesi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "julia fox",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "oroscopo branko oggi",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "chelsea vs legia warszawa",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "tabellone conference league",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "i peccatori",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "castellanos",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "lodi mattutine di oggi",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "al hilal - al khaleej",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "alex de minaur",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "coreografia lazio bodo",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "ezio greggio",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "calendario borsa italiana 2025",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "chelsea",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "andreas helmersen",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "joao pedro",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "nuno tavares",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "telesud",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "jeffrey sachs",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "baustelle",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "the chosen",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "fast food",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "ashley st. clair",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "amici serale quinta puntata",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "lazio ieri",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "meteo roma",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "kissinger",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "lacazette",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "fonseca",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "dame sarr",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "eintracht frankfurt vs tottenham",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "corentin tolisso",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "tijjani noslin",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "rubio",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "coreografia lazio",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "valentín castellanos",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "il mattino",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "mc donald",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "nuzzi",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "vaccines",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "eintracht frankfurt",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "kingdom hearts",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "carlo ancelotti real madrid",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "onana",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "europa",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "hostage",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "wind warning",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "tv8",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "borsa oggi 18 aprile 2025",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "giaele de donà",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "metro torino",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "mandas lazio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "belize",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "flu shots",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "sky tg24",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "vaccinations",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "radio sei",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "cherki",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "الطقس",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "immunizations",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "monica giandotti",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "manchester",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "emma navarro",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "robbie williams",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "provedel",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "tagliafico",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "rapid vienna",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "powell",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "rayan cherki",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "maradona",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "concorso docenti prova orale",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "affari tuoi stasera",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "chiara appendino",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "simona izzo",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "bruce springsteen",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "oppenheimer",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "titanic",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "ed sheeran",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "carla rinaldi pedagogista",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "tuglie",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "finale conference league 2025",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "streaming",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "jim clark",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "banksy",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "hantavirus",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "affari tuoi",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "scicli",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "valenza",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "found",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "ruffano",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "isaksen",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "tv2000 diretta",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "manchester united - olympique lyonnais",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "traffico",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "roma capitale",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "brindisi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "diritto di opposizione meta",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "الطقس غدًا",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "dia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "radio 1",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "salento",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "monti",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "uefa europa",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "cher",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "rai radio 1",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "columbia university",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "antonio albanese",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "miuccia prada",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "millionday",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "dalot",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "orta di atella",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "al fateh - al ittihad",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "la provincia pavese",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "matthaus",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "locri reggina",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "cosa ce stasera in tv",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "rolando mandragora",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "diretta.it",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "pesce palla argenteo velenoso",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "massimo giannini",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "bilbao",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "ostapenko",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "positano news",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "piacenza",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "giornale",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "albano",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "tagliacozzo",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "la verità",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "il corriere dello sport",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "lecceprima",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "meteo vicenza",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "gintoneria",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "emilio fede",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "bruno vespa",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "fialdini",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "tom selleck",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "ilfattoquotidiano",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "ncis",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "dorgu",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "messaggero",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "sky sport",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "trento piacenza volley",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "luca argentero",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-18 14:41:30",
  "trends_count": 219,
  "top_score": 10.296567592215663,
  "runtime_minutes": 3.612709617614746,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "In questi giorni di fervore religioso e celebrazione, i temi della Pasqua e della religione occupano un posto predominante nei cuori e nelle menti degli italiani. 'Via Crucis', 'auguri di Pasqua' e 'Venerdì Santo' emergono come potenti simboli di riflessione e aggregazione spirituale, con un interesse recente molto vivo e una bassa saturazione, presentando un'opportunità d'oro per i creatori di contenuti.\n\nTra le opportunità su Google Discover, spiccano la 'Via Crucis' (#1), che con un DScore elevato e una saturazione di nicchia, promette di attirare una vibrante discussione online. Parallelamente, 'auguri di Pasqua' (#2) offre uno spazio dinamico per contenuti creativi, dato il suo potenziale non ancora dominante.\n\nCautela è richiesta però per il 'Monte Faito' (#7), composta tematica escursionistica condizionata da un alto grado di saturazione, indicando una forte competizione. Rimanere aggiornati sull'interesse del pubblico e sull'evoluzione delle saturazioni è essenziale.\n\nIn questo periodo di nuove e vecchie percezioni, che l'equilibrio tra ispirazione e cautela guidi il cammino dei creatori, perché i veri viaggi sono fatti di intuizioni illuminanti e strategie ponderate."
};
