import React, { useState } from 'react';
import { FaBars, FaTimes,FaHome,FaExclamation , FaCode,FaBriefcase} from 'react-icons/fa';
import {Link} from 'react-scroll';
function NavBar() {
    const [isActiv, setIsActiv] = useState(false);
    const handlNavBar = () => setIsActiv(!isActiv);
    return (
        <div className='fixed flex justify-between bg-mainColor h-[60px] w-full px-16 text-textWhite items-center'>
            <h2 className='font-bold text-2xl'><a href='/'>Czar_Hamido</a></h2>

            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={300} className="flex font-bold"><FaHome className='text-2xl mx-2'/>Home</Link></li>
                <li><Link to='about' smooth={true} duration={300} className="flex font-bold"><FaExclamation className='text-2xl mx-2'/> About</Link></li>
                <li><Link to='skills' smooth={true} duration={300} className="flex font-bold"><FaCode className='text-2xl mx-2'/>Skills</Link></li>
                <li><Link to='work' smooth={true} duration={300} className="flex font-bold"><FaBriefcase className='text-2xl mx-2'/>My works</Link></li>


            </ul>
            {/**navbar Mobail */}
            <div onClick={handlNavBar} className='md:hidden z-10'>
                {isActiv ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={isActiv ? 'absolute top-0 left-0 w-full h-screen bg-mainColor flex flex-col justify-center items-center ' : 'hidden'}>
                <li  className='py-6 text-4xl' ><Link to='home' smooth={true} duration={300} onClick={handlNavBar}>Home</Link></li>
                <li className='py-6 text-4xl'><Link to='about' smooth={true} duration={300} onClick={handlNavBar}>About</Link></li>
                <li className='py-6 text-4xl'><Link to='skills' smooth={true} duration={300} onClick={handlNavBar}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link to='work' smooth={true} duration={300} onClick={handlNavBar}>My works</Link></li>
            </ul>

        </div>
    )
}

export default NavBar