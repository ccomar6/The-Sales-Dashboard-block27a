// src/components/TransactionLog.jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from '../mockData';

const columns = [
  { field: 'txId', headerName: 'Transaction ID', width: 150 },
  { field: 'user', headerName: 'User', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'cost', headerName: 'Cost', width: 100 },
];

const TransactionLog = () => {
  const rows = mockTransactions.map((tx, index) => ({
    id: index,
    ...tx,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default TransactionLog;
