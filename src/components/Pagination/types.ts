export interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  totalPages: number;
}
