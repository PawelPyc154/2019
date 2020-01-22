import React from 'react';
import FirstSection from '../../components/FirstSection';
import Article2 from '../../components/Article2';

// FirstSection images
const Layer19 = require('../../images/contact/Layer_19.png');

// Article2 images
const Layer1 = require('../../images/home/Layer_1.png');
const Layer3 = require('../../images/home/Layer_3.png');

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
  const data = {
    firstSection: {
      name: 'about',
      text: 'we create delicious memories',
      image: Layer19,
    },

    history: {
      title: 'history',
      name: 'WONDERFUL STORY OF OUR TOWN',
      text:
        'Renome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan’s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant’s grand modern architecture. Renome offers the Bellecour room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one of the few Manhattan restaurants to have a coveted 3-star Michelin rating.',
      image: Layer1,
      image2: Layer3,
    },
  };
  return (
    <>
      <FirstSection data={data.firstSection} />
      <Article2 data={data.history} />
    </>
  );
};

export default About;
