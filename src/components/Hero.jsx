import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero({ onOpenBooking }) {
  const handleScrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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
      {/* Floating Particle Layer */}
      {[...Array(14)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, (i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : 0.5) * 30],
            opacity: [0, 0.7, 0],
            scale: [0.6, 1.1, 0.6],
          }}
          transition={{
            duration: 8 + (i * 1.3),
            repeat: Infinity,
            delay: i * 1.1,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            bottom: `${(i * 7) % 30}%`,
            left: `${(i * 71) % 100}%`,
            width: i % 4 === 0 ? 10 : 6,
            height: i % 4 === 0 ? 10 : 6,
            borderRadius: i % 3 === 0 ? '50%' : '2px',
            backgroundColor: i % 2 === 0 ? 'rgba(217,119,6,0.4)' : 'rgba(255,255,255,0.18)',
            zIndex: 1,
            pointerEvents: 'none',
            transform: i % 3 === 0 ? 'rotate(45deg)' : 'none',
          }}
        />
      ))}

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
                letterSpacing: '6px',
                color: 'secondary.light',
                fontWeight: 600,
                mb: 2.5,
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                fontFamily: '"Cinzel", serif',
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
                fontSize: { xs: '4rem', sm: '6rem', md: '7.5rem' },
                lineHeight: { xs: '1.1', sm: '1.05' },
                fontWeight: 700,
                mb: 1,
                color: '#ffffff',
                fontFamily: '"Dancing Script", cursive',
                textShadow: '0 4px 24px rgba(0,0,0,0.5)',
              }}
            >
              TrailNest Camping
            </Typography>
            {/* BY AMG sub-label — Cinzel style */}
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 600,
                letterSpacing: '6px',
                fontSize: { xs: '0.7rem', sm: '0.85rem' },
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              — BY AMG —
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
                fontSize: { xs: '1.1rem', sm: '1.35rem' },
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: '1.7',
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Simple Stays. Real Peace.<br />
              <Box component="span" sx={{ fontSize: '1rem', opacity: 0.75, display: 'block', mt: 1, fontWeight: 300, fontFamily: '"Montserrat", sans-serif', fontStyle: 'italic' }}>
                Come and enjoy an ordinary stay with extraordinary views. Kavunji – Kodaikanal.
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
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -4,
                    borderRadius: 'inherit',
                    border: '2px solid rgba(217,119,6,0.4)',
                    animation: 'pulseRing 2s ease-out infinite',
                  },
                  '@keyframes pulseRing': {
                    '0%': { transform: 'scale(1)', opacity: 0.8 },
                    '100%': { transform: 'scale(1.35)', opacity: 0 },
                  },
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
                onClick={() => handleScrollToSection('about')}
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
        onClick={() => handleScrollToSection('destinations')}
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
          Explore Nests
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}
