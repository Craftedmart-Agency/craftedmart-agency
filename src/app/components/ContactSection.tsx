"use client";

import { useState } from "react";
import Button from "./shared/Button";
import Link from "next/link";

interface AccordionItem {
  title: string;
  content: string;
}

export default function ContactSection() {
  // index of the currently open step; null means all collapsed
 const [openIndex, setOpenIndex] = useState<number | null>(0);

  const steps:AccordionItem[] = [
    { title: "What kind of development services does Craftedmart Agency offer?", content: "At Craftedmart Agency, We develop any platform you want to build. From designing custom websites to CMS-based sites, Our Website Developer in Bangladesh can help you to develop any of these websites that will be responsible and functional. For website development, we use popular frameworks like WordPress, Laravel, and Node.js." },
    {
      title: "How secure will my website be?",
      content:
        "We know that every website needs to be protected and we build websites with strong protection. Our security process includes SSL certification, secure coding, and regular updates to the website for any vulnerabilities.",
    },
    { title: "Can you help improve my website's SEO?", content: "Yes, Our developers will help you improve your SEO ranking with their expertise. As the best of one Website Development Company in Chittagong, we are professional at this part." },
    { title: "Will I be able to update my website myself?", content: "Yes, you can update your website by yourself. Craftedmart Agency develop dynamic websites with the user-friendly framework and customizable websites so that you can change or update your website contents, images, or more without having any technical skills." },
    { title: "How long will it take to build my website?", content: "The timeline depends on the complexity of your project. A basic website usually takes 1–2 weeks, while larger custom platforms may take 1–3 months. At Craftedmart Agency, we always set clear deadlines and keep you updated at every stage of development." },
    { title: "Will my website work on mobile devices?", content: "Absolutely. All websites developed by Craftedmart Agency are fully responsive, meaning they look and function perfectly on desktops, tablets, and mobile devices. We prioritize a mobile-first approach since most users browse from smartphones today." },

  ];

  const toggle = (index: number) => {
    setOpenIndex((prev: number | null) => (prev === index ? null : index));
  };

  return (
    <section id="contactme" className="bg-black text-white py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="opacity-10 block text-5xl md:text-6xl -mb-10">CONTACT</span>
            Contact
          </h2>
          <p className="text-gray-400 mb-6">
            We are happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          {/* Call button */}
          <div className="mb-8 flex justify-start">
            <Link
              href="tel:+8801815149399"
              className="inline-block border border-teal-400 text-teal-400 font-semibold px-3 md:px-6 py-3 rounded hover:bg-teal-400 hover:text-black transition"
            >
              Call Us Now: +880 1815 149399
            </Link>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={step.title} className="py-3">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between pr-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${i}`}
                  >
                    <span className="font-semibold text-teal-400">
                      {step.title}
                    </span>
                    <span
                      className={`text-teal-400 transition-transform ${
                        isOpen ? "rotate-0" : "rotate-0"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Panel */}
                  <div
                    id={`panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 mt-2 text-xs">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-center">
            Make a Free Consulting
          </h3>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
              />
            </div>

            <input
              type="text"
              placeholder="Company/Organization"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <textarea
              rows={4}
              placeholder="Message"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />
            <div className="flex justify-center">
            <Button text="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
