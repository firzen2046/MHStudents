import React from 'react';
import HeroSection from "@/components/home/HeroSection";
import ActivityHighlights from "@/components/home/ActivityHighlights";
import QuickLinks from "@/components/home/QuickLinks";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import ContactSection from "@/components/home/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Organizer Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 mb-8">主辦單位</p>
            <div className="flex justify-center items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/8e8e83540_image.png"
                alt="JCI Peninsula"
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ActivityHighlights />
      <QuickLinks />
      <RegistrationCTA />
      <ContactSection />
    </div>
  );
}