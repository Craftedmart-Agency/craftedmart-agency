import { Check } from "lucide-react";

const packages = [
  {
    badge: "Basic",
    name: "Starter Web Pack",
    price: "৳৯,৯৯৯",
    gradient: "from-[#45CAFF] to-[#0147FF]",
    buttonText: "Get Started",
    buttonBg: "bg-[#111827]",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "Up to 5 dynamic pages",
      "5 GB SSD Hosting",
      "Basic shopping cart & checkout",
      "Basic Post-sales support : 1 month",
      "Development timeline: 7-10 days",
    ],
  },
  {
    badge: "Most Popular",
    isPopular: true,
    name: "Growth & Business Pack",
    price: "৳১৪,৯৯৯",
    gradient: "from-[#575757] to-[#111111]",
    buttonText: "Upgrade Now",
    buttonBg: "bg-[#45CAFF]",
    buttonTextColor: "text-black",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "Up to 10 dynamic pages",
      "10 GB SSD Hosting",
      "Shopping cart with shipping option",
      "Payment intregration",
      "Development timeline: 12-15 days",
    ],
  },
  {
    badge: "Premium",
    name: "Pro For Corporate",
    price: "৳২৯,৯৯৯",
    gradient: "from-[#FF97C1] to-[#FF61A6]",
    buttonText: "Choose Plan",
    buttonBg: "bg-[#111827]",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "Up to 15 dynamic pages",
      "20 GB SSD Hosting",
      "Advanced Ecommerce Features",
      "Auto Generated Invoices",
      "Orders Management & Reports",
      "Development timeline: 15-30 days",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="bg-black pb-20 px-4 min-h-screen ">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 text-white uppercase tracking-wider">
        Pricing & Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative rounded-[30px] p-[2px] transition-transform hover:scale-105 ${
              pkg.isPopular ? "md:-mt-4 md:mb-4" : ""
            }`}
          >
            {/* Main Card Container */}
            <div
              className={`h-full rounded-[28px] flex flex-col p-8 text-white bg-gradient-to-b ${pkg.gradient}`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className={`px-6 py-1 rounded-full text-sm font-bold text-white bg-[#0B1120] border border-gray-700 flex items-center gap-1`}
                >
                  {pkg.badge}
                  {pkg.isPopular && <span className="text-teal-400">★</span>}
                </span>
              </div>

              {/* Header */}
              <div className="mb-8 mt-4">
                <h3 className="text-3xl font-bold leading-tight min-h-[70px]">
                  {pkg.name}
                </h3>
                <div className="w-full h-[1px] bg-white/30 my-6"></div>
                <p className="text-lg font-semibold mb-4">Services</p>
              </div>

              {/* Features list */}
              <div className="flex-grow space-y-4">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-0.5 mt-1">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium opacity-90 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price & Button */}
              <div className="mt-10">
                <p className="text-xs opacity-80 mb-1">Price</p>
                <p className="text-4xl font-black mb-6 tracking-tighter">
                  {pkg.price}
                </p>
                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all hover:opacity-90 ${
                    pkg.buttonBg
                  } ${pkg.buttonTextColor || "text-white"}`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
