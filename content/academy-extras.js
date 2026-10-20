/* Galactic Academy: child-friendly rewards, mentor lines, and shop. */
window.EXTRAS = Object.assign({
  "mentor": {
    "name": "Zyx",
    "icon": "👽",
    "ok": [
      "Excellent thinking!",
      "You are getting stronger with every try.",
      "That is a galaxy-class answer!",
      "Great work, Space Cadet!",
      "You found the right path!",
      "Nice focus — keep going!"
    ],
    "no": [
      "Not quite yet. Read the explanation, then try again.",
      "Mistakes help your brain grow. Check the tip and try once more.",
      "Close! Look carefully and give it another try.",
      "Learning takes practice. Review the idea, then answer again.",
      "Almost! Re-read the clue in the explanation."
    ],
    "late": [
      "The clock won that round. Speed comes with practice!",
      "Time is up! Breathe, then go again."
    ],
    "okBySubject": {
      "math": ["Sharp calculation!", "Your number sense is growing!", "That math checks out!"],
      "reading": ["Strong reading!", "You understood that well!", "Clear thinking with the text!"],
      "geography": ["Great map thinking!", "You know this place!", "Solid geography skills!"],
      "spanish": ["¡Excelente! That chunk is locked in.", "Your Spanish orbit is growing!", "Clear echo — well done!"],
      "civics": ["Solid civic thinking!", "You understand how communities work!", "Great citizenship skills!"],
      "science": ["Sharp scientific thinking!", "Evidence on your side!", "Clear lab reasoning!"],
      "advanced": ["Advanced-level insight!", "That is galaxy-class reasoning!", "You cleared an endgame challenge!"]
    },
    "noBySubject": {
      "math": ["Check the steps again.", "Revisit the numbers in the explanation."],
      "reading": ["Look back at the words and try again.", "Re-read the passage clue carefully."],
      "geography": ["Picture the map once more.", "Review the place names in the explanation."],
      "spanish": ["Listen to the phrase again, then try.", "Check the chunk in the lesson and echo it once more."],
      "civics": ["Re-read the civic idea and try again.", "Check the explanation about rights, laws, or government."],
      "science": ["Check the evidence in the lesson again.", "Revisit the science idea and try once more."],
      "advanced": ["Re-read the advanced explanation carefully.", "Break the problem into steps and try again."]
    }
  },
  "bosses": [
    "Nebula Guardian",
    "Captain Comet",
    "Asteroid Sentinel",
    "The Void Warden"
  ],
  "shop": [
    {
      "id": "rocket",
      "kind": "ship",
      "icon": "🚀",
      "name": "Classic Rocket",
      "cost": 0
    },
    {
      "id": "ufo",
      "kind": "ship",
      "icon": "🛸",
      "name": "Saucer Cruiser",
      "cost": 350
    },
    {
      "id": "comet",
      "kind": "ship",
      "icon": "☄️",
      "name": "Comet Runner",
      "cost": 420
    },
    {
      "id": "sat",
      "kind": "ship",
      "icon": "🛰️",
      "name": "Sat Hopper",
      "cost": 500
    },
    {
      "id": "star",
      "kind": "ship",
      "icon": "🌠",
      "name": "Shooting Star",
      "cost": 700
    },
    {
      "id": "nebula",
      "kind": "theme",
      "icon": "🌌",
      "name": "Nebula Night",
      "cost": 0
    },
    {
      "id": "sunset",
      "kind": "theme",
      "icon": "🌅",
      "name": "Solar Sunset",
      "cost": 450
    },
    {
      "id": "aurora",
      "kind": "theme",
      "icon": "🌿",
      "name": "Aurora Green",
      "cost": 450
    },
    {
      "id": "void",
      "kind": "theme",
      "icon": "⚫",
      "name": "Void Mono",
      "cost": 550
    },
    {
      "id": "logo-star",
      "kind": "logo",
      "icon": "🌟",
      "name": "Star Logo",
      "cost": 0
    },
    {
      "id": "logo-bolt",
      "kind": "logo",
      "icon": "⚡",
      "name": "Bolt Logo",
      "cost": 200
    },
    {
      "id": "logo-uni",
      "kind": "logo",
      "icon": "🦄",
      "name": "Unicorn Logo",
      "cost": 250
    },
    {
      "id": "logo-octo",
      "kind": "logo",
      "icon": "🐙",
      "name": "Octo Logo",
      "cost": 250
    },
    {
      "id": "logo-gem",
      "kind": "logo",
      "icon": "💎",
      "name": "Gem Logo",
      "cost": 320
    },
    {
      "id": "b-fountain",
      "kind": "building",
      "icon": "⛲",
      "name": "Plasma Fountain",
      "cost": 280
    },
    {
      "id": "b-cafe",
      "kind": "building",
      "icon": "🍔",
      "name": "Cosmic Café",
      "cost": 300
    },
    {
      "id": "b-green",
      "kind": "building",
      "icon": "🌿",
      "name": "Sky Greenhouse",
      "cost": 360
    },
    {
      "id": "b-arcade",
      "kind": "building",
      "icon": "🕹️",
      "name": "Arcade",
      "cost": 400
    },
    {
      "id": "b-obs",
      "kind": "building",
      "icon": "🔭",
      "name": "Observatory",
      "cost": 420
    },
    {
      "id": "b-hangar",
      "kind": "building",
      "icon": "✈️",
      "name": "Hangar",
      "cost": 480
    },
    {
      "id": "b-pit",
      "kind": "building",
      "icon": "🤖",
      "name": "Robot Pit Crew",
      "cost": 600
    },
    {
      "id": "skin-default",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌌",
      "name": "Galactic Default",
      "cost": 0
    },
    {
      "id": "skin-neon",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌃",
      "name": "Neon Tokyo",
      "cost": 700
    },
    {
      "id": "skin-candy",
      "kind": "skin",
      "cur": "shards",
      "icon": "🍭",
      "name": "Candy Pop",
      "cost": 700
    },
    {
      "id": "skin-gold",
      "kind": "skin",
      "cur": "shards",
      "icon": "🪙",
      "name": "Gold Rush",
      "cost": 850
    },
    {
      "id": "skin-ocean",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌊",
      "name": "Ocean Deep",
      "cost": 850
    },
    {
      "id": "skin-matrix",
      "kind": "skin",
      "cur": "shards",
      "icon": "🟩",
      "name": "Matrix Green",
      "cost": 1000
    },
    {
      "id": "skin-vapor",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌴",
      "name": "Vaporwave",
      "cost": 1100
    },
    {
      "id": "skin-lava",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌋",
      "name": "Lava Lamp",
      "cost": 1200
    },
    {
      "id": "skin-royal",
      "kind": "skin",
      "cur": "shards",
      "icon": "👑",
      "name": "Royal Velvet",
      "cost": 1400
    },
    {
      "id": "font-default",
      "kind": "font",
      "cur": "shards",
      "icon": "Aa",
      "name": "Standard",
      "cost": 0
    },
    {
      "id": "font-mono",
      "kind": "font",
      "cur": "shards",
      "icon": "🖥️",
      "name": "Terminal",
      "cost": 450
    },
    {
      "id": "font-serif",
      "kind": "font",
      "cur": "shards",
      "icon": "📖",
      "name": "Storybook",
      "cost": 450
    },
    {
      "id": "font-marker",
      "kind": "font",
      "cur": "shards",
      "icon": "✏️",
      "name": "Doodle",
      "cost": 550
    },
    {
      "id": "font-tech",
      "kind": "font",
      "cur": "shards",
      "icon": "🛸",
      "name": "Futura Tech",
      "cost": 550
    },
    {
      "id": "font-round",
      "kind": "font",
      "cur": "shards",
      "icon": "🫧",
      "name": "Bubble",
      "cost": 700
    },
    {
      "id": "shape-round",
      "kind": "shape",
      "cur": "shards",
      "icon": "⬜",
      "name": "Rounded",
      "cost": 0
    },
    {
      "id": "shape-sharp",
      "kind": "shape",
      "cur": "shards",
      "icon": "◼️",
      "name": "Sharp Edges",
      "cost": 400
    },
    {
      "id": "shape-pill",
      "kind": "shape",
      "cur": "shards",
      "icon": "💊",
      "name": "Super Pill",
      "cost": 480
    },
    {
      "id": "shape-blob",
      "kind": "shape",
      "cur": "shards",
      "icon": "🫠",
      "name": "Blobby",
      "cost": 550
    },
    {
      "id": "fx-pulse",
      "kind": "fx",
      "cur": "shards",
      "icon": "💓",
      "name": "Pulsing Buttons",
      "cost": 550
    },
    {
      "id": "fx-rainbow",
      "kind": "fx",
      "cur": "shards",
      "icon": "🌈",
      "name": "Rainbow Titles",
      "cost": 700
    },
    {
      "id": "fx-stars",
      "kind": "fx",
      "cur": "shards",
      "icon": "☄️",
      "name": "Meteor Shower",
      "cost": 800
    },
    {
      "id": "fx-glow",
      "kind": "fx",
      "cur": "shards",
      "icon": "💡",
      "name": "Neon Glow",
      "cost": 800
    },
    {
      "id": "fx-flow",
      "kind": "fx",
      "cur": "shards",
      "icon": "🌀",
      "name": "Living Nebula",
      "cost": 950
    },
    {
      "id": "fx-sparkle",
      "kind": "fx",
      "cur": "shards",
      "icon": "✨",
      "name": "Tap Sparkles",
      "cost": 1100
    },
    {
      "id": "accent-studio",
      "kind": "accent",
      "cur": "shards",
      "icon": "🎨",
      "name": "Accent Color Studio",
      "cost": 1600
    },
    {
      "id": "dragon",
      "kind": "ship",
      "icon": "🐉",
      "name": "Star Dragon",
      "cost": 850
    },
    {
      "id": "whale",
      "kind": "ship",
      "icon": "🐋",
      "name": "Star Whale",
      "cost": 800
    },
    {
      "id": "balloon",
      "kind": "ship",
      "icon": "🎈",
      "name": "Sky Balloon",
      "cost": 300
    },
    {
      "id": "crystal",
      "kind": "ship",
      "icon": "🔮",
      "name": "Crystal Voyager",
      "cost": 950
    },
    {
      "id": "paper",
      "kind": "ship",
      "icon": "📜",
      "name": "Paper Glider",
      "cost": 220
    },
    {
      "id": "butterfly",
      "kind": "ship",
      "icon": "🦋",
      "name": "Flutter Scout",
      "cost": 550
    },
    {
      "id": "lunar",
      "kind": "theme",
      "icon": "🌙",
      "name": "Lunar Quiet",
      "cost": 520
    },
    {
      "id": "mars",
      "kind": "theme",
      "icon": "🔴",
      "name": "Red Planet",
      "cost": 520
    },
    {
      "id": "ice",
      "kind": "theme",
      "icon": "🧊",
      "name": "Ice Moon",
      "cost": 540
    },
    {
      "id": "logo-fox",
      "kind": "logo",
      "icon": "🦊",
      "name": "Fox Badge",
      "cost": 220
    },
    {
      "id": "logo-cat",
      "kind": "logo",
      "icon": "🐱",
      "name": "Cat Badge",
      "cost": 220
    },
    {
      "id": "logo-blossom",
      "kind": "logo",
      "icon": "🌸",
      "name": "Blossom Badge",
      "cost": 280
    },
    {
      "id": "logo-bot",
      "kind": "logo",
      "icon": "🤖",
      "name": "Bot Badge",
      "cost": 300
    },
    {
      "id": "logo-rocket",
      "kind": "logo",
      "icon": "🚀",
      "name": "Rocket Badge",
      "cost": 260
    },
    {
      "id": "b-library",
      "kind": "building",
      "icon": "📚",
      "name": "Library Dome",
      "cost": 450
    },
    {
      "id": "b-music",
      "kind": "building",
      "icon": "🎵",
      "name": "Music Hall",
      "cost": 500
    },
    {
      "id": "b-lab",
      "kind": "building",
      "icon": "🧪",
      "name": "Lab Pod",
      "cost": 560
    },
    {
      "id": "b-garden",
      "kind": "building",
      "icon": "🪴",
      "name": "Zero-G Garden",
      "cost": 480
    },
    {
      "id": "skin-blossom",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌸",
      "name": "Blossom Drift",
      "cost": 900
    },
    {
      "id": "skin-frost",
      "kind": "skin",
      "cur": "shards",
      "icon": "❄️",
      "name": "Frostbite",
      "cost": 950
    },
    {
      "id": "skin-saturn",
      "kind": "skin",
      "cur": "shards",
      "icon": "🪐",
      "name": "Saturn Rings",
      "cost": 1050
    },
    {
      "id": "skin-prism",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌈",
      "name": "Prism Glow",
      "cost": 1150
    },
    {
      "id": "skin-citrus",
      "kind": "skin",
      "cur": "shards",
      "icon": "🍊",
      "name": "Citrus Orbit",
      "cost": 800
    },
    {
      "id": "skin-midnight",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌌",
      "name": "Midnight Observatory",
      "cost": 1000
    },
    {
      "id": "font-hand",
      "kind": "font",
      "cur": "shards",
      "icon": "✍️",
      "name": "Handwritten",
      "cost": 600
    },
    {
      "id": "font-pixel",
      "kind": "font",
      "cur": "shards",
      "icon": "👾",
      "name": "Pixel Cadet",
      "cost": 650
    },
    {
      "id": "shape-hex",
      "kind": "shape",
      "cur": "shards",
      "icon": "⬡",
      "name": "Hex Corners",
      "cost": 520
    },
    {
      "id": "shape-soft",
      "kind": "shape",
      "cur": "shards",
      "icon": "☁️",
      "name": "Cloud Soft",
      "cost": 480
    },
    {
      "id": "fx-bubbles",
      "kind": "fx",
      "cur": "shards",
      "icon": "🫧",
      "name": "Floating Bubbles",
      "cost": 750
    },
    {
      "id": "fx-orbit",
      "kind": "fx",
      "cur": "shards",
      "icon": "💫",
      "name": "Orbiting Stars",
      "cost": 900
    },
    {
      "id": "fx-confetti",
      "kind": "fx",
      "cur": "shards",
      "icon": "🎉",
      "name": "Victory Confetti",
      "cost": 1000
    },
    {
      "id": "fx-softglow",
      "kind": "fx",
      "cur": "shards",
      "icon": "✨",
      "name": "Soft Halo",
      "cost": 700
    }
  ],
  "accents": [
    "#35f0c0",
    "#ff5f8d",
    "#ffc857",
    "#4de1ff",
    "#b6ff00",
    "#c084fc",
    "#ff8a3d",
    "#ff4d4d",
    "#ffffff",
    "#7a8cff",
    "#00ffa3",
    "#ff00e6"
  ],
  "capstones": {}
}, { ach: [
    {id:"first",icon:"🥇",name:"First Discovery",desc:"Complete your first mission in any subject.",test:(S) => Object.values(S.progress).some((p) => Object.keys(p.done).length > 0)},
    {id:"flawless",icon:"💎",name:"Perfect Solution",desc:"Finish a mission with 3 stars.",test:(S) => Object.values(S.progress).some((p) => Object.values(p.done).some((s) => s === 3))},
    {id:"boss",icon:"👾",name:"Boss Challenger",desc:"Defeat a sector boss.",test:(S) => Object.keys(S.bosses).length > 0},
    {id:"master",icon:"🏅",name:"Foundation Master",desc:"Earn a mastery badge in any foundation.",test:(S) => Object.values(S.bonus).some((b) => b.badge)},
    {id:"poly",icon:"🌐",name:"Curious Explorer",desc:"Earn mastery badges in two foundations.",test:(S) => Object.values(S.bonus).filter((b) => b.badge).length >= 2},
    {id:"poly6",icon:"🛸",name:"Multi-Field Cadet",desc:"Earn Master badges in six different bands.",test:(S) => Object.values(S.bonus).filter((b) => b.badge).length >= 6},
    {id:"advunlock",icon:"🌌",name:"Advanced Initiate",desc:"Unlock any Advanced Academy course.",test:(S) => S.advanced && Object.keys(S.advanced).some((k) => S.advanced[k])},
    {id:"speed",icon:"⚡",name:"Quick Thinker",desc:"Win a Mastery Trial quickly.",test:(S) => !!S.stats.speedTrial},
    {id:"daily3",icon:"📅",name:"Daily Brain Builder",desc:"Complete 3 daily challenges.",test:(S) => S.dailyCount >= 3},
    {id:"streak7",icon:"🔥",name:"Week of Wonder",desc:"Reach a 7-day learning streak.",test:(S) => S.streak >= 7},
    {id:"clients",icon:"📨",name:"Practice Champion",desc:"Solve 5 extra practice rounds.",test:(S) => S.stats.requests >= 5},
    {id:"builder",icon:"🏗️",name:"Galaxy Builder",desc:"Own 3 academy buildings.",test:(S) => Object.keys(S.owned).filter((k) => k.indexOf('b-') === 0).length >= 3},
    {id:"capstone",icon:"🎓",name:"Learning Graduate",desc:"Complete a capstone activity.",test:(S) => Object.keys(S.capstoneDone).length > 0},
    {id:"ceo",icon:"👑",name:"Galaxy Legend",desc:"Reach the top academy rank.",test:(S) => S.xp >= 1600},
    {id:"survivor",icon:"🔥",name:"Gauntlet Survivor",desc:"Reach round 10 in the Endless Gauntlet.",test:(S) => Object.values(S.survival).some((s) => s.best >= 10)},
    {id:"unstoppable",icon:"🚀",name:"Gauntlet Champion",desc:"Reach round 25 in the Endless Gauntlet.",test:(S) => Object.values(S.survival).some((s) => s.best >= 25)},
    {id:"designer",icon:"🎨",name:"Academy Designer",desc:"Own 3 customization items.",test:(S) => ['skin-', 'font-', 'shape-', 'fx-', 'accent-'].reduce((n, p) => n + Object.keys(S.owned).filter((k) => k.indexOf(p) === 0).length, 0) >= 3}
  ] });
