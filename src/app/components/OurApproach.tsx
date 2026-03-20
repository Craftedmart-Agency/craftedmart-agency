// components/OurApproach.tsx
import Image from "next/image";
import Img1 from "@/assets/about-1.jpg"
import Img2 from "@/assets/about-2.jpg"

export default function OurApproach() {
  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Our Approach</h2>
          <p className="text-gray-400 max-w-3xl">
            Services are professional offerings provided by businesses to meet
            specific needs or solve problems for their customers. Services can
            range from your budget.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="border border-green-900 p-1">
            <Image
              src={Img2} // replace with your image path
              alt="Team meeting"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Middle Text */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4">
              Unlock The Potential Of Your Business.
            </h3>
            <p className="text-gray-400 mb-6">
              We believe in delivering tailored solutions that are designed to
              address your unique requirements. We take the time to understand
              your business and provide personalized services that align with
              your goals.
            </p>

            {/* Features */}
            
                <div className="flex items-center justify-center gap-5">
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mb-2"></div>
                <h4 className="font-bold text-sm mb-1">Customized Solutions</h4>
                <p className="text-gray-400 text-sm text-center">
                  Tailored services to fit your business needs perfectly.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mb-2"></div>
                <h4 className="font-bold text-sm mb-1">Quality Reliability</h4>
                <p className="text-gray-400 text-sm text-center">
                  Dependable results delivered with excellence.
                </p>
              </div>
            </div>
            
          </div>

          {/* Right Images + Badge */}
          <div className="flex flex-col items-center gap-6">
            <div className="border border-green-900 p-1">
              <Image
                src={Img1}// replace with your image path
                alt="Team collaboration"
                width={200}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Badge */}
            <div className="w-40 h-40 rounded-full bg-teal-500 flex flex-col items-center justify-center text-black font-bold text-center relative mt-10 md:pt-0">
              <span className="text-4xl">6</span>
              <span className="text-lg">Years</span>
              {/* Optional surrounding text effect */}
              <div className="absolute inset-0 flex items-center justify-center text-xs text-teal-900 opacity-50 rotate-[20deg]">
                # WE PROVIDED IT SERVICES #
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
