import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null);

  // the video starts when the loader animation big div starts going up

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 500);
  }, [])
  

  return (
    <div className='bg-white min-h-screen relative overflow-hidden'>
      <video
        ref={videoRef}
        className='absolute inset-0 object-cover w-full h-full min-h-screen'
        // autoPlay
        loop
        muted
        src="/Assets/reel-loop.mp4"
      ></video>
    </div>
  )
}
