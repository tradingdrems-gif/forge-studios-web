/* ════════════════════════════════════════════════════════════════════════
   i18n de Forge Studios — cambio de idioma en cliente, sin recargar.
   Idiomas más usados en Steam (occidentales): EN, ES, FR, DE, PT-BR, IT.
   Añadir uno = una entrada en LANGS + un bloque en T. Los nombres propios
   (Forge Studios, Forge to Stars, AXIOM, Steam) NO se traducen.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  const LANGS = [
    { code: 'en', label: 'English'    },
    { code: 'es', label: 'Español'    },
    { code: 'fr', label: 'Français'   },
    { code: 'de', label: 'Deutsch'    },
    { code: 'pt', label: 'Português'  },
    { code: 'it', label: 'Italiano'   },
  ];

  const T = {
    en: {
      'nav.studio': 'Studio', 'nav.game': 'Our game', 'nav.features': 'Features',
      'nav.gallery': 'Gallery', 'nav.wishlist': 'Wishlist', 'nav.press': 'Press', 'nav.contact': 'Contact',
      'hero.eyebrow': 'INDEPENDENT STUDIO · STRATEGY · SCI-FI',
      'hero.title': 'We forge worlds.<br>You decide their fate.',
      'hero.lead': "We're a small independent studio chasing one thing: strategy games with the depth of the classics and the craft to earn a place beside them.",
      'cta.discover': 'Discover our game', 'cta.contact': 'Get in touch',
      'games.kicker': 'OUR GAMES', 'games.title': "What we're building",
      'gamecard.tag': 'A turn-based 4X grand strategy game. From a single forgotten planet to the throne of a shattered galactic empire.',
      'gamecard.status': 'Coming soon to Steam · PC', 'gamecard.link': 'Explore the game →',
      'studio.kicker': 'THE STUDIO', 'studio.title': 'Built by hand, made to last',
      'studio.text': "Forge Studios is an independent studio with a single obsession: strategy games that respect the player's intelligence. No shortcuts, no half-built systems — every mechanic designed, tested and polished until it earns its place. We're making the kind of game we always wanted to play.",
      'press.kicker': 'PRESS', 'press.title': 'Press kit',
      'press.p': 'Press or content creator? Grab our logos, screenshots, trailer and fact sheet in one place.',
      'press.btn': 'Download press kit',
      'contact.kicker': 'CONTACT', 'contact.title': "Let's talk",
      'contact.p': "For partnerships, press or a friendly hello, we'd love to hear from you.",
      'footer.tag': 'Made with obsession.',
      'game.eyebrow': 'TURN-BASED 4X · GRAND STRATEGY · SCI-FI',
      'game.title': 'Forge to Stars',
      'game.lead': 'From a single forgotten planet to the throne of a shattered galactic empire. Every system, every war and every world is yours to claim.',
      'game.wishlist': 'Wishlist on Steam', 'game.platforms': 'Coming soon to Steam · PC (Windows)',
      'features.kicker': 'WHAT MAKES IT DIFFERENT', 'features.title': 'A galaxy that lives without you',
      'feat.living.h': 'A living galaxy', 'feat.living.p': "Rival empires explore, colonize, build and wage war on their own — turn after turn, whether you're watching or not.",
      'feat.worlds.h': 'Real worlds, not menus', 'feat.worlds.p': 'One 3D galaxy of dozens of planets. Drop down to any of them and fight for it, hex by hex.',
      'feat.combat.h': 'Command the battle', 'feat.combat.p': 'Turn-based tactical combat on the ground and in orbit, led through a deck of unit cards.',
      'feat.axiom.h': 'AXIOM is watching', 'feat.axiom.p': 'Your enigmatic guiding AI — earn its trust, or push it down its Dark path. Your choices, its consequences.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'In-engine footage · work in progress',
      'shot.galaxy': '3D galactic map', 'shot.map': 'Galaxy & hyperlanes', 'shot.planet': 'Planet surface', 'shot.space': 'Space combat',
      'cta.title': "The empire won't reunify itself.", 'cta.back': '← Back to Forge Studios',
    },
    es: {
      'nav.studio': 'Estudio', 'nav.game': 'Nuestro juego', 'nav.features': 'Características',
      'nav.gallery': 'Galería', 'nav.wishlist': 'Deseados', 'nav.press': 'Prensa', 'nav.contact': 'Contacto',
      'hero.eyebrow': 'ESTUDIO INDEPENDIENTE · ESTRATEGIA · CIENCIA FICCIÓN',
      'hero.title': 'Forjamos mundos.<br>Tú decides su destino.',
      'hero.lead': 'Somos un pequeño estudio independiente detrás de una sola idea: juegos de estrategia con la profundidad de los clásicos y el oficio para ganarse un sitio a su lado.',
      'cta.discover': 'Descubre nuestro juego', 'cta.contact': 'Contacta',
      'games.kicker': 'NUESTROS JUEGOS', 'games.title': 'Lo que estamos creando',
      'gamecard.tag': 'Un 4X de gran estrategia por turnos. De un planeta olvidado al trono de un imperio galáctico hecho pedazos.',
      'gamecard.status': 'Próximamente en Steam · PC', 'gamecard.link': 'Explora el juego →',
      'studio.kicker': 'EL ESTUDIO', 'studio.title': 'Hecho a mano, para durar',
      'studio.text': 'Forge Studios es un estudio independiente con una obsesión: juegos de estrategia que respetan la inteligencia del jugador. Sin atajos, sin sistemas a medias — cada mecánica diseñada, probada y pulida hasta ganarse su sitio. Hacemos el juego que siempre quisimos jugar.',
      'press.kicker': 'PRENSA', 'press.title': 'Kit de prensa',
      'press.p': '¿Eres prensa o creador de contenido? Descarga logos, capturas, tráiler y ficha en un solo sitio.',
      'press.btn': 'Descargar kit de prensa',
      'contact.kicker': 'CONTACTO', 'contact.title': 'Hablemos',
      'contact.p': 'Para colaboraciones, prensa o simplemente saludar, nos encantará leerte.',
      'footer.tag': 'Hecho con obsesión.',
      'game.eyebrow': '4X POR TURNOS · GRAN ESTRATEGIA · CIENCIA FICCIÓN',
      'game.title': 'Forge to Stars',
      'game.lead': 'De un planeta olvidado al trono de un imperio galáctico hecho pedazos. Cada sistema, cada guerra y cada mundo son tuyos por conquistar.',
      'game.wishlist': 'Añadir a deseados en Steam', 'game.platforms': 'Próximamente en Steam · PC (Windows)',
      'features.kicker': 'QUÉ LO HACE DIFERENTE', 'features.title': 'Una galaxia que vive sin ti',
      'feat.living.h': 'Una galaxia viva', 'feat.living.p': 'Los imperios rivales exploran, colonizan, construyen y hacen la guerra por su cuenta — turno tras turno, los estés mirando o no.',
      'feat.worlds.h': 'Mundos reales, no menús', 'feat.worlds.p': 'Una galaxia 3D con decenas de planetas. Baja a cualquiera y lucha por él, hex a hex.',
      'feat.combat.h': 'Dirige la batalla', 'feat.combat.p': 'Combate táctico por turnos en tierra y en órbita, al mando de una baraja de cartas de unidad.',
      'feat.axiom.h': 'AXIOM te observa', 'feat.axiom.p': 'Tu enigmática IA guía — gánate su confianza o empújala a su Rama Oscura. Tus decisiones, sus consecuencias.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'Imágenes in-engine · en desarrollo',
      'shot.galaxy': 'Mapa galáctico 3D', 'shot.map': 'Galaxia e hiperlíneas', 'shot.planet': 'Superficie del planeta', 'shot.space': 'Combate espacial',
      'cta.title': 'El imperio no se reunificará solo.', 'cta.back': '← Volver a Forge Studios',
    },
    fr: {
      'nav.studio': 'Studio', 'nav.game': 'Notre jeu', 'nav.features': 'Fonctionnalités',
      'nav.gallery': 'Galerie', 'nav.wishlist': 'Souhaits', 'nav.press': 'Presse', 'nav.contact': 'Contact',
      'hero.eyebrow': 'STUDIO INDÉPENDANT · STRATÉGIE · SCI-FI',
      'hero.title': 'Nous forgeons des mondes.<br>À vous d\'en décider le destin.',
      'hero.lead': "Nous sommes un petit studio indépendant animé par une seule idée : des jeux de stratégie avec la profondeur des classiques et le soin de mériter leur place à leurs côtés.",
      'cta.discover': 'Découvrir notre jeu', 'cta.contact': 'Nous contacter',
      'games.kicker': 'NOS JEUX', 'games.title': 'Ce que nous créons',
      'gamecard.tag': "Un 4X de grande stratégie au tour par tour. D'une planète oubliée au trône d'un empire galactique en ruines.",
      'gamecard.status': 'Bientôt sur Steam · PC', 'gamecard.link': 'Explorer le jeu →',
      'studio.kicker': 'LE STUDIO', 'studio.title': 'Fait main, fait pour durer',
      'studio.text': "Forge Studios est un studio indépendant avec une obsession : des jeux de stratégie qui respectent l'intelligence du joueur. Pas de raccourcis, pas de systèmes à moitié finis — chaque mécanique conçue, testée et peaufinée jusqu'à mériter sa place. Nous créons le jeu que nous avons toujours voulu jouer.",
      'press.kicker': 'PRESSE', 'press.title': 'Kit presse',
      'press.p': 'Presse ou créateur de contenu ? Récupérez logos, captures, bande-annonce et fiche en un seul endroit.',
      'press.btn': 'Télécharger le kit presse',
      'contact.kicker': 'CONTACT', 'contact.title': 'Discutons',
      'contact.p': 'Partenariats, presse ou simple bonjour : nous serons ravis de vous lire.',
      'footer.tag': 'Fait avec obsession.',
      'game.eyebrow': '4X AU TOUR PAR TOUR · GRANDE STRATÉGIE · SCI-FI',
      'game.title': 'Forge to Stars',
      'game.lead': "D'une planète oubliée au trône d'un empire galactique en ruines. Chaque système, chaque guerre et chaque monde sont à conquérir.",
      'game.wishlist': 'Ajouter à la liste de souhaits Steam', 'game.platforms': 'Bientôt sur Steam · PC (Windows)',
      'features.kicker': 'CE QUI LE REND DIFFÉRENT', 'features.title': 'Une galaxie qui vit sans vous',
      'feat.living.h': 'Une galaxie vivante', 'feat.living.p': 'Les empires rivaux explorent, colonisent, construisent et font la guerre seuls — tour après tour, que vous regardiez ou non.',
      'feat.worlds.h': 'De vrais mondes, pas des menus', 'feat.worlds.p': "Une galaxie 3D de dizaines de planètes. Descendez sur l'une d'elles et battez-vous pour elle, hex par hex.",
      'feat.combat.h': 'Menez la bataille', 'feat.combat.p': "Combat tactique au tour par tour, au sol et en orbite, dirigé via un jeu de cartes d'unités.",
      'feat.axiom.h': 'AXIOM vous observe', 'feat.axiom.p': 'Votre énigmatique IA guide — gagnez sa confiance ou poussez-la vers sa Voie Sombre. Vos choix, ses conséquences.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'Images in-engine · en développement',
      'shot.galaxy': 'Carte galactique 3D', 'shot.map': 'Galaxie et hyperroutes', 'shot.planet': 'Surface de la planète', 'shot.space': 'Combat spatial',
      'cta.title': 'L\'empire ne se réunifiera pas tout seul.', 'cta.back': '← Retour à Forge Studios',
    },
    de: {
      'nav.studio': 'Studio', 'nav.game': 'Unser Spiel', 'nav.features': 'Features',
      'nav.gallery': 'Galerie', 'nav.wishlist': 'Wunschliste', 'nav.press': 'Presse', 'nav.contact': 'Kontakt',
      'hero.eyebrow': 'UNABHÄNGIGES STUDIO · STRATEGIE · SCI-FI',
      'hero.title': 'Wir schmieden Welten.<br>Du entscheidest ihr Schicksal.',
      'hero.lead': 'Wir sind ein kleines unabhängiges Studio mit einem Ziel: Strategiespiele mit der Tiefe der Klassiker und der Sorgfalt, sich einen Platz neben ihnen zu verdienen.',
      'cta.discover': 'Unser Spiel entdecken', 'cta.contact': 'Kontakt aufnehmen',
      'games.kicker': 'UNSERE SPIELE', 'games.title': 'Woran wir arbeiten',
      'gamecard.tag': 'Ein rundenbasiertes 4X-Grand-Strategy-Spiel. Von einem vergessenen Planeten zum Thron eines zerbrochenen Galaktischen Imperiums.',
      'gamecard.status': 'Bald auf Steam · PC', 'gamecard.link': 'Das Spiel erkunden →',
      'studio.kicker': 'DAS STUDIO', 'studio.title': 'Von Hand gebaut, für die Ewigkeit',
      'studio.text': 'Forge Studios ist ein unabhängiges Studio mit einer Obsession: Strategiespiele, die die Intelligenz der Spieler respektieren. Keine Abkürzungen, keine halbfertigen Systeme — jede Mechanik durchdacht, getestet und poliert, bis sie sich ihren Platz verdient. Wir machen das Spiel, das wir immer spielen wollten.',
      'press.kicker': 'PRESSE', 'press.title': 'Presse-Kit',
      'press.p': 'Presse oder Content-Creator? Logos, Screenshots, Trailer und Fact-Sheet an einem Ort.',
      'press.btn': 'Presse-Kit herunterladen',
      'contact.kicker': 'KONTAKT', 'contact.title': 'Sprechen wir',
      'contact.p': 'Für Kooperationen, Presse oder ein freundliches Hallo — wir freuen uns, von dir zu hören.',
      'footer.tag': 'Mit Hingabe gemacht.',
      'game.eyebrow': 'RUNDENBASIERTES 4X · GRAND STRATEGY · SCI-FI',
      'game.title': 'Forge to Stars',
      'game.lead': 'Von einem vergessenen Planeten zum Thron eines zerbrochenen Galaktischen Imperiums. Jedes System, jeder Krieg und jede Welt gehören dir.',
      'game.wishlist': 'Auf Steam-Wunschliste', 'game.platforms': 'Bald auf Steam · PC (Windows)',
      'features.kicker': 'WAS ES ANDERS MACHT', 'features.title': 'Eine Galaxie, die ohne dich lebt',
      'feat.living.h': 'Eine lebendige Galaxie', 'feat.living.p': 'Rivalisierende Imperien erkunden, kolonisieren, bauen und führen Krieg von selbst — Runde um Runde, ob du zusiehst oder nicht.',
      'feat.worlds.h': 'Echte Welten, keine Menüs', 'feat.worlds.p': 'Eine 3D-Galaxie mit Dutzenden Planeten. Lande auf jedem und kämpfe um ihn, Hexfeld für Hexfeld.',
      'feat.combat.h': 'Führe die Schlacht', 'feat.combat.p': 'Rundenbasierte taktische Kämpfe am Boden und im Orbit, gesteuert über ein Deck aus Einheitenkarten.',
      'feat.axiom.h': 'AXIOM beobachtet dich', 'feat.axiom.p': 'Deine rätselhafte Leit-KI — gewinne ihr Vertrauen oder treibe sie auf ihren Dunklen Pfad. Deine Entscheidungen, ihre Folgen.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'In-Engine-Aufnahmen · in Entwicklung',
      'shot.galaxy': '3D-Galaxiekarte', 'shot.map': 'Galaxie & Hyperrouten', 'shot.planet': 'Planetenoberfläche', 'shot.space': 'Weltraumkampf',
      'cta.title': 'Das Imperium vereint sich nicht von selbst.', 'cta.back': '← Zurück zu Forge Studios',
    },
    pt: {
      'nav.studio': 'Estúdio', 'nav.game': 'Nosso jogo', 'nav.features': 'Recursos',
      'nav.gallery': 'Galeria', 'nav.wishlist': 'Desejos', 'nav.press': 'Imprensa', 'nav.contact': 'Contato',
      'hero.eyebrow': 'ESTÚDIO INDEPENDENTE · ESTRATÉGIA · FICÇÃO CIENTÍFICA',
      'hero.title': 'Forjamos mundos.<br>Você decide o destino deles.',
      'hero.lead': 'Somos um pequeno estúdio independente com uma só ideia: jogos de estratégia com a profundidade dos clássicos e o capricho para merecer um lugar ao lado deles.',
      'cta.discover': 'Conheça nosso jogo', 'cta.contact': 'Fale conosco',
      'games.kicker': 'NOSSOS JOGOS', 'games.title': 'O que estamos criando',
      'gamecard.tag': 'Um 4X de grande estratégia por turnos. De um planeta esquecido ao trono de um império galáctico em ruínas.',
      'gamecard.status': 'Em breve na Steam · PC', 'gamecard.link': 'Explorar o jogo →',
      'studio.kicker': 'O ESTÚDIO', 'studio.title': 'Feito à mão, feito para durar',
      'studio.text': 'A Forge Studios é um estúdio independente com uma obsessão: jogos de estratégia que respeitam a inteligência do jogador. Sem atalhos, sem sistemas pela metade — cada mecânica pensada, testada e polida até merecer seu lugar. Fazemos o jogo que sempre quisemos jogar.',
      'press.kicker': 'IMPRENSA', 'press.title': 'Kit de imprensa',
      'press.p': 'Imprensa ou criador de conteúdo? Baixe logos, capturas, trailer e ficha num só lugar.',
      'press.btn': 'Baixar kit de imprensa',
      'contact.kicker': 'CONTATO', 'contact.title': 'Vamos conversar',
      'contact.p': 'Para parcerias, imprensa ou um simples olá, vamos adorar ouvir você.',
      'footer.tag': 'Feito com obsessão.',
      'game.eyebrow': '4X POR TURNOS · GRANDE ESTRATÉGIA · FICÇÃO CIENTÍFICA',
      'game.title': 'Forge to Stars',
      'game.lead': 'De um planeta esquecido ao trono de um império galáctico em ruínas. Cada sistema, cada guerra e cada mundo são seus para conquistar.',
      'game.wishlist': 'Adicionar à lista de desejos na Steam', 'game.platforms': 'Em breve na Steam · PC (Windows)',
      'features.kicker': 'O QUE O TORNA DIFERENTE', 'features.title': 'Uma galáxia que vive sem você',
      'feat.living.h': 'Uma galáxia viva', 'feat.living.p': 'Impérios rivais exploram, colonizam, constroem e guerreiam por conta própria — turno após turno, esteja você olhando ou não.',
      'feat.worlds.h': 'Mundos reais, não menus', 'feat.worlds.p': 'Uma galáxia 3D com dezenas de planetas. Desça em qualquer um e lute por ele, hex a hex.',
      'feat.combat.h': 'Comande a batalha', 'feat.combat.p': 'Combate tático por turnos em terra e em órbita, comandado por um baralho de cartas de unidade.',
      'feat.axiom.h': 'AXIOM está observando', 'feat.axiom.p': 'Sua enigmática IA guia — conquiste sua confiança ou empurre-a para o Caminho Sombrio. Suas escolhas, as consequências dela.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'Imagens in-engine · em desenvolvimento',
      'shot.galaxy': 'Mapa galáctico 3D', 'shot.map': 'Galáxia e hipervias', 'shot.planet': 'Superfície do planeta', 'shot.space': 'Combate espacial',
      'cta.title': 'O império não vai se reunificar sozinho.', 'cta.back': '← Voltar para a Forge Studios',
    },
    it: {
      'nav.studio': 'Studio', 'nav.game': 'Il nostro gioco', 'nav.features': 'Caratteristiche',
      'nav.gallery': 'Galleria', 'nav.wishlist': 'Desideri', 'nav.press': 'Stampa', 'nav.contact': 'Contatti',
      'hero.eyebrow': 'STUDIO INDIPENDENTE · STRATEGIA · SCI-FI',
      'hero.title': 'Forgiamo mondi.<br>Tu ne decidi il destino.',
      'hero.lead': 'Siamo un piccolo studio indipendente con una sola idea: giochi di strategia con la profondità dei classici e la cura per meritare un posto accanto a loro.',
      'cta.discover': 'Scopri il nostro gioco', 'cta.contact': 'Contattaci',
      'games.kicker': 'I NOSTRI GIOCHI', 'games.title': 'Cosa stiamo creando',
      'gamecard.tag': 'Un 4X di grande strategia a turni. Da un pianeta dimenticato al trono di un impero galattico in frantumi.',
      'gamecard.status': 'Presto su Steam · PC', 'gamecard.link': 'Esplora il gioco →',
      'studio.kicker': 'LO STUDIO', 'studio.title': 'Fatto a mano, fatto per durare',
      'studio.text': "Forge Studios è uno studio indipendente con un'ossessione: giochi di strategia che rispettano l'intelligenza del giocatore. Niente scorciatoie, niente sistemi a metà — ogni meccanica progettata, testata e rifinita finché non si merita il suo posto. Facciamo il gioco che abbiamo sempre voluto giocare.",
      'press.kicker': 'STAMPA', 'press.title': 'Press kit',
      'press.p': 'Stampa o content creator? Scarica logo, screenshot, trailer e scheda in un unico posto.',
      'press.btn': 'Scarica il press kit',
      'contact.kicker': 'CONTATTI', 'contact.title': 'Parliamone',
      'contact.p': 'Per collaborazioni, stampa o un semplice saluto, saremo felici di sentirti.',
      'footer.tag': 'Fatto con ossessione.',
      'game.eyebrow': '4X A TURNI · GRANDE STRATEGIA · SCI-FI',
      'game.title': 'Forge to Stars',
      'game.lead': 'Da un pianeta dimenticato al trono di un impero galattico in frantumi. Ogni sistema, ogni guerra e ogni mondo sono tuoi da conquistare.',
      'game.wishlist': 'Aggiungi ai desideri su Steam', 'game.platforms': 'Presto su Steam · PC (Windows)',
      'features.kicker': 'COSA LO RENDE DIVERSO', 'features.title': 'Una galassia che vive senza di te',
      'feat.living.h': 'Una galassia viva', 'feat.living.p': 'Gli imperi rivali esplorano, colonizzano, costruiscono e fanno la guerra da soli — turno dopo turno, che tu stia guardando o no.',
      'feat.worlds.h': 'Mondi veri, non menu', 'feat.worlds.p': 'Una galassia 3D di decine di pianeti. Scendi su uno qualsiasi e combatti per averlo, esagono per esagono.',
      'feat.combat.h': 'Guida la battaglia', 'feat.combat.p': 'Combattimento tattico a turni a terra e in orbita, guidato da un mazzo di carte unità.',
      'feat.axiom.h': 'AXIOM ti osserva', 'feat.axiom.p': 'La tua enigmatica IA guida — guadagna la sua fiducia o spingila sul suo Sentiero Oscuro. Le tue scelte, le sue conseguenze.',
      'gallery.kicker': 'GAMEPLAY', 'gallery.note': 'Immagini in-engine · in sviluppo',
      'shot.galaxy': 'Mappa galattica 3D', 'shot.map': 'Galassia e iperrotte', 'shot.planet': 'Superficie del pianeta', 'shot.space': 'Combattimento spaziale',
      'cta.title': "L'impero non si riunificherà da solo.", 'cta.back': '← Torna a Forge Studios',
    },
  };

  function apply(lang) {
    const dict = T[lang] || T.en;
    for (const el of document.querySelectorAll('[data-i18n]')) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    }
    document.documentElement.lang = lang;
    try { localStorage.setItem('fs_lang', lang); } catch (_) {}
    for (const sel of document.querySelectorAll('select.lang')) sel.value = lang;
  }

  function initSwitcher() {
    let stored = null;
    try { stored = localStorage.getItem('fs_lang'); } catch (_) {}
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const start = T[stored] ? stored : (T[browser] ? browser : 'en');

    for (const sel of document.querySelectorAll('select.lang')) {
      sel.innerHTML = LANGS.map(l => `<option value="${l.code}">${l.label}</option>`).join('');
      sel.addEventListener('change', () => apply(sel.value));
    }
    apply(start);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSwitcher);
  else initSwitcher();
})();
