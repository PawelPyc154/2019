import React from 'react';
import ForYou from './sections/ForYou';

import Lunch from './sections/Lunch';
import Remantic from './sections/Remantic';
import Reservation from './sections/Reservation';
import OurServices from './sections/OurServices';
import Blog from './sections/Blog';
import Article from '../../components/Article';
import Article2 from '../../components/Article2';
// Article2 images
const Layer1 = require('../../images/home/Layer_1.png');
const Layer3 = require('../../images/home/Layer_3.png');
// menu images
const Layer10 = require('../../images/home/Layer_10.png');
const Layer11 = require('../../images/home/Layer_11.png');
// contact images
const Layer15 = require('../../images/home/Layer_15.png');
const Layer18 = require('../../images/home/Layer_18.png');

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const data = {
    about: {
      title: 'about',
      name: 'WE CREATE DELICIOUS MEMORIES',
      text:
        'Renome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan’s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant’s grand modern architecture. Renome offers the room for private dining where guests enjoy creative foods and sumptuous late night desserts.',
      image: Layer1,
      image2: Layer3,
      link: '/about',
    },
    menu: {
      title: 'menu',
      name: 'DELICIOUS AND BEAUTIFUL',
      text:
        'In our menu you will find a great variety of delicious food that will satisfy the needs and tastes of everyone. We strive to source the highest quality ingredients for all of our dishes thereby enhancing the quality of services.',
      image: Layer10,
      image2: Layer11,
      link: '/menu',
    },
    contact: {
      title: 'contact',
      name: 'WE WELCOME YOU IN OUR RESTAURANT',
      text:
        'Please feel free to contact us with any questions or to make reservations. If no one is available to take your call, please leave a message. We will contact you as soon as possible.',
      image: Layer15,
      image2: Layer18,
      link: '/contact',
    },
  };
  return (
    <>
      <ForYou />
      <Article2 data={data.about} />
      <Lunch />
      <Article data={data.menu} />
      <Remantic />
      <Reservation />

      <OurServices />
      <Blog />
      <Article data={data.contact} />
    </>
  );
};

export default Home;
