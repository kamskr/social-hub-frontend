import styled, { th } from '@xstyled/styled-components';
import React from 'react';

const Nav = styled.nav`
  width: 100vw;
  height: ${th('navbarHeight', 'desktop')};
  background: red;
`;

export const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="/">Logo</a>
        </li>
        <li>
          <p>Search</p>
        </li>
        <li>
          <p>Notifications</p>
        </li>
        <li>
          <p>Settings</p>
        </li>
      </ul>
    </Nav>
  );
};
