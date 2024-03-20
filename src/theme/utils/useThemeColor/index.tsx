import { useTheme } from 'styled-components';

import { PropsThemeColorTypesKeys, PropsThemePaletteKeys } from '~/theme/config/types';

export const useThemeColor = (color?: PropsThemePaletteKeys, type?: PropsThemeColorTypesKeys) => {
  const theme = useTheme();

  if (color && !theme.palette[color]) {
    return theme.palette.common.black;
  }
  if (type && color) {
    return theme.palette[color][type];
  }
  if (color) {
    return theme.palette[color]?.main || '';
  }

  return theme.palette.common.black;
};
