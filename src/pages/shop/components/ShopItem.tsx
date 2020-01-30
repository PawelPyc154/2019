/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import './ShopItem.scss';
import { Link } from 'react-router-dom';

const img = require('../images/ChickenLivers.png');

export interface ShopItemProps {
  shopItem: { id: number; type: string; imagePath: string; title: string; cost: string };
}

const ShopItem: React.SFC<ShopItemProps> = ({ shopItem }) => {
  const { imagePath, title, cost, id } = shopItem;

  return (
    <Link to={`/shop/meal/${id}`} className="ShopItem__linkWrapper">
      <article className="ShopItem">
        <figure>
          <img src={require(`../images/${imagePath}.png`)} alt="" className="ShopItem__image" />
        </figure>

        <div className="ShopItem__title">{title}</div>
        <p className="ShopItem__cost">{`$${cost}`}</p>
      </article>
    </Link>
  );
};

export default ShopItem;
