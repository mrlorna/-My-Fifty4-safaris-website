import React, { useState, useRef, useEffect } from 'react';
import { PageView } from '../types';
import {
  Phone,
  Menu,
  X,
  Sparkles,
  MapPin,
  ChevronDown,
  Users
} from 'lucide-react';

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
    places: [
      'Bwindi Mountain Gorillas',
      'Queen Elizabeth Climbing Lions',
      'Murchison Falls & River Nile',
      'Kibale Chimpanzee Forest'
    ]
  },
  {
    country: 'Kenya',
    code: 'kenya',
    places: [
      'Masai Mara Great Migration',
      'Amboseli & Mt Kilimanjaro',
      'Lake Nakuru Flamingos',
      'Samburu Special Five'
    ]
  },
  {
    country: 'Tanzania',
    code: 'tanzania',
    places: [
      'Serengeti Endless Plains',
      'Ngorongoro Crater Caldera',
      'Tarangire Elephant Herds',
      'Zanzibar Spice Island'
    ]
  },
  {
    country: 'Rwanda',
    code: 'rwanda',
    places: [
      'Volcanoes Virunga Gorillas',
      'Nyungwe Canopy Walkway',
      'Akagera Big Five Savannah',
      'Lake Kivu Retreats'
    ]
  },
  {
    country: 'Group Tours',
    code: 'group-tours',
    places: [
      'Guaranteed Primate Groups',
      'Great Migration Small Groups',
      'Photographic Group Safaris',
      'Scheduled Solo Departures'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const infoTimerRef = useRef<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDestDropdownOpen(false);
      }
      if (infoDropdownRef.current && !infoDropdownRef.current.contains(e.target as Node)) {
        setInfoDropdownOpen(false);
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
      {/* 1. Smaller Nav Bar Above: Contact & Address */}
      <div className="bg-[#FAF7EE] border-b border-neutral-200/90 py-1.5 px-4 sm:px-8 text-xs text-neutral-600 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Address / Location */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-neutral-700">
              <MapPin className="w-3.5 h-3.5 text-[#16422b]" />
              <span>Plot 54, Kampala Road, Kampala · Uganda</span>
            </span>
            <span className="hidden md:inline text-neutral-300">|</span>
            <span className="hidden md:inline text-[11px] text-neutral-500 font-medium">
              Direct Licensed UWA & RDB Safari Operator
            </span>
          </div>

          {/* Contact Details & Working Hours */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden lg:inline text-[11px] text-neutral-500 font-medium">
              24/7 Safari Concierge Desk
            </span>

            {/* Internal Concierge Portal (Discreet Staff Link) */}
            {enquiriesCount > 0 && (
              <button
                onClick={onOpenConciergePortal}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#16422b] hover:underline cursor-pointer"
                title="Staff Lead Management"
              >
                <span>Staff Portal ({enquiriesCount})</span>
              </button>
            )}

            <a
              href="tel:+256789164360"
              className="flex items-center gap-1.5 font-bold text-neutral-900 hover:text-[#16422b] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#16422b] fill-current" />
              <span>+256 789 164 360</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Big Navigation Bar: Logo, Capitalized Nav Items, and Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo (Razor Sharp HD) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
          title="Fifty4 Safaris — Home"
        >
          <img
            src="/fifty4-logo-hd.png"
            alt="Fifty4 Safaris"
            className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-102"
            style={{ imageRendering: '-webkit-optimize-contrast' as any }}
          />
        </button>

        {/* Center: Navigation Items in CAPITAL LETTERS */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-8 text-xs font-bold tracking-widest text-neutral-800 uppercase">
          {/* DESTINATIONS (With Dropdown Arrow & Group Tours) */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDestDropdownOpen(true)}
            onMouseLeave={() => setDestDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('destinations')}
              className={`flex items-center gap-1 py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
                currentPage === 'destinations' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
              }`}
            >
              <span>DESTINATIONS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destDropdownOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'}`} />
            </button>

            {/* Mega Dropdown Menu Showing Countries and their Destinations + Group Tours */}
            {destDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[860px] z-50 animate-fade-in">
                <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 p-6 text-left normal-case grid grid-cols-5 gap-4">
                  {DESTINATIONS_MENU.map((item) => (
                    <div key={item.country} className="space-y-2">
                      <button
                        onClick={() => {
                          if (item.code === 'group-tours') {
                            handleNavClick('destinations', 'group-tours');
                          } else {
                            handleNavClick('destinations', item.code);
                          }
                        }}
                        className={`font-bold text-xs uppercase tracking-wider pb-1.5 border-b border-neutral-200 w-full text-left cursor-pointer transition-colors flex items-center justify-between ${
                          item.code === 'group-tours'
                            ? 'text-emerald-800 bg-emerald-50/80 px-1.5 py-1 rounded'
                            : 'text-[#16422b] hover:text-emerald-700'
                        }`}
                      >
                        <span>{item.country}</span>
                        {item.code === 'group-tours' && <Users className="w-3.5 h-3.5 text-emerald-700" />}
                      </button>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {item.places.map((place) => (
                          <li key={place}>
                            <button
                              onClick={() => {
                                if (item.code === 'group-tours') {
                                  handleNavClick('tours', 'Group');
                                } else {
                                  handleNavClick('tours', place);
                                }
                              }}
                              className="hover:text-[#16422b] hover:translate-x-1 transition-all text-left block py-0.5 cursor-pointer leading-tight"
                            >
                              {place}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
            OFFERS
          </button>

          {/* INFO (With 2-column Dropdown on Hover/Click matching screenshot) */}
          <div
            className="relative"
            ref={infoDropdownRef}
            onMouseEnter={handleInfoMouseEnter}
            onMouseLeave={handleInfoMouseLeave}
          >
            <button
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
              className={`flex items-center gap-1 py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
                currentPage === 'guides-faqs' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
              }`}
            >
              <span>INFO</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${infoDropdownOpen ? 'rotate-180 text-[#16422b]' : 'text-neutral-400'}`} />
            </button>

            {/* Dropdown Container strictly matching the attached screenshot */}
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
                      onClick={() => handleNavClick('guides-faqs', 'visas')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      VISAS & PASSPORTS
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'before-your-trip')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      BEFORE YOUR TRIP
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'protection')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      TRAVEL PROTECTION PLAN
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'journal')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      JOURNAL
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'referral')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      REFERRAL
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'faqs')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      FAQ'S
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      ABOUT US
                    </button>
                    <button
                      onClick={() => handleNavClick('travel-styles')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      TRAVEL STYLES
                    </button>
                    <button
                      onClick={() => handleNavClick('guides-faqs', 'inspiration')}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#16422b] transition-colors text-left block w-full cursor-pointer py-1"
                    >
                      INSPIRATION
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
            CUSTOM TOURS
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`py-1 hover:text-[#16422b] transition-colors cursor-pointer ${
              currentPage === 'contact' ? 'text-[#16422b] font-black border-b-2 border-[#16422b] pb-0.5' : ''
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Right: Action Buttons (Inquire Now + Plan Your Safari) */}
        <div className="flex items-center gap-3">
          {/* Outlined Action Button: Inquire Now */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center px-4 py-2.5 border border-[#16422b]/40 hover:border-[#16422b] text-[#16422b] text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            INQUIRE NOW
          </button>

          {/* Solid Forest Emerald Action Button: Plan Your Safari */}
          <button
            onClick={onOpenTailorTrip}
            className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-[#FAF7EE] text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-xs flex items-center gap-1.5 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FAF7EE]" />
            <span>PLAN YOUR SAFARI</span>
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
          <div className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-wider text-neutral-800">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-neutral-100"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('destinations')}
              className="text-left py-2 border-b border-neutral-100 flex items-center justify-between"
            >
              <span>DESTINATIONS</span>
              <span className="text-[10px] text-neutral-400 font-normal">Uganda, Kenya, Tanzania, Rwanda</span>
            </button>
            <button
              onClick={() => handleNavClick('destinations', 'group-tours')}
              className="text-left py-2 border-b border-neutral-100 flex items-center justify-between text-emerald-800"
            >
              <span>GROUP TOURS</span>
              <Users className="w-3.5 h-3.5" />
            </button>
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
                  onClick={() => handleNavClick('guides-faqs', 'visas')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  VISAS & PASSPORTS
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'faqs')}
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
                  onClick={() => handleNavClick('guides-faqs', 'protection')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  PROTECTION PLAN
                </button>
                <button
                  onClick={() => handleNavClick('travel-styles')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  TRAVEL STYLES
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'journal')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  SAFARI JOURNAL
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'inspiration')}
                  className="text-left py-1 hover:text-[#16422b]"
                >
                  INSPIRATION
                </button>
                <button
                  onClick={() => handleNavClick('guides-faqs', 'referral')}
                  className="text-left py-1 hover:text-[#16422b] col-span-2"
                >
                  REFERRAL PROGRAM
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
              href="tel:+256789164360"
              className="flex items-center justify-center gap-2 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase rounded"
            >
              <Phone className="w-3.5 h-3.5 text-[#16422b] fill-current" />
              <span>CALL +256 789 164 360</span>
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
