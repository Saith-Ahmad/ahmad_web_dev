'use client'
import React from 'react'
import {motion} from "framer-motion"

function H2Heading({title}:{title:string}) {
  return (
    <motion.h2
    initial={{ opacity: 0, y: 65 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className='text-4xl max-sm:absolute   md:text-5xl lg:text-6xl text-center min-h-[50px]  lg:min-h-[70px] font-semibold bg-gradient-to-r from-accent_purple via-purple-800 to-accent_purple bg-clip-text text-transparent dark:from-d_text_purple dark:via-purple-300 dark:to-bg_purple_light'
    >
       {title}
    </motion.h2>
  )
}

export default H2Heading