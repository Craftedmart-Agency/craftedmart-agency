import Image from "next/image";
import case1 from "@/assets/Case-Study-1.jpg";
import case2 from "@/assets/Case-Study-2.jpg";
import case3 from "@/assets/Case-Study-3.jpg";
import case4 from "@/assets/Case-Study-4.jpg";
import Button from "./shared/Button";

const caseStudies = [
  {
    category: "Cloud Hosting",
    title: "Reliable & Scalable",
    description:
      "Our cloud hosting solutions provide secure, fast, and scalable infrastructure to keep your business online 24/7. Enjoy flexibility, high performance, and cost efficiency for all your web applications.",
    image: case1, // replace with your image
    link: "#",
  },
  {
    category: "Data Analytics",
    title: "Smarter Decisions with Data",
    description:
      "Unlock the power of data with our advanced analytics solutions. We help you turn raw data into actionable insights, empowering smarter decisions and sustainable business growth.",
    image: case2,
    link: "#",
  },
  {
    category: "Digital Marketing",
    title: "Grow Your Brand Online",
    description:
      "From SEO to social media campaigns, we craft digital strategies that connect your brand with the right audience. Our solutions are designed to increase visibility, engagement, and conversions.",
    image: case3,
    link: "#",
  },
  {
    category: "Seo Optimization",
    title: "Future-Ready Infrastructure",
    description:
      "Our SEO strategies help your business rank higher on search engines, driving organic traffic and building long-term credibility.",
    image: case4,
    link: "#",
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-[#0a0a0d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
          <span className="opacity-20 block text-5xl md:text-7xl lg:text-9xl -mb-10 md:-mb-12 text-slate-600">Case Study</span>
          Case Study</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            {caseStudies.slice(0, 2).map((item, i) => (
              <div key={i}>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-teal-400 uppercase text-sm font-semibold">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-3 inline-block text-teal-400 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {caseStudies.slice(2, 4).map((item, i) => (
              <div key={i}>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-teal-400 uppercase text-sm font-semibold">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-3 inline-block text-teal-400 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <Button text="View All"/>
        </div>
      </div>
    </section>
  );
}
