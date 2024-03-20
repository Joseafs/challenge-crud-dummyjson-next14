'use client';

import emotionIsPropValid from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import theme from '~/theme/config';
import { GlobalStyles } from '~/theme/config/globals';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyleSheetManager
    enableVendorPrefixes
    shouldForwardProp={(propName, elementToBeRendered) => {
      return typeof elementToBeRendered === 'string' ? emotionIsPropValid(propName) : true;
    }}
  >
    <GlobalStyles theme={theme} />
    <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
  </StyleSheetManager>
);
