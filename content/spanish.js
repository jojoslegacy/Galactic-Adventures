/* Galactic Academy — Spanish via the Orbital Echo Method
   A free, child-first Spanish pathway designed for this app.
   Method summary (research-aligned):
   1. Sound-first: leverage Spanish’s near-perfect phoneme–grapheme transparency so kids hear early success.
   2. Chunk-primary: high-utility multi-word phrases are the unit of learning (not isolated vocab lists).
   3. Narrative micro-worlds: every mission is a short space-crew story; meaning is always contextual.
   4. Echo → Transform → Orbit cycle:
        Echo     = hear + match meaning / choose the correct form
        Transform= swap one slot in the chunk (person, object, place) to build generative power
        Orbit    = spaced retrieval of the same chunks inside later missions & the band gauntlet
   5. Dual coding: emoji scenes + written form + Read Aloud (Spanish voices when available).
   6. Fading English scaffold: early bands bilingual; later bands Spanish-primary with English only in explanations.
*/
(() => {
  'use strict';
  const mc = (q, options, answer, why, code = null) => ({ type: 'mc', q, options, answer, why, code, textOpts: true });
  const fill = (q, answers, why, code = null) => ({ type: 'fill', q, answers: answers.map(String), why, code, ci: true });
  const build = (q, tokens, why) => ({ type: 'build', q, tokens, why });
  const lesson = (html) => `<div class="math-lesson spanish-lesson">${html}</div>`;
  const mk = (tier, id, title, blurb, icon, company, product, mission, explanation, challenges, color) => ({
    tier, id, title, blurb, planet: icon, color, icon, company, product, mission,
    lesson: lesson(explanation), challenges
  });

  const allLevels = [];

  // ═══════════════════════════════════════════════════════════════
  // BASIC · Sound Dock  —  phonetic foundation + first living chunks
  // ═══════════════════════════════════════════════════════════════

  allLevels.push(mk('🔊 Sound Dock', 'sp0', 'Pure Vowel Station', 'Master the five pure Spanish vowels', '🅰️',
    'Echo Lab', 'Vowel Scanner', 'Tune the ship radio to pure Spanish vowels so the crew can hear clearly.',
    `<h3>Spanish vowels are pure and steady</h3>
    <p>English vowels often glide (the “i” in <i>like</i> changes). Spanish vowels stay the same from start to finish. There are only five:</p>
    <p style="font-size:1.35em;letter-spacing:.08em"><b>a</b> · <b>e</b> · <b>i</b> · <b>o</b> · <b>u</b></p>
    <p><b>a</b> as in “ah” (father) · <b>e</b> as in “eh” (bed) · <b>i</b> as in “ee” (see) · <b>o</b> as in “oh” (go, without the glide) · <b>u</b> as in “oo” (moon).</p>
    <p>When you see these letters in Spanish, say the pure sound. This is why Spanish is easier to sound out than English once you lock the five vowels.</p>
    <p>🌌 <b>Orbital Echo tip:</b> Hear the word → say it aloud with pure vowels → match it to meaning. Early success builds confidence.</p>`, [
      mc('Which Spanish vowel sounds like the “ah” in father?', ['e', 'a', 'i', 'u'], 1, 'Spanish <b>a</b> is a pure “ah,” like the a in father.'),
      mc('The Spanish letter <b>i</b> sounds most like which English sound?', ['eye', 'ee (as in see)', 'ih (as in sit)', 'ay'], 1, 'Spanish <b>i</b> is a pure “ee,” as in see.'),
      mc('Say the Spanish word <b>sol</b> (sun). Which pure vowels do you hear?', ['o only', 'o and a', 'u only', 'e and i'], 0, 'Sol has one syllable and the pure vowel <b>o</b>.'),
      fill('Type the five pure Spanish vowels in order (a e i o u).', ['a e i o u', 'aeiou', 'a, e, i, o, u'], 'The five pure vowels are a, e, i, o, u — always the same sound.'),
      mc('In the Spanish word <b>luna</b> (moon), the vowels are:', ['u and a — both pure', 'u that glides like English “you”', 'only one vowel', 'e and i'], 0, 'Luna has pure <b>u</b> then pure <b>a</b>. No glides.')
    ], '#69d6c5'));

  allLevels.push(mk('🔊 Sound Dock', 'sp1', 'Key Sound Explorers', 'ñ, j, rr, ll, and soft c/g', '🔑',
    'Echo Lab', 'Sound Mapper', 'Map the sounds English does not share so the crew can pronounce planet names correctly.',
    `<h3>Sounds that make Spanish sound Spanish</h3>
    <p><b>ñ</b> (eñe) — like the “ny” in canyon. Example: <b>niño</b> (child), <b>año</b> (year).</p>
    <p><b>j</b> and soft <b>g</b> (before e/i) — a strong “h” sound from the throat: <b>jugo</b> (juice), <b>gente</b> (people).</p>
    <p><b>rr</b> (erre) — a rolled or tapped r; practice with <b>perro</b> (dog) vs <b>pero</b> (but).</p>
    <p><b>ll</b> — in many places sounds like “y” in yes: <b>llama</b>, <b>llave</b> (key).</p>
    <p>Spanish spelling is very consistent: once you know the sound of a letter, you can read almost any new word.</p>`, [
      mc('What sound does <b>ñ</b> make?', ['n as in no', 'ny as in canyon', 'm as in moon', 'ng as in sing'], 1, 'ñ is the “ny” sound, as in canyon or the Spanish word niño.'),
      mc('The Spanish word <b>jugo</b> (juice) begins with a sound most like English:', ['j as in jump', 'h as in hot (stronger)', 'y as in yes', 'g as in go'], 1, 'Spanish <b>j</b> is a strong “h” sound, not the English “j.”'),
      mc('Which word has the rolled/tapped <b>rr</b>?', ['pero (but)', 'perro (dog)', 'pelo (hair)', 'pato (duck)'], 1, 'Perro has rr; pero has a single r.'),
      mc('In many Spanish-speaking places, <b>ll</b> sounds closest to:', ['l as in light', 'y as in yes', 'sh as in ship', 'th as in the'], 1, 'll is often pronounced like English “y.”'),
      fill('Type the Spanish word for “child” that uses ñ (hint: n-i-ñ-o).', ['niño', 'nino', 'niñó'], 'Niño uses ñ and means child / boy.')
    ], '#4de1ff'));

  allLevels.push(mk('🔊 Sound Dock', 'sp2', 'Numbers & Cargo Count', 'Count 1–10 and simple totals in Spanish', '🔢',
    'Cargo Bay', 'Number Beacon', 'Help the crew count cargo containers before the next jump.',
    `<h3>Numbers you will use every day</h3>
    <p>1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez</p>
    <p>These are high-frequency chunks. Learn them as sound + meaning pairs. Notice the pure vowels: <b>u-no</b>, <b>do-s</b>, <b>tre-s</b>, <b>cua-tro</b>, <b>cin-co</b>.</p>
    <p>Useful mini-phrases: <b>Hay tres</b> (There are three) · <b>Tengo dos</b> (I have two) · <b>¿Cuántos?</b> (How many?).</p>`, [
      mc('What number is <b>cinco</b>?', ['4', '5', '6', '7'], 1, 'Cinco = 5.'),
      mc('How do you say 8 in Spanish?', ['siete', 'ocho', 'nueve', 'diez'], 1, 'Ocho = 8.'),
      mc('“Hay tres contenedores” means:', ['There are three containers', 'I want three containers', 'The containers are big', 'Count the containers'], 0, 'Hay = there is/are. Tres = three.'),
      fill('Type the Spanish word for the number 1.', ['uno'], 'Uno = 1.'),
      build('Build the phrase: “There are two.”', ['Hay', 'dos'], 'Hay dos = There are two.'),
      mc('¿Cuántos? asks:', ['Where?', 'How many?', 'Who?', 'When?'], 1, '¿Cuántos? = How many?')
    ], '#f4a261'));

  allLevels.push(mk('🔊 Sound Dock', 'sp3', 'Colors of the Nebula', 'Name colors and describe what you see', '🎨',
    'Observation Deck', 'Color Lens', 'Report the colors of the nebula so Navigation can map the route.',
    `<h3>Color chunks</h3>
    <p>rojo (red) · azul (blue) · verde (green) · amarillo (yellow) · blanco (white) · negro (black) · naranja (orange) · rosa (pink)</p>
    <p>Useful patterns: <b>Es rojo</b> (It is red) · <b>El cohete es azul</b> (The rocket is blue) · <b>Me gusta el verde</b> (I like green).</p>
    <p>Colors often come after the noun in Spanish: <b>la casa blanca</b> (the white house), not “blanca casa.”</p>`, [
      mc('What color is <b>verde</b>?', ['red', 'blue', 'green', 'yellow'], 2, 'Verde = green.'),
      mc('“El cohete es azul” means:', ['The rocket is fast', 'The rocket is blue', 'I see a rocket', 'The blue is a rocket'], 1, 'Es azul = is blue.'),
      mc('Which word means yellow?', ['amarillo', 'naranja', 'rosa', 'negro'], 0, 'Amarillo = yellow.'),
      fill('Type the Spanish word for “red.”', ['rojo'], 'Rojo = red.'),
      build('Build: “It is green.”', ['Es', 'verde'], 'Es verde = It is green.'),
      mc('In Spanish, color words often come:', ['before the noun', 'after the noun', 'only at the end of a sentence', 'never with nouns'], 1, 'Common pattern: noun then color — la casa blanca.')
    ], '#e9c46a'));

  allLevels.push(mk('🔊 Sound Dock', 'sp4', 'Greetings & Names', 'First social chunks: hello, name, how are you', '👋',
    'Airlock', 'Greeting Beacon', 'Meet new cadets at the airlock using living Spanish phrases.',
    `<h3>Living greeting chunks</h3>
    <p><b>Hola</b> — Hello<br>
    <b>Me llamo ___</b> — My name is ___ (literally “I call myself”)<br>
    <b>¿Cómo te llamas?</b> — What is your name?<br>
    <b>¿Cómo estás?</b> — How are you?<br>
    <b>Bien, gracias</b> — Fine, thank you<br>
    <b>Mucho gusto</b> — Nice to meet you</p>
    <p>These are formulaic chunks. Learn them as wholes first; the grammar inside will become clear later through use.</p>
    <p>🌌 Echo practice: hear → repeat → swap the name slot.</p>`, [
      mc('“Me llamo Ana” means:', ['I am looking for Ana', 'My name is Ana', 'Ana is calling', 'Where is Ana?'], 1, 'Me llamo = My name is.'),
      mc('How do you ask “What is your name?”', ['¿Cómo estás?', '¿Cómo te llamas?', '¿Dónde estás?', 'Hola'], 1, '¿Cómo te llamas? = What is your name?'),
      mc('A good reply to “¿Cómo estás?” is:', ['Me llamo Zyx', 'Bien, gracias', 'Hay tres', 'Es azul'], 1, 'Bien, gracias = Fine, thank you.'),
      fill('Type the Spanish word for “hello.”', ['hola', 'Hola'], 'Hola = hello.'),
      build('Build: “My name is Zyx.”', ['Me', 'llamo', 'Zyx'], 'Me llamo Zyx.'),
      mc('“Mucho gusto” is used when you:', ['say goodbye', 'meet someone', 'count cargo', 'ask for food'], 1, 'Mucho gusto = Nice to meet you.')
    ], '#ff8aa8'));

  allLevels.push(mk('🔊 Sound Dock', 'sp5', 'Polite Orbit', 'Please, thank you, yes, no, and simple requests', '🙏',
    'Crew Lounge', 'Courtesy Protocol', 'Practice the polite phrases every cadet needs on every planet.',
    `<h3>High-utility polite chunks</h3>
    <p><b>Sí</b> — Yes · <b>No</b> — No<br>
    <b>Por favor</b> — Please<br>
    <b>Gracias</b> — Thank you<br>
    <b>De nada</b> — You’re welcome<br>
    <b>Quiero ___</b> — I want ___<br>
    <b>¿Puedo ___?</b> — Can I ___?</p>
    <p>Combine with earlier chunks: <b>Quiero agua, por favor</b> · <b>Gracias</b> · <b>De nada</b>.</p>`, [
      mc('“Por favor” means:', ['thank you', 'please', 'you’re welcome', 'goodbye'], 1, 'Por favor = please.'),
      mc('The natural reply to “Gracias” is:', ['Hola', 'De nada', 'Sí', 'Me llamo'], 1, 'De nada = You’re welcome.'),
      mc('“Quiero agua” means:', ['I see water', 'I want water', 'There is water', 'The water is cold'], 1, 'Quiero = I want.'),
      fill('Type the Spanish word for “thank you.”', ['gracias', 'Gracias'], 'Gracias = thank you.'),
      build('Build: “Yes, please.”', ['Sí', 'por', 'favor'], 'Sí, por favor.'),
      mc('“¿Puedo pasar?” is asking:', ['Can I pass / come in?', 'Where is the door?', 'What is your name?', 'How many are there?'], 0, '¿Puedo…? = Can I…?')
    ], '#c084fc'));

  // ═══════════════════════════════════════════════════════════════
  // INTERMEDIATE · Phrase Planets  —  high-utility life chunks
  // ═══════════════════════════════════════════════════════════════

  allLevels.push(mk('🪐 Phrase Planets', 'sp6', 'Family Crew', 'People in your crew and family', '👨‍👩‍👧‍👦',
    'Habitat Ring', 'Family Scanner', 'Introduce your crew and family to the station AI.',
    `<h3>People chunks</h3>
    <p><b>madre</b> (mom) · <b>padre</b> (dad) · <b>hermano</b> (brother) · <b>hermana</b> (sister)<br>
    <b>amigo / amiga</b> (friend) · <b>familia</b> (family) · <b>bebé</b> (baby)</p>
    <p>Patterns:<br>
    <b>Esta es mi madre</b> — This is my mom<br>
    <b>Tengo un hermano</b> — I have a brother<br>
    <b>Mi familia es grande</b> — My family is big</p>
    <p>Notice gender: amigo (m) / amiga (f). Many Spanish nouns have masculine/feminine forms.</p>`, [
      mc('“Madre” means:', ['father', 'mother', 'brother', 'friend'], 1, 'Madre = mother.'),
      mc('“Tengo un hermano” means:', ['I am a brother', 'I have a brother', 'My brother is here', 'Where is my brother?'], 1, 'Tengo = I have.'),
      mc('Which word means “friend” (girl)?', ['amigo', 'amiga', 'hermana', 'madre'], 1, 'Amiga is the feminine form of friend.'),
      fill('Type the Spanish word for “family.”', ['familia'], 'Familia = family.'),
      build('Build: “This is my dad.”', ['Este', 'es', 'mi', 'padre'], 'Este es mi padre.'),
      mc('“Mi hermana es alta” means:', ['My sister is tall', 'My brother is tall', 'I have a tall sister', 'The sister is my friend'], 0, 'Hermana = sister; alta = tall.')
    ], '#35f0c0'));

  allLevels.push(mk('🪐 Phrase Planets', 'sp7', 'Body & Feelings', 'Name body parts and how you feel', '🫀',
    'Med Bay', 'Biometric Echo', 'Report how the crew feels after a long jump.',
    `<h3>Body & feeling chunks</h3>
    <p>cabeza (head) · mano (hand) · pie (foot) · ojos (eyes) · boca (mouth)</p>
    <p>Feelings: <b>Tengo hambre</b> (I’m hungry) · <b>Tengo sed</b> (I’m thirsty) · <b>Estoy cansado/a</b> (I’m tired) · <b>Estoy feliz</b> (I’m happy) · <b>Me duele la cabeza</b> (My head hurts)</p>
    <p>Spanish often uses <b>tener</b> (to have) for states English expresses with “to be”: tengo hambre = I have hunger.</p>`, [
      mc('“Tengo hambre” means:', ['I have a hammer', 'I’m hungry', 'I see food', 'My hand hurts'], 1, 'Tener hambre = to be hungry (literally “have hunger”).'),
      mc('Which phrase means “I’m tired” (for a boy/man)?', ['Estoy feliz', 'Estoy cansado', 'Tengo sed', 'Me duele'], 1, 'Estoy cansado = I am tired (masculine).'),
      mc('“Me duele la cabeza” means:', ['I like my head', 'My head hurts', 'I have a big head', 'Wash your head'], 1, 'Me duele = it hurts me.'),
      fill('Type the Spanish word for “hand.”', ['mano'], 'Mano = hand.'),
      build('Build: “I’m thirsty.”', ['Tengo', 'sed'], 'Tengo sed.'),
      mc('“Ojos” means:', ['ears', 'eyes', 'nose', 'mouth'], 1, 'Ojos = eyes.')
    ], '#ff5f8d'));

  allLevels.push(mk('🪐 Phrase Planets', 'sp8', 'Food & Market', 'Name foods and order simple things', '🍎',
    'Galley', 'Market Beacon', 'Order supplies at the orbital market.',
    `<h3>Food chunks</h3>
    <p>agua (water) · pan (bread) · manzana (apple) · leche (milk) · queso (cheese) · arroz (rice) · pollo (chicken) · fruta (fruit)</p>
    <p>Useful patterns:<br>
    <b>Quiero una manzana</b> — I want an apple<br>
    <b>Me gusta el pan</b> — I like bread<br>
    <b>No me gusta</b> — I don’t like it<br>
    <b>¿Qué quieres?</b> — What do you want?</p>
    <p>Articles: <b>el / la</b> (the) · <b>un / una</b> (a/an). Gender matches the noun.</p>`, [
      mc('“Manzana” means:', ['banana', 'apple', 'milk', 'bread'], 1, 'Manzana = apple.'),
      mc('“Me gusta el pan” means:', ['I make bread', 'I like bread', 'The bread is mine', 'I want more bread'], 1, 'Me gusta = I like.'),
      mc('How do you say “I want water”?', ['Tengo agua', 'Quiero agua', 'Es agua', 'Hay agua'], 1, 'Quiero agua = I want water.'),
      fill('Type the Spanish word for “milk.”', ['leche'], 'Leche = milk.'),
      build('Build: “I want an apple.”', ['Quiero', 'una', 'manzana'], 'Quiero una manzana.'),
      mc('“¿Qué quieres?” asks:', ['Where are you?', 'What do you want?', 'How are you?', 'Who are you?'], 1, '¿Qué quieres? = What do you want?')
    ], '#f4a261'));

  allLevels.push(mk('🪐 Phrase Planets', 'sp9', 'Action Commands', 'Move, look, touch — TPR-style action chunks', '🏃',
    'Training Deck', 'Motion Protocol', 'Follow and give simple action commands like a real crew drill.',
    `<h3>Action chunks (Total Physical Response style)</h3>
    <p>Children learn verbs powerfully when meaning is tied to movement. Practice these as whole commands:</p>
    <p><b>Camina</b> — Walk · <b>Corre</b> — Run · <b>Mira</b> — Look · <b>Toca</b> — Touch · <b>Siéntate</b> — Sit down · <b>Levántate</b> — Stand up · <b>Escucha</b> — Listen · <b>Dibuja</b> — Draw</p>
    <p>Combine: <b>Mira la luna</b> · <b>Toca el panel</b> · <b>Camina al cohete</b>.</p>
    <p>These are informal singular commands — perfect for games and classroom/ship drills.</p>`, [
      mc('“Mira” means:', ['run', 'look', 'sit', 'draw'], 1, 'Mira = look / watch.'),
      mc('“Siéntate” tells someone to:', ['stand up', 'sit down', 'run', 'listen'], 1, 'Siéntate = sit down.'),
      mc('“Camina al cohete” means:', ['Run from the rocket', 'Walk to the rocket', 'Look at the rocket', 'Touch the rocket'], 1, 'Camina = walk; al cohete = to the rocket.'),
      fill('Type the Spanish command for “listen.”', ['escucha', 'Escucha'], 'Escucha = listen.'),
      build('Build: “Touch the panel.”', ['Toca', 'el', 'panel'], 'Toca el panel.'),
      mc('Which command means “stand up”?', ['Siéntate', 'Levántate', 'Camina', 'Dibuja'], 1, 'Levántate = stand up.')
    ], '#8b6cff'));

  allLevels.push(mk('🪐 Phrase Planets', 'sp10', 'Places on the Ship', 'Rooms, directions, and simple location phrases', '🚀',
    'Navigation', 'Location Beacon', 'Guide a new cadet around the ship using Spanish place phrases.',
    `<h3>Place & direction chunks</h3>
    <p>aquí (here) · allí (there) · arriba (up) · abajo (down) · izquierda (left) · derecha (right)</p>
    <p>Places: <b>la puerta</b> (door) · <b>la ventana</b> (window) · <b>el baño</b> (bathroom) · <b>la cocina</b> (kitchen) · <b>la cama</b> (bed) · <b>la escuela</b> (school)</p>
    <p>Patterns: <b>Está aquí</b> (It is here) · <b>¿Dónde está…?</b> (Where is…?) · <b>A la derecha</b> (To the right)</p>`, [
      mc('“¿Dónde está el baño?” asks:', ['How is the bathroom?', 'Where is the bathroom?', 'Is the bathroom clean?', 'Who is in the bathroom?'], 1, '¿Dónde está…? = Where is…?'),
      mc('“Aquí” means:', ['there', 'here', 'up', 'left'], 1, 'Aquí = here.'),
      mc('“A la derecha” means:', ['to the left', 'to the right', 'straight ahead', 'go back'], 1, 'Derecha = right.'),
      fill('Type the Spanish word for “door.”', ['puerta', 'la puerta'], 'Puerta = door.'),
      build('Build: “Where is the kitchen?”', ['¿Dónde', 'está', 'la', 'cocina?'], '¿Dónde está la cocina?'),
      mc('“Está arriba” means:', ['It is down', 'It is up', 'It is here', 'It is open'], 1, 'Arriba = up / upstairs.')
    ], '#4de1ff'));

  allLevels.push(mk('🪐 Phrase Planets', 'sp11', 'Simple Descriptions', 'Size, quantity, and basic adjectives', '📏',
    'Observation Deck', 'Descriptor Lens', 'Describe what you see on the new planet so the log is accurate.',
    `<h3>Description chunks</h3>
    <p>grande (big) · pequeño/a (small) · alto/a (tall) · bajo/a (short) · rápido/a (fast) · lento/a (slow) · nuevo/a (new) · viejo/a (old)</p>
    <p>Patterns:<br>
    <b>Es grande</b> — It is big<br>
    <b>Hay muchos</b> — There are many<br>
    <b>El cohete es rápido</b> — The rocket is fast<br>
    <b>La casa es pequeña</b> — The house is small</p>
    <p>Adjectives often change ending for gender: pequeño / pequeña. They usually follow the noun.</p>`, [
      mc('“Es grande” means:', ['It is small', 'It is big', 'It is fast', 'It is new'], 1, 'Grande = big.'),
      mc('“El cohete es rápido” means:', ['The rocket is slow', 'The rocket is fast', 'I have a rocket', 'The rocket is red'], 1, 'Rápido = fast.'),
      mc('Which form matches a feminine noun like “casa”?', ['pequeño', 'pequeña', 'pequeños', 'pequeñ'], 1, 'Pequeña agrees with feminine casa.'),
      fill('Type the Spanish word for “big.”', ['grande'], 'Grande = big.'),
      build('Build: “The house is small.”', ['La', 'casa', 'es', 'pequeña'], 'La casa es pequeña.'),
      mc('“Hay muchos” means:', ['There is one', 'There are many', 'I want many', 'They are big'], 1, 'Hay muchos = There are many.')
    ], '#e9c46a'));

  // ═══════════════════════════════════════════════════════════════
  // MIDDLE · Story Sectors  —  narrative reuse + new connectors
  // ═══════════════════════════════════════════════════════════════

  allLevels.push(mk('🌠 Story Sectors', 'sp12', 'A Day on the Station', 'Follow a short daily routine story', '🌅',
    'Log Deck', 'Routine Recorder', 'Read the cadet’s morning log and answer in Spanish.',
    `<h3>Story: Un día en la estación</h3>
    <p>Me llamo Luna. Por la mañana, me levanto y camino a la cocina. Tengo hambre. Quiero pan y leche. Después miro por la ventana. Veo las estrellas. Estoy feliz.</p>
    <p><b>New connectors:</b> <b>por la mañana</b> (in the morning) · <b>después</b> (afterward) · <b>y</b> (and)</p>
    <p>You already know most of the chunks. Stories recycle them so your brain strengthens the links automatically (retrieval practice).</p>`, [
      mc('¿Cómo se llama la cadete?', ['Zyx', 'Luna', 'Ana', 'Sol'], 1, 'Me llamo Luna → her name is Luna.'),
      mc('¿Qué quiere Luna por la mañana?', ['jugo y queso', 'pan y leche', 'pollo y arroz', 'agua y fruta'], 1, 'Quiero pan y leche.'),
      mc('“Después miro por la ventana” means:', ['First I look out the window', 'Afterward I look out the window', 'I never look out the window', 'The window is broken'], 1, 'Después = afterward / then.'),
      fill('Type the Spanish word for “afterward / then” used in the story.', ['después', 'despues'], 'Después connects the next action.'),
      build('Build what Luna says about how she feels at the end.', ['Estoy', 'feliz'], 'Estoy feliz.'),
      mc('Why does the story help you learn?', ['It introduces only brand-new words', 'It reuses chunks you already practiced in a meaningful scene', 'It avoids verbs', 'It is only in English'], 1, 'Narrative reuse = retrieval practice inside context.')
    ], '#69d6c5'));

  allLevels.push(mk('🌠 Story Sectors', 'sp13', 'Lost on the Moon Base', 'Questions, location, and problem-solving phrases', '🌕',
    'Rescue Bay', 'Locator Echo', 'A cadet is lost. Use question and location chunks to help.',
    `<h3>Story: Perdido en la base lunar</h3>
    <p>— ¿Dónde estás?<br>
    — Estoy cerca de la puerta grande. No veo el cohete.<br>
    — Camina a la derecha. El cohete es blanco y azul.<br>
    — ¡Gracias! Ahora lo veo. Estoy bien.</p>
    <p><b>New / reinforced:</b> <b>¿Dónde estás?</b> · <b>cerca de</b> (near) · <b>No veo</b> (I don’t see) · <b>Ahora</b> (now) · <b>lo veo</b> (I see it)</p>`, [
      mc('The lost cadet is near:', ['the kitchen', 'the big door', 'the bed', 'the stars'], 1, 'cerca de la puerta grande.'),
      mc('“Camina a la derecha” tells the cadet to:', ['walk left', 'walk right', 'run up', 'sit down'], 1, 'A la derecha = to the right.'),
      mc('“No veo el cohete” means:', ['I see the rocket', 'I don’t see the rocket', 'The rocket is gone forever', 'I want the rocket'], 1, 'No veo = I don’t see.'),
      fill('Type the Spanish question for “Where are you?”', ['¿dónde estás?', 'dónde estás', 'Donde estas', '¿Dónde estás?'], '¿Dónde estás?'),
      build('Build: “I see it now.” (use: Ahora lo veo)', ['Ahora', 'lo', 'veo'], 'Ahora lo veo.'),
      mc('“Estoy bien” at the end means the cadet is:', ['hungry', 'okay / fine', 'lost still', 'angry'], 1, 'Estoy bien = I’m fine / okay.')
    ], '#4de1ff'));

  allLevels.push(mk('🌠 Story Sectors', 'sp14', 'Market Mission', 'Combine food, numbers, and polite requests in a scene', '🛒',
    'Market Ring', 'Supply Run', 'Buy three items for the crew using full polite chunks.',
    `<h3>Story: En el mercado</h3>
    <p>— Hola. ¿Qué quieres?<br>
    — Quiero tres manzanas y un pan, por favor.<br>
    — Aquí tienes. Son cinco.<br>
    — Gracias.<br>
    — De nada. ¡Hasta luego!</p>
    <p><b>New:</b> <b>Aquí tienes</b> (Here you go) · <b>Son cinco</b> (That’s five / They are five) · <b>Hasta luego</b> (See you later)</p>
    <p>Notice how numbers, food, and polite phrases from earlier bands now work together inside one real exchange.</p>`, [
      mc('How many apples does the cadet want?', ['two', 'three', 'five', 'one'], 1, 'tres manzanas = three apples.'),
      mc('“Aquí tienes” is said by the seller to mean:', ['What do you want?', 'Here you go', 'That is expensive', 'Goodbye'], 1, 'Aquí tienes = Here you go / Here you have it.'),
      mc('“Hasta luego” means:', ['Hello', 'Thank you', 'See you later', 'Please'], 2, 'Hasta luego = See you later.'),
      fill('Type the Spanish phrase for “please” used in the order.', ['por favor'], 'Por favor.'),
      build('Build the cadet’s order: “I want three apples.”', ['Quiero', 'tres', 'manzanas'], 'Quiero tres manzanas.'),
      mc('The seller says the total is:', ['tres', 'cinco', 'uno', 'diez'], 1, 'Son cinco = They are five (cost or count).')
    ], '#f4a261'));

  allLevels.push(mk('🌠 Story Sectors', 'sp15', 'Feelings After the Jump', 'Express states and reasons with porque', '💫',
    'Med Bay', 'Status Report', 'Explain how the crew feels after a long hyperspace jump.',
    `<h3>Story: Después del salto</h3>
    <p>El salto fue largo. Tengo sed y estoy cansado. Mi amigo tiene hambre porque no comió. Queremos agua y pan. Después vamos a dormir. Estamos felices de estar en casa.</p>
    <p><b>New power word:</b> <b>porque</b> (because) — links a feeling or action to a reason.<br>
    <b>fue</b> (was) · <b>comió</b> (ate) — first gentle touch of past forms inside a story, not as a grammar drill.</p>`, [
      mc('Why is the friend hungry?', ['porque saltó', 'porque no comió', 'porque está feliz', 'porque quiere dormir'], 1, 'porque no comió = because he/she didn’t eat.'),
      mc('“Porque” means:', ['but', 'because', 'after', 'also'], 1, 'Porque = because.'),
      mc('What do they want?', ['jugo y queso', 'agua y pan', 'leche y fruta', 'pollo y arroz'], 1, 'Queremos agua y pan.'),
      fill('Type the Spanish word for “because.”', ['porque'], 'Porque links reason to result.'),
      build('Build: “I’m tired.”', ['Estoy', 'cansado'], 'Estoy cansado (masculine form used in the story).'),
      mc('“Estamos felices de estar en casa” means they are:', ['sad to be home', 'happy to be home', 'lost at home', 'hungry at home'], 1, 'Estamos felices = we are happy.')
    ], '#c084fc'));

  allLevels.push(mk('🌠 Story Sectors', 'sp16', 'Describing a New Planet', 'Combine colors, size, and place into a report', '🪐',
    'Science Deck', 'Planet Log', 'Write a short Spanish description of the new world for the Academy archive.',
    `<h3>Story: El planeta verde</h3>
    <p>El planeta es grande y verde. Hay muchos árboles. El cielo es azul. Veo una casa pequeña cerca de un río. La casa es blanca. Me gusta este planeta porque es tranquilo.</p>
    <p>You are now combining description, location, color, and <b>porque</b> in one coherent report — the hallmark of the Orbit stage.</p>`, [
      mc('What color is the planet?', ['rojo', 'verde', 'negro', 'amarillo'], 1, 'grande y verde.'),
      mc('Where is the small house?', ['arriba del cielo', 'cerca de un río', 'dentro del cohete', 'en la cocina'], 1, 'cerca de un río = near a river.'),
      mc('Why does the narrator like the planet?', ['porque es grande', 'porque es tranquilo', 'porque es rojo', 'porque tiene hambre'], 1, 'porque es tranquilo = because it is peaceful/calm.'),
      fill('Type the Spanish word for “sky.”', ['cielo'], 'Cielo = sky.'),
      build('Build: “The house is white.”', ['La', 'casa', 'es', 'blanca'], 'La casa es blanca.'),
      mc('“Hay muchos árboles” means:', ['There are many trees', 'I want many trees', 'The trees are big', 'Look at the trees'], 0, 'Hay muchos = There are many.')
    ], '#35f0c0'));

  allLevels.push(mk('🌠 Story Sectors', 'sp17', 'Dialogue with Zyx', 'Full mini-conversation recycling core chunks', '👽',
    'Bridge', 'Mentor Channel', 'Talk with mentor Zyx using everything you have learned.',
    `<h3>Dialogue: Conversación con Zyx</h3>
    <p><b>Zyx:</b> ¡Hola! ¿Cómo te llamas?<br>
    <b>Tú:</b> Me llamo ___. ¿Y tú?<br>
    <b>Zyx:</b> Me llamo Zyx. ¿Cómo estás?<br>
    <b>Tú:</b> Bien, gracias. Tengo un poco de hambre.<br>
    <b>Zyx:</b> ¿Quieres una manzana?<br>
    <b>Tú:</b> Sí, por favor. ¡Gracias!<br>
    <b>Zyx:</b> De nada. Ahora camina a la cocina. ¡Hasta luego!</p>
    <p>This is the Orbital Echo payoff: greetings, feelings, food, polite forms, and an action command in one natural exchange.</p>`, [
      mc('Zyx first asks for your:', ['age', 'name', 'favorite color', 'home planet'], 1, '¿Cómo te llamas? = What is your name?'),
      mc('You tell Zyx you are:', ['tired', 'a little hungry', 'lost', 'angry'], 1, 'Tengo un poco de hambre.'),
      mc('Zyx offers:', ['water', 'an apple', 'bread', 'milk'], 1, '¿Quieres una manzana?'),
      fill('Type Zyx’s goodbye phrase.', ['hasta luego', 'Hasta luego'], 'Hasta luego = See you later.'),
      build('Build your polite acceptance: “Yes, please.”', ['Sí', 'por', 'favor'], 'Sí, por favor.'),
      mc('At the end Zyx tells you to:', ['run to the bridge', 'walk to the kitchen', 'sit down', 'look out the window'], 1, 'camina a la cocina.')
    ], '#ff8aa8'));

  // ── Register bands ────────────────────────────────────────────
  window.COURSES = window.COURSES || {};
  const retier = (levels, sectionById) => levels.map((l) => Object.assign({}, l, { tier: sectionById[l.id] || l.tier }));
  const band = (id, name, icon, c1, c2, tag, levels) => {
    window.COURSES[id] = { name, icon, c1, c2, tagline: tag, levels };
  };

  band('spanish_basic', 'Basic · Sound Dock', '🔊', '#69d6c5', '#4de1ff',
    'Pure vowels, key Spanish sounds, numbers, colors, greetings, and polite chunks — the Orbital Echo foundation.',
    retier(allLevels.slice(0, 6), {
      sp0: '🔊 Pure Vowels',
      sp1: '🔑 Key Sounds',
      sp2: '🔢 Numbers',
      sp3: '🎨 Colors',
      sp4: '👋 Greetings',
      sp5: '🙏 Polite Orbit'
    }));

  band('spanish_intermediate', 'Intermediate · Phrase Planets', '🪐', '#35f0c0', '#8b6cff',
    'Family, body & feelings, food, action commands, places, and descriptions — living phrase chunks in context.',
    retier(allLevels.slice(6, 12), {
      sp6: '👨‍👩‍👧‍👦 Family Crew',
      sp7: '🫀 Body & Feelings',
      sp8: '🍎 Food & Market',
      sp9: '🏃 Action Commands',
      sp10: '🚀 Places on the Ship',
      sp11: '📏 Descriptions'
    }));

  band('spanish_middle', 'Middle · Story Sectors', '🌠', '#ffc36b', '#ff5f8d',
    'Narrative missions that recycle earlier chunks and add connectors, questions, and short dialogues.',
    retier(allLevels.slice(12, 18), {
      sp12: '🌅 A Day on the Station',
      sp13: '🌕 Lost on the Moon Base',
      sp14: '🛒 Market Mission',
      sp15: '💫 Feelings After the Jump',
      sp16: '🪐 Describing a Planet',
      sp17: '👽 Dialogue with Zyx'
    }));

  // Comprehensive gauntlets per band (all MC from that band)
  const gauntletFrom = (lvls) => {
    const qs = lvls.flatMap((l) => l.challenges).filter((q) => q.type === 'mc');
    return [0, 1, 2, 3].map((tier) => () => {
      if (!qs.length) return { type: 'mc', q: 'Complete missions first!', options: ['OK'], answer: 0, why: 'Practice missions to fill the gauntlet.' };
      const q = Object.assign({}, qs[Math.floor(Math.random() * qs.length)]);
      if (tier >= 2) q.q = q.q + ' (piensa bien)';
      return q;
    });
  };
  window.SURVIVAL = window.SURVIVAL || {};
  window.SURVIVAL.spanish_basic = gauntletFrom(allLevels.slice(0, 6));
  window.SURVIVAL.spanish_intermediate = gauntletFrom(allLevels.slice(6, 12));
  window.SURVIVAL.spanish_middle = gauntletFrom(allLevels.slice(12, 18));
})();
