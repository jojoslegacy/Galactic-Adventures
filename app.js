(() => {
const COURSES = window.COURSES || {};
const X = window.EXTRAS || { shop: [], ach: [], capstones: {}, bosses: ['Boss'], mentor: { name: 'Zyx', icon: '👽', ok: ['Nice!'], no: ['Try again.'], late: ['Time!'] } };
const KEY = 'galactic.academy.v2';
const OLD_KEY = 'galactic.academy.math.v1';
const MAX_PROFILES = 10;
const PROFILE_ICONS = ['🚀', '🌟', '🦊', '🐻', '🦄', '🐸', '🐼', '🐯', '🐶', '🐱'];
const $app = document.getElementById('app');
const RANKS = [[0, 'Space Cadet'], [100, 'Galaxy Explorer'], [300, 'Skill Builder'], [600, 'Pattern Finder'], [1000, 'Academy Champion'], [1600, 'Galactic Scholar']];
const BONUS_COST = 300, TRIAL_Q = 10, TRIAL_SECS = 15, BONUS_REWARD = 100;
const BOSS_Q = 6, BOSS_SECS = 20, BOSS_LIVES = 3, BOSS_REWARD = 60;
const DAILY_REWARD = 25, REQ_PER_Q = 10, REQ_DAILY_CAP = 3, CAPSTONE_REWARD = 150;
const STREAK_REWARDS = { 3: 30, 7: 80, 30: 300 };
const SURV = window.SURVIVAL || {};
const MATH_TIER_LABEL = ['🔢 Number sense & methods', '✏️ Calculate accurately', '🧠 Spot the mistake', '🚀 Solve independently'];
const REVIEW_STEPS = [1, 3, 7];

// School-first navigation: subjects are grouped by school band.
const SUBJECTS = {
  basic: { name: 'Basic Academy', icon: '🌱', c1: '#35f0c0', c2: '#4de1ff', blurb: 'Build the foundations. Master every subject to graduate.', modules: ['math_basic', 'phon_basic', 'geo_basic', 'spanish_basic', 'civics_basic', 'science_basic', 'readinglab'] },
  intermediate: { name: 'Intermediate Academy', icon: '🪐', c1: '#8b6cff', c2: '#c084fc', blurb: 'Build fluency and connect foundational ideas.', modules: ['math_intermediate', 'phon_intermediate', 'geo_places', 'spanish_intermediate', 'civics_intermediate', 'science_intermediate'] },
  middle: { name: 'Middle Academy', icon: '🌠', c1: '#ffc36b', c2: '#ff8a3d', blurb: 'Strengthen independent reasoning and application.', modules: ['math_middle', 'phon_middle', 'geo_people', 'spanish_middle', 'civics_middle', 'science_middle'] },
  high: { name: 'High Academy', icon: '🚀', c1: '#ff5f8d', c2: '#8b6cff', blurb: 'Apply skills to more demanding academic challenges.', modules: ['math_high'] },
  advanced: { name: 'Advanced Academy', icon: '🌌', c1: '#ff5f8d', c2: '#8b6cff', blurb: 'Specialized advanced courses, unlocked with Star Shards.', modules: ['adv_math', 'adv_logic', 'adv_bio', 'adv_philosophy'] }
};
const SCHOOL_ORDER = ['basic', 'intermediate', 'middle', 'high', 'advanced'];
// Space elemental pets — unlock after Basic Academy graduation
const PETS = [
  { id: 'emberfox', element: 'Fire', base: '🦊', stages: [
    { name: 'Spark Pup', icon: '🦊', desc: 'A tiny fox with a flickering ember mane.' },
    { name: 'Blaze Fox', icon: '🔥', desc: 'Flames trail its paws across the asteroid fields.' },
    { name: 'Inferno Stalker', icon: '🌋', desc: 'A sleek hunter whose fur burns with solar plasma.' },
    { name: 'Nova Pyre', icon: '☄️', desc: 'A living stellar flare that dances between suns.' }
  ]},
  { id: 'aquotter', element: 'Water', base: '🦦', stages: [
    { name: 'Bubble Kit', icon: '🦦', desc: 'A playful otter that floats in zero-g bubbles.' },
    { name: 'Tide Otter', icon: '🌊', desc: 'Controls micro-tides in the station aquaria.' },
    { name: 'Abyss Diver', icon: '🐋', desc: 'Dives through dark nebulae like deep oceans.' },
    { name: 'Leviathan Echo', icon: '🌀', desc: 'A gentle giant whose song shapes water worlds.' }
  ]},
  { id: 'terrabear', element: 'Earth', base: '🐻', stages: [
    { name: 'Moss Cub', icon: '🐻', desc: 'A cub with lichen growing on its asteroid-hide.' },
    { name: 'Stone Bear', icon: '🪨', desc: 'Armor of crystallized regolith protects it.' },
    { name: 'Crust Warden', icon: '🌍', desc: 'Guards planetary cores with tectonic strength.' },
    { name: 'Planetary Titan', icon: '🏔️', desc: 'A walking mountain that seeds new worlds.' }
  ]},
  { id: 'zephyrhawk', element: 'Air', base: '🦅', stages: [
    { name: 'Gust Chick', icon: '🦅', desc: 'A fluffy chick that rides ion winds.' },
    { name: 'Wind Hawk', icon: '💨', desc: 'Slices through atmospheres at hypersonic speed.' },
    { name: 'Cyclone Rider', icon: '🌪️', desc: 'Commands orbital storms for fun.' },
    { name: 'Atmosphere Sovereign', icon: '☁️', desc: 'A sky-god of every gas giant it visits.' }
  ]},
  { id: 'voltlion', element: 'Lightning', base: '🦁', stages: [
    { name: 'Spark Cub', icon: '🦁', desc: 'Static crackles from its tiny mane.' },
    { name: 'Bolt Lion', icon: '⚡', desc: 'Charges capacitors just by roaring.' },
    { name: 'Storm Charger', icon: '⛈️', desc: 'Rides lightning between ships.' },
    { name: 'Plasma Sovereign', icon: '✨', desc: 'A living energy being of pure voltage.' }
  ]},
  { id: 'frostwolf', element: 'Ice', base: '🐺', stages: [
    { name: 'Flake Pup', icon: '🐺', desc: 'A pup whose breath freezes vacuum dust.' },
    { name: 'Glacier Wolf', icon: '❄️', desc: 'Leaves trails of ice crystals in its wake.' },
    { name: 'Cryo Hunter', icon: '🧊', desc: 'Hunts in the coldest reaches of the Oort cloud.' },
    { name: 'Absolute Zero', icon: '🥶', desc: 'A silent predator that freezes time itself.' }
  ]},
  { id: 'solarphoenix', element: 'Solar', base: '🐦', stages: [
    { name: 'Dawn Chick', icon: '🐦', desc: 'A chick that hatches at every sunrise.' },
    { name: 'Flare Phoenix', icon: '☀️', desc: 'Wings of solar wind and coronal mass ejections.' },
    { name: 'Corona Wing', icon: '🌟', desc: 'Soars through the corona of active stars.' },
    { name: 'Stellar Rebirth', icon: '🔥', desc: 'Dies and is reborn in every supernova.' }
  ]},
  { id: 'lunacat', element: 'Lunar', base: '🐱', stages: [
    { name: 'Crescent Kitten', icon: '🐱', desc: 'A kitten that phases with the moon.' },
    { name: 'Moon Cat', icon: '🌙', desc: 'Walks on the dark side of any moon.' },
    { name: 'Eclipse Shadow', icon: '🌑', desc: 'Only visible during total eclipses.' },
    { name: 'Lunar Oracle', icon: '🌕', desc: 'Whispers secrets of tidal forces and gravity.' }
  ]},
  { id: 'voidserpent', element: 'Void', base: '🐍', stages: [
    { name: 'Shadow Wyrm', icon: '🐍', desc: 'A tiny snake that slips between dimensions.' },
    { name: 'Void Serpent', icon: '🕳️', desc: 'Coils through the emptiness between stars.' },
    { name: 'Event Horizon', icon: '⚫', desc: 'Its body bends light and time.' },
    { name: 'Singularity', icon: '🌌', desc: 'A living black hole with a gentle heart.' }
  ]},
  { id: 'crystalbeetle', element: 'Crystal', base: '🪲', stages: [
    { name: 'Shard Grub', icon: '🪲', desc: 'A grub that eats raw minerals and glows.' },
    { name: 'Prism Beetle', icon: '💎', desc: 'Its shell splits light into rainbow spectra.' },
    { name: 'Lattice Guardian', icon: '🔷', desc: 'Protects crystal caves on distant moons.' },
    { name: 'Quantum Lattice', icon: '💠', desc: 'A geometric being of pure crystal thought.' }
  ]}
];
const PET_EVOLVE = [1000, 5000, 25000]; // crystals to reach stage 1, 2, 3

const ADVANCED_ACADEMY_COST = 2000;
const COURSE_SUBJECT_NAMES = {
  math_basic: 'Mathematics', math_intermediate: 'Mathematics', math_middle: 'Mathematics', math_high: 'Mathematics',
  phon_basic: 'Reading & Phonics', phon_intermediate: 'Reading & Phonics', phon_middle: 'Reading & Phonics', readinglab: 'Reading Support Lab',
  geo_basic: 'Geography', geo_places: 'Geography', geo_people: 'Geography',
  spanish_basic: 'Spanish', spanish_intermediate: 'Spanish', spanish_middle: 'Spanish',
  civics_basic: 'Civics', civics_intermediate: 'Civics', civics_middle: 'Civics',
  science_basic: 'Science', science_intermediate: 'Science', science_middle: 'Science'
};
const courseDisplayName = (id) => COURSE_SUBJECT_NAMES[id] || (COURSES[id] && COURSES[id].name) || id;
// Advanced unlocks: require full Master badges on prerequisite modules + Star Shard cost
const ADVANCED = {
  adv_math: {
    cost: 5000,
    prereq: ['math_basic', 'math_intermediate', 'math_middle', 'math_high'],
    prereqLabel: 'Mathematics (all bands mastered)'
  },
  adv_logic: {
    cost: 5000,
    prereq: ['phon_basic', 'phon_intermediate', 'phon_middle'],
    prereqLabel: 'Reading & Phonics (Basic, Intermediate, Middle mastered)'
  },
  adv_bio: {
    cost: 10000,
    prereq: ['science_basic', 'science_intermediate', 'science_middle'],
    prereqLabel: 'Science (all bands mastered)'
  },
  adv_philosophy: {
    cost: 10000,
    prereq: ['civics_basic', 'civics_intermediate', 'civics_middle'],
    prereqLabel: 'Civics (all bands mastered)'
  }
};
const subjectOf = (lang) => SCHOOL_ORDER.find((sid) => SUBJECTS[sid].modules.includes(lang)) || null;
// Foundation progression follows each subject independently. A course unlocks the next
// course in its path only after every mission has earned 3 stars.
const SUBJECT_PATHS = [
  ['math_basic', 'math_intermediate', 'math_middle', 'math_high'],
  ['phon_basic', 'phon_intermediate', 'phon_middle'],
  ['geo_basic', 'geo_places', 'geo_people'],
  ['spanish_basic', 'spanish_intermediate', 'spanish_middle'],
  ['civics_basic', 'civics_intermediate', 'civics_middle'],
  ['science_basic', 'science_intermediate', 'science_middle']
];
const courseThreeStarred = (id) => {
  const c = COURSES[id];
  return !!c && c.levels.length > 0 && c.levels.every((l) => (prog(id).done[l.id] || 0) >= 3);
};
const courseUnlocked = (id) => {
  if (!COURSES[id]) return false;
  if (isAdvanced(id)) return advancedUnlocked(id) && prereqMet(id);
  const path = SUBJECT_PATHS.find((p) => p.includes(id));
  if (!path || path[0] === id) return true;
  return courseThreeStarred(path[path.indexOf(id) - 1]);
};
const schoolGraduated = (sid) => !!SUBJECTS[sid] && sid !== 'advanced' && SUBJECTS[sid].modules.filter((id) => COURSES[id]).every((id) => courseThreeStarred(id) && bonusOf(id).badge);
const schoolUnlocked = (sid) => {
  if (sid === 'advanced') return !!S.advancedAcademyUnlocked || allFoundationSchoolsGraduated();
  if (sid === 'basic') return true;
  return !!SUBJECTS[sid] && SUBJECTS[sid].modules.some((id) => COURSES[id] && courseUnlocked(id));
};
const allFoundationSchoolsGraduated = () => ['basic','intermediate','middle','high'].every(schoolGraduated);
const courseCount = (sid) => SUBJECTS[sid].modules.filter((id) => COURSES[id]).length;
const isAdvanced = (lang) => !!ADVANCED[lang];
const prereqMet = (lang) => {
  const a = ADVANCED[lang];
  if (!a) return true;
  return !!S.advancedAcademyUnlocked && allFoundationSchoolsGraduated() && a.prereq.every((id) => bonusOf(id).badge);
};
const advancedUnlocked = (lang) => !isAdvanced(lang) || !!(S.advanced && S.advanced[lang]);

// ---------- Read Aloud (Web Speech API) ----------
let _utter = null;
let _voices = [];
const PREFERRED_VOICES = [
  // Prefer the most natural / least robotic voices first (especially good on iOS & modern browsers)
  'Samantha (Enhanced)', 'Samantha', 'Ava', 'Zoe', 'Allison', 'Victoria', 'Tessa', 'Moira',
  'Google US English', 'Google UK English Female',
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Microsoft Aria', 'Microsoft Jenny',
  'Karen', 'Fiona', 'Serena', 'Emma', 'Nicky',
  'Google UK English Male',
  'Microsoft Guy Online (Natural) - English (United States)',
  'Microsoft Guy', 'Aaron', 'Susan', 'Kathy'
];
function loadVoices() {
  if (!window.speechSynthesis) return;
  _voices = window.speechSynthesis.getVoices() || [];
}
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
function pickVoice(preferLang) {
  if (!_voices.length) loadVoices();
  const wantEs = preferLang && /^es/i.test(preferLang);
  const pool = wantEs
    ? (_voices.filter((v) => /^es(-|_|$)/i.test(v.lang) || /spanish|español/i.test(v.name)) || _voices)
    : (_voices.filter((v) => /^en(-|_|$)/i.test(v.lang) || /english/i.test(v.name)) || _voices);
  if (!wantEs) {
    for (const name of PREFERRED_VOICES) {
      const hit = pool.find((v) => v.name === name || v.name.includes(name.split(' (')[0]));
      if (hit) return hit;
    }
  }
  const natural = pool.find((v) => /natural|enhanced|premium|neural|online/i.test(v.name));
  if (natural) return natural;
  if (wantEs) return pool.find((v) => /es-MX|es-ES|es-US/i.test(v.lang)) || pool[0] || null;
  return pool.find((v) => /en-US/i.test(v.lang)) || pool[0] || null;
}
function stopSpeak() {
  _speakQueue = [];
  _speakPaused = false;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    _utter = null;
  }
}
// Keep-alive for Web Speech API (especially iOS/Safari). Prevents the known stuck state after long sessions
// where synthesis stops working or the page feels unresponsive to further actions.
let _speechKeepAlive = null;
function startSpeechKeepAlive() {
  if (_speechKeepAlive) return;
  _speechKeepAlive = setInterval(() => {
    if (!window.speechSynthesis) return;
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      try {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } catch (e) {}
    }
  }, 8000);
}
function stopSpeechKeepAlive() {
  if (_speechKeepAlive) {
    clearInterval(_speechKeepAlive);
    _speechKeepAlive = null;
  }
}
if (typeof window !== 'undefined' && window.speechSynthesis) {
  startSpeechKeepAlive();
}
/** Strip HTML entities, UI chrome words, and ALL emoji / pictographs so TTS does not say names like "satellite antenna". */
function cleanSpeakText(text) {
  let s = String(text || '');
  s = s.replace(/<[^>]+>/g, ' ');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/&#\d+;/g, ' ');
  // Comprehensive emoji / symbol removal (emoji, pictographs, dingbats, variation selectors, ZWJ)
  s = s.replace(/[\u{1F300}-\u{1FAFF}]/gu, ' ');
  s = s.replace(/[\u{1F000}-\u{1F02F}]/gu, ' ');
  s = s.replace(/[\u{1F1E0}-\u{1F1FF}]/gu, ' '); // regional flag letters
  s = s.replace(/[\u{2600}-\u{27BF}]/gu, ' ');
  s = s.replace(/[\u{2300}-\u{23FF}]/gu, ' ');
  s = s.replace(/[\u{2B00}-\u{2BFF}]/gu, ' ');
  s = s.replace(/[\u{FE00}-\u{FE0F}]/gu, ' ');
  s = s.replace(/[\u{200D}\u{20E3}]/gu, ' ');
  s = s.replace(/[\u{2190}-\u{21FF}]/gu, ' ');
  s = s.replace(/[\u{25A0}-\u{25FF}]/gu, ' '); // geometric shapes
  s = s.replace(/[\u{2190}-\u{21FF}\u{27F0}-\u{27FF}]/gu, ' ');
  // Common leftover symbols voices sometimes narrate
  s = s.replace(/[★☆✓✔✕✖•·▪▸►◄▲▼◆◇○●◦]/g, ' ');
  s = s.replace(/\bRead Aloud\b/gi, ' ');
  s = s.replace(/\bspeaker outputting[^.]*\.?/gi, ' ');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}
/** Split cleaned text into speakable sections with natural pauses. */
function sectionizeSpeakText(text) {
  const clean = cleanSpeakText(text);
  if (!clean) return [];
  let parts = clean.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡"'])/);
  const merged = [];
  parts.forEach((p) => {
    p = p.trim();
    if (!p) return;
    if (merged.length && p.length < 28 && !/[.!?]$/.test(merged[merged.length - 1])) {
      merged[merged.length - 1] += ' ' + p;
    } else {
      merged.push(p);
    }
  });
  return merged.filter(Boolean);
}
/** Prefer structured DOM sections (headers, paragraphs, list items) for lesson read-aloud. */
function sectionsFromElement(el) {
  if (!el) return [];
  const clone = el.cloneNode(true);
  clone.querySelectorAll('button, .btn-read, .kind, .dots, .bar, .goal, input, .bank, .slot, #fb, #check, #rv, #rev').forEach((n) => n.remove());
  const blocks = [...clone.querySelectorAll('h1, h2, h3, h4, p, li, blockquote')];
  if (blocks.length >= 2) {
    const sections = [];
    blocks.forEach((b) => {
      const t = cleanSpeakText(b.innerText || b.textContent);
      if (!t) return;
      const tag = (b.tagName || '').toLowerCase();
      if (/^h[1-4]$/.test(tag)) sections.push({ text: t, pauseAfter: 550 });
      else if (tag === 'li') sections.push({ text: t, pauseAfter: 320 });
      else sections.push({ text: t, pauseAfter: 420 });
    });
    if (sections.length) return sections;
  }
  return sectionizeSpeakText(clone.innerText || clone.textContent).map((t, i, arr) => ({
    text: t,
    pauseAfter: i < arr.length - 1 ? 380 : 0
  }));
}
/** Speak only learning content — not buttons, labels, or chrome. */
function textForSpeak(el, mode) {
  if (!el) return '';
  if (mode === 'question') {
    const q = el.querySelector('.speak-q');
    const opts = [...el.querySelectorAll('.speak-opt')].map((o, i) => {
      const letter = String.fromCharCode(65 + i);
      return 'Option ' + letter + ': ' + cleanSpeakText(o.innerText || o.textContent);
    });
    if (opts.length) {
      return [
        ...(q ? [{ text: cleanSpeakText(q.innerText || q.textContent), pauseAfter: 400 }] : []),
        ...opts.filter(Boolean).map((t, i, a) => ({ text: t, pauseAfter: i < a.length - 1 ? 280 : 0 }))
      ];
    }
    if (q) return cleanSpeakText(q.innerText || q.textContent);
    return '';
  }
  return sectionsFromElement(el);
}
let _speakQueue = [];
let _speakPaused = false;
function speakText(textOrSections, btn) {
  if (!window.speechSynthesis) {
    alert('Read Aloud is not supported in this browser.');
    return;
  }
  stopSpeak();
  let sections;
  if (Array.isArray(textOrSections)) {
    sections = textOrSections
      .map((s) => (typeof s === 'string' ? { text: cleanSpeakText(s), pauseAfter: 380 } : { text: cleanSpeakText(s.text), pauseAfter: s.pauseAfter || 380 }))
      .filter((s) => s.text);
  } else {
    const clean = cleanSpeakText(textOrSections);
    if (!clean) return;
    sections = sectionizeSpeakText(clean).map((t, i, arr) => ({ text: t, pauseAfter: i < arr.length - 1 ? 380 : 0 }));
  }
  if (!sections.length) return;

  const sample = sections.map((s) => s.text).join(' ');
  const esHits = (sample.match(/[áéíóúñ¿¡]|\b(hola|gracias|quiero|tengo|cómo|dónde|está|llamo|por favor|manzana|cohete|niño)\b/gi) || []).length;
  const prefer = esHits >= 2 ? 'es-ES' : 'en-US';
  const voice = pickVoice(prefer);

  const clearBtn = () => {
    if (btn) {
      btn.classList.remove('speaking');
      btn.setAttribute('aria-pressed', 'false');
    }
    _utter = null;
  };
  if (btn) {
    btn.classList.add('speaking');
    btn.setAttribute('aria-pressed', 'true');
  }

  _speakQueue = sections.slice();
  const playNext = () => {
    if (!_speakQueue.length) {
      clearBtn();
      return;
    }
    const item = _speakQueue.shift();
    _utter = new SpeechSynthesisUtterance(item.text);
    // Child-friendly: slower and clearer, with only tiny natural variation so words stay easy to understand
    const baseRate = 0.84;
    const basePitch = 1.05;
    _utter.rate = baseRate + (Math.random() - 0.5) * 0.03;
    _utter.pitch = basePitch + (Math.random() - 0.5) * 0.03;
    _utter.volume = 1;
    _utter.lang = prefer;
    if (voice) {
      _utter.voice = voice;
      if (voice.lang) _utter.lang = voice.lang;
    }
    _utter.onend = () => {
      _utter = null;
      if (!_speakQueue.length) {
        clearBtn();
        return;
      }
      const gap = Math.max(180, item.pauseAfter || 380);
      setTimeout(() => {
        if (btn && !btn.classList.contains('speaking')) return;
        playNext();
      }, gap);
    };
    _utter.onerror = () => {
      clearBtn();
      _speakQueue = [];
    };
    try { window.speechSynthesis.speak(_utter); } catch (e) { clearBtn(); }
  };
  setTimeout(playNext, 40);
}
function wireReadAloud(root) {
  (root || $app).querySelectorAll('[data-read]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('speaking')) {
        stopSpeak();
        btn.classList.remove('speaking');
        btn.setAttribute('aria-pressed', 'false');
        return;
      }
      const mode = btn.getAttribute('data-speak-mode') || '';
      const sel = btn.getAttribute('data-read');
      const target = sel ? $app.querySelector(sel) : btn.closest('.card, .mission, .story, .intro, .q, .lesson');
      speakText(textForSpeak(target, mode), btn);
    });
  });
}

