import { useFormikContext } from 'formik';
import { FC, useCallback } from 'react';

import { Button, Grid, InputText } from '~/components';
import { FormikProps } from '~/screens/ProductEdit/components/FormEditProduct/components/FormEditProductProvider/types';

// To help tests ans insert new images:
// 'https://cdn.dummyjson.com/product-images/1/2.jpg',
// 'https://cdn.dummyjson.com/product-images/1/3.jpg',
// 'https://cdn.dummyjson.com/product-images/1/4.jpg',

export const InputImageURL: FC = () => {
  const { setFieldValue, values, errors } = useFormikContext<FormikProps>();

  const addImageURL = useCallback(
    (item: string) => {
      const { images } = values;
      const newImages = [...images, item];

      setFieldValue('images', newImages);
    },
    [setFieldValue, values],
  );

  const onClick = () => {
    addImageURL(values.urlImage);
  };

  const hasErrors = !!errors.urlImage || !!errors.thumbnail;
  const errorDescriptions = errors.urlImage || errors.thumbnail;

  return (
    <Grid displayType="inline-flex" gridGap="10px">
      <InputText
        errorDescription={errorDescriptions}
        hasError={hasErrors}
        label="Adicionar imagem por URL"
        name="urlImagem"
        onChange={(e) => setFieldValue('urlImage', e.target.value)}
        placeholder={`Informe a URL da imagem para upload`}
        type="text"
        value={values.urlImage}
        width={'flex'}
      />
      <Button color="secondary" onClick={onClick}>
        Adicionar
      </Button>
    </Grid>
  );
};
