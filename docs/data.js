const trendData = [
  {
    "rank": 35,
    "entity": "budapest",
    "discover_score": 19.642681454633838,
    "score_1h": 15.39655172413793,
    "score_4h": 7.8613445378151265,
    "score_7d": 44.96449704142012,
    "extracted_entities": "Budapest - Ungheria - Turismo - Cultura - Architettura",
    "saturation_score": 193.0
  },
  {
    "rank": 46,
    "entity": "investing",
    "discover_score": 14.799066434267948,
    "score_1h": 12.137931034482758,
    "score_4h": 23.392857142857142,
    "score_7d": 33.40236686390533,
    "extracted_entities": "Investimenti - Mercati finanziari - Azioni - Economia - Trading",
    "saturation_score": 4.0
  },
  {
    "rank": 29,
    "entity": "parma inter",
    "discover_score": 7.645970045658761,
    "score_1h": 3.5,
    "score_4h": 2.4642857142857144,
    "score_7d": 20.31360946745562,
    "extracted_entities": "Parma - Inter - Calcio - Serie A - Partita",
    "saturation_score": 221.0
  },
  {
    "rank": 20,
    "entity": "atp montecarlo",
    "discover_score": 7.615632356183511,
    "score_1h": 16.775862068965516,
    "score_4h": 4.632352941176471,
    "score_7d": 18.19526627218935,
    "extracted_entities": "ATP - Montecarlo - Tennis - Torneo - Principato di Monaco",
    "saturation_score": 37.0
  },
  {
    "rank": 6,
    "entity": "sciopero trenitalia",
    "discover_score": 7.437986384094643,
    "score_1h": 4.387931034482759,
    "score_4h": 3.3571428571428568,
    "score_7d": 13.70414201183432,
    "extracted_entities": "Sciopero - Trenitalia - Trasporti - Ferrovie - Italia",
    "saturation_score": -1.0
  },
  {
    "rank": 48,
    "entity": "1923",
    "discover_score": 6.177472678816079,
    "score_1h": 0.0,
    "score_4h": 0.6113445378151261,
    "score_7d": 19.056213017751478,
    "extracted_entities": "Serie TV - Yellowstone - Paramount Network - Western - Anni '20",
    "saturation_score": 5.0
  },
  {
    "rank": 16,
    "entity": "cobolli",
    "discover_score": 4.222232013312238,
    "score_1h": 4.870689655172414,
    "score_4h": 17.615546218487395,
    "score_7d": 6.846153846153847,
    "extracted_entities": "Cobolli",
    "saturation_score": 226.0
  },
  {
    "rank": 43,
    "entity": "milan fiorentina",
    "discover_score": 4.028064638719756,
    "score_1h": 1.0603448275862069,
    "score_4h": 1.2857142857142856,
    "score_7d": 12.683431952662723,
    "extracted_entities": "Milan - Fiorentina - Calcio - Serie A - Partita",
    "saturation_score": 129.0
  },
  {
    "rank": 1,
    "entity": "de bruyne",
    "discover_score": 3.3166144856071913,
    "score_1h": 12.96551724137931,
    "score_4h": 10.1281512605042,
    "score_7d": 2.559171597633136,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 209.0
  },
  {
    "rank": 44,
    "entity": "powell",
    "discover_score": 3.1564884119709813,
    "score_1h": 0.5086206896551724,
    "score_4h": 3.004201680672269,
    "score_7d": 9.727810650887575,
    "extracted_entities": "Jerome Powell - Federal Reserve - Politica monetaria - Economia - Inflazione",
    "saturation_score": 90.0
  },
  {
    "rank": 9,
    "entity": "mattia bellucci",
    "discover_score": 2.9162103743219396,
    "score_1h": 13.810344827586206,
    "score_4h": 7.275210084033613,
    "score_7d": 5.4704142011834325,
    "extracted_entities": "Mattia Bellucci - Persona",
    "saturation_score": 9.0
  },
  {
    "rank": 19,
    "entity": "borsa americana oggi",
    "discover_score": 2.7496566133153366,
    "score_1h": 1.6293103448275863,
    "score_4h": 1.4705882352941175,
    "score_7d": 7.668639053254438,
    "extracted_entities": "Borsa - America - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 32,
    "entity": "selvaggia lucarelli",
    "discover_score": 2.686147410728972,
    "score_1h": 3.017241379310345,
    "score_4h": 2.4894957983193278,
    "score_7d": 7.982248520710059,
    "extracted_entities": "Selvaggia Lucarelli - Giornalismo - Social Media",
    "saturation_score": 199.0
  },
  {
    "rank": 41,
    "entity": "unicredit azioni",
    "discover_score": 2.582654619813706,
    "score_1h": 3.603448275862069,
    "score_4h": 6.867295453746352,
    "score_7d": 6.84319526627219,
    "extracted_entities": "Unicredit - Azioni - Mercato azionario - Investimenti",
    "saturation_score": 0.0
  },
  {
    "rank": 4,
    "entity": "hummels",
    "discover_score": 2.3681583048240586,
    "score_1h": 20.43103448275862,
    "score_4h": 14.819327731092436,
    "score_7d": 1.7781065088757395,
    "extracted_entities": "Mats Hummels - Calcio - Borussia Dortmund - Germania - Difensore",
    "saturation_score": 232.0
  },
  {
    "rank": 3,
    "entity": "chelsea - tottenham",
    "discover_score": 2.2101454237071305,
    "score_1h": 1.5948275862068966,
    "score_4h": 1.3277310924369747,
    "score_7d": 4.174556213017752,
    "extracted_entities": "Chelsea - Tottenham - Premier League - Calcio - Partita",
    "saturation_score": 45.0
  },
  {
    "rank": 21,
    "entity": "wall street oggi",
    "discover_score": 2.116160981258846,
    "score_1h": 0.0,
    "score_4h": 0.5105042016806722,
    "score_7d": 6.355029585798817,
    "extracted_entities": "Wall Street - Mercati finanziari - Borsa valori",
    "saturation_score": 1.0
  },
  {
    "rank": 24,
    "entity": "genoa udinese",
    "discover_score": 1.8614997230538546,
    "score_1h": 7.594827586206897,
    "score_4h": 3.8550420168067228,
    "score_7d": 4.8639053254437865,
    "extracted_entities": "Genoa - Udinese - Calcio - Serie A - Partita",
    "saturation_score": 189.0
  },
  {
    "rank": 5,
    "entity": "svezia - italia",
    "discover_score": 1.6577479785853158,
    "score_1h": 25.810344827586206,
    "score_4h": 11.048319327731093,
    "score_7d": 1.349112426035503,
    "extracted_entities": "Svezia - Italia - Calcio - Partita - Nazionali",
    "saturation_score": 9.0
  },
  {
    "rank": 17,
    "entity": "raffaella scudiero",
    "discover_score": 1.5553098894968196,
    "score_1h": 0.8275862068965517,
    "score_4h": 0.5021008403361344,
    "score_7d": 4.568047337278107,
    "extracted_entities": "Raffaella Scudiero",
    "saturation_score": 43.0
  },
  {
    "rank": 47,
    "entity": "greta thunberg",
    "discover_score": 1.527297377549576,
    "score_1h": 0.0,
    "score_4h": 0.6491596638655462,
    "score_7d": 5.304733727810651,
    "extracted_entities": "Greta Thunberg - Attivismo climatico - Cambiamento climatico - Fridays for Future - Svezia",
    "saturation_score": 4.0
  },
  {
    "rank": 8,
    "entity": "radio deejay riccione",
    "discover_score": 1.4560338255997654,
    "score_1h": 1.6896551724137931,
    "score_4h": 0.9852941176470589,
    "score_7d": 3.5680473372781067,
    "extracted_entities": "Radio Deejay - Riccione - Stazione Radio - Eventi - Musica",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "robin williams",
    "discover_score": 1.3486871932116382,
    "score_1h": 0.5948275862068966,
    "score_4h": 0.7436974789915967,
    "score_7d": 4.6301775147929,
    "extracted_entities": "Robin Williams - Attore - Comico - Film - Hollywood",
    "saturation_score": -1.0
  },
  {
    "rank": 42,
    "entity": "anna kalinskaja",
    "discover_score": 1.3384156350320386,
    "score_1h": 0.0,
    "score_4h": 0.4432773109243697,
    "score_7d": 4.627218934911243,
    "extracted_entities": "Anna Kalinskaja - Tennis - Sport",
    "saturation_score": 1.0
  },
  {
    "rank": 10,
    "entity": "lsg vs mi",
    "discover_score": 1.2768807716695763,
    "score_1h": 4.560344827586206,
    "score_4h": 5.92436974789916,
    "score_7d": 2.0147928994082838,
    "extracted_entities": "LSG - MI - Indian Premier League - Cricket - Partita",
    "saturation_score": 1.0
  },
  {
    "rank": 14,
    "entity": "prove libere f1 oggi",
    "discover_score": 1.2025585407655475,
    "score_1h": 0.0,
    "score_4h": 0.819327731092437,
    "score_7d": 3.328402366863905,
    "extracted_entities": "Prove libere - Formula 1 - Oggi",
    "saturation_score": 1.0
  },
  {
    "rank": 7,
    "entity": "ed sheeran azizam",
    "discover_score": 1.1399473109688232,
    "score_1h": 4.577586206896552,
    "score_4h": 1.98109243697479,
    "score_7d": 2.42603550295858,
    "extracted_entities": "Ed Sheeran - Azizam - Musica",
    "saturation_score": 10.0
  },
  {
    "rank": 11,
    "entity": "giovanni ferrero",
    "discover_score": 1.1363753127849894,
    "score_1h": 1.5344827586206895,
    "score_4h": 0.06932773109243698,
    "score_7d": 3.1923076923076925,
    "extracted_entities": "Giovanni Ferrero - Ferrero Group - Imprenditore - Industria dolciaria - Nutella",
    "saturation_score": 4.0
  },
  {
    "rank": 40,
    "entity": "lorenzo sonego",
    "discover_score": 1.1265444390145631,
    "score_1h": 2.405172413793103,
    "score_4h": 0.35084033613445376,
    "score_7d": 3.8875739644970415,
    "extracted_entities": "Lorenzo Sonego - Tennis - Giocatore italiano",
    "saturation_score": 6.0
  },
  {
    "rank": 2,
    "entity": "dazi trump borse",
    "discover_score": 1.0584365131110622,
    "score_1h": 5.224137931034483,
    "score_4h": 2.920168067226891,
    "score_7d": 1.3550295857988166,
    "extracted_entities": "Dazi - Trump - Borse",
    "saturation_score": 5.0
  },
  {
    "rank": 15,
    "entity": "laura loomer",
    "discover_score": 0.9420375436097534,
    "score_1h": 2.5172413793103448,
    "score_4h": 0.6640061882493583,
    "score_7d": 2.6390532544378695,
    "extracted_entities": "Laura Loomer - Giornalista - Attivista - Politica",
    "saturation_score": 45.0
  },
  {
    "rank": 33,
    "entity": "vincita riccione",
    "discover_score": 0.9222204337519521,
    "score_1h": 1.3620689655172413,
    "score_4h": 0.453781512605042,
    "score_7d": 3.035502958579882,
    "extracted_entities": "Vincita - Riccione - Lotteria - Jackpot - Concorsi",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "sporting - rio ave",
    "discover_score": 0.8437114273633076,
    "score_1h": 0.0,
    "score_4h": 0.06512605042016807,
    "score_7d": 3.06508875739645,
    "extracted_entities": "Sporting - Rio Ave - Calcio - Partita - Portogallo",
    "saturation_score": -1.0
  },
  {
    "rank": 27,
    "entity": "claudio ranieri",
    "discover_score": 0.8195959281636235,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.5483193277310925,
    "score_7d": 2.5562130177514795,
    "extracted_entities": "Claudio Ranieri - Allenatore di calcio - Serie A - Premier League - Leicester City",
    "saturation_score": 7.0
  },
  {
    "rank": 31,
    "entity": "valseriana news",
    "discover_score": 0.7538255740621577,
    "score_1h": 2.8017241379310347,
    "score_4h": 0.296218487394958,
    "score_7d": 2.455621301775148,
    "extracted_entities": "Valseriana - News - Notizie locali - Attualità",
    "saturation_score": 1.0
  },
  {
    "rank": 12,
    "entity": "kevin de bruyne",
    "discover_score": 0.739876377349033,
    "score_1h": 0.47413793103448276,
    "score_4h": 0.17647058823529413,
    "score_7d": 2.0532544378698225,
    "extracted_entities": "Kevin De Bruyne - Calciatore - Manchester City - Belgio - Premier League",
    "saturation_score": 40.0
  },
  {
    "rank": 22,
    "entity": "green deal",
    "discover_score": 0.6902836909632052,
    "score_1h": 6.560344827586206,
    "score_4h": 1.092436974789916,
    "score_7d": 1.878698224852071,
    "extracted_entities": "Green Deal - Politica ambientale - Unione Europea - Sostenibilità - Transizione energetica",
    "saturation_score": 347.0
  },
  {
    "rank": 37,
    "entity": "bruce springsteen",
    "discover_score": 0.5813522312156448,
    "score_1h": 0.0,
    "score_4h": 0.14915966386554622,
    "score_7d": 1.9260355029585798,
    "extracted_entities": "Bruce Springsteen - Musica - Cantante - Rock - Concerti",
    "saturation_score": 80.0
  },
  {
    "rank": 28,
    "entity": "michael douglas",
    "discover_score": 0.5630581333298527,
    "score_1h": 0.8275862068965517,
    "score_4h": 1.2836134453781511,
    "score_7d": 1.4585798816568047,
    "extracted_entities": "Michael Douglas - Attore - Hollywood - Film - Cinema",
    "saturation_score": -1.0
  },
  {
    "rank": 34,
    "entity": "lakers - warriors",
    "discover_score": 0.5487005116466647,
    "score_1h": 0.0,
    "score_4h": 0.19117647058823528,
    "score_7d": 1.7633136094674555,
    "extracted_entities": "Lakers - Warriors - NBA - Basket - Partita",
    "saturation_score": 4.0
  },
  {
    "rank": 25,
    "entity": "reijnders",
    "discover_score": 0.5188366085655927,
    "score_1h": 0.0,
    "score_4h": 0.3592436974789916,
    "score_7d": 1.514792899408284,
    "extracted_entities": "Reijnders",
    "saturation_score": 36.0
  },
  {
    "rank": 18,
    "entity": "al hilal - al-nassr",
    "discover_score": 0.4865574206095682,
    "score_1h": 11.85344827586207,
    "score_4h": 3.203781512605042,
    "score_7d": 0.591715976331361,
    "extracted_entities": "Al Hilal - Al Nassr - Calcio - Arabia Saudita - Partita",
    "saturation_score": 2.0
  },
  {
    "rank": 23,
    "entity": "russell brand",
    "discover_score": 0.4044527955963835,
    "score_1h": 0.5,
    "score_4h": 0.9474789915966386,
    "score_7d": 0.9142011834319526,
    "extracted_entities": "Russell Brand - Comico - Attore - Personalità televisiva - Regno Unito",
    "saturation_score": 64.0
  },
  {
    "rank": 38,
    "entity": "personale ata ciad",
    "discover_score": 0.39215597091696586,
    "score_1h": 0.0,
    "score_4h": 0.4873949579831933,
    "score_7d": 1.0976331360946745,
    "extracted_entities": "Personale ATA - Ciad - Scuola - Amministrazione - Supporto educativo",
    "saturation_score": -1.0
  },
  {
    "rank": 30,
    "entity": "alessandro bastoni",
    "discover_score": 0.3681192249671958,
    "score_1h": 2.0344827586206895,
    "score_4h": 0.3907563025210084,
    "score_7d": 0.9792899408284024,
    "extracted_entities": "Alessandro Bastoni - Calciatore - Inter - Serie A - Nazionale Italiana",
    "saturation_score": 2.0
  },
  {
    "rank": 13,
    "entity": "walter novellino",
    "discover_score": 0.2825347442764817,
    "score_1h": 0.4482758620689655,
    "score_4h": 0.5546218487394958,
    "score_7d": 0.47337278106508873,
    "extracted_entities": "Walter Novellino - Calcio - Allenatore",
    "saturation_score": -1.0
  },
  {
    "rank": 39,
    "entity": "firenze rocks",
    "discover_score": 0.25918775445805525,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.34309623430962344,
    "score_7d": 0.591715976331361,
    "extracted_entities": "Firenze Rocks - Festival musicale - Firenze - Concerti - Artisti",
    "saturation_score": 10.0
  },
  {
    "rank": 49,
    "entity": "antonino spinalbese",
    "discover_score": 0.23840815219245837,
    "score_1h": 0.0,
    "score_4h": 0.634453781512605,
    "score_7d": 0.4556213017751479,
    "extracted_entities": "Antonino Spinalbese - Personaggio pubblico - Gossip - Moda - Televisione",
    "saturation_score": 53.0
  },
  {
    "rank": 26,
    "entity": "naman dhir",
    "discover_score": 0.23005438009457657,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.15756302521008403,
    "score_7d": 0.46745562130177515,
    "extracted_entities": "Naman Dhir",
    "saturation_score": -1.0
  },
  {
    "rank": 36,
    "entity": "mats hummels",
    "discover_score": 0.15802889377783072,
    "score_1h": 0.0,
    "score_4h": 0.657563025210084,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Mats Hummels - Calciatore - Borussia Dortmund - Germania - Bundesliga",
    "saturation_score": 10.0
  },
  {
    "rank": 51,
    "entity": "de zerbi",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "antonino cannavacciuolo",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "riccardo iacona",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "dividendo eni 2025",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "darderi",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "mezzolombardo",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "nasdaq 100",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "azioni unicredit",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "buon venerdi 4 aprile",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "ortona",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "lotto",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "elettra lamborghini",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "dune film",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "stasera in tv",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "damiano uomini e donne",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "francesco il papa della gente canale 5",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "san vincenzo",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "azioni leonardo",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "chelsea vs tottenham",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "hostage",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "dune 2",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "sciopero scuola",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "matilda de angelis",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "helena prestes tapiro",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "sci federica brignone",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "oroscopo 4 aprile scorpione",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "damir džumhur",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "devil may cry",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "north sentinel",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "donte divincenzo",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "ufo sweden",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "azioni stellantis",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "roberto bolle",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "diasorin",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "vinitaly 2025",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "calabria",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "baustelle",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "raiplay",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "film dune",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "il paradiso delle signore anticipazioni dal 14 al 18 aprile 2025",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "anticipazioni beautiful",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "elodie mi ami mi odi testo",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "sixers - bucks",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "pulse",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "sporting cristal - palmeiras",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "francesca mannocchi",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "vittorio feltri",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "tommaso zorzi",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "mad max fury road",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "angelucci",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "andrea agnelli",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "nikkei",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "tradimento anticipazioni",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "4 aprile",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "timothée chalamet",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "scandicci",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "gianmarco uomini e donne",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "blue bloods",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "valerio lundini",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "microsoft",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "mad max",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "michelle hunziker",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "kevin bacon",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "papa bergoglio",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "the darkness",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "stefano bollani",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "heat - grizzlies",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "hostage film",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "jodie foster",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "the image of you",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "pharmacy",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "flu shots",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "immunizations",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "andrea pisani",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "invalsi",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "quotazione oro oggi",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "lesotho",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "vaccinations",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "vaccines",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "anticipazioni un posto al sole",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "sean connery",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "nets - timberwolves",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "matilde de angelis",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "dr",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "donzelli",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "alessandro sallusti",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "daniel lee",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "michele serra",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "pamela anderson",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "orient express treno",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "vincicasa",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "black hawk down",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "millionday",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "bonus bollette 2025",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "luca sommi",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "desaparecidos",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "miyazaki",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "restaurant",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "reuters",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "besiktas",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "gazzetta di parma",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "giovanni floris",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "paolo del debbio",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "gustavo sa",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "classifica nba",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "isee",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "che dio ci aiuti anticipazioni",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "piazza della loggia brescia",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "dax",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "sgarbi come sta",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "melfi",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "hunziker",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "william hill",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "messaggero",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "minecraft",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "guida tv",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "leggo",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "isole heard e mcdonald",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "cruciani",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "christian slater",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "paul pogba",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "elisa longo borghini",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "un posto al sole 3 aprile 2025",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "prime pagine quotidiani",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "famiglie d'italia",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "maria elena boschi",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "verdansk",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "stan wawrinka",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "südtirol news",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "cammino di santiago",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-04 17:41:37",
  "trends_count": 180,
  "top_score": 19.642681454633838,
  "runtime_minutes": 3.648545777797699,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Le profezie di oggi rivelano un dominio energico del calcio, dell'economia e di figure pubbliche divergenti. Mentre le partite di Serie A e Premier League, come 'Parma-Inter' e 'Chelsea-Tottenham', fervono di discussioni, l'economia si intreccia con il battito globale tramite temi come 'Investing' e la volatilità di 'Wall Street oggi', attirando improvvisi picchi d'attenzione in un mercato dai pensieri veloci. L'apparizione di 'Greta Thunberg' ricorda che il tempo della terra incalza ancora.\n\nTra le terre fertili per Google Discover, illuminano la strada 'Investing' (#2) con il suo punteggio di bassa saturazione e interesse crescente, e 'Budapest' (#1), un faro per adventisti del turismo che contempli la cultura con un potenziale inesplorato. La concorrenza è quieta, le opportunità abbondano.\n\nTuttavia, cautela si consiglia con 'Hummels' (#15) e 'Kevin De Bruyne' (#9), i cui nomi riecheggiano ampiamente nel settore saturato del calcio, rischiando di svanire tra le onde.\n\nNell'orchestrare contenuti, mai trascurare la scintilla ancora inespressa: cogli il trend col neonato clamore e già nato fervore. I nuovi protagonisti attendono solo il palco giusto."
};
