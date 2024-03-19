import { PropsBaseColors, PropsBaseColorsOptions, PropsTheme } from '~/theme/config/types';

export const getThemeColor = (theme: PropsTheme, color?: PropsBaseColors, type?: PropsBaseColorsOptions) => {
  if (type && color) {
    return theme.palette[color][type];
  }
  if (color) {
    return theme.palette[color].main;
  }

  return theme.palette.common.black;
};
