import React from 'react'


const CameraCard = ({title, subtitle, price, image, style}) => {
  return (
    <div className={`border-b flex  flex-col justify-center items-center ${style} xl:border-r`}>
        <h1 className='text-3xl font-semibold mt-12'>{title}</h1>
        <h5 className={`text-gray-500 font-medium text-sm ${!price && "pb-14 pt-2"}`}>{subtitle}</h5>
        {price && <button className='border px-6 py-1  bg-yellow-400 text-black rounded-3xl my-6'>{price}</button>}
        <img src={image} alt="" className='w-36'/>
    </div>
  )
}

export default CameraCard