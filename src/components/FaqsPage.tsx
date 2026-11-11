import React, { useState, useMemo } from 'react';
import { PageView } from '../types';
import { STRUCTURED_FAQS_DATA, FAQItem, FAQSubCategory } from '../data/faqsData';
import {
  Search,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  HelpCircle,
  X,
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface FaqsPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenTailorTrip: () => void;
  onOpenBrochure?: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({
  onNavigate,
  onOpenTailorTrip,
  onOpenBrochure
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (catTitle: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catTitle]: !prev[catTitle]
    }));
  };

  const toggleQuestion = (questionId: string) => {
    setActiveQuestionId((prev) => (prev === questionId ? null : questionId));
  };

  // Filtered FAQs when search query is typed
  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = searchQuery.toLowerCase();
    const results: { section: string; subCategory: string; item: FAQItem }[] = [];

    STRUCTURED_FAQS_DATA.forEach((sec) => {
      sec.subCategories.forEach((sub) => {
        sub.questions.forEach((item) => {
          if (
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
          ) {
            results.push({
              section: sec.sectionTitle,
              subCategory: sub.title,
              item
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery, isSearching]);

  return (
    <div className="bg-white text-[#151713] min-h-screen">
      {/* 1. Breadcrumbs strictly matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2">
        <nav className="text-xs text-neutral-500 flex items-center gap-1.5 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#16422b] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#16422b] font-semibold">FAQs</span>
        </nav>
      </div>

      {/* 2. Main Title strictly matching screenshot */}
      <header className="max-w-4xl mx-auto px-4 sm:px-8 pt-6 pb-8 text-center">
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
          How can we help?
        </h1>
      </header>

      {/* 3. Search Box in light cream container strictly matching screenshot */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="bg-[#FAF7EE] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border border-neutral-200/80 shadow-xs">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] shrink-0">
            Search our FAQs
          </h2>

          <div className="flex flex-1 w-full items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type keywords, gorilla permits, payment plans, packing..."
                className="w-full pl-4 pr-10 py-3 bg-white border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#16422b] focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('faqs-results-container');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-3 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* 4. Search Results View (If Searching) */}
      {isSearching && (
        <section id="faqs-results-container" className="max-w-6xl mx-auto px-4 sm:px-8 mb-16 scroll-mt-24">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
            <span className="text-sm font-bold text-neutral-700">
              Found {searchResults.length} matching answer{searchResults.length === 1 ? '' : 's'} for "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[#16422b] hover:underline cursor-pointer"
            >
              Clear search & view all categories
            </button>
          </div>

          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map(({ section, subCategory, item }) => {
                const isOpen = activeQuestionId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-neutral-200 rounded-lg p-5 bg-white hover:border-[#16422b]/50 transition-all shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      <span>{section}</span>
                      <span>·</span>
                      <span className="text-[#16422b]">{subCategory}</span>
                    </div>

                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                    >
                      <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#16422b] transition-colors leading-snug">
                        {item.question}
                      </h3>
                      <span className="p-1 text-neutral-400 group-hover:text-[#16422b] transition-colors shrink-0">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pt-3 border-t border-neutral-100 text-xs sm:text-sm text-neutral-600 leading-relaxed bg-[#FAF7EE] p-4 rounded-md">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#FAF7EE] rounded-xl border border-neutral-200 text-neutral-600 space-y-3">
              <HelpCircle className="w-8 h-8 text-neutral-400 mx-auto" />
              <p className="text-sm font-semibold">No direct answers found for "{searchQuery}".</p>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Try searching for "gorilla", "permits", "payment", "flights", or contact our Kampala desk directly.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 bg-[#16422b] text-white text-xs font-bold uppercase rounded cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>
      )}

      {/* 5. Three Structured Chronological Sections strictly matching the screenshot */}
      {!isSearching && (
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16 mb-20">
          {STRUCTURED_FAQS_DATA.map((section, secIdx) => (
            <div key={section.sectionTitle} className="space-y-8">
              {/* Main Section Heading matching screenshot */}
              <div className="border-b-2 border-neutral-200 pb-3">
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713]">
                  {section.sectionTitle}
                </h2>
              </div>

              {/* 3-Column Responsive Grid matching screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {section.subCategories.map((sub) => {
                  const isExpanded = !!expandedCategories[sub.title];
                  const displayedQuestions = isExpanded
                    ? sub.questions
                    : sub.questions.slice(0, 2);

                  return (
                    <div key={sub.title} className="space-y-3">
                      {/* Subcategory title with count */}
                      <h3 className="font-bold text-sm text-neutral-900 flex items-center justify-between">
                        <span>
                          {sub.title} ({sub.count})
                        </span>
                      </h3>

                      {/* Question links matching screenshot */}
                      <ul className="space-y-2.5 text-xs sm:text-[13px]">
                        {displayedQuestions.map((q) => {
                          const isOpen = activeQuestionId === q.id;
                          return (
                            <li key={q.id} className="group">
                              <button
                                onClick={() => toggleQuestion(q.id)}
                                className="text-left text-[#16422b] hover:text-[#103321] hover:underline cursor-pointer block leading-relaxed font-normal"
                              >
                                {q.question}
                              </button>

                              {/* In-place Accordion Expansion */}
                              {isOpen && (
                                <div className="mt-2 p-3 bg-[#FAF7EE] border border-neutral-200 rounded-md text-xs text-neutral-700 leading-relaxed animate-fade-in shadow-2xs">
                                  <p>{q.answer}</p>
                                  <div className="mt-2 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                                    <span className="flex items-center gap-1 text-[#16422b] font-semibold">
                                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                      Verified UWA Protocol
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleQuestion(q.id);
                                      }}
                                      className="hover:underline font-bold"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      {/* "See all" button if more questions exist */}
                      {sub.questions.length > 2 && (
                        <button
                          onClick={() => toggleCategory(sub.title)}
                          className="text-xs font-bold text-neutral-600 hover:text-[#16422b] underline cursor-pointer inline-flex items-center gap-1 pt-1"
                        >
                          <span>{isExpanded ? 'Show less' : 'See all'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Faint Divider between sections matching screenshot */}
              {secIdx < STRUCTURED_FAQS_DATA.length - 1 && (
                <hr className="border-t border-neutral-200 pt-4" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* 6. "Can't find the information you need?" callout box strictly matching screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-[#FAF7EE] rounded-2xl border border-neutral-200/90 py-12 px-6 sm:px-12 text-center max-w-4xl mx-auto shadow-xs">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151713] mb-4">
            Can't find the information you need?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-6">
            Our safari consultants on Plot 54 Kampala Road can answer any custom questions regarding gorilla permits, private 4x4 transport, or lodge reservations.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>CONTACT US</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
