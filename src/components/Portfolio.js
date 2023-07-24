import React from 'react'
import projects from '../contant/constant'
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='w-screen grid gap-5 items-center justify-evenly p-3'>
                <div className="">
                    <h4 className='text-center text-2xl font-bold underline'>My Projects</h4>
                    {/* PROJECT CARDS */}
                    <div className="md:flex flex-wrap justify-center items-center grid gap-5">
                        {
                            projects.map((value, index) => {
                                return <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                                    <img class="w-full cursor-pointer " src={value.img} alt="" />
                                    <div class="px-6 py-4">
                                        <h4 className='font-bold my-3'>{value.name}</h4>
                                        <p class="text-gray-700 text-base">
                                            {value.desc}
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2 flex">
                                    <a href={value.github} className="text-blue-500">View code</a>
                                    </div>
                                   
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>

        </section>)
}

export default Portfolio