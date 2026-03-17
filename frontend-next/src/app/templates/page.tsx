import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceFilters from "@/components/ResourceFilters";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function TemplatesPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      {/* HERO */}
      <section className="bg-brand-mint pt-40 pb-24 px-6 relative border-b-2 border-brand-dark">
        <div className="max-w-5xl mx-auto text-center anim-fade-up">
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-6 font-display tracking-tight inline-block relative">
            Steal these <br />
            <span className="bg-white px-6 py-2 border-2 border-brand-dark rounded-xl shadow-playful rotate-neg-2 inline-block mx-2 my-2">templates.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-medium opacity-80">Ready-to-use agendas and boards for your next session. Just click, duplicate, and go.</p>
        </div>
        <div className="absolute -bottom-6 right-1/4 w-12 h-12 bg-brand-pink rounded-full border-2 border-brand-dark flex items-center justify-center animate-bounce z-20">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      <ResourceFilters />

      {/* RESOURCES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Weekly Sync */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-peach border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <div className="bg-white rounded-xl p-4 shadow-sm rotate-neg-4 border-2 border-brand-dark group-hover:rotate-0 transition-transform z-10 font-bold text-xl text-center">Weekly<br />Sync 🔄</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-peach transition-colors">The Perfect Weekly Sync</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Keep your team aligned without feeling like a status update robot.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Use Template <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          {/* Card 2 - Design Sprint (wide) */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col lg:col-span-2">
            <div className="md:flex h-full">
              <div className="md:w-2/5 bg-brand-pink border-r-2 border-brand-dark flex items-center justify-center p-8 relative overflow-hidden min-h-[200px]">
                <div className="w-24 h-24 bg-brand-yellow rounded-full absolute -top-4 -left-4 border-2 border-brand-dark"></div>
                <div className="w-16 h-16 bg-brand-mint rounded-full absolute -bottom-2 -right-4 border-2 border-brand-dark"></div>
                <div className="bg-white px-6 py-3 rounded-2xl shadow-sm rotate-pos-2 border-2 border-brand-dark group-hover:rotate-neg-2 transition-transform z-10 font-bold text-xl text-brand-dark">Sprint Agenda 🗺️</div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template Base</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-pink transition-colors">The Ultimate 5-Day Design Sprint</h3>
                <p className="text-brand-dark/70 font-medium mb-6 text-lg">A minute-by-minute agenda template imported directly into your Media Talk room. Co-created with leading sprint masters.</p>
                <div className="font-bold flex items-center text-brand-dark group-hover:underline">Use Template <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          </div>

          {/* Card 3 - Project Kickoff */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-lavender border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <div className="bg-white rounded-xl p-4 shadow-sm rotate-pos-2 border-2 border-brand-dark group-hover:-rotate-2 transition-transform z-10 font-bold text-xl">Project Kickoff 🚀</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-lavender transition-colors">Remote Project Kickoff</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Set expectations, build trust, and define your RACI matrix interactively.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Use Template <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          {/* Card 4 - Retro */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-yellow border-b-2 border-brand-dark flex items-center justify-center p-6 flex-wrap gap-2 relative overflow-hidden">
              <span className="bg-white px-3 py-1 rounded border-2 border-brand-dark text-sm font-bold rotate-1">Start!</span>
              <span className="bg-white px-3 py-1 rounded border-2 border-brand-dark text-sm font-bold -rotate-3">Stop!</span>
              <span className="bg-white px-3 py-1 rounded border-2 border-brand-dark text-sm font-bold rotate-2">Continue</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-yellow transition-colors">Start, Stop, Continue Retro</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">The classic continuous improvement framework, digitized and timed.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Use Template <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          {/* Submit Template */}
          <div className="group bg-brand-dark text-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(249,216,210,1)] hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col">
            <div className="p-10 flex-1 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-pink">Submit a Template</h3>
              <p className="text-white/80 font-medium mb-8">Got a killer workflow? Share it with the community and get featured.</p>
              <button className="px-6 py-3 bg-brand-pink text-brand-dark font-bold rounded-full border-2 border-brand-dark mx-auto hover:bg-white transition-colors">Submit Now</button>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
