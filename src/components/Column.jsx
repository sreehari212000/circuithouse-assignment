import { motion } from 'motion/react'
import React from 'react'

const items = {
  hidden: {opacity: 0, y:30},
  show: {opacity: 1, y:0, transition:{duration: 2}}
}


const Column = ({heading, item1, item2, item3, item4, mobilemenu}) => {
  return (
    <motion.div variants={items} className=''>
        <p className={`text-gray-400 ${mobilemenu ? "text-xs py-4" : "py-4"}`}>{heading}</p>
        <div className={`flex flex-col gap-2 text-sm  font-medium ${mobilemenu && "text-gray-500"}`}>
            <p>{item1}</p>
            <p>{item2}</p>
            <p>{item3}</p>
            <p>{item4}</p>
        </div>
    </motion.div>
  )
}

export default Column