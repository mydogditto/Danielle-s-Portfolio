import * as React from 'react';
import { Container } from '@mui/material';
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
    year: '2024',
    title: 'Spooler',
    subtitle: 'MongoDB + React',
    description: 'A production-ready tool with clean UX and clear content hierarchy.',
  },
  {
    year: '2023',
    title: 'Bubblr',
    subtitle: 'CSS Interface + MySQL',
    description: 'Custom interface with focus on usability and visual clarity.',
  },

];

export default function Home() {
  return (
    <Container sx={{ py: 6 }}>
      <ArtNouveauTimeline title="Resume Timeline" items={timelineItems} />
    </Container>
  );
}