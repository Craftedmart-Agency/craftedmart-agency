import { FaSearch, FaFacebookF, FaPenFancy, FaEnvelope, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { FcAdvertising } from "react-icons/fc";

const services = [
  {
    icon: <FaPenFancy className="text-4xl text-blue-700" />,
    title: "Logo Design",
    description: "Creative logo design solutions to build your brand identity.",
    link: "/digital-marketing/logo-design"
  },
  {
    icon: <FaSearch className="text-4xl text-teal-600" />,
    title: "SEO",
    description: "Boost your website ranking and visibility with expert SEO strategies."
  },
  {
    icon: <FaFacebookF className="text-4xl text-blue-500" />,
    title: "Social Media Marketing",
    description: "Engage your audience and grow your brand on social platforms."
  },
  {
    icon: <FcAdvertising className="text-4xl text-pink-500" />,
    title: "Content Marketing",
    description: "Drive traffic and conversions with compelling content marketing."
  },
  {
    icon: <FaEnvelope className="text-4xl text-yellow-500" />,
    title: "Email Marketing",
    description: "Reach your customers directly with targeted email campaigns."
  },
  {
    icon: <FaGoogle className="text-4xl text-red-500" />,
    title: "PPC Ads",
    description: "Maximize ROI with data-driven pay-per-click advertising."
  }
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-green-600 mb-4 lg:mb-8 drop-shadow-lg">Digital Marketing Services</h1>
  <p className="text-lg text-gray-500">Grow your business online with our comprehensive digital marketing solutions tailored to your brand&apos;s needs.</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        {services.map((service, idx) => (
          service.link ? (
            <Link href={service.link} key={idx}>
              <div className="bg-gradient-to-br from-green-100 via-white to-green-300 glass rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center flex-1">{service.description}</p>
              </div>
            </Link>
          ) : (
            <div key={idx} className="bg-gradient-to-br from-green-100 via-white to-green-300 glass rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </div>
          )
        ))}
      </section>
      <Link href="/contact" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-800 transition-colors text-lg">
        Get Started
      </Link>
    </div>
  );
}
