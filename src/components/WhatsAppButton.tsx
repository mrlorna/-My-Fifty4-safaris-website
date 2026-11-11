import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissedBadge, setHasDismissedBadge] = useState(false);

  const phoneFormatted = '+256764544719';
  const whatsappNumber = '256764544719';

  const defaultGreeting = language === 'fr'
    ? 'Bonjour Fifty4 Safaris, je souhaite planifier un safari en Afrique de l’Est.'
    : language === 'sw'
    ? 'Habari Fifty4 Safaris, ninapenda kupanga safari ya kibinafsi.'
    : 'Hello Fifty4 Safaris, I would like to inquire about planning an East African safari.';

  const quickPrompts = [
    {
      label: language === 'fr' ? '🦍 Vérifier permis gorilles 2026/2027' : language === 'sw' ? '🦍 Vibali vya sokwe 2026/2027' : '🦍 Check Gorilla Permits for 2026/2027',
      text: 'Hello Fifty4 Safaris, I would like to check mountain gorilla permit availability for 2026/2027.'
    },
    {
      label: language === 'fr' ? '💰 Offres spéciales safari en cours' : language === 'sw' ? '💰 Ofa maalum za safari' : '💰 Current Safari Special Offers & Savings',
      text: 'Hello Fifty4 Safaris, please send me information on current safari discounts and 2027 early bird offers.'
    },
    {
      label: language === 'fr' ? '🗺️ Devis safari privé sur mesure' : language === 'sw' ? '🗺️ Panga safari maalum' : '🗺️ Custom Private Itinerary Advice',
      text: 'Hello Fifty4 Safaris, I would like advice from your safari team on planning a custom safari trip.'
    }
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const textToSend = encodeURIComponent(customText || defaultGreeting);
    window.open(`https://wa.me/${whatsappNumber}?text=${textToSend}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating Interactive Concierge Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-fade-in text-[#151713]">
          {/* Card Header */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  <MessageCircle className="w-6 h-6 fill-white text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#128C7E]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {t('whatsappConcierge')}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>{t('whatsappOnline')} · {phoneFormatted}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close chat card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-[#FAF7EE]/50 space-y-3">
            {/* Staff Welcome Bubble */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-neutral-200/80 text-xs shadow-2xs space-y-1">
              <p className="font-medium text-neutral-800">
                {language === 'fr'
                  ? 'Bonjour ! Comment pouvons-nous vous aider aujourd’hui pour votre voyage de rêve ?'
                  : language === 'sw'
                  ? 'Jambo! Tutakusaidia vipi leo kupanga safari yako ya ndoto?'
                  : 'Hello! How can our Kampala safari naturalists help plan your dream safari today?'}
              </p>
              <span className="text-[10px] text-neutral-400 block text-right">Just now</span>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleOpenWhatsApp(prompt.text)}
                  className="w-full p-2 text-left text-xs bg-white hover:bg-emerald-50 text-neutral-800 hover:text-[#128C7E] rounded-lg border border-neutral-200 hover:border-emerald-300 transition-all font-medium flex items-center justify-between group cursor-pointer shadow-2xs"
                >
                  <span className="line-clamp-1">{prompt.label}</span>
                  <Send className="w-3 h-3 text-neutral-400 group-hover:text-[#128C7E] shrink-0 ml-1.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Card Footer CTA Button */}
          <div className="p-3 bg-white border-t border-neutral-100 flex items-center justify-between gap-2">
            <span className="text-[10px] text-neutral-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official WhatsApp Business</span>
            </span>

            <button
              type="button"
              onClick={() => handleOpenWhatsApp()}
              className="px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Tooltip Pill (if not dismissed and not open) */}
      {!isOpen && !hasDismissedBadge && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-[#151713] px-3.5 py-2 rounded-full shadow-lg border border-neutral-200 text-xs animate-bounce-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-bold text-[#16422b]">
            {t('whatsappTitle')}
          </span>
          <span className="text-neutral-500 text-[11px]">· Online now</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHasDismissedBadge(true);
            }}
            className="text-neutral-400 hover:text-neutral-700 p-0.5 ml-1 cursor-pointer"
            title="Dismiss badge"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Main Circle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer group"
        aria-label="Chat with Fifty4 Safaris on WhatsApp"
        title="Chat live on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white text-white group-hover:scale-110 transition-transform" />
        )}

        {/* Small notification dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-900">
            1
          </span>
        )}
      </button>
    </div>
  );
};
