import styled from 'styled-components';

import { Link } from 'react-router-dom';
import React from 'react';
import { style1Type, style1 } from '../../state/style/style1';
import img_326_x_326_px_b from '../../img/home/img_326_x_326_px_b.png';
import img_326_x_326_px_bv from '../../img/home/img_326_x_326_px_bv.png';
import img_326_x_326_px from '../../img/home/img_326_x_326_px.png';


export interface Section3Props { }

const Section3: React.SFC<Section3Props> = () => (
  <Section styled={style1}>
    <h2>blog</h2>
    <span>NEWS, RECIPES AND MUCH MORE</span>
    <div>
      <div>
        <div>
          <p>10/03</p>
          <span>GRAND OPENING</span>

          <Link to="/about">...</Link>
        </div>
      </div>
      <div>
        <div>
          <p>10/03</p>
          <span>GRAND OPENING</span>

          <Link to="/about">...</Link>
        </div>
      </div>
      <div>
        <div>
          <p>10/03</p>
          <span>GRAND OPENING</span>

          <Link to="/about">...</Link>
        </div>
      </div>
    </div>
  </Section>
);

export default Section3;

const Section = styled.section<style1Type>`
  text-align: center;
  padding: 50px 0;
  & > span {
    display: block;
    padding: 50px 0 20px 0;
    color: ${(props) => props.styled.nav.navActive};
    letter-spacing: 3px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      margin: 30px 0;
      height: 326px;
      width: 326px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
        background: url(${img_326_x_326_px_b}) center no-repeat;
      }
      &:nth-child(2) {
        background: url(${img_326_x_326_px_bv}) center no-repeat;
      }
      &:nth-child(3) {
        background: url(${img_326_x_326_px}) center no-repeat;
      }

      & > div {
        height: 296px;
        flex-basis: 296px;
        background-color: white;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        & > p {
          font-size: 1.4em;
          letter-spacing: 3px;
          color: #babcc7;
        }

        & > span {
          display: block;
          font-size: 1.2em;
          letter-spacing: 3px;
        }

        & > a {
          display: block;
          font-size: 2.5em;
          letter-spacing: 3px;

          color: #000;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    & > span {
      padding: 10px 0 30px 0;
    }
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      & > div {
        margin: 20px 50px;
      }
    }
  }
`;
