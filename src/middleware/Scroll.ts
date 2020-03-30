import { useState, useEffect } from 'react';

const Scroll = (scrollRef: any, y: number = 1): boolean => {
  const [scrollY, setScrollY] = useState(0);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (scrollY > -y) {
      window.addEventListener('scroll', () => {
        if (!!scrollRef.current) {
          setScrollY(scrollRef.current.getBoundingClientRect().y - window.innerHeight);
        }
      });
    } else {
      setflag(true);
    }
  }, [scrollY, scrollRef, y]);

  return flag;
};
export default Scroll;

export interface ScrolllProps {}
