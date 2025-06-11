import { type ChangeEvent } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationButtonProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (e: ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationButton({ totalPages, currentPage, handlePageChange } : PaginationButtonProps) {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination 
        count={totalPages} 
        page={currentPage}
        boundaryCount={1}
        variant="outlined" 
        shape="rounded" 
        onChange={handlePageChange}
      />
    </Stack>
  );
}