import { useFormikContext } from 'formik';
import { FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';
import { FetchAuthDataParams } from '~/services/auth/postLogin/types';

export const FormUserLogin: FC = () => {
  const { isSubmitting, handleChange, values, dirty, isValid, errors } = useFormikContext<FetchAuthDataParams>();

  return (
    <Fragment>
      <Grid displayType="grid" gridGap="20px" padding={[2]}>
        <InputText
          errorDescription={errors.username}
          hasError={!!errors.username}
          label="Usuário"
          name="username"
          onChange={handleChange}
          placeholder={`Informe seu usuário`}
          type="text"
          value={values.username}
          width={'flex'}
        />
        <InputText
          errorDescription={errors.password}
          hasError={!!errors.password}
          label="Senha"
          name="password"
          onChange={handleChange}
          placeholder={`Informe sua senha`}
          type="text"
          value={values.password}
          width={'flex'}
        />
      </Grid>
      <Grid align="center" displayContent="space-evenly" displayType="inline-flex">
        <Button color="secondary" disabled={isSubmitting || !isValid || !dirty} fullWidth type="submit">
          Acessar
        </Button>
      </Grid>
    </Fragment>
  );
};
