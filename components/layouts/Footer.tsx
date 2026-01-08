import { Icons } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-white">
            Oluwadarasimi<span className="text-indigo-500">.</span>
          </span>
          <p className="text-sm mt-2 text-gray-500">
            © 2026 All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/Darasimi010" className="hover:text-indigo-400 transition-colors" title="GitHub">
            <Icons.Github />
          </a>
          <a href="https://www.linkedin.com/in/darasimi-omojola/" className="hover:text-indigo-400 transition-colors" title="LinkedIn">
            <Icons.Linkedin />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors" title="Twitter">
            <Icons.Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
