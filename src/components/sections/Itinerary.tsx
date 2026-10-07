import {
  Anchor,
  Bath,
  Camera,
  Car,
  Church,
  Coffee,
  Droplets,
  MapPin,
  ShoppingBag,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";

const days = [
  {
    day: "01",
    title: "Arrival in Goa & Hotel Check-in",
    description:
      "Private airport pickup and transfer to your 4-star hotel with private swimming pool. Welcome and check-in, followed by leisure time to relax and enjoy the hotel.",
    icon: Car,
    tags: ["Airport Pickup", "4-Star Hotel", "Leisure"],
  },
  {
    day: "02",
    title: "North Goa Sightseeing & Local Market",
    description:
      "After breakfast, enjoy a private North Goa sightseeing tour covering famous beaches, churches, viewpoints and other attractions. In the evening, explore a local Goan market for shopping and souvenirs.",
    icon: Camera,
    tags: ["North Goa", "Sightseeing", "Local Market"],
  },
  {
    day: "03",
    title: "South Goa, Birla Temple & Candlelight Dinner",
    description:
      "Discover the beauty of South Goa, including scenic beaches, heritage sites and peaceful coastal locations. Visit Birla Temple and enjoy the peaceful surroundings and panoramic views. In the evening, enjoy a private candlelight dinner in a romantic setting.",
    icon: Sparkles,
    tags: ["South Goa", "Birla Temple", "Candlelight Dinner"],
  },
  {
    day: "04",
    title: "Dudhsagar Waterfall Adventure",
    description:
      "Set out for a full-day excursion to Dudhsagar Waterfall, one of Goa's most spectacular natural attractions. Enjoy the scenic journey through the lush landscape and experience the beauty of the waterfall and surrounding nature.",
    icon: Droplets,
    tags: ["Dudhsagar", "Full-Day Excursion", "Nature"],
  },
  {
    day: "05",
    title: "Water Sports, Sunset Cruise & Cultural Evening",
    description:
      "Enjoy an exciting water sports adventure followed by a Goa sunset cruise with dinner and an aesthetic cultural dance performance showcasing the colours and traditions of Goa.",
    icon: Waves,
    tags: ["Scuba Diving", "Jet Ski", "Sunset Cruise"],
    activities: [
      "Scuba Diving",
      "Jet Ski",
      "Speed Boat",
      "Banana Boat Ride",
      "Bumper Ride",
    ],
  },
  {
    day: "06",
    title: "Checkout & Airport Departure",
    description:
      "Enjoy breakfast before checking out from your hotel. Private transfer to Goa Airport with a farewell and see-off ceremony, bringing your memorable Goa holiday to an end.",
    icon: Anchor,
    tags: ["Breakfast", "Checkout", "Airport Transfer"],
  },
];

const iconMap = {
  "Airport Pickup": Car,
  "4-Star Hotel": Bath,
  Leisure: Coffee,
  "North Goa": MapPin,
  Sightseeing: Camera,
  "Local Market": ShoppingBag,
  "South Goa": MapPin,
  "Birla Temple": Church,
  "Candlelight Dinner": Utensils,
  Dudhsagar: Droplets,
  "Full-Day Excursion": Camera,
  Nature: Sparkles,
  "Scuba Diving": Waves,
  "Jet Ski": Waves,
  "Sunset Cruise": Anchor,
  Breakfast: Coffee,
  Checkout: MapPin,
  "Airport Transfer": Car,
};

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
            Your Journey
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#24372A] sm:text-5xl">
            6 days of Goa,
            <span className="block italic text-[#304936]">
              beautifully planned.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6F776F]">
            From your first airport pickup to your final farewell, every day
            has been thoughtfully planned for a smooth and memorable journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Desktop vertical line */}
          <div className="absolute left-[31px] top-0 hidden h-full w-px bg-[#D9DDD5] md:block" />

          <div className="space-y-8">
            {days.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.day}
                  className="relative grid gap-6 md:grid-cols-[64px_1fr]"
                >
                  {/* Day marker */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#304936] text-sm font-bold text-white shadow-md">
                    {item.day}
                  </div>

                  {/* Content */}
                  <div className="rounded-[2rem] border border-[#D9DDD5] bg-[#F5F3ED] p-6 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F776F]">
                          Day {item.day}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#24372A] sm:text-3xl">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#304936]">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[#6F776F] sm:text-base">
                      {item.description}
                    </p>

                    {/* Day 5 activities */}
                    {item.activities && (
                      <div className="mt-6 rounded-2xl bg-white p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F776F]">
                          Water Sports
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.activities.map((activity) => (
                            <span
                              key={activity}
                              className="rounded-full bg-[#DFE5D8] px-3.5 py-2 text-xs font-semibold text-[#304936]"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => {
                        const TagIcon = iconMap[tag as keyof typeof iconMap];

                        return (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#D9DDD5] bg-white px-3 py-1.5 text-xs font-medium text-[#59635B]"
                          >
                            {TagIcon && <TagIcon size={12} />}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}