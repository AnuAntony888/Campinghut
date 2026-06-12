import React, { useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

// ─── Data ────────────────────────────────────────────────────────────────────

const galleryImages = [
  { src: '/kavunji_aframe_orange.jpg',  label: 'A-Frame Tower – Kavunji',   span: 2 },
  { src: '/kavunji_valley_gorge.jpg',   label: 'Valley Gorge View',          span: 1 },
  { src: '/kavunji_mountain_view.jpg',  label: 'Mountain Panorama',          span: 2 },
  { src: '/kavunji_aframe_black.jpg',   label: 'A-Frame Tower – Black',      span: 1 },
  { src: '/kavunji_aframe_trees.jpg',   label: 'Hidden in the Trees',        span: 1 },
  { src: '/gallery_campfire.png',       label: 'Campfire Nights',            span: 1 },
];

const testimonials = [
  {
    quote: "The most transformative three days of my life. No phone, no noise — just the forest and myself. I returned to the city a different person.",
    name: 'Priya M.',
    location: 'Mumbai',
    stars: 5,
  },
  {
    quote: "TrailNest redefines glamping. The forest spa at dawn, the campfire dinners, and waking to mist rolling through pine valleys — absolutely magical.",
    name: 'Arjun K.',
    location: 'Bengaluru',
    stars: 5,
  },
  {
    quote: "I've stayed at 5-star resorts worldwide but TrailNest gave me something money can't easily buy — silence, stars, and real peace. Extraordinary.",
    name: 'Meera & Vikram',
    location: 'Delhi',
    stars: 5,
  },
];

const stats = [
  { icon: <NaturePeopleIcon sx={{ fontSize: '1.8rem' }} />, value: '2,800+', label: 'Happy Guests' },
  { icon: <HotelIcon sx={{ fontSize: '1.8rem' }} />,        value: '5',      label: 'Unique Nests' },
  { icon: <LocalFloristIcon sx={{ fontSize: '1.8rem' }} />, value: '98%',    label: 'Return Rate' },
  { icon: <EmojiNatureIcon sx={{ fontSize: '1.8rem' }} />,  value: '4.9★',   label: 'Guest Rating' },
];

// ─── Infinite scrolling strip component ──────────────────────────────────────
function AutoScrollStrip() {
  const images = [...galleryImages, ...galleryImages]; // duplicate for seamless loop

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        py: 1,
        // Fade edges
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: 120,
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, #0b1f14, transparent)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #0b1f14, transparent)',
        },
      }}
    >
      <Box
        component={motion.div}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        sx={{
          display: 'flex',
          gap: 2,
          width: 'max-content',
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            sx={{
              position: 'relative',
              flexShrink: 0,
              width: img.span === 2 ? 420 : 260,
              height: 280,
              borderRadius: 3,
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.label}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'scale(1.06)' },
              }}
            />
            {/* Label overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(8,28,21,0.85) 0%, transparent 100%)',
                px: 2,
                py: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}
              >
                {img.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Gallery() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax vertical shift for decorative orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], ['-30px', '60px']);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ['60px', '-40px']);

  return (
    <Box
      id="gallery"
      ref={sectionRef}
      sx={{
        background: 'linear-gradient(160deg, #0b1f14 0%, #1b4332 50%, #0b1f14 100%)',
        overflow: 'hidden',
        position: 'relative',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* Decorative blurred orbs */}
      <Box
        component={motion.div}
        style={{ y: orbY1 }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-8%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        style={{ y: orbY2 }}
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,67,50,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Section Header ── */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: 'rgba(217,119,6,0.85)',
                fontWeight: 700,
                fontSize: '0.75rem',
                mb: 2,
              }}
            >
              Life at TrailNest
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 800,
                color: '#ffffff',
                fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Moments That{' '}
              <Box
                component="span"
                sx={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(217,119,6,0.9)' }}
              >
                Stay With You
              </Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '1rem',
                maxWidth: 560,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Real photos from our Kavunji property — the A-Frame towers, mountain valleys, and the views that await you.
            </Typography>
          </motion.div>
        </Box>

        {/* ── Highlighted Real Property Photo Grid ── */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          {/* Big featured row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
              gridTemplateRows: { md: '320px' },
              gap: 2,
              mb: 2,
            }}
          >
            {/* Large hero image */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                height: { xs: 260, md: '100%' },
                '&:hover img': { transform: 'scale(1.06)' },
                // Premium amber glow highlight border
                outline: '2px solid rgba(217,119,6,0.5)',
                outlineOffset: '4px',
              }}
            >
              <Box
                component="img"
                src="/kavunji_aframe_orange.jpg"
                alt="A-Frame Tower - TrailNest Kavunji"
                sx={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />
              <Box sx={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(8,28,21,0.9) 0%, transparent 60%)',
                p: 2.5,
              }}>
                <Box sx={{ display: 'inline-block', background: 'rgba(217,119,6,0.9)', px: 1.5, py: 0.4, borderRadius: 1, mb: 1 }}>
                  <Typography sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: '"Cinzel", serif' }}>
                    Now Open
                  </Typography>
                </Box>
                <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', fontFamily: '"Dancing Script", cursive' }}>
                  A-Frame Couple Tower
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem' }}>
                  Kavunji, Kodaikanal · Tamil Nadu
                </Typography>
              </Box>
            </Box>

            {/* Middle image */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative', height: { xs: 200, md: '100%' }, '&:hover img': { transform: 'scale(1.06)' } }}
            >
              <Box component="img" src="/kavunji_valley_gorge.jpg" alt="Kavunji Valley" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(8,28,21,0.8) 0%, transparent 60%)', p: 2 }}>
                <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.5px' }}>Valley Gorge View</Typography>
              </Box>
            </Box>

            {/* Right image */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative', height: { xs: 200, md: '100%' }, '&:hover img': { transform: 'scale(1.06)' } }}
            >
              <Box component="img" src="/kavunji_mountain_view.jpg" alt="Kavunji Mountain Panorama" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(8,28,21,0.8) 0%, transparent 60%)', p: 2 }}>
                <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.5px' }}>Mountain Panorama</Typography>
              </Box>
            </Box>
          </Box>

          {/* Bottom row: 2 images */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.4fr' },
              gridTemplateRows: { md: '260px' },
              gap: 2,
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              sx={{ borderRadius: 3, overflow: 'hidden', position: 'relative', height: { xs: 200, md: '100%' }, '&:hover img': { transform: 'scale(1.06)' } }}
            >
              <Box component="img" src="/kavunji_aframe_black.jpg" alt="A-Frame Black" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(8,28,21,0.8) 0%, transparent 60%)', p: 2 }}>
                <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>A-Frame Tower · View</Typography>
              </Box>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              sx={{
                borderRadius: 3, overflow: 'hidden', position: 'relative',
                height: { xs: 200, md: '100%' },
                '&:hover img': { transform: 'scale(1.06)' },
                outline: '2px solid rgba(27,67,50,0.6)',
                outlineOffset: '4px',
              }}
            >
              <Box component="img" src="/kavunji_aframe_trees.jpg" alt="A-Frame Nestled in Trees" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(8,28,21,0.9) 0%, transparent 60%)', p: 2.5 }}>
                <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', fontFamily: '"Dancing Script", cursive' }}>Hidden in the Hills</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>Nestled amongst the trees of Kavunji</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ── Auto-Scrolling Photo Strip ── */}
      <Box sx={{ mb: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
        <AutoScrollStrip />
      </Box>

      {/* ── Stats Bar ── */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mb: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, md: 0 },
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {stats.map((s, i) => (
              <Box
                key={i}
                sx={{
                  flex: { xs: '1 1 45%', md: '1 1 0' },
                  px: { xs: 3, md: 5 },
                  py: 4,
                  textAlign: 'center',
                  borderRight: { md: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' },
                  borderBottom: { xs: i < stats.length - 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', md: 'none' },
                  transition: 'background 0.3s ease',
                  '&:hover': { background: 'rgba(255,255,255,0.05)' },
                }}
              >
                <Box sx={{ color: 'rgba(217,119,6,0.85)', mb: 1 }}>{s.icon}</Box>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: '2rem', md: '2.4rem' },
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* ── Testimonials ── */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4 },
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.07)',
                      borderColor: 'rgba(217,119,6,0.3)',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  {/* Stars */}
                  <Box sx={{ display: 'flex', gap: 0.3, mb: 2.5 }}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <StarIcon key={si} sx={{ color: '#d97706', fontSize: '1rem' }} />
                    ))}
                  </Box>

                  {/* Quote icon */}
                  <FormatQuoteIcon
                    sx={{
                      fontSize: '2.5rem',
                      color: 'rgba(217,119,6,0.35)',
                      display: 'block',
                      mb: 1,
                      transform: 'scaleX(-1)',
                    }}
                  />

                  {/* Quote text */}
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.78)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                      mb: 3,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    "{t.quote}"
                  </Typography>

                  {/* Author */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pt: 2.5,
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d97706, #1b4332)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>
                        {t.name[0]}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
                        {t.name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                        {t.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
