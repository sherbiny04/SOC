"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Video, Mic } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ text: "Login successful! Redirecting...", type: "success" });
        localStorage.setItem("token", data.token);
        if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => { window.location.href = "/dashboard"; }, 500);
      } else {
        setMessage({ text: data.message || "Invalid email or password.", type: "error" });
      }
    } catch {
      setMessage({ text: "Could not connect to the server. Is your backend running?", type: "error" });
    }
  };

  return (
    <div className="bg-brand-lavender text-brand-dark min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-center lg:justify-start items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="flex items-center space-x-2 font-display font-bold text-2xl tracking-tight">
          <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow text-[9px] font-bold">MT</span>
          <span>Media Talk</span>
        </Link>
      </nav>

      <div className="hidden lg:block absolute top-[20%] left-[10%] bg-brand-yellow rounded-2xl border-2 border-brand-dark p-4 shadow-playful rotate-neg-4">
        <Video className="w-8 h-8" />
      </div>
      <div className="hidden lg:block absolute bottom-[20%] right-[10%] bg-brand-mint rounded-full border-2 border-brand-dark p-6 shadow-playful rotate-pos-2">
        <Mic className="w-8 h-8" />
      </div>
      <div className="hidden lg:block absolute top-[30%] right-[15%] bg-white rounded-xl border-2 border-brand-dark px-4 py-2 font-bold shadow-playful rotate-pos-4">
        &quot;Just logged in! ✨&quot;
      </div>

      <div className="w-full max-w-md bg-white border-2 border-brand-dark rounded-3xl p-8 lg:p-10 shadow-playful-lg relative z-10">
        <h1 className="font-display text-4xl font-bold mb-3 text-center tracking-tight">Welcome back! 👋</h1>
        <p className="text-brand-dark/70 text-center mb-10 font-medium text-lg">Log in to your account to continue.</p>

        <button type="button" className="w-full bg-white border-2 border-brand-dark rounded-xl py-3 px-4 font-bold text-md shadow-playful hover:translate-y-0.5 hover:shadow-playful-sm transition-all flex items-center justify-center space-x-3 mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          <span>Log in with Google</span>
        </button>

        <div className="relative flex items-center py-2 mb-6">
          <div className="flex-grow border-t-2 border-brand-dark/10"></div>
          <span className="flex-shrink-0 mx-4 text-brand-dark/50 font-bold text-sm">OR</span>
          <div className="flex-grow border-t-2 border-brand-dark/10"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="email">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/50" />
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="input-neo !pl-12" placeholder="name@company.com" required />
            </div>
          </div>
          <div>
            <label className="block font-bold mb-2 text-sm uppercase tracking-wide text-brand-dark/80" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/50" />
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="input-neo !pl-12" placeholder="••••••••" required />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold pt-2">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 border-2 border-brand-dark rounded text-brand-dark focus:ring-brand-mint/50 cursor-pointer" />
              <span className="group-hover:text-brand-dark transition-colors text-brand-dark/70">Remember me</span>
            </label>
            <Link href="#" className="text-brand-dark hover:text-brand-mint font-bold transition-colors underline decoration-2 decoration-brand-dark/20 hover:decoration-brand-mint">Forgot password?</Link>
          </div>
          <button type="submit" className="block w-full bg-brand-yellow border-2 border-brand-dark rounded-xl py-4 px-8 font-display font-bold text-xl shadow-playful hover:translate-y-0.5 hover:shadow-playful-sm transition-all mt-4">Log in</button>
        </form>

        {message && (
          <div className={`mt-4 text-center font-bold text-sm ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>{message.text}</div>
        )}

        <div className="mt-10 text-center font-semibold bg-gray-50 -mx-8 lg:-mx-10 -mb-8 lg:-mb-10 p-6 rounded-b-3xl border-t-2 border-brand-dark/10">
          <p className="text-brand-dark/80">Don&apos;t have an account? <Link href="/signup" className="font-bold text-brand-dark underline decoration-2 decoration-brand-mint hover:bg-brand-mint transition-colors px-1 rounded">Sign up for free</Link></p>
        </div>
      </div>

      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-yellow rounded-full border-2 border-brand-dark opacity-30 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-brand-mint rounded-full border-2 border-brand-dark opacity-30 blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
    </div>
  );
}