// ---------- state + multi-profile (up to 10 cadets) ----------
const defaults = () => ({
  xp: 0, spent: 0, bonus: {}, streak: 0, lastDay: null, progress: {}, name: '', company: '',
  shards: 0, survival: {}, fx: {}, accent: '',
  earnedBy: {}, shardsEarned: 0, shardsSpent: 0, shardsForfeited: 0, bestStreak: 0, log: [],
  owned: {}, advanced: {}, focusSound: false, focusVol: 0.55, focusLayout: false, onboarded: false, advancedPreview: {}, weak: {}, equipped: { ship: 'rocket', theme: 'nebula', logo: 'logo-star', skin: 'skin-default', font: 'font-default', shape: 'shape-round' }, daily: null, dailyCount: 0,
  streakAwards: {}, ach: {}, review: [], bosses: {}, capstone: {}, capstoneDone: {},
  stats: { requests: 0, speedTrial: false }, req: { date: null, n: 0 },
  timeAttack: { add: { 2: 0, 3: 0, 5: 0 }, mul: { 2: 0, 3: 0, 5: 0 } },
  pets: { unlocked: false, owned: [], active: null, data: {}, gauntlet: { date: null, used: 0 } }
});
function newProfileId() {
  return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function emptyStore() {
  return { activeId: null, list: [], data: {} };
}
function migrateOldSave() {
  try {
    const raw = localStorage.getItem(OLD_KEY);
    if (!raw) return null;
    const old = JSON.parse(raw);
    if (!old || typeof old !== 'object') return null;
    const id = newProfileId();
    const name = (old.name && String(old.name).trim()) || 'Cadet 1';
    const store = emptyStore();
    store.activeId = id;
    store.list = [{ id, name, icon: PROFILE_ICONS[0] }];
    store.data[id] = Object.assign(defaults(), old);
    localStorage.setItem(KEY, JSON.stringify(store));
    return store;
  } catch (e) { return null; }
}
function loadStore() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && s.list && s.data) return s;
    }
  } catch (e) {}
  const migrated = migrateOldSave();
  if (migrated) return migrated;
  return emptyStore();
}
let store = loadStore();
// Enhanced storage protection is requested only after the learner or parent opts in.
const STORAGE_PROMPT_KEY = 'galactic.academy.storagePrompt.v1';
const STORAGE_CHOICE_KEY = 'galactic.academy.storageChoice.v1';
function showStoragePrompt(force = false) {
  if (!force && localStorage.getItem(STORAGE_PROMPT_KEY) === 'shown') return;
  const old = document.getElementById('storage-protection-dialog');
  if (old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'storage-protection-dialog';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#050311dd;display:flex;align-items:center;justify-content:center;padding:18px;';
  overlay.innerHTML = `<section role="dialog" aria-modal="true" aria-labelledby="storage-protection-title" style="width:min(100%,440px);background:#17122e;color:#f1eeff;border:1px solid #6c5aa7;border-radius:20px;padding:22px;box-shadow:0 20px 70px #0009">
    <div style="font-size:34px;text-align:center">🛡️</div>
    <h2 id="storage-protection-title" style="text-align:center;margin:8px 0 12px">Protect your game progress?</h2>
    <p style="line-height:1.5">Galactic Academy saves learner profiles and progress on this device. You can ask your browser to protect that data from automatic storage cleanup, helping preserve missions, achievements, and scores.</p>
    <p style="line-height:1.5;color:#c8c1e5;font-size:13px">This does not back up your data or prevent it from being erased if you clear browser/site data, uninstall the browser, or change devices. You can download a profile backup in Manage Profiles.</p>
    <button id="storage-protect-yes" class="btn" style="width:100%;margin-top:8px">🛡️ Protect my progress</button>
    <button id="storage-protect-later" class="btn sec" style="width:100%;margin-top:8px">Not now</button>
    <p id="storage-protect-status" aria-live="polite" style="font-size:12px;color:#c8c1e5;text-align:center;margin-bottom:0"></p>
  </section>`;
  document.body.appendChild(overlay);
  const close = (choice) => {
    localStorage.setItem(STORAGE_PROMPT_KEY, 'shown');
    localStorage.setItem(STORAGE_CHOICE_KEY, choice);
    overlay.remove();
  };
  const laterButton = overlay.querySelector('#storage-protect-later');
  const onLater = () => close('later');
  laterButton.addEventListener('click', onLater);
  overlay.querySelector('#storage-protect-yes').addEventListener('click', async () => {
    const status = overlay.querySelector('#storage-protect-status');
    const button = overlay.querySelector('#storage-protect-yes');
    button.disabled = true; button.textContent = 'Checking browser support…';
    try {
      if (!navigator.storage || typeof navigator.storage.persist !== 'function') {
        status.textContent = 'This browser does not support enhanced storage protection. Progress is still saved locally, but can be cleared with browser data.';
        button.disabled = false; button.textContent = 'Try again';
        localStorage.setItem(STORAGE_PROMPT_KEY, 'shown');
        localStorage.setItem(STORAGE_CHOICE_KEY, 'unsupported');
        return;
      }
      const already = navigator.storage.persisted ? await navigator.storage.persisted() : false;
      const granted = already || await navigator.storage.persist();
      localStorage.setItem(STORAGE_PROMPT_KEY, 'shown');
      localStorage.setItem(STORAGE_CHOICE_KEY, granted ? 'protected' : 'requested-not-granted');
      status.textContent = granted ? 'Your browser will protect this site’s storage from automatic cleanup.' : 'Your browser did not grant this protection. Your progress is still saved locally; use Download Profile Backup for extra safety.';
      button.textContent = 'Protection checked';
      button.disabled = true;
      laterButton.removeEventListener('click', onLater);
      laterButton.textContent = 'Close';
      laterButton.addEventListener('click', () => overlay.remove(), { once: true });
    } catch (e) {
      status.textContent = 'The browser could not enable this protection. Your progress is still saved locally; a backup is the safest extra protection.';
      button.disabled = false; button.textContent = 'Try again';
    }
  });
}
function exportProfiles() {
  save();
  const payload = { app: 'Galactic Academy', version: 1, exportedAt: new Date().toISOString(), store };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `galactic-academy-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  alert('Backup downloaded. Keep this file somewhere safe so you can restore profiles if phone data is cleared.');
}
function importProfiles(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const incoming = payload && payload.store ? payload.store : payload;
      if (!incoming || !Array.isArray(incoming.list) || !incoming.data || typeof incoming.data !== 'object' || !incoming.list.length || !incoming.list.every(p => p && p.id && incoming.data[p.id])) {
        throw new Error('Invalid backup');
      }
      if (!confirm('Restore this backup? It will replace the profiles currently stored on this phone.')) return;
      store = incoming;
      if (!store.list.some(p => p.id === store.activeId)) store.activeId = store.list[0].id;
      S = hydrateState(store.data[store.activeId]);
      localStorage.setItem(KEY, JSON.stringify(store));
      alert('Profiles restored successfully.');
      profilePicker(true);
    } catch (e) {
      alert('That file does not look like a valid Galactic Academy backup. Nothing was changed.');
    }
  };
  reader.readAsText(file);
}
function activeMeta() {
  return store.list.find((p) => p.id === store.activeId) || null;
}
function hydrateState(raw) {
  const s = Object.assign(defaults(), raw || {});
  // Preserve access for profiles that had already purchased an advanced course in older builds.
  s.advancedAcademyUnlocked = !!(s.advancedAcademyUnlocked || Object.values(s.advanced || {}).some(Boolean));
  s.stats = Object.assign(defaults().stats, s.stats || {});
  s.equipped = Object.assign(defaults().equipped, s.equipped || {});
  const taDef = defaults().timeAttack;
  const rawTa = s.timeAttack || {};
  s.timeAttack = { best: Object.assign({}, rawTa.best || {}), unlocked: Object.assign({}, rawTa.unlocked || {}) };
  // Migrate older flat bests (add/mul objects) and unlockedAdd/Mul flags
  ['add', 'mul', 'frac', 'pct', 'order', 'eq1', 'eq2', 'geo'].forEach((m) => {
    if (rawTa[m] && typeof rawTa[m] === 'object' && !Array.isArray(rawTa[m])) {
      s.timeAttack.best[m] = Object.assign({ 2: 0, 3: 0, 5: 0 }, s.timeAttack.best[m] || {}, rawTa[m]);
    }
  });
  if (rawTa.unlockedAdd) s.timeAttack.unlocked.add = true;
  if (rawTa.unlockedMul) s.timeAttack.unlocked.mul = true;
  // Note: full prereq sync runs when maps open (needs prog helpers)
  s.shardsEarned = Math.max(s.shardsEarned || 0, (s.shards || 0) + (s.shardsSpent || 0) + (s.shardsForfeited || 0));
  s.bestStreak = Math.max(s.bestStreak || 0, s.streak || 0);
  s.pets = Object.assign({ unlocked: false, owned: [], active: null, data: {}, gauntlet: { date: null, used: 0 } }, s.pets || {});
  if (!s.pets.gauntlet) s.pets.gauntlet = { date: null, used: 0 };
  if (!s.pets.data) s.pets.data = {};
  return s;
}
let S = hydrateState(store.activeId && store.data[store.activeId] ? store.data[store.activeId] : defaults());
const save = () => {
  if (!store.activeId) return;
  // Keep profile display name in sync with learner name when set
  const meta = activeMeta();
  if (meta && S.name && S.name.trim()) meta.name = S.name.trim().slice(0, 24);
  store.data[store.activeId] = S;
  localStorage.setItem(KEY, JSON.stringify(store));
};

// ---------- pets ----------
function petsUnlocked() {
  return !!S.pets.unlocked || schoolGraduated('basic');
}
function checkPetsUnlock() {
  if (schoolGraduated('basic') && !S.pets.unlocked) {
    S.pets.unlocked = true;
    save();
    toast('🐾 Pets unlocked! Visit the Pets block.');
  }
}
function petStage(id) {
  const d = (S.pets.data && S.pets.data[id]) || { crystals: 0 };
  let st = 0;
  if (d.crystals >= PET_EVOLVE[2]) st = 3;
  else if (d.crystals >= PET_EVOLVE[1]) st = 2;
  else if (d.crystals >= PET_EVOLVE[0]) st = 1;
  return st;
}
function petInfo(id) {
  const p = PETS.find((x) => x.id === id);
  if (!p) return null;
  const st = petStage(id);
  const stage = p.stages[st] || p.stages[0];
  return { ...p, stage: st, ...stage, crystals: ((S.pets.data && S.pets.data[id]) || {}).crystals || 0 };
}
function masteredCount() {
  return Object.keys(COURSES).filter((id) => bonusOf(id).badge).length;
}
function gauntletTurnsLeft() {
  const todayStr = today();
  if (S.pets.gauntlet.date !== todayStr) return masteredCount();
  return Math.max(0, masteredCount() - (S.pets.gauntlet.used || 0));
}
function resumeAmbient() {
  if (!(S && S.focusSound)) return;
  try {
    if (Ambient && Ambient.forceResume) Ambient.forceResume();
    else if (Ambient && !Ambient.isOn()) Ambient.start();
    else if (Ambient) Ambient.setVolume(S.focusVol || 0.55);
  } catch (e) {}
}
function switchProfile(id) {
  if (!store.data[id]) return;
  if (store.activeId) store.data[store.activeId] = S;
  store.activeId = id;
  S = hydrateState(store.data[id]);
  localStorage.setItem(KEY, JSON.stringify(store));
  stopSpeak();
  try { Ambient.stop(); } catch (e) {}
  if (S.focusSound) { try { Ambient.start(); } catch (e) {} }
  applyTheme();
  home();
}
function createProfile(name, icon) {
  if (store.list.length >= MAX_PROFILES) {
    alert(`You can have up to ${MAX_PROFILES} profiles.`);
    return null;
  }
  const id = newProfileId();
  const n = (name || '').trim().slice(0, 24) || `Cadet ${store.list.length + 1}`;
  const ic = icon || PROFILE_ICONS[store.list.length % PROFILE_ICONS.length];
  const state = defaults();
  state.name = n;
  store.list.push({ id, name: n, icon: ic });
  store.data[id] = state;
  store.activeId = id;
  S = hydrateState(state);
  localStorage.setItem(KEY, JSON.stringify(store));
  return id;
}
function deleteProfile(id) {
  if (store.list.length <= 1) {
    alert('Keep at least one profile.');
    return;
  }
  store.list = store.list.filter((p) => p.id !== id);
  delete store.data[id];
  if (store.activeId === id) {
    store.activeId = store.list[0].id;
    S = hydrateState(store.data[store.activeId]);
  }
  localStorage.setItem(KEY, JSON.stringify(store));
}
function profilePicker(force) {
  if (!force && store.activeId && store.list.length) return home();
  const canAdd = store.list.length < MAX_PROFILES;
  const cards = store.list.map((p) => {
    const st = hydrateState(store.data[p.id] || {});
    const missions = Object.keys(st.progress || {}).reduce((n, lang) => n + Object.keys((st.progress[lang] || {}).done || {}).length, 0);
    return `<button class="lang" style="--c1:#8b6cff;--c2:#35f0c0" data-pid="${p.id}">
      <span class="ic">${p.icon || '🚀'}</span>
      <span style="flex:1"><b>${esc(p.name)}</b>
      <span class="dim">${missions} mission${missions === 1 ? '' : 's'} · ${st.xp || 0} 💰</span></span></button>`;
  }).join('');
  render(`${header()}<h1>Who is learning?</h1>
    <p class="dim center">Each cadet has their own progress, credits, and achievements. Up to ${MAX_PROFILES} profiles.</p>
    <div class="tier">Cadets</div>
    ${cards || '<p class="dim center">No profiles yet — create one to start.</p>'}
    ${canAdd ? '<button class="btn" id="add">➕ Add cadet</button>' : '<p class="dim center">Maximum profiles reached</p>'}
    ${store.list.length ? '<button class="btn sec" id="manage">Manage profiles</button>' : ''}`, () => {
    on('[data-pid]', (el) => switchProfile(el.dataset.pid));
    on('#add', () => {
      const name = prompt('Cadet name:', `Cadet ${store.list.length + 1}`);
      if (name === null) return;
      createProfile(name);
      home();
    });
    on('#manage', manageProfiles);
  });
}
function manageProfiles() {
  const rows = store.list.map((p) => `<div class="card" style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
    <span style="font-size:28px">${p.icon || '🚀'}</span>
    <span style="flex:1"><b>${esc(p.name)}</b>${p.id === store.activeId ? ' · <span class="dim">active</span>' : ''}</span>
    <button class="btn sec" data-rename="${p.id}" style="width:auto;padding:8px 12px">Rename</button>
    ${store.list.length > 1 ? `<button class="btn sec" data-del="${p.id}" style="width:auto;padding:8px 12px">Delete</button>` : ''}
  </div>`).join('');
  render(`${header(1, 'Profiles')}<h2>Manage profiles</h2>${rows}
    ${store.list.length < MAX_PROFILES ? '<button class="btn" id="add">➕ Add cadet</button>' : ''}
    <div class="card" style="margin-top:16px"><h3>Keep your progress safe</h3>
      <p class="dim">Profiles are saved on this device. Enhanced storage protection can help prevent automatic cleanup, but it cannot prevent deliberate clearing of browser/site data or protect against device loss.</p>
      <button class="btn sec" id="storage-settings">🛡️ Device storage protection</button>
      <button class="btn" id="backup">⬇️ Download profile backup</button>
      <button class="btn sec" id="restore">⬆️ Restore profile backup</button>
      <input id="backup-file" type="file" accept="application/json,.json" hidden>
    </div>`, () => {
    on('[data-back]', () => profilePicker(true));
    on('#storage-settings', () => showStoragePrompt(true));
    on('#backup', exportProfiles);
    on('#restore', () => $app.querySelector('#backup-file').click());
    const backupFile = $app.querySelector('#backup-file');
    if (backupFile) backupFile.addEventListener('change', () => {
      importProfiles(backupFile.files && backupFile.files[0]);
      backupFile.value = '';
    });
    on('[data-rename]', (el) => {
      const p = store.list.find((x) => x.id === el.dataset.rename);
      if (!p) return;
      const n = prompt('Rename cadet:', p.name);
      if (n === null || !n.trim()) return;
      p.name = n.trim().slice(0, 24);
      if (store.data[p.id]) store.data[p.id].name = p.name;
      if (p.id === store.activeId) S.name = p.name;
      localStorage.setItem(KEY, JSON.stringify(store));
      manageProfiles();
    });
    on('[data-del]', (el) => {
      const p = store.list.find((x) => x.id === el.dataset.del);
      if (!p) return;
      if (!confirm(`Delete ${p.name}? Their progress will be erased.`)) return;
      deleteProfile(p.id);
      manageProfiles();
    });
    on('#add', () => {
      const name = prompt('Cadet name:', `Cadet ${store.list.length + 1}`);
      if (name === null) return;
      createProfile(name);
      manageProfiles();
    });
  });
}
// credits earned: one place adds them, so the Transcript can total them per subject
const earn = (n, lang) => { S.xp += n; if (lang) S.earnedBy[lang] = (S.earnedBy[lang] || 0) + n; return n; };
// one line of history for the Transcript (kept to the latest 400)
const logEv = (k, lang, txt, c, s) => { S.log.push({ t: Date.now(), k, lang: lang || '', txt, c: c || 0, s: s || 0 }); if (S.log.length > 400) S.log = S.log.slice(-400); };
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (n) => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10);
const pick = (a) => a[Math.random() * a.length | 0];
const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
const prog = (lang) => S.progress[lang] || (S.progress[lang] = { done: {} });
const bal = () => S.xp - S.spent;
const bonusOf = (lang) => S.bonus[lang] || (S.bonus[lang] = { bought: false, badge: false });
const rank = () => RANKS.filter((r) => S.xp >= r[0]).pop()[1];
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const eqAns = (q, a, v) => {
  const f = (s) => { s = norm(s); return q.ci ? s.replace(/;\s*$/, '').toLowerCase() : s; };
  if (f(a) === f(v)) return true;
  // numbers match numerically (42 and 42.0), so formatting never costs a correct answer
  const x = Number(a), y = Number(String(v).trim());
  return String(v).trim() !== '' && isFinite(x) && isFinite(y) && x === y;
};
const norm = (s) => s.trim().replace(/—/g, '--').replace(/–/g, '-').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').replace(/'/g, '"').replace(/\s*([=+\-*\/%<>(),:\[\]{}])\s*/g, '$1');
const item = (id) => X.shop.find((i) => i.id === id);
const hasItem = (it) => it.cost === 0 || !!S.owned[it.id];
const shipIcon = () => (item(S.equipped.ship) || { icon: '🚀' }).icon;
const logoIcon = () => (item(S.equipped.logo) || { icon: '🌟' }).icon;
const companyName = () => S.company || 'Galactic Academy';
const idTail = (id, fallback) => (id || fallback).replace(/^[a-z]+-/, '');
const applyTheme = () => {
  const h = document.documentElement, e = S.equipped;
  h.setAttribute('data-theme', e.theme || 'nebula');
  h.setAttribute('data-skin', idTail(e.skin, 'skin-default'));
  h.setAttribute('data-font', idTail(e.font, 'font-default'));
  h.setAttribute('data-shape', idTail(e.shape, 'shape-round'));
  h.setAttribute('data-fx', Object.keys(S.fx).filter((k) => S.fx[k] && S.owned['fx-' + k]).join(' '));
  if (S.accent && S.owned['accent-studio']) {
    h.style.setProperty('--accent', S.accent);
    h.style.setProperty('--good', S.accent);
  } else {
    h.style.removeProperty('--accent');
    h.style.removeProperty('--good');
  }
  h.classList.toggle('focus-mode', !!S.focusSound);
  h.classList.toggle('focus-layout', !!S.focusLayout);
};
// tap sparkles (UI Studio effect)
document.addEventListener('pointerdown', (ev) => {
  if (!(S.fx.sparkle && S.owned['fx-sparkle'])) return;
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('span'); s.className = 'spark'; s.textContent = pick(['✨', '⭐', '💫', '✦']);
    s.style.left = ev.clientX + 'px'; s.style.top = ev.clientY + 'px';
    s.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px'); s.style.setProperty('--dy', (Math.random() * -110 - 10) + 'px');
    document.body.appendChild(s); setTimeout(() => s.remove(), 900);
  }
});
// questions can carry a generator (gen) that re-rolls their numbers every time they are asked
const fresh = (q) => (q.gen ? Object.assign({}, q, q.gen()) : q);

function toast(msg) {
  let box = document.getElementById('toasts');
  if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; box.appendChild(t);
  setTimeout(() => t.remove(), 3600);
}
function checkAch() {
  X.ach.forEach((a) => { if (!S.ach[a.id] && a.test(S)) { S.ach[a.id] = true; logEv('ach', '', `Achievement unlocked: ${a.name}`); toast(`${a.icon} Achievement: ${a.name}`); } });
  save();
}
function touchStreak() {
  const t = today();
  if (S.lastDay !== t) {
    const y = addDays(-1);
    S.streak = S.lastDay === y ? S.streak + 1 : 1;
    S.lastDay = t;
    S.bestStreak = Math.max(S.bestStreak, S.streak);
    Object.keys(STREAK_REWARDS).forEach((m) => {
      if (S.streak >= +m && !S.streakAwards[m]) { S.streakAwards[m] = true; earn(STREAK_REWARDS[m]); logEv('streak', '', `${m}-day streak bonus`, STREAK_REWARDS[m]); toast(`🔥 ${m}-day streak! +${STREAK_REWARDS[m]} credits`); }
    });
  }
}


// ---------- Focus ambient — adventurous space pads (clear motion, smooth blends) ----------
const Ambient = (() => {
  let ctx = null, master = null, padBus = null, airBus = null, noiseBus = null, shimmerBus = null;
  let filters = [], oscs = [], timers = [], noiseNodes = [];
  let running = false, progIdx = 0, chordIdx = 0, currentFreqs = null;
  let lfo = null, lfoGain = null;
  let intensity = false; // true during gauntlets & time attacks

  // Note → Hz (A4 = 440)
  const N = (() => {
    const names = { C:0, Cs:1, Db:1, D:2, Ds:3, Eb:3, E:4, F:5, Fs:6, Gb:6, G:7, Gs:8, Ab:8, A:9, As:10, Bb:10, B:11 };
    return (name, oct) => {
      const pc = names[name];
      const midi = (oct + 1) * 12 + pc;
      return 440 * Math.pow(2, (midi - 69) / 12);
    };
  })();

  // Clearer, mid-register adventure voicings (less sub-mud, more lift)
  // Order: root, fifth, color third/seventh, octave, soft air
  const chord = (...fs) => fs.filter(Boolean);
  const CH = {
    // Bright journey majors
    C:    chord(N('C',3), N('G',3), N('E',4), N('C',4), N('G',4)),
    G:    chord(N('G',2), N('D',3), N('B',3), N('G',3), N('D',4)),
    F:    chord(N('F',2), N('C',3), N('A',3), N('F',3), N('C',4)),
    Am:   chord(N('A',2), N('E',3), N('C',4), N('A',3), N('E',4)),
    Em:   chord(N('E',3), N('B',3), N('G',4), N('E',4), N('B',4)),
    Dm:   chord(N('D',3), N('A',3), N('F',4), N('D',4), N('A',4)),
    // Soft sevenths / sus for motion
    Cmaj7: chord(N('C',3), N('G',3), N('B',3), N('E',4), N('G',4)),
    Fmaj7: chord(N('F',2), N('C',3), N('E',3), N('A',3), N('C',4)),
    Gsus:  chord(N('G',2), N('D',3), N('C',4), N('G',3), N('D',4)),
    Am7:   chord(N('A',2), N('E',3), N('G',3), N('C',4), N('E',4)),
    Dsus:  chord(N('D',3), N('A',3), N('G',3), N('D',4), N('A',4)),
    Em7:   chord(N('E',3), N('B',3), N('D',4), N('G',4), N('B',4)),
    // Lift / voyage color
    A:    chord(N('A',2), N('E',3), N('Cs',4), N('A',3), N('E',4)),
    D:    chord(N('D',3), N('A',3), N('Fs',4), N('D',4), N('A',4)),
    Bb:   chord(N('Bb',2), N('F',3), N('D',4), N('Bb',3), N('F',4)),
    Bm:   chord(N('B',2), N('Fs',3), N('D',4), N('B',3), N('Fs',4))
  };

  /**
   * Progressions with clearer forward motion — adventuring, not trapped.
   * Mix of familiar lift cadences and soft color changes.
   */
  const PROGRESSIONS = [
    { name: 'voyage',   chords: [CH.C, CH.G, CH.Am, CH.F] },
    { name: 'horizon',  chords: [CH.C, CH.Am, CH.F, CH.G] },
    { name: 'trail',    chords: [CH.Am, CH.F, CH.C, CH.G] },
    { name: 'lift',     chords: [CH.Cmaj7, CH.Fmaj7, CH.Am7, CH.Gsus] },
    { name: 'orbit',    chords: [CH.F, CH.C, CH.G, CH.Am] },
    { name: 'aurora',   chords: [CH.Em, CH.C, CH.G, CH.D] },
    { name: 'comet',    chords: [CH.D, CH.A, CH.Bm, CH.G] },
    { name: 'softpath', chords: [CH.Am7, CH.Dsus, CH.Gsus, CH.Cmaj7] },
    { name: 'dawn',     chords: [CH.Fmaj7, CH.C, CH.Dm, CH.G] },
    { name: 'glide',    chords: [CH.Em7, CH.Am7, CH.Fmaj7, CH.C] }
  ];

  function currentChord() {
    const p = PROGRESSIONS[progIdx] || PROGRESSIONS[0];
    const list = p.chords.map((c) => c || CH.C);
    return list[chordIdx % list.length];
  }

  function ensure() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;

    // Main pad — warm but open (less muffling than before)
    padBus = ctx.createGain();
    padBus.gain.value = 1;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1400;
    lp.Q.value = 0.4;
    const lp2 = ctx.createBiquadFilter();
    lp2.type = 'lowpass';
    lp2.frequency.value = 2200;
    lp2.Q.value = 0.25;
    // Gentle high shelf cut via second LP is enough; add mild presence with peaking
    const presence = ctx.createBiquadFilter();
    presence.type = 'peaking';
    presence.frequency.value = 900;
    presence.Q.value = 0.7;
    presence.gain.value = 1.5;
    padBus.connect(lp);
    lp.connect(presence);
    presence.connect(lp2);
    lp2.connect(master);
    filters = [lp, lp2, presence];

    // Soft air layer (higher partials, very quiet) for depth without mud
    airBus = ctx.createGain();
    airBus.gain.value = 0.35;
    const aHp = ctx.createBiquadFilter();
    aHp.type = 'highpass';
    aHp.frequency.value = 600;
    aHp.Q.value = 0.4;
    const aLp = ctx.createBiquadFilter();
    aLp.type = 'lowpass';
    aLp.frequency.value = 3200;
    aLp.Q.value = 0.3;
    airBus.connect(aHp);
    aHp.connect(aLp);
    aLp.connect(master);

    // Very soft cosmic dust — quieter than before to avoid "trapped in static"
    noiseBus = ctx.createGain();
    noiseBus.gain.value = 0.014;
    const nLp = ctx.createBiquadFilter();
    nLp.type = 'lowpass';
    nLp.frequency.value = 380;
    nLp.Q.value = 0.35;
    const nHp = ctx.createBiquadFilter();
    nHp.type = 'highpass';
    nHp.frequency.value = 120;
    nHp.Q.value = 0.3;
    noiseBus.connect(nHp);
    nHp.connect(nLp);
    nLp.connect(master);

    // Sparse bright shimmer accents
    shimmerBus = ctx.createGain();
    shimmerBus.gain.value = 0.62;
    const sHp = ctx.createBiquadFilter();
    sHp.type = 'highpass';
    sHp.frequency.value = 500;
    sHp.Q.value = 0.3;
    const sLp = ctx.createBiquadFilter();
    sLp.type = 'lowpass';
    sLp.frequency.value = 3600;
    sLp.Q.value = 0.25;
    shimmerBus.connect(sHp);
    sHp.connect(sLp);
    sLp.connect(master);

    // Subtle amplitude motion — slow, not nauseating
    lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.09;
    lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.035;
    lfo.connect(lfoGain);
    lfoGain.connect(padBus.gain);
    try { lfo.start(); } catch (e) {}

    master.connect(ctx.destination);
  }

  function makeNoiseBuffer() {
    if (!ctx) return null;
    const len = ctx.sampleRate * 3;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.018 * white) / 1.018;
      data[i] = last * 2.8;
    }
    return buf;
  }

  function startNoise() {
    if (!ctx || !noiseBus) return;
    stopNoise();
    const buf = makeNoiseBuffer();
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const g = ctx.createGain();
    g.gain.value = 0.0001;
    src.connect(g);
    g.connect(noiseBus);
    const now = ctx.currentTime;
    g.gain.exponentialRampToValueAtTime(1, now + 3.5);
    try { src.start(); } catch (e) {}
    noiseNodes = [{ src, gain: g }];
  }

  function stopNoise(fade) {
    fade = fade == null ? 2 : fade;
    if (!ctx) return;
    const now = ctx.currentTime;
    noiseNodes.forEach(({ src, gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + fade);
        src.stop(now + fade + 0.1);
      } catch (e) {}
    });
    noiseNodes = [];
  }

  function clearTimers() {
    timers.forEach((t) => clearTimeout(t));
    timers = [];
  }

  function stopVoices(fade) {
    fade = fade == null ? 2.8 : fade;
    if (!ctx) return;
    const now = ctx.currentTime;
    oscs.forEach(({ osc, gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + fade);
        osc.stop(now + fade + 0.08);
      } catch (e) {}
    });
    oscs = [];
  }

  /**
   * Smooth chord change: fade out old voices while new ones rise.
   * One oscillator per partial (no dual-detune pairs) → no binaural beating.
   * Tiny per-voice micro-detune only for width, kept under ~1.5 cents.
   */
  function playChord(freqs) {
    if (!ctx || !padBus) return;
    currentFreqs = freqs.slice();
    const now = ctx.currentTime;
    // Longer crossfade for seamless transitions
    stopVoices(3.2);
    freqs.forEach((f, i) => {
      // Main partial
      const osc = ctx.createOscillator();
      osc.type = i === 0 ? 'sine' : (i % 2 === 0 ? 'sine' : 'triangle');
      osc.frequency.value = f;
      // Micro-detune only — avoids slow binaural wobble
      osc.detune.value = (i - 2) * 0.6 + (Math.random() - 0.5) * 0.8;
      const g = ctx.createGain();
      g.gain.value = 0.0001;
      osc.connect(g);
      g.connect(padBus);
      // Root a bit stronger, air softer
      const weight = i === 0 ? 1.15 : (i >= 3 ? 0.7 : 1);
      const peak = (0.12 / Math.sqrt(freqs.length)) * weight;
      const attack = 2.2 + i * 0.25 + Math.random() * 0.4;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(peak, now + attack);
      g.gain.setValueAtTime(peak, now + 10);
      g.gain.exponentialRampToValueAtTime(peak * 0.88, now + 16);
      osc.start(now);
      oscs.push({ osc, gain: g });

      // Soft air octave (depth) on higher partials only — single osc, no detune pair
      if (i >= 1 && i <= 3 && f * 2 < 2400) {
        const air = ctx.createOscillator();
        air.type = 'sine';
        air.frequency.value = f * 2;
        air.detune.value = (Math.random() - 0.5) * 1.2;
        const ag = ctx.createGain();
        ag.gain.value = 0.0001;
        air.connect(ag);
        ag.connect(airBus);
        const aPeak = peak * 0.22;
        ag.gain.setValueAtTime(0.0001, now);
        ag.gain.exponentialRampToValueAtTime(aPeak, now + attack + 0.6);
        ag.gain.setValueAtTime(aPeak, now + 12);
        ag.gain.exponentialRampToValueAtTime(aPeak * 0.75, now + 18);
        air.start(now);
        oscs.push({ osc: air, gain: ag });
      }
    });
  }

  function playTwinkle(f, when, level, decay) {
    if (!ctx || !shimmerBus) return;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = f;
    // Minimal detune so twinkles stay locked to the drone/pad
    osc.detune.value = (Math.random() - 0.5) * 1.5;
    const g = ctx.createGain();
    g.gain.value = 0.0001;
    osc.connect(g);
    g.connect(shimmerBus);
    // Sharper attack
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(level, when + 0.018);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 0.018 + decay);
    osc.start(when);
    try { osc.stop(when + 0.018 + decay + 0.05); } catch (e) {}
  }

  /** Soft star-twinkles over the pad — clusters of 1–3 high sine pings */
  function shimmerAccent() {
    if (!ctx || !shimmerBus || !running) return;
    const base = currentFreqs || currentChord();
    if (!base || !base.length) return;
    const now = ctx.currentTime;
    const count = Math.random() < 0.35 ? 1 : (Math.random() < 0.55 ? 2 : 3);
    for (let i = 0; i < count; i++) {
      const src = base[Math.floor(Math.random() * base.length)];
      const mult = Math.random() < 0.55 ? 2 : (Math.random() < 0.7 ? 3 : 1);
      let f = src * mult;
      // Prefer sparkling high range
      if (f < 500) f *= 2;
      if (f < 400 || f > 2800) continue;
      const level = 0.006 + Math.random() * 0.007;
      // Sharper, shorter decays so twinkles feel crisp instead of drawn-out
      const decay = 0.28 + Math.random() * 0.55;
      playTwinkle(f, now + i * (0.08 + Math.random() * 0.14), level, decay);
    }
  }

  function scheduleShimmers() {
    if (!running) return;
    // More frequent twinkle to match faster progression
    const wait = intensity
      ? (2000 + Math.random() * 3500)
      : (3500 + Math.random() * 5500);
    const t = setTimeout(() => {
      if (!running) return;
      if (Math.random() < (intensity ? 0.9 : 0.75)) shimmerAccent();
      scheduleShimmers();
    }, wait);
    timers.push(t);
  }

  function advanceProgression() {
    const p = PROGRESSIONS[progIdx];
    chordIdx += 1;
    if (chordIdx >= p.chords.length) {
      chordIdx = 0;
      if (Math.random() < 0.38) {
        const related = {
          voyage: ['horizon', 'lift', 'orbit'],
          horizon: ['voyage', 'trail', 'dawn'],
          trail: ['horizon', 'softpath', 'glide'],
          lift: ['voyage', 'orbit', 'dawn'],
          orbit: ['voyage', 'aurora', 'lift'],
          aurora: ['comet', 'glide', 'orbit'],
          comet: ['aurora', 'horizon', 'voyage'],
          softpath: ['glide', 'trail', 'lift'],
          dawn: ['horizon', 'lift', 'voyage'],
          glide: ['softpath', 'trail', 'aurora']
        };
        const opts = related[p.name] || PROGRESSIONS.map((x) => x.name);
        const pick = opts[Math.floor(Math.random() * opts.length)];
        const ni = PROGRESSIONS.findIndex((x) => x.name === pick);
        progIdx = ni >= 0 ? ni : Math.floor(Math.random() * PROGRESSIONS.length);
      }
    }
  }

  function nextKeySoon() {
    if (!running) return;
    // Twice as fast: calm ~6–10s, intense ~3.5–6s
    const wait = intensity
      ? (3500 + Math.random() * 2500)
      : (6000 + Math.random() * 4000);
    const t = setTimeout(() => {
      if (!running) return;
      advanceProgression();
      playChord(currentChord());
      if (filters[0] && ctx) {
        const now = ctx.currentTime;
        const target = intensity
          ? (1200 + Math.random() * 800)
          : (1000 + Math.random() * 600);
        filters[0].frequency.cancelScheduledValues(now);
        filters[0].frequency.setValueAtTime(filters[0].frequency.value, now);
        filters[0].frequency.linearRampToValueAtTime(target, now + (intensity ? 2.5 : 4.5));
      }
      nextKeySoon();
    }, wait);
    timers.push(t);
  }

  function currentVol() {
    const v = (typeof S !== 'undefined' && S && S.focusVol != null) ? +S.focusVol : 0.55;
    return Math.max(0, Math.min(1, isNaN(v) ? 0.55 : v));
  }

  function setVolume(v) {
    v = Math.max(0, Math.min(1, +v || 0));
    if (typeof S !== 'undefined' && S) S.focusVol = v;
    if (!ctx || !master) return;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    if (!running) {
      master.gain.setValueAtTime(0.0001, now);
      return;
    }
    const target = Math.max(0.0001, v * 1.95);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(target, now + 0.2);
  }

  function start() {
    ensure();
    if (!ctx) return false;
    if (ctx.state === 'suspended') ctx.resume();
    running = true;
    clearTimers();
    const now = ctx.currentTime;
    const vol = Math.max(0.0001, currentVol() * 1.95);
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value || 0.0001, now);
    master.gain.exponentialRampToValueAtTime(vol, now + 2.8);
    progIdx = Math.floor(Math.random() * PROGRESSIONS.length);
    chordIdx = 0;
    playChord(currentChord());
    startNoise();
    nextKeySoon();
    scheduleShimmers();
    return true;
  }

  function stop() {
    running = false;
    clearTimers();
    if (!ctx || !master) return;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
    stopVoices(2.2);
    stopNoise(2.0);
  }

  function toggle() {
    if (running) { stop(); return false; }
    return start();
  }

  function isOn() { return running; }

  function syncFromState() {
    if (S && S.focusSound) { try { start(); } catch (e) {} }
    else stop();
  }

  function setIntense(on) {
    intensity = !!on;
    if (!ctx) return;
    const now = ctx.currentTime;
    if (lfo) {
      try {
        lfo.frequency.cancelScheduledValues(now);
        lfo.frequency.setValueAtTime(lfo.frequency.value, now);
        lfo.frequency.linearRampToValueAtTime(intensity ? 0.16 : 0.09, now + 1.0);
      } catch (e) {}
    }
    if (lfoGain) {
      try {
        lfoGain.gain.cancelScheduledValues(now);
        lfoGain.gain.setValueAtTime(lfoGain.gain.value, now);
        lfoGain.gain.linearRampToValueAtTime(intensity ? 0.07 : 0.035, now + 1.0);
      } catch (e) {}
    }
    if (noiseBus) {
      try {
        noiseBus.gain.cancelScheduledValues(now);
        noiseBus.gain.setValueAtTime(noiseBus.gain.value, now);
        noiseBus.gain.linearRampToValueAtTime(intensity ? 0.024 : 0.014, now + 1.2);
      } catch (e) {}
    }
    if (filters[0]) {
      try {
        const target = intensity ? 1600 : 1400;
        filters[0].frequency.cancelScheduledValues(now);
        filters[0].frequency.setValueAtTime(filters[0].frequency.value, now);
        filters[0].frequency.linearRampToValueAtTime(target, now + 1.5);
      } catch (e) {}
    }
    if (running) {
      clearTimers();
      nextKeySoon();
      scheduleShimmers();
    }
  }

  function isIntense() { return intensity; }

  function forceResume() {
    if (!S || !S.focusSound) return;
    ensure();
    if (!ctx) return;
    const tryGo = () => {
      if (ctx.state === 'suspended' || ctx.state === 'interrupted') {
        ctx.resume().then(() => {
          if (!running) start();
          else setVolume(S.focusVol != null ? S.focusVol : 0.55);
        }).catch(() => {});
      } else if (!running) {
        start();
      } else {
        setVolume(S.focusVol != null ? S.focusVol : 0.55);
      }
    };
    tryGo();
  }

  let windDownTimer = null;

  function gentleWindDown() {
    if (!ctx || !master) return;
    if (windDownTimer) { clearTimeout(windDownTimer); windDownTimer = null; }
    // Fade first so the oscillators die cleanly instead of being cut
    stop(); // already ramps master + voices/noise over ~2s and clears timers
    // Suspend only after the fade has had time to complete
    windDownTimer = setTimeout(() => {
      windDownTimer = null;
      if (ctx && (document.hidden || document.visibilityState === 'hidden')) {
        try { ctx.suspend(); } catch (e) {}
      }
    }, 2200);
  }

  function onVisibility() {
    if (!ctx) return;
    if (document.hidden) {
      if (running) gentleWindDown();
    } else {
      if (windDownTimer) { clearTimeout(windDownTimer); windDownTimer = null; }
      try { ctx.resume(); } catch (e) {}
      if (typeof S !== 'undefined' && S && S.focusSound) {
        forceResume();
      }
    }
  }

  function onPageHide() {
    if (running) gentleWindDown();
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', onVisibility);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('pagehide', onPageHide);
  }

  return { start, stop, toggle, isOn, syncFromState, setVolume, currentVol, setIntense, isIntense, forceResume };
})();


// ---------- shared pieces ----------
function render(html, wire) {
  stopSpeak();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
  wireReadAloud();
  const fs = $app.querySelector('#focus-sound');
  const fv = $app.querySelector('#focus-vol');
  const fw = $app.querySelector('.focus-wrap');
  if (fs) {
    fs.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const on = Ambient.toggle();
      S.focusSound = !!on;
      save();
      fs.classList.toggle('on', S.focusSound);
      fs.setAttribute('aria-pressed', S.focusSound ? 'true' : 'false');
      if (fw) fw.classList.toggle('on', S.focusSound);
      document.documentElement.classList.toggle('focus-mode', S.focusSound);
      if (fv) {
        fv.disabled = !S.focusSound;
        if (S.focusSound) Ambient.setVolume(S.focusVol != null ? S.focusVol : 0.55);
      }
      toast(S.focusSound ? '🎧 Focus sound on' : 'Focus sound off');
    });
  }
  if (fv) {
    const applyVol = () => {
      const v = Math.max(0, Math.min(1, (+fv.value || 0) / 100));
      S.focusVol = v;
      fv.setAttribute('aria-valuenow', String(Math.round(v * 100)));
      Ambient.setVolume(v);
      save();
    };
    fv.addEventListener('input', (e) => { e.stopPropagation(); applyVol(); });
    fv.addEventListener('change', (e) => { e.stopPropagation(); applyVol(); });
  }
  wire && wire();
}
const on = (sel, fn) => $app.querySelectorAll(sel).forEach((el) => el.addEventListener('click', () => fn(el)));
const header = (back, label) => {
  const vol = Math.max(0, Math.min(1, S.focusVol != null ? +S.focusVol : 0.55));
  const volPct = Math.round(vol * 100);
  return `<div class="top">${back ? `<button class="back" data-back>‹ ${label}</button>` : `<span class="brand">${shipIcon()} ${esc(companyName())}</span>`}
  <span class="top-right"><span class="focus-wrap ${S.focusSound ? 'on' : ''}" title="Focus ambient">
    <button type="button" class="chip focus-chip ${S.focusSound ? 'on' : ''}" id="focus-sound" aria-pressed="${S.focusSound ? 'true' : 'false'}">🎧 Focus</button>
    <label class="focus-vol-label" for="focus-vol"><span class="sr-only">Focus volume</span>
      <input type="range" id="focus-vol" class="focus-vol" min="0" max="100" step="1" value="${volPct}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${volPct}" aria-label="Focus sound volume" ${S.focusSound ? '' : 'disabled'}>
    </label>
  </span>
  <span class="chip">🔥 ${S.streak}</span> <span class="chip">💰 ${bal()}</span> <span class="chip">💎 ${S.shards}</span></span></div>`;
};
const confetti = () => {
  const boosted = !!(S.fx && S.fx.confetti && S.owned && S.owned['fx-confetti']);
  const n = boosted ? 42 : 24;
  return `<div class="confetti${boosted ? ' boosted' : ''}">${Array.from({ length: n }, (_, i) => `<i style="left:${(i * 100 / n).toFixed(1)}%;animation-delay:${(i % 10) * .12}s;background:hsl(${i * 17},90%,60%)"></i>`).join('')}</div>`;
};
const subjectKey = (lang) => {
  if (!lang) return '';
  if (lang.indexOf('math_') === 0 || lang === 'adv_math') return 'math';
  if (lang.indexOf('phon_') === 0 || lang === 'readinglab' || lang === 'adv_logic') return 'reading';
  if (lang.indexOf('geo_') === 0) return 'geography';
  if (lang.indexOf('spanish_') === 0) return 'spanish';
  if (lang.indexOf('civics_') === 0 || lang === 'adv_philosophy') return 'civics';
  if (lang.indexOf('science_') === 0 || lang === 'adv_bio') return 'science';
  if (lang.indexOf('adv_') === 0) return 'advanced';
  return '';
};
const zyx = (kind, lang) => {
  const m = X.mentor || {};
  const sk = subjectKey(lang);
  const by = kind === 'ok' ? m.okBySubject : kind === 'no' ? m.noBySubject : null;
  const specific = sk && by && by[sk] && by[sk].length ? by[sk] : null;
  const pool = (specific && Math.random() < 0.55 ? specific : null) || m[kind] || ['Keep going!'];
  return `${m.icon || '👽'} ${m.name || 'Zyx'}: ${pick(pool)}`;
};

function result(o) {
  render(`${header()}${o.confetti ? confetti() : ''}<div class="big">${o.big}</div><h2 class="center">${o.title}</h2><p class="center">${o.text}</p>
    ${o.buttons.map((b, i) => `<button class="btn ${b[2] ? 'sec' : ''}" data-b="${i}">${b[0]}</button>`).join('')}`, () => on('[data-b]', (el) => o.buttons[+el.dataset.b][1]()));
}

// question pools
const doneLevels = () => Object.keys(COURSES).flatMap((lang) => COURSES[lang].levels.filter((l) => prog(lang).done[l.id] != null).map((l) => ({ lang, l })));
const lvlMc = (lang, l) => l.challenges.map((q, k) => Object.assign(fresh(q), { lang, lid: l.id, k, id: `${lang}|${l.id}|${k}` })).filter((q) => q.type === 'mc');
const mcPoolDone = () => doneLevels().flatMap(({ lang, l }) => lvlMc(lang, l));
const getQ = (id) => { const [lang, lid, k] = id.split('|'); const c = COURSES[lang]; const l = c && c.levels.find((x) => x.id === lid); const q = l && l.challenges[+k]; return q && q.type === 'mc' ? Object.assign(fresh(q), { lang, lid, k: +k, id }) : null; };

// spaced review
function addReview(lang, lid, k) {
  const id = `${lang}|${lid}|${k}`, e = S.review.find((r) => r.id === id);
  if (e) { e.stage = 0; e.due = addDays(1); } else S.review.push({ id, stage: 0, due: addDays(1) });
  if (!S.weak) S.weak = {};
  S.weak[id] = (S.weak[id] || 0) + 1;
}
const dueReview = () => S.review.filter((r) => r.due <= today() && getQ(r.id));

// ---------- timed multiple-choice engine ----------
function timed(o) {
  const n = o.qs.length;
  let idx = 0, right = 0, lives = o.lives, timer = null;
  const t0 = Date.now(), showHearts = o.lives !== Infinity && o.lives > 1;
  const fin = (won) => { clearInterval(timer); o.done({ won, right, total: n, secs: (Date.now() - t0) / 1000 }); };

  function ask() {
    if (idx >= n) return fin(true);
    const q = o.qs[idx], opts = shuffle(q.options.map((t, i) => ({ t, i })));
    let left = o.secs, done = false, ok = false;
    render(`${header(1, 'Quit')}<div class="kind">${o.kind} · ${idx + 1} of ${n}${showHearts ? ` · ${'❤️'.repeat(lives)}${'🖤'.repeat(o.lives - lives)}` : ''}</div>
      ${o.secs ? '<div class="timer"><i id="tb"></i></div>' : ''}
      <div class="q"><p><b>${q.q}</b></p>
      ${opts.map((op, k) => `<button class="opt ${q.textOpts ? 'text' : ''}" data-n="${k}">${esc(op.t)}</button>`).join('')}
      <div id="fb"></div><button class="btn" id="nx" style="display:none">${idx + 1 < n ? 'Next question' : 'Finish'}</button></div>`, () => {
      const tb = $app.querySelector('#tb'), fb = $app.querySelector('#fb'), nx = $app.querySelector('#nx');
      const tick = () => { left -= 0.1; tb.style.width = Math.max(left / o.secs * 100, 0) + '%'; tb.classList.toggle('low', left < 5); if (left <= 0) settle(null); };
      const resume = () => { if (o.secs && !done) timer = setInterval(tick, 100); };
      const settle = (p) => {
        if (done) return; done = true; clearInterval(timer);
        ok = p !== null && opts[p].i === q.answer;
        $app.querySelectorAll('.opt').forEach((el, k) => { if (opts[k].i === q.answer) el.classList.add('right'); else if (k === p) el.classList.add('wrong'); });
        if (ok) right++; else lives--;
        if (o.onAnswer) o.onAnswer(q, ok);
        fb.innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><b>${zyx(ok ? 'ok' : p === null ? 'late' : 'no', q.lang || o.lang)}</b><br>${q.why}</div>`;
        nx.style.display = 'block'; nx.scrollIntoView({ block: 'end', behavior: 'smooth' });
      };
      on('[data-back]', () => { clearInterval(timer); if (confirm('Quit? Your progress in this run will be lost.')) o.back(); else resume(); });
      on('.opt', (el) => settle(+el.dataset.n));
      on('#nx', () => { idx++; if (lives <= 0) fin(false); else ask(); });
      resume();
    });
  }
  ask();
}

