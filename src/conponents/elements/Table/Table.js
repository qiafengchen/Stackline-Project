import * as React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import uuid from 'react-uuid';
import './Table.css';

export default function DataTable() {
  const product = useSelector((state) => state.product);
  const [rows, setRows] = React.useState([]);
  const columns = [
    { field: 'weekEnding', headerName: 'WEEKENDING', width: 170 },
    { field: 'retailSales', headerName: 'RETAILSALES', width: 170 },
    { field: 'wholesaleSales', headerName: 'WHOLESALESALES', width: 170 },
    {
      field: 'unitsSold',
      headerName: 'UNITESSOLD',
      type: 'number',
      width: 170,
    },
    {
      field: 'retailerMargin',
      headerName: 'RETAILERMARGIN',
      type: 'number',
      width: 170,
    },
  ];

  React.useEffect(() => {
    setRows(
      product.sales?.map((el) => {
        return {
          id: uuid(),
          ...el,
        };
      })
    );
  }, [product.sales]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className="table"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
