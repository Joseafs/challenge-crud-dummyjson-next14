import styled, { css } from 'styled-components';

import { useSpaceTheme } from '~/theme/utils';

import { PropsGrid } from './types';

export const Root = styled.div<PropsGrid>`
  ${({ mgn = [] }) => useSpaceTheme(mgn, 'margin')};
  ${({ pdg = [] }) => useSpaceTheme(pdg, 'padding')};

  ${({ zind }) =>
    zind &&
    `
    position: relative;
    z-index: ${zind};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
  ${({ align }) => align && `text-align: ${align};`};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex: 1;
    `};
`;
