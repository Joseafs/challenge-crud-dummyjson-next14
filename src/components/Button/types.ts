import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';

import { PropsThemeColors } from '~/theme/config/types';

export type PropsButtonColor = {
  color?: PropsThemeColors;
};

export interface Props extends PropsWithChildren, PropsButtonColor {
  type?: ButtonHTMLAttributes<undefined>['type'];
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
