import React from 'react'
import AboutGrid from '../shared/AboutGrid'
import H2Heading from '../shared/H2Heading'

function About() {
  return (
    <>
      <div id='about' className='container items-center my-10 overflow-hidden'>
        <H2Heading title='About Me'/>
        <AboutGrid />
      </div>
    </>
  )
}

export default About