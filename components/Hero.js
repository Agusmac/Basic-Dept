import React, { useEffect, useRef, useState } from 'react'

export default function Hero({ inView }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false)
  // the video starts when the loader animation big div starts going up

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
      setStarted(true)
    }, 500);
  }, [])


  useEffect(() => {
    if (inView & started) videoRef.current.play();
    if (!inView & started) videoRef.current.pause();
  }, [inView])

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