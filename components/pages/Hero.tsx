import React, { useEffect, useState } from "react";
import { BorderBeam } from "../ui/border-beam";
import ShimmerButton from "../ui/shimmer-button";
import { AnimatedBeamDemo } from "../shared/BeamDemo";
import { Spotlight } from "../ui/SpotLight";
import TypeEffect from "../shared/TypeEffect";

function Hero() {
  return (
    <div className="relative w-full dark:bg-[#00000011] bg-[#ffffff13]  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]  flex items-center justify-center">
      <div
        id="hero"
        className="pb-10 container items-center justify-center mt-14"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
            From Vision to Execution
            <BorderBeam
              size={50}
              anchor={12}
              borderWidth={2}
              colorFrom="#4A148C"
              colorTo="#D8B4FE"
              duration={5}
            />
          </div>
          <h1 className="lg:text-8xl text-7xl text-center mt-1 text-d_bg_purple_dark dark:text-white">
            <span className="">Hi, I'M</span>{" "}
            <span className=" font-bold bg-gradient-to-r from-purple-500 via-pink-500  to-red-500 bg-clip-text text-transparent">
              Ahmad
            </span>
          </h1>
          <TypeEffect/>

          <p className="text-xl text-center max-w-[750px] dark:text-gray-300">
            From front-end finesse to back-end brilliance, I design for
            performance, scalability, and seamless user experiences.
          </p>
          <ShimmerButton shimmerColor="#F3E8FF" background={"#4A148C"}>
            <span className="text-white">See How Can i Help You!</span>
          </ShimmerButton>
          <AnimatedBeamDemo />

          <div className="">
            {/* Radial gradient for the container to give a faded look */}
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center 
                                backdrop-blur-2xl [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"
            ></div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
