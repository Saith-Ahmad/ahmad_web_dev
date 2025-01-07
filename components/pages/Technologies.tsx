import { techIcons } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Marquee from '../ui/marquee'
import { TextAnimate } from '../ui/text-animate'
import { BorderBeam } from '../ui/border-beam'

function Technologies() {
    return (
        <div className=' w-full dark:bg-[#00000011] bg-[#ffffff13]  dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] relative flex items-center justify-center overflow-hidden'>
            <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#00000028]  bg-opacity-5 backdrop-blur-2xl bg-[#ffffff36] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] z-40 blur-3xl'></div>

            



            <div className=' my-20'>
            <div className=' flex flex-col items-center justify-center mb-5'>
                <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
                    Building Web Legacies
                    <BorderBeam
                        size={50}
                        anchor={12}
                        borderWidth={2}
                        colorFrom="#4A148C"
                        colorTo="#D8B4FE"
                        duration={5}
                    />
                </div>
            </div>
                <TextAnimate animation="blurInUp" by="character" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-medium mb-7'>
                    My Skills
                </TextAnimate>
                <Marquee pauseOnHover reverse className="[--duration:30s]">
                    {
                        techIcons.map((item) => (
                            <div className='custom_card_class p-5 !rounded-full' key={item.icon}>
                                <Image src={item.icon} alt='icon' width={40} height={40} unoptimized />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover className="[--duration:40s]">
                    {
                        techIcons.map((item) => (
                            <div className='custom_card_class p-5  !rounded-full' key={item.icon}>
                                <Image src={item.icon} alt='icon' width={40} height={40} unoptimized />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default Technologies