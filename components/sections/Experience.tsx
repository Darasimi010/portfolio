import { Section, SectionTitle } from "@/components/ui/sections";

export default function Experience() {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "BRAANDLY",
      period: "Sept 2025 - Present",
      desc: "Enhanced cross-device compatibility by diagnosing and resolving complex layout issues, including critical overflow errors on mobile views. Investigated and fixed broken filtering logic on high-traffic pages to restore core functionality and improve user retention. Collaborated on visual polish for the palette generator tools, eliminating UI regressions to ensure a pixel-perfect user experience.",
    },
    {
      role: "Software Developer",
      company: "HOLFORD HOMES",
      period: "Sept 2025 - Oct 2025",
      desc: "Architected and built a custom scheduling solution from scratch, enabling international clients to book consultations by dynamically adapting availability to user time zones. Engineered the backend logic to seamlessly sync user-selected slots with consultant calendars, automatically generating meeting events.",
    },
  ];

  return (
    <Section id="experience" className="bg-transparent">
      <SectionTitle
        title="Experience"
        subtitle="My professional journey so far"
      />
      <div className="max-w-3xl mx-auto space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-cyan-500 top-0"></div>

            <div
              className={`md:flex justify-between items-center w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-5/12 mb-2 md:mb-0"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-[#1a0a2e] z-10 shadow-lg shadow-purple-500/50"></div>

              {/* Content card */}
              <div className="md:w-5/12 glass-card p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
                <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 rounded-full mb-3 border border-cyan-500/30">
                  {job.period}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {job.role}
                </h3>
                <h4 className="text-lg text-purple-300 mb-4 font-medium">
                  {job.company}
                </h4>
                <p className="text-purple-100/70">{job.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
