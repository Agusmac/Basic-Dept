import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className=' mt-20 md:mt-40 lg:mt-[14.5vw] text-[#f4f4f4] w-full py-[60px] xl:py-[120px] px-[5.4vw] md:px-11 xl:px-[76.8px] bg-[#252422]'>
                <div className='flex flex-col xl:flex-row'>
                    <div className='flex-1'>
                        <Image className='w-[68px] h-[22px] ' src='/Assets/BD-white-logo.svg' alt='BD-logo' width={175} height={57.5} />
                    </div>
                    <div className='flex-1'>
                        <p className='mt-[50px] xl:mt-0 font-medium text-[22px] sm:text-2xl xl:text-[31px] leading-none max-w-[83%]'>We collaborate with ambitious brands and people. Let&apos;s build.<span className='underline'> biz@basicagency.com</span></p>
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row mt-[80px] lg:mt-[120px] gap-y-[50px]'>
                    <div className='flex-1 '>
                        <div className='w-full xl:max-w-[83%]'>
                            <p className='uppercase font-medium text-sm md:text-lg tracking-tight leading-none'><span className='mr-[6px]'>●</span> Stay in the know</p>
                            <div className='mt-5 flex text-sm md:text-[17px] justify-between items-center text-[#939393] '>
                                <p>Email Address</p>
                                <Image className='' src='/Assets/Arrow-right-white.svg' alt='BD-logo' width={17} height={17} />
                            </div>
                            <hr className={` border-[1px] mt-3 border-[#f4f4f4] `} />

                        </div>
                    </div>
                    <div className='flex flex-1 justify-between flex-col xl:flex-row gap-y-[50px]'>
                        <div className='flex-1'><p className='uppercase font-medium text-sm md:text-lg tracking-tight leading-none  '><span className='mr-[6px]'>●</span> Social</p>
                            <div className='mt-6 leading-none space-y-[4.8px] text-sm md:text-[17px]'>
                                <p className='hover:underline cursor-pointer'>Instagram</p>
                                <p className='hover:underline cursor-pointer'>Twitter</p>
                                <p className='hover:underline cursor-pointer'>Linkedin</p>
                                <p className='hover:underline cursor-pointer'>Facebook</p>
                            </div>
                        </div>
                        <div className='flex-1'><p className='uppercase font-medium text-sm md:text-lg tracking-tight leading-none'><span className='mr-[6px]'>●</span> Initiatives</p>
                            <div className='mt-6 leading-none space-y-[4.8px] text-sm md:text-[17px]'>
                                <p className='hover:underline cursor-pointer'>Crafted</p>
                                <p className='hover:underline cursor-pointer'>Applied</p>
                                <p className='hover:underline cursor-pointer'>Brandbeats</p>
                                <p className='hover:underline cursor-pointer'>Moves</p>
                                <p className='hover:underline cursor-pointer'>B®/Good</p>
                            </div>
                        </div>
                        <div className='flex-1'><p className='uppercase font-medium text-sm md:text-lg tracking-tight leading-none'><span className='mr-[6px]'>●</span> Offices</p>
                            <div className='mt-6 leading-none space-y-[4.8px] text-sm md:text-[17px]'>
                                <p className='hover:underline cursor-pointer'>San Diego - CA</p>
                                <p className='hover:underline cursor-pointer'>New York - NY</p>
                                <p className='hover:underline cursor-pointer'>Bay Area - CA</p>
                                <p className='hover:underline cursor-pointer'>St. Louis - MO</p>
                                <p className='hover:underline cursor-pointer'>Amsterdam - NL</p>
                                <p className='hover:underline cursor-pointer'>London - EN</p>
                                <p className='hover:underline cursor-pointer'>Berlin - GE</p>
                                <p className='hover:underline cursor-pointer'>Argentina - AR</p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='  text-[#818181] text-[11px] tracking-[-0.1728px] py-5 bg-[#191918] uppercase font-medium flex flex-col md:flex-row justify-center md:justify-between items-center px-[5.4vw] md:px-11 xl:px-[76.8px] gap-y-1'>
                <p className='flex-1'>BASIC/DEPT®, Inc 10 - 23©</p>
                <p className='flex-1 text-center'>Easy to understand, impossible to ignore.™</p>
                <p className='flex-1 text-right'>Terms, Privacy Policy</p>
            </div>
        </>
    )
}
// text-[#5e5e5e]