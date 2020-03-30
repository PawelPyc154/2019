import { useState, useEffect } from 'react';

const useScroll = (tagRef: React.RefObject<HTMLDivElement>, yOffset: number = 1): boolean => {
  const [scrollY, setScrollY] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    if (scrollY > -yOffset) {
      window.addEventListener('scroll', () => {
        if (tagRef.current) {
          setScrollY(tagRef.current.getBoundingClientRect().y - window.innerHeight);
        }
      });
    } else {
      setAnimationStart(true);
    }
  }, [scrollY, tagRef, yOffset]);

  return animationStart;
};
export default useScroll;

export interface ScrolllProps {}
