import styled, { th } from '@xstyled/styled-components';

export const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const NavbarItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const NavbarItem = styled.li`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
`;
