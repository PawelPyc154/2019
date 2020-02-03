import React from 'react';
import ProductCartList from './components/ProductCartList';

export interface ViewCartProps {}

const ViewCart: React.SFC<ViewCartProps> = () => {
  return (
    <div>
      <ProductCartList />
    </div>
  );
};

export default ViewCart;
