import React from 'react';
import ContactSection from './sections/ContactSection';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  return (
    <>
      <ContactSection />
    </>
  );
};

export default Contact;
