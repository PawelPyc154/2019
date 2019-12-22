import React from 'react';

import ForYou from './ForYou';
import About from './About';
import Lunch from './Lunch';
import Menu from './Menu';
import Remantic from './Remantic';
import Reservation from './Reservation';
import OurServices from './OurServices';
import Blog from './Blog';
import Contact from './Contact';

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
