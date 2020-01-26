/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import './ShopItem.scss';

const img = require('../images/ChickenLivers.png');

export interface ShopItemProps {
  shopItem: { type: string; imagePath: string; title: string; cost: string };
}

const ShopItem: React.SFC<ShopItemProps> = ({ shopItem }) => {
  const { imagePath, title, cost } = shopItem;

  return (
    <article className="ShopItem">
      <img src={require(`../images/${imagePath}.png`)} alt="" className="ShopItem__image" />
      <div className="ShopItem__title">{title}</div>
      <p className="ShopItem__cost">{cost}</p>
    </article>
  );
};

export default ShopItem;
