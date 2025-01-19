import React from 'react'
import { OrbitingCirclesContact } from '../shared/ContactMe'
import { BorderBeam } from '../ui/border-beam'
import { TextAnimate } from '../ui/text-animate'
import ShimmerButton from '../ui/shimmer-button'

function Contact() {
  return (
    <div id='contact' className='container overflow-hidden'>

      <div className='my-10 flex flex-col md:flex-row justify-between items-center syntax_highlighter sm:px-2 md:px-5'>
        <div className='flex flex-col justify-center items-start gap-3 p-5 mt-4'>
          <div className="relative p-3 rounded-full px-6  py-2 transition duration-300  text-white font-normal text-base  shadow-[inset_0_0_20px_#c298f5b8]">
            Your Next Big step Awaits
            <BorderBeam
              size={50}
              anchor={12}
              borderWidth={2}
              colorFrom="#4A148C"
              colorTo="#D8B4FE"
              duration={5}
            />
          </div>
          <div className='flex flex-col items-start '>
            <TextAnimate animation="blurInUp" by="word" className='text-white  text-3xl  md:text-3xl lg:text-5xl text-center font-semibold'>
              Hire a Professional
            </TextAnimate>
            <TextAnimate animation="blurIn" by="word" duration={1.0} className='text-white  text-3xl  md:text-3xl lg:text-5xl text-center font-semibold'>
              Who Delivers
            </TextAnimate>
          </div>
          <p className="text-xl text-start max-w-[750px] text-gray-300">
            You deserves the best, and I’m here to deliver. With innovative solutions and a commitment to excellence, I’ll help your brand stand out and achieve its goals. Let’s start today!
          </p>
          <a href="https://wa.link/as7ln9" target="_blank">
            <ShimmerButton shimmerColor="#F3E8FF" background={"#4A148C"}>
              <span className="text-white">Let's Collaborate</span>
            </ShimmerButton>
          </a>
        </div>
        <div className=''>
          <OrbitingCirclesContact />
        </div>
      </div>
    </div>
  )
}

export default Contact