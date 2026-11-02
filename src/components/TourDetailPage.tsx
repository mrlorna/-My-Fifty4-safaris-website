import React, { useState, useRef } from 'react';
import { TourPackage } from '../data/toursData';
import { PageView } from '../types';
import {
  Clock,
  Calendar,
  CheckCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Printer,
  ShieldCheck,
  Star,
  Users,
  Compass,
  ArrowRight,
  Phone,
  Bed,
  Utensils,
  Car,
  Camera,
  Info,
  Facebook,
  Instagram
} from 'lucide-react';

interface TourDetailPageProps {
  tour: TourPackage;
  onBack: () => void;
  onNavigate: (page: PageView) => void;
  onInquire: (tour: TourPackage) => void;
  onOpenTailorTrip: () => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  tour,
  onBack,
  onNavigate,
  onInquire,
  onOpenTailorTrip
}) => {
  const [openDays, setOpenDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedLodgeIdx, setSelectedLodgeIdx] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  const overviewRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const inclusionsRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const toggleDay = (dayNum: number) => {
    if (openDays.includes(dayNum)) {
      setOpenDays(openDays.filter(d => d !== dayNum));
    } else {
      setOpenDays([...openDays, dayNum]);
    }
  };

  const expandAllDays = () => {
    setOpenDays(tour.itinerary.map(d => d.day));
  };

  const collapseAllDays = () => {
    setOpenDays([]);
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Curated luxury lodges for this destination
  const LODGES = [
    {
      region: tour.destinations[0] || 'Uganda',
      name: 'Bwindi Volcanoes Luxury Lodge',
      stars: 5,
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      description: 'Nestled on the rim of the ancient Bwindi Impenetrable Forest, offering private stone bandas with sweeping valley views, dedicated personal butler service, and direct access to mountain gorilla tracking trailheads.'
    },
    {
      region: tour.destinations[1] || 'Savannah',
      name: 'Kazinga Wilderness Tented Retreat',
      stars: 5,
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      description: 'Front-row luxury canvas suites situated along the Kazinga Channel where herds of elephants and hippos gather at sunset, featuring handcrafted timber furniture and open-air rainforest showers.'
    },
    {
      region: 'Equatorial Crater Lakes',
      name: 'Ndali Crater View Sanctuary',
      stars: 5,
      image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
      description: 'Perched on the rim of an extinct volcanic crater lake, overlooking the snow-capped Mountains of the Moon with organic farm-to-table cuisine and swimming in pure volcanic spring waters.'
    }
  ];

  const galleryImages = [
    tour.coverImage,
    '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
  ];

  return (
    <div className="bg-white text-[#151713] min-h-screen">
      {/* 1. HERO BANNER (Full-width photo with centered title) */}
      <div className="relative h-[340px] sm:h-[440px] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105 saturate-115"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-2">
            {tour.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 font-light max-w-xl mx-auto">
            {tour.subtitle}
          </p>
        </div>
      </div>

      {/* 2. STICKY SUB-NAVIGATION BAR (Exact match: 10 days | From $2,190 + CHECK PRICES button) */}
      <div className="sticky top-[78px] sm:top-[84px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Duration & Price */}
          <div className="flex items-center gap-3">
            <span className="font-serif-luxury text-lg font-bold text-neutral-800">
              {tour.durationDays} days
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-sm text-neutral-600">
              From <strong className="font-serif-luxury text-xl font-bold text-[#16422b]">${tour.priceUSD.toLocaleString()}</strong>
            </span>
          </div>

          {/* Center: Section Anchor Tabs */}
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <button onClick={() => scrollTo(overviewRef)} className="hover:text-[#16422b] cursor-pointer">
              Overview
            </button>
            <button onClick={() => scrollTo(itineraryRef)} className="hover:text-[#16422b] cursor-pointer">
              Itinerary
            </button>
            <button onClick={() => scrollTo(inclusionsRef)} className="hover:text-[#16422b] cursor-pointer">
              Inclusions
            </button>
            <button onClick={() => scrollTo(hotelsRef)} className="hover:text-[#16422b] cursor-pointer">
              Hotels
            </button>
          </div>

          {/* Right: CHECK PRICES Button */}
          <div>
            <button
              onClick={() => scrollTo(pricingRef)}
              className="px-6 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white font-extrabold text-xs uppercase tracking-widest rounded shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Check Prices
            </button>
          </div>
        </div>
      </div>

      {/* 3. EARLY BOOKING DISCOUNT ANNOUNCEMENT BANNER */}
      <div className="bg-[#eaf4f0] border-b border-[#cfe6dc] text-[#16422b] py-2.5 px-4 text-center font-bold text-xs uppercase tracking-widest">
        <span>Early Booking Discount · Save $200 per person on 2026/2027 departures</span>
      </div>

      {/* 4. MAIN TOUR INTRO SECTION (Left details + Right photo collage) */}
      <div ref={overviewRef} className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Code, Title, Price pill, Overview, Route, Tags */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase bg-neutral-100 px-2.5 py-1 rounded">
                Code: {tour.id.toUpperCase().slice(0, 8)}
              </span>
              <button
                onClick={handleShare}
                className="text-xs text-neutral-500 hover:text-[#16422b] flex items-center gap-1 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{shareCopied ? 'Link Copied!' : 'Share Trip'}</span>
              </button>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] tracking-tight">
              {tour.title}
            </h2>

            {/* Price & Duration Pill */}
            <div className="inline-flex items-center gap-3 bg-[#FAF7EE] border border-[#16422b]/30 px-4 py-2 rounded-lg text-[#16422b]">
              <span className="text-xs font-extrabold uppercase tracking-wider">
                From ${tour.priceUSD.toLocaleString()}
              </span>
              <span className="text-neutral-300">|</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                {tour.durationDays} Days / {tour.durationNights} Nights
              </span>
            </div>

            {/* Overview Narrative */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed pt-2">
              {tour.overview}
            </p>

            {/* Route Breakdown */}
            <div className="pt-2 text-xs sm:text-sm text-neutral-600 font-medium">
              <span className="text-neutral-900 font-bold">Route: </span>
              <span>{tour.destinations.join(' (3 nights) · ')} (Final day return)</span>
            </div>

            {/* Small Tags: Escorted / Active */}
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 rounded text-xs font-semibold text-neutral-700 border border-neutral-200">
                Escorted
              </span>
              <span className="px-3 py-1 bg-neutral-100 rounded text-xs font-semibold text-neutral-700 border border-neutral-200">
                Active Wildlife Safari
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded text-xs font-semibold border border-emerald-200">
                Gorilla Permits Guaranteed
              </span>
            </div>
          </div>

          {/* Right Column: Photo Collage with "VIEW ALL" button */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-56 sm:h-64 rounded-xl overflow-hidden shadow-sm border border-neutral-200">
                <img
                  src={galleryImages[0]}
                  alt="Safari main highlight"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-32 rounded-xl overflow-hidden shadow-sm border border-neutral-200">
                <img
                  src={galleryImages[1]}
                  alt="Safari wildlife"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-32 rounded-xl overflow-hidden shadow-sm border border-neutral-200 relative group cursor-pointer">
                <img
                  src={galleryImages[2]}
                  alt="Safari lodge"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider gap-1.5 backdrop-blur-xs">
                  <Camera className="w-4 h-4" />
                  <span>View All Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ITINERARY AT A GLANCE (Left: Day list, Right: Illustrative Map) */}
      <div className="bg-[#FAF7EE] py-12 sm:py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#151713] mb-8">
            Itinerary at a glance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Day list */}
            <div className="lg:col-span-6 space-y-3">
              {tour.itinerary.map((d) => (
                <div
                  key={d.day}
                  onClick={() => toggleDay(d.day)}
                  className="p-3 bg-white rounded-lg border border-neutral-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-[#16422b] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-14 text-xs font-extrabold text-[#16422b] uppercase shrink-0">
                      DAY {d.day}
                    </span>
                    <span className="text-xs font-bold text-neutral-800 line-clamp-1">
                      {d.title}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium shrink-0">
                    {d.location}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Stylized Safari Circuit Route Map Graphic */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  <span>Official Circuit Route Map</span>
                </span>
                <span className="text-[11px] text-neutral-400">4x4 Private Transport</span>
              </div>

              {/* Illustrated Visual Route Nodes */}
              <div className="relative py-8 flex flex-col justify-around h-64">
                <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-dashed border-l-2 border-dashed border-[#16422b]/50" />

                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-xs shadow">
                    1
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">Entebbe / Kampala Hub</span>
                    <span className="text-[11px] text-neutral-500">Arrival & Luxury Hotel Welcome</span>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-xs shadow">
                    2
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">Bwindi Impenetrable National Park</span>
                    <span className="text-[11px] text-neutral-500">Mountain Gorilla Tracking Sanctuary</span>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-xs shadow">
                    3
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">Queen Elizabeth National Park</span>
                    <span className="text-[11px] text-neutral-500">Tree-Climbing Lions & Kazinga Boat Safari</span>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-xs shadow">
                    4
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">Kibale Forest & Crater Lakes</span>
                    <span className="text-[11px] text-neutral-500">Chimpanzee Tracking & Departure Transit</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span>Distance: ~840 km scenic circuit</span>
                <span className="text-emerald-700 font-bold">100% Private 4x4 Land Cruiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FULL ITINERARY (Day-by-Day Cards with Numbered Badges & Accommodation/Meals Boxes) */}
      <div ref={itineraryRef} className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-200 gap-4">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713]">
            Full Itinerary
          </h2>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <button onClick={expandAllDays} className="hover:text-[#16422b] cursor-pointer">
              Expand All
            </button>
            <span className="text-neutral-300">|</span>
            <button onClick={collapseAllDays} className="hover:text-[#16422b] cursor-pointer">
              Close All
            </button>
            <span className="text-neutral-300">|</span>
            <button onClick={handlePrint} className="hover:text-[#16422b] flex items-center gap-1 cursor-pointer">
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <span className="text-neutral-300">|</span>
            <button onClick={handleShare} className="hover:text-[#16422b] flex items-center gap-1 cursor-pointer">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Trip</span>
            </button>
          </div>
        </div>

        {/* Day-by-Day Accordion Stack */}
        <div className="space-y-6">
          {tour.itinerary.map((d) => {
            const isOpen = openDays.includes(d.day);
            return (
              <div
                key={d.day}
                className="bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => toggleDay(d.day)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Numbered Badge */}
                    <div className="w-11 h-11 rounded-lg bg-[#16422b] text-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                      <span className="text-[9px] font-extrabold uppercase leading-none">DAY</span>
                      <span className="font-serif-luxury text-lg font-bold leading-none mt-0.5">{d.day}</span>
                    </div>

                    <div>
                      <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#151713]">
                        {d.title}
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium">
                        {d.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-neutral-400">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-neutral-100 space-y-5 animate-fade-in">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {d.description}
                    </p>

                    {/* Included Boxes (Accommodation & Meals) */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                        Included
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Accommodation Box */}
                        <div className="p-3.5 rounded-lg bg-[#FAF7EE] border border-neutral-200 flex items-start gap-3">
                          <Bed className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                              Accommodation
                            </span>
                            <span className="text-xs font-bold text-neutral-900 block">
                              {d.accommodation}
                            </span>
                            <div className="flex text-amber-500 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Meals Box */}
                        <div className="p-3.5 rounded-lg bg-[#FAF7EE] border border-neutral-200 flex items-start gap-3">
                          <Utensils className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                              Meals
                            </span>
                            <span className="text-xs font-bold text-neutral-900 block">
                              {d.mealPlan}
                            </span>
                            <span className="text-[11px] text-neutral-500 mt-0.5 block">
                              Bottled mineral water included in 4x4
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 7. INCLUSIONS SECTION (Clean grid matching Screenshot 2) */}
      <div ref={inclusionsRef} className="bg-[#FAF7EE] py-14 sm:py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-8">
            Inclusions
          </h2>

          {/* Inclusions 5-box Grid matching Screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Tour Guide */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#16422b]" />
                <span>Tour Guide</span>
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                English-speaking local professional driver-guide throughout Uganda and East Africa, plus Uganda Wildlife Authority (UWA) armed ranger trackers in all national parks.
              </p>
            </div>

            {/* Box 2: Tour Highlights */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#16422b]" />
                <span>Tour Highlights</span>
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mountain gorilla tracking permit in Bwindi Impenetrable National Park, chimpanzee trek in Kibale, Kazinga Channel wildlife boat cruise, and tree-climbing lions in Ishasha.
              </p>
            </div>

            {/* Box 3: Meals */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#16422b]" />
                <span>Meals</span>
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Daily full breakfast at safari lodges, {tour.durationNights} lunches and {tour.durationNights} multi-course dinners at premier eco-lodges, plus chilled bottled water.
              </p>
            </div>

            {/* Box 4: Transfer */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#16422b]" />
                <span>Transfer</span>
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Round trip airport transfer in Entebbe (with purchase of Land & Safari Package), and private 4x4 Land Cruiser with pop-up photography roof and professional driver.
              </p>
            </div>

            {/* Box 5: Important Notes */}
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-2 md:col-span-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#16422b]" />
                <span>Important Notes</span>
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Guaranteed departure with a minimum of 2 guests. Sturdy hiking boots, garden gloves, and yellow fever certification are required for Uganda mountain gorilla trekking.
              </p>
            </div>
          </div>

          {/* 8. UPGRADE TO PRIVATE TOUR (Matching Screenshot 1 standalone callout) */}
          <div className="mt-10 pt-10 border-t border-neutral-200">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-4">
              Upgrade to Private Tour
            </h3>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-[#16422b]/10 text-[#16422b] flex items-center justify-center shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <span>
                Please{' '}
                <button
                  onClick={onOpenTailorTrip}
                  className="text-[#16422b] font-bold underline hover:text-black cursor-pointer"
                >
                  Contact Us
                </button>{' '}
                for booking a bespoke private vehicle, customized dates, or chartered bush flights.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 9. WHERE YOU COULD STAY SECTION (Deep Dark Background matching Screenshot 1) */}
      <div ref={hotelsRef} className="bg-[#0b2216] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
              Where you could stay
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedLodgeIdx(prev => (prev === 0 ? LODGES.length - 2 : 0))}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                aria-label="Previous lodge"
              >
                ‹
              </button>
              <button
                onClick={() => setSelectedLodgeIdx(prev => (prev === 0 ? 1 : 0))}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                aria-label="Next lodge"
              >
                ›
              </button>
            </div>
          </div>

          {/* 2 Lodges Side-by-Side Cards (Matching Screenshot 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LODGES.slice(selectedLodgeIdx, selectedLodgeIdx + 2).map((lodge, i) => (
              <div
                key={i}
                className="bg-white text-[#151713] rounded-xl overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={lodge.image}
                    alt={lodge.name}
                    className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#16422b] text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded shadow">
                    {lodge.region}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2 leading-snug">
                      {lodge.name}
                    </h3>
                    <div className="flex text-amber-500 mb-3">
                      {[...Array(lodge.stars)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {lodge.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">Included in Luxury Tier</span>
                    <span className="font-bold text-[#16422b] uppercase tracking-wider">5-Star Eco Lodge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. DATES & PRICING SECTION (CHECK PRICES TARGET) */}
      <div ref={pricingRef} className="bg-[#FAF7EE] py-14 sm:py-20 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                  Verified Departures & Price Lock
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                  2026/2027 Schedule & Pricing
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase block">Starting Price</span>
                <span className="font-serif-luxury text-3xl font-extrabold text-[#16422b]">
                  ${tour.priceUSD.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Departure Options Table */}
            <div className="space-y-3 mb-8">
              {[
                { dates: 'Jul 12 – Jul 21, 2026', season: 'Peak Dry (Gorilla & Migration)', price: `$${tour.priceUSD.toLocaleString()}`, status: '4 Seats Left' },
                { dates: 'Aug 04 – Aug 13, 2026', season: 'Peak Dry Season', price: `$${tour.priceUSD.toLocaleString()}`, status: 'Guaranteed' },
                { dates: 'Sep 15 – Sep 24, 2026', season: 'Prime Photography Season', price: `$${tour.priceUSD.toLocaleString()}`, status: 'Guaranteed' },
                { dates: 'Dec 20 – Dec 29, 2026', season: 'Holiday Festive Season', price: `$${(tour.priceUSD + 200).toLocaleString()}`, status: '2 Seats Left' },
                { dates: 'Jan 10 – Jan 19, 2027', season: '2027 Early Bird Special', price: `$${(tour.priceUSD - 150).toLocaleString()}`, status: 'Open' }
              ].map((dep, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200 bg-[#FAF7EE]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#16422b] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#16422b] shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 block">{dep.dates}</span>
                      <span className="text-xs text-neutral-500">{dep.season}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {dep.status}
                    </span>
                    <span className="font-serif-luxury text-lg font-bold text-neutral-900">
                      {dep.price}
                    </span>
                    <button
                      onClick={() => onInquire(tour)}
                      className="px-4 py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Book Date
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Date CTA */}
            <div className="bg-[#FAF7EE] p-5 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="font-bold text-sm text-[#151713] block">Looking for other custom dates?</span>
                <span className="text-xs text-neutral-600">Our native planners can customize any departure for your private group.</span>
              </div>
              <button
                onClick={onOpenTailorTrip}
                className="px-6 py-2.5 bg-[#FAF7EE] hover:bg-white text-[#16422b] border border-[#16422b]/50 text-xs font-bold uppercase tracking-wider rounded cursor-pointer shrink-0 transition-colors"
              >
                Tailor Custom Dates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 10. WHAT OUR CUSTOMERS THINK (Matching Screenshot 1 & 2) */}
      <div className="py-16 sm:py-20 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-2">
              What our customers think
            </h2>
            <button
              onClick={onOpenTailorTrip}
              className="text-xs text-[#16422b] hover:underline font-semibold cursor-pointer"
            >
              View all reviews
            </button>
          </div>

          {/* Rating Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-8 pb-6 border-b border-neutral-200 mb-8 text-xs font-semibold">
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

          {/* Google Reviews Bar with Tan CTA Button */}
          <div className="bg-[#FAF7EE] rounded-xl p-4 sm:p-5 border border-neutral-200 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center font-bold text-blue-600">
                G
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-900 block">Google Reviews</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-neutral-800">4.9</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">(128 verified guest reviews)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTailorTrip}
              className="px-5 py-2 bg-[#d8c29d] hover:bg-[#c9b188] text-neutral-900 text-xs font-bold rounded shadow-xs cursor-pointer transition-colors"
            >
              Review us on Google
            </button>
          </div>

          {/* 3 Review Cards with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                name: 'Natalie Chiem',
                initial: 'N',
                avatarBg: 'bg-orange-500',
                time: '29 days ago',
                text: 'We were a private tour group on a bespoke journey in Uganda. The itinerary and luxury eco-lodges were immaculate, and our driver-guide was phenomenal.',
                photo: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
              },
              {
                name: 'John Campbell',
                initial: 'J',
                avatarBg: 'bg-emerald-600',
                time: '3 months ago',
                text: 'It was a wonderful experience. Fifty4 Safaris staff, especially the Kampala booking desk, were very helpful and made sure we secured our peak mountain gorilla permits.',
                photo: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
              },
              {
                name: 'Vinh Hong',
                initial: 'V',
                avatarBg: 'bg-slate-600',
                time: '4 months ago',
                text: 'Remarkable adventure from start to finish. The custom 4x4 pop-up roof vehicle and knowledgeable ranger guides gave us wildlife sightings we will cherish forever.',
                photo: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs`}>
                      {rev.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-neutral-900">{rev.name}</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-black">
                          ✓
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{rev.time}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-500 mb-2.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {rev.text}
                  </p>
                </div>

                <div className="h-44 rounded-lg overflow-hidden border border-neutral-100">
                  <img
                    src={rev.photo}
                    alt={rev.name}
                    className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11. THREE-COLUMN PRE-FOOTER */}
      <div className="py-12 bg-[#FAF7EE] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-center">
            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-1">
                  Explore our latest brochure
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  The newest brochure & tour catalog
                </p>
              </div>
              <button
                onClick={() => onNavigate('guides-faqs')}
                className="px-6 py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Explore Brochure
              </button>
            </div>

            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-1">
                  Join our mailing list
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  For all the latest news & promotions
                </p>
              </div>
              <button
                onClick={() => onNavigate('subscribe')}
                className="px-6 py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-1">
                  Let's keep in touch
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Follow us on:
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
