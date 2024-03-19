'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import theme from '~/theme/config';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
);
