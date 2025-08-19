import * as React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';


const ArtNouveauTimeline = React.lazy(() => import('../components/ArtNouveauTimeline'));

export default function AboutSection() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;
    import('../data/timelineItems.json').then(mod => {
      if (mounted) setItems(mod.default || []);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid xs={12} md={5}>
            <Box
              component="img"
              src='public/assets/tinified/Mara wedding.png'
              alt="Danielle Goldberg"
              loading="lazy"
              decoding="async"
              sx={{ width: '100%', borderRadius: 4, boxShadow: 4 }}
            />
          </Grid>

          {/* Text */}
          <Grid xs={12} md={7}>
            <Typography variant="h2" gutterBottom>About Me</Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              I merge full-stack web development with digital and print design to create cohesive, high-impact
              experiences. Accessibility is built in from the start — clear hierarchy, readable type, strong contrast,
              semantic structure, and keyboard-friendly interactions — so my work is usable by more people in more
              contexts. Whether I’m coding a complex application, designing an elegant interface, or producing print
              materials, I bring the same focus on clarity, usability, and visual appeal.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              href="/public/Danielle-Goldberg-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mb: 4 }}
            >
              Download Resume
            </Button>

            <React.Suspense fallback={<Typography variant="body2">Loading timeline…</Typography>}>
              {items.length > 0 && (
                <Box sx={{ pt: 4 }}>
                  <ArtNouveauTimeline title="Resume Timeline" items={items} />
                </Box>
              )}
            </React.Suspense>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}