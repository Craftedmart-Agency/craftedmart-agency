"use client"

import Image from "next/image";
import React from "react";

const logoImages = [
  ...Array.from({ length: 55 }, (_, i) => `/logos/${i + 1}.png`)
];

export default function LogoDesignGallery() {
  React.useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("selectstart", preventDefault);
    document.addEventListener("dragstart", preventDefault);
    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("selectstart", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 py-16 px-4 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-green-600 mb-4 lg:mb-8 drop-shadow-lg">Logo Design Gallery</h1>
       <p className="mb-4 text-lg">
  Explore CraftedMart Agency’s premium logo designs. <br /> Each design is protected with a watermark and displayed in modern glassmorphism cards.
</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {logoImages.map((img, idx) => (
          <div
            key={idx}
            id={`logo-card-${idx}`}
            className="relative rounded-2xl shadow-2xl bg-white/40 backdrop-blur-lg border border-green-200 p-6 flex items-center justify-center group hover:scale-105 hover:bg-gradient-to-br hover:from-green-200 hover:to-green-100 transition-all duration-300"
            style={{ minHeight: 240 }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-10" style={{background: "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(255,255,255,0.3) 100%)"}} />
            <Image
              src={img}
              alt={img}
              width={180}
              height={180}
              className="rounded-xl select-none pointer-events-none border-2 border-green-300 group-hover:border-teal-400 transition-all duration-300 z-20"
              draggable={false}
              loading="lazy"
            />
            <span className="absolute top-4 left-4 bg-green-600 bg-opacity-80 text-xs font-bold text-white px-2 py-1 rounded select-none pointer-events-none z-30 shadow-lg" style={{userSelect: 'none'}}>
              ID: {`FDR-${idx}`}
            </span>
            
          </div>
        ))}
      </div>
    </div>
  );
}
