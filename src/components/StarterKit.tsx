import React, { useState } from 'react';
import { 
  Package, 
  ExternalLink, 
  Check, 
  Info, 
  AlertCircle, 
  ShoppingBag, 
  CheckSquare, 
  Square, 
  Copy,
  ChevronRight
} from 'lucide-react';
import { STARTER_KIT_ITEMS } from '../data/starterKitData';
import { StarterKitItem } from '../types';
import starterKitImage from '../assets/images/starter_kit_essentials_1793614975559.jpg';

export const StarterKit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'native-potting-mix': true,
    'terracotta-pots': true,
    'hand-trowel': true,
    'watering-can': true,
  });
  const [selectedSampleItem, setSelectedSampleItem] = useState<StarterKitItem | null>(null);
  const [checklistCopied, setChecklistCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All Essentials' },
    { id: 'soil', label: 'Soil & Mulch' },
    { id: 'pots', label: 'Pots & Containers' },
    { id: 'tools', label: 'Basic Tools' },
    { id: 'water', label: 'Watering & Care' },
  ];

  const filteredItems = STARTER_KIT_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyChecklist = () => {
    const activeList = STARTER_KIT_ITEMS.filter((item) => checkedItems[item.id]);
    const text = `My Adelaide Native Garden Shopping Checklist:\n` +
      activeList.map((i, idx) => `${idx + 1}. [ ] ${i.name} (${i.sampleSpecification})`).join('\n') +
      `\n\nNote: Sample illustrative guide. Verify items, prices, and low-phosphorus specifications in-store before purchasing.`;
    
    navigator.clipboard.writeText(text);
    setChecklistCopied(true);
    setTimeout(() => setChecklistCopied(false), 2500);
  };

  const selectedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section id="starter-kit" className="py-16 md:py-24 bg-[#F5F1E9] border-y border-[#E6E0D4] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Equipment & Supplies
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Beginner Native Starter Kit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            Everything you need for your first planting session. We’ve broken down sample items so you know exactly what to look for when shopping in Adelaide hardware nurseries.
          </p>
        </div>

        {/* Informative Visual Banner & Essential Rule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E0D8CB] shadow-xs">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#DCD5C6] shadow-sm">
              <img
                src={starterKitImage}
                alt="Flatlay of Australian native gardening kit essentials: terracotta pots, bypass shears, gloves, trowel and native potting mix"
                className="w-full h-[260px] sm:h-[300px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2E5A44] uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Beginner Shopping Wisdom</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A2B]">
              The #1 Beginner Rule: Low Phosphorus
            </h3>
            <p className="text-sm sm:text-base text-[#4D6054] leading-relaxed">
              Before buying anything, remember that many Australian native plants are sensitive to ordinary garden fertilisers. When visiting your local nursery or Bunnings garden section, always check the potting mix bag for the Australian native logo or low phosphorus analysis.
            </p>
            
            {/* Interactive Shopping Checklist Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-[#1E3A2B]">
                Your Checklist: <strong className="text-[#2E5A44]">{selectedCount}</strong> items selected
              </span>
              <button
                type="button"
                onClick={handleCopyChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2E5A44] bg-[#F1F6F3] hover:bg-[#E3EEE7] rounded-lg transition-colors cursor-pointer"
              >
                {checklistCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{checklistCopied ? 'Checklist Copied!' : 'Copy Shopping Checklist'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs / Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#2E5A44] text-white shadow-xs'
                    : 'bg-white text-[#4A5D52] hover:bg-[#EDE8DE] border border-[#E3DCCF]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sample Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredItems.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E0D8CB] p-5 shadow-xs hover:border-[#2E5A44]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-center gap-2 text-left cursor-pointer group"
                      title="Toggle in your shopping checklist"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#2E5A44] shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-[#A3B3A7] group-hover:text-[#2E5A44] shrink-0" />
                      )}
                      <span className="text-xs font-semibold text-[#5D6F63]">
                        {isChecked ? 'In Checklist' : 'Add to Checklist'}
                      </span>
                    </button>

                    {item.isEssential && (
                      <span className="text-[11px] font-semibold text-[#C25B38] bg-[#FCEEEA] px-2 py-0.5 rounded shrink-0">
                        Essential
                      </span>
                    )}
                  </div>

                  {/* Title and Specification */}
                  <h4 className="text-base font-bold text-[#1E3A2B] leading-snug mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#8A7968] mb-3">
                    {item.sampleSpecification}
                  </p>

                  {/* Why you need it */}
                  <div className="text-xs sm:text-sm text-[#4D6054] mb-3 leading-relaxed">
                    <strong className="text-[#1E3A2B] font-semibold">Why you need it:</strong> {item.whyYouNeedIt}
                  </div>

                  {/* Beginner tip */}
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EDE7DD] text-xs text-[#506357] leading-relaxed">
                    <strong className="text-[#2E5A44] font-semibold">Tip:</strong> {item.beginnerTip}
                  </div>
                </div>

                {/* Card Action & Placeholder link button */}
                <div className="mt-4 pt-3 border-t border-[#EAE4D8] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedSampleItem(item)}
                    className="text-xs font-semibold text-[#2E5A44] hover:text-[#1E3A2B] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View item info</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-[#8C9E92] italic">
                    Sample card
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Non-Commercial Product Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E0D8CB] text-xs sm:text-sm text-[#617367] leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-[#8A7968] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#1E3A2B] mb-0.5">
              Sample Illustrative Product Cards Only
            </p>
            <p>
              This website provides educational concept cards to illustrate what beginners should look for. We do not invent live product prices, claim real-time store stock availability, or sell items directly. Please visit your local hardware store or independent Adelaide plant nursery to check available stock and brands.
            </p>
          </div>
        </div>

        {/* Sample Item Detail Modal */}
        {selectedSampleItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E0D8CB] shadow-2xl relative">
              <button
                type="button"
                onClick={() => setSelectedSampleItem(null)}
                className="absolute top-5 right-5 text-[#7A8C81] hover:text-[#1E3A2B] p-1.5 rounded-lg hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#C25B38] uppercase tracking-wider mb-2">
                <span>Sample Guide Card</span>
                <span>·</span>
                <span>{selectedSampleItem.category.toUpperCase()}</span>
              </div>

              <h3 className="text-xl font-bold text-[#1E3A2B] mb-1">
                {selectedSampleItem.name}
              </h3>
              <p className="text-xs text-[#8A7968] mb-4">
                {selectedSampleItem.sampleSpecification}
              </p>

              <div className="space-y-4 text-sm text-[#4D6054] leading-relaxed mb-6">
                <div>
                  <h4 className="font-semibold text-[#1E3A2B] mb-1">Why This Matters:</h4>
                  <p>{selectedSampleItem.whyYouNeedIt}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A2B] mb-1">What to Ask In-Store:</h4>
                  <p className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE7DD]">
                    "{selectedSampleItem.beginnerTip}"
                  </p>
                </div>
                <div className="text-xs text-[#7A8C81] border-t border-[#EAE4D8] pt-3">
                  <em>Notice: This is an educational concept card. Exact pricing and packaging vary by store. Always consult nursery staff for current inventory.</em>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    toggleCheck(selectedSampleItem.id);
                    setSelectedSampleItem(null);
                  }}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2E5A44] hover:bg-[#234635] rounded-xl transition-colors cursor-pointer"
                >
                  {checkedItems[selectedSampleItem.id] ? 'Keep in Checklist' : 'Add to Checklist'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSampleItem(null)}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#4A5D52] bg-[#F2ECE1] hover:bg-[#E5DFD2] rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
