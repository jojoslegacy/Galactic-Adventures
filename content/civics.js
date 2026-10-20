/* Galactic Academy — Civics
   Kid-friendly foundations: community → government → citizenship & participation.
   Same mission / gauntlet structure as other subjects. Space-themed framing where natural.
*/
(() => {
  'use strict';
  const mc = (q, options, answer, why) => ({ type: 'mc', q, options, answer, why, textOpts: true });
  const fill = (q, answers, why) => ({ type: 'fill', q, answers: answers.map(String), why, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson civics-lesson">${html}</div>`;
  const mk = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  const all = [];

  // ═══════════════════════════════════════════════════════════════
  // BASIC · Community & Rules
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🌱 Community Base', 'cv0', 'What Is a Community?', 'People living and working together', '🏘️',
    'Civics Crew', 'Community Scanner', 'Map the people and places that make a community work.',
    `<h3>A community is people sharing a place</h3>
    <p>A <b>community</b> is a group of people who live, work, or learn in the same area — a neighborhood, town, school, or even a space station.</p>
    <p>Communities need <b>rules</b> so people stay safe and treat each other fairly. Rules at home, school, and in public help everyone know what is expected.</p>
    <p>People in a community have different <b>roles</b>: teachers, helpers, leaders, workers, and citizens. When people do their part, the community works better.</p>`, [
      mc('A community is best described as:', ['one person living alone', 'people who share a place and help it work', 'only government buildings', 'a list of laws'], 1, 'A community is people living, working, or learning together in a shared place.'),
      mc('Why do communities make rules?', ['to make life harder', 'so people stay safe and treat each other fairly', 'so only leaders can speak', 'to stop people from helping'], 1, 'Rules protect safety and fairness.'),
      mc('Which is an example of a community role?', ['ignoring others', 'a teacher or helper', 'breaking rules for fun', 'hiding from neighbors'], 1, 'Teachers, helpers, workers, and leaders are community roles.'),
      fill('Type the word for a group of people who live and work in the same area.', ['community'], 'Community = people sharing a place and responsibilities.'),
      build('Build: “Rules help keep people safe.”', ['Rules', 'help', 'keep', 'people', 'safe'], 'Rules exist so people stay safe and treated fairly.'),
      mc('Your school is a kind of:', ['only a building', 'community', 'government branch', 'election'], 1, 'A school is a community of students, teachers, and staff.')
    ], '#69d6c5'));

  all.push(mk('🌱 Community Base', 'cv1', 'Rights and Responsibilities', 'What you can expect — and what you owe others', '⚖️',
    'Civics Crew', 'Balance Beacon', 'Learn the difference between a right and a responsibility.',
    `<h3>Rights and responsibilities go together</h3>
    <p>A <b>right</b> is something you are entitled to — like being treated fairly, feeling safe at school, or having a voice in age-appropriate decisions.</p>
    <p>A <b>responsibility</b> is a duty you have — like following rules, respecting others, telling the truth, and helping keep shared spaces clean.</p>
    <p>Rights and responsibilities balance each other. You have the right to speak; you also have the responsibility to speak respectfully. You have the right to learn; you have the responsibility to try and not disrupt others.</p>`, [
      mc('A right is:', ['something you must do for others', 'something you are entitled to', 'a punishment', 'a type of tax'], 1, 'A right is something you are entitled to.'),
      mc('A responsibility is:', ['a free gift with no duty', 'a duty or job you have', 'only for leaders', 'the same as a right'], 1, 'A responsibility is something you are expected to do.'),
      mc('Which is a responsibility at school?', ['ignoring the teacher', 'following classroom rules', 'taking others’ supplies', 'skipping all work'], 1, 'Following rules is a core school responsibility.'),
      fill('Type the word for something you are entitled to (fair treatment, safety, a voice).', ['right', 'a right'], 'A right is something you are entitled to.'),
      build('Build: “Rights and responsibilities go together.”', ['Rights', 'and', 'responsibilities', 'go', 'together'], 'They balance each other.'),
      mc('Having the right to speak also means you should:', ['shout over everyone', 'speak respectfully', 'never listen', 'only talk to friends'], 1, 'Rights come with the responsibility to use them fairly.')
    ], '#4de1ff'));

  all.push(mk('🌱 Community Base', 'cv2', 'Symbols of the United States', 'Flag, Pledge, and national symbols', '🇺🇸',
    'Civics Crew', 'Symbol Scanner', 'Recognize the symbols that represent the United States.',
    `<h3>Symbols stand for shared ideas</h3>
    <p>The <b>American flag</b> has 13 stripes (original colonies) and 50 stars (states). Red, white, and blue have traditional meanings: valor, purity, and justice.</p>
    <p>The <b>Pledge of Allegiance</b> is a promise of loyalty to the flag and the republic it represents — one nation, under God, indivisible, with liberty and justice for all.</p>
    <p>Other symbols include the <b>Bald Eagle</b> (strength and freedom), the <b>Statue of Liberty</b> (welcome and liberty), and the <b>Liberty Bell</b> (independence).</p>
    <p>Symbols help people remember shared values even when they disagree about details.</p>`, [
      mc('How many stars are on the current U.S. flag?', ['13', '50', '100', '13 stripes only'], 1, '50 stars stand for the 50 states.'),
      mc('The 13 stripes on the flag stand for:', ['13 original colonies', '13 presidents', '13 amendments', '13 months'], 0, 'Thirteen stripes = thirteen original colonies.'),
      mc('The Bald Eagle is a symbol of:', ['only farming', 'strength and freedom', 'the weather', 'a single state'], 1, 'The Bald Eagle represents strength and freedom.'),
      fill('Type the name of the statue that stands for liberty and welcome in New York Harbor.', ['statue of liberty', 'the statue of liberty', 'liberty'], 'The Statue of Liberty is a famous national symbol.'),
      mc('The Pledge of Allegiance is mainly a promise of:', ['sports loyalty', 'loyalty to the flag and the republic', 'only school rules', 'a shopping list'], 1, 'It is a pledge of allegiance to the flag and the republic.'),
      build('Build: “The flag has fifty stars.”', ['The', 'flag', 'has', 'fifty', 'stars'], 'Fifty stars = fifty states.')
    ], '#e63946'));

  all.push(mk('🌱 Community Base', 'cv3', 'Leaders and Helpers', 'Who helps a community run', '🧑‍✈️',
    'Civics Crew', 'Role Mapper', 'Match community jobs to the help they provide.',
    `<h3>Many roles keep a community running</h3>
    <p><b>Mayors</b> and local leaders help make local decisions. <b>Teachers</b> help people learn. <b>Police officers</b> and <b>firefighters</b> help keep people safe. <b>Doctors</b> and <b>nurses</b> help people stay healthy. <b>Judges</b> help settle disputes fairly under the law.</p>
    <p>Citizens also help: voting (when old enough), volunteering, following laws, and speaking up about problems.</p>
    <p>No single person does everything. Communities work when many people do their part.</p>`, [
      mc('Who is most focused on putting out fires and rescuing people?', ['mayor', 'firefighter', 'teacher', 'judge'], 1, 'Firefighters respond to fires and emergencies.'),
      mc('A judge’s main job is to:', ['teach math', 'help settle disputes under the law', 'build roads alone', 'run a store'], 1, 'Judges apply the law fairly in disputes.'),
      mc('Citizens can help their community by:', ['only complaining', 'volunteering and following laws', 'ignoring all rules', 'never speaking up'], 1, 'Volunteering, following laws, and constructive participation help.'),
      fill('Type the title of a local leader who often helps run a city or town.', ['mayor'], 'A mayor is a common local executive leader.'),
      mc('Teachers mainly help by:', ['making laws for the country', 'helping people learn', 'fighting fires', 'judging court cases'], 1, 'Teachers support learning.'),
      build('Build: “Many roles keep a community running.”', ['Many', 'roles', 'keep', 'a', 'community', 'running'], 'Shared effort makes communities work.')
    ], '#f4a261'));

  all.push(mk('🌱 Community Base', 'cv4', 'Fairness and Respect', 'Treating people equally and with dignity', '🤝',
    'Civics Crew', 'Fairness Protocol', 'Practice what fairness and respect look like day to day.',
    `<h3>Fairness is not the same as “identical”</h3>
    <p><b>Respect</b> means treating people as worthy of care and dignity — listening, not bullying, and including others.</p>
    <p><b>Fairness</b> means people get what they need to participate and are not treated worse because of who they are. Sometimes fairness means the same rule for everyone; sometimes it means extra support so someone can succeed.</p>
    <p>In a classroom or station, fairness includes taking turns, not cheating, and helping when someone is left out. Disagreement is okay; disrespect is not.</p>`, [
      mc('Respect includes:', ['bullying to win', 'listening and treating people with dignity', 'only agreeing with friends', 'ignoring everyone'], 1, 'Respect = dignity, listening, and inclusion.'),
      mc('Fairness often means:', ['cheating if you feel behind', 'rules applied without favoritism, and help when needed', 'only the loudest person decides', 'excluding new people'], 1, 'Fairness is even-handed rules plus needed support.'),
      mc('Disagreement in a community is:', ['always disrespect', 'okay when people still treat each other respectfully', 'illegal', 'only for adults'], 1, 'People can disagree and still be respectful.'),
      fill('Type the word for treating people with dignity and care.', ['respect'], 'Respect is treating people as worthy of dignity.'),
      mc('Taking turns is an example of:', ['unfairness', 'fairness and respect', 'breaking rules', 'only sports'], 1, 'Taking turns is a basic fairness practice.'),
      build('Build: “Disagreement can still be respectful.”', ['Disagreement', 'can', 'still', 'be', 'respectful'], 'Disagreeing does not require disrespect.')
    ], '#c084fc'));

  all.push(mk('🌱 Community Base', 'cv5', 'Why We Have Laws', 'Laws vs. rules; safety and order', '📜',
    'Civics Crew', 'Law Beacon', 'See why communities write laws and how they differ from simple rules.',
    `<h3>Laws are rules for a whole community or country</h3>
    <p>A <b>rule</b> might apply to a classroom or a game. A <b>law</b> is a rule made by a government that applies more widely — a town, state, or country.</p>
    <p>Laws exist to protect people’s rights, keep order, and settle conflicts without violence. Examples: traffic laws, laws against theft, laws that protect free speech within limits.</p>
    <p>Good laws are clear, apply to people equally, and can be changed through agreed processes (not by whoever is strongest).</p>`, [
      mc('A law is different from a classroom rule mainly because:', ['laws are secret', 'laws are made by government and apply more widely', 'laws never change', 'only kids follow laws'], 1, 'Laws are formal rules from government for a wider community.'),
      mc('One purpose of laws is to:', ['make conflict more violent', 'protect rights and keep order', 'stop all disagreement', 'replace all community roles'], 1, 'Laws protect rights and provide peaceful order.'),
      mc('Good laws should:', ['apply only to some groups unfairly', 'be clear and apply equally', 'never be written down', 'change every hour'], 1, 'Clarity and equal application are marks of good law.'),
      fill('Type the word for a formal government rule that applies to a town, state, or country.', ['law'], 'A law is a formal government rule.'),
      mc('Traffic laws mainly help by:', ['making driving slower for no reason', 'keeping people safer on roads', 'banning all cars', 'only helping police'], 1, 'Traffic laws reduce crashes and chaos.'),
      build('Build: “Laws help protect people’s rights.”', ['Laws', 'help', 'protect', 'people’s', 'rights'], 'Protection of rights is a core purpose of law.')
    ], '#8b6cff'));

  // ═══════════════════════════════════════════════════════════════
  // INTERMEDIATE · Government Foundations
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🏛️ Government Orbit', 'cv6', 'Three Branches of Government', 'Legislative, executive, judicial', '⚖️',
    'Civics Crew', 'Branch Mapper', 'Learn how U.S. power is split so no one part rules alone.',
    `<h3>Three branches share power</h3>
    <p><b>Legislative</b> (Congress: Senate + House) — makes laws.</p>
    <p><b>Executive</b> (President and departments) — carries out / enforces laws.</p>
    <p><b>Judicial</b> (courts, including the Supreme Court) — interprets laws and settles disputes under the Constitution.</p>
    <p>This split is called <b>separation of powers</b>. Each branch can limit the others (<b>checks and balances</b>) so power does not concentrate in one place.</p>`, [
      mc('Which branch makes laws?', ['executive', 'legislative', 'judicial', 'military only'], 1, 'Congress (legislative) makes laws.'),
      mc('The President is part of which branch?', ['legislative', 'executive', 'judicial', 'local only'], 1, 'The President leads the executive branch.'),
      mc('Courts mainly:', ['write all new taxes alone', 'interpret laws and decide cases', 'command the army only', 'run elections alone'], 1, 'The judicial branch interprets law and settles cases.'),
      fill('Type the name of the system where each branch can limit the others.', ['checks and balances', 'checks & balances'], 'Checks and balances keep power from concentrating.'),
      mc('Separation of powers means:', ['one person does everything', 'power is divided among branches', 'laws are secret', 'only states make rules'], 1, 'Power is split among legislative, executive, and judicial.'),
      build('Build: “Congress makes laws.”', ['Congress', 'makes', 'laws'], 'Legislative branch = lawmaking.')
    ], '#35f0c0'));

  all.push(mk('🏛️ Government Orbit', 'cv7', 'The Constitution', 'The supreme law and plan of government', '📘',
    'Civics Crew', 'Charter Scanner', 'Understand what the Constitution is and why it matters.',
    `<h3>The Constitution is the highest law</h3>
    <p>The <b>U.S. Constitution</b> is the plan for the national government and the supreme law of the land. It sets up the three branches, explains how leaders are chosen, and limits government power.</p>
    <p>The <b>Preamble</b> states goals: form a more perfect union, establish justice, ensure domestic tranquility, provide for the common defense, promote the general welfare, and secure liberty.</p>
    <p>The Constitution can be <b>amended</b> (changed) through a difficult process so that big changes require broad agreement.</p>`, [
      mc('The U.S. Constitution is:', ['only a suggestion', 'the supreme law and plan of national government', 'a state traffic code', 'a school handbook'], 1, 'It is the highest law and the framework of government.'),
      mc('The Preamble lists:', ['only taxes', 'goals of the Constitution', 'the names of all presidents', 'sports rules'], 1, 'The Preamble states the Constitution’s purposes.'),
      mc('Changing the Constitution is called:', ['voting randomly', 'amending', 'ignoring it', 'a local ordinance'], 1, 'Amendments change the Constitution through a formal process.'),
      fill('Type the word for the introduction to the Constitution that states its goals.', ['preamble'], 'The Preamble introduces the Constitution’s purposes.'),
      mc('Why is amending the Constitution designed to be difficult?', ['so no one ever changes anything small', 'so major changes need broad agreement', 'so only one person decides', 'so states cannot exist'], 1, 'Difficulty protects stability while still allowing change with wide support.'),
      build('Build: “The Constitution is the supreme law.”', ['The', 'Constitution', 'is', 'the', 'supreme', 'law'], 'It outranks ordinary laws.')
    ], '#4de1ff'));

  all.push(mk('🏛️ Government Orbit', 'cv8', 'Bill of Rights', 'First ten amendments — key freedoms', '🛡️',
    'Civics Crew', 'Rights Shield', 'Learn core freedoms protected in the first ten amendments.',
    `<h3>The Bill of Rights protects individual freedoms</h3>
    <p>The <b>Bill of Rights</b> is the first ten amendments to the Constitution. They limit government power over people.</p>
    <p>Famous protections include: freedom of <b>speech</b>, <b>religion</b>, and the <b>press</b>; the right to <b>assemble</b> peaceably; protections against unreasonable <b>searches</b>; rights for people accused of crimes (fair process); and more.</p>
    <p>Rights have limits (you cannot shout “fire” falsely in a crowded theater to cause panic), but the Bill of Rights sets a high bar before government can restrict them.</p>`, [
      mc('The Bill of Rights is:', ['the last ten amendments', 'the first ten amendments', 'only about taxes', 'a state constitution only'], 1, 'Bill of Rights = first ten amendments.'),
      mc('Freedom of speech is protected mainly so people can:', ['never disagree', 'express ideas without government punishment for the ideas themselves', 'break all other laws', 'only speak for leaders'], 1, 'It protects expression of ideas from government censorship.'),
      mc('Freedom of religion means the government generally cannot:', ['allow any churches', 'establish an official religion or stop peaceful worship', 'make any laws at all', 'teach history'], 1, 'No established national religion; peaceful practice protected.'),
      fill('Type the name for the first ten amendments that protect individual freedoms.', ['bill of rights', 'the bill of rights'], 'Bill of Rights = first ten amendments.'),
      mc('Rights in the Bill of Rights:', ['have no limits ever', 'can have limited exceptions (e.g., public safety) but are strongly protected', 'apply only to leaders', 'were never ratified'], 1, 'Strong protection with narrow, lawful limits.'),
      build('Build: “The Bill of Rights protects freedoms.”', ['The', 'Bill', 'of', 'Rights', 'protects', 'freedoms'], 'Core purpose of those amendments.')
    ], '#ff5f8d'));

  all.push(mk('🏛️ Government Orbit', 'cv9', 'National, State, and Local', 'Levels of government', '🗺️',
    'Civics Crew', 'Level Mapper', 'See which level of government handles which kinds of jobs.',
    `<h3>Government works at more than one level</h3>
    <p><b>National (federal)</b> — whole country: defense, currency, interstate issues, Constitution.</p>
    <p><b>State</b> — schools frameworks, state roads, state police, many licenses, state courts.</p>
    <p><b>Local</b> (city, county, town) — local police/fire, libraries, local parks, trash pickup, local zoning.</p>
    <p>This is related to <b>federalism</b>: power shared between national and state governments. Local governments get authority mainly from the state.</p>`, [
      mc('Which level is mainly responsible for national defense?', ['local', 'state only', 'national (federal)', 'schools alone'], 2, 'Defense is a core federal responsibility.'),
      mc('Local governments often handle:', ['declaring war', 'trash pickup and local parks', 'printing money', 'treaties with other countries'], 1, 'Day-to-day local services are local.'),
      mc('Federalism means:', ['only one level of government exists', 'power is shared between national and state governments', 'cities control the army', 'there are no state laws'], 1, 'Federalism = shared national/state power.'),
      fill('Type the level of government that usually runs local libraries and fire departments.', ['local', 'city', 'county', 'town'], 'Local governments handle many nearby services.'),
      mc('State governments often play a big role in:', ['only space travel', 'education frameworks and state roads', 'only foreign embassies', 'only the Supreme Court'], 1, 'Education and state infrastructure are major state roles.'),
      build('Build: “Power is shared across levels.”', ['Power', 'is', 'shared', 'across', 'levels'], 'National, state, and local each have roles.')
    ], '#f4a261'));

  all.push(mk('🏛️ Government Orbit', 'cv10', 'How a Bill Becomes a Law', 'Idea → Congress → President', '📝',
    'Civics Crew', 'Law Path', 'Follow the basic path from idea to law at the national level.',
    `<h3>A simplified national path</h3>
    <p>1. An idea is written as a <b>bill</b> and introduced in the House or Senate.</p>
    <p>2. Committees study it; the chamber votes. If it passes one chamber, it goes to the other.</p>
    <p>3. Both chambers must pass the <b>same</b> version.</p>
    <p>4. The <b>President</b> can sign it (becomes law) or <b>veto</b> it (send back). Congress can override a veto with a large enough majority (two-thirds in both chambers).</p>
    <p>This slow path is intentional: major rules should be debated, not rushed by one person.</p>`, [
      mc('A bill is:', ['already a final law', 'a proposed law', 'only a speech', 'a court decision'], 1, 'A bill is a proposed law.'),
      mc('For a bill to reach the President, generally:', ['only one person must like it', 'both the House and Senate must pass the same version', 'only a court must approve', 'only states vote'], 1, 'Both chambers must agree on the same text.'),
      mc('A veto means the President:', ['signs the bill', 'rejects the bill and sends it back', 'writes a new Constitution', 'ignores Congress forever'], 1, 'Veto = reject and return.'),
      fill('Type the word for the President’s rejection of a bill.', ['veto'], 'Veto = presidential rejection of a bill.'),
      mc('Congress can override a veto if:', ['one member agrees', 'a large enough majority in both chambers agrees (two-thirds)', 'the President changes their mind only', 'a local mayor agrees'], 1, 'Two-thirds of both chambers can override.'),
      build('Build: “Both chambers must pass the bill.”', ['Both', 'chambers', 'must', 'pass', 'the', 'bill'], 'House and Senate agreement is required.')
    ], '#e9c46a'));

  all.push(mk('🏛️ Government Orbit', 'cv11', 'Citizenship Basics', 'Who is a citizen; basic duties', '🪪',
    'Civics Crew', 'Citizen Protocol', 'Learn what citizenship means and basic civic duties.',
    `<h3>Citizenship links people to a country</h3>
    <p>A <b>citizen</b> is a legal member of a country with rights and duties under its laws. In the U.S., people can be citizens by birth (in most cases) or through <b>naturalization</b> (a legal process for immigrants who meet requirements).</p>
    <p>Basic civic duties and expectations include: obeying laws, paying taxes when required, serving on a jury if called, and defending the country if legally required. Voting is a right and a powerful responsibility for eligible citizens.</p>
    <p>Citizenship is not only a legal status — it is also a practice of caring about the common good.</p>`, [
      mc('A citizen is:', ['only a tourist', 'a legal member of a country with rights and duties', 'anyone who visits once', 'only a government worker'], 1, 'Citizenship is legal membership with rights and duties.'),
      mc('Naturalization is:', ['a type of tax', 'the legal process to become a citizen if not born one', 'a court building', 'a branch of government'], 1, 'Naturalization is the path to citizenship for eligible immigrants.'),
      mc('Which is a common civic duty?', ['never following laws', 'obeying laws and serving on a jury if called', 'only voting against everyone', 'ignoring taxes always'], 1, 'Obeying laws and jury service are classic duties.'),
      fill('Type the process by which an eligible immigrant can become a U.S. citizen.', ['naturalization'], 'Naturalization = legal path to citizenship.'),
      mc('Voting for eligible citizens is:', ['illegal', 'a right and an important civic responsibility', 'only for mayors', 'required every day'], 1, 'Voting is a core democratic right and responsibility.'),
      build('Build: “Citizens have rights and duties.”', ['Citizens', 'have', 'rights', 'and', 'duties'], 'Both sides of the citizenship coin.')
    ], '#c084fc'));

  // ═══════════════════════════════════════════════════════════════
  // MIDDLE · Participation & Ideas
  // ═══════════════════════════════════════════════════════════════

  all.push(mk('🗳️ Citizen Sector', 'cv12', 'Elections and Voting', 'How representatives are chosen', '🗳️',
    'Civics Crew', 'Ballot Beacon', 'Understand why elections matter and basic voting ideas.',
    `<h3>Elections choose representatives</h3>
    <p>In a <b>representative democracy</b> (republic), citizens elect people to make decisions on their behalf. Elections are how peaceful transfers of power happen.</p>
    <p>Key ideas: <b>one person, one vote</b> among eligible voters; secret ballot so people can choose freely; regular elections so leaders stay accountable.</p>
    <p>Campaigns try to persuade voters. Citizens should check facts, compare positions, and vote based on values and evidence — not only on slogans.</p>`, [
      mc('In a representative democracy, citizens mainly:', ['make every law in person every day', 'elect people to make decisions for them', 'never choose leaders', 'only follow kings'], 1, 'They elect representatives.'),
      mc('A secret ballot helps voters:', ['show everyone their choice for pressure', 'choose freely without fear or pressure', 'skip elections', 'only vote online forever'], 1, 'Privacy protects free choice.'),
      mc('Regular elections help keep leaders:', ['in power forever with no check', 'accountable to the people', 'hidden from the public', 'unable to make any decisions'], 1, 'Elections create accountability.'),
      fill('Type the word for a formal process of choosing leaders by vote.', ['election', 'elections'], 'Elections choose representatives.'),
      mc('Before voting, a careful citizen should:', ['only read slogans', 'compare positions and check facts', 'ignore all information', 'let someone else decide in secret always'], 1, 'Informed choice beats pure slogan voting.'),
      build('Build: “Elections choose representatives.”', ['Elections', 'choose', 'representatives'], 'Core function of democratic elections.')
    ], '#69d6c5'));

  all.push(mk('🗳️ Citizen Sector', 'cv13', 'Founding Ideas', 'Liberty, equality, consent of the governed', '✨',
    'Civics Crew', 'Idea Core', 'Meet big ideas that shaped the American founding.',
    `<h3>Ideas behind the system</h3>
    <p><b>Liberty</b> — freedom to think, speak, worship, and live within fair laws.</p>
    <p><b>Equality</b> — the claim that people have equal moral worth and should have equal standing under the law (the nation has struggled to live up to this).</p>
    <p><b>Consent of the governed</b> — legitimate government depends on the people’s agreement, expressed especially through constitutions and elections.</p>
    <p><b>Rule of law</b> — laws apply to leaders as well as citizens; no one is above the law.</p>
    <p>These ideas appear in the Declaration of Independence and the Constitution’s design.</p>`, [
      mc('“Consent of the governed” means government authority should come from:', ['only military force', 'the agreement of the people', 'a single family forever', 'foreign kings only'], 1, 'Legitimate power rests on the people’s consent.'),
      mc('Rule of law means:', ['leaders can ignore laws', 'laws apply to leaders and citizens alike', 'only kids follow laws', 'laws are never written'], 1, 'No one is above the law.'),
      mc('Liberty includes freedoms such as:', ['only shopping', 'speech, thought, and worship within fair laws', 'breaking any law you dislike', 'never having rules'], 1, 'Liberty is ordered freedom under fair law.'),
      fill('Type the phrase meaning government authority should rest on the people’s agreement.', ['consent of the governed'], 'Consent of the governed is a founding principle.'),
      mc('Equality under the law means people should:', ['have different legal worth based on wealth only', 'have equal standing before the law', 'never be citizens', 'only vote if rich'], 1, 'Equal legal standing is the core claim.'),
      build('Build: “No one is above the law.”', ['No', 'one', 'is', 'above', 'the', 'law'], 'Rule of law in one sentence.')
    ], '#4de1ff'));

  all.push(mk('🗳️ Citizen Sector', 'cv14', 'Civic Participation', 'Ways to help beyond voting', '🙌',
    'Civics Crew', 'Action Protocol', 'Explore how people of different ages can participate.',
    `<h3>Participation is more than voting</h3>
    <p>Eligible adults vote and can run for office. People of many ages can: learn the issues, discuss respectfully, volunteer, join peaceful community projects, contact representatives, attend local meetings, and help neighbors.</p>
    <p><b>Civil discourse</b> means arguing about ideas without attacking people’s dignity. Strong communities need both conviction and respect.</p>
    <p>Staying informed — from reliable sources — is itself a form of civic care.</p>`, [
      mc('Civic participation includes:', ['only voting once and never learning again', 'volunteering, learning issues, and respectful discussion', 'only complaining online', 'breaking laws to win'], 1, 'Many peaceful actions count as participation.'),
      mc('Civil discourse means:', ['insulting opponents', 'debating ideas while respecting people', 'never disagreeing', 'only agreeing with friends'], 1, 'Hard arguments + basic respect.'),
      mc('Kids and teens can participate by:', ['nothing at all', 'learning, volunteering, and helping community projects', 'only waiting until age 50', 'making national treaties alone'], 1, 'Age-appropriate participation starts early.'),
      fill('Type a word for helping others without being paid (a common civic action).', ['volunteer', 'volunteering'], 'Volunteering is classic civic participation.'),
      mc('Staying informed from reliable sources is:', ['a waste of time', 'part of responsible citizenship', 'only for journalists', 'illegal'], 1, 'Informed citizens make better decisions.'),
      build('Build: “Respect and conviction can go together.”', ['Respect', 'and', 'conviction', 'can', 'go', 'together'], 'Civil discourse needs both.')
    ], '#f4a261'));

  all.push(mk('🗳️ Citizen Sector', 'cv15', 'Local Problem-Solving', 'Identify a problem, propose a fair fix', '🔧',
    'Civics Crew', 'Problem Solver', 'Practice a simple civic problem-solving loop.',
    `<h3>A simple civic loop</h3>
    <p>1. <b>Notice</b> a real problem (safety, fairness, shared space).</p>
    <p>2. <b>Gather facts</b> — what is happening, who is affected?</p>
    <p>3. <b>Listen</b> to people with different views.</p>
    <p>4. <b>Propose</b> a solution that is fair and realistic.</p>
    <p>5. <b>Act</b> through proper channels (school leaders, local officials, community groups) and check results.</p>
    <p>This is how citizens improve communities without chaos or force.</p>`, [
      mc('First step in solving a community problem is often:', ['ignore it forever', 'notice and define the problem', 'blame the first person you see', 'pass a national law alone'], 1, 'Clear problem definition comes first.'),
      mc('Gathering facts helps because:', ['opinions never matter', 'solutions work better when based on reality', 'facts replace all values', 'only leaders may know facts'], 1, 'Evidence improves solutions.'),
      mc('Listening to different views helps you:', ['never decide anything', 'understand trade-offs and build fairer plans', 'win by yelling', 'avoid all responsibility'], 1, 'Multiple perspectives reveal trade-offs.'),
      fill('Type the verb for suggesting a possible solution.', ['propose', 'proposing'], 'Propose = offer a plan.'),
      mc('Acting through proper channels means:', ['only using force', 'working with legitimate leaders and processes', 'never talking to anyone', 'hiding the problem'], 1, 'Legitimate processes keep change peaceful and accountable.'),
      build('Build: “Gather facts before you propose a fix.”', ['Gather', 'facts', 'before', 'you', 'propose', 'a', 'fix'], 'Evidence before action.')
    ], '#8b6cff'));

  all.push(mk('🗳️ Citizen Sector', 'cv16', 'Media and Good Judgment', 'Spot reliable information', '📰',
    'Civics Crew', 'Signal Filter', 'Practice habits that separate solid information from noise.',
    `<h3>Citizens need good information habits</h3>
    <p>Ask: Who made this message? What is their purpose (inform, persuade, sell, entertain)? What evidence do they show? Do other reliable sources agree?</p>
    <p>Be careful with headlines that only trigger anger, anonymous claims, and posts that lack sources. Strong citizens slow down before sharing.</p>
    <p>Freedom of the press is protected so the public can learn about power — and citizens still must judge quality.</p>`, [
      mc('A good first question about a news claim is:', ['Does it make me angry?', 'Who made this and what is their purpose?', 'Can I share it in one second?', 'Does my friend already believe it?'], 1, 'Source and purpose come first.'),
      mc('Checking whether other reliable sources agree is called:', ['ignoring evidence', 'corroboration / cross-checking', 'censorship always', 'only for scientists'], 1, 'Cross-checking reduces being misled.'),
      mc('Headlines designed only to trigger anger are often:', ['the most trustworthy', 'worth extra skepticism', 'official laws', 'always true'], 1, 'Emotional bait deserves caution.'),
      fill('Type a word for information that can be checked against evidence.', ['facts', 'fact', 'evidence'], 'Facts and evidence can be examined.'),
      mc('Freedom of the press exists partly so:', ['no one ever checks facts', 'the public can learn about those in power', 'only ads are allowed', 'citizens must believe every post'], 1, 'A free press supports informed self-government.'),
      build('Build: “Slow down before you share.”', ['Slow', 'down', 'before', 'you', 'share'], 'A practical civic habit.')
    ], '#ff8aa8'));

  all.push(mk('🗳️ Citizen Sector', 'cv17', 'Capstone: Civic Cadet', 'Put the pieces together', '🎓',
    'Civics Crew', 'Civics Capstone', 'Show you can connect community, government, and participation.',
    `<h3>You are a Civic Cadet</h3>
    <p>You have practiced: community and rules, rights and responsibilities, symbols, branches of government, the Constitution and Bill of Rights, levels of government, how laws are made, citizenship, elections, founding ideas, participation, problem-solving, and media judgment.</p>
    <p>Civics is not only memorizing names — it is the skill of living free with others under fair rules, and improving those rules peacefully.</p>`, [
      mc('Separation of powers exists mainly to:', ['make government slower for no reason', 'prevent power from concentrating in one branch', 'eliminate all laws', 'replace elections'], 1, 'Split power protects liberty.'),
      mc('The Bill of Rights mainly protects:', ['only the President', 'individual freedoms from government overreach', 'only state flags', 'sports teams'], 1, 'Individual liberties vs. government power.'),
      mc('A healthy citizen habit is:', ['never learning issues', 'staying informed and participating respectfully', 'only trusting anger headlines', 'avoiding all community roles'], 1, 'Informed, respectful participation.'),
      fill('Type the document that is the supreme law of the United States.', ['constitution', 'the constitution', 'u.s. constitution', 'us constitution'], 'The Constitution is supreme law.'),
      mc('Rights and responsibilities:', ['never connect', 'balance each other in a free community', 'are only for leaders', 'replace all laws'], 1, 'Freedom needs both.'),
      build('Build: “Citizens improve communities peacefully.”', ['Citizens', 'improve', 'communities', 'peacefully'], 'The civic ideal in practice.')
    ], '#35f0c0'));

  // Register bands
  window.COURSES = window.COURSES || {};
  const retier = (levels, map) => levels.map((l) => Object.assign({}, l, { tier: map[l.id] || l.tier }));
  const band = (id, name, icon, c1, c2, tag, levels) => {
    window.COURSES[id] = { name, icon, c1, c2, tagline: tag, levels };
  };

  band('civics_basic', 'Basic · Community Base', '🌱', '#69d6c5', '#4de1ff',
    'Community, rights & responsibilities, symbols, roles, fairness, and why laws exist.',
    retier(all.slice(0, 6), {
      cv0: '🏘️ Community', cv1: '⚖️ Rights & Duties', cv2: '🇺🇸 Symbols',
      cv3: '🧑‍✈️ Leaders & Helpers', cv4: '🤝 Fairness', cv5: '📜 Laws'
    }));

  band('civics_intermediate', 'Intermediate · Government Orbit', '🏛️', '#35f0c0', '#8b6cff',
    'Three branches, Constitution, Bill of Rights, federalism, how laws are made, citizenship.',
    retier(all.slice(6, 12), {
      cv6: '⚖️ Three Branches', cv7: '📘 Constitution', cv8: '🛡️ Bill of Rights',
      cv9: '🗺️ Levels of Gov', cv10: '📝 Bills to Laws', cv11: '🪪 Citizenship'
    }));

  band('civics_middle', 'Middle · Citizen Sector', '🗳️', '#ffc36b', '#ff5f8d',
    'Elections, founding ideas, participation, problem-solving, media judgment, capstone.',
    retier(all.slice(12, 18), {
      cv12: '🗳️ Elections', cv13: '✨ Founding Ideas', cv14: '🙌 Participation',
      cv15: '🔧 Problem-Solving', cv16: '📰 Media Judgment', cv17: '🎓 Capstone'
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
  window.SURVIVAL.civics_basic = gauntletFrom(all.slice(0, 6));
  window.SURVIVAL.civics_intermediate = gauntletFrom(all.slice(6, 12));
  window.SURVIVAL.civics_middle = gauntletFrom(all.slice(12, 18));
})();
