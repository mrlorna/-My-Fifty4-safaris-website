import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { TourPackage, ItineraryDay } from '../data/toursData';
import {
  Compass,
  Play,
  Pause,
  RotateCcw,
  MapPin,
  Calendar,
  Sparkles,
  Maximize2,
  Minimize2,
  ChevronRight,
  ShieldCheck,
  Navigation,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SafariRouteMapProps {
  tour: TourPackage;
  onSelectDay?: (dayNumber: number) => void;
}

interface MapCoordinate {
  x: number;
  y: number;
  name: string;
  region: string;
  altitude?: string;
  icon?: string;
}

// Normalized coordinate lookup for East Africa destinations on our 800x520 canvas
const DESTINATION_COORDS: Record<string, { x: number; y: number; region: string; altitude: string; icon: string }> = {
  // Uganda
  entebbe: { x: 260, y: 220, region: 'Uganda', altitude: '1,180m', icon: '✈️' },
  kampala: { x: 268, y: 205, region: 'Uganda', altitude: '1,190m', icon: '🏛️' },
  bwindi: { x: 165, y: 295, region: 'Uganda', altitude: '2,100m', icon: '🦍' },
  'queen elizabeth': { x: 175, y: 245, region: 'Uganda', altitude: '910m', icon: '🦁' },
  murchison: { x: 225, y: 120, region: 'Uganda', altitude: '620m', icon: '🌊' },
  kibale: { x: 195, y: 215, region: 'Uganda', altitude: '1,590m', icon: '🐒' },
  'lake mburo': { x: 220, y: 260, region: 'Uganda', altitude: '1,280m', icon: '🦓' },
  jinja: { x: 295, y: 205, region: 'Uganda', altitude: '1,230m', icon: '⛵' },
  ziwa: { x: 245, y: 160, region: 'Uganda', altitude: '1,050m', icon: '🦏' },
  kidepo: { x: 310, y: 70, region: 'Uganda', altitude: '1,000m', icon: '🐆' },
  rwenzori: { x: 160, y: 210, region: 'Uganda', altitude: '5,109m', icon: '🏔️' },

  // Kenya
  nairobi: { x: 470, y: 255, region: 'Kenya', altitude: '1,795m', icon: '✈️' },
  'masai mara': { x: 380, y: 275, region: 'Kenya', altitude: '1,500m', icon: '🐆' },
  amboseli: { x: 485, y: 310, region: 'Kenya', altitude: '1,155m', icon: '🐘' },
  'lake nakuru': { x: 430, y: 220, region: 'Kenya', altitude: '1,754m', icon: '🦩' },
  samburu: { x: 475, y: 170, region: 'Kenya', altitude: '1,000m', icon: '🦒' },
  tsavo: { x: 530, y: 340, region: 'Kenya', altitude: '800m', icon: '🦏' },
  diani: { x: 585, y: 385, region: 'Kenya', altitude: '10m', icon: '🏖️' },

  // Tanzania
  serengeti: { x: 365, y: 315, region: 'Tanzania', altitude: '1,450m', icon: '🦁' },
  ngorongoro: { x: 410, y: 335, region: 'Tanzania', altitude: '2,200m', icon: '🌋' },
  tarangire: { x: 430, y: 365, region: 'Tanzania', altitude: '1,100m', icon: '🌳' },
  'lake manyara': { x: 415, y: 350, region: 'Tanzania', altitude: '960m', icon: '🦩' },
  arusha: { x: 460, y: 335, region: 'Tanzania', altitude: '1,400m', icon: '🏙️' },
  kilimanjaro: { x: 490, y: 325, region: 'Tanzania', altitude: '5,895m', icon: '🏔️' },
  zanzibar: { x: 610, y: 410, region: 'Tanzania', altitude: '15m', icon: '🏝️' },

  // Rwanda
  kigali: { x: 185, y: 330, region: 'Rwanda', altitude: '1,567m', icon: '🏛️' },
  volcanoes: { x: 165, y: 315, region: 'Rwanda', altitude: '2,400m', icon: '🦍' },
  nyungwe: { x: 160, y: 360, region: 'Rwanda', altitude: '2,000m', icon: '🌿' },
  'lake kivu': { x: 155, y: 335, region: 'Rwanda', altitude: '1,460m', icon: '⛵' },
  akagera: { x: 210, y: 330, region: 'Rwanda', altitude: '1,300m', icon: '🦏' },

  // Zambia / Southern Africa circuit
  lusaka: { x: 280, y: 470, region: 'Zambia', altitude: '1,280m', icon: '✈️' },
  'south luangwa': { x: 370, y: 450, region: 'Zambia', altitude: '600m', icon: '🐆' },
  'victoria falls': { x: 210, y: 490, region: 'Zambia', altitude: '915m', icon: '🌊' }
};

export const SafariRouteMap: React.FC<SafariRouteMapProps> = ({ tour, onSelectDay }) => {
  const { t } = useLanguage();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTerrain, setShowTerrain] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  // Map each itinerary day to a geographic coordinate
  const routeStops = useMemo(() => {
    return tour.itinerary.map((day, idx) => {
      const locLower = (day.location + ' ' + day.title).toLowerCase();
      let matchedCoord = {
        x: 260 + (idx * 25) % 300,
        y: 200 + (idx * 20) % 180,
        name: day.location,
        region: 'East Africa',
        altitude: '1,200m',
        icon: '📍'
      };

      for (const [key, val] of Object.entries(DESTINATION_COORDS)) {
        if (locLower.includes(key)) {
          matchedCoord = {
            x: val.x,
            y: val.y,
            name: day.location,
            region: val.region,
            altitude: val.altitude,
            icon: val.icon
          };
          break;
        }
      }

      // Add gentle jitter if multiple days share the same stop so pins don't overlap 100%
      const jitterX = (idx % 3 - 1) * 6;
      const jitterY = (Math.floor(idx / 2) % 3 - 1) * 6;

      return {
        ...day,
        coord: {
          ...matchedCoord,
          x: matchedCoord.x + jitterX,
          y: matchedCoord.y + jitterY
        }
      };
    });
  }, [tour.itinerary]);

  // Generate D3 curved route path through stops
  const pathData = useMemo(() => {
    if (routeStops.length === 0) return '';
    const points: [number, number][] = routeStops.map(s => [s.coord.x, s.coord.y]);
    const lineGenerator = d3.line<[number, number]>()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveCatmullRom.alpha(0.6));
    return lineGenerator(points) || '';
  }, [routeStops]);

  // Auto-play through stops
  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setSelectedDayIndex((prev) => {
        if (prev === null || prev >= routeStops.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [isPlaying, routeStops.length]);

  const activeStop = selectedDayIndex !== null ? routeStops[selectedDayIndex] : null;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col">
      {/* Top Header Bar with Scrubber and Controls */}
      <div className="bg-[#FAF7EE] px-5 sm:px-6 py-4 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#16422b] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Compass className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#151713] flex items-center gap-2">
              <span>{t('circuitRouteMap')}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#16422b]">
                {tour.destinations.join(' · ')}
              </span>
            </h3>
            <span className="text-[11px] text-neutral-500">
              Interactive D3 visual tracking · {tour.durationDays} Days / {tour.durationNights} Nights · {routeStops.length} Waypoints
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              isPlaying
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-[#16422b] text-white hover:bg-[#103321]'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? t('pauseRoute') : t('autoPlay')}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setSelectedDayIndex(null);
            }}
            className="p-1.5 rounded-lg bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200 transition-colors cursor-pointer"
            title="Reset to All Stops"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setShowTerrain(!showTerrain)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer hidden md:flex items-center gap-1 ${
              showTerrain
                ? 'bg-emerald-50 text-[#16422b] border-emerald-300'
                : 'bg-white text-neutral-600 border-neutral-200'
            }`}
          >
            <Navigation className="w-3 h-3" />
            <span>{t('elevation')}</span>
          </button>
        </div>
      </div>

      {/* Day Scrubber Pills Bar */}
      <div className="bg-[#F4F1E6] px-4 sm:px-6 py-2 border-b border-neutral-200/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        <button
          type="button"
          onClick={() => {
            setIsPlaying(false);
            setSelectedDayIndex(null);
          }}
          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
            selectedDayIndex === null
              ? 'bg-[#16422b] text-white shadow-xs'
              : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          {t('allStops')}
        </button>

        {routeStops.map((stop, idx) => {
          const isSelected = selectedDayIndex === idx;
          return (
            <button
              key={stop.day}
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setSelectedDayIndex(idx);
              }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#16422b] text-white shadow-xs ring-2 ring-emerald-600/30'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <span>{t('dayLabel')} {stop.day}</span>
              <span className="text-[10px] text-neutral-400 font-normal">({stop.location.split(' ')[0]})</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive SVG Map Canvas */}
      <div className="relative bg-[#ECE7D5] overflow-hidden min-h-[380px] sm:min-h-[460px] select-none">
        <svg
          ref={svgRef}
          viewBox="100 40 560 440"
          className="w-full h-full min-h-[380px] sm:min-h-[460px] transition-all"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16422b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#16422b" />
            </linearGradient>

            <linearGradient id="lakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
            </linearGradient>

            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Regional Landmass Backgrounds */}
          <g className="landmass opacity-90">
            {/* Uganda Landmass polygon */}
            <path
              d="M 140,80 L 330,60 L 340,160 L 320,230 L 240,290 L 160,300 L 140,200 Z"
              fill="#E3DEC8"
              stroke="#D1CBB3"
              strokeWidth="1.5"
            />
            {/* Kenya Landmass polygon */}
            <path
              d="M 330,60 L 580,100 L 610,360 L 540,400 L 450,330 L 340,160 Z"
              fill="#E8E3CD"
              stroke="#D1CBB3"
              strokeWidth="1.5"
            />
            {/* Tanzania Landmass polygon */}
            <path
              d="M 240,290 L 450,330 L 540,400 L 620,440 L 480,480 L 260,450 L 180,360 Z"
              fill="#DFD9C2"
              stroke="#D1CBB3"
              strokeWidth="1.5"
            />
            {/* Rwanda Landmass */}
            <path
              d="M 150,300 L 220,300 L 210,360 L 150,360 Z"
              fill="#E5E0CB"
              stroke="#C4BEA4"
              strokeWidth="1"
            />
          </g>

          {/* Great Rift Valley & Iconic Lakes */}
          <g className="lakes">
            {/* Lake Victoria */}
            <path
              d="M 270,230 C 310,210 360,230 370,270 C 380,310 330,340 280,330 C 240,320 230,270 270,230 Z"
              fill="url(#lakeGrad)"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.85"
            />
            <text x="300" y="275" fontSize="11" fill="#1e40af" fontWeight="bold" opacity="0.7">
              Lake Victoria
            </text>

            {/* Lake Albert */}
            <ellipse cx="190" cy="140" rx="14" ry="42" transform="rotate(35 190 140)" fill="url(#lakeGrad)" opacity="0.8" />
            <text x="135" y="145" fontSize="9" fill="#1e40af" opacity="0.6">Lake Albert</text>

            {/* Lake Edward */}
            <ellipse cx="160" cy="245" rx="10" ry="24" transform="rotate(25 160 245)" fill="url(#lakeGrad)" opacity="0.8" />
            <text x="110" y="250" fontSize="8" fill="#1e40af" opacity="0.6">Lake Edward</text>

            {/* Lake Kivu */}
            <ellipse cx="150" cy="340" rx="8" ry="18" fill="url(#lakeGrad)" opacity="0.8" />

            {/* Lake Tanganyika */}
            <path d="M 175,370 Q 185,430 205,480" stroke="#60a5fa" strokeWidth="10" strokeLinecap="round" opacity="0.7" fill="none" />
            <text x="125" y="420" fontSize="8" fill="#1e40af" opacity="0.6">Lake Tanganyika</text>

            {/* Indian Ocean (Right Edge) */}
            <path
              d="M 600,120 Q 640,250 630,460 L 660,460 L 660,120 Z"
              fill="url(#lakeGrad)"
              opacity="0.6"
            />
            <text x="615" y="320" fontSize="10" fill="#1e40af" opacity="0.7" transform="rotate(90 615 320)">
              Indian Ocean
            </text>
          </g>

          {/* Regional Country Outlines & Labels */}
          <g className="labels" opacity="0.65">
            <text x="210" y="190" fontSize="14" fill="#525252" fontWeight="800" letterSpacing="3">
              UGANDA
            </text>
            <text x="460" y="160" fontSize="14" fill="#525252" fontWeight="800" letterSpacing="3">
              KENYA
            </text>
            <text x="350" y="410" fontSize="14" fill="#525252" fontWeight="800" letterSpacing="3">
              TANZANIA
            </text>
            <text x="155" y="325" fontSize="8" fill="#525252" fontWeight="bold">
              RWANDA
            </text>

            {/* Mountain Peaks / Icons */}
            <text x="480" y="320" fontSize="10" fill="#78350f">
              🏔️ Mt. Kilimanjaro (5,895m)
            </text>
          </g>

          {/* D3 Interpolated Route Path */}
          {pathData && (
            <g className="route-paths">
              {/* Route shadow line */}
              <path
                d={pathData}
                fill="none"
                stroke="#151713"
                strokeWidth="4"
                opacity="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Animated Dashed Main Circuit Route */}
              <path
                d={pathData}
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </g>
          )}

          {/* Safari Stops Pins & Waypoints */}
          {routeStops.map((stop, idx) => {
            const isSelected = selectedDayIndex === idx;
            const isFirst = idx === 0;
            const isLast = idx === routeStops.length - 1;

            return (
              <g
                key={stop.day}
                transform={`translate(${stop.coord.x}, ${stop.coord.y})`}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedDayIndex(idx);
                }}
              >
                {/* Ripple indicator on active stop */}
                {isSelected && (
                  <>
                    <circle r="18" fill="#16422b" opacity="0.2" className="animate-ping" />
                    <circle r="14" fill="#16422b" opacity="0.35" />
                  </>
                )}

                {/* Base Pin Circle */}
                <circle
                  r={isSelected ? "11" : isFirst || isLast ? "9" : "8"}
                  fill={isSelected ? '#16422b' : isFirst ? '#0284c7' : isLast ? '#b45309' : '#ffffff'}
                  stroke={isSelected ? '#ffffff' : '#16422b'}
                  strokeWidth="2.5"
                  filter="url(#shadow)"
                />

                {/* Day Number text inside pin */}
                <text
                  y="3.5"
                  textAnchor="middle"
                  fontSize={isSelected ? "9" : "8"}
                  fontWeight="900"
                  fill={isSelected || isFirst || isLast ? '#ffffff' : '#16422b'}
                >
                  {stop.day}
                </text>

                {/* Stop Label Banner */}
                <g transform="translate(0, 16)">
                  <rect
                    x="-40"
                    y="-2"
                    width="80"
                    height="14"
                    rx="3"
                    fill={isSelected ? '#16422b' : '#ffffff'}
                    opacity={isSelected ? "0.95" : "0.85"}
                    stroke={isSelected ? '#16422b' : '#d4d4d4'}
                    strokeWidth="0.5"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fontSize="7.5"
                    fontWeight="bold"
                    fill={isSelected ? '#ffffff' : '#171717'}
                  >
                    {stop.location.length > 14 ? stop.location.slice(0, 13) + '…' : stop.location}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Floating Interactive Active Stop Detail Card */}
        {activeStop && (
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl border border-neutral-200 animate-fade-in z-20">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#16422b] text-white flex flex-col items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  <span className="text-[8px] uppercase leading-none">DAY</span>
                  <span className="text-sm leading-none mt-0.5">{activeStop.day}</span>
                </span>
                <div>
                  <h4 className="font-serif-luxury text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {activeStop.title}
                  </h4>
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#16422b]" />
                    <span>{activeStop.location} · {activeStop.coord.region}</span>
                  </span>
                </div>
              </div>

              <span className="text-xs bg-emerald-100 text-[#16422b] px-2 py-0.5 rounded font-bold shrink-0">
                {activeStop.coord.altitude}
              </span>
            </div>

            <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
              {activeStop.description}
            </p>

            <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">
                {activeStop.accommodation ? `Lodge: ${activeStop.accommodation}` : t('travelMode')}
              </span>

              {onSelectDay && (
                <button
                  type="button"
                  onClick={() => onSelectDay(activeStop.day)}
                  className="text-xs font-bold text-[#16422b] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Day Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Legend Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200 text-[10px] text-neutral-600 flex items-center gap-3 shadow-xs">
            <span className="flex items-center gap-1 font-semibold text-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
              <span>Start</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16422b] inline-block" />
              <span>Waypoints</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-700 inline-block" />
              <span>End</span>
            </span>
          </div>

          <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200 text-[10px] font-bold text-[#16422b] shadow-xs">
            {t('travelMode')}
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="bg-[#FAF7EE] px-5 sm:px-6 py-3 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-600 gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Full GPS Waypoints & Ranger Tracking · Direct UWA/RDB Verified Coordinates</span>
        </span>
        <span className="text-[11px] text-neutral-500 font-medium">
          Click any stop pin to inspect wildlife highlights & altitude
        </span>
      </div>
    </div>
  );
};
