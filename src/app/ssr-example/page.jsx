import { Typography, Container, Paper, Box } from '@mui/material';
import { unstable_noStore as noStore } from 'next/cache';

// This function will be called on the server for every request.
async function getData() {
  noStore(); // Opt out of caching for this fetch
  // Simulate a data fetching operation
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  const currentTime = new Date().toLocaleTimeString();
  const randomNumber = Math.floor(Math.random() * 1000);
  return {
    currentTime,
    randomNumber,
  };
}

export default async function SsrExamplePage() {
  const data = await getData();

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          SSR Example Page
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This page demonstrates Server-Side Rendering (SSR). The data below is fetched on the server for each request.
        </Typography>
        <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1 }}>
          <Typography variant="h6">Fetched Data:</Typography>
          <Typography>Current Time: {data.currentTime}</Typography>
          <Typography>Random Number: {data.randomNumber}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

// Ensure this page is dynamically rendered
export const dynamic = 'force-dynamic';
