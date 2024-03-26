import { Formik } from 'formik';
import { FC, PropsWithChildren } from 'react';

import { RootForm } from './styles';
import { FormikUserLoginProps } from './types';
import { userLoginValidationShema } from './utils/userValidation';

export const FormUserLoginProvider: FC<PropsWithChildren> = ({ children }) => {
  // const {  } = useUserAuth();
  return (
    <Formik<FormikUserLoginProps>
      enableReinitialize
      initialValues={{ password: '', username: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        // TODO: auth login with values

        // eslint-disable-next-line no-console
        console.log('🚀 ~ onSubmit={ ~ values:', values);

        setSubmitting(false);
      }}
      validationSchema={userLoginValidationShema}
    >
      <RootForm>{children}</RootForm>
    </Formik>
  );
};
