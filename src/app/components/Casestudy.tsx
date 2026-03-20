"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import case1 from "@/assets/Case-Study-1.jpg";
import case2 from "@/assets/Case-Study-2.jpg";
import case3 from "@/assets/Case-Study-3.jpg";
import case4 from "@/assets/Case-Study-4.jpg";
import Button from "./shared/Button";

// Case Study Data Interface
interface CaseStudyItem {
  category: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any; // StaticImageData use kora bhalo jodi asset import kora thake
  link: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    category: "Cloud Hosting",
    title: "Reliable & Scalable",
    description:
      "Our cloud hosting solutions provide secure, fast, and scalable infrastructure to keep your business online 24/7.",
    image: case1,
    link: "#",
  },
  {
    category: "Data Analytics",
    title: "Smarter Decisions with Data",
    description:
      "Unlock the power of data with our advanced analytics solutions. We help you turn raw data into actionable insights.",
    image: case2,
    link: "#",
  },
  {
    category: "Digital Marketing",
    title: "Grow Your Brand Online",
    description:
      "From SEO to social media campaigns, we craft digital strategies that connect your brand with the right audience.",
    image: case3,
    link: "#",
  },
  {
    category: "Seo Optimization",
    title: "Future-Ready Infrastructure",
    description:
      "Our SEO strategies help your business rank higher on search engines, driving organic traffic.",
    image: case4,
    link: "#",
  },
];

// Correctly Typed Variants for ESLint
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function CaseStudy() {
  return (
    <section className="bg-[#0a0a0d] text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Main Heading */}
        <div className="relative text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            viewport={{ once: true }}
            className="block text-5xl md:text-7xl lg:text-9xl -mb-10 md:-mb-12 text-slate-500 font-bold select-none pointer-events-none"
          >
            Case Study
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold relative z-10"
          >
            Case Study
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {[caseStudies.slice(0, 2), caseStudies.slice(2, 4)].map(
            (column, colIdx) => (
              <motion.div
                key={`col-${colIdx}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-12 md:gap-20"
              >
                {column.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={titleVariants}
                    className="group"
                  >
                    {/* Image with Hover Effect */}
                    <div className="relative w-full h-64 md:h-80 mb-6 overflow-hidden rounded-xl bg-gray-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>

                    {/* Category */}
                    <p className="text-teal-400 uppercase text-xs md:text-sm font-bold tracking-widest mb-2">
                      {item.category}
                    </p>

                    {/* Animated Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mt-1 group-hover:text-teal-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    <Link
                      href={item.link}
                      className="mt-6 inline-flex items-center gap-2 text-white font-bold text-sm hover:text-teal-400 transition-all group/link"
                    >
                      Learn More
                      <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ),
          )}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button text="View All" />
        </motion.div>
      </div>
    </section>
  );
}
