import { Section, SectionTitle } from "@/components/ui/sections";
import { Icons } from "@/components/ui/Icons";

export default function Projects() {
  const projects = [
    {
      title: "Spotify Clone",
      desc: "A fully functional music player with authentication, playlist management, and playback controls using the Spotify API.",
      tags: ["React", "Tailwind", "Spotify API"],
      image: "https://placehold.co/600x400/1e1e24/1db954?text=Spotify+Clone",
    },
    {
      title: "E-Commerce Dashboard",
      desc: "Analytics dashboard for online stores featuring real-time data visualization, inventory management, and order tracking.",
      tags: ["Next.js", "Recharts", "Firebase"],
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=Dashboard",
    },
    {
      title: "Portfolio Website",
      desc: "The website you are viewing right now. Designed from scratch and built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Portfolio",
    },
  ];

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle title="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors"
                  title="View Code"
                >
                  <Icons.Github />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <Icons.ExternalLink />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
