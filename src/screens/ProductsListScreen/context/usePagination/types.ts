type OnClick = (e: number) => void;

export interface PaginationContextProps {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: OnClick;
  setItemsPerPage: OnClick;
  setTotalItems: OnClick;
  totalPages: number;
}
