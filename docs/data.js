const trendData = [
  {
    "rank": 32,
    "entity": "pasqua",
    "discover_score": 17.963031473135196,
    "score_1h": 84.5677966101695,
    "score_4h": 76.19747899159664,
    "score_7d": 24.2396449704142,
    "extracted_entities": "Pasqua - Festa religiosa - Resurrezione - Tradizioni - Uova di cioccolato",
    "saturation_score": 3580.0
  },
  {
    "rank": 1,
    "entity": "sara curtis",
    "discover_score": 11.217596028816994,
    "score_1h": 50.68161893629456,
    "score_4h": 24.905462184873947,
    "score_7d": 6.8047337278106514,
    "extracted_entities": "Sara Curtis",
    "saturation_score": 646.0
  },
  {
    "rank": 42,
    "entity": "savigliano",
    "discover_score": 9.24183060654656,
    "score_1h": 1.6982758620689655,
    "score_4h": 1.5819327731092439,
    "score_7d": 25.931952662721894,
    "extracted_entities": "Savigliano - Città - Piemonte - Italia",
    "saturation_score": 62.0
  },
  {
    "rank": 6,
    "entity": "bialetti",
    "discover_score": 8.923689293056432,
    "score_1h": 42.189655172413794,
    "score_4h": 22.775210084033613,
    "score_7d": 11.378698224852071,
    "extracted_entities": "Bialetti - Caffettiere - Moka - Elettrodomestici - Design italiano",
    "saturation_score": 572.0
  },
  {
    "rank": 47,
    "entity": "nvidia",
    "discover_score": 7.56864409435291,
    "score_1h": 26.586206896551722,
    "score_4h": 9.705882352941178,
    "score_7d": 20.133136094674555,
    "extracted_entities": "NVIDIA - Tecnologia - GPU - Intelligenza Artificiale - Gaming",
    "saturation_score": 213.0
  },
  {
    "rank": 18,
    "entity": "champions league",
    "discover_score": 7.190603262113297,
    "score_1h": 62.53448275862069,
    "score_4h": 42.36601209521466,
    "score_7d": 7.896449704142012,
    "extracted_entities": "Champions League - Calcio - UEFA - Torneo - Squadre",
    "saturation_score": 1290.0
  },
  {
    "rank": 31,
    "entity": "msc",
    "discover_score": 6.824701073077709,
    "score_1h": 19.03448275862069,
    "score_4h": 11.663865546218489,
    "score_7d": 16.21301775147929,
    "extracted_entities": "MSC Crociere - Trasporto marittimo - Compagnia di navigazione",
    "saturation_score": 193.0
  },
  {
    "rank": 48,
    "entity": "real madrid arsenal",
    "discover_score": 6.799889893902356,
    "score_1h": 32.689655172413794,
    "score_4h": 16.247899159663866,
    "score_7d": 16.497041420118343,
    "extracted_entities": "Real Madrid - Arsenal - Calcio - Partita - Club",
    "saturation_score": 303.0
  },
  {
    "rank": 35,
    "entity": "psg",
    "discover_score": 5.971391014222263,
    "score_1h": 46.37931034482759,
    "score_4h": 45.14666326781759,
    "score_7d": 6.508875739644971,
    "extracted_entities": "Paris Saint-Germain - Calcio - Ligue 1 - Club calcistico - Francia",
    "saturation_score": 1310.0
  },
  {
    "rank": 3,
    "entity": "aston villa - psg",
    "discover_score": 5.066126314123071,
    "score_1h": 11.180742255990648,
    "score_4h": 14.890756302521009,
    "score_7d": 5.562130177514793,
    "extracted_entities": "Aston Villa - PSG - Calcio - Squadre di calcio - Partita",
    "saturation_score": 325.0
  },
  {
    "rank": 2,
    "entity": "borussia dortmund - barcellona",
    "discover_score": 4.47004699545208,
    "score_1h": 7.669199298655757,
    "score_4h": 2.8172268907563023,
    "score_7d": 6.6301775147929,
    "extracted_entities": "Borussia Dortmund - Barcellona - Calcio - Partita - UEFA",
    "saturation_score": 78.0
  },
  {
    "rank": 41,
    "entity": "barcelona",
    "discover_score": 4.346145598363573,
    "score_1h": 19.008620689655174,
    "score_4h": 18.724789915966387,
    "score_7d": 8.849112426035504,
    "extracted_entities": "Barcellona - Spagna - Turismo - Calcio - Cultura",
    "saturation_score": 84.0
  },
  {
    "rank": 33,
    "entity": "johnny depp",
    "discover_score": 4.226221259121745,
    "score_1h": 0.19827586206896552,
    "score_4h": 1.0105042016806722,
    "score_7d": 12.707100591715978,
    "extracted_entities": "Johnny Depp - Attore - Hollywood",
    "saturation_score": 40.0
  },
  {
    "rank": 27,
    "entity": "montella",
    "discover_score": 4.053037651866726,
    "score_1h": 1.5344827586206897,
    "score_4h": 0.8214285714285714,
    "score_7d": 11.855029585798817,
    "extracted_entities": "Vincenzo Montella - Calcio - Allenatore - Serie A - Fiorentina",
    "saturation_score": 36.0
  },
  {
    "rank": 44,
    "entity": "carlos alcaraz",
    "discover_score": 3.4688481944470033,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.703781512605042,
    "score_7d": 11.284023668639053,
    "extracted_entities": "Carlos Alcaraz - Tennis - Giocatore - Sport - ATP",
    "saturation_score": 36.0
  },
  {
    "rank": 4,
    "entity": "terremoto oggi",
    "discover_score": 3.1364755924969923,
    "score_1h": 10.318965517241379,
    "score_4h": 28.275210084033613,
    "score_7d": 0.9319526627218935,
    "extracted_entities": "Terremoto - Oggi - Sisma - Evento sismico - Notizie aggiornate",
    "saturation_score": 9.0
  },
  {
    "rank": 45,
    "entity": "borussia dortmund",
    "discover_score": 2.5446987168779462,
    "score_1h": 10.310344827586206,
    "score_4h": 5.665966386554622,
    "score_7d": 7.177514792899409,
    "extracted_entities": "Borussia Dortmund - Calcio - Bundesliga - Squadra di calcio - Germania",
    "saturation_score": 177.0
  },
  {
    "rank": 9,
    "entity": "sara errani",
    "discover_score": 2.15740261807311,
    "score_1h": 44.01724137931035,
    "score_4h": 10.443277310924369,
    "score_7d": 3.0147928994082838,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 24,
    "entity": "errani",
    "discover_score": 2.0552373482182156,
    "score_1h": 54.206896551724135,
    "score_4h": 15.955882352941178,
    "score_7d": 2.449704142011834,
    "extracted_entities": "Sara Errani - Tennis - Italia",
    "saturation_score": 40.0
  },
  {
    "rank": 5,
    "entity": "presidente mattarella ricoverato",
    "discover_score": 1.952735250424595,
    "score_1h": 2.0908825248392753,
    "score_4h": 4.600840336134453,
    "score_7d": 3.381656804733728,
    "extracted_entities": "Presidente Mattarella - Ricovero - Salute",
    "saturation_score": 45.0
  },
  {
    "rank": 40,
    "entity": "4chan",
    "discover_score": 1.8165405036868512,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.1764705882352941,
    "score_7d": 6.245562130177515,
    "extracted_entities": "4chan - Forum online - Anonimato - Cultura internet - Meme",
    "saturation_score": 9.0
  },
  {
    "rank": 50,
    "entity": "amato",
    "discover_score": 1.6670552652493191,
    "score_1h": 1.4396551724137931,
    "score_4h": 4.867647058823529,
    "score_7d": 4.671597633136095,
    "extracted_entities": "Amato",
    "saturation_score": 130.0
  },
  {
    "rank": 34,
    "entity": "dortmund vs barcelona",
    "discover_score": 1.327689501222069,
    "score_1h": 0.05084745762711865,
    "score_4h": 0.3760504201680672,
    "score_7d": 4.452662721893491,
    "extracted_entities": "Dortmund - Barcelona - Partita di calcio - UEFA Champions League - Squadre di calcio",
    "saturation_score": 3.0
  },
  {
    "rank": 46,
    "entity": "champions league oggi",
    "discover_score": 1.252737980217267,
    "score_1h": 0.2672413793103448,
    "score_4h": 0.13847965964628528,
    "score_7d": 4.482248520710059,
    "extracted_entities": "Champions League - Partite - Oggi",
    "saturation_score": 5.0
  },
  {
    "rank": 10,
    "entity": "rocco siffredi iene",
    "discover_score": 1.1424721915048985,
    "score_1h": 4.456896551724138,
    "score_4h": 2.528594282901445,
    "score_7d": 2.5,
    "extracted_entities": "Rocco Siffredi - Le Iene - Programma TV",
    "saturation_score": -1.0
  },
  {
    "rank": 43,
    "entity": "nada cella",
    "discover_score": 1.0637955698723884,
    "score_1h": 0.847457627118644,
    "score_4h": 0.18487394957983194,
    "score_7d": 3.757396449704142,
    "extracted_entities": "Nada Cella - Omicidio - Chiavari - Indagine",
    "saturation_score": 219.0
  },
  {
    "rank": 17,
    "entity": "holger rune",
    "discover_score": 1.0580247195579715,
    "score_1h": 5.146551724137931,
    "score_4h": 1.411764705882353,
    "score_7d": 2.8579881656804735,
    "extracted_entities": "Holger Rune - Tennis - Giocatore - ATP - Danimarca",
    "saturation_score": 4.0
  },
  {
    "rank": 7,
    "entity": "spotify down",
    "discover_score": 0.9982834103751247,
    "score_1h": 35.637931034482754,
    "score_4h": 8.747899159663866,
    "score_7d": 0.576923076923077,
    "extracted_entities": "Spotify - Down - Problemi di connessione - Servizio interrotto - Piattaforma streaming",
    "saturation_score": 3.0
  },
  {
    "rank": 20,
    "entity": "luciano darderi",
    "discover_score": 0.9022231294968984,
    "score_1h": 11.706896551724137,
    "score_4h": 8.027794381350867,
    "score_7d": 0.8461538461538461,
    "extracted_entities": "Luciano Darderi - Tennis - Giocatore",
    "saturation_score": 10.0
  },
  {
    "rank": 21,
    "entity": "gianni sperti",
    "discover_score": 0.7879229389072279,
    "score_1h": 9.163793103448276,
    "score_4h": 2.5357142857142856,
    "score_7d": 1.804733727810651,
    "extracted_entities": "Gianni Sperti - Personaggio televisivo - Opinionista - Italia",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "daniela santanchè",
    "discover_score": 0.7142331911943435,
    "score_1h": 0.6551724137931034,
    "score_4h": 1.1218487394957983,
    "score_7d": 1.7514792899408282,
    "extracted_entities": "Daniela Santanchè - Politica Italiana - Governo Italiano",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "botic van de zandschulp",
    "discover_score": 0.694091318306525,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.4747899159663866,
    "score_7d": 2.165680473372781,
    "extracted_entities": "Botic van de Zandschulp - Tennis - Giocatore - Olanda",
    "saturation_score": 4.0
  },
  {
    "rank": 23,
    "entity": "dove vedere inter bayern",
    "discover_score": 0.6318714943283809,
    "score_1h": 3.103448275862069,
    "score_4h": 2.5987394957983194,
    "score_7d": 1.2958579881656807,
    "extracted_entities": "Inter - Bayern - Partita - Diretta TV - Streaming",
    "saturation_score": 27.0
  },
  {
    "rank": 25,
    "entity": "warriors - grizzlies",
    "discover_score": 0.5127352505912451,
    "score_1h": 0.0,
    "score_4h": 0.13856756091557962,
    "score_7d": 1.5532544378698225,
    "extracted_entities": "Warriors - Grizzlies - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 8,
    "entity": "cina aerei boeing",
    "discover_score": 0.4811363006744577,
    "score_1h": 1.3256867329047342,
    "score_4h": 1.199579831932773,
    "score_7d": 0.8668639053254439,
    "extracted_entities": "Cina - Aerei - Boeing",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "ranucci",
    "discover_score": 0.4771673290908699,
    "score_1h": 0.0,
    "score_4h": 0.2773109243697479,
    "score_7d": 1.4319526627218935,
    "extracted_entities": "Ranucci - Persone - Giornalismo",
    "saturation_score": 37.0
  },
  {
    "rank": 11,
    "entity": "piero pelù",
    "discover_score": 0.46274079102030613,
    "score_1h": 0.0,
    "score_4h": 0.9245279701838895,
    "score_7d": 0.955621301775148,
    "extracted_entities": "Piero Pelù - Musica - Cantante - Litfiba - Rock italiano",
    "saturation_score": 50.0
  },
  {
    "rank": 15,
    "entity": "don ciro panigara",
    "discover_score": 0.4327558482848637,
    "score_1h": 0.0,
    "score_4h": 0.7270841390949685,
    "score_7d": 0.9792899408284024,
    "extracted_entities": "Don Ciro Panigara",
    "saturation_score": 45.0
  },
  {
    "rank": 49,
    "entity": "magic - hawks",
    "discover_score": 0.4202267898062081,
    "score_1h": 0.0,
    "score_4h": 0.11554621848739496,
    "score_7d": 1.3727810650887573,
    "extracted_entities": "Magic - Hawks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 19,
    "entity": "ben shelton",
    "discover_score": 0.4198068762441765,
    "score_1h": 1.2068965517241381,
    "score_4h": 0.4012605042016807,
    "score_7d": 1.0739644970414202,
    "extracted_entities": "Ben Shelton - Tennis - Giocatore",
    "saturation_score": 4.0
  },
  {
    "rank": 37,
    "entity": "fuochi d artificio trama",
    "discover_score": 0.35543608325041454,
    "score_1h": 0.7413793103448276,
    "score_4h": 0.453781512605042,
    "score_7d": 0.9526627218934911,
    "extracted_entities": "Fuochi d'artificio - Trama - Film - Storia",
    "saturation_score": 7.0
  },
  {
    "rank": 16,
    "entity": "new yorker",
    "discover_score": 0.3322913143993101,
    "score_1h": 0.31896551724137934,
    "score_4h": 0.726890756302521,
    "score_7d": 0.6390532544378699,
    "extracted_entities": "New Yorker - Rivista - Cultura - Giornalismo - Stati Uniti",
    "saturation_score": 1.0
  },
  {
    "rank": 38,
    "entity": "terremoto in tempo reale",
    "discover_score": 0.2494248932059791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.6390532544378699,
    "extracted_entities": "Terremoto - Tempo reale - Monitoraggio - Allerta - Sismologia",
    "saturation_score": -1.0
  },
  {
    "rank": 12,
    "entity": "stoccarda open",
    "discover_score": 0.23773213074383973,
    "score_1h": 1.0258620689655171,
    "score_4h": 1.6176470588235294,
    "score_7d": 0.07988165680473373,
    "extracted_entities": "Stoccarda - Open - Tennis - Torneo - Germania",
    "saturation_score": 2.0
  },
  {
    "rank": 39,
    "entity": "fratelli mattei",
    "discover_score": 0.19562612502203386,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.7794117647058824,
    "score_7d": 0.21301775147928992,
    "extracted_entities": "Fratelli Mattei - Persone - Famiglia",
    "saturation_score": 89.0
  },
  {
    "rank": 28,
    "entity": "magdalena fręch",
    "discover_score": 0.19467908727726554,
    "score_1h": 0.0,
    "score_4h": 0.23529411764705882,
    "score_7d": 0.3106508875739645,
    "extracted_entities": "Magdalena Fręch - Tennis - Giocatrice - Polonia",
    "saturation_score": -1.0
  },
  {
    "rank": 22,
    "entity": "mirra andreeva",
    "discover_score": 0.17349994699754342,
    "score_1h": 0.0,
    "score_4h": 0.36764705882352944,
    "score_7d": 0.17159763313609466,
    "extracted_entities": "Mirra Andreeva - Tennis - Giocatrice",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "boupendza",
    "discover_score": 0.14466837400988702,
    "score_1h": 1.303039158386908,
    "score_4h": 0.5105042016806722,
    "score_7d": 0.008875739644970414,
    "extracted_entities": "Boupendza - Calciatore - Gabon - Hatayspor - Super Lig",
    "saturation_score": 10.0
  },
  {
    "rank": 26,
    "entity": "joao pedro",
    "discover_score": 0.12057057342178312,
    "score_1h": 0.0,
    "score_4h": 0.2683713652825147,
    "score_7d": 0.0029585798816568047,
    "extracted_entities": "Joao Pedro - Calciatore - Brasile - Serie A - Nazionale Italiana",
    "saturation_score": 3.0
  },
  {
    "rank": 36,
    "entity": "nuria brancaccio",
    "discover_score": 0.11331633263083818,
    "score_1h": 1.3448275862068966,
    "score_4h": 0.22058823529411764,
    "score_7d": 0.0,
    "extracted_entities": "Nuria Brancaccio",
    "saturation_score": 4.0
  },
  {
    "rank": 51,
    "entity": "allerta vento",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "pbks vs kkr",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "mkhitaryan",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "elezioni comunali monfalcone",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "topo gigio",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "davide barzan",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "eurojackpot",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "tassi bce",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "taobao",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "chris martin",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "ascolti tv dati auditel ieri",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "child care",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "buon mercoledì 16 aprile",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "paolini oggi",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "il turco",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "enrico brignano",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "meloni",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "uefa",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "ozempic",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "sorrento avellino",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "un giorno in pretura",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "szczesny",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "dortmund – barcelone",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "luca barbarossa",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "antonella fiordelisi",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "alessandra amoroso",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "la sicilia",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "bernarda pera",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "gene hackman",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "ragusa news",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "strettoweb",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "livorno",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "ucl",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "الطقس",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "the elder scrolls iv oblivion",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "3bmeteo",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "camilla rosatello",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "axios",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "tempostretto",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "zambrotta gambe",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "eva lys",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "paola barale",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "meteo verona",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "bersani",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "lahore qalandars vs karachi kings",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "birmingham",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "daniele de santis",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "barzan",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "il turco serie",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "danilo bertazzi",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "diego della valle",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "jane fonda",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "ethan quinn",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "ezio mauro",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "reggiana - málaga",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "trani",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "unica",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "allerta meteo sardegna",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "bagnoli",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "presencias film",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "il giardiniere netflix",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "barcelona vs",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "silvia salis",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "paola cortellesi",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "الطقس غدًا",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "palagano",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "antonio albanese",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "pag",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "michele bravi",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "paolo fox oroscopo 16 aprile 2025",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "mauro corona",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "briatore",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "ansa",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "utrecht",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "carla signoris",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "groenlandia",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "flavio briatore",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "hakimi",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "uova alla jova",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "rocco casalino",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "balestrate",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "mirna mastronardi",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "jennifer lopez",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "wind warning",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "champions league classifica",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "asensio",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "in",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "etna",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "elly schlein",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "marquinhos",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "bianca berlinguer",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "ultime notizie",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "meteo trento",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "colosseo",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "partite stasera",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "buongiorno buon mercoledì 16 aprile",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "marco liorni",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "mission impossible",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "nba playoff",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "nicholas kohl",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "gardaland",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "rashford",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "paris aston villa",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "gazzetta del sud",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "nuno mendes",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "harry potter",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "koora",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "fabio capello",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "paris",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "gerard martín",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "umberto tozzi",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "ing",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "enrico mattei",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "berlusconi",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "stefano massini",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "antonella elia",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "obama",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "tarjeta roja",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "il vibonese",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "achraf hakimi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "cosenza",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "jana fett",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "alessandro covi",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "jule niemeier",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "xavier bartlett",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "alycia parks",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "dedura-palomero, diego",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "laura siegemund",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "francesco sarcina",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "snai",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "igli tare",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "emma navarro",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-16 13:10:33",
  "trends_count": 185,
  "top_score": 17.963031473135196,
  "runtime_minutes": 8.86542870203654,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nelle \"Profezie di Oggi\" emergono temi di ampio respiro: il calcio continua a essere il campo verde delle conversazioni collettive, spaziando dai singoli match come \"real madrid arsenal\" e \"psg\", fino all’intrigante storyline della \"champions league\". Parallelamente, il mondo dello spettacolo e delle festività si eleva in tono con eventi culturali e religiosi, dall’intramontabile \"Pasqua\" alle icone mediatiche come \"johnny depp\".\n\nDelle opportunità per Google Discover, il motore dell'innovazione pulsa grazie all’entità \"nvidia\", un argomento la cui potenza viene accresciuta dal trend emergente in 1h e da una saturazione moderata (213), rendendo il suo DScore di 7.6 un faro per i creatori di contenuti tecnologici (#5). Altrove, \"msc\", forte di un DScore di 6.8 e basso Sat (193), invita ad avventure marittime (#7).\n\nMa attenzione, viaggiatori digitali! Con la saturazione che avvolge \"psg\" (Sat 1.310), è un terreno affollato dove la concorrenza imperversa. E chi si avventura tra gli spazi di \"pasqua\", rischia di perdersi nella foresta folta della saturazione (Sat 3.580) (#1).\n\nIl consiglio è semplice: esplorate temi tecnologici e sportivi con cautela, avendo cura di evitare le aree sovraffollate. Scegliete destinazioni di nicchia per il vostro viaggio di scoperta."
};
