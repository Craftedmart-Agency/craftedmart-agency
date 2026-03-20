import { BsArrowUpRight } from "react-icons/bs";
import contactcircle from "@/assets/contactcircle.jpg";
import Link from "next/link";

export default function ContactCircle() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${contactcircle.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Large faded text */}
      <div className="absolute top-1/4 flex items-center justify-center">
        <h1 className="font-extrabold tracking-widest uppercase opacity-40 select-none text-center text-3xl md:text-5xl lg:text-7xl leading-tight text-white">
          WE TAKE CARE OF YOUR DREAM, SO YOU CAN FOCUS
        </h1>
      </div>

      {/* Responsive Circle Button */}
      <Link
        href="/#contactme"
        className="relative group z-10 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 text-white shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 hover:bg-teal-400"
      >
        <span className="text-sm sm:text-base md:text-2xl font-semibold">Contact</span>
        <span className="text-sm sm:text-base md:text-2xl font-semibold">With Us.</span>
        <BsArrowUpRight className="mt-1 sm:mt-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:rotate-135 text-teal-400 hover:text-2xl" />
      </Link>
    </section>
  );
}
