export interface ArticleInfo {
  id: string;
  title: string;
  category: 'Travel Guide' | 'Travel Journal' | 'Conservation';
  readTime: string;
  publishedDate: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
  image: string;
}

export const ARTICLES_DATA: ArticleInfo[] = [
  {
    id: 'bwindi-gorilla-encounter-story',
    title: 'Meeting the Silverback in Bwindi: The 7:00 AM Morning Mist',
    category: 'Travel Journal',
    readTime: '6 min read',
    publishedDate: 'November 2025',
    author: 'Racheal Lorna, Safari Director',
    summary:
      'The morning mist rolls over the rainforest ridges as drums and Batwa dancing awaken your spirit at 7:00 AM. Then begins the trek through ancient bamboo to meet the silverback face to face.',
    content: [
      'You arrive at the park headquarters in Bwindi at 7:00 AM just as the mountain mist begins to roll off the high rainforest ridges. The air is cool, carrying the sweet scent of damp moss, wild eucalyptus, and crushed ferns.',
      'Before the briefing, local Batwa dancers step forward in traditional attire. Their rhythmic drumming and energetic foot-stomping dance celebrate the heritage of the forest people. Warm Ugandan coffee in hand, your heart rate quickens with anticipation. The chief ranger assigns your small group of eight to a habituated gorilla family and explains the ethics of the encounter: speak in whispers, stay close together, and keep your gaze respectful.',
      'We set off with walking sticks onto the damp earthen trail. Dense tangled vines and wild bamboo brush against your shoulders as our trackers chop a narrow path ahead with machetes. Sweat breaks out on your brow as the slope steepens, but the energy of the ancient forest carries you forward.',
      'Suddenly, the head tracker holds up a hand and turns with a wide smile: “They are right here.”',
      'You step through a curtain of wild celery. There he is: a massive 450-pound silverback sitting calmly just yards away. He pulls down tender shoots with leathery black fingers, his amber eyes gazing peacefully back into yours with deep intelligence. Above him, two juvenile gorillas tumble and somersault through the bamboo stalks. For one complete hour, the modern world disappears completely. You stand breathless, humbled by the gentle presence of our wild cousins in their ancient home.'
    ],
    tags: ['Uganda', 'Bwindi', 'Mountain Gorillas', 'Batwa Culture', 'Safari Feeling'],
    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
  },
  {
    id: 'murchison-falls-roar-story',
    title: 'Standing in the Roar of Murchison Falls: When the Ground Trembles',
    category: 'Travel Journal',
    readTime: '5 min read',
    publishedDate: 'October 2025',
    author: 'Fifty4 Field Team',
    summary:
      'Long before you see the falls, you feel the deep bass vibration in your chest. The entire Nile river forced through a 7-meter rock cleft will leave you drenched in cool spray and awe.',
    content: [
      'Long before your eyes catch the foaming waters, you feel Murchison Falls in your chest. The ground beneath your safari boots vibrates with a deep, primal bass note that reverberates through the rock gorge.',
      'Emerging onto the viewpoint rocks, cool white mist douses your face, a welcome relief in the midday savannah warmth. Here, the world’s longest river—which spans hundreds of meters wide upstream—is violently squeezed into a narrow rock cleft barely seven meters wide. Millions of liters of churning water plunge 43 meters into the froth below with thunderous fury.',
      'Permanent rainbows arc through the sunlight across the rising spray. Standing there, watching the sheer raw power of nature, you realize why early explorers called this the most spectacular water surge on Earth.',
      'Later in the afternoon, we board our private river boat down below the falls. Pods of hippos pop their snouts out of the water with playful grunts, massive Nile crocodiles bask on sandbanks with jaws open, and a family of wild elephants strolls down the green riverbanks to drink and swim in the cool current.'
    ],
    tags: ['Murchison Falls', 'River Nile', 'Uganda Safaris', 'Elephant Herds'],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.44_d27ead9b.jpeg'
  },
  {
    id: 'ishasha-tree-climbing-lions',
    title: 'The Fig Tree Sentinels: Tree-Climbing Lions of Ishasha',
    category: 'Travel Journal',
    readTime: '4 min read',
    publishedDate: 'October 2025',
    author: 'Jolly, Wildlife Guide',
    summary:
      'In Queen Elizabeth National Park, lions don’t sleep in the tall grass—they climb into giant sycamore fig trees. Looking up to see black manes draped over branches is an unforgettable sight.',
    content: [
      'In the southern Ishasha sector of Queen Elizabeth National Park, your guide teaches you an essential safari rule: always look up, not just at the grass.',
      'As the midday equatorial heat builds over the golden plains, the lions here have developed a rare and fascinating behavioral adaptation. To escape biting tsetse flies on the ground and catch the cooling breeze, they climb high into the sprawling limbs of ancient sycamore fig trees.',
      'With our 4x4 pop-up roof fully extended and the engine switched off, we pulled up beneath a giant fig tree. Twelve feet above us lay a magnificent lioness and two half-grown cubs, draped along thick horizontal branches like giant golden house cats. Their massive paws dangled in the air as they lazily twitched their ears, keeping a watchful eye over herds of grazing Uganda Kob in the distance.',
      'Being able to observe wild predators relaxed and at ease in the tree canopy just meters above your vehicle is an experience unique to this special corner of Uganda.'
    ],
    tags: ['Queen Elizabeth', 'Ishasha', 'Tree Climbing Lions', 'Savannah Drive'],
    image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
  },
  {
    id: 'serengeti-sunrise-balloon-flight',
    title: 'Floating Above the Serengeti Sunrise: Ballooning Over the Great Migration',
    category: 'Travel Journal',
    readTime: '5 min read',
    publishedDate: 'September 2025',
    author: 'Fifty4 Expedition Team',
    summary:
      'Waking at 5:00 AM in the bush, stepping into a hot air balloon basket, and floating silently above thousands of migrating wildebeest as the golden African sunrise illuminates the plains.',
    content: [
      '5:00 AM in the Serengeti is crisp and quiet. You step out of your canvas tent under a canopy of blazing stars. At the launch site, giant gas burners roar into life, illuminating the towering balloon envelope against the pre-dawn shadows.',
      'As the ground crew releases the ropes, you lift off with an almost imperceptible gentleness. There is no engine noise, no vibration—only the whisper of the morning breeze. Then, the golden rim of the sun peeks over the eastern horizon, splashing the endless plains with brilliant amber, rose, and gold.',
      'Looking straight down, the landscape transforms into living art. Endless trails of wildebeest and zebras march across the savannah in winding lines. A pair of giraffes gallop gracefully across an acacia clearing, their long shadows stretching across the grass. Prides of lions survey the scene from granite kopjes.',
      'Landing softly on the open savannah, our camp team greets you with chilled champagne and a freshly cooked full English breakfast served on white linen under an acacia tree. It is the quintessential African dream made real.'
    ],
    tags: ['Tanzania', 'Serengeti', 'Hot Air Balloon', 'Great Migration', 'Bush Breakfast'],
    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
  },
  {
    id: 'kazinga-channel-swimming-giants',
    title: 'Drifting the Kazinga Channel: Swimming Giants and River Hippos',
    category: 'Travel Journal',
    readTime: '4 min read',
    publishedDate: 'August 2025',
    author: 'Fifty4 Field Team',
    summary:
      'A two-hour afternoon boat cruise along Kazinga Channel offers the highest hippo density in the world and herds of wild elephants swimming right beside the boat.',
    content: [
      'At 2:00 PM, when the savannah sun is at its brightest, all life in Queen Elizabeth National Park converges on the Kazinga Channel. This 32-kilometer natural waterway connects Lake George and Lake Edward, serving as the lifeblood of the ecosystem.',
      'Stepping aboard our safari vessel, cameras clicking, you immediately understand why this is a photographer’s paradise. You are floating through the world’s dense gathering of river hippos. Hundreds of them lounge in shallow sandbanks, snorting plumes of spray, while massive bulls flash four-inch ivory tusks in territorial displays.',
      'Then comes the highlight of the afternoon: a breeding herd of thirty elephants emerges from the acacia forest. Unbothered by our boat, the mothers, juveniles, and tiny calves wade straight into the deep water, swimming across with trunks raised high like breathing periscopes. Waterbirds—African fish eagles, pied kingfishers, and pink-backed pelicans—swoop overhead in the blue sky.'
    ],
    tags: ['Queen Elizabeth', 'Kazinga Channel', 'Elephants', 'Hippo Pods', 'Boat Cruise'],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.24_b621a8a6.jpeg'
  },
  {
    id: 'mgahinga-sabyinyo-three-borders',
    title: 'Summiting Mgahinga’s Volcanoes: Standing in Three Countries at Once',
    category: 'Travel Journal',
    readTime: '5 min read',
    publishedDate: 'August 2025',
    author: 'Fifty4 Alpine Team',
    summary:
      'Ascending handmade wooden ladders up Mount Sabyinyo’s dramatic ridges in Mgahinga to reach the peak where Uganda, Rwanda, and DR Congo meet at 3,669 meters.',
    content: [
      'Mount Sabyinyo, known locally as “Old Man’s Teeth” due to its jagged serrated summit ridge, offers one of the most rewarding and thrilling mountain day hikes in all of Africa.',
      'Setting off from the Mgahinga Gorilla National Park base, you climb through three distinct ecological zones. The first section winds through dense golden bamboo forests where endangered golden monkeys scamper playfully overhead. Higher up, the trail transitions into misty Afro-montane moorland draped in hanging Spanish moss and giant lobelias.',
      'The final push requires true spirit: scaling sturdy handmade wooden ladders fastened to sheer volcanic rock faces with mist swirling on either side. Reaching Peak 3 at 3,669 meters above sea level, you step onto a small circular platform. Here, without needing a passport, you are standing simultaneously in Uganda, Rwanda, and the Democratic Republic of Congo!',
      '360-degree views open up across the entire Virunga volcanic chain, with Lake Bunyonyi sparkling in the distance. The sense of accomplishment and wild freedom at the summit is impossible to forget.'
    ],
    tags: ['Mgahinga', 'Volcano Hike', 'Sabyinyo', 'Golden Monkeys', 'Active Hiking'],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.33_146d2191.jpeg'
  },
  {
    id: 'lake-bunyonyi-dugout-canoe',
    title: 'Tranquil Waters of Lake Bunyonyi: Canoe Gliding Among 29 Islands',
    category: 'Travel Journal',
    readTime: '4 min read',
    publishedDate: 'July 2025',
    author: 'Jojo, Reservations & Operations',
    summary:
      'After days of strenuous forest trekking, resting beside the terraced crater hills of Lake Bunyonyi and paddling a hand-carved eucalyptus canoe is pure tranquility.',
    content: [
      'After days of trekking through the steep bamboo slopes of Bwindi, arriving at Lake Bunyonyi feels like entering an oasis of complete serenity. The name Bunyonyi means “the place of little birds,” and the lake is renowned for being safe from bilharzia, hippos, and crocodiles, making it one of the few completely swim-friendly lakes in East Africa.',
      'Early in the morning, mist clings to the water’s surface like a delicate silk veil. We push off in a traditional dugout canoe hand-carved from a single large eucalyptus tree trunk. With gentle strokes of the wooden paddle, you glide silently between the 29 lush green islands that dot the deep volcanic crater.',
      'Terraced farming hills climb vertically into the clouds, glowing vibrant emerald and golden in the morning light. Pied kingfishers dive gracefully for fish, while crowned cranes call in pairs overhead. You pause in the middle of the lake, listening to absolute quiet, broken only by water lapping against the hull. It is the perfect place to reflect on your journey.'
    ],
    tags: ['Lake Bunyonyi', 'Canoe Safari', 'Rest & Relaxation', 'Kigezi Highlands'],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.29_353dfbe4.jpeg'
  },
  {
    id: 'ziwa-rhino-walking-tracking',
    title: 'Footsteps in the Bush: On-Foot White Rhino Tracking at Ziwa',
    category: 'Travel Journal',
    readTime: '4 min read',
    publishedDate: 'July 2025',
    author: 'Fifty4 Field Team',
    summary:
      'Leaving the safari vehicle behind to track wild Southern White Rhinos on foot with armed rangers gives an adrenaline rush and deep respect for African conservation.',
    content: [
      'Most safaris are experienced from the safety of a 4x4 pop-up roof vehicle. At Ziwa Rhino Sanctuary in central Uganda, you step out onto the red earth and experience Africa with your own boots on the ground.',
      'Led by an armed Uganda Wildlife Authority ranger guide who knows every individual rhino by name and footprint, you slip quietly into the thorny acacia savannah. You learn to read the wind direction, tread softly over dry twigs, and watch for freshly broken branches.',
      'Your ranger suddenly gestures with a clenched fist to halt. Ten meters ahead through the thorn bush, an 8,000-pound white rhino bull and his mother are grazing peaceably. Standing eye-level with one of the planet’s largest land mammals with nothing between you but tall grass sends a thrilling surge of adrenaline through your veins.',
      'The rhino lifts its great prehistoric horn, sniffs the air, decides you pose no threat, and resumes grazing. Ziwa’s successful breeding program has rebuilt Uganda’s wild rhino population from local extinction, and seeing these magnificent creatures thrive under protection is deeply inspiring.'
    ],
    tags: ['Ziwa Rhinos', 'Walking Safari', 'Conservation', 'On Foot Wildlife'],
    image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nyungwe-canopy-walkway-rwanda',
    title: 'Suspended 70 Meters Above the Rainforest: Nyungwe Canopy Walk',
    category: 'Travel Journal',
    readTime: '4 min read',
    publishedDate: 'June 2025',
    author: 'Fifty4 Rwanda Team',
    summary:
      'Walking across the steel suspension bridge hanging high above the ancient Nyungwe primeval rainforest canopy with monkeys leaping in treetops below.',
    content: [
      'In the southwest corner of Rwanda lies Nyungwe National Park, one of the oldest and best-preserved montane rainforests on the African continent. But the real adventure begins when you leave the forest floor.',
      'After an invigorating one-hour hike through towering giant ferns and ancient mahogany trees, you arrive at the start of the 160-meter-long canopy walkway. Suspended 70 meters above the canyon floor on sturdy steel cables, stepping onto the bridge feels like stepping into the sky.',
      'The walkway gently sways with your steps as the wind whispers through the treetops. Looking down, you are walking directly above the crowns of centuries-old trees where Angola colobus monkeys leap acrobatically between branches. Flocks of great blue turacos with brilliant indigo wings glide past at eye level.',
      'Looking across the horizon, endless emerald ridges stretch toward Lake Kivu and the Congo basin. It is a view few people on Earth ever get to experience.'
    ],
    tags: ['Rwanda', 'Nyungwe', 'Canopy Walk', 'Rainforest', 'Primates'],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.28_4acce011.jpeg'
  }
];
