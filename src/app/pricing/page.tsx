import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Button from "../components/shared/Button";

const packages = [
  {
    name: "Starter",
    price: "BDT Start From 10,000/=",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "5 GB SSD Hosting",
      "Bandwidth: 100 GB / month",
      "Lifetime server maintenance",
      "Up to 5 dynamic pages",
      "Basic shopping cart & checkout",
      "Payments: Mobile Banking",
      "Basic order management",
      "Auto-generated invoices",
      "Multiple image option: No",
      "Post-sales support: 1 month",
      "Development timeline: 5 days",
      "Renewal: USD 30 / year",
    ],
  },
  {
    name: "Business",
    price: "BDT Start From 20,000/=",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "15 GB SSD Hosting",
      "Bandwidth: 500 GB / month",
      "Lifetime server maintenance",
      "Up to 10 dynamic pages",
      "Shopping cart with shipping options",
      "Payments: Mobile Banking, Card",
      "Order management dashboard",
      "Auto-generated invoices",
      "Multiple image upload: Yes",
      "Post-sales support: 2 months",
      "Development timeline: 10 days",
      "Renewal: USD 50 / year",
    ],
  },
  {
    name: "Corporate",
    price: "BDT Start From 40,000/=",
    features: [
      "Free .com/.net/.org domain (1 year)",
      "100 GB SSD Hosting",
      "Unlimited Bandwidth",
      "Lifetime server maintenance",
      "Up to 30 dynamic pages",
      "Advanced e-commerce features",
      "Payments: Mobile Banking, Card, PayPal",
      "Order management & reports",
      "Auto-generated invoices",
      "Multiple image upload: Yes",
      "Post-sales support: 3 months",
      "Development timeline: 15 days",
      "Renewal: USD 100 / year",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="py-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-gray-500 drop-shadow-md">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {packages.map((pkg, idx) => (
          <Card
            key={idx}
            className="bg-[#111827] text-white rounded-2xl border border-gray-600 shadow-lg shadow-teal-400/40 hover:shadow-green-400/80 hover:scale-105 transition-transform relative overflow-hidden"
          >
            <CardHeader className="p-6">
              <div className="text-4xl font-extrabold text-teal-400 opacity-20 absolute top-4 left-4">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <CardTitle className="text-3xl font-bold relative z-10 text-center text-teal-600">
                {pkg.name}
              </CardTitle>
              <p className="text-md opacity-70 font-semibold text-center relative z-10">{pkg.price}</p>
            </CardHeader>
            <CardContent className="p-6 md:p-10 space-y-3 relative z-10">
              {pkg.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start flex-1 gap-2">
                  <Check className="w-5 h-5 text-teal-400 mt-1" />
                  <span className="text-gray-300 text-sm font-bold flex-1">{feature}</span>
                </div>
              ))}
              
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
