import styled, { css } from 'styled-components';

import { useThemeFontStyle } from '~/theme/utils';

export const CustomSelect = styled.select`
  width: 100%;
  display: flex;
  flex: 1;
  outline: unset;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    padding: ${theme.space}px;
    color: ${theme.palette.secondary.main};
  `}
`;

export const Option = styled.option`
  text-transform: capitalize;

  ${({ theme }) => css`
    ${useThemeFontStyle('normal')}
    font-weight: ${theme.fontWeights.semiBold};
  `}
`;