// ---------- home ----------
function subjectStats(sid) {
  const sub = SUBJECTS[sid];
  let done = 0, total = 0, masters = 0;
  sub.modules.forEach((id) => {
    const c = COURSES[id];
    if (!c) return;
    total += c.levels.length;
    done += Object.keys(prog(id).done).length;
    if (bonusOf(id).badge) masters++;
  });
  return { done, total, masters, modules: sub.modules.filter((id) => COURSES[id]).length };
}


// ---------- Onboarding tour ----------
function maybeOnboard() {
  if (S.onboarded) return false;
  onboard(0);
  return true;
}
function onboard(step) {
  const steps = [
    { big: '🚀', title: 'Welcome aboard', text: 'Galactic Academy is a free learning adventure. You will complete short missions, earn stars, and unlock Master badges in many subjects.' },
    { big: '📚', title: 'How learning works', text: '1) Pick a subject  2) Open a band  3) Do missions  4) Take the Mastery Trial  5) Try the Endless Gauntlet for Star Shards.' },
    { big: '🎧', title: 'Focus tools', text: 'Use Focus sound for calm study pads. Turn on Focus layout for larger text and more spacing. Read Aloud speaks lessons without reading emojis.' },
    { big: '🌌', title: 'You are ready', text: 'Start with any foundation subject. Advanced Academy unlocks later when you master the basics. Have fun, Space Cadet!' }
  ];
  const s = steps[step] || steps[0];
  const last = step >= steps.length - 1;
  render(`${header()}<div class="big">${s.big}</div><h2 class="center">${s.title}</h2>
    <div class="card story">${s.text}</div>
    <div class="dots center" style="margin:12px 0">${steps.map((_, i) => `<span style="opacity:${i === step ? 1 : 0.35}">●</span>`).join(' ')}</div>
    <button class="btn" id="nx">${last ? 'Start learning' : 'Next'}</button>
    ${step > 0 ? '<button class="btn sec" id="bk">Back</button>' : ''}
    <button class="link" id="skip">Skip tour</button>`, () => {
    const finish = () => { S.onboarded = true; save(); home(); };
    on('#nx', () => last ? finish() : onboard(step + 1));
    on('#bk', () => onboard(Math.max(0, step - 1)));
    on('#skip', finish);
  });
}


