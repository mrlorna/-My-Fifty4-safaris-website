import React from 'react';
import { PageView } from '../types';
import {
  CheckCircle,
  Eye,
  Target,
  ChevronRight,
  User,
  Heart
} from 'lucide-react';

interface AboutPageProps {
  onOpenTailorTrip: () => void;
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenTailorTrip,
  onNavigate
}) => {
  // Leadership & Team
  const TEAM_MEMBERS = [
    {
      name: 'Racheal Lorna',
      role: 'Lead Tour Guide & Safari Director',
      photo: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_15.30.54_5e6fe3c6.jpeg'
    },
    {
      name: 'Jojo',
      role: 'Tour Operations & Reservations Specialist',
      photo: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_15.30.54__1__009e6a6a.jpeg'
    },
    {
      name: 'Linda',
      role: 'Client Experience Coordinator',
      photo: null
    },
    {
      name: 'Jolly',
      role: 'Safari Guide & Wildlife Specialist',
      photo: null
    }
  ];

  return (
    <div className="bg-[#FAF7EE] text-[#151713] min-h-screen">
      {/* 1. HERO BANNER: SAFARI VAN WITH GUIDE AS IT WAS BEFORE */}
      <div className="relative h-[340px] sm:h-[440px] w-full overflow-hidden flex items-center justify-center bg-neutral-900">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.27_7c0bed82.jpeg"
          alt="Fifty4 Safaris Van with Guide in East Africa"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-md">
            About Fifty4 Safaris
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 mt-3 font-light max-w-2xl mx-auto leading-relaxed">
            Passionate native safari guides and travel planners dedicated to sharing the magic of Africa with you.
          </p>
        </div>
      </div>

      {/* 2. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#16422b] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#16422b] font-semibold">About Us</span>
        </nav>
      </div>

      {/* 3. THE MEANING OF FIFTY4 SAFARIS & OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] leading-tight">
                The Story Behind Fifty4 Safaris
              </h2>
              <div className="w-16 h-1 bg-[#16422b] mt-3 rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              <strong>Fifty4 Safaris</strong> was inspired by Africa’s 54 sovereign nations—a vibrant continent of breathtaking landscapes, diverse wildlife, ancient cultures, and warm, welcoming people. Our name represents our dream to open doors to every corner of this incredible land.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              We started with a simple belief: true travel is about real human connections. It is the thrill of hearing a lion roar across the savannah at dawn, the quiet reverence of meeting a mountain gorilla family in the misty rainforest, and the shared smiles around an evening campfire.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              When you travel with us, you are not just booking a trip; you are joining a family. We listen to what moves you, handpick every stay, and accompany you with guides who grew up on these lands. Whether you are planning your dream bucket-list safari or looking to collaborate with us, our doors and hearts are always open.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-neutral-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Direct Wildlife Permits</h4>
                  <p className="text-[11px] text-neutral-600">Guaranteed gorilla and chimpanzee permits without middlemen.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-neutral-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Native Guide Expertise</h4>
                  <p className="text-[11px] text-neutral-600">Certified local naturalists who know animal tracking by heart.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-neutral-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Custom 4x4 Fleet</h4>
                  <p className="text-[11px] text-neutral-600">Pop-up roofs and guaranteed window seats for prime photography.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-neutral-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#16422b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Care in Every Detail</h4>
                  <p className="text-[11px] text-neutral-600">From airport arrival to farewell dinner, you are fully looked after.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.19_ca7d42bb.jpeg"
                alt="Wild Elephant encounter with Fifty4 Safaris"
                className="w-full h-[440px] object-cover filter brightness-100 contrast-105"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-xl border border-neutral-200 max-w-xs flex items-center gap-3.5">
              <img
                src="/fifty4-lion-symbol.png"
                alt="Fifty4 Safaris Emblem"
                className="h-11 w-auto object-contain shrink-0"
              />
              <div>
                <span className="text-[10px] uppercase font-bold text-[#16422b] block">
                  Fifty4 Safaris
                </span>
                <p className="font-serif-luxury text-xs font-bold text-[#151713] leading-snug">
                  54 countries. Countless ways to discover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIMPLIFIED VISION & MISSION CARDS */}
      <section className="bg-white py-14 sm:py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Vision Card */}
            <div className="bg-[#FAF7EE] p-8 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#16422b] text-white flex items-center justify-center mb-5 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  To connect travelers with the extraordinary diversity of Africa’s 54 countries through thoughtfully planned, life-changing journeys that bring people closer to nature and local cultures.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-neutral-200 text-xs font-bold text-[#16422b]">
                Discover Africa · Protect Its Future
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#FAF7EE] p-8 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#16422b] text-white flex items-center justify-center mb-5 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  To deliver safe, authentic, and unforgettable safari experiences while protecting wildlife habitats, supporting local communities, and offering genuine African hospitality.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-neutral-200 text-xs font-bold text-[#16422b]">
                Authentic Guides · Personal Hospitality
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM (Plain White Cards, Clean Presentation, No Long Bios) */}
      <section className="bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713]">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
              The passionate people who design your itinerary and guide your safari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group p-4"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-white rounded-lg flex items-center justify-center border border-neutral-100">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 bg-white"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-neutral-400">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center text-[#16422b] mb-2 shadow-xs">
                        <User className="w-10 h-10 text-neutral-400" />
                      </div>
                      <span className="text-xs font-medium text-neutral-400">Fifty4 Safaris</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 pb-1 text-center flex-1 flex flex-col justify-center bg-white">
                  <h3 className="font-serif-luxury text-lg font-bold text-[#151713] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-[#16422b]">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL MOMENTS ACROSS EAST AFRICA */}
      <section className="py-14 sm:py-20 bg-[#FAF7EE] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713]">
              Real Moments Across East Africa
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
              Glimpses of genuine journeys, breathtaking landscapes, and wildlife encounters guided by our team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.44_d27ead9b.jpeg"
                alt="Murchison Falls Rapids"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Murchison Falls</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.38__1__741c8dd3.jpeg"
                alt="Group celebration at Murchison Falls"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Group Safari Joy</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.24_b621a8a6.jpeg"
                alt="Kazinga Channel Elephants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Kazinga Elephants</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.20_d54d41b3.jpeg"
                alt="Sempaya Hot Springs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Sempaya Springs</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.18_b231b097.jpeg"
                alt="Uganda Equator"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Uganda Equator</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-200 shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.28_4acce011.jpeg"
                alt="Nyungwe Canopy Walk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white leading-tight">Nyungwe Canopy</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => onNavigate('gallery')}
              className="text-xs font-bold text-[#16422b] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Photo Gallery</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xs">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-3">
            Ready to Plan Your Journey With Our Team?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Whether you are dreaming of trekking mountain gorillas or a private multi-country safari, our safari team is ready to design your custom proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenTailorTrip}
              className="px-7 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>PLAN YOUR SAFARI</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-neutral-300 hover:border-neutral-800 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              CONTACT OUR TEAM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
