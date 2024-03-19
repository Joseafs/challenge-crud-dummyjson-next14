import { useTheme } from 'styled-components';

import { PropsBaseColors, PropsBaseColorsOptions } from '~/theme/config/types';

export const useThemeColor = (color?: PropsBaseColors, type?: PropsBaseColorsOptions) => {
  const theme = useTheme();

  if (type && color) {
    return theme.palette[color][type];
  }
  if (color) {
    return theme.palette[color].main;
  }

  return theme.palette.common.black;
};
