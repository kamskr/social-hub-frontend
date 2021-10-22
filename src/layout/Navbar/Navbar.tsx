import React from 'react';
import { Logo } from 'components/atoms/Logo';
import { Nav, NavbarItems, NavbarItem } from './Navbar.styled';

export const Navbar = () => {
  return (
    <Nav>
      <NavbarItems>
        <NavbarItem>
          <Logo withBrandName />
        </NavbarItem>
        <NavbarItem>
          <span>Search</span>
        </NavbarItem>
        <li>
          <span>Notifications</span>
        </li>
        <li>
          <span>Settings</span>
        </li>
      </NavbarItems>
    </Nav>
  );
};
