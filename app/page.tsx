import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Hero from "@/components/pages/Hero";
import Technologies from "@/components/pages/Technologies";
import Work from "@/components/pages/Work";
import React from "react";

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-[300vh] -mt-20">
      <Hero/>
      <About/>
      <Technologies/>
      <Work/>
      <Contact/>
    </div>
  );
};

export default TestComponent;
