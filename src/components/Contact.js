import React,{useState} from 'react'
import axios from 'axios';
const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleEmail = (e)=>{
        e.preventDefault()
        const data = {
            sender:email,
            message:message + ' ' + email
        }

        axios.post("https://nodejs-email-sender.onrender.com/api/send-email",data).then(response=>{
            console.log('email sent')
        });


    }
    return (
        <section id='contact'> 
            <div className='w-screen  flex flex-col mt-5 mb-40'>
                <h4 className="text-center underline text-2xl">Contact</h4>
                <div className="shadow w-[90%] mx-auto h-[100%] my-3">
                    <form class="bg-white p-6 rounded-lg shadow-md">
                        <div class="mb-4">
                            <label class="block font-medium mb-2" for="name">
                                Name
                            </label>
                            <input
                                class="border border-gray-400 p-2 w-full"
                                type="text"
                                id="name"
                                name="name"
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium mb-2" for="email">
                                Email
                            </label>
                            <input
                                class="border border-gray-400 p-2 w-full"
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium mb-2" for="message">
                                Message
                            </label>
                            <textarea
                                class="border border-gray-400 p-2 w-full h-32"
                                id="message"
                                name="message"
                                onChange={(e)=>{setMessage(e.target.value)}}
                            ></textarea>
                        </div>
                        <button type='submit' onClick={(e)=>{handleEmail(e)}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact