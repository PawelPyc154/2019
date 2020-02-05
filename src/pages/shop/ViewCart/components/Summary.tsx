import React from 'react';
import './Summary.scss';
import { useSelector } from 'react-redux';
import BasketOfProductType from '../../../../state/BasketOfProducts/BasketOfProduct';

export interface SummaryProps {}

const Summary: React.SFC<SummaryProps> = () => {
  const BasketOfProducts = useSelector(
    (state: { BasketOfProductsReducer: BasketOfProductType[] }) => state.BasketOfProductsReducer,
  );

  const subtotal =
    BasketOfProducts.length !== 0
      ? BasketOfProducts?.map(BasketOfProduct => Number(BasketOfProduct.cost) * BasketOfProduct.quantity)
          .reduce((a, b) => a + b)
          .toFixed(2)
      : 0;

  return (
    <section className="Summary">
      <div className="Summary__container">
        <div className="Summary__name">SUBTOTAL</div>
        <div>{`$${subtotal}`}</div>
      </div>
      <div className="Summary__container">
        <div className="Summary__name">SHIPPING</div>
        <div>FREE SHIPPING</div>
      </div>
      <div className="Summary__container">
        <div className="Summary__calculate colorSecondary">CALCULATE SHIPPING</div>
      </div>
      <div className="Summary__container">
        <div className="Summary__name">TOTAL</div>
        <div className="Summary__value">{`$${subtotal}`}</div>
      </div>

      <button className="button Summary__button" type="button">
        PROCEED TO CHECKOUT
      </button>
    </section>
  );
};

export default Summary;
