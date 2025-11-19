import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-linear-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase mb-4">
          The Portfolio of
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          OLUWADARASIMI <br className="hidden md:block" /> OMOJOLA
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Frontend Developer transforming ideas into exceptional digital
            experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" variant="primary">
            Contact Me
          </Button>
          <Button href="#projects" variant="secondary">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
