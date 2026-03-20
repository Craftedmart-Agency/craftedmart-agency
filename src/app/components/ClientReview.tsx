"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import test1 from "@/assets/testi-01.png";
import test2 from "@/assets/testi-02.png";
import test3 from "@/assets/testi-03.png";
import google from "@/assets/google.svg";;
import trust from "@/assets/trustpilot.svg";
import yelp from "@/assets/yelp-184-svgrepo-com.svg";
import fiverr from "@/assets/fiverr-svgrepo-com.svg";
import upwork from "@/assets/upwork-svgrepo-com.svg";
import linkedin from "@/assets/linkedin-svgrepo-com.svg";
import facebook from "@/assets/facebook-like-2-svgrepo-com.svg";

const testimonials = [
  {
    id: 1,
    platform: "Trustpilot",
    platformLogo: trust,
    rating: 5,
    comment:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Praesent nec neque at dolor venenatis consectetur.",
    name: "Colton Roman",
    title: "CEO At powogaz.com",
    avatar: test1,
  },
  {
    id: 2,
    platform: "Google",
    platformLogo: google,
    rating: 4.5,
    comment:
      "Praesent nec neque at dolor venenatis consectetur. Donec lacinia placerat felis non aliquam.",
    name: "Mateo Daniel",
    title: "CEO At atlantis.com",
    avatar: test2,
  },
  {
    id: 3,
    platform: "Yelp",
    platformLogo: yelp,
    rating: 5,
    comment:
      "Excellent communication and attention to detail. They went above and beyond to deliver.",
    name: "Samantha Lee",
    title: "Founder At designco.com",
    avatar: test3,
  },
  {
    id: 4,
    platform: "Facebook",
    platformLogo: facebook,
    rating: 4,
    comment:
      "The project was delivered on time and the quality was impressive. Will hire again.",
    name: "Michael Carter",
    title: "CTO At websolutions.io",
    avatar: test1,
  },
  {
    id: 5,
    platform: "LinkedIn",
    platformLogo: linkedin,
    rating: 5,
    comment:
      "They understood our needs perfectly and created something truly amazing.",
    name: "Emily Johnson",
    title: "Marketing Head At visionmedia.com",
    avatar: test2,
  },
  {
    id: 6,
    platform: "Upwork",
    platformLogo: upwork,
    rating: 4.5,
    comment:
      "Great collaboration from start to finish. Would recommend to anyone.",
    name: "David Smith",
    title: "Freelancer",
    avatar: test3,
  },
  {
    id: 7,
    platform: "Fiverr",
    platformLogo: fiverr,
    rating: 5,
    comment:
      "Everything was smooth and easy. Fantastic results, exactly what I wanted.",
    name: "Jessica Brown",
    title: "Entrepreneur",
    avatar: test1,
  },
];

export default function ClientReview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5">Happy Customers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Services are professional offerings provided by businesses to meet
            specific needs or solve problems for their customers.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          navigation={false}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 text-white flex flex-col justify-between min-h-[280px]">
                {/* Platform */}
                <div className="flex items-center gap-2 mb-4 text-rose-400">
                  {t.platformLogo && (
                    <Image
                      src={t.platformLogo}
                      alt={t.platform}
                      width={24}
                      height={24}
                    />
                  )}
                  <span className="font-semibold">{t.platform}</span>
                  <div className="ml-auto flex gap-1">
                    {[...Array(Math.floor(t.rating))].map((_, i) => (
                      <span key={i} className="text-teal-400">★</span>
                    ))}
                    {t.rating % 1 !== 0 && (
                      <span className="text-teal-400">☆</span>
                    )}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-4">{t.comment}</p>

                {/* Author */}
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-teal-400 text-sm">{t.title}</p>
                </div>

                {/* Avatar circle outside card */}
                <div className="absolute bottom-3 right-5  w-16 h-16 rounded-full overflow-hidden border-4 border-black shadow-lg">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
}
