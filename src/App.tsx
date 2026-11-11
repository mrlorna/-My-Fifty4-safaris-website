import React, { useState, useEffect } from 'react';
import { PageView, SafariEnquiry } from './types';
import { TOURS_DATA, TourPackage } from './data/toursData';
import { getStoredEnquiries } from './services/enquiryStorage';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedSafaris } from './components/FeaturedSafaris';
import { DestinationsSection } from './components/DestinationsSection';
import { BrandStorySection } from './components/BrandStorySection';
import { CataloguePage } from './components/CataloguePage';
import { TourDetailPage } from './components/TourDetailPage';
import { DestinationsPage } from './components/DestinationsPage';
import { TravelStylesPage } from './components/TravelStylesPage';
import { GuidesAndFaqsPage } from './components/GuidesAndFaqsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { OffersPage } from './components/OffersPage';
import { HomeReviewsAndPreFooter } from './components/HomeReviewsAndPreFooter';
import { TailorTripPage } from './components/TailorTripPage';
import { SubscribePage } from './components/SubscribePage';
import { VisasPage } from './components/VisasPage';
import { FaqsPage } from './components/FaqsPage';
import { GalleryPage } from './components/GalleryPage';
import { ReferralPage } from './components/ReferralPage';
import { TailorYourTripModal } from './components/TailorYourTripModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { ConciergePortalModal } from './components/ConciergePortalModal';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LanguageProvider } from './context/LanguageContext';

