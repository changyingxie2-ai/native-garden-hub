import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand element */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-[#1E3A2B] whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded-lg bg-[#2E5A44] text-[#FAF8F5] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <Sprout className="w-5 h-5" />
          </span>
          <span>Native Garden Hub</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#4A5D52]">
          <a
            href="#planner"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('planner');
            }}
            className="hover:text-[#1E3A2B] transition-colors whitespace-nowrap shrink-0"
          >
            Garden Planner
          </a>
          <a
            href="#starter-kit"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('starter-kit');
            }}
            className="hover:text-[#1E3A2B] transition-colors whitespace-nowrap shrink-0"
          >
            Starter Kit
          </a>
          <a
            href="#our-story"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('our-story');
            }}
            className="hover:text-[#1E3A2B] transition-colors whitespace-nowrap shrink-0"
          >
            Our Story
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('faq');
            }}
            className="hover:text-[#1E3A2B] transition-colors whitespace-nowrap shrink-0"
          >
            Beginner FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hover:text-[#1E3A2B] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('planner')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2E5A44] hover:bg-[#234635] active:bg-[#1A3427] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Your Garden
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2E5A44] hover:bg-[#EDE8DF] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E1D8] bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          <button
            onClick={() => handleLinkClick('home')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('planner')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Garden Starter Planner
          </button>
          <button
            onClick={() => handleLinkClick('starter-kit')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Starter Kit & Supplies
          </button>
          <button
            onClick={() => handleLinkClick('our-story')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Our Story & Concept
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full text-left py-2.5 px-3 rounded-md text-base font-medium text-[#2E5A44] hover:bg-[#EDE8DF] transition-colors"
          >
            Contact & Local Advice
          </button>
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('planner')}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-[#2E5A44] rounded-lg shadow-xs cursor-pointer"
            >
              Start Your Native Garden
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
