import React from 'react';
import styled from 'styled-components';

import Happy from './sections/Happy';
import Details from './sections/Details';
import FormWriteMessage from './sections/FormWriteMessage';
import FirstSection from '../../components/FirstSection';

// FirstSection images
const Layer19 = require('../../images/contact/Layer_19.png');
// import Map from './sections/Map';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  const data = {
    firstSection: {
      name: 'contact',
      text: 'we welcome you in our restaurant',
      image: Layer19,
    },
  };

  return (
    <>
      <FirstSection data={data.firstSection} />
      <Happy />

      <ContactFromWrapper>
        <Details />
        <FormWriteMessage />
      </ContactFromWrapper>
      {/* <Map /> */}
    </>
  );
};

export default Contact;

const ContactFromWrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
