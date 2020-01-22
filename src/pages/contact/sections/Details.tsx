import React from 'react';
import styled from 'styled-components';
import { style1Type, style1 } from '../../../state/style/style1';

export interface DetailsProps {}

const Details: React.SFC<DetailsProps> = () => {
  return (
    <Section styled={style1}>
      <h3>CONTACT DETAILS</h3>
      <span>ADDRESS</span>
      <p>355 E STH ST, MANHATTAN, NY 10003</p>
      <span>PHONE</span>
      <p>+939 777 55 33</p>
      <span>EMAIL</span>
      <p>RESERVATION@RENOME.COM</p>
    </Section>
  );
};

export default Details;

const Section = styled.section<style1Type>`
  padding: 5px;
  order: 1;
  & > h3 {
    font-size: 2em;
    color: ${props => props.styled.spanColor};
    margin-bottom: 20px;
  }
  & > span {
    color: ${props => props.styled.spanColor};
    font-size: 1.5em;
    margin-left: 15px;
  }
  & > p {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 600px) {
    margin: 0 0 0 60px;
  }
`;