function timeAttackReportData() {
  const t = (S.timeAttack) || { best: {}, unlocked: {} };
  const best = t.best || {};
  const unlocked = t.unlocked || {};
  const runs = (S.log || []).filter((e) => e.k === 'timeattack' && /m:/.test(e.txt || ''));
  const modes = (typeof TA_MODES !== 'undefined' ? TA_MODES : []).map((mode) => {
    const b = best[mode.id] || {};
    const b2 = b[2] || 0, b3 = b[3] || 0, b5 = b[5] || 0;
    const open = !!unlocked[mode.id];
    const peak = Math.max(b2, b3, b5);
    const modeRuns = runs.filter((e) => (e.txt || '').indexOf(mode.label) === 0 || (e.txt || '').indexOf(mode.label) >= 0);
    return { mode, open, b2, b3, b5, peak, runs: modeRuns.length };
  });
  const unlockedN = modes.filter((m) => m.open).length;
  const totalRuns = runs.length;
  const anyBest = modes.some((m) => m.peak > 0);
  return { modes, unlockedN, totalRuns, anyBest };
}

// ---------- Parent / teacher progress report ----------
function parentReport() {
  const meta = activeMeta() || {};
  const cadet = esc(meta.name || S.name || 'Cadet');
  const nDone = Object.values(S.progress || {}).reduce((n, p) => n + Object.keys(p.done || {}).length, 0);
  const nMasters = Object.values(S.bonus || {}).filter((b) => b.badge).length;
  const weak = Object.entries(S.weak || {}).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const taData = timeAttackReportData();
  const schoolName = (id) => (COURSES[id] && COURSES[id].name) || id;
  const taBlock = `<div class="card report-subject" style="--c1:#4de1ff;--c2:#8b6cff">
      <div class="report-subhead"><span class="ic">⏱️</span><b>Time Attack (math)</b></div>
      <p class="dim" style="margin:0 0 8px;font-size:13px">Speed practice — no coins or shards. Best scores per clock (2 / 3 / 5 min).</p>
      ${taData.modes.map(({ mode, open, b2, b3, b5, peak, runs }) => {
        const status = open
          ? (peak ? `Best 2m ${b2} · 3m ${b3} · 5m ${b5}${runs ? ` · ${runs} run${runs === 1 ? '' : 's'}` : ''}` : 'Unlocked · no runs yet')
          : mode.lockHint;
        return `<div class="report-row">
          <span class="report-ico">${open ? mode.icon : '🔒'}</span>
          <span class="report-main"><b>${esc(mode.label)}</b>
            <span class="dim">${esc(schoolName(mode.school))} · ${status}</span>
            <div class="bar"><i style="width:${open ? (peak ? Math.min(100, peak * 4) : 8) : 0}%"></i></div>
          </span>
          <span class="report-pct">${open ? (peak || '—') : '🔒'}</span>
        </div>`;
      }).join('') || '<p class="dim">Time Attack loads with math modules.</p>'}
    </div>`;

  const subjectBlocks = Object.keys(SUBJECTS).map((sid) => {
    const sub = SUBJECTS[sid];
    const rows = sub.modules.map((id) => {
      const c = COURSES[id];
      if (!c) return '';
      const p = prog(id);
      const done = Object.keys(p.done).length;
      const total = c.levels.length;
      const pct = total ? Math.round(done / total * 100) : 0;
      const stars = Object.values(p.done).reduce((a, s) => a + (s || 0), 0);
      const maxStars = total * 3;
      const b = bonusOf(id);
      const unlocked = !isAdvanced(id) || advancedUnlocked(id);
      const prev = S.advancedPreview && S.advancedPreview[id];
      let status = b.badge ? '🏅 Mastered' : done ? `${done}/${total} missions` : 'Not started';
      if (isAdvanced(id)) {
        if (unlocked) status += ' · Unlocked';
        else if (prev) status += ' · Preview';
        else status = '🔒 Locked';
      }
      return `<div class="report-row">
        <span class="report-ico">${c.icon}</span>
        <span class="report-main"><b>${esc(c.name)}</b>
          <span class="dim">${status}${b.badge ? '' : ` · ${stars}/${maxStars} ★`}</span>
          <div class="bar"><i style="width:${pct}%"></i></div>
        </span>
        <span class="report-pct">${b.badge ? '🏅' : pct + '%'}</span>
      </div>`;
    }).join('');
    return `<div class="card report-subject" style="--c1:${sub.c1};--c2:${sub.c2}">
      <div class="report-subhead"><span class="ic">${sub.icon}</span><b>${esc(sub.name)}</b></div>
      ${rows}
    </div>`;
  }).join('');

  const weakBlock = weak.length ? `<div class="card report-weak"><b>🎯 Practice focus</b>
    <p class="dim">Skills missed most often — great targets for Extra Practice or Review.</p>
    ${weak.map(([id, n]) => {
      const q = getQ(id);
      return `<div class="report-weak-item"><span class="chip">${n}×</span> <span>${esc(q ? String(q.q).slice(0, 90) : id)}</span></div>`;
    }).join('')}</div>` : `<div class="card report-weak"><b>🎯 Practice focus</b><p class="dim">No missed-skill data yet. Complete missions to build this list.</p></div>`;

  const textExport = [
    `Galactic Academy Progress Report`,
    `Cadet: ${meta.name || S.name || 'Cadet'}`,
    `Rank: ${rank()} · Credits: ${bal()} · Shards: ${S.shards} · Streak: ${S.streak} · ${today()}`,
    `Missions completed: ${nDone} · Master badges: ${nMasters}`,
    `Time Attack modes unlocked: ${taData.unlockedN}/${taData.modes.length} · runs logged: ${taData.totalRuns}`,
    ...taData.modes.map(({ mode, open, b2, b3, b5, peak }) =>
      `  ${mode.label} (${schoolName(mode.school)}): ${open ? (peak ? `best 2m=${b2}, 3m=${b3}, 5m=${b5}` : 'unlocked, no runs yet') : 'locked'}`
    ),
    '',
    ...Object.keys(SUBJECTS).flatMap((sid) => {
      const sub = SUBJECTS[sid];
      return [sub.name, ...sub.modules.map((id) => {
        const c = COURSES[id]; if (!c) return '';
        const p = prog(id); const done = Object.keys(p.done).length;
        return `  ${c.name}: ${done}/${c.levels.length} missions · badge: ${bonusOf(id).badge ? 'yes' : 'no'}`;
      }), ''];
    })
  ].join('\n');

  render(`${header(1, 'Home')}
    <div class="report-hero">
      <div class="report-avatar">${(meta.icon || '🚀')}</div>
      <div>
        <div class="dim">Progress report</div>
        <h2 style="margin:0">${cadet}</h2>
        <div class="report-meta">${esc(rank())} · 🔥 ${S.streak} · 💰 ${bal()} · 💎 ${S.shards}</div>
      </div>
    </div>
    <div class="stat report-stats">
      <div class="card"><b>${nDone}</b><span class="dim">missions done</span></div>
      <div class="card"><b>${nMasters}</b><span class="dim">master badges</span></div>
      <div class="card"><b>${Object.keys(S.ach || {}).length}</b><span class="dim">achievements</span></div>
      <div class="card"><b>${taData.unlockedN}</b><span class="dim">TA modes open</span></div>
      <div class="card"><b>${taData.totalRuns}</b><span class="dim">TA runs</span></div>
    </div>
    <p class="dim center" style="font-size:13px">Private on this device · ${esc(today())}</p>
    ${subjectBlocks}
    ${taBlock}
    ${weakBlock}
    <button class="btn" id="copy">📋 Copy text summary</button>
    <button class="btn sec" id="bk">Back home</button>`, () => {
    on('[data-back]', home);
    on('#bk', home);
    on('#copy', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textExport);
          toast('📋 Text summary copied');
        } else {
          const ta = document.createElement('textarea');
          ta.value = textExport; document.body.appendChild(ta); ta.select();
          document.execCommand('copy'); ta.remove();
          toast('📋 Text summary copied');
        }
      } catch (e) {
        alert('Copy failed. You can still screenshot this report.');
      }
    });
  });
}

// ---------- Advanced: free first-mission preview ----------
function canPreviewAdvanced(lang) {
  return isAdvanced(lang) && prereqMet(lang) && !advancedUnlocked(lang);
}
function startAdvancedPreview(lang) {
  if (!canPreviewAdvanced(lang)) return tryUnlockAdvanced(lang);
  if (!S.advancedPreview) S.advancedPreview = {};
  S.advancedPreview[lang] = true;
  save();
  toast('🔭 Preview unlocked — first mission only');
  map(lang);
}
function advancedGate(lang) {
  const a = ADVANCED[lang], c = COURSES[lang];
  if (!a || !c) return home();
  if (!S.advancedAcademyUnlocked) return advancedAcademyGate();
  if (advancedUnlocked(lang)) return map(lang);
  if (!prereqMet(lang)) {
    alert(`Master all required foundations first:\n${a.prereqLabel}`);
    return subjectHub('advanced');
  }
  render(`${header(1, 'Advanced Academy')}<div class="big">${c.icon}</div><h2 class="center">${c.name}</h2>
    <p class="dim center">${c.tagline}</p><div class="card"><p><b>Prerequisites met.</b> Unlock this complete course—including all missions, its Mastery Trial, and Endless Gauntlet—for <b>${a.cost} 💎</b>.</p><p class="dim">You have ${S.shards} 💎 Star Shards.</p></div>
    <button class="btn sec" id="buy">Unlock course · ${a.cost} 💎</button><button class="link" id="bk">Back to Advanced Academy</button>`, () => {
    on('[data-back]', () => subjectHub('advanced')); on('#bk', () => subjectHub('advanced')); on('#buy', () => tryUnlockAdvanced(lang));
  });
}

function home() {
  checkPetsUnlock();
  if (!store.activeId || !store.list.length) return profilePicker(true);
  applyTheme();
  if (!S.onboarded) return onboard(0);
  const meta = activeMeta() || { name: S.name || 'Cadet', icon: '🚀' };
  const owned = doneLevels().map((d) => d.l);
  const nDone = owned.length, due = dueReview().length;
  const dailyReady = nDone > 0 && !(S.daily && S.daily.date === today());
  const reqLeft = REQ_DAILY_CAP - (S.req.date === today() ? S.req.n : 0);
  const nAch = Object.keys(S.ach).length;
  const cardFor = (sid) => {
    const sub = SUBJECTS[sid], st = subjectStats(sid), pct = st.total ? Math.round(st.done / st.total * 100) : 0;
    const unlocked = schoolUnlocked(sid), graduated = sid !== 'advanced' && schoolGraduated(sid);
    const advancedStatus = sid === 'advanced' ? (S.advancedAcademyUnlocked ? 'Academy unlocked · courses cost extra Star Shards' : `Unlock for ${ADVANCED_ACADEMY_COST} 💎 after graduating every other school`) : '';
    const status = sid === 'advanced' ? advancedStatus : (graduated ? 'Graduated 🏅' : `${st.masters}/${st.modules} subject Master badges`);
    return `<button class="lang ${sid === 'advanced' ? 'lang-adv' : ''} ${unlocked ? '' : 'locked'}" style="--c1:${sub.c1};--c2:${sub.c2}" data-school="${sid}">
      <span class="ic">${unlocked ? sub.icon : '🔒'}</span><span style="flex:1"><b>${sub.name}${graduated ? ' · 🏅' : ''}</b>
      <span class="dim">${sub.blurb}</span><div class="bar"><i style="width:${pct}%"></i></div>
      <small class="dim">${unlocked ? status : `Locked · Earn 3 stars on every mission in a subject's previous course to unlock its next level`}</small></span></button>`;
  };
  const subjectCards = SCHOOL_ORDER.map(cardFor).join('');
  render(`${header()}<h1>Welcome to <span class="grad">Galactic Academy</span></h1>
    <button class="lang" style="--c1:#8b6cff;--c2:#35f0c0;margin-bottom:8px" id="t-profile">
      <span class="ic">${meta.icon || '🚀'}</span>
      <span style="flex:1"><b>${esc(meta.name || S.name || 'Cadet')}</b>
      <span class="dim">Tap to switch cadet · ${store.list.length}/${MAX_PROFILES} profiles</span></span></button>
    <div class="card story">${zyx('ok')}<br><small class="dim">${nDone ? `${nDone} mission${nDone > 1 ? 's' : ''} completed. Choose a subject to keep learning!` : 'Welcome, Space Cadet! Pick a subject, complete missions, earn Master badges, and try Focus sound for calm study.'}</small></div>
    <div class="card rankcard"><span class="dim">Your rank</span><b>${rank()}</b>
      ${Object.keys(COURSES).filter((id) => bonusOf(id).badge).map((id) => `<div class="badge">🏅 Master of ${COURSES[id].name}</div>`).join('')}
      <div class="shelf">${owned.length ? owned.map((l) => `<span title="${l.title}">${l.icon}</span>`).join('') : '<span class="dim">Your discoveries will appear here</span>'}</div></div>
    <div class="menu">
      <button class="tile" id="t-hq"><span>🏢</span><b>My HQ</b><small>${esc(companyName())}</small></button>
      <button class="tile" id="t-shop"><span>🛒</span><b>Shop</b><small>${bal()} 💰</small></button>
      <button class="tile ${dailyReady ? 'hot' : ''}" id="t-daily"><span>📅</span><b>Daily</b><small>${nDone ? (dailyReady ? `+${DAILY_REWARD} 💰 ready` : 'done today') : 'finish a mission first'}</small></button>
      <button class="tile ${nDone && reqLeft > 0 ? 'hot' : ''}" id="t-req"><span>🧠</span><b>Extra Practice</b><small>${nDone ? `${Math.max(reqLeft, 0)} bonus rounds left today` : 'finish a mission first'}</small></button>
      <button class="tile ${due ? 'hot' : ''}" id="t-rev"><span>🔁</span><b>Review</b><small>${due} due</small></button>
      <button class="tile" id="t-ach"><span>🏆</span><b>Achievements</b><small>${nAch}/${X.ach.length}</small></button>
      <button class="tile" id="t-report"><span>📋</span><b>Progress Report</b><small>For parents & teachers</small></button>
      <button class="tile" id="t-layout"><span>♿</span><b>Focus Layout</b><small>${S.focusLayout ? 'On · larger text' : 'Off · standard'}</small></button>
      <button class="tile ${petsUnlocked() ? '' : 'locked'}" id="t-pets"><span>${petsUnlocked() ? '🐾' : '🔒'}</span><b>Pets</b><small>${petsUnlocked() ? (S.pets.active ? (petInfo(S.pets.active)||{}).name || 'Companion' : 'Choose a companion') : 'Complete Basic Academy to unlock'}</small></button>
    </div>
    ${subjectCards}
    <p class="center dim" style="font-size:12px;margin-top:20px">Galactic Academy · Free offline learning · Focus mode available</p>
    <button class="link" id="reset">Reset this cadet’s progress</button>`, () => {
    on('[data-school]', (el) => { const sid = el.dataset.school; if (sid === 'advanced' && !S.advancedAcademyUnlocked) return advancedAcademyGate(); if (!schoolUnlocked(sid)) { toast('This school unlocks as you master individual subjects. Earn 3 stars on every mission in a subject course to unlock that subject at the next academy level.'); resumeAmbient(); return; } subjectHub(sid); });
    on('#t-profile', () => profilePicker(true));
    on('#t-hq', hq); on('#t-shop', shop); on('#t-ach', achievements);
    on('#t-daily', dailyStart); on('#t-req', requestStart); on('#t-rev', reviewStart);
    on('#t-report', parentReport);
    on('#t-pets', () => {
      if (!petsUnlocked()) { toast('Complete the entire Basic Academy to unlock Pets'); resumeAmbient(); return; }
      petsScreen();
    });
    on('#t-layout', () => {
      S.focusLayout = !S.focusLayout;
      save();
      applyTheme();
      toast(S.focusLayout ? '♿ Focus layout on' : 'Focus layout off');
      home();
    });
    on('#reset', () => {
      const who = (activeMeta() && activeMeta().name) || 'this cadet';
      if (!confirm(`Erase progress, credits, and purchases for ${who}? Other profiles are not affected.`)) return;
      const keepName = S.name;
      S = defaults();
      S.name = keepName;
      save();
      home();
    });
  });
}


