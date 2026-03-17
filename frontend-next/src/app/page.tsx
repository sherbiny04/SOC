import Link from "next/link";
import { Sparkles, Star, CheckCircle, Users, Clock, Hand, PenTool, MousePointer2, Play, Plus, Heart, MessageCircle, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />

      <section className="bg-brand-yellow pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 text-brand-dark mt-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 font-display tracking-tight anim-fade-up">
              Run more engaging sessions.<br />Get better outcomes.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium text-brand-dark/80 anim-fade-up anim-delay-1">
              Help teams collaborate effectively with structured facilitation tools. Workshops, meetings and trainings powered by energy and joy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 anim-fade-up anim-delay-2">
              <Link href="/signup" className="px-8 py-4 rounded-full border-2 border-brand-dark bg-brand-dark text-white font-bold text-lg hover:bg-black transition-colors shadow-playful">Get started for free</Link>
              <Link href="/demo" className="px-8 py-4 rounded-full border-2 border-brand-dark bg-white font-bold text-lg hover:bg-gray-50 transition-colors shadow-playful">Book a demo</Link>
            </div>

          <div className="mt-16 relative mx-auto w-full max-w-4xl animate-float" style={{ animationDuration: "8s" }}>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden aspect-video relative flex">
              <div className="w-16 border-r border-gray-100 flex flex-col items-center py-4 space-y-4 bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-brand-lavender"></div>
                <div className="w-8 h-8 rounded-full bg-brand-mint"></div>
                <div className="w-8 h-8 rounded-full bg-brand-pink"></div>
              </div>
              <div className="flex-1 p-6 grid grid-cols-4 gap-4 bg-gray-50/50">
                <div className="bg-brand-peach rounded-2xl flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-brand-mint rounded-2xl flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-brand-lavender col-span-2 row-span-2 rounded-2xl flex items-center justify-center relative">
                  <button className="bg-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center space-x-2 text-brand-dark">
                    <Play className="w-5 h-5 text-brand-yellow fill-current" />
                    <span>Take a 2 min. tour</span>
                  </button>
                </div>
                <div className="bg-brand-yellow rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-brand-pink rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-blue-100 rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-green-100 rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-red-100 rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
                <div className="bg-purple-100 rounded-2xl aspect-square flex items-center justify-center"><Users className="text-brand-dark/20 w-12 h-12" /></div>
              </div>
            </div>
          </div>
        </div>
        <Sparkles className="absolute top-32 left-20 w-12 h-12 text-brand-dark/20 rotate-12" />
        <Star className="absolute bottom-40 right-20 w-16 h-16 text-brand-dark/20 rotate-45 fill-current" />
      </section>

      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["IKEA", "Miro", "WWF", "IDEO", "PayFit", "NIVEA"].map(brand => (
            <h3 key={brand} className="text-xl font-bold font-display tracking-wider">{brand}</h3>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight text-brand-dark">
          All your team&apos;s facilitation tools in one place. <span className="text-gray-400">Stop hosting snoozefests. Start collaborating effectively. Media Talk brings structure, <span className="bg-brand-yellow px-2 rounded-lg text-brand-dark inline-block rotate-neg-2">energy, and joy</span> to your meetings, workshops, and training sessions.</span>
        </h2>
      </section>

      <section className="py-24 px-6 mt-10 relative">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="absolute -top-14 md:-top-20 left-0 md:-left-10 text-7xl md:text-[9rem] font-display font-extrabold rotate-neg-4 text-brand-dark z-20 tracking-tighter drop-shadow-sm pointer-events-none">Plan.</h2>
          <div className="bg-brand-lavender rounded-[3rem] p-10 md:p-20 relative flex flex-col md:flex-row items-center border-2 border-brand-dark/5 shadow-sm mt-8">
            <div className="md:w-1/2 z-10 pt-10 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Prepare sessions that<br />practically run themselves</h3>
              <p className="text-lg mb-8 opacity-80 max-w-sm">Create seamless structures with timed agendas, integrations, and tools ready before anyone even enters the room.</p>
              <Link href="#" className="px-6 py-3 rounded-full border-2 border-brand-dark bg-transparent font-bold hover:bg-white transition-colors block w-max">Learn more</Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 animate-float">
              <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-brand-dark rotate-pos-2 relative z-20 max-w-sm mx-auto shadow-playful">
                <div className="w-full h-8 bg-gray-100 rounded-md mb-4 flex items-center px-4 space-x-2 border border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-brand-yellow border border-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-brand-mint border border-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-brand-pink border border-gray-300"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-12 bg-gray-50 rounded-lg border-2 border-gray-100 flex items-center px-4 font-bold text-sm"><CheckCircle className="w-5 h-5 text-brand-mint mr-3" /> Welcome &amp; Icebreaker</div>
                  <div className="h-12 bg-gray-50 rounded-lg border-2 border-gray-100 flex items-center px-4 font-bold text-sm"><Users className="w-5 h-5 text-brand-lavender mr-3" /> Group Brainstorm</div>
                  <div className="h-12 bg-gray-50 rounded-lg border-2 border-gray-100 flex items-center px-4 font-bold text-sm"><Clock className="w-5 h-5 text-brand-peach mr-3" /> 5 Min Break</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="absolute -top-14 md:-top-20 right-0 md:-right-6 text-7xl md:text-[9rem] font-display font-extrabold rotate-pos-2 text-brand-dark z-20 tracking-tighter drop-shadow-sm pointer-events-none">Run.</h2>
          <div className="bg-brand-mint rounded-[3rem] p-10 md:p-20 relative flex flex-col md:flex-row-reverse items-center border-2 border-brand-dark/5 shadow-sm mt-8">
            <div className="md:w-1/2 z-10 md:pl-20 pt-10 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Bump up the energy</h3>
              <p className="text-lg mb-8 opacity-80 max-w-sm">Keep participants actively engaged with built-in soundboards, reactions, polls, waiting room music, and interactive activities.</p>
              <Link href="#" className="px-6 py-3 rounded-full border-2 border-brand-dark bg-transparent font-bold hover:bg-white transition-colors block w-max">View in action</Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 animate-float" style={{ animationDirection: "alternate-reverse" }}>
              <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-brand-dark rotate-neg-2 relative z-20 max-w-sm mx-auto flex flex-col shadow-playful">
                <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4 mb-4">
                  <span className="font-bold font-display">Chat</span>
                  <div className="flex space-x-2">
                    <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">🔥</span>
                    <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">👏</span>
                    <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">🎉</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-yellow shrink-0 border border-gray-200"></div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm border border-gray-200 font-medium">This is exactly what we needed!</div>
                  </div>
                  <div className="flex space-x-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-brand-pink shrink-0 ml-3 border border-gray-200"></div>
                    <div className="bg-brand-lavender p-3 rounded-2xl rounded-tr-none text-sm font-bold border-2 border-brand-dark shadow-sm">Let&apos;s vote on option B.</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 bg-brand-yellow p-4 rounded-full border-2 border-brand-dark rotate-12 shadow-playful z-30 animate-pulse">
                <Hand className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="absolute -top-14 md:-top-20 left-0 md:-left-10 text-7xl md:text-[9rem] font-display font-extrabold rotate-neg-4 text-brand-dark z-20 tracking-tighter drop-shadow-sm pointer-events-none">Recap.</h2>
          <div className="bg-brand-peach rounded-[3rem] p-10 md:p-20 relative flex flex-col md:flex-row items-center border-2 border-brand-dark/5 shadow-sm mt-8">
            <div className="md:w-1/2 z-10 pt-10 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Don&apos;t forget your<br />takeaways</h3>
              <p className="text-lg mb-8 opacity-80 max-w-sm">Summarize your sessions and capture outcomes in seconds. Access chat logs, poll recordings, personal notes, and more.</p>
              <Link href="#" className="px-6 py-3 rounded-full border-2 border-brand-dark bg-transparent font-bold hover:bg-white transition-colors block w-max">Try it out</Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 animate-float">
              <div className="bg-brand-yellow rounded-2xl p-8 shadow-xl border-4 border-brand-dark border-dashed rotate-pos-2 relative z-20 max-w-sm mx-auto text-center shadow-playful">
                <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center border-2 border-brand-dark shadow-playful mb-6">
                  <span className="text-3xl font-display font-bold text-red-500">REC</span>
                </div>
                <div className="w-full h-4 bg-white/60 rounded-full mb-3 border border-brand-dark/10"></div>
                <div className="w-3/4 h-4 bg-white/60 rounded-full mx-auto border border-brand-dark/10"></div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-3 border-2 border-brand-dark rounded-xl rotate-neg-4 shadow-playful z-30">
                <PenTool className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="absolute -top-10 md:-top-16 left-0 md:left-10 text-6xl md:text-[8rem] font-display font-extrabold rotate-pos-2 text-brand-dark z-20 tracking-tighter drop-shadow-sm pointer-events-none">Collaborate.</h2>
          <div className="bg-brand-pink rounded-[3rem] p-10 md:p-20 relative flex flex-col md:flex-row-reverse items-center border-2 border-brand-dark/5 shadow-sm mt-12">
            <div className="md:w-1/2 z-10 md:pl-20 pt-10 md:pt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">One workspace for all<br />your team&apos;s sessions</h3>
              <p className="text-lg mb-8 opacity-80 max-w-sm">Your Media Talk workspace is where you and your team can arrange rooms, share templates, and discuss recaps seamlessly.</p>
              <Link href="#" className="px-6 py-3 rounded-full border-2 border-brand-dark bg-transparent font-bold hover:bg-white transition-colors block w-max">See workspaces</Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 animate-float" style={{ animationDuration: "9s" }}>
              <div className="bg-brand-dark rounded-3xl p-4 shadow-2xl rotate-neg-2 relative z-20 max-w-md mx-auto aspect-video flex flex-wrap gap-2 justify-center content-center border-4 border-white shadow-playful">
                <div className="w-14 h-14 rounded-full border-2 border-brand-dark bg-brand-yellow -ml-4 shadow-sm z-10"></div>
                <div className="w-14 h-14 rounded-full border-2 border-brand-dark bg-brand-mint -ml-4 shadow-sm z-20"></div>
                <div className="w-14 h-14 rounded-full border-2 border-brand-dark bg-brand-peach -ml-4 shadow-sm z-30"></div>
                <div className="w-14 h-14 rounded-full border-2 border-brand-dark bg-white -ml-4 flex items-center justify-center font-bold text-sm z-40">+12</div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference">
                  <MousePointer2 className="w-12 h-12 text-white fill-current rotate-12 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Loved by facilitators everywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Jane Doe", role: "Design Sprint Master, IDEO", initial: "J", color: "bg-brand-yellow", quote: "Media Talk has completely changed the way I run remote workshops. The built-in music and timers keep everyone engaged." },
              { name: "Alex Smith", role: "Agile Coach, Spotify", initial: "A", color: "bg-brand-mint", quote: "It's like Zoom but actually fun and designed for collaboration. The agendas feature means I never have to awkwardly screen share a doc again." },
              { name: "Sarah Lee", role: "Product Manager, Miro", initial: "S", color: "bg-brand-lavender", quote: "I've tried every tool out there. Media Talk is simply the best for running high-energy, structured sessions without the tab switching." },
            ].map(t => (
              <div key={t.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${t.color} mr-3 font-bold flex items-center justify-center`}>{t.initial}</div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="#" className="px-6 py-3 rounded-full border-2 border-brand-dark bg-white font-bold hover:bg-gray-50 transition-colors inline-block text-sm">Read all Wall of Love</Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 overflow-hidden relative text-center">
        <div className="relative w-full max-w-[300px] md:max-w-md mx-auto mb-20 aspect-square flex items-center justify-center anim-fade-up">
          <div className="absolute inset-0 bg-brand-yellow/30 rounded-full blur-[60px] animate-pulse"></div>
          
          <div className="relative w-32 h-32 md:w-48 md:h-48 bg-brand-yellow rounded-full border-4 border-brand-dark shadow-playful-lg flex items-center justify-center z-10 animate-float">
            <Heart className="w-12 h-12 md:w-20 md:h-20 text-brand-dark fill-current shadow-sm" />
          </div>
          
          <div className="absolute w-full h-full animate-[spin_15s_linear_infinite]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-brand-pink rounded-full border-2 border-brand-dark flex items-center justify-center shadow-playful-sm animate-[spin_15s_linear_infinite_reverse]">
                <Users className="w-5 h-5 md:w-7 md:h-7 text-brand-dark" />
             </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-brand-mint rounded-full border-2 border-brand-dark flex items-center justify-center shadow-playful-sm animate-[spin_15s_linear_infinite_reverse]">
                <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-brand-dark" />
             </div>
             <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-brand-lavender rounded-full border-2 border-brand-dark flex items-center justify-center shadow-playful-sm animate-[spin_15s_linear_infinite_reverse]">
                <Star className="w-5 h-5 md:w-7 md:h-7 text-brand-dark" />
             </div>
             <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-brand-peach rounded-full border-2 border-brand-dark flex items-center justify-center shadow-playful-sm animate-[spin_15s_linear_infinite_reverse]">
                <Coffee className="w-5 h-5 md:w-7 md:h-7 text-brand-dark" />
             </div>
          </div>
          
          <div className="absolute -top-4 -left-4 w-4 h-4 bg-brand-mint rounded-full border border-brand-dark z-20"></div>
          <div className="absolute -bottom-8 -right-4 w-6 h-6 bg-brand-pink rounded-full border border-brand-dark z-20"></div>
          <div className="absolute top-1/4 -right-10 w-3 h-3 bg-brand-lavender rounded-full border border-brand-dark z-20"></div>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Built for facilitators, by facilitators.</h2>
          <p className="text-lg opacity-80">We&apos;ve built Media Talk with love from our community from day one. Level up your workshopping, facilitation, and collaboration skills by learning from our network of experts.</p>
          <Link href="#" className="mt-8 px-6 py-3 rounded-full border-2 border-brand-dark bg-white font-bold hover:bg-gray-50 transition-colors inline-block text-sm">Join Community</Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-display font-extrabold mb-12 flex flex-col items-start leading-[0.9]">
            <span>What.</span>
            <span>The.</span>
            <span>FAQ?</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Why should I use Media Talk?", a: "To run engaging, structured, and joyful sessions! It puts all your facilitation tools in one place, ending the nightmare of juggling tabs." },
              { q: "What types of sessions is Media Talk best for?", a: "Workshops, training sessions, design sprints, all-hands meetings, and any collaborative sync where engagement matters." },
              { q: "Is Media Talk free?", a: "Yes! You can get started for free on our basic plan. We also have Pro and Enterprise plans for advanced features." },
              { q: "How many participants can join a session?", a: "Up to 200 participants can join depending on your plan tier. Perfect for large all-hands or interactive webinars." },
              { q: "Is Media Talk GDPR compliant?", a: "Absolutely. We take privacy and security very seriously. All European data is hosted in the EU." },
            ].map(item => (
              <details key={item.q} className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold cursor-pointer p-6 hover:bg-gray-50 text-lg font-display">
                  {item.q}
                  <span className="transition group-open:rotate-45">
                    <Plus className="w-6 h-6" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-24 px-6 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to run seamlessly smooth virtual sessions?</h2>
          <p className="text-xl mb-10 text-gray-400">It&apos;s time to experience Media Talk for yourself!</p>
          <Link href="/signup" className="px-10 py-5 rounded-full border-2 border-white bg-white text-brand-dark font-display font-bold text-lg hover:bg-gray-100 transition-colors shadow-playful inline-block">Get started for free</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
