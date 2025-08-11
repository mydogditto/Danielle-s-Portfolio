import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { VineRail, RailCapTop, RailCapBottom } from '../components/TimelineDecor';

// --- Styled wrappers ---
const PageWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  paddingBlock: theme.spacing(6),
}));

const TimelineWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.text.primary,
}));

const ItemRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 120px 1fr',
  gap: theme.spacing(3),
  alignItems: 'center',
  marginBlock: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '24px 1fr',
    gap: theme.spacing(2),
  },
}));

const CardShell = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  position: 'relative',
  zIndex: 1,
}));

const Dot = styled(Box)(({ theme }) => ({
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: theme.palette.secondary?.main || '#D2691E',
  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
  zIndex: 2,
}));



export default function ArtNouveauTimeline({
  title = 'Timeline',
  items = [],
  topOffset = 80,
  bottomOffset = 80,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineWrapper role="region" aria-label={`${title} timeline`}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>{title}</Typography>

      <RailCapTop offset={topOffset} />
      <VineRail topOffset={topOffset} bottomOffset={bottomOffset} />
      <RailCapBottom offset={bottomOffset} />

      <Box>
        {items.map((it, idx) => {
          const leftSide = it.side ? it.side === 'left' : idx % 2 === 0;
          const showRightCard = !leftSide || isMobile;

          return (
            <ItemRow key={it.id ?? idx}>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, visibility: leftSide ? 'visible' : 'hidden' }}>
                {leftSide && (
                  <CardShell>
                    <CardContent>
                      {it.image && <Box component="img" src={it.image} alt={it.title} sx={{ width: '100%', borderRadius: 2, mb: 2, boxShadow: 2 }} />}
                      {it.year && <Typography variant="overline" sx={{ color: 'text.secondary' }}>{it.year}</Typography>}
                      <Typography variant="h4" gutterBottom>{it.title}</Typography>
                      {it.subtitle && <Typography variant="subtitle1" gutterBottom>{it.subtitle}</Typography>}
                      {it.description && <Typography variant="body1">{it.description}</Typography>}
                    </CardContent>
                  </CardShell>
                )}
              </Box>

              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'center' }, height: '100%', pl: { xs: 0.5, sm: 0 } }}>
                <Dot />
              </Box>

              <Box>
                {showRightCard && (
                  <CardShell>
                    <CardContent>
                      {it.image && <Box component="img" src={it.image} alt={it.title} sx={{ width: '100%', borderRadius: 2, mb: 2, boxShadow: 2 }} />}
                      {it.year && <Typography variant="overline" sx={{ color: 'text.secondary' }}>{it.year}</Typography>}
                      <Typography variant="h4" gutterBottom>{it.title}</Typography>
                      {it.subtitle && <Typography variant="subtitle1" gutterBottom>{it.subtitle}</Typography>}
                      {it.description && <Typography variant="body1">{it.description}</Typography>}
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
// export default ArtNouveauTimeline