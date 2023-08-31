import Image from 'next/image'
import DragScroll from './Helpers.js/DragScroll';

export function Featured({ inView }) {
    DragScroll('.scrollable-container-2')


    return (
        <>
            <div className='w-full px-[5.4vw] md:px-11 xl:px-[76.8px] '>
                <hr className={`w-full mb-5 ${inView ? 'border-[#f9cdcd] duration-[650ms] ease-in-out' : 'border-[#252422]'}`} />
                <div className='w-full flex gap-5 font-medium text-xs md:text-[13.44px] tracking-[-0.269px] leading-4'>
                    <div className='flex-1'>00<p className='xl:hidden'>/05</p></div>
                    <div className='flex-1 hidden xl:inline-block'>/05</div>
                    <div className='flex-1 flex flex-col items-end'><p className='opacity-0 xl:opacity-100'>●</p><p className='xl:hidden'>●</p></div>
                </div>

                <p className='font-bold mb-[14.6vw] xl:mb-[120px] mt-[60px] xl:mt-20 uppercase text-2xl leading-[26px]  xl:text-[40.5px] tracking-[-2.016px] xl:leading-[44px]'>Featured <br /> Engagements</p>
            </div>

            {/* Carousel */}
            <div className='w-full flex gap-5 overflow-x-scroll scrollbar-hide scrollable-container-2 px-[5.4vw] md:px-11 xl:px-[76.8px]'>

                <div className='flex-1 featured-item cursor-pointer '>
                    <div className='overflow-hidden relative'>
                        <Image placeholder='empty' className='max-h-[38.5px] w-auto' src='/Assets/Google-logo.webp' alt='BD-logo' quality={100} width={720} height={244} />
                        <hr className={`w-5 border-[1px] mt-5 mb-[50px] duration-[650ms] ease-in-out md:mb-24 ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />
                    </div>
                    <p className='text-lg md:text-[21.12px] tracking-[-0.1728px] leading-5 mb-5 font-bold uppercase'>Google</p>
                    <p className='mt-[6px] text-sm md:text-lg leading-5 md:leading-6 tracking-[-0.1728px] font-medium w-11/12 xl:w-4/5 '>Our embedded partnership with Google is as deep as it gets. We&apos;re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership <span className='underline'>here</span>.</p>
                </div>

                <div className='flex-1 featured-item cursor-pointer '>
                    <div className='overflow-hidden relative'>
                        <Image placeholder='empty' className='w-auto  max-h-[38.5px]' src='/Assets/Kfc-logo.webp' alt='BD-logo' quality={100} width={720} height={244} />
                        <hr className={`w-5 border-[1px] mt-5 mb-[50px] duration-[650ms] ease-in-out md:mb-24 ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />

                    </div>
                    <p className='text-lg md:text-[21.12px] tracking-[-0.1728px] leading-5 mb-5 font-bold uppercase'>KFC</p>
                    <p className='mt-[6px] text-sm md:text-lg leading-5 md:leading-6 tracking-[-0.1728px] font-medium w-11/12 xl:w-4/5'>An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC&apos;s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership <span className='underline'>here</span>.</p>
                </div>

                <div className='flex-1 featured-item cursor-pointer '>
                    <div className='overflow-hidden relative'>
                        <Image placeholder='empty' className='w-auto max-h-[38.5px]' src='/Assets/Wilson-logo.webp' alt='BD-logo' quality={100} width={720} height={244} />
                        <hr className={`w-5 border-[1px] mt-5 mb-[50px] duration-[650ms] ease-in-out md:mb-24 ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />

                    </div>
                    <p className='text-lg md:text-[21.12px] tracking-[-0.1728px] leading-5 mb-5 font-bold uppercase'>WILSON</p>
                    <p className='mt-[6px] text-sm md:text-lg leading-5 md:leading-6 tracking-[-0.1728px] font-medium w-11/12 xl:w-4/5'>A reimagining of Wilson&apos;s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand&apos;s 108-year history. Read our full case study <span className='underline'>here</span>.</p>
                </div>

                <div className='flex-1 featured-item cursor-pointer '>
                    <div className='overflow-hidden relative'>
                        <Image placeholder='empty' className='w-auto max-h-[38.5px]' src='/Assets/AtAt-logo.webp' alt='BD-logo' quality={100} width={720} height={244} />
                        <hr className={`w-5 border-[1px] mt-5 mb-[50px] duration-[650ms] ease-in-out  md:mb-24 ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />

                    </div>
                    <p className='text-lg md:text-[21.12px] tracking-[-0.1728px] leading-5 mb-5 font-bold uppercase'>AT&T</p>
                    <p className='mt-[6px] text-sm md:text-lg leading-5 md:leading-6 tracking-[-0.1728px] font-medium w-11/12 xl:w-4/5'>Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.</p>
                </div>

                <div className='flex-1 featured-item cursor-pointer '>
                    <div className='overflow-hidden relative'>
                        <Image placeholder='empty' className='w-auto max-h-[38.5px]' src='/Assets/Patagonia-logo.webp' alt='BD-logo' quality={100} width={720} height={244} />
                        <hr className={`w-5 border-[1px] mt-5 mb-[50px] duration-[650ms] ease-in-out md:mb-24 ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />

                    </div>
                    <p className='text-lg md:text-[21.12px] tracking-[-0.1728px] leading-5 mb-5 font-bold uppercase'>PATAGONIA</p>
                    <p className='mt-[6px] text-sm md:text-lg leading-5 md:leading-6 tracking-[-0.1728px] font-medium w-11/12 xl:w-4/5'>Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study <span className='underline'>here</span>.</p>

                </div>
            </div>
            <div className='w-full px-[5.4vw] md:px-11 xl:px-[76.8px] mt-[90px] xl:mt-[5.5vw]'>
                <hr className={`w-full duration-[650ms] ease-in-out ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'}`} />
            </div>
        </>
    )
}
