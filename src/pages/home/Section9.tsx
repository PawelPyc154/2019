import React from "react";
import styled from "styled-components";
import Layer_15 from "../../img/home/Layer_15.png";
import Layer_18 from "../../img/home/Layer_18.png";
import {Link} from "react-router-dom";
import {style1, style1Type} from "../../state/style/style1";
export interface Section2Props {}

const Section2: React.SFC<Section2Props> = () => {
  return (
    <Section styled={style1}>
      <figure>
        <img src={Layer_15} alt="" />
        <img src={Layer_18} alt="" />
      </figure>
      <article>
        <h2>contact</h2>
        <span>WE WELCOME YOU IN OUR RESTAURANT</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          consequatur, omnis soluta reprehenderit quidem totam perspiciatis
          excepturi quod iusto delectus numquam optio aliquam officia molestias
          quasi earum! Officiis laudantium quod nihil hic soluta, rem, sapiente
          tempore
        </p>

        <Link to="/contact">...</Link>
      </article>
    </Section>
  );
};

export default Section2;

const Section = styled.section<style1Type>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 5px;
  & > figure {
    margin: 0 auto;
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    & > img:first-child {
      align-self: flex-end;
      display: block;
      width: 80%;
    }
    & > img:last-child {
      align-self: flex-start;
      margin: -130px 0 0 0;
      display: block;
      width: 80%;
      z-index: -1;
    }
  }
  & > article {
    margin: 0 auto;
    width: auto;
    max-width: 500px;
    padding: 20px 0px;
    & > h2 {
      text-align: end;
      margin: 20px 0;
    }
    & > span {
      color: ${props => props.styled.nav.navActive};
      text-align: end;
      width: 100%;
      display: block;
      letter-spacing: 3px;
    }
    & > p {
      margin: 20px 0;
      text-align: end;
    }
    & > a {
      display: block;
      font-size: 2.5em;
      letter-spacing: 3px;
      padding: 0 0 0 0;
      color: #000;
      text-align: end;
    }
  }
  @media screen and (min-width: 550px) {
    & > figure {
      width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    & > figure {
      margin: 0 50px;
    }
    & > article {
      margin: 0 50px;

      & > h2 {
        text-align: end;
        margin: 20px -100px 20px 0;
      }
      & > span {
        color: ${props => props.styled.nav.navActive};
        text-align: end;
      }
      & > p {
        margin: 20px 0;
        width: 100%;
      }
    }
  }
`;
