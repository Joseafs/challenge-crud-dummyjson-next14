import { useFormikContext } from 'formik';
import { FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';

import { PropsFormSearch } from './types';

export const FormSearchProducts: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

  return (
    <Fragment>
      <Grid displayType="inline-flex" margin={[1]} padding={[2, 1]}>
        <InputText
          label="Pesquisar"
          name="search"
          onChange={handleChange}
          placeholder="Insira o nome ou a marca do produto"
          type="text"
          value={values.search}
        />
        <Button color="secondary" disabled={isSubmitting} type="submit">
          Buscar
        </Button>
      </Grid>
    </Fragment>
  );
};
