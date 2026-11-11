import React, { useState } from 'react';
import { TourPackage } from '../data/toursData';
import { PageView } from '../types';
import {
  CheckCircle2,
  ChevronDown,
  Share2,
  Printer,
  Star,
  ArrowRight
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
  onInquire
}) => {
  const [openDays, setOpenDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [shareCopied, setShareCopied] = useState(false);

  const toggleDay = (dayNum: number) => {
    if (openDays.includes(dayNum)) {
      setOpenDays(openDays.filter(d => d !== dayNum));
    } else {
      setOpenDays([...openDays, dayNum]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: tour.title,
          text: tour.subtitle,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2500);
      }
    } catch {
      navigator.clipboard?.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const galleryImages = [
    tour.coverImage,
    '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
  ];

  // Simple, practical packing checklist
  const PACKING_ITEMS = [
    {
      title: 'Comfortable Hiking Footwear',
      description: 'Sturdy, broken-in walking shoes or trail boots with good grip for nature trails.'
    },
    {
      title: 'Lightweight Weather Protection',
      description: 'Rain jacket or waterproof poncho, plus a light sweater or fleece for cool mornings and evenings.'
    },
    {
      title: 'Sun & Insect Protection',
      description: 'Insect repellent, sunscreen, sunglasses, and a sun hat.'
    },
    {
      title: 'Comfortable Safari Clothing',
      description: 'Neutral-colored clothing (khaki, beige, green) and lightweight long-sleeve shirts and trousers for evenings.'
    },
    {
      title: 'Camera & Power Bank',
      description: 'Your camera or phone with extra memory, charger, and a power bank for game drives.'
    },
    {
      title: 'Passport & Health Card',
      description: 'Valid passport and official Yellow Fever vaccination card.'
    },
    {
      title: 'Small Daypack',
      description: 'A light backpack for your drinking water, snacks, binoculars, and personal items during daily drives.'
    },
    {
      title: 'Light Gloves',
      description: 'Simple gloves for walking through forest vegetation during tracking.'
    }
  ];

  return (
    <div className="bg-white text-[#151713] min-h-screen">
      {/* 1. HERO BANNER (Simple: photo, title, subtitle — no back button) */}
      <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105 saturate-115"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            {tour.title}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-xl mx-auto">
            {tour.subtitle}
          </p>
        </div>
      </div>

      {/* 2. MAIN TOUR OVERVIEW (Left description + Right photos + Book Button) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {tour.durationDays} Days Safari
              </span>

              {/* Working Print & Share Buttons */}
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hover:text-[#16422b] flex items-center gap-1 cursor-pointer transition-colors"
                  title="Print Safari Itinerary"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <span className="text-neutral-300">|</span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="hover:text-[#16422b] flex items-center gap-1 cursor-pointer transition-colors"
                  title="Share Trip"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{shareCopied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] tracking-tight">
              {tour.title}
            </h2>

            {/* Overview Narrative */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed pt-1 font-normal">
              {tour.overview}
            </p>

            {/* Route Breakdown */}
            <div className="pt-2 text-xs sm:text-sm text-neutral-600 font-medium">
              <span className="text-neutral-900 font-bold">Route: </span>
              <span>{tour.destinations.join(' ~ ')}</span>
            </div>

            {/* Book Button #2 */}
            <div className="pt-4">
              <button
                onClick={() => onInquire(tour)}
                className="px-6 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book This Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo Collage */}
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
              <div className="h-32 rounded-xl overflow-hidden shadow-sm border border-neutral-200">
                <img
                  src={galleryImages[2]}
                  alt="Safari scenery"
                  className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-115 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. DAILY ITINERARY (Clean and simple) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-neutral-200">
        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-6">
          Daily Safari Itinerary
        </h2>

        {/* Days List */}
        <div className="space-y-4">
          {tour.itinerary.map((d) => {
            const isOpen = openDays.includes(d.day);

            return (
              <div
                key={d.day}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleDay(d.day)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/60 transition-colors gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-neutral-300 flex items-center justify-center font-bold text-xs text-[#16422b] shrink-0">
                      {d.day}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#16422b] block">
                        {d.location}
                      </span>
                      <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#151713]">
                        {d.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                    isOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600 leading-relaxed bg-[#FAF7EE]/20">
                    <p className="pt-2">{d.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. TRIP PREPARATION ADVICE (Simple list, not cards) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-neutral-200">
        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-2">
          Trip Preparation Advice
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mb-6">
          Things you need to carry to have a comfortable and successful safari:
        </p>

        <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
          {PACKING_ITEMS.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-[#FAF7EE]/50 p-3.5 rounded-lg border border-neutral-200/70">
              <CheckCircle2 className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-900 font-bold">{item.title}:</strong>{' '}
                <span className="text-neutral-600">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 6. WHAT OUR TRAVELERS SAY (Reviews) + Book Button #3 */}
      <div className="py-12 sm:py-16 bg-[#FAF7EE] border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-1">
              What our travelers say
            </h2>
            <p className="text-xs text-neutral-500">
              Feedback from visitors who traveled with Fifty4 Safaris
            </p>
          </div>

          {/* 3 Simple Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-10">
            {[
              {
                name: 'Natalie Chiem',
                initial: 'N',
                avatarBg: 'bg-orange-500',
                time: '29 days ago',
                text: 'We were a family group traveling in Uganda. The itinerary was well organized, and our driver-guide was phenomenal. He made sure everyone felt safe and welcomed throughout.'
              },
              {
                name: 'Rasheem',
                initial: 'R',
                avatarBg: 'bg-emerald-700',
                time: '3 months ago',
                text: 'We enjoyed hiking the hills and exploring the lush green with our tour guide Lorna—she is such a lovely, caring soul. She kept our spirits high on every trail and made the whole journey feel authentic and joyful.'
              },
              {
                name: 'Irene',
                initial: 'I',
                avatarBg: 'bg-teal-700',
                time: '4 months ago',
                text: 'We truly enjoyed every moment, had so much fun, and surely recommend Fifty4 Safaris! Reaching Murchison Falls and the evening wildlife game drives gave us memories we will cherish forever.'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`w-8 h-8 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-2xs`}>
                      {rev.initial}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-900 block leading-tight">{rev.name}</span>
                      <span className="text-[10px] text-neutral-400">{rev.time}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {rev.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Book Button #3 (Final clean action) */}
          <div className="text-center pt-4">
            <button
              onClick={() => onInquire(tour)}
              className="px-8 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Book This Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
