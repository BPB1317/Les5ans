/* ============================================================
   SCRIPT.JS — L'Olympiade des Amis
   ============================================================
   🔧 GUIDE DE CONFIGURATION RAPIDE :
   ─────────────────────────────────
   • Nom de l'événement    → CONFIG.eventName
   • Date de l'événement   → CONFIG.eventDate
   • Révéler le gagnant    → CONFIG.showWinner = true
   • Nom du gagnant        → CONFIG.winnerName
   • Scores                → PARTICIPANTS[].score
   • Noms                  → PARTICIPANTS[].name
   • Programme / horaires  → SCHEDULE[]
   ============================================================ */

'use strict';

/* ============================================================
   ██████████ CONFIGURATION PRINCIPALE ████████████
   ============================================================ */

const CONFIG = {
  // 🔧 Nom affiché dans la section victoire
  eventName: "Les 5 ans",

  // 🔧 Date et heure de début de l'événement (ISO 8601)
  // Format : "YYYY-MM-DDTHH:MM:SS"
  eventDate: "2026-03-07T10:00:00",
   
  // 🔧 Texte affiché sur la page d'accueil (modifiable librement)
  eventDateDisplay: "Samedi 7 & Dimanche 8 Mars 2026",

  // 🔧 Mettre à true pour révéler la section "Vainqueur"
  showWinner: false,

  // 🔧 Nom du vainqueur à afficher (doit correspondre à PARTICIPANTS[].name)
  // Si vide "", le 1er du classement est utilisé automatiquement
  winnerName: "",
};


/* ============================================================
   ██████████ PARTICIPANTS & SCORES ████████████
   ============================================================
   Modifier ici :
   - name      : prénom / pseudo du participant
   - emoji     : affiché si pas de photo
   - photo     : chemin vers une image (ex: "photos/alice.jpg")
                 laisser "" pour utiliser l'emoji
   - score     : points actuels
   - previous  : score précédent (pour la flèche d'évolution)
   - quote     : phrase fun affichée sur la carte
   - strengths : tableau de points forts (max 4 conseillé)
   ============================================================ */

const PARTICIPANTS = [
  {
    id: 1,
    name: "Aurélien",           // 🔧 Nom
    emoji: "🦁",
    photo: "Aurélien.png",               // 🔧 ex: "photos/alice.jpg"
    score: 0,              // 🔧 Score actuel
    previous: 0,           // 🔧 Score précédent
    quote: "«L'erreur est humaine, le pardon est divin»",
    strengths: ["Curieux", "Adaptable", "Empathique"],
  },
  {
    id: 2,
    name: "Julien",
    emoji: "🐺",
    photo: "Julien.png",
    score: 0,
    previous: 0,
    quote: "«La 206 : la voiture de l'avenir»",
    strengths: ["Adaptabilité", "Force mentale", "Gestion des conflits"],
  },
  {
    id: 3,
    name: "Manon",
    emoji: "🦊",
    photo: "Manon.png",
    score: 0,
    previous: 0,
    quote: "«»",
    strengths: ["", "", ""],
  },
  {
    id: 4,
    name: "Matthieu",
    emoji: "🐻",
    photo: "Matthieu.png",
    score: 0,
    previous: 0,
    quote: "«Impossible n'est pas français»",
    strengths: ["", "", ""],
  },
  {
    id: 5,
    name: "Sylvain",
    emoji: "🦅",
    photo: "Sylvain.png",
    score: 0,
    previous: 0,
    quote: "«»",
    strengths: ["", "", ""],
  },
];


/* ============================================================
   ██████████ PROGRAMME / SCHEDULE ████████████
   ============================================================
   - time   : horaire affiché
   - title  : intitulé de l'étape
   - desc   : description courte
   - status : "done" | "active" | "locked"
              "done"   → ✅ Terminé
              "active" → ⚡ En cours (mis en valeur)
              "locked" → 🔒 Verrouillé
   ============================================================ */

