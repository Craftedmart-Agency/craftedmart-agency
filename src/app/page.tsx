import Banner from "./components/Banner";
import Choose from "./components/Choose";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/Services";
import WhatWeDo from "./components/Whatwedo";
import Projects from "./components/Projects";
import ProjectTitle from "./components/ProjectTitle";
import PricingPlans from "./pricing/page";



export default function Home() {
  return (
    <div className="pb-12 space-y-5 md:space-y-24 text-white">
      <Banner/>
      <Choose/>
      <ServicesSection/>
      <ProjectTitle/>
      <Projects/>
      <PricingPlans/>
      <WhatWeDo/>
      <ContactSection/>
    </div>
  );
}
