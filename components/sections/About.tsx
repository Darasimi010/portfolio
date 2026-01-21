import { Section, SectionTitle } from "@/components/ui/sections";

export default function About() {
  return (
    <Section id="about" className="bg-transparent">
      <SectionTitle title="About Me" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
          <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Who I Am</h3>
          <p className="text-purple-100/80 leading-relaxed">
            I&apos;m a Frontend Developer with a keen eye for design and a strong command of modern web technologies. 
            I specialize in building responsive, user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
          <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">My Interests</h3>
          <p className="text-purple-100/80 leading-relaxed">
            Beyond the screen, I&apos;m an avid learner constantly exploring new frameworks. 
            I also enjoy contributing to open-source projects and building creative side projects.
          </p>
        </div>
      </div>
    </Section>
  );
};