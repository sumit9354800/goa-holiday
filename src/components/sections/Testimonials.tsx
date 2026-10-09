
const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/testimonials1.png",
    alt: "Family enjoying a travel experience in India",
    title: "Warm, thoughtful journeys",
    review:
      "Every detail felt thoughtfully planned, from the travel arrangements to the time we spent discovering each place.",
    name: "Urmil Sharma",
    location: "",
    shape: "rounded-t-[999px] rounded-b-md",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonials2.png",
    alt: "Traveller visiting the Taj Mahal",
    title: "A beautiful travel experience",
    review:
      "The journey felt comfortable and well organised, with memorable experiences at every stop.",
    name: "Ekatrina, Russia",
    location: "",
    shape: "rounded-[1.5rem]",
  },
  {
    id: 3,
   image: "/images/testimonials/testimonials3.png",
    alt: "Travellers exploring a historic Indian monument",
    title: "India beyond the guidebook",
    review:
      "The trip brought us closer to India's history, culture and people. Every day offered something special.",
    name: "Julia, Russia",
    location: "",
    shape: "rounded-t-[999px] rounded-b-md",
  },
  {
    id: 4,
   image: "/images/testimonials/testimonials4.png",
    alt: "Travellers enjoying a cultural destination",
    title: "Welcomed like family",
    review:
      "The experience felt comfortable and personal, with thoughtful arrangements throughout the journey.",
    name: "Elena, Russia",
    location: "",
    shape: "rounded-[1.5rem]",
  },
  {
    id: 5,
   image: "/images/testimonials/testimonials5.png",
    alt: "Traveller remembering a holiday",
    title: "Travel planned with care",
    review:
      "Clear communication and careful planning made the journey easier and more enjoyable.",
    name: "Yana, Russia",
    location: "",
    shape: "rounded-t-[999px] rounded-b-md",
  },
  {
    id: 6,
   image: "/images/testimonials/testimonials6.png",
    alt: "Traveller enjoying a holiday in India",
    title: "Memories to take home",
    review:
      "A wonderful opportunity to discover new places and create lasting travel memories.",
    name: "Natalia, Belarus",
    location: "",
    shape: "rounded-[1.5rem]",
  },
];

function StarRating() {
  return (
    <div
      className="flex items-center gap-0.5 text-[#A9844D]"
      aria-label="Rating display"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A9844D] sm:text-xs sm:tracking-[0.25em]">
              Traveller Stories
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#20231D] sm:mt-4 sm:text-4xl lg:text-5xl">
              India, remembered
              <span className="block text-[#A9844D]">
                in their own words.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#73736B] lg:justify-self-end lg:pb-1">
            Discover the places, people and moments that make a journey
            memorable.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-9 grid grid-cols-1 gap-x-4 gap-y-8 min-[480px]:grid-cols-2 min-[480px]:gap-x-5 sm:mt-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          {testimonials.map((item) => (
            <article key={item.id} className="min-w-0">
              {/* IMAGE */}
              <div
                className={`relative aspect-[4/4.2] w-full overflow-hidden bg-[#EADFC9] ${item.shape}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* RATING + QUOTE MARK */}
              <div className="mt-3 flex items-center justify-between">
                <StarRating />

                <span
                  aria-hidden="true"
                  className="font-serif text-2xl leading-none text-[#A9844D]"
                >
                  ”
                </span>
              </div>

              {/* REVIEW */}
              <h3 className="mt-2 text-base font-semibold leading-snug tracking-[-0.02em] text-[#20231D] sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#73736B] sm:text-sm sm:leading-6">
                “{item.review}”
              </p>

              {/* GUEST DETAILS */}
              <div className="mt-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#6F5935] sm:text-[10px]">
                  {item.name}
                </p>

                <p className="mt-1 text-[10px] text-[#8A806F]">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
