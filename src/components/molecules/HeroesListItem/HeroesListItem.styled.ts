import styled from 'styled-components';
import { GridContainer } from 'components/atoms/GridContainer';

export const ListItem = styled(GridContainer).attrs({
  as: 'li',
})`
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 0;
  }
`;

export const ImageWithName = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 25px;
  }
`;

export const HeroNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const HeroType = styled.p`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    margin: 0;
  }
`;

export const HeroTypeDesktop = styled.p`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
