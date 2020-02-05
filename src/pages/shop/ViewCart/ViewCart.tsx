import React from 'react';
import ProductCartList from './components/ProductCartList';
import Summary from './components/Summary';

export interface ViewCartProps {}

const ViewCart: React.SFC<ViewCartProps> = () => {
  return (
    <div>
      <ProductCartList />
      <Summary />
    </div>
  );
};

export default ViewCart;
