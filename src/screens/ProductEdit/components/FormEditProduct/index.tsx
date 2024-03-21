import { FC, Fragment } from 'react';

interface Props {
  id: number;
}

export const FormEditProduct: FC<Props> = ({ id }) => {
  return <Fragment>List edit {id}</Fragment>;
};
