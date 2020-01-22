import React from 'react';
import FirstSection from '../../components/FirstSection';
import Article from '../../components/Article';

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
  };

  return (
    <>
      <FirstSection data={data.firstSection} />
      <Article data={data.discover} />
    </>
  );
};

export default Menu;
