const trendData = [
  {
    "rank": 18,
    "entity": "messina",
    "discover_score": 20.906587245898987,
    "score_1h": 74.88793103448276,
    "score_4h": 48.58403361344538,
    "score_7d": 25.458579881656803,
    "extracted_entities": "Messina - Città - Sicilia - Italia - Turismo"
  },
  {
    "rank": 5,
    "entity": "ticketmaster",
    "discover_score": 7.9453849408924375,
    "score_1h": 9.370689655172415,
    "score_4h": 22.903361344537814,
    "score_7d": 5.908284023668639,
    "extracted_entities": "Ticketmaster - Biglietti - Eventi - Concerti - Vendita"
  },
  {
    "rank": 1,
    "entity": "verona - parma",
    "discover_score": 7.8372038239064725,
    "score_1h": 79.9530976037405,
    "score_4h": 23.380252100840337,
    "score_7d": 1.7485207100591715,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 33,
    "entity": "bali",
    "discover_score": 7.321691927956913,
    "score_1h": 9.620689655172415,
    "score_4h": 5.069327731092438,
    "score_7d": 24.757396449704142,
    "extracted_entities": "Bali - Turismo - Indonesia - Viaggi - Cultura"
  },
  {
    "rank": 2,
    "entity": "marine le pen",
    "discover_score": 6.058999890797071,
    "score_1h": 35.58620689655172,
    "score_4h": 24.909663865546218,
    "score_7d": 1.0769230769230769,
    "extracted_entities": "Marine Le Pen - Politica francese - Elezioni Francia - Rassemblement National"
  },
  {
    "rank": 29,
    "entity": "petto di pollo",
    "discover_score": 2.963929953446711,
    "score_1h": 17.767241379310345,
    "score_4h": 3.0882352941176467,
    "score_7d": 10.50887573964497,
    "extracted_entities": "Petto di pollo - Cucina - Ricette - Alimentazione"
  },
  {
    "rank": 30,
    "entity": "djokovic",
    "discover_score": 2.8838731518685696,
    "score_1h": 6.163793103448276,
    "score_4h": 3.5357142857142856,
    "score_7d": 9.92603550295858,
    "extracted_entities": "Novak Djokovic - Tennis - Grand Slam - ATP - Serbia"
  },
  {
    "rank": 36,
    "entity": "ios 18.4",
    "discover_score": 2.0232768579389804,
    "score_1h": 0.9655172413793104,
    "score_4h": 1.7836134453781511,
    "score_7d": 8.127218934911243,
    "extracted_entities": "iOS 18.4 - Apple - Aggiornamento software"
  },
  {
    "rank": 11,
    "entity": "kkr vs mi",
    "discover_score": 1.970946743813873,
    "score_1h": 7.094827586206897,
    "score_4h": 9.115546218487395,
    "score_7d": 1.4556213017751478,
    "extracted_entities": "KKR - MI - Cricket - Indian Premier League - Partita"
  },
  {
    "rank": 4,
    "entity": "classifica motogp",
    "discover_score": 1.9429040292801678,
    "score_1h": 5.206896551724138,
    "score_4h": 2.338235294117647,
    "score_7d": 4.174556213017752,
    "extracted_entities": "Classifica - MotoGP - Campionato - Piloti - Corse"
  },
  {
    "rank": 41,
    "entity": "jeff bezos",
    "discover_score": 1.751548709046938,
    "score_1h": 0.5344827586206896,
    "score_4h": 2.088235294117647,
    "score_7d": 6.872781065088757,
    "extracted_entities": "Jeff Bezos - Amazon - Blue Origin - Imprenditore - Spazio"
  },
  {
    "rank": 3,
    "entity": "banconote da 50 euro",
    "discover_score": 1.5766116865048905,
    "score_1h": 52.13793103448276,
    "score_4h": 4.663865546218487,
    "score_7d": 1.5059171597633136,
    "extracted_entities": "Banconote - 50 euro - Valuta - Eurozona - Denaro"
  },
  {
    "rank": 20,
    "entity": "terremoto myanmar morti",
    "discover_score": 1.4962126411093328,
    "score_1h": 0.0,
    "score_4h": 0.17436974789915966,
    "score_7d": 6.375739644970414,
    "extracted_entities": "Terremoto - Myanmar - Vittime"
  },
  {
    "rank": 47,
    "entity": "volterra",
    "discover_score": 1.462666042411429,
    "score_1h": 0.0,
    "score_4h": 1.8004201680672267,
    "score_7d": 5.928994082840236,
    "extracted_entities": "Volterra - Toscana - Turismo - Storia - Architettura"
  },
  {
    "rank": 17,
    "entity": "allerta meteo catania",
    "discover_score": 1.356493957456129,
    "score_1h": 15.560344827586208,
    "score_4h": 6.4978991596638656,
    "score_7d": 1.2485207100591715,
    "extracted_entities": "Allerta meteo - Catania - Previsioni meteo - Maltempo"
  },
  {
    "rank": 7,
    "entity": "francesca brandoli",
    "discover_score": 1.2534587225112357,
    "score_1h": 3.1896551724137927,
    "score_4h": 4.718487394957983,
    "score_7d": 1.2514792899408282,
    "extracted_entities": "Francesca Brandoli"
  },
  {
    "rank": 35,
    "entity": "napoli milan highlights",
    "discover_score": 1.1816861733535449,
    "score_1h": 0.0,
    "score_4h": 0.25630252100840334,
    "score_7d": 5.5295857988165675,
    "extracted_entities": "Napoli - Milan - Highlights - Calcio - Serie A"
  },
  {
    "rank": 8,
    "entity": "francia marine le pen",
    "discover_score": 0.9497869634817268,
    "score_1h": 5.482758620689655,
    "score_4h": 2.8907563025210083,
    "score_7d": 1.4112426035502958,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 9,
    "entity": "serena garitta",
    "discover_score": 0.9338199032006553,
    "score_1h": 8.741379310344827,
    "score_4h": 2.4579831932773106,
    "score_7d": 1.7011834319526629,
    "extracted_entities": "Serena Garitta - Personaggio televisivo - Grande Fratello - Italia"
  },
  {
    "rank": 12,
    "entity": "fabio fognini",
    "discover_score": 0.8317733465764943,
    "score_1h": 8.698275862068964,
    "score_4h": 4.733193277310924,
    "score_7d": 0.31656804733727806,
    "extracted_entities": "Fabio Fognini - Tennis - Atleta - Italia"
  },
  {
    "rank": 31,
    "entity": "sanremonews",
    "discover_score": 0.8143070574337975,
    "score_1h": 1.5775862068965516,
    "score_4h": 0.7289915966386554,
    "score_7d": 3.2662721893491122,
    "extracted_entities": "Sanremonews - Sanremo - Notizie - Liguria - Eventi"
  },
  {
    "rank": 34,
    "entity": "nuova scena 2",
    "discover_score": 0.7526285108961287,
    "score_1h": 0.0847457627118644,
    "score_4h": 0.16806722689075632,
    "score_7d": 3.4733727810650885,
    "extracted_entities": "Scena 2 - Film - Produzione cinematografica"
  },
  {
    "rank": 46,
    "entity": "alberto stasi",
    "discover_score": 0.698853955447911,
    "score_1h": 1.4741379310344827,
    "score_4h": 1.004201680672269,
    "score_7d": 2.6893491124260356,
    "extracted_entities": "Alberto Stasi - Caso di Garlasco - Omicidio - Processo"
  },
  {
    "rank": 45,
    "entity": "livenation",
    "discover_score": 0.6893697075285362,
    "score_1h": 0.7844827586206896,
    "score_4h": 0.1869747899159664,
    "score_7d": 3.2928994082840237,
    "extracted_entities": "Live Nation - Concerti - Eventi - Biglietti - Musica"
  },
  {
    "rank": 44,
    "entity": "danny quinn",
    "discover_score": 0.6866967202695999,
    "score_1h": 0.0,
    "score_4h": 4.273109243697479,
    "score_7d": 0.4378698224852071,
    "extracted_entities": "Danny Quinn - Attore - Cinema - Televisione"
  },
  {
    "rank": 43,
    "entity": "mogol",
    "discover_score": 0.6707377896040685,
    "score_1h": 0.0,
    "score_4h": 4.0021008403361344,
    "score_7d": 0.4940828402366864,
    "extracted_entities": "Mogol - Paroliere - Musica italiana - Lucio Battisti - Canzoni"
  },
  {
    "rank": 19,
    "entity": "partinico",
    "discover_score": 0.6702268753816097,
    "score_1h": 2.1879018118059617,
    "score_4h": 2.5609243697478994,
    "score_7d": 0.9822485207100592,
    "extracted_entities": "Partinico - Sicilia - Comune - Italia"
  },
  {
    "rank": 42,
    "entity": "priceless",
    "discover_score": 0.6227421278497579,
    "score_1h": 1.5172413793103448,
    "score_4h": 0.6365546218487395,
    "score_7d": 2.5266272189349115,
    "extracted_entities": "Mastercard - Campagna pubblicitaria - Valore inestimabile"
  },
  {
    "rank": 25,
    "entity": "gianni bugno",
    "discover_score": 0.6017578139523113,
    "score_1h": 0.1810344827586207,
    "score_4h": 0.09033613445378151,
    "score_7d": 2.603550295857988,
    "extracted_entities": "Gianni Bugno - Ciclismo - Campione del Mondo - Giro d'Italia - Tour de France"
  },
  {
    "rank": 32,
    "entity": "sciopero 1 aprile 2025",
    "discover_score": 0.5384469262700134,
    "score_1h": 0.6379310344827587,
    "score_4h": 0.14915966386554622,
    "score_7d": 2.3431952662721893,
    "extracted_entities": "Sciopero - 1 aprile 2025 - Proteste - Lavoratori - Sindacati"
  },
  {
    "rank": 50,
    "entity": "lazio torino formazioni",
    "discover_score": 0.527782269680775,
    "score_1h": 1.3706896551724137,
    "score_4h": 0.2542016806722689,
    "score_7d": 2.393491124260355,
    "extracted_entities": "Lazio - Torino - Formazioni - Calcio - Serie A"
  },
  {
    "rank": 6,
    "entity": "daniel craig",
    "discover_score": 0.5002245495540925,
    "score_1h": 1.353448275862069,
    "score_4h": 0.2773109243697479,
    "score_7d": 1.3816568047337279,
    "extracted_entities": "Daniel Craig - Attore - James Bond - Film - Cinema"
  },
  {
    "rank": 13,
    "entity": "whatsapp intelligenza artificiale",
    "discover_score": 0.4830577800855515,
    "score_1h": 5.431034482758621,
    "score_4h": 2.0021008403361344,
    "score_7d": 0.4319526627218935,
    "extracted_entities": "WhatsApp - Intelligenza Artificiale - Tecnologia"
  },
  {
    "rank": 23,
    "entity": "bianca panconi attrice",
    "discover_score": 0.4472735272238116,
    "score_1h": 1.5775862068965516,
    "score_4h": 0.6029411764705882,
    "score_7d": 1.3757396449704142,
    "extracted_entities": "Bianca Panconi - Attrice"
  },
  {
    "rank": 24,
    "entity": "viareggio cup",
    "discover_score": 0.44432825524769265,
    "score_1h": 0.6011104617182934,
    "score_4h": 0.7773109243697479,
    "score_7d": 1.242603550295858,
    "extracted_entities": "Viareggio Cup - Torneo di calcio giovanile - Viareggio - Competizione internazionale - Calcio giovanile"
  },
  {
    "rank": 39,
    "entity": "ronaldo inter",
    "discover_score": 0.43729694419986415,
    "score_1h": 1.9827586206896552,
    "score_4h": 0.6680672268907563,
    "score_7d": 1.452662721893491,
    "extracted_entities": "Ronaldo - Inter - Calcio"
  },
  {
    "rank": 16,
    "entity": "ticketmaster lady gaga",
    "discover_score": 0.40660048354050715,
    "score_1h": 0.0,
    "score_4h": 1.0105042016806722,
    "score_7d": 0.7662721893491125,
    "extracted_entities": "Ticketmaster - Lady Gaga - Biglietti - Concerti - Eventi"
  },
  {
    "rank": 49,
    "entity": "elisabetta cocciaretto",
    "discover_score": 0.3339691770066672,
    "score_1h": 0.0,
    "score_4h": 0.35084033613445376,
    "score_7d": 1.1745562130177516,
    "extracted_entities": "Elisabetta Cocciaretto - Tennis - Italia"
  },
  {
    "rank": 10,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.28743813412088304,
    "score_1h": 2.6206896551724137,
    "score_4h": 0.4642857142857143,
    "score_7d": 0.47928994082840237,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 37,
    "entity": "incidente a14",
    "discover_score": 0.25595615511306496,
    "score_1h": 1.7155172413793103,
    "score_4h": 0.226890756302521,
    "score_7d": 0.742603550295858,
    "extracted_entities": "Incidente - A14 - Autostrada - Traffico - Sicurezza stradale"
  },
  {
    "rank": 22,
    "entity": "ashwani kumar",
    "discover_score": 0.22270583622727885,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.384453781512605,
    "score_7d": 0.35207100591715973,
    "extracted_entities": "Ashwani Kumar - Persona"
  },
  {
    "rank": 26,
    "entity": "milan ibrahimovic",
    "discover_score": 0.19584456655673818,
    "score_1h": 0.7672413793103449,
    "score_4h": 0.07983193277310924,
    "score_7d": 0.44378698224852076,
    "extracted_entities": "Milan - Ibrahimovic - Calcio"
  },
  {
    "rank": 14,
    "entity": "paola motta giornalista sky",
    "discover_score": 0.1924168379969741,
    "score_1h": 5.741379310344827,
    "score_4h": 0.5357142857142857,
    "score_7d": 0.06804733727810651,
    "extracted_entities": "Paola Motta - Giornalista - Sky"
  },
  {
    "rank": 28,
    "entity": "botic van de zandschulp",
    "discover_score": 0.18822646790980235,
    "score_1h": 0.0,
    "score_4h": 0.3739495798319328,
    "score_7d": 0.21005917159763315,
    "extracted_entities": "Botic van de Zandschulp - Tennis - Giocatore"
  },
  {
    "rank": 27,
    "entity": "giuditta lualdi pallavolo",
    "discover_score": 0.18028239908258611,
    "score_1h": 0.0,
    "score_4h": 0.1323529411764706,
    "score_7d": 0.3224852071005917,
    "extracted_entities": "Giuditta Lualdi - Pallavolo"
  },
  {
    "rank": 40,
    "entity": "ariete oroscopo oggi paolo fox",
    "discover_score": 0.1734634608341401,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.542016806722689,
    "score_7d": 0.07692307692307693,
    "extracted_entities": "Ariete - Oroscopo - Paolo Fox - Oggi"
  },
  {
    "rank": 15,
    "entity": "nuova rottamazione cartelle",
    "discover_score": 0.1692261559445419,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.3970588235294118,
    "score_7d": 0.047337278106508875,
    "extracted_entities": "Rottamazione - Cartelle esattoriali - Fisco - Debiti - Agenzia delle Entrate"
  },
  {
    "rank": 38,
    "entity": "verona vs parma",
    "discover_score": 0.1691838818057643,
    "score_1h": 1.543103448275862,
    "score_4h": 0.22478991596638656,
    "score_7d": 0.2366863905325444,
    "extracted_entities": "Verona - Parma - Partita di calcio - Serie B - Squadre di calcio"
  },
  {
    "rank": 21,
    "entity": "ezequiel lavezzi",
    "discover_score": 0.15316293166280245,
    "score_1h": 0.8620689655172413,
    "score_4h": 0.28781512605042014,
    "score_7d": 0.05917159763313609,
    "extracted_entities": "Ezequiel Lavezzi - Calciatore - Argentina - Paris Saint-Germain - Napoli"
  },
  {
    "rank": 48,
    "entity": "teun koopmeiners",
    "discover_score": 0.11419422903573372,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.08284023668639054,
    "extracted_entities": "Teun Koopmeiners - Calciatore - Atalanta - Serie A - Nazionale Olandese"
  },
  {
    "rank": 51,
    "entity": "sammy basso",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "polizze catastrofali proroga",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "canva",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "razzo spectrum",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "allerta vento",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "sara ricci",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "reddit",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "gatti",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "inter udinese highlights",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "donald trump",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "lorenzo tano",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "muller",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "asmaa uomini e donne",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "nico lopez",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "manlio messina",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "mctominay",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "ramandeep singh",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "spurs - warriors",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "asma uomini e donne",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "virginia giuffre",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "diego de vivo",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "mastercard lady gaga",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "conceicao",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "betis - siviglia",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "andrea pirlo",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "volkan konak",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "vladimir putin",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "gp austin",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "atp ranking",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "sofia raffaeli",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "società sportiva calcio napoli",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "le iene inside",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "calendario napoli",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "tesla",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "avellino calcio",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "200 euro bonus bollette",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "3b meteo",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "borsa italiana",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "meteo milano",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "antonio albanese",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "ac milan",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "meteo napoli",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "tuttonapoli",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "million day",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "weather",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "luca guadagnino",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "pioli",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "lobotka",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "vinitaly",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "manish pandey",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "sarzana",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "silvia salis",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "buongiorno lunedi 31 marzo",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "mcdonald's",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "il meteo",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "mario giordano",
    "discover_score": 0.09192810509317567,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 107,
    "entity": "daniel pennac",
    "discover_score": 0.09184882441846551,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 108,
    "entity": "battocletti",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "meteo roma oggi",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "jorge martin",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "azioni enel",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "simona ventura",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "cavaliers - clippers",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "francesco acerbi",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "di giannantonio",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "dennis quaid",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "suns - rockets",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "vignesh puthur",
    "discover_score": 0.09096078642034822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 120,
    "entity": "stefania cappa",
    "discover_score": 0.09089160247459882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 121,
    "entity": "francesco gabbani",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "moto 2",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "timberwolves - pistons",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "ftse mib",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "weather tomorrow",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "parma inter",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "antropova",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "eclissi lunare",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "milan oggi",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "trade republic",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "tom hanks",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "accardi",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "unica",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "azioni tim",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "warren bondo",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "bucks - hawks",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "leao",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "3bmeteo",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "gimenez",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "luca marini",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "castellabate",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "venezia - derthona",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "romelu lukaku",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "penne",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "grok ai",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "lille lens",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "calvi",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "chatgpt down",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "antonio conte",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "pafundi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "anticipazioni tradimento 30 marzo",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "azioni stellantis",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "askatasuna",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "miami open 2025",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "le monde",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "newell's old boys - boca juniors",
    "discover_score": 0.08877465030646665,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 157,
    "entity": "azioni saipem",
    "discover_score": 0.08872432189246328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 158,
    "entity": "joao felix",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "moto 3",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "rovereto",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "stellantis azioni",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "inter news",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "calendario serie a",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "senatore giacomo caliendo",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "robert de niro",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "albanese",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "johnny depp",
    "discover_score": 0.08824089570045654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 168,
    "entity": "monfalcone",
    "discover_score": 0.088194434291085,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 169,
    "entity": "betis",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "areanapoli",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "aviano",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "007",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "podcast",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "bengasi",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "madonie",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "axios",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "gabriele paolini eredità",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "james bond",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "valentino rossi",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "mattia esposito",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "deutsche bank",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "manuale per signorine",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "lorena quaranta",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "meteo pescara",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "martin",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "bologna napoli",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "bartezzaghi",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "aldeguer",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "pallavolo femminile",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "ostuni",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "calcio streaming gratis",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "guido meda",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "real betis vs sevilla",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "la nove diretta",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "christopher nolan",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "antonio cornacchione",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "quando gioca il napoli",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "cristina seymandi",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "altamura",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "alba",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "porto",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "ngonge",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "austin motogp",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "zagrebelsky",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "alex jimenez",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "jack black",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "littizzetto",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "affari tuoi",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "ottochannel",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "rolex",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "spinea",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "nicolò barella",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "oslo",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "eraldo pecci",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "meteo verona",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "atp bucarest 2025",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "bossetti",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "fire damage restoration",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "tammy abraham",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "mel gibson",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "meteo brescia",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "roberto bolle",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "real betis",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "lanzarote",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "diletta leotta",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "taiwan",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "filippa lagerback",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "tommaso cassissa",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "jason momoa",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "gialappa",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "ncis origins",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "jimenez milan",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "julio iglesias",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "richard chamberlain oggi",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "ospiti mara venier domenica in",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "beyonce",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "varsavia",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "porto fc",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "turchia istanbul",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "lega serie a",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "serie a oggi risultati e classifica",
    "discover_score": 0.08547437138421397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "tg",
    "discover_score": 0.08544413025264191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "the last of us",
    "discover_score": 0.08541403508525716,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "iran",
    "discover_score": 0.08538408457378113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "pippo franco",
    "discover_score": 0.08535427742700234,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "vico equense",
    "discover_score": 0.08532461237048485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "heath ledger",
    "discover_score": 0.08529508814628277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "sky",
    "discover_score": 0.08526570351266076,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "foreign fighter",
    "discover_score": 0.08523645724382045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "meredith kercher",
    "discover_score": 0.08520734812963249,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "juan jesus",
    "discover_score": 0.08517837497537416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "nato",
    "discover_score": 0.08514953660147252,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "messaggero",
    "discover_score": 0.08512083184325263,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "onu",
    "discover_score": 0.08509225955069119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "tutto napoli",
    "discover_score": 0.08506381858817494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "classifica serie c girone c",
    "discover_score": 0.08503550783426429,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "real betis siviglia",
    "discover_score": 0.08500732618146141,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "bezzecchi",
    "discover_score": 0.08497927253598325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "il giornale di vicenza",
    "discover_score": 0.08495134581753899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "athletic bilbao",
    "discover_score": 0.08492354495911203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "mare fuori 6 quando esce",
    "discover_score": 0.08489586890674626,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.08486831661933661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "golden bachelor",
    "discover_score": 0.08484088706842376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "premier padel",
    "discover_score": 0.08481357923799289,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "giornale di sicilia",
    "discover_score": 0.08478639212427637,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "la 8 diretta",
    "discover_score": 0.0847593247355603,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "holland",
    "discover_score": 0.08473237609199494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "luna",
    "discover_score": 0.08470554522540857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "pam",
    "discover_score": 0.08467883117912525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "estoril porto",
    "discover_score": 0.08465223300778593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "avvenire",
    "discover_score": 0.08462574977717295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "adolescence serie",
    "discover_score": 0.08459938056403808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "targato cn",
    "discover_score": 0.08457312445593364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "foligno",
    "discover_score": 0.08454698055104698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "erling haaland",
    "discover_score": 0.08452094795803801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "di lorenzo",
    "discover_score": 0.08449502579587984,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "meteo milano oggi",
    "discover_score": 0.08446921319370236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "djuric",
    "discover_score": 0.08444350929063883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "rolex land dweller",
    "discover_score": 0.08441791323567525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "vl pesaro",
    "discover_score": 0.08439242418750258,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-31 17:41:45",
  "trends_count": 280,
  "top_score": 20.906587245898987,
  "runtime_minutes": 3.452590791384379,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
