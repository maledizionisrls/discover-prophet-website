const trendData = [
  {
    "rank": 12,
    "entity": "ora",
    "discover_score": 24.615354170990276,
    "score_1h": 80.58620689655172,
    "score_4h": 49.523109243697476,
    "score_7d": 14.00887573964497,
    "extracted_entities": "Tempo - Orologio - Fuso orario - Ora legale - Sincronizzazione"
  },
  {
    "rank": 2,
    "entity": "lecce - roma",
    "discover_score": 17.816783796181166,
    "score_1h": 60.01431911163063,
    "score_4h": 42.64285714285714,
    "score_7d": 2.3550295857988166,
    "extracted_entities": "Lecce - Roma - Calcio - Serie A - Partita"
  },
  {
    "rank": 3,
    "entity": "real madrid - leganés",
    "discover_score": 11.56540929664378,
    "score_1h": 15.75,
    "score_4h": 25.182773109243698,
    "score_7d": 3.606508875739645,
    "extracted_entities": "Real Madrid - Leganés - Partita di calcio - La Liga"
  },
  {
    "rank": 7,
    "entity": "eliminato amici",
    "discover_score": 11.33123913159656,
    "score_1h": 39.85344827586207,
    "score_4h": 36.75,
    "score_7d": 2.890532544378698,
    "extracted_entities": "Eliminato - Amici - Programma TV"
  },
  {
    "rank": 29,
    "entity": "eid",
    "discover_score": 7.749704384913427,
    "score_1h": 63.63793103448276,
    "score_4h": 25.92436974789916,
    "score_7d": 6.112426035502959,
    "extracted_entities": "Eid - Festa religiosa - Islam - Celebrazione - Musulmani"
  },
  {
    "rank": 1,
    "entity": "juventus - genoa",
    "discover_score": 7.693271607626532,
    "score_1h": 37.3448275862069,
    "score_4h": 11.275210084033613,
    "score_7d": 2.4822485207100593,
    "extracted_entities": "Juventus - Genoa - Partita di calcio - Serie A"
  },
  {
    "rank": 33,
    "entity": "allerta vento",
    "discover_score": 7.240969672624692,
    "score_1h": 13.437901811805961,
    "score_4h": 17.611344537815125,
    "score_7d": 9.834319526627219,
    "extracted_entities": "Allerta - Vento - Meteo - Previsioni"
  },
  {
    "rank": 6,
    "entity": "eid mubarak",
    "discover_score": 6.134788306893379,
    "score_1h": 31.29324956165985,
    "score_4h": 15.628924791673992,
    "score_7d": 3.4467455621301775,
    "extracted_entities": "Eid Mubarak - Festa religiosa - Islam - Celebrazione - Musulmani"
  },
  {
    "rank": 17,
    "entity": "buona domenica 30 marzo",
    "discover_score": 3.671833698283013,
    "score_1h": 0.3660140268848626,
    "score_4h": 15.126050420168067,
    "score_7d": 1.831360946745562,
    "extracted_entities": "Buona domenica - 30 marzo - Saluti"
  },
  {
    "rank": 22,
    "entity": "milan napoli",
    "discover_score": 3.127414648171852,
    "score_1h": 20.008620689655174,
    "score_4h": 9.359243697478991,
    "score_7d": 3.665680473372781,
    "extracted_entities": "Milan - Napoli - Calcio - Serie A - Partita"
  },
  {
    "rank": 35,
    "entity": "venaria reale",
    "discover_score": 1.8929569038925274,
    "score_1h": 7.304354178842782,
    "score_4h": 0.8382352941176471,
    "score_7d": 6.476331360946745,
    "extracted_entities": "Venaria Reale - Piemonte - Residenza Sabauda - Turismo - Patrimonio UNESCO"
  },
  {
    "rank": 46,
    "entity": "groenlandia trump",
    "discover_score": 1.8459683086899847,
    "score_1h": 3.6206896551724137,
    "score_4h": 1.7331932773109244,
    "score_7d": 6.008875739644971,
    "extracted_entities": "Groenlandia - Donald Trump - Acquisto territorio"
  },
  {
    "rank": 41,
    "entity": "frascati",
    "discover_score": 1.694683154504879,
    "score_1h": 2.1982758620689657,
    "score_4h": 2.869747899159664,
    "score_7d": 4.455621301775148,
    "extracted_entities": "Frascati - Città - Lazio - Vini - Turismo"
  },
  {
    "rank": 9,
    "entity": "nuove regole passaporto",
    "discover_score": 1.55679141238167,
    "score_1h": 2.3604617182933954,
    "score_4h": 0.7226890756302522,
    "score_7d": 3.828402366863905,
    "extracted_entities": "Passaporto - Regole - Aggiornamenti"
  },
  {
    "rank": 32,
    "entity": "estrazioni lotto 10elotto superenalotto",
    "discover_score": 1.5418383431334184,
    "score_1h": 1.0257159555815312,
    "score_4h": 0.9579831932773109,
    "score_7d": 5.050295857988166,
    "extracted_entities": "Estrazioni - Lotto - 10eLotto - SuperEnalotto"
  },
  {
    "rank": 47,
    "entity": "cipro",
    "discover_score": 1.4973624922839648,
    "score_1h": 7.565458796025716,
    "score_4h": 1.5483193277310925,
    "score_7d": 4.878698224852071,
    "extracted_entities": "Cipro - Isola - Mediterraneo - Nicosia - Turismo"
  },
  {
    "rank": 4,
    "entity": "venezia - bologna",
    "discover_score": 1.4772817212928282,
    "score_1h": 1.3620689655172413,
    "score_4h": 2.0731338560528814,
    "score_7d": 1.9585798816568047,
    "extracted_entities": "Venezia - Bologna - Viaggio - Turismo - Trasporti"
  },
  {
    "rank": 18,
    "entity": "tim poste italiane",
    "discover_score": 1.1149822262463296,
    "score_1h": 2.2419637638807717,
    "score_4h": 0.865546218487395,
    "score_7d": 3.094674556213018,
    "extracted_entities": "TIM - Poste Italiane - Telecomunicazioni - Servizi Postali"
  },
  {
    "rank": 5,
    "entity": "intelligenza artificiale su whatsapp",
    "discover_score": 1.1104127619942963,
    "score_1h": 4.594827586206897,
    "score_4h": 1.050420168067227,
    "score_7d": 1.967455621301775,
    "extracted_entities": "Intelligenza artificiale - WhatsApp - Tecnologia"
  },
  {
    "rank": 48,
    "entity": "aryna sabalenka",
    "discover_score": 1.028147663666584,
    "score_1h": 1.603448275862069,
    "score_4h": 0.2605042016806723,
    "score_7d": 4.047337278106509,
    "extracted_entities": "Aryna Sabalenka - Tennis - WTA - Bielorussia - Classifiche"
  },
  {
    "rank": 8,
    "entity": "sampdoria - frosinone",
    "discover_score": 0.9865265733431441,
    "score_1h": 0.6206896551724138,
    "score_4h": 0.6596638655462185,
    "score_7d": 2.2426035502958577,
    "extracted_entities": "Sampdoria - Frosinone - Partita di calcio - Serie B - Campionato italiano"
  },
  {
    "rank": 19,
    "entity": "pucci malore",
    "discover_score": 0.8804871645704575,
    "score_1h": 0.9913793103448275,
    "score_4h": 0.4201680672268907,
    "score_7d": 2.668639053254438,
    "extracted_entities": "Pucci - Malore - Salute"
  },
  {
    "rank": 25,
    "entity": "cesare prandelli",
    "discover_score": 0.8346007616279076,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.44957983193277307,
    "score_7d": 2.6568047337278107,
    "extracted_entities": "Cesare Prandelli - Allenatore di calcio - Italia - Fiorentina - Nazionale italiana di calcio"
  },
  {
    "rank": 13,
    "entity": "grizzlies - lakers",
    "discover_score": 0.7744248076244775,
    "score_1h": 3.8347457627118646,
    "score_4h": 0.7542016806722689,
    "score_7d": 1.8284023668639056,
    "extracted_entities": "Grizzlies - Lakers - NBA - Partita - Basket"
  },
  {
    "rank": 11,
    "entity": "como empoli",
    "discover_score": 0.7667464972315794,
    "score_1h": 4.517241379310345,
    "score_4h": 0.8046218487394958,
    "score_7d": 1.6775147928994083,
    "extracted_entities": "Como - Empoli - Calcio - Serie B"
  },
  {
    "rank": 10,
    "entity": "st-étienne - psg",
    "discover_score": 0.7498153384701699,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.19117647058823528,
    "score_7d": 2.014792899408284,
    "extracted_entities": "St-Étienne - PSG - Calcio - Ligue 1 - Partita"
  },
  {
    "rank": 23,
    "entity": "inter miami - philadelphia union",
    "discover_score": 0.6406054251905176,
    "score_1h": 0.5431034482758621,
    "score_4h": 0.35714285714285715,
    "score_7d": 1.9349112426035502,
    "extracted_entities": "Inter Miami - Philadelphia Union - Partita di calcio - Major League Soccer"
  },
  {
    "rank": 43,
    "entity": "bayern monaco - fc st. pauli",
    "discover_score": 0.6380079108393477,
    "score_1h": 0.0,
    "score_4h": 0.06092436974789916,
    "score_7d": 2.467455621301775,
    "extracted_entities": "Bayern Monaco - FC St. Pauli - Calcio - Partita - Bundesliga"
  },
  {
    "rank": 16,
    "entity": "sassuolo reggiana",
    "discover_score": 0.6169735692882624,
    "score_1h": 1.3620689655172413,
    "score_4h": 0.6365546218487395,
    "score_7d": 1.470414201183432,
    "extracted_entities": "Sassuolo - Reggiana - Calcio - Derby - Serie B"
  },
  {
    "rank": 36,
    "entity": "cremonese - cittadella",
    "discover_score": 0.6091443603776454,
    "score_1h": 0.0,
    "score_4h": 0.3676470588235294,
    "score_7d": 2.0118343195266273,
    "extracted_entities": "Cremonese - Cittadella - Partita di calcio - Serie B"
  },
  {
    "rank": 42,
    "entity": "pamela prati",
    "discover_score": 0.5544374970178462,
    "score_1h": 2.3275862068965516,
    "score_4h": 0.4516806722689075,
    "score_7d": 1.7751479289940828,
    "extracted_entities": "Pamela Prati - Personaggio pubblico - Showgirl - Televisione - Italia"
  },
  {
    "rank": 30,
    "entity": "cagliari monza",
    "discover_score": 0.5508966104383793,
    "score_1h": 9.120689655172413,
    "score_4h": 1.6218487394957983,
    "score_7d": 0.8017751479289942,
    "extracted_entities": "Cagliari - Monza - Calcio - Serie A - Partita"
  },
  {
    "rank": 24,
    "entity": "yildiz",
    "discover_score": 0.5403123195988859,
    "score_1h": 0.3275862068965517,
    "score_4h": 0.0,
    "score_7d": 1.8284023668639053,
    "extracted_entities": "Yildiz"
  },
  {
    "rank": 50,
    "entity": "modena - catanzaro",
    "discover_score": 0.5230819373299519,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.4474789915966386,
    "score_7d": 1.7071005917159763,
    "extracted_entities": "Modena - Catanzaro - Città - Italia"
  },
  {
    "rank": 14,
    "entity": "espanyol - atlético madrid",
    "discover_score": 0.5108804266968888,
    "score_1h": 0.0,
    "score_4h": 0.1092436974789916,
    "score_7d": 1.4142011834319526,
    "extracted_entities": "Espanyol - Atlético Madrid - Partita di calcio - La Liga"
  },
  {
    "rank": 26,
    "entity": "solo leveling season 3",
    "discover_score": 0.49430620759763283,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13025210084033614,
    "score_7d": 1.5680473372781063,
    "extracted_entities": "Solo Leveling - Season 3 - Webtoon - Manhwa - Fantasy"
  },
  {
    "rank": 45,
    "entity": "cosenza - pisa",
    "discover_score": 0.49242662637708595,
    "score_1h": 0.0,
    "score_4h": 0.5945378151260504,
    "score_7d": 1.4112426035502958,
    "extracted_entities": "Cosenza - Pisa - Calcio - Serie B - Partita"
  },
  {
    "rank": 34,
    "entity": "bulls - mavericks",
    "discover_score": 0.4801513013649193,
    "score_1h": 0.0,
    "score_4h": 0.12815126050420167,
    "score_7d": 1.6094674556213018,
    "extracted_entities": "Chicago Bulls - Dallas Mavericks - NBA - Partita di basket - Squadre di basket"
  },
  {
    "rank": 20,
    "entity": "emanuel lo",
    "discover_score": 0.4521606013161401,
    "score_1h": 0.0,
    "score_4h": 0.7331932773109243,
    "score_7d": 0.863905325443787,
    "extracted_entities": "Emanuel Lo - Persone - Intrattenimento"
  },
  {
    "rank": 27,
    "entity": "fiorentina atalanta",
    "discover_score": 0.4487960039452885,
    "score_1h": 2.4913793103448274,
    "score_4h": 0.865546218487395,
    "score_7d": 0.8520710059171597,
    "extracted_entities": "Fiorentina - Atalanta - Calcio - Serie A"
  },
  {
    "rank": 49,
    "entity": "enzo bearzot",
    "discover_score": 0.44360001822638967,
    "score_1h": 1.6724137931034482,
    "score_4h": 0.23529411764705882,
    "score_7d": 1.4881656804733727,
    "extracted_entities": "Enzo Bearzot - Calcio - Allenatore - Nazionale Italiana - Mondiali 1982"
  },
  {
    "rank": 21,
    "entity": "carlo calenda giorgia meloni",
    "discover_score": 0.3966718728275761,
    "score_1h": 0.8448275862068966,
    "score_4h": 2.0630252100840334,
    "score_7d": 0.029585798816568046,
    "extracted_entities": "Carlo Calenda - Giorgia Meloni - Politica Italiana"
  },
  {
    "rank": 38,
    "entity": "sbk oggi",
    "discover_score": 0.3617806993977189,
    "score_1h": 0.0,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.757396449704142,
    "extracted_entities": "SBK - Superbike - Oggi - Corse - Campionato"
  },
  {
    "rank": 28,
    "entity": "gullit",
    "discover_score": 0.3416486272290184,
    "score_1h": 0.0,
    "score_4h": 0.15336134453781514,
    "score_7d": 0.9082840236686391,
    "extracted_entities": "Ruud Gullit - Calcio - Olanda - Milan - Pallone d'Oro"
  },
  {
    "rank": 40,
    "entity": "darderi",
    "discover_score": 0.3099474103358801,
    "score_1h": 2.0258620689655173,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.5710059171597633,
    "extracted_entities": "Darderi - Tennis - Giocatore"
  },
  {
    "rank": 39,
    "entity": "sprint motogp",
    "discover_score": 0.2716149096257188,
    "score_1h": 2.9310344827586206,
    "score_4h": 0.16596638655462184,
    "score_7d": 0.6449704142011834,
    "extracted_entities": "Sprint - MotoGP - Gara"
  },
  {
    "rank": 31,
    "entity": "rosanna fratello",
    "discover_score": 0.24254856752940165,
    "score_1h": 0.5677966101694916,
    "score_4h": 0.6743697478991597,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Rosanna Fratello - Cantante - Musica Italiana"
  },
  {
    "rank": 44,
    "entity": "ciro ricci mare fuori",
    "discover_score": 0.2161572177000867,
    "score_1h": 0.0,
    "score_4h": 0.51890756302521,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Ciro Ricci - Mare Fuori - Serie TV"
  },
  {
    "rank": 15,
    "entity": "ludmilla radchenko",
    "discover_score": 0.17963190158739042,
    "score_1h": 1.043103448275862,
    "score_4h": 0.15546218487394958,
    "score_7d": 0.10355029585798817,
    "extracted_entities": "Ludmilla Radchenko - Artista - Modella - Televisione"
  },
  {
    "rank": 37,
    "entity": "daria kasatkina",
    "discover_score": 0.13815661558677705,
    "score_1h": 0.0603448275862069,
    "score_4h": 0.1638655462184874,
    "score_7d": 0.011834319526627219,
    "extracted_entities": "Daria Kasatkina - Tennis - Atleta"
  },
  {
    "rank": 51,
    "entity": "gand wevelgem 2025",
    "discover_score": 0.11182440623102707,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "wind warning",
    "discover_score": 0.11158214634441663,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "carmen russo",
    "discover_score": 0.11134551834509902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "ema stokholma",
    "discover_score": 0.1111142866360556,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "mauritius",
    "discover_score": 0.11088822966161462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "29 marzo eclissi solare",
    "discover_score": 0.11066713883092397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "casertana - foggia",
    "discover_score": 0.11045081754165122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "dinamo sassari - trapani",
    "discover_score": 0.11023908029299152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "valeria marini",
    "discover_score": 0.1100317518784207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "fa cup",
    "discover_score": 0.10982866664979875,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "elena d'amario",
    "discover_score": 0.10962966784543748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "young sheldon",
    "discover_score": 0.10943460697561855,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "matilde brandi",
    "discover_score": 0.10924334325980511,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "sabalenka",
    "discover_score": 0.10905574311044995,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "spurs - celtics",
    "discover_score": 0.10887167965887609,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "beşiktaş - galatasaray",
    "discover_score": 0.10869103231920811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "barbara spinelli",
    "discover_score": 0.1085136863867719,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "adriana volpe",
    "discover_score": 0.10833953266776583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "laura freddi",
    "discover_score": 0.10816846713734539,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "raffaella amici 2025",
    "discover_score": 0.10800039062356212,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "roma - fiorentina",
    "discover_score": 0.10783520851486146,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "zeitumstellung 2025",
    "discover_score": 0.1076728304890768,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "patrizia pellegrino",
    "discover_score": 0.10751317026206421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "giacomo agostini",
    "discover_score": 0.10735614535430553,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "estrela amadora - sporting",
    "discover_score": 0.10720167687397011,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "mbappe",
    "discover_score": 0.10704968931507133,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "flora tabanelli",
    "discover_score": 0.10690011036948291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "messina - team altamura",
    "discover_score": 0.10675287075169618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "milan futuro",
    "discover_score": 0.10660790403530267,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "crotone - latina",
    "discover_score": 0.10646514650027929,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "prima pagina tuttosport",
    "discover_score": 0.10632453699023645,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "eintracht - stoccarda",
    "discover_score": 0.10618601677886443,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "gt vs mi",
    "discover_score": 0.10604952944488055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "triestina - feralpisalò",
    "discover_score": 0.10591502075484019,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "real sociedad - valladolid",
    "discover_score": 0.10578243855322951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "mara venier",
    "discover_score": 0.10565173265930743,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "la lista dei miei desideri",
    "discover_score": 0.10552285477020852,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "probabili formazioni serie a",
    "discover_score": 0.10539575836985944,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "luca zingaretti",
    "discover_score": 0.10527039864329803,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "odgaard",
    "discover_score": 0.10514673239601775,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "miriam dalmazio",
    "discover_score": 0.10502471797798994,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "clodiense - novara",
    "discover_score": 0.10490431521204421,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "thunder - pacers",
    "discover_score": 0.10478548532631286,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "gianfranco fini",
    "discover_score": 0.10466819089046668,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "cristina parodi",
    "discover_score": 0.10455239575549213,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "maurizio battista",
    "discover_score": 0.10443806499677748,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "pinamonti",
    "discover_score": 0.10432516486029392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "dundee - rangers",
    "discover_score": 0.1042136627116727,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "seven",
    "discover_score": 0.10410352698799526,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "mantova sudtirol",
    "discover_score": 0.10399472715212489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "dustin hoffman",
    "discover_score": 0.10388723364942297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "roberta bruzzone",
    "discover_score": 0.10378101786670191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "barbara foria",
    "discover_score": 0.1036760520932791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "weather",
    "discover_score": 0.1035723094840047,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "bayern monaco",
    "discover_score": 0.10346976402414519,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "fulham - crystal palace",
    "discover_score": 0.10336839049601293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "cristiano malgioglio",
    "discover_score": 0.10326816444723902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "anna pettinelli",
    "discover_score": 0.10316906216059425,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "cremonese",
    "discover_score": 0.10307106062526858,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "antonia amici",
    "discover_score": 0.10297413750952632,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "carlo verdone",
    "discover_score": 0.10287827113465892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "mediaset infinity",
    "discover_score": 0.10278344045016281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "tommaso cassissa",
    "discover_score": 0.10268962501007417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "partita juve oggi",
    "discover_score": 0.10259680495039697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "senza cri",
    "discover_score": 0.10250496096756462,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "alavés - rayo vallecano",
    "discover_score": 0.10241407429787938,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "espanyol vs atlético madrid",
    "discover_score": 0.10232412669787708,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "liquidation",
    "discover_score": 0.10223510042556766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "openai",
    "discover_score": 0.102146978222506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "trigno amici",
    "discover_score": 0.10205974329664895,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "patrick vieira",
    "discover_score": 0.10197337930595829,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "fini",
    "discover_score": 0.10188787034271098,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "morti terremoto myanmar",
    "discover_score": 0.10180320091848082,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "frattesi",
    "discover_score": 0.10171935594975741,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "liberoquotidiano",
    "discover_score": 0.10163632074417069,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "e poi si vede",
    "discover_score": 0.10155408098729052,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "letterman",
    "discover_score": 0.10147262272997333,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "the town",
    "discover_score": 0.10139193237622872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "michelle hunziker",
    "discover_score": 0.10131199667158104,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "alcione - pergolettese",
    "discover_score": 0.10123280269190177,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "drusilla foer",
    "discover_score": 0.1011543378326903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "acquisition",
    "discover_score": 0.10107658979878206,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "fortnite",
    "discover_score": 0.10099954659446342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "grève",
    "discover_score": 0.10092319651397456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "trade republic",
    "discover_score": 0.10084752813238243,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "seven film",
    "discover_score": 0.10077253029680652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "giorgio gori",
    "discover_score": 0.10069819211798135,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "classifica di serie b",
    "discover_score": 0.10062450296214058,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "gatti",
    "discover_score": 0.1005514524432079,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "madagascar",
    "discover_score": 0.10047903041528129,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "ryan gosling",
    "discover_score": 0.10040722696539747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "le assaggiatrici",
    "discover_score": 0.10033603240656422,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "ligue 1",
    "discover_score": 0.10026543727104871,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "natasha stefanenko",
    "discover_score": 0.10019543230391097,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "عيد الفطر",
    "discover_score": 0.10012600845677155,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "diretta canale 5",
    "discover_score": 0.10005715688180375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "sandra bullock",
    "discover_score": 0.09998886892594035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "kenan yıldız",
    "discover_score": 0.09992113612528634,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "joao felix",
    "discover_score": 0.09985395019972848,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "todaro",
    "discover_score": 0.09978730304773362,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "foggia calcio",
    "discover_score": 0.09972118674132832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "vira carbone",
    "discover_score": 0.09965559352125167,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "maglia genoa boca",
    "discover_score": 0.0995905157922747,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "sean connery",
    "discover_score": 0.09952594611867945,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "simona cavallari",
    "discover_score": 0.0994618772198912,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "fatima trotta",
    "discover_score": 0.09939830196625789,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "mediaset play",
    "discover_score": 0.09933521337497048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "viterbo",
    "discover_score": 0.09927260460611927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "holland",
    "discover_score": 0.09921046895888021,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "sixers - heat",
    "discover_score": 0.0991487998678265,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "alba",
    "discover_score": 0.09908759089936048,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "paolo villaggio",
    "discover_score": 0.0990268357482612,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "celentano",
    "discover_score": 0.09896652823434314,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "miretti",
    "discover_score": 0.09890666229922199,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "leali",
    "discover_score": 0.0988472320031833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "valentino rossi",
    "discover_score": 0.09878823152215013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "benetton rugby",
    "discover_score": 0.09872965514474617,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "robert downey jr",
    "discover_score": 0.09867149726945039,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "monsanto",
    "discover_score": 0.09861375240184032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "benji e fede",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "giudici amici",
    "discover_score": 0.098499480231532,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "river plate - rosario central",
    "discover_score": 0.09844294245184321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "castello sforzesco",
    "discover_score": 0.09838679672091392,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "boca juniors",
    "discover_score": 0.09833103804133506,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "dan aykroyd",
    "discover_score": 0.0982756615079381,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "un alieno in patria",
    "discover_score": 0.09822066230557329,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "ancelotti real madrid",
    "discover_score": 0.09816603570695347,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "raffaella mitaritonna",
    "discover_score": 0.09811177707056148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "paestum",
    "discover_score": 0.09805788183861917,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "primocanale",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "piero villaggio figlio",
    "discover_score": 0.09795116376389046,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "nicolò amici",
    "discover_score": 0.09789833220677814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "francesca michielin",
    "discover_score": 0.0978458466217977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "daniele silvestri",
    "discover_score": 0.09779370284140003,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "bonus animali domestici",
    "discover_score": 0.09774189677076232,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "الريال ضد ليغانيز",
    "discover_score": 0.09769042438613113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "estonia",
    "discover_score": 0.09763928173321193,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "unipol arena",
    "discover_score": 0.09758846492560365,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "eid 2025",
    "discover_score": 0.09753797014327643,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "romanews",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "ibrahimovic",
    "discover_score": 0.09743793169736248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "halle berry",
    "discover_score": 0.09738838071245375,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "aldo cazzullo",
    "discover_score": 0.09733913710741988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "lazio torino",
    "discover_score": 0.09729019737267972,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "vasco rossi",
    "discover_score": 0.09724155805672677,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "barbara de rossi",
    "discover_score": 0.09719321576487423,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "claudia fusani",
    "discover_score": 0.09714516715803326,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "jacopo sol",
    "discover_score": 0.09709740895152358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "alessia pecchia",
    "discover_score": 0.09704993791391554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "livorno calcio",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "barbra streisand",
    "discover_score": 0.09695584467920225,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "andrea pisani",
    "discover_score": 0.09690921627548794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "allegri allenatore",
    "discover_score": 0.0968628626253454,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "armando izzo",
    "discover_score": 0.09681678074725798,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "roma juve",
    "discover_score": 0.09677096770661728,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "nec - az",
    "discover_score": 0.09672542061475889,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "simona tagli",
    "discover_score": 0.0966801366280226,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "nelson mandela",
    "discover_score": 0.09663511294683641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "300",
    "discover_score": 0.09659034681482327,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "hugh jackman",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "jorge martin",
    "discover_score": 0.09650157638358,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "daniel grassl",
    "discover_score": 0.09645756677984114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "chiara amici",
    "discover_score": 0.09641380411462185,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "sydney sweeney",
    "discover_score": 0.09637028583488115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "daniel craig",
    "discover_score": 0.09632700942586017,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "hazzard",
    "discover_score": 0.09628397241033204,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "rapid bucureşti - universitatea craiova",
    "discover_score": 0.09624117234786977,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "jd",
    "discover_score": 0.09619860683413181,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "penne",
    "discover_score": 0.09615627350016469,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "uma thurman",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "meme",
    "discover_score": 0.09607229406860092,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "kolo muani",
    "discover_score": 0.09603064340399105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "the voice senior 2025",
    "discover_score": 0.09598921578384295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "real",
    "discover_score": 0.09594800900624814,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "michela moioli snowboard",
    "discover_score": 0.09590702090083489,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "ciclismo oggi in tv",
    "discover_score": 0.09586624932817771,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "braga - arouca",
    "discover_score": 0.09582569217922066,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "conceicao",
    "discover_score": 0.09578534737471363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "marsiglia calcio",
    "discover_score": 0.09574521286466178,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "paolo mieli",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "il piccolo",
    "discover_score": 0.09566556667100377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "geolier",
    "discover_score": 0.0956260510289015,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "carmine mare fuori",
    "discover_score": 0.09558673776324564,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "manuel bortuzzo",
    "discover_score": 0.09554762496248463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "marracash",
    "discover_score": 0.09550871074127001,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "bologna fc 1909",
    "discover_score": 0.09546999323998659,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "goa",
    "discover_score": 0.09543147062429341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "will smith",
    "discover_score": 0.0953931410846744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "lol",
    "discover_score": 0.09535500283599914,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "fabio cannavaro",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "angela melillo",
    "discover_score": 0.09527929319031735,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "5g",
    "discover_score": 0.095241718341157,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "cannavaro",
    "discover_score": 0.09520432787781902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "re carlo iii",
    "discover_score": 0.0951671201308383,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "fratelli di crozza",
    "discover_score": 0.09513009345269235,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "trani",
    "discover_score": 0.09509324621742406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "lurago marinone",
    "discover_score": 0.09505657682027245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "ghali",
    "discover_score": 0.0950200836773114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "sondrio",
    "discover_score": 0.09498376522509583,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "pescara arezzo",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "monaco calcio",
    "discover_score": 0.0949116462394545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "ben affleck",
    "discover_score": 0.09487584267846207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "de winter",
    "discover_score": 0.09484020775242427,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "renzi",
    "discover_score": 0.09480473999524712,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "zerbi",
    "discover_score": 0.09476943795934413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "valeria graci",
    "discover_score": 0.09473430021533075,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "madonna",
    "discover_score": 0.09469932535172501,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "khéphren thuram",
    "discover_score": 0.09466451197465411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "vasto",
    "discover_score": 0.09462985870756711,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "moglie brignano",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "bending spoons",
    "discover_score": 0.09456102708206598,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "andrew tate",
    "discover_score": 0.09452684605465266,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "baldanzi",
    "discover_score": 0.09449281979868923,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "valtellina",
    "discover_score": 0.09445894702012068,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "bones",
    "discover_score": 0.09442522644060614,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "lakers",
    "discover_score": 0.09439165679726934,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "scisciano",
    "discover_score": 0.09435823684245379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "giorgia cardinaletti",
    "discover_score": 0.09432496534348277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "aspromonte",
    "discover_score": 0.09429184108242403,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "ishant sharma",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "tanzania",
    "discover_score": 0.09422602947465646,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "bayern",
    "discover_score": 0.09419333976375065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "canale 5",
    "discover_score": 0.09416079256192349,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "emanuela orlandi",
    "discover_score": 0.09412838672159105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "retegui",
    "discover_score": 0.0940961211085941,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "adolescence serie",
    "discover_score": 0.09406399460199255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "monica setta",
    "discover_score": 0.09403200609386386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "algarve",
    "discover_score": 0.09400015448910518,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "nico gonzalez",
    "discover_score": 0.09396843870523919,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "robin minz",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "greta scarano",
    "discover_score": 0.09390541033226459,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "celtic - hearts",
    "discover_score": 0.09387409563963237,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "عيد الفطر في ايطاليا",
    "discover_score": 0.0938429125604821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "unione sportiva lecce",
    "discover_score": 0.09381186007267661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "beşiktaş vs galatasaray",
    "discover_score": 0.09378093716561291,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "todde",
    "discover_score": 0.09375014284005191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "kelly",
    "discover_score": 0.09371947610795114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "luca marini",
    "discover_score": 0.09368893599230055,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "dusan vlahovic",
    "discover_score": 0.09365852152696119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "the last of us",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.0935980657360692,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "adt - alianza lima",
    "discover_score": 0.0935680225311837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "wolfsburg - heidenheim",
    "discover_score": 0.093538101217641,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "mia ceran",
    "discover_score": 0.09350830088133903,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "eid ul fitr 2025 italy",
    "discover_score": 0.09347862061813828,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "catania",
    "discover_score": 0.09344905953371982,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "finale miami 2025",
    "discover_score": 0.09341961674344554,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "santa rosa",
    "discover_score": 0.09339029137222105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "satyanarayana raju",
    "discover_score": 0.0933610825543608,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "valpolicella",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "wta ranking",
    "discover_score": 0.09330301116224317,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "recco",
    "discover_score": 0.09327414690247872,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "mara maionchi",
    "discover_score": 0.09324539582481085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "dan sucu",
    "discover_score": 0.09321675710865725,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "botoșani - farul costanza",
    "discover_score": 0.09318822994208342,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "fc südtirol",
    "discover_score": 0.09315981352168344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "q",
    "discover_score": 0.09313150705246255,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "shahrukh khan",
    "discover_score": 0.09310330974772196,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "carpi gubbio",
    "discover_score": 0.09307522082894545,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "leali genoa",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "claudio lotito",
    "discover_score": 0.09301936507546586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "tuscia",
    "discover_score": 0.09299159672364964,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "diretta it",
    "discover_score": 0.0929639337233575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "nuno tavares",
    "discover_score": 0.09293637533535148,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-30 09:38:48",
  "trends_count": 314,
  "top_score": 24.615354170990276,
  "runtime_minutes": 3.0642566442489625,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
