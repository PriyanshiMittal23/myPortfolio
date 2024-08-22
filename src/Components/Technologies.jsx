import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaRProject } from "react-icons/fa6";
import {motion} from 'framer-motion';

const iconV = (duration)=>({
    initial: { y: -10},
    animate:{
        y: [10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className=' border-b border-neutral-800 pb-24 pt-8' id='tech'>
        <h1 className='my-20 text-center text-4xl'> Technologies </h1>
        <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-10'>
            <motion.div variants={iconV(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavaLine className='text-7xl text-cyan-700'/>
            </motion.div>
            <motion.div variants={iconV(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptLine className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconV(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div variants={iconV(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div variants={iconV(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconV(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-7xl text-green-600'/>
            </motion.div>
            <motion.div variants={iconV(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconV(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconV(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-cyan-700'/>
            </motion.div>
            <motion.div variants={iconV(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div variants={iconV(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div variants={iconV(7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <VscVscode className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div variants={iconV(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostman className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div variants={iconV(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaRProject className='text-7xl text-blue-900'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies