import React from 'react'
import AboutGrid from '../shared/AboutGrid'
import { TextAnimate } from '../ui/text-animate'
import { BorderBeam } from '../ui/border-beam'

function About() {
  return (
    <>
      <div id='about' className='container items-center my-10 overflow-hidden'>

      <div className=' flex flex-col items-center justify-center mb-5'>
          <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
            Full-Stack Excellence
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

        <TextAnimate animation="blurInUp" by="character" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-semibold'>
          About Me
        </TextAnimate>

        

        <AboutGrid />
      </div>
    </>
  )
}

export default About