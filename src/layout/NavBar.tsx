import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaSearch, FaShoppingCart} from "react-icons/fa";
import {MdKeyboardArrowRight} from "react-icons/md";

import {style1, style1Type} from "../state/style/style1";
import HamburgerMenu from "./HamburgerMenu";
import {motion} from "framer-motion";
import Features from "./Freatures";
import BasketDropDown from "./BasketDropDown";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [features, setFreatures] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <Styled styled={style1}>
      <header>
        <h1>Renome</h1>
        <motion.nav
          animate={isOpen ? (features ? "openFeatures" : "open") : "closed"}
        >
          <ul>
            <motion.li
              variants={
                window.screen.width < 1000
                  ? {
                      closed: {x: "130%", transition: {duration: 0.6}},
                      open: {x: 0, transition: {duration: 0.6}},
                      openFeatures: {x: "130%", transition: {duration: 0.6}}
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
                to="/"
                exact
                activeClassName="activeLink"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <ol>Menu</ol>
              </NavLink>
              <NavLink
                to="/"
                exact
                activeClassName="activeLink"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <ol> Reservations</ol>
              </NavLink>
              <NavLink
                to="/"
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
                <button onClick={() => setFreatures(true)}>
                  <MdKeyboardArrowRight />
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
                <ol>Shop</ol>
              </NavLink>
              <NavLink
                to="/"
                exact
                activeClassName="activeLink"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <ol>Contact</ol>
              </NavLink>
              <div></div>
            </motion.li>
            <li>
              <ol>
                <button
                  onClick={() => {
                    setBasketOpen(!basketOpen);
                    setIsOpen(false);
                    setFreatures(false);
                  }}
                >
                  <FaShoppingCart />
                </button>
                <div>2</div>
              </ol>
              <ol>
                <HamburgerMenu
                  toggle={() => {
                    setIsOpen(!isOpen);
                    setFreatures(false);
                    setBasketOpen(false);
                  }}
                />
              </ol>
            </li>
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
    }
    & > nav {
      position: relative;
      & > ul {
        & > li:first-child {
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

    @media screen and (min-width: 1000px) {
      height: 100px;
      & > nav {
        & > ul {
          display: flex;
          justify-content: space-evenly;
          & > li:first-child {
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
          & > li:last-child {
            & > ol {
              margin: initial;
              &:first-child {
                &::after {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
`;
