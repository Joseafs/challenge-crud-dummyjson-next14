'use client';

import { FC, Fragment } from 'react';

import { Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormUserLogin } from './components/FormUserLogin';
import { FormUserLoginProvider } from './components/FormUserLogin/components/FormUserLoginProvider';
import { UserAuthProvider, useUserAuth } from './context/useUserAuth';
import { Background, LoginBox } from './styles';

const LoginWithProvider: FC = () => {
  const { loading } = useUserAuth();

  // useDidMount(() => {
  //   getMeData();
  // });

  return (
    <TemplateScreen buttonBackRoute="/products/" loading={loading}>
      <Fragment>
        <Background />
        <LoginBox>
          <Grid displayContent="center" displayType="flex" padding={[2, 1]}>
            <PageTitle color="primary">Login</PageTitle>
          </Grid>
          <FormUserLoginProvider>
            <FormUserLogin />
          </FormUserLoginProvider>
        </LoginBox>
      </Fragment>
    </TemplateScreen>
  );
};

export const Login: FC = () => (
  <UserAuthProvider>
    <LoginWithProvider />
  </UserAuthProvider>
);
