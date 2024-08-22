import React from 'react';
import {LANDING_CONTENT} from '../constants/index.js';
import profilePhoto from '../assets/priyanshiimgfin-26.jpg';
import {motion} from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const container = (delay)=>({
    hidden: {x:-100, opacity:0},
    visible: {
        x:0, 
        opacity:1,
        transition: {duration:0.5, delay:delay}
    }
})

const Landing = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-35 mt-40' id='home'>
        <Toaster/>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-5 lg:text-7xl'>Priyanshi Mittal</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Versatile Full Stack & Software Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='max-w-xl py-6 font-light tracking-tighter'>{LANDING_CONTENT}</motion.p>
                    <motion.button
                      variants={container(1.5)}
                      initial="hidden"
                      animate="visible"
                      className="relative p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-300 hover:to-purple-500 mb-4"
                    >
                      <div className="flex items-center justify-center bg-slate-950 rounded-full h-full w-full hover:bg-transparent hover:text-black">
                        <a href="/myPortfolio/cv.pdf" download="Priyanshi_Mittal_Resume.pdf" className="px-6 py-2 font-semibold text-white rounded-full hover:text-black">Download CV</a>
                      </div>
                    </motion.button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='felx justify-center'>
                    <motion.img variants={container(1.7)} initial={{x:100, opacity:0}} animate="visible" src={profilePhoto} alt="pfp" className='rounded-2xl' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing