import { Button } from "@/components/ui/Button";

// Floating star component
const FloatingStar = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute animate-float ${className}`}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
      fill="url(#starGradient)"
    />
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
  </svg>
);

// Device mockup illustration component
const DeviceMockups = () => (
  <div className="relative w-full max-w-xl">
    {/* Glowing backdrop */}
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-60"></div>
    
    {/* Laptop */}
    <div className="relative bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-xl p-3 shadow-2xl border border-purple-500/30">
      <div className="bg-[#0f0a1f] rounded-lg p-4 font-mono text-xs text-left overflow-hidden">
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-1.5 text-[10px] sm:text-xs">
          <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {"{"}</p>
          <p className="pl-4"><span className="text-pink-400">name</span>: <span className="text-green-300">&apos;Oluwadarasimi&apos;</span>,</p>
          <p className="pl-4"><span className="text-pink-400">role</span>: <span className="text-green-300">&apos;Frontend Dev&apos;</span>,</p>
          <p className="pl-4"><span className="text-pink-400">skills</span>: [<span className="text-orange-300">&apos;React&apos;</span>, <span className="text-orange-300">&apos;Next.js&apos;</span>],</p>
          <p className="pl-4"><span className="text-pink-400">passion</span>: <span className="text-green-300">&apos;Building UIs&apos;</span></p>
          <p>{"}"};</p>
        </div>
      </div>
    </div>

    {/* Tablet - positioned to right */}
    <div className="absolute -right-4 top-1/4 w-28 sm:w-36 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-lg p-2 shadow-xl border border-purple-500/30 transform rotate-6">
      <div className="bg-[#0f0a1f] rounded-md p-2">
        <div className="space-y-1.5">
          <div className="h-2 bg-purple-500/40 rounded w-3/4"></div>
          <div className="h-2 bg-cyan-500/40 rounded w-1/2"></div>
          <div className="h-8 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded mt-2"></div>
          <div className="h-2 bg-purple-500/30 rounded w-2/3"></div>
        </div>
      </div>
    </div>

    {/* Phone - positioned to bottom right */}
    <div className="absolute -right-2 -bottom-8 w-20 sm:w-24 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-xl p-1.5 shadow-xl border border-purple-500/30 transform rotate-12">
      <div className="bg-[#0f0a1f] rounded-lg p-2">
        <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 bg-purple-500/40 rounded w-full"></div>
          <div className="h-1.5 bg-cyan-500/40 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px]"></div>

      {/* Floating stars */}
      <FloatingStar className="top-32 right-20 text-cyan-400" />
      <FloatingStar className="bottom-40 right-1/3 text-purple-400 delay-500" />
      <FloatingStar className="top-1/2 left-20 text-pink-400 delay-1000" />
      <FloatingStar className="bottom-20 right-10 text-cyan-300" />

      {/* Use same container as other sections */}
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                OLUWADARASIMI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                  OMOJOLA
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-purple-100/90 mb-10 max-w-xl leading-relaxed">
                Frontend Developer transforming ideas into exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#contact" variant="primary">
                  Contact Me
                </Button>
                <Button href="#projects" variant="secondary">
                  View My Work
                </Button>
              </div>
            </div>

            {/* Right content - Device mockups */}
            <div className="hidden lg:flex justify-end">
              <DeviceMockups />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative star */}
      <div className="absolute bottom-10 right-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="animate-pulse-glow">
          <path
            d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
            fill="url(#bottomStar)"
          />
          <defs>
            <linearGradient id="bottomStar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
