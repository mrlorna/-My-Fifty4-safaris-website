import React, { useState, useEffect, useCallback } from 'react';
import { PageView } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Camera,
  Calendar,
  Compass
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenTailorTrip: () => void;
}

export type GalleryCategory =
  | 'All'
  | 'National Parks'
  | 'Day Activities'
  | 'Gorillas & Wildlife'
  | 'Mountains & Hiking'
  | 'Coastal & Beaches'
  | 'Landmarks & Culture';

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  location: string;
  category: GalleryCategory;
  country: string;
  tag?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // 1. Murchison Falls - Roaring Devil's Cauldron (Real Photo)
  {
    id: 'murchison-falls',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.44_d27ead9b.jpeg',
    title: 'Murchison Falls — Overlooking the Roaring Devil’s Cauldron',
    location: 'Murchison Falls National Park · Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Thunderous Falls'
  },
  // 2. Kazinga Channel Elephant Family & Calves (Real Photo)
  {
    id: 'queen-elizabeth-kazinga',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.24_b621a8a6.jpeg',
    title: 'Kazinga Channel Boat Safari — Wild Elephant Family & Calves',
    location: 'Queen Elizabeth National Park · Western Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Elephant Family'
  },
  // 3. Kasese Rwenzori Alpine Summit Ridge with Uganda Flag (Real Photo)
  {
    id: 'kasese-rwenzori-hiking',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.33_146d2191.jpeg',
    title: 'Rwenzori Mountains of the Moon — High Alpine Summit Trek',
    location: 'Rwenzori Mountains National Park · Kasese, Uganda',
    category: 'Mountains & Hiking',
    country: 'Uganda',
    tag: 'Summit Ridge'
  },
  // 4. Mgahinga Gorilla National Park Sign with Traveler (Real Photo)
  {
    id: 'mgahinga-gorilla-park',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.25__1__c8e2246c.jpeg',
    title: 'Mgahinga Gorilla National Park — Where Gold Meets Silver',
    location: 'Mgahinga Gorilla National Park · Kisoro, Uganda',
    category: 'Gorillas & Wildlife',
    country: 'Uganda',
    tag: 'Gorilla Trekking'
  },
  // 5. Rwanda Nyungwe Suspension Canopy Walkway (Real Photo)
  {
    id: 'rwanda-nyungwe-canopy',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.28_4acce011.jpeg',
    title: 'Nyungwe National Park Suspension Canopy Walkway',
    location: 'Nyungwe Primeval Rainforest · Rwanda',
    category: 'National Parks',
    country: 'Rwanda',
    tag: 'Rainforest Canopy'
  },
  // 6. Fifty4 Safaris 4x4 Cruiser Mountain Road Expedition (Real Photo)
  {
    id: 'safari-4x4-expeditions',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.27_7c0bed82.jpeg',
    title: 'Fifty4 Safaris 4x4 Cruiser Expedition Across Highland Ridges',
    location: 'Bwindi & Kigezi Highlands · Southwestern Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: '4x4 Expedition'
  },
  // 7. Queen Elizabeth Kasenyi Plains Gateway (Real Photo)
  {
    id: 'queen-elizabeth-kasenyi',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.25_2b8bd904.jpeg',
    title: 'Queen Elizabeth National Park — Kasenyi Plains Gateway',
    location: 'Queen Elizabeth National Park · Western Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Savannah Game Drive'
  },
  // 8. Group Safari Celebration at Murchison Falls Tusker Monument (Real Photo)
  {
    id: 'group-safari-murchison',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.38__1__741c8dd3.jpeg',
    title: 'Group Safari Celebration — Murchison Falls Tusker Monument',
    location: 'Murchison Falls National Park · Uganda',
    category: 'Day Activities',
    country: 'Uganda',
    tag: 'Group Celebration'
  },
  // 9. Lake Mburo & Ankole Long-Horned Cattle Cultural Heritage (Real Photo)
  {
    id: 'lake-mburo-ankole',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.29_353dfbe4.jpeg',
    title: 'Lake Mburo & Ankole Long-Horned Cattle Pastoralist Culture',
    location: 'Lake Mburo & Kiruhura · Western Uganda',
    category: 'Landmarks & Culture',
    country: 'Uganda',
    tag: 'Ankole Culture'
  },
  // 10. Semuliki Sempaya Hot Springs Natural Geysers (Real Photo)
  {
    id: 'semuliki-sempaya-springs',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.20_d54d41b3.jpeg',
    title: 'Semuliki National Park — Sempaya Hot Springs Natural Geysers',
    location: 'Semuliki National Park · Bundibugyo, Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Thermal Geysers'
  },
  // 11. Mabira Forest Canopy Hike & Trekking Group (Real Photo)
  {
    id: 'day-mabira-hike',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.31__1__4b878806.jpeg',
    title: 'Mabira Forest Canopy Hike & Eco-Nature Walking Group',
    location: 'Mabira Central Forest Reserve · Buikwe, Uganda',
    category: 'Day Activities',
    country: 'Uganda',
    tag: 'Forest Hike'
  },
  // 12. Uganda Equator Landmark Experience (Real Photo)
  {
    id: 'day-uganda-equator',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.18_b231b097.jpeg',
    title: 'Uganda Equator Monument — Standing on Two Hemispheres',
    location: 'Kayabwe Equator Point · Masaka Road, Uganda',
    category: 'Day Activities',
    country: 'Uganda',
    tag: 'Equator Line'
  },
  // 13. Bush Lodge Close Wild Elephant Encounter (Real Photo)
  {
    id: 'safari-lodge-wildlife',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.19_ca7d42bb.jpeg',
    title: 'Bush Lodge Living — Close Wild Elephant Encounter',
    location: 'Queen Elizabeth Bush Lodge · Western Uganda',
    category: 'Gorillas & Wildlife',
    country: 'Uganda',
    tag: 'Lodge Wildlife'
  },
  // 14. Kazinga Channel Hippo Pods in Fresh Waters (Real Photo)
  {
    id: 'kazinga-hippo-pods',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.19__1__899aba9b.jpeg',
    title: 'Kazinga Channel Hippo Pods in the Freshwater Channels',
    location: 'Kazinga Channel · Queen Elizabeth National Park, Uganda',
    category: 'Gorillas & Wildlife',
    country: 'Uganda',
    tag: 'Hippo Pods'
  },
  // 15. Rwanda Nyamata Memorial & Historical Heritage (Real Photo)
  {
    id: 'rwanda-nyamata-memorial',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.33__2__7ea993f5.jpeg',
    title: 'Rwanda Historical Memorial & Cultural Heritage Tour',
    location: 'Nyamata Memorial & Kigali · Rwanda',
    category: 'Landmarks & Culture',
    country: 'Rwanda',
    tag: 'Historical Heritage'
  },
  // 16. Traditional Thatched Royal Dome Palace & Kingdom Culture (Real Photo)
  {
    id: 'traditional-heritage-palace',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.28__1__5403221c.jpeg',
    title: 'Traditional Thatched Royal Palace & Kingdom Architecture',
    location: 'Nyanza Royal Heritage & Buganda Kingdom Sites · East Africa',
    category: 'Landmarks & Culture',
    country: 'Uganda',
    tag: 'Royal Architecture'
  },
  // 17. Safari Welcome Dinner & Lodge Hospitality (Real Photo)
  {
    id: 'safari-lodge-dinner',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.13_c6b09cce.jpeg',
    title: 'Safari Welcome Dinner & Lodge Hospitality With Our Guests',
    location: 'Entebbe & Safari Lodges · East Africa',
    category: 'Landmarks & Culture',
    country: 'Uganda',
    tag: 'Safari Hospitality'
  },
  // 18. Murchison Falls Main Entrance Gate & 4x4 Fleet (Real Photo)
  {
    id: 'murchison-gate',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.36_9157f7fe.jpeg',
    title: 'Murchison Falls National Park Main Gate & Safari Land Cruiser',
    location: 'Murchison Falls National Park · Northern Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Park Gate'
  },
  // 19. Nyungwe Forest Canopy Walkway Official Landmark Frame (Real Photo)
  {
    id: 'rwanda-nyungwe-frame',
    url: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.27__2__3de81b61.jpeg',
    title: 'Nyungwe Forest Canopy Walkway Landmark Frame',
    location: 'Nyungwe National Park · Rwanda',
    category: 'Day Activities',
    country: 'Rwanda',
    tag: 'Canopy Walk'
  },
  // 20. Ziwa Rhino Sanctuary (Requested)
  {
    id: 'ziwa-rhinos',
    url: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?auto=format&fit=crop&w=1200&q=80',
    title: 'Ziwa Rhino Sanctuary — On-Foot White Rhino Trekking',
    location: 'Ziwa Rhino Sanctuary · Nakasongola, Uganda',
    category: 'National Parks',
    country: 'Uganda',
    tag: 'Rhino Sanctuary'
  },
  // 21. Rwanda Convention Centre (Requested)
  {
    id: 'rwanda-convention-center',
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    title: 'Rwanda Convention Centre — Iconic Kigali Dome',
    location: 'Kigali City · Rwanda',
    category: 'Landmarks & Culture',
    country: 'Rwanda',
    tag: 'Iconic Architecture'
  },
  // 22. Malindi Sand Dunes Kenya (Requested)
  {
    id: 'malindi-sand-dunes',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    title: 'Malindi Coastal Golden Sand Dunes',
    location: 'Malindi Coast · Kenya',
    category: 'Coastal & Beaches',
    country: 'Kenya',
    tag: 'Coastal Dunes'
  },
  // 23. Mombasa Kenya (Requested)
  {
    id: 'mombasa-kenya',
    url: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80',
    title: 'Historic Mombasa & Fort Jesus Old Town',
    location: 'Mombasa Island · Kenya',
    category: 'Coastal & Beaches',
    country: 'Kenya',
    tag: 'Swahili Coast'
  },
  // 24. Zanzibar Tanzania (Requested)
  {
    id: 'zanzibar-tanzania',
    url: '/src/assets/images/zanzibar_swimming_snorkeling_1794315665581.jpg',
    title: 'Zanzibar — Turquoise Indian Ocean & Marine Snorkeling',
    location: 'Nungwi Beach & Stone Town · Zanzibar, Tanzania',
    category: 'Coastal & Beaches',
    country: 'Tanzania',
    tag: 'Island Paradise'
  },
  // 25. Dar es Salaam Tanzania (Requested)
  {
    id: 'daresalaam-tanzania',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    title: 'Dar es Salaam Coastal Skyline & Indian Ocean Harbor',
    location: 'Dar es Salaam · Tanzania',
    category: 'Coastal & Beaches',
    country: 'Tanzania',
    tag: 'Coastal Metropolis'
  },
  // 26. Volcanoes National Park Rwanda (Requested)
  {
    id: 'rwanda-volcanoes-park',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: 'Volcanoes National Park & Virunga Calderas',
    location: 'Musanze · Volcanoes National Park, Rwanda',
    category: 'National Parks',
    country: 'Rwanda',
    tag: 'Virunga Volcanoes'
  },
  // 27. Akagera National Park Rwanda (Requested)
  {
    id: 'rwanda-akagera-park',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    title: 'Akagera National Park — Savannah Game Drive & Lakes',
    location: 'Akagera National Park · Eastern Rwanda',
    category: 'National Parks',
    country: 'Rwanda',
    tag: 'Big Five Savannah'
  },
  // 28. Jinja White-Water Rafting (Requested)
  {
    id: 'day-jinja-rafting',
    url: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80',
    title: 'Jinja Day Tour — White-Water Rafting & Source of the Nile',
    location: 'River Nile · Jinja, Uganda',
    category: 'Day Activities',
    country: 'Uganda',
    tag: 'Source of the Nile'
  },
  // 29. Kampala City & Crafts Market Tours (Requested)
  {
    id: 'day-market-tours',
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80',
    title: 'Kampala Market Tour — Owino, Nakasero & African Crafts',
    location: 'Nakasero & Owino Markets · Kampala, Uganda',
    category: 'Day Activities',
    country: 'Uganda',
    tag: 'Market Tour'
  },
  // 30. Bwindi Mountain Gorilla Silverback
  {
    id: 'bwindi-gorilla-trekking',
    url: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    title: 'Bwindi Impenetrable Forest — Mountain Gorilla Trekking',
    location: 'Bwindi Impenetrable National Park · Uganda',
    category: 'Gorillas & Wildlife',
    country: 'Uganda',
    tag: 'Mountain Gorillas'
  },
  // 31. Great Migration Serengeti Plains
  {
    id: 'serengeti-migration',
    url: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
    title: 'The Great Migration — Serengeti & Masai Mara Plains',
    location: 'Serengeti Ecosystem · Tanzania & Kenya',
    category: 'Gorillas & Wildlife',
    country: 'Tanzania',
    tag: 'Great Migration'
  }
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenTailorTrip
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [galleryPage, setGalleryPage] = useState<number>(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    'All',
    'National Parks',
    'Day Activities',
    'Gorillas & Wildlife',
    'Mountains & Hiking',
    'Coastal & Beaches',
    'Landmarks & Culture'
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const startIndex = (galleryPage - 1) * itemsPerPage;
  const displayedPhotos = filteredPhotos.slice(startIndex, startIndex + itemsPerPage);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <div className="bg-[#FAF7EE] text-[#151713] min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#16422b] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#16422b] font-semibold">Gallery</span>
        </nav>
      </div>

      {/* 2. Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-8 pt-4 pb-8 text-center">
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
          East Africa Travel Gallery
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
          Explore iconic national parks, gorilla tracking forests, coastal beaches, and exciting day tours across Uganda, Kenya, Tanzania, and Rwanda. Click any picture to view full size.
        </p>
      </header>

      {/* 3. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setGalleryPage(1);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#16422b] text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. PICTURES GALLERY GRID WITH PAGINATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayedPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(startIndex + index)}
              className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-900 group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-100 contrast-105"
              />

              {/* Tag pill in top left */}
              {photo.tag && (
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-md">
                    {photo.tag}
                  </span>
                </div>
              )}

              {/* Hover overlay with title and location */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-white">
                <div className="flex justify-end">
                  <span className="p-1.5 rounded-full bg-black/50 backdrop-blur-xs text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-serif-luxury font-bold text-xs sm:text-sm leading-tight drop-shadow-sm">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] text-emerald-300 font-light mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls after 20 pictures */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setGalleryPage((p) => Math.max(1, p - 1))}
              disabled={galleryPage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                galleryPage === 1
                  ? 'text-neutral-400 bg-neutral-100 cursor-not-allowed'
                  : 'text-[#16422b] bg-white border border-neutral-200 hover:bg-neutral-100 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setGalleryPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    galleryPage === pageNum
                      ? 'bg-[#16422b] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={() => setGalleryPage((p) => Math.min(totalPages, p + 1))}
              disabled={galleryPage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                galleryPage === totalPages
                  ? 'text-neutral-400 bg-neutral-100 cursor-not-allowed'
                  : 'text-[#16422b] bg-white border border-neutral-200 hover:bg-neutral-100 cursor-pointer'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* 5. Custom Inquiry Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-16 text-center">
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-xs">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
            Inspired by these destinations?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-6">
            Let our safari team craft a personalized itinerary including your favorite national parks, gorilla treks, or day activities.
          </p>
          <button
            onClick={onOpenTailorTrip}
            className="px-7 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs active:scale-95"
          >
            Plan Your Safari
          </button>
        </div>
      </section>

      {/* 6. FULL-SCREEN PICTURE LIGHTBOX */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white max-w-7xl w-full mx-auto pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-neutral-400 font-mono">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </span>

            <button
              onClick={handleCloseLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Container with Arrow Nav */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto overflow-hidden py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].url}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Title & Details */}
          <div
            className="max-w-4xl w-full mx-auto text-center text-white pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif-luxury text-base sm:text-lg font-bold">
              {filteredPhotos[lightboxIndex].title}
            </h3>
            <p className="text-xs text-emerald-300 font-light mt-0.5">
              {filteredPhotos[lightboxIndex].location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
