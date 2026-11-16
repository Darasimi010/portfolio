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
      <Navbar />

      <main id="main-content" className="relative">
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
