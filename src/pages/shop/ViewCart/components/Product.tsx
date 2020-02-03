import React from 'react';
import './Product.scss';

export interface ProductProps {}

const Product: React.SFC<ProductProps> = () => {
  return (
    <div className="Product">
      <img src="" alt="" className="Product__image" />
      <h6 className="Product__name">name</h6>
      <p className="Product__cost">cost</p>
    </div>
  );
};

export default Product;
