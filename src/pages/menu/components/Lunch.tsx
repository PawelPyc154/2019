import React from 'react';
import MenuCategory from './MenuCategory';
// appetizers images
const ChickenWings = require('../images/meals/Chicken_wings_e.png');
const Dumplings = require('../images/meals/Dumplings_es.png');
const FrenchOnionSoup = require('../images/meals/French_onion_soup_ej.png');
const MiniChilliPretzelsEa = require('../images/meals/Mini_chilli_pretzels_ea.png');
// entrees images
const AtlanticSalmon = require('../images/meals/Atlantic_Salmon_d.png');
const FishTacos = require('../images/meals/Fish_tacos_dr.png');
const PoachedSalmon = require('../images/meals/Poached_salmon_cq.png');
const ParmesanChicken = require('../images/meals/Parmesan_chicken_c.png');
//  mainCourse images
const SearedScallops = require('../images/meals/Seared_scallops_cz.png');
const PoachedCalmon = require('../images/meals/Poached_salmon_cq.png');
const GreenCurry = require('../images/meals/Green_curry_ch.png');
// salads images
const LobsterSalad = require('../images/meals/Lobster_salad_b.png');
const ChickenOrangeSalad = require('../images/meals/Chicken___orange_salad_by.png');
const WinterSalad = require('../images/meals/Winter_salad_bp.png');
const ThaiStyleSalad = require('../images/meals/Thai_style_salad_bg.png');

export interface LunchProps {}

const Lunch: React.SFC<LunchProps> = () => {
  const data = {
    appetizers: {
      title: 'Appetizers',
      meals: [
        {
          name: 'Chicken wings',
          description:
            'It’s all about flavour and fun, fun, fun. Toss fried chicken with a finger-licking sauce spiked with chilli and fresh ginger.',
          cost: '9.95',
          images: ChickenWings,
        },
        {
          name: 'Dumplings',
          description:
            'Small dumplings filled with spiced lamb. Tossed in a tomato sauce and served with sumac-flavoured Greek yoghurt.',
          cost: '5.70',
          images: Dumplings,
        },
        {
          name: 'French onion soup',
          description: 'French onion soup is deeply savoury and hearty - and cheesy croutons make it extra special!',
          cost: '5.80',
          images: FrenchOnionSoup,
        },
        {
          name: 'Mini chilli pretzels',
          description: 'These freshly-baked savouries beat anything out of a packet. ',
          cost: '2.10',
          images: MiniChilliPretzelsEa,
        },
      ],
    },

    entrees: {
      title: 'Entrees',
      meals: [
        {
          name: 'Atlantic Salmon',
          description:
            'Have dinner on the table super fast with clever shortcuts and this easy salmon and Greek rice salad.',
          cost: '7.30',
          images: AtlanticSalmon,
        },
        {
          name: 'Fish tacos',
          description: 'Fish is a healthy, low-fat taco filling, and it tastes absolutely delicious.',
          cost: '5.45',
          images: FishTacos,
        },
        {
          name: 'Sesame Tuna',
          description: 'Sesame seeds form a tasty crust and are rich in calcium, copper and magnesium.',
          cost: '4.60',
          images: PoachedSalmon,
        },
        {
          name: 'Parmesan chicken',
          description:
            'This crunchy crumbed chicken tastes fabulous paired with the fresh flavours of zucchini, mint and olives.',
          cost: '8.35',
          images: ParmesanChicken,
        },
      ],
    },
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
      <MenuCategory data={data.appetizers} />
      <MenuCategory data={data.entrees} />
      <MenuCategory data={data.mainCourse} />
      <MenuCategory data={data.salads} />
    </>
  );
};

export default Lunch;
