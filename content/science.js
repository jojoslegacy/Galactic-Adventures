/* Galactic Academy — Science
   Kid-friendly foundations: living things & matter → energy & Earth systems → inquiry & systems thinking.
   Same mission / gauntlet structure. Space-station framing where natural.
*/
(() => {
  'use strict';
  const mc = (q, options, answer, why) => ({ type: 'mc', q, options, answer, why, textOpts: true });
  const fill = (q, answers, why) => ({ type: 'fill', q, answers: answers.map(String), why, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson science-lesson">${html}</div>`;
  const mk = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  const all = [];

  // ═══════════════════════════════════════════════════════════════
  // BASIC · Life & Matter Lab
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🔬 Life & Matter Lab', 'sc0', 'Living vs Nonliving', 'What makes something alive?', '🌱',
    'Science Crew', 'Life Scanner', 'Sort station samples into living and nonliving.',
    `<h3>Living things share key traits</h3>
    <p>Living things (organisms) typically: grow, need energy, respond to their surroundings, reproduce, and are made of cells. Plants, animals, fungi, and many microscopic organisms are living.</p>
    <p>Nonliving things do not do all of these. A rock does not grow or reproduce. Water is essential to life but is not itself alive.</p>
    <p>On a space station, crews carefully separate living habitats (plants, crew) from equipment and materials.</p>`, [
      mc('Which is a living thing?', ['a rock', 'a seedling plant', 'a metal bolt', 'a glass of water'], 1, 'A seedling grows, needs energy, and is made of cells.'),
      mc('Living things typically need:', ['nothing at all', 'energy and the ability to respond to surroundings', 'only darkness', 'only plastic'], 1, 'Energy and response to the environment are core traits.'),
      mc('Water is:', ['always a living organism', 'nonliving but essential to life', 'a type of animal', 'made of cells that reproduce'], 1, 'Water is nonliving yet vital for organisms.'),
      fill('Type the word for a living thing (plant, animal, or microbe).', ['organism'], 'Organism = living thing.'),
      mc('A robot that moves but does not grow or reproduce is:', ['living', 'nonliving (machine)', 'a plant', 'a fungus'], 1, 'Machines are nonliving even if they move.'),
      build('Build: “Living things need energy.”', ['Living', 'things', 'need', 'energy'], 'Energy use is a hallmark of life.')
    ], '#69d6c5'));

  all.push(mk('🔬 Life & Matter Lab', 'sc1', 'Needs of Living Things', 'Food, water, air, shelter, space', '🫁',
    'Science Crew', 'Habitat Protocol', 'Design a simple habitat checklist for station life.',
    `<h3>Organisms need resources</h3>
    <p>Most living things need: <b>energy</b> (food or sunlight for plants), <b>water</b>, <b>gases</b> (oxygen for many animals; carbon dioxide for plants’ photosynthesis), <b>shelter</b> or suitable conditions, and enough <b>space</b>.</p>
    <p>Plants make their own food using sunlight (photosynthesis). Animals get energy by eating plants or other animals.</p>
    <p>If a need is missing, the organism is stressed or cannot survive.</p>`, [
      mc('Plants mainly get energy from:', ['eating animals', 'sunlight (photosynthesis)', 'only rocks', 'electricity only'], 1, 'Photosynthesis uses light energy.'),
      mc('Many animals need which gas to live?', ['helium only', 'oxygen', 'only carbon dioxide to breathe in', 'neon'], 1, 'Oxygen is required for animal respiration.'),
      mc('If a plant gets no water for a long time, it will likely:', ['grow faster forever', 'wilt and may die', 'turn into an animal', 'need no energy'], 1, 'Water is essential; without it plants fail.'),
      fill('Type the process plants use to make food from sunlight.', ['photosynthesis'], 'Photosynthesis = light-powered food making in plants.'),
      mc('Shelter helps living things by:', ['removing all needs', 'providing protection and suitable conditions', 'replacing food forever', 'stopping growth always'], 1, 'Shelter supports survival conditions.'),
      build('Build: “Animals get energy by eating.”', ['Animals', 'get', 'energy', 'by', 'eating'], 'Consumers obtain energy from food.')
    ], '#4de1ff'));

  all.push(mk('🔬 Life & Matter Lab', 'sc2', 'Matter and Materials', 'Solid, liquid, gas', '🧊',
    'Science Crew', 'Matter Mapper', 'Classify samples by state of matter.',
    `<h3>Matter is anything that has mass and takes up space</h3>
    <p>Common <b>states of matter</b>:</p>
    <p><b>Solid</b> — keeps its shape (ice, metal panel).<br>
    <b>Liquid</b> — takes the shape of its container (water, oil).<br>
    <b>Gas</b> — spreads out to fill available space (air, steam).</p>
    <p>Heating and cooling can change state: ice → water → steam. These are physical changes; the substance is still water (H₂O).</p>`, [
      mc('A solid typically:', ['fills any room like air', 'keeps its own shape', 'has no mass', 'cannot be touched'], 1, 'Solids hold shape.'),
      mc('Liquid water poured into a cup:', ['keeps a cube shape in air', 'takes the shape of the cup', 'becomes a gas instantly always', 'disappears'], 1, 'Liquids take container shape.'),
      mc('Air is best classified as a:', ['solid', 'liquid', 'gas', 'living organism'], 2, 'Air is a mixture of gases.'),
      fill('Type the state of matter that keeps its own shape.', ['solid'], 'Solids maintain shape.'),
      mc('Melting ice into water is mainly a:', ['change into a new element', 'physical change of state', 'living process', 'type of animal growth'], 1, 'State change; still H₂O.'),
      build('Build: “Matter takes up space.”', ['Matter', 'takes', 'up', 'space'], 'Matter has mass and volume.')
    ], '#f4a261'));

  all.push(mk('🔬 Life & Matter Lab', 'sc3', 'Forces and Motion', 'Pushes, pulls, and movement', '⚙️',
    'Science Crew', 'Motion Bay', 'Predict how pushes and pulls change motion.',
    `<h3>Forces change motion</h3>
    <p>A <b>force</b> is a push or a pull. Forces can start motion, stop motion, speed things up, slow them down, or change direction.</p>
    <p><b>Gravity</b> pulls objects toward Earth (or toward any large mass). On a station, crews train for microgravity, where familiar pulls feel different.</p>
    <p><b>Friction</b> is a force that resists motion when surfaces rub. Smooth surfaces often have less friction than rough ones.</p>`, [
      mc('A force is best described as a:', ['color', 'push or pull', 'type of plant', 'state of matter only'], 1, 'Force = push or pull.'),
      mc('Gravity on Earth pulls objects:', ['sideways only', 'toward Earth’s center (downward)', 'only upward', 'randomly with no pattern'], 1, 'Gravity attracts toward the planet’s mass.'),
      mc('Friction tends to:', ['always speed objects up', 'resist motion between surfaces', 'create new matter', 'remove all gravity'], 1, 'Friction opposes sliding motion.'),
      fill('Type the force that pulls objects toward Earth.', ['gravity'], 'Gravity is the attractive force toward Earth.'),
      mc('If you push a floating tool on the station, it will mostly:', ['stay still forever with no force', 'move in the direction of the push until another force acts', 'always fall down immediately', 'turn into a liquid'], 1, 'Motion continues until forces change it (inertia idea).'),
      build('Build: “A force is a push or pull.”', ['A', 'force', 'is', 'a', 'push', 'or', 'pull'], 'Core definition.')
    ], '#8b6cff'));

  all.push(mk('🔬 Life & Matter Lab', 'sc4', 'Sun, Earth, and Sky', 'Day, night, and our star', '☀️',
    'Science Crew', 'Orbit Observer', 'Explain day, night, and why the Sun matters.',
    `<h3>Earth turns; the Sun lights one side</h3>
    <p><b>Day and night</b> happen because Earth <b>rotates</b> (spins) on its axis. The side facing the Sun has day; the side facing away has night.</p>
    <p>The Sun is a <b>star</b> — a giant ball of hot gas that provides light and heat. Earth <b>orbits</b> (revolves around) the Sun about once per year; that journey plus Earth’s tilt relates to seasons.</p>
    <p>The Moon orbits Earth and does not make its own visible light; we see it by reflected sunlight.</p>`, [
      mc('Day and night are caused mainly by:', ['the Sun turning off', 'Earth rotating on its axis', 'the Moon blocking all light every night', 'clouds only'], 1, 'Earth’s rotation creates day/night.'),
      mc('The Sun is a:', ['planet', 'star', 'moon', 'comet only'], 1, 'The Sun is our star.'),
      mc('We see the Moon shining mainly because:', ['it is on fire', 'it reflects sunlight', 'it is a star', 'Earth paints it'], 1, 'Moonlight is reflected sunlight.'),
      fill('Type the word for Earth spinning on its axis.', ['rotation', 'rotate', 'rotating'], 'Rotation causes day and night.'),
      mc('Earth’s path around the Sun is called an:', ['axis', 'orbit', 'force', 'solid'], 1, 'Orbit = path around another body.'),
      build('Build: “Earth rotates to make day and night.”', ['Earth', 'rotates', 'to', 'make', 'day', 'and', 'night'], 'Spin explains the cycle.')
    ], '#e9c46a'));

  all.push(mk('🔬 Life & Matter Lab', 'sc5', 'Weather Watch', 'Temperature, wind, precipitation', '🌦️',
    'Science Crew', 'Weather Beacon', 'Read basic weather conditions for a safe EVA plan.',
    `<h3>Weather is the short-term state of the atmosphere</h3>
    <p><b>Temperature</b> — how hot or cold the air is.<br>
    <b>Wind</b> — moving air.<br>
    <b>Precipitation</b> — water falling as rain, snow, sleet, or hail.<br>
    <b>Clouds</b> form when water vapor cools and condenses into tiny droplets or ice crystals.</p>
    <p><b>Climate</b> is the long-term pattern of weather in a place (years), not today’s single forecast.</p>`, [
      mc('Weather describes:', ['only rocks underground', 'short-term conditions of the atmosphere', 'only the Sun’s core', 'animal cells'], 1, 'Weather = short-term atmospheric state.'),
      mc('Precipitation includes:', ['only sunshine', 'rain and snow', 'only wind direction', 'only temperature numbers'], 1, 'Rain, snow, etc. are precipitation.'),
      mc('Climate is best described as:', ['today’s hourly forecast only', 'long-term weather patterns of a place', 'a single cloud', 'one thunderstorm'], 1, 'Climate = long-term pattern.'),
      fill('Type the word for water falling from clouds as rain or snow.', ['precipitation'], 'Precipitation = falling water in any form.'),
      mc('Wind is:', ['still air', 'moving air', 'a type of rock', 'only found in space vacuums'], 1, 'Wind = air in motion.'),
      build('Build: “Climate is a long-term pattern.”', ['Climate', 'is', 'a', 'long-term', 'pattern'], 'Climate ≠ single-day weather.')
    ], '#35f0c0'));

  // ═══════════════════════════════════════════════════════════════
  // INTERMEDIATE · Systems & Energy
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🌍 Systems Deck', 'sc6', 'Life Cycles', 'Birth, growth, reproduction, death', '🔄',
    'Science Crew', 'Cycle Tracker', 'Trace a plant or animal life cycle for the bio lab log.',
    `<h3>Life cycles describe stages of life</h3>
    <p>Many organisms go through stages: beginning (seed, egg, birth), growth, maturity, reproduction, and eventual end of life. Offspring continue the cycle.</p>
    <p>Examples: seed → seedling → plant → flower → seed; egg → larva → pupa → adult (some insects); baby → child → adult (mammals).</p>
    <p>Life cycles differ, but reproduction links one generation to the next.</p>`, [
      mc('A life cycle describes:', ['only the weather', 'stages an organism goes through in life', 'only rocks melting', 'forces in space only'], 1, 'Life cycle = stages of an organism’s life.'),
      mc('Seeds are important because they can:', ['never grow', 'grow into new plants', 'turn into animals directly', 'block all sunlight forever'], 1, 'Seeds continue the plant life cycle.'),
      mc('Reproduction’s role in a life cycle is to:', ['end all growth', 'produce offspring that continue the species', 'stop energy use', 'remove all water'], 1, 'Offspring continue the line.'),
      fill('Type the stage when an organism produces offspring.', ['reproduction', 'reproduce'], 'Reproduction produces the next generation.'),
      mc('A caterpillar becoming a butterfly is part of a:', ['rock cycle only', 'life cycle (metamorphosis)', 'weather forecast', 'force diagram only'], 1, 'Metamorphosis is a dramatic life-cycle path.'),
      build('Build: “Offspring continue the life cycle.”', ['Offspring', 'continue', 'the', 'life', 'cycle'], 'Generations link through reproduction.')
    ], '#69d6c5'));

  all.push(mk('🌍 Systems Deck', 'sc7', 'Food Chains & Webs', 'Energy moves through ecosystems', '🕸️',
    'Science Crew', 'Energy Web', 'Map who eats whom in a simple ecosystem.',
    `<h3>Energy flows from the Sun through living links</h3>
    <p><b>Producers</b> (plants, algae) make food from sunlight.<br>
    <b>Consumers</b> eat other organisms: herbivores (plants), carnivores (animals), omnivores (both).<br>
    <b>Decomposers</b> (fungi, many bacteria) break down dead material and recycle nutrients.</p>
    <p>A <b>food chain</b> is one path (grass → rabbit → fox). A <b>food web</b> shows many connected paths. Energy is lost as heat at each step, so ecosystems need ongoing sunlight.</p>`, [
      mc('Producers mainly:', ['only eat animals', 'make food using sunlight', 'are always decomposers', 'live without energy'], 1, 'Producers photosynthesize.'),
      mc('A herbivore eats:', ['only metal', 'plants', 'only other carnivores exclusively by definition', 'only rocks'], 1, 'Herbivores consume plants.'),
      mc('Decomposers help ecosystems by:', ['blocking all sunlight', 'breaking down dead material and recycling nutrients', 'removing all producers', 'stopping food chains forever'], 1, 'Decomposers recycle matter.'),
      fill('Type the word for organisms that make food from sunlight.', ['producers', 'producer'], 'Producers form the base of food chains.'),
      mc('A food web is:', ['only one straight chain', 'many connected feeding relationships', 'only about weather', 'a type of solid metal'], 1, 'Webs show interconnected chains.'),
      build('Build: “Energy flows from the Sun.”', ['Energy', 'flows', 'from', 'the', 'Sun'], 'Sunlight powers most ecosystems.')
    ], '#4de1ff'));

  all.push(mk('🌍 Systems Deck', 'sc8', 'Habitats & Ecosystems', 'Where organisms live and interact', '🏞️',
    'Science Crew', 'Habitat Mapper', 'Match organisms to habitats and interactions.',
    `<h3>Habitat vs ecosystem</h3>
    <p>A <b>habitat</b> is the place where an organism lives (forest, pond, desert, coral reef).</p>
    <p>An <b>ecosystem</b> includes living things <b>and</b> nonliving parts (water, soil, sunlight, air) interacting in an area.</p>
    <p>Organisms <b>adapt</b> over generations to fit their habitats (thick fur in cold climates, shapes that hide from predators). Sudden habitat loss can threaten survival.</p>`, [
      mc('A habitat is:', ['only a food chain diagram', 'the place where an organism lives', 'only the Sun', 'a type of force'], 1, 'Habitat = home environment.'),
      mc('An ecosystem includes:', ['only animals', 'living and nonliving parts interacting', 'only one rock', 'only human buildings always'], 1, 'Biotic + abiotic interactions.'),
      mc('An adaptation helps an organism:', ['ignore all needs', 'survive and reproduce in its environment', 'stop being alive', 'remove the Sun'], 1, 'Adaptations fit organisms to habitats.'),
      fill('Type the word for the place where an organism lives.', ['habitat'], 'Habitat = living place.'),
      mc('If a wetland is drained, wetland species may:', ['always thrive more', 'lose the habitat they depend on', 'need no water anymore', 'turn into desert plants instantly always'], 1, 'Habitat loss threatens dependent species.'),
      build('Build: “Ecosystems include living and nonliving parts.”', ['Ecosystems', 'include', 'living', 'and', 'nonliving', 'parts'], 'Full system view.')
    ], '#35f0c0'));

  all.push(mk('🌍 Systems Deck', 'sc9', 'Forms of Energy', 'Light, heat, motion, stored energy', '⚡',
    'Science Crew', 'Energy Scanner', 'Identify energy forms in station systems.',
    `<h3>Energy makes change possible</h3>
    <p>Energy is the ability to cause change or do work. Common forms:</p>
    <p><b>Light</b> · <b>Heat (thermal)</b> · <b>Motion (kinetic)</b> · <b>Stored / potential</b> (e.g., a stretched spring, chemical energy in food or fuel) · <b>Electrical</b> · <b>Sound</b></p>
    <p>Energy can transform from one form to another (electrical → light in a lamp) but is not created from nothing or destroyed in ordinary processes (conservation of energy).</p>`, [
      mc('Energy is best described as the ability to:', ['only sit still', 'cause change or do work', 'remove all matter', 'stop time'], 1, 'Energy enables change/work.'),
      mc('A moving cart has mainly:', ['only potential energy of height always', 'kinetic (motion) energy', 'no energy', 'only sound energy always'], 1, 'Moving objects have kinetic energy.'),
      mc('A lamp converting electricity to light is an example of:', ['destroying energy completely', 'energy transformation', 'creating matter from nothing', 'stopping all forces'], 1, 'Forms change; energy is transformed.'),
      fill('Type the energy of motion.', ['kinetic', 'kinetic energy'], 'Kinetic = energy of motion.'),
      mc('Food contains stored chemical energy that your body can:', ['never use', 'transform into activity and heat', 'turn into pure light only', 'remove gravity with'], 1, 'Chemical energy in food fuels life processes.'),
      build('Build: “Energy can change forms.”', ['Energy', 'can', 'change', 'forms'], 'Transformation is common.')
    ], '#f4a261'));

  all.push(mk('🌍 Systems Deck', 'sc10', 'Heat and Temperature', 'How heat moves', '🔥',
    'Science Crew', 'Thermal Protocol', 'Explain warming and cooling on the station.',
    `<h3>Heat flows from warmer to cooler</h3>
    <p><b>Temperature</b> measures how hot or cold something is (average particle motion).</p>
    <p><b>Heat</b> is energy transferring because of temperature difference. It flows from warmer objects to cooler ones until they are closer in temperature.</p>
    <p>Ways heat moves: <b>conduction</b> (through touching materials), <b>convection</b> (through moving fluids like air or water), <b>radiation</b> (through electromagnetic waves, including sunlight across space).</p>`, [
      mc('Heat naturally flows:', ['only from cold to hot', 'from warmer to cooler', 'never between objects', 'only upward always'], 1, 'Hot → cold is the natural direction.'),
      mc('Temperature measures:', ['only mass', 'how hot or cold something is', 'only color', 'only volume of a room'], 1, 'Temperature = hotness/coldness measure.'),
      mc('Sunlight warming your face in space-suit training is mainly:', ['conduction through a metal bar only', 'radiation', 'only convection inside rock', 'friction only'], 1, 'Radiation carries energy through space.'),
      fill('Type the heat-transfer method that works through empty space (like sunlight).', ['radiation'], 'Radiation needs no medium.'),
      mc('A metal spoon heating in hot soup is mainly:', ['radiation through vacuum only', 'conduction', 'a life cycle', 'precipitation'], 1, 'Conduction = through contact.'),
      build('Build: “Heat flows from warmer to cooler.”', ['Heat', 'flows', 'from', 'warmer', 'to', 'cooler'], 'Core thermal rule.')
    ], '#ff5f8d'));

  all.push(mk('🌍 Systems Deck', 'sc11', 'Water Cycle', 'Evaporation, condensation, precipitation', '💧',
    'Science Crew', 'Hydro Loop', 'Trace a drop of water through Earth’s cycle.',
    `<h3>Water moves in a global cycle</h3>
    <p><b>Evaporation</b> — liquid water becomes vapor (often powered by Sun heat).<br>
    <b>Condensation</b> — vapor cools into tiny liquid droplets (clouds).<br>
    <b>Precipitation</b> — water falls as rain, snow, etc.<br>
    <b>Collection</b> — water gathers in oceans, lakes, groundwater, then the cycle continues.</p>
    <p>The water cycle is driven by the Sun’s energy and gravity. Fresh water is limited; keeping it clean matters for life.</p>`, [
      mc('Evaporation turns:', ['ice directly into rock', 'liquid water into vapor', 'vapor into solid metal', 'rain into sunlight'], 1, 'Liquid → gas (vapor).'),
      mc('Clouds form mainly by:', ['evaporation only with no cooling', 'condensation of water vapor', 'rocks floating', 'only wind without moisture'], 1, 'Cooling vapor condenses into droplets.'),
      mc('The water cycle is powered largely by:', ['the Moon’s oceans only', 'the Sun’s energy (and gravity)', 'only human pumps', 'earthquakes alone'], 1, 'Solar energy drives evaporation.'),
      fill('Type the process where water vapor becomes liquid droplets in clouds.', ['condensation'], 'Condensation builds clouds.'),
      mc('After rain falls, water may:', ['disappear from Earth forever always', 'collect in rivers, lakes, oceans, or ground and continue the cycle', 'turn into pure oxygen only', 'stop all plant growth forever'], 1, 'Collection feeds the next loop.'),
      build('Build: “The Sun drives the water cycle.”', ['The', 'Sun', 'drives', 'the', 'water', 'cycle'], 'Energy input from the Sun.')
    ], '#c084fc'));

  // ═══════════════════════════════════════════════════════════════
  // MIDDLE · Inquiry & Earth Systems
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🧪 Inquiry Bay', 'sc12', 'Scientific Method', 'Ask, test, learn', '🔍',
    'Science Crew', 'Method Protocol', 'Run a fair test and record what you learn.',
    `<h3>Science is a way of learning from evidence</h3>
    <p>A simple cycle: <b>question</b> → <b>hypothesis</b> (testable idea) → <b>procedure / experiment</b> → <b>data</b> → <b>conclusion</b> → new questions.</p>
    <p>A <b>fair test</b> changes one factor (variable) at a time when possible, keeps other conditions the same, and measures carefully. Repeating trials builds confidence.</p>
    <p>Scientists share methods and results so others can check them. Being wrong is useful when it leads to a better model.</p>`, [
      mc('A hypothesis should be:', ['impossible to test', 'a testable idea', 'a final law that never changes', 'only a guess with no link to evidence'], 1, 'Hypotheses are testable.'),
      mc('In a fair test you should try to:', ['change every variable at once', 'change one main variable and control others', 'never measure anything', 'hide the procedure'], 1, 'Control variables for clearer results.'),
      mc('Data are:', ['only opinions', 'observations and measurements collected in the test', 'final unchangeable laws always', 'only drawings with no numbers ever'], 1, 'Data = recorded evidence.'),
      fill('Type the word for a testable idea you check with an experiment.', ['hypothesis'], 'Hypothesis = testable proposed answer.'),
      mc('Repeating trials helps because:', ['it wastes time only', 'it shows whether results are consistent', 'it removes all need for measurement', 'it proves opinions without data'], 1, 'Replication builds confidence.'),
      build('Build: “Science learns from evidence.”', ['Science', 'learns', 'from', 'evidence'], 'Evidence is the core.')
    ], '#69d6c5'));

  all.push(mk('🧪 Inquiry Bay', 'sc13', 'Cells — Life’s Building Blocks', 'Basic unit of living things', '🦠',
    'Science Crew', 'Micro Scanner', 'Explain why cells matter for every organism.',
    `<h3>Cells are the basic units of life</h3>
    <p>All living things are made of one or more <b>cells</b>. Cells take in nutrients, get rid of waste, and use energy. Some organisms are single-celled; animals and plants are multicellular.</p>
    <p>Plant cells typically have a cell wall and chloroplasts (for photosynthesis). Animal cells do not have those, but both have a membrane, cytoplasm, and genetic material.</p>
    <p>Microscopes opened this world — most cells are too small to see with the unaided eye.</p>`, [
      mc('The basic unit of living things is the:', ['rock', 'cell', 'cloud', 'force'], 1, 'Cell theory: cells are life’s basic units.'),
      mc('Plant cells often contain chloroplasts to:', ['make food with light', 'only store rocks', 'remove all water', 'stop growth'], 0, 'Chloroplasts support photosynthesis.'),
      mc('Most cells are:', ['larger than a house', 'too small to see without magnification', 'visible from space always', 'nonliving crystals'], 1, 'Microscopes reveal cells.'),
      fill('Type the basic unit of structure and function in living things.', ['cell', 'cells'], 'Cell = basic unit of life.'),
      mc('Multicellular means:', ['made of one cell only', 'made of many cells', 'not alive', 'only gas'], 1, 'Many cells working together.'),
      build('Build: “Living things are made of cells.”', ['Living', 'things', 'are', 'made', 'of', 'cells'], 'Central idea of cell theory.')
    ], '#4de1ff'));

  all.push(mk('🧪 Inquiry Bay', 'sc14', 'Human Body Systems', 'Working together to stay alive', '🫀',
    'Science Crew', 'Bio Systems', 'Match body systems to their jobs.',
    `<h3>Systems cooperate</h3>
    <p><b>Skeletal</b> — support and protection.<br>
    <b>Muscular</b> — movement.<br>
    <b>Respiratory</b> — gas exchange (oxygen in, carbon dioxide out).<br>
    <b>Circulatory</b> — transports blood, nutrients, gases.<br>
    <b>Digestive</b> — breaks down food.<br>
    <b>Nervous</b> — senses and control signals.</p>
    <p>Systems depend on each other: muscles need oxygen delivered by blood; the brain coordinates breathing and movement.</p>`, [
      mc('The respiratory system’s main job is:', ['digesting food only', 'gas exchange (breathing)', 'only making bones', 'only filtering sunlight'], 1, 'Lungs/system exchange gases.'),
      mc('The circulatory system mainly:', ['transports blood and materials', 'only digests proteins', 'only senses sound', 'grows hair only'], 0, 'Heart and vessels transport.'),
      mc('Bones mainly provide:', ['gas exchange', 'support and protection', 'only taste', 'only photosynthesis'], 1, 'Skeletal support/protection.'),
      fill('Type the system that breaks down food for the body to use.', ['digestive', 'digestive system'], 'Digestive system processes food.'),
      mc('The nervous system helps by:', ['only storing fat', 'sensing and sending control signals', 'only circulating blood', 'only forming clouds'], 1, 'Nerves and brain coordinate.'),
      build('Build: “Body systems work together.”', ['Body', 'systems', 'work', 'together'], 'Cooperation keeps organisms alive.')
    ], '#ff5f8d'));

  all.push(mk('🧪 Inquiry Bay', 'sc15', 'Mixtures and Solutions', 'Combining materials', '🧪',
    'Science Crew', 'Mix Lab', 'Separate and describe simple mixtures.',
    `<h3>Mixtures combine substances without new chemicals</h3>
    <p>A <b>mixture</b> contains two or more substances that are not chemically bonded as a new compound. You can often separate them by physical means (filtering, evaporating, picking apart).</p>
    <p>A <b>solution</b> is a mixture where one substance dissolves evenly in another (salt in water). The substance that dissolves is the <b>solute</b>; the liquid that does the dissolving is the <b>solvent</b>.</p>
    <p>Not everything dissolves: sand in water is a mixture you can filter.</p>`, [
      mc('A mixture:', ['always creates a new element', 'combines substances that can often be separated physically', 'is always a living cell', 'destroys all matter'], 1, 'Mixtures are physical combinations.'),
      mc('In salt water, salt is the:', ['solvent', 'solute', 'only gas', 'filter paper'], 1, 'Solute = dissolved substance.'),
      mc('Filtering muddy water separates:', ['only dissolved salt always', 'undissolved particles from liquid', 'light from heat only', 'cells from gravity'], 1, 'Filters catch solids.'),
      fill('Type the liquid that dissolves another substance in a solution.', ['solvent'], 'Solvent does the dissolving.'),
      mc('Sand mixed with water is:', ['a solution of dissolved sand always', 'a mixture that can be filtered', 'a new pure element', 'only a gas'], 1, 'Sand does not dissolve; it can be filtered.'),
      build('Build: “Solutions are a type of mixture.”', ['Solutions', 'are', 'a', 'type', 'of', 'mixture'], 'Even mixtures include solutions.')
    ], '#e9c46a'));

  all.push(mk('🧪 Inquiry Bay', 'sc16', 'Earth’s Layers & Surface', 'Crust to core; slow changes', '🌋',
    'Science Crew', 'Planet Core', 'Describe Earth’s structure and surface change.',
    `<h3>Earth is layered; the surface changes</h3>
    <p>Earth has a thin <b>crust</b>, a thick <b>mantle</b>, and a metal-rich <b>core</b>. Continents and ocean floors are parts of the crust broken into tectonic plates that move slowly.</p>
    <p>Surface changes: weathering and erosion wear rock down; volcanoes and mountain-building build up; earthquakes release energy along plate boundaries.</p>
    <p>These processes are usually slow on human timescales but reshape the planet over millions of years.</p>`, [
      mc('Earth’s thin outer layer is the:', ['core', 'crust', 'only atmosphere', 'mantle only'], 1, 'Crust = outer solid layer.'),
      mc('Tectonic plates are:', ['only clouds', 'large pieces of crust that move slowly', 'only liquid water', 'types of cells'], 1, 'Plates move and interact.'),
      mc('Erosion mainly:', ['builds new magma only', 'wears down and carries away rock and soil', 'stops all rivers', 'creates the inner core'], 1, 'Erosion transports weathered material.'),
      fill('Type Earth’s outermost solid layer.', ['crust'], 'Crust is the outer layer.'),
      mc('Volcanoes can:', ['only cool the mantle forever', 'build new surface material with lava and ash', 'remove all gravity', 'stop plate motion permanently always'], 1, 'Volcanic activity adds material and reshapes land.'),
      build('Build: “Earth’s surface changes over time.”', ['Earth’s', 'surface', 'changes', 'over', 'time'], 'Geologic change is ongoing.')
    ], '#8b6cff'));

  all.push(mk('🧪 Inquiry Bay', 'sc17', 'Capstone: Science Cadet', 'Connect life, matter, energy, and inquiry', '🎓',
    'Science Crew', 'Science Capstone', 'Show you can link the big ideas.',
    `<h3>You are a Science Cadet</h3>
    <p>You have practiced: living vs nonliving, needs of life, matter states, forces, Sun–Earth–sky, weather vs climate, life cycles, food webs, habitats, energy forms, heat flow, water cycle, scientific method, cells, body systems, mixtures, and Earth’s structure.</p>
    <p>Science is curiosity disciplined by evidence — observing, testing, and updating ideas when new data arrive.</p>`, [
      mc('Producers in a food web mainly:', ['only eat carnivores', 'capture energy from sunlight', 'remove all water from Earth', 'stop the water cycle'], 1, 'Producers photosynthesize.'),
      mc('A fair scientific test should:', ['change many variables at once with no records', 'control variables and collect data', 'never state a question', 'hide results always'], 1, 'Controlled tests + data.'),
      mc('Heat flows from:', ['colder to hotter always', 'warmer to cooler', 'nowhere to nowhere', 'only solids to gases with no rule'], 1, 'Warm → cool.'),
      fill('Type the basic unit of living things.', ['cell', 'cells'], 'Cells build organisms.'),
      mc('Day and night on Earth are caused by:', ['the Sun switching off', 'Earth’s rotation', 'only the Moon’s phases', 'weather alone'], 1, 'Rotation creates the day/night cycle.'),
      build('Build: “Evidence guides scientific ideas.”', ['Evidence', 'guides', 'scientific', 'ideas'], 'Core of the scientific habit of mind.')
    ], '#35f0c0'));

  // Register bands
  window.COURSES = window.COURSES || {};
  const retier = (levels, map) => levels.map((l) => Object.assign({}, l, { tier: map[l.id] || l.tier }));
  const band = (id, name, icon, c1, c2, tag, levels) => {
    window.COURSES[id] = { name, icon, c1, c2, tagline: tag, levels };
  };

  band('science_basic', 'Basic · Life & Matter Lab', '🔬', '#69d6c5', '#4de1ff',
    'Living vs nonliving, needs of life, matter states, forces, Sun–Earth–sky, weather.',
    retier(all.slice(0, 6), {
      sc0: '🌱 Living vs Nonliving', sc1: '🫁 Needs of Life', sc2: '🧊 Matter',
      sc3: '⚙️ Forces', sc4: '☀️ Sun & Sky', sc5: '🌦️ Weather'
    }));

  band('science_intermediate', 'Intermediate · Systems Deck', '🌍', '#35f0c0', '#8b6cff',
    'Life cycles, food webs, habitats, energy forms, heat, water cycle.',
    retier(all.slice(6, 12), {
      sc6: '🔄 Life Cycles', sc7: '🕸️ Food Webs', sc8: '🏞️ Habitats',
      sc9: '⚡ Energy', sc10: '🔥 Heat', sc11: '💧 Water Cycle'
    }));

  band('science_middle', 'Middle · Inquiry Bay', '🧪', '#ffc36b', '#ff5f8d',
    'Scientific method, cells, body systems, mixtures, Earth’s layers, capstone.',
    retier(all.slice(12, 18), {
      sc12: '🔍 Method', sc13: '🦠 Cells', sc14: '🫀 Body Systems',
      sc15: '🧪 Mixtures', sc16: '🌋 Earth Layers', sc17: '🎓 Capstone'
    }));

  const gauntletFrom = (lvls) => {
    const qs = lvls.flatMap((l) => l.challenges).filter((q) => q.type === 'mc');
    return [0, 1, 2, 3].map((tier) => () => {
      if (!qs.length) return { type: 'mc', q: 'Complete missions first!', options: ['OK'], answer: 0, why: 'Practice missions to fill the gauntlet.' };
      const q = Object.assign({}, qs[Math.floor(Math.random() * qs.length)]);
      if (tier >= 2) q.q = q.q + ' (think carefully)';
      return q;
    });
  };
  window.SURVIVAL = window.SURVIVAL || {};
  window.SURVIVAL.science_basic = gauntletFrom(all.slice(0, 6));
  window.SURVIVAL.science_intermediate = gauntletFrom(all.slice(6, 12));
  window.SURVIVAL.science_middle = gauntletFrom(all.slice(12, 18));
})();
