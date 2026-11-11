import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'sw';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  country: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧', country: 'Global / UK / US' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', country: 'France / Canada / DRC' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿', country: 'East Africa / EAC' }
];

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    sw: string;
  };
}

const TRANSLATIONS: Translations = {
  // Navigation
  destinations: {
    en: 'DESTINATIONS',
    fr: 'DESTINATIONS',
    sw: 'MAENEO YA SAFARI'
  },
  offers: {
    en: 'OFFERS',
    fr: 'OFFRES',
    sw: 'OFA MAALUM'
  },
  info: {
    en: 'INFO',
    fr: 'INFORMATIONS',
    sw: 'TAARIFA'
  },
  customTours: {
    en: 'CUSTOM TOURS',
    fr: 'SUR MESURE',
    sw: 'SAFARI MAALUM'
  },
  contact: {
    en: 'CONTACT',
    fr: 'CONTACT',
    sw: 'WASILIANA NASI'
  },
  tailorATrip: {
    en: 'TAILOR A TRIP',
    fr: 'CRÉER UN VOYAGE',
    sw: 'PANGA SAFARI'
  },
  login: {
    en: 'LOGIN',
    fr: 'CONNEXION',
    sw: 'INGIA'
  },

  // Top Bar
  address: {
    en: 'Plot 54, Kampala Road, Kampala · Uganda',
    fr: 'Plot 54, Kampala Road, Kampala · Ouganda',
    sw: 'Plot 54, Kampala Road, Kampala · Uganda'
  },
  licensedOperator: {
    en: 'Direct Licensed UWA & RDB Safari Operator',
    fr: 'Opérateur Safari Direct Agréé UWA & RDB',
    sw: 'Waendeshaji Rasmi Walioidhinishwa na UWA & RDB'
  },
  conciergeDesk: {
    en: '24/7 Safari Help Desk',
    fr: 'Assistance Safari 24h/7j',
    sw: 'Dawati la Usaidizi Saa 24/7'
  },
  staffPortal: {
    en: 'Staff Portal',
    fr: 'Portail Personnel',
    sw: 'Tovuti ya Wafanyakazi'
  },

  // Submenu Info items
  visasPassports: {
    en: 'Visas & Passports',
    fr: 'Visas & Passeports',
    sw: 'Visa na Pasipoti'
  },
  beforeYourTrip: {
    en: 'Before Your Trip',
    fr: 'Avant Votre Départ',
    sw: 'Kabla ya Safari Yako'
  },
  faqs: {
    en: 'FAQ’s',
    fr: 'FAQ (Questions)',
    sw: 'Maswali Yanayoulizwa'
  },
  aboutUs: {
    en: 'About Us',
    fr: 'À Propos de Nous',
    sw: 'Kuhusu Sisi'
  },
  gallery: {
    en: 'Gallery',
    fr: 'Galerie Photos',
    sw: 'Picha za Safari'
  },
  referral: {
    en: 'Referral Program',
    fr: 'Programme de Parrainage',
    sw: 'Mpango wa Rufaa'
  },

  // WhatsApp & Support
  whatsappTitle: {
    en: 'Chat on WhatsApp',
    fr: 'Discuter sur WhatsApp',
    sw: 'Zungumza WhatsApp'
  },
  whatsappConcierge: {
    en: 'Kampala Safari Concierge',
    fr: 'Conciergerie Safari Kampala',
    sw: 'Wahudumu wa Safari Kampala'
  },
  whatsappSub: {
    en: 'Replies live in ~5 minutes with tour pricing and permit advice.',
    fr: 'Répond en direct en ~5 min avec tarifs et disponibilités permis.',
    sw: 'Hujibu moja kwa moja kwa dakika 5 kuhusu vibali na bei.'
  },
  whatsappOnline: {
    en: 'Online now',
    fr: 'En ligne',
    sw: 'Wapo mtandaoni'
  },

  // Interactive Route Map
  circuitRouteMap: {
    en: 'Interactive Circuit Route Map',
    fr: 'Carte Interactive du Circuit',
    sw: 'Ramani Shirikishi ya Njia ya Safari'
  },
  dailyStops: {
    en: 'Daily Safari Stops & Waypoints',
    fr: 'Étapes Quotidiennes du Safari',
    sw: 'Vituo vya Safari kwa Kila Siku'
  },
  autoPlay: {
    en: 'Auto-Play Route',
    fr: 'Lecture Automatique',
    sw: 'Cheza Njia Kiotomatiki'
  },
  pauseRoute: {
    en: 'Pause Route',
    fr: 'Pause',
    sw: 'Simamisha'
  },
  allStops: {
    en: 'All Stops',
    fr: 'Toutes les Étapes',
    sw: 'Vituo Vyote'
  },
  dayLabel: {
    en: 'Day',
    fr: 'Jour',
    sw: 'Siku'
  },
  elevation: {
    en: 'Altitude & Terrain',
    fr: 'Altitude & Relief',
    sw: 'Kimo na Mandhari'
  },
  travelMode: {
    en: '100% Private 4WD Land Cruiser',
    fr: '100% 4x4 Privé Land Cruiser',
    sw: '100% Gari Binafsi la 4x4 Land Cruiser'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currentOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('fifty4_safaris_lang') as Language;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'sw')) {
        return saved;
      }
    } catch (e) {
      // Ignore localStorage issues
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('fifty4_safaris_lang', lang);
    } catch (e) {
      // Ignore
    }
  };

  const t = (key: string): string => {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
      return TRANSLATIONS[key][language];
    }
    if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
      return TRANSLATIONS[key]['en'];
    }
    return key;
  };

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentOption }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
