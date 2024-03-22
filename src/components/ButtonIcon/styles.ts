import styled, { css } from 'styled-components';

import { Button } from '~/components/Button';
import { useThemeFontStyle, useThemeSpace } from '~/theme/utils';

export const RootButton = styled(Button)`
  position: relative;
  border-radius: 50%;

  ${() => css`
    ${useThemeSpace([2], 'padding')}
  `}
`;

export const IconContent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => css`
    ${useThemeFontStyle('medium')}

    font-size: ${theme.fontSizes.medium};
  `}
`;
