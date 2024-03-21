import styled, { css } from 'styled-components';

import { useThemeSpace } from '~/theme/utils';

export const Root = styled.div`
  height: 170px;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ theme }) => css`
    box-shadow: ${theme.shadows[2]};
    border-radius: ${theme.shape.radius * 4}px;
  `}
`;

export const ContentThumbnail = styled.div`
  position: absolute;
  overflow: auto;
  width: 100%;
  left: 0;
  right: 0;
  display: inline-flex;
`;

export const ContentScroll = styled.div`
  display: inline-flex;

  ${({ theme }) => css`
    ${useThemeSpace([1, 0, 2, 0], 'padding')};

    grid-gap: ${theme.space * 2}px;
  `}
`;

export const ImageContent = styled.div`
  height: 70px;
  width: 70px;
  position: relative;
  overflow: hidden;

  ${({ theme }) => css`
    box-shadow: ${theme.shadows[1]};
    border-radius: ${theme.shape.radius * 2}px;
  `}
`;
export const ImageThumbnail = styled(ImageContent)`
  height: 140px;
  width: 140px;
`;
