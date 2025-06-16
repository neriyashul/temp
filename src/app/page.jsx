import { Typography, Container, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Next.js + MUI Showcase
        </Typography>
        <Typography variant="subtitle1">
          Use the navigation bar above to explore different examples.
        </Typography>
      </Box>
    </Container>
  );
}