function petsScreen() {
  checkPetsUnlock();
  if (!petsUnlocked()) { toast('Complete the entire Basic Academy to unlock Pets'); resumeAmbient(); return home(); }
  const active = S.pets.active;
  const info = active ? petInfo(active) : null;
  const turns = gauntletTurnsLeft();
  const masters = masteredCount();
  let body = '';
  if (!active || !info) {
    body = `<h2>🐾 Choose your first companion</h2><p class="dim">Pick one of 10 space-elemental pets. It will grow as it eats crystals (Star Shards) and can join you on unique Gauntlet runs.</p>
    <div class="shopgrid">${PETS.map((p) => `<button class="shopitem" data-adopt="${p.id}"><span>${p.stages[0].icon}</span><b>${p.stages[0].name}</b><small>${p.element}</small></button>`).join('')}</div>`;
  } else {
    const next = info.stage < 3 ? PET_EVOLVE[info.stage] : null;
    const prog = next ? Math.min(100, Math.round(info.crystals / next * 100)) : 100;
    body = `<h2>${info.icon} ${info.name}</h2>
      <div class="card"><p>${info.desc}</p>
      <p class="dim">Element: ${info.element} · Stage ${info.stage + 1}/4 · Crystals eaten: ${info.crystals}</p>
      ${next ? `<div class="bar"><i style="width:${prog}%"></i></div><small class="dim">Next evolution at ${next} crystals</small>` : '<small class="dim">Fully evolved! ✨</small>'}
      </div>
      <button class="btn" id="feed">Feed 10 💎 crystals</button>
      <button class="btn sec" id="gaunt" ${turns <= 0 ? 'disabled' : ''}>Pet Gauntlet (${turns} turn${turns === 1 ? '' : 's'} left today · ${masters} mastered subjects)</button>
      <p class="dim">Gauntlet draws questions from all knowledge you have completed so far. One turn per mastered subject per day.</p>
      <div class="tier">Your pets</div>
      <div class="shopgrid">${S.pets.owned.map((id) => { const pi = petInfo(id); return `<button class="shopitem ${id === active ? 'eq' : ''}" data-set="${id}"><span>${pi.icon}</span><b>${pi.name}</b><small>${pi.element}</small></button>`; }).join('')}</div>
      <button class="btn sec" id="shopnew">Get a new pet (10,000 💰 in Shop)</button>`;
  }
  render(`${header(1, 'Home')}${body}<button class="btn sec" id="bk">Back</button>`, () => {
    on('[data-back]', home); on('#bk', home);
    on('[data-adopt]', (el) => {
      const id = el.dataset.adopt;
      if (!S.pets.owned.includes(id)) S.pets.owned.push(id);
      if (!S.pets.data[id]) S.pets.data[id] = { crystals: 0 };
      S.pets.active = id;
      save();
      toast(`Adopted ${petInfo(id).name}!`);
      petsScreen();
    });
    on('[data-set]', (el) => { S.pets.active = el.dataset.set; save(); petsScreen(); });
    on('#feed', () => {
      if (S.shards < 10) { alert('You need at least 10 Star Shards to feed crystals.'); resumeAmbient(); return; }
      S.shards -= 10;
      S.shardsSpent = (S.shardsSpent || 0) + 10;
      const d = S.pets.data[active] || { crystals: 0 };
      d.crystals = (d.crystals || 0) + 10;
      S.pets.data[active] = d;
      const oldSt = info.stage;
      save();
      const ni = petInfo(active);
      if (ni.stage > oldSt) toast(`✨ ${ni.name} evolved!`);
      else toast('Nom nom! +10 crystals');
      petsScreen();
    });
    on('#gaunt', () => { if (turns <= 0) return; petGauntlet(); });
    on('#shopnew', shop);
  });
}
function petGauntlet() {
  const turns = gauntletTurnsLeft();
  if (turns <= 0) { alert('No pet gauntlet turns left today. Master more subjects or come back tomorrow!'); resumeAmbient(); return petsScreen(); }
  // Collect questions from all courses that have any progress or are mastered
  const allQs = [];
  Object.keys(COURSES).forEach((lang) => {
    const c = COURSES[lang];
    if (!c || !c.levels) return;
    const p = prog(lang);
    c.levels.forEach((l) => {
      if (p.done && p.done[l.id] != null) {
        const qs = lvlMc(lang, l) || [];
        allQs.push(...qs);
      }
    });
  });
  if (allQs.length < 5) { alert('Complete more missions so your pet has knowledge to draw from!'); resumeAmbient(); return petsScreen(); }
  const qs = shuffle(allQs).slice(0, 8);
  const todayStr = today();
  if (S.pets.gauntlet.date !== todayStr) { S.pets.gauntlet = { date: todayStr, used: 0 }; }
  S.pets.gauntlet.used = (S.pets.gauntlet.used || 0) + 1;
  save();
  timed({ kind: '🐾 Pet Gauntlet', qs, secs: 20, lives: 3, back: petsScreen, done: (r) => {
    const reward = r.right * 5;
    if (reward) earn(reward);
    logEv('petgaunt', '', `Pet Gauntlet: ${r.right}/${r.total}`, reward);
    if (r.right > 0) touchStreak();
    checkAch();
    result({ big: r.won ? '🐾' : '💫', confetti: r.right === r.total, title: r.won ? 'Gauntlet cleared with your pet!' : 'Good practice!',
      text: `${r.right}/${r.total} correct. ${reward ? `+${reward} credits.` : ''} Your companion grew a little wiser.`, buttons: [['Back to Pets', petsScreen], ['Home', home]] });
  }});
}
function subjectHub(sid) {
  const sub = SUBJECTS[sid];
  if (!sub) return home();
  if (!schoolUnlocked(sid)) return home();
  const isAdvHub = sid === 'advanced';
  const cards = sub.modules.map((id) => {
    const c = COURSES[id]; if (!c) return '';
    if (isAdvHub) {
      const a = ADVANCED[id], unlocked = advancedUnlocked(id), ready = prereqMet(id);
      const done = Object.keys(prog(id).done).length, total = c.levels.length, mastered = bonusOf(id).badge;
      if (!unlocked) {
        const label = !ready ? `🔒 Requires: ${a.prereqLabel}` : `🔓 Unlock for ${a.cost} 💎 (you have ${S.shards})`;
        return `<button class="lang ${ready ? '' : 'locked'}" style="--c1:${c.c1};--c2:${c.c2}" data-unlock="${id}"><span class="ic">${ready ? c.icon : '🔒'}</span><span style="flex:1"><b>${c.name}</b><span class="dim">${c.tagline}</span><small class="dim">${label}</small></span></button>`;
      }
      return `<button class="lang" style="--c1:${c.c1};--c2:${c.c2}" data-lang="${id}"><span class="ic">${c.icon}</span><span style="flex:1"><b>${c.name}${mastered ? ' 🏅' : ''}</b><span class="dim">${c.tagline}</span><div class="bar"><i style="width:${total ? done / total * 100 : 0}%"></i></div><small class="dim">${done}/${total} missions${mastered ? ' · Gauntlet unlocked' : ''} · Unlocked</small></span></button>`;
    }
    const done = Object.keys(prog(id).done).length, total = c.levels.length, mastered = bonusOf(id).badge;
    const subjectName = courseDisplayName(id), unlocked = courseUnlocked(id);
    const path = SUBJECT_PATHS.find((p) => p.includes(id));
    const previous = path && path.indexOf(id) > 0 ? path[path.indexOf(id) - 1] : null;
    const lockText = previous ? `🔒 Earn 3 stars on every mission in ${COURSES[previous].name} first` : '🔒 Complete the prerequisite course first';
    return `<button class="lang ${unlocked ? '' : 'locked'}" style="--c1:${c.c1};--c2:${c.c2}" data-lang="${id}" data-course-locked="${unlocked ? '0' : '1'}"><span class="ic">${unlocked ? c.icon : '🔒'}</span><span style="flex:1"><b>${subjectName}${mastered ? ' 🏅' : ''}</b><span class="dim">${c.tagline}</span><div class="bar"><i style="width:${total ? done / total * 100 : 0}%"></i></div><small class="dim">${unlocked ? `${done}/${total} missions${mastered ? ' · Master badge earned · Gauntlet unlocked' : ' · Mastery Trial and Gauntlet ahead'}` : lockText}</small></span></button>`;
  }).join('');
  const blurb = isAdvHub ? `Advanced Academy courses each cost Star Shards to unlock. You have ${S.shards} 💎.` : `${sub.blurb} Each subject keeps its own missions, Mastery Trial, Endless Gauntlet, and any subject-specific Time Attacks.`;
  render(`${header(1, 'Home')}<h2>${sub.icon} ${sub.name}</h2><p class="dim">${blurb}</p>${isAdvHub ? `<p class="dim">Star Shards: <b>${S.shards}</b> 💎</p>` : `<p class="dim">Each subject progresses independently. Earn 3 stars on every mission in a course to unlock that subject's next academy level. Mastery Trials still unlock each course's Endless Gauntlet; available Time Attacks remain on their course maps.</p>`}<div class="tier">${isAdvHub ? 'Advanced Courses' : 'Subjects'}</div>${cards}`, () => {
    on('[data-back]', home);
    on('[data-lang]', (el) => { if (el.dataset.courseLocked === '1' || !courseUnlocked(el.dataset.lang)) { const path = SUBJECT_PATHS.find((p) => p.includes(el.dataset.lang)); const i = path ? path.indexOf(el.dataset.lang) : -1; const prev = i > 0 ? path[i - 1] : null; toast(prev ? `Complete every mission in ${COURSES[prev].name} with 3 stars to unlock this course.` : 'Complete the prerequisite course to unlock this course.'); resumeAmbient(); return; } map(el.dataset.lang); });
    on('[data-unlock]', (el) => advancedGate(el.dataset.unlock));
  });
}

function advancedAcademyGate() {
  if (S.advancedAcademyUnlocked) return subjectHub('advanced');
  if (!allFoundationSchoolsGraduated()) {
    alert("Complete every available foundation course with 3 stars on every mission and earn each course's Master badge first.");
    return home();
  }
  if (S.shards < ADVANCED_ACADEMY_COST) {
    alert(`Advanced Academy costs ${ADVANCED_ACADEMY_COST} 💎 Star Shards to unlock. You have ${S.shards} 💎. Earn shards in Endless Gauntlets.`);
    return home();
  }
  if (!confirm(`Unlock Advanced Academy for ${ADVANCED_ACADEMY_COST} 💎 Star Shards? Each advanced course will then have its own additional unlock cost.`)) return home();
  S.shards -= ADVANCED_ACADEMY_COST;
  S.shardsSpent = (S.shardsSpent || 0) + ADVANCED_ACADEMY_COST;
  S.advancedAcademyUnlocked = true;
  logEv('shop', 'advanced', 'Unlocked Advanced Academy', 0, -ADVANCED_ACADEMY_COST);
  save(); toast('🌌 Advanced Academy unlocked!'); subjectHub('advanced');
}

function tryUnlockAdvanced(lang) {
  const a = ADVANCED[lang], c = COURSES[lang];
  if (!a || !c) return;
  if (!S.advancedAcademyUnlocked) return advancedAcademyGate();
  if (advancedUnlocked(lang)) return map(lang);
  if (!prereqMet(lang)) {
    alert(`Master all required foundations first:\n${a.prereqLabel}\n\nEarn a Master badge on each listed band by completing its missions and Mastery Trial.`);
    return;
  }
  if (S.shards < a.cost) {
    alert(`You need ${a.cost} 💎 Star Shards to unlock ${c.name}.\nYou have ${S.shards} 💎.\n\nEarn Star Shards by surviving rounds in any Endless Gauntlet (after earning that band's Master badge).`);
    return;
  }
  if (!confirm(`Unlock ${c.name} for ${a.cost} 💎 Star Shards?\n\nRequires: ${a.prereqLabel}\nYou have ${S.shards} 💎.`)) return;
  S.shards -= a.cost;
  S.shardsSpent = (S.shardsSpent || 0) + a.cost;
  if (!S.advanced) S.advanced = {};
  S.advanced[lang] = true;
  logEv('shop', lang, `Unlocked advanced course: ${c.name}`, 0, -a.cost);
  toast(`${c.icon} ${c.name} unlocked!`);
  save();
  subjectHub('advanced');
}

// ---------- map ----------
function map(lang) {
  if (!COURSES[lang]) return home();
  if (!isAdvanced(lang) && !courseUnlocked(lang)) { alert('This course is locked. Earn 3 stars on every mission in its prerequisite course first.'); return subjectHub(subjectOf(lang) || 'basic'); }
  const previewOnly = isAdvanced(lang) && !advancedUnlocked(lang) && !!(S.advancedPreview && S.advancedPreview[lang]);
  if (isAdvanced(lang) && !advancedUnlocked(lang) && !previewOnly) {
    return advancedGate(lang);
  }
  const c = COURSES[lang], p = prog(lang), b = bonusOf(lang);
  const firstOpen = c.levels.findIndex((l) => !p.done[l.id]);
  const tiers = c.levels.map((l) => l.tier).filter((t, i, a) => a.indexOf(t) === i);
  let html = '';
  c.levels.forEach((l, i) => {
    const prev = c.levels[i - 1], next = c.levels[i + 1];
    const done = p.done[l.id] != null, locked = (previewOnly && i > 0) || (i > 0 && !p.done[prev.id] && !done);
    if (!prev || prev.tier !== l.tier) html += `<div class="tier">${l.tier}</div>`;
    html += `<button class="lvl ${done ? 'done' : ''} ${locked ? 'locked' : ''} ${i === firstOpen ? 'current' : ''}" style="--pc:${l.color}" data-i="${i}">
      <span class="planet">${locked ? '🔒' : l.planet}</span><span style="flex:1"><b>${l.title}</b><br><span class="dim">${l.company}</span><br><small class="dim">${l.blurb}</small></span>
      <span class="stars">${done ? '★'.repeat(p.done[l.id]) + '☆'.repeat(3 - p.done[l.id]) : ''}</span></button>`;
    if (!next || next.tier !== l.tier) html += bossCard(lang, l.tier, tiers.indexOf(l.tier));
  });
  const sid = subjectOf(lang);
  const backLabel = sid ? SUBJECTS[sid].name : 'Home';
  const previewBanner = previewOnly ? `<div class="card story"><b>🔭 Preview mode</b><br><span class="dim">Only the first mission is open. Unlock the full course for ${ADVANCED[lang] ? ADVANCED[lang].cost : '—'} 💎 to access every mission, the Mastery Trial, and the Endless Gauntlet.</span><br><button class="btn" id="adv-buy" style="margin-top:10px">Unlock full course</button></div>` : '';
  render(`${header(1, backLabel)}<h2>${c.icon} ${courseDisplayName(lang)}</h2>${previewBanner}${b.badge ? `<div class="badge">🏅 Master of ${c.name}</div>` : ''}${html}${previewOnly ? '' : bonusCard(lang)}${previewOnly ? '' : extrasCards(lang)}`, () => {
    on('[data-back]', () => (sid ? subjectHub(sid) : home()));
    on('#bonus', () => bonusGate(lang));
    on('#adv-buy', () => tryUnlockAdvanced(lang));
    on('[data-boss]', (el) => bossStart(lang, +el.dataset.boss, tiers));
    on('#cert', () => certificate(lang));
    on('#gaunt', () => { if (!bonusOf(lang).badge) { alert('Earn the Master badge (pass the Mastery Trial) to unlock the Endless Gauntlet.'); return; } gauntletIntro(lang); });
    on('[data-ta]', (el) => {
      const modeId = el.dataset.ta;
      const mode = taMode(modeId);
      if (!mode) return;
      if (!taIsUnlocked(modeId) && !taModeReady(mode)) {
        alert(mode.lockAlert || mode.lockHint);
        return;
      }
      timeAttackIntro(lang, modeId);
    });
    on('#cap', () => capstone(lang));
    on('[data-i]', (el) => { if (!el.classList.contains('locked')) lesson(lang, +el.dataset.i); });
  });
}

// ---------- boss battles ----------
function bossCard(lang, tier, ti) {
  const key = `${lang}|${tier}`, ready = COURSES[lang].levels.filter((l) => l.tier === tier).every((l) => prog(lang).done[l.id] != null);
  const name = X.bosses[ti % X.bosses.length];
  const sub = !ready ? 'Finish this tier to face the boss' : S.bosses[key] ? `Defeated! Replay for +10 💰` : `${BOSS_LIVES} hearts · ${BOSS_Q} questions · +${BOSS_REWARD} 💰`;
  return `<button class="lvl boss ${ready ? '' : 'locked'}" style="--pc:#ff5f8d" data-boss="${ti}"><span class="planet">${S.bosses[key] ? '🏆' : ready ? '👾' : '🔒'}</span>
    <span style="flex:1"><b>Boss: ${name}</b><br><small class="dim">${sub}</small></span></button>`;
}

function bossStart(lang, ti, tiers) {
  const tier = tiers[ti], key = `${lang}|${tier}`, lv = COURSES[lang].levels.filter((l) => l.tier === tier);
  if (!lv.every((l) => prog(lang).done[l.id] != null)) { alert('Finish every mission in this tier first.'); return; }
  const qs = shuffle(lv.flatMap((l) => lvlMc(lang, l))).slice(0, BOSS_Q);
  const name = X.bosses[ti % X.bosses.length];
  timed({ kind: `Boss: ${name}`, qs, secs: BOSS_SECS, lives: BOSS_LIVES, back: () => map(lang), done: (r) => {
    let reward = 0;
    if (r.won) { reward = S.bosses[key] ? 10 : BOSS_REWARD; earn(reward, lang); logEv('boss', lang, `Boss defeated: ${name} (${r.right}/${r.total} correct)`, reward); S.bosses[key] = true; touchStreak(); }
    checkAch();
    result({ big: r.won ? '🏆' : '💥', confetti: r.won, title: r.won ? `${name} defeated!` : `${name} wins this round`,
      text: r.won ? `You survived with ${r.right}/${r.total} correct. +${reward} credits.` : 'Your ship ran out of hearts. Review the missions and strike back!',
      buttons: [r.won ? ['Back to map', () => map(lang)] : ['Rematch', () => bossStart(lang, ti, tiers)], ...(r.won ? [] : [['Back to map', () => map(lang), 1]])] });
  } });
}

// ---------- bonus: Mastery Trial ----------
const allDone = (lang) => COURSES[lang].levels.every((l) => prog(lang).done[l.id] != null);

function bonusCard(lang) {
  const c = COURSES[lang], b = bonusOf(lang), all = allDone(lang);
  let sub, tag;
  if (!all) { sub = 'Finish every mission to unlock the shop'; tag = '🔒'; }
  else if (!b.bought) { sub = `Buy with ${BONUS_COST} 💰 credits`; tag = '🛒'; }
  else if (b.badge) { sub = 'Badge earned! Replay anytime'; tag = '🏅'; }
  else { sub = `${TRIAL_Q} timed questions. Score 100% for the badge`; tag = '⏱️'; }
  return `<div class="tier">Bonus · Mastery Trial</div><button class="lvl bonus ${all ? '' : 'locked'}" style="--pc:#ffc857" id="bonus">
    <span class="planet">${tag}</span><span style="flex:1"><b>Master of ${c.name} Trial</b><br><small class="dim">${sub}</small></span></button>`;
}

function extrasCards(lang) {
  const b = bonusOf(lang), cap = X.capstones[lang];
  let h = '';
  if (b.badge) h += `<button class="lvl" style="--pc:#ffc857" id="cert"><span class="planet">📜</span><span style="flex:1"><b>Your certificate</b><br><small class="dim">Download or screenshot to share</small></span></button>`;
  // Time Attack modes relevant to this math school
  if (TA_BY_SCHOOL[lang]) {
    taSyncUnlocksFromProgress();
    h += `<div class="tier">Bonus · Time Attack</div>`;
    TA_BY_SCHOOL[lang].forEach((mode) => {
      const open = taIsUnlocked(mode.id) || taModeReady(mode);
      const best = taBestLine(mode.id);
      h += `<button class="lvl bonus ${open ? '' : 'locked'}" style="--pc:${mode.color}" id="ta-${mode.id}" data-ta="${mode.id}" ${open ? '' : 'disabled'}>
        <span class="planet">${open ? mode.icon : '🔒'}</span>
        <span style="flex:1"><b>${mode.label}</b><br><small class="dim">${open ? best : mode.lockHint}</small></span>
      </button>`;
    });
  }
  if (SURV[lang]) {
    const sv = S.survival[lang] || { best: 0 };
    h += `<div class="tier">Final challenge · Endless Gauntlet</div><button class="lvl bonus ${b.badge ? '' : 'locked'}" style="--pc:#ff5f8d" id="gaunt"><span class="planet">${b.badge ? '🔥' : '🔒'}</span><span style="flex:1"><b>The ${COURSES[lang].name} Endless Gauntlet</b><br><small class="dim">${b.badge ? `Survival mode: gets harder every round. Best: ${sv.best} · earn 💎 Star Shards` : 'Earn the Master badge to unlock'}</small></span></button>`;
  }
  if (cap && allDone(lang)) {
    const st = (S.capstone[lang] || []).filter(Boolean).length;
    h += `<button class="lvl" style="--pc:#35f0c0" id="cap"><span class="planet">${S.capstoneDone[lang] ? '🎓' : '🏗️'}</span><span style="flex:1"><b>Capstone project</b><br><small class="dim">${esc(cap.title)}<br>${st}/${cap.steps.length} steps · +${CAPSTONE_REWARD} 💰</small></span></button>`;
  }
  return h;
}

function bonusGate(lang) {
  const b = bonusOf(lang);
  if (!allDone(lang)) { alert('Complete every mission in this band to unlock the Mastery Trial.'); return; }
  if (!b.bought) {
    if (bal() < BONUS_COST) { alert(`You need ${BONUS_COST - bal()} more credits (you have ${bal()}). Replay missions, bosses and daily challenges to earn more.`); return; }
    if (!confirm(`Spend ${BONUS_COST} credits to unlock the ${COURSES[lang].name} Mastery Trial?`)) return;
    S.spent += BONUS_COST; b.bought = true; logEv('shop', lang, `Unlocked the ${COURSES[lang].name} Mastery Trial`, -BONUS_COST); save();
  }
  trialIntro(lang);
}

function trialIntro(lang) {
  const c = COURSES[lang], b = bonusOf(lang);
  render(`${header(1, 'Map')}<div class="big">${b.badge ? '🏅' : '⏱️'}</div><h2 class="center">Master of ${c.name} Trial</h2>
    <div class="card"><ul>
      <li><b>${TRIAL_Q} questions</b> drawn from everything you learned</li>
      <li><b>${TRIAL_SECS} seconds</b> per question; a timeout counts as wrong</li>
      <li><b>One mistake ends the run.</b> Score 100% to win the badge and +${BONUS_REWARD} credits</li>
      <li>Retries are free</li></ul></div>
    <button class="btn" id="go">Start the clock</button>`, () => {
    on('[data-back]', () => map(lang));
    on('#go', () => trial(lang));
  });
}

function trial(lang) {
  const c = COURSES[lang];
  const qs = shuffle(c.levels.flatMap((l) => lvlMc(lang, l))).slice(0, TRIAL_Q);
  timed({ kind: 'Mastery Trial', qs, secs: TRIAL_SECS, lives: 1, back: () => map(lang), done: (r) => {
    const b = bonusOf(lang), first = r.won && !b.badge;
    if (r.won) { if (first) earn(BONUS_REWARD, lang); logEv('trial', lang, `Mastery Trial passed in ${Math.round(r.secs)}s${first ? ' (badge earned)' : ''}`, first ? BONUS_REWARD : 0); b.badge = true; if (r.secs < 120) S.stats.speedTrial = true; touchStreak(); }
    checkAch();
    result({ big: r.won ? '🏅' : '💥', confetti: r.won, title: r.won ? `Master of ${c.name}!` : 'So close!',
      text: r.won ? `Perfect score: ${r.right}/${r.total} in ${Math.round(r.secs)}s.${first ? ` You earned the badge and +${BONUS_REWARD} credits.` : ' Badge already yours.'}` : `You got ${r.right} right before the mistake. The trial needs a perfect run.`,
      buttons: r.won ? [['📜 See my certificate', () => certificate(lang)], ['Back to map', () => map(lang), 1]] : [['Try again (free)', () => trial(lang)], ['Back to map', () => map(lang), 1]] });
  } });
}

// ---------- daily challenge, extra practice rounds, review ----------
function dailyStart() {
  const pool = mcPoolDone();
  if (!pool.length) { alert('Complete at least one mission first. Daily challenges use what you have learned.'); return; }
  if (S.daily && S.daily.date === today()) { alert('You already did today\'s challenge. Come back tomorrow!'); return; }
  const q = pool[hash(today()) % pool.length];
  timed({ kind: '📅 Daily Challenge', qs: [q], secs: 20, lives: 1, back: home, done: (r) => {
    S.daily = { date: today() }; touchStreak();
    if (r.won) { earn(DAILY_REWARD); S.dailyCount++; }
    logEv('daily', '', r.won ? 'Daily challenge solved' : 'Daily challenge attempted', r.won ? DAILY_REWARD : 0);
    checkAch();
    result({ big: r.won ? '🌟' : '🌙', confetti: r.won, title: r.won ? 'Daily complete!' : 'Not today',
      text: r.won ? `+${DAILY_REWARD} credits. Streak: ${S.streak} day${S.streak > 1 ? 's' : ''}.` : `Streak: ${S.streak}. Come back tomorrow for a fresh one.`, buttons: [['Back home', home]] });
  } });
}

