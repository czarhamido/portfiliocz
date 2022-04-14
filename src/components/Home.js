import React from 'react';
import {FaEnvelope ,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa';
function Home() {
  return (
    <div name="home" className='w-full h-screen bg-textWhite'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <h2 className='text-mainColor text-xl sm:text-2xl'>Hi,my name is:</h2>
            <h2 className='text-spcialColor text-4xl font-bold sm:text-7xl'>Czar Hamido</h2>
            <h2 className='text-mainColor text-4xl sm:text-7xl'>MERN stack Developer</h2>
            <p className='text-mainColor py-3 px-6 my-2 max-w-[700px] text-xl sm:text-2xl'>A person who is passionate about working on your product and giving it a kind of creativity, and I always work to satisfy partners</p>
            <div>
            <div className='text-center  flex items-center mx-auto'>
            <a href='https://www.instagram.com/czar_hamido/' target='_blank'><FaInstagram className='text-[80px] px-4 text-instColor' /></a>
            <a href='https://dz.linkedin.com/in/abdeldjabar-ahmeidi-35a737197' target='_blank'><FaLinkedin className='text-[80px] px-4  text-[#0093AB]'/></a>
            <a href='https://github.com/czarhamido/' target='_blank'><FaGithub className='text-[80px] px-4  text-messageColor'/></a>

                    </div>

            </div>
        </div>
    </div>

  )
}

export default Home