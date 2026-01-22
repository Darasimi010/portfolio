import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a0a2e]/90 backdrop-blur-md shadow-lg shadow-purple-900/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
            Oluwadarasimi<span className="text-purple-400">.</span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-purple-100/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
            <Button href="#contact" variant="outline" className="px-5! py-2! text-sm!">Hire Me</Button>
          </div>

          <button 
            className="md:hidden text-purple-100 hover:text-white transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a0a2e]/95 backdrop-blur-md border-t border-purple-500/20 absolute w-full shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-purple-100/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="w-full mt-2">Hire Me</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
