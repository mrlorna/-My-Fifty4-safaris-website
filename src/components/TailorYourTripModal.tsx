import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Calendar, Users, DollarSign, Heart, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { SafariEnquiry } from '../types';
import { saveEnquiry } from '../services/enquiryStorage';

interface TailorYourTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTourTitle?: string;
  onSuccess: (enquiry: SafariEnquiry) => void;
}

export const TailorYourTripModal: React.FC<TailorYourTripModalProps> = ({
  isOpen,
  onClose,
  preselectedTourTitle,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

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

  if (!isOpen) return null;

  const toggleDestination = (dest: string) => {
    if (destinations.includes(dest)) {
      if (destinations.length > 1) {
        setDestinations(destinations.filter(d => d !== dest));
      }
    } else {
      setDestinations([...destinations, dest]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (wildlifeInterests.includes(interest)) {
      setWildlifeInterests(wildlifeInterests.filter(i => i !== interest));
    } else {
      setWildlifeInterests([...wildlifeInterests, interest]);
    }
  };

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!destinations.length) {
        setErrorMessage('Please choose at least one African destination.');
        return;
      }
    } else if (currentStep === 2) {
      if (!departureDate) {
        setErrorMessage('Please select an estimated departure date.');
        return;
      }
    } else if (currentStep === 4) {
      if (!fullName.trim() || !email.trim() || !phone.trim()) {
        setErrorMessage('Please provide your name, email, and phone number.');
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        setErrorMessage('Please provide a valid email address.');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setErrorMessage('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const created = saveEnquiry({
        destinations,
        departureDate,
        returnDate: returnDate || 'To be determined',
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
        tourTitle: preselectedTourTitle || 'Custom Tailor-Made Itinerary',
        additionalRequests
      });

      setIsSubmitting(false);
      setSubmittedEnquiry(created);
      onSuccess(created);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Failed to save your inquiry. Please try again or message our WhatsApp concierge.');
    }
  };

  const resetAndClose = () => {
    setSubmittedEnquiry(null);
    setCurrentStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF7F2] text-[#151713] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8">
        {/* Header Bar with Prominent Back Button */}
        <div className="bg-[#151713] text-white px-6 py-5 flex items-center justify-between border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block">
              Fifty4 Safaris Bespoke Concierge
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Tailor Your African Journey
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetAndClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Page</span>
            </button>
            <button
              onClick={resetAndClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {submittedEnquiry ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-[#16422b] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#16422b]">
              Inquiry Confirmed & Logged
            </span>
            <h3 className="font-serif-luxury text-3xl font-bold text-[#151713] mt-1 mb-2">
              Murakoze! We Have Received Your Safari Request
            </h3>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto mb-6">
              Our lead safari architect in Kampala is reviewing your wishlist and checking live gorilla permit and lodge availability. We will deliver a bespoke day-by-day proposal within 24 hours.
            </p>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 max-w-md mx-auto text-left mb-8 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-100 text-xs">
                <span className="text-neutral-500">Booking Reference</span>
                <span className="font-mono font-bold text-[#151713] text-sm bg-neutral-100 px-2 py-0.5 rounded">
                  {submittedEnquiry.referenceCode}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100 text-xs">
                <span className="text-neutral-500">Destinations</span>
                <span className="font-medium text-neutral-800">{submittedEnquiry.destinations.join(', ')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100 text-xs">
                <span className="text-neutral-500">Party Size</span>
                <span className="font-medium text-neutral-800">
                  {submittedEnquiry.adults} Adults{submittedEnquiry.children > 0 ? `, ${submittedEnquiry.children} Children` : ''}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100 text-xs">
                <span className="text-neutral-500">Estimated Dates</span>
                <span className="font-medium text-neutral-800">
                  {submittedEnquiry.departureDate} ({submittedEnquiry.dateFlexibility})
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-neutral-500">Guest Name</span>
                <span className="font-medium text-neutral-800">{submittedEnquiry.fullName}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20just%20submitted%20trip%20inquiry%20${submittedEnquiry.referenceCode}%20for%20${submittedEnquiry.fullName}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors"
              >
                Connect on WhatsApp Concierge
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-white hover:bg-neutral-100 text-[#151713] border border-neutral-300 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Wizard */
          <div className="p-6 sm:p-8">
            {/* Step Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="font-bold text-[#16422b]">Step {currentStep} of {totalSteps}</span>
                <span>
                  {currentStep === 1 && 'Destinations'}
                  {currentStep === 2 && 'Dates & Flexibility'}
                  {currentStep === 3 && 'Style & Budget'}
                  {currentStep === 4 && 'Wildlife Wishlist'}
                  {currentStep === 5 && 'Guest Details & Review'}
                </span>
              </div>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#16422b] h-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3 bg-amber-50 border border-amber-300 text-amber-900 text-xs rounded-md">
                {errorMessage}
              </div>
            )}

            {/* STEP 1: DESTINATIONS */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                    Where would you like to explore in Africa?
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Select one or combine multiple countries for a multi-destination East Africa circuit.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Uganda', subtitle: 'Gorillas & Savannah', flag: '🇺🇬' },
                    { name: 'Kenya', subtitle: 'Masai Mara & Big 5', flag: '🇰🇪' },
                    { name: 'Tanzania', subtitle: 'Serengeti & Zanzibar', flag: '🇹🇿' },
                    { name: 'Rwanda', subtitle: 'Virunga Volcanoes', flag: '🇷🇼' },
                    { name: 'Zambia', subtitle: 'South Luangwa & Victoria Falls', flag: '🇿🇲' },
                    { name: 'More Africa', subtitle: 'Botswana, Namibia, SA', flag: '🌍' }
                  ].map((item) => {
                    const isSelected = destinations.includes(item.name);
                    return (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => toggleDestination(item.name)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#16422b] shadow-md ring-2 ring-[#16422b]/20'
                            : 'bg-white/60 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{item.flag}</span>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border text-xs ${
                              isSelected
                                ? 'bg-[#16422b] border-[#16422b] text-white'
                                : 'border-neutral-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="font-bold text-sm text-[#151713]">{item.name}</p>
                        <p className="text-[11px] text-neutral-500">{item.subtitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: DATES & TRAVELERS */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                    When are you planning to travel?
                  </h3>
                  <p className="text-xs text-neutral-600">
                    We synchronize gorilla permit availability and migration movements to your dates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Estimated Departure Date *
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Approximate Return Date
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Date Flexibility
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Exact Dates', '+/- 3 Days', '+/- 1 Week', 'Flexible Season'] as const).map((flex) => (
                      <button
                        type="button"
                        key={flex}
                        onClick={() => setDateFlexibility(flex)}
                        className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-all cursor-pointer ${
                          dateFlexibility === flex
                            ? 'bg-[#151713] text-[#FAF7F2] border-[#151713]'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {flex}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Party Size */}
                <div className="pt-4 border-t border-neutral-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                    Number of Travelers
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-[#151713]">Adults (Ages 15+)</p>
                        <p className="text-[11px] text-neutral-500">Minimum age for gorilla trekking is 15</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center font-bold text-neutral-600 hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="font-bold text-base w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center font-bold text-neutral-600 hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-[#151713]">Children (Under 15)</p>
                        <p className="text-[11px] text-neutral-500">Family-friendly savannah lodges</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center font-bold text-neutral-600 hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="font-bold text-base w-4 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center font-bold text-neutral-600 hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: STYLE & BUDGET */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                    Accommodation Tier & Target Investment
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Transparent pricing including permits, private 4x4 vehicles, and full-board lodges.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Lodge Style Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        tier: 'Mid-Range Classic Tented' as const,
                        label: 'Classic Comfort',
                        desc: 'Comfortable ensuite safari tents and chalets with stunning wild views.'
                      },
                      {
                        tier: 'Luxury Eco-Lodges' as const,
                        label: 'Premier Luxury (Recommended)',
                        desc: 'Architectural forest sanctuaries, fine dining, private decks, and plunge pools.'
                      },
                      {
                        tier: 'Ultra-Luxury Private Villas' as const,
                        label: 'Ultra-Luxury / Exclusive',
                        desc: 'Singita, Sanctuary, private butler service, and chartered bush flights.'
                      }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.tier}
                        onClick={() => setAccommodationStyle(item.tier)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          accommodationStyle === item.tier
                            ? 'bg-white border-[#16422b] shadow-md ring-2 ring-[#16422b]/20'
                            : 'bg-white/60 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <p className="font-bold text-sm text-[#151713] mb-1">{item.label}</p>
                        <p className="text-xs text-neutral-500 leading-snug">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Approximate Budget Per Person (Excluding International Flights)
                    </label>
                    <div className="flex items-center gap-1 text-xs">
                      {(['USD', 'EUR', 'GBP'] as const).map(curr => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setCurrency(curr)}
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            currency === curr ? 'bg-[#16422b] text-white' : 'bg-neutral-200 text-neutral-700'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      '$3,500 - $5,000',
                      '$5,000 - $7,500',
                      '$7,500 - $10,000',
                      '$10,000+'
                    ].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetPerPerson(b)}
                        className={`py-3 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          budgetPerPerson === b
                            ? 'bg-[#151713] text-[#FAF7F2] border-[#151713]'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: WILDLIFE & EXPERIENCES */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                    What are your dream wildlife experiences?
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Select all that resonate so our planners can tailor the perfect route.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Mountain Gorillas (Bwindi / Volcanoes)',
                    'Chimpanzees (Kibale Forest)',
                    'Big Five Savannah Game Drives',
                    'Tree-Climbing Lions (Ishasha)',
                    'Great Migration River Crossings',
                    'River Boat Safari (Kazinga / Nile)',
                    'Walking Safari on Foot',
                    'Hot Air Balloon Safari',
                    'Prehistoric Shoebill Stork',
                    'Cultural Batwa & Maasai Encounters',
                    'Zanzibar Beach & Spice Coast',
                    'Victoria Falls Adventure'
                  ].map((interest) => {
                    const isSelected = wildlifeInterests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#16422b] text-white border-[#16422b] shadow-sm'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <span className="line-clamp-1">{interest}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: CONTACT & REVIEW */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                    Where should we send your customized itinerary?
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Our lead safari architect will curate your proposal and lodge availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Arthur & Sarah Pendelton"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. arthur@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United States, UK, Canada, Australia"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Special Requests / Milestones / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Celebrating our anniversary, dietary preferences, interested in internal fly-in sectors..."
                    value={additionalRequests}
                    onChange={(e) => setAdditionalRequests(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                  />
                </div>

                {/* Summary Box */}
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-neutral-200 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Selected Destinations:</span>
                    <span className="font-semibold text-neutral-800">{destinations.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Party Size:</span>
                    <span className="font-semibold text-neutral-800">{adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Estimated Dates:</span>
                    <span className="font-semibold text-neutral-800">{departureDate || 'Dates open'} ({dateFlexibility})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Tier & Budget:</span>
                    <span className="font-semibold text-neutral-800">{accommodationStyle} · {budgetPerPerson} {currency}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#16422b] hover:bg-[#103321] disabled:bg-neutral-400 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Saving Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Safari Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Step 1 to 4 Navigation Controls */}
            {currentStep < 5 && (
              <div className="flex items-center justify-between pt-6 border-t border-neutral-200 mt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
