import Image from 'next/image'
import React from 'react'

export default function NewsCard({ inView, img, title, date }) {

    return (
        <div className='group cursor-pointer group-news'>
            <hr className={`w-full mt-[50px] mb-5 ${inView ? 'border-[#f9cdcd] duration-[650ms] ease-in-out' : 'border-[#252422]'}`} />
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='overflow-hidden relative news-img h-full'>
                    <Image draggable='false' className='w-full h-full duration-[250ms] ease-out scale-105 group-hover:scale-100 ' src={'/Assets/' + img} alt='BD-logo' quality={100} width={720} height={528} />
                </div>
                <div className='flex flex-col justify-between w-full flex-1'>

                    <p className='md:hidden md:max-w-[75%] font-medium uppercase text-2xl leading-[26px] xl:text-[40.5px] tracking-[-2.016px] xl:leading-[44px] group-hover:underline relative -top-1'>{title}</p>
                    <div className='w-full flex justify-between items-center md:items-start mt-[50px] md:mt-0'>
                        <p className='hidden md:inline-block md:max-w-[75%] font-medium uppercase text-2xl leading-[26px] xl:text-[40.5px] tracking-[-2.016px] xl:leading-[44px] group-hover:underline relative -top-1'>{title}</p>
                        <p className='md:hidden text-xs text-[13.44px] tracking-[-0.269px] leading-[15.3167px] font-bold uppercase'>Press <span className='font-medium'>{date}</span></p>

                        <div className='overflow-hidden'>
                            <Image draggable='false' className='arrow-right w-5 h-5 md:h-[30px] md:w-[30px] ' src='/Assets/Arrow-right.svg' alt='BD-logo' quality={100} width={30} height={30} />
                        </div>
                    </div>
                    <p className='hidden md:inline-block text-[13.44px] tracking-[-0.269px] leading-[15.3167px] font-bold uppercase'>Press <span className='font-medium'>{date}</span></p>
                </div>
            </div>
        </div>
    )
}
