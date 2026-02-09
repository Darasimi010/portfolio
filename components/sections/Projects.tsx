import { Section, SectionTitle } from "@/components/ui/sections";
import { Icons } from "@/components/ui/Icons";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "SOC Incident Feed",
      desc: "A production-ready Security Operations Center dashboard. Built with Next.js and Tanstack Query to handle real-time data fetching and visualize critical security alerts efficiently.",
      tags: [
        "NextJS",
        "Tailwind",
        "TypeScript",
        "Framer Motion",
        "Tanstack Query",
      ],
      image: "/projects/incident-feed.png",
      githubLink: "https://github.com/Darasimi010/incident-feed",
      demoLink: "https://incident-feed.vercel.app/",
    },
    {
      title: "SaaS Landing Page",
      desc: "A high-conversion landing page designed for speed and scalability. Leverages Framer Motion for smooth interactions and TypeScript for type-safe reliability.",
      tags: ["NextJS", "Tailwind", "TypeScript", "Framer Motion"],
      image: "/projects/saas-landing-page.png",
      githubLink: "https://github.com/Darasimi010/saas-product-landing-page",
      demoLink: "https://darasimi-saas-landing-page.vercel.app/",
    },
    {
      title: "Spotify Clone",
      desc: "A Spotify Clone that replicates the look and feel of Spotify's web player. Features complex state management for audio playback and a fully responsive user interface.",
      tags: ["React", "Tailwind", "Github"],
      image: "/projects/spotify-clone.png",
      githubLink: "https://github.com/Darasimi010/spotify-clone",
      demoLink: "https://darasimi-spotify-clone.netlify.app/",
    },
    {
      title: "IP Address Tracker",
      desc: "A precision tracking tool integrating Leaflet.js and third-party APIs. Provides real-time geolocation data with an interactive map interface.",
      tags: ["React", "Leaflet.js", "API Integration"],
      image: "/projects/ip-address-tracker.png",
      githubLink: "https://github.com/Darasimi010/IP-Address-Tracker",
      demoLink: "https://darasimi-ip-address-tracker.vercel.app/",
    },
    // {
    //   title: "E-Commerce Dashboard",
    //   desc: "Analytics dashboard for online stores featuring real-time data visualization, inventory management, and order tracking.",
    //   tags: ["Next.js", "Recharts", "Firebase"],
    //   image: "https://placehold.co/600x400/4f46e5/ffffff?text=Dashboard",
    //   githubLink: "#",
    //   demoLink: "#",
    // },
    {
      title: "Portfolio Website",
      desc: "The website you are viewing right now. Designed from scratch and built with Next.js and Tailwind CSS.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS",
      ],
      image: "/projects/portfolio.png",
      githubLink: "https://github.com/Darasimi010/portfolio",
      demoLink: "https://omojola.vercel.app/",
    },
  ];

  return (
    <Section id="projects" className="bg-transparent">
      <SectionTitle
        title="Featured Projects"
        subtitle="Some of my recent work"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group glass-card rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 hover:scale-110 transition-all duration-300 border border-white/20"
                  title="View Code"
                >
                  <Icons.Github />
                </a>
                <a
                  href={proj.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300 border border-white/20"
                  title="Live Demo"
                >
                  <Icons.ExternalLink />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-purple-100/70 mb-4 grow text-sm leading-relaxed">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
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
