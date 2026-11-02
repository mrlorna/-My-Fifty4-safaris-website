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
    id: 'uganda-gorilla-trekking-complete-guide',
    title: 'Uganda Gorilla Trekking: Complete 2025/2026 Guide & Permit Regulations',
    category: 'Travel Guide',
    readTime: '6 min read',
    publishedDate: 'October 2025',
    author: 'Godfrey Mukasa, Senior Naturalist Guide',
    summary:
      'Everything international travelers need to know before stepping into Bwindi Impenetrable Forest: permit costs, fitness requirements, packing essentials, and ethical rules.',
    content: [
      'Standing mere feet away from a 400-pound silverback mountain gorilla in the misty depths of Bwindi Impenetrable Forest is an experience that defies comparison. With fewer than 1,060 mountain gorillas remaining on the planet, strict conservation protocols protect their habitats in Uganda, Rwanda, and the DRC.',
      'Uganda’s official gorilla tracking permit is issued exclusively by the Uganda Wildlife Authority (UWA) at a rate of $800 per foreign non-resident trekker. In comparison, neighboring Rwanda prices permits at $1,500. This permit grants you exactly one magical hour with a habituated gorilla family once located by expert rangers.',
      'To safeguard gorillas from human pathogens (as we share over 98% of our DNA), trekkers must maintain a minimum distance of 7 to 10 meters, wear surgical or KN95 face masks when near the gorillas, and refrain from trekking if showing any signs of cold or flu.',
      'We strongly recommend packing sturdy broken-in hiking boots with good ankle support, gardening gloves to protect hands against stinging nettles, moisture-wicking long-sleeve shirts and trousers, lightweight rain poncho, and a daypack with at least 2 liters of drinking water.'
    ],
    tags: ['Uganda', 'Gorillas', 'Bwindi', 'Permits', 'Safari Tips'],
    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
  },
  {
    id: 'great-migration-calendar-guide',
    title: 'The Great Migration Calendar: Where to Be Month-by-Month',
    category: 'Travel Guide',
    readTime: '5 min read',
    publishedDate: 'September 2025',
    author: 'Amina Kimaro, Wildlife Expedition Planner',
    summary:
      'Demystifying the movement of 1.5 million wildebeest and zebras across the Serengeti and Masai Mara ecosystem throughout the year.',
    content: [
      'A common misconception is that the Great Migration only occurs in July and August. In reality, the migration is a relentless, 365-day clockwise circle dictated by rainfall patterns and fresh grazing grasses.',
      'January to March: Southern Serengeti & Ndutu. This is the synchronized calving season where over 8,000 wildebeest calves are born each day. Predator activity (lions, cheetahs, spotted hyenas) is at its annual peak.',
      'April to June: The Western Corridor & Grumeti River. Herds begin their trek northwest, confronting giant territorial Nile crocodiles during the initial river crossings.',
      'July to October: Northern Serengeti & Masai Mara. The iconic world-famous Mara River crossings occur during this period. Dramatic, high-octane wildlife encounters occur almost daily.',
      'November to December: Returning South. With the arrival of short rains, the mega-herds move back through eastern Serengeti toward Ndutu, completing the miraculous circle.'
    ],
    tags: ['Tanzania', 'Kenya', 'Serengeti', 'Masai Mara', 'Great Migration'],
    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
  },
  {
    id: 'responsible-tourism-protecting-gorilla-habitats',
    title: 'Protecting Africa’s Future: How Responsible Safaris Fund Community Conservation',
    category: 'Conservation',
    readTime: '4 min read',
    publishedDate: 'August 2025',
    author: 'Fifty4 Conservation Trust',
    summary:
      'Discover how Fifty4 Safaris allocates 5% of trip revenues to local ranger health clinics, indigenous Batwa scholarships, and reforestation belts.',
    content: [
      'At Fifty4 Safaris, our motto is "Discover Africa. Protect Its Future." Responsible tourism is not a promotional gimmick for us; it is our founding philosophy.',
      'In the 1980s, mountain gorillas hovered dangerously close to extinction with barely 300 individuals surviving in the Virunga and Bwindi ranges. Today, thanks to strict eco-tourism permit revenues and community revenue sharing, gorillas are the only great ape species whose global wild population is actively increasing.',
      'Every Fifty4 Safaris booking directly funds local porter employment, equips anti-poaching patrol squads with GPS trackers and boots, and invests in solar-powered water collection systems in communities bordering Bwindi and Queen Elizabeth National Parks.'
    ],
    tags: ['Conservation', 'Responsible Tourism', 'Batwa Community', 'Uganda'],
    image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
  },
  {
    id: 'what-to-pack-east-african-safari',
    title: 'The Essential East African Safari Packing Checklist',
    category: 'Travel Guide',
    readTime: '5 min read',
    publishedDate: 'July 2025',
    author: 'Fifty4 Concierge Team',
    summary:
      'From neutral earth-tone clothing to soft duffel bag luggage limits on internal bush flights, here is what you need for a comfortable journey.',
    content: [
      'Packing for a safari requires balancing practical comfort with strict luggage constraints. Most regional safari air charters (such as flights to Bwindi or Serengeti airstrips) enforce a strict 15 kg (33 lbs) luggage limit in soft-sided duffel bags.',
      'Color Palette: Wear neutral shades of khaki, tan, olive, and brown. Avoid dark blue and black clothing in savannah and woodland areas, as these colors attract tsetse flies. Avoid bright white and fluorescent colors that stand out to wildlife.',
      'Layers are King: Dawn game drives can be brisk (especially in Ngorongoro or Bwindi at 2,000m elevation), requiring a warm fleece or light down jacket. By noon, temperatures rise considerably, making breathable layers essential.',
      'Camera Gear: A zoom lens ranging from 100mm to 400mm or 500mm is ideal for wildlife action shots. Remember extra memory cards, lens cleaning kits for savannah dust, and a dust-proof dry bag.'
    ],
    tags: ['Packing Guide', 'Practical Travel', 'Bush Flights', 'Luggage'],
    image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
  }
];
