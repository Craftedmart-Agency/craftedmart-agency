"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import banner from "@/assets/banner.jpg";
import Button from "./shared/Button";
import Link from "next/link";
import Review from "./Review";

const titles = [
  "Set Your Business New Ideas.",
  "Build Websites That Convert.",
  "Grow Your Brand With Strategy.",
  "Turn Vision Into Digital Reality.",
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // Framer Motion Values for high-performance typing
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    titles[index].slice(0, latest),
  );

  // 1. Observe visibility of the banner component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Core Typing Animation Logic
  useEffect(() => {
    if (!isVisible) return;

    // Typing animation
    const controls = animate(count, titles[index].length, {
      type: "tween",
      duration: titles[index].length * 0.08, // Adjust speed per character
      ease: "linear",
      onComplete: () => {
        // Pause after typing is done
        setTimeout(() => {
          // Deleting animation
          animate(count, 0, {
            type: "tween",
            duration: titles[index].length * 0.04, // Deleting is usually faster
            ease: "linear",
            onComplete: () => {
              // Move to next title
              setIndex((prev) => (prev + 1) % titles.length);
            },
          });
        }, 1500); // 1.5s pause at the end of title
      },
    });

    return () => controls.stop();
  }, [index, isVisible, count]);

  return (
    <section
      ref={bannerRef}
      className="bg-[#0f0e0eb4] text-white px-6 py-6 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div className="z-10">
          <div className="block min-h-[140px] md:min-h-[180px]">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight pt-5 md:pt-0">
              <motion.span className="text-white">{displayText}</motion.span>
              <CursorBlinker />
            </h1>
          </div>

          <p className="mt-6 text-gray-300 max-w-lg">
            We focus on simplicity, flexibility, and strategy—making it easier
            for you to achieve your goals while staying ahead of the
            competition.
          </p>

          <p className="mt-4 text-gray-300 max-w-lg">
            Let’s build a strong foundation together, where every step takes you
            closer to sustainable success.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
            <Link href="#contactme">
              <Button text="Free Consult" />
            </Link>
            <Link href="/websites">
              <div className="border border-teal-4 00 text-gray-400 hover:bg-teal-400 hover:text-black px-12 py-[10px] rounded transition-all duration-300 font-semibold">
              VIEW PROJECTS
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image Side- this is the lcp content */}
        <div
          className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-[30px]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        >
          <Image
            src={banner}
            alt="Team Work"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-teal-400/30"
            style={{
              clipPath: "polygon(20% 0, 30% 0, 60% 100%, 40% 100%)",
            }}
          ></div>
        </div>
      </div>
      <Review />
    </section>
  );
};

// Custom Blinking Cursor Component
const CursorBlinker = () => {
  return (
    <motion.span
      variants={{
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
          },
        },
      }}
      animate="blinking"
      className="inline-block w-[3px] h-8 md:h-14 bg-teal-400 ml-2 mb-[-4px]"
    />
  );
};

export default Banner;
