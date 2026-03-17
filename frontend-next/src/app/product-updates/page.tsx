import Link from "next/link";
import { ArrowRight, LayoutGrid, LayoutDashboard, Activity, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceFilters from "@/components/ResourceFilters";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function ProductUpdatesPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      {/* HERO */}
      <section className="bg-brand-pink pt-40 pb-24 px-6 relative border-b-2 border-brand-dark">
        <div className="max-w-5xl mx-auto text-center anim-fade-up">
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-6 font-display tracking-tight inline-block relative">
            What&apos;s <br />
            <span className="bg-white px-6 py-2 border-2 border-brand-dark rounded-xl shadow-playful rotate-2 inline-block mx-2 my-2">new?</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-medium opacity-80">The latest features, fixes, and fresh improvements straight from our changelog.</p>
        </div>
        <div className="absolute -bottom-6 right-1/3 w-12 h-12 bg-white rounded-full border-2 border-brand-dark flex items-center justify-center animate-bounce z-20">
          <Zap className="w-6 h-6 text-brand-dark" />
        </div>
      </section>

      <ResourceFilters />

      {/* RESOURCES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Breakout Rooms 2.0 (wide) */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col lg:col-span-2">
            <div className="md:flex h-full">
              <div className="md:w-2/5 bg-brand-mint border-r-2 border-brand-dark flex flex-col items-center justify-center p-8 relative overflow-hidden min-h-[200px]">
                <div className="flex space-x-2 z-10">
                  <LayoutGrid className="w-12 h-12 text-brand-dark" />
                  <ArrowRight className="w-12 h-12 text-brand-dark/50" />
                  <LayoutDashboard className="w-12 h-12 text-brand-dark" />
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Major Release</span>
                  <span className="text-xs font-bold text-gray-400">March 2026</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-mint transition-colors">Advanced Breakout Rooms 2.0</h3>
                <p className="text-brand-dark/70 font-medium mb-6 text-lg">You asked, we delivered. Pre-assign participants, let them choose their rooms, and broadcast audio seamlessly across all breakouts.</p>
                <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read the changelog <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          </div>

          {/* Miro Integration */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-yellow border-b-2 border-brand-dark flex items-center justify-center p-6 relative">
              <span className="text-6xl font-black font-display text-brand-dark/80 group-hover:scale-110 transition-transform">Miro</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Integration</span>
                <span className="text-xs font-bold text-gray-400">Feb 2026</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-yellow transition-colors">Introducing Miro Integration</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Embed Miro boards directly into your sessions without requiring participants to log in.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Set it up <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          {/* Polls & Reactions */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-lavender border-b-2 border-brand-dark flex items-center justify-center p-6 relative">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white text-xs border-2 border-white shadow-sm">+</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-brand-dark shadow-sm">😊</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-brand-dark shadow-sm">🔥</div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Update</span>
                <span className="text-xs font-bold text-gray-400">Jan 2026</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-lavender transition-colors">Better Polls &amp; Reactions</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">New animated reactions and multi-choice polling formats are here.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          {/* Speed */}
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-gray-200 border-b-2 border-brand-dark flex items-center justify-center p-6 relative">
              <Activity className="w-20 h-20 text-brand-dark group-hover:text-green-500 transition-colors duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Performance</span>
                <span className="text-xs font-bold text-gray-400">Dec 2025</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-green-500 transition-colors">Under The Hood: Speed</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">We optimized our video routing for 40% lower CPU usage on older machines.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read technical details <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
