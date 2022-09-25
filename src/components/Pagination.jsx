import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginationtable({paging}) {
  return (
    <Stack spacing={2}>
      <Pagination onChange={(event,value)=>paging(value)} count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}