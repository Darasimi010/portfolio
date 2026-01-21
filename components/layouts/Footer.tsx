import { Icons } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a0515] text-purple-100/70 py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-bold text-white">
            Oluwadarasimi<span className="text-purple-400">.</span>
          </span>
          <p className="text-sm mt-2 text-purple-300/60">
            © 2026 All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a 
            href="https://github.com/Darasimi010" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500 hover:border-purple-400 hover:scale-110 transition-all duration-300" 
            title="GitHub"
          >
            <Icons.Github />
          </a>
          <a 
            href="https://www.linkedin.com/in/darasimi-omojola/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500 hover:border-purple-400 hover:scale-110 transition-all duration-300" 
            title="LinkedIn"
          >
            <Icons.Linkedin />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500 hover:border-purple-400 hover:scale-110 transition-all duration-300" 
            title="Twitter"
          >
            <Icons.Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
