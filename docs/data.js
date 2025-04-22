const trendData = [
  {
    "rank": 25,
    "entity": "inps",
    "discover_score": 24.672317202514677,
    "score_1h": 66.54880187025131,
    "score_4h": 76.83823529411765,
    "score_7d": 33.59467455621302,
    "extracted_entities": "INPS - Previdenza Sociale - Pensioni - Contributi - Italia",
    "saturation_score": 55.0
  },
  {
    "rank": 39,
    "entity": "whatsapp",
    "discover_score": 19.96753810586664,
    "score_1h": 89.11206896551724,
    "score_4h": 76.51050420168067,
    "score_7d": 29.692307692307693,
    "extracted_entities": "WhatsApp - Messaggistica - App - Comunicazione - Meta",
    "saturation_score": 141.0
  },
  {
    "rank": 2,
    "entity": "inter roma",
    "discover_score": 13.370936986781444,
    "score_1h": 69.36206896551724,
    "score_4h": 49.60714285714286,
    "score_7d": 6.994082840236686,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 227.0
  },
  {
    "rank": 35,
    "entity": "oggi in tv",
    "discover_score": 8.884853153679591,
    "score_1h": 10.750876680303914,
    "score_4h": 12.634453781512605,
    "score_7d": 21.28402366863905,
    "extracted_entities": "Programmi TV - Guida TV - Palinsesto - Canali televisivi",
    "saturation_score": 27.0
  },
  {
    "rank": 8,
    "entity": "il paradiso delle signore",
    "discover_score": 7.814638465113751,
    "score_1h": 25.387931034482758,
    "score_4h": 10.300420168067227,
    "score_7d": 13.639053254437869,
    "extracted_entities": "Il paradiso delle signore - Serie TV - Rai - Italia - Moda",
    "saturation_score": 46.0
  },
  {
    "rank": 9,
    "entity": "rottamazione quinquies",
    "discover_score": 7.116227691374824,
    "score_1h": 0.08620689655172414,
    "score_4h": 0.9621848739495797,
    "score_7d": 15.210059171597631,
    "extracted_entities": "Rottamazione - Quinquies - Fisco - Debiti - Agenzia delle Entrate",
    "saturation_score": 6.0
  },
  {
    "rank": 19,
    "entity": "maltempo",
    "discover_score": 5.566706929483895,
    "score_1h": 9.077586206896552,
    "score_4h": 1.3676470588235294,
    "score_7d": 14.443786982248522,
    "extracted_entities": "Maltempo - Condizioni meteorologiche avverse - Allerta meteo - Precipitazioni - Vento forte",
    "saturation_score": 317.0
  },
  {
    "rank": 38,
    "entity": "millionday",
    "discover_score": 4.451523456931765,
    "score_1h": 4.224137931034483,
    "score_4h": 3.861344537815126,
    "score_7d": 12.866863905325443,
    "extracted_entities": "MillionDay - Lotteria - Italia",
    "saturation_score": 40.0
  },
  {
    "rank": 33,
    "entity": "uomini e donne oggi",
    "discover_score": 4.289021415013897,
    "score_1h": 4.449298655756868,
    "score_4h": 15.224789915966387,
    "score_7d": 9.109467455621303,
    "extracted_entities": "Uomini e Donne - Oggi - Programma TV",
    "saturation_score": 1.0
  },
  {
    "rank": 1,
    "entity": "facies hippocratica",
    "discover_score": 4.140940130334325,
    "score_1h": 17.61206896551724,
    "score_4h": 8.947478991596638,
    "score_7d": 3.680473372781065,
    "extracted_entities": "Facies Hippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 7.0
  },
  {
    "rank": 34,
    "entity": "25 aprile festa",
    "discover_score": 4.031474492704983,
    "score_1h": 2.3302162478082993,
    "score_4h": 1.0,
    "score_7d": 12.254437869822485,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Celebrazione - Storia",
    "saturation_score": 8.0
  },
  {
    "rank": 18,
    "entity": "coppa italia inter milan",
    "discover_score": 3.933960594916782,
    "score_1h": 15.267241379310345,
    "score_4h": 12.630252100840337,
    "score_7d": 7.624260355029586,
    "extracted_entities": "Coppa Italia - Inter - Milan - Calcio - Partita",
    "saturation_score": 32.0
  },
  {
    "rank": 14,
    "entity": "giornata della terra",
    "discover_score": 3.117313569961442,
    "score_1h": 6.800116890707189,
    "score_4h": 4.932773109243698,
    "score_7d": 7.1952662721893486,
    "extracted_entities": "Giornata della Terra - Ambiente - Sostenibilità - Ecologia - Cambiamento climatico",
    "saturation_score": 167.0
  },
  {
    "rank": 37,
    "entity": "girona - betis",
    "discover_score": 1.5302066912625527,
    "score_1h": 0.0,
    "score_4h": 0.2605042016806723,
    "score_7d": 5.218934911242604,
    "extracted_entities": "Girona - Betis - Calcio - Partita - Liga Spagnola",
    "saturation_score": 9.0
  },
  {
    "rank": 41,
    "entity": "lega serie a",
    "discover_score": 1.5201482032319533,
    "score_1h": 1.353448275862069,
    "score_4h": 0.9726890756302521,
    "score_7d": 5.073964497041421,
    "extracted_entities": "Lega Serie A - Calcio - Campionato - Italia - Squadre",
    "saturation_score": 48.0
  },
  {
    "rank": 3,
    "entity": "gad lerner lascia il fatto quotidiano",
    "discover_score": 1.3874459026337795,
    "score_1h": 10.109292811221508,
    "score_4h": 3.9474789915966384,
    "score_7d": 1.985207100591716,
    "extracted_entities": "Gad Lerner - Il Fatto Quotidiano - Dimissioni",
    "saturation_score": 8.0
  },
  {
    "rank": 5,
    "entity": "giuseppe farina",
    "discover_score": 1.3649758670247167,
    "score_1h": 2.862068965517241,
    "score_4h": 9.394957983193278,
    "score_7d": 1.0798816568047338,
    "extracted_entities": "Giuseppe Farina",
    "saturation_score": 84.0
  },
  {
    "rank": 4,
    "entity": "sara tommasi",
    "discover_score": 1.2573680927789217,
    "score_1h": 4.25,
    "score_4h": 3.3361344537815123,
    "score_7d": 2.035502958579882,
    "extracted_entities": "Sara Tommasi - Personaggio pubblico - Celebrità italiana",
    "saturation_score": 51.0
  },
  {
    "rank": 10,
    "entity": "kristen stewart",
    "discover_score": 1.0138180922447328,
    "score_1h": 1.0603448275862069,
    "score_4h": 0.2773109243697479,
    "score_7d": 2.739644970414201,
    "extracted_entities": "Kristen Stewart - Attrice - Cinema - Hollywood",
    "saturation_score": 58.0
  },
  {
    "rank": 6,
    "entity": "lucia bronzetti",
    "discover_score": 0.9970958046472694,
    "score_1h": 2.594827586206897,
    "score_4h": 7.367647058823529,
    "score_7d": 0.7662721893491125,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia",
    "saturation_score": 53.0
  },
  {
    "rank": 40,
    "entity": "papa francesco emanuela orlandi",
    "discover_score": 0.9609705945824809,
    "score_1h": 0.635593220338983,
    "score_4h": 0.18487394957983194,
    "score_7d": 3.3491124260355027,
    "extracted_entities": "Papa Francesco - Emanuela Orlandi - Vaticano - Scomparsa",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "knicks - pistons",
    "discover_score": 0.9570704188249891,
    "score_1h": 0.0,
    "score_4h": 0.25,
    "score_7d": 3.260355029585799,
    "extracted_entities": "Knicks - Pistons - NBA - Partita - Basket",
    "saturation_score": 3.0
  },
  {
    "rank": 46,
    "entity": "nuggets - clippers",
    "discover_score": 0.9081850052920393,
    "score_1h": 0.8991817650496785,
    "score_4h": 0.1323529411764706,
    "score_7d": 3.2455621301775146,
    "extracted_entities": "Denver Nuggets - Los Angeles Clippers - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "olivia williams",
    "discover_score": 0.9035075310483962,
    "score_1h": 0.0,
    "score_4h": 1.2058823529411766,
    "score_7d": 2.514792899408284,
    "extracted_entities": "Olivia Williams - Attrice - Film - Televisione - Teatro",
    "saturation_score": 10.0
  },
  {
    "rank": 43,
    "entity": "jean-marc aveline",
    "discover_score": 0.7760718360916689,
    "score_1h": 0.0,
    "score_4h": 0.39915966386554624,
    "score_7d": 2.6479289940828403,
    "extracted_entities": "Jean-Marc Aveline - Cardinale - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "alife",
    "discover_score": 0.6780534926369944,
    "score_1h": 0.0,
    "score_4h": 1.2079831932773109,
    "score_7d": 2.1094674556213016,
    "extracted_entities": "Alife - Comune - Provincia di Caserta - Campania - Italia",
    "saturation_score": 104.0
  },
  {
    "rank": 31,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.6728013250212074,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.4915966386554622,
    "score_7d": 2.1094674556213016,
    "extracted_entities": "Oroscopo - Scorpione - Paolo Fox",
    "saturation_score": 1.0
  },
  {
    "rank": 45,
    "entity": "sudakov",
    "discover_score": 0.6679807492234743,
    "score_1h": 0.41379310344827586,
    "score_4h": 0.06932773109243698,
    "score_7d": 2.3491124260355027,
    "extracted_entities": "Calcio - FC Dinamo Mosca - Giocatore - Russia",
    "saturation_score": 40.0
  },
  {
    "rank": 13,
    "entity": "carlo maria viganò",
    "discover_score": 0.6241139180755875,
    "score_1h": 2.0689655172413794,
    "score_4h": 0.5903361344537815,
    "score_7d": 1.6094674556213018,
    "extracted_entities": "Carlo Maria Viganò - Arcivescovo - Chiesa Cattolica",
    "saturation_score": 7.0
  },
  {
    "rank": 29,
    "entity": "donald trump papa francesco",
    "discover_score": 0.6233601930611838,
    "score_1h": 2.5086206896551726,
    "score_4h": 0.3865546218487395,
    "score_7d": 1.9349112426035504,
    "extracted_entities": "Donald Trump - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "luca nardi",
    "discover_score": 0.6030345467978653,
    "score_1h": 6.758620689655173,
    "score_4h": 2.3361344537815123,
    "score_7d": 1.3136094674556213,
    "extracted_entities": "Luca Nardi",
    "saturation_score": 23.0
  },
  {
    "rank": 21,
    "entity": "quando si gioca inter roma",
    "discover_score": 0.5908872892044892,
    "score_1h": 3.6797194623027467,
    "score_4h": 2.716386554621849,
    "score_7d": 1.0976331360946745,
    "extracted_entities": "Inter - Roma - Partita - Calendario - Serie A",
    "saturation_score": 0.0
  },
  {
    "rank": 42,
    "entity": "cocciaretto",
    "discover_score": 0.581234687484064,
    "score_1h": 0.603448275862069,
    "score_4h": 0.16806722689075632,
    "score_7d": 1.9615384615384617,
    "extracted_entities": "Tennis - Elisabetta Cocciaretto - Sport - Atleta",
    "saturation_score": 27.0
  },
  {
    "rank": 26,
    "entity": "tottenham - nottingham forest",
    "discover_score": 0.5709975980214884,
    "score_1h": 0.0,
    "score_4h": 0.296218487394958,
    "score_7d": 1.7337278106508875,
    "extracted_entities": "Tottenham - Nottingham Forest - Calcio - Premier League",
    "saturation_score": 53.0
  },
  {
    "rank": 17,
    "entity": "marjorie taylor greene",
    "discover_score": 0.5641889481036005,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.20168067226890757,
    "score_7d": 1.6035502958579881,
    "extracted_entities": "Marjorie Taylor Greene - Politica - Stati Uniti - Congresso - Partito Repubblicano",
    "saturation_score": 9.0
  },
  {
    "rank": 23,
    "entity": "dalai lama",
    "discover_score": 0.5465330203676649,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.6911764705882354,
    "score_7d": 1.5,
    "extracted_entities": "Dalai Lama - Tibet - Buddhismo - Spiritualità - Leader religioso",
    "saturation_score": 5.0
  },
  {
    "rank": 7,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 0.4964323341770651,
    "score_1h": 2.896551724137931,
    "score_4h": 1.9474789915966386,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 15,
    "entity": "banco bpm unicredit",
    "discover_score": 0.49240844635191366,
    "score_1h": 2.1120689655172415,
    "score_4h": 0.680672268907563,
    "score_7d": 1.195266272189349,
    "extracted_entities": "Banco BPM - UniCredit - Banche - Finanza",
    "saturation_score": 4.0
  },
  {
    "rank": 12,
    "entity": "lsg vs dc",
    "discover_score": 0.47496507194975907,
    "score_1h": 10.741379310344827,
    "score_4h": 1.4390756302521008,
    "score_7d": 0.8846153846153846,
    "extracted_entities": "LSG - DC - Indian Premier League - Cricket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 16,
    "entity": "pagamento assegno unico aprile 2025 inps",
    "discover_score": 0.4684530673280399,
    "score_1h": 2.455289304500292,
    "score_4h": 1.3235294117647058,
    "score_7d": 0.9615384615384616,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025 - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "the last of us seconda stagione",
    "discover_score": 0.43013576368739037,
    "score_1h": 0.0,
    "score_4h": 0.5357142857142858,
    "score_7d": 1.28698224852071,
    "extracted_entities": "The Last of Us - Seconda stagione - Serie TV - HBO",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "cardinale becciu",
    "discover_score": 0.40313590928310983,
    "score_1h": 2.2413793103448274,
    "score_4h": 0.7899159663865546,
    "score_7d": 0.7958579881656804,
    "extracted_entities": "Cardinale Becciu - Vaticano - Chiesa Cattolica",
    "saturation_score": 10.0
  },
  {
    "rank": 32,
    "entity": "valentina uomini e donne",
    "discover_score": 0.25575459558769237,
    "score_1h": 8.379310344827587,
    "score_4h": 2.2289915966386555,
    "score_7d": 0.11242603550295859,
    "extracted_entities": "Valentina - Uomini e Donne - Programma televisivo",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "mediaset extra the couple",
    "discover_score": 0.24310090586598412,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.5210084033613446,
    "score_7d": 0.4053254437869822,
    "extracted_entities": "Mediaset Extra - The Couple - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "incendio olbia",
    "discover_score": 0.23750226805131874,
    "score_1h": 4.344681472822911,
    "score_4h": 0.957983193277311,
    "score_7d": 0.2869822485207101,
    "extracted_entities": "Incendio - Olbia - Emergenza - Sardegna - Vigili del Fuoco",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "djalo",
    "discover_score": 0.19850495826407552,
    "score_1h": 0.0,
    "score_4h": 1.0714285714285714,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Calcio - Giocatore - Lille - Difensore - Portogallo",
    "saturation_score": 3.0
  },
  {
    "rank": 48,
    "entity": "insta360 x5",
    "discover_score": 0.18330326080755632,
    "score_1h": 1.0254237288135593,
    "score_4h": 0.3172268907563025,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Insta360 X5 - Fotocamera 360 gradi - Tecnologia",
    "saturation_score": 25.0
  },
  {
    "rank": 30,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.17077101469027497,
    "score_1h": 0.0,
    "score_4h": 0.37815126050420167,
    "score_7d": 0.1834319526627219,
    "extracted_entities": "Aldo Hugo Sallustro",
    "saturation_score": 171.0
  },
  {
    "rank": 49,
    "entity": "luana uomini e donne",
    "discover_score": 0.17025647109139044,
    "score_1h": 1.3793103448275863,
    "score_4h": 0.21218487394957983,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Luana - Uomini e Donne - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "maurizio pistocchi",
    "discover_score": 0.15007184856955855,
    "score_1h": 0.0,
    "score_4h": 0.14915966386554622,
    "score_7d": 0.14792899408284022,
    "extracted_entities": "Maurizio Pistocchi - Giornalista - Calcio - Opinioni - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "spider man 3",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "conclave cardinali papabili",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "naomi ōsaka",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "emma bonino",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "buongiorno",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mps",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "noipa",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "the last of us",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "agenzia delle entrate",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "sem steijn",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "netanyahu",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "instagram",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "pisa - cremonese",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "yahoo",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "conclave streaming",
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
    "entity": "tiscali",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "tim",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "thunderstorm warning",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "buon martedi 22 aprile 2025",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "barcellona inter",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "dhl tracking",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "bper",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "danilo gallinari",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "teatro alla scala",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "it",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "f1 gp arabia saudita gara",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "dinamo bucarest - u craiova",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "peshawar zalmi vs karachi kings",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "cardinale sepe",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "rds",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "alessandro sallusti",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "stellantis azioni",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "al hilal - al-shabab",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "lipari",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "girona vs real betis",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "federica angeli giornalista",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "massimo franco",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "salvini",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "desaparecidos",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "anders arborelius",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "unicredit azioni",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "de zerbi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "tottenham",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "idealista",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "adani",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "nba",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "bangladesh",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "ralph fiennes",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "elder scrolls oblivion remastered",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "radio deejay",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "radio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "circoloco",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "luka romero",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "al ittihad - al-ettifaq",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "buongiorno 22 aprile 2025",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "positano news",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "jürgen klopp",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "criscitiello",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "avellino papa",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "dmax",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "cambio euro dollaro",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "kanye west",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "minniti",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "roberto da crema",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "gazzetta sport",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "mib 30",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "xabi alonso",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "ihostage",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "melania trump",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "lampedusa",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "gwyneth paltrow",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "elena bergoglio",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "nottingham forest",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "azioni eni",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "red",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "james franco",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "antonio spadaro",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "pandoland",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "az - go ahead eagles",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "gialappashow",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "investing",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "tom cruise",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "santiago de compostela",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "roberto saviano",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "risultati nba",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "randy orton",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "luis henrique",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "eni azioni",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "mission impossible",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "rey mysterio",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "kevin costner",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "il mattino di padova",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "facundo lescano",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "martin sheen",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "incidente a1",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "cardinale scola",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "al pacino",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "javier cercas papa francesco",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "quotidiani oggi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "sangiuliano",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "leeds - stoke city",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "padre enzo fortunato",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "fortitudo bologna - rbr",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "braida",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "cardinale ravasi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "lilli gruber",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "spider man 4",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "the last of us streaming",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "kristi noem",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "logan paul",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "kevin joseph farrell",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "cody rhodes",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "soldionline",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "radio 24",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "dominik mysterio",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "ezio mauro",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "euro dollaro",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "leicester",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "gazzetta di modena",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "graziano cesari",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "santiago",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "tudor juve",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "oroscopo domani paolo fox",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "oslo",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "ozpetek",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "anthony hopkins",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "oblivion remake",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "nicolò barella",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "travis scott",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "bron breakker",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "a sua immagine",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "meteolive",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "joe hendry",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "azioni mps",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "eugene the last of us",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "c",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "josi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "aj styles",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "maria corleone",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "ben affleck",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "gnonto",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "triesteprima",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "ciociaria",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "reddit down",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "beppe bergomi",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "mongolia",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "casteddu online",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "traffico autostrade",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "drew mcintyre",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "hostage",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "eco di bergamo",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "targato cn",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "autostrade per l'italia",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "burger king",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "kirsten dunst",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "damian priest",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "bianca belair",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "ali agca",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "svitolina",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "claudio coldebella",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "gazzettino",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "antonio banderas",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "paul rudd",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "l'adige",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-22 14:48:55",
  "trends_count": 220,
  "top_score": 24.672317202514677,
  "runtime_minutes": 8.208916831016541,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Incrociando i sentieri digitali, emergono tre temi dominanti: il pulsante battito del Calcio, l'imminente evoluzione del Meta attraverso comunicazioni digitali, e le mutevoli condizioni atmosferiche che rigano il cielo d'Italia. Nell'arena calcistica, l'imminente scontro \"Inter Roma\" (#3) svela un'elevata curiosità, sostenuta da un vigoroso interesse a breve termine e una saturazione moderata, suggerendo un fertile terreno per contenuti su Google Discover.\n\nNel regno delle messaggistiche digitali, \"WhatsApp\" (#2) si staglia come un solido filone da esplorare, grazie a un forte DScore e un'atmosfera di moderato affollamento informativo, promettendo una scoperta intrigante attraverso Google Discover. Tuttavia, attenzione alle anime esuberanti del meteo: \"Maltempo\" (#7) brilla per saturazione elevata, promettendo aspri venti di competizione tra i creatori di contenuti.\n\nIl consiglio strategico? Scegli con saggezza i tuoi temi da esplorare, dove il cielo è vasto ma non soffuso d’ombre; cavalca l'onda dei temi in ascesa e sii vigile alle ombre della saturazione, per far emergere contenuti che trovano spazio nel vasto universo di Discovery."
};