function requestStart() {
  const lv = doneLevels().filter(({ lang, l }) => lvlMc(lang, l).length >= 2);
  if (!lv.length) { alert('Complete at least one mission first. Bonus practice unlocks after your first completed mission.'); return; }
  // Adaptive: prefer missions with more weak/miss marks
  const weak = S.weak || {};
  const scored = lv.map(({ lang, l }) => {
    let w = 0;
    lvlMc(lang, l).forEach((q) => { w += weak[q.id] || 0; });
    return { lang, l, w };
  });
  scored.sort((a, b) => b.w - a.w || Math.random() - 0.5);
  const pickLv = scored[0].w > 0 && Math.random() < 0.7 ? scored[0] : pick(lv);
  const { lang, l } = pickLv;
  let qs = shuffle(lvlMc(lang, l));
  // Put weaker items first when possible
  qs.sort((a, b) => (weak[b.id] || 0) - (weak[a.id] || 0));
  qs = qs.slice(0, 3);
  qs = shuffle(qs);
  const paid = (S.req.date === today() ? S.req.n : 0) < REQ_DAILY_CAP;
  const adaptiveNote = scored[0] && scored[0].w > 0 ? ' Adaptive mix: includes skills you have missed before.' : '';
  render(`${header(1, 'Home')}<div class="big">📨</div><h2 class="center">Extra practice challenge</h2>
    <div class="card story"><b>${l.company}</b> says:<br><i>"Ready for a bonus round? Answer ${qs.length} questions to strengthen your skills."</i>${adaptiveNote ? `<br><small class="dim">${adaptiveNote}</small>` : ''}</div>
    <p class="center dim">${qs.length} questions · 25s each · ${paid ? `${REQ_PER_Q} credits per correct answer (up to ${qs.length * REQ_PER_Q})` : 'no more paid requests today (still great practice!)'}</p>
    <button class="btn" id="go">Take the call</button>`, () => {
    on('[data-back]', home);
    on('#go', () => timed({ kind: `📨 ${l.company}`, qs, secs: 25, lives: Infinity, back: home, done: (r) => {
      if (S.req.date !== today()) S.req = { date: today(), n: 0 };
      let got = 0;
      if (S.req.n < REQ_DAILY_CAP) { got = r.right * REQ_PER_Q; earn(got); S.req.n++; if (r.right === r.total) S.stats.requests++; }
      logEv('request', lang, `Extra practice for ${l.company}: ${r.right}/${r.total} correct`, got);
      if (r.right > 0) touchStreak();
      checkAch();
      const perfect = r.right === r.total;
      result({ big: perfect ? '🤝' : r.right ? '🛠️' : '📉', confetti: perfect, title: perfect ? 'Practice complete!' : r.right ? 'Partly fixed' : 'Keep practicing!',
        text: `${r.right}/${r.total} correct. ` + (got ? `You earned ${got} credits (${REQ_PER_Q} per correct answer).` : S.req.n >= REQ_DAILY_CAP && r.right ? 'No more paid requests today, but great practice!' : 'No credits this time. Review the mission and try another request.'), buttons: [['Back home', home]] });
    } }));
  });
}

function reviewStart() {
  const due = dueReview();
  if (!due.length) { alert(S.review.length ? 'Nothing due today. Spaced review brings old questions back at the right time.' : 'Nothing to review yet. Questions you miss come back here automatically.'); return; }
  const qs = shuffle(due.map((r) => getQ(r.id)));
  timed({ kind: '🔁 Spaced Review', qs, secs: 0, lives: Infinity, back: home,
    onAnswer: (q, ok) => {
      const e = S.review.find((r) => r.id === q.id); if (!e) return;
      if (ok) { earn(5); e.stage++; if (e.stage >= REVIEW_STEPS.length) S.review = S.review.filter((r) => r !== e); else e.due = addDays(REVIEW_STEPS[e.stage]); }
      else { e.stage = 0; e.due = addDays(1); }
      save();
    },
    done: (r) => { logEv('review', '', `Spaced review: ${r.right}/${r.total} correct`, r.right * 5); touchStreak(); checkAch(); result({ big: '🧠', confetti: r.right === r.total, title: 'Review done', text: `${r.right}/${r.total} correct. Missed questions come back tomorrow; mastered ones come back less often.`, buttons: [['Back home', home]] }); } });
}

// ---------- HQ, shop, achievements ----------
function hq() {
  const prods = doneLevels().map((d) => ({ icon: d.l.icon, name: d.l.mission }));
  const blds = X.shop.filter((i) => i.kind === 'building' && S.owned[i.id]).map((i) => ({ icon: i.icon, name: i.name }));
  const towers = Object.keys(COURSES).filter((id) => bonusOf(id).badge).map((id) => ({ icon: '🗼', name: `Master of ${COURSES[id].name} Tower` }));
  const labs = Object.keys(S.capstoneDone).filter((id) => COURSES[id]).map((id) => ({ icon: '🎓', name: `${COURSES[id].name} Capstone Lab` }));
  const hall = Object.keys(S.bosses).length ? [{ icon: '🏆', name: `Trophy Hall (${Object.keys(S.bosses).length})` }] : [];
  const plots = [].concat(towers, labs, hall, blds, prods);
  render(`${header(1, 'Home')}<div class="hqhead"><span class="logo">${logoIcon()}</span><div><h2>${esc(companyName())}</h2><span class="dim">${rank()} · ${shipIcon()} docked</span></div></div>
    <div class="row"><button class="btn sec" id="rn">✏️ Rename academy</button><button class="btn sec" id="lg">🔄 Change logo</button></div>
    <div class="tier">Your space station</div>
    ${plots.length ? `<div class="station">${plots.map((p) => `<div class="plot"><span>${p.icon}</span><small>${esc(p.name)}</small></div>`).join('')}</div>` : '<div class="card dim">Your station is empty. Ship missions, win badges and buy buildings to grow it.</div>'}
    <button class="btn" id="tr">📜 Transcript: my full record</button>
    <button class="btn sec" id="sh">🛒 Visit the shop</button>`, () => {
    on('[data-back]', home);
    on('#sh', shop);
    on('#tr', transcript);
    on('#rn', () => { const n = prompt('Name your academy:', S.company || ''); if (n !== null) { S.company = n.trim().slice(0, 24); save(); hq(); } });
    on('#lg', () => {
      const logos = X.shop.filter((i) => i.kind === 'logo' && hasItem(i)), cur = logos.findIndex((i) => i.id === S.equipped.logo);
      S.equipped.logo = logos[(cur + 1) % logos.length].id; save(); hq();
    });
  });
}

function shop() {
  const kinds = [['ship', 'Ships'], ['theme', 'Color themes'], ['logo', 'Academy badges'], ['building', 'HQ buildings']];
  const studio = [['skin', '🎨 Color skins'], ['font', '🔤 Fonts'], ['shape', '◻️ Corner shapes'], ['fx', '✨ Effects (tap to switch on/off)'], ['accent', '🌈 Accent color studio']];
  const price = (i) => `${i.cost} ${i.cur === 'shards' ? '💎' : '💰'}`;
  const tile = (i) => {
    const owned = hasItem(i), k = i.kind, tail = idTail(i.id, '');
    const eq = k === 'fx' ? !!S.fx[tail] && owned : k === 'accent' ? owned : S.equipped[k] === i.id;
    const label = !owned ? price(i) : k === 'building' ? 'Built' : k === 'fx' ? (S.fx[tail] ? 'ON' : 'OFF') : k === 'accent' ? 'Unlocked' : eq ? 'Equipped' : 'Tap to equip';
    return `<button class="shopitem ${eq ? 'eq' : ''} ${i.cur === 'shards' ? 'prem' : ''}" data-id="${i.id}"><span>${i.icon}</span><b>${i.name}</b><small>${label}</small></button>`;
  };
  const swatches = S.owned['accent-studio'] ? `<div class="swatches"><button class="sw auto" data-acc="">Auto</button>${X.accents.map((c) => `<button class="sw ${S.accent === c ? 'on' : ''}" style="background:${c}" data-acc="${c}" aria-label="Accent ${c}"></button>`).join('')}</div>` : '';
  const petShop = petsUnlocked() ? `<div class="tier">Pets</div><div class="shopgrid"><button class="shopitem" id="newpet"><span>🐾</span><b>New Pet</b><small>10,000 💰</small></button></div>` : '';
  render(`${header(1, 'Home')}<h2>🛒 Galactic Shop</h2><p class="dim">You have <b>${bal()}</b> 💰 credits. Earn more from missions, boss battles, daily challenges, and extra practice.</p>
    ${petShop}
    ${kinds.map(([k, label]) => `<div class="tier">${label}</div><div class="shopgrid">${X.shop.filter((i) => i.kind === k).map(tile).join('')}</div>`).join('')}
    <div class="studiohead"><h2>💎 UI Studio</h2><p class="dim">Premium looks for the whole app. Paid in <b>Star Shards</b>, which are earned only in the Endless Gauntlet. You have <b>${S.shards}</b> 💎.</p></div>
    ${studio.map(([k, label]) => `<div class="tier">${label}</div><div class="shopgrid">${X.shop.filter((i) => i.kind === k).map(tile).join('')}</div>${k === 'accent' ? swatches : ''}`).join('')}`, () => {
    on('[data-back]', home);
    on('#newpet', () => {
      if (!petsUnlocked()) return;
      if (bal() < 10000) { alert('You need 10,000 credits for a new pet.'); resumeAmbient(); return; }
      const available = PETS.filter((p) => !S.pets.owned.includes(p.id));
      if (!available.length) { alert('You already own all 10 pets!'); resumeAmbient(); return; }
      // Simple: pick a random one for now, or show picker
      const pick = available[Math.floor(Math.random() * available.length)];
      if (!confirm(`Spend 10,000 credits to adopt a random new pet? (You have ${available.length} unique pets left)`)) return;
      S.spent += 10000;
      if (!S.pets.owned.includes(pick.id)) S.pets.owned.push(pick.id);
      if (!S.pets.data[pick.id]) S.pets.data[pick.id] = { crystals: 0 };
      if (!S.pets.active) S.pets.active = pick.id;
      save();
      toast(`Adopted ${pick.stages[0].name}!`);
      shop();
    });
    on('[data-acc]', (el) => { S.accent = el.dataset.acc; save(); applyTheme(); shop(); });
    on('[data-id]', (el) => {
      const it = item(el.dataset.id), tail = idTail(it.id, ''), shards = it.cur === 'shards';
      let justBought = false;
      if (!hasItem(it)) {
        const have = shards ? S.shards : bal();
        if (have < it.cost) { alert(`You need ${it.cost - have} more ${shards ? 'Star Shards. Earn them by surviving rounds in the Endless Gauntlet (unlocked by the Master badge).' : 'credits.'}`); return; }
        if (!confirm(`Buy ${it.name} for ${it.cost} ${shards ? 'Star Shards' : 'credits'}?`)) return;
        if (shards) { S.shards -= it.cost; S.shardsSpent += it.cost; } else S.spent += it.cost;
        logEv('shop', '', `Bought ${it.name}`, shards ? 0 : -it.cost, shards ? -it.cost : 0);
        S.owned[it.id] = true; justBought = true; toast(`${it.icon} ${it.name} unlocked!`);
      }
      if (it.kind === 'fx') S.fx[tail] = justBought ? true : !S.fx[tail];
      else if (it.kind === 'accent') { if (justBought) S.accent = X.accents[0]; }
      else if (it.kind !== 'building') S.equipped[it.kind] = it.id;
      save(); applyTheme(); checkAch(); shop();
    });
  });
}

function achievements() {
  render(`${header(1, 'Home')}<h2>🏆 Achievements</h2>
    ${X.ach.map((a) => `<div class="card ach ${S.ach[a.id] ? 'got' : ''}"><span>${S.ach[a.id] ? a.icon : '🔒'}</span><div><b>${a.name}</b><br><small class="dim">${a.desc}</small></div></div>`).join('')}`, () => on('[data-back]', home));
}

// ---------- one question of any type (used by the Endless Gauntlet) ----------
function qWidget(q) {
  const opts = q.type === 'mc' ? shuffle(q.options.map((t, i) => ({ t, i }))) : null;
  const bank = q.type === 'build' ? shuffle(q.tokens.map((t, i) => ({ t, i }))) : null;
  const html = (opts ? opts.map((o, n) => `<button class="opt ${q.textOpts ? 'text' : ''}" data-n="${n}">${esc(o.t)}</button>`).join('') : '')
    + (q.type === 'fill' ? '<input class="ans" id="ans" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type your answer">' : '')
    + (bank ? `<div class="slot" id="slot"><span class="dim">tap pieces below</span></div><div class="bank" id="bank">${bank.map((b, n) => `<button class="tok" data-n="${n}">${esc(b.t)}</button>`).join('')}</div>` : '');
  function bind(cb) {
    let sel = null, picked = [], locked = false;
    const input = $app.querySelector('#ans');
    if (opts) on('.opt', (el) => {
      if (locked) return;
      $app.querySelectorAll('.opt').forEach((o) => o.classList.remove('sel')); el.classList.add('sel'); sel = +el.dataset.n;
      cb.change(true); if (cb.autoMc) cb.submit();
    });
    if (input) { input.focus(); input.addEventListener('input', () => cb.change(!!input.value.trim())); input.addEventListener('keydown', (e) => { if (e.key === 'Enter') cb.submit(); }); }
    if (bank) {
      const slot = $app.querySelector('#slot');
      const draw = () => {
        slot.innerHTML = picked.length ? picked.map((n) => `<button class="tok on" data-n="${n}">${esc(bank[n].t)}</button>`).join('') : '<span class="dim">tap pieces below</span>';
        $app.querySelectorAll('#bank .tok').forEach((b) => b.classList.toggle('used', picked.includes(+b.dataset.n)));
        slot.querySelectorAll('.tok').forEach((b) => b.addEventListener('click', () => { if (locked) return; picked = picked.filter((n) => n !== +b.dataset.n); draw(); }));
        cb.change(picked.length > 0);
      };
      $app.querySelectorAll('#bank .tok').forEach((b) => b.addEventListener('click', () => { if (locked || picked.includes(+b.dataset.n)) return; picked.push(+b.dataset.n); draw(); }));
    }
    return {
      lock() { locked = true; if (input) input.disabled = true; },
      answer(timedOut) {
        let ok = false, shown = '', given = '';
        if (q.type === 'mc') {
          // each shuffled option is { t: text, i: its position in q.options }
          ok = !timedOut && sel !== null && opts[sel].i === q.answer;
          $app.querySelectorAll('.opt').forEach((el, n) => { if (opts[n].i === q.answer) el.classList.add('right'); else if (n === sel) el.classList.add('wrong'); });
          shown = `<code>${esc(q.options[q.answer])}</code>`;
          given = sel !== null ? opts[sel].t : '';
        } else if (q.type === 'build') {
          given = picked.map((n) => bank[n].t).join(' ');
          ok = !timedOut && given === q.tokens.join(' ');
          shown = `<code>${esc(q.tokens.join(' '))}</code>`;
        } else {
          if (!timedOut && !input.value.trim()) return null;
          given = input.value;
          // Gauntlet answers ignore capitalization and a trailing semicolon
          ok = !timedOut && q.answers.some((a) => eqAns(Object.assign({}, q, { ci: true }), a, input.value));
          shown = `<code>${esc(q.answers[0])}</code>`;
        }
        return { ok, shown, given };
      }
    };
  }
  return { html, bind };
}

// ---------- the Endless Gauntlet (final challenge: survival mode) ----------



// ---------- Time Attack (per-school speed runs · no rewards) ----------
const TA_MINS = [2, 3, 5];
/** Modes keyed by school — unlock after the listed missions in that school are complete */
const TA_MODES = [
  // Basic School
  { id: 'add', school: 'math_basic', label: '+ / − Speed Run', icon: '⏱️', color: '#4de1ff',
    need: ['ma1', 'ma2'], lockHint: 'Complete Addition + Subtraction to unlock',
    lockAlert: 'Complete the Addition and Subtraction missions to unlock the + / − Speed Run.',
    blurb: 'Addition and subtraction facts — as many as you can before time runs out.' },
  { id: 'mul', school: 'math_basic', label: '× / ÷ Speed Run', icon: '⚡', color: '#ff8a3d',
    need: ['ma3', 'ma4'], lockHint: 'Complete Multiplication + Division to unlock',
    lockAlert: 'Complete the Multiplication and Division missions to unlock the × / ÷ Speed Run.',
    blurb: 'Multiplication and division facts against the clock.' },
  // Intermediate School
  { id: 'frac', school: 'math_intermediate', label: 'Fractions & Decimals Blitz', icon: '½', color: '#f4a261',
    need: ['ma5', 'ma6'], lockHint: 'Complete Fractions + Decimals to unlock',
    lockAlert: 'Complete the Fraction Fields and Decimal Dock missions to unlock this Time Attack.',
    blurb: 'Quick fraction of a number, decimal place value, and simple decimal arithmetic.' },
  { id: 'pct', school: 'math_intermediate', label: 'Percents & Life Math', icon: '％', color: '#e76f51',
    need: ['ma7-life', 'ma7'], lockHint: 'Complete Money & Measurement + Percents to unlock',
    lockAlert: 'Complete Money, Time & Measurement and Percent Planet to unlock this Time Attack.',
    blurb: 'Percents of numbers, simple discounts, and everyday money/time checks.' },
  // Middle School
  { id: 'order', school: 'math_middle', label: 'Order of Operations Blitz', icon: '🧮', color: '#8b6cff',
    need: ['ma9'], lockHint: 'Complete Order of Operations to unlock',
    lockAlert: 'Complete the Order of Operations mission to unlock this Time Attack.',
    blurb: 'PEMDAS warm-ups — evaluate short expressions quickly and carefully.' },
  { id: 'eq1', school: 'math_middle', label: 'One-Step Equations', icon: '🟰', color: '#c084fc',
    need: ['ma10'], lockHint: 'Complete One-Step Equations to unlock',
    lockAlert: 'Complete the Solve One-Step Equations mission to unlock this Time Attack.',
    blurb: 'Solve one-step equations for x as fast as you can.' },
  // High School
  { id: 'eq2', school: 'math_high', label: 'Two-Step Equations', icon: '📐', color: '#ff5f8d',
    need: ['ma11'], lockHint: 'Complete Two-Step Equations to unlock',
    lockAlert: 'Complete the Two-Step Equations mission to unlock this Time Attack.',
    blurb: 'Two-step algebra equations — isolate x under time pressure.' },
  { id: 'geo', school: 'math_high', label: 'Geometry Sprint', icon: '📏', color: '#35f0c0',
    need: ['ma14'], lockHint: 'Complete Geometry & Measurement to unlock',
    lockAlert: 'Complete the Geometry & Measurement mission to unlock this Time Attack.',
    blurb: 'Area, perimeter, and simple right-triangle facts.' }
];
const TA_BY_SCHOOL = TA_MODES.reduce((m, mode) => {
  (m[mode.school] = m[mode.school] || []).push(mode);
  return m;
}, {});

function taMode(id) { return TA_MODES.find((m) => m.id === id); }

function taEnsure() {
  if (!S.timeAttack) S.timeAttack = { best: {}, unlocked: {} };
  if (!S.timeAttack.best) S.timeAttack.best = {};
  if (!S.timeAttack.unlocked) S.timeAttack.unlocked = {};
  return S.timeAttack;
}

function taModeReady(mode) {
  const p = prog(mode.school);
  return !!(p && p.done && mode.need.every((id) => p.done[id] != null));
}

function taIsUnlocked(id) {
  return !!(taEnsure().unlocked[id]);
}

function taBest(modeId, mins) {
  const b = taEnsure().best[modeId] || {};
  return b[mins] || 0;
}

function taSetBest(modeId, mins, score) {
  const t = taEnsure();
  if (!t.best[modeId]) t.best[modeId] = { 2: 0, 3: 0, 5: 0 };
  const prev = t.best[modeId][mins] || 0;
  if (score > prev) { t.best[modeId][mins] = score; return true; }
  return false;
}

function taBestLine(modeId) {
  const b2 = taBest(modeId, 2), b3 = taBest(modeId, 3), b5 = taBest(modeId, 5);
  if (!b2 && !b3 && !b5) return 'Beat your best · no coins or shards';
  return `Best: 2m ${b2} · 3m ${b3} · 5m ${b5} · no coins or shards`;
}

/** Grant unlocks for any modes the cadet already completed the prereqs for (saves / migrations). */
function taSyncUnlocksFromProgress() {
  const t = taEnsure();
  TA_MODES.forEach((mode) => {
    if (!t.unlocked[mode.id] && taModeReady(mode)) t.unlocked[mode.id] = true;
  });
}


/** After a mission is marked done — unlock any newly eligible modes for that school. */
function maybeUnlockTimeAttack(lang, levelId) {
  const modes = TA_BY_SCHOOL[lang];
  if (!modes) return null;
  const t = taEnsure();
  const msgs = [];
  modes.forEach((mode) => {
    if (t.unlocked[mode.id]) return;
    if (!taModeReady(mode)) return;
    t.unlocked[mode.id] = true;
    msgs.push(`${mode.icon} <b>${mode.label} unlocked!</b> ${mode.blurb} Pick 2, 3, or 5 minutes. Pure practice — no coins or shards. Find it under <b>Bonus · Time Attack</b> on this map.`);
    toast(`${mode.icon} ${mode.label} unlocked!`);
    logEv('timeattack', lang, `Unlocked ${mode.label}`, 0, 0);
  });
  return msgs.length ? msgs.join('<br><br>') : null;
}

