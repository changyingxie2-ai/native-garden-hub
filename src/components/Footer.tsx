import React from 'react';
import { Sprout, AlertCircle, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C2C22] text-[#E0EBE4] border-t border-[#2A3E32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#2A3E32]">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="w-8 h-8 rounded-lg bg-[#2E5A44] text-white flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </span>
              <span>Native Garden Starter Hub</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A9C0B3] leading-relaxed max-w-sm">
              An independent community concept empowering Adelaide apartment dwellers, renters, and beginners to grow resilient Australian native plants in small spaces.
            </p>
            <div className="text-xs text-[#8BA496]">
              Adelaide, South Australia (Tarntanya)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F4D160] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C8DBD0]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('planner')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Garden Starter Planner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('starter-kit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Starter Kit & Supplies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('our-story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story & Concept
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Beginner FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Advice
                </button>
              </li>
            </ul>
          </div>

          {/* Local Community Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#F4D160] uppercase tracking-wider">
              Adelaide Botanical Knowledge
            </h4>
            <p className="text-xs text-[#A9C0B3] leading-relaxed">
              When choosing native species, South Australian gardeners are encouraged to consult trusted local authorities:
            </p>
            <ul className="text-xs text-[#C8DBD0] space-y-1.5 list-disc pl-4">
              <li>Botanic Gardens and State Herbarium of South Australia</li>
              <li>Australian Plants Society South Australia (APS SA)</li>
              <li>Green Adelaide urban biodiversity guides</li>
              <li>Accredited local South Australian retail nursery staff</li>
            </ul>
          </div>

        </div>

        {/* Prominent Legal Disclaimer Box */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#142219] border border-[#233529] text-xs text-[#95AEA1] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-[#E8C26E] font-bold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Important Independence & Non-Affiliation Disclaimer</span>
          </div>
          <p>
            This website is an independent educational and student project concept for a proposed "Bunnings Native Garden Starter Hub" in Adelaide, Australia. This is not an official Bunnings website. It is not affiliated with, sponsored by, or endorsed by Bunnings Group Limited or Wesfarmers Limited. No official Bunnings logos or trademarks are used.
          </p>
          <p>
            Product cards shown are illustrative sample concepts only; this site does not claim live store pricing, stock availability, or endorse specific third-party retail products. Botanical suggestions are for general guidance; individual plant performance depends on site microclimates, pot sizes, aspect, and soil drainage. Visitors must check plant information with qualified local horticulturists before purchase.
          </p>
        </div>

        {/* Traditional Land Acknowledgment & Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9386]">
          <p>
            We acknowledge the Kaurna people as the traditional custodians of the Adelaide Plains and honour their deep connection to country, water, and native flora.
          </p>
          <p className="whitespace-nowrap shrink-0">
            &copy; {new Date().getFullYear()} Independent Adelaide Native Garden Hub Concept
          </p>
        </div>

      </div>
    </footer>
  );
};
