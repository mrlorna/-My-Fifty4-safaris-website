import React, { useState } from 'react';
import {
  Star,
  ChevronRight,
  Facebook,
  Instagram
} from 'lucide-react';
import { PageView } from '../types';

interface HomeReviewsAndPreFooterProps {
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenBrochure?: () => void;
}

export const HomeReviewsAndPreFooter: React.FC<HomeReviewsAndPreFooterProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onOpenBrochure
}) => {
  const [activeReviewPage, setActiveReviewPage] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const REVIEWS = [
    {
      initials: 'M',
      initialBg: 'bg-[#16422b]',
      name: 'Montgomery',
      verified: true,
      timeAgo: '27 days ago',
      rating: 5,
      text: 'We enjoyed our safari in Kenya and Uganda so much. Traveling across both countries with Fifty4 Safaris felt like traveling with family from day one. In Kenya, watching the elephant herds roam right beneath Mount Kilimanjaro was breathtaking, and when we crossed into Uganda for mountain gorilla trekking in Bwindi, our lead naturalist guide made sure we were comfortable and safe every minute of the hike. Every single lodge, transfer, and meal was arranged with so much personal care and warmth. We cannot thank the team enough for memories we will hold close forever.',
      photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.13_c6b09cce.jpeg'
    },
    {
      name: 'Rasheem',
      initials: 'R',
      initialBg: 'bg-emerald-700',
      verified: true,
      timeAgo: '3 months ago',
      rating: 5,
      text: 'We enjoyed hiking the hills and exploring the lush green with our tour guide Lorna—she is such a lovely, caring soul. From the early morning mist on the trails to the heartfelt stories she shared about the local community and nature, she kept our spirits high every single mile. When the trail got steep, Lorna was right there cheering us on, laughing with us, and making the journey unforgettable. Fifty4 Safaris gave us an authentic, grounded experience that felt truly special.',
      photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.31__1__4b878806.jpeg'
    },
    {
      initials: 'I',
      initialBg: 'bg-teal-700',
      name: 'Irene',
      verified: true,
      timeAgo: '4 months ago',
      rating: 5,
      text: 'We truly enjoyed every moment, had so much fun, and surely recommend Fifty4 Safaris to anyone thinking of visiting East Africa! Our time reaching Murchison Falls to feel the roaring water up close, followed by the boat cruise and open-roof game drives, was pure magic. The team made us feel so welcomed right from the airport arrival to our very last farewell. The care was genuine and authentic—we are already telling our friends and planning our next trip!',
      photo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.51.38__1__741c8dd3.jpeg'
    }
  ];

  return (
    <div className="bg-white text-[#151713]">
      {/* 1. "What our customers think" Section (Exact match from screenshot) */}
      <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713] mb-2">
              What our customers think
            </h2>
            <button
              onClick={() => onNavigate('guides-faqs')}
              className="text-sm text-[#16422b] hover:underline font-semibold cursor-pointer"
            >
              View all reviews
            </button>
          </div>

          {/* Aggregate Rating Badges Row (Google & TrustPilot) */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pb-8 border-b border-neutral-200 mb-8 text-sm font-semibold">
            {/* Google */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                <span className="text-blue-600 font-bold text-base">G</span> Google Reviews
              </span>
              <span className="text-neutral-900 font-bold">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* TrustPilot */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold text-base">★</span> TrustPilot Reviews
              </span>
              <span className="text-neutral-900 font-bold">4.9</span>
              <div className="flex text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Review Box Container */}
          <div className="bg-[#FAF7EE] rounded-xl border border-neutral-200 p-6 sm:p-8 max-w-6xl mx-auto shadow-xs relative">
            {/* Top Bar inside box: Google Reviews + Review us on Google button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 gap-4">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span className="font-bold text-neutral-900 flex items-center gap-1">
                  <span className="text-blue-600 font-bold text-lg">G</span> Google Reviews
                </span>
                <span className="font-bold text-neutral-900">4.9</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-neutral-500 text-xs sm:text-sm">(128)</span>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer self-start sm:self-auto shadow-xs transition-colors"
              >
                Review us on Google
              </button>
            </div>

            {/* 3 Review Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((rev, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 sm:p-6 border border-neutral-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* User Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-full ${rev.initialBg} text-white flex items-center justify-center font-bold text-sm shrink-0`}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-neutral-900">{rev.name}</span>
                          <span className="text-emerald-600 text-xs">✔</span>
                        </div>
                        <span className="text-xs text-neutral-400 block">{rev.timeAgo}</span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex text-amber-500 mb-2">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review Text: 4 lines showing, expand with Read more */}
                    <div className="mb-4">
                      <p className={`text-sm text-neutral-700 leading-relaxed ${!expandedReviews[i] ? 'line-clamp-4' : ''}`}>
                        {rev.text}
                      </p>
                      <button
                        type="button"
                        onClick={() => setExpandedReviews((prev) => ({ ...prev, [i]: !prev[i] }))}
                        className="text-neutral-500 hover:text-[#16422b] font-semibold text-xs underline cursor-pointer mt-1.5"
                      >
                        {expandedReviews[i] ? 'Read less' : 'Read more'}
                      </button>
                    </div>
                  </div>

                  {/* Attached Trip Photo Thumbnail (natural look) */}
                  <div className="h-44 rounded-md overflow-hidden border border-neutral-200 mt-2">
                    <img
                      src={rev.photo}
                      alt={`${rev.name} safari review`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots at Bottom Center */}
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setActiveReviewPage(dot)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                    dot === activeReviewPage ? 'bg-[#16422b] w-6' : 'bg-neutral-300'
                  }`}
                  aria-label={`Page ${dot + 1}`}
                />
              ))}
            </div>

            {/* Right arrow for review carousel */}
            <button
              onClick={() => setActiveReviewPage((prev) => (prev + 1) % 4)}
              className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#16422b] text-white items-center justify-center shadow-md hover:bg-[#103321] transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Callout Strip (Background image with centered white serif title & Contact Us button) */}
      <section className="relative h-[280px] sm:h-[340px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image - Bright, saturated, luminous */}
        <img
          src="/src/assets/images/luxury_safari_lodge_view_1792866692401.jpg"
          alt="African safari landscape"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-120"
        />

        {/* Minimal Tint Overlay for crisp legibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
            Get in contact today to start <br />
            building your perfect tour.
          </h2>

          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-[#FAF7EE] hover:bg-white text-[#16422b] border border-white/40 text-xs font-bold uppercase tracking-widest rounded shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* 3. Three-Column Box Section (Brochure, Mailing list, Keep in touch with authentic social media icons) */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-center">
            {/* Col 1: Explore our latest brochure */}
            <div className="px-4 sm:px-8 py-6 md:py-0 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Explore our latest brochure
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  The newest brochure & tour program catalog
                </p>
              </div>

              <button
                onClick={() => {
                  if (onOpenBrochure) {
                    onOpenBrochure();
                  } else {
                    onNavigate('guides-faqs');
                  }
                }}
                className="px-8 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer shadow-xs"
              >
                Explore Brochure
              </button>
            </div>

            {/* Col 2: Join our mailing list */}
            <div className="px-4 sm:px-8 py-6 md:py-0 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Join our mailing list
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  For all the latest news and promotions
                </p>
              </div>

              <button
                onClick={() => onNavigate('subscribe')}
                className="px-8 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer shadow-xs"
              >
                Subscribe
              </button>
            </div>

            {/* Col 3: Let's keep in touch - Authentic Original Social Brand Colors (Facebook, Instagram, TikTok) */}
            <div className="px-4 sm:px-8 py-6 md:py-0 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  Let's keep in touch
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Follow us on:
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* 1. Facebook: Official Facebook Blue (#1877F2) */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-all cursor-pointer"
                  aria-label="Facebook (Official Brand Color)"
                  title="Follow Fifty4 Safaris on Facebook"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>

                {/* 2. Instagram: Official Instagram Gradient */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white flex items-center justify-center shadow-sm hover:scale-110 transition-all cursor-pointer"
                  aria-label="Instagram (Official Brand Color)"
                  title="Follow Fifty4 Safaris on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* 3. TikTok: Official TikTok Black with Brand Icon */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#000000] hover:bg-[#111111] border border-neutral-700 text-white flex items-center justify-center shadow-sm hover:scale-110 transition-all cursor-pointer"
                  aria-label="TikTok (Official Brand Color)"
                  title="Follow Fifty4 Safaris on TikTok"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.28 8.28 0 0 0 4.84 1.55v-3.5a4.85 4.85 0 0 1-1.07-.08z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
