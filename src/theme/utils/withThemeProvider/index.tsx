import { ReactNode } from 'react';

import { ThemeProvider } from '~/theme/provider';

export const withThemeProvider = (element: ReactNode) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
