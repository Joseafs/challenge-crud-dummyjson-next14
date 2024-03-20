import styled, { css } from 'styled-components';

import { useThemeColor, useThemeFontStyle } from '~/theme/utils';

import { OwnProps } from './types';

export const Root = styled.h1<OwnProps>`
  ${({ color }) => css`
    ${useThemeFontStyle('extraLarge')};

    color: ${useThemeColor(color, 'main')};
  `}
`;
