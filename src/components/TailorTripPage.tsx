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
  ChevronRight,
  Building2,
  Clock
} from 'lucide-react';
import { PageView, SafariEnquiry } from '../types';
import { saveEnquiry } from '../services/enquiryStorage';

interface TailorTripPageProps {
  onBack: () => void;
  onNavigate: (page: PageView, filter?: string) => void;
  preselectedTourTitle?: string;
  onSuccess: (enquiry: SafariEnquiry) => void;
}

interface CountryOption {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  image: string;
  popularPlaces: string[];
}

const COUNTRY_OPTIONS: CountryOption[] = [
  {
    id: 'Uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    tagline: 'Mountain Gorillas in Bwindi, Tree-Climbing Lions & River Nile',
    image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
    popularPlaces: [
      'Bwindi Impenetrable Forest (Gorillas)',
      'Queen Elizabeth National Park (Lions & Kazinga Channel)',
      'Kibale Forest (Chimpanzees)',
      'Murchison Falls (River Nile & Savannah)',
      'Lake Mburo National Park (Zebras & Walking Safaris)',
      'Jinja (Source of the Nile Adventure)',
      'Kidepo Valley National Park (Remote Wilderness)',
      'Lake Bunyonyi (Scenic Island Relaxation)'
    ]
  },
  {
    id: 'Kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    tagline: 'Masai Mara Great Migration, Amboseli Elephants & Rift Valley',
    image: '/src/assets/images/serengeti_great_migration_1792866692098.jpg',
    popularPlaces: [
      'Masai Mara National Reserve (Great Migration & Big Five)',
      'Amboseli National Park (Elephants & Mt. Kilimanjaro Views)',
      'Lake Nakuru (Rhino Sanctuary & Flamingos)',
      'Samburu National Reserve (Special 5 Wildlife)',
      'Tsavo East & West National Parks',
      'Ol Pejeta Conservancy (Chimps & Rhinos)',
      'Diani Beach (Indian Ocean Relaxation)'
    ]
  },
  {
    id: 'Tanzania',
    name: 'Tanzania',
    flag: '🇹🇿',
    tagline: 'Serengeti Plains, Ngorongoro Crater & Mount Kilimanjaro',
    image: '/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg',
    popularPlaces: [
      'Serengeti National Park (Endless Plains & Migration)',
      'Ngorongoro Crater (UNESCO Volcanic Caldera)',
      'Tarangire National Park (Elephant Herds & Baobabs)',
      'Lake Manyara (Tree-Climbing Lions & Lake Birdlife)',
      'Mount Kilimanjaro Foothills & Treks',
      'Arusha National Park (Walking & Canoeing Safaris)'
    ]
  },
  {
    id: 'Rwanda',
    name: 'Rwanda',
    flag: '🇷🇼',
    tagline: 'Volcanoes National Park Primates & Nyungwe Rainforest Canopy',
    image: '/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg',
    popularPlaces: [
      'Volcanoes National Park (Mountain Gorillas & Golden Monkeys)',
      'Nyungwe National Park (Canopy Walk & Chimps)',
      'Akagera National Park (Big Five Savannah & Lake Ihema)',
      'Lake Kivu & Gisenyi (Lakeside Beaches & Kayaking)',
      'Kigali Cultural Highlights & Memorial'
    ]
  },
  {
    id: 'Zanzibar & Coast',
    name: 'Zanzibar & Coast',
    flag: '🏝️',
    tagline: 'Turquoise Indian Ocean Waters, Spice Tours & Stone Town',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    popularPlaces: [
      'Stone Town UNESCO World Heritage Alleys',
      'Nungwi & Kendwa White Sand Beaches',
      'Mnemba Atoll Snorkeling & Marine Safari',
      'Jozani Forest (Rare Red Colobus Monkeys)',
      'Spice Farm Fragrance & Tasting Tours',
      'Prison Island & Giant Aldabra Tortoises'
    ]
  },
  {
    id: 'Zambia & Victoria Falls',
    name: 'Zambia & Victoria Falls',
    flag: '🇿🇲',
    tagline: 'Victoria Falls Wonder, South Luangwa Leopards & Zambezi River',
    image: '/src/assets/images/queen_elizabeth_savannah_lions_1792866692167.jpg',
    popularPlaces: [
      'Victoria Falls (Mosi-oa-Tunya) & Livingstone',
      'South Luangwa National Park (Walking Safaris)',
      'Lower Zambezi National Park (River Canoeing)',
      'Kafue National Park (Vast Pure Wilderness)',
      'Devils Pool & Sunset Zambezi River Cruises'
    ]
  }
];

