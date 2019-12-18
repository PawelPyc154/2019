import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaSearch, FaShoppingCart} from "react-icons/fa";
import {style1} from "../state/style/style1";
import HamburgerMenu from "./HamburgerMenu";
import {motion} from "framer-motion";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header styled={style1}>
      <h1>Renome</h1>
      <motion.nav animate={isOpen ? "open" : "closed"}>
        <ul>
          <motion.li
            variants={
              window.screen.width < 1000
                ? {
                    closed: {x: "130%", transition: {duration: 0.6}},
                    open: {x: 0, transition: {duration: 0.6}}
                  }
                : {}
            }
          >
            <ol>
              <input type="text" placeholder="Search..." />

              <button>
                <FaSearch />
              </button>
            </ol>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol>Home</ol>
            </NavLink>
            <NavLink to="/about" exact activeClassName="activeLink">
              <ol>About</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol>Menu</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol> Reservations</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol>Blog</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol>Shop</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="activeLink">
              <ol>Contact</ol>
            </NavLink>
            <div></div>
          </motion.li>
          <li>
            <ol>
              <button>
                <FaShoppingCart />
              </button>
              <div>2</div>
            </ol>
            <ol>
              <HamburgerMenu toggle={() => setIsOpen(!isOpen)} />
            </ol>
          </li>
        </ul>
      </motion.nav>
    </Header>
  );
};

export default NavBar;

interface HeaderProps {
  styled: any;
}

const Header = styled.header<HeaderProps>`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  z-index: 1500;
  & > h1 {
    font-size: 2.5em;
    font-weight: 400;
    letter-spacing: 2px;
  }
  & > nav {
    & > ul {
      & > li:first-child {
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
        transform: translateX(130%);
        & > a {
          text-decoration: none;
        }
        & ol {
          font-size: 1.2em;
          color: #000;
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
        }

        & > div {
          display: none;
        }
      }
      & > li:last-child {
        display: flex;
        justify-content: space-between;
        & > ol {
          flex-basis: 30px;
          font-size: 1.2em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 13px;

          &:first-child {
            & > div,
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5px;
              border: none;
              background-color: transparent;
            }

            &::after {
              content: "";
              height: 15px;
              width: 1px;
              background-color: #000000;
              transform: translateX(10px);
            }
          }
        }
      }
    }
  }

  & .activeLink {
    & > ol {
      color: ${props => props.styled.nav.navActive} !important;
    }
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    z-index: 1500;

    & > h1 {
      font-size: 2.5em;
      font-weight: 400;
      letter-spacing: 2px;
    }
    & > nav {
      & > ul {
        display: flex;
        justify-content: space-evenly;
        & > li:first-child {
          z-index: 1400;
          background-color: white;
          letter-spacing: 2px;
          width: 800px;

          position: initial;
          top: initial;
          left: initial;
          padding: initial;
          display: flex;
          flex-direction: initial;
          justify-content: space-between;
          align-items: center;
          margin-right: 10px;
          transform: initial;
          & > a {
            text-decoration: none;
          }
          & ol {
            font-size: 1.2em;
            color: #000;
            height: 8vh;
            font-weight: bold;
            display: flex;
            align-items: center;
            text-transform: uppercase;

            margin: 0;
            & input {
              width: 60px;
              border: none;
              font-size: 1.2em;

              &::placeholder {
                color: #bbbdbf;
              }
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
          }
          & > div {
            display: block;
            width: 1px;
            height: 12px;
            background-color: black;
          }
        }
        & > li:last-child {
          display: flex;
          justify-content: space-between;
          & > ol {
            flex-basis: 30px;
            font-size: 1.2em;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: initial;

            &:first-child {
              & > div,
              button {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                border: none;
                background-color: transparent;
              }

              &::after {
                display: none;
                content: "";
                height: 15px;
                width: 1px;
                background-color: #000000;
                transform: translateX(10px);
              }
            }
          }
        }
      }
    }
  }
`;
