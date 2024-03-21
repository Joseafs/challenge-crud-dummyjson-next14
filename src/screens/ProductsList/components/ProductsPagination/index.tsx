import { FC } from 'react';

import { Grid } from '~/components';
import Pagination from '~/components/Pagination';
import { usePagination } from '~/screens/ProductsList/context/usePagination';

export const ProductsPagination: FC = () => {
  const { currentPage, setCurrentPage, totalPages } = usePagination();

  return (
    <Grid>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
    </Grid>
  );
};
