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
            Headquartered in Kampala, Uganda, our safari guides and travel staff are happy to assist you with permit checks, itinerary planning, and travel questions.
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
                  <div className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-neutral-900">WhatsApp & Telephone:</strong>
                    <a
                      href="https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20I%20would%20like%20to%20plan%20a%20trip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#16422b] hover:text-[#25D366] font-semibold transition-colors"
                    >
                      +256764544719
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Email & Website:</strong>
                    <a href="mailto:fifty4safaris@gmail.com" className="hover:text-[#16422b] transition-colors block">
                      fifty4safaris@gmail.com
                    </a>
                    <span className="text-neutral-500 text-xs block">
                      54safaris.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#16422b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900">Office Hours:</strong>
                    Monday – Saturday: 8:00 AM – 6:00 PM (East Africa Time, GMT+3)<br />
                    Emergency Safari Team: 24 Hours / 7 Days
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/256764544719?text=Hello%20Fifty4%20Safaris%2C%20I%20would%20like%20to%20inquire%20about%20a%20safari."
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
