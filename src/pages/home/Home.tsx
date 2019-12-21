import React, { useState, useEffect } from 'react';

import Section1 from './Section1';

import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';

import Section9 from './Section9';

export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);
  console.log(scrollY);

  return (
    <>
      <Section1 />
      <Section2 scroll={scrollY} />
      <Section3 />
      <Section4 scroll={scrollY} />
      <Section5 />
      <Section6 scroll={scrollY} />
      <Section7 />
      <Section8 />
      <Section9 scroll={scrollY} />
    </>
  );
};

export default Home;
