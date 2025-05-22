
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  lightMode?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ lightMode = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full ${
          lightMode ? 'bg-agency-dark/5' : 'bg-white/10'
        } backdrop-blur-sm mix-blend-difference`}
        style={{
          height: isPointer ? 40 : 20,
          width: isPointer ? 40 : 20,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          scale: isActive ? 0.8 : 1,
          height: isPointer ? 40 : 20,
          width: isPointer ? 40 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full ${
          lightMode ? 'bg-agency-dark' : 'bg-white'
        } mix-blend-difference`}
        style={{
          height: 5,
          width: 5,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 28,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
