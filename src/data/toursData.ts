export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  accommodation: string;
  mealPlan: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  destinations: string[];
  primaryDestination: string;
  durationDays: number;
  durationNights: number;
  category: string;
  travelStyle: string;
  priceUSD: number;
  priceNote: string;
  isVerifiedPrice: boolean;
  isFlagship?: boolean;
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  accommodations: {
    name: string;
    tier: string;
    location: string;
    note: string;
  }[];
  physicalDemand: 'Easy' | 'Moderate' | 'Challenging';
  bestMonths: string[];
  departureType: 'Guaranteed Weekly' | 'Private Customized' | 'Seasonal Small Group';
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'gorillas-savannah-uganda',
    title: 'Gorillas & Savannah — Uganda',
    subtitle: '8-Day Mountain Gorilla Trekking & Queen Elizabeth Savannah Safari',
    destinations: ['Uganda'],
    primaryDestination: 'Uganda',
    durationDays: 8,
    durationNights: 7,
    category: 'Gorilla and Primate Experiences',
    travelStyle: 'Luxury Safari Experiences',
    priceUSD: 5480,
    priceNote: 'Per person sharing, includes $800 official UWA Gorilla Tracking Permit',
    isVerifiedPrice: true,
    isFlagship: true,
    coverImage: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    galleryImages: [
      '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
      '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
    ],
    overview:
      'Fifty4 Safaris’ premier flagship journey unites Africa’s two most transformative wildlife experiences: an awe-inspiring trek through Bwindi Impenetrable Forest to stand mere meters from wild mountain gorillas, followed by savannah game drives tracking tree-climbing lions in Queen Elizabeth National Park. Curated with private 4x4 Land Cruisers, expert Uganda Wildlife Authority rangers, and eco-luxury forest lodges.',
    highlights: [
      'Guaranteed official UWA Mountain Gorilla tracking permit in Bwindi Impenetrable Forest',
      'Track tree-climbing lions in the remote Ishasha sector of Queen Elizabeth National Park',
      'Chimpanzee tracking among 1,500 wild primates in Kibale Forest National Park',
      'Exclusive sunset boat safari on the Kazinga Channel with world-record hippo concentrations',
      'Walking bush safari alongside zebras and elands in Lake Mburo National Park',
      'Luxury eco-lodges perched along volcanic ridges and misty rainforest canopies'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Entebbe & Lake Victoria Welcome',
        location: 'Entebbe, Uganda',
        description:
          'Upon landing at Entebbe International Airport (EBB), your Fifty4 Safaris private concierge greets you inside the arrivals lounge with VIP airport assistance. Enjoy a comfortable private transfer to your boutique lodge overlooking Lake Victoria. Relax after your flight with a welcome dinner and comprehensive safari orientation from your lead naturalist guide.',
        accommodation: 'Hotel No.5 / The Boma Entebbe',
        mealPlan: 'Dinner included',
        highlights: ['VIP airport meet & greet', 'Lake Victoria sunset view', 'Comprehensive expedition briefing']
      },
      {
        day: 2,
        title: 'Journey to Kibale Primate Capital via Fort Portal',
        location: 'Kibale National Park',
        description:
          'Depart west toward the lush green hills of western Uganda. Pass picturesque tea plantations and the majestic Rwenzori Mountains (Mountains of the Moon). Arrive in Fort Portal for a farm-to-table lunch before continuing to your eco-lodge nestled at the boundary of Kibale National Park.',
        accommodation: 'Kyaninga Lodge / Ndali Crater Lodge',
        mealPlan: 'Full Board (Breakfast, Lunch, Dinner)',
        highlights: ['Scenic Fort Portal crater lakes route', 'Tea estate panoramic drive', 'Luxury crater rim lodge stay']
      },
      {
        day: 3,
        title: 'Chimpanzee Tracking & Transfer to Queen Elizabeth NP',
        location: 'Kibale & Queen Elizabeth National Park',
        description:
          'Early morning departure into Kibale Forest with UWA trackers to locate habituated chimpanzee troops. Experience the adrenaline of observing our closest relatives swinging through the high canopy and vocalizing across the forest floor. In the afternoon, transfer to Queen Elizabeth National Park, crossing the Equator line.',
        accommodation: 'Kyambura Gorge Lodge / Elephant Plains Lodge',
        mealPlan: 'Full Board',
        highlights: ['Wild chimpanzee tracking in pristine forest', 'Equator photo opportunity', 'Great Rift Valley escarpment sunset']
      },
      {
        day: 4,
        title: 'Kasenyi Plains Game Drive & Kazinga Channel Boat Cruise',
        location: 'Queen Elizabeth National Park',
        description:
          'Dawn game drive across the Kasenyi savannah plains searching for leopards, Uganda kobs, cape buffalos, and savannah elephants. In the afternoon, embark on a private 2-hour boat cruise along the natural Kazinga Channel connecting Lake George and Lake Edward, witnessing elephants bathing and hundreds of hippos.',
        accommodation: 'Kyambura Gorge Lodge / Elephant Plains Lodge',
        mealPlan: 'Full Board',
        highlights: ['Big game savannah safari', 'Kazinga Channel hippo and bird cruise', 'Lions hunting Uganda kob']
      },
      {
        day: 5,
        title: 'Tree-Climbing Lions of Ishasha & Ascent to Bwindi',
        location: 'Ishasha Sector to Bwindi Impenetrable Forest',
        description:
          'Travel south through the wild Ishasha sector, world-renowned for its rare population of tree-climbing lions resting in massive fig trees. In the afternoon, ascend into the dramatic mist-shrouded peaks of Bwindi Impenetrable National Park, a UNESCO World Heritage biodiversity sanctuary.',
        accommodation: 'Sanctuary Gorilla Forest Camp / Clouds Mountain Gorilla Lodge',
        mealPlan: 'Full Board',
        highlights: ['Tree-climbing lions search', 'Dramatic ascent into misty Bwindi', 'Warm fireplace hospitality']
      },
      {
        day: 6,
        title: 'The Pinnacle Encounter: Mountain Gorilla Tracking',
        location: 'Bwindi Impenetrable National Park',
        description:
          'After an early breakfast and briefing by the chief park ranger, step into the ancient rainforest with tracking guides. Follow fresh gorilla nests and knuckle prints through dense vegetation until coming face-to-face with a gentle silverback and his family. Spend one unforgettable hour observing their grooming, feeding, and tender interactions. Receive your official UWA Gorilla Tracking Certificate.',
        accommodation: 'Sanctuary Gorilla Forest Camp / Clouds Mountain Gorilla Lodge',
        mealPlan: 'Full Board',
        highlights: ['One unforgettable hour with wild Mountain Gorillas', 'Official UWA tracking certificate', 'Celebratory evening banquet']
      },
      {
        day: 7,
        title: 'Bwindi to Lake Mburo — Walking Bush Safari',
        location: 'Lake Mburo National Park',
        description:
          'Wind through the rolling terraced hills of Kigezi ("The Switzerland of Africa") to Lake Mburo National Park. Enjoy an afternoon guided walking safari with an armed ranger, getting close on foot to Burchell’s zebras, topis, impalas, and giraffes without vehicle engine noise.',
        accommodation: 'Mihingo Lodge / Kigambira Safari Lodge',
        mealPlan: 'Full Board',
        highlights: ['Walking safari on foot with wildlife', 'High-density zebra herds', 'Infinity pool carved into granite rock']
      },
      {
        day: 8,
        title: 'Morning Bush Drive, Equator Ceremony & Entebbe Departure',
        location: 'Lake Mburo to Entebbe International Airport',
        description:
          'Enjoy a final sunrise safari drive in Lake Mburo before returning toward Entebbe. Stop at the famous Kayabwe Equator monument for the water Coriolis experiment and souvenir artisan shopping. Arrive in Entebbe with day-room access to freshen up before your international evening flight.',
        accommodation: 'Day room at Karibu Guesthouse Entebbe',
        mealPlan: 'Breakfast & Lunch included',
        highlights: ['Sunrise wildlife safari', 'Equator scientific demonstration', 'VIP day-room & airport transfer']
      }
    ],
    inclusions: [
      '1 Guaranteed Mountain Gorilla Tracking Permit per person (UWA certified, $800 value)',
      '1 Chimpanzee Tracking Permit per person in Kibale Forest ($250 value)',
      'All National Park entry fees, ranger guide fees, and vehicle conservation fees',
      'Private 4x4 custom Safari Land Cruiser with pop-up roof, cooler box & window seating',
      '7 nights luxury full-board accommodation plus day-room on final departure day',
      'Services of an English-speaking Fifty4 senior wildlife naturalist driver-guide',
      'Exclusive Kazinga Channel boat safari cruise',
      'AMREF Flying Doctors 24/7 emergency medical evacuation cover',
      'Unlimited complimentary mineral water and refreshments in the safari vehicle',
      '5% Fifty4 Community Conservation Contribution supporting local Bwindi ranger families'
    ],
    exclusions: [
      'International flights to and from Entebbe (EBB)',
      'Uganda entry visa ($50 applied online prior to travel)',
      'Porter gratuity during gorilla trek (recommended $15-$20 per trek)',
      'Driver-guide and lodge staff gratuities (discretionary)',
      'Personal travel, medical, and baggage insurance',
      'Premium cellar wines and top-shelf spirits (house beverages included)'
    ],
    accommodations: [
      {
        name: 'Sanctuary Gorilla Forest Camp',
        tier: 'Ultra-Luxury Eco-Lodge',
        location: 'Bwindi Impenetrable National Park',
        note: 'Located directly inside the park gates; gorillas frequently roam through the lodge grounds.'
      },
      {
        name: 'Kyambura Gorge Lodge',
        tier: 'Luxury Eco-Chic',
        location: 'Queen Elizabeth National Park',
        note: 'Overlooking sunken primate gorge and savannah plains with personalized butler service.'
      },
      {
        name: 'Kyaninga Lodge',
        tier: 'Luxury Timber Chalet',
        location: 'Fort Portal / Kibale',
        note: 'Hand-crafted log chalets perched 200 meters above an ancient volcanic crater lake.'
      },
      {
        name: 'Mihingo Lodge',
        tier: 'Exclusive Tented Lodge',
        location: 'Lake Mburo National Park',
        note: 'Built atop a granite outcrop with 360-degree views and an open-air infinity pool.'
      }
    ],
    physicalDemand: 'Moderate',
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January', 'February'],
    departureType: 'Guaranteed Weekly'
  },
  {
    id: 'great-migration-serengeti-mara',
    title: 'The Great Migration & Serengeti Wonders',
    subtitle: '10-Day Iconic Wildlife Drama Across Tanzania & Kenya',
    destinations: ['Tanzania', 'Kenya'],
    primaryDestination: 'Tanzania',
    durationDays: 10,
    durationNights: 9,
    category: 'Great Migration Journeys',
    travelStyle: 'Wildlife Safaris',
    priceUSD: 7290,
    priceNote: 'Per person sharing, includes internal bush flights and Serengeti conservation fees',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
    galleryImages: [
      '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
      '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
    ],
    overview:
      'Witness the greatest wildlife spectacle on Earth: over 1.5 million wildebeest and zebras braving crocodile-laden Mara and Grumeti rivers in a perpetual circle of life. This 10-day expedition pairs the endless plains of the Serengeti with Ngorongoro Crater and Kenya’s famed Masai Mara reserve.',
    highlights: [
      'Front-row viewing of the legendary Great Migration river crossings',
      'Descent into the UNESCO Ngorongoro Crater floor with dense black rhinos and predators',
      'Fly-in safari sectors maximizing game viewing time and avoiding bumpy road transfers',
      'Authentic Maasai cultural homestead immersion with tribal elders',
      'Night game drives searching for elusive nocturnal predators in private conservancies'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha Welcome & Kilimanjaro Foothills',
        location: 'Arusha, Tanzania',
        description: 'Arrive at Kilimanjaro International Airport. VIP transfer to a peaceful coffee plantation estate in Arusha.',
        accommodation: 'Arusha Coffee Lodge',
        mealPlan: 'Dinner',
        highlights: ['Private airport transfer', 'Coffee plantation stroll']
      },
      {
        day: 2,
        title: 'Tarangire National Park — Land of Giants',
        location: 'Tarangire, Tanzania',
        description: 'Morning drive to Tarangire, famous for thousand-strong elephant herds and ancient baobab silhouettes.',
        accommodation: 'Tarangire Treetops Lodge',
        mealPlan: 'Full Board',
        highlights: ['Massive elephant families', 'Ancient baobab tree valleys']
      },
      {
        day: 3,
        title: 'Ngorongoro Crater Floor Safari',
        location: 'Ngorongoro Conservation Area',
        description: 'Descend 600 meters into the world’s largest intact caldera hosting 25,000 large mammals including endangered black rhinos.',
        accommodation: 'Ngorongoro Crater Lodge',
        mealPlan: 'Full Board',
        highlights: ['Caldera floor Big Five safari', 'Flamingo flocks on Lake Magadi']
      },
      {
        day: 4,
        title: 'Flight to Northern Serengeti & River Crossing Watch',
        location: 'Serengeti National Park',
        description: 'Board a scenic bush flight into the northern Serengeti near the Mara River to intercept the migrating mega-herds.',
        accommodation: 'Sayari Camp / Serengeti Under Canvas',
        mealPlan: 'Full Board',
        highlights: ['Scenic bush flight', 'Mara River predator surveillance']
      },
      {
        day: 5,
        title: 'Full Day Serengeti Migration Safari',
        location: 'Serengeti National Park',
        description: 'Full day with packed bush lunch tracking lion prides, cheetahs on termite mounds, and heart-stopping river crossings.',
        accommodation: 'Sayari Camp',
        mealPlan: 'Full Board',
        highlights: ['Wildebeest river crossings', 'Cheetah chase on the open plains']
      },
      {
        day: 6,
        title: 'Cross Border to Masai Mara Reserve',
        location: 'Masai Mara, Kenya',
        description: 'Aviation hop across the border into Kenya’s Masai Mara National Reserve. Afternoon golden-hour game drive.',
        accommodation: 'Angama Mara / Governors’ Camp',
        mealPlan: 'Full Board',
        highlights: ['Great Rift Valley rim views', 'Evening lion tracking']
      },
      {
        day: 7,
        title: 'Masai Mara Hot Air Balloon & Bush Champagne Breakfast',
        location: 'Masai Mara, Kenya',
        description: 'Float peacefully above the savannah at dawn in a hot air balloon, followed by a champagne breakfast under an acacia tree.',
        accommodation: 'Angama Mara',
        mealPlan: 'Full Board',
        highlights: ['Sunrise hot air balloon flight', 'Wild bush champagne breakfast']
      },
      {
        day: 8,
        title: 'Mara North Conservancy Safari & Maasai Community',
        location: 'Mara North Conservancy',
        description: 'Private conservancy exploration with off-road tracking privileges and visit to a sustainable community village.',
        accommodation: 'Elephant Pepper Camp',
        mealPlan: 'Full Board',
        highlights: ['Maasai warrior walking safari', 'Nocturnal spotlight game drive']
      },
      {
        day: 9,
        title: 'Big Cat Photography Expedition',
        location: 'Masai Mara, Kenya',
        description: 'Dedicated photographic safari with custom beanbag mounts focusing on leopards and lion pride dynamics.',
        accommodation: 'Elephant Pepper Camp',
        mealPlan: 'Full Board',
        highlights: ['Leopard tracking in riverine thickets', 'Photographic safari vehicle setup']
      },
      {
        day: 10,
        title: 'Nairobi Scenic Flight & Evening Departure',
        location: 'Nairobi, Kenya',
        description: 'Morning bush flight to Nairobi Wilson Airport. Day-room at Hemingways Nairobi with farewell dinner and transfer to JKO.',
        accommodation: 'Day room at Hemingways Nairobi',
        mealPlan: 'Breakfast & Lunch',
        highlights: ['Flight over the Great Rift Valley', 'Farewell dinner']
      }
    ],
    inclusions: [
      'All internal charter bush flights (Arusha - Serengeti - Mara - Nairobi)',
      'All national park & conservancy entry fees',
      'Luxury tented camp accommodation with butler service',
      'Private 4x4 open safari vehicle with expert guide',
      'Hot air balloon safari with champagne breakfast',
      'AMREF Flying Doctors emergency medical evacuation cover'
    ],
    exclusions: [
      'International flights to JRO / from NBO',
      'East Africa Tourist Visa',
      'Premium spirits and cellar wines',
      'Discretionary guide gratuities'
    ],
    accommodations: [
      { name: 'Sayari Camp', tier: 'Luxury Tented', location: 'Northern Serengeti', note: 'Closest luxury camp to Mara River crossing points.' },
      { name: 'Angama Mara', tier: 'Ultra-Luxury', location: 'Masai Mara', note: 'Suspended high on the Oloololo Escarpment overlooking the entire Mara.' },
      { name: 'Ngorongoro Crater Lodge', tier: 'Luxury Baroque', location: 'Ngorongoro', note: 'Opulent architecture on the rim of the ancient volcanic crater.' }
    ],
    physicalDemand: 'Easy',
    bestMonths: ['July', 'August', 'September', 'October'],
    departureType: 'Seasonal Small Group'
  },
  {
    id: 'rwanda-primates-volcanoes',
    title: 'Rwanda Primates & Volcanoes Sanctuary',
    subtitle: '6-Day Luxury Gorilla & Golden Monkey Tracking in the Virungas',
    destinations: ['Rwanda'],
    primaryDestination: 'Rwanda',
    durationDays: 6,
    durationNights: 5,
    category: 'Gorilla and Primate Experiences',
    travelStyle: 'Luxury Safari Experiences',
    priceUSD: 6850,
    priceNote: 'Per person sharing, includes $1,500 Rwanda Gorilla Tracking Permit',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    galleryImages: [
      '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
    ],
    overview:
      'Immerse yourself in Rwanda’s dramatic volcanic landscape. Track mountain gorillas in Volcanoes National Park under the shadow of dramatic peaks, encounter endangered golden monkeys in bamboo forests, and discover Kigali’s inspiring renaissance with curated cultural experiences.',
    highlights: [
      'Official Rwanda Mountain Gorilla Permit in Volcanoes National Park ($1,500 value)',
      'Golden monkey tracking in high-altitude bamboo groves',
      'Private guided tour of Kigali Genocide Memorial and modern art scene',
      'Helicopter or luxury private 4x4 transfers through rolling green hills',
      'Stay at world-class mountain sanctuaries with private fireplaces and in-room spa treatments'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kigali & City Cultural Tour',
        location: 'Kigali, Rwanda',
        description: 'Arrival at Kigali International Airport. Afternoon visit to the Genocide Memorial and contemporary art galleries.',
        accommodation: 'The Retreat by Heaven / Kigali Serena',
        mealPlan: 'Dinner',
        highlights: ['VIP airport arrival', 'Kigali historic & modern renaissance tour']
      },
      {
        day: 2,
        title: 'Scenic Drive to Volcanoes National Park',
        location: 'Musanze, Volcanoes NP',
        description: 'Journey through the "Land of a Thousand Hills" to the base of the Virunga volcanoes.',
        accommodation: 'Singita Kwitonda Lodge / Bisate Lodge',
        mealPlan: 'Full Board',
        highlights: ['Spectacular mountain views', 'Private lodge villa welcome']
      },
      {
        day: 3,
        title: 'Rwanda Mountain Gorilla Tracking',
        location: 'Volcanoes National Park',
        description: 'Early morning ranger briefing followed by a trek through lush bamboo slopes to meet a habituated gorilla family.',
        accommodation: 'Singita Kwitonda Lodge / Bisate Lodge',
        mealPlan: 'Full Board',
        highlights: ['Face-to-face with wild Virunga Mountain Gorillas', 'Private fireplace massage']
      },
      {
        day: 4,
        title: 'Endangered Golden Monkey Tracking',
        location: 'Volcanoes National Park',
        description: 'Trek into the bamboo zone to observe hyperactive golden monkeys leaping between stalks and foraging.',
        accommodation: 'Singita Kwitonda Lodge / Bisate Lodge',
        mealPlan: 'Full Board',
        highlights: ['Golden monkey troop photography', 'Ellen DeGeneres Gorilla Campus visit']
      },
      {
        day: 5,
        title: 'Dian Fossey Conservation Heritage Walk',
        location: 'Karisoke Research Center',
        description: 'Hike to the historic Karisoke research base nestled between Mount Karisimbi and Mount Bisoke.',
        accommodation: 'Singita Kwitonda Lodge',
        mealPlan: 'Full Board',
        highlights: ['Trek to Dian Fossey historic grave and research station', 'Local community cooperative visit']
      },
      {
        day: 6,
        title: 'Return to Kigali & Evening Departure',
        location: 'Kigali, Rwanda',
        description: 'Leisurely breakfast before returning to Kigali for boutique shopping and transfer to the airport.',
        accommodation: 'Departure day',
        mealPlan: 'Breakfast & Lunch',
        highlights: ['Kimironko artisan market', 'Airport VIP lounge transfer']
      }
    ],
    inclusions: [
      '1 Official Rwanda Gorilla Tracking Permit ($1,500 value)',
      '1 Golden Monkey Tracking Permit ($100 value)',
      'Luxury villa accommodation at Singita or Bisate',
      'Private 4WD luxury vehicle with senior chauffeur-guide',
      'All meals, select French wines, and in-lodge laundry services'
    ],
    exclusions: ['International airfare', 'Rwanda Visa fees', 'Discretionary tips'],
    accommodations: [
      { name: 'Singita Kwitonda Lodge', tier: 'Ultra-Luxury Eco-Lodge', location: 'Volcanoes NP', note: 'Set right on the edge of Volcanoes National Park with private heated plunge pools.' }
    ],
    physicalDemand: 'Moderate',
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January', 'February'],
    departureType: 'Private Customized'
  },
  {
    id: 'murchison-falls-nile-expedition',
    title: 'Murchison Falls & Source of the Nile Expedition',
    subtitle: '5-Day Big Game Safari, Roaring Nile Cataracts & Chimps',
    destinations: ['Uganda'],
    primaryDestination: 'Uganda',
    durationDays: 5,
    durationNights: 4,
    category: 'Wildlife Safaris',
    travelStyle: 'Adventure and Nature',
    priceUSD: 2890,
    priceNote: 'Per person sharing, includes boat safaris and chimp permit in Budongo',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
    galleryImages: [
      '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
      '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    ],
    overview:
      'Experience Uganda’s largest and oldest national park. Feel the ground tremble as the mighty Victoria Nile funnels violently through a 7-meter gorge before plunging 43 meters into the "Devil’s Cauldron". Track the Big Five, cruise past Nile crocodiles, and spot rare Shoebill storks.',
    highlights: [
      'Stand at the top of dramatic Murchison Falls where the entire Nile bursts through a narrow rock crevice',
      'Private boat cruise to the base of the falls with huge pods of hippos and Nile crocodiles',
      'Game drives on the northern savannah plains for Rothschild giraffes, lions, and leopards',
      'On-foot rhino tracking at Ziwa Rhino Sanctuary (Uganda’s only wild white rhinos)',
      'Chimpanzee tracking in ancient mahogany forests of Budongo Central Reserve'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe to Ziwa Rhino Sanctuary & Murchison Falls',
        location: 'Nakasongola & Murchison Falls',
        description: 'Depart Entebbe northwards. Track southern white rhinos on foot at Ziwa Sanctuary before continuing into Murchison Falls National Park.',
        accommodation: 'Nile Safari Lodge / Paraa Safari Lodge',
        mealPlan: 'Lunch & Dinner',
        highlights: ['White rhino tracking on foot', 'Sunset over the River Nile']
      },
      {
        day: 2,
        title: 'Delta Game Drive & Boat to the Falls Base',
        location: 'Murchison Falls National Park',
        description: 'Early morning game drive in search of lions, hyenas, elephants, and Jackson’s hartebeests. Afternoon boat safari to the thunderous falls.',
        accommodation: 'Nile Safari Lodge',
        mealPlan: 'Full Board',
        highlights: ['Rothschild giraffe herds', 'Cruising to the bottom of Murchison Falls']
      },
      {
        day: 3,
        title: 'Top of the Falls Hike & Albert Delta Shoebill Cruise',
        location: 'Murchison Falls National Park',
        description: 'Hike to the roaring cliff edge where the Nile compresses. Afternoon serene boat cruise down to Lake Albert delta searching for prehistoric Shoebill storks.',
        accommodation: 'Nile Safari Lodge',
        mealPlan: 'Full Board',
        highlights: ['Top of the Falls thunderous viewpoint', 'Shoebill stork search in papyrus wetlands']
      },
      {
        day: 4,
        title: 'Budongo Forest Chimpanzee Tracking',
        location: 'Budongo Forest Reserve',
        description: 'Track wild chimpanzees under the dense canopy of East Africa’s largest mahogany forest.',
        accommodation: 'Nile Safari Lodge',
        mealPlan: 'Full Board',
        highlights: ['Budongo chimpanzee tracking', 'Ancient towering mahogany trees']
      },
      {
        day: 5,
        title: 'Scenic Return to Entebbe / Kampala',
        location: 'Entebbe, Uganda',
        description: 'Leisurely breakfast overlooking the Nile before driving back to Kampala or Entebbe for evening departures.',
        accommodation: 'Departure day',
        mealPlan: 'Breakfast & Lunch',
        highlights: ['Fresh fruit stops in Masindi', 'Return to Entebbe']
      }
    ],
    inclusions: [
      'All park entrance fees and river ferry crossings',
      'Ziwa Rhino Sanctuary tracking on foot',
      'Boat cruise to the base of Murchison Falls & Delta boat tour',
      'Private 4x4 Land Cruiser with professional driver-guide',
      'Budongo Forest Chimpanzee tracking permit'
    ],
    exclusions: ['International flights', 'Uganda tourist visa', 'Staff tips'],
    accommodations: [
      { name: 'Nile Safari Lodge', tier: 'Luxury Eco-Lodge', location: 'River Nile bank', note: 'Wooden chalets right on the edge of the rushing Victoria Nile.' }
    ],
    physicalDemand: 'Easy',
    bestMonths: ['December', 'January', 'February', 'June', 'July', 'August', 'September'],
    departureType: 'Guaranteed Weekly'
  },
  {
    id: 'zambia-south-luangwa-victoria-falls',
    title: 'Zambia Wild Luangwa & Victoria Falls',
    subtitle: '9-Day Walking Safari Pioneer & The Smoke That Thunders',
    destinations: ['Zambia'],
    primaryDestination: 'Zambia',
    durationDays: 9,
    durationNights: 8,
    category: 'Wildlife Safaris',
    travelStyle: 'Adventure and Nature',
    priceUSD: 6150,
    priceNote: 'Per person sharing, includes domestic bush flights and Victoria Falls excursions',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
    galleryImages: [
      '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    ],
    overview:
      'Immerse yourself in raw, untamed wilderness where the African walking safari was born. Walk among elephants and wild dogs in South Luangwa before flying to Livingstone to witness the sheer power of Victoria Falls (Mosi-oa-Tunya).',
    highlights: [
      'World-famous guided walking safaris with legendary Zambian professional guides',
      'High leopard population density with thrilling nocturnal spotlight safaris',
      'Helicopter flight over Victoria Falls ("Flight of Angels")',
      'Sunset luxury boat cruise along the Zambezi River with open bar',
      'Authentic luxury bush camps immersed in wild riverbank ecosystems'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lusaka to South Luangwa National Park',
        location: 'South Luangwa, Zambia',
        description: 'Flight from Lusaka to Mfuwe Airport. Welcome to South Luangwa and evening game drive.',
        accommodation: 'Chinzombo / Time + Tide Mchenja',
        mealPlan: 'Dinner',
        highlights: ['Bush flight into the Luangwa valley', 'Night predator safari']
      },
      {
        day: 2,
        title: 'Pioneering Walking Safari in South Luangwa',
        location: 'South Luangwa, Zambia',
        description: 'Step into the wilderness on foot with armed wildlife scout and senior guide, learning bush lore and tracking animal footprints.',
        accommodation: 'Time + Tide Mchenja',
        mealPlan: 'Full Board',
        highlights: ['Guided walking safari', 'Hippo pods in oxbow lagoons']
      },
      {
        day: 3,
        title: 'Deep Luangwa Wildlife & Leopard Tracking',
        location: 'South Luangwa, Zambia',
        description: 'Open 4x4 drives tracking leopards, Thornicroft’s giraffes, and wild dog packs.',
        accommodation: 'Time + Tide Mchenja',
        mealPlan: 'Full Board',
        highlights: ['Leopard sightings after dusk', 'Endemic Thornicroft giraffe']
      },
      {
        day: 4,
        title: 'Remote Bush Camp Wilderness Experience',
        location: 'South Luangwa, Zambia',
        description: 'Transfer to a seasonal fly-camp in the deep wilderness. Dine under the African stars with a crackling campfire.',
        accommodation: 'Time + Tide Kakuli',
        mealPlan: 'Full Board',
        highlights: ['Candlelight bush dinner', 'Stargazing in pristine skies']
      },
      {
        day: 5,
        title: 'Flight to Livingstone & Victoria Falls',
        location: 'Livingstone, Zambia',
        description: 'Bush flight to Livingstone. Check in to luxury lodge perched on the Zambezi River above the falls.',
        accommodation: 'Royal Chundu / Tongabezi Lodge',
        mealPlan: 'Full Board',
        highlights: ['Zambezi River private deck', 'Sundowner cruise']
      },
      {
        day: 6,
        title: 'Victoria Falls Guided Walking Tour',
        location: 'Mosi-oa-Tunya National Park',
        description: 'Walk the rainforest trails along the abyss of Victoria Falls, engulfed in rainbow mists.',
        accommodation: 'Royal Chundu / Tongabezi Lodge',
        mealPlan: 'Full Board',
        highlights: ['Victoria Falls rainforest spray', 'Knife-edge bridge walk']
      },
      {
        day: 7,
        title: 'Flight of Angels Helicopter & Devil’s Pool Swim',
        location: 'Livingstone, Zambia',
        description: 'Scenic helicopter flight over the gorge, followed by seasonal swim in Devil’s Pool on the precipice of the waterfall.',
        accommodation: 'Royal Chundu',
        mealPlan: 'Full Board',
        highlights: ['Helicopter flight over Victoria Falls', 'Devil’s Pool natural infinity swim']
      },
      {
        day: 8,
        title: 'Livingstone Rhino Walk & Zambezi Sunset',
        location: 'Mosi-oa-Tunya National Park',
        description: 'Tracking white rhinos on foot followed by a luxury sunset cruise on the upper Zambezi.',
        accommodation: 'Royal Chundu',
        mealPlan: 'Full Board',
        highlights: ['Rhino tracking on foot', 'Farewell riverside banquet']
      },
      {
        day: 9,
        title: 'Departure via Livingstone Airport',
        location: 'Livingstone, Zambia',
        description: 'Private airport transfer to Livingstone (LVI) for your onward flight.',
        accommodation: 'Departure day',
        mealPlan: 'Breakfast included',
        highlights: ['Final Zambezi sunrise', 'Airport transfer']
      }
    ],
    inclusions: [
      'Internal domestic flights in Zambia',
      'All South Luangwa park entry and conservation fees',
      'Guided walking safaris and game drives',
      'Victoria Falls park fees & Zambezi sunset river cruise',
      'Helicopter flight of angels over Victoria Falls'
    ],
    exclusions: ['International flights', 'Zambia entry visa', 'Personal gratuities'],
    accommodations: [
      { name: 'Royal Chundu', tier: 'Relais & Châteaux Luxury', location: 'Zambezi River', note: 'Zambia’s only Relais & Châteaux property on private river frontage.' }
    ],
    physicalDemand: 'Moderate',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    departureType: 'Private Customized'
  },
  {
    id: 'uganda-gorillas-zanzibar-coast',
    title: 'Uganda Gorillas & Zanzibar Turquoise Coast',
    subtitle: '11-Day Bush and Beach: Primate Rainforest & Indian Ocean Luxury',
    destinations: ['Uganda', 'Tanzania'],
    primaryDestination: 'Uganda',
    durationDays: 11,
    durationNights: 10,
    category: 'Beach and Safari Combinations',
    travelStyle: 'Honeymoons and Romantic Escapes',
    priceUSD: 6980,
    priceNote: 'Per person sharing, includes Gorilla permit, domestic flights, and Zanzibar private villa',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    galleryImages: [
      '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
    ],
    overview:
      'The definitive romantic African escape: spend 5 days in Uganda’s mist-shrouded rainforest tracking mountain gorillas and tree-climbing lions, then catch a flight to the spice island of Zanzibar for 5 blissful nights in a private beachfront villa surrounded by turquoise waters.',
    highlights: [
      'Mountain Gorilla tracking permit in Bwindi Impenetrable Forest',
      'Chimpanzee tracking in Kibale Forest and Queen Elizabeth boat cruise',
      'Direct flight connection from Entebbe to Zanzibar Spice Island',
      'Private oceanfront villa with private plunge pool and dhow sunset cruise',
      'Private guided walking tour of UNESCO Stone Town and fragrant spice plantations'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Entebbe & Lake Victoria Romance',
        location: 'Entebbe, Uganda',
        description: 'Arrive in Entebbe. Private transfer to a lakeside retreat with chilled champagne and safari overview.',
        accommodation: 'The Boma Entebbe',
        mealPlan: 'Dinner',
        highlights: ['Romantic arrival welcome', 'Lake Victoria breeze']
      },
      {
        day: 2,
        title: 'Flight to Kihihi & Ascent to Bwindi Forest',
        location: 'Bwindi Impenetrable Forest',
        description: 'Morning scenic domestic flight from Entebbe to Kihihi airstrip, then scenic drive to your luxury forest sanctuary.',
        accommodation: 'Clouds Mountain Gorilla Lodge',
        mealPlan: 'Full Board',
        highlights: ['Scenic internal flight', 'Private butler service in Bwindi']
      },
      {
        day: 3,
        title: 'The Great Mountain Gorilla Trek',
        location: 'Bwindi Impenetrable Forest',
        description: 'Trek into the lush ancient rainforest with master trackers to spend one magical hour with a wild gorilla family.',
        accommodation: 'Clouds Mountain Gorilla Lodge',
        mealPlan: 'Full Board',
        highlights: ['Life-changing gorilla encounter', 'Evening couple’s fireside massage']
      },
      {
        day: 4,
        title: 'Queen Elizabeth Savannah & Tree-Climbing Lions',
        location: 'Ishasha & Kazinga Channel',
        description: 'Drive down into Queen Elizabeth National Park to see tree-climbing lions and cruise the Kazinga Channel.',
        accommodation: 'Kyambura Gorge Lodge',
        mealPlan: 'Full Board',
        highlights: ['Tree-climbing lions', 'Sunset wildlife boat safari']
      },
      {
        day: 5,
        title: 'Fly to Entebbe & Connect to Zanzibar',
        location: 'Entebbe to Zanzibar',
        description: 'Morning flight back to Entebbe, seamlessly connecting to your direct flight to the spice island of Zanzibar.',
        accommodation: 'Baraza Resort & Spa Zanzibar / Kilindi',
        mealPlan: 'Dinner & Cocktails',
        highlights: ['Touchdown in paradise', 'Indian Ocean warm breeze']
      },
      {
        day: 6,
        title: 'Zanzibar Beach Bliss & Traditional Dhow Sunset',
        location: 'Bwejuu-Paje Beach, Zanzibar',
        description: 'Spend the day relaxing on powdery white sand beaches. Board a handcrafted wooden dhow for a sunset sail.',
        accommodation: 'Baraza Resort & Spa Zanzibar',
        mealPlan: 'All-Inclusive',
        highlights: ['Powder-white private sand beach', 'Traditional wooden dhow cruise']
      },
      {
        day: 7,
        title: 'Stone Town Cultural Walk & Spice Farm Immersion',
        location: 'Stone Town, Zanzibar',
        description: 'Wander through the labyrinthine alleyways of UNESCO Stone Town, historic sultan palaces, and organic spice plantations.',
        accommodation: 'Baraza Resort & Spa Zanzibar',
        mealPlan: 'All-Inclusive',
        highlights: ['Stone Town carved doors and history', 'Vanilla, clove, and nutmeg farm tour']
      },
      {
        day: 8,
        title: 'Mnemba Atoll Snorkeling & Dolphin Safari',
        location: 'Mnemba Island Reef',
        description: 'Private catamaran excursion to the protected coral gardens of Mnemba Atoll with sea turtles and tropical fish.',
        accommodation: 'Baraza Resort & Spa Zanzibar',
        mealPlan: 'All-Inclusive',
        highlights: ['Pristine coral reef snorkeling', 'Pod of wild spinner dolphins']
      },
      {
        day: 9,
        title: 'Private Sandbank Picnic in the Indian Ocean',
        location: 'Zanzibar Sandbanks',
        description: 'A private boat whisks you to a vanishing tidal sandbank in the ocean for a fresh seafood feast and solitude.',
        accommodation: 'Baraza Resort & Spa Zanzibar',
        mealPlan: 'All-Inclusive',
        highlights: ['Isolated sandbank paradise feast', 'Total tropical seclusion']
      },
      {
        day: 10,
        title: 'Spa Indulgence & Candlelight Ocean Dinner',
        location: 'Zanzibar Coast',
        description: 'Indulge in traditional Swahili spice massage treatments followed by a private table on the beach under the stars.',
        accommodation: 'Baraza Resort & Spa Zanzibar',
        mealPlan: 'All-Inclusive',
        highlights: ['Swahili botanical spa ritual', 'Private romantic beach dinner']
      },
      {
        day: 11,
        title: 'Farewell East Africa & Departure',
        location: 'Zanzibar International Airport (ZNZ)',
        description: 'Final breakfast overlooking the turquoise lagoon before transfer to Zanzibar International Airport for homeward flights.',
        accommodation: 'Departure day',
        mealPlan: 'Breakfast',
        highlights: ['Last dip in the Indian Ocean', 'Private airport transfer']
      }
    ],
    inclusions: [
      '1 Official Uganda Gorilla Tracking Permit ($800 value)',
      'Internal flights: Entebbe to Bwindi airstrip, and Entebbe to Zanzibar',
      'All ground transportation in Uganda and Zanzibar',
      'All luxury accommodations and meal plans as outlined',
      'Private dhow sunset cruise and Stone Town heritage excursion'
    ],
    exclusions: ['International long-haul flights', 'Tourist visas', 'Gratuities'],
    accommodations: [
      { name: 'Clouds Mountain Gorilla Lodge', tier: 'Ultra-Luxury Lodge', location: 'Bwindi', note: 'Highest lodge in Uganda with awe-inspiring volcanic views.' },
      { name: 'Baraza Resort & Spa', tier: '5-Star Luxury Villa', location: 'Zanzibar East Coast', note: 'Award-winning Swahili and Arabic architectural palace right on the sand.' }
    ],
    physicalDemand: 'Moderate',
    bestMonths: ['June', 'July', 'August', 'September', 'December', 'January', 'February'],
    departureType: 'Private Customized'
  },
  {
    id: 'grand-east-africa-circuit',
    title: 'Grand East African Odyssey: 14-Day Circuit',
    subtitle: '14-Day Journey Connecting Uganda Gorillas, Masai Mara & Serengeti',
    destinations: ['Uganda', 'Rwanda', 'Kenya', 'Tanzania'],
    primaryDestination: 'Multi-Country African Journeys',
    durationDays: 14,
    durationNights: 13,
    category: 'Multi-Country African Journeys',
    travelStyle: 'Luxury Safari Experiences',
    priceUSD: 11800,
    priceNote: 'Per person sharing, includes gorilla permit, private aviation hops & all conservation fees',
    isVerifiedPrice: true,
    coverImage: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
    galleryImages: [
      '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
      '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
      '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
    ],
    overview:
      'The ultimate East African grand tour for travelers who want it all. Uniting mountain gorilla encounters in Uganda, chimpanzees in Kibale, the big cat drama of Kenya’s Masai Mara, and the endless plains and caldera wonders of Tanzania’s Serengeti and Ngorongoro.',
    highlights: [
      'Four iconic countries seamlessly coordinated by Fifty4 ground teams',
      'Uganda mountain gorilla and chimpanzee tracking permits included',
      'Kenya Masai Mara open-plains predator game viewing',
      'Tanzania Serengeti and Ngorongoro Crater Big Five safari',
      'Private air charters connecting remote airstrips without long road fatigue'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Entebbe, Uganda', location: 'Entebbe', description: 'VIP meet and transfer to Lake Victoria hotel.', accommodation: 'Hotel No.5', mealPlan: 'Dinner', highlights: ['VIP welcome'] },
      { day: 2, title: 'Flight to Kibale Chimpanzees', location: 'Kibale Forest', description: 'Scenic flight to Kasese and chimpanzee habituation.', accommodation: 'Kyaninga Lodge', mealPlan: 'Full Board', highlights: ['Chimpanzee tracking'] },
      { day: 3, title: 'Queen Elizabeth Savannah & Kazinga', location: 'Queen Elizabeth NP', description: 'Kazinga channel boat cruise and Ishasha lions.', accommodation: 'Kyambura Gorge Lodge', mealPlan: 'Full Board', highlights: ['Kazinga boat safari'] },
      { day: 4, title: 'Bwindi Impenetrable Mountain Gorillas', location: 'Bwindi Forest', description: 'The pinnacle encounter with wild Mountain Gorillas.', accommodation: 'Sanctuary Gorilla Forest Camp', mealPlan: 'Full Board', highlights: ['Gorilla tracking'] },
      { day: 5, title: 'Cross Border to Kigali, Rwanda', location: 'Kigali, Rwanda', description: 'Scenic drive across Cyanika border into Rwanda.', accommodation: 'The Retreat Kigali', mealPlan: 'Full Board', highlights: ['Twin Lakes drive'] },
      { day: 6, title: 'Flight to Nairobi & Masai Mara, Kenya', location: 'Masai Mara, Kenya', description: 'Aviation transfer into the world-famous Masai Mara.', accommodation: 'Angama Mara', mealPlan: 'Full Board', highlights: ['Great Rift Valley fly-in'] },
      { day: 7, title: 'Full Day Masai Mara Safari', location: 'Masai Mara, Kenya', description: 'Tracking the famous Marsh Pride and cheetahs.', accommodation: 'Angama Mara', mealPlan: 'Full Board', highlights: ['Big Five safari'] },
      { day: 8, title: 'Hot Air Balloon over the Mara', location: 'Masai Mara, Kenya', description: 'Sunrise hot air balloon and bush champagne breakfast.', accommodation: 'Angama Mara', mealPlan: 'Full Board', highlights: ['Hot air ballooning'] },
      { day: 9, title: 'Fly Across Border to Serengeti, Tanzania', location: 'Serengeti NP', description: 'Flight into the vast plains of the Serengeti.', accommodation: 'Sayari Camp', mealPlan: 'Full Board', highlights: ['Serengeti plains'] },
      { day: 10, title: 'Serengeti Big Cats & Migration', location: 'Serengeti NP', description: 'Full day observing predator and prey interactions.', accommodation: 'Sayari Camp', mealPlan: 'Full Board', highlights: ['Lions and leopards'] },
      { day: 11, title: 'Drive to Ngorongoro Conservation Area', location: 'Ngorongoro Rim', description: 'Scenic transit with Olduvai Gorge anthropological stop.', accommodation: 'Ngorongoro Crater Lodge', mealPlan: 'Full Board', highlights: ['Olduvai Gorge'] },
      { day: 12, title: 'Ngorongoro Crater Floor Safari', location: 'Ngorongoro Crater', description: 'Descend to the crater floor for black rhino sightings.', accommodation: 'Ngorongoro Crater Lodge', mealPlan: 'Full Board', highlights: ['Black rhino tracking'] },
      { day: 13, title: 'Lake Manyara Tree-Climbing Lions & Flamingos', location: 'Lake Manyara', description: 'Alkaline lake with thousands of pink flamingos.', accommodation: 'Lake Manyara Tree Lodge', mealPlan: 'Full Board', highlights: ['Flamingo flocks'] },
      { day: 14, title: 'Fly to Kilimanjaro (JRO) & Farewell Africa', location: 'Kilimanjaro Airport', description: 'Transfer to JRO for your international flight home.', accommodation: 'Departure day', mealPlan: 'Breakfast & Lunch', highlights: ['Farewell East Africa'] }
    ],
    inclusions: [
      'All internal flights between Uganda, Kenya, and Tanzania',
      'Gorilla and Chimpanzee permits in Uganda ($1,050 value)',
      'All 4 national park & caldera permits across 3 countries',
      'Private 4x4 vehicles with senior multilingual guides',
      'All ultra-luxury lodge accommodations'
    ],
    exclusions: ['Intercontinental airfare', 'Visa fees for 3 countries', 'Gratuities'],
    accommodations: [
      { name: 'Sanctuary Gorilla Forest Camp', tier: 'Luxury', location: 'Bwindi', note: 'Directly inside the park.' },
      { name: 'Angama Mara', tier: 'Ultra-Luxury', location: 'Masai Mara', note: 'Panoramic views over the Mara triangle.' },
      { name: 'Ngorongoro Crater Lodge', tier: 'Ultra-Luxury', location: 'Ngorongoro', note: 'Iconic baroque architecture.' }
    ],
    physicalDemand: 'Moderate',
    bestMonths: ['July', 'August', 'September', 'October', 'December', 'January', 'February'],
    departureType: 'Private Customized'
  }
];
