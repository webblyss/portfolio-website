import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillTool } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

const Socials = () => {
  return (
    <div className='fixed left-0 right-0 flex justify-center bottom-10'>
      <div className='w-[35%] p-3 flex bg-red-500 rounded-2xl justify-evenly'>
        <div className='cursor-pointer rounded-full hover:text-white'>
          <a href="#home">
            <AiFillHome className='mx-4' />
          </a>
        </div>
        <div className='cursor-pointer rounded-full hover:text-white'>
          <a href="#about">
            <AiOutlineUser className='mx-4' />
          </a>
        </div>
        <div className='cursor-pointer rounded-full hover:text-white'>
          <a href="#skills">
            <AiFillTool className='mx-4' />
          </a>
        </div>
        <div className='cursor-pointer rounded-full hover:text-white'>
          <a href="#portfolio">
            <BsCodeSlash className='mx-4' />
          </a>
        </div>
        <div className='cursor-pointer rounded-full hover:text-white'>
          <a href="#contact">
            <MdOutlineMail className='mx-4' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