export const TailorTripPage: React.FC<TailorTripPageProps> = ({
  onBack,
  onNavigate,
  preselectedTourTitle,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Form state — strictly ONE country allowed
  const [selectedCountry, setSelectedCountry] = useState<string>('Uganda');
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([
    'Bwindi Impenetrable Forest (Gorillas)',
    'Queen Elizabeth National Park (Lions & Kazinga Channel)'
  ]);
  const [placesDescription, setPlacesDescription] = useState<string>('');

  // Step 2: Dates & Group
  const [departureDate, setDepartureDate] = useState<string>('');
  const [tripDurationDays, setTripDurationDays] = useState<number>(8);
  const [returnDate, setReturnDate] = useState<string>('');
  const [dateFlexibility, setDateFlexibility] = useState<SafariEnquiry['dateFlexibility']>('+/- 3 Days');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [travelPartyType, setTravelPartyType] = useState<'Couple' | 'Solo' | 'Family' | 'Small Group'>('Couple');

  // Step 3: Style
  const [accommodationStyle, setAccommodationStyle] = useState<SafariEnquiry['accommodationStyle']>('Mid-Range Comfort (Average Price)');

  // Step 4: Contact Details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [countryOfResidence, setCountryOfResidence] = useState<string>('');
  const [additionalRequests, setAdditionalRequests] = useState<string>('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SafariEnquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // When country changes, reset places to sensible defaults for that country
  const handleSelectCountry = (countryId: string) => {
    setSelectedCountry(countryId);
    const countryObj = COUNTRY_OPTIONS.find((c) => c.id === countryId);
    if (countryObj && countryObj.popularPlaces.length > 0) {
      // Pick first 2 popular places as initial friendly selections
      setSelectedPlaces(countryObj.popularPlaces.slice(0, 2));
    } else {
      setSelectedPlaces([]);
    }
  };

  const togglePlace = (place: string) => {
    if (selectedPlaces.includes(place)) {
      setSelectedPlaces(selectedPlaces.filter((p) => p !== place));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!selectedCountry) {
        setErrorMessage('Please select one country for your custom safari.');
        return;
      }
    } else if (currentStep === 2) {
      if (!departureDate) {
        setErrorMessage('Please select your preferred departure date or estimated travel month.');
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
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMessage('Please provide your full name and email address so our team can send your proposal.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build a comprehensive notes payload including customer described places
      const combinedPlacesInfo = [
        `Destination Country: ${selectedCountry}`,
        selectedPlaces.length > 0 ? `Selected Highlights: ${selectedPlaces.join(', ')}` : '',
        placesDescription.trim() ? `Customer Described Places: ${placesDescription.trim()}` : '',
        `Party Type: ${travelPartyType} (${adults} Adults, ${children} Children)`,
        `Duration: ~${tripDurationDays} Days`,
        `Departure: ${departureDate || 'Flexible'} (${dateFlexibility})`,
        `Lodging Style: ${accommodationStyle}`,
        phone.trim() ? `Phone/WhatsApp: ${phone.trim()}` : 'Phone: Not provided',
        countryOfResidence.trim() ? `Country of Residence: ${countryOfResidence.trim()}` : '',
        additionalRequests.trim() ? `Additional Notes: ${additionalRequests.trim()}` : '',
        `Notification Routed To: fifty4safaris@gmail.com`
      ].filter(Boolean).join('\n\n');

      const created = saveEnquiry({
        destinations: [selectedCountry], // Exactly ONE country as requested
        departureDate,
        returnDate: returnDate || `${tripDurationDays} Days Safari`,
        dateFlexibility,
        adults,
        children,
        accommodationStyle,
        budgetPerPerson: 'Custom Tailored',
        currency: 'USD',
        wildlifeInterests: selectedPlaces,
        fullName,
        email,
        phone: phone.trim() || 'Not Provided',
        country: countryOfResidence.trim() || 'Not Specified',
        tourTitle: preselectedTourTitle ? `Custom ${selectedCountry}: ${preselectedTourTitle}` : `Custom ${selectedCountry} Safari`,
        additionalRequests: combinedPlacesInfo
      });

      // Email link trigger to fifty4safaris@gmail.com
      const mailSubject = encodeURIComponent(`New Custom Safari Request: ${selectedCountry} - ${fullName}`);
      const mailBody = encodeURIComponent(
        `Hello Fifty4 Safaris Team,\n\nA new custom safari enquiry has been submitted:\n\n` +
        `Client Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone || 'Not provided'}\n` +
        `Country of Residence: ${countryOfResidence || 'Not specified'}\n` +
        `Destination: ${selectedCountry}\n` +
        `Places to Visit: ${selectedPlaces.join(', ')} ${placesDescription ? `(${placesDescription})` : ''}\n` +
        `Travel Dates: ${departureDate || 'Flexible'} (~${tripDurationDays} days)\n` +
        `Group: ${adults} Adults, ${children} Children (${travelPartyType})\n` +
        `Lodging Style: ${accommodationStyle}\n\n` +
        `Reference Code: ${created.referenceCode}\n`
      );

      // Attempt background trigger or fallback link
      try {
        const mailtoUrl = `mailto:fifty4safaris@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        const hiddenLink = document.createElement('a');
        hiddenLink.href = mailtoUrl;
        hiddenLink.target = '_blank';
        hiddenLink.rel = 'noopener noreferrer';
        // Note: We don't force popups, but save reference
      } catch {
        // storage handled
      }

      setIsSubmitting(false);
      setSubmittedEnquiry(created);
      onSuccess(created);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Failed to submit. Please try again or reach our team via WhatsApp.');
    }
  };

  const activeCountryObj = COUNTRY_OPTIONS.find((c) => c.id === selectedCountry) || COUNTRY_OPTIONS[0];

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <div className="pb-4">
          <nav className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#16422b] hover:underline cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#16422b] font-semibold">Custom Tours</span>
          </nav>
        </div>

        {/* Confirmation Screen */}
        {submittedEnquiry ? (
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-[#16422b] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#16422b] block mb-1">
                Custom Safari Request Received
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-3">
                Thank You, {submittedEnquiry.fullName.split(' ')[0]}!
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg mx-auto">
                Our safari team has received your custom trip request for <strong>{selectedCountry}</strong>. We are checking wildlife permits and handpicked lodge availability, and will send your detailed day-by-day proposal within 24 hours.
              </p>
            </div>

            {/* Quick summary box */}
            <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-neutral-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Reference Code</span>
                <span className="font-mono font-bold text-[#16422b] text-sm bg-white px-2.5 py-1 rounded border border-neutral-200">
                  {submittedEnquiry.referenceCode}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Selected Country</span>
                <span className="font-bold text-[#151713]">{selectedCountry}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Departure Date</span>
                <span className="font-medium text-[#151713]">{submittedEnquiry.departureDate}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 font-medium">Party Size</span>
                <span className="font-medium text-[#151713]">
                  {submittedEnquiry.adults} Adults {submittedEnquiry.children > 0 ? `· ${submittedEnquiry.children} Children` : ''}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 font-medium">Lodging Style</span>
                <span className="font-medium text-[#151713]">{accommodationStyle}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 bg-[#151713] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                Return to Home
              </button>
              <button
                onClick={() => onNavigate('destinations')}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-100 text-[#151713] border border-neutral-300 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Explore Destinations
              </button>
              <a
                href={`https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20I%20have%20submitted%20custom%20trip%20reference%20${submittedEnquiry.referenceCode}%20for%20${encodeURIComponent(selectedCountry)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Custom Tours Card */
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden">
            {/* Header Banner */}
            <div className="p-6 sm:p-8 bg-[#16422b] text-white">
              <div className="max-w-3xl">
                <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold">
                  Design Your Custom Safari
                </h1>
                <p className="text-xs sm:text-sm text-neutral-200 mt-2 leading-relaxed font-light">
                  Choose a country, let us know the places you want to visit, and pick your travel dates. Our team will tailor a private, day-by-day itinerary around you.
                </p>
              </div>

              {/* Step Navigation Tabs Bar */}
              <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-4 gap-2 text-center text-xs">
                {[
                  { step: 1, label: 'Country & Places' },
                  { step: 2, label: 'Dates & Group' },
                  { step: 3, label: 'Lodging Style' },
                  { step: 4, label: 'Your Details' }
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => s.step < currentStep && setCurrentStep(s.step)}
                    disabled={s.step > currentStep}
                    className={`py-2.5 px-2 rounded-lg transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      s.step === currentStep
                        ? 'bg-[#FAF7EE] text-[#16422b] font-bold shadow-md'
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
              <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 text-xs text-amber-900 font-medium flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* ================= STEP 1: CHOOSE ONE COUNTRY & PLACES ================= */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  {/* Country Selection Header */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 1 of 4 · Destination
                    </span>
                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                      Choose One Country for Your Safari
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Select the country you want to travel to. Each country offers unique wildlife, landscapes, and experiences.
                    </p>
                  </div>

                  {/* 6 Country Cards — Single Selection Only */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {COUNTRY_OPTIONS.map((c) => {
                      const isSelected = selectedCountry === c.id;
                      return (
                        <div
                          key={c.id}
                          onClick={() => handleSelectCountry(c.id)}
                          className={`rounded-xl border p-4 cursor-pointer transition-all flex flex-col justify-between relative group ${
                            isSelected
                              ? 'border-[#16422b] bg-[#FAF7EE] shadow-md ring-2 ring-[#16422b]/30'
                              : 'border-neutral-200 hover:border-neutral-400 bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl">{c.flag}</span>
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors ${
                                  isSelected
                                    ? 'bg-[#16422b] text-white ring-2 ring-emerald-200'
                                    : 'border border-neutral-300 text-transparent'
                                }`}
                              >
                                ✓
                              </div>
                            </div>
                            <h3 className="font-serif-luxury text-lg font-bold text-[#151713] group-hover:text-[#16422b] transition-colors">
                              {c.name}
                            </h3>
                            <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                              {c.tagline}
                            </p>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-neutral-200/70 flex items-center justify-between text-[11px] font-semibold">
                            <span className={isSelected ? 'text-[#16422b]' : 'text-neutral-500'}>
                              {isSelected ? 'Selected Country' : 'Tap to select'}
                            </span>
                            <span className="text-[#16422b]">→</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Section 2: Describe Places in the Selected Country */}
                  <div className="bg-[#FAF7EE]/60 rounded-xl p-5 sm:p-6 border border-neutral-200 space-y-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#16422b]" />
                        <h3 className="font-serif-luxury text-xl font-bold text-[#151713]">
                          Places to visit in {activeCountryObj.name}
                        </h3>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Select popular places you want to include, or describe any specific parks, towns, or custom stops below:
                      </p>
                    </div>

                    {/* Quick Popular Places Chips */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block mb-2">
                        Popular {activeCountryObj.name} Highlights (tap to include):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeCountryObj.popularPlaces.map((place) => {
                          const isIncluded = selectedPlaces.includes(place);
                          return (
                            <button
                              key={place}
                              type="button"
                              onClick={() => togglePlace(place)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                                isIncluded
                                  ? 'bg-[#16422b] text-white shadow-xs'
                                  : 'bg-white text-neutral-700 border border-neutral-300 hover:border-[#16422b]'
                              }`}
                            >
                              <span>{isIncluded ? '✓' : '+'}</span>
                              <span>{place}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Customer Description Text Box for Places */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                        Describe the places, animals, or activities you want to see:
                      </label>
                      <textarea
                        rows={3}
                        value={placesDescription}
                        onChange={(e) => setPlacesDescription(e.target.value)}
                        placeholder={`e.g. In ${activeCountryObj.name}, we would like to visit specific parks, see certain wildlife, do a walking safari, or have a specific route in mind...`}
                        className="w-full bg-white border border-neutral-300 rounded-lg p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b] shadow-2xs leading-relaxed"
                      />
                      <span className="text-[11px] text-neutral-500 mt-1 block">
                        Feel free to mention any specific national parks, lodges, or activities. Our team will tailor the route accordingly.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: DATES & GROUP ================= */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 2 of 4 · Schedule & Travelers
                    </span>
                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                      When are you planning to travel to {selectedCountry}?
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Choose your preferred dates and group size. This helps us check seasonal conditions and secure permits.
                    </p>
                  </div>

                  {/* Dates Box */}
                  <div className="bg-[#FAF7EE]/50 p-5 sm:p-6 rounded-xl border border-neutral-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#16422b]" />
                          <span>Estimated Departure Date *</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={departureDate}
                          onChange={(e) => setDepartureDate(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#16422b]" />
                          <span>Estimated Trip Length</span>
                        </label>
                        <div className="flex items-center gap-2">
                          {[5, 7, 10, 12, 14].map((days) => (
                            <button
                              key={days}
                              type="button"
                              onClick={() => setTripDurationDays(days)}
                              className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                                tripDurationDays === days
                                  ? 'bg-[#16422b] text-white border-[#16422b]'
                                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                              }`}
                            >
                              {days} Days
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Date Flexibility */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Date Flexibility:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {(['Exact Dates', '+/- 3 Days', '+/- 1 Week', 'Flexible Season'] as const).map((flex) => (
                          <button
                            key={flex}
                            type="button"
                            onClick={() => setDateFlexibility(flex)}
                            className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                              dateFlexibility === flex
                                ? 'bg-[#16422b] text-white border-[#16422b] shadow-2xs font-bold'
                                : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            {flex}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Group Size & Party Type */}
                  <div className="bg-[#FAF7EE]/50 p-5 sm:p-6 rounded-xl border border-neutral-200 space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#16422b]" />
                        <span>Travel Group Type:</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {(['Couple', 'Solo', 'Family', 'Small Group'] as const).map((party) => (
                          <button
                            key={party}
                            type="button"
                            onClick={() => {
                              setTravelPartyType(party);
                              if (party === 'Solo') setAdults(1);
                              else if (party === 'Couple') setAdults(2);
                            }}
                            className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                              travelPartyType === party
                                ? 'bg-[#16422b] text-white border-[#16422b] shadow-2xs font-bold'
                                : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            {party}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-neutral-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Adult Travelers (Age 15+)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                            className="w-10 h-10 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer shadow-2xs"
                          >
                            -
                          </button>
                          <span className="font-serif-luxury text-xl font-bold w-12 text-center text-neutral-900">
                            {adults}
                          </span>
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => prev + 1)}
                            className="w-10 h-10 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer shadow-2xs"
                          >
                            +
                          </button>
                          <span className="text-xs text-neutral-500 ml-2">
                            {adults === 1 ? 'Solo Adventurer' : `${adults} Adults`}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Children (Under 15)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                            className="w-10 h-10 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer shadow-2xs"
                          >
                            -
                          </button>
                          <span className="font-serif-luxury text-xl font-bold w-12 text-center text-neutral-900">
                            {children}
                          </span>
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => prev + 1)}
                            className="w-10 h-10 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 font-bold text-sm text-neutral-800 flex items-center justify-center cursor-pointer shadow-2xs"
                          >
                            +
                          </button>
                          <span className="text-xs text-neutral-500 ml-2">
                            {children === 0 ? 'None' : `${children} Children`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 3: LODGING STYLE ================= */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 3 of 4 · Lodging Style
                    </span>
                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                      Preferred Accommodation Style
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Choose what kind of lodges or tented camps you prefer during your {selectedCountry} safari:
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      {
                        id: 'Budget Safari Accommodation' as const,
                        title: 'Budget Safari Accommodation',
                        tag: 'Least Expensive',
                        tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
                        desc: 'The least expensive tier — clean, comfortable safari guest lodges and eco-camps with en-suite private bathrooms and hearty local meals. Ideal for cost-conscious travelers.'
                      },
                      {
                        id: 'Mid-Range Comfort (Average Price)' as const,
                        title: 'Mid-Range Comfort (Average Price)',
                        tag: 'Not Expensive, But Good',
                        tagColor: 'bg-emerald-100 text-[#16422b] border-emerald-200',
                        desc: 'Average price, not expensive but good — handpicked classic safari lodges and permanent tented camps with swimming pools, hot showers, delicious dining, and great wilderness views at exceptional value.'
                      },
                      {
                        id: 'Luxury Eco-Lodges' as const,
                        title: 'Luxury Eco-Lodges',
                        tag: 'Premium Luxury',
                        tagColor: 'bg-neutral-100 text-neutral-900 border-neutral-200',
                        desc: 'Refined wilderness retreats with private scenic viewing decks, en-suite bathrooms, gourmet multi-course dining, and prime in-park locations.'
                      },
                      {
                        id: 'Ultra-Luxury Private Villas' as const,
                        title: 'Ultra-Luxury Private Sanctuaries',
                        tag: 'World-Class Exclusivity',
                        tagColor: 'bg-neutral-900 text-amber-300 border-neutral-700',
                        desc: 'Exclusive-use private villas with dedicated personal butler service, private chefs, and chartered bush flight options.'
                      }
                    ].map((style) => (
                      <div
                        key={style.id}
                        onClick={() => setAccommodationStyle(style.id)}
                        className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all ${
                          accommodationStyle === style.id
                            ? 'border-[#16422b] bg-[#FAF7EE] ring-2 ring-[#16422b]/30 shadow-xs'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-[#151713]">{style.title}</h4>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${style.tagColor}`}>
                              {style.tag}
                            </span>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                              accommodationStyle === style.id
                                ? 'bg-[#16422b] border-[#16422b] text-white'
                                : 'border-neutral-300 text-transparent'
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed">{style.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= STEP 4: CONTACT DETAILS & SUBMIT ================= */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                      Step 4 of 4 · Final Step
                    </span>
                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                      Where should our team send your custom proposal?
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Provide your details so our safari planner can finalize the proposal and get back to you within 24 hours. No payment is required today.
                    </p>
                  </div>

                  {/* Summary Review Card */}
                  <div className="bg-[#FAF7EE] p-4 sm:p-5 rounded-xl border border-neutral-200 text-xs text-neutral-700 space-y-1.5">
                    <span className="font-bold text-[#16422b] uppercase tracking-wider text-[10px] block">
                      Safari Summary
                    </span>
                    <p>
                      <strong>Destination:</strong> {selectedCountry}
                    </p>
                    {selectedPlaces.length > 0 && (
                      <p>
                        <strong>Places:</strong> {selectedPlaces.join(', ')}
                      </p>
                    )}
                    {placesDescription.trim() && (
                      <p className="italic text-neutral-600">
                        <strong>Requested stops:</strong> "{placesDescription.trim()}"
                      </p>
                    )}
                    <p>
                      <strong>Dates:</strong> {departureDate || 'To be determined'} (~{tripDurationDays} Days, {dateFlexibility})
                    </p>
                    <p>
                      <strong>Party:</strong> {adults} Adults {children > 0 ? `· ${children} Children` : ''} ({travelPartyType}) · {accommodationStyle}
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
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
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
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
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834 or +256764544719"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. United States, United Kingdom, Canada"
                          value={countryOfResidence}
                          onChange={(e) => setCountryOfResidence(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Any other requests or questions (optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Celebrating an anniversary, need airport pickup in Entebbe, or dietary preferences..."
                        value={additionalRequests}
                        onChange={(e) => setAdditionalRequests(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Stepper Buttons */}
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
                      className="w-full sm:w-auto px-7 py-3.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                        <span>Submitting Your Safari Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Custom Safari Request</span>
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
