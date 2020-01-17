import React from 'react';
import styled from 'styled-components';

const Layer19 = require('../../../images/contact/Layer_19.png');

export interface ContactSectionProps {}

const ContactSection: React.SFC<ContactSectionProps> = () => {
  return <Container>yuty</Container>;
};

export default ContactSection;

const Container = styled.div`
  background: url(${Layer19}) no-repeat center;

  height: 700px;
  width: 100%;
  z-index: 0;
  &::after {
    background: rgba(30, 38, 51, 0.308);
    position: absolute;
    z-index: 100;
    content: '';
    height: 700px;
    width: 100%;
  }
`;
