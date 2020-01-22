import React from 'react';
import FirstSection from '../../components/FirstSection';

const BlueFade2 = require('../../images/reservations/Blue_Fade__2.png');

export interface ReservationsProps {}

const Reservations: React.SFC<ReservationsProps> = () => {
  const data = {
    firstSection: {
      name: 'reservations',
      text: 'book your table at our restaurant now!',
      image: BlueFade2,
    },
  };

  return <FirstSection data={data.firstSection} />;
};

export default Reservations;
