import * as React from 'react';
import { Box, useTheme } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Devine from '/public/assets/tinified/Devine Solitude.png';
import Building from '/public/assets/tinified/Building.png';
import SureShine from '/public/assets/tinified/SureShine.png';

export default function Carousel() {
  const theme = useTheme();

  const slides = [
    { title: 'SureShine Magazine Ad', img: SureShine },
    { title: 'Illustration', img: Building },
    { title: 'Apple Music Album Cover', img: Devine },
  ];

  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 8px 22px rgba(0,0,0,0.06)',
        position: 'relative',
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
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}     // keep only what you use
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.title}>
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
                loading="lazy"
                decoding="async"
                sx={{
                  width: '100%',
                  height: '100%',
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
  );
}