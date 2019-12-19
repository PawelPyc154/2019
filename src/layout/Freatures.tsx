import React from "react";
import {MdKeyboardArrowLeft} from "react-icons/md";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

export interface FeaturesProps {
  toggle: () => void;
  close: () => void;
}

const Features: React.SFC<FeaturesProps> = ({toggle, close}) => {
  return (
    <div>
      <Ul
        variants={
          window.screen.width < 1000
            ? {
                closed: {x: "-130%", transition: {duration: 0.6}},
                open: {x: "-130%", transition: {duration: 0.6}},
                openFeatures: {x: 0, transition: {duration: 0.6}}
              }
            : {}
        }
      >
        <li>
          <button onClick={toggle}>
            <MdKeyboardArrowLeft />
          </button>
          <span>Back</span>
        </li>
        <NavLink to="/" exact activeClassName="activeLink" onClick={close}>
          <li>One page</li>
        </NavLink>
        <NavLink to="/" exact activeClassName="activeLink" onClick={close}>
          <li>Portfolio</li>
        </NavLink>
        <NavLink to="/" exact activeClassName="activeLink" onClick={close}>
          <li>Shortcodes</li>
        </NavLink>
      </Ul>
    </div>
  );
};

export default Features;

const Ul = styled(motion.ul)`
  z-index: 1400;
  background-color: white;
  letter-spacing: 2px;
  width: 100%;
  position: fixed;
  top: 85px;
  left: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateX(-130%);
  & > a {
    text-decoration: none;
  }
  & li {
    font-size: 1.2em;
    color: #000;
    height: 8vh;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    &:nth-child(1) {
      justify-content: space-between;
      & > button {
        height: 43px;
        width: 43px;
        border: 1px solid #bbbdbf;
        background-color: white;
      }
    }
  }
`;
