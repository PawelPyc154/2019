/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import './Product.scss';
import { useDispatch } from 'react-redux';
import BasketOfProductType from '../../../../state/BasketOfProducts/BasketOfProduct';
import { removeProductFromBasket, updateProductQuantity } from '../../../../state/BasketOfProducts/action';

export interface ProductProps {
  data: BasketOfProductType;
}

const Product: React.SFC<ProductProps> = ({ data }) => {
  const { name, cost, imagePath, quantity } = data;
  const dispatch = useDispatch();

  const handleRemoveProductFromBasket = (Productname: string) => {
    dispatch(removeProductFromBasket(Productname));
  };

  const handleUpdateQuantity = (Productname: string, value: string) => {
    dispatch(updateProductQuantity(Productname, Number(value)));
  };
  return (
    <>
      <div className="Product">
        <img src={require(`../../images/${imagePath}.png`)} alt="" className="Product__image" />
        <div className="Product__container">
          <h6 className="Product__name">{name}</h6>
          <p className="Product__cost">{`$${cost}`}</p>
        </div>
      </div>
      <input
        className="inputQuantity"
        type="number"
        name=""
        id=""
        step="1"
        value={quantity}
        onChange={item => handleUpdateQuantity(name, item.target.value)}
        min="1"
        max="20"
      />
      <div className="ProductCartList__total">{`$${Number(cost) * quantity}`}</div>
      <button type="button" className="ProductCartList__btn" onClick={() => handleRemoveProductFromBasket(name)}>
        x
      </button>
    </>
  );
};

export default Product;
