import React, { useState } from 'react';
import { TourPackage } from '../data/toursData';
import { SafariEnquiry } from '../types';
import { saveEnquiry } from '../services/enquiryStorage';
import { X, Check, Calendar, Users, Send, ShieldCheck } from 'lucide-react';

interface QuickInquiryModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (enquiry: SafariEnquiry) => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  tour,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [additionalRequests, setAdditionalRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  if (!isOpen || !tour) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitting(true);
    try {
      const saved = saveEnquiry({
        destinations: tour.destinations,
        departureDate: departureDate || 'Dates flexible',
        returnDate: 'Calculated from itinerary',
        dateFlexibility: '+/- 3 Days',
        adults,
        children: 0,
        accommodationStyle: 'Luxury Eco-Lodges',
        budgetPerPerson: `$${tour.priceUSD.toLocaleString()}`,
        currency: 'USD',
        wildlifeInterests: tour.highlights.slice(0, 3),
        fullName,
        email,
        phone,
        country: 'International',
        tourId: tour.id,
        tourTitle: tour.title,
        additionalRequests
      });

      setIsSubmitting(false);
      setConfirmedRef(saved.referenceCode);
      onSuccess(saved);
    } catch {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setConfirmedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF7F2] text-[#151713] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-neutral-200 my-8">
        {/* Header */}
        <div className="bg-[#151713] text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-400 block">
              Direct Safari Inquiry
            </span>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold truncate max-w-xs sm:max-w-md">
              {tour.title}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedRef ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#16422b] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-2xl font-bold text-[#151713]">
              Safari Request Received!
            </h4>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
              We have reserved a provisional file under reference <strong className="font-mono text-black">{confirmedRef}</strong>. A Fifty4 safari specialist will verify gorilla permit quotas and email your quotation.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#16422b] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 bg-white rounded-lg border border-neutral-200 text-xs flex justify-between items-center">
              <div>
                <span className="text-neutral-500 block">Package Duration</span>
                <span className="font-bold text-neutral-900">{tour.durationDays} Days / {tour.durationNights} Nights</span>
              </div>
              <div className="text-right">
                <span className="text-neutral-500 block">Verified Rate</span>
                <span className="font-serif-luxury text-base font-bold text-[#151713]">${tour.priceUSD.toLocaleString()} USD</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. David Sterling"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. david@sterling.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 555-123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Target Travel Date
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Party Size (Adults)
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                >
                  <option value={1}>1 Solo Traveler</option>
                  <option value={2}>2 Travelers (1 Room)</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers (2 Rooms)</option>
                  <option value={6}>6 Travelers (Full Vehicle)</option>
                  <option value={8}>8+ Group Safari</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Specific Requests / Permit Requirements
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please check gorilla permit dates for July 2026..."
                value={additionalRequests}
                onChange={(e) => setAdditionalRequests(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded-md p-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#16422b] hover:bg-[#103321] disabled:bg-neutral-400 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? <span>Sending Request...</span> : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Check Availability & Send Quote</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
