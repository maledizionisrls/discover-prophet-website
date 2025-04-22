const trendData = [
  {
    "rank": 48,
    "entity": "instagram",
    "discover_score": 31.55923319801505,
    "score_1h": 67.99137931034483,
    "score_4h": 73.65756302521008,
    "score_7d": 56.662721893491124,
    "extracted_entities": "Instagram - Social Media - Fotografia - Condivisione - Meta Platforms",
    "saturation_score": 136.0
  },
  {
    "rank": 20,
    "entity": "inps",
    "discover_score": 25.61833032068959,
    "score_1h": 82.6896551724138,
    "score_4h": 71.06932773109244,
    "score_7d": 33.94378698224852,
    "extracted_entities": "INPS - Previdenza Sociale - Pensioni - Contributi - Italia",
    "saturation_score": 52.0
  },
  {
    "rank": 27,
    "entity": "whatsapp",
    "discover_score": 21.469342598184117,
    "score_1h": 84.82758620689654,
    "score_4h": 74.14705882352942,
    "score_7d": 29.571005917159763,
    "extracted_entities": "WhatsApp - Messaggistica - App - Comunicazione",
    "saturation_score": 83.0
  },
  {
    "rank": 43,
    "entity": "noipa",
    "discover_score": 17.34231118187919,
    "score_1h": 29.370689655172413,
    "score_4h": 41.247899159663866,
    "score_7d": 33.75739644970414,
    "extracted_entities": "NoiPA - Portale - Stipendi - Pubblica Amministrazione - Italia",
    "saturation_score": 6.0
  },
  {
    "rank": 44,
    "entity": "agenzia delle entrate",
    "discover_score": 14.601389736609793,
    "score_1h": 77.49137931034483,
    "score_4h": 52.739495798319325,
    "score_7d": 25.29585798816568,
    "extracted_entities": "Agenzia delle Entrate - Fisco - Tasse - Italia",
    "saturation_score": 42.0
  },
  {
    "rank": 42,
    "entity": "mps",
    "discover_score": 13.892357003866888,
    "score_1h": 62.3448275862069,
    "score_4h": 48.63655462184874,
    "score_7d": 24.437869822485208,
    "extracted_entities": "Monte dei Paschi di Siena - Banca - Finanza - Italia - Crisi bancaria",
    "saturation_score": 10.0
  },
  {
    "rank": 2,
    "entity": "inter roma",
    "discover_score": 10.109559745188447,
    "score_1h": 72.60344827586206,
    "score_4h": 34.00630252100841,
    "score_7d": 6.627218934911243,
    "extracted_entities": "Inter - Roma - Calcio - Serie A - Partita",
    "saturation_score": 329.0
  },
  {
    "rank": 8,
    "entity": "rottamazione quinquies",
    "discover_score": 8.282960870087495,
    "score_1h": 6.051724137931034,
    "score_4h": 1.98109243697479,
    "score_7d": 16.476331360946745,
    "extracted_entities": "Rottamazione - Quinquies - Fisco - Debiti - Agenzia delle Entrate",
    "saturation_score": 6.0
  },
  {
    "rank": 23,
    "entity": "oggi in tv",
    "discover_score": 6.772839081930242,
    "score_1h": 16.04310344827586,
    "score_4h": 11.224789915966387,
    "score_7d": 15.165680473372781,
    "extracted_entities": "Programmi TV - Palinsesto - Canali televisivi",
    "saturation_score": 10.0
  },
  {
    "rank": 18,
    "entity": "il paradiso delle signore",
    "discover_score": 6.16268255734078,
    "score_1h": 31.5,
    "score_4h": 17.338235294117645,
    "score_7d": 11.488165680473372,
    "extracted_entities": "Il paradiso delle signore - Serie TV - Rai - Italia - Moda",
    "saturation_score": 123.0
  },
  {
    "rank": 41,
    "entity": "buongiorno",
    "discover_score": 4.69478452905313,
    "score_1h": 5.896551724137931,
    "score_4h": 1.8025210084033612,
    "score_7d": 14.27810650887574,
    "extracted_entities": "Saluto - Comunicazione - Espressione di cortesia",
    "saturation_score": 136.0
  },
  {
    "rank": 46,
    "entity": "the last of us",
    "discover_score": 4.599220594758392,
    "score_1h": 30.801724137931036,
    "score_4h": 32.42226890756302,
    "score_7d": 6.488165680473372,
    "extracted_entities": "The Last of Us - Videogioco - Naughty Dog - Apocalisse - Joel ed Ellie",
    "saturation_score": 139.0
  },
  {
    "rank": 17,
    "entity": "coppa italia inter milan",
    "discover_score": 3.031302955264685,
    "score_1h": 9.43103448275862,
    "score_4h": 7.815038149150873,
    "score_7d": 6.547337278106509,
    "extracted_entities": "Coppa Italia - Inter - Milan",
    "saturation_score": 10.0
  },
  {
    "rank": 10,
    "entity": "giornata della terra",
    "discover_score": 2.949430295543134,
    "score_1h": 3.189655172413793,
    "score_4h": 4.081932773109244,
    "score_7d": 6.505917159763314,
    "extracted_entities": "Giornata della Terra - Ambiente - Sostenibilità - Ecologia - Cambiamento climatico",
    "saturation_score": 191.0
  },
  {
    "rank": 47,
    "entity": "25 aprile festa",
    "discover_score": 2.816173719825636,
    "score_1h": 2.1206896551724137,
    "score_4h": 0.8109243697478992,
    "score_7d": 9.414201183431953,
    "extracted_entities": "25 aprile - Festa della Liberazione - Italia - Celebrazione - Storia",
    "saturation_score": 8.0
  },
  {
    "rank": 16,
    "entity": "uomini e donne oggi",
    "discover_score": 2.592913455311547,
    "score_1h": 0.1896551724137931,
    "score_4h": 10.480978165324707,
    "score_7d": 4.6952662721893486,
    "extracted_entities": "Uomini e Donne - Oggi - Programma TV",
    "saturation_score": 1.0
  },
  {
    "rank": 21,
    "entity": "tottenham - nottingham forest",
    "discover_score": 1.5555510575027447,
    "score_1h": 1.103448275862069,
    "score_4h": 0.27405857740585776,
    "score_7d": 4.810650887573964,
    "extracted_entities": "Tottenham - Nottingham Forest - Calcio - Premier League",
    "saturation_score": 54.0
  },
  {
    "rank": 9,
    "entity": "kristen stewart",
    "discover_score": 1.530358779359454,
    "score_1h": 0.853448275862069,
    "score_4h": 0.8739495798319328,
    "score_7d": 3.8757396449704142,
    "extracted_entities": "Kristen Stewart - Attrice - Cinema - Hollywood",
    "saturation_score": 61.0
  },
  {
    "rank": 4,
    "entity": "lucia bronzetti",
    "discover_score": 1.4989260742450419,
    "score_1h": 14.163793103448278,
    "score_4h": 9.510205337365072,
    "score_7d": 1.2011834319526629,
    "extracted_entities": "Lucia Bronzetti - Tennis - Italia",
    "saturation_score": 31.0
  },
  {
    "rank": 25,
    "entity": "girona - betis",
    "discover_score": 1.2922769579524438,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.22478991596638656,
    "score_7d": 4.15680473372781,
    "extracted_entities": "Girona - Betis - Calcio - Partita - Liga Spagnola",
    "saturation_score": 9.0
  },
  {
    "rank": 5,
    "entity": "giuseppe farina",
    "discover_score": 1.1825235884671077,
    "score_1h": 10.689655172413794,
    "score_4h": 11.260504201680671,
    "score_7d": 0.43195266272189353,
    "extracted_entities": "Giuseppe Farina - Persona",
    "saturation_score": 58.0
  },
  {
    "rank": 12,
    "entity": "carlo maria viganò",
    "discover_score": 1.0268303893187083,
    "score_1h": 0.6206896551724138,
    "score_4h": 1.0714285714285714,
    "score_7d": 2.6627218934911245,
    "extracted_entities": "Carlo Maria Viganò - Persona",
    "saturation_score": 9.0
  },
  {
    "rank": 3,
    "entity": "gad lerner lascia il fatto quotidiano",
    "discover_score": 0.9803545120030979,
    "score_1h": 3.7844827586206895,
    "score_4h": 4.665966386554622,
    "score_7d": 0.9970414201183433,
    "extracted_entities": "Gad Lerner - Il Fatto Quotidiano - Dimissioni",
    "saturation_score": 8.0
  },
  {
    "rank": 34,
    "entity": "nuggets - clippers",
    "discover_score": 0.935624334714684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 3.224852071005917,
    "extracted_entities": "Denver Nuggets - Los Angeles Clippers - NBA - Partita di basket - Squadre di basket",
    "saturation_score": 2.0
  },
  {
    "rank": 1,
    "entity": "facies hippocratica",
    "discover_score": 0.8910891996682705,
    "score_1h": 15.706896551724139,
    "score_4h": 6.544117647058823,
    "score_7d": 0.19822485207100593,
    "extracted_entities": "Facies Hippocratica - Medicina - Sintomi - Diagnosi",
    "saturation_score": 10.0
  },
  {
    "rank": 15,
    "entity": "marjorie taylor greene",
    "discover_score": 0.81462428400527,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.03571428571428571,
    "score_7d": 2.4171597633136095,
    "extracted_entities": "Marjorie Taylor Greene - Politica - Stati Uniti",
    "saturation_score": 9.0
  },
  {
    "rank": 11,
    "entity": "donald trump papa francesco",
    "discover_score": 0.8097304065069544,
    "score_1h": 0.6982758620689655,
    "score_4h": 0.5798319327731092,
    "score_7d": 2.1183431952662723,
    "extracted_entities": "Donald Trump - Papa Francesco",
    "saturation_score": -1.0
  },
  {
    "rank": 28,
    "entity": "cocciaretto",
    "discover_score": 0.7968930137823784,
    "score_1h": 0.0,
    "score_4h": 1.9453781512605042,
    "score_7d": 2.1124260355029585,
    "extracted_entities": "Tennis - Elisabetta Cocciaretto - Giocatrice italiana",
    "saturation_score": 29.0
  },
  {
    "rank": 35,
    "entity": "the last of us seconda stagione",
    "discover_score": 0.7633519300505577,
    "score_1h": 0.603448275862069,
    "score_4h": 0.0,
    "score_7d": 2.6242603550295858,
    "extracted_entities": "The Last of Us - Seconda stagione - Serie TV",
    "saturation_score": 1.0
  },
  {
    "rank": 6,
    "entity": "sara tommasi",
    "discover_score": 0.7612826475506694,
    "score_1h": 10.051724137931034,
    "score_4h": 2.588235294117647,
    "score_7d": 1.2248520710059172,
    "extracted_entities": "Sara Tommasi - Personaggio pubblico - Italia",
    "saturation_score": 48.0
  },
  {
    "rank": 37,
    "entity": "netanyahu",
    "discover_score": 0.752122520246165,
    "score_1h": 0.0,
    "score_4h": 0.5189075630252101,
    "score_7d": 2.4615384615384617,
    "extracted_entities": "Benjamin Netanyahu - Politica israeliana - Primo Ministro di Israele - Likud - Medio Oriente",
    "saturation_score": 136.0
  },
  {
    "rank": 29,
    "entity": "papa francesco emanuela orlandi",
    "discover_score": 0.7134872616795377,
    "score_1h": 0.11206896551724138,
    "score_4h": 0.8760504201680672,
    "score_7d": 2.1242603550295858,
    "extracted_entities": "Papa Francesco - Emanuela Orlandi - Vaticano - Scomparsa",
    "saturation_score": -1.0
  },
  {
    "rank": 38,
    "entity": "massimo coppola",
    "discover_score": 0.6902848858752113,
    "score_1h": 1.5775862068965518,
    "score_4h": 0.18277310924369747,
    "score_7d": 2.337278106508876,
    "extracted_entities": "Massimo Coppola",
    "saturation_score": 3.0
  },
  {
    "rank": 39,
    "entity": "spider man 3",
    "discover_score": 0.6312992224958002,
    "score_1h": 0.0,
    "score_4h": 0.523109243697479,
    "score_7d": 2.029585798816568,
    "extracted_entities": "Spider-Man - Film - Marvel - Cinema",
    "saturation_score": 8.0
  },
  {
    "rank": 24,
    "entity": "knicks - pistons",
    "discover_score": 0.6219426308413547,
    "score_1h": 0.0,
    "score_4h": 0.5084033613445378,
    "score_7d": 1.831360946745562,
    "extracted_entities": "Knicks - Pistons - NBA - Partita - Basket",
    "saturation_score": 2.0
  },
  {
    "rank": 40,
    "entity": "conclave cardinali papabili",
    "discover_score": 0.5237505700698409,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.0,
    "score_7d": 1.7692307692307692,
    "extracted_entities": "Conclave - Cardinali - Papabili",
    "saturation_score": -1.0
  },
  {
    "rank": 49,
    "entity": "oroscopo scorpione paolo fox",
    "discover_score": 0.4986853077972148,
    "score_1h": 0.4051724137931034,
    "score_4h": 0.33613445378151263,
    "score_7d": 1.6331360946745561,
    "extracted_entities": "Oroscopo - Scorpione - Paolo Fox",
    "saturation_score": -1.0
  },
  {
    "rank": 7,
    "entity": "concorso 4617 allievi agenti",
    "discover_score": 0.4860758439268765,
    "score_1h": 1.8275862068965518,
    "score_4h": 1.8214285714285716,
    "score_7d": 0.6982248520710059,
    "extracted_entities": "Concorso - 4617 Allievi Agenti - Reclutamento - Forze dell'Ordine - Polizia di Stato",
    "saturation_score": 2.0
  },
  {
    "rank": 33,
    "entity": "alife",
    "discover_score": 0.4581928294929865,
    "score_1h": 0.0,
    "score_4h": 2.4789915966386555,
    "score_7d": 0.8017751479289941,
    "extracted_entities": "Alife - Comune - Italia - Provincia di Caserta - Storia",
    "saturation_score": 53.0
  },
  {
    "rank": 22,
    "entity": "olivia williams",
    "discover_score": 0.4562347900862355,
    "score_1h": 1.0948275862068966,
    "score_4h": 0.9558823529411765,
    "score_7d": 1.0917159763313609,
    "extracted_entities": "Olivia Williams - Attrice - Film - Teatro - Televisione",
    "saturation_score": 10.0
  },
  {
    "rank": 30,
    "entity": "jean-marc aveline",
    "discover_score": 0.42938058207327034,
    "score_1h": 2.1810344827586206,
    "score_4h": 0.5273109243697479,
    "score_7d": 1.1804733727810652,
    "extracted_entities": "Jean-Marc Aveline - Cardinale - Chiesa Cattolica",
    "saturation_score": -1.0
  },
  {
    "rank": 50,
    "entity": "sem steijn",
    "discover_score": 0.3648042903314924,
    "score_1h": 0.5517241379310345,
    "score_4h": 0.03991596638655462,
    "score_7d": 1.165680473372781,
    "extracted_entities": "Sem Steijn - Calciatore - Eredivisie - ADO Den Haag - Olanda",
    "saturation_score": 8.0
  },
  {
    "rank": 36,
    "entity": "buon martedi 22 aprile",
    "discover_score": 0.2841797691011628,
    "score_1h": 0.646551724137931,
    "score_4h": 0.0,
    "score_7d": 0.7781065088757397,
    "extracted_entities": "Martedì - 22 aprile - Giorno della settimana",
    "saturation_score": -1.0
  },
  {
    "rank": 13,
    "entity": "pagamento assegno unico aprile 2025 inps",
    "discover_score": 0.262530244063578,
    "score_1h": 0.8879310344827587,
    "score_4h": 1.6743697478991595,
    "score_7d": 0.15088757396449703,
    "extracted_entities": "Pagamento - Assegno Unico - Aprile 2025 - INPS",
    "saturation_score": -1.0
  },
  {
    "rank": 45,
    "entity": "emma bonino",
    "discover_score": 0.2589048247119819,
    "score_1h": 0.6810344827586207,
    "score_4h": 0.43487394957983194,
    "score_7d": 0.5857988165680473,
    "extracted_entities": "Emma Bonino - Politica Italiana - Radicali Italiani - Diritti Umani - Unione Europea",
    "saturation_score": 8.0
  },
  {
    "rank": 14,
    "entity": "cardinale becciu",
    "discover_score": 0.2541631396985062,
    "score_1h": 2.0344827586206895,
    "score_4h": 0.9138655462184874,
    "score_7d": 0.2958579881656805,
    "extracted_entities": "Cardinale Becciu - Chiesa Cattolica - Vaticano",
    "saturation_score": 9.0
  },
  {
    "rank": 31,
    "entity": "sudakov",
    "discover_score": 0.22748796365466903,
    "score_1h": 0.10344827586206896,
    "score_4h": 0.4369747899159664,
    "score_7d": 0.4053254437869822,
    "extracted_entities": "Calcio - FC Dinamo Mosca - Giocatore - Russia",
    "saturation_score": 42.0
  },
  {
    "rank": 32,
    "entity": "aldo hugo sallustro",
    "discover_score": 0.21868674986746794,
    "score_1h": 0.0,
    "score_4h": 0.01680672268907563,
    "score_7d": 0.4822485207100592,
    "extracted_entities": "Aldo Hugo Sallustro",
    "saturation_score": 145.0
  },
  {
    "rank": 26,
    "entity": "naomi ōsaka",
    "discover_score": 0.1774007492051884,
    "score_1h": 0.47413793103448276,
    "score_4h": 0.4789915966386554,
    "score_7d": 0.17455621301775148,
    "extracted_entities": "Naomi Ōsaka - Tennis - Atleta",
    "saturation_score": -1.0
  },
  {
    "rank": 19,
    "entity": "banco bpm unicredit",
    "discover_score": 0.14544622047424727,
    "score_1h": 3.586206896551724,
    "score_4h": 0.42436974789915966,
    "score_7d": 0.044378698224852076,
    "extracted_entities": "Banco BPM - UniCredit - Banche - Finanza",
    "saturation_score": 3.0
  },
  {
    "rank": 51,
    "entity": "pisa - cremonese",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 52,
    "entity": "yahoo",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 53,
    "entity": "barcellona inter",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 54,
    "entity": "zaniolo",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 55,
    "entity": "tiscali",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 56,
    "entity": "gt vs kkr",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 57,
    "entity": "conclave streaming",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 58,
    "entity": "tim",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 59,
    "entity": "bruno vespa",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 60,
    "entity": "fabio fognini",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 61,
    "entity": "alessandro sallusti",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 62,
    "entity": "buon martedi 22 aprile 2025",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 63,
    "entity": "thunderstorm warning",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 64,
    "entity": "dhl tracking",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 65,
    "entity": "bper",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 66,
    "entity": "vangelo 22 aprile",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 67,
    "entity": "championship",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 68,
    "entity": "un posto al sole puntata di oggi",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 69,
    "entity": "danilo gallinari",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 70,
    "entity": "teatro alla scala",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 71,
    "entity": "modena - cesena",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 72,
    "entity": "anders arborelius",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 73,
    "entity": "kanye west",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 74,
    "entity": "f1 gp arabia saudita gara",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 75,
    "entity": "it",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 76,
    "entity": "stellantis azioni",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 77,
    "entity": "de zerbi",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 78,
    "entity": "dinamo bucarest - u craiova",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 79,
    "entity": "ralph fiennes",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 80,
    "entity": "cardinale sepe",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 81,
    "entity": "peshawar zalmi vs karachi kings",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 82,
    "entity": "al hilal - al-shabab",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 83,
    "entity": "salvini",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 84,
    "entity": "girona vs real betis",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 85,
    "entity": "federica angeli giornalista",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 86,
    "entity": "idealista",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 87,
    "entity": "massimo franco",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 88,
    "entity": "adani",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 89,
    "entity": "concerto jovanotti roma",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 90,
    "entity": "desaparecidos",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 91,
    "entity": "nba",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 92,
    "entity": "tottenham",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 93,
    "entity": "bangladesh",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 94,
    "entity": "radio deejay",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 95,
    "entity": "elder scrolls oblivion remastered",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 96,
    "entity": "radio",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 97,
    "entity": "buongiorno 22 aprile 2025",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 98,
    "entity": "criscitiello",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 99,
    "entity": "circoloco",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 100,
    "entity": "jürgen klopp",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 101,
    "entity": "luka romero",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 102,
    "entity": "al ittihad - al-ettifaq",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 103,
    "entity": "positano news",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 104,
    "entity": "avellino papa",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 105,
    "entity": "mib 30",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 106,
    "entity": "gazzetta sport",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 107,
    "entity": "dmax",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 108,
    "entity": "cambio euro dollaro",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 109,
    "entity": "minniti",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 110,
    "entity": "xabi alonso",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 111,
    "entity": "roberto da crema",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 112,
    "entity": "melania trump",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 113,
    "entity": "affari tuoi stasera",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 114,
    "entity": "azioni eni",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 115,
    "entity": "lampedusa",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 116,
    "entity": "ihostage",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 117,
    "entity": "gwyneth paltrow",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 118,
    "entity": "elena bergoglio",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 119,
    "entity": "nottingham forest",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 120,
    "entity": "investing",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 121,
    "entity": "pandoland",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 122,
    "entity": "lipari",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 123,
    "entity": "red",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 124,
    "entity": "james franco",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 125,
    "entity": "antonio spadaro",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 126,
    "entity": "gialappashow",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 127,
    "entity": "az - go ahead eagles",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 128,
    "entity": "roberto saviano",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 129,
    "entity": "risultati nba",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 130,
    "entity": "tom cruise",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 131,
    "entity": "eni azioni",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 132,
    "entity": "santiago de compostela",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 133,
    "entity": "luis henrique",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 134,
    "entity": "il mattino di padova",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 135,
    "entity": "randy orton",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 136,
    "entity": "thomas ceccon",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 137,
    "entity": "mission impossible",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 138,
    "entity": "rey mysterio",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 139,
    "entity": "kevin costner",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 140,
    "entity": "incidente a1",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 141,
    "entity": "facundo lescano",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 142,
    "entity": "martin sheen",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 143,
    "entity": "quotidiani oggi",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 144,
    "entity": "cardinale scola",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 145,
    "entity": "al pacino",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 146,
    "entity": "javier cercas papa francesco",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 147,
    "entity": "sangiuliano",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 148,
    "entity": "braida",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 149,
    "entity": "rhea ripley",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 150,
    "entity": "padre enzo fortunato",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 151,
    "entity": "fortitudo bologna - rbr",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 152,
    "entity": "cardinale ravasi",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 153,
    "entity": "kristi noem",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 154,
    "entity": "kevin joseph farrell",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 155,
    "entity": "soldionline",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 156,
    "entity": "lilli gruber",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 157,
    "entity": "spider man 4",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 158,
    "entity": "radio 24",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 159,
    "entity": "ali al sistani",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 160,
    "entity": "the last of us streaming",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 161,
    "entity": "logan paul",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 162,
    "entity": "cody rhodes",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 163,
    "entity": "euro dollaro",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 164,
    "entity": "dominik mysterio",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 165,
    "entity": "ezio mauro",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 166,
    "entity": "leicester",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 167,
    "entity": "graziano cesari",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 168,
    "entity": "vacanze di pasqua 2025",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 169,
    "entity": "santiago",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 170,
    "entity": "tudor juve",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 171,
    "entity": "san paolo",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 172,
    "entity": "oslo",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 173,
    "entity": "ozpetek",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 174,
    "entity": "anthony hopkins",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 175,
    "entity": "azioni mps",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 176,
    "entity": "travis scott",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 177,
    "entity": "oblivion remake",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 178,
    "entity": "nicolò barella",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 179,
    "entity": "meteolive",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 180,
    "entity": "bron breakker",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 181,
    "entity": "thunderbolts",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 182,
    "entity": "a sua immagine",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 183,
    "entity": "joe hendry",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 184,
    "entity": "c",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 185,
    "entity": "eugene the last of us",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 186,
    "entity": "josi",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 187,
    "entity": "aj styles",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 188,
    "entity": "maria corleone",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 189,
    "entity": "triesteprima",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 190,
    "entity": "ben affleck",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 191,
    "entity": "gnonto",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 192,
    "entity": "ciociaria",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 193,
    "entity": "beppe bergomi",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 194,
    "entity": "reddit down",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 195,
    "entity": "casteddu online",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 196,
    "entity": "mongolia",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 197,
    "entity": "targato cn",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 198,
    "entity": "eco di bergamo",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 199,
    "entity": "traffico autostrade",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 200,
    "entity": "drew mcintyre",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 201,
    "entity": "hostage",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 202,
    "entity": "autostrade per l'italia",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 203,
    "entity": "burger king",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 204,
    "entity": "kirsten dunst",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 205,
    "entity": "damian priest",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 206,
    "entity": "bianca belair",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 207,
    "entity": "ali agca",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 208,
    "entity": "gazzettino",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 209,
    "entity": "svitolina",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 210,
    "entity": "claudio coldebella",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 211,
    "entity": "bergamo news",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 212,
    "entity": "antonio banderas",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 213,
    "entity": "paul rudd",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 214,
    "entity": "l'adige",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  },
  {
    "rank": 215,
    "entity": "brescia reggiana",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": "",
    "saturation_score": -1.0
  }
];

