const trendData = [
  {
    "rank": 44,
    "entity": "canva",
    "discover_score": 24.003154485223487,
    "score_1h": 83.18103448275862,
    "score_4h": 45.88235294117647,
    "score_7d": 46.26331360946746,
    "extracted_entities": "Canva - Design grafico - Strumenti online - Creatività"
  },
  {
    "rank": 47,
    "entity": "gatti",
    "discover_score": 19.924984185241616,
    "score_1h": 48.224137931034484,
    "score_4h": 26.703781512605044,
    "score_7d": 49.56213017751479,
    "extracted_entities": "Gatti - Animali domestici - Cura dei gatti - Razze di gatti - Alimentazione dei gatti"
  },
  {
    "rank": 1,
    "entity": "napoli - milan",
    "discover_score": 15.478046611844919,
    "score_1h": 57.53448275862068,
    "score_4h": 40.10504201680672,
    "score_7d": 2.9763313609467454,
    "extracted_entities": "Napoli - Milan - Calcio - Serie A - Partita"
  },
  {
    "rank": 31,
    "entity": "inter",
    "discover_score": 12.013704280071563,
    "score_1h": 73.62068965517241,
    "score_4h": 60.044187968074255,
    "score_7d": 5.84319526627219,
    "extracted_entities": "Inter - Calcio - Serie A - Milano - FC Internazionale"
  },
  {
    "rank": 2,
    "entity": "marine le pen",
    "discover_score": 10.110510232899008,
    "score_1h": 36.87931034482759,
    "score_4h": 34.670168067226896,
    "score_7d": 2.2958579881656807,
    "extracted_entities": "Marine Le Pen - Politica francese - Elezioni - Rassemblement National - Francia"
  },
  {
    "rank": 7,
    "entity": "coppa italia",
    "discover_score": 9.867658518620727,
    "score_1h": 25.198275862068964,
    "score_4h": 18.035635174571922,
    "score_7d": 13.43491124260355,
    "extracted_entities": "Coppa Italia - Calcio - Competizione - Italia - Squadre"
  },
  {
    "rank": 40,
    "entity": "garlasco",
    "discover_score": 4.623495524604063,
    "score_1h": 19.81896551724138,
    "score_4h": 15.546218487394958,
    "score_7d": 8.609467455621301,
    "extracted_entities": "Garlasco - Omicidio - Chiara Poggi - Alberto Stasi - Processo"
  },
  {
    "rank": 19,
    "entity": "djokovic",
    "discover_score": 4.435852524896058,
    "score_1h": 2.655172413793103,
    "score_4h": 9.266806722689076,
    "score_7d": 9.955621301775148,
    "extracted_entities": "Novak Djokovic - Tennis - ATP - Grand Slam - Serbia"
  },
  {
    "rank": 15,
    "entity": "partinico",
    "discover_score": 3.5545871388765238,
    "score_1h": 7.620689655172415,
    "score_4h": 4.474789915966387,
    "score_7d": 9.914201183431953,
    "extracted_entities": "Partinico - Sicilia - Comune - Italia"
  },
  {
    "rank": 5,
    "entity": "classifica motogp",
    "discover_score": 2.4534027560466076,
    "score_1h": 4.267241379310345,
    "score_4h": 6.586521219366408,
    "score_7d": 3.121301775147929,
    "extracted_entities": "Classifica - MotoGP - Campionato - Corse"
  },
  {
    "rank": 29,
    "entity": "muller",
    "discover_score": 2.0915137932788537,
    "score_1h": 0.4482758620689655,
    "score_4h": 1.546218487394958,
    "score_7d": 8.251479289940828,
    "extracted_entities": "Thomas Müller - Calciatore - Germania - Bayern Monaco - Bundesliga"
  },
  {
    "rank": 4,
    "entity": "bonus bollette 200 euro",
    "discover_score": 1.9060938320547391,
    "score_1h": 3.646551724137931,
    "score_4h": 1.114368341478851,
    "score_7d": 4.946745562130178,
    "extracted_entities": "Bonus - Bollette - 200 Euro - Sussidi Governativi - Energia"
  },
  {
    "rank": 41,
    "entity": "sara ricci",
    "discover_score": 1.560743002284063,
    "score_1h": 0.35344827586206895,
    "score_4h": 2.9180672268907566,
    "score_7d": 5.34319526627219,
    "extracted_entities": "Sara Ricci - Attrice - Televisione - Italia"
  },
  {
    "rank": 3,
    "entity": "ticketmaster",
    "discover_score": 1.4680370838089347,
    "score_1h": 37.8448275862069,
    "score_4h": 8.615546218487395,
    "score_7d": 0.10059171597633136,
    "extracted_entities": "Ticketmaster - Biglietti - Eventi - Concerti - Vendite"
  },
  {
    "rank": 38,
    "entity": "moto gp oggi",
    "discover_score": 1.4212130859360277,
    "score_1h": 0.0,
    "score_4h": 0.1589958158995816,
    "score_7d": 6.825443786982248,
    "extracted_entities": "MotoGP - Oggi - Corse - Eventi - Motociclismo"
  },
  {
    "rank": 30,
    "entity": "verona parma",
    "discover_score": 1.388339152346094,
    "score_1h": 9.801724137931036,
    "score_4h": 5.609243697478991,
    "score_7d": 2.3195266272189348,
    "extracted_entities": "Verona - Parma - Calcio - Serie A - Partita"
  },
  {
    "rank": 27,
    "entity": "motogp classifica 2025",
    "discover_score": 1.338588388548393,
    "score_1h": 2.060344827586207,
    "score_4h": 2.6346471643050524,
    "score_7d": 4.097633136094674,
    "extracted_entities": "MotoGP - Classifica - 2025"
  },
  {
    "rank": 10,
    "entity": "kkr vs mi",
    "discover_score": 1.083406433118917,
    "score_1h": 18.732758620689655,
    "score_4h": 4.084033613445378,
    "score_7d": 1.2928994082840237,
    "extracted_entities": "KKR - MI - Cricket - Indian Premier League - Partita"
  },
  {
    "rank": 23,
    "entity": "danny quinn",
    "discover_score": 0.9929483212743323,
    "score_1h": 0.0,
    "score_4h": 5.445378151260504,
    "score_7d": 0.7337278106508875,
    "extracted_entities": "Danny Quinn - Attore - Cinema - Televisione"
  },
  {
    "rank": 48,
    "entity": "live nation",
    "discover_score": 0.9819181067262968,
    "score_1h": 0.0,
    "score_4h": 0.04831932773109244,
    "score_7d": 4.997041420118343,
    "extracted_entities": "Live Nation - Concerti - Eventi - Musica - Biglietti"
  },
  {
    "rank": 13,
    "entity": "banconote da 50 euro",
    "discover_score": 0.9179055617101644,
    "score_1h": 27.517241379310345,
    "score_4h": 6.336134453781513,
    "score_7d": 0.09763313609467456,
    "extracted_entities": "Banconote - 50 euro - Valuta - Eurozona - Denaro"
  },
  {
    "rank": 9,
    "entity": "mogol",
    "discover_score": 0.8431498158169669,
    "score_1h": 16.724137931034484,
    "score_4h": 3.9579831932773106,
    "score_7d": 0.5532544378698225,
    "extracted_entities": "Mogol - Paroliere - Musica Italiana - Canzoni - Collaborazioni"
  },
  {
    "rank": 32,
    "entity": "priceless",
    "discover_score": 0.7390873643387061,
    "score_1h": 1.5689655172413792,
    "score_4h": 2.1932773109243695,
    "score_7d": 1.7899408284023668,
    "extracted_entities": "Mastercard - Campagna pubblicitaria - Valore inestimabile"
  },
  {
    "rank": 12,
    "entity": "serena garitta",
    "discover_score": 0.7281956616371994,
    "score_1h": 1.2241379310344827,
    "score_4h": 3.7289915966386555,
    "score_7d": 0.41420118343195267,
    "extracted_entities": "Serena Garitta - Personaggio televisivo - Italia"
  },
  {
    "rank": 49,
    "entity": "terremoto myanmar morti",
    "discover_score": 0.7162225345432428,
    "score_1h": 0.6120689655172413,
    "score_4h": 0.04201680672268908,
    "score_7d": 3.6094674556213016,
    "extracted_entities": "Terremoto - Myanmar - Vittime"
  },
  {
    "rank": 39,
    "entity": "asmaa uomini e donne",
    "discover_score": 0.6571411001899298,
    "score_1h": 0.0,
    "score_4h": 2.9159663865546217,
    "score_7d": 1.0,
    "extracted_entities": "Asmaa - Uomini e Donne - Programma televisivo"
  },
  {
    "rank": 42,
    "entity": "avellino - benevento",
    "discover_score": 0.6365671251491726,
    "score_1h": 0.27586206896551724,
    "score_4h": 0.7142857142857143,
    "score_7d": 2.5384615384615388,
    "extracted_entities": "Avellino - Benevento - Rivalità calcistica - Serie B - Campania"
  },
  {
    "rank": 8,
    "entity": "francesca brandoli",
    "discover_score": 0.564715376014183,
    "score_1h": 17.29310344827586,
    "score_4h": 3.2247899159663866,
    "score_7d": 0.09171597633136094,
    "extracted_entities": "Francesca Brandoli"
  },
  {
    "rank": 43,
    "entity": "polizze catastrofali proroga",
    "discover_score": 0.5380054475690635,
    "score_1h": 0.0,
    "score_4h": 0.7668067226890757,
    "score_7d": 1.9704142011834318,
    "extracted_entities": "Polizze catastrofali - Proroga - Assicurazioni - Rischi naturali - Legislazione"
  },
  {
    "rank": 37,
    "entity": "nuova scena 2",
    "discover_score": 0.5053185370059172,
    "score_1h": 0.9310344827586207,
    "score_4h": 0.25210084033613445,
    "score_7d": 2.1420118343195265,
    "extracted_entities": "Scena 2 - Film - Cinema"
  },
  {
    "rank": 45,
    "entity": "lorenzo tano",
    "discover_score": 0.4978838862641773,
    "score_1h": 0.5689655172413793,
    "score_4h": 2.134453781512605,
    "score_7d": 0.7751479289940828,
    "extracted_entities": "Lorenzo Tano"
  },
  {
    "rank": 6,
    "entity": "daniel craig",
    "discover_score": 0.4964573678296942,
    "score_1h": 0.0,
    "score_4h": 1.2610755599310854,
    "score_7d": 0.6893491124260356,
    "extracted_entities": "Daniel Craig - Attore - James Bond - Filmografia - Celebrità"
  },
  {
    "rank": 26,
    "entity": "intelligenza artificiale whatsapp",
    "discover_score": 0.4874909554282209,
    "score_1h": 3.594827586206897,
    "score_4h": 1.1096480433177456,
    "score_7d": 1.242603550295858,
    "extracted_entities": "Intelligenza artificiale - WhatsApp - Tecnologia"
  },
  {
    "rank": 11,
    "entity": "solet",
    "discover_score": 0.47398759934471674,
    "score_1h": 3.275862068965517,
    "score_4h": 0.7226890756302521,
    "score_7d": 1.1597633136094674,
    "extracted_entities": "Solet - Tecnologia - Energia solare - Innovazione"
  },
  {
    "rank": 25,
    "entity": "atp marrakech",
    "discover_score": 0.38755465705967346,
    "score_1h": 2.0,
    "score_4h": 0.9810924369747899,
    "score_7d": 0.8165680473372781,
    "extracted_entities": "ATP - Marrakech - Tennis - Torneo"
  },
  {
    "rank": 21,
    "entity": "torneo di viareggio",
    "discover_score": 0.34863196127353957,
    "score_1h": 4.275862068965518,
    "score_4h": 0.47478991596638653,
    "score_7d": 0.9378698224852071,
    "extracted_entities": "Torneo di Viareggio - Calcio - Giovani Talenti - Competizione Internazionale"
  },
  {
    "rank": 17,
    "entity": "botic van de zandschulp",
    "discover_score": 0.321768466476161,
    "score_1h": 2.0086206896551726,
    "score_4h": 0.8901146232551599,
    "score_7d": 0.46449704142011833,
    "extracted_entities": "Botic van de Zandschulp - Tennis - Giocatore"
  },
  {
    "rank": 24,
    "entity": "ezequiel lavezzi",
    "discover_score": 0.2942127962663959,
    "score_1h": 0.0,
    "score_4h": 0.10714285714285714,
    "score_7d": 0.9615384615384615,
    "extracted_entities": "Ezequiel Lavezzi - Calciatore - Argentina - Paris Saint-Germain - Napoli"
  },
  {
    "rank": 20,
    "entity": "gianni bugno",
    "discover_score": 0.28727864647238227,
    "score_1h": 0.5344827586206896,
    "score_4h": 0.6009194472768187,
    "score_7d": 0.5207100591715976,
    "extracted_entities": "Gianni Bugno - Ciclismo - Campione del Mondo - Giro d'Italia - Tour de France"
  },
  {
    "rank": 14,
    "entity": "bando concorso allievi vice ispettori",
    "discover_score": 0.27104400091056385,
    "score_1h": 0.6896551724137931,
    "score_4h": 0.3130252100840336,
    "score_7d": 0.5710059171597633,
    "extracted_entities": "Bando - Concorso - Allievi - Vice Ispettori"
  },
  {
    "rank": 34,
    "entity": "donald trump groenlandia",
    "discover_score": 0.263411478349004,
    "score_1h": 0.0,
    "score_4h": 0.3403361344537815,
    "score_7d": 0.6834319526627218,
    "extracted_entities": "Donald Trump - Groenlandia - Acquisto - Politica internazionale"
  },
  {
    "rank": 18,
    "entity": "ashwani kumar",
    "discover_score": 0.25971244422242834,
    "score_1h": 2.387931034482759,
    "score_4h": 0.7563025210084034,
    "score_7d": 0.2692307692307692,
    "extracted_entities": "Ashwani Kumar - Persona"
  },
  {
    "rank": 16,
    "entity": "nuova rottamazione quinquies",
    "discover_score": 0.2305997554147729,
    "score_1h": 0.0,
    "score_4h": 0.1512605042016807,
    "score_7d": 0.5059171597633136,
    "extracted_entities": "Rottamazione - Quinquies - Fisco - Debiti - Agenzia delle Entrate"
  },
  {
    "rank": 22,
    "entity": "francia marine le pen",
    "discover_score": 0.2044793541778847,
    "score_1h": 1.4482758620689655,
    "score_4h": 0.5966386554621849,
    "score_7d": 0.1331360946745562,
    "extracted_entities": "Francia - Marine Le Pen - Politica"
  },
  {
    "rank": 28,
    "entity": "milan ibrahimovic",
    "discover_score": 0.20223054915750888,
    "score_1h": 0.0,
    "score_4h": 0.43907563025210083,
    "score_7d": 0.242603550295858,
    "extracted_entities": "Milan - Ibrahimovic - Calcio"
  },
  {
    "rank": 46,
    "entity": "incidente a14",
    "discover_score": 0.1981950541566517,
    "score_1h": 0.4224137931034483,
    "score_4h": 0.6260504201680672,
    "score_7d": 0.16863905325443787,
    "extracted_entities": "Incidente - A14 - Autostrada - Traffico - Sicurezza stradale"
  },
  {
    "rank": 33,
    "entity": "manish pandey",
    "discover_score": 0.16827820333545798,
    "score_1h": 1.0086206896551724,
    "score_4h": 0.25210084033613445,
    "score_7d": 0.1982248520710059,
    "extracted_entities": "Manish Pandey - Cricket - India"
  },
  {
    "rank": 35,
    "entity": "sciopero 1 aprile 2025",
    "discover_score": 0.16604487933470458,
    "score_1h": 0.0,
    "score_4h": 0.04411764705882353,
    "score_7d": 0.3343195266272189,
    "extracted_entities": "Sciopero - 1 aprile 2025 - Protesta - Lavoratori - Sindacati"
  },
  {
    "rank": 36,
    "entity": "bianca panconi attrice",
    "discover_score": 0.137134037619747,
    "score_1h": 0.0,
    "score_4h": 0.19908758482472488,
    "score_7d": 0.07100591715976332,
    "extracted_entities": "Bianca Panconi - Attrice"
  },
  {
    "rank": 50,
    "entity": "teun koopmeiners",
    "discover_score": 0.09999387081029909,
    "score_1h": 0.0,
    "score_4h": 0.012605042016806723,
    "score_7d": 0.0,
    "extracted_entities": "Teun Koopmeiners - Calciatore - Atalanta - Serie A - Olanda"
  },
  {
    "rank": 51,
    "entity": "manlio messina",
    "discover_score": 0.09855641515192037,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 52,
    "entity": "nico lopez",
    "discover_score": 0.09836816773278892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 53,
    "entity": "razzo spectrum",
    "discover_score": 0.09818420346099963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 54,
    "entity": "allerta vento",
    "discover_score": 0.09800434553511525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 55,
    "entity": "donald trump",
    "discover_score": 0.09782842758707197,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 56,
    "entity": "ticket master",
    "discover_score": 0.0976562928886095,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 57,
    "entity": "giuditta lualdi",
    "discover_score": 0.09748779363109165,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 58,
    "entity": "andrea pirlo",
    "discover_score": 0.09732279027076805,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 59,
    "entity": "buon lunedi 31 marzo",
    "discover_score": 0.09716115093251035,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 60,
    "entity": "mctominay",
    "discover_score": 0.09700275086590245,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 61,
    "entity": "spurs - warriors",
    "discover_score": 0.096847471948296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 62,
    "entity": "mastercard lady gaga",
    "discover_score": 0.09669520223007592,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 63,
    "entity": "silvia salis",
    "discover_score": 0.0965458355179304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 64,
    "entity": "calendario inter",
    "discover_score": 0.09639927099239892,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 65,
    "entity": "inter oggi",
    "discover_score": 0.0962554128563897,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 66,
    "entity": "diego de vivo",
    "discover_score": 0.09611417001172222,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 67,
    "entity": "protezione civile sicilia",
    "discover_score": 0.09597545576107192,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 68,
    "entity": "motogp austin",
    "discover_score": 0.09583918753297341,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 69,
    "entity": "betis - siviglia",
    "discover_score": 0.09570528662778736,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 70,
    "entity": "tesla",
    "discover_score": 0.09557367798275299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 71,
    "entity": "sofia raffaeli",
    "discover_score": 0.09544428995444114,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 72,
    "entity": "volkan konak",
    "discover_score": 0.09531705411709313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 73,
    "entity": "borsa italiana",
    "discover_score": 0.09519190507548161,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 74,
    "entity": "atp ranking",
    "discover_score": 0.09506878029106357,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 75,
    "entity": "million day",
    "discover_score": 0.0949476199203152,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 76,
    "entity": "oroscopo capricorno paolo fox",
    "discover_score": 0.09482836666424431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 77,
    "entity": "società sportiva calcio napoli",
    "discover_score": 0.09471096562817122,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 78,
    "entity": "il meteo",
    "discover_score": 0.09459536419095324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 79,
    "entity": "meteo milano",
    "discover_score": 0.09448151188290471,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 80,
    "entity": "3b meteo",
    "discover_score": 0.09436936027173116,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 81,
    "entity": "meteo napoli",
    "discover_score": 0.094258862855859,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 82,
    "entity": "vladimir putin",
    "discover_score": 0.09414997496459536,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 83,
    "entity": "richard chamberlain uccelli di rovo",
    "discover_score": 0.09404265366460368,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 84,
    "entity": "antonio albanese",
    "discover_score": 0.09393685767222369,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 85,
    "entity": "weather",
    "discover_score": 0.09383254727120618,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 86,
    "entity": "chatgpt down",
    "discover_score": 0.09372968423546808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 87,
    "entity": "ac milan",
    "discover_score": 0.09362823175650699,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 88,
    "entity": "tuttonapoli",
    "discover_score": 0.09352815437514386,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 89,
    "entity": "vinitaly",
    "discover_score": 0.09342941791728956,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 90,
    "entity": "pioli",
    "discover_score": 0.09333198943345576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 91,
    "entity": "mario giordano",
    "discover_score": 0.09323583714175261,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 92,
    "entity": "luca guadagnino",
    "discover_score": 0.09314093037413629,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 93,
    "entity": "sammy basso",
    "discover_score": 0.09304723952568791,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 94,
    "entity": "guenda goria",
    "discover_score": 0.09295473600672219,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 95,
    "entity": "russia putin",
    "discover_score": 0.09286339219753927,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 96,
    "entity": "estoril praia - porto",
    "discover_score": 0.09277318140564819,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 97,
    "entity": "lobotka",
    "discover_score": 0.09268407782530214,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 98,
    "entity": "buongiorno lunedi 31 marzo",
    "discover_score": 0.09259605649919832,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 99,
    "entity": "sarzana",
    "discover_score": 0.09250909328220575,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 100,
    "entity": "spal",
    "discover_score": 0.09242316480699417,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 101,
    "entity": "azioni enel",
    "discover_score": 0.09233824845144649,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 102,
    "entity": "parma inter",
    "discover_score": 0.09225432230774548,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 103,
    "entity": "askatasuna",
    "discover_score": 0.09217136515303313,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 104,
    "entity": "tom hanks",
    "discover_score": 0.09208935642154824,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 105,
    "entity": "dove guardare inter - udinese calcio",
    "discover_score": 0.09200827617815434,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 106,
    "entity": "battocletti",
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
    "entity": "ios 18.4",
    "discover_score": 0.09177041596463477,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 109,
    "entity": "jorge martin",
    "discover_score": 0.09169286207937509,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 110,
    "entity": "suns - rockets",
    "discover_score": 0.09161614562681378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 111,
    "entity": "simona ventura",
    "discover_score": 0.09154024996784299,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 112,
    "entity": "cavaliers - clippers",
    "discover_score": 0.09146515894136831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 113,
    "entity": "francesco acerbi",
    "discover_score": 0.09139085684642648,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 114,
    "entity": "manchester city",
    "discover_score": 0.09131732842512419,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 115,
    "entity": "dennis quaid",
    "discover_score": 0.09124455884635378,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 116,
    "entity": "timberwolves - pistons",
    "discover_score": 0.09117253369024364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 117,
    "entity": "di giannantonio",
    "discover_score": 0.0911012389333045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 118,
    "entity": "trento - brescia",
    "discover_score": 0.0910306609342344,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 119,
    "entity": "trump",
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
    "entity": "pistoia - trieste",
    "discover_score": 0.09082309652315983,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 122,
    "entity": "francesco gabbani",
    "discover_score": 0.09075525632354065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 123,
    "entity": "penne",
    "discover_score": 0.0906880699532074,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 124,
    "entity": "moto 2",
    "discover_score": 0.09062152579868396,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 125,
    "entity": "azioni tim",
    "discover_score": 0.09055561254510894,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 126,
    "entity": "unica",
    "discover_score": 0.09049031916622662,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 127,
    "entity": "weather tomorrow",
    "discover_score": 0.09042563491478989,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 128,
    "entity": "antropova",
    "discover_score": 0.09036154931335562,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 129,
    "entity": "eclissi lunare",
    "discover_score": 0.09029805214545304,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 130,
    "entity": "dinamo bucurești - fcsb",
    "discover_score": 0.09023513344710772,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 131,
    "entity": "independence day",
    "discover_score": 0.09017278349870363,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 132,
    "entity": "football club internazionale milano",
    "discover_score": 0.09011099281716795,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 133,
    "entity": "tennis",
    "discover_score": 0.09004975214846297,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 134,
    "entity": "bucks - hawks",
    "discover_score": 0.08998905246037105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 135,
    "entity": "trade republic",
    "discover_score": 0.08992888493555902,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 136,
    "entity": "udine - fortitudo bologna",
    "discover_score": 0.0898692409649093,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 137,
    "entity": "3bmeteo",
    "discover_score": 0.0898101121411054,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 138,
    "entity": "milan oggi",
    "discover_score": 0.08975149025246065,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 139,
    "entity": "ettore bassi",
    "discover_score": 0.08969336727697877,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 140,
    "entity": "inter calcio",
    "discover_score": 0.08963573537663638,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 141,
    "entity": "warren bondo",
    "discover_score": 0.08957858689187757,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 142,
    "entity": "leao",
    "discover_score": 0.08952191433631083,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 143,
    "entity": "gimenez",
    "discover_score": 0.08946571039160013,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 144,
    "entity": "castellabate",
    "discover_score": 0.08940996790254124,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 145,
    "entity": "sommer",
    "discover_score": 0.08935467987231561,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 146,
    "entity": "grok ai",
    "discover_score": 0.08929983945791409,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 147,
    "entity": "venezia - derthona",
    "discover_score": 0.08924543996572334,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 148,
    "entity": "romelu lukaku",
    "discover_score": 0.08919147484726811,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 149,
    "entity": "lille lens",
    "discover_score": 0.08913793769510281,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 150,
    "entity": "calvi",
    "discover_score": 0.08908482223884619,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 151,
    "entity": "roby facchinetti",
    "discover_score": 0.08903212234135328,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 152,
    "entity": "robert de niro",
    "discover_score": 0.08897983199501883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 153,
    "entity": "azioni stellantis",
    "discover_score": 0.08892794531820698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 154,
    "entity": "calcionapoli24",
    "discover_score": 0.08887645655180217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 155,
    "entity": "rovereto",
    "discover_score": 0.08882536005587613,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 156,
    "entity": "oumar solet",
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
    "entity": "antonio conte",
    "discover_score": 0.08867436951259627,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 159,
    "entity": "valencia - mallorca",
    "discover_score": 0.08862478797252424,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 160,
    "entity": "anticipazioni tradimento 30 marzo",
    "discover_score": 0.0885755721820169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 161,
    "entity": "miami open 2025",
    "discover_score": 0.08852671715222935,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 162,
    "entity": "pafundi",
    "discover_score": 0.08847821799306398,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 163,
    "entity": "stellantis azioni",
    "discover_score": 0.08843006991061714,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 164,
    "entity": "lumezzane - caldiero terme",
    "discover_score": 0.08838226820470695,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 165,
    "entity": "newell's old boys - boca juniors",
    "discover_score": 0.0883348082664794,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 166,
    "entity": "senatore giacomo caliendo",
    "discover_score": 0.08828768557608978,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 167,
    "entity": "trento - albinoleffe",
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
    "entity": "joao felix",
    "discover_score": 0.08814829708195837,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 170,
    "entity": "potenza calcio",
    "discover_score": 0.08810247988749324,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 171,
    "entity": "moto 3",
    "discover_score": 0.08805697860055793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 172,
    "entity": "serie a femminile",
    "discover_score": 0.08801178919055067,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 173,
    "entity": "paola minaccioni",
    "discover_score": 0.08796690770153576,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 174,
    "entity": "calendario serie a",
    "discover_score": 0.08792233025043593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 175,
    "entity": "johnny depp",
    "discover_score": 0.08787805302527825,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 176,
    "entity": "albanese",
    "discover_score": 0.08783407228349238,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 177,
    "entity": "isar aerospace spectrum",
    "discover_score": 0.08779038435025874,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 178,
    "entity": "cremona - universo treviso",
    "discover_score": 0.08774698561690537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 179,
    "entity": "virtus verona - pro patria",
    "discover_score": 0.08770387253935127,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 180,
    "entity": "axios",
    "discover_score": 0.0876610416365951,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 181,
    "entity": "areanapoli",
    "discover_score": 0.0876184894892473,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 182,
    "entity": "betis",
    "discover_score": 0.08757621273810438,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 183,
    "entity": "palermo salernitana",
    "discover_score": 0.08753420808276388,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 184,
    "entity": "vl pesaro - libertas livorno",
    "discover_score": 0.08749247228027847,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 185,
    "entity": "notizie",
    "discover_score": 0.08745100214384822,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 186,
    "entity": "luca marini",
    "discover_score": 0.08740979454154943,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 187,
    "entity": "podcast",
    "discover_score": 0.08736884639509886,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 188,
    "entity": "aviano",
    "discover_score": 0.08732815467865244,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 189,
    "entity": "tagikistan",
    "discover_score": 0.08728771641763704,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 190,
    "entity": "007",
    "discover_score": 0.08724752868761428,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 191,
    "entity": "bengasi",
    "discover_score": 0.0872075886131754,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 192,
    "entity": "madonie",
    "discover_score": 0.08716789336686628,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 193,
    "entity": "athletic bilbao osasuna",
    "discover_score": 0.0871284401681413,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 194,
    "entity": "gabriele paolini eredità",
    "discover_score": 0.08708922628234546,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 195,
    "entity": "deutsche bank",
    "discover_score": 0.08705024901972379,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 196,
    "entity": "borussia dortmund",
    "discover_score": 0.08701150573445693,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 197,
    "entity": "james bond",
    "discover_score": 0.08697299382372246,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 198,
    "entity": "valentino rossi",
    "discover_score": 0.08693471072678077,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 199,
    "entity": "le iene stasera",
    "discover_score": 0.08689665392408505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 200,
    "entity": "lewandowski",
    "discover_score": 0.08685882093641431,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 201,
    "entity": "marco liorni",
    "discover_score": 0.08682120932402913,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 202,
    "entity": "lorena quaranta",
    "discover_score": 0.08678381668584899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 203,
    "entity": "meteo pescara",
    "discover_score": 0.08674664065865081,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 204,
    "entity": "meteo.it",
    "discover_score": 0.08670967891628807,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 205,
    "entity": "lampedusa",
    "discover_score": 0.08667292916892963,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 206,
    "entity": "mattia esposito",
    "discover_score": 0.08663638916231793,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 207,
    "entity": "manuale per signorine",
    "discover_score": 0.08660005667704586,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 208,
    "entity": "zazzaroni",
    "discover_score": 0.08656392952785175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 209,
    "entity": "ginevra",
    "discover_score": 0.0865280055629319,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 210,
    "entity": "martin",
    "discover_score": 0.08649228266327028,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 211,
    "entity": "bologna napoli",
    "discover_score": 0.08645675874198468,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 212,
    "entity": "bartezzaghi",
    "discover_score": 0.08642143174368908,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 213,
    "entity": "aldeguer",
    "discover_score": 0.08638629964387144,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 214,
    "entity": "pallavolo femminile",
    "discover_score": 0.08635136044828684,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 215,
    "entity": "atp bucarest 2025",
    "discover_score": 0.0863166121923652,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 216,
    "entity": "ostuni",
    "discover_score": 0.08628205294063337,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 217,
    "entity": "guido meda",
    "discover_score": 0.08624768078615105,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 218,
    "entity": "real betis vs sevilla",
    "discover_score": 0.08621349384996026,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 219,
    "entity": "cantù - verona",
    "discover_score": 0.08617949028054783,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 220,
    "entity": "la nove diretta",
    "discover_score": 0.0861456682533207,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 221,
    "entity": "cristina seymandi",
    "discover_score": 0.08611202597009364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 222,
    "entity": "pellegrini incinta",
    "discover_score": 0.08607856165858876,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 223,
    "entity": "christopher nolan",
    "discover_score": 0.08604527357194709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 224,
    "entity": "calendario",
    "discover_score": 0.08601215998825115,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 225,
    "entity": "alba",
    "discover_score": 0.08597921921005885,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 226,
    "entity": "antonio cornacchione",
    "discover_score": 0.08594644956394801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 227,
    "entity": "inter milan coppa italia",
    "discover_score": 0.08591384940007134,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 228,
    "entity": "quando gioca il napoli",
    "discover_score": 0.0858814170917217,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 229,
    "entity": "altamura",
    "discover_score": 0.08584915103490709,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 230,
    "entity": "ngonge",
    "discover_score": 0.08581704964793535,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 231,
    "entity": "porto",
    "discover_score": 0.08578511137100833,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 232,
    "entity": "austin motogp",
    "discover_score": 0.08575333466582497,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 233,
    "entity": "inter udine",
    "discover_score": 0.08572171801519343,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 234,
    "entity": "zagrebelsky",
    "discover_score": 0.08569025992265175,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 235,
    "entity": "alex jimenez",
    "discover_score": 0.08565895891209697,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 236,
    "entity": "بورنموث ضد مان سيتي",
    "discover_score": 0.08562781352742248,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 237,
    "entity": "jack black",
    "discover_score": 0.08559682233216323,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 238,
    "entity": "littizzetto",
    "discover_score": 0.08556598390914882,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 239,
    "entity": "affari tuoi",
    "discover_score": 0.08553529686016406,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 240,
    "entity": "rolex",
    "discover_score": 0.08550475980561698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 241,
    "entity": "ottochannel",
    "discover_score": 0.08547437138421397,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 242,
    "entity": "meteo verona",
    "discover_score": 0.08544413025264191,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 243,
    "entity": "spinea",
    "discover_score": 0.08541403508525716,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 244,
    "entity": "oslo",
    "discover_score": 0.08538408457378113,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 245,
    "entity": "eraldo pecci",
    "discover_score": 0.08535427742700234,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 246,
    "entity": "nicolò barella",
    "discover_score": 0.08532461237048485,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 247,
    "entity": "bossetti",
    "discover_score": 0.08529508814628277,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 248,
    "entity": "fire damage restoration",
    "discover_score": 0.08526570351266076,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 249,
    "entity": "meteo brescia",
    "discover_score": 0.08523645724382045,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 250,
    "entity": "belfast",
    "discover_score": 0.08520734812963249,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 251,
    "entity": "maria teresa ruta",
    "discover_score": 0.08517837497537416,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 252,
    "entity": "inter bayern monaco",
    "discover_score": 0.08514953660147252,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 253,
    "entity": "tammy abraham",
    "discover_score": 0.08512083184325263,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 254,
    "entity": "mel gibson",
    "discover_score": 0.08509225955069119,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 255,
    "entity": "roberto bolle",
    "discover_score": 0.08506381858817494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 256,
    "entity": "lanzarote",
    "discover_score": 0.08503550783426429,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 257,
    "entity": "real betis",
    "discover_score": 0.08500732618146141,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 258,
    "entity": "taiwan",
    "discover_score": 0.08497927253598325,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 259,
    "entity": "diletta leotta",
    "discover_score": 0.08495134581753899,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 260,
    "entity": "filippa lagerback",
    "discover_score": 0.08492354495911203,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 261,
    "entity": "tommaso cassissa",
    "discover_score": 0.08489586890674626,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 262,
    "entity": "bouchet",
    "discover_score": 0.08486831661933661,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 263,
    "entity": "jason momoa",
    "discover_score": 0.08484088706842376,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 264,
    "entity": "gialappa",
    "discover_score": 0.08481357923799289,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 265,
    "entity": "ncis origins",
    "discover_score": 0.08478639212427637,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 266,
    "entity": "jimenez milan",
    "discover_score": 0.0847593247355603,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 267,
    "entity": "julio iglesias",
    "discover_score": 0.08473237609199494,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 268,
    "entity": "esonero conceicao",
    "discover_score": 0.08470554522540857,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 269,
    "entity": "lorenzo lucca",
    "discover_score": 0.08467883117912525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 270,
    "entity": "tg",
    "discover_score": 0.08465223300778593,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 271,
    "entity": "ospiti mara venier domenica in",
    "discover_score": 0.08462574977717295,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 272,
    "entity": "varsavia",
    "discover_score": 0.08459938056403808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 273,
    "entity": "beyonce",
    "discover_score": 0.08457312445593364,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 274,
    "entity": "turchia istanbul",
    "discover_score": 0.08454698055104698,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 275,
    "entity": "porto fc",
    "discover_score": 0.08452094795803801,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 276,
    "entity": "costa rica",
    "discover_score": 0.08449502579587984,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 277,
    "entity": "nuova zelanda",
    "discover_score": 0.08446921319370236,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 278,
    "entity": "lega serie a",
    "discover_score": 0.08444350929063883,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 279,
    "entity": "serie a oggi risultati e classifica",
    "discover_score": 0.08441791323567525,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 280,
    "entity": "the last of us",
    "discover_score": 0.08439242418750258,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 281,
    "entity": "iran",
    "discover_score": 0.08436704131437169,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 282,
    "entity": "picierno",
    "discover_score": 0.08434176379395099,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 283,
    "entity": "pippo franco",
    "discover_score": 0.08431659081318664,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 284,
    "entity": "city",
    "discover_score": 0.0842915215681654,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 285,
    "entity": "sky",
    "discover_score": 0.0842665552639799,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 286,
    "entity": "heath ledger",
    "discover_score": 0.08424169111459642,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 287,
    "entity": "messaggero",
    "discover_score": 0.08421692834272505,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 288,
    "entity": "vico equense",
    "discover_score": 0.0841922661796922,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 289,
    "entity": "meredith kercher",
    "discover_score": 0.08416770386531533,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 290,
    "entity": "foreign fighter",
    "discover_score": 0.08414324064778016,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 291,
    "entity": "juan jesus",
    "discover_score": 0.08411887578351974,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 292,
    "entity": "nato",
    "discover_score": 0.084094608537096,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 293,
    "entity": "pellegrini",
    "discover_score": 0.0840704381810831,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 294,
    "entity": "irlanda",
    "discover_score": 0.08404636399595321,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 295,
    "entity": "non è la rai",
    "discover_score": 0.08402238526996385,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 296,
    "entity": "onu",
    "discover_score": 0.08399850129904766,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 297,
    "entity": "tutto napoli",
    "discover_score": 0.0839747113867038,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 298,
    "entity": "il giornale di vicenza",
    "discover_score": 0.08395101484389136,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 299,
    "entity": "classifica serie c girone c",
    "discover_score": 0.08392741098892463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 300,
    "entity": "real betis siviglia",
    "discover_score": 0.08390389914737018,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 301,
    "entity": "bezzecchi",
    "discover_score": 0.0838804786519456,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 302,
    "entity": "meteolive",
    "discover_score": 0.08385714884242024,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 303,
    "entity": "mare fuori 6 quando esce",
    "discover_score": 0.08383390906551744,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 304,
    "entity": "giornale di sicilia",
    "discover_score": 0.08381075867481845,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 305,
    "entity": "varese basket",
    "discover_score": 0.08378769703066813,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 306,
    "entity": "athletic bilbao",
    "discover_score": 0.0837647235000821,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 307,
    "entity": "formula 1 gp giappone",
    "discover_score": 0.08374183745665555,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 308,
    "entity": "prossimo turno di serie a",
    "discover_score": 0.08371903828047356,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 309,
    "entity": "classifica serie a femminile",
    "discover_score": 0.08369632535802293,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 310,
    "entity": "premier padel",
    "discover_score": 0.08367369808210555,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 311,
    "entity": "golden bachelor",
    "discover_score": 0.08365115585175309,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 312,
    "entity": "thauvin",
    "discover_score": 0.08362869807214318,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 313,
    "entity": "lazio torino formazioni",
    "discover_score": 0.0836063241545171,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 314,
    "entity": "la 8 diretta",
    "discover_score": 0.08358403351609864,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 315,
    "entity": "inter biglietti",
    "discover_score": 0.08356182558001439,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 316,
    "entity": "holland",
    "discover_score": 0.08353969977521537,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 317,
    "entity": "luna",
    "discover_score": 0.08351765553639988,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 318,
    "entity": "pam",
    "discover_score": 0.0834956923039377,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 319,
    "entity": "avvenire",
    "discover_score": 0.0834738095237954,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 320,
    "entity": "adolescence serie",
    "discover_score": 0.083452006647463,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 321,
    "entity": "targato cn",
    "discover_score": 0.08343028313188172,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 322,
    "entity": "foligno",
    "discover_score": 0.08340863843937296,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 323,
    "entity": "di lorenzo",
    "discover_score": 0.08338707203756839,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 324,
    "entity": "ambra angiolini",
    "discover_score": 0.0833655833993411,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 325,
    "entity": "djuric",
    "discover_score": 0.08334417200273808,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  },
  {
    "rank": 326,
    "entity": "rolex land dweller",
    "discover_score": 0.08332283733091346,
    "score_1h": 0.0,
    "score_4h": 0.0,
    "score_7d": 0.0,
    "extracted_entities": ""
  }
];

const runMetadata = {
  "timestamp": "2025-03-31 15:44:12",
  "trends_count": 326,
  "top_score": 24.003154485223487,
  "runtime_minutes": 4.770728727181752,
  "proxies_used": 207,
  "openai_enabled": true,
  "openai_model": "gpt-4o"
};
