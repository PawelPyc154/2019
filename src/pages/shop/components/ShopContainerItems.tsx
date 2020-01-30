import React, { useEffect, useState } from 'react';

import './ShopContainerItems.scss';
import { useLocation } from 'react-router';
import ShopItem from './ShopItem';
import meals from './meals.json';
import Pagination from '../../../components/Pagination';

export interface ShopContainerItemsProps {
  activePage: { active: number; setActive: React.Dispatch<React.SetStateAction<number>> };
}

const ShopContainerItems: React.SFC<ShopContainerItemsProps> = ({ activePage }) => {
  type mealsTypes = { id: number; type: string; imagePath: string; title: string; cost: string }[];

  const location = useLocation();

  const [mealsProps, setMealsProps] = useState<mealsTypes>(meals);
  const [mealsForPage, setMealsForPage] = useState<mealsTypes>();
  const [pages, setPages] = useState(1);
  const { active } = activePage;

  useEffect(() => {
    const type = location.pathname.slice(12);

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
