import { BsChevronLeft } from 'react-icons/bs';
import styled, { css } from 'styled-components';

import { Button } from '~/components/Button';
import { useThemeFontStyle } from '~/theme/utils';

export const RootButton = styled(Button)`
  position: relative;
  padding-left: 30px;

  ${({ theme }) => css`
    ${useThemeFontStyle('medium')}
    font-weight: ${theme.fontWeights.semiBold};
    left: ${theme.space}px;
  `}
`;
export const IconChevron = styled(BsChevronLeft)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    left: ${theme.space}px;
  `}
`;
