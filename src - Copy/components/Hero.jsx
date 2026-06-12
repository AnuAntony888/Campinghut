import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero({ onOpenBooking }) {
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('logo-story');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundColor: '#081c15',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Zooming Background Image (Ken Burns Effect) */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.06] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.45), rgba(8, 28, 21, 0.75)), url("/hero_background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ zIndex: 2, position: 'relative' }}>
        <Box>
          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '5px',
                color: 'secondary.light',
                fontWeight: 700,
                mb: 2.5,
                fontSize: { xs: '0.85rem', sm: '1rem' },
                display: 'inline-block',
                borderBottom: '2px solid rgba(217, 119, 6, 0.4)',
                pb: 1,
              }}
            >
              Experience Kavunji, Kodaikanal
            </Typography>
          </motion.div>

          {/* Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.2rem', sm: '4.8rem', md: '5.8rem' },
                lineHeight: { xs: '1.2', sm: '1.1' },
                fontWeight: 800,
                mb: 3,
                color: '#ffffff',
                fontFamily: '"Playfair Display", serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              TrailNest Camping
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 300,
                mb: 5,
                mx: 'auto',
                maxWidth: '650px',
                fontSize: { xs: '1.15rem', sm: '1.45rem' },
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: '1.65',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Simple Stays. Real Peace.<br />
              <Box component="span" sx={{ fontSize: '1.1rem', opacity: 0.85, display: 'block', mt: 1, fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
                Premium wilderness sanctuaries designed for absolute comfort and digital detox.
              </Box>
            </Typography>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => onOpenBooking()}
                sx={{
                  px: 4,
                  py: 1.8,
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(217, 119, 6, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Join the Nest
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleScrollToNext}
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  px: 4,
                  py: 1.8,
                  fontSize: '1rem',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Our Philosophy
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={handleScrollToNext}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0.8,
          transition: 'opacity 0.3s',
          '&:hover': { opacity: 1 },
          zIndex: 2,
        }}
      >
        <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '2px', mb: 0.5 }}>
          Explore Design
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}
