import { Section, SectionTitle } from "@/components/ui/sections";
import { Button } from "@/components/ui/Button";


export default function Contact() {
  return (
    <Section id="contact" className="bg-transparent">
      <SectionTitle title="Get In Touch" subtitle="Let's work together on your next project" />
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Talk
          </h3>
          <p className="text-purple-100/70 mb-8 leading-relaxed">
            I&apos;m currently available for freelance projects and full-time
            opportunities. If you have a project that needs some creative touch,
            feel free to contact me.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-purple-100/80 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 text-cyan-400 border border-purple-500/30 group-hover:border-purple-400/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-white transition-colors">omojoladarasimi9@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-purple-100/80 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 text-cyan-400 border border-purple-500/30 group-hover:border-purple-400/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-white transition-colors">Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-purple-900/30 border border-purple-500/30 text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-purple-400/50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-purple-900/30 border border-purple-500/30 text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-purple-400/50"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-purple-900/30 border border-purple-500/30 text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-purple-400/50"
              placeholder="Project Inquiry"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-purple-900/30 border border-purple-500/30 text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-purple-400/50 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <Button variant="primary" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}
