import { FC } from 'react';

import { Grid, Pagination } from '~/components';
import { usePagination } from '~/screens/ProductsList/context/usePagination';

export const ProductsPagination: FC = () => {
  const { currentPage, setCurrentPage, totalPages } = usePagination();

  return (
    <Grid>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
    </Grid>
  );
};
