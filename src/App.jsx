import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Training from './Components/Training'

const App = () => {
  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <Navbar/>
      <div className='container mx-auto px-8'>
        <Landing/>
        <About/>
        <Education/>
        <Technologies/>
        <Training/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App