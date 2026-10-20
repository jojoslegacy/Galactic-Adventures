/* Galactic Academy — Geography foundations. American, global, map skills, landforms, climate, human geography. */
(() => {
  'use strict';
  const mc = (q, options, answer, why) => ({ type: 'mc', q, options, answer, why, textOpts: true });
  const fill = (q, answers, why) => ({ type: 'fill', q, answers: answers.map(String), why, ci: true });
  const lesson = (html) => `<div class="math-lesson reading-lesson">${html}</div>`;
  const level = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  // --- Map Skills Foundation ---
  const mapLevels = [
    level('🗺️ Map Skills · Foundations', 'geo-m0', 'Directions & Symbols', 'Cardinal directions, map keys, and simple symbols', '🧭', 'Orbit Cartographers', 'Direction Finder', 'Help the scout ship read the star map before landing.',
      `<h3>Maps help us find our way</h3><p><b>North, South, East, West</b> are the cardinal directions. On most maps, north is toward the top. A <b>map key</b> (or legend) explains what symbols mean—a blue line may be a river, a green area a park, a black line a road.</p><p>A <b>compass rose</b> shows directions on the map. Scale tells how distance on the map relates to real distance.</p>`, [
        mc('Which direction is usually at the top of a map?', ['North', 'South', 'East', 'West'], 0, 'Most maps place north at the top.'),
        mc('What does a map key (legend) do?', ['Explains what symbols mean', 'Shows the weather', 'Lists every city name', 'Tells the year only'], 0, 'The key tells what each symbol stands for.'),
        mc('If you face north and turn right, which direction are you facing?', ['East', 'West', 'South', 'North'], 0, 'Turning right from north faces east.'),
        fill('Name one of the four cardinal directions.', ['north', 'south', 'east', 'west', 'North', 'South', 'East', 'West'], 'The four cardinal directions are north, south, east, and west.'),
        mc('A blue line on a map often stands for a', ['river or stream', 'mountain', 'city hall', 'airport only'], 0, 'Water features are commonly shown in blue.')
      ], '#4de1ff'),
    level('🗺️ Map Skills · Foundations', 'geo-m1', 'Grid & Coordinates', 'Latitude, longitude, and using a grid', '📐', 'Grid Guardians', 'Coordinate Scanner', 'Locate the landing zone using the planetary grid.',
      `<h3>Grids pin down places</h3><p><b>Latitude</b> lines run east–west and measure distance north or south of the equator (0°). <b>Longitude</b> lines run north–south and measure east or west of the prime meridian (0°).</p><p>Together, a latitude and longitude pair can name almost any spot on Earth. On simple classroom maps, a letter-number grid works the same way: find the square where the row and column meet.</p>`, [
        mc('Latitude lines measure distance from the', ['equator', 'prime meridian', 'North Pole only', 'nearest ocean'], 0, 'Latitude is measured from the equator.'),
        mc('The equator is at', ['0° latitude', '90° latitude', '0° longitude only', '180° longitude'], 0, 'The equator is 0° latitude.'),
        mc('Longitude lines measure distance from the', ['prime meridian', 'equator', 'Tropic of Cancer', 'International Date Line only'], 0, 'Longitude is measured from the prime meridian.'),
        fill('What is the latitude of the equator? (include the degree symbol or just the number)', ['0', '0°', '0 degrees'], 'The equator is at 0° latitude.'),
        mc('On a map grid labeled A–F across and 1–6 up, square C3 is found by', ['matching column C with row 3', 'adding C and 3', 'looking only at the title', 'ignoring the numbers'], 0, 'Grid coordinates name the intersection of a column and a row.')
      ], '#65c7e8')
  ];

  // --- American Geography ---
  const usLevels = [
    level('🇺🇸 American Geography · Foundations', 'geo-u0', 'Regions of the United States', 'Northeast, South, Midwest, West', '🗽', 'Union Surveyors', 'Region Mapper', 'Chart the regions so supply ships know where to land.',
      `<h3>The United States has major regions</h3><p>Common regions include the <b>Northeast</b> (New England and Mid-Atlantic), the <b>South</b>, the <b>Midwest</b>, and the <b>West</b> (often including the Pacific Coast and Mountain states). Regions share climate, history, or economy patterns, but every state is unique.</p><p>Alaska and Hawaii are part of the United States even though they are not connected to the contiguous 48 states.</p>`, [
        mc('Which region includes states such as Maine and Massachusetts?', ['Northeast', 'South', 'Midwest', 'Southwest only'], 0, 'New England states are part of the Northeast.'),
        mc('Texas is most often grouped with the', ['South (or Southwest)', 'Northeast', 'Pacific Northwest', 'Great Lakes only'], 0, 'Texas is commonly counted with the South or Southwest.'),
        mc('Alaska and Hawaii are', ['U.S. states not part of the contiguous 48', 'Canadian provinces', 'U.S. territories only', 'independent countries'], 0, 'They are states of the United States.'),
        fill('Name one major U.S. region (example: Midwest).', ['Northeast', 'South', 'Midwest', 'West', 'Southwest', 'Pacific', 'New England'], 'Accept common region names such as Northeast, South, Midwest, or West.'),
        mc('The Midwest is known in part for', ['farming and the Great Lakes', 'tropical rainforests', 'being only desert', 'having no rivers'], 0, 'The Midwest includes major agricultural areas and Great Lakes states.')
      ], '#ff8a3d'),
    level('🇺🇸 American Geography · Foundations', 'geo-u1', 'U.S. Landmarks & Capitals', 'Capital city, famous places, and borders', '🏛️', 'Capital Crew', 'Landmark Locator', 'Identify key places so the academy can plan field missions.',
      `<h3>Places that define the map</h3><p>The capital of the United States is <b>Washington, D.C.</b> Famous natural landmarks include the Grand Canyon, Yellowstone, and the Mississippi River. The country borders Canada to the north and Mexico to the south, with oceans on the east and west coasts.</p>`, [
        mc('What is the capital of the United States?', ['Washington, D.C.', 'New York City', 'Los Angeles', 'Chicago'], 0, 'Washington, D.C. is the national capital.'),
        mc('Which country borders the U.S. to the north?', ['Canada', 'Mexico', 'Brazil', 'Russia (land border only in islands)'], 0, 'Canada borders the contiguous U.S. and Alaska.'),
        mc('The Grand Canyon is primarily in', ['Arizona', 'Florida', 'Maine', 'Alaska'], 0, 'The Grand Canyon is in Arizona.'),
        fill('Name the capital of the United States.', ['Washington, D.C.', 'Washington DC', 'Washington D.C.', 'Washington'], 'Washington, D.C. is the capital.'),
        mc('The Mississippi River is famous for', ['flowing through the central United States', 'being only in California', 'forming the border with Canada', 'being a saltwater ocean'], 0, 'It is a major river system of the central U.S.')
      ], '#ffc857')
  ];

  // --- Global Geography ---
  const worldLevels = [
    level('🌍 Global Geography · Foundations', 'geo-w0', 'Continents & Oceans', 'Seven continents and five oceans', '🌐', 'Globe Navigators', 'Continent Chart', 'Label the planet’s major landmasses and seas for the star chart.',
      `<h3>Earth’s big pieces</h3><p>There are <b>seven continents</b>: Africa, Antarctica, Asia, Europe, North America, South America, and Australia (sometimes called Oceania with nearby islands). The five oceans are the Pacific, Atlantic, Indian, Southern (Antarctic), and Arctic.</p><p>Asia is the largest continent by land area; the Pacific is the largest ocean.</p>`, [
        mc('How many continents are commonly recognized?', ['7', '5', '4', '10'], 0, 'Seven continents are the standard count in most classrooms.'),
        mc('Which is the largest ocean?', ['Pacific', 'Atlantic', 'Indian', 'Arctic'], 0, 'The Pacific Ocean is the largest.'),
        mc('Antarctica is', ['a continent', 'an ocean', 'a country in Europe', 'a desert only in name and not a continent'], 0, 'Antarctica is a continent.'),
        fill('Name one of the seven continents.', ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Oceania'], 'Any of the seven continents is correct.'),
        mc('Which ocean is near the North Pole?', ['Arctic Ocean', 'Indian Ocean', 'Southern Ocean only', 'Pacific only'], 0, 'The Arctic Ocean surrounds the North Pole region.')
      ], '#35f0c0'),
    level('🌍 Global Geography · Foundations', 'geo-w1', 'Countries & Capitals Snapshot', 'Major countries and what a capital is', '🏙️', 'World Desk', 'Capital Codex', 'Match nations with their capitals for the diplomatic briefing.',
      `<h3>Countries and capitals</h3><p>A <b>capital</b> is the city where a country’s government is based. Examples: Paris (France), Tokyo (Japan), Brasília (Brazil), Cairo (Egypt), Ottawa (Canada). Knowing a few major countries on each continent helps build a mental map of the world.</p>`, [
        mc('What is a capital city?', ['The city where a country’s government is based', 'Always the largest city', 'A city with no people', 'Only a port city'], 0, 'The capital hosts the main government institutions.'),
        mc('Tokyo is the capital of', ['Japan', 'China', 'South Korea', 'Thailand'], 0, 'Tokyo is Japan’s capital.'),
        mc('Canada’s capital is', ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], 0, 'Ottawa is the capital of Canada.'),
        fill('Name the capital of France.', ['Paris'], 'Paris is the capital of France.'),
        mc('Brasília is the capital of', ['Brazil', 'Argentina', 'Mexico', 'Portugal'], 0, 'Brasília was built as Brazil’s planned capital.')
      ], '#77dfba')
  ];

  // --- Landforms & Climate ---
  const landLevels = [
    level('🏔️ Landforms & Climate · Foundations', 'geo-l0', 'Major Landforms', 'Mountains, plains, plateaus, deserts, islands', '🌋', 'Terrain Scouts', 'Landform Lens', 'Identify the surface features before the rover deploys.',
      `<h3>Shapes of the land</h3><p><b>Mountains</b> rise high above surrounding land. <b>Plains</b> are wide, mostly flat areas. <b>Plateaus</b> are elevated flat lands. <b>Deserts</b> receive very little precipitation. An <b>island</b> is land surrounded by water. A <b>peninsula</b> is land almost surrounded by water but connected to a larger landmass.</p>`, [
        mc('Land surrounded by water is called an', ['island', 'plain', 'plateau', 'isthmus only'], 0, 'An island is completely surrounded by water.'),
        mc('A wide, mostly flat area of land is a', ['plain', 'mountain', 'volcano', 'trench'], 0, 'Plains are extensive flat or gently rolling lands.'),
        mc('Which landform is high and often rocky or peaked?', ['Mountain', 'Plain', 'Delta only', 'Basin only'], 0, 'Mountains are elevated landforms with steep slopes.'),
        fill('Name one major landform (example: mountain).', ['mountain', 'plain', 'plateau', 'desert', 'island', 'peninsula', 'valley', 'hill'], 'Common landforms include mountain, plain, plateau, desert, and island.'),
        mc('A peninsula is', ['land almost surrounded by water', 'completely underwater', 'only found at the poles', 'the same as an island'], 0, 'A peninsula stays connected to a larger landmass.')
      ], '#c084fc'),
    level('🏔️ Landforms & Climate · Foundations', 'geo-l1', 'Climate Basics', 'Weather vs climate, hot/cold, wet/dry patterns', '🌦️', 'Climate Crew', 'Weather Pattern Reader', 'Predict conditions so missions pack the right gear.',
      `<h3>Climate is the long story of weather</h3><p><b>Weather</b> is the day-to-day condition of the atmosphere. <b>Climate</b> is the average weather pattern of a place over many years. Places near the equator tend to be warmer; places near the poles tend to be colder. Mountains, ocean currents, and distance from the sea also shape climate.</p>`, [
        mc('Climate is best described as', ['average weather over many years', 'today’s temperature only', 'a single thunderstorm', 'the phase of the moon'], 0, 'Climate summarizes long-term patterns.'),
        mc('Places near the equator are generally', ['warmer', 'always frozen', 'without any rain ever', 'dark all year'], 0, 'Equatorial regions receive more direct sunlight.'),
        mc('Weather and climate differ because', ['weather is short-term; climate is long-term', 'they mean exactly the same thing', 'climate changes every hour', 'weather never changes'], 0, 'Weather is daily; climate is the long-run average.'),
        fill('Is climate short-term or long-term?', ['long-term', 'long term', 'long'], 'Climate describes long-term average conditions.'),
        mc('Mountains can affect climate by', ['blocking moisture and creating rain shadows', 'making every place tropical', 'removing all wind', 'stopping the seasons'], 0, 'Orographic effects influence precipitation patterns.')
      ], '#8b6cff')
  ];

  // --- Human Geography ---
  const humanLevels = [
    level('👥 Human Geography · Foundations', 'geo-h0', 'People & Places', 'Population, cities, and why people settle', '🏘️', 'Settlement Survey', 'Population Probe', 'Explain why crews choose certain landing sites on a new world.',
      `<h3>Where people live—and why</h3><p>People settle where they can find water, food, safety, and work. <b>Cities</b> grow near coasts, rivers, trade routes, and resources. <b>Population density</b> is how many people live in a given area. Rural areas have fewer people per square mile than urban areas.</p>`, [
        mc('People often settle near', ['water sources and trade routes', 'the coldest deserts only', 'places with no resources', 'active volcano craters only'], 0, 'Water, food, and trade make settlement easier.'),
        mc('Population density measures', ['how many people live in an area', 'only the height of buildings', 'the age of a city', 'rainfall totals'], 0, 'Density is people per unit of area.'),
        mc('Urban areas generally have', ['higher population density than rural areas', 'no people', 'only farms', 'no transportation'], 0, 'Cities pack more people into smaller areas.'),
        fill('Name one reason people settle in a place.', ['water', 'food', 'jobs', 'trade', 'safety', 'resources', 'climate'], 'Common reasons include water, food, work, and safety.'),
        mc('A megacity is', ['a very large city', 'a small village', 'an empty desert', 'a type of mountain'], 0, 'Megacities have extremely large populations.')
      ], '#ff5f8d'),
    level('👥 Human Geography · Foundations', 'geo-h1', 'Culture & Movement', 'Languages, traditions, migration, and trade', '🌏', 'Culture Cartographers', 'Migration Mapper', 'Trace how ideas and people move across the map.',
      `<h3>Culture and movement shape the world</h3><p><b>Culture</b> includes language, food, traditions, beliefs, and arts. People and ideas move through <b>migration</b>, trade, and communication. Trade routes historically connected distant places and still do today through shipping, air travel, and the internet.</p>`, [
        mc('Culture can include', ['language, food, and traditions', 'only the weather', 'only rock types', 'only latitude numbers'], 0, 'Culture is the shared way of life of a group.'),
        mc('Migration means', ['people moving from one place to another', 'a type of mountain', 'staying in one village forever', 'only animal movement in maps'], 0, 'Human migration is the movement of people.'),
        mc('Trade connects places by', ['exchanging goods and services', 'erasing borders permanently', 'stopping all travel', 'removing languages'], 0, 'Trade moves products—and often ideas—between regions.'),
        fill('Name one element of culture.', ['language', 'food', 'traditions', 'music', 'clothing', 'beliefs', 'art'], 'Language, food, traditions, and arts are common cultural elements.'),
        mc('The internet affects human geography by', ['speeding the spread of ideas and connection', 'stopping all migration', 'removing the need for maps', 'freezing climates'], 0, 'Digital networks link people across great distances.')
      ], '#ff6b8b')
  ];

  window.COURSES = window.COURSES || {};
  // Packaged bands: each gauntlet draws comprehensively from every mission in the band
  const retier = (levels, sectionById) => levels.map((l) => Object.assign({}, l, { tier: sectionById[l.id] || l.tier }));
  const pack = (id, name, icon, c1, c2, tag, levels) => {
    window.COURSES[id] = { name, icon, c1, c2, tagline: tag, levels };
  };

  // Basic — reading maps and understanding Earth’s surface & climate
  pack('geo_basic', 'Basic · Maps & Earth', '🗺️', '#4de1ff', '#8b6cff',
    'Map skills, landforms, and climate basics.',
    retier(mapLevels.concat(landLevels), {
      'geo-m0': '🗺️ Map Skills · Directions',
      'geo-m1': '🗺️ Map Skills · Grids',
      'geo-l0': '🏔️ Landforms',
      'geo-l1': '🌦️ Climate'
    }));

  // Intermediate — places of the United States and the world
  pack('geo_places', 'Intermediate · Places', '🌍', '#ff8a3d', '#35f0c0',
    'American regions and landmarks, continents, oceans, and world capitals.',
    retier(usLevels.concat(worldLevels), {
      'geo-u0': '🇺🇸 United States · Regions',
      'geo-u1': '🇺🇸 United States · Landmarks',
      'geo-w0': '🌍 World · Continents & Oceans',
      'geo-w1': '🌍 World · Countries & Capitals'
    }));

  // Advanced — people, settlement, culture, and movement
  pack('geo_people', 'Advanced · People', '👥', '#ff5f8d', '#ff8fb0',
    'Settlement, population, culture, migration, and trade.',
    retier(humanLevels, {
      'geo-h0': '👥 People & Places',
      'geo-h1': '🌏 Culture & Movement'
    }));

  const fromLevels = (levels) => {
    const qs = levels.flatMap((l) => l.challenges.filter((q) => q.type === 'mc'));
    return [0, 1, 2, 3].map((tier) => () => {
      const q = qs[Math.floor(Math.random() * qs.length)];
      return Object.assign({}, q, { q: tier >= 2 ? q.q + ' (think carefully)' : q.q });
    });
  };
  window.SURVIVAL = window.SURVIVAL || {};
  window.SURVIVAL.geo_basic = fromLevels(window.COURSES.geo_basic.levels);
  window.SURVIVAL.geo_places = fromLevels(window.COURSES.geo_places.levels);
  window.SURVIVAL.geo_people = fromLevels(window.COURSES.geo_people.levels);
})();