function makeTimeAttackQ(mode, nSolved) {
  const tier = nSolved < 8 ? 0 : nSolved < 20 ? 1 : nSolved < 40 ? 2 : 3;
  const int = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (mode === 'add') {
    if (Math.random() < 0.55) {
      let a, b;
      if (tier === 0) { a = int(1, 12); b = int(1, 12); }
      else if (tier === 1) { a = int(10, 99); b = int(10, 99); }
      else if (tier === 2) { a = int(50, 499); b = int(50, 499); }
      else { a = int(100, 999); b = int(100, 999); }
      return { type: 'fill', q: `${a} + ${b} = ?`, answers: [String(a + b)], why: `${a} + ${b} = ${a + b}.` };
    }
    let a, b;
    if (tier === 0) { a = int(5, 20); b = int(1, a); }
    else if (tier === 1) { a = int(20, 99); b = int(10, a); }
    else if (tier === 2) { a = int(100, 599); b = int(20, a); }
    else { a = int(200, 999); b = int(50, a); }
    return { type: 'fill', q: `${a} − ${b} = ?`, answers: [String(a - b)], why: `${a} − ${b} = ${a - b}.` };
  }

  if (mode === 'mul') {
    if (Math.random() < 0.55) {
      let a, b;
      if (tier === 0) { a = int(2, 10); b = int(2, 10); }
      else if (tier === 1) { a = int(3, 12); b = int(3, 12); }
      else if (tier === 2) { a = int(6, 15); b = int(6, 15); }
      else { a = int(8, 20); b = int(8, 18); }
      return { type: 'fill', q: `${a} × ${b} = ?`, answers: [String(a * b)], why: `${a} × ${b} = ${a * b}.` };
    }
    let b, qv;
    if (tier === 0) { b = int(2, 10); qv = int(2, 10); }
    else if (tier === 1) { b = int(3, 12); qv = int(3, 12); }
    else if (tier === 2) { b = int(4, 15); qv = int(4, 14); }
    else { b = int(5, 18); qv = int(5, 16); }
    const a = b * qv;
    return { type: 'fill', q: `${a} ÷ ${b} = ?`, answers: [String(qv)], why: `${a} ÷ ${b} = ${qv} because ${b} × ${qv} = ${a}.` };
  }

  if (mode === 'frac') {
    if (Math.random() < 0.5) {
      // fraction of a whole: (1/d) of n
      const d = pick([2, 3, 4, 5, 8, 10]);
      const n = d * int(2, tier < 2 ? 12 : 20);
      return { type: 'fill', q: `What is 1/${d} of ${n}?`, answers: [String(n / d)], why: `${n} ÷ ${d} = ${n / d}.` };
    }
    // decimal place / simple decimal add
    if (Math.random() < 0.5) {
      const a = int(1, 9), b = int(0, 9);
      const n = a * 10 + b;
      return { type: 'fill', q: `In ${a}.${b}, the digit ${b} is in which place? Type tenths or ones.`, answers: ['tenths', 'tenth'], why: `After the decimal point, the first digit is tenths.` };
    }
    const a = (int(10, 99) / 10), b = (int(10, 99) / 10);
    const sum = Math.round((a + b) * 10) / 10;
    return { type: 'fill', q: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`, answers: [String(sum), sum.toFixed(1)], why: `${a.toFixed(1)} + ${b.toFixed(1)} = ${sum.toFixed(1)}.` };
  }

  if (mode === 'pct') {
    if (Math.random() < 0.55) {
      const p = pick([10, 20, 25, 50, 75]);
      const base = pick([20, 40, 60, 80, 100, 200]);
      const ans = (p / 100) * base;
      return { type: 'fill', q: `What is ${p}% of ${base}?`, answers: [String(ans)], why: `${p}% of ${base} = ${ans}.` };
    }
    // money change
    const cost = int(3, 15);
    const pay = cost + int(1, 10);
    return { type: 'fill', q: `An item costs $${cost}. You pay $${pay}. How much change?`, answers: [String(pay - cost)], why: `$${pay} − $${cost} = $${pay - cost}.` };
  }

  if (mode === 'order') {
    const a = int(2, 9), b = int(2, 8), c = int(2, 6);
    if (Math.random() < 0.5) {
      const ans = a + b * c;
      return { type: 'fill', q: `Evaluate ${a} + ${b} × ${c}.`, answers: [String(ans)], why: `Multiply first: ${b} × ${c} = ${b * c}, then add ${a} → ${ans}.` };
    }
    const ans = (a + b) * c;
    return { type: 'fill', q: `Evaluate (${a} + ${b}) × ${c}.`, answers: [String(ans)], why: `Parentheses first: ${a} + ${b} = ${a + b}, times ${c} → ${ans}.` };
  }

  if (mode === 'eq1') {
    const x = int(2, 15);
    if (Math.random() < 0.34) {
      const a = int(2, 9);
      return { type: 'fill', q: `Solve ${a}x = ${a * x}. Type x.`, answers: [String(x)], why: `Divide both sides by ${a}: x = ${x}.` };
    }
    if (Math.random() < 0.5) {
      const a = int(1, 20);
      return { type: 'fill', q: `Solve x + ${a} = ${x + a}. Type x.`, answers: [String(x)], why: `Subtract ${a} from both sides: x = ${x}.` };
    }
    const a = int(1, 12);
    return { type: 'fill', q: `Solve x − ${a} = ${x - a}. Type x.`, answers: [String(x)], why: `Add ${a} to both sides: x = ${x}.` };
  }

  if (mode === 'eq2') {
    const x = int(2, 12);
    const a = int(2, 6), b = int(1, 15);
    if (Math.random() < 0.5) {
      const rhs = a * x + b;
      return { type: 'fill', q: `Solve ${a}x + ${b} = ${rhs}. Type x.`, answers: [String(x)], why: `Subtract ${b}: ${a}x = ${a * x}. Divide by ${a}: x = ${x}.` };
    }
    const rhs = a * x - b;
    return { type: 'fill', q: `Solve ${a}x − ${b} = ${rhs}. Type x.`, answers: [String(x)], why: `Add ${b}: ${a}x = ${a * x}. Divide by ${a}: x = ${x}.` };
  }

  // geo
  if (Math.random() < 0.4) {
    const l = int(3, 12), w = int(3, 12);
    return { type: 'fill', q: `Rectangle ${l} by ${w}. Area?`, answers: [String(l * w)], why: `Area = ${l} × ${w} = ${l * w}.` };
  }
  if (Math.random() < 0.5) {
    const l = int(3, 12), w = int(3, 12);
    return { type: 'fill', q: `Rectangle ${l} by ${w}. Perimeter?`, answers: [String(2 * (l + w))], why: `Perimeter = 2(${l} + ${w}) = ${2 * (l + w)}.` };
  }
  const a = int(3, 10);
  return { type: 'fill', q: `Square side ${a}. Area?`, answers: [String(a * a)], why: `Area = ${a}² = ${a * a}.` };
}

function timeAttackIntro(lang, modeId) {
  const mode = taMode(modeId);
  if (!mode) return map(lang);
  const bests = TA_MINS.map((m) => {
    const b = taBest(modeId, m);
    return `<div class="card" style="text-align:center;padding:10px"><b>${m} min</b><br><span class="dim">best ${b}</span></div>`;
  }).join('');
  render(`${header(1, 'Map')}<div class="big">${mode.icon}</div>
    <h2 class="center">${mode.label}</h2>
    <p class="center dim">${COURSES[lang] ? COURSES[lang].name : ''} · pure practice — <b>no coins or shards</b></p>
    <div class="card"><ul>
      <li>${mode.blurb}</li>
      <li>Answer as many as you can before the clock hits zero</li>
      <li>Problems get a little tougher the more you solve</li>
      <li>Wrong answers just move on — keep going</li>
    </ul></div>
    <div class="stat" style="margin:12px 0">${bests}</div>
    <div class="row" style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
      ${TA_MINS.map((m) => `<button class="btn" data-mins="${m}">${m} minutes</button>`).join('')}
    </div>`, () => {
    on('[data-back]', () => map(lang));
    on('[data-mins]', (el) => timeAttack(lang, modeId, +el.dataset.mins));
  });
}

function timeAttack(lang, modeId, mins) {
  const mode = taMode(modeId);
  if (!mode) return map(lang);
  const totalMs = mins * 60 * 1000;
  let score = 0, wrong = 0, alive = true, timer = null, endsAt = 0;
  try { Ambient.setIntense(true); } catch (e) {}

  function endRun() {
    if (!alive) return;
    alive = false;
    clearInterval(timer);
    try { Ambient.setIntense(false); } catch (e) {}
    const isBest = taSetBest(modeId, mins, score);
    logEv('timeattack', lang, `${mode.label} ${mins}m: ${score} correct, ${wrong} miss${isBest ? ' (new best)' : ''}`, 0, 0);
    save();
    const best = taBest(modeId, mins);
    result({
      big: isBest ? '🏆' : mode.icon,
      confetti: isBest && score > 0,
      title: isBest ? 'New personal best!' : 'Time\'s up!',
      text: `You solved <b>${score}</b> in ${mins} minute${mins > 1 ? 's' : ''} (${wrong} miss${wrong === 1 ? '' : 'es'}). Best for this mode: <b>${best}</b>. No coins or shards — just the thrill of the run.`,
      buttons: [
        ['Run again', () => timeAttack(lang, modeId, mins)],
        ['Change time', () => timeAttackIntro(lang, modeId), 1],
        ['Back to map', () => map(lang), 1]
      ]
    });
  }

  function ask() {
    if (!alive) return;
    const left = Math.max(0, endsAt - Date.now());
    if (left <= 0) { endRun(); return; }
    const q = makeTimeAttackQ(modeId, score);
    const w = qWidget(q);
    const secsLeft = Math.ceil(left / 1000);
    const mm = Math.floor(secsLeft / 60), ss = String(secsLeft % 60).padStart(2, '0');
    render(`${header(1, 'Quit')}<div class="surv"><span>${mode.icon} <b>${mode.label}</b></span><span>✅ ${score}</span><span>⏳ ${mm}:${ss}</span></div>
      <div class="timer"><i id="tb" style="width:${Math.max(0, left / totalMs * 100)}%"></i></div>
      <div class="q"><p><b>${q.q}</b></p>${w.html}<div id="fb"></div>
      <button class="btn" id="sub" disabled>Submit</button></div>`, () => {
      const tb = $app.querySelector('#tb'), sub = $app.querySelector('#sub'), fb = $app.querySelector('#fb');
      let done = false;
      const h = w.bind({
        change: (can) => { sub.disabled = !can; },
        submit: () => sub.click(),
        autoMc: true
      });
      const settle = (res) => {
        if (done || !alive) return;
        done = true;
        if (res && res.ok) {
          score++;
          fb.innerHTML = '<div class="fb ok"><b>✅</b></div>';
          setTimeout(ask, 280);
        } else {
          wrong++;
          fb.innerHTML = `<div class="fb no"><b>✖</b> ${res && res.shown ? res.shown : (q.answers ? q.answers[0] : '')}</div>`;
          setTimeout(ask, 700);
        }
      };
      sub.addEventListener('click', () => {
        const res = h.answer(false);
        if (res) settle(res);
      });
      on('[data-back]', () => {
        if (!confirm('Quit this Time Attack? Progress on this run will be lost.')) return;
        alive = false;
        clearInterval(timer);
        try { Ambient.setIntense(false); } catch (e) {}
        map(lang);
      });
    });
  }

  endsAt = Date.now() + totalMs;
  timer = setInterval(() => {
    if (!alive) return;
    const left = endsAt - Date.now();
    const tb = $app.querySelector('#tb');
    if (tb) {
      tb.style.width = Math.max(0, left / totalMs * 100) + '%';
      tb.classList.toggle('low', left < 30000);
    }
    const clock = $app.querySelector('.surv span:last-child');
    if (clock && left > 0) {
      const secsLeft = Math.ceil(left / 1000);
      const mm = Math.floor(secsLeft / 60), ss = String(secsLeft % 60).padStart(2, '0');
      clock.textContent = `⏳ ${mm}:${ss}`;
    }
    if (left <= 0) endRun();
  }, 200);
  ask();
}

function gauntletIntro(lang) {
  const c = COURSES[lang], sv = S.survival[lang] || (S.survival[lang] = { best: 0, plays: 0 });
  render(`${header(1, 'Map')}<div class="big">🔥</div><h2 class="center">The ${c.name} Endless Gauntlet</h2>
    <div class="card"><ul>
      <li><b>Survival mode.</b> Answer correctly, round after round. <b>One mistake ends the run.</b></li>
      <li>Each round gets harder: understand the numbers, calculate carefully, spot common mistakes, then solve independently.</li>
      <li>Questions mix arithmetic, place value, rounding, decimals, fractions, everyday math, and algebra. Values vary so you must understand the method.</li>
      <li>Each cleared round pays <b>2 💎 Star Shards</b>. Beating your best pays bonus shards and credits</li>
      <li>Spend shards in the shop's <b>UI Studio</b></li>
      <li>When a run ends you can open a <b>Deep Dive</b> on the question you missed. It is a full lesson on the concept, but it <b>forfeits that run's 💎</b></li></ul></div>
    <p class="center dim">Your best: <b>${sv.best}</b> rounds · runs played: ${sv.plays}</p>
    <button class="btn" id="go">Enter the Gauntlet</button>`, () => {
    on('[data-back]', () => map(lang));
    on('#go', () => gauntlet(lang));
  });
}

function gauntlet(lang) {
  const gens = SURV[lang], c = COURSES[lang];
  if (!gens) { alert('The Gauntlet is not available for this subject yet.'); return; }
  const sv = S.survival[lang] || (S.survival[lang] = { best: 0, plays: 0 });
  try { Ambient.setIntense(true); } catch (e) {}
  let round = 0, score = 0, timer = null, lastGen = null, alive = true;
  const tierOf = (r) => (r < 4 ? 0 : r < 9 ? 1 : r < 14 ? 2 : 3);
  const secsOf = (r, q) => Math.max(8, 22 - Math.floor(r * 0.6)) + ({ mc: 0, fill: 8, build: 12, run: 25 }[q.type] || 0);
  function makeQ(tier) {
    let g, tries = 0;
    do { g = pick(gens[tier]); tries++; } while (g === lastGen && gens[tier].length > 1 && tries < 6);
    lastGen = g; return g();
  }
  function ask() {
    clearInterval(timer);
    if (!alive) return;
    const tier = tierOf(round), q = makeQ(tier), secs = secsOf(round, q), w = qWidget(q);
    render(`${header(1, 'Quit')}<div class="surv"><span>Round <b>${round + 1}</b></span><span>✅ ${score}</span><span>🏆 ${sv.best}</span></div>
      <div class="kind">${MATH_TIER_LABEL[tier]}${round >= 19 ? ' · 🔥 EXPERT' : ''}</div><div class="timer"><i id="tb"></i></div>
      <div class="q"><p><b>${q.q}</b></p>${w.html}<div id="fb"></div>
      <button class="btn" id="sub" ${q.type === 'mc' ? 'style="display:none"' : 'disabled'}>Submit</button></div>`, () => {
      let left = secs, done = false;
      const tb = $app.querySelector('#tb'), sub = $app.querySelector('#sub'), fb = $app.querySelector('#fb');
      const h = w.bind({ change: (can) => { sub.disabled = !can; }, submit: () => sub.click(), autoMc: true });
      const settle = (res, timedOut) => {
        if (done) return; done = true; clearInterval(timer); h.lock();
        if (res.ok) { score++; round++; fb.innerHTML = '<div class="fb ok"><b>✅ Round cleared!</b></div>'; setTimeout(ask, 700); }
        else over(q, res, timedOut);
      };
      const tick = () => { left -= 0.1; tb.style.width = Math.max(left / secs * 100, 0) + '%'; tb.classList.toggle('low', left < 5); if (left <= 0) settle(h.answer(true), true); };
      const resume = () => { if (!done) timer = setInterval(tick, 100); };
      sub.addEventListener('click', () => { const res = h.answer(false); if (res) settle(res, false); });
      on('[data-back]', () => { clearInterval(timer); if (confirm('Quit this run? Your current score will be lost.')) { alive = false; try { Ambient.setIntense(false); } catch (e) {} map(lang); } else resume(); });
      resume();
    });
  }
  function over(q, res, timedOut) {
    alive = false; clearInterval(timer);
    try { Ambient.setIntense(false); } catch (e) {}
    const prevBest = sv.best, isBest = score > prevBest;
    sv.plays++;
    let shards = score * 2, credits = 0;
    if (isBest) { shards += 10; credits = (score - prevBest) * 5; sv.best = score; sv.bestAt = Date.now(); earn(credits, lang); }
    S.shards += shards; S.shardsEarned += shards;
    // every run is kept for the Transcript: score, crystals, and whether the Deep Dive forfeited them
    const run = { t: Date.now(), score, shards, credits, forfeited: false, best: isBest && score > 0 };
    sv.runs = (sv.runs || []).concat(run).slice(-30);
    sv.rounds = (sv.rounds || 0) + score;
    logEv('gauntlet', lang, `Gauntlet run: ${score} round${score === 1 ? '' : 's'} cleared${isBest && score > 0 ? ' (new best)' : ''}`, credits, shards);
    if (score > 0) touchStreak();
    save(); checkAch();
    const given = String(res.given || '').slice(0, 300);
    let forfeited = false;
    const paint = () => render(`${header()}<div class="big">${isBest && score > 0 ? '🏆' : '💥'}</div><h2 class="center">${timedOut ? 'Time is up!' : 'Run over'}</h2>
      <div class="stat"><div class="card"><b>${score}</b><span class="dim">rounds cleared</span></div><div class="card"><b>${sv.best}</b><span class="dim">best</span></div></div>
      <p class="center">${isBest && score > 0 ? '🎉 New personal best! ' : ''}${forfeited ? `You forfeited your <b>${shards} 💎</b> by opening the Deep Dive${credits ? `, but kept <b>${credits} 💰</b>` : ''}.` : `You earned <b>${shards} 💎</b>${credits ? ` and <b>${credits} 💰</b>` : ''}.`}</p>
      <div class="card"><div class="kind">What ended the run</div><p><b>${q.q}</b></p>${given ? `<p>You answered: <code>${esc(given)}</code></p>` : timedOut ? '<p>You ran out of time.</p>' : ''}<p>Correct answer: ${res.shown}</p><p class="dim">${q.why}</p></div>
      <button class="btn" id="dive">🔎 Deep Dive: understand this concept${!forfeited && shards > 0 ? ` (forfeits ${shards} 💎)` : ''}</button>
      <button class="btn sec" id="again">Run it again</button><button class="btn sec" id="shp">💎 Spend shards</button><button class="btn sec" id="mp">Back to map</button>`, () => {
      on('#dive', () => {
        // learning aids cost the run's shards: taking the Deep Dive forfeits them (credits and best score are kept)
        if (!forfeited && shards > 0) {
          if (!confirm(`Opening the Deep Dive forfeits the ${shards} 💎 you earned this run. Open it anyway?`)) return;
          S.shards = Math.max(0, S.shards - shards); S.shardsForfeited += shards; forfeited = true; run.forfeited = true;
          logEv('forfeit', lang, 'Opened a Deep Dive: forfeited the run\'s crystals', 0, -shards); save();
        }
        deepDive(lang, q, Object.assign({}, res, { given }), paint);
      });
      on('#again', () => gauntlet(lang)); on('#shp', shop); on('#mp', () => map(lang));
    });
    paint();
  }
  ask();
}

// ---------- Transcript: the captain's full record ----------
const KIND_ICON = { mission: '🚀', boss: '👾', trial: '🏅', daily: '📅', request: '📨', review: '🔁', capstone: '🎓', gauntlet: '🔥', forfeit: '🔎', shop: '🛒', streak: '🔥', ach: '🏆', timeattack: '⏱️' };
const KIND_COLOR = { mission: '#35f0c0', boss: '#ff5f8d', trial: '#ffc857', daily: '#4de1ff', request: '#c084fc', review: '#8b6cff', capstone: '#35f0c0', gauntlet: '#ff8a3d', forfeit: '#ff6b8b', shop: '#ffc857', streak: '#ff8a3d', ach: '#ffc857', timeattack: '#4de1ff' };
const fmtN = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const fmtDate = (t) => { const d = new Date(t); return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ', ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }); };

function transcriptStats() {
  const langs = Object.keys(COURSES).map((id) => {
    const c = COURSES[id], p = prog(id), sv = S.survival[id] || {};
    const tiers = c.levels.map((l) => l.tier).filter((t, i, a) => a.indexOf(t) === i);
    return { id, name: c.name, icon: c.icon, color: c.c1, done: Object.keys(p.done).length, total: c.levels.length,
      stars: Object.keys(p.done).reduce((a, k) => a + p.done[k], 0), maxStars: c.levels.length * 3,
      bosses: tiers.filter((t) => S.bosses[`${id}|${t}`]).length, tiers: tiers.length,
      badge: !!bonusOf(id).badge, capstone: !!S.capstoneDone[id], earned: S.earnedBy[id] || 0,
      best: sv.best || 0, plays: sv.plays || 0, rounds: sv.rounds || 0, runs: sv.runs || [] };
  });
  const bestL = langs.reduce((m, l) => (l.best > m.best ? l : m), { best: 0, name: 'none yet' });
  return { langs, bestL, rounds: langs.reduce((a, l) => a + l.rounds, 0), plays: langs.reduce((a, l) => a + l.plays, 0) };
}

function transcriptText() {
  const T = transcriptStats(), line = (a, b) => `${a}: ${b}`;
  const out = ['GALACTIC ACADEMY: LEARNER TRANSCRIPT', `${S.name || 'Space Cadet'} · ${companyName()} · ${rank()}`, `Generated ${new Date().toLocaleString()}`, '',
    'COINS AND CRYSTALS',
    line('Credits earned', fmtN(S.xp)), line('Credits spent', fmtN(S.spent)), line('Credit balance', fmtN(bal())),
    line('Crystals earned', fmtN(S.shardsEarned)), line('Crystals spent', fmtN(S.shardsSpent)), line('Crystals forfeited (Deep Dives)', fmtN(S.shardsForfeited)), line('Crystal balance', fmtN(S.shards)), '',
    'STREAKS AND RECORDS',
    line('Daily streak (current / best)', `${S.streak} / ${S.bestStreak} days`),
    line('Best Gauntlet run', `${T.bestL.best} rounds (${T.bestL.name})`), line('Gauntlet rounds cleared, all time', fmtN(T.rounds)), line('Gauntlet runs played', T.plays),
    line('Daily challenges solved', S.dailyCount), line('Bonus rounds solved perfectly', S.stats.requests), '',
    'TIME ATTACK (math speed practice — no rewards)',
    ...(() => {
      const ta = timeAttackReportData();
      return [
        line('Modes unlocked', `${ta.unlockedN}/${ta.modes.length}`),
        line('Runs logged', String(ta.totalRuns)),
        ...ta.modes.map(({ mode, open, b2, b3, b5, peak }) =>
          line(mode.label, open ? (peak ? `best 2m ${b2} · 3m ${b3} · 5m ${b5}` : 'unlocked, no runs yet') : 'locked')
        ),
        ''
      ];
    })(),
    'MATHEMATICS PROGRESS'];
  T.langs.forEach((l) => {
    out.push(`${l.name}: ${l.done}/${l.total} missions, ${l.stars}/${l.maxStars} stars, bosses ${l.bosses}/${l.tiers}, Master badge ${l.badge ? 'yes' : 'no'}, capstone ${l.capstone ? 'done' : 'not yet'}, ${fmtN(l.earned)} credits earned`);
    if (l.plays) out.push(`   Gauntlet: best ${l.best}, ${l.plays} runs, average ${(l.rounds / l.plays).toFixed(1)} rounds`);
  });
  const got = X.ach.filter((a) => S.ach[a.id]);
  out.push('', `ACHIEVEMENTS (${got.length}/${X.ach.length})`, got.map((a) => a.name).join(', ') || 'none yet', '', 'RECENT ACTIVITY');
  S.log.slice(-40).reverse().forEach((e) => out.push(`${fmtDate(e.t)}  ${e.txt}${e.c ? `  ${e.c > 0 ? '+' : ''}${e.c} credits` : ''}${e.s ? `  ${e.s > 0 ? '+' : ''}${e.s} crystals` : ''}`));
  return out.join('\n');
}

function transcript() {
  const T = transcriptStats();
  const cur = RANKS.filter((r) => S.xp >= r[0]).pop(), nxt = RANKS.find((r) => r[0] > S.xp);
  const pct = nxt ? Math.round((S.xp - cur[0]) / (nxt[0] - cur[0]) * 100) : 100;
  const stack = (total, parts) => `<div class="stack">${total > 0 ? parts.map((p) => `<i style="width:${p[1] / total * 100}%;background:${p[2]}" title="${p[0]}"></i>`).join('') : ''}</div>
    <div class="legend">${parts.map((p) => `<span><i style="background:${p[2]}"></i>${p[0]} <b>${fmtN(p[1])}</b></span>`).join('')}</div>`;
  const amt = (n, em) => (n ? `<span class="amt ${n < 0 ? 'neg' : 'pos'}">${n > 0 ? '+' : ''}${fmtN(n)} ${em}</span>` : '');
  const got = X.ach.filter((a) => S.ach[a.id]);
  const cards = T.langs.map((l) => {
    const maxScore = Math.max.apply(null, [1].concat(l.runs.map((r) => r.score)));
    const bars = l.runs.slice(-14).map((r) => `<i class="${r.forfeited ? 'fg' : ''} ${r.best ? 'pb' : ''}" style="height:${Math.max(10, r.score / maxScore * 100)}%" title="${fmtDate(r.t)}: ${r.score} rounds${r.forfeited ? ' (crystals forfeited)' : ''}"></i>`).join('');
    return `<div class="card lcard" style="--lc:${l.color}">
      <div class="lhead"><span class="licon">${l.icon}</span><div style="flex:1"><b>${l.name}</b><small>${l.done}/${l.total} missions · ${'★'.repeat(Math.min(3, Math.round(l.stars / Math.max(1, l.done))))}${l.done ? '' : '☆☆☆'} ${l.stars}/${l.maxStars}</small></div><span class="lcr">+${fmtN(l.earned)} 💰</span></div>
      <div class="bar"><i style="width:${l.done / l.total * 100}%"></i></div>
      <div class="chips"><span class="chip2 ${l.bosses ? 'on' : ''}">👾 Bosses ${l.bosses}/${l.tiers}</span><span class="chip2 ${l.badge ? 'on' : ''}">🏅 Master</span><span class="chip2 ${l.capstone ? 'on' : ''}">🎓 Capstone</span></div>
      ${l.plays ? `<div class="gl"><div class="gltop"><span>🔥 Gauntlet best <b>${l.best}</b></span><span>${l.plays} run${l.plays === 1 ? '' : 's'} · avg ${(l.rounds / l.plays).toFixed(1)}</span></div><div class="sbars">${bars}</div><small class="dim">Last ${Math.min(14, l.runs.length)} runs. Orange = best run, pink = crystals forfeited.</small></div>` : l.badge ? '<div class="gl"><small class="dim">🔥 Endless Gauntlet unlocked. Not played yet.</small></div>' : ''}
    </div>`;
  }).join('');
  const timeline = S.log.slice(-50).reverse().map((e) => `<div class="tli"><i style="background:${KIND_COLOR[e.k] || '#8d9ab3'}"></i><div class="tlb"><div class="tlt">${KIND_ICON[e.k] || '•'} ${esc(e.txt)}</div><div class="tlm"><span>${fmtDate(e.t)}${e.lang && COURSES[e.lang] ? ' · ' + esc(COURSES[e.lang].name) : ''}</span><span>${amt(e.c, '💰')} ${amt(e.s, '💎')}</span></div></div></div>`).join('');
  render(`${header(1, 'HQ')}
    <div class="trhero"><div class="trlogo">${logoIcon()}</div><div style="flex:1">
      <div class="kind">Learner transcript</div><h2>${esc(S.name || 'Space Cadet')}</h2><div class="dim">${esc(companyName())}</div></div></div>
    <div class="card rankrow"><div class="rtop"><b>🎖️ ${cur[1]}</b><span class="dim">${nxt ? `${fmtN(nxt[0] - S.xp)} 💰 to ${nxt[1]}` : 'Top rank reached'}</span></div><div class="bar"><i style="width:${pct}%"></i></div></div>
    <div class="trtiles">
      <div class="trtile" style="--tc:#ffc857"><span>💰</span><b>${fmtN(S.xp)}</b><small>credits earned</small></div>
      <div class="trtile" style="--tc:#8b6cff"><span>💎</span><b>${fmtN(S.shardsEarned)}</b><small>crystals earned</small></div>
      <div class="trtile" style="--tc:#ff8a3d"><span>🔥</span><b>${S.bestStreak}</b><small>best daily streak (now ${S.streak})</small></div>
      <div class="trtile" style="--tc:#ff5f8d"><span>🏆</span><b>${T.bestL.best}</b><small>best Gauntlet run · ${esc(T.bestL.name)}</small></div>
    </div>
    <div class="tier">Wallet</div>
    <div class="card"><div class="kind">💰 Credits earned: ${fmtN(S.xp)}</div>${stack(S.xp, [['Spent', S.spent, '#ff8a3d'], ['Balance', bal(), '#35f0c0']])}</div>
    <div class="card"><div class="kind">💎 Crystals earned: ${fmtN(S.shardsEarned)}</div>${stack(S.shardsEarned, [['Spent', S.shardsSpent, '#ff8a3d'], ['Forfeited', S.shardsForfeited, '#ff5f8d'], ['Balance', S.shards, '#8b6cff']])}</div>
    <div class="tier">Records</div>
    <div class="trgrid"><div class="trmini"><b>${fmtN(T.rounds)}</b><small>Gauntlet rounds cleared</small></div><div class="trmini"><b>${T.plays}</b><small>Gauntlet runs</small></div>
      <div class="trmini"><b>${S.dailyCount}</b><small>daily challenges solved</small></div><div class="trmini"><b>${S.stats.requests}</b><small>perfect extra practice rounds</small></div></div>
    <div class="tier">Time Attack</div>
    ${(() => {
      const ta = timeAttackReportData();
      if (!ta.modes.length) return '<div class="card dim">No Time Attack data yet.</div>';
      const rows = ta.modes.map(({ mode, open, b2, b3, b5, peak, runs }) =>
        `<div class="report-row"><span class="report-ico">${open ? mode.icon : '🔒'}</span><span class="report-main"><b>${esc(mode.label)}</b><span class="dim">${open ? (peak ? `Best 2m ${b2} · 3m ${b3} · 5m ${b5}${runs ? ` · ${runs} runs` : ''}` : 'Unlocked · no runs yet') : mode.lockHint}</span></span><span class="report-pct">${open ? (peak || '—') : '🔒'}</span></div>`
      ).join('');
      return `<div class="card"><p class="dim" style="margin:0 0 8px">Speed practice · no rewards · ${ta.unlockedN}/${ta.modes.length} modes open · ${ta.totalRuns} runs logged</p>${rows}</div>`;
    })()}
    <div class="tier">Math progress</div>${cards}
    <div class="tier">Achievements · ${got.length}/${X.ach.length}</div>
    <div class="achgrid">${X.ach.map((a) => `<div class="achcell ${S.ach[a.id] ? 'got' : ''}" title="${esc(a.name)}: ${esc(a.desc)}"><span>${S.ach[a.id] ? a.icon : '🔒'}</span><small>${esc(a.name)}</small></div>`).join('')}</div>
    <div class="tier">Activity timeline</div>
    ${timeline ? `<div class="tl">${timeline}</div>` : '<div class="card dim">No activity recorded yet. Finish a mission, defeat a boss or run the Gauntlet and it will appear here. (Everything you earned before this feature is included in the totals above.)</div>'}
    <button class="btn" id="cp">📋 Copy transcript as text</button>${navigator.share ? '<button class="btn sec" id="sh2">📤 Share transcript</button>' : ''}
    <button class="btn sec" id="bk">Back to HQ</button>`, () => {
    on('[data-back]', hq); on('#bk', hq);
    on('#cp', () => {
      const text = transcriptText();
      const done = () => toast('📋 Transcript copied');
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => alert(text));
      else { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { alert(text); } ta.remove(); }
    });
    on('#sh2', () => { navigator.share({ title: 'Galactic Academy transcript', text: transcriptText() }).catch(() => {}); });
  });
}

// ---------- Deep Dive: a thorough outline of the concept behind a missed Gauntlet question ----------
function deepDive(lang, q, res, back) {
  const c = ((window.DIVE || {}).c || {})[q.concept];
  const lvIdx = c ? COURSES[lang].levels.findIndex((l) => l.id === c.lvl) : -1;
  const list = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const given = res.given ? `Your answer: <code>${esc(res.given)}</code><br>` : '';
  render(`${header(1, 'Results')}<h2>🔎 Deep Dive</h2><div class="kind">${c ? esc(c.t) : 'Review this question'}</div>
    <div class="card dive"><div class="kind">1 · The question you missed</div><p><b>${q.q}</b></p>
      <p>${given}Correct answer: ${res.shown}</p><p><b>Why:</b> ${q.why}</p></div>
    ${c ? `<div class="card dive"><div class="kind">2 · What it is</div><p>${c.what}</p></div>
    <div class="card dive"><div class="kind">3 · How to think it through</div>${list(c.rules)}</div>
    <div class="card dive"><div class="kind">4 · A worked example</div><pre><code>${esc(c.ex)}</code></pre><p>${c.note}</p></div>
    <div class="card dive"><div class="kind">5 · Common mistakes</div>${list(c.mistakes)}</div>
    <div class="card dive tip"><div class="kind">6 · ${X.mentor.icon} ${X.mentor.name}'s tip</div><p>${c.tip}</p></div>` : `<div class="card dive"><p>${X.mentor.icon} Re-read the explanation above, then try rewriting the answer in your own words. Reviewing the related mission lesson is a great next step.</p></div>`}
    ${lvIdx >= 0 ? '<button class="btn" id="les">📖 Open the related lesson</button>' : ''}
    <button class="btn ${lvIdx >= 0 ? 'sec' : ''}" id="bk">Back to results</button>`, () => {
    on('[data-back]', back); on('#bk', back);
    on('#les', () => lesson(lang, lvIdx));
  });
}

// ---------- certificate and capstone ----------
function certificate(lang) {
  const c = COURSES[lang];
  if (!S.name) { const n = prompt('What name should appear on your certificate?'); if (!n || !n.trim()) return; S.name = n.trim().slice(0, 40); save(); }
  const cv = document.createElement('canvas'); cv.width = 1200; cv.height = 850;
  const x = cv.getContext('2d');
  const g = x.createLinearGradient(0, 0, 1200, 850); g.addColorStop(0, '#1a0f4d'); g.addColorStop(1, '#0b0820');
  x.fillStyle = g; x.fillRect(0, 0, 1200, 850);
  x.strokeStyle = '#ffc857'; x.lineWidth = 8; x.strokeRect(30, 30, 1140, 790);
  x.strokeStyle = '#35f0c0'; x.lineWidth = 2; x.strokeRect(50, 50, 1100, 750);
  x.textAlign = 'center'; x.fillStyle = '#ffc857'; x.font = 'bold 70px Georgia, serif'; x.fillText('Certificate of Mastery', 600, 190);
  x.fillStyle = '#c9c2ff'; x.font = '30px Georgia, serif'; x.fillText('Galactic Academy Academy proudly presents this award to', 600, 270);
  x.fillStyle = '#ffffff'; x.font = 'bold 80px Georgia, serif'; x.fillText(S.name, 600, 400);
  x.fillStyle = '#c9c2ff'; x.font = '30px Georgia, serif'; x.fillText('for completing every mission and passing the', 600, 480);
  x.fillStyle = '#35f0c0'; x.font = 'bold 58px Georgia, serif'; x.fillText(`Master of ${c.name} Trial`, 600, 560);
  x.font = '90px serif'; x.fillText('🏅', 600, 680);
  x.fillStyle = '#c9c2ff'; x.font = '26px Georgia, serif'; x.fillText(`${new Date().toDateString()}   ·   Signed, ${X.mentor.name}, Chief Mentor`, 600, 770);
  const url = cv.toDataURL('image/png');
  render(`${header(1, 'Map')}<h2>📜 Your certificate</h2><img class="cert" src="${url}" alt="Certificate">
    <p class="dim center">On iPhone: press and hold the image, then tap <b>Add to Photos</b>.</p>
    <a class="btn" download="certificate-${lang}.png" href="${url}">Download image</a>
    <button class="btn sec" id="nm">Change name on certificate</button>`, () => {
    on('[data-back]', () => map(lang));
    on('#nm', () => { const n = prompt('Name on certificate:', S.name); if (n && n.trim()) { S.name = n.trim().slice(0, 40); save(); certificate(lang); } });
  });
}

function capstone(lang) {
  const cap = X.capstones[lang], c = COURSES[lang];
  const st = S.capstone[lang] || (S.capstone[lang] = cap.steps.map(() => false));
  render(`${header(1, 'Map')}<div class="kind">Capstone project · ${c.name}</div><h2>${esc(cap.title)}</h2>
    <div class="card story">${esc(cap.brief)}<br><small class="dim">Build this outside the app, tick each step as you finish it, then show it off in your portfolio.</small></div>
    ${cap.steps.map((s, i) => `<button class="step ${st[i] ? 'on' : ''}" data-s="${i}"><span>${st[i] ? '✅' : '⬜'}</span><span>${esc(s)}</span></button>`).join('')}
    <p class="center dim">${st.filter(Boolean).length}/${cap.steps.length} complete${S.capstoneDone[lang] ? ' · reward claimed' : ` · +${CAPSTONE_REWARD} credits when done`}</p>`, () => {
    on('[data-back]', () => map(lang));
    on('[data-s]', (el) => {
      const i = +el.dataset.s; st[i] = !st[i];
      if (st.every(Boolean) && !S.capstoneDone[lang]) { S.capstoneDone[lang] = true; earn(CAPSTONE_REWARD, lang); logEv('capstone', lang, `Capstone project completed: ${cap.title}`, CAPSTONE_REWARD); toast(`🎓 Capstone complete! +${CAPSTONE_REWARD} credits`); }
      checkAch(); capstone(lang);
    });
  });
}

// ---------- lessons ----------
function cards(html) {
  const out = []; let rest = html, m;
  while ((m = rest.match(/^[\s\S]*?<\/pre>/))) { out.push(m[0]); rest = rest.slice(m[0].length); }
  if (rest.trim()) { if (out.length) out[out.length - 1] += rest; else out.push(rest); }
  return out.length ? out : [html];
}

function lesson(lang, i, step) {
  const l = COURSES[lang].levels[i], steps = cards(l.lesson);
  if (step == null) {
    return render(`${header(1, 'Map')}<div class="kind">Mission ${i + 1} · ${l.tier}</div>
      <div class="mission" style="--pc:${l.color}"><span class="planet big2">${l.planet}</span><div><h2>${l.title}</h2><b>${l.company}</b></div></div>
      <div class="card story" id="mission-story">📡 <i>${l.mission}</i><div class="goal">🎯 Build: <b>${l.product || l.mission}</b> ${l.icon}</div>
        <button type="button" class="btn-read" data-read="#mission-story" data-speak-mode="lesson" aria-label="Read mission aloud">🔊 Read Aloud</button></div>
      <div class="card intro" id="mission-intro"><div class="kind">${X.mentor.icon} ${X.mentor.name} explains, in plain English</div>${(window.INTROS || {})[l.id] || ''}
        <button type="button" class="btn-read" data-read="#mission-intro" data-speak-mode="lesson" aria-label="Read introduction aloud">🔊 Read Aloud</button></div>
      <p class="dim center">Next: ${steps.length} short lesson card${steps.length > 1 ? 's' : ''}, then guided practice. Hints are free.</p>
      <button class="btn" id="go">Start learning</button>`, () => {
      on('[data-back]', () => map(lang));
      on('#go', () => lesson(lang, i, 0));
    });
  }
  render(`${header(1, 'Briefing')}<div class="kind">Lesson ${step + 1} of ${steps.length} · ${l.title}</div>
    <div class="dots">${steps.map((_, n) => `<i class="${n <= step ? 'on' : ''}"></i>`).join('')}</div>
    <div class="card lesson" id="lesson-card">${steps[step]}
      <button type="button" class="btn-read" data-read="#lesson-card" data-speak-mode="lesson" aria-label="Read lesson aloud">🔊 Read Aloud</button></div>
    <button class="btn" id="nx">${step < steps.length - 1 ? 'Got it, next' : 'Got it, start practice'}</button>
    ${step > 0 ? '<button class="btn sec" id="pv">Previous</button>' : ''}`, () => {
    on('[data-back]', () => lesson(lang, i));
    on('#nx', () => (step < steps.length - 1 ? lesson(lang, i, step + 1) : quiz(lang, i)));
    on('#pv', () => lesson(lang, i, step - 1));
  });
}

// ---------- mission practice ----------
function quiz(lang, i) {
  const l = COURSES[lang].levels[i];
  const queue = l.challenges.map((c, k) => Object.assign({}, c, { k }));
  let mistakes = 0, solved = 0, combo = 0, mCredits = 0;
  const total = queue.length;
  const KIND = { mc: 'Choose an answer', fill: 'Type your answer', build: 'Build the answer' };

  function next() {
    if (!queue.length) return finish();
    const q = fresh(queue[0]);
    const opts = q.type === 'mc' ? shuffle(q.options.map((t, idx) => ({ t, idx }))) : null;
    const bank = q.type === 'build' ? shuffle(q.tokens.map((t, idx) => ({ t, idx }))) : null;
    render(`${header(1, 'Abort')}<div class="bar"><i style="width:${solved / total * 100}%"></i></div>
      <div class="q" style="margin-top:16px" id="q-block"><div class="kind">${KIND[q.type]}${combo > 1 ? ` · 🔥 combo x${combo}` : ''}</div>
      <p class="speak-q"><b>${q.q}</b></p>
      <button type="button" class="btn-read" data-read="#q-block" data-speak-mode="question" aria-label="Read question aloud">🔊 Read Aloud</button>
      ${opts ? opts.map((o, n) => `<button class="opt speak-opt ${q.textOpts ? 'text' : ''}" data-n="${n}">${esc(o.t)}</button>`).join('') : ''}
      ${q.type === 'fill' ? `<input class="ans" id="ans" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="your answer">` : ''}
      ${bank ? `<div class="slot" id="slot"><span class="dim">tap pieces below</span></div><div class="bank" id="bank">${bank.map((b, n) => `<button class="tok" data-n="${n}">${esc(b.t)}</button>`).join('')}</div>` : ''}
      <div id="fb"></div><button class="btn" id="check" ${q.type === 'fill' ? '' : 'disabled'}>Check</button>
      <button class="btn sec" id="rv">📖 Stuck? Review the lesson (free)</button><div id="rev" class="card lesson" style="display:none">${l.lesson}</div></div>`, () => {
      on('[data-back]', () => { if (confirm('Abort mission? Progress in it will be lost.')) map(lang); });
      on('#rv', (el) => { const r = $app.querySelector('#rev'); const open = r.style.display === 'none'; r.style.display = open ? 'block' : 'none'; el.textContent = open ? '📖 Hide lesson' : '📖 Stuck? Review the lesson (free)'; if (open) r.scrollIntoView({ behavior: 'smooth' }); });
      let sel = null, locked = false, picked = [];
      const check = $app.querySelector('#check'), fb = $app.querySelector('#fb');
      if (opts) on('.opt', (el) => { if (locked) return; $app.querySelectorAll('.opt').forEach((o) => o.classList.remove('sel')); el.classList.add('sel'); sel = +el.dataset.n; check.disabled = false; });
      const input = $app.querySelector('#ans');
      if (input) { input.focus(); input.addEventListener('keydown', (e) => e.key === 'Enter' && check.click()); }
      if (bank) {
        const slot = $app.querySelector('#slot');
        const draw = () => {
          slot.innerHTML = picked.length ? picked.map((n) => `<button class="tok on" data-n="${n}">${esc(bank[n].t)}</button>`).join('') : '<span class="dim">tap pieces below</span>';
          $app.querySelectorAll('#bank .tok').forEach((b) => b.classList.toggle('used', picked.includes(+b.dataset.n)));
          slot.querySelectorAll('.tok').forEach((b) => b.addEventListener('click', () => { if (locked) return; picked = picked.filter((n) => n !== +b.dataset.n); draw(); }));
          check.disabled = !picked.length;
        };
        $app.querySelectorAll('#bank .tok').forEach((b) => b.addEventListener('click', () => { if (locked || picked.includes(+b.dataset.n)) return; picked.push(+b.dataset.n); draw(); }));
      }
      check.addEventListener('click', async () => {
        if (locked) { next(); return; }
        let ok, report = '';
        if (opts) {
          ok = opts[sel].idx === q.answer;
          $app.querySelectorAll('.opt').forEach((el, n) => { if (opts[n].idx === q.answer) el.classList.add('right'); else if (n === sel) el.classList.add('wrong'); });
        } else if (bank) {
          ok = picked.map((n) => bank[n].t).join(' ') === q.tokens.join(' ');
        } else {
          if (!input.value.trim()) return;
          ok = q.answers.some((a) => eqAns(q, a, input.value));
        }
        locked = true;
        if (ok) { solved++; queue.shift(); combo++; mCredits += earn(10 + Math.min(combo - 1, 5) * 2, lang); } else { mistakes++; combo = 0; queue.push(queue.shift()); if (q.type === 'mc') addReview(lang, l.id, q.k); }
        save();
        const shown = q.type === 'fill' ? `<code>${esc(q.answers[0])}</code>` : q.type === 'build' ? `<code>${esc(q.tokens.join(' '))}</code>` : null;
        fb.innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><b>${zyx(ok ? 'ok' : 'no', lang)}</b>${report}${!ok && shown ? `<br>Answer: ${shown}` : ''}<br>${q.why}</div>`;
        check.textContent = queue.length ? 'Continue' : 'Finish mission';
        check.scrollIntoView({ block: 'end', behavior: 'smooth' });
      });
    });
  }

  function finish() {
    const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
    const p = prog(lang), first = p.done[l.id] == null;
    p.done[l.id] = Math.max(stars, p.done[l.id] || 0);
    const before = rank();
    if (first) mCredits += earn(50, lang);
    logEv('mission', lang, `${first ? 'Completed' : 'Replayed'} ${l.mission} (${l.title}): ${stars} star${stars > 1 ? 's' : ''}, ${mistakes} mistake${mistakes === 1 ? '' : 's'}`, mCredits);
    const taMsg = maybeUnlockTimeAttack(lang, l.id);
    touchStreak(); save();
    const promoted = rank() !== before;
    const last = i === COURSES[lang].levels.length - 1;
    const courseName = (COURSES[lang] && COURSES[lang].name) || 'Academy';
    checkAch();
    render(`${header()}${confetti()}
      <div class="big">${l.icon}</div><h2 class="center">${first ? 'Mission complete!' : 'Mission replayed'}</h2>
      <p class="center"><b>${l.mission}</b><br><span class="dim">Great work in ${esc(courseName)}!</span></p>
      <p class="center stars" style="font-size:32px">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</p>
      <div class="stat"><div class="card"><b>${mistakes}</b><span class="dim">mistakes</span></div><div class="card"><b>${first ? 'NEW' : '—'}</b><span class="dim">mission</span></div></div>
      <p class="center dim">${zyx('ok', lang)}</p>
      ${promoted ? `<p class="center promo">🎖️ Promoted to <b>${rank()}</b>!</p>` : ''}
      ${taMsg ? `<div class="card" style="border-color:#4de1ff88;margin-top:12px">${taMsg}</div>` : ''}
      ${stars < 3 ? '<p class="dim center">Replay with zero mistakes for 3 stars.</p>' : ''}
      ${last ? '<p class="center"><b>Sector complete. Face the boss, then the Mastery Trial! 🌌</b></p>' : `<button class="btn" id="nx">Next mission</button>`}
      <button class="btn sec" id="mp">Back to map</button>`, () => {
      on('#nx', () => lesson(lang, i + 1));
      on('#mp', () => map(lang));
    });
  }
  next();
}

if (!store.activeId || !store.list.length) profilePicker(true);
else { home(); checkAch(); }
// Offer storage protection once; users can reopen it from Manage Profiles.
if (localStorage.getItem(STORAGE_PROMPT_KEY) !== 'shown') showStoragePrompt();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();

