import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';

import { PropsBaseColors } from '~/theme/config/types';

export type PropsButtonColor = {
  color?: PropsBaseColors;
};

export interface Props extends PropsWithChildren, PropsButtonColor {
  type?: ButtonHTMLAttributes<undefined>['type'];
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
