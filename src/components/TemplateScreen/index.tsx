import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';

import { BackButton, Container, Grid } from '~/components';
import { Loading } from '~/components/Loading';

import { Body, Footer, Header, Root } from './styled';
import { Props } from './types';

export const TemplateScreen: FC<Props> = ({
  children,
  hasBackButton = false,
  buttonBackRoute,
  loading = false,
  hasFooter = false,
  hasHeader = false,
}) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    if (buttonBackRoute) {
      router.push(buttonBackRoute);
      return;
    }

    router.back();
  }, [buttonBackRoute, router]);

  return (
    <Root>
      {loading && <Loading />}
      {hasHeader && (
        <Header>
          <Container fixed>
            <Grid displayContent="flex-start" displayType="flex">
              {hasBackButton && <BackButton onClick={handleBack} />}
            </Grid>
          </Container>
          {/* TODO: circle with user image ? */}
        </Header>
      )}
      <Body>
        <Container fixed>{children}</Container>
      </Body>
      {hasFooter && <Footer />}
    </Root>
  );
};
