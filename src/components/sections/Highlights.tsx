import {
  Building2,
  Car,
  Coffee,
  Compass,
  Ship,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "4-Star Stay",
    description:
      "Comfortable accommodation designed for a relaxed Goa escape.",
  },
  {
    icon: Car,
    title: "Private Transfers",
    description:
      "Private airport pickup, drop-off and sightseeing transportation.",
  },
  {
    icon: Compass,
    title: "North & South Goa",
    description:
      "Explore Goa's iconic beaches, landmarks and coastal locations.",
  },
  {
    icon: Waves,
    title: "Water Adventures",
    description:
      "Scuba diving, jet ski, speed boat and more.",
  },
  {
    icon: Ship,
    title: "Sunset Cruise",
    description:
      "Enjoy a beautiful Goa sunset cruise with dinner.",
  },
  {
    icon: Utensils,
    title: "Private Dining",
    description:
      "A romantic private candlelight dinner experience.",
  },
  {
    icon: Sparkles,
    title: "Cultural Evening",
    description:
      "Experience a vibrant cultural dance performance.",
  },
  {
    icon: Coffee,
    title: "Daily Breakfast",
    description:
      "Start every morning with breakfast included at your hotel.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="overflow-hidden bg-[#F5F3ED] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div className="w-full lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
              The Experience
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#24372A] sm:text-4xl lg:text-5xl">
              Everything you need for an unforgettable Goa escape.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#6F776F] sm:mt-6 sm:text-base sm:leading-7">
              From comfortable accommodation to adventure, dining and
              sightseeing, every part of your journey is designed to make
              your Goa holiday effortless and memorable.
            </p>
          </div>

          {/* Cards */}
          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex min-w-0 w-full flex-col rounded-[1.5rem] border border-[#D9DDD5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#304936]/20 hover:shadow-lg sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFE5D8] text-[#304936] transition-colors duration-300 group-hover:bg-[#304936] group-hover:text-white sm:h-12 sm:w-12">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 break-words text-base font-semibold text-[#24372A] sm:mt-6 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-words text-sm leading-6 text-[#6F776F]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}