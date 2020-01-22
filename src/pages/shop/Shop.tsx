import React from 'react';
import FirstSection from '../../components/FirstSection';

const bg = require('../../images/shop/bg.png');

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
  const data = {
    firstSection: {
      name: 'shop',
      text: 'order dishes online',
      image: bg,
    },
  };

  return (
    <>
      <FirstSection data={data.firstSection} />
    </>
  );
};

export default Shop;
