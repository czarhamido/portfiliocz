import React from 'react'
import web from '../assets/developerWeb.png';
import app from '../assets/app.png'

function About() {
    return (

        <div name="about" className='w-full md:h-screen  bg-textWhite text-mainColor  '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h2 className='text-4xl font-bold inline border-b-4 border-b-spcialColor'>What I Do ?</h2>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 items-center'>
                    <div className='text-center max-w-[600px] px-4   '>
                    <img src={app} alt="" className='mx-auto py-8' style={{ width: '100px' }} />
                        <h2 className='text-2xl font-bold py-2'>App Development</h2>
                        <p className='text-2xl'>
                            Building websites, whether for your own business or for your business, using the latest technologies
                        </p>
                    </div>    

                    <div className='text-center max-w-[600px] px-4   '>
                    <img src={web} alt="" className='mx-auto py-8' style={{ width: '100px' }} />
                        <h2 className='text-2xl font-bold py-2'>Full Stack Development</h2>
                        <p className='text-2xl'>
                            Building websites, whether for your own business or for your business, using the latest technologies
                        </p>
                    </div>                   
                </div>
            </div>




        </div>
    )
}

export default About