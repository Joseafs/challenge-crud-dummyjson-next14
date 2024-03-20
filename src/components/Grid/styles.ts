import styled, { css } from 'styled-components';

import { useThemeColor, useThemeSpace } from '~/theme/utils';

import { PropsGrid } from './types';

export const Root = styled.div<PropsGrid>`
  ${({ margin }) => useThemeSpace(margin, 'margin')};
  ${({ padding }) => useThemeSpace(padding, 'padding')};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${useThemeColor(backgroundColor, 'main')}`};

  ${({ zIndex }) =>
    zIndex &&
    `
    position: relative;
    z-index: ${zIndex};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ align }) => align && `text-align: ${align};`};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex: 1;
    `};
`;
