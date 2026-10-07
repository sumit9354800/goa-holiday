import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

export default function FinalCTA() {
  return (
    <section className="bg-[#F5F3ED] px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#304936] px-6 py-16 text-center text-white sm:px-10 sm:py-20 lg:px-16 lg:py-28">
          {/* Decorative background */}
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#DFE5D8]/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#C8A96B]/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#E7D4A5]">
              <Sparkles size={24} strokeWidth={1.7} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Your Goa Story Awaits
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready for your
              <span className="block italic text-[#E7D4A5]">
                Goa escape?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Tell us your travel dates and requirements. Our team will help
              you with the complete quote and any customized arrangements you
              need.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#304936] transition-all hover:bg-[#E7D4A5] sm:w-auto"
              >
                <MessageCircle size={18} />
                Get Your Full Quote
                <ArrowUpRight size={16} />
              </a>

              <a
                href="tel:+917780819304"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
              >
                Call +91 77808 19304
              </a>
            </div>

            <p className="mt-7 text-xs text-white/40">
              Standard from $749 · Premium from $1,111
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}