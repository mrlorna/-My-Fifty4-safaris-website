import React, { useState, useEffect, useMemo } from 'react';
import { TourPackage, TOURS_DATA } from '../data/toursData';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { PageView } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Star,
  Facebook,
  Instagram,
  ArrowRight,
  MapPin,
  Users
} from 'lucide-react';

interface DestinationsPageProps {
  tours: TourPackage[];
  onSelectTour: (tourId: string) => void;
  onOpenTailorTrip: () => void;
  initialSelectedId?: string;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  tours,
  onSelectTour,
  onOpenTailorTrip,
  initialSelectedId
}) => {
  const [selectedYear, setSelectedYear] = useState<'2026' | '2027' | '2028'>('2027');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialSelectedId || 'all');
  const [selectedTripTypes, setSelectedTripTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration'>('price-asc');

  // Accordion toggle states
  const [yearOpen, setYearOpen] = useState(true);
  const [destOpen, setDestOpen] = useState(true);
  const [tripTypeOpen, setTripTypeOpen] = useState(true);

  // Sync initialSelectedId from external navigation clicks (e.g. from home page 6-card grid)
  useEffect(() => {
    if (initialSelectedId && initialSelectedId !== 'all') {
      setSelectedCountry(initialSelectedId);
    }
  }, [initialSelectedId]);

  // Comprehensive destinations package list matching Screenshot 1 & 3
  const DESTINATION_PACKAGES = [
    {
      id: 'gorillas-savannah-uganda',
      code: 'UG-GOR',
      title: 'Classic Gorillas & Savannah',
      duration: '10 Days 9 Nights',
      route: 'Entebbe ~ Bwindi ~ Queen Elizabeth ~ Kibale',
      price: 2190,
      savings: 'SAVE $200 ON 2027 DATES',
      isBestSeller: true,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Private Tour',
      image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
    },
    {
      id: 'serengeti-mara-migration',
      code: 'TZ-SER',
      title: 'Serengeti & Mara Migration',
      duration: '12 Days 11 Nights',
      route: 'Nairobi ~ Masai Mara ~ Serengeti ~ Ngorongoro',
      price: 2300,
      savings: 'SAVE $300 ON 2027 DATES',
      isBestSeller: true,
      countryKey: 'tanzania',
      countryName: 'Tanzania',
      tripType: 'Private Tour',
      image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
    },
    {
      id: 'queen-elizabeth-wildlife',
      code: 'UG-LION',
      title: 'Tree-Climbing Lions Safari',
      duration: '8 Days 7 Nights',
      route: 'Kampala ~ Queen Elizabeth ~ Ishasha ~ Kazinga',
      price: 1890,
      savings: 'SAVE $150 ON 2027 DATES',
      isBestSeller: false,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Group Tour',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    },
    {
      id: 'rwanda-primate-sanctuary',
      code: 'RW-VOL',
      title: 'Rwanda Volcanoes & Primates',
      duration: '7 Days 6 Nights',
      route: 'Kigali ~ Volcanoes ~ Nyungwe ~ Lake Kivu',
      price: 2450,
      savings: 'SAVE $500 ON 2027 DATES',
      isBestSeller: true,
      countryKey: 'rwanda',
      countryName: 'Rwanda',
      tripType: 'Private Tour',
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
    },
    {
      id: 'kenya-iconic-savannah',
      code: 'KE-MAR',
      title: 'Masai Mara & Amboseli Horizons',
      duration: '9 Days 8 Nights',
      route: 'Nairobi ~ Amboseli ~ Lake Nakuru ~ Masai Mara',
      price: 2150,
      savings: 'SAVE $250 ON 2027 DATES',
      isBestSeller: true,
      countryKey: 'kenya',
      countryName: 'Kenya',
      tripType: 'Private Tour',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    },
    {
      id: 'murchison-nile-falls',
      code: 'UG-MUR',
      title: 'Murchison Falls Explorer',
      duration: '6 Days 5 Nights',
      route: 'Kampala ~ Ziwa Rhinos ~ Nile Falls ~ Albert Delta',
      price: 1650,
      savings: 'SAVE $100 ON 2027 DATES',
      isBestSeller: false,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Group Tour',
      image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
    },
    {
      id: 'zanzibar-bush-beach',
      code: 'TZ-ZNZ',
      title: 'Serengeti Wildlife & Zanzibar Coast',
      duration: '11 Days 10 Nights',
      route: 'Arusha ~ Serengeti ~ Ngorongoro ~ Zanzibar Sands',
      price: 2600,
      savings: 'SAVE $350 ON 2027 DATES',
      isBestSeller: true,
      countryKey: 'zanzibar',
      countryName: 'Zanzibar & Coast',
      tripType: 'Private Tour',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'zambia-south-luangwa',
      code: 'ZM-LUA',
      title: 'Zambia Walking Safaris & Falls',
      duration: '10 Days 9 Nights',
      route: 'Lusaka ~ South Luangwa ~ Lower Zambezi ~ Victoria Falls',
      price: 2800,
      savings: 'SAVE $400 ON 2027 DATES',
      isBestSeller: false,
      countryKey: 'zambia',
      countryName: 'Zambia & Falls',
      tripType: 'Private Tour',
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
    }
  ];

  const handleTripTypeToggle = (type: string) => {
    setSelectedTripTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleClearAll = () => {
    setSelectedCountry('all');
    setSelectedTripTypes([]);
    setSelectedYear('2027');
  };

  const filteredPackages = useMemo(() => {
    let result = [...DESTINATION_PACKAGES];

    if (selectedCountry !== 'all') {
      if (selectedCountry === 'group-tours') {
        result = result.filter(p => p.tripType === 'Group Tour');
      } else {
        result = result.filter(p => p.countryKey.toLowerCase().includes(selectedCountry.toLowerCase()));
      }
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
  }, [selectedCountry, selectedTripTypes, sortBy]);

  return (
    <div className="bg-white text-[#151713] min-h-screen">
      {/* 1. HERO BANNER (Full-bleed scenic sky/clouds sunset photo with centered serif title "Destinations") */}
      <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src="/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg"
          alt="African sky and safari landscape"
          className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105 saturate-115"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-md">
            Destinations
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
                        name="destYear"
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

            {/* Filter Group: African Destinations with Checkboxes matching screenshot */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                onClick={() => setDestOpen(!destOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 cursor-pointer"
              >
                <span>Africa</span>
                {destOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {destOpen && (
                <div className="space-y-2.5 text-xs">
                  {[
                    { id: 'uganda', label: 'Uganda' },
                    { id: 'kenya', label: 'Kenya' },
                    { id: 'tanzania', label: 'Tanzania' },
                    { id: 'rwanda', label: 'Rwanda' },
                    { id: 'zanzibar', label: 'Zanzibar & Coast' },
                    { id: 'zambia', label: 'Zambia & Falls' }
                  ].map(dest => {
                    const isChecked = selectedCountry === dest.id;
                    return (
                      <label key={dest.id} className="flex items-center gap-2.5 cursor-pointer text-neutral-700 hover:text-black">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setSelectedCountry(isChecked ? 'all' : dest.id)}
                          className="w-4 h-4 rounded text-[#16422b] focus:ring-[#16422b] border-neutral-300 cursor-pointer"
                        />
                        <span className={isChecked ? 'font-bold text-[#16422b]' : ''}>{dest.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Collapsed Region Accordions (Matching Screenshot: Europe >, South America >, etc.) */}
            <div className="border-b border-neutral-200 pb-3.5">
              <button
                type="button"
                className="w-full flex items-center justify-between text-xs font-semibold text-neutral-700 py-1 cursor-pointer hover:text-black"
              >
                <span>Southern Africa</span>
                <span className="text-neutral-400 text-sm">›</span>
              </button>
            </div>

            <div className="border-b border-neutral-200 pb-3.5">
              <button
                type="button"
                className="w-full flex items-center justify-between text-xs font-semibold text-neutral-700 py-1 cursor-pointer hover:text-black"
              >
                <span>Central & West Africa</span>
                <span className="text-neutral-400 text-sm">›</span>
              </button>
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
                <div className="space-y-2.5 text-xs">
                  {['Private Tour', 'Group Tour'].map(type => (
                    <label key={type} className="flex items-center gap-2.5 cursor-pointer text-neutral-700 hover:text-black">
                      <input
                        type="checkbox"
                        checked={selectedTripTypes.includes(type)}
                        onChange={() => handleTripTypeToggle(type)}
                        className="w-4 h-4 rounded text-[#16422b] focus:ring-[#16422b] border-neutral-300 cursor-pointer"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT MAIN AREA: PACKAGES GRID */}
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

            {/* 2-Column Package Cards Grid (Clicking ANY card opens the long full-detail page!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onSelectTour(pkg.id)}
                  className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  {/* Photo Container with Emerald Banner & Round Stamp Badge in TOP LEFT */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Scalloped Circle Stamp on Top Left: "Best Seller" matching screenshot */}
                    {pkg.isBestSeller && (
                      <div className="absolute top-3 left-3 w-16 h-16 rounded-full bg-white text-[#151713] shadow-md border-2 border-dashed border-[#151713] flex flex-col items-center justify-center text-center p-1 transform -rotate-6 z-10">
                        <span className="font-serif-luxury font-black text-[10px] uppercase leading-none">
                          Best
                        </span>
                        <span className="font-serif-luxury font-black text-[10px] uppercase leading-none mt-0.5">
                          Seller
                        </span>
                      </div>
                    )}

                    {/* Green Ribbon Across Bottom of Photo */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#16422b] text-white text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-4 shadow-sm text-center">
                      {pkg.savings}
                    </div>
                  </div>

                  {/* Card Details Below Photo */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Code */}
                      <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                        Code: {pkg.code}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#151713] leading-snug group-hover:text-[#16422b] transition-colors mb-1.5">
                        {pkg.title}
                      </h3>

                      {/* Duration */}
                      <span className="text-xs font-semibold text-neutral-700 block mb-1">
                        {pkg.duration}
                      </span>

                      {/* Route */}
                      <p className="text-xs text-neutral-500 font-light line-clamp-1">
                        {pkg.route}
                      </p>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-neutral-900">
                        From <strong className="font-serif-luxury text-base sm:text-lg text-[#16422b]">${pkg.price.toLocaleString()}</strong> per person
                      </span>

                      <span className="text-xs font-bold text-[#16422b] group-hover:underline flex items-center gap-1">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom count indicator */}
            <div className="text-right text-xs text-neutral-500 pt-6">
              Showing 1-{filteredPackages.length} of {filteredPackages.length} Trips
            </div>
          </main>
        </div>
      </div>

      {/* 3. "What our customers think" (Reviews section matching Screenshot 1/3) */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-2">
              What our customers think
            </h2>
            <button
              onClick={() => onOpenTailorTrip()}
              className="text-xs text-[#16422b] hover:underline font-semibold cursor-pointer"
            >
              View all reviews
            </button>
          </div>

          {/* Aggregate Rating Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pb-8 border-b border-neutral-200 mb-8 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold text-sm">G</span>
              <span className="font-bold text-neutral-800">Google Reviews</span>
              <span className="text-neutral-900 font-bold">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold text-sm">★</span>
              <span className="font-bold text-neutral-800">TrustPilot Reviews</span>
              <span className="text-neutral-900 font-bold">4.9</span>
              <div className="flex text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Montgomery',
                time: '27 days ago',
                text: 'We were a private tour group of 4 on a bespoke trip to Uganda and Rwanda. The itinerary and luxury eco-lodges were exceptional.',
                photo: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
              },
              {
                name: 'John Campbell',
                time: '3 months ago',
                text: 'It was a wonderful experience. Fifty4 Safaris staff, especially the Kampala booking architects, were very helpful and made sure we secured our peak gorilla permits.',
                photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
              },
              {
                name: 'Vinh Hong',
                time: '4 months ago',
                text: 'Remarkable adventure from start to finish. The custom 4x4 pop-up roof vehicle and knowledgeable ranger guides gave us wildlife sightings we will never forget.',
                photo: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-[#FAF7EE] p-5 rounded-lg border border-neutral-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-neutral-900">{rev.name}</span>
                    <span className="text-[10px] text-neutral-400">{rev.time}</span>
                  </div>
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {rev.text}
                  </p>
                </div>
                <div className="h-40 rounded overflow-hidden">
                  <img src={rev.photo} alt={rev.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE-COLUMN PRE-FOOTER */}
      <section className="py-14 sm:py-16 bg-[#FAF7EE] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-center">
            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Explore our latest brochure
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  The newest brochure & tour program catalog
                </p>
              </div>
              <button
                onClick={onOpenTailorTrip}
                className="px-8 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Explore Brochure
              </button>
            </div>

            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Join our mailing list
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  For all the latest news and promotions
                </p>
              </div>
              <button
                onClick={onOpenTailorTrip}
                className="px-8 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Let's keep in touch
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Follow us on:
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
