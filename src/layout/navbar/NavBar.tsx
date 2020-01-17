import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import { style1, style1Type } from '../../state/style/style1';

import Features from './components/Freatures';
import BasketDropDown from './components/BasketDropDown';
import NavLinks from './components/NavLinks';
import NavIcons from './components/NavIcons';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [features, setFreatures] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [fontColor, setFontColor] = useState('white');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setFontColor('black');
    } else {
      setFontColor('white');
    }
  }, [location]);

  return (
    <Styled styled={style1} fontColor={fontColor}>
      <header>
        <h1>Renome</h1>
        <motion.nav animate={isOpen ? (features ? 'openFeatures' : 'open') : 'closed'}>
          <ul>
            <NavLinks setIsOpen={setIsOpen} setFreatures={setFreatures} fontColor={fontColor} />
            <NavIcons state={{ isOpen, basketOpen, fontColor, setBasketOpen, setFreatures, setIsOpen }} />
          </ul>

          <Features
            toggle={() => setFreatures(!features)}
            close={() => {
              setIsOpen(false);
              setFreatures(false);
            }}
          />

          <BasketDropDown basketOpen={basketOpen} />
        </motion.nav>
      </header>
    </Styled>
  );
};

export default NavBar;

const Styled = styled.div<style1Type>`
  position: absolute;
  width: 100%;
  z-index: 300;
  & > header {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 1500;
    /* position: absolute; */

    & > h1 {
      font-size: 2.5em;
      font-weight: 400;
      letter-spacing: 2px;
      color: ${props => props.fontColor};
      z-index: 400;
    }
    & > nav {
      position: relative;
    }

    @media screen and (min-width: 1000px) {
      height: 100px;
      & > nav {
        & > ul {
          display: flex;
          justify-content: space-evenly;
        }
      }
    }
  }
`;
