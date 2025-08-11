import * as React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import aboutImg from '../components/assets/Mara wedding.jpeg';
import resume from '/Danielle-Goldberg-Resume.pdf'
export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={aboutImg}
              alt="Danielle Goldberg"
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: 4,
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={7}>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I design and build digital experiences that balance beauty, clarity, and accessibility.
              My work spans intuitive app interfaces and thoughtful print design, with an eye for
              detail that makes each project stand out.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              With a foundation in full-stack development and a deep appreciation for visual
              storytelling, I bring concepts to life from the first sketch to the finished product.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}