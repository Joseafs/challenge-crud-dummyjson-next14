import { useTheme } from 'styled-components';

import { PropsFontSizesKeys } from '~/theme/config/types';

export const useThemeFontStyle = (type: PropsFontSizesKeys = 'medium') => {
  const theme = useTheme();

  return {
    fontLineHeights: theme.fontLineHeights[type],
    fontSize: theme.fontSizes[type],
  };
};
