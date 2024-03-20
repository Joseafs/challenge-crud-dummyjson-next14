import { useFormikContext } from 'formik';
import { FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';

import { PropsFormSearch } from './types';

export const FormSearchProducts: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

  return (
    <Fragment>
      <Grid
        backgroundColor="success"
        displayContent="space-between"
        displayType="inline-flex"
        margin={[1]}
        padding={[2, 1]}
      >
        <div>Search (title, brand)</div>
        <div>Sort (title, brand)</div>
        <div>Select category</div>
      </Grid>

      <Grid backgroundColor="info" displayType="inline-flex" margin={[1]} padding={[2, 1]}>
        <InputText
          label="Pesquisar por Nome ou Marca"
          name="search"
          onChange={handleChange}
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
