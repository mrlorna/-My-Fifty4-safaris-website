import React, { useState, useMemo } from 'react';
import { PageView } from '../types';
import {
  EAST_AFRICAN_DESTINATIONS,
  ALL_WORLD_COUNTRIES,
  POPULAR_FOREIGN_COUNTRIES,
  DestinationVisaInfo,
  getVisaRequirement
} from '../data/visasData';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Check,
  Copy,
  X,
  FileCheck,
  Clock,
  DollarSign
} from 'lucide-react';

interface VisasPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenBrochure?: () => void;
}

export const VisasPage: React.FC<VisasPageProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onOpenBrochure
}) => {
  // Selected East African Destination
  const [selectedDestId, setSelectedDestId] = useState<DestinationVisaInfo['id']>('uganda');

  // Search input for tourist nationality
  const [searchQuery, setSearchQuery] = useState<string>('United States');
  const [copiedLink, setCopiedLink] = useState(false);

  // Active Destination Object
  const activeDestination = useMemo(() => {
    return (
      EAST_AFRICAN_DESTINATIONS.find((d) => d.id === selectedDestId) ||
      EAST_AFRICAN_DESTINATIONS[0]
    );
  }, [selectedDestId]);

  // Evaluated result for selected nationality
  const selectedResult = useMemo(() => {
    const query = searchQuery.trim();
    if (!query) return null;
    const matched = ALL_WORLD_COUNTRIES.find(
      (c) => c.name.toLowerCase() === query.toLowerCase()
    );
    const countryName = matched ? matched.name : query;
    const flag = matched ? matched.flag : '🌐';
    const req = getVisaRequirement(countryName, selectedDestId);

    return {
      countryName,
      flag,
      continent: matched?.continent || 'International',
      ...req
    };
  }, [searchQuery, selectedDestId]);

  const handleCopyPortal = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDestinationClick = (destId: DestinationVisaInfo['id']) => {
    setSelectedDestId(destId);
    const el = document.getElementById('search-visa-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen">
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
          <span className="text-[#16422b] font-semibold">Visa</span>
        </nav>
      </div>

      {/* 2. Simple, Elegant Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-8 pt-4 pb-8 text-center">
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
          Visas & Passports
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Click an East African country below, then search your home country to instantly view visa requirements, official government fees, and verified application portals.
        </p>
      </header>

      {/* 3. Clickable Destination Image Cards (Simple, Visual, Clean) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EAST_AFRICAN_DESTINATIONS.filter((d) => d.id !== 'east-africa-joint').map((dest) => {
            const isSelected = selectedDestId === dest.id;
            return (
              <div
                key={dest.id}
                onClick={() => handleDestinationClick(dest.id)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm border-2 ${
                  isSelected
                    ? 'border-[#16422b] ring-4 ring-[#16422b]/15 shadow-md scale-[1.02]'
                    : 'border-transparent hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:from-black/75 transition-colors" />

                  {/* Active Indicator Badge */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-[#16422b] text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Check className="w-3 h-3" />
                      <span>Selected</span>
                    </div>
                  )}

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide drop-shadow">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 font-medium line-clamp-1">
                      {dest.tagline}
                    </p>
                    <span className="inline-block mt-3 text-[11px] font-bold uppercase tracking-wider text-emerald-300 group-hover:underline">
                      {isSelected ? 'Viewing Requirements ↓' : 'Click to Check Visas →'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5th Card: East Africa Joint Visa Pill / Option */}
        <div
          onClick={() => handleDestinationClick('east-africa-joint')}
          className={`mt-5 rounded-xl p-5 cursor-pointer transition-all border-2 flex flex-col md:flex-row items-center justify-between gap-4 ${
            selectedDestId === 'east-africa-joint'
              ? 'bg-[#16422b] text-white border-[#16422b] ring-4 ring-[#16422b]/15 shadow-md'
              : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 shadow-xs'
          }`}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-emerald-100/30 flex items-center justify-center text-2xl shrink-0">
              🌍
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h4 className="font-serif-luxury text-xl font-bold">
                  East Africa Tourist Visa (Uganda · Kenya · Rwanda)
                </h4>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                  selectedDestId === 'east-africa-joint' ? 'bg-white/20 text-white' : 'bg-[#16422b]/10 text-[#16422b]'
                }`}>
                  $100 USD · 90 Days
                </span>
              </div>
              <p className={`text-xs mt-0.5 max-w-2xl ${
                selectedDestId === 'east-africa-joint' ? 'text-neutral-200' : 'text-neutral-600'
              }`}>
                Planning a multi-country safari? Single combined visa covering unlimited crossings between Uganda, Kenya, and Rwanda.
              </p>
            </div>
          </div>
          <button
            className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
              selectedDestId === 'east-africa-joint'
                ? 'bg-white text-[#16422b]'
                : 'bg-[#16422b] text-white hover:bg-[#103321]'
            }`}
          >
            {selectedDestId === 'east-africa-joint' ? 'Selected' : 'Select Joint Visa'}
          </button>
        </div>
      </section>

      {/* 4. The Interactive Search & Information Engine */}
      <section id="search-visa-section" className="max-w-4xl mx-auto px-4 sm:px-8 mb-16 scroll-mt-24">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-md p-6 sm:p-10">
          <div className="text-center pb-6 border-b border-neutral-100">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16422b] block mb-1">
              Active Destination:
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#151713]">
              Visa Guidelines for {activeDestination.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-lg mx-auto">
              Select or search your home country below to load official entry rules and government application links.
            </p>
          </div>

          {/* Search Box with All Countries Dropdown */}
          <div className="my-6 space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
              Select or Search Your Nationality:
            </label>

            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* Text Search with Clear */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type any country name (e.g. United States, United Kingdom, Canada, South Africa)..."
                  className="w-full pl-11 pr-10 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#16422b] focus:border-transparent outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Complete List of ALL Countries in the World Dropdown */}
              <select
                value={
                  ALL_WORLD_COUNTRIES.some(
                    (c) => c.name.toLowerCase() === searchQuery.trim().toLowerCase()
                  )
                    ? ALL_WORLD_COUNTRIES.find(
                        (c) => c.name.toLowerCase() === searchQuery.trim().toLowerCase()
                      )?.name
                    : ''
                }
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-bold text-neutral-800 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#16422b] sm:w-64 shrink-0"
              >
                <option value="">All Countries ({ALL_WORLD_COUNTRIES.length})...</option>
                {ALL_WORLD_COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Popular Chips for 1-Click Search */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mr-1">
                Popular:
              </span>
              {POPULAR_FOREIGN_COUNTRIES.slice(0, 8).map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSearchQuery(c.name)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    searchQuery.toLowerCase() === c.name.toLowerCase()
                      ? 'bg-[#16422b] text-white font-bold'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Visa Result Card */}
          {selectedResult ? (
            <div className="mt-8 bg-[#FAF7EE] rounded-xl border border-neutral-200 p-6 sm:p-8 space-y-6 animate-fade-in">
              {/* Header pairing */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div className="flex items-center gap-3.5">
                  <span className="text-4xl">{selectedResult.flag}</span>
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-neutral-900">
                      {selectedResult.countryName}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Visiting <strong>{activeDestination.name}</strong>
                    </p>
                  </div>
                </div>

                <div
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-2 self-start sm:self-auto ${
                    selectedResult.isExempt
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  {selectedResult.isExempt ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                  )}
                  <span>{selectedResult.status}</span>
                </div>
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-lg border border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Government Fee
                  </span>
                  <span className="text-base font-bold text-[#16422b] mt-1 block">
                    {selectedResult.cost}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Processing Duration
                  </span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">
                    {selectedResult.processingTime}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Permitted Stay
                  </span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">
                    {selectedResult.stayAllowed}
                  </span>
                </div>
              </div>

              {/* Requirement Note */}
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-4 rounded-lg border border-neutral-200">
                {selectedResult.note}
              </p>

              {/* Official Government Portal Link */}
              <div className="bg-white p-5 rounded-xl border-2 border-[#16422b]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#16422b]" />
                    <span className="text-xs font-bold uppercase tracking-wide text-neutral-800">
                      Official Government Portal: {selectedResult.portalName}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono block">
                    {selectedResult.portalUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedResult.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Apply on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleCopyPortal(selectedResult.portalUrl)}
                    className="p-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md transition-colors cursor-pointer"
                    title="Copy official link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Mandatory Checklist */}
              <div className="bg-white p-5 rounded-xl border border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#16422b]" />
                  <span>Mandatory Documents to Pack & Present upon Entry:</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Original passport with minimum 6 months validity & 2 blank pages.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>WHO International Yellow Fever Vaccination Certificate (Yellow Card).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Approved e-Visa / eTA confirmation barcode printout.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Confirmed round-trip / return flight ticket.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Safari tour confirmation voucher & lodge reservation list.</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-500 text-xs">
              Type or select your country above to display visa requirements.
            </div>
          )}
        </div>
      </section>

      {/* 5. "Can't find the information you need?" callout strictly matching screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-[#FAF7EE] rounded-2xl border border-neutral-200/90 py-12 px-6 sm:px-12 text-center max-w-4xl mx-auto shadow-xs">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-4">
            Can't find the information you need?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-6">
            Our safari team on Kampala Road verifies visa regulations, transit rules, and Yellow Fever guidelines directly with immigration officers. We are here to help.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>CONTACT US</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
