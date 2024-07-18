import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SoloLadder = () => {
  const rows = [ 
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ];
  const columns = [
    { field: 'col1', headerName: 'Rank', width: 150 },
    { field: 'col2', headerName: 'Rating', width: 150 },
    { field: 'col3', headerName: 'Player', width: 150 },
    { field: 'col4', headerName: 'Class', width: 150 },
    { field: 'col5', headerName: 'Spec', width: 150 },
    { field: 'col6', headerName: 'Realm', width: 150 },
    { field: 'col7', headerName: 'Win %', width: 150 },
  ];
  return ( 
    <DataGrid className="data-grid"
      rows={rows} 
      columns={columns}
    />
   );
}
 
export default SoloLadder;