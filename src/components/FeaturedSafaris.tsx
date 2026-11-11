import React, { useState } from 'react';
import { TourPackage } from '../data/toursData';
import { PageView } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Sparkles, Clock, Calendar } from 'lucide-react';

interface FeaturedSafarisProps {
  tours: TourPackage[];
  onSelectTour: (tourId: string) => void;
  onNavigate: (page: PageView) => void;
  onQuickInquire: (tour: TourPackage) => void;
}

export const FeaturedSafaris: React.FC<FeaturedSafarisProps> = ({
  tours,
  onSelectTour
}) => {
  const [startIndex, setStartIndex] = useState(0);

  // Curated popular tours matching screenshot with rich hover metadata
  const POPULAR_TOURS = [
    {
      id: 'gorillas-savannah-uganda',
      title: 'Classic Gorillas & Savannah',
      duration: '10 days / 9 nights',
      badge: 'Uganda Bestseller',
      image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      description: 'The premier East African safari circuit: intimate mountain gorilla tracking in Bwindi Impenetrable Forest, savannah game drives in Queen Elizabeth, and Kazinga boat cruises.',
      highlights: [
        'Guaranteed UWA Mountain Gorilla Permit included',
        'Ishasha tree-climbing lions & Kazinga Channel wildlife cruise',
        'Chimpanzee tracking in Kibale tropical rainforest',
        'Private 4x4 Land Cruiser with pop-up photography roof'
      ],
      season: 'Best: Jun–Sep & Dec–Feb'
    },
    {
      id: 'serengeti-mara-migration',
      title: 'Timeless Serengeti & Mara',
      duration: '12 days / 11 nights',
      badge: 'Great Migration',
      image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
      description: 'Witness millions of wildebeest and zebras traverse the vast plains of Serengeti and Masai Mara, with private access to prime river crossing points.',
      highlights: [
        'Front-row mobile tented camps near dramatic river crossings',
        'Ngorongoro Crater descent for dense Big Five wildlife',
        'Daily morning and sunset savannah photography drives',
        'Scenic bush flights between Serengeti and Nairobi'
      ],
      season: 'Peak Season: Jul–Oct'
    },
    {
      id: 'queen-elizabeth-wildlife',
      title: 'Tree-Climbing Lions Safari',
      duration: '8 days / 7 nights',
      badge: 'Wildlife Focus',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      description: 'Discover Queen Elizabeth National Park’s rare fig tree-climbing lions, hundreds of hippos on Kazinga Channel, and misty volcanic crater rims beneath the Rwenzori Mountains.',
      highlights: [
        'Ishasha sector fig trees famous for sleeping lions',
        'Boat safari along Kazinga Channel past elephants & hippos',
        'Kyambura Gorge "Valley of Apes" chimpanzee tracking',
        'Scenic crater lake drives and salt lake tours'
      ],
      season: 'Year-Round Wildlife Viewing'
    },
    {
      id: 'rwanda-primate-sanctuary',
      title: 'Rwanda Volcanoes & Primates',
      duration: '7 days / 6 nights',
      badge: 'Ultra Luxury',
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      description: 'Exclusive high-end primate journey beneath the Virunga calderas, staying in ultra-luxury eco-lodges with personal butler service and private helicopter transfers.',
      highlights: [
        'Volcanoes National Park mountain gorilla family tracking',
        'Golden monkeys tracking in Virunga bamboo slopes',
        'Nyungwe National Park suspension canopy walkway',
        'Ultra-luxury lodge verandas overlooking volcanic ridges'
      ],
      season: 'Prime: Jun–Sep & Dec–Feb'
    },
    {
      id: 'murchison-nile-falls',
      title: 'Murchison Falls Explorer',
      duration: '6 days / 5 nights',
      badge: 'Classic Explorer',
      image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
      description: 'Uganda’s oldest national park where the mighty River Nile explodes through an 8-meter gorge into the Albert Nile with Rothschild giraffes and rhinos.',
      highlights: [
        'Boat cruise to the thunderous bottom of Murchison Falls',
        'Rothschild giraffes, lions, and leopards on northern savannahs',
        'Ziwa Rhino Sanctuary on-foot rhino tracking on route',
        'Sunset hike to the top of the thunderous falls'
      ],
      season: 'Best: Dec–Feb & Jun–Sep'
    }
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : POPULAR_TOURS.length - 4));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < POPULAR_TOURS.length - 4 ? prev + 1 : 0));
  };

  // Display 4 cards in view
  const visibleTours = POPULAR_TOURS.slice(startIndex, startIndex + 4);
  const displayTours =
    visibleTours.length < 4
      ? [...visibleTours, ...POPULAR_TOURS.slice(0, 4 - visibleTours.length)]
      : visibleTours;

  return (
    <section className="py-16 sm:py-24 bg-white text-[#151713] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header (Left title with Ugandan Forest Green accent line) */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713] leading-tight">
            Our most <br className="hidden sm:inline" />
            popular tours
          </h2>
          <div className="w-16 h-1 bg-[#16422b] mt-4 rounded-full" />
        </div>

        {/* Carousel Container with Side Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-200 items-center justify-center text-neutral-700 hover:text-[#16422b] hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous tours"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-200 items-center justify-center text-neutral-700 hover:text-[#16422b] hover:scale-105 transition-all cursor-pointer"
            aria-label="Next tours"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 4 Portrait Cards Grid (Exact match from screenshot: clean imagery, bottom duration & price in resting state + rich informative hover state) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {displayTours.map((tour, idx) => (
              <div
                key={`${tour.id}-${idx}`}
                onClick={() => onSelectTour(tour.id)}
                className="group relative h-[460px] sm:h-[500px] rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end bg-neutral-900"
              >
                {/* Bright, Vibrant High-Clarity Image */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-108 contrast-105 saturate-125"
                />

                {/* Resting State: Subtle Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Resting Explore Tour Card (Floats neatly inside the general card with margins on desktop) */}
                <div className="relative z-10 m-3 sm:m-3.5 p-4 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white transition-opacity duration-300 group-hover:opacity-0 shadow-lg">
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white mb-2 leading-snug drop-shadow-md">
                    {tour.title}
                  </h3>

                  <div className="flex items-center justify-between gap-2 text-xs text-white/95 pt-2.5 border-t border-white/20">
                    <span className="font-semibold text-xs sm:text-sm drop-shadow-md tracking-wide whitespace-nowrap shrink-0">
                      {tour.duration}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTour(tour.id);
                      }}
                      className="font-bold text-xs text-[#16422b] bg-[#FAF7EE] hover:bg-white px-2.5 sm:px-3 py-1.5 rounded shadow-md border border-white/40 flex items-center gap-1 cursor-pointer transition-all active:scale-95 whitespace-nowrap shrink-0"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap leading-none">
                        Explore Tour
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Interactive Hover Reveal: Floats within the general card with margin so it never touches the outer edge */}
                <div className="absolute inset-2.5 sm:inset-3 z-20 bg-[#16422b]/95 p-5 sm:p-6 rounded-lg flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs shadow-2xl border border-white/15">
                  {/* Top: Badge + Title + Description */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16422b] bg-[#FAF7EE] px-2.5 py-1 rounded shadow-xs">
                        {tour.badge}
                      </span>
                      <span className="text-[11px] text-white/90 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{tour.duration}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {tour.title}
                    </h3>

                    <p className="text-xs text-white/90 leading-relaxed mb-3 font-light line-clamp-3">
                      {tour.description}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-white/20">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-300 block">
                        Included Highlights:
                      </span>
                      {tour.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-white/95">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Season + Button CTA */}
                  <div className="pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] text-white/90 font-medium">Bespoke Guided Itinerary</span>
                      <span className="text-[10px] text-white bg-white/15 px-2 py-0.5 rounded flex items-center gap-1 border border-white/15">
                        <Calendar className="w-3 h-3 text-emerald-300" />
                        <span>{tour.season}</span>
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTour(tour.id);
                      }}
                      className="w-full py-2 bg-[#FAF7EE] hover:bg-white text-[#16422b] border border-white/30 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                    >
                      <span>View Full Safari Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
