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

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter">
            Oluwadarasimi<span className="text-indigo-600">.</span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {item}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="!px-4 !py-2 !text-sm">Hire Me</Button>
          </div>

          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 absolute w-full shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

