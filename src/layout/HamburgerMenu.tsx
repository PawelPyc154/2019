import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

interface HamburgerMenuProps {
  toggle: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({toggle}) => {
  return (
    <Button onClick={toggle}>
      <Span
        variants={{
          closed: {rotate: 0},
          open: {rotate: 135, transition: {duration: 0.4}}
        }}
      >
        <SpanChild
          variants={{
            open: {y: 0},
            closed: {y: -10}
          }}
        ></SpanChild>
        <SpanChild></SpanChild>
        <SpanChild
          variants={{
            open: {y: 0, rotate: 90},
            closed: {y: 10, rotate: 0}
          }}
        ></SpanChild>
      </Span>
    </Button>
  );
};

export default HamburgerMenu;

const Button = styled.button`
  top: 10px;
  right: 5px;

  height: 50px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 70px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  /* background-color: red; */

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Span = styled(motion.span)`
  position: relative;
  width: 30px;
  height: 24px;
  /* background-color: blue; */
`;

const SpanChild = styled(motion.span)`
  display: flex;
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: black;
  top: 50%;

  &:nth-child(1) {
    transform: translateY(-10px);
  }
  &:nth-child(3) {
    transform: translateY(10px);
  }
`;
