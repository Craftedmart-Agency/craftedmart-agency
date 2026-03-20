
import Image from "next/image";
import Link from "next/link";
import Aboutbanner from "@/assets/breadcrumb-right-img.png"

export default function BannerTitle({title}:{title: string}) {
  return (
    <section className="relative w-full bg-gradient-to-l from-gray-800 to-black text-white py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs">
          <Link href="/" className="text-teal-400 hover:underline">
            Home
          </Link>
          <span className="text-white">→</span>
          <span className="text-gray-300">{title}</span>
        </div>
      </div>

      {/* Image on right side */}
      <div className="absolute bottom-0 right-12 hidden md:block">
        <div className="overflow-hidden rounded-t-full w-60 h-48 shadow-lg">
          <Image
            src={Aboutbanner} // Replace with your image path
            alt="Office"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Optional subtle grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </section>
  );
}
