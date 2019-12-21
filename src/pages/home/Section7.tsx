import React from 'react';
import styled from 'styled-components';
import { style1Type, style1 } from '../../state/style/style1';
import img__1920x200px from '../../img/home/img__1920x200px.png';


export interface Section3Props { }

const Section3: React.SFC<Section3Props> = () => (
  <Section styled={style1}>
    <h2>our services</h2>
    <span>ADVANTAGES OF OUR RESTAURANT</span>
    <div>
      <h3>Pick or Delivery</h3>
      <h3>Serving With Love</h3>
      <h3>Daily Lunch Specials</h3>
    </div>
    <figure>ORDER NOW</figure>
  </Section>
);

export default Section3;

const Section = styled.section<style1Type>`
  text-align: center;

  & > span {
    display: block;
    padding: 50px 0 20px 0;
    color: ${(props) => props.styled.nav.navActive};
    letter-spacing: 3px;
  }

  & > div {
    padding: 5px;
    & > h3 {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:nth-child(2) {
        border-bottom: 1px solid #000;
        border-top: 1px solid #000;
      }
    }
  }

  & > figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: url(${img__1920x200px}) center no-repeat;
    font-size: 1.1em;
    color: white;
  }
  @media screen and (min-width: 1000px) {
    & > span {
      padding: 10px 0 30px 0;
    }
    & > div {
      display: flex;
      justify-content: center;
      & > h3 {
        flex-basis: 370px;
        height: 275px;
        &:nth-child(2) {
          border-bottom: initial;
          border-top: initial;
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
    }
  }
`;
