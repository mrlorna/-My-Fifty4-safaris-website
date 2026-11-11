import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, HeartHandshake, Trees, Users, ArrowRight } from 'lucide-react';

interface BrandStorySectionProps {
  onNavigate: (page: PageView) => void;
  onOpenTailorTrip: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  onNavigate,
  onOpenTailorTrip
}) => {
  return (
    <section className="py-20 bg-[#FAF7F2] text-[#151713] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (Luxury Lodge & Wilderness) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.27_7c0bed82.jpeg"
                alt="Fifty4 Safaris custom 4x4 Land Cruiser exploring Uganda highlands"
                className="w-full h-[480px] object-cover filter brightness-100 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
                  Responsible Discovery
                </span>
                <p className="font-serif-luxury text-xl font-bold">
                  “Discover Africa. Protect Its Future.”
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  5% of every safari booking supports local ranger health and Bwindi forest community education.
                </p>
              </div>
            </div>

            {/* Inset Credibility Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-neutral-200 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/fifty4-lion-symbol.png"
                  alt="Fifty4 Safaris Emblem"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#151713]">Fifty4 Safaris Ltd</h4>
                  <p className="text-[11px] text-neutral-500">Registered in Kampala, Uganda</p>
                </div>
              </div>
              <p className="text-xs text-neutral-600">
                Direct Uganda Wildlife Authority (UWA) licensed tour operator & East Africa specialist.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
              Our Vision & Philosophy
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713] mb-6">
              Thoughtfully Planned African Journeys
            </h2>

            <blockquote className="text-base text-neutral-700 italic border-l-2 border-[#16422b] pl-4 mb-6 leading-relaxed">
              “Fifty4 Safaris is building a trusted way for travellers to discover Africa through thoughtfully planned journeys connecting wildlife, landscapes, cultures, adventure and local experiences. Beginning in Uganda, our vision is to open doors to the extraordinary diversity of Africa’s 54 countries, one meaningful journey at a time.”
            </blockquote>

            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              We reject the impersonal, rushed nature of mass travel. Our team of native Ugandan naturalists, logistics coordinators, and safari architects craft each day with intentionality—balancing exhilarating wildlife tracking with serene pauses, authentic community encounters, and deep respect for the fragile ecosystems we explore.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#16422b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151713] mb-1">
                  Guaranteed Official Permits
                </h4>
                <p className="text-xs text-neutral-600">
                  Direct UWA gorilla & chimp permit allocations secured without third-party markups.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <Users className="w-5 h-5 text-[#16422b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151713] mb-1">
                  Ugandan Native Naturalists
                </h4>
                <p className="text-xs text-neutral-600">
                  Guides with 12+ years tracking experience who speak fluent English and native dialects.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <Trees className="w-5 h-5 text-[#16422b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151713] mb-1">
                  Eco-Certified Lodges
                </h4>
                <p className="text-xs text-neutral-600">
                  Carefully vetted sustainable safari camps with minimal footprint and community staff.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <HeartHandshake className="w-5 h-5 text-[#16422b] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#151713] mb-1">
                  5% Community Trust
                </h4>
                <p className="text-xs text-neutral-600">
                  Every booking contributes directly to forest buffer clinics and ranger scholarship funds.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16422b] hover:text-[#151713] transition-colors cursor-pointer"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-neutral-300">·</span>
              <button
                onClick={onOpenTailorTrip}
                className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Start Your Tailored Safari
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
