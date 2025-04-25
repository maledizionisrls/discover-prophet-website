const trendData = [
  {
    "rank": 22,
    "entity": "eurospin",
    "discover_score": 13.194117754148014,
    "score_1h": 40.82013442431327,
    "score_4h": 50.707983193277315,
    "score_7d": 18.476331360946745,
    "extracted_entities": "Eurospin - Supermercato - Discount - Italia - Spesa",
    "saturation_score": 172.0
  },
  {
    "rank": 5,
    "entity": "25 aprile 2025",
    "discover_score": 12.17772829377652,
    "score_1h": 77.51724137931035,
    "score_4h": 65.40126050420167,
    "score_7d": 6.846153846153847,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - 2025",
    "saturation_score": 2020.0
  },
  {
    "rank": 1,
    "entity": "bologna - empoli",
    "discover_score": 9.232256746706845,
    "score_1h": 38.09760374050263,
    "score_4h": 37.365546218487395,
    "score_7d": 3.5,
    "extracted_entities": "Bologna - Empoli - Calcio - Serie A - Partita",
    "saturation_score": 636.0
  },
  {
    "rank": 18,
    "entity": "liberazione",
    "discover_score": 9.11433783365742,
    "score_1h": 78.03448275862068,
    "score_4h": 73.1827731092437,
    "score_7d": 5.665680473372781,
    "extracted_entities": "Liberazione - Storia - Seconda Guerra Mondiale - Resistenza - Italia",
    "saturation_score": 3690.0
  },
  {
    "rank": 33,
    "entity": "allerta temporale",
    "discover_score": 7.912069659806973,
    "score_1h": 47.44827586206897,
    "score_4h": 25.20798319327731,
    "score_7d": 15.550295857988166,
    "extracted_entities": "Allerta - Temporale - Meteo",
    "saturation_score": 3.0
  },
  {
    "rank": 38,
    "entity": "libertà",
    "discover_score": 6.267330277937294,
    "score_1h": 56.103448275862064,
    "score_4h": 26.29621848739496,
    "score_7d": 11.792899408284024,
    "extracted_entities": "Libertà - Diritti umani - Autodeterminazione - Democrazia - Filosofia",
    "saturation_score": 1140.0
  },
  {
    "rank": 43,
    "entity": "guerra ucraina russia",
    "discover_score": 4.346564292569316,
    "score_1h": 2.0517241379310347,
    "score_4h": 0.592436974789916,
    "score_7d": 13.76923076923077,
    "extracted_entities": "Guerra - Ucraina - Russia - Conflitto - Invasione",
    "saturation_score": 3.0
  },
  {
    "rank": 3,
    "entity": "gentilini",
    "discover_score": 4.334351886436711,
    "score_1h": 3.956896551724138,
    "score_4h": 10.960084033613445,
    "score_7d": 5.357988165680473,
    "extracted_entities": "Gentilini - Biscotti - Azienda alimentare - Italia",
    "saturation_score": 468.0
  },
  {
    "rank": 31,
    "entity": "25 aprile supermercati aperti",
    "discover_score": 3.5151712662145553,
    "score_1h": 21.232758620689655,
    "score_4h": 20.38235294117647,
    "score_7d": 5.659763313609467,
    "extracted_entities": "25 aprile - Supermercati - Apertura - Italia - Festa della Liberazione",
    "saturation_score": -1.0
  },
  {
    "rank": 8,
    "entity": "san marco onomastico",
    "discover_score": 2.4552109986336563,
    "score_1h": 17.67241379310345,
    "score_4h": 13.42016806722689,
    "score_7d": 2.8875739644970415,
    "extracted_entities": "San Marco - Onomastico - Festa religiosa",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "vardy",
    "discover_score": 2.3962614373177513,
    "score_1h": 1.5603448275862069,
    "score_4h": 1.46218487394958,
    "score_7d": 5.482248520710059,
    "extracted_entities": "Jamie Vardy - Calciatore - Leicester City - Premier League - Inghilterra",
    "saturation_score": 76.0
  },
  {
    "rank": 2,
    "entity": "graziano fiorita",
    "discover_score": 2.173710699167108,
    "score_1h": 1.3027469316189362,
    "score_4h": 1.1407563025210083,
    "score_7d": 3.7337278106508878,
    "extracted_entities": "Graziano Fiorita",
    "saturation_score": 248.0
  },
  {
    "rank": 34,
    "entity": "bergomi",
    "discover_score": 1.889774609882804,
    "score_1h": 34.12931034482759,
    "score_4h": 18.371848739495796,
    "score_7d": 1.7840236686390534,
    "extracted_entities": "Beppe Bergomi - Calcio - Inter - Nazionale Italiana - Commentatore Sportivo",
    "saturation_score": 6.0
  },
  {
    "rank": 4,
    "entity": "atlético madrid - rayo vallecano",
    "discover_score": 1.8647977415872599,
    "score_1h": 0.0,
    "score_4h": 2.5735294117647056,
    "score_7d": 3.494082840236686,
    "extracted_entities": "Atlético Madrid - Rayo Vallecano - Partita di calcio - La Liga",
    "saturation_score": 1.0
  },
  {
    "rank": 49,
    "entity": "papà francesco",
    "discover_score": 1.670868250839464,
    "score_1h": 8.562536528345996,
    "score_4h": 4.968487394957982,
    "score_7d": 4.63905325443787,
    "extracted_entities": "Papa Francesco - Vaticano - Chiesa Cattolica",
    "saturation_score": 3.0
  },
  {
    "rank": 17,
    "entity": "santo del giorno",
    "discover_score": 1.50715739235412,
    "score_1h": 0.6293103448275862,
    "score_4h": 1.7521008403361344,
    "score_7d": 4.091715976331361,
    "extracted_entities": "Santo - Giorno - Calendario Liturgico",
    "saturation_score": 32.0
  },
  {
    "rank": 12,
    "entity": "betis - valladolid",
    "discover_score": 1.3717102160176267,
    "score_1h": 2.3275862068965516,
    "score_4h": 0.6680672268907563,
    "score_7d": 3.7366863905325447,
    "extracted_entities": "Betis - Valladolid - Partita di calcio - La Liga",
    "saturation_score": 5.0
  },
  {
    "rank": 21,
    "entity": "pistons - knicks",
    "discover_score": 1.3644429594685208,
    "score_1h": 0.39655172413793105,
    "score_4h": 0.657563025210084,
    "score_7d": 4.133136094674557,
    "extracted_entities": "Pistons - Knicks - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 16,
    "entity": "volvera",
    "discover_score": 1.3615242755834664,
    "score_1h": 1.3879310344827587,
    "score_4h": 2.907563025210084,
    "score_7d": 3.3195266272189348,
    "extracted_entities": "Volvera - Comune - Torino - Piemonte - Italia",
    "saturation_score": 154.0
  },
  {
    "rank": 39,
    "entity": "de bruyne",
    "discover_score": 1.2837714822224255,
    "score_1h": 0.0,
    "score_4h": 0.4285714285714286,
    "score_7d": 4.390532544378698,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Premier League - Belgio",
    "saturation_score": 9.0
  },
  {
    "rank": 40,
    "entity": "serido",
    "discover_score": 1.254273263940759,
    "score_1h": 0.5,
    "score_4h": 0.7457983193277311,
    "score_7d": 4.218934911242604,
    "extracted_entities": "Festival - Teatro - Bambini - Spettacoli",
    "saturation_score": -1.0
  },
  {
    "rank": 25,
    "entity": "grizzlies - thunder",
    "discover_score": 1.2510690630777213,
    "score_1h": 0.0,
    "score_4h": 1.1785714285714286,
    "score_7d": 3.7633136094674557,
    "extracted_entities": "Grizzlies - Thunder - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "buona festa della liberazione",
    "discover_score": 1.2341663583641103,
    "score_1h": 0.35344827586206895,
    "score_4h": 9.75,
    "score_7d": 1.5207100591715976,
    "extracted_entities": "Festa della Liberazione - Celebrazione - Italia - 25 aprile",
    "saturation_score": 7.0
  },
  {
    "rank": 26,
    "entity": "che festa è il 25 aprile",
    "discover_score": 1.135723463914903,
    "score_1h": 0.847457627118644,
    "score_4h": 0.3802521008403361,
    "score_7d": 3.6390532544378695,
    "extracted_entities": "Festa della Liberazione - Italia - 25 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "cosa fare il 25 aprile",
    "discover_score": 1.1210318686911769,
    "score_1h": 4.112068965517241,
    "score_4h": 1.153361344537815,
    "score_7d": 3.6745562130177514,
    "extracted_entities": "25 aprile - Attività - Eventi - Italia - Festa della Liberazione",
    "saturation_score": 4.0
  },
  {
    "rank": 30,
    "entity": "anpi",
    "discover_score": 1.0768536328684686,
    "score_1h": 4.991379310344827,
    "score_4h": 1.2563025210084033,
    "score_7d": 3.289940828402367,
    "extracted_entities": "ANPI - Associazione Nazionale Partigiani d'Italia - Resistenza italiana - Antifascismo - Storia italiana",
    "saturation_score": 301.0
  },
  {
    "rank": 23,
    "entity": "nfl draft",
    "discover_score": 1.0367899229457476,
    "score_1h": 0.8103448275862069,
    "score_4h": 0.7436974789915966,
    "score_7d": 3.1449704142011834,
    "extracted_entities": "NFL - Draft - Football Americano - Selezione Giocatori - Squadre NFL",
    "saturation_score": 3.0
  },
  {
    "rank": 32,
    "entity": "musei gratis 25 aprile",
    "discover_score": 1.0256602802885442,
    "score_1h": 1.146551724137931,
    "score_4h": 0.6365546218487395,
    "score_7d": 3.3254437869822486,
    "extracted_entities": "Musei - Gratis - 25 aprile",
    "saturation_score": -1.0
  },
  {
    "rank": 15,
    "entity": "clippers - nuggets",
    "discover_score": 1.014009596158861,
    "score_1h": 0.5948275862068966,
    "score_4h": 2.3088235294117645,
    "score_7d": 2.4171597633136095,
    "extracted_entities": "Clippers - Nuggets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "macchia volto papa francesco",
    "discover_score": 1.0051799818659357,
    "score_1h": 0.0,
    "score_4h": 0.16596638655462184,
    "score_7d": 2.7455621301775146,
    "extracted_entities": "Macchia - Volto - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "paolo fox oroscopo oggi",
    "discover_score": 1.0039627302073904,
    "score_1h": 2.974137931034483,
    "score_4h": 0.296218487394958,
    "score_7d": 3.562130177514793,
    "extracted_entities": "Paolo Fox - Oroscopo - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 36,
    "entity": "santo di oggi",
    "discover_score": 0.959580518546159,
    "score_1h": 0.0,
    "score_4h": 0.9180672268907564,
    "score_7d": 3.0828402366863905,
    "extracted_entities": "Santo - Oggi - Calendario liturgico",
    "saturation_score": -1.0
  },
  {
    "rank": 20,
    "entity": "sonego",
    "discover_score": 0.905139466424357,
    "score_1h": 0.0,
    "score_4h": 0.46638655462184875,
    "score_7d": 2.7218934911242605,
    "extracted_entities": "Lorenzo Sonego - Tennis - ATP Tour",
    "saturation_score": 174.0
  },
  {
    "rank": 13,
    "entity": "manifestazione 25 aprile milano",
    "discover_score": 0.8722813374124092,
    "score_1h": 4.401957919345412,
    "score_4h": 0.6302521008403361,
    "score_7d": 2.3668639053254434,
    "extracted_entities": "Manifestazione - 25 aprile - Milano - Festa della Liberazione - Eventi",
    "saturation_score": -1.0
  },
  {
    "rank": 6,
    "entity": "latte ritirato carrefour",
    "discover_score": 0.8249767978629725,
    "score_1h": 1.6810344827586208,
    "score_4h": 3.3172268907563023,
    "score_7d": 1.2159763313609468,
    "extracted_entities": "Latte - Ritiro prodotto - Carrefour",
    "saturation_score": -1.0
  },
  {
    "rank": 14,
    "entity": "alice morelli",
    "discover_score": 0.8126701785712948,
    "score_1h": 3.7155172413793105,
    "score_4h": 0.7058823529411765,
    "score_7d": 2.198224852071006,
    "extracted_entities": "Alice Morelli",
    "saturation_score": 6.0
  },
  {
    "rank": 9,
    "entity": "festa della liberazione 2025",
    "discover_score": 0.7090441472999751,
    "score_1h": 1.8362068965517242,
    "score_4h": 1.8256302521008405,
    "score_7d": 1.4171597633136095,
    "extracted_entities": "Festa della Liberazione - 2025 - Italia - Celebrazione - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 48,
    "entity": "oroscopo branko",
    "discover_score": 0.6676186043641796,
    "score_1h": 1.4741379310344827,
    "score_4h": 0.9747899159663865,
    "score_7d": 2.1183431952662723,
    "extracted_entities": "Oroscopo - Branko - Astrologia",
    "saturation_score": 8.0
  },
  {
    "rank": 35,
    "entity": "until dawn film",
    "discover_score": 0.6147588843416597,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.04831932773109244,
    "score_7d": 2.062130177514793,
    "extracted_entities": "Until Dawn - Film - Horror - Videogioco - Supermassive Games",
    "saturation_score": 2.0
  },
  {
    "rank": 50,
    "entity": "kean cosa è successo",
    "discover_score": 0.6138075677975965,
    "score_1h": 0.7672413793103449,
    "score_4h": 0.07352941176470588,
    "score_7d": 2.1745562130177514,
    "extracted_entities": "Moise Kean - Evento recente - Calcio - Juventus - Infortunio",
    "saturation_score": 1.0
  },
  {
    "rank": 46,
    "entity": "superenalotto 24 aprile 2025",
    "discover_score": 0.5512621412099129,
    "score_1h": 0.0,
    "score_4h": 0.5378151260504201,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Superenalotto - 24 aprile 2025 - Estrazione - Jackpot - Lotteria",
    "saturation_score": 4.0
  },
  {
    "rank": 29,
    "entity": "vancouver whitecaps - inter miami",
    "discover_score": 0.4877383436642162,
    "score_1h": 0.0,
    "score_4h": 0.6491596638655462,
    "score_7d": 1.3609467455621302,
    "extracted_entities": "Vancouver Whitecaps - Inter Miami - Partita di calcio - MLS - Squadre di calcio",
    "saturation_score": 1.0
  },
  {
    "rank": 11,
    "entity": "margot simond",
    "discover_score": 0.4475043503780023,
    "score_1h": 3.396551724137931,
    "score_4h": 0.7794117647058824,
    "score_7d": 0.9437869822485208,
    "extracted_entities": "Margot Simond",
    "saturation_score": 160.0
  },
  {
    "rank": 19,
    "entity": "referendum 8 e 9 giugno",
    "discover_score": 0.44493977029295717,
    "score_1h": 2.2672413793103448,
    "score_4h": 0.6491596638655461,
    "score_7d": 1.0976331360946747,
    "extracted_entities": "Referendum - 8 giugno - 9 giugno",
    "saturation_score": 22.0
  },
  {
    "rank": 27,
    "entity": "festa della repubblica",
    "discover_score": 0.3625726424475099,
    "score_1h": 1.4137931034482758,
    "score_4h": 0.930672268907563,
    "score_7d": 0.7928994082840237,
    "extracted_entities": "Festa della Repubblica - Italia - Celebrazione - 2 giugno - Storia",
    "saturation_score": 10.0
  },
  {
    "rank": 45,
    "entity": "vladimir putin",
    "discover_score": 0.34771675851271466,
    "score_1h": 0.0,
    "score_4h": 0.5504201680672269,
    "score_7d": 0.9319526627218935,
    "extracted_entities": "Vladimir Putin - Politica russa - Presidente della Russia",
    "saturation_score": 23.0
  },
  {
    "rank": 41,
    "entity": "sandro pertini",
    "discover_score": 0.28902586816088616,
    "score_1h": 0.49137931034482757,
    "score_4h": 0.27941176470588236,
    "score_7d": 0.7426035502958579,
    "extracted_entities": "Sandro Pertini - Presidente della Repubblica Italiana - Politica Italiana - Storia Italiana",
    "saturation_score": 43.0
  },
  {
    "rank": 28,
    "entity": "roberto parli",
    "discover_score": 0.2762338130897075,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.0672268907563025,
    "score_7d": 0.4289940828402367,
    "extracted_entities": "Roberto Parli",
    "saturation_score": 29.0
  },
  {
    "rank": 37,
    "entity": "frecce tricolori 25 aprile 2025",
    "discover_score": 0.2598234221742983,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.9180672268907563,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Frecce Tricolori - 25 aprile 2025 - Pattuglia Acrobatica Nazionale - Italia - Festa della Liberazione",
    "saturation_score": -1.0
  },
  {
    "rank": 44,
    "entity": "paola del din",
    "discover_score": 0.1867249354902852,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.0735294117647058,
    "score_7d": 0.12130177514792899,
    "extracted_entities": "Paola Del Din - Partigiana - Resistenza Italiana - Seconda Guerra Mondiale - Medaglia d'Oro al Valor Militare",
    "saturation_score": 1.0
  },
  {
    "rank": 51,
    "entity": "twente - psv eindhoven",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "meteo rimini",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "anna kalinskaja",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "floracult",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "terremoto campi flegrei",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "francesco ambrosoli",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "matteo arnaldi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "vieri",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "crosetto",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "chef locatelli",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "1 maggio",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "club brugge - union sg",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "antonio pappalardo",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "rcb vs rr",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "mad max fury road",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "roberto bolle",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "mattia bellucci",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "federico zampaglione",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "acconti irpef 2025",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "partigiano",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "vaccines",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "tomba papa francesco",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "leganés - girona",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "nepal",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "veronica gentili",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "francesca chillemi",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "giulia salemi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "lucia bronzetti",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "netflix down",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "lube volley",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "anthony hopkins",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "osasuna - siviglia",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "cocciaretto",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "vingegaard",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "paolo trionfini",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "the accountant 2",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "marsica",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "vaccinations",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "antonio albanese",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "2 giugno",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "coppa del re",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "federico cina",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "lahore qalandars vs peshawar zalmi",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "mad max",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "paola cortellesi",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "belen",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "you stagione 5",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "samanta togni",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "al pacino",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "coco gauff",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "mc donald",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "melania trump",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "you serie",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "diletta leotta",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "italia 1",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "jennifer beals",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "de lorenzo vitalizio",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "mogol",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "cuneo volley",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "seconda guerra mondiale",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "conclave streaming",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "alex eala",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "generali",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "cervia",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "dallinga",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "joão fonseca",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "saputo",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "teresa vergalli",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "atletico madrid",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "jackson rodriguez",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "foto 25 aprile",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "india pakistan",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "tether",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "antonio rossi",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "pablo escobar",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "michela ponzani",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "marco maddaloni",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "open madrid",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "shade",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "iga świątek",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "traffico autostrade",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "bronzetti oggi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "salvatore borsellino",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "zac efron",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "real betis vs valladolid",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "reggia di caserta",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "luis miguel",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "giulia de lellis",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "papa francesco conclave",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "cfr cluj - farul costanza",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "pokemon pocket nuova espansione",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "ash film",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "andor",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "scisma",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "ryanair",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "tallon griekspoor",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "giovanni muciaccia",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "francesco segato",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "luca argentero",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "kathmandu",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "estremadura",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "keanu reeves",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "luca casarini",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "madison keys",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "mckenna grace",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "stefano de martino",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "cosimo uomini e donne",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "milan bologna",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "rosa che dio ci aiuti",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "vaibhav suryavanshi",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "maddaloni",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "mirra andreeva",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "modica",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "millionday",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "tropea",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "elmer møller",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "ortisei",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "tesla",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "nba risultati",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "luana uomini e donne",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "anticipazioni sesta puntata serale amici",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "asif ali",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "x",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "k2",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "treviso today",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "wilma goich",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "messico",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "joe bastianich",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "tina cipollari",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "david thomas",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "city hall",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "torinotoday",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "bagna cauda",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "sallusti",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "gene hackman",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "liliana segre",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "nikolov",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "pupi avati",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "italiano",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "daniele mocellin",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "mestre",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "decreto bollette 2025",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "john wayne",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "maria corleone",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "robert de niro",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "anastasija sevastova",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "miretti",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "feltri",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "carofiglio",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "beppe convertini",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "tacchinardi",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "ricci",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "etoile serie tv",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "riserva indiana",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "cacciatorpediniere",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "dacia maraini",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "alessandro borghese",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "giaele de donà",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "4chan",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "modena",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "tibet",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "cutro",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "senegal",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "lamon",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "matteo gigante",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 216,
    "entity": "pier luigi pizzaballa",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 217,
    "entity": "lorde",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-25 09:17:52",
  "trends_count": 217,
  "top_score": 13.194117754148014,
  "runtime_minutes": 4.18254515727361,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le Profezie di Oggi svelano i temi dominanti che danzano tra passato e presente nel cuore dell'Italia. La celebrazione della \"Festa della Liberazione\" e le sue molteplici sfumature emergono come un coro di memorie e riflessioni storiche. Al contempo, l'atmosfera metereologica con \"allerta temporale\" guida conversazioni pratiche nelle vite quotidiane.\n\nOpportunità emergono come stelle cadenti: l'allerta meteo (#5) si erge con speranze di scoperta, con un DScore elevato e saturazione minima. Anche il nostalgico e sempre attuale \"Eurospin\" (#1) rivela il suo potenziale incontrovertibile in un mondo di sconti e necessita pratiche.\n\nNel regno delle avvertenze, il tema della \"Liberazione\" (#4), riccamente saturato, rischia di perdersi nell'eco di cronache già note. Analogamente, il \"25 aprile 2025\" (#2) avvolge l'interesse in una marea di ricerche, minacciando di svanire tra i colli delle celebrazioni troppo preannunciate.\n\nAi creatori di contenuti si consiglia di intrecciare storie fresche con tradizioni narrate, bilanciando tra storicità e immediatezza per catturare l'immaginario collettivo."
};
