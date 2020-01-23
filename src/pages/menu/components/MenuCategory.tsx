import React from 'react';
import './MenuCategory.scss';
import Meal from './Meal';

export interface MenuCategoryProps {
  data: {
    title: string;
    meals: { name: string; description: string; cost: string; images: string }[];
  };
}

const MenuCategory: React.SFC<MenuCategoryProps> = ({ data }) => {
  const { title, meals } = data;

  return (
    <section className="MenuCategory">
      <h3>{title}</h3>

      {meals.map(meal => (
        <Meal data={meal} key={meal.name} />
      ))}
    </section>
  );
};

export default MenuCategory;
