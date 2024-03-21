import styled, { css } from 'styled-components';

import { useThemeFontStyle } from '~/theme/utils';

export const Root = styled.div`
  position: relative;

  ${({ theme }) => css`
    margin-top: -${theme.space * 2}px;
  `}
`;

export const CustomSelect = styled.select`
  width: 100%;
  display: flex;
  flex: 1;
  outline: unset;
  cursor: pointer;

  ${({ theme }) => css`
    padding: ${theme.space}px;
    border-radius: ${theme.shape.radius}px;
    border: solid 2px ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.main}; /* Defina a cor do texto */
  `}
`;

export const Option = styled.option``;

export const Label = styled.label`
  z-index: 2;
  position: relative;

  ${({ theme }) => css`
    top: ${theme.space}px;
    bottom: -${theme.space}px;
    margin-left: ${theme.space * 2}px;
  `}
`;

export const Span = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    top: 9px;
    height: 4px;
    position: absolute;
  }

  ${({ theme }) => css`
    ${useThemeFontStyle('normal')}
    font-weight: ${theme.fontWeights.semiBold};
    color: ${theme.palette.secondary.main};

    &:before {
      left: -${theme.space}px;
      width: calc(100% + ${theme.space * 2}px);
      background-color: ${theme.palette.background.default};
      z-index: ${theme.zindex.background};
    }
  `}
`;
