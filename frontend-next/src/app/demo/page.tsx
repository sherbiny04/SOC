import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DemoPage() {
  return (
    <div className="bg-brand-peach text-brand-dark min-h-screen">
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="flex items-center space-x-2 font-display font-bold text-2xl tracking-tight">
          <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow text-[9px] font-bold">MT</span>
          <span>Media Talk</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="font-bold underline decoration-2 decoration-brand-dark/20 hover:decoration-brand-dark">Back to home</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
        <div className="space-y-8 anim-fade-up">
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
            Let&apos;s chat about your team&apos;s workflow. 🗓️
          </h1>
          <p className="text-xl text-brand-dark/80 font-medium leading-relaxed max-w-lg">
            Book a personalized 30-minute demo. We&apos;ll show you how to run interactive, high-energy sessions that your team will actually love.
          </p>
          <div className="space-y-4 pt-4">
            {[
              { color: "bg-brand-yellow", text: "Custom walkthrough of features." },
              { color: "bg-brand-mint", text: "Pricing logic for your specific org size." },
              { color: "bg-brand-lavender", text: "Q&A covering integrations & security." },
            ].map(item => (
              <div key={item.text} className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${item.color} border-2 border-brand-dark flex items-center justify-center flex-shrink-0`}>
                  <Check className="w-6 h-6" />
                </div>
                <p className="font-bold text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-brand-dark rounded-[2rem] p-8 lg:p-12 shadow-playful-lg anim-fade-up anim-delay-2">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-bold mb-2 text-sm">First Name</label>
                <input type="text" className="input-neo" placeholder="First" />
              </div>
              <div>
                <label className="block font-bold mb-2 text-sm">Last Name</label>
                <input type="text" className="input-neo" placeholder="Last" />
              </div>
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Work Email</label>
              <input type="email" className="input-neo" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Company Name</label>
              <input type="text" className="input-neo" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Company Size</label>
              <div className="relative">
                <select className="select-neo">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">What do you want to achieve?</label>
              <textarea className="input-neo min-h-[100px] resize-none" placeholder="We want to improve our all-hands meetings..."></textarea>
            </div>
            <button type="button" className="w-full bg-brand-dark text-white border-2 border-brand-dark rounded-full py-5 mt-4 font-display font-bold text-xl shadow-playful hover:shadow-playful-lg hover:-translate-y-0.5 transition-all mt-8">
              Request Demo
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
