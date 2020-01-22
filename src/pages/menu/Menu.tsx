import React from 'react';
import FirstSection from '../../components/FirstSection';

const Layer12 = require('../../images/menu/Layer_12.png');

export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
  return <FirstSection name="menu" text="delicious and beautiful" image={Layer12} />;
};

export default Menu;
