"use client";

import { useState } from "react";
import Button from "./shared/Button";
import Link from "next/link";

interface AccordionItem {
  title: string;
  content: string;
}

export default function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const steps: AccordionItem[] = [
    {
      title: "What kind of development services does Craftedmart Agency offer?",
      content:
        "At Craftedmart Agency, We develop any platform you want to build. From designing custom websites to CMS-based sites, Our Website Developer in Bangladesh can help you to develop any of these websites that will be responsible and functional. For website development, we use popular frameworks like WordPress, Laravel, and Node.js.",
    },
    {
      title: "How secure will my website be?",
      content:
        "We know that every website needs to be protected and we build websites with strong protection. Our security process includes SSL certification, secure coding, and regular updates to the website for any vulnerabilities.",
    },
    {
      title: "Can you help improve my website's SEO?",
      content:
        "Yes, Our developers will help you improve your SEO ranking with their expertise. As the best of one Website Development Company in Chittagong, we are professional at this part.",
    },
    {
      title: "Will I be able to update my website myself?",
      content:
        "Yes, you can update your website by yourself. Craftedmart Agency develop dynamic websites with the user-friendly framework and customizable websites so that you can change or update your website contents, images, or more without having any technical skills.",
    },
    {
      title: "How long will it take to build my website?",
      content:
        "The timeline depends on the complexity of your project. A basic website usually takes 1–2 weeks, while larger custom platforms may take 1–3 months.",
    },
    {
      title: "Will my website work on mobile devices?",
      content:
        "Absolutely. All websites developed by Craftedmart Agency are fully responsive, meaning they look and function perfectly on desktops, tablets, and mobile devices.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/consulting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contactme"
      className="bg-black text-white py-16 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-4 relative">
            <span className="opacity-10 block text-5xl md:text-6xl absolute -top-6 left-0 select-none uppercase">
              CONTACT
            </span>
            <span className="relative z-10">Contact</span>
          </h2>
          <p className="text-gray-400 mb-6 mt-8 text-sm">
            We are happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          <div className="mb-8 flex justify-start">
            <Link
              href="tel:+8801815149399"
              className="inline-block border border-teal-400 text-teal-400 font-semibold px-3 md:px-6 py-3 rounded hover:bg-teal-400 hover:text-black transition"
            >
              Call Us Now: +880 1815 149399
            </Link>
          </div>

          <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
            {steps.map((step, i) => (
              <div key={i} className="py-3">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between pr-5 text-left"
                >
                  <span
                    className={`font-semibold transition-colors ${openIndex === i ? "text-teal-300" : "text-teal-400"}`}
                  >
                    {step.title}
                  </span>
                  <span className="text-teal-400 text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 mt-2 text-xs leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 shadow-2xl border border-gray-800">
          <h3 className="text-xl font-bold mb-6 text-center text-white">
            Make a Free Consulting
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                required
                placeholder="First Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400"
              />
            </div>
            <input
              name="companyName"
              placeholder="Company/Organization"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400"
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Message"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-teal-400 resize-none"
            />

            <div className="flex flex-col items-center gap-4">
              <Button
                text={status === "sending" ? "Sending..." : "Submit"}
                disabled={status === "sending"}
              />

              {status === "success" && (
                <p className="text-teal-400 text-sm">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
