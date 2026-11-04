import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, BookOpen } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('why-natives-adelaide');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            Honest answers to common questions Adelaide beginners ask about small spaces, summer watering, sunlight, and native potting mix.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#8A7968] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., watering, clay soil, pots, sunlight)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E0D8CB] rounded-2xl text-sm text-[#1E3A2B] placeholder-[#8A7968] focus:border-[#2E5A44] focus:ring-2 focus:ring-[#2E5A44]/20 transition-all shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'Beginners & Balconies' },
              { id: 'watering', label: 'Watering & Heatwaves' },
              { id: 'soil', label: 'Potting Mix & Soil' },
              { id: 'sunlight', label: 'Sunlight & Microclimates' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#2E5A44] text-white'
                    : 'bg-[#F0EBE1] text-[#4A5D52] hover:bg-[#E5DFD2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E0D8CB] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E3A2B] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2E5A44] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#4D6054] leading-relaxed border-t border-[#F2ECE1]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#E0D8CB] text-sm text-[#6B7D71]">
              No questions matched your search query. Try typing a single keyword like "soil" or "water".
            </div>
          )}
        </div>

        {/* Extra Advice Box */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F0EBE1] border border-[#DDD6C8] flex items-start gap-3.5">
          <BookOpen className="w-5 h-5 text-[#2E5A44] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
            <strong className="text-[#1E3A2B]">Need specific regional guidance?</strong>
            <p className="mt-0.5">
              South Australia has diverse microclimates from Gulf St Vincent coastal strips to the Adelaide Foothills. When in doubt, note your suburb and show photos of your balcony or courtyard to horticulturists at your local nursery.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
