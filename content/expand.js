/* Content expansion: deeper missions + diagram-enhanced lessons. Loads after subject files. */
(() => {
  'use strict';
  const D = window.DIAGRAMS || {};
  const mc = (q, options, answer, why, code = null, textOpts = true) => ({ type: 'mc', q, options, answer, why, code, textOpts });
  const fill = (q, answers, why, code = null) => ({ type: 'fill', q, answers: answers.map(String), why, code, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson">${html}</div>`;
  const level = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  function pushLevels(courseId, levels) {
    const c = window.COURSES[courseId];
    if (!c || !c.levels) return;
    const have = new Set(c.levels.map((l) => l.id));
    levels.forEach((l) => { if (!have.has(l.id)) c.levels.push(l); });
  }
  function rebuildGauntlet(courseId) {
    const c = window.COURSES[courseId];
    if (!c) return;
    const qs = c.levels.flatMap((l) => l.challenges || []).filter((q) => q.type === 'mc');
    const make = (tier) => () => {
      if (!qs.length) return { type: 'mc', q: 'Practice more missions first!', options: ['OK'], answer: 0, why: 'Complete missions first.' };
      const q = Object.assign({}, qs[Math.floor(Math.random() * qs.length)]);
      if (tier >= 2) q.q = q.q + ' (think carefully)';
      return q;
    };
    window.SURVIVAL = window.SURVIVAL || {};
    window.SURVIVAL[courseId] = [0, 1, 2, 3].map(make);
  }

  // —— Math: strengthen middle school ——
  pushLevels('math_middle', [
    level('🧭 Pre-Algebra', 'ma10b', 'Evaluating Expressions', 'Substitute values into expressions with multiple operations', '🧩', 'Expression Engineers', 'Substation Kit', 'Power the station by evaluating expressions correctly.',
      `<h3>Plug in, then compute</h3>${D.numberLine ? D.numberLine(0, 12, [0, 6, 12], 9) : ''}
      <p>To evaluate an expression, replace the variable with the given number, then use order of operations.</p>
      <p>Example: If <b>n = 4</b>, then <b>3n + 2 = 3×4 + 2 = 12 + 2 = 14</b>.</p>
      <p>Parentheses first: <b>2(n + 5)</b> with n = 3 is <b>2(8) = 16</b>, not 2×3+5.</p>`, [
        fill('If x = 5, what is 2x + 3?', ['13'], '2×5 + 3 = 10 + 3 = 13.'),
        mc('If a = 6, evaluate 20 − a.', ['14', '26', '120', '6'], 0, '20 − 6 = 14.'),
        fill('If y = 3, what is 4(y + 2)?', ['20'], 'y + 2 = 5; 4×5 = 20.'),
        mc('If n = 2, what is n² + 1?', ['5', '4', '3', '9'], 0, '2² = 4; 4 + 1 = 5.'),
        fill('If x = 10, evaluate x/2 − 1.', ['4'], '10/2 − 1 = 5 − 1 = 4.')
      ], '#8b6cff'),
    level('🧭 Pre-Algebra', 'ma10c', 'Integers & Number Lines', 'Positive and negative numbers on a number line', '➖', 'Integer Station', 'Charge Tracker', 'Balance positive and negative power charges.',
      `<h3>Integers live on both sides of zero</h3>${D.numberLine ? D.numberLine(-5, 5, [-5, 0, 5], -2) : ''}
      <p><b>Integers</b> are whole numbers and their opposites: … −2, −1, 0, 1, 2 …</p>
      <p>Moving right on the number line adds; moving left subtracts. The opposite of 4 is −4.</p>
      <p>Example: From −2, add 5 → land on 3. From 3, subtract 6 → land on −3.</p>`, [
        mc('Which number is farthest left on a number line?', ['−1', '0', '2', '−4'], 3, '−4 is the least (farthest left).'),
        fill('What is the opposite of 7?', ['-7', '−7'], 'Opposites sum to zero: 7 + (−7) = 0.'),
        mc('Start at −3 and add 5. Where do you land?', ['2', '−8', '8', '−2'], 0, '−3 + 5 = 2.'),
        fill('Start at 4 and subtract 9. Where do you land?', ['-5', '−5'], '4 − 9 = −5.'),
        mc('Which inequality is true?', ['−2 > 1', '−5 < −1', '0 < −3', '−4 > 0'], 1, '−5 is left of −1, so −5 < −1.')
      ], '#c084fc'),
    level('🧭 Pre-Algebra', 'ma10d', 'Two Operations & Word Problems', 'Translate stories into equations and solve', '📝', 'Story Algebra Crew', 'Mission Brief Decoder', 'Turn word problems into equations the computer can solve.',
      `<h3>From words to equations</h3>
      <p>“5 more than a number” → <b>n + 5</b>. “Twice a number” → <b>2n</b>. “A number decreased by 3” → <b>n − 3</b>.</p>
      <p>Example: “A number times 4 is 28.” → <b>4n = 28</b> → n = 7.</p>
      <p>Always define what the variable stands for, then check by substituting back.</p>`, [
        mc('“6 less than x” is written as:', ['6 − x', 'x − 6', '6x', 'x + 6'], 1, 'Less than means subtract from the number: x − 6.'),
        fill('Solve: A number times 5 is 45. What is the number?', ['9'], '5n = 45 → n = 9.'),
        mc('You have n packs. You buy 3 more and now have 11. Equation?', ['n − 3 = 11', 'n + 3 = 11', '3n = 11', 'n = 11 + 3'], 1, 'Start with n, add 3, total 11.'),
        fill('A number decreased by 8 equals 12. What is the number?', ['20'], 'n − 8 = 12 → n = 20.'),
        mc('Twice a number is 18. The number is:', ['9', '16', '20', '36'], 0, '2n = 18 → n = 9.')
      ], '#8b6cff')
  ]);

  // —— Math basic: diagram-enhanced place value already exists; add geometry intro ——
  pushLevels('math_basic', [
    level('🌱 Number Sense', 'ma4b', 'Shapes & Simple Area', 'Name shapes and find area of rectangles', '⬜', 'Shape Scouts', 'Deck Layout Grid', 'Measure panels for the ship deck.',
      `<h3>Shapes and area</h3>
      <p>A <b>rectangle</b> has 4 right angles. <b>Area</b> of a rectangle = length × width (square units).</p>
      <p>Example: A 5-by-3 panel has area 15 square units.</p>
      <p>Perimeter is the distance around: add all sides. A 5-by-3 rectangle has perimeter 5+3+5+3 = 16.</p>`, [
        mc('A rectangle is 4 units long and 2 units wide. Area?', ['6', '8', '10', '16'], 1, '4 × 2 = 8.'),
        fill('Perimeter of a 6-by-2 rectangle?', ['16'], '6+2+6+2 = 16.'),
        mc('How many sides does a triangle have?', ['3', '4', '5', '6'], 0, 'Tri- means three.'),
        fill('Area of a 7-by-3 rectangle?', ['21'], '7 × 3 = 21.'),
        mc('A square has side 5. Area?', ['10', '20', '25', '15'], 2, '5 × 5 = 25.')
      ], '#45b7d1')
  ]);

  // —— Math intermediate: fraction visual ——
  pushLevels('math_intermediate', [
    level('🌿 Number Lab', 'ma5b', 'Fraction Pictures', 'Read and compare fractions with models', '📊', 'Fraction Forge', 'Portion Scanner', 'Match cargo portions to fraction cards.',
      `<h3>See the fraction</h3>${D.fractionBar ? D.fractionBar(3, 4, '3 out of 4 equal parts = 3/4') : ''}
      <p>The bottom number (denominator) tells how many equal parts. The top (numerator) tells how many parts you have.</p>
      ${D.fractionBar ? D.fractionBar(1, 2, '1/2') : ''}${D.fractionBar ? D.fractionBar(2, 4, '2/4 — same amount as 1/2') : ''}
      <p>Equal fractions name the same amount. 1/2 = 2/4 = 3/6.</p>`, [
        mc('In 3/5, the denominator is:', ['3', '5', '8', '15'], 1, 'Denominator is the bottom number: 5.'),
        fill('How many equal parts are in a whole for fourths?', ['4'], 'Fourths means 4 equal parts.'),
        mc('Which equals 1/2?', ['1/3', '2/4', '2/3', '3/5'], 1, '2/4 is the same amount as 1/2.'),
        mc('Which fraction is greater?', ['1/4', '1/2', '1/8', '1/10'], 1, '1/2 is half; the others are smaller pieces.'),
        fill('Shade 2 of 5 equal parts. What fraction?', ['2/5', '2 / 5'], 'Numerator 2, denominator 5.')
      ], '#f4a261')
  ]);

  // —— Geography expansion ——
  pushLevels('geo_basic', [
    level('🧭 Map Skills', 'geo-m2', 'Map Scale & Distance', 'Use scale to estimate real distances', '📏', 'Survey Corps', 'Scale Ruler', 'Estimate travel distance between outposts.',
      `<h3>Scale turns map cm into real km</h3>
      <p>If 1 cm on the map = 50 km in real life, then 3 cm = 150 km.</p>
      <p>Always check the scale bar. Maps of cities use smaller distances than maps of continents.</p>`, [
        fill('Scale: 1 cm = 20 km. A path is 4 cm on the map. Real distance?', ['80', '80 km'], '4 × 20 = 80 km.'),
        mc('Scale 1 cm = 100 km. 2.5 cm equals:', ['25 km', '250 km', '2.5 km', '100 km'], 1, '2.5 × 100 = 250.'),
        mc('Which map needs the largest scale number per cm (more km)?', ['a classroom', 'a continent', 'a desk', 'a playground'], 1, 'Continents cover huge distances.'),
        fill('Scale 1 cm = 5 km. 10 cm on the map is how many km?', ['50', '50 km'], '10 × 5 = 50.'),
        mc('A scale bar helps you:', ['color the map', 'estimate real distance', 'find the author only', 'change climate'], 1, 'Scale connects map measure to real distance.')
      ], '#4ecdc4'),
    level('🌍 Earth Systems', 'geo-l2', 'Water & the Water Cycle', 'Evaporation, condensation, precipitation, collection', '💧', 'Hydro Crew', 'Cycle Chart', 'Explain how water moves through the planet system.',
      `<h3>Water keeps moving</h3>${D.waterCycle ? D.waterCycle() : ''}
      <p><b>Evaporation</b> — liquid water becomes vapor. <b>Condensation</b> — vapor forms clouds. <b>Precipitation</b> — rain or snow falls. <b>Collection</b> — water gathers in rivers, lakes, oceans.</p>`, [
        mc('Water vapor turning into cloud droplets is:', ['evaporation', 'condensation', 'erosion', 'rotation'], 1, 'Condensation forms clouds.'),
        fill('Name the step when rain falls from clouds.', ['precipitation', 'rain', 'precip'], 'Precipitation is rain, snow, sleet, or hail.'),
        mc('The sun mainly powers which step?', ['collection only', 'evaporation', 'earthquakes', 'map scale'], 1, 'Heat from the sun drives evaporation.'),
        mc('Rivers carrying water back to the ocean is part of:', ['collection / runoff', 'condensation only', 'constellations', 'prime meridian'], 0, 'Runoff and collection return water.'),
        fill('Liquid water becoming gas is called:', ['evaporation'], 'Evaporation changes liquid to vapor.')
      ], '#45b7d1')
  ]);

  pushLevels('geo_places', [
    level('🗺️ World', 'geo-w2', 'Latitude & Climate Bands', 'How latitude relates to climate zones', '🌡️', 'Climate Cartographers', 'Zone Overlay', 'Match climate zones to latitude bands.',
      `<h3>Latitude and climate</h3>
      <p>Near the <b>equator</b> (0°) it is generally warmer. Toward the <b>poles</b> (90° N/S) it is colder.</p>
      <p>Tropics, temperate zones, and polar zones are broad climate bands — local mountains and oceans also matter.</p>`, [
        mc('Which region is generally warmest?', ['polar', 'near the equator', 'only the south pole', 'always deserts at poles'], 1, 'Equatorial regions get more direct sunlight.'),
        fill('The equator is at what latitude?', ['0', '0°', '0 degrees'], 'Equator = 0° latitude.'),
        mc('Polar zones are found:', ['only on the equator', 'near high latitudes', 'only in oceans', 'only at 45°'], 1, 'High latitudes are near the poles.'),
        mc('Temperate zones are:', ['between tropics and polar regions', 'only at the poles', 'exactly on the equator', 'underground'], 0, 'Mid-latitudes are temperate.'),
        fill('90° N is the name of which pole?', ['north', 'north pole', 'the north pole'], '90°N is the North Pole.')
      ], '#2a9d8f'),
    level('🗺️ World', 'geo-w3', 'Major Rivers & Mountains', 'Famous landforms that shape regions', '🏔️', 'Landform League', 'Peak & River Map', 'Identify landmark landforms from clues.',
      `<h3>Landforms shape life</h3>
      <p>The <b>Amazon</b> is a vast river system in South America. The <b>Nile</b> flows through northeastern Africa. The <b>Himalayas</b> hold Earth’s highest peaks. The <b>Rockies</b> run through western North America.</p>`, [
        mc('The Amazon River is primarily in:', ['Africa', 'South America', 'Europe', 'Antarctica'], 1, 'Amazon basin is in South America.'),
        fill('Which mountain range includes Mount Everest?', ['Himalayas', 'the Himalayas', 'Himalaya'], 'Everest is in the Himalayas.'),
        mc('The Nile River is associated with:', ['Egypt and northeastern Africa', 'only Canada', 'Australia only', 'the Moon'], 0, 'Nile runs through northeastern Africa.'),
        mc('The Rocky Mountains are in:', ['western North America', 'central Australia', 'eastern Europe only', 'Antarctica only'], 0, 'Rockies stretch through western North America.'),
        fill('Name a major river in South America.', ['Amazon', 'the Amazon', 'Amazon River'], 'Amazon is the classic answer.')
      ], '#e9c46a')
  ]);

  pushLevels('geo_people', [
    level('👥 Human Geography', 'geo-h2', 'Cities & Population', 'Why people settle where they do', '🏙️', 'Settlement Study Team', 'City Site Scanner', 'Choose good settlement sites from geographic clues.',
      `<h3>Why cities grow</h3>
      <p>People often settle near <b>fresh water</b>, trade routes, fertile land, and safe harbors. Harsh deserts and high ice sheets support fewer large cities.</p>`, [
        mc('A common reason for a city location is:', ['random chance only', 'access to water and trade', 'avoiding all rivers', 'being as cold as possible'], 1, 'Water and trade support growth.'),
        fill('Name one resource that helps settlements thrive.', ['water', 'fresh water', 'food', 'fertile land', 'trade'], 'Water and food are classic needs.'),
        mc('Large populations are least likely in:', ['river valleys', 'deep interior Antarctica', 'coastal ports', 'fertile plains'], 1, 'Antarctica is extremely harsh.'),
        mc('A harbor city often grows because of:', ['trade by ship', 'no transportation', 'only underground living', 'lack of water'], 0, 'Harbors support trade.'),
        fill('People, goods, and ideas moving from place to place is called:', ['migration', 'movement', 'trade', 'diffusion'], 'Movement/migration/trade are acceptable themes.')
      ], '#e76f51'),
    level('👥 Human Geography', 'geo-h3', 'Natural Resources & Care', 'Resources, conservation, and stewardship', '🌱', 'Stewardship Guild', 'Resource Balance Sheet', 'Plan wise use of limited resources.',
      `<h3>Resources and responsibility</h3>
      <p><b>Renewable</b> resources can replenish (sunlight, wind, carefully managed forests). <b>Nonrenewable</b> resources can run out (coal, oil mined faster than they form).</p>
      <p>Conservation means using resources carefully so people and nature can thrive together.</p>`, [
        mc('Which is renewable?', ['coal', 'sunlight', 'oil', 'ancient minerals only'], 1, 'Sunlight continually arrives.'),
        fill('Using resources carefully is called:', ['conservation', 'conserve', 'stewardship'], 'Conservation/stewardship.'),
        mc('Oil is generally considered:', ['renewable like sunlight', 'nonrenewable', 'not a resource', 'only a cloud type'], 1, 'Oil forms too slowly to replace quickly.'),
        mc('Planting trees after harvest is an example of:', ['ignoring resources', 'stewardship', 'stopping the water cycle', 'erasing maps'], 1, 'Stewardship cares for future use.'),
        fill('Name one nonrenewable energy resource.', ['oil', 'coal', 'natural gas', 'gas'], 'Fossil fuels are nonrenewable.')
      ], '#2a9d8f')
  ]);

  // —— Science expansion with diagrams ——
  pushLevels('science_basic', [
    level('🔬 Life & Matter', 'sci-b6', 'Plant Parts & Jobs', 'Roots, stems, leaves and what they do', '🌿', 'Botany Bay', 'Plant Systems Chart', 'Match each plant part to its job.',
      `<h3>Plant parts work together</h3>${D.plantParts ? D.plantParts() : ''}
      <p><b>Roots</b> take in water and minerals and anchor the plant. <b>Stems</b> support and transport. <b>Leaves</b> capture sunlight for photosynthesis.</p>`, [
        mc('Which part mainly captures sunlight?', ['roots', 'leaves', 'only flowers', 'rocks'], 1, 'Leaves are the main photosynthetic organs.'),
        fill('Which part anchors the plant and absorbs water?', ['roots', 'root'], 'Roots anchor and absorb.'),
        mc('Stems mainly:', ['transport and support', 'only absorb from soil', 'block all sunlight', 'turn into animals'], 0, 'Stems support and move materials.'),
        mc('Photosynthesis happens mainly in:', ['leaves', 'only roots deep underground', 'only animal lungs', 'metal'], 0, 'Leaves are specialized for photosynthesis.'),
        fill('Name the plant part that absorbs minerals from soil.', ['roots', 'root'], 'Roots absorb water and minerals.')
      ], '#35f0c0'),
    level('🔬 Life & Matter', 'sci-b7', 'States of Matter Lab', 'Solid, liquid, gas particle ideas', '🧊', 'Matter Lab', 'Phase Viewer', 'Classify materials by state and motion.',
      `<h3>States of matter</h3>${D.statesOfMatter ? D.statesOfMatter() : ''}
      <p>In a <b>solid</b>, particles are packed and vibrate in place. In a <b>liquid</b>, they slide past each other. In a <b>gas</b>, they move freely and spread out.</p>
      <p>Heating can melt ice (solid→liquid) or boil water (liquid→gas). Cooling can reverse those changes.</p>`, [
        mc('Particles closest together are usually in a:', ['gas', 'solid', 'vacuum only', 'sound wave'], 1, 'Solids are tightly packed.'),
        fill('Ice melting becomes which state?', ['liquid', 'water', 'liquid water'], 'Melting produces liquid water.'),
        mc('Air inside a balloon is best described as a:', ['solid', 'liquid', 'gas', 'plant'], 2, 'Air is a mixture of gases.'),
        mc('Boiling water is mainly a change from:', ['liquid to gas', 'gas to solid', 'solid to solid only', 'plant to animal'], 0, 'Boiling: liquid → gas.'),
        fill('Name the state of matter of a rock at room temperature.', ['solid'], 'Rocks are solids.')
      ], '#8ddcff')
  ]);

  pushLevels('science_intermediate', [
    level('⚙️ Systems', 'sci-i6', 'Breathing System', 'Lungs and oxygen delivery basics', '💨', 'Respiration Team', 'Breathing Blueprint', 'Trace the path of oxygen into the body.',
      `<h3>Breathing basics</h3>${D.lungs ? D.lungs() : ''}
      <p>Air enters through the nose or mouth, travels down the windpipe, and reaches the <b>lungs</b>. Oxygen moves into the blood; carbon dioxide moves out to be exhaled.</p>
      <p>Exercise increases breathing rate because muscles need more oxygen.</p>`, [
        mc('Oxygen enters the blood mainly in the:', ['lungs', 'only the stomach', 'only skin hair', 'bones only'], 0, 'Gas exchange occurs in the lungs.'),
        fill('The tube that carries air toward the lungs is the:', ['windpipe', 'trachea', 'airway'], 'Windpipe/trachea.'),
        mc('We exhale mainly to remove:', ['oxygen only', 'carbon dioxide', 'only sunlight', 'only protein'], 1, 'CO₂ is expelled when we breathe out.'),
        mc('During exercise, breathing usually:', ['stops', 'increases', 'becomes unnecessary', 'only happens underwater'], 1, 'Muscles demand more oxygen.'),
        fill('Name the main organs of breathing.', ['lungs', 'the lungs'], 'Lungs are the main organs.')
      ], '#ff5f8d')
  ]);

  pushLevels('science_middle', [
    level('🔎 Inquiry', 'sci-m6', 'Coordinate Data & Graphs', 'Plot simple scientific data', '📈', 'Data Deck', 'Graphing Grid', 'Plot sample measurements on a grid.',
      `<h3>Graphs show patterns</h3>${D.coordinatePlane ? D.coordinatePlane([[1, 2], [3, 4]]) : ''}
      <p>On a coordinate grid, the first number is <b>x</b> (across) and the second is <b>y</b> (up). Point (2, 3) is 2 right and 3 up from the origin.</p>
      <p>Scientists use graphs to see trends — for example, plant height over days.</p>`, [
        mc('In point (4, 1), the x-value is:', ['4', '1', '5', '0'], 0, 'First number is x.'),
        fill('What is the y-value of (2, 7)?', ['7'], 'Second number is y.'),
        mc('The origin is:', ['(0,0)', '(1,1)', '(0,1)', '(1,0)'], 0, 'Origin is (0,0).'),
        mc('A point 3 right and 2 up from origin is:', ['(2,3)', '(3,2)', '(3,3)', '(2,2)'], 1, 'x=3, y=2 → (3,2).'),
        fill('Write the point 1 across and 4 up.', ['(1,4)', '(1, 4)', '1,4'], '(1,4).')
      ], '#8b6cff')
  ]);

  // —— Spanish expansion ——
  pushLevels('spanish_basic', [
    level('🛰️ Echo Bay', 'sp-b6', 'Numbers & Counting', 'Numbers 1–10 and simple age/count phrases', '🔢', 'Count Crew', 'Número Beacon', 'Echo numbers for cargo counts.',
      `<h3>Números</h3>
      <p><b>uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</b></p>
      <p>¿Cuántos?</p><p>— Tres.</p>
      <p>Practice saying the number while looking at sets of objects.</p>`, [
        mc('“Tres” means:', ['two', 'three', 'four', 'five'], 1, 'Tres = three.'),
        fill('Spanish for five?', ['cinco'], 'Cinco = five.'),
        mc('¿Cómo se dice “eight”?', ['ocho', 'nueve', 'dos', 'diez'], 0, 'Ocho = eight.'),
        fill('Spanish for ten?', ['diez'], 'Diez = ten.'),
        mc('“Uno” means:', ['one', 'eleven', 'zero', 'two'], 0, 'Uno = one.')
      ], '#f4a261')
  ]);

  pushLevels('spanish_intermediate', [
    level('📡 Phrase Orbit', 'sp-i6', 'Days & Weather', 'Days of the week and simple weather phrases', '🌤️', 'Weather Relay', 'Día Panel', 'Report the day and weather to mission control.',
      `<h3>Días y el tiempo</h3>
      <p>lunes, martes, miércoles, jueves, viernes, sábado, domingo</p>
      <p>Hace sol. Hace frío. Está lloviendo.</p>`, [
        mc('“Hace sol” means:', ['it is sunny', 'it is snowing', 'it is night only', 'it is Monday'], 0, 'Hace sol = it is sunny.'),
        fill('Spanish for Monday?', ['lunes'], 'Lunes = Monday.'),
        mc('“Está lloviendo” means:', ['it is raining', 'it is hot', 'good night', 'thank you'], 0, 'Está lloviendo = it is raining.'),
        fill('Spanish for Sunday?', ['domingo'], 'Domingo = Sunday.'),
        mc('Viernes is:', ['Friday', 'Monday', 'Sunday', 'Tuesday'], 0, 'Viernes = Friday.')
      ], '#e9c46a')
  ]);

  // —— Civics expansion ——
  pushLevels('civics_basic', [
    level('🏛️ Community', 'civ-b6', 'Leaders & Responsibility', 'Local helpers and shared duties', '🤝', 'Civic Helpers', 'Responsibility Roster', 'Match community roles to responsibilities.',
      `<h3>People who help</h3>
      <p>Communities choose leaders and helpers: mayors, teachers, firefighters, judges. Citizens share responsibility—following fair rules, listening, and helping neighbors.</p>`, [
        mc('A firefighter’s main job is to:', ['ignore emergencies', 'help keep people safe from fires', 'write only music', 'cancel all rules'], 1, 'Firefighters protect people and property.'),
        fill('Following fair rules is a civic:', ['responsibility', 'duty', 'habit'], 'Responsibility/duty.'),
        mc('Teachers mainly help by:', ['blocking learning', 'guiding learning', 'removing all books', 'closing schools always'], 1, 'Teachers guide learning.'),
        mc('Citizens can help a community by:', ['never listening', 'participating and helping others', 'breaking every rule', 'hiding all problems'], 1, 'Participation strengthens community.'),
        fill('Name one community helper.', ['teacher', 'firefighter', 'police', 'doctor', 'mayor', 'nurse'], 'Many valid helpers.')
      ], '#4ecdc4')
  ]);

  pushLevels('civics_middle', [
    level('⚖️ Citizenship', 'civ-m6', 'Media & Informed Citizens', 'Checking sources and respectful debate', '📰', 'Info Integrity Desk', 'Source Checker', 'Practice spotting reliable information habits.',
      `<h3>Informed citizens</h3>
      <p>Free societies need people who check facts, compare sources, and disagree respectfully. A claim is stronger when evidence is clear and sources are trustworthy.</p>`, [
        mc('A good habit for news is:', ['believe every post instantly', 'check sources and evidence', 'never read anything', 'insult anyone who differs'], 1, 'Evidence and sources matter.'),
        fill('Disagreeing politely is part of respectful:', ['debate', 'discussion', 'citizenship'], 'Respectful debate/discussion.'),
        mc('Which is more reliable?', ['a rumor with no source', 'a report with clear evidence', 'a claim that refuses questions', 'a joke presented as law'], 1, 'Evidence strengthens reliability.'),
        mc('Informed citizens should:', ['avoid all facts', 'ask questions and verify', 'silence every opinion', 'ignore elections always'], 1, 'Verification supports democracy.'),
        fill('Name one thing to check when evaluating a claim.', ['source', 'evidence', 'author', 'date', 'facts'], 'Source/evidence/date help.')
      ], '#8b6cff')
  ]);

  // Rebuild gauntlets for expanded courses
  [
    'math_basic', 'math_intermediate', 'math_middle',
    'geo_basic', 'geo_places', 'geo_people',
    'science_basic', 'science_intermediate', 'science_middle',
    'spanish_basic', 'spanish_intermediate',
    'civics_basic', 'civics_middle'
  ].forEach(rebuildGauntlet);

  // Enhance a few existing lessons with diagrams (non-destructive HTML inject)
  function prependDiagram(courseId, levelId, html) {
    const c = window.COURSES[courseId];
    if (!c) return;
    const l = c.levels.find((x) => x.id === levelId);
    if (!l || !l.lesson || l.lesson.indexOf('class="diagram"') >= 0) return;
    l.lesson = l.lesson.replace('<div class="math-lesson">', '<div class="math-lesson">' + html);
  }
  if (D.placeValue) prependDiagram('math_basic', 'ma0', D.placeValue(['6', '2', '4', '1']));
  if (D.compass) prependDiagram('geo_basic', 'geo-m0', D.compass());
  if (D.fractionBar) prependDiagram('math_intermediate', 'ma5', D.fractionBar(1, 2, 'Example: 1/2'));
  if (D.coordinatePlane) prependDiagram('math_high', 'ma13', D.coordinatePlane([[2, 3]]));
})();
