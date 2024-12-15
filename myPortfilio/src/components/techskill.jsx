import React from 'react'

export default function Techskill() {
    return (
        <div className='  bg-black  py-16 mx-auto'>
            <div className='justify-items-center '> 
                <h1 className='font-bold text-3xl text-yellow-600 ' >Skills</h1>
                <ul className='flex flex-col'>
                    <li className='justify-items-center flex items-center '>
                        <ul className='flex gap-5 mt-10'>
                            <li className='bg-black p-7 rounded-md shadow-xl'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw] animate-spin' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="" />
                                    <p className='text-sm font-bold text-yellow-600'>React.js</p>
                                </div>
                            </li>
                            <li className='bg-black p-7 rounded-md shadow-xl'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw]' src="https://cdn3.iconfinder.com/data/icons/inficons/512/CSS3.png" alt="" />
                                    <p className='text-sm font-bold text-yellow-600' >Css</p>
                                </div>
                            </li>
                            <li className=' bg-black p-7 rounded-md shadow-xl'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw]' src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png" alt="" />
                                    <p className='text-sm font-bold text-yellow-600'>JavaScript</p>
                                </div>
                            </li>
                            <li className=' bg-black p-7 rounded-md shadow-xl'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw]' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png" alt="" />
                                    <p className='text-sm font-bold text-yellow-600'>HTML5</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='justify-items-center mt-16'>
                        <ul className='flex gap-16 mt-10'>
                            <li className='bg-yellow-600 p-7 rounded-lg'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw] animate-bounce' src="https://cdn4.iconfinder.com/data/icons/logos-3/455/nodejs-new-black-1024.png" alt="" />
                                    <p className='text-sm font-bold'>Node.js</p>
                                </div>
                            </li>
                            <li className='bg-yellow-600 p-7 rounded-lg'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[3vw]' src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-1024.png" alt="" />
                                    <p className='text-sm font-bold'>MongoDb</p>
                                </div>
                            </li>
                            <li className='bg-yellow-600 p-7 rounded-lg'>
                                <div className='flex-col justify-items-center'>
                                    <img className='w-[7vw]' src="https://www.sohamkamani.com/nodejs/expressjs-architecture/express-routing-logo.png" alt="" />
                                    <p className='text-sm font-bold'>Express.js</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
