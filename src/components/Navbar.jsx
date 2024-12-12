import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { VscArrowRight } from "react-icons/vsc";
import NavbarColumn from './NavbarColumn';
import {motion} from "motion/react" 
import OpalLogoSvg from './OpalLogoSvg';



const Navbar = ({setIsmenuopen, scrollY}) => {    
  return (
    <nav className={`text-white fixed w-screen top-10 ${scrollY > 0 && 'top-0.5'}`}>
        {/* for mobile screen */}
        <div  className={`mx-4 py-3 flex items-center justify-between border-b lg:border-none lg:ml-36 xl:mr-40 `}>

            <div className={`flex gap-20 group ${scrollY !== 0 && "hover:bg-white hover:pr-10 hover:pb-20 hover:rounded-lg transition-all duration-700 ease-in-out"}`}>
                <h1 className={`text-3xl mt-2 font-semibold ${scrollY !== 0 && 'group-hover:text-black'}`}>Opal</h1>
                <motion.div  className='hidden lg:flex  gap-10 group transition-all duration-300 ease-in-out'>
                    <NavbarColumn heading={"Products"} item1={"Tadpole"} item2={"Opal C1"} item3={"Composer"}  scrollY={scrollY}/>
                    <NavbarColumn heading={"Company"} item1={"About"} item2={"Terms"} item3={"Privacy"}  scrollY={scrollY}/>
                    <NavbarColumn heading={"Resources"} item1={"Support"} item2={"Media kit"} item3={"Downloads"} item4={"Newsletter"}  scrollY={scrollY}/>
                </motion.div>
            </div>
            <CgMenuGridR size={25} onClick={()=>setIsmenuopen(true)} className='lg:hidden '/>
            <div>
                <OpalLogoSvg />
                <div className={`mt-10 text-2xl hidden lg:block transition-all ease-in-out duration-300 ${scrollY === 0 ? "block" : "invisible"}`}>
                    <input type="text" placeholder='Newsletter' className='bg-transparent outline-none border-b border-gray-400 focus:border-black transition-all duration-1000 ease-in-out xl:w-96'/>
                    <button className='py-3 pr-3 pl-20 ml-4 rounded-3xl bg-gray-500  bg-opacity-10 group hover:bg-gradient-to-l from-blue-600 to-blue-800  hover:bg-blue-900'><VscArrowRight className='group-hover:translate-x-[-20px]'/></button>
                    <p className='text-[11px] italic font-semibold text-gray-500 mt-6'>By signing up, I agree with the data protection policy of Opal.</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar