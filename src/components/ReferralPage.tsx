import React, { useState } from 'react';
import { PageView } from '../types';
import {
  Gift,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  Heart
} from 'lucide-react';

interface ReferralPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenBrochure?: () => void;
}

export const ReferralPage: React.FC<ReferralPageProps> = ({
  onNavigate,
  onOpenTailorTrip
}) => {
  const [yourName, setYourName] = useState('');
  const [yourContact, setYourContact] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendContact, setFriendContact] = useState('');
  const [destination, setDestination] = useState('Uganda');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yourName.trim() || !friendName.trim() || !friendContact.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#16422b] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#16422b] font-semibold">Refer a Friend</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-[#16422b] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Share the Adventure</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#151713]">
            Refer a Friend to Fifty4 Safaris
          </h1>
          <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Know someone dreaming of an African safari? Introduce them to us! When your friend books their trip, they receive a special welcome perk and you receive a safari travel reward.
          </p>
        </header>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#16422b] font-bold flex items-center justify-center mx-auto mb-2 text-sm border border-emerald-100">
              1
            </div>
            <h3 className="font-bold text-sm text-neutral-900 mb-1">Tell Us About Them</h3>
            <p className="text-xs text-neutral-600">Share your friend's details in the short form below.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#16422b] font-bold flex items-center justify-center mx-auto mb-2 text-sm border border-emerald-100">
              2
            </div>
            <h3 className="font-bold text-sm text-neutral-900 mb-1">We Welcome Them</h3>
            <p className="text-xs text-neutral-600">Our team sends a personalized safari guide and itinerary ideas.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#16422b] font-bold flex items-center justify-center mx-auto mb-2 text-sm border border-emerald-100">
              3
            </div>
            <h3 className="font-bold text-sm text-neutral-900 mb-1">Enjoy Rewards</h3>
            <p className="text-xs text-neutral-600">When they book, you both enjoy safari benefits on your journeys.</p>
          </div>
        </div>

        {/* Main Simple Form Card */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-[#16422b] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif-luxury text-2xl font-bold text-neutral-900">
                Thank You, {yourName}!
              </h2>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                We've received your recommendation for <strong>{friendName}</strong>. Our travel team will reach out with warm hospitality and keep your referral recorded.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFriendName('');
                  setFriendContact('');
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 bg-[#16422b] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#103321] transition-colors cursor-pointer"
              >
                Refer Another Friend
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-serif-luxury text-xl font-bold text-neutral-900 pb-2 border-b border-neutral-100">
                Referral Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="e.g. Rasheem"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={yourContact}
                    onChange={(e) => setYourContact(e.target.value)}
                    placeholder="e.g. rasheem@example.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Friend's Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    placeholder="e.g. Montgomery"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Friend's Email or WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={friendContact}
                    onChange={(e) => setFriendContact(e.target.value)}
                    placeholder="e.g. friend@example.com or phone"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Destination They Might Like
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none"
                >
                  <option value="Uganda">Uganda (Gorillas, Murchison Falls, Queen Elizabeth)</option>
                  <option value="Kenya">Kenya (Masai Mara, Amboseli, Kilimanjaro)</option>
                  <option value="Tanzania">Tanzania (Serengeti, Ngorongoro, Zanzibar)</option>
                  <option value="Rwanda">Rwanda (Volcanoes, Golden Monkeys, Nyungwe)</option>
                  <option value="Multi-Country">Multi-Country Safari</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Optional Note / Travel Plans
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what they're looking for, or any special occasion (honeymoon, family trip, wildlife)..."
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#16422b] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Referral</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
