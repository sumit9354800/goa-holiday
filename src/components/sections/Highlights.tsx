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
  [
    Building2,
    "3-Star / 4-Star Stay",
    "Choose the accommodation level that fits your package.",
  ],
  [
    Car,
    "Private Transfers",
    "Airport pickup, drop and private sightseeing taxi.",
  ],
  [
    Compass,
    "North & South Goa",
    "Beaches, churches, viewpoints and coastal gems.",
  ],
  [
    Waves,
    "Water Adventures",
    "Scuba diving, jet ski, speed boat and more.",
  ],
  [
    Ship,
    "Sunset Cruise",
    "Dinner on the water with a beautiful Goa evening.",
  ],
  [
    Utensils,
    "Private Dining",
    "A romantic candlelight dinner in a memorable setting.",
  ],
  [
    Sparkles,
    "Cultural Evening",
    "Goan traditions through an aesthetic cultural performance.",
  ],
  [
    Coffee,
    "Daily Breakfast",
    "Start every day with breakfast included.",
  ],
] as const;

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
              The Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#20231D] sm:text-4xl lg:text-5xl">
              More than a trip. A collection of Goa moments.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#73736B] sm:mt-6">
              We combine the practical details with the experiences people
              remember: beaches, adventure, dining, sunsets and effortless
              private transfers.
            </p>

            <div className="mt-7 h-px w-20 bg-[#C9A66B] sm:mt-8" />
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(([Icon, title, description]) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-[#DDD7C9] bg-[#F7F4EC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A66B] hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,29,0.08)] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EADFC9] text-[#80653C] transition-colors duration-300 group-hover:bg-[#C9A66B] group-hover:text-[#20231D]">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#20231D] sm:mt-6 sm:text-lg">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#73736B]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}