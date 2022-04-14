import React from 'react'
import EnsmImg from '../assets/ensm.jpeg';
import cfmImg from '../assets/cfm.png';
import drAppImg from '../assets/drapp.png';


function Works() {
  return (
<div name='work' className='w-full md:h-screen text-mainColor bg-textWhite'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mx-auto'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mx-auto'>
            My Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            className='shadow-lg shadow-mainColor group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div >
              <span className='text-2xl font-bold text-mainColor tracking-wider '>
                Labo mangemnt
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/czarhamido/labo-Mangment' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-textWhite font-bold text-lg bg-mainColor hover:bg-spcialColor'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

                   {/* Grid Item */}
                   <div
            className='shadow-lg shadow-mainColor group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div >
              <span className='text-2xl font-bold text-mainColor tracking-wider '>
              Releasin Project
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/czarhamido/releasinproject' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-textWhite font-bold text-lg bg-mainColor hover:bg-spcialColor'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

      {/* Grid Item */}
      <div
                  className='shadow-lg shadow-mainColor group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                  {/* Hover Effects */}
                  <div >
                    <span className='text-2xl font-bold text-mainColor tracking-wider '>
                    Website CFM 
                    </span>
                    <div className='pt-8 text-center'>
                      <a href='https://github.com/czarhamido/CfmThemeWP' target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-textWhite font-bold text-lg bg-mainColor hover:bg-spcialColor'>
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

 
        </div>
      </div>
    </div>
  )
}

export default Works