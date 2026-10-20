/* Inline SVG diagrams for Galactic Academy lessons (offline, no assets). */
(() => {
  'use strict';
  const svg = (inner, w = 320, h = 160) =>
    `<div class="diagram" role="img">${inner.replace('<svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="auto"`)}</div>`;

  window.DIAGRAMS = {
    fractionBar(filled = 1, total = 4, label = '') {
      const w = 280, h = 56, gap = 4;
      const cell = (w - gap * (total - 1)) / total;
      let rects = '';
      for (let i = 0; i < total; i++) {
        const x = i * (cell + gap);
        const on = i < filled;
        rects += `<rect x="${x}" y="12" width="${cell}" height="32" rx="6" fill="${on ? '#8b6cff' : '#ffffff18'}" stroke="#ffffff44"/>`;
      }
      return svg(`<svg><text x="0" y="10" fill="#c8d0ff" font-size="12" font-family="system-ui">${label || filled + '/' + total}</text>${rects}</svg>`, 300, 56);
    },
    numberLine(min = 0, max = 10, marks = [0, 5, 10], point = null) {
      const x0 = 20, x1 = 300, y = 50;
      const map = (n) => x0 + ((n - min) / (max - min)) * (x1 - x0);
      let ticks = '';
      for (let n = min; n <= max; n++) {
        const x = map(n);
        ticks += `<line x1="${x}" y1="${y - 6}" x2="${x}" y2="${y + 6}" stroke="#ffffff55"/><text x="${x}" y="${y + 22}" text-anchor="middle" fill="#aab4e8" font-size="11">${n}</text>`;
      }
      const dot = point != null ? `<circle cx="${map(point)}" cy="${y}" r="7" fill="#35f0c0"/><text x="${map(point)}" y="${y - 14}" text-anchor="middle" fill="#35f0c0" font-size="12">${point}</text>` : '';
      return svg(`<svg><line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#8b6cff" stroke-width="3"/>${ticks}${dot}</svg>`, 320, 80);
    },
    placeValue(digits = ['4', '5', '8', '2'], labels = ['Thousands', 'Hundreds', 'Tens', 'Ones']) {
      const cell = 70;
      let boxes = '';
      digits.forEach((d, i) => {
        const x = 10 + i * (cell + 8);
        boxes += `<rect x="${x}" y="20" width="${cell}" height="50" rx="10" fill="#3989e833" stroke="#8ddcff88"/><text x="${x + cell / 2}" y="52" text-anchor="middle" fill="#fff" font-size="22" font-weight="700">${d}</text><text x="${x + cell / 2}" y="90" text-anchor="middle" fill="#aab4e8" font-size="10">${labels[i] || ''}</text>`;
      });
      return svg(`<svg>${boxes}</svg>`, 320, 100);
    },
    compass() {
      return svg(`<svg>
        <circle cx="100" cy="80" r="60" fill="#16122e" stroke="#8b6cff" stroke-width="3"/>
        <circle cx="100" cy="80" r="4" fill="#35f0c0"/>
        <polygon points="100,28 108,80 100,72 92,80" fill="#ff5f8d"/>
        <polygon points="100,132 108,80 100,88 92,80" fill="#ffffff44"/>
        <text x="100" y="22" text-anchor="middle" fill="#ff5f8d" font-size="14" font-weight="700">N</text>
        <text x="100" y="150" text-anchor="middle" fill="#aab4e8" font-size="12">S</text>
        <text x="168" y="84" text-anchor="middle" fill="#aab4e8" font-size="12">E</text>
        <text x="32" y="84" text-anchor="middle" fill="#aab4e8" font-size="12">W</text>
      </svg>`, 200, 160);
    },
    waterCycle() {
      return svg(`<svg>
        <ellipse cx="160" cy="140" rx="120" ry="16" fill="#3989e844"/>
        <text x="160" y="144" text-anchor="middle" fill="#8ddcff" font-size="11">Ocean / lake</text>
        <path d="M80 130 C70 90, 90 50, 120 40" fill="none" stroke="#8ddcff" stroke-width="2" marker-end="url(#a)"/>
        <text x="70" y="85" fill="#8ddcff" font-size="10">Evaporation</text>
        <ellipse cx="160" cy="36" rx="50" ry="18" fill="#ffffff33"/>
        <text x="160" y="40" text-anchor="middle" fill="#fff" font-size="10">Clouds</text>
        <path d="M200 50 C220 80, 230 110, 220 130" fill="none" stroke="#35f0c0" stroke-width="2"/>
        <text x="230" y="95" fill="#35f0c0" font-size="10">Rain</text>
        <text x="160" y="118" text-anchor="middle" fill="#c8d0ff" font-size="10">Collection</text>
      </svg>`, 320, 160);
    },
    lungs() {
      return svg(`<svg>
        <path d="M120 30 L120 50 L90 70 L70 120 Q60 150 90 155 L120 140 L120 160" fill="#ff5f8d44" stroke="#ff5f8d" stroke-width="2"/>
        <path d="M120 30 L120 50 L150 70 L170 120 Q180 150 150 155 L120 140 L120 160" fill="#ff5f8d44" stroke="#ff5f8d" stroke-width="2"/>
        <line x1="120" y1="20" x2="120" y2="50" stroke="#8ddcff" stroke-width="3"/>
        <text x="120" y="16" text-anchor="middle" fill="#8ddcff" font-size="11">Windpipe</text>
        <text x="70" y="100" fill="#ffb4c8" font-size="11">Left lung</text>
        <text x="155" y="100" fill="#ffb4c8" font-size="11">Right lung</text>
      </svg>`, 240, 170);
    },
    plantParts() {
      return svg(`<svg>
        <rect x="148" y="70" width="8" height="60" fill="#35f0c0"/>
        <ellipse cx="152" cy="55" rx="28" ry="18" fill="#35f0c088" stroke="#35f0c0"/>
        <ellipse cx="130" cy="70" rx="16" ry="10" fill="#35f0c066"/>
        <ellipse cx="174" cy="70" rx="16" ry="10" fill="#35f0c066"/>
        <path d="M152 130 Q130 150 120 160" stroke="#c4a574" fill="none" stroke-width="3"/>
        <path d="M152 130 Q174 150 184 160" stroke="#c4a574" fill="none" stroke-width="3"/>
        <text x="200" y="55" fill="#c8d0ff" font-size="11">Leaf</text>
        <text x="200" y="100" fill="#c8d0ff" font-size="11">Stem</text>
        <text x="200" y="155" fill="#c8d0ff" font-size="11">Roots</text>
      </svg>`, 280, 170);
    },
    coordinatePlane(points = [[2, 3]]) {
      const o = 40, scale = 22;
      let grid = '';
      for (let i = 0; i <= 6; i++) {
        const v = o + i * scale;
        grid += `<line x1="${o}" y1="${v}" x2="${o + 6 * scale}" y2="${v}" stroke="#ffffff18"/><line x1="${v}" y1="${o}" x2="${v}" y2="${o + 6 * scale}" stroke="#ffffff18"/>`;
        grid += `<text x="${v}" y="${o + 6 * scale + 14}" text-anchor="middle" fill="#889" font-size="10">${i}</text>`;
        grid += `<text x="${o - 10}" y="${o + 6 * scale - i * scale + 4}" text-anchor="end" fill="#889" font-size="10">${i}</text>`;
      }
      grid += `<line x1="${o}" y1="${o + 6 * scale}" x2="${o + 6 * scale}" y2="${o + 6 * scale}" stroke="#8b6cff" stroke-width="2"/>`;
      grid += `<line x1="${o}" y1="${o}" x2="${o}" y2="${o + 6 * scale}" stroke="#8b6cff" stroke-width="2"/>`;
      points.forEach(([x, y]) => {
        const px = o + x * scale, py = o + 6 * scale - y * scale;
        grid += `<circle cx="${px}" cy="${py}" r="6" fill="#35f0c0"/><text x="${px + 10}" y="${py - 6}" fill="#35f0c0" font-size="11">(${x},${y})</text>`;
      });
      return svg(`<svg>${grid}</svg>`, 220, 200);
    },
    statesOfMatter() {
      return svg(`<svg>
        <g transform="translate(20,40)">
          <circle cx="12" cy="12" r="6" fill="#8b6cff"/><circle cx="28" cy="12" r="6" fill="#8b6cff"/><circle cx="12" cy="28" r="6" fill="#8b6cff"/><circle cx="28" cy="28" r="6" fill="#8b6cff"/>
          <text x="20" y="55" text-anchor="middle" fill="#c8d0ff" font-size="11">Solid</text>
        </g>
        <g transform="translate(120,40)">
          <circle cx="10" cy="10" r="6" fill="#35f0c0"/><circle cx="32" cy="14" r="6" fill="#35f0c0"/><circle cx="18" cy="30" r="6" fill="#35f0c0"/><circle cx="36" cy="32" r="6" fill="#35f0c0"/>
          <text x="22" y="55" text-anchor="middle" fill="#c8d0ff" font-size="11">Liquid</text>
        </g>
        <g transform="translate(220,40)">
          <circle cx="8" cy="8" r="5" fill="#ff5f8d"/><circle cx="36" cy="12" r="5" fill="#ff5f8d"/><circle cx="16" cy="34" r="5" fill="#ff5f8d"/><circle cx="40" cy="36" r="5" fill="#ff5f8d"/>
          <text x="24" y="55" text-anchor="middle" fill="#c8d0ff" font-size="11">Gas</text>
        </g>
      </svg>`, 300, 110);
    }
  };
})();
