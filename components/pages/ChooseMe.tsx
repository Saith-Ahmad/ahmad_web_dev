import Image from 'next/image'
import React from 'react'
import { TextAnimate } from '../ui/text-animate'
import { BorderBeam } from '../ui/border-beam'

function ChooseMe() {
    return (
        <div className='md:min-h-[100vh] min-h-[80vh] relative w-full dark:bg-[#00000011] bg-[#ffffff13]  dark:bg-grid-[#ffffff05] bg-grid-[#00000005]  flex items-center justify-center overflow-x-hidden py-20'>
            <div className='w-full h-full md:max-w-[1000px] container'>
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
                <div className='flex flex-col items-center justify-normal mb-10'>
                    <TextAnimate animation="blurInUp" by="character" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-medium'>
                        Why Choose Me?
                    </TextAnimate>
                    <p className='text-xl text-center max-w-[750px] dark:text-gray-300 mt-2'>
                        Creating custom web solutions to ensure your brand stands out in a crowded digital world.
                    </p>
                </div>
                <Image src={'/choose.png'} alt='why choose me' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} unoptimized />
            </div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#00000040] bg-[#ffffff30] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    )
}

export default ChooseMe