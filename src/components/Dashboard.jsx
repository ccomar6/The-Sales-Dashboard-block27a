import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TransactionLog from './TransactionLog';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Welcome to your dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Sales Obtained</Typography>
            <Typography variant="h4">431,225</Typography>
            <Typography variant="body2" color="textSecondary">+21%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">New Clients</Typography>
            <Typography variant="h4">32,441</Typography>
            <Typography variant="body2" color="textSecondary">+5%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Traffic Received</Typography>
            <Typography variant="h4">1,325,134</Typography>
            <Typography variant="body2" color="textSecondary">+43%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Revenue Generated</Typography>
            <Typography variant="h4">$59,342.32</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Transactions</Typography>
            <TransactionLog />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
