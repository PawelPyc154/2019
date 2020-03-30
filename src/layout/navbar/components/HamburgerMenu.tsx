import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { style1, style1Type } from '../../../state/style/style1';

interface HamburgerMenuProps {
  toggle: () => void;
}

const HamburgerMenu: React.SFC<HamburgerMenuProps> = ({ toggle }) => (
  <Button onClick={toggle}>
    <Span
      variants={{
        closed: { rotate: 0 },
        open: { rotate: 135, transition: { duration: 0.4 } },
      }}
    >
      <SpanChild
        styled={style1}
        variants={{
          open: { y: 0 },
          closed: { y: -7 },
        }}
      />
      <SpanChild styled={style1} />
      <SpanChild
        styled={style1}
        variants={{
          open: { y: 0, rotate: 90 },
          closed: { y: 7, rotate: 0 },
        }}
      />
    </Span>
  </Button>
);

export default HamburgerMenu;

const Button = styled.button`
  display: flex;

  height: 50px;

  justify-content: center;
  align-items: center;
  flex-basis: 70px;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Span = styled(motion.span)`
  position: relative;
  width: 18px;
  height: 15px;
  /* background-color: blue; */
`;

const SpanChild = styled(motion.span)<style1Type>`
  display: flex;
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: ${props => props.styled.nav.navHamburgerColor};
  top: 50%;

  &:nth-child(1) {
    transform: translateY(-5px);
  }

  &:nth-child(3) {
    transform: translateY(5px);
  }
`;
