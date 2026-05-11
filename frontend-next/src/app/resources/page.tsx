import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceFilters from "@/components/ResourceFilters";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function ResourcesPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      <section className="bg-brand-yellow pt-40 pb-24 px-6 relative border-b-2 border-brand-dark">
        <div className="max-w-5xl mx-auto text-center anim-fade-up">
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-6 font-display tracking-tight inline-block relative">
            Level up your <br />
            <span className="bg-white px-6 py-2 border-2 border-brand-dark rounded-xl shadow-playful rotate-2 inline-block mx-2 my-2">facilitation.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-medium opacity-80">Templates, guides, and articles to help you run sessions people actually want to attend.</p>
        </div>
        <div className="absolute -bottom-6 left-1/4 w-12 h-12 bg-brand-mint rounded-full border-2 border-brand-dark flex items-center justify-center animate-bounce z-20">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      <ResourceFilters />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-pink border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <div className="bg-white rounded-xl p-4 shadow-sm rotate-neg-4 border-2 border-brand-dark group-hover:rotate-0 transition-transform z-10 font-bold text-xl">Sprint Agenda 🗺️</div>
              <div className="absolute w-[200%] h-[200%] bg-brand-dark opacity-5 -top-[50%] -left-[50%] rotate-12 group-hover:rotate-45 transition-transform duration-1000"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template</span>
                <span className="text-xs font-bold text-gray-400">5 min read</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-mint transition-colors">The Ultimate 5-Day Design Sprint</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">A minute-by-minute agenda template imported directly into your Media Talk room.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-lavender border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <BookOpen className="w-20 h-20 text-brand-dark rotate-12 group-hover:-rotate-12 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Guide</span>
                <span className="text-xs font-bold text-gray-400">12 min read</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-lavender transition-colors">How to Kill the Silence</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Break the ice and keep participants engaged using soundboards and music.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-brand-dark text-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(165,239,211,1)] hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col">
            <div className="p-10 flex-1 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-mint">Join the Facilitator Community</h3>
              <p className="text-white/80 font-medium mb-8">Share tips, steal agendas, and network with 10k+ professionals.</p>
              <button className="px-6 py-3 bg-brand-mint text-brand-dark font-bold rounded-full border-2 border-brand-dark mx-auto hover:bg-white transition-colors">Join Discord</button>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col lg:col-span-2">
            <div className="md:flex h-full">
              <div className="md:w-2/5 bg-brand-peach border-r-2 border-brand-dark flex items-center justify-center p-8 relative overflow-hidden min-h-[200px]">
                <div className="w-24 h-24 bg-brand-yellow rounded-full absolute -top-4 -left-4 border-2 border-brand-dark"></div>
                <div className="w-16 h-16 bg-brand-mint rounded-full absolute -bottom-2 -right-4 border-2 border-brand-dark"></div>
                <div className="bg-white px-6 py-3 rounded-2xl shadow-sm rotate-pos-2 border-2 border-brand-dark group-hover:rotate-neg-2 transition-transform z-10 font-bold text-xl text-brand-dark">Check-in ideas 💬</div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Template Base</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-brand-peach transition-colors">50+ Openers for Workshops</h3>
                <p className="text-brand-dark/70 font-medium mb-6 text-lg">Don&apos;t start with &quot;how is everyone doing?&quot;. Swipe these creative, ready-to-use check-ins to set the tone immediately.</p>
                <div className="font-bold flex items-center text-brand-dark group-hover:underline">Explore templates <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-mint/50 border-b-2 border-brand-dark flex items-center justify-center p-6 relative">
              <Zap className="w-20 h-20 text-brand-dark group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Update</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-mint transition-colors">New: Advanced Breakouts</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Now you can pre-assign users or let them choose their rooms seamlessly.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read update <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
