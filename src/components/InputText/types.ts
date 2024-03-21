import { ChangeEvent, InputHTMLAttributes } from 'react';

export type PropsStyleRootWidthKeys = 'flex' | string;

export interface PropsStyleRoot {
  width?: PropsStyleRootWidthKeys;
}

export interface Props extends PropsStyleRoot {
  className?: string;
  label?: string;
  max?: string | number;
  min?: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: InputHTMLAttributes<unknown>['type'];
  value?: string | number;
}
