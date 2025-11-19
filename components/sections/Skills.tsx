import { Section, SectionTitle } from "@/components/ui/sections";

export default function Skills () {
  const skills = [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "GraphQL", "Git/GitHub", 
    "Figma", "Vercel"
  ];

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle title="Skills & Tools" />
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 font-medium hover:scale-105 transition-transform cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
};
