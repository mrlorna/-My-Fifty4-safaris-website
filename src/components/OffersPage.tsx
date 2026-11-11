import React, { useState, useMemo, useEffect } from 'react';
import { TourPackage, TOURS_DATA } from '../data/toursData';
import { PageView } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  Sparkles,
  Check,
  X,
  MapPin,
  Calendar,
  ShieldCheck,
  Clock,
  Compass
} from 'lucide-react';

interface OffersPageProps {
  onSelectTour: (tourId: string) => void;
  onOpenTailorTrip: (preselectedTitle?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  onSelectTour,
  onOpenTailorTrip,
  onNavigate
}) => {
  const [selectedYear, setSelectedYear] = useState<'2026' | '2027' | '2028'>('2027');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedTripTypes, setSelectedTripTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration'>('price-asc');

  // Currently open offer modal (when user clicks a card)
  const [activeModalOffer, setActiveModalOffer] = useState<(typeof OFFER_PACKAGES)[0] | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  // Accordion toggle states
  const [yearOpen, setYearOpen] = useState(true);
  const [ugandaOpen, setUgandaOpen] = useState(true);
  const [kenyaOpen, setKenyaOpen] = useState(false);
  const [tanzaniaOpen, setTanzaniaOpen] = useState(false);
  const [rwandaOpen, setRwandaOpen] = useState(false);
  const [tripTypeOpen, setTripTypeOpen] = useState(true);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalOffer(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (activeModalOffer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalOffer]);

  // Offers packages mirroring Screenshot 3 with rich information
  const OFFER_PACKAGES = [
    {
      id: 'gorillas-savannah-uganda',
      code: 'UG-GOR',
      title: 'Classic Gorillas & Savannah',
      duration: '10 Days 9 Nights',
      route: 'Entebbe ~ Bwindi ~ Queen Elizabeth ~ Kibale',
      price: 1980,
      savings: 'SAVE $200 ON 2027 DATES',
      isBestSeller: true,
      isNewTrip: false,
      region: 'Uganda',
      tripType: 'Private Tour',
      image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      overview: 'An expedition through Uganda’s premier wildlife sanctuaries. Track endangered mountain gorillas deep in Bwindi Impenetrable Forest, cruise the Kazinga Channel among swimming elephants and massive hippo pods, and trek wild chimpanzees in the Kibale primate capital.',
      highlights: [
        'Guaranteed mountain gorilla tracking permit in Bwindi Impenetrable Forest',
        'Scenic boat safari along Kazinga Channel with world’s highest hippo density',
        'Chimpanzee tracking in Kibale Forest with veteran primatologists',
        'Morning & evening Big Game savannah drives in Queen Elizabeth National Park'
      ],
      inclusions: [
        'Custom 4WD Land Cruiser with pop-up photography roof & window seats',
        'All official Uganda Wildlife Authority (UWA) permits & conservation fees',
        'Full board luxury eco-lodge accommodations throughout',
        'Expert certified driver-naturalist guide and airport transfers'
      ]
    },
    {
      id: 'serengeti-mara-migration',
      code: 'TZ-SER',
      title: 'Serengeti & Masai Mara Migration',
      duration: '12 Days 11 Nights',
      route: 'Nairobi ~ Masai Mara ~ Serengeti ~ Ngorongoro',
      price: 2450,
      savings: 'SAVE $300 ON 2027 DATES',
      isBestSeller: true,
      isNewTrip: false,
      region: 'Tanzania',
      tripType: 'Private Tour',
      image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
      overview: 'Witness the greatest wildlife migration on Earth across the continuous savannah ecosystems of the Serengeti and Masai Mara, descending into the UNESCO Ngorongoro volcanic crater for unmatched Big Five density.',
      highlights: [
        'Front-row vantage points for dramatic Mara River wildebeest crossings',
        'Full-day safari on the floor of the ancient Ngorongoro volcanic caldera',
        'Endless game drives tracking lions, leopards, and cheetah coalitions',
        'Optional sunrise hot air balloon flight with champagne bush breakfast'
      ],
      inclusions: [
        'Cross-border seamless logistics with VIP air and 4x4 transfers',
        'All Serengeti, Mara, and Ngorongoro national park conservation fees',
        'Boutique mobile tented migration camp accommodations',
        'All meals, private 4x4 safari cruiser, and master safari guide'
      ]
    },
    {
      id: 'queen-elizabeth-wildlife',
      code: 'UG-LION',
      title: 'Tree-Climbing Lions & Kazinga',
      duration: '8 Days 7 Nights',
      route: 'Kampala ~ Ishasha ~ Kazinga ~ Lake Mburo',
      price: 1280,
      savings: 'SAVE $150 ON 2027 DATES',
      isBestSeller: false,
      isNewTrip: true,
      region: 'Uganda',
      tripType: 'Group Tour',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      overview: 'A safari focused on Uganda’s extraordinary predator behavior. Seek the legendary tree-climbing lions resting in sycamore fig branches in Ishasha, cruise past massive hippo pods on Kazinga Channel, and enjoy intimate bush walking safaris in Lake Mburo.',
      highlights: [
        'Specialist tracking of tree-climbing lions in the southern Ishasha sector',
        'Two-hour Kazinga Channel boat safari between Lakes Edward and George',
        'Guided walking safari among zebras and elands in Lake Mburo National Park',
        'Golden hour savannah drives across Kasenyi Plains for lion and leopard'
      ],
      inclusions: [
        'Custom 4WD safari Land Cruiser with open-view pop-up roof',
        'All national park entry, ranger escort fees, and boat cruise passes',
        'Handpicked boutique wilderness lodge accommodations on full board',
        'Bottled mineral water, fruit, and snacks during all game drives'
      ]
    },
    {
      id: 'rwanda-primate-sanctuary',
      code: 'RW-VOL',
      title: 'Rwanda Volcanoes & Luxury Primates',
      duration: '7 Days 6 Nights',
      route: 'Kigali ~ Volcanoes ~ Nyungwe ~ Lake Kivu',
      price: 2250,
      savings: 'SAVE $500 ON 2027 DATES',
      isBestSeller: true,
      isNewTrip: false,
      region: 'Rwanda',
      tripType: 'Private Tour',
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      overview: 'Experience the clean, green sanctuary of Rwanda. Track mountain gorillas along the misty slopes of the Virunga volcanoes, cross the breathtaking 70m-high suspended rainforest canopy in Nyungwe, and relax by the emerald shores of Lake Kivu.',
      highlights: [
        'Premier mountain gorilla tracking permit in Volcanoes National Park',
        'Thrilling suspended canopy walkway 70 meters above Nyungwe rainforest',
        'Endangered Golden Monkey tracking in mountain bamboo zones',
        'Scenic sundowner kayaking and relaxation on Lake Kivu’s shores'
      ],
      inclusions: [
        'Private chauffeur-guide with luxury 4WD safari vehicle',
        'Official RDB gorilla and golden monkey trekking permits included',
        '5-star world-class eco-luxury forest lodges on full board',
        'Private airport VIP meet & greet and all transfers in Rwanda'
      ]
    },
    {
      id: 'murchison-nile-falls',
      code: 'UG-MUR',
      title: 'Murchison Falls & Rhino Delta',
      duration: '6 Days 5 Nights',
      route: 'Kampala ~ Ziwa Rhinos ~ Nile Falls ~ Albert Delta',
      price: 800,
      savings: 'SAVE $100 ON 2027 DATES',
      isBestSeller: false,
      isNewTrip: false,
      region: 'Uganda',
      tripType: 'Group Tour',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.45_9309957c.jpeg',
      overview: 'Feel the earth vibrate as the world’s longest river forces itself through a 7-meter rocky gorge at Murchison Falls. Track wild Southern White Rhinos on foot at Ziwa, search for the rare prehistoric Shoebill stork in the Albert Delta, and enjoy prolific game drives.',
      highlights: [
        'Hike to the top of Murchison Falls and boat cruise to the thunderous base',
        'On-foot rhino tracking with armed rangers at Ziwa Rhino Sanctuary',
        'Albert Nile delta boat excursion searching for the rare Shoebill stork',
        'Game drives across northern savannah for Rothschild giraffes and lions'
      ],
      inclusions: [
        'Custom 4x4 pop-up roof safari vehicle with certified guide',
        'All park admission fees, ferry crossings, and boat cruise permits',
        'Ziwa Rhino Sanctuary walking tracking permit & ranger guide',
        'Full board wilderness lodge accommodation and all meals'
      ]
    },
    {
      id: 'kenya-iconic-savannah',
      code: 'KE-MAR',
      title: 'Amboseli Elephants & Masai Mara',
      duration: '9 Days 8 Nights',
      route: 'Nairobi ~ Amboseli ~ Lake Nakuru ~ Masai Mara',
      price: 1780,
      savings: 'SAVE $250 ON 2027 DATES',
      isBestSeller: true,
      isNewTrip: false,
      region: 'Kenya',
      tripType: 'Private Tour',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      overview: 'The quintessential Kenyan wilderness loop. Stand in awe as giant elephant herds roam beneath snow-capped Mount Kilimanjaro in Amboseli, view black and white rhinos at Lake Nakuru, and track big cat prides in the legendary Masai Mara.',
      highlights: [
        'Panoramic views of Mount Kilimanjaro framing Amboseli elephant herds',
        'Big cat tracking across the rolling savannahs of the Masai Mara',
        'Sanctuary boat & game drive for rhinos and flamingos at Lake Nakuru',
        'Traditional evening campfire stories and Maasai cultural exchange'
      ],
      inclusions: [
        'Window-seat guaranteed 4WD safari Land Cruiser with open roof',
        'KPSGA certified professional safari guide throughout',
        'All national park & reserve conservation entry fees',
        'Full board luxury tented safari camps and luxury lodges'
      ]
    },
    {
      id: 'zanzibar-bush-beach',
      code: 'TZ-ZNZ',
      title: 'Serengeti Wildlife & Zanzibar Spice Sands',
      duration: '11 Days 10 Nights',
      route: 'Arusha ~ Serengeti ~ Ngorongoro ~ Zanzibar Coast',
      price: 2180,
      savings: 'SAVE $350 ON 2027 DATES',
      isBestSeller: true,
      isNewTrip: false,
      region: 'Tanzania',
      tripType: 'Private Tour',
      image: '/src/assets/images/zanzibar_swimming_snorkeling_1794315665581.jpg',
      overview: 'Combine the raw excitement of Africa’s most celebrated wildlife savannahs with the relaxing turquoise waters of the Indian Ocean. Track the Big Five across Serengeti and Ngorongoro, then fly directly to the coral sands of Zanzibar.',
      highlights: [
        'Thrilling Big Five game drives in Serengeti and Ngorongoro Crater',
        'Direct bush flight from the African bush straight to Zanzibar Island',
        'Turquoise reef snorkeling and relaxation on powdery coral beaches',
        'Guided historical spice plantation and UNESCO Stone Town tour'
      ],
      inclusions: [
        'Domestic bush flight from Serengeti to Zanzibar included',
        'All safari park entry permits, Ngorongoro descent, and marine passes',
        'Handpicked beachfront resort and luxury safari lodges',
        'Private road transfers, experienced driver-guide, and full board meals'
      ]
    },
    {
      id: 'zambia-south-luangwa',
      code: 'ZM-LUA',
      title: 'Zambia Walking Frontiers & Victoria Falls',
      duration: '10 Days 9 Nights',
      route: 'Lusaka ~ South Luangwa ~ Lower Zambezi ~ Livingstone',
      price: 2380,
      savings: 'SAVE $400 ON 2027 DATES',
      isBestSeller: false,
      isNewTrip: true,
      region: 'Zambia',
      tripType: 'Private Tour',
      image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1200&q=80',
      overview: 'Journey to the birthplace of the authentic African walking safari. Track high-density leopard populations in South Luangwa with armed wildlife scouts, canoe the pristine Lower Zambezi, and marvel at the roar of Victoria Falls.',
      highlights: [
        'Master-led dawn walking safaris in South Luangwa National Park',
        'Famous night game drives for leopards and nocturnal predators',
        'Scenic canoeing and riverboat game viewing on Lower Zambezi',
        'Guided walking tour along the rim of the mighty Victoria Falls'
      ],
      inclusions: [
        'Internal scheduled light aircraft flights between parks',
        'Premier walking safari guides and armed wildlife rangers',
        'Luxury riverside tented camps with all meals and local drinks',
        'Victoria Falls heritage fees, game drives, and boat safaris'
      ]
    }
  ];

  // Specific reviews tied directly to each individual tour offer
  const OFFER_REVIEWS: Record<string, Array<{
    name: string;
    location: string;
    time: string;
    rating: number;
    highlight: string;
    text: string;
    photo: string;
  }>> = {
    'gorillas-savannah-uganda': [
      {
        name: 'Montgomery',
        location: 'London, UK',
        time: '2 weeks ago',
        rating: 5,
        highlight: 'Silverback Encounter in Bwindi',
        text: 'Gorilla tracking in Bwindi Impenetrable Forest was beyond words. Standing just meters from the Nkuringo silverback and his family is an emotional memory that will stay with us forever. Kazinga Channel boat safari and Kibale chimps were equally seamless.',
        photo: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
      },
      {
        name: 'Dr. David Evans',
        location: 'Melbourne, Australia',
        time: '1 month ago',
        rating: 5,
        highlight: 'Tree-Climbing Lions & Kazinga',
        text: 'The 10-day Classic Gorillas & Savannah itinerary was flawlessly paced. Our driver-guide Ronald spotted tree-climbing lions in Ishasha within two hours! The luxury eco-lodges overlooking the misty valleys were pure paradise.',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      },
      {
        name: 'Elena Rostova & Family',
        location: 'Zurich, Switzerland',
        time: '2 months ago',
        rating: 5,
        highlight: 'Flawless 2027 Booking & Permits',
        text: 'Fifty4 Safaris secured our high-demand gorilla permits and made the entire Uganda journey feel safe, luxurious, and deeply authentic. The custom pop-up roof 4x4 Land Cruiser was super comfortable throughout all 10 days.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      }
    ],
    'serengeti-mara-migration': [
      {
        name: 'Marcus & Linda Chen',
        location: 'San Francisco, USA',
        time: '3 weeks ago',
        rating: 5,
        highlight: 'Wildebeest River Crossing Spectacle',
        text: 'We witnessed the Mara River crossing with thousands of wildebeest and zebras on day 5! Our guide positioned our vehicle at the ultimate vantage point before anyone else arrived. Truly the greatest wildlife spectacle on Earth.',
        photo: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
      },
      {
        name: 'Arthur Pendleton',
        location: 'Toronto, Canada',
        time: '1 month ago',
        rating: 5,
        highlight: 'Ngorongoro Caldera at Sunrise',
        text: 'Descending into the Ngorongoro crater floor at dawn felt like entering Jurassic Park. We counted four black rhinos, two cheetahs, and countless flamingos. The mobile migration camp under the stars was magnificent.',
        photo: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Chloe De Vries',
        location: 'Amsterdam, Netherlands',
        time: '2 months ago',
        rating: 5,
        highlight: 'Serengeti Hot Air Ballooning',
        text: 'Floating over the endless Serengeti plains at sunrise, followed by a champagne bush breakfast, was the peak highlight of our lives. Fifty4 Safaris executed every cross-border detail between Kenya and Tanzania perfectly.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      }
    ],
    'queen-elizabeth-wildlife': [
      {
        name: 'Brian O’Connor',
        location: 'Dublin, Ireland',
        time: '10 days ago',
        rating: 5,
        highlight: 'Ishasha Fig Tree Lions',
        text: 'Seeing a pride of tree-climbing lions dozing high up on giant sycamore fig trees in Ishasha was sheer wonder. The 8-day itinerary hits Queen Elizabeth, Kazinga, and Mburo with zero wasted driving time.',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      },
      {
        name: 'Hannah Schmidt',
        location: 'Munich, Germany',
        time: '1 month ago',
        rating: 5,
        highlight: 'Kazinga Boat Safari Elephants',
        text: 'The 2-hour boat cruise along the Kazinga Channel brought us within feet of swimming African elephants, buffaloes, and giant Nile crocodiles. The wildlife density in Queen Elizabeth is unmatched.',
        photo: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
      },
      {
        name: 'Priya Patel',
        location: 'Nairobi, Kenya',
        time: '3 months ago',
        rating: 5,
        highlight: 'Lake Mburo Walking Safari',
        text: 'Stepping out on foot in Lake Mburo alongside elands and zebras gave us an intimate bush connection you cannot get from a car. An affordable, expertly planned safari with wonderful eco-lodges.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      }
    ],
    'rwanda-primate-sanctuary': [
      {
        name: 'Caroline Dupont',
        location: 'Paris, France',
        time: '3 weeks ago',
        rating: 5,
        highlight: 'Volcanoes National Park Mist',
        text: 'Trekking the Sabyinyo gorilla family in the mist of Rwanda’s volcanoes was magical. The park guides are world champions in conservation. Staying at the luxury forest lodge afterwards was absolute heaven.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      },
      {
        name: 'James & Claire Thorne',
        location: 'Boston, USA',
        time: '1 month ago',
        rating: 5,
        highlight: 'Nyungwe Suspended Canopy Walk',
        text: 'Walking 70 meters high above the ancient rainforest canopy of Nyungwe with 13 primate species calling beneath us was unforgettable. The golden monkeys in Volcanoes were also playful and joyful.',
        photo: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
      },
      {
        name: 'Sophia Rossi',
        location: 'Milan, Italy',
        time: '2 months ago',
        rating: 5,
        highlight: 'Kigali Heritage & Lake Kivu Sunset',
        text: 'Cleanest country in Africa, world-class roads, and sensational primate sanctuaries. Our Fifty4 Safaris guide handled all transfers and meals with wonderful care.',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      }
    ],
    'murchison-nile-falls': [
      {
        name: 'Kenneth Wright',
        location: 'Chicago, USA',
        time: '2 weeks ago',
        rating: 5,
        highlight: 'Murchison Falls Devil’s Cauldron',
        text: 'Hiking to the top of Murchison Falls where the entire Nile squeezes through a 7-meter gorge with earth-shattering power is something every human should witness once. Outstanding 6-day adventure.',
        photo: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
      },
      {
        name: 'Melanie Foster',
        location: 'Sydney, Australia',
        time: '1 month ago',
        rating: 5,
        highlight: 'Ziwa White Rhino Tracking on Foot',
        text: 'We tracked wild Southern White Rhinos on foot at Ziwa Rhino Sanctuary with armed rangers before heading into Murchison Falls. The group tour atmosphere was warm, fun, and impeccably organized.',
        photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Tobias Meier',
        location: 'Vienna, Austria',
        time: '2 months ago',
        rating: 5,
        highlight: 'Lake Albert Shoebill Stork Sighting',
        text: 'The boat cruise into the Albert Nile delta rewarded us with a rare sighting of the prehistoric Shoebill stork! Rothschild giraffes and lions roamed right by our morning game drive track.',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      }
    ],
    'kenya-iconic-savannah': [
      {
        name: 'Derek & Laura Walsh',
        location: 'Auckland, New Zealand',
        time: '3 weeks ago',
        rating: 5,
        highlight: 'Kilimanjaro Over Amboseli Elephants',
        text: 'Waking up to snow-capped Mount Kilimanjaro towering behind hundreds of free-roaming elephants in Amboseli was breathtaking. Masai Mara big cats were everywhere — we saw 9 lions on our first drive!',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      },
      {
        name: 'Naomi Tanaka',
        location: 'Tokyo, Japan',
        time: '1 month ago',
        rating: 5,
        highlight: 'Masai Mara Cheetah Hunt',
        text: 'We watched a cheetah mother teach her cubs how to stalk impalas across the open plains. Exceptional English-speaking driver guide who knew wildlife behavior inside out.',
        photo: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
      },
      {
        name: 'Robert King',
        location: 'Edinburgh, UK',
        time: '2 months ago',
        rating: 5,
        highlight: 'Lake Nakuru Rhino & Bird Sanctuary',
        text: 'The pink shores of Lake Nakuru packed with flamingos, plus both black and white rhinos. Everything from airport pickup in Nairobi to the tented camps was five-star.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      }
    ],
    'zanzibar-bush-beach': [
      {
        name: 'Jessica & Tom Bradley',
        location: 'Manchester, UK',
        time: '1 month ago',
        rating: 5,
        highlight: 'Serengeti Lions to Zanzibar Turquoise Waters',
        text: 'The ultimate honeymoon combination! Five days of thrilling dust and big cat sightings in the Serengeti, followed by direct bush-plane transfer to the powdery white sands and coral reefs of Zanzibar.',
        photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Alex Vance',
        location: 'Seattle, USA',
        time: '2 months ago',
        rating: 5,
        highlight: 'Stone Town Spice Tour & Sunset Dhow',
        text: 'Stone Town’s carved wooden doors, fragrant spice plantations, and the sunset dhow cruise along Nungwi coast were sensational. Fifty4 Safaris took care of every ferry and flight connection.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      },
      {
        name: 'Maria Santos',
        location: 'Madrid, Spain',
        time: '3 months ago',
        rating: 5,
        highlight: 'Ngorongoro & Beach Luxury Resort',
        text: 'From descending into Ngorongoro crater to sipping fresh coconuts on the Indian Ocean beach, everything was seamless. High quality accommodations throughout the entire 11 days.',
        photo: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
      }
    ],
    'zambia-south-luangwa': [
      {
        name: 'Harrison Miller',
        location: 'Denver, USA',
        time: '3 weeks ago',
        rating: 5,
        highlight: 'Pioneer of Walking Safaris',
        text: 'Walking through South Luangwa National Park with an armed wildlife scout was the most authentic bush experience of my life. You hear the twigs snap, read tracks, and feel the raw wilderness.',
        photo: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
      },
      {
        name: 'Beatrix von Berg',
        location: 'Berlin, Germany',
        time: '1 month ago',
        rating: 5,
        highlight: 'Victoria Falls Thunder & Micro-flight',
        text: 'Victoria Falls in full spray is awe-inspiring. Taking the micro-light flight over the Zambezi gorge and swimming at the edge of the falls will remain one of my greatest life adventures.',
        photo: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
      },
      {
        name: 'Liam Gallagher',
        location: 'London, UK',
        time: '2 months ago',
        rating: 5,
        highlight: 'Night Game Drives & Leopard Encounters',
        text: 'South Luangwa is famous for leopards and it delivered 5 separate sightings during our night drives with red filters. Outstanding bush luxury and heartfelt Zambian hospitality.',
        photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
      }
    ]
  };

  const handleRegionToggle = (region: string) => {
    setSelectedRegions(prev =>
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  const handleTripTypeToggle = (type: string) => {
    setSelectedTripTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleClearAll = () => {
    setSelectedRegions([]);
    setSelectedTripTypes([]);
    setSelectedYear('2027');
  };

  // Filtered & Sorted Tours
  const filteredPackages = useMemo(() => {
    let result = [...OFFER_PACKAGES];

    if (selectedRegions.length > 0) {
      result = result.filter(p => selectedRegions.includes(p.region));
    }

    if (selectedTripTypes.length > 0) {
      result = result.filter(p => selectedTripTypes.includes(p.tripType));
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    }

    return result;
  }, [selectedRegions, selectedTripTypes, sortBy]);

  return (
    <div className="bg-white text-[#151713] min-h-screen">
      {/* 1. HERO BANNER (Full-bleed scenic photo with centered serif title "Offers") */}
      <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src="/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg"
          alt="African safari offers landscape"
          className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105 saturate-115"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-md">
            Offers
          </h1>
        </div>
      </div>

      {/* 2. BODY CONTAINER: SIDEBAR + MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="font-bold text-sm text-neutral-900">Filter:</span>
              <button
                onClick={handleClearAll}
                className="text-xs text-[#16422b] hover:underline font-semibold cursor-pointer"
              >
                Clear all
              </button>
            </div>

            {/* Filter Group: Year */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setYearOpen(!yearOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Year</span>
                {yearOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {yearOpen && (
                <div className="space-y-2 text-xs">
                  {(['2026', '2027', '2028'] as const).map(year => (
                    <label key={year} className="flex items-center gap-2.5 cursor-pointer text-neutral-700">
                      <input
                        type="radio"
                        name="offerYear"
                        checked={selectedYear === year}
                        onChange={() => setSelectedYear(year)}
                        className="text-[#16422b] focus:ring-[#16422b]"
                      />
                      <span>{year}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Group: Uganda */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setUgandaOpen(!ugandaOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Uganda</span>
                {ugandaOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {ugandaOpen && (
                <div className="space-y-2 text-xs">
                  {['Bwindi Gorillas', 'Queen Elizabeth Lions', 'Kibale Chimps', 'Murchison Nile'].map(item => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer text-neutral-700">
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes('Uganda')}
                        onChange={() => handleRegionToggle('Uganda')}
                        className="rounded text-[#16422b] focus:ring-[#16422b]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Group: Kenya */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setKenyaOpen(!kenyaOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Kenya</span>
                {kenyaOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {kenyaOpen && (
                <div className="space-y-2 text-xs">
                  {['Masai Mara Migration', 'Amboseli Elephants', 'Lake Nakuru'].map(item => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer text-neutral-700">
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes('Kenya')}
                        onChange={() => handleRegionToggle('Kenya')}
                        className="rounded text-[#16422b] focus:ring-[#16422b]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Group: Tanzania */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setTanzaniaOpen(!tanzaniaOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Tanzania & Zanzibar</span>
                {tanzaniaOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {tanzaniaOpen && (
                <div className="space-y-2 text-xs">
                  {['Serengeti Plains', 'Ngorongoro Crater', 'Zanzibar Beach'].map(item => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer text-neutral-700">
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes('Tanzania')}
                        onChange={() => handleRegionToggle('Tanzania')}
                        className="rounded text-[#16422b] focus:ring-[#16422b]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Group: Trip Types */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setTripTypeOpen(!tripTypeOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Trip Types</span>
                {tripTypeOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {tripTypeOpen && (
                <div className="space-y-2 text-xs">
                  {['Private Tour', 'Group Tour'].map(type => (
                    <label key={type} className="flex items-center gap-2.5 cursor-pointer text-neutral-700">
                      <input
                        type="checkbox"
                        checked={selectedTripTypes.includes(type)}
                        onChange={() => handleTripTypeToggle(type)}
                        className="rounded text-[#16422b] focus:ring-[#16422b]"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT MAIN AREA: TRIPS GRID */}
          <main className="lg:col-span-9">
            {/* Top Bar: Showing count + Sort dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-neutral-200 gap-3">
              <span className="text-xs text-neutral-600 font-medium">
                Showing 1-{filteredPackages.length} of {filteredPackages.length} Trips
              </span>

              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs border border-neutral-300 rounded px-3 py-1.5 bg-white text-neutral-800 focus:outline-none cursor-pointer"
                >
                  <option value="price-asc">Price - low to high</option>
                  <option value="price-desc">Price - high to low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>

            {/* 2-Column Package Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {filteredPackages.map((pkg) => {
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setActiveModalOffer(pkg)}
                    className="bg-white rounded-lg border border-neutral-200 shadow-xs hover:shadow-2xl hover:border-[#16422b]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Photo Container with Emerald Banner & Round Badge */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-neutral-900">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Scalloped Circle Stamp on Top Right: "Best Seller" or "New Trip" */}
                      {pkg.isBestSeller && (
                        <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-white text-[#16422b] shadow-lg border-2 border-dashed border-[#16422b] flex flex-col items-center justify-center text-center p-1 transform rotate-6">
                          <span className="font-serif-luxury font-black text-[10px] uppercase leading-none">
                            Best
                          </span>
                          <span className="font-serif-luxury font-black text-[10px] uppercase leading-none mt-0.5">
                            Seller
                          </span>
                        </div>
                      )}

                      {pkg.isNewTrip && (
                        <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-[#16422b] text-white shadow-lg border-2 border-dashed border-white flex flex-col items-center justify-center text-center p-1 transform -rotate-6">
                          <span className="font-serif-luxury font-black text-[10px] uppercase leading-none">
                            New
                          </span>
                          <span className="font-serif-luxury font-black text-[10px] uppercase leading-none mt-0.5">
                            Trip
                          </span>
                        </div>
                      )}

                      {/* Green Ribbon Across Bottom of Photo */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#16422b] text-white text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-4 shadow-sm flex items-center justify-between">
                        <span>{pkg.savings}</span>
                      </div>
                    </div>

                    {/* Card Details Below Photo */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Code & Trip Type */}
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono text-neutral-400">
                            Code: {pkg.code}
                          </span>
                          <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {pkg.tripType}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#151713] leading-snug group-hover:text-[#16422b] transition-colors mb-1.5">
                          {pkg.title}
                        </h3>

                        {/* Duration */}
                        <span className="text-xs font-semibold text-neutral-700 block mb-1">
                          {pkg.duration}
                        </span>

                        {/* Route */}
                        <p className="text-xs text-neutral-500 font-light line-clamp-1 mb-2">
                          {pkg.route}
                        </p>

                        {/* Short preview snippet */}
                        <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {pkg.overview}
                        </p>
                      </div>

                      {/* Price & Actions (Click opens the Information & Reviews) */}
                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-neutral-900">
                          From <strong className="font-serif-luxury text-base sm:text-lg text-[#16422b]">${pkg.price.toLocaleString()}</strong> per person
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveModalOffer(pkg);
                            }}
                            className="text-xs font-bold text-[#16422b] bg-emerald-50 hover:bg-[#16422b] hover:text-white px-3 py-1.5 rounded-lg border border-emerald-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <span>Info & Reviews</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom count indicator */}
            <div className="text-right text-xs text-neutral-500 pt-6">
              Showing 1-{filteredPackages.length} of {filteredPackages.length} Trips
            </div>
          </main>
        </div>
      </div>

      {/* MODAL: TRIP INFORMATION & CUSTOMER REVIEWS (Opens when any offer card is clicked) */}
      {activeModalOffer && (() => {
        const reviewsForActive = OFFER_REVIEWS[activeModalOffer.id] || [];
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-fade-in"
            onClick={() => setActiveModalOffer(null)}
          >
            <div
              className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#16422b] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-800/80 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-200 bg-emerald-900/60 px-2 py-0.5 rounded">
                        {activeModalOffer.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {activeModalOffer.region} · {activeModalOffer.tripType}
                      </span>
                    </div>
                    <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {activeModalOffer.title}
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalOffer(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content: Information & Reviews */}
              <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-8 bg-[#FAF7EE]/40">
                {/* Hero Banner with Route & Price */}
                <div className="relative rounded-xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src={activeModalOffer.image}
                    alt={activeModalOffer.title}
                    className="w-full h-56 sm:h-72 object-cover filter brightness-105 contrast-105"
                  />

                  {/* Savings banner */}
                  <div className="absolute top-4 left-4 bg-[#16422b] text-[#FAF7EE] text-xs font-black uppercase tracking-wider py-1.5 px-3.5 rounded shadow-lg border border-emerald-400/40">
                    {activeModalOffer.savings}
                  </div>

                  {activeModalOffer.isBestSeller && (
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white text-[#16422b] shadow-xl border-2 border-dashed border-[#16422b] flex flex-col items-center justify-center text-center p-1 transform rotate-6">
                      <span className="font-serif-luxury font-black text-[10px] uppercase leading-none">
                        Best
                      </span>
                      <span className="font-serif-luxury font-black text-[10px] uppercase leading-none mt-0.5">
                        Seller
                      </span>
                    </div>
                  )}

                  {/* Bottom gradient caption with duration and route */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                        {activeModalOffer.duration}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-neutral-200">
                        {activeModalOffer.route}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-[11px] text-neutral-300 block">Offer Price:</span>
                      <span className="font-serif-luxury text-2xl sm:text-3xl font-black text-amber-400">
                        ${activeModalOffer.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-neutral-300 ml-1">per person</span>
                    </div>
                  </div>
                </div>

                {/* SECTION 1: TRIP INFORMATION */}
                <div className="bg-white rounded-xl p-5 sm:p-7 border border-neutral-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#16422b] mb-2 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      <span>Trip Information & Overview</span>
                    </h3>
                    <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                      {activeModalOffer.overview}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Key Destination Highlights</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalOffer.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF7EE] border border-neutral-200/80 text-xs text-neutral-800"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#16422b] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                            ✓
                          </div>
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16422b]" />
                      <span>Included In This Safari Offer</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalOffer.inclusions.map((inc, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-neutral-600"
                        >
                          <span className="text-emerald-700 font-bold">•</span>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: CUSTOMER REVIEWS FOR THIS TRIP */}
                <div className="bg-white rounded-xl p-5 sm:p-7 border border-neutral-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-neutral-100 gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#16422b] text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-emerald-200">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>Verified Traveler Reviews</span>
                      </div>
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#151713]">
                        Reviews for {activeModalOffer.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Real feedback from guests who completed this exact {activeModalOffer.duration} safari.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-[#FAF7EE] px-4 py-2 rounded-lg border border-neutral-200 shrink-0">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-neutral-900">4.9 / 5.0</span>
                      <span className="text-[10px] text-neutral-500 font-medium">(Verified)</span>
                    </div>
                  </div>

                  {/* Reviews Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {reviewsForActive.map((rev, i) => (
                      <div
                        key={i}
                        className="bg-[#FAF7EE] p-4 sm:p-5 rounded-xl border border-neutral-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="text-xs font-bold text-neutral-900 block truncate">
                                {rev.name}
                              </span>
                              <span className="text-[10px] text-neutral-500">{rev.location}</span>
                            </div>
                            <span className="text-[10px] text-neutral-400">{rev.time}</span>
                          </div>

                          <div className="flex items-center gap-1.5 mb-2.5">
                            <div className="flex text-amber-500">
                              {[...Array(rev.rating)].map((_, idx) => (
                                <Star key={idx} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                            <span className="text-[9px] font-bold text-[#16422b] bg-emerald-100/70 px-1.5 py-0.5 rounded border border-emerald-200 line-clamp-1">
                              {rev.highlight}
                            </span>
                          </div>

                          <div className="mb-4">
                            <p className={`text-xs text-neutral-700 leading-relaxed italic ${!expandedReviews[i] ? 'line-clamp-4' : ''}`}>
                              "{rev.text}"
                            </p>
                            <button
                              type="button"
                              onClick={() => setExpandedReviews((prev) => ({ ...prev, [i]: !prev[i] }))}
                              className="text-neutral-500 hover:text-[#16422b] font-semibold text-[11px] underline cursor-pointer mt-1"
                            >
                              {expandedReviews[i] ? 'Read less' : 'Read more'}
                            </button>
                          </div>
                        </div>

                        <div className="h-36 rounded-lg overflow-hidden border border-neutral-200/80 bg-neutral-900">
                          <img
                            src={rev.photo}
                            alt={`${rev.name} review photo`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Sticky Bottom Actions */}
              <div className="bg-[#FAF7EE] border-t border-neutral-200 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-neutral-600 hidden sm:block">
                  <span className="font-bold text-neutral-900">From ${activeModalOffer.price.toLocaleString()}</span> / person · Best Price Guarantee
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeModalOffer.title;
                      setActiveModalOffer(null);
                      onOpenTailorTrip(title);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Tailor This Offer
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const tourId = activeModalOffer.id;
                      setActiveModalOffer(null);
                      onSelectTour(tourId);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-white hover:bg-neutral-100 text-[#16422b] border border-[#16422b] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Full Details Page
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalOffer(null)}
                    className="px-4 py-2.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
