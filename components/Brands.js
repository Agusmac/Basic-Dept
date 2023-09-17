import Image from 'next/image'
import React from 'react'
// import DragScroll from './DragScrollSmooth';
import DragScroll from './Helpers.js/DragScroll';

export default function Brands() {
    DragScroll('.scrollable-container-1')
    
    return (
        <div className='w-full px-[5.4vw] md:px-11 xl:px-[76.8px] mb-[12.5vw] flex gap-5 overflow-x-scroll scrollbar-hide uppercase scrollable-container-1 '>
            <div className='flex-1 group cursor-pointer list-itemer'>
                <div className='overflow-hidden relative'>
                    <Image draggable='false' className='will-change-auto transform-gpu w-full h-full duration-[250ms] scale-105 group-hover:scale-100  ease-out' src='/Assets/Patagonia.webp' alt='BD-logo' quality={100} width={1024} height={1280} />
                </div>
                <p className='mt-5 text-xl font-bold group-hover:underline underline-offset-2 decoration-2'>PATAGONIA</p>
                <p className='mt-[6px] text-[13.44px] leading-tight tracking-[-0.1728px] font-medium w-1/2'>An eCommerce experience driven by Patagonia&apos;s brand mission</p>
            </div>
            <div className='flex-1 group cursor-pointer list-itemer'>
                <div className='overflow-hidden relative'>
                    <Image draggable='false' className='will-change-auto transform-gpu w-full h-full duration-[250ms] scale-105 group-hover:scale-100  ease-out' src='/Assets/Wilson.webp' alt='BD-logo' quality={100} width={1024} height={1280} />
                </div>
                <p className='mt-5 text-xl font-bold group-hover:underline underline-offset-2 decoration-2'>WILSON</p>
                <p className='mt-[6px] text-[13.44px] leading-tight tracking-[-0.1728px] font-medium w-1/2'>A century-old sports brand finding its place in culture</p>

            </div>
            <div className='flex-1 group cursor-pointer list-itemer'>
                <div className='overflow-hidden relative'>
                    <video draggable='false' alt='google-store-video'
                        // className='duration-[250ms] will-change-auto transform-gpu scale-105 group-hover:scale-100 ease-out'
                        className=' scale-105 '
                        autoPlay
                        loop
                        muted
                        src="/Assets/Google-store.mp4"
                    ></video>
                </div>
                <p className='mt-5 text-xl font-bold group-hover:underline underline-offset-2  decoration-2'>GOOGLE STORE</p>
                <p className='mt-[6px] text-[13.44px] leading-tight tracking-[-0.1728px] font-medium w-1/2'>An eCommerce experience helping Google bring its hardware to people across the globe</p>

            </div>
        </div>
    )
}
