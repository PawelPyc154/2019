import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

export interface BasketDropDownProps {
  basketOpen: boolean;
}

const BasketDropDown: React.SFC<BasketDropDownProps> = ({basketOpen}) => {
  return (
    <Styled
      animate={basketOpen ? "basketOpen" : "basketClose"}
      variants={{
        basketClose: {y: "-200%", transition: {duration: 0.6}},
        basketOpen: {y: "0", transition: {duration: 0.6}}
      }}
    >
      <ul>
        <li>$44.50</li>
        <NavLink to="/" exact activeClassName="activeLink">
          <li>View Cart</li>
        </NavLink>

        <NavLink to="/" exact activeClassName="activeLink">
          <li>Checkout</li>
        </NavLink>
      </ul>
    </Styled>
  );
};

export default BasketDropDown;

const Styled = styled(motion.div)`
  z-index: 2000;
  position: absolute;
  right: 30px;
  transform: translateY(-200%);
  & > ul {
    z-index: 1400;
    background-color: white;
    letter-spacing: 2px;
    width: 115px;
    /* position: absolute; */
    top: 85px;
    /* right: 50px; */
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items: center;

    & li {
      font-size: 1.2em;
      color: #000;
      height: 8vh;
      font-weight: bold;
      display: flex;
      align-items: center;
      text-transform: uppercase;
    }
  }
`;
