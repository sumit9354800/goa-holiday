"use client";

"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "FAQ", href: "#faq" },
];

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md sm:px-7">
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-bold tracking-[0.18em] text-[#24372A] sm:text-base"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/images/logo.png"
                alt="India Travel Safari"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#24372A]">
                India Travel Safari
              </p>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4d574f] transition-colors hover:text-[#304936]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#304936] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#24372A] hover:shadow-md"
          >
            Get Your Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#304936] text-white transition-colors hover:bg-[#24372A] md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-black/5 bg-white p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#4d574f] transition-colors hover:bg-[#DFE5D8] hover:text-[#304936]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl bg-[#304936] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#24372A]"
            >
              Get Your Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
