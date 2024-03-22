import { useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';

import { BackButton, Container, Grid } from '~/components';

import { Body, Footer, Header, Root } from './styled';

type Props = {
  children: ReactNode;
};

export const TemplateScreen: FC<Props> = ({ children }) => {
  const router = useRouter();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  // TODO: need loading here for pages and waits
  // TODO: need specift maxWidth

  return (
    <Root>
      <Header>
        <Container fixed>
          <Grid displayContent="flex-start" displayType="flex">
            <BackButton onClick={onBack} />
          </Grid>
        </Container>
        {/* TODO: circle with user image ? */}
      </Header>
      <Body>
        <Container fixed>{children}</Container>
      </Body>
      <Footer />
    </Root>
  );
};
