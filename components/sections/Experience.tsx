import { Section, SectionTitle } from "@/components/ui/sections";

export default function Experience () {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "BRAANDLY",
      period: "Sept 2025 - Present",
      desc: "Leading the frontend migration to Next.js 15, improving site performance by 40%. Implementing complex UI components with Tailwind."
    },
    {
      role: "Frontend Developer Intern",
      company: "HOLFORD HOMES",
      period: "Sept 2024 - Oct 2024",
      desc: "Collaborated with the design team to implement responsive landing pages. Fixed critical bugs in the legacy React codebase."
    }
  ];

  return (
    <Section id="experience" className="bg-white dark:bg-gray-900">
      <SectionTitle title="Experience" />
      <div className="max-w-3xl mx-auto space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-indigo-100 dark:bg-indigo-900 top-0"></div>
            
            <div className={`md:flex justify-between items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12 mb-2 md:mb-0"></div>
              
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 z-10"></div>
              
              <div className="md:w-5/12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase">{job.period}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{job.role}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">{job.company}</h4>
                <p className="text-gray-600 dark:text-gray-400">{job.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
