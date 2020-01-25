import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export interface NavLinksProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFreatures: React.Dispatch<React.SetStateAction<boolean>>;
  fontColor: string;
}

const NavLinks: React.SFC<NavLinksProps> = ({ setIsOpen, setFreatures, fontColor }) => {
  return (
    <ContainerLi
      fontColor={fontColor}
      variants={
        window.screen.width < 1000
          ? {
              closed: { x: '130%', transition: { duration: 0.6 } },
              open: { x: 0, transition: { duration: 0.6 } },
              openFeatures: { x: '130%', transition: { duration: 0.6 } },
            }
          : {}
      }
    >
      <ol>
        <input type="text" placeholder="Search..." />

        <button type="button" style={{ color: fontColor, opacity: 1 }}>
          <FaSearch style={{ color: fontColor, opacity: 1 }} />
        </button>
      </ol>
      <NavLink
        to="/"
        exact
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>Home</ol>
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>About</ol>
      </NavLink>
      <NavLink
        to="/menu"
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>Menu</ol>
      </NavLink>
      <NavLink
        to="/reservations"
        exact
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol> Reservations</ol>
      </NavLink>
      <NavLink
        to="/blog"
        exact
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>Blog</ol>
      </NavLink>
      <ol>
        <span>Features</span>
        <button type="button" onClick={() => setFreatures(true)}>
          <MdKeyboardArrowRight />
        </button>
      </ol>
      <NavLink
        to="/shop"
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>Shop</ol>
      </NavLink>
      <NavLink
        to="/contact"
        exact
        activeClassName="activeLink"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <ol>Contact</ol>
      </NavLink>
      <div />
    </ContainerLi>
  );
};

export default NavLinks;

interface ContainerLiProps {
  fontColor: string;
}

const ContainerLi = styled(motion.li)<ContainerLiProps>`
  z-index: 1400;
  /* background-color: white; */
  letter-spacing: 2px;
  width: 100%;
  position: fixed;
  top: 85px;
  left: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateX(130%);
  background-color: white;
  & > a {
    text-decoration: none;
  }
  & ol {
    font-size: 1.2em;
    color: black;
    height: 8vh;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    & input {
      height: 30px;
      width: 100%;
      border: none;
      font-size: 1.2em;
      background-color: transparent;
      &::placeholder {
        color: #bbbdbf;
      }
    }
    & > button {
      padding: 5px;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      & svg {
      }
    }
    &:nth-child(7) {
      justify-content: space-between;

      & > button {
        height: 43px;
        width: 43px;
        border: 1px solid #bbbdbf;
        cursor: pointer;
      }
    }
  }

  & > div {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    width: 800px;
    position: initial;
    top: initial;
    left: initial;
    padding: initial;
    flex-direction: initial;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    transform: initial;
    background-color: initial;
    & ol {
      margin: 0;
      color: ${props => props.fontColor};
      & input {
        width: 60px;
        &:focus {
          width: 100%;
        }
      }
      &:first-child {
        order: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:nth-child(7) {
        display: none;
      }
    }
    & > div {
      display: block;
      width: 1px;
      height: 12px;
      background-color: black;
    }
  }
`;
