import * as React from 'react';
import {
  Box, Container, Stack, Typography, Avatar, Chip, useTheme, Grid,
  Button, swiperRef, isPlaying
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ Import images so Webpack gives you proper URLs
import Devine from '../components/assets/Devine.jpg';
import Building from '../components/assets/DHG-Post headquoters-Portfolio.jpg';
import SureShine from '../components/assets/sureshine.jpg';
import Headshot from '../components/assets/Mara wedding.jpeg'; // consider renaming to 'mara-wedding.jpg'

export default function Home() {
  const theme = useTheme();

  const slides = [
    { title: 'SureShine Magazine Ad', img: SureShine },
    { title: 'Illustration', img: Building },
    { title: 'Apple Music Album Cover', img: Devine },
  ];
  // const handleTogglePlay = () => {
  //   if (!swiperRef.current) return;

  //   if (isPlaying) {
  //     swiperRef.current.autoplay.stop();
  //   } else {
  //     swiperRef.current.autoplay.start();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        {/* Header */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center" sx={{ mb: 4 }}>
          <Avatar
            alt="Danielle Goldberg"
            src={Headshot}
            sx={{
              width: 96, height: 96,
              boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 0 0 6px ${theme.palette.secondary.main}33`
            }}
          />
          <Stack spacing={1} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h1" sx={{ lineHeight: 1 }}>Danielle Goldberg</Typography>
            <Grid container spacing={1}>
              <Grid item><Chip label="Digital Design" color="secondary" variant="outlined" /></Grid>
              <Grid item><Chip label="Full-Stack Web Development" color="primary" variant="outlined" /></Grid>
            </Grid>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720 }}>
              Full-stack developer & designer — building engaging experiences for web and print.
            </Typography>
          </Stack>
        </Stack>

        {/* Carousel */}
        <Box sx={{
          borderRadius: 3,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 8px 22px rgba(0,0,0,0.06)',
          position: 'relative',
          // Themed Swiper arrows
          '& .swiper-button-next, & .swiper-button-prev': {
            color: '#2A7F7F',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '50%',
            width: 40, height: 40,
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            '&:after': { fontSize: '18px', fontWeight: 'bold' },
          },
          '& .swiper-button-next:hover, & .swiper-button-prev:hover': {
            backgroundColor: '#2A7F7F',
            color: theme.palette.background.paper,
          },
        }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            navigation
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            style={{ width: '100%', height: '100%' }}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.title}>
                {/* <Button
                  variant="contained"
                  //onClick={handleTogglePlay}
                  sx={{ mt: 2 }}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button> */}
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={s.img}
                    alt={s.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0, right: 0, bottom: 0,
                      bgcolor: 'rgba(0,0,0,0.35)',
                      color: '#fff',
                      px: 2, py: 1.2,
                      typography: 'subtitle1',
                    }}
                  >
                    {s.title}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
