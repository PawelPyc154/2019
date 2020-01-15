import styled from 'styled-components';

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { style1Type, style1 } from '../../../state/style/style1';
import Scroll from '../../../middleware/Scroll';

const img326x326pxb = require('../../../img/home/img_326_x_326_px_b.png');
const img326x326pxbv = require('../../../img/home/img_326_x_326_px_bv.png');
const img326x326px = require('../../../img/home/img_326_x_326_px.png');

export interface BlogProps {}

const Blog: React.SFC<BlogProps> = () => {
  const scrollRef = useRef<any>({});
  return (
    <Section ref={scrollRef} styled={style1} animate={Scroll(scrollRef, 1) ? 'start' : 'end'}>
      <motion.h2
        variants={{
          start: { x: 0, transition: { duration: 1, ease: 'linear' } },
          end: { x: '2000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        blog
      </motion.h2>
      <motion.span
        variants={{
          start: { x: 0, transition: { duration: 1, ease: 'linear' } },
          end: { x: '-2000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        NEWS, RECIPES AND MUCH MORE
      </motion.span>
      <motion.div
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },
          end: { y: '1000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        <motion.div
          variants={{
            start: { x: 0, transition: { duration: 1, ease: 'linear', delay: 1 } },
            end: { x: '-2000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          <div>
            <p>10/03</p>
            <span>GRAND OPENING</span>

            <Link to="/about">...</Link>
          </div>
        </motion.div>
        <motion.div
          variants={{
            start: { y: 0, transition: { duration: 1, ease: 'linear', delay: 1 } },
            end: { y: '1000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          <div>
            <p>10/03</p>
            <span>GRAND OPENING</span>

            <Link to="/about">...</Link>
          </div>
        </motion.div>
        <motion.div
          variants={{
            start: { x: 0, transition: { duration: 1, ease: 'linear', delay: 1 } },
            end: { x: '2000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          <div>
            <p>10/03</p>
            <span>GRAND OPENING</span>

            <Link to="/about">...</Link>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Blog;

const Section = styled(motion.section)<style1Type>`
  text-align: center;
  padding: 50px 0;
  overflow: hidden;
  & > span {
    display: block;
    padding: 50px 0 20px 0;
    color: ${props => props.styled.nav.navActive};
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
        background: url(${img326x326pxb}) center no-repeat;
      }
      &:nth-child(2) {
        background: url(${img326x326pxbv}) center no-repeat;
      }
      &:nth-child(3) {
        background: url(${img326x326px}) center no-repeat;
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
