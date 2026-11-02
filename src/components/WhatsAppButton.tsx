import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Floating Tooltip - Bright Clean Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#151713] p-3 rounded-xl shadow-xl border border-neutral-200 text-xs max-w-xs animate-bounce-subtle">
          <div>
            <span className="font-bold text-[#16422b] block">Kampala Safari Concierge</span>
            <span className="text-neutral-600 text-[11px]">Chat with our naturalist team live on WhatsApp.</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-800 p-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/256789164360?text=Hello%20Fifty4%20Safaris%2C%20I%20am%20interested%20in%20planning%20an%20African%20safari."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        aria-label="Chat with Fifty4 Safaris on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
