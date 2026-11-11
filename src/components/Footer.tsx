import React, { useState } from 'react';
import { PageView } from '../types';
import { ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenConciergePortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onOpenConciergePortal
}) => {
  const [showPolicyModal, setShowPolicyModal] = useState<'privacy' | 'booking' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#151713] pt-16 pb-10 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 4 Link Columns + Large Recognizable Logo Column on Far Right (Exact match from screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs text-neutral-600">
          {/* Column 1: Destinations, Offers, Custom Tours, Travel Agents */}
          <div className="space-y-3">
            <ul className="space-y-2.5 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Offers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTailorTrip}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Custom Tours
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Information — */}
          <div className="space-y-3">
            <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
              <span>Information</span>
              <span className="text-neutral-400">—</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('visas')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Visas & Passports
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guides-faqs')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Before your Trip
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  FAQ's
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Customer Experiences Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: About Us — */}
          <div className="space-y-3">
            <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
              <span>About Us</span>
              <span className="text-neutral-400">—</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowPolicyModal('privacy')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guides-faqs')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Service — */}
          <div className="space-y-3">
            <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
              <span>Customer Service</span>
              <span className="text-neutral-400">—</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Brand Logo on Far Right with Right-Aligned Social Icons */}
          <div className="col-span-2 md:col-span-1 flex flex-col md:items-end items-start pt-2 md:pt-0">
            <div className="inline-flex flex-col items-end space-y-3">
              <button
                onClick={() => onNavigate('home')}
                className="text-left cursor-pointer group flex items-center gap-2.5"
                title="Fifty4 Safaris — Home"
              >
                <img
                  src="/fifty4-lion-symbol.png"
                  alt="Fifty4 Safaris"
                  className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
                <div className="flex flex-col text-left justify-center">
                  <span className="font-serif-luxury text-xl sm:text-[22px] font-bold tracking-[0.05em] text-black leading-none transition-opacity group-hover:opacity-85">
                    FIFTY4
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.32em] text-black uppercase leading-none mt-1 pl-0.5">
                    SAFARIS
                  </span>
                </div>
              </button>

              {/* Social Media Channels left-aligned with the logo */}
              <div className="w-full flex items-center justify-start gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                  aria-label="Facebook"
                  title="Fifty4 Safaris Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                  aria-label="Instagram"
                  title="Fifty4 Safaris Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs border border-neutral-700"
                  aria-label="TikTok"
                  title="Fifty4 Safaris TikTok"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.28 8.28 0 0 0 4.84 1.55v-3.5a4.85 4.85 0 0 1-1.07-.08z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Strictly Only "All Rights Reserved © 2026 – Fifty4 Safaris" & Scroll to top arrow */}
        <div className="pt-8 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <div>
            All Rights Reserved © 2026 – Fifty4 Safaris
          </div>

          {/* Scroll to Top Arrow Button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-600 hover:text-black transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl border border-neutral-200 text-xs">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif-luxury text-xl font-bold text-black">
                {showPolicyModal === 'booking' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h3>
              <button
                onClick={() => setShowPolicyModal(null)}
                className="font-bold text-neutral-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Official tour operator policies for Fifty4 Safaris Limited. Wildlife permits issued by Uganda Wildlife Authority (UWA) are registered in passenger passport names. All guest inquiries and booking data are managed strictly in accordance with international travel standards.
            </p>
            <div className="pt-3 text-right">
              <button
                onClick={() => setShowPolicyModal(null)}
                className="px-4 py-2 bg-[#0c3a44] text-white font-bold rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
