import styled, { css } from 'styled-components';

import { Button } from '~/components/Button';
import { useThemeFontStyle } from '~/theme/utils';

export const RootButton = styled(Button)`
  position: relative;
  border-radius: 50%;
  padding: 20px;
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
