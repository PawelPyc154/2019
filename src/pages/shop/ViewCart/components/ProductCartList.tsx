import React from 'react';
import './ProductCartList.scss';
import { useSelector } from 'react-redux';
import BasketOfProductType from '../../../../state/BasketOfProducts/BasketOfProduct';
import Product from './Product';

export interface ProductCartListProps {}

const ProductCartList: React.SFC<ProductCartListProps> = () => {
  const BasketOfProducts = useSelector(
    (state: { BasketOfProductsReducer: BasketOfProductType[] }) => state.BasketOfProductsReducer,
  );

  return (
    <section className="ProductCartList">
      <ul className="ProductCartList__headers">
        <li className="ProductCartList__headersItem">PRODUCT</li>
        <li className="ProductCartList__headersItem ProductCartList__qty">QTY</li>
        <li className="ProductCartList__headersItem ProductCartList__quantity">QUANTITY</li>
        <li className="ProductCartList__headersItem">TOTAL</li>
      </ul>
      <ul className="ProductCartList__iiems">
        {BasketOfProducts.map(BasketOfProduct => (
          <li className="ProductCartList__item" key={BasketOfProduct.name}>
            <Product data={BasketOfProduct} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCartList;
