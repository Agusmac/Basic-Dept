import { useEffect } from 'react';

const DragScroll = (divClass) => {
  useEffect(() => {
    const scrollableContainer = document.querySelector(divClass);

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - scrollableContainer.offsetLeft;
      scrollLeft = scrollableContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging = false;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollableContainer.offsetLeft;
      const walk = (x - startX) * 1; // Adjust the scroll sensitivity as needed
      scrollableContainer.scrollLeft = scrollLeft - walk;
    };




    scrollableContainer.addEventListener('mousedown', handleMouseDown);
    scrollableContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollableContainer.addEventListener('mouseup', handleMouseUp);
    scrollableContainer.addEventListener('mousemove', handleMouseMove);

    // Clean up event listeners
    return () => {
      scrollableContainer.removeEventListener('mousedown', handleMouseDown);
      scrollableContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollableContainer.removeEventListener('mouseup', handleMouseUp);
      scrollableContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [divClass]);
};

export default DragScroll;
