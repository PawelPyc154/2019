import React from 'react';

import './Meal.scss';

export interface MealProps {
  data: { name: string; description: string; cost: string; images: string };
}

const Meal: React.SFC<MealProps> = ({ data }) => {
  const { name, description, cost, images } = data;
  return (
    <article className="Meal">
      <img src={images} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className="mealCost">{`$${cost}`}</div>
    </article>
  );
};

export default Meal;
