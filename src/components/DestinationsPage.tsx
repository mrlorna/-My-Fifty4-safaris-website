import React, { useState, useEffect, useMemo } from 'react';
import { TourPackage, TOURS_DATA } from '../data/toursData';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { PageView } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
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
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

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

  // Comprehensive destinations package list
  const DESTINATION_PACKAGES = [
    {
      id: 'gorillas-savannah-uganda',
      title: 'Classic Gorillas & Savannah',
      duration: '10 Days 9 Nights',
      durationDays: 10,
      route: 'Entebbe ~ Bwindi ~ Queen Elizabeth ~ Kibale',
      isBestSeller: true,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Private Tour',
      image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
    },
    {
      id: 'serengeti-mara-migration',
      title: 'Serengeti & Mara Migration',
      duration: '12 Days 11 Nights',
      durationDays: 12,
      route: 'Nairobi ~ Masai Mara ~ Serengeti ~ Ngorongoro',
      isBestSeller: true,
      countryKey: 'tanzania',
      countryName: 'Tanzania',
      tripType: 'Private Tour',
      image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
    },
    {
      id: 'queen-elizabeth-wildlife',
      title: 'Queen Elizabeth & Kazinga Safari',
      duration: '8 Days 7 Nights',
      durationDays: 8,
      route: 'Kampala ~ Queen Elizabeth ~ Ishasha ~ Kazinga',
      isBestSeller: false,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Group Tour',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.24_b621a8a6.jpeg'
    },
    {
      id: 'rwanda-primate-sanctuary',
      title: 'Rwanda Volcanoes & Canopy',
      duration: '7 Days 6 Nights',
      durationDays: 7,
      route: 'Kigali ~ Volcanoes ~ Nyungwe ~ Lake Kivu',
      isBestSeller: true,
      countryKey: 'rwanda',
      countryName: 'Rwanda',
      tripType: 'Private Tour',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.28_4acce011.jpeg'
    },
    {
      id: 'kenya-iconic-savannah',
      title: 'Masai Mara & Amboseli Horizons',
      duration: '9 Days 8 Nights',
      durationDays: 9,
      route: 'Nairobi ~ Amboseli ~ Lake Nakuru ~ Masai Mara',
      isBestSeller: true,
      countryKey: 'kenya',
      countryName: 'Kenya',
      tripType: 'Private Tour',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    },
    {
      id: 'murchison-nile-falls',
      title: 'Murchison Falls Explorer',
      duration: '6 Days 5 Nights',
      durationDays: 6,
      route: 'Kampala ~ Ziwa Rhinos ~ Nile Falls ~ Albert Delta',
      isBestSeller: false,
      countryKey: 'uganda',
      countryName: 'Uganda',
      tripType: 'Group Tour',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.44_d27ead9b.jpeg'
    },
    {
      id: 'zanzibar-bush-beach',
      title: 'Serengeti Wildlife & Zanzibar Coast',
      duration: '11 Days 10 Nights',
      durationDays: 11,
      route: 'Arusha ~ Serengeti ~ Ngorongoro ~ Zanzibar Sands',
      isBestSeller: true,
      countryKey: 'zanzibar',
      countryName: 'Zanzibar & Coast',
      tripType: 'Private Tour',
      image: '/src/assets/images/zanzibar_swimming_snorkeling_1794315665581.jpg'
    },
    {
      id: 'zambia-south-luangwa',
      title: 'Zambia Walking Safaris & Falls',
      duration: '10 Days 9 Nights',
      durationDays: 10,
      route: 'Lusaka ~ South Luangwa ~ Lower Zambezi ~ Victoria Falls',
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

    // Default order: best sellers first
    result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));

    return result;
  }, [selectedCountry, selectedTripTypes]);

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
            {/* Top Bar: Showing count */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
              <span className="text-xs text-neutral-600 font-medium">
                Showing 1-{filteredPackages.length} of {filteredPackages.length} Safaris
              </span>
            </div>

            {/* 2-Column Package Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onSelectTour(pkg.id)}
                  className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  {/* Photo Container */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Best Seller Stamp */}
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

                    {/* Trip Type Badge */}
                    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded shadow-xs">
                      {pkg.tripType}
                    </span>
                  </div>

                  {/* Card Details Below Photo */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
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

                    {/* Action Bar (Book Group Tour / Book a Trip + View Itinerary) */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      {pkg.tripType === 'Group Tour' ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenTailorTrip();
                          }}
                          className="px-3.5 py-1.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>Book Group Tour</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenTailorTrip();
                          }}
                          className="px-3.5 py-1.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                        >
                          <span>Book a Trip</span>
                        </button>
                      )}

                      <span className="text-xs font-bold text-[#16422b] group-hover:underline flex items-center gap-1">
                        <span>View Itinerary</span>
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
                name: 'Montgomery',
                time: '27 days ago',
                text: 'We enjoyed our safari in Kenya and Uganda so much. Traveling across both countries with Fifty4 Safaris felt like traveling with family from day one. In Kenya, watching the elephant herds beneath Kilimanjaro was breathtaking, and gorilla trekking in Bwindi was arranged with such care and warmth.',
                photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.13_c6b09cce.jpeg'
              },
              {
                name: 'Rasheem',
                time: '3 months ago',
                text: 'We enjoyed hiking the hills and exploring the lush green with our tour guide Lorna—she is such a lovely, caring soul. She kept our spirits high on every trail, sharing local stories and making every moment feel so authentic and joyful.',
                photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.31__1__4b878806.jpeg'
              },
              {
                name: 'Irene',
                time: '4 months ago',
                text: 'We truly enjoyed every moment, had so much fun, and surely recommend Fifty4 Safaris! Reaching Murchison Falls and the sunset game drives gave us memories we will cherish forever. The team welcomed us warmly like close friends.',
                photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.38__1__741c8dd3.jpeg'
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
                  <div className="mb-4">
                    <p className={`text-xs text-neutral-600 leading-relaxed ${!expandedReviews[i] ? 'line-clamp-4' : ''}`}>
                      {rev.text}
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
                <div className="h-40 rounded overflow-hidden">
                  <img src={rev.photo} alt={rev.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
