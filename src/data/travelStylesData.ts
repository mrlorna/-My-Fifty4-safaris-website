export interface TravelStyleInfo {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  keyFeatures: string[];
}

export const TRAVEL_STYLES_DATA: TravelStyleInfo[] = [
  {
    id: 'gorilla-primate',
    name: 'Gorilla and Primate Experiences',
    shortDescription: 'Life-affirming encounters with wild Mountain Gorillas, Chimpanzees & Golden Monkeys in Uganda & Rwanda.',
    fullDescription:
      'Standing just meters away from a gentle 400-pound silverback mountain gorilla in Bwindi or Volcanoes National Park is widely recognized as one of the most emotional and profound wildlife experiences on Earth. Fifty4 Safaris secures official government tracking permits and pairs you with seasoned native trackers and armed wildlife rangers.',
    idealFor: 'Primate enthusiasts, wildlife photographers, bucket-list adventure travelers seeking intimate animal interactions.',
    keyFeatures: [
      'Official UWA (Uganda) & RDB (Rwanda) permits pre-booked and guaranteed',
      'Maximum 8 guests per habituated gorilla family per trek',
      'Experienced local native trackers and porters from forest buffer communities',
      'Habituation experiences available with up to 4 hours in the presence of chimpanzees'
    ]
  },
  {
    id: 'wildlife-safaris',
    name: 'Wildlife Safaris',
    shortDescription: 'Classic savannah expeditions in search of Africa’s Big Five across world-famous parks and private reserves.',
    fullDescription:
      'Traverse the boundless golden savannahs of East Africa in custom 4WD safari Land Cruisers equipped with 360-degree pop-up photography roofs, high-grade optics, and knowledgeable naturalist guides who read animal behavior and spoor like open books.',
    idealFor: 'First-time African travelers, families, wildlife lovers wanting prolific predator and herbivore viewings.',
    keyFeatures: [
      'Guaranteed window seats for every traveler in custom 4x4 Land Cruisers',
      'Dawn and twilight golden-hour game drives for peak predator activity',
      'Boat safaris on Kazinga Channel, River Nile, and Lake Victoria',
      'Expert naturalist guides with decades of terrain and wildlife navigation experience'
    ]
  },
  {
    id: 'great-migration',
    name: 'Great Migration Journeys',
    shortDescription: 'Front-row witness to the circular drama of 1.5 million wildebeest and zebras crossing East African rivers.',
    fullDescription:
      'The Great Wildebeest Migration is nature’s grandest spectacle: an unending circular odyssey between Tanzania’s Serengeti and Kenya’s Masai Mara. Our migration itineraries position you in mobile tented camps and luxury lodges situated precisely where the massive herds and river crossings are congregating.',
    idealFor: 'Dramatic action photography enthusiasts, nature documentary lovers, seasoned safari travelers.',
    keyFeatures: [
      'Strategic camp placements tracking seasonal herd movements month-by-month',
      'Mara River and Grumeti River crossing viewpoints with Nile crocodiles',
      'Hot air balloon safari options with bush champagne landings',
      'Off-road tracking privileges in private adjoining conservancies'
    ]
  },
  {
    id: 'luxury-safari',
    name: 'Luxury Safari Experiences',
    shortDescription: 'Ultra-exclusive eco-lodges, private air charters, personalized butler service, and exquisite cuisine.',
    fullDescription:
      'Experience the African wilderness without compromising an ounce of refinement. Stay in architectural masterpieces suspended over dramatic crater lakes, private canvas villas with heated plunge pools, and enjoy fine farm-to-table cuisine, vintage wine cellars, and restorative open-air spa treatments.',
    idealFor: 'Discerning luxury travelers, high-end honeymooners, and guests seeking five-star hospitality in untamed wilderness.',
    keyFeatures: [
      'Bespoke private charter flights minimizing long road transfers',
      'Exclusive-use vehicles and dedicated private guide-naturalist teams',
      'Top-tier Relais & Châteaux, Singita, and Sanctuary lodge portfolios',
      'In-suite wellness, massage treatments, and open-fire dining'
    ]
  },
  {
    id: 'adventure-nature',
    name: 'Adventure and Nature',
    shortDescription: 'Pioneering walking safaris, white-water Nile rafting, volcano ascents, and remote wilderness camps.',
    fullDescription:
      'Step beyond the confines of safari vehicles. Trek on foot alongside armed wildlife scouts in Zambia’s South Luangwa, raft the Class V rapids of the Victoria Nile at Jinja, conquer the glacial peaks of the Rwenzori Mountains, or kayak between tropical islands on Lake Kivu.',
    idealFor: 'Active travelers, thrill seekers, hikers, and explorers craving tactile immersion in the elements.',
    keyFeatures: [
      'Authentic walking safaris with certified professional walking guides',
      'Grade V white-water rafting and bungee over the River Nile in Jinja',
      'Hikes up Mount Bisoke with volcanic crater lake summits',
      'Canoeing and mokoro expeditions through papyrus wetlands'
    ]
  },
  {
    id: 'culture-community',
    name: 'Culture and Community',
    shortDescription: 'Authentic exchanges with the Batwa forest dwellers, Karamojong pastoralists, and Maasai elders.',
    fullDescription:
      'Travel in Africa is incomplete without understanding the resilient cultures who have lived alongside wildlife for centuries. Fifty4 Safaris champions respectful, community-led cultural immersion that directly provides revenue, clean water, and schooling to indigenous villages.',
    idealFor: 'Anthropology enthusiasts, culturally minded travelers, families educating children on global heritage.',
    keyFeatures: [
      'Batwa Cultural Trail in Bwindi learning ancient hunter-gatherer medicine and fire-making',
      'Authentic homestay and kraal experiences in Karamoja (northeast Uganda)',
      'Traditional Maasai beadwork and warrior heritage dialogues',
      'Direct contribution to community schools and female empowerment initiatives'
    ]
  },
  {
    id: 'honeymoon-romantic',
    name: 'Honeymoons and Romantic Escapes',
    shortDescription: 'Private candlelight bush dinners, sunset dhow sails, outdoor deep-soaking bathtubs, and secluded luxury.',
    fullDescription:
      'Celebrate life’s milestones with unforgettable African romance. Picture candlelit multi-course dinners under a canopy of southern hemisphere stars, watching wild elephants from your private plunge pool, and falling asleep to the nocturnal symphony of the savannah.',
    idealFor: 'Newlyweds, anniversary celebrations, couples seeking restorative and intimate wilderness escapes.',
    keyFeatures: [
      'Complimentary honeymoon amenities (chilled champagne, couples massage, private bush dinners)',
      'Secluded villas with private decks and panoramic vistas',
      'Seamless combinations of exhilarating wildlife and peaceful Indian Ocean beaches',
      'Tailor-made experiences arranged by our on-the-ground safari team'
    ]
  },
  {
    id: 'multi-country',
    name: 'Multi-Country African Journeys',
    shortDescription: 'Seamless cross-border itineraries linking Uganda, Rwanda, Kenya, Tanzania, and Zambia.',
    fullDescription:
      'Why choose just one country when Africa’s wonders flow together? Fifty4 Safaris coordinates complex multi-nation logistics: clear border crossings, synchronized aviation hops, and unified ground management so you experience the full breadth of East and Southern Africa in one fluid journey.',
    idealFor: 'Time-efficient international visitors wanting to check off gorillas, the Great Migration, and Victoria Falls.',
    keyFeatures: [
      'Single point of contact for multi-border visas, transfers, and permits',
      'Streamlined baggage handling and regional charter coordination',
      'Consistent 5-star service standard across all destinations',
      'Time-optimized itineraries eliminating redundant transit days'
    ]
  },
  {
    id: 'beach-safari',
    name: 'Beach and Safari Combinations',
    shortDescription: 'The quintessential African pairing: thrilling bush adventures followed by powdery Indian Ocean shores.',
    fullDescription:
      'After days of early morning game drives and misty rainforest treks, there is no greater indulgence than trading hiking boots for barefoot luxury on the powdery white sands of Zanzibar, Diani Beach, or Lake Victoria’s Ssese archipelago.',
    idealFor: 'Travelers seeking a balanced holiday of exhilarating wildlife action and blissful tropical unwinding.',
    keyFeatures: [
      'Direct short-haul flights from safari airstrips to coastal paradises',
      'World-class scuba diving, marine safari reefs, and dolphin encounters',
      'Historic spice plantation tours and UNESCO Stone Town exploration',
      'Private sunset dhow sails with fresh grilled seafood'
    ]
  }
];
