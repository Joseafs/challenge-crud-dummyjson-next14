'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  
  body {
    word-wrap: break-word;
    word-break: normal;
    min-width: 320px;
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, div, a {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: unset;
  }

  /* ------------------ */
  /* Select Shadows */
  ::selection {
    background: rgba(0, 0, 0, 0.3);
  }
  ::-moz-selection {
    background: rgba(0, 0, 0, 0.5);
  }
  /* ------------------ */
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: var(--secondary);
  }
`;
