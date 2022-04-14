import React from 'react'
import reactImg from '../assets/react.png'
import nodejsImg from '../assets/nodejs.png'
import wordpressImg from '../assets/wordpress.png'
import mongodbImg from '../assets/mongodb.png'

function Skills() {
    return (
        <div name="skills" className='w-full md:h-screen bg-textWhite text-mainColor pb-8 '>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <h2 className='text-3xl font-bold inline border-b-4 pt-16 border-b-spcialColor'>Technologies</h2>
                <p className='py-6'>// Some of the technologies I master</p>

                <div className='max-w-[1000px] w-full sm:grid grid-cols-3 gap-8 items-center text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={reactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={reactImg} alt="HTML icon" />
                  <p className='my-4'>REACTNATIVE</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={nodejsImg} alt="HTML icon" />
                  <p className='my-4'>NODEJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wordpressImg} alt="HTML icon" />
                  <p className='my-4'>WORDPRESS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongodbImg} alt="HTML icon" />
                  <p className='my-4'>MONGODB</p>
              </div>

                </div>
            </div>
        </div>
    )
}

export default Skills