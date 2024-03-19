import styled, { css } from 'styled-components';

import { useSpaceTheme, useThemeColor } from '~/theme/utils';

import { PropsGrid } from './types';

export const Root = styled.div<PropsGrid>`
  ${({ margin }) => useSpaceTheme(margin, 'margin')};
  ${({ padding }) => useSpaceTheme(padding, 'padding')};
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
