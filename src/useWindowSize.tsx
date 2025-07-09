import { useState, useEffect } from 'react';

export interface WindowSize {
	width: number
	height: number
}

export function useWindowAtLeast(x: number, y: number = -1 ) {
	const [windowSize, setWindowSize] = useState<WindowSize>({
    width: -1,
    height: -1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize.width >= x && (y != -1 ? windowSize.height >= y : true);
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: -1,
    height: -1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}