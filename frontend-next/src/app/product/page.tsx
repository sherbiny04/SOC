import Link from "next/link";
import { PlayCircle, Plus, Music, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterMinimal from "@/components/FooterMinimal";

export default function ProductPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      <section className="bg-brand-pink pt-40 pb-32 px-6 relative border-b-2 border-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1B1C33 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border-2 border-brand-dark shadow-sm font-bold mb-8 rotate-neg-2 hover:rotate-0 transition-transform anim-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse"></span>
            <span>The Media Talk Engine ✨</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] mb-8 font-display tracking-tight text-brand-dark anim-fade-up anim-delay-1">
            Tools that actually <br />
            <span className="inline-block relative mt-4">
              <span className="absolute -inset-2 bg-brand-yellow rounded-xl rotate-neg-2 border-2 border-brand-dark shadow-playful z-[-1]"></span>
              <span className="relative z-10 px-4">make sense.</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-brand-dark/80 font-medium anim-fade-up anim-delay-2">
            Built-in agendas, integrated whiteboards, and energetic interactions—right inside your session window. No tab switching.
          </p>
          <Link href="/demo" className="px-8 py-4 bg-brand-dark text-white text-xl font-bold rounded-full shadow-playful hover:-translate-y-1 hover:shadow-none transition-all inline-flex items-center space-x-2 group anim-fade-up anim-delay-3">
            <span>See it in action</span>
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        <div className="hidden lg:block absolute top-32 left-[10%] bg-white border-2 border-brand-dark p-4 rounded-2xl shadow-playful rotate-neg-6 animate-float">
          <div className="flex space-x-2 items-center">
            <div className="w-3 h-3 bg-red-400 rounded-full border border-brand-dark"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full border border-brand-dark"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full border border-brand-dark"></div>
          </div>
          <div className="mt-4 w-32 h-2 bg-gray-200 rounded"></div>
          <div className="mt-2 w-24 h-2 bg-gray-200 rounded"></div>
        </div>
        <div className="hidden lg:block absolute bottom-20 right-[10%] bg-brand-lavender border-2 border-brand-dark p-6 rounded-full shadow-playful rotate-pos-6 animate-float" style={{ animationDelay: "1s" }}>
          <Mic className="w-10 h-10" />
        </div>
      </section>

      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold">One tool to rule them all.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[340px]">
          <div className="md:col-span-2">
          <div className="h-full bg-brand-yellow p-8 md:p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-20 md:max-w-md">
              <h3 className="text-4xl font-display font-extrabold mb-4">Timed Agendas</h3>
              <p className="text-xl opacity-80 font-medium">Keep your session on track. Build your agenda beforehand, and run it seamlessly without stressing.</p>
            </div>
            <div className="bg-white/90 backdrop-blur border-2 border-brand-dark rounded-xl p-4 absolute bottom-[-10%] right-[-5%] rotate-neg-6 group-hover:rotate-0 group-hover:-translate-y-4 transition-all duration-500 shadow-playful-lg w-80 z-10">
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg mb-2 border-2 border-brand-dark/20">
                <div className="w-3 h-3 rounded-full bg-brand-mint border border-brand-dark"></div>
                <span className="flex-1 font-extrabold">Intro &amp; Icebreaker</span>
                <span className="text-xs font-bold bg-brand-mint/50 px-2 py-1 rounded border border-brand-dark/20">05:00</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border-2 border-brand-dark/20">
                <div className="w-3 h-3 rounded-full bg-brand-yellow border border-brand-dark"></div>
                <span className="flex-1 font-bold text-gray-500">Miro Brainstorm</span>
                <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded text-gray-500 border border-brand-dark/20">20:00</span>
              </div>
            </div>
          </div>
          </div>

          <div className="h-full bg-brand-dark text-white p-8 md:p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg flex flex-col justify-between group hover:bg-black transition-colors">
            <div className="z-10">
              <h3 className="text-3xl lg:text-4xl font-display font-extrabold mb-4 text-brand-yellow">Integrations</h3>
              <p className="opacity-80 text-lg">Launch Miro, Mural, or Google Drive natively.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 z-10">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-dark font-black font-display text-xl group-hover:-translate-y-2 transition-transform">M</div>
              <div className="w-14 h-14 bg-brand-mint rounded-xl flex items-center justify-center text-brand-dark font-black font-display text-xl group-hover:-translate-y-2 delay-75 transition-transform">G</div>
              <div className="w-14 h-14 bg-white/10 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center group-hover:-translate-y-2 delay-150 transition-transform">
                <Plus className="text-white" />
              </div>
            </div>
          </div>

          <div className="h-full bg-brand-mint p-8 md:p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg flex flex-col items-center justify-center text-center group">
            <div className="bg-white p-6 rounded-full border-2 border-brand-dark mb-6 rotate-6 shadow-playful group-hover:rotate-12 group-hover:scale-110 transition-all cursor-pointer">
              <span className="text-5xl">👏</span>
            </div>
            <h3 className="text-3xl font-display font-bold">Reactions</h3>
            <p className="font-medium opacity-80 mt-2">No more crickets.</p>
          </div>

          <div className="md:col-span-2">
          <div className="h-full bg-brand-lavender p-8 md:p-10 rounded-[3rem] border-2 border-brand-dark shadow-playful-lg relative overflow-hidden flex flex-col justify-center group pointer-events-auto cursor-pointer">
            <h3 className="text-4xl lg:text-5xl font-display font-extrabold mb-4 z-10 w-2/3 group-hover:scale-105 origin-left transition-transform">Music player</h3>
            <p className="text-xl opacity-80 z-10 font-medium w-2/3">Set the vibe with a built-in player. Lo-fi beats included directly in the room.</p>
            <Music className="absolute -right-5 -bottom-5 w-72 h-72 text-white/50 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500" />
          </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark text-white pt-32 pb-12 px-6 font-sm border-t-8 border-brand-yellow">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-brand-yellow">Ready to facilitate?</h2>
          <Link href="/signup" className="px-12 py-5 bg-white text-brand-dark rounded-full font-bold text-2xl hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(255,245,132,1)] border-2 border-brand-dark mb-24">
            Start for free
          </Link>
          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 text-white/50">
            <div className="flex items-center space-x-2 font-display font-bold text-xl text-white mb-4 md:mb-0">
              <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark text-[7px] font-bold border border-brand-dark">MT</span>
              <span>Media Talk</span>
            </div>
            <p>&copy; 2026 Media Talk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
