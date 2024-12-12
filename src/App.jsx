import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import CameraCard from './components/CameraCard'
import tadpole from "./assets/tadpole.png"
import opalc1 from "./assets/opalc1.png"
import composer from "./assets/composer.png"
import logo from "./assets/logoblack.png"
import Column from './components/Column'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import OfferCard from './components/OfferCard'
import { VscArrowRight } from "react-icons/vsc";
import { MdArrowUpward } from "react-icons/md";



function App() {
    const [scrollY, setScrollY] = useState(0);
    const [ismenuopen, setIsmenuopen] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])
    
  return (
    <div className='font-roobert'>
        {/* top section */}
        {ismenuopen && <MobileMenu tadpole={tadpole} opalc1={opalc1} composer={composer} setIsmenuopen={setIsmenuopen}/>}
        <div className='bg-[url("./assets/herosm.webp")] md:bg-[url("./assets/heromd.webp")] lg:bg-[url("./assets/herolg.webp")] xl:bg-[url("./assets/heroxl.webp")] 2xl:bg-[url("./assets/hero2xl.webp")] bg-cover  h-[1250px] xl:h-[1500px] 3xl:h-[3000px]'>
            <OfferCard />
            <Navbar setIsmenuopen={setIsmenuopen} scrollY={scrollY}/>
            <div className='text-white pt-36 w-fit mx-auto lg:mx-64 lg:pt-96 flex flex-col gap-10 items-start'>
                <h1 className='text-2xl font-medium lg:text-4xl text-center lg:text-left leading-10'>The first webcam <br /> designed for laptops.</h1>
                <button className='px-6 py-2 text-base font-medium bg-yellow-400 text-black rounded-3xl'>Availabe now for $129</button>
            </div>
        </div>
        {/* mid section */}
        <div className='grid md:grid-rows-2 lg:grid-rows-1 md:grid-cols-2  xl:grid-cols-3 '>
            <CameraCard title={"Tadpole"} subtitle={"The tiny webcam with a cliTermsp"} price={"Now $129"} image={tadpole} style={"md:col-span-3 xl:col-span-1"}/>
            <CameraCard title={"Opal C1"} subtitle={"The first professional webcam"} price={"$299"} image={opalc1} style={"pb-20 md:border-r"}/>
            <CameraCard title={"Composer"} subtitle={"The magic behind the camera"}  image={composer} style={"pb-20"}/>
        </div>


        <div className='px-3 pt-10'>
            <img src={logo} alt="" className=''/>
            <div className='grid grid-cols-2 grid-rows-2 gap-x-7 mt-6 xl:mx-24 xl:gap-x-[390px]'>
                <div className='border-t hidden md:block xl:relative top-[-150px]'>
                    <h1 className='text-xl font-semibold py-6'>Subscribe to the <br /> Opal Newsletter</h1>
                    <p className='text-sm'>Latest news, musings, announcements <br /> and updates direct to your inbox.</p>
                    <button className='border py-2 pl-16 my-6 pr-4 rounded-3xl bg-black hover:bg-yellow-500 group hover:border-black hover:border-2 transition-all ease-in-out duration-300'><VscArrowRight size={25} className='text-white group-hover:text-black group-hover:translate-x-[-24px] transition-all duration-300 ease-in-out'/></button>
                </div>


                <div className='flex border-t pb-20 justify-between text-sm col-span-2 md:col-span-1 xl:relative top-[-150px]'>
                    <Column heading={"Products"} item1={"Tadpole"} item2={"Opal C1"} item3={"Composer"}/>
                    <Column heading={"Company"} item1={"About"} item2={"Terms"} item3={"Privacy"}/>
                    <Column heading={"Resources"} item1={"Support"} item2={"Media kit"} item3={"Downloads"} item4={"Newsletter"}/>
                    <Column heading={"Social"} item1={"Instagram"} item2={"Twitter"}/>
                </div>


                <Footer />


                <div className='text-right hidden md:block'>
                    <button className='p-2 bg-gray-300 rounded-full'><MdArrowUpward size={30}/></button>
                </div>


            </div>
        </div>
        
    </div>
  )
}

export default App
