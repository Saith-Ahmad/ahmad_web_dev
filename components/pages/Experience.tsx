import React from 'react'
import { Timeline } from '../ui/timeline'
import { experienceData } from '@/constants'
import { TextAnimate } from '../ui/text-animate'
import { BorderBeam } from '../ui/border-beam'
import ShimmerButton from '../ui/shimmer-button'

function Experience() {
    return (
        <div className=' shadow-xl'>
        <div className='relative container  overflow-hidden '>
            <div className=" w-full h-full absolute -z-1">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='flex mt-10 flex-col items-center justify-center gap-2'>
                <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
                    Crafting for Perfection
                    <BorderBeam
                        size={50}
                        anchor={12}
                        borderWidth={2}
                        colorFrom="#4A148C"
                        colorTo="#D8B4FE"
                        duration={5}
                    />
                </div>
                <TextAnimate animation="blurInUp" by="word" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-semibold'>
                    My Journey So Far
                </TextAnimate>
                <p className="text-xl text-center max-w-[750px] dark:text-gray-300 ">
                    Discover how my journey in web development equips me to deliver tailored solutions that meet your business needs. Let’s create impactful and scalable web experiences together
                </p>
            </div>
            <div className="container max-w-[1200px] mt-20 mb-10">
                <Timeline data={experienceData} />
                <div className='flex flex-row items-center justify-center'>
          <a href="https://www.linkedin.com/in/muhammad-ahmad13/" target='_blank' rel="noopener noreferrer">
          <ShimmerButton shimmerColor="#F3E8FF" background={"#4A148C"}>
                <span className="text-white">Lets Discuss Your Project</span>
            </ShimmerButton>
          </a>
           </div>
            </div>
           
        </div>
        </div>
    )
}

export default Experience