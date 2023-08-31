import { useState, useEffect } from 'react';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-follower uppercase absolute w-24 h-24 bg-white rounded-full flex items-center justify-center text-black shadow">
                <span>watch <br /> reel</span>
            </div>
            <style jsx>{`
        .cursor-follower {
          left: ${mousePosition.x}px;
          top: ${mousePosition.y}px;
          transform: translate(-50%, -50%);
        }
      `}</style>
        </>
    );
};

export default MouseFollower;
