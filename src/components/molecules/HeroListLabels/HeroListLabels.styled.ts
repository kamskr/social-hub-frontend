import styled from 'styled-components';
import { GridContainer } from 'components/atoms/GridContainer';

export const LabelsContainer = styled(GridContainer)`
  margin-bottom: 10px;

  p {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
