import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const nestLocations = [
  {
    id: 'kodaikanal',
    name: 'Kavunji, Kodaikanal',
    subname: 'Tamil Nadu · 1,920m Above Sea Level',
    status: 'Now Open',
    image: '/kavunji_mountain_view.jpg',
    desc: 'Located on the breathtaking western edge of the Western Ghats. Perched at 1,920m, Kavunji offers mist-covered valleys, terrace farms, hidden waterfalls, and a cool mountain climate. Approximately 35 km from Kodaikanal town — one of the region\'s most beautiful hidden gems.',
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    subname: 'Kerala · Rainforest Highlands',
    status: 'Coming Soon',
    image: '/wayanad_hills.png',
    desc: 'Deep in the lush evergreen landscapes of Kerala\'s highland forests. A future TrailNest destination offering immersive stays surrounded by spice plantations, river valleys, and ancient tribal villages.',
  },
  {
    id: 'coorg',
    name: 'Coorg',
    subname: 'Karnataka · Coffee Estate Hills',
    status: 'Coming Soon',
    image: '/coorg_hills.png',
    desc: 'Nestled in the fragrant coffee and cardamom hills of Karnataka. A future TrailNest retreat amidst bamboo groves, misty waterfalls, and some of South India\'s most scenic hill roads.',
  },
  {
    id: 'kannur',
    name: 'Kannur',
    subname: 'Kerala · Coastal Base',
    status: 'Operations Base',
    image: '/kannur_hills.png',
    desc: 'Home to one of our founding team bases. Kannur is the coastal heart of TrailNest\'s Kerala operations, blending the energy of the Arabian Sea coast with the warmth of North Kerala hospitality.',
  },
];


export default function Destinations({ onNotifyLocation }) {
  return (
    <Box
      id="destinations"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #e8ede9 0%, #dbe2dd 50%, #e8ede9 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 9 }}>
          <Typography
            variant="subtitle2"
            color="secondary"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2px',
              mb: 1,
            }}
          >
            Explore Our Nests
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, mb: 2 }}>
            Our Sanctuaries
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 640, mx: 'auto', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            We operate and develop projects across Kerala, Karnataka, and Tamil Nadu. Each destination is chosen for its natural beauty, authentic character, and potential for meaningful guest experiences.
          </Typography>
        </Box>

        {/* Alternating Overlapping Rows like Bogmallo Beach Resort Weddings */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 14 } }}>
          {nestLocations.map((loc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Box
                key={loc.id}
                component={motion.div}
                initial="initial"
                whileHover="hover"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* 1. Content Card (overlaps the image) */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
                  sx={{
                    width: { xs: 'calc(100% - 32px)', md: '45%' },
                    mx: { xs: 'auto', md: 0 },
                    flexShrink: 0,
                    backgroundColor: '#ffffff',
                    p: { xs: 3, sm: 4, md: 5.5 },
                    borderRadius: '16px',
                    boxShadow: '0 25px 60px rgba(8, 28, 21, 0.12), 0 5px 15px rgba(8, 28, 21, 0.03)',
                    border: '1.5px solid rgba(27, 67, 50, 0.08)',
                    zIndex: 2,
                    order: { xs: 2, md: 1 },
                    marginTop: { xs: '-60px', md: 0 },
                    marginRight: { md: isEven ? '-10%' : 0 },
                    marginLeft: { md: isEven ? 0 : '-10%' },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '3px',
                      color: 'secondary.main',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      mb: 1.5,
                    }}
                  >
                    Sanctuary {idx + 1} • {loc.status}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.6rem' },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    {loc.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2.5 }}>
                    <LocationOnIcon sx={{ color: 'secondary.main', fontSize: '1.1rem' }} />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {loc.subname}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.02rem',
                      mb: 4,
                    }}
                  >
                    {loc.desc}
                  </Typography>

                  {/* Circle-Arrow Interactive CTA Button (inherited hover animation) */}
                  <Box
                    onClick={() => onNotifyLocation(loc.id)}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1.5,
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      component={motion.div}
                      variants={{
                        initial: { scale: 1, borderColor: 'rgba(27, 67, 50, 0.3)', backgroundColor: 'transparent' },
                        hover: { scale: 1.05, borderColor: '#d97706', backgroundColor: 'rgba(217, 119, 6, 0.05)' }
                      }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: '1.5px solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component={motion.span}
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 4 }
                        }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Box>
                    </Box>
                    <Typography
                      component={motion.span}
                      variants={{
                        initial: { color: '#1b4332' },
                        hover: { color: '#d97706' }
                      }}
                      transition={{ duration: 0.3 }}
                      variant="button"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Book Sanctuary
                    </Typography>
                  </Box>

                </Box>


                {/* 2. Image Component */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                  sx={{
                    width: { xs: '100%', md: '65%' },
                    flexShrink: 0,
                    height: { xs: 260, sm: 360, md: 460 },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    zIndex: 1,
                    order: { xs: 1, md: 2 },
                    boxShadow: '0 10px 30px rgba(8, 28, 21, 0.1)',
                    position: 'relative',
                  }}
                >
                  <Box
                    component={motion.div}
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${loc.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Subtle Dark Overlay to bring warmth */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(8, 28, 21, 0.08)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
