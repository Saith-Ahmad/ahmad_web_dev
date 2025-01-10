import React from 'react'
import { Timeline } from '../ui/timeline'
import { experienceData } from '@/constants'

function Experience() {
    return (
        <div className='relative'>
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
            <div className="container max-w-[1200px] mt-24">
                <Timeline data={experienceData} />
            </div>
        </div>
    )
}

export default Experience