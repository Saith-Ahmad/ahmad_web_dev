import About from "@/components/pages/About";
import ChooseMe from "@/components/pages/ChooseMe";
import Contact from "@/components/pages/Contact";
import Experience from "@/components/pages/Experience";
import Hero from "@/components/pages/Hero";
import Technologies from "@/components/pages/Technologies";
import { Testimonial } from "@/components/pages/Testimonials";
import Work from "@/components/pages/Work";
import React from "react";

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-[300vh] -mt-20">
      <Hero/>
      <About/>
      <Technologies/>
      <Work/>
      <Experience/> 
      <Testimonial/>
      <ChooseMe/>
      <Contact/>
    </div>
  );
};

export default TestComponent;
