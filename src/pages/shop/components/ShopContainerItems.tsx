import React, { useEffect, useState } from 'react';
import './ShopContainerItems.scss';
import { useLocation } from 'react-router';
import ShopItem from './ShopItem';

export interface ShopContainerItemsProps {}

const ShopContainerItems: React.SFC<ShopContainerItemsProps> = () => {
  const data = {
    shopItems: [
      { imagePath: 'ChickenLivers', title: 'Chicken livers', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetables', cost: '$14.20' },
      { imagePath: 'ChickenLivers', title: 'Chicken livers1', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetables1', cost: '$14.20' },
      { imagePath: 'ChickenLivers', title: 'Chicken livers2', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetables3', cost: '$14.20' },
    ],
    shopItems2: [
      { imagePath: 'ChickenLivers', title: 'Chicken liversdsfds', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetablesfdsfsd', cost: '$14.20' },
      { imagePath: 'ChickenLivers', title: 'Chicken livers1', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetables1', cost: '$14.20' },
      { imagePath: 'ChickenLivers', title: 'Chicken livers2', cost: '$9.55' },
      { imagePath: 'ChickenLivers', title: 'Steak with vegetables3', cost: '$14.20' },
    ],
  };

  const [navPath, setnavPath] = useState(data.shopItems);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/shop/allproducts':
        setnavPath(data.shopItems);
        break;

      case '/shop/mains':
        setnavPath(data.shopItems2);
        break;
      default:
    }
  }, [location]);

  return (
    <div className="ShopContainerItems">
      {navPath.map(shopItem => (
        <ShopItem shopItem={shopItem} key={shopItem.title} />
      ))}
    </div>
  );
};

export default ShopContainerItems;
