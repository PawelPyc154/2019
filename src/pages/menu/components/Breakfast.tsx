import React from 'react';
import MenuCategory from './MenuCategory';

//  mainCourse images
const SearedScallops = require('../images/meals/Seared_scallops_cz.png');
const PoachedCalmon = require('../images/meals/Poached_salmon_cq.png');
const GreenCurry = require('../images/meals/Green_curry_ch.png');
// salads images
const LobsterSalad = require('../images/meals/Lobster_salad_b.png');
const ChickenOrangeSalad = require('../images/meals/Chicken___orange_salad_by.png');
const WinterSalad = require('../images/meals/Winter_salad_bp.png');
const ThaiStyleSalad = require('../images/meals/Thai_style_salad_bg.png');

export interface BreakfastProps {}

const Breakfast: React.SFC<BreakfastProps> = () => {
  const data = {
    mainCourse: {
      title: 'Main Course',
      meals: [
        {
          name: 'Seared scallops',
          description: 'Escape the hustle and bustle with this exotic breakfast that will satisfy your taste buds.',
          cost: '3.80',
          images: SearedScallops,
        },
        {
          name: 'Poached salmon',
          description: 'Fish is a healthy, low-fat taco filling, and it tastes absolutely delicious.',
          cost: '9.25',
          images: PoachedCalmon,
        },
        {
          name: 'Green curry',
          description: 'Decidedly gourmet poached salmon dish with a zingy watercress mayonnaise.',
          cost: '7.70',
          images: GreenCurry,
        },
      ],
    },
    salads: {
      title: 'Salads',
      meals: [
        {
          name: 'Lobster salad',
          description:
            'A simple lobster salad with butter and just a hint of mayonnaise so that you can still taste the sweet lobster meat.',
          cost: '6.30',
          images: LobsterSalad,
        },
        {
          name: 'Chicken & orange salad',
          description: 'With juicy oranges and a yoghurt dressing, this chicken salad is a treat on any spring table. ',
          cost: '8.50',
          images: ChickenOrangeSalad,
        },
        {
          name: 'Winter salad',
          description: 'This is a simple winter salad,  fresh and crisp. ',
          cost: '4.15',
          images: WinterSalad,
        },
        {
          name: 'Thai-style salad',
          description: 'This is a simple winter salad,  fresh and crisp. ',
          cost: '5.05',
          images: ThaiStyleSalad,
        },
      ],
    },
  };
  return (
    <>
      <MenuCategory data={data.mainCourse} />
      <MenuCategory data={data.salads} />
    </>
  );
};

export default Breakfast;
