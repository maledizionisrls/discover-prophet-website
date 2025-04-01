const trendData = [
  {
    "rank": 20,
    "entity": "ronaldo",
    "discover_score": 15.019383731060563,
    "score_1h": 43.146551724137936,
    "score_4h": 40.64075630252101,
    "score_7d": 23.523668639053255,
    "saturation_score": 0.0,
    "extracted_entities": "Cristiano Ronaldo - Calciatore - Portogallo - Manchester United - Juventus"
  },
  {
    "rank": 10,
    "entity": "rolex",
    "discover_score": 12.837279116737479,
    "score_1h": 31.103448275862068,
    "score_4h": 18.577731092436974,
    "score_7d": 20.701183431952664,
    "saturation_score": 0.0,
    "extracted_entities": "Rolex - Orologi di lusso - Svizzera - Gioielleria - Collezionismo"
  },
  {
    "rank": 19,
    "entity": "inter milan",
    "discover_score": 6.867674560774839,
    "score_1h": 56.94827586206897,
    "score_4h": 23.34033613445378,
    "score_7d": 11.701183431952662,
    "saturation_score": 0.0,
    "extracted_entities": "Inter - Milan - Calcio - Serie A - Derby"
  },
  {
    "rank": 37,
    "entity": "dazi",
    "discover_score": 6.47139271767857,
    "score_1h": 24.198275862068968,
    "score_4h": 8.930672268907564,
    "score_7d": 16.683431952662723,
    "saturation_score": 0.0,
    "extracted_entities": "Dazi - Commercio internazionale - Tariffe - Politica economica - Relazioni commerciali"
  },
  {
    "rank": 9,
    "entity": "lacerenza",
    "discover_score": 5.271678263887049,
    "score_1h": 16.336206896551722,
    "score_4h": 15.298319327731093,
    "score_7d": 8.292899408284024,
    "saturation_score": 0.0,
    "extracted_entities": "Lacerenza"
  },
  {
    "rank": 3,
    "entity": "paolo guzzanti",
    "discover_score": 4.97077683113693,
    "score_1h": 50.30172413793103,
    "score_4h": 32.502100840336134,
    "score_7d": 2.281065088757397,
    "saturation_score": 0.0,
    "extracted_entities": "Paolo Guzzanti - Giornalista - Politica Italiana - Scrittore"
  },
  {
    "rank": 40,
    "entity": "dazi trump",
    "discover_score": 4.438701632816404,
    "score_1h": 9.487580362361193,
    "score_4h": 1.6176470588235294,
    "score_7d": 13.568047337278106,
    "saturation_score": 0.0,
    "extracted_entities": "Dazi - Trump - Commercio internazionale - Politica economica - Stati Uniti"
  },
  {
    "rank": 13,
    "entity": "apple intelligence",
    "discover_score": 4.421348221473225,
    "score_1h": 6.931034482758621,
    "score_4h": 4.254201680672269,
    "score_7d": 10.183431952662723,
    "saturation_score": 0.0,
    "extracted_entities": "Apple - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 1,
    "entity": "chi ha vinto grande fratello 2025",
    "discover_score": 4.199081879631929,
    "score_1h": 7.086206896551724,
    "score_4h": 9.905462184873949,
    "score_7d": 3.5532544378698225,
    "saturation_score": 0.0,
    "extracted_entities": "Grande Fratello 2025 - Vincitore - Reality Show"
  },
  {
    "rank": 4,
    "entity": "banconote da 50 euro ritirate",
    "discover_score": 2.6527632230285185,
    "score_1h": 1.396551724137931,
    "score_4h": 0.8025210084033614,
    "score_7d": 5.452662721893491,
    "saturation_score": 0.0,
    "extracted_entities": "Banconote - 50 euro - Ritiro"
  },
  {
    "rank": 41,
    "entity": "noipa cedolino",
    "discover_score": 2.513212118868897,
    "score_1h": 0.33620689655172414,
    "score_4h": 0.13025210084033614,
    "score_7d": 8.47337278106509,
    "saturation_score": 0.0,
    "extracted_entities": "NoiPA - Cedolino - Stipendio - Pubblica Amministrazione"
  },
  {
    "rank": 5,
    "entity": "stefano argentino",
    "discover_score": 2.147484704122829,
    "score_1h": 4.560344827586206,
    "score_4h": 4.758403361344538,
    "score_7d": 3.7455621301775146,
    "saturation_score": 44.33226837060703,
    "extracted_entities": "Stefano Argentino"
  },
  {
    "rank": 30,
    "entity": "paros",
    "discover_score": 1.9928675001355105,
    "score_1h": 0.8620689655172413,
    "score_4h": 1.2142857142857144,
    "score_7d": 6.204142011834319,
    "saturation_score": 0.0,
    "extracted_entities": "Paros - Grecia - Isole Cicladi - Turismo - Spiagge"
  },
  {
    "rank": 7,
    "entity": "monica setta",
    "discover_score": 1.8147643572600782,
    "score_1h": 2.0,
    "score_4h": 2.1596638655462184,
    "score_7d": 4.005917159763314,
    "saturation_score": 100.0,
    "extracted_entities": "Monica Setta"
  },
  {
    "rank": 8,
    "entity": "luigi mangione",
    "discover_score": 1.810421040685032,
    "score_1h": 26.206896551724135,
    "score_4h": 16.6218487394958,
    "score_7d": 0.9585798816568047,
    "saturation_score": 12.386581469648561,
    "extracted_entities": "Luigi Mangione"
  },
  {
    "rank": 26,
    "entity": "shaila e lorenzo",
    "discover_score": 1.5787778574427538,
    "score_1h": 4.017241379310345,
    "score_4h": 1.0336134453781514,
    "score_7d": 4.855029585798817,
    "saturation_score": 0.0,
    "extracted_entities": "Shaila - Lorenzo - Persone famose - Gossip"
  },
  {
    "rank": 31,
    "entity": "lotto in diretta",
    "discover_score": 1.513941712236347,
    "score_1h": 20.17241379310345,
    "score_4h": 4.310924369747899,
    "score_7d": 3.9112426035502956,
    "saturation_score": 0.0,
    "extracted_entities": "Lotto - Diretta - Estrazioni - Gioco d'azzardo - Numeri vincenti"
  },
  {
    "rank": 48,
    "entity": "giovanni paolo ii",
    "discover_score": 1.4912672927666855,
    "score_1h": 4.068965517241379,
    "score_4h": 1.615546218487395,
    "score_7d": 4.928994082840237,
    "saturation_score": 0.0,
    "extracted_entities": "Giovanni Paolo II - Papa - Vaticano - Chiesa Cattolica - Pontificato"
  },
  {
    "rank": 2,
    "entity": "empoli - bologna",
    "discover_score": 1.4242673202948106,
    "score_1h": 15.689655172413794,
    "score_4h": 5.254201680672269,
    "score_7d": 1.5147928994082842,
    "saturation_score": 0.0,
    "extracted_entities": "Empoli - Bologna - Calcio - Serie A - Partita"
  },
  {
    "rank": 6,
    "entity": "tredici pietro psicofarmaci",
    "discover_score": 1.3942892115307468,
    "score_1h": 6.413793103448276,
    "score_4h": 9.886554621848738,
    "score_7d": 1.1420118343195267,
    "saturation_score": 0.0,
    "extracted_entities": "Tredici Pietro - Psicofarmaci - Musica"
  },
  {
    "rank": 22,
    "entity": "inps assegno unico",
    "discover_score": 1.2599704544897545,
    "score_1h": 0.6724137931034483,
    "score_4h": 0.51890756302521,
    "score_7d": 3.884615384615384,
    "saturation_score": 0.0,
    "extracted_entities": "INPS - Assegno Unico - Prestazioni Sociali"
  },
  {
    "rank": 21,
    "entity": "marilyn manson",
    "discover_score": 1.0233434679280604,
    "score_1h": 0.603448275862069,
    "score_4h": 1.4936974789915967,
    "score_7d": 2.846153846153846,
    "saturation_score": 7.958466453674121,
    "extracted_entities": "Marilyn Manson - Musica - Artista - Controversie - Shock Rock"
  },
  {
    "rank": 15,
    "entity": "trabzonspor u-19 - inter primavera",
    "discover_score": 0.9716174877954995,
    "score_1h": 2.3448275862068964,
    "score_4h": 6.319327731092437,
    "score_7d": 1.2988165680473371,
    "saturation_score": 0.0,
    "extracted_entities": "Trabzonspor U-19 - Inter Primavera - Calcio giovanile - Partita"
  },
  {
    "rank": 42,
    "entity": "mattia bellucci",
    "discover_score": 0.9674066690011378,
    "score_1h": 0.8448275862068966,
    "score_4h": 5.588235294117647,
    "score_7d": 1.9437869822485205,
    "saturation_score": 0.0,
    "extracted_entities": "Mattia Bellucci - Persone"
  },
  {
    "rank": 12,
    "entity": "nuovo tasto whatsapp",
    "discover_score": 0.8020727920110629,
    "score_1h": 7.319988310929281,
    "score_4h": 3.7815126050420167,
    "score_7d": 1.3106508875739644,
    "saturation_score": 0.0,
    "extracted_entities": "WhatsApp - Nuovo tasto - Funzionalità"
  },
  {
    "rank": 46,
    "entity": "simona ventura",
    "discover_score": 0.7741777652292879,
    "score_1h": 0.0,
    "score_4h": 1.0714285714285714,
    "score_7d": 2.4822485207100593,
    "saturation_score": 0.0,
    "extracted_entities": "Simona Ventura - Personaggi televisivi - Intrattenimento"
  },
  {
    "rank": 25,
    "entity": "paratici",
    "discover_score": 0.7674406743383715,
    "score_1h": 1.6982758620689653,
    "score_4h": 0.8487394957983194,
    "score_7d": 2.260355029585799,
    "saturation_score": 0.0,
    "extracted_entities": "Fabio Paratici - Calcio - Juventus - Tottenham Hotspur - Dirigente sportivo"
  },
  {
    "rank": 11,
    "entity": "arsenal - fulham",
    "discover_score": 0.7605290054653249,
    "score_1h": 22.362068965517242,
    "score_4h": 5.491596638655462,
    "score_7d": 0.7721893491124261,
    "saturation_score": 0.0,
    "extracted_entities": "Arsenal - Fulham - Calcio - Premier League"
  },
  {
    "rank": 35,
    "entity": "ascolti tv dati auditel",
    "discover_score": 0.7499990220539874,
    "score_1h": 0.2033898305084746,
    "score_4h": 0.06932773109243698,
    "score_7d": 2.556213017751479,
    "saturation_score": 0.0,
    "extracted_entities": "Ascolti TV - Dati Auditel - Televisione - Audience - Misurazione"
  },
  {
    "rank": 16,
    "entity": "pesce d aprile 2025",
    "discover_score": 0.6198211849256007,
    "score_1h": 1.5517241379310345,
    "score_4h": 0.2605042016806723,
    "score_7d": 1.7544378698224852,
    "saturation_score": 0.0,
    "extracted_entities": "Pesce d'aprile - 2025 - Scherzi - Tradizioni"
  },
  {
    "rank": 49,
    "entity": "lakers - rockets",
    "discover_score": 0.5699287331306467,
    "score_1h": 0.0,
    "score_4h": 0.1764705882352941,
    "score_7d": 1.9644970414201182,
    "saturation_score": 0.0,
    "extracted_entities": "Lakers - Rockets - NBA - Partita - Basket"
  },
  {
    "rank": 23,
    "entity": "luis henrique",
    "discover_score": 0.5569204900157968,
    "score_1h": 0.0,
    "score_4h": 0.5882352941176471,
    "score_7d": 1.5650887573964498,
    "saturation_score": 0.0,
    "extracted_entities": "Luis Henrique"
  },
  {
    "rank": 14,
    "entity": "lsg vs pbks",
    "discover_score": 0.5080978192210639,
    "score_1h": 6.844827586206897,
    "score_4h": 1.573529411764706,
    "score_7d": 0.9970414201183432,
    "saturation_score": 0.0,
    "extracted_entities": "LSG - PBKS - Indian Premier League - Cricket - Partita"
  },
  {
    "rank": 18,
    "entity": "cristiano ronaldo inter",
    "discover_score": 0.44545222462774503,
    "score_1h": 1.2155172413793103,
    "score_4h": 0.36554621848739494,
    "score_7d": 1.162721893491124,
    "saturation_score": 0.0,
    "extracted_entities": "Cristiano Ronaldo - Inter - Calcio"
  },
  {
    "rank": 17,
    "entity": "vincenzo sarno",
    "discover_score": 0.4415934260906289,
    "score_1h": 1.9396551724137931,
    "score_4h": 1.157563025210084,
    "score_7d": 0.9260355029585798,
    "saturation_score": 0.0,
    "extracted_entities": "Vincenzo Sarno - Calciatore - Sport - Carriera - Squadre"
  },
  {
    "rank": 24,
    "entity": "nottingham forest - manchester united",
    "discover_score": 0.42999804485559234,
    "score_1h": 9.671098772647575,
    "score_4h": 2.0294117647058822,
    "score_7d": 0.7396449704142012,
    "saturation_score": 1.0,
    "extracted_entities": "Nottingham Forest - Manchester United - Partita di calcio - Premier League"
  },
  {
    "rank": 38,
    "entity": "wawrinka",
    "discover_score": 0.4082685522140427,
    "score_1h": 0.0,
    "score_4h": 0.7794117647058824,
    "score_7d": 1.0828402366863905,
    "saturation_score": 0.0,
    "extracted_entities": "Stanislas Wawrinka - Tennis - ATP Tour"
  },
  {
    "rank": 43,
    "entity": "monte amiata",
    "discover_score": 0.35456706827845674,
    "score_1h": 1.7672413793103448,
    "score_4h": 0.6890756302521008,
    "score_7d": 0.9142011834319527,
    "saturation_score": 0.0,
    "extracted_entities": "Monte Amiata - Toscana - Montagna - Turismo - Escursionismo"
  },
  {
    "rank": 39,
    "entity": "rosy bindi",
    "discover_score": 0.2953638593289191,
    "score_1h": 0.6206896551724137,
    "score_4h": 1.699579831932773,
    "score_7d": 0.3964497041420118,
    "saturation_score": 0.0,
    "extracted_entities": "Rosy Bindi - Politica Italiana - Partito Democratico"
  },
  {
    "rank": 33,
    "entity": "stai con me oggi",
    "discover_score": 0.28532775899014384,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.22899159663865545,
    "score_7d": 0.7071005917159763,
    "saturation_score": 0.0,
    "extracted_entities": "Stai con me - Oggi - Canzone - Musica"
  },
  {
    "rank": 29,
    "entity": "wolverhampton - west ham",
    "discover_score": 0.2778726435808804,
    "score_1h": 4.801724137931035,
    "score_4h": 1.1365546218487395,
    "score_7d": 0.4230769230769231,
    "saturation_score": 0.0,
    "extracted_entities": "Wolverhampton - West Ham - Calcio - Premier League"
  },
  {
    "rank": 28,
    "entity": "francesca mannocchi",
    "discover_score": 0.27137186753774617,
    "score_1h": 1.9741379310344827,
    "score_4h": 0.21218487394957983,
    "score_7d": 0.6301775147928994,
    "saturation_score": 0.0,
    "extracted_entities": "Francesca Mannocchi - Giornalismo - Reportage - Medio Oriente - Conflitti"
  },
  {
    "rank": 47,
    "entity": "kid rock",
    "discover_score": 0.23623367465622164,
    "score_1h": 2.2155172413793105,
    "score_4h": 0.8676470588235294,
    "score_7d": 0.3816568047337278,
    "saturation_score": 0.0,
    "extracted_entities": "Kid Rock - Musica - Cantante - Rock - Stati Uniti"
  },
  {
    "rank": 50,
    "entity": "frecciarossa milano parigi",
    "discover_score": 0.21496317948957452,
    "score_1h": 2.8793103448275863,
    "score_4h": 1.0714285714285714,
    "score_7d": 0.24852071005917162,
    "saturation_score": 0.0,
    "extracted_entities": "Frecciarossa - Milano - Parigi - Treni - Viaggi"
  },
  {
    "rank": 44,
    "entity": "coppa del re",
    "discover_score": 0.20961429042806246,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.7878151260504203,
    "score_7d": 0.28106508875739644,
    "saturation_score": 0.0,
    "extracted_entities": "Coppa del Re - Calcio - Spagna - Competizione - Real Madrid"
  },
  {
    "rank": 36,
    "entity": "nehal wadhera",
    "discover_score": 0.18374281315575605,
    "score_1h": 0.5689655172413793,
    "score_4h": 0.3130252100840336,
    "score_7d": 0.2692307692307693,
    "saturation_score": 0.0,
    "extracted_entities": "Nehal Wadhera - Cricket - India"
  },
  {
    "rank": 27,
    "entity": "pam bondi",
    "discover_score": 0.16345782980432058,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.75,
    "score_7d": 0.0650887573964497,
    "saturation_score": 0.0,
    "extracted_entities": "Pam Bondi"
  },
  {
    "rank": 34,
    "entity": "al ittihad - al-shabab",
    "discover_score": 0.15614803129332996,
    "score_1h": 1.0517241379310345,
    "score_4h": 0.2647058823529412,
    "score_7d": 0.15976331360946744,
    "saturation_score": 0.0,
    "extracted_entities": "Al Ittihad - Al Shabab - Calcio - Arabia Saudita - Partita"
  },
  {
    "rank": 32,
    "entity": "az - rkc",
    "discover_score": 0.1509117534844125,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.2415966386554622,
    "score_7d": 0.1390532544378698,
    "saturation_score": 0.0,
    "extracted_entities": "AZ Alkmaar - RKC Waalwijk - Eredivisie - Calcio - Partita"
  },
  {
    "rank": 45,
    "entity": "copa del rey",
    "discover_score": 0.12023236623269148,
    "score_1h": 0.0,
    "score_4h": 0.3172268907563025,
    "score_7d": 0.01775147928994083,
    "saturation_score": 0.0,
    "extracted_entities": "Copa del Rey - Calcio - Spagna - Torneo - Squadre"
  }
];

const runMetadata = {
  "timestamp": "2025-04-01 18:25:47",
  "trends_count": 50,
  "top_score": 15.019383731060563,
  "runtime_minutes": 4.398064776261648,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_browser": "chrome124"
};
