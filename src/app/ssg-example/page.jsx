import { Typography, Container, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

// This function will be called at build time to fetch data.
async function getStaticData() {
  // Simulate fetching data from an API or database
  // In a real application, this would be an actual fetch call.
  // For this example, we'll return some mock data.
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return [
    { id: 1, title: 'First Post', body: 'This is the body of the first post.' },
    { id: 2, title: 'Second Post', body: 'This is the body of the second post.' },
    { id: 3, title: 'Third Post', body: 'This is the body of the third post.' },
  ];
}

export default async function SsgExamplePage() {
  const posts = await getStaticData();

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          SSG Example Page
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This page demonstrates Static Site Generation (SSG). The data below (list of posts) is fetched at build time.
        </Typography>
        <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 1 }}>
          <Typography variant="h6">Fetched Posts:</Typography>
          {posts && posts.length > 0 ? (
            <List>
              {posts.map((post) => (
                <ListItem key={post.id}>
                  <ListItemText primary={post.title} secondary={post.body} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No posts found.</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

// By default, Next.js App Router pages are statically rendered if they don't use dynamic functions or dynamic fetching.
// So, no specific export like 'getStaticProps' is needed here for basic SSG behavior,
// as long as getData() doesn't use 'unstable_noStore' or similar.
// If this page had dynamic route segments (e.g., /ssg-example/[id]), we would use 'generateStaticParams'.
