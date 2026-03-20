// components/Services.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { 
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaLaptopCode,
  FaBullhorn,
  FaBrain,
  FaLink
} from "react-icons/fa";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
}

const ServiceCard = ({ icon, title, description, points }: ServiceCardProps) => {
  return (
    <div className="bg-[#0f1719] p-6 rounded-lg shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300">
      <div className="text-teal-400 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="space-y-1">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="font-semibold text-white">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function MainServices() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Web development is the process of creating websites and web applications for the internet or intranet.",
      points: ["Full-stack development", "Responsive web design"],
    },
     {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description: "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands.",
      points: ["Game development", "Responsive web design"],
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
      points: ["Web application development", "Game development"],
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description: "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
      points: ["Game development", "Responsive web design"],
    },
    {
      icon: <FaDatabase />,
      title: "Data Analytic",
      description: "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
      points: ["Web application development", "Game development"],
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description: "Software development is the process of creating computer software programs that perform specific functions or tasks.",
      points: ["Full-stack development", "Responsive web design"],
    },
    {
      icon: <FaBrain />,
      title: "AI Solutions",
      description: "AI solutions leverage machine learning and artificial intelligence to automate processes and enhance decision-making.",
      points: ["Machine learning models", "Natural language processing"],
    },
    {
      icon: <FaLink />,
      title: "Blockchain Development",
      description: "Blockchain development focuses on creating decentralized applications and secure distributed ledger systems.",
      points: ["Smart contract development", "Decentralized apps (DApps)"],
    }
  ];

  return (
    <section className=" text-white py-24 px-4 cursor-pointer">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const href = service.title === "Digital Marketing" ? "/digital-marketing" : "/websites";
            return (
              <Link href={href} key={idx}><ServiceCard  {...service} /></Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
