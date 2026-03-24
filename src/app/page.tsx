import Banner from "./components/Banner";
// import CaseStudy from "./components/Casestudy";
import Choose from "./components/Choose";
import ClientReview from "./components/ClientReview";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/Services";
import WhatWeDo from "./components/Whatwedo";
import Projects from "./components/Projects";
import ProjectTitle from "./components/ProjectTitle";
import PricingPlans from "./pricing/page";



export default function Home() {
  return (
    <div className="pb-12 text-white space-y-5 md:space-y-24">
      <Banner/>
      <Choose/>
      <ServicesSection/>
      {/* <CaseStudy/> */}
      <ProjectTitle/>
      <Projects/>
      {/* <ClientReview/> */}
      <PricingPlans/>
      <WhatWeDo/>
      <ContactSection/>
    </div>
  );
}
