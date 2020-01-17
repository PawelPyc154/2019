import React from 'react';
import styled from 'styled-components';
import { style1Type, style1 } from '../../../state/style/style1';

const Layer19 = require('../../../images/contact/Layer_19.png');

export interface ContactSectionProps {}

const ContactSection: React.SFC<ContactSectionProps> = () => {
  return (
    <Section styled={style1}>
      <div>
        <header>
          <h1>contact</h1>
          <span>we welcome you in our restaurant</span>
        </header>
      </div>
    </Section>
  );
};

export default ContactSection;

const Section = styled.section<style1Type>`
  background: url(${Layer19}) no-repeat center;

  height: 700px;
  width: 100%;
  z-index: 10;
  & > div {
    height: 700px;
    width: 100%;
    top: 0;
    background: rgba(30, 38, 51, 0.3);
    position: absolute;
    display: block;
    z-index: 20;
    & > header {
      padding: 500px 5px;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      z-index: 400;
      display: block;

      & > h1 {
        font-size: 3.1em;
        color: white;
        font-weight: normal;
      }

      & > span {
        font-size: 2.4em;
        color: ${props => props.styled.spanColor};
      }
    }
  }

  @media screen and (min-width: 1000px) {
    & > div {
      & > header {
        & > h1 {
          font-size: 5em;
        }
        & > span {
          font-size: 3em;
        }
      }
    }
  }
`;
