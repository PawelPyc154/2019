import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import './ShopContainerItems.scss';
import { useLocation } from 'react-router';
import ShopItem from './ShopItem';

import Pagination from '../../../components/Pagination';

export interface ShopContainerItemsProps {
  activePage: { active: number; setActive: React.Dispatch<React.SetStateAction<number>> };
}

const ShopContainerItems: React.SFC<ShopContainerItemsProps> = ({ activePage }) => {
  const meals = [
    { type: 'mains', imagePath: 'ChickenLivers', title: 'Chicken livers', cost: '$9.55' },
    { type: 'mains', imagePath: 'SteakWithVegetables', title: 'Steak with vegetables', cost: '$14.20' },
    { type: 'mains', imagePath: 'BeefWithPineapple', title: 'Beef with pineapple', cost: '$18.20' },
    { type: 'desserts', imagePath: 'WafflesWithCoffee', title: 'Waffles with coffee', cost: '$7.90' },
    { type: 'mains', imagePath: 'ApplePie', title: 'Apple pie', cost: '$15.70' },
    { type: 'breakfast', imagePath: 'EggBaguette', title: 'Egg baguette', cost: '$14.20' },

    { type: 'breakfast', imagePath: 'ChickenLivers', title: 'Chicken liversdsfds7', cost: '$9.55' },
    { type: 'breakfast', imagePath: 'ChickenLivers', title: 'Steak with vegetablesfdsfsd8', cost: '$14.20' },
    { type: 'breakfast', imagePath: 'ChickenLivers', title: 'Chicken livers19', cost: '$9.55' },
    { type: 'mains', imagePath: 'EggBaguette', title: 'Steak with vegetables10', cost: '$14.20' },
    { type: 'mains', imagePath: 'ChickenLivers', title: 'Chicken livers2-', cost: '$9.55' },
    { type: 'mains', imagePath: 'ChickenLivers', title: 'Steak with vegetables303', cost: '$14.20' },
    { type: 'mains', imagePath: 'WafflesWithCoffee', title: 'Steak with vegetables30gfd3', cost: '$14.20' },
  ];
  const location = useLocation();
  const [mealsProps, setMealsProps] = useState<{ type: string; imagePath: string; title: string; cost: string }[]>(
    meals,
  );
  const [mealss, setmealss] = useState<{ type: string; imagePath: string; title: string; cost: string }[]>();
  const [pages, setPages] = useState(1);
  const { active } = activePage;

  useEffect(() => {
    const type = location.pathname.slice(6);
    if (type !== 'allproducts') {
      setMealsProps(meals.filter(item => item.type === type));
      // setPages(Math.ceil(mealsProps.length / 6));
      // const mealsPropsCoppy = [...mealsProps];
      // setmealss(mealsPropsCoppy.splice((active - 1) * 6, 6));
    } else {
      setMealsProps(meals);
      // setPages(Math.ceil(mealsProps.length / 6));
      // const mealsPropsCoppy = [...mealsProps];
      // setmealss(mealsPropsCoppy.splice((active - 1) * 6, 6));
    }
  }, [location]);

  // useEffect(() => {}, [mealsProps]);

  useEffect(() => {
    setPages(Math.ceil(mealsProps.length / 6));
    const mealsPropsCoppy = [...mealsProps];
    setmealss(mealsPropsCoppy.splice((active - 1) * 6, 6));
  }, [active, mealsProps]);
  // console.log(mealss);

  return (
    <>
      <div className="ShopContainerItems">
        {mealss && mealss.map(shopItem => <ShopItem shopItem={shopItem} key={shopItem.title} />)}
      </div>
      <Pagination pages={pages} activePage={activePage} />
    </>
  );
};

export default ShopContainerItems;
