import React from 'react';
import { ArrowRight } from 'lucide-react';
import balconyCoverImage from '../assets/images/balcony_native_oasis_1793614975081.jpg';

interface BlogSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-[#F5F1E9] border-t border-[#E6E0D4] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C25B38] uppercase">
            Practical Guides
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A2B] mt-1.5 tracking-tight">
            Blog
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D52] leading-relaxed">
            Straightforward reading for Adelaide beginners growing Australian native plants in pots, balconies, and compact yards.
          </p>
        </div>

        {/* Article Card */}
        <article className="bg-white rounded-3xl border border-[#E0D8CB] p-6 sm:p-8 lg:p-10 shadow-xs">
          {/* Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#63776B] mb-3">
            <span>Adelaide Balconies</span>
            <span aria-hidden="true">·</span>
            <span>Beginner Guide</span>
            <span aria-hidden="true">·</span>
            <span>4 min read</span>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-extrabold text-[#1E3A2B] tracking-tight leading-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            5 Native Garden Ideas for Small Adelaide Balconies
          </h3>

          {/* Cover Image */}
          <figure className="mb-7 rounded-2xl overflow-hidden border border-[#DFD8CB] bg-[#F0EBE1]">
            <img
              src={balconyCoverImage}
              alt="Sunny Adelaide apartment balcony featuring potted Australian native plants in terracotta planters and a watering can"
              className="w-full h-[220px] sm:h-[320px] lg:h-[360px] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </figure>

          <div className="space-y-6 text-sm sm:text-base text-[#415549] leading-relaxed">
            <p>
              You do not need a big backyard to grow Australian native plants. A narrow apartment balcony, a sunny front step or a compact courtyard is plenty of room to start small-space gardening. Beginning with just two or three pots gives you space to learn how light, wind and heat behave in your outdoor corner before you buy more plants.
            </p>

            <p>
              If you are looking for simple native garden ideas that actually suit Adelaide conditions, these five practical steps will help you set up a healthy container garden from day one.
            </p>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E3A2B]">
                1. Match your plants to sunny or sheltered spots
              </h4>
              <p>
                Before choosing any plants, watch where sunlight falls on your balcony over a weekend. A north- or west-facing balcony often cops intense afternoon sun and warm breezes, while an east-facing or covered balcony usually gets gentler morning light and more shelter.
              </p>
              <p>
                For hot, exposed spots, ask your local nursery about sun-loving compact natives such as karkalla, cushion bush or dwarf kangaroo paw. For more sheltered or partly shaded balconies, native violet, cut-leaf daisy or a compact flax-lily often settle in comfortably. Always check the plant label for mature width and height so your balcony still feels open and easy to walk through, and verify local suitability with nursery staff.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E3A2B]">
                2. Start with pots that drain properly
              </h4>
              <p>
                Good drainage is one of the biggest keys to keeping potted natives happy. Choose containers with clear drainage holes in the base so excess water can escape freely rather than pooling around the roots. Porous terracotta or breathable lightweight planters around 30 to 40 centimetres wide give young root systems room to establish without turning waterlogged after winter rain.
              </p>
              <p>
                If your balcony is paved or tiled, raise pots slightly using pot feet or a timber stand. This stops water staining the tiles, improves airflow under the base and prevents hot concrete from baking the roots during Adelaide’s warmer months.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E3A2B]">
                3. Use a potting mix made for Australian natives
              </h4>
              <p>
                Skip standard garden soil and multi-purpose potting bags, as they can be too heavy or carry higher phosphorus levels than many native plants handle well. Instead, fill your containers with a good-quality potting mix labelled for Australian natives, then water gently straight after planting so the mix settles snugly around the root ball.
              </p>
              <p>
                Finishing the top of each pot with a light layer of coarse bark mulch also helps keep the surface cool and slows down evaporation on windy days.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E3A2B]">
                4. Group pots together for a sheltered layout
              </h4>
              <p>
                One of the easiest native garden ideas for small-space gardening is clustering three pots of slightly different heights in a protected corner. Place a taller structural plant at the back, a medium flowering shrub in the middle and a trailing groundcover near the rim.
              </p>
              <p>
                Grouping pots creates a little pocket of shelter against dry Adelaide gusts and leaves plenty of room to sit outside and reach every plant with your watering can.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E3A2B]">
                5. Water deeply through Adelaide’s dry summers
              </h4>
              <p>
                Containers dry out much faster than garden beds, especially during Adelaide heatwaves and warm northerly winds. Rather than guessing, push your finger a few centimetres into the potting mix. If it feels dry below the surface, water slowly at the base of the plant until moisture runs out of the drainage holes.
              </p>
              <p>
                Early morning is the best time to water so plants can drink before the midday heat builds. Pay extra attention to newly potted plants over their first summer while their roots are still settling in, and check pots more regularly whenever consecutive days climb above 35°C.
              </p>
            </div>

            {/* Final Call-to-Action */}
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F8F5EE] border border-[#E5DFD2] text-[#1E3A2B]">
              <p className="text-sm sm:text-base leading-relaxed">
                Ready to map out your balcony pots?{' '}
                <a
                  href="#planner"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('planner');
                  }}
                  className="inline-flex items-center gap-1 font-bold text-[#2E5A44] underline decoration-[#2E5A44]/50 underline-offset-4 hover:text-[#C25B38] hover:decoration-[#C25B38] transition-colors"
                >
                  <span>Try the Garden Planner</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>{' '}
                to see plant ideas matched to your sunlight and outdoor space.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
