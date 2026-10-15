"use client";

import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
import EngineeringPillars from "@/components/sections/EngineeringPillars";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <EngineeringPillars />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}