"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const filters = [
  { href: "/resources", label: "All resources" },
  { href: "/templates", label: "Templates" },
  { href: "/guides", label: "Guides" },
  { href: "/community", label: "Community" },
  { href: "/product-updates", label: "Product Updates" },
];

export default function ResourceFilters() {
  const pathname = usePathname();

  return (
    <section className="py-10 border-b-2 border-black/10 bg-white sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 flex items-center space-x-4 overflow-x-auto">
        {filters.map(f => (
          <Link
            key={f.href}
            href={f.href}
            className={`px-6 py-2 font-bold rounded-full border-2 border-brand-dark whitespace-nowrap ${
              pathname === f.href
                ? "bg-brand-dark text-white"
                : "bg-white text-brand-dark shadow-sm hover:bg-gray-50"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
