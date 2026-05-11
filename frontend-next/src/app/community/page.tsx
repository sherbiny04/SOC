import Link from "next/link";
import { Users, Mic, Award, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourceFilters from "@/components/ResourceFilters";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function CommunityPage() {
  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      <section className="bg-brand-peach pt-40 pb-24 px-6 relative border-b-2 border-brand-dark">
        <div className="max-w-5xl mx-auto text-center anim-fade-up">
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-6 font-display tracking-tight inline-block relative">
            Join the <br />
            <span className="bg-white px-6 py-2 border-2 border-brand-dark rounded-xl shadow-playful rotate-neg-2 inline-block mx-2 my-2">movement.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-medium opacity-80">Connect with thousands of facilitators worldwide. Share, learn, and grow together.</p>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-mint rounded-full border-2 border-brand-dark flex items-center justify-center animate-bounce z-20">
          <Users className="w-6 h-6" />
        </div>
      </section>

      <ResourceFilters />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-brand-dark text-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(165,239,211,1)] hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col lg:col-span-2">
            <div className="md:flex h-full">
              <div className="p-10 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20 text-white">Join Us</span>
                </div>
                <h3 className="text-4xl font-display font-bold mb-4 text-brand-mint">The Facilitator Discord</h3>
                <p className="text-white/80 font-medium mb-8 text-lg">Our official Discord server is the most active community of session designers on the internet. Drop in and say hi!</p>
                <button className="px-6 py-3 bg-brand-mint text-brand-dark font-bold rounded-full border-2 border-brand-dark hover:bg-white transition-colors w-max">Join Discord</button>
              </div>
              <div className="md:w-2/5 p-8 relative overflow-hidden flex items-center justify-center">
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-600 w-full rotate-pos-2 z-10 shadow-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-pink border border-white/20 mr-3"></div>
                    <span className="font-bold text-sm">DesignLead99</span>
                  </div>
                  <p className="text-sm text-gray-300">Has anyone used the new polling feature for a sprint retro? Worked amazingly well for my team today! 🔥</p>
                </div>
                <MessageCircle className="w-40 h-40 text-brand-dark absolute -right-10 opacity-50" />
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-yellow border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center border-4 border-white shadow-playful group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-brand-yellow" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Event</span>
                <span className="text-xs font-bold text-red-500 flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>Live next week</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-yellow transition-colors">AMA: Building Trust Remotely</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">Join our live Q&amp;A with industry experts on fostering psychological safety.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">RSVP Now <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>

          <div className="group bg-white border-2 border-brand-dark rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(27,28,51,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(27,28,51,1)] transition-all cursor-pointer flex flex-col">
            <div className="h-48 bg-brand-lavender border-b-2 border-brand-dark flex items-center justify-center p-6 relative overflow-hidden">
              <Award className="w-20 h-20 text-brand-dark rotate-neg-4 group-hover:rotate-0 transition-transform" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200 text-gray-500">Showcase</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-lavender transition-colors">Creator Spotlight: Sarah J.</h3>
              <p className="text-brand-dark/70 font-medium mb-6 flex-1">How Sarah used Media Talk to run a 500-person virtual escape room.</p>
              <div className="font-bold flex items-center text-brand-dark group-hover:underline">Read interview <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
