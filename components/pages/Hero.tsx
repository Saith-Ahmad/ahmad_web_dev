import React from "react";
import { BorderBeam } from "../ui/border-beam";
import ShimmerButton from "../ui/shimmer-button";
import { AnimatedBeamDemo } from "../shared/BeamDemo";
import TypeEffect from "../shared/TypeEffect";
import { Spotlight } from "../ui/SpotLight";

function Hero() {
    return (
        <div className="min-h-[100vh] md:min-h-[110vh] relative w-full dark:bg-[#00000011] bg-[#ffffff13]  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]  flex items-center justify-center overflow-hidden">
            <div
                id="hero"
                className="md:py-16 py-10  container items-center justify-center mt-14"
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
                        <span className="text-5xl md:text-7xl lg:text-8xl">Hi, I'M </span>{" "} <br className="md:hidden" />
                        <span className=" font-bold bg-gradient-to-r from-purple-500 via-pink-500  to-red-500 bg-clip-text text-transparent">
                            Ahmad
                        </span>
                    </h1>
                    <TypeEffect />

                    <p className="text-xl text-center max-w-[750px] dark:text-gray-300">
                        From front-end finesse to back-end brilliance, I design for
                        performance, scalability, and seamless user experiences.
                    </p>
                    <a href="https://wa.link/as7ln9" target="_blank">
                        <ShimmerButton shimmerColor="#F3E8FF" background={"#4A148C"}>
                            <span className="text-white">See How Can i Help You!</span>
                        </ShimmerButton>
                    </a>
                    <AnimatedBeamDemo />

                    <div className="">
                       
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-purple-950 dark:bg-opacity-10 backdrop-blur-3xl bg-opacity-30  bg-[#ffecff]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,purple)]"></div>
                        
                        <Spotlight
                            className="-top-0 -left-10 md:-left-32 md:-top-20 "
                            fill="#7c3aed"
                        />
                        <Spotlight
                            className="top-0 -left-40 md:left-52 md:-top-10"
                            fill="white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
