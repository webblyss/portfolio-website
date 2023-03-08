import React from 'react';
import CV from '../assets/cv.pdf';
const About = () => {
    return (
        <section id='about'>
            <div className='md:flex w-[80%]  mb-20 justify-center items-center my-3'>
                <img className='md:w-[40%] w-screen flex items-center justify-center mx-auto' src="https://t4.ftcdn.net/jpg/02/73/46/99/360_F_273469972_ESU9Rq3eIpSrK3xddlIEyDh7vrslbiGg.jpg" alt="" srcset="" />
                <div className="md:w-[40%] w-screen flex flex-col justify-center items-center">
                    <h4 className='underline text-3xl my-5'>About Me</h4>
                    <span className="px-5 text-justify text-sm">
                        As a Full-Stack Developer, I have expertise in both front-end and back-end development, allowing me to build complete web applications from start to finish.I am looking for a company where i can put my skills to work
                        <a download href={CV}className="mx-3 underline text-blue-500">Download cv</a>
                    </span>
                    
                </div>
            </div>
        </section>
    )
}

export default About