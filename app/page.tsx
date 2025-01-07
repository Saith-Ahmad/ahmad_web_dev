import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Hero from "@/components/pages/Hero";
import Work from "@/components/pages/Work";
import React from "react";

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-[300vh] mt-10">
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
};

export default TestComponent;
