import React from 'react'
import cb from '../assets/certficates/cb.png'
import coursera from '../assets/certficates/coursera.png'
import google from '../assets/certficates/google.png'
import gla from '../assets/certficates/gla.png'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Training = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 pt-8' id='train'>
        <h1 className='my-20 text-center text-4xl'>Training And Certifications</h1>
        <div>
            <div className='mb-10 flex flex-wrap lg:justify-center p-5'>
                <motion.div className='w-full mb-5 mt-2 lg:w-1/4 flex flex-col gap-5 justify-center' whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}}>
                    <img src={cb} alt="Coding Blocks" className='w-3/4' />
                    {/* <img src={gla} alt="GLAU" className='w-1/3'/> */}
                </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4' whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}}>
                    <h4 className='mb-2 font-semibold text-2xl'> Competitive Programming</h4>
                    <p className='font-extralight mb-1 text-sm text-purple-300'><i>June 2023 - July 2023</i></p>
                    <p className='font-extralight text-sm mb-3 text-purple-300'><i>Coding Blocks</i></p>
                    <p className='mb-4'>Completed an advanced course in Competitive Programming, focusing on algorithms, data structures, and problem-solving techniques.<br/> Enhanced my ability to optimize code and tackle complex coding challenges.</p>
                    <div className='flex flex-wrap gap-2 mb-5'>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Algorithm Optimization</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Data Structures</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Problem-Solving</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Efficient Coding</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Competitive Programming</span>
                    </div>
                    <button><a href="/myPortfolio/cpc.pdf" download="CompetitiveProgramming.pdf" className='flex gap-2 items-center align-middle  rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-200'>View Credentials <FaArrowUpRightFromSquare className=' inline-block' /></a></button>
                </motion.div>
            </div>
            <div className='mb-10 flex flex-wrap lg:justify-center p-5'>
                <motion.div className='w-full mb-5 mt-2 lg:w-1/4 flex gap-5 align-middle' whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}}>
                    <img src={coursera} alt="Courcera" className='w-1/3 h-auto object-contain'/>
                    <img src={google} alt="Google" className='w-1/3 h-auto object-contain'/>
                </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4' whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}}>
                    <h4 className='mb-2 font-semibold text-2xl'>Google Data Analytics Professional Certificate</h4>
                    <p className='font-extralight mb-1 text-sm text-purple-300'><i>August 2024</i></p>
                    <p className='font-extralight text-sm mb-3 text-purple-300'><i>Coding Blocks</i></p>
                    <p className='mb-4'>Completed a comprehensive certification covering various aspects of data analytics, including data analysis, visualization, and R programming.<br/> Gained skills in transforming data, creating visualizations, and using analytical tools.</p>
                    <div className='flex flex-wrap gap-2 mb-5'>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Data Analysis</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>R Programming</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Data Visualization</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>SQL</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Tableau Software</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Spreadsheet Software</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Data Management</span>
                    </div>
                    <button><a href="https://www.credly.com/badges/6183f164-a3c2-4906-baec-25b83e14a272/public_url" target='new' className='flex gap-2 items-center align-middle  rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-200'>View Credentials <FaArrowUpRightFromSquare className=' inline-block' /></a></button>
                </motion.div>
            </div>
            <div className='mb-10 flex flex-wrap lg:justify-center p-5'>
                <motion.div className='w-full mb-5 mt-2 lg:w-1/4 flex flex-col gap-5 justify-center items-center' whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}}>
                    <img src={gla} alt="GLAU" className='w-1/3' />
                </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4' whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}}>
                    <h4 className='mb-2 font-semibold text-2xl'>Master In Python Libraries For Machine Learning, Data Science And Image Processing</h4>
                    <p className='font-extralight mb-1 text-sm text-purple-300'><i>20th June 2022 - 20th July 2022</i></p>
                    <p className='font-extralight text-sm mb-3 text-purple-300'><i>JOVAC, GLAU</i></p>
                    <p className='mb-4'>Completed a course focusing on key Python libraries used in machine learning, data science, and image processing.<br/> Gained foundational knowledge in these areas, learning to implement basic algorithms and work with relevant datasets.</p>
                    <div className='flex flex-wrap gap-2 mb-5'>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Machine Learning Basics</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Data Science Fundamentals</span>
                        <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>Image Processing</span>
                    </div>
                    <button><a href="/myPortfolio/MLPm.pdf" download="PythonLib.pdf" className='flex gap-2 items-center align-middle  rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-200'>View Credentials <FaArrowUpRightFromSquare className=' inline-block' /></a></button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Training