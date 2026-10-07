"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is included in the Goa holiday package?",
    answer:
      "The package includes 5 nights accommodation in a 4-star hotel with private swimming pool, daily breakfast, private airport transfers, private sightseeing taxi, North and South Goa sightseeing, Birla Temple visit, Dudhsagar excursion, water sports, sunset cruise with dinner, private candlelight dinner, cultural experience, local market visit and assistance throughout the trip.",
  },
  {
    question: "Is airport pickup and drop-off private?",
    answer:
      "Yes. The package includes private airport pickup on arrival and private transfer to Goa Airport on departure.",
  },
  {
    question: "Which water sports are included?",
    answer:
      "The water sports experience includes scuba diving, jet ski, speed boat, banana boat ride and bumper ride.",
  },
  {
    question: "Is Dudhsagar Waterfall included?",
    answer:
      "Yes. A full-day Dudhsagar Waterfall excursion is included in the package.",
  },
  {
    question: "Can lunch and dinner be added to the package?",
    answer:
      "Yes. Lunch and dinner can be added as an optional hotel dining upgrade at an exclusive package price.",
  },
  {
    question: "Can I customize the Goa package?",
    answer:
      "Yes. Additional premium activities, special arrangements and customized experiences can be arranged according to your requirements.",
  },
  {
    question: "Are casino expenses included?",
    answer:
      "No. Casino entry fees and related expenses are not included in the package.",
  },
  {
    question: "How can I get the complete quote?",
    answer:
      "Simply click the WhatsApp button and send us your travel requirements. Our team can provide the complete quote and help with customized arrangements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F5F3ED] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Heading */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F776F]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#24372A] sm:text-4xl lg:text-5xl">
            Everything you want to know before you go.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-[#6F776F] sm:text-base sm:leading-7">
            Still have a question? Contact our team directly and we'll help
            you plan your Goa experience.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#304936]/20 bg-white shadow-sm"
                    : "border-[#D9DDD5] bg-white/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold leading-6 text-[#24372A] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#304936] text-white"
                        : "bg-[#DFE5D8] text-[#304936]"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-[#6F776F] sm:px-6 sm:pb-6">
                      {faq.answer}
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