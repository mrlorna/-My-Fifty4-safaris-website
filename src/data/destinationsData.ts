export interface DestinationInfo {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  coverImage: string;
  bestTimeToVisit: string;
  wildlifeHighlights: string[];
  nationalParks: string[];
  entryRequirements: string;
  travelTips: string[];
  isLaunchDestination: boolean;
  featuredToursCount: number;
}

export const DESTINATIONS_DATA: DestinationInfo[] = [
  {
    id: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa & Primate Sanctuary of the World',
    summary:
      'Home to over half of the world’s surviving mountain gorillas, the source of the mighty River Nile, and ten ecologically diverse national parks where savannah meets equatorial rainforest.',
    description:
      'Winston Churchill famously christened Uganda "The Pearl of Africa" for its magnificence, color, and lavish profusion of life. Uganda offers an unparalleled intimacy with nature: trek through ancient mists to lock eyes with wild mountain gorillas in Bwindi Impenetrable Forest, track habituated chimpanzees swinging through Kibale, encounter tree-climbing lions in Queen Elizabeth, and witness the Nile thunder through the 7-meter gorge at Murchison Falls.',
    coverImage: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    bestTimeToVisit: 'June to September & December to February (dry seasons with optimal tracking trails); green season (March to May, October to November) offers emerald lush scenery and excellent birding.',
    wildlifeHighlights: [
      'Mountain Gorillas (Bwindi & Mgahinga)',
      'Chimpanzees (Kibale Forest & Budongo)',
      'Tree-climbing Lions (Ishasha, Queen Elizabeth)',
      'Prehistoric Shoebill Stork (Mabamba & Albert Delta)',
      'Rothschild Giraffes & African Savanna Elephants',
      'Over 1,060 Bird Species (half of Africa’s avian diversity)'
    ],
    nationalParks: [
      'Bwindi Impenetrable National Park (UNESCO)',
      'Queen Elizabeth National Park',
      'Murchison Falls National Park',
      'Kibale Forest National Park',
      'Kidepo Valley National Park',
      'Lake Mburo National Park',
      'Rwenzori Mountains (Mountains of the Moon)'
    ],
    entryRequirements: 'Online Uganda Tourist Visa ($50) or East Africa Tourist Visa ($100). Valid Yellow Fever vaccination certificate is mandatory upon arrival.',
    travelTips: [
      'Gorilla trekking permits ($800) must be booked 3 to 6 months in advance due to strict daily quotas (8 visitors per gorilla family per day).',
      'Sturdy waterproof hiking boots and garden gloves are essential for gripping vegetation in Bwindi.',
      'Uganda operates on East Africa Time (GMT+3). Official languages are English and Swahili.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 4
  },
  {
    id: 'kenya',
    name: 'Kenya',
    tagline: 'The Birthplace of Safari & Iconic Savannah Horizons',
    summary:
      'From the world-renowned Masai Mara plains to the dramatic silhouette of Mount Kilimanjaro in Amboseli, Kenya is the quintessential safari destination.',
    description:
      'Kenya is where the concept of safari was born. It captivates travelers with golden sweeping savannahs, ancient tribal warrior traditions, and dramatic wildlife theatre. Experience the thundering hooves of the Great Migration, track big cats in private community conservancies, and gaze upon elephant herds roaming before snow-capped Mount Kilimanjaro.',
    coverImage: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    bestTimeToVisit: 'July to October for the Great Wildebeest Migration in the Masai Mara; January to March for mild, dry weather and superb game viewing across Amboseli and Samburu.',
    wildlifeHighlights: [
      'The Big Five (Lion, Leopard, Elephant, Rhino, Buffalo)',
      'Over 1.5 million Wildebeests and Zebras during Migration',
      'Samburu Special Five (Grevy’s Zebra, Reticulated Giraffe, Gerenuk, Beisa Oryx, Somali Ostrich)',
      'Cheetah coalitions on open plains'
    ],
    nationalParks: [
      'Masai Mara National Reserve',
      'Amboseli National Park',
      'Tsavo East & Tsavo West',
      'Samburu National Reserve',
      'Lake Nakuru National Park',
      'Ol Pejeta Conservancy'
    ],
    entryRequirements: 'Kenya Electronic Travel Authorisation (eTA) applied online prior to departure ($34).',
    travelTips: [
      'Private conservancies bordering the Mara offer night game drives and off-road tracking not permitted in the national reserve.',
      'Fly-in safaris between parks save 6+ hours of bumpy transit on corrugated roads.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 3
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    tagline: 'Untamed Wilderness, Ancient Calderas & Spice Islands',
    summary:
      'Home to the iconic Serengeti plains, the lost world of Ngorongoro Crater, Mount Kilimanjaro, and the idyllic turquoise shores of Zanzibar.',
    description:
      'Tanzania is a land of superlatives: Africa’s tallest mountain (Mount Kilimanjaro), its deepest lake (Lake Tanganyika), and the largest unflooded caldera on Earth (Ngorongoro). Here, vast ecosystems remain wild and unfenced, allowing wildlife migrations to follow ancient rhythms unbroken for millennia.',
    coverImage: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
    bestTimeToVisit: 'January to March for the calving season in southern Serengeti; July to October for dramatic Mara River crossings in northern Serengeti; year-round in Ngorongoro Crater.',
    wildlifeHighlights: [
      'Serengeti Great Migration herds',
      'Black Rhinos on the Ngorongoro Crater floor',
      'Tree-climbing lions in Lake Manyara',
      'Predator density including over 3,000 Serengeti lions',
      'Marine life and whale sharks in Zanzibar waters'
    ],
    nationalParks: [
      'Serengeti National Park (UNESCO)',
      'Ngorongoro Conservation Area',
      'Tarangire National Park',
      'Lake Manyara National Park',
      'Nyerere National Park (Selous)',
      'Ruaha National Park'
    ],
    entryRequirements: 'Online Tanzania e-Visa ($50 for most nationalities, $100 for US citizens).',
    travelTips: [
      'Combine a northern circuit safari with 4-5 nights in Zanzibar for the perfect bush-and-beach balance.',
      'The crater floor can get chilly at dawn; pack layers for early morning descents.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 3
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    tagline: 'Land of a Thousand Hills & High-End Conservation',
    summary:
      'A model of environmental recovery and luxury primate conservation, offering world-class mountain gorilla tracking and pristine rainforested peaks.',
    description:
      'Rwanda represents the pinnacle of modern luxury conservation. Known as the Land of a Thousand Hills, this clean, orderly, and deeply hospitable nation invites travelers to explore the dramatic Virunga Volcanoes, ancient montane forests of Nyungwe with chimpanzees and golden monkeys, and the savannah Big Five of Akagera.',
    coverImage: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    bestTimeToVisit: 'June to mid-September and mid-December to February for the dry season tracking conditions.',
    wildlifeHighlights: [
      'Mountain Gorillas in Volcanoes National Park',
      'Endangered Golden Monkeys in bamboo groves',
      'Nyungwe Forest Chimpanzees and 13 primate species',
      'Lions and Rhinos in Akagera National Park'
    ],
    nationalParks: [
      'Volcanoes National Park',
      'Nyungwe Forest National Park',
      'Akagera National Park',
      'Gishwati-Mukura National Park'
    ],
    entryRequirements: 'Rwanda 30-day visa upon arrival or online e-Visa ($50). East Africa Tourist Visa also accepted.',
    travelTips: [
      'Rwanda’s gorilla permit is $1,500 per person, funding community development and high-level veterinary protection.',
      'Kigali is one of Africa’s safest and cleanest capital cities—allocate at least one day to explore.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 2
  },
  {
    id: 'zambia',
    name: 'Zambia',
    tagline: 'Raw Wilderness & The Pioneer of Walking Safaris',
    summary:
      'Authentic, remote, and uncrowded. Walk through legendary South Luangwa with master guides and stand before the awe-inspiring Victoria Falls.',
    description:
      'For the seasoned safari connoisseur, Zambia offers an unvarnished safari experience. Famous as the home of the walking safari, South Luangwa puts you intimately in touch with the earth, tracking predators without vehicle engines. Further south, the Zambezi River roars over the precipice of Victoria Falls—a mile-wide curtain of thunderous water.',
    coverImage: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
    bestTimeToVisit: 'May to October (dry season) is ideal for South Luangwa game viewing. March to May is best to see Victoria Falls in full peak flow.',
    wildlifeHighlights: [
      'Dense leopard populations in South Luangwa',
      'Endangered African Wild Dogs (Painted Wolves)',
      'Thornicroft’s Giraffes and Cookson’s Wildebeests',
      'Massive hippo pods in oxbow lagoons',
      'White Rhinos in Mosi-oa-Tunya'
    ],
    nationalParks: [
      'South Luangwa National Park',
      'Lower Zambezi National Park',
      'Kafue National Park',
      'Mosi-oa-Tunya National Park (Victoria Falls)'
    ],
    entryRequirements: 'Zambia e-Visa or visa on arrival ($50). KAZA Uni-Visa ($50) covers both Zambia and Zimbabwe for Victoria Falls crossings.',
    travelTips: [
      'Zambian walking safari guides undergo some of the strictest certification exams in Africa.',
      'Take a scenic helicopter flight ("Flight of Angels") over Victoria Falls to appreciate its sheer scale.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 1
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar & Coast',
    tagline: 'Turquoise Waters, Spice Groves & Swahili Architecture',
    summary:
      'The quintessential post-safari retreat: pristine coral reefs, Stone Town UNESCO heritage, and secluded Indian Ocean beachfront villas.',
    description:
      'After the exhilaration of tracking primates in Bwindi or witnessing big cats on the savannah, Zanzibar offers the ultimate decompression. Known as the Spice Island, it enchants with fragrant clove plantations, labyrinthine Stone Town alleys, dhow sailing at golden hour, and powdery white sand beaches lapped by warm azure waters.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'June to October and December to February offer warm sunny days with minimal rainfall and calm sea conditions for snorkeling and scuba diving.',
    wildlifeHighlights: [
      'Green sea turtles & dolphins off Mnemba Atoll',
      'Endangered Zanzibar Red Colobus Monkeys in Jozani Chwaka Bay',
      'Whale sharks in Mafia Island channels (seasonal)',
      'Vibrant coral reef biodiversity with manta rays'
    ],
    nationalParks: [
      'Jozani Chwaka Bay National Park',
      'Mnemba Atoll Marine Reserve',
      'Prison Island Giant Tortoise Sanctuary',
      'Chumbe Island Coral Sanctuary'
    ],
    entryRequirements: 'Tanzania visa applies. Mandatory Zanzibar inbound travel insurance ($44) issued through official Zanzibar authorities.',
    travelTips: [
      'Fly directly from Serengeti or Entebbe into Zanzibar (ZNZ) without lengthy road transits.',
      'Dress modestly with shoulders and knees covered when wandering through historic Stone Town.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 2
  },
  {
    id: 'group-tours',
    name: 'Group Tours',
    tagline: 'Guaranteed Departures, Small-Group Camaraderie & Shared Costs',
    summary:
      'Scheduled small-group expeditions capped at 6 travelers per custom 4x4 pop-up Land Cruiser with guaranteed window seats and expert native guides.',
    description:
      'Our Fifty4 Group Tours provide the ideal balance between bespoke safari luxury and exceptional value. Traveling with a maximum of 6 like-minded wildlife enthusiasts per custom 4x4 Land Cruiser, every guest is guaranteed a window seat with an open 360-degree photography pop-up roof. Scheduled departures run bi-weekly year-round with gorilla permits and national park passes fully locked in advance.',
    coverImage: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    bestTimeToVisit: 'Bi-weekly departures year-round. Peak dry seasons (June to September & December to February) feature expedited booking confirmation.',
    wildlifeHighlights: [
      'Guaranteed Bwindi Mountain Gorilla Family tracking',
      'Ishasha Tree-Climbing Lions & Kazinga Channel Boat Cruise',
      'Chimpanzee tracking in Kibale Forest',
      'Serengeti & Masai Mara Great Migration crossings',
      'Big Five game drives across premier East African conservancies'
    ],
    nationalParks: [
      'Bwindi Impenetrable National Park (Uganda)',
      'Queen Elizabeth National Park (Uganda)',
      'Kibale Forest National Park (Uganda)',
      'Masai Mara National Reserve (Kenya)',
      'Serengeti National Park (Tanzania)'
    ],
    entryRequirements: 'East Africa Tourist Visa ($100) covers Uganda, Kenya, and Rwanda with multiple entries.',
    travelTips: [
      'Small groups capped strictly at 6 guests per vehicle guarantee personalized ranger attention and unobstructed photography angles.',
      'Solo travelers can join guaranteed departure dates without paying high single-supplement lodge fees.'
    ],
    isLaunchDestination: true,
    featuredToursCount: 4
  },
  {
    id: 'more-africa',
    name: 'More Africa',
    tagline: 'Custom Journeys Across Southern & Greater Africa',
    summary:
      'Custom safari design covering Botswana’s Okavango Delta, Namibia’s Sossusvlei dunes, and South Africa’s Cape & Kruger.',
    description:
      'Fifty4 Safaris is built on the vision of Africa’s 54 countries. While our primary operational headquarters are based in Uganda with established hubs across East Africa, our bespoke concierge curates verified custom itineraries to Botswana, Namibia, South Africa, and Madagascar through our vetted conservation partner network.',
    coverImage: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
    bestTimeToVisit: 'Region-dependent. Southern Africa dry season is June to October.',
    wildlifeHighlights: [
      'Okavango Delta Mokoro canoe safaris',
      'Desert-adapted Elephants & Rhinos of Namibia',
      'Kruger National Park Big Five',
      'Cape Whale Coast & Table Mountain biodiversity'
    ],
    nationalParks: [
      'Okavango Delta & Chobe (Botswana)',
      'Etosha & Namib-Naukluft (Namibia)',
      'Kruger & Sabi Sands (South Africa)'
    ],
    entryRequirements: 'Country specific. Our safari planners provide verified visa guidance for each multi-country itinerary.',
    travelTips: [
      'Trips to southern Africa can be seamlessly linked with East Africa via direct flights between Nairobi/Entebbe and Johannesburg.',
      'Contact our concierge to check live lodge availability and bespoke pricing.'
    ],
    isLaunchDestination: false,
    featuredToursCount: 1
  }
];
