import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import { StyledComponentsRegistry } from '~/theme/StyledComponentsRegistry';
import theme from '~/theme/config';
import { GlobalStyles } from '~/theme/config/globals';
import { ThemeProvider } from '~/theme/provider';

export const metadata: Metadata = {
  description: 'Generated with next 14 and styled-components for new challenges and projects',
  icons: { icon: '/images/favicon.png' },
  title: 'Boilerplate Next Styled 2024',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="pt-BR">
    <body>
      <StyledComponentsRegistry>
        <GlobalStyles theme={theme} />
        <ThemeProvider>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
