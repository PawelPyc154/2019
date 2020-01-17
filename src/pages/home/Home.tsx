import React from 'react';

import ForYou from './sections/ForYou';
import About from './sections/About';
import Lunch from './sections/Lunch';
import Menu from './sections/Menu';
import Remantic from './sections/Remantic';
import Reservation from './sections/Reservation';
import OurServices from './sections/OurServices';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <ForYou />
      <About />
      <Lunch />
      <Menu />
      <Remantic />
      <Reservation />
      <OurServices />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
