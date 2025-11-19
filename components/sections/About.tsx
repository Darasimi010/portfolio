import { Section, SectionTitle } from "@/components/ui/sections";

export default function About() {
  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <SectionTitle title="About Me" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a Frontend Developer with a keen eye for design and a strong command of modern web technologies. 
            I specialize in building responsive, user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Interests</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Beyond the screen, I&apos;m an avid learner constantly exploring new frameworks. 
            I also enjoy contributing to open-source projects.
          </p>
        </div>
      </div>
    </Section>
  );
};