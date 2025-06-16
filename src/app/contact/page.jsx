import { Typography, Container, Paper, Box, TextField, Button } from '@mui/material';

export default function ContactPage() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Feel free to reach out! (This is a dummy form).
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Your Name" variant="outlined" />
          <TextField label="Your Email" variant="outlined" type="email" />
          <TextField label="Message" variant="outlined" multiline rows={4} />
          <Button variant="contained" type="submit">Send Message</Button>
        </Box>
      </Paper>
    </Container>
  );
}
