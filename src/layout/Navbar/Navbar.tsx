import styled from '@xstyled/styled-components';
import React from 'react';

const Nav = styled.nav``;

export const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};
