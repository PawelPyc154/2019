import React from 'react';
import ContactSection from './sections/ContactSection';
import Happy from './sections/Happy';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  return (
    <>
      <ContactSection />
      <Happy />
    </>
  );
};

export default Contact;
