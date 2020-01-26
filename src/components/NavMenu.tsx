import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

export interface NavMenuProps {
  navLinks: { navLinkName: string; navLinkPath: string }[];

  activePageReset: React.Dispatch<React.SetStateAction<number>>;
}

const NavMenu: React.SFC<NavMenuProps> = ({ navLinks, activePageReset }) => {
  return (
    <nav className="NavMenu">
      <ul>
        {navLinks.map(navLink => (
          <NavLink
            to={navLink.navLinkPath}
            activeClassName="activeLinkMenu"
            key={navLink.navLinkName}
            onClick={() => activePageReset(1)}
          >
            <li>{navLink.navLinkName}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
