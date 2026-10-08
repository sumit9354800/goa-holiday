import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Sparkles,
  Utensils,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const addOns = [
  [
    Heart,
    "Romantic Experiences",
    "Private surprises, intimate dining and celebration arrangements.",
  ],
  [
    Sparkles,
    "Premium Activities",
    "Add extra experiences to make the trip more personal.",
  ],
  [
    Utensils,
    "Special Arrangements",
    "Tell us what you need and we can create a customized quote.",
  ],
] as const;

export default function Upgrades() {
  return (
    <section className="bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            OPTIONAL UPGRADE
        ====================================================== */}

        <div className="grid overflow-hidden rounded-[2.5rem] border border-[#EADFC9] bg-white lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
              Optional Upgrade
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#20231D] sm:text-4xl lg:text-5xl">
              Add lunch & dinner to your stay.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#73736B]">
              Lunch and dinner can also be included with your hotel stay at an
              exclusive package price. Ask us for the upgrade when requesting
              your quote.
            </p>

            {/* Champagne CTA — NOT WhatsApp Green */}
            <a
              href={whatsappUrl}
              data-track="goa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex min-h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#A9844D] bg-[#C9A66B] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#20231D] shadow-[0_5px_12px_rgba(169,132,77,0.16)] transition-all duration-200 hover:bg-[#A9844D] sm:w-fit sm:px-6 sm:text-[12px] sm:tracking-[0.15em]"
            >
              <MessageCircle size={18} strokeWidth={1.8} />

              <span>Ask for Upgrade Price</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] overflow-hidden bg-[#20231D] sm:min-h-[320px] lg:min-h-full">
            <img
              src="/images/hero-goa.webp"
              alt="Goa tropical evening"
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />

            <div className="absolute inset-0 bg-[#20231D]/45" />

            <div className="absolute inset-4 rounded-[1.75rem] border border-white/15 sm:inset-7">
              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Dining
                </p>

                <p className="mt-2 max-w-[220px] text-xl font-semibold text-white sm:max-w-xs sm:text-3xl">
                  More moments.
                  <span className="block italic text-[#E8D6B2]">
                    More memories.
                  </span>
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="rounded-[18px] border-2 border-[#A9844D] bg-[#C9A66B] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[#20231D] sm:text-[10px] sm:tracking-[0.12em]">
                  Lunch + Dinner
                </span>

                <span className="text-[11px] text-white/65 sm:text-xs">
                  Upgrade available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            EXCLUSIVE ADD-ONS
        ====================================================== */}

        <div className="mt-16 sm:mt-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
            Exclusive Add-ons
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#20231D] sm:text-4xl lg:text-5xl">
            Make your Goa experience uniquely yours.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#73736B]">
            If you require additional experiences, premium activities or
            special arrangements, we can offer exclusive customized prices.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
            {addOns.map(([Icon, title, description]) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-[#EADFC9] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#C9A66B] hover:shadow-[0_15px_40px_rgba(32,35,29,0.07)] sm:p-6"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EADFC9] text-[#80653C]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-[#20231D] sm:mt-6">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#73736B]">
                  {description}
                </p>

                {/* Champagne Secondary Button */}
                <a
                  href={whatsappUrl}
                  data-track="goa-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex min-h-[45px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#C9A66B] bg-[#F8F1E4] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6F5935] transition-all duration-200 hover:bg-[#EADFC9] sm:w-fit sm:tracking-[0.12em]"
                >
                  <MessageCircle size={16} strokeWidth={1.8} />

                  <span>Ask for Details</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}