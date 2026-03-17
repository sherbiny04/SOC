"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/product", label: "Product" },
    { href: "/use-cases", label: "Use cases" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ];

  const isActive = (href: string) => {
    if (href === "/resources") {
      return ["/resources", "/templates", "/guides", "/community", "/product-updates"].some(p => pathname === p);
    }
    return pathname === href;
  };

  return (
    <>
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link href="/" className="flex items-center space-x-2 font-display font-bold text-2xl tracking-tight">
          <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow text-[9px] font-bold">MT</span>
          <span>Media Talk</span>
        </Link>
        <div className="hidden md:flex space-x-8 font-semibold text-brand-dark/80 bg-white/50 backdrop-blur px-8 py-3 rounded-full border-2 border-brand-dark shadow-playful">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-black hover:-translate-y-0.5 transition-transform ${isActive(link.href) ? "text-black font-bold border-b-2 border-brand-dark" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 items-center font-bold">
          <Link href="/login" className="hidden md:inline-block hover:underline px-4 py-2 hover:bg-black/5 rounded-full transition-colors">Log in</Link>
          <Link href="/signup" className="hidden md:inline-block px-5 py-2.5 rounded-full border-2 border-brand-dark bg-white shadow-playful hover:translate-y-0.5 hover:shadow-playful-sm transition-all">Sign up</Link>
          <button onClick={() => setMobileOpen(true)} className="md:hidden block p-2 text-brand-dark hover:bg-black/5 rounded-full focus:outline-none z-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-yellow z-[100] flex flex-col items-center justify-center space-y-8 text-4xl font-display font-bold transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-y-0" : "translate-y-full"}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 p-2 text-brand-dark hover:bg-black/5 rounded-full focus:outline-none">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-black hover:underline">{link.label}</Link>
        ))}
        <div className="flex flex-col space-y-6 items-center mt-12 text-2xl font-sans font-bold">
          <Link href="/login" onClick={() => setMobileOpen(false)} className="hover:underline">Log in</Link>
          <Link href="/signup" onClick={() => setMobileOpen(false)} className="px-8 py-4 rounded-full border-2 border-brand-dark bg-white shadow-playful">Sign up for free</Link>
        </div>
      </div>
    </>
  );
}
