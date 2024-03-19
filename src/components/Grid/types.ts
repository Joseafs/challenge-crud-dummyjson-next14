import { ReactNode } from 'react';

export type PropsGrid = {
  mgn?: number[];
  pdg?: number[];
  zind?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  bgColor?: string;
  flex?: boolean;
  align?: 'left' | 'center' | 'right';
};

export interface Props extends PropsGrid {
  children?: ReactNode;
  className?: string;
}
