import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

const SmoothScroll = () => {
    // smooth Scroll
    useEffect(() => {
        const lenis = new Lenis();

        // lenis.on('scroll', (e) => {
        //     console.log(e);
        //     // You can perform additional actions based on the scroll event here
        // });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            // Clean up any resources if needed when the component unmounts
            lenis.destroy();
        };
    }, []);
};

export default SmoothScroll;
