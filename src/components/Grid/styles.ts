import styled from 'styled-components';

import { useThemeColor, useThemeSpace } from '~/theme/utils';

import { PropsGrid } from './types';

export const Root = styled.div<PropsGrid>`
  ${({ displayType }) => displayType && `display: ${displayType};`};
  ${({ displayType }) => displayType === 'flex' && `flex: 1;`};
  ${({ displayContent }) => displayContent && `justify-content: ${displayContent};`};

  ${({ margin }) => useThemeSpace(margin, 'margin')};
  ${({ padding }) => useThemeSpace(padding, 'padding')};

  ${({ align }) => align && `text-align: ${align};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${useThemeColor(backgroundColor, 'main')}`};

  ${({ zIndex }) =>
    zIndex &&
    `
    position: relative;
    z-index: ${zIndex};`};
`;
