import { PropsWithChildren } from 'react';

export interface PropsStyleRoot {
  width?: PropsStyleRootWidthKeys;
}

export interface OwnProps extends PropsStyleRoot {
  disabled?: boolean;
  elementId?: string;
  errorDescription?: string;
  hasError?: boolean;
  label?: string;
  name?: string;
  required?: boolean;
}

export interface Props extends PropsWithChildren<OwnProps> {
  className?: string;
}

export type PropsStyleRootWidthKeys = 'flex' | string;
