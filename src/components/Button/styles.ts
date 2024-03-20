import styled, { css } from 'styled-components';

import { useThemeColor } from '~/theme/utils';

import { PropsButtonColor } from './types';

export const Root = styled.button<PropsButtonColor>`
  cursor: pointer;
  ${({ theme, color, disabled }) => css`
    ${theme.animation.transition[0]};
    background-color: ${useThemeColor(color, 'main')};
    color: ${theme.palette.common.white};
    padding: ${theme.space * 2}px;
    border-radius: ${theme.shape.radius * 2}px;
    border: solid 1px ${theme.palette.grey[400]};

    &:hover {
      ${theme.animation.hover[0]};
    }
    &:active {
      ${theme.animation.active[1]};
    }

    ${disabled &&
    css`
      pointer-events: none;
      background-color: ${theme.palette.grey[300]};
      border: solid 1px ${theme.palette.grey[100]};
    `}
  `}
`;
