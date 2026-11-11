import React, { useState } from 'react';
import {
  X,
  Download,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Share2,
  CheckCircle,
  Sparkles,
  Phone,
  Compass,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTailorTrip: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenTailorTrip
}) => {
  const [activePage, setActivePage] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const BROCHURE_SECTIONS = [
    {
      title: 'Fifty4 Safaris 2026/2027 Grand Catalog',
      subtitle: 'The Premier Safari Portfolio for East & Greater Africa',
      badge: 'Official Release',
      cover: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
      contentTitle: 'Welcome to Fifty4 Safaris',
      body: 'Fifty4 Safaris was founded with a unified ambition: to open up the authentic magic of Africa’s 54 sovereign nations, beginning with the wildlife-dense heartland of Uganda, Kenya, Tanzania, and Rwanda. Every journey we design pairs direct local operator access with private customized 4x4 vehicles and handpicked eco-lodges.',
      stats: [
        { label: 'Wildlife Countries', value: '6+' },
        { label: 'Guaranteed Permits', value: '100%' },
        { label: 'Group Max Cap', value: '6 Guests' },
        { label: 'Native Rangers', value: 'Local Only' }
      ],
      highlights: [
        'Direct Uganda Wildlife Authority (UWA) gorilla permit allocations',
        'Private 4x4 Land Cruisers with 360-degree pop-up photography roofs',
        'Front-row mobile tented camps for the Great Wildebeest Migration',
        '24/7 dedicated Kampala operations desk & round-the-clock ground support'
      ]
    },
    {
      title: 'Uganda: Primates & The Pearl of Africa',
      subtitle: 'Bwindi Gorillas, Kibale Chimpanzees & Kazinga Channel',
      badge: 'Flagship Destination',
      cover: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
      contentTitle: 'Intimate Primate Encounters in the Ancient Rainforest',
      body: 'Home to over half of the planet’s surviving wild mountain gorillas, Uganda provides one of Earth’s most emotional natural encounters. Trek through the misty ridges of Bwindi Impenetrable Forest and Mgahinga, lock eyes with a 400-pound Silverback, and cruise along Queen Elizabeth’s Kazinga Channel past thousands of hippos and elephants.',
      stats: [
        { label: 'Gorilla Families', value: '24 Habituated' },
        { label: 'Bird Species', value: '1,060+' },
        { label: 'Daily Visitor Cap', value: '8 Per Family' },
        { label: 'Min Age', value: '15 Years' }
      ],
      highlights: [
        'Bwindi Impenetrable Forest mountain gorilla habituation & tracking',
        'Ishasha tree-climbing lions sleeping on ancient fig branches',
        'Kibale National Park chimpanzee habituation experience',
        'Murchison Falls riverboat expedition to the thunderous Nile gorge'
      ]
    },
    {
      title: 'Tanzania & Kenya: The Great Migration',
      subtitle: 'Serengeti, Masai Mara & The Lost World of Ngorongoro',
      badge: 'Savannah Spectacle',
      cover: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
      contentTitle: 'Front-Row View of Nature’s Greatest Wildlife Theatre',
      body: 'Over 1.5 million wildebeest and zebras traverse the endless savannah horizons of the Serengeti and Masai Mara. Our mobile luxury tented camps move dynamically with the herds, granting Fifty4 travelers front-row sunrise access to high-drama river crossings and big cat predator action.',
      stats: [
        { label: 'Migrating Animals', value: '1.8 Million' },
        { label: 'Ngorongoro Depth', value: '600 Meters' },
        { label: 'Serengeti Lions', value: '3,000+' },
        { label: 'River Crossings', value: 'Jul – Oct' }
      ],
      highlights: [
        'Private luxury tented camps situated along the Mara River corridor',
        'Descent into Ngorongoro Crater for endangered black rhino sightings',
        'Hot-air balloon sunrise flights with champagne bush breakfast',
        'Exclusive private community conservancy night game drives'
      ]
    },
    {
      title: 'Rwanda, Zambia & Zanzibar Extensions',
      subtitle: 'Volcanic Calderas, Walking Safaris & Spice Shores',
      badge: 'Bespoke Circuits',
      cover: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
      contentTitle: 'Handcrafted Safari Combinations',
      body: 'Elevate your journey with our seamless multi-country combinations. Helicopter directly to Rwanda’s ultra-luxury Singita and One&Only volcanic sanctuaries, track leopards on foot in Zambia’s South Luangwa, or decompress on the turquoise white-sand beaches of Zanzibar.',
      stats: [
        { label: 'Direct Flight Time', value: '1.5 Hours' },
        { label: 'Zanzibar Reefs', value: 'UNESCO Zone' },
        { label: 'Walking Guides', value: 'Level 3 Pro' },
        { label: 'Beach Villas', value: '5-Star Ocean' }
      ],
      highlights: [
        'Rwanda Volcanoes National Park golden monkeys & gorilla treks',
        'South Luangwa walking safaris with legendary Zambian bush scouts',
        'Stone Town private historical spice tours and dhow sunset sailing',
        'Custom air-charter logistics between Entebbe, Nairobi, and Zanzibar'
      ]
    }
  ];

  const currentSection = BROCHURE_SECTIONS[activePage];

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header Bar */}
        <div className="bg-[#16422b] text-white px-6 py-4 flex items-center justify-between border-b border-[#FAF7EE]/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF7EE] text-[#16422b] flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wide">
                Fifty4 Safaris · Interactive Brochure
              </h2>
              <span className="text-[11px] text-[#FAF7EE]/80 uppercase tracking-wider block">
                Official 2026/2027 Safari Collection
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF7EE] hover:bg-white text-[#16422b] text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close brochure"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Tabs Bar */}
        <div className="bg-[#FAF7EE] px-6 py-2.5 border-b border-neutral-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {BROCHURE_SECTIONS.map((sec, idx) => (
            <button
              key={idx}
              onClick={() => setActivePage(idx)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                activePage === idx
                  ? 'bg-[#16422b] text-white shadow-xs'
                  : 'text-neutral-700 hover:bg-white hover:text-[#16422b]'
              }`}
            >
              <span>Chapter {idx + 1}: {sec.badge}</span>
            </button>
          ))}
        </div>

        {/* Brochure Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Magazine-Style Visual Cover */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-neutral-200 group">
              <img
                src={currentSection.cover}
                alt={currentSection.title}
                className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-120 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF7EE] bg-[#16422b]/90 px-2 py-0.5 rounded inline-block mb-1.5">
                  {currentSection.badge}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold leading-tight drop-shadow-md">
                  {currentSection.title}
                </h3>
                <p className="text-xs text-white/90 mt-1">
                  {currentSection.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Storytelling & Inclusions */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16422b]">
                  {currentSection.subtitle}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mt-1 leading-snug">
                  {currentSection.contentTitle}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-2.5">
                  {currentSection.body}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-neutral-200">
                {currentSection.stats.map((st, i) => (
                  <div key={i} className="text-center p-2 rounded bg-[#FAF7EE]">
                    <span className="font-serif-luxury text-lg sm:text-xl font-extrabold text-[#16422b] block">
                      {st.value}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-neutral-500">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block">
                  Signature Inclusions in This Collection:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSection.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Footer */}
        <div className="bg-[#FAF7EE] px-6 py-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePage((prev) => (prev > 0 ? prev - 1 : BROCHURE_SECTIONS.length - 1))}
              className="px-3.5 py-2 rounded-md bg-white border border-neutral-300 hover:border-[#16422b] text-neutral-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-neutral-500 px-2 font-medium">
              {activePage + 1} of {BROCHURE_SECTIONS.length}
            </span>

            <button
              onClick={() => setActivePage((prev) => (prev < BROCHURE_SECTIONS.length - 1 ? prev + 1 : 0))}
              className="px-3.5 py-2 rounded-md bg-white border border-neutral-300 hover:border-[#16422b] text-neutral-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20please%20send%20me%20your%20complete%202026%2F2027%20safari%20brochure%20and%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenTailorTrip();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-md bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
            >
              <span>Inquire This Safari</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
