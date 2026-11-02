import React, { useState, useMemo } from 'react';
import { TourPackage } from '../data/toursData';
import { PageView } from '../types';
import { Search, Filter, X, Clock, MapPin, CheckCircle, ArrowRight, SlidersHorizontal, Grid, List } from 'lucide-react';

interface CataloguePageProps {
  tours: TourPackage[];
  onSelectTour: (tourId: string) => void;
  onInquireTour: (tour: TourPackage) => void;
  onOpenTailorTrip: () => void;
  initialFilters?: { destination?: string; style?: string; duration?: string };
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  tours,
  onSelectTour,
  onInquireTour,
  onOpenTailorTrip,
  initialFilters
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<string>(initialFilters?.destination || 'All');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilters?.style || 'All');
  const [selectedDuration, setSelectedDuration] = useState<string>(initialFilters?.duration || 'All');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  React.useEffect(() => {
    if (initialFilters?.destination) {
      setSelectedDestination(initialFilters.destination);
    }
    if (initialFilters?.style) {
      setSelectedCategory(initialFilters.style);
    }
    if (initialFilters?.duration) {
      setSelectedDuration(initialFilters.duration);
    }
  }, [initialFilters]);

  const categories = [
    'All',
    'Gorilla and Primate Experiences',
    'Wildlife Safaris',
    'Great Migration Journeys',
    'Luxury Safari Experiences',
    'Adventure and Nature',
    'Culture and Community',
    'Honeymoons and Romantic Escapes',
    'Multi-Country African Journeys',
    'Beach and Safari Combinations'
  ];

  const destinationsList = ['All', 'Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Zambia', 'Multi-Country'];

  const filteredTours = useMemo(() => {
    return tours
      .filter((tour) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = tour.title.toLowerCase().includes(q);
          const matchesDest = tour.destinations.some(d => d.toLowerCase().includes(q));
          const matchesOverview = tour.overview.toLowerCase().includes(q);
          const matchesHighlight = tour.highlights.some(h => h.toLowerCase().includes(q));
          if (!matchesTitle && !matchesDest && !matchesOverview && !matchesHighlight) {
            return false;
          }
        }

        // Destination filter
        if (selectedDestination !== 'All') {
          if (selectedDestination === 'Multi-Country') {
            if (tour.destinations.length < 2) return false;
          } else if (!tour.destinations.includes(selectedDestination)) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== 'All') {
          if (tour.category !== selectedCategory && tour.travelStyle !== selectedCategory) {
            return false;
          }
        }

        // Duration filter
        if (selectedDuration !== 'All') {
          if (selectedDuration === 'short' && tour.durationDays > 6) return false;
          if (selectedDuration === 'medium' && (tour.durationDays < 7 || tour.durationDays > 10)) return false;
          if (selectedDuration === 'long' && tour.durationDays < 11) return false;
        }

        // Max price filter
        if (tour.priceUSD > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
        if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
        if (sortBy === 'duration-asc') return a.durationDays - b.durationDays;
        if (sortBy === 'duration-desc') return b.durationDays - a.durationDays;
        // Featured by default: flagship first
        if (a.isFlagship) return -1;
        if (b.isFlagship) return 1;
        return 0;
      });
  }, [tours, searchQuery, selectedDestination, selectedCategory, selectedDuration, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDestination('All');
    setSelectedCategory('All');
    setSelectedDuration('All');
    setMaxPrice(15000);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedDestination !== 'All' ||
    selectedCategory !== 'All' ||
    selectedDuration !== 'All' ||
    maxPrice < 15000;

  return (
    <div className="bg-[#FAF7F2] text-[#151713] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8 pb-6 border-b border-[#151713]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16422b] block mb-2">
            Vacation Packages & Itineraries
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#151713]">
                Safari & Tour Catalogue
              </h1>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                Browse our thoughtfully planned African expeditions across Uganda, Kenya, Tanzania, Rwanda, and Zambia. Each itinerary can be booked as a guaranteed small group or customized privately.
              </p>
            </div>
            <button
              onClick={onOpenTailorTrip}
              className="px-5 py-2.5 bg-[#16422b] hover:bg-[#103321] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow transition-colors cursor-pointer shrink-0"
            >
              Request Custom Route
            </button>
          </div>
        </div>

        {/* Filter Controls Bar (Top Search & Filter Strip) */}
        <div className="bg-white rounded-xl p-4 mb-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search gorillas, Serengeti, lions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF7F2] border border-neutral-300 rounded-md text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#16422b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Results count & View toggles */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs text-neutral-500 font-medium">
              Showing <strong className="text-neutral-900">{filteredTours.length}</strong> of {tours.length} safaris
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF7F2] border border-neutral-300 rounded-md px-2.5 py-1.5 text-xs font-semibold text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#16422b]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration-asc">Duration: Shortest</option>
                <option value="duration-desc">Duration: Longest</option>
              </select>
            </div>

            {/* View Mode Buttons */}
            <div className="hidden sm:flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-md border border-neutral-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-neutral-600 hover:text-neutral-900 cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white shadow-xs text-black font-bold' : ''
                }`}
                title="Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded text-neutral-600 hover:text-neutral-900 cursor-pointer ${
                  viewMode === 'list' ? 'bg-white shadow-xs text-black font-bold' : ''
                }`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#16422b] text-white text-xs font-semibold rounded-md"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Filter Sidebar + Catalogue Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Filter Sidebar */}
          <aside className={`lg:col-span-3 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#151713] flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-[#16422b]" />
                  <span>Filter Safaris</span>
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] text-[#16422b] hover:underline font-semibold cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Destination Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Destination
                </label>
                <div className="space-y-1">
                  {destinationsList.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDestination(d)}
                      className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors cursor-pointer flex items-center justify-between ${
                        selectedDestination === d
                          ? 'bg-[#FAF7F2] text-[#16422b] font-bold border-l-2 border-[#16422b]'
                          : 'text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{d}</span>
                      <span className="text-[10px] text-neutral-400">
                        {d === 'All'
                          ? tours.length
                          : tours.filter(t => t.destinations.includes(d)).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Style / Category Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Experience & Style
                </label>
                <div className="space-y-1">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedCategory(c)}
                      className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors cursor-pointer flex items-center justify-between ${
                        selectedCategory === c
                          ? 'bg-[#FAF7F2] text-[#16422b] font-bold border-l-2 border-[#16422b]'
                          : 'text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="truncate pr-2">{c}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Duration
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'All', label: 'Any Days' },
                    { id: 'short', label: '1 - 6 Days' },
                    { id: 'medium', label: '7 - 10 Days' },
                    { id: 'long', label: '11+ Days' }
                  ].map((dur) => (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setSelectedDuration(dur.id)}
                      className={`py-1.5 px-2 text-xs font-medium rounded border text-center transition-all cursor-pointer ${
                        selectedDuration === dur.id
                          ? 'bg-[#151713] text-white border-[#151713]'
                          : 'bg-[#FAF7F2] text-neutral-700 border-neutral-200'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Max Price
                  </label>
                  <span className="text-xs font-bold text-[#16422b]">
                    ${maxPrice.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="15000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#16422b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>$2,500</span>
                  <span>$15,000+</span>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Help in Sidebar */}
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                  Need Help Deciding?
                </span>
                <p className="text-xs text-neutral-600 mb-2 leading-relaxed">
                  Our safari architects in Kampala can recommend an itinerary tailored to your dates.
                </p>
                <a
                  href="https://wa.me/256700545454?text=Hello%20Fifty4%20Safaris%2C%20I%20need%20help%20choosing%20a%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold rounded transition-colors"
                >
                  WhatsApp Specialist
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Tour Package Results */}
          <main className="lg:col-span-9">
            {filteredTours.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-neutral-200">
                <p className="font-serif-luxury text-2xl font-bold text-[#151713] mb-2">
                  No Safaris Match Your Exact Filter
                </p>
                <p className="text-xs text-neutral-600 max-w-md mx-auto mb-6">
                  Try adjusting your duration, price limit, or selected category. Alternatively, let our concierge design a fully customized route for you.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={onOpenTailorTrip}
                    className="px-4 py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                  >
                    Build Custom Itinerary
                  </button>
                </div>
              </div>
            ) : viewMode === 'grid' ? (
              /* GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={tour.coverImage}
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {tour.isFlagship && (
                          <div className="absolute top-3 left-3 bg-[#151713] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow uppercase tracking-wider">
                            Flagship
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded">
                          {tour.destinations.join(' & ')}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-white/95 text-[#151713] text-xs font-bold px-2.5 py-1 rounded shadow">
                          {tour.durationDays} Days / {tour.durationNights} Nights
                        </div>
                      </div>

                      <div className="p-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#16422b] block mb-1">
                          {tour.category}
                        </span>
                        <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-2 group-hover:text-[#16422b] transition-colors">
                          {tour.title}
                        </h3>
                        <p className="text-xs text-neutral-600 line-clamp-2 mb-4 leading-relaxed">
                          {tour.overview}
                        </p>

                        <div className="space-y-1.5 mb-4">
                          {tour.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-neutral-700">
                              <CheckCircle className="w-3.5 h-3.5 text-[#16422b] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                          Verified Rate From
                        </span>
                        <div className="flex items-baseline">
                          <span className="font-serif-luxury text-xl font-bold text-[#151713]">
                            ${tour.priceUSD.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-neutral-500 ml-1">/ person</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onInquireTour(tour)}
                          className="px-3 py-2 text-xs font-medium text-neutral-600 hover:text-black hover:bg-neutral-100 rounded transition-colors cursor-pointer"
                        >
                          Inquire
                        </button>
                        <button
                          onClick={() => onSelectTour(tour.id)}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#16422b] hover:bg-[#103321] rounded shadow transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Itinerary</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* LIST VIEW */
              <div className="space-y-4">
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-lg transition-all p-4 sm:p-5 flex flex-col md:flex-row items-center gap-6 group"
                  >
                    <div className="relative w-full md:w-60 h-44 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={tour.coverImage}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#151713]/80 text-white text-[10px] px-2 py-0.5 rounded">
                        {tour.durationDays}D / {tour.durationNights}N
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-[11px] text-[#16422b] font-bold uppercase tracking-wider mb-1">
                        <span>{tour.primaryDestination}</span>
                        <span>·</span>
                        <span>{tour.category}</span>
                      </div>
                      <h3 className="font-serif-luxury text-xl font-bold text-[#151713] mb-1 group-hover:text-[#16422b] transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-neutral-600 line-clamp-2 mb-3 leading-relaxed">
                        {tour.overview}
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-neutral-600">
                        {tour.highlights.slice(0, 3).map((h, i) => (
                          <span key={i} className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-[#16422b]" />
                            <span className="line-clamp-1">{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full md:w-44 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-200 md:pl-6 text-left md:text-right shrink-0 flex md:flex-col justify-between items-center md:items-end">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                          From
                        </span>
                        <span className="font-serif-luxury text-2xl font-bold text-[#151713]">
                          ${tour.priceUSD.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">/ person</span>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => onSelectTour(tour.id)}
                          className="px-4 py-2 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
