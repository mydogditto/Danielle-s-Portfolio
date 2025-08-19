import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, CircularProgress } from "@mui/material";

// Keep Home eager (it's your landing page)
import Home from "./pages/Home";

// Lazy-load everything else
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

function Loader() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", py: 6 }}>
      <CircularProgress size={28} />
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: "#2A7F7F" }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Suspense handles all lazy routes/components */}
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default App;