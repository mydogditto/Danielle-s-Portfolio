import * as React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
// import nicksBricks from '../components/assets/Nick Bricks.jpg'
/** ========= Styled Bits ========= **/
const TimelineWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingBlock: theme.spacing(8),
  // This keeps good contrast on your Muted Peach background.
  color: theme.palette.text.primary,
}));

const Rail = ({ height = 800 }) => {
  const theme = useTheme();
  const terracotta = theme.palette.secondary?.main || '#D2691E';

  // A flowing “whiplash” line down the page:
  const stroke = terracotta;
  const w = 120; // SVG width
  const h = height;

  // Curvy path: moves like an S down the page
  const d = `M ${w / 2},0 
             C ${w * 0.1},${h * 0.15} ${w * 0.9},${h * 0.25} ${w / 2},${h * 0.35}
             C ${w * 0.1},${h * 0.50} ${w * 0.9},${h * 0.60} ${w / 2},${h * 0.72}
             C ${w * 0.2},${h * 0.85} ${w * 0.8},${h * 0.92} ${w / 2},${h}`;

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: 0,
        left: { xs: 24, sm: '50%' },
        transform: { xs: 'translateX(0)', sm: 'translateX(-50%)' },
        width: w,
        height: h,
        pointerEvents: 'none',
        opacity: 0.9,
      }}
    >
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
        {/* Top ornament */}
        <path
          d={`M ${w / 2} 6
              c -18 -18 -42 -4 -26 10
              c 8 7 16 10 26 12
              c 10 -2 18 -5 26 -12
              c 16 -14 -8 -28 -26 -10 Z`}
          fill={stroke}
          opacity="0.9"
        />
        {/* Main vine */}
        <path d={d} stroke={stroke} strokeWidth="4" fill="none" />
        {/* Bottom ornament */}
        <path
          d={`M ${w / 2} ${h - 6}
              c -18 18 -42 4 -26 -10
              c 8 -7 16 -10 26 -12
              c 10 2 18 5 26 12
              c 16 14 -8 28 -26 10 Z`}
          fill={stroke}
          opacity="0.9"
        />
      </svg>
    </Box>
  );
};

const Dot = styled(Box)(({ theme }) => ({
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: theme.palette.secondary?.main || '#D2691E',
  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
  zIndex: 2,
}));

const ItemRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 120px 1fr', // left | rail | right
  gap: theme.spacing(3),
  alignItems: 'center',
  marginBlock: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '24px 1fr', // rail | content
    gap: theme.spacing(2),
  },
}));

const CardShell = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}));

/** ========= Component ========= **/
/**
 * items: Array<{ id?: string|number, side?: 'left'|'right', year?: string, title: string, subtitle?: string, description?: string }>
 */
export default function ArtNouveauTimeline({
  items = [],
  title = 'Timeline',
  heightHint = 900, // for the SVG vine height
}) {
  const theme = useTheme();

  return (
    <TimelineWrapper role="region" aria-label="Art Nouveau Timeline">
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
        {title}
      </Typography>

      {/* Curvy terracotta vine */}
      <Rail height={Math.max(heightHint, items.length * 200)} />

      <Box>
        {items.map((it, idx) => {
          const leftSide = it.side
            ? it.side === 'left'
            : idx % 2 === 0; // alternate by default

          return (
            <ItemRow key={it.id ?? idx}>
              {/* Left column */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  visibility: leftSide ? 'visible' : 'hidden',
                }}
              >
                {leftSide && (

                  <CardContent>
                    {it.image && (
                      <Box
                        component="img"
                        src={it.image}
                        alt={it.title}
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          mb: 2,
                          boxShadow: 2,
                        }}
                      />
                    )}
                    {it.year && (
                      <Typography
                        variant="overline"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {it.year}
                      </Typography>
                    )}
                    <Typography variant="h4" gutterBottom>
                      {it.title}
                    </Typography>
                    {it.subtitle && (
                      <Typography variant="subtitle1" gutterBottom>
                        {it.subtitle}
                      </Typography>
                    )}
                    {it.description && (
                      <Typography variant="body1">{it.description}</Typography>
                    )}
                  </CardContent>

                )}
              </Box>

              {/* Rail column with anchor dot */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'flex-start', sm: 'center' },
                  height: '100%',
                  pl: { xs: 0.5, sm: 0 },
                }}
              >
                <Dot />
              </Box>

              {/* Right column (on mobile this becomes the only content column) */}
              <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
                {(!leftSide || (leftSide && window.innerWidth < 600)) && (
                  <CardShell sx={{ mt: { xs: 0, sm: 0 } }}>
                    <CardContent>
                      {/* On mobile, show the year here since left card is hidden */}
                      {it.year && (
                        <Typography
                          variant="overline"
                          sx={{
                            color: theme.palette.text.secondary,
                            display: { xs: 'inline-block', sm: leftSide ? 'none' : 'inline-block' },
                          }}
                        >
                          {it.year}
                        </Typography>
                      )}
                      <Typography variant="h4" gutterBottom>
                        {it.title}
                      </Typography>
                      {it.subtitle && (
                        <Typography variant="subtitle1" gutterBottom>
                          {it.subtitle}
                        </Typography>
                      )}
                      {it.description && (
                        <Typography variant="body1">{it.description}</Typography>
                      )}
                    </CardContent>
                  </CardShell>
                )}
              </Box>
            </ItemRow>
          );
        })}
      </Box>
    </TimelineWrapper>
  );
}