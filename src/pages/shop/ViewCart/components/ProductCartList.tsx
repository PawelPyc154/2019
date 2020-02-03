import React from 'react';
import './ProductCartList.scss';

export interface ProductCartListProps {}

const ProductCartList: React.SFC<ProductCartListProps> = () => {
  return (
    <section className="ProductCartList">
      <ul className="ProductCartList__Headers">
        <li className="ProductCartList__HeadersItem">PRODUCT</li>
        <li className="ProductCartList__HeadersItem">QUANTITY</li>
        <li className="ProductCartList__HeadersItem">TOTAL</li>
      </ul>
    </section>
  );
};

export default ProductCartList;
