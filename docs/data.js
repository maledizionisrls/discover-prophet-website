const trendData = [
  {
    "rank": 43,
    "entity": "germania",
    "discover_score": 19.967075918211588,
    "score_1h": 19.716393921683228,
    "score_4h": 3.7373949579831933,
    "score_7d": 48.760355029585796,
    "extracted_entities": "Germania - Paese - Europa - Berlino - Economia",
    "saturation_score": 720.0
  },
  {
    "rank": 24,
    "entity": "referendum 2025",
    "discover_score": 11.042292269392535,
    "score_1h": 13.620689655172413,
    "score_4h": 4.474789915966387,
    "score_7d": 26.142011834319526,
    "extracted_entities": "Referendum - 2025 - Votazione - Elezioni",
    "saturation_score": 8.0
  },
  {
    "rank": 45,
    "entity": "formula e",
    "discover_score": 5.399487728900537,
    "score_1h": 7.232758620689656,
    "score_4h": 4.432773109243698,
    "score_7d": 15.724852071005918,
    "extracted_entities": "Formula E - Campionato di corse elettriche - Auto elettriche - Motorsport",
    "saturation_score": 72.0
  },
  {
    "rank": 22,
    "entity": "napoli lecce",
    "discover_score": 4.717490894915424,
    "score_1h": 61.28448275862069,
    "score_4h": 32.21638655462185,
    "score_7d": 5.319526627218934,
    "extracted_entities": "Napoli - Lecce - Calcio - Serie A - Partita",
    "saturation_score": 6.0
  },
  {
    "rank": 1,
    "entity": "torino - venezia",
    "discover_score": 4.658476167913591,
    "score_1h": 9.258620689655173,
    "score_4h": 14.346638655462186,
    "score_7d": 3.195266272189349,
    "extracted_entities": "Torino - Venezia - Viaggio - Trasporti - Turismo",
    "saturation_score": 988.0
  },
  {
    "rank": 12,
    "entity": "trump papa",
    "discover_score": 4.589479412098295,
    "score_1h": 13.163793103448278,
    "score_4h": 16.16386554621849,
    "score_7d": 7.393491124260355,
    "extracted_entities": "Donald Trump - Papa - Politica - Religione",
    "saturation_score": 8.0
  },
  {
    "rank": 7,
    "entity": "inter - fiorentina",
    "discover_score": 3.9278477998920858,
    "score_1h": 30.29310344827586,
    "score_4h": 22.689075630252102,
    "score_7d": 3.665680473372781,
    "extracted_entities": "Inter - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 37.0
  },
  {
    "rank": 32,
    "entity": "giro d'italia 2025",
    "discover_score": 3.8579289070838247,
    "score_1h": 12.28448275862069,
    "score_4h": 2.5357142857142856,
    "score_7d": 11.236686390532544,
    "extracted_entities": "Giro d'Italia - 2025 - Ciclismo - Evento sportivo",
    "saturation_score": 46.0
  },
  {
    "rank": 49,
    "entity": "referendum 8 e 9 giugno",
    "discover_score": 3.7413543484111287,
    "score_1h": 2.310344827586207,
    "score_4h": 1.6785714285714284,
    "score_7d": 12.026627218934912,
    "extracted_entities": "Referendum - 8 giugno - 9 giugno - Votazione - Italia",
    "saturation_score": 76.0
  },
  {
    "rank": 4,
    "entity": "scossa terremoto bologna",
    "discover_score": 3.331401954895479,
    "score_1h": 26.603448275862068,
    "score_4h": 24.258403361344538,
    "score_7d": 1.7130177514792901,
    "extracted_entities": "Scossa - Terremoto - Bologna",
    "saturation_score": -1.0
  },
  {
    "rank": 9,
    "entity": "andrea miceli",
    "discover_score": 2.654150639124914,
    "score_1h": 2.4482758620689653,
    "score_4h": 2.004201680672269,
    "score_7d": 6.233727810650888,
    "extracted_entities": "Andrea Miceli",
    "saturation_score": 86.0
  },
  {
    "rank": 13,
    "entity": "allerta vento",
    "discover_score": 2.5031759858110583,
    "score_1h": 20.781852717708944,
    "score_4h": 22.873949579831933,
    "score_7d": 1.6183431952662721,
    "extracted_entities": "Allerta - Vento - Meteo - Previsioni",
    "saturation_score": 1.0
  },
  {
    "rank": 5,
    "entity": "kimi antonelli",
    "discover_score": 2.3587168334380597,
    "score_1h": 24.417007597895967,
    "score_4h": 7.508403361344538,
    "score_7d": 3.514792899408284,
    "extracted_entities": "Kimi Antonelli - Pilota - Motorsport - Formula 1",
    "saturation_score": 146.0
  },
  {
    "rank": 44,
    "entity": "warriors - rockets",
    "discover_score": 2.336818269134698,
    "score_1h": 0.0,
    "score_4h": 0.2415966386554622,
    "score_7d": 7.99112426035503,
    "extracted_entities": "Warriors - Rockets - NBA - Partita - Basket",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "manchester city - wolverhampton",
    "discover_score": 1.8521086170898566,
    "score_1h": 1.353448275862069,
    "score_4h": 0.9684873949579831,
    "score_7d": 4.254437869822485,
    "extracted_entities": "Manchester City - Wolverhampton - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 10,
    "entity": "aston villa - fulham",
    "discover_score": 1.8369243341485295,
    "score_1h": 32.736703682057275,
    "score_4h": 18.544117647058826,
    "score_7d": 0.8402366863905325,
    "extracted_entities": "Aston Villa - Fulham - Partita di calcio - Premier League",
    "saturation_score": 10.0
  },
  {
    "rank": 3,
    "entity": "cagliari - udinese",
    "discover_score": 1.6105405427707877,
    "score_1h": 36.79310344827586,
    "score_4h": 9.021008403361344,
    "score_7d": 1.331360946745562,
    "extracted_entities": "Cagliari - Udinese - Partita di calcio - Serie A",
    "saturation_score": 159.0
  },
  {
    "rank": 17,
    "entity": "musetti draper",
    "discover_score": 1.580046371156803,
    "score_1h": 0.0,
    "score_4h": 0.3802521008403361,
    "score_7d": 4.671597633136095,
    "extracted_entities": "Lorenzo Musetti - Jack Draper - Tennis",
    "saturation_score": 114.0
  },
  {
    "rank": 2,
    "entity": "parma - como",
    "discover_score": 1.4873958980983841,
    "score_1h": 34.21960841613092,
    "score_4h": 8.634453781512605,
    "score_7d": 0.9674556213017751,
    "extracted_entities": "Parma - Como - Calcio - Serie B - Partita",
    "saturation_score": 116.0
  },
  {
    "rank": 16,
    "entity": "vanoli",
    "discover_score": 1.4616375256747047,
    "score_1h": 2.215225014611338,
    "score_4h": 2.292016806722689,
    "score_7d": 3.7692307692307696,
    "extracted_entities": "Vanoli - Basket - Cremona - Serie A - Squadra",
    "saturation_score": 273.0
  },
  {
    "rank": 11,
    "entity": "alavés - atlético madrid",
    "discover_score": 1.4144138141039566,
    "score_1h": 35.310344827586206,
    "score_4h": 11.989495798319329,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Alavés - Atlético Madrid - Partita di calcio - Liga Spagnola",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "bologna juventus",
    "discover_score": 1.389403290505581,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.8046218487394958,
    "score_7d": 4.387573964497042,
    "extracted_entities": "Bologna - Juventus - Calcio - Serie A - Partita",
    "saturation_score": 93.0
  },
  {
    "rank": 21,
    "entity": "alessandro quasimodo",
    "discover_score": 1.2981045196584848,
    "score_1h": 1.6502045587375802,
    "score_4h": 0.31092436974789917,
    "score_7d": 4.0266272189349115,
    "extracted_entities": "Alessandro Quasimodo - Persone",
    "saturation_score": 152.0
  },
  {
    "rank": 20,
    "entity": "paris fc",
    "discover_score": 1.188218382289154,
    "score_1h": 0.413062536528346,
    "score_4h": 1.8172268907563025,
    "score_7d": 3.245562130177515,
    "extracted_entities": "Paris FC - Calcio - Squadra - Francia",
    "saturation_score": 44.0
  },
  {
    "rank": 39,
    "entity": "dengue",
    "discover_score": 1.1619419156913262,
    "score_1h": 1.1810344827586206,
    "score_4h": 1.4453781512605042,
    "score_7d": 3.6893491124260356,
    "extracted_entities": "Dengue - Malattia - Virus - Sintomi - Prevenzione",
    "saturation_score": 106.0
  },
  {
    "rank": 31,
    "entity": "frecce tricolori catania",
    "discover_score": 1.032480030301336,
    "score_1h": 2.0406195207481006,
    "score_4h": 0.6869747899159664,
    "score_7d": 3.3165680473372783,
    "extracted_entities": "Frecce Tricolori - Catania - Aeronautica Militare - Esibizione - Pattuglia Acrobatica",
    "saturation_score": 1.0
  },
  {
    "rank": 41,
    "entity": "superbike cremona",
    "discover_score": 0.9435067293149956,
    "score_1h": 0.4051724137931034,
    "score_4h": 0.5777310924369747,
    "score_7d": 3.1893491124260356,
    "extracted_entities": "Superbike - Cremona - Campionato motociclistico - Corse su pista",
    "saturation_score": -1.0
  },
  {
    "rank": 35,
    "entity": "popovich",
    "discover_score": 0.9287861151182432,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.215976331360947,
    "extracted_entities": "Gregg Popovich - NBA - San Antonio Spurs - Allenatore di basket",
    "saturation_score": 55.0
  },
  {
    "rank": 18,
    "entity": "guardavalle marina",
    "discover_score": 0.8566398971432804,
    "score_1h": 1.8585622443015781,
    "score_4h": 0.75,
    "score_7d": 2.437869822485207,
    "extracted_entities": "Guardavalle Marina - Località balneare - Calabria",
    "saturation_score": 9.0
  },
  {
    "rank": 38,
    "entity": "roma fiorentina",
    "discover_score": 0.8167427141134691,
    "score_1h": 0.847457627118644,
    "score_4h": 1.027310924369748,
    "score_7d": 2.5680473372781063,
    "extracted_entities": "Roma - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 105.0
  },
  {
    "rank": 46,
    "entity": "dipendenti pubblici taglio cuneo fiscale",
    "discover_score": 0.7966891721640227,
    "score_1h": 0.0,
    "score_4h": 0.4222689075630252,
    "score_7d": 2.7485207100591715,
    "extracted_entities": "Dipendenti pubblici - Taglio - Cuneo fiscale",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "supercoppa italiana",
    "discover_score": 0.669584539300097,
    "score_1h": 0.75,
    "score_4h": 0.6533613445378151,
    "score_7d": 2.165680473372781,
    "extracted_entities": "Supercoppa Italiana - Calcio - Italia - Competizione - Trofeo",
    "saturation_score": 327.0
  },
  {
    "rank": 8,
    "entity": "bonus anziani 2025",
    "discover_score": 0.6516156383254874,
    "score_1h": 3.2155172413793105,
    "score_4h": 3.0,
    "score_7d": 0.9260355029585798,
    "extracted_entities": "Bonus - Anziani - 2025",
    "saturation_score": 5.0
  },
  {
    "rank": 29,
    "entity": "gp miami orari",
    "discover_score": 0.648000067602404,
    "score_1h": 0.0,
    "score_4h": 0.6995798319327731,
    "score_7d": 1.9378698224852071,
    "extracted_entities": "Gran Premio - Miami - Orari",
    "saturation_score": -1.0
  },
  {
    "rank": 47,
    "entity": "rockstar games gta 6",
    "discover_score": 0.57613072764681,
    "score_1h": 1.4396551724137931,
    "score_4h": 0.24789915966386555,
    "score_7d": 1.9556213017751478,
    "extracted_entities": "Rockstar Games - GTA 6 - Videogiochi - Sviluppo - Uscita",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "martina colombari",
    "discover_score": 0.5523831162897912,
    "score_1h": 0.5775862068965517,
    "score_4h": 0.13445378151260504,
    "score_7d": 1.6153846153846154,
    "extracted_entities": "Martina Colombari - Personaggio pubblico - Attrice - Modella",
    "saturation_score": 82.0
  },
  {
    "rank": 30,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.5066191991196493,
    "score_1h": 8.120689655172413,
    "score_4h": 2.2563025210084033,
    "score_7d": 1.014792899408284,
    "extracted_entities": "Beautiful - Anticipazioni - Soap Opera",
    "saturation_score": 4.0
  },
  {
    "rank": 27,
    "entity": "giovanardi",
    "discover_score": 0.4820461082060075,
    "score_1h": 1.3448275862068966,
    "score_4h": 2.2521008403361344,
    "score_7d": 0.8994082840236686,
    "extracted_entities": "Carlo Giovanardi - Politica Italiana - Senatore - Governo Italiano",
    "saturation_score": 137.0
  },
  {
    "rank": 48,
    "entity": "benny blanco",
    "discover_score": 0.4768487461046457,
    "score_1h": 0.0,
    "score_4h": 0.7100840336134453,
    "score_7d": 1.4349112426035502,
    "extracted_entities": "Benny Blanco - Produttore musicale - Cantautore - Collaborazioni - Industria musicale",
    "saturation_score": 2.0
  },
  {
    "rank": 14,
    "entity": "cristóbal lópez romero",
    "discover_score": 0.4467624337376459,
    "score_1h": 5.241379310344827,
    "score_4h": 2.0714285714285716,
    "score_7d": 0.6715976331360947,
    "extracted_entities": "Cristóbal López Romero - Persona",
    "saturation_score": 3.0
  },
  {
    "rank": 50,
    "entity": "niko pandetta",
    "discover_score": 0.3800744219973142,
    "score_1h": 0.31896551724137934,
    "score_4h": 1.6323529411764706,
    "score_7d": 0.7988165680473372,
    "extracted_entities": "Niko Pandetta - Cantante - Musica - Trap - Italia",
    "saturation_score": 10.0
  },
  {
    "rank": 26,
    "entity": "bulega",
    "discover_score": 0.3256708932386515,
    "score_1h": 6.114699006428989,
    "score_4h": 2.5399159663865545,
    "score_7d": 0.26331360946745563,
    "extracted_entities": "Bulega - Motociclismo - Pilota - Corse",
    "saturation_score": 60.0
  },
  {
    "rank": 15,
    "entity": "scossa terremoto cile",
    "discover_score": 0.29842978685913607,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13655462184873948,
    "score_7d": 0.6597633136094674,
    "extracted_entities": "Scossa - Terremoto - Cile",
    "saturation_score": 1.0
  },
  {
    "rank": 34,
    "entity": "colombaccio",
    "discover_score": 0.2641390692121614,
    "score_1h": 0.8189655172413793,
    "score_4h": 0.6995798319327731,
    "score_7d": 0.5,
    "extracted_entities": "Colombaccio - Uccello - Fauna selvatica - Caccia - Habitat",
    "saturation_score": 3.0
  },
  {
    "rank": 36,
    "entity": "tyra caterina grant",
    "discover_score": 0.22232931738417153,
    "score_1h": 1.489041496201052,
    "score_4h": 0.7247899159663866,
    "score_7d": 0.32840236686390534,
    "extracted_entities": "Tyra - Caterina - Grant",
    "saturation_score": 7.0
  },
  {
    "rank": 37,
    "entity": "wind warning",
    "discover_score": 0.19527778512512117,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.40236686390532544,
    "extracted_entities": "Wind - Warning - Weather Alert - Severe Weather - Meteorology",
    "saturation_score": 1.0
  },
  {
    "rank": 23,
    "entity": "gianni alemanno",
    "discover_score": 0.19202738894112106,
    "score_1h": 0.5406195207481006,
    "score_4h": 0.7584033613445379,
    "score_7d": 0.15680473372781065,
    "extracted_entities": "Gianni Alemanno - Politica - Italia",
    "saturation_score": 27.0
  },
  {
    "rank": 25,
    "entity": "rb lipsia - bayern monaco",
    "discover_score": 0.18945112698899144,
    "score_1h": 11.414523670368204,
    "score_4h": 0.9516806722689075,
    "score_7d": 0.11242603550295859,
    "extracted_entities": "RB Lipsia - Bayern Monaco - Calcio - Bundesliga - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 33,
    "entity": "anthony albanese",
    "discover_score": 0.17504047840901604,
    "score_1h": 0.0,
    "score_4h": 0.04201680672268908,
    "score_7d": 0.29289940828402367,
    "extracted_entities": "Anthony Albanese - Politica australiana - Primo Ministro Australia",
    "saturation_score": 10.0
  },
  {
    "rank": 40,
    "entity": "inter verona dove vederla",
    "discover_score": 0.14853453266791022,
    "score_1h": 1.8009935710111047,
    "score_4h": 0.35504201680672265,
    "score_7d": 0.11834319526627218,
    "extracted_entities": "Inter - Verona - Partita - Dove vederla - Calcio",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "francesca benedetti",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "elezioni australia",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "termoli",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "andrea iannone",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "steven adams",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "nairobi",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "chuck",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "pietrasanta",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "giro d'italia 2025 tappe",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "porto - moreirense",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "superenalotto 2 maggio 2025",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "piraino tennis",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "barcellona squalificato",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "ryan garcia",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "rayo vallecano - getafe",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "kenya",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "eleonora di miele",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "classifica oroscopo settimana",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "ben affleck",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "bayesian",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "harry",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "selena gomez",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "sprint race",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "alba parietti",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "roma inter primavera",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "francesco paolantoni",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "bobo vieri",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "svuotare cestino nascosto whatsapp",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "fedez e clara",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "bali",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "gt vs srh",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "cremona",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "buongiorno sabato 3 maggio 2025",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "ruud krol",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "senigallia",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "casper ruud",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "heidenheim - bochum",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "alianza lima - cienciano",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "man city vs wolves",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "hulk",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "torino",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "lady bloodfight",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "cardinale pietro parolin",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "noto",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "sylvester stallone",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "iva zanicchi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "francesco oppini",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "islamabad united vs peshawar zalmi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "foca monaca",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "nizza - reims",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "blake lively",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "manchester city",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "meteo bergamo",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "festa mamma 2025",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "peccioli",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "oderzo",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "borja mayoral",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "fast food restaurant",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "cerundolo",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "luca nardi",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "tennis",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "oroscopo scorpione",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "andrea pellegrino",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "francisco cerúndolo",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "oliver skardy",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "internet",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "draper ranking",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "nibali",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "colapinto",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "universitatea craiova - rapid bucureşti",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "joao mario",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "vigilance précipitations",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "michelle hunziker",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "مان سيتي ضد وولفرهامبتون",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "paolo rossi",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "guerra ucraina russia trump",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "ultima estrazione eurojackpot",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "trump pope",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "ingv",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "manolo santana",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "mazzarri",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "cecilia rodriguez",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "fausto bertinotti",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "pietro genuardi",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "tennis live",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "angel fernandez artime cardinale",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "chiara ferragni",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "bill gates",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "elongazione",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "doc",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "toronews",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "vialli",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "danieli",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "ligue 2",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "gigi riva",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "puntata speciale affari tuoi",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "extra omnes",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "gujarat titans vs sunrisers hyderabad match scorecard",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "fondaco dei tedeschi",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "mario andretti",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "valeria bartolucci",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "madonna di campiglio",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "tomaso montanari",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "anticipazioni amici settima puntata",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "emanuela rossi",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "nainggolan",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "milano meteo",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "lady gaga",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "il gusto dell'amore",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "dino giarrusso",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "tommy cash",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "la notte nel cuore serie turca",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "zanicchi",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "maradona",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "pokemon pocket golden week",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "geraint thomas",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "elodie amici",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "metro a roma",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "sean combs",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "elisabetta gardini",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "michelle",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "the four seasons serie",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "che adams",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "khartoum",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "victoria beckham",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "emanuele filiberto di savoia",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "brain rot",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "ministro urso",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "ozzy osbourne",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "un posto al sole",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "vincicasa",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "katia follesa",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "paolo crepet",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "gerri fiction",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "hamilton ferrari",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "incendio assisi",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "lametino",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "met gala 2025",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "bergamo news",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "stuttgart",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "ambra battilana gutierrez",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "kylie jenner",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "stan wawrinka",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "uomini e donne 2 maggio 2025",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "cardinale gugerotti",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "bruce willis",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "francesco paolantoni e barbara foria",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "oggi in tv canale 5",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-05-03 13:00:24",
  "trends_count": 198,
  "top_score": 19.967075918211588,
  "runtime_minutes": 3.079281187057495,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Oggi, i venti del tempo soffiano sui binari del cambiamento politico e sulle onde del calcio. I temi emergenti sono il potere delle urne e gli episodi calcistici. Il \"referendum 2025\" (DScore: 11.0) palesa una nicchia di opportunità per contenuti mirati, poiché l'interesse recente è promettente e la saturazione è bassa. Parimenti, la tensione elettorale è viva con la \"scossa terremoto Bologna\" (DScore: 3.3), segno di un'Italia in movimento e richiamo per gli esploratori della notizia poco coperta.\n\nIn questo panorama, l'allerta si rivolge alla competizione nell'arena calcistica. Sebbene \"torino - venezia\" sia in vetta (Rank: 1), la saturazione quasi dirompente (Sat: 988) è un chiaro monito: il terreno è già affollato di voci urlanti. Analogamente, il fervore per \"napoli lecce\" (DScore: 4.7, Sat: 6) suggerisce di cavalcare oggi il vento della popolarità.\n\nIl consiglio: camminate leggeri tra le pieghe di questi trend, scegliete argomenti che risuonano non solo nel presente, ma che abbiano radici pronte a germogliare domani, abbracciando il contenuto che ancora aspetta di essere creato."
};
