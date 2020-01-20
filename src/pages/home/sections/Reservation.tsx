import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { style1, style1Type } from '../../../state/style/style1';
import Scroll from '../../../middleware/Scroll';

const Layer30 = require('../../../images/home/Layer_30.png');
const Layer31 = require('../../../images/home/Layer_31.png');

export interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <Section ref={scrollRef} styled={style1} animate={Scroll(scrollRef, 1) ? 'start' : 'end'}>
      <figure>
        <motion.img
          src={Layer30}
          alt=""
          variants={{
            start: { x: 0, transition: { duration: 1 } },

            end: { x: '-2000px', transition: { duration: 0 } },
          }}
        />
        <motion.img
          src={Layer31}
          alt=""
          variants={{
            start: { x: 0, transition: { duration: 1 } },
            end: { x: '2000px', transition: { duration: 0 } },
          }}
        />
      </figure>
      <motion.article
        variants={{
          start: { opacity: 1, y: 0, transition: { duration: 1 } },
          end: { opacity: 0, y: '1000px', transition: { duration: 0 } },
        }}
      >
        <h2>reservation</h2>
        <span>BOOK YOUR TABLE AT OUR RESTAURANT NOW!</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consequatur, omnis soluta reprehenderit
          quidem totam perspiciatis excepturi quod iusto delectus numquam optio aliquam officia molestias quasi earum!
          Officiis laudantium quod nihil hic soluta.
        </p>

        <Link to="/reservation">...</Link>
      </motion.article>
    </Section>
  );
};

export default Reservation;

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
      align-self: flex-start;
      display: block;
      width: 80%;
    }
    & > img:last-child {
      align-self: flex-end;
      margin: -100px 0 0 0;
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
      letter-spacing: 3px;
    }
    & > p {
      margin: 20px 0;
    }
    & > a {
      display: block;
      font-size: 2.5em;
      letter-spacing: 3px;
      padding: 20px 0 0 0;
      color: #000;
    }
  }
  @media screen and (min-width: 550px) {
    & > figure {
      width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    & > figure {
      margin: 0 50px;
    }
    & > article {
      margin: 0 50px;
      & > p {
        margin: 20px 0;
        width: 90%;
      }
    }
  }
`;
