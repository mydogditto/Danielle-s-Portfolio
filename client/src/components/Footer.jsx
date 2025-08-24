import * as React from 'react';
import { Box, Container, IconButton, Typography, Stack, SvgIcon } from '@mui/material';

// --- Inline SVGs (inherit color via currentColor) ---
function GitHubSvg(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 .5A12 12 0 0 0 8.2 23.87c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.8.43-1.32.78-1.63-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.84.12 3.14.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.47 5.92.45.39.84 1.16.84 2.35v3.48c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </SvgIcon>
  );
}

function LinkedInSvg(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.65 15H6.34v-7.3h2.99V18Zm-1.5-8.32a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM18 18h-2.98v-3.98c0-.95-.02-2.17-1.32-2.17-1.33 0-1.53 1.04-1.53 2.1V18H9.19v-7.3h2.86v1h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58V18Z" />
    </SvgIcon>
  );
}

function EmailSvg(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2-8 5.2L4 7.2V6l8 5.2L20 6v1.2Z" />
    </SvgIcon>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#2A7F7F', color: 'white', py: 4, mt: 8 }}>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/mydogditto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{ color: 'white' }}
          >
            <GitHubSvg />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/daniellehgoldberg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ color: 'white' }}
          >
            <LinkedInSvg />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:daniellehgoldbergdev@gmail.com"
            aria-label="Email Danielle"
            sx={{ color: 'white' }}
          >
            <EmailSvg />
          </IconButton>
        </Stack>

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Danielle Goldberg — All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}