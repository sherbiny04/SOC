import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 font-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 font-display font-bold text-2xl tracking-tight mb-6">
            <span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark text-[9px] font-bold">MT</span>
            <span>Media Talk</span>
          </div>
          <p className="text-gray-400 max-w-xs mb-6">Bringing joy, structure, and engagement back to virtual meetings and workshops.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-display">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/product" className="hover:text-brand-yellow transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-brand-yellow transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-brand-yellow transition-colors">Integrations</Link></li>
            <li><Link href="/templates" className="hover:text-brand-yellow transition-colors">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-display">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-brand-mint transition-colors">Blog</Link></li>
            <li><Link href="/community" className="hover:text-brand-mint transition-colors">Community</Link></li>
            <li><Link href="#" className="hover:text-brand-mint transition-colors">Help Center</Link></li>
            <li><Link href="/guides" className="hover:text-brand-mint transition-colors">Guides</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-display">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-brand-pink transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-brand-pink transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-brand-pink transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-brand-pink transition-colors">Legal</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; 2026 Media Talk. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></Link>
          <Link href="#" className="hover:text-white"><Youtube className="w-5 h-5" /></Link>
        </div>
      </div>
    </footer>
  );
}
