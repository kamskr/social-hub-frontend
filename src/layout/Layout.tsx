import React, { ReactElement } from 'react';
import styled from '@xstyled/styled-components';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface Props {
  children: ReactElement;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.main`
  background-color: background;
`;
