import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, HeartHandshake, Trees, Compass, Users, MapPin, Award, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onOpenTailorTrip: () => void;
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenTailorTrip,
  onNavigate
}) => {
  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-[#151713]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
            Company Story & Mission
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
                About Fifty4 Safaris Limited
              </h1>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl font-light">
                Discover Africa. Protect Its Future. 54 countries. Countless ways to discover.
              </p>
            </div>
            <button
              onClick={onOpenTailorTrip}
              className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition-colors cursor-pointer shrink-0"
            >
              Plan Your Journey
            </button>
          </div>
        </div>

        {/* Hero Visual & Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#151713] leading-snug">
              Building a Trusted Way for Travellers to Discover Africa
            </h2>

            <blockquote className="p-6 bg-white rounded-xl border-l-4 border-[#16422b] text-base text-neutral-700 italic shadow-sm leading-relaxed">
              “Fifty4 Safaris is building a trusted way for travellers to discover Africa through thoughtfully planned journeys connecting wildlife, landscapes, cultures, adventure and local experiences. Beginning in Uganda, our vision is to open doors to the extraordinary diversity of Africa’s 54 countries, one meaningful journey at a time.”
            </blockquote>

            <p className="text-sm text-neutral-700 leading-relaxed">
              Fifty4 Safaris Limited was founded with a singular conviction: international travelers deserve genuine African expertise, unvarnished honesty, and meticulous operational reliability. Born in Kampala on the shores of Lake Victoria, we operate our own fleet of custom 4WD safari Land Cruisers and maintain direct licensed agreements with the Uganda Wildlife Authority (UWA) and Rwanda Development Board (RDB).
            </p>

            <p className="text-sm text-neutral-700 leading-relaxed">
              Our brand idea—<em>54 countries, countless ways to discover</em>—guides our long-term horizon. While we begin with our deep roots in Uganda and East Africa (Kenya, Tanzania, Rwanda, and Zambia), every journey is built with the highest standards of safety, personal concierge care, and conservation responsibility.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16422b]">
                <CheckCircle className="w-4 h-4 text-[#16422b]" />
                <span>Uganda Registered: 54safaris.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16422b]">
                <CheckCircle className="w-4 h-4 text-[#16422b]" />
                <span>100% Window-Seat Land Cruisers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16422b]">
                <CheckCircle className="w-4 h-4 text-[#16422b]" />
                <span>UWA Licensed Tour Operator</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
              <img
                src="/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg"
                alt="Silverback mountain gorilla in Bwindi Uganda"
                className="w-full h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-[#151713] p-5 rounded-xl shadow-xl border border-neutral-200 max-w-xs flex items-center gap-4">
              <img
                src="/fifty4-logo-hd.png"
                alt="Fifty4 Safaris logo"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div>
                <span className="text-[10px] uppercase font-bold text-[#16422b] block mb-1">
                  Our Brand Promise
                </span>
                <p className="font-serif-luxury text-xs font-bold leading-snug">
                  Thoughtfully planned African journeys, personal experiences and responsible discovery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-16">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] text-center mb-10">
            How Fifty4 Safaris Operates Differently
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <MapPin className="w-8 h-8 text-[#16422b]" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#151713]">
                Ugandan Ground Roots
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We are not a faraway booking broker. Our dispatch center in Kampala and Entebbe fleet garage monitor every transfer, flight, and lodge check-in 24/7.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#16422b]" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#151713]">
                Direct Official Permits
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We hold verified institutional quota accounts with the Uganda Wildlife Authority and Rwanda Development Board, guaranteeing your mountain gorilla tracking passes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <Users className="w-8 h-8 text-[#16422b]" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#151713]">
                Senior Naturalists
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our driver-guides are lifelong wildlife naturalists with over a decade in the field, passionate about conservation, animal ethology, and guest safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <HeartHandshake className="w-8 h-8 text-[#16422b]" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#151713]">
                5% Conservation Trust
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                "Protect Its Future" is our commitment: 5% of all safari trip revenues directly fund clean water boreholes, clinic supplies, and ranger family welfare.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vehicles & Safety Standards - Bright Editorial Container */}
        <div className="bg-white text-[#151713] rounded-2xl p-8 sm:p-12 mb-16 border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16422b]">
                Built for African Terrain
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#151713]">
                The Fifty4 Custom Safari Land Cruiser Fleet
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Navigating the savannahs and rainforested escarpments of East Africa demands purpose-built equipment. Every Fifty4 vehicle is an extended heavy-duty Toyota Land Cruiser 4WD, custom fabricated in East Africa with:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>Full-length 360° pop-up photography roof</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>Guaranteed window seat for every passenger</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>Onboard refrigerator with chilled drinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>220V inverter power outlets & USB ports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>High-frequency VHF two-way radios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>Heavy-duty recovery winch & double spare wheels</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 bg-[#FAF7F2] rounded-xl border border-neutral-200 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#16422b] flex items-center justify-center text-white font-bold text-xl shadow-sm">
                24/7
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#151713]">
                Flying Doctors Coverage
              </h4>
              <p className="text-xs text-neutral-600">
                Every Fifty4 guest is registered for AMREF Flying Doctors 24/7 air ambulance evacuation coverage throughout Uganda, Kenya, and Tanzania.
              </p>
              <button
                onClick={onOpenTailorTrip}
                className="px-6 py-2.5 bg-[#151713] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Start Safari Planning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
