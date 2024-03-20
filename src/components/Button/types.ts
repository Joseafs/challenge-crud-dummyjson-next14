import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';

import { PropsThemeColors } from '~/theme/config/types';

export type PropsButtonColor = {
  color?: PropsThemeColors;
};

export interface Props extends PropsWithChildren, PropsButtonColor {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  title?: string;
  type?: ButtonHTMLAttributes<undefined>['type'];
}
