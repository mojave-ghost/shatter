import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';  

const LadderTable = () => {
  const rows = [ 
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ];
  const columns = [
    { field: 'col1', headerName: 'Rank', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];
  return ( 
    <DataGrid 
      rows={rows} 
      columns={columns} 
    />
   );
}
 
export default LadderTable;