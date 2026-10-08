"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between rounded-[28px] border border-[#EADFC9] bg-white/95 px-5 shadow-[0_8px_30px_rgba(169,132,77,0.08)] backdrop-blur-xl sm:px-7 lg:px-8">
          {/* LOGO + BRAND NAME */}
          <Link
            href="#home"
            className="flex shrink-0 items-center gap-3"
            aria-label="India Travel Safari"
          >
            <Image
              src="/images/logo.png"
              alt="India Travel Safari Logo"
              width={64}
              height={64}
              priority
              className="h-[52px] w-[52px] object-contain sm:h-[56px] sm:w-[56px]"
            />

            <span className="whitespace-nowrap text-[15px] font-bold tracking-[-0.02em] text-[#6F5935] sm:text-[21px]">
              INDIA TRAVEL SAFARI
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#73736B] transition-colors duration-200 hover:text-[#A9844D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* CALL */}
            <a
              href="tel:+917780819304"
              className="flex h-[51px] items-center gap-2 rounded-[18px] border-2 border-[#C9A66B] bg-[#F8F1E4] px-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#6F5935] transition-all duration-200 hover:bg-[#EADFC9]"
            >
              <Phone className="h-[17px] w-[17px]" strokeWidth={1.8} />

              <span>Call</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              data-track="goa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[51px] items-center gap-2 rounded-[18px] border-2 border-[#128C7E] bg-[#25D366] px-6 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_5px_14px_rgba(37,211,102,0.22)] transition-all duration-200 hover:bg-[#128C7E]"
            >
              <MessageCircle
                className="h-[18px] w-[18px]"
                strokeWidth={1.8}
              />

              <span>WhatsApp</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EADFC9] bg-[#F8F1E4] text-[#6F5935] transition-colors duration-200 hover:bg-[#EADFC9] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="mx-auto mt-3 max-w-[1440px] rounded-[26px] border border-[#EADFC9] bg-white p-5 shadow-[0_15px_40px_rgba(169,132,77,0.10)] lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[#EADFC9] py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#73736B] transition-colors duration-200 hover:text-[#A9844D] last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* CALL */}
              <a
                href="tel:+917780819304"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#C9A66B] bg-[#F8F1E4] text-xs font-bold uppercase tracking-wider text-[#6F5935] transition-all duration-200 hover:bg-[#EADFC9]"
              >
                <Phone className="h-4 w-4" />

                <span>Call</span>
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                data-track="goa-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#128C7E] bg-[#25D366] text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(37,211,102,0.18)] transition-all duration-200 hover:bg-[#128C7E]"
              >
                <MessageCircle className="h-4 w-4" />

                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* NAVBAR SPACE */}
      <div className="h-[105px]" />
    </>
  );
}