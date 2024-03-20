import { ReactNode } from 'react';

import { PropsThemeColors } from '~/theme/config/types';

export type PropsGrid = {
  align?: 'left' | 'center' | 'right';
  backgroundColor?: PropsThemeColors;
  flex?: boolean;
  margin?: number[];
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  padding?: number[];
  zIndex?: string;
};

export interface Props extends PropsGrid {
  children?: ReactNode;
  className?: string;
}
