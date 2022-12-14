import { useEffect, useRef } from 'react';

const useAnimationFrame = (callback, deps) => {
  const requestAnimationFrameRef = useRef();
  const prevTimeRef = useRef(0);

  const animate = (time) => {
    const deltaTime = time - prevTimeRef.current;
    callback(deltaTime);
    prevTimeRef.current = time;
    requestAnimationFrameRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrameRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestAnimationFrameRef.current);
  }, [deps]);
};

export default useAnimationFrame;
