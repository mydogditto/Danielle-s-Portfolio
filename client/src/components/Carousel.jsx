import * as React from 'react';
import { Box, useTheme, IconButton } from '@mui/material';

// Tiny inline arrow icons (avoid @mui/icons-material weight)
function ArrowLeft(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  );
}

/**
 * Props:
 * - slides: [{ title, img }]  (img should be a public path like "/assets/foo.webp")
 * - interval: ms (autoplay delay) default 6000
 * - aspect: css aspect-ratio string (e.g. "16 / 9")
 * - showDots: boolean
 * - showArrows: boolean
 * - loop: boolean
 */
export default function Carousel({
  slides = [],
  interval = 6000,
  aspect = '16 / 9',
  showDots = true,
  showArrows = true,
  loop = true,
}) {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  // --- Autoplay ---
  React.useEffect(() => {
    if (count <= 1 || interval <= 0) return;
    const id = setInterval(() => next(), interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count, interval]);

  const next = React.useCallback(() => {
    setIndex((i) => {
      const n = i + 1;
      return n >= count ? (loop ? 0 : i) : n;
    });
  }, [count, loop]);

  const prev = React.useCallback(() => {
    setIndex((i) => {
      const p = i - 1;
      return p < 0 ? (loop ? count - 1 : i) : p;
    });
  }, [count, loop]);

  // --- Keyboard support ---
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  // --- Touch (basic swipe) ---
  const touchRef = React.useRef({ x: 0, y: 0 });
  const onTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touchRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches?.[0];
    if (!t) return;
    const dx = t.clientX - touchRef.current.x;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  if (count === 0) return null;

  return (
    <Box
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 8px 22px rgba(0,0,0,0.06)',
        position: 'relative',
        outline: 'none',
      }}
      aria-roledescription="carousel"
      aria-label="Showcase carousel"
    >
      {/* Slides wrapper */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: aspect,
          bgcolor: 'background.paper',
        }}
      >
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <Box
              key={s.title ?? i}
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: active ? 1 : 0,
                transform: `translateX(${active ? 0 : i < index ? '-8px' : '8px'})`,
                transition: 'opacity 320ms ease, transform 320ms ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: active ? 'auto' : 'none',
              }}
              aria-hidden={!active}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              <Box
                component="img"
                src={s.img}
                alt={s.title || ''}
                loading="lazy"
                decoding="async"
                sx={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
              {(s.title ?? '').length > 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.35)',
                    color: '#fff',
                    px: 2,
                    py: 1.2,
                    typography: 'subtitle1',
                  }}
                >
                  {s.title}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Arrows */}
      {showArrows && count > 1 && (
        <>
          <IconButton
            aria-label="Previous slide"
            onClick={prev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 12,
              transform: 'translateY(-50%)',
              bgcolor: theme.palette.background.paper,
              width: 40,
              height: 40,
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: '#2A7F7F', '& svg path': { fill: theme.palette.background.paper } },
              '& svg path': { fill: '#2A7F7F' },
            }}
          >
            <ArrowLeft />
          </IconButton>

          <IconButton
            aria-label="Next slide"
            onClick={next}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 12,
              transform: 'translateY(-50%)',
              bgcolor: theme.palette.background.paper,
              width: 40,
              height: 40,
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: '#2A7F7F', '& svg path': { fill: theme.palette.background.paper } },
              '& svg path': { fill: '#2A7F7F' },
            }}
          >
            <ArrowRight />
          </IconButton>
        </>
      )}

      {/* Dots */}
      {showDots && count > 1 && (
        <Box
          role="tablist"
          aria-label="Carousel pagination"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 8,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <Box
                key={i}
                role="tab"
                aria-selected={active}
                aria-controls={`carousel-slide-${i}`}
                onClick={() => setIndex(i)}
                sx={{
                  width: active ? 18 : 8,
                  height: 8,
                  borderRadius: 999,
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  bgcolor: active ? '#2A7F7F' : 'rgba(255,255,255,0.7)',
                  border: '1px solid',
                  borderColor: 'rgba(0,0,0,0.15)',
                }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}