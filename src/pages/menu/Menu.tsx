import React from 'react';
import { Route } from 'react-router';
import FirstSection from '../../components/FirstSection';
import Article from '../../components/Article';
import NavMenu from '../../components/NavMenu';

import Lunch from './components/Lunch';
import Breakfast from './components/Breakfast';

const Layer12 = require('../../images/menu/Layer_12.png');

const Layer10 = require('../../images/home/Layer_10.png');
const Layer11 = require('../../images/home/Layer_11.png');

export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
  const data = {
    firstSection: {
      name: 'menu',

      text: 'delicious and beautiful',
      image: Layer12,
    },
    discover: {
      title: 'discover',
      name: 'OUR RESTAURANT MENU',
      text:
        'In our menu you will find a great variety of delicious food that will satisfy the needs and tastes of everyone. We strive to source the highest quality ingredients for all of our dishes thereby enhancing the quality of services.',
      image: Layer10,
      image2: Layer11,
    },
    navLinks: [
      {
        navLinkName: 'BREAKFAST',
        navLinkPath: '/menu/breakfast',
      },
      {
        navLinkName: 'LUNCH',
        navLinkPath: '/menu/lunch',
      },
      {
        navLinkName: 'DRINKS',
        navLinkPath: '/menu/drink',
      },
      {
        navLinkName: 'DESSERTS',
        navLinkPath: '/menu/desserts',
      },
    ],
  };

  return (
    <>
      <FirstSection data={data.firstSection} />
      <Article data={data.discover} />
      <NavMenu navLinks={data.navLinks} />
      <Route path="/menu/breakfast" exact component={Breakfast} />
      <Route path="/menu/lunch" exact component={Lunch} />
      <Route path="/menu/drink" exact component={Breakfast} />
      <Route path="/menu/desserts" exact component={Lunch} />
    </>
  );
};

export default Menu;
