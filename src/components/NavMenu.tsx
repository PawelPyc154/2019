import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

export interface NavMenuProps {
  navLinks: { navLinkName: string; navLinkPath: string }[];
}

const NavMenu: React.SFC<NavMenuProps> = ({ navLinks }) => {
  return (
    <nav className="NavMenu">
      <ul>
        {navLinks.map(navLink => (
          <NavLink to={navLink.navLinkPath} activeClassName="activeLinkMenu" key={navLink.navLinkName}>
            <li>{navLink.navLinkName}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
