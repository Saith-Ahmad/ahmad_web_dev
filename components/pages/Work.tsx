import React from 'react'
import { ProjectsGrid } from '../shared/ProjectsGrid'
import { BorderBeam } from '../ui/border-beam'
import { TextAnimate } from '../ui/text-animate'

function Work() {
  return (
    <div id='work' className=' relative w-full dark:bg-[#00000011] bg-[#ffffff13]  dark:bg-dot-white/[0.1] bg-dot-black/[0.1]  overflow-hidden shadow-xl'>
      <div className="hidden md:flex absolute pointer-events-none inset-0  items-center justify-center dark:bg-purple-950 dark:bg-opacity-10 backdrop-blur-3xl bg-opacity-30  bg-[#ffecff]  [mask-image:radial-gradient(ellipse_at_center,transparent_40%,purple)]"></div>
      <div className='container'>
        <div className=' flex flex-col items-center justify-center mb-5 mt-10 gap-3'>
          <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
            Creating Impact
            <BorderBeam
              size={50}
              anchor={12}
              borderWidth={2}
              colorFrom="#4A148C"
              colorTo="#D8B4FE"
              duration={5}
            />
          </div>
          <TextAnimate animation="blurInUp" by="character" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-semibold'>
            Recent Work
          </TextAnimate>
          <p className="text-xl text-center max-w-[750px] dark:text-gray-300 mt-2">
            A Glimpse of what I can do for you: Showcasing projects that reflect my skills and creativity, each designed to make a meaningful impact.
          </p>
        </div>

        <div className='flex flex-row gap-10 justify-center items-center'>
          <ProjectsGrid />
        </div>
      </div>
    </div>
  )
}

export default Work