import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Calendar,
  Users,
  Compass,
  MapPin,
  Sparkles,
  ShieldCheck,
  Send,
  MessageCircle,
  Phone,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PageView, SafariEnquiry } from '../types';
import { saveEnquiry } from '../services/enquiryStorage';

interface TailorTripPageProps {
  onBack: () => void;
  onNavigate: (page: PageView, filter?: string) => void;
  preselectedTourTitle?: string;
  onSuccess: (enquiry: SafariEnquiry) => void;
}

export const TailorTripPage: React.FC<TailorTripPageProps> = ({
  onBack,
  onNavigate,
  preselectedTourTitle,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Form state
  const [destinations, setDestinations] = useState<string[]>(['Uganda']);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [dateFlexibility, setDateFlexibility] = useState<SafariEnquiry['dateFlexibility']>('+/- 3 Days');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [accommodationStyle, setAccommodationStyle] = useState<SafariEnquiry['accommodationStyle']>('Luxury Eco-Lodges');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [budgetPerPerson, setBudgetPerPerson] = useState('$5,000 - $7,500');
  const [wildlifeInterests, setWildlifeInterests] = useState<string[]>([
    'Mountain Gorillas',
    'Tree-Climbing Lions',
    'Chimpanzees'
  ]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [additionalRequests, setAdditionalRequests] = useState('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SafariEnquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleDestination = (dest: string) => {
    if (destinations.includes(dest)) {
      if (destinations.length > 1) {
        setDestinations(destinations.filter((d) => d !== dest));
      }
    } else {
      setDestinations([...destinations, dest]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (wildlifeInterests.includes(interest)) {
      setWildlifeInterests(wildlifeInterests.filter((i) => i !== interest));
    } else {
      setWildlifeInterests([...wildlifeInterests, interest]);
    }
  };

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!destinations.length) {
        setErrorMessage('Please select at least one African destination.');
        return;
      }
    } else if (currentStep === 2) {
      if (!departureDate) {
        setErrorMessage('Please choose your target departure date or estimated month.');
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please provide your full name, email address, and phone / WhatsApp number so our safari architect can send your proposal.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const created = saveEnquiry({
        destinations,
        departureDate,
        returnDate: returnDate || 'Flexible / To be planned',
        dateFlexibility,
        adults,
        children,
        accommodationStyle,
        budgetPerPerson,
        currency,
        wildlifeInterests,
        fullName,
        email,
        phone,
        country,
        tourTitle: preselectedTourTitle || 'Bespoke Custom East Africa Safari',
        additionalRequests
      });

      setIsSubmitting(false);
      setSubmittedEnquiry(created);
      onSuccess(created);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Failed to submit. Please try again or reach our Kampala concierge via WhatsApp.');
    }
  };

  const EAST_AFRICA_DESTINATIONS = [
    {
      id: 'Uganda',
      name: 'Uganda',
      tagline: 'Gorillas in Bwindi, Tree-Climbing Lions & River Nile',
      badge: 'Launch Hub',
      image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
    },
    {
      id: 'Kenya',
      name: 'Kenya',
      tagline: 'Masai Mara Great Migration & Amboseli Elephants',
      badge: 'Classic Savannah',
      image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg'
    },
    {
      id: 'Tanzania',
      name: 'Tanzania',
      tagline: 'Serengeti Plains, Ngorongoro Crater & Kilimanjaro',
      badge: 'Iconic Wildlife',
      image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg'
    },
    {
      id: 'Rwanda',
      name: 'Rwanda',
      tagline: 'Volcanoes National Park & Nyungwe Canopy',
      badge: 'Primate Sanctuary',
      image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg'
    },
    {
      id: 'Zanzibar & Coast',
      name: 'Zanzibar & Coast',
      tagline: 'Pristine Indian Ocean Beaches, Spice Tour & Coral Reefs',
      badge: 'Bush & Beach',
      image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg'
    },
    {
      id: 'Zambia & Victoria Falls',
      name: 'Zambia & Victoria Falls',
      tagline: 'Walking Safaris in South Luangwa & Mighty Mosi-oa-Tunya',
      badge: 'Pure Wilderness',
      image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg'
    }
  ];

  const INTERESTS_LIST = [
    'Mountain Gorillas (Bwindi / Volcanoes)',
    'Tree-Climbing Lions (Queen Elizabeth Ishasha)',
    'Chimpanzee Tracking (Kibale Forest)',
    'Great Migration River Crossings (Serengeti / Mara)',
    'Big Five Savannah Game Drives',
    'Boat Cruises (Kazinga Channel & Nile)',
    'Bird Watching (Shoebill Stork & 1000+ species)',
    'Batwa & Maasai Cultural Experiences',
    'Luxury Eco-Lodges & Crater Rim Verandas',
    'Hot Air Balloon Wildlife Safaris',
    'White-Water Rafting on River Nile (Jinja)',
    'Relaxing Beach Extension (Zanzibar / Diani)'
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Confirmation Screen */}
        {submittedEnquiry ? (
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-[#16422b] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#16422b] block mb-1">
                Safari Wishlist Received & Confirmed
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-3">
                Webale Nnyo! Your Journey Planning Has Begun
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg mx-auto">
                Our safari architects are reviewing your selected destinations (<strong>{submittedEnquiry.destinations.join(', ')}</strong>) and checking live wildlife permits and luxury lodge availability. We will deliver a bespoke day-by-day itinerary with exact costings within 24 hours.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-neutral-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Booking Reference</span>
                <span className="font-mono font-bold text-[#151713] text-sm bg-white px-2.5 py-1 rounded border border-neutral-200">
                  {submittedEnquiry.referenceCode}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Guest Name</span>
                <span className="font-bold text-[#151713]">{submittedEnquiry.fullName}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Target Dates</span>
                <span className="font-medium text-[#151713]">{submittedEnquiry.departureDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 font-medium">Party Size</span>
                <span className="font-medium text-[#151713]">{submittedEnquiry.adults} Adults {submittedEnquiry.children > 0 ? `· ${submittedEnquiry.children} Children` : ''}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 bg-[#151713] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                Return to Home
              </button>
              <button
                onClick={() => onNavigate('tours')}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-100 text-[#151713] border border-neutral-300 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Explore Tour Packages
              </button>
              <a
                href={`https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20just%20submitted%20inquiry%20reference%20${submittedEnquiry.referenceCode}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Form Card */
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden">
            {/* Header Banner */}
            <div className="p-6 sm:p-8 bg-[#151713] text-white">
              <div className="max-w-3xl">
                <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold">
                  Customise Your African Safari
                </h1>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  {preselectedTourTitle
                    ? `Customising around base itinerary: "${preselectedTourTitle}". Tailor dates, destinations, and lodge preferences.`
                    : 'Shape your personal African journey. Our expert safari planners craft bespoke itineraries matching your timeline, pace, and wildlife wishlist.'}
                </p>
              </div>

              {/* Step Navigation Bar */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-4 gap-2 text-center text-xs">
                {[
                  { step: 1, label: 'Destinations' },
                  { step: 2, label: 'Dates & Group' },
                  { step: 3, label: 'Style & Budget' },
                  { step: 4, label: 'Contact & Wishlist' }
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => s.step < currentStep && setCurrentStep(s.step)}
                    disabled={s.step > currentStep}
                    className={`py-2 px-1 rounded-md transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      s.step === currentStep
                        ? 'bg-white text-[#151713] font-bold shadow-md'
                        : s.step < currentStep
                        ? 'bg-white/15 text-white hover:bg-white/25'
                        : 'bg-white/5 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider">Step {s.step}</span>
                    <span className="text-[11px] hidden sm:inline">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-50 border-b border-red-200 px-6 py-3 text-xs text-red-700 font-medium flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* STEP 1: DESTINATIONS */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 1 of 4
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-[#151713]">
                      Which African destinations would you like to visit?
                    </h2>
                    <p className="text-xs text-neutral-600">
                      Select one or multiple countries for a multi-country cross-border safari.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {EAST_AFRICA_DESTINATIONS.map((dest) => {
                      const isSelected = destinations.includes(dest.id);
                      return (
                        <div
                          key={dest.id}
                          onClick={() => toggleDestination(dest.id)}
                          className={`rounded-xl border p-4 cursor-pointer transition-all flex flex-col justify-between relative ${
                            isSelected
                              ? 'border-[#16422b] bg-emerald-50/50 shadow-md ring-2 ring-[#16422b]/20'
                              : 'border-neutral-200 hover:border-neutral-400 bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#16422b]">
                                {dest.badge}
                              </span>
                              <h3 className="font-serif-luxury text-lg font-bold text-[#151713]">
                                {dest.name}
                              </h3>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                                isSelected ? 'bg-[#16422b] text-white' : 'border border-neutral-300 text-transparent'
                              }`}
                            >
                              ✓
                            </div>
                          </div>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            {dest.tagline}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: DATES & PARTY SIZE */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 2 of 4
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-[#151713]">
                      When are you planning to travel and with whom?
                    </h2>
                    <p className="text-xs text-neutral-600">
                      Gorilla tracking permits are allocated by exact calendar dates.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Target Departure Date / Month *
                      </label>
                      <input
                        type="date"
                        required
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-lg px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Return Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-lg px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Date Flexibility
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {(['Exact Dates', '+/- 3 Days', '+/- 1 Week', 'Flexible Season'] as const).map((flex) => (
                        <button
                          key={flex}
                          type="button"
                          onClick={() => setDateFlexibility(flex)}
                          className={`py-2.5 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            dateFlexibility === flex
                              ? 'bg-[#151713] text-white border-[#151713] shadow-sm'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {flex}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Adult Travelers (Ages 15+)
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                          className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-serif-luxury text-xl font-bold w-12 text-center text-neutral-900">
                          {adults}
                        </span>
                        <button
                          type="button"
                          onClick={() => setAdults((prev) => prev + 1)}
                          className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                        <span className="text-xs text-neutral-500 ml-2">
                          {adults === 1 ? 'Solo Adventurer' : `${adults} Guests`}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Children (Under 15)
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                          className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-serif-luxury text-xl font-bold w-12 text-center text-neutral-900">
                          {children}
                        </span>
                        <button
                          type="button"
                          onClick={() => setChildren((prev) => prev + 1)}
                          className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                        <span className="text-xs text-neutral-500 ml-2">
                          (Note: Gorillas age 15+ only)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: ACCOMMODATION & BUDGET */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 3 of 4
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-[#151713]">
                      Preferred Accommodation Style & Budget Range
                    </h2>
                    <p className="text-xs text-neutral-600">
                      Every lodge in our portfolio is eco-certified with exceptional standards.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        id: 'Luxury Eco-Lodges' as const,
                        title: 'Luxury Eco-Lodges (Recommended)',
                        desc: 'Refined wilderness retreats with en-suite baths, gourmet dining, and panoramic mist or caldera views.'
                      },
                      {
                        id: 'Mid-Range Classic Tented' as const,
                        title: 'Classic Tented Safari Camps',
                        desc: 'Comfortable canvas tents with real beds, solar showers, and campfire dining under the African stars.'
                      },
                      {
                        id: 'Ultra-Luxury Private Villas' as const,
                        title: 'Ultra-Luxury Private Sanctuaries',
                        desc: 'Exclusive-use villas with private butler, personal chef, and private helicopter transfers.'
                      }
                    ].map((style) => (
                      <div
                        key={style.id}
                        onClick={() => setAccommodationStyle(style.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          accommodationStyle === style.id
                            ? 'border-[#16422b] bg-emerald-50/50 ring-2 ring-[#16422b]/20'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#151713]">{style.title}</h4>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              accommodationStyle === style.id
                                ? 'bg-[#16422b] border-[#16422b] text-white'
                                : 'border-neutral-400'
                            }`}
                          >
                            {accommodationStyle === style.id && '✓'}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600">{style.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Estimated Budget Per Person (Excluding International Flights)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['$3,500 - $5,000', '$5,000 - $7,500', '$7,500 - $12,000', '$12,000+ Bespoke'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudgetPerPerson(b)}
                          className={`py-2.5 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            budgetPerPerson === b
                              ? 'bg-[#151713] text-white border-[#151713]'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SAFARI WISHLIST */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 4 of 4 · Final Step
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-[#151713]">
                      Where should our Kampala desk send your proposal?
                    </h2>
                    <p className="text-xs text-neutral-600">
                      Enter your contact information below. No payment is required today — our safari architect will verify live wildlife permits and email your custom proposal within 24 hours.
                    </p>
                  </div>

                  {/* Primary Contact Input Fields */}
                  <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-neutral-200 space-y-4">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-[#151713]">
                      Your Contact Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="eleanor@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Phone / WhatsApp (with country code) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 019-2834 or +256 789 164 360"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. United States, United Kingdom, Canada"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Wildlife & Experience Wishlist */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Wildlife & Activities Wishlist (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {INTERESTS_LIST.map((interest) => {
                        const isSelected = wildlifeInterests.includes(interest);
                        return (
                          <div
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'border-[#16422b] bg-emerald-50 text-[#151713]'
                                : 'border-neutral-200 hover:border-neutral-300 text-neutral-700 bg-white'
                            }`}
                          >
                            <span>{interest}</span>
                            <span
                              className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                isSelected ? 'bg-[#16422b] text-white' : 'border border-neutral-300 text-transparent'
                              }`}
                            >
                              ✓
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Specific Notes, Dietary Needs, or Special Occasions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Honeymoon safari, please prioritize luxury lodges with private plunge pools. Need 2 gorilla permits for July."
                      value={additionalRequests}
                      onChange={(e) => setAdditionalRequests(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-lg p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                  )}
                </div>

                <div className="w-full sm:w-auto">
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto px-7 py-3.5 bg-[#151713] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Step {currentStep + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#16422b] hover:bg-[#103321] disabled:bg-neutral-400 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Safari Wishlist...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Safari Request & Get Itinerary</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
