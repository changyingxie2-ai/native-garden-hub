import React from 'react';
import { Sun, CloudRain, Wind, Layers, Bug, Heart } from 'lucide-react';
import floraImage from '../assets/images/adelaide_native_flora_1793614975331.jpg';

export const AdelaideGuide: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E6E0D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Local Microclimates & Soils
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Understanding the Adelaide Growing Environment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            South Australia's capital has one of the world's finest Mediterranean climates for indigenous plants. Here is what makes growing here unique.
          </p>
        </div>

        {/* Feature Split with flora image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#DCD5C6] shadow-md bg-[#F0EBE1]">
              <img
                src={floraImage}
                alt="Close-up of golden wattle blossoms and coastal rosemary thriving in Adelaide sun"
                className="w-full h-[320px] sm:h-[400px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-[#EAE4D8] text-xs text-[#5D6F63]">
                <strong className="text-[#1E3A2B]">Acacia & Westringia in Adelaide:</strong> Native blooms like Golden Wattle provide vital seasonal pollen for local native bees and honeyeaters.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-xl bg-white border border-[#E0D8CB] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#C25B38] font-bold text-sm mb-1.5">
                <Sun className="w-4 h-4 shrink-0" />
                <span>Hot Dry Summers & Winter Rains</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4D6054] leading-relaxed">
                Adelaide receives the vast majority of its rainfall between May and September. During December to March, weeks can pass without a single drop. Natives naturally prepare for this by resting in late summer.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E0D8CB] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#2E5A44] font-bold text-sm mb-1.5">
                <Layers className="w-4 h-4 shrink-0" />
                <span>The Three Adelaide Soil Zones</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4D6054] leading-relaxed">
                <strong>Plains (Inner West / North):</strong> Heavy reactive clay holding water in winter but drying like rock in summer.<br />
                <strong>Coast (Henley, Glenelg, Brighton):</strong> Alkaline, fast-draining sand.<br />
                <strong>Foothills & Hills (Burnside, Mitcham):</strong> Richer gravelly loams with higher winter rainfall.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E0D8CB] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#C98A16] font-bold text-sm mb-1.5">
                <Wind className="w-4 h-4 shrink-0" />
                <span>Balcony Wind & Pot Protection</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4D6054] leading-relaxed">
                Adelaide high-rise and 2nd-story balconies often face strong gusts off the Gulf or dry northern winds. Group pots together, use wider base planters that won’t tip over, and mulch the surface generously.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
