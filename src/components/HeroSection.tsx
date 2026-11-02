import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Sparkles
} from 'lucide-react';
import { PageView } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenTailorTrip: (preselectedTitle?: string) => void;
  onSearchTours: (criteria: { destination: string; style: string; duration: string }) => void;
}

interface HeroSlide {
  image: string;
  badgeTop: string;
  badgeAmount: string;
  badgeBottom: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  ringBorder: string;
  title: string;
  pillHighlight: string;
  pillSubtext: string;
  caption: string;
  destinationKey: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    badgeTop: 'Save up to',
    badgeAmount: '$500',
    badgeBottom: 'Per Person',
    badgeBg: 'bg-[#FAF7EE]',
    badgeText: 'text-[#16422b]',
    badgeBorder: 'border-[#16422b]',
    ringBorder: 'border-[#FAF7EE]/70',
    title: '2027 Uganda Gorillas',
    pillHighlight: 'Guaranteed Gorilla Permits Included',
    pillSubtext: 'From $2,190 · Instant Lock',
    caption: 'Official UWA permit allocations secured directly in your passport name with zero broker markup.',
    destinationKey: 'Uganda'
  },
  {
    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
    badgeTop: 'Peak Season',
    badgeAmount: 'Migration',
    badgeBottom: 'Special',
    badgeBg: 'bg-[#16422b]',
    badgeText: 'text-[#FAF7EE]',
    badgeBorder: 'border-[#FAF7EE]',
    ringBorder: 'border-[#FAF7EE]/60',
    title: '2027 Serengeti & Mara',
    pillHighlight: 'Witness The Great Migration Live',
    pillSubtext: 'From $2,300 · Front-Row Camps',
    caption: 'Front-row luxury mobile tented camps overlooking iconic Mara river crossings.',
    destinationKey: 'Tanzania'
  },
  {
    image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    badgeTop: 'Early Booking',
    badgeAmount: '15% Off',
    badgeBottom: 'Limited Slots',
    badgeBg: 'bg-[#FAF7EE]',
    badgeText: 'text-[#16422b]',
    badgeBorder: 'border-[#16422b]',
    ringBorder: 'border-[#FAF7EE]/70',
    title: '2027 Climbing Lions & Nile',
    pillHighlight: 'Tree-Climbing Lions & Kazinga Cruises',
    pillSubtext: 'From $1,890 · Private 4x4',
    caption: 'Private custom 4x4 pop-up roof Land Cruisers with native naturalist driver-guides.',
    destinationKey: 'Uganda'
  },
  {
    image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
    badgeTop: 'Exclusive',
    badgeAmount: 'VIP Eco',
    badgeBottom: 'Lodges',
    badgeBg: 'bg-[#0f2e1e]',
    badgeText: 'text-white',
    badgeBorder: 'border-[#FAF7EE]',
    ringBorder: 'border-[#FAF7EE]/60',
    title: '2027 Rwanda & Primates',
    pillHighlight: 'Volcanoes Gorillas & VIP Eco-Lodges',
    pillSubtext: 'From $2,450 · Handcrafted',
    caption: 'Handcrafted retreats overlooking dramatic volcanic caldera ridges and misty rainforests.',
    destinationKey: 'Rwanda'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onSearchTours
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  // Auto-advance hero carousel every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTours({
      destination: destination || 'All',
      style: 'All',
      duration: departureDate || 'All'
    });
    onNavigate('tours', destination || undefined);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-white text-[#151713]">
      {/* HERO VISUAL CONTAINER (Bright, Vivid, Sunlit Scenery) */}
      <div className="relative h-[560px] sm:h-[640px] lg:h-[720px] w-full overflow-hidden flex items-center justify-center bg-neutral-100">
        {/* Full-bleed scenery background image with smooth crossfade and natural brightness */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-108 contrast-105 saturate-125"
            />
          </div>
        ))}

        {/* Minimal luminous gradient overlay only behind text for crisp legibility without darkening photos */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

        {/* Left Arrow Navigation */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-black/25 transition-all cursor-pointer backdrop-blur-xs"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-10 h-10 stroke-[2] drop-shadow-md" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={handleNextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-black/25 transition-all cursor-pointer backdrop-blur-xs"
          aria-label="Next slide"
        >
          <ChevronRight className="w-10 h-10 stroke-[2] drop-shadow-md" />
        </button>

        {/* Centered Hero Content Stack */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pb-12 sm:pb-16">
          {/* 1. Animated Rotating Promotion Circle Badge with Dynamic Color Transition */}
          <div className="relative mb-4 sm:mb-6 group">
            {/* Outer continuously rotating dashed luxury seal ring */}
            <div
              className={`absolute -inset-2.5 rounded-full border-2 border-dashed ${activeSlide.ringBorder} animate-[spin_25s_linear_infinite] transition-colors duration-700 pointer-events-none`}
            />

            {/* Inner dynamic color stamp circle */}
            <div
              className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full ${activeSlide.badgeBg} ${activeSlide.badgeText} flex flex-col items-center justify-center text-center shadow-2xl border-2 ${activeSlide.badgeBorder} p-3.5 transition-all duration-700 transform hover:scale-105`}
            >
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider leading-none">
                {activeSlide.badgeTop}
              </span>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-black leading-tight my-1 tracking-tight">
                {activeSlide.badgeAmount}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-none opacity-90">
                {activeSlide.badgeBottom}
              </span>
            </div>
          </div>

          {/* 2. Serif Hero Headline (Changes with slide) */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] mb-4 sm:mb-6">
            {activeSlide.title}
          </h1>

          {/* 3. Deep Ugandan Forest Emerald Pill: Compelling Destination Benefit + Price Tag */}
          <button
            onClick={() => onNavigate('destinations', activeSlide.destinationKey.toLowerCase())}
            className="group bg-[#16422b] hover:bg-[#103321] text-white px-7 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-2xl flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 transition-all transform hover:scale-102 cursor-pointer border border-white/25"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-100 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FAF7EE]" />
              <span>{activeSlide.pillHighlight}</span>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {activeSlide.pillSubtext}
            </span>
          </button>

          {/* 4. Fine Caption (Enlarged for high readability) */}
          <p className="text-sm sm:text-base text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-2xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed">
            {activeSlide.caption}
          </p>

          {/* 5. Book Now Button (Warm Luxury Cream) */}
          <button
            onClick={() => onOpenTailorTrip(activeSlide.title)}
            className="px-8 sm:px-10 py-3 bg-[#FAF7EE] hover:bg-white text-[#16422b] border border-white/40 text-xs font-extrabold uppercase tracking-widest rounded shadow-xl transition-all active:scale-95 cursor-pointer mb-8"
          >
            Book Now
          </button>

          {/* 6. Dash/Dots Carousel Indicator at Bottom */}
          <div className="flex items-center justify-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all rounded-full cursor-pointer ${
                  i === currentSlide ? 'w-8 h-1 bg-white shadow-md' : 'w-2 h-1 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DOCKED "Search for a trip" WIDGET (Fully Functional) */}
      <div className="relative max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12 z-30">
        <div className="bg-white rounded-lg shadow-xl border border-neutral-200 p-4 sm:p-5">
          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center"
          >
            {/* Left: Search for a trip text in Ugandan Forest Green */}
            <div className="md:col-span-3 text-center md:text-left pr-2">
              <span className="font-serif-luxury text-2xl font-bold text-[#16422b] block leading-tight">
                Search
              </span>
              <span className="font-serif-luxury text-lg text-neutral-800 block leading-tight">
                for a trip
              </span>
            </div>

            {/* Field 1: Select destination (Interactive & Functional) */}
            <div className="md:col-span-3 relative">
              <div className="flex items-center border border-neutral-300 rounded px-3 py-2.5 bg-white hover:border-[#16422b] transition-colors">
                <MapPin className="w-4 h-4 text-[#16422b] mr-2 shrink-0" />
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs font-medium text-neutral-800 bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select destination</option>
                  <option value="Group Tours">Group Tours (Guaranteed Departures)</option>
                  <option value="Uganda">Uganda (Gorillas & Chimps)</option>
                  <option value="Kenya">Kenya (Masai Mara & Amboseli)</option>
                  <option value="Tanzania">Tanzania (Serengeti & Crater)</option>
                  <option value="Rwanda">Rwanda (Volcanoes Primates)</option>
                  <option value="Zanzibar">Zanzibar & Coast</option>
                  <option value="Zambia">Zambia & Victoria Falls</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-1 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Select departure date (Interactive & Functional) */}
            <div className="md:col-span-3 relative">
              <div className="flex items-center border border-neutral-300 rounded px-3 py-2.5 bg-white hover:border-[#16422b] transition-colors">
                <Calendar className="w-4 h-4 text-[#16422b] mr-2 shrink-0" />
                <select
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full text-xs font-medium text-neutral-800 bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select departure date</option>
                  <option value="2026-Q1">Jan – Mar 2026 (Dry Season)</option>
                  <option value="2026-Q2">Apr – Jun 2026 (Green Season)</option>
                  <option value="2026-Q3">Jul – Sep 2026 (Peak Migration)</option>
                  <option value="2026-Q4">Oct – Dec 2026 (Prime Wildlife)</option>
                  <option value="2027">All 2027 Departures</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-1 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* Right: FIND MY TRIP Button (Deep Ugandan Forest Green) */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                Find My Trip
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CONTACT US BAR (Deep Ugandan Forest Green with Warm Luxury Cream button) */}
      <div className="max-w-5xl mx-auto px-4 mt-6 sm:mt-8">
        <div className="bg-[#16422b] rounded-lg p-5 sm:p-6 shadow-md text-white flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left: Contact Us + Subtext */}
          <div className="text-center md:text-left">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
              Contact Us
            </h3>
            <p className="text-xs text-white/95 mt-0.5">
              Questions? Call our Kampala wildlife safari concierges directly.
            </p>
          </div>

          {/* Right: Phone + Vertical divider + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="tel:+256789164360"
              className="flex items-center gap-2 text-white hover:text-[#FAF7EE] transition-colors"
            >
              <Phone className="w-5 h-5 fill-current text-[#FAF7EE]" />
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide">
                +256 789 164 360
              </span>
            </a>

            <div className="hidden sm:block h-8 w-[1px] bg-white/30" />

            <button
              onClick={() => onOpenTailorTrip()}
              className="px-6 py-2.5 bg-[#FAF7EE] hover:bg-white text-[#16422b] border border-white/40 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              Send An Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
