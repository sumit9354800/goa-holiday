import {
  Check,
  Crown,
  Hotel,
  MessageCircle,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const standardFeatures = [
  "5 nights accommodation",
  "3-star hotel stay",
  "Daily breakfast",
  "Private airport pickup & drop",
  "Private sightseeing taxi",
  "North & South Goa sightseeing",
  "Dudhsagar Waterfall excursion",
];

const premiumFeatures = [
  "5 nights accommodation",
  "4-star hotel with private swimming pool",
  "Daily breakfast",
  "Private airport pickup & drop",
  "Private sightseeing taxi",
  "North & South Goa + Birla Temple",
  "Water sports adventure",
  "Sunset cruise with dinner",
  "Private candlelight dinner",
  "Cultural dance + local market",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F7F4EC] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col gap-6 border-b border-[#EADFC9] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* Slightly bigger than before */}
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#A9844D]">
              Choose Your Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#20231D] sm:text-5xl">
              Two ways to experience Goa.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#73736B]">
            Both packages are thoughtfully planned. Choose a comfortable
            3-star escape or step up to the most complete premium experience.
          </p>
        </div>

        {/* =====================================================
            PRICING CARDS
        ====================================================== */}

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-2">
          {/* ===================================================
              STANDARD
          ==================================================== */}

          <article className="rounded-[2rem] border border-[#EADFC9] bg-white p-7 shadow-[0_12px_40px_rgba(169,132,77,0.05)] sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#8B806D]">
                  Standard
                </p>

                <h3 className="mt-2 text-3xl font-semibold text-[#20231D]">
                  Goa Escape
                </h3>

                <p className="mt-2 text-sm text-[#73736B]">
                  Comfortable essentials for a relaxed holiday.
                </p>
              </div>

              {/* Hotel Icon */}

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1E4] text-[#A9844D]">
                <Hotel size={21} />
              </div>
            </div>

            {/* =================================================
                PRICE
            ================================================== */}

            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight text-[#20231D]">
                $749
              </span>

              <span className="mb-2 text-sm text-[#73736B]">
                / person
              </span>
            </div>

            {/* Hotel Type */}

            <div className="mt-2 inline-flex rounded-full border border-[#EADFC9] bg-[#F8F1E4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F5935]">
              3-Star Hotel
            </div>

            <div className="my-7 h-px bg-[#EADFC9]" />

            {/* =================================================
                FEATURES
            ================================================== */}

            <ul className="space-y-3.5">
              {standardFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#5F5F58]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8F1E4] text-[#A9844D]">
                    <Check size={12} />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>

            {/* =================================================
                STANDARD CTA
                Champagne — same CTA hierarchy
            ================================================== */}

            <a
              href={whatsappUrl}
              data-track="goa-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#DDD7C9] bg-white px-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#20231D] hover:border-[#C9A66B] hover:bg-[#F8F1E4] hover:text-[#6F5935] shadow-[0_5px_12px_rgba(169,132,77,0.16)] transition-all duration-200 hover:bg-[#A9844D]"
            >
              <MessageCircle
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-105"
              />

              <span>Ask About Standard</span>
            </a>
          </article>

          {/* ===================================================
              PREMIUM
          ==================================================== */}

          <article className="relative overflow-hidden rounded-[2rem] border border-[#A9844D] bg-[#20231D] p-7 text-white shadow-[0_25px_70px_rgba(32,35,29,0.18)] sm:p-9">
            {/* Background Glow */}

            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#C9A66B]/15 blur-3xl" />

            {/* =================================================
                MOST POPULAR
            ================================================== */}

            <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-[18px] border-2 border-[#A9844D] bg-[#C9A66B] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#20231D]">
              <Crown size={12} />

              Most Popular
            </div>

            <div className="relative">
              <div className="pr-32">
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Premium
                </p>

                <h3 className="mt-2 text-3xl font-semibold">
                  Tropical Paradise
                </h3>

                <p className="mt-2 text-sm text-white/55">
                  The complete Goa experience with elevated stays and
                  signature moments.
                </p>
              </div>

              {/* =================================================
                  PREMIUM PRICE
              ================================================== */}

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">
                  $1,111
                </span>

                <span className="mb-2 text-sm text-white/45">
                  / person
                </span>
              </div>

              {/* Hotel Type */}

              <div className="mt-2 inline-flex rounded-full border border-[#A9844D] bg-[#EADFC9] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#20231D]">
                4-Star + Private Pool
              </div>

              <div className="my-7 h-px bg-white/10" />

              {/* =================================================
                  PREMIUM FEATURES
              ================================================== */}

              <ul className="grid gap-3 sm:grid-cols-2">
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A66B]/15 text-[#C9A66B]">
                      <Check size={12} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* =================================================
                  PREMIUM CTA
                  Champagne — NOT WhatsApp Green
              ================================================== */}

              <a
                href={whatsappUrl}
                data-track="goa-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex h-[51px] w-full items-center justify-center gap-2 rounded-[18px] border-2 border-[#A9844D] bg-[#C9A66B] px-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[#20231D] shadow-[0_5px_12px_rgba(169,132,77,0.20)] transition-all duration-200 hover:bg-[#A9844D]"
              >
                <MessageCircle
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:scale-105"
                />

                <span>Get Premium Quote</span>
              </a>
            </div>
          </article>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mt-6 text-center text-xs text-[#8A897F]">
          Final pricing may vary by travel dates, availability and customized
          requirements.
        </p>
      </div>
    </section>
  );
}