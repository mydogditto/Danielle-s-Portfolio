import * as React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import aboutImg from '../components/assets/Mara wedding.jpeg';
import resume from '/Danielle-Goldberg-Resume.pdf'
import ArtNouveauTimeline from '../components/ArtNouveauTimeline';
import nicksBricks from '/client/src/components/assets/Nicks Bricks.jpg'

const timelineItems = [
  {
    year: '2025',
    title: 'Design Logo',
    subtitle: 'Designed Logo for Nicks Bricks',
    description: 'The logo uses the Iron Man of War font and incorberates the idea of a cracklin stove',
    image: nicksBricks
  },
  {
    year: '2025',
    title: 'LetsGeaux',
    subtitle: 'Letsgeauxnola.com',
    description: 'Lets Geaux is designed to help people coming to New Orleans orginize there trip.',
    image: ''
  },
  {
    year: '2025',
    title: 'Spooler',
    subtitle: 'MongoDB + React',
    description: 'A production-ready tool with clean UX and clear content hierarchy.',
    image: "",
    href: "https://github.com/mydogditto"
  },
  {
    year: '2025',
    title: 'Bubblr',
    subtitle: 'CSS Interface + MySQL',
    description: 'Custom interface with focus on usability and visual clarity.',
    image: "",

  },

];


function AboutSection() {
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
              I merge full-stack web development with digital and print design to create cohesive, high-impact experiences. Accessibility is built in from the start—clear hierarchy, readable type, strong contrast, semantic structure, and keyboard-friendly interactions—so my work is usable by more people in more contexts. Whether I’m coding a complex application, designing an elegant interface, or producing print materials, I bring the same focus on clarity, usability, and visual appeal.
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
            <Container sx={{ py: 6 }}>
              <ArtNouveauTimeline title="Resume Timeline" items={timelineItems} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default AboutSection