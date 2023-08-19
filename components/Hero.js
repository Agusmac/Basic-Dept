import React from 'react'

export default function Hero() {
    return (
        <div className='bg-white min-h-screen relative overflow-hidden'>
        <video
          className='absolute inset-0 object-cover w-full h-full min-h-screen'
          autoPlay
          loop
          muted
          src="/Assets/reel-loop.mp4"
        ></video>
      </div>
    )
}
