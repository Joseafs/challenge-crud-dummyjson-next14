import styled, { css } from 'styled-components';

import { useThemeSpace } from '~/theme/utils';

export const LoginBox = styled.div`
  margin: 0 auto;
  width: 100%;

  ${({ theme }) => css`
    ${useThemeSpace([2], 'padding')};

    max-width: ${theme.breakpoints.width.mobile};
    box-shadow: ${theme.shadows[1]};
    background-color: ${theme.palette.grey[50]};
    border-radius: ${theme.shape.radius * 2}px;
    overflow: hidden;
  `}
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  ${({ theme }) => css`
    z-index: ${theme.zindex.background};
    background: ${theme.palette.primary.dark};
    background: linear-gradient(
      200deg,
      ${theme.palette.primary.dark} 0%,
      ${theme.palette.primary.main} 30%,
      ${theme.palette.primary.dark} 50%,
      ${theme.palette.primary.main} 70%,
      ${theme.palette.primary.dark} 100%
    );
  `}
`;
