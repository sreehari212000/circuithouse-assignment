import { motion } from 'motion/react'
import React from 'react'

const items = {
    hidden: {opacity: 0, y:30},
    show: {opacity: 1, y:0, transition:{duration: 1}}
}


const MobileMenuProductBrick = ({title, image, style}) => {
  return (
    <motion.div variants={items} initial='hidden' animate='show' className={`flex justify-between px-8 items-center bg-gray-50 ${style} rounded `}>
        <motion.h1 variants={items} className='text-2xl font-semibold'>{title}</motion.h1>
        <motion.img variants={items} src={image} alt="" className='w-14'/>
    </motion.div>
  )
}

export default MobileMenuProductBrick