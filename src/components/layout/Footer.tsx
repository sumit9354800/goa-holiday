import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Itinerary",
    href: "#itinerary",
  },
  {
    label: "Inclusions",
    href: "#inclusions",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#24372A] px-4 pb-6 pt-16 text-white sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              {/* Logo */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/logo.png"
                  alt="India Travel Safari"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Brand Name */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em]">
                  India Travel Safari
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
                  Tour & Guide
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Thoughtfully planned travel experiences across India, designed to
              make every journey comfortable, memorable and effortless.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#304936] transition-all hover:bg-[#E7D4A5]"
            >
              <FaWhatsapp size={17} />
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              {/* Phone */}
              <a
                href="tel:+917780819304"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />

                <span>+91 77808 19304</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <FaWhatsapp size={17} className="mt-0.5 shrink-0" />

                <span>WhatsApp</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@indiatravelsafari.com"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />

                <span className="break-all">info@indiatravelsafari.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-sm text-white/65">
                <MapPin size={17} className="mt-0.5 shrink-0" />

                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} India Travel Safari. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Indiatravelsafari/"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white hover:text-[#24372A]"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/india_travel_safari?stkn=emlucGx0cmh2dmFx&utm_source=qr"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white hover:text-[#24372A]"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.youtube.com/@indiatravelsafari"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white hover:text-[#24372A]"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white hover:text-[#24372A]"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
