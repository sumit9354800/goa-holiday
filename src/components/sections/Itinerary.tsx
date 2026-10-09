import {
  Anchor,
  Bath,
  Camera,
  Car,
  Church,
  Coffee,
  Droplets,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

const phoneNumber = "tel:+917780819304";

const days = [
  {
    day: "01",
    title: "Arrival in Goa & Hotel Check-in",
    description:
      "Private airport pickup and transfer to your 4-star hotel with private swimming pool. Welcome and check-in, followed by leisure time to relax and enjoy the hotel.",
    icon: Car,

    image:
      "/itinerary/hotel.jpeg",

    position: "center",

    tags: [
      ["Pickup", "Airport Pickup"],
      ["Stay", "4-Star Hotel"],
      ["Day Type", "Leisure"],
    ],
  },

  {
    day: "02",
    title: "North Goa Sightseeing & Local Market",
    description:
      "After breakfast, enjoy a private North Goa sightseeing tour covering famous beaches, churches, viewpoints and other attractions. In the evening, explore a local Goan market for shopping and souvenirs.",
    icon: Camera,

    image:
      "/itinerary/market.jpg",

    position: "center",

    tags: [
      ["Location", "North Goa"],
      ["Activity", "Sightseeing"],
      ["Evening", "Local Market"],
    ],
  },

  {
    day: "03",
    title: "South Goa, Birla Temple & Candlelight Dinner",
    description:
      "After breakfast, discover the beauty of South Goa, including scenic beaches, heritage sites and peaceful coastal locations. Visit Birla Temple and enjoy a private candlelight dinner.",
    icon: Sparkles,

    image:
      "/itinerary/goa-birla-temple.webp",

    position: "center",

    tags: [
      ["Location", "South Goa"],
      ["Visit", "Birla Temple"],
      ["Dinner", "Candlelight Dinner"],
    ],
  },

  {
    day: "04",
    title: "Dudhsagar Waterfall Adventure",
    description:
      "After breakfast, set out for a full-day excursion to Dudhsagar Waterfall, one of Goa's most spectacular natural attractions. Enjoy the scenic journey through lush landscapes.",
    icon: Droplets,

    image:
      "/itinerary/water-fall.jpg",

    position: "center",

    tags: [
      ["Destination", "Dudhsagar"],
      ["Type", "Full-Day Excursion"],
      ["Experience", "Nature"],
    ],
  },

  {
    day: "05",
    title: "Water Sports, Sunset Cruise & Cultural Evening",
    description:
      "Enjoy an exciting water sports adventure, followed by a Goa sunset cruise with dinner and an aesthetic cultural dance performance showcasing the colours and traditions of Goa.",
    icon: Waves,

    image:
      "/itinerary/05.avif",

    position: "center",

    tags: [
      ["Water Sports", "Scuba Diving"],
      ["Adventure", "Jet Ski"],
      ["Evening", "Sunset Cruise"],
    ],

    activities: [
      "🤿 Scuba Diving",
      "🚤 Jet Ski",
      "🚤 Speed Boat",
      "🍌 Banana Boat Ride",
      "🛟 Bumper Ride",
    ],
  },

  {
    day: "06",
    title: "Checkout & Airport Departure",
    description:
      "Breakfast and hotel checkout. Private transfer to Goa Airport with a farewell/see-off ceremony, bringing your memorable Goa holiday to an end.",
    icon: Anchor,

    image:
      "/itinerary/air-port2.jpg",

    position: "center",

    tags: [
      ["Morning", "Breakfast"],
      ["Checkout", "Hotel Checkout"],
      ["Transfer", "Airport Transfer"],
    ],
  },
];

const iconMap: Record<string, any> = {
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
  "Hotel Checkout": MapPin,
  "Airport Transfer": Car,
};

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
              Your Journey
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#20231D] sm:text-4xl lg:text-5xl">
              6 days.{" "}
              <span className="text-[#20231D]">
                Beautifully planned.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#73736B] lg:justify-self-end">
            From your first airport pickup to your final farewell, every day
            has been thoughtfully planned for a smooth, memorable Goa holiday.
          </p>
        </div>

        {/* 3 CARD GRID */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {days.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.day}
                className="overflow-hidden rounded-[2rem] border border-[#EADFC9] bg-white shadow-[0_12px_40px_rgba(32,35,29,0.06)]"
              >
                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden bg-[#20231D] min-[390px]:h-[260px] sm:h-[300px]">
                  <img
                    src={item.image}
                    alt={`${item.title} - Goa`}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      objectPosition: item.position,
                    }}
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20231D]/65 via-[#20231D]/10 to-black/5" />

                  {/* DAY BADGE */}
                  <div className="absolute left-4 top-4 rounded-full border-2 border-white/80 bg-[#C9A66B] px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#20231D] min-[390px]:left-5 min-[390px]:top-5 min-[390px]:text-[10px]">
                    Day {item.day}
                  </div>

                  {/* DAY ICON */}
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/35 text-white backdrop-blur-sm min-[390px]:bottom-5 min-[390px]:left-5 min-[390px]:h-11 min-[390px]:w-11">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="min-[390px]:h-[19px] min-[390px]:w-[19px]"
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-4 min-[390px]:p-5 sm:p-6">
                  {/* DAY + NUMBER */}
                  <div className="flex items-start justify-between gap-2 min-[390px]:gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#A9844D] min-[390px]:text-[10px]">
                        Day {item.day}
                      </p>

                      <h3 className="mt-2 text-[19px] font-bold leading-[1.12] tracking-[-0.035em] text-[#4F4028] min-[390px]:text-[21px] sm:text-[22px]">
                        {item.title}
                      </h3>
                    </div>

                    {/* FULL-OPACITY DAY NUMBER */}
                    <span className="shrink-0 text-[40px] font-light leading-none tracking-[-0.06em] text-[#4F4028] min-[390px]:text-[46px] sm:text-[52px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-[13px] leading-6 text-[#73736B] min-[390px]:text-sm">
                    {item.description}
                  </p>

                  {/* WATER SPORTS */}
                  {item.activities && (
                    <div className="mt-5 rounded-xl bg-[#F8F1E4] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A9844D]">
                        Water Sports
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.activities.map((activity) => (
                          <span
                            key={activity}
                            className="rounded-full border border-[#EADFC9] bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#6F5935]"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* INFO CHIPS */}
                  <div className="mt-5 grid grid-cols-3 gap-1.5 min-[390px]:gap-2">
                    {item.tags.map(([label, value]) => {
                      const TagIcon = iconMap[value];

                      return (
                        <div
                          key={label}
                          className="min-w-0 rounded-xl bg-[#F8F1E4] px-2 py-2.5 min-[390px]:px-3 min-[390px]:py-3"
                        >
                          <p className="truncate text-[7px] font-bold uppercase tracking-[0.06em] text-[#A9844D] min-[390px]:text-[8px] min-[390px]:tracking-[0.08em]">
                            {label}
                          </p>

                          <div className="mt-1.5 flex items-start gap-1">
                            {TagIcon && (
                              <TagIcon
                                size={11}
                                className="mt-0.5 shrink-0 text-[#A9844D] min-[390px]:h-3 min-[390px]:w-3"
                              />
                            )}

                            <p className="min-w-0 text-[9px] font-semibold leading-4 text-[#6F5935] min-[390px]:text-[10px]">
                              {value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA BUTTONS */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {/* WHATSAPP — SAME AS NAVBAR */}
                    <a
                      href={whatsappUrl}
                      data-track="goa-whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-[14px] border-2 border-[#128C7E] bg-[#25D366] px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#128C7E] min-[390px]:px-3 min-[390px]:text-[10px] min-[390px]:tracking-[0.12em]"
                    >
                      <MessageCircle
                        size={15}
                        strokeWidth={1.8}
                        className="shrink-0"
                      />

                      <span>WhatsApp</span>
                    </a>

                    {/* CALL */}
                    <a
                      href={phoneNumber}
                      className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-[14px] border-2 border-[#C9A66B] bg-[#F8F1E4] px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#6F5935] transition-all duration-200 hover:bg-[#EADFC9] min-[390px]:px-3 min-[390px]:text-[10px] min-[390px]:tracking-[0.12em]"
                    >
                      <Phone
                        size={15}
                        strokeWidth={1.8}
                        className="shrink-0"
                      />

                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A9844D] min-[390px]:text-xs min-[390px]:tracking-[0.14em]">
            6 days · 5 nights · Premium Goa experience
          </p>
        </div>
      </div>
    </section>
  );
}