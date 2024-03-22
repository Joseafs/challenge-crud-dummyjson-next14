import styled, { css } from 'styled-components';

import { useMediaQuery } from '~/theme/utils';

import { StyleRootProps } from './types';

export const Root = styled.div<StyleRootProps>`
  justify-content: center;
  flex-direction: column;
  display: flex;
  margin: auto;
  width: 100%;

  ${({ theme, fixed }) =>
    fixed &&
    css`
      padding: ${theme.space * 2}px;

      ${theme.breakpoints.keys.map(
        (item) =>
          theme.breakpoints.values[item] > 0 &&
          theme.breakpoints.values[item] < 1500 &&
          css`
            @media ${useMediaQuery().minW[item]} {
              max-width: ${theme.breakpoints.values[item]}px;
            }
          `,
      )}
    `}
`;
