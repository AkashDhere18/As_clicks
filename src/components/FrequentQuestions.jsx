import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely. We travel to selected location for destination weddings. Travel and accommodation costs are calculated based on location and added to your package quote.",
  },
  {
    question: "How many images will we receive?",
    answer:
      "The final count depends on your package and the length of coverage, but most full-day weddings receive between 400 and 600 professionally edited high-resolution images.",
  },
  {
    question: "What is your editing style?",
    answer:
      "Our signature look is timeless and true-to-life, with rich tones, natural skin colors, and subtle contrast — never overly filtered or trend-driven.",
  },
  {
    question: "When will we get our photos?",
    answer:
      "You'll receive a curated sneak peek within 48 hours of your event, with the full gallery delivered within 4 to 6 weeks.",
  },
];

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <h2 className="font-heading text-center text-white text-4xl md:text-5xl mb-12">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border border-white/10 bg-[#0d0d0d]">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left"
              >
                <span className="font-heading text-white text-lg md:text-xl">
                  {faq.question}
                </span>
                <FaChevronRight
                  className={`text-[#C8A96B] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "200px" : "0px" }}
              >
                <p className="px-6 pb-6 text-gray-300 font-body text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FrequentQuestions;