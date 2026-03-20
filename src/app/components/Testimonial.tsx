"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    comment:
      "This team delivered exactly what we needed. Professional, responsive, and talented.",
    rating: 5,
  },
  {
    id: 2,
    name: "Liam Johnson",
    comment:
      "Excellent service and quick turnaround. They understood our needs perfectly well.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Olivia Martinez",
    comment:
      "The project exceeded expectations! Great communication and smooth process overall.",
    rating: 5,
  },
  {
    id: 4,
    name: "Noah Brown",
    comment:
      "Very happy with the outcome. They handled revisions quickly and professionally.",
    rating: 4,
  },
  {
    id: 5,
    name: "Ava Wilson",
    comment:
      "Attention to detail was impressive. I would definitely recommend them to others.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ethan Davis",
    comment:
      "Fast, reliable, and creative work. They brought our vision to life beautifully.",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Isabella Thompson",
    comment:
      "The design was stunning and the functionality worked flawlessly from day one.",
    rating: 5,
  },
  {
    id: 8,
    name: "Mason Garcia",
    comment:
      "Good overall experience, though the project could have been finished a bit faster.",
    rating: 4,
  },
  {
    id: 9,
    name: "Mia Anderson",
    comment:
      "They really care about client satisfaction. Every single detail was done perfectly.",
    rating: 5,
  },
  {
    id: 10,
    name: "James Lee",
    comment:
      "Professional and skilled team. I look forward to working with them again soon.",
    rating: 4.5,
  },
];


export default function Testimonial() {
    const myStyles = {
    itemShapes: Star, // ✅ Use Star shape from library
    activeFillColor: "#22c55e", // green
    inactiveFillColor: "#d1d5db", // gray
  };

  return (
    <div className="my-10 md:mx-28">
      <div>
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-16">
          <span className="opacity-20 block text-5xl md:text-7xl lg:text-9xl -mb-10 md:-mb-12 text-slate-400">Approciations</span>
          Approciations</h3>
      </div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {testimonials.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="bg-slate-900 h-[250px] text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-4">
              <FaQuoteLeft className="text-4xl md:text-5xl text-teal-300" />
              <Rating
                style={{ maxWidth: 100 }}
                value={data.rating}
                readOnly
                itemStyles={myStyles}
              />
              <p className="text-sm ">{data.comment}</p>
              <h5 className="font-semibold text-yellow-300">{data.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
