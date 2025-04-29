const trendData = [
  {
    "rank": 12,
    "entity": "madrid open",
    "discover_score": 23.17990954285176,
    "score_1h": 56.9051724137931,
    "score_4h": 54.42647058823529,
    "score_7d": 28.792899408284022,
    "extracted_entities": "Madrid Open - Tennis - Torneo - Spagna - ATP/WTA",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "barcellona inter",
    "discover_score": 19.04104612217118,
    "score_1h": 64.12931034482759,
    "score_4h": 53.66596638655462,
    "score_7d": 24.99112426035503,
    "extracted_entities": "Barcellona - Inter - Calcio - Partita - UEFA Champions League",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "arsenal psg",
    "discover_score": 6.5613907729720875,
    "score_1h": 27.120689655172416,
    "score_4h": 25.623949579831933,
    "score_7d": 7.588757396449704,
    "extracted_entities": "Arsenal - PSG - Calcio - Partita - Club",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "superenalotto",
    "discover_score": 4.859694452213303,
    "score_1h": 42.758620689655174,
    "score_4h": 19.58613445378151,
    "score_7d": 9.840236686390533,
    "extracted_entities": "SuperEnalotto - Lotteria - Jackpot - Estrazione - Vincita",
    "saturation_score": -1.0
  },
  {
    "rank": 3,
    "entity": "lara leito",
    "discover_score": 4.677479150156409,
    "score_1h": 62.456896551724135,
    "score_4h": 41.186974789915965,
    "score_7d": 0.9881656804733728,
    "extracted_entities": "Lara Leito - Modella - Attrice",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "vasco rossi",
    "discover_score": 2.998725109221044,
    "score_1h": 1.3879310344827587,
    "score_4h": 2.9831932773109244,
    "score_7d": 9.298816568047338,
    "extracted_entities": "Vasco Rossi - Cantante - Musica Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 1,
    "entity": "lazio - parma",
    "discover_score": 2.7142449426134223,
    "score_1h": 5.310344827586206,
    "score_4h": 4.434873949579831,
    "score_7d": 2.997041420118343,
    "extracted_entities": "Lazio - Parma - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 4,
    "entity": "matteo berrettini",
    "discover_score": 2.5337326809516214,
    "score_1h": 38.577586206896555,
    "score_4h": 10.798319327731093,
    "score_7d": 2.869822485207101,
    "extracted_entities": "Matteo Berrettini - Tennis - ATP - Italia - Sport",
    "saturation_score": -1.0
  },
  {
    "rank": 5,
    "entity": "lorenzo musetti",
    "discover_score": 2.528724153024056,
    "score_1h": 57.9051724137931,
    "score_4h": 15.756302521008404,
    "score_7d": 2.0857988165680474,
    "extracted_entities": "Lorenzo Musetti - Tennis - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "sara gama",
    "discover_score": 1.8735851519964812,
    "score_1h": 0.0,
    "score_4h": 0.3907563025210084,
    "score_7d": 4.733727810650888,
    "extracted_entities": "Sara Gama - Calcio - Juventus - Nazionale Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "sergio ramelli",
    "discover_score": 1.8053100390752357,
    "score_1h": 3.438047925189947,
    "score_4h": 3.8676470588235294,
    "score_7d": 3.411242603550296,
    "extracted_entities": "Sergio Ramelli - Anni di Piombo - Milano - Neofascismo - Violenza politica",
    "saturation_score": -1.0
  },
  {
    "rank": 33,
    "entity": "sciopero trenitalia",
    "discover_score": 1.7109834252476315,
    "score_1h": 0.0,
    "score_4h": 0.5630252100840336,
    "score_7d": 5.612426035502959,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Ferrovie - Lavoro",
    "saturation_score": -1.0
  },
  {
    "rank": 11,
    "entity": "elezioni canada",
    "discover_score": 1.6944084234930683,
    "score_1h": 8.517241379310345,
    "score_4h": 3.5483193277310923,
    "score_7d": 3.760355029585799,
    "extracted_entities": "Elezioni - Canada - Politica",
    "saturation_score": -1.0
  },
  {
    "rank": 2,
    "entity": "udinese - bologna",
    "discover_score": 1.5262318147382965,
    "score_1h": 0.8620689655172413,
    "score_4h": 2.100840336134454,
    "score_7d": 2.408284023668639,
    "extracted_entities": "Udinese - Bologna - Serie A - Calcio - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "iga świątek",
    "discover_score": 1.4852355045873218,
    "score_1h": 0.0,
    "score_4h": 1.2941176470588236,
    "score_7d": 4.887573964497042,
    "extracted_entities": "Iga Świątek - Tennis - WTA - Polonia",
    "saturation_score": -1.0
  },
  {
    "rank": 21,
    "entity": "festa della mamma 2025 data",
    "discover_score": 1.4150835171837213,
    "score_1h": 0.0,
    "score_4h": 0.04201680672268908,
    "score_7d": 4.455621301775148,
    "extracted_entities": "Festa della mamma - 2025 - Data",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "verona cagliari",
    "discover_score": 1.3464878515031062,
    "score_1h": 4.6034482758620685,
    "score_4h": 1.968487394957983,
    "score_7d": 3.1183431952662723,
    "extracted_entities": "Verona - Cagliari - Calcio - Serie A - Partita",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "diretta tennis",
    "discover_score": 1.301002902181835,
    "score_1h": 8.706896551724139,
    "score_4h": 3.3340336134453783,
    "score_7d": 3.6834319526627217,
    "extracted_entities": "Diretta - Tennis - Partite - Streaming - Torneo",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "warriors - rockets",
    "discover_score": 1.2615850525730181,
    "score_1h": 0.0,
    "score_4h": 0.5840336134453782,
    "score_7d": 4.340236686390533,
    "extracted_entities": "Golden State Warriors - Houston Rockets - NBA - Partita di basket - Squadre di basket",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "alex de minaur",
    "discover_score": 1.1937773066720638,
    "score_1h": 0.853448275862069,
    "score_4h": 9.340336134453782,
    "score_7d": 1.6479289940828403,
    "extracted_entities": "Alex de Minaur - Tennis - Australia",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "cardinale becciu papa francesco",
    "discover_score": 1.0155799073929028,
    "score_1h": 0.25862068965517243,
    "score_4h": 2.0945378151260505,
    "score_7d": 2.8165680473372783,
    "extracted_entities": "Cardinale Becciu - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "mark carney",
    "discover_score": 0.9544771838532248,
    "score_1h": 1.3189655172413792,
    "score_4h": 0.8403361344537815,
    "score_7d": 3.056213017751479,
    "extracted_entities": "Mark Carney - Economia - Banca d'Inghilterra - Governatore - Politica monetaria",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "cristina uomini e donne",
    "discover_score": 0.9410967455241708,
    "score_1h": 6.318965517241379,
    "score_4h": 0.8802521008403361,
    "score_7d": 2.878698224852071,
    "extracted_entities": "Cristina - Uomini e Donne - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "pippo baudo",
    "discover_score": 0.895871808225652,
    "score_1h": 0.0,
    "score_4h": 1.6638655462184875,
    "score_7d": 2.8136094674556213,
    "extracted_entities": "Pippo Baudo - Personaggio televisivo - Italia - Presentatore - Spettacolo televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 46,
    "entity": "renzo arbore",
    "discover_score": 0.851301226915183,
    "score_1h": 0.0,
    "score_4h": 1.4201680672268906,
    "score_7d": 2.6745562130177514,
    "extracted_entities": "Renzo Arbore - Musica Italiana - Televisione - Spettacolo",
    "saturation_score": -1.0
  },
  {
    "rank": 10,
    "entity": "rita pavone",
    "discover_score": 0.8279357284292593,
    "score_1h": 20.767241379310345,
    "score_4h": 9.046218487394958,
    "score_7d": 0.28106508875739644,
    "extracted_entities": "Rita Pavone - Cantante - Italia - Musica - Anni '60",
    "saturation_score": -1.0
  },
  {
    "rank": 17,
    "entity": "mario adinolfi",
    "discover_score": 0.7819369170706378,
    "score_1h": 1.6724137931034482,
    "score_4h": 0.4180672268907563,
    "score_7d": 2.2633136094674553,
    "extracted_entities": "Mario Adinolfi",
    "saturation_score": -1.0
  },
  {
    "rank": 16,
    "entity": "cala goloritze",
    "discover_score": 0.7024890791697603,
    "score_1h": 0.5862068965517242,
    "score_4h": 2.119747899159664,
    "score_7d": 1.529585798816568,
    "extracted_entities": "Cala Goloritzé - Spiaggia - Sardegna - Turismo - Natura",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "luca nardi",
    "discover_score": 0.6821823418196619,
    "score_1h": 4.991379310344827,
    "score_4h": 1.5399159663865547,
    "score_7d": 1.6775147928994083,
    "extracted_entities": "Luca Nardi",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "blue ivy",
    "discover_score": 0.4312936870917617,
    "score_1h": 0.0,
    "score_4h": 0.5315126050420168,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "Blue Ivy Carter - Beyoncé - Jay-Z - Musica - Famiglia Carter",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "kkr vs dc",
    "discover_score": 0.4243760099343438,
    "score_1h": 11.767241379310345,
    "score_4h": 2.861344537815126,
    "score_7d": 0.4053254437869822,
    "extracted_entities": "KKR - DC - Indian Premier League - Cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "barletta viva",
    "discover_score": 0.38701676254163314,
    "score_1h": 0.0,
    "score_4h": 0.5,
    "score_7d": 1.0236686390532543,
    "extracted_entities": "Barletta - Eventi locali - Notizie - Cultura - Attualità",
    "saturation_score": -1.0
  },
  {
    "rank": 23,
    "entity": "max cavallari",
    "discover_score": 0.38512536430229005,
    "score_1h": 2.387931034482759,
    "score_4h": 0.018907563025210083,
    "score_7d": 1.0917159763313609,
    "extracted_entities": "Max Cavallari - Comico - Fichi d'India",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "gianluca sordo",
    "discover_score": 0.3730792415446146,
    "score_1h": 0.21551724137931033,
    "score_4h": 0.6617647058823529,
    "score_7d": 0.863905325443787,
    "extracted_entities": "Gianluca Sordo",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "gabriel diallo",
    "discover_score": 0.3654140769469605,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.33403361344537813,
    "score_7d": 1.014792899408284,
    "extracted_entities": "Gabriel Diallo - Tennis - Canada",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "grigor dimitrov",
    "discover_score": 0.3567012694519489,
    "score_1h": 0.0,
    "score_4h": 0.025210084033613446,
    "score_7d": 1.1272189349112427,
    "extracted_entities": "Grigor Dimitrov - Tennis - ATP - Classifica - Tornei",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "prestipino",
    "discover_score": 0.3455765832370108,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.5378151260504201,
    "score_7d": 0.8846153846153846,
    "extracted_entities": "Prestipino",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "sondaggio politico la7",
    "discover_score": 0.3286544114034832,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0,
    "score_7d": 0.9674556213017752,
    "extracted_entities": "Sondaggio - Politica - La7",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "douglas luiz",
    "discover_score": 0.30933229541081436,
    "score_1h": 0.0,
    "score_4h": 0.726890756302521,
    "score_7d": 0.591715976331361,
    "extracted_entities": "Douglas Luiz - Calciatore - Aston Villa - Brasile - Premier League",
    "saturation_score": -1.0
  },
  {
    "rank": 31,
    "entity": "ascolti tv lunedì",
    "discover_score": 0.30927886564841844,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.27941176470588236,
    "score_7d": 0.7810650887573964,
    "extracted_entities": "Ascolti TV - Lunedì - Programmi televisivi - Audience - Share televisivo",
    "saturation_score": -1.0
  },
  {
    "rank": 29,
    "entity": "ferrari 296 speciale",
    "discover_score": 0.2947835012173863,
    "score_1h": 3.086206896551724,
    "score_4h": 0.4411764705882353,
    "score_7d": 0.668639053254438,
    "extracted_entities": "Ferrari - 296 - Speciale",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "nathalie guetta",
    "discover_score": 0.2875468985126275,
    "score_1h": 2.5,
    "score_4h": 0.8592436974789915,
    "score_7d": 0.4260355029585799,
    "extracted_entities": "Nathalie Guetta - Attrice - Don Matteo - Francia - Televisione",
    "saturation_score": -1.0
  },
  {
    "rank": 26,
    "entity": "marcell jacobs",
    "discover_score": 0.27804234166186903,
    "score_1h": 0.0,
    "score_4h": 0.29411764705882354,
    "score_7d": 0.6242603550295859,
    "extracted_entities": "Marcell Jacobs - Atletica leggera - Olimpiadi - Medaglie - Record",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "yildiz squalifica",
    "discover_score": 0.2603208989404172,
    "score_1h": 1.4310344827586206,
    "score_4h": 0.7331932773109244,
    "score_7d": 0.4940828402366864,
    "extracted_entities": "Yildiz - Squalifica - Calcio",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "jakub menšík",
    "discover_score": 0.2534756992710532,
    "score_1h": 0.0,
    "score_4h": 1.8634453781512605,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Jakub Menšík - Tennis - Giocatore",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "paolo calissano",
    "discover_score": 0.22663541494307393,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.5591715976331361,
    "extracted_entities": "Paolo Calissano - Attore - Italia - Televisione - Cinema",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "maurizio ferrini",
    "discover_score": 0.1889066989251963,
    "score_1h": 0.0,
    "score_4h": 0.8235294117647058,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Maurizio Ferrini - Attore - Comico - Televisione Italiana",
    "saturation_score": -1.0
  },
  {
    "rank": 40,
    "entity": "massimo giletti",
    "discover_score": 0.17951097901665694,
    "score_1h": 0.0,
    "score_4h": 0.3025210084033613,
    "score_7d": 0.2633136094674556,
    "extracted_entities": "Massimo Giletti - Giornalista - Televisione - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 24,
    "entity": "decreti attuativi corsi indire sostegno",
    "discover_score": 0.17625218181051575,
    "score_1h": 1.603448275862069,
    "score_4h": 0.0546218487394958,
    "score_7d": 0.26627218934911245,
    "extracted_entities": "Decreti attuativi - Corsi - Indire - Sostegno",
    "saturation_score": -1.0
  },
  {
    "rank": 18,
    "entity": "giornata internazionale della danza",
    "discover_score": 0.16839850550223978,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.1407563025210084,
    "score_7d": 0.1893491124260355,
    "extracted_entities": "Giornata internazionale della danza - Danza - Celebrazione - UNESCO - Eventi",
    "saturation_score": -1.0
  },
  {
    "rank": 51,
    "entity": "joel evans",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "franco mastantuono",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "mutua madrid open",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "origi",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "stefano de martino",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "swiatek",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "samuele segreto",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "gerhard ludwig müller",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "marco travaglio",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "francesco diviesti",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "pantelleria",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "heat - cavaliers",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "erdogan",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "matteo gigante",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "zimbabwe vs bangladesh",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "stadio maradona",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "valditara troppi compiti",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "marina uomini e donne",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "istanbul",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "bublik",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "chiara ferragni",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "brigitta boccoli",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "oroscopo ariete 29 aprile",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "open madrid",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "napoli genoa",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "nicola ventola",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "maria corleone",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "ruini",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "costantinopoli",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "antonella mosetti",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "giro d'italia 2025",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "camila giorgi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "personale ata terza fascia ciad",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "napoli new york",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "benedicta boccoli",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "vaibhav suryavanshi",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "manila nazzaro",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "silvia salis",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "mar cinese meridionale",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "jessica alba",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "stipendio docenti",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "frances tiafoe",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "giorgio mastrota",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "estonia",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "alessandra todde",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "nba",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "brandin podziemski",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "istambul",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "napoli basket",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "lorella boccia",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "avengers doomsday",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "golden state warriors",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "referendum",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "estrazione del lotto",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "fbi most wanted",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "you serie",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "iva zanicchi",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "eva amurri",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "verona-cagliari",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "the last of us streaming",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "sorelle boccoli",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "armenia",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "buongiorno martedi 29 aprile",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "antonio spadaro",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "la russa",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "michelle obama",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "belve 2025",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "kim kardashian",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "gta 6",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "internazionali roma 2025",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "risultati nba",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "streaming",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "gasperini",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "bologna fc 1909",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "monica setta",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "pedro pascal",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "kevin love",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "cappella sistina",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "tommaso zorzi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "michele santoro",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "simone muratore",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "sabrina salerno malattia",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "bolelli",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "djuric",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "eurovision 2025",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "bersani",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "leonardo di caprio",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "castel gandolfo",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "cuzzocrea",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "ancelotti real madrid",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "alessandro giuli",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "antonino spinalbese",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "il paradiso delle signore anticipazioni",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "calendario lazio",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "andrea delogu",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "alessandro proto",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "india women vs south africa women",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "marlon brando",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "alperen şengün",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "thais wiggers",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "diffidati serie a",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "pwc",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "lacerenza",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "ventola",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "dan peterson",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "benedetta porcaroli",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "warriors",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "alberto stasi",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "rihanna",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "salvatore bagni",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "allenatore parma",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "storie di sera",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "lucetta scaraffia",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "lazio juve",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "amal clooney",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "cardinale muller",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "tudor juventus",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "pellegrino parma",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "russell crowe",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "risultati per serie a",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "jurgen klopp",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "referendum 2025",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "milly carlucci",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "santo del giorno",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "dinamo bucurești - cfr cluj",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "john elkann",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "alba parietti",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "ascoli",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "cosa c'è stasera in tv",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "diffidati bologna",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "giovanni leoni",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "youth league",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "daniele ghilardi",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "marigliano net",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "restaurant",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "mediobanca banca generali",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "stefano fresi",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "pastificio futura",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "basilicata",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "elodie",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "novendiali",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "toffanin",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "salma hayek",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "boschi",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "donzelli",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "stefano massini",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "leeds - bristol city",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "eurovision",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "bronte",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "ankara",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "campionato primavera",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "marco cecchinato",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "ps plus giochi maggio",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "suno",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "napoli genoa",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "radio radio",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "pablo escobar",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "cremonese cesena primavera",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "pierce brosnan",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "bangladesh",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "nicola porro",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "dennis man",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "kevin costner",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "francesca barra",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "classifica serie a calcio",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 218,
    "entity": "lillard",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 219,
    "entity": "baldassare reina",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 220,
    "entity": "fabio fazio che tempo che fa",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 221,
    "entity": "jason momoa",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 222,
    "entity": "tecchiena",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-29 14:53:31",
  "trends_count": 222,
  "top_score": 23.17990954285176,
  "runtime_minutes": 12.248938699563345,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Mentre l'Italia si muove in perfetta armonia con le onde delle tendenze globali, emerge un'orchestra di temi che danza tra sport e spettacolo. Gli eventi sportivi si impongono come sovrani, con il tennis e il calcio che sfrecciano come meteore nei cuori degli appassionati. Il possente Madrid Open (#1) si leva in alto, seguito dalla sfida titanica tra Barcellona e Inter (#2), segnando le linee traccianti di coloro che cercano di anticipare i futuri vincitori.\n\nTra queste correnti, si intravede l'opportunità per Google Discover nella figura di Lara Leito (#5), il cui fascino di modella e attrice cattura attenzione crescente, accompagnata dalla leggenda senza tempo di Vasco Rossi (#6). Entrambi offrono uno spazio fertile per contenuti coinvolgenti e di nicchia, grazie alla saturazione moderata nel panorama mediatico.\n\nTuttavia, l'eco delle mode effimere ci ammonisce su Vasco Rossi (#6) e sulla saturazione potenziale del terreno sportivo, dove la competizione è feroce e sfidata dai limiti della copertura esistente. In questo contesto, chi crea contenuti è esortato a cavalcare le onde del momento con saggezza, cercando nicchie vergini ma anche affinando il proprio occhio per evitare i sentieri troppo battuti."
};
