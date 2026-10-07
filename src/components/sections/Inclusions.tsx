import {
  BadgeCheck,
  Car,
  Coffee,
  Hotel,
  Map,
  MapPin,
  PartyPopper,
  Ship,
  Sparkles,
  Ticket,
  Waves,
  X,
} from "lucide-react";

const inclusions = [
  {
    icon: Hotel,
    title: "5 Nights Accommodation",
    description: "4-star hotel stay with private swimming pool.",
  },
  {
    icon: Coffee,
    title: "Daily Breakfast",
    description: "Breakfast included throughout your stay.",
  },
  {
    icon: Car,
    title: "Private Airport Transfers",
    description: "Private pickup and drop-off from Goa Airport.",
  },
  {
    icon: Map,
    title: "Private Sightseeing Taxi",
    description: "Private transportation for sightseeing and transfers.",
  },
  {
    icon: MapPin,
    title: "North & South Goa",
    description: "Explore the best attractions across Goa.",
  },
  {
    icon: Sparkles,
    title: "Birla Temple Visit",
    description: "Visit the temple and enjoy panoramic surroundings.",
  },
  {
    icon: Waves,
    title: "Dudhsagar Excursion",
    description: "Full-day excursion to the spectacular waterfall.",
  },
  {
    icon: PartyPopper,
    title: "Water Sports",
    description: "Enjoy an exciting range of water adventure activities.",
  },
  {
    icon: Ship,
    title: "Sunset Cruise",
    description: "Goa sunset cruise with dinner.",
  },
  {
    icon: Sparkles,
    title: "Candlelight Dinner",
    description: "Private romantic candlelight dinner experience.",
  },
  {
    icon: Ticket,
    title: "Cultural Experience",
    description: "Aesthetic cultural dance performance.",
  },
  {
    icon: BadgeCheck,
    title: "Trip Assistance",
    description: "Assistance throughout your Goa holiday.",
  },
];

const exclusions = [
  "Casino entry fees and expenses",
  "Personal shopping expenses",
  "Personal expenses not mentioned in the itinerary",
  "Any activities or services not specifically included",
];

export default function Inclusions() {
  return (
    <section
      id="inclusions"
      className="bg-[#F5F3ED] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
            Package Details
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#24372A] sm:text-4xl lg:text-5xl">
            Everything is taken care of.
          </h2>

          <p className="mt-5 text-sm leading-6 text-[#6F776F] sm:text-base sm:leading-7">
            From accommodation and transportation to sightseeing and
            experiences, your Goa holiday comes with a carefully selected
            collection of inclusions.
          </p>
        </div>

        {/* Included */}
        <div className="mt-12 rounded-[2rem] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F776F]">
                Included
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#24372A] sm:text-3xl">
                Your package includes
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFE5D8] text-[#304936]">
              <BadgeCheck size={21} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#D9DDD5] bg-[#F5F3ED] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#304936]/20 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#304936] transition-colors group-hover:bg-[#304936] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <h4 className="mt-4 text-sm font-semibold text-[#24372A]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-[#6F776F]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exclusions */}
        <div className="mt-6 rounded-[2rem] border border-[#D9DDD5] bg-[#E8E9E2] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F776F]">
                Exclusions
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#24372A] sm:text-3xl">
                Not included
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#6F776F]">
              <X size={20} />
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {exclusions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/70 p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5E5DF] text-[#6F776F]">
                  <X size={11} strokeWidth={2.5} />
                </span>

                <span className="text-sm leading-6 text-[#59635B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}