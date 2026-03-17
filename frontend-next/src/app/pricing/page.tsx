"use client";
import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterMinimal from "@/components/FooterMinimal";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-gray-50 text-brand-dark overflow-x-hidden antialiased">
      <Navbar />

      {/* HEADER / TOGGLE */}
      <section className="pt-40 pb-16 px-6 text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-6 font-display tracking-tight text-brand-dark anim-fade-up">
          Simple pricing.<br />No surprises.
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-brand-dark/80 font-medium anim-fade-up anim-delay-1">Start for free. Upgrade when your team grows.</p>

        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 font-bold text-lg anim-fade-up anim-delay-2">
          <span className={isAnnual ? "opacity-50" : ""}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-20 h-10 rounded-full border-2 border-brand-dark shadow-sm cursor-pointer transition-colors ${isAnnual ? "bg-brand-mint" : "bg-brand-yellow"}`}
          >
            <span className={`absolute top-0.5 w-8 h-8 rounded-full bg-white border-2 border-brand-dark transition-transform ${isAnnual ? "translate-x-10" : "translate-x-0.5"}`}></span>
          </button>
          <span className={!isAnnual ? "opacity-50" : ""}>
            Annually{" "}
            <span className="bg-brand-yellow text-xs px-2 py-1 border-2 border-brand-dark rounded-xl ml-2 shadow-sm font-black rotate-3 inline-block">
              -20%
            </span>
          </span>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* FREE TIER */}
          <div className="bg-white rounded-[2.5rem] p-10 border-2 border-brand-dark shadow-playful-lg relative">
            <h3 className="text-3xl font-display font-black mb-2">Free</h3>
            <p className="text-brand-dark/70 font-medium h-12">Perfect for side projects &amp; trial.</p>
            <div className="my-8">
              <span className="text-6xl font-black font-display">$0</span>
              <span className="text-lg font-bold opacity-60">/ forever</span>
            </div>
            <Link href="/signup" className="block w-full py-4 text-center font-bold text-xl rounded-2xl border-2 border-brand-dark bg-gray-50 hover:bg-brand-lavender/50 transition-colors">
              Get started
            </Link>
            <ul className="mt-10 space-y-4 font-semibold opacity-90">
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-mint stroke-[3]" /> Up to 40 participants</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-mint stroke-[3]" /> 45-min time limit</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-mint stroke-[3]" /> Unlimited agendas</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-mint stroke-[3]" /> Basic reactions</li>
            </ul>
          </div>

          {/* PRO TIER */}
          <div className="bg-brand-mint rounded-[2.5rem] p-10 border-2 border-brand-dark shadow-playful-xl relative transform md:-translate-y-6">
            <div className="absolute -top-5 inset-x-0 flex justify-center">
              <span className="bg-brand-dark text-brand-yellow font-black px-6 py-2 border-2 border-brand-dark rounded-full shadow-sm">Most Popular 🔥</span>
            </div>
            <h3 className="text-3xl font-display font-black mb-2">Pro</h3>
            <p className="text-brand-dark/80 font-medium h-12">For power facilitators.</p>
            <div className="my-8">
              <span className="text-6xl font-black font-display transition-all">{isAnnual ? "$19" : "$24"}</span>
              <span className="text-lg font-bold opacity-60">/mo per user</span>
            </div>
            <Link href="/signup" className="block w-full py-4 text-center font-bold text-xl rounded-2xl border-2 border-brand-dark bg-brand-dark text-white hover:bg-black hover:shadow-playful transform hover:-translate-y-1 transition-all">
              Start free trial
            </Link>
            <ul className="mt-10 space-y-4 font-bold">
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 stroke-[3]" /> Up to 200 participants</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 stroke-[3]" /> Unlimited time</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 stroke-[3]" /> Recording &amp; Transcripts</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 stroke-[3]" /> Miro &amp; Mural Integrations</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 stroke-[3]" /> Custom branding</li>
            </ul>
          </div>

          {/* ENTERPRISE TIER */}
          <div className="bg-white rounded-[2.5rem] p-10 border-2 border-brand-dark shadow-playful-lg relative">
            <h3 className="text-3xl font-display font-black mb-2">Enterprise</h3>
            <p className="text-brand-dark/70 font-medium h-12">Security &amp; scale for large orgs.</p>
            <div className="my-8">
              <span className="text-5xl font-black font-display">Custom</span>
            </div>
            <Link href="/demo" className="block w-full py-4 text-center font-bold text-xl rounded-2xl border-2 border-brand-dark bg-brand-yellow hover:bg-brand-yellow/80 hover:shadow-playful transform hover:-translate-y-1 transition-all">
              Contact Sales
            </Link>
            <ul className="mt-10 space-y-4 font-semibold opacity-90">
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-dark stroke-[3]" /> Unlimited participants</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-dark stroke-[3]" /> SSO &amp; SAML</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-dark stroke-[3]" /> Dedicated success manager</li>
              <li className="flex items-start"><Check className="w-5 h-5 mr-3 mt-0.5 text-brand-dark stroke-[3]" /> Advanced analytics API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-brand-pink border-t-2 border-brand-dark border-b-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display font-extrabold text-center mb-16">Pricing FAQ 🤔</h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-brand-dark p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(27,28,51,1)]">
              <h4 className="text-2xl font-black font-display mb-3">Do participants need a paid account?</h4>
              <p className="text-lg opacity-80 font-medium">Nope! Only people hosting or creating the sessions need a paid license. Participants can join for free.</p>
            </div>
            <div className="bg-white border-2 border-brand-dark p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(27,28,51,1)]">
              <h4 className="text-2xl font-black font-display mb-3">Can I cancel anytime?</h4>
              <p className="text-lg opacity-80 font-medium">Yes, you can cancel your subscription from your billing dashboard at any time. No locked contracts.</p>
            </div>
            <div className="bg-white border-2 border-brand-dark p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(27,28,51,1)]">
              <h4 className="text-2xl font-black font-display mb-3">Do you offer discounts for non-profits?</h4>
              <p className="text-lg opacity-80 font-medium">
                Absolutely. We offer a 50% discount for certified non-profits and educational institutions.{" "}
                <Link href="/demo" className="underline font-bold text-brand-dark">Contact us.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark py-12 px-6 flex items-center justify-center">
        <div className="flex items-center space-x-2 font-display font-bold text-lg text-white">
          <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark text-xs border border-brand-dark">B</span>
          <span>Media Talk &copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
