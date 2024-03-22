import { FC } from 'react';

import { Button } from '~/components';

import { Root, Span } from './styles';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  return (
    <Root>
      <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Anterior
      </Button>

      <Span>
        Página {currentPage} de {totalPages}
      </Span>

      <Button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        Próximo
      </Button>
    </Root>
  );
};
