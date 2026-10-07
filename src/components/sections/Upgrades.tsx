import {
  ArrowUpRight,
  Check,
  ChefHat,
  Gift,
  Heart,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const upgradeFeatures = [
  "Lunch included during your stay",
  "Dinner included during your stay",
  "Convenient dining throughout the trip",
  "Exclusive package pricing",
];

const addOns = [
  {
    icon: Heart,
    title: "Romantic Experiences",
    description:
      "Create memorable moments with customized romantic experiences and special arrangements.",
  },
  {
    icon: Sparkles,
    title: "Premium Activities",
    description:
      "Add exclusive activities and experiences tailored around your travel preferences.",
  },
  {
    icon: Gift,
    title: "Special Arrangements",
    description:
      "Celebrate birthdays, anniversaries or special occasions with customized arrangements.",
  },
];

export default function Upgrades() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        {/* Optional Upgrade */}
        <div className="overflow-hidden rounded-[2rem] bg-[#304936] text-white">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E7D4A5]">
                <ChefHat size={22} strokeWidth={1.8} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Optional Upgrade
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Make your stay even more complete.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Want a more convenient dining experience? Lunch and dinner
                can also be included with your hotel stay at an exclusive
                package price.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {upgradeFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E7D4A5]">
                      <Check size={11} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm leading-5 text-white/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#304936] transition-all hover:bg-[#E7D4A5]"
              >
                Ask for Upgrade Price
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="relative min-h-[280px] overflow-hidden bg-[#24372A] lg:min-h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(231,212,165,0.22),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(223,229,216,0.14),transparent_35%)]" />

              <div className="absolute inset-8 rounded-[1.5rem] border border-white/10">
                <div className="absolute left-6 top-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Dining
                  </p>

                  <p className="mt-2 max-w-xs text-2xl font-semibold text-white sm:text-3xl">
                    More moments.
                    <span className="block italic text-[#E7D4A5]">
                      More memories.
                    </span>
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/60">
                    Lunch + Dinner
                  </span>

                  <span className="text-xs text-white/40">
                    Upgrade available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Add-ons */}
        <div className="mt-20 sm:mt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
              Exclusive Add-ons
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#24372A] sm:text-4xl lg:text-5xl">
              Make your Goa experience uniquely yours.
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#6F776F] sm:text-base sm:leading-7">
              Need something extra? We can arrange premium activities,
              special experiences and customized services according to your
              requirements.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {addOns.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-[#D9DDD5] bg-[#F5F3ED] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#304936] transition-colors group-hover:bg-[#304936] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#24372A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6F776F]">
                    {item.description}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#304936] transition-colors hover:text-[#24372A]"
                  >
                    Ask for details
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}