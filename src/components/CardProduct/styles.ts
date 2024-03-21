import styled, { css } from 'styled-components';

import { useThemeFontStyle, useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.animation.transition[0]};

    box-shadow: ${theme.shadows[1]};
    border-radius: ${theme.shape.radius * 2}px;
    ${theme.shadows[1]};

    &:hover {
      box-shadow: ${theme.shadows[3]};
    }
  `}
`;

export const ImageContent = styled.div`
  position: relative;
  min-height: 200px;
  width: 100%;
`;

export const ActionsContent = styled.div`
  display: flex;

  ${({ theme }) => css`
    column-gap: ${theme.space}px;
    ${useThemeSpace([1], 'padding')};
  `}
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.palette.grey[200]};
  `};
`;

export const Title = styled.h5`
  width: 100%;

  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};
    ${useThemeFontStyle('medium')};

    color: ${theme.palette.secondary.main};
    font-weight: ${theme.fontWeights.bold};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};
    ${useThemeFontStyle('medium')};

    background-color: ${theme.palette.grey[200]};
    color: ${theme.palette.secondary.main};
    font-weight: ${theme.fontWeights.bold};
  `}
`;
