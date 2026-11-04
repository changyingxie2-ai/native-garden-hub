/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Planner } from './components/Planner';
import { StarterKit } from './components/StarterKit';
import { AdelaideGuide } from './components/AdelaideGuide';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2922]">
      {/* 1. Independent Concept Disclaimer Banner */}
      <DisclaimerBanner />

      {/* 2. Top Navigation Bar (Strict 3-zone contract) */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with clear Start Your Native Garden button */}
        <Hero
          onStartClick={() => scrollToSection('planner')}
          onExploreKitClick={() => scrollToSection('starter-kit')}
        />

        {/* Section 2: Our Story */}
        <OurStory />

        {/* Section 3: Garden Starter Planner */}
        <Planner />

        {/* Section 4: Starter Kit & Supplies */}
        <StarterKit />

        {/* Regional Focus: Adelaide Microclimates & Soils */}
        <AdelaideGuide />

        {/* Section 5: Beginner FAQ */}
        <FaqSection />

        {/* Section 6: Contact Us */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
