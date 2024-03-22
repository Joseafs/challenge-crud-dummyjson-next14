import styled, { css } from 'styled-components';

import { useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  min-height: 60px;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};

    background-color: ${theme.palette.grey[100]};
    box-shadow: ${theme.shadows[1]};
  `}
`;

export const Body = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: inline-flex;
  min-height: 40px;

  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.main};
    box-shadow: ${theme.shadows[2]};
  `}
`;
