import React from 'react'
import {AnimatePresence, motion} from "motion/react"

const variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const items = {
    hidden: {opacity: 0, y:30},
    show: {opacity: 1, y:0, transition:{duration: 1}}
}

const NavbarColumn = ({heading, item1, item2, item3, item4, scrollY}) => {
  return (
    <AnimatePresence>
    <motion.div variants={variants} initial='hidden' animate='show' className='transition-all duration-1000 ease-in-out'>
        <p className={`text-white font-semibold mt-2 text-sm py-4 group-hover:visible ${ scrollY > 0 &&'group-hover:text-black '}`}>{heading}</p>
        <motion.div className={`flex flex-col transition-all duration-300 ease-in-out gap-2 text-sm text-gray-500 ${scrollY === 0 ? "visible" : "invisible opacity-0"} group-hover:visible group-hover:opacity-100`}>
            <motion.p variants={items}>{item1}</motion.p>
            <motion.p variants={items}>{item2}</motion.p>
            <motion.p variants={items}>{item3}</motion.p>
            <motion.p variants={items}>{item4}</motion.p>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default NavbarColumn