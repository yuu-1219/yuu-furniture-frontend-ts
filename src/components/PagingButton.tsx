import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButton({ totalPages, currentPage, handlePageChange }) {
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