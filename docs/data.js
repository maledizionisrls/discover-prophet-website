const trendData = [
  {
    "rank": 3,
    "entity": "sara campanella",
    "discover_score": 13.354419758799194,
    "saturation_score": 1,
    "score_1h": 50.06896551724138,
    "score_4h": 54.01890756302521,
    "score_7d": 7.8931389123696825,
    "extracted_entities": "Sara Campanella"
  },
  {
    "rank": 11,
    "entity": "rolex",
    "discover_score": 10.572347550334822,
    "saturation_score": 1,
    "score_1h": 23.724137931034484,
    "score_4h": 41.26470588235294,
    "score_7d": 12.405589602704987,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Gioielleria - Collezionismo"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 8.645956812829748,
    "saturation_score": 1,
    "score_1h": 19.57758620689655,
    "score_4h": 33.92226890756302,
    "score_7d": 3.537087912087912,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 8,
    "entity": "lacerenza",
    "discover_score": 6.957642691274516,
    "saturation_score": 1,
    "score_1h": 59.06896551724138,
    "score_4h": 47.07142857142857,
    "score_7d": 4.454230064806988,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 37,
    "entity": "1 aprile",
    "discover_score": 6.230561728831807,
    "saturation_score": 1,
    "score_1h": 33.83620689655172,
    "score_4h": 57.35504201680672,
    "score_7d": 4.839549873203719,
    "extracted_entities": "Pesce d'aprile - Scherzi - Tradizioni - Eventi storici - Calendario"
  },
  {
    "rank": 47,
    "entity": "taiwan",
    "discover_score": 6.042962805861058,
    "saturation_score": 1,
    "score_1h": 1.206896551724138,
    "score_4h": 0.39705882352941174,
    "score_7d": 18.687323894054664,
    "extracted_entities": "Taiwan - Asia - Politica - Economia - Tecnologia"
  },
  {
    "rank": 17,
    "entity": "grande fratello",
    "discover_score": 5.2504433576441185,
    "saturation_score": 1,
    "score_1h": 78.0,
    "score_4h": 36.80042016806723,
    "score_7d": 4.9970061989292756,
    "extracted_entities": "Grande Fratello - Reality Show - Televisione"
  },
  {
    "rank": 44,
    "entity": "bonus bollette",
    "discover_score": 4.86389596822008,
    "saturation_score": 1,
    "score_1h": 5.577586206896552,
    "score_4h": 4.039915966386555,
    "score_7d": 14.31211256692026,
    "extracted_entities": "Bonus - Bollette - Agevolazioni - Energia"
  },
  {
    "rank": 2,
    "entity": "lazio - torino",
    "discover_score": 4.276588026194289,
    "saturation_score": 1,
    "score_1h": 3.2672413793103448,
    "score_4h": 18.955882352941174,
    "score_7d": 3.0029938010707244,
    "extracted_entities": "Lazio - Torino - Calcio - Serie A - Partita"
  },
  {
    "rank": 4,
    "entity": "paola motta giornalista sky",
    "discover_score": 4.247418532692701,
    "saturation_score": 1,
    "score_1h": 6.094827586206897,
    "score_4h": 4.756302521008403,
    "score_7d": 7.216962524654832,
    "extracted_entities": "Paola Motta - Giornalista - Sky"
  },
  {
    "rank": 13,
    "entity": "apple intelligence",
    "discover_score": 3.955546058068762,
    "saturation_score": 1,
    "score_1h": 4.836206896551724,
    "score_4h": 3.546218487394958,
    "score_7d": 9.347245703014934,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 26,
    "entity": "abate",
    "discover_score": 3.1496025276540673,
    "saturation_score": 1,
    "score_1h": 1.5775862068965516,
    "score_4h": 3.890756302521009,
    "score_7d": 8.570459988729219,
    "extracted_entities": "Religione - Monastero - Ordine monastico - Clero"
  },
  {
    "rank": 30,
    "entity": "paros",
    "discover_score": 3.016772501803159,
    "saturation_score": 1,
    "score_1h": 2.3017241379310347,
    "score_4h": 2.077731092436975,
    "score_7d": 8.934365314173006,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Spiagge"
  },
  {
    "rank": 50,
    "entity": "whatsapp intelligenza artificiale",
    "discover_score": 2.2693780054211907,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.39285714285714285,
    "score_7d": 7.8985981966751195,
    "extracted_entities": "WhatsApp - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 23,
    "entity": "paratici",
    "discover_score": 2.2258090364087493,
    "saturation_score": 1,
    "score_1h": 3.6206896551724137,
    "score_4h": 2.2815126050420167,
    "score_7d": 6.287140743871513,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Tottenham Hotspur - Dirigente sportivo"
  },
  {
    "rank": 6,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 1.9620359499231748,
    "saturation_score": 1,
    "score_1h": 8.198275862068966,
    "score_4h": 5.682773109243698,
    "score_7d": 3.3099816849816848,
    "extracted_entities": "Banconote - 50 euro - Ritiro"
  },
  {
    "rank": 22,
    "entity": "empoli bologna",
    "discover_score": 1.926162745184156,
    "saturation_score": 1,
    "score_1h": 7.948275862068965,
    "score_4h": 4.716386554621849,
    "score_7d": 4.735735418427726,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 7,
    "entity": "monica setta",
    "discover_score": 1.8838182085742408,
    "saturation_score": 1,
    "score_1h": 1.9482758620689655,
    "score_4h": 2.6890756302521006,
    "score_7d": 4.027983234714004,
    "extracted_entities": "Monica Setta"
  },
  {
    "rank": 5,
    "entity": "verona - parma",
    "discover_score": 1.422254868913404,
    "saturation_score": 1,
    "score_1h": 1.4051724137931034,
    "score_4h": 1.9180672268907564,
    "score_7d": 2.899161735700197,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 46,
    "entity": "conceicao",
    "discover_score": 1.386799301954818,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 1.2247899159663866,
    "score_7d": 4.644072273879966,
    "extracted_entities": "Calcio - Allenatore - Benfica - Brasile - Porto"
  },
  {
    "rank": 9,
    "entity": "tredici pietro",
    "discover_score": 1.3462217028956747,
    "saturation_score": 1,
    "score_1h": 12.560344827586208,
    "score_4h": 12.182773109243698,
    "score_7d": 0.8260953789799944,
    "extracted_entities": "Tredici Pietro - Musica - Cantante - Italia"
  },
  {
    "rank": 32,
    "entity": "giuseppe uomini e donne",
    "discover_score": 0.9452301426598597,
    "saturation_score": 1,
    "score_1h": 4.137931034482758,
    "score_4h": 1.6617647058823528,
    "score_7d": 2.766131304592843,
    "extracted_entities": "Giuseppe - Uomini e Donne - Programma televisivo"
  },
  {
    "rank": 27,
    "entity": "francia marine le pen",
    "discover_score": 0.9442427203472328,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.12394957983193278,
    "score_7d": 3.0988482671174977,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 35,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.8970270832094642,
    "saturation_score": 1,
    "score_1h": 0.15517241379310345,
    "score_4h": 0.4747899159663866,
    "score_7d": 2.970801634263173,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 43,
    "entity": "entella - torres",
    "discover_score": 0.8430387664299206,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.226890756302521,
    "score_7d": 2.9451958298112144,
    "extracted_entities": "Entella - Torres - Calcio - Partita - Serie C"
  },
  {
    "rank": 12,
    "entity": "virginia giuffre",
    "discover_score": 0.7554734273214258,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.680672268907563,
    "score_7d": 1.9648140321217245,
    "extracted_entities": "Virginia Giuffre - Caso Epstein - Traffico sessuale - Vittime - Giustizia"
  },
  {
    "rank": 41,
    "entity": "napoli - olimpia milano",
    "discover_score": 0.687298450365183,
    "saturation_score": 1,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.21218487394957983,
    "score_7d": 2.3471400394477318,
    "extracted_entities": "Napoli - Olimpia Milano - Basket - Serie A - Partita"
  },
  {
    "rank": 18,
    "entity": "pesce d aprile 2025",
    "discover_score": 0.6796281089587458,
    "saturation_score": 1,
    "score_1h": 1.7586206896551724,
    "score_4h": 0.7100840336134454,
    "score_7d": 1.8720238095238095,
    "extracted_entities": "Pesce d'aprile - 2025 - Scherzi - Tradizioni"
  },
  {
    "rank": 49,
    "entity": "monte amiata",
    "discover_score": 0.64889848869111,
    "saturation_score": 1,
    "score_1h": 0.7672413793103449,
    "score_4h": 1.5441176470588234,
    "score_7d": 1.8959389969005356,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursioni"
  },
  {
    "rank": 28,
    "entity": "loris karius",
    "discover_score": 0.6481498210983347,
    "saturation_score": 1,
    "score_1h": 0.7627118644067796,
    "score_4h": 0.33403361344537813,
    "score_7d": 2.026803324880248,
    "extracted_entities": "Loris Karius - Calciatore - Portiere - Liverpool - Newcastle United"
  },
  {
    "rank": 38,
    "entity": "chi vincerà il grande fratello 2025",
    "discover_score": 0.6445250073375168,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 2.2167864187094954,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 20,
    "entity": "gianni sperti",
    "discover_score": 0.6216895711509024,
    "saturation_score": 1,
    "score_1h": 6.2844827586206895,
    "score_4h": 1.846638655462185,
    "score_7d": 1.4104677373908143,
    "extracted_entities": "Gianni Sperti - Personaggio televisivo - Opinionista - Italia"
  },
  {
    "rank": 42,
    "entity": "spider man brand new day",
    "discover_score": 0.5938139693828326,
    "saturation_score": 1,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.13445378151260504,
    "score_7d": 2.0198119188503805,
    "extracted_entities": "Spider-Man - Brand New Day - Fumetto - Marvel Comics - Peter Parker"
  },
  {
    "rank": 15,
    "entity": "maria latella",
    "discover_score": 0.4867167821654385,
    "saturation_score": 1,
    "score_1h": 13.810344827586206,
    "score_4h": 2.8424369747899156,
    "score_7d": 0.6344040574809805,
    "extracted_entities": "Maria Latella"
  },
  {
    "rank": 48,
    "entity": "virtus bologna - reggiana",
    "discover_score": 0.47818649589216966,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 0.15546218487394958,
    "score_7d": 1.5947802197802197,
    "extracted_entities": "Virtus Bologna - Reggiana - Pallacanestro - Serie A - Derby"
  },
  {
    "rank": 21,
    "entity": "ronaldo inter",
    "discover_score": 0.47810394754301444,
    "saturation_score": 1,
    "score_1h": 1.7241379310344827,
    "score_4h": 1.745798319327731,
    "score_7d": 0.9526627218934911,
    "extracted_entities": "Ronaldo - Inter - Calcio"
  },
  {
    "rank": 14,
    "entity": "noipa cedolino",
    "discover_score": 0.42916139038440737,
    "saturation_score": 1,
    "score_1h": 1.0344827586206897,
    "score_4h": 3.6785714285714284,
    "score_7d": 0.26778670047900816,
    "extracted_entities": "NoiPA - Cedolino - Stipendio - Pubblica Amministrazione - Portale Online"
  },
  {
    "rank": 31,
    "entity": "brenda lodigiani",
    "discover_score": 0.41498005208096,
    "saturation_score": 1,
    "score_1h": 0.0,
    "score_4h": 1.2058823529411764,
    "score_7d": 0.9502852916314455,
    "extracted_entities": "Brenda Lodigiani - Attrice - Comica - Televisione"
  },
  {
    "rank": 10,
    "entity": "giovanni terzi",
    "discover_score": 0.4116163648896349,
    "saturation_score": 1,
    "score_1h": 18.310344827586206,
    "score_4h": 3.5504201680672267,
    "score_7d": 0.1926070724147647,
    "extracted_entities": "Giovanni Terzi"
  },
  {
    "rank": 33,
    "entity": "lakers - rockets",
    "discover_score": 0.4013422232717633,
    "saturation_score": 1,
    "score_1h": 0.5862068965517241,
    "score_4h": 0.14915966386554622,
    "score_7d": 1.1965694561848408,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket"
  },
  {
    "rank": 29,
    "entity": "mamelodi - espérance",
    "discover_score": 0.34779617211490804,
    "saturation_score": 1,
    "score_1h": 0.9595265926358854,
    "score_4h": 0.27941176470588236,
    "score_7d": 0.92291842772612,
    "extracted_entities": "Mamelodi - Espérance - Calcio - Squadre - Partita"
  },
  {
    "rank": 19,
    "entity": "paolo guzzanti",
    "discover_score": 0.3233021338362006,
    "saturation_score": 1,
    "score_1h": 5.7844827586206895,
    "score_4h": 1.3487394957983194,
    "score_7d": 0.4793427726120034,
    "extracted_entities": "Paolo Guzzanti - Giornalismo - Politica Italiana - Scrittore"
  },
  {
    "rank": 16,
    "entity": "arturo brachetti",
    "discover_score": 0.32097724757848695,
    "saturation_score": 1,
    "score_1h": 10.46551724137931,
    "score_4h": 2.2478991596638656,
    "score_7d": 0.24330797407720484,
    "extracted_entities": "Arturo Brachetti - Illusionismo - Spettacolo teatrale"
  },
  {
    "rank": 39,
    "entity": "assegno unico pagamenti",
    "discover_score": 0.3025061801554616,
    "saturation_score": 1,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.15126050420168066,
    "score_7d": 0.8262362637362637,
    "extracted_entities": "Assegno Unico - Pagamenti - Famiglie - INPS - Sostegno Economico"
  },
  {
    "rank": 25,
    "entity": "lsg vs pbks",
    "discover_score": 0.2983127067772415,
    "saturation_score": 1,
    "score_1h": 7.698275862068966,
    "score_4h": 1.7352941176470589,
    "score_7d": 0.33752465483234717,
    "extracted_entities": "LSG - PBKS - IPL - Cricket - Partita"
  },
  {
    "rank": 24,
    "entity": "angelo madonia",
    "discover_score": 0.2617603876468871,
    "saturation_score": 1,
    "score_1h": 2.103448275862069,
    "score_4h": 0.9579831932773109,
    "score_7d": 0.37957875457875456,
    "extracted_entities": "Angelo Madonia"
  },
  {
    "rank": 40,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.23381813078272648,
    "saturation_score": 1,
    "score_1h": 1.6293103448275863,
    "score_4h": 0.634453781512605,
    "score_7d": 0.4112778247393632,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience - Misurazione"
  },
  {
    "rank": 34,
    "entity": "rosanna uomini e donne",
    "discover_score": 0.1772687997881252,
    "saturation_score": 1,
    "score_1h": 3.982758620689655,
    "score_4h": 0.9453781512605042,
    "score_7d": 0.09219146238377009,
    "extracted_entities": "Rosanna - Uomini e Donne - Programma TV"
  },
  {
    "rank": 45,
    "entity": "blow",
    "discover_score": 0.161179558237925,
    "saturation_score": 1,
    "score_1h": 1.6206896551724137,
    "score_4h": 0.5945378151260504,
    "score_7d": 0.12489433643279796,
    "extracted_entities": "Film - Musica - Canzone - Colpo - Soffio"
  },
  {
    "rank": 36,
    "entity": "mattia destro",
    "discover_score": 0.1462046400638831,
    "saturation_score": 1,
    "score_1h": 0.25,
    "score_4h": 0.42647058823529416,
    "score_7d": 0.08581642716258102,
    "extracted_entities": "Mattia Destro - Calciatore - Serie A - Italia"
  },
  {
    "rank": 51,
    "entity": "costanza quante puntate sono",
    "discover_score": 0.09855641515192037,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "angelina mango",
    "discover_score": 0.09836816773278892,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "eleonora abbagnato",
    "discover_score": 0.09818420346099963,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "luis henrique",
    "discover_score": 0.09800434553511525,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "mps",
    "discover_score": 0.09782842758707197,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "poste italiane",
    "discover_score": 0.0976562928886095,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "lba",
    "discover_score": 0.09748779363109165,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "greta scarano",
    "discover_score": 0.09732279027076805,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "buon martedi 1 aprile",
    "discover_score": 0.09716115093251035,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "concorde",
    "discover_score": 0.09700275086590245,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "magalli",
    "discover_score": 0.096847471948296,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "luca nardi",
    "discover_score": 0.09669520223007592,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "silvia salis",
    "discover_score": 0.0965458355179304,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "aprile",
    "discover_score": 0.09639927099239892,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "lecco - giana erminio",
    "discover_score": 0.0962554128563897,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "mediaset infinity",
    "discover_score": 0.09611417001172222,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "rottamazione cartelle esattoriali",
    "discover_score": 0.09597545576107192,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "giulia tramontano",
    "discover_score": 0.09583918753297341,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "un posto al sole anticipazioni",
    "discover_score": 0.09570528662778736,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "harris dickinson",
    "discover_score": 0.09557367798275299,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "chiara grande fratello",
    "discover_score": 0.09544428995444114,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "trenitalia",
    "discover_score": 0.09531705411709313,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "stefano bollani",
    "discover_score": 0.09519190507548161,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "vasco rossi",
    "discover_score": 0.09506878029106357,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "giuditta lualdi pallavolo",
    "discover_score": 0.0949476199203152,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "eta uk",
    "discover_score": 0.09482836666424431,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "gazzetta del sud",
    "discover_score": 0.09471096562817122,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "allerta meteo catania",
    "discover_score": 0.09459536419095324,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "farioli",
    "discover_score": 0.09448151188290471,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "fabio fognini",
    "discover_score": 0.09436936027173116,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "elodie",
    "discover_score": 0.094258862855859,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "nicola piovani",
    "discover_score": 0.09414997496459536,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "grizzlies - celtics",
    "discover_score": 0.09404265366460368,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "thunder - bulls",
    "discover_score": 0.09393685767222369,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "tom hanks",
    "discover_score": 0.09383254727120618,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "trenord",
    "discover_score": 0.09372968423546808,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "ilary blasi",
    "discover_score": 0.09362823175650699,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "celta vigo - las palmas",
    "discover_score": 0.09352815437514386,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "pecco bagnaia",
    "discover_score": 0.09342941791728956,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "as roma biglietti",
    "discover_score": 0.09333198943345576,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "grindavik",
    "discover_score": 0.09323583714175261,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "ekaterina antropova",
    "discover_score": 0.09314093037413629,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "walter sabatini",
    "discover_score": 0.09304723952568791,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "bradley cooper",
    "discover_score": 0.09295473600672219,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "cicladi",
    "discover_score": 0.09286339219753927,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "martano",
    "discover_score": 0.09277318140564819,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "varenne",
    "discover_score": 0.09268407782530214,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "zlatan ibrahimović",
    "discover_score": 0.09259605649919832,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "serena dandini",
    "discover_score": 0.09250909328220575,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "mediaset",
    "discover_score": 0.09242316480699417,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "terremoto",
    "discover_score": 0.09233824845144649,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "torneo di viareggio",
    "discover_score": 0.09225432230774548,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "istat",
    "discover_score": 0.09217136515303313,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "mavericks - nets",
    "discover_score": 0.09208935642154824,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "mom",
    "discover_score": 0.09200827617815434,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "nuvola",
    "discover_score": 0.09192810509317567,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "enrico rizzi",
    "discover_score": 0.09184882441846551,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "rachel zegler",
    "discover_score": 0.09177041596463477,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "april fools day",
    "discover_score": 0.09169286207937509,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "nuova scena",
    "discover_score": 0.09161614562681378,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "eclissi lunare",
    "discover_score": 0.09154024996784299,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "ashwani kumar",
    "discover_score": 0.09146515894136831,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "petto di pollo",
    "discover_score": 0.09139085684642648,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "sanremonews",
    "discover_score": 0.09131732842512419,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "botic van de zandschulp",
    "discover_score": 0.09124455884635378,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "obbligo o verità",
    "discover_score": 0.09117253369024364,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "cristiano ronaldo",
    "discover_score": 0.0911012389333045,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "fareed zakaria",
    "discover_score": 0.0910306609342344,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "mediaset play",
    "discover_score": 0.09096078642034822,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "serie a basket",
    "discover_score": 0.09089160247459882,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "maria vittoria grande fratello",
    "discover_score": 0.09082309652315983,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "matteo messina denaro",
    "discover_score": 0.09075525632354065,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "claudio martelli",
    "discover_score": 0.0906880699532074,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "meteo oggi",
    "discover_score": 0.09062152579868396,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "haaland",
    "discover_score": 0.09055561254510894,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "invalsi",
    "discover_score": 0.09049031916622662,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "mogol",
    "discover_score": 0.09042563491478989,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "zeudi",
    "discover_score": 0.09036154931335562,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "lalaziosiamonoi",
    "discover_score": 0.09029805214545304,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "twitch",
    "discover_score": 0.09023513344710772,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "panatta",
    "discover_score": 0.09017278349870363,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "eclissi lunare oggi",
    "discover_score": 0.09011099281716795,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "asroma",
    "discover_score": 0.09004975214846297,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "montepremi grande fratello",
    "discover_score": 0.08998905246037105,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "celta vigo",
    "discover_score": 0.08992888493555902,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "الطقس غدًا",
    "discover_score": 0.0898692409649093,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "the chosen",
    "discover_score": 0.0898101121411054,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "cameron diaz",
    "discover_score": 0.08975149025246065,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "oroscopo scorpione",
    "discover_score": 0.08969336727697877,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "incidente a14",
    "discover_score": 0.08963573537663638,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "unicredit banca",
    "discover_score": 0.08957858689187757,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "romano prodi",
    "discover_score": 0.08952191433631083,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "terremoto oggi",
    "discover_score": 0.08946571039160013,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "rocio munoz morales",
    "discover_score": 0.08940996790254124,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "verona vs parma",
    "discover_score": 0.08935467987231561,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "paolo bertolucci",
    "discover_score": 0.08929983945791409,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "isola dei famosi 2025",
    "discover_score": 0.08924543996572334,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "salas",
    "discover_score": 0.08919147484726811,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "pablo escobar",
    "discover_score": 0.08913793769510281,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "pedro",
    "discover_score": 0.08908482223884619,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "narni",
    "discover_score": 0.08903212234135328,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "crosetto",
    "discover_score": 0.08897983199501883,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "alba parietti",
    "discover_score": 0.08892794531820698,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "diffidati serie a",
    "discover_score": 0.08887645655180217,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "antonio di pietro",
    "discover_score": 0.08882536005587613,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "corrado augias",
    "discover_score": 0.08877465030646665,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "caterina shulha",
    "discover_score": 0.08872432189246328,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "jim carrey",
    "discover_score": 0.08867436951259627,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "parma",
    "discover_score": 0.08862478797252424,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.0885755721820169,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "carlo calenda",
    "discover_score": 0.08852671715222935,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "tobey maguire",
    "discover_score": 0.08847821799306398,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "jeff bezos",
    "discover_score": 0.08843006991061714,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "manuale per signorine",
    "discover_score": 0.08838226820470695,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "stefano de martino",
    "discover_score": 0.0883348082664794,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "silvia sciorilli borrelli",
    "discover_score": 0.08828768557608978,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "marcelo salas",
    "discover_score": 0.08824089570045654,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "rupnik",
    "discover_score": 0.088194434291085,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "milinkovic savic",
    "discover_score": 0.08814829708195837,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "elon musk",
    "discover_score": 0.08810247988749324,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "renzi",
    "discover_score": 0.08805697860055793,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "javier martinez gf",
    "discover_score": 0.08801178919055067,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "bolivia",
    "discover_score": 0.08796690770153576,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "rebecca staffelli",
    "discover_score": 0.08792233025043593,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "volterra",
    "discover_score": 0.08787805302527825,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "bali",
    "discover_score": 0.08783407228349238,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "guido crosetto",
    "discover_score": 0.08779038435025874,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "martelli",
    "discover_score": 0.08774698561690537,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "mariavittoria gf",
    "discover_score": 0.08770387253935127,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "3b meteo roma",
    "discover_score": 0.0876610416365951,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "piantedosi",
    "discover_score": 0.0876184894892473,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "pacers - kings",
    "discover_score": 0.08757621273810438,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "iannone",
    "discover_score": 0.08753420808276388,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "bertolucci tennis",
    "discover_score": 0.08749247228027847,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "andrew garfield",
    "discover_score": 0.08745100214384822,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "red bull tv",
    "discover_score": 0.08740979454154943,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "trento",
    "discover_score": 0.08736884639509886,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "ramandeep singh",
    "discover_score": 0.08732815467865244,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "momix roma",
    "discover_score": 0.08728771641763704,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "bastian muller",
    "discover_score": 0.08724752868761428,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "cataniatoday",
    "discover_score": 0.0872075886131754,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "anna ascani",
    "discover_score": 0.08716789336686628,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "dyson",
    "discover_score": 0.0871284401681413,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "affori",
    "discover_score": 0.08708922628234546,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "vanoli",
    "discover_score": 0.08705024901972379,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "corea del nord",
    "discover_score": 0.08701150573445693,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "nicola canonico",
    "discover_score": 0.08697299382372246,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "dune",
    "discover_score": 0.08693471072678077,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "lega basket",
    "discover_score": 0.08689665392408505,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "hunziker",
    "discover_score": 0.08685882093641431,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "wrestlemania 41",
    "discover_score": 0.08682120932402913,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "aston martin",
    "discover_score": 0.08678381668584899,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "personal injury attorney",
    "discover_score": 0.08674664065865081,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "grosseto",
    "discover_score": 0.08670967891628807,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "gazzettino",
    "discover_score": 0.08667292916892963,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "reddit",
    "discover_score": 0.08663638916231793,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "meteo pescara",
    "discover_score": 0.08660005667704586,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "paramount",
    "discover_score": 0.08656392952785175,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "kim soo-hyun",
    "discover_score": 0.0865280055629319,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "starlink",
    "discover_score": 0.08649228266327028,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "daredevil",
    "discover_score": 0.08645675874198468,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "guida tv",
    "discover_score": 0.08642143174368908,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "askatasuna",
    "discover_score": 0.08638629964387144,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "bill gates",
    "discover_score": 0.08635136044828684,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "loiodice",
    "discover_score": 0.0863166121923652,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "chiavari",
    "discover_score": 0.08628205294063337,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "castellabate",
    "discover_score": 0.08624768078615105,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "justin bieber",
    "discover_score": 0.08621349384996026,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "musk",
    "discover_score": 0.08617949028054783,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "palinsesto tv",
    "discover_score": 0.0861456682533207,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "los angeles",
    "discover_score": 0.08611202597009364,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "incidente probatorio",
    "discover_score": 0.08607856165858876,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "giornale di brescia",
    "discover_score": 0.08604527357194709,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "manish pandey",
    "discover_score": 0.08601215998825115,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "javier gf",
    "discover_score": 0.08597921921005885,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "danny quinn oggi",
    "discover_score": 0.08594644956394801,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "accardi",
    "discover_score": 0.08591384940007134,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "giacomo caliendo",
    "discover_score": 0.0858814170917217,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "swat",
    "discover_score": 0.08584915103490709,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "vignesh puthur",
    "discover_score": 0.08581704964793535,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "paramount plus",
    "discover_score": 0.08578511137100833,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "chatgpt down",
    "discover_score": 0.08575333466582497,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "valentino lazaro",
    "discover_score": 0.08572171801519343,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "giuseppe conte",
    "discover_score": 0.08569025992265175,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "elisabetta canalis",
    "discover_score": 0.08565895891209697,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "il trono di spade",
    "discover_score": 0.08562781352742248,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "classifica kings league",
    "discover_score": 0.08559682233216323,
    "saturation_score": 0,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 14:04:55",
  "trends_count": 237,
  "top_score": 13.354419758799194,
  "runtime_minutes": 6.594936275482178,
  "proxies_used": 203,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_check_enabled": true
};
