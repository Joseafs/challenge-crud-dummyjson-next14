import { useFormikContext } from 'formik';
import { ChangeEvent, FC } from 'react';

import { InputText } from '~/components';
import { useProductsList } from '~/screens/ProductsList/context/useProducts';
import { ProductsSortOptionsKeys } from '~/screens/ProductsList/context/useProducts/types';
import { sortOptionsList } from '~/screens/ProductsList/context/useProducts/values';

import { ButtonRoot, GridRoot, SelectRoot } from './styles';
import { PropsFormSearch } from './types';

export const FormSearchProducts: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<PropsFormSearch>();

  const { setSortOption, productsSortOption } = useProductsList();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const orderBy = event.target.value as ProductsSortOptionsKeys;
    setSortOption(orderBy);
  };

  return (
    <GridRoot displayType="inline-flex" gridGap="10px" padding={[2, 1]}>
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
        name="order"
        onChange={handleSortChange}
        options={sortOptionsList}
        value={productsSortOption}
      />
      <ButtonRoot color="secondary" disabled={isSubmitting} type="submit">
        Buscar
      </ButtonRoot>
    </GridRoot>
  );
};
