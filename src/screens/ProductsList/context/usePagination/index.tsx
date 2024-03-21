import { FC, PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

import { PaginationContextProps } from './types';

const PaginationContext = createContext({} as PaginationContextProps);

export const PaginationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const paginationContextValue: PaginationContextProps = useMemo(
    () => ({
      currentPage,
      itemsPerPage,
      setCurrentPage,
      setItemsPerPage,
      setTotalItems,
      totalPages: Math.ceil(totalItems / itemsPerPage),
    }),
    [currentPage, itemsPerPage, totalItems],
  );

  return <PaginationContext.Provider value={paginationContextValue}>{children}</PaginationContext.Provider>;
};

export const usePagination = () => useContext(PaginationContext);
