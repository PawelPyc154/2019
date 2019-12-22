import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { style1Type, style1 } from '../../state/style/style1';

import Scroll from '../../middleware/Scroll';

const img1920x200px = require('../../img/home/img__1920x200px.png');

export interface OurServicesProps {}

const OurServices: React.SFC<OurServicesProps> = () => {
  const scrollRef = useRef<any>({});
  return (
    <Section ref={scrollRef} styled={style1} animate={Scroll(scrollRef, 1) ? 'start' : 'end'}>
      <motion.h2
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },
          end: { y: '-1000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        our services
      </motion.h2>

      <motion.span
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },
          end: { y: '-1000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        ADVANTAGES OF OUR RESTAURANT
      </motion.span>
      <div>
        <motion.h3
          variants={{
            start: { x: 0, transition: { duration: 1, ease: 'linear' } },
            end: { x: '-2000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          Pick or Delivery
        </motion.h3>
        <motion.h3
          variants={{
            start: { y: 0, transition: { duration: 1, ease: 'linear' } },
            end: { y: '1000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          Serving With Love
        </motion.h3>
        <motion.h3
          variants={{
            start: { x: 0, transition: { duration: 1, ease: 'linear' } },
            end: { x: '2000px', transition: { duration: 0, ease: 'linear' } },
          }}
        >
          Daily Lunch Specials
        </motion.h3>
      </div>
      <motion.figure
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },
          end: { y: '500px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        ORDER NOW
      </motion.figure>
    </Section>
  );
};

export default OurServices;

const Section = styled(motion.section)<style1Type>`
  text-align: center;
  overflow: hidden;
  & > span {
    display: block;
    padding: 50px 0 20px 0;
    color: ${props => props.styled.nav.navActive};
    letter-spacing: 3px;
  }

  & > div {
    overflow: hidden;
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
    background: url(${img1920x200px}) center no-repeat;
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
