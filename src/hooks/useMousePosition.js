import { useState, useEffect } from 'react';

const useMousePosition = (initialMousePosition) => {
  const [mousePosition, setMousePosition] = useState({
    x: initialMousePosition.x || null,
    y: initialMousePosition.y || null,
  });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return mousePosition;
};

export default useMousePosition;
