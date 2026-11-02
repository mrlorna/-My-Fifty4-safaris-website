import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, HeartHandshake, Phone, ArrowLeft } from 'lucide-react';
import { PageView } from '../types';

interface SubscribePageProps {
  onNavigate: (page: PageView) => void;
  onOpenTailorTrip: () => void;
}

export const SubscribePage: React.FC<SubscribePageProps> = ({
  onNavigate,
  onOpenTailorTrip
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interests, setInterests] = useState<string[]>([
    'Mountain Gorillas & Chimpanzees',
    'The Great Migration'
  ]);
  const [timeline, setTimeline] = useState('2026-Q3');
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (item: string) => {
    setInterests(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7EE] text-[#151713] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16422b] hover:text-[#103321] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 sm:p-14 text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#16422b] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#16422b] block mb-2">
              Subscription Confirmed
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#151713] mb-4">
              Welcome to Fifty4 VIP Wildlife Dispatch
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-lg mx-auto mb-8">
              Thank you, <strong className="text-neutral-900">{name || 'valued traveler'}</strong>. You have been added to our exclusive dispatch list at <strong className="text-neutral-900">{email}</strong>. You will receive private notifications regarding peak gorilla permit allocations, migration camp releases, and exclusive seasonal promotions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-6 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
              >
                Explore Destinations
              </button>

              <a
                href="https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20just%20subscribed%20to%20your%20VIP%20dispatch!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
            {/* Header Banner */}
            <div className="bg-[#16422b] text-white p-8 sm:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FAF7EE] bg-white/10 px-3 py-1 rounded inline-block mb-3">
                  VIP Wildlife Dispatch & Mailing List
                </span>
                <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
                  Join Our African Safari Circle
                </h1>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                  Stay ahead of peak permit releases, Great Migration river crossing forecasts, and seasonal promotional rates directly from our native Kampala safari architect desk.
                </p>
              </div>

              {/* Decorative Subtle Accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
                <img
                  src="/src/assets/images/gorilla_bwindi_silverback_1792866690807.jpg"
                  alt="Gorilla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-8">
              {/* Field Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Full Name <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#16422b] focus:ring-1 focus:ring-[#16422b] text-sm text-neutral-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Email Address <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#16422b] focus:ring-1 focus:ring-[#16422b] text-sm text-neutral-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Optional Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  WhatsApp Number <span className="text-neutral-400 font-normal">(For urgent permit availability alerts)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#16422b] focus:ring-1 focus:ring-[#16422b] text-sm text-neutral-900 outline-none transition-all"
                />
              </div>

              {/* Checkboxes: Wildlife Interests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                  What type of wildlife journeys inspire you?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Mountain Gorillas & Chimpanzees (Uganda/Rwanda)',
                    'The Great Migration (Serengeti & Masai Mara)',
                    'Tree-Climbing Lions & Savannah Game Drives',
                    'Ultra-Luxury Private Eco-Lodges & Heli Flights',
                    'Small-Group Guaranteed Departures',
                    'Zanzibar & Coast Post-Safari Beach Stays'
                  ].map((interest) => (
                    <label
                      key={interest}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors text-xs font-medium ${
                        interests.includes(interest)
                          ? 'border-[#16422b] bg-[#FAF7EE] text-[#16422b]'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                        className="rounded text-[#16422b] focus:ring-[#16422b] cursor-pointer"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Select: Travel Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  When are you considering traveling to Africa?
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#16422b] focus:ring-1 focus:ring-[#16422b] text-sm text-neutral-900 outline-none transition-all cursor-pointer bg-white"
                >
                  <option value="2026-Q2">Apr – Jun 2026 (Green Season)</option>
                  <option value="2026-Q3">Jul – Sep 2026 (Peak Dry & Great Migration)</option>
                  <option value="2026-Q4">Oct – Dec 2026 (Prime Wildlife Season)</option>
                  <option value="2027">2027 Advance Planning</option>
                  <option value="Just Browsing">Just dreaming & researching</option>
                </select>
              </div>

              {/* Value Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16422b] shrink-0" />
                  <span>Strict zero-spam policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#16422b] shrink-0" />
                  <span>Exclusive member permit discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#16422b] shrink-0" />
                  <span>Unsubscribe anytime in 1 click</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Subscribe to VIP Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-neutral-500">
                  By joining, you agree to receive curated updates from Fifty4 Safaris.
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