const SCHEDULE = [
  {
    time: "08h30",
    title: "Petit déj + Organisation bouuuuffe 🍗",
    desc: "",
    status: "locked",           // 🔧 Changer le statut ici
  },
  {
    time: "09h15",
    title: "Couuurses 🏪",
    desc: "",
    status: "locked",
  },
  {
    time: "10h00",
    title: "Arrivée de Sylvain 🙋🏻‍♂️",
    desc: "",
    status: "locked",         // 🔧 Épreuve actuellement en cours
  },
  {
    time: "10h30",
    title: "Début de l'expérience - Premier interrogatoire 🤫",
    desc: "",
    status: "locked",         // 🔧 Pas encore débloqué
  },
  {
    time: "11h00",
    title: "Premier jeu par équipe",
    desc: "",
    status: "locked",
  },
  {
    time: "16h00",
    title: "Épreuve Créative",
    desc: "Réalisation d'un défi artistique en équipe.",
    status: "locked",
  },
  {
    time: "17h30",
    title: "Duel Final ⚔️",
    desc: "Les 2 meilleurs s'affrontent. Le reste vote.",
    status: "locked",
  },
  {
    time: "19h00",
    title: "Cérémonie de Clôture 🏆",
    desc: "Remise des prix, discours, et photo souvenir.",
    status: "locked",
  },
];

// ============================================================
// CHECKLIST — DONNÉES
// 🔧 Modifier ici les catégories et items
// ============================================================
const CHECKLIST = [
  {
    category: "1️⃣ Indispensables",
    icon: "🎒",
    items: [
      "Carte d'identité / permis",
      "Carte bancaire",
      "Téléphone",
      "Chargeur téléphone",
      "Sac week-end / valise",
    ],
  },
  {
    category: "2️⃣ Tenues obligatoires",
    icon: "👕",
    subsections: [
      {
        label: "Tenue casual (vendredi / moments chill)",
        items: [
          "Jean / chino / short",
          "T-shirt / polo",
          "Pull ou veste légère",
          "Sneakers",
        ],
      },
      {
        label: "Tenue habillée (sortie samedi soir (?))",
        items: [
          "Chemise ou polo",
          "Pantalon ou chino",
          "Chaussures (derbies / baskets chic)",
          "Veste ou blazer léger (optionnel mais recommandé)",
        ],
      },
      {
        label: "Tenue sport / marche / rando",
        items: [
          "Baskets confortables",
          "Pantalon confortable / jogging / short",
          "T-shirt",
          "Sweat / coupe-vent",
          "Chaussettes adaptées",
          "Lunettes de soleil",
          "Casquette (si soleil)",
        ],
      },
    ],
  },
  {
    category: "3️⃣ SAS Betting Goodies",
    icon: "👕",
    highlight: true, // 🔧 Met en avant cette catégorie (bordure dorée)
    items: [
      "Maillots / Polos / Casquettes SAS Betting",
      "Cercle Brugge",
      "Arsenal",
      "Real Sociedad",
      "Club Brugge",
    ],
  },
  {
    category: "4️⃣ Trousse de toilette",
    icon: "🧴",
    note : "✔ Les draps et serviettes de toilette sont fournis.",
    items: [
      "Brosse à dents",
      "Dentifrice",
      "Gel / Cire cheveux",
      "Déodorant",
      "Gel douche",
      "Parfum",
    ],
  },
  {
    category: "5️⃣ Bonus utiles",
    icon: "🧢",
    items: [
      "Gourde",
      "Lunettes de soleil",
      "Pyjama",
      "Sous-vêtements x3 jours",
    ],
  },
  {
    category: "6️⃣ Esprit & attitude",
    icon: "📸",
    items: [
      "Bonne humeur",
      "Esprit compétitif",
      "Respect du timing",
    ],
  },
];

