import React from 'react';
import FirstSection from '../../components/FirstSection';

const Layer19 = require('../../images/contact/Layer_19.png');

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => (
  <>
    <FirstSection name="about" text="we create delicious memories" image={Layer19} />
  </>
);

export default About;