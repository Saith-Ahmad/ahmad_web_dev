'use client'
import React, { useEffect, useState } from 'react'
import { BorderBeam } from '../ui/border-beam'
import { roles } from '@/constants'
import ShimmerButton from '../ui/shimmer-button';
import { AnimatedBeamDemo } from '../shared/BeamDemo';

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const targetText = roles[roleIndex];

    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < targetText.length) {
                currentText += targetText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setTypedText("");
                    setRoleIndex((roleIndex + 1) % roles.length);
                }, 1000); // Delay before clearing and changing text (in milliseconds)
            }
        }, 180); // Adjust typing speed here (in milliseconds)

        return () => {
            clearInterval(typingInterval);
        };
    }, [roleIndex]);

    return (
        <div id='hero' className='min-h-[100vh] container items-center justify-center mt-14 '>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
                    From Vision to Execution
                    <BorderBeam size={50} anchor={12} borderWidth={2} colorFrom='#4A148C' colorTo='#D8B4FE' duration={5} />
                </div>
                <h1 className='lg:text-8xl text-7xl text-center mt-1 text-d_bg_purple_dark dark:text-white'><span className=''>Hi, I'M</span> {" "}
                    <span className=' font-bold bg-gradient-to-r from-purple-500 via-pink-500  to-red-500 bg-clip-text text-transparent'>Ahmad</span></h1>
                <h2 className="text-3xl lg:text-6xl text-center min-h-[50px]  lg:min-h-[70px] font-semibold bg-gradient-to-r from-accent_purple via-purple-800 to-accent_purple bg-clip-text text-transparent dark:from-d_text_purple dark:via-purple-300 dark:to-bg_purple_light">
                    {typedText}
                </h2>
                <p className='text-xl text-center max-w-[750px] dark:text-gray-300'>From front-end finesse to back-end brilliance, I design for performance, scalability, and seamless user experiences.</p>
                <ShimmerButton shimmerColor="#F3E8FF" background={'#4A148C'} ><span className="text-white">See How Can i Help You!</span></ShimmerButton>
                <AnimatedBeamDemo/>

            </div>
        </div>
    )
}

export default Hero