import React from 'react'
import { PROJECTS } from '../constants/index.js'
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 pt-8' id='project'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}} className='w-full mb-2 mt-2 lg:w-1/4'>
                    <img src={project.image} alt={project.title} width={150} height={150}/>
                </motion.div>
                <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, index)=>(
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>{tech}</span>
                        ))}
                    </div>
                </motion.div>
            </div>            
        ))}</div>
    </div>
  )
}

export default Projects