import React from 'react';
import FirstSection from '../../components/FirstSection';

const bg = require('../../images/shop/bg.png');

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => (
  <>
    <FirstSection name="shop" text="order dishes online" image={bg} />
  </>
);

export default About;
