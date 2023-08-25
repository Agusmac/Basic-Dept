import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {

    const [test, setTest] = useState(false)

    useEffect(() => {
        setTest(true)
    }, [])

    return (
        <div id='Loader' className={`fixed z-50 duration-1000 ease-[cubic-bezier(0.72,0,0.28,1)] min-h-screen
         bg-[#f4f4f4] inset-0 text-[#252422] grid place-content-center noise delay-500 ${test ? 'translate-y-[-100%] ' : 'translate-y-0'}`}>

            <div className={`relative overflow-hidden duration-500 ease-[cubic-bezier(0.5,0,0,1)] delay-[250ms] ${test ? 'translate-y-[-101%]' : 'translate-y-0'}`} >
                <Image priority className={`w-[35vw] h-auto duration-500 ease-[cubic-bezier(0.5,0,0,1)] delay-[250ms] ${test ? 'translate-y-[102%]' : ' translate-y-0'}`} src='/Assets/BDLoaderLogo.svg' alt='BD-logo' quality={100} width={672.16} height={315.22} />
            </div>
        </div>
    )
}


