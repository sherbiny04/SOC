import Link from "next/link";
import { PenTool, GraduationCap, Users, Coffee, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UseCasesPage() {
  return (
    <div className="bg-brand-mint text-brand-dark overflow-x-hidden antialiased selection:bg-brand-dark selection:text-brand-mint">
      <Navbar />

      <section className="pt-40 pb-20 px-6 relative border-b-4 border-brand-dark z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center anim-fade-up">
          <div className="inline-block bg-white border-2 border-brand-dark px-4 py-2 rounded-xl rotate-3 mb-6 shadow-sm font-bold">
            For every team size 🤝
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] mb-8 font-display tracking-tight text-brand-dark drop-shadow-sm">
            Built for <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px #1B1C33" }}>complex</span> sessions.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-brand-dark/80 font-medium">
            Workshops, trainings, town halls, and more. Media Talk handles the heavy lifting.
          </p>
        </div>
      </section>

      <div className="bg-brand-dark text-brand-yellow font-display font-bold text-2xl py-4 flex overflow-hidden border-b-2 border-brand-dark whitespace-nowrap">
        <div className="animate-marquee px-4 flex items-center space-x-8">
          <span>✧ DESIGN SPRINTS</span><span>✧ ROADMAP PLANNING</span><span>✧ RETROSPECTIVES</span><span>✧ ALL HANDS</span><span>✧ BRAINSTORMING</span>
          <span>✧ DESIGN SPRINTS</span><span>✧ ROADMAP PLANNING</span><span>✧ RETROSPECTIVES</span><span>✧ ALL HANDS</span><span>✧ BRAINSTORMING</span>
        </div>
      </div>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg relative group overflow-hidden">
            <div className="w-16 h-16 bg-brand-yellow rounded-full border-2 border-brand-dark flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <PenTool className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-display font-extrabold mb-4">Workshops</h3>
            <p className="text-xl opacity-80 font-medium mb-8">Run multi-day design sprints or 2-hour strategy sessions without losing engagement.</p>
            <ul className="space-y-3 font-semibold text-lg border-t-2 border-gray-100 pt-6">
              <li className="flex items-center"><Check className="text-brand-mint w-5 h-5 mr-3 stroke-[3]" /> Breakout rooms</li>
              <li className="flex items-center"><Check className="text-brand-mint w-5 h-5 mr-3 stroke-[3]" /> Embedded whiteboards</li>
              <li className="flex items-center"><Check className="text-brand-mint w-5 h-5 mr-3 stroke-[3]" /> Polls &amp; Quizzes</li>
            </ul>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-yellow rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg relative group overflow-hidden mt-10 lg:mt-24">
            <div className="w-16 h-16 bg-brand-lavender rounded-full border-2 border-brand-dark flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-display font-extrabold mb-4">Training</h3>
            <p className="text-xl opacity-80 font-medium mb-8">Keep learners hooked. Make sure your knowledge transfer actually works.</p>
            <ul className="space-y-3 font-semibold text-lg border-t-2 border-gray-100 pt-6">
              <li className="flex items-center"><Check className="text-brand-lavender w-5 h-5 mr-3 stroke-[3]" /> Interactive queues</li>
              <li className="flex items-center"><Check className="text-brand-lavender w-5 h-5 mr-3 stroke-[3]" /> Private notes</li>
              <li className="flex items-center"><Check className="text-brand-lavender w-5 h-5 mr-3 stroke-[3]" /> Post-session recaps</li>
            </ul>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-lavender rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          </div>

          <div className="bg-brand-dark text-white p-10 rounded-[3rem] border-2 border-brand-dark shadow-[12px_12px_0px_0px_rgba(255,245,132,1)] relative group overflow-hidden">
            <div className="w-16 h-16 bg-brand-peach rounded-2xl border-2 border-brand-dark flex items-center justify-center mb-8 shadow-sm group-hover:rotate-12 transition-transform text-brand-dark">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-display font-extrabold mb-4">All Hands &amp; Town Halls</h3>
            <p className="text-xl opacity-80 font-medium mb-8">Align the whole company. High energy, zero technical difficulties.</p>
            <ul className="space-y-3 font-semibold text-lg border-t-2 border-gray-700 pt-6">
              <li className="flex items-center"><Check className="text-brand-peach w-5 h-5 mr-3 stroke-[3]" /> Music &amp; Soundboards</li>
              <li className="flex items-center"><Check className="text-brand-peach w-5 h-5 mr-3 stroke-[3]" /> Seamless presentation handoffs</li>
              <li className="flex items-center"><Check className="text-brand-peach w-5 h-5 mr-3 stroke-[3]" /> Anonymous Q&amp;A</li>
            </ul>
          </div>

          <div className="bg-brand-peach p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg relative group overflow-hidden mt-10 lg:mt-24">
            <div className="w-16 h-16 bg-white rounded-xl rotate-45 border-2 border-brand-dark flex items-center justify-center mb-8 shadow-sm group-hover:rotate-0 transition-transform text-brand-dark mx-4">
              <Coffee className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <h3 className="text-4xl font-display font-extrabold mb-4">Socials &amp; Mixers</h3>
            <p className="text-xl opacity-80 font-medium mb-8">Because remote culture doesn&apos;t have to be forced fun.</p>
            <ul className="space-y-3 font-semibold text-lg border-t-2 border-brand-dark/10 pt-6">
              <li className="flex items-center"><Check className="text-brand-dark w-5 h-5 mr-3 stroke-[3]" /> Mini-games</li>
              <li className="flex items-center"><Check className="text-brand-dark w-5 h-5 mr-3 stroke-[3]" /> Flying reaction emojis</li>
              <li className="flex items-center"><Check className="text-brand-dark w-5 h-5 mr-3 stroke-[3]" /> Casual room switching</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="bg-brand-pink border-2 border-brand-dark rounded-[3rem] p-16 text-center shadow-playful-lg relative overflow-hidden">
          <h2 className="text-5xl font-display font-extrabold mb-6 relative z-10 w-full">Ready to try it yourself?</h2>
          <p className="text-2xl font-medium opacity-80 mb-10 relative z-10">We&apos;ve got templates ready for all these use cases!</p>
          <Link href="/signup" className="inline-block px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-2xl hover:bg-black transition-colors shadow-playful border border-transparent relative z-10">
            Sign up and steal them
          </Link>
          <Sparkles className="absolute left-10 top-10 w-20 h-20 text-white/50 -rotate-12" />
        </div>
      </section>
    </div>
  );
}
