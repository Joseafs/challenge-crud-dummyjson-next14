'use client';

import emotionIsPropValid from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import theme from '~/theme/config';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyleSheetManager
    enableVendorPrefixes
    shouldForwardProp={(propName, elementToBeRendered) => {
      return typeof elementToBeRendered === 'string' ? emotionIsPropValid(propName) : true;
    }}
  >
    <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
  </StyleSheetManager>
);