import { ShieldCheck, Calendar, Phone, Sparkles, MessageCircle, ArrowRight, ChevronUp, Mail, MapPin, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedTourId, setSelectedTourId] = useState<string>('gorillas-savannah-uganda');
  const [selectedDestId, setSelectedDestId] = useState<string>('uganda');
  const [catalogueFilters, setCatalogueFilters] = useState<{ destination?: string; style?: string; duration?: string }>({});
  const [guidesTopic, setGuidesTopic] = useState<string | undefined>(undefined);

  // Modals
  const [isTailorTripOpen, setIsTailorTripOpen] = useState(false);
  const [tailorTripPreselectedTitle, setTailorTripPreselectedTitle] = useState<string | undefined>(undefined);
  const [isConciergePortalOpen, setIsConciergePortalOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [quickInquireTour, setQuickInquireTour] = useState<TourPackage | null>(null);

  // Stored Enquiries
  const [enquiries, setEnquiries] = useState<SafariEnquiry[]>([]);
  const [lastSubmittedRef, setLastSubmittedRef] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setEnquiries(getStoredEnquiries());

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const refreshEnquiries = () => {
    setEnquiries(getStoredEnquiries());
  };

  const handleNavigate = (page: PageView, param?: string) => {
    if (page === 'tour-detail' && param) {
      setSelectedTourId(param);
    } else if (page === 'destinations' && param) {
      setSelectedDestId(param);
    } else if (page === 'tours' && param) {
      setCatalogueFilters({ destination: param });
    } else if (page === 'guides-faqs') {
      setGuidesTopic(param);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTour = (tourId: string) => {
    setSelectedTourId(tourId);
    setCurrentPage('tour-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destId: string) => {
    setSelectedDestId(destId);
    setCurrentPage('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (criteria: { destination: string; style: string; duration: string }) => {
    setCatalogueFilters(criteria);
    setCurrentPage('tours');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterByCategory = (category: string) => {
    setCatalogueFilters({ style: category });
    setCurrentPage('tours');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTailorTrip = (preselectedTitle?: string) => {
    setTailorTripPreselectedTitle(preselectedTitle);
    setCurrentPage('tailor-trip');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquiryCreated = (enquiry: SafariEnquiry) => {
    setLastSubmittedRef(enquiry.referenceCode);
    refreshEnquiries();
  };

  const activeTour = TOURS_DATA.find((t) => t.id === selectedTourId) || TOURS_DATA[0];

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#151713]">
      {/* Toast Notification when lead is submitted */}
      {lastSubmittedRef && (
        <div className="bg-[#16422b] text-white px-4 py-2 text-xs font-semibold flex items-center justify-between shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Inquiry saved successfully! Reference Code: <strong className="font-mono underline">{lastSubmittedRef}</strong>. Our team has been notified.</span>
            </span>
            <button
              onClick={() => setLastSubmittedRef(null)}
              className="text-white hover:text-neutral-300 ml-4 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Primary Always-Fixed Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTailorTrip={() => handleOpenTailorTrip()}
        onOpenConciergePortal={() => setIsConciergePortalOpen(true)}
        enquiriesCount={enquiries.length}
      />

      {/* Main Page Routing with Top Padding for Fixed Two-Tier Navigation Bar */}
      <main className="flex-1 pt-[104px] sm:pt-[110px]">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with auto-scrolling titles, search widget, and dark Contact Us bar */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenTailorTrip={() => handleOpenTailorTrip()}
              onSearchTours={handleHeroSearch}
            />

            {/* 2. "Find your dream safari in..." (6-Grid Destination Showcase matching screenshot) */}
            <DestinationsSection
              onSelectDestination={handleSelectDestination}
              onNavigate={handleNavigate}
            />

            {/* 3. "Our most popular tours" (4 portrait cards carousel matching screenshot) */}
            <FeaturedSafaris
              tours={TOURS_DATA}
              onSelectTour={handleSelectTour}
              onNavigate={handleNavigate}
              onQuickInquire={(tour) => setQuickInquireTour(tour)}
            />

            {/* 4. "What our customers think", full-width callout strip, and 3-column pre-footer */}
            <HomeReviewsAndPreFooter
              onNavigate={handleNavigate}
              onOpenTailorTrip={() => handleOpenTailorTrip()}
              onOpenBrochure={() => setIsBrochureOpen(true)}
            />
          </>
        )}

        {currentPage === 'tours' && (
          <CataloguePage
            tours={TOURS_DATA}
            onSelectTour={handleSelectTour}
            onInquireTour={(tour) => setQuickInquireTour(tour)}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            initialFilters={catalogueFilters}
          />
        )}

        {currentPage === 'tour-detail' && (
          <TourDetailPage
            tour={activeTour}
            onBack={() => handleNavigate('destinations')}
            onNavigate={handleNavigate}
            onInquire={(tour) => setQuickInquireTour(tour)}
            onOpenTailorTrip={() => handleOpenTailorTrip(activeTour.title)}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            tours={TOURS_DATA}
            onSelectTour={handleSelectTour}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            initialSelectedId={selectedDestId}
          />
        )}

        {currentPage === 'travel-styles' && (
          <TravelStylesPage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onFilterToursByCategory={handleFilterByCategory}
          />
        )}

        {currentPage === 'guides-faqs' && (
          <GuidesAndFaqsPage
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onNavigate={handleNavigate}
            initialTopic={guidesTopic}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'offers' && (
          <OffersPage
            onSelectTour={handleSelectTour}
            onOpenTailorTrip={handleOpenTailorTrip}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'tailor-trip' && (
          <TailorTripPage
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            preselectedTourTitle={tailorTripPreselectedTitle}
            onSuccess={handleEnquiryCreated}
          />
        )}

        {currentPage === 'subscribe' && (
          <SubscribePage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
          />
        )}

        {currentPage === 'visas' && (
          <VisasPage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}

        {currentPage === 'faqs' && (
          <FaqsPage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
          />
        )}

        {currentPage === 'referral' && (
          <ReferralPage
            onNavigate={handleNavigate}
            onOpenTailorTrip={() => handleOpenTailorTrip()}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTailorTrip={() => handleOpenTailorTrip()}
        onOpenConciergePortal={() => setIsConciergePortalOpen(true)}
      />

      {/* Modals */}
      <TailorYourTripModal
        isOpen={isTailorTripOpen}
        onClose={() => setIsTailorTripOpen(false)}
        preselectedTourTitle={tailorTripPreselectedTitle}
        onSuccess={handleEnquiryCreated}
      />

      <QuickInquiryModal
        tour={quickInquireTour}
        isOpen={quickInquireTour !== null}
        onClose={() => setQuickInquireTour(null)}
        onSuccess={handleEnquiryCreated}
      />

      <ConciergePortalModal
        isOpen={isConciergePortalOpen}
        onClose={() => setIsConciergePortalOpen(false)}
        enquiries={enquiries}
        onRefresh={refreshEnquiries}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenTailorTrip={() => handleOpenTailorTrip()}
      />

      {/* Persistent Floating WhatsApp Chat Widget in Bottom Right */}
      <WhatsAppButton />
    </div>
  </LanguageProvider>
  );
}
