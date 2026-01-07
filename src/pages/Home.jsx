import React from 'react';
import HeroSection from "@/components/home/HeroSection";
import ActivityHighlights from "@/components/home/ActivityHighlights";
import QuickLinks from "@/components/home/QuickLinks";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ActivityHighlights />
      <QuickLinks />
      <RegistrationCTA />
      <ContactSection />
    </div>
  );
}