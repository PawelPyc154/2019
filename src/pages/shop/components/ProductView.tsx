/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { useParams } from 'react-router';
import meals from './meals.json';
import './ProductView.scss';

export interface ProductViewProps {}

const ProductView: React.SFC<ProductViewProps> = () => {
  const { id } = useParams();
  const [input, setinput] = useState('1');
  const idnumber = Number(id);

  const product = meals.find(meal => meal.id === idnumber);

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
          className="ProductView__input"
          type="number"
          name=""
          id=""
          step="1"
          value={input}
          onChange={item => setinput(item.target.value)}
        />
        <button className="ProductView__btn" type="button">
          ADD TO CART
        </button>
      </article>
    </section>
  );
};

export default ProductView;
