import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { VineRail, RailCapTop, RailCapBottom } from './TimelineDecor';

// ---------- Styled (emotion) ----------
const Page = styled('section')(({ theme }) => ({
  background: theme.palette.background?.default ?? '#f9f7f5',
  minHeight: '100vh',
  paddingBlock: theme.spacing ? theme.spacing(6) : 48,
}));

const Wrap = styled('div')(({ theme }) => ({
  maxWidth: 960,
  margin: '0 auto',
  paddingInline: 20,
  position: 'relative',
  color: theme.palette.text?.primary ?? '#222',
}));

const Title = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  margin: 0,
  marginBottom: theme.spacing ? theme.spacing(6) : 48,
  fontFamily: 'Limelight, Lato, sans-serif',
  fontWeight: 400,
}));

const Row = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 120px 1fr',
  gap: theme.spacing ? theme.spacing(3) : 24,
  alignItems: 'start',
  marginBlock: theme.spacing ? theme.spacing(4) : 32,
  [`@media (max-width: 600px)`]: {
    gridTemplateColumns: '24px 1fr',
    gap: theme.spacing ? theme.spacing(2) : 16,
  },
}));

const Dot = styled('div')(({ theme }) => ({
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: theme.palette.secondary?.main ?? '#D2691E',
  boxShadow: `0 0 0 4px ${theme.palette.background?.paper ?? '#fff'}`,
  zIndex: 2,
}));

const CardA = styled('article')(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
  border: `1px solid ${theme.palette.divider ?? 'rgba(0,0,0,0.12)'}`,
  background: theme.palette.background?.paper ?? '#fff',
  position: 'relative',
  zIndex: 1,
  padding: 16,
  transition: 'transform 160ms ease, box-shadow 160ms ease',
}));

const ClickWrap = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  transition: 'transform 160ms ease, box-shadow 160ms ease',
  ':hover': { transform: 'translateY(-2px)' },
});

const Year = styled('span')(({ theme }) => ({
  fontSize: 12,
  letterSpacing: 0.5,
  color: theme.palette.text?.secondary ?? '#666',
  textTransform: 'uppercase',
}));

const H4 = styled('h4')({
  margin: '4px 0 6px',
  fontSize: 20,
  lineHeight: 1.25,
  fontFamily: 'Limelight, Lato, sans-serif',
  fontWeight: 400,
});

const Subtitle = styled('p')(({ theme }) => ({
  margin: '0 0 8px',
  color: theme.palette.text?.secondary ?? '#666',
}));

const Body = styled('p')({
  margin: 0,
  lineHeight: 1.6,
});

const ImgWrap = styled('div')({
  borderRadius: 8,
  overflow: 'hidden',
  marginBottom: 12,
  background: '#fff',
});

// ---------- Component ----------


export default function ArtNouveauTimeline({
  title = 'Timeline',
  items = [],
  topOffset = 80,
  bottomOffset = 80,
}) {
  const theme = useTheme();
  const vineColor = theme.palette.secondary?.main ?? '#D2691E';

  return (
    <Page aria-label={`${title} timeline`}>
      <Wrap>
        <Title>{title}</Title>

        {/* vine + caps */}
        <RailCapTop offset={topOffset} color={vineColor} />
        <VineRail topOffset={topOffset} bottomOffset={bottomOffset} color={vineColor} />
        <RailCapBottom offset={bottomOffset} color={vineColor} />

        {/* items */}
        <div>
          {items.map((it, idx) => {
            const leftSide = it.side ? it.side === 'left' : idx % 2 === 0;

            const CardInner = (
              <CardA>
                {it.image && (
                  <ImgWrap>
                    <picture>
                      {it.imageAvif && <source srcSet={it.imageAvif} type="image/avif" />}
                      {it.imageWebp && <source srcSet={it.imageWebp} type="image/webp" />}
                      <img
                        src={it.image}
                        alt={it.title || ''}
                        loading="lazy"
                        decoding="async"
                        style={{ display: 'block', width: '100%', height: 'auto' }}
                      />
                    </picture>
                  </ImgWrap>
                )}

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  {it.year && <Year>{it.year}</Year>}
                  <H4>{it.title}</H4>
                </div>

                {it.subtitle && <Subtitle>{it.subtitle}</Subtitle>}
                {it.description && <Body>{it.description}</Body>}
              </CardA>
            );

            const MaybeLink = it.href ? (
              <ClickWrap
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${it.title} (opens in new tab)`}
              >
                {CardInner}
              </ClickWrap>
            ) : (
              CardInner
            );

            return (
              <Row key={it.id ?? `${it.title}-${idx}`}>
                {/* left column (hidden on mobile if not used) */}
                <div
                  style={{
                    display: 'none',
                    visibility: leftSide ? 'visible' : 'hidden',
                  }}
                  className="timeline-left-desktop"
                />
                {/* center dot */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    paddingLeft: 4,
                  }}
                >
                  <Dot />
                </div>
                {/* right column / actual card */}
                <div>{MaybeLink}</div>

                {/* small-screen layout tweak via CSS only */}
                <style>{`
                  @media (min-width: 600px) {
                    .timeline-left-desktop {
                      display: block !important;
                    }
                    /* Alternate sides on desktop */
                    .timeline-row-${idx} {
                      grid-template-columns: 1fr 120px 1fr;
                    }
                  }
                `}</style>
              </Row>
            );
          })}
        </div>
      </Wrap>
    </Page>
  );
}
// export default ArtNouveauTimeline