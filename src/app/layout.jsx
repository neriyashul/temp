import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google' // Changed from Geist to Inter as per new example
import ThemeRegistry from '../components/ThemeRegistry';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import NextLink from 'next/link';

const inter = Inter({ subsets: ['latin'] }) // Initialize Inter font

export const metadata = {
  title: 'Next.js MUI Showcase', // Updated title
  description: 'Examples of Next.js features with MUI', // Updated description
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contribute', path: '/contribute' },
  { label: 'SSR', path: '/ssr-example' },
  { label: 'SSG', path: '/ssg-example' },
  { label: 'API Client', path: '/api-client-example' },
];

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Use Inter font className */}
        <ThemeRegistry>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button
                  component={NextLink}
                  href="/"
                  sx={{ color: 'white' }}
                >
                  MUI App
                </Button>
              </Typography>
              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={NextLink}
                    href={item.path}
                    sx={{ color: 'white' }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Container component="main" sx={{ mt: 2 }}> {/* Add some margin top for content below AppBar */}
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  )
}
