import { FiArrowRight } from "react-icons/fi";

const Choose = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10">
        
        <div>
          <p className="text-teal-400 mb-2">--Why Choose Us</p>
          <h2 className="font-bold text-2xl md:text-5xl">
            Unlock The Potential <br /> Of Your Business.
          </h2>
        </div>

        {/* Replaced Image with Video */}
        <div className="md:w-[500px]">
          <video
            src="/landingpage.mp4"
            width="500"
            height="300"
            className="w-full rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      <div className="bg-[#0e0e0e] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Card */}
          <div className="bg-[#111] p-6 md:p-10 lg:p-16 relative rounded-lg border border-gray-800 overflow-hidden h-[400px]">
            {/* Top right decorative box */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-900 opacity-40"></div>

            {/* Logo & Heading */}
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-teal-400 mr-1">●</span> Crafted M<span className="text-rose-500">a</span>rt Agency
            </h2>
            <h3 className="mt-6 text-lg font-semibold">
              Best Creative IT Agency And Solutions{" "}
              <span className="text-teal-400">Since 2020.</span>
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              We believe in creating strategies that adapt to your business
              needs. With the right balance of creativity and performance, we
              help you unlock new opportunities and build lasting success.
            </p>

            {/* Bottom left decoration */}
            <div className="absolute bottom-4 left-4 text-5xl font-bold text-gray-700 opacity-20">
              #1
            </div>

            {/* Button */}
            <button className="absolute bottom-4 right-4 flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-full text-sm hover:bg-teal-400 hover:text-black transition">
              About More <FiArrowRight />
            </button>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Strategy",
                description:
                  "We focus on building clear strategies that align with your goals. Every step is designed to maximize growth, efficiency, and long-term success.",
                perRate: "99",
              },
              {
                title: "Audience",
                description:
                  "Understanding your audience is at the heart of every business. We help you connect, engage, and build trust with the right people.",
                perRate: "85",
              },
              {
                title: "Keyword",
                description:
                  "Smart keyword planning ensures your brand gets discovered. We create optimized solutions that boost visibility and bring measurable results.",
                perRate: "90",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                {/* Circle Percentage */}
                <div className="px-5 py-6 text-teal-400 rounded-full border-2 border-gray-700 flex items-center justify-center text-sm font-bold">
                  {item.perRate}%
                </div>
                {/* Text */}
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
