import Banner from "./components/Banner";
import CaseStudy from "./components/Casestudy";
import Choose from "./components/Choose";
import ClientReview from "./components/ClientReview";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/Services";
import WhatWeDo from "./components/Whatwedo";



export default function Home() {
  return (
    <div className="pb-12 text-white space-y-5 md:space-y-24">
      <Banner/>
      <Choose/>
      <ServicesSection/>
      <CaseStudy/>
      <ClientReview/>
      <WhatWeDo/>
      <ContactSection/>
    </div>
  );
}
