import { useFormikContext } from 'formik';
import { ChangeEvent, FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';
import { useProductsList } from '~/screens/ProductsListScreen/context/useProducts';
import { ProductsSortOptionsKeys } from '~/screens/ProductsListScreen/context/useProducts/types';
import { sortOptionsList } from '~/screens/ProductsListScreen/context/useProducts/values';

import { SelectRoot } from './styles';
import { PropsFormSearch } from './types';

export const FormSearchProducts: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

  const { setSortOption, sortOption } = useProductsList();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const orderBy = event.target.value as ProductsSortOptionsKeys;
    setSortOption(orderBy);
  };

  return (
    <Fragment>
      <Grid displayType="inline-flex" gridGap="10px" margin={[1]} padding={[2, 1]}>
        <InputText
          label="Pesquisar"
          name="search"
          onChange={handleChange}
          placeholder="Insira o nome ou a marca do produto"
          type="text"
          value={values.search}
        />
        <SelectRoot label="Ordenação" onChange={handleSortChange} options={sortOptionsList} value={sortOption} />
        <Button color="secondary" disabled={isSubmitting} type="submit">
          Buscar
        </Button>
      </Grid>
    </Fragment>
  );
};
