import { useFormikContext } from 'formik';
import { FC, Fragment } from 'react';

import { Button, Grid, InputText } from '~/components';
import { ProductData } from '~/services/products/getProduct/types';

import { GridTemplateInputs, SelectRoot } from './styles';

export const sortOptionsList: any[] = [
  { label: 'Título', value: 'title' },
  { label: 'Marca', value: 'brand' },
];

const definitionOfItem = 'produto';

export const FormEditProduct: FC = () => {
  const { isSubmitting, handleChange, values } = useFormikContext<ProductData>();

  return (
    <Fragment>
      <Grid displayType="grid" gridGap="20px" margin={[1]} padding={[2, 1]}>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            label="Título"
            name="title"
            onChange={handleChange}
            placeholder={`Insira o um título para o ${definitionOfItem}`}
            type="text"
            value={values.title}
            width={'flex'}
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            label="Marca"
            name="brand"
            onChange={handleChange}
            placeholder={`Qual a marca do ${definitionOfItem}`}
            type="text"
            value={values.brand}
            width="flex"
          />
          <SelectRoot label="Categorias" name="category" onChange={handleChange} options={sortOptionsList} />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            label="Preço"
            name="price"
            onChange={handleChange}
            placeholder={`Insira o valor do ${definitionOfItem}`}
            type="text"
            value={values.price}
            width="flex"
          />
          <InputText
            label="Porcentagem de Desconto"
            name="discountPercentage"
            onChange={handleChange}
            placeholder="Informe um numero para o desconto"
            type="number"
            value={values.discountPercentage}
            width="flex"
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            label="Avaliação"
            name="rating"
            onChange={handleChange}
            placeholder={`Qual a avaliação desse ${definitionOfItem}`}
            type="text"
            value={values.rating}
            width="flex"
          />
          <InputText
            label="Estoque"
            name="stock"
            onChange={handleChange}
            placeholder={`Quantos ${definitionOfItem}s há em estoque ?`}
            type="text"
            value={values.stock}
            width="flex"
          />
        </GridTemplateInputs>
        <Grid align="center" displayContent="space-evenly" displayType="inline-flex">
          <Button color="secondary" disabled={isSubmitting} fullWidth type="submit">
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
