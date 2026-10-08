import { ArrowDownRight, ArrowRight, Check, Crown } from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=917780819304&text=Hi+India+Travel+Safari%2C+I+would+like+the+price+and+full+quote+for+Goa+%E2%80%94+Tropical+Paradise.&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative mx-auto w-full max-w-[1440px]
        overflow-hidden
        rounded-[28px] sm:rounded-[36px] lg:rounded-[42px]
        border border-[#EADFC9]
        bg-[#F7F4EC]
        text-[#20231D]
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero-goa.webp"
          alt="Tropical Goa beach"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
          "
        />

        {/* Light image overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Soft champagne left overlay */}
        <div
          className="
            absolute inset-y-0 left-0
            w-full sm:w-[80%] lg:w-[65%]
            bg-gradient-to-r
            from-[#F7F4EC]/85
            via-[#F7F4EC]/35
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0
            h-[65%] sm:h-[58%]
            bg-gradient-to-t
            from-[#F7F4EC]
            via-[#F7F4EC]/85
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative z-10
          min-h-[640px]
          px-4 pb-7 pt-24
          min-[375px]:px-5
          sm:min-h-[700px]
          sm:px-8 sm:pb-10 sm:pt-28
          lg:min-h-[760px]
          lg:px-12 lg:pt-32
        "
      >
        <div
          className="
            flex min-h-[570px] items-end
            sm:min-h-[600px]
            lg:min-h-[620px]
          "
        >
          <div
            className="
              grid w-full items-end
              gap-8
              sm:gap-10
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div className="max-w-3xl">
              {/* Label */}

              <div
                className="
                  flex items-center gap-2.5
                  text-[9px]
                  font-bold uppercase
                  tracking-[0.16em]
                  text-[#A9844D]
                  min-[375px]:text-[10px]
                  sm:gap-3 sm:tracking-[0.18em]
                "
              >
                <span className="h-px w-7 bg-[#C9A66B] min-[375px]:w-10" />

                <span>Personalised Goa Holidays</span>
              </div>

              {/* Duration */}

              <p
                className="
                  mt-5
                  text-[10px]
                  font-bold uppercase
                  tracking-[0.2em]
                  text-[#73736B]
                  min-[375px]:mt-6
                  min-[375px]:text-xs
                  min-[375px]:tracking-[0.24em]
                "
              >
                5 Nights / 6 Days
              </p>

              {/* Heading */}

              <h1
                className="
                  mt-3
                  max-w-[760px]
                  text-[38px]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#20231D]
                  min-[375px]:text-[42px]
                  sm:mt-4
                  sm:text-[56px]
                  md:text-[64px]
                  lg:text-[82px]
                "
              >
                Goa,
                <span className="block">beautifully</span>
                <span className="block text-[#A9844D]">planned for you.</span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-[590px]
                  text-[13px]
                  leading-6
                  text-[#73736B]
                  min-[375px]:mt-6
                  min-[375px]:text-sm
                  min-[375px]:leading-7
                  sm:text-base
                "
              >
                A premium 6-day escape with private transfers, curated
                sightseeing, adventure, sunset dining and unforgettable Goa
                moments.
              </p>

              {/* ===================================================
                  BUTTONS
              =================================================== */}

              <div
                className="
                  mt-6
                  flex flex-col gap-3
                  min-[375px]:mt-7
                  sm:mt-8 sm:flex-row
                "
              >
                {/* =================================================
                    GET PREMIUM QUOTE
                    Champagne — NOT WhatsApp Green
                ================================================= */}

                <a
                  href={whatsappUrl}
                  data-track="goa-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex h-[50px] w-full
                    items-center justify-center gap-2
                    rounded-[17px]
                    border-2 border-[#A9844D]
                    bg-[#C9A66B]
                    px-5
                    text-[11px]
                    font-bold uppercase
                    tracking-[0.14em]
                    text-[#20231D]
                    shadow-[0_5px_12px_rgba(169,132,77,0.18)]
                    transition-all duration-200
                    hover:bg-[#A9844D]
                    min-[375px]:h-[51px]
                    min-[375px]:px-6
                    min-[375px]:text-[12px]
                    sm:w-auto
                  "
                >
                  <span>Get Premium Quote</span>

                  <ArrowRight
                    size={17}
                    className="
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </a>

                {/* =================================================
                    EXPLORE ITINERARY
                    Secondary champagne tint
                ================================================= */}

                <a
                  href="#itinerary"
                  className="
                    group
                    flex h-[50px] w-full
                    items-center justify-center gap-2
                    rounded-[17px]
                    border-2 border-[#C9A66B]
                    bg-[#F8F1E4]
                    px-5
                    text-[11px]
                    font-bold uppercase
                    tracking-[0.14em]
                    text-[#6F5935]
                    shadow-[0_4px_12px_rgba(169,132,77,0.08)]
                    transition-all duration-200
                    hover:bg-[#EADFC9]
                    min-[375px]:h-[51px]
                    min-[375px]:px-6
                    min-[375px]:text-[12px]
                    sm:w-auto
                  "
                >
                  <span>Explore Itinerary</span>

                  <ArrowDownRight
                    size={17}
                    className="
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:translate-y-0.5
                    "
                  />
                </a>
              </div>
            </div>

            {/* =====================================================
                RIGHT — PRICING CARD
            ===================================================== */}

            <div className="flex w-full justify-end lg:pr-0">
              <div
                className="
                  w-full
                  max-w-[430px]
                  rounded-[1.5rem]
                  border border-white/20
                  bg-[#11150F]/60
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                  min-[375px]:rounded-[2rem]
                  min-[375px]:p-5
                  sm:p-6
                "
              >
                {/* Card Header */}

                <div
                  className="
                    flex items-start justify-between gap-3
                    border-b border-white/10
                    pb-4
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-bold uppercase
                        tracking-[0.16em]
                        text-white/50
                        min-[375px]:text-[10px]
                        min-[375px]:tracking-[0.2em]
                      "
                    >
                      India Travel Safari
                    </p>

                    <p
                      className="
                        mt-1
                        text-base
                        font-semibold
                        text-white
                        min-[375px]:text-lg
                      "
                    >
                      Tropical Paradise
                    </p>
                  </div>

                  {/* Most Popular — Champagne */}

                  <span
                    className="
    inline-flex
    shrink-0
    items-center
    justify-center
    gap-1.5
    rounded-full
    border border-[#A9844D]
    bg-[#C9A66B]
    px-2.5 py-1
    text-[8px]
    font-bold uppercase
    tracking-[0.1em]
    text-[#20231D]
    min-[375px]:px-3
    min-[375px]:text-[9px]
    min-[375px]:tracking-[0.14em]
  "
                  >
                    <Crown size={12} strokeWidth={2} className="shrink-0" />
                    <span>Most Popular</span>
                  </span>
                </div>

                {/* =================================================
                    PRICING
                ================================================= */}

                <div
                  className="
                    grid grid-cols-1
                    gap-3
                    pt-4
                    min-[390px]:grid-cols-2
                    min-[390px]:pt-5
                  "
                >
                  {/* Standard */}

                  <div
                    className="
                      rounded-2xl
                      bg-white/10
                      p-3.5
                      min-[375px]:p-4
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.14em]
                        text-white/50
                        min-[375px]:text-[9px]
                        min-[375px]:tracking-[0.16em]
                      "
                    >
                      Standard
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-2xl
                        font-semibold
                        text-white
                        min-[375px]:mt-2
                        min-[375px]:text-3xl
                      "
                    >
                      $749
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-white/50
                        min-[375px]:text-xs
                      "
                    >
                      3-star hotel
                    </p>
                  </div>

                  {/* Premium — Champagne */}

                  <div
                    className="
                      rounded-2xl
                      bg-[#C9A66B]
                      p-3.5
                      text-[#20231D]
                      min-[375px]:p-4
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#20231D]/60
                        min-[375px]:text-[9px]
                        min-[375px]:tracking-[0.16em]
                      "
                    >
                      Premium
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-2xl
                        font-semibold
                        min-[375px]:mt-2
                        min-[375px]:text-3xl
                      "
                    >
                      $1,111
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-[#20231D]/60
                        min-[375px]:text-xs
                      "
                    >
                      4-star + private pool
                    </p>
                  </div>
                </div>

                {/* =================================================
                    INCLUDED
                ================================================= */}

                <div
                  className="
                    mt-4
                    grid grid-cols-1
                    gap-2
                    min-[390px]:grid-cols-3
                    min-[390px]:mt-5
                  "
                >
                  {[
                    "Private Transfers",
                    "Daily Breakfast",
                    "Goa Experiences",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex items-center gap-1.5
                        text-[9px]
                        font-semibold
                        text-white/70
                        min-[375px]:text-[10px]
                      "
                    >
                      <Check
                        size={12}
                        className="
                          shrink-0
                          text-[#C9A66B]
                        "
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DESTINATION TAGS
        ========================================================= */}

        <div
          className="
            relative z-10
            mt-7
            flex flex-wrap
            gap-x-5 gap-y-2.5
            text-[9px]
            font-bold uppercase
            tracking-[0.12em]
            text-[#73736B]
            min-[375px]:mt-8
            min-[375px]:gap-x-7
            min-[375px]:text-[10px]
            min-[375px]:tracking-[0.14em]
          "
        >
          <span>North Goa</span>
          <span>South Goa</span>
          <span>Dudhsagar</span>
          <span>Water Sports</span>
          <span>Sunset Cruise</span>
        </div>
      </div>
    </section>
  );
}
