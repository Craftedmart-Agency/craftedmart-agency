"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";



const categories = [
  "All",
  "E-commerce",
  "Personal & Portfolio",
  "Travel & Tourism",
  "News & Media",
  "Food & Restaurant",
  "Real Estate",
  "Health & Fitness",
  "Event & Wedding",
  "Education",
  "Fashion & Lifestyle",
];

export const projects: Project[] = [
  // --- Travel & Tourism ---
  { id: 26, category: "Travel & Tourism", title: "Travel Agency Website", image: "/travel.png", link: "https://p.w3layouts.com/demos_new/template_demo/05-02-2022/tours-liberty-demo_Free/1559675193/web/index.html" },
  { id: 27, category: "Travel & Tourism", title: "Tour Booking Platform", image: "/travel2.png", link: "https://p.w3layouts.com/demos_new/template_demo/16-03-2019/adventure-demo_Free/555638781/web/index.html" },
  { id: 28, category: "Travel & Tourism", title: "Hotel & Accommodation Portal", image: "/travel3.png", link: "https://p.w3layouts.com/demosWTR/Freedom/12-03-2021/travelling-freedom-demo_Free/552200862/web/index.html" },
  { id: 29, category: "Travel & Tourism", title: "Adventure Travel Blog", image: "/travel4.png", link: "https://p.w3layouts.com/demosWTR/Freedom/12-02-2020/haven-freedom-demo_Free/1505901166/web/index.html" },
  { id: 30, category: "Travel & Tourism", title: "Flight Booking System", image: "/travel5.png", link: "https://p.w3layouts.com/demos_new/template_demo/21-06-2019/trip_spot-demo_Free/1791839712/web/index.html" },

  // --- E-commerce ---
  { id: 1, category: "E-commerce", title: "Online Store Platform", image: "/ecom.png", link: "https://p.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/index.html" },
  { id: 2, category: "E-commerce", title: "Mobile Shopping App", image: "/ecom2.png", link: "https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/index.html" },
  { id: 3, category: "E-commerce", title: "Product Catalog Website", image: "/ecom3.png", link: "https://p.w3layouts.com/demos_new/template_demo/06-02-2018/downy_shoes-demo_Free/115804702/web/index.html" },
  { id: 4, category: "E-commerce", title: "Multi-Vendor Marketplace", image: "/ecom4.png", link: "https://p.w3layouts.com/demos/n_air/web/index.html" },
  { id: 5, category: "E-commerce", title: "Subscription Box Service", image: "/ecom5.png", link: "https://p.w3layouts.com/demos/nuevo_shop/web/index.html" },

  // --- Food & Restaurant ---
  { id: 21, category: "Food & Restaurant", title: "Restaurant Menu & Ordering", image: "/rest.png", link: "https://wp.w3layouts.com/cooking/" },
  { id: 22, category: "Food & Restaurant", title: "Food Delivery App", image: "/rest2.png", link: "https://p.w3layouts.com/demos_new/template_demo/30-04-2020/cutlery-libearty-demo_Free/492116884/web/index.html" },
  { id: 23, category: "Food & Restaurant", title: "Cafe & Bistro Website", image: "/rest3.png", link: "https://p.w3layouts.com/demos_new/template_demo/09-10-2018/cookie-demo_Free/1136721386/web/index.html" },
  { id: 24, category: "Food & Restaurant", title: "Recipe Blog", image: "/rest4.png", link: "https://p.w3layouts.com/demos_new/template_demo/23-01-2019/sapid-demo_Free/762453018/web/index.html" },
  { id: 25, category: "Food & Restaurant", title: "Catering Service Portal", image: "/rest5.png", link: "https://p.w3layouts.com/demos_new/template_demo/31-01-2019/humburger_demo_Free/876184629/web/index.html" },

  // --- Real Estate ---
  { id: 31, category: "Real Estate", title: "Property Listing Website", image: "/real.png", link: "https://p.w3layouts.com/demos_new/template_demo/30-03-2020/dweller-liberty-demo_Free/2127094933/web/index.html" },
  { id: 32, category: "Real Estate", title: "Real Estate Mobile App", image: "/real2.png", link: "https://p.w3layouts.com/demosWTR/Freedom/07-04-2020/tenant-freedom-demo_Free/421164263/web/index.html" },
  { id: 33, category: "Real Estate", title: "Rental Management System", image: "/real3.png", link: "https://p.w3layouts.com/demosWTR/Freedom/12-02-2020/estate_property-freedom-demo_Free/200993729/web/index.html" },
  { id: 34, category: "Real Estate", title: "Property Investment Portal", image: "/real4.png", link: "https://p.w3layouts.com/demos_new/template_demo/27-05-2019/land-demo_Free/568639772/web/index.html" },
  { id: 35, category: "Real Estate", title: "Luxury Home Showcase", image: "/real5.png", link: "https://p.w3layouts.com/demos_new/template_demo/01-09-2020/homish-liberty-demo_Free/682232908/web/index.html" },

  // --- Health & Fitness ---
  { id: 36, category: "Health & Fitness", title: "Gym Management Website", image: "/fit.png", link: "https://p.w3layouts.com/demos_new/template_demo/12-09-2020/prowess-lift-liberty-demo_Free/1637155844/web/index.html" },
  { id: 37, category: "Health & Fitness", title: "Clinic Appointment System", image: "/fit2.png", link: "https://p.w3layouts.com/demos_new/template_demo/08-11-2018/skater-demo_Free/1729645479/web/home.html" },
  { id: 38, category: "Health & Fitness", title: "Wellness Blog", image: "/fit3.png", link: "https://p.w3layouts.com/demos_new/template_demo/06-02-2019/vigour-demo_Free/2563026/web/index.html" },
  { id: 39, category: "Health & Fitness", title: "Nutrition & Diet Planner", image: "/fit4.png", link: "https://p.w3layouts.com/demosWTR/Freedom/07-12-2019/apt-pro_freedom-demo_Free/600935710/web/index.html" },
  { id: 40, category: "Health & Fitness", title: "Yoga & Fitness Portal", image: "/fit5.png", link: "https://p.w3layouts.com/demos_new/16-03-2017/gym_workout-demo_Free/1337340590/web/index.html" },

  // --- Education ---
  { id: 6, category: "Education", title: "E-learning Portal", image: "/edu.png", link: "https://p.w3layouts.com/demos_new/template_demo/13-07-2021/edukator-liberty-demo_Free/199581931/web/index.html" },
  { id: 7, category: "Education", title: "School Management System", image: "/edu2.png", link: "https://p.w3layouts.com/demos_new/template_demo/06-09-2020/tutee-liberty-demo_Free/448738053/web/index.html" },
  { id: 8, category: "Education", title: "Online Course Platform", image: "/edu3.png", link: "https://wp.w3layouts.com/eduschool/" },
  { id: 9, category: "Education", title: "University Website", image: "/edu4.png", link: "https://wp.w3layouts.com/digitaledu/" },
  { id: 10, category: "Education", title: "Coaching Center Portal", image: "/edu5.png", link: "https://p.w3layouts.com/demos_new/template_demo/13-03-2021/studious-liberty-demo_Free/425342591/web/index.html" },

  // --- Personal & Portfolio ---
  { id: 11, category: "Personal & Portfolio", title: "Photographer Portfolio", image: "/port.png", link: "https://p.w3layouts.com/demos_new/template_demo/20-05-2022/ui-portfolio-liberty-demo_Free/329622162/web/index.html" },
  { id: 12, category: "Personal & Portfolio", title: "Designer Portfolio Website", image: "/port2.png", link: "https://wp.w3layouts.com/reprise/" },
  { id: 13, category: "Personal & Portfolio", title: "Freelancer Resume Site", image: "/port3.png", link: "https://wp.w3layouts.com/iportfolio/" },
  { id: 14, category: "Personal & Portfolio", title: "Creative Artist Showcase", image: "/port4.png", link: "https://wp.w3layouts.com/alexander/" },
  { id: 15, category: "Personal & Portfolio", title: "Writer Personal Blog", image: "/port5.png", link: "https://p.w3layouts.com/demosWTR/Freedom/30-01-2020/weird-freedom-demo_Free/433096426/web/index.html" },

  // --- Event & Wedding ---
  { id: 41, category: "Event & Wedding", title: "Wedding Planner Platform", image: "/event.png", link: "https://p.w3layouts.com/demos_new/03-01-2017/event_planner-demo_Free/527390389/web/index.html" },
  { id: 42, category: "Event & Wedding", title: "Event Booking System", image: "/event2.png", link: "https://p.w3layouts.com/demos_new/template_demo/07-06-2017/events_planning-demo_Free/494481835/web/index.html" },
  { id: 43, category: "Event & Wedding", title: "Party & Event Management", image: "/event3.png", link: "https://p.w3layouts.com/demos_new/template_demo/28-04-2017/wedding_plan-demo_Free/1112940386/web/index.html" },
  { id: 44, category: "Event & Wedding", title: "Conference & Meetup Portal", image: "/event4.png", link: "https://p.w3layouts.com/demos_new/template_demo/20-04-2018/marry_off-demo_Free/1494624080/web/index.html" },
  { id: 45, category: "Event & Wedding", title: "Festival & Celebration Hub", image: "/event5.png", link: "https://p.w3layouts.com/demos_new/template_demo/06-10-2017/wedding_ceremony-demo_Free/381994327/web/index.html" },

  // --- News & Media ---
  { id: 16, category: "News & Media", title: "Online Newspaper", image: "/news.png", link: "https://p.w3layouts.com/demos/june-2016/13-06-2016/mild_skate/web/" },
  { id: 17, category: "News & Media", title: "Magazine Blog Platform", image: "/news2.png", link: "https://p.w3layouts.com/demos/may-2016/13-05-2016/spicy_center/web/" },
  { id: 18, category: "News & Media", title: "Local News Portal", image: "/news3.png", link: "https://p.w3layouts.com/demos/may-2016/10-05-2016/expert/web/index.html" },
  { id: 19, category: "News & Media", title: "Video News Channel", image: "/news4.png", link: "https://p.w3layouts.com/demos_new/01-02-2017/fashionable-demo_Free/424976699/web/index.html" },
  { id: 20, category: "News & Media", title: "Entertainment News Hub", image: "/news5.png", link: "https://p.w3layouts.com/demos/sep-2016/15-09-2016/music_events/web/" },

  // --- Fashion & Lifestyle ---
  { id: 46, category: "Fashion & Lifestyle", title: "Fashion Blog Website", image: "/fashion.png", link: "https://p.w3layouts.com/demos_new/template_demo/05-08-2021/passionkraft-liberty-demo_Free/1569724271/web/index.html" },
  { id: 47, category: "Fashion & Lifestyle", title: "Lifestyle Influencer Portfolio", image: "/fashion2.png", link: "https://p.w3layouts.com/demos_new/template_demo/22-10-2018/sparkle-demo_Free/600246716/web/index.html" },
  { id: 48, category: "Fashion & Lifestyle", title: "Online Fashion Store", image: "/fashion3.png", link: "https://wp.w3layouts.com/atelier/" },
  { id: 49, category: "Fashion & Lifestyle", title: "Beauty & Makeup Blog", image: "/fashion4.png", link: "https://p.w3layouts.com/demosWTR/Freedom/02-01-2020/trend-freedom-demo_Free/792695715/web/index.html" },
  { id: 50, category: "Fashion & Lifestyle", title: "Trend & Style Magazine", image: "/fashion5.png", link: "https://p.w3layouts.com/demos_new/template_demo/31-05-2019/fashion_mantra-demo_Free/1818597229/web/index.html" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Travel & Tourism");
const gridRef = useRef<HTMLDivElement | null>(null);
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

       // Scroll down when category changes
 // 1. Prothome ekta ref nite hobe track korar jonne
const isFirstRender = useRef(true);

useEffect(() => {
  // 2. Jodi prothom bar render hoy, tobe kichu korbe na
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}, [activeCategory]); // Shudhu category change holei kaj korbe


  return (
    <section className="text-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-5 py-2 text-[10px] md:text-sm lg:text-base rounded-full cursor-pointer transition-colors ${
                activeCategory === cat
                  ? "bg-teal-400 text-black font-bold"
                  : "bg-gray-950 hover:bg-teal-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid with Animation */}
        <motion.div
        ref={gridRef}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/websites/${project.id}`}
                  className="group relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:opacity-80 transition"
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent w-full">
                    <h3 className="text-base md:text-lg font-bold">{project.title}</h3>
                    <p className="text-xs md:text-sm text-teal-400">{project.category}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
