import Link from "next/link";
import { BookOpen, ArrowRight, AlertOctagon, Laptop, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceFilters from "@/components/ResourceFilters";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function GuidesPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      <section className="bg-brand-lavender pt-40 pb-24 px-6 relative border-b-2 border-brand-dark">
        <div className="max-w-5xl mx-auto text-center anim-fade-up">
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-6 font-display tracking-tight inline-block relative">
            Master the <br />
            <span className="bg-white px-6 py-2 border-2 border-brand-dark rounded-xl shadow-playful rotate-2 inline-block mx-2 my-2">art.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-medium opacity-80">In-depth guides, articles, and playbooks to help you become a facilitation pro.</p>
        </div>
        <div className="absolute -bottom-6 left-1/4 w-12 h-12 bg-white rounded-full border-2 border-brand-dark flex items-center justify-center animate-bounce z-20">
          <BookOpen className="w-6 h-6 text-brand-dark" />
        </div>
      </section>

      <ResourceFilters />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col lg:col-span-2">
            <div className="md:flex h-full">
              <div className="md:w-2/5 bg-brand-pink border-r-2 border-brand-dark flex items-center justify-center p-8 relative overflow-hidden min-h-[200px]">
                <h2 className="text-5xl border-b-4 border-brand-dark pb-2 font-black rotate-neg-2">Shh...</h2>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Master Guide</span>
                  <span className="text-xs font-bold text-gray-400">12 min read</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-pink transition-colors">How to Kill the Silence</h3>
                <p className="text-brand-dark/70 font-medium mb-6 text-lg">Break the ice and keep participants engaged using soundboards, contextual music, and perfectly timed micro-interactions.</p>
                <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read the guide <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-yellow border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <AlertOctagon className="w-20 h-20 text-brand-dark group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Article</span>
                <span className="text-xs font-bold text-gray-400">7 min read</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-yellow transition-colors">Managing Difficult Participants</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">From the loud talker to the unmuted typer. How to gracefully regain control.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-mint border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <Laptop className="w-20 h-20 text-brand-dark rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Playbook</span>
                <span className="text-xs font-bold text-gray-400">9 min read</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-mint transition-colors">The Ultimate Tech Check</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Ensure your setup is flawless 15 minutes before the session starts.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-peach border-b-2 border-brand-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="flex items-center space-x-4">
                <Clock className="w-12 h-12 text-brand-dark" />
                <span className="text-2xl font-black">VS</span>
                <Users className="w-12 h-12 text-brand-dark" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Strategy</span>
                <span className="text-xs font-bold text-gray-400">14 min read</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-peach transition-colors">Async vs Sync Workflow</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Determine what needs a meeting and what should be handled asynchronously.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-brand-dark text-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(201,207,254,1)] hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col">
            <div className="p-10 flex-1 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-lavender">Request a Topic</h3>
              <p className="text-white/80 font-medium mb-8">Struggling with a specific facilitation challenge? Let us know.</p>
              <button className="px-6 py-3 bg-brand-lavender text-brand-dark font-bold rounded-full border-2 border-brand-dark mx-auto hover:bg-white transition-colors">Suggest Topic</button>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
