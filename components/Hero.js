// 
// import React, { useEffect, useRef, useState } from 'react';

// export default function Hero() {
//   const videoRef = useRef(null);
//   const cursorFollowerRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     setTimeout(() => {
//       videoRef.current.play();
//     }, 500);
//   }, []);

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const handleContainerMouseEnter = () => {
//       cursorFollowerRef.current.style.transition = 'transform 0.2s';
//     };

//     const handleContainerMouseLeave = () => {
//       cursorFollowerRef.current.style.transition = 'transform 0.5s';
//       cursorFollowerRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
//     };

//     containerRef.current.addEventListener('mouseenter', handleContainerMouseEnter);
//     containerRef.current.addEventListener('mouseleave', handleContainerMouseLeave);

//     return () => {
//       containerRef.current.removeEventListener('mouseenter', handleContainerMouseEnter);
//       containerRef.current.removeEventListener('mouseleave', handleContainerMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className='bg-white min-h-screen relative overflow-hidden duration-100'
//     >
//       <video
//         ref={videoRef}
//         className='absolute inset-0 object-cover w-full h-full min-h-screen'
//         loop
//         muted
//         src="/Assets/reel-loop.mp4"
//       ></video>
//       <div
//         ref={cursorFollowerRef}
//         className="cursor-follower text-center font-bold duration-500  uppercase absolute w-24 h-24 bg-white rounded-full flex items-center justify-center text-black shadow"
//         style={{
//           left: `${mousePosition.x}px`,
//           top: `${mousePosition.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         <span>watch <br /> reel</span>
//       </div>
//     </div>
//   );
// }


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