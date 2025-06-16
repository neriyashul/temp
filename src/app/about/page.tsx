import { Typography, Container, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This is a demonstration application showcasing Next.js with Material UI.
          We have examples of SSR, SSG, API routes, and client-side data fetching.
        </Typography>
      </Paper>
    </Container>
  );
}
