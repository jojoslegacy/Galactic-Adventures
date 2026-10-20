/* Galactic Academy — Advanced courses
   Gated endgame content. Unlock costs and prerequisites are enforced in app.js (ADVANCED registry).
*/
(() => {
  'use strict';
  const mc = (q, options, answer, why) => ({ type: 'mc', q, options, answer, why, textOpts: true });
  const fill = (q, answers, why) => ({ type: 'fill', q, answers: answers.map(String), why, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson advanced-lesson">${html}</div>`;
  const mk = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  window.COURSES = window.COURSES || {};
  window.SURVIVAL = window.SURVIVAL || {};

  const gauntletFrom = (levels) => {
    const qs = levels.flatMap((l) => l.challenges).filter((q) => q.type === 'mc');
    return [0, 1, 2, 3].map((tier) => () => {
      if (!qs.length) return { type: 'mc', q: 'Complete missions first!', options: ['OK'], answer: 0, why: 'Practice missions to fill the gauntlet.' };
      const q = Object.assign({}, qs[Math.floor(Math.random() * qs.length)]);
      if (tier >= 2) q.q = q.q + ' (think carefully)';
      return q;
    });
  };

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED MATHEMATICS
  // ═══════════════════════════════════════════════════════════════
  const mathLevels = [];

  mathLevels.push(mk('📐 Advanced Algebra', 'am0', 'Linear Systems', 'Solve two equations with two unknowns', '𝑥𝑦',
    'Advanced Math Corps', 'System Solver', 'Balance cargo equations so both holds match.',
    `<h3>Systems of linear equations</h3>
    <p>Two equations with the same two variables can have one solution (the lines cross), no solution (parallel), or infinitely many (same line).</p>
    <p><b>Substitution:</b> solve one equation for a variable, plug into the other.<br>
    <b>Elimination:</b> add or subtract equations to cancel a variable.</p>
    <p>Example: x + y = 10 and x − y = 4 → add them: 2x = 14 → x = 7, y = 3.</p>`, [
      mc('The system x + y = 5 and x − y = 1 has solution:', ['x=3, y=2', 'x=2, y=3', 'x=5, y=0', 'x=4, y=1'], 0, 'Add: 2x=6 → x=3; then y=2.'),
      mc('If two lines are parallel and distinct, the system has:', ['one solution', 'no solution', 'infinitely many solutions', 'exactly two solutions'], 1, 'Parallel distinct lines never meet.'),
      fill('Solve: x + y = 12 and x − y = 4. Type the value of x.', ['8'], 'Add the equations: 2x = 16 → x = 8.'),
      mc('Elimination is useful when:', ['equations have matching or opposite coefficients', 'there are no variables', 'only one equation exists', 'graphs are required always'], 0, 'Matching coefficients cancel when added/subtracted.'),
      build('Build the solution pair for x=2, y=5 as “x = 2, y = 5”.', ['x', '=', '2,', 'y', '=', '5'], 'Ordered reporting of both variables.'),
      mc('Infinitely many solutions means the two equations:', ['contradict each other', 'describe the same line', 'are not linear', 'have no variables'], 1, 'Same line → every point on it works.')
    ], '#8b6cff'));

  mathLevels.push(mk('📐 Advanced Algebra', 'am1', 'Quadratic Thinking', 'Parabolas, factoring, and zeros', '𝑥²',
    'Advanced Math Corps', 'Curve Navigator', 'Track a projectile path modeled by a quadratic.',
    `<h3>Quadratic equations</h3>
    <p>A quadratic has form ax² + bx + c = 0 (a ≠ 0). Graph is a <b>parabola</b>.</p>
    <p>Solutions (zeros/roots) can come from factoring, completing the square, or the quadratic formula:<br>
    x = (−b ± √(b² − 4ac)) / (2a)</p>
    <p>The discriminant D = b² − 4ac: D>0 two real roots; D=0 one real root; D<0 no real roots.</p>`, [
      mc('The equation x² − 5x + 6 = 0 factors as:', ['(x−2)(x−3)=0', '(x−1)(x−6)=0', '(x+2)(x+3)=0', '(x−6)(x+1)=0'], 0, '2 and 3 multiply to 6 and add to 5.'),
      mc('If the discriminant is negative, the quadratic has:', ['two real roots', 'one real root', 'no real roots', 'infinitely many roots'], 2, 'D<0 → no real solutions.'),
      fill('For x² − 9 = 0, type one positive root.', ['3'], 'x² = 9 → x = ±3.'),
      mc('The graph of y = x² opens:', ['downward always', 'upward (when a>0)', 'as a straight line', 'as a circle'], 1, 'Positive a → opens up.'),
      mc('Vertex form helps find the:', ['only the y-intercept always', 'turning point (vertex) of the parabola', 'number of sides of a polygon', 'slope of a circle'], 1, 'Vertex is the min/max point.'),
      build('Build: “Discriminant equals b squared minus 4ac.”', ['Discriminant', 'equals', 'b', 'squared', 'minus', '4ac'], 'D = b² − 4ac.')
    ], '#c084fc'));

  mathLevels.push(mk('📐 Advanced Algebra', 'am2', 'Functions & Graphs', 'Inputs, outputs, and function notation', 'ƒ',
    'Advanced Math Corps', 'Function Deck', 'Map inputs to outputs for the navigation computer.',
    `<h3>Functions</h3>
    <p>A <b>function</b> assigns each valid input exactly one output. Notation: f(x) = …</p>
    <p><b>Domain</b> = allowed inputs. <b>Range</b> = possible outputs.</p>
    <p>Linear: f(x) = mx + b. Quadratic: f(x) = ax² + bx + c. Evaluating means substituting the input.</p>
    <p>Vertical line test: if a vertical line hits a graph more than once, it is not a function.</p>`, [
      mc('If f(x) = 2x + 3, then f(4) =', ['8', '11', '5', '2'], 1, '2(4)+3 = 11.'),
      mc('A relation is a function if each input has:', ['two or more outputs', 'exactly one output', 'no outputs', 'only negative outputs'], 1, 'One output per input.'),
      fill('If g(x) = x² − 1, type g(5).', ['24'], '25 − 1 = 24.'),
      mc('Domain of f(x) = 1/x excludes:', ['all positives', 'zero', 'all negatives', 'all integers'], 1, 'Division by zero is undefined.'),
      mc('The vertical line test checks:', ['whether a graph represents a function', 'only slope', 'only area', 'only volume'], 0, 'Multiple hits → not a function.'),
      build('Build: “f of x means the output for input x.”', ['f', 'of', 'x', 'means', 'the', 'output', 'for', 'input', 'x'], 'Function notation meaning.')
    ], '#35f0c0'));

  mathLevels.push(mk('📊 Advanced Data', 'am3', 'Probability Foundations', 'Chance, outcomes, and independence', '🎲',
    'Advanced Math Corps', 'Chance Engine', 'Compute odds for station game outcomes.',
    `<h3>Probability basics</h3>
    <p>P(event) = favorable outcomes / total equally likely outcomes (when that model fits).</p>
    <p>0 ≤ P ≤ 1. P(impossible)=0, P(certain)=1.</p>
    <p>Independent events: P(A and B) = P(A)·P(B). Mutually exclusive: cannot both happen; P(A or B) = P(A)+P(B).</p>`, [
      mc('A fair six-sided die: P(rolling a 4) =', ['1/2', '1/6', '1/3', '4/6'], 1, 'One favorable of six faces.'),
      mc('P(certain event) =', ['0', '1', '1/2', '−1'], 1, 'Certainty has probability 1.'),
      fill('A bag has 3 red and 7 blue marbles. Type P(red) as a fraction a/b.', ['3/10'], '3 red out of 10 total.'),
      mc('Two fair coins: P(both heads) =', ['1/2', '1/4', '1/3', '2/3'], 1, 'Independent: (1/2)×(1/2)=1/4.'),
      mc('Mutually exclusive events:', ['always happen together', 'cannot both occur', 'have probability 2', 'are never independent by definition always'], 1, 'No overlap in outcomes.'),
      build('Build: “Probability is favorable over total.”', ['Probability', 'is', 'favorable', 'over', 'total'], 'Classical probability ratio.')
    ], '#f4a261'));

  mathLevels.push(mk('📊 Advanced Data', 'am4', 'Statistics Sense', 'Mean, median, variability', '📈',
    'Advanced Math Corps', 'Data Core', 'Summarize experiment readings for the science log.',
    `<h3>Describing data</h3>
    <p><b>Mean</b> = average (sum / count). <b>Median</b> = middle value when ordered. <b>Mode</b> = most frequent.</p>
    <p>Mean is pulled by outliers; median is more resistant. Range = max − min (simple spread).</p>
    <p>Always ask: what is typical, and how spread out are the values?</p>`, [
      mc('Mean of 2, 4, 6, 8 is:', ['4', '5', '6', '20'], 1, '(2+4+6+8)/4 = 5.'),
      mc('Median of 1, 3, 100 is:', ['1', '3', '100', '34.7'], 1, 'Ordered middle value is 3.'),
      fill('Type the mean of 10, 20, 30.', ['20'], '60/3 = 20.'),
      mc('An extreme outlier most strongly affects the:', ['median always more than mean', 'mean', 'mode only if unique', 'number of data points always'], 1, 'Mean is sensitive to outliers.'),
      mc('Range of 4, 7, 9, 20 is:', ['4', '16', '9', '20'], 1, '20 − 4 = 16.'),
      build('Build: “Median is the middle value.”', ['Median', 'is', 'the', 'middle', 'value'], 'Definition of median.')
    ], '#e9c46a'));

  mathLevels.push(mk('🚀 Advanced Math Capstone', 'am5', 'Multi-Step Modeling', 'Combine algebra, functions, and data', '🧠',
    'Advanced Math Corps', 'Model Bay', 'Solve a layered problem the way advanced crews do.',
    `<h3>Modeling with multiple tools</h3>
    <p>Real problems rarely use one idea. You may set up equations, interpret a function, and reason about chance or averages in one scenario.</p>
    <p>Habit: define variables, write relations, solve, check units and reasonableness.</p>`, [
      mc('A rocket’s height h(t)= −5t² + 40t (meters, t in seconds). Height at t=2 is:', ['60', '70', '40', '30'], 0, '−5(4)+80 = −20+80=60.'),
      mc('If two independent alarms each fail with P=0.1, P(both fail) ≈', ['0.2', '0.01', '0.1', '1.0'], 1, '0.1 × 0.1 = 0.01.'),
      fill('Solve 2x + 6 = 18. Type x.', ['6'], '2x=12 → x=6.'),
      mc('Mean of 0, 0, 0, 100 is 25. A better “typical” value for most points is closer to:', ['100', '0 (median)', '25 only', '50'], 1, 'Median is 0; mean is skewed by 100.'),
      mc('System: y = 2x and y = x + 3. Intersection x equals:', ['1', '3', '2', '0'], 1, '2x = x+3 → x=3.'),
      build('Build: “Define variables, then write equations.”', ['Define', 'variables,', 'then', 'write', 'equations'], 'Modeling discipline.')
    ], '#ff5f8d'));

  window.COURSES.adv_math = {
    name: 'Advanced Mathematics', icon: '🧮', c1: '#8b6cff', c2: '#ff5f8d',
    tagline: 'Systems, quadratics, functions, probability, statistics, multi-step modeling. Endgame math.',
    levels: mathLevels, advanced: true
  };
  window.SURVIVAL.adv_math = gauntletFrom(mathLevels);

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED WORD PROBLEMS & LOGIC
  // ═══════════════════════════════════════════════════════════════
  const logicLevels = [];

  logicLevels.push(mk('🧩 Logic Core', 'al0', 'Valid vs Invalid Arguments', 'When conclusions follow premises', '⚖️',
    'Logic Corps', 'Argument Scanner', 'Judge whether a conclusion must follow.',
    `<h3>Validity is about structure</h3>
    <p>A <b>valid</b> argument: if the premises are true, the conclusion must be true. Validity is about form, not whether premises are actually true in the world.</p>
    <p>Example valid form: All A are B. X is A. Therefore X is B.</p>
    <p>Invalid: All A are B. X is B. Therefore X is A. (Could be B without being A.)</p>`, [
      mc('“All crew are trained. Zyx is crew. So Zyx is trained.” This is:', ['invalid', 'valid', 'neither premise-like', 'only about feelings'], 1, 'Classic valid syllogism form.'),
      mc('“All captains are crew. Nova is crew. So Nova is a captain.” This is:', ['valid', 'invalid', 'certain fact', 'a definition only'], 1, 'Being crew does not prove being captain.'),
      fill('Type the word for an argument where true premises guarantee the conclusion.', ['valid', 'validity'], 'Valid = conclusion must follow.'),
      mc('Validity concerns:', ['only whether people agree', 'whether the conclusion follows from the premises', 'only emotional impact', 'only vocabulary difficulty'], 1, 'Structure of inference.'),
      mc('An argument can be valid but have:', ['no structure', 'false premises (and a false or true conclusion)', 'no conclusion', 'only questions'], 1, 'Validity ≠ soundness.'),
      build('Build: “If premises are true, the conclusion must be true.”', ['If', 'premises', 'are', 'true,', 'the', 'conclusion', 'must', 'be', 'true'], 'Core of validity.')
    ], '#3989e8'));

  logicLevels.push(mk('🧩 Logic Core', 'al1', 'Necessary vs Sufficient', 'What must be true vs what is enough', '🔑',
    'Logic Corps', 'Condition Decoder', 'Separate “must” from “enough.”',
    `<h3>Necessary and sufficient conditions</h3>
    <p><b>Necessary:</b> required for something (without it, the thing fails). Oxygen is necessary for human life on Earth as we know it.</p>
    <p><b>Sufficient:</b> enough to guarantee something. Scoring 100% on the trial is sufficient to earn the badge (in this app’s rules).</p>
    <p>Something can be necessary but not sufficient, or sufficient but not necessary, or both (if and only if).</p>`, [
      mc('A necessary condition is:', ['always enough by itself', 'required for the outcome', 'irrelevant', 'only a synonym for “optional”'], 1, 'Necessary = required.'),
      mc('A sufficient condition is:', ['never enough', 'enough to guarantee the outcome', 'only necessary always', 'unrelated to outcomes'], 1, 'Sufficient = enough.'),
      mc('Having four equal sides is necessary for a square. Is it sufficient?', ['yes, always', 'no — need right angles too', 'squares need no sides', 'only for circles'], 1, 'Rhombus has equal sides but may not be square.'),
      fill('Type the word for a condition that is enough to guarantee an outcome.', ['sufficient'], 'Sufficient = enough.'),
      mc('“If and only if” signals a condition that is:', ['only necessary', 'only sufficient', 'both necessary and sufficient', 'neither'], 2, 'Biconditional.'),
      build('Build: “Necessary means required.”', ['Necessary', 'means', 'required'], 'Definition anchor.')
    ], '#65c7e8'));

  logicLevels.push(mk('📖 Advanced Problems', 'al2', 'Multi-Step Word Problems', 'Translate language into structured steps', '📝',
    'Logic Corps', 'Problem Forge', 'Break complex word problems into ordered steps.',
    `<h3>Translate → plan → compute → check</h3>
    <p>1. What is asked? 2. What is given? 3. What operations or relations connect them? 4. Compute carefully. 5. Check units and reasonableness.</p>
    <p>Watch for extra information, hidden steps (e.g., find a rate before a total), and careful reading of “at least,” “each,” “combined.”</p>`, [
      mc('A problem gives extra unused facts. You should:', ['always multiply all numbers', 'identify what is needed and ignore distractors', 'ignore the question', 'only use the largest number'], 1, 'Filter to relevant data.'),
      mc('“Each of 4 crates holds 12 kg. Total mass?” First step is often:', ['divide 12 by 4', 'multiply 4 × 12', 'subtract 4 from 12', 'add 4 + 12 only as final always'], 1, 'Each implies multiplication.'),
      fill('A ship travels 60 km/h for 3 hours. Type distance in km.', ['180'], 'Distance = speed × time = 180.'),
      mc('If a problem asks for the difference after a total, you may need to:', ['only add once', 'compute total then subtract', 'never subtract', 'only estimate without numbers'], 1, 'Multi-step sequencing.'),
      mc('Checking reasonableness means asking:', ['whether the answer’s size and units make sense', 'only if the font is bold', 'whether friends like it', 'only if it is even'], 0, 'Sense-check the result.'),
      build('Build: “Translate, plan, compute, check.”', ['Translate,', 'plan,', 'compute,', 'check'], 'Problem-solving loop.')
    ], '#d8a5ff'));

  logicLevels.push(mk('📖 Advanced Problems', 'al3', 'Patterns & Sequences', 'Find the rule, predict the next', '🔢',
    'Logic Corps', 'Pattern Bridge', 'Discover rules behind number and shape sequences.',
    `<h3>Patterns hide rules</h3>
    <p>Arithmetic sequences add a constant each step. Geometric sequences multiply by a constant ratio.</p>
    <p>Look at differences between terms, ratios, alternating rules, or position-based formulas (nth term).</p>
    <p>Always test your rule on more than one step before predicting.</p>`, [
      mc('Sequence 3, 7, 11, 15… next term is:', ['16', '19', '18', '17'], 1, 'Add 4 each time → 19.'),
      mc('Sequence 2, 6, 18, 54… rule is mainly:', ['add 4', 'multiply by 3', 'add 12', 'subtract 2'], 1, 'Geometric ratio 3.'),
      fill('Type the next number: 1, 4, 9, 16, ___', ['25'], 'Squares: 1²,2²,3²,4²,5²=25.'),
      mc('To confirm a pattern rule you should:', ['test only the first step', 'check it across multiple steps', 'ignore middle terms', 'only guess once'], 1, 'Multiple checks reduce error.'),
      mc('An alternating pattern might:', ['only increase forever', 'switch between two operations or two series', 'have no rule', 'only use primes always'], 1, 'Two interleaved rules are common.'),
      build('Build: “Find the rule, then predict.”', ['Find', 'the', 'rule,', 'then', 'predict'], 'Pattern method.')
    ], '#8b6cff'));

  logicLevels.push(mk('🧠 Critical Reading', 'al4', 'Assumptions & Ambiguity', 'What is hidden or unclear?', '🔎',
    'Logic Corps', 'Clarity Lens', 'Spot assumptions and vague claims in statements.',
    `<h3>Read past the surface</h3>
    <p>An <b>assumption</b> is an unstated idea a claim needs. Ambiguous words (soon, many, better) can hide multiple meanings.</p>
    <p>Ask: What must be true for this argument to work? What else could this sentence mean? Is evidence given or only asserted?</p>`, [
      mc('“Our new engine is better.” A clarifying question is:', ['Better by what measure?', 'Is the font nice?', 'Who painted it?', 'Is it blue?'], 0, 'Better needs a criterion.'),
      mc('An assumption is:', ['always stated in bold', 'an unstated idea the claim relies on', 'a proven law always', 'only a feeling'], 1, 'Hidden supporting idea.'),
      fill('Type the word for language that can mean more than one thing.', ['ambiguous', 'ambiguity'], 'Ambiguity = multiple meanings.'),
      mc('“Many cadets agree” is weak as proof because:', ['agreement is always perfect evidence', '“many” is vague and agreement ≠ truth', 'cadets cannot have opinions', 'numbers are illegal'], 1, 'Vague quantifier + popularity ≠ truth.'),
      mc('Strong critical reading looks for:', ['only praise', 'evidence, definitions, and hidden assumptions', 'only length of text', 'only emojis'], 1, 'Substance over surface.'),
      build('Build: “What must be true for this claim?”', ['What', 'must', 'be', 'true', 'for', 'this', 'claim?'], 'Assumption probe.')
    ], '#ff8aa8'));

  logicLevels.push(mk('🧠 Critical Reading', 'al5', 'Logic Capstone Problems', 'Combine reading, structure, and multi-step reason', '🎓',
    'Logic Corps', 'Capstone Gate', 'Solve layered logic and word problems under one mission.',
    `<h3>Integrate the tools</h3>
    <p>Advanced reasoning mixes careful reading, valid inference, clear conditions, and multi-step calculation when numbers appear.</p>
    <p>Slow down: restate the question in your own words before answering.</p>`, [
      mc('All sensors are calibrated. Device A is a sensor. Therefore device A is calibrated. The inference is:', ['invalid', 'valid', 'unrelated to premises', 'only statistical'], 1, 'Valid categorical form.'),
      mc('A puzzle: every even room is empty; room 12 is even. Room 12 is:', ['occupied', 'empty', 'unknown always', 'not a room'], 1, 'Applies the general rule.'),
      fill('Sequence 5, 10, 20, 40… type next term.', ['80'], 'Multiply by 2 each time.'),
      mc('“If the hatch is sealed, pressure holds. Pressure holds. So the hatch is sealed.” This is:', ['valid affirming the consequent error risk', 'invalid (affirming the consequent)', 'valid modus ponens', 'a definition'], 1, 'Classic invalid form.'),
      mc('Best first move on a dense word problem:', ['compute random numbers', 'restate what is asked and list givens', 'skip all units', 'only read the last word'], 1, 'Clarify before computing.'),
      build('Build: “Restate the question in your own words.”', ['Restate', 'the', 'question', 'in', 'your', 'own', 'words'], 'Comprehension first.')
    ], '#35f0c0'));

  window.COURSES.adv_logic = {
    name: 'Advanced Word Problems & Logic', icon: '🧩', c1: '#3989e8', c2: '#d8a5ff',
    tagline: 'Valid arguments, necessary vs sufficient, multi-step problems, patterns, critical reading.',
    levels: logicLevels, advanced: true
  };
  window.SURVIVAL.adv_logic = gauntletFrom(logicLevels);

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED PHYSIOLOGY / ANATOMY / BIOLOGY
  // ═══════════════════════════════════════════════════════════════
  const bioLevels = [];

  bioLevels.push(mk('🫀 Systems Deep Dive', 'ab0', 'Homeostasis', 'Keeping the internal environment stable', '🌡️',
    'Bio Corps', 'Balance Monitor', 'Explain how the body keeps critical variables in range.',
    `<h3>Homeostasis</h3>
    <p><b>Homeostasis</b> is the maintenance of stable internal conditions (temperature, blood glucose, water balance, pH) despite external changes.</p>
    <p>Negative feedback loops detect change and trigger responses that reverse it (like a thermostat). Positive feedback amplifies a change (e.g., clotting cascade, labor contractions) and is less common for routine balance.</p>`, [
      mc('Homeostasis means:', ['ignoring all internal changes', 'keeping internal conditions relatively stable', 'never using energy', 'only growing taller'], 1, 'Stable internal environment.'),
      mc('Negative feedback typically:', ['amplifies a change', 'reverses a change toward a set point', 'stops all sensing', 'only happens in plants'], 1, 'Opposes the deviation.'),
      fill('Type the term for stable internal conditions in living systems.', ['homeostasis'], 'Homeostasis = internal balance.'),
      mc('Sweating when overheated is mainly:', ['positive feedback destroying balance', 'a negative-feedback cooling response', 'unrelated to temperature', 'only a digestive event'], 1, 'Cooling counters heat rise.'),
      mc('Positive feedback:', ['always maintains set points alone', 'amplifies a process (e.g., clotting)', 'means no feedback', 'only occurs in rocks'], 1, 'Amplification of change.'),
      build('Build: “Negative feedback reverses change.”', ['Negative', 'feedback', 'reverses', 'change'], 'Core control idea.')
    ], '#e63946'));

  bioLevels.push(mk('🫀 Systems Deep Dive', 'ab1', 'Cardiovascular System', 'Heart, vessels, blood transport', '❤️',
    'Bio Corps', 'Circulation Map', 'Trace the path of blood and its cargo.',
    `<h3>Circulation</h3>
    <p>The <b>heart</b> pumps blood. <b>Arteries</b> carry blood away from the heart; <b>veins</b> return blood toward the heart; <b>capillaries</b> exchange materials with tissues.</p>
    <p>Pulmonary circuit: heart ↔ lungs (gas exchange). Systemic circuit: heart ↔ body.</p>
    <p>Blood carries oxygen, nutrients, hormones, waste (CO₂, urea), and immune cells.</p>`, [
      mc('Arteries generally carry blood:', ['only toward the heart', 'away from the heart', 'only in the brain', 'only as pure water'], 1, 'Arteries = away from heart.'),
      mc('Gas exchange with tissues occurs mainly in:', ['large arteries only', 'capillaries', 'bone marrow only', 'hair'], 1, 'Thin capillary walls enable exchange.'),
      fill('Type the organ that pumps blood.', ['heart'], 'Heart is the pump.'),
      mc('Pulmonary circulation links the heart with the:', ['stomach only', 'lungs', 'skin only', 'kidneys only'], 1, 'Pulmonary = lung circuit.'),
      mc('Veins mainly:', ['always carry oxygen-rich blood only', 'return blood toward the heart', 'produce red blood cells only', 'filter urine only'], 1, 'Veins return blood to the heart.'),
      build('Build: “Capillaries exchange materials with tissues.”', ['Capillaries', 'exchange', 'materials', 'with', 'tissues'], 'Exchange sites.')
    ], '#ff5f8d'));

  bioLevels.push(mk('🫁 Systems Deep Dive', 'ab2', 'Respiration & Gas Exchange', 'Lungs, oxygen, carbon dioxide', '🌬️',
    'Bio Corps', 'Gas Exchange Bay', 'Follow O₂ in and CO₂ out.',
    `<h3>Respiratory essentials</h3>
    <p>Air flows: nose/mouth → trachea → bronchi → bronchioles → <b>alveoli</b> (tiny sacs) where O₂ enters blood and CO₂ leaves.</p>
    <p>Breathing moves air; cellular respiration in mitochondria uses O₂ to help release energy from food and produces CO₂.</p>
    <p>The respiratory and circulatory systems are tightly coupled for gas transport.</p>`, [
      mc('Alveoli are specialized for:', ['digesting protein', 'gas exchange', 'pumping blood', 'filtering light'], 1, 'Huge surface area for gases.'),
      mc('Oxygen in the body is mainly needed for:', ['only coloring blood', 'cellular energy release (with food molecules)', 'only building bone', 'only making hair'], 1, 'Aerobic energy pathways.'),
      fill('Type the waste gas exhaled in larger amounts after cellular respiration.', ['carbon dioxide', 'co2', 'CO2'], 'CO₂ is exhaled.'),
      mc('The trachea leads toward the:', ['stomach only', 'lungs', 'liver only', 'skin'], 1, 'Windpipe toward lungs.'),
      mc('Circulatory and respiratory systems together:', ['never interact', 'deliver O₂ and remove CO₂', 'only digest fat', 'only sense sound'], 1, 'Coupled gas transport.'),
      build('Build: “Alveoli are sites of gas exchange.”', ['Alveoli', 'are', 'sites', 'of', 'gas', 'exchange'], 'Structure–function link.')
    ], '#4de1ff'));

  bioLevels.push(mk('🧬 Cell & Gene', 'ab3', 'Cell Biology Advanced', 'Organelles and cell jobs', '🔬',
    'Bio Corps', 'Organelle Deck', 'Assign each organelle its mission.',
    `<h3>Inside the cell</h3>
    <p><b>Nucleus</b> — genetic control center (DNA).<br>
    <b>Mitochondria</b> — energy release (ATP).<br>
    <b>Ribosomes</b> — protein synthesis.<br>
    <b>Cell membrane</b> — selective barrier.<br>
    <b>Chloroplasts</b> (plants) — photosynthesis.</p>
    <p>Structure fits function: folds and membranes increase surface area for reactions.</p>`, [
      mc('Mitochondria are most associated with:', ['storing DNA only', 'ATP / energy release', 'photosynthesis only', 'cell walls only'], 1, 'Powerhouse of the cell.'),
      mc('Ribosomes build:', ['lipids only', 'proteins', 'only DNA copies outside nucleus always', 'only starch in animals'], 1, 'Protein synthesis.'),
      fill('Type the organelle that holds most of the cell’s DNA in eukaryotes.', ['nucleus'], 'Nucleus houses DNA.'),
      mc('The cell membrane’s job includes:', ['ignoring all substances', 'controlling what enters and leaves', 'photosynthesis only', 'pumping the heart'], 1, 'Selective barrier.'),
      mc('Chloroplasts are found in:', ['animal muscle cells typically', 'plant cells (photosynthetic)', 'only viruses', 'only red blood cells'], 1, 'Photosynthetic organelles.'),
      build('Build: “Mitochondria release usable energy.”', ['Mitochondria', 'release', 'usable', 'energy'], 'ATP focus.')
    ], '#69d6c5'));

  bioLevels.push(mk('🧬 Cell & Gene', 'ab4', 'Genetics Foundations', 'Traits, DNA, inheritance ideas', '🧪',
    'Bio Corps', 'Inheritance Protocol', 'Connect DNA to traits without oversimplifying.',
    `<h3>Inheritance basics</h3>
    <p><b>DNA</b> stores genetic information. <b>Genes</b> are segments that help determine traits via instructions for proteins (among other roles).</p>
    <p>Offspring inherit genetic material from parents. Dominant/recessive patterns explain some traits, but many traits are polygenic and influenced by environment.</p>
    <p>Mutation = change in DNA sequence; can be neutral, harmful, or rarely beneficial in a context.</p>`, [
      mc('Genes are best described as:', ['random food particles', 'DNA segments related to traits', 'only muscles', 'only weather patterns'], 1, 'Genetic units on DNA.'),
      mc('DNA’s main role is to:', ['store genetic information', 'digest only starch', 'pump blood', 'form clouds'], 0, 'Information molecule.'),
      fill('Type the molecule that carries genetic information in cells.', ['dna', 'DNA'], 'DNA stores genetic info.'),
      mc('A mutation is:', ['always instantly fatal', 'a change in DNA sequence', 'only a broken bone', 'only a learned habit'], 1, 'Sequence change.'),
      mc('Many human traits are:', ['only single-gene and environment-free always', 'influenced by multiple genes and environment', 'unrelated to DNA', 'only decided by friends'], 1, 'Complex inheritance is common.'),
      build('Build: “Genes help determine traits.”', ['Genes', 'help', 'determine', 'traits'], 'Core genetics idea.')
    ], '#c084fc'));

  bioLevels.push(mk('🩺 Integration', 'ab5', 'Anatomy–Physiology Capstone', 'Link structure, function, and systems', '🎓',
    'Bio Corps', 'Systems Capstone', 'Explain how structure supports function across systems.',
    `<h3>Structure supports function</h3>
    <p>Alveoli are thin and numerous → gas exchange. Heart muscle is strong and rhythmic → continuous pumping. Neurons are long and specialized → signal transmission.</p>
    <p>When one system fails, others are stressed (e.g., poor lung function strains the heart). Medicine and training both respect these couplings.</p>`, [
      mc('Many thin alveoli support:', ['slower gas exchange always', 'efficient gas exchange', 'only digestion', 'only bone growth'], 1, 'Surface area for diffusion.'),
      mc('If lungs exchange gas poorly, the heart may:', ['never be affected', 'work harder to deliver enough oxygen', 'stop needing blood', 'only digest food'], 1, 'Systems compensate/stress each other.'),
      fill('Type the system that transports blood.', ['circulatory', 'cardiovascular', 'circulatory system'], 'Circulatory/cardiovascular system.'),
      mc('Neurons are specialized mainly for:', ['gas exchange in alveoli', 'sending electrochemical signals', 'pumping blood', 'filtering urine only'], 1, 'Nervous signaling.'),
      mc('Homeostasis across systems requires:', ['no communication', 'sensing, responding, and coordinated organs', 'only one organ forever', 'ignoring temperature'], 1, 'Integrated control.'),
      build('Build: “Structure supports function.”', ['Structure', 'supports', 'function'], 'Central biology theme.')
    ], '#f4a261'));

  window.COURSES.adv_bio = {
    name: 'Advanced Physiology & Biology', icon: '🫀', c1: '#e63946', c2: '#69d6c5',
    tagline: 'Homeostasis, circulation, respiration, cells, genetics, systems integration.',
    levels: bioLevels, advanced: true
  };
  window.SURVIVAL.adv_bio = gauntletFrom(bioLevels);

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED PHILOSOPHY
  // ═══════════════════════════════════════════════════════════════
  const philLevels = [];

  philLevels.push(mk('🤔 Inquiry', 'ap0', 'What Is Philosophy?', 'Asking careful questions about big ideas', '❓',
    'Philosophy Corps', 'Question Engine', 'Practice the habit of clear, deep questioning.',
    `<h3>Philosophy as careful questioning</h3>
    <p>Philosophy examines fundamental questions: What is real? What can we know? How should we live? What is fair?</p>
    <p>It values clear definitions, reasons, and objections — not only opinions. Disagreement is expected; the goal is better reasons, not louder voices.</p>
    <p>For cadets: slow down, define terms, give reasons, consider a counterargument.</p>`, [
      mc('Philosophy mainly emphasizes:', ['only memorizing dates', 'careful questions, definitions, and reasons', 'only physical experiments always', 'avoiding all disagreement'], 1, 'Reasoned inquiry.'),
      mc('A good philosophical habit is to:', ['never define terms', 'define key words and offer reasons', 'insult opponents', 'ignore counterarguments'], 1, 'Clarity + reasons.'),
      fill('Type a field that asks how we should live and what is fair (among other questions).', ['philosophy', 'ethics'], 'Ethics is a major branch; philosophy is the broader field.'),
      mc('Disagreement in philosophy is:', ['proof that thinking failed', 'normal and useful when reasons are shared', 'illegal', 'only about sports'], 1, 'Rational disagreement is productive.'),
      mc('“What do you mean by justice?” is valuable because:', ['definitions never matter', 'unclear terms cause confused arguments', 'questions are banned', 'only feelings count'], 1, 'Definitions prevent talking past each other.'),
      build('Build: “Define terms and give reasons.”', ['Define', 'terms', 'and', 'give', 'reasons'], 'Core philosophical discipline.')
    ], '#a78bfa'));

  philLevels.push(mk('🤔 Inquiry', 'ap1', 'Knowledge & Belief', 'What does it mean to know?', '📚',
    'Philosophy Corps', 'Epistemic Bay', 'Separate belief, truth, and justification.',
    `<h3>Epistemology (knowledge)</h3>
    <p>A common starting idea: knowledge is not just belief. We want beliefs that are <b>true</b> and <b>justified</b> (backed by good reasons or evidence).</p>
    <p>Skepticism asks how far our justifications reach. Humility about certainty can coexist with strong everyday knowledge (you know your name; pure mathematical proof differs from historical claims).</p>`, [
      mc('A justified belief is one that:', ['has no reasons', 'is backed by good reasons or evidence', 'is always false', 'must be popular'], 1, 'Justification = support.'),
      mc('Knowledge is often thought to require belief that is:', ['false but popular', 'true and justified', 'only loud', 'never questioned'], 1, 'Classic “justified true belief” starting point.'),
      fill('Type the branch of philosophy that studies knowledge.', ['epistemology'], 'Epistemology = theory of knowledge.'),
      mc('Skepticism in philosophy mainly:', ['forbids all questions', 'challenges how far claims are justified', 'proves all beliefs false always', 'only studies rocks'], 1, 'Scrutinizes justification.'),
      mc('You can be confident in everyday knowledge while still:', ['never checking anything', 'admitting different claims need different kinds of evidence', 'rejecting all science', 'avoiding definitions'], 1, 'Standards fit the claim type.'),
      build('Build: “Knowledge needs good reasons.”', ['Knowledge', 'needs', 'good', 'reasons'], 'Justification matters.')
    ], '#8b6cff'));

  philLevels.push(mk('⚖️ Ethics', 'ap2', 'Moral Reasons', 'Consequences, duties, and character', '🧭',
    'Philosophy Corps', 'Ethics Helm', 'Compare major ways people justify “ought.”',
    `<h3>Three classic ethical lenses</h3>
    <p><b>Consequentialism:</b> focus on outcomes (e.g., happiness, harm reduced).<br>
    <b>Duty / deontology:</b> some acts are right or wrong regardless of outcomes (respect persons, keep promises).<br>
    <b>Virtue ethics:</b> focus on character traits (courage, honesty, fairness) and what a good person would do.</p>
    <p>Real dilemmas often pull these lenses in different directions — that tension is worth examining, not hiding.</p>`, [
      mc('Consequentialism evaluates actions mainly by:', ['only the actor’s feelings', 'their outcomes', 'only ancient custom always', 'only word count'], 1, 'Outcomes-focused.'),
      mc('A duty-based view might say lying is wrong because:', ['it sometimes helps', 'it violates a moral rule/respect for persons', 'it is always illegal everywhere', 'it uses long words'], 1, 'Rule/respect focus.'),
      fill('Type the ethics approach that focuses on character traits like honesty and courage.', ['virtue', 'virtue ethics'], 'Virtue ethics centers character.'),
      mc('Ethical dilemmas are hard partly because:', ['ethics has no questions', 'different reasonable lenses can conflict', 'only one person may think', 'outcomes never matter to anyone'], 1, 'Competing values/frameworks.'),
      mc('Respecting persons as ends (not mere tools) is closest to:', ['pure outcome counting only', 'duty / respect-focused ethics', 'only virtue lists with no rules', 'rejecting all reasons'], 1, 'Kantian-style duty theme.'),
      build('Build: “Ethics asks how we should act.”', ['Ethics', 'asks', 'how', 'we', 'should', 'act'], 'Normative core.')
    ], '#35f0c0'));

  philLevels.push(mk('⚖️ Ethics', 'ap3', 'Justice & Fairness', 'What do we owe each other?', '⚖️',
    'Philosophy Corps', 'Justice Forum', 'Explore fairness beyond “I like it.”',
    `<h3>Justice</h3>
    <p>Justice concerns fair treatment, rights, and how goods, burdens, and power are distributed.</p>
    <p>Questions: Equal shares or shares by need, effort, or contribution? What rights should protect minorities from majority will? When is inequality unfair?</p>
    <p>Civics taught institutions; philosophy asks what would make those institutions <b>justified</b>.</p>`, [
      mc('Justice is mainly about:', ['only personal taste in food', 'fairness, rights, and how benefits and burdens are shared', 'only sports scores', 'avoiding all rules'], 1, 'Fair institutional and interpersonal treatment.'),
      mc('A rights-based worry about majority rule is that:', ['majorities never err', 'majorities might oppress minorities', 'voting is impossible', 'rights forbid all laws'], 1, 'Tyranny of the majority concern.'),
      fill('Type the word for fair treatment and rightful claims in a community.', ['justice'], 'Justice = fairness/rights focus.'),
      mc('Philosophy of justice asks whether institutions are:', ['only old', 'justified by good reasons', 'only efficient for one person', 'beyond all questions'], 1, 'Justification of political order.'),
      mc('“Equal treatment” and “treatment according to need” can:', ['never differ', 'point to different policies in the same case', 'only apply to rocks', 'replace all ethics'], 1, 'Competing fairness criteria.'),
      build('Build: “Justice concerns fairness and rights.”', ['Justice', 'concerns', 'fairness', 'and', 'rights'], 'Working definition.')
    ], '#f4a261'));

  philLevels.push(mk('🗣️ Argument', 'ap4', 'Good Faith Dialogue', 'Argue to learn, not only to win', '🤝',
    'Philosophy Corps', 'Dialogue Protocol', 'Practice intellectual honesty in disagreement.',
    `<h3>Intellectual virtues</h3>
    <p><b>Charity:</b> interpret others’ arguments in a strong form before criticizing.<br>
    <b>Humility:</b> your view might be incomplete.<br>
    <b>Courage:</b> follow reasons even when uncomfortable.<br>
    <b>Clarity:</b> say what you mean; separate people from positions.</p>
    <p>Steel-manning (strongest form of the other side) beats straw-manning (weak caricature).</p>`, [
      mc('Charity in argument means:', ['insulting the speaker', 'interpreting their view strongly before critiquing', 'never disagreeing', 'only agreeing'], 1, 'Strongest reasonable reading.'),
      mc('A straw man is:', ['the strongest form of an argument', 'a weakened caricature of someone’s view', 'a type of evidence', 'a formal proof'], 1, 'Misrepresentation.'),
      fill('Type the word for representing someone’s argument in its strongest form.', ['steelman', 'steel-man', 'steel man', 'charity'], 'Steel-man / charitable reading.'),
      mc('Separating people from positions helps because:', ['people equal ideas always', 'you can criticize an idea without attacking dignity', 'ideas cannot be wrong', 'dialogue should avoid reasons'], 1, 'Respect persons; test claims.'),
      mc('Intellectual humility is:', ['never having a view', 'admitting your view might need revision', 'refusing all evidence', 'only for leaders'], 1, 'Openness to correction.'),
      build('Build: “Criticize ideas, respect persons.”', ['Criticize', 'ideas,', 'respect', 'persons'], 'Dialogue ethic.')
    ], '#ff8aa8'));

  philLevels.push(mk('🗣️ Argument', 'ap5', 'Philosophy Capstone', 'Integrate knowledge, ethics, and dialogue', '🎓',
    'Philosophy Corps', 'Capstone Symposium', 'Apply clear thinking to a layered civic-philosophical problem.',
    `<h3>Putting it together</h3>
    <p>Advanced philosophy for cadets: define terms, separate knowledge claims from value claims, test arguments for validity, consider consequences and duties, and speak in good faith.</p>
    <p>This connects to Civics: institutions need justification; citizens need habits of reason.</p>`, [
      mc('“We should ban X because most people dislike X” mainly offers:', ['a complete moral proof always', 'popularity, which may not equal rightness', 'a scientific law', 'a definition of X'], 1, 'Popularity ≠ moral justification.'),
      mc('A valid argument with false premises can still:', ['force the world to match it', 'fail to establish a true conclusion in reality', 'replace all evidence', 'prove popularity'], 1, 'Validity ≠ truth of conclusion in fact.'),
      fill('Type the ethical lens focused mainly on outcomes.', ['consequentialism', 'consequentialist'], 'Consequentialism = outcomes.'),
      mc('Connecting philosophy to civics means asking:', ['only who won an election', 'whether laws and institutions are justified', 'only the color of flags', 'whether thinking is illegal'], 1, 'Justification of political order.'),
      mc('Best close of a hard disagreement is often:', ['personal attack', 'clarifying remaining differences and shared facts', 'refusing all definitions', 'pretending agreement when there is none'], 1, 'Honest clarity.'),
      build('Build: “Give reasons, consider objections.”', ['Give', 'reasons,', 'consider', 'objections'], 'Philosophical practice.')
    ], '#35f0c0'));

  window.COURSES.adv_philosophy = {
    name: 'Advanced Philosophy', icon: '🤔', c1: '#a78bfa', c2: '#35f0c0',
    tagline: 'Knowledge, ethics, justice, and good-faith argument — reasoned inquiry for citizens.',
    levels: philLevels, advanced: true
  };
  window.SURVIVAL.adv_philosophy = gauntletFrom(philLevels);
})();
