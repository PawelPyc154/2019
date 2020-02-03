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
  console.log(BasketOfProducts);

  return (
    <section className="ProductCartList">
      <ul className="ProductCartList__Headers">
        <li className="ProductCartList__HeadersItem">PRODUCT</li>
        <li className="ProductCartList__HeadersItem">QUANTITY</li>
        <li className="ProductCartList__HeadersItem">TOTAL</li>
      </ul>
      <ul className="ProductCartList__Items">
        {BasketOfProducts.map(BasketOfProduct => (
          <li className="ProductCartList__Item" key={BasketOfProduct.name}>
            <Product />
            <div className="ProductCartList__quantity">quantity</div>
            <div className="ProductCartList__total">total</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCartList;
