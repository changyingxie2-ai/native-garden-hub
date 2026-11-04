import React from 'react';
import { Compass, Sparkles, ShieldCheck, Sun, CheckCircle2 } from 'lucide-react';
import balconyImage from '../assets/images/balcony_native_oasis_1793614975081.jpg';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-[#F5F1E9] border-y border-[#E6E0D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Our Purpose & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Why an Adelaide Native Garden Starter Hub?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            Starting a garden shouldn’t require a botany degree. We envisioned a welcoming, dedicated hub concept to help everyday Adelaide locals grow hardy, drought-smart native plants in small spaces.
          </p>
        </div>

        {/* Narrative Split: The Adelaide Beginner Dilemma vs The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#E3DCCF] shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E3A2B] mb-2.5">
                The Big Nursery Problem for Beginners
              </h3>
              <p className="text-sm sm:text-base text-[#4D6054] leading-relaxed">
                When you first step into a giant hardware nursery, you are greeted by hundreds of plant tables, confusing Latin tags, and delicate exotic plants. Many beginners enthusiastically buy plants that were raised in humid tropical green-houses, bring them home to an Adelaide apartment balcony, and watch them struggle during the first 38°C December northerly wind.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#E3DCCF] shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E3A2B] mb-2.5">
                The Starter Hub Solution
              </h3>
              <p className="text-sm sm:text-base text-[#4D6054] leading-relaxed">
                This independent proposal suggests reimagining garden corners into a clear, foolproof "Starter Hub":
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#415549]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A44] mt-2 shrink-0" />
                  <span><strong>Small-Space Curation:</strong> Showcasing only compact native species that love pot life and courtyards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A44] mt-2 shrink-0" />
                  <span><strong>Phosphorus Awareness:</strong> Clear warnings and pairing with native-safe potting mix so roots don’t get burned.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A44] mt-2 shrink-0" />
                  <span><strong>Adelaide Climate Realistic:</strong> Honest advice for our blistering dry summers and wet winters.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Balcony Image Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DED7C8]">
              <img
                src={balconyImage}
                alt="Adelaide apartment balcony with cheerful yellow flowering wattle in terracotta planters"
                className="w-full h-[320px] sm:h-[420px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E3DCCF]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C25B38] mb-1">
                  <span>URBAN LIVING IN ADELAIDE</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4D6054]">
                  Even a 2m² apartment balcony or townhome verandah can support healthy native plants that feed local birds and bees with just 2 or 3 curated pots.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Foundational Beginner Steps */}
        <div className="pt-4">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#2E5A44] tracking-wider uppercase">
              First Steps Checklist
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A2B] mt-1">
              4 simple steps to your first native plants
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3DCCF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C25B38]">01</span>
                <h4 className="text-base font-bold text-[#1E3A2B] mt-2 mb-2">Check Your Sun Hours</h4>
                <p className="text-xs sm:text-sm text-[#506357] leading-relaxed">
                  Notice if your space gets harsh afternoon baking sun (west), pleasant morning light (east), or constant shade before picking varieties.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAE4D8] text-xs text-[#2E5A44] font-medium">
                Tip: 6+ hrs is full sun
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3DCCF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C25B38]">02</span>
                <h4 className="text-base font-bold text-[#1E3A2B] mt-2 mb-2">Get Native-Specific Soil</h4>
                <p className="text-xs sm:text-sm text-[#506357] leading-relaxed">
                  Always choose premium Australian Native potting mix with low phosphorus. Normal garden mix can poison sensitive native root clusters.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAE4D8] text-xs text-[#2E5A44] font-medium">
                Look for Australian Native label
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3DCCF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C25B38]">03</span>
                <h4 className="text-base font-bold text-[#1E3A2B] mt-2 mb-2">Pick 2 or 3 Hardy Pals</h4>
                <p className="text-xs sm:text-sm text-[#506357] leading-relaxed">
                  Start small! Combine a flowering star (like Dwarf Kangaroo Paw) with an indestructible foliage companion (like Coastal Rosemary).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAE4D8] text-xs text-[#2E5A44] font-medium">
                Less is more for beginners
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3DCCF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C25B38]">04</span>
                <h4 className="text-base font-bold text-[#1E3A2B] mt-2 mb-2">Soak Well to Establish</h4>
                <p className="text-xs sm:text-sm text-[#506357] leading-relaxed">
                  Water gently right after planting. Give steady moisture for the first 8–12 weeks until roots reach the pot edges and lock in.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAE4D8] text-xs text-[#2E5A44] font-medium">
                Mulch to conserve water
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
