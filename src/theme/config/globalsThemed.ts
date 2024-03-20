'use client';

import { Quicksand } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const quicksand = Quicksand({ subsets: ['latin'] });

import { PropsRootTheme } from './types';

export const GlobalStylesThemed = createGlobalStyle`
  :root {
    --primary: ${({ theme }: PropsRootTheme) => theme.palette.primary.main};
    --secondary: ${({ theme }: PropsRootTheme) => theme.palette.secondary.main};
    font-size: 62.5%;
  }

  body {
    font-family: ${quicksand.style.fontFamily};
  }
`;
