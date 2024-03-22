import styled, { css, keyframes } from 'styled-components';

import { useThemeFontStyle } from '~/theme/utils';

import { OwnProps, PropsStyleRoot } from './types';

export const Content = styled.div`
  position: relative;
`;

export const InputContent = styled.div<OwnProps>`
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  outline: 2px solid transparent;
  position: relative;

  ${({ theme }) => css`
    ${theme.animation.transition[0]};

    background-color: ${theme.palette.common.white};
    border: solid 2px ${theme.palette.secondary.main};
    border-radius: ${theme.shape.radius * 2}px;
    overflow: hidden;
  `};

  &:hover,
  &:focus-within {
    outline-color: transparent;
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.palette.common.white};
      border: 2px solid ${theme.palette.grey[200]};
      cursor: not-allowed;
      opacity: 0.9;

      & > input {
        color: blue;
      }

      &:hover,
      &:focus-within {
        outline-color: transparent;
      }
    `}

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 2px solid ${theme.palette.error.light};
      border-radius: ${theme.shape.radius}px ${theme.shape.radius}px 0 0;

      &:hover,
      &:focus-within {
        outline-color: ${theme.palette.error.light};
      }
    `}
`;

export const Root = styled.div<PropsStyleRoot>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;

  ${({ width }) => (width === 'flex' ? 'flex: 1' : width ? `width: ${width}` : null)};
`;

export const Label = styled.label`
  z-index: 2;

  ${({ theme }) => css`
    margin-top: -${theme.space}px;
    margin-bottom: -${theme.space}px;
    margin-left: ${theme.space * 2}px;
  `}
`;
export const Span = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    top: 6px;
    height: 8px;
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

const moveDown = keyframes`
  0% {
    opacity: 0;
    top: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
`;

export const Error = styled.label`
  animation: ${moveDown} 200ms forwards;

  left: 0;
  margin-top: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
  z-index: 5;

  ${({ theme }) => css`
    ${useThemeFontStyle('normal')};

    font-weight: ${theme.fontWeights.semiBold};
    border-radius: 0 0 ${theme.shape.radius * 2}px ${theme.shape.radius * 2}px;
    padding: ${theme.space}px;
    background-color: ${theme.palette.error.light};
    color: ${theme.palette.error.dark};
  `};
`;
