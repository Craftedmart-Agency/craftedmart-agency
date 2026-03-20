"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useInView, animate } from "framer-motion";
import trust from "@/assets/trustpilot.svg";
import google from "@/assets/google.svg";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

// Reusable Counter Component
const Counter = ({ from, to, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Animation logic-ti useCallback diye wrap kora hoyeche ESLint warning erate
  const startAnimation = useCallback(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (value) => {
        if (to % 1 !== 0) {
          setCount(Number(value.toFixed(1))); // toFixed string return kore, tai Number-e convert kora bhalo
        } else {
          setCount(Math.floor(value));
        }
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  useEffect(() => {
    if (isInView) {
      return startAnimation();
    }
  }, [isInView, startAnimation]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Review = () => {
  // Stats data-ke array-te niye asha hoyeche jate code "DRY" (Don't Repeat Yourself) thake
  const stats = [
    {
      id: 1,
      from: 0,
      to: 6,
      suffix: "",
      label: "Years",
      subLabel: "Working With Passion",
    },
    {
      id: 2,
      from: 0,
      to: 1.4,
      suffix: "K",
      label: "Customer",
      subLabel: "Satisfied Customer",
    },
    {
      id: 3,
      from: 0,
      to: 736,
      suffix: "",
      label: "Project",
      subLabel: "We Have Completed",
    },
    {
      id: 4,
      from: 0,
      to: 13,
      suffix: "",
      label: "Awards",
      subLabel: "Achievement For Service",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Review On */}
        <h3 className="text-lg font-semibold mb-4">Review On</h3>
        <div className="flex gap-6 flex-wrap">
          {/* Trustpilot Card */}
          <div className="bg-[#111] border border-gray-700 rounded-lg px-6 py-4 flex items-center gap-3 w-[300px]">
            <Image
              src={trust}
              alt="Trustpilot Rating"
              width={100}
              height={40}
              className="w-full h-full object-contain"
              priority={false}
            />
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar aria-hidden="true" />
              <span className="font-medium">5/5.0</span>
            </div>
          </div>

          {/* Google Card */}
          <div className="bg-[#111] border border-gray-700 rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-[300px]">
            <Image
              src={google}
              alt="Google Rating"
              width={100}
              height={40}
              className="object-contain"
            />
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar aria-hidden="true" />
              <span className="font-medium">5/5.0</span>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h4 className="text-2xl font-bold">
                <Counter from={stat.from} to={stat.to} suffix={stat.suffix} />
                <span className="text-teal-400 text-sm ml-1">{stat.label}</span>
              </h4>
              <p className="text-gray-400 text-xs mt-1">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
