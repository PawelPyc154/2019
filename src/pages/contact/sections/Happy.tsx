import React, { useRef } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { style1, style1Type } from '../../../state/style/style1';
import Scroll from '../../../middleware/Scroll';

const Layer15 = require('../../../images/home/Layer_15.png');
const Layer18 = require('../../../images/home/Layer_18.png');

export interface HappyProps {}

const Happy: React.FC<HappyProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={scrollRef} styled={style1} animate={Scroll(scrollRef) ? 'start' : 'end'}>
      <figure>
        <motion.img
          src={Layer15}
          alt=""
          variants={{
            start: { x: 0, transition: { duration: 1 } },

            end: { x: '-2000px', transition: { duration: 0 } },
          }}
        />
        <motion.img
          src={Layer18}
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
        <h2>happy</h2>
        <span>TO HEAR FROM YOU, CONTACT US</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consequatur, omnis soluta reprehenderit
          quidem totam perspiciatis excepturi quod iusto delectus numquam optio aliquam officia molestias quasi earum!
          Officiis laudantium quod nihil hic soluta, rem, sapiente tempore
        </p>
      </motion.article>
    </Section>
  );
};
export default Happy;

const Section = styled(motion.section)<style1Type>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 5px;
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
