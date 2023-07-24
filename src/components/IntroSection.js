import React from 'react'
import IMG1 from '../assets/profile.png';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
const IntroSection = () => {
  return (
    <section id='home'>
      <div className='w-screen mb-10 h-[600px] bg-gray-800 flex flex-col items-center justify-center'>
        <img src={IMG1} alt="" className='w-[200px] rounded-full' />
        <div className="my-3 flex flex-col items-center justify-center">
          <h1 className='flex text-orange-400 font-bold text-3xl items-center justify-center'>Hello!! 👋🏻</h1>
          <span className='font-extralight text-white text-3xl sm:text-4xl'>My name is Solomon</span> 
          <span className='font-extralight text-white text-3xl sm:text-4xl'>full stack developer</span>
        </div>

        {/* Social icons here */}

        <div className="mt-5 flex justify-evenly ">
          <a rel="noreferrer" target="_blank" href="https://github.com/webblyss"><AiFillGithub className='fonts text-3xl mx-2 cursor-pointer hover:text-indigo-500' /></a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/issahaku-solomon-731b67225/"><AiFillLinkedin className='fonts text-3xl mx-2 cursor-pointer hover:text-indigo-500' /></a>
          <a href="tel:+23355136221"><AiFillPhone className='fonts text-3xl mx-2 cursor-pointer hover:text-indigo-500'/></a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection