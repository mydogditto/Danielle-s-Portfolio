import * as React from 'react';
import { Box, useTheme } from '@mui/material';

/** Dynamic vine that starts/ends with adjustable offsets */
export function VineRail({ topOffset = 80, bottomOffset = 0 }) {
  const theme = useTheme();
  const stroke = theme.palette.secondary?.main || '#D2691E';

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: topOffset,          // starts after heading
        bottom: bottomOffset,    // leaves room for bottom cap
        left: { xs: 24, sm: '50%' },
        transform: { xs: 'translateX(0)', sm: 'translateX(-50%)' },
        width: 120,
        height: `calc(100% - ${topOffset + bottomOffset}px)`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        width="120"
        height="100%"
        viewBox="0 0 120 100"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 60 0
            C 18 15, 102 25, 60 35
            C 18 50, 102 60, 60 70
            C 30 85, 90 93, 60 100
          "
          stroke={stroke}
          strokeWidth="4"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Box>
  );
}

/** Top cap — flipped + overlaps vine start */
export function RailCapTop({ offset = 80 }) {
  const theme = useTheme();
  const fill = theme.palette.secondary?.main || '#D2691E';
  const capW = 44, capH = 28;
  const overlap = 6; // pixels over vine

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: offset - overlap,
        left: { xs: 24, sm: '50%' },
        transform: {
          xs: `translateX(-7px) rotate(180deg)`,
          sm: `translateX(-50%) rotate(180deg)`,
        },
        width: capW,
        height: capH,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg width={capW} height={capH} viewBox={`0 0 ${capW} ${capH}`}>
        <path
          d="M22 2 c -10 -10 -24 -2 -15 6 c 5 4 9 6 15 7 c 6 -1 10 -3 15 -7 c 9 -8 -5 -16 -15 -6 Z"
          fill={fill}
          opacity="0.95"
        />
      </svg>
    </Box>
  );
}

/** Bottom cap — overlaps vine end */
export function RailCapBottom({ offset = 0 }) {
  const theme = useTheme();
  const fill = theme.palette.secondary?.main || '#D2691E';
  const capW = 44, capH = 28;
  const overlap = 6; // pixels over vine

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        bottom: offset - overlap,
        left: { xs: 24, sm: '50%' },
        transform: { xs: `translateX(-7px)`, sm: `translateX(-50%)` },
        width: capW,
        height: capH,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg width={capW} height={capH} viewBox={`0 0 ${capW} ${capH}`}>
        <path
          d="M22 26 c -10 10 -24 2 -15 -6 c 5 -4 9 -6 15 -7 c 6 1 10 3 15 7 c 9 8 -5 16 -15 6 Z"
          fill={fill}
          opacity="0.95"
        />
      </svg>
    </Box>
  );
}