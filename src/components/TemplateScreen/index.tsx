import { useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';

import { BackButton, Container, Grid } from '~/components';
import { Loading } from '~/components/Loading';

import { Body, Footer, Header, Root } from './styled';

type Props = {
  buttonBackRoute?: string;
  children: ReactNode;
  hasBackButton?: boolean;
  loading?: boolean;
};

export const TemplateScreen: FC<Props> = ({ children, hasBackButton = false, buttonBackRoute, loading = true }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    if (buttonBackRoute) {
      router.push(buttonBackRoute);
      return;
    }

    router.back();
  }, [buttonBackRoute, router]);

  // TODO: need loading here for pages and waits
  // TODO: need specift maxWidth

  return (
    <Root>
      {loading && <Loading />}
      <Header>
        <Container fixed>
          <Grid displayContent="flex-start" displayType="flex">
            {hasBackButton && <BackButton onClick={handleBack} />}
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
