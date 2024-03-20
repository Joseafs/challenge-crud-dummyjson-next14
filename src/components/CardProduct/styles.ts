import styled, { css } from 'styled-components';

import { useThemeFontStyle, useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: bisque;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.animation.transition[0]};

    border-radius: ${theme.shape.radius * 2}px;
    ${theme.shadows[1]};

    &:hover {
      ${theme.animation.hover[0]};
    }
    &:active {
      ${theme.animation.active[1]};
    }
  `}
`;

export const ImageContent = styled.div`
  position: relative;
  min-height: 200px;
  width: 100%;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const Title = styled.h5`
  width: 100%;

  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};
    ${useThemeFontStyle('medium')};

    background-color: ${theme.palette.grey[200]};
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
