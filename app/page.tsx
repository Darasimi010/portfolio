"use client";
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-purple-gradient text-white font-sans selection:bg-purple-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}