import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { style1Type, style1 } from '../../../state/style/style1';
import Scroll from '../../../middleware/Scroll';

const Layer29 = require('../../../img/home/Layer_29.png');

export interface RemanticProps {}

const Remantic: React.SFC<RemanticProps> = () => {
  const scrollRef = useRef<any>({});
  return (
    <Section ref={scrollRef} styled={style1} animate={Scroll(scrollRef, 1) ? 'start' : 'end'}>
      <motion.figure
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },

          end: { y: '1000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        <img src={Layer29} alt="" />
      </motion.figure>
      <motion.article
        variants={{
          start: { y: 0, transition: { duration: 1, ease: 'linear' } },

          end: { y: '-1000px', transition: { duration: 0, ease: 'linear' } },
        }}
      >
        <h3>"The most remantic and perfect place"</h3>
        <p>JOHN DOE</p>
      </motion.article>
    </Section>
  );
};

export default Remantic;

const Section = styled(motion.section)<style1Type>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 5px;
  overflow: hidden;
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