// ============================================================
// CHECKLIST — FONCTION D'AFFICHAGE
// ============================================================
function initChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  container.innerHTML = CHECKLIST.map(cat => {

    // Génère les items simples
    const renderItems = (items) =>
      items.map(item => `
        <label class="checklist-item">
          <input type="checkbox" />
          <span class="checklist-check">✓</span>
          <span class="checklist-label">${item}</span>
        </label>
      `).join('');

    // Génère les sous-sections (tenues)
    const renderSubsections = (subsections) =>
      subsections.map(sub => `
        <div class="checklist-subsection">
          <p class="checklist-sublabel">👉 ${sub.label}</p>
          ${renderItems(sub.items)}
        </div>
      `).join('');

    return `
      <div class="checklist-card ${cat.highlight ? 'checklist-highlight' : ''}">
        <div class="checklist-category">
          <span>${cat.icon}</span>
          <span>${cat.category}</span>
        </div>
        ${cat.subsections
          ? renderSubsections(cat.subsections)
          : renderItems(cat.items)
        }
      </div>
    `;
  }).join('');

  // ✅ Sauvegarde des cases cochées dans localStorage
  const checkboxes = container.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb, i) => {
    // Restaurer l'état sauvegardé
    cb.checked = localStorage.getItem(`check-${i}`) === 'true';
    updateItemStyle(cb);

    cb.addEventListener('change', () => {
      localStorage.setItem(`check-${i}`, cb.checked);
      updateItemStyle(cb);
    });
  });
}

// Style visuel quand une case est cochée
function updateItemStyle(cb) {
  const label = cb.closest('.checklist-item');
  if (!label) return;
  label.classList.toggle('checked', cb.checked);
}



/* ============================================================
   ██████████ INITIALISATION ████████████
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroDate();
  initCountdown();
  initParticles();
  initClassement();
  initProgramme();
  initParticipants();
  initChecklist();
  initVictoire();
  initScrollAnimations();
});


/* ============================================================
   NAVIGATION
   ============================================================ */

function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav-links');

  // Effet de compactage au scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Ouverture / fermeture menu burger (mobile)
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Fermer le menu en cliquant sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}


/* ============================================================
   HERO — AFFICHAGE DE LA DATE
   ============================================================ */

function initHeroDate() {
  const el = document.getElementById('heroDate');
  if (el) {
    // 🔧 Utilise le texte défini dans CONFIG.eventDateDisplay
    el.textContent = CONFIG.eventDateDisplay;
  }
}



/* ============================================================
   COMPTE À REBOURS
   ============================================================ */

