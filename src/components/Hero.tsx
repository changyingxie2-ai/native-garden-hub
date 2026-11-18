import React from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import heroImage from '../assets/images/hero_adelaide_garden_1793614973583.jpg';

interface HeroProps {
  onStartClick: () => void;
  onExploreKitClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onExploreKitClick }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker text (No pill enclosure per frontend design constitution) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#7C5A38]">
              <span className="text-[#C25B38] font-bold">ADELAIDE, SOUTH AUSTRALIA</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#3A6B52]">BEGINNER NATIVE GARDENING</span>
              <span aria-hidden="true">·</span>
              <span>SMALL OUTDOOR SPACES</span>
            </div>

            {/* Hero Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A2B] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Start Your Native Garden in Adelaide
            </h1>

            {/* Welcoming Introduction */}
            <p className="text-base sm:text-lg text-[#415549] leading-relaxed max-w-xl">
              New to gardening or working with a balcony, courtyard or small outdoor space? This welcoming Adelaide guide helps beginners choose local native plants, plan a small garden step by step and save water through dry South Australian summers.
            </p>

            {/* Primary Action Button & Secondary Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#planner"
                onClick={(e) => {
                  e.preventDefault();
                  onStartClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2E5A44] hover:bg-[#234635] active:bg-[#1A3427] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#starter-kit"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreKitClick();
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-base font-semibold text-[#2E5A44] hover:text-[#1E3A2B] underline decoration-[#2E5A44]/40 underline-offset-4 hover:decoration-[#1E3A2B] transition-colors cursor-pointer"
              >
                <span>Explore the Starter Kit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Practical Beginner Highlights */}
            <div className="pt-4 border-t border-[#E8E2D6] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#4A5D52]">
              <div className="flex flex-col">
                <span className="font-bold text-[#1E3A2B] text-base">Local Native Plants</span>
                <span className="text-xs text-[#5D6F63]">Selected for Adelaide conditions</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#1E3A2B] text-base">Water-Wise Choices</span>
                <span className="text-xs text-[#5D6F63]">Suited to warm, dry summers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#1E3A2B] text-base">Small-Space Friendly</span>
                <span className="text-xs text-[#5D6F63]">Ideal for balconies &amp; courtyards</span>
              </div>
            </div>

          </div>

          {/* Right Column: High impact photographic visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DFD8CB] bg-[#F0EBE1]">
              <img
                src={heroImage}
                alt="Adelaide sunny courtyard garden with potted Australian native plants including red kangaroo paw and silver cushion bush"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom Scrim with photo caption and Adelaide tip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14231B]/90 via-[#14231B]/50 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F4D160] mb-1">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Adelaide Sunshine & Potted Natives</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E2ECE5] leading-snug">
                  Native plants like Kangaroo Paw and Cushion Bush thrive in Adelaide courtyards when paired with good drainage and low-phosphorus soil.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
