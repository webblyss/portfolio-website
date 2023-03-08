import React,{useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';


const Navigation = () => {
const [nav,setNav] = useState(false);

const handleNav = ()=>setNav(!nav);
  return (
    <div className='w-[50%] h-[50px] z-10 bg-zinc-200 sticky top-0 drop-shadow-lg '>
      <div className="px-2 flex items-center justify-between w-full h-full">
      <div className=" flex items-center">
        <h4 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand</h4>
      </div>
      <ul className='hidden md:flex'>
          <li className='mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Home</li>
          <li className='mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>About</li>
          <li className='mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Experience</li>
          <li className='mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Skills</li>
          <li className='mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Portfolio</li>
        </ul>

        {/* CONTACT BUTTONS */}
        <div className="hidden md:flex">
          <button className='mr-4 bg-indigo-600 p-2 text-white border-indigo-600 hover:bg-transparent hover:text-indigo-600'>Hire me</button>
        </div>
        {/* HANDBUGER */}
        <div className="md:hidden" onClick={handleNav}>
       {!nav ?  <AiOutlineMenu className='cursor-pointer'/> :<AiOutlineClose className='cursor-pointer'/>}
        </div>
      </div>

      {/* RESPONSIVE NAVIGATION */}
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
      <li className= 'mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Home</li>
          <li className='border-b-2 mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>About</li>
          <li className='border-b-2 mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Experience</li>
          <li className='border-b-2 mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Skills</li>
          <li className='border-b-2 mx-4 cursor-pointer hover:bg-purple-500 transition-all p-2 hover:text-white'>Portfolio</li>
          <div className="flex flex-col">
            <button className='bg-indigo-500 text-white px-8 py-3 my-4'>Hire me</button>
          </div>
      </ul>
   
    </div>
  )
}

export default Navigation