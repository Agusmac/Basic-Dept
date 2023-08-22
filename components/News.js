import Image from 'next/image'
import React from 'react'
import NewsCard from './NewsCard'

export default function News({ inView }) {

    const newsList = [
        { img: 'Car-mirror.webp', title: 'The new roadmap for auto brands', date: '8.1.23' },
        { img: 'Hammer.webp', title: 'Breaking Through the Branding Blahs', date: '6.16.23' },
        { img: 'Dark-shirt.webp', title: 'Ryan Parkhurst moderates talk on “The art and science of brand purpose and creativity”', date: '6.5.23' },
        { img: 'Bare-walls.webp', title: 'John Waters, Bare Walls, and Sparking Creativity', date: '5.15.23' },
        { img: 'Yellow-board.webp', title: 'BASIC/DEPT® is the 27th Webby Awards: Agency of the Year', date: '4.25.23' },
        { img: 'Crew-logo.webp', title: 'BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards', date: '4.4.23' },
        { img: 'Fridas.webp', title: "Women's History Month Spotlight at B/D®", date: '4.3.23' },
    ]

    return (
        <div className='w-full px-[5.4vw] md:px-11 xl:px-[76.8px] mt-[12.5vw] pt-[100px] sm:pt-0'>
            <div className=' flex justify-between items-center'>
                <p className='font-bold  uppercase text-2xl leading-[26px]  xl:text-[40.5px] tracking-[-2.016px] xl:leading-[44px]'>Featured <br />News</p>
                <div className={`relative overflow-hidden group grid place-content-center  border cursor-pointer rounded-2xl ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'} hover:border-transparent  py-[6px] px-[29px] text-[11px] tracking-[-0.22px] w-fit uppercase font-bold duration-[250ms] ease-out`}>
                    <p className={`z-10 ${inView ? 'group-hover:text-[#252422]' : 'group-hover:text-[#f4f4f4]'} duration-[250ms] ease-out`}>View All</p>
                    <div className={`w-full h-full absolute inset-0 ${inView ? 'bg-[#f9cdcd]' : 'bg-[#252422]'} duration-[250ms] translate-y-8 group-hover:translate-y-0 ease-out`}></div>
                </div>
            </div>
            {/*  */}
            {newsList.map((item, key) => <NewsCard key={key} inView={inView} img={item.img} title={item.title} date={item.date} />)}
        </div>
    )
}
