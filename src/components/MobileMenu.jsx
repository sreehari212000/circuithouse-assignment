import React from 'react'
import { IoMdClose } from "react-icons/io";
import MobileMenuProductBrick from './MobileMenuProductBrick';
import tadpoleSmall from "../assets/tadpolesmall.png"
import Column from './Column';
import { AnimatePresence, motion } from 'motion/react';
import OpalLogoSvg from './OpalLogoSvg';

const variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}


const MobileMenu = ({ opalc1, composer, setIsmenuopen}) => {
  return (
    <AnimatePresence>
    <motion.div initial={{opacity: 0, y:15}} animate={{opacity:1, y:0}} exit={{opacity:0, y:15}} transition={{delay:0.25}} className='bg-transparent fixed bg-white px-4 w-screen lg:hidden z-10'>
        <div className='flex justify-between items-center py-2 border-b border-b-gray-400'>
            <h1 className='text-3xl font-semibold'>Opal</h1>
            <IoMdClose size={22} onClick={()=>setIsmenuopen(false)}/>
            <OpalLogoSvg />
        </div>
        <motion.div variants={variants} initial='hidden' animate='show' className='flex flex-col gap-1'>
            <MobileMenuProductBrick title={"Tadpole"} image={tadpoleSmall} style={"pt-10"}/>
            <MobileMenuProductBrick title={"C1"} image={opalc1} style="py-10"/>
            <MobileMenuProductBrick title={"Composer"} image={composer} style="py-10"/>
        </motion.div>
        <motion.div variants={variants} className='flex gap-8 mt-6'>
            <Column heading={"Company"} item1={"About"} item2={"Terms"} item3={"Privacy"} mobilemenu/>
            <Column heading={"Resources"} item1={"Support"} item2={"Media kit"} item3={"Downloads"} item4={"Newsletter"} mobilemenu/>
            <Column heading={"Social"} item1={"Instagram"} item2={"Twitter"}  mobilemenu/>
        </motion.div>
        <footer className='border-t flex justify-between text-sm mt-24 py-4'>
            <p>Opal Camera Inc.</p>
            <p>All rights reserved</p>
        </footer>
    </motion.div>
    </AnimatePresence>
  )
}

export default MobileMenu