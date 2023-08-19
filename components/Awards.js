import Image from 'next/image'
import React from 'react'

export default function Awards() {
    return (
        <div className='w-full flex px-[27px] md:px-11 xl:px-[76.8px] py-[15vw] uppercase tracking-tight md:leading-5 font-medium '>
            <div className='flex-1 flex flex-col items-center justify-start group cursor-pointer'>
                <Image src='/Assets/adAge-logo.svg' className='w-[75%] md:w-[55%] xl:w-[40%] h-[7vw] group-hover:scale-[1.05] duration-[250ms] ease-out' alt='award logo' quality={100} width={1308.82} height={403.08}></Image>
                <p className='text-[10px] md:text-xs  text-center mt-8 md:mt-10 group-hover:underline underline-offset-2 decoration-2'>Design and <br className='md:hidden' /> Branding<br className='hidden md:inline-block' /> Agency of the Year</p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-start group cursor-pointer'>
                <Image src='/Assets/webby-logo.svg' className='w-[75%] md:w-[55%] xl:w-[40%] h-[7vw] group-hover:scale-[1.05] duration-[250ms] ease-out' alt='award logo' quality={100} width={1310} height={969}></Image>
                <p className='text-[10px] md:text-xs text-center mt-8 md:mt-10 group-hover:underline underline-offset-2 decoration-2'>Agency of the Year</p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-start group cursor-pointer'>
                <Image src='/Assets/campaign-logo.svg' className='w-[75%] md:w-[55%] xl:w-[40%] h-[7vw] group-hover:scale-[1.05] duration-[250ms] ease-out' alt='award logo' quality={100} width={1313.49} height={292.31}></Image>
                <p className='text-[10px] md:text-xs text-center mt-8 md:mt-10 group-hover:underline underline-offset-2 decoration-2'>Digital Innovation Agency <br className='hidden md:inline-block' /> of the Year Finalist</p>
            </div>
        </div>
    )
}
