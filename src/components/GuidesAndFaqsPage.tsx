import React, { useState, useEffect } from 'react';
import { ARTICLES_DATA, ArticleInfo } from '../data/articlesData';
import { FAQS_DATA, FAQItem } from '../data/faqsData';
import { PageView } from '../types';
import {
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Clock,
  ArrowRight,
  MessageCircle,
  FileText,
  ShieldCheck,
  Luggage,
  Gift,
  Compass,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Phone,
  Plane
} from 'lucide-react';

interface GuidesAndFaqsPageProps {
  onOpenTailorTrip: () => void;
  onNavigate: (page: PageView) => void;
  initialTopic?: string;
}

type InfoTab = 'visas' | 'before-your-trip' | 'protection' | 'journal' | 'referral' | 'faqs' | 'inspiration';

export const GuidesAndFaqsPage: React.FC<GuidesAndFaqsPageProps> = ({
  onOpenTailorTrip,
  onNavigate,
  initialTopic
}) => {
  const [activeTab, setActiveTab] = useState<InfoTab>('visas');
  const [selectedArticle, setSelectedArticle] = useState<ArticleInfo | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync initialTopic when coming from INFO dropdown
  useEffect(() => {
    if (!initialTopic) return;
    if (initialTopic === 'visas') setActiveTab('visas');
    else if (initialTopic === 'before-your-trip') setActiveTab('before-your-trip');
    else if (initialTopic === 'protection') setActiveTab('protection');
    else if (initialTopic === 'journal' || initialTopic === 'guides') {
      setActiveTab('journal');
      setSelectedArticle(null);
    }
    else if (initialTopic === 'referral') setActiveTab('referral');
    else if (initialTopic === 'faqs') setActiveTab('faqs');
    else if (initialTopic === 'inspiration') setActiveTab('inspiration');
  }, [initialTopic]);

  const categories = ['All', 'Gorilla Trekking', 'Planning & Booking', 'Health & Visas', 'On Safari Experience'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (faqCategory !== 'All' && faq.category !== faqCategory) return false;
    if (faqSearch.trim()) {
      const q = faqSearch.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#151713]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
            Essential Travel Hub & Safari Architecture
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
                Information & Travel Advice
              </h1>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                Official safari guidelines, visa protocols, packing blueprints, and verified FAQs prepared by our Kampala native safari architect desk.
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

        {/* Horizontal Navigation Tabs (Mirroring the INFO dropdown items) */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-3 mb-10 border-b border-neutral-300 scrollbar-none text-xs font-bold uppercase tracking-wider">
          {[
            { id: 'visas', label: 'Visas & Passports', icon: FileText },
            { id: 'before-your-trip', label: 'Before Your Trip', icon: Luggage },
            { id: 'protection', label: 'Travel Protection Plan', icon: ShieldCheck },
            { id: 'journal', label: 'Journal & Stories', icon: BookOpen },
            { id: 'referral', label: 'Referral Program', icon: Gift },
            { id: 'faqs', label: 'FAQ’s', icon: HelpCircle },
            { id: 'inspiration', label: 'Inspiration', icon: Compass }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as InfoTab);
                  if (tab.id === 'journal') setSelectedArticle(null);
                }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#16422b] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-[#16422b] border border-neutral-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB 1: VISAS & PASSPORTS ================= */}
        {activeTab === 'visas' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <FileText className="w-6 h-6 text-[#16422b]" />
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                    East Africa Visas & Passport Requirements
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Official protocols for travelers entering Uganda, Kenya, Tanzania, and Rwanda
                  </p>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Crucial Passport Validity Rule:</strong> All international travelers must hold a passport with at least <strong>6 months of remaining validity</strong> beyond your planned departure date, and a minimum of <strong>2 blank consecutive visa pages</strong>.
                </div>
              </div>

              {/* 3 Visa Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Card 1: Uganda Tourist e-Visa */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16422b] bg-white px-2.5 py-1 rounded shadow-xs inline-block">
                      Uganda Ordinary
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#151713]">
                      Uganda Electronic Visa
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Uganda no longer issues visas on arrival at Entebbe International Airport. All visitors must obtain an approved Electronic Visa before boarding their flight.
                    </p>
                    <ul className="text-xs text-neutral-700 space-y-1.5 pt-2">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Cost:</strong> $50 USD (paid online)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Validity:</strong> 90 days, single entry</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Official Portal:</strong> visas.immigration.go.ug</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: East Africa Tourist Visa */}
                <div className="p-6 rounded-xl bg-[#16422b] text-white flex flex-col justify-between shadow-md">
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16422b] bg-[#FAF7EE] px-2.5 py-1 rounded shadow-xs inline-block">
                      Recommended
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-white">
                      East Africa Tourist Visa
                    </h3>
                    <p className="text-xs text-white/90 leading-relaxed font-light">
                      The premier joint visa allowing seamless multiple-entry travel across <strong>Uganda, Kenya, and Rwanda</strong> under a single document without re-applying.
                    </p>
                    <ul className="text-xs text-white/95 space-y-1.5 pt-2">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span><strong>Cost:</strong> $100 USD</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span><strong>Covers:</strong> Uganda + Rwanda + Kenya</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Must apply through your first country of arrival</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Health & Yellow Fever Card */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 px-2.5 py-1 rounded shadow-xs inline-block">
                      Mandatory Health
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#151713]">
                      Yellow Fever Certificate
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Uganda Ministry of Health and East African border immigration strictly mandate an international certificate of vaccination against <strong>Yellow Fever</strong> for all arrivals aged 1 year and above.
                    </p>
                    <ul className="text-xs text-neutral-700 space-y-1.5 pt-2">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Must be taken at least 10 days before travel</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Vaccine provides lifelong protection</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Original yellow card must be carried physically</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Assistance Note */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-600">
                  Need an official Fifty4 Safaris invitation letter or itinerary voucher to attach to your visa application?
                </span>
                <button
                  onClick={onOpenTailorTrip}
                  className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors shrink-0"
                >
                  Request Visa Support Letter
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: BEFORE YOUR TRIP ================= */}
        {activeTab === 'before-your-trip' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <Luggage className="w-6 h-6 text-[#16422b]" />
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                    Before Your Trip: Safari Packing & Field Preparation
                  </h2>
                  <p className="text-xs text-neutral-500">
                    What to pack, currency rules, plug types, and health precautions for your adventure
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Box 1: Primate Trekking & Safari Attire */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    1. Gorilla & Chimp Trekking Wardrobe
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Bwindi Impenetrable Forest and Kibale are humid, dense montane rainforests with prickly undergrowth.
                  </p>
                  <ul className="text-xs text-neutral-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Sturdy Waterproof Hiking Boots:</strong> Good ankle support with rugged tread for slick volcanic soil.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Garden / Work Gloves:</strong> Protects hands when grasping branches and stinging nettles on steep slopes.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Long Neutral Safari Pants & Gaiters:</strong> Tuck pants into socks to deter safari ants and brush.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Lightweight Rain Poncho / Jacket:</strong> Rain can fall unexpectedly any day of the year in tropical forests.</span>
                    </li>
                  </ul>
                </div>

                {/* Box 2: Luggage Rules & Bush Flight Limits */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    2. Luggage & Aircraft Weight Strict Limits
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Private 4x4 safari vehicles and regional bush charters (Cessna Caravans to Kihihi/Kasese/Seronera) enforce strict space limits.
                  </p>
                  <ul className="text-xs text-neutral-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Soft-Sided Duffels Only:</strong> Hard shell suitcases do not compress into safari vehicle boot compartments.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Domestic Flight Allowance:</strong> 15 kg (33 lbs) per guest including hand luggage.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Free Secure Luggage Storage:</strong> Leave excess international luggage at our secure Entebbe office during your safari.</span>
                    </li>
                  </ul>
                </div>

                {/* Box 3: US Dollars Currency Guidelines */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    3. Currency & Cash Rules (Strict Year 2013+)
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Uganda banks, hotels, and the Uganda Wildlife Authority (UWA) do NOT accept US dollar bills printed prior to 2013 due to counterfeit precautions.
                  </p>
                  <ul className="text-xs text-neutral-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Bring crisp, un-torn, un-stamped $50 and $100 notes dated <strong>2013 or newer</strong>.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Local currency (Uganda Shilling UGX) is best for small crafts, tip jars, and roadside pineapples.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Credit cards (Visa/Mastercard) are accepted at all luxury safari lodges (subject to 3-5% surcharge).</span>
                    </li>
                  </ul>
                </div>

                {/* Box 4: Power, Plugs & Photography */}
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    4. Electrical Plugs & Wildlife Photography
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Uganda and Kenya use the British <strong>Type G three-prong square pin plug</strong> (230V / 50Hz).
                  </p>
                  <ul className="text-xs text-neutral-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Our private 4x4 Land Cruisers feature in-vehicle USB and AC multi-plugs to charge camera batteries while driving.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>No Flash Photography:</strong> Camera flash is strictly prohibited with mountain gorillas and chimpanzees.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Recommended lenses: 70-200mm f/2.8 for gorillas; 100-400mm or 150-600mm for savannah predators and birds.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: TRAVEL PROTECTION PLAN ================= */}
        {activeTab === 'protection' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <ShieldCheck className="w-6 h-6 text-[#16422b]" />
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                    Fifty4 Travel Protection & Emergency Evacuation
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Comprehensive safety protocols, AMREF Flying Doctors coverage, and cancellation protection
                  </p>
                </div>
              </div>

              {/* Flying Doctors Highlight Banner */}
              <div className="p-6 rounded-xl bg-[#16422b] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16422b] bg-[#FAF7EE] px-2.5 py-1 rounded shadow-xs inline-block">
                    Automatically Included On All Safaris
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    AMREF Flying Doctors Emergency Air Evacuation
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light max-w-2xl">
                    Every guest traveling with Fifty4 Safaris is registered with AMREF Flying Doctors for 24/7 aero-medical emergency response. If an unexpected critical illness or injury occurs in remote national parks, a dedicated medical aircraft and intensive care doctor will airlift you directly to Nairobi or Kampala hospitals.
                  </p>
                </div>
                <div className="shrink-0 p-4 rounded-xl bg-white/10 border border-white/20 text-center">
                  <Plane className="w-8 h-8 text-emerald-300 mx-auto mb-1" />
                  <span className="text-xs font-bold uppercase tracking-wider block">24/7 Medevac Standby</span>
                  <span className="text-[10px] text-white/80">East Africa Region</span>
                </div>
              </div>

              {/* What Is Covered vs What To Buy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    What Fifty4 Safaris Provides
                  </span>
                  <ul className="text-xs text-neutral-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Emergency Air Evacuation:</strong> Direct medevac flights from bush airstrips to advanced trauma facilities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>24/7 Kampala Emergency Operations Desk:</strong> Constant satellite & radio coordination with all our safari vehicles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Official UWA & RDB Park Security:</strong> Armed wildlife ranger escort on all nature walks and primate habituations.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#16422b] block">
                    What You Must Purchase Privately
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    While our AMREF coverage covers medical transport from the bush to the hospital, you must purchase comprehensive international travel insurance covering:
                  </p>
                  <ul className="text-xs text-neutral-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Hospital & Medical Bills:</strong> In-hospital treatment costs once admitted.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Trip Cancellation & Interruption:</strong> Covers non-refundable gorilla permits ($800) if personal emergencies prevent travel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Baggage Delay / Loss:</strong> Protection for cameras and optics during international transit.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: JOURNAL & STORIES ================= */}
        {activeTab === 'journal' && (
          <div className="space-y-8 animate-fade-in">
            {selectedArticle ? (
              /* Single Article View */
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16422b] mb-6 hover:underline cursor-pointer"
                >
                  &larr; Back to Safari Journal
                </button>

                <div className="h-72 rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span className="font-bold text-[#16422b] uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>·</span>
                  <span>{selectedArticle.publishedDate}</span>
                  <span>·</span>
                  <span>By {selectedArticle.author}</span>
                </div>

                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-6">
                  {selectedArticle.title}
                </h2>

                <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                  {selectedArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenTailorTrip}
                    className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Craft a Journey Like This
                  </button>
                </div>
              </div>
            ) : (
              /* Articles Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ARTICLES_DATA.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-2">
                          <span className="font-bold text-[#16422b] uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-2 group-hover:text-[#16422b] transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs text-[#16422b] font-bold border-t border-neutral-100">
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: REFERRAL PROGRAM ================= */}
        {activeTab === 'referral' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <Gift className="w-6 h-6 text-[#16422b]" />
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                    Fifty4 Safaris Referral & Loyalty Rewards
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Share the wonder of Africa with friends & family and earn private safari credits
                  </p>
                </div>
              </div>

              {/* 3 Step Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-lg mx-auto">
                    1
                  </div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#151713]">
                    Invite Friends & Family
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Introduce fellow wildlife enthusiasts, photographers, or family groups to Fifty4 Safaris.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-lg mx-auto">
                    2
                  </div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#151713]">
                    They Save $250 Instantly
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Your referred guests receive an immediate <strong>$250 booking credit</strong> applied to their bespoke safari itinerary.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#16422b] text-white text-center space-y-3 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7EE] text-[#16422b] flex items-center justify-center font-bold text-lg mx-auto">
                    3
                  </div>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    You Earn $250 Reward
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed font-light">
                    For every booking confirmed, you receive a <strong>$250 credit voucher</strong> toward your next African adventure, or cash reward transfer.
                  </p>
                </div>
              </div>

              {/* Referral Form CTA */}
              <div className="p-6 rounded-xl bg-[#FAF7EE] border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#151713] mb-1">
                    Ready to refer a fellow traveler?
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Connect our Kampala safari desk with their email or phone, and we will send them personalized safari brochures with your credited discount.
                  </p>
                </div>
                <button
                  onClick={onOpenTailorTrip}
                  className="px-6 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors shrink-0"
                >
                  Submit a Referral
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 6: FAQ'S ================= */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-fade-in">
            {/* Search & Filter Bar */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-neutral-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search gorilla permits, visas, packing..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-neutral-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#16422b]"
                />
              </div>

              <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFaqCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                      faqCategory === cat
                        ? 'bg-[#16422b] text-white'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion Questions */}
            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/70 transition-colors"
                      >
                        <div className="flex items-center gap-3 pr-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#16422b] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                            {faq.category}
                          </span>
                          <span className="font-serif-luxury font-bold text-base sm:text-lg text-[#151713]">
                            {faq.question}
                          </span>
                        </div>
                        <div className="text-neutral-400 shrink-0">
                          {isOpen ? <ChevronUp className="w-5 h-5 text-[#16422b]" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-neutral-200">
                  <p className="text-sm text-neutral-500">No questions found matching your search.</p>
                  <button
                    onClick={() => { setFaqSearch(''); setFaqCategory('All'); }}
                    className="mt-2 text-xs font-bold text-[#16422b] hover:underline cursor-pointer"
                  >
                    Reset Search Filters
                  </button>
                </div>
              )}
            </div>

            {/* Still have questions banner */}
            <div className="p-6 bg-[#FAF7EE] rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#151713]">
                  Have a specific question about your safari?
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Our native planners in Kampala are standing by on WhatsApp to answer any question within minutes.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20have%20a%20question%20about%20my%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 7: INSPIRATION ================= */}
        {activeTab === 'inspiration' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <Compass className="w-6 h-6 text-[#16422b]" />
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                    African Safari Inspiration & Iconic Highlights
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Discover unforgettable wildlife encounters across Uganda, Rwanda, Kenya, Tanzania, and Zanzibar
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'The Great Primate Odyssey',
                    region: 'Uganda & Rwanda',
                    desc: 'Track gentle giant mountain gorillas in mist-draped volcanic calderas and chimpanzees across lush tropical canopy walkways.',
                    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
                  },
                  {
                    title: 'Savannah Legends & Migrations',
                    region: 'Serengeti & Masai Mara',
                    desc: 'Witness millions of wildebeest crossing dramatic crocodile-filled rivers beneath panoramic East African sunset horizons.',
                    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
                  },
                  {
                    title: 'Bush & Spice Island Coast',
                    region: 'Tanzania & Zanzibar',
                    desc: 'Combine dusty Big Five savannah game tracking with turquoise Indian Ocean sands, dhow cruises, and fragrant spice farms.',
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-neutral-200 flex flex-col justify-between bg-[#FAF7EE] shadow-xs group">
                    <div>
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16422b] block mb-1">
                          {item.region}
                        </span>
                        <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <button
                        onClick={onOpenTailorTrip}
                        className="w-full py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                      >
                        Explore Circuit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
