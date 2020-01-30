import React, { useEffect, useState } from 'react';
import { useHistory, Route } from 'react-router';
import FirstSection from '../../components/FirstSection';
import NavMenu from '../../components/NavMenu';
import ShopContainerItems from './components/ShopContainerItems';
import ProductView from './components/ProductView';
// import Pagination from '../../components/Pagination';

const bg = require('../../images/shop/bg.png');

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
  const [active, setActive] = useState(1);

  const history = useHistory();
  useEffect(() => {
    history.push('/shop/meals/allproducts');
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
        navLinkPath: '/shop/meals/allproducts',
      },
      {
        navLinkName: 'MAINS',
        navLinkPath: '/shop/meals/mains',
      },
      {
        navLinkName: 'BREAKFAST',
        navLinkPath: '/shop/meals/breakfast',
      },
      {
        navLinkName: 'DESSERTS',
        navLinkPath: '/shop/meals/desserts',
      },
    ],
  };

  return (
    <>
      <FirstSection data={data.firstSection} />

      <Route path="/shop/meals">
        <NavMenu navLinks={data.navLinks} activePageReset={setActive} />
        <ShopContainerItems activePage={{ active, setActive }} />
      </Route>

      <Route path="/shop/meal/:id">
        <ProductView />
      </Route>
    </>
  );
};

export default Shop;
