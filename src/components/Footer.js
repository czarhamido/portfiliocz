import React from 'react'
import {FaEnvelope ,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <div  className='w-full h-[200px] bg-mainColor text-textWhite'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
       
        <div className='text-center  flex items-center mx-auto'>
        <a href='https://www.instagram.com/czar_hamido/' target='_blank'><FaInstagram className='text-[80px] px-4 text-instColor' /></a>
            <a href='https://dz.linkedin.com/in/abdeldjabar-ahmeidi-35a737197' target='_blank'><FaLinkedin className='text-[80px] px-4  text-[#0093AB]'/></a>
            <a href='https://github.com/czarhamido/' target='_blank'><FaGithub className='text-[80px] px-4  text-textWhite'/></a>


        </div>
        <h2 className='text-xl sm:text-2xl text-center'>Made with ❤️ by Czar_Hamido</h2>

 
    </div>
</div>
  )
}

export default Footer