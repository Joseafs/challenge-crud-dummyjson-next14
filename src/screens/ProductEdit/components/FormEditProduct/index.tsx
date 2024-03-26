import { useFormikContext } from 'formik';
import { FC, Fragment, useCallback, useMemo } from 'react';

import { Button, Grid, InputText, Textarea } from '~/components';
import { ImageGallery } from '~/components/ImageGallery';
import { SelectOptions } from '~/components/Select/types';
import { useProductEdit } from '~/screens/ProductEdit/context/useProduct';
import { ProductData } from '~/services/products/getProduct/types';
import { generateArray } from '~/utils/generateArray';

import { InputImageURL } from './components/InputImageURL';
import { GridTemplateInputs, SelectRoot } from './styles';

const definitionOfItem = 'produto';

export const FormEditProduct: FC = () => {
  const { isSubmitting, handleChange, values, dirty, isValid, errors, setValues, setFieldValue } =
    useFormikContext<ProductData>();

  const { productsCategories } = useProductEdit();

  const removeImageByIndex = useCallback(
    (indexToRemove: number) => {
      setValues((values) => {
        const newImages = [...values.images];
        newImages.splice(indexToRemove, 1);
        return { ...values, images: newImages };
      });
    },
    [setValues],
  );

  const promoteImageToThumbnailByIndex = useCallback(
    (indexToPromote: number) => {
      setValues((values) => {
        const newImages = [...values.images, values.thumbnail];
        const thumbnailImage = newImages.splice(indexToPromote, 1)[0];

        return { ...values, images: newImages, thumbnail: thumbnailImage };
      });
    },
    [setValues],
  );

  const categoriesSelectOption = useMemo(
    () =>
      generateArray<SelectOptions>(productsCategories.length, (_, index) => ({
        label: productsCategories[index],
        value: productsCategories[index],
      })),
    [productsCategories],
  );

  return (
    <Fragment>
      <Grid displayType="grid" gridGap="30px" padding={[2]}>
        <GridTemplateInputs displayType="inline-flex">
          <ImageGallery
            images={values.images}
            onDelete={removeImageByIndex}
            onPromoteThumbnail={promoteImageToThumbnailByIndex}
            thumbnail={values.thumbnail}
          />
        </GridTemplateInputs>
        <InputImageURL />
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.title}
            hasError={!!errors.title}
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
            errorDescription={errors.brand}
            hasError={!!errors.brand}
            label="Marca"
            name="brand"
            onChange={handleChange}
            placeholder={`Qual a marca do ${definitionOfItem}`}
            type="text"
            value={values.brand}
            width="flex"
          />
          <SelectRoot
            errorDescription={errors.category}
            hasError={!!errors.category}
            label="Categorias"
            name="category"
            onChange={(e) => setFieldValue('category', e.target.value)}
            options={categoriesSelectOption}
            value={values.category}
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.price}
            hasError={!!errors.price}
            label="Preço"
            name="price"
            onChange={handleChange}
            placeholder={`Insira o valor do ${definitionOfItem}`}
            type="text"
            value={values.price}
            width="flex"
          />
          <InputText
            errorDescription={errors.discountPercentage}
            hasError={!!errors.discountPercentage}
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
            errorDescription={errors.rating}
            hasError={!!errors.rating}
            label="Avaliação"
            name="rating"
            onChange={handleChange}
            placeholder={`Qual a avaliação desse ${definitionOfItem}`}
            type="text"
            value={values.rating}
            width="flex"
          />
          <InputText
            errorDescription={errors.stock}
            hasError={!!errors.stock}
            label="Estoque"
            name="stock"
            onChange={handleChange}
            placeholder={`Quantos ${definitionOfItem}s há em estoque ?`}
            type="text"
            value={values.stock}
            width="flex"
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <Textarea
            errorDescription={errors.description}
            hasError={!!errors.description}
            label="Descrição"
            name="description"
            onChange={handleChange}
            placeholder={`Descrição do ${definitionOfItem}`}
            value={values.description}
            width="flex"
          />
        </GridTemplateInputs>
        <Grid align="center" displayContent="space-evenly" displayType="inline-flex">
          <Button color="secondary" disabled={isSubmitting || !isValid || !dirty} fullWidth type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
