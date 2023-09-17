import React, { useEffect, useRef } from 'react';

export default function Slider({ inView }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (inView) videoRef.current.play();
        if (!inView) videoRef.current.pause();
    }, [inView])

    return (
        <div className="flex flex-col-reverse md:flex-row w-full px-[5.4vw] md:px-11 xl:px-[76.8px] gap-x-5 relative mt-[12.5vw]">
            <div className="flex-1 relative uppercase">
                <div className="md:sticky md:top-20 mt-[50px] md:mt-0 ">
                    {/* <p className="text-[120px] leading-[108px] font-bold tracking-tighter"> */}
                    <p className="text-[40px] sm:text-[46px] lg:text-[6.25vw] leading-[0.9] font-bold tracking-tighter">
                        BASIC/DEPT® <br className='hidden lg:inline-block' />
                        HELPS <br className='hidden lg:inline-block' />
                        BRANDS ● <br className='hidden lg:inline-block' />
                        CONNECT W/ <br className='hidden lg:inline-block' />
                        CULTURE
                    </p>
                    <p className='text-sm lg:text-lg font-normal mt-[25px] tracking-[-0.1728px] leading-6'>Adweek <span className='font-bold'>Agency Spotlight</span></p>

                    <div className={`relative overflow-hidden group grid place-content-center mt-[25px] xl:mt-[76.8px] border cursor-pointer rounded-2xl ${inView ? 'border-[#f9cdcd]' : 'border-[#252422]'} hover:border-transparent  py-[6px] px-[29px] text-[11px] tracking-[-0.22px] w-fit uppercase font-bold duration-[250ms] ease-out`}>
                        <p className={`z-10 ${inView ? 'group-hover:text-[#252422]' : 'group-hover:text-[#f4f4f4]'} duration-[250ms] ease-out`}>About us</p>
                        <div className={`w-full h-full absolute inset-0 ${inView ? 'bg-[#f9cdcd]' : 'bg-[#252422]'} duration-[250ms] translate-y-8 group-hover:translate-y-0 ease-out`}></div>
                    </div>

                </div>
            </div>
            <div className={`flex-1 duration-[650ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'} `}>
                <video ref={videoRef} draggable="false" autoPlay loop muted src="/Assets/Culture-Loop.mp4" ></video>
            </div>
        </div>


    );
}
{/* <video draggable='false'
    className='duration-[250ms] scale-105 group-hover:scale-100 ease-out'
    autoPlay
    loop
    muted
    src="/Assets/Google-store.mp4"
></video> */}