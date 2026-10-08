import {
  MessageCircle,
  Phone,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

export default function FinalCTA() {
  return (
    <section className="bg-[#F7F4EC] px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#20231D] px-5 py-14 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Background Image */}
          <img
            src="/images/hero-goa.webp"
            alt="Goa sunset"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#20231D]/20" />

          {/* Champagne Ambient Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A66B]/15 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl text-center">
            {/* LOGO */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center sm:h-[72px] sm:w-[72px]">
  <img
    src="/images/logo.png"
    alt="India Travel Safari"
    className="h-full w-full object-contain"
  />
</div>

            {/* Eyebrow */}
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#E8D6B2] sm:text-sm sm:tracking-[0.25em]">
              Your Goa Story Awaits
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Ready for your
              <span className="block italic text-[#E8D6B2]">
                Goa escape?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base">
              Send us your travel dates and requirements. We will help you
              with the complete quote and customized arrangements.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
              {/* WhatsApp — GREEN ONLY BECAUSE IT IS EXPLICITLY WHATSAPP */}
              <a
                href={whatsappUrl}
                data-track="goa-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#128C7E] bg-[#25D366] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_5px_12px_rgba(37,211,102,0.18)] transition-all duration-200 hover:bg-[#128C7E] min-[390px]:text-[12px] min-[390px]:tracking-[0.15em] sm:w-auto sm:px-6"
              >
                <MessageCircle
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span>Chat on WhatsApp</span>
              </a>

              {/* Call — SUBTLE CHAMPAGNE */}
              <a
                href="tel:+917780819304"
                className="flex min-h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#C9A66B] bg-[#F8F1E4] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6F5935] shadow-[0_4px_12px_rgba(201,166,107,0.08)] transition-all duration-200 hover:bg-[#EADFC9] min-[390px]:text-[12px] min-[390px]:tracking-[0.15em] sm:w-auto sm:px-6"
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span>Call +91 77808 19304</span>
              </a>
            </div>

            {/* Pricing */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] text-white/55 min-[390px]:text-xs">
              <span>$749 · 3-Star Standard</span>

              <span>•</span>

              <span>$1,111 · Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}