import React from 'react'

const Portfolio = () => {

    const projects = [
        {
            "name": "Netflix clone",
            "desc": "Video streaming web application build with django,Html,css,js,ajax",
            "img": "https://user-images.githubusercontent.com/60282806/189813734-3d520083-157f-4d53-83ca-c03df99547b6.jpg",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/netflix_clone",

        },
        {
            "name": "Chat application",
            "desc": "Room chat application build with django,Html,css,js,ajax",
            "img": "https://user-images.githubusercontent.com/60282806/190467924-e0809171-cc02-4c73-ab3f-1d431cf7e36d.gif",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/django-chat-application",

        },
        {
            "name": "E-commerce",
            "desc": "Shopping application web application build with django,Html,css,js,ajax",
            "img": "https://user-images.githubusercontent.com/60282806/187327642-1ac9f5eb-7ec8-4646-ae1c-c16fd586a3ce.gif",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/Django_ecommernce",

        },
        {
            "name": "E-commerce web application",
            "desc": "An E-commerce web application build with react.js,redux with paypal integration",
            "img": "https://user-images.githubusercontent.com/60282806/211208754-966fd9de-a3db-4dcc-9201-a0a4827eed72.png",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/Ecommernce-webapp-paypal-integration",

        },
        {
            "name": "Social Media Clone",
            "desc": "Mini Facebook  web application build with django,Html,css,js,ajax",
            "img": "https://user-images.githubusercontent.com/60282806/188865555-2d59deb5-e051-4b9f-a51b-e90821103a80.gif",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/Facebook-clone",

        },
        {
            "name": "TikTok-Clone UI",
            "desc": "This application was build using react.js,react",
            "img": "https://user-images.githubusercontent.com/60282806/216793174-7347bcf0-8bdd-4fa1-ab8d-824fff2d2695.png",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/tiktok-clone",

        },
 
        {
            "name": "Linkedin Clone",
            "desc": "Linkdin clone build with django,python,html,css,js and ajax",
            "img": "https://user-images.githubusercontent.com/60282806/193028853-b5cbfe8c-a01a-4866-8b19-79ec7347b8fc.jpg",
            "gif": "gif image line here",
            "github": "https://github.com/webblyss/LinkedIn_clone_django-",
        },
    ];
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
                                    <img class="w-full cursor-pointer" src={value.img} alt="" />
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