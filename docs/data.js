const trendData = [
  {
    "rank": 1,
    "entity": "bologna - empoli",
    "discover_score": 12.3985494775607,
    "score_1h": 72.10344827586206,
    "score_4h": 54.56512605042016,
    "score_7d": 3.489644970414201,
    "extracted_entities": "Bologna - Empoli - Calcio - Serie A - Partita",
    "saturation_score": 664.0
  },
  {
    "rank": 28,
    "entity": "eurospin",
    "discover_score": 11.798052749435398,
    "score_1h": 69.1896551724138,
    "score_4h": 19.695378151260506,
    "score_7d": 24.64692519019442,
    "extracted_entities": "Eurospin - Supermercato - Discount - Italia - Offerte",
    "saturation_score": 170.0
  },
  {
    "rank": 5,
    "entity": "25 aprile 2025",
    "discover_score": 9.84807295299959,
    "score_1h": 83.16379310344828,
    "score_4h": 53.535714285714285,
    "score_7d": 6.0120808678500985,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Eventi - Commemorazioni",
    "saturation_score": 1860.0
  },
  {
    "rank": 27,
    "entity": "meteo rimini",
    "discover_score": 8.331195326233619,
    "score_1h": 6.043103448275862,
    "score_4h": 1.7394957983193278,
    "score_7d": 21.746812482389405,
    "extracted_entities": "Meteo - Rimini",
    "saturation_score": 9.0
  },
  {
    "rank": 9,
    "entity": "allerta temporale",
    "discover_score": 5.898019364932201,
    "score_1h": 67.80172413793105,
    "score_4h": 18.970588235294116,
    "score_7d": 8.600362778247394,
    "extracted_entities": "Allerta - Temporale - Meteo - Previsioni",
    "saturation_score": 2.0
  },
  {
    "rank": 19,
    "entity": "guerra ucraina russia",
    "discover_score": 4.35004462170482,
    "score_1h": 2.318965517241379,
    "score_4h": 0.2626050420168067,
    "score_7d": 11.948330515638208,
    "extracted_entities": "Guerra - Ucraina - Russia - Conflitto - Invasione",
    "saturation_score": 3.0
  },
  {
    "rank": 2,
    "entity": "gentilini",
    "discover_score": 3.935291538219087,
    "score_1h": 36.689655172413794,
    "score_4h": 6.867647058823529,
    "score_7d": 4.987954353338969,
    "extracted_entities": "Gentilini - Biscotti - Azienda alimentare - Prodotti da forno - Italia",
    "saturation_score": 449.0
  },
  {
    "rank": 17,
    "entity": "santo del giorno",
    "discover_score": 3.483824252500051,
    "score_1h": 6.629310344827586,
    "score_4h": 0.8529411764705882,
    "score_7d": 9.490472668357285,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 27.0
  },
  {
    "rank": 32,
    "entity": "melania trump",
    "discover_score": 2.640352321030401,
    "score_1h": 2.0172413793103448,
    "score_4h": 0.5756302521008403,
    "score_7d": 8.375422654268808,
    "extracted_entities": "Melania Trump - Persone - Politica - Stati Uniti",
    "saturation_score": 2.0
  },
  {
    "rank": 4,
    "entity": "latte ritirato carrefour",
    "discover_score": 2.4807810671754895,
    "score_1h": 1.4827586206896552,
    "score_4h": 2.2247899159663866,
    "score_7d": 4.774478726401803,
    "extracted_entities": "Latte - Ritiro prodotto - Carrefour",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "vardy",
    "discover_score": 2.0368153346401456,
    "score_1h": 1.4741379310344827,
    "score_4h": 0.7247899159663865,
    "score_7d": 4.884175119752043,
    "extracted_entities": "Jamie Vardy - Calciatore - Premier League - Leicester City - Gol",
    "saturation_score": 75.0
  },
  {
    "rank": 11,
    "entity": "clippers - nuggets",
    "discover_score": 1.7374979338455956,
    "score_1h": 3.1206896551724137,
    "score_4h": 1.9180672268907561,
    "score_7d": 4.296826570865033,
    "extracted_entities": "Clippers - Nuggets - NBA - Partita - Basket",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "atalanta lecce",
    "discover_score": 1.6589584775333235,
    "score_1h": 1.2155172413793103,
    "score_4h": 0.2899159663865546,
    "score_7d": 3.999542124542125,
    "extracted_entities": "Atalanta - Lecce - Serie A - Calcio",
    "saturation_score": 308.0
  },
  {
    "rank": 16,
    "entity": "grizzlies - thunder",
    "discover_score": 1.5717266467878084,
    "score_1h": 1.5948275862068966,
    "score_4h": 0.8256302521008403,
    "score_7d": 4.475028176951254,
    "extracted_entities": "Grizzlies - Thunder - NBA - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 22,
    "entity": "volvera",
    "discover_score": 1.5503367466418623,
    "score_1h": 4.431034482758621,
    "score_4h": 1.1617647058823528,
    "score_7d": 4.5910291631445475,
    "extracted_entities": "Volvera - Comune - Torino - Piemonte - Italia",
    "saturation_score": 49.0
  },
  {
    "rank": 3,
    "entity": "atlético madrid - rayo vallecano",
    "discover_score": 1.4582041452818812,
    "score_1h": 1.7844827586206897,
    "score_4h": 1.4411764705882353,
    "score_7d": 2.7306283460129617,
    "extracted_entities": "Atlético Madrid - Rayo Vallecano - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 15,
    "entity": "pistons - knicks",
    "discover_score": 1.4229285752607366,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8613445378151261,
    "score_7d": 3.994170893209355,
    "extracted_entities": "Pistons - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 13,
    "entity": "sonego",
    "discover_score": 1.3943386206823996,
    "score_1h": 0.6551724137931034,
    "score_4h": 0.7352941176470588,
    "score_7d": 3.839990138067061,
    "extracted_entities": "Lorenzo Sonego - Tennis - ATP Tour",
    "saturation_score": 326.0
  },
  {
    "rank": 33,
    "entity": "anpi",
    "discover_score": 1.3943313595688285,
    "score_1h": 2.9655172413793105,
    "score_4h": 0.7521008403361344,
    "score_7d": 4.544396308819386,
    "extracted_entities": "ANPI - Associazione Nazionale Partigiani d'Italia - Resistenza italiana - Antifascismo - Storia italiana",
    "saturation_score": 235.0
  },
  {
    "rank": 39,
    "entity": "federico cina",
    "discover_score": 1.3452509892573452,
    "score_1h": 0.0,
    "score_4h": 0.29411764705882354,
    "score_7d": 4.636640602986756,
    "extracted_entities": "Federico Cina - Moda - Designer",
    "saturation_score": 2.0
  },
  {
    "rank": 10,
    "entity": "bella ciao",
    "discover_score": 1.2896506325911785,
    "score_1h": 44.56896551724138,
    "score_4h": 7.32563025210084,
    "score_7d": 1.7219287123133276,
    "extracted_entities": "Bella Ciao - Canzone - Resistenza - Italia - Seconda Guerra Mondiale",
    "saturation_score": 146.0
  },
  {
    "rank": 29,
    "entity": "pàpa francesco",
    "discover_score": 1.071292832748595,
    "score_1h": 1.7155172413793103,
    "score_4h": 0.3739495798319328,
    "score_7d": 3.4953860242321784,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "antonio pappalardo",
    "discover_score": 1.0445164366123068,
    "score_1h": 0.0,
    "score_4h": 0.42647058823529416,
    "score_7d": 3.4108199492814877,
    "extracted_entities": "Antonio Pappalardo",
    "saturation_score": 38.0
  },
  {
    "rank": 18,
    "entity": "nfl draft",
    "discover_score": 0.9757434163760395,
    "score_1h": 1.456896551724138,
    "score_4h": 0.5,
    "score_7d": 2.8828367145674836,
    "extracted_entities": "NFL - Draft - Football americano - Selezione giocatori - Squadre NFL",
    "saturation_score": 3.0
  },
  {
    "rank": 12,
    "entity": "san marco onomastico",
    "discover_score": 0.9536155795734443,
    "score_1h": 12.103448275862068,
    "score_4h": 2.2184873949579833,
    "score_7d": 2.148034657650042,
    "extracted_entities": "San Marco - Onomastico - Festa religiosa",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "manifestazione 25 aprile",
    "discover_score": 0.9152280023154538,
    "score_1h": 25.224137931034484,
    "score_4h": 3.418067226890756,
    "score_7d": 2.345009157509158,
    "extracted_entities": "Manifestazione - 25 aprile - Festa della Liberazione - Italia - Eventi",
    "saturation_score": 4.0
  },
  {
    "rank": 8,
    "entity": "macchia volto papa francesco",
    "discover_score": 0.8696711376860562,
    "score_1h": 0.6293103448275862,
    "score_4h": 0.07983193277310924,
    "score_7d": 2.2809418145956606,
    "extracted_entities": "Macchia - Volto - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "festa della repubblica",
    "discover_score": 0.8566865579237802,
    "score_1h": 2.4482758620689653,
    "score_4h": 0.3172268907563025,
    "score_7d": 2.7111862496477883,
    "extracted_entities": "Festa della Repubblica - Italia - Celebrazione - 2 giugno - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "marsica",
    "discover_score": 0.790327446727352,
    "score_1h": 0.0,
    "score_4h": 0.8109243697478992,
    "score_7d": 2.6060157790927025,
    "extracted_entities": "Marsica - Abruzzo - Italia - Geografia - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 47,
    "entity": "india pakistan",
    "discover_score": 0.7468980985592294,
    "score_1h": 0.0,
    "score_4h": 1.1281512605042017,
    "score_7d": 2.372164694280079,
    "extracted_entities": "India - Pakistan - Relazioni internazionali - Conflitto - Asia Meridionale",
    "saturation_score": 76.0
  },
  {
    "rank": 14,
    "entity": "twente - psv eindhoven",
    "discover_score": 0.6954444368171698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.022981825866441,
    "extracted_entities": "Twente - PSV Eindhoven - Calcio - Eredivisie - Partita",
    "saturation_score": 3.0
  },
  {
    "rank": 38,
    "entity": "musei gratis 25 aprile",
    "discover_score": 0.6860719600233491,
    "score_1h": 2.456896551724138,
    "score_4h": 0.5777310924369747,
    "score_7d": 2.2111862496477883,
    "extracted_entities": "Musei - Gratis - 25 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 37,
    "entity": "chef locatelli",
    "discover_score": 0.6825586219186152,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6008403361344538,
    "score_7d": 2.181512397858552,
    "extracted_entities": "Chef - Locatelli - Cucina - Ristorazione",
    "saturation_score": 5.0
  },
  {
    "rank": 43,
    "entity": "alice bologna scomparsa",
    "discover_score": 0.6264329535371291,
    "score_1h": 0.0,
    "score_4h": 1.3235294117647058,
    "score_7d": 1.8237883910960835,
    "extracted_entities": "Alice - Bologna - Scomparsa",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "costanza caracciolo",
    "discover_score": 0.5952296048365568,
    "score_1h": 0.0,
    "score_4h": 0.22268907563025211,
    "score_7d": 1.9398774302620456,
    "extracted_entities": "Costanza Caracciolo - Personaggio pubblico - Moda - Televisione",
    "saturation_score": 2.0
  },
  {
    "rank": 46,
    "entity": "matteo arnaldi",
    "discover_score": 0.573301950788292,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.6260504201680672,
    "score_7d": 1.8318012116089037,
    "extracted_entities": "Matteo Arnaldi - Tennis - Italia",
    "saturation_score": 31.0
  },
  {
    "rank": 48,
    "entity": "club brugge - union sg",
    "discover_score": 0.5043567133085076,
    "score_1h": 0.0,
    "score_4h": 0.15336134453781514,
    "score_7d": 1.7015532544378698,
    "extracted_entities": "Club Brugge - Union SG - Calcio - Belgio - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 34,
    "entity": "serido",
    "discover_score": 0.4747574694395661,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0819327731092437,
    "score_7d": 1.5098971541279234,
    "extracted_entities": "Festival - Teatro - Bambini - Spettacoli",
    "saturation_score": -1.0
  },
  {
    "rank": 41,
    "entity": "25 aprile sobrio",
    "discover_score": 0.45844386168743223,
    "score_1h": 0.3793103448275862,
    "score_4h": 0.36554621848739494,
    "score_7d": 1.4152930402930401,
    "extracted_entities": "25 aprile - Sobrietà - Festa della Liberazione",
    "saturation_score": 46.0
  },
  {
    "rank": 24,
    "entity": "until dawn film",
    "discover_score": 0.4562783888811776,
    "score_1h": 1.1551724137931034,
    "score_4h": 0.38655462184873945,
    "score_7d": 1.2665363482671175,
    "extracted_entities": "Until Dawn - Film - Horror - Videogioco - Supermassive Games",
    "saturation_score": 2.0
  },
  {
    "rank": 23,
    "entity": "vancouver whitecaps - inter miami",
    "discover_score": 0.4384929909357731,
    "score_1h": 1.3362068965517242,
    "score_4h": 0.3403361344537815,
    "score_7d": 1.2030325443786982,
    "extracted_entities": "Vancouver Whitecaps - Inter Miami - Partita di calcio - Major League Soccer",
    "saturation_score": 1.0
  },
  {
    "rank": 42,
    "entity": "manifestazione 25 aprile roma",
    "discover_score": 0.4244755756325664,
    "score_1h": 0.0,
    "score_4h": 0.3445378151260504,
    "score_7d": 1.2901873767258383,
    "extracted_entities": "Manifestazione - 25 aprile - Roma - Festa della Liberazione",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "anna kalinskaya",
    "discover_score": 0.4224553377324032,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 1.3415750915750917,
    "extracted_entities": "Anna Kalinskaya - Tennista - Sport",
    "saturation_score": 10.0
  },
  {
    "rank": 20,
    "entity": "vladimir putin",
    "discover_score": 0.3784695764646923,
    "score_1h": 0.0,
    "score_4h": 0.1092436974789916,
    "score_7d": 1.0130846717385178,
    "extracted_entities": "Vladimir Putin - Politica russa - Presidente della Russia",
    "saturation_score": 39.0
  },
  {
    "rank": 21,
    "entity": "manifestazione 25 aprile milano",
    "discover_score": 0.35817268075261594,
    "score_1h": 1.2844827586206895,
    "score_4h": 0.45168067226890757,
    "score_7d": 0.8550648069878839,
    "extracted_entities": "Manifestazione - 25 aprile - Milano - Festa della Liberazione",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "rcb vs rr",
    "discover_score": 0.27962066741487684,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.22478991596638653,
    "score_7d": 0.7477634544942238,
    "extracted_entities": "RCB - RR - Indian Premier League - Cricket - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 26,
    "entity": "francesco ambrosoli",
    "discover_score": 0.25548568885429546,
    "score_1h": 0.8017241379310345,
    "score_4h": 0.40756302521008403,
    "score_7d": 0.5045259227951535,
    "extracted_entities": "Francesco Ambrosoli",
    "saturation_score": 7.0
  },
  {
    "rank": 49,
    "entity": "mad max fury road",
    "discover_score": 0.19255253579551704,
    "score_1h": 0.0,
    "score_4h": 0.5210084033613446,
    "score_7d": 0.2842349957734573,
    "extracted_entities": "Mad Max - Fury Road - Film - George Miller - Charlize Theron",
    "saturation_score": 6.0
  },
  {
    "rank": 40,
    "entity": "salvatore borsellino",
    "discover_score": 0.16636402168719752,
    "score_1h": 1.4913793103448274,
    "score_4h": 0.037815126050420166,
    "score_7d": 0.27310510002817695,
    "extracted_entities": "Salvatore Borsellino - Persone - Antimafia - Fratello di Paolo Borsellino - Attivismo",
    "saturation_score": 38.0
  },
  {
    "rank": 31,
    "entity": "terremoto campi flegrei",
    "discover_score": 0.14045834665958715,
    "score_1h": 3.431034482758621,
    "score_4h": 0.6764705882352942,
    "score_7d": 0.00593477035784728,
    "extracted_entities": "Terremoto - Campi Flegrei - Vulcani - Sismicità",
    "saturation_score": 41.0
  },
  {
    "rank": 51,
    "entity": "roberto bolle",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "mattia bellucci",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "acconti irpef 2025",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "vaccinations",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "vaccines",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "paola cortellesi",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "immunizations",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "nepal",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "tomba papa francesco",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "leganés - girona",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "cocciaretto",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "giulia salemi",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "netflix down",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "lube volley",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "anthony hopkins",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "osasuna - siviglia",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "francesca chillemi",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "the accountant 2",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "scisma",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "mad max",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "mc donald",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "jennifer beals",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "lucia bronzetti",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "lahore qalandars vs peshawar zalmi",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "belen",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "you stagione 5",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "samanta togni",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "francesco segato",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "al pacino",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "coco gauff",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "you serie",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "veronica gentili",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "de lorenzo vitalizio",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "italia 1",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "diletta leotta",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "conclave streaming",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "dallinga",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "mogol",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "generali",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "cuneo volley",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "saputo",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "alex eala",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "joão fonseca",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "atletico madrid",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "teresa vergalli",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "michela ponzani",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "pablo escobar",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tether",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "papa francesco conclave",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "jackson rodriguez",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "de bruyne",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "shade",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "open madrid",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "marco maddaloni",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "real betis vs valladolid",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "iga świątek",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "zac efron",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "bronzetti oggi",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "antonio rossi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "giulia de lellis",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "luis miguel",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "cfr cluj - farul costanza",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "ash film",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "pokemon pocket nuova espansione",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "alisha lehmann",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "andor",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "nba risultati",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "pechino express",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "tallon griekspoor",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "luca argentero",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "torinotoday",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "kathmandu",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "keanu reeves",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "ryanair",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "luca casarini",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "giovanni muciaccia",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "estremadura",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "pallavolo maschile",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "stefano de martino",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "mckenna grace",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "madison keys",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "milan bologna",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "x",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "vaibhav suryavanshi",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "tropea",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "maddaloni",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "manifestazione genova oggi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "millionday",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "modica",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "ortisei",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "mirra andreeva",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "elmer møller",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "tesla",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "anticipazioni sesta puntata serale amici",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "city hall",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "luana uomini e donne",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "k2",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "asif ali",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "treviso today",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "rosa che dio ci aiuti",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "joe bastianich",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "messico",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "wilma goich",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "tina cipollari",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "david thomas",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "sallusti",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "nikolov",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "liliana segre",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "gene hackman",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "mestre",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "bagna cauda",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "maria corleone",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "miretti",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "decreto bollette 2025",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "pupi avati",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "daniele mocellin",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "robert de niro",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "john wayne",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "feltri",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "anastasija sevastova",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "carofiglio",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "tacchinardi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "nba",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "beppe convertini",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "ricci",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "etoile serie tv",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "pakistan",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "riserva indiana",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "cacciatorpediniere",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "alessandro borghese",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "giaele de donà",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "dacia maraini",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "bologna today",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "oroscopo paolo fox ariete",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "4chan",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "modena",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "tibet",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "senegal",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "cutro",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "lamon",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "matteo gigante",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "pier luigi pizzaballa",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "lorde",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-25 07:01:56",
  "trends_count": 195,
  "top_score": 12.3985494775607,
  "runtime_minutes": 4.735557186603546,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi un potente vento di notizie si abbatte sull'Italia, e i temi principali che emergono dai flutti sono tre: sport, commemorazioni storiche e meteo. Le serie A e NBA dominano il panorama sportivo con partite come 'bologna - empoli' e 'grizzlies - thunder', riflettendo un immutabile focus sull'atletismo e il gusto per la competizione. Nel mentre, il fiammeggiare delle celebrazioni del 25 aprile illumina i cieli, facendoci riflettere sulla Resistenza e mettendo in luce manifestazioni e l'immortale canto di 'Bella Ciao'. Non da meno, il meteo attira l'attenzione con allerta temporali a far da sentinella alla sicurezza.\n\nLa vera gemma per Google Discover si nasconde nel trend 'allerta temporale' (#5), che, grazie a un DScore medio e una saturazione pressoché nulla, riflette il cielo limpido dell'opportunità. Diversamente, '25 aprile 2025' (#3) risente di un cielo coperto da alta saturazione, suggerendo cautela al viandante digitale.\n\nNel mosaico di tendenze, il consiglio ai creatori di contenuti è di cavalcare queste onde con prontezza, ma discernendo con saggezza tra rumorose mareggiate pubbliche e sagge correnti segrete."
};