function initCountdown() {
  const cdDays    = document.getElementById('cd-days');
  const cdHours   = document.getElementById('cd-hours');
  const cdMinutes = document.getElementById('cd-minutes');
  const cdSeconds = document.getElementById('cd-seconds');
  const cdEl      = document.getElementById('countdown');
  const cdDone    = document.getElementById('countdownFinished');

  function updateCountdown() {
    const target = new Date(CONFIG.eventDate).getTime(); // 🔧 Cible depuis CONFIG
    const now    = Date.now();
    const diff   = target - now;

    if (diff <= 0) {
      // L'événement est commencé ou passé
      cdEl.classList.add('hidden');
      cdDone.classList.remove('hidden');
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    animateCountdownVal(cdDays,    days);
    animateCountdownVal(cdHours,   hours);
    animateCountdownVal(cdMinutes, minutes);
    animateCountdownVal(cdSeconds, seconds);
  }

  // Petite animation flip si la valeur change
  function animateCountdownVal(el, val) {
    const formatted = String(val).padStart(2, '0');
    if (el.textContent === formatted) return;

    el.style.transition = 'none';
    el.style.transform  = 'translateY(-6px)';
    el.style.opacity    = '0';

    requestAnimationFrame(() => {
      el.textContent = formatted;
      requestAnimationFrame(() => {
        el.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
        el.style.transform  = 'translateY(0)';
        el.style.opacity    = '1';
      });
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}


/* ============================================================
   PARTICULES HERO (pluie de points dorés)
   ============================================================ */

function initParticles() {
  const container = document.getElementById('particles');
  const COUNT     = 22; // 🔧 Nombre de particules

  for (let i = 0; i < COUNT; i++) {
    const p        = document.createElement('div');
    p.className    = 'particle';

    const size     = Math.random() * 4 + 1;      // 1–5px
    const left     = Math.random() * 100;         // position horizontale en %
    const duration = Math.random() * 15 + 10;     // durée 10–25s
    const delay    = Math.random() * 15;          // délai aléatoire
    const opacity  = Math.random() * 0.5 + 0.1;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      opacity: ${opacity};
    `;

    container.appendChild(p);
  }
}


/* ============================================================
   CLASSEMENT
   ============================================================ */

function initClassement() {
  // Trier par score décroissant
  const sorted = [...PARTICIPANTS].sort((a, b) => b.score - a.score);
  renderPodium(sorted);
  renderTable(sorted);
}

/* ── Podium visuel ── */
function renderPodium(sorted) {
  const container = document.getElementById('podiumContainer');
  container.innerHTML = '';

  // Ordre visuel : 2e à gauche | 1er au centre | 3e à droite
  const podiumOrder = [sorted[1], sorted[0], sorted[2]].filter(Boolean);

  podiumOrder.forEach((participant) => {
    const rank      = sorted.indexOf(participant) + 1;
    const rankClass = `rank-${rank}`;
    const medals    = ['🥇', '🥈', '🥉'];
    const medal     = medals[rank - 1] || '';

    const div = document.createElement('div');
    div.className = `podium-item ${rankClass}`;

    // Avatar : image ou emoji
    const avatarHTML = participant.photo
      ? `<img src="${participant.photo}" alt="${participant.name}" class="podium-avatar" />`
      : `<div class="podium-avatar">${participant.emoji}</div>`;

    div.innerHTML = `
      ${avatarHTML}
      <p class="podium-name">${participant.name}</p>
      <p class="podium-pts">${participant.score} pts</p>
      <div class="podium-block">${medal}</div>
    `;

    container.appendChild(div);
  });
}

/* ── Tableau complet ── */
function renderTable(sorted) {
  const tbody = document.getElementById('scoreTableBody');
  tbody.innerHTML = '';

  sorted.forEach((participant, index) => {
    const rank      = index + 1;
    const rankClass = rank <= 3 ? `r${rank}` : '';

    // Calcul évolution par rapport au score précédent
    const diff = participant.score - participant.previous;
    let evoHTML = '';
    if (diff > 0)      evoHTML = `<span class="evolution up">▲ +${diff}</span>`;
    else if (diff < 0) evoHTML = `<span class="evolution down">▼ ${diff}</span>`;
    else               evoHTML = `<span class="evolution same">— Stable</span>`;

    const tr  = document.createElement('tr');
    tr.id     = `row-${participant.id}`;
    tr.innerHTML = `
      <td><span class="rank-badge ${rankClass}">${rank}</span></td>
      <td>
        <span style="margin-right:0.6rem; font-size:1.2rem">${participant.emoji}</span>
        <strong>${participant.name}</strong>
      </td>
      <td><span class="score-value">${participant.score}</span></td>
      <td>${evoHTML}</td>
    `;

    tbody.appendChild(tr);
  });
}

/**
 * 🔧 Mettre à jour le score d'un participant en direct
 * ─────────────────────────────────────────────────────
 * Appeler depuis la console navigateur :
 *   updateScore("Alice", 160);
 *   updateScore("Dylan", 105);
 *
 * @param {string} name  - Nom exact du participant (sensible à la casse)
 * @param {number} score - Nouveau score
 */
function updateScore(name, score) {
  const participant = PARTICIPANTS.find(p => p.name === name);

  if (!participant) {
    console.warn(`❌ Participant "${name}" introuvable. Vérifiez le nom dans PARTICIPANTS[].name`);
    return;
  }

  participant.previous = participant.score; // Sauvegarde l'ancien score
  participant.score    = score;             // Applique le nouveau score

  // Ré-afficher classement + podium
  const sorted = [...PARTICIPANTS].sort((a, b) => b.score - a.score);
  renderPodium(sorted);
  renderTable(sorted);

  // Flash doré sur la ligne mise à jour
  const row = document.getElementById(`row-${participant.id}`);
  if (row) {
    row.classList.remove('score-updated');
    void row.offsetWidth; // Force le reflow pour relancer l'animation CSS
    row.classList.add('score-updated');
    setTimeout(() => row.classList.remove('score-updated'), 1200);
  }

  console.log(`✅ Score de "${name}" → ${score} pts`);
}


/* ============================================================
   PROGRAMME — TIMELINE
   ============================================================ */

function initProgramme() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  SCHEDULE.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `timeline-item ${item.status}`;
    div.style.animationDelay = `${index * 0.08}s`;

    // Icône et badge selon le statut
    let icon  = '';
    let badge = '';

    switch (item.status) {
      case 'done':
        icon  = '✅';
        badge = `<span class="timeline-badge badge-done">Terminé</span>`;
        break;
      case 'active':
        icon  = '⚡';
        badge = `<span class="timeline-badge badge-active">En cours</span>`;
        break;
      default: // locked
        icon  = '🔒';
        badge = `<span class="timeline-badge badge-locked">Verrouillé</span>`;
    }

    // ✅ Contenu différent si locked
    if (item.status === 'locked') {
      div.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-card timeline-card-locked">
          <div class="timeline-locked-content">
            <span class="timeline-lock-icon">🔒</span>
            <span class="timeline-locked-label">Contenu verrouillé</span>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-time">${item.time}</span>
            ${badge}
          </div>
          <div class="timeline-title">
            <span class="timeline-icon">${icon}</span>
            <span>${item.title}</span>
          </div>
          ${item.desc ? `<p class="timeline-desc">${item.desc}</p>` : ''}
        </div>
      `;
    }

    timeline.appendChild(div);
  });
}

/**
 * 🔧 Débloquer / modifier le statut d'une étape du programme
 * ────────────────────────────────────────────────────────────
 * Appeler depuis la console navigateur :
 *   unlockStep(3);              // Débloque l'index 3 → statut "active"
 *   unlockStep(3, "done");      // Marque l'index 3 comme terminé
 *   unlockStep(3, "locked");    // Re-verrouille l'index 3
 *
 * @param {number} index  - Index dans SCHEDULE[] (commence à 0)
 * @param {string} status - "done" | "active" | "locked" (défaut: "active")
 */
function unlockStep(index, status = 'active') {
  if (index < 0 || index >= SCHEDULE.length) {
    console.warn(`❌ Index "${index}" invalide. SCHEDULE contient ${SCHEDULE.length} étapes (0 à ${SCHEDULE.length - 1}).`);
    return;
  }

  SCHEDULE[index].status = status;
  initProgramme(); // Ré-afficher la timeline complète

  const icons = { done: '✅', active: '⚡', locked: '🔒' };
  console.log(`${icons[status] || '🔧'} Étape ${index} ("${SCHEDULE[index].title}") → "${status}"`);
}


/* ============================================================
   PARTICIPANTS — CARTES
   ============================================================ */

function initParticipants() {
  const grid = document.getElementById('participantsGrid');
  grid.innerHTML = '';

  PARTICIPANTS.forEach((participant, index) => {
    const card = document.createElement('div');
    card.className = 'participant-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // Avatar : image ou emoji placeholder
    const avatarHTML = participant.photo
      ? `<div class="participant-avatar"><img src="${participant.photo}" alt="${participant.name}" /></div>`
      : `<div class="participant-avatar">${participant.emoji}</div>`;

    // Tags de points forts
    const strengthsHTML = participant.strengths
      .map(s => `<span class="strength-tag">${s}</span>`)
      .join('');

    // Rang actuel dans le classement
    const sorted = [...PARTICIPANTS].sort((a, b) => b.score - a.score);
    const rank   = sorted.findIndex(p => p.id === participant.id) + 1;
    const medals = ['🥇', '🥈', '🥉'];
    const rankDisplay = rank <= 3
      ? `${medals[rank - 1]} #${rank}`
      : `#${rank}`;

    card.innerHTML = `
      ${avatarHTML}
      <div class="participant-rank">${rankDisplay}</div>
      <h3 class="participant-name">${participant.name}</h3>
      <p class="participant-quote">${participant.quote}</p>
      <div class="participant-divider"></div>
      <p class="participant-strengths-label">Points forts</p>
      <div class="participant-strengths">${strengthsHTML}</div>
      <div class="participant-score">${participant.score} pts</div>
    `;

    grid.appendChild(card);
  });
}


/* ============================================================
   SECTION VICTOIRE & CONFETTIS
   ============================================================ */

function initVictoire() {
  // 🔧 Contrôlé par CONFIG.showWinner
  if (!CONFIG.showWinner) return;

  const section = document.getElementById('victoire');
  section.classList.remove('hidden');

  // Déterminer le vainqueur
  let winner;
  if (CONFIG.winnerName) {
    // 🔧 Nom forcé dans CONFIG.winnerName
    winner = PARTICIPANTS.find(p => p.name === CONFIG.winnerName);
    if (!winner) {
      console.warn(`⚠️ Vainqueur "${CONFIG.winnerName}" introuvable, utilisation du 1er du classement.`);
    }
  }

  if (!winner) {
    // Sinon on prend automatiquement le 1er du classement
    winner = [...PARTICIPANTS].sort((a, b) => b.score - a.score)[0];
  }

  // Remplir le contenu de la section victoire
  document.getElementById('victoryTitle').textContent    = `${winner.emoji} ${winner.name} !`;
  document.getElementById('victorySubtitle').textContent = `Vainqueur de ${CONFIG.eventName}`;
  document.getElementById('victoryScore').textContent    = `Score final : ${winner.score} points`;

  // Lancer les confettis
  launchConfetti();
}

/* ── Confettis Canvas ── */
function launchConfetti() {
  const canvas  = document.getElementById('confettiCanvas');
  const ctx     = canvas.getContext('2d');

  // Adapter le canvas à la section
  function resizeCanvas() {
    const section    = document.getElementById('victoire');
    canvas.width     = section.offsetWidth;
    canvas.height    = section.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Couleurs des confettis (or + accents)
  const COLORS = [
    '#D4AF37', '#F0D060', '#FFFFFF',
    '#FFD700', '#FFA500', '#C0C0C0',
    '#FF6B6B', '#4ECDC4',
  ];

  // Créer les particules de confettis
  const CONFETTI_COUNT = 120; // 🔧 Nombre de confettis
  const confettis      = [];

  for (let i = 0; i < CONFETTI_COUNT; i++) {
    confettis.push({
      x:        Math.random() * canvas.width,
      y:        Math.random() * canvas.height - canvas.height, // Commence au-dessus
      w:        Math.random() * 10 + 5,   // Largeur 5–15px
      h:        Math.random() * 6 + 4,    // Hauteur 4–10px
      color:    COLORS[Math.floor(Math.random() * COLORS.length)],
      speed:    Math.random() * 3 + 2,    // Vitesse de chute
      angle:    Math.random() * 360,      // Angle de rotation initial
      spin:     (Math.random() - 0.5) * 6, // Vitesse de rotation
      drift:    (Math.random() - 0.5) * 2, // Dérive horizontale
      opacity:  Math.random() * 0.7 + 0.3,
    });
  }

  let animRunning = true;
  let frameCount  = 0;

  function drawConfetti() {
    if (!animRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frameCount++;

    confettis.forEach(c => {
      // Déplacer
      c.y     += c.speed;
      c.x     += c.drift;
      c.angle += c.spin;

      // Reboucler quand le confetti sort en bas
      if (c.y > canvas.height + 20) {
        c.y = -20;
        c.x = Math.random() * canvas.width;
      }

      // Dessiner le confetti (rectangle rotatif)
      ctx.save();
      ctx.globalAlpha = c.opacity;
      ctx.translate(c.x, c.y);
      ctx.rotate((c.angle * Math.PI) / 180);
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    });

    // Stopper après ~12 secondes pour économiser les ressources
    if (frameCount < 720) {
      requestAnimationFrame(drawConfetti);
    } else {
      animRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  drawConfetti();
}


/* ============================================================
   ANIMATIONS AU SCROLL (Intersection Observer)
   ============================================================ */

function initScrollAnimations() {
  // Cibler tous les éléments animables
  const targets = document.querySelectorAll(
    '.participant-card, .timeline-item, .podium-item, .table-wrapper'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Ne pas observer à nouveau une fois apparu
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold:  0.1,    // Déclenche quand 10% est visible
      rootMargin: '0px 0px -40px 0px', // Un peu avant le bas de l'écran
    }
  );

  targets.forEach(el => {
    el.classList.add('anim-hidden'); // Cacher initialement via CSS
    observer.observe(el);
  });
}


/* ============================================================
   CSS DYNAMIQUE — Styles injectés par JS
   (Pour les classes ajoutées dynamiquement par initScrollAnimations)
   ============================================================ */

(function injectDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `

    /* ── Animations Scroll ── */
    .anim-hidden {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .anim-hidden.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Timeline ── */
    .timeline {
      position: relative;
      max-width: 680px;
      margin: 0 auto;
      padding-left: 2.5rem;
    }

    /* Ligne verticale de la timeline */
    .timeline::before {
      content: '';
      position: absolute;
      left: 0.65rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(
        to bottom,
        var(--gold) 0%,
        rgba(212,175,55,0.3) 60%,
        transparent 100%
      );
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      animation: fadeLeft 0.5s ease both;
    }

    /* Point sur la ligne */
    .timeline-dot {
      position: absolute;
      left: -2.15rem;
      top: 1.1rem;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid var(--gold-dark);
      background: var(--dark-1);
      transition: all 0.3s ease;
      z-index: 1;
    }

    .timeline-item.done   .timeline-dot { background: var(--gold); border-color: var(--gold); box-shadow: 0 0 10px rgba(212,175,55,0.5); }
    .timeline-item.active .timeline-dot { background: var(--gold-light); border-color: var(--gold-light); box-shadow: 0 0 16px rgba(240,208,96,0.8); animation: pulseDot 1.5s ease infinite; }
    .timeline-item.locked .timeline-dot { background: var(--dark-4); border-color: var(--dark-4); }

    @keyframes pulseDot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(240,208,96,0.6); }
      50%       { box-shadow: 0 0 0 8px rgba(240,208,96,0); }
    }

    /* Carte timeline */
    .timeline-card {
      background: var(--dark-2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.2rem 1.5rem;
      transition: all 0.3s ease;
    }

    .timeline-item.done   .timeline-card { border-color: rgba(212,175,55,0.4); }
    .timeline-item.active .timeline-card { border-color: var(--gold); box-shadow: 0 0 20px rgba(212,175,55,0.2); background: rgba(212,175,55,0.05); }
    .timeline-item.locked .timeline-card { opacity: 0.45; filter: blur(0.5px); }
    .timeline-item.locked:hover .timeline-card { opacity: 0.6; }

    .timeline-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .timeline-time {
      font-family: var(--font-title);
      font-size: 0.8rem;
      letter-spacing: 2px;
      color: var(--gold);
      font-weight: 700;
    }

    .timeline-badge {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
    }

    .badge-done   { background: rgba(76,175,80,0.2);  color: #4CAF50; border: 1px solid rgba(76,175,80,0.4);  }
    .badge-active { background: rgba(212,175,55,0.2); color: var(--gold); border: 1px solid var(--gold); }
    .badge-locked { background: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid rgba(255,255,255,0.1); }

    .timeline-title {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      font-size: 1rem;
      color: var(--white);
      margin-bottom: 0.4rem;
    }

    .timeline-icon { font-size: 1.1rem; }

    .timeline-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-top: 0.4rem;
    }

    /* ── Participants Grid ── */
    .participants-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .participant-card {
      background: var(--dark-2);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 2rem 1.5rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      cursor: default;
    }

    .participant-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(212,175,55,0.15);
      border-color: rgba(212,175,55,0.5);
    }

    .participant-avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      background: var(--dark-3);
      border: 2px solid var(--border);
      overflow: hidden;
    }

    .participant-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .participant-rank {
      font-family: var(--font-title);
      font-size: 0.8rem;
      color: var(--gold);
      letter-spacing: 2px;
      margin-bottom: 0.4rem;
    }

    .participant-name {
      font-family: var(--font-title);
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 0.6rem;
    }

    .participant-quote {
      font-size: 0.82rem;
      color: var(--text-muted);
      font-style: italic;
      line-height: 1.6;
      min-height: 2.8rem;
    }

    .participant-divider {
      height: 1px;
      background: var(--border);
      margin: 1rem 0;
    }

    .participant-strengths-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.6rem;
    }

    .participant-strengths {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .strength-tag {
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.3rem 0.7rem;
      border-radius: 20px;
      background: rgba(212,175,55,0.1);
      color: var(--gold);
      border: 1px solid rgba(212,175,55,0.25);
    }

    .participant-score {
      font-family: var(--font-title);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--gold);
    }

    /* ── Section Victoire ── */
    .section-victory {
      position: relative;
      background: radial-gradient(ellipse at 50% 50%, #1a1200 0%, var(--black) 70%);
      text-align: center;
      overflow: hidden;
      padding: 8rem 1.5rem;
    }

    .victory-content {
      position: relative;
      z-index: 2;
    }

    .victory-title {
      font-family: var(--font-title);
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 900;
      color: var(--gold);
      text-shadow: 0 0 40px rgba(212,175,55,0.5);
      margin-bottom: 1rem;
      animation: victoryPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    }

    .victory-subtitle {
      font-size: 1.1rem;
      color: var(--off-white);
      margin-bottom: 2rem;
      font-weight: 300;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .victory-trophy {
      font-size: 6rem;
      display: inline-block;
      animation: floatTrophy 3s ease-in-out infinite;
      filter: drop-shadow(0 0 20px rgba(212,175,55,0.6));
    }

    .victory-score {
      margin-top: 2rem;
      font-family: var(--font-title);
      font-size: 1rem;
      color: var(--text-muted);
      letter-spacing: 3px;
    }

    @keyframes victoryPop {
      from { opacity: 0; transform: scale(0.4) rotate(-5deg); }
      to   { opacity: 1; transform: scale(1) rotate(0deg); }
    }

    @keyframes floatTrophy {
      0%, 100% { transform: translateY(0) rotate(-3deg); }
      50%       { transform: translateY(-18px) rotate(3deg); }
    }

    /* Canvas confettis */
    #confettiCanvas {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    /* ── Flash tableau score ── */
    @keyframes flashUpdate {
      0%   { background: rgba(212,175,55,0.3); }
      100% { background: transparent; }
    }
    .score-updated {
      animation: flashUpdate 1.2s ease forwards;
    }

    /* ── Responsive participants ── */
    @media (max-width: 600px) {
      .participants-grid {
        grid-template-columns: 1fr;
      }
      .timeline {
        padding-left: 2rem;
      }
    }
  `;

  document.head.appendChild(style);
})();


/* ============================================================
   ██████████ FONCTIONS UTILITAIRES CONSOLE ████████████
   ============================================================
   Ces fonctions sont accessibles depuis la console du navigateur.
   Ouvrir DevTools → Console → taper la commande.

   🔧 updateScore("Alice", 160)      → Met à jour le score d'Alice
   🔧 unlockStep(3)                  → Débloque l'étape index 3
   🔧 unlockStep(2, "done")          → Marque l'étape 2 comme terminée
   🔧 revealWinner()                 → Révèle la section victoire
   🔧 revealWinner("Baptiste")       → Révèle avec un nom forcé
   ============================================================ */

/**
 * 🔧 Révéler la section vainqueur depuis la console
 * Exemple : revealWinner();
 *           revealWinner("Baptiste");
 *
 * @param {string} [name] - Nom du vainqueur (optionnel)
 */
function revealWinner(name) {
  if (name) CONFIG.winnerName = name;
  CONFIG.showWinner = true;
  initVictoire();
  // Scroll vers la section victoire
  setTimeout(() => {
    document.getElementById('victoire').scrollIntoView({ behavior: 'smooth' });
  }, 300);
  console.log(`🏆 Section victoire révélée !`);
}

// Exposer les fonctions utilitaires globalement
window.updateScore  = updateScore;
window.unlockStep   = unlockStep;
window.revealWinner = revealWinner;

console.log(`
  ╔══════════════════════════════════════════╗
  ║   ⚡ L'Olympiade des Amis — Console     ║
  ╠══════════════════════════════════════════╣
  ║  updateScore("Nom", pts)                ║
  ║  unlockStep(index, "done|active")       ║
  ║  revealWinner("Nom")                    ║
  ╚══════════════════════════════════════════╝
`);

















