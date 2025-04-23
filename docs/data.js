const trendData = [
  {
    "rank": 22,
    "entity": "meteo torino",
    "discover_score": 14.124001681313889,
    "score_1h": 5.612068965517241,
    "score_4h": 17.189031679617454,
    "score_7d": 28.281065088757398,
    "extracted_entities": "Meteo - Torino - Previsioni",
    "saturation_score": 6.0
  },
  {
    "rank": 4,
    "entity": "terremoto istanbul",
    "discover_score": 6.019124059079547,
    "score_1h": 51.19038573933372,
    "score_4h": 43.09243697478992,
    "score_7d": 2.4792899408284024,
    "extracted_entities": "Terremoto - Istanbul - Evento sismico",
    "saturation_score": 10.0
  },
  {
    "rank": 12,
    "entity": "istanbul",
    "discover_score": 5.352365164619981,
    "score_1h": 56.28448275862069,
    "score_4h": 35.819327731092436,
    "score_7d": 4.671597633136095,
    "extracted_entities": "Istanbul - Turchia - Città - Turismo - Cultura",
    "saturation_score": 686.0
  },
  {
    "rank": 45,
    "entity": "tennis madrid",
    "discover_score": 4.6021090212284,
    "score_1h": 3.103448275862069,
    "score_4h": 1.9159663865546217,
    "score_7d": 14.227810650887573,
    "extracted_entities": "Tennis - Madrid - Torneo - ATP - WTA",
    "saturation_score": 7.0
  },
  {
    "rank": 42,
    "entity": "ostuni",
    "discover_score": 3.9749684030594934,
    "score_1h": 10.724137931034482,
    "score_4h": 4.166115818712422,
    "score_7d": 11.692307692307692,
    "extracted_entities": "Ostuni - Puglia - Turismo - Città - Italia",
    "saturation_score": 122.0
  },
  {
    "rank": 7,
    "entity": "sophie nyweide",
    "discover_score": 3.8997515462809007,
    "score_1h": 1.2033898305084745,
    "score_4h": 4.159663865546219,
    "score_7d": 7.846153846153847,
    "extracted_entities": "Sophie Nyweide - Attrice - Film - Carriera",
    "saturation_score": 212.0
  },
  {
    "rank": 14,
    "entity": "dazn",
    "discover_score": 3.3582564309559992,
    "score_1h": 25.310344827586206,
    "score_4h": 10.913865546218489,
    "score_7d": 6.245562130177515,
    "extracted_entities": "DAZN - Streaming - Sport",
    "saturation_score": 211.0
  },
  {
    "rank": 9,
    "entity": "freccia vallone 2025",
    "discover_score": 3.1494541346462626,
    "score_1h": 12.612068965517242,
    "score_4h": 15.865546218487395,
    "score_7d": 3.952662721893491,
    "extracted_entities": "Freccia Vallone - 2025 - Ciclismo - Gara - Belgio",
    "saturation_score": 47.0
  },
  {
    "rank": 3,
    "entity": "cagliari - fiorentina",
    "discover_score": 2.5548794962337085,
    "score_1h": 40.96551724137931,
    "score_4h": 10.544117647058822,
    "score_7d": 2.6568047337278107,
    "extracted_entities": "Cagliari - Fiorentina - Partita di calcio - Serie A - Squadre di calcio",
    "saturation_score": 209.0
  },
  {
    "rank": 1,
    "entity": "parma - juventus",
    "discover_score": 2.5354802923972866,
    "score_1h": 39.26724137931035,
    "score_4h": 9.544117647058824,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Parma - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 296.0
  },
  {
    "rank": 2,
    "entity": "genoa - lazio",
    "discover_score": 2.4394518799367377,
    "score_1h": 35.603448275862064,
    "score_4h": 9.655462184873949,
    "score_7d": 2.2514792899408285,
    "extracted_entities": "Genoa - Lazio - Serie A - Partita di calcio - Squadre di calcio",
    "saturation_score": 326.0
  },
  {
    "rank": 5,
    "entity": "barcellona - mallorca",
    "discover_score": 2.223125312671874,
    "score_1h": 0.02586206896551724,
    "score_4h": 0.6239495798319328,
    "score_7d": 4.940828402366863,
    "extracted_entities": "Barcellona - Mallorca - Viaggio - Turismo - Spagna",
    "saturation_score": 2.0
  },
  {
    "rank": 20,
    "entity": "expedition 33",
    "discover_score": 1.8143051369106191,
    "score_1h": 1.0862068965517242,
    "score_4h": 6.029411764705882,
    "score_7d": 3.9822485207100593,
    "extracted_entities": "Expedition 33 - Stazione Spaziale Internazionale - NASA - Equipaggio - Missione spaziale",
    "saturation_score": 58.0
  },
  {
    "rank": 8,
    "entity": "torino - udinese",
    "discover_score": 1.7302476089809058,
    "score_1h": 27.39655172413793,
    "score_4h": 8.59453781512605,
    "score_7d": 2.3520710059171597,
    "extracted_entities": "Torino - Udinese - Calcio - Serie A - Partita",
    "saturation_score": 126.0
  },
  {
    "rank": 23,
    "entity": "santo del giorno",
    "discover_score": 1.6482311468625224,
    "score_1h": 0.0,
    "score_4h": 0.3702928870292887,
    "score_7d": 5.13905325443787,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "serie c girone b",
    "discover_score": 1.6006020077997494,
    "score_1h": 5.120689655172414,
    "score_4h": 1.031512605042017,
    "score_7d": 5.257396449704142,
    "extracted_entities": "Serie C - Girone B - Calcio - Campionato - Italia",
    "saturation_score": 9.0
  },
  {
    "rank": 11,
    "entity": "carlos santana",
    "discover_score": 1.3882607659057418,
    "score_1h": 5.474137931034482,
    "score_4h": 10.189937062691186,
    "score_7d": 1.4023668639053255,
    "extracted_entities": "Carlos Santana - Chitarrista - Musica - Rock - Santana (band)",
    "saturation_score": 138.0
  },
  {
    "rank": 37,
    "entity": "nantes - psg",
    "discover_score": 1.3549587129649816,
    "score_1h": 0.0,
    "score_4h": 0.3235294117647059,
    "score_7d": 4.621301775147929,
    "extracted_entities": "Nantes - PSG - Calcio - Partita - Ligue 1",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "btp italia",
    "discover_score": 1.3483526539734758,
    "score_1h": 12.732758620689655,
    "score_4h": 8.609243697478991,
    "score_7d": 1.9733727810650887,
    "extracted_entities": "BTP - Italia - Titoli di Stato - Investimenti",
    "saturation_score": 73.0
  },
  {
    "rank": 21,
    "entity": "srh vs mi",
    "discover_score": 1.3391141328549818,
    "score_1h": 1.293103448275862,
    "score_4h": 3.1428571428571432,
    "score_7d": 3.3846153846153846,
    "extracted_entities": "SRH - MI - Cricket - Indian Premier League - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "kean",
    "discover_score": 1.292167485322604,
    "score_1h": 46.672413793103445,
    "score_4h": 10.235294117647058,
    "score_7d": 0.8668639053254438,
    "extracted_entities": "Moise Kean - Calcio - Juventus - Serie A - Attaccante",
    "saturation_score": 225.0
  },
  {
    "rank": 16,
    "entity": "pàpa francesco",
    "discover_score": 1.2693132100204068,
    "score_1h": 0.6120689655172413,
    "score_4h": 1.3718487394957983,
    "score_7d": 3.4615384615384617,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 32,
    "entity": "manchester city - aston villa",
    "discover_score": 1.1996893619000577,
    "score_1h": 0.0,
    "score_4h": 0.17436974789915968,
    "score_7d": 4.041420118343195,
    "extracted_entities": "Manchester City - Aston Villa - Partita di calcio - Premier League",
    "saturation_score": 34.0
  },
  {
    "rank": 41,
    "entity": "stipendio papa",
    "discover_score": 1.1655474573786302,
    "score_1h": 4.008620689655173,
    "score_4h": 1.0420168067226891,
    "score_7d": 3.8461538461538463,
    "extracted_entities": "Stipendio - Papa - Vaticano",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "federico cinà",
    "discover_score": 0.9728008397858717,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.47466685418937454,
    "score_7d": 2.784023668639053,
    "extracted_entities": "Federico Cinà",
    "saturation_score": 51.0
  },
  {
    "rank": 13,
    "entity": "inter milan dove vederla",
    "discover_score": 0.9703821154314135,
    "score_1h": 12.189655172413794,
    "score_4h": 1.0798319327731092,
    "score_7d": 2.5384615384615383,
    "extracted_entities": "Inter - Milan - Partita - Trasmissione - Calcio",
    "saturation_score": 8.0
  },
  {
    "rank": 39,
    "entity": "lazio genoa",
    "discover_score": 0.9050716405925799,
    "score_1h": 37.189655172413794,
    "score_4h": 3.5357142857142856,
    "score_7d": 2.2189349112426036,
    "extracted_entities": "Lazio - Genoa - Calcio - Serie A - Partita",
    "saturation_score": 3.0
  },
  {
    "rank": 47,
    "entity": "lakers - timberwolves",
    "discover_score": 0.8876803736358798,
    "score_1h": 0.0,
    "score_4h": 0.2584033613445378,
    "score_7d": 3.1449704142011834,
    "extracted_entities": "Lakers - Timberwolves - NBA - Partita - Basket",
    "saturation_score": 3.0
  },
  {
    "rank": 27,
    "entity": "il paradiso delle signore oggi va in onda",
    "discover_score": 0.7429853406458082,
    "score_1h": 0.0,
    "score_4h": 3.607142857142857,
    "score_7d": 1.4763313609467457,
    "extracted_entities": "Il paradiso delle signore - Oggi - Programmazione TV",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "maurizio gucci",
    "discover_score": 0.6777411020094806,
    "score_1h": 0.0,
    "score_4h": 0.2689075630252101,
    "score_7d": 2.3550295857988166,
    "extracted_entities": "Maurizio Gucci - Gucci - Moda - Omicidio - Patrimonio",
    "saturation_score": 89.0
  },
  {
    "rank": 25,
    "entity": "vis pesaro - spal",
    "discover_score": 0.6147620608815301,
    "score_1h": 5.326271186440678,
    "score_4h": 0.9096638655462185,
    "score_7d": 1.7100591715976332,
    "extracted_entities": "Vis Pesaro - SPAL - Partita di calcio - Serie C",
    "saturation_score": 26.0
  },
  {
    "rank": 10,
    "entity": "allerta grandine",
    "discover_score": 0.5327615821921747,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.6953781512605042,
    "score_7d": 1.21301775147929,
    "extracted_entities": "Allerta - Grandine - Meteo - Previsioni",
    "saturation_score": 9.0
  },
  {
    "rank": 17,
    "entity": "don giulio mignani",
    "discover_score": 0.45617179614335873,
    "score_1h": 0.9152542372881356,
    "score_4h": 1.0908635420695476,
    "score_7d": 0.9940828402366864,
    "extracted_entities": "Don Giulio Mignani - Religione - Chiesa Cattolica",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "campobasso - perugia",
    "discover_score": 0.3937211334030905,
    "score_1h": 7.275862068965518,
    "score_4h": 1.3172268907563025,
    "score_7d": 0.8254437869822486,
    "extracted_entities": "Campobasso - Perugia - Città - Confronto",
    "saturation_score": 28.0
  },
  {
    "rank": 24,
    "entity": "james senese",
    "discover_score": 0.3851422141774425,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.14915966386554622,
    "score_7d": 1.0650887573964498,
    "extracted_entities": "James Senese - Musica - Napoli Centrale - Jazz - Italia",
    "saturation_score": 65.0
  },
  {
    "rank": 28,
    "entity": "celta vigo - villarreal",
    "discover_score": 0.3740209147577618,
    "score_1h": 3.8879310344827585,
    "score_4h": 2.189075630252101,
    "score_7d": 0.5266272189349113,
    "extracted_entities": "Celta Vigo - Villarreal - Partita di calcio - La Liga",
    "saturation_score": 6.0
  },
  {
    "rank": 18,
    "entity": "atletico bilbao - las palmas",
    "discover_score": 0.3593501779452275,
    "score_1h": 15.882232612507305,
    "score_4h": 2.216386554621849,
    "score_7d": 0.39349112426035504,
    "extracted_entities": "Athletic Bilbao - Las Palmas - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "morto donato metallo",
    "discover_score": 0.3472170721148464,
    "score_1h": 0.4491525423728814,
    "score_4h": 0.0,
    "score_7d": 1.0857988165680472,
    "extracted_entities": "Donato Metallo - Morte - Notizie",
    "saturation_score": 4.0
  },
  {
    "rank": 26,
    "entity": "legnago - pescara",
    "discover_score": 0.3454324680741443,
    "score_1h": 4.956896551724138,
    "score_4h": 0.8445378151260504,
    "score_7d": 0.742603550295858,
    "extracted_entities": "Legnago - Pescara - Calcio - Partita - Serie C",
    "saturation_score": 8.0
  },
  {
    "rank": 31,
    "entity": "ficulle",
    "discover_score": 0.32896596739540235,
    "score_1h": 9.344827586206897,
    "score_4h": 2.4327731092436977,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "Ficulle - Umbria - Comune - Turismo - Italia",
    "saturation_score": 4.0
  },
  {
    "rank": 35,
    "entity": "arezzo - lucchese",
    "discover_score": 0.3209087301093162,
    "score_1h": 0.8879310344827587,
    "score_4h": 1.161764705882353,
    "score_7d": 0.6153846153846154,
    "extracted_entities": "Arezzo - Lucchese - Calcio - Partita - Serie C",
    "saturation_score": 44.0
  },
  {
    "rank": 34,
    "entity": "sestri levante - ascoli",
    "discover_score": 0.2928514790597274,
    "score_1h": 4.753360607831677,
    "score_4h": 1.4915966386554622,
    "score_7d": 0.41715976331360943,
    "extracted_entities": "Sestri Levante - Ascoli",
    "saturation_score": 47.0
  },
  {
    "rank": 33,
    "entity": "multan sultans vs islamabad united",
    "discover_score": 0.28631871782142576,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5210084033613446,
    "score_7d": 0.6331360946745561,
    "extracted_entities": "Multan Sultans - Islamabad United - Partita di cricket - Pakistan Super League - Squadre di cricket",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "ternana - pianese",
    "discover_score": 0.24809141282504757,
    "score_1h": 4.586499123319696,
    "score_4h": 1.634453781512605,
    "score_7d": 0.19822485207100593,
    "extracted_entities": "Ternana - Pianese - Calcio - Partita - Serie C",
    "saturation_score": 59.0
  },
  {
    "rank": 50,
    "entity": "luigi morato",
    "discover_score": 0.20153440112603913,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.796218487394958,
    "score_7d": 0.257396449704142,
    "extracted_entities": "Luigi Morato",
    "saturation_score": 23.0
  },
  {
    "rank": 44,
    "entity": "potapova",
    "discover_score": 0.1947768310793493,
    "score_1h": 0.0,
    "score_4h": 0.51890756302521,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Potapova - Tennis - Sport - Atleta",
    "saturation_score": 4.0
  },
  {
    "rank": 43,
    "entity": "pontedera - rimini",
    "discover_score": 0.15238752566245645,
    "score_1h": 0.10344827586206896,
    "score_4h": 0.10084033613445378,
    "score_7d": 0.20118343195266272,
    "extracted_entities": "Pontedera - Rimini - Viaggio - Destinazioni",
    "saturation_score": 41.0
  },
  {
    "rank": 36,
    "entity": "nuovo condono cartelle esattoriali",
    "discover_score": 0.14466631701955832,
    "score_1h": 0.8793103448275862,
    "score_4h": 0.2668067226890756,
    "score_7d": 0.11538461538461539,
    "extracted_entities": "Condono - Cartelle esattoriali - Fisco - Debiti - Governo",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "laslo đere",
    "discover_score": 0.12575968693696077,
    "score_1h": 0.0,
    "score_4h": 0.07773109243697479,
    "score_7d": 0.08579881656804735,
    "extracted_entities": "Laslo Đere - Tennista - Serbia",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "anna kalinskaya",
    "discover_score": 0.11884425688135432,
    "score_1h": 0.0,
    "score_4h": 0.16806722689075632,
    "score_7d": 0.047337278106508875,
    "extracted_entities": "Anna Kalinskaya - Tennista - Sport",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "ultima puntata vanessa incontrada",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "ghost of yotei",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "istanbul deprem",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "luisa todini",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "barcelona vs mallorca",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "conegliano",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "clair obscur expedition 33 recensione",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "gianni sperti",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "abhinav manohar",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "giornata mondiale del libro 2025",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "mission",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "marco negri",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "rio ave - sporting",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "pianura padana",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "thunder - grizzlies",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "lamon",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "bonus bollette 2025",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "camila giorgi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "concorso allievi agenti polizia",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "india",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "marco frigo",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "elisa girotto",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "pacers - bucks",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "emma raducanu",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "man city vs aston villa",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "estrazione lotto oggi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "oroscopo oggi paolo fox capricorno",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "acconto irpef",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "tesla",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "belve",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "davide barzan",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "23 aprile",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "weather",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "milena vukotic",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "fuochi d'artificio",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "nba",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "barcelone – majorque",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "pecco bagnaia",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "jovanotti",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "streaming",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "bruno vespa",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "referendum giugno 2025",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "israele",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "i peccatori film",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "madrid atp",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "alianza lima - talleres córdoba",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "etna",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "pantelleria",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "milei",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "robert de niro",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "gewitterwarnung",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "cristiano malgioglio",
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
    "entity": "limone",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "nick pope",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "rai sport diretta",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "antonio pappalardo",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "niccolò fabi",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "emanuela orlandi vaticano",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "laliga",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "luisa ranieri",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "ceccon",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "child care",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "emiliana arango",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "jack ryan",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "christopher o'connell",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "tradingview",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "maria corleone",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "mattia almaviva",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "gucci",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "مان سيتي ضد أستون فيلا",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "gargano",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "pahalgam",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "galatasaray",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "risultati nba",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "tajani",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "jeremy irons",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "luis miguel",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "open madrid",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "the elder scrolls iv oblivion remastered",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "martin wolf",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "conclave dove vederlo",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "nantes vs psg",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "الطقس غدًا",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "cerignola",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "copa libertadores",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "thunderbolts",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "department store",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "santoro",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "brocchi",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "edith bruck",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "valencia espanyol",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "bersani",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "clemente mastella",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "gabi pallavolo",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "livorno",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "veltroni",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "chi puo essere eletto papa",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "ansu fati",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "euroflora 2025",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "boulter",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "daniele adani",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "agnese pini",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "programma tv stasera",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "aeroporto bergamo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "pete sampras",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "corrado augias",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "vecchioni",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "bertone cardinale",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "arcivescovo",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "putin",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "cristina uomini e donne",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "kvitova",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "fc barcelona",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "eurojackpot ultima estrazione",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "23 aprile buongiorno",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "diaco",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "carlo cracco",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "meteo rimini",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "chuck norris",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "giovanni storti",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "massimo franco",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "milei papa francesco",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "cardinale scola",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "benjamin netanyahu",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "ncis",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "lilli gruber",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "la russa",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "pedro pascal",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "konyaspor vs galatasaray",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "liam gallagher",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "buongiorno mercoledi 23 aprile 2025",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "hugh grant",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "saudi pro league",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "this is us",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "financial times",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "sorella papa francesco",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "la verità",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "the last of us streaming",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "andor",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "meteo trentino",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "bitcoin",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "alessandria",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "keira knightley",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "victoria villarruel",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "arango tennis",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "avanti un altro",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-23 16:49:34",
  "trends_count": 199,
  "top_score": 14.124001681313889,
  "runtime_minutes": 4.686903862158458,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le sfere delle tendenze odierne rivelano due tematiche principali: i fenomeni meteorologici e gli eventi calcistici. Il meteo, con \"meteo torino\" al vertice, cattura continuamente l'attenzione, suggerendo un'umanità sempre in cerca di previsioni sicure. Dall'altra parte, il campo calcistico fiorisce con una miriade di partite e squadre in lotta, riflettendo la sete di vittorie e di emozioni che solo il pallone sa regalare.\n\nIn questo panorama di trend, \"terremoto istanbul\" emerge come un'opportunità unica su Google Discover (#2). Il suo DScore notevole e l'interesse recente, accompagnato da una saturazione sorprendentemente bassa, suggeriscono che c'è spazio per contenuti di approfondimento. La competizione bassa rende \"freccia vallone 2025\" (#8) un altro promettente campo di gioco per chi ha il coraggio di esplorare storie di ciclismo futuro.\n\nTuttavia, il mondo del calcio presenta pericoli con la sua altissima saturazione. Partite come \"parma - juventus\" (#10) e \"genoa - lazio\" (#11) richiedono cautela; il rischio di scomparire tra contenuti identici è reale.\n\nLa profezia per i creatori di contenuti? Siate originali nelle vostre narrazioni e cercate quegli angoli nascosti dove la luce non è ancora accesa."
};
