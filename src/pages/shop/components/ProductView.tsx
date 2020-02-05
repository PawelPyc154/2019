/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import meals from './meals.json';
import './ProductView.scss';
import { addProductToBasket } from '../../../state/BasketOfProducts/action';

export interface ProductViewProps {}

const ProductView: React.SFC<ProductViewProps> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setinput] = useState('1');

  const idnumber = Number(id);

  const product = meals.find(meal => meal.id === idnumber);
  const history = useHistory();
  const handleClick = () => {
    if (product) {
      dispatch(
        addProductToBasket({
          name: product?.title,
          cost: product?.cost,
          quantity: Number(input),
          imagePath: product?.imagePath,
        }),
      );
    }
    history.push('/shop/ViewCart');
  };
  return (
    <section className="ProductView">
      <figure>
        <img src={require(`../images/${product && product.imagePath}.png`)} alt="" className="ProductView__image" />
      </figure>
      <article className="ProductView__article">
        <h3 className="ProductView__header">{product && product.title}</h3>
        <h5 className="ProductView__h5">{product && `$${product.cost}`}</h5>

        <p className="ProductView__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ad facilis perspiciatis magnam praesentium
          libero voluptates itaque ut laboriosam, repellat earum mollitia! Ipsa inventore magnam incidunt facilis nisi,
          a ullam!
        </p>

        <input
          className="inputQuantity ProductView__input"
          type="number"
          name=""
          id=""
          step="1"
          value={input}
          onChange={item => setinput(item.target.value)}
          min="1"
          max="20"
        />
        <button className="button" type="button" onClick={() => handleClick()}>
          ADD TO CART
        </button>
      </article>
    </section>
  );
};

export default ProductView;
