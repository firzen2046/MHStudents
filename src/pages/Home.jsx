import React from 'react';
import HeroSection from "@/components/home/HeroSection";
import ActivityHighlights from "@/components/home/ActivityHighlights";
import QuickLinks from "@/components/home/QuickLinks";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import ContactSection from "@/components/home/ContactSection";
import WeatherWidget from "@/components/home/WeatherWidget";
import IconGrid from "@/components/home/IconGrid";
import PullToRefresh from "@/components/PullToRefresh";
import { motion } from "framer-motion";

export default function Home() {
  const handleRefresh = async () => {
    await new Promise((r) => setTimeout(r, 600));
  };
  return (
    <PullToRefresh onRefresh={handleRefresh}>
    <div className="min-h-screen dark:bg-gray-950">
      {/* 即時天氣資訊 */}
      <section className="pt-4">
        <div className="container mx-auto px-6 max-w-5xl">
          <WeatherWidget />
        </div>
      </section>

      {/* 圖標矩陣導航（金剛區） */}
      <IconGrid />

      <HeroSection />
      
      {/* Organizer Logos Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-8">主辦單位</p>
            <div className="flex justify-center items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/8e8e83540_image.png"
                alt="JCI Peninsula"
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
                      <div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">合辦單位</p>
              <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032592579/wqrwMjJfeXdACfYK.png"
                  alt="Vision Foundation Limited"
                  className="h-16 w-auto max-w-[min(20rem,80vw)] object-contain"
                  loading="lazy"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032592579/WEefHNdatIItVhLk.png"
                  alt="Social Innovation Service Competition 2026"
                  className="h-24 w-auto max-w-[min(16rem,70vw)] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">支持單位</p>
              <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032592579/nVWRhxGyeSEqUzBD.png"
                  alt="Home and Youth Affairs Bureau and Sham Shui Po District Office"
                  className="h-14 w-auto max-w-[min(22rem,85vw)] object-contain"
                  loading="lazy"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032592579/vbdEIlhILXCipDKu.png"
                  alt="Government Funding Scheme"
                  className="h-20 w-auto max-w-[min(24rem,85vw)] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ActivityHighlights />
      <QuickLinks />
      <RegistrationCTA />
      <ContactSection />
    </div>
    </PullToRefresh>
  );
}