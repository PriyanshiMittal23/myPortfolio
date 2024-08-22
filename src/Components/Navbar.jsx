import React, { useState } from 'react'
import logo from '../assets/pmlogopng.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' mb-20 flex items-center justify-between py-2 fixed w-full px-8 bg-slate-950 z-50' >
        <div className='flex flex-shrink-0 items-center'>
          <img src={logo} alt="logo" className='mx-2 w-14 rounded-full' />
        </div>
        <div className=' hidden lg:flex flex-shrink-0 items-center gap-5' >
          <div className='hover:text-purple-300 text-xl'><a href="#">Home</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#about">About</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#education">Education</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#tech">Technologies</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#train">Training</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#project">Projects</a></div>
          <div className='hover:text-purple-300 text-xl'><a href="#hire">Contact Me</a></div>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <IoMenu onClick={toggleMenu} className='lg:hidden'/>
          {isOpen && (
            <div className='absolute top-24 right-10 mt-2 w-48 rounded-md shadow-lg bg-purple-300 ring-1 ring-black ring-opacity-5 lg:hidden'>
              <div className='py-1'>
                <a href="#" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Home</a>
                <a href="#about" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>About</a>
                <a href="#education" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Education</a>
                <a href="#tech" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Technologies</a>
                <a href="#train" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Training</a>
                <a href="#project" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Projects</a>
                <a href="#hire" className='block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500' onClick={toggleMenu}>Contact Me</a>
              </div>
            </div>
          )}
          <a href='https://www.linkedin.com/in/priyanshi-mittal-179733225/' target='new'><FaLinkedin /></a>
          <a href="https://github.com/PriyanshiMittal23" target='new'><FaGithub /></a>
          <a href="https://leetcode.com/u/priyanshi_mittal1/" target='new'><SiLeetcode /></a>
        </div>
    </nav>
  )
}

export default Navbar