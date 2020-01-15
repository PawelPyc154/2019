import React from 'react';

import ForYou from './components/ForYou';
import About from './components/About';
import Lunch from './components/Lunch';
import Menu from './components/Menu';
import Remantic from './components/Remantic';
import Reservation from './components/Reservation';
import OurServices from './components/OurServices';
import Blog from './components/Blog';
import Contact from './components/Contact';

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
