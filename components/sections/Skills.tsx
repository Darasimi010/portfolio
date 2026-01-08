import { Section, SectionTitle } from "@/components/ui/sections";
import { motion } from "motion/react";

export default function Skills() {
  const skills = [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Framer Motion", "Git/GitHub", "Figma", "Vercel"
  ];

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle title="Skills & Tools" />
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        <div className="w-full overflow-hidden">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,white,white,transparent)]">
            <motion.div
              className="flex gap-10 pr-10 md:gap-20 flex-none md:pr-20"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {skills.map((skill) => (
                <div key={skill} className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 font-medium hover:scale-105 hover:shadow-indigo-500/60 transition-transform cursor-default">
                  {skill}
                </div>
              ))}
              {skills.map((skill) => (
                <div key={skill} className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 font-medium hover:scale-105 hover:shadow-indigo-500/60 transition-transform cursor-default">
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
