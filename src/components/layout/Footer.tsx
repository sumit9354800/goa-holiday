import Image from "next/image";
import { Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "FAQ", href: "#faq" },
  {
    label: "Privacy Policy",
    href: "https://indiatravelsafari.com/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "https://indiatravelsafari.com/terms-and-conditions",
  },
  {
    label: "Cancellation/Refund Policy",
    href: "https://indiatravelsafari.com/cancellation-refund-policy",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F4EC] px-4 pb-6 pt-14 text-[#6F5935] sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-10 border-b border-[#EADFC9] pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          {/* ===================================================
              BRAND
          ==================================================== */}

          <div>
            <a
              href="#home"
              className="inline-flex max-w-full items-center gap-3"
            >
              {/* Logo */}
              <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                <Image
                  src="/images/logo.png"
                  alt="India Travel Safari"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Brand */}
              <div className="min-w-0">
                <p className="text-[17px] font-bold uppercase tracking-[-0.02em] text-[#4F4028] min-[390px]:text-[19px] sm:text-[20px]">
                  India Travel Safari
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A9844D] sm:text-[10px] sm:tracking-[0.18em]">
                  Tour & Guide
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#73736B]">
              Thoughtfully planned travel experiences across India, designed to
              make every journey comfortable, memorable and effortless.
            </p>

            {/* Champagne CTA — NOT WhatsApp Green */}
            <a
              href={whatsappUrl}
              data-track="goa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex min-h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#A9844D] bg-[#C9A66B] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#20231D] shadow-[0_5px_12px_rgba(201,166,107,0.14)] transition-all duration-200 hover:bg-[#A9844D] min-[390px]:text-[12px] min-[390px]:tracking-[0.15em] sm:w-fit sm:px-6"
            >
              <MessageCircle size={18} strokeWidth={1.8} className="shrink-0" />

              <span>Get Free Quote</span>
            </a>
          </div>

          {/* ===================================================
              EXPLORE
          ==================================================== */}

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex w-fit max-w-full items-center gap-2 text-sm text-[#6F5935] transition-colors duration-200 hover:text-[#A9844D]"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="shrink-0"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* ===================================================
              PLAN YOUR HOLIDAY
          ==================================================== */}

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
              Plan Your Holiday
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#73736B]">
              Speak directly with our travel team for a personalised route and
              clear quote.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
              {/* Phone */}
              <a
                href="tel:+917780819304"
                className="flex items-center gap-3 text-sm text-[#6F5935] transition-colors hover:text-[#A9844D]"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#A9844D]"
                />

                <span>+91 77808 19304</span>
              </a>

              {/* Email */}
              <a
                href="mailto:Indiatravelsafari@outlook.com"
                className="flex items-start gap-3 text-sm text-[#6F5935] transition-colors hover:text-[#A9844D]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#A9844D]"
                />

                <span className="break-all">Indiatravelsafari@outlook.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-[#6F5935]">
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#A9844D]"
                />

                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-[11px] text-[#8A806F] sm:text-xs">
            © {new Date().getFullYear()} India Travel Safari. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@indiatravelsafari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10"
            >
              <FaYoutube size={17} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/india_travel_safari?stkn=emlucGx0cmh2dmFx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)] text-white transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10"
            >
              <FaInstagram size={17} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Indiatravelsafari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10"
            >
              <FaFacebookF size={16} />
            </a>

            {/* WhatsApp — ACTUAL WHATSAPP ACTION */}
            <a
              href={whatsappUrl}
              data-track="goa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
