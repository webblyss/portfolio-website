import React from 'react'

const Skills = () => {
  return (
   <section id='skills'>
     <div className='w-screen mb-10 flex flex-col justify-center items-center'>
    <h4 className='text-3xl font-light underline'>Skills</h4>

    <div className="md:flex gap-5 container w-screen mx-auto justify-evenly items-center mt-5">
        <div className=" w-[90%]  p-4 my-5 shadow flex flex-col mx-auto hover:bg-gray-800 hover:text-white rounded-[10px]">
            <h5 className='font-bold text-center'>Frontend Development Skills</h5>

            <ul className='grid grid-cols-3 justify-center items-center mt-5 '>
                <li className='p-4'>HTML</li>
                <li className='p-4'>CSS</li>
                <li className='p-4'>Javascript</li>
                <li className='p-4'>React.JS</li>
                <li className='p-4'>Redux</li>
                <li  className='p-4'>Tailwind</li>
                <li className='p-4'>Flutter</li>
            </ul>
        </div>

        <div className=" w-[90%]   p-4 my-5 shadow flex flex-col mx-auto hover:bg-gray-800 hover:text-white rounded-[10px]">
            <h5 className='font-bold text-center'>Backend Development Skills</h5>

            <ul className='grid grid-cols-2 justify-center items-center mt-5'>
                <li className='p-4'>Nodejs</li>
                <li className='p-4'>Typescript</li>
                <li className='p-4'>Numpy,Pandas</li>
                <li className='p-4'>Express</li>
                <li className='p-4'>MongoDB</li>
                <li className='p-4'>PostgresQL</li>
                <li className='p-4'>Python</li>
                <li className='p-4'>Flask</li>
                <li className='p-4'>Django</li>
                <li className='p-4'>C#</li>
            </ul>
        </div>

        <div className=" w-[90%]   p-4 my-5 shadow flex flex-col mx-auto hover:bg-gray-800 hover:text-white rounded-[10px]">
            <h5 className='font-bold text-center'>Tools and Technologies</h5>
            <ul className='grid grid-cols-2 justify-center items-center mt-5'>
                <li className='p-4'>VS Code</li>
                <li className='p-4'>Android Studio</li>
                <li className='p-4'>Docker</li>
                <li className='p-4'>GitHub/Git</li>
                <li className='p-4'>LINUX</li>
                <li className='p-4'>Jupyter Notebook</li>
                <li className='p-4'>VIM</li>
            </ul>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Skills