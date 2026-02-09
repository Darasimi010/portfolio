import { Section, SectionTitle } from "@/components/ui/sections";
import { motion } from "motion/react";

export default function Skills() {
  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Framer Motion",
    "Git/GitHub",
    "Figma",
    "Vercel",
  ];

  return (
    <Section id="skills" className="bg-transparent">
      <SectionTitle
        title="Skills & Tools"
        subtitle="Technologies I work with to bring ideas to life"
      />
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        <div className="w-full overflow-hidden">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
              className="flex gap-6 pr-6 md:gap-8 flex-none md:pr-8"
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
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={`${skill}-${idx}`}
                  className="px-6 py-3 glass-card text-white rounded-full font-medium hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 cursor-default whitespace-nowrap border border-purple-500/30 hover:border-purple-400/60"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Static grid for non-animated view */}
      <div className="hidden mt-12 flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-2.5 glass-card text-purple-100 rounded-full font-medium border border-purple-500/30 hover:border-purple-400 hover:text-white hover:scale-105 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
