import * as React from 'react';
import { Box, Container, Stack, Typography, Avatar, Chip, useTheme, Grid } from '@mui/material';
const Carousel = React.lazy(() => import('../components/Carousel'));

export default function Home() {
  const theme = useTheme();

  const slides = [
    { title: 'SureShine Magazine Ad', img: '/assets/tinified/SureShine.png' },
    { title: 'Illustration', img: '/assets/tinified/Building.png' },
    { title: 'Apple Music Album Cover', img: '/assets/tinified/Devine Solitude.png' },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        {/* Header */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center" sx={{ mb: 4 }}>
          <Avatar
            alt="Danielle Goldberg"
            src="/assets/tinified/Mara wedding.png"
            imgProps={{ loading: 'lazy', decoding: 'async' }}
            sx={{
              width: 96, height: 96,
              boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 0 0 6px ${theme.palette.secondary.main}33`
            }}
          />
          <Stack spacing={1} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h1" sx={{ lineHeight: 1 }}>Danielle Goldberg</Typography>
            <Grid container spacing={1}>
              <Grid xs="auto"><Chip label="Digital Design" color="secondary" variant="outlined" /></Grid>
              <Grid xs="auto"><Chip label="Full-Stack Web Development" color="primary" variant="outlined" /></Grid>
            </Grid>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720 }}>
              Full-stack developer & designer — building engaging experiences for web and print.
            </Typography>
          </Stack>
        </Stack>

        {/* Carousel (lazy) */}
        <React.Suspense fallback={null}>
          <Carousel slides={slides} interval={30000} aspect="16 / 9" />
        </React.Suspense>
      </Container>
    </Box>
  );
}