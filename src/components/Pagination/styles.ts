import styled, { css } from 'styled-components';

import { useThemeFontStyle, useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  ${({ theme }) => css`
    grid-gap: ${theme.space * 2}px;
    ${useThemeSpace([2, 3], 'margin')};
  `}
`;

export const Span = styled.div`
  ${() => css`
    ${useThemeFontStyle('normal')};
  `}
`;
