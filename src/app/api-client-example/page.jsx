'use client'; // This component needs to be a client component to use useEffect and useState

import { useState, useEffect } from 'react';
import { Typography, Container, Paper, Box, Button, CircularProgress } from '@mui/material';

export default function ApiClientExamplePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/example');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial component mount

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          API Client Example Page
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This page calls a backend API route (`/api/example`) on the client-side and displays the response.
        </Typography>
        <Button variant="contained" onClick={fetchData} disabled={loading} sx={{ mb: 2 }}>
          {loading ? <CircularProgress size={24} sx={{ mr:1 }} /> : null}
          Fetch Data Again
        </Button>
        <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1, minHeight: '100px' }}>
          <Typography variant="h6">API Response:</Typography>
          {loading && !data && <CircularProgress />}
          {error && <Typography color="error">Error: {error}</Typography>}
          {data && (
            <Box>
              <Typography>Message: {data.message}</Typography>
              <Typography>Timestamp: {data.timestamp}</Typography>
              <Typography>Random Number: {data.randomNumber}</Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
