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
    background-color: ${theme.palette.grey[200]};

    box-shadow: ${theme.shadows[1]};

    &:hover {
      box-shadow: ${theme.shadows[3]};
    }
  `}
`;

export const ImageContent = styled.div`
  position: relative;
  min-height: 200px;
  width: 100%;
  position: relative;
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

export const Strong = styled.strong``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};
    ${useThemeFontStyle('normal')};

    color: ${theme.palette.secondary.main};
    font-weight: ${theme.fontWeights.bold};
    grid-gap: ${theme.space}px;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    ${useThemeSpace([1], 'padding')};
    ${useThemeFontStyle('normal')};

    color: ${theme.palette.secondary.text};
    font-weight: ${theme.fontWeights.bold};
  `}
`;

export const FooterPrice = styled.div`
  display: flex;
  flex-direction: column;

  ${Strong} {
    ${({ theme }) => css`
      color: ${theme.palette.primary.main};
      ${useThemeFontStyle('large')}
    `};
  }
`;

export const Row = styled.div`
  display: inline-flex;
  ${({ theme }) => css`
    grid-gap: ${theme.space * 2}px;
  `}
`;
export const Column = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    grid-gap: ${theme.space}px;
  `}
`;

export const DiscountPrice = styled.div`
  display: flex;
  background-color: blue;
  position: absolute;
  left: 0;
  bottom: 0;
  align-items: center;

  ${({ theme }) => css`
    ${useThemeFontStyle('medium')};
    ${useThemeSpace([1, 2, 1, 1], 'padding')};

    grid-gap: ${theme.space}px;
    border-radius: 0 ${theme.shape.radius * 2}px 0 0;
    color: ${theme.palette.primary.text};
    background-color: ${theme.palette.primary.main};
  `}
`;

export const Small = styled.small`
  text-decoration: line-through;
  ${({ theme }) => css`
    ${useThemeFontStyle('small')};

    color: ${theme.palette.secondary.main};
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${useThemeFontStyle('small')};
    ${useThemeSpace([1], 'padding')};

    color: ${theme.palette.secondary.main};
    background-color: ${theme.palette.grey[300]};
    border-radius: ${theme.shape.radius * 2}px;
  `}
`;
