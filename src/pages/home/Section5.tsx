import React from 'react';
import styled from 'styled-components';
import { style1Type, style1 } from '../../state/style/style1';
import Layer_29 from '../../img/home/Layer_29.png';

export interface Section3Props { }


const Section3: React.SFC<Section3Props> = () => (
  <Section styled={style1}>
    <figure>
      <img src={Layer_29} alt="" />
    </figure>
    <article>
      <h3>"The most remantic and perfect place"</h3>
      <p>JOHN DOE</p>
    </article>
  </Section>
);

export default Section3;

const Section = styled.section<style1Type>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 5px;
  & > article {
    padding: 20px 0;
    & > h3 {
      text-align: center;
    }
    & > p {
      font-size: 1.2em;
      font-weight: 400;
      letter-spacing: 3px;
      text-align: center;
      padding: 40px 0;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 50px 5px;
    & > article {
      align-self: flex-end;
      padding: 100px 0 0 50px;
    }
  }
`;
