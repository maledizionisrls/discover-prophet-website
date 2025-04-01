const trendData = [
  {
    "rank": 12,
    "entity": "rolex",
    "discover_score": 12.307332011150386,
    "score_1h": 37.275862068965516,
    "score_4h": 20.3718487394958,
    "score_7d": 20.488165680473372,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Marchio - Alta orologeria"
  },
  {
    "rank": 3,
    "entity": "sara campanella",
    "discover_score": 12.078364784266387,
    "score_1h": 62.77586206896551,
    "score_4h": 50.14285714285714,
    "score_7d": 7.26923076923077,
    "extracted_entities": "Sara Campanella"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 8.786854659071192,
    "score_1h": 46.353448275862064,
    "score_4h": 43.292016806722685,
    "score_7d": 2.505917159763314,
    "extracted_entities": "Grande Fratello 2025 - Vincitore"
  },
  {
    "rank": 16,
    "entity": "grande fratello",
    "discover_score": 5.502380399847342,
    "score_1h": 73.37068965517241,
    "score_4h": 38.596638655462186,
    "score_7d": 5.020710059171598,
    "extracted_entities": "Grande Fratello - Reality Show - Televisione - Concorrenti - Italia"
  },
  {
    "rank": 20,
    "entity": "1 aprile",
    "discover_score": 4.909677900505388,
    "score_1h": 56.58620689655172,
    "score_4h": 35.83403361344538,
    "score_7d": 4.8076923076923075,
    "extracted_entities": "Pesce d'aprile - Tradizioni - Scherzi - Eventi storici - Calendario"
  },
  {
    "rank": 2,
    "entity": "lazio - torino",
    "discover_score": 4.082475016092968,
    "score_1h": 10.301724137931034,
    "score_4h": 16.92857142857143,
    "score_7d": 3.1242603550295858,
    "extracted_entities": "Lazio - Torino - Serie A - Calcio - Partita"
  },
  {
    "rank": 11,
    "entity": "lacerenza",
    "discover_score": 4.033173912417846,
    "score_1h": 61.25,
    "score_4h": 13.478991596638654,
    "score_7d": 6.689349112426036,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 4,
    "entity": "paola motta giornalista sky",
    "discover_score": 3.970981089306473,
    "score_1h": 3.577586206896552,
    "score_4h": 3.3193277310924367,
    "score_7d": 7.115384615384615,
    "extracted_entities": "Paola Motta - Giornalista - Sky"
  },
  {
    "rank": 6,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 2.8807347953467684,
    "score_1h": 0.09482758620689655,
    "score_4h": 3.5168067226890756,
    "score_7d": 5.757396449704142,
    "extracted_entities": "Banconote - 50 euro - Ritiro - Valuta - Eurozona"
  },
  {
    "rank": 50,
    "entity": "whatsapp intelligenza artificiale",
    "discover_score": 2.839595611905847,
    "score_1h": 0.0,
    "score_4h": 0.7184873949579832,
    "score_7d": 9.609467455621301,
    "extracted_entities": "WhatsApp - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 29,
    "entity": "bonus bollette",
    "discover_score": 2.51486563042611,
    "score_1h": 11.18103448275862,
    "score_4h": 3.4831932773109244,
    "score_7d": 7.079881656804734,
    "extracted_entities": "Bonus - Bollette - Agevolazioni - Energia"
  },
  {
    "rank": 14,
    "entity": "apple intelligence",
    "discover_score": 2.0040165055888735,
    "score_1h": 6.060344827586206,
    "score_4h": 10.65126050420168,
    "score_7d": 3.0207100591715976,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 7,
    "entity": "tredici pietro",
    "discover_score": 1.5228822612557136,
    "score_1h": 13.887931034482758,
    "score_4h": 12.819327731092436,
    "score_7d": 0.9556213017751479,
    "extracted_entities": "Tredici Pietro - Musica - Cantante - Italia"
  },
  {
    "rank": 49,
    "entity": "angelina mango",
    "discover_score": 1.4519867585513586,
    "score_1h": 1.5862068965517242,
    "score_4h": 0.9474789915966386,
    "score_7d": 4.997041420118343,
    "extracted_entities": "Angelina Mango"
  },
  {
    "rank": 23,
    "entity": "francia marine le pen",
    "discover_score": 1.387195663507071,
    "score_1h": 0.8189655172413792,
    "score_4h": 0.6105973770261243,
    "score_7d": 4.284023668639053,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 21,
    "entity": "abate",
    "discover_score": 1.3495790281323852,
    "score_1h": 4.051724137931035,
    "score_4h": 3.4747899159663866,
    "score_7d": 3.328402366863905,
    "extracted_entities": "Abate - Religione - Monastero - Clero"
  },
  {
    "rank": 5,
    "entity": "verona - parma",
    "discover_score": 1.2669578886048332,
    "score_1h": 2.9913793103448274,
    "score_4h": 0.7100840336134453,
    "score_7d": 2.8550295857988166,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 48,
    "entity": "greta scarano",
    "discover_score": 1.1822027585690222,
    "score_1h": 1.1120689655172413,
    "score_4h": 1.5798319327731092,
    "score_7d": 3.8579881656804735,
    "extracted_entities": "Greta Scarano - Attrice - Filmografia - Serie TV - Italia"
  },
  {
    "rank": 44,
    "entity": "blow",
    "discover_score": 1.0558634183480526,
    "score_1h": 0.0,
    "score_4h": 1.5403027319714497,
    "score_7d": 3.363905325443787,
    "extracted_entities": "Film - Musica - Colonna sonora - Artisti - Cultura pop"
  },
  {
    "rank": 13,
    "entity": "virginia giuffre",
    "discover_score": 1.0285561753376187,
    "score_1h": 0.0,
    "score_4h": 0.7142857142857142,
    "score_7d": 2.8076923076923075,
    "extracted_entities": "Virginia Giuffre - Caso Epstein - Traffico sessuale - Vittime - Giustizia"
  },
  {
    "rank": 34,
    "entity": "conceicao",
    "discover_score": 1.0244569442238745,
    "score_1h": 3.068965517241379,
    "score_4h": 2.3172268907563023,
    "score_7d": 2.893491124260355,
    "extracted_entities": "Calcio - Allenatore - Benfica - Porto - Brasile"
  },
  {
    "rank": 36,
    "entity": "taiwan",
    "discover_score": 1.015122823793493,
    "score_1h": 1.3620689655172413,
    "score_4h": 1.1932773109243697,
    "score_7d": 3.201183431952663,
    "extracted_entities": "Taiwan - Asia - Politica - Economia - Tecnologia"
  },
  {
    "rank": 9,
    "entity": "francesca brandoli",
    "discover_score": 0.9732877301183293,
    "score_1h": 0.0,
    "score_4h": 0.6764705882352942,
    "score_7d": 2.4644970414201186,
    "extracted_entities": "Francesca Brandoli"
  },
  {
    "rank": 41,
    "entity": "entella - torres",
    "discover_score": 0.8060137992578276,
    "score_1h": 0.0,
    "score_4h": 0.03571428571428571,
    "score_7d": 2.840236686390533,
    "extracted_entities": "Entella - Torres - Calcio - Partita - Serie C"
  },
  {
    "rank": 8,
    "entity": "giovanni terzi",
    "discover_score": 0.7784681255946334,
    "score_1h": 15.422413793103448,
    "score_4h": 3.708528181146936,
    "score_7d": 1.1094674556213018,
    "extracted_entities": "Giovanni Terzi"
  },
  {
    "rank": 46,
    "entity": "costanza quante puntate sono",
    "discover_score": 0.7676879628822831,
    "score_1h": 0.0,
    "score_4h": 0.17016806722689076,
    "score_7d": 2.710059171597633,
    "extracted_entities": "Costanza - Puntate - Serie TV"
  },
  {
    "rank": 10,
    "entity": "monica setta",
    "discover_score": 0.6517304869871843,
    "score_1h": 5.2844827586206895,
    "score_4h": 5.976890756302521,
    "score_7d": 0.3698224852071006,
    "extracted_entities": "Monica Setta - Giornalista - Televisione - Italia"
  },
  {
    "rank": 15,
    "entity": "noipa cedolino",
    "discover_score": 0.6114924066708388,
    "score_1h": 1.1896551724137931,
    "score_4h": 0.8907563025210083,
    "score_7d": 1.5355029585798816,
    "extracted_entities": "NoiPA - Cedolino - Stipendio - Pubblica Amministrazione"
  },
  {
    "rank": 32,
    "entity": "lakers - rockets",
    "discover_score": 0.5934549074095951,
    "score_1h": 0.28448275862068967,
    "score_4h": 0.3760504201680672,
    "score_7d": 1.8609467455621302,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket"
  },
  {
    "rank": 18,
    "entity": "ronaldo inter",
    "discover_score": 0.5757249200097042,
    "score_1h": 2.2758620689655173,
    "score_4h": 1.9390756302521008,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Ronaldo - Inter - Calcio"
  },
  {
    "rank": 35,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.5294719526888163,
    "score_1h": 1.6120689655172413,
    "score_4h": 0.4054621848739496,
    "score_7d": 1.63905325443787,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 27,
    "entity": "empoli bologna",
    "discover_score": 0.4965520567314644,
    "score_1h": 3.060344827586207,
    "score_4h": 2.5798319327731094,
    "score_7d": 0.8698224852071006,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 28,
    "entity": "paratici",
    "discover_score": 0.47566070214149614,
    "score_1h": 2.836206896551724,
    "score_4h": 1.7331932773109244,
    "score_7d": 1.0177514792899407,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Tottenham Hotspur - Dirigente sportivo"
  },
  {
    "rank": 47,
    "entity": "virtus bologna - reggiana",
    "discover_score": 0.4671549222271831,
    "score_1h": 0.4655172413793104,
    "score_4h": 0.2184873949579832,
    "score_7d": 1.526627218934911,
    "extracted_entities": "Virtus Bologna - Reggiana - Pallacanestro - Serie A - Derby"
  },
  {
    "rank": 39,
    "entity": "napoli - olimpia milano",
    "discover_score": 0.3977623867910393,
    "score_1h": 0.0,
    "score_4h": 0.22478991596638653,
    "score_7d": 1.198224852071006,
    "extracted_entities": "Napoli - Olimpia Milano - Basket - Partita - Serie A"
  },
  {
    "rank": 25,
    "entity": "paros",
    "discover_score": 0.39411509121377347,
    "score_1h": 2.78448275862069,
    "score_4h": 0.9012605042016807,
    "score_7d": 0.9053254437869822,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Vacanze"
  },
  {
    "rank": 43,
    "entity": "monte amiata",
    "discover_score": 0.3696460779170392,
    "score_1h": 0.14655172413793102,
    "score_4h": 0.4726890756302521,
    "score_7d": 1.0355029585798816,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursioni"
  },
  {
    "rank": 40,
    "entity": "spider man brand new day",
    "discover_score": 0.2999389433516437,
    "score_1h": 0.0,
    "score_4h": 1.0861344537815127,
    "score_7d": 0.5710059171597632,
    "extracted_entities": "Spider-Man - Brand New Day - Fumetto - Marvel Comics - Peter Parker"
  },
  {
    "rank": 22,
    "entity": "brenda lodigiani",
    "discover_score": 0.263788188534172,
    "score_1h": 2.586206896551724,
    "score_4h": 0.8151260504201681,
    "score_7d": 0.41124260355029585,
    "extracted_entities": "Brenda Lodigiani - Attrice - Comica"
  },
  {
    "rank": 26,
    "entity": "loris karius",
    "discover_score": 0.23434536609155765,
    "score_1h": 0.5258620689655172,
    "score_4h": 0.5817042298090784,
    "score_7d": 0.37573964497041423,
    "extracted_entities": "Loris Karius - Calciatore - Portiere - Liverpool - Newcastle United"
  },
  {
    "rank": 19,
    "entity": "assegno unico pagamenti",
    "discover_score": 0.20508357640776337,
    "score_1h": 0.0,
    "score_4h": 0.3529411764705882,
    "score_7d": 0.28402366863905326,
    "extracted_entities": "Assegno Unico - Pagamenti - Famiglie - INPS - Sostegno Economico"
  },
  {
    "rank": 24,
    "entity": "mamelodi - espérance",
    "discover_score": 0.18778477935185536,
    "score_1h": 2.396551724137931,
    "score_4h": 0.4600840336134454,
    "score_7d": 0.21301775147928995,
    "extracted_entities": "Mamelodi - Espérance - Calcio - Squadre - Partita"
  },
  {
    "rank": 33,
    "entity": "magalli",
    "discover_score": 0.17962453581287102,
    "score_1h": 7.844827586206897,
    "score_4h": 1.4887310572764672,
    "score_7d": 0.0,
    "extracted_entities": "Giancarlo Magalli - Televisione Italiana - Personaggio Televisivo"
  },
  {
    "rank": 38,
    "entity": "eta uk",
    "discover_score": 0.1742357019865852,
    "score_1h": 1.0862068965517242,
    "score_4h": 0.9744383108892092,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "ETA - Regno Unito - Organizzazione terroristica - Politica - Sicurezza"
  },
  {
    "rank": 31,
    "entity": "paolo guzzanti",
    "discover_score": 0.1661104618890241,
    "score_1h": 0.8793103448275862,
    "score_4h": 0.4600840336134454,
    "score_7d": 0.14792899408284024,
    "extracted_entities": "Paolo Guzzanti - Giornalismo - Politica Italiana - Italia"
  },
  {
    "rank": 30,
    "entity": "angelo madonia",
    "discover_score": 0.1650317109605714,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.1342779789740164,
    "score_7d": 0.21893491124260356,
    "extracted_entities": "Angelo Madonia"
  },
  {
    "rank": 17,
    "entity": "pesce d aprile 2025",
    "discover_score": 0.1641350407908547,
    "score_1h": 1.2672413793103448,
    "score_4h": 0.625171407475124,
    "score_7d": 0.0621301775147929,
    "extracted_entities": "Pesce d'aprile - 2025 - Scherzi - Tradizioni"
  },
  {
    "rank": 42,
    "entity": "chi vincerà il grande fratello 2025",
    "discover_score": 0.1541740481923489,
    "score_1h": 0.0,
    "score_4h": 0.14915966386554622,
    "score_7d": 0.1952662721893491,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 45,
    "entity": "ascolti tv grande fratello",
    "discover_score": 0.14018892935995508,
    "score_1h": 0.0,
    "score_4h": 0.46008403361344535,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Ascolti TV - Grande Fratello - Programma televisivo"
  },
  {
    "rank": 37,
    "entity": "mattia destro",
    "discover_score": 0.13799564206176462,
    "score_1h": 0.0,
    "score_4h": 0.2308726838015541,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Mattia Destro - Calciatore - Serie A - Italia"
  },
  {
    "rank": 51,
    "entity": "concorde",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "giulia tramontano",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "mps",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "poste italiane",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "luca nardi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "eleonora abbagnato",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "silvia salis",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "lba",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "luis henrique",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "buon martedi 1 aprile",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "stefano bollani",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "harris dickinson",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "farioli",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "aprile",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "vasco rossi",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "lecco - giana erminio",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "mediaset infinity",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "rottamazione cartelle esattoriali",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "tempostretto",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "pecco bagnaia",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "trenitalia",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "chiara grande fratello",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "allerta meteo catania",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "grindavik",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "tom hanks",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "giuditta lualdi pallavolo",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "gazzetta del sud",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "thomas muller",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "kkr vs mi",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "fabio fognini",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "cicladi",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "varenne",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "elodie",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "thunder - bulls",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "grizzlies - celtics",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "nicola piovani",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "trenord",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "ilary blasi",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "walter sabatini",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "celta vigo - las palmas",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "ekaterina antropova",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "as roma biglietti",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "bradley cooper",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "martano",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "zlatan ibrahimović",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "enrico rizzi",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "serena dandini",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "istat",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "terremoto",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "mediaset",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "mavericks - nets",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "nuvola",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "torneo di viareggio",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "danny quinn",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "asmaa uomini e donne",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "mom",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "april fools day",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "rachel zegler",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "nuova scena",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "eclissi lunare",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "petto di pollo",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "sanremonews",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "cristiano ronaldo",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "botic van de zandschulp",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "obbligo o verità",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "fareed zakaria",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "invalsi",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "meteo oggi",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "maria vittoria grande fratello",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "serie a basket",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "matteo messina denaro",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "claudio martelli",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "asroma",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "haaland",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "zeudi",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "mogol",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "biglietti lazio roma",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "panatta",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "twitch",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "eclissi lunare oggi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "the chosen",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "montepremi grande fratello",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "unicredit banca",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "celta vigo",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "oroscopo scorpione",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "crosetto",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "asma uomini e donne",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "الطقس غدًا",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "narni",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "cameron diaz",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "incidente a14",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "terremoto oggi",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "romano prodi",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "rocio munoz morales",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "verona vs parma",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "paolo bertolucci",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "isola dei famosi 2025",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "pablo escobar",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "salas",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "pedro",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "alba parietti",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "diffidati serie a",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "lakers",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "antonio di pietro",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "corrado augias",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "caterina shulha",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "jim carrey",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "rupnik",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "parma",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "carlo calenda",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "manuale per signorine",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "tobey maguire",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "jeff bezos",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "stefano de martino",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "silvia sciorilli borrelli",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "marcelo salas",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "milinkovic savic",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "elon musk",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "renzi",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "javier martinez gf",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "rebecca staffelli",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "kings league italia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "bolivia",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "volterra",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "bali",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "martelli",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "mariavittoria gf",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "pacers - kings",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "piantedosi",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "iannone",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "bertolucci tennis",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "andrew garfield",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "red bull tv",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "trento",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "ramandeep singh",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "momix roma",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "bastian muller",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "cataniatoday",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "anna ascani",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "dyson",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "corea del nord",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "vanoli",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "affori",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "nicola canonico",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "dune",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "lega basket",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "hunziker",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "wrestlemania 41",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "personal injury attorney",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "aston martin",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "meteo pescara",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "gazzettino",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "grosseto",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "paramount",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "reddit",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "kim soo-hyun",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "starlink",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "daredevil",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "guida tv",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "askatasuna",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "bill gates",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "loiodice",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "chiavari",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "castellabate",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "justin bieber",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "gianni sperti",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "musk",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "los angeles",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "palinsesto tv",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "incidente probatorio",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "manish pandey",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "javier gf",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "accardi",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "giacomo caliendo",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "swat",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "vignesh puthur",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "paramount plus",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "chatgpt down",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "valentino lazaro",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "giuseppe conte",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "elisabetta canalis",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "il trono di spade",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "classifica kings league",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 13:09:13",
  "trends_count": 237,
  "top_score": 12.307332011150386,
  "runtime_minutes": 5.818034263451894,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
