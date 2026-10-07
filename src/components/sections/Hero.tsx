import { ArrowRight, Check, Star } from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F5F3ED] px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#304936]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#304936]">
            <Star size={13} fill="currentColor" />
            Premium Goa Experience
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
            5 Nights / 6 Days
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#24372A] sm:text-6xl lg:text-7xl">
            Discover
            <span className="block italic text-[#304936]">Goa</span>
            Like Never Before.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6F776F] sm:text-lg">
            A premium 6-day Goa escape featuring luxury accommodation, private
            transfers, iconic sightseeing, adventure, sunset cruises and
            unforgettable experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#304936] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#24372A] hover:shadow-lg"
            >
              Get Your Full Quote
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#itinerary"
              className="inline-flex items-center justify-center rounded-full border border-[#304936]/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#304936] transition-colors hover:bg-white"
            >
              Explore Itinerary
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {["4-Star Hotel", "Private Transfers", "Breakfast Included"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#59635b]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DFE5D8] text-[#304936]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl sm:min-h-[600px]">
            {/* Goa Image */}
            <img
              src="/images/hero-goa.webp"
              alt="Beautiful Goa tropical beach"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark / Green Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24372A]/95 via-[#24372A]/35 to-black/10" />

            {/* Soft premium overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_30%)]" />

            {/* Bottom Information Card */}
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/15 bg-black/25 p-5 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Tropical Paradise
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Your Goa Story Starts Here.
              </h2>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    From
                  </p>

                  <p className="mt-1 text-2xl font-semibold text-white">$749</p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    Premium
                  </p>

                  <p className="mt-1 text-2xl font-semibold text-[#E7D4A5]">
                    $1,111
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -left-3 top-8 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl sm:-left-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6F776F]">
              Package
            </p>

            <p className="mt-1 text-sm font-bold text-[#304936]">
              6 Days · 5 Nights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
