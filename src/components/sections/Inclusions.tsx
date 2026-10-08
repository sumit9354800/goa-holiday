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
  [
    Hotel,
    "5 Nights Accommodation",
    "4-star hotel with private swimming pool on the Premium package.",
  ],
  [Coffee, "Daily Breakfast", "Breakfast included throughout your stay."],
  [
    Car,
    "Private Airport Transfers",
    "Private pickup and drop-off from Goa Airport.",
  ],
  [
    Map,
    "Private Taxi",
    "Private transportation for sightseeing and transfers.",
  ],
  [MapPin, "North & South Goa", "Explore the best attractions across Goa."],
  [Sparkles, "Birla Temple", "Visit and enjoy panoramic surroundings."],
  [Waves, "Dudhsagar", "Full-day waterfall excursion."],
  [PartyPopper, "Water Sports", "Scuba diving, jet ski, speed boat and more."],
  [Ship, "Sunset Cruise", "Goa sunset cruise with dinner."],
  [Sparkles, "Candlelight Dinner", "Private romantic dinner experience."],
  [Ticket, "Cultural Dance", "Aesthetic cultural evening."],
  [BadgeCheck, "Trip Assistance", "Assistance throughout the holiday."],
] as const;

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
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
            Package Details
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#20231D] sm:text-4xl lg:text-5xl">
            Everything included. Nothing confusing.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#73736B]">
            A clear breakdown of what is covered in your Goa holiday, plus the
            few things that remain outside the package.
          </p>
        </div>

        {/* INCLUSIONS GRID */}
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map(([Icon, title, desc]) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-[#EADFC9] bg-[#F7F4EC] p-4 transition-all duration-300 hover:border-[#C9A66B] hover:bg-white hover:shadow-[0_12px_35px_rgba(32,35,29,0.06)] min-[390px]:p-5"
            >
              <div className="flex items-start gap-3">
                {/* ICON */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EADFC9] text-[#80653C]">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3 className="min-w-0 pt-1 text-[13px] font-bold leading-5 text-[#20231D] min-[390px]:text-sm">
                  {title}
                </h3>
              </div>

              <p className="mt-3 text-[13px] leading-6 text-[#73736B] min-[390px]:text-sm">
                {desc}
              </p>
            </article>
          ))}
        </div>

        {/* INCLUDED + EXCLUSIONS */}
        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2">
          {/* INCLUDED */}
          <div className="rounded-[2rem] bg-[#20231D] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A66B]">
              Included
            </p>

            <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
              Your trip, thoughtfully covered.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Accommodation, transfers, sightseeing, adventure and signature
              dining experiences are planned into the package.
            </p>

            {/* SMALL CHAMPAGNE LINE */}
            <div className="mt-6 h-px w-16 bg-[#C9A66B]" />
          </div>

          {/* EXCLUSIONS */}
          <div className="rounded-[2rem] border border-[#EADFC9] bg-[#F7F4EC] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              {/* ICON */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#A9844D]">
                <X size={18} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A9844D]">
                  Exclusions
                </p>

                <h3 className="mt-1 text-xl font-semibold leading-tight text-[#20231D] sm:text-2xl">
                  Not included
                </h3>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[13px] leading-6 text-[#68675F] sm:text-sm"
                >
                  <X
                    size={15}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-[#A9844D]"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}