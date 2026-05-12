"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Sparkles, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ text: "Account created successfully! Redirecting to dashboard...", type: "success" });
        setTimeout(() => { window.location.href = "/dashboard"; }, 1500);
      } else {
        setMessage({ text: data.message || "Registration failed.", type: "error" });
      }
    } catch {
      setMessage({ text: "Could not connect to the server. Is your backend running?", type: "error" });
    }
  };

  return (
    <div className="bg-brand-mint text-brand-dark min-h-screen flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-4 h-4 bg-brand-pink rounded-full"></div>
        <div className="absolute top-[15%] right-[15%] w-6 h-6 bg-brand-yellow rounded border border-brand-dark rotate-45"></div>
        <div className="absolute bottom-[20%] left-[20%] w-8 h-8 bg-brand-lavender rounded-lg border-2 border-brand-dark"></div>
        <div className="absolute bottom-[10%] right-[10%] w-5 h-5 bg-brand-peach rounded-full border border-brand-dark"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-40 blur-3xl rounded-full"></div>
      </div>

      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="flex items-center space-x-2 font-display font-bold text-2xl tracking-tight">
          <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow text-[9px] font-bold">MT</span>
          <span>Media Talk</span>
        </Link>
        <Link href="/login" className="hidden md:block font-bold hover:text-black">Log in</Link>
      </nav>

      <div className="w-full max-w-xl bg-white border-2 border-brand-dark rounded-[2.5rem] p-8 lg:p-12 shadow-playful-xl relative z-10 my-16">
        <div className="flex justify-center mb-6">
          <div className="bg-brand-pink p-4 rounded-3xl border-2 border-brand-dark shadow-playful rotate-neg-2">
            <Sparkles className="w-8 h-8 text-brand-dark" />
          </div>
        </div>
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-center tracking-tight">Join the club 🚀</h1>
        <p className="text-brand-dark/70 text-center mb-10 font-medium text-lg max-w-sm mx-auto">Join 150,000+ facilitators running sessions people actually enjoy.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="input-neo" placeholder="Alex" required />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" value={lastName} onChange={e => setLastName(e.target.value)} className="input-neo" placeholder="Morgan" required />
            </div>
          </div>
          <div>
            <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="email">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/50" />
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="input-neo !pl-12" placeholder="alex@company.com" required />
            </div>
          </div>
          <div>
            <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/50" />
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="input-neo !pl-12" placeholder="Min. 8 characters" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-brand-pink border-2 border-brand-dark rounded-xl py-4 mt-8 font-display font-bold text-xl shadow-playful hover:translate-y-0.5 hover:shadow-playful-sm transition-all flex items-center justify-center space-x-2">
            <span>Create account</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button type="button" className="w-full bg-white border-2 border-brand-dark rounded-xl py-4 font-bold text-md shadow-playful hover:translate-y-0.5 hover:shadow-playful-sm transition-all flex items-center justify-center space-x-3 mt-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span>Continue with Google</span>
          </button>
        </form>

        {message && (
          <div className={`mt-4 text-center font-bold text-sm ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>{message.text}</div>
        )}

        <div className="mt-8 text-center text-sm font-medium text-brand-dark/80 bg-gray-50 -mx-8 lg:-mx-12 -mb-8 lg:-mb-12 p-6 rounded-b-[2.5rem] border-t-2 border-brand-dark/10">
          By signing up, you agree to our <Link href="#" className="underline font-bold hover:text-brand-dark">Terms</Link> and <Link href="#" className="underline font-bold hover:text-brand-dark">Privacy Policy</Link>.
          <div className="mt-2 md:hidden block">
            <p>Already have an account? <Link href="/login" className="font-bold underline text-brand-dark">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
