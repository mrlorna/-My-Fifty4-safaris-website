import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { saveEnquiry } from '../services/enquiryStorage';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Uganda');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const saved = saveEnquiry({
      destinations: [destination],
      departureDate: 'Inquiry',
      returnDate: 'N/A',
      dateFlexibility: 'Flexible Season',
      adults: 2,
      children: 0,
      accommodationStyle: 'Luxury Eco-Lodges',
      budgetPerPerson: '$5,000 - $7,500',
      currency: 'USD',
      wildlifeInterests: ['General East Africa Inquiry'],
      fullName: name,
      email,
      phone: phone || '+256',
      country: 'International',
      tourTitle: 'General Contact Inquiry',
      additionalRequests: message
    });

    setReferenceCode(saved.referenceCode);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-[#151713]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
            Get in Touch With Our Ground Team
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
            Contact Fifty4 Safaris
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl font-light">
            Headquartered in Kampala, Uganda, our safari architects and ground concierges are at your service for permit checks, custom routes, and travel inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#151713]">
                Fifty4 Safaris Limited
              </h2>

              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Kampala Headquarters:</strong>
                    Plot 14, Kololo Hill / Lugogo Bypass<br />
                    P.O. Box 7122, Kampala, Uganda
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Entebbe Operations & Depot:</strong>
                    Portal Road (3 km from Entebbe International Airport)<br />
                    Entebbe, Uganda
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Telephone & WhatsApp:</strong>
                    Direct: +256 789 164 360<br />
                    Kampala Desk: +256 789 164 360
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Email:</strong>
                    reservations@54safaris.com<br />
                    safaris@54safaris.com
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Office Hours:</strong>
                    Monday – Saturday: 8:00 AM – 6:00 PM (East Africa Time, GMT+3)<br />
                    Emergency Safari Concierge: 24 Hours / 7 Days
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20would%20like%20to%20inquire%20about%20a%20safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-neutral-200 flex items-center gap-3 text-xs text-neutral-600">
              <ShieldCheck className="w-8 h-8 text-[#16422b] shrink-0" />
              <div>
                <strong className="text-neutral-900 block">Uganda Tourism Board Licensed:</strong>
                Member of the Association of Uganda Tour Operators (AUTO) & partner of the Uganda Wildlife Authority (UWA).
              </div>
            </div>
          </div>

          {/* Right Column: Contact & General Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#16422b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                    Thank You for Contacting Fifty4 Safaris
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                    We have received your message under reference <strong className="font-mono text-black">{referenceCode}</strong>. A senior safari planner will respond to your email within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#16422b] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-1">
                      Send Us an Inquiry
                    </h3>
                    <p className="text-xs text-neutral-600">
                      Whether you need advice on gorilla permit dates, safari combinations, or private group rates, fill out the form below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 555-0192"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Destination of Interest
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                      >
                        <option value="Uganda">Uganda (Gorillas & Savannah)</option>
                        <option value="Kenya">Kenya (Masai Mara & Big 5)</option>
                        <option value="Tanzania">Tanzania (Serengeti & Zanzibar)</option>
                        <option value="Rwanda">Rwanda (Volcanoes & Primates)</option>
                        <option value="Zambia">Zambia (South Luangwa & Falls)</option>
                        <option value="Multi-Country">Multi-Country East Africa</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Your Message or Questions *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please let us know your planned travel months, number of guests, or any specific wildlife wishlist..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-neutral-300 rounded-md p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Kampala Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
