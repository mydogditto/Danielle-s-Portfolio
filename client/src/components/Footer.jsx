import * as React from 'react';
import { Box, Container, IconButton, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
//import BrushIcon from '@mui/icons-material/Brush'; // for Behance placeholder

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2A7F7F', // Deep Teal
        color: 'white',
        py: 4,
        mt: 8,
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <IconButton
            component="a"
            href="https://github.com/mydogditto"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/daniellehgoldberg/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <LinkedInIcon />
          </IconButton>



          <IconButton
            component="a"
            href="mailto:daniellehgoldbergdev@gmail.com"
            sx={{ color: 'white' }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Danielle Goldberg — All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}