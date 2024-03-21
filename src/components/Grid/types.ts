import { CSSProperties, ReactNode } from 'react';

import { PropsThemePaletteKeys } from '~/theme/config/types';

export type PropsGrid = {
  align?: 'left' | 'center' | 'right';
  backgroundColor?: PropsThemePaletteKeys;
  displayContent?: CSSProperties['justifyContent'];
  displayType?: CSSProperties['display'];
  gridGap?: string;
  margin?: number[];
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  padding?: number[];
  zIndex?: string;
};

export interface Props extends PropsGrid {
  children?: ReactNode;
  className?: string;
}
