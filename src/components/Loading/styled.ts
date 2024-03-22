import { FaSpinner } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

import { Props } from './types';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(FaSpinner)`
  animation: ${spinAnimation} 1s linear infinite;

  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `}
`;

export const Root = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: violet;
  z-index: 1000;
  ${({ theme, size = 8 }) => css`
    background-color: ${theme.palette.background.veil};
    z-index: ${theme.zindex.modal};

    & ${SpinnerIcon} {
      width: ${theme.space * size}px;
      height: ${theme.space * size}px;
    }
  `}
`;

// }
