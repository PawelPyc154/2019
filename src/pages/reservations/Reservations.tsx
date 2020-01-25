import React from 'react';
import FirstSection from '../../components/FirstSection';
import Article3 from '../../components/Article3';

const BlueFade2 = require('../../images/reservations/Blue_Fade__2.png');
// online images
const Layer30 = require('../../images/home/Layer_30.png');
const Layer31 = require('../../images/home/Layer_31.png');

export interface ReservationsProps {}

const Reservations: React.SFC<ReservationsProps> = () => {
  const data = {
    firstSection: {
      name: 'reservations',
      text: 'book your table at our restaurant now!',
      image: BlueFade2,
    },
    online: {
      title: 'online',
      name: "BOOKING, IT'S EASY AS AN APPLE PIE",
      text: `When you finalize a reservation with OpenTable they will send you a confirmation email immediately.  We will also call you on the date of your reservation to confirm your table.  
       If you do not receive an email, or do not hear from the restaurant, we would recommend calling to confirm your table and verify your reservation booking (+1 939 777 55 33).
       `,
      image: Layer30,
      image2: Layer31,
    },
  };

  return (
    <>
      <FirstSection data={data.firstSection} />
      <Article3 data={data.online} />
    </>
  );
};

export default Reservations;
