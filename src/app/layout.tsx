import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import theme from '~/theme/config';
import { GlobalStylesThemed } from '~/theme/config/globalsThemed';
import { ThemeProvider } from '~/theme/provider';
import { StyledComponentsNextRegistry } from '~/theme/provider/StyledComponentsNextRegistry';

export const metadata: Metadata = {
  description: 'Generated with next 14 and styled-components for new challenges and projects',
  icons: { icon: '/images/favicon.png' },
  title: 'Boilerplate Next Styled 2024',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="pt-BR">
    <body>
      <StyledComponentsNextRegistry>
        <ThemeProvider>
          <GlobalStylesThemed theme={theme} />
          {children}
        </ThemeProvider>
      </StyledComponentsNextRegistry>
    </body>
  </html>
);

export default RootLayout;
