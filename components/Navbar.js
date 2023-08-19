
import React from 'react'
// import Image from 'next/image'
// const imageStyle = {

// }
{/* <Image className='svg-white' style={imageStyle} src='/Assets/navbar-logo.svg' width={153.59} height={20.43} /> */ }


export default function Navbar() {
    return (
        <div className=' duration-500 ease-in-out absolute z-10 top-0 w-full xl:h-24 h-[75px] 2xl:h-[121px] flex items-center text-white'>

            <div className='flex justify-between w-full px-7 xl:px-20 2xl:px-[76.800px] mx-auto'>
                <div className='flex-1 flex items-center font-bold text-[22px] xl:text-2xl tracking-tight leading-4'>BASIC/DEPT<span className='relative text-lg font-normal right-[3px] top-[4.5px]'>®</span> </div>
                <div className='hidden xl:flex flex-1 justify-center items-end uppercase text-[13.44px] font-medium tracking-tight'>
                    <div className='px-[28.8px] underlined'>work</div>
                    <div className='px-[28.8px] underlined'>about</div>
                    <div className='px-[28.8px] underlined'>news</div>
                    <div className='px-[28.8px] underlined'>thinking</div>
                    <div className='px-[28.8px] underlined'>carrers</div>
                    <div className='px-[28.8px] underlined'>contact</div>
                </div>
                <div className='flex-1 flex group duration-75  justify-end items-center'>
                    <div className='w-[5px] relative right-0 group-hover:right-[3px] duration-75 h-[5px] bg-white rounded-full'></div>
                    <div className='w-[5px] mx-[3px] duration-75 h-[5px] bg-white rounded-full '>
                    </div>
                    <div className='w-[5px] relative left-0 group-hover:left-[3px] duration-75 h-[5px] bg-white rounded-full'></div>
                </div>
            </div>

        </div>
    )
}
