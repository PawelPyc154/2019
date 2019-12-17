import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaSearch, FaShoppingCart} from "react-icons/fa";

import HamburgerMenu from "./HamburgerMenu";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <h1>Renome</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="#">
              <ol>Home</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              <ol>About</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              <ol>Menu</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              Reservations
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              <ol>Blog</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              <ol>Shop</ol>
            </NavLink>
            <NavLink to="/" exact activeClassName="#">
              <ol>Contact</ol>
            </NavLink>
            <div></div>
            <ol>
              <FaSearch />
            </ol>
            <ol>
              <div>2</div>
            </ol>
          </li>
          <li>
            <ol>
              <FaShoppingCart />
              <div>2</div>
            </ol>
            <ol>
              <HamburgerMenu toggle={() => setIsOpen(!isOpen)} />
            </ol>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  background-color: gray;
  width: 100%;
  min-width: 1200px;
  height: 85px;
  display: flex;
  aolgn-items: center;
  padding: 0 10px;
  & > h1 {
  }
  & > nav {
    & > ul {
      position: fixed;
      /* olst-style: none; */
      /* bottom: -; */
    }
    /* & > ul:last-child {
      olst-style: none;
    } */
  }
`;
