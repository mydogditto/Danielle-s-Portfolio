import { createTheme } from '@mui/material/styles';
import '@fontsource/limelight';       // Limelight font (headings)
import '@fontsource/lato/400.css';    // Lato Regular
import '@fontsource/lato/700.css';    // Lato Bold

const theme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif", // Default body font
    h1: {
      fontFamily: "'Limelight', sans-serif",
      fontSize: '3rem',
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Limelight', sans-serif",
      fontSize: '2rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Limelight', sans-serif",
      fontSize: '1.75rem',
      fontWeight: 400,
    },
  },
  palette: {
    primary: { main: '#2E2E2E' },     // Charcoal
    secondary: { main: '#D2691E' },   // Terracotta
    background: { default: '#F2E4D7' } // Muted Peach
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        body {
          background-color: ${themeParam.palette.background.default};
          margin: 0;
          padding: 0;
          font-family: 'Lato', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Limelight', sans-serif;
          font-weight: 400;
        }
      `,
    },
  },
});

export default theme;