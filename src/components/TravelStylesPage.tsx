import React from 'react';
import { TRAVEL_STYLES_DATA } from '../data/travelStylesData';
import { PageView } from '../types';
import { CheckCircle, ArrowRight, Compass, Sparkles } from 'lucide-react';

interface TravelStylesPageProps {
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenTailorTrip: () => void;
  onFilterToursByCategory: (category: string) => void;
}

export const TravelStylesPage: React.FC<TravelStylesPageProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onFilterToursByCategory
}) => {
  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-[#151713]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
            Curated Safari Categories
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
                Travel Styles & Experiences
              </h1>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                Every traveler experiences Africa differently. Whether you seek the spiritual intimacy of mountain gorillas, the thundering drama of the Great Migration, or barefoot luxury along the Indian Ocean, discover how Fifty4 Safaris crafts your journey.
              </p>
            </div>
            <button
              onClick={onOpenTailorTrip}
              className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition-colors cursor-pointer shrink-0"
            >
              Plan a Custom Experience
            </button>
          </div>
        </div>

        {/* 9 Travel Styles List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVEL_STYLES_DATA.map((style, index) => (
            <div
              key={style.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#16422b] uppercase tracking-widest">
                    Style 0{index + 1}
                  </span>
                  <Compass className="w-5 h-5 text-[#16422b] group-hover:rotate-45 transition-transform" />
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#151713] mb-3 group-hover:text-[#16422b] transition-colors">
                  {style.name}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {style.shortDescription}
                </p>

                <p className="text-xs text-neutral-700 leading-relaxed mb-5">
                  {style.fullDescription}
                </p>

                <div className="mb-5 p-3 bg-[#FAF7F2] rounded-lg border border-neutral-200 text-xs">
                  <span className="font-bold text-[#151713] block mb-1">Ideal For:</span>
                  <span className="text-neutral-600">{style.idealFor}</span>
                </div>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Hallmark Features
                  </span>
                  {style.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-neutral-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16422b] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onFilterToursByCategory(style.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16422b] hover:text-[#151713] transition-colors cursor-pointer"
                >
                  <span>View Matching Safaris</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
