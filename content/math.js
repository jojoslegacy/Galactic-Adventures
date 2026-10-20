/* Mathematics course for Galactic Academy. Classic-script format for static/offline hosting. */
(() => {
  'use strict';
  const mc = (q, options, answer, why, code = null, textOpts = true) => ({ type: 'mc', q, options, answer, why, code, textOpts });
  const fill = (q, answers, why, code = null) => ({ type: 'fill', q, answers: answers.map(String), why, code, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson">${html}</div>`;
  const level = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });
  window.COURSES = window.COURSES || {};
  // All math levels collected first, then split into foundation modules (each with own gauntlet)
  const allMathLevels = [
      level('🌱 Number Sense', 'ma0', 'Number Sense & Place Value', 'Read, compare, order, and round numbers', '🔢', 'Number Navigators', 'Place-Value Scanner', 'Help the crew sort numbers before loading the cargo.',
        `<h3>Numbers have places</h3><p>In <b>4,582</b>, the 4 means 4 thousands, the 5 means 5 hundreds, the 8 means 8 tens, and the 2 means 2 ones. A digit's place tells its value.</p><p>On a number line, numbers farther right are greater. For example, 47 is greater than 39. The symbols <b>&gt;</b> and <b>&lt;</b> mean “greater than” and “less than”; the open side points toward the larger number.</p><p><b>Rounding whole numbers:</b> to round 347 to the nearest ten, look at the ones digit (7). Five or more means round up, so 347 rounds to 350. Four or less means round down, so 342 rounds to 340. Rounding gives an estimate, not an exact answer.</p><p><b>Even numbers</b> end in 0, 2, 4, 6, or 8. <b>Odd numbers</b> end in 1, 3, 5, 7, or 9.</p>`, [
          mc('In 6,241, what is the value of the digit 2?', ['2','20','200','2,000'], 2, 'The 2 is in the hundreds place, so its value is 200.'),
          mc('Which number is greatest?', ['508','580','805','850'], 3, '850 has 8 hundreds, more than any of the other choices.'),
          fill('Round 76 to the nearest ten.', ['80'], 'The ones digit is 6, so round up to 80.'),
          mc('Which number is odd?', ['24','38','51','100'], 2, '51 ends in 1, so it is odd.'),
          build('Put these numbers in order from smallest to largest: 12, 5, 19.', ['5', ',', '12', ',', '19'], 'Compare the values: 5 is smallest, then 12, then 19.')], '#39b8a6'),
      level('🌱 Number Station · Foundations', 'ma1', 'Addition Launch', 'Add whole numbers and understand place value', '➕', 'Nova Number Works', 'Cargo Counter', 'Count cargo accurately before it leaves the station.',
        `<h3>Addition combines quantities</h3><p>In <b>7 + 5 = 12</b>, the numbers 7 and 5 are the <b>addends</b>; 12 is the <b>sum</b>. You can count on from the larger number: start at 7 and count 5 more (8, 9, 10, 11, 12).</p><p><b>Place value:</b> 34 means 3 tens and 4 ones. Add ones to ones and tens to tens. If a place totals 10 or more, regroup 10 ones as one ten.</p><pre><code>  28
+ 17
----
  45</code></pre><p>8 + 7 = 15, so write 5 ones and carry 1 ten. Then 2 + 1 + 1 = 4 tens.</p>`, [
          mc('A cargo pod carries 8 crates and another carries 6. How many crates altogether?', ['12','13','14','15'], 2, '8 + 6 = 14. Addition combines the two groups.'),
          fill('Calculate 27 + 15.', ['42'], 'Add ones: 7 + 5 = 12. Write 2 and carry 1 ten; 2 + 1 + 1 = 4 tens.'),
          mc('Which expression means “9 more than 23”?', ['23 − 9','23 + 9','23 × 9','23 ÷ 9'], 1, '“More than” signals addition: 23 + 9 = 32.'),
          fill('A station has 46 blue lights and 28 red lights. How many lights are there?', ['74'], '46 + 28 = 46 + 20 + 8 = 74.'),
          build('Assemble an equation showing 16 plus 7 equals 23.', ['16', '+', '7', '=', '23'], 'An equation uses an equals sign to show both sides have the same value.')], '#39b8a6'),
      level('🌱 Number Station · Foundations', 'ma2', 'Subtraction Bay', 'Subtract, compare, and regroup', '➖', 'Orbit Inventory', 'Missing Cargo Scanner', 'Find what remains after cargo is shipped or lost.',
        `<h3>Subtraction finds a difference</h3><p><b>15 − 6 = 9</b> means take 6 away from 15, or ask how far 6 is from 15. The answer is the <b>difference</b>.</p><p>When a top digit is too small, regroup from the next place. In 42 − 17, trade one ten for 10 ones: 12 − 7 = 5, then 3 tens − 1 ten = 2 tens. The answer is 25.</p><p>Addition can check subtraction: if 42 − 17 = 25, then 25 + 17 must equal 42.</p>`, [
          mc('There are 18 supply packs. The crew uses 7. How many remain?', ['9','10','11','12'], 2, '18 − 7 = 11 packs remain.'),
          fill('Calculate 52 − 26.', ['26'], 'Regroup one ten: 12 − 6 = 6, then 4 − 2 = 2. The difference is 26.'),
          mc('Which operation checks whether 63 − 28 = 35 is correct?', ['35 − 28','63 + 28','35 + 28','63 × 28'], 2, 'The difference plus the amount taken away should equal the starting amount: 35 + 28 = 63.'),
          fill('What is the difference between 100 and 64?', ['36'], '100 − 64 = 36.'),
          mc('A robot has 41 bolts. It needs 58. How many more bolts are needed?', ['17','19','99','23'], 0, '58 − 41 = 17 more bolts.')], '#5aa9e6'),
      level('🌱 Number Station · Foundations', 'ma3', 'Multiplication Dock', 'Groups, arrays, and multiplication facts', '✖️', 'Asteroid Arrays', 'Crate Stacker', 'Load equal groups efficiently instead of counting each crate.',
        `<h3>Multiplication is equal groups</h3><p><b>4 × 3 = 12</b> means four groups of three, or 3 + 3 + 3 + 3. The factors are 4 and 3; the product is 12.</p><p>Multiplication is commutative: 4 × 3 = 3 × 4. Arrays make this visible: 4 rows of 3 dots have the same total as 3 rows of 4 dots.</p><p>Useful facts: multiplying by 1 keeps a number unchanged; multiplying by 0 gives 0; multiplying by 10 adds a zero to a whole-number product.</p>`, [
          mc('There are 5 boxes with 4 batteries in each. How many batteries?', ['9','16','20','25'], 2, '5 groups of 4: 5 × 4 = 20.'),
          fill('Calculate 7 × 8.', ['56'], 'Seven groups of eight make 56.'),
          mc('Which expression represents 3 rows of 9 seats?', ['3 + 9','9 − 3','3 × 9','9 ÷ 3'], 2, 'Equal rows are represented by multiplication: 3 × 9 = 27.'),
          fill('Calculate 12 × 6.', ['72'], '12 × 6 = (10 × 6) + (2 × 6) = 60 + 12 = 72.'),
          mc('A rectangle is 8 units long and 4 units wide. How many unit squares cover it?', ['12','24','32','36'], 2, 'Area of a rectangle is length × width: 8 × 4 = 32 square units.')], '#8b7cf6'),
      level('🌱 Number Station · Foundations', 'ma4', 'Division Airlock', 'Share equally and connect division to multiplication', '➗', 'Fair Share Freight', 'Supply Splitter', 'Divide supply shipments fairly among crews.',
        `<h3>Division splits into equal groups</h3><p><b>20 ÷ 4 = 5</b> asks how many are in each group when 20 items are shared among 4 groups. Division reverses multiplication: because 4 × 5 = 20, 20 ÷ 4 = 5.</p><p>Some divisions have a remainder. <b>23 ÷ 4 = 5 remainder 3</b>, because 4 × 5 = 20 and 3 are left over. Depending on the situation, an answer may need a remainder, a fraction, or a decimal.</p><p>Order matters: 20 ÷ 4 is not the same as 4 ÷ 20.</p>`, [
          mc('Share 24 oxygen canisters equally among 6 crew members. How many each?', ['3','4','5','6'], 1, '24 ÷ 6 = 4; check with 6 × 4 = 24.'),
          fill('Calculate 63 ÷ 9.', ['7'], '9 × 7 = 63, so 63 ÷ 9 = 7.'),
          mc('What is 22 ÷ 5 as a whole-number quotient and remainder?', ['4 remainder 2','5 remainder 2','4 remainder 3','3 remainder 7'], 0, '5 × 4 = 20, leaving 2.'),
          fill('Calculate 144 ÷ 12.', ['12'], '12 × 12 = 144.'),
          mc('Which statement is true?', ['0 ÷ 5 = 5','5 ÷ 0 = 0','0 ÷ 5 = 0','5 ÷ 5 = 0'], 2, 'Zero divided by a nonzero number is zero. Division by zero is undefined.')], '#e9a23b'),
      level('🌿 Number Lab · Fractions & Decimals', 'ma5', 'Fraction Fields', 'Numerators, denominators, and equivalent fractions', '½', 'Fraction Foundry', 'Portion Analyzer', 'Measure partial supplies without confusing the size of the pieces.',
        `<h3>Fractions describe equal parts</h3><p>In <b>3/4</b>, 3 is the numerator (parts counted) and 4 is the denominator (equal parts in one whole). The parts must be equal-sized.</p><p>Equivalent fractions name the same amount: 1/2 = 2/4 = 4/8. Multiply or divide both numerator and denominator by the same nonzero number to make an equivalent fraction.</p><p>To add fractions with the same denominator, add the numerators and keep the denominator: 2/7 + 3/7 = 5/7. With unlike denominators, first find a common denominator.</p>`, [
          mc('Which fraction is equivalent to 1/2?', ['1/3','2/4','3/5','4/6'], 1, 'Multiply numerator and denominator of 1/2 by 2 to get 2/4.'),
          fill('Simplify 6/8.', ['3/4'], 'Divide numerator and denominator by 2: 6/8 = 3/4.'),
          mc('Calculate 2/9 + 4/9.', ['6/18','6/9','2/18','2/9'], 1, 'Same denominator: add the numerators, 2 + 4 = 6, and keep 9.'),
          fill('Calculate 3/4 − 1/4. Give a simplified fraction.', ['1/2','2/4'], '3/4 − 1/4 = 2/4 = 1/2. Both equivalent answers are accepted.'),
          mc('Which is larger?', ['2/3','3/5','They are equal','Cannot compare'], 0, '2/3 ≈ 0.667 while 3/5 = 0.6, so 2/3 is larger.')], '#4cae83'),
      level('🌿 Number Lab · Fractions & Decimals', 'ma6', 'Decimal Dock', 'Place value, decimal operations, and division', '🔢', 'Decimal Dynamics', 'Precision Scale', 'Measure components accurately to the nearest decimal place.',
        `<h3>Decimals are place value</h3><p>In 3.47, the 3 is ones, 4 is tenths, and 7 is hundredths. Align decimal points when adding or subtracting.</p><pre><code>  4.80
+ 1.35
------
  6.15</code></pre><p>For multiplication, multiply as whole numbers then place the decimal using the total number of decimal places in the factors. For division by 10, 100, or 1,000, shift the decimal left 1, 2, or 3 places.</p><p>Decimals can be converted to fractions: 0.25 = 25/100 = 1/4.</p>`, [
          fill('Calculate 3.6 + 2.75.', ['6.35'], 'Align the decimal points: 3.60 + 2.75 = 6.35.'),
          mc('What is 5.2 − 1.85?', ['3.35','4.65','3.45','3.25'], 0, 'Write 5.20 − 1.85 = 3.35.'),
          fill('Calculate 0.4 × 0.3.', ['0.12'], '4 × 3 = 12 and there are two total decimal places, giving 0.12.'),
          mc('What is 7.2 ÷ 10?', ['72','7.02','0.72','0.072'], 2, 'Dividing by 10 moves the decimal one place left.'),
          fill('Write 3/4 as a decimal.', ['0.75'], '3 ÷ 4 = 0.75.')], '#45b7d1'),
      level('🌿 Number Lab · Fractions & Decimals', 'ma6-round', 'Rounding & Estimation Station', 'Round decimals and estimate to check whether answers make sense', '🎯', 'Estimate Explorers', 'Precision Calibrator', 'Make sensible estimates before spending time on exact calculations.',
        `<h3>Rounding helps you estimate</h3><p>For whole numbers, look one place to the right of the place you are rounding to. If that digit is 5, 6, 7, 8, or 9, round up. If it is 0, 1, 2, 3, or 4, keep the rounding digit the same.</p><p>For decimals, <b>0.1</b> is one tenth and <b>0.01</b> is one hundredth. To round 3.46 to the nearest tenth, look at the hundredths digit (6), so 3.46 rounds to 3.5. To round 3.42 to the nearest tenth, it rounds to 3.4.</p><p>Estimation helps check an answer. If a toy costs $4.89 and you buy three, estimate $5 × 3 = $15. The exact total is $14.67, which makes sense because it is close to $15.</p><p>Rounding is not the same as truncating: 2.98 rounded to the nearest whole number is 3, not 2.</p>`, [
          fill('Round 483 to the nearest hundred.', ['500'], 'The tens digit is 8, so round the hundreds up: 483 becomes 500.'),
          fill('Round 6.27 to the nearest tenth.', ['6.3'], 'The hundredths digit is 7, so the tenths digit rounds up: 6.27 becomes 6.3.'),
          mc('Which is the best estimate for 19 × 4?', ['40','60','80','100'], 2, '19 is close to 20, and 20 × 4 = 80.'),
          mc('Round 8.143 to the nearest hundredth.', ['8.1','8.14','8.15','8.143'], 1, 'The thousandths digit is 3, so the hundredths digit stays 4: 8.14.'),
          fill('A book costs $7.95. About how much do 4 books cost? Round the price to the nearest dollar first.', ['32','$32','about 32','about $32'], 'Round $7.95 to $8. Then 4 × $8 = $32.')], '#45b7d1'),
      level('🌿 Number Lab · Fractions & Decimals', 'ma7-life', 'Money, Time & Measurement', 'Use math for prices, clocks, lengths, and everyday problems', '🪙', 'Everyday Math Crew', 'Life-Skills Toolkit', 'Help the crew budget supplies and measure travel time.',
        `<h3>Math helps in everyday life</h3><p><b>Money:</b> 100 cents make one dollar. Line up decimal points when adding prices: $2.35 + $1.40 = $3.75. To find change, subtract the cost from the amount paid.</p><p><b>Time:</b> 60 minutes make an hour. From 2:45 to 3:15 is 30 minutes: 15 minutes to 3:00, then 15 more. For elapsed time, count the time that passes, not just the difference between the minute numbers.</p><p><b>Metric measurement:</b> 10 millimeters = 1 centimeter, 100 centimeters = 1 meter, and 1,000 meters = 1 kilometer. One liter holds 1,000 milliliters; 1 kilogram equals 1,000 grams.</p><p>Always include units. A length of 12 centimeters is different from an area of 12 square centimeters.</p>`, [
          fill('You have $10.00 and spend $3.65. How much money is left?', ['6.35','$6.35'], 'Subtract the cost: $10.00 − $3.65 = $6.35.'),
          mc('A movie starts at 1:20 and lasts 90 minutes. When does it end?', ['2:10','2:40','2:50','3:10'], 2, '90 minutes is 1 hour 30 minutes. 1:20 + 1:30 = 2:50.', null, true),
          fill('How many centimeters are in 2 meters?', ['200'], '1 meter = 100 centimeters, so 2 meters = 200 centimeters.'),
          mc('A ribbon is 75 cm long. Another is 25 cm long. What is their combined length?', ['50 cm','1 m','100 m','75 m'], 1, '75 cm + 25 cm = 100 cm, which equals 1 meter.'),
          fill('A game costs $12.50. You pay with $20.00. How much change should you get?', ['7.5','7.50','$7.50'], '$20.00 − $12.50 = $7.50.')], '#f4a261'),
      level('🌿 Number Lab · Fractions & Decimals', 'ma7', 'Percent Planet', 'Percentages, ratios, and proportional thinking', '％', 'Percent Planet Trading', 'Discount Calculator', 'Calculate discounts, tax, and scaled quantities.',
        `<h3>Percent means per hundred</h3><p><b>25% = 25/100 = 0.25 = 1/4.</b> To find 20% of 80, convert 20% to 0.20 and multiply: 0.20 × 80 = 16.</p><p>A ratio compares quantities. A ratio of 2:3 means for every 2 of one thing, there are 3 of another. Equivalent ratios scale both parts by the same factor.</p><p>For a 15% discount on $60, the discount is 0.15 × 60 = $9, and the sale price is $60 − $9 = $51.</p>`, [
          fill('Find 10% of 250.', ['25'], '10% is one tenth: 250 ÷ 10 = 25.'),
          mc('A $40 item is discounted by 25%. What is the sale price?', ['$10','$25','$30','$35'], 2, '25% of $40 is $10; $40 − $10 = $30.'),
          fill('Convert 0.35 to a percentage.', ['35%','35'], 'Multiply the decimal by 100: 0.35 × 100 = 35%.'),
          mc('A recipe uses 2 cups of rice for 5 people. How many cups for 15 people at the same ratio?', ['4','5','6','10'], 2, '15 is three times 5, so multiply rice by 3: 2 × 3 = 6 cups.'),
          fill('A score rises from 50 to 60. What is the percentage increase?', ['20','20%'], 'The increase is 10. Divide by the original 50: 10/50 = 0.20 = 20%.')], '#f4a261'),
      level('🧭 Algebra Sector · Variables', 'ma8', 'Variable Workshop', 'Use symbols for unknown values', 'x', 'Unknowns Incorporated', 'Variable Decoder', 'Turn unknown cargo counts into expressions you can reason about.',
        `<h3>Variables stand for values</h3><p>A variable is a symbol for a number. If <b>x = 4</b>, then <b>x + 3 = 7</b>. In algebra, <b>3x</b> means 3 × x, not 3 + x.</p><p>An <b>expression</b> such as 2x + 5 has no equals sign. An <b>equation</b> such as 2x + 5 = 17 states that two quantities are equal.</p><p>Evaluate expressions by substituting the value, then use the order of operations. If x = 6, then 2x + 5 = 2(6) + 5 = 17.</p>`, [
          mc('If x = 7, what is x + 5?', ['12','35','2','75'], 0, 'Substitute 7 for x: 7 + 5 = 12.'),
          fill('If a = 4, evaluate 3a.', ['12'], '3a means 3 × a, so 3 × 4 = 12.'),
          mc('Which expression means “8 less than n”?', ['8 − n','n − 8','8n','n + 8'], 1, 'Start with n, then subtract 8.'),
          fill('If x = 3 and y = 5, evaluate 2x + y.', ['11'], '2(3) + 5 = 6 + 5 = 11.'),
          build('Assemble an expression for “four times x, plus 9.”', ['4', 'x', '+', '9'], 'Four times x is written 4x; then add 9.')], '#a78bfa'),
      level('🧭 Algebra Sector · Variables', 'ma9', 'Order of Operations', 'Parentheses, exponents, multiplication, and division', '🧮', 'Order Ops Systems', 'Expression Sequencer', 'Evaluate complex expressions consistently, without guessing.',
        `<h3>Use a consistent order</h3><p>Use <b>PEMDAS</b>: Parentheses, Exponents, Multiplication and Division from left to right, Addition and Subtraction from left to right. Multiplication does not always happen before division; they share a level of precedence.</p><p>Example: 3 + 2 × 5 = 3 + 10 = 13. But (3 + 2) × 5 = 5 × 5 = 25. Parentheses change the order.</p><p>Exponents represent repeated multiplication: 4² = 4 × 4 = 16, not 4 × 2.</p>`, [
          mc('Evaluate 6 + 3 × 4.', ['36','18','24','15'], 1, 'Multiply first: 3 × 4 = 12; then 6 + 12 = 18.'),
          fill('Evaluate (6 + 3) × 4.', ['36'], 'Parentheses first: 6 + 3 = 9; 9 × 4 = 36.'),
          mc('What is 2³ + 5?', ['11','13','21','25'], 1, '2³ = 2 × 2 × 2 = 8; 8 + 5 = 13.'),
          fill('Evaluate 24 ÷ 3 × 2.', ['16'], 'Division and multiplication are evaluated left to right: 24 ÷ 3 = 8, then 8 × 2 = 16.'),
          mc('Evaluate 18 − 6 ÷ 2 + 1.', ['7','16','10','13'], 1, 'Divide first: 6 ÷ 2 = 3. Then left to right: 18 − 3 + 1 = 16.')], '#7c83fd'),
      level('🧭 Algebra Sector · Variables', 'ma10', 'Solve One-Step Equations', 'Use inverse operations to isolate a variable', '🟰', 'Equation Engineering', 'Balance Chamber', 'Find the unknown while keeping both sides balanced.',
        `<h3>An equation is a balance</h3><p>Whatever you do to one side, do to the other. To solve <b>x + 7 = 19</b>, subtract 7 from both sides: x = 12.</p><p>Inverse operations undo each other: addition/subtraction and multiplication/division. For <b>5x = 35</b>, divide both sides by 5 to get x = 7.</p><p>Always check by substituting the solution into the original equation.</p>`, [
          fill('Solve x + 9 = 22. What is x?', ['13'], 'Subtract 9 from both sides: x = 22 − 9 = 13.'),
          mc('Solve y − 6 = 14.', ['8','20','−8','−20'], 1, 'Add 6 to both sides: y = 20.'),
          fill('Solve 7x = 56.', ['8'], 'Divide both sides by 7: x = 8.'),
          mc('Solve n/4 = 6.', ['2','10','24','28'], 2, 'Multiply both sides by 4: n = 24.'),
          fill('Solve 3 + x = −2.', ['-5','−5'], 'Subtract 3 from both sides: x = −2 − 3 = −5.')], '#4f86c6'),
      level('🚀 High School · Algebra', 'ma11', 'Two-Step Equations', 'Combine inverse operations and simplify', '📐', 'Algebra Flight Control', 'Unknown Solver', 'Calculate the thrust setting from a two-step equation.',
        `<h3>Undo operations in reverse order</h3><p>For <b>3x + 4 = 19</b>, first subtract 4: 3x = 15. Then divide by 3: x = 5.</p><p>For equations with variables on both sides, collect variable terms on one side and constants on the other. Example: 5x − 2 = 2x + 10 → 3x = 12 → x = 4.</p><p>Distribute multiplication across parentheses: 2(x + 3) = 2x + 6. Keep track of negative signs.</p>`, [
          fill('Solve 2x + 5 = 17.', ['6'], 'Subtract 5: 2x = 12. Divide by 2: x = 6.'),
          mc('Solve 4y − 3 = 21.', ['4','6','7','8'], 1, 'Add 3 to get 4y = 24; divide by 4 to get y = 6.', null, true),
          fill('Solve 5x − 7 = 18.', ['5'], 'Add 7: 5x = 25. Divide by 5: x = 5.'),
          mc('Simplify 3(x + 4).', ['3x + 4','x + 12','3x + 12','7x'], 2, 'Distribute 3 to both terms: 3x + 12.'),
          fill('Solve 5x = 2x + 21.', ['7'], 'Subtract 2x: 3x = 21, so x = 7.')], '#e76f51'),
      level('🚀 High School · Algebra', 'ma12', 'Inequality Orbit', 'Solve and interpret inequalities', '≤', 'Boundary Conditions Lab', 'Range Finder', 'Find all values that satisfy a constraint, not just one value.',
        `<h3>Inequalities describe ranges</h3><p><b>x &gt; 4</b> means x is greater than 4; <b>x ≤ 4</b> includes 4. You can add or subtract the same number on both sides without changing the inequality direction.</p><p>When multiplying or dividing both sides by a <b>negative</b> number, reverse the inequality sign. Example: −2x &gt; 8 → x &lt; −4.</p><p>On a number line, an open circle means the endpoint is not included; a closed circle means it is included.</p>`, [
          mc('Which value satisfies x > 3?', ['3','2','4','−1'], 2, '4 is greater than 3. The endpoint 3 itself is not included.'),
          fill('Solve x + 5 ≤ 12. Give the boundary value.', ['7'], 'Subtract 5: x ≤ 7, so the boundary value is 7.'),
          mc('Solve 2x < 10.', ['x < 5','x > 5','x < 12','x > 12'], 0, 'Divide both sides by positive 2: x < 5.'),
          mc('Solve −3x ≥ 12.', ['x ≥ −4','x ≤ −4','x ≥ 4','x ≤ 4'], 1, 'Divide by −3 and reverse the sign: x ≤ −4.'),
          fill('If 4 ≤ x < 9, name the smallest integer x can be.', ['4'], 'The lower endpoint is included, so the smallest integer is 4.')], '#c084fc'),
      level('🚀 High School · Algebra', 'ma13', 'Coordinate & Linear Systems', 'Coordinates, slope, and linear relationships', '📈', 'Vector Navigation', 'Trajectory Plotter', 'Model how position changes over time.',
        `<h3>Coordinates and slope</h3><p>A point is written (x, y): move horizontally along x, then vertically along y. The origin is (0, 0).</p><p>The slope of a line is <b>change in y ÷ change in x</b>: m = (y₂ − y₁)/(x₂ − x₁). A line with slope 2 rises 2 units for every 1 unit moved right.</p><p>Slope-intercept form is <b>y = mx + b</b>, where m is slope and b is the y-intercept (the y-value when x = 0).</p>`, [
          mc('In the point (−2, 5), what is the x-coordinate?', ['−2','5','2','−5'], 0, 'Coordinates are ordered (x, y), so x = −2.'),
          fill('For y = 3x + 2, find y when x = 4.', ['14'], 'Substitute x = 4: y = 3(4) + 2 = 14.'),
          mc('What is the slope between (1, 2) and (3, 8)?', ['2','3','4','6'], 1, 'Slope = (8 − 2)/(3 − 1) = 6/2 = 3.'),
          fill('A line is y = 2x − 5. What is its y-intercept?', ['-5','−5'], 'In y = mx + b, b is the y-intercept: −5.'),
          mc('Which point lies on y = x + 1?', ['(2, 2)','(2, 3)','(3, 1)','(0, 0)'], 1, 'When x = 2, y = 2 + 1 = 3, so (2, 3) lies on the line.')], '#3b82f6'),
      level('🚀 High School · Algebra', 'ma14', 'Geometry & Measurement', 'Area, volume, and the Pythagorean theorem', '📏', 'Stellar Structures', 'Habitat Designer', 'Check dimensions before building a space habitat.',
        `<h3>Measure two- and three-dimensional shapes</h3><p>Rectangle area: A = lw. Triangle area: A = ½bh. Circle circumference: C = 2πr; circle area: A = πr².</p><p>Rectangular prism volume is V = lwh. Use square units for area and cubic units for volume.</p><p>For a right triangle, the Pythagorean theorem is <b>a² + b² = c²</b>, where c is the hypotenuse, opposite the right angle. A 3-4-5 triangle works because 3² + 4² = 9 + 16 = 25 = 5².</p>`, [
          fill('A rectangle is 9 m long and 4 m wide. Find its area in square meters.', ['36'], 'Area = length × width = 9 × 4 = 36 m².'),
          mc('A triangle has base 10 cm and height 6 cm. What is its area?', ['60 cm²','30 cm²','16 cm²','32 cm²'], 1, 'Area = ½ × base × height = ½ × 10 × 6 = 30 cm².'),
          fill('A box measures 3 × 4 × 5 cm. Find its volume in cm³.', ['60'], 'Volume = length × width × height = 3 × 4 × 5 = 60 cm³.'),
          mc('A right triangle has legs 6 and 8. What is the hypotenuse?', ['7','9','10','14'], 2, 'c² = 6² + 8² = 36 + 64 = 100, so c = 10.'),
          fill('A circle has radius 3. Write its area in terms of π.', ['9pi','9π','9 pi'], 'A = πr² = π × 3² = 9π square units.')], '#2a9d8f'),
      level('🌌 High School · Functions & Data', 'ma15', 'Functions, Exponents & Probability', 'Functions, quadratic patterns, and data reasoning', 'ƒ', 'Probability Observatory', 'Pattern Predictor', 'Predict outcomes from functions and quantify uncertainty.',
        `<h3>Functions and mathematical models</h3><p>A function assigns each input exactly one output. For f(x) = 2x + 1, f(3) = 2(3) + 1 = 7.</p><p>Quadratic expressions include x². For example, x² = 25 has solutions x = 5 and x = −5 because both square to 25.</p><p>For independent events, multiply probabilities: the chance of heads twice in a row with a fair coin is ½ × ½ = ¼. The mean is the sum of values divided by the number of values.</p><p>Exponential growth multiplies by a constant factor over equal steps; linear growth adds a constant amount.</p>`, [
          fill('If f(x) = 2x + 1, calculate f(6).', ['13'], 'Replace x with 6: 2 × 6 + 1 = 13.'),
          mc('Solve x² = 49.', ['x = 7 only','x = −7 only','x = 7 or x = −7','x = 24'], 2, 'Both 7² and (−7)² equal 49, so there are two real solutions.'),
          fill('Find the mean of 4, 6, 8, and 10.', ['7'], 'Sum = 28; divide by 4 values: mean = 7.'),
          mc('A fair coin is flipped twice. What is the probability of heads both times?', ['1/2','1/3','1/4','3/4'], 2, 'Independent events: 1/2 × 1/2 = 1/4.'),
          mc('A quantity doubles each hour. It starts at 3. How much after 4 hours?', ['12','24','36','48'], 3, '3 → 6 → 12 → 24 → 48: four doublings gives 3 × 2⁴ = 48.')], '#8b5cf6')
  ];

  // School-band foundations: Basic → Intermediate → Middle → High
  // Each band packages related topics; its Endless Gauntlet draws from the WHOLE band.
  const retier = (levels, sectionById) => levels.map((l) => Object.assign({}, l, { tier: sectionById[l.id] || l.tier }));
  const mod = (id, name, icon, c1, c2, tag, levels) => {
    window.COURSES[id] = { name, icon, c1, c2, tagline: tag, levels, school: id.replace('math_', '') };
  };

  // Basic School — number sense & the four operations
  mod('math_basic', 'Basic School', '🌱', '#2a9d8f', '#e9c46a',
    'Number sense, addition, subtraction, multiplication, and division.',
    retier(allMathLevels.slice(0, 5), {
      ma0: '🔢 Number Sense',
      ma1: '➕ Addition',
      ma2: '➖ Subtraction',
      ma3: '✖️ Multiplication',
      ma4: '➗ Division'
    }));

  // Intermediate School — fractions, decimals, percent, measurement
  mod('math_intermediate', 'Intermediate School', '🌿', '#f4a261', '#e76f51',
    'Fractions, decimals, estimation, percents, money, and measurement.',
    retier(allMathLevels.slice(5, 10), {
      ma5: '½ Fractions',
      ma6: '🔢 Decimals',
      'ma6-round': '🎯 Estimation',
      'ma7-life': '🪙 Money & Measurement',
      ma7: '％ Percents & Ratios'
    }));

  // Middle School — pre-algebra
  mod('math_middle', 'Middle School', '🧭', '#8b6cff', '#c084fc',
    'Variables, order of operations, and one-step equations.',
    retier(allMathLevels.slice(10, 13), {
      ma8: 'x Variables',
      ma9: '🧮 Order of Operations',
      ma10: '🟰 One-Step Equations'
    }));

  // High School — algebra, geometry, data
  mod('math_high', 'High School', '🚀', '#ff5f8d', '#8b5cf6',
    'Equations, inequalities, graphs, geometry, functions, and probability.',
    retier(allMathLevels.slice(13, 18), {
      ma11: '📐 Two-Step Equations',
      ma12: '≤ Inequalities',
      ma13: '📈 Linear Graphs',
      ma14: '📏 Geometry',
      ma15: 'ƒ Functions & Data'
    }));

  // Per-school gauntlet: comprehensive pool from every mission in that school band
  const int = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
  const opts = (answer, distractors) => {
    const unique = [...new Set([String(answer), ...distractors.map(String)])].slice(0, 4);
    while (unique.length < 4) unique.push(String(Number(answer) + unique.length + 2));
    const shuffled = shuffle(unique);
    return { options: shuffled, answer: shuffled.indexOf(String(answer)), textOpts: true };
  };
  const gauntletFromLevels = (levels) => {
    const qs = levels.flatMap((l) => l.challenges).filter((q) => q.type === 'mc');
    const make = (tier) => () => {
      if (!qs.length) return { type: 'mc', q: 'Practice more missions first!', options: ['OK'], answer: 0, why: 'Complete missions to unlock gauntlet questions.' };
      const q = Object.assign({}, qs[Math.floor(Math.random() * qs.length)]);
      if (tier >= 2) q.q = q.q + ' (think carefully)';
      return q;
    };
    return [0, 1, 2, 3].map(make);
  };
  window.SURVIVAL = window.SURVIVAL || {};
  ['math_basic', 'math_intermediate', 'math_middle', 'math_high'].forEach((id) => {
    window.SURVIVAL[id] = gauntletFromLevels(window.COURSES[id].levels);
  });

  // Shared procedural generators kept for Extra Practice / Daily (general math pool)
  const M = [[], [], [], []];
  M[0].push(() => { const a=int(12,99), b=int(11,89), ans=a+b; return Object.assign({q:`A cargo manifest lists ${a} containers and ${b} more. What is the total?`,why:`Add the two amounts: ${a} + ${b} = ${ans}.`},opts(ans,[ans+1,ans-1,Math.abs(a-b)]),{type:'mc'}); });
  M[0].push(() => { const a=int(3,12), b=int(3,12), ans=a*b; return Object.assign({q:`Calculate ${a} × ${b}.`,why:`${a} groups of ${b} gives ${ans}.`},opts(ans,[a+b,ans+a,ans-b]),{type:'mc'}); });
  M[0].push(() => { const a=int(20,120), b=int(2,12), ans=a-b; return Object.assign({q:`Calculate ${a} − ${b}.`,why:`Subtract ${b} from ${a}: ${ans}.`},opts(ans,[a+b,ans+10,ans-10]),{type:'mc'}); });
  M[0].push(() => { const a=int(111,999), place=pick([10,100]), ans=Math.round(a/place)*place; return Object.assign({q:`Round ${a} to the nearest ${place===10?'ten':'hundred'}.`,why:`Look at the digit immediately to the right of the ${place===10?'tens':'hundreds'} place. ${a} rounds to ${ans}.`},opts(ans,[ans+place,ans-place,a]),{type:'mc'}); });
  M[0].push(() => { const a=int(11,99)/10, b=int(11,99)/10, ans=+(a+b).toFixed(1); return Object.assign({q:`What is ${a.toFixed(1)} + ${b.toFixed(1)}?`,why:`Line up the decimal points: ${a.toFixed(1)} + ${b.toFixed(1)} = ${ans.toFixed(1)}.`},opts(ans,[+(ans+0.1).toFixed(1),+(ans-0.1).toFixed(1),+(a*b).toFixed(1)]),{type:'mc'}); });
  M[1].push(() => { const a=int(2,15), b=int(2,12), ans=a*b; return {type:'fill',q:`Type the product of ${a} and ${b}.`,answers:[String(ans)],why:`${a} × ${b} = ${ans}.`}; });
  M[1].push(() => { const a=int(3,18), b=int(2,12), n=a*b; return {type:'fill',q:`Calculate ${n} ÷ ${a}.`,answers:[String(b)],why:`Division reverses multiplication: ${a} × ${b} = ${n}.`}; });
  M[1].push(() => { const x=int(2,12), a=int(2,8), b=int(1,15), ans=a*x+b; return {type:'fill',q:`If x = ${x}, calculate ${a}x + ${b}.`,answers:[String(ans)],why:`Substitute x = ${x}: ${a}(${x}) + ${b} = ${ans}.`}; });
  M[1].push(() => { const a=int(11,99)/10, b=int(11,99)/10, ans=+(a*b).toFixed(2); return {type:'fill',q:`Calculate ${a.toFixed(1)} × ${b.toFixed(1)}.`,answers:[String(ans),ans.toFixed(2)],why:`Multiply as whole numbers, then count the two decimal places: ${a.toFixed(1)} × ${b.toFixed(1)} = ${ans}.`}; });
  M[1].push(() => { const a=int(2,12), b=int(2,12), n=a*b; return {type:'fill',q:`A pack has ${a} stickers. How many stickers are in ${b} packs?`,answers:[String(n)],why:`Equal groups: ${a} × ${b} = ${n} stickers.`}; });
  M[2].push(() => { const a=int(2,9), b=int(2,9), ans=a+b; const wrong=a*b; return Object.assign({q:`A learner says ${a} + ${b} = ${wrong}. What mistake did they likely make?`,why:`They multiplied instead of adding. ${a} + ${b} = ${ans}, while ${a} × ${b} = ${wrong}.`},opts('They multiplied instead of adding',['They subtracted','They divided','They used a variable']),{type:'mc'}); });
  M[2].push(() => { const a=int(2,9), b=int(2,9), x=a+b; return Object.assign({q:`Solve x + ${a} = ${x}. Which inverse operation isolates x?`,why:`Subtract ${a} from both sides: x = ${x} − ${a} = ${b}.`},opts('Subtract the same number from both sides',['Multiply only the left side','Add the same number to the left side','Delete the variable']),{type:'mc'}); });
  M[2].push(() => { const a=int(2,8), b=int(2,8), v=a+b; return Object.assign({q:`Evaluate ${a} + ${b} × 2. What should happen first?`,why:`Multiplication comes before addition: ${b} × 2 = ${b*2}, then add ${a} to get ${a+b*2}.`},opts('Multiply before adding',['Add before multiplying','Always work right to left','Square both numbers']),{type:'mc'}); });
  M[2].push(() => { const a=int(100,999)/100, rounded=Math.round(a*10)/10, down=Math.floor(a*10)/10; return Object.assign({q:`A student rounds ${a.toFixed(2)} to the nearest tenth and says ${down.toFixed(1)}. Is that correct?`,why:`Check the hundredths digit. ${a.toFixed(2)} rounds to ${rounded.toFixed(1)}.`,},opts(rounded===down?'Yes, that is correct':`No, it rounds to ${rounded.toFixed(1)}`,['Always drop the extra digits','Round every decimal up','It must be rounded to a whole number']),{type:'mc'}); });
  M[3].push(() => { const x=int(2,12), a=int(2,6), b=int(1,12), ans=a*x-b; return {type:'fill',q:`Solve ${a}x − ${b} = ${ans}. Type x.`,answers:[String(x)],why:`Add ${b}: ${a}x = ${ans+b}. Divide by ${a}: x = ${x}.`}; });
  M[3].push(() => { const a=int(3,12), b=int(3,12), c=a*a+b*b; const r=Math.sqrt(c); if (!Number.isInteger(r)) return {type:'fill',q:`Evaluate ${a}².`,answers:[String(a*a)],why:`${a}² = ${a} × ${a} = ${a*a}.`}; return {type:'fill',q:`A right triangle has legs ${a} and ${b}. Find the hypotenuse.`,answers:[String(r)],why:`Use a² + b² = c²: ${a*a} + ${b*b} = ${c}, so c = ${r}.`}; });
  M[3].push(() => { const a=int(2,8), b=int(2,10), ans=a*b; return {type:'fill',q:`A rectangle is ${a} units by ${b} units. What is its area?`,answers:[String(ans)],why:`Area = length × width = ${a} × ${b} = ${ans} square units.`}; });
  M[3].push(() => { const dollars=int(2,15), cents=pick([25,50,75,95]), count=int(2,5), total=+(dollars+cents/100).toFixed(2), exact=+(total*count).toFixed(2); return {type:'fill',q:`A notebook costs $${total.toFixed(2)}. What do ${count} notebooks cost? Enter dollars and cents (example: 12.50).`,answers:[exact.toFixed(2),String(exact)],why:`Multiply the price by the number of notebooks: $${total.toFixed(2)} × ${count} = $${exact.toFixed(2)}.`}; });
  // General procedural pool available for daily / extra practice fallbacks
  window.MATH_PRACTICE_POOL = M;
})();
