import React from 'react';
import styled from 'styled-components';
import ContactSection from './sections/ContactSection';
import Happy from './sections/Happy';
import Details from './sections/Details';
import FormWriteMessage from './sections/FormWriteMessage';
// import Map from './sections/Map';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  return (
    <>
      <ContactSection />
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
