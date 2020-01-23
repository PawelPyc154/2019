import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

export interface NavMenuProps {}

const NavMenu: React.SFC<NavMenuProps> = () => {
  return (
    <nav className="NavMenu">
      <ul>
        <NavLink to="/menu/breakfast" activeClassName="activeLinkMenu">
          <li>BREAKFAST</li>
        </NavLink>
        <NavLink to="/menu/lunch" activeClassName="activeLinkMenu">
          <li>LUNCH</li>
        </NavLink>
        <NavLink to="/menu/drink" activeClassName="activeLinkMenu">
          <li>DRINKS</li>
        </NavLink>
        <NavLink to="/menu/desserts" activeClassName="activeLinkMenu">
          <li>DESSERTS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavMenu;
