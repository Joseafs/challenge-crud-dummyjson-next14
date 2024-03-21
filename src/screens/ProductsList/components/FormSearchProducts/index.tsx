import { useFormikContext } from 'formik';
import { ChangeEvent, FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';
import { useProductsList } from '~/screens/ProductsList/context/useProducts';
import { ProductsSortOptionsKeys } from '~/screens/ProductsList/context/useProducts/types';
import { sortOptionsList } from '~/screens/ProductsList/context/useProducts/values';

import { SelectRoot } from './styles';
import { PropsFormSearch } from './types';

export const FormSearchProducts: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

  const { setSortOption, productsSortOption } = useProductsList();

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
          width="flex"
        />
        <SelectRoot
          label="Ordenação"
          onChange={handleSortChange}
          options={sortOptionsList}
          value={productsSortOption}
        />
        <Button color="secondary" disabled={isSubmitting} type="submit">
          Buscar
        </Button>
      </Grid>
    </Fragment>
  );
};
