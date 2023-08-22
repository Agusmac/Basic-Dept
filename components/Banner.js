import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='w-full px-[5.4vw] md:px-11 xl:px-[76.8px] mb-[30px] md:mb-[60px] xl:mb-[120px]'>
            <hr className='w-full mb-[60px] md:mb-[81.6px] border-[#252422]' />
            <div className='w-full flex flex-col xl:flex-row '>
                <div className='flex-1 2xl:pr-32  '>
                    <p className='font-medium text-[22px] sm:text-2xl leading-6 sm:max-w-[450px] lg:max-w-[600px] xl:max-w-full xl:text-4xl xl:leading-[39.6px] tracking-[-1.2768px]'>BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>
                    <div className='relative overflow-hidden group grid place-content-center mt-10 border cursor-pointer rounded-2xl border-[#252422] hover:border-transparent duration-[250ms] ease-out py-[6px] px-[29px] text-[11px] tracking-[-0.22px] w-fit uppercase font-bold'>
                        <p className='z-10 group-hover:text-[#f4f4f4] duration-[250ms] ease-out'>See The Work</p>
                        <div className='w-full h-full absolute inset-0 bg-[#252422] duration-[250ms] translate-y-8 group-hover:translate-y-0 ease-out'></div>
                    </div>
                </div>
                <div className='flex-1 flex justify-end mt-[60px] xl:mt-0'>
                    <Image className='w-[53.125vw] h-[17.1875vw] xl:w-[36.4583333333vw]  xl:h-[11.9791666667vw]' src='/Assets/BD-big-logo.svg' alt='BD-logo' quality={100} width={700} height={230} />
                </div>
            </div>
        </div>
    )
}
