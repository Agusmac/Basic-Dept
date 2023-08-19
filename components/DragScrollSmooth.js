import { useEffect, useRef } from 'react';

const DragScroll = (divClass) => {
  const inertiaRef = useRef(null);

  useEffect(() => {
    const scrollableContainers = document.querySelectorAll(divClass);

    const inertiaDuration = 300;
    
    scrollableContainers.forEach((scrollableContainer) => {
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;
      let targetScroll = 0;
      let lastScrollTime = 0;

      const handleMouseDown = (e) => {
        cancelAnimationFrame(inertiaRef.current);
        isDragging = true;
        startX = e.pageX - scrollableContainer.offsetLeft;
        scrollLeft = scrollableContainer.scrollLeft;
        lastScrollTime = performance.now();
      };

      const handleMouseLeave = () => {
        isDragging = false;
      };

      const handleMouseUp = () => {
        if (isDragging) {
          inertiaRef.current = requestAnimationFrame(inertiaScroll);
          isDragging = false;
        }
      };

      const inertiaScroll = (timestamp) => {
        if (!isDragging) {
          const elapsed = timestamp - lastScrollTime;
          const inertiaDistance = (scrollLeft - targetScroll) * (Math.exp(-elapsed / inertiaDuration) - 1);
          scrollableContainer.scrollLeft = targetScroll + inertiaDistance;

          if (Math.abs(inertiaDistance) > 1) {
            inertiaRef.current = requestAnimationFrame(inertiaScroll);
          }
        }
      };

      const handleMouseMove = (e) => {
        if (isDragging) {
          e.preventDefault();
          const x = e.pageX - scrollableContainer.offsetLeft;
          targetScroll = scrollLeft - (x - startX) * 0.8;// change sensitivity
          lastScrollTime = performance.now();
          scrollableContainer.scrollLeft = targetScroll;
        }
      };

      scrollableContainer.addEventListener('mousedown', handleMouseDown);
      scrollableContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollableContainer.addEventListener('mouseup', handleMouseUp);
      scrollableContainer.addEventListener('mousemove', handleMouseMove);

      return () => {
        cancelAnimationFrame(inertiaRef.current);
        scrollableContainer.removeEventListener('mousedown', handleMouseDown);
        scrollableContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollableContainer.removeEventListener('mouseup', handleMouseUp);
        scrollableContainer.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, [divClass]);
};

export default DragScroll;
