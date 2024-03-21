import { Formik } from 'formik';
import { FC } from 'react';

import { RootForm } from './styles';
import { Props, PropsFormSearch } from './types';

const initialValues: PropsFormSearch = { search: '' };

export const FormEditProductProvider: FC<Props> = ({ children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        // eslint-disable-next-line no-console
        console.log('🚀 ~ FormEditProductProvider - onSubmit={ ~ values:', values);

        setSubmitting(false);
      }}
      // validate={(values) => {
      //   const errors = {} as PropsFormSearch;
      //   if (!values.search) {
      //     errors.search = 'Required AAAA';
      //   }
      //   return errors;
      // }}
    >
      <RootForm>{children}</RootForm>
    </Formik>
  );
};
