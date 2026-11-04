import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Home, 
  Trees, 
  LayoutGrid, 
  Sun, 
  CloudSun, 
  Cloud, 
  Check, 
  Copy, 
  Printer, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Droplets,
  Calendar,
  Flower2
} from 'lucide-react';
import { SpaceType, SunlightLevel, ExperienceLevel } from '../types';
import { ADELAIDE_NATIVE_PLANTS } from '../data/plantsData';

export const Planner: React.FC = () => {
  const [spaceType, setSpaceType] = useState<SpaceType>('balcony');
  const [sunlight, setSunlight] = useState<SunlightLevel>('full-sun');
  const [experience, setExperience] = useState<ExperienceLevel>('beginner');
  const [copied, setCopied] = useState(false);

  // Compute matched plants based on space and sun
  const matchedPlants = useMemo(() => {
    return ADELAIDE_NATIVE_PLANTS.filter((plant) => {
      const matchSpace = plant.idealFor.includes(spaceType);
      const matchSun = plant.sunlight.includes(sunlight);
      return matchSpace && matchSun;
    }).slice(0, 4); // Show top 3-4 friendly plants
  }, [spaceType, sunlight]);

  const spaceLabels: Record<SpaceType, { title: string; desc: string }> = {
    balcony: {
      title: 'Apartment Balcony / Pots',
      desc: 'Wind-exposed or sheltered tiled outdoor balcony, ideal for lightweight durable containers.'
    },
    courtyard: {
      title: 'Compact Courtyard / Verandah',
      desc: 'Paved or decked private area, suitable for a mix of large pots, wine barrels, or raised planters.'
    },
    'small-bed': {
      title: 'Small Ground Garden Bed',
      desc: 'Direct soil planting alongside fences or outdoor entertaining areas in Adelaide suburbs.'
    },
    'raised-bed': {
      title: 'Raised Garden Bed / Planter',
      desc: 'Built-up timber or corrugated bed allowing tailored drainage and soil depth.'
    }
  };

  const sunLabels: Record<SunlightLevel, { title: string; desc: string }> = {
    'full-sun': {
      title: 'Full Sun (6+ Hours)',
      desc: 'Intense direct Adelaide summer sun, unshaded northern or western aspect.'
    },
    'part-shade': {
      title: 'Part Shade / Morning Sun',
      desc: 'Protected from scorching western heat, receives gentle eastern morning light.'
    },
    'low-sun': {
      title: 'Low Sun / Filtered Shade',
      desc: 'Shaded courtyard under pergolas, high apartment overhangs, or dense trees.'
    }
  };

  const expLabels: Record<ExperienceLevel, { title: string; desc: string }> = {
    beginner: {
      title: 'First-Time Gardener',
      desc: 'Need rugged, forgiving native plants that will not panic if you miss a watering.'
    },
    casual: {
      title: 'A Little Experience',
      desc: 'Kept herbs or house plants alive; ready to try flowering native varieties.'
    },
    confident: {
      title: 'Confident Starter',
      desc: 'Keen to mix architectural textures, flowering shrubs, and pollinator magnets.'
    }
  };

  const handleCopyPlan = () => {
    const plantList = matchedPlants
      .map((p, idx) => `${idx + 1}. ${p.commonName} (${p.botanicalName}) - ${p.height}, Water: ${p.waterNeeds}`)
      .join('\n');

    const textToCopy = `Adelaide Native Garden Starter Plan
Space: ${spaceLabels[spaceType].title}
Sunlight: ${sunLabels[sunlight].title}
Experience: ${expLabels[experience].title}

Suggested Native Plants:
${plantList}

Note: Plant suitability depends on local Adelaide conditions (soil, microclimate, drainage). Always verify with local nursery staff before buying.`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSpaceType('balcony');
    setSunlight('full-sun');
    setExperience('beginner');
  };

  return (
    <section id="planner" className="py-16 md:py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Interactive Planning Tool
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Garden Starter Planner
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            Answer three quick questions about your space and sunlight. We will suggest a practical, beginner-friendly starter combination suited to Adelaide conditions.
          </p>
        </div>

        {/* Input Selector Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Step 1: Space Type */}
          <div className="bg-white p-6 rounded-2xl border border-[#E3DCCF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#C25B38]">STEP 01</span>
                <span className="text-xs font-semibold text-[#5A7363]">Space Type</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A2B] mb-3">
                Where will you grow?
              </h3>
              
              <div className="space-y-2.5">
                {(['balcony', 'courtyard', 'small-bed', 'raised-bed'] as SpaceType[]).map((type) => {
                  const isSelected = spaceType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSpaceType(type)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 min-h-[48px] ${
                        isSelected 
                          ? 'border-[#2E5A44] bg-[#F1F6F3] shadow-xs' 
                          : 'border-[#EAE4D8] hover:border-[#C4BAA9] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#2E5A44] bg-[#2E5A44]' : 'border-[#9CAE9F] bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isSelected ? 'text-[#1E3A2B]' : 'text-[#364A3E]'}`}>
                          {spaceLabels[type].title}
                        </div>
                        <div className="text-xs text-[#5D6F63] mt-0.5 leading-snug">
                          {spaceLabels[type].desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 2: Sunlight Level */}
          <div className="bg-white p-6 rounded-2xl border border-[#E3DCCF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#C25B38]">STEP 02</span>
                <span className="text-xs font-semibold text-[#5A7363]">Sun Exposure</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A2B] mb-3">
                How much sun hits it?
              </h3>

              <div className="space-y-2.5">
                {(['full-sun', 'part-shade', 'low-sun'] as SunlightLevel[]).map((sun) => {
                  const isSelected = sunlight === sun;
                  return (
                    <button
                      key={sun}
                      type="button"
                      onClick={() => setSunlight(sun)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 min-h-[48px] ${
                        isSelected 
                          ? 'border-[#2E5A44] bg-[#F1F6F3] shadow-xs' 
                          : 'border-[#EAE4D8] hover:border-[#C4BAA9] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#2E5A44] bg-[#2E5A44]' : 'border-[#9CAE9F] bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isSelected ? 'text-[#1E3A2B]' : 'text-[#364A3E]'}`}>
                          {sunLabels[sun].title}
                        </div>
                        <div className="text-xs text-[#5D6F63] mt-0.5 leading-snug">
                          {sunLabels[sun].desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Experience Level */}
          <div className="bg-white p-6 rounded-2xl border border-[#E3DCCF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#C25B38]">STEP 03</span>
                <span className="text-xs font-semibold text-[#5A7363]">Experience</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A2B] mb-3">
                Your gardening journey?
              </h3>

              <div className="space-y-2.5">
                {(['beginner', 'casual', 'confident'] as ExperienceLevel[]).map((lvl) => {
                  const isSelected = experience === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setExperience(lvl)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 min-h-[48px] ${
                        isSelected 
                          ? 'border-[#2E5A44] bg-[#F1F6F3] shadow-xs' 
                          : 'border-[#EAE4D8] hover:border-[#C4BAA9] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#2E5A44] bg-[#2E5A44]' : 'border-[#9CAE9F] bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isSelected ? 'text-[#1E3A2B]' : 'text-[#364A3E]'}`}>
                          {expLabels[lvl].title}
                        </div>
                        <div className="text-xs text-[#5D6F63] mt-0.5 leading-snug">
                          {expLabels[lvl].desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Results Container */}
        <div className="bg-white rounded-3xl border border-[#DCD5C6] shadow-sm p-6 sm:p-8 lg:p-10">
          
          {/* Header of results */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAE4D8]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C25B38] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Tailored Adelaide Starter Plan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E3A2B]">
                {spaceLabels[spaceType].title} &bull; {sunLabels[sunlight].title}
              </h3>
            </div>

            {/* Utility actions */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleCopyPlan}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2E5A44] bg-[#F1F6F3] hover:bg-[#E3EEE7] rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Plan'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#4A5D52] bg-[#FAF8F5] hover:bg-[#EDE8DE] border border-[#E0D9CC] rounded-lg transition-colors cursor-pointer"
                title="Print this starter plan"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-2 text-[#7A8C81] hover:text-[#1E3A2B] rounded-lg transition-colors cursor-pointer"
                title="Reset choices"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Starter Strategy Advice Box */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-[#F8F5EE] border border-[#E5DFD2] text-sm text-[#415549] leading-relaxed">
            <strong className="text-[#1E3A2B] font-bold">Adelaide Starter Strategy:</strong>{' '}
            {spaceType === 'balcony' && (
              <span>
                For an Adelaide balcony with {sunlight === 'full-sun' ? 'full sun' : sunlight === 'part-shade' ? 'partial sun' : 'shade'}, choose medium-sized pots (30–40cm) with base drainage holes. Terracotta or glazed ceramic pots will prevent root baking during December–February heatwaves. Group pots together to create a sheltered microclimate.
              </span>
            )}
            {spaceType === 'courtyard' && (
              <span>
                Courtyard paving radiates heat. Raise pots onto "pot feet" or timber slats so hot tiles don’t cook root balls. Use Australian native potting mix and apply a 3cm layer of organic bark mulch to retain moisture.
              </span>
            )}
            {spaceType === 'small-bed' && (
              <span>
                If you have Adelaide clay soil, fork in gypsum and well-composted organic matter to improve drainage before planting. Position smaller flowering varieties in front of compact screening shrubs.
              </span>
            )}
            {spaceType === 'raised-bed' && (
              <span>
                Raised beds provide supreme drainage. Fill with a premium native-grade soil blend. Group species with similar water needs together to make summer care simple and predictable.
              </span>
            )}
          </div>

          {/* Plant Recommendation Cards */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base sm:text-lg font-bold text-[#1E3A2B]">
                Suggested Starter Plants ({matchedPlants.length} species)
              </h4>
              <span className="text-xs text-[#5D6F63]">
                Hardy Adelaide selections
              </span>
            </div>

            {matchedPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {matchedPlants.map((plant) => (
                  <div
                    key={plant.id}
                    className="p-5 rounded-2xl border border-[#E3DCCF] bg-[#FAF8F5] hover:border-[#2E5A44]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      {/* Botanical Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h5 className="text-base font-bold text-[#1E3A2B]">
                            {plant.commonName}
                          </h5>
                          <p className="text-xs italic text-[#63776B]">
                            {plant.botanicalName}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-[#2E5A44] bg-[#E3EDE6] px-2.5 py-0.5 rounded-md shrink-0">
                          {plant.type}
                        </span>
                      </div>

                      {/* Plant Metadata Details */}
                      <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-[#4A5D52] my-3 pt-2 border-t border-[#EAE4D8]">
                        <div className="flex items-center gap-1.5">
                          <Droplets className="w-3.5 h-3.5 text-[#3D7A9E] shrink-0" />
                          <span>Water: <strong>{plant.waterNeeds}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C25B38] shrink-0" />
                          <span>Height: <strong>{plant.height}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 col-span-2">
                          <Flower2 className="w-3.5 h-3.5 text-[#C98A16] shrink-0" />
                          <span>Bloom: {plant.flowerColor} ({plant.flowerSeason})</span>
                        </div>
                      </div>

                      {/* Adelaide Specific Tip */}
                      <p className="text-xs sm:text-sm text-[#4D6054] bg-white p-3 rounded-lg border border-[#EDE7DD] leading-relaxed">
                        <strong className="text-[#1E3A2B]">Adelaide Tip:</strong> {plant.adelaideTip}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#EAE4D8] flex items-center justify-between text-xs text-[#5D6F63]">
                      <span>Wildlife: {plant.wildlife}</span>
                      <span className="font-medium text-[#2E5A44]">
                        {plant.potFriendly ? 'Great in pots' : 'Best in garden bed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-[#FAF8F5] rounded-xl border border-[#E3DCCF]">
                <p className="text-sm text-[#5D6F63]">
                  No exact match found for this filter combination. Try selecting "Part Shade" or "Courtyard" to see versatile Adelaide native species.
                </p>
              </div>
            )}
          </div>

          {/* Mandatory Plant Suitability Disclaimer Note */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9ED] border border-[#F2DCAC] text-[#7A5410] text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#C98A16] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#5C3D06] mb-1">
                Important Local Plant Notice
              </p>
              <p>
                Plant performance, drought tolerance, and growth habit depend heavily on your specific microclimate, local wind exposure, container volume, drainage, and seasonal rainfall in your part of Adelaide. We recommend double-checking plant tags and consulting experienced nursery staff or qualified South Australian horticulturalists before purchasing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
