"use client";

import Link from "next/link";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  glowColor: string;
}

const services: Service[] = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Creating high-performance websites tailored to your business needs.",
    icon: <FaCode />,
    href: "/services/web-development",
    glowColor: "from-blue-600/60",
  },
  {
    id: "02",
    title: "Digital Marketing",
    description:
      "Promoting your brand through search engines and social media.",
    icon: <FaCloud />,
    href: "/services/digital-marketing",
    glowColor: "from-rose-600/60",
  },
  {
    id: "03",
    title: "Cloud Solution",
    description: "Scale your business with secure cloud infrastructure.",
    icon: <FaCloudUploadAlt />,
    href: "/services/cloud-solution",
    glowColor: "from-sky-600/60",
  },
  {
    id: "04",
    title: "Cyber Security",
    description:
      "Protecting your digital assets with advanced security protocols.",
    icon: <FaShieldAlt />,
    href: "/services/cyber-security",
    glowColor: "from-teal-600/60",
  },
  {
    id: "05",
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights.",
    icon: <FaChartBar />,
    href: "/services/data-analytics",
    glowColor: "from-emerald-600/60",
  },
];

const ServiceCard = ({
  service,
  index,
  progress,
  range,
  targetScale,
}: {
  service: Service;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef(null);

  // Stacking & Scale
  const scale = useTransform(progress, range, [1, targetScale]);
  const yParallax = useTransform(progress, range, [0, -20]);

  // --- SCROLL DRIVEN COLOR LOGIC ---
  // Range-er start theke ektu age shuru hobe ebong pore shesh hobe
  const startTrigger = range[0];
  const endTrigger = range[0] + 0.15; // Animation duration on scroll

  // Glow Opacity: Scroll korle 0 theke 1 hobe
  const glowOpacity = useTransform(
    progress,
    [startTrigger - 0.05, startTrigger, endTrigger],
    [0, 1, 1],
  );

  // Title Color: Scroll korle Gray theke Teal hobe
  const titleColor = useTransform(
    progress,
    [startTrigger - 0.05, startTrigger, endTrigger],
    ["#ffffff", "#2dd4bf", "#2dd4bf"], // White -> Teal
  );

  return (
    <div
      ref={container}
      className="h-[50vh] md:h-[60vh] flex items-center justify-center sticky top-12 px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5% + ${index * 20}px)`,
        }}
        className="group relative h-[380px] md:h-[450px] w-full max-w-[800px] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-800 flex flex-col justify-between shadow-2xl overflow-hidden bg-[#111113]"
      >
        {/* Glow - Now driven by scroll opacity */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className={`absolute inset-0 bg-gradient-to-br ${service.glowColor} to-transparent pointer-events-none transition-all duration-700`}
        />

        {/* Top Section */}
        <div className="flex justify-between items-start relative z-10">
          <span className="text-3xl md:text-5xl font-bold text-teal-500/20">
            {service.id}
          </span>
          <div className="text-teal-400 text-3xl md:text-5xl">
            {service.icon}
          </div>
        </div>

        {/* Text Section with Parallax */}
        <motion.div
          style={{ y: yParallax }}
          className="mt-4 md:mt-0 relative z-10"
        >
          {/* Title Color - Now driven by scroll */}
          <motion.h3
            style={{ color: titleColor }}
            className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 transition-colors duration-500"
          >
            {service.title}
          </motion.h3>
          <p className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Button Section */}
        <div className="relative z-10">
          <Link
            href={service.href}
            className="w-fit mt-4 md:mt-0 px-5 py-2 md:px-6 md:py-3 rounded-full border border-teal-500/50 text-teal-400 text-xs md:text-sm font-bold transition-all uppercase tracking-wider hover:bg-teal-400 hover:text-black hover:shadow-lg hover:shadow-teal-400/20"
          >
            View Service →
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="bg-[#0b0b0b] text-white">
      <div className="py-12 md:py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-6xl font-bold">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">
            Scroll to explore our specialized IT solutions
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto pb-[10vh]">
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;
          // Exact point where card becomes active
          const rangeStart = i * (1 / services.length);

          return (
            <ServiceCard
              key={service.id}
              index={i}
              service={service}
              progress={scrollYProgress}
              range={[rangeStart, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
