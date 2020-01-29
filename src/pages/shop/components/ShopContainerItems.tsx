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
    { id: 0, type: 'mains', imagePath: 'ChickenLivers', title: 'Chicken livers', cost: '$9.55' },
    { id: 1, type: 'mains', imagePath: 'SteakWithVegetables', title: 'Steak with vegetables', cost: '$14.20' },
    { id: 2, type: 'mains', imagePath: 'BeefWithPineapple', title: 'Beef with pineapple', cost: '$18.20' },
    { id: 3, type: 'desserts', imagePath: 'WafflesWithCoffee', title: 'Waffles with coffee', cost: '$7.90' },
    { id: 4, type: 'mains', imagePath: 'ApplePie', title: 'Apple pie', cost: '$15.70' },
    { id: 5, type: 'breakfast', imagePath: 'EggBaguette', title: 'Egg baguette', cost: '$14.20' },

    { id: 6, type: 'breakfast', imagePath: 'ChickenLivers', title: 'Chicken liversdsfds7', cost: '$9.55' },
    { id: 7, type: 'breakfast', imagePath: 'ChickenLivers', title: 'Steak with vegetablesfdsfsd8', cost: '$14.20' },
    { id: 8, type: 'breakfast', imagePath: 'ChickenLivers', title: 'Chicken livers19', cost: '$9.55' },
    { id: 9, type: 'mains', imagePath: 'EggBaguette', title: 'Steak with vegetables10', cost: '$14.20' },
    { id: 10, type: 'mains', imagePath: 'ChickenLivers', title: 'Chicken livers2-', cost: '$9.55' },
    { id: 11, type: 'mains', imagePath: 'ChickenLivers', title: 'Steak with vegetables303', cost: '$14.20' },
    { id: 12, type: 'mains', imagePath: 'WafflesWithCoffee', title: 'Steak with vegetables30gfd3', cost: '$14.20' },
  ];
  const location = useLocation();

  type mealsTypes = { id: number; type: string; imagePath: string; title: string; cost: string }[];

  const [mealsProps, setMealsProps] = useState<mealsTypes>(meals);
  const [mealsForPage, setMealsForPage] = useState<mealsTypes>();
  const [pages, setPages] = useState(1);
  const { active } = activePage;

  useEffect(() => {
    const type = location.pathname.slice(6);
    if (type !== 'allproducts') {
      setMealsProps(meals.filter(item => item.type === type));
    } else {
      setMealsProps(meals);
    }
  }, [location]);

  useEffect(() => {
    setPages(Math.ceil(mealsProps.length / 6));
    const mealsPropsCoppy = [...mealsProps];
    setMealsForPage(mealsPropsCoppy.splice((active - 1) * 6, 6));
  }, [active, mealsProps]);

  return (
    <>
      <div className="ShopContainerItems">
        {mealsForPage && mealsForPage.map(meal => <ShopItem shopItem={meal} key={meal.title} />)}
      </div>
      <Pagination pages={pages} activePage={activePage} />
    </>
  );
};

export default ShopContainerItems;
