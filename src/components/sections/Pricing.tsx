import { Check, Crown, Sparkles } from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const standardFeatures = [
  "5 nights accommodation",
  "4-star hotel stay",
  "Daily breakfast",
  "Private airport transfers",
  "Private sightseeing taxi",
  "North & South Goa sightseeing",
  "Dudhsagar Waterfall excursion",
];

const premiumFeatures = [
  "Everything in Standard",
  "Private swimming pool",
  "Water sports adventure",
  "Sunset cruise with dinner",
  "Private candlelight dinner",
  "Cultural dance experience",
  "Local market shopping visit",
  "Dedicated trip assistance",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
            Choose Your Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#24372A] sm:text-5xl">
            Goa, your way.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6F776F]">
            Choose the package that fits your travel style. Upgrade to our
            premium experience for an even more memorable Goa escape.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Standard */}
          <div className="rounded-[2rem] border border-[#D9DDD5] bg-[#F5F3ED] p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F776F]">
                  Standard
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#24372A]">
                  Goa Escape
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#304936]">
                <Sparkles size={19} />
              </div>
            </div>

            <div className="mt-7 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight text-[#24372A]">
                $749
              </span>

              <span className="mb-2 text-sm text-[#6F776F]">
                / person
              </span>
            </div>

            <div className="my-7 h-px bg-[#D9DDD5]" />

            <ul className="space-y-4">
              {standardFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#59635B]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFE5D8] text-[#304936]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-full border border-[#304936]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#304936] transition-all hover:border-[#304936] hover:bg-[#304936] hover:text-white"
            >
              Ask About Standard
            </a>
          </div>

          {/* Premium */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#304936] p-7 text-white shadow-xl sm:p-9">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C8A96B]/15 blur-2xl" />

            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-[#E7D4A5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#24372A]">
              <Crown size={12} />
              Most Popular
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-4 pr-28">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Premium
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Tropical Paradise
                  </h3>
                </div>
              </div>

              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">
                  $1,111
                </span>

                <span className="mb-2 text-sm text-white/60">
                  / person
                </span>
              </div>

              <div className="my-7 h-px bg-white/15" />

              <ul className="space-y-4">
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#E7D4A5]">
                      <Check size={12} strokeWidth={2.5} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#304936] transition-all hover:bg-[#E7D4A5]"
              >
                Get Premium Quote
              </a>
            </div>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-[#6F776F]">
          * Final pricing may vary depending on travel dates, hotel
          availability and customized requirements.
        </p>
      </div>
    </section>
  );
}