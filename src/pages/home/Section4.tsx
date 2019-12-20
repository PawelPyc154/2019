import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Layer_10 from "../../img/home/Layer_10.png";
import Layer_11 from "../../img/home/Layer_11.png";
import {Link} from "react-router-dom";
import {style1, style1Type} from "../../state/style/style1";
import {motion} from "framer-motion";

export interface Section2Props {
  scroll: number;
}

const Section2: React.FC<Section2Props> = ({scroll}) => {
  return (
    <Section styled={style1} animate={scroll > 1400 ? "start" : "end"}>
      <figure>
        <motion.img
          src={Layer_10}
          alt=""
          variants={{
            start: {x: 0, transition: {duration: 1}},

            end: {x: "-2000px", transition: {duration: 0}}
          }}
        />
        <motion.img
          src={Layer_11}
          alt=""
          variants={{
            start: {x: 0, transition: {duration: 1}},
            end: {x: "2000px", transition: {duration: 0}}
          }}
        />
      </figure>
      <motion.article
        variants={{
          start: {opacity: 1, y: 0, transition: {duration: 1}},
          end: {opacity: 0, y: "1000px", transition: {duration: 0}}
        }}
      >
        <h2>menu</h2>
        <span>DELICIOUS AND BEAUTIFUL</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          consequatur, omnis soluta reprehenderit quidem totam perspiciatis
          excepturi quod iusto delectus numquam optio aliquam officia molestias
          quasi earum! Officiis laudantium quod nihil hic soluta, rem, sapiente
          tempore
        </p>

        <Link to="/menu">...</Link>
      </motion.article>
    </Section>
  );
};

export default Section2;
const Section = styled(motion.section)<style1Type>`
  overflow: hidden;
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
