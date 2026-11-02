import React from 'react';
import { PageView } from '../types';

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
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
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
        {/* Header (Exact match: Left title with copper accent line, right paragraph) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-16">
          <div className="md:max-w-md">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713] leading-tight">
              Find your <br className="hidden sm:inline" />
              dream vacation in...
            </h2>
            <div className="w-16 h-1 bg-[#16422b] mt-4 rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed pt-1">
            We bring everywhere alive with tours that cover and look beyond the highlights: revealing hidden gems and offering cultural encounters that build into multi-faceted and compelling travel experiences.
          </p>
        </div>

        {/* 6 Destination Cards Grid (Exact match: 3 columns x 2 rows, centered white serif title, clean photo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATION_CARDS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.id)}
              className="group relative h-[380px] sm:h-[440px] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Photo */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-105 contrast-105 saturate-120"
              />

              {/* Subtle Vignette for Text Legibility */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

              {/* Centered Large White Serif Destination Name */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide drop-shadow-md">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
