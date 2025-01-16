'use client'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='px-3 py-1 bg-black bg-opacity-10 dark:bg-opacity-30 backdrop-blur-lg rounded-t-lg shadow-xl shadow-[#0000002f] dark:shadow-lg dark:shadow-[#d8b4fe58] overflow-hidden'>

      <div className='container flex justify-between items-center  flex-wrap gap-2'>
        <motion.div className='md:w-[140px] w-[130px] h-[50px] md:h-[70px]'
           initial={{ opacity: 0, x: -35 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.3, delay: 0.11 }}
        >
          <Image src={'/logo.png'} alt="logo" style={{ width: '100%', height: 'auto' }} width={0} height={0} unoptimized className='md:mt-2' />
        </motion.div>

        <motion.div className='dark:text-gray-300 text-primary hidden sm:flex'
         initial={{ opacity: 0, y: -15 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3 }}
        >
          <p>© {year} <span className='dark:font-medium text-purple-700'>Muhammad Ahmad</span></p>
        </motion.div>

        {/* Social Handles */}
        <motion.div className='flex justify-center items-center gap-1 md:gap-2'
           initial={{ opacity: 0, y: 35 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.01 }}
        >
          <a href="https://wa.link/keu3ge" target='_blank' >
            <Button size={'icon'} className="bg-text_purple">
              <Image src={'/whatsapp.png'} alt='whatsapp' width={20} height={20} />
            </Button>
          </a>


          <a href="https://www.instagram.com/saith_ahmad_13/" target='_blank' rel="noopener noreferrer">
            <Button size={'icon'} className="bg-text_purple">
              <Instagram />
            </Button>
          </a>
          <a href="https://github.com/Saith-Ahmad" target='_blank' rel="noopener noreferrer">
            <Button size={'icon'} className="bg-text_purple">
              <Github />
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/muhammad-ahmad13/" target='_blank' rel="noopener noreferrer"  
          >
            <Button size={'icon'} className="bg-text_purple">
              <Linkedin />
            </Button>

          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer