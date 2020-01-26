import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import FirstSection from '../../components/FirstSection';
import NavMenu from '../../components/NavMenu';
import ShopContainerItems from './components/ShopContainerItems';
// import Pagination from '../../components/Pagination';

const bg = require('../../images/shop/bg.png');

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
  const [active, setActive] = useState(1);

  const history = useHistory();
  useEffect(() => {
    history.push('/shop/allproducts');
  }, [history]);

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
      <NavMenu navLinks={data.navLinks} activePageReset={setActive} />
      <ShopContainerItems activePage={{ active, setActive }} />
    </>
  );
};

export default Shop;