const runMetadata = {
  "timestamp": "2025-04-22 13:57:41",
  "trends_count": 215,
  "top_score": 31.55923319801505,
  "runtime_minutes": 11.887241617838542,
  "pytrends_proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o",
  "saturation_enabled": true,
  "saturation_location": 2380,
  "prophecy_text": "Nel regno delle tendenze digitali, tre temi emergono con forza dalle onde mistiche delle ricerche: il mondo dei media sociali, le dinamiche economiche italiane e il calcio. Instagram (#1), padrone dei social, si erge come simbolo di connessione fotografica e Meta-morfosi sociale. Ordinamenti burocratici e fiscali, guidati dall’INPS (#2), svelano il tessuto di previdenza che sostiene il fondamento della nazione.\n\nNaviganti saggi, volgono il loro sguardo verso le opportunità dorate: la rottamazione quinquies (#8), con un unicum di saturazione minimo e un potenziale Discover solido, è un faro per chi cerca di emettere luce su tematiche fiscali, mentre il circuito del NoiPA (#4) è un portale verso mondi intitolati all'amministrazione pubblica.\n\nTuttavia, attenzione ai richiami ingannevoli del terreno sportivo, saturato e competitivo, dove Inter Roma (#7) si agita rumorosamente tra molti rivali. Per chi desidera farsi ascoltare nell'eco globale, che cerchi un equilibrio tra rapida rilevanza e duratura saggezza. Affrontate il vento dell’interesse con contenuti unici e inattesi, e sarete artefici del vostro destino digitale."
};
