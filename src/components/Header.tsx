import React, { useState, useRef, useEffect } from 'react';
import { PageView } from '../types';
import {
  Phone,
  Menu,
  X,
  Sparkles,
  MapPin,
  ChevronDown,
  ChevronRight,
  Users,
  ArrowRight,
  Check,
  Globe
} from 'lucide-react';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView, param?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenConciergePortal: () => void;
  enquiriesCount: number;
}

const DESTINATIONS_MENU = [
  {
    country: 'Uganda',
    code: 'uganda',
    flag: '🇺🇬',
    tagline: 'The Pearl of Africa · Mountain Gorillas & River Nile',
    places: [
      { name: 'Bwindi Impenetrable Forest', desc: 'World famous mountain gorilla trekking' },
      { name: 'Queen Elizabeth National Park', desc: 'Tree-climbing lions & Kazinga channel cruise' },
      { name: 'Murchison Falls National Park', desc: 'World’s most powerful waterfall & Nile delta' },
      { name: 'Kibale Forest National Park', desc: 'Chimpanzee tracking primate capital of the world' },
      { name: 'Lake Mburo National Park', desc: 'Zebras, impalas & intimate walking safaris' },
      { name: 'Kidepo Valley National Park', desc: 'Untouched frontier wilderness & rugged savannah' },
      { name: 'Jinja & River Nile', desc: 'White water rafting & legendary source of the Nile' },
      { name: 'Rwenzori Mountains', desc: 'Glaciated Mountains of the Moon alpine hiking' }
    ]
  },
  {
    country: 'Kenya',
    code: 'kenya',
    flag: '🇰🇪',
    tagline: 'The Safari Heart · Great Migration & Savannahs',
    places: [
      { name: 'Masai Mara National Reserve', desc: 'The Great Migration & predator capital' },
      { name: 'Amboseli National Park', desc: 'Giant elephant herds under Mount Kilimanjaro' },
      { name: 'Samburu National Reserve', desc: 'Special 5 northern wildlife & Samburu culture' },
      { name: 'Lake Nakuru National Park', desc: 'Black & white rhinos and flamingo sanctuary' },
      { name: 'Tsavo East & West', desc: 'Red dust elephants & crystal Mzima Springs' },
      { name: 'Diani Beach & Coast', desc: 'White coral sands & turquoise marine reserves' }
    ]
  },
  {
    country: 'Tanzania',
    code: 'tanzania',
    flag: '🇹🇿',
    tagline: 'Serengeti Plains · Ngorongoro Crater & Zanzibar',
    places: [
      { name: 'Serengeti National Park', desc: 'Endless plains & year-round migration herds' },
      { name: 'Ngorongoro Crater', desc: 'UNESCO volcanic caldera with dense Big Five density' },
      { name: 'Tarangire National Park', desc: 'Ancient baobab trees & massive elephant herds' },
      { name: 'Lake Manyara National Park', desc: 'Tree-climbing lions & alkaline flamingo waters' },
      { name: 'Zanzibar Spice Island', desc: 'Historic Stone Town & turquoise reef beaches' },
      { name: 'Mount Kilimanjaro', desc: 'Trek to the highest free-standing summit in Africa' }
    ]
  },
  {
    country: 'Rwanda',
    code: 'rwanda',
    flag: '🇷🇼',
    tagline: 'Land of a Thousand Hills · Virunga Gorillas',
    places: [
      { name: 'Volcanoes National Park', desc: 'Mountain gorillas & endangered golden monkeys' },
      { name: 'Nyungwe Forest National Park', desc: 'Suspension canopy walkway & chimpanzee troops' },
      { name: 'Akagera National Park', desc: 'Lowland savannah with rhinos, lions & Lake Ihema' },
      { name: 'Lake Kivu & Gisenyi', desc: 'Tranquil volcanic beaches & scenic kayaking' }
    ]
  }
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenTailorTrip,
  onOpenConciergePortal,
  enquiriesCount
}) => {
  const { language, setLanguage, t, currentOption } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileSelectedCountry, setMobileSelectedCountry] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const infoTimerRef = useRef<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDestDropdownOpen(false);
        setSelectedCountryCode(null);
      }
      if (infoDropdownRef.current && !infoDropdownRef.current.contains(e.target as Node)) {
        setInfoDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (infoTimerRef.current) {
        clearTimeout(infoTimerRef.current as number);
      }
    };
  }, []);

  const handleInfoMouseEnter = () => {
    if (infoTimerRef.current) {
      clearTimeout(infoTimerRef.current as number);
      infoTimerRef.current = null;
    }
    setDestDropdownOpen(false);
    setInfoDropdownOpen(true);
  };

  const handleInfoMouseLeave = () => {
    infoTimerRef.current = window.setTimeout(() => {
      setInfoDropdownOpen(false);
    }, 250);
  };

  const handleNavClick = (page: PageView, param?: string) => {
    setDestDropdownOpen(false);
    setInfoDropdownOpen(false);
    onNavigate(page, param);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-neutral-200">
      {/* 1. Smaller Nav Bar Above: Contact & Address & Language */}
      <div className="bg-[#FAF7EE] border-b border-neutral-200/90 py-1.5 px-4 sm:px-8 text-xs text-neutral-600 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Address / Location */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="flex items-center gap-1.5 font-medium text-neutral-700 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#16422b] shrink-0" />
              <span className="truncate">{t('address')}</span>
            </span>
          </div>

          {/* Contact Details & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">

            <a
              href="https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20I%20would%20like%20to%20plan%20a%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-neutral-900 hover:text-[#25D366] transition-colors whitespace-nowrap shrink-0 group"
              title="WhatsApp Fifty4 Safaris: +256764544719"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="whitespace-nowrap font-medium tracking-tight group-hover:text-[#25D366] transition-colors">+256764544719</span>
            </a>

            {/* Language Switcher Dropdown (English, French, Swahili) */}
            <div className="relative shrink-0" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white border border-neutral-300 hover:border-[#16422b] text-neutral-800 text-[11px] font-bold cursor-pointer transition-colors shadow-2xs group"
                title="Change Language / Changer de langue / Badili Lugha"
              >
                <span className="text-sm">{currentOption.flag}</span>
                <span className="font-mono uppercase text-[11px]">{currentOption.code}</span>
                <ChevronDown className={`w-3 h-3 text-neutral-400 group-hover:text-[#16422b] transition-transform ${langDropdownOpen ? 'rotate-180 text-[#16422b]' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 animate-fade-in text-left">
                  <div className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 flex items-center justify-between">
                    <span>Language / Lugha</span>
                    <Globe className="w-3 h-3 text-neutral-400" />
                  </div>
                  {LANGUAGES.map((opt) => {
                    const isSelected = language === opt.code;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => {
                          setLanguage(opt.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 text-[#16422b] font-bold'
                            : 'text-neutral-700 hover:bg-[#FAF7EE]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{opt.flag}</span>
                          <span>{opt.name}</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#16422b]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Big Navigation Bar: Logo, Capitalized Nav Items, and Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo (Razor Sharp HD Emblem + Refined Side Typography in Black) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          title="Fifty4 Safaris — Home"
        >
          <img
            src="/fifty4-lion-symbol.png"
            alt="Fifty4 Safaris Emblem"
            className="h-10 sm:h-11.5 w-auto object-contain transition-transform group-hover:scale-105"
            style={{ imageRendering: '-webkit-optimize-contrast' as any }}
          />
          <div className="flex flex-col text-left justify-center">
            <span className="font-serif-luxury text-xl sm:text-[22px] font-bold tracking-[0.05em] text-black leading-none transition-opacity group-hover:opacity-85">
              FIFTY4
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.32em] text-black uppercase leading-none mt-1 pl-0.5">
              SAFARIS
            </span>
          </div>
        </button>

        {/* Center: Navigation Items in CAPITAL LETTERS */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-8 text-xs font-bold tracking-widest text-neutral-800 uppercase">
          {/* DESTINATIONS (Simple Country Dropdown with Side Destinations Filter) */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDestDropdownOpen(true)}
            onMouseLeave={() => {
              // Keep open if user is exploring, or close when mouse leaves
            }}
          >
            <button
              onClick={() => {
                setDestDropdownOpen(!destDropdownOpen);
                if (destDropdownOpen) {
                  setSelectedCountryCode(null);
                }
              }}
              className={`flex items-center gap-1 py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
                currentPage === 'destinations' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
              }`}
            >
              <span>{t('destinations')}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destDropdownOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'}`} />
            </button>

            {/* Clean Dropdown: Countries only, expanding side destinations panel on click */}
            {destDropdownOpen && (
              <div
                className={`absolute left-0 top-full pt-2 z-50 animate-fade-in transition-all duration-200 ${
                  selectedCountryCode ? 'w-[680px]' : 'w-64'
                }`}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden flex text-left normal-case">
                  {/* Left Column: Only Countries */}
                  <div
                    className={`${
                      selectedCountryCode ? 'w-56 bg-[#FAF7EE] border-r border-neutral-200' : 'w-full bg-white'
                    } p-2.5 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 flex items-center justify-between mb-1">
                        <span>Countries</span>
                        <span className="text-[9px] text-neutral-400 font-normal">
                          {selectedCountryCode ? 'Click to switch' : 'Click to explore'}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {DESTINATIONS_MENU.map((c) => {
                          const isSelected = selectedCountryCode === c.code;
                          return (
                            <button
                              key={c.code}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCountryCode(isSelected ? null : c.code);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition-all text-left cursor-pointer group ${
                                isSelected
                                  ? 'bg-[#16422b] text-white shadow-xs'
                                  : 'text-neutral-800 hover:bg-[#FAF7EE] hover:text-[#16422b]'
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <span className="text-base">{c.flag}</span>
                                <span>{c.country}</span>
                              </span>
                              <div className="flex items-center gap-1">
                                <ChevronRight
                                  className={`w-3.5 h-3.5 transition-transform ${
                                    isSelected
                                      ? 'text-white translate-x-0.5'
                                      : 'text-neutral-400 group-hover:text-[#16422b] group-hover:translate-x-0.5'
                                  }`}
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2.5 mt-2 border-t border-neutral-100 px-1">
                      <button
                        onClick={() => handleNavClick('destinations')}
                        className="text-[11px] font-bold text-[#16422b] hover:underline flex items-center gap-1 cursor-pointer w-full text-left"
                      >
                        <span>View all destination guides</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Displayed ON THE SIDE when a country is clicked (styled like offers filter) */}
                  {selectedCountryCode && (() => {
                    const activeCountryItem =
                      DESTINATIONS_MENU.find((c) => c.code === selectedCountryCode) ||
                      DESTINATIONS_MENU[0];
                    return (
                      <div className="flex-1 p-5 bg-white flex flex-col justify-between animate-fade-in">
                        <div>
                          {/* Side Header with Close button */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                            <div>
                              <h4 className="font-serif-luxury text-base font-bold text-[#151713] flex items-center gap-2">
                                <span>{activeCountryItem.flag}</span>
                                <span>{activeCountryItem.country} Destinations</span>
                              </h4>
                              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">
                                {activeCountryItem.tagline}
                              </p>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCountryCode(null);
                              }}
                              className="p-1 rounded hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                              title="Close side menu"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Side Filter List (just like offers page sidebar filter) */}
                          <div className="space-y-1.5 max-h-[310px] overflow-y-auto pr-1">
                            {activeCountryItem.places.map((place) => (
                              <button
                                key={place.name}
                                onClick={() => {
                                  if (activeCountryItem.code === 'group-tours') {
                                    handleNavClick('tours', 'Group');
                                  } else {
                                    handleNavClick('destinations', activeCountryItem.code);
                                  }
                                }}
                                className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#FAF7EE] text-left transition-all group cursor-pointer border border-transparent hover:border-neutral-200"
                              >
                                <div className="w-4 h-4 rounded border border-neutral-300 group-hover:border-[#16422b] group-hover:bg-[#16422b] group-hover:text-white flex items-center justify-center text-[10px] text-transparent transition-colors mt-0.5 shrink-0">
                                  ✓
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-xs font-bold text-neutral-900 group-hover:text-[#16422b] block truncate">
                                    {place.name}
                                  </span>
                                  <span className="text-[11px] text-neutral-500 block truncate">
                                    {place.desc}
                                  </span>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#16422b] shrink-0 mt-0.5" />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Bottom action button */}
                        <div className="pt-3 mt-2 border-t border-neutral-100">
                          <button
                            onClick={() => {
                              if (activeCountryItem.code === 'group-tours') {
                                handleNavClick('tours', 'Group');
                              } else {
                                handleNavClick('destinations', activeCountryItem.code);
                              }
                            }}
                            className="w-full py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <span>Explore All {activeCountryItem.country} Safaris</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('offers')}
            className={`py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
              currentPage === 'offers' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
            }`}
          >
            {t('offers')}
          </button>

          {/* INFO (With 2-column Dropdown on Hover/Click) */}
          <div
            className="relative"
            ref={infoDropdownRef}
            onMouseEnter={handleInfoMouseEnter}
            onMouseLeave={handleInfoMouseLeave}
          >
            <button
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
              className={`flex items-center gap-1 py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
                currentPage === 'guides-faqs' || currentPage === 'visas' || currentPage === 'faqs' || currentPage === 'gallery' || currentPage === 'referral'
                  ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5'
                  : ''
              }`}
            >
              <span>{t('info')}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${infoDropdownOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'}`} />
            </button>

            {/* Dropdown Container */}
            {infoDropdownOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[460px] sm:w-[500px] z-50 animate-fade-in"
                onMouseEnter={handleInfoMouseEnter}
                onMouseLeave={handleInfoMouseLeave}
              >
                <div className="bg-white rounded-b-xl shadow-2xl border border-neutral-100 p-7 sm:p-8 text-left normal-case grid grid-cols-2 gap-x-8 gap-y-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <button
                      onClick={() => handleNavClick('visas')}
                      className={`text-xs font-bold uppercase tracking-wider hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1 ${
                        currentPage === 'visas' ? 'text-[#16422b] font-black' : 'text-neutral-800'
                      }`}
                    >
                      {t('visasPassports')}
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'before-your-trip')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      {t('beforeYourTrip')}
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'journal')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      JOURNAL
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <button
                      onClick={() => handleNavClick('faqs')}
                      className={`text-xs font-bold uppercase tracking-wider hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1 ${
                        currentPage === 'faqs' ? 'text-[#16422b] font-black' : 'text-neutral-800'
                      }`}
                    >
                      {t('faqs')}
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      {t('aboutUs')}
                    </button>
                    <button
                      onClick={() => handleNavClick('gallery')}
                      className={`text-xs font-bold uppercase tracking-wider hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1 ${
                        currentPage === 'gallery' ? 'text-[#16422b] font-black' : 'text-neutral-800'
                      }`}
                    >
                      {t('gallery')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CUSTOM TOURS */}
          <button
            onClick={() => handleNavClick('tailor-trip')}
            className={`py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
              currentPage === 'tailor-trip' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
            }`}
          >
            {t('customTours')}
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
              currentPage === 'contact' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
            }`}
          >
            {t('contact')}
          </button>
        </nav>

        {/* Right: Action Button (Plan Your Safari) */}
        <div className="flex items-center gap-3">

          {/* Solid Forest Emerald Action Button: Plan Your Safari */}
          <button
            onClick={onOpenTailorTrip}
            className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-[#FAF7EE] text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-xs flex items-center gap-1.5 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FAF7EE]" />
            <span>{t('tailorATrip')}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-neutral-800 hover:text-black cursor-pointer ml-1"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-neutral-200 px-6 py-6 shadow-xl space-y-4">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#16422b]" />
              <span>Language / Lugha</span>
            </span>
            <div className="flex items-center gap-1.5">
              {LANGUAGES.map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLanguage(opt.code)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                    language === opt.code
                      ? 'bg-[#16422b] text-white shadow-2xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  <span className="mr-1">{opt.flag}</span>
                  <span className="uppercase">{opt.code}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-wider text-neutral-800">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-neutral-100"
            >
              HOME
            </button>
            {/* Mobile Destinations Accordion */}
            <div className="border-b border-neutral-100 pb-2">
              <button
                onClick={() => setMobileDestOpen(!mobileDestOpen)}
                className="w-full text-left py-2 flex items-center justify-between"
              >
                <span>DESTINATIONS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileDestOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'}`} />
              </button>

              {mobileDestOpen && (
                <div className="pl-2 pt-1 pb-2 space-y-1 bg-[#FAF7EE] rounded-lg mt-1 border border-neutral-200/80">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/50">
                    Select a Country:
                  </div>
                  {DESTINATIONS_MENU.map((c) => {
                    const isSelected = mobileSelectedCountry === c.code;
                    return (
                      <div key={c.code} className="border-b border-neutral-200/40 last:border-0 pb-1 last:pb-0">
                        <button
                          onClick={() => setMobileSelectedCountry(isSelected ? null : c.code)}
                          className="w-full flex items-center justify-between py-2 px-3 text-xs font-bold text-neutral-800 text-left hover:text-[#16422b]"
                        >
                          <span className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.country}</span>
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-[#16422b]' : 'text-neutral-400'}`} />
                        </button>

                        {isSelected && (
                          <div className="pl-6 pr-3 py-2 space-y-1.5 bg-white/80 rounded-md mx-2 mb-1 border border-neutral-200/60">
                            <span className="text-[10px] font-bold uppercase text-[#16422b] block mb-1">
                              {c.country} Destinations:
                            </span>
                            {c.places.map((place) => (
                              <button
                                key={place.name}
                                onClick={() => handleNavClick('destinations', c.code)}
                                className="w-full text-left py-1 text-[11px] text-neutral-700 hover:text-[#16422b] block truncate"
                              >
                                • {place.name}
                              </button>
                            ))}
                            <button
                              onClick={() => handleNavClick('destinations', c.code)}
                              className="text-[10px] font-bold text-[#16422b] underline pt-1 block"
                            >
                              Explore all {c.country} tours →
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavClick('offers')}
              className="text-left py-2 border-b border-neutral-100"
            >
              OFFERS
            </button>
            {/* Mobile INFO Accordion / Group */}
            <div className="py-2 border-b border-neutral-100">
              <span className="text-[11px] font-extrabold text-[#16422b] block mb-2">
                INFO & TRAVEL ADVICE
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-600 font-medium pl-1">
                <button
                  onClick={() => handleNavClick('visas')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  VISAS & PASSPORTS
                </button>
                <button
                  onClick={() => handleNavClick('faqs')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  FAQ'S
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'before-your-trip')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  BEFORE YOUR TRIP
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  ABOUT US
                </button>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  CUSTOMER GALLERY
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'journal')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  SAFARI JOURNAL
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('tailor-trip')}
              className="text-left py-2 border-b border-neutral-100"
            >
              CUSTOM TOURS
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-neutral-100"
            >
              CONTACT
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href="https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20I%20would%20like%20to%20plan%20a%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase rounded transition-colors"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WHATSAPP +256764544719</span>
            </a>
            <button
              onClick={onOpenTailorTrip}
              className="w-full py-2.5 bg-[#16422b] hover:bg-[#103321] text-[#FAF7EE] text-xs font-bold uppercase rounded flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FAF7EE]" />
              <span>PLAN YOUR SAFARI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
