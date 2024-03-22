import styled, { css } from 'styled-components';

import { useMediaQuery, useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${({ theme }) => css`
    ${useThemeSpace([2, 1], 'padding')};
    grid-gap: ${theme.space * 3}px;

    @media ${useMediaQuery().maxW.md} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${useMediaQuery().maxW.sm} {
      grid-template-columns: 1fr;
    }
  `}
`;
