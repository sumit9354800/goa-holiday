"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  [
    "What is included in the Goa holiday package?",
    "The package includes accommodation, daily breakfast, private airport transfers, private sightseeing taxi, North and South Goa sightseeing, Birla Temple, Dudhsagar, water sports, sunset cruise with dinner, private candlelight dinner, cultural dance, local market visit and trip assistance.",
  ],
  [
    "What is the difference between Standard and Premium?",
    "The $749 Standard package includes a 3-star hotel stay. The $1,111 Premium package includes a 4-star hotel with private swimming pool plus the fuller set of signature experiences.",
  ],
  [
    "Is airport pickup and drop-off private?",
    "Yes. Private airport pickup on arrival and private transfer to Goa Airport on departure are included.",
  ],
  [
    "Which water sports are included?",
    "Scuba diving, jet ski, speed boat, banana boat ride and bumper ride.",
  ],
  [
    "Is Dudhsagar Waterfall included?",
    "Yes. A full-day Dudhsagar Waterfall excursion is included.",
  ],
  [
    "Can lunch and dinner be added?",
    "Yes. Lunch and dinner can be added as an optional hotel dining upgrade at an exclusive package price.",
  ],
  [
    "Can I customize the Goa package?",
    "Yes. Additional premium activities, special arrangements and customized experiences can be arranged according to your requirements.",
  ],
  [
    "Are casino expenses included?",
    "No. Casino entry fees and related expenses are not included.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9844D] sm:text-base">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#20231D] sm:text-4xl lg:text-5xl">
            Everything you want to know before you go.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#73736B]">
            Still have a question? Send your dates and requirements on
            WhatsApp and our team can help with the complete quote.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-3">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;

            return (
              <div
                key={question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A66B] bg-[#F7F4EC]"
                    : "border-[#EADFC9] bg-white hover:border-[#C9A66B]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left min-[390px]:gap-5 min-[390px]:px-5 min-[390px]:py-5 sm:px-6"
                >
                  <span className="min-w-0 text-[13px] font-bold leading-6 text-[#20231D] min-[390px]:text-sm sm:text-base">
                    {question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#C9A66B] text-[#20231D]"
                        : "bg-[#EADFC9] text-[#80653C]"
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={2} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-4 pb-4 text-[13px] leading-6 text-[#73736B] min-[390px]:px-5 min-[390px]:pb-5 min-[390px]:text-sm sm:px-6 sm:pb-6">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}