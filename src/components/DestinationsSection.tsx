import React from 'react';
import { PageView } from '../types';
import { ArrowRight } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destId: string) => void;
  onNavigate: (page: PageView) => void;
}

interface DestinationCard {
  id: string;
  name: string;
  image: string;
}

const DESTINATION_CARDS: DestinationCard[] = [
  {
    id: 'uganda',
    name: 'Uganda',
    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
  },
  {
    id: 'kenya',
    name: 'Kenya',
    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar & Coast',
    image: '/src/assets/images/zanzibar_swimming_snorkeling_1794315665581.jpg'
  },
  {
    id: 'zambia',
    name: 'Zambia & Falls',
    image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
  }
];

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#151713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header (Left title with emerald accent line, right paragraph) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 sm:mb-12">
          <div className="md:max-w-md">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713] leading-tight">
              Find your <br className="hidden sm:inline" />
              dream vacation in...
            </h2>
            <div className="w-16 h-1 bg-[#16422b] mt-4 rounded-full" />
          </div>

          <div className="max-w-xl">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed pt-1">
              Every corner of East Africa has its own magic. From tracking mountain gorillas in Uganda to watching wildlife across the open plains of the Serengeti and unwinding on the white sands of Zanzibar, we help you discover the real Africa through authentic journeys made just for you.
            </p>
          </div>
        </div>

        {/* 6 Destination Cards Grid (Clean imagery and large centered destination name - Natural & Fresh) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATION_CARDS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.id)}
              className="group relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#16422b]"
            >
              {/* Natural, Fresh Background Photo (no artificial golden saturation) */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Natural Subtle Vignette for Text Legibility without discoloration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent group-hover:from-black/85 group-hover:via-black/35 transition-colors" />

              {/* Centered Large White Serif Destination Name without golden tint */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white drop-shadow-md group-hover:scale-102 transition-transform">
                  {dest.name}
                </h3>
              </div>

              {/* Bottom CTA Bar on Hover (Clean white & forest green, no amber/gold layer) */}
              <div className="absolute bottom-5 left-4 right-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/30 group-hover:bg-[#16422b] group-hover:border-emerald-600 transition-all shadow-sm">
                  <span>Explore Safaris</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
