import React from 'react';
import FirstSection from '../../components/FirstSection';
import NavMenu from '../../components/NavMenu';

const bg = require('../../images/shop/bg.png');

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
  const data = {
    firstSection: {
      name: 'shop',
      text: 'order dishes online',
      image: bg,
    },

    navLinks: [
      {
        navLinkName: 'ALL PRODUCTS ',
        navLinkPath: '/shop/allproducts',
      },
      {
        navLinkName: 'MAINS',
        navLinkPath: '/shop/mains',
      },
      {
        navLinkName: 'BREAKFAST',
        navLinkPath: '/shop/breakfast',
      },
      {
        navLinkName: 'DESSERTS',
        navLinkPath: '/shop/desserts',
      },
    ],
  };

  return (
    <>
      <FirstSection data={data.firstSection} />

      <NavMenu navLinks={data.navLinks} />
    </>
  );
};

export default Shop;
