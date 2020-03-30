import { useState, useEffect } from 'react';

const useScroll = (ref: React.RefObject<HTMLDivElement>, yOffset: number = 1): boolean => {
  const [scrollY, setScrollY] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    if (scrollY > -yOffset) {
      window.addEventListener('scroll', () => {
        if (ref.current) {
          setScrollY(ref.current.getBoundingClientRect().y - window.innerHeight);
        }
      });
    } else {
      setAnimationStart(true);
    }
  }, [scrollY, ref, yOffset]);

  return animationStart;
};
export default useScroll;

export interface ScrolllProps {}
