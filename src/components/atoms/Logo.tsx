import React from 'react';
import { ReactSVG } from 'react-svg';
import { RoutePath } from 'routes/routes.types';
import BrandLogo from 'assets/Logo.svg';
import styled from '@xstyled/styled-components';

interface Props {
  withBrandName?: boolean;
}

export const Logo = ({ withBrandName }: Props) => {
  return (
    <div>
      <LogoContainer href={RoutePath.feed}>
        <ReactSVG src={BrandLogo} />
        {withBrandName && <BrandName>Social Hub</BrandName>}
      </LogoContainer>
    </div>
  );
};

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const BrandName = styled.span`
  font-size: h4;
  font-weight: bold;
  color: textPrimary;
  margin-left: 5px;
`;
