import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkExperience from "@/components/sections/WorkExperience";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="relative">
        {/*
          The sections provide their own spacing, backgrounds and reveal
          animations. Keep the main wrapper free of extra vertical gaps so
          their borders and surfaces form one continuous visual rhythm.
        */}
        <Hero />
        <AboutMe />
        <FeaturedWork />
        <WorkExperience />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
